if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let f={};const o=e=>i(e,t),l={module:{uri:t},exports:f,require:o};s[t]=Promise.all(n.map((e=>l[e]||o(e)))).then((e=>(r(...e),f)))}}define(["./workbox-e0782b83"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/GameView-df81be21.js",revision:null},{url:"assets/index-2fffcbaa.js",revision:null},{url:"assets/index-4bea3ac6.css",revision:null},{url:"index.html",revision:"587dfb8e24b9cbe1f1ffe61dba945bf1"},{url:"registerSW.js",revision:"beaed52f51fcda938abc7efadeb523f6"},{url:"manifest.webmanifest",revision:"e8419f7ece8efb416177b5dc073f9399"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
