import { app } from '@/App';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import '@styles/main.scss';

gsap.registerPlugin(CustomEase);

app.init(document.getElementById('webgl-app'), document.getElementById('canvas-wrapper'));
