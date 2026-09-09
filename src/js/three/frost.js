import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BufferGeometry,
  BufferAttribute,
  Points,
  ShaderMaterial,
  AdditiveBlending,
} from 'three';

/**
 * Frost layer — a GPU snow field composited over the page with additive
 * blending. It sits above the content, so it has to stay sparse: an earlier
 * full-screen haze pass screen-blended over the UI and washed it out.
 *
 * Practices kept deliberately tight: one geometry, one draw call per layer, all
 * motion in the vertex shader (no per-frame CPU loops), pixel ratio capped at 2,
 * a single shared ticker, render paused while the tab is hidden, and full
 * disposal on teardown.
 */

const SNOW_VERT = /* glsl */ `
  attribute float aSize;
  attribute float aSpeed;
  attribute float aPhase;
  attribute float aDepth;

  uniform float uTime;
  uniform float uScroll;
  uniform vec2  uMouse;
  uniform float uSpan;
  uniform float uPixelRatio;

  varying float vAlpha;

  void main() {
    vec3 p = position;

    // fall + wrap inside the visible span
    float fall = mod(p.y - uTime * aSpeed - uScroll * 0.55 * aDepth, uSpan) - uSpan * 0.5;
    p.y = fall;

    // wind sway, phase-offset per flake
    p.x += sin(uTime * 0.55 * aSpeed + aPhase) * (1.4 + aDepth * 2.2);
    p.z += cos(uTime * 0.32 + aPhase) * 0.6;

    // parallax against the pointer, stronger for near flakes
    p.xy += uMouse * (0.9 + aDepth * 3.4);

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = aSize * uPixelRatio * (34.0 / -mv.z);

    // fade the far field and the flakes near the wrap seam
    vAlpha = (0.25 + aDepth * 0.75) * smoothstep(uSpan * 0.5, uSpan * 0.22, abs(fall));
  }
`;

const SNOW_FRAG = /* glsl */ `
  precision mediump float;
  varying float vAlpha;
  uniform float uOpacity;

  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    if (d > 0.5) discard;
    float core = smoothstep(0.5, 0.02, d);
    gl_FragColor = vec4(vec3(0.86, 0.92, 0.99), core * vAlpha * uOpacity);
  }
`;

export function createFrost(canvas, { count = 1200, ticker } = {}) {
  if (!canvas) return null;

  const scene = new Scene();
  const camera = new PerspectiveCamera(58, 1, 0.1, 260);
  camera.position.z = 62;

  let renderer;
  try {
    renderer = new WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance',
    });
  } catch {
    return null; // no WebGL — the page still works without the layer
  }
  renderer.setClearAlpha(0);

  const dpr = () => Math.min(window.devicePixelRatio || 1, 2);
  const SPAN = 150;

  /* ── snow ──────────────────────────────────────────────── */
  const geo = new BufferGeometry();
  const pos = new Float32Array(count * 3);
  const size = new Float32Array(count);
  const speed = new Float32Array(count);
  const phase = new Float32Array(count);
  const depth = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    const d = Math.random();
    pos[i * 3] = (Math.random() - 0.5) * 190;
    pos[i * 3 + 1] = Math.random() * SPAN;
    pos[i * 3 + 2] = -60 + d * 82;
    size[i] = 0.6 + Math.pow(d, 2.4) * 4.6;
    speed[i] = 1.6 + Math.random() * 4.4;
    phase[i] = Math.random() * Math.PI * 2;
    depth[i] = d;
  }

  geo.setAttribute('position', new BufferAttribute(pos, 3));
  geo.setAttribute('aSize', new BufferAttribute(size, 1));
  geo.setAttribute('aSpeed', new BufferAttribute(speed, 1));
  geo.setAttribute('aPhase', new BufferAttribute(phase, 1));
  geo.setAttribute('aDepth', new BufferAttribute(depth, 1));

  const snowMat = new ShaderMaterial({
    vertexShader: SNOW_VERT,
    fragmentShader: SNOW_FRAG,
    uniforms: {
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uMouse: { value: [0, 0] },
      uSpan: { value: SPAN },
      uPixelRatio: { value: dpr() },
      uOpacity: { value: 0.6 },
    },
    transparent: true,
    depthWrite: false,
    depthTest: false,
    blending: AdditiveBlending,
  });

  const snow = new Points(geo, snowMat);
  scene.add(snow);

  /* ── sizing ────────────────────────────────────────────── */
  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setPixelRatio(dpr());
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    snowMat.uniforms.uPixelRatio.value = dpr();
  }
  resize();
  window.addEventListener('resize', resize);

  /* ── input ─────────────────────────────────────────────── */
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  const onMove = (e) => {
    mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
    mouse.ty = -(e.clientY / window.innerHeight - 0.5) * 2;
  };
  window.addEventListener('pointermove', onMove, { passive: true });

  let scroll = 0;
  const setScroll = (v) => {
    scroll = v;
  };

  /* ── loop ──────────────────────────────────────────────── */
  let hidden = document.hidden;
  const onVis = () => {
    hidden = document.hidden;
  };
  document.addEventListener('visibilitychange', onVis);

  const tick = (time, delta) => {
    if (hidden) return;
    const dt = Math.min(delta, 50) / 1000;

    mouse.x += (mouse.tx - mouse.x) * Math.min(dt * 3.2, 1);
    mouse.y += (mouse.ty - mouse.y) * Math.min(dt * 3.2, 1);

    const t = time;
    snowMat.uniforms.uTime.value = t;
    snowMat.uniforms.uScroll.value = scroll * 0.012;
    snowMat.uniforms.uMouse.value[0] = mouse.x;
    snowMat.uniforms.uMouse.value[1] = mouse.y;

    renderer.render(scene, camera);
  };

  if (ticker) ticker.add(tick);

  /* ── teardown ──────────────────────────────────────────── */
  function dispose() {
    if (ticker) ticker.remove(tick);
    window.removeEventListener('resize', resize);
    window.removeEventListener('pointermove', onMove);
    document.removeEventListener('visibilitychange', onVis);
    geo.dispose();
    snowMat.dispose();
    renderer.dispose();
  }

  /** Renders a single frame at an arbitrary time — used by tooling/tests. */
  function renderAt(time = 0) {
    snowMat.uniforms.uTime.value = time;
    renderer.render(scene, camera);
  }

  return { setScroll, resize, dispose, renderer, renderAt };
}
