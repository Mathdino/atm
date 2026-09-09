(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Hi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function sm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ca={duration:.5,overwrite:!1,delay:0},Qf,on,Dt,ui=1e8,bt=1/ui,bu=Math.PI*2,Ig=bu/4,Ug=0,om=Math.sqrt,Ng=Math.cos,Fg=Math.sin,nn=function(e){return typeof e=="string"},kt=function(e){return typeof e=="function"},er=function(e){return typeof e=="number"},eh=function(e){return typeof e>"u"},Ii=function(e){return typeof e=="object"},Dn=function(e){return e!==!1},th=function(){return typeof window<"u"},Ia=function(e){return kt(e)||nn(e)},am=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},pn=Array.isArray,Og=/random\([^)]+\)/g,Bg=/,\s*/g,Wh=/(?:-?\.?\d|\.)+/gi,lm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,qs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ec=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,cm=/[+-]=-?[.\d]+/,kg=/[^,'"\[\]\s]+/gi,zg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Nt,Mi,Au,nh,Qn={},Hl={},um,fm=function(e){return(Hl=lo(e,Qn))&&Bn},ih=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ua=function(e,t){return!t&&console.warn(e)},hm=function(e,t){return e&&(Qn[e]=t)&&Hl&&(Hl[e]=t)||Qn},fa=function(){return 0},Vg={suppressEvents:!0,isStart:!0,kill:!1},bl={suppressEvents:!0,kill:!1},Hg={suppressEvents:!0},rh={},Tr=[],wu={},dm,qn={},Tc={},Xh=30,Al=[],sh="",oh=function(e){var t=e[0],n,i;if(Ii(t)||kt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Al.length;i--&&!Al[i].targetTest(t););n=Al[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Nm(e[i],n)))||e.splice(i,1);return e},rs=function(e){return e._gsap||oh(fi(e))[0]._gsap},pm=function(e,t,n){return(n=e[t])&&kt(n)?e[t]():eh(n)&&e.getAttribute&&e.getAttribute(t)||n},Ln=function(e,t){return(e=e.split(",")).forEach(t)||e},Ht=function(e){return Math.round(e*1e5)/1e5||0},Ut=function(e){return Math.round(e*1e7)/1e7||0},Js=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Gg=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Gl=function(){var e=Tr.length,t=Tr.slice(0),n,i;for(wu={},Tr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ah=function(e){return!!(e._initted||e._startAt||e.add)},mm=function(e,t,n,i){Tr.length&&!on&&Gl(),e.render(t,n,!!(on&&t<0&&ah(e))),Tr.length&&!on&&Gl()},_m=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(kg).length<2?t:nn(e)?e.trim():e},gm=function(e){return e},ei=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Wg=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},lo=function(e,t){for(var n in t)e[n]=t[n];return e},qh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ii(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Wl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Yo=function(e){var t=e.parent||Nt,n=e.keyframes?Wg(pn(e.keyframes)):ei;if(Dn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Xg=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},vm=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},cc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Cr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ss=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},qg=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ru=function(e,t,n,i){return e._startAt&&(on?e._startAt.revert(bl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Yg=function r(e){return!e||e._ts&&r(e.parent)},Yh=function(e){return e._repeat?co(e._tTime,e=e.duration()+e._rDelay)*e:0},co=function(e,t){var n=Math.floor(e=Ut(e/t));return e&&n===e?n-1:n},Xl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},uc=function(e){return e._end=Ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||bt)||0))},fc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ut(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),uc(e),n._dirty||ss(n,e)),e},xm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Xl(e.rawTime(),t),(!t._dur||Aa(0,t.totalDuration(),n)-t._tTime>bt)&&t.render(n,!0)),ss(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-bt}},Ai=function(e,t,n,i){return t.parent&&Cr(t),t._start=Ut((er(n)?n:n||e!==Nt?si(e,n,t):e._time)+t._delay),t._end=Ut(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),vm(e,t,"_first","_last",e._sort?"_start":0),Cu(t)||(e._recent=t),i||xm(e,t),e._ts<0&&fc(e,e._tTime),e},Sm=function(e,t){return(Qn.ScrollTrigger||ih("scrollTrigger",t))&&Qn.ScrollTrigger.create(t,e)},ym=function(e,t,n,i,s){if(ch(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!on&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&dm!==$n.frame)return Tr.push(e),e._lazy=[s,i],1},$g=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Cu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Kg=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&$g(e)&&!(!e._initted&&Cu(e))||(e._ts<0||e._dp._ts<0)&&!Cu(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Aa(0,e._tDur,t),u=co(l,a),e._yoyo&&u&1&&(o=1-o),u!==co(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||on||i||e._zTime===bt||!t&&e._zTime){if(!e._initted&&ym(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?bt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Ru(e,t,n,!0),e._onUpdate&&!n&&Zn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Zn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Cr(e,1),!n&&!on&&(Zn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Zg=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},uo=function(e,t,n,i){var s=e._repeat,o=Ut(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ut(o*(s+1)+e._rDelay*s):o,a>0&&!i&&fc(e,e._tTime=e._tDur*a),e.parent&&uc(e),n||ss(e.parent,e),e},$h=function(e){return e instanceof Pn?ss(e):uo(e,e._dur)},jg={_start:0,endTime:fa,totalDuration:fa},si=function r(e,t,n){var i=e.labels,s=e._recent||jg,o=e.duration()>=ui?s.endTime(!1):e._dur,a,l,c;return nn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(pn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},$o=function(e,t,n){var i=er(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Dn(l.vars.inherit)&&l.parent;o.immediateRender=Dn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new qt(t[0],o,t[s+1])},Nr=function(e,t){return e||e===0?t(e):t},Aa=function(e,t,n){return n<e?e:n>t?t:n},hn=function(e,t){return!nn(e)||!(t=zg.exec(e))?"":t[1]},Jg=function(e,t,n){return Nr(n,function(i){return Aa(e,t,i)})},Pu=[].slice,Mm=function(e,t){return e&&Ii(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ii(e[0]))&&!e.nodeType&&e!==Mi},Qg=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return nn(i)&&!t||Mm(i,1)?(s=n).push.apply(s,fi(i)):n.push(i)})||n},fi=function(e,t,n){return Dt&&!t&&Dt.selector?Dt.selector(e):nn(e)&&!n&&(Au||!fo())?Pu.call((t||nh).querySelectorAll(e),0):pn(e)?Qg(e,n):Mm(e)?Pu.call(e,0):e?[e]:[]},Du=function(e){return e=fi(e)[0]||ua("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return fi(t,n.querySelectorAll?n:n===e?ua("Invalid scope")||nh.createElement("div"):e)}},Em=function(e){return e.sort(function(){return .5-Math.random()})},Tm=function(e){if(kt(e))return e;var t=Ii(e)?e:{each:e},n=os(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return nn(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,d,_){var g=(_||t).length,m=o[g],p,M,y,x,b,w,T,C,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,ui])[1],!S){for(T=-ui;T<(T=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=o[g]=[],p=l?Math.min(S,g)*u-.5:i%S,M=S===ui?0:l?g*f/S-.5:i/S|0,T=0,C=ui,w=0;w<g;w++)y=w%S-p,x=M-(w/S|0),m[w]=b=c?Math.abs(c==="y"?x:y):om(y*y+x*x),b>T&&(T=b),b<C&&(C=b);i==="random"&&Em(m),m.max=T-C,m.min=C,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:c?c==="y"?g/S:S:Math.max(S,g/S))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=hn(t.amount||t.each)||0,n=n&&g<0?h0(n):n}return g=(m[h]-m.min)/m.max||0,Ut(m.b+(n?n(g):g)*m.v)+m.u}},Lu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ut(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(er(n)?0:hn(n))}},bm=function(e,t){var n=pn(e),i,s;return!n&&Ii(e)&&(i=n=e.radius||ui,e.values?(e=fi(e.values),(s=!er(e[0]))&&(i*=i)):e=Lu(e.increment)),Nr(t,n?kt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ui,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:o,s||u===o||er(o)?u:u+hn(o)}:Lu(e))},Am=function(e,t,n,i){return Nr(pn(e)?!t:n===!0?!!(n=0):!i,function(){return pn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},e0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},t0=function(e,t){return function(n){return e(parseFloat(n))+(t||hn(n))}},n0=function(e,t,n){return Rm(e,t,0,1,n)},wm=function(e,t,n){return Nr(n,function(i){return e[~~t(i)]})},i0=function r(e,t,n){var i=t-e;return pn(e)?wm(e,r(0,e.length),t):Nr(n,function(s){return(i+(s-e)%i)%i+e})},r0=function r(e,t,n){var i=t-e,s=i*2;return pn(e)?wm(e,r(0,e.length-1),t):Nr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},ha=function(e){return e.replace(Og,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Bg);return Am(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Rm=function(e,t,n,i,s){var o=t-e,a=i-n;return Nr(s,function(l){return n+((l-e)/o*a||0)})},s0=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=nn(e),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(pn(e)&&!pn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(_){_*=f;var g=Math.min(h,~~_);return u[g](_-g)},n=t}else i||(e=lo(pn(e)?[]:{},e));if(!u){for(l in t)lh.call(a,e,l,"get",t[l]);s=function(_){return hh(_,a)||(o?e.p:e)}}}return Nr(n,s)},Kh=function(e,t,n){var i=e.labels,s=ui,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Zn=function(e,t,n){var i=e.vars,s=i[t],o=Dt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Tr.length&&Gl(),a&&(Dt=a),u=l?s.apply(c,l):s.call(c),Dt=o,u},Oo=function(e){return Cr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!on),e.progress()<1&&Zn(e,"onInterrupt"),e},Ys,Cm=[],Pm=function(e){if(e)if(e=!e.name&&e.default||e,th()||e.headless){var t=e.name,n=kt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:fa,render:hh,add:lh,kill:M0,modifier:y0,rawVars:0},o={targetTest:0,get:0,getSetter:fh,aliases:{},register:0};if(fo(),e!==i){if(qn[t])return;ei(i,ei(Wl(e,s),o)),lo(i.prototype,lo(s,Wl(e,o))),qn[i.prop=t]=i,e.targetTest&&(Al.push(i),rh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}hm(t,i),e.register&&e.register(Bn,i,In)}else Cm.push(e)},Tt=255,Bo={aqua:[0,Tt,Tt],lime:[0,Tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Tt],navy:[0,0,128],white:[Tt,Tt,Tt],olive:[128,128,0],yellow:[Tt,Tt,0],orange:[Tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Tt,0,0],pink:[Tt,192,203],cyan:[0,Tt,Tt],transparent:[Tt,Tt,Tt,0]},bc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Tt+.5|0},Dm=function(e,t,n){var i=e?er(e)?[e>>16,e>>8&Tt,e&Tt]:0:Bo.black,s,o,a,l,c,u,f,h,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Bo[e])i=Bo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Tt,i&Tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Tt,e&Tt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Wh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=bc(l+1/3,s,o),i[1]=bc(l,s,o),i[2]=bc(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(lm),n&&i.length<4&&(i[3]=1),i}else i=e.match(Wh)||Bo.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/Tt,o=i[1]/Tt,a=i[2]/Tt,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Lm=function(e){var t=[],n=[],i=-1;return e.split(br).forEach(function(s){var o=s.match(qs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Zh=function(e,t,n){var i="",s=(e+i).match(br),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=Dm(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Lm(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(br,"1").split(qs),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(br),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},br=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Bo)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),o0=/hsl[a]?\(/,Im=function(e){var t=e.join(" "),n;if(br.lastIndex=0,br.test(t))return n=o0.test(t),e[1]=Zh(e[1],n),e[0]=Zh(e[0],n,Lm(e[1])),!0},da,$n=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,_=function g(m){var p=r()-i,M=m===!0,y,x,b,w;if((p>e||p<0)&&(n+=p-t),i+=p,b=i-n,y=b-o,(y>0||M)&&(w=++f.frame,h=b-f.time*1e3,f.time=b=b/1e3,o+=y+(y>=s?4:s-y),x=1),M||(l=c(g)),x)for(d=0;d<a.length;d++)a[d](b,h,w,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){um&&(!Au&&th()&&(Mi=Au=window,nh=Mi.document||{},Qn.gsap=Bn,(Mi.gsapVersions||(Mi.gsapVersions=[])).push(Bn.version),fm(Hl||Mi.GreenSockGlobals||!Mi.gsap&&Mi||{}),Cm.forEach(Pm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},da=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),da=0,c=fa},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,M){var y=p?function(x,b,w,T){m(x,b,w,T),f.remove(y)}:m;return f.remove(m),a[M?"unshift":"push"](y),fo(),y},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f})(),fo=function(){return!da&&$n.wake()},ft={},a0=/^[\d.\-M][\d.\-,\s]/,l0=/["']/g,c0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(l0,"").trim():+c,i=l.substr(a+1).trim();return t},u0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},f0=function(e){var t=(e+"").split("("),n=ft[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[c0(t[1])]:u0(e).split(",").map(_m)):ft._CE&&a0.test(e)?ft._CE("",e):n},h0=function(e){return function(t){return 1-e(1-t)}},os=function(e,t){return e&&(kt(e)?e:ft[e]||f0(e))||t},Ss=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Ln(e,function(a){ft[a]=Qn[a]=s,ft[o=a.toLowerCase()]=n;for(var l in s)ft[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ft[a+"."+l]=s[l]}),s},Um=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ac=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/bu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Fg((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Um(a);return s=bu/s,l.config=function(c,u){return r(e,c,u)},l},wc=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Um(n);return i.config=function(s){return r(e,s)},i};Ln("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ss(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;Ss("Elastic",Ac("in"),Ac("out"),Ac());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Ss("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ss("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ss("Circ",function(r){return-(om(1-r*r)-1)});Ss("Sine",function(r){return r===1?1:-Ng(r*Ig)+1});Ss("Back",wc("in"),wc("out"),wc());ft.SteppedEase=ft.steps=Qn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-bt;return function(a){return((i*Aa(0,o,a)|0)+s)*n}}};ca.ease=ft["quad.out"];Ln("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return sh+=r+","+r+"Params,"});var Nm=function(e,t){this.id=Ug++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:pm,this.set=t?t.getSetter:fh},pa=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,uo(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),da||$n.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,uo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(fo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(fc(this,n),!s._dp||s.parent||xm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ai(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===bt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),mm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Yh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Yh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?co(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-bt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Xl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-bt?0:this._rts,this.totalTime(Aa(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),uc(this),qg(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(fo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==bt&&(this._tTime-=bt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ut(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ai(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Dn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Xl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Hg);var i=on;return on=n,ah(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),on=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,$h(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,$h(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(si(this,n),Dn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Dn(i)),this._dur||(this._zTime=-bt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-bt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-bt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=kt(n)?n:gm,l=function(){var u=i.then;i.then=null,s&&s(),kt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Oo(this)},r})();ei(pa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-bt,_prom:0,_ps:!1,_rts:1});var Pn=(function(r){sm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Dn(n.sortChildren),Nt&&Ai(n.parent||Nt,Hi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Sm(Hi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return $o(0,arguments,this),this},t.from=function(i,s,o){return $o(1,arguments,this),this},t.fromTo=function(i,s,o,a){return $o(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Yo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qt(i,s,si(this,o),1),this},t.call=function(i,s,o){return Ai(this,qt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new qt(i,o,si(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Yo(o).immediateRender=Dn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,Yo(a).immediateRender=Dn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ut(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,_,g,m,p,M,y,x,b,w,T;if(this!==Nt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,x=this._start,y=this._ts,p=!y,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(h=Ut(u%m),u===l?(g=this._repeat,h=c):(b=Ut(u/m),g=~~b,g&&g===b&&(h=c,g--),h>c&&(h=c)),b=co(this._tTime,m),!a&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),w&&g&1&&(h=c-h,T=1),g!==b&&!this._lock){var C=w&&b&1,S=C===(w&&g&1);if(g<b&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Ut(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Zn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,b=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Zg(this,Ut(a),Ut(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!b&&(Zn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||h>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=-bt);break}}d=_}else{d=this._last;for(var v=i<0?i:h;d;){if(_=d._prev,(d._act||v<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,o||on&&ah(d)),h!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=v?-bt:bt);break}}d=_}}if(M&&!s&&(this.pause(),M.render(h>=a?0:-bt)._zTime=h>=a?1:-1,this._ts))return this._start=x,uc(this),this.render(i,s,o);this._onUpdate&&!s&&Zn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Cr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Zn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(er(s)||(s=si(this,s,i)),!(i instanceof pa)){if(pn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(nn(i))return this.addLabel(i,s);if(kt(i))i=qt.delayedCall(0,i);else return this}return this!==i?Ai(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ui);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof qt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return nn(i)?this.removeLabel(i):kt(i)?this.killTweensOf(i):(i.parent===this&&cc(this,i),i===this._recent&&(this._recent=this._last),ss(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ut($n.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=si(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=qt.delayedCall(0,s||fa,o);return a.data="isPause",this._hasPause=1,Ai(this,a,si(this,i))},t.removePause=function(i){var s=this._first;for(i=si(this,i);s;)s._start===i&&s.data==="isPause"&&Cr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)xr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=fi(i),l=this._first,c=er(s),u;l;)l instanceof qt?Gg(l._targets,a)&&(c?(!xr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=si(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,_=qt.to(o,ei({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||bt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&uo(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,f||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,ei({startAt:{time:si(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Kh(this,si(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Kh(this,si(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+bt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ut(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return ss(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ss(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ui,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ai(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Ut(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;uo(o,o===Nt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Nt._ts&&(mm(Nt,Xl(i,Nt)),dm=$n.frame),$n.frame>=Xh){Xh+=Jn.autoSleep||120;var s=Nt._first;if((!s||!s._ts)&&Jn.autoSleep&&$n._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||$n.sleep()}}},e})(pa);ei(Pn.prototype,{_lock:0,_hasPause:0,_forcing:0});var d0=function(e,t,n,i,s,o,a){var l=new In(this._pt,e,t,0,1,Vm,null,s),c=0,u=0,f,h,d,_,g,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ha(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),h=n.match(Ec)||[];f=Ec.exec(i);)_=f[0],g=i.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Js(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=Ec.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(cm.test(i)||p)&&(l.e=0),this._pt=l,l},lh=function(e,t,n,i,s,o,a,l,c,u){kt(i)&&(i=i(s||0,e,o));var f=e[t],h=n!=="get"?n:kt(f)?c?e[t.indexOf("set")||!kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=kt(f)?c?v0:km:uh,_;if(nn(i)&&(~i.indexOf("random(")&&(i=ha(i)),i.charAt(1)==="="&&(_=Js(h,i)+(hn(h)||0),(_||_===0)&&(i=_))),!u||h!==i||Iu)return!isNaN(h*i)&&i!==""?(_=new In(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?S0:zm,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!f&&!(t in e)&&ih(t,i),d0.call(this,e,t,h,i,d,l||Jn.stringFilter,c))},p0=function(e,t,n,i,s){if(kt(e)&&(e=Ko(e,s,t,n,i)),!Ii(e)||e.style&&e.nodeType||pn(e)||am(e))return nn(e)?Ko(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Ko(e[a],s,t,n,i);return o},Fm=function(e,t,n,i,s,o){var a,l,c,u;if(qn[e]&&(a=new qn[e]).init(s,a.rawVars?t[e]:p0(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new In(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Ys))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},xr,Iu,ch=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,y=e._overwrite==="auto"&&!Qf,x=e.timeline,b=i.easeReverse||f,w,T,C,S,v,P,L,F,V,O,W,X,G;if(x&&(!h||!s)&&(s="none"),e._ease=os(s,ca.ease),e._rEase=b&&(os(b)||e._ease),e._from=!x&&!!i.runBackwards,e._from&&(e.ratio=1),!x||h&&!i.stagger){if(F=m[0]?rs(m[0]).harness:0,X=F&&i[F.prop],w=Wl(i,rh),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?bl:Vg),g._lazy=0),o){if(Cr(e._startAt=qt.set(m,ei({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Dn(l),startAt:null,delay:0,onUpdate:c&&function(){return Zn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(on||!a&&!d)&&e._startAt.revert(bl),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),C=ei({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Dn(l),immediateRender:a,stagger:0,parent:p},w),X&&(C[F.prop]=X),Cr(e._startAt=qt.set(m,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(on?e._startAt.revert(bl):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,bt,bt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Dn(l)||l&&!_,T=0;T<m.length;T++){if(v=m[T],L=v._gsap||oh(m)[T]._gsap,e._ptLookup[T]=O={},wu[L.id]&&Tr.length&&Gl(),W=M===m?T:M.indexOf(v),F&&(V=new F).init(v,X||w,e,W,M)!==!1&&(e._pt=S=new In(e._pt,v,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(ee){O[ee]=S}),V.priority&&(P=1)),!F||X)for(C in w)qn[C]&&(V=Fm(C,w,e,W,v,M))?V.priority&&(P=1):O[C]=S=lh.call(e,v,C,"get",w[C],W,M,0,i.stringFilter);e._op&&e._op[T]&&e.kill(v,e._op[T]),y&&e._pt&&(xr=e,Nt.killTweensOf(v,O,e.globalTime(t)),G=!e.parent,xr=0),e._pt&&l&&(wu[L.id]=1)}P&&Hm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,h&&t<=0&&x.render(ui,!0,!0)},m0=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Iu=1,e.vars[t]="+=0",ch(e,a),Iu=0,l?ua(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Ht(n)+hn(f.e)),f.b&&(f.b=u.s+hn(f.b))},_0=function(e,t){var n=e[0]?rs(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=lo({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},g0=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(pn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ko=function(e,t,n,i,s){return kt(e)?e.call(t,n,i,s):nn(e)&&~e.indexOf("random(")?ha(e):e},Om=sh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Bm={};Ln(Om+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Bm[r]=1});var qt=(function(r){sm(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Yo(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||Nt,M=(pn(n)||am(n)?er(n[0]):"length"in i)?[n]:fi(n),y,x,b,w,T,C,S,v;if(a._targets=M.length?oh(M):ua("GSAP target "+n+" not found. https://gsap.com",!Jn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||h||Ia(c)||Ia(u)){i=a.vars;var P=i.easeReverse||i.yoyoEase;if(y=a.timeline=new Pn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:M}),y.kill(),y.parent=y._dp=Hi(a),y._start=0,h||Ia(c)||Ia(u)){if(w=M.length,S=h&&Tm(h),Ii(h))for(T in h)~Om.indexOf(T)&&(v||(v={}),v[T]=h[T]);for(x=0;x<w;x++)b=Wl(i,Bm),b.stagger=0,P&&(b.easeReverse=P),v&&lo(b,v),C=M[x],b.duration=+Ko(c,Hi(a),x,C,M),b.delay=(+Ko(u,Hi(a),x,C,M)||0)-a._delay,!h&&w===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),y.to(C,b,S?S(x,C,M):0),y._ease=ft.none;y.duration()?c=u=0:a.timeline=0}else if(_){Yo(ei(y.vars.defaults,{ease:"none"})),y._ease=os(_.ease||i.ease||"none");var L=0,F,V,O;if(pn(_))_.forEach(function(W){return y.to(M,W,">")}),y.duration();else{b={};for(T in _)T==="ease"||T==="easeEach"||g0(T,_[T],b,_.easeEach);for(T in b)for(F=b[T].sort(function(W,X){return W.t-X.t}),L=0,x=0;x<F.length;x++)V=F[x],O={ease:V.e,duration:(V.t-(x?F[x-1].t:0))/100*c},O[T]=V.v,y.to(M,O,L),L+=O.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return d===!0&&!Qf&&(xr=Hi(a),Nt.killTweensOf(M),xr=0),Ai(p,Hi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!_&&a._start===Ut(p._time)&&Dn(f)&&Yg(Hi(a))&&p.data!=="nested")&&(a._tTime=-bt,a.render(Math.max(0,-u)||0)),m&&Sm(Hi(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-bt&&!u?l:i<bt?0:i,h,d,_,g,m,p,M,y;if(!c)Kg(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(h=Ut(f%g),f===l?(_=this._repeat,h=c):(m=Ut(f/g),_=~~m,_&&_===m?(h=c,_--):h>c&&(h=c)),p=this._yoyo&&_&1,p&&(h=c-h),m=co(this._tTime,g),h===a&&!o&&this._initted&&_===m)return this._tTime=f,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&h!==g&&this._initted&&(this._lock=o=1,this.render(Ut(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(ym(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var x=h<a;if(x!==this._inv){var b=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(x?-1:1)/b:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(h/c);if(this._from&&(this.ratio=M=1-M),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!m&&(Zn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Ru(this,i,s,o),Zn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Zn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Ru(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Cr(this,1),!s&&!(u&&!a)&&(f||a||p)&&(Zn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){da||$n.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ch(this,c),u=this._ease(c/this._dur),m0(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(fc(this,0),this.parent||vm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Oo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!on),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,xr&&xr.vars.overwrite!==!0)._first||Oo(this),this.parent&&o!==this.timeline.totalDuration()&&uo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?fi(i):a,c=this._ptLookup,u=this._pt,f,h,d,_,g,m,p;if((!s||s==="all")&&Xg(a,l))return s==="all"&&(this._pt=0),Oo(this);for(f=this._op=this._op||[],s!=="all"&&(nn(s)&&(g={},Ln(s,function(M){return g[M]=1}),s=g),s=_0(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,_=h,d={}):(d=f[p]=f[p]||{},_=s);for(g in _)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&cc(this,m,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Oo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return $o(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return $o(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Nt.killTweensOf(i,s,o)},e})(pa);ei(qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ln("staggerTo,staggerFrom,staggerFromTo",function(r){qt[r]=function(){var e=new Pn,t=Pu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var uh=function(e,t,n){return e[t]=n},km=function(e,t,n){return e[t](n)},v0=function(e,t,n,i){return e[t](i.fp,n)},x0=function(e,t,n){return e.setAttribute(t,n)},fh=function(e,t){return kt(e[t])?km:eh(e[t])&&e.setAttribute?x0:uh},zm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},S0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Vm=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},hh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},y0=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},M0=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?cc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},E0=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Hm=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},In=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||zm,this.d=l||this,this.set=c||uh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=E0,this.m=n,this.mt=s,this.tween=i},r})();Ln(sh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return rh[r]=1});Qn.TweenMax=Qn.TweenLite=qt;Qn.TimelineLite=Qn.TimelineMax=Pn;Nt=new Pn({sortChildren:!1,defaults:ca,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Jn.stringFilter=Im;var as=[],wl={},T0=[],jh=0,b0=0,Rc=function(e){return(wl[e]||T0).map(function(t){return t()})},Uu=function(){var e=Date.now(),t=[];e-jh>2&&(Rc("matchMediaInit"),as.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Mi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Rc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),jh=e,Rc("matchMedia"))},Gm=(function(){function r(t,n){this.selector=n&&Du(n),this.data=[],this._r=[],this.isReverted=!1,this.id=b0++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){kt(n)&&(s=i,i=n,n=kt);var o=this,a=function(){var c=Dt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Du(s)),Dt=o,f=i.apply(o,arguments),kt(f)&&o._r.push(f),Dt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===kt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Dt;Dt=null,n(this),Dt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof qt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Pn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof qt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=as.length;o--;)as[o].id===this.id&&as.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),A0=(function(){function r(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ii(n)||(n={matches:n});var o=new Gm(0,s||this.scope),a=o.conditions={},l,c,u;Dt&&!o.selector&&(o.selector=Dt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Mi.matchMedia(n[c]),l&&(as.indexOf(o)<0&&as.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Uu):l.addEventListener("change",Uu)));return u&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),ql={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Pm(i)})},timeline:function(e){return new Pn(e)},getTweensOf:function(e,t){return Nt.getTweensOf(e,t)},getProperty:function(e,t,n,i){nn(e)&&(e=fi(e)[0]);var s=rs(e||{}).get,o=n?gm:_m;return n==="native"&&(n=""),e&&(t?o((qn[t]&&qn[t].get||s)(e,t,n,i)):function(a,l,c){return o((qn[a]&&qn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=fi(e),e.length>1){var i=e.map(function(u){return Bn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=qn[t],a=rs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Ys._pt=0,f.init(e,n?u+n:u,Ys,0,[e]),f.render(1,f),Ys._pt&&hh(1,Ys)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Bn.to(e,ei((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Nt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=os(e.ease,ca.ease)),qh(ca,e||{})},config:function(e){return qh(Jn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!qn[a]&&!Qn[a]&&ua(t+" effect requires "+a+" plugin.")}),Tc[t]=function(a,l,c){return n(fi(a),ei(l||{},s),c)},o&&(Pn.prototype[t]=function(a,l,c){return this.add(Tc[t](a,Ii(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ft[e]=os(t)},parseEase:function(e,t){return arguments.length?os(e,t):ft},getById:function(e){return Nt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Pn(e),i,s;for(n.smoothChildTiming=Dn(e.smoothChildTiming),Nt.remove(n),n._dp=0,n._time=n._tTime=Nt._time,i=Nt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof qt&&i.vars.onComplete===i._targets[0]))&&Ai(n,i,i._start-i._delay),i=s;return Ai(Nt,n,0),n},context:function(e,t){return e?new Gm(e,t):Dt},matchMedia:function(e){return new A0(e)},matchMediaRefresh:function(){return as.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Uu()},addEventListener:function(e,t){var n=wl[e]||(wl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=wl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:i0,wrapYoyo:r0,distribute:Tm,random:Am,snap:bm,normalize:n0,getUnit:hn,clamp:Jg,splitColor:Dm,toArray:fi,selector:Du,mapRange:Rm,pipe:e0,unitize:t0,interpolate:s0,shuffle:Em},install:fm,effects:Tc,ticker:$n,updateRoot:Pn.updateRoot,plugins:qn,globalTimeline:Nt,core:{PropTween:In,globals:hm,Tween:qt,Timeline:Pn,Animation:pa,getCache:rs,_removeLinkedListItem:cc,reverting:function(){return on},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return Qf=e}}};Ln("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ql[r]=qt[r]});$n.add(Pn.updateRoot);Ys=ql.to({},{duration:0});var w0=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},R0=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=w0(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Cc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(nn(s)&&(l={},Ln(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}R0(a,s)}}}},Bn=ql.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)on?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Cc("roundProps",Lu),Cc("modifiers"),Cc("snap",bm))||ql;qt.version=Pn.version=Bn.version="3.15.0";um=1;th()&&fo();ft.Power0;ft.Power1;ft.Power2;ft.Power3;ft.Power4;ft.Linear;ft.Quad;ft.Cubic;ft.Quart;ft.Quint;ft.Strong;ft.Elastic;ft.Back;ft.SteppedEase;ft.Bounce;ft.Sine;ft.Expo;ft.Circ;var Jh,Sr,Qs,dh,es,Qh,ph,C0=function(){return typeof window<"u"},tr={},Xr=180/Math.PI,eo=Math.PI/180,Es=Math.atan2,ed=1e8,mh=/([A-Z])/g,P0=/(left|right|width|margin|padding|x)/i,D0=/[\s,\(]\S/,wi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Nu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},L0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},I0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},U0=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},N0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Wm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Xm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},F0=function(e,t,n){return e.style[t]=n},O0=function(e,t,n){return e.style.setProperty(t,n)},B0=function(e,t,n){return e._gsap[t]=n},k0=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},z0=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},V0=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ft="transform",Un=Ft+"Origin",H0=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in tr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=wi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Gi(i,a)}):this.tfm[e]=o.x?o[e]:Gi(i,e),e===Un&&(this.tfm.zOrigin=o.zOrigin);else return wi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ft)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Un,t,"")),e=Ft}(s||t)&&this.props.push(e,t,s[e])},qm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},G0=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(mh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ph(),(!s||!s.isStart)&&!n[Ft]&&(qm(n),i.zOrigin&&n[Un]&&(n[Un]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ym=function(e,t){var n={target:e,props:[],revert:G0,save:H0};return e._gsap||Bn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},$m,Fu=function(e,t){var n=Sr.createElementNS?Sr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Sr.createElement(e);return n&&n.style?n:Sr.createElement(e)},jn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(mh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,ho(t)||t,1)||""},td="O,Moz,ms,Ms,Webkit".split(","),ho=function(e,t,n){var i=t||es,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(td[o]+e in s););return o<0?null:(o===3?"ms":o>=0?td[o]:"")+e},Ou=function(){C0()&&window.document&&(Jh=window,Sr=Jh.document,Qs=Sr.documentElement,es=Fu("div")||{style:{}},Fu("div"),Ft=ho(Ft),Un=Ft+"Origin",es.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",$m=!!ho("perspective"),ph=Bn.core.reverting,dh=1)},nd=function(e){var t=e.ownerSVGElement,n=Fu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Qs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Qs.removeChild(n),s},id=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Km=function(e){var t,n;try{t=e.getBBox()}catch{t=nd(e),n=1}return t&&(t.width||t.height)||n||(t=nd(e)),t&&!t.width&&!t.x&&!t.y?{x:+id(e,["x","cx","x1"])||0,y:+id(e,["y","cy","y1"])||0,width:0,height:0}:t},Zm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Km(e))},Pr=function(e,t){if(t){var n=e.style,i;t in tr&&t!==Un&&(t=Ft),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(mh,"-$1").toLowerCase())):n.removeAttribute(t)}},yr=function(e,t,n,i,s,o){var a=new In(e._pt,t,n,0,1,o?Xm:Wm);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},rd={deg:1,rad:1,turn:1},W0={grid:1,flex:1},Dr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=es.style,l=P0.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",_,g,m,p;if(i===o||!s||rd[i]||rd[o])return s;if(o!=="px"&&!h&&(s=r(e,t,n,"px")),p=e.getCTM&&Zm(e),(d||o==="%")&&(tr[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],Ht(d?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(h?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Sr||!g.appendChild)&&(g=Sr.body),m=g._gsap,m&&d&&m.width&&l&&m.time===$n.time&&!m.uncache)return Ht(s/m.width*f);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=f+i,_=e[u],M?e.style[t]=M:Pr(e,t)}else(d||o==="%")&&!W0[jn(g,"display")]&&(a.position=jn(e,"position")),g===e&&(a.position="static"),g.appendChild(es),_=es[u],g.removeChild(es),a.position="absolute";return l&&d&&(m=rs(g),m.time=$n.time,m.width=g[u]),Ht(h?_*s/f:_&&s?f/_*s:0)},Gi=function(e,t,n,i){var s;return dh||Ou(),t in wi&&t!=="transform"&&(t=wi[t],~t.indexOf(",")&&(t=t.split(",")[0])),tr[t]&&t!=="transform"?(s=_a(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:$l(jn(e,Un))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Yl[t]&&Yl[t](e,t,n)||jn(e,t)||pm(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Dr(e,t,s,n)+n:s},X0=function(e,t,n,i){if(!n||n==="none"){var s=ho(t,e,1),o=s&&jn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=jn(e,"borderTopColor"))}var a=new In(this._pt,e.style,t,0,1,Vm),l=0,c=0,u,f,h,d,_,g,m,p,M,y,x,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=jn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=jn(e,t)||i,g?e.style[t]=g:Pr(e,t)),u=[n,i],Im(u),n=u[0],i=u[1],h=n.match(qs)||[],b=i.match(qs)||[],b.length){for(;f=qs.exec(i);)m=f[0],M=i.substring(l,f.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),m!==(g=h[c++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),m.charAt(1)==="="&&(m=Js(d,m)+x),p=parseFloat(m),y=m.substr((p+"").length),l=qs.lastIndex-y.length,y||(y=y||Jn.units[t]||x,l===i.length&&(i+=y,a.e+=y)),x!==y&&(d=Dr(e,t,g,y)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Xm:Wm;return cm.test(i)&&(a.e=0),this._pt=a,a},sd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},q0=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=sd[n]||n,t[1]=sd[i]||i,t.join(" ")},Y0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],tr[a]&&(l=1,a=a==="transformOrigin"?Un:Ft),Pr(n,a);l&&(Pr(n,Ft),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",_a(n,1),o.uncache=1,qm(i)))}},Yl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new In(e._pt,t,n,0,0,Y0);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},ma=[1,0,0,1,0,0],jm={},Jm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},od=function(e){var t=jn(e,Ft);return Jm(t)?ma:t.substr(7).match(lm).map(Ht)},_h=function(e,t){var n=e._gsap||rs(e),i=e.style,s=od(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ma:s):(s===ma&&!e.offsetParent&&e!==Qs&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Qs.appendChild(e)),s=od(e),l?i.display=l:Pr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Qs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Bu=function(e,t,n,i,s,o){var a=e._gsap,l=s||_h(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],M=l[5],y=t.split(" "),x=parseFloat(y[0])||0,b=parseFloat(y[1])||0,w,T,C,S;n?l!==ma&&(T=d*m-_*g)&&(C=x*(m/T)+b*(-g/T)+(g*M-m*p)/T,S=x*(-_/T)+b*(d/T)-(d*M-_*p)/T,x=C,b=S):(w=Km(e),x=w.x+(~y[0].indexOf("%")?x/100*w.width:x),b=w.y+(~(y[1]||y[0]).indexOf("%")?b/100*w.height:b)),i||i!==!1&&a.smooth?(p=x-c,M=b-u,a.xOffset=f+(p*d+M*g)-p,a.yOffset=h+(p*_+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=b,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Un]="0px 0px",o&&(yr(o,a,"xOrigin",c,x),yr(o,a,"yOrigin",u,b),yr(o,a,"xOffset",f,a.xOffset),yr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+b)},_a=function(e,t){var n=e._gsap||new Nm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=jn(e,Un)||"0",u,f,h,d,_,g,m,p,M,y,x,b,w,T,C,S,v,P,L,F,V,O,W,X,G,ee,I,le,ve,Oe,we,ye;return u=f=h=g=m=p=M=y=x=0,d=_=1,n.svg=!!(e.getCTM&&Zm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ft]!=="none"?l[Ft]:"")),i.scale=i.rotate=i.translate="none"),T=_h(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Bu(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,T)),b=n.xOrigin||0,w=n.yOrigin||0,T!==ma&&(P=T[0],L=T[1],F=T[2],V=T[3],u=O=T[4],f=W=T[5],T.length===6?(d=Math.sqrt(P*P+L*L),_=Math.sqrt(V*V+F*F),g=P||L?Es(L,P)*Xr:0,M=F||V?Es(F,V)*Xr+g:0,M&&(_*=Math.abs(Math.cos(M*eo))),n.svg&&(u-=b-(b*P+w*F),f-=w-(b*L+w*V))):(ye=T[6],Oe=T[7],I=T[8],le=T[9],ve=T[10],we=T[11],u=T[12],f=T[13],h=T[14],C=Es(ye,ve),m=C*Xr,C&&(S=Math.cos(-C),v=Math.sin(-C),X=O*S+I*v,G=W*S+le*v,ee=ye*S+ve*v,I=O*-v+I*S,le=W*-v+le*S,ve=ye*-v+ve*S,we=Oe*-v+we*S,O=X,W=G,ye=ee),C=Es(-F,ve),p=C*Xr,C&&(S=Math.cos(-C),v=Math.sin(-C),X=P*S-I*v,G=L*S-le*v,ee=F*S-ve*v,we=V*v+we*S,P=X,L=G,F=ee),C=Es(L,P),g=C*Xr,C&&(S=Math.cos(C),v=Math.sin(C),X=P*S+L*v,G=O*S+W*v,L=L*S-P*v,W=W*S-O*v,P=X,O=G),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Ht(Math.sqrt(P*P+L*L+F*F)),_=Ht(Math.sqrt(W*W+ye*ye)),C=Es(O,W),M=Math.abs(C)>2e-4?C*Xr:0,x=we?1/(we<0?-we:we):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Jm(jn(e,Ft)),X&&e.setAttribute("transform",X))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Ht(d),n.scaleY=Ht(_),n.rotation=Ht(g)+a,n.rotationX=Ht(m)+a,n.rotationY=Ht(p)+a,n.skewX=M+a,n.skewY=y+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Un]=$l(c)),n.xOffset=n.yOffset=0,n.force3D=Jn.force3D,n.renderTransform=n.svg?K0:$m?Qm:$0,n.uncache=0,n},$l=function(e){return(e=e.split(" "))[0]+" "+e[1]},Pc=function(e,t,n){var i=hn(t);return Ht(parseFloat(t)+parseFloat(Dr(e,"x",n+"px",i)))+i},$0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Qm(e,t)},Or="0deg",bo="0px",Br=") ",Qm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,y=n.zOrigin,x="",b=p==="auto"&&e&&e!==1||p===!0;if(y&&(f!==Or||u!==Or)){var w=parseFloat(u)*eo,T=Math.sin(w),C=Math.cos(w),S;w=parseFloat(f)*eo,S=Math.cos(w),o=Pc(M,o,T*S*-y),a=Pc(M,a,-Math.sin(w)*-y),l=Pc(M,l,C*S*-y+y)}m!==bo&&(x+="perspective("+m+Br),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(b||o!==bo||a!==bo||l!==bo)&&(x+=l!==bo||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Br),c!==Or&&(x+="rotate("+c+Br),u!==Or&&(x+="rotateY("+u+Br),f!==Or&&(x+="rotateX("+f+Br),(h!==Or||d!==Or)&&(x+="skew("+h+", "+d+Br),(_!==1||g!==1)&&(x+="scale("+_+", "+g+Br),M.style[Ft]=x||"translate(0, 0)"},K0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,y=parseFloat(o),x=parseFloat(a),b,w,T,C,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=eo,c*=eo,b=Math.cos(l)*f,w=Math.sin(l)*f,T=Math.sin(l-c)*-h,C=Math.cos(l-c)*h,c&&(u*=eo,S=Math.tan(c-u),S=Math.sqrt(1+S*S),T*=S,C*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),b*=S,w*=S)),b=Ht(b),w=Ht(w),T=Ht(T),C=Ht(C)):(b=f,C=h,w=T=0),(y&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(y=Dr(d,"x",o,"px"),x=Dr(d,"y",a,"px")),(_||g||m||p)&&(y=Ht(y+_-(_*b+g*T)+m),x=Ht(x+g-(_*w+g*C)+p)),(i||s)&&(S=d.getBBox(),y=Ht(y+i/100*S.width),x=Ht(x+s/100*S.height)),S="matrix("+b+","+w+","+T+","+C+","+y+","+x+")",d.setAttribute("transform",S),M&&(d.style[Ft]=S)},Z0=function(e,t,n,i,s){var o=360,a=nn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Xr:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*ed)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*ed)%o-~~(c/o)*o)),e._pt=h=new In(e._pt,t,n,i,c,L0),h.e=u,h.u="deg",e._props.push(n),h},ad=function(e,t){for(var n in t)e[n]=t[n];return e},j0=function(e,t,n){var i=ad({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ft]=t,a=_a(n,1),Pr(n,Ft),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ft],o[Ft]=t,a=_a(n,1),o[Ft]=c);for(l in tr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=hn(c),_=hn(u),f=d!==_?Dr(n,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new In(e._pt,a,l,f,h-f,Nu),e._pt.u=_||0,e._props.push(l));ad(a,i)};Ln("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Yl[e>1?"border"+r:r]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(_){return Gi(a,_,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,d,f)}});var e_={name:"css",register:Ou,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,_,g,m,p,M,y,x,b,w,T,C,S;dh||Ou(),this.styles=this.styles||Ym(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(qn[g]&&Fm(g,t,n,i,e,s)))){if(d=typeof u,_=Yl[g],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ha(u)),_)_(this,e,g,u,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",br.lastIndex=0,br.test(c)||(m=hn(c),p=hn(u),p?m!==p&&(c=Dr(e,g,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),C.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],nn(c)&&~c.indexOf("random(")&&(c=ha(c)),hn(c+"")||c==="auto"||(c+=Jn.units[g]||hn(Gi(e,g))||""),(c+"").charAt(1)==="="&&(c=Gi(e,g))):c=Gi(e,g),h=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),f=parseFloat(u),g in wi&&(g==="autoAlpha"&&(h===1&&Gi(e,"visibility")==="hidden"&&f&&(h=0),C.push("visibility",0,a.visibility),yr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=wi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in tr,y){if(this.styles.save(g),S=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=jn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=e.style.perspective;e.style.perspective=u,u=jn(e,"perspective"),v?e.style.perspective=v:Pr(e,"perspective")}f=parseFloat(u)}if(x||(b=e._gsap,b.renderTransform&&!t.parseTransform||_a(e,t.parseTransform),w=t.smoothOrigin!==!1&&b.smooth,x=this._pt=new In(this._pt,a,Ft,0,1,b.renderTransform,b,0,-1),x.dep=1),g==="scale")this._pt=new In(this._pt,b,"scaleY",b.scaleY,(M?Js(b.scaleY,M+f):f)-b.scaleY||0,Nu),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(Un,0,a[Un]),u=q0(u),b.svg?Bu(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&yr(this,b,"zOrigin",b.zOrigin,p),yr(this,a,g,$l(c),$l(u)));continue}else if(g==="svgOrigin"){Bu(e,u,1,w,0,this);continue}else if(g in jm){Z0(this,b,g,h,M?Js(h,M+u):u);continue}else if(g==="smoothOrigin"){yr(this,b,"smooth",b.smooth,u);continue}else if(g==="force3D"){b[g]=u;continue}else if(g==="transform"){j0(this,u,e);continue}}else g in a||(g=ho(g)||g);if(y||(f||f===0)&&(h||h===0)&&!D0.test(u)&&g in a)m=(c+"").substr((h+"").length),f||(f=0),p=hn(u)||(g in Jn.units?Jn.units[g]:m),m!==p&&(h=Dr(e,g,c,p)),this._pt=new In(this._pt,y?b:a,g,h,(M?Js(h,M+f):f)-h,!y&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?N0:Nu),this._pt.u=p||0,y&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=U0):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=I0);else if(g in a)X0.call(this,e,g,c,M?M+u:u);else if(g in e)this.add(e,g,c||e[g],M?M+u:u,i,s);else if(g!=="parseTransform"){ih(g,u);continue}y||(g in a?C.push(g,0,a[g]):typeof e[g]=="function"?C.push(g,2,e[g]()):C.push(g,1,c||e[g])),o.push(g)}}T&&Hm(this)},render:function(e,t){if(t.tween._time||!ph())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Gi,aliases:wi,getSetter:function(e,t,n){var i=wi[t];return i&&i.indexOf(",")<0&&(t=i),t in tr&&t!==Un&&(e._gsap.x||Gi(e,"x"))?n&&Qh===n?t==="scale"?k0:B0:(Qh=n||{})&&(t==="scale"?z0:V0):e.style&&!eh(e.style[t])?F0:~t.indexOf("-")?O0:fh(e,t)},core:{_removeProperty:Pr,_getMatrix:_h}};Bn.utils.checkPrefix=ho;Bn.core.getStyleSaver=Ym;(function(r,e,t,n){var i=Ln(r+","+e+","+t,function(s){tr[s]=1});Ln(e,function(s){Jn.units[s]="deg",jm[s]=1}),wi[i[13]]=r+","+e,Ln(n,function(s){var o=s.split(":");wi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ln("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Jn.units[r]="px"});Bn.registerPlugin(e_);var _e=Bn.registerPlugin(e_)||Bn;_e.core.Tween;function J0(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Q0(r,e,t){return e&&J0(r.prototype,e),r}var sn,Rl,Kn,Mr,Er,to,t_,qr,no,n_,qi,_i,i_,r_=function(){return sn||typeof window<"u"&&(sn=window.gsap)&&sn.registerPlugin&&sn},s_=1,$s=[],lt=[],Li=[],Zo=Date.now,ku=function(e,t){return t},ev=function(){var e=no.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,lt),i.push.apply(i,Li),lt=n,Li=i,ku=function(o,a){return t[o](a)}},Ar=function(e,t){return~Li.indexOf(e)&&Li[Li.indexOf(e)+1][t]},jo=function(e){return!!~n_.indexOf(e)},vn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},gn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ua="scrollLeft",Na="scrollTop",zu=function(){return qi&&qi.isPressed||lt.cache++},Kl=function(e,t){var n=function i(s){if(s||s===0){s_&&(Kn.history.scrollRestoration="manual");var o=qi&&qi.isPressed;s=i.v=Math.round(s)||(qi&&qi.iOS?1:0),e(s),i.cacheID=lt.cache,o&&ku("ss",s)}else(t||lt.cache!==i.cacheID||ku("ref"))&&(i.cacheID=lt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Tn={s:Ua,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Kl(function(r){return arguments.length?Kn.scrollTo(r,Zt.sc()):Kn.pageXOffset||Mr[Ua]||Er[Ua]||to[Ua]||0})},Zt={s:Na,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Tn,sc:Kl(function(r){return arguments.length?Kn.scrollTo(Tn.sc(),r):Kn.pageYOffset||Mr[Na]||Er[Na]||to[Na]||0})},Rn=function(e,t){return(t&&t._ctx&&t._ctx.selector||sn.utils.toArray)(e)[0]||(typeof e=="string"&&sn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},tv=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Lr=function(e,t){var n=t.s,i=t.sc;jo(e)&&(e=Mr.scrollingElement||Er);var s=lt.indexOf(e),o=i===Zt.sc?1:2;!~s&&(s=lt.push(e)-1),lt[s+o]||vn(e,"scroll",zu);var a=lt[s+o],l=a||(lt[s+o]=Kl(Ar(e,n),!0)||(jo(e)?i:Kl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=sn.getProperty(e,"scrollBehavior")==="smooth"),l},Vu=function(e,t,n){var i=e,s=e,o=Zo(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=Zo();g||m-o>l?(s=i,i=_,a=o,o=m):n?i+=_:i=s+(_-s)/(m-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},h=function(_){var g=a,m=s,p=Zo();return(_||_===0)&&_!==i&&u(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:u,reset:f,getVelocity:h}},Ao=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ld=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},o_=function(){no=sn.core.globals().ScrollTrigger,no&&no.core&&ev()},a_=function(e){return sn=e||r_(),!Rl&&sn&&typeof document<"u"&&document.body&&(Kn=window,Mr=document,Er=Mr.documentElement,to=Mr.body,n_=[Kn,Mr,Er,to],sn.utils.clamp,i_=sn.core.context||function(){},qr="onpointerenter"in to?"pointer":"mouse",t_=Ot.isTouch=Kn.matchMedia&&Kn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Kn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,_i=Ot.eventTypes=("ontouchstart"in Er?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Er?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return s_=0},500),Rl=1),no||o_(),Rl};Tn.op=Zt;lt.cache=0;var Ot=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Rl||a_(sn)||console.warn("Please gsap.registerPlugin(Observer)"),no||o_();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,y=n.onPress,x=n.onRelease,b=n.onRight,w=n.onLeft,T=n.onUp,C=n.onDown,S=n.onChangeX,v=n.onChangeY,P=n.onChange,L=n.onToggleX,F=n.onToggleY,V=n.onHover,O=n.onHoverEnd,W=n.onMove,X=n.ignoreCheck,G=n.isNormalizer,ee=n.onGestureStart,I=n.onGestureEnd,le=n.onWheel,ve=n.onEnable,Oe=n.onDisable,we=n.onClick,ye=n.scrollSpeed,q=n.capture,te=n.allowClicks,pe=n.lockAxis,Ce=n.onLockAxis;this.target=a=Rn(a)||Er,this.vars=n,d&&(d=sn.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,ye=ye||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Kn.getComputedStyle(to).lineHeight)||22);var me,Be,nt,D,Ne,ke,De,N=this,Ke=0,Y=0,B=n.passive||!u&&n.passive!==!1,ae=Lr(a,Tn),se=Lr(a,Zt),R=ae(),E=se(),k=~o.indexOf("touch")&&!~o.indexOf("pointer")&&_i[0]==="pointerdown",J=jo(a),Q=a.ownerDocument||Mr,$=[0,0,0],ge=[0,0,0],re=0,Ee=function(){return re=Zo()},ie=function(Ve,Je){return(N.event=Ve)&&d&&tv(Ve.target,d)||Je&&k&&Ve.pointerType!=="touch"||X&&X(Ve,Je)},he=function(){N._vx.reset(),N._vy.reset(),Be.pause(),f&&f(N)},xe=function(){var Ve=N.deltaX=ld($),Je=N.deltaY=ld(ge),be=Math.abs(Ve)>=i,Ye=Math.abs(Je)>=i;P&&(be||Ye)&&P(N,Ve,Je,$,ge),be&&(b&&N.deltaX>0&&b(N),w&&N.deltaX<0&&w(N),S&&S(N),L&&N.deltaX<0!=Ke<0&&L(N),Ke=N.deltaX,$[0]=$[1]=$[2]=0),Ye&&(C&&N.deltaY>0&&C(N),T&&N.deltaY<0&&T(N),v&&v(N),F&&N.deltaY<0!=Y<0&&F(N),Y=N.deltaY,ge[0]=ge[1]=ge[2]=0),(D||nt)&&(W&&W(N),nt&&(m&&nt===1&&m(N),M&&M(N),nt=0),D=!1),ke&&!(ke=!1)&&Ce&&Ce(N),Ne&&(le(N),Ne=!1),me=0},ze=function(Ve,Je,be){$[be]+=Ve,ge[be]+=Je,N._vx.update(Ve),N._vy.update(Je),c?me||(me=requestAnimationFrame(xe)):xe()},Le=function(Ve,Je){pe&&!De&&(N.axis=De=Math.abs(Ve)>Math.abs(Je)?"x":"y",ke=!0),De!=="y"&&($[2]+=Ve,N._vx.update(Ve,!0)),De!=="x"&&(ge[2]+=Je,N._vy.update(Je,!0)),c?me||(me=requestAnimationFrame(xe)):xe()},Se=function(Ve){if(!ie(Ve,1)){Ve=Ao(Ve,u);var Je=Ve.clientX,be=Ve.clientY,Ye=Je-N.x,We=be-N.y,je=N.isDragging;N.x=Je,N.y=be,(je||(Ye||We)&&(Math.abs(N.startX-Je)>=s||Math.abs(N.startY-be)>=s))&&(nt||(nt=je?2:1),je||(N.isDragging=!0),Le(Ye,We))}},qe=N.onPress=function(Te){ie(Te,1)||Te&&Te.button||(N.axis=De=null,Be.pause(),N.isPressed=!0,Te=Ao(Te),Ke=Y=0,N.startX=N.x=Te.clientX,N.startY=N.y=Te.clientY,N._vx.reset(),N._vy.reset(),vn(G?a:Q,_i[1],Se,B,!0),N.deltaX=N.deltaY=0,y&&y(N))},U=N.onRelease=function(Te){if(!ie(Te,1)){gn(G?a:Q,_i[1],Se,!0);var Ve=!isNaN(N.y-N.startY),Je=N.isDragging,be=Je&&(Math.abs(N.x-N.startX)>3||Math.abs(N.y-N.startY)>3),Ye=Ao(Te);!be&&Ve&&(N._vx.reset(),N._vy.reset(),u&&te&&sn.delayedCall(.08,function(){if(Zo()-re>300&&!Te.defaultPrevented){if(Te.target.click)Te.target.click();else if(Q.createEvent){var We=Q.createEvent("MouseEvents");We.initMouseEvent("click",!0,!0,Kn,1,Ye.screenX,Ye.screenY,Ye.clientX,Ye.clientY,!1,!1,!1,!1,0,null),Te.target.dispatchEvent(We)}}})),N.isDragging=N.isGesturing=N.isPressed=!1,f&&Je&&!G&&Be.restart(!0),nt&&xe(),p&&Je&&p(N),x&&x(N,be)}},ue=function(Ve){return Ve.touches&&Ve.touches.length>1&&(N.isGesturing=!0)&&ee(Ve,N.isDragging)},fe=function(){return(N.isGesturing=!1)||I(N)},de=function(Ve){if(!ie(Ve)){var Je=ae(),be=se();ze((Je-R)*ye,(be-E)*ye,1),R=Je,E=be,f&&Be.restart(!0)}},oe=function(Ve){if(!ie(Ve)){Ve=Ao(Ve,u),le&&(Ne=!0);var Je=(Ve.deltaMode===1?l:Ve.deltaMode===2?Kn.innerHeight:1)*_;ze(Ve.deltaX*Je,Ve.deltaY*Je,0),f&&!G&&Be.restart(!0)}},ne=function(Ve){if(!ie(Ve)){var Je=Ve.clientX,be=Ve.clientY,Ye=Je-N.x,We=be-N.y;N.x=Je,N.y=be,D=!0,f&&Be.restart(!0),(Ye||We)&&Le(Ye,We)}},Re=function(Ve){N.event=Ve,V(N)},Fe=function(Ve){N.event=Ve,O(N)},ot=function(Ve){return ie(Ve)||Ao(Ve,u)&&we(N)};Be=N._dc=sn.delayedCall(h||.25,he).pause(),N.deltaX=N.deltaY=0,N._vx=Vu(0,50,!0),N._vy=Vu(0,50,!0),N.scrollX=ae,N.scrollY=se,N.isDragging=N.isGesturing=N.isPressed=!1,i_(this),N.enable=function(Te){return N.isEnabled||(vn(J?Q:a,"scroll",zu),o.indexOf("scroll")>=0&&vn(J?Q:a,"scroll",de,B,q),o.indexOf("wheel")>=0&&vn(a,"wheel",oe,B,q),(o.indexOf("touch")>=0&&t_||o.indexOf("pointer")>=0)&&(vn(a,_i[0],qe,B,q),vn(Q,_i[2],U),vn(Q,_i[3],U),te&&vn(a,"click",Ee,!0,!0),we&&vn(a,"click",ot),ee&&vn(Q,"gesturestart",ue),I&&vn(Q,"gestureend",fe),V&&vn(a,qr+"enter",Re),O&&vn(a,qr+"leave",Fe),W&&vn(a,qr+"move",ne)),N.isEnabled=!0,N.isDragging=N.isGesturing=N.isPressed=D=nt=!1,N._vx.reset(),N._vy.reset(),R=ae(),E=se(),Te&&Te.type&&qe(Te),ve&&ve(N)),N},N.disable=function(){N.isEnabled&&($s.filter(function(Te){return Te!==N&&jo(Te.target)}).length||gn(J?Q:a,"scroll",zu),N.isPressed&&(N._vx.reset(),N._vy.reset(),gn(G?a:Q,_i[1],Se,!0)),gn(J?Q:a,"scroll",de,q),gn(a,"wheel",oe,q),gn(a,_i[0],qe,q),gn(Q,_i[2],U),gn(Q,_i[3],U),gn(a,"click",Ee,!0),gn(a,"click",ot),gn(Q,"gesturestart",ue),gn(Q,"gestureend",fe),gn(a,qr+"enter",Re),gn(a,qr+"leave",Fe),gn(a,qr+"move",ne),N.isEnabled=N.isPressed=N.isDragging=!1,Oe&&Oe(N))},N.kill=N.revert=function(){N.disable();var Te=$s.indexOf(N);Te>=0&&$s.splice(Te,1),qi===N&&(qi=0)},$s.push(N),G&&jo(a)&&(qi=N),N.enable(g)},Q0(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ot.version="3.15.0";Ot.create=function(r){return new Ot(r)};Ot.register=a_;Ot.getAll=function(){return $s.slice()};Ot.getById=function(r){return $s.filter(function(e){return e.vars.id===r})[0]};r_()&&sn.registerPlugin(Ot);var Ue,Ws,at,vt,Yn,_t,gh,Zl,ga,Jo,ko,Fa,cn,hc,Hu,Mn,cd,ud,Xs,l_,Dc,c_,yn,Gu,u_,f_,pr,Wu,vh,io,xh,Qo,Xu,Lc,Oa=1,un=Date.now,Ic=un(),hi=0,zo=0,fd=function(e,t,n){var i=Xn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},hd=function(e,t){return t&&(!Xn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},nv=function r(){return zo&&requestAnimationFrame(r)},dd=function(){return hc=1},pd=function(){return hc=0},Ei=function(e){return e},Vo=function(e){return Math.round(e*1e5)/1e5||0},h_=function(){return typeof window<"u"},d_=function(){return Ue||h_()&&(Ue=window.gsap)&&Ue.registerPlugin&&Ue},ds=function(e){return!!~gh.indexOf(e)},p_=function(e){return(e==="Height"?xh:at["inner"+e])||Yn["client"+e]||_t["client"+e]},m_=function(e){return Ar(e,"getBoundingClientRect")||(ds(e)?function(){return Il.width=at.innerWidth,Il.height=xh,Il}:function(){return Wi(e)})},iv=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Ar(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?p_(s):e["client"+s])||0}},rv=function(e,t){return!t||~Li.indexOf(e)?m_(e):function(){return Il}},Ri=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Ar(e,n))?o()-m_(e)()[s]:ds(e)?(Yn[n]||_t[n])-p_(i):e[n]-e["offset"+i])},Ba=function(e,t){for(var n=0;n<Xs.length;n+=3)(!t||~t.indexOf(Xs[n+1]))&&e(Xs[n],Xs[n+1],Xs[n+2])},Xn=function(e){return typeof e=="string"},dn=function(e){return typeof e=="function"},Ho=function(e){return typeof e=="number"},Yr=function(e){return typeof e=="object"},wo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ts=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},bs=Math.abs,__="left",g_="top",Sh="right",yh="bottom",ls="width",cs="height",ea="Right",ta="Left",na="Top",ia="Bottom",Xt="padding",ai="margin",po="Width",Mh="Height",Kt="px",li=function(e){return at.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},sv=function(e){var t=li(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},md=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Wi=function(e,t){var n=t&&li(e)[Hu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ue.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},jl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},v_=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},ov=function(e){return function(t){return Ue.utils.snap(v_(e),t)}},Eh=function(e){var t=Ue.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},av=function(e){return function(t,n){return Eh(v_(e))(t,n.direction)}},ka=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},tn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},en=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},za=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},_d={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Va={toggleActions:"play",anticipatePin:0},Jl={top:0,left:0,center:.5,bottom:1,right:1},Cl=function(e,t){if(Xn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Jl?Jl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ha=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,_=vt.createElement("div"),g=ds(n)||Ar(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?_t:n.tagName==="IFRAME"?n.contentDocument.body:n,M=e.indexOf("start")!==-1,y=M?c:u,x="border-color:"+y+";font-size:"+f+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(x+=(i===Zt?Sh:yh)+":"+(o+parseFloat(h))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=M,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=x,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],Pl(_,0,i,M),_},Pl=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+po]=1,s["border"+a+po]=0,s[n.p]=t+"px",Ue.set(e,s)},st=[],qu={},va,gd=function(){return un()-hi>34&&(va||(va=requestAnimationFrame(Ji)))},As=function(){(!yn||!yn.isPressed||yn.startX>_t.clientWidth)&&(lt.cache++,yn?va||(va=requestAnimationFrame(Ji)):Ji(),hi||ms("scrollStart"),hi=un())},Uc=function(){f_=at.innerWidth,u_=at.innerHeight},Go=function(e){lt.cache++,(e===!0||!cn&&!c_&&!vt.fullscreenElement&&!vt.webkitFullscreenElement&&(!Gu||f_!==at.innerWidth||Math.abs(at.innerHeight-u_)>at.innerHeight*.25))&&Zl.restart(!0)},ps={},lv=[],x_=function r(){return en(Ze,"scrollEnd",r)||ts(!0)},ms=function(e){return ps[e]&&ps[e].map(function(t){return t()})||lv},Wn=[],S_=function(e){for(var t=0;t<Wn.length;t+=5)(!e||Wn[t+4]&&Wn[t+4].query===e)&&(Wn[t].style.cssText=Wn[t+1],Wn[t].getBBox&&Wn[t].setAttribute("transform",Wn[t+2]||""),Wn[t+3].uncache=1)},y_=function(){return lt.forEach(function(e){return dn(e)&&++e.cacheID&&(e.rec=e())})},Th=function(e,t){var n;for(Mn=0;Mn<st.length;Mn++)n=st[Mn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Qo=!0,t&&S_(t),t||ms("revert")},M_=function(e,t){lt.cache++,(t||!En)&&lt.forEach(function(n){return dn(n)&&n.cacheID++&&(n.rec=0)}),Xn(e)&&(at.history.scrollRestoration=vh=e)},En,us=0,vd,cv=function(){if(vd!==us){var e=vd=us;requestAnimationFrame(function(){return e===us&&ts(!0)})}},E_=function(){_t.appendChild(io),xh=!yn&&io.offsetHeight||at.innerHeight,_t.removeChild(io)},xd=function(e){return ga(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ts=function(e,t){if(Yn=vt.documentElement,_t=vt.body,gh=[at,vt,Yn,_t],hi&&!e&&!Qo){tn(Ze,"scrollEnd",x_);return}E_(),En=Ze.isRefreshing=!0,Qo||y_();var n=ms("refreshInit");l_&&Ze.sort(),t||Th(),lt.forEach(function(i){dn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),st.slice(0).forEach(function(i){return i.refresh()}),Qo=!1,st.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Xu=1,xd(!0),st.forEach(function(i){var s=Ri(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),xd(!1),Xu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),lt.forEach(function(i){dn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),M_(vh,1),Zl.pause(),us++,En=2,Ji(2),st.forEach(function(i){return dn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),En=Ze.isRefreshing=!1,ms("refresh")},Yu=0,Dl=1,ra,Ji=function(e){if(e===2||!En&&!Qo){Ze.isUpdating=!0,ra&&ra.update(0);var t=st.length,n=un(),i=n-Ic>=50,s=t&&st[0].scroll();if(Dl=Yu>s?-1:1,En||(Yu=s),i&&(hi&&!hc&&n-hi>200&&(hi=0,ms("scrollEnd")),ko=Ic,Ic=n),Dl<0){for(Mn=t;Mn-- >0;)st[Mn]&&st[Mn].update(0,i);Dl=1}else for(Mn=0;Mn<t;Mn++)st[Mn]&&st[Mn].update(0,i);Ze.isUpdating=!1}va=0},$u=[__,g_,yh,Sh,ai+ia,ai+ea,ai+na,ai+ta,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ll=$u.concat([ls,cs,"boxSizing","max"+po,"max"+Mh,"position",ai,Xt,Xt+na,Xt+ea,Xt+ia,Xt+ta]),uv=function(e,t,n){ro(n);var i=e._gsap;if(i.spacerIsNative)ro(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Nc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=$u.length,o=t.style,a=e.style,l;s--;)l=$u[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[yh]=a[Sh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ls]=jl(e,Tn)+Kt,o[cs]=jl(e,Zt)+Kt,o[Xt]=a[ai]=a[g_]=a[__]="0",ro(i),a[ls]=a["max"+po]=n[ls],a[cs]=a["max"+Mh]=n[cs],a[Xt]=n[Xt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},fv=/([A-Z])/g,ro=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ue.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(fv,"-$1").toLowerCase())}},Ga=function(e){for(var t=Ll.length,n=e.style,i=[],s=0;s<t;s++)i.push(Ll[s],n[Ll[s]]);return i.t=e,i},hv=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Il={left:0,top:0},Sd=function(e,t,n,i,s,o,a,l,c,u,f,h,d,_){dn(e)&&(e=e(l)),Xn(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Cl("0"+e.substr(3),n):0));var g=d?d.time():0,m,p,M;if(d&&d.seek(0),isNaN(e)||(e=+e),Ho(e))d&&(e=Ue.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&Pl(a,n,i,!0);else{dn(t)&&(t=t(l));var y=(e||"0").split(" "),x,b,w,T;M=Rn(t,l)||_t,x=Wi(M)||{},(!x||!x.left&&!x.top)&&li(M).display==="none"&&(T=M.style.display,M.style.display="block",x=Wi(M),T?M.style.display=T:M.style.removeProperty("display")),b=Cl(y[0],x[i.d]),w=Cl(y[1]||"0",n),e=x[i.p]-c[i.p]-u+b+s-w,a&&Pl(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var C=e+n,S=o._isStart;m="scroll"+i.d2,Pl(o,C,i,S&&C>20||!S&&(f?Math.max(_t[m],Yn[m]):o.parentNode[m])<=C+1),f&&(c=Wi(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Kt))}return d&&M&&(m=Wi(M),d.seek(h),p=Wi(M),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*h),d&&d.seek(g),d?e:Math.round(e)},dv=/(webkit|moz|length|cssText|inset)/i,yd=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===_t){e._stOrig=s.cssText,a=li(e);for(o in a)!+o&&!dv.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ue.core.getCache(e).uncache=1,t.appendChild(e)}},T_=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Wa=function(e,t,n){var i={};i[t.p]="+="+n,Ue.set(e,i)},Md=function(e,t){var n=Lr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,_={};c=c||n();var g=T_(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){lt.cache++,o.tween&&Ji()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Ue.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},tn(e,"wheel",n.wheelHandler),Ze.isTouch&&tn(e,"touchmove",n.wheelHandler),s},Ze=(function(){function r(t,n){Ws||r.register(Ue)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Wu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!zo){this.update=this.refresh=this.kill=Ei;return}n=md(Xn(n)||Ho(n)||n.nodeType?{trigger:n}:n,Va);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,y=s.once,x=s.snap,b=s.pinReparent,w=s.pinSpacer,T=s.containerAnimation,C=s.fastScrollEnd,S=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Tn:Zt,P=!f&&f!==0,L=Rn(n.scroller||at),F=Ue.core.getCache(L),V=ds(L),O=("pinType"in n?n.pinType:Ar(L,"pinType")||V&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=P&&n.toggleActions.split(" "),G="markers"in n?n.markers:Va.markers,ee=V?0:parseFloat(li(L)["border"+v.p2+po])||0,I=this,le=n.onRefreshInit&&function(){return n.onRefreshInit(I)},ve=iv(L,V,v),Oe=rv(L,V),we=0,ye=0,q=0,te=Lr(L,v),pe,Ce,me,Be,nt,D,Ne,ke,De,N,Ke,Y,B,ae,se,R,E,k,J,Q,$,ge,re,Ee,ie,he,xe,ze,Le,Se,qe,U,ue,fe,de,oe,ne,Re,Fe;if(I._startClamp=I._endClamp=!1,I._dir=v,m*=45,I.scroller=L,I.scroll=T?T.time.bind(T):te,Be=te(),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(l_=1,n.refreshPriority===-9999&&(ra=I)),F.tweenScroll=F.tweenScroll||{top:Md(L,Zt),left:Md(L,Tn)},I.tweenTo=pe=F.tweenScroll[v.p],I.scrubDuration=function(be){ue=Ho(be)&&be,ue?U?U.duration(be):U=Ue.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ue,paused:!0,onComplete:function(){return p&&p(I)}}):(U&&U.progress(1).kill(),U=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(f),Se=0,l||(l=i.vars.id)),x&&((!Yr(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in _t.style&&Ue.set(V?[_t,Yn]:L,{scrollBehavior:"auto"}),lt.forEach(function(be){return dn(be)&&be.target===(V?vt.scrollingElement||Yn:L)&&(be.smooth=!1)}),me=dn(x.snapTo)?x.snapTo:x.snapTo==="labels"?ov(i):x.snapTo==="labelsDirectional"?av(i):x.directional!==!1?function(be,Ye){return Eh(x.snapTo)(be,un()-ye<500?0:Ye.direction)}:Ue.utils.snap(x.snapTo),fe=x.duration||{min:.1,max:2},fe=Yr(fe)?Jo(fe.min,fe.max):Jo(fe,fe),de=Ue.delayedCall(x.delay||ue/2||.1,function(){var be=te(),Ye=un()-ye<500,We=pe.tween;if((Ye||Math.abs(I.getVelocity())<10)&&!We&&!hc&&we!==be){var je=(be-D)/ae,zt=i&&!P?i.totalProgress():je,it=Ye?0:(zt-qe)/(un()-ko)*1e3||0,Pt=Ue.utils.clamp(-je,1-je,bs(it/2)*it/.185),Vt=je+(x.inertia===!1?0:Pt),At,Mt,gt=x,kn=gt.onStart,wt=gt.onInterrupt,mn=gt.onComplete;if(At=me(Vt,I),Ho(At)||(At=Vt),Mt=Math.max(0,Math.round(D+At*ae)),be<=Ne&&be>=D&&Mt!==be){if(We&&!We._initted&&We.data<=bs(Mt-be))return;x.inertia===!1&&(Pt=At-je),pe(Mt,{duration:fe(bs(Math.max(bs(Vt-zt),bs(At-zt))*.185/it/.05||0)),ease:x.ease||"power3",data:bs(Mt-be),onInterrupt:function(){return de.restart(!0)&&wt&&Ts(I,wt)},onComplete:function(){I.update(),we=te(),i&&!P&&(U?U.resetTo("totalProgress",At,i._tTime/i._tDur):i.progress(At)),Se=qe=i&&!P?i.totalProgress():I.progress,M&&M(I),mn&&Ts(I,mn)}},be,Pt*ae,Mt-be-Pt*ae),kn&&Ts(I,kn,pe.tween)}}else I.isActive&&we!==be&&de.restart(!0)}).pause()),l&&(qu[l]=I),h=I.trigger=Rn(h||d!==!0&&d),Fe=h&&h._gsap&&h._gsap.stRevert,Fe&&(Fe=Fe(I)),d=d===!0?h:Rn(d),Xn(a)&&(a={targets:h,className:a}),d&&(_===!1||_===ai||(_=!_&&d.parentNode&&d.parentNode.style&&li(d.parentNode).display==="flex"?!1:Xt),I.pin=d,Ce=Ue.core.getCache(d),Ce.spacer?se=Ce.pinState:(w&&(w=Rn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ce.spacerIsNative=!!w,w&&(Ce.spacerState=Ga(w))),Ce.spacer=k=w||vt.createElement("div"),k.classList.add("pin-spacer"),l&&k.classList.add("pin-spacer-"+l),Ce.pinState=se=Ga(d)),n.force3D!==!1&&Ue.set(d,{force3D:!0}),I.spacer=k=Ce.spacer,Le=li(d),Ee=Le[_+v.os2],Q=Ue.getProperty(d),$=Ue.quickSetter(d,v.a,Kt),Nc(d,k,Le),E=Ga(d)),G){Y=Yr(G)?md(G,_d):_d,N=Ha("scroller-start",l,L,v,Y,0),Ke=Ha("scroller-end",l,L,v,Y,0,N),J=N["offset"+v.op.d2];var ot=Rn(Ar(L,"content")||L);ke=this.markerStart=Ha("start",l,ot,v,Y,J,0,T),De=this.markerEnd=Ha("end",l,ot,v,Y,J,0,T),T&&(Re=Ue.quickSetter([ke,De],v.a,Kt)),!O&&!(Li.length&&Ar(L,"fixedMarkers")===!0)&&(sv(V?_t:L),Ue.set([N,Ke],{force3D:!0}),he=Ue.quickSetter(N,v.a,Kt),ze=Ue.quickSetter(Ke,v.a,Kt))}if(T){var Te=T.vars.onUpdate,Ve=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){I.update(0,0,1),Te&&Te.apply(T,Ve||[])})}if(I.previous=function(){return st[st.indexOf(I)-1]},I.next=function(){return st[st.indexOf(I)+1]},I.revert=function(be,Ye){if(!Ye)return I.kill(!0);var We=be!==!1||!I.enabled,je=cn;We!==I.isReverted&&(We&&(oe=Math.max(te(),I.scroll.rec||0),q=I.progress,ne=i&&i.progress()),ke&&[ke,De,N,Ke].forEach(function(zt){return zt.style.display=We?"none":"block"}),We&&(cn=I,I.update(We)),d&&(!b||!I.isActive)&&(We?uv(d,k,se):Nc(d,k,li(d),ie)),We||I.update(We),cn=je,I.isReverted=We)},I.refresh=function(be,Ye,We,je){if(!((cn||!I.enabled)&&!Ye)){if(d&&be&&hi){tn(r,"scrollEnd",x_);return}!En&&le&&le(I),cn=I,pe.tween&&!We&&(pe.tween.kill(),pe.tween=0),U&&U.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ct){return ct.vars.immediateRender&&ct.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var zt=ve(),it=Oe(),Pt=T?T.duration():Ri(L,v),Vt=ae<=.01||!ae,At=0,Mt=je||0,gt=Yr(We)?We.end:n.end,kn=n.endTrigger||h,wt=Yr(We)?We.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),mn=I.pinnedContainer=n.pinnedContainer&&Rn(n.pinnedContainer,I),ti=h&&Math.max(0,st.indexOf(I))||0,$t=ti,A,z,K,Z,H,ce,Me,Ie,Pe,Xe,Ge,He,Qe;for(G&&Yr(We)&&(He=Ue.getProperty(N,v.p),Qe=Ue.getProperty(Ke,v.p));$t-- >0;)ce=st[$t],ce.end||ce.refresh(0,1)||(cn=I),Me=ce.pin,Me&&(Me===h||Me===d||Me===mn)&&!ce.isReverted&&(Xe||(Xe=[]),Xe.unshift(ce),ce.revert(!0,!0)),ce!==st[$t]&&(ti--,$t--);for(dn(wt)&&(wt=wt(I)),wt=fd(wt,"start",I),D=Sd(wt,h,zt,v,te(),ke,N,I,it,ee,O,Pt,T,I._startClamp&&"_startClamp")||(d?-.001:0),dn(gt)&&(gt=gt(I)),Xn(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(Xn(wt)?wt.split(" ")[0]:"")+gt:(At=Cl(gt.substr(2),zt),gt=Xn(wt)?wt:(T?Ue.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,D):D)+At,kn=h)),gt=fd(gt,"end",I),Ne=Math.max(D,Sd(gt||(kn?"100% 0":Pt),kn,zt,v,te()+At,De,Ke,I,it,ee,O,Pt,T,I._endClamp&&"_endClamp"))||-.001,At=0,$t=ti;$t--;)ce=st[$t]||{},Me=ce.pin,Me&&ce.start-ce._pinPush<=D&&!T&&ce.end>0&&(A=ce.end-(I._startClamp?Math.max(0,ce.start):ce.start),(Me===h&&ce.start-ce._pinPush<D||Me===mn)&&isNaN(wt)&&(At+=A*(1-ce.progress)),Me===d&&(Mt+=A));if(D+=At,Ne+=At,I._startClamp&&(I._startClamp+=At),I._endClamp&&!En&&(I._endClamp=Ne||-.001,Ne=Math.min(Ne,Ri(L,v))),ae=Ne-D||(D-=.01)&&.001,Vt&&(q=Ue.utils.clamp(0,1,Ue.utils.normalize(D,Ne,oe))),I._pinPush=Mt,ke&&At&&(A={},A[v.a]="+="+At,mn&&(A[v.p]="-="+te()),Ue.set([ke,De],A)),d&&!(Xu&&I.end>=Ri(L,v)))A=li(d),Z=v===Zt,K=te(),ge=parseFloat(Q(v.a))+Mt,!Pt&&Ne>1&&(Ge=(V?vt.scrollingElement||Yn:L).style,Ge={style:Ge,value:Ge["overflow"+v.a.toUpperCase()]},V&&li(_t)["overflow"+v.a.toUpperCase()]!=="scroll"&&(Ge.style["overflow"+v.a.toUpperCase()]="scroll")),Nc(d,k,A),E=Ga(d),z=Wi(d,!0),Ie=O&&Lr(L,Z?Tn:Zt)(),_?(ie=[_+v.os2,ae+Mt+Kt],ie.t=k,$t=_===Xt?jl(d,v)+ae+Mt:0,$t&&(ie.push(v.d,$t+Kt),k.style.flexBasis!=="auto"&&(k.style.flexBasis=$t+Kt)),ro(ie),mn&&st.forEach(function(ct){ct.pin===mn&&ct.vars.pinSpacing!==!1&&(ct._subPinOffset=!0)}),O&&te(oe)):($t=jl(d,v),$t&&k.style.flexBasis!=="auto"&&(k.style.flexBasis=$t+Kt)),O&&(H={top:z.top+(Z?K-D:Ie)+Kt,left:z.left+(Z?Ie:K-D)+Kt,boxSizing:"border-box",position:"fixed"},H[ls]=H["max"+po]=Math.ceil(z.width)+Kt,H[cs]=H["max"+Mh]=Math.ceil(z.height)+Kt,H[ai]=H[ai+na]=H[ai+ea]=H[ai+ia]=H[ai+ta]="0",H[Xt]=A[Xt],H[Xt+na]=A[Xt+na],H[Xt+ea]=A[Xt+ea],H[Xt+ia]=A[Xt+ia],H[Xt+ta]=A[Xt+ta],R=hv(se,H,b),En&&te(0)),i?(Pe=i._initted,Dc(1),i.render(i.duration(),!0,!0),re=Q(v.a)-ge+ae+Mt,xe=Math.abs(ae-re)>1,O&&xe&&R.splice(R.length-2,2),i.render(0,!0,!0),Pe||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Dc(0)):re=ae,Ge&&(Ge.value?Ge.style["overflow"+v.a.toUpperCase()]=Ge.value:Ge.style.removeProperty("overflow-"+v.a));else if(h&&te()&&!T)for(z=h.parentNode;z&&z!==_t;)z._pinOffset&&(D-=z._pinOffset,Ne-=z._pinOffset),z=z.parentNode;Xe&&Xe.forEach(function(ct){return ct.revert(!1,!0)}),I.start=D,I.end=Ne,Be=nt=En?oe:te(),!T&&!En&&(Be<oe&&te(oe),I.scroll.rec=0),I.revert(!1,!0),ye=un(),de&&(we=-1,de.restart(!0)),cn=0,i&&P&&(i._initted||ne)&&i.progress()!==ne&&i.progress(ne||0,!0).render(i.time(),!0,!0),(Vt||q!==I.progress||T||g||i&&!i._initted)&&(i&&!P&&(i._initted||q||i.vars.immediateRender!==!1)&&i.totalProgress(T&&D<-.001&&!q?Ue.utils.normalize(D,Ne,0):q,!0),I.progress=Vt||(Be-D)/ae===q?0:q),d&&_&&(k._pinOffset=Math.round(I.progress*re)),U&&U.invalidate(),isNaN(He)||(He-=Ue.getProperty(N,v.p),Qe-=Ue.getProperty(Ke,v.p),Wa(N,v,He),Wa(ke,v,He-(je||0)),Wa(Ke,v,Qe),Wa(De,v,Qe-(je||0))),Vt&&!En&&I.update(),u&&!En&&!B&&(B=!0,u(I),B=!1)}},I.getVelocity=function(){return(te()-nt)/(un()-ko)*1e3||0},I.endAnimation=function(){wo(I.callbackAnimation),i&&(U?U.progress(1):i.paused()?P||wo(i,I.direction<0,1):wo(i,i.reversed()))},I.labelToScroll=function(be){return i&&i.labels&&(D||I.refresh()||D)+i.labels[be]/i.duration()*ae||0},I.getTrailing=function(be){var Ye=st.indexOf(I),We=I.direction>0?st.slice(0,Ye).reverse():st.slice(Ye+1);return(Xn(be)?We.filter(function(je){return je.vars.preventOverlaps===be}):We).filter(function(je){return I.direction>0?je.end<=D:je.start>=Ne})},I.update=function(be,Ye,We){if(!(T&&!We&&!be)){var je=En===!0?oe:I.scroll(),zt=be?0:(je-D)/ae,it=zt<0?0:zt>1?1:zt||0,Pt=I.progress,Vt,At,Mt,gt,kn,wt,mn,ti;if(Ye&&(nt=Be,Be=T?te():je,x&&(qe=Se,Se=i&&!P?i.totalProgress():it)),m&&d&&!cn&&!Oa&&hi&&(!it&&D<je+(je-nt)/(un()-ko)*m?it=1e-4:it===1&&Ne>je+(je-nt)/(un()-ko)*m&&(it=.9999)),it!==Pt&&I.enabled){if(Vt=I.isActive=!!it&&it<1,At=!!Pt&&Pt<1,wt=Vt!==At,kn=wt||!!it!=!!Pt,I.direction=it>Pt?1:-1,I.progress=it,kn&&!cn&&(Mt=it&&!Pt?0:it===1?1:Pt===1?2:3,P&&(gt=!wt&&X[Mt+1]!=="none"&&X[Mt+1]||X[Mt],ti=i&&(gt==="complete"||gt==="reset"||gt in i))),S&&(wt||ti)&&(ti||f||!i)&&(dn(S)?S(I):I.getTrailing(S).forEach(function(K){return K.endAnimation()})),P||(U&&!cn&&!Oa?(U._dp._time-U._start!==U._time&&U.render(U._dp._time-U._start),U.resetTo?U.resetTo("totalProgress",it,i._tTime/i._tDur):(U.vars.totalProgress=it,U.invalidate().restart())):i&&i.totalProgress(it,!!(cn&&(ye||be)))),d){if(be&&_&&(k.style[_+v.os2]=Ee),!O)$(Vo(ge+re*it));else if(kn){if(mn=!be&&it>Pt&&Ne+1>je&&je+1>=Ri(L,v),b)if(!be&&(Vt||mn)){var $t=Wi(d,!0),A=je-D;yd(d,_t,$t.top+(v===Zt?A:0)+Kt,$t.left+(v===Zt?0:A)+Kt)}else yd(d,k);ro(Vt||mn?R:E),xe&&it<1&&Vt||$(ge+(it===1&&!mn?re:0))}}x&&!pe.tween&&!cn&&!Oa&&de.restart(!0),a&&(wt||y&&it&&(it<1||!Lc))&&ga(a.targets).forEach(function(K){return K.classList[Vt||y?"add":"remove"](a.className)}),o&&!P&&!be&&o(I),kn&&!cn?(P&&(ti&&(gt==="complete"?i.pause().totalProgress(1):gt==="reset"?i.restart(!0).pause():gt==="restart"?i.restart(!0):i[gt]()),o&&o(I)),(wt||!Lc)&&(c&&wt&&Ts(I,c),W[Mt]&&Ts(I,W[Mt]),y&&(it===1?I.kill(!1,1):W[Mt]=0),wt||(Mt=it===1?1:3,W[Mt]&&Ts(I,W[Mt]))),C&&!Vt&&Math.abs(I.getVelocity())>(Ho(C)?C:2500)&&(wo(I.callbackAnimation),U?U.progress(1):wo(i,gt==="reverse"?1:!it,1))):P&&o&&!cn&&o(I)}if(ze){var z=T?je/T.duration()*(T._caScrollDist||0):je;he(z+(N._isFlipped?1:0)),ze(z)}Re&&Re(-je/T.duration()*(T._caScrollDist||0))}},I.enable=function(be,Ye){I.enabled||(I.enabled=!0,tn(L,"resize",Go),V||tn(L,"scroll",As),le&&tn(r,"refreshInit",le),be!==!1&&(I.progress=q=0,Be=nt=we=te()),Ye!==!1&&I.refresh())},I.getTween=function(be){return be&&pe?pe.tween:U},I.setPositions=function(be,Ye,We,je){if(T){var zt=T.scrollTrigger,it=T.duration(),Pt=zt.end-zt.start;be=zt.start+Pt*be/it,Ye=zt.start+Pt*Ye/it}I.refresh(!1,!1,{start:hd(be,We&&!!I._startClamp),end:hd(Ye,We&&!!I._endClamp)},je),I.update()},I.adjustPinSpacing=function(be){if(ie&&be){var Ye=ie.indexOf(v.d)+1;ie[Ye]=parseFloat(ie[Ye])+be+Kt,ie[1]=parseFloat(ie[1])+be+Kt,ro(ie)}},I.disable=function(be,Ye){if(be!==!1&&I.revert(!0,!0),I.enabled&&(I.enabled=I.isActive=!1,Ye||U&&U.pause(),oe=0,Ce&&(Ce.uncache=1),le&&en(r,"refreshInit",le),de&&(de.pause(),pe.tween&&pe.tween.kill()&&(pe.tween=0)),!V)){for(var We=st.length;We--;)if(st[We].scroller===L&&st[We]!==I)return;en(L,"resize",Go),V||en(L,"scroll",As)}},I.kill=function(be,Ye){I.disable(be,Ye),U&&!Ye&&U.kill(),l&&delete qu[l];var We=st.indexOf(I);We>=0&&st.splice(We,1),We===Mn&&Dl>0&&Mn--,We=0,st.forEach(function(je){return je.scroller===I.scroller&&(We=1)}),We||En||(I.scroll.rec=0),i&&(i.scrollTrigger=null,be&&i.revert({kill:!1}),Ye||i.kill()),ke&&[ke,De,N,Ke].forEach(function(je){return je.parentNode&&je.parentNode.removeChild(je)}),ra===I&&(ra=0),d&&(Ce&&(Ce.uncache=1),We=0,st.forEach(function(je){return je.pin===d&&We++}),We||(Ce.spacer=0)),n.onKill&&n.onKill(I)},st.push(I),I.enable(!1,!1),Fe&&Fe(I),i&&i.add&&!ae){var Je=I.update;I.update=function(){I.update=Je,lt.cache++,D||Ne||I.refresh()},Ue.delayedCall(.01,I.update),ae=.01,D=Ne=0}else I.refresh();d&&cv()},r.register=function(n){return Ws||(Ue=n||d_(),h_()&&window.document&&r.enable(),Ws=zo),Ws},r.defaults=function(n){if(n)for(var i in n)Va[i]=n[i];return Va},r.disable=function(n,i){zo=0,st.forEach(function(o){return o[i?"kill":"disable"](n)}),en(at,"wheel",As),en(vt,"scroll",As),clearInterval(Fa),en(vt,"touchcancel",Ei),en(_t,"touchstart",Ei),ka(en,vt,"pointerdown,touchstart,mousedown",dd),ka(en,vt,"pointerup,touchend,mouseup",pd),Zl.kill(),Ba(en);for(var s=0;s<lt.length;s+=3)za(en,lt[s],lt[s+1]),za(en,lt[s],lt[s+2])},r.enable=function(){if(at=window,vt=document,Yn=vt.documentElement,_t=vt.body,Ue){if(ga=Ue.utils.toArray,Jo=Ue.utils.clamp,Wu=Ue.core.context||Ei,Dc=Ue.core.suppressOverwrites||Ei,vh=at.history.scrollRestoration||"auto",Yu=at.pageYOffset||0,Ue.core.globals("ScrollTrigger",r),_t){zo=1,io=document.createElement("div"),io.style.height="100vh",io.style.position="absolute",E_(),nv(),Ot.register(Ue),r.isTouch=Ot.isTouch,pr=Ot.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Gu=Ot.isTouch===1,tn(at,"wheel",As),gh=[at,vt,Yn,_t],Ue.matchMedia?(r.matchMedia=function(u){var f=Ue.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},Ue.addEventListener("matchMediaInit",function(){y_(),Th()}),Ue.addEventListener("matchMediaRevert",function(){return S_()}),Ue.addEventListener("matchMedia",function(){ts(0,1),ms("matchMedia")}),Ue.matchMedia().add("(orientation: portrait)",function(){return Uc(),Uc})):console.warn("Requires GSAP 3.11.0 or later"),Uc(),tn(vt,"scroll",As);var n=_t.hasAttribute("style"),i=_t.style,s=i.borderTopStyle,o=Ue.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Wi(_t),Zt.m=Math.round(a.top+Zt.sc())||0,Tn.m=Math.round(a.left+Tn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(_t.setAttribute("style",""),_t.removeAttribute("style")),Fa=setInterval(gd,250),Ue.delayedCall(.5,function(){return Oa=0}),tn(vt,"touchcancel",Ei),tn(_t,"touchstart",Ei),ka(tn,vt,"pointerdown,touchstart,mousedown",dd),ka(tn,vt,"pointerup,touchend,mouseup",pd),Hu=Ue.utils.checkPrefix("transform"),Ll.push(Hu),Ws=un(),Zl=Ue.delayedCall(.2,ts).pause(),Xs=[vt,"visibilitychange",function(){var u=at.innerWidth,f=at.innerHeight;vt.hidden?(cd=u,ud=f):(cd!==u||ud!==f)&&Go()},vt,"DOMContentLoaded",ts,at,"load",ts,at,"resize",Go],Ba(tn),st.forEach(function(u){return u.enable(0,1)}),l=0;l<lt.length;l+=3)za(en,lt[l],lt[l+1]),za(en,lt[l],lt[l+2])}else if(vt){var c=function u(){r.enable(),vt.removeEventListener("DOMContentLoaded",u)};vt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Lc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Fa)||(Fa=i)&&setInterval(gd,i),"ignoreMobileResize"in n&&(Gu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ba(en)||Ba(tn,n.autoRefreshEvents||"none"),c_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Rn(n),o=lt.indexOf(s),a=ds(s);~o&&lt.splice(o,a?6:2),i&&(a?Li.unshift(at,i,_t,i,Yn,i):Li.unshift(s,i))},r.clearMatchMedia=function(n){st.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Xn(n)?Rn(n):n).getBoundingClientRect(),a=o[s?ls:cs]*i||0;return s?o.right-a>0&&o.left+a<at.innerWidth:o.bottom-a>0&&o.top+a<at.innerHeight},r.positionInViewport=function(n,i,s){Xn(n)&&(n=Rn(n));var o=n.getBoundingClientRect(),a=o[s?ls:cs],l=i==null?a/2:i in Jl?Jl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/at.innerWidth:(o.top+l)/at.innerHeight},r.killAll=function(n){if(st.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ps.killAll||[];ps={},i.forEach(function(s){return s()})}},r})();Ze.version="3.15.0";Ze.saveStyles=function(r){return r?ga(r).forEach(function(e){if(e&&e.style){var t=Wn.indexOf(e);t>=0&&Wn.splice(t,5),Wn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ue.core.getCache(e),Wu())}}):Wn};Ze.revert=function(r,e){return Th(!r,e)};Ze.create=function(r,e){return new Ze(r,e)};Ze.refresh=function(r){return r?Go(!0):(Ws||Ze.register())&&ts(!0)};Ze.update=function(r){return++lt.cache&&Ji(r===!0?2:0)};Ze.clearScrollMemory=M_;Ze.maxScroll=function(r,e){return Ri(r,e?Tn:Zt)};Ze.getScrollFunc=function(r,e){return Lr(Rn(r),e?Tn:Zt)};Ze.getById=function(r){return qu[r]};Ze.getAll=function(){return st.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Ze.isScrolling=function(){return!!hi};Ze.snapDirectional=Eh;Ze.addEventListener=function(r,e){var t=ps[r]||(ps[r]=[]);~t.indexOf(e)||t.push(e)};Ze.removeEventListener=function(r,e){var t=ps[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ze.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Ue.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(_){f.length||d.restart(!0),f.push(_.trigger),h.push(_),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&dn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return dn(s)&&(s=s(),tn(Ze,"refresh",function(){return s=e.batchMax()})),ga(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Ze.create(c))}),t};var Ed=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Fc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ot.isTouch?" pinch-zoom":""):"none",e===Yn&&r(_t,t)},Xa={auto:1,scroll:1},pv=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ue.core.getCache(s),a=un(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==_t&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Xa[(l=li(s)).overflowY]||Xa[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ds(s)&&(Xa[(l=li(s)).overflowY]||Xa[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},b_=function(e,t,n,i){return Ot.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&pv,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&tn(vt,Ot.eventTypes[0],bd,!1,!0)},onDisable:function(){return en(vt,Ot.eventTypes[0],bd,!0)}})},mv=/(input|label|select|textarea)/i,Td,bd=function(e){var t=mv.test(e.target.tagName);(t||Td)&&(e._gsapAllow=!0,Td=t)},_v=function(e){Yr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Rn(e.target)||Yn,u=Ue.core.globals().ScrollSmoother,f=u&&u.get(),h=pr&&(e.content&&Rn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=Lr(c,Zt),_=Lr(c,Tn),g=1,m=(Ot.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,p=0,M=dn(i)?function(){return i(a)}:function(){return i||2.8},y,x,b=b_(c,e.type,!0,s),w=function(){return x=!1},T=Ei,C=Ei,S=function(){l=Ri(c,Zt),C=Jo(pr?1:0,l),n&&(T=Jo(0,Ri(c,Tn))),y=us},v=function(){h._gsap.y=Vo(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(x){requestAnimationFrame(w);var G=Vo(a.deltaY/2),ee=C(d.v-G);if(h&&ee!==d.v+d.offset){d.offset=ee-d.v;var I=Vo((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",h._gsap.y=I+"px",d.cacheID=lt.cache,Ji()}return!0}d.offset&&v(),x=!0},L,F,V,O,W=function(){S(),L.isActive()&&L.vars.scrollY>l&&(d()>l?L.progress(1)&&d(l):L.resetTo("scrollY",l))};return h&&Ue.set(h,{y:"+=0"}),e.ignoreCheck=function(X){return pr&&X.type==="touchmove"&&P()||g>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){x=!1;var X=g;g=Vo((at.visualViewport&&at.visualViewport.scale||1)/m),L.pause(),X!==g&&Fc(c,g>1.01?!0:n?!1:"x"),F=_(),V=d(),S(),y=us},e.onRelease=e.onGestureStart=function(X,G){if(d.offset&&v(),!G)O.restart(!0);else{lt.cache++;var ee=M(),I,le;n&&(I=_(),le=I+ee*.05*-X.velocityX/.227,ee*=Ed(_,I,le,Ri(c,Tn)),L.vars.scrollX=T(le)),I=d(),le=I+ee*.05*-X.velocityY/.227,ee*=Ed(d,I,le,Ri(c,Zt)),L.vars.scrollY=C(le),L.invalidate().duration(ee).play(.01),(pr&&L.vars.scrollY>=l||I>=l-1)&&Ue.to({},{onUpdate:W,duration:ee})}o&&o(X)},e.onWheel=function(){L._ts&&L.pause(),un()-p>1e3&&(y=0,p=un())},e.onChange=function(X,G,ee,I,le){if(us!==y&&S(),G&&n&&_(T(I[2]===G?F+(X.startX-X.x):_()+G-I[1])),ee){d.offset&&v();var ve=le[2]===ee,Oe=ve?V+X.startY-X.y:d()+ee-le[1],we=C(Oe);ve&&Oe!==we&&(V+=we-Oe),d(we)}(ee||G)&&Ji()},e.onEnable=function(){Fc(c,n?!1:"x"),Ze.addEventListener("refresh",W),tn(at,"resize",W),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),b.enable()},e.onDisable=function(){Fc(c,!0),en(at,"resize",W),Ze.removeEventListener("refresh",W),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new Ot(e),a.iOS=pr,pr&&!d()&&d(1),pr&&Ue.ticker.add(Ei),O=a._dc,L=Ue.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:T_(d,d(),function(){return L.pause()})},onUpdate:Ji,onComplete:O.vars.onComplete}),a};Ze.sort=function(r){if(dn(r))return st.sort(r);var e=at.pageYOffset||0;return Ze.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+at.innerHeight}),st.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ze.observe=function(r){return new Ot(r)};Ze.normalizeScroll=function(r){if(typeof r>"u")return yn;if(r===!0&&yn)return yn.enable();if(r===!1){yn&&yn.kill(),yn=r;return}var e=r instanceof Ot?r:_v(r);return yn&&yn.target===e.target&&yn.kill(),ds(e.target)&&(yn=e),e};Ze.core={_getVelocityProp:Vu,_inputObserver:b_,_scrollers:lt,_proxies:Li,bridge:{ss:function(){hi||ms("scrollStart"),hi=un()},ref:function(){return cn}}};d_()&&Ue.registerPlugin(Ze);function gv(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function vv(r,e,t){return e&&gv(r.prototype,e),r}var mt,qa,xn,mr,Wo,Ni,$r,Ad,et,Ti,Ya,wd,Rd,Cd,Pd,A_=function(){return typeof window<"u"},w_=function(){return mt||A_()&&(mt=window.gsap)&&mt.registerPlugin&&mt},xv=function(e){return Math.round(e*1e5)/1e5||0},or=function(e){return et.maxScroll(e||xn)},Sv=function(e,t){var n=e.parentNode||Wo,i=e.getBoundingClientRect(),s=n.getBoundingClientRect(),o=s.top-i.top,a=s.bottom-i.bottom,l=(Math.abs(o)>Math.abs(a)?o:a)/(1-t),c=-l*t,u,f;return l>0&&(u=s.height/(xn.innerHeight+s.height),f=u===.5?s.height*2:Math.min(s.height,Math.abs(-l*u/(2*u-1)))*2*(t||1),c+=t?-f*t:-f/2,l+=f),{change:l,offset:c}},yv=function(e){var t=mr.querySelector(".ScrollSmoother-wrapper");return t||(t=mr.createElement("div"),t.classList.add("ScrollSmoother-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e)),t},Ir=(function(){function r(e){var t=this;qa||r.register(mt)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),e=this.vars=e||{},Ti&&Ti.kill(),Ti=this,Cd(this);var n=e,i=n.smoothTouch,s=n.onUpdate,o=n.onStop,a=n.smooth,l=n.onFocusIn,c=n.normalizeScroll,u=n.wholePixels,f,h,d,_,g,m,p,M,y,x,b,w,T,C,S=this,v=e.effectsPrefix||"",P=et.getScrollFunc(xn),L=et.isTouch===1?i===!0?.8:parseFloat(i)||0:a===0||a===!1?0:parseFloat(a)||.8,F=L&&+e.speed||1,V=0,O=0,W=1,X=wd(0),G=function(){return X.update(-V)},ee={y:0},I=function(){return f.style.overflow="visible"},le,ve=function(B){B.update();var ae=B.getTween();ae&&(ae.pause(),ae._time=ae._dur,ae._tTime=ae._tDur),le=!1,B.animation.progress(B.progress,!0)},Oe=function(B,ae){(B!==V&&!x||ae)&&(u&&(B=Math.round(B)),L&&(f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+B+", 0, 1)",f._gsap.y=B+"px"),O=B-V,V=B,et.isUpdating||r.isRefreshing||et.update())},we=function(B){return arguments.length?(B<0&&(B=0),ee.y=-B,le=!0,x?V=-B:Oe(-B),et.isRefreshing?_.update():P(B/F),this):-V},ye=typeof ResizeObserver<"u"&&e.autoResize!==!1&&new ResizeObserver(function(){if(!et.isRefreshing){var Y=or(h)*F;Y<-V&&we(Y),Pd.restart(!0)}}),q,te=function(B){h.scrollTop=0,!(B.target.contains&&B.target.contains(h)||l&&l(t,B)===!1)&&(et.isInViewport(B.target)||B.target===q||t.scrollTo(B.target,!1,"center center"),q=B.target)},pe=function(B,ae){if(B<ae.start)return B;var se=isNaN(ae.ratio)?1:ae.ratio,R=ae.end-ae.start,E=B-ae.start,k=ae.offset||0,J=ae.pins||[],Q=J.offset||0,$=ae._startClamp&&ae.start<=0||ae.pins&&ae.pins.offset?0:ae._endClamp&&ae.end===or()?1:.5;return J.forEach(function(ge){R-=ge.distance,ge.nativeStart<=B&&(E-=ge.distance)}),Q&&(E*=(R-Q/se)/R),B+(E-k*$)/se-E},Ce=function Y(B,ae,se){se||(B.pins.length=B.pins.offset=0);var R=B.pins,E=B.markers,k,J,Q,$,ge,re,Ee,ie;for(Ee=0;Ee<ae.length;Ee++)if(ie=ae[Ee],B.trigger&&ie.trigger&&B!==ie&&(ie.trigger===B.trigger||ie.pinnedContainer===B.trigger||B.trigger.contains(ie.trigger))&&(ge=ie._startNative||ie._startClamp||ie.start,re=ie._endNative||ie._endClamp||ie.end,Q=pe(ge,B),$=ie.pin&&re>0?Q+(re-ge):pe(re,B),ie.setPositions(Q,$,!0,(ie._startClamp?Math.max(0,Q):Q)-ge),ie.markerStart&&E.push(mt.quickSetter([ie.markerStart,ie.markerEnd],"y","px")),ie.pin&&ie.end>0&&!se)){if(k=ie.end-ie.start,J=B._startClamp&&ie.start<0,J){if(B.start>0){B.setPositions(0,B.end+(B._startNative-B.start),!0),Y(B,ae);return}k+=ie.start,R.offset=-ie.start}R.push({start:ie.start,nativeStart:ge,end:ie.end,distance:k,trig:ie}),B.setPositions(B.start,B.end+(J?-ie.start:k),!0)}},me=function(B,ae){g.forEach(function(se){return Ce(se,B,ae)})},Be=function(){Wo=mr.documentElement,Ni=mr.body,I(),requestAnimationFrame(I),g&&(et.getAll().forEach(function(B){B._startNative=B.start,B._endNative=B.end}),g.forEach(function(B){var ae=B._startClamp||B.start,se=B.autoSpeed?Math.min(or(),B.end):ae+Math.abs((B.end-ae)/B.ratio),R=se-B.end;if(ae-=R/2,se-=R/2,ae>se){var E=ae;ae=se,se=E}B._startClamp&&ae<0?(se=B.ratio<0?or():B.end/B.ratio,R=se-B.end,ae=0):(B.ratio<0||B._endClamp&&se>=or())&&(se=or(),ae=B.ratio<0||B.ratio>1?0:se-(se-B.start)/B.ratio,R=(se-ae)*B.ratio-(B.end-B.start)),B.offset=R||1e-4,B.pins.length=B.pins.offset=0,B.setPositions(ae,se,!0)}),me(et.sort())),X.reset()},nt=function(){return et.addEventListener("refresh",Be)},D=function(){return g&&g.forEach(function(B){return B.vars.onRefresh(B)})},Ne=function(){return g&&g.forEach(function(B){return B.vars.onRefreshInit(B)}),D},ke=function(B,ae,se,R){return function(){var E=typeof ae=="function"?ae(se,R):ae;E||E===0||(E=R.getAttribute("data-"+v+B)||(B==="speed"?1:0)),R.setAttribute("data-"+v+B,E);var k=(E+"").substr(0,6)==="clamp(";return{clamp:k,value:k?E.substr(6,E.length-7):E}}},De=function(B,ae,se,R,E){E=(typeof E=="function"?E(R,B):E)||0;var k=ke("speed",ae,R,B),J=ke("lag",se,R,B),Q=mt.getProperty(B,"y"),$=B._gsap,ge,re,Ee,ie,he,xe,ze=[],Le=function(){ae=k(),se=parseFloat(J().value),ge=parseFloat(ae.value)||1,Ee=ae.value==="auto",he=Ee||re&&re._startClamp&&re.start<=0||ze.offset?0:re&&re._endClamp&&re.end===or()?1:.5,ie&&ie.kill(),ie=se&&mt.to(B,{ease:Ya,overwrite:!1,y:"+=0",duration:se}),re&&(re.ratio=ge,re.autoSpeed=Ee)},Se=function(){$.y=Q+"px",$.renderTransform(1),Le()},qe=[],U=0,ue=function(de){if(Ee){Se();var oe=Sv(B,Ad(0,1,-de.start/(de.end-de.start)));U=oe.change,xe=oe.offset}else xe=ze.offset||0,U=(de.end-de.start-xe)*(1-ge);ze.forEach(function(ne){return U-=ne.distance*(1-ge)}),de.offset=U||.001,de.vars.onUpdate(de),ie&&ie.progress(1)};return Le(),(ge!==1||Ee||ie)&&(re=et.create({trigger:Ee?B.parentNode:B,start:function(){return ae.clamp?"clamp(top bottom+="+E+")":"top bottom+="+E},end:function(){return ae.value<0?"max":ae.clamp?"clamp(bottom top-="+E+")":"bottom top-="+E},scroller:h,scrub:!0,refreshPriority:-999,onRefreshInit:Se,onRefresh:ue,onKill:function(de){var oe=g.indexOf(de);oe>=0&&g.splice(oe,1),Se()},onUpdate:function(de){var oe=Q+U*(de.progress-he),ne=ze.length,Re=0,Fe,ot,Te;if(de.offset){if(ne){for(ot=-V,Te=de.end;ne--;){if(Fe=ze[ne],Fe.trig.isActive||ot>=Fe.start&&ot<=Fe.end){ie&&(Fe.trig.progress+=Fe.trig.direction<0?.001:-.001,Fe.trig.update(0,0,1),ie.resetTo("y",parseFloat($.y),-O,!0),W&&ie.progress(1));return}ot>Fe.end&&(Re+=Fe.distance),Te-=Fe.distance}oe=Q+Re+U*((mt.utils.clamp(de.start,de.end,ot)-de.start-Re)/(Te-de.start)-he)}qe.length&&!Ee&&qe.forEach(function(Ve){return Ve(oe-Re)}),oe=xv(oe+xe),ie?(ie.resetTo("y",oe,-O,!0),W&&ie.progress(1)):($.y=oe+"px",$.renderTransform(1))}}}),ue(re),mt.core.getCache(re.trigger).stRevert=Ne,re.startY=Q,re.pins=ze,re.markers=qe,re.ratio=ge,re.autoSpeed=Ee,B.style.willChange="transform"),re};nt(),et.addEventListener("killAll",nt),mt.delayedCall(.5,function(){return W=0}),this.scrollTop=we,this.scrollTo=function(Y,B,ae){var se=mt.utils.clamp(0,or(),isNaN(Y)?t.offset(Y,ae,!!B&&!x):+Y);B?x?mt.to(t,{duration:L,scrollTop:se,overwrite:"auto",ease:Ya}):P(se):we(se)},this.offset=function(Y,B,ae){Y=$r(Y)[0];var se=Y.style.cssText,R=et.create({trigger:Y,start:B||"top top"}),E;return g&&(W?et.refresh():me([R],!0)),E=R.start/(ae?F:1),R.kill(!1),Y.style.cssText=se,mt.core.getCache(Y).uncache=1,E};function N(){return d=f.clientHeight,f.style.overflow="visible",Ni.style.height=xn.innerHeight+(d-xn.innerHeight)/F+"px",d-xn.innerHeight}this.content=function(Y){if(arguments.length){var B=$r(Y||"#smooth-content")[0]||console.warn("ScrollSmoother needs a valid content element.")||Ni.children[0];return B!==f&&(f=B,y=f.getAttribute("style")||"",ye&&ye.observe(f),mt.set(f,{overflow:"visible",width:"100%",boxSizing:"border-box",y:"+=0"}),L||mt.set(f,{clearProps:"transform"})),this}return f},this.wrapper=function(Y){return arguments.length?(h=$r(Y||"#smooth-wrapper")[0]||yv(f),M=h.getAttribute("style")||"",N(),mt.set(h,L?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):h},this.effects=function(Y,B){var ae;if(g||(g=[]),!Y)return g.slice(0);Y=$r(Y),Y.forEach(function(ge){for(var re=g.length;re--;)g[re].trigger===ge&&g[re].kill()}),B=B||{};var se=B,R=se.speed,E=se.lag,k=se.effectsPadding,J=[],Q,$;for(Q=0;Q<Y.length;Q++)$=De(Y[Q],R,E,Q,k),$&&J.push($);return(ae=g).push.apply(ae,J),B.refresh!==!1&&et.refresh(),J},this.sections=function(Y,B){var ae;if(m||(m=[]),!Y)return m.slice(0);var se=$r(Y).map(function(R){return et.create({trigger:R,start:"top 120%",end:"bottom -20%",onToggle:function(k){R.style.opacity=k.isActive?"1":"0",R.style.pointerEvents=k.isActive?"all":"none"}})});return B&&B.add?(ae=m).push.apply(ae,se):m=se.slice(0),se},this.content(e.content),this.wrapper(e.wrapper),this.render=function(Y){return Oe(Y||Y===0?Y:V)},this.getVelocity=function(){return X.getVelocity(-V)},et.scrollerProxy(h,{scrollTop:we,scrollHeight:function(){return N()&&Ni.scrollHeight},fixedMarkers:e.fixedMarkers!==!1&&!!L,content:f,getBoundingClientRect:function(){return{top:0,left:0,width:xn.innerWidth,height:xn.innerHeight}}}),et.defaults({scroller:h});var Ke=et.getAll().filter(function(Y){return Y.scroller===xn||Y.scroller===h});Ke.forEach(function(Y){return Y.revert(!0,!0)}),_=et.create({animation:mt.fromTo(ee,{y:function(){return C=0,0}},{y:function(){return C=1,-N()},immediateRender:!1,ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function(){if(C){var B=le;B&&(ve(_),ee.y=V),Oe(ee.y,B),G(),s&&!x&&s(S)}}}),onRefreshInit:function(B){if(!r.isRefreshing){if(r.isRefreshing=!0,g){var ae=et.getAll().filter(function(R){return!!R.pin});g.forEach(function(R){R.vars.pinnedContainer||ae.forEach(function(E){if(E.pin.contains(R.trigger)){var k=R.vars;k.pinnedContainer=E.pin,R.vars=null,R.init(k,R.animation)}})})}var se=B.getTween();T=se&&se._end>se._dp._time,w=V,ee.y=0,L&&(et.isTouch===1&&(h.style.position="absolute"),h.scrollTop=0,et.isTouch===1&&(h.style.position="fixed"))}},onRefresh:function(B){B.animation.invalidate(),ee.y=0,B.setPositions(B.start,N()/F),T||ve(B),ee.y=-P()*F,Oe(ee.y),W||(T&&(le=!1),B.animation.progress(mt.utils.clamp(0,1,w/F/-B.end))),T&&(B.progress-=.001,B.update()),r.isRefreshing=!1},id:"ScrollSmoother",scroller:xn,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:function(){return N()/F},onScrubComplete:function(){X.reset(),o&&o(t)},scrub:L||!0}),this.smooth=function(Y){return arguments.length&&(L=Y||0,F=L&&+e.speed||1,_.scrubDuration(Y)),_.getTween()?_.getTween().duration():0},_.getTween()&&(_.getTween().vars.ease=e.ease||Ya),this.scrollTrigger=_,e.effects&&this.effects(e.effects===!0?"[data-"+v+"speed], [data-"+v+"lag]":e.effects,{effectsPadding:e.effectsPadding,refresh:!1}),e.sections&&this.sections(e.sections===!0?"[data-section]":e.sections),Ke.forEach(function(Y){Y.vars.scroller=h,Y.revert(!1,!0),Y.init(Y.vars,Y.animation)}),this.paused=function(Y,B){return arguments.length?(!!x!==Y&&(Y?(_.getTween()&&_.getTween().pause(),P(-V/F),X.reset(),b=et.normalizeScroll(),b&&b.disable(),x=et.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,allowClicks:!0,onChangeY:function(){return we(-V)}}),x.nested=Rd(Wo,"wheel,touch,scroll",!0,B!==!1)):(x.nested.kill(),x.kill(),x=0,b&&b.enable(),_.progress=(-V/F-_.start)/(_.end-_.start),ve(_))),this):!!x},this.kill=this.revert=function(){t.paused(!1),ve(_),_.kill();for(var Y=(g||[]).concat(m||[]),B=Y.length;B--;)Y[B].kill();et.scrollerProxy(h),et.removeEventListener("killAll",nt),et.removeEventListener("refresh",Be),h.style.cssText=M,f.style.cssText=y;var ae=et.defaults({});ae&&ae.scroller===h&&et.defaults({scroller:xn}),t.normalizer&&et.normalizeScroll(!1),clearInterval(p),Ti=null,ye&&ye.disconnect(),Ni.style.removeProperty("height"),xn.removeEventListener("focusin",te)},this.refresh=function(Y,B){return _.refresh(Y,B)},c&&(this.normalizer=et.normalizeScroll(c===!0?{debounce:!0,content:!L&&f}:c)),et.config(e),"scrollBehavior"in xn.getComputedStyle(Ni)&&mt.set([Ni,Wo],{scrollBehavior:"auto"}),xn.addEventListener("focusin",te),p=setInterval(G,250),mr.readyState==="loading"||requestAnimationFrame(function(){return et.refresh()})}return r.register=function(t){return qa||(mt=t||w_(),A_()&&window.document&&(xn=window,mr=document,Wo=mr.documentElement,Ni=mr.body),mt&&($r=mt.utils.toArray,Ad=mt.utils.clamp,Ya=mt.parseEase("expo"),Cd=mt.core.context||function(){},et=mt.core.globals().ScrollTrigger,mt.core.globals("ScrollSmoother",r),Ni&&et&&(Pd=mt.delayedCall(.2,function(){return et.isRefreshing||Ti&&Ti.refresh()}).pause(),wd=et.core._getVelocityProp,Rd=et.core._inputObserver,r.refresh=et.refresh,qa=1))),qa},vv(r,[{key:"progress",get:function(){return this.scrollTrigger?this.scrollTrigger.animation._time/100:0}}]),r})();Ir.version="3.15.0";Ir.create=function(r){return Ti&&r&&Ti.content()===$r(r.content)[0]?Ti:new Ir(r)};Ir.get=function(){return Ti};w_()&&mt.registerPlugin(Ir);let Ro,Co,Dd=typeof Symbol=="function"?Symbol():"_split",Ku,Mv=()=>Ku||dc.register(window.gsap),Ld=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,xa=r=>r?typeof r=="string"?xa(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((e,t)=>(typeof t=="string"?e.push(...xa(t)):e.push(t),e),[]):[r]:[],Id=r=>xa(r).filter(e=>e&&e.nodeType===1),Zu=[],Oc=function(){},Ev={add:r=>r()},Tv=/\s+/g,Ud=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Ql={left:0,top:0,width:0,height:0},bv=(r,e)=>{for(;++e<r.length&&r[e]===Ql;);return r[e]||Ql},Nd=({element:r,html:e,ariaL:t,ariaH:n})=>{r.innerHTML=e,t?r.setAttribute("aria-label",t):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},Fd=(r,e)=>{if(e){let t=new Set(r.join("").match(e)||Zu),n=r.length,i,s,o,a;if(t.size)for(;--n>-1;){s=r[n];for(o of t)if(o.startsWith(s)&&o.length>s.length){for(i=0,a=s;o.startsWith(a+=r[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){r[n]=o,r.splice(n+1,i);break}}}}return r},Od=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),ws=(r,e,t)=>e.insertBefore(typeof r=="string"?document.createTextNode(r):r,t),ju=(r,e,t)=>{let n=e[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:o=!1}=e,a=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=u=>{let f=document.createElement(i),h=t.length+1;return n&&(f.className=n+(l?" "+n+h:"")),o&&f.style.setProperty("--"+r,h+""),s!=="none"&&f.setAttribute("aria-hidden","true"),i!=="span"&&(f.style.position="relative",f.style.display=a),f.textContent=u,t.push(f),f};return l&&(n=n.replace("++","")),c.collection=t,c},Av=(r,e,t,n)=>{let i=ju("line",t,n),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,e[o]);o<a;o++)l.appendChild(e[o]);l.normalize()}},R_=(r,e,t,n,i,s,o,a,l,c)=>{var u;let f=Array.from(r.childNodes),h=0,{wordDelimiter:d,reduceWhiteSpace:_=!0,prepareText:g}=e,m=r.getBoundingClientRect(),p=m,M=!_&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",y=0,x=t.collection,b,w,T,C,S,v,P,L,F,V,O,W,X,G,ee,I,le,ve;for(typeof d=="object"?(T=d.delimiter||d,w=d.replaceWith||""):w=d===""?"":d||" ",b=w!==" ";h<f.length;h++)if(C=f[h],C.nodeType===3){for(ee=C.textContent||"",_?ee=ee.replace(Tv," "):M&&(ee=ee.replace(/\n/g,w+`
`)),g&&(ee=g(ee,r)),C.textContent=ee,S=w||T?ee.split(T||w):ee.match(a)||Zu,le=S[S.length-1],L=b?le.slice(-1)===" ":!le,le||S.pop(),p=m,P=b?S[0].charAt(0)===" ":!S[0],P&&ws(" ",r,C),S[0]||S.shift(),Fd(S,l),s&&c||(C.textContent=""),F=1;F<=S.length;F++)if(I=S[F-1],!_&&M&&I.charAt(0)===`
`&&((u=C.previousSibling)==null||u.remove(),ws(document.createElement("br"),r,C),I=I.slice(1)),!_&&I==="")ws(w,r,C);else if(I===" ")r.insertBefore(document.createTextNode(" "),C);else{if(b&&I.charAt(0)===" "&&ws(" ",r,C),y&&F===1&&!P&&x.indexOf(y.parentNode)>-1?(v=x[x.length-1],v.appendChild(document.createTextNode(n?"":I))):(v=t(n?"":I),ws(v,r,C),y&&F===1&&!P&&v.insertBefore(y,v.firstChild)),n)for(O=Ld?Fd([...Ld.segment(I)].map(Oe=>Oe.segment),l):I.match(a)||Zu,ve=0;ve<O.length;ve++)v.appendChild(O[ve]===" "?document.createTextNode(" "):n(O[ve]));if(s&&c){if(ee=C.textContent=ee.substring(I.length+1,ee.length),V=v.getBoundingClientRect(),V.top>p.top&&V.left<=p.left){for(W=r.cloneNode(),X=r.childNodes[0];X&&X!==v;)G=X,X=X.nextSibling,W.appendChild(G);r.parentNode.insertBefore(W,r),i&&Od(W)}p=V}(F<S.length||L)&&ws(F>=S.length?" ":b&&I.slice(-1)===" "?" "+w:w,r,C)}r.removeChild(C),y=0}else C.nodeType===1&&(o&&o.indexOf(C)>-1?(x.indexOf(C.previousSibling)>-1&&x[x.length-1].appendChild(C),y=C):(R_(C,e,t,n,i,s,o,a,l,!0),y=0),i&&Od(C))};const C_=class P_{constructor(e,t){this.isSplit=!1,Mv(),this.elements=Id(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(o=>{var a;t.overwrite!==!1&&((a=o[Dd])==null||a._data.orig.filter(({element:l})=>l===o).forEach(Nd)),o[Dd]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,s=()=>{let o=n.length,a;for(;o--;){a=n[o];let l=a.element.offsetWidth;if(l!==a.width){a.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(s,200)})},Oc(this),this.split(t)}split(e){return(this._ctx||Ev).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,u=t.indexOf("lines")>-1,f=t.indexOf("chars")>-1,h=t.indexOf("words")>-1,d=f&&!h&&!u,_=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),g=_?new RegExp(_.source+"|"+Ud.source,"gu"):Ud,m=!!e.ignore&&Id(e.ignore),{orig:p,animTime:M,obs:y}=this._data,x;(f||h||u)&&(this.elements.forEach((b,w)=>{p[w]={element:b,html:b.innerHTML,ariaL:b.getAttribute("aria-label"),ariaH:b.getAttribute("aria-hidden")},n==="auto"?b.setAttribute("aria-label",(b.textContent||"").trim()):n==="hidden"&&b.setAttribute("aria-hidden","true");let T=[],C=[],S=[],v=f?ju("char",e,T):null,P=ju("word",e,C),L,F,V,O;if(R_(b,e,P,v,d,i&&(u||d),m,g,_,!1),u){let W=xa(b.childNodes),X=Av(b,W,e,S),G,ee=[],I=0,le=W.map(we=>we.nodeType===1?we.getBoundingClientRect():Ql),ve=Ql,Oe;for(L=0;L<W.length;L++)G=W[L],G.nodeType===1&&(G.nodeName==="BR"?((!L||W[L-1].nodeName!=="BR")&&(ee.push(G),X(I,L+1)),I=L+1,ve=bv(le,L)):(Oe=le[L],L&&Oe.top>ve.top&&Oe.left<ve.left+ve.width-1&&(X(I,L),I=L),ve=Oe));I<L&&X(I,L),ee.forEach(we=>{var ye;return(ye=we.parentNode)==null?void 0:ye.removeChild(we)})}if(!h){for(L=0;L<C.length;L++)if(F=C[L],f||!F.nextSibling||F.nextSibling.nodeType!==3)if(s&&!u){for(V=document.createElement("span"),V.style.whiteSpace="nowrap";F.firstChild;)V.appendChild(F.firstChild);F.replaceWith(V)}else F.replaceWith(...F.childNodes);else O=F.nextSibling,O&&O.nodeType===3&&(O.textContent=(F.textContent||"")+(O.textContent||""),F.remove());C.length=0,b.normalize()}this.lines.push(...S),this.words.push(...C),this.chars.push(...T)}),c&&this[c]&&this.masks.push(...this[c].map(b=>{let w=b.cloneNode();return b.replaceWith(w),w.appendChild(b),b.className&&(w.className=b.className.trim().split(" ").map(T=>T+"-mask").join(" ")),w.style.overflow="clip",w}))),this.isSplit=!0,Co&&u&&a&&Co.addEventListener("loadingdone",this._split),(x=o&&o(this))&&x.totalTime&&(this._data.anim=M?x.totalTime(M):x),u&&a&&this.elements.forEach((b,w)=>{p[w].width=b.offsetWidth,y&&y.observe(b)})}),this}kill(){let{obs:e}=this._data;e&&e.disconnect(),Co?.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(Nd),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(e,t){return new P_(e,t)}static register(e){Ro=Ro||e||window.gsap,Ro&&(xa=Ro.utils.toArray,Oc=Ro.core.context||Oc),!Ku&&window.innerWidth>0&&(Co=document.fonts,Ku=!0)}};C_.version="3.15.0";let dc=C_;var Ci,bh,ec,D_,L_,Bd,Ju,I_,U_=function(){return typeof window<"u"},N_=function(){return Ci||U_()&&(Ci=window.gsap)&&Ci.registerPlugin&&Ci},wv=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,Bc={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]},jr=function(e){return Math.round(e*1e4)/1e4},Yi=function(e){return parseFloat(e)||0},kd=function(e,t){var n=Yi(e);return~e.indexOf("%")?n/100*t:n},$a=function(e,t){return Yi(e.getAttribute(t))},Ul=Math.sqrt,zd=function(e,t,n,i,s,o){return Ul(Math.pow((Yi(n)-Yi(e))*s,2)+Math.pow((Yi(i)-Yi(t))*o,2))},Vd=function(e){return console.warn(e)},F_=function(e){return e.getAttribute("vector-effect")==="non-scaling-stroke"},Rv=1,Cv=function(e,t,n){var i=e.indexOf(" "),s,o;return i<0?(s=n!==void 0?n+"":e,o=e):(s=e.substr(0,i),o=e.substr(i+1)),s=kd(s,t),o=kd(o,t),s>o?[o,s]:[s,o]},Nl=function(e){if(e=bh(e)[0],!e)return 0;var t=e.tagName.toLowerCase(),n=e.style,i=1,s=1,o,a,l,c,u,f,h;F_(e)&&(s=e.getScreenCTM(),i=Ul(s.a*s.a+s.b*s.b),s=Ul(s.d*s.d+s.c*s.c));try{a=e.getBBox()}catch{Vd("Some browsers won't measure invisible elements (like display:none or masks inside defs).")}var d=a||{x:0,y:0,width:0,height:0},_=d.x,g=d.y,m=d.width,p=d.height;if((!a||!m&&!p)&&Bc[t]&&(m=$a(e,Bc[t][0]),p=$a(e,Bc[t][1]),t!=="rect"&&t!=="line"&&(m*=2,p*=2),t==="line"&&(_=$a(e,"x1"),g=$a(e,"y1"),m=Math.abs(m-_),p=Math.abs(p-g))),t==="path")c=n.strokeDasharray,n.strokeDasharray="none",o=e.getTotalLength()||0,jr(i)!==jr(s)&&!Bd&&(Bd=1)&&Vd("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),o*=(i+s)/2,n.strokeDasharray=c;else if(t==="rect")o=m*2*i+p*2*s;else if(t==="line")o=zd(_,g,_+m,g+p,i,s);else if(t==="polyline"||t==="polygon")for(l=e.getAttribute("points").match(wv)||[],t==="polygon"&&l.push(l[0],l[1]),o=0,u=2;u<l.length;u+=2)o+=zd(l[u-2],l[u-1],l[u],l[u+1],i,s)||0;else(t==="circle"||t==="ellipse")&&(f=m/2*i,h=p/2*s,o=Math.PI*(3*(f+h)-Ul((3*f+h)*(f+3*h))));return o||0},Hd=function(e,t){if(e=bh(e)[0],!e)return[0,0];t||(t=Nl(e)+1);var n=ec.getComputedStyle(e),i=n.strokeDasharray||"",s=Yi(n.strokeDashoffset),o=i.indexOf(",");return o<0&&(o=i.indexOf(" ")),i=o<0?t:Yi(i.substr(0,o)),i>t&&(i=t),[-s||0,i-s||0]},Gd=function(){U_()&&(ec=window,L_=Ci=N_(),bh=Ci.utils.toArray,Ju=Ci.core.getStyleSaver,I_=Ci.core.reverting||function(){},D_=((ec.navigator||{}).userAgent||"").indexOf("Edge")!==-1)},O_={version:"3.15.0",name:"drawSVG",register:function(e){Ci=e,Gd()},init:function(e,t,n,i,s){if(!e.getBBox)return!1;L_||Gd();var o=Nl(e),a,l,c;return this.styles=Ju&&Ju(e,"strokeDashoffset,strokeDasharray,strokeMiterlimit"),this.tween=n,this._style=e.style,this._target=e,t+""=="true"?t="0 100%":t?(t+"").indexOf(" ")===-1&&(t="0 "+t):t="0 0",a=Hd(e,o),l=Cv(t,o,a[0]),this._length=jr(o),this._dash=jr(a[1]-a[0]),this._offset=jr(-a[0]),this._dashPT=this.add(this,"_dash",this._dash,jr(l[1]-l[0]),0,0,0,0,0,1),this._offsetPT=this.add(this,"_offset",this._offset,jr(-l[0]),0,0,0,0,0,1),D_&&(c=ec.getComputedStyle(e),c.strokeLinecap!==c.strokeLinejoin&&(l=Yi(c.strokeMiterlimit),this.add(e.style,"strokeMiterlimit",l,l+.01))),this._live=F_(e)||~(t+"").indexOf("live"),this._nowrap=~(t+"").indexOf("nowrap"),this._props.push("drawSVG"),Rv},render:function(e,t){if(t.tween._time||!I_()){var n=t._pt,i=t._style,s,o,a,l;if(n){for(t._live&&(s=Nl(t._target),s!==t._length&&(o=s/t._length,t._length=s,t._offsetPT&&(t._offsetPT.s*=o,t._offsetPT.c*=o),t._dashPT?(t._dashPT.s*=o,t._dashPT.c*=o):t._dash*=o));n;)n.r(e,n.d),n=n._next;a=t._dash||e&&e!==1&&1e-4||0,s=t._length-a+.1,l=t._offset,a&&l&&a+Math.abs(l%t._length)>t._length-.05&&(l+=l<0?.005:-.005)&&(s+=.005),i.strokeDashoffset=a?l:l+.001,i.strokeDasharray=s<.1?"none":a?a+"px,"+(t._nowrap?999999:s)+"px":"0px, 999999px"}}else t.styles.revert()},getLength:Nl,getPosition:Hd};N_()&&Ci.registerPlugin(O_);var Pv=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,Dv=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,Lv=Math.PI/180,Ka=Math.sin,Za=Math.cos,sa=Math.abs,Po=Math.sqrt,Iv=function(e){return typeof e=="number"},Wd=1e5,ar=function(e){return Math.round(e*Wd)/Wd||0},Xd=function(e){return e.closed=Math.abs(e[0]-e[e.length-2])<.001&&Math.abs(e[1]-e[e.length-1])<.001};function Uv(r,e,t,n,i,s,o){for(var a=r.length,l,c,u,f,h;--a>-1;)for(l=r[a],c=l.length,u=0;u<c;u+=2)f=l[u],h=l[u+1],l[u]=f*e+h*n+s,l[u+1]=f*t+h*i+o;return r._dirty=1,r}function Nv(r,e,t,n,i,s,o,a,l){if(!(r===a&&e===l)){t=sa(t),n=sa(n);var c=i%360*Lv,u=Za(c),f=Ka(c),h=Math.PI,d=h*2,_=(r-a)/2,g=(e-l)/2,m=u*_+f*g,p=-f*_+u*g,M=m*m,y=p*p,x=M/(t*t)+y/(n*n);x>1&&(t=Po(x)*t,n=Po(x)*n);var b=t*t,w=n*n,T=(b*w-b*y-w*M)/(b*y+w*M);T<0&&(T=0);var C=(s===o?-1:1)*Po(T),S=C*(t*p/n),v=C*-(n*m/t),P=(r+a)/2,L=(e+l)/2,F=P+(u*S-f*v),V=L+(f*S+u*v),O=(m-S)/t,W=(p-v)/n,X=(-m-S)/t,G=(-p-v)/n,ee=O*O+W*W,I=(W<0?-1:1)*Math.acos(O/Po(ee)),le=(O*G-W*X<0?-1:1)*Math.acos((O*X+W*G)/Po(ee*(X*X+G*G)));isNaN(le)&&(le=h),!o&&le>0?le-=d:o&&le<0&&(le+=d),I%=d,le%=d;var ve=Math.ceil(sa(le)/(d/4)),Oe=[],we=le/ve,ye=4/3*Ka(we/2)/(1+Za(we/2)),q=u*t,te=f*t,pe=f*-n,Ce=u*n,me;for(me=0;me<ve;me++)i=I+me*we,m=Za(i),p=Ka(i),O=Za(i+=we),W=Ka(i),Oe.push(m-ye*p,p+ye*m,O+ye*W,W-ye*O,O,W);for(me=0;me<Oe.length;me+=2)m=Oe[me],p=Oe[me+1],Oe[me]=m*q+p*pe+F,Oe[me+1]=m*te+p*Ce+V;return Oe[me-2]=a,Oe[me-1]=l,Oe}}function Fv(r){var e=(r+"").replace(Dv,function(S){var v=+S;return v<1e-4&&v>-1e-4?0:v}).match(Pv)||[],t=[],n=0,i=0,s=2/3,o=e.length,a=0,l="ERROR: malformed path: "+r,c,u,f,h,d,_,g,m,p,M,y,x,b,w,T,C=function(v,P,L,F){M=(L-v)/3,y=(F-P)/3,g.push(v+M,P+y,L-M,F-y,L,F)};if(!r||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(c=0;c<o;c++)if(b=d,isNaN(e[c])?(d=e[c].toUpperCase(),_=d!==e[c]):c--,f=+e[c+1],h=+e[c+2],_&&(f+=n,h+=i),c||(m=f,p=h),d==="M")g&&(g.length<8?t.length-=1:a+=g.length,Xd(g)),n=m=f,i=p=h,g=[f,h],t.push(g),c+=2,d="L";else if(d==="C")g||(g=[0,0]),_||(n=i=0),g.push(f,h,n+e[c+3]*1,i+e[c+4]*1,n+=e[c+5]*1,i+=e[c+6]*1),c+=6;else if(d==="S")M=n,y=i,(b==="C"||b==="S")&&(M+=n-g[g.length-4],y+=i-g[g.length-3]),_||(n=i=0),g.push(M,y,f,h,n+=e[c+3]*1,i+=e[c+4]*1),c+=4;else if(d==="Q")M=n+(f-n)*s,y=i+(h-i)*s,_||(n=i=0),n+=e[c+3]*1,i+=e[c+4]*1,g.push(M,y,n+(f-n)*s,i+(h-i)*s,n,i),c+=4;else if(d==="T")M=n-g[g.length-4],y=i-g[g.length-3],g.push(n+M,i+y,f+(n+M*1.5-f)*s,h+(i+y*1.5-h)*s,n=f,i=h),c+=2;else if(d==="H")C(n,i,n=f,i),c+=1;else if(d==="V")C(n,i,n,i=f+(_?i-n:0)),c+=1;else if(d==="L"||d==="Z")d==="Z"&&(f=m,h=p,g.closed=!0),(d==="L"||sa(n-f)>.5||sa(i-h)>.5)&&(C(n,i,f,h),d==="L"&&(c+=2)),n=f,i=h;else if(d==="A"){if(w=e[c+4],T=e[c+5],M=e[c+6],y=e[c+7],u=7,w.length>1&&(w.length<3?(y=M,M=T,u--):(y=T,M=w.substr(2),u-=2),T=w.charAt(1),w=w.charAt(0)),x=Nv(n,i,+e[c+1],+e[c+2],+e[c+3],+w,+T,(_?n:0)+M*1,(_?i:0)+y*1),c+=u,x)for(u=0;u<x.length;u++)g.push(x[u]);n=g[g.length-2],i=g[g.length-1]}else console.log(l);return c=g.length,c<6?(t.pop(),c=0):Xd(g),t.totalPoints=a+c,t}function Ov(r){Iv(r[0])&&(r=[r]);var e="",t=r.length,n,i,s,o;for(i=0;i<t;i++){for(o=r[i],e+="M"+ar(o[0])+","+ar(o[1])+" C",n=o.length,s=2;s<n;s++)e+=ar(o[s++])+","+ar(o[s++])+" "+ar(o[s++])+","+ar(o[s++])+" "+ar(o[s++])+","+ar(o[s])+" ";o.closed&&(e+="z")}return e}var Cn,B_,k_=function(){return Cn||typeof window<"u"&&(Cn=window.gsap)&&Cn.registerPlugin&&Cn},qd=function(){Cn=k_(),Cn?(Cn.registerEase("_CE",ys.create),B_=1):console.warn("Please gsap.registerPlugin(CustomEase)")},Bv=1e20,ja=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},kv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,zv=/[cLlsSaAhHvVtTqQ]/g,Vv=function(e){var t=e.length,n=Bv,i;for(i=1;i<t;i+=6)+e[i]<n&&(n=+e[i]);return n},Hv=function(e,t,n){!n&&n!==0&&(n=Math.max(+e[e.length-1],+e[1]));var i=+e[0]*-1,s=-n,o=e.length,a=1/(+e[o-2]+i),l=-t||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?Vv(e)+s:+e[o-1]+s),c;for(l?l=1/l:l=-a,c=0;c<o;c+=2)e[c]=(+e[c]+i)*a,e[c+1]=(+e[c+1]+s)*l},Gv=function r(e,t,n,i,s,o,a,l,c,u,f){var h=(e+n)/2,d=(t+i)/2,_=(n+s)/2,g=(i+o)/2,m=(s+a)/2,p=(o+l)/2,M=(h+_)/2,y=(d+g)/2,x=(_+m)/2,b=(g+p)/2,w=(M+x)/2,T=(y+b)/2,C=a-e,S=l-t,v=Math.abs((n-a)*S-(i-l)*C),P=Math.abs((s-a)*S-(o-l)*C),L;return u||(u=[{x:e,y:t},{x:a,y:l}],f=1),u.splice(f||u.length-1,0,{x:w,y:T}),(v+P)*(v+P)>c*(C*C+S*S)&&(L=u.length,r(e,t,h,d,M,y,w,T,c,u,f),r(w,T,x,b,m,p,a,l,c,u,f+1+(u.length-L))),u},ys=(function(){function r(t,n,i){B_||qd(),this.id=t,this.setData(n,i)}var e=r.prototype;return e.setData=function(n,i){i=i||{},n=n||"0,0,1,1";var s=n.match(kv),o=1,a=[],l=[],c=i.precision||1,u=c<=1,f,h,d,_,g,m,p,M,y;if(this.data=n,(zv.test(n)||~n.indexOf("M")&&n.indexOf("C")<0)&&(s=Fv(n)[0]),f=s.length,f===4)s.unshift(0,0),s.push(1,1),f=8;else if((f-2)%6)throw"Invalid CustomEase";for((+s[0]!=0||+s[f-2]!=1)&&Hv(s,i.height,i.originY),this.segment=s,_=2;_<f;_+=6)h={x:+s[_-2],y:+s[_-1]},d={x:+s[_+4],y:+s[_+5]},a.push(h,d),Gv(h.x,h.y,+s[_],+s[_+1],+s[_+2],+s[_+3],d.x,d.y,1/(c*2e5),a,a.length-1);for(f=a.length,_=0;_<f;_++)p=a[_],M=a[_-1]||p,(p.x>M.x||M.y!==p.y&&M.x===p.x||p===M)&&p.x<=1?(M.cx=p.x-M.x,M.cy=p.y-M.y,M.n=p,M.nx=p.x,u&&_>1&&Math.abs(M.cy/M.cx-a[_-2].cy/a[_-2].cx)>2&&(u=0),M.cx<o&&(M.cx?o=M.cx:(M.cx=.001,_===f-1&&(M.x-=.001,o=Math.min(o,.001),u=0)))):(a.splice(_--,1),f--);if(f=1/o+1|0,g=1/f,m=0,p=a[0],u){for(_=0;_<f;_++)y=_*g,p.nx<y&&(p=a[++m]),h=p.y+(y-p.x)/p.cx*p.cy,l[_]={x:y,cx:g,y:h,cy:0,nx:9},_&&(l[_-1].cy=h-l[_-1].y);m=a[a.length-1],l[f-1].cy=m.y-h,l[f-1].cx=m.x-l[l.length-1].x}else{for(_=0;_<f;_++)p.nx<_*g&&(p=a[++m]),l[_]=p;m<a.length-1&&(l[_-1]=a[a.length-2])}return this.ease=function(x){var b=l[x*f|0]||l[f-1];return b.nx<x&&(b=b.n),b.y+(x-b.x)/b.cx*b.cy},this.ease.custom=this,this.id&&Cn&&Cn.registerEase(this.id,this.ease),this},e.getSVGData=function(n){return r.getSVGData(this,n)},r.create=function(n,i,s){return new r(n,i,s).ease},r.register=function(n){Cn=n,qd()},r.get=function(n){return Cn.parseEase(n)},r.getSVGData=function(n,i){i=i||{};var s=i.width||100,o=i.height||100,a=i.x||0,l=(i.y||0)+o,c=Cn.utils.toArray(i.path)[0],u,f,h,d,_,g,m,p,M,y;if(i.invert&&(o=-o,l=0),typeof n=="string"&&(n=Cn.parseEase(n)),n.custom&&(n=n.custom),n instanceof r)u=Ov(Uv([n.segment.slice(0)],s,0,0,-o,a,l));else{for(u=[a,l],m=Math.max(5,(i.precision||1)*200),d=1/m,m+=2,p=5/m,M=ja(a+d*s),y=ja(l+n(d)*-o),f=(y-l)/(M-a),h=2;h<m;h++)_=ja(a+h*d*s),g=ja(l+n(h*d)*-o),(Math.abs((g-y)/(_-M)-f)>p||h===m-1)&&(u.push(M,y),f=(g-y)/(_-M)),M=_,y=g;u="M"+u.join(",")}return c&&c.setAttribute("d",u),u},r})();ys.version="3.15.0";ys.headless=!0;k_()&&Cn.registerPlugin(ys);var $i,fs,Ah,pc,Xo,Fl,tc,oa,vi="transform",Qu=vi+"Origin",z_,wh=function(e){var t=e.ownerDocument||e;for(!(vi in e.style)&&("msTransform"in e.style)&&(vi="msTransform",Qu=vi+"Origin");t.parentNode&&(t=t.parentNode););if(fs=window,tc=new _s,t){$i=t,Ah=t.documentElement,pc=t.body,oa=$i.createElementNS("http://www.w3.org/2000/svg","g"),oa.style.transform="none";var n=t.createElement("div"),i=t.createElement("div"),s=t&&(t.body||t.firstElementChild);s&&s.appendChild&&(s.appendChild(n),n.appendChild(i),n.style.position="static",n.style.transform="translate3d(0,0,1px)",z_=i.offsetParent!==n,s.removeChild(n))}return t},Wv=function(e){for(var t,n;e&&e!==pc;)n=e._gsap,n&&n.uncache&&n.get(e,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),t?t.push(n):t=[n]),e=e.parentNode;return t},V_=[],H_=[],Rh=function(){return fs.pageYOffset||$i.scrollTop||Ah.scrollTop||pc.scrollTop||0},Ch=function(){return fs.pageXOffset||$i.scrollLeft||Ah.scrollLeft||pc.scrollLeft||0},Ph=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},Xv=function r(e){if(fs.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return r(e)},kc=function r(e,t){if(e.parentNode&&($i||wh(e))){var n=Ph(e),i=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=n?t?"rect":"g":"div",o=t!==2?0:100,a=t===3?100:0,l={position:"absolute",display:"block",pointerEvents:"none",margin:"0",padding:"0"},c=$i.createElementNS?$i.createElementNS(i.replace(/^https/,"http"),s):$i.createElement(s);return t&&(n?(Fl||(Fl=r(e)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+o+","+a+")"),c.setAttribute("fill","transparent"),Fl.appendChild(c)):(Xo||(Xo=r(e),Object.assign(Xo.style,l)),Object.assign(c.style,l,{width:"0.1px",height:"0.1px",top:a+"px",left:o+"px"}),Xo.appendChild(c))),c}throw"Need document and parent."},qv=function(e){for(var t=new _s,n=0;n<e.numberOfItems;n++)t.multiply(e.getItem(n).matrix);return t},G_=function(e){var t=e.getCTM(),n;return t||(n=e.style[vi],e.style[vi]="none",e.appendChild(oa),t=oa.getCTM(),e.removeChild(oa),n?e.style[vi]=n:e.style.removeProperty(vi.replace(/([A-Z])/g,"-$1").toLowerCase())),t||tc.clone()},Yv=function(e,t){var n=Ph(e),i=e===n,s=n?V_:H_,o=e.parentNode,a=o&&!n&&o.shadowRoot&&o.shadowRoot.appendChild?o.shadowRoot:o,l,c,u,f,h,d;if(e===fs)return e;if(s.length||s.push(kc(e,1),kc(e,2),kc(e,3)),l=n?Fl:Xo,n)i?(u=G_(e),f=-u.e/u.a,h=-u.f/u.d,c=tc):e.getBBox?(u=e.getBBox(),c=e.transform?e.transform.baseVal:{},c=c.numberOfItems?c.numberOfItems>1?qv(c):c.getItem(0).matrix:tc,f=c.a*u.x+c.c*u.y,h=c.b*u.x+c.d*u.y):(c=new _s,f=h=0),t&&e.tagName.toLowerCase()==="g"&&(f=h=0),(i||!e.getBoundingClientRect().width?n:o).appendChild(l),l.setAttribute("transform","matrix("+c.a+","+c.b+","+c.c+","+c.d+","+(c.e+f)+","+(c.f+h)+")");else{if(f=h=0,z_)for(c=e.offsetParent,u=e;u&&(u=u.parentNode)&&u!==c&&u.parentNode;)(fs.getComputedStyle(u)[vi]+"").length>4&&(f=u.offsetLeft,h=u.offsetTop,u=0);if(d=fs.getComputedStyle(e),d.position!=="absolute"&&d.position!=="fixed")for(c=e.offsetParent;o&&o!==c;)f+=o.scrollLeft||0,h+=o.scrollTop||0,o=o.parentNode;u=l.style,u.top=e.offsetTop-h+"px",u.left=e.offsetLeft-f+"px",u[vi]=d[vi],u[Qu]=d[Qu],u.position=d.position==="fixed"?"fixed":"absolute",a.appendChild(l)}return l},zc=function(e,t,n,i,s,o,a){return e.a=t,e.b=n,e.c=i,e.d=s,e.e=o,e.f=a,e},_s=(function(){function r(t,n,i,s,o,a){t===void 0&&(t=1),n===void 0&&(n=0),i===void 0&&(i=0),s===void 0&&(s=1),o===void 0&&(o=0),a===void 0&&(a=0),zc(this,t,n,i,s,o,a)}var e=r.prototype;return e.inverse=function(){var n=this.a,i=this.b,s=this.c,o=this.d,a=this.e,l=this.f,c=n*o-i*s||1e-10;return zc(this,o/c,-i/c,-s/c,n/c,(s*l-o*a)/c,-(n*l-i*a)/c)},e.multiply=function(n){var i=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f,u=n.a,f=n.c,h=n.b,d=n.d,_=n.e,g=n.f;return zc(this,u*i+h*o,u*s+h*a,f*i+d*o,f*s+d*a,l+_*i+g*o,c+_*s+g*a)},e.clone=function(){return new r(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(n){var i=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f;return i===n.a&&s===n.b&&o===n.c&&a===n.d&&l===n.e&&c===n.f},e.apply=function(n,i){i===void 0&&(i={});var s=n.x,o=n.y,a=this.a,l=this.b,c=this.c,u=this.d,f=this.e,h=this.f;return i.x=s*a+o*c+f||0,i.y=s*l+o*u+h||0,i},r})();function Ui(r,e,t,n){if(!r||!r.parentNode||($i||wh(r)).documentElement===r)return new _s;var i=Wv(r),s=Ph(r),o=s?V_:H_,a=Yv(r,t),l=o[0].getBoundingClientRect(),c=o[1].getBoundingClientRect(),u=o[2].getBoundingClientRect(),f=a.parentNode,h=!n&&Xv(r),d=new _s((c.left-l.left)/100,(c.top-l.top)/100,(u.left-l.left)/100,(u.top-l.top)/100,l.left+(h?0:Ch()),l.top+(h?0:Rh()));if(f.removeChild(a),i)for(l=i.length;l--;)c=i[l],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return e?d.inverse():d}var $v=1,mo,rn,Ct,aa,gr,Ki,ef,Yd=function(e,t){return e.actions.forEach(function(n){return n.vars[t]&&n.vars[t](n)})},tf={},$d=180/Math.PI,Kv=Math.PI/180,nc={},Kd={},mc={},Dh=function(e){return typeof e=="string"?e.split(" ").join("").split(","):e},Zv=Dh("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),_c=Dh("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),la=function(e){return mo(e)[0]||console.warn("Element not found:",e)},Ks=function(e){return Math.round(e*1e4)/1e4||0},Vc=function(e,t,n){return e.forEach(function(i){return i.classList[n](t)})},Zd={zIndex:1,kill:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1,prune:1,absoluteOnLeave:1},W_={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},X_=function(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()},Zs=function(e,t){var n={},i;for(i in e)t[i]||(n[i]=e[i]);return n},Lh={},q_=function(e){var t=Lh[e]=Dh(e);return mc[e]=t.concat(_c),t},jv=function(e){var t=e._gsap||rn.core.getCache(e);return t.gmCache===rn.ticker.frame?t.gMatrix:(t.gmCache=rn.ticker.frame,t.gMatrix=Ui(e,!0,!1,!0))},Jv=function r(e,t,n){n===void 0&&(n=0);for(var i=e.parentNode,s=1e3*Math.pow(10,n)*(t?-1:1),o=t?-s*900:0;e;)o+=s,e=e.previousSibling;return i?o+r(i,t,n+1):o},ic=function(e,t,n){return e.forEach(function(i){return i.d=Jv(n?i.element:i.t,t)}),e.sort(function(i,s){return i.d-s.d}),e},Sa=function(e,t){for(var n=e.element.style,i=e.css=e.css||[],s=t.length,o,a;s--;)o=t[s],a=n[o]||n.getPropertyValue(o),i.push(a?o:Kd[o]||(Kd[o]=X_(o)),a);return n},rc=function(e){var t=e.css,n=e.element.style,i=0;for(e.cache.uncache=1;i<t.length;i+=2)t[i+1]?n[t[i]]=t[i+1]:n.removeProperty(t[i]);!t[t.indexOf("transform")+1]&&n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},jd=function(e,t){e.forEach(function(n){return n.a.cache.uncache=1}),t||e.finalStates.forEach(rc)},Hc="paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),Ih=function(e,t,n){var i=e.element,s=e.width,o=e.height,a=e.uncache,l=e.getProp,c=i.style,u=4,f,h,d;if(typeof t!="object"&&(t=e),Ct&&n!==1)return Ct._abs.push({t:i,b:e,a:e,sd:0}),Ct._final.push(function(){return(e.cache.uncache=1)&&rc(e)}),i;for(h=l("display")==="none",(!e.isVisible||h)&&(h&&(Sa(e,["display"]).display=t.display),e.matrix=t.matrix,e.width=s=e.width||t.width,e.height=o=e.height||t.height),Sa(e,Hc),d=window.getComputedStyle(i);u--;)c[Hc[u]]=d[Hc[u]];if(c.gridArea="1 / 1 / 1 / 1",c.transition="none",c.position="absolute",c.width=s+"px",c.height=o+"px",c.top||(c.top="0px"),c.left||(c.left="0px"),a)f=new gs(i);else if(f=Zs(e,nc),f.position="absolute",e.simple){var _=i.getBoundingClientRect();f.matrix=new _s(1,0,0,1,_.left+Ch(),_.top+Rh())}else f.matrix=Ui(i,!1,!1,!0);return f=so(f,e,!0),e.x=Ki(f.x,.01),e.y=Ki(f.y,.01),i},Jd=function(e,t){return t!==!0&&(t=mo(t),e=e.filter(function(n){if(t.indexOf((n.sd<0?n.b:n.a).element)!==-1)return!0;n.t._gsap.renderTransform(1),n.b.isVisible&&(n.t.style.width=n.b.width+"px",n.t.style.height=n.b.height+"px")})),e},Y_=function(e){return ic(e,!0).forEach(function(t){return(t.a.isVisible||t.b.isVisible)&&Ih(t.sd<0?t.b:t.a,t.b,1)})},Qv=function(e,t){return t&&e.idLookup[nf(t).id]||e.elementStates[0]},nf=function(e,t,n,i){return e instanceof gs?e:e instanceof Si?Qv(e,i):new gs(typeof e=="string"?la(e)||console.warn(e+" not found"):e,t,n)},ex=function(e,t){for(var n=rn.getProperty(e.element,null,"native"),i=e.props={},s=t.length;s--;)i[t[s]]=(n(t[s])+"").trim();return i.zIndex&&(i.zIndex=parseFloat(i.zIndex)||0),e},$_=function(e,t){var n=e.style||e,i;for(i in t)n[i]=t[i]},tx=function(e){var t=e.getAttribute("data-flip-id");return t||e.setAttribute("data-flip-id",t="auto-"+$v++),t},K_=function(e){return e.map(function(t){return t.element})},Qd=function(e,t,n){return e&&t.length&&n.add(e(K_(t),n,new Si(t,0,!0)),0)},so=function(e,t,n,i,s,o){var a=e.element,l=e.cache,c=e.parent,u=e.x,f=e.y,h=t.width,d=t.height,_=t.scaleX,g=t.scaleY,m=t.rotation,p=t.bounds,M=o&&ef&&ef(a,"transform,width,height"),y=e,x=t.matrix,b=x.e,w=x.f,T=e.bounds.width!==p.width||e.bounds.height!==p.height||e.scaleX!==_||e.scaleY!==g||e.rotation!==m,C=!T&&e.simple&&t.simple&&!s,S,v,P,L,F,V,O;return C||!c?(_=g=1,m=S=0):(F=jv(c),V=F.clone().multiply(t.ctm?t.matrix.clone().multiply(t.ctm):t.matrix),m=Ks(Math.atan2(V.b,V.a)*$d),S=Ks(Math.atan2(V.c,V.d)*$d+m)%360,_=Math.sqrt(Math.pow(V.a,2)+Math.pow(V.b,2)),g=Math.sqrt(Math.pow(V.c,2)+Math.pow(V.d,2))*Math.cos(S*Kv),s&&(s=mo(s)[0],L=rn.getProperty(s),O=s.getBBox&&typeof s.getBBox=="function"&&s.getBBox(),y={scaleX:L("scaleX"),scaleY:L("scaleY"),width:O?O.width:Math.ceil(parseFloat(L("width","px"))),height:O?O.height:parseFloat(L("height","px"))}),l.rotation=m+"deg",l.skewX=S+"deg"),n?(_*=h===y.width||!y.width?1:h/y.width,g*=d===y.height||!y.height?1:d/y.height,l.scaleX=_,l.scaleY=g):(h=Ki(h*_/y.scaleX,0),d=Ki(d*g/y.scaleY,0),a.style.width=h+"px",a.style.height=d+"px"),i&&$_(a,t.props),C||!c?(u+=b-e.matrix.e,f+=w-e.matrix.f):T||c!==t.parent?(l.x=u+"px",l.y=f+"px",l.renderTransform(1,l),V=Ui(s||a,!1,!1,!0),v=F.apply({x:V.e,y:V.f}),P=F.apply({x:b,y:w}),u+=P.x-v.x,f+=P.y-v.y):(F.e=F.f=0,P=F.apply({x:b-e.matrix.e,y:w-e.matrix.f}),u+=P.x,f+=P.y),u=Ki(u,.02),f=Ki(f,.02),o&&!(o instanceof gs)?M&&M.revert():(l.x=u+"px",l.y=f+"px",l.renderTransform(1,l)),o&&(o.x=u,o.y=f,o.rotation=m,o.skewX=S,n?(o.scaleX=_,o.scaleY=g):(o.width=h,o.height=d)),o||l},Gc=function(e,t){return e instanceof Si?e:new Si(e,t)},Z_=function(e,t,n){var i=e.idLookup[n],s=e.alt[n];return s.isVisible&&(!(t.getElementState(s.element)||s).isVisible||!i.isVisible)?s:i},Wc=[],Xc="width,height,overflowX,overflowY".split(","),Ja,ep=function(e){if(e!==Ja){var t=gr.style,n=gr.clientWidth===window.outerWidth,i=gr.clientHeight===window.outerHeight,s=4;if(e&&(n||i)){for(;s--;)Wc[s]=t[Xc[s]];n&&(t.width=gr.clientWidth+"px",t.overflowY="hidden"),i&&(t.height=gr.clientHeight+"px",t.overflowX="hidden"),Ja=e}else if(Ja){for(;s--;)Wc[s]?t[Xc[s]]=Wc[s]:t.removeProperty(X_(Xc[s]));Ja=e}}},tp=function(e,t){for(var n=0;n<e.length;n+=3)rn.set(e[n],{clearProps:!0}),e[n].setAttribute("style",e[n+t]),e[n]._gsap.gmCache=-1},qc=function(e,t,n,i){e instanceof Si&&t instanceof Si||console.warn("Not a valid state object."),n=n||{};var s=n,o=s.clearProps,a=s.onEnter,l=s.onLeave,c=s.absolute,u=s.absoluteOnLeave,f=s.custom,h=s.delay,d=s.paused,_=s.repeat,g=s.repeatDelay,m=s.yoyo,p=s.toggleClass,M=s.nested,y=s.zIndex,x=s.scale,b=s.fade,w=s.stagger,T=s.spin,C=s.prune,S=("props"in n?n:e).props,v=Zs(n,Zd),P=rn.timeline({delay:h,paused:d,repeat:_,repeatDelay:g,yoyo:m,data:"isFlip"}),L=v,F=[],V=[],O=[],W=[],X=T===!0?1:T||0,G=typeof T=="function"?T:function(){return X},ee=e.interrupted||t.interrupted,I=P[i!==1?"to":"from"],le,ve,Oe,we,ye,q,te,pe,Ce,me,Be,nt,D,Ne;for(ve in t.idLookup)Be=t.alt[ve]?Z_(t,e,ve):t.idLookup[ve],ye=Be.element,me=e.idLookup[ve],e.alt[ve]&&ye===me.element&&(e.alt[ve].isVisible||!Be.isVisible)&&(me=e.alt[ve]),me?(q={t:ye,b:me,a:Be,sd:me.element===ye?0:Be.isVisible?1:-1},O.push(q),q.sd&&(q.sd<0&&(q.b=Be,q.a=me),ee&&Sa(q.b,S?mc[S]:_c),b&&O.push(q.swap={t:me.element,b:q.b,a:q.a,sd:-q.sd,swap:q})),ye._flip=me.element._flip=Ct?Ct.timeline:P):Be.isVisible&&(O.push({t:ye,b:Zs(Be,{isVisible:1}),a:Be,sd:0,entering:1}),ye._flip=Ct?Ct.timeline:P);if(S&&(Lh[S]||q_(S)).forEach(function(N){return v[N]=function(Ke){return O[Ke].a.props[N]}}),O.finalStates=Ce=[],nt=function(){ic(O),ep(!0);var Ke=[];for(we=0;we<O.length;we++)q=O[we],D=q.a,Ne=q.b,C&&!D.isDifferent(Ne)&&!q.entering?O.splice(we--,1):(ye=q.t,M&&!(q.sd<0)&&we&&(D=q.a=D.clone({matrix:Ui(ye,!1,!1,!0)})),Ne.isVisible&&D.isVisible?(q.sd<0?(M&&tp(Ke,1),te=new gs(ye,S,e.simple),so(te,D,x,0,0,te),te.matrix=Ui(ye,!1,!1,!0),te.bounds=ye.getBoundingClientRect(),te.css=q.b.css,q.a=D=te,b&&(ye.style.opacity=ee?Ne.opacity:D.opacity),w&&W.push(ye),M&&(tp(Ke,2),Ke.push(ye,ye.getAttribute("style")))):q.sd>0&&b&&(ye.style.opacity=ee?D.opacity-Ne.opacity:"0"),so(D,Ne,x,S),M&&q.sd<0&&Ke.push(ye.getAttribute("style"))):Ne.isVisible!==D.isVisible&&(Ne.isVisible?D.isVisible||(Ne.css=D.css,V.push(Ne),O.splice(we--,1),c&&M&&so(D,Ne,x,S)):(D.isVisible&&F.push(D),O.splice(we--,1))),x||(ye.style.maxWidth=Math.max(D.width,Ne.width)+"px",ye.style.maxHeight=Math.max(D.height,Ne.height)+"px",ye.style.minWidth=Math.min(D.width,Ne.width)+"px",ye.style.minHeight=Math.min(D.height,Ne.height)+"px"),M&&p&&ye.classList.add(p)),Ce.push(D);var Y;if(p&&(Y=Ce.map(function(se){return se.element}),M&&Y.forEach(function(se){return se.classList.remove(p)})),ep(!1),x?(v.scaleX=function(se){return O[se].a.scaleX},v.scaleY=function(se){return O[se].a.scaleY}):(v.width=function(se){return O[se].a.width+"px"},v.height=function(se){return O[se].a.height+"px"},v.autoRound=n.autoRound||!1),v.x=function(se){return O[se].a.x+"px"},v.y=function(se){return O[se].a.y+"px"},v.rotation=function(se){return O[se].a.rotation+(T?G(se,pe[se],pe)*360:0)},v.skewX=function(se){return O[se].a.skewX},pe=O.map(function(se){return se.t}),(y||y===0)&&(v.modifiers={zIndex:function(){return y}},v.zIndex=y,v.immediateRender=n.immediateRender!==!1),b&&(v.opacity=function(se){return O[se].sd<0?0:O[se].sd>0?O[se].a.opacity:"+=0"}),W.length){w=rn.utils.distribute(w);var B=pe.slice(W.length);v.stagger=function(se,R){return w(~W.indexOf(R)?pe.indexOf(O[se].swap.t):se,R,B)}}if(Zv.forEach(function(se){return n[se]&&P.eventCallback(se,n[se],n[se+"Params"])}),f&&pe.length){L=Zs(v,Zd),"scale"in f&&(f.scaleX=f.scaleY=f.scale,delete f.scale);for(ve in f)le=Zs(f[ve],W_),le[ve]=v[ve],!("duration"in le)&&"duration"in v&&(le.duration=v.duration),le.stagger=v.stagger,I.call(P,pe,le,0),delete L[ve]}(pe.length||V.length||F.length)&&(p&&P.add(function(){return Vc(Y,p,P._zTime<0?"remove":"add")},0)&&!d&&Vc(Y,p,"add"),pe.length&&I.call(P,pe,L,0)),Qd(a,F,P),Qd(l,V,P);var ae=Ct&&Ct.timeline;ae&&(ae.add(P,0),Ct._final.push(function(){return jd(O,!o)})),Oe=P.duration(),P.call(function(){var se=P.time()>=Oe;se&&!ae&&jd(O,!o),p&&Vc(Y,p,se?"remove":"add")})},u&&(c=O.filter(function(N){return!N.sd&&!N.a.isVisible&&N.b.isVisible}).map(function(N){return N.a.element})),Ct){var ke;c&&(ke=Ct._abs).push.apply(ke,Jd(O,c)),Ct._run.push(nt)}else c&&Y_(Jd(O,c)),nt();var De=Ct?Ct.timeline:P;return De.revert=function(){return Uh(De,1,1)},De},nx=function r(e){e.vars.onInterrupt&&e.vars.onInterrupt.apply(e,e.vars.onInterruptParams||[]),e.getChildren(!0,!1,!0).forEach(r)},Uh=function(e,t,n){if(e&&e.progress()<1&&(!e.paused()||n))return t&&(nx(e),t<2&&e.progress(1),e.kill()),!0},Qa=function(e){for(var t=e.idLookup={},n=e.alt={},i=e.elementStates,s=i.length,o;s--;)o=i[s],t[o.id]?n[o.id]=o:t[o.id]=o},Si=(function(){function r(t,n,i){if(this.props=n&&n.props,this.simple=!!(n&&n.simple),i)this.targets=K_(t),this.elementStates=t,Qa(this);else{this.targets=mo(t);var s=n&&(n.kill===!1||n.batch&&!n.kill);Ct&&!s&&Ct._kill.push(this),this.update(s||!!Ct)}}var e=r.prototype;return e.update=function(n){var i=this;return this.elementStates=this.targets.map(function(s){return new gs(s,i.props,i.simple)}),Qa(this),this.interrupt(n),this.recordInlineStyles(),this},e.clear=function(){return this.targets.length=this.elementStates.length=0,Qa(this),this},e.fit=function(n,i,s){for(var o=ic(this.elementStates.slice(0),!1,!0),a=(n||this).idLookup,l=0,c,u;l<o.length;l++)c=o[l],s&&(c.matrix=Ui(c.element,!1,!1,!0)),u=a[c.id],u&&so(c,u,i,!0,0,c),c.matrix=Ui(c.element,!1,!1,!0);return this},e.getProperty=function(n,i){var s=this.getElementState(n)||nc;return(i in s?s:s.props||nc)[i]},e.add=function(n){for(var i=n.targets.length,s=this.idLookup,o=this.alt,a,l,c;i--;)l=n.elementStates[i],c=s[l.id],c&&(l.element===c.element||o[l.id]&&o[l.id].element===l.element)?(a=this.elementStates.indexOf(l.element===c.element?c:o[l.id]),this.targets.splice(a,1,n.targets[i]),this.elementStates.splice(a,1,l)):(this.targets.push(n.targets[i]),this.elementStates.push(l));return n.interrupted&&(this.interrupted=!0),n.simple||(this.simple=!1),Qa(this),this},e.compare=function(n){var i=n.idLookup,s=this.idLookup,o=[],a=[],l=[],c=[],u=[],f=n.alt,h=this.alt,d=function(C,S,v){return(C.isVisible!==S.isVisible?C.isVisible?l:c:C.isVisible?a:o).push(v)&&u.push(v)},_=function(C,S,v){return u.indexOf(v)<0&&d(C,S,v)},g,m,p,M,y,x,b,w;for(p in i)y=f[p],x=h[p],g=y?Z_(n,this,p):i[p],M=g.element,m=s[p],x?(w=m.isVisible||!x.isVisible&&M===m.element?m:x,b=y&&!g.isVisible&&!y.isVisible&&w.element===y.element?y:g,b.isVisible&&w.isVisible&&b.element!==w.element?((b.isDifferent(w)?a:o).push(b.element,w.element),u.push(b.element,w.element)):d(b,w,b.element),y&&b.element===y.element&&(y=i[p]),_(b.element!==m.element&&y?y:b,m,m.element),_(y&&y.element===x.element?y:b,x,x.element),y&&_(y,x.element===y.element?x:m,y.element)):(m?m.isDifferent(g)?d(g,m,M):o.push(M):l.push(M),y&&_(y,m,y.element));for(p in s)i[p]||(c.push(s[p].element),h[p]&&c.push(h[p].element));return{changed:a,unchanged:o,enter:l,leave:c}},e.recordInlineStyles=function(){for(var n=mc[this.props]||_c,i=this.elementStates.length;i--;)Sa(this.elementStates[i],n)},e.interrupt=function(n){var i=this,s=[];this.targets.forEach(function(o){var a=o._flip,l=Uh(a,n?0:1);n&&l&&s.indexOf(a)<0&&a.add(function(){return i.updateVisibility()}),l&&s.push(a)}),!n&&s.length&&this.updateVisibility(),this.interrupted||(this.interrupted=!!s.length)},e.updateVisibility=function(){this.elementStates.forEach(function(n){var i=n.element.getBoundingClientRect();n.isVisible=!!(i.width||i.height||i.top||i.left),n.uncache=1})},e.getElementState=function(n){return this.elementStates[this.targets.indexOf(la(n))]},e.makeAbsolute=function(){return ic(this.elementStates.slice(0),!0,!0).map(Ih)},r})(),gs=(function(){function r(t,n,i){t instanceof r?Object.assign(this,t,n||{}):(this.element=t,this.update(n,i))}var e=r.prototype;return e.isDifferent=function(n){var i=this.bounds,s=n.bounds;return i.top!==s.top||i.left!==s.left||i.width!==s.width||i.height!==s.height||!this.matrix.equals(n.matrix)||this.opacity!==n.opacity||this.props&&n.props&&JSON.stringify(this.props)!==JSON.stringify(n.props)},e.clone=function(n){return new r(this,n)},e.update=function(n,i){var s=this,o=s.element,a=rn.getProperty(o),l=rn.core.getCache(o),c=o.getBoundingClientRect(),u=o.getBBox&&typeof o.getBBox=="function"&&o.nodeName.toLowerCase()!=="svg"&&o.getBBox(),f=i?new _s(1,0,0,1,c.left+Ch(),c.top+Rh()):Ui(o,!1,!1,!0);l.uncache=1,s.getProp=a,s.element=o,s.id=tx(o),s.matrix=f,s.cache=l,s.bounds=c,s.isVisible=!!(c.width||c.height||c.left||c.top),s.display=a("display"),s.position=a("position"),s.parent=o.parentNode,s.x=a("x","px"),s.y=a("y","px"),s.scaleX=l.scaleX,s.scaleY=l.scaleY,s.rotation=a("rotation"),s.skewX=a("skewX"),s.opacity=a("opacity"),s.width=u?u.width:Ki(a("width","px"),.04),s.height=u?u.height:Ki(a("height","px"),.04),n&&ex(s,Lh[n]||q_(n)),s.ctm=o.getCTM&&o.nodeName.toLowerCase()==="svg"&&G_(o).inverse(),s.simple=i||Ks(f.a)===1&&!Ks(f.b)&&!Ks(f.c)&&Ks(f.d)===1,s.uncache=0},r})(),ix=(function(){function r(t,n){this.vars=t,this.batch=n,this.states=[],this.timeline=n.timeline}var e=r.prototype;return e.getStateById=function(n){for(var i=this.states.length;i--;)if(this.states[i].idLookup[n])return this.states[i]},e.kill=function(){this.batch.remove(this)},r})(),rx=(function(){function r(t){this.id=t,this.actions=[],this._kill=[],this._final=[],this._abs=[],this._run=[],this.data={},this.state=new Si,this.timeline=rn.timeline()}var e=r.prototype;return e.add=function(n){var i=this.actions.filter(function(s){return s.vars===n});return i.length?i[0]:(i=new ix(typeof n=="function"?{animate:n}:n,this),this.actions.push(i),i)},e.remove=function(n){var i=this.actions.indexOf(n);return i>=0&&this.actions.splice(i,1),this},e.getState=function(n){var i=this,s=Ct,o=aa;return Ct=this,this.state.clear(),this._kill.length=0,this.actions.forEach(function(a){a.vars.getState&&(a.states.length=0,aa=a,a.state=a.vars.getState(a)),n&&a.states.forEach(function(l){return i.state.add(l)})}),aa=o,Ct=s,this.killConflicts(),this},e.animate=function(){var n=this,i=Ct,s=this.timeline,o=this.actions.length,a,l;for(Ct=this,s.clear(),this._abs.length=this._final.length=this._run.length=0,this.actions.forEach(function(c){c.vars.animate&&c.vars.animate(c);var u=c.vars.onEnter,f=c.vars.onLeave,h=c.targets,d,_;h&&h.length&&(u||f)&&(d=new Si,c.states.forEach(function(g){return d.add(g)}),_=d.compare(_o.getState(h)),_.enter.length&&u&&u(_.enter),_.leave.length&&f&&f(_.leave))}),Y_(this._abs),this._run.forEach(function(c){return c()}),l=s.duration(),a=this._final.slice(0),s.add(function(){l<=s.time()&&(a.forEach(function(c){return c()}),Yd(n,"onComplete"))}),Ct=i;o--;)this.actions[o].vars.once&&this.actions[o].kill();return Yd(this,"onStart"),s.restart(),this},e.loadState=function(n){n||(n=function(){return 0});var i=[];return this.actions.forEach(function(s){if(s.vars.loadState){var o,a=function l(c){c&&(s.targets=c),o=i.indexOf(l),~o&&(i.splice(o,1),i.length||n())};i.push(a),s.vars.loadState(a)}}),i.length||n(),this},e.setState=function(){return this.actions.forEach(function(n){return n.targets=n.vars.setState&&n.vars.setState(n)}),this},e.killConflicts=function(n){return this.state.interrupt(n),this._kill.forEach(function(i){return i.interrupt(n)}),this},e.run=function(n,i){var s=this;return this!==Ct&&(n||this.getState(i),this.loadState(function(){s._killed||(s.setState(),s.animate())})),this},e.clear=function(n){this.state.clear(),n||(this.actions.length=0)},e.getStateById=function(n){for(var i=this.actions.length,s;i--;)if(s=this.actions[i].getStateById(n),s)return s;return this.state.idLookup[n]&&this.state},e.kill=function(){this._killed=1,this.clear(),delete tf[this.id]},r})(),_o=(function(){function r(){}return r.getState=function(t,n){var i=Gc(t,n);return aa&&aa.states.push(i),n&&n.batch&&r.batch(n.batch).state.add(i),i},r.from=function(t,n){return n=n||{},"clearProps"in n||(n.clearProps=!0),qc(t,Gc(n.targets||t.targets,{props:n.props||t.props,simple:n.simple,kill:!!n.kill}),n,-1)},r.to=function(t,n){return qc(t,Gc(n.targets||t.targets,{props:n.props||t.props,simple:n.simple,kill:!!n.kill}),n,1)},r.fromTo=function(t,n,i){return qc(t,n,i)},r.fit=function(t,n,i){var s=i?Zs(i,W_):{},o=i||s,a=o.absolute,l=o.scale,c=o.getVars,u=o.props,f=o.runBackwards,h=o.onComplete,d=o.simple,_=i&&i.fitChild&&la(i.fitChild),g=nf(n,u,d,t),m=nf(t,0,d,g),p=u?mc[u]:_c,M=rn.context();return u&&$_(s,g.props),Sa(m,p),f&&("immediateRender"in s||(s.immediateRender=!0),s.onComplete=function(){rc(m),h&&h.apply(this,arguments)}),a&&Ih(m,g),s=so(m,g,l||_,!s.duration&&u,_,s.duration||c?s:0),typeof i=="object"&&"zIndex"in i&&(s.zIndex=i.zIndex),M&&!c&&M.add(function(){return function(){return rc(m)}}),c?s:s.duration?rn.to(m.element,s):null},r.makeAbsolute=function(t,n){return(t instanceof Si?t:new Si(t,n)).makeAbsolute()},r.batch=function(t){return t||(t="default"),tf[t]||(tf[t]=new rx(t))},r.killFlipsOf=function(t,n){(t instanceof Si?t.targets:mo(t)).forEach(function(i){return i&&Uh(i._flip,n!==!1?1:2)})},r.isFlipping=function(t){var n=r.getByTarget(t);return!!n&&n.isActive()},r.getByTarget=function(t){return(la(t)||nc)._flip},r.getElementState=function(t,n){return new gs(la(t),n)},r.convertCoordinates=function(t,n,i){var s=Ui(n,!0,!0).multiply(Ui(t));return i?s.apply(i):s},r.register=function(t){if(gr=typeof document<"u"&&document.body,gr){rn=t,wh(gr),mo=rn.utils.toArray,ef=rn.core.getStyleSaver;var n=rn.utils.snap(.1);Ki=function(s,o){return n(parseFloat(s)+o)}}},r})();_o.version="3.15.0";typeof window<"u"&&window.gsap&&window.gsap.registerPlugin(_o);_e.registerPlugin(Ze,Ir,dc,O_,ys,_o,Ot);ys.create("ATM","0.16, 1, 0.3, 1");ys.create("ATMIn","0.7, 0, 0.2, 1");_e.defaults({ease:"ATM",duration:1});const sx={new:[{img:"/product/cut/1.png",name:"AURORA SILVER",sub:"JAQUETA PUFFER REFLETIVA",price:999.99,colors:[{label:"BRANCO",hex:"#f2f7fb"},{label:"AZUL",hex:"#8fb3cf"}]},{img:"/product/cut/2.png",name:"ORBIT SILVER",sub:"PUFFER ALTO BRILHO",price:1299.99,colors:[{label:"PRATA",hex:"#cdd7de"}]},{img:"/product/cut/3.png",name:"STEALTH BLACK",sub:"PUFFER BLINDADA PESADA",price:1199.99,dark:!0,colors:[{label:"PRETO",hex:"#12171c"},{label:"BRANCO",hex:"#f2f7fb"}]}],new2:[{img:"/product/cut/4.png",name:"GLACIER WHITE",sub:"JAQUETA PUFFER TÉRMICA",price:1299.99,colors:[{label:"CINZA",hex:"#b7c3cc"}]},{img:"/product/cut/5.png",name:"POLAR GLOSS",sub:"JAQUETA PUFFER AZUL",price:899.99,colors:[{label:"AZUL GLOSS",hex:"#a9c3da"}]},{img:"/product/cut/6.png",name:"STEALTH BLACK",sub:"JAQUETA PUFFER PESADA",price:1199.99,dark:!0,colors:[{label:"AZUL MARINHO",hex:"#1d2b3d"},{label:"PRETO",hex:"#12171c"}]},{img:"/product/cut/7.png",name:"ICEFIELD BLUE",sub:"JAQUETA PUFFER TECH",price:999.99,colors:[{label:"AZUL",hex:"#9dbad2"}]},{img:"/product/cut/8.png",name:"POLAR WHITE",sub:"JAQUETA PUFFER SHELL",price:1499.99,colors:[{label:"BRANCO",hex:"#f2f7fb"}]}],ops:[{img:"/product/cut/9.png",name:"FROST BLUE",sub:"JAQUETA PUFFER UNIT",price:999.99,colors:[{label:"AZUL FROST",hex:"#b9cddd"},{label:"AZUL FRIO",hex:"#7f9fbb"}]},{img:"/product/cut/10.png",name:"LITE FIELD",sub:"JAQUETA PUFFER BRANCA",price:1299.99,colors:[{label:"BRANCO",hex:"#f2f7fb"}]},{img:"/product/cut/11.png",name:"GLACIAL BLUE",sub:"JAQUETA PUFFER REFLETIVA",price:899.99,colors:[{label:"AZUL GELO",hex:"#a6c2d9"}]},{img:"/product/cut/12.png",name:"VOID BLACK",sub:"JAQUETA PUFFER OPS",price:1599.99,dark:!0,colors:[{label:"PRETO TOTAL",hex:"#0f1418"},{label:"BRANCO",hex:"#f2f7fb"}]},{img:"/product/cut/2.png",name:"SILVER REFLECTOR X",sub:"JAQUETA PUFFER",price:1299.99,colors:[{label:"CINZA",hex:"#b7c3cc"},{label:"BRANCO",hex:"#f2f7fb"}]},{img:"/product/cut/5.png",name:"POLAR GLOSS II",sub:"JAQUETA PUFFER",price:949.99,mobileOnly:!0,colors:[{label:"AZUL GLOSS",hex:"#a9c3da"}]}],lab:[{img:"/product/cut/10.png",name:"AURORA SILVER",sub:"JAQUETA PUFFER REFLETIVA",price:999.99,colors:[{label:"BRANCO",hex:"#f2f7fb"},{label:"AZUL",hex:"#8fb3cf"}]},{img:"/product/cut/7.png",name:"ICEFIELD BLUE",sub:"JAQUETA PUFFER TECH",price:999.99,colors:[{label:"AZUL",hex:"#9dbad2"}]}],lab2:[{img:"/product/cut/6.png",name:"STEALTH BLACK",sub:"JAQUETA PUFFER PESADA",price:1199.99,dark:!0,colors:[{label:"AZUL MARINHO",hex:"#1d2b3d"},{label:"PRETO",hex:"#12171c"}]},{img:"/product/cut/11.png",name:"GLACIAL BLUE",sub:"JAQUETA PUFFER REFLETIVA",price:899.99,mobileOnly:!0,colors:[{label:"AZUL GELO",hex:"#a6c2d9"}]}]},ox=[{d:"M107,131 C103,145 100,159 99,172 C97,192 95,206 93,214 C74,223 54,227 39,222 C75,215 128,211 189,215",w:9},{d:"M117,176 C114,200 113,223 117,236 C123,245 133,246 138,237 C140,214 139,193 138,177",w:8.4},{d:"M171,183 C161,197 151,207 147,215 C157,221 167,223 171,229 C167,237 157,241 148,238",w:8.4},{d:"M198,183 C188,197 178,207 174,215 C184,221 194,223 198,229 C194,237 184,241 175,238",w:8.4},{d:"M213,190 C211,213 210,233 214,245 C218,255 226,251 228,240",w:8.4},{d:"M46,166 C88,160 148,157 204,161",w:10.5},{d:"M128,152 l0.6,0.6",w:11.5},{d:"M139,154 l0.6,0.6",w:11.5},{d:"M239,173 C241,202 240,232 241,260 C242,274 243,281 240,286",w:9}],Do={href:"/ass-produto.png",x:20,y:130,w:260,h:156};function j_(r,{className:e="card__scribble",fill:t="#7c9ab4"}={}){const n=ox.map(i=>`<path d="${i.d}" />`).join("");return`<svg class="${e}" viewBox="6 112 288 192" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <filter id="ink-blur-${r}" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="2.6" />
    </filter>
    <linearGradient id="wipe-${r}" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#fff" stop-opacity="1" />
      <stop offset="72%" stop-color="#fff" stop-opacity="1" />
      <stop offset="100%" stop-color="#fff" stop-opacity="0" />
    </linearGradient>
    <mask id="tag-art-${r}" maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="400">
      <image href="${Do.href}" x="${Do.x}" y="${Do.y}" width="${Do.w}" height="${Do.h}" />
    </mask>
    <mask id="tag-ink-${r}" maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="400">
      <g class="tag-ink" fill="none" stroke="#fff" stroke-width="40"
         stroke-linecap="round" stroke-linejoin="round" filter="url(#ink-blur-${r})">
        ${n}
      </g>
      <rect class="tag-fill" x="-900" y="108" width="900" height="200" fill="url(#wipe-${r})" />
    </mask>
  </defs>
  <g mask="url(#tag-ink-${r})">
    <rect x="0" y="0" width="300" height="400" fill="${t}" mask="url(#tag-art-${r})" />
  </g>
</svg>`}let ax=0;function gc(r){return r.toLocaleString("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:2,maximumFractionDigits:2})}function lx(r,e){const t=r.colors.map(n=>`<span><i style="background:${n.hex}"></i>${n.label}</span>`).join("");return`<article class="card${r.mobileOnly?" card--fill":""}" data-card
  data-product data-name="${r.name}" data-sub="${r.sub}" data-price="${r.price}" data-img="${r.img}">
  <div class="card__media"${r.dark?" data-dark":""}>
    ${j_(ax++)}
    <img class="card__img" data-fly src="${r.img}" alt="${r.name} — ${r.sub}" loading="lazy" decoding="async" />
    <div class="card__shade"></div>
    <span class="card__index">/${String(e+1).padStart(2,"0")}</span>
    <button type="button" class="card__reveal" data-add
            aria-label="Adicionar ${r.name} à sacola">
      <strong class="card__price display" data-target="${r.price}">${gc(0)}</strong>
      <span class="card__cta">ADICIONAR <i>&#8599;</i></span>
    </button>
  </div>
  <div class="card__info">
    <p class="card__name"><b>${r.name}</b><span>${r.sub}</span></p>
    <div class="card__swatches">${t}</div>
  </div>
</article>`}function cx(){document.querySelectorAll("[data-grid]").forEach(r=>{const e=sx[r.dataset.grid];e&&(r.innerHTML=e.map(lx).join(""))})}function J_(r){const e=r.querySelector(".card__price");return{strokes:r.querySelectorAll(".card__scribble .tag-ink path"),wipe:r.querySelector(".card__scribble .tag-fill"),svg:r.querySelector(".card__scribble"),reveal:r.querySelector(".card__reveal"),priceEl:e,img:r.querySelector(".card__img"),shade:r.querySelector(".card__shade"),target:Number(e.dataset.target)||0}}function Q_({svg:r,strokes:e,wipe:t},n=_e.timeline(),i=0){return n.to(r,{opacity:1,duration:.12},i).to(e,{drawSVG:"0% 100%",duration:.52,ease:"none",stagger:{each:.13,from:"start"}},i).fromTo(t,{attr:{x:-906}},{attr:{x:0},duration:.62,ease:"power1.inOut"},i+.16)}function eg({priceEl:r,target:e}){const t={v:0},n=()=>{r.textContent=gc(t.v)};return{counter:t,paint:n,set:i=>(t.v=i,n())}}function ux(r){const e=J_(r),{reveal:t,img:n,shade:i}=e,s=eg(e);s.set(0),_e.set(e.strokes,{drawSVG:"0% 0%"});const o=_e.timeline({paused:!0,defaults:{ease:"power2.out"}});Q_(e,o,0).to(i,{opacity:1,duration:.6},0).to(n,{scale:1.04,duration:1,ease:"power2.out"},0).to(t,{y:0,duration:.62,ease:"expo.out"},.08).to(s.counter,{v:e.target,duration:.95,ease:"power2.out",onUpdate:s.paint},.12),r._tl=o;const a=()=>o.timeScale(1).play(),l=()=>o.timeScale(1.6).reverse();return r.addEventListener("pointerenter",a),r.addEventListener("pointerleave",l),()=>{r.removeEventListener("pointerenter",a),r.removeEventListener("pointerleave",l),o.kill(),r._tl=null,_e.set([t,n,i,e.svg],{clearProps:"all"})}}function fx(r){const e=J_(r),t=eg(e);_e.set(e.reveal,{y:0}),_e.set(e.strokes,{drawSVG:"0% 0%"}),_e.set(e.svg,{opacity:0}),t.set(e.target);const n=Ze.create({trigger:r,start:"top 88%",once:!0,onEnter:()=>Q_(e)});return r._tl=null,()=>{n.kill(),_e.set([e.reveal,e.svg],{clearProps:"all"}),t.set(0)}}const hx="(hover: hover) and (min-width: 861px)",dx="(hover: none), (max-width: 860px)";function px(){const r=_e.utils.toArray("[data-card]"),e=_e.matchMedia();return e.add(hx,()=>{const t=r.map(ux);return()=>t.forEach(n=>n())}),e.add(dx,()=>{const t=r.map(fx);return()=>t.forEach(n=>n())}),e}function mx(){const r=document.getElementById("preloader"),e=r.querySelector(".tag-wipe"),t=r.querySelector(".preloader__bar i"),n=document.getElementById("plCount"),i=r.querySelectorAll("[data-pl]"),s=r.querySelector(".preloader__curtain");document.body.classList.add("is-locked");const o={v:0};return new Promise(a=>{let l=!1;const c=()=>{l||(l=!0,document.body.classList.remove("is-locked"),r.style.display="none",a())},u=setTimeout(()=>{f.progress(1),c()},8e3),f=_e.timeline({onComplete:()=>{clearTimeout(u),c()}});f.from(i,{yPercent:120,opacity:0,duration:.7,stagger:.08},0).fromTo(e,{attr:{x:-2300}},{attr:{x:0},duration:1.85,ease:"power1.inOut"},.25).to(t,{scaleX:1,duration:1.9,ease:"power1.inOut"},.25).to(o,{v:100,duration:1.9,ease:"power1.inOut",onUpdate:()=>{n.textContent=String(Math.round(o.v)).padStart(3,"0")}},.25).to([i,t.parentNode,n.parentNode],{opacity:0,duration:.4},2.25).to(".preloader__tag",{scale:.86,opacity:0,duration:.7,ease:"power2.inOut"},2.3).to(s,{scaleY:1,duration:.7,ease:"expo.inOut"},2.4).to(r,{clipPath:"inset(0% 0% 100% 0%)",duration:1,ease:"expo.inOut"},2.95)})}let rf=null;function _x(){rf&&_e.to(rf,{yPercent:0,duration:.45,ease:"expo.out",overwrite:!0})}function gx(){const r=document.getElementById("nav");rf=r;const e=document.getElementById("burger"),t=document.getElementById("mobileMenu"),n=t.querySelectorAll("a");Ze.create({start:90,end:"max",onToggle:l=>r.classList.toggle("is-stuck",l.isActive)});let i=0;Ze.create({start:0,end:"max",onUpdate:l=>{const c=l.scroll();t.classList.contains("is-open")||(c>i&&c>260?_e.to(r,{yPercent:-110,duration:.5,overwrite:!0}):_e.to(r,{yPercent:0,duration:.5,overwrite:!0}),i=c)}});const s=_e.timeline({paused:!0,defaults:{ease:"expo.inOut"}}).to(t,{clipPath:"inset(0% 0% 0% 0%)",duration:.85}).from(n,{yPercent:130,opacity:0,duration:.7,stagger:.06,ease:"expo.out"},.2).from(".mobile-menu__foot span",{opacity:0,duration:.5,stagger:.1},.5);let o=!1;const a=()=>{o=!o,t.classList.toggle("is-open",o),e.setAttribute("aria-expanded",String(o)),document.body.classList.toggle("is-locked",o),_e.to(e.children[0],{rotate:o?45:0,y:o?3.75:0,duration:.45}),_e.to(e.children[1],{rotate:o?-45:0,y:o?-3.75:0,duration:.45}),o?s.play():s.reverse()};e.addEventListener("click",a),n.forEach(l=>l.addEventListener("click",()=>o&&a()))}const el=[{caption:"UNIDADE 01 — PUFFER STASIS / AZUL FROST / SHELL ABAIXO DE ZERO",a:"NÃO PRA MUITOS <br />PRA&nbsp;&nbsp;POUCOS",b:"ENGENHARIA PRO FRIO<br />NÃO PRA MULTIDÃO"},{caption:"UNIDADE 02 — VOLUME / CINZA GLACIAL / GRANDE ALTITUDE",a:"VOLUME ACIMA<br />DO RUÍDO&nbsp;&nbsp;SEMPRE",b:"VOLUME CALCULADO<br />NÃO DECORAÇÃO"},{caption:"UNIDADE 03 — PROTOCOLO SHELL / BRANCO POLAR / TRAVA VENTO",a:"O SILÊNCIO É<br />A&nbsp;&nbsp;FICHA",b:"TESTADO ACIMA<br />DAS NUVENS"}],vx=4.2,Yc=.9;function np(){const r=document.querySelector("[data-trio]");if(!r)return null;const e=document.querySelector("[data-trio-caption]"),t=document.querySelector("[data-trio-index]"),n=document.querySelector('[data-claim="a"]'),i=document.querySelector('[data-claim="b"]'),s=document.querySelector("[data-trio-dots]"),o=window.matchMedia("(prefers-reduced-motion: reduce)").matches,a=()=>Number(r.children[1].dataset.slide),l=el.map((T,C)=>{const S=document.createElement("button");return S.type="button",S.setAttribute("aria-label",`Unidade 0${C+1}`),S.innerHTML="<i></i>",S.addEventListener("click",()=>{const v=C-a();v&&g(v>1?v-el.length:v<-1?v+el.length:v,!0)}),s.appendChild(S),S}),u=l.map(T=>T.firstElementChild).map(T=>_e.quickSetter(T,"scaleX"));function f(){const T=a();l.forEach((C,S)=>{C.classList.toggle("is-on",S===T),C.setAttribute("aria-current",S===T?"true":"false"),S!==T&&u[S](0)})}function h(T,C,S){!T||T.innerHTML===C||_e.timeline({delay:S}).to(T,{yPercent:-24,opacity:0,duration:.28,ease:"power2.in"}).add(()=>{T.innerHTML=C}).fromTo(T,{yPercent:28,opacity:0},{yPercent:0,opacity:1,duration:.7,ease:"expo.out"})}function d(){const T=el[a()];t&&(t.textContent=String(a()+1).padStart(2,"0")),h(e,T.caption,.12),h(n,T.a,.06),h(i,T.b,.14),f()}let _;function g(T=1,C=!1){if(!T||_&&_.isActive())return;const S=[...r.children];_e.getTweensOf(S).forEach(L=>L.progress(1));const v=_o.getState(S,{props:"opacity"}),P=T>0?S[0]:S[S.length-1];for(let L=Math.abs(T);L>0;L--)T>0?r.appendChild(r.firstElementChild):r.insertBefore(r.lastElementChild,r.firstElementChild);if(_e.set(S,{clearProps:"opacity"}),o){d(),C&&p();return}_=_o.from(v,{duration:Yc,ease:"power3.inOut",absolute:!0,scale:!0,onComplete:()=>_e.set(S,{clearProps:"zIndex,filter"})}),_e.set(P,{zIndex:0}),_e.set(S.filter(L=>L!==P),{zIndex:3}),_e.timeline().to(P,{filter:"brightness(0.45)",duration:Yc*.4,ease:"power2.in"}).to(P,{filter:"brightness(1)",duration:Yc*.6,ease:"power2.out"}),d(),C&&p()}const m=_e.timeline({repeat:-1,paused:!0});m.to({},{duration:vx,ease:"none",onUpdate(){u[a()](this.progress())},onComplete:()=>g(1)});function p(){m.restart(!0),M||m.pause()}let M=!1,y=!1;function x(){M&&!y&&!o?m.play():m.pause()}Ot.create({target:r,type:"touch,pointer",dragMinimum:24,tolerance:20,onLeft:()=>g(1,!0),onRight:()=>g(-1,!0),onPress:()=>{y=!0,x()},onRelease:()=>{y=!1,x()}}),r.addEventListener("pointerenter",()=>{y=!0,x()}),r.addEventListener("pointerleave",()=>{y=!1,x()}),r.addEventListener("keydown",T=>{T.key==="ArrowRight"?g(1,!0):T.key==="ArrowLeft"&&g(-1,!0)});const b=Ze.create({trigger:r,start:"top 94%",end:"bottom 6%",onToggle:T=>{M=T.isActive,x()}});return d(),{go:g,pause:()=>m.pause(),debug:()=>({playable:M,hovered:y,paused:m.paused(),progress:m.progress(),stActive:b.isActive,stStart:Math.round(b.start),stEnd:Math.round(b.end),scroll:Math.round(b.scroll())})}}const xx=window.matchMedia("(prefers-reduced-motion: reduce)").matches;function Sx(){return xx||new URLSearchParams(location.search).get("smooth")==="0"?null:Ir.create({wrapper:"#smooth-wrapper",content:"#smooth-content",smooth:1.15,effects:!0,smoothTouch:!1,normalizeScroll:!1})}function yx(r,e="top 86%"){const t=dc.create(r,{type:"chars"});return _e.from(t.chars,{yPercent:55,opacity:0,duration:.9,ease:"expo.out",stagger:{each:.018,from:"start"},scrollTrigger:{trigger:r,start:e,once:!0}}),t}function Mx(){const r=_e.timeline({defaults:{ease:"expo.out"}});return r.from(".hero__mountain",{yPercent:-14,scale:1.1,opacity:0,duration:1.8},0).from(".hero__graffiti",{opacity:0,scale:1.14,duration:2},.1).from(".hero__figure",{yPercent:16,scale:1.06,opacity:0,duration:1.7,ease:"power3.out"},.12).from(".hero__title .line > span",{yPercent:118,duration:1.3,stagger:.09},.3).from("[data-hero-line]",{y:26,opacity:0,duration:1,stagger:.08},.62).from(".hero__thumbs .thumb",{yPercent:22,opacity:0,duration:1.1,stagger:.1},.68).from(".hero__counter, .hero__social",{opacity:0,y:14,duration:.9,stagger:.08},.9).from(".nav__logo, .nav__links a, .nav__tools > *",{y:-18,opacity:0,duration:.9,stagger:.05},.35).to(".frost-canvas",{opacity:.8,duration:2},.6),r}function Ex(){if(new URLSearchParams(location.search).get("still")==="1"){ip(),np(),rp();return}Ze.batch("[data-reveal]",{start:"top 90%",once:!0,onEnter:r=>_e.from(r,{y:30,opacity:0,duration:1.05,ease:"expo.out",stagger:.09,overwrite:!0})}),_e.utils.toArray("[data-split]").forEach(r=>yx(r)),_e.to(".hero__figure",{yPercent:-18,scale:.94,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}}),_e.to(".hero__graffiti",{yPercent:26,xPercent:6,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}}),_e.to(".hero__mountain",{yPercent:22,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}}),ip(),bx(),_e.to(".feature__img",{yPercent:-9,ease:"none",scrollTrigger:{trigger:"[data-feature]",start:"top bottom",end:"bottom top",scrub:!0}}),_e.to(".feature__bg",{xPercent:8,ease:"none",scrollTrigger:{trigger:"[data-feature]",start:"top bottom",end:"bottom top",scrub:!0}}),Ze.batch(".card",{start:"top 92%",once:!0,batchMax:5,interval:.12,onEnter:r=>_e.from(r,{y:54,opacity:0,duration:1.2,ease:"expo.out",stagger:.07,overwrite:!0})}),_e.fromTo("[data-mf-bg] img",{yPercent:-8,scale:1.16},{yPercent:8,scale:1.02,ease:"none",scrollTrigger:{trigger:".manifesto",start:"top bottom",end:"bottom top",scrub:!0}}),_e.from(".manifesto__title .line > span",{yPercent:118,duration:1.25,ease:"expo.out",stagger:.1,scrollTrigger:{trigger:".manifesto__title",start:"top 88%",once:!0}}),_e.from("[data-panel]",{clipPath:"inset(0% 0% 100% 0%)",duration:1.5,ease:"expo.inOut",scrollTrigger:{trigger:"[data-panel]",start:"top 82%",once:!0}}),_e.from(".trio__item",{yPercent:24,opacity:0,duration:1.3,ease:"expo.out",stagger:{each:.12,from:"center"},scrollTrigger:{trigger:".trio",start:"top 84%",once:!0}}),_e.fromTo(".claim--a",{xPercent:-14},{xPercent:4,ease:"none",scrollTrigger:{trigger:".panel__claims",start:"top bottom",end:"bottom top",scrub:1}}),_e.fromTo(".claim--b",{xPercent:14},{xPercent:-4,ease:"none",scrollTrigger:{trigger:".panel__claims",start:"top bottom",end:"bottom top",scrub:1}}),_e.from(".cold__title .line > span, .cold__sub .line > span",{yPercent:118,duration:1.2,ease:"expo.out",stagger:.09,scrollTrigger:{trigger:".cold",start:"top 72%",once:!0}}),_e.from("[data-cold-jacket]",{yPercent:18,rotate:-7,opacity:0,scale:.94,duration:1.6,ease:"expo.out",scrollTrigger:{trigger:".cold__jacket",start:"top 88%",once:!0}}),_e.to("[data-cold-jacket]",{yPercent:-12,rotate:4,ease:"none",scrollTrigger:{trigger:".cold",start:"top bottom",end:"bottom top",scrub:1}}),_e.fromTo("[data-cold-tag]",{clipPath:"inset(0% 100% 0% 0%)",opacity:0},{clipPath:"inset(0% 0% 0% 0%)",opacity:.9,duration:1.6,ease:"power1.inOut",scrollTrigger:{trigger:".cold__jacket",start:"top 78%",once:!0}}),Tx(),_e.fromTo("[data-lab-tag]",{clipPath:"inset(0% 100% 0% 0%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:1.5,ease:"power1.inOut",scrollTrigger:{trigger:"[data-lab-tag]",start:"top 88%",once:!0}}),np(),rp(),Ze.refresh()}function Tx(){const r=document.querySelector("[data-anatomy]");if(!r)return;const e=r.querySelector(".anatomy__frame"),t=r.querySelector(".anatomy__unit"),n=r.querySelectorAll(".anatomy__leads path"),i=r.querySelectorAll(".anatomy__ticks path"),s=r.querySelectorAll(".anatomy__dots circle"),o=_e.utils.toArray("[data-call]"),a=r.querySelectorAll(".anatomy__scale i"),l=(c,u)=>u.classList.contains("anatomy__call--l")?-30:30;_e.set([n,i],{drawSVG:"0% 0%"}),_e.set(s,{scale:0,transformOrigin:"50% 50%"}),_e.timeline({scrollTrigger:{trigger:r,start:"top 82%",end:"top 24%",scrub:.8}}).from(e,{clipPath:"inset(0% 100% 0% 0%)",duration:1,ease:"power2.inOut"},0).from(t,{yPercent:12,scale:1.06,opacity:0,duration:1,ease:"power2.out"},.1).to(i,{drawSVG:"0% 100%",duration:.35,stagger:.08,ease:"none"},.5).to(n,{drawSVG:"0% 100%",duration:.5,stagger:.08,ease:"none"},.58).to(s,{scale:1,duration:.3,stagger:.08,ease:"back.out(2.4)"},.86).from(o,{x:l,opacity:0,duration:.5,stagger:.08,ease:"power2.out"},.62).from(a,{scaleY:0,transformOrigin:"50% 100%",duration:.4,stagger:.04},.7),_e.timeline({scrollTrigger:{trigger:r,start:"bottom 74%",end:"bottom 8%",scrub:.8}}).to(o,{x:l,opacity:0,duration:.5,stagger:.06,ease:"power2.in"},0).to(s,{scale:0,duration:.3,stagger:.06},.1).to(n,{drawSVG:"100% 100%",duration:.5,stagger:.06,ease:"none"},.14).to(i,{drawSVG:"100% 100%",duration:.3,stagger:.05,ease:"none"},.3).to(t,{yPercent:-14,opacity:0,duration:.7,ease:"power2.in"},.34).to(e,{clipPath:"inset(0% 0% 0% 100%)",duration:.8,ease:"power2.inOut"},.5)}function bx(){const r=document.querySelector("[data-feature]"),e=r?.querySelector("[data-feature-bg]"),t=r?.querySelector(".feature__body h3");if(!r||!e||!t)return;e.innerHTML=j_("feature",{className:"feature__tag",fill:"#e8f1f8"});const n=e.querySelector("svg"),i=e.querySelectorAll(".tag-ink path"),s=e.querySelector(".tag-fill"),o=r.querySelector(".feature__img"),a=r.querySelector(".feature__cta"),l=dc.create(t,{type:"chars"}).chars;_e.set(n,{opacity:0}),_e.set(i,{drawSVG:"0% 0%"});const c=(h=0)=>{const d=_e.timeline();return d.set(i,{drawSVG:"0% 0%"},0).set(s,{attr:{x:-906}},0).to(n,{opacity:1,duration:.12},0).to(i,{drawSVG:"0% 100%",duration:.34,ease:"none",stagger:.06},0).fromTo(s,{attr:{x:-906}},{attr:{x:0},duration:.46,ease:"power1.inOut"},.12),d.delay(h)},u=_e.timeline({scrollTrigger:{trigger:r,start:"top 94%",once:!0}});u.from(r,{clipPath:"inset(0% 0% 100% 0%)",duration:.66,ease:"expo.inOut"},0).from(o,{scale:1.1,duration:1,ease:"expo.out"},0).add(c(),.14).from(l,{yPercent:70,opacity:0,duration:.5,ease:"expo.out",stagger:.018},.26).from(a,{y:18,opacity:0,duration:.45,ease:"expo.out"},.44);const f=_e.timeline({paused:!0,defaults:{ease:"power2.out"}}).to(o,{scale:1.045,duration:1.1},0).to(e,{opacity:.9,duration:.6},0).to(l,{yPercent:-12,duration:.5,ease:"expo.out",stagger:.018},0).to(l,{yPercent:0,duration:.55,ease:"expo.out",stagger:.018},.16);r.addEventListener("pointerenter",h=>{h.pointerType==="touch"||u.progress()<1||(f.restart(),c())}),r.addEventListener("pointerleave",h=>{h.pointerType!=="touch"&&(_e.to(o,{scale:1,duration:.9,ease:"power2.out"}),_e.to(e,{opacity:.62,duration:.6}))})}const Rs=[{full:"/banner/banner-1.png",mini:"/banner/banner1-mini.png",label:"Look frontal"},{full:"/banner/banner-2-cut.png",mini:"/banner/banner2-mini.png",label:"Look gloss"},{full:"/banner/banner-3-cut.png",mini:"/banner/banner3-mini.png",label:"Look de perfil"}];function ip(){const r=_e.utils.toArray("[data-thumbs] .thumb"),e=document.querySelector(".c-now"),t=document.querySelector(".c-rail b"),n=document.querySelector("[data-hero-figure] img");if(!n||r.length!==2)return;Rs.forEach(c=>{const u=new Image;u.src=c.full});let i=[0,1,2],s=!1;function o(c){r.forEach((u,f)=>{const h=Rs[i[f+1]],d=u.querySelector("img");if(u.setAttribute("aria-label",h.label),!c){d.src=h.mini,d.alt=h.label;return}d.getAttribute("src")!==h.mini&&_e.timeline().to(d,{opacity:0,yPercent:8,duration:.24,ease:"power2.in"}).add(()=>{d.src=h.mini,d.alt=h.label}).fromTo(d,{opacity:0,yPercent:10},{opacity:1,yPercent:0,duration:.65,ease:"expo.out"})})}function a(){e.textContent=String(i[0]+1).padStart(2,"0"),_e.to(t,{scaleX:(i[0]+1)/Rs.length,duration:.7})}function l(c){s||(s=!0,[i[0],i[c+1]]=[i[c+1],i[0]],_e.timeline({onComplete:()=>{s=!1}}).to(n,{opacity:0,yPercent:5,scale:1.03,duration:.34,ease:"power2.in"}).add(()=>{n.src=Rs[i[0]].full,n.alt=Rs[i[0]].label,o(!0),a()}).to(n,{opacity:1,yPercent:0,scale:1,duration:.9,ease:"expo.out"}))}r.forEach((c,u)=>c.addEventListener("click",()=>l(u))),n.src=Rs[i[0]].full,o(!1),a()}function rp(){const r=document.querySelector("[data-marquee] .foot__track");if(!r)return;const e=_e.to(r,{xPercent:-50,duration:26,ease:"none",repeat:-1});Ze.create({start:0,end:"max",onUpdate:t=>{const n=t.direction===-1?-1:1;_e.to(e,{timeScale:n*(1+Math.min(Math.abs(t.getVelocity())/2200,2.2)),duration:.4,overwrite:!0})}})}function Ax(){const r=_e.matchMedia();return r.add("(min-width: 861px)",()=>{const e=document.querySelector("[data-hero-figure]"),t=document.querySelector("[data-hero-graffiti]");if(!e)return;const n=_e.quickTo(e,"x",{duration:.9,ease:"power3"}),i=_e.quickTo(e,"y",{duration:.9,ease:"power3"}),s=_e.quickTo(t,"x",{duration:1.3,ease:"power3"}),o=a=>{const l=a.clientX/window.innerWidth-.5,c=a.clientY/window.innerHeight-.5;n(l*34),i(c*18),s(l*-52)};return window.addEventListener("pointermove",o),()=>{window.removeEventListener("pointermove",o),_e.set([e,t],{x:0,y:0})}}),r.add("(max-width: 860px)",()=>{Ze.config({ignoreMobileResize:!0})}),r}const Nh="180",wx=0,sp=1,Rx=2,tg=1,Cx=2,Vi=3,Ur=0,Nn=1,Xi=2,wr=0,oo=1,sf=2,op=3,ap=4,Px=5,Jr=100,Dx=101,Lx=102,Ix=103,Ux=104,Nx=200,Fx=201,Ox=202,Bx=203,of=204,af=205,kx=206,zx=207,Vx=208,Hx=209,Gx=210,Wx=211,Xx=212,qx=213,Yx=214,lf=0,cf=1,uf=2,go=3,ff=4,hf=5,df=6,pf=7,ng=0,$x=1,Kx=2,Rr=0,Zx=1,jx=2,Jx=3,Qx=4,eS=5,tS=6,nS=7,ig=300,vo=301,xo=302,mf=303,_f=304,vc=306,gf=1e3,ns=1001,vf=1002,yi=1003,iS=1004,tl=1005,Pi=1006,$c=1007,is=1008,nr=1009,rg=1010,sg=1011,ya=1012,Fh=1013,vs=1014,Zi=1015,wa=1016,Oh=1017,Bh=1018,Ma=1020,og=35902,ag=35899,lg=1021,cg=1022,xi=1023,Ea=1026,Ta=1027,ug=1028,kh=1029,fg=1030,zh=1031,Vh=1033,Ol=33776,Bl=33777,kl=33778,zl=33779,xf=35840,Sf=35841,yf=35842,Mf=35843,Ef=36196,Tf=37492,bf=37496,Af=37808,wf=37809,Rf=37810,Cf=37811,Pf=37812,Df=37813,Lf=37814,If=37815,Uf=37816,Nf=37817,Ff=37818,Of=37819,Bf=37820,kf=37821,zf=36492,Vf=36494,Hf=36495,Gf=36283,Wf=36284,Xf=36285,qf=36286,rS=3200,sS=3201,oS=0,aS=1,vr="",oi="srgb",So="srgb-linear",sc="linear",St="srgb",Cs=7680,lp=519,lS=512,cS=513,uS=514,hg=515,fS=516,hS=517,dS=518,pS=519,cp=35044,up="300 es",Di=2e3,oc=2001;class Mo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kc=Math.PI/180,Yf=180/Math.PI;function Ra(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[r&255]+an[r>>8&255]+an[r>>16&255]+an[r>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function ut(r,e,t){return Math.max(e,Math.min(t,r))}function mS(r,e){return(r%e+e)%e}function Zc(r,e,t){return(1-t)*r+t*e}function Lo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function wn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class yt{constructor(e=0,t=0){yt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ca{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==h||c!==d||u!==_){let m=1-a;const p=l*h+c*d+u*_+f*g,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const b=Math.sqrt(y),w=Math.atan2(b,p*M);m=Math.sin(m*w)/b,a=Math.sin(a*w)/b}const x=a*M;if(l=l*m+h*x,c=c*m+d*x,u=u*m+_*x,f=f*m+g*x,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-a*d,e[t+2]=c*_+u*d+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jc.copy(this).projectOnVector(e),this.sub(jc)}reflect(e){return this.sub(jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jc=new j,fp=new Ca;class tt{constructor(e,t,n,i,s,o,a,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],M=i[1],y=i[4],x=i[7],b=i[2],w=i[5],T=i[8];return s[0]=o*g+a*M+l*b,s[3]=o*m+a*y+l*w,s[6]=o*p+a*x+l*T,s[1]=c*g+u*M+f*b,s[4]=c*m+u*y+f*w,s[7]=c*p+u*x+f*T,s[2]=h*g+d*M+_*b,s[5]=h*m+d*y+_*w,s[8]=h*p+d*x+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,_=t*f+n*h+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=h*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jc.makeScale(e,t)),this}rotate(e){return this.premultiply(Jc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jc=new tt;function dg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ac(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function _S(){const r=ac("canvas");return r.style.display="block",r}const hp={};function ba(r){r in hp||(hp[r]=!0,console.warn(r))}function gS(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const dp=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pp=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vS(){const r={enabled:!0,workingColorSpace:So,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===St&&(i.r=Qi(i.r),i.g=Qi(i.g),i.b=Qi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(i.r=ao(i.r),i.g=ao(i.g),i.b=ao(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vr?sc:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ba("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ba("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[So]:{primaries:e,whitePoint:n,transfer:sc,toXYZ:dp,fromXYZ:pp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:n,transfer:St,toXYZ:dp,fromXYZ:pp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),r}const dt=vS();function Qi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ao(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ps;class xS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ps===void 0&&(Ps=ac("canvas")),Ps.width=e.width,Ps.height=e.height;const i=Ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ac("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Qi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qi(t[n]/255)*255):t[n]=Qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let SS=0;class Hh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=Ra(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Qc(i[o].image)):s.push(Qc(i[o]))}else s=Qc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Qc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?xS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yS=0;const eu=new j;class Fn extends Mo{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,n=ns,i=ns,s=Pi,o=is,a=xi,l=nr,c=Fn.DEFAULT_ANISOTROPY,u=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=Ra(),this.name="",this.source=new Hh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(eu).x}get height(){return this.source.getSize(eu).y}get depth(){return this.source.getSize(eu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ig)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gf:e.x=e.x-Math.floor(e.x);break;case ns:e.x=e.x<0?0:1;break;case vf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gf:e.y=e.y-Math.floor(e.y);break;case ns:e.y=e.y<0?0:1;break;case vf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=ig;Fn.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,t=0,n=0,i=1){Gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(d+1)/2,b=(p+1)/2,w=(u+h)/4,T=(f+g)/4,C=(_+m)/4;return y>x&&y>b?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=w/n,s=T/n):x>b?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=w/i,s=C/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=T/s,i=C/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(f-g)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class MS extends Mo{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Fn(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Pi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Hh(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xs extends MS{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class pg extends Fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yi,this.minFilter=yi,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ES extends Fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yi,this.minFilter=yi,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pa{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,di):di.fromBufferAttribute(s,o),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nl.copy(n.boundingBox)),nl.applyMatrix4(e.matrixWorld),this.union(nl)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),il.subVectors(this.max,Io),Ds.subVectors(e.a,Io),Ls.subVectors(e.b,Io),Is.subVectors(e.c,Io),lr.subVectors(Ls,Ds),cr.subVectors(Is,Ls),kr.subVectors(Ds,Is);let t=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-kr.z,kr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,kr.z,0,-kr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-kr.y,kr.x,0];return!tu(t,Ds,Ls,Is,il)||(t=[1,0,0,0,1,0,0,0,1],!tu(t,Ds,Ls,Is,il))?!1:(rl.crossVectors(lr,cr),t=[rl.x,rl.y,rl.z],tu(t,Ds,Ls,Is,il))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fi=[new j,new j,new j,new j,new j,new j,new j,new j],di=new j,nl=new Pa,Ds=new j,Ls=new j,Is=new j,lr=new j,cr=new j,kr=new j,Io=new j,il=new j,rl=new j,zr=new j;function tu(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){zr.fromArray(r,s);const a=i.x*Math.abs(zr.x)+i.y*Math.abs(zr.y)+i.z*Math.abs(zr.z),l=e.dot(zr),c=t.dot(zr),u=n.dot(zr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const TS=new Pa,Uo=new j,nu=new j;class xc{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):TS.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const t=Uo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Uo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(nu)),this.expandByPoint(Uo.copy(e.center).sub(nu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Oi=new j,iu=new j,sl=new j,ur=new j,ru=new j,ol=new j,su=new j;class mg{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){iu.copy(e).add(t).multiplyScalar(.5),sl.copy(t).sub(e).normalize(),ur.copy(this.origin).sub(iu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(sl),a=ur.dot(this.direction),l=-ur.dot(sl),c=ur.lengthSq(),u=Math.abs(1-o*o);let f,h,d,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(iu).addScaledVector(sl,h),d}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const n=Oi.dot(this.direction),i=Oi.dot(Oi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,i,s){ru.subVectors(t,e),ol.subVectors(n,e),su.crossVectors(ru,ol);let o=this.direction.dot(su),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ur.subVectors(this.origin,e);const l=a*this.direction.dot(ol.crossVectors(ur,ol));if(l<0)return null;const c=a*this.direction.dot(ru.cross(ur));if(c<0||l+c>o)return null;const u=-a*ur.dot(su);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,t,n,i,s,o,a,l,c,u,f,h,d,_,g,m){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,f,h,d,_,g,m)}set(e,t,n,i,s,o,a,l,c,u,f,h,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Us.setFromMatrixColumn(e,0).length(),s=1/Us.setFromMatrixColumn(e,1).length(),o=1/Us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-g*c,t[9]=-a*l,t[2]=g-h*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,g=c*f;t[0]=h+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,g=c*f;t[0]=h-g*a,t[4]=-o*f,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-h*f,t[8]=_*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-g*f}else if(e.order==="XZY"){const h=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+g,t[5]=o*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=a*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bS,e,AS)}lookAt(e,t,n){const i=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),fr.crossVectors(n,Hn),fr.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),fr.crossVectors(n,Hn)),fr.normalize(),al.crossVectors(Hn,fr),i[0]=fr.x,i[4]=al.x,i[8]=Hn.x,i[1]=fr.y,i[5]=al.y,i[9]=Hn.y,i[2]=fr.z,i[6]=al.z,i[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],M=n[3],y=n[7],x=n[11],b=n[15],w=i[0],T=i[4],C=i[8],S=i[12],v=i[1],P=i[5],L=i[9],F=i[13],V=i[2],O=i[6],W=i[10],X=i[14],G=i[3],ee=i[7],I=i[11],le=i[15];return s[0]=o*w+a*v+l*V+c*G,s[4]=o*T+a*P+l*O+c*ee,s[8]=o*C+a*L+l*W+c*I,s[12]=o*S+a*F+l*X+c*le,s[1]=u*w+f*v+h*V+d*G,s[5]=u*T+f*P+h*O+d*ee,s[9]=u*C+f*L+h*W+d*I,s[13]=u*S+f*F+h*X+d*le,s[2]=_*w+g*v+m*V+p*G,s[6]=_*T+g*P+m*O+p*ee,s[10]=_*C+g*L+m*W+p*I,s[14]=_*S+g*F+m*X+p*le,s[3]=M*w+y*v+x*V+b*G,s[7]=M*T+y*P+x*O+b*ee,s[11]=M*C+y*L+x*W+b*I,s[15]=M*S+y*F+x*X+b*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*f-i*c*f-s*a*h+n*c*h+i*a*d-n*l*d)+g*(+t*l*d-t*c*h+s*o*h-i*o*d+i*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-t*l*f+t*a*h+i*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],M=f*m*c-g*h*c+g*l*d-a*m*d-f*l*p+a*h*p,y=_*h*c-u*m*c-_*l*d+o*m*d+u*l*p-o*h*p,x=u*g*c-_*f*c+_*a*d-o*g*d-u*a*p+o*f*p,b=_*f*l-u*g*l-_*a*h+o*g*h+u*a*m-o*f*m,w=t*M+n*y+i*x+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=M*T,e[1]=(g*h*s-f*m*s-g*i*d+n*m*d+f*i*p-n*h*p)*T,e[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*p+n*l*p)*T,e[3]=(f*l*s-a*h*s-f*i*c+n*h*c+a*i*d-n*l*d)*T,e[4]=y*T,e[5]=(u*m*s-_*h*s+_*i*d-t*m*d-u*i*p+t*h*p)*T,e[6]=(_*l*s-o*m*s-_*i*c+t*m*c+o*i*p-t*l*p)*T,e[7]=(o*h*s-u*l*s+u*i*c-t*h*c-o*i*d+t*l*d)*T,e[8]=x*T,e[9]=(_*f*s-u*g*s-_*n*d+t*g*d+u*n*p-t*f*p)*T,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*p+t*a*p)*T,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*d-t*a*d)*T,e[12]=b*T,e[13]=(u*g*i-_*f*i+_*n*h-t*g*h-u*n*m+t*f*m)*T,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*m-t*a*m)*T,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*h+t*a*h)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,_=s*f,g=o*u,m=o*f,p=a*f,M=l*c,y=l*u,x=l*f,b=n.x,w=n.y,T=n.z;return i[0]=(1-(g+p))*b,i[1]=(d+x)*b,i[2]=(_-y)*b,i[3]=0,i[4]=(d-x)*w,i[5]=(1-(h+p))*w,i[6]=(m+M)*w,i[7]=0,i[8]=(_+y)*T,i[9]=(m-M)*T,i[10]=(1-(h+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Us.set(i[0],i[1],i[2]).length();const o=Us.set(i[4],i[5],i[6]).length(),a=Us.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],pi.copy(this);const c=1/s,u=1/o,f=1/a;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=u,pi.elements[5]*=u,pi.elements[6]*=u,pi.elements[8]*=f,pi.elements[9]*=f,pi.elements[10]*=f,t.setFromRotationMatrix(pi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Di,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let _,g;if(l)_=s/(o-s),g=o*s/(o-s);else if(a===Di)_=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===oc)_=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Di,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-i),h=-(t+e)/(t-e),d=-(n+i)/(n-i);let _,g;if(l)_=1/(o-s),g=o/(o-s);else if(a===Di)_=-2/(o-s),g=-(o+s)/(o-s);else if(a===oc)_=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Us=new j,pi=new Yt,bS=new j(0,0,0),AS=new j(1,1,1),fr=new j,al=new j,Hn=new j,mp=new Yt,_p=new Ca;class ir{constructor(e=0,t=0,n=0,i=ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _p.setFromEuler(this),this.setFromQuaternion(_p,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ir.DEFAULT_ORDER="XYZ";class _g{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wS=0;const gp=new j,Ns=new Ca,Bi=new Yt,ll=new j,No=new j,RS=new j,CS=new Ca,vp=new j(1,0,0),xp=new j(0,1,0),Sp=new j(0,0,1),yp={type:"added"},PS={type:"removed"},Fs={type:"childadded",child:null},ou={type:"childremoved",child:null};class On extends Mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=Ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new j,t=new ir,n=new Ca,i=new j(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Yt},normalMatrix:{value:new tt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _g,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(vp,e)}rotateY(e){return this.rotateOnAxis(xp,e)}rotateZ(e){return this.rotateOnAxis(Sp,e)}translateOnAxis(e,t){return gp.copy(e).applyQuaternion(this.quaternion),this.position.add(gp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vp,e)}translateY(e){return this.translateOnAxis(xp,e)}translateZ(e){return this.translateOnAxis(Sp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ll.copy(e):ll.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(No,ll,this.up):Bi.lookAt(ll,No,this.up),this.quaternion.setFromRotationMatrix(Bi),i&&(Bi.extractRotation(i.matrixWorld),Ns.setFromRotationMatrix(Bi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yp),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(PS),ou.child=e,this.dispatchEvent(ou),ou.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yp),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,RS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,CS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}On.DEFAULT_UP=new j(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new j,ki=new j,au=new j,zi=new j,Os=new j,Bs=new j,Mp=new j,lu=new j,cu=new j,uu=new j,fu=new Gt,hu=new Gt,du=new Gt;class gi{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mi.subVectors(e,t),i.cross(mi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){mi.subVectors(i,t),ki.subVectors(n,t),au.subVectors(e,t);const o=mi.dot(mi),a=mi.dot(ki),l=mi.dot(au),c=ki.dot(ki),u=ki.dot(au),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zi.x),l.addScaledVector(o,zi.y),l.addScaledVector(a,zi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return fu.setScalar(0),hu.setScalar(0),du.setScalar(0),fu.fromBufferAttribute(e,t),hu.fromBufferAttribute(e,n),du.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(fu,s.x),o.addScaledVector(hu,s.y),o.addScaledVector(du,s.z),o}static isFrontFacing(e,t,n,i){return mi.subVectors(n,t),ki.subVectors(e,t),mi.cross(ki).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),mi.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return gi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Os.subVectors(i,n),Bs.subVectors(s,n),lu.subVectors(e,n);const l=Os.dot(lu),c=Bs.dot(lu);if(l<=0&&c<=0)return t.copy(n);cu.subVectors(e,i);const u=Os.dot(cu),f=Bs.dot(cu);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Os,o);uu.subVectors(e,s);const d=Os.dot(uu),_=Bs.dot(uu);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Bs,a);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return Mp.subVectors(s,i),a=(f-u)/(f-u+(d-_)),t.copy(i).addScaledVector(Mp,a);const p=1/(m+g+h);return o=g*p,a=h*p,t.copy(n).addScaledVector(Os,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},cl={h:0,s:0,l:0};function pu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class xt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=mS(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=pu(o,s,e+1/3),this.g=pu(o,s,e),this.b=pu(o,s,e-1/3)}return dt.colorSpaceToWorking(this,i),this}setStyle(e,t=oi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=oi){const n=gg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return dt.workingToColorSpace(ln.copy(this),e),Math.round(ut(ln.r*255,0,255))*65536+Math.round(ut(ln.g*255,0,255))*256+Math.round(ut(ln.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(ln.copy(this),t);const n=ln.r,i=ln.g,s=ln.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=oi){dt.workingToColorSpace(ln.copy(this),e);const t=ln.r,n=ln.g,i=ln.b;return e!==oi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+t,hr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hr),e.getHSL(cl);const n=Zc(hr.h,cl.h,t),i=Zc(hr.s,cl.s,t),s=Zc(hr.l,cl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new xt;xt.NAMES=gg;let DS=0;class Da extends Mo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=Ra(),this.name="",this.type="Material",this.blending=oo,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=of,this.blendDst=af,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oo&&(n.blending=this.blending),this.side!==Ur&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==of&&(n.blendSrc=this.blendSrc),this.blendDst!==af&&(n.blendDst=this.blendDst),this.blendEquation!==Jr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vg extends Da{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.combine=ng,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new j,ul=new yt;let LS=0;class bn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cp,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ul.fromBufferAttribute(this,t),ul.applyMatrix3(e),this.setXY(t,ul.x,ul.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Lo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Lo(t,this.array)),t}setX(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Lo(t,this.array)),t}setY(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Lo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Lo(t,this.array)),t}setW(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array),i=wn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array),i=wn(i,this.array),s=wn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cp&&(e.usage=this.usage),e}}class xg extends bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sg extends bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class hs extends bn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let IS=0;const ri=new Yt,mu=new On,ks=new j,Gn=new Pa,Fo=new Pa,Qt=new j;class sr extends Mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=Ra(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dg(e)?Sg:xg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,n){return ri.makeTranslation(e,t,n),this.applyMatrix4(ri),this}scale(e,t,n){return ri.makeScale(e,t,n),this.applyMatrix4(ri),this}lookAt(e){return mu.lookAt(e),mu.updateMatrix(),this.applyMatrix4(mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new hs(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Fo.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(Gn.min,Fo.min),Gn.expandByPoint(Qt),Qt.addVectors(Gn.max,Fo.max),Gn.expandByPoint(Qt)):(Gn.expandByPoint(Fo.min),Gn.expandByPoint(Fo.max))}Gn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Qt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Qt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Qt.fromBufferAttribute(a,c),l&&(ks.fromBufferAttribute(e,c),Qt.add(ks)),i=Math.max(i,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new j,l[C]=new j;const c=new j,u=new j,f=new j,h=new yt,d=new yt,_=new yt,g=new j,m=new j;function p(C,S,v){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,v),h.fromBufferAttribute(s,C),d.fromBufferAttribute(s,S),_.fromBufferAttribute(s,v),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const P=1/(d.x*_.y-_.x*d.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(P),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(P),a[C].add(g),a[S].add(g),a[v].add(g),l[C].add(m),l[S].add(m),l[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let C=0,S=M.length;C<S;++C){const v=M[C],P=v.start,L=v.count;for(let F=P,V=P+L;F<V;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new j,x=new j,b=new j,w=new j;function T(C){b.fromBufferAttribute(i,C),w.copy(b);const S=a[C];y.copy(S),y.sub(b.multiplyScalar(b.dot(S))).normalize(),x.crossVectors(w,S);const P=x.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,P)}for(let C=0,S=M.length;C<S;++C){const v=M[C],P=v.start,L=v.count;for(let F=P,V=P+L;F<V;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new j,s=new j,o=new j,a=new j,l=new j,c=new j,u=new j,f=new j;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new bn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sr,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ep=new Yt,Vr=new mg,fl=new xc,Tp=new j,hl=new j,dl=new j,pl=new j,_u=new j,ml=new j,bp=new j,_l=new j;class ji extends On{constructor(e=new sr,t=new vg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){ml.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(_u.fromBufferAttribute(f,e),o?ml.addScaledVector(_u,u):ml.addScaledVector(_u.sub(t),u))}t.add(ml)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fl.copy(n.boundingSphere),fl.applyMatrix4(s),Vr.copy(e.ray).recast(e.near),!(fl.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(fl,Tp)===null||Vr.origin.distanceToSquared(Tp)>(e.far-e.near)**2))&&(Ep.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(Ep),!(n.boundingBox!==null&&Vr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=o[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,b=y;x<b;x+=3){const w=a.getX(x),T=a.getX(x+1),C=a.getX(x+2);i=gl(this,p,e,n,c,u,f,w,T,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const M=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);i=gl(this,o,e,n,c,u,f,M,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=o[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,b=y;x<b;x+=3){const w=x,T=x+1,C=x+2;i=gl(this,p,e,n,c,u,f,w,T,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const M=m,y=m+1,x=m+2;i=gl(this,o,e,n,c,u,f,M,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function US(r,e,t,n,i,s,o,a){let l;if(e.side===Nn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Ur,a),l===null)return null;_l.copy(a),_l.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(_l);return c<t.near||c>t.far?null:{distance:c,point:_l.clone(),object:r}}function gl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,hl),r.getVertexPosition(l,dl),r.getVertexPosition(c,pl);const u=US(r,e,t,n,hl,dl,pl,bp);if(u){const f=new j;gi.getBarycoord(bp,hl,dl,pl,f),i&&(u.uv=gi.getInterpolatedAttribute(i,a,l,c,f,new yt)),s&&(u.uv1=gi.getInterpolatedAttribute(s,a,l,c,f,new yt)),o&&(u.normal=gi.getInterpolatedAttribute(o,a,l,c,f,new j),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new j,materialIndex:0};gi.getNormal(hl,dl,pl,h.normal),u.face=h,u.barycoord=f}return u}class La extends sr{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new hs(c,3)),this.setAttribute("normal",new hs(u,3)),this.setAttribute("uv",new hs(f,2));function _(g,m,p,M,y,x,b,w,T,C,S){const v=x/T,P=b/C,L=x/2,F=b/2,V=w/2,O=T+1,W=C+1;let X=0,G=0;const ee=new j;for(let I=0;I<W;I++){const le=I*P-F;for(let ve=0;ve<O;ve++){const Oe=ve*v-L;ee[g]=Oe*M,ee[m]=le*y,ee[p]=V,c.push(ee.x,ee.y,ee.z),ee[g]=0,ee[m]=0,ee[p]=w>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push(ve/T),f.push(1-I/C),X+=1}}for(let I=0;I<C;I++)for(let le=0;le<T;le++){const ve=h+le+O*I,Oe=h+le+O*(I+1),we=h+(le+1)+O*(I+1),ye=h+(le+1)+O*I;l.push(ve,Oe,ye),l.push(Oe,we,ye),G+=6}a.addGroup(d,G,S),d+=G,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Sn(r){const e={};for(let t=0;t<r.length;t++){const n=yo(r[t]);for(const i in n)e[i]=n[i]}return e}function NS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function yg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const FS={clone:yo,merge:Sn};var OS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rr extends Da{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OS,this.fragmentShader=BS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=NS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mg extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dr=new j,Ap=new yt,wp=new yt;class ci extends Mg{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yf*2*Math.atan(Math.tan(Kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(dr.x,dr.y).multiplyScalar(-e/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dr.x,dr.y).multiplyScalar(-e/dr.z)}getViewSize(e,t){return this.getViewBounds(e,Ap,wp),t.subVectors(wp,Ap)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Kc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zs=-90,Vs=1;class kS extends On{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ci(zs,Vs,e,t);i.layers=this.layers,this.add(i);const s=new ci(zs,Vs,e,t);s.layers=this.layers,this.add(s);const o=new ci(zs,Vs,e,t);o.layers=this.layers,this.add(o);const a=new ci(zs,Vs,e,t);a.layers=this.layers,this.add(a);const l=new ci(zs,Vs,e,t);l.layers=this.layers,this.add(l);const c=new ci(zs,Vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Di)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Eg extends Fn{constructor(e=[],t=vo,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zS extends xs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Eg(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new La(5,5,5),s=new rr({name:"CubemapFromEquirect",uniforms:yo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nn,blending:wr});s.uniforms.tEquirect.value=t;const o=new ji(i,s),a=t.minFilter;return t.minFilter===is&&(t.minFilter=Pi),new kS(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class vl extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VS={type:"move"};class gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(VS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vl;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class HS extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ir,this.environmentIntensity=1,this.environmentRotation=new ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const vu=new j,GS=new j,WS=new tt;class Kr{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=vu.subVectors(n,t).cross(GS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(vu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||WS.getNormalMatrix(e),i=this.coplanarPoint(vu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new xc,XS=new yt(.5,.5),xl=new j;class Tg{constructor(e=new Kr,t=new Kr,n=new Kr,i=new Kr,s=new Kr,o=new Kr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Di,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],_=s[8],g=s[9],m=s[10],p=s[11],M=s[12],y=s[13],x=s[14],b=s[15];if(i[0].setComponents(c-o,d-u,p-_,b-M).normalize(),i[1].setComponents(c+o,d+u,p+_,b+M).normalize(),i[2].setComponents(c+a,d+f,p+g,b+y).normalize(),i[3].setComponents(c-a,d-f,p-g,b-y).normalize(),n)i[4].setComponents(l,h,m,x).normalize(),i[5].setComponents(c-l,d-h,p-m,b-x).normalize();else if(i[4].setComponents(c-l,d-h,p-m,b-x).normalize(),t===Di)i[5].setComponents(c+l,d+h,p+m,b+x).normalize();else if(t===oc)i[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);const t=XS.distanceTo(e.center);return Hr.radius=.7071067811865476+t,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(xl.x=i.normal.x>0?e.max.x:e.min.x,xl.y=i.normal.y>0?e.max.y:e.min.y,xl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(xl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qS extends Da{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rp=new Yt,$f=new mg,Sl=new xc,yl=new j;class YS extends On{constructor(e=new sr,t=new qS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sl.copy(n.boundingSphere),Sl.applyMatrix4(i),Sl.radius+=s,e.ray.intersectsSphere(Sl)===!1)return;Rp.copy(i).invert(),$f.copy(e.ray).applyMatrix4(Rp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=h,g=d;_<g;_++){const m=c.getX(_);yl.fromBufferAttribute(f,m),Cp(yl,m,l,i,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let _=h,g=d;_<g;_++)yl.fromBufferAttribute(f,_),Cp(yl,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Cp(r,e,t,n,i,s,o){const a=$f.distanceSqToPoint(r);if(a<t){const l=new j;$f.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class bg extends Fn{constructor(e,t,n=vs,i,s,o,a=yi,l=yi,c,u=Ea,f=1){if(u!==Ea&&u!==Ta)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ag extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Sc extends sr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const M=p*h-o;for(let y=0;y<c;y++){const x=y*f-s;_.push(x,-M,0),g.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const y=M+c*p,x=M+c*(p+1),b=M+1+c*(p+1),w=M+1+c*p;d.push(y,x,w),d.push(x,b,w)}this.setIndex(d),this.setAttribute("position",new hs(_,3)),this.setAttribute("normal",new hs(g,3)),this.setAttribute("uv",new hs(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.width,e.height,e.widthSegments,e.heightSegments)}}class $S extends Da{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KS extends Da{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ZS extends Mg{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jS extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Pp(r,e,t,n){const i=JS(n);switch(t){case lg:return r*e;case ug:return r*e/i.components*i.byteLength;case kh:return r*e/i.components*i.byteLength;case fg:return r*e*2/i.components*i.byteLength;case zh:return r*e*2/i.components*i.byteLength;case cg:return r*e*3/i.components*i.byteLength;case xi:return r*e*4/i.components*i.byteLength;case Vh:return r*e*4/i.components*i.byteLength;case Ol:case Bl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kl:case zl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Sf:case Mf:return Math.max(r,16)*Math.max(e,8)/4;case xf:case yf:return Math.max(r,8)*Math.max(e,8)/2;case Ef:case Tf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case bf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Af:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Df:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case If:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Uf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Of:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case kf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case zf:case Vf:case Hf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Gf:case Wf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Xf:case qf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function JS(r){switch(r){case nr:case rg:return{byteLength:1,components:1};case ya:case sg:case wa:return{byteLength:2,components:1};case Oh:case Bh:return{byteLength:2,components:4};case vs:case Fh:case Zi:return{byteLength:4,components:1};case og:case ag:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nh);function wg(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function QS(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],g=f[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,f[h]=g)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const g=f[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var ey=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ty=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ny=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ry=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ay=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ly=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,py=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,My=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ey=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ty=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,by=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ay=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ry=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Py="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ly=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Iy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ny=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Oy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,By=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ky=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$y=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ky=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_M=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,MM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,EM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,CM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,FM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,OM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,BM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,VM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,GM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,YM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$M=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,KM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,JM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,aE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_E=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,SE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ME=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,DE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:ey,alphahash_pars_fragment:ty,alphamap_fragment:ny,alphamap_pars_fragment:iy,alphatest_fragment:ry,alphatest_pars_fragment:sy,aomap_fragment:oy,aomap_pars_fragment:ay,batching_pars_vertex:ly,batching_vertex:cy,begin_vertex:uy,beginnormal_vertex:fy,bsdfs:hy,iridescence_fragment:dy,bumpmap_pars_fragment:py,clipping_planes_fragment:my,clipping_planes_pars_fragment:_y,clipping_planes_pars_vertex:gy,clipping_planes_vertex:vy,color_fragment:xy,color_pars_fragment:Sy,color_pars_vertex:yy,color_vertex:My,common:Ey,cube_uv_reflection_fragment:Ty,defaultnormal_vertex:by,displacementmap_pars_vertex:Ay,displacementmap_vertex:wy,emissivemap_fragment:Ry,emissivemap_pars_fragment:Cy,colorspace_fragment:Py,colorspace_pars_fragment:Dy,envmap_fragment:Ly,envmap_common_pars_fragment:Iy,envmap_pars_fragment:Uy,envmap_pars_vertex:Ny,envmap_physical_pars_fragment:qy,envmap_vertex:Fy,fog_vertex:Oy,fog_pars_vertex:By,fog_fragment:ky,fog_pars_fragment:zy,gradientmap_pars_fragment:Vy,lightmap_pars_fragment:Hy,lights_lambert_fragment:Gy,lights_lambert_pars_fragment:Wy,lights_pars_begin:Xy,lights_toon_fragment:Yy,lights_toon_pars_fragment:$y,lights_phong_fragment:Ky,lights_phong_pars_fragment:Zy,lights_physical_fragment:jy,lights_physical_pars_fragment:Jy,lights_fragment_begin:Qy,lights_fragment_maps:eM,lights_fragment_end:tM,logdepthbuf_fragment:nM,logdepthbuf_pars_fragment:iM,logdepthbuf_pars_vertex:rM,logdepthbuf_vertex:sM,map_fragment:oM,map_pars_fragment:aM,map_particle_fragment:lM,map_particle_pars_fragment:cM,metalnessmap_fragment:uM,metalnessmap_pars_fragment:fM,morphinstance_vertex:hM,morphcolor_vertex:dM,morphnormal_vertex:pM,morphtarget_pars_vertex:mM,morphtarget_vertex:_M,normal_fragment_begin:gM,normal_fragment_maps:vM,normal_pars_fragment:xM,normal_pars_vertex:SM,normal_vertex:yM,normalmap_pars_fragment:MM,clearcoat_normal_fragment_begin:EM,clearcoat_normal_fragment_maps:TM,clearcoat_pars_fragment:bM,iridescence_pars_fragment:AM,opaque_fragment:wM,packing:RM,premultiplied_alpha_fragment:CM,project_vertex:PM,dithering_fragment:DM,dithering_pars_fragment:LM,roughnessmap_fragment:IM,roughnessmap_pars_fragment:UM,shadowmap_pars_fragment:NM,shadowmap_pars_vertex:FM,shadowmap_vertex:OM,shadowmask_pars_fragment:BM,skinbase_vertex:kM,skinning_pars_vertex:zM,skinning_vertex:VM,skinnormal_vertex:HM,specularmap_fragment:GM,specularmap_pars_fragment:WM,tonemapping_fragment:XM,tonemapping_pars_fragment:qM,transmission_fragment:YM,transmission_pars_fragment:$M,uv_pars_fragment:KM,uv_pars_vertex:ZM,uv_vertex:jM,worldpos_vertex:JM,background_vert:QM,background_frag:eE,backgroundCube_vert:tE,backgroundCube_frag:nE,cube_vert:iE,cube_frag:rE,depth_vert:sE,depth_frag:oE,distanceRGBA_vert:aE,distanceRGBA_frag:lE,equirect_vert:cE,equirect_frag:uE,linedashed_vert:fE,linedashed_frag:hE,meshbasic_vert:dE,meshbasic_frag:pE,meshlambert_vert:mE,meshlambert_frag:_E,meshmatcap_vert:gE,meshmatcap_frag:vE,meshnormal_vert:xE,meshnormal_frag:SE,meshphong_vert:yE,meshphong_frag:ME,meshphysical_vert:EE,meshphysical_frag:TE,meshtoon_vert:bE,meshtoon_frag:AE,points_vert:wE,points_frag:RE,shadow_vert:CE,shadow_frag:PE,sprite_vert:DE,sprite_frag:LE},Ae={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},bi={basic:{uniforms:Sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new xt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Sn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Sn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new xt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Sn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Sn([Ae.points,Ae.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Sn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Sn([Ae.common,Ae.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Sn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Sn([Ae.sprite,Ae.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:Sn([Ae.common,Ae.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:Sn([Ae.lights,Ae.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};bi.physical={uniforms:Sn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Ml={r:0,b:0,g:0},Gr=new ir,IE=new Yt;function UE(r,e,t,n,i,s,o){const a=new xt(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function _(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function g(y){let x=!1;const b=_(y);b===null?p(a,l):b&&b.isColor&&(p(b,1),x=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,x){const b=_(x);b&&(b.isCubeTexture||b.mapping===vc)?(u===void 0&&(u=new ji(new La(1,1,1),new rr({name:"BackgroundCubeMaterial",uniforms:yo(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Gr.copy(x.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(IE.makeRotationFromEuler(Gr)),u.material.toneMapped=dt.getTransfer(b.colorSpace)!==St,(f!==b||h!==b.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=b,h=b.version,d=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ji(new Sc(2,2),new rr({name:"BackgroundMaterial",uniforms:yo(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=dt.getTransfer(b.colorSpace)!==St,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(Ml,yg(r)),n.buffers.color.setClear(Ml.r,Ml.g,Ml.b,x,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:g,addToRenderList:m,dispose:M}}function NE(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(v,P,L,F,V){let O=!1;const W=f(F,L,P);s!==W&&(s=W,c(s.object)),O=d(v,F,L,V),O&&_(v,F,L,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,x(v,P,L,F),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function f(v,P,L){const F=L.wireframe===!0;let V=n[v.id];V===void 0&&(V={},n[v.id]=V);let O=V[P.id];O===void 0&&(O={},V[P.id]=O);let W=O[F];return W===void 0&&(W=h(l()),O[F]=W),W}function h(v){const P=[],L=[],F=[];for(let V=0;V<t;V++)P[V]=0,L[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:F,object:v,attributes:{},index:null}}function d(v,P,L,F){const V=s.attributes,O=P.attributes;let W=0;const X=L.getAttributes();for(const G in X)if(X[G].location>=0){const I=V[G];let le=O[G];if(le===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(le=v.instanceColor)),I===void 0||I.attribute!==le||le&&I.data!==le.data)return!0;W++}return s.attributesNum!==W||s.index!==F}function _(v,P,L,F){const V={},O=P.attributes;let W=0;const X=L.getAttributes();for(const G in X)if(X[G].location>=0){let I=O[G];I===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(I=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(I=v.instanceColor));const le={};le.attribute=I,I&&I.data&&(le.data=I.data),V[G]=le,W++}s.attributes=V,s.attributesNum=W,s.index=F}function g(){const v=s.newAttributes;for(let P=0,L=v.length;P<L;P++)v[P]=0}function m(v){p(v,0)}function p(v,P){const L=s.newAttributes,F=s.enabledAttributes,V=s.attributeDivisors;L[v]=1,F[v]===0&&(r.enableVertexAttribArray(v),F[v]=1),V[v]!==P&&(r.vertexAttribDivisor(v,P),V[v]=P)}function M(){const v=s.newAttributes,P=s.enabledAttributes;for(let L=0,F=P.length;L<F;L++)P[L]!==v[L]&&(r.disableVertexAttribArray(L),P[L]=0)}function y(v,P,L,F,V,O,W){W===!0?r.vertexAttribIPointer(v,P,L,V,O):r.vertexAttribPointer(v,P,L,F,V,O)}function x(v,P,L,F){g();const V=F.attributes,O=L.getAttributes(),W=P.defaultAttributeValues;for(const X in O){const G=O[X];if(G.location>=0){let ee=V[X];if(ee===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(ee=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(ee=v.instanceColor)),ee!==void 0){const I=ee.normalized,le=ee.itemSize,ve=e.get(ee);if(ve===void 0)continue;const Oe=ve.buffer,we=ve.type,ye=ve.bytesPerElement,q=we===r.INT||we===r.UNSIGNED_INT||ee.gpuType===Fh;if(ee.isInterleavedBufferAttribute){const te=ee.data,pe=te.stride,Ce=ee.offset;if(te.isInstancedInterleavedBuffer){for(let me=0;me<G.locationSize;me++)p(G.location+me,te.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let me=0;me<G.locationSize;me++)m(G.location+me);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let me=0;me<G.locationSize;me++)y(G.location+me,le/G.locationSize,we,I,pe*ye,(Ce+le/G.locationSize*me)*ye,q)}else{if(ee.isInstancedBufferAttribute){for(let te=0;te<G.locationSize;te++)p(G.location+te,ee.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let te=0;te<G.locationSize;te++)m(G.location+te);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let te=0;te<G.locationSize;te++)y(G.location+te,le/G.locationSize,we,I,le*ye,le/G.locationSize*te*ye,q)}}else if(W!==void 0){const I=W[X];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(G.location,I);break;case 3:r.vertexAttrib3fv(G.location,I);break;case 4:r.vertexAttrib4fv(G.location,I);break;default:r.vertexAttrib1fv(G.location,I)}}}}M()}function b(){C();for(const v in n){const P=n[v];for(const L in P){const F=P[L];for(const V in F)u(F[V].object),delete F[V];delete P[L]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const P=n[v.id];for(const L in P){const F=P[L];for(const V in F)u(F[V].object),delete F[V];delete P[L]}delete n[v.id]}function T(v){for(const P in n){const L=n[P];if(L[v.id]===void 0)continue;const F=L[v.id];for(const V in F)u(F[V].object),delete F[V];delete L[v.id]}}function C(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function FE(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];t.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g]*h[g];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function OE(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==xi&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==nr&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Zi&&!C)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=_>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:b,maxSamples:w}}function BE(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Kr,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,y=M*4;let x=p.clippingState||null;l.value=x,x=u(_,h,y,d);for(let b=0;b!==y;++b)x[b]=t[b];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=d;y!==g;++y,x+=4)o.copy(f[y]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function kE(r){let e=new WeakMap;function t(o,a){return a===mf?o.mapping=vo:a===_f&&(o.mapping=xo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===mf||a===_f)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zS(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const js=4,Dp=[.125,.215,.35,.446,.526,.582],Qr=20,xu=new ZS,Lp=new xt;let Su=null,yu=0,Mu=0,Eu=!1;const Zr=(1+Math.sqrt(5))/2,Hs=1/Zr,Ip=[new j(-Zr,Hs,0),new j(Zr,Hs,0),new j(-Hs,0,Zr),new j(Hs,0,Zr),new j(0,Zr,-Hs),new j(0,Zr,Hs),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],zE=new j;class Up{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=zE}=s;Su=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Op(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Su,yu,Mu),this._renderer.xr.enabled=Eu,e.scissorTest=!1,El(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vo||e.mapping===xo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Su=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pi,minFilter:Pi,generateMipmaps:!1,type:wa,format:xi,colorSpace:So,depthBuffer:!1},i=Np(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Np(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VE(s)),this._blurMaterial=HE(s,e,t)}return i}_compileMaterial(e){const t=new ji(this._lodPlanes[0],e);this._renderer.compile(t,xu)}_sceneToCubeUV(e,t,n,i,s){const l=new ci(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Lp),f.toneMapping=Rr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null));const g=new vg({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),m=new ji(new La,g);let p=!1;const M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,p=!0):(g.color.copy(Lp),p=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const b=this._cubeSize;El(i,x*b,y>2?b:0,b,b),f.setRenderTarget(i),p&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===vo||e.mapping===xo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Op()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fp());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ji(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;El(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,xu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ip[(i-s-1)%Ip.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ji(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Qr-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Qr;m>Qr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qr}`);const p=[];let M=0;for(let T=0;T<Qr;++T){const C=T/g,S=Math.exp(-C*C/2);p.push(S),T===0?M+=S:T<m&&(M+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-n;const x=this._sizeLods[i],b=3*x*(i>y-js?i-y+js:0),w=4*(this._cubeSize-x);El(t,b,w,3*x,2*x),l.setRenderTarget(t),l.render(f,xu)}}function VE(r){const e=[],t=[],n=[];let i=r;const s=r-js+1+Dp.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-js?l=Dp[o-r+js-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,g=3,m=2,p=1,M=new Float32Array(g*_*d),y=new Float32Array(m*_*d),x=new Float32Array(p*_*d);for(let w=0;w<d;w++){const T=w%3*2/3-1,C=w>2?0:-1,S=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];M.set(S,g*_*w),y.set(h,m*_*w);const v=[w,w,w,w,w,w];x.set(v,p*_*w)}const b=new sr;b.setAttribute("position",new bn(M,g)),b.setAttribute("uv",new bn(y,m)),b.setAttribute("faceIndex",new bn(x,p)),e.push(b),i>js&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Np(r,e,t){const n=new xs(r,e,t);return n.texture.mapping=vc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function El(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function HE(r,e,t){const n=new Float32Array(Qr),i=new j(0,1,0);return new rr({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Fp(){return new rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Op(){return new rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Gh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function GE(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===mf||l===_f,u=l===vo||l===xo;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Up(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Up(r)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function WE(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ba("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function XE(r,e,t,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],r.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,_=f.attributes.position;let g=0;if(d!==null){const M=d.array;g=d.version;for(let y=0,x=M.length;y<x;y+=3){const b=M[y+0],w=M[y+1],T=M[y+2];h.push(b,w,w,T,T,b)}}else if(_!==void 0){const M=_.array;g=_.version;for(let y=0,x=M.length/3-1;y<x;y+=3){const b=y+0,w=y+1,T=y+2;h.push(b,w,w,T,T,b)}}else return;const m=new(dg(h)?Sg:xg)(h,1);m.version=g;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function qE(r,e,t){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){r.drawElements(n,d,s,h*o),t.update(d,n,1)}function c(h,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,h*o,_),t.update(d,n,_))}function u(h,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,n,1)}function f(h,d,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,g,0,_);let p=0;for(let M=0;M<_;M++)p+=d[M]*g[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function YE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function $E(r,e,t){const n=new WeakMap,i=new Gt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let v=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var d=v;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let b=a.attributes.position.count*x,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*w*4*f),C=new pg(T,b,w,f);C.type=Zi,C.needsUpdate=!0;const S=x*4;for(let P=0;P<f;P++){const L=p[P],F=M[P],V=y[P],O=b*w*4*P;for(let W=0;W<L.count;W++){const X=W*S;_===!0&&(i.fromBufferAttribute(L,W),T[O+X+0]=i.x,T[O+X+1]=i.y,T[O+X+2]=i.z,T[O+X+3]=0),g===!0&&(i.fromBufferAttribute(F,W),T[O+X+4]=i.x,T[O+X+5]=i.y,T[O+X+6]=i.z,T[O+X+7]=0),m===!0&&(i.fromBufferAttribute(V,W),T[O+X+8]=i.x,T[O+X+9]=i.y,T[O+X+10]=i.z,T[O+X+11]=V.itemSize===4?i.w:1)}}h={count:f,texture:C,size:new yt(b,w)},n.set(a,h),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function KE(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Rg=new Fn,Bp=new bg(1,1),Cg=new pg,Pg=new ES,Dg=new Eg,kp=[],zp=[],Vp=new Float32Array(16),Hp=new Float32Array(9),Gp=new Float32Array(4);function Eo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=kp[i];if(s===void 0&&(s=new Float32Array(i),kp[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function jt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Jt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function yc(r,e){let t=zp[e];t===void 0&&(t=new Int32Array(e),zp[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function ZE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function jE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2fv(this.addr,e),Jt(t,e)}}function JE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;r.uniform3fv(this.addr,e),Jt(t,e)}}function QE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4fv(this.addr,e),Jt(t,e)}}function eT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,n))return;Gp.set(n),r.uniformMatrix2fv(this.addr,!1,Gp),Jt(t,n)}}function tT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,n))return;Hp.set(n),r.uniformMatrix3fv(this.addr,!1,Hp),Jt(t,n)}}function nT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,n))return;Vp.set(n),r.uniformMatrix4fv(this.addr,!1,Vp),Jt(t,n)}}function iT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function rT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2iv(this.addr,e),Jt(t,e)}}function sT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;r.uniform3iv(this.addr,e),Jt(t,e)}}function oT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4iv(this.addr,e),Jt(t,e)}}function aT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function lT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2uiv(this.addr,e),Jt(t,e)}}function cT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;r.uniform3uiv(this.addr,e),Jt(t,e)}}function uT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4uiv(this.addr,e),Jt(t,e)}}function fT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Bp.compareFunction=hg,s=Bp):s=Rg,t.setTexture2D(e||s,i)}function hT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Pg,i)}function dT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Dg,i)}function pT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Cg,i)}function mT(r){switch(r){case 5126:return ZE;case 35664:return jE;case 35665:return JE;case 35666:return QE;case 35674:return eT;case 35675:return tT;case 35676:return nT;case 5124:case 35670:return iT;case 35667:case 35671:return rT;case 35668:case 35672:return sT;case 35669:case 35673:return oT;case 5125:return aT;case 36294:return lT;case 36295:return cT;case 36296:return uT;case 35678:case 36198:case 36298:case 36306:case 35682:return fT;case 35679:case 36299:case 36307:return hT;case 35680:case 36300:case 36308:case 36293:return dT;case 36289:case 36303:case 36311:case 36292:return pT}}function _T(r,e){r.uniform1fv(this.addr,e)}function gT(r,e){const t=Eo(e,this.size,2);r.uniform2fv(this.addr,t)}function vT(r,e){const t=Eo(e,this.size,3);r.uniform3fv(this.addr,t)}function xT(r,e){const t=Eo(e,this.size,4);r.uniform4fv(this.addr,t)}function ST(r,e){const t=Eo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function yT(r,e){const t=Eo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function MT(r,e){const t=Eo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ET(r,e){r.uniform1iv(this.addr,e)}function TT(r,e){r.uniform2iv(this.addr,e)}function bT(r,e){r.uniform3iv(this.addr,e)}function AT(r,e){r.uniform4iv(this.addr,e)}function wT(r,e){r.uniform1uiv(this.addr,e)}function RT(r,e){r.uniform2uiv(this.addr,e)}function CT(r,e){r.uniform3uiv(this.addr,e)}function PT(r,e){r.uniform4uiv(this.addr,e)}function DT(r,e,t){const n=this.cache,i=e.length,s=yc(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Rg,s[o])}function LT(r,e,t){const n=this.cache,i=e.length,s=yc(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Pg,s[o])}function IT(r,e,t){const n=this.cache,i=e.length,s=yc(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Dg,s[o])}function UT(r,e,t){const n=this.cache,i=e.length,s=yc(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Cg,s[o])}function NT(r){switch(r){case 5126:return _T;case 35664:return gT;case 35665:return vT;case 35666:return xT;case 35674:return ST;case 35675:return yT;case 35676:return MT;case 5124:case 35670:return ET;case 35667:case 35671:return TT;case 35668:case 35672:return bT;case 35669:case 35673:return AT;case 5125:return wT;case 36294:return RT;case 36295:return CT;case 36296:return PT;case 35678:case 36198:case 36298:case 36306:case 35682:return DT;case 35679:case 36299:case 36307:return LT;case 35680:case 36300:case 36308:case 36293:return IT;case 36289:case 36303:case 36311:case 36292:return UT}}class FT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mT(t.type)}}class OT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=NT(t.type)}}class BT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Tu=/(\w+)(\])?(\[|\.)?/g;function Wp(r,e){r.seq.push(e),r.map[e.id]=e}function kT(r,e,t){const n=r.name,i=n.length;for(Tu.lastIndex=0;;){const s=Tu.exec(n),o=Tu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Wp(t,c===void 0?new FT(a,r,e):new OT(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new BT(a),Wp(t,f)),t=f}}}class Vl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);kT(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Xp(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const zT=37297;let VT=0;function HT(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const qp=new tt;function GT(r){dt._getMatrix(qp,dt.workingColorSpace,r);const e=`mat3( ${qp.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(r)){case sc:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Yp(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+HT(r.getShaderSource(e),a)}else return s}function WT(r,e){const t=GT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function XT(r,e){let t;switch(e){case Zx:t="Linear";break;case jx:t="Reinhard";break;case Jx:t="Cineon";break;case Qx:t="ACESFilmic";break;case tS:t="AgX";break;case nS:t="Neutral";break;case eS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tl=new j;function qT(){dt.getLuminanceCoefficients(Tl);const r=Tl.x.toFixed(4),e=Tl.y.toFixed(4),t=Tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function $T(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function KT(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function qo(r){return r!==""}function $p(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kf(r){return r.replace(ZT,JT)}const jT=new Map;function JT(r,e){let t=rt[e];if(t===void 0){const n=jT.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Kf(t)}const QT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zp(r){return r.replace(QT,eb)}function eb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function jp(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===tg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Cx?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function nb(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case vo:case xo:e="ENVMAP_TYPE_CUBE";break;case vc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ib(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===xo&&(e="ENVMAP_MODE_REFRACTION"),e}function rb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ng:e="ENVMAP_BLENDING_MULTIPLY";break;case $x:e="ENVMAP_BLENDING_MIX";break;case Kx:e="ENVMAP_BLENDING_ADD";break}return e}function sb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ob(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=tb(t),c=nb(t),u=ib(t),f=rb(t),h=sb(t),d=YT(t),_=$T(s),g=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(qo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(qo).join(`
`),p.length>0&&(p+=`
`)):(m=[jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),p=[jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rr?"#define TONE_MAPPING":"",t.toneMapping!==Rr?rt.tonemapping_pars_fragment:"",t.toneMapping!==Rr?XT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,WT("linearToOutputTexel",t.outputColorSpace),qT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qo).join(`
`)),o=Kf(o),o=$p(o,t),o=Kp(o,t),a=Kf(a),a=$p(a,t),a=Kp(a,t),o=Zp(o),a=Zp(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===up?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===up?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+m+o,x=M+p+a,b=Xp(i,i.VERTEX_SHADER,y),w=Xp(i,i.FRAGMENT_SHADER,x);i.attachShader(g,b),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(P){if(r.debug.checkShaderErrors){const L=i.getProgramInfoLog(g)||"",F=i.getShaderInfoLog(b)||"",V=i.getShaderInfoLog(w)||"",O=L.trim(),W=F.trim(),X=V.trim();let G=!0,ee=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,b,w);else{const I=Yp(i,b,"vertex"),le=Yp(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+I+`
`+le)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(W===""||X==="")&&(ee=!1);ee&&(P.diagnostics={runnable:G,programLog:O,vertexShader:{log:W,prefix:m},fragmentShader:{log:X,prefix:p}})}i.deleteShader(b),i.deleteShader(w),C=new Vl(i,g),S=KT(i,g)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,zT)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=VT++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=w,this}let ab=0;class lb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cb(e),t.set(e,n)),n}}class cb{constructor(e){this.id=ab++,this.code=e,this.usedTimes=0}}function ub(r,e,t,n,i,s,o){const a=new _g,l=new lb,c=new Set,u=[],f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,v,P,L,F){const V=L.fog,O=F.geometry,W=S.isMeshStandardMaterial?L.environment:null,X=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),G=X&&X.mapping===vc?X.image.height:null,ee=_[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const I=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,le=I!==void 0?I.length:0;let ve=0;O.morphAttributes.position!==void 0&&(ve=1),O.morphAttributes.normal!==void 0&&(ve=2),O.morphAttributes.color!==void 0&&(ve=3);let Oe,we,ye,q;if(ee){const Te=bi[ee];Oe=Te.vertexShader,we=Te.fragmentShader}else Oe=S.vertexShader,we=S.fragmentShader,l.update(S),ye=l.getVertexShaderID(S),q=l.getFragmentShaderID(S);const te=r.getRenderTarget(),pe=r.state.buffers.depth.getReversed(),Ce=F.isInstancedMesh===!0,me=F.isBatchedMesh===!0,Be=!!S.map,nt=!!S.matcap,D=!!X,Ne=!!S.aoMap,ke=!!S.lightMap,De=!!S.bumpMap,N=!!S.normalMap,Ke=!!S.displacementMap,Y=!!S.emissiveMap,B=!!S.metalnessMap,ae=!!S.roughnessMap,se=S.anisotropy>0,R=S.clearcoat>0,E=S.dispersion>0,k=S.iridescence>0,J=S.sheen>0,Q=S.transmission>0,$=se&&!!S.anisotropyMap,ge=R&&!!S.clearcoatMap,re=R&&!!S.clearcoatNormalMap,Ee=R&&!!S.clearcoatRoughnessMap,ie=k&&!!S.iridescenceMap,he=k&&!!S.iridescenceThicknessMap,xe=J&&!!S.sheenColorMap,ze=J&&!!S.sheenRoughnessMap,Le=!!S.specularMap,Se=!!S.specularColorMap,qe=!!S.specularIntensityMap,U=Q&&!!S.transmissionMap,ue=Q&&!!S.thicknessMap,fe=!!S.gradientMap,de=!!S.alphaMap,oe=S.alphaTest>0,ne=!!S.alphaHash,Re=!!S.extensions;let Fe=Rr;S.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Fe=r.toneMapping);const ot={shaderID:ee,shaderType:S.type,shaderName:S.name,vertexShader:Oe,fragmentShader:we,defines:S.defines,customVertexShaderID:ye,customFragmentShaderID:q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:me,batchingColor:me&&F._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&F.instanceColor!==null,instancingMorph:Ce&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:So,alphaToCoverage:!!S.alphaToCoverage,map:Be,matcap:nt,envMap:D,envMapMode:D&&X.mapping,envMapCubeUVHeight:G,aoMap:Ne,lightMap:ke,bumpMap:De,normalMap:N,displacementMap:h&&Ke,emissiveMap:Y,normalMapObjectSpace:N&&S.normalMapType===aS,normalMapTangentSpace:N&&S.normalMapType===oS,metalnessMap:B,roughnessMap:ae,anisotropy:se,anisotropyMap:$,clearcoat:R,clearcoatMap:ge,clearcoatNormalMap:re,clearcoatRoughnessMap:Ee,dispersion:E,iridescence:k,iridescenceMap:ie,iridescenceThicknessMap:he,sheen:J,sheenColorMap:xe,sheenRoughnessMap:ze,specularMap:Le,specularColorMap:Se,specularIntensityMap:qe,transmission:Q,transmissionMap:U,thicknessMap:ue,gradientMap:fe,opaque:S.transparent===!1&&S.blending===oo&&S.alphaToCoverage===!1,alphaMap:de,alphaTest:oe,alphaHash:ne,combine:S.combine,mapUv:Be&&g(S.map.channel),aoMapUv:Ne&&g(S.aoMap.channel),lightMapUv:ke&&g(S.lightMap.channel),bumpMapUv:De&&g(S.bumpMap.channel),normalMapUv:N&&g(S.normalMap.channel),displacementMapUv:Ke&&g(S.displacementMap.channel),emissiveMapUv:Y&&g(S.emissiveMap.channel),metalnessMapUv:B&&g(S.metalnessMap.channel),roughnessMapUv:ae&&g(S.roughnessMap.channel),anisotropyMapUv:$&&g(S.anisotropyMap.channel),clearcoatMapUv:ge&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:he&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:ze&&g(S.sheenRoughnessMap.channel),specularMapUv:Le&&g(S.specularMap.channel),specularColorMapUv:Se&&g(S.specularColorMap.channel),specularIntensityMapUv:qe&&g(S.specularIntensityMap.channel),transmissionMapUv:U&&g(S.transmissionMap.channel),thicknessMapUv:ue&&g(S.thicknessMap.channel),alphaMapUv:de&&g(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(N||se),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(Be||de),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:pe,skinning:F.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:ve,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Be&&S.map.isVideoTexture===!0&&dt.getTransfer(S.map.colorSpace)===St,decodeVideoTextureEmissive:Y&&S.emissiveMap.isVideoTexture===!0&&dt.getTransfer(S.emissiveMap.colorSpace)===St,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Xi,flipSided:S.side===Nn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Re&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&S.extensions.multiDraw===!0||me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ot.vertexUv1s=c.has(1),ot.vertexUv2s=c.has(2),ot.vertexUv3s=c.has(3),c.clear(),ot}function p(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)v.push(P),v.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(M(v,S),y(v,S),v.push(r.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function M(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function y(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const v=_[S.type];let P;if(v){const L=bi[v];P=FS.clone(L.uniforms)}else P=S.uniforms;return P}function b(S,v){let P;for(let L=0,F=u.length;L<F;L++){const V=u[L];if(V.cacheKey===v){P=V,++P.usedTimes;break}}return P===void 0&&(P=new ob(r,v,S,s),u.push(P)),P}function w(S){if(--S.usedTimes===0){const v=u.indexOf(S);u[v]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:b,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:C}}function fb(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function hb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Jp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Qp(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,h,d,_,g,m){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},r[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function a(f,h,d,_,g,m){const p=o(f,h,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(f,h,d,_,g,m){const p=o(f,h,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||hb),n.length>1&&n.sort(h||Jp),i.length>1&&i.sort(h||Jp)}function u(){for(let f=e,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function db(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Qp,r.set(n,[o])):i>=s.length?(o=new Qp,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function pb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new xt};break;case"SpotLight":t={position:new j,direction:new j,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new j,halfWidth:new j,halfHeight:new j};break}return r[e.id]=t,t}}}function mb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let _b=0;function gb(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function vb(r){const e=new pb,t=mb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new j);const i=new j,s=new Yt,o=new Yt;function a(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,M=0,y=0,x=0,b=0,w=0,T=0;c.sort(gb);for(let S=0,v=c.length;S<v;S++){const P=c[S],L=P.color,F=P.intensity,V=P.distance,O=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=L.r*F,f+=L.g*F,h+=L.b*F;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],F);T++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const X=P.shadow,G=t.get(P);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=O,n.directionalShadowMatrix[d]=P.shadow.matrix,M++}n.directional[d]=W,d++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(L).multiplyScalar(F),W.distance=V,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[g]=W;const X=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,X.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[g]=X.matrix,P.castShadow){const G=t.get(P);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=O,x++}g++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(L).multiplyScalar(F),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const X=P.shadow,G=t.get(P);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=O,n.pointShadowMatrix[_]=P.shadow.matrix,y++}n.point[_]=W,_++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(F),W.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=W,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==d||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==b||C.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,C.directionalLength=d,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=b,C.numLightProbes=T,n.version=_b++)}function l(c,u){let f=0,h=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const y=c[p];if(y.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(y.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function em(r){const e=new vb(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function xb(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new em(r),e.set(i,[a])):s>=o.length?(a=new em(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mb(r,e,t){let n=new Tg;const i=new yt,s=new yt,o=new Gt,a=new $S({depthPacking:sS}),l=new KS,c={},u=t.maxTextureSize,f={[Ur]:Nn,[Nn]:Ur,[Xi]:Xi},h=new rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:Sb,fragmentShader:yb}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new sr;_.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ji(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tg;let p=this.type;this.render=function(w,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=r.getRenderTarget(),v=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),L=r.state;L.setBlending(wr),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const F=p!==Vi&&this.type===Vi,V=p===Vi&&this.type!==Vi;for(let O=0,W=w.length;O<W;O++){const X=w[O],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const ee=G.getFrameExtents();if(i.multiply(ee),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ee.x),i.x=s.x*ee.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ee.y),i.y=s.y*ee.y,G.mapSize.y=s.y)),G.map===null||F===!0||V===!0){const le=this.type!==Vi?{minFilter:yi,magFilter:yi}:{};G.map!==null&&G.map.dispose(),G.map=new xs(i.x,i.y,le),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const I=G.getViewportCount();for(let le=0;le<I;le++){const ve=G.getViewport(le);o.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),L.viewport(o),G.updateMatrices(X,le),n=G.getFrustum(),x(T,C,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===Vi&&M(G,C),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,v,P)};function M(w,T){const C=e.update(g);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new xs(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(T,null,C,h,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(T,null,C,d,g,null)}function y(w,T,C,S){let v=null;const P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)v=P;else if(v=C.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const L=v.uuid,F=T.uuid;let V=c[L];V===void 0&&(V={},c[L]=V);let O=V[F];O===void 0&&(O=v.clone(),V[F]=O,T.addEventListener("dispose",b)),v=O}if(v.visible=T.visible,v.wireframe=T.wireframe,S===Vi?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:f[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const L=r.properties.get(v);L.light=C}return v}function x(w,T,C,S,v){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Vi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const F=e.update(w),V=w.material;if(Array.isArray(V)){const O=F.groups;for(let W=0,X=O.length;W<X;W++){const G=O[W],ee=V[G.materialIndex];if(ee&&ee.visible){const I=y(w,ee,S,v);w.onBeforeShadow(r,w,T,C,F,I,G),r.renderBufferDirect(C,null,F,I,w,G),w.onAfterShadow(r,w,T,C,F,I,G)}}}else if(V.visible){const O=y(w,V,S,v);w.onBeforeShadow(r,w,T,C,F,O,null),r.renderBufferDirect(C,null,F,O,w,null),w.onAfterShadow(r,w,T,C,F,O,null)}}const L=w.children;for(let F=0,V=L.length;F<V;F++)x(L[F],T,C,S,v)}function b(w){w.target.removeEventListener("dispose",b);for(const C in c){const S=c[C],v=w.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const Eb={[lf]:cf,[uf]:df,[ff]:pf,[go]:hf,[cf]:lf,[df]:uf,[pf]:ff,[hf]:go};function Tb(r,e){function t(){let U=!1;const ue=new Gt;let fe=null;const de=new Gt(0,0,0,0);return{setMask:function(oe){fe!==oe&&!U&&(r.colorMask(oe,oe,oe,oe),fe=oe)},setLocked:function(oe){U=oe},setClear:function(oe,ne,Re,Fe,ot){ot===!0&&(oe*=Fe,ne*=Fe,Re*=Fe),ue.set(oe,ne,Re,Fe),de.equals(ue)===!1&&(r.clearColor(oe,ne,Re,Fe),de.copy(ue))},reset:function(){U=!1,fe=null,de.set(-1,0,0,0)}}}function n(){let U=!1,ue=!1,fe=null,de=null,oe=null;return{setReversed:function(ne){if(ue!==ne){const Re=e.get("EXT_clip_control");ne?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ue=ne;const Fe=oe;oe=null,this.setClear(Fe)}},getReversed:function(){return ue},setTest:function(ne){ne?te(r.DEPTH_TEST):pe(r.DEPTH_TEST)},setMask:function(ne){fe!==ne&&!U&&(r.depthMask(ne),fe=ne)},setFunc:function(ne){if(ue&&(ne=Eb[ne]),de!==ne){switch(ne){case lf:r.depthFunc(r.NEVER);break;case cf:r.depthFunc(r.ALWAYS);break;case uf:r.depthFunc(r.LESS);break;case go:r.depthFunc(r.LEQUAL);break;case ff:r.depthFunc(r.EQUAL);break;case hf:r.depthFunc(r.GEQUAL);break;case df:r.depthFunc(r.GREATER);break;case pf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=ne}},setLocked:function(ne){U=ne},setClear:function(ne){oe!==ne&&(ue&&(ne=1-ne),r.clearDepth(ne),oe=ne)},reset:function(){U=!1,fe=null,de=null,oe=null,ue=!1}}}function i(){let U=!1,ue=null,fe=null,de=null,oe=null,ne=null,Re=null,Fe=null,ot=null;return{setTest:function(Te){U||(Te?te(r.STENCIL_TEST):pe(r.STENCIL_TEST))},setMask:function(Te){ue!==Te&&!U&&(r.stencilMask(Te),ue=Te)},setFunc:function(Te,Ve,Je){(fe!==Te||de!==Ve||oe!==Je)&&(r.stencilFunc(Te,Ve,Je),fe=Te,de=Ve,oe=Je)},setOp:function(Te,Ve,Je){(ne!==Te||Re!==Ve||Fe!==Je)&&(r.stencilOp(Te,Ve,Je),ne=Te,Re=Ve,Fe=Je)},setLocked:function(Te){U=Te},setClear:function(Te){ot!==Te&&(r.clearStencil(Te),ot=Te)},reset:function(){U=!1,ue=null,fe=null,de=null,oe=null,ne=null,Re=null,Fe=null,ot=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],_=null,g=!1,m=null,p=null,M=null,y=null,x=null,b=null,w=null,T=new xt(0,0,0),C=0,S=!1,v=null,P=null,L=null,F=null,V=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=X>=1):G.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=X>=2);let ee=null,I={};const le=r.getParameter(r.SCISSOR_BOX),ve=r.getParameter(r.VIEWPORT),Oe=new Gt().fromArray(le),we=new Gt().fromArray(ve);function ye(U,ue,fe,de){const oe=new Uint8Array(4),ne=r.createTexture();r.bindTexture(U,ne),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Re=0;Re<fe;Re++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,oe):r.texImage2D(ue+Re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,oe);return ne}const q={};q[r.TEXTURE_2D]=ye(r.TEXTURE_2D,r.TEXTURE_2D,1),q[r.TEXTURE_CUBE_MAP]=ye(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[r.TEXTURE_2D_ARRAY]=ye(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),q[r.TEXTURE_3D]=ye(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(r.DEPTH_TEST),o.setFunc(go),De(!1),N(sp),te(r.CULL_FACE),Ne(wr);function te(U){u[U]!==!0&&(r.enable(U),u[U]=!0)}function pe(U){u[U]!==!1&&(r.disable(U),u[U]=!1)}function Ce(U,ue){return f[U]!==ue?(r.bindFramebuffer(U,ue),f[U]=ue,U===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ue),U===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function me(U,ue){let fe=d,de=!1;if(U){fe=h.get(ue),fe===void 0&&(fe=[],h.set(ue,fe));const oe=U.textures;if(fe.length!==oe.length||fe[0]!==r.COLOR_ATTACHMENT0){for(let ne=0,Re=oe.length;ne<Re;ne++)fe[ne]=r.COLOR_ATTACHMENT0+ne;fe.length=oe.length,de=!0}}else fe[0]!==r.BACK&&(fe[0]=r.BACK,de=!0);de&&r.drawBuffers(fe)}function Be(U){return _!==U?(r.useProgram(U),_=U,!0):!1}const nt={[Jr]:r.FUNC_ADD,[Dx]:r.FUNC_SUBTRACT,[Lx]:r.FUNC_REVERSE_SUBTRACT};nt[Ix]=r.MIN,nt[Ux]=r.MAX;const D={[Nx]:r.ZERO,[Fx]:r.ONE,[Ox]:r.SRC_COLOR,[of]:r.SRC_ALPHA,[Gx]:r.SRC_ALPHA_SATURATE,[Vx]:r.DST_COLOR,[kx]:r.DST_ALPHA,[Bx]:r.ONE_MINUS_SRC_COLOR,[af]:r.ONE_MINUS_SRC_ALPHA,[Hx]:r.ONE_MINUS_DST_COLOR,[zx]:r.ONE_MINUS_DST_ALPHA,[Wx]:r.CONSTANT_COLOR,[Xx]:r.ONE_MINUS_CONSTANT_COLOR,[qx]:r.CONSTANT_ALPHA,[Yx]:r.ONE_MINUS_CONSTANT_ALPHA};function Ne(U,ue,fe,de,oe,ne,Re,Fe,ot,Te){if(U===wr){g===!0&&(pe(r.BLEND),g=!1);return}if(g===!1&&(te(r.BLEND),g=!0),U!==Px){if(U!==m||Te!==S){if((p!==Jr||x!==Jr)&&(r.blendEquation(r.FUNC_ADD),p=Jr,x=Jr),Te)switch(U){case oo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sf:r.blendFunc(r.ONE,r.ONE);break;case op:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ap:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case oo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sf:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case op:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ap:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,y=null,b=null,w=null,T.set(0,0,0),C=0,m=U,S=Te}return}oe=oe||ue,ne=ne||fe,Re=Re||de,(ue!==p||oe!==x)&&(r.blendEquationSeparate(nt[ue],nt[oe]),p=ue,x=oe),(fe!==M||de!==y||ne!==b||Re!==w)&&(r.blendFuncSeparate(D[fe],D[de],D[ne],D[Re]),M=fe,y=de,b=ne,w=Re),(Fe.equals(T)===!1||ot!==C)&&(r.blendColor(Fe.r,Fe.g,Fe.b,ot),T.copy(Fe),C=ot),m=U,S=!1}function ke(U,ue){U.side===Xi?pe(r.CULL_FACE):te(r.CULL_FACE);let fe=U.side===Nn;ue&&(fe=!fe),De(fe),U.blending===oo&&U.transparent===!1?Ne(wr):Ne(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const de=U.stencilWrite;a.setTest(de),de&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Y(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):pe(r.SAMPLE_ALPHA_TO_COVERAGE)}function De(U){v!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),v=U)}function N(U){U!==wx?(te(r.CULL_FACE),U!==P&&(U===sp?r.cullFace(r.BACK):U===Rx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pe(r.CULL_FACE),P=U}function Ke(U){U!==L&&(W&&r.lineWidth(U),L=U)}function Y(U,ue,fe){U?(te(r.POLYGON_OFFSET_FILL),(F!==ue||V!==fe)&&(r.polygonOffset(ue,fe),F=ue,V=fe)):pe(r.POLYGON_OFFSET_FILL)}function B(U){U?te(r.SCISSOR_TEST):pe(r.SCISSOR_TEST)}function ae(U){U===void 0&&(U=r.TEXTURE0+O-1),ee!==U&&(r.activeTexture(U),ee=U)}function se(U,ue,fe){fe===void 0&&(ee===null?fe=r.TEXTURE0+O-1:fe=ee);let de=I[fe];de===void 0&&(de={type:void 0,texture:void 0},I[fe]=de),(de.type!==U||de.texture!==ue)&&(ee!==fe&&(r.activeTexture(fe),ee=fe),r.bindTexture(U,ue||q[U]),de.type=U,de.texture=ue)}function R(){const U=I[ee];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{r.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{r.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{r.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{r.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{r.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{r.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{r.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{r.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(U){Oe.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Oe.copy(U))}function ze(U){we.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),we.copy(U))}function Le(U,ue){let fe=c.get(ue);fe===void 0&&(fe=new WeakMap,c.set(ue,fe));let de=fe.get(U);de===void 0&&(de=r.getUniformBlockIndex(ue,U.name),fe.set(U,de))}function Se(U,ue){const de=c.get(ue).get(U);l.get(ue)!==de&&(r.uniformBlockBinding(ue,de,U.__bindingPointIndex),l.set(ue,de))}function qe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ee=null,I={},f={},h=new WeakMap,d=[],_=null,g=!1,m=null,p=null,M=null,y=null,x=null,b=null,w=null,T=new xt(0,0,0),C=0,S=!1,v=null,P=null,L=null,F=null,V=null,Oe.set(0,0,r.canvas.width,r.canvas.height),we.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:pe,bindFramebuffer:Ce,drawBuffers:me,useProgram:Be,setBlending:Ne,setMaterial:ke,setFlipSided:De,setCullFace:N,setLineWidth:Ke,setPolygonOffset:Y,setScissorTest:B,activeTexture:ae,bindTexture:se,unbindTexture:R,compressedTexImage2D:E,compressedTexImage3D:k,texImage2D:ie,texImage3D:he,updateUBOMapping:Le,uniformBlockBinding:Se,texStorage2D:re,texStorage3D:Ee,texSubImage2D:J,texSubImage3D:Q,compressedTexSubImage2D:$,compressedTexSubImage3D:ge,scissor:xe,viewport:ze,reset:qe}}function bb(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new yt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,E){return d?new OffscreenCanvas(R,E):ac("canvas")}function g(R,E,k){let J=1;const Q=se(R);if((Q.width>k||Q.height>k)&&(J=k/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(J*Q.width),ge=Math.floor(J*Q.height);f===void 0&&(f=_($,ge));const re=E?_($,ge):f;return re.width=$,re.height=ge,re.getContext("2d").drawImage(R,0,0,$,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+ge+")."),re}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(R,E,k,J,Q=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=E;if(E===r.RED&&(k===r.FLOAT&&($=r.R32F),k===r.HALF_FLOAT&&($=r.R16F),k===r.UNSIGNED_BYTE&&($=r.R8)),E===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.R8UI),k===r.UNSIGNED_SHORT&&($=r.R16UI),k===r.UNSIGNED_INT&&($=r.R32UI),k===r.BYTE&&($=r.R8I),k===r.SHORT&&($=r.R16I),k===r.INT&&($=r.R32I)),E===r.RG&&(k===r.FLOAT&&($=r.RG32F),k===r.HALF_FLOAT&&($=r.RG16F),k===r.UNSIGNED_BYTE&&($=r.RG8)),E===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RG8UI),k===r.UNSIGNED_SHORT&&($=r.RG16UI),k===r.UNSIGNED_INT&&($=r.RG32UI),k===r.BYTE&&($=r.RG8I),k===r.SHORT&&($=r.RG16I),k===r.INT&&($=r.RG32I)),E===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RGB8UI),k===r.UNSIGNED_SHORT&&($=r.RGB16UI),k===r.UNSIGNED_INT&&($=r.RGB32UI),k===r.BYTE&&($=r.RGB8I),k===r.SHORT&&($=r.RGB16I),k===r.INT&&($=r.RGB32I)),E===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RGBA8UI),k===r.UNSIGNED_SHORT&&($=r.RGBA16UI),k===r.UNSIGNED_INT&&($=r.RGBA32UI),k===r.BYTE&&($=r.RGBA8I),k===r.SHORT&&($=r.RGBA16I),k===r.INT&&($=r.RGBA32I)),E===r.RGB&&(k===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),E===r.RGBA){const ge=Q?sc:dt.getTransfer(J);k===r.FLOAT&&($=r.RGBA32F),k===r.HALF_FLOAT&&($=r.RGBA16F),k===r.UNSIGNED_BYTE&&($=ge===St?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(R,E){let k;return R?E===null||E===vs||E===Ma?k=r.DEPTH24_STENCIL8:E===Zi?k=r.DEPTH32F_STENCIL8:E===ya&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===vs||E===Ma?k=r.DEPTH_COMPONENT24:E===Zi?k=r.DEPTH_COMPONENT32F:E===ya&&(k=r.DEPTH_COMPONENT16),k}function b(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==yi&&R.minFilter!==Pi?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function w(R){const E=R.target;E.removeEventListener("dispose",w),C(E),E.isVideoTexture&&u.delete(E)}function T(R){const E=R.target;E.removeEventListener("dispose",T),v(E)}function C(R){const E=n.get(R);if(E.__webglInit===void 0)return;const k=R.source,J=h.get(k);if(J){const Q=J[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(R),Object.keys(J).length===0&&h.delete(k)}n.remove(R)}function S(R){const E=n.get(R);r.deleteTexture(E.__webglTexture);const k=R.source,J=h.get(k);delete J[E.__cacheKey],o.memory.textures--}function v(R){const E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let Q=0;Q<E.__webglFramebuffer[J].length;Q++)r.deleteFramebuffer(E.__webglFramebuffer[J][Q]);else r.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)r.deleteFramebuffer(E.__webglFramebuffer[J]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=R.textures;for(let J=0,Q=k.length;J<Q;J++){const $=n.get(k[J]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(k[J])}n.remove(R)}let P=0;function L(){P=0}function F(){const R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function V(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function O(R,E){const k=n.get(R);if(R.isVideoTexture&&B(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(k,R,E);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+E)}function W(R,E){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){q(k,R,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+E)}function X(R,E){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){q(k,R,E);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+E)}function G(R,E){const k=n.get(R);if(R.version>0&&k.__version!==R.version){te(k,R,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+E)}const ee={[gf]:r.REPEAT,[ns]:r.CLAMP_TO_EDGE,[vf]:r.MIRRORED_REPEAT},I={[yi]:r.NEAREST,[iS]:r.NEAREST_MIPMAP_NEAREST,[tl]:r.NEAREST_MIPMAP_LINEAR,[Pi]:r.LINEAR,[$c]:r.LINEAR_MIPMAP_NEAREST,[is]:r.LINEAR_MIPMAP_LINEAR},le={[lS]:r.NEVER,[pS]:r.ALWAYS,[cS]:r.LESS,[hg]:r.LEQUAL,[uS]:r.EQUAL,[dS]:r.GEQUAL,[fS]:r.GREATER,[hS]:r.NOTEQUAL};function ve(R,E){if(E.type===Zi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Pi||E.magFilter===$c||E.magFilter===tl||E.magFilter===is||E.minFilter===Pi||E.minFilter===$c||E.minFilter===tl||E.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ee[E.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ee[E.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ee[E.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,I[E.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,I[E.minFilter]),E.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,le[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===yi||E.minFilter!==tl&&E.minFilter!==is||E.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Oe(R,E){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",w));const J=E.source;let Q=h.get(J);Q===void 0&&(Q={},h.set(J,Q));const $=V(E);if($!==R.__cacheKey){Q[$]===void 0&&(Q[$]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[$].usedTimes++;const ge=Q[R.__cacheKey];ge!==void 0&&(Q[R.__cacheKey].usedTimes--,ge.usedTimes===0&&S(E)),R.__cacheKey=$,R.__webglTexture=Q[$].texture}return k}function we(R,E,k){return Math.floor(Math.floor(R/k)/E)}function ye(R,E,k,J){const $=R.updateRanges;if($.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,k,J,E.data);else{$.sort((he,xe)=>he.start-xe.start);let ge=0;for(let he=1;he<$.length;he++){const xe=$[ge],ze=$[he],Le=xe.start+xe.count,Se=we(ze.start,E.width,4),qe=we(xe.start,E.width,4);ze.start<=Le+1&&Se===qe&&we(ze.start+ze.count-1,E.width,4)===Se?xe.count=Math.max(xe.count,ze.start+ze.count-xe.start):(++ge,$[ge]=ze)}$.length=ge+1;const re=r.getParameter(r.UNPACK_ROW_LENGTH),Ee=r.getParameter(r.UNPACK_SKIP_PIXELS),ie=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let he=0,xe=$.length;he<xe;he++){const ze=$[he],Le=Math.floor(ze.start/4),Se=Math.ceil(ze.count/4),qe=Le%E.width,U=Math.floor(Le/E.width),ue=Se,fe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,qe),r.pixelStorei(r.UNPACK_SKIP_ROWS,U),t.texSubImage2D(r.TEXTURE_2D,0,qe,U,ue,fe,k,J,E.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,re),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ee),r.pixelStorei(r.UNPACK_SKIP_ROWS,ie)}}function q(R,E,k){let J=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=r.TEXTURE_3D);const Q=Oe(R,E),$=E.source;t.bindTexture(J,R.__webglTexture,r.TEXTURE0+k);const ge=n.get($);if($.version!==ge.__version||Q===!0){t.activeTexture(r.TEXTURE0+k);const re=dt.getPrimaries(dt.workingColorSpace),Ee=E.colorSpace===vr?null:dt.getPrimaries(E.colorSpace),ie=E.colorSpace===vr||re===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let he=g(E.image,!1,i.maxTextureSize);he=ae(E,he);const xe=s.convert(E.format,E.colorSpace),ze=s.convert(E.type);let Le=y(E.internalFormat,xe,ze,E.colorSpace,E.isVideoTexture);ve(J,E);let Se;const qe=E.mipmaps,U=E.isVideoTexture!==!0,ue=ge.__version===void 0||Q===!0,fe=$.dataReady,de=b(E,he);if(E.isDepthTexture)Le=x(E.format===Ta,E.type),ue&&(U?t.texStorage2D(r.TEXTURE_2D,1,Le,he.width,he.height):t.texImage2D(r.TEXTURE_2D,0,Le,he.width,he.height,0,xe,ze,null));else if(E.isDataTexture)if(qe.length>0){U&&ue&&t.texStorage2D(r.TEXTURE_2D,de,Le,qe[0].width,qe[0].height);for(let oe=0,ne=qe.length;oe<ne;oe++)Se=qe[oe],U?fe&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,Se.width,Se.height,xe,ze,Se.data):t.texImage2D(r.TEXTURE_2D,oe,Le,Se.width,Se.height,0,xe,ze,Se.data);E.generateMipmaps=!1}else U?(ue&&t.texStorage2D(r.TEXTURE_2D,de,Le,he.width,he.height),fe&&ye(E,he,xe,ze)):t.texImage2D(r.TEXTURE_2D,0,Le,he.width,he.height,0,xe,ze,he.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){U&&ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,Le,qe[0].width,qe[0].height,he.depth);for(let oe=0,ne=qe.length;oe<ne;oe++)if(Se=qe[oe],E.format!==xi)if(xe!==null)if(U){if(fe)if(E.layerUpdates.size>0){const Re=Pp(Se.width,Se.height,E.format,E.type);for(const Fe of E.layerUpdates){const ot=Se.data.subarray(Fe*Re/Se.data.BYTES_PER_ELEMENT,(Fe+1)*Re/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,Fe,Se.width,Se.height,1,xe,ot)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,Se.width,Se.height,he.depth,xe,Se.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,oe,Le,Se.width,Se.height,he.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?fe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,Se.width,Se.height,he.depth,xe,ze,Se.data):t.texImage3D(r.TEXTURE_2D_ARRAY,oe,Le,Se.width,Se.height,he.depth,0,xe,ze,Se.data)}else{U&&ue&&t.texStorage2D(r.TEXTURE_2D,de,Le,qe[0].width,qe[0].height);for(let oe=0,ne=qe.length;oe<ne;oe++)Se=qe[oe],E.format!==xi?xe!==null?U?fe&&t.compressedTexSubImage2D(r.TEXTURE_2D,oe,0,0,Se.width,Se.height,xe,Se.data):t.compressedTexImage2D(r.TEXTURE_2D,oe,Le,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?fe&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,Se.width,Se.height,xe,ze,Se.data):t.texImage2D(r.TEXTURE_2D,oe,Le,Se.width,Se.height,0,xe,ze,Se.data)}else if(E.isDataArrayTexture)if(U){if(ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,Le,he.width,he.height,he.depth),fe)if(E.layerUpdates.size>0){const oe=Pp(he.width,he.height,E.format,E.type);for(const ne of E.layerUpdates){const Re=he.data.subarray(ne*oe/he.data.BYTES_PER_ELEMENT,(ne+1)*oe/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ne,he.width,he.height,1,xe,ze,Re)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,xe,ze,he.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Le,he.width,he.height,he.depth,0,xe,ze,he.data);else if(E.isData3DTexture)U?(ue&&t.texStorage3D(r.TEXTURE_3D,de,Le,he.width,he.height,he.depth),fe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,xe,ze,he.data)):t.texImage3D(r.TEXTURE_3D,0,Le,he.width,he.height,he.depth,0,xe,ze,he.data);else if(E.isFramebufferTexture){if(ue)if(U)t.texStorage2D(r.TEXTURE_2D,de,Le,he.width,he.height);else{let oe=he.width,ne=he.height;for(let Re=0;Re<de;Re++)t.texImage2D(r.TEXTURE_2D,Re,Le,oe,ne,0,xe,ze,null),oe>>=1,ne>>=1}}else if(qe.length>0){if(U&&ue){const oe=se(qe[0]);t.texStorage2D(r.TEXTURE_2D,de,Le,oe.width,oe.height)}for(let oe=0,ne=qe.length;oe<ne;oe++)Se=qe[oe],U?fe&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,xe,ze,Se):t.texImage2D(r.TEXTURE_2D,oe,Le,xe,ze,Se);E.generateMipmaps=!1}else if(U){if(ue){const oe=se(he);t.texStorage2D(r.TEXTURE_2D,de,Le,oe.width,oe.height)}fe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,xe,ze,he)}else t.texImage2D(r.TEXTURE_2D,0,Le,xe,ze,he);m(E)&&p(J),ge.__version=$.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function te(R,E,k){if(E.image.length!==6)return;const J=Oe(R,E),Q=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+k);const $=n.get(Q);if(Q.version!==$.__version||J===!0){t.activeTexture(r.TEXTURE0+k);const ge=dt.getPrimaries(dt.workingColorSpace),re=E.colorSpace===vr?null:dt.getPrimaries(E.colorSpace),Ee=E.colorSpace===vr||ge===re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const ie=E.isCompressedTexture||E.image[0].isCompressedTexture,he=E.image[0]&&E.image[0].isDataTexture,xe=[];for(let ne=0;ne<6;ne++)!ie&&!he?xe[ne]=g(E.image[ne],!0,i.maxCubemapSize):xe[ne]=he?E.image[ne].image:E.image[ne],xe[ne]=ae(E,xe[ne]);const ze=xe[0],Le=s.convert(E.format,E.colorSpace),Se=s.convert(E.type),qe=y(E.internalFormat,Le,Se,E.colorSpace),U=E.isVideoTexture!==!0,ue=$.__version===void 0||J===!0,fe=Q.dataReady;let de=b(E,ze);ve(r.TEXTURE_CUBE_MAP,E);let oe;if(ie){U&&ue&&t.texStorage2D(r.TEXTURE_CUBE_MAP,de,qe,ze.width,ze.height);for(let ne=0;ne<6;ne++){oe=xe[ne].mipmaps;for(let Re=0;Re<oe.length;Re++){const Fe=oe[Re];E.format!==xi?Le!==null?U?fe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,Fe.width,Fe.height,Le,Fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,qe,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,Fe.width,Fe.height,Le,Se,Fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,qe,Fe.width,Fe.height,0,Le,Se,Fe.data)}}}else{if(oe=E.mipmaps,U&&ue){oe.length>0&&de++;const ne=se(xe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,de,qe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(he){U?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,xe[ne].width,xe[ne].height,Le,Se,xe[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,qe,xe[ne].width,xe[ne].height,0,Le,Se,xe[ne].data);for(let Re=0;Re<oe.length;Re++){const ot=oe[Re].image[ne].image;U?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,ot.width,ot.height,Le,Se,ot.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,qe,ot.width,ot.height,0,Le,Se,ot.data)}}else{U?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Le,Se,xe[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,qe,Le,Se,xe[ne]);for(let Re=0;Re<oe.length;Re++){const Fe=oe[Re];U?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,Le,Se,Fe.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,qe,Le,Se,Fe.image[ne])}}}m(E)&&p(r.TEXTURE_CUBE_MAP),$.__version=Q.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function pe(R,E,k,J,Q,$){const ge=s.convert(k.format,k.colorSpace),re=s.convert(k.type),Ee=y(k.internalFormat,ge,re,k.colorSpace),ie=n.get(E),he=n.get(k);if(he.__renderTarget=E,!ie.__hasExternalTextures){const xe=Math.max(1,E.width>>$),ze=Math.max(1,E.height>>$);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,Ee,xe,ze,E.depth,0,ge,re,null):t.texImage2D(Q,$,Ee,xe,ze,0,ge,re,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Y(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,Q,he.__webglTexture,0,Ke(E)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,Q,he.__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(R,E,k){if(r.bindRenderbuffer(r.RENDERBUFFER,R),E.depthBuffer){const J=E.depthTexture,Q=J&&J.isDepthTexture?J.type:null,$=x(E.stencilBuffer,Q),ge=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=Ke(E);Y(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,$,E.width,E.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,re,$,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,$,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,R)}else{const J=E.textures;for(let Q=0;Q<J.length;Q++){const $=J[Q],ge=s.convert($.format,$.colorSpace),re=s.convert($.type),Ee=y($.internalFormat,ge,re,$.colorSpace),ie=Ke(E);k&&Y(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,Ee,E.width,E.height):Y(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,Ee,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ee,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function me(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(E.depthTexture);J.__renderTarget=E,(!J.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),O(E.depthTexture,0);const Q=J.__webglTexture,$=Ke(E);if(E.depthTexture.format===Ea)Y(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(E.depthTexture.format===Ta)Y(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Be(R){const E=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){const Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=J}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const J=R.texture.mipmaps;J&&J.length>0?me(E.__webglFramebuffer[0],R):me(E.__webglFramebuffer,R)}else if(k){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=r.createRenderbuffer(),Ce(E.__webglDepthbuffer[J],R,!1);else{const Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,$)}}else{const J=R.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Ce(E.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,$)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function nt(R,E,k){const J=n.get(R);E!==void 0&&pe(J.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Be(R)}function D(R){const E=R.texture,k=n.get(R),J=n.get(E);R.addEventListener("dispose",T);const Q=R.textures,$=R.isWebGLCubeRenderTarget===!0,ge=Q.length>1;if(ge||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=E.version,o.memory.textures++),$){k.__webglFramebuffer=[];for(let re=0;re<6;re++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[re]=[];for(let Ee=0;Ee<E.mipmaps.length;Ee++)k.__webglFramebuffer[re][Ee]=r.createFramebuffer()}else k.__webglFramebuffer[re]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let re=0;re<E.mipmaps.length;re++)k.__webglFramebuffer[re]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(ge)for(let re=0,Ee=Q.length;re<Ee;re++){const ie=n.get(Q[re]);ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&Y(R)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let re=0;re<Q.length;re++){const Ee=Q[re];k.__webglColorRenderbuffer[re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[re]);const ie=s.convert(Ee.format,Ee.colorSpace),he=s.convert(Ee.type),xe=y(Ee.internalFormat,ie,he,Ee.colorSpace,R.isXRRenderTarget===!0),ze=Ke(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,xe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,k.__webglColorRenderbuffer[re])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Ce(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),ve(r.TEXTURE_CUBE_MAP,E);for(let re=0;re<6;re++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ee=0;Ee<E.mipmaps.length;Ee++)pe(k.__webglFramebuffer[re][Ee],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee);else pe(k.__webglFramebuffer[re],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(E)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let re=0,Ee=Q.length;re<Ee;re++){const ie=Q[re],he=n.get(ie);let xe=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xe=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(xe,he.__webglTexture),ve(xe,ie),pe(k.__webglFramebuffer,R,ie,r.COLOR_ATTACHMENT0+re,xe,0),m(ie)&&p(xe)}t.unbindTexture()}else{let re=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(re,J.__webglTexture),ve(re,E),E.mipmaps&&E.mipmaps.length>0)for(let Ee=0;Ee<E.mipmaps.length;Ee++)pe(k.__webglFramebuffer[Ee],R,E,r.COLOR_ATTACHMENT0,re,Ee);else pe(k.__webglFramebuffer,R,E,r.COLOR_ATTACHMENT0,re,0);m(E)&&p(re),t.unbindTexture()}R.depthBuffer&&Be(R)}function Ne(R){const E=R.textures;for(let k=0,J=E.length;k<J;k++){const Q=E[k];if(m(Q)){const $=M(R),ge=n.get(Q).__webglTexture;t.bindTexture($,ge),p($),t.unbindTexture()}}}const ke=[],De=[];function N(R){if(R.samples>0){if(Y(R)===!1){const E=R.textures,k=R.width,J=R.height;let Q=r.COLOR_BUFFER_BIT;const $=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=n.get(R),re=E.length>1;if(re)for(let ie=0;ie<E.length;ie++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const Ee=R.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let ie=0;ie<E.length;ie++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),re){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[ie]);const he=n.get(E[ie]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,he,0)}r.blitFramebuffer(0,0,k,J,0,0,k,J,Q,r.NEAREST),l===!0&&(ke.length=0,De.length=0,ke.push(r.COLOR_ATTACHMENT0+ie),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ke.push($),De.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,De)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),re)for(let ie=0;ie<E.length;ie++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,ge.__webglColorRenderbuffer[ie]);const he=n.get(E[ie]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,he,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Ke(R){return Math.min(i.maxSamples,R.samples)}function Y(R){const E=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function B(R){const E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function ae(R,E){const k=R.colorSpace,J=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==So&&k!==vr&&(dt.getTransfer(k)===St?(J!==xi||Q!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function se(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=O,this.setTexture2DArray=W,this.setTexture3D=X,this.setTextureCube=G,this.rebindTextures=nt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Y}function Ab(r,e){function t(n,i=vr){let s;const o=dt.getTransfer(i);if(n===nr)return r.UNSIGNED_BYTE;if(n===Oh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Bh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===og)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===ag)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===rg)return r.BYTE;if(n===sg)return r.SHORT;if(n===ya)return r.UNSIGNED_SHORT;if(n===Fh)return r.INT;if(n===vs)return r.UNSIGNED_INT;if(n===Zi)return r.FLOAT;if(n===wa)return r.HALF_FLOAT;if(n===lg)return r.ALPHA;if(n===cg)return r.RGB;if(n===xi)return r.RGBA;if(n===Ea)return r.DEPTH_COMPONENT;if(n===Ta)return r.DEPTH_STENCIL;if(n===ug)return r.RED;if(n===kh)return r.RED_INTEGER;if(n===fg)return r.RG;if(n===zh)return r.RG_INTEGER;if(n===Vh)return r.RGBA_INTEGER;if(n===Ol||n===Bl||n===kl||n===zl)if(o===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ol)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ol)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xf||n===Sf||n===yf||n===Mf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===xf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ef||n===Tf||n===bf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ef||n===Tf)return o===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===bf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Af||n===wf||n===Rf||n===Cf||n===Pf||n===Df||n===Lf||n===If||n===Uf||n===Nf||n===Ff||n===Of||n===Bf||n===kf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Af)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Df)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===If)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ff)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Of)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kf)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zf||n===Vf||n===Hf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===zf)return o===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gf||n===Wf||n===Xf||n===qf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Gf)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Wf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ma?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const wb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Cb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ag(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new rr({vertexShader:wb,fragmentShader:Rb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ji(new Sc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pb extends Mo{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const g=typeof XRWebGLBinding<"u",m=new Cb,p={},M=t.getContextAttributes();let y=null,x=null;const b=[],w=[],T=new yt;let C=null;const S=new ci;S.viewport=new Gt;const v=new ci;v.viewport=new Gt;const P=[S,v],L=new jS;let F=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=b[q];return te===void 0&&(te=new gu,b[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=b[q];return te===void 0&&(te=new gu,b[q]=te),te.getGripSpace()},this.getHand=function(q){let te=b[q];return te===void 0&&(te=new gu,b[q]=te),te.getHandSpace()};function O(q){const te=w.indexOf(q.inputSource);if(te===-1)return;const pe=b[te];pe!==void 0&&(pe.update(q.inputSource,q.frame,c||o),pe.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",X);for(let q=0;q<b.length;q++){const te=w[q];te!==null&&(w[q]=null,b[q].disconnect(te))}F=null,V=null,m.reset();for(const q in p)delete p[q];e.setRenderTarget(y),d=null,h=null,f=null,i=null,x=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",W),i.addEventListener("inputsourceschange",X),M.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ce=null,me=null;M.depth&&(me=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=M.stencil?Ta:Ea,Ce=M.stencil?Ma:vs);const Be={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Be),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new xs(h.textureWidth,h.textureHeight,{format:xi,type:nr,depthTexture:new bg(h.textureWidth,h.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const pe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,pe),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new xs(d.framebufferWidth,d.framebufferHeight,{format:xi,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ye.setContext(i),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(q){for(let te=0;te<q.removed.length;te++){const pe=q.removed[te],Ce=w.indexOf(pe);Ce>=0&&(w[Ce]=null,b[Ce].disconnect(pe))}for(let te=0;te<q.added.length;te++){const pe=q.added[te];let Ce=w.indexOf(pe);if(Ce===-1){for(let Be=0;Be<b.length;Be++)if(Be>=w.length){w.push(pe),Ce=Be;break}else if(w[Be]===null){w[Be]=pe,Ce=Be;break}if(Ce===-1)break}const me=b[Ce];me&&me.connect(pe)}}const G=new j,ee=new j;function I(q,te,pe){G.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(pe.matrixWorld);const Ce=G.distanceTo(ee),me=te.projectionMatrix.elements,Be=pe.projectionMatrix.elements,nt=me[14]/(me[10]-1),D=me[14]/(me[10]+1),Ne=(me[9]+1)/me[5],ke=(me[9]-1)/me[5],De=(me[8]-1)/me[0],N=(Be[8]+1)/Be[0],Ke=nt*De,Y=nt*N,B=Ce/(-De+N),ae=B*-De;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ae),q.translateZ(B),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),me[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const se=nt+B,R=D+B,E=Ke-ae,k=Y+(Ce-ae),J=Ne*D/R*se,Q=ke*D/R*se;q.projectionMatrix.makePerspective(E,k,J,Q,se,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function le(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let te=q.near,pe=q.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),L.near=v.near=S.near=te,L.far=v.far=S.far=pe,(F!==L.near||V!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),F=L.near,V=L.far),L.layers.mask=q.layers.mask|6,S.layers.mask=L.layers.mask&3,v.layers.mask=L.layers.mask&5;const Ce=q.parent,me=L.cameras;le(L,Ce);for(let Be=0;Be<me.length;Be++)le(me[Be],Ce);me.length===2?I(L,S,v):L.projectionMatrix.copy(S.projectionMatrix),ve(q,L,Ce)};function ve(q,te,pe){pe===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(pe.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Yf*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(q){return p[q]};let Oe=null;function we(q,te){if(u=te.getViewerPose(c||o),_=te,u!==null){const pe=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Ce=!1;pe.length!==L.cameras.length&&(L.cameras.length=0,Ce=!0);for(let D=0;D<pe.length;D++){const Ne=pe[D];let ke=null;if(d!==null)ke=d.getViewport(Ne);else{const N=f.getViewSubImage(h,Ne);ke=N.viewport,D===0&&(e.setRenderTargetTextures(x,N.colorTexture,N.depthStencilTexture),e.setRenderTarget(x))}let De=P[D];De===void 0&&(De=new ci,De.layers.enable(D),De.viewport=new Gt,P[D]=De),De.matrix.fromArray(Ne.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Ne.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(ke.x,ke.y,ke.width,ke.height),D===0&&(L.matrix.copy(De.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ce===!0&&L.cameras.push(De)}const me=i.enabledFeatures;if(me&&me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){f=n.getBinding();const D=f.getDepthInformation(pe[0]);D&&D.isValid&&D.texture&&m.init(D,i.renderState)}if(me&&me.includes("camera-access")&&g){e.state.unbindTexture(),f=n.getBinding();for(let D=0;D<pe.length;D++){const Ne=pe[D].camera;if(Ne){let ke=p[Ne];ke||(ke=new Ag,p[Ne]=ke);const De=f.getCameraImage(Ne);ke.sourceTexture=De}}}}for(let pe=0;pe<b.length;pe++){const Ce=w[pe],me=b[pe];Ce!==null&&me!==void 0&&me.update(Ce,te,c||o)}Oe&&Oe(q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}const ye=new wg;ye.setAnimationLoop(we),this.setAnimationLoop=function(q){Oe=q},this.dispose=function(){}}}const Wr=new ir,Db=new Yt;function Lb(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,yg(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),y=M.envMap,x=M.envMapRotation;y&&(m.envMap.value=y,Wr.copy(x),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),m.envMapRotation.value.setFromMatrix4(Db.makeRotationFromEuler(Wr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ib(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const x=y.program;n.uniformBlockBinding(M,x)}function c(M,y){let x=i[M.id];x===void 0&&(_(M),x=u(M),i[M.id]=x,M.addEventListener("dispose",m));const b=y.program;n.updateUBOMapping(M,b);const w=e.render.frame;s[M.id]!==w&&(h(M),s[M.id]=w)}function u(M){const y=f();M.__bindingPointIndex=y;const x=r.createBuffer(),b=M.__size,w=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,b,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,x),x}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const y=i[M.id],x=M.uniforms,b=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let w=0,T=x.length;w<T;w++){const C=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,v=C.length;S<v;S++){const P=C[S];if(d(P,w,S,b)===!0){const L=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let O=0;O<F.length;O++){const W=F[O],X=g(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,L+V,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,V),V+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(M,y,x,b){const w=M.value,T=y+"_"+x;if(b[T]===void 0)return typeof w=="number"||typeof w=="boolean"?b[T]=w:b[T]=w.clone(),!0;{const C=b[T];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return b[T]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function _(M){const y=M.uniforms;let x=0;const b=16;for(let T=0,C=y.length;T<C;T++){const S=Array.isArray(y[T])?y[T]:[y[T]];for(let v=0,P=S.length;v<P;v++){const L=S[v],F=Array.isArray(L.value)?L.value:[L.value];for(let V=0,O=F.length;V<O;V++){const W=F[V],X=g(W),G=x%b,ee=G%X.boundary,I=G+ee;x+=ee,I!==0&&b-I<X.storage&&(x+=b-I),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=X.storage}}}const w=x%b;return w>0&&(x+=b-w),M.__size=x,M.__cache={},this}function g(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Ub{constructor(e={}){const{canvas:t=_S(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let b=!1;this._outputColorSpace=oi;let w=0,T=0,C=null,S=-1,v=null;const P=new Gt,L=new Gt;let F=null;const V=new xt(0);let O=0,W=t.width,X=t.height,G=1,ee=null,I=null;const le=new Gt(0,0,W,X),ve=new Gt(0,0,W,X);let Oe=!1;const we=new Tg;let ye=!1,q=!1;const te=new Yt,pe=new j,Ce=new Gt,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function nt(){return C===null?G:1}let D=n;function Ne(A,z){return t.getContext(A,z)}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nh}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",oe,!1),D===null){const z="webgl2";if(D=Ne(z,A),D===null)throw Ne(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ke,De,N,Ke,Y,B,ae,se,R,E,k,J,Q,$,ge,re,Ee,ie,he,xe,ze,Le,Se,qe;function U(){ke=new WE(D),ke.init(),Le=new Ab(D,ke),De=new OE(D,ke,e,Le),N=new Tb(D,ke),De.reversedDepthBuffer&&h&&N.buffers.depth.setReversed(!0),Ke=new YE(D),Y=new fb,B=new bb(D,ke,N,Y,De,Le,Ke),ae=new kE(x),se=new GE(x),R=new QS(D),Se=new NE(D,R),E=new XE(D,R,Ke,Se),k=new KE(D,E,R,Ke),he=new $E(D,De,B),re=new BE(Y),J=new ub(x,ae,se,ke,De,Se,re),Q=new Lb(x,Y),$=new db,ge=new xb(ke),ie=new UE(x,ae,se,N,k,d,l),Ee=new Mb(x,k,De),qe=new Ib(D,Ke,De,N),xe=new FE(D,ke,Ke),ze=new qE(D,ke,Ke),Ke.programs=J.programs,x.capabilities=De,x.extensions=ke,x.properties=Y,x.renderLists=$,x.shadowMap=Ee,x.state=N,x.info=Ke}U();const ue=new Pb(x,D);this.xr=ue,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=ke.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ke.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(W,X,!1))},this.getSize=function(A){return A.set(W,X)},this.setSize=function(A,z,K=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,X=z,t.width=Math.floor(A*G),t.height=Math.floor(z*G),K===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(W*G,X*G).floor()},this.setDrawingBufferSize=function(A,z,K){W=A,X=z,G=K,t.width=Math.floor(A*K),t.height=Math.floor(z*K),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(le)},this.setViewport=function(A,z,K,Z){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,z,K,Z),N.viewport(P.copy(le).multiplyScalar(G).round())},this.getScissor=function(A){return A.copy(ve)},this.setScissor=function(A,z,K,Z){A.isVector4?ve.set(A.x,A.y,A.z,A.w):ve.set(A,z,K,Z),N.scissor(L.copy(ve).multiplyScalar(G).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(A){N.setScissorTest(Oe=A)},this.setOpaqueSort=function(A){ee=A},this.setTransparentSort=function(A){I=A},this.getClearColor=function(A){return A.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,K=!0){let Z=0;if(A){let H=!1;if(C!==null){const ce=C.texture.format;H=ce===Vh||ce===zh||ce===kh}if(H){const ce=C.texture.type,Me=ce===nr||ce===vs||ce===ya||ce===Ma||ce===Oh||ce===Bh,Ie=ie.getClearColor(),Pe=ie.getClearAlpha(),Xe=Ie.r,Ge=Ie.g,He=Ie.b;Me?(_[0]=Xe,_[1]=Ge,_[2]=He,_[3]=Pe,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=Xe,g[1]=Ge,g[2]=He,g[3]=Pe,D.clearBufferiv(D.COLOR,0,g))}else Z|=D.COLOR_BUFFER_BIT}z&&(Z|=D.DEPTH_BUFFER_BIT),K&&(Z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ie.dispose(),$.dispose(),ge.dispose(),Y.dispose(),ae.dispose(),se.dispose(),k.dispose(),Se.dispose(),qe.dispose(),J.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Je),ue.removeEventListener("sessionend",be),Ye.stop()};function fe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=Ke.autoReset,z=Ee.enabled,K=Ee.autoUpdate,Z=Ee.needsUpdate,H=Ee.type;U(),Ke.autoReset=A,Ee.enabled=z,Ee.autoUpdate=K,Ee.needsUpdate=Z,Ee.type=H}function oe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ne(A){const z=A.target;z.removeEventListener("dispose",ne),Re(z)}function Re(A){Fe(A),Y.remove(A)}function Fe(A){const z=Y.get(A).programs;z!==void 0&&(z.forEach(function(K){J.releaseProgram(K)}),A.isShaderMaterial&&J.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,K,Z,H,ce){z===null&&(z=me);const Me=H.isMesh&&H.matrixWorld.determinant()<0,Ie=gt(A,z,K,Z,H);N.setMaterial(Z,Me);let Pe=K.index,Xe=1;if(Z.wireframe===!0){if(Pe=E.getWireframeAttribute(K),Pe===void 0)return;Xe=2}const Ge=K.drawRange,He=K.attributes.position;let Qe=Ge.start*Xe,ct=(Ge.start+Ge.count)*Xe;ce!==null&&(Qe=Math.max(Qe,ce.start*Xe),ct=Math.min(ct,(ce.start+ce.count)*Xe)),Pe!==null?(Qe=Math.max(Qe,0),ct=Math.min(ct,Pe.count)):He!=null&&(Qe=Math.max(Qe,0),ct=Math.min(ct,He.count));const Bt=ct-Qe;if(Bt<0||Bt===1/0)return;Se.setup(H,Z,Ie,K,Pe);let Rt,Et=xe;if(Pe!==null&&(Rt=R.get(Pe),Et=ze,Et.setIndex(Rt)),H.isMesh)Z.wireframe===!0?(N.setLineWidth(Z.wireframeLinewidth*nt()),Et.setMode(D.LINES)):Et.setMode(D.TRIANGLES);else if(H.isLine){let $e=Z.linewidth;$e===void 0&&($e=1),N.setLineWidth($e*nt()),H.isLineSegments?Et.setMode(D.LINES):H.isLineLoop?Et.setMode(D.LINE_LOOP):Et.setMode(D.LINE_STRIP)}else H.isPoints?Et.setMode(D.POINTS):H.isSprite&&Et.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ba("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))Et.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const $e=H._multiDrawStarts,Lt=H._multiDrawCounts,ht=H._multiDrawCount,zn=Pe?R.get(Pe).bytesPerElement:1,Ms=Y.get(Z).currentProgram.getUniforms();for(let Vn=0;Vn<ht;Vn++)Ms.setValue(D,"_gl_DrawID",Vn),Et.render($e[Vn]/zn,Lt[Vn])}else if(H.isInstancedMesh)Et.renderInstances(Qe,Bt,H.count);else if(K.isInstancedBufferGeometry){const $e=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Lt=Math.min(K.instanceCount,$e);Et.renderInstances(Qe,Bt,Lt)}else Et.render(Qe,Bt)};function ot(A,z,K){A.transparent===!0&&A.side===Xi&&A.forceSinglePass===!1?(A.side=Nn,A.needsUpdate=!0,Vt(A,z,K),A.side=Ur,A.needsUpdate=!0,Vt(A,z,K),A.side=Xi):Vt(A,z,K)}this.compile=function(A,z,K=null){K===null&&(K=A),p=ge.get(K),p.init(z),y.push(p),K.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),A!==K&&A.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const Z=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ce=H.material;if(ce)if(Array.isArray(ce))for(let Me=0;Me<ce.length;Me++){const Ie=ce[Me];ot(Ie,K,H),Z.add(Ie)}else ot(ce,K,H),Z.add(ce)}),p=y.pop(),Z},this.compileAsync=function(A,z,K=null){const Z=this.compile(A,z,K);return new Promise(H=>{function ce(){if(Z.forEach(function(Me){Y.get(Me).currentProgram.isReady()&&Z.delete(Me)}),Z.size===0){H(A);return}setTimeout(ce,10)}ke.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Te=null;function Ve(A){Te&&Te(A)}function Je(){Ye.stop()}function be(){Ye.start()}const Ye=new wg;Ye.setAnimationLoop(Ve),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(A){Te=A,ue.setAnimationLoop(A),A===null?Ye.stop():Ye.start()},ue.addEventListener("sessionstart",Je),ue.addEventListener("sessionend",be),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(z),z=ue.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,z,C),p=ge.get(A,y.length),p.init(z),y.push(p),te.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),we.setFromProjectionMatrix(te,Di,z.reversedDepth),q=this.localClippingEnabled,ye=re.init(this.clippingPlanes,q),m=$.get(A,M.length),m.init(),M.push(m),ue.enabled===!0&&ue.isPresenting===!0){const ce=x.xr.getDepthSensingMesh();ce!==null&&We(ce,z,-1/0,x.sortObjects)}We(A,z,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ee,I),Be=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Be&&ie.addToRenderList(m,A),this.info.render.frame++,ye===!0&&re.beginShadows();const K=p.state.shadowsArray;Ee.render(K,A,z),ye===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,H=m.transmissive;if(p.setupLights(),z.isArrayCamera){const ce=z.cameras;if(H.length>0)for(let Me=0,Ie=ce.length;Me<Ie;Me++){const Pe=ce[Me];zt(Z,H,A,Pe)}Be&&ie.render(A);for(let Me=0,Ie=ce.length;Me<Ie;Me++){const Pe=ce[Me];je(m,A,Pe,Pe.viewport)}}else H.length>0&&zt(Z,H,A,z),Be&&ie.render(A),je(m,A,z);C!==null&&T===0&&(B.updateMultisampleRenderTarget(C),B.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(x,A,z),Se.resetDefaultState(),S=-1,v=null,y.pop(),y.length>0?(p=y[y.length-1],ye===!0&&re.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function We(A,z,K,Z){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||we.intersectsSprite(A)){Z&&Ce.setFromMatrixPosition(A.matrixWorld).applyMatrix4(te);const Me=k.update(A),Ie=A.material;Ie.visible&&m.push(A,Me,Ie,K,Ce.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||we.intersectsObject(A))){const Me=k.update(A),Ie=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ce.copy(A.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ce.copy(Me.boundingSphere.center)),Ce.applyMatrix4(A.matrixWorld).applyMatrix4(te)),Array.isArray(Ie)){const Pe=Me.groups;for(let Xe=0,Ge=Pe.length;Xe<Ge;Xe++){const He=Pe[Xe],Qe=Ie[He.materialIndex];Qe&&Qe.visible&&m.push(A,Me,Qe,K,Ce.z,He)}}else Ie.visible&&m.push(A,Me,Ie,K,Ce.z,null)}}const ce=A.children;for(let Me=0,Ie=ce.length;Me<Ie;Me++)We(ce[Me],z,K,Z)}function je(A,z,K,Z){const H=A.opaque,ce=A.transmissive,Me=A.transparent;p.setupLightsView(K),ye===!0&&re.setGlobalState(x.clippingPlanes,K),Z&&N.viewport(P.copy(Z)),H.length>0&&it(H,z,K),ce.length>0&&it(ce,z,K),Me.length>0&&it(Me,z,K),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function zt(A,z,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new xs(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?wa:nr,minFilter:is,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const ce=p.state.transmissionRenderTarget[Z.id],Me=Z.viewport||P;ce.setSize(Me.z*x.transmissionResolutionScale,Me.w*x.transmissionResolutionScale);const Ie=x.getRenderTarget(),Pe=x.getActiveCubeFace(),Xe=x.getActiveMipmapLevel();x.setRenderTarget(ce),x.getClearColor(V),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear(),Be&&ie.render(K);const Ge=x.toneMapping;x.toneMapping=Rr;const He=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),ye===!0&&re.setGlobalState(x.clippingPlanes,Z),it(A,K,Z),B.updateMultisampleRenderTarget(ce),B.updateRenderTargetMipmap(ce),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ct=0,Bt=z.length;ct<Bt;ct++){const Rt=z[ct],Et=Rt.object,$e=Rt.geometry,Lt=Rt.material,ht=Rt.group;if(Lt.side===Xi&&Et.layers.test(Z.layers)){const zn=Lt.side;Lt.side=Nn,Lt.needsUpdate=!0,Pt(Et,K,Z,$e,Lt,ht),Lt.side=zn,Lt.needsUpdate=!0,Qe=!0}}Qe===!0&&(B.updateMultisampleRenderTarget(ce),B.updateRenderTargetMipmap(ce))}x.setRenderTarget(Ie,Pe,Xe),x.setClearColor(V,O),He!==void 0&&(Z.viewport=He),x.toneMapping=Ge}function it(A,z,K){const Z=z.isScene===!0?z.overrideMaterial:null;for(let H=0,ce=A.length;H<ce;H++){const Me=A[H],Ie=Me.object,Pe=Me.geometry,Xe=Me.group;let Ge=Me.material;Ge.allowOverride===!0&&Z!==null&&(Ge=Z),Ie.layers.test(K.layers)&&Pt(Ie,z,K,Pe,Ge,Xe)}}function Pt(A,z,K,Z,H,ce){A.onBeforeRender(x,z,K,Z,H,ce),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(x,z,K,Z,A,ce),H.transparent===!0&&H.side===Xi&&H.forceSinglePass===!1?(H.side=Nn,H.needsUpdate=!0,x.renderBufferDirect(K,z,Z,H,A,ce),H.side=Ur,H.needsUpdate=!0,x.renderBufferDirect(K,z,Z,H,A,ce),H.side=Xi):x.renderBufferDirect(K,z,Z,H,A,ce),A.onAfterRender(x,z,K,Z,H,ce)}function Vt(A,z,K){z.isScene!==!0&&(z=me);const Z=Y.get(A),H=p.state.lights,ce=p.state.shadowsArray,Me=H.state.version,Ie=J.getParameters(A,H.state,ce,z,K),Pe=J.getProgramCacheKey(Ie);let Xe=Z.programs;Z.environment=A.isMeshStandardMaterial?z.environment:null,Z.fog=z.fog,Z.envMap=(A.isMeshStandardMaterial?se:ae).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Xe===void 0&&(A.addEventListener("dispose",ne),Xe=new Map,Z.programs=Xe);let Ge=Xe.get(Pe);if(Ge!==void 0){if(Z.currentProgram===Ge&&Z.lightsStateVersion===Me)return Mt(A,Ie),Ge}else Ie.uniforms=J.getUniforms(A),A.onBeforeCompile(Ie,x),Ge=J.acquireProgram(Ie,Pe),Xe.set(Pe,Ge),Z.uniforms=Ie.uniforms;const He=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=re.uniform),Mt(A,Ie),Z.needsLights=wt(A),Z.lightsStateVersion=Me,Z.needsLights&&(He.ambientLightColor.value=H.state.ambient,He.lightProbe.value=H.state.probe,He.directionalLights.value=H.state.directional,He.directionalLightShadows.value=H.state.directionalShadow,He.spotLights.value=H.state.spot,He.spotLightShadows.value=H.state.spotShadow,He.rectAreaLights.value=H.state.rectArea,He.ltc_1.value=H.state.rectAreaLTC1,He.ltc_2.value=H.state.rectAreaLTC2,He.pointLights.value=H.state.point,He.pointLightShadows.value=H.state.pointShadow,He.hemisphereLights.value=H.state.hemi,He.directionalShadowMap.value=H.state.directionalShadowMap,He.directionalShadowMatrix.value=H.state.directionalShadowMatrix,He.spotShadowMap.value=H.state.spotShadowMap,He.spotLightMatrix.value=H.state.spotLightMatrix,He.spotLightMap.value=H.state.spotLightMap,He.pointShadowMap.value=H.state.pointShadowMap,He.pointShadowMatrix.value=H.state.pointShadowMatrix),Z.currentProgram=Ge,Z.uniformsList=null,Ge}function At(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=Vl.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Mt(A,z){const K=Y.get(A);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function gt(A,z,K,Z,H){z.isScene!==!0&&(z=me),B.resetTextureUnits();const ce=z.fog,Me=Z.isMeshStandardMaterial?z.environment:null,Ie=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:So,Pe=(Z.isMeshStandardMaterial?se:ae).get(Z.envMap||Me),Xe=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ge=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),He=!!K.morphAttributes.position,Qe=!!K.morphAttributes.normal,ct=!!K.morphAttributes.color;let Bt=Rr;Z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Bt=x.toneMapping);const Rt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Et=Rt!==void 0?Rt.length:0,$e=Y.get(Z),Lt=p.state.lights;if(ye===!0&&(q===!0||A!==v)){const _n=A===v&&Z.id===S;re.setState(Z,A,_n)}let ht=!1;Z.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Lt.state.version||$e.outputColorSpace!==Ie||H.isBatchedMesh&&$e.batching===!1||!H.isBatchedMesh&&$e.batching===!0||H.isBatchedMesh&&$e.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&$e.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&$e.instancing===!1||!H.isInstancedMesh&&$e.instancing===!0||H.isSkinnedMesh&&$e.skinning===!1||!H.isSkinnedMesh&&$e.skinning===!0||H.isInstancedMesh&&$e.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&$e.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&$e.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&$e.instancingMorph===!1&&H.morphTexture!==null||$e.envMap!==Pe||Z.fog===!0&&$e.fog!==ce||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==re.numPlanes||$e.numIntersection!==re.numIntersection)||$e.vertexAlphas!==Xe||$e.vertexTangents!==Ge||$e.morphTargets!==He||$e.morphNormals!==Qe||$e.morphColors!==ct||$e.toneMapping!==Bt||$e.morphTargetsCount!==Et)&&(ht=!0):(ht=!0,$e.__version=Z.version);let zn=$e.currentProgram;ht===!0&&(zn=Vt(Z,z,H));let Ms=!1,Vn=!1,To=!1;const It=zn.getUniforms(),ni=$e.uniforms;if(N.useProgram(zn.program)&&(Ms=!0,Vn=!0,To=!0),Z.id!==S&&(S=Z.id,Vn=!0),Ms||v!==A){N.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),It.setValue(D,"projectionMatrix",A.projectionMatrix),It.setValue(D,"viewMatrix",A.matrixWorldInverse);const An=It.map.cameraPosition;An!==void 0&&An.setValue(D,pe.setFromMatrixPosition(A.matrixWorld)),De.logarithmicDepthBuffer&&It.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&It.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),v!==A&&(v=A,Vn=!0,To=!0)}if(H.isSkinnedMesh){It.setOptional(D,H,"bindMatrix"),It.setOptional(D,H,"bindMatrixInverse");const _n=H.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),It.setValue(D,"boneTexture",_n.boneTexture,B))}H.isBatchedMesh&&(It.setOptional(D,H,"batchingTexture"),It.setValue(D,"batchingTexture",H._matricesTexture,B),It.setOptional(D,H,"batchingIdTexture"),It.setValue(D,"batchingIdTexture",H._indirectTexture,B),It.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&It.setValue(D,"batchingColorTexture",H._colorsTexture,B));const ii=K.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&he.update(H,K,zn),(Vn||$e.receiveShadow!==H.receiveShadow)&&($e.receiveShadow=H.receiveShadow,It.setValue(D,"receiveShadow",H.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(ni.envMap.value=Pe,ni.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&z.environment!==null&&(ni.envMapIntensity.value=z.environmentIntensity),Vn&&(It.setValue(D,"toneMappingExposure",x.toneMappingExposure),$e.needsLights&&kn(ni,To),ce&&Z.fog===!0&&Q.refreshFogUniforms(ni,ce),Q.refreshMaterialUniforms(ni,Z,G,X,p.state.transmissionRenderTarget[A.id]),Vl.upload(D,At($e),ni,B)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Vl.upload(D,At($e),ni,B),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&It.setValue(D,"center",H.center),It.setValue(D,"modelViewMatrix",H.modelViewMatrix),It.setValue(D,"normalMatrix",H.normalMatrix),It.setValue(D,"modelMatrix",H.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const _n=Z.uniformsGroups;for(let An=0,Mc=_n.length;An<Mc;An++){const Fr=_n[An];qe.update(Fr,zn),qe.bind(Fr,zn)}}return zn}function kn(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function wt(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,z,K){const Z=Y.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Y.get(A.texture).__webglTexture=z,Y.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:K,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const K=Y.get(A);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0};const mn=D.createFramebuffer();this.setRenderTarget=function(A,z=0,K=0){C=A,w=z,T=K;let Z=!0,H=null,ce=!1,Me=!1;if(A){const Pe=Y.get(A);if(Pe.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(D.FRAMEBUFFER,null),Z=!1;else if(Pe.__webglFramebuffer===void 0)B.setupRenderTarget(A);else if(Pe.__hasExternalTextures)B.rebindTextures(A,Y.get(A.texture).__webglTexture,Y.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const He=A.depthTexture;if(Pe.__boundDepthTexture!==He){if(He!==null&&Y.has(He)&&(A.width!==He.image.width||A.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Me=!0);const Ge=Y.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ge[z])?H=Ge[z][K]:H=Ge[z],ce=!0):A.samples>0&&B.useMultisampledRTT(A)===!1?H=Y.get(A).__webglMultisampledFramebuffer:Array.isArray(Ge)?H=Ge[K]:H=Ge,P.copy(A.viewport),L.copy(A.scissor),F=A.scissorTest}else P.copy(le).multiplyScalar(G).floor(),L.copy(ve).multiplyScalar(G).floor(),F=Oe;if(K!==0&&(H=mn),N.bindFramebuffer(D.FRAMEBUFFER,H)&&Z&&N.drawBuffers(A,H),N.viewport(P),N.scissor(L),N.setScissorTest(F),ce){const Pe=Y.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,Pe.__webglTexture,K)}else if(Me){const Pe=z;for(let Xe=0;Xe<A.textures.length;Xe++){const Ge=Y.get(A.textures[Xe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Xe,Ge.__webglTexture,K,Pe)}}else if(A!==null&&K!==0){const Pe=Y.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Pe.__webglTexture,K)}S=-1},this.readRenderTargetPixels=function(A,z,K,Z,H,ce,Me,Ie=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Pe=Pe[Me]),Pe){N.bindFramebuffer(D.FRAMEBUFFER,Pe);try{const Xe=A.textures[Ie],Ge=Xe.format,He=Xe.type;if(!De.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Z&&K>=0&&K<=A.height-H&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ie),D.readPixels(z,K,Z,H,Le.convert(Ge),Le.convert(He),ce))}finally{const Xe=C!==null?Y.get(C).__webglFramebuffer:null;N.bindFramebuffer(D.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(A,z,K,Z,H,ce,Me,Ie=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Pe=Pe[Me]),Pe)if(z>=0&&z<=A.width-Z&&K>=0&&K<=A.height-H){N.bindFramebuffer(D.FRAMEBUFFER,Pe);const Xe=A.textures[Ie],Ge=Xe.format,He=Xe.type;if(!De.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Qe),D.bufferData(D.PIXEL_PACK_BUFFER,ce.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ie),D.readPixels(z,K,Z,H,Le.convert(Ge),Le.convert(He),0);const ct=C!==null?Y.get(C).__webglFramebuffer:null;N.bindFramebuffer(D.FRAMEBUFFER,ct);const Bt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await gS(D,Bt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Qe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ce),D.deleteBuffer(Qe),D.deleteSync(Bt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,K=0){const Z=Math.pow(2,-K),H=Math.floor(A.image.width*Z),ce=Math.floor(A.image.height*Z),Me=z!==null?z.x:0,Ie=z!==null?z.y:0;B.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,K,0,0,Me,Ie,H,ce),N.unbindTexture()};const ti=D.createFramebuffer(),$t=D.createFramebuffer();this.copyTextureToTexture=function(A,z,K=null,Z=null,H=0,ce=null){ce===null&&(H!==0?(ba("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=H,H=0):ce=0);let Me,Ie,Pe,Xe,Ge,He,Qe,ct,Bt;const Rt=A.isCompressedTexture?A.mipmaps[ce]:A.image;if(K!==null)Me=K.max.x-K.min.x,Ie=K.max.y-K.min.y,Pe=K.isBox3?K.max.z-K.min.z:1,Xe=K.min.x,Ge=K.min.y,He=K.isBox3?K.min.z:0;else{const ii=Math.pow(2,-H);Me=Math.floor(Rt.width*ii),Ie=Math.floor(Rt.height*ii),A.isDataArrayTexture?Pe=Rt.depth:A.isData3DTexture?Pe=Math.floor(Rt.depth*ii):Pe=1,Xe=0,Ge=0,He=0}Z!==null?(Qe=Z.x,ct=Z.y,Bt=Z.z):(Qe=0,ct=0,Bt=0);const Et=Le.convert(z.format),$e=Le.convert(z.type);let Lt;z.isData3DTexture?(B.setTexture3D(z,0),Lt=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(B.setTexture2DArray(z,0),Lt=D.TEXTURE_2D_ARRAY):(B.setTexture2D(z,0),Lt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const ht=D.getParameter(D.UNPACK_ROW_LENGTH),zn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ms=D.getParameter(D.UNPACK_SKIP_PIXELS),Vn=D.getParameter(D.UNPACK_SKIP_ROWS),To=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Rt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Rt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Xe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ge),D.pixelStorei(D.UNPACK_SKIP_IMAGES,He);const It=A.isDataArrayTexture||A.isData3DTexture,ni=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const ii=Y.get(A),_n=Y.get(z),An=Y.get(ii.__renderTarget),Mc=Y.get(_n.__renderTarget);N.bindFramebuffer(D.READ_FRAMEBUFFER,An.__webglFramebuffer),N.bindFramebuffer(D.DRAW_FRAMEBUFFER,Mc.__webglFramebuffer);for(let Fr=0;Fr<Pe;Fr++)It&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Y.get(A).__webglTexture,H,He+Fr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Y.get(z).__webglTexture,ce,Bt+Fr)),D.blitFramebuffer(Xe,Ge,Me,Ie,Qe,ct,Me,Ie,D.DEPTH_BUFFER_BIT,D.NEAREST);N.bindFramebuffer(D.READ_FRAMEBUFFER,null),N.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||Y.has(A)){const ii=Y.get(A),_n=Y.get(z);N.bindFramebuffer(D.READ_FRAMEBUFFER,ti),N.bindFramebuffer(D.DRAW_FRAMEBUFFER,$t);for(let An=0;An<Pe;An++)It?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ii.__webglTexture,H,He+An):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ii.__webglTexture,H),ni?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_n.__webglTexture,ce,Bt+An):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_n.__webglTexture,ce),H!==0?D.blitFramebuffer(Xe,Ge,Me,Ie,Qe,ct,Me,Ie,D.COLOR_BUFFER_BIT,D.NEAREST):ni?D.copyTexSubImage3D(Lt,ce,Qe,ct,Bt+An,Xe,Ge,Me,Ie):D.copyTexSubImage2D(Lt,ce,Qe,ct,Xe,Ge,Me,Ie);N.bindFramebuffer(D.READ_FRAMEBUFFER,null),N.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ni?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Lt,ce,Qe,ct,Bt,Me,Ie,Pe,Et,$e,Rt.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Lt,ce,Qe,ct,Bt,Me,Ie,Pe,Et,Rt.data):D.texSubImage3D(Lt,ce,Qe,ct,Bt,Me,Ie,Pe,Et,$e,Rt):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ce,Qe,ct,Me,Ie,Et,$e,Rt.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ce,Qe,ct,Rt.width,Rt.height,Et,Rt.data):D.texSubImage2D(D.TEXTURE_2D,ce,Qe,ct,Me,Ie,Et,$e,Rt);D.pixelStorei(D.UNPACK_ROW_LENGTH,ht),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,zn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ms),D.pixelStorei(D.UNPACK_SKIP_ROWS,Vn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,To),ce===0&&z.generateMipmaps&&D.generateMipmap(Lt),N.unbindTexture()},this.initRenderTarget=function(A){Y.get(A).__webglFramebuffer===void 0&&B.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?B.setTextureCube(A,0):A.isData3DTexture?B.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?B.setTexture2DArray(A,0):B.setTexture2D(A,0),N.unbindTexture()},this.resetState=function(){w=0,T=0,C=null,N.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}const Nb=`
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
`,Fb=`
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
`;function Ob(r,{count:e=1200,ticker:t}={}){if(!r)return null;const n=new HS,i=new ci(58,1,.1,260);i.position.z=62;let s;try{s=new Ub({canvas:r,alpha:!0,antialias:!1,powerPreference:"high-performance"})}catch{return null}s.setClearAlpha(0);const o=()=>Math.min(window.devicePixelRatio||1,2),a=150,l=new sr,c=new Float32Array(e*3),u=new Float32Array(e),f=new Float32Array(e),h=new Float32Array(e),d=new Float32Array(e);for(let v=0;v<e;v++){const P=Math.random();c[v*3]=(Math.random()-.5)*190,c[v*3+1]=Math.random()*a,c[v*3+2]=-60+P*82,u[v]=.6+Math.pow(P,2.4)*4.6,f[v]=1.6+Math.random()*4.4,h[v]=Math.random()*Math.PI*2,d[v]=P}l.setAttribute("position",new bn(c,3)),l.setAttribute("aSize",new bn(u,1)),l.setAttribute("aSpeed",new bn(f,1)),l.setAttribute("aPhase",new bn(h,1)),l.setAttribute("aDepth",new bn(d,1));const _=new rr({vertexShader:Nb,fragmentShader:Fb,uniforms:{uTime:{value:0},uScroll:{value:0},uMouse:{value:[0,0]},uSpan:{value:a},uPixelRatio:{value:o()},uOpacity:{value:.6}},transparent:!0,depthWrite:!1,depthTest:!1,blending:sf}),g=new YS(l,_);n.add(g);function m(){const v=window.innerWidth,P=window.innerHeight;s.setPixelRatio(o()),s.setSize(v,P,!1),i.aspect=v/P,i.updateProjectionMatrix(),_.uniforms.uPixelRatio.value=o()}m(),window.addEventListener("resize",m);const p={x:0,y:0,tx:0,ty:0},M=v=>{p.tx=(v.clientX/window.innerWidth-.5)*2,p.ty=-(v.clientY/window.innerHeight-.5)*2};window.addEventListener("pointermove",M,{passive:!0});let y=0;const x=v=>{y=v};let b=document.hidden;const w=()=>{b=document.hidden};document.addEventListener("visibilitychange",w);const T=(v,P)=>{if(b)return;const L=Math.min(P,50)/1e3;p.x+=(p.tx-p.x)*Math.min(L*3.2,1),p.y+=(p.ty-p.y)*Math.min(L*3.2,1);const F=v;_.uniforms.uTime.value=F,_.uniforms.uScroll.value=y*.012,_.uniforms.uMouse.value[0]=p.x,_.uniforms.uMouse.value[1]=p.y,s.render(n,i)};t&&t.add(T);function C(){t&&t.remove(T),window.removeEventListener("resize",m),window.removeEventListener("pointermove",M),document.removeEventListener("visibilitychange",w),l.dispose(),_.dispose(),s.dispose()}function S(v=0){_.uniforms.uTime.value=v,s.render(n,i)}return{setScroll:x,resize:m,dispose:C,renderer:s,renderAt:S}}const fn=[];let pt=null;const Lg=()=>fn.reduce((r,e)=>r+e.qty,0),Bb=()=>fn.reduce((r,e)=>r+e.qty*e.price,0);function tm(r){return`${r.name}|${r.sub}`}function Zf(r){const e=Lg();pt.badge.textContent=e>9?"9+":String(e),pt.badge.classList.toggle("is-on",e>0),pt.openBtn.setAttribute("aria-label",e?`Sacola, ${e} item(ns)`:"Sacola"),r&&_e.timeline().to(pt.openBtn,{scale:.88,duration:.1,ease:"power2.in"}).to(pt.openBtn,{scale:1,duration:.45,ease:"elastic.out(1, 0.45)"}).fromTo(pt.badge,{scale:.4},{scale:1,duration:.5,ease:"back.out(3)"},.06)}function kb(r,e){return`<article class="cart__row" data-row="${e}">
  <div class="cart__thumb"><img src="${r.img}" alt="" /></div>
  <div class="cart__info">
    <b>${r.name}</b>
    <span>${r.sub}</span>
    <div class="cart__qty">
      <button type="button" data-step="-1" aria-label="Remover uma unidade de ${r.name}">–</button>
      <em>${r.qty}</em>
      <button type="button" data-step="1" aria-label="Adicionar uma unidade de ${r.name}">+</button>
    </div>
  </div>
  <div class="cart__line">
    <strong class="display">${gc(r.qty*r.price)}</strong>
    <button type="button" class="cart__drop" data-drop aria-label="Remover ${r.name}">retirar</button>
  </div>
</article>`}function lc(r){pt.list.innerHTML=fn.length?fn.map(kb).join(""):'<p class="cart__empty tech">SACOLA VAZIA<span>ADICIONE UMA PEÇA PARA COMEÇAR</span></p>',pt.total.textContent=gc(Bb()),pt.summary.textContent=fn.length?`${Lg()} ITEM(NS) · ${fn.length} REFERÊNCIA(S)`:"NENHUM ITEM",pt.checkout.disabled=fn.length===0,r&&_e.from(pt.list.children,{x:26,opacity:0,duration:.5,ease:"expo.out",stagger:.06})}let _r=!1;function Gs(r){_r!==r&&(_r=r,pt.root.classList.toggle("is-open",_r),pt.root.setAttribute("aria-hidden",String(!_r)),Ir.get()?.paused(_r),_r?(lc(!0),_e.timeline().set(pt.root,{pointerEvents:"auto"}).to(pt.backdrop,{opacity:1,duration:.4,ease:"power2.out"},0).fromTo(pt.panel,{xPercent:100},{xPercent:0,duration:.62,ease:"expo.out"},0),pt.closeBtn.focus()):(_e.timeline({onComplete:()=>_e.set(pt.root,{pointerEvents:"none"})}).to(pt.panel,{xPercent:100,duration:.45,ease:"expo.in"},0).to(pt.backdrop,{opacity:0,duration:.35},.05),pt.openBtn.focus()))}function zb(r){if(!r||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const e=r.getBoundingClientRect(),t=pt.openBtn.getBoundingClientRect();if(!e.width)return;const i=Math.min(1,260/e.width),s=e.width*i,o=e.height*i,a=document.createElement("img");a.src=r.currentSrc||r.src,a.alt="",a.className="cart-fly",a.style.left=`${e.left+(e.width-s)/2}px`,a.style.top=`${e.top+(e.height-o)/2}px`,a.style.width=`${s}px`,a.style.height=`${o}px`,document.body.appendChild(a);const l=t.left+t.width/2-(e.left+e.width/2),c=t.top+t.height/2-(e.top+e.height/2),u=.8;return _e.timeline({onComplete:()=>a.remove()}).to(a,{x:l,duration:u,ease:"power1.in"},0).to(a,{y:c,duration:u,ease:"power2.in"},0).to(a,{scale:.1,rotate:-18,duration:u,ease:"power2.in"},0).to(a,{opacity:0,duration:.22,ease:"power1.in"},u-.22),u}function nm(r,e){if(!pt)return;const t=tm(r),n=fn.find(s=>tm(s)===t);n?n.qty+=1:fn.push({...r,qty:1}),_x();const i=zb(e);_e.delayedCall(i?i*.82:0,()=>Zf(!0)),_r&&lc(!0)}function Vb(r){return r?r.dataset.flyFrom?document.querySelector(r.dataset.flyFrom):r.querySelector("[data-fly]")||r.querySelector("img"):null}function Hb(r){const e=r.closest("[data-product]");return e?{name:e.dataset.name,sub:e.dataset.sub,price:Number(e.dataset.price),img:e.dataset.img}:null}function Gb(){const r=document.getElementById("cart"),e=document.querySelector("[data-cart-open]");return!r||!e?null:(pt={root:r,openBtn:e,badge:e.querySelector("[data-cart-badge]"),backdrop:r.querySelector(".cart__backdrop"),panel:r.querySelector(".cart__panel"),closeBtn:r.querySelector("[data-cart-close]"),list:r.querySelector("[data-cart-list]"),total:r.querySelector("[data-cart-total]"),summary:r.querySelector("[data-cart-summary]"),checkout:r.querySelector("[data-cart-checkout]")},_e.set(r,{pointerEvents:"none"}),_e.set(pt.backdrop,{opacity:0}),_e.set(pt.panel,{xPercent:100}),Zf(!1),lc(!1),e.addEventListener("click",()=>Gs(!0)),r.querySelectorAll("[data-cart-close]").forEach(t=>t.addEventListener("click",()=>Gs(!1))),pt.backdrop.addEventListener("click",()=>Gs(!1)),document.addEventListener("keydown",t=>{t.key==="Escape"&&_r&&Gs(!1)}),pt.list.addEventListener("click",t=>{const n=t.target.closest("[data-row]");if(!n)return;const i=fn[Number(n.dataset.row)];if(i){if(t.target.closest("[data-drop]"))fn.splice(fn.indexOf(i),1);else{const s=t.target.closest("[data-step]");if(!s)return;i.qty+=Number(s.dataset.step),i.qty<1&&fn.splice(fn.indexOf(i),1)}lc(!1),Zf(!0)}}),pt.checkout.addEventListener("click",()=>{fn.length&&(_e.timeline().to(pt.checkout,{scale:.96,duration:.12}).to(pt.checkout,{scale:1,duration:.4,ease:"elastic.out(1, 0.5)"}),pt.summary.textContent="CHECKOUT AINDA NÃO CONECTADO")}),document.addEventListener("click",t=>{const n=t.target.closest("[data-add]");if(!n)return;t.preventDefault();const i=Hb(n);i?.name&&nm(i,Vb(n.closest("[data-product]")))}),{addToCart:nm,open:()=>Gs(!0),close:()=>Gs(!1),lines:fn})}const jf=new URLSearchParams(location.search),Jf=window.matchMedia("(prefers-reduced-motion: reduce)").matches,im=jf.get("intro")==="0";jf.has("fast")&&_e.globalTimeline.timeScale(Number(jf.get("fast"))||6);function Wb(){if(Jf)return null;const r=document.getElementById("frost"),e=Ob(r,{count:window.innerWidth<760?520:1250,ticker:_e.ticker});return e?(Ze.create({start:0,end:"max",onUpdate:t=>e.setScroll(t.scroll())}),e):null}function Xb(){document.querySelectorAll("[data-pick]").forEach(r=>{r.querySelectorAll("button").forEach(e=>{e.addEventListener("click",()=>{r.querySelectorAll("button").forEach(t=>t.classList.remove("is-on")),e.classList.add("is-on"),_e.fromTo(e,{scale:.86},{scale:1,duration:.5,ease:"elastic.out(1, 0.5)"})})})})}async function qb(){cx(),Sx(),gx(),Gb(),Xb(),px(),_e.set([".hero__title .line > span","[data-hero-line]",".hero__thumbs .thumb",".hero__counter",".hero__social"],{visibility:"hidden"}),await Promise.race([document.fonts?.ready??Promise.resolve(),new Promise(r=>setTimeout(r,2500))]),!Jf&&!im?await mx():(document.getElementById("preloader").style.display="none",document.body.classList.remove("is-locked")),_e.set([".hero__title .line > span","[data-hero-line]",".hero__thumbs .thumb",".hero__counter",".hero__social"],{visibility:"visible"}),!Jf&&!im?Mx():_e.set(".frost-canvas",{opacity:.8}),Ex(),Ax(),Wb(),window.addEventListener("load",()=>Ze.refresh())}function rm(){qb().catch(r=>console.error("[ATM] boot failed:",r))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",rm):rm();
