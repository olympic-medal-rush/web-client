var e=Object.defineProperty;var m=(r,a,t)=>a in r?e(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t;var s=(r,a,t)=>(m(r,typeof a!="symbol"?a+"":a,t),t);import{U as o}from"./debugConfig-0e4d4a94.js";class n{constructor(){s(this,"params",new Map);this.searchParams=new URLSearchParams(window.location.search);for(const a of o)this.params.set(a,this.searchParams.get(a))}getBool(a){return this.params.get(a)==="true"||this.params.get(a)==="1"}getString(a){return this.params.get(a)}getNumber(a){return parseFloat(this.params.get(a))||null}has(a){return this.params.get(a)!==null}}export{n as URLParams};
