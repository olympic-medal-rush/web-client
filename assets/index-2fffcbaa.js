var Wm=Object.defineProperty;var jm=(n,e,t)=>e in n?Wm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var us=(n,e,t)=>(jm(n,typeof e!="symbol"?e+"":e,t),t),za=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var Ge=(n,e,t)=>(za(n,e,"read from private field"),t?t.call(n):e.get(n)),ct=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},mn=(n,e,t,i)=>(za(n,e,"write to private field"),i?i.call(n,t):e.set(n,t),t);var ki=(n,e,t)=>(za(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Xm={};function vc(n,e){const t=Object.create(null),i=n.split(",");for(let s=0;s<i.length;s++)t[i[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}function yc(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=vt(i)?Ym(i):yc(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(vt(n))return n;if(lt(n))return n}}const qm=/;(?![^(]*\))/g,$m=/:([^]+)/,Km=/\/\*.*?\*\//gs;function Ym(n){const e={};return n.replace(Km,"").split(qm).forEach(t=>{if(t){const i=t.split($m);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function bc(n){let e="";if(vt(n))e=n;else if(Ne(n))for(let t=0;t<n.length;t++){const i=bc(n[t]);i&&(e+=i+" ")}else if(lt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Zm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jm=vc(Zm);function md(n){return!!n||n===""}const $1=n=>vt(n)?n:n==null?"":Ne(n)||lt(n)&&(n.toString===vd||!Oe(n.toString))?JSON.stringify(n,gd,2):String(n),gd=(n,e)=>e&&e.__v_isRef?gd(n,e.value):Fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s])=>(t[`${i} =>`]=s,t),{})}:_d(e)?{[`Set(${e.size})`]:[...e.values()]}:lt(e)&&!Ne(e)&&!yd(e)?String(e):e,ot={},Os=[],En=()=>{},Qm=()=>!1,eg=/^on[^a-z]/,_a=n=>eg.test(n),Mc=n=>n.startsWith("onUpdate:"),$t=Object.assign,Sc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},tg=Object.prototype.hasOwnProperty,qe=(n,e)=>tg.call(n,e),Ne=Array.isArray,Fs=n=>lo(n)==="[object Map]",_d=n=>lo(n)==="[object Set]",ng=n=>lo(n)==="[object RegExp]",Oe=n=>typeof n=="function",vt=n=>typeof n=="string",wc=n=>typeof n=="symbol",lt=n=>n!==null&&typeof n=="object",xd=n=>lt(n)&&Oe(n.then)&&Oe(n.catch),vd=Object.prototype.toString,lo=n=>vd.call(n),ig=n=>lo(n).slice(8,-1),yd=n=>lo(n)==="[object Object]",Tc=n=>vt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Xo=vc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xa=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},sg=/-(\w)/g,Ws=xa(n=>n.replace(sg,(e,t)=>t?t.toUpperCase():"")),rg=/\B([A-Z])/g,tr=xa(n=>n.replace(rg,"-$1").toLowerCase()),bd=xa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Va=xa(n=>n?`on${bd(n)}`:""),zr=(n,e)=>!Object.is(n,e),Pr=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Qo=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},og=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let pu;const ag=()=>pu||(pu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let yn;class Md{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=yn,!e&&yn&&(this.index=(yn.scopes||(yn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=yn;try{return yn=this,e()}finally{yn=t}}}on(){yn=this}off(){yn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Sd(n){return new Md(n)}function lg(n,e=yn){e&&e.active&&e.effects.push(n)}function cg(){return yn}const Ec=n=>{const e=new Set(n);return e.w=0,e.n=0,e},wd=n=>(n.w&Ri)>0,Td=n=>(n.n&Ri)>0,ug=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Ri},fg=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const s=e[i];wd(s)&&!Td(s)?s.delete(n):e[t++]=s,s.w&=~Ri,s.n&=~Ri}e.length=t}},Nl=new WeakMap;let Ar=0,Ri=1;const Ol=30;let Mn;const ns=Symbol(""),Fl=Symbol("");class Ac{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,lg(this,i)}run(){if(!this.active)return this.fn();let e=Mn,t=wi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Mn,Mn=this,wi=!0,Ri=1<<++Ar,Ar<=Ol?ug(this):mu(this),this.fn()}finally{Ar<=Ol&&fg(this),Ri=1<<--Ar,Mn=this.parent,wi=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Mn===this?this.deferStop=!0:this.active&&(mu(this),this.onStop&&this.onStop(),this.active=!1)}}function mu(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let wi=!0;const Ed=[];function nr(){Ed.push(wi),wi=!1}function ir(){const n=Ed.pop();wi=n===void 0?!0:n}function en(n,e,t){if(wi&&Mn){let i=Nl.get(n);i||Nl.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=Ec()),Ad(s)}}function Ad(n,e){let t=!1;Ar<=Ol?Td(n)||(n.n|=Ri,t=!wd(n)):t=!n.has(Mn),t&&(n.add(Mn),Mn.deps.push(n))}function oi(n,e,t,i,s,r){const o=Nl.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ne(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ne(n)?Tc(t)&&a.push(o.get("length")):(a.push(o.get(ns)),Fs(n)&&a.push(o.get(Fl)));break;case"delete":Ne(n)||(a.push(o.get(ns)),Fs(n)&&a.push(o.get(Fl)));break;case"set":Fs(n)&&a.push(o.get(ns));break}if(a.length===1)a[0]&&Ul(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ul(Ec(l))}}function Ul(n,e){const t=Ne(n)?n:[...n];for(const i of t)i.computed&&gu(i);for(const i of t)i.computed||gu(i)}function gu(n,e){(n!==Mn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const hg=vc("__proto__,__v_isRef,__isVue"),Rd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(wc)),dg=Rc(),pg=Rc(!1,!0),mg=Rc(!0),_u=gg();function gg(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ze(this);for(let r=0,o=this.length;r<o;r++)en(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(Ze)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){nr();const i=Ze(this)[e].apply(this,t);return ir(),i}}),n}function _g(n){const e=Ze(this);return en(e,"has",n),e.hasOwnProperty(n)}function Rc(n=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(n?e?Dg:Dd:e?Id:Pd).get(i))return i;const o=Ne(i);if(!n){if(o&&qe(_u,s))return Reflect.get(_u,s,r);if(s==="hasOwnProperty")return _g}const a=Reflect.get(i,s,r);return(wc(s)?Rd.has(s):hg(s))||(n||en(i,"get",s),e)?a:Pt(a)?o&&Tc(s)?a:a.value:lt(a)?n?Nd(a):co(a):a}}const xg=Cd(),vg=Cd(!0);function Cd(n=!1){return function(t,i,s,r){let o=t[i];if(js(o)&&Pt(o)&&!Pt(s))return!1;if(!n&&(!ea(s)&&!js(s)&&(o=Ze(o),s=Ze(s)),!Ne(t)&&Pt(o)&&!Pt(s)))return o.value=s,!0;const a=Ne(t)&&Tc(i)?Number(i)<t.length:qe(t,i),l=Reflect.set(t,i,s,r);return t===Ze(r)&&(a?zr(s,o)&&oi(t,"set",i,s):oi(t,"add",i,s)),l}}function yg(n,e){const t=qe(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&oi(n,"delete",e,void 0),i}function bg(n,e){const t=Reflect.has(n,e);return(!wc(e)||!Rd.has(e))&&en(n,"has",e),t}function Mg(n){return en(n,"iterate",Ne(n)?"length":ns),Reflect.ownKeys(n)}const Ld={get:dg,set:xg,deleteProperty:yg,has:bg,ownKeys:Mg},Sg={get:mg,set(n,e){return!0},deleteProperty(n,e){return!0}},wg=$t({},Ld,{get:pg,set:vg}),Cc=n=>n,va=n=>Reflect.getPrototypeOf(n);function mo(n,e,t=!1,i=!1){n=n.__v_raw;const s=Ze(n),r=Ze(e);t||(e!==r&&en(s,"get",e),en(s,"get",r));const{has:o}=va(s),a=i?Cc:t?Dc:Vr;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function go(n,e=!1){const t=this.__v_raw,i=Ze(t),s=Ze(n);return e||(n!==s&&en(i,"has",n),en(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function _o(n,e=!1){return n=n.__v_raw,!e&&en(Ze(n),"iterate",ns),Reflect.get(n,"size",n)}function xu(n){n=Ze(n);const e=Ze(this);return va(e).has.call(e,n)||(e.add(n),oi(e,"add",n,n)),this}function vu(n,e){e=Ze(e);const t=Ze(this),{has:i,get:s}=va(t);let r=i.call(t,n);r||(n=Ze(n),r=i.call(t,n));const o=s.call(t,n);return t.set(n,e),r?zr(e,o)&&oi(t,"set",n,e):oi(t,"add",n,e),this}function yu(n){const e=Ze(this),{has:t,get:i}=va(e);let s=t.call(e,n);s||(n=Ze(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&oi(e,"delete",n,void 0),r}function bu(){const n=Ze(this),e=n.size!==0,t=n.clear();return e&&oi(n,"clear",void 0,void 0),t}function xo(n,e){return function(i,s){const r=this,o=r.__v_raw,a=Ze(o),l=e?Cc:n?Dc:Vr;return!n&&en(a,"iterate",ns),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function vo(n,e,t){return function(...i){const s=this.__v_raw,r=Ze(s),o=Fs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Cc:e?Dc:Vr;return!e&&en(r,"iterate",l?Fl:ns),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ui(n){return function(...e){return n==="delete"?!1:this}}function Tg(){const n={get(r){return mo(this,r)},get size(){return _o(this)},has:go,add:xu,set:vu,delete:yu,clear:bu,forEach:xo(!1,!1)},e={get(r){return mo(this,r,!1,!0)},get size(){return _o(this)},has:go,add:xu,set:vu,delete:yu,clear:bu,forEach:xo(!1,!0)},t={get(r){return mo(this,r,!0)},get size(){return _o(this,!0)},has(r){return go.call(this,r,!0)},add:ui("add"),set:ui("set"),delete:ui("delete"),clear:ui("clear"),forEach:xo(!0,!1)},i={get(r){return mo(this,r,!0,!0)},get size(){return _o(this,!0)},has(r){return go.call(this,r,!0)},add:ui("add"),set:ui("set"),delete:ui("delete"),clear:ui("clear"),forEach:xo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=vo(r,!1,!1),t[r]=vo(r,!0,!1),e[r]=vo(r,!1,!0),i[r]=vo(r,!0,!0)}),[n,t,e,i]}const[Eg,Ag,Rg,Cg]=Tg();function Lc(n,e){const t=e?n?Cg:Rg:n?Ag:Eg;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(qe(t,s)&&s in i?t:i,s,r)}const Lg={get:Lc(!1,!1)},Pg={get:Lc(!1,!0)},Ig={get:Lc(!0,!1)},Pd=new WeakMap,Id=new WeakMap,Dd=new WeakMap,Dg=new WeakMap;function Ng(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Og(n){return n.__v_skip||!Object.isExtensible(n)?0:Ng(ig(n))}function co(n){return js(n)?n:Pc(n,!1,Ld,Lg,Pd)}function Fg(n){return Pc(n,!1,wg,Pg,Id)}function Nd(n){return Pc(n,!0,Sg,Ig,Dd)}function Pc(n,e,t,i,s){if(!lt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=Og(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function Us(n){return js(n)?Us(n.__v_raw):!!(n&&n.__v_isReactive)}function js(n){return!!(n&&n.__v_isReadonly)}function ea(n){return!!(n&&n.__v_isShallow)}function Od(n){return Us(n)||js(n)}function Ze(n){const e=n&&n.__v_raw;return e?Ze(e):n}function Ic(n){return Qo(n,"__v_skip",!0),n}const Vr=n=>lt(n)?co(n):n,Dc=n=>lt(n)?Nd(n):n;function Fd(n){wi&&Mn&&(n=Ze(n),Ad(n.dep||(n.dep=Ec())))}function Ud(n,e){n=Ze(n);const t=n.dep;t&&Ul(t)}function Pt(n){return!!(n&&n.__v_isRef===!0)}function Zn(n){return Bd(n,!1)}function Ug(n){return Bd(n,!0)}function Bd(n,e){return Pt(n)?n:new Bg(n,e)}class Bg{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ze(e),this._value=t?e:Vr(e)}get value(){return Fd(this),this._value}set value(e){const t=this.__v_isShallow||ea(e)||js(e);e=t?e:Ze(e),zr(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Vr(e),Ud(this))}}function si(n){return Pt(n)?n.value:n}const kg={get:(n,e,t)=>si(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Pt(s)&&!Pt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function kd(n){return Us(n)?n:new Proxy(n,kg)}var zd;class zg{constructor(e,t,i,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[zd]=!1,this._dirty=!0,this.effect=new Ac(e,()=>{this._dirty||(this._dirty=!0,Ud(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Ze(this);return Fd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}zd="__v_isReadonly";function Vg(n,e,t=!1){let i,s;const r=Oe(n);return r?(i=n,s=En):(i=n.get,s=n.set),new zg(i,s,r||!s,t)}function Ti(n,e,t,i){let s;try{s=i?n(...i):n()}catch(r){ya(r,e,t)}return s}function An(n,e,t,i){if(Oe(n)){const r=Ti(n,e,t,i);return r&&xd(r)&&r.catch(o=>{ya(o,e,t)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(An(n[r],e,t,i));return s}function ya(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Ti(l,null,10,[n,o,a]);return}}Gg(n,t,s,i)}function Gg(n,e,t,i=!0){console.error(n)}let Gr=!1,Bl=!1;const Ut=[];let Bn=0;const Bs=[];let Yn=null,$i=0;const Vd=Promise.resolve();let Nc=null;function Gd(n){const e=Nc||Vd;return n?e.then(this?n.bind(this):n):e}function Hg(n){let e=Bn+1,t=Ut.length;for(;e<t;){const i=e+t>>>1;Hr(Ut[i])<n?e=i+1:t=i}return e}function Oc(n){(!Ut.length||!Ut.includes(n,Gr&&n.allowRecurse?Bn+1:Bn))&&(n.id==null?Ut.push(n):Ut.splice(Hg(n.id),0,n),Hd())}function Hd(){!Gr&&!Bl&&(Bl=!0,Nc=Vd.then(jd))}function Wg(n){const e=Ut.indexOf(n);e>Bn&&Ut.splice(e,1)}function jg(n){Ne(n)?Bs.push(...n):(!Yn||!Yn.includes(n,n.allowRecurse?$i+1:$i))&&Bs.push(n),Hd()}function Mu(n,e=Gr?Bn+1:0){for(;e<Ut.length;e++){const t=Ut[e];t&&t.pre&&(Ut.splice(e,1),e--,t())}}function Wd(n){if(Bs.length){const e=[...new Set(Bs)];if(Bs.length=0,Yn){Yn.push(...e);return}for(Yn=e,Yn.sort((t,i)=>Hr(t)-Hr(i)),$i=0;$i<Yn.length;$i++)Yn[$i]();Yn=null,$i=0}}const Hr=n=>n.id==null?1/0:n.id,Xg=(n,e)=>{const t=Hr(n)-Hr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function jd(n){Bl=!1,Gr=!0,Ut.sort(Xg);const e=En;try{for(Bn=0;Bn<Ut.length;Bn++){const t=Ut[Bn];t&&t.active!==!1&&Ti(t,null,14)}}finally{Bn=0,Ut.length=0,Wd(),Gr=!1,Nc=null,(Ut.length||Bs.length)&&jd()}}function qg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ot;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||ot;h&&(s=t.map(d=>vt(d)?d.trim():d)),f&&(s=t.map(og))}let a,l=i[a=Va(e)]||i[a=Va(Ws(e))];!l&&r&&(l=i[a=Va(tr(e))]),l&&An(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,An(c,n,6,s)}}function Xd(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Oe(n)){const l=c=>{const u=Xd(c,e,!0);u&&(a=!0,$t(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(lt(n)&&i.set(n,null),null):(Ne(r)?r.forEach(l=>o[l]=null):$t(o,r),lt(n)&&i.set(n,o),o)}function ba(n,e){return!n||!_a(e)?!1:(e=e.slice(2).replace(/Once$/,""),qe(n,e[0].toLowerCase()+e.slice(1))||qe(n,tr(e))||qe(n,e))}let Sn=null,qd=null;function ta(n){const e=Sn;return Sn=n,qd=n&&n.type.__scopeId||null,e}function kl(n,e=Sn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Lu(-1);const r=ta(e);let o;try{o=n(...s)}finally{ta(r),i._d&&Lu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ga(n){const{type:e,vnode:t,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:d,ctx:_,inheritAttrs:p}=n;let m,v;const b=ta(n);try{if(t.shapeFlag&4){const M=s||i;m=On(u.call(M,M,f,r,d,h,_)),v=l}else{const M=e;m=On(M.length>1?M(r,{attrs:l,slots:a,emit:c}):M(r,null)),v=e.props?l:$g(l)}}catch(M){Nr.length=0,ya(M,n,1),m=It(Wr)}let g=m;if(v&&p!==!1){const M=Object.keys(v),{shapeFlag:w}=g;M.length&&w&7&&(o&&M.some(Mc)&&(v=Kg(v,o)),g=rs(g,v))}return t.dirs&&(g=rs(g),g.dirs=g.dirs?g.dirs.concat(t.dirs):t.dirs),t.transition&&(g.transition=t.transition),m=g,ta(b),m}const $g=n=>{let e;for(const t in n)(t==="class"||t==="style"||_a(t))&&((e||(e={}))[t]=n[t]);return e},Kg=(n,e)=>{const t={};for(const i in n)(!Mc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Yg(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Su(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!ba(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Su(i,o,c):!0:!!o;return!1}function Su(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!ba(t,r))return!0}return!1}function Zg({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const $d=n=>n.__isSuspense;function Jg(n,e){e&&e.pendingBranch?Ne(n)?e.effects.push(...n):e.effects.push(n):jg(n)}function qo(n,e){if(gt){let t=gt.provides;const i=gt.parent&&gt.parent.provides;i===t&&(t=gt.provides=Object.create(i)),t[n]=e}}function kn(n,e,t=!1){const i=gt||Sn;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Oe(e)?e.call(i.proxy):e}}const yo={};function Ei(n,e,t){return Kd(n,e,t)}function Kd(n,e,{immediate:t,deep:i,flush:s,onTrack:r,onTrigger:o}=ot){const a=cg()===(gt==null?void 0:gt.scope)?gt:null;let l,c=!1,u=!1;if(Pt(n)?(l=()=>n.value,c=ea(n)):Us(n)?(l=()=>n,i=!0):Ne(n)?(u=!0,c=n.some(g=>Us(g)||ea(g)),l=()=>n.map(g=>{if(Pt(g))return g.value;if(Us(g))return Cs(g);if(Oe(g))return Ti(g,a,2)})):Oe(n)?e?l=()=>Ti(n,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),An(n,a,3,[h])}:l=En,e&&i){const g=l;l=()=>Cs(g())}let f,h=g=>{f=v.onStop=()=>{Ti(g,a,4)}},d;if(Xr)if(h=En,e?t&&An(e,a,3,[l(),u?[]:void 0,h]):l(),s==="sync"){const g=H_();d=g.__watcherHandles||(g.__watcherHandles=[])}else return En;let _=u?new Array(n.length).fill(yo):yo;const p=()=>{if(v.active)if(e){const g=v.run();(i||c||(u?g.some((M,w)=>zr(M,_[w])):zr(g,_)))&&(f&&f(),An(e,a,3,[g,_===yo?void 0:u&&_[0]===yo?[]:_,h]),_=g)}else v.run()};p.allowRecurse=!!e;let m;s==="sync"?m=p:s==="post"?m=()=>Rt(p,a&&a.suspense):(p.pre=!0,a&&(p.id=a.uid),m=()=>Oc(p));const v=new Ac(l,m);e?t?p():_=v.run():s==="post"?Rt(v.run.bind(v),a&&a.suspense):v.run();const b=()=>{v.stop(),a&&a.scope&&Sc(a.scope.effects,v)};return d&&d.push(b),b}function Qg(n,e,t){const i=this.proxy,s=vt(n)?n.includes(".")?Yd(i,n):()=>i[n]:n.bind(i,i);let r;Oe(e)?r=e:(r=e.handler,t=e);const o=gt;Xs(this);const a=Kd(s,r.bind(i),t);return o?Xs(o):is(),a}function Yd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function Cs(n,e){if(!lt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Pt(n))Cs(n.value,e);else if(Ne(n))for(let t=0;t<n.length;t++)Cs(n[t],e);else if(_d(n)||Fs(n))n.forEach(t=>{Cs(t,e)});else if(yd(n))for(const t in n)Cs(n[t],e);return n}function Zd(n,e){n.shapeFlag&6&&n.component?Zd(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Jd(n){return Oe(n)?{setup:n,name:n.name}:n}const Ir=n=>!!n.type.__asyncLoader,Qd=n=>n.type.__isKeepAlive,e_={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:e}){const t=Ta(),i=t.ctx;if(!i.renderer)return()=>{const b=e.default&&e.default();return b&&b.length===1?b[0]:b};const s=new Map,r=new Set;let o=null;const a=t.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:f}}}=i,h=f("div");i.activate=(b,g,M,w,A)=>{const L=b.component;c(b,g,M,0,a),l(L.vnode,b,g,M,L,a,w,b.slotScopeIds,A),Rt(()=>{L.isDeactivated=!1,L.a&&Pr(L.a);const S=b.props&&b.props.onVnodeMounted;S&&un(S,L.parent,b)},a)},i.deactivate=b=>{const g=b.component;c(b,h,null,1,a),Rt(()=>{g.da&&Pr(g.da);const M=b.props&&b.props.onVnodeUnmounted;M&&un(M,g.parent,b),g.isDeactivated=!0},a)};function d(b){Ha(b),u(b,t,a,!0)}function _(b){s.forEach((g,M)=>{const w=Du(g.type);w&&(!b||!b(w))&&p(M)})}function p(b){const g=s.get(b);!o||!Es(g,o)?d(g):o&&Ha(o),s.delete(b),r.delete(b)}Ei(()=>[n.include,n.exclude],([b,g])=>{b&&_(M=>Rr(b,M)),g&&_(M=>!Rr(g,M))},{flush:"post",deep:!0});let m=null;const v=()=>{m!=null&&s.set(m,Wa(t.subTree))};return Sa(v),tp(v),np(()=>{s.forEach(b=>{const{subTree:g,suspense:M}=t,w=Wa(g);if(b.type===w.type&&b.key===w.key){Ha(w);const A=w.component.da;A&&Rt(A,M);return}d(b)})}),()=>{if(m=null,!e.default)return null;const b=e.default(),g=b[0];if(b.length>1)return o=null,b;if(!sa(g)||!(g.shapeFlag&4)&&!(g.shapeFlag&128))return o=null,g;let M=Wa(g);const w=M.type,A=Du(Ir(M)?M.type.__asyncResolved||{}:w),{include:L,exclude:S,max:T}=n;if(L&&(!A||!Rr(L,A))||S&&A&&Rr(S,A))return o=M,g;const I=M.key==null?w:M.key,F=s.get(I);return M.el&&(M=rs(M),g.shapeFlag&128&&(g.ssContent=M)),m=I,F?(M.el=F.el,M.component=F.component,M.transition&&Zd(M,M.transition),M.shapeFlag|=512,r.delete(I),r.add(I)):(r.add(I),T&&r.size>parseInt(T,10)&&p(r.values().next().value)),M.shapeFlag|=256,o=M,$d(g.type)?g:M}}},t_=e_;function Rr(n,e){return Ne(n)?n.some(t=>Rr(t,e)):vt(n)?n.split(",").includes(e):ng(n)?n.test(e):!1}function n_(n,e){ep(n,"a",e)}function i_(n,e){ep(n,"da",e)}function ep(n,e,t=gt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ma(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Qd(s.parent.vnode)&&s_(i,e,t,s),s=s.parent}}function s_(n,e,t,i){const s=Ma(e,n,i,!0);Fc(()=>{Sc(i[e],s)},t)}function Ha(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function Wa(n){return n.shapeFlag&128?n.ssContent:n}function Ma(n,e,t=gt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;nr(),Xs(t);const a=An(e,t,n,o);return is(),ir(),a});return i?s.unshift(r):s.push(r),r}}const ci=n=>(e,t=gt)=>(!Xr||n==="sp")&&Ma(n,(...i)=>e(...i),t),r_=ci("bm"),Sa=ci("m"),o_=ci("bu"),tp=ci("u"),np=ci("bum"),Fc=ci("um"),a_=ci("sp"),l_=ci("rtg"),c_=ci("rtc");function u_(n,e=gt){Ma("ec",n,e)}function zi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(nr(),An(l,t,8,[n.el,a,n,e]),ir())}}const f_=Symbol(),zl=n=>n?dp(n)?Vc(n)||n.proxy:zl(n.parent):null,Dr=$t(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>zl(n.parent),$root:n=>zl(n.root),$emit:n=>n.emit,$options:n=>Uc(n),$forceUpdate:n=>n.f||(n.f=()=>Oc(n.update)),$nextTick:n=>n.n||(n.n=Gd.bind(n.proxy)),$watch:n=>Qg.bind(n)}),ja=(n,e)=>n!==ot&&!n.__isScriptSetup&&qe(n,e),h_={get({_:n},e){const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ja(i,e))return o[e]=1,i[e];if(s!==ot&&qe(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&qe(c,e))return o[e]=3,r[e];if(t!==ot&&qe(t,e))return o[e]=4,t[e];Vl&&(o[e]=0)}}const u=Dr[e];let f,h;if(u)return e==="$attrs"&&en(n,"get",e),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==ot&&qe(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,qe(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return ja(s,e)?(s[e]=t,!0):i!==ot&&qe(i,e)?(i[e]=t,!0):qe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==ot&&qe(n,o)||ja(e,o)||(a=r[0])&&qe(a,o)||qe(i,o)||qe(Dr,o)||qe(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:qe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let Vl=!0;function d_(n){const e=Uc(n),t=n.proxy,i=n.ctx;Vl=!1,e.beforeCreate&&wu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:p,deactivated:m,beforeDestroy:v,beforeUnmount:b,destroyed:g,unmounted:M,render:w,renderTracked:A,renderTriggered:L,errorCaptured:S,serverPrefetch:T,expose:I,inheritAttrs:F,components:Z,directives:k,filters:U}=e;if(c&&p_(c,i,null,n.appContext.config.unwrapInjectedRef),o)for(const K in o){const z=o[K];Oe(z)&&(i[K]=z.bind(t))}if(s){const K=s.call(t,t);lt(K)&&(n.data=co(K))}if(Vl=!0,r)for(const K in r){const z=r[K],oe=Oe(z)?z.bind(t,t):Oe(z.get)?z.get.bind(t,t):En,fe=!Oe(z)&&Oe(z.set)?z.set.bind(t):En,Me=Lt({get:oe,set:fe});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>Me.value,set:H=>Me.value=H})}if(a)for(const K in a)ip(a[K],i,t,K);if(l){const K=Oe(l)?l.call(t):l;Reflect.ownKeys(K).forEach(z=>{qo(z,K[z])})}u&&wu(u,n,"c");function re(K,z){Ne(z)?z.forEach(oe=>K(oe.bind(t))):z&&K(z.bind(t))}if(re(r_,f),re(Sa,h),re(o_,d),re(tp,_),re(n_,p),re(i_,m),re(u_,S),re(c_,A),re(l_,L),re(np,b),re(Fc,M),re(a_,T),Ne(I))if(I.length){const K=n.exposed||(n.exposed={});I.forEach(z=>{Object.defineProperty(K,z,{get:()=>t[z],set:oe=>t[z]=oe})})}else n.exposed||(n.exposed={});w&&n.render===En&&(n.render=w),F!=null&&(n.inheritAttrs=F),Z&&(n.components=Z),k&&(n.directives=k)}function p_(n,e,t=En,i=!1){Ne(n)&&(n=Gl(n));for(const s in n){const r=n[s];let o;lt(r)?"default"in r?o=kn(r.from||s,r.default,!0):o=kn(r.from||s):o=kn(r),Pt(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function wu(n,e,t){An(Ne(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function ip(n,e,t,i){const s=i.includes(".")?Yd(t,i):()=>t[i];if(vt(n)){const r=e[n];Oe(r)&&Ei(s,r)}else if(Oe(n))Ei(s,n.bind(t));else if(lt(n))if(Ne(n))n.forEach(r=>ip(r,e,t,i));else{const r=Oe(n.handler)?n.handler.bind(t):e[n.handler];Oe(r)&&Ei(s,r,n)}}function Uc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>na(l,c,o,!0)),na(l,e,o)),lt(e)&&r.set(e,l),l}function na(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&na(n,r,t,!0),s&&s.forEach(o=>na(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=m_[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const m_={data:Tu,props:ji,emits:ji,methods:ji,computed:ji,beforeCreate:Gt,created:Gt,beforeMount:Gt,mounted:Gt,beforeUpdate:Gt,updated:Gt,beforeDestroy:Gt,beforeUnmount:Gt,destroyed:Gt,unmounted:Gt,activated:Gt,deactivated:Gt,errorCaptured:Gt,serverPrefetch:Gt,components:ji,directives:ji,watch:__,provide:Tu,inject:g_};function Tu(n,e){return e?n?function(){return $t(Oe(n)?n.call(this,this):n,Oe(e)?e.call(this,this):e)}:e:n}function g_(n,e){return ji(Gl(n),Gl(e))}function Gl(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Gt(n,e){return n?[...new Set([].concat(n,e))]:e}function ji(n,e){return n?$t($t(Object.create(null),n),e):e}function __(n,e){if(!n)return e;if(!e)return n;const t=$t(Object.create(null),n);for(const i in e)t[i]=Gt(n[i],e[i]);return t}function x_(n,e,t,i=!1){const s={},r={};Qo(r,wa,1),n.propsDefaults=Object.create(null),sp(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Fg(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function v_(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Ze(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ba(n.emitsOptions,h))continue;const d=e[h];if(l)if(qe(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const _=Ws(h);s[_]=Hl(l,a,_,d,n,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{sp(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!qe(e,f)&&((u=tr(f))===f||!qe(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=Hl(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!qe(e,f))&&(delete r[f],c=!0)}c&&oi(n,"set","$attrs")}function sp(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Xo(l))continue;const c=e[l];let u;s&&qe(s,u=Ws(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:ba(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Ze(t),c=a||ot;for(let u=0;u<r.length;u++){const f=r[u];t[f]=Hl(s,l,f,c[f],n,!qe(c,f))}}return o}function Hl(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=qe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&Oe(l)){const{propsDefaults:c}=s;t in c?i=c[t]:(Xs(s),i=c[t]=l.call(null,e),is())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===tr(t))&&(i=!0))}return i}function rp(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Oe(n)){const u=f=>{l=!0;const[h,d]=rp(f,e,!0);$t(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return lt(n)&&i.set(n,Os),Os;if(Ne(r))for(let u=0;u<r.length;u++){const f=Ws(r[u]);Eu(f)&&(o[f]=ot)}else if(r)for(const u in r){const f=Ws(u);if(Eu(f)){const h=r[u],d=o[f]=Ne(h)||Oe(h)?{type:h}:Object.assign({},h);if(d){const _=Cu(Boolean,d.type),p=Cu(String,d.type);d[0]=_>-1,d[1]=p<0||_<p,(_>-1||qe(d,"default"))&&a.push(f)}}}const c=[o,a];return lt(n)&&i.set(n,c),c}function Eu(n){return n[0]!=="$"}function Au(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Ru(n,e){return Au(n)===Au(e)}function Cu(n,e){return Ne(e)?e.findIndex(t=>Ru(t,n)):Oe(e)&&Ru(e,n)?0:-1}const op=n=>n[0]==="_"||n==="$stable",Bc=n=>Ne(n)?n.map(On):[On(n)],y_=(n,e,t)=>{if(e._n)return e;const i=kl((...s)=>Bc(e(...s)),t);return i._c=!1,i},ap=(n,e,t)=>{const i=n._ctx;for(const s in n){if(op(s))continue;const r=n[s];if(Oe(r))e[s]=y_(s,r,i);else if(r!=null){const o=Bc(r);e[s]=()=>o}}},lp=(n,e)=>{const t=Bc(e);n.slots.default=()=>t},b_=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ze(e),Qo(e,"_",t)):ap(e,n.slots={})}else n.slots={},e&&lp(n,e);Qo(n.slots,wa,1)},M_=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ot;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:($t(s,e),!t&&a===1&&delete s._):(r=!e.$stable,ap(e,s)),o=e}else e&&(lp(n,e),o={default:1});if(r)for(const a in s)!op(a)&&!(a in o)&&delete s[a]};function cp(){return{app:null,config:{isNativeTag:Qm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let S_=0;function w_(n,e){return function(i,s=null){Oe(i)||(i=Object.assign({},i)),s!=null&&!lt(s)&&(s=null);const r=cp(),o=new Set;let a=!1;const l=r.app={_uid:S_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:W_,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Oe(c.install)?(o.add(c),c.install(l,...u)):Oe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!a){const h=It(i,s);return h.appContext=r,u&&e?e(h,c):n(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Vc(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Wl(n,e,t,i,s=!1){if(Ne(n)){n.forEach((h,d)=>Wl(h,e&&(Ne(e)?e[d]:e),t,i,s));return}if(Ir(i)&&!s)return;const r=i.shapeFlag&4?Vc(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ot?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(vt(c)?(u[c]=null,qe(f,c)&&(f[c]=null)):Pt(c)&&(c.value=null)),Oe(l))Ti(l,a,12,[o,u]);else{const h=vt(l),d=Pt(l);if(h||d){const _=()=>{if(n.f){const p=h?qe(f,l)?f[l]:u[l]:l.value;s?Ne(p)&&Sc(p,r):Ne(p)?p.includes(r)||p.push(r):h?(u[l]=[r],qe(f,l)&&(f[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,qe(f,l)&&(f[l]=o)):d&&(l.value=o,n.k&&(u[n.k]=o))};o?(_.id=-1,Rt(_,t)):_()}}}const Rt=Jg;function T_(n){return E_(n)}function E_(n,e){const t=ag();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=En,insertStaticContent:_}=n,p=(E,P,G,$=null,ne=null,le=null,he=!1,ae=null,me=!!P.dynamicChildren)=>{if(E===P)return;E&&!Es(E,P)&&($=X(E),H(E,ne,le,!0),E=null),P.patchFlag===-2&&(me=!1,P.dynamicChildren=null);const{type:Y,ref:y,shapeFlag:x}=P;switch(Y){case uo:m(E,P,G,$);break;case Wr:v(E,P,G,$);break;case Xa:E==null&&b(P,G,$,he);break;case Nn:Z(E,P,G,$,ne,le,he,ae,me);break;default:x&1?w(E,P,G,$,ne,le,he,ae,me):x&6?k(E,P,G,$,ne,le,he,ae,me):(x&64||x&128)&&Y.process(E,P,G,$,ne,le,he,ae,me,de)}y!=null&&ne&&Wl(y,E&&E.ref,le,P||E,!P)},m=(E,P,G,$)=>{if(E==null)i(P.el=a(P.children),G,$);else{const ne=P.el=E.el;P.children!==E.children&&c(ne,P.children)}},v=(E,P,G,$)=>{E==null?i(P.el=l(P.children||""),G,$):P.el=E.el},b=(E,P,G,$)=>{[E.el,E.anchor]=_(E.children,P,G,$,E.el,E.anchor)},g=({el:E,anchor:P},G,$)=>{let ne;for(;E&&E!==P;)ne=h(E),i(E,G,$),E=ne;i(P,G,$)},M=({el:E,anchor:P})=>{let G;for(;E&&E!==P;)G=h(E),s(E),E=G;s(P)},w=(E,P,G,$,ne,le,he,ae,me)=>{he=he||P.type==="svg",E==null?A(P,G,$,ne,le,he,ae,me):T(E,P,ne,le,he,ae,me)},A=(E,P,G,$,ne,le,he,ae)=>{let me,Y;const{type:y,props:x,shapeFlag:N,transition:W,dirs:Q}=E;if(me=E.el=o(E.type,le,x&&x.is,x),N&8?u(me,E.children):N&16&&S(E.children,me,null,$,ne,le&&y!=="foreignObject",he,ae),Q&&zi(E,null,$,"created"),L(me,E,E.scopeId,he,$),x){for(const ge in x)ge!=="value"&&!Xo(ge)&&r(me,ge,null,x[ge],le,E.children,$,ne,q);"value"in x&&r(me,"value",null,x.value),(Y=x.onVnodeBeforeMount)&&un(Y,$,E)}Q&&zi(E,null,$,"beforeMount");const ce=(!ne||ne&&!ne.pendingBranch)&&W&&!W.persisted;ce&&W.beforeEnter(me),i(me,P,G),((Y=x&&x.onVnodeMounted)||ce||Q)&&Rt(()=>{Y&&un(Y,$,E),ce&&W.enter(me),Q&&zi(E,null,$,"mounted")},ne)},L=(E,P,G,$,ne)=>{if(G&&d(E,G),$)for(let le=0;le<$.length;le++)d(E,$[le]);if(ne){let le=ne.subTree;if(P===le){const he=ne.vnode;L(E,he,he.scopeId,he.slotScopeIds,ne.parent)}}},S=(E,P,G,$,ne,le,he,ae,me=0)=>{for(let Y=me;Y<E.length;Y++){const y=E[Y]=ae?xi(E[Y]):On(E[Y]);p(null,y,P,G,$,ne,le,he,ae)}},T=(E,P,G,$,ne,le,he)=>{const ae=P.el=E.el;let{patchFlag:me,dynamicChildren:Y,dirs:y}=P;me|=E.patchFlag&16;const x=E.props||ot,N=P.props||ot;let W;G&&Vi(G,!1),(W=N.onVnodeBeforeUpdate)&&un(W,G,P,E),y&&zi(P,E,G,"beforeUpdate"),G&&Vi(G,!0);const Q=ne&&P.type!=="foreignObject";if(Y?I(E.dynamicChildren,Y,ae,G,$,Q,le):he||z(E,P,ae,null,G,$,Q,le,!1),me>0){if(me&16)F(ae,P,x,N,G,$,ne);else if(me&2&&x.class!==N.class&&r(ae,"class",null,N.class,ne),me&4&&r(ae,"style",x.style,N.style,ne),me&8){const ce=P.dynamicProps;for(let ge=0;ge<ce.length;ge++){const _e=ce[ge],ee=x[_e],Re=N[_e];(Re!==ee||_e==="value")&&r(ae,_e,ee,Re,ne,E.children,G,$,q)}}me&1&&E.children!==P.children&&u(ae,P.children)}else!he&&Y==null&&F(ae,P,x,N,G,$,ne);((W=N.onVnodeUpdated)||y)&&Rt(()=>{W&&un(W,G,P,E),y&&zi(P,E,G,"updated")},$)},I=(E,P,G,$,ne,le,he)=>{for(let ae=0;ae<P.length;ae++){const me=E[ae],Y=P[ae],y=me.el&&(me.type===Nn||!Es(me,Y)||me.shapeFlag&70)?f(me.el):G;p(me,Y,y,null,$,ne,le,he,!0)}},F=(E,P,G,$,ne,le,he)=>{if(G!==$){if(G!==ot)for(const ae in G)!Xo(ae)&&!(ae in $)&&r(E,ae,G[ae],null,he,P.children,ne,le,q);for(const ae in $){if(Xo(ae))continue;const me=$[ae],Y=G[ae];me!==Y&&ae!=="value"&&r(E,ae,Y,me,he,P.children,ne,le,q)}"value"in $&&r(E,"value",G.value,$.value)}},Z=(E,P,G,$,ne,le,he,ae,me)=>{const Y=P.el=E?E.el:a(""),y=P.anchor=E?E.anchor:a("");let{patchFlag:x,dynamicChildren:N,slotScopeIds:W}=P;W&&(ae=ae?ae.concat(W):W),E==null?(i(Y,G,$),i(y,G,$),S(P.children,G,y,ne,le,he,ae,me)):x>0&&x&64&&N&&E.dynamicChildren?(I(E.dynamicChildren,N,G,ne,le,he,ae),(P.key!=null||ne&&P===ne.subTree)&&up(E,P,!0)):z(E,P,G,y,ne,le,he,ae,me)},k=(E,P,G,$,ne,le,he,ae,me)=>{P.slotScopeIds=ae,E==null?P.shapeFlag&512?ne.ctx.activate(P,G,$,he,me):U(P,G,$,ne,le,he,me):j(E,P,me)},U=(E,P,G,$,ne,le,he)=>{const ae=E.component=F_(E,$,ne);if(Qd(E)&&(ae.ctx.renderer=de),U_(ae),ae.asyncDep){if(ne&&ne.registerDep(ae,re),!E.el){const me=ae.subTree=It(Wr);v(null,me,P,G)}return}re(ae,E,P,G,ne,le,he)},j=(E,P,G)=>{const $=P.component=E.component;if(Yg(E,P,G))if($.asyncDep&&!$.asyncResolved){K($,P,G);return}else $.next=P,Wg($.update),$.update();else P.el=E.el,$.vnode=P},re=(E,P,G,$,ne,le,he)=>{const ae=()=>{if(E.isMounted){let{next:y,bu:x,u:N,parent:W,vnode:Q}=E,ce=y,ge;Vi(E,!1),y?(y.el=Q.el,K(E,y,he)):y=Q,x&&Pr(x),(ge=y.props&&y.props.onVnodeBeforeUpdate)&&un(ge,W,y,Q),Vi(E,!0);const _e=Ga(E),ee=E.subTree;E.subTree=_e,p(ee,_e,f(ee.el),X(ee),E,ne,le),y.el=_e.el,ce===null&&Zg(E,_e.el),N&&Rt(N,ne),(ge=y.props&&y.props.onVnodeUpdated)&&Rt(()=>un(ge,W,y,Q),ne)}else{let y;const{el:x,props:N}=P,{bm:W,m:Q,parent:ce}=E,ge=Ir(P);if(Vi(E,!1),W&&Pr(W),!ge&&(y=N&&N.onVnodeBeforeMount)&&un(y,ce,P),Vi(E,!0),x&&ve){const _e=()=>{E.subTree=Ga(E),ve(x,E.subTree,E,ne,null)};ge?P.type.__asyncLoader().then(()=>!E.isUnmounted&&_e()):_e()}else{const _e=E.subTree=Ga(E);p(null,_e,G,$,E,ne,le),P.el=_e.el}if(Q&&Rt(Q,ne),!ge&&(y=N&&N.onVnodeMounted)){const _e=P;Rt(()=>un(y,ce,_e),ne)}(P.shapeFlag&256||ce&&Ir(ce.vnode)&&ce.vnode.shapeFlag&256)&&E.a&&Rt(E.a,ne),E.isMounted=!0,P=G=$=null}},me=E.effect=new Ac(ae,()=>Oc(Y),E.scope),Y=E.update=()=>me.run();Y.id=E.uid,Vi(E,!0),Y()},K=(E,P,G)=>{P.component=E;const $=E.vnode.props;E.vnode=P,E.next=null,v_(E,P.props,$,G),M_(E,P.children,G),nr(),Mu(),ir()},z=(E,P,G,$,ne,le,he,ae,me=!1)=>{const Y=E&&E.children,y=E?E.shapeFlag:0,x=P.children,{patchFlag:N,shapeFlag:W}=P;if(N>0){if(N&128){fe(Y,x,G,$,ne,le,he,ae,me);return}else if(N&256){oe(Y,x,G,$,ne,le,he,ae,me);return}}W&8?(y&16&&q(Y,ne,le),x!==Y&&u(G,x)):y&16?W&16?fe(Y,x,G,$,ne,le,he,ae,me):q(Y,ne,le,!0):(y&8&&u(G,""),W&16&&S(x,G,$,ne,le,he,ae,me))},oe=(E,P,G,$,ne,le,he,ae,me)=>{E=E||Os,P=P||Os;const Y=E.length,y=P.length,x=Math.min(Y,y);let N;for(N=0;N<x;N++){const W=P[N]=me?xi(P[N]):On(P[N]);p(E[N],W,G,null,ne,le,he,ae,me)}Y>y?q(E,ne,le,!0,!1,x):S(P,G,$,ne,le,he,ae,me,x)},fe=(E,P,G,$,ne,le,he,ae,me)=>{let Y=0;const y=P.length;let x=E.length-1,N=y-1;for(;Y<=x&&Y<=N;){const W=E[Y],Q=P[Y]=me?xi(P[Y]):On(P[Y]);if(Es(W,Q))p(W,Q,G,null,ne,le,he,ae,me);else break;Y++}for(;Y<=x&&Y<=N;){const W=E[x],Q=P[N]=me?xi(P[N]):On(P[N]);if(Es(W,Q))p(W,Q,G,null,ne,le,he,ae,me);else break;x--,N--}if(Y>x){if(Y<=N){const W=N+1,Q=W<y?P[W].el:$;for(;Y<=N;)p(null,P[Y]=me?xi(P[Y]):On(P[Y]),G,Q,ne,le,he,ae,me),Y++}}else if(Y>N)for(;Y<=x;)H(E[Y],ne,le,!0),Y++;else{const W=Y,Q=Y,ce=new Map;for(Y=Q;Y<=N;Y++){const Se=P[Y]=me?xi(P[Y]):On(P[Y]);Se.key!=null&&ce.set(Se.key,Y)}let ge,_e=0;const ee=N-Q+1;let Re=!1,Te=0;const Ce=new Array(ee);for(Y=0;Y<ee;Y++)Ce[Y]=0;for(Y=W;Y<=x;Y++){const Se=E[Y];if(_e>=ee){H(Se,ne,le,!0);continue}let Ie;if(Se.key!=null)Ie=ce.get(Se.key);else for(ge=Q;ge<=N;ge++)if(Ce[ge-Q]===0&&Es(Se,P[ge])){Ie=ge;break}Ie===void 0?H(Se,ne,le,!0):(Ce[Ie-Q]=Y+1,Ie>=Te?Te=Ie:Re=!0,p(Se,P[Ie],G,null,ne,le,he,ae,me),_e++)}const Le=Re?A_(Ce):Os;for(ge=Le.length-1,Y=ee-1;Y>=0;Y--){const Se=Q+Y,Ie=P[Se],it=Se+1<y?P[Se+1].el:$;Ce[Y]===0?p(null,Ie,G,it,ne,le,he,ae,me):Re&&(ge<0||Y!==Le[ge]?Me(Ie,G,it,2):ge--)}}},Me=(E,P,G,$,ne=null)=>{const{el:le,type:he,transition:ae,children:me,shapeFlag:Y}=E;if(Y&6){Me(E.component.subTree,P,G,$);return}if(Y&128){E.suspense.move(P,G,$);return}if(Y&64){he.move(E,P,G,de);return}if(he===Nn){i(le,P,G);for(let x=0;x<me.length;x++)Me(me[x],P,G,$);i(E.anchor,P,G);return}if(he===Xa){g(E,P,G);return}if($!==2&&Y&1&&ae)if($===0)ae.beforeEnter(le),i(le,P,G),Rt(()=>ae.enter(le),ne);else{const{leave:x,delayLeave:N,afterLeave:W}=ae,Q=()=>i(le,P,G),ce=()=>{x(le,()=>{Q(),W&&W()})};N?N(le,Q,ce):ce()}else i(le,P,G)},H=(E,P,G,$=!1,ne=!1)=>{const{type:le,props:he,ref:ae,children:me,dynamicChildren:Y,shapeFlag:y,patchFlag:x,dirs:N}=E;if(ae!=null&&Wl(ae,null,G,E,!0),y&256){P.ctx.deactivate(E);return}const W=y&1&&N,Q=!Ir(E);let ce;if(Q&&(ce=he&&he.onVnodeBeforeUnmount)&&un(ce,P,E),y&6)C(E.component,G,$);else{if(y&128){E.suspense.unmount(G,$);return}W&&zi(E,null,P,"beforeUnmount"),y&64?E.type.remove(E,P,G,ne,de,$):Y&&(le!==Nn||x>0&&x&64)?q(Y,P,G,!1,!0):(le===Nn&&x&384||!ne&&y&16)&&q(me,P,G),$&&ue(E)}(Q&&(ce=he&&he.onVnodeUnmounted)||W)&&Rt(()=>{ce&&un(ce,P,E),W&&zi(E,null,P,"unmounted")},G)},ue=E=>{const{type:P,el:G,anchor:$,transition:ne}=E;if(P===Nn){xe(G,$);return}if(P===Xa){M(E);return}const le=()=>{s(G),ne&&!ne.persisted&&ne.afterLeave&&ne.afterLeave()};if(E.shapeFlag&1&&ne&&!ne.persisted){const{leave:he,delayLeave:ae}=ne,me=()=>he(G,le);ae?ae(E.el,le,me):me()}else le()},xe=(E,P)=>{let G;for(;E!==P;)G=h(E),s(E),E=G;s(P)},C=(E,P,G)=>{const{bum:$,scope:ne,update:le,subTree:he,um:ae}=E;$&&Pr($),ne.stop(),le&&(le.active=!1,H(he,E,P,G)),ae&&Rt(ae,P),Rt(()=>{E.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},q=(E,P,G,$=!1,ne=!1,le=0)=>{for(let he=le;he<E.length;he++)H(E[he],P,G,$,ne)},X=E=>E.shapeFlag&6?X(E.component.subTree):E.shapeFlag&128?E.suspense.next():h(E.anchor||E.el),se=(E,P,G)=>{E==null?P._vnode&&H(P._vnode,null,null,!0):p(P._vnode||null,E,P,null,null,null,G),Mu(),Wd(),P._vnode=E},de={p,um:H,m:Me,r:ue,mt:U,mc:S,pc:z,pbc:I,n:X,o:n};let be,ve;return e&&([be,ve]=e(de)),{render:se,hydrate:be,createApp:w_(se,be)}}function Vi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function up(n,e,t=!1){const i=n.children,s=e.children;if(Ne(i)&&Ne(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=xi(s[r]),a.el=o.el),t||up(o,a)),a.type===uo&&(a.el=o.el)}}function A_(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const R_=n=>n.__isTeleport,Nn=Symbol(void 0),uo=Symbol(void 0),Wr=Symbol(void 0),Xa=Symbol(void 0),Nr=[];let wn=null;function ia(n=!1){Nr.push(wn=n?null:[])}function C_(){Nr.pop(),wn=Nr[Nr.length-1]||null}let jr=1;function Lu(n){jr+=n}function fp(n){return n.dynamicChildren=jr>0?wn||Os:null,C_(),jr>0&&wn&&wn.push(n),n}function kc(n,e,t,i,s,r){return fp(ei(n,e,t,i,s,r,!0))}function L_(n,e,t,i,s){return fp(It(n,e,t,i,s,!0))}function sa(n){return n?n.__v_isVNode===!0:!1}function Es(n,e){return n.type===e.type&&n.key===e.key}const wa="__vInternal",hp=({key:n})=>n??null,$o=({ref:n,ref_key:e,ref_for:t})=>n!=null?vt(n)||Pt(n)||Oe(n)?{i:Sn,r:n,k:e,f:!!t}:n:null;function ei(n,e=null,t=null,i=0,s=null,r=n===Nn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&hp(e),ref:e&&$o(e),scopeId:qd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Sn};return a?(zc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=vt(t)?8:16),jr>0&&!o&&wn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&wn.push(l),l}const It=P_;function P_(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===f_)&&(n=Wr),sa(n)){const a=rs(n,e,!0);return t&&zc(a,t),jr>0&&!r&&wn&&(a.shapeFlag&6?wn[wn.indexOf(n)]=a:wn.push(a)),a.patchFlag|=-2,a}if(V_(n)&&(n=n.__vccOpts),e){e=I_(e);let{class:a,style:l}=e;a&&!vt(a)&&(e.class=bc(a)),lt(l)&&(Od(l)&&!Ne(l)&&(l=$t({},l)),e.style=yc(l))}const o=vt(n)?1:$d(n)?128:R_(n)?64:lt(n)?4:Oe(n)?2:0;return ei(n,e,t,i,s,o,r,!0)}function I_(n){return n?Od(n)||wa in n?$t({},n):n:null}function rs(n,e,t=!1){const{props:i,ref:s,patchFlag:r,children:o}=n,a=e?D_(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&hp(a),ref:e&&e.ref?t&&s?Ne(s)?s.concat($o(e)):[s,$o(e)]:$o(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Nn?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&rs(n.ssContent),ssFallback:n.ssFallback&&rs(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function jl(n=" ",e=0){return It(uo,null,n,e)}function On(n){return n==null||typeof n=="boolean"?It(Wr):Ne(n)?It(Nn,null,n.slice()):typeof n=="object"?xi(n):It(uo,null,String(n))}function xi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:rs(n)}function zc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ne(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),zc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(wa in e)?e._ctx=Sn:s===3&&Sn&&(Sn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Oe(e)?(e={default:e,_ctx:Sn},t=32):(e=String(e),i&64?(t=16,e=[jl(e)]):t=8);n.children=e,n.shapeFlag|=t}function D_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=bc([e.class,i.class]));else if(s==="style")e.style=yc([e.style,i.style]);else if(_a(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ne(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function un(n,e,t,i=null){An(n,e,7,[t,i])}const N_=cp();let O_=0;function F_(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||N_,r={uid:O_++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Md(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rp(i,s),emitsOptions:Xd(i,s),emit:null,emitted:null,propsDefaults:ot,inheritAttrs:i.inheritAttrs,ctx:ot,data:ot,props:ot,attrs:ot,slots:ot,refs:ot,setupState:ot,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=qg.bind(null,r),n.ce&&n.ce(r),r}let gt=null;const Ta=()=>gt||Sn,Xs=n=>{gt=n,n.scope.on()},is=()=>{gt&&gt.scope.off(),gt=null};function dp(n){return n.vnode.shapeFlag&4}let Xr=!1;function U_(n,e=!1){Xr=e;const{props:t,children:i}=n.vnode,s=dp(n);x_(n,t,s,e),b_(n,i);const r=s?B_(n,e):void 0;return Xr=!1,r}function B_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Ic(new Proxy(n.ctx,h_));const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?z_(n):null;Xs(n),nr();const r=Ti(i,n,0,[n.props,s]);if(ir(),is(),xd(r)){if(r.then(is,is),e)return r.then(o=>{Pu(n,o,e)}).catch(o=>{ya(o,n,0)});n.asyncDep=r}else Pu(n,r,e)}else pp(n,e)}function Pu(n,e,t){Oe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:lt(e)&&(n.setupState=kd(e)),pp(n,t)}let Iu;function pp(n,e,t){const i=n.type;if(!n.render){if(!e&&Iu&&!i.render){const s=i.template||Uc(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=$t($t({isCustomElement:r,delimiters:a},o),l);i.render=Iu(s,c)}}n.render=i.render||En}Xs(n),nr(),d_(n),ir(),is()}function k_(n){return new Proxy(n.attrs,{get(e,t){return en(n,"get","$attrs"),e[t]}})}function z_(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=k_(n))},slots:n.slots,emit:n.emit,expose:e}}function Vc(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(kd(Ic(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Dr)return Dr[t](n)},has(e,t){return t in e||t in Dr}}))}function Du(n,e=!0){return Oe(n)?n.displayName||n.name:n.name||e&&n.__name}function V_(n){return Oe(n)&&"__vccOpts"in n}const Lt=(n,e)=>Vg(n,e,Xr);function Ea(n,e,t){const i=arguments.length;return i===2?lt(e)&&!Ne(e)?sa(e)?It(n,null,[e]):It(n,e):It(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&sa(t)&&(t=[t]),It(n,e,t))}const G_=Symbol(""),H_=()=>kn(G_),W_="3.2.47",j_="http://www.w3.org/2000/svg",Ki=typeof document<"u"?document:null,Nu=Ki&&Ki.createElement("template"),X_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e?Ki.createElementNS(j_,n):Ki.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ki.createTextNode(n),createComment:n=>Ki.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ki.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Nu.innerHTML=i?`<svg>${n}</svg>`:n;const a=Nu.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function q_(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function $_(n,e,t){const i=n.style,s=vt(t);if(t&&!s){if(e&&!vt(e))for(const r in e)t[r]==null&&Xl(i,r,"");for(const r in t)Xl(i,r,t[r])}else{const r=i.display;s?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=r)}}const Ou=/\s*!important$/;function Xl(n,e,t){if(Ne(t))t.forEach(i=>Xl(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=K_(n,e);Ou.test(t)?n.setProperty(tr(i),t.replace(Ou,""),"important"):n[i]=t}}const Fu=["Webkit","Moz","ms"],qa={};function K_(n,e){const t=qa[e];if(t)return t;let i=Ws(e);if(i!=="filter"&&i in n)return qa[e]=i;i=bd(i);for(let s=0;s<Fu.length;s++){const r=Fu[s]+i;if(r in n)return qa[e]=r}return e}const Uu="http://www.w3.org/1999/xlink";function Y_(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Uu,e.slice(6,e.length)):n.setAttributeNS(Uu,e,t);else{const r=Jm(e);t==null||r&&!md(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function Z_(n,e,t,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),n[e]=t??"";return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t??"";(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=md(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(e)}function J_(n,e,t,i){n.addEventListener(e,t,i)}function Q_(n,e,t,i){n.removeEventListener(e,t,i)}function e0(n,e,t,i,s=null){const r=n._vei||(n._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=t0(e);if(i){const c=r[e]=s0(i,s);J_(n,a,c,l)}else o&&(Q_(n,a,o,l),r[e]=void 0)}}const Bu=/(?:Once|Passive|Capture)$/;function t0(n){let e;if(Bu.test(n)){e={};let i;for(;i=n.match(Bu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):tr(n.slice(2)),e]}let $a=0;const n0=Promise.resolve(),i0=()=>$a||(n0.then(()=>$a=0),$a=Date.now());function s0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;An(r0(i,t.value),e,5,[i])};return t.value=n,t.attached=i0(),t}function r0(n,e){if(Ne(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const ku=/^on[a-z]/,o0=(n,e,t,i,s=!1,r,o,a,l)=>{e==="class"?q_(n,i,s):e==="style"?$_(n,t,i):_a(e)?Mc(e)||e0(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):a0(n,e,i,s))?Z_(n,e,i,r,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Y_(n,e,i,s))};function a0(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&ku.test(e)&&Oe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||ku.test(e)&&vt(t)?!1:e in n}const l0=$t({patchProp:o0},X_);let zu;function c0(){return zu||(zu=T_(l0))}const u0=(...n)=>{const e=c0().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=f0(i);if(!s)return;const r=e._component;!Oe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function f0(n){return vt(n)?document.querySelector(n):n}var h0=!1;/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const d0=Symbol();var Vu;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Vu||(Vu={}));function p0(){const n=Sd(!0),e=n.run(()=>Zn({}));let t=[],i=[];const s=Ic({install(r){s._a=r,r.provide(d0,s),r.config.globalProperties.$pinia=s,i.forEach(o=>t.push(o)),i=[]},use(r){return!this._a&&!h0?i.push(r):t.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const ql=typeof window<"u",m0=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Di=n=>m0?Symbol(n):n,g0=(n,e,t)=>_0({l:n,k:e,s:t}),_0=n=>JSON.stringify(n).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),At=n=>typeof n=="number"&&isFinite(n),x0=n=>Wc(n)==="[object Date]",ra=n=>Wc(n)==="[object RegExp]",Aa=n=>$e(n)&&Object.keys(n).length===0;function v0(n,e){typeof console<"u"&&(console.warn("[intlify] "+n),e&&console.warn(e.stack))}const Xt=Object.assign;let Gu;const Gc=()=>Gu||(Gu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hu(n){return n.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const y0=Object.prototype.hasOwnProperty;function Hc(n,e){return y0.call(n,e)}const _t=Array.isArray,Ct=n=>typeof n=="function",Ee=n=>typeof n=="string",ht=n=>typeof n=="boolean",st=n=>n!==null&&typeof n=="object",mp=Object.prototype.toString,Wc=n=>mp.call(n),$e=n=>Wc(n)==="[object Object]",b0=n=>n==null?"":_t(n)||$e(n)&&n.toString===mp?JSON.stringify(n,null,2):String(n);/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const gp={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,__EXTEND_POINT__:15};function _p(n,e,t={}){const{domain:i,messages:s,args:r}=t,o=n,a=new SyntaxError(String(o));return a.code=n,e&&(a.location=e),a.domain=i,a}/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const xp={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Ni=[];Ni[0]={w:[0],i:[3,0],["["]:[4],o:[7]};Ni[1]={w:[1],["."]:[2],["["]:[4],o:[7]};Ni[2]={w:[2],i:[3,0],[0]:[3,0]};Ni[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};Ni[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};Ni[5]={["'"]:[4,0],o:8,l:[5,0]};Ni[6]={['"']:[4,0],o:8,l:[6,0]};const M0=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function S0(n){return M0.test(n)}function w0(n){const e=n.charCodeAt(0),t=n.charCodeAt(n.length-1);return e===t&&(e===34||e===39)?n.slice(1,-1):n}function T0(n){if(n==null)return"o";switch(n.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return n;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function E0(n){const e=n.trim();return n.charAt(0)==="0"&&isNaN(parseInt(n))?!1:S0(e)?w0(e):"*"+e}function A0(n){const e=[];let t=-1,i=0,s=0,r,o,a,l,c,u,f;const h=[];h[0]=()=>{o===void 0?o=a:o+=a},h[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},h[2]=()=>{h[0](),s++},h[3]=()=>{if(s>0)s--,i=4,h[0]();else{if(s=0,o===void 0||(o=E0(o),o===!1))return!1;h[1]()}};function d(){const _=n[t+1];if(i===5&&_==="'"||i===6&&_==='"')return t++,a="\\"+_,h[0](),!0}for(;i!==null;)if(t++,r=n[t],!(r==="\\"&&d())){if(l=T0(r),f=Ni[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=h[c[1]],u&&(a=r,u()===!1))))return;if(i===7)return e}}const Wu=new Map;function R0(n,e){return st(n)?n[e]:null}function C0(n,e){if(!st(n))return null;let t=Wu.get(e);if(t||(t=A0(e),t&&Wu.set(e,t)),!t)return null;const i=t.length;let s=n,r=0;for(;r<i;){const o=s[t[r]];if(o===void 0)return null;s=o,r++}return s}const L0=n=>n,P0=n=>"",I0="text",D0=n=>n.length===0?"":n.join(""),N0=b0;function ju(n,e){return n=Math.abs(n),e===2?n?n>1?1:0:1:n?Math.min(n,2):0}function O0(n){const e=At(n.pluralIndex)?n.pluralIndex:-1;return n.named&&(At(n.named.count)||At(n.named.n))?At(n.named.count)?n.named.count:At(n.named.n)?n.named.n:e:e}function F0(n,e){e.count||(e.count=n),e.n||(e.n=n)}function U0(n={}){const e=n.locale,t=O0(n),i=st(n.pluralRules)&&Ee(e)&&Ct(n.pluralRules[e])?n.pluralRules[e]:ju,s=st(n.pluralRules)&&Ee(e)&&Ct(n.pluralRules[e])?ju:void 0,r=v=>v[i(t,v.length,s)],o=n.list||[],a=v=>o[v],l=n.named||{};At(n.pluralIndex)&&F0(t,l);const c=v=>l[v];function u(v){const b=Ct(n.messages)?n.messages(v):st(n.messages)?n.messages[v]:!1;return b||(n.parent?n.parent.message(v):P0)}const f=v=>n.modifiers?n.modifiers[v]:L0,h=$e(n.processor)&&Ct(n.processor.normalize)?n.processor.normalize:D0,d=$e(n.processor)&&Ct(n.processor.interpolate)?n.processor.interpolate:N0,_=$e(n.processor)&&Ee(n.processor.type)?n.processor.type:I0,m={list:a,named:c,plural:r,linked:(v,...b)=>{const[g,M]=b;let w="text",A="";b.length===1?st(g)?(A=g.modifier||A,w=g.type||w):Ee(g)&&(A=g||A):b.length===2&&(Ee(g)&&(A=g||A),Ee(M)&&(w=M||w));let L=u(v)(m);return w==="vnode"&&_t(L)&&A&&(L=L[0]),A?f(A)(L,w):L},message:u,type:_,interpolate:d,normalize:h};return m}let qr=null;function B0(n){qr=n}function k0(n,e,t){qr&&qr.emit(xp.I18nInit,{timestamp:Date.now(),i18n:n,version:e,meta:t})}const z0=V0(xp.FunctionTranslate);function V0(n){return e=>qr&&qr.emit(n,e)}const G0={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7};function H0(n,e,t){return[...new Set([t,..._t(e)?e:st(e)?Object.keys(e):Ee(e)?[e]:[t]])]}function vp(n,e,t){const i=Ee(t)?t:jc,s=n;s.__localeChainCache||(s.__localeChainCache=new Map);let r=s.__localeChainCache.get(i);if(!r){r=[];let o=[t];for(;_t(o);)o=Xu(r,o,e);const a=_t(e)||!$e(e)?e:e.default?e.default:null;o=Ee(a)?[a]:a,_t(o)&&Xu(r,o,!1),s.__localeChainCache.set(i,r)}return r}function Xu(n,e,t){let i=!0;for(let s=0;s<e.length&&ht(i);s++){const r=e[s];Ee(r)&&(i=W0(n,e[s],t))}return i}function W0(n,e,t){let i;const s=e.split("-");do{const r=s.join("-");i=j0(n,r,t),s.splice(-1,1)}while(s.length&&i===!0);return i}function j0(n,e,t){let i=!1;if(!n.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const s=e.replace(/!/g,"");n.push(s),(_t(t)||$e(t))&&t[s]&&(i=t[s])}return i}const X0="9.2.2",Ra=-1,jc="en-US",qu="",$u=n=>`${n.charAt(0).toLocaleUpperCase()}${n.substr(1)}`;function q0(){return{upper:(n,e)=>e==="text"&&Ee(n)?n.toUpperCase():e==="vnode"&&st(n)&&"__v_isVNode"in n?n.children.toUpperCase():n,lower:(n,e)=>e==="text"&&Ee(n)?n.toLowerCase():e==="vnode"&&st(n)&&"__v_isVNode"in n?n.children.toLowerCase():n,capitalize:(n,e)=>e==="text"&&Ee(n)?$u(n):e==="vnode"&&st(n)&&"__v_isVNode"in n?$u(n.children):n}}let $0,yp;function K0(n){yp=n}let bp;function Y0(n){bp=n}let Mp=null;const Ku=n=>{Mp=n},Z0=()=>Mp;let Sp=null;const Yu=n=>{Sp=n},J0=()=>Sp;let Zu=0;function Q0(n={}){const e=Ee(n.version)?n.version:X0,t=Ee(n.locale)?n.locale:jc,i=_t(n.fallbackLocale)||$e(n.fallbackLocale)||Ee(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:t,s=$e(n.messages)?n.messages:{[t]:{}},r=$e(n.datetimeFormats)?n.datetimeFormats:{[t]:{}},o=$e(n.numberFormats)?n.numberFormats:{[t]:{}},a=Xt({},n.modifiers||{},q0()),l=n.pluralRules||{},c=Ct(n.missing)?n.missing:null,u=ht(n.missingWarn)||ra(n.missingWarn)?n.missingWarn:!0,f=ht(n.fallbackWarn)||ra(n.fallbackWarn)?n.fallbackWarn:!0,h=!!n.fallbackFormat,d=!!n.unresolving,_=Ct(n.postTranslation)?n.postTranslation:null,p=$e(n.processor)?n.processor:null,m=ht(n.warnHtmlMessage)?n.warnHtmlMessage:!0,v=!!n.escapeParameter,b=Ct(n.messageCompiler)?n.messageCompiler:$0,g=Ct(n.messageResolver)?n.messageResolver:yp||R0,M=Ct(n.localeFallbacker)?n.localeFallbacker:bp||H0,w=st(n.fallbackContext)?n.fallbackContext:void 0,A=Ct(n.onWarn)?n.onWarn:v0,L=n,S=st(L.__datetimeFormatters)?L.__datetimeFormatters:new Map,T=st(L.__numberFormatters)?L.__numberFormatters:new Map,I=st(L.__meta)?L.__meta:{};Zu++;const F={version:e,cid:Zu,locale:t,fallbackLocale:i,messages:s,modifiers:a,pluralRules:l,missing:c,missingWarn:u,fallbackWarn:f,fallbackFormat:h,unresolving:d,postTranslation:_,processor:p,warnHtmlMessage:m,escapeParameter:v,messageCompiler:b,messageResolver:g,localeFallbacker:M,fallbackContext:w,onWarn:A,__meta:I};return F.datetimeFormats=r,F.numberFormats=o,F.__datetimeFormatters=S,F.__numberFormatters=T,__INTLIFY_PROD_DEVTOOLS__&&k0(F,e,I),F}function Xc(n,e,t,i,s){const{missing:r,onWarn:o}=n;if(r!==null){const a=r(n,t,e,s);return Ee(a)?a:e}else return e}function hr(n,e,t){const i=n;i.__localeChainCache=new Map,n.localeFallbacker(n,t,e)}let wp=gp.__EXTEND_POINT__;const Ka=()=>++wp,Ls={INVALID_ARGUMENT:wp,INVALID_DATE_ARGUMENT:Ka(),INVALID_ISO_DATE_ARGUMENT:Ka(),__EXTEND_POINT__:Ka()};function Ps(n){return _p(n,null,void 0)}const Ju=()=>"",Fn=n=>Ct(n);function Qu(n,...e){const{fallbackFormat:t,postTranslation:i,unresolving:s,messageCompiler:r,fallbackLocale:o,messages:a}=n,[l,c]=$l(...e),u=ht(c.missingWarn)?c.missingWarn:n.missingWarn,f=ht(c.fallbackWarn)?c.fallbackWarn:n.fallbackWarn,h=ht(c.escapeParameter)?c.escapeParameter:n.escapeParameter,d=!!c.resolvedMessage,_=Ee(c.default)||ht(c.default)?ht(c.default)?r?l:()=>l:c.default:t?r?l:()=>l:"",p=t||_!=="",m=Ee(c.locale)?c.locale:n.locale;h&&ex(c);let[v,b,g]=d?[l,m,a[m]||{}]:Tp(n,l,m,o,f,u),M=v,w=l;if(!d&&!(Ee(M)||Fn(M))&&p&&(M=_,w=M),!d&&(!(Ee(M)||Fn(M))||!Ee(b)))return s?Ra:l;let A=!1;const L=()=>{A=!0},S=Fn(M)?M:Ep(n,l,b,M,w,L);if(A)return M;const T=ix(n,b,g,c),I=U0(T),F=tx(n,S,I),Z=i?i(F,l):F;if(__INTLIFY_PROD_DEVTOOLS__){const k={timestamp:Date.now(),key:Ee(l)?l:Fn(M)?M.key:"",locale:b||(Fn(M)?M.locale:""),format:Ee(M)?M:Fn(M)?M.source:"",message:Z};k.meta=Xt({},n.__meta,Z0()||{}),z0(k)}return Z}function ex(n){_t(n.list)?n.list=n.list.map(e=>Ee(e)?Hu(e):e):st(n.named)&&Object.keys(n.named).forEach(e=>{Ee(n.named[e])&&(n.named[e]=Hu(n.named[e]))})}function Tp(n,e,t,i,s,r){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=n,u=c(n,i,t);let f={},h,d=null;const _="translate";for(let p=0;p<u.length&&(h=u[p],f=o[h]||{},(d=l(f,e))===null&&(d=f[e]),!(Ee(d)||Ct(d)));p++){const m=Xc(n,e,h,r,_);m!==e&&(d=m)}return[d,h,f]}function Ep(n,e,t,i,s,r){const{messageCompiler:o,warnHtmlMessage:a}=n;if(Fn(i)){const c=i;return c.locale=c.locale||t,c.key=c.key||e,c}if(o==null){const c=()=>i;return c.locale=t,c.key=e,c}const l=o(i,nx(n,t,s,i,a,r));return l.locale=t,l.key=e,l.source=i,l}function tx(n,e,t){return e(t)}function $l(...n){const[e,t,i]=n,s={};if(!Ee(e)&&!At(e)&&!Fn(e))throw Ps(Ls.INVALID_ARGUMENT);const r=At(e)?String(e):(Fn(e),e);return At(t)?s.plural=t:Ee(t)?s.default=t:$e(t)&&!Aa(t)?s.named=t:_t(t)&&(s.list=t),At(i)?s.plural=i:Ee(i)?s.default=i:$e(i)&&Xt(s,i),[r,s]}function nx(n,e,t,i,s,r){return{warnHtmlMessage:s,onError:o=>{throw r&&r(o),o},onCacheKey:o=>g0(e,t,o)}}function ix(n,e,t,i){const{modifiers:s,pluralRules:r,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=n,h={locale:e,modifiers:s,pluralRules:r,messages:d=>{let _=o(t,d);if(_==null&&u){const[,,p]=Tp(u,d,e,a,l,c);_=o(p,d)}if(Ee(_)){let p=!1;const v=Ep(n,d,e,_,d,()=>{p=!0});return p?Ju:v}else return Fn(_)?_:Ju}};return n.processor&&(h.processor=n.processor),i.list&&(h.list=i.list),i.named&&(h.named=i.named),At(i.plural)&&(h.pluralIndex=i.plural),h}function ef(n,...e){const{datetimeFormats:t,unresolving:i,fallbackLocale:s,onWarn:r,localeFallbacker:o}=n,{__datetimeFormatters:a}=n,[l,c,u,f]=Kl(...e),h=ht(u.missingWarn)?u.missingWarn:n.missingWarn;ht(u.fallbackWarn)?u.fallbackWarn:n.fallbackWarn;const d=!!u.part,_=Ee(u.locale)?u.locale:n.locale,p=o(n,s,_);if(!Ee(l)||l==="")return new Intl.DateTimeFormat(_,f).format(c);let m={},v,b=null;const g="datetime format";for(let A=0;A<p.length&&(v=p[A],m=t[v]||{},b=m[l],!$e(b));A++)Xc(n,l,v,h,g);if(!$e(b)||!Ee(v))return i?Ra:l;let M=`${v}__${l}`;Aa(f)||(M=`${M}__${JSON.stringify(f)}`);let w=a.get(M);return w||(w=new Intl.DateTimeFormat(v,Xt({},b,f)),a.set(M,w)),d?w.formatToParts(c):w.format(c)}const Ap=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Kl(...n){const[e,t,i,s]=n,r={};let o={},a;if(Ee(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw Ps(Ls.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw Ps(Ls.INVALID_ISO_DATE_ARGUMENT)}}else if(x0(e)){if(isNaN(e.getTime()))throw Ps(Ls.INVALID_DATE_ARGUMENT);a=e}else if(At(e))a=e;else throw Ps(Ls.INVALID_ARGUMENT);return Ee(t)?r.key=t:$e(t)&&Object.keys(t).forEach(l=>{Ap.includes(l)?o[l]=t[l]:r[l]=t[l]}),Ee(i)?r.locale=i:$e(i)&&(o=i),$e(s)&&(o=s),[r.key||"",a,r,o]}function tf(n,e,t){const i=n;for(const s in t){const r=`${e}__${s}`;i.__datetimeFormatters.has(r)&&i.__datetimeFormatters.delete(r)}}function nf(n,...e){const{numberFormats:t,unresolving:i,fallbackLocale:s,onWarn:r,localeFallbacker:o}=n,{__numberFormatters:a}=n,[l,c,u,f]=Yl(...e),h=ht(u.missingWarn)?u.missingWarn:n.missingWarn;ht(u.fallbackWarn)?u.fallbackWarn:n.fallbackWarn;const d=!!u.part,_=Ee(u.locale)?u.locale:n.locale,p=o(n,s,_);if(!Ee(l)||l==="")return new Intl.NumberFormat(_,f).format(c);let m={},v,b=null;const g="number format";for(let A=0;A<p.length&&(v=p[A],m=t[v]||{},b=m[l],!$e(b));A++)Xc(n,l,v,h,g);if(!$e(b)||!Ee(v))return i?Ra:l;let M=`${v}__${l}`;Aa(f)||(M=`${M}__${JSON.stringify(f)}`);let w=a.get(M);return w||(w=new Intl.NumberFormat(v,Xt({},b,f)),a.set(M,w)),d?w.formatToParts(c):w.format(c)}const Rp=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Yl(...n){const[e,t,i,s]=n,r={};let o={};if(!At(e))throw Ps(Ls.INVALID_ARGUMENT);const a=e;return Ee(t)?r.key=t:$e(t)&&Object.keys(t).forEach(l=>{Rp.includes(l)?o[l]=t[l]:r[l]=t[l]}),Ee(i)?r.locale=i:$e(i)&&(o=i),$e(s)&&(o=s),[r.key||"",a,r,o]}function sf(n,e,t){const i=n;for(const s in t){const r=`${e}__${s}`;i.__numberFormatters.has(r)&&i.__numberFormatters.delete(r)}}typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Gc().__INTLIFY_PROD_DEVTOOLS__=!1);/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const sx="9.2.2";function rx(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Gc().__INTLIFY_PROD_DEVTOOLS__=!1)}G0.__EXTEND_POINT__;let Cp=gp.__EXTEND_POINT__;const Kt=()=>++Cp,an={UNEXPECTED_RETURN_TYPE:Cp,INVALID_ARGUMENT:Kt(),MUST_BE_CALL_SETUP_TOP:Kt(),NOT_INSLALLED:Kt(),NOT_AVAILABLE_IN_LEGACY_MODE:Kt(),REQUIRED_VALUE:Kt(),INVALID_VALUE:Kt(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:Kt(),NOT_INSLALLED_WITH_PROVIDE:Kt(),UNEXPECTED_ERROR:Kt(),NOT_COMPATIBLE_LEGACY_VUE_I18N:Kt(),BRIDGE_SUPPORT_VUE_2_ONLY:Kt(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:Kt(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:Kt(),__EXTEND_POINT__:Kt()};function dn(n,...e){return _p(n,null,void 0)}const Zl=Di("__transrateVNode"),Jl=Di("__datetimeParts"),Ql=Di("__numberParts"),ox=Di("__setPluralRules");Di("__intlifyMeta");const ax=Di("__injectWithOption");function ec(n){if(!st(n))return n;for(const e in n)if(Hc(n,e))if(!e.includes("."))st(n[e])&&ec(n[e]);else{const t=e.split("."),i=t.length-1;let s=n;for(let r=0;r<i;r++)t[r]in s||(s[t[r]]={}),s=s[t[r]];s[t[i]]=n[e],delete n[e],st(s[t[i]])&&ec(s[t[i]])}return n}function Lp(n,e){const{messages:t,__i18n:i,messageResolver:s,flatJson:r}=e,o=$e(t)?t:_t(i)?{}:{[n]:{}};if(_t(i)&&i.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(o[l]=o[l]||{},Or(c,o[l])):Or(c,o)}else Ee(a)&&Or(JSON.parse(a),o)}),s==null&&r)for(const a in o)Hc(o,a)&&ec(o[a]);return o}const bo=n=>!st(n)||_t(n);function Or(n,e){if(bo(n)||bo(e))throw dn(an.INVALID_VALUE);for(const t in n)Hc(n,t)&&(bo(n[t])||bo(e[t])?e[t]=n[t]:Or(n[t],e[t]))}function Pp(n){return n.type}function lx(n,e,t){let i=st(e.messages)?e.messages:{};"__i18nGlobal"in t&&(i=Lp(n.locale.value,{messages:i,__i18n:t.__i18nGlobal}));const s=Object.keys(i);s.length&&s.forEach(r=>{n.mergeLocaleMessage(r,i[r])});{if(st(e.datetimeFormats)){const r=Object.keys(e.datetimeFormats);r.length&&r.forEach(o=>{n.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(st(e.numberFormats)){const r=Object.keys(e.numberFormats);r.length&&r.forEach(o=>{n.mergeNumberFormat(o,e.numberFormats[o])})}}}function rf(n){return It(uo,null,n,0)}const of="__INTLIFY_META__";let af=0;function lf(n){return(e,t,i,s)=>n(t,i,Ta()||void 0,s)}const cx=()=>{const n=Ta();let e=null;return n&&(e=Pp(n)[of])?{[of]:e}:null};function Ip(n={},e){const{__root:t}=n,i=t===void 0;let s=ht(n.inheritLocale)?n.inheritLocale:!0;const r=Zn(t&&s?t.locale.value:Ee(n.locale)?n.locale:jc),o=Zn(t&&s?t.fallbackLocale.value:Ee(n.fallbackLocale)||_t(n.fallbackLocale)||$e(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:r.value),a=Zn(Lp(r.value,n)),l=Zn($e(n.datetimeFormats)?n.datetimeFormats:{[r.value]:{}}),c=Zn($e(n.numberFormats)?n.numberFormats:{[r.value]:{}});let u=t?t.missingWarn:ht(n.missingWarn)||ra(n.missingWarn)?n.missingWarn:!0,f=t?t.fallbackWarn:ht(n.fallbackWarn)||ra(n.fallbackWarn)?n.fallbackWarn:!0,h=t?t.fallbackRoot:ht(n.fallbackRoot)?n.fallbackRoot:!0,d=!!n.fallbackFormat,_=Ct(n.missing)?n.missing:null,p=Ct(n.missing)?lf(n.missing):null,m=Ct(n.postTranslation)?n.postTranslation:null,v=t?t.warnHtmlMessage:ht(n.warnHtmlMessage)?n.warnHtmlMessage:!0,b=!!n.escapeParameter;const g=t?t.modifiers:$e(n.modifiers)?n.modifiers:{};let M=n.pluralRules||t&&t.pluralRules,w;w=(()=>{i&&Yu(null);const y={version:sx,locale:r.value,fallbackLocale:o.value,messages:a.value,modifiers:g,pluralRules:M,missing:p===null?void 0:p,missingWarn:u,fallbackWarn:f,fallbackFormat:d,unresolving:!0,postTranslation:m===null?void 0:m,warnHtmlMessage:v,escapeParameter:b,messageResolver:n.messageResolver,__meta:{framework:"vue"}};y.datetimeFormats=l.value,y.numberFormats=c.value,y.__datetimeFormatters=$e(w)?w.__datetimeFormatters:void 0,y.__numberFormatters=$e(w)?w.__numberFormatters:void 0;const x=Q0(y);return i&&Yu(x),x})(),hr(w,r.value,o.value);function L(){return[r.value,o.value,a.value,l.value,c.value]}const S=Lt({get:()=>r.value,set:y=>{r.value=y,w.locale=r.value}}),T=Lt({get:()=>o.value,set:y=>{o.value=y,w.fallbackLocale=o.value,hr(w,r.value,y)}}),I=Lt(()=>a.value),F=Lt(()=>l.value),Z=Lt(()=>c.value);function k(){return Ct(m)?m:null}function U(y){m=y,w.postTranslation=y}function j(){return _}function re(y){y!==null&&(p=lf(y)),_=y,w.missing=p}const K=(y,x,N,W,Q,ce)=>{L();let ge;if(__INTLIFY_PROD_DEVTOOLS__)try{Ku(cx()),i||(w.fallbackContext=t?J0():void 0),ge=y(w)}finally{Ku(null),i||(w.fallbackContext=void 0)}else ge=y(w);if(At(ge)&&ge===Ra){const[_e,ee]=x();return t&&h?W(t):Q(_e)}else{if(ce(ge))return ge;throw dn(an.UNEXPECTED_RETURN_TYPE)}};function z(...y){return K(x=>Reflect.apply(Qu,null,[x,...y]),()=>$l(...y),"translate",x=>Reflect.apply(x.t,x,[...y]),x=>x,x=>Ee(x))}function oe(...y){const[x,N,W]=y;if(W&&!st(W))throw dn(an.INVALID_ARGUMENT);return z(x,N,Xt({resolvedMessage:!0},W||{}))}function fe(...y){return K(x=>Reflect.apply(ef,null,[x,...y]),()=>Kl(...y),"datetime format",x=>Reflect.apply(x.d,x,[...y]),()=>qu,x=>Ee(x))}function Me(...y){return K(x=>Reflect.apply(nf,null,[x,...y]),()=>Yl(...y),"number format",x=>Reflect.apply(x.n,x,[...y]),()=>qu,x=>Ee(x))}function H(y){return y.map(x=>Ee(x)||At(x)||ht(x)?rf(String(x)):x)}const xe={normalize:H,interpolate:y=>y,type:"vnode"};function C(...y){return K(x=>{let N;const W=x;try{W.processor=xe,N=Reflect.apply(Qu,null,[W,...y])}finally{W.processor=null}return N},()=>$l(...y),"translate",x=>x[Zl](...y),x=>[rf(x)],x=>_t(x))}function q(...y){return K(x=>Reflect.apply(nf,null,[x,...y]),()=>Yl(...y),"number format",x=>x[Ql](...y),()=>[],x=>Ee(x)||_t(x))}function X(...y){return K(x=>Reflect.apply(ef,null,[x,...y]),()=>Kl(...y),"datetime format",x=>x[Jl](...y),()=>[],x=>Ee(x)||_t(x))}function se(y){M=y,w.pluralRules=M}function de(y,x){const N=Ee(x)?x:r.value,W=E(N);return w.messageResolver(W,y)!==null}function be(y){let x=null;const N=vp(w,o.value,r.value);for(let W=0;W<N.length;W++){const Q=a.value[N[W]]||{},ce=w.messageResolver(Q,y);if(ce!=null){x=ce;break}}return x}function ve(y){const x=be(y);return x??(t?t.tm(y)||{}:{})}function E(y){return a.value[y]||{}}function P(y,x){a.value[y]=x,w.messages=a.value}function G(y,x){a.value[y]=a.value[y]||{},Or(x,a.value[y]),w.messages=a.value}function $(y){return l.value[y]||{}}function ne(y,x){l.value[y]=x,w.datetimeFormats=l.value,tf(w,y,x)}function le(y,x){l.value[y]=Xt(l.value[y]||{},x),w.datetimeFormats=l.value,tf(w,y,x)}function he(y){return c.value[y]||{}}function ae(y,x){c.value[y]=x,w.numberFormats=c.value,sf(w,y,x)}function me(y,x){c.value[y]=Xt(c.value[y]||{},x),w.numberFormats=c.value,sf(w,y,x)}af++,t&&ql&&(Ei(t.locale,y=>{s&&(r.value=y,w.locale=y,hr(w,r.value,o.value))}),Ei(t.fallbackLocale,y=>{s&&(o.value=y,w.fallbackLocale=y,hr(w,r.value,o.value))}));const Y={id:af,locale:S,fallbackLocale:T,get inheritLocale(){return s},set inheritLocale(y){s=y,y&&t&&(r.value=t.locale.value,o.value=t.fallbackLocale.value,hr(w,r.value,o.value))},get availableLocales(){return Object.keys(a.value).sort()},messages:I,get modifiers(){return g},get pluralRules(){return M||{}},get isGlobal(){return i},get missingWarn(){return u},set missingWarn(y){u=y,w.missingWarn=u},get fallbackWarn(){return f},set fallbackWarn(y){f=y,w.fallbackWarn=f},get fallbackRoot(){return h},set fallbackRoot(y){h=y},get fallbackFormat(){return d},set fallbackFormat(y){d=y,w.fallbackFormat=d},get warnHtmlMessage(){return v},set warnHtmlMessage(y){v=y,w.warnHtmlMessage=y},get escapeParameter(){return b},set escapeParameter(y){b=y,w.escapeParameter=y},t:z,getLocaleMessage:E,setLocaleMessage:P,mergeLocaleMessage:G,getPostTranslationHandler:k,setPostTranslationHandler:U,getMissingHandler:j,setMissingHandler:re,[ox]:se};return Y.datetimeFormats=F,Y.numberFormats=Z,Y.rt=oe,Y.te=de,Y.tm=ve,Y.d=fe,Y.n=Me,Y.getDateTimeFormat=$,Y.setDateTimeFormat=ne,Y.mergeDateTimeFormat=le,Y.getNumberFormat=he,Y.setNumberFormat=ae,Y.mergeNumberFormat=me,Y[ax]=n.__injectWithOption,Y[Zl]=C,Y[Jl]=X,Y[Ql]=q,Y}const qc={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:n=>n==="parent"||n==="global",default:"parent"},i18n:{type:Object}};function ux({slots:n},e){return e.length===1&&e[0]==="default"?(n.default?n.default():[]).reduce((i,s)=>i=[...i,..._t(s.children)?s.children:[s]],[]):e.reduce((t,i)=>{const s=n[i];return s&&(t[i]=s()),t},{})}function Dp(n){return Nn}const cf={name:"i18n-t",props:Xt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:n=>At(n)||!isNaN(n)}},qc),setup(n,e){const{slots:t,attrs:i}=e,s=n.i18n||$c({useScope:n.scope,__useComponent:!0});return()=>{const r=Object.keys(t).filter(f=>f!=="_"),o={};n.locale&&(o.locale=n.locale),n.plural!==void 0&&(o.plural=Ee(n.plural)?+n.plural:n.plural);const a=ux(e,r),l=s[Zl](n.keypath,a,o),c=Xt({},i),u=Ee(n.tag)||st(n.tag)?n.tag:Dp();return Ea(u,c,l)}}};function fx(n){return _t(n)&&!Ee(n[0])}function Np(n,e,t,i){const{slots:s,attrs:r}=e;return()=>{const o={part:!0};let a={};n.locale&&(o.locale=n.locale),Ee(n.format)?o.key=n.format:st(n.format)&&(Ee(n.format.key)&&(o.key=n.format.key),a=Object.keys(n.format).reduce((h,d)=>t.includes(d)?Xt({},h,{[d]:n.format[d]}):h,{}));const l=i(n.value,o,a);let c=[o.key];_t(l)?c=l.map((h,d)=>{const _=s[h.type],p=_?_({[h.type]:h.value,index:d,parts:l}):[h.value];return fx(p)&&(p[0].key=`${h.type}-${d}`),p}):Ee(l)&&(c=[l]);const u=Xt({},r),f=Ee(n.tag)||st(n.tag)?n.tag:Dp();return Ea(f,u,c)}}const uf={name:"i18n-n",props:Xt({value:{type:Number,required:!0},format:{type:[String,Object]}},qc),setup(n,e){const t=n.i18n||$c({useScope:"parent",__useComponent:!0});return Np(n,e,Rp,(...i)=>t[Ql](...i))}},ff={name:"i18n-d",props:Xt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},qc),setup(n,e){const t=n.i18n||$c({useScope:"parent",__useComponent:!0});return Np(n,e,Ap,(...i)=>t[Jl](...i))}};function hx(n,e){const t=n;if(n.mode==="composition")return t.__getInstance(e)||n.global;{const i=t.__getInstance(e);return i!=null?i.__composer:n.global.__composer}}function dx(n){const e=o=>{const{instance:a,modifiers:l,value:c}=o;if(!a||!a.$)throw dn(an.UNEXPECTED_ERROR);const u=hx(n,a.$),f=hf(c);return[Reflect.apply(u.t,u,[...df(f)]),u]};return{created:(o,a)=>{const[l,c]=e(a);ql&&n.global===c&&(o.__i18nWatcher=Ei(c.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{ql&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,c=hf(a);o.textContent=Reflect.apply(l.t,l,[...df(c)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function hf(n){if(Ee(n))return{path:n};if($e(n)){if(!("path"in n))throw dn(an.REQUIRED_VALUE,"path");return n}else throw dn(an.INVALID_VALUE)}function df(n){const{path:e,locale:t,args:i,choice:s,plural:r}=n,o={},a=i||{};return Ee(t)&&(o.locale=t),At(s)&&(o.plural=s),At(r)&&(o.plural=r),[e,a,o]}function px(n,e,...t){const i=$e(t[0])?t[0]:{},s=!!i.useI18nComponentName;(ht(i.globalInstall)?i.globalInstall:!0)&&(n.component(s?"i18n":cf.name,cf),n.component(uf.name,uf),n.component(ff.name,ff)),n.directive("t",dx(e))}const mx=Di("global-vue-i18n");function gx(n={},e){const t=ht(n.globalInjection)?n.globalInjection:!0,i=!0,s=new Map,[r,o]=_x(n),a=Di("");function l(f){return s.get(f)||null}function c(f,h){s.set(f,h)}function u(f){s.delete(f)}{const f={get mode(){return"composition"},get allowComposition(){return i},async install(h,...d){h.__VUE_I18N_SYMBOL__=a,h.provide(h.__VUE_I18N_SYMBOL__,f),t&&Tx(h,f.global),px(h,f,...d);const _=h.unmount;h.unmount=()=>{f.dispose(),_()}},get global(){return o},dispose(){r.stop()},__instances:s,__getInstance:l,__setInstance:c,__deleteInstance:u};return f}}function $c(n={}){const e=Ta();if(e==null)throw dn(an.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw dn(an.NOT_INSLALLED);const t=xx(e),i=yx(t),s=Pp(e),r=vx(n,s);if(r==="global")return lx(i,n,s),i;if(r==="parent"){let l=bx(t,e,n.__useComponent);return l==null&&(l=i),l}const o=t;let a=o.__getInstance(e);if(a==null){const l=Xt({},n);"__i18n"in s&&(l.__i18n=s.__i18n),i&&(l.__root=i),a=Ip(l),Mx(o,e),o.__setInstance(e,a)}return a}function _x(n,e,t){const i=Sd();{const s=i.run(()=>Ip(n));if(s==null)throw dn(an.UNEXPECTED_ERROR);return[i,s]}}function xx(n){{const e=kn(n.isCE?mx:n.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw dn(n.isCE?an.NOT_INSLALLED_WITH_PROVIDE:an.UNEXPECTED_ERROR);return e}}function vx(n,e){return Aa(n)?"__i18n"in e?"local":"global":n.useScope?n.useScope:"local"}function yx(n){return n.mode==="composition"?n.global:n.global.__composer}function bx(n,e,t=!1){let i=null;const s=e.root;let r=e.parent;for(;r!=null;){const o=n;if(n.mode==="composition"&&(i=o.__getInstance(r)),i!=null||s===r)break;r=r.parent}return i}function Mx(n,e,t){Sa(()=>{},e),Fc(()=>{n.__deleteInstance(e)},e)}const Sx=["locale","fallbackLocale","availableLocales"],wx=["t","rt","d","n","tm"];function Tx(n,e){const t=Object.create(null);Sx.forEach(i=>{const s=Object.getOwnPropertyDescriptor(e,i);if(!s)throw dn(an.UNEXPECTED_ERROR);const r=Pt(s.value)?{get(){return s.value.value},set(o){s.value.value=o}}:{get(){return s.get&&s.get()}};Object.defineProperty(t,i,r)}),n.config.globalProperties.$i18n=t,wx.forEach(i=>{const s=Object.getOwnPropertyDescriptor(e,i);if(!s||!s.value)throw dn(an.UNEXPECTED_ERROR);Object.defineProperty(n.config.globalProperties,`$${i}`,s)})}K0(C0);Y0(vp);rx();if(__INTLIFY_PROD_DEVTOOLS__){const n=Gc();n.__INTLIFY__=!0,B0(n.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}let gn=0;const Zt={LOADER_PROGRESS:gn++,APP_LOADED:gn++,ATTACH:gn++,RESIZE:gn++,ROUTE_CHANGE:gn++,TICK:gn++,RENDER:gn++,MOUSE_MOVE:gn++,POINTER_UP:gn++,POINTER_DOWN:gn++,KEY_DOWN:gn++},Ex=Object.fromEntries(Object.entries(Zt).map(([n,e])=>[e,`on${n.toLowerCase().split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}`]));var bn,bi,es,ts,ua,Op;const Ds=class{constructor(){ct(this,ua);ct(this,bn,void 0);ct(this,bi,void 0);ct(this,es,void 0);ct(this,ts,void 0);mn(this,bn,new Map),mn(this,bi,new Map),mn(this,es,new Map),mn(this,ts,new Set)}on(e,t,i={}){Ge(this,bn).has(e)||Ge(this,bn).set(e,new Set),(i.once?Ge(this,bi):Ge(this,bn)).get(e).add(t)}off(e,t){if(!Ge(this,bn).has(e))return;Ge(this,bn).get(e).delete(t)}register(e){Ge(this,ts).add(e)}unregister(e){Ge(this,ts).delete(e)}emit(e,...t){if(Ge(this,es).set(e,t),Ge(this,bn).has(e))for(const i of Ge(this,bn).get(e))i.call(this,...t);if(Ge(this,ts).forEach(i=>ki(this,ua,Op).call(this,i,e)),Ge(this,bi).has(e)){for(const i of Ge(this,bi).get(e))i.call(this,...t);Ge(this,bi).delete(e)}}static getInstance(){return Ds.instance||(Ds.instance=new Ds),Ds.instance}};let Ko=Ds;bn=new WeakMap,bi=new WeakMap,es=new WeakMap,ts=new WeakMap,ua=new WeakSet,Op=function(e,t){const i=e[Ex[t]];typeof i=="function"&&Ge(this,es).has(t)&&i.call(e,...Ge(this,es).get(t))},us(Ko,"instance");const ut=Ko.getInstance(),Ax=!1;new URLSearchParams(window.location.search);const Rx=Ax,fs={tablet:768,desktop:1025,large:1441},dr={images:{},textures:{flares:{path:"/web-client/assets/textures/background-flares.jpg",priority:2,callbacks:[]}},envMaps:{envmap:{path:"/web-client/assets/textures/envmap.hdr",critical:!0,callbacks:[]}},models:{pokeball:{path:"/web-client/assets/models/pokeball.glb",priority:1,callbacks:[]}},jsons:{}};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kc="150",Cx=0,pf=1,Lx=2,Fp=1,Px=2,Cr=3,ai=0,on=1,ti=2,Ai=0,ks=1,mf=2,gf=3,_f=4,Ix=5,As=100,Dx=101,Nx=102,xf=103,vf=104,Ox=200,Fx=201,Ux=202,Bx=203,Up=204,Bp=205,kx=206,zx=207,Vx=208,Gx=209,Hx=210,Wx=0,jx=1,Xx=2,tc=3,qx=4,$x=5,Kx=6,Yx=7,kp=0,Zx=1,Jx=2,ri=0,Qx=1,ev=2,tv=3,nv=4,iv=5,zp=300,qs=301,$s=302,oa=303,aa=304,fo=306,Ks=1e3,Yt=1001,la=1002,Et=1003,nc=1004,Yo=1005,xt=1006,Vp=1007,Ci=1008,os=1009,sv=1010,rv=1011,Gp=1012,ov=1013,Zi=1014,Tn=1015,ni=1016,av=1017,lv=1018,zs=1020,cv=1021,hn=1023,uv=1024,fv=1025,ss=1026,Ys=1027,hv=1028,dv=1029,pv=1030,mv=1031,gv=1033,Ya=33776,Za=33777,Ja=33778,Qa=33779,yf=35840,bf=35841,Mf=35842,Sf=35843,_v=36196,wf=37492,Tf=37496,Ef=37808,Af=37809,Rf=37810,Cf=37811,Lf=37812,Pf=37813,If=37814,Df=37815,Nf=37816,Of=37817,Ff=37818,Uf=37819,Bf=37820,kf=37821,el=36492,xv=36283,zf=36284,Vf=36285,Gf=36286,$r=2300,Zs=2301,tl=2302,Hf=2400,Wf=2401,jf=2402,vv=2500,yv=0,Hp=1,ic=2,Li=3e3,Ye=3001,bv=3200,Mv=3201,Wp=0,Sv=1,Dn="srgb",Kr="srgb-linear",jp="display-p3",nl=7680,wv=519,sc=35044,Xf="300 es",rc=1035;class sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qf=1234567;const Fr=Math.PI/180,Yr=180/Math.PI;function Rn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Ft(n,e,t){return Math.max(e,Math.min(t,n))}function Yc(n,e){return(n%e+e)%e}function Tv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Ev(n,e,t){return n!==e?(t-n)/(e-n):0}function Ur(n,e,t){return(1-t)*n+t*e}function Av(n,e,t,i){return Ur(n,e,1-Math.exp(-t*i))}function Rv(n,e=1){return e-Math.abs(Yc(n,e*2)-e)}function Cv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Lv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Pv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Iv(n,e){return n+Math.random()*(e-n)}function Dv(n){return n*(.5-Math.random())}function Nv(n){n!==void 0&&(qf=n);let e=qf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ov(n){return n*Fr}function Fv(n){return n*Yr}function oc(n){return(n&n-1)===0&&n!==0}function Xp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function qp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Uv(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),h=o((e-i)/2),d=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ii(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Bv={DEG2RAD:Fr,RAD2DEG:Yr,generateUUID:Rn,clamp:Ft,euclideanModulo:Yc,mapLinear:Tv,inverseLerp:Ev,lerp:Ur,damp:Av,pingpong:Rv,smoothstep:Cv,smootherstep:Lv,randInt:Pv,randFloat:Iv,randFloatSpread:Dv,seededRandom:Nv,degToRad:Ov,radToDeg:Fv,isPowerOfTwo:oc,ceilPowerOfTwo:Xp,floorPowerOfTwo:qp,setQuaternionFromProperEuler:Uv,normalize:tt,denormalize:ii};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],p=s[0],m=s[3],v=s[6],b=s[1],g=s[4],M=s[7],w=s[2],A=s[5],L=s[8];return r[0]=o*p+a*b+l*w,r[3]=o*m+a*g+l*A,r[6]=o*v+a*M+l*L,r[1]=c*p+u*b+f*w,r[4]=c*m+u*g+f*A,r[7]=c*v+u*M+f*L,r[2]=h*p+d*b+_*w,r[5]=h*m+d*g+_*A,r[8]=h*v+d*M+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,_=t*f+i*h+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=f*p,e[1]=(s*c-u*i)*p,e[2]=(a*i-s*o)*p,e[3]=h*p,e[4]=(u*t-s*l)*p,e[5]=(s*r-a*t)*p,e[6]=d*p,e[7]=(i*l-c*t)*p,e[8]=(o*t-i*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(il.makeScale(e,t)),this}rotate(e){return this.premultiply(il.makeRotation(-e)),this}translate(e,t){return this.premultiply(il.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const il=new jt;function $p(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}class Oi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],d=r[o+1],_=r[o+2],p=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=p;return}if(f!==p||l!==h||c!==d||u!==_){let m=1-a;const v=l*h+c*d+u*_+f*p,b=v>=0?1:-1,g=1-v*v;if(g>Number.EPSILON){const w=Math.sqrt(g),A=Math.atan2(w,v*b);m=Math.sin(m*A)/w,a=Math.sin(a*A)/w}const M=a*b;if(l=l*m+h*M,c=c*m+d*M,u=u*m+_*M,f=f*m+p*M,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],_=r[o+3];return e[t]=a*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-a*d,e[t+2]=c*_+u*d+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),d=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($f.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($f.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*s-a*i,u=l*i+a*t-r*s,f=l*s+r*i-o*t,h=-r*t-o*i-a*s;return this.x=c*l+h*-r+u*-a-f*-o,this.y=u*l+h*-o+f*-r-c*-a,this.z=f*l+h*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sl=new O,$f=new Oi;function Vs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const kv=new jt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),zv=new jt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Si=new O;function Vv(n){return n.convertSRGBToLinear(),Si.set(n.r,n.g,n.b).applyMatrix3(zv),n.setRGB(Si.x,Si.y,Si.z)}function Gv(n){return Si.set(n.r,n.g,n.b).applyMatrix3(kv),n.setRGB(Si.x,Si.y,Si.z).convertLinearToSRGB()}const Hv={[Kr]:n=>n,[Dn]:n=>n.convertSRGBToLinear(),[jp]:Vv},Wv={[Kr]:n=>n,[Dn]:n=>n.convertLinearToSRGB(),[jp]:Gv},zt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Kr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Hv[e],s=Wv[t];if(i===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let hs;class Kp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hs===void 0&&(hs=Zr("canvas")),hs.width=e.width,hs.height=e.height;const i=hs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vs(t[i]/255)*255):t[i]=Vs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Yp{constructor(e=null){this.isSource=!0,this.uuid=Rn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ol(s[o].image)):r.push(ol(s[o]))}else r=ol(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ol(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Kp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jv=0;class Dt extends sr{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=Yt,s=Yt,r=xt,o=Ci,a=hn,l=os,c=Dt.DEFAULT_ANISOTROPY,u=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=Rn(),this.name="",this.source=new Yp(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ks:e.x=e.x-Math.floor(e.x);break;case Yt:e.x=e.x<0?0:1;break;case la:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ks:e.y=e.y-Math.floor(e.y);break;case Yt:e.y=e.y<0?0:1;break;case la:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=zp;Dt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,i=0,s=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],p=l[2],m=l[6],v=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(c+1)/2,M=(d+1)/2,w=(v+1)/2,A=(u+h)/4,L=(f+p)/4,S=(_+m)/4;return g>M&&g>w?g<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(g),s=A/i,r=L/i):M>w?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=A/s,r=S/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=L/r,s=S/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-_)*(m-_)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(f-p)/b,this.z=(h-u)/b,this.w=Math.acos((c+d+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pi extends sr{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new Dt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:xt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Yp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zp extends Dt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Et,this.minFilter=Et,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xv extends Dt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Et,this.minFilter=Et,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rr{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<s&&(s=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,s),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<s&&(s=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,s),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)Gi.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Gi)}else i.boundingBox===null&&i.computeBoundingBox(),al.copy(i.boundingBox),al.applyMatrix4(e.matrixWorld),this.union(al);const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),Mo.subVectors(this.max,pr),ds.subVectors(e.a,pr),ps.subVectors(e.b,pr),ms.subVectors(e.c,pr),fi.subVectors(ps,ds),hi.subVectors(ms,ps),Hi.subVectors(ds,ms);let t=[0,-fi.z,fi.y,0,-hi.z,hi.y,0,-Hi.z,Hi.y,fi.z,0,-fi.x,hi.z,0,-hi.x,Hi.z,0,-Hi.x,-fi.y,fi.x,0,-hi.y,hi.x,0,-Hi.y,Hi.x,0];return!ll(t,ds,ps,ms,Mo)||(t=[1,0,0,0,1,0,0,0,1],!ll(t,ds,ps,ms,Mo))?!1:(So.crossVectors(fi,hi),t=[So.x,So.y,So.z],ll(t,ds,ps,ms,Mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hn=[new O,new O,new O,new O,new O,new O,new O,new O],Gi=new O,al=new rr,ds=new O,ps=new O,ms=new O,fi=new O,hi=new O,Hi=new O,pr=new O,Mo=new O,So=new O,Wi=new O;function ll(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Wi.fromArray(n,r);const a=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),l=e.dot(Wi),c=t.dot(Wi),u=i.dot(Wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const qv=new rr,mr=new O,cl=new O;class or{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):qv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);const t=mr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(mr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(cl)),this.expandByPoint(mr.copy(e.center).sub(cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new O,ul=new O,wo=new O,di=new O,fl=new O,To=new O,hl=new O;class Zc{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ul.copy(e).add(t).multiplyScalar(.5),wo.copy(t).sub(e).normalize(),di.copy(this.origin).sub(ul);const r=e.distanceTo(t)*.5,o=-this.direction.dot(wo),a=di.dot(this.direction),l=-di.dot(wo),c=di.lengthSq(),u=Math.abs(1-o*o);let f,h,d,_;if(u>0)if(f=o*l-a,h=o*a-l,_=r*u,f>=0)if(h>=-_)if(h<=_){const p=1/u;f*=p,h*=p,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ul).addScaledVector(wo,h),d}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const i=Wn.dot(this.direction),s=Wn.dot(Wn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,i,s,r){fl.subVectors(t,e),To.subVectors(i,e),hl.crossVectors(fl,To);let o=this.direction.dot(hl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);const l=a*this.direction.dot(To.crossVectors(di,To));if(l<0)return null;const c=a*this.direction.dot(fl.cross(di));if(c<0||l+c>o)return null;const u=-a*di.dot(hl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,s,r,o,a,l,c,u,f,h,d,_,p,m){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=s,v[1]=r,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=f,v[14]=h,v[3]=d,v[7]=_,v[11]=p,v[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),o=1/gs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,d=o*f,_=a*u,p=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-p*c,t[9]=-a*l,t[2]=p-h*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,p=c*f;t[0]=h+p*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=p+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,p=c*f;t[0]=h-p*a,t[4]=-o*f,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=p-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,_=a*u,p=a*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+p,t[1]=l*f,t[5]=p*c+h,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,_=a*l,p=a*c;t[0]=l*u,t[4]=p-h*f,t[8]=_*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-p*f}else if(e.order==="XZY"){const h=o*l,d=o*c,_=a*l,p=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+p,t[5]=o*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=a*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($v,e,Kv)}lookAt(e,t,i){const s=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),pi.crossVectors(i,sn),pi.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),pi.crossVectors(i,sn)),pi.normalize(),Eo.crossVectors(sn,pi),s[0]=pi.x,s[4]=Eo.x,s[8]=sn.x,s[1]=pi.y,s[5]=Eo.y,s[9]=sn.y,s[2]=pi.z,s[6]=Eo.z,s[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],p=i[6],m=i[10],v=i[14],b=i[3],g=i[7],M=i[11],w=i[15],A=s[0],L=s[4],S=s[8],T=s[12],I=s[1],F=s[5],Z=s[9],k=s[13],U=s[2],j=s[6],re=s[10],K=s[14],z=s[3],oe=s[7],fe=s[11],Me=s[15];return r[0]=o*A+a*I+l*U+c*z,r[4]=o*L+a*F+l*j+c*oe,r[8]=o*S+a*Z+l*re+c*fe,r[12]=o*T+a*k+l*K+c*Me,r[1]=u*A+f*I+h*U+d*z,r[5]=u*L+f*F+h*j+d*oe,r[9]=u*S+f*Z+h*re+d*fe,r[13]=u*T+f*k+h*K+d*Me,r[2]=_*A+p*I+m*U+v*z,r[6]=_*L+p*F+m*j+v*oe,r[10]=_*S+p*Z+m*re+v*fe,r[14]=_*T+p*k+m*K+v*Me,r[3]=b*A+g*I+M*U+w*z,r[7]=b*L+g*F+M*j+w*oe,r[11]=b*S+g*Z+M*re+w*fe,r[15]=b*T+g*k+M*K+w*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],p=e[7],m=e[11],v=e[15];return _*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*d-i*l*d)+p*(+t*l*d-t*c*h+r*o*h-s*o*d+s*c*u-r*l*u)+m*(+t*c*f-t*a*d-r*o*f+i*o*d+r*a*u-i*c*u)+v*(-s*a*u-t*l*f+t*a*h+s*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],p=e[13],m=e[14],v=e[15],b=f*m*c-p*h*c+p*l*d-a*m*d-f*l*v+a*h*v,g=_*h*c-u*m*c-_*l*d+o*m*d+u*l*v-o*h*v,M=u*p*c-_*f*c+_*a*d-o*p*d-u*a*v+o*f*v,w=_*f*l-u*p*l-_*a*h+o*p*h+u*a*m-o*f*m,A=t*b+i*g+s*M+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=b*L,e[1]=(p*h*r-f*m*r-p*s*d+i*m*d+f*s*v-i*h*v)*L,e[2]=(a*m*r-p*l*r+p*s*c-i*m*c-a*s*v+i*l*v)*L,e[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*d-i*l*d)*L,e[4]=g*L,e[5]=(u*m*r-_*h*r+_*s*d-t*m*d-u*s*v+t*h*v)*L,e[6]=(_*l*r-o*m*r-_*s*c+t*m*c+o*s*v-t*l*v)*L,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*d+t*l*d)*L,e[8]=M*L,e[9]=(_*f*r-u*p*r-_*i*d+t*p*d+u*i*v-t*f*v)*L,e[10]=(o*p*r-_*a*r+_*i*c-t*p*c-o*i*v+t*a*v)*L,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*d-t*a*d)*L,e[12]=w*L,e[13]=(u*p*s-_*f*s+_*i*h-t*p*h-u*i*m+t*f*m)*L,e[14]=(_*a*s-o*p*s-_*i*l+t*p*l+o*i*m-t*a*m)*L,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*h+t*a*h)*L,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,_=r*f,p=o*u,m=o*f,v=a*f,b=l*c,g=l*u,M=l*f,w=i.x,A=i.y,L=i.z;return s[0]=(1-(p+v))*w,s[1]=(d+M)*w,s[2]=(_-g)*w,s[3]=0,s[4]=(d-M)*A,s[5]=(1-(h+v))*A,s[6]=(m+b)*A,s[7]=0,s[8]=(_+g)*L,s[9]=(m-b)*L,s[10]=(1-(h+p))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=gs.set(s[0],s[1],s[2]).length();const o=gs.set(s[4],s[5],s[6]).length(),a=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],_n.copy(this);const c=1/r,u=1/o,f=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=f,_n.elements[9]*=f,_n.elements[10]*=f,t.setFromRotationMatrix(_n),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),h=-(o+r)/(o-r),d=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,s,r,o){const a=this.elements,l=1/(t-e),c=1/(i-s),u=1/(o-r),f=(t+e)*l,h=(i+s)*c,d=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const gs=new O,_n=new Ve,$v=new O(0,0,0),Kv=new O(1,1,1),pi=new O,Eo=new O,sn=new O,Kf=new Ve,Yf=new Oi;class Ca{constructor(e=0,t=0,i=0,s=Ca.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Kf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yf.setFromEuler(this),this.setFromQuaternion(Yf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ca.DEFAULT_ORDER="XYZ";class Jp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yv=0;const Zf=new O,_s=new Oi,jn=new Ve,Ao=new O,gr=new O,Zv=new O,Jv=new Oi,Jf=new O(1,0,0),Qf=new O(0,1,0),eh=new O(0,0,1),Qv={type:"added"},th={type:"removed"};class at extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();const e=new O,t=new Ca,i=new Oi,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new jt}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Jp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(Jf,e)}rotateY(e){return this.rotateOnAxis(Qf,e)}rotateZ(e){return this.rotateOnAxis(eh,e)}translateOnAxis(e,t){return Zf.copy(e).applyQuaternion(this.quaternion),this.position.add(Zf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jf,e)}translateY(e){return this.translateOnAxis(Qf,e)}translateZ(e){return this.translateOnAxis(eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ao.copy(e):Ao.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(gr,Ao,this.up):jn.lookAt(Ao,gr,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(jn),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Qv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(th)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(th)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,Zv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,Jv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}at.DEFAULT_UP=new O(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new O,Xn=new O,dl=new O,qn=new O,xs=new O,vs=new O,nh=new O,pl=new O,ml=new O,gl=new O;class Jn{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),xn.subVectors(e,t),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){xn.subVectors(s,t),Xn.subVectors(i,t),dl.subVectors(e,t);const o=xn.dot(xn),a=xn.dot(Xn),l=xn.dot(dl),c=Xn.dot(Xn),u=Xn.dot(dl),f=o*c-a*a;if(f===0)return r.set(-2,-1,-1);const h=1/f,d=(c*l-a*u)*h,_=(o*u-a*l)*h;return r.set(1-d-_,_,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,qn),qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getUV(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,qn),l.set(0,0),l.addScaledVector(r,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l}static isFrontFacing(e,t,i,s){return xn.subVectors(i,t),Xn.subVectors(e,t),xn.cross(Xn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),xn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Jn.getUV(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;xs.subVectors(s,i),vs.subVectors(r,i),pl.subVectors(e,i);const l=xs.dot(pl),c=vs.dot(pl);if(l<=0&&c<=0)return t.copy(i);ml.subVectors(e,s);const u=xs.dot(ml),f=vs.dot(ml);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(xs,o);gl.subVectors(e,r);const d=xs.dot(gl),_=vs.dot(gl);if(_>=0&&d<=_)return t.copy(r);const p=d*c-l*_;if(p<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(vs,a);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return nh.subVectors(r,s),a=(f-u)/(f-u+(d-_)),t.copy(s).addScaledVector(nh,a);const v=1/(m+p+h);return o=p*v,a=h*v,t.copy(i).addScaledVector(xs,o).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ey=0;class zn extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=ks,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Up,this.blendDst=Bp,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=tc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nl,this.stencilZFail=nl,this.stencilZPass=nl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(i.blending=this.blending),this.side!==ai&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function _l(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Fe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=zt.workingColorSpace){return this.r=e,this.g=t,this.b=i,zt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=zt.workingColorSpace){if(e=Yc(e,1),t=Ft(t,0,1),i=Ft(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=_l(o,r,e+1/3),this.g=_l(o,r,e),this.b=_l(o,r,e-1/3)}return zt.toWorkingColorSpace(this,s),this}setStyle(e,t=Dn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,zt.toWorkingColorSpace(this,t),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,zt.toWorkingColorSpace(this,t),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return i(r[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,zt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,zt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dn){const i=Qp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}copyLinearToSRGB(e){return this.r=rl(e.r),this.g=rl(e.g),this.b=rl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return zt.fromWorkingColorSpace(Ot.copy(this),e),Ft(Ot.r*255,0,255)<<16^Ft(Ot.g*255,0,255)<<8^Ft(Ot.b*255,0,255)<<0}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.fromWorkingColorSpace(Ot.copy(this),t);const i=Ot.r,s=Ot.g,r=Ot.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=zt.workingColorSpace){return zt.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Dn){zt.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,s=Ot.b;return e!==Dn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${s*255|0})`}offsetHSL(e,t,i){return this.getHSL(vn),vn.h+=e,vn.s+=t,vn.l+=i,this.setHSL(vn.h,vn.s,vn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vn),e.getHSL(Ro);const i=Ur(vn.h,Ro.h,t),s=Ur(vn.s,Ro.s,t),r=Ur(vn.l,Ro.l,t);return this.setHSL(i,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Fe;Fe.NAMES=Qp;class Ji extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new O,Co=new ke;class qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Co.fromBufferAttribute(this,t),Co.applyMatrix3(e),this.setXY(t,Co.x,Co.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class em extends qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class tm extends qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qt extends qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ty=0;const cn=new Ve,xl=new at,ys=new O,rn=new rr,_r=new rr,Tt=new O;class pn extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($p(e)?tm:em)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new jt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return xl.lookAt(e),xl.updateMatrix(),this.applyMatrix4(xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];_r.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(rn.min,_r.min),rn.expandByPoint(Tt),Tt.addVectors(rn.max,_r.max),rn.expandByPoint(Tt)):(rn.expandByPoint(_r.min),rn.expandByPoint(_r.max))}rn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Tt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Tt.fromBufferAttribute(a,c),l&&(ys.fromBufferAttribute(e,c),Tt.add(ys)),s=Math.max(s,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<a;I++)c[I]=new O,u[I]=new O;const f=new O,h=new O,d=new O,_=new ke,p=new ke,m=new ke,v=new O,b=new O;function g(I,F,Z){f.fromArray(s,I*3),h.fromArray(s,F*3),d.fromArray(s,Z*3),_.fromArray(o,I*2),p.fromArray(o,F*2),m.fromArray(o,Z*2),h.sub(f),d.sub(f),p.sub(_),m.sub(_);const k=1/(p.x*m.y-m.x*p.y);isFinite(k)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(k),b.copy(d).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(k),c[I].add(v),c[F].add(v),c[Z].add(v),u[I].add(b),u[F].add(b),u[Z].add(b))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let I=0,F=M.length;I<F;++I){const Z=M[I],k=Z.start,U=Z.count;for(let j=k,re=k+U;j<re;j+=3)g(i[j+0],i[j+1],i[j+2])}const w=new O,A=new O,L=new O,S=new O;function T(I){L.fromArray(r,I*3),S.copy(L);const F=c[I];w.copy(F),w.sub(L.multiplyScalar(L.dot(F))).normalize(),A.crossVectors(S,F);const k=A.dot(u[I])<0?-1:1;l[I*4]=w.x,l[I*4+1]=w.y,l[I*4+2]=w.z,l[I*4+3]=k}for(let I=0,F=M.length;I<F;++I){const Z=M[I],k=Z.start,U=Z.count;for(let j=k,re=k+U;j<re;j+=3)T(i[j+0]),T(i[j+1]),T(i[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,f=new O;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),p=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let p=0,m=l.length;p<m;p++){a.isInterleavedBufferAttribute?d=l[p]*a.data.stride+a.offset:d=l[p]*u;for(let v=0;v<u;v++)h[_++]=c[d++]}return new qt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ih=new Ve,In=new Zc,Lo=new or,sh=new O,xr=new O,vr=new O,yr=new O,vl=new O,Po=new O,Io=new ke,Do=new ke,No=new ke,yl=new O,Oo=new O;class Jt extends at{constructor(e=new pn,t=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Po.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(vl.fromBufferAttribute(f,e),o?Po.addScaledVector(vl,u):Po.addScaledVector(vl.sub(t),u))}t.add(Po)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(r),In.copy(e.ray).recast(e.near),Lo.containsPoint(In.origin)===!1&&(In.intersectSphere(Lo,sh)===null||In.origin.distanceToSquared(sh)>(e.far-e.near)**2))||(ih.copy(r).invert(),In.copy(e.ray).applyMatrix4(ih),i.boundingBox!==null&&In.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv2,f=i.groups,h=i.drawRange;if(a!==null)if(Array.isArray(s))for(let d=0,_=f.length;d<_;d++){const p=f[d],m=s[p.materialIndex],v=Math.max(p.start,h.start),b=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let g=v,M=b;g<M;g+=3){const w=a.getX(g),A=a.getX(g+1),L=a.getX(g+2);o=Fo(this,m,e,In,c,u,w,A,L),o&&(o.faceIndex=Math.floor(g/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const d=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let p=d,m=_;p<m;p+=3){const v=a.getX(p),b=a.getX(p+1),g=a.getX(p+2);o=Fo(this,s,e,In,c,u,v,b,g),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let d=0,_=f.length;d<_;d++){const p=f[d],m=s[p.materialIndex],v=Math.max(p.start,h.start),b=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let g=v,M=b;g<M;g+=3){const w=g,A=g+1,L=g+2;o=Fo(this,m,e,In,c,u,w,A,L),o&&(o.faceIndex=Math.floor(g/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const d=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let p=d,m=_;p<m;p+=3){const v=p,b=p+1,g=p+2;o=Fo(this,s,e,In,c,u,v,b,g),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function ny(n,e,t,i,s,r,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ai,a),l===null)return null;Oo.copy(a),Oo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Oo);return c<t.near||c>t.far?null:{distance:c,point:Oo.clone(),object:n}}function Fo(n,e,t,i,s,r,o,a,l){n.getVertexPosition(o,xr),n.getVertexPosition(a,vr),n.getVertexPosition(l,yr);const c=ny(n,e,t,i,xr,vr,yr,yl);if(c){s&&(Io.fromBufferAttribute(s,o),Do.fromBufferAttribute(s,a),No.fromBufferAttribute(s,l),c.uv=Jn.getUV(yl,xr,vr,yr,Io,Do,No,new ke)),r&&(Io.fromBufferAttribute(r,o),Do.fromBufferAttribute(r,a),No.fromBufferAttribute(r,l),c.uv2=Jn.getUV(yl,xr,vr,yr,Io,Do,No,new ke));const u={a:o,b:a,c:l,normal:new O,materialIndex:0};Jn.getNormal(xr,vr,yr,u.normal),c.face=u}return c}class ho extends pn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(f,2));function _(p,m,v,b,g,M,w,A,L,S,T){const I=M/L,F=w/S,Z=M/2,k=w/2,U=A/2,j=L+1,re=S+1;let K=0,z=0;const oe=new O;for(let fe=0;fe<re;fe++){const Me=fe*F-k;for(let H=0;H<j;H++){const ue=H*I-Z;oe[p]=ue*b,oe[m]=Me*g,oe[v]=U,c.push(oe.x,oe.y,oe.z),oe[p]=0,oe[m]=0,oe[v]=A>0?1:-1,u.push(oe.x,oe.y,oe.z),f.push(H/L),f.push(1-fe/S),K+=1}}for(let fe=0;fe<S;fe++)for(let Me=0;Me<L;Me++){const H=h+Me+j*fe,ue=h+Me+j*(fe+1),xe=h+(Me+1)+j*(fe+1),C=h+(Me+1)+j*fe;l.push(H,ue,C),l.push(ue,xe,C),z+=6}a.addGroup(d,z,T),d+=z,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Js(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ht(n){const e={};for(let t=0;t<n.length;t++){const i=Js(n[t]);for(const s in i)e[s]=i[s]}return e}function iy(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function nm(n){return n.getRenderTarget()===null&&n.outputEncoding===Ye?Dn:Kr}const sy={clone:Js,merge:Ht};var ry=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ry,this.fragmentShader=oy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=iy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class im extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Wt extends im{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bs=-90,Ms=1;class ay extends at{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const s=new Wt(bs,Ms,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new Wt(bs,Ms,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Wt(bs,Ms,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Wt(bs,Ms,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Wt(bs,Ms,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Wt(bs,Ms,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=ri,e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,s),e.setRenderTarget(i,1),e.render(t,r),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class sm extends Dt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:qs,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ly extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new sm(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ho(5,5,5),r=new Ii({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Ai});r.uniforms.tEquirect.value=t;const o=new Jt(s,r),a=t.minFilter;return t.minFilter===Ci&&(t.minFilter=xt),new ay(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const bl=new O,cy=new O,uy=new jt;class Xi{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=bl.subVectors(i,t).cross(cy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(bl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||uy.getNormalMatrix(e),s=this.coplanarPoint(bl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ss=new or,Uo=new O;class Jc{constructor(e=new Xi,t=new Xi,i=new Xi,s=new Xi,r=new Xi,o=new Xi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],d=i[9],_=i[10],p=i[11],m=i[12],v=i[13],b=i[14],g=i[15];return t[0].setComponents(a-s,f-l,p-h,g-m).normalize(),t[1].setComponents(a+s,f+l,p+h,g+m).normalize(),t[2].setComponents(a+r,f+c,p+d,g+v).normalize(),t[3].setComponents(a-r,f-c,p-d,g-v).normalize(),t[4].setComponents(a-o,f-u,p-_,g-b).normalize(),t[5].setComponents(a+o,f+u,p+_,g+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSprite(e){return Ss.center.set(0,0,0),Ss.radius=.7071067811865476,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Uo.x=s.normal.x>0?e.max.x:e.min.x,Uo.y=s.normal.y>0?e.max.y:e.min.y,Uo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function fy(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,u){const f=c.array,h=c.usage,d=n.createBuffer();n.bindBuffer(u,d),n.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const h=u.array,d=u.updateRange;n.bindBuffer(f,c),d.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,s(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class Qc extends pn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,d=[],_=[],p=[],m=[];for(let v=0;v<u;v++){const b=v*h-o;for(let g=0;g<c;g++){const M=g*f-r;_.push(M,-b,0),p.push(0,0,1),m.push(g/a),m.push(1-v/l)}}for(let v=0;v<l;v++)for(let b=0;b<a;b++){const g=b+c*v,M=b+c*(v+1),w=b+1+c*(v+1),A=b+1+c*v;d.push(g,M,A),d.push(M,w,A)}this.setIndex(d),this.setAttribute("position",new Qt(_,3)),this.setAttribute("normal",new Qt(p,3)),this.setAttribute("uv",new Qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.width,e.height,e.widthSegments,e.heightSegments)}}var hy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,dy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,py=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,my=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_y=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xy="vec3 transformed = vec3( position );",vy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yy=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,by=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,My=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ay=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ly=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Py=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Iy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Dy=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ny=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Oy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Fy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,By="gl_FragColor = linearToOutputTexel( gl_FragColor );",ky=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zy=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Vy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gy=`#ifdef USE_ENVMAP
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
#endif`,Hy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
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
#endif`,jy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$y=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ky=`#ifdef USE_GRADIENTMAP
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
}`,Yy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,tb=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,nb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ib=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ob=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ab=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,lb=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ub=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,fb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,db=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,pb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,mb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_b=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Sb=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,wb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Tb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Eb=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Pb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ib=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Db=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Nb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ob=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Ub=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Wb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$b=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Kb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yb=`#ifdef USE_SKINNING
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
#endif`,Zb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,nM=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,iM=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,sM=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,rM=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,oM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,aM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,lM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,cM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fM=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,hM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,_M=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,xM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,vM=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,MM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wM=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,TM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,AM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,CM=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,PM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,IM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,DM=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,OM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,UM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,kM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zM=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,VM=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,GM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,HM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ue={alphamap_fragment:hy,alphamap_pars_fragment:dy,alphatest_fragment:py,alphatest_pars_fragment:my,aomap_fragment:gy,aomap_pars_fragment:_y,begin_vertex:xy,beginnormal_vertex:vy,bsdfs:yy,iridescence_fragment:by,bumpmap_pars_fragment:My,clipping_planes_fragment:Sy,clipping_planes_pars_fragment:wy,clipping_planes_pars_vertex:Ty,clipping_planes_vertex:Ey,color_fragment:Ay,color_pars_fragment:Ry,color_pars_vertex:Cy,color_vertex:Ly,common:Py,cube_uv_reflection_fragment:Iy,defaultnormal_vertex:Dy,displacementmap_pars_vertex:Ny,displacementmap_vertex:Oy,emissivemap_fragment:Fy,emissivemap_pars_fragment:Uy,encodings_fragment:By,encodings_pars_fragment:ky,envmap_fragment:zy,envmap_common_pars_fragment:Vy,envmap_pars_fragment:Gy,envmap_pars_vertex:Hy,envmap_physical_pars_fragment:tb,envmap_vertex:Wy,fog_vertex:jy,fog_pars_vertex:Xy,fog_fragment:qy,fog_pars_fragment:$y,gradientmap_pars_fragment:Ky,lightmap_fragment:Yy,lightmap_pars_fragment:Zy,lights_lambert_fragment:Jy,lights_lambert_pars_fragment:Qy,lights_pars_begin:eb,lights_toon_fragment:nb,lights_toon_pars_fragment:ib,lights_phong_fragment:sb,lights_phong_pars_fragment:rb,lights_physical_fragment:ob,lights_physical_pars_fragment:ab,lights_fragment_begin:lb,lights_fragment_maps:cb,lights_fragment_end:ub,logdepthbuf_fragment:fb,logdepthbuf_pars_fragment:hb,logdepthbuf_pars_vertex:db,logdepthbuf_vertex:pb,map_fragment:mb,map_pars_fragment:gb,map_particle_fragment:_b,map_particle_pars_fragment:xb,metalnessmap_fragment:vb,metalnessmap_pars_fragment:yb,morphcolor_vertex:bb,morphnormal_vertex:Mb,morphtarget_pars_vertex:Sb,morphtarget_vertex:wb,normal_fragment_begin:Tb,normal_fragment_maps:Eb,normal_pars_fragment:Ab,normal_pars_vertex:Rb,normal_vertex:Cb,normalmap_pars_fragment:Lb,clearcoat_normal_fragment_begin:Pb,clearcoat_normal_fragment_maps:Ib,clearcoat_pars_fragment:Db,iridescence_pars_fragment:Nb,output_fragment:Ob,packing:Fb,premultiplied_alpha_fragment:Ub,project_vertex:Bb,dithering_fragment:kb,dithering_pars_fragment:zb,roughnessmap_fragment:Vb,roughnessmap_pars_fragment:Gb,shadowmap_pars_fragment:Hb,shadowmap_pars_vertex:Wb,shadowmap_vertex:jb,shadowmask_pars_fragment:Xb,skinbase_vertex:qb,skinning_pars_vertex:$b,skinning_vertex:Kb,skinnormal_vertex:Yb,specularmap_fragment:Zb,specularmap_pars_fragment:Jb,tonemapping_fragment:Qb,tonemapping_pars_fragment:eM,transmission_fragment:tM,transmission_pars_fragment:nM,uv_pars_fragment:iM,uv_pars_vertex:sM,uv_vertex:rM,uv2_pars_fragment:oM,uv2_pars_vertex:aM,uv2_vertex:lM,worldpos_vertex:cM,background_vert:uM,background_frag:fM,backgroundCube_vert:hM,backgroundCube_frag:dM,cube_vert:pM,cube_frag:mM,depth_vert:gM,depth_frag:_M,distanceRGBA_vert:xM,distanceRGBA_frag:vM,equirect_vert:yM,equirect_frag:bM,linedashed_vert:MM,linedashed_frag:SM,meshbasic_vert:wM,meshbasic_frag:TM,meshlambert_vert:EM,meshlambert_frag:AM,meshmatcap_vert:RM,meshmatcap_frag:CM,meshnormal_vert:LM,meshnormal_frag:PM,meshphong_vert:IM,meshphong_frag:DM,meshphysical_vert:NM,meshphysical_frag:OM,meshtoon_vert:FM,meshtoon_frag:UM,points_vert:BM,points_frag:kM,shadow_vert:zM,shadow_frag:VM,sprite_vert:GM,sprite_frag:HM},ye={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new jt},uv2Transform:{value:new jt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new jt}}},Un={basic:{uniforms:Ht([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Ht([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Ht([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Ht([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Ht([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Ht([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Ht([ye.points,ye.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Ht([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Ht([ye.common,ye.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Ht([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Ht([ye.sprite,ye.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Ht([ye.common,ye.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Ht([ye.lights,ye.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Un.physical={uniforms:Ht([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ke(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Bo={r:0,b:0,g:0};function WM(n,e,t,i,s,r,o){const a=new Fe(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function _(m,v){let b=!1,g=v.isScene===!0?v.background:null;g&&g.isTexture&&(g=(v.backgroundBlurriness>0?t:e).get(g));const M=n.xr,w=M.getSession&&M.getSession();w&&w.environmentBlendMode==="additive"&&(g=null),g===null?p(a,l):g&&g.isColor&&(p(g,1),b=!0),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===fo)?(u===void 0&&(u=new Jt(new ho(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Js(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,L,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=g.encoding!==Ye,(f!==g||h!==g.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=g,h=g.version,d=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new Jt(new Qc(2,2),new Ii({name:"BackgroundMaterial",uniforms:Js(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=g.encoding!==Ye,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||h!==g.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=g,h=g.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function p(m,v){m.getRGB(Bo,nm(n)),i.buffers.color.setClear(Bo.r,Bo.g,Bo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(m,v=1){a.set(m),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,p(a,l)},render:_}}function jM(n,e,t,i){const s=n.getParameter(34921),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function f(U,j,re,K,z){let oe=!1;if(o){const fe=p(K,re,j);c!==fe&&(c=fe,d(c.object)),oe=v(U,K,re,z),oe&&b(U,K,re,z)}else{const fe=j.wireframe===!0;(c.geometry!==K.id||c.program!==re.id||c.wireframe!==fe)&&(c.geometry=K.id,c.program=re.id,c.wireframe=fe,oe=!0)}z!==null&&t.update(z,34963),(oe||u)&&(u=!1,S(U,j,re,K),z!==null&&n.bindBuffer(34963,t.get(z).buffer))}function h(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function d(U){return i.isWebGL2?n.bindVertexArray(U):r.bindVertexArrayOES(U)}function _(U){return i.isWebGL2?n.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function p(U,j,re){const K=re.wireframe===!0;let z=a[U.id];z===void 0&&(z={},a[U.id]=z);let oe=z[j.id];oe===void 0&&(oe={},z[j.id]=oe);let fe=oe[K];return fe===void 0&&(fe=m(h()),oe[K]=fe),fe}function m(U){const j=[],re=[],K=[];for(let z=0;z<s;z++)j[z]=0,re[z]=0,K[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:re,attributeDivisors:K,object:U,attributes:{},index:null}}function v(U,j,re,K){const z=c.attributes,oe=j.attributes;let fe=0;const Me=re.getAttributes();for(const H in Me)if(Me[H].location>=0){const xe=z[H];let C=oe[H];if(C===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(C=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(C=U.instanceColor)),xe===void 0||xe.attribute!==C||C&&xe.data!==C.data)return!0;fe++}return c.attributesNum!==fe||c.index!==K}function b(U,j,re,K){const z={},oe=j.attributes;let fe=0;const Me=re.getAttributes();for(const H in Me)if(Me[H].location>=0){let xe=oe[H];xe===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(xe=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(xe=U.instanceColor));const C={};C.attribute=xe,xe&&xe.data&&(C.data=xe.data),z[H]=C,fe++}c.attributes=z,c.attributesNum=fe,c.index=K}function g(){const U=c.newAttributes;for(let j=0,re=U.length;j<re;j++)U[j]=0}function M(U){w(U,0)}function w(U,j){const re=c.newAttributes,K=c.enabledAttributes,z=c.attributeDivisors;re[U]=1,K[U]===0&&(n.enableVertexAttribArray(U),K[U]=1),z[U]!==j&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,j),z[U]=j)}function A(){const U=c.newAttributes,j=c.enabledAttributes;for(let re=0,K=j.length;re<K;re++)j[re]!==U[re]&&(n.disableVertexAttribArray(re),j[re]=0)}function L(U,j,re,K,z,oe){i.isWebGL2===!0&&(re===5124||re===5125)?n.vertexAttribIPointer(U,j,re,z,oe):n.vertexAttribPointer(U,j,re,K,z,oe)}function S(U,j,re,K){if(i.isWebGL2===!1&&(U.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const z=K.attributes,oe=re.getAttributes(),fe=j.defaultAttributeValues;for(const Me in oe){const H=oe[Me];if(H.location>=0){let ue=z[Me];if(ue===void 0&&(Me==="instanceMatrix"&&U.instanceMatrix&&(ue=U.instanceMatrix),Me==="instanceColor"&&U.instanceColor&&(ue=U.instanceColor)),ue!==void 0){const xe=ue.normalized,C=ue.itemSize,q=t.get(ue);if(q===void 0)continue;const X=q.buffer,se=q.type,de=q.bytesPerElement;if(ue.isInterleavedBufferAttribute){const be=ue.data,ve=be.stride,E=ue.offset;if(be.isInstancedInterleavedBuffer){for(let P=0;P<H.locationSize;P++)w(H.location+P,be.meshPerAttribute);U.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let P=0;P<H.locationSize;P++)M(H.location+P);n.bindBuffer(34962,X);for(let P=0;P<H.locationSize;P++)L(H.location+P,C/H.locationSize,se,xe,ve*de,(E+C/H.locationSize*P)*de)}else{if(ue.isInstancedBufferAttribute){for(let be=0;be<H.locationSize;be++)w(H.location+be,ue.meshPerAttribute);U.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let be=0;be<H.locationSize;be++)M(H.location+be);n.bindBuffer(34962,X);for(let be=0;be<H.locationSize;be++)L(H.location+be,C/H.locationSize,se,xe,C*de,C/H.locationSize*be*de)}}else if(fe!==void 0){const xe=fe[Me];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(H.location,xe);break;case 3:n.vertexAttrib3fv(H.location,xe);break;case 4:n.vertexAttrib4fv(H.location,xe);break;default:n.vertexAttrib1fv(H.location,xe)}}}}A()}function T(){Z();for(const U in a){const j=a[U];for(const re in j){const K=j[re];for(const z in K)_(K[z].object),delete K[z];delete j[re]}delete a[U]}}function I(U){if(a[U.id]===void 0)return;const j=a[U.id];for(const re in j){const K=j[re];for(const z in K)_(K[z].object),delete K[z];delete j[re]}delete a[U.id]}function F(U){for(const j in a){const re=a[j];if(re[U.id]===void 0)continue;const K=re[U.id];for(const z in K)_(K[z].object),delete K[z];delete re[U.id]}}function Z(){k(),u=!0,c!==l&&(c=l,d(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Z,resetDefaultState:k,dispose:T,releaseStatesOfGeometry:I,releaseStatesOfProgram:F,initAttributes:g,enableAttribute:M,disableUnusedAttributes:A}}function XM(n,e,t,i){const s=i.isWebGL2;let r;function o(c){r=c}function a(c,u){n.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let h,d;if(s)h=n,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](r,c,u,f),t.update(u,r,f)}this.setMode=o,this.render=a,this.renderInstances=l}function qM(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(L){if(L==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),d=n.getParameter(3379),_=n.getParameter(34076),p=n.getParameter(34921),m=n.getParameter(36347),v=n.getParameter(36348),b=n.getParameter(36349),g=h>0,M=o||e.has("OES_texture_float"),w=g&&M,A=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:g,floatFragmentTextures:M,floatVertexTextures:w,maxSamples:A}}function $M(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Xi,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,p=f.clipIntersection,m=f.clipShadows,v=n.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const b=r?0:i,g=b*4;let M=v.clippingState||null;l.value=M,M=u(_,h,g,d);for(let w=0;w!==g;++w)M[w]=t[w];v.clippingState=M,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,_){const p=f!==null?f.length:0;let m=null;if(p!==0){if(m=l.value,_!==!0||m===null){const v=d+p*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<v)&&(m=new Float32Array(v));for(let g=0,M=d;g!==p;++g,M+=4)o.copy(f[g]).applyMatrix4(b,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function KM(n){let e=new WeakMap;function t(o,a){return a===oa?o.mapping=qs:a===aa&&(o.mapping=$s),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===oa||a===aa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ly(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class La extends im{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Is=4,rh=[.125,.215,.35,.446,.526,.582],Yi=20,Ml=new La,oh=new Fe;let Sl=null;const qi=(1+Math.sqrt(5))/2,ws=1/qi,ah=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,qi,ws),new O(0,qi,-ws),new O(ws,0,qi),new O(-ws,0,qi),new O(qi,ws,0),new O(-qi,ws,0)];class ac{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Sl=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sl),e.scissorTest=!1,ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sl=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xt,minFilter:xt,generateMipmaps:!1,type:ni,format:hn,encoding:Li,depthBuffer:!1},s=lh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YM(r)),this._blurMaterial=ZM(r,e,t)}return s}_compileMaterial(e){const t=new Jt(this._lodPlanes[0],e);this._renderer.compile(t,Ml)}_sceneToCubeUV(e,t,i,s){const a=new Wt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(oh),u.toneMapping=ri,u.autoClear=!1;const d=new Ji({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),_=new Jt(new ho,d);let p=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(oh),p=!0);for(let v=0;v<6;v++){const b=v%3;b===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):b===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const g=this._cubeSize;ko(s,b*g,v>2?g:0,g,g),u.setRenderTarget(s),p&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===qs||e.mapping===$s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ko(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ml)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ah[(s-1)%ah.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Jt(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Yi-1),p=r/_,m=isFinite(r)?1+Math.floor(u*p):Yi;m>Yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yi}`);const v=[];let b=0;for(let L=0;L<Yi;++L){const S=L/p,T=Math.exp(-S*S/2);v.push(T),L===0?b+=T:L<m&&(b+=2*T)}for(let L=0;L<v.length;L++)v[L]=v[L]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=v,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const M=this._sizeLods[s],w=3*M*(s>g-Is?s-g+Is:0),A=4*(this._cubeSize-M);ko(t,w,A,3*M,2*M),l.setRenderTarget(t),l.render(f,Ml)}}function YM(n){const e=[],t=[],i=[];let s=n;const r=n-Is+1+rh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Is?l=rh[o-n+Is-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,p=3,m=2,v=1,b=new Float32Array(p*_*d),g=new Float32Array(m*_*d),M=new Float32Array(v*_*d);for(let A=0;A<d;A++){const L=A%3*2/3-1,S=A>2?0:-1,T=[L,S,0,L+2/3,S,0,L+2/3,S+1,0,L,S,0,L+2/3,S+1,0,L,S+1,0];b.set(T,p*_*A),g.set(h,m*_*A);const I=[A,A,A,A,A,A];M.set(I,v*_*A)}const w=new pn;w.setAttribute("position",new qt(b,p)),w.setAttribute("uv",new qt(g,m)),w.setAttribute("faceIndex",new qt(M,v)),e.push(w),s>Is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function lh(n,e,t){const i=new Pi(n,e,t);return i.texture.mapping=fo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ko(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function ZM(n,e,t){const i=new Float32Array(Yi),s=new O(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:eu(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function ch(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function uh(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function eu(){return`

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
	`}function JM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===oa||l===aa,u=l===qs||l===$s;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new ac(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new ac(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function QM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function eS(n,e,t,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],34962);const d=f.morphAttributes;for(const _ in d){const p=d[_];for(let m=0,v=p.length;m<v;m++)e.update(p[m],34962)}}function c(f){const h=[],d=f.index,_=f.attributes.position;let p=0;if(d!==null){const b=d.array;p=d.version;for(let g=0,M=b.length;g<M;g+=3){const w=b[g+0],A=b[g+1],L=b[g+2];h.push(w,A,A,L,L,w)}}else{const b=_.array;p=_.version;for(let g=0,M=b.length/3-1;g<M;g+=3){const w=g+0,A=g+1,L=g+2;h.push(w,A,A,L,L,w)}}const m=new($p(h)?tm:em)(h,1);m.version=p;const v=r.get(f);v&&e.remove(v),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function tS(n,e,t,i){const s=i.isWebGL2;let r;function o(h){r=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,d){n.drawElements(r,d,a,h*l),t.update(d,r,1)}function f(h,d,_){if(_===0)return;let p,m;if(s)p=n,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,d,a,h*l,_),t.update(d,r,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function nS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function iS(n,e){return n[0]-e[0]}function sS(n,e){return Math.abs(e[1])-Math.abs(n[1])}function rS(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new nt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=d!==void 0?d.length:0;let p=r.get(u);if(p===void 0||p.count!==_){let U=function(){Z.dispose(),r.delete(u),u.removeEventListener("dispose",U)};p!==void 0&&p.texture.dispose();const b=u.morphAttributes.position!==void 0,g=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let S=0;b===!0&&(S=1),g===!0&&(S=2),M===!0&&(S=3);let T=u.attributes.position.count*S,I=1;T>e.maxTextureSize&&(I=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const F=new Float32Array(T*I*4*_),Z=new Zp(F,T,I,_);Z.type=Tn,Z.needsUpdate=!0;const k=S*4;for(let j=0;j<_;j++){const re=w[j],K=A[j],z=L[j],oe=T*I*4*j;for(let fe=0;fe<re.count;fe++){const Me=fe*k;b===!0&&(o.fromBufferAttribute(re,fe),F[oe+Me+0]=o.x,F[oe+Me+1]=o.y,F[oe+Me+2]=o.z,F[oe+Me+3]=0),g===!0&&(o.fromBufferAttribute(K,fe),F[oe+Me+4]=o.x,F[oe+Me+5]=o.y,F[oe+Me+6]=o.z,F[oe+Me+7]=0),M===!0&&(o.fromBufferAttribute(z,fe),F[oe+Me+8]=o.x,F[oe+Me+9]=o.y,F[oe+Me+10]=o.z,F[oe+Me+11]=z.itemSize===4?o.w:1)}}p={count:_,texture:Z,size:new ke(T,I)},r.set(u,p),u.addEventListener("dispose",U)}let m=0;for(let b=0;b<h.length;b++)m+=h[b];const v=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const d=h===void 0?0:h.length;let _=i[u.id];if(_===void 0||_.length!==d){_=[];for(let g=0;g<d;g++)_[g]=[g,0];i[u.id]=_}for(let g=0;g<d;g++){const M=_[g];M[0]=g,M[1]=h[g]}_.sort(sS);for(let g=0;g<8;g++)g<d&&_[g][1]?(a[g][0]=_[g][0],a[g][1]=_[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(iS);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let v=0;for(let g=0;g<8;g++){const M=a[g],w=M[0],A=M[1];w!==Number.MAX_SAFE_INTEGER&&A?(p&&u.getAttribute("morphTarget"+g)!==p[w]&&u.setAttribute("morphTarget"+g,p[w]),m&&u.getAttribute("morphNormal"+g)!==m[w]&&u.setAttribute("morphNormal"+g,m[w]),s[g]=A,v+=A):(p&&u.hasAttribute("morphTarget"+g)===!0&&u.deleteAttribute("morphTarget"+g),m&&u.hasAttribute("morphNormal"+g)===!0&&u.deleteAttribute("morphNormal"+g),s[g]=0)}const b=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function oS(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const om=new Dt,am=new Zp,lm=new Xv,cm=new sm,fh=[],hh=[],dh=new Float32Array(16),ph=new Float32Array(9),mh=new Float32Array(4);function ar(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=fh[s];if(r===void 0&&(r=new Float32Array(s),fh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Pa(n,e){let t=hh[e];t===void 0&&(t=new Int32Array(e),hh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function aS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function lS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function cS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function uS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function fS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,i))return;mh.set(i),n.uniformMatrix2fv(this.addr,!1,mh),bt(t,i)}}function hS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,i))return;ph.set(i),n.uniformMatrix3fv(this.addr,!1,ph),bt(t,i)}}function dS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,i))return;dh.set(i),n.uniformMatrix4fv(this.addr,!1,dh),bt(t,i)}}function pS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function mS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function gS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function _S(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function xS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function vS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function yS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function bS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function MS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||om,s)}function SS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||lm,s)}function wS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||cm,s)}function TS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||am,s)}function ES(n){switch(n){case 5126:return aS;case 35664:return lS;case 35665:return cS;case 35666:return uS;case 35674:return fS;case 35675:return hS;case 35676:return dS;case 5124:case 35670:return pS;case 35667:case 35671:return mS;case 35668:case 35672:return gS;case 35669:case 35673:return _S;case 5125:return xS;case 36294:return vS;case 36295:return yS;case 36296:return bS;case 35678:case 36198:case 36298:case 36306:case 35682:return MS;case 35679:case 36299:case 36307:return SS;case 35680:case 36300:case 36308:case 36293:return wS;case 36289:case 36303:case 36311:case 36292:return TS}}function AS(n,e){n.uniform1fv(this.addr,e)}function RS(n,e){const t=ar(e,this.size,2);n.uniform2fv(this.addr,t)}function CS(n,e){const t=ar(e,this.size,3);n.uniform3fv(this.addr,t)}function LS(n,e){const t=ar(e,this.size,4);n.uniform4fv(this.addr,t)}function PS(n,e){const t=ar(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function IS(n,e){const t=ar(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function DS(n,e){const t=ar(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function NS(n,e){n.uniform1iv(this.addr,e)}function OS(n,e){n.uniform2iv(this.addr,e)}function FS(n,e){n.uniform3iv(this.addr,e)}function US(n,e){n.uniform4iv(this.addr,e)}function BS(n,e){n.uniform1uiv(this.addr,e)}function kS(n,e){n.uniform2uiv(this.addr,e)}function zS(n,e){n.uniform3uiv(this.addr,e)}function VS(n,e){n.uniform4uiv(this.addr,e)}function GS(n,e,t){const i=this.cache,s=e.length,r=Pa(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||om,r[o])}function HS(n,e,t){const i=this.cache,s=e.length,r=Pa(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||lm,r[o])}function WS(n,e,t){const i=this.cache,s=e.length,r=Pa(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||cm,r[o])}function jS(n,e,t){const i=this.cache,s=e.length,r=Pa(t,s);yt(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||am,r[o])}function XS(n){switch(n){case 5126:return AS;case 35664:return RS;case 35665:return CS;case 35666:return LS;case 35674:return PS;case 35675:return IS;case 35676:return DS;case 5124:case 35670:return NS;case 35667:case 35671:return OS;case 35668:case 35672:return FS;case 35669:case 35673:return US;case 5125:return BS;case 36294:return kS;case 36295:return zS;case 36296:return VS;case 35678:case 36198:case 36298:case 36306:case 35682:return GS;case 35679:case 36299:case 36307:return HS;case 35680:case 36300:case 36308:case 36293:return WS;case 36289:case 36303:case 36311:case 36292:return jS}}class qS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=ES(t.type)}}class $S{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=XS(t.type)}}class KS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const wl=/(\w+)(\])?(\[|\.)?/g;function gh(n,e){n.seq.push(e),n.map[e.id]=e}function YS(n,e,t){const i=n.name,s=i.length;for(wl.lastIndex=0;;){const r=wl.exec(i),o=wl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){gh(t,c===void 0?new qS(a,n,e):new $S(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new KS(a),gh(t,f)),t=f}}}class Zo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);YS(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function _h(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let ZS=0;function JS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function QS(n){switch(n){case Li:return["Linear","( value )"];case Ye:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function xh(n,e,t){const i=n.getShaderParameter(e,35713),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+JS(n.getShaderSource(e),o)}else return s}function ew(n,e){const t=QS(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function tw(n,e){let t;switch(e){case Qx:t="Linear";break;case ev:t="Reinhard";break;case tv:t="OptimizedCineon";break;case nv:t="ACESFilmic";break;case iv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function nw(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Lr).join(`
`)}function iw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sw(n,e){const t={},i=n.getProgramParameter(e,35721);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Lr(n){return n!==""}function vh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rw=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(n){return n.replace(rw,ow)}function ow(n,e){const t=Ue[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return lc(t)}const aw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bh(n){return n.replace(aw,lw)}function lw(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Fp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Px?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Cr&&(e="SHADOWMAP_TYPE_VSM"),e}function uw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qs:case $s:e="ENVMAP_TYPE_CUBE";break;case fo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function hw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kp:e="ENVMAP_BLENDING_MULTIPLY";break;case Zx:e="ENVMAP_BLENDING_MIX";break;case Jx:e="ENVMAP_BLENDING_ADD";break}return e}function dw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function pw(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=cw(t),c=uw(t),u=fw(t),f=hw(t),h=dw(t),d=t.isWebGL2?"":nw(t),_=iw(r),p=s.createProgram();let m,v,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[_].filter(Lr).join(`
`),m.length>0&&(m+=`
`),v=[d,_].filter(Lr).join(`
`),v.length>0&&(v+=`
`)):(m=[Mh(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),v=[d,Mh(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?Ue.tonemapping_pars_fragment:"",t.toneMapping!==ri?tw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.encodings_pars_fragment,ew("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lr).join(`
`)),o=lc(o),o=vh(o,t),o=yh(o,t),a=lc(a),a=vh(a,t),a=yh(a,t),o=bh(o),a=bh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["#define varying in",t.glslVersion===Xf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const g=b+m+o,M=b+v+a,w=_h(s,35633,g),A=_h(s,35632,M);if(s.attachShader(p,w),s.attachShader(p,A),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p),n.debug.checkShaderErrors){const T=s.getProgramInfoLog(p).trim(),I=s.getShaderInfoLog(w).trim(),F=s.getShaderInfoLog(A).trim();let Z=!0,k=!0;if(s.getProgramParameter(p,35714)===!1){Z=!1;const U=xh(s,w,"vertex"),j=xh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+U+`
`+j)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(I===""||F==="")&&(k=!1);k&&(this.diagnostics={runnable:Z,programLog:T,vertexShader:{log:I,prefix:m},fragmentShader:{log:F,prefix:v}})}s.deleteShader(w),s.deleteShader(A);let L;this.getUniforms=function(){return L===void 0&&(L=new Zo(s,p)),L};let S;return this.getAttributes=function(){return S===void 0&&(S=sw(s,p)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=ZS++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=A,this}let mw=0;class gw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _w(e),t.set(e,i)),i}}class _w{constructor(e){this.id=mw++,this.code=e,this.usedTimes=0}}function xw(n,e,t,i,s,r,o){const a=new Jp,l=new gw,c=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S,T,I,F,Z){const k=F.fog,U=Z.geometry,j=S.isMeshStandardMaterial?F.environment:null,re=(S.isMeshStandardMaterial?t:e).get(S.envMap||j),K=re&&re.mapping===fo?re.image.height:null,z=_[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const oe=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,fe=oe!==void 0?oe.length:0;let Me=0;U.morphAttributes.position!==void 0&&(Me=1),U.morphAttributes.normal!==void 0&&(Me=2),U.morphAttributes.color!==void 0&&(Me=3);let H,ue,xe,C;if(z){const ve=Un[z];H=ve.vertexShader,ue=ve.fragmentShader}else H=S.vertexShader,ue=S.fragmentShader,l.update(S),xe=l.getVertexShaderID(S),C=l.getFragmentShaderID(S);const q=n.getRenderTarget(),X=S.alphaTest>0,se=S.clearcoat>0,de=S.iridescence>0;return{isWebGL2:u,shaderID:z,shaderName:S.type,vertexShader:H,fragmentShader:ue,defines:S.defines,customVertexShaderID:xe,customFragmentShaderID:C,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:h,outputEncoding:q===null?n.outputEncoding:q.isXRRenderTarget===!0?q.texture.encoding:Li,map:!!S.map,matcap:!!S.matcap,envMap:!!re,envMapMode:re&&re.mapping,envMapCubeUVHeight:K,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===Sv,tangentSpaceNormalMap:S.normalMapType===Wp,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===Ye,clearcoat:se,clearcoatMap:se&&!!S.clearcoatMap,clearcoatRoughnessMap:se&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:se&&!!S.clearcoatNormalMap,iridescence:de,iridescenceMap:de&&!!S.iridescenceMap,iridescenceThicknessMap:de&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===ks,alphaMap:!!S.alphaMap,alphaTest:X,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!U.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(S.map||S.bumpMap||S.normalMap||S.specularMap||S.alphaMap||S.emissiveMap||S.roughnessMap||S.metalnessMap||S.clearcoatNormalMap||S.iridescenceMap||S.iridescenceThicknessMap||S.transmission>0||S.transmissionMap||S.thicknessMap||S.specularIntensityMap||S.specularColorMap||S.sheen>0||S.sheenColorMap||S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!k,useFog:S.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:f,skinning:Z.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Me,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:S.toneMapped?n.toneMapping:ri,useLegacyLights:n.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ti,flipSided:S.side===on,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function m(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)T.push(I),T.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(v(T,S),b(T,S),T.push(n.outputEncoding)),T.push(S.customProgramCacheKey),T.join()}function v(S,T){S.push(T.precision),S.push(T.outputEncoding),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.combine),S.push(T.vertexUvs),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function b(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),S.push(a.mask)}function g(S){const T=_[S.type];let I;if(T){const F=Un[T];I=sy.clone(F.uniforms)}else I=S.uniforms;return I}function M(S,T){let I;for(let F=0,Z=c.length;F<Z;F++){const k=c[F];if(k.cacheKey===T){I=k,++I.usedTimes;break}}return I===void 0&&(I=new pw(n,T,S,r),c.push(I)),I}function w(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function A(S){l.remove(S)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:g,acquireProgram:M,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:L}}function vw(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function yw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Sh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function wh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,h,d,_,p,m){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:p,group:m},n[e]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=d,v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=p,v.group=m),e++,v}function a(f,h,d,_,p,m){const v=o(f,h,d,_,p,m);d.transmission>0?i.push(v):d.transparent===!0?s.push(v):t.push(v)}function l(f,h,d,_,p,m){const v=o(f,h,d,_,p,m);d.transmission>0?i.unshift(v):d.transparent===!0?s.unshift(v):t.unshift(v)}function c(f,h){t.length>1&&t.sort(f||yw),i.length>1&&i.sort(h||Sh),s.length>1&&s.sort(h||Sh)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function bw(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new wh,n.set(i,[o])):s>=r.length?(o=new wh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Mw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Fe};break;case"SpotLight":t={position:new O,direction:new O,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function Sw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ww=0;function Tw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ew(n,e){const t=new Mw,i=Sw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new O);const r=new O,o=new Ve,a=new Ve;function l(u,f){let h=0,d=0,_=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let p=0,m=0,v=0,b=0,g=0,M=0,w=0,A=0,L=0,S=0;u.sort(Tw);const T=f===!0?Math.PI:1;for(let F=0,Z=u.length;F<Z;F++){const k=u[F],U=k.color,j=k.intensity,re=k.distance,K=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=U.r*j*T,d+=U.g*j*T,_+=U.b*j*T;else if(k.isLightProbe)for(let z=0;z<9;z++)s.probe[z].addScaledVector(k.sh.coefficients[z],j);else if(k.isDirectionalLight){const z=t.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity*T),k.castShadow){const oe=k.shadow,fe=i.get(k);fe.shadowBias=oe.bias,fe.shadowNormalBias=oe.normalBias,fe.shadowRadius=oe.radius,fe.shadowMapSize=oe.mapSize,s.directionalShadow[p]=fe,s.directionalShadowMap[p]=K,s.directionalShadowMatrix[p]=k.shadow.matrix,M++}s.directional[p]=z,p++}else if(k.isSpotLight){const z=t.get(k);z.position.setFromMatrixPosition(k.matrixWorld),z.color.copy(U).multiplyScalar(j*T),z.distance=re,z.coneCos=Math.cos(k.angle),z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),z.decay=k.decay,s.spot[v]=z;const oe=k.shadow;if(k.map&&(s.spotLightMap[L]=k.map,L++,oe.updateMatrices(k),k.castShadow&&S++),s.spotLightMatrix[v]=oe.matrix,k.castShadow){const fe=i.get(k);fe.shadowBias=oe.bias,fe.shadowNormalBias=oe.normalBias,fe.shadowRadius=oe.radius,fe.shadowMapSize=oe.mapSize,s.spotShadow[v]=fe,s.spotShadowMap[v]=K,A++}v++}else if(k.isRectAreaLight){const z=t.get(k);z.color.copy(U).multiplyScalar(j),z.halfWidth.set(k.width*.5,0,0),z.halfHeight.set(0,k.height*.5,0),s.rectArea[b]=z,b++}else if(k.isPointLight){const z=t.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity*T),z.distance=k.distance,z.decay=k.decay,k.castShadow){const oe=k.shadow,fe=i.get(k);fe.shadowBias=oe.bias,fe.shadowNormalBias=oe.normalBias,fe.shadowRadius=oe.radius,fe.shadowMapSize=oe.mapSize,fe.shadowCameraNear=oe.camera.near,fe.shadowCameraFar=oe.camera.far,s.pointShadow[m]=fe,s.pointShadowMap[m]=K,s.pointShadowMatrix[m]=k.shadow.matrix,w++}s.point[m]=z,m++}else if(k.isHemisphereLight){const z=t.get(k);z.skyColor.copy(k.color).multiplyScalar(j*T),z.groundColor.copy(k.groundColor).multiplyScalar(j*T),s.hemi[g]=z,g++}}b>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_FLOAT_1,s.rectAreaLTC2=ye.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_HALF_1,s.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=d,s.ambient[2]=_;const I=s.hash;(I.directionalLength!==p||I.pointLength!==m||I.spotLength!==v||I.rectAreaLength!==b||I.hemiLength!==g||I.numDirectionalShadows!==M||I.numPointShadows!==w||I.numSpotShadows!==A||I.numSpotMaps!==L)&&(s.directional.length=p,s.spot.length=v,s.rectArea.length=b,s.point.length=m,s.hemi.length=g,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=A+L-S,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=S,I.directionalLength=p,I.pointLength=m,I.spotLength=v,I.rectAreaLength=b,I.hemiLength=g,I.numDirectionalShadows=M,I.numPointShadows=w,I.numSpotShadows=A,I.numSpotMaps=L,s.version=ww++)}function c(u,f){let h=0,d=0,_=0,p=0,m=0;const v=f.matrixWorldInverse;for(let b=0,g=u.length;b<g;b++){const M=u[b];if(M.isDirectionalLight){const w=s.directional[h];w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(v),h++}else if(M.isSpotLight){const w=s.spot[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(v),w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(v),_++}else if(M.isRectAreaLight){const w=s.rectArea[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(v),a.identity(),o.copy(M.matrixWorld),o.premultiply(v),a.extractRotation(o),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(M.isPointLight){const w=s.point[d];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(v),d++}else if(M.isHemisphereLight){const w=s.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(v),m++}}}return{setup:l,setupView:c,state:s}}function Th(n,e){const t=new Ew(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(f){i.push(f)}function a(f){s.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Aw(n,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Th(n,e),t.set(r,[l])):o>=a.length?(l=new Th(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class Rw extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cw extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pw=`uniform sampler2D shadow_pass;
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
}`;function Iw(n,e,t){let i=new Jc;const s=new ke,r=new ke,o=new nt,a=new Rw({depthPacking:Mv}),l=new Cw,c={},u=t.maxTextureSize,f={[ai]:on,[on]:ai,[ti]:ti},h=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Lw,fragmentShader:Pw}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new pn;_.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Jt(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fp,this.render=function(M,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const L=n.getRenderTarget(),S=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Ai),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let F=0,Z=M.length;F<Z;F++){const k=M[F],U=k.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const j=U.getFrameExtents();if(s.multiply(j),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,U.mapSize.y=r.y)),U.map===null){const K=this.type!==Cr?{minFilter:Et,magFilter:Et}:{};U.map=new Pi(s.x,s.y,K),U.map.texture.name=k.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const re=U.getViewportCount();for(let K=0;K<re;K++){const z=U.getViewport(K);o.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),I.viewport(o),U.updateMatrices(k,K),i=U.getFrustum(),g(w,A,U.camera,k,this.type)}U.isPointLightShadow!==!0&&this.type===Cr&&v(U,A),U.needsUpdate=!1}m.needsUpdate=!1,n.setRenderTarget(L,S,T)};function v(M,w){const A=e.update(p);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Pi(s.x,s.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(w,null,A,h,p,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(w,null,A,d,p,null)}function b(M,w,A,L,S,T){let I=null;const F=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(F!==void 0)I=F;else if(I=A.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Z=I.uuid,k=w.uuid;let U=c[Z];U===void 0&&(U={},c[Z]=U);let j=U[k];j===void 0&&(j=I.clone(),U[k]=j),I=j}return I.visible=w.visible,I.wireframe=w.wireframe,T===Cr?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:f[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaTest,I.map=w.map,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,A.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(A.matrixWorld),I.nearDistance=L,I.farDistance=S),I}function g(M,w,A,L,S){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===Cr)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);const F=e.update(M),Z=M.material;if(Array.isArray(Z)){const k=F.groups;for(let U=0,j=k.length;U<j;U++){const re=k[U],K=Z[re.materialIndex];if(K&&K.visible){const z=b(M,K,L,A.near,A.far,S);n.renderBufferDirect(A,null,F,z,M,re)}}}else if(Z.visible){const k=b(M,Z,L,A.near,A.far,S);n.renderBufferDirect(A,null,F,k,M,null)}}const I=M.children;for(let F=0,Z=I.length;F<Z;F++)g(I[F],w,A,L,S)}}function Dw(n,e,t){const i=t.isWebGL2;function s(){let D=!1;const te=new nt;let pe=null;const we=new nt(0,0,0,0);return{setMask:function(Ae){pe!==Ae&&!D&&(n.colorMask(Ae,Ae,Ae,Ae),pe=Ae)},setLocked:function(Ae){D=Ae},setClear:function(Ae,rt,St,Bt,Ln){Ln===!0&&(Ae*=Bt,rt*=Bt,St*=Bt),te.set(Ae,rt,St,Bt),we.equals(te)===!1&&(n.clearColor(Ae,rt,St,Bt),we.copy(te))},reset:function(){D=!1,pe=null,we.set(-1,0,0,0)}}}function r(){let D=!1,te=null,pe=null,we=null;return{setTest:function(Ae){Ae?X(2929):se(2929)},setMask:function(Ae){te!==Ae&&!D&&(n.depthMask(Ae),te=Ae)},setFunc:function(Ae){if(pe!==Ae){switch(Ae){case Wx:n.depthFunc(512);break;case jx:n.depthFunc(519);break;case Xx:n.depthFunc(513);break;case tc:n.depthFunc(515);break;case qx:n.depthFunc(514);break;case $x:n.depthFunc(518);break;case Kx:n.depthFunc(516);break;case Yx:n.depthFunc(517);break;default:n.depthFunc(515)}pe=Ae}},setLocked:function(Ae){D=Ae},setClear:function(Ae){we!==Ae&&(n.clearDepth(Ae),we=Ae)},reset:function(){D=!1,te=null,pe=null,we=null}}}function o(){let D=!1,te=null,pe=null,we=null,Ae=null,rt=null,St=null,Bt=null,Ln=null;return{setTest:function(ft){D||(ft?X(2960):se(2960))},setMask:function(ft){te!==ft&&!D&&(n.stencilMask(ft),te=ft)},setFunc:function(ft,ln,Pn){(pe!==ft||we!==ln||Ae!==Pn)&&(n.stencilFunc(ft,ln,Pn),pe=ft,we=ln,Ae=Pn)},setOp:function(ft,ln,Pn){(rt!==ft||St!==ln||Bt!==Pn)&&(n.stencilOp(ft,ln,Pn),rt=ft,St=ln,Bt=Pn)},setLocked:function(ft){D=ft},setClear:function(ft){Ln!==ft&&(n.clearStencil(ft),Ln=ft)},reset:function(){D=!1,te=null,pe=null,we=null,Ae=null,rt=null,St=null,Bt=null,Ln=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,f=new WeakMap;let h={},d={},_=new WeakMap,p=[],m=null,v=!1,b=null,g=null,M=null,w=null,A=null,L=null,S=null,T=!1,I=null,F=null,Z=null,k=null,U=null;const j=n.getParameter(35661);let re=!1,K=0;const z=n.getParameter(7938);z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(z)[1]),re=K>=1):z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),re=K>=2);let oe=null,fe={};const Me=n.getParameter(3088),H=n.getParameter(2978),ue=new nt().fromArray(Me),xe=new nt().fromArray(H);function C(D,te,pe){const we=new Uint8Array(4),Ae=n.createTexture();n.bindTexture(D,Ae),n.texParameteri(D,10241,9728),n.texParameteri(D,10240,9728);for(let rt=0;rt<pe;rt++)n.texImage2D(te+rt,0,6408,1,1,0,6408,5121,we);return Ae}const q={};q[3553]=C(3553,3553,1),q[34067]=C(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),X(2929),l.setFunc(tc),ne(!1),le(pf),X(2884),G(Ai);function X(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function se(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function de(D,te){return d[D]!==te?(n.bindFramebuffer(D,te),d[D]=te,i&&(D===36009&&(d[36160]=te),D===36160&&(d[36009]=te)),!0):!1}function be(D,te){let pe=p,we=!1;if(D)if(pe=_.get(te),pe===void 0&&(pe=[],_.set(te,pe)),D.isWebGLMultipleRenderTargets){const Ae=D.texture;if(pe.length!==Ae.length||pe[0]!==36064){for(let rt=0,St=Ae.length;rt<St;rt++)pe[rt]=36064+rt;pe.length=Ae.length,we=!0}}else pe[0]!==36064&&(pe[0]=36064,we=!0);else pe[0]!==1029&&(pe[0]=1029,we=!0);we&&(t.isWebGL2?n.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function ve(D){return m!==D?(n.useProgram(D),m=D,!0):!1}const E={[As]:32774,[Dx]:32778,[Nx]:32779};if(i)E[xf]=32775,E[vf]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(E[xf]=D.MIN_EXT,E[vf]=D.MAX_EXT)}const P={[Ox]:0,[Fx]:1,[Ux]:768,[Up]:770,[Hx]:776,[Vx]:774,[kx]:772,[Bx]:769,[Bp]:771,[Gx]:775,[zx]:773};function G(D,te,pe,we,Ae,rt,St,Bt){if(D===Ai){v===!0&&(se(3042),v=!1);return}if(v===!1&&(X(3042),v=!0),D!==Ix){if(D!==b||Bt!==T){if((g!==As||A!==As)&&(n.blendEquation(32774),g=As,A=As),Bt)switch(D){case ks:n.blendFuncSeparate(1,771,1,771);break;case mf:n.blendFunc(1,1);break;case gf:n.blendFuncSeparate(0,769,0,1);break;case _f:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ks:n.blendFuncSeparate(770,771,1,771);break;case mf:n.blendFunc(770,1);break;case gf:n.blendFuncSeparate(0,769,0,1);break;case _f:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,w=null,L=null,S=null,b=D,T=Bt}return}Ae=Ae||te,rt=rt||pe,St=St||we,(te!==g||Ae!==A)&&(n.blendEquationSeparate(E[te],E[Ae]),g=te,A=Ae),(pe!==M||we!==w||rt!==L||St!==S)&&(n.blendFuncSeparate(P[pe],P[we],P[rt],P[St]),M=pe,w=we,L=rt,S=St),b=D,T=!1}function $(D,te){D.side===ti?se(2884):X(2884);let pe=D.side===on;te&&(pe=!pe),ne(pe),D.blending===ks&&D.transparent===!1?G(Ai):G(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const we=D.stencilWrite;c.setTest(we),we&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ae(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?X(32926):se(32926)}function ne(D){I!==D&&(D?n.frontFace(2304):n.frontFace(2305),I=D)}function le(D){D!==Cx?(X(2884),D!==F&&(D===pf?n.cullFace(1029):D===Lx?n.cullFace(1028):n.cullFace(1032))):se(2884),F=D}function he(D){D!==Z&&(re&&n.lineWidth(D),Z=D)}function ae(D,te,pe){D?(X(32823),(k!==te||U!==pe)&&(n.polygonOffset(te,pe),k=te,U=pe)):se(32823)}function me(D){D?X(3089):se(3089)}function Y(D){D===void 0&&(D=33984+j-1),oe!==D&&(n.activeTexture(D),oe=D)}function y(D,te,pe){pe===void 0&&(oe===null?pe=33984+j-1:pe=oe);let we=fe[pe];we===void 0&&(we={type:void 0,texture:void 0},fe[pe]=we),(we.type!==D||we.texture!==te)&&(oe!==pe&&(n.activeTexture(pe),oe=pe),n.bindTexture(D,te||q[D]),we.type=D,we.texture=te)}function x(){const D=fe[oe];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function N(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(D){ue.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ue.copy(D))}function Se(D){xe.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),xe.copy(D))}function Ie(D,te){let pe=f.get(te);pe===void 0&&(pe=new WeakMap,f.set(te,pe));let we=pe.get(D);we===void 0&&(we=n.getUniformBlockIndex(te,D.name),pe.set(D,we))}function it(D,te){const we=f.get(te).get(D);u.get(te)!==we&&(n.uniformBlockBinding(te,we,D.__bindingPointIndex),u.set(te,we))}function Mt(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},oe=null,fe={},d={},_=new WeakMap,p=[],m=null,v=!1,b=null,g=null,M=null,w=null,A=null,L=null,S=null,T=!1,I=null,F=null,Z=null,k=null,U=null,ue.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:X,disable:se,bindFramebuffer:de,drawBuffers:be,useProgram:ve,setBlending:G,setMaterial:$,setFlipSided:ne,setCullFace:le,setLineWidth:he,setPolygonOffset:ae,setScissorTest:me,activeTexture:Y,bindTexture:y,unbindTexture:x,compressedTexImage2D:N,compressedTexImage3D:W,texImage2D:Te,texImage3D:Ce,updateUBOMapping:Ie,uniformBlockBinding:it,texStorage2D:ee,texStorage3D:Re,texSubImage2D:Q,texSubImage3D:ce,compressedTexSubImage2D:ge,compressedTexSubImage3D:_e,scissor:Le,viewport:Se,reset:Mt}}function Nw(n,e,t,i,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,f=s.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(y,x){return v?new OffscreenCanvas(y,x):Zr("canvas")}function g(y,x,N,W){let Q=1;if((y.width>W||y.height>W)&&(Q=W/Math.max(y.width,y.height)),Q<1||x===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const ce=x?qp:Math.floor,ge=ce(Q*y.width),_e=ce(Q*y.height);p===void 0&&(p=b(ge,_e));const ee=N?b(ge,_e):p;return ee.width=ge,ee.height=_e,ee.getContext("2d").drawImage(y,0,0,ge,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+ge+"x"+_e+")."),ee}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function M(y){return oc(y.width)&&oc(y.height)}function w(y){return a?!1:y.wrapS!==Yt||y.wrapT!==Yt||y.minFilter!==Et&&y.minFilter!==xt}function A(y,x){return y.generateMipmaps&&x&&y.minFilter!==Et&&y.minFilter!==xt}function L(y){n.generateMipmap(y)}function S(y,x,N,W,Q=!1){if(a===!1)return x;if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ce=x;return x===6403&&(N===5126&&(ce=33326),N===5131&&(ce=33325),N===5121&&(ce=33321)),x===33319&&(N===5126&&(ce=33328),N===5131&&(ce=33327),N===5121&&(ce=33323)),x===6408&&(N===5126&&(ce=34836),N===5131&&(ce=34842),N===5121&&(ce=W===Ye&&Q===!1?35907:32856),N===32819&&(ce=32854),N===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function T(y,x,N){return A(y,N)===!0||y.isFramebufferTexture&&y.minFilter!==Et&&y.minFilter!==xt?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function I(y){return y===Et||y===nc||y===Yo?9728:9729}function F(y){const x=y.target;x.removeEventListener("dispose",F),k(x),x.isVideoTexture&&_.delete(x)}function Z(y){const x=y.target;x.removeEventListener("dispose",Z),j(x)}function k(y){const x=i.get(y);if(x.__webglInit===void 0)return;const N=y.source,W=m.get(N);if(W){const Q=W[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&U(y),Object.keys(W).length===0&&m.delete(N)}i.remove(y)}function U(y){const x=i.get(y);n.deleteTexture(x.__webglTexture);const N=y.source,W=m.get(N);delete W[x.__cacheKey],o.memory.textures--}function j(y){const x=y.texture,N=i.get(y),W=i.get(x);if(W.__webglTexture!==void 0&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)n.deleteFramebuffer(N.__webglFramebuffer[Q]),N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[Q]);else{if(n.deleteFramebuffer(N.__webglFramebuffer),N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let Q=0;Q<N.__webglColorRenderbuffer.length;Q++)N.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[Q]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let Q=0,ce=x.length;Q<ce;Q++){const ge=i.get(x[Q]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(x[Q])}i.remove(x),i.remove(y)}let re=0;function K(){re=0}function z(){const y=re;return y>=l&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+l),re+=1,y}function oe(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.encoding),x.join()}function fe(y,x){const N=i.get(y);if(y.isVideoTexture&&me(y),y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){const W=y.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(N,y,x);return}}t.bindTexture(3553,N.__webglTexture,33984+x)}function Me(y,x){const N=i.get(y);if(y.version>0&&N.__version!==y.version){se(N,y,x);return}t.bindTexture(35866,N.__webglTexture,33984+x)}function H(y,x){const N=i.get(y);if(y.version>0&&N.__version!==y.version){se(N,y,x);return}t.bindTexture(32879,N.__webglTexture,33984+x)}function ue(y,x){const N=i.get(y);if(y.version>0&&N.__version!==y.version){de(N,y,x);return}t.bindTexture(34067,N.__webglTexture,33984+x)}const xe={[Ks]:10497,[Yt]:33071,[la]:33648},C={[Et]:9728,[nc]:9984,[Yo]:9986,[xt]:9729,[Vp]:9985,[Ci]:9987};function q(y,x,N){if(N?(n.texParameteri(y,10242,xe[x.wrapS]),n.texParameteri(y,10243,xe[x.wrapT]),(y===32879||y===35866)&&n.texParameteri(y,32882,xe[x.wrapR]),n.texParameteri(y,10240,C[x.magFilter]),n.texParameteri(y,10241,C[x.minFilter])):(n.texParameteri(y,10242,33071),n.texParameteri(y,10243,33071),(y===32879||y===35866)&&n.texParameteri(y,32882,33071),(x.wrapS!==Yt||x.wrapT!==Yt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(y,10240,I(x.magFilter)),n.texParameteri(y,10241,I(x.minFilter)),x.minFilter!==Et&&x.minFilter!==xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const W=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Et||x.minFilter!==Yo&&x.minFilter!==Ci||x.type===Tn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===ni&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(y,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function X(y,x){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",F));const W=x.source;let Q=m.get(W);Q===void 0&&(Q={},m.set(W,Q));const ce=oe(x);if(ce!==y.__cacheKey){Q[ce]===void 0&&(Q[ce]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),Q[ce].usedTimes++;const ge=Q[y.__cacheKey];ge!==void 0&&(Q[y.__cacheKey].usedTimes--,ge.usedTimes===0&&U(x)),y.__cacheKey=ce,y.__webglTexture=Q[ce].texture}return N}function se(y,x,N){let W=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=35866),x.isData3DTexture&&(W=32879);const Q=X(y,x),ce=x.source;t.bindTexture(W,y.__webglTexture,33984+N);const ge=i.get(ce);if(ce.version!==ge.__version||Q===!0){t.activeTexture(33984+N),n.pixelStorei(37440,x.flipY),n.pixelStorei(37441,x.premultiplyAlpha),n.pixelStorei(3317,x.unpackAlignment),n.pixelStorei(37443,0);const _e=w(x)&&M(x.image)===!1;let ee=g(x.image,_e,!1,u);ee=Y(x,ee);const Re=M(ee)||a,Te=r.convert(x.format,x.encoding);let Ce=r.convert(x.type),Le=S(x.internalFormat,Te,Ce,x.encoding,x.isVideoTexture);q(W,x,Re);let Se;const Ie=x.mipmaps,it=a&&x.isVideoTexture!==!0,Mt=ge.__version===void 0||Q===!0,D=T(x,ee,Re);if(x.isDepthTexture)Le=6402,a?x.type===Tn?Le=36012:x.type===Zi?Le=33190:x.type===zs?Le=35056:Le=33189:x.type===Tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===ss&&Le===6402&&x.type!==Gp&&x.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Zi,Ce=r.convert(x.type)),x.format===Ys&&Le===6402&&(Le=34041,x.type!==zs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=zs,Ce=r.convert(x.type))),Mt&&(it?t.texStorage2D(3553,1,Le,ee.width,ee.height):t.texImage2D(3553,0,Le,ee.width,ee.height,0,Te,Ce,null));else if(x.isDataTexture)if(Ie.length>0&&Re){it&&Mt&&t.texStorage2D(3553,D,Le,Ie[0].width,Ie[0].height);for(let te=0,pe=Ie.length;te<pe;te++)Se=Ie[te],it?t.texSubImage2D(3553,te,0,0,Se.width,Se.height,Te,Ce,Se.data):t.texImage2D(3553,te,Le,Se.width,Se.height,0,Te,Ce,Se.data);x.generateMipmaps=!1}else it?(Mt&&t.texStorage2D(3553,D,Le,ee.width,ee.height),t.texSubImage2D(3553,0,0,0,ee.width,ee.height,Te,Ce,ee.data)):t.texImage2D(3553,0,Le,ee.width,ee.height,0,Te,Ce,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){it&&Mt&&t.texStorage3D(35866,D,Le,Ie[0].width,Ie[0].height,ee.depth);for(let te=0,pe=Ie.length;te<pe;te++)Se=Ie[te],x.format!==hn?Te!==null?it?t.compressedTexSubImage3D(35866,te,0,0,0,Se.width,Se.height,ee.depth,Te,Se.data,0,0):t.compressedTexImage3D(35866,te,Le,Se.width,Se.height,ee.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?t.texSubImage3D(35866,te,0,0,0,Se.width,Se.height,ee.depth,Te,Ce,Se.data):t.texImage3D(35866,te,Le,Se.width,Se.height,ee.depth,0,Te,Ce,Se.data)}else{it&&Mt&&t.texStorage2D(3553,D,Le,Ie[0].width,Ie[0].height);for(let te=0,pe=Ie.length;te<pe;te++)Se=Ie[te],x.format!==hn?Te!==null?it?t.compressedTexSubImage2D(3553,te,0,0,Se.width,Se.height,Te,Se.data):t.compressedTexImage2D(3553,te,Le,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?t.texSubImage2D(3553,te,0,0,Se.width,Se.height,Te,Ce,Se.data):t.texImage2D(3553,te,Le,Se.width,Se.height,0,Te,Ce,Se.data)}else if(x.isDataArrayTexture)it?(Mt&&t.texStorage3D(35866,D,Le,ee.width,ee.height,ee.depth),t.texSubImage3D(35866,0,0,0,0,ee.width,ee.height,ee.depth,Te,Ce,ee.data)):t.texImage3D(35866,0,Le,ee.width,ee.height,ee.depth,0,Te,Ce,ee.data);else if(x.isData3DTexture)it?(Mt&&t.texStorage3D(32879,D,Le,ee.width,ee.height,ee.depth),t.texSubImage3D(32879,0,0,0,0,ee.width,ee.height,ee.depth,Te,Ce,ee.data)):t.texImage3D(32879,0,Le,ee.width,ee.height,ee.depth,0,Te,Ce,ee.data);else if(x.isFramebufferTexture){if(Mt)if(it)t.texStorage2D(3553,D,Le,ee.width,ee.height);else{let te=ee.width,pe=ee.height;for(let we=0;we<D;we++)t.texImage2D(3553,we,Le,te,pe,0,Te,Ce,null),te>>=1,pe>>=1}}else if(Ie.length>0&&Re){it&&Mt&&t.texStorage2D(3553,D,Le,Ie[0].width,Ie[0].height);for(let te=0,pe=Ie.length;te<pe;te++)Se=Ie[te],it?t.texSubImage2D(3553,te,0,0,Te,Ce,Se):t.texImage2D(3553,te,Le,Te,Ce,Se);x.generateMipmaps=!1}else it?(Mt&&t.texStorage2D(3553,D,Le,ee.width,ee.height),t.texSubImage2D(3553,0,0,0,Te,Ce,ee)):t.texImage2D(3553,0,Le,Te,Ce,ee);A(x,Re)&&L(W),ge.__version=ce.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function de(y,x,N){if(x.image.length!==6)return;const W=X(y,x),Q=x.source;t.bindTexture(34067,y.__webglTexture,33984+N);const ce=i.get(Q);if(Q.version!==ce.__version||W===!0){t.activeTexture(33984+N),n.pixelStorei(37440,x.flipY),n.pixelStorei(37441,x.premultiplyAlpha),n.pixelStorei(3317,x.unpackAlignment),n.pixelStorei(37443,0);const ge=x.isCompressedTexture||x.image[0].isCompressedTexture,_e=x.image[0]&&x.image[0].isDataTexture,ee=[];for(let te=0;te<6;te++)!ge&&!_e?ee[te]=g(x.image[te],!1,!0,c):ee[te]=_e?x.image[te].image:x.image[te],ee[te]=Y(x,ee[te]);const Re=ee[0],Te=M(Re)||a,Ce=r.convert(x.format,x.encoding),Le=r.convert(x.type),Se=S(x.internalFormat,Ce,Le,x.encoding),Ie=a&&x.isVideoTexture!==!0,it=ce.__version===void 0||W===!0;let Mt=T(x,Re,Te);q(34067,x,Te);let D;if(ge){Ie&&it&&t.texStorage2D(34067,Mt,Se,Re.width,Re.height);for(let te=0;te<6;te++){D=ee[te].mipmaps;for(let pe=0;pe<D.length;pe++){const we=D[pe];x.format!==hn?Ce!==null?Ie?t.compressedTexSubImage2D(34069+te,pe,0,0,we.width,we.height,Ce,we.data):t.compressedTexImage2D(34069+te,pe,Se,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(34069+te,pe,0,0,we.width,we.height,Ce,Le,we.data):t.texImage2D(34069+te,pe,Se,we.width,we.height,0,Ce,Le,we.data)}}}else{D=x.mipmaps,Ie&&it&&(D.length>0&&Mt++,t.texStorage2D(34067,Mt,Se,ee[0].width,ee[0].height));for(let te=0;te<6;te++)if(_e){Ie?t.texSubImage2D(34069+te,0,0,0,ee[te].width,ee[te].height,Ce,Le,ee[te].data):t.texImage2D(34069+te,0,Se,ee[te].width,ee[te].height,0,Ce,Le,ee[te].data);for(let pe=0;pe<D.length;pe++){const Ae=D[pe].image[te].image;Ie?t.texSubImage2D(34069+te,pe+1,0,0,Ae.width,Ae.height,Ce,Le,Ae.data):t.texImage2D(34069+te,pe+1,Se,Ae.width,Ae.height,0,Ce,Le,Ae.data)}}else{Ie?t.texSubImage2D(34069+te,0,0,0,Ce,Le,ee[te]):t.texImage2D(34069+te,0,Se,Ce,Le,ee[te]);for(let pe=0;pe<D.length;pe++){const we=D[pe];Ie?t.texSubImage2D(34069+te,pe+1,0,0,Ce,Le,we.image[te]):t.texImage2D(34069+te,pe+1,Se,Ce,Le,we.image[te])}}}A(x,Te)&&L(34067),ce.__version=Q.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function be(y,x,N,W,Q){const ce=r.convert(N.format,N.encoding),ge=r.convert(N.type),_e=S(N.internalFormat,ce,ge,N.encoding);i.get(x).__hasExternalTextures||(Q===32879||Q===35866?t.texImage3D(Q,0,_e,x.width,x.height,x.depth,0,ce,ge,null):t.texImage2D(Q,0,_e,x.width,x.height,0,ce,ge,null)),t.bindFramebuffer(36160,y),ae(x)?h.framebufferTexture2DMultisampleEXT(36160,W,Q,i.get(N).__webglTexture,0,he(x)):(Q===3553||Q>=34069&&Q<=34074)&&n.framebufferTexture2D(36160,W,Q,i.get(N).__webglTexture,0),t.bindFramebuffer(36160,null)}function ve(y,x,N){if(n.bindRenderbuffer(36161,y),x.depthBuffer&&!x.stencilBuffer){let W=33189;if(N||ae(x)){const Q=x.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Tn?W=36012:Q.type===Zi&&(W=33190));const ce=he(x);ae(x)?h.renderbufferStorageMultisampleEXT(36161,ce,W,x.width,x.height):n.renderbufferStorageMultisample(36161,ce,W,x.width,x.height)}else n.renderbufferStorage(36161,W,x.width,x.height);n.framebufferRenderbuffer(36160,36096,36161,y)}else if(x.depthBuffer&&x.stencilBuffer){const W=he(x);N&&ae(x)===!1?n.renderbufferStorageMultisample(36161,W,35056,x.width,x.height):ae(x)?h.renderbufferStorageMultisampleEXT(36161,W,35056,x.width,x.height):n.renderbufferStorage(36161,34041,x.width,x.height),n.framebufferRenderbuffer(36160,33306,36161,y)}else{const W=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Q=0;Q<W.length;Q++){const ce=W[Q],ge=r.convert(ce.format,ce.encoding),_e=r.convert(ce.type),ee=S(ce.internalFormat,ge,_e,ce.encoding),Re=he(x);N&&ae(x)===!1?n.renderbufferStorageMultisample(36161,Re,ee,x.width,x.height):ae(x)?h.renderbufferStorageMultisampleEXT(36161,Re,ee,x.width,x.height):n.renderbufferStorage(36161,ee,x.width,x.height)}}n.bindRenderbuffer(36161,null)}function E(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),fe(x.depthTexture,0);const W=i.get(x.depthTexture).__webglTexture,Q=he(x);if(x.depthTexture.format===ss)ae(x)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,W,0,Q):n.framebufferTexture2D(36160,36096,3553,W,0);else if(x.depthTexture.format===Ys)ae(x)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,W,0,Q):n.framebufferTexture2D(36160,33306,3553,W,0);else throw new Error("Unknown depthTexture format")}function P(y){const x=i.get(y),N=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");E(x.__webglFramebuffer,y)}else if(N){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)t.bindFramebuffer(36160,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]=n.createRenderbuffer(),ve(x.__webglDepthbuffer[W],y,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),ve(x.__webglDepthbuffer,y,!1);t.bindFramebuffer(36160,null)}function G(y,x,N){const W=i.get(y);x!==void 0&&be(W.__webglFramebuffer,y,y.texture,36064,3553),N!==void 0&&P(y)}function $(y){const x=y.texture,N=i.get(y),W=i.get(x);y.addEventListener("dispose",Z),y.isWebGLMultipleRenderTargets!==!0&&(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=x.version,o.memory.textures++);const Q=y.isWebGLCubeRenderTarget===!0,ce=y.isWebGLMultipleRenderTargets===!0,ge=M(y)||a;if(Q){N.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)N.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(N.__webglFramebuffer=n.createFramebuffer(),ce)if(s.drawBuffers){const _e=y.texture;for(let ee=0,Re=_e.length;ee<Re;ee++){const Te=i.get(_e[ee]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&ae(y)===!1){const _e=ce?x:[x];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer);for(let ee=0;ee<_e.length;ee++){const Re=_e[ee];N.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(36161,N.__webglColorRenderbuffer[ee]);const Te=r.convert(Re.format,Re.encoding),Ce=r.convert(Re.type),Le=S(Re.internalFormat,Te,Ce,Re.encoding,y.isXRRenderTarget===!0),Se=he(y);n.renderbufferStorageMultisample(36161,Se,Le,y.width,y.height),n.framebufferRenderbuffer(36160,36064+ee,36161,N.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(36161,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(N.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(36160,null)}}if(Q){t.bindTexture(34067,W.__webglTexture),q(34067,x,ge);for(let _e=0;_e<6;_e++)be(N.__webglFramebuffer[_e],y,x,36064,34069+_e);A(x,ge)&&L(34067),t.unbindTexture()}else if(ce){const _e=y.texture;for(let ee=0,Re=_e.length;ee<Re;ee++){const Te=_e[ee],Ce=i.get(Te);t.bindTexture(3553,Ce.__webglTexture),q(3553,Te,ge),be(N.__webglFramebuffer,y,Te,36064+ee,3553),A(Te,ge)&&L(3553)}t.unbindTexture()}else{let _e=3553;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?_e=y.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,W.__webglTexture),q(_e,x,ge),be(N.__webglFramebuffer,y,x,36064,_e),A(x,ge)&&L(_e),t.unbindTexture()}y.depthBuffer&&P(y)}function ne(y){const x=M(y)||a,N=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let W=0,Q=N.length;W<Q;W++){const ce=N[W];if(A(ce,x)){const ge=y.isWebGLCubeRenderTarget?34067:3553,_e=i.get(ce).__webglTexture;t.bindTexture(ge,_e),L(ge),t.unbindTexture()}}}function le(y){if(a&&y.samples>0&&ae(y)===!1){const x=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],N=y.width,W=y.height;let Q=16384;const ce=[],ge=y.stencilBuffer?33306:36096,_e=i.get(y),ee=y.isWebGLMultipleRenderTargets===!0;if(ee)for(let Re=0;Re<x.length;Re++)t.bindFramebuffer(36160,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Re,36161,null),t.bindFramebuffer(36160,_e.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Re,3553,null,0);t.bindFramebuffer(36008,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,_e.__webglFramebuffer);for(let Re=0;Re<x.length;Re++){ce.push(36064+Re),y.depthBuffer&&ce.push(ge);const Te=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(Te===!1&&(y.depthBuffer&&(Q|=256),y.stencilBuffer&&(Q|=1024)),ee&&n.framebufferRenderbuffer(36008,36064,36161,_e.__webglColorRenderbuffer[Re]),Te===!0&&(n.invalidateFramebuffer(36008,[ge]),n.invalidateFramebuffer(36009,[ge])),ee){const Ce=i.get(x[Re]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Ce,0)}n.blitFramebuffer(0,0,N,W,0,0,N,W,Q,9728),d&&n.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ee)for(let Re=0;Re<x.length;Re++){t.bindFramebuffer(36160,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Re,36161,_e.__webglColorRenderbuffer[Re]);const Te=i.get(x[Re]).__webglTexture;t.bindFramebuffer(36160,_e.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Re,3553,Te,0)}t.bindFramebuffer(36009,_e.__webglMultisampledFramebuffer)}}function he(y){return Math.min(f,y.samples)}function ae(y){const x=i.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function me(y){const x=o.render.frame;_.get(y)!==x&&(_.set(y,x),y.update())}function Y(y,x){const N=y.encoding,W=y.format,Q=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===rc||N!==Li&&(N===Ye?a===!1?e.has("EXT_sRGB")===!0&&W===hn?(y.format=rc,y.minFilter=xt,y.generateMipmaps=!1):x=Kp.sRGBToLinear(x):(W!==hn||Q!==os)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",N)),x}this.allocateTextureUnit=z,this.resetTextureUnits=K,this.setTexture2D=fe,this.setTexture2DArray=Me,this.setTexture3D=H,this.setTextureCube=ue,this.rebindTextures=G,this.setupRenderTarget=$,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ae}function Ow(n,e,t){const i=t.isWebGL2;function s(r,o=null){let a;if(r===os)return 5121;if(r===av)return 32819;if(r===lv)return 32820;if(r===sv)return 5120;if(r===rv)return 5122;if(r===Gp)return 5123;if(r===ov)return 5124;if(r===Zi)return 5125;if(r===Tn)return 5126;if(r===ni)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===cv)return 6406;if(r===hn)return 6408;if(r===uv)return 6409;if(r===fv)return 6410;if(r===ss)return 6402;if(r===Ys)return 34041;if(r===rc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===hv)return 6403;if(r===dv)return 36244;if(r===pv)return 33319;if(r===mv)return 33320;if(r===gv)return 36249;if(r===Ya||r===Za||r===Ja||r===Qa)if(o===Ye)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ya)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ya)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Za)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ja)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yf||r===bf||r===Mf||r===Sf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===yf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Mf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_v)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===wf||r===Tf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===wf)return o===Ye?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Tf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ef||r===Af||r===Rf||r===Cf||r===Lf||r===Pf||r===If||r===Df||r===Nf||r===Of||r===Ff||r===Uf||r===Bf||r===kf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ef)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Af)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Cf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Lf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Pf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===If)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Df)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Nf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Of)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ff)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Uf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===el)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===el)return o===Ye?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===xv||r===zf||r===Vf||r===Gf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===el)return a.COMPRESSED_RED_RGTC1_EXT;if(r===zf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Vf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Gf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zs?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class Fw extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qi extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uw={type:"move"};class Tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,i),v=this._getHandJoint(c,p);m!==null&&(v.matrix.fromArray(m.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=m.radius),v.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Uw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class um extends Dt{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:ss,u!==ss&&u!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ss&&(i=Zi),i===void 0&&u===Ys&&(i=zs),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1}}class Bw extends sr{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const p=t.getContextAttributes();let m=null,v=null;const b=[],g=[],M=new Set,w=new Map,A=new Wt;A.layers.enable(1),A.viewport=new nt;const L=new Wt;L.layers.enable(2),L.viewport=new nt;const S=[A,L],T=new Fw;T.layers.enable(1),T.layers.enable(2);let I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ue=b[H];return ue===void 0&&(ue=new Tl,b[H]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(H){let ue=b[H];return ue===void 0&&(ue=new Tl,b[H]=ue),ue.getGripSpace()},this.getHand=function(H){let ue=b[H];return ue===void 0&&(ue=new Tl,b[H]=ue),ue.getHandSpace()};function Z(H){const ue=g.indexOf(H.inputSource);if(ue===-1)return;const xe=b[ue];xe!==void 0&&xe.dispatchEvent({type:H.type,data:H.inputSource})}function k(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",U);for(let H=0;H<b.length;H++){const ue=g[H];ue!==null&&(g[H]=null,b[H].disconnect(ue))}I=null,F=null,e.setRenderTarget(m),d=null,h=null,f=null,s=null,v=null,Me.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",k),s.addEventListener("inputsourceschange",U),p.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:d}),v=new Pi(d.framebufferWidth,d.framebufferHeight,{format:hn,type:os,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let ue=null,xe=null,C=null;p.depth&&(C=p.stencil?35056:33190,ue=p.stencil?Ys:ss,xe=p.stencil?zs:Zi);const q={colorFormat:32856,depthFormat:C,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(q),s.updateRenderState({layers:[h]}),v=new Pi(h.textureWidth,h.textureHeight,{format:hn,type:os,depthTexture:new um(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const X=e.properties.get(v);X.__ignoreDepthValues=h.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Me.setContext(s),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function U(H){for(let ue=0;ue<H.removed.length;ue++){const xe=H.removed[ue],C=g.indexOf(xe);C>=0&&(g[C]=null,b[C].disconnect(xe))}for(let ue=0;ue<H.added.length;ue++){const xe=H.added[ue];let C=g.indexOf(xe);if(C===-1){for(let X=0;X<b.length;X++)if(X>=g.length){g.push(xe),C=X;break}else if(g[X]===null){g[X]=xe,C=X;break}if(C===-1)break}const q=b[C];q&&q.connect(xe)}}const j=new O,re=new O;function K(H,ue,xe){j.setFromMatrixPosition(ue.matrixWorld),re.setFromMatrixPosition(xe.matrixWorld);const C=j.distanceTo(re),q=ue.projectionMatrix.elements,X=xe.projectionMatrix.elements,se=q[14]/(q[10]-1),de=q[14]/(q[10]+1),be=(q[9]+1)/q[5],ve=(q[9]-1)/q[5],E=(q[8]-1)/q[0],P=(X[8]+1)/X[0],G=se*E,$=se*P,ne=C/(-E+P),le=ne*-E;ue.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(le),H.translateZ(ne),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const he=se+ne,ae=de+ne,me=G-le,Y=$+(C-le),y=be*de/ae*he,x=ve*de/ae*he;H.projectionMatrix.makePerspective(me,Y,y,x,he,ae)}function z(H,ue){ue===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ue.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;T.near=L.near=A.near=H.near,T.far=L.far=A.far=H.far,(I!==T.near||F!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),I=T.near,F=T.far);const ue=H.parent,xe=T.cameras;z(T,ue);for(let q=0;q<xe.length;q++)z(xe[q],ue);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),H.matrix.copy(T.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const C=H.children;for(let q=0,X=C.length;q<X;q++)C[q].updateMatrixWorld(!0);xe.length===2?K(T,A,L):T.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.getPlanes=function(){return M};let oe=null;function fe(H,ue){if(u=ue.getViewerPose(c||o),_=ue,u!==null){const xe=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let C=!1;xe.length!==T.cameras.length&&(T.cameras.length=0,C=!0);for(let q=0;q<xe.length;q++){const X=xe[q];let se=null;if(d!==null)se=d.getViewport(X);else{const be=f.getViewSubImage(h,X);se=be.viewport,q===0&&(e.setRenderTargetTextures(v,be.colorTexture,h.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(v))}let de=S[q];de===void 0&&(de=new Wt,de.layers.enable(q),de.viewport=new nt,S[q]=de),de.matrix.fromArray(X.transform.matrix),de.projectionMatrix.fromArray(X.projectionMatrix),de.viewport.set(se.x,se.y,se.width,se.height),q===0&&T.matrix.copy(de.matrix),C===!0&&T.cameras.push(de)}}for(let xe=0;xe<b.length;xe++){const C=g[xe],q=b[xe];C!==null&&q!==void 0&&q.update(C,ue,c||o)}if(oe&&oe(H,ue),ue.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:ue.detectedPlanes});let xe=null;for(const C of M)ue.detectedPlanes.has(C)||(xe===null&&(xe=[]),xe.push(C));if(xe!==null)for(const C of xe)M.delete(C),w.delete(C),i.dispatchEvent({type:"planeremoved",data:C});for(const C of ue.detectedPlanes)if(!M.has(C))M.add(C),w.set(C,ue.lastChangedTime),i.dispatchEvent({type:"planeadded",data:C});else{const q=w.get(C);C.lastChangedTime>q&&(w.set(C,C.lastChangedTime),i.dispatchEvent({type:"planechanged",data:C}))}}_=null}const Me=new rm;Me.setAnimationLoop(fe),this.setAnimationLoop=function(H){oe=H},this.dispose=function(){}}}function kw(n,e){function t(p,m){m.color.getRGB(p.fogColor.value,nm(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,b,g){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),c(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,g)):m.isMeshMatcapMaterial?(s(p,m),d(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?a(p,m,v,b):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===on&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===on&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=e.get(m).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const M=n.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*M}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let b;m.map?b=m.map:m.specularMap?b=m.specularMap:m.displacementMap?b=m.displacementMap:m.normalMap?b=m.normalMap:m.bumpMap?b=m.bumpMap:m.roughnessMap?b=m.roughnessMap:m.metalnessMap?b=m.metalnessMap:m.alphaMap?b=m.alphaMap:m.emissiveMap?b=m.emissiveMap:m.clearcoatMap?b=m.clearcoatMap:m.clearcoatNormalMap?b=m.clearcoatNormalMap:m.clearcoatRoughnessMap?b=m.clearcoatRoughnessMap:m.iridescenceMap?b=m.iridescenceMap:m.iridescenceThicknessMap?b=m.iridescenceThicknessMap:m.specularIntensityMap?b=m.specularIntensityMap:m.specularColorMap?b=m.specularColorMap:m.transmissionMap?b=m.transmissionMap:m.thicknessMap?b=m.thicknessMap:m.sheenColorMap?b=m.sheenColorMap:m.sheenRoughnessMap&&(b=m.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix));let g;m.aoMap?g=m.aoMap:m.lightMap&&(g=m.lightMap),g!==void 0&&(g.isWebGLRenderTarget&&(g=g.texture),g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uv2Transform.value.copy(g.matrix))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,v,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=b*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let g;m.map?g=m.map:m.alphaMap&&(g=m.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v;m.map?v=m.map:m.alphaMap&&(v=m.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===on&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function d(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function zw(n,e,t,i){let s={},r={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(b,g){const M=g.program;i.uniformBlockBinding(b,M)}function c(b,g){let M=s[b.id];M===void 0&&(_(b),M=u(b),s[b.id]=M,b.addEventListener("dispose",m));const w=g.program;i.updateUBOMapping(b,w);const A=e.render.frame;r[b.id]!==A&&(h(b),r[b.id]=A)}function u(b){const g=f();b.__bindingPointIndex=g;const M=n.createBuffer(),w=b.__size,A=b.usage;return n.bindBuffer(35345,M),n.bufferData(35345,w,A),n.bindBuffer(35345,null),n.bindBufferBase(35345,g,M),M}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const g=s[b.id],M=b.uniforms,w=b.__cache;n.bindBuffer(35345,g);for(let A=0,L=M.length;A<L;A++){const S=M[A];if(d(S,A,w)===!0){const T=S.__offset,I=Array.isArray(S.value)?S.value:[S.value];let F=0;for(let Z=0;Z<I.length;Z++){const k=I[Z],U=p(k);typeof k=="number"?(S.__data[0]=k,n.bufferSubData(35345,T+F,S.__data)):k.isMatrix3?(S.__data[0]=k.elements[0],S.__data[1]=k.elements[1],S.__data[2]=k.elements[2],S.__data[3]=k.elements[0],S.__data[4]=k.elements[3],S.__data[5]=k.elements[4],S.__data[6]=k.elements[5],S.__data[7]=k.elements[0],S.__data[8]=k.elements[6],S.__data[9]=k.elements[7],S.__data[10]=k.elements[8],S.__data[11]=k.elements[0]):(k.toArray(S.__data,F),F+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,T,S.__data)}}n.bindBuffer(35345,null)}function d(b,g,M){const w=b.value;if(M[g]===void 0){if(typeof w=="number")M[g]=w;else{const A=Array.isArray(w)?w:[w],L=[];for(let S=0;S<A.length;S++)L.push(A[S].clone());M[g]=L}return!0}else if(typeof w=="number"){if(M[g]!==w)return M[g]=w,!0}else{const A=Array.isArray(M[g])?M[g]:[M[g]],L=Array.isArray(w)?w:[w];for(let S=0;S<A.length;S++){const T=A[S];if(T.equals(L[S])===!1)return T.copy(L[S]),!0}}return!1}function _(b){const g=b.uniforms;let M=0;const w=16;let A=0;for(let L=0,S=g.length;L<S;L++){const T=g[L],I={boundary:0,storage:0},F=Array.isArray(T.value)?T.value:[T.value];for(let Z=0,k=F.length;Z<k;Z++){const U=F[Z],j=p(U);I.boundary+=j.boundary,I.storage+=j.storage}if(T.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=M,L>0){A=M%w;const Z=w-A;A!==0&&Z-I.boundary<0&&(M+=w-A,T.__offset=M)}M+=I.storage}return A=M%w,A>0&&(M+=w-A),b.__size=M,b.__cache={},this}function p(b){const g={boundary:0,storage:0};return typeof b=="number"?(g.boundary=4,g.storage=4):b.isVector2?(g.boundary=8,g.storage=8):b.isVector3||b.isColor?(g.boundary=16,g.storage=12):b.isVector4?(g.boundary=16,g.storage=16):b.isMatrix3?(g.boundary=48,g.storage=48):b.isMatrix4?(g.boundary=64,g.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),g}function m(b){const g=b.target;g.removeEventListener("dispose",m);const M=o.indexOf(g.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[g.id]),delete s[g.id],delete r[g.id]}function v(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:v}}function Vw(){const n=Zr("canvas");return n.style.display="block",n}function tu(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:Vw(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,s=n.stencil!==void 0?n.stencil:!0,r=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const d=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Li,this.useLegacyLights=!0,this.toneMapping=ri,this.toneMappingExposure=1;const p=this;let m=!1,v=0,b=0,g=null,M=-1,w=null;const A=new nt,L=new nt;let S=null,T=e.width,I=e.height,F=1,Z=null,k=null;const U=new nt(0,0,T,I),j=new nt(0,0,T,I);let re=!1;const K=new Jc;let z=!1,oe=!1,fe=null;const Me=new Ve,H=new O,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xe(){return g===null?F:1}let C=t;function q(R,V){for(let J=0;J<R.length;J++){const B=R[J],ie=e.getContext(B,V);if(ie!==null)return ie}return null}try{const R={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kc}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",Le,!1),e.addEventListener("webglcontextcreationerror",Se,!1),C===null){const V=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&V.shift(),C=q(V,R),C===null)throw q(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let X,se,de,be,ve,E,P,G,$,ne,le,he,ae,me,Y,y,x,N,W,Q,ce,ge,_e,ee;function Re(){X=new QM(C),se=new qM(C,X,n),X.init(se),ge=new Ow(C,X,se),de=new Dw(C,X,se),be=new nS,ve=new vw,E=new Nw(C,X,de,ve,se,ge,be),P=new KM(p),G=new JM(p),$=new fy(C,se),_e=new jM(C,X,$,se),ne=new eS(C,$,be,_e),le=new oS(C,ne,$,be),W=new rS(C,se,E),y=new $M(ve),he=new xw(p,P,G,X,se,_e,y),ae=new kw(p,ve),me=new bw,Y=new Aw(X,se),N=new WM(p,P,G,de,le,u,o),x=new Iw(p,le,se),ee=new zw(C,be,se,de),Q=new XM(C,X,be,se),ce=new tS(C,X,be,se),be.programs=he.programs,p.capabilities=se,p.extensions=X,p.properties=ve,p.renderLists=me,p.shadowMap=x,p.state=de,p.info=be}Re();const Te=new Bw(p,C);this.xr=Te,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const R=X.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=X.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(R){R!==void 0&&(F=R,this.setSize(T,I,!1))},this.getSize=function(R){return R.set(T,I)},this.setSize=function(R,V,J=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=R,I=V,e.width=Math.floor(R*F),e.height=Math.floor(V*F),J===!0&&(e.style.width=R+"px",e.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(T*F,I*F).floor()},this.setDrawingBufferSize=function(R,V,J){T=R,I=V,F=J,e.width=Math.floor(R*J),e.height=Math.floor(V*J),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(U)},this.setViewport=function(R,V,J,B){R.isVector4?U.set(R.x,R.y,R.z,R.w):U.set(R,V,J,B),de.viewport(A.copy(U).multiplyScalar(F).floor())},this.getScissor=function(R){return R.copy(j)},this.setScissor=function(R,V,J,B){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,V,J,B),de.scissor(L.copy(j).multiplyScalar(F).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(R){de.setScissorTest(re=R)},this.setOpaqueSort=function(R){Z=R},this.setTransparentSort=function(R){k=R},this.getClearColor=function(R){return R.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor.apply(N,arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha.apply(N,arguments)},this.clear=function(R=!0,V=!0,J=!0){let B=0;R&&(B|=16384),V&&(B|=256),J&&(B|=1024),C.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",Le,!1),e.removeEventListener("webglcontextcreationerror",Se,!1),me.dispose(),Y.dispose(),ve.dispose(),P.dispose(),G.dispose(),le.dispose(),_e.dispose(),ee.dispose(),he.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",pe),Te.removeEventListener("sessionend",we),fe&&(fe.dispose(),fe=null),Ae.stop()};function Ce(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const R=be.autoReset,V=x.enabled,J=x.autoUpdate,B=x.needsUpdate,ie=x.type;Re(),be.autoReset=R,x.enabled=V,x.autoUpdate=J,x.needsUpdate=B,x.type=ie}function Se(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ie(R){const V=R.target;V.removeEventListener("dispose",Ie),it(V)}function it(R){Mt(R),ve.remove(R)}function Mt(R){const V=ve.get(R).programs;V!==void 0&&(V.forEach(function(J){he.releaseProgram(J)}),R.isShaderMaterial&&he.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,J,B,ie,Pe){V===null&&(V=ue);const De=ie.isMesh&&ie.matrixWorld.determinant()<0,Be=zm(R,V,J,B,ie);de.setMaterial(B,De);let ze=J.index,Ke=1;B.wireframe===!0&&(ze=ne.getWireframeAttribute(J),Ke=2);const He=J.drawRange,We=J.attributes.position;let dt=He.start*Ke,tn=(He.start+He.count)*Ke;Pe!==null&&(dt=Math.max(dt,Pe.start*Ke),tn=Math.min(tn,(Pe.start+Pe.count)*Ke)),ze!==null?(dt=Math.max(dt,0),tn=Math.min(tn,ze.count)):We!=null&&(dt=Math.max(dt,0),tn=Math.min(tn,We.count));const Gn=tn-dt;if(Gn<0||Gn===1/0)return;_e.setup(ie,B,Be,J,ze);let Fi,pt=Q;if(ze!==null&&(Fi=$.get(ze),pt=ce,pt.setIndex(Fi)),ie.isMesh)B.wireframe===!0?(de.setLineWidth(B.wireframeLinewidth*xe()),pt.setMode(1)):pt.setMode(4);else if(ie.isLine){let je=B.linewidth;je===void 0&&(je=1),de.setLineWidth(je*xe()),ie.isLineSegments?pt.setMode(1):ie.isLineLoop?pt.setMode(2):pt.setMode(3)}else ie.isPoints?pt.setMode(0):ie.isSprite&&pt.setMode(4);if(ie.isInstancedMesh)pt.renderInstances(dt,Gn,ie.count);else if(J.isInstancedBufferGeometry){const je=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Fa=Math.min(J.instanceCount,je);pt.renderInstances(dt,Gn,Fa)}else pt.render(dt,Gn)},this.compile=function(R,V){function J(B,ie,Pe){B.transparent===!0&&B.side===ti&&B.forceSinglePass===!1?(B.side=on,B.needsUpdate=!0,ln(B,ie,Pe),B.side=ai,B.needsUpdate=!0,ln(B,ie,Pe),B.side=ti):ln(B,ie,Pe)}h=Y.get(R),h.init(),_.push(h),R.traverseVisible(function(B){B.isLight&&B.layers.test(V.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights(p.useLegacyLights),R.traverse(function(B){const ie=B.material;if(ie)if(Array.isArray(ie))for(let Pe=0;Pe<ie.length;Pe++){const De=ie[Pe];J(De,R,B)}else J(ie,R,B)}),_.pop(),h=null};let D=null;function te(R){D&&D(R)}function pe(){Ae.stop()}function we(){Ae.start()}const Ae=new rm;Ae.setAnimationLoop(te),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(R){D=R,Te.setAnimationLoop(R),R===null?Ae.stop():Ae.start()},Te.addEventListener("sessionstart",pe),Te.addEventListener("sessionend",we),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(V),V=Te.getCamera()),R.isScene===!0&&R.onBeforeRender(p,R,V,g),h=Y.get(R,_.length),h.init(),_.push(h),Me.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),K.setFromProjectionMatrix(Me),oe=this.localClippingEnabled,z=y.init(this.clippingPlanes,oe),f=me.get(R,d.length),f.init(),d.push(f),rt(R,V,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(Z,k),z===!0&&y.beginShadows();const J=h.state.shadowsArray;if(x.render(J,R,V),z===!0&&y.endShadows(),this.info.autoReset===!0&&this.info.reset(),N.render(f,R),h.setupLights(p.useLegacyLights),V.isArrayCamera){const B=V.cameras;for(let ie=0,Pe=B.length;ie<Pe;ie++){const De=B[ie];St(f,R,De,De.viewport)}}else St(f,R,V);g!==null&&(E.updateMultisampleRenderTarget(g),E.updateRenderTargetMipmap(g)),R.isScene===!0&&R.onAfterRender(p,R,V),_e.resetDefaultState(),M=-1,w=null,_.pop(),_.length>0?h=_[_.length-1]:h=null,d.pop(),d.length>0?f=d[d.length-1]:f=null};function rt(R,V,J,B){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)J=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){B&&H.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Me);const De=le.update(R),Be=R.material;Be.visible&&f.push(R,De,Be,J,H.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==be.render.frame&&(R.skeleton.update(),R.skeleton.frame=be.render.frame),!R.frustumCulled||K.intersectsObject(R))){B&&H.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Me);const De=le.update(R),Be=R.material;if(Array.isArray(Be)){const ze=De.groups;for(let Ke=0,He=ze.length;Ke<He;Ke++){const We=ze[Ke],dt=Be[We.materialIndex];dt&&dt.visible&&f.push(R,De,dt,J,H.z,We)}}else Be.visible&&f.push(R,De,Be,J,H.z,null)}}const Pe=R.children;for(let De=0,Be=Pe.length;De<Be;De++)rt(Pe[De],V,J,B)}function St(R,V,J,B){const ie=R.opaque,Pe=R.transmissive,De=R.transparent;h.setupLightsView(J),z===!0&&y.setGlobalState(p.clippingPlanes,J),Pe.length>0&&Bt(ie,V,J),B&&de.viewport(A.copy(B)),ie.length>0&&Ln(ie,V,J),Pe.length>0&&Ln(Pe,V,J),De.length>0&&Ln(De,V,J),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Bt(R,V,J){const B=se.isWebGL2;fe===null&&(fe=new Pi(1024,1024,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")?ni:os,minFilter:Ci,samples:B&&r===!0?4:0}));const ie=p.getRenderTarget();p.setRenderTarget(fe),p.clear();const Pe=p.toneMapping;p.toneMapping=ri,Ln(R,V,J),p.toneMapping=Pe,E.updateMultisampleRenderTarget(fe),E.updateRenderTargetMipmap(fe),p.setRenderTarget(ie)}function Ln(R,V,J){const B=V.isScene===!0?V.overrideMaterial:null;for(let ie=0,Pe=R.length;ie<Pe;ie++){const De=R[ie],Be=De.object,ze=De.geometry,Ke=B===null?De.material:B,He=De.group;Be.layers.test(J.layers)&&ft(Be,V,J,ze,Ke,He)}}function ft(R,V,J,B,ie,Pe){R.onBeforeRender(p,V,J,B,ie,Pe),R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ie.onBeforeRender(p,V,J,B,R,Pe),ie.transparent===!0&&ie.side===ti&&ie.forceSinglePass===!1?(ie.side=on,ie.needsUpdate=!0,p.renderBufferDirect(J,V,B,ie,R,Pe),ie.side=ai,ie.needsUpdate=!0,p.renderBufferDirect(J,V,B,ie,R,Pe),ie.side=ti):p.renderBufferDirect(J,V,B,ie,R,Pe),R.onAfterRender(p,V,J,B,ie,Pe)}function ln(R,V,J){V.isScene!==!0&&(V=ue);const B=ve.get(R),ie=h.state.lights,Pe=h.state.shadowsArray,De=ie.state.version,Be=he.getParameters(R,ie.state,Pe,V,J),ze=he.getProgramCacheKey(Be);let Ke=B.programs;B.environment=R.isMeshStandardMaterial?V.environment:null,B.fog=V.fog,B.envMap=(R.isMeshStandardMaterial?G:P).get(R.envMap||B.environment),Ke===void 0&&(R.addEventListener("dispose",Ie),Ke=new Map,B.programs=Ke);let He=Ke.get(ze);if(He!==void 0){if(B.currentProgram===He&&B.lightsStateVersion===De)return Pn(R,Be),He}else Be.uniforms=he.getUniforms(R),R.onBuild(J,Be,p),R.onBeforeCompile(Be,p),He=he.acquireProgram(Be,ze),Ke.set(ze,He),B.uniforms=Be.uniforms;const We=B.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(We.clippingPlanes=y.uniform),Pn(R,Be),B.needsLights=Gm(R),B.lightsStateVersion=De,B.needsLights&&(We.ambientLightColor.value=ie.state.ambient,We.lightProbe.value=ie.state.probe,We.directionalLights.value=ie.state.directional,We.directionalLightShadows.value=ie.state.directionalShadow,We.spotLights.value=ie.state.spot,We.spotLightShadows.value=ie.state.spotShadow,We.rectAreaLights.value=ie.state.rectArea,We.ltc_1.value=ie.state.rectAreaLTC1,We.ltc_2.value=ie.state.rectAreaLTC2,We.pointLights.value=ie.state.point,We.pointLightShadows.value=ie.state.pointShadow,We.hemisphereLights.value=ie.state.hemi,We.directionalShadowMap.value=ie.state.directionalShadowMap,We.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,We.spotShadowMap.value=ie.state.spotShadowMap,We.spotLightMatrix.value=ie.state.spotLightMatrix,We.spotLightMap.value=ie.state.spotLightMap,We.pointShadowMap.value=ie.state.pointShadowMap,We.pointShadowMatrix.value=ie.state.pointShadowMatrix);const dt=He.getUniforms(),tn=Zo.seqWithValue(dt.seq,We);return B.currentProgram=He,B.uniformsList=tn,He}function Pn(R,V){const J=ve.get(R);J.outputEncoding=V.outputEncoding,J.instancing=V.instancing,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function zm(R,V,J,B,ie){V.isScene!==!0&&(V=ue),E.resetTextureUnits();const Pe=V.fog,De=B.isMeshStandardMaterial?V.environment:null,Be=g===null?p.outputEncoding:g.isXRRenderTarget===!0?g.texture.encoding:Li,ze=(B.isMeshStandardMaterial?G:P).get(B.envMap||De),Ke=B.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,He=!!B.normalMap&&!!J.attributes.tangent,We=!!J.morphAttributes.position,dt=!!J.morphAttributes.normal,tn=!!J.morphAttributes.color,Gn=B.toneMapped?p.toneMapping:ri,Fi=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,pt=Fi!==void 0?Fi.length:0,je=ve.get(B),Fa=h.state.lights;if(z===!0&&(oe===!0||R!==w)){const nn=R===w&&B.id===M;y.setState(B,R,nn)}let wt=!1;B.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Fa.state.version||je.outputEncoding!==Be||ie.isInstancedMesh&&je.instancing===!1||!ie.isInstancedMesh&&je.instancing===!0||ie.isSkinnedMesh&&je.skinning===!1||!ie.isSkinnedMesh&&je.skinning===!0||je.envMap!==ze||B.fog===!0&&je.fog!==Pe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==y.numPlanes||je.numIntersection!==y.numIntersection)||je.vertexAlphas!==Ke||je.vertexTangents!==He||je.morphTargets!==We||je.morphNormals!==dt||je.morphColors!==tn||je.toneMapping!==Gn||se.isWebGL2===!0&&je.morphTargetsCount!==pt)&&(wt=!0):(wt=!0,je.__version=B.version);let Ui=je.currentProgram;wt===!0&&(Ui=ln(B,V,ie));let hu=!1,fr=!1,Ua=!1;const kt=Ui.getUniforms(),Bi=je.uniforms;if(de.useProgram(Ui.program)&&(hu=!0,fr=!0,Ua=!0),B.id!==M&&(M=B.id,fr=!0),hu||w!==R){if(kt.setValue(C,"projectionMatrix",R.projectionMatrix),se.logarithmicDepthBuffer&&kt.setValue(C,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),w!==R&&(w=R,fr=!0,Ua=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const nn=kt.map.cameraPosition;nn!==void 0&&nn.setValue(C,H.setFromMatrixPosition(R.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&kt.setValue(C,"isOrthographic",R.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||ie.isSkinnedMesh)&&kt.setValue(C,"viewMatrix",R.matrixWorldInverse)}if(ie.isSkinnedMesh){kt.setOptional(C,ie,"bindMatrix"),kt.setOptional(C,ie,"bindMatrixInverse");const nn=ie.skeleton;nn&&(se.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),kt.setValue(C,"boneTexture",nn.boneTexture,E),kt.setValue(C,"boneTextureSize",nn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ba=J.morphAttributes;if((Ba.position!==void 0||Ba.normal!==void 0||Ba.color!==void 0&&se.isWebGL2===!0)&&W.update(ie,J,Ui),(fr||je.receiveShadow!==ie.receiveShadow)&&(je.receiveShadow=ie.receiveShadow,kt.setValue(C,"receiveShadow",ie.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Bi.envMap.value=ze,Bi.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),fr&&(kt.setValue(C,"toneMappingExposure",p.toneMappingExposure),je.needsLights&&Vm(Bi,Ua),Pe&&B.fog===!0&&ae.refreshFogUniforms(Bi,Pe),ae.refreshMaterialUniforms(Bi,B,F,I,fe),Zo.upload(C,je.uniformsList,Bi,E)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Zo.upload(C,je.uniformsList,Bi,E),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&kt.setValue(C,"center",ie.center),kt.setValue(C,"modelViewMatrix",ie.modelViewMatrix),kt.setValue(C,"normalMatrix",ie.normalMatrix),kt.setValue(C,"modelMatrix",ie.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const nn=B.uniformsGroups;for(let ka=0,Hm=nn.length;ka<Hm;ka++)if(se.isWebGL2){const du=nn[ka];ee.update(du,Ui),ee.bind(du,Ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ui}function Vm(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Gm(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return g},this.setRenderTargetTextures=function(R,V,J){ve.get(R.texture).__webglTexture=V,ve.get(R.depthTexture).__webglTexture=J;const B=ve.get(R);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=J===void 0,B.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,V){const J=ve.get(R);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,J=0){g=R,v=V,b=J;let B=!0,ie=null,Pe=!1,De=!1;if(R){const ze=ve.get(R);ze.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),B=!1):ze.__webglFramebuffer===void 0?E.setupRenderTarget(R):ze.__hasExternalTextures&&E.rebindTextures(R,ve.get(R.texture).__webglTexture,ve.get(R.depthTexture).__webglTexture);const Ke=R.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(De=!0);const He=ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(ie=He[V],Pe=!0):se.isWebGL2&&R.samples>0&&E.useMultisampledRTT(R)===!1?ie=ve.get(R).__webglMultisampledFramebuffer:ie=He,A.copy(R.viewport),L.copy(R.scissor),S=R.scissorTest}else A.copy(U).multiplyScalar(F).floor(),L.copy(j).multiplyScalar(F).floor(),S=re;if(de.bindFramebuffer(36160,ie)&&se.drawBuffers&&B&&de.drawBuffers(R,ie),de.viewport(A),de.scissor(L),de.setScissorTest(S),Pe){const ze=ve.get(R.texture);C.framebufferTexture2D(36160,36064,34069+V,ze.__webglTexture,J)}else if(De){const ze=ve.get(R.texture),Ke=V||0;C.framebufferTextureLayer(36160,36064,ze.__webglTexture,J||0,Ke)}M=-1},this.readRenderTargetPixels=function(R,V,J,B,ie,Pe,De){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be){de.bindFramebuffer(36160,Be);try{const ze=R.texture,Ke=ze.format,He=ze.type;if(Ke!==hn&&ge.convert(Ke)!==C.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=He===ni&&(X.has("EXT_color_buffer_half_float")||se.isWebGL2&&X.has("EXT_color_buffer_float"));if(He!==os&&ge.convert(He)!==C.getParameter(35738)&&!(He===Tn&&(se.isWebGL2||X.has("OES_texture_float")||X.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-B&&J>=0&&J<=R.height-ie&&C.readPixels(V,J,B,ie,ge.convert(Ke),ge.convert(He),Pe)}finally{const ze=g!==null?ve.get(g).__webglFramebuffer:null;de.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(R,V,J=0){const B=Math.pow(2,-J),ie=Math.floor(V.image.width*B),Pe=Math.floor(V.image.height*B);E.setTexture2D(V,0),C.copyTexSubImage2D(3553,J,0,0,R.x,R.y,ie,Pe),de.unbindTexture()},this.copyTextureToTexture=function(R,V,J,B=0){const ie=V.image.width,Pe=V.image.height,De=ge.convert(J.format),Be=ge.convert(J.type);E.setTexture2D(J,0),C.pixelStorei(37440,J.flipY),C.pixelStorei(37441,J.premultiplyAlpha),C.pixelStorei(3317,J.unpackAlignment),V.isDataTexture?C.texSubImage2D(3553,B,R.x,R.y,ie,Pe,De,Be,V.image.data):V.isCompressedTexture?C.compressedTexSubImage2D(3553,B,R.x,R.y,V.mipmaps[0].width,V.mipmaps[0].height,De,V.mipmaps[0].data):C.texSubImage2D(3553,B,R.x,R.y,De,Be,V.image),B===0&&J.generateMipmaps&&C.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(R,V,J,B,ie=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=R.max.x-R.min.x+1,De=R.max.y-R.min.y+1,Be=R.max.z-R.min.z+1,ze=ge.convert(B.format),Ke=ge.convert(B.type);let He;if(B.isData3DTexture)E.setTexture3D(B,0),He=32879;else if(B.isDataArrayTexture)E.setTexture2DArray(B,0),He=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(37440,B.flipY),C.pixelStorei(37441,B.premultiplyAlpha),C.pixelStorei(3317,B.unpackAlignment);const We=C.getParameter(3314),dt=C.getParameter(32878),tn=C.getParameter(3316),Gn=C.getParameter(3315),Fi=C.getParameter(32877),pt=J.isCompressedTexture?J.mipmaps[0]:J.image;C.pixelStorei(3314,pt.width),C.pixelStorei(32878,pt.height),C.pixelStorei(3316,R.min.x),C.pixelStorei(3315,R.min.y),C.pixelStorei(32877,R.min.z),J.isDataTexture||J.isData3DTexture?C.texSubImage3D(He,ie,V.x,V.y,V.z,Pe,De,Be,ze,Ke,pt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(He,ie,V.x,V.y,V.z,Pe,De,Be,ze,pt.data)):C.texSubImage3D(He,ie,V.x,V.y,V.z,Pe,De,Be,ze,Ke,pt),C.pixelStorei(3314,We),C.pixelStorei(32878,dt),C.pixelStorei(3316,tn),C.pixelStorei(3315,Gn),C.pixelStorei(32877,Fi),ie===0&&B.generateMipmaps&&C.generateMipmap(He),de.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?E.setTextureCube(R,0):R.isData3DTexture?E.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?E.setTexture2DArray(R,0):E.setTexture2D(R,0),de.unbindTexture()},this.resetState=function(){v=0,b=0,g=null,de.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(tu.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(n){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!n}}});class Gw extends tu{}Gw.prototype.isWebGL1Renderer=!0;class Hw extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ww{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vt=new O;class nu{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new nu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Eh=new O,Ah=new nt,Rh=new nt,jw=new O,Ch=new Ve;class Xw extends Jt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const i=this.skeleton,s=this.geometry;Ah.fromBufferAttribute(s.attributes.skinIndex,e),Rh.fromBufferAttribute(s.attributes.skinWeight,e),Eh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Rh.getComponent(r);if(o!==0){const a=Ah.getComponent(r);Ch.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(jw.copy(Eh).applyMatrix4(Ch),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class fm extends at{constructor(){super(),this.isBone=!0,this.type="Bone"}}class hm extends Dt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Et,u=Et,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lh=new Ve,qw=new Ve;class iu{constructor(e=[],t=[]){this.uuid=Rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ve;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:qw;Lh.multiplyMatrices(a,t[r]),Lh.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new iu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Xp(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new hm(t,e,e,hn,Tn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new fm),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class Ph extends qt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ih=new Ve,Dh=new Ve,zo=[],$w=new Ve,br=new Jt;class Kw extends Jt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ph(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1;for(let s=0;s<i;s++)this.setMatrixAt(s,$w)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,s=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0)for(let r=0;r<s;r++){this.getMatrixAt(r,Ih),Dh.multiplyMatrices(i,Ih),br.matrixWorld=Dh,br.raycast(e,zo);for(let o=0,a=zo.length;o<a;o++){const l=zo[o];l.instanceId=r,l.object=this,t.push(l)}zo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ph(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class dm extends zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nh=new O,Oh=new O,Fh=new Ve,El=new Zc,Vo=new or;class su extends at{constructor(e=new pn,t=new dm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Nh.fromBufferAttribute(t,s-1),Oh.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Nh.distanceTo(Oh);e.setAttribute("lineDistance",new Qt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(s),Vo.radius+=r,e.ray.intersectsSphere(Vo)===!1)return;Fh.copy(s).invert(),El.copy(e.ray).applyMatrix4(Fh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new O,u=new O,f=new O,h=new O,d=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const v=Math.max(0,o.start),b=Math.min(_.count,o.start+o.count);for(let g=v,M=b-1;g<M;g+=d){const w=_.getX(g),A=_.getX(g+1);if(c.fromBufferAttribute(m,w),u.fromBufferAttribute(m,A),El.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(h);S<e.near||S>e.far||t.push({distance:S,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),b=Math.min(m.count,o.start+o.count);for(let g=v,M=b-1;g<M;g+=d){if(c.fromBufferAttribute(m,g),u.fromBufferAttribute(m,g+1),El.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(h);A<e.near||A>e.far||t.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Uh=new O,Bh=new O;class Yw extends su{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Uh.fromBufferAttribute(t,s),Bh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Uh.distanceTo(Bh);e.setAttribute("lineDistance",new Qt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zw extends su{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class pm extends zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kh=new Ve,cc=new Zc,Go=new or,Ho=new O;class Jw extends at{constructor(e=new pn,t=new pm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Go.copy(i.boundingSphere),Go.applyMatrix4(s),Go.radius+=r,e.ray.intersectsSphere(Go)===!1)return;kh.copy(s).invert(),cc.copy(e.ray).applyMatrix4(kh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=h,p=d;_<p;_++){const m=c.getX(_);Ho.fromBufferAttribute(f,m),zh(Ho,m,l,s,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let _=h,p=d;_<p;_++)Ho.fromBufferAttribute(f,_),zh(Ho,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function zh(n,e,t,i,s,r,o){const a=cc.distanceSqToPoint(n);if(a<t){const l=new O;cc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class ru extends pn{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const g=new O,M=new O,w=new O;for(let A=0;A<t.length;A+=3)d(t[A+0],g),d(t[A+1],M),d(t[A+2],w),l(g,M,w,b)}function l(b,g,M,w){const A=w+1,L=[];for(let S=0;S<=A;S++){L[S]=[];const T=b.clone().lerp(M,S/A),I=g.clone().lerp(M,S/A),F=A-S;for(let Z=0;Z<=F;Z++)Z===0&&S===A?L[S][Z]=T:L[S][Z]=T.clone().lerp(I,Z/F)}for(let S=0;S<A;S++)for(let T=0;T<2*(A-S)-1;T++){const I=Math.floor(T/2);T%2===0?(h(L[S][I+1]),h(L[S+1][I]),h(L[S][I])):(h(L[S][I+1]),h(L[S+1][I+1]),h(L[S+1][I]))}}function c(b){const g=new O;for(let M=0;M<r.length;M+=3)g.x=r[M+0],g.y=r[M+1],g.z=r[M+2],g.normalize().multiplyScalar(b),r[M+0]=g.x,r[M+1]=g.y,r[M+2]=g.z}function u(){const b=new O;for(let g=0;g<r.length;g+=3){b.x=r[g+0],b.y=r[g+1],b.z=r[g+2];const M=m(b)/2/Math.PI+.5,w=v(b)/Math.PI+.5;o.push(M,1-w)}_(),f()}function f(){for(let b=0;b<o.length;b+=6){const g=o[b+0],M=o[b+2],w=o[b+4],A=Math.max(g,M,w),L=Math.min(g,M,w);A>.9&&L<.1&&(g<.2&&(o[b+0]+=1),M<.2&&(o[b+2]+=1),w<.2&&(o[b+4]+=1))}}function h(b){r.push(b.x,b.y,b.z)}function d(b,g){const M=b*3;g.x=e[M+0],g.y=e[M+1],g.z=e[M+2]}function _(){const b=new O,g=new O,M=new O,w=new O,A=new ke,L=new ke,S=new ke;for(let T=0,I=0;T<r.length;T+=9,I+=6){b.set(r[T+0],r[T+1],r[T+2]),g.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),A.set(o[I+0],o[I+1]),L.set(o[I+2],o[I+3]),S.set(o[I+4],o[I+5]),w.copy(b).add(g).add(M).divideScalar(3);const F=m(w);p(A,I+0,b,F),p(L,I+2,g,F),p(S,I+4,M,F)}}function p(b,g,M,w){w<0&&b.x===1&&(o[g]=b.x-1),M.x===0&&M.z===0&&(o[g]=w/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function v(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ru(e.vertices,e.indices,e.radius,e.details)}}class ou extends ru{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ou(e.radius,e.detail)}}class Qw extends Ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ia extends zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wp,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ls extends Ia{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function mi(n,e,t){return mm(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)}function Wo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function mm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function eT(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Vh(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function gm(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class po{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class tT extends po{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hf,endingEnd:Hf}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wf:r=e,a=2*t-i;break;case jf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Wf:o=e,l=2*i-t;break;case jf:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,_=(i-t)/(s-t),p=_*_,m=p*_,v=-h*m+2*h*p-h*_,b=(1+h)*m+(-1.5-2*h)*p+(-.5+h)*_+1,g=(-1-d)*m+(1.5+d)*p+.5*_,M=d*m-d*p;for(let w=0;w!==a;++w)r[w]=v*o[u+w]+b*o[c+w]+g*o[l+w]+M*o[f+w];return r}}class nT extends po{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}}class iT extends po{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Vn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wo(t,this.TimeBufferType),this.values=Wo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Wo(e.times,Array),values:Wo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new iT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tT(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $r:t=this.InterpolantFactoryMethodDiscrete;break;case Zs:t=this.InterpolantFactoryMethodLinear;break;case tl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return Zs;case this.InterpolantFactoryMethodSmooth:return tl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=mi(i,r,o),this.values=mi(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&mm(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=mi(this.times),t=mi(this.values),i=this.getValueSize(),s=this.getInterpolation()===tl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const f=a*i,h=f-i,d=f+i;for(let _=0;_!==i;++_){const p=t[f+_];if(p!==t[h+_]||p!==t[d+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,h=o*i;for(let d=0;d!==i;++d)t[h+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=mi(e,0,o),this.values=mi(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=mi(this.times,0),t=mi(this.values,0),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=Zs;class lr extends Vn{}lr.prototype.ValueTypeName="bool";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=$r;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;class _m extends Vn{}_m.prototype.ValueTypeName="color";class Jr extends Vn{}Jr.prototype.ValueTypeName="number";class sT extends po{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Oi.slerpFlat(r,0,o,c-a,o,c,l);return r}}class as extends Vn{InterpolantFactoryMethodLinear(e){return new sT(this.times,this.values,this.getValueSize(),e)}}as.prototype.ValueTypeName="quaternion";as.prototype.DefaultInterpolation=Zs;as.prototype.InterpolantFactoryMethodSmooth=void 0;class cr extends Vn{}cr.prototype.ValueTypeName="string";cr.prototype.ValueBufferType=Array;cr.prototype.DefaultInterpolation=$r;cr.prototype.InterpolantFactoryMethodLinear=void 0;cr.prototype.InterpolantFactoryMethodSmooth=void 0;class Qr extends Vn{}Qr.prototype.ValueTypeName="vector";class rT{constructor(e,t=-1,i,s=vv){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Rn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(aT(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Vn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=eT(l);l=Vh(l,1,u),c=Vh(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Jr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const f=u[1];let h=s[f];h||(s[f]=h=[]),h.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,d,_,p){if(d.length!==0){const m=[],v=[];gm(d,m,v,_),m.length!==0&&p.push(new f(h,m,v))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let _;for(_=0;_<h.length;_++)if(h[_].morphTargets)for(let p=0;p<h[_].morphTargets.length;p++)d[h[_].morphTargets[p]]=-1;for(const p in d){const m=[],v=[];for(let b=0;b!==h[_].morphTargets.length;++b){const g=h[_];m.push(g.time),v.push(g.morphTarget===p?1:0)}s.push(new Jr(".morphTargetInfluence["+p+"]",m,v))}l=d.length*o}else{const d=".bones["+t[f].name+"]";i(Qr,d+".position",h,"pos",s),i(as,d+".quaternion",h,"rot",s),i(Qr,d+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function oT(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Jr;case"vector":case"vector2":case"vector3":case"vector4":return Qr;case"color":return _m;case"quaternion":return as;case"bool":case"boolean":return lr;case"string":return cr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function aT(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=oT(n.type);if(n.times===void 0){const t=[],i=[];gm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const li={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class lT{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const cT=new lT;class cs{constructor(e){this.manager=e!==void 0?e:cT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const $n={};class uT extends Error{constructor(e,t){super(e),this.response=t}}class ur extends cs{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=li.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if($n[e]!==void 0){$n[e].push({onLoad:t,onProgress:i,onError:s});return}$n[e]=[],$n[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=$n[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=h?parseInt(h):0,_=d!==0;let p=0;const m=new ReadableStream({start(v){b();function b(){f.read().then(({done:g,value:M})=>{if(g)v.close();else{p+=M.byteLength;const w=new ProgressEvent("progress",{lengthComputable:_,loaded:p,total:d});for(let A=0,L=u.length;A<L;A++){const S=u[A];S.onProgress&&S.onProgress(w)}v.enqueue(M),b()}})}}});return new Response(m)}else throw new uT(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{li.add(e,c);const u=$n[e];delete $n[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=$n[e];if(u===void 0)throw this.manager.itemError(e),c;delete $n[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class xm extends cs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=li.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Zr("img");function l(){u(),li.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class fT extends cs{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new hm,a=new ur(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){const c=r.parse(l);c&&(c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Yt,o.wrapT=c.wrapT!==void 0?c.wrapT:Yt,o.magFilter=c.magFilter!==void 0?c.magFilter:xt,o.minFilter=c.minFilter!==void 0?c.minFilter:xt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Ci),c.mipmapCount===1&&(o.minFilter=xt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c))},i,s),o}}class vm extends cs{constructor(e){super(e)}load(e,t,i,s){const r=new Dt,o=new xm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Da extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Al=new Ve,Gh=new O,Hh=new O;class au{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jc,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Gh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gh),Hh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hh),t.updateMatrixWorld(),Al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hT extends au{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Yr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class dT extends Da{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new hT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Wh=new Ve,Mr=new O,Rl=new O;class pT extends au{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Mr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Mr),Rl.copy(i.position),Rl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Rl),i.updateMatrixWorld(),s.makeTranslation(-Mr.x,-Mr.y,-Mr.z),Wh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wh)}}class mT extends Da{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new pT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class gT extends au{constructor(){super(new La(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _T extends Da{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new gT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xT extends Da{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class uc{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class vT extends cs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=li.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){li.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const lu="\\[\\]\\.:\\/",yT=new RegExp("["+lu+"]","g"),cu="[^"+lu+"]",bT="[^"+lu.replace("\\.","")+"]",MT=/((?:WC+[\/:])*)/.source.replace("WC",cu),ST=/(WCOD+)?/.source.replace("WCOD",bT),wT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cu),TT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cu),ET=new RegExp("^"+MT+ST+wT+TT+"$"),AT=["material","materials","bones","map"];class RT{constructor(e,t,i){const s=i||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Qe{constructor(e,t,i){this.path=t,this.parsedPath=i||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,i):new Qe(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yT,"")}static parseTrackName(e){const t=ET.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);AT.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=RT;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Qn=CT();function CT(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function LT(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=Ft(n,-65504,65504),Qn.floatView[0]=n;const e=Qn.uint32View[0],t=e>>23&511;return Qn.baseTable[t]+((e&8388607)>>Qn.shiftTable[t])}function PT(n){const e=n>>10;return Qn.uint32View[0]=Qn.mantissaTable[Qn.offsetTable[e]+(n&1023)]+Qn.exponentTable[e],Qn.floatView[0]}const jo={toHalfFloat:LT,fromHalfFloat:PT};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kc);function jh(n,e){if(e===yv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===ic||e===Hp){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===ic)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class IT extends cs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new UT(t)}),this.register(function(t){return new WT(t)}),this.register(function(t){return new jT(t)}),this.register(function(t){return new XT(t)}),this.register(function(t){return new kT(t)}),this.register(function(t){return new zT(t)}),this.register(function(t){return new VT(t)}),this.register(function(t){return new GT(t)}),this.register(function(t){return new FT(t)}),this.register(function(t){return new HT(t)}),this.register(function(t){return new BT(t)}),this.register(function(t){return new NT(t)}),this.register(function(t){return new qT(t)}),this.register(function(t){return new $T(t)})}load(e,t,i,s){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=uc.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ur(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ym){try{o[Xe.KHR_BINARY_GLTF]=new KT(e)}catch(f){s&&s(f);return}r=JSON.parse(o[Xe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new lE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const f=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(f){case Xe.KHR_MATERIALS_UNLIT:o[f]=new OT;break;case Xe.KHR_DRACO_MESH_COMPRESSION:o[f]=new YT(r,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:o[f]=new ZT;break;case Xe.KHR_MESH_QUANTIZATION:o[f]=new JT;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function DT(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class NT{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Fe(16777215);l.color!==void 0&&u.fromArray(l.color);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new _T(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new mT(u),c.distance=f;break;case"spot":c=new dT(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,vi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class OT{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return Ji}extendParams(e,t,i){const s=[];e.color=new Fe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Ye))}return Promise.all(s)}}class FT{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class UT{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ls}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ke(a,a)}return Promise.all(r)}}class BT{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ls}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class kT{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ls}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ye)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class zT{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ls}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class VT{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ls}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Fe(a[0],a[1],a[2]),Promise.all(r)}}class GT{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ls}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class HT{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ls}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Fe(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Ye)),Promise.all(r)}}class WT{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class jT{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class XT{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class qT{constructor(e){this.name=Xe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,f=s.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,s.mode,s.filter),d})})}else return null}}class $T{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==fn.TRIANGLES&&c.mode!==fn.TRIANGLE_STRIP&&c.mode!==fn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(const _ of f){const p=new Ve,m=new O,v=new Oi,b=new O(1,1,1),g=new Kw(_.geometry,_.material,h);for(let M=0;M<h;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&v.fromBufferAttribute(l.ROTATION,M),l.SCALE&&b.fromBufferAttribute(l.SCALE,M),g.setMatrixAt(M,p.compose(m,v,b));for(const M in l)M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&_.geometry.setAttribute(M,l[M]);at.prototype.copy.call(g,_),g.frustumCulled=!1,this.parser.assignFinalMaterial(g),d.push(g)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const ym="glTF",Sr=12,Xh={JSON:1313821514,BIN:5130562};class KT{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Sr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ym)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Sr,r=new DataView(e,Sr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Xh.JSON){const c=new Uint8Array(e,Sr+o,a);this.content=i.decode(c)}else if(l===Xh.BIN){const c=Sr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class YT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=fc[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=fc[u]||u.toLowerCase();if(o[u]!==void 0){const h=i.accessors[e.attributes[u]],d=Gs[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f){s.decodeDracoFile(u,function(h){for(const d in h.attributes){const _=h.attributes[d],p=l[d];p!==void 0&&(_.normalized=p)}f(h)},a,c)})})}}class ZT{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class JT{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}}class bm extends po{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,f=(i-t)/u,h=f*f,d=h*f,_=e*c,p=_-c,m=-2*d+3*h,v=d-h,b=1-m,g=v-h+f;for(let M=0;M!==a;M++){const w=o[p+M+a],A=o[p+M+l]*u,L=o[_+M+a],S=o[_+M]*u;r[M]=b*w+g*A+m*L+v*S}return r}}const QT=new Oi;class eE extends bm{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return QT.fromArray(r).normalize().toArray(r),r}}const fn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},qh={9728:Et,9729:xt,9984:nc,9985:Vp,9986:Yo,9987:Ci},$h={33071:Yt,33648:la,10497:Ks},Cl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tE={CUBICSPLINE:void 0,LINEAR:Zs,STEP:$r},Ll={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nE(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ia({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ai})),n.DefaultMaterial}function wr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function vi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function iE(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(i){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;o.push(h)}if(s){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;a.push(h)}if(r){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=f),r&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function sE(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function rE(n){const e=n.extensions&&n.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Kh(e.attributes):t=n.indices+":"+Kh(n.attributes)+":"+n.mode,t}function Kh(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function hc(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function oE(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const aE=new Ve;class lE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new DT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new vm(this.options.manager):this.textureLoader=new vT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ur(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};wr(r,a,s),vi(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(uc.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Cl[s.type],a=Gs[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new qt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Cl[s.type],c=Gs[s.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let p,m;if(d&&d!==f){const v=Math.floor(h/d),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+v+":"+s.count;let g=t.cache.get(b);g||(p=new c(a,v*d,s.count*d/u),g=new Ww(p,d/u),t.cache.add(b,g)),m=new nu(g,l,h%d/u,_)}else a===null?p=new c(s.count*l):p=new c(a,h,s.count*l),m=new qt(p,l,_);if(s.sparse!==void 0){const v=Cl.SCALAR,b=Gs[s.sparse.indices.componentType],g=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,w=new b(o[1],g,s.sparse.count*v),A=new c(o[2],M,s.sparse.count*l);a!==null&&(m=new qt(m.array.slice(),m.itemSize,m.normalized));for(let L=0,S=w.length;L<S;L++){const T=w[L];if(m.setX(T,A[L*l]),l>=2&&m.setY(T,A[L*l+1]),l>=3&&m.setZ(T,A[L*l+2]),l>=4&&m.setW(T,A[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"";const h=(r.samplers||{})[o.sampler]||{};return u.magFilter=qh[h.magFilter]||xt,u.minFilter=qh[h.minFilter]||Ci,u.wrapS=$h[h.wrapS]||Ks,u.wrapT=$h[h.wrapT]||Ks,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let _=h;t.isImageBitmapLoader===!0&&(_=function(p){const m=new Dt(p);m.needsUpdate=!0,h(m)}),t.load(uc.resolveURL(f,r.path),_,void 0,d)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),f.userData.mimeType=o.mimeType||oE(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord!=0&&!(t==="aoMap"&&i.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+i.texCoord+" for texture "+t+" not yet supported."),r.extensions[Xe.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.encoding=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new pm,zn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new dm,zn.prototype.copy.call(l,i),l.color.copy(i.color),this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}i.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=i}getMaterialType(){return Ia}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){const f=s[Xe.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{const f=r.pbrMetallicRoughness||{};if(a.color=new Fe(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.fromArray(h),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Ye)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ti);const u=r.alphaMode||Ll.OPAQUE;if(u===Ll.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ll.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ji&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ke(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;a.normalScale.set(f,f)}return r.occlusionTexture!==void 0&&o!==Ji&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ji&&(a.emissive=new Fe().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==Ji&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ye)),Promise.all(c).then(function(){const f=new o(a);return r.name&&(f.name=r.name),vi(f,r),t.associations.set(f,{materials:e}),r.extensions&&wr(s,f,r),f})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");let i=t;for(let s=1;this.nodeNamesUsed[i];++s)i=t+"_"+s;return this.nodeNamesUsed[i]=!0,i}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Yh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=rE(c),f=s[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=Yh(new pn,c,t),s[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?nE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,_=u.length;d<_;d++){const p=u[d],m=o[d];let v;const b=c[d];if(m.mode===fn.TRIANGLES||m.mode===fn.TRIANGLE_STRIP||m.mode===fn.TRIANGLE_FAN||m.mode===void 0)v=r.isSkinnedMesh===!0?new Xw(p,b):new Jt(p,b),v.isSkinnedMesh===!0&&v.normalizeSkinWeights(),m.mode===fn.TRIANGLE_STRIP?v.geometry=jh(v.geometry,Hp):m.mode===fn.TRIANGLE_FAN&&(v.geometry=jh(v.geometry,ic));else if(m.mode===fn.LINES)v=new Yw(p,b);else if(m.mode===fn.LINE_STRIP)v=new su(p,b);else if(m.mode===fn.LINE_LOOP)v=new Zw(p,b);else if(m.mode===fn.POINTS)v=new Jw(p,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(v.geometry.morphAttributes).length>0&&sE(v,r),v.name=t.createUniqueName(r.name||"mesh_"+e),vi(v,r),m.extensions&&wr(s,v,m),t.assignFinalMaterial(v),f.push(v)}for(let d=0,_=f.length;d<_;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return f[0];const h=new Qi;t.associations.set(h,{meshes:e});for(let d=0,_=f.length;d<_;d++)h.add(f[d]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Wt(Bv.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new La(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),vi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new Ve;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new iu(a,l)})}loadAnimation(e){const i=this.json.animations[e],s=[],r=[],o=[],a=[],l=[];for(let c=0,u=i.channels.length;c<u;c++){const f=i.channels[c],h=i.samplers[f.sampler],d=f.target,_=d.node,p=i.parameters!==void 0?i.parameters[h.input]:h.input,m=i.parameters!==void 0?i.parameters[h.output]:h.output;s.push(this.getDependency("node",_)),r.push(this.getDependency("accessor",p)),o.push(this.getDependency("accessor",m)),a.push(h),l.push(d)}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2],d=c[3],_=c[4],p=[];for(let v=0,b=u.length;v<b;v++){const g=u[v],M=f[v],w=h[v],A=d[v],L=_[v];if(g===void 0)continue;g.updateMatrix();let S;switch(gi[L.path]){case gi.weights:S=Jr;break;case gi.rotation:S=as;break;case gi.position:case gi.scale:default:S=Qr;break}const T=g.name?g.name:g.uuid,I=A.interpolation!==void 0?tE[A.interpolation]:Zs,F=[];gi[L.path]===gi.weights?g.traverse(function(k){k.morphTargetInfluences&&F.push(k.name?k.name:k.uuid)}):F.push(T);let Z=w.array;if(w.normalized){const k=hc(Z.constructor),U=new Float32Array(Z.length);for(let j=0,re=Z.length;j<re;j++)U[j]=Z[j]*k;Z=U}for(let k=0,U=F.length;k<U;k++){const j=new S(F[k]+"."+gi[L.path],M.array,Z,I);A.interpolation==="CUBICSPLINE"&&(j.createInterpolant=function(K){const z=this instanceof as?eE:bm;return new z(this.times,this.values,this.getValueSize()/3,K)},j.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(j)}}const m=i.name?i.name:"animation_"+e;return new rT(m,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,aE)});for(let d=0,_=f.length;d<_;d++)u.add(f[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new fm:c.length>1?u=new Qi:c.length===1?u=c[0]:u=new at,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(r.name&&(u.userData.name=r.name,u.name=o),vi(u,r),r.extensions&&wr(i,u,r),r.matrix!==void 0){const f=new Ve;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Qi;i.name&&(r.name=s.createUniqueName(i.name)),vi(r,i),i.extensions&&wr(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)r.add(l[u]);const c=u=>{const f=new Map;for(const[h,d]of s.associations)(h instanceof zn||h instanceof Dt)&&f.set(h,d);return u.traverse(h=>{const d=s.associations.get(h);d!=null&&f.set(h,d)}),f};return s.associations=c(r),r})}}function cE(n,e,t){const i=e.attributes,s=new rr;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),a.normalized){const u=hc(Gs[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new O,l=new O;for(let c=0,u=r.length;c<u;c++){const f=r[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,_=h.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),h.normalized){const p=hc(Gs[h.componentType]);l.multiplyScalar(p)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new or;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Yh(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=fc[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return vi(n,e),cE(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?iE(n,e.targets,t):n})}class uE extends fT{constructor(e){super(e),this.type=ni}parse(e){const a=function(g,M){switch(g){case 1:console.error("THREE.RGBELoader Read Error: "+(M||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(M||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(M||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(M||""))}return-1},f=`
`,h=function(g,M,w){M=M||1024;let L=g.pos,S=-1,T=0,I="",F=String.fromCharCode.apply(null,new Uint16Array(g.subarray(L,L+128)));for(;0>(S=F.indexOf(f))&&T<M&&L<g.byteLength;)I+=F,T+=F.length,L+=128,F+=String.fromCharCode.apply(null,new Uint16Array(g.subarray(L,L+128)));return-1<S?(w!==!1&&(g.pos+=T+S+1),I+F.slice(0,S)):!1},d=function(g){const M=/^#\?(\S+)/,w=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,A=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*FORMAT=(\S+)\s*$/,S=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,T={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let I,F;if(g.pos>=g.byteLength||!(I=h(g)))return a(1,"no header found");if(!(F=I.match(M)))return a(3,"bad initial token");for(T.valid|=1,T.programtype=F[1],T.string+=I+`
`;I=h(g),I!==!1;){if(T.string+=I+`
`,I.charAt(0)==="#"){T.comments+=I+`
`;continue}if((F=I.match(w))&&(T.gamma=parseFloat(F[1])),(F=I.match(A))&&(T.exposure=parseFloat(F[1])),(F=I.match(L))&&(T.valid|=2,T.format=F[1]),(F=I.match(S))&&(T.valid|=4,T.height=parseInt(F[1],10),T.width=parseInt(F[2],10)),T.valid&2&&T.valid&4)break}return T.valid&2?T.valid&4?T:a(3,"missing image size specifier"):a(3,"missing format specifier")},_=function(g,M,w){const A=M;if(A<8||A>32767||g[0]!==2||g[1]!==2||g[2]&128)return new Uint8Array(g);if(A!==(g[2]<<8|g[3]))return a(3,"wrong scanline width");const L=new Uint8Array(4*M*w);if(!L.length)return a(4,"unable to allocate buffer space");let S=0,T=0;const I=4*A,F=new Uint8Array(4),Z=new Uint8Array(I);let k=w;for(;k>0&&T<g.byteLength;){if(T+4>g.byteLength)return a(1);if(F[0]=g[T++],F[1]=g[T++],F[2]=g[T++],F[3]=g[T++],F[0]!=2||F[1]!=2||(F[2]<<8|F[3])!=A)return a(3,"bad rgbe scanline format");let U=0,j;for(;U<I&&T<g.byteLength;){j=g[T++];const K=j>128;if(K&&(j-=128),j===0||U+j>I)return a(3,"bad scanline data");if(K){const z=g[T++];for(let oe=0;oe<j;oe++)Z[U++]=z}else Z.set(g.subarray(T,T+j),U),U+=j,T+=j}const re=A;for(let K=0;K<re;K++){let z=0;L[S]=Z[K+z],z+=A,L[S+1]=Z[K+z],z+=A,L[S+2]=Z[K+z],z+=A,L[S+3]=Z[K+z],S+=4}k--}return L},p=function(g,M,w,A){const L=g[M+3],S=Math.pow(2,L-128)/255;w[A+0]=g[M+0]*S,w[A+1]=g[M+1]*S,w[A+2]=g[M+2]*S,w[A+3]=1},m=function(g,M,w,A){const L=g[M+3],S=Math.pow(2,L-128)/255;w[A+0]=jo.toHalfFloat(Math.min(g[M+0]*S,65504)),w[A+1]=jo.toHalfFloat(Math.min(g[M+1]*S,65504)),w[A+2]=jo.toHalfFloat(Math.min(g[M+2]*S,65504)),w[A+3]=jo.toHalfFloat(1)},v=new Uint8Array(e);v.pos=0;const b=d(v);if(b!==-1){const g=b.width,M=b.height,w=_(v.subarray(v.pos),g,M);if(w!==-1){let A,L,S;switch(this.type){case Tn:S=w.length/4;const T=new Float32Array(S*4);for(let F=0;F<S;F++)p(w,F*4,T,F*4);A=T,L=Tn;break;case ni:S=w.length/4;const I=new Uint16Array(S*4);for(let F=0;F<S;F++)m(w,F*4,I,F*4);A=I,L=ni;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:g,height:M,data:A,header:b.string,gamma:b.gamma,exposure:b.exposure,type:L}}}return null}setDataType(e){return this.type=e,this}load(e,t,i,s){function r(o,a){switch(o.type){case Tn:case ni:o.encoding=Li,o.minFilter=xt,o.magFilter=xt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,i,s)}}class Tr{constructor({manifest:e={},loader:t=null,assetsInfos:i=new Map,loadedAssets:s=new Map,progressCallback:r=()=>null}={}){this.manifest=e,this.loader=t,this.assetsToLoad=new Map,this.assetsInfos=i,this.loadedAssets=s,this.progressCallback=r,this.add(...Object.keys(e))}add(...e){for(const t of e)!this.assetsToLoad.has(t)&&this.manifest[t]&&this.assetsToLoad.set(t,this.manifest[t])}getAsset(e){return this.loadedAssets.get(e)}getAssets(...e){return Object.fromEntries(e?[...this.loadedAssets.entries()].filter(([t])=>e.includes(t)):this.loadedAssets.entries())}async loadAsset(e){var t,i,s;if(this.loadedAssets.has(e))return this.loadedAssets.get(e);{const r=await this.loader.loadAsync(this.manifest[e].path,o=>this.assetProgress(o,e));return this.loadedAssets.set(e,(t=r==null?void 0:r.scene)!=null&&t.isObject3D?r.scene:r),(s=(i=this.manifest[e]).callback)==null||s.call(i,this.loadedAssets.get(e)),r}}loadAssets(){return Promise.all([...this.assetsToLoad.keys()].map(e=>this.loadAsset(e)))}loadCriticalAssets(){return Promise.all([...this.assetsToLoad.keys()].map(e=>this.manifest[e].critical&&this.loadAsset(e)))}assetProgress(e,t){var s;this.assetsInfos.has(t)||this.assetsInfos.set(t,{size:e.total,progress:0});const i=this.assetsInfos.get(t);i.progress=e.loaded/i.size,(s=this.progressCallback)==null||s.call(this)}}var to;class fE extends ur{constructor(t){super(t);ct(this,to,void 0);mn(this,to,new xm),this.setResponseType("blob")}load(t,i,s,r){const o=a=>{const l=URL.createObjectURL(a),c=document.createElement("img");c.onload=()=>{li.add(t,c),URL.revokeObjectURL(l),document.body.removeChild(c),Ge(this,to).load(t,i,()=>{},r)},c.src=l,c.style.visibility="hidden",document.body.appendChild(c)};super.load(t,o,s,r)}}to=new WeakMap;var no;class hE extends cs{constructor(t){super(t);ct(this,no,void 0);mn(this,no,new ur)}load(t,i,s,r){Ge(this,no).load(t,o=>{try{i(JSON.parse(o))}catch(a){r!==void 0&&r(a);return}},s,r)}}no=new WeakMap;var io,xc;class dE extends ur{constructor(t){super(t);ct(this,io,void 0);ct(this,xc,void 0);mn(this,io,new vm),this.setResponseType("blob")}load(t,i,s,r){const o=a=>{const l=URL.createObjectURL(a),c=document.createElement("img");c.onload=()=>{li.add(t,c),URL.revokeObjectURL(l),document.body.removeChild(c),Ge(this,io).load(t,i,()=>{},r)},c.src=l,c.style.visibility="hidden",document.body.appendChild(c)};super.load(t,o,s,r)}}io=new WeakMap,xc=new WeakMap;li.enabled=!0;var so,dc,fa,Mm,ha,Sm;class pE{constructor({blockingLoad:e=!0,withPriority:t=!1,withCriticals:i=!1}={}){ct(this,so);ct(this,fa);ct(this,ha);this.blockingLoad=e,this.withPriority=t,this.withCriticals=i,this.assetsInfos=new Map,this.loadedAssets=new Map,this.progress=0,this.loaders={images:new Tr({manifest:dr.images,loader:new fE,assetsInfos:this.assetsInfos,loadedAssets:this.loadedAssets,progressCallback:this.loadingProgress}),textures:new Tr({manifest:dr.textures,loader:new dE,assetsInfos:this.assetsInfos,loadedAssets:this.loadedAssets,progressCallback:this.loadingProgress}),envMaps:new Tr({manifest:dr.envMaps,loader:new uE,assetsInfos:this.assetsInfos,loadedAssets:this.loadedAssets,progressCallback:this.loadingProgress}),models:new Tr({manifest:dr.models,loader:new IT,assetsInfos:this.assetsInfos,loadedAssets:this.loadedAssets,progressCallback:this.loadingProgress}),jsons:new Tr({manifest:dr.jsons,loader:new hE,assetsInfos:this.assetsInfos,loadedAssets:this.loadedAssets,progressCallback:this.loadingProgress})}}async load(){this.withCriticals&&await ki(this,fa,Mm).call(this),this.blockingLoad?await ki(this,so,dc).call(this):this.withPriority?ki(this,ha,Sm).call(this):ki(this,so,dc).call(this)}loadingProgress(){this.progress=[...this.assetsInfos.values()].map(e=>e.progress).reduce((e,t)=>e+t,0)/this.assetsInfos.size,ut.emit(Zt.LOADER_PROGRESS,this.progress)}get(e){return this.loadedAssets.get(e)}}so=new WeakSet,dc=function(){return Promise.all(Object.values(this.loaders).map(e=>e.loadAssets()))},fa=new WeakSet,Mm=function(){return Promise.all(Object.values(this.loaders).map(e=>e.loadCriticalAssets()))},ha=new WeakSet,Sm=function(){return Promise.all(Object.values(this.loaders).map(e=>[...e.assetsToLoad.entries()].map(([t,i])=>({loader:e,key:t,priority:i.priority||0}))).flat().sort((e,t)=>e.priority-t.priority).map(({loader:e,key:t})=>e.loadAsset(t)))};var Hs,ro;class mE{constructor(){ct(this,Hs,!1);us(this,"play",()=>{mn(this,Hs,!0),Ge(this,ro).call(this)});us(this,"pause",()=>{mn(this,Hs,!1)});ct(this,ro,()=>{if(!Ge(this,Hs))return;window.requestAnimationFrame(Ge(this,ro));const e=Date.now();this.delta=e-this.current,this.elapsed+=this.delta,this.current=e,this.delta>60&&(this.delta=60),this.params.et=this.elapsed,this.params.dt=this.delta*.001,ut.emit(Zt.TICK,this.params),ut.emit(Zt.RENDER,this.params)});ut.register(this),this.current=Date.now(),this.elapsed=0,this.delta=16,this.params={et:0,dt:0}}onAttach(){this.play()}}Hs=new WeakMap,ro=new WeakMap;function gE(){const n=new pE,e=new mE;return{assetsManager:n,ticker:e}}const _E="modulepreload",xE=function(n){return"/web-client/"+n},Zh={},vE=function(e,t,i){if(!t||t.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map(r=>{if(r=xE(r),r in Zh)return;Zh[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let u=s.length-1;u>=0;u--){const f=s[u];if(f.href===r&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":_E,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};var da;class yE{constructor(){ct(this,da,e=>{ut.emit(Zt.KEY_DOWN,e.key)});ut.register(this)}onAttach(){document.addEventListener("keydown",Ge(this,da))}}da=new WeakMap;var oo,ao,pa,ma;class bE{constructor(){ct(this,oo,e=>{this.isTouch?e.touches&&e.touches.length>0&&this.updateCoordinate(e.touches[0].clientX,e.touches[0].clientY):this.updateCoordinate(e.clientX,e.clientY),this.isTouch||ut.emit(Zt.MOUSE_MOVE,this.coordinates)});ct(this,ao,()=>{this.isDown&&(this.previousCoordinates.webgl.copy(this.coordinates.webgl),this.previousCoordinates.dom.copy(this.coordinates.dom),this.isDown=!1,ut.emit(Zt.POINTER_UP))});ct(this,pa,e=>{if(!this.isDown){switch(e.pointerType){case"mouse":this.isTouch=!1;break;case"touch":this.isTouch=!0;break;case"pen":this.isTouch=!0;break}this.updateCoordinate(e.clientX,e.clientY),this.isDown=!0,ut.emit(Zt.POINTER_DOWN)}});ct(this,ma,()=>{this.isTouch||(this.isDown=!1,ut.emit(Zt.POINTER_UP))});ut.register(this),this.isTouch=!!(window.matchMedia("(pointer: coarse)").matches||typeof window.ontouchstart=="function"||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),this.isDown=!1}onAttach(){this.coordinates={webgl:new ke,dom:new ke(et.tools.viewport.width*.5,et.tools.viewport.height*.5)},this.previousCoordinates={webgl:this.coordinates.webgl.clone(),dom:this.coordinates.dom.clone()},et.$app.addEventListener("mousemove",Ge(this,oo)),et.$app.addEventListener("touchmove",Ge(this,oo),{passive:!0}),et.$app.addEventListener("pointerdown",Ge(this,pa)),et.$app.addEventListener("mouseup",Ge(this,ao)),et.$app.addEventListener("touchend",Ge(this,ao)),et.$app.addEventListener("pointerleave",Ge(this,ma))}updateCoordinate(e,t){this.previousCoordinates.dom.copy(this.coordinates.dom),this.previousCoordinates.webgl.copy(this.coordinates.webgl),this.coordinates.webgl.set(e/et.tools.viewport.width*2-1,-(t/et.tools.viewport.height)*2+1),this.coordinates.dom.set(e,t)}}oo=new WeakMap,ao=new WeakMap,pa=new WeakMap,ma=new WeakMap;class ME{constructor(){us(this,"resize",e=>{if(e[0].contentBoxSize){const t=Array.isArray(e[0].contentBoxSize)?e[0].contentBoxSize[0]:e[0].contentBoxSize;this.width=t.inlineSize,this.height=t.blockSize}else this.width=e[0].contentRect.width,this.height=e[0].contentRect.height;this.dpr=Math.min(window.innerWidth<fs.tablet?2:1.5,window.devicePixelRatio),this.ratio=this.width/this.height,this.breakpoint=window.innerWidth<fs.tablet?"mobile":window.innerWidth<fs.desktop?"tablet":"desktop",ut.emit(Zt.RESIZE,this.infos)});ut.register(this);const e=et.$wrapper.getBoundingClientRect();this.width=Math.min(window.innerWidth,e.width),this.height=e.height,this.dpr=Math.min(window.innerWidth<fs.tablet?2:1.5,window.devicePixelRatio),this.ratio=this.width/this.height,this.breakpoint=window.innerWidth<fs.tablet?"mobile":window.innerWidth<fs.desktop?"tablet":"desktop",this.isMobileAtLaunch=this.breakpoint==="mobile"}onAttach(){new ResizeObserver(this.resize).observe(et.$wrapper)}get infos(){return{width:this.width,height:this.height,dpr:this.dpr,ratio:this.ratio,device:this.breakpoint}}}function SE(){const n=new bE,e=new ME,t=new yE;return{mouse:n,viewport:e,keyboard:t}}const wm={uTime:{value:0}},Jh=45;class wE extends Wt{constructor(){super(Jh,et.tools.viewport.ratio,1,1e3),ut.register(this),this.position.z=20}onAttach(){var e;(e=et.debug)==null||e.mapping.add(this,"Camera")}onResize({ratio:e}){this.aspect=e,this.fov=Jh/Math.min(1,e*1.5),this.updateProjectionMatrix()}}function TE(n,e,t=!1){e.mapping=t?aa:oa;const i=new ac(n);i.compileEquirectangularShader();const s=i.fromEquirectangular(e).texture,r=s&&s.mapping===fo?s.image.height:null;if(r===null)return null;const o=Math.log2(r)-2,a=1/r,l=1/(3*Math.max(Math.pow(2,o),7*16));return s.userData={...s.userData,texelWidth:l,texelHeight:a,maxMip:o},e.dispose(),i.dispose(),s}class EE extends Hw{constructor(){super(),ut.register(this),this.background=new Fe(11184810),this.add(new xT(16777215,.5))}onAttach(){var e;this.sphere=new Jt(new ou(1,6),new Ia({roughness:.2,metalness:.5})),this.add(this.sphere),this.environment=TE(et.webgl.renderer,et.core.assetsManager.get("envmap"),!1),(e=et.debug)==null||e.mapping.add(this,"Scene")}}let AE=0;function Tm(n,e,t){const i=()=>{};return{c:++AE,shader:n,use:r=>{const o=r.material||r;return o[e]=n,o.needsUpdate=!0,r},unuse:i,clear:i}}const RE=`precision highp float;uniform sampler2D tDiffuse;uniform float uRatio;uniform float uResolution;uniform float uTime;varying vec2 vUv;
#define PI 3.14159265359
#define NEAR 1.
#define FAR 100.
void main(){vec3 scene=texture2D(tDiffuse,vUv).rgb;gl_FragColor=vec4(scene,1.);}`,CE=Tm(RE,"fragmentShader"),LE="attribute vec3 position;attribute vec2 uv;uniform mat4 projectionMatrix;uniform mat4 modelMatrix;varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelMatrix*vec4(position,1.);}",PE=Tm(LE,"vertexShader");class IE extends Qw{constructor(e={}){super(e),CE.use(this),PE.use(this)}}var Mi,ga,Em;class DE{constructor(e=!0){ct(this,ga);ct(this,Mi,void 0);ut.register(this),this.renderTarget=ki(this,ga,Em).call(this),mn(this,Mi,new IE({uniforms:{...wm,tDiffuse:{value:this.renderTarget.texture},uResolution:{value:new ke},uRatio:{value:et.tools.viewport.ratio}}}));const t=new pn().setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)).setAttribute("uv",new Qt([0,2,0,0,2,0],2));this.quad=new Jt(t,Ge(this,Mi)),this.camera=new La(-1,1,1,-1,0,1)}onAttach(){}onResize({width:e,height:t,dpr:i,ratio:s}){Ge(this,Mi).uniforms.uResolution.value.set(e*i,t*i),Ge(this,Mi).uniforms.uRatio.value=s,this.renderTarget.setSize(e*i,t*i)}get uniforms(){return Ge(this,Mi).uniforms}}Mi=new WeakMap,ga=new WeakSet,Em=function(e=!1){const t=new Pi(et.tools.viewport.width*et.tools.viewport.dpr,et.tools.viewport.height*et.tools.viewport.dpr,{samples:2});if(e){const i=new um(et.tools.viewport.width*et.tools.viewport.dpr,et.tools.viewport.height*et.tools.viewport.dpr);t.depthTexture=i}return t};class NE extends tu{constructor(){super({antialias:!1,powerPreference:"high-performance"}),ut.register(this),this.outputEncoding=Ye,this.autoClear=!1,this.debug.checkShaderErrors=Rx}onAttach(){var e;(e=et.debug)==null||e.mapping.add(this,"Stats")}onResize({width:e,height:t,dpr:i}){this.setSize(e,t),this.setPixelRatio(i)}}class OE{constructor(){ut.register(this),this.renderer=new NE,this.postProcessing=new DE(this.renderer.capabilities.isWebGL2),this.scene=new EE,this.camera=new wE}onAttach(){et.$wrapper.prepend(this.renderer.domElement)}onResize(){}onRouteChange(e){}onTick({et:e}){wm.uTime.value=e}onRender(){this.renderer.clear(),this.renderer.setRenderTarget(this.postProcessing.renderTarget),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.renderer.render(this.postProcessing.quad,this.postProcessing.camera)}}const Ns=class{init(e,t){this.$app=e,this.$wrapper=t,this.core=gE(),this.tools=SE(),this.webgl=new OE}async beforeLoad(){var e;(e=this.debug)==null||e.mapping.init()}async load(){await this.beforeLoad(),await this.core.assetsManager.load(),ut.emit(Zt.APP_LOADED),ut.emit(Zt.ATTACH),ut.emit(Zt.RESIZE,this.tools.viewport.infos)}static getInstance(){return Ns.instance||(Ns.instance=new Ns),Ns.instance}};let Jo=Ns;us(Jo,"instance");const et=Jo.getInstance(),FE={__name:"WebglContainer",setup(n){const e=Zn(),t=Zn();return Sa(()=>et.init(e.value,t.value)),(i,s)=>(ia(),kc("div",{id:"webgl-app",ref_key:"webglAppContainer",ref:e},[ei("div",{id:"canvas-wrapper",ref_key:"canvasWrapper",ref:t},null,512)],512))}};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Rs=typeof window<"u";function UE(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Je=Object.assign;function Pl(n,e){const t={};for(const i in e){const s=e[i];t[i]=Cn(s)?s.map(n):n(s)}return t}const Br=()=>{},Cn=Array.isArray,BE=/\/$/,kE=n=>n.replace(BE,"");function Il(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=HE(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function zE(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Qh(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function VE(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Qs(e.matched[i],t.matched[s])&&Am(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Qs(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Am(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!GE(n[t],e[t]))return!1;return!0}function GE(n,e){return Cn(n)?ed(n,e):Cn(e)?ed(e,n):n===e}function ed(n,e){return Cn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function HE(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let s=t.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var eo;(function(n){n.pop="pop",n.push="push"})(eo||(eo={}));var kr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(kr||(kr={}));function WE(n){if(!n)if(Rs){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),kE(n)}const jE=/^[^#]+#/;function XE(n,e){return n.replace(jE,"#")+e}function qE(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Na=()=>({left:window.pageXOffset,top:window.pageYOffset});function $E(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=qE(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function td(n,e){return(history.state?history.state.position-e:-1)+n}const pc=new Map;function KE(n,e){pc.set(n,e)}function YE(n){const e=pc.get(n);return pc.delete(n),e}let ZE=()=>location.protocol+"//"+location.host;function Rm(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Qh(l,"")}return Qh(t,n)+i+s}function JE(n,e,t,i){let s=[],r=[],o=null;const a=({state:h})=>{const d=Rm(n,location),_=t.value,p=e.value;let m=0;if(h){if(t.value=d,e.value=h,o&&o===_){o=null;return}m=p?h.position-p.position:0}else i(d);s.forEach(v=>{v(t.value,_,{delta:m,type:eo.pop,direction:m?m>0?kr.forward:kr.back:kr.unknown})})};function l(){o=t.value}function c(h){s.push(h);const d=()=>{const _=s.indexOf(h);_>-1&&s.splice(_,1)};return r.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(Je({},h.state,{scroll:Na()}),"")}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function nd(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?Na():null}}function QE(n){const{history:e,location:t}=window,i={value:Rm(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:ZE()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){const u=Je({},e.state,nd(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=Je({},s.value,e.state,{forward:l,scroll:Na()});r(u.current,u,!0);const f=Je({},nd(i.value,l,null),{position:u.position+1},c);r(l,f,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function e1(n){n=WE(n);const e=QE(n),t=JE(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=Je({location:"",base:n,go:i,createHref:XE.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function t1(n){return typeof n=="string"||n&&typeof n=="object"}function Cm(n){return typeof n=="string"||typeof n=="symbol"}const _i={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Lm=Symbol("");var id;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(id||(id={}));function er(n,e){return Je(new Error,{type:n,[Lm]:!0},e)}function Kn(n,e){return n instanceof Error&&Lm in n&&(e==null||!!(n.type&e))}const sd="[^/]+?",n1={sensitive:!1,strict:!1,start:!0,end:!0},i1=/[.+*?^${}()[\]/\\]/g;function s1(n,e){const t=Je({},n1,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(i1,"\\$&"),d+=40;else if(h.type===1){const{value:_,repeatable:p,optional:m,regexp:v}=h;r.push({name:_,repeatable:p,optional:m});const b=v||sd;if(b!==sd){d+=10;try{new RegExp(`(${b})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+M.message)}}let g=p?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;f||(g=m&&c.length<2?`(?:/${g})`:"/"+g),m&&(g+="?"),s+=g,d+=20,m&&(d+=-8),p&&(d+=-20),b===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",_=r[h-1];f[_.name]=d&&_.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:_,repeatable:p,optional:m}=d,v=_ in c?c[_]:"";if(Cn(v)&&!p)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=Cn(v)?v.join("/"):v;if(!b)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=b}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function r1(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function o1(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=r1(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(rd(i))return 1;if(rd(s))return-1}return s.length-i.length}function rd(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const a1={type:0,value:""},l1=/[a-zA-Z0-9_]/;function c1(n){if(!n)return[[]];if(n==="/")return[[a1]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:l1.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function u1(n,e,t){const i=s1(c1(n.path),t),s=Je(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function f1(n,e){const t=[],i=new Map;e=ld({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,f,h){const d=!h,_=h1(u);_.aliasOf=h&&h.record;const p=ld(e,u),m=[_];if("alias"in u){const g=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of g)m.push(Je({},_,{components:h?h.record.components:_.components,path:M,aliasOf:h?h.record:_}))}let v,b;for(const g of m){const{path:M}=g;if(f&&M[0]!=="/"){const w=f.record.path,A=w[w.length-1]==="/"?"":"/";g.path=f.record.path+(M&&A+M)}if(v=u1(g,f,p),h?h.alias.push(v):(b=b||v,b!==v&&b.alias.push(v),d&&u.name&&!ad(v)&&o(u.name)),_.children){const w=_.children;for(let A=0;A<w.length;A++)r(w[A],v,h&&h.children[A])}h=h||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return b?()=>{o(b)}:Br}function o(u){if(Cm(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&o1(u,t[f])>=0&&(u.record.path!==t[f].record.path||!Pm(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!ad(u)&&i.set(u.record.name,u)}function c(u,f){let h,d={},_,p;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw er(1,{location:u});p=h.record.name,d=Je(od(f.params,h.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&od(u.params,h.keys.map(b=>b.name))),_=h.stringify(d)}else if("path"in u)_=u.path,h=t.find(b=>b.re.test(_)),h&&(d=h.parse(_),p=h.record.name);else{if(h=f.name?i.get(f.name):t.find(b=>b.re.test(f.path)),!h)throw er(1,{location:u,currentLocation:f});p=h.record.name,d=Je({},f.params,u.params),_=h.stringify(d)}const m=[];let v=h;for(;v;)m.unshift(v.record),v=v.parent;return{name:p,path:_,params:d,matched:m,meta:p1(m)}}return n.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function od(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function h1(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:d1(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function d1(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function ad(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function p1(n){return n.reduce((e,t)=>Je(e,t.meta),{})}function ld(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Pm(n,e){return e.children.some(t=>t===n||Pm(n,t))}const Im=/#/g,m1=/&/g,g1=/\//g,_1=/=/g,x1=/\?/g,Dm=/\+/g,v1=/%5B/g,y1=/%5D/g,Nm=/%5E/g,b1=/%60/g,Om=/%7B/g,M1=/%7C/g,Fm=/%7D/g,S1=/%20/g;function uu(n){return encodeURI(""+n).replace(M1,"|").replace(v1,"[").replace(y1,"]")}function w1(n){return uu(n).replace(Om,"{").replace(Fm,"}").replace(Nm,"^")}function mc(n){return uu(n).replace(Dm,"%2B").replace(S1,"+").replace(Im,"%23").replace(m1,"%26").replace(b1,"`").replace(Om,"{").replace(Fm,"}").replace(Nm,"^")}function T1(n){return mc(n).replace(_1,"%3D")}function E1(n){return uu(n).replace(Im,"%23").replace(x1,"%3F")}function A1(n){return n==null?"":E1(n).replace(g1,"%2F")}function ca(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function R1(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Dm," "),o=r.indexOf("="),a=ca(o<0?r:r.slice(0,o)),l=o<0?null:ca(r.slice(o+1));if(a in e){let c=e[a];Cn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function cd(n){let e="";for(let t in n){const i=n[t];if(t=T1(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Cn(i)?i.map(r=>r&&mc(r)):[i&&mc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function C1(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Cn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const L1=Symbol(""),ud=Symbol(""),fu=Symbol(""),Um=Symbol(""),gc=Symbol("");function Er(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function yi(n,e,t,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(er(4,{from:t,to:e})):f instanceof Error?a(f):t1(f)?a(er(2,{from:e,to:f})):(r&&i.enterCallbacks[s]===r&&typeof f=="function"&&r.push(f),o())},c=n.call(i&&i.instances[s],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function Dl(n,e,t,i){const s=[];for(const r of n)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(P1(a)){const c=(a.__vccOpts||a)[e];c&&s.push(yi(c,t,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=UE(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&yi(h,t,i,r,o)()}))}}return s}function P1(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function fd(n){const e=kn(fu),t=kn(Um),i=Lt(()=>e.resolve(si(n.to))),s=Lt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Qs.bind(null,u));if(h>-1)return h;const d=hd(l[c-2]);return c>1&&hd(u)===d&&f[f.length-1].path!==d?f.findIndex(Qs.bind(null,l[c-2])):h}),r=Lt(()=>s.value>-1&&N1(t.params,i.value.params)),o=Lt(()=>s.value>-1&&s.value===t.matched.length-1&&Am(t.params,i.value.params));function a(l={}){return D1(l)?e[si(n.replace)?"replace":"push"](si(n.to)).catch(Br):Promise.resolve()}return{route:i,href:Lt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const I1=Jd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:fd,setup(n,{slots:e}){const t=co(fd(n)),{options:i}=kn(fu),s=Lt(()=>({[dd(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[dd(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return n.custom?r:Ea("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),_c=I1;function D1(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function N1(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!Cn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function hd(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const dd=(n,e,t)=>n??e??t,O1=Jd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=kn(gc),s=Lt(()=>n.route||i.value),r=kn(ud,0),o=Lt(()=>{let c=si(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Lt(()=>s.value.matched[o.value]);qo(ud,Lt(()=>o.value+1)),qo(L1,a),qo(gc,s);const l=Zn();return Ei(()=>[l.value,a.value,n.name],([c,u,f],[h,d,_])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Qs(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(p=>p(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return pd(t.default,{Component:h,route:c});const d=f.props[u],_=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Ea(h,Je({},_,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return pd(t.default,{Component:m,route:c})||m}}});function pd(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Bm=O1;function F1(n){const e=f1(n.routes,n),t=n.parseQuery||R1,i=n.stringifyQuery||cd,s=n.history,r=Er(),o=Er(),a=Er(),l=Ug(_i);let c=_i;Rs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Pl.bind(null,C=>""+C),f=Pl.bind(null,A1),h=Pl.bind(null,ca);function d(C,q){let X,se;return Cm(C)?(X=e.getRecordMatcher(C),se=q):se=C,e.addRoute(se,X)}function _(C){const q=e.getRecordMatcher(C);q&&e.removeRoute(q)}function p(){return e.getRoutes().map(C=>C.record)}function m(C){return!!e.getRecordMatcher(C)}function v(C,q){if(q=Je({},q||l.value),typeof C=="string"){const E=Il(t,C,q.path),P=e.resolve({path:E.path},q),G=s.createHref(E.fullPath);return Je(E,P,{params:h(P.params),hash:ca(E.hash),redirectedFrom:void 0,href:G})}let X;if("path"in C)X=Je({},C,{path:Il(t,C.path,q.path).path});else{const E=Je({},C.params);for(const P in E)E[P]==null&&delete E[P];X=Je({},C,{params:f(C.params)}),q.params=f(q.params)}const se=e.resolve(X,q),de=C.hash||"";se.params=u(h(se.params));const be=zE(i,Je({},C,{hash:w1(de),path:se.path})),ve=s.createHref(be);return Je({fullPath:be,hash:de,query:i===cd?C1(C.query):C.query||{}},se,{redirectedFrom:void 0,href:ve})}function b(C){return typeof C=="string"?Il(t,C,l.value.path):Je({},C)}function g(C,q){if(c!==C)return er(8,{from:q,to:C})}function M(C){return L(C)}function w(C){return M(Je(b(C),{replace:!0}))}function A(C){const q=C.matched[C.matched.length-1];if(q&&q.redirect){const{redirect:X}=q;let se=typeof X=="function"?X(C):X;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=b(se):{path:se},se.params={}),Je({query:C.query,hash:C.hash,params:"path"in se?{}:C.params},se)}}function L(C,q){const X=c=v(C),se=l.value,de=C.state,be=C.force,ve=C.replace===!0,E=A(X);if(E)return L(Je(b(E),{state:typeof E=="object"?Je({},de,E.state):de,force:be,replace:ve}),q||X);const P=X;P.redirectedFrom=q;let G;return!be&&VE(i,se,X)&&(G=er(16,{to:P,from:se}),fe(se,se,!0,!1)),(G?Promise.resolve(G):T(P,se)).catch($=>Kn($)?Kn($,2)?$:oe($):K($,P,se)).then($=>{if($){if(Kn($,2))return L(Je({replace:ve},b($.to),{state:typeof $.to=="object"?Je({},de,$.to.state):de,force:be}),q||P)}else $=F(P,se,!0,ve,de);return I(P,se,$),$})}function S(C,q){const X=g(C,q);return X?Promise.reject(X):Promise.resolve()}function T(C,q){let X;const[se,de,be]=U1(C,q);X=Dl(se.reverse(),"beforeRouteLeave",C,q);for(const E of se)E.leaveGuards.forEach(P=>{X.push(yi(P,C,q))});const ve=S.bind(null,C,q);return X.push(ve),Ts(X).then(()=>{X=[];for(const E of r.list())X.push(yi(E,C,q));return X.push(ve),Ts(X)}).then(()=>{X=Dl(de,"beforeRouteUpdate",C,q);for(const E of de)E.updateGuards.forEach(P=>{X.push(yi(P,C,q))});return X.push(ve),Ts(X)}).then(()=>{X=[];for(const E of C.matched)if(E.beforeEnter&&!q.matched.includes(E))if(Cn(E.beforeEnter))for(const P of E.beforeEnter)X.push(yi(P,C,q));else X.push(yi(E.beforeEnter,C,q));return X.push(ve),Ts(X)}).then(()=>(C.matched.forEach(E=>E.enterCallbacks={}),X=Dl(be,"beforeRouteEnter",C,q),X.push(ve),Ts(X))).then(()=>{X=[];for(const E of o.list())X.push(yi(E,C,q));return X.push(ve),Ts(X)}).catch(E=>Kn(E,8)?E:Promise.reject(E))}function I(C,q,X){for(const se of a.list())se(C,q,X)}function F(C,q,X,se,de){const be=g(C,q);if(be)return be;const ve=q===_i,E=Rs?history.state:{};X&&(se||ve?s.replace(C.fullPath,Je({scroll:ve&&E&&E.scroll},de)):s.push(C.fullPath,de)),l.value=C,fe(C,q,X,ve),oe()}let Z;function k(){Z||(Z=s.listen((C,q,X)=>{if(!xe.listening)return;const se=v(C),de=A(se);if(de){L(Je(de,{replace:!0}),se).catch(Br);return}c=se;const be=l.value;Rs&&KE(td(be.fullPath,X.delta),Na()),T(se,be).catch(ve=>Kn(ve,12)?ve:Kn(ve,2)?(L(ve.to,se).then(E=>{Kn(E,20)&&!X.delta&&X.type===eo.pop&&s.go(-1,!1)}).catch(Br),Promise.reject()):(X.delta&&s.go(-X.delta,!1),K(ve,se,be))).then(ve=>{ve=ve||F(se,be,!1),ve&&(X.delta&&!Kn(ve,8)?s.go(-X.delta,!1):X.type===eo.pop&&Kn(ve,20)&&s.go(-1,!1)),I(se,be,ve)}).catch(Br)}))}let U=Er(),j=Er(),re;function K(C,q,X){oe(C);const se=j.list();return se.length?se.forEach(de=>de(C,q,X)):console.error(C),Promise.reject(C)}function z(){return re&&l.value!==_i?Promise.resolve():new Promise((C,q)=>{U.add([C,q])})}function oe(C){return re||(re=!C,k(),U.list().forEach(([q,X])=>C?X(C):q()),U.reset()),C}function fe(C,q,X,se){const{scrollBehavior:de}=n;if(!Rs||!de)return Promise.resolve();const be=!X&&YE(td(C.fullPath,0))||(se||!X)&&history.state&&history.state.scroll||null;return Gd().then(()=>de(C,q,be)).then(ve=>ve&&$E(ve)).catch(ve=>K(ve,C,q))}const Me=C=>s.go(C);let H;const ue=new Set,xe={currentRoute:l,listening:!0,addRoute:d,removeRoute:_,hasRoute:m,getRoutes:p,resolve:v,options:n,push:M,replace:w,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:j.add,isReady:z,install(C){const q=this;C.component("RouterLink",_c),C.component("RouterView",Bm),C.config.globalProperties.$router=q,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>si(l)}),Rs&&!H&&l.value===_i&&(H=!0,M(s.location).catch(de=>{}));const X={};for(const de in _i)X[de]=Lt(()=>l.value[de]);C.provide(fu,q),C.provide(Um,co(X)),C.provide(gc,l);const se=C.unmount;ue.add(C),C.unmount=function(){ue.delete(C),ue.size<1&&(c=_i,Z&&Z(),Z=null,l.value=_i,H=!1,re=!1),se()}}};return xe}function Ts(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function U1(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>Qs(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Qs(c,l))||s.push(l))}return[t,i,s]}const B1={class:"container"},k1={class:"wrapper"},z1=ei("footer",null,null,-1),V1={__name:"App",setup(n){return(e,t)=>(ia(),kc("div",B1,[ei("header",null,[ei("div",k1,[ei("nav",null,[It(si(_c),{to:"/"},{default:kl(()=>[jl("Home")]),_:1}),It(si(_c),{to:"/game"},{default:kl(()=>[jl("Game")]),_:1})])])]),ei("main",null,[(ia(),L_(t_,null,[It(FE)],1024)),It(si(Bm))]),z1]))}};const G1={class:"home"},H1=ei("h1",null,"Homepage",-1),W1=[H1],j1={__name:"HomeView",setup(n){return(e,t)=>(ia(),kc("div",G1,W1))}},km=F1({history:e1("/web-client/"),routes:[{path:"/",name:"home",component:j1},{path:"/game",name:"game",component:()=>vE(()=>import("./GameView-df81be21.js"),[]),beforeEnter:async()=>{}}]});km.afterEach((n,e)=>{ut.emit(Zt.ROUTE_CHANGE,n.name)});const X1=gx({legacy:!1,globalInjection:!0,locale:"en",fallbackLocale:"en",availableLocales:["en","fr","es"],messages:Xm}),Oa=u0(V1);Oa.use(p0());Oa.use(km);Oa.use(X1);Oa.mount("#vue-app");export{et as a,ia as b,kc as c,ei as d,si as e,Sa as o,$1 as t,$c as u};
