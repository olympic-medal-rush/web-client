import { app } from '@/App';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import '@styles/main.scss';

gsap.registerPlugin(CustomEase);
gsap.config({ force3D: true });
gsap.defaults({ ease: 'none', duration: 0.4 });

app.init(document.getElementById('webgl-app'), document.getElementById('canvas-wrapper'));
