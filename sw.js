if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>i(e,t),u={module:{uri:t},exports:l,require:o};s[t]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-e0782b83"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/GameView-3e81feb2.css",revision:null},{url:"assets/GameView-c0e705b8.js",revision:null},{url:"assets/index-3ef72314.js",revision:null},{url:"assets/index-8fd99247.css",revision:null},{url:"index.html",revision:"5ebb690cbf76835e30b0ff2ac1f7fc7a"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"2065f5b0a71c1d8908b909144cb55be4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
