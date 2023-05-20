import { app } from '@webglApp/App';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import './assets/styles/main.scss';

gsap.registerPlugin(CustomEase);

CustomEase.create('playerJump', 'M0,0 C0.426,0 0.43,-0.014 0.488,0.072 0.633,0.291 0.544,0.803 0.756,0.908 0.886,0.972 0.982,1 1,1');

app.init(document.getElementById('webgl-app'), document.getElementById('canvas-wrapper'));
