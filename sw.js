if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const o=s=>i(s,r),u={module:{uri:r},exports:t,require:o};e[r]=Promise.all(n.map((s=>u[s]||o(s)))).then((s=>(l(...s),t)))}}define(["./workbox-e0782b83"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_commonjsHelpers-725317a4.js",revision:null},{url:"assets/debug-97656c10.css",revision:null},{url:"assets/debugConfig-0e4d4a94.js",revision:null},{url:"assets/GameView-3770ac63.js",revision:null},{url:"assets/index-1b9aa78a.js",revision:null},{url:"assets/index-4bea3ac6.css",revision:null},{url:"assets/Mapping-c6f8d5eb.js",revision:null},{url:"assets/OrbitControls-c476c608.js",revision:null},{url:"assets/Stats-968fed1f.js",revision:null},{url:"assets/stats.min-e1f0f3e0.js",revision:null},{url:"assets/tweakpane-0b15faf3.js",revision:null},{url:"assets/URLParams-417eea48.js",revision:null},{url:"index.html",revision:"94cd2bb884b17eaec8f141167b5c6ba0"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"2065f5b0a71c1d8908b909144cb55be4"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
