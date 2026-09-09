import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { CustomEase } from 'gsap/CustomEase';
import { Flip } from 'gsap/Flip';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, DrawSVGPlugin, CustomEase, Flip, Observer);

CustomEase.create('ATM', '0.16, 1, 0.3, 1');
CustomEase.create('ATMIn', '0.7, 0, 0.2, 1');

gsap.defaults({ ease: 'ATM', duration: 1 });

export { gsap, ScrollTrigger, ScrollSmoother, SplitText, DrawSVGPlugin, CustomEase, Flip, Observer };
