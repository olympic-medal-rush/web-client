var Mb=Object.defineProperty;var Sb=(i,e,t)=>e in i?Mb(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var In=(i,e,t)=>(Sb(i,typeof e!="symbol"?e+"":e,t),t),Lf=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)};var G=(i,e,t)=>(Lf(i,e,"read from private field"),t?t.call(i):e.get(i)),ve=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},mt=(i,e,t,n)=>(Lf(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t);var Ve=(i,e,t)=>(Lf(i,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function kd(i,e){const t=Object.create(null),n=i.split(",");for(let s=0;s<n.length;s++)t[n[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const _t={},So=[],di=()=>{},wb=()=>!1,Tb=/^on[^a-z]/,Qu=i=>Tb.test(i),zd=i=>i.startsWith("onUpdate:"),Xt=Object.assign,Bd=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Eb=Object.prototype.hasOwnProperty,Qe=(i,e)=>Eb.call(i,e),Fe=Array.isArray,wo=i=>ef(i)==="[object Map]",S_=i=>ef(i)==="[object Set]",He=i=>typeof i=="function",Ft=i=>typeof i=="string",Vd=i=>typeof i=="symbol",vt=i=>i!==null&&typeof i=="object",w_=i=>vt(i)&&He(i.then)&&He(i.catch),T_=Object.prototype.toString,ef=i=>T_.call(i),Ab=i=>ef(i).slice(8,-1),E_=i=>ef(i)==="[object Object]",Gd=i=>Ft(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Nc=kd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tf=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Cb=/-(\w)/g,jo=tf(i=>i.replace(Cb,(e,t)=>t?t.toUpperCase():"")),Rb=/\B([A-Z])/g,fa=tf(i=>i.replace(Rb,"-$1").toLowerCase()),A_=tf(i=>i.charAt(0).toUpperCase()+i.slice(1)),Pf=tf(i=>i?`on${A_(i)}`:""),ul=(i,e)=>!Object.is(i,e),If=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},$c=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},Lb=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let nm;const Ih=()=>nm||(nm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hd(i){if(Fe(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],s=Ft(n)?Nb(n):Hd(n);if(s)for(const r in s)e[r]=s[r]}return e}else{if(Ft(i))return i;if(vt(i))return i}}const Pb=/;(?![^(]*\))/g,Ib=/:([^]+)/,Db=new RegExp("\\/\\*.*?\\*\\/","gs");function Nb(i){const e={};return i.replace(Db,"").split(Pb).forEach(t=>{if(t){const n=t.split(Ib);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Wd(i){let e="";if(Ft(i))e=i;else if(Fe(i))for(let t=0;t<i.length;t++){const n=Wd(i[t]);n&&(e+=n+" ")}else if(vt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Ob="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ub=kd(Ob);function C_(i){return!!i||i===""}const Fb=i=>Ft(i)?i:i==null?"":Fe(i)||vt(i)&&(i.toString===T_||!He(i.toString))?JSON.stringify(i,R_,2):String(i),R_=(i,e)=>e&&e.__v_isRef?R_(i,e.value):wo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,s])=>(t[`${n} =>`]=s,t),{})}:S_(e)?{[`Set(${e.size})`]:[...e.values()]}:vt(e)&&!Fe(e)&&!E_(e)?String(e):e;let Fn;class L_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Fn,!e&&Fn&&(this.index=(Fn.scopes||(Fn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Fn;try{return Fn=this,e()}finally{Fn=t}}}on(){Fn=this}off(){Fn=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function jd(i){return new L_(i)}function kb(i,e=Fn){e&&e.active&&e.effects.push(i)}function P_(){return Fn}function zb(i){Fn&&Fn.cleanups.push(i)}const Xd=i=>{const e=new Set(i);return e.w=0,e.n=0,e},I_=i=>(i.w&qs)>0,D_=i=>(i.n&qs)>0,Bb=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=qs},Vb=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const s=e[n];I_(s)&&!D_(s)?s.delete(i):e[t++]=s,s.w&=~qs,s.n&=~qs}e.length=t}},Yc=new WeakMap;let Wa=0,qs=1;const Dh=30;let li;const Lr=Symbol(""),Nh=Symbol("");class qd{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,kb(this,n)}run(){if(!this.active)return this.fn();let e=li,t=Bs;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=li,li=this,Bs=!0,qs=1<<++Wa,Wa<=Dh?Bb(this):im(this),this.fn()}finally{Wa<=Dh&&Vb(this),qs=1<<--Wa,li=this.parent,Bs=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){li===this?this.deferStop=!0:this.active&&(im(this),this.onStop&&this.onStop(),this.active=!1)}}function im(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let Bs=!0;const N_=[];function ha(){N_.push(Bs),Bs=!1}function da(){const i=N_.pop();Bs=i===void 0?!0:i}function Cn(i,e,t){if(Bs&&li){let n=Yc.get(i);n||Yc.set(i,n=new Map);let s=n.get(t);s||n.set(t,s=Xd()),O_(s)}}function O_(i,e){let t=!1;Wa<=Dh?D_(i)||(i.n|=qs,t=!I_(i)):t=!i.has(li),t&&(i.add(li),li.deps.push(i))}function ls(i,e,t,n,s,r){const o=Yc.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Fe(i)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Fe(i)?Gd(t)&&a.push(o.get("length")):(a.push(o.get(Lr)),wo(i)&&a.push(o.get(Nh)));break;case"delete":Fe(i)||(a.push(o.get(Lr)),wo(i)&&a.push(o.get(Nh)));break;case"set":wo(i)&&a.push(o.get(Lr));break}if(a.length===1)a[0]&&Oh(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Oh(Xd(l))}}function Oh(i,e){const t=Fe(i)?i:[...i];for(const n of t)n.computed&&sm(n);for(const n of t)n.computed||sm(n)}function sm(i,e){(i!==li||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}function Gb(i,e){var t;return(t=Yc.get(i))==null?void 0:t.get(e)}const Hb=kd("__proto__,__v_isRef,__isVue"),U_=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Vd)),Wb=$d(),jb=$d(!1,!0),Xb=$d(!0),rm=qb();function qb(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=tt(this);for(let r=0,o=this.length;r<o;r++)Cn(n,"get",r+"");const s=n[e](...t);return s===-1||s===!1?n[e](...t.map(tt)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){ha();const n=tt(this)[e].apply(this,t);return da(),n}}),i}function $b(i){const e=tt(this);return Cn(e,"has",i),e.hasOwnProperty(i)}function $d(i=!1,e=!1){return function(n,s,r){if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(i?e?u1:V_:e?B_:z_).get(n))return n;const o=Fe(n);if(!i){if(o&&Qe(rm,s))return Reflect.get(rm,s,r);if(s==="hasOwnProperty")return $b}const a=Reflect.get(n,s,r);return(Vd(s)?U_.has(s):Hb(s))||(i||Cn(n,"get",s),e)?a:bt(a)?o&&Gd(s)?a:a.value:vt(a)?i?G_(a):pa(a):a}}const Yb=F_(),Kb=F_(!0);function F_(i=!1){return function(t,n,s,r){let o=t[n];if(Xo(o)&&bt(o)&&!bt(s))return!1;if(!i&&(!Kc(s)&&!Xo(s)&&(o=tt(o),s=tt(s)),!Fe(t)&&bt(o)&&!bt(s)))return o.value=s,!0;const a=Fe(t)&&Gd(n)?Number(n)<t.length:Qe(t,n),l=Reflect.set(t,n,s,r);return t===tt(r)&&(a?ul(s,o)&&ls(t,"set",n,s):ls(t,"add",n,s)),l}}function Zb(i,e){const t=Qe(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&ls(i,"delete",e,void 0),n}function Jb(i,e){const t=Reflect.has(i,e);return(!Vd(e)||!U_.has(e))&&Cn(i,"has",e),t}function Qb(i){return Cn(i,"iterate",Fe(i)?"length":Lr),Reflect.ownKeys(i)}const k_={get:Wb,set:Yb,deleteProperty:Zb,has:Jb,ownKeys:Qb},e1={get:Xb,set(i,e){return!0},deleteProperty(i,e){return!0}},t1=Xt({},k_,{get:jb,set:Kb}),Yd=i=>i,nf=i=>Reflect.getPrototypeOf(i);function Zl(i,e,t=!1,n=!1){i=i.__v_raw;const s=tt(i),r=tt(e);t||(e!==r&&Cn(s,"get",e),Cn(s,"get",r));const{has:o}=nf(s),a=n?Yd:t?Jd:fl;if(o.call(s,e))return a(i.get(e));if(o.call(s,r))return a(i.get(r));i!==s&&i.get(e)}function Jl(i,e=!1){const t=this.__v_raw,n=tt(t),s=tt(i);return e||(i!==s&&Cn(n,"has",i),Cn(n,"has",s)),i===s?t.has(i):t.has(i)||t.has(s)}function Ql(i,e=!1){return i=i.__v_raw,!e&&Cn(tt(i),"iterate",Lr),Reflect.get(i,"size",i)}function om(i){i=tt(i);const e=tt(this);return nf(e).has.call(e,i)||(e.add(i),ls(e,"add",i,i)),this}function am(i,e){e=tt(e);const t=tt(this),{has:n,get:s}=nf(t);let r=n.call(t,i);r||(i=tt(i),r=n.call(t,i));const o=s.call(t,i);return t.set(i,e),r?ul(e,o)&&ls(t,"set",i,e):ls(t,"add",i,e),this}function lm(i){const e=tt(this),{has:t,get:n}=nf(e);let s=t.call(e,i);s||(i=tt(i),s=t.call(e,i)),n&&n.call(e,i);const r=e.delete(i);return s&&ls(e,"delete",i,void 0),r}function cm(){const i=tt(this),e=i.size!==0,t=i.clear();return e&&ls(i,"clear",void 0,void 0),t}function ec(i,e){return function(n,s){const r=this,o=r.__v_raw,a=tt(o),l=e?Yd:i?Jd:fl;return!i&&Cn(a,"iterate",Lr),o.forEach((c,u)=>n.call(s,l(c),l(u),r))}}function tc(i,e,t){return function(...n){const s=this.__v_raw,r=tt(s),o=wo(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),u=t?Yd:e?Jd:fl;return!e&&Cn(r,"iterate",l?Nh:Lr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ps(i){return function(...e){return i==="delete"?!1:this}}function n1(){const i={get(r){return Zl(this,r)},get size(){return Ql(this)},has:Jl,add:om,set:am,delete:lm,clear:cm,forEach:ec(!1,!1)},e={get(r){return Zl(this,r,!1,!0)},get size(){return Ql(this)},has:Jl,add:om,set:am,delete:lm,clear:cm,forEach:ec(!1,!0)},t={get(r){return Zl(this,r,!0)},get size(){return Ql(this,!0)},has(r){return Jl.call(this,r,!0)},add:ps("add"),set:ps("set"),delete:ps("delete"),clear:ps("clear"),forEach:ec(!0,!1)},n={get(r){return Zl(this,r,!0,!0)},get size(){return Ql(this,!0)},has(r){return Jl.call(this,r,!0)},add:ps("add"),set:ps("set"),delete:ps("delete"),clear:ps("clear"),forEach:ec(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=tc(r,!1,!1),t[r]=tc(r,!0,!1),e[r]=tc(r,!1,!0),n[r]=tc(r,!0,!0)}),[i,t,e,n]}const[i1,s1,r1,o1]=n1();function Kd(i,e){const t=e?i?o1:r1:i?s1:i1;return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(Qe(t,s)&&s in n?t:n,s,r)}const a1={get:Kd(!1,!1)},l1={get:Kd(!1,!0)},c1={get:Kd(!0,!1)},z_=new WeakMap,B_=new WeakMap,V_=new WeakMap,u1=new WeakMap;function f1(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function h1(i){return i.__v_skip||!Object.isExtensible(i)?0:f1(Ab(i))}function pa(i){return Xo(i)?i:Zd(i,!1,k_,a1,z_)}function d1(i){return Zd(i,!1,t1,l1,B_)}function G_(i){return Zd(i,!0,e1,c1,V_)}function Zd(i,e,t,n,s){if(!vt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const r=s.get(i);if(r)return r;const o=h1(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return s.set(i,a),a}function Vs(i){return Xo(i)?Vs(i.__v_raw):!!(i&&i.__v_isReactive)}function Xo(i){return!!(i&&i.__v_isReadonly)}function Kc(i){return!!(i&&i.__v_isShallow)}function H_(i){return Vs(i)||Xo(i)}function tt(i){const e=i&&i.__v_raw;return e?tt(e):i}function qo(i){return $c(i,"__v_skip",!0),i}const fl=i=>vt(i)?pa(i):i,Jd=i=>vt(i)?G_(i):i;function W_(i){Bs&&li&&(i=tt(i),O_(i.dep||(i.dep=Xd())))}function j_(i,e){i=tt(i);const t=i.dep;t&&Oh(t)}function bt(i){return!!(i&&i.__v_isRef===!0)}function ci(i){return X_(i,!1)}function p1(i){return X_(i,!0)}function X_(i,e){return bt(i)?i:new m1(i,e)}class m1{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:tt(e),this._value=t?e:fl(e)}get value(){return W_(this),this._value}set value(e){const t=this.__v_isShallow||Kc(e)||Xo(e);e=t?e:tt(e),ul(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:fl(e),j_(this))}}function Pr(i){return bt(i)?i.value:i}const g1={get:(i,e,t)=>Pr(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const s=i[e];return bt(s)&&!bt(t)?(s.value=t,!0):Reflect.set(i,e,t,n)}};function q_(i){return Vs(i)?i:new Proxy(i,g1)}function _1(i){const e=Fe(i)?new Array(i.length):{};for(const t in i)e[t]=x1(i,t);return e}class v1{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Gb(tt(this._object),this._key)}}function x1(i,e,t){const n=i[e];return bt(n)?n:new v1(i,e,t)}class y1{constructor(e,t,n,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new qd(e,()=>{this._dirty||(this._dirty=!0,j_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=n}get value(){const e=tt(this);return W_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function b1(i,e,t=!1){let n,s;const r=He(i);return r?(n=i,s=di):(n=i.get,s=i.set),new y1(n,s,r||!s,t)}function Gs(i,e,t,n){let s;try{s=n?i(...n):i()}catch(r){sf(r,e,t)}return s}function pi(i,e,t,n){if(He(i)){const r=Gs(i,e,t,n);return r&&w_(r)&&r.catch(o=>{sf(o,e,t)}),r}const s=[];for(let r=0;r<i.length;r++)s.push(pi(i[r],e,t,n));return s}function sf(i,e,t,n=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Gs(l,null,10,[i,o,a]);return}}M1(i,t,s,n)}function M1(i,e,t,n=!0){console.error(i)}let hl=!1,Uh=!1;const sn=[];let Di=0;const To=[];let Ki=null,vr=0;const $_=Promise.resolve();let Qd=null;function ep(i){const e=Qd||$_;return i?e.then(this?i.bind(this):i):e}function S1(i){let e=Di+1,t=sn.length;for(;e<t;){const n=e+t>>>1;dl(sn[n])<i?e=n+1:t=n}return e}function tp(i){(!sn.length||!sn.includes(i,hl&&i.allowRecurse?Di+1:Di))&&(i.id==null?sn.push(i):sn.splice(S1(i.id),0,i),Y_())}function Y_(){!hl&&!Uh&&(Uh=!0,Qd=$_.then(Z_))}function w1(i){const e=sn.indexOf(i);e>Di&&sn.splice(e,1)}function T1(i){Fe(i)?To.push(...i):(!Ki||!Ki.includes(i,i.allowRecurse?vr+1:vr))&&To.push(i),Y_()}function um(i,e=hl?Di+1:0){for(;e<sn.length;e++){const t=sn[e];t&&t.pre&&(sn.splice(e,1),e--,t())}}function K_(i){if(To.length){const e=[...new Set(To)];if(To.length=0,Ki){Ki.push(...e);return}for(Ki=e,Ki.sort((t,n)=>dl(t)-dl(n)),vr=0;vr<Ki.length;vr++)Ki[vr]();Ki=null,vr=0}}const dl=i=>i.id==null?1/0:i.id,E1=(i,e)=>{const t=dl(i)-dl(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function Z_(i){Uh=!1,hl=!0,sn.sort(E1);const e=di;try{for(Di=0;Di<sn.length;Di++){const t=sn[Di];t&&t.active!==!1&&Gs(t,null,14)}}finally{Di=0,sn.length=0,K_(),hl=!1,Qd=null,(sn.length||To.length)&&Z_()}}function A1(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||_t;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=n[u]||_t;h&&(s=t.map(p=>Ft(p)?p.trim():p)),f&&(s=t.map(Lb))}let a,l=n[a=Pf(e)]||n[a=Pf(jo(e))];!l&&r&&(l=n[a=Pf(fa(e))]),l&&pi(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,pi(c,i,6,s)}}function J_(i,e,t=!1){const n=e.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!He(i)){const l=c=>{const u=J_(c,e,!0);u&&(a=!0,Xt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(vt(i)&&n.set(i,null),null):(Fe(r)?r.forEach(l=>o[l]=null):Xt(o,r),vt(i)&&n.set(i,o),o)}function rf(i,e){return!i||!Qu(e)?!1:(e=e.slice(2).replace(/Once$/,""),Qe(i,e[0].toLowerCase()+e.slice(1))||Qe(i,fa(e))||Qe(i,e))}let mn=null,of=null;function Zc(i){const e=mn;return mn=i,of=i&&i.type.__scopeId||null,e}function Q_(i){of=i}function ev(){of=null}function np(i,e=mn,t){if(!e||i._n)return i;const n=(...s)=>{n._d&&ym(-1);const r=Zc(e);let o;try{o=i(...s)}finally{Zc(r),n._d&&ym(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Df(i){const{type:e,vnode:t,proxy:n,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:g,inheritAttrs:d}=i;let m,_;const x=Zc(i);try{if(t.shapeFlag&4){const y=s||n;m=Li(u.call(y,y,f,r,p,h,g)),_=l}else{const y=e;m=Li(y.length>1?y(r,{attrs:l,slots:a,emit:c}):y(r,null)),_=e.props?l:C1(l)}}catch(y){Ja.length=0,sf(y,i,1),m=Pt($s)}let v=m;if(_&&d!==!1){const y=Object.keys(_),{shapeFlag:M}=v;y.length&&M&7&&(o&&y.some(zd)&&(_=R1(_,o)),v=$o(v,_))}return t.dirs&&(v=$o(v),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&(v.transition=t.transition),m=v,Zc(x),m}const C1=i=>{let e;for(const t in i)(t==="class"||t==="style"||Qu(t))&&((e||(e={}))[t]=i[t]);return e},R1=(i,e)=>{const t={};for(const n in i)(!zd(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function L1(i,e,t){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?fm(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!rf(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?fm(n,o,c):!0:!!o;return!1}function fm(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(e[r]!==i[r]&&!rf(t,r))return!0}return!1}function P1({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const I1=i=>i.__isSuspense;function D1(i,e){e&&e.pendingBranch?Fe(i)?e.effects.push(...i):e.effects.push(i):T1(i)}const nc={};function Hs(i,e,t){return tv(i,e,t)}function tv(i,e,{immediate:t,deep:n,flush:s,onTrack:r,onTrigger:o}=_t){var a;const l=P_()===((a=Kt)==null?void 0:a.scope)?Kt:null;let c,u=!1,f=!1;if(bt(i)?(c=()=>i.value,u=Kc(i)):Vs(i)?(c=()=>i,n=!0):Fe(i)?(f=!0,u=i.some(y=>Vs(y)||Kc(y)),c=()=>i.map(y=>{if(bt(y))return y.value;if(Vs(y))return fo(y);if(He(y))return Gs(y,l,2)})):He(i)?e?c=()=>Gs(i,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),pi(i,l,3,[p])}:c=di,e&&n){const y=c;c=()=>fo(y())}let h,p=y=>{h=x.onStop=()=>{Gs(y,l,4)}},g;if(ml)if(p=di,e?t&&pi(e,l,3,[c(),f?[]:void 0,p]):c(),s==="sync"){const y=wM();g=y.__watcherHandles||(y.__watcherHandles=[])}else return di;let d=f?new Array(i.length).fill(nc):nc;const m=()=>{if(x.active)if(e){const y=x.run();(n||u||(f?y.some((M,E)=>ul(M,d[E])):ul(y,d)))&&(h&&h(),pi(e,l,3,[y,d===nc?void 0:f&&d[0]===nc?[]:d,p]),d=y)}else x.run()};m.allowRecurse=!!e;let _;s==="sync"?_=m:s==="post"?_=()=>bn(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),_=()=>tp(m));const x=new qd(c,_);e?t?m():d=x.run():s==="post"?bn(x.run.bind(x),l&&l.suspense):x.run();const v=()=>{x.stop(),l&&l.scope&&Bd(l.scope.effects,x)};return g&&g.push(v),v}function N1(i,e,t){const n=this.proxy,s=Ft(i)?i.includes(".")?nv(n,i):()=>n[i]:i.bind(n,n);let r;He(e)?r=e:(r=e.handler,t=e);const o=Kt;Yo(this);const a=tv(s,r.bind(n),t);return o?Yo(o):Ir(),a}function nv(i,e){const t=e.split(".");return()=>{let n=i;for(let s=0;s<t.length&&n;s++)n=n[t[s]];return n}}function fo(i,e){if(!vt(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),bt(i))fo(i.value,e);else if(Fe(i))for(let t=0;t<i.length;t++)fo(i[t],e);else if(S_(i)||wo(i))i.forEach(t=>{fo(t,e)});else if(E_(i))for(const t in i)fo(i[t],e);return i}function or(i,e,t,n){const s=i.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(ha(),pi(l,t,8,[i.el,a,i,e]),da())}}function iv(i,e){return He(i)?(()=>Xt({name:i.name},e,{setup:i}))():i}const Ka=i=>!!i.type.__asyncLoader,sv=i=>i.type.__isKeepAlive;function O1(i,e){rv(i,"a",e)}function U1(i,e){rv(i,"da",e)}function rv(i,e,t=Kt){const n=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(af(e,n,t),t){let s=t.parent;for(;s&&s.parent;)sv(s.parent.vnode)&&F1(n,e,t,s),s=s.parent}}function F1(i,e,t,n){const s=af(e,i,n,!0);sp(()=>{Bd(n[e],s)},t)}function af(i,e,t=Kt,n=!1){if(t){const s=t[i]||(t[i]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;ha(),Yo(t);const a=pi(e,t,i,o);return Ir(),da(),a});return n?s.unshift(r):s.push(r),r}}const ds=i=>(e,t=Kt)=>(!ml||i==="sp")&&af(i,(...n)=>e(...n),t),k1=ds("bm"),ip=ds("m"),z1=ds("bu"),B1=ds("u"),V1=ds("bum"),sp=ds("um"),G1=ds("sp"),H1=ds("rtg"),W1=ds("rtc");function j1(i,e=Kt){af("ec",i,e)}const X1=Symbol.for("v-ndc");function Rz(i,e,t,n){let s;const r=t&&t[n];if(Fe(i)||Ft(i)){s=new Array(i.length);for(let o=0,a=i.length;o<a;o++)s[o]=e(i[o],o,void 0,r&&r[o])}else if(typeof i=="number"){s=new Array(i);for(let o=0;o<i;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(vt(i))if(i[Symbol.iterator])s=Array.from(i,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(i);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(i[c],c,a,r&&r[a])}}else s=[];return t&&(t[n]=s),s}function q1(i,e,t={},n,s){if(mn.isCE||mn.parent&&Ka(mn.parent)&&mn.parent.isCE)return e!=="default"&&(t.name=e),Pt("slot",t,n&&n());let r=i[e];r&&r._c&&(r._d=!1),Ui();const o=r&&ov(r(t)),a=eu(Yn,{key:t.key||o&&o.key||`_${e}`},o||(n?n():[]),o&&i._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function ov(i){return i.some(e=>tu(e)?!(e.type===$s||e.type===Yn&&!ov(e.children)):!0)?i:null}const Fh=i=>i?_v(i)?cp(i)||i.proxy:Fh(i.parent):null,Za=Xt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Fh(i.parent),$root:i=>Fh(i.root),$emit:i=>i.emit,$options:i=>rp(i),$forceUpdate:i=>i.f||(i.f=()=>tp(i.update)),$nextTick:i=>i.n||(i.n=ep.bind(i.proxy)),$watch:i=>N1.bind(i)}),Nf=(i,e)=>i!==_t&&!i.__isScriptSetup&&Qe(i,e),$1={get({_:i},e){const{ctx:t,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Nf(n,e))return o[e]=1,n[e];if(s!==_t&&Qe(s,e))return o[e]=2,s[e];if((c=i.propsOptions[0])&&Qe(c,e))return o[e]=3,r[e];if(t!==_t&&Qe(t,e))return o[e]=4,t[e];kh&&(o[e]=0)}}const u=Za[e];let f,h;if(u)return e==="$attrs"&&Cn(i,"get",e),u(i);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==_t&&Qe(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Qe(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:s,ctx:r}=i;return Nf(s,e)?(s[e]=t,!0):n!==_t&&Qe(n,e)?(n[e]=t,!0):Qe(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(r[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:s,propsOptions:r}},o){let a;return!!t[o]||i!==_t&&Qe(i,o)||Nf(e,o)||(a=r[0])&&Qe(a,o)||Qe(n,o)||Qe(Za,o)||Qe(s.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Qe(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function hm(i){return Fe(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let kh=!0;function Y1(i){const e=rp(i),t=i.proxy,n=i.ctx;kh=!1,e.beforeCreate&&dm(e.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:d,deactivated:m,beforeDestroy:_,beforeUnmount:x,destroyed:v,unmounted:y,render:M,renderTracked:E,renderTriggered:A,errorCaptured:b,serverPrefetch:T,expose:P,inheritAttrs:I,components:$,directives:N,filters:D}=e;if(c&&K1(c,n,null),o)for(const j in o){const V=o[j];He(V)&&(n[j]=V.bind(t))}if(s){const j=s.call(t,t);vt(j)&&(i.data=pa(j))}if(kh=!0,r)for(const j in r){const V=r[j],re=He(V)?V.bind(t,t):He(V.get)?V.get.bind(t,t):di,he=!He(V)&&He(V.set)?V.set.bind(t):di,be=Ot({get:re,set:he});Object.defineProperty(n,j,{enumerable:!0,configurable:!0,get:()=>be.value,set:X=>be.value=X})}if(a)for(const j in a)av(a[j],n,t,j);if(l){const j=He(l)?l.call(t):l;Reflect.ownKeys(j).forEach(V=>{Oc(V,j[V])})}u&&dm(u,i,"c");function Y(j,V){Fe(V)?V.forEach(re=>j(re.bind(t))):V&&j(V.bind(t))}if(Y(k1,f),Y(ip,h),Y(z1,p),Y(B1,g),Y(O1,d),Y(U1,m),Y(j1,b),Y(W1,E),Y(H1,A),Y(V1,x),Y(sp,y),Y(G1,T),Fe(P))if(P.length){const j=i.exposed||(i.exposed={});P.forEach(V=>{Object.defineProperty(j,V,{get:()=>t[V],set:re=>t[V]=re})})}else i.exposed||(i.exposed={});M&&i.render===di&&(i.render=M),I!=null&&(i.inheritAttrs=I),$&&(i.components=$),N&&(i.directives=N)}function K1(i,e,t=di){Fe(i)&&(i=zh(i));for(const n in i){const s=i[n];let r;vt(s)?"default"in s?r=mi(s.from||n,s.default,!0):r=mi(s.from||n):r=mi(s),bt(r)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[n]=r}}function dm(i,e,t){pi(Fe(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function av(i,e,t,n){const s=n.includes(".")?nv(t,n):()=>t[n];if(Ft(i)){const r=e[i];He(r)&&Hs(s,r)}else if(He(i))Hs(s,i.bind(t));else if(vt(i))if(Fe(i))i.forEach(r=>av(r,e,t,n));else{const r=He(i.handler)?i.handler.bind(t):e[i.handler];He(r)&&Hs(s,r,i)}}function rp(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!n?l=e:(l={},s.length&&s.forEach(c=>Jc(l,c,o,!0)),Jc(l,e,o)),vt(e)&&r.set(e,l),l}function Jc(i,e,t,n=!1){const{mixins:s,extends:r}=e;r&&Jc(i,r,t,!0),s&&s.forEach(o=>Jc(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=Z1[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const Z1={data:pm,props:mm,emits:mm,methods:ja,computed:ja,beforeCreate:dn,created:dn,beforeMount:dn,mounted:dn,beforeUpdate:dn,updated:dn,beforeDestroy:dn,beforeUnmount:dn,destroyed:dn,unmounted:dn,activated:dn,deactivated:dn,errorCaptured:dn,serverPrefetch:dn,components:ja,directives:ja,watch:Q1,provide:pm,inject:J1};function pm(i,e){return e?i?function(){return Xt(He(i)?i.call(this,this):i,He(e)?e.call(this,this):e)}:e:i}function J1(i,e){return ja(zh(i),zh(e))}function zh(i){if(Fe(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function dn(i,e){return i?[...new Set([].concat(i,e))]:e}function ja(i,e){return i?Xt(Object.create(null),i,e):e}function mm(i,e){return i?Fe(i)&&Fe(e)?[...new Set([...i,...e])]:Xt(Object.create(null),hm(i),hm(e??{})):e}function Q1(i,e){if(!i)return e;if(!e)return i;const t=Xt(Object.create(null),i);for(const n in e)t[n]=dn(i[n],e[n]);return t}function lv(){return{app:null,config:{isNativeTag:wb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eM=0;function tM(i,e){return function(n,s=null){He(n)||(n=Xt({},n)),s!=null&&!vt(s)&&(s=null);const r=lv(),o=new Set;let a=!1;const l=r.app={_uid:eM++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:TM,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&He(c.install)?(o.add(c),c.install(l,...u)):He(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!a){const h=Pt(n,s);return h.appContext=r,u&&e?e(h,c):i(h,c,f),a=!0,l._container=c,c.__vue_app__=l,cp(h.component)||h.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Qc=l;try{return c()}finally{Qc=null}}};return l}}let Qc=null;function Oc(i,e){if(Kt){let t=Kt.provides;const n=Kt.parent&&Kt.parent.provides;n===t&&(t=Kt.provides=Object.create(n)),t[i]=e}}function mi(i,e,t=!1){const n=Kt||mn;if(n||Qc){const s=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:Qc._context.provides;if(s&&i in s)return s[i];if(arguments.length>1)return t&&He(e)?e.call(n&&n.proxy):e}}function nM(i,e,t,n=!1){const s={},r={};$c(r,lf,1),i.propsDefaults=Object.create(null),cv(i,e,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);t?i.props=n?s:d1(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function iM(i,e,t,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=tt(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(rf(i.emitsOptions,h))continue;const p=e[h];if(l)if(Qe(r,h))p!==r[h]&&(r[h]=p,c=!0);else{const g=jo(h);s[g]=Bh(l,a,g,p,i,!1)}else p!==r[h]&&(r[h]=p,c=!0)}}}else{cv(i,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!Qe(e,f)&&((u=fa(f))===f||!Qe(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=Bh(l,a,f,void 0,i,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!Qe(e,f))&&(delete r[f],c=!0)}c&&ls(i,"set","$attrs")}function cv(i,e,t,n){const[s,r]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Nc(l))continue;const c=e[l];let u;s&&Qe(s,u=jo(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:rf(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=tt(t),c=a||_t;for(let u=0;u<r.length;u++){const f=r[u];t[f]=Bh(s,l,f,c[f],i,!Qe(c,f))}}return o}function Bh(i,e,t,n,s,r){const o=i[t];if(o!=null){const a=Qe(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&He(l)){const{propsDefaults:c}=s;t in c?n=c[t]:(Yo(s),n=c[t]=l.call(null,e),Ir())}else n=l}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===fa(t))&&(n=!0))}return n}function uv(i,e,t=!1){const n=e.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!He(i)){const u=f=>{l=!0;const[h,p]=uv(f,e,!0);Xt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return vt(i)&&n.set(i,So),So;if(Fe(r))for(let u=0;u<r.length;u++){const f=jo(r[u]);gm(f)&&(o[f]=_t)}else if(r)for(const u in r){const f=jo(u);if(gm(f)){const h=r[u],p=o[f]=Fe(h)||He(h)?{type:h}:Xt({},h);if(p){const g=xm(Boolean,p.type),d=xm(String,p.type);p[0]=g>-1,p[1]=d<0||g<d,(g>-1||Qe(p,"default"))&&a.push(f)}}}const c=[o,a];return vt(i)&&n.set(i,c),c}function gm(i){return i[0]!=="$"}function _m(i){const e=i&&i.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:i===null?"null":""}function vm(i,e){return _m(i)===_m(e)}function xm(i,e){return Fe(e)?e.findIndex(t=>vm(t,i)):He(e)&&vm(e,i)?0:-1}const fv=i=>i[0]==="_"||i==="$stable",op=i=>Fe(i)?i.map(Li):[Li(i)],sM=(i,e,t)=>{if(e._n)return e;const n=np((...s)=>op(e(...s)),t);return n._c=!1,n},hv=(i,e,t)=>{const n=i._ctx;for(const s in i){if(fv(s))continue;const r=i[s];if(He(r))e[s]=sM(s,r,n);else if(r!=null){const o=op(r);e[s]=()=>o}}},dv=(i,e)=>{const t=op(e);i.slots.default=()=>t},rM=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=tt(e),$c(e,"_",t)):hv(e,i.slots={})}else i.slots={},e&&dv(i,e);$c(i.slots,lf,1)},oM=(i,e,t)=>{const{vnode:n,slots:s}=i;let r=!0,o=_t;if(n.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(Xt(s,e),!t&&a===1&&delete s._):(r=!e.$stable,hv(e,s)),o=e}else e&&(dv(i,e),o={default:1});if(r)for(const a in s)!fv(a)&&!(a in o)&&delete s[a]};function Vh(i,e,t,n,s=!1){if(Fe(i)){i.forEach((h,p)=>Vh(h,e&&(Fe(e)?e[p]:e),t,n,s));return}if(Ka(n)&&!s)return;const r=n.shapeFlag&4?cp(n.component)||n.component.proxy:n.el,o=s?null:r,{i:a,r:l}=i,c=e&&e.r,u=a.refs===_t?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Ft(c)?(u[c]=null,Qe(f,c)&&(f[c]=null)):bt(c)&&(c.value=null)),He(l))Gs(l,a,12,[o,u]);else{const h=Ft(l),p=bt(l);if(h||p){const g=()=>{if(i.f){const d=h?Qe(f,l)?f[l]:u[l]:l.value;s?Fe(d)&&Bd(d,r):Fe(d)?d.includes(r)||d.push(r):h?(u[l]=[r],Qe(f,l)&&(f[l]=u[l])):(l.value=[r],i.k&&(u[i.k]=l.value))}else h?(u[l]=o,Qe(f,l)&&(f[l]=o)):p&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,bn(g,t)):g()}}}const bn=D1;function aM(i){return lM(i)}function lM(i,e){const t=Ih();t.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=di,insertStaticContent:g}=i,d=(C,L,k,J=null,te=null,ce=null,me=!1,fe=null,_e=!!L.dynamicChildren)=>{if(C===L)return;C&&!Ea(C,L)&&(J=B(C),X(C,te,ce,!0),C=null),L.patchFlag===-2&&(_e=!1,L.dynamicChildren=null);const{type:ee,ref:w,shapeFlag:S}=L;switch(ee){case Wl:m(C,L,k,J);break;case $s:_(C,L,k,J);break;case Uc:C==null&&x(L,k,J,me);break;case Yn:$(C,L,k,J,te,ce,me,fe,_e);break;default:S&1?M(C,L,k,J,te,ce,me,fe,_e):S&6?N(C,L,k,J,te,ce,me,fe,_e):(S&64||S&128)&&ee.process(C,L,k,J,te,ce,me,fe,_e,Z)}w!=null&&te&&Vh(w,C&&C.ref,ce,L||C,!L)},m=(C,L,k,J)=>{if(C==null)n(L.el=a(L.children),k,J);else{const te=L.el=C.el;L.children!==C.children&&c(te,L.children)}},_=(C,L,k,J)=>{C==null?n(L.el=l(L.children||""),k,J):L.el=C.el},x=(C,L,k,J)=>{[C.el,C.anchor]=g(C.children,L,k,J,C.el,C.anchor)},v=({el:C,anchor:L},k,J)=>{let te;for(;C&&C!==L;)te=h(C),n(C,k,J),C=te;n(L,k,J)},y=({el:C,anchor:L})=>{let k;for(;C&&C!==L;)k=h(C),s(C),C=k;s(L)},M=(C,L,k,J,te,ce,me,fe,_e)=>{me=me||L.type==="svg",C==null?E(L,k,J,te,ce,me,fe,_e):T(C,L,te,ce,me,fe,_e)},E=(C,L,k,J,te,ce,me,fe)=>{let _e,ee;const{type:w,props:S,shapeFlag:F,transition:K,dirs:ie}=C;if(_e=C.el=o(C.type,ce,S&&S.is,S),F&8?u(_e,C.children):F&16&&b(C.children,_e,null,J,te,ce&&w!=="foreignObject",me,fe),ie&&or(C,null,J,"created"),A(_e,C,C.scopeId,me,J),S){for(const xe in S)xe!=="value"&&!Nc(xe)&&r(_e,xe,null,S[xe],ce,C.children,J,te,Se);"value"in S&&r(_e,"value",null,S.value),(ee=S.onVnodeBeforeMount)&&Si(ee,J,C)}ie&&or(C,null,J,"beforeMount");const de=(!te||te&&!te.pendingBranch)&&K&&!K.persisted;de&&K.beforeEnter(_e),n(_e,L,k),((ee=S&&S.onVnodeMounted)||de||ie)&&bn(()=>{ee&&Si(ee,J,C),de&&K.enter(_e),ie&&or(C,null,J,"mounted")},te)},A=(C,L,k,J,te)=>{if(k&&p(C,k),J)for(let ce=0;ce<J.length;ce++)p(C,J[ce]);if(te){let ce=te.subTree;if(L===ce){const me=te.vnode;A(C,me,me.scopeId,me.slotScopeIds,te.parent)}}},b=(C,L,k,J,te,ce,me,fe,_e=0)=>{for(let ee=_e;ee<C.length;ee++){const w=C[ee]=fe?ws(C[ee]):Li(C[ee]);d(null,w,L,k,J,te,ce,me,fe)}},T=(C,L,k,J,te,ce,me)=>{const fe=L.el=C.el;let{patchFlag:_e,dynamicChildren:ee,dirs:w}=L;_e|=C.patchFlag&16;const S=C.props||_t,F=L.props||_t;let K;k&&ar(k,!1),(K=F.onVnodeBeforeUpdate)&&Si(K,k,L,C),w&&or(L,C,k,"beforeUpdate"),k&&ar(k,!0);const ie=te&&L.type!=="foreignObject";if(ee?P(C.dynamicChildren,ee,fe,k,J,ie,ce):me||V(C,L,fe,null,k,J,ie,ce,!1),_e>0){if(_e&16)I(fe,L,S,F,k,J,te);else if(_e&2&&S.class!==F.class&&r(fe,"class",null,F.class,te),_e&4&&r(fe,"style",S.style,F.style,te),_e&8){const de=L.dynamicProps;for(let xe=0;xe<de.length;xe++){const ye=de[xe],se=S[ye],Pe=F[ye];(Pe!==se||ye==="value")&&r(fe,ye,se,Pe,te,C.children,k,J,Se)}}_e&1&&C.children!==L.children&&u(fe,L.children)}else!me&&ee==null&&I(fe,L,S,F,k,J,te);((K=F.onVnodeUpdated)||w)&&bn(()=>{K&&Si(K,k,L,C),w&&or(L,C,k,"updated")},J)},P=(C,L,k,J,te,ce,me)=>{for(let fe=0;fe<L.length;fe++){const _e=C[fe],ee=L[fe],w=_e.el&&(_e.type===Yn||!Ea(_e,ee)||_e.shapeFlag&70)?f(_e.el):k;d(_e,ee,w,null,J,te,ce,me,!0)}},I=(C,L,k,J,te,ce,me)=>{if(k!==J){if(k!==_t)for(const fe in k)!Nc(fe)&&!(fe in J)&&r(C,fe,k[fe],null,me,L.children,te,ce,Se);for(const fe in J){if(Nc(fe))continue;const _e=J[fe],ee=k[fe];_e!==ee&&fe!=="value"&&r(C,fe,ee,_e,me,L.children,te,ce,Se)}"value"in J&&r(C,"value",k.value,J.value)}},$=(C,L,k,J,te,ce,me,fe,_e)=>{const ee=L.el=C?C.el:a(""),w=L.anchor=C?C.anchor:a("");let{patchFlag:S,dynamicChildren:F,slotScopeIds:K}=L;K&&(fe=fe?fe.concat(K):K),C==null?(n(ee,k,J),n(w,k,J),b(L.children,k,w,te,ce,me,fe,_e)):S>0&&S&64&&F&&C.dynamicChildren?(P(C.dynamicChildren,F,k,te,ce,me,fe),(L.key!=null||te&&L===te.subTree)&&pv(C,L,!0)):V(C,L,k,w,te,ce,me,fe,_e)},N=(C,L,k,J,te,ce,me,fe,_e)=>{L.slotScopeIds=fe,C==null?L.shapeFlag&512?te.ctx.activate(L,k,J,me,_e):D(L,k,J,te,ce,me,_e):O(C,L,_e)},D=(C,L,k,J,te,ce,me)=>{const fe=C.component=_M(C,J,te);if(sv(C)&&(fe.ctx.renderer=Z),vM(fe),fe.asyncDep){if(te&&te.registerDep(fe,Y),!C.el){const _e=fe.subTree=Pt($s);_(null,_e,L,k)}return}Y(fe,C,L,k,te,ce,me)},O=(C,L,k)=>{const J=L.component=C.component;if(L1(C,L,k))if(J.asyncDep&&!J.asyncResolved){j(J,L,k);return}else J.next=L,w1(J.update),J.update();else L.el=C.el,J.vnode=L},Y=(C,L,k,J,te,ce,me)=>{const fe=()=>{if(C.isMounted){let{next:w,bu:S,u:F,parent:K,vnode:ie}=C,de=w,xe;ar(C,!1),w?(w.el=ie.el,j(C,w,me)):w=ie,S&&If(S),(xe=w.props&&w.props.onVnodeBeforeUpdate)&&Si(xe,K,w,ie),ar(C,!0);const ye=Df(C),se=C.subTree;C.subTree=ye,d(se,ye,f(se.el),B(se),C,te,ce),w.el=ye.el,de===null&&P1(C,ye.el),F&&bn(F,te),(xe=w.props&&w.props.onVnodeUpdated)&&bn(()=>Si(xe,K,w,ie),te)}else{let w;const{el:S,props:F}=L,{bm:K,m:ie,parent:de}=C,xe=Ka(L);if(ar(C,!1),K&&If(K),!xe&&(w=F&&F.onVnodeBeforeMount)&&Si(w,de,L),ar(C,!0),S&&Te){const ye=()=>{C.subTree=Df(C),Te(S,C.subTree,C,te,null)};xe?L.type.__asyncLoader().then(()=>!C.isUnmounted&&ye()):ye()}else{const ye=C.subTree=Df(C);d(null,ye,k,J,C,te,ce),L.el=ye.el}if(ie&&bn(ie,te),!xe&&(w=F&&F.onVnodeMounted)){const ye=L;bn(()=>Si(w,de,ye),te)}(L.shapeFlag&256||de&&Ka(de.vnode)&&de.vnode.shapeFlag&256)&&C.a&&bn(C.a,te),C.isMounted=!0,L=k=J=null}},_e=C.effect=new qd(fe,()=>tp(ee),C.scope),ee=C.update=()=>_e.run();ee.id=C.uid,ar(C,!0),ee()},j=(C,L,k)=>{L.component=C;const J=C.vnode.props;C.vnode=L,C.next=null,iM(C,L.props,J,k),oM(C,L.children,k),ha(),um(),da()},V=(C,L,k,J,te,ce,me,fe,_e=!1)=>{const ee=C&&C.children,w=C?C.shapeFlag:0,S=L.children,{patchFlag:F,shapeFlag:K}=L;if(F>0){if(F&128){he(ee,S,k,J,te,ce,me,fe,_e);return}else if(F&256){re(ee,S,k,J,te,ce,me,fe,_e);return}}K&8?(w&16&&Se(ee,te,ce),S!==ee&&u(k,S)):w&16?K&16?he(ee,S,k,J,te,ce,me,fe,_e):Se(ee,te,ce,!0):(w&8&&u(k,""),K&16&&b(S,k,J,te,ce,me,fe,_e))},re=(C,L,k,J,te,ce,me,fe,_e)=>{C=C||So,L=L||So;const ee=C.length,w=L.length,S=Math.min(ee,w);let F;for(F=0;F<S;F++){const K=L[F]=_e?ws(L[F]):Li(L[F]);d(C[F],K,k,null,te,ce,me,fe,_e)}ee>w?Se(C,te,ce,!0,!1,S):b(L,k,J,te,ce,me,fe,_e,S)},he=(C,L,k,J,te,ce,me,fe,_e)=>{let ee=0;const w=L.length;let S=C.length-1,F=w-1;for(;ee<=S&&ee<=F;){const K=C[ee],ie=L[ee]=_e?ws(L[ee]):Li(L[ee]);if(Ea(K,ie))d(K,ie,k,null,te,ce,me,fe,_e);else break;ee++}for(;ee<=S&&ee<=F;){const K=C[S],ie=L[F]=_e?ws(L[F]):Li(L[F]);if(Ea(K,ie))d(K,ie,k,null,te,ce,me,fe,_e);else break;S--,F--}if(ee>S){if(ee<=F){const K=F+1,ie=K<w?L[K].el:J;for(;ee<=F;)d(null,L[ee]=_e?ws(L[ee]):Li(L[ee]),k,ie,te,ce,me,fe,_e),ee++}}else if(ee>F)for(;ee<=S;)X(C[ee],te,ce,!0),ee++;else{const K=ee,ie=ee,de=new Map;for(ee=ie;ee<=F;ee++){const Ee=L[ee]=_e?ws(L[ee]):Li(L[ee]);Ee.key!=null&&de.set(Ee.key,ee)}let xe,ye=0;const se=F-ie+1;let Pe=!1,Ce=0;const Ie=new Array(se);for(ee=0;ee<se;ee++)Ie[ee]=0;for(ee=K;ee<=S;ee++){const Ee=C[ee];if(ye>=se){X(Ee,te,ce,!0);continue}let ke;if(Ee.key!=null)ke=de.get(Ee.key);else for(xe=ie;xe<=F;xe++)if(Ie[xe-ie]===0&&Ea(Ee,L[xe])){ke=xe;break}ke===void 0?X(Ee,te,ce,!0):(Ie[ke-ie]=ee+1,ke>=Ce?Ce=ke:Pe=!0,d(Ee,L[ke],k,null,te,ce,me,fe,_e),ye++)}const De=Pe?cM(Ie):So;for(xe=De.length-1,ee=se-1;ee>=0;ee--){const Ee=ie+ee,ke=L[Ee],ut=Ee+1<w?L[Ee+1].el:J;Ie[ee]===0?d(null,ke,k,ut,te,ce,me,fe,_e):Pe&&(xe<0||ee!==De[xe]?be(ke,k,ut,2):xe--)}}},be=(C,L,k,J,te=null)=>{const{el:ce,type:me,transition:fe,children:_e,shapeFlag:ee}=C;if(ee&6){be(C.component.subTree,L,k,J);return}if(ee&128){C.suspense.move(L,k,J);return}if(ee&64){me.move(C,L,k,Z);return}if(me===Yn){n(ce,L,k);for(let S=0;S<_e.length;S++)be(_e[S],L,k,J);n(C.anchor,L,k);return}if(me===Uc){v(C,L,k);return}if(J!==2&&ee&1&&fe)if(J===0)fe.beforeEnter(ce),n(ce,L,k),bn(()=>fe.enter(ce),te);else{const{leave:S,delayLeave:F,afterLeave:K}=fe,ie=()=>n(ce,L,k),de=()=>{S(ce,()=>{ie(),K&&K()})};F?F(ce,ie,de):de()}else n(ce,L,k)},X=(C,L,k,J=!1,te=!1)=>{const{type:ce,props:me,ref:fe,children:_e,dynamicChildren:ee,shapeFlag:w,patchFlag:S,dirs:F}=C;if(fe!=null&&Vh(fe,null,k,C,!0),w&256){L.ctx.deactivate(C);return}const K=w&1&&F,ie=!Ka(C);let de;if(ie&&(de=me&&me.onVnodeBeforeUnmount)&&Si(de,L,C),w&6)H(C.component,k,J);else{if(w&128){C.suspense.unmount(k,J);return}K&&or(C,null,L,"beforeUnmount"),w&64?C.type.remove(C,L,k,te,Z,J):ee&&(ce!==Yn||S>0&&S&64)?Se(ee,L,k,!1,!0):(ce===Yn&&S&384||!te&&w&16)&&Se(_e,L,k),J&&ue(C)}(ie&&(de=me&&me.onVnodeUnmounted)||K)&&bn(()=>{de&&Si(de,L,C),K&&or(C,null,L,"unmounted")},k)},ue=C=>{const{type:L,el:k,anchor:J,transition:te}=C;if(L===Yn){pe(k,J);return}if(L===Uc){y(C);return}const ce=()=>{s(k),te&&!te.persisted&&te.afterLeave&&te.afterLeave()};if(C.shapeFlag&1&&te&&!te.persisted){const{leave:me,delayLeave:fe}=te,_e=()=>me(k,ce);fe?fe(C.el,ce,_e):_e()}else ce()},pe=(C,L)=>{let k;for(;C!==L;)k=h(C),s(C),C=k;s(L)},H=(C,L,k)=>{const{bum:J,scope:te,update:ce,subTree:me,um:fe}=C;J&&If(J),te.stop(),ce&&(ce.active=!1,X(me,C,L,k)),fe&&bn(fe,L),bn(()=>{C.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},Se=(C,L,k,J=!1,te=!1,ce=0)=>{for(let me=ce;me<C.length;me++)X(C[me],L,k,J,te)},B=C=>C.shapeFlag&6?B(C.component.subTree):C.shapeFlag&128?C.suspense.next():h(C.anchor||C.el),Q=(C,L,k)=>{C==null?L._vnode&&X(L._vnode,null,null,!0):d(L._vnode||null,C,L,null,null,null,k),um(),K_(),L._vnode=C},Z={p:d,um:X,m:be,r:ue,mt:D,mc:b,pc:V,pbc:P,n:B,o:i};let oe,Te;return e&&([oe,Te]=e(Z)),{render:Q,hydrate:oe,createApp:tM(Q,oe)}}function ar({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function pv(i,e,t=!1){const n=i.children,s=e.children;if(Fe(n)&&Fe(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ws(s[r]),a.el=o.el),t||pv(o,a)),a.type===Wl&&(a.el=o.el)}}function cM(i){const e=i.slice(),t=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=t[t.length-1],i[s]<c){e[n]=s,t.push(n);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,i[t[a]]<c?r=a+1:o=a;c<i[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const uM=i=>i.__isTeleport,Yn=Symbol.for("v-fgt"),Wl=Symbol.for("v-txt"),$s=Symbol.for("v-cmt"),Uc=Symbol.for("v-stc"),Ja=[];let ui=null;function Ui(i=!1){Ja.push(ui=i?null:[])}function fM(){Ja.pop(),ui=Ja[Ja.length-1]||null}let pl=1;function ym(i){pl+=i}function mv(i){return i.dynamicChildren=pl>0?ui||So:null,fM(),pl>0&&ui&&ui.push(i),i}function ma(i,e,t,n,s,r){return mv(Ut(i,e,t,n,s,r,!0))}function eu(i,e,t,n,s){return mv(Pt(i,e,t,n,s,!0))}function tu(i){return i?i.__v_isVNode===!0:!1}function Ea(i,e){return i.type===e.type&&i.key===e.key}const lf="__vInternal",gv=({key:i})=>i??null,Fc=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?Ft(i)||bt(i)||He(i)?{i:mn,r:i,k:e,f:!!t}:i:null);function Ut(i,e=null,t=null,n=0,s=null,r=i===Yn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&gv(e),ref:e&&Fc(e),scopeId:of,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:mn};return a?(ap(l,t),r&128&&i.normalize(l)):t&&(l.shapeFlag|=Ft(t)?8:16),pl>0&&!o&&ui&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ui.push(l),l}const Pt=hM;function hM(i,e=null,t=null,n=0,s=null,r=!1){if((!i||i===X1)&&(i=$s),tu(i)){const a=$o(i,e,!0);return t&&ap(a,t),pl>0&&!r&&ui&&(a.shapeFlag&6?ui[ui.indexOf(i)]=a:ui.push(a)),a.patchFlag|=-2,a}if(MM(i)&&(i=i.__vccOpts),e){e=dM(e);let{class:a,style:l}=e;a&&!Ft(a)&&(e.class=Wd(a)),vt(l)&&(H_(l)&&!Fe(l)&&(l=Xt({},l)),e.style=Hd(l))}const o=Ft(i)?1:I1(i)?128:uM(i)?64:vt(i)?4:He(i)?2:0;return Ut(i,e,t,n,s,o,r,!0)}function dM(i){return i?H_(i)||lf in i?Xt({},i):i:null}function $o(i,e,t=!1){const{props:n,ref:s,patchFlag:r,children:o}=i,a=e?pM(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&gv(a),ref:e&&e.ref?t&&s?Fe(s)?s.concat(Fc(e)):[s,Fc(e)]:Fc(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Yn?r===-1?16:r|16:r,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&$o(i.ssContent),ssFallback:i.ssFallback&&$o(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function cf(i=" ",e=0){return Pt(Wl,null,i,e)}function Lz(i,e){const t=Pt(Uc,null,i);return t.staticCount=e,t}function bm(i="",e=!1){return e?(Ui(),eu($s,null,i)):Pt($s,null,i)}function Li(i){return i==null||typeof i=="boolean"?Pt($s):Fe(i)?Pt(Yn,null,i.slice()):typeof i=="object"?ws(i):Pt(Wl,null,String(i))}function ws(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:$o(i)}function ap(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(n&65){const s=e.default;s&&(s._c&&(s._d=!1),ap(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(lf in e)?e._ctx=mn:s===3&&mn&&(mn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else He(e)?(e={default:e,_ctx:mn},t=32):(e=String(e),n&64?(t=16,e=[cf(e)]):t=8);i.children=e,i.shapeFlag|=t}function pM(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=Wd([e.class,n.class]));else if(s==="style")e.style=Hd([e.style,n.style]);else if(Qu(s)){const r=e[s],o=n[s];o&&r!==o&&!(Fe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=n[s])}return e}function Si(i,e,t,n=null){pi(i,e,7,[t,n])}const mM=lv();let gM=0;function _M(i,e,t){const n=i.type,s=(e?e.appContext:i.appContext)||mM,r={uid:gM++,vnode:i,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new L_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:uv(n,s),emitsOptions:J_(n,s),emit:null,emitted:null,propsDefaults:_t,inheritAttrs:n.inheritAttrs,ctx:_t,data:_t,props:_t,attrs:_t,slots:_t,refs:_t,setupState:_t,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=A1.bind(null,r),i.ce&&i.ce(r),r}let Kt=null;const uf=()=>Kt||mn;let lp,Wr,Mm="__VUE_INSTANCE_SETTERS__";(Wr=Ih()[Mm])||(Wr=Ih()[Mm]=[]),Wr.push(i=>Kt=i),lp=i=>{Wr.length>1?Wr.forEach(e=>e(i)):Wr[0](i)};const Yo=i=>{lp(i),i.scope.on()},Ir=()=>{Kt&&Kt.scope.off(),lp(null)};function _v(i){return i.vnode.shapeFlag&4}let ml=!1;function vM(i,e=!1){ml=e;const{props:t,children:n}=i.vnode,s=_v(i);nM(i,t,s,e),rM(i,n);const r=s?xM(i,e):void 0;return ml=!1,r}function xM(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=qo(new Proxy(i.ctx,$1));const{setup:n}=t;if(n){const s=i.setupContext=n.length>1?bM(i):null;Yo(i),ha();const r=Gs(n,i,0,[i.props,s]);if(da(),Ir(),w_(r)){if(r.then(Ir,Ir),e)return r.then(o=>{Sm(i,o,e)}).catch(o=>{sf(o,i,0)});i.asyncDep=r}else Sm(i,r,e)}else vv(i,e)}function Sm(i,e,t){He(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:vt(e)&&(i.setupState=q_(e)),vv(i,t)}let wm;function vv(i,e,t){const n=i.type;if(!i.render){if(!e&&wm&&!n.render){const s=n.template||rp(i).template;if(s){const{isCustomElement:r,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Xt(Xt({isCustomElement:r,delimiters:a},o),l);n.render=wm(s,c)}}i.render=n.render||di}Yo(i),ha(),Y1(i),da(),Ir()}function yM(i){return i.attrsProxy||(i.attrsProxy=new Proxy(i.attrs,{get(e,t){return Cn(i,"get","$attrs"),e[t]}}))}function bM(i){const e=t=>{i.exposed=t||{}};return{get attrs(){return yM(i)},slots:i.slots,emit:i.emit,expose:e}}function cp(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(q_(qo(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Za)return Za[t](i)},has(e,t){return t in e||t in Za}}))}function MM(i){return He(i)&&"__vccOpts"in i}const Ot=(i,e)=>b1(i,e,ml);function ff(i,e,t){const n=arguments.length;return n===2?vt(e)&&!Fe(e)?tu(e)?Pt(i,null,[e]):Pt(i,e):Pt(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&tu(t)&&(t=[t]),Pt(i,e,t))}const SM=Symbol.for("v-scx"),wM=()=>mi(SM),TM="3.3.2",EM="http://www.w3.org/2000/svg",xr=typeof document<"u"?document:null,Tm=xr&&xr.createElement("template"),AM={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const s=e?xr.createElementNS(EM,i):xr.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>xr.createTextNode(i),createComment:i=>xr.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>xr.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Tm.innerHTML=n?`<svg>${i}</svg>`:i;const a=Tm.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function CM(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function RM(i,e,t){const n=i.style,s=Ft(t);if(t&&!s){if(e&&!Ft(e))for(const r in e)t[r]==null&&Gh(n,r,"");for(const r in t)Gh(n,r,t[r])}else{const r=n.display;s?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=r)}}const Em=/\s*!important$/;function Gh(i,e,t){if(Fe(t))t.forEach(n=>Gh(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=LM(i,e);Em.test(t)?i.setProperty(fa(n),t.replace(Em,""),"important"):i[n]=t}}const Am=["Webkit","Moz","ms"],Of={};function LM(i,e){const t=Of[e];if(t)return t;let n=jo(e);if(n!=="filter"&&n in i)return Of[e]=n;n=A_(n);for(let s=0;s<Am.length;s++){const r=Am[s]+n;if(r in i)return Of[e]=r}return e}const Cm="http://www.w3.org/1999/xlink";function PM(i,e,t,n,s){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Cm,e.slice(6,e.length)):i.setAttributeNS(Cm,e,t);else{const r=Ub(e);t==null||r&&!C_(t)?i.removeAttribute(e):i.setAttribute(e,r?"":t)}}function IM(i,e,t,n,s,r,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,s,r),i[e]=t??"";return}const a=i.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){i._value=t;const c=a==="OPTION"?i.getAttribute("value"):i.value,u=t??"";c!==u&&(i.value=u),t==null&&i.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof i[e];c==="boolean"?t=C_(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{i[e]=t}catch{}l&&i.removeAttribute(e)}function DM(i,e,t,n){i.addEventListener(e,t,n)}function NM(i,e,t,n){i.removeEventListener(e,t,n)}function OM(i,e,t,n,s=null){const r=i._vei||(i._vei={}),o=r[e];if(n&&o)o.value=n;else{const[a,l]=UM(e);if(n){const c=r[e]=zM(n,s);DM(i,a,c,l)}else o&&(NM(i,a,o,l),r[e]=void 0)}}const Rm=/(?:Once|Passive|Capture)$/;function UM(i){let e;if(Rm.test(i)){e={};let n;for(;n=i.match(Rm);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):fa(i.slice(2)),e]}let Uf=0;const FM=Promise.resolve(),kM=()=>Uf||(FM.then(()=>Uf=0),Uf=Date.now());function zM(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;pi(BM(n,t.value),e,5,[n])};return t.value=i,t.attached=kM(),t}function BM(i,e){if(Fe(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const Lm=/^on[a-z]/,VM=(i,e,t,n,s=!1,r,o,a,l)=>{e==="class"?CM(i,n,s):e==="style"?RM(i,t,n):Qu(e)?zd(e)||OM(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):GM(i,e,n,s))?IM(i,e,n,r,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),PM(i,e,n,s))};function GM(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&Lm.test(e)&&He(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||Lm.test(e)&&Ft(t)?!1:e in i}const HM=Xt({patchProp:VM},AM);let Pm;function WM(){return Pm||(Pm=aM(HM))}const jM=(...i)=>{const e=WM().createApp(...i),{mount:t}=e;return e.mount=n=>{const s=XM(n);if(!s)return;const r=e._component;!He(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function XM(i){return Ft(i)?document.querySelector(i):i}let gt=0;const qe={LOADER_PROGRESS:gt++,APP_LOADED:gt++,ATTACH:gt++,ROUTE_CHANGE:gt++,SELECT_TEAM_UPDATE:gt++,TICK:gt++,RENDER:gt++,RESIZE:gt++,POINTER_MOVE:gt++,POINTER_UP:gt++,POINTER_DOWN:gt++,KEY_DOWN:gt++,DRAG:gt++,DRAG_END:gt++,PINCH:gt++,WHEEL:gt++,STATE_READY:gt++,JOIN_READY:gt++,CREATE_TEAM:gt++,SPAWN_MEDALS:gt++,VOTE_RESULTS:gt++,COLLECT_MEDAL:gt++},qM=Object.fromEntries(Object.entries(qe).map(([i,e])=>[e,`on${i.toLowerCase().split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}`])),up={USER_ID:gt++,USER_ISO:gt++,FOCUS_PLAYER:gt++},wi={GAME_STATE:"game_state",COUNTRY_STATE:"country_state",VOTE_RESULTS:"vote_results",VOTE_COUNT:"vote_count",MEDAL_APPARITION:"medal_apparition",MEDAL_COLLECTION:"medal_collection",NEW_COUNTRY:"new_country",PLAYER_COUNT:"player_count",USER_VOTE:"user_vote",USER_JOIN:"user_join",SCOREBOARD_UPDATE:"scoreboard_update"},ic={up:0,right:1,down:2,left:3},Qa={bronze:0,silver:1,gold:2};var oi,As,wr,Tr,gu,xv;const yo=class{constructor(){ve(this,gu);ve(this,oi,void 0);ve(this,As,void 0);ve(this,wr,void 0);ve(this,Tr,void 0);mt(this,oi,new Map),mt(this,As,new Map),mt(this,wr,new Map),mt(this,Tr,new Set)}on(e,t,n={}){G(this,oi).has(e)||G(this,oi).set(e,new Set),(n.once?G(this,As):G(this,oi)).get(e).add(t)}off(e,t){if(!G(this,oi).has(e))return;G(this,oi).get(e).delete(t)}register(e){G(this,Tr).add(e)}unregister(e){G(this,Tr).delete(e)}emit(e,...t){if(G(this,wr).set(e,t),G(this,oi).has(e))for(const n of G(this,oi).get(e))n.call(this,...t);if(G(this,Tr).forEach(n=>Ve(this,gu,xv).call(this,n,e)),G(this,As).has(e)){for(const n of G(this,As).get(e))n.call(this,...t);G(this,As).delete(e)}}static getInstance(){return yo.instance||(yo.instance=new yo),yo.instance}};let kc=yo;oi=new WeakMap,As=new WeakMap,wr=new WeakMap,Tr=new WeakMap,gu=new WeakSet,xv=function(e,t){const n=e[qM[t]];typeof n=="function"&&G(this,wr).has(t)&&n.call(e,...G(this,wr).get(t))},In(kc,"instance");const Ue=kc.getInstance();const $M={class:"loader"},YM={__name:"TheLoader",setup(i){const e=ci(0),t=Ot(()=>Math.round(e.value*100));return Ue.on(qe.LOADER_PROGRESS,n=>e.value=n),(n,s)=>(Ui(),ma("div",$M,Fb(t.value)+"%",1))}};/*!
  * vue-router v4.2.0
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const lo=typeof window<"u";function KM(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const rt=Object.assign;function Ff(i,e){const t={};for(const n in e){const s=e[n];t[n]=yi(s)?s.map(i):i(s)}return t}const el=()=>{},yi=Array.isArray,ZM=/\/$/,JM=i=>i.replace(ZM,"");function kf(i,e,t="/"){let n,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=i(r)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=nS(n??e,t),{fullPath:n+(r&&"?")+r+o,path:n,query:s,hash:o}}function QM(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Im(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function eS(i,e,t){const n=e.matched.length-1,s=t.matched.length-1;return n>-1&&n===s&&Ko(e.matched[n],t.matched[s])&&yv(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function Ko(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function yv(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!tS(i[t],e[t]))return!1;return!0}function tS(i,e){return yi(i)?Dm(i,e):yi(e)?Dm(e,i):i===e}function Dm(i,e){return yi(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function nS(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/"),s=n[n.length-1];(s===".."||s===".")&&n.push("");let r=t.length-1,o,a;for(o=0;o<n.length;o++)if(a=n[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+n.slice(o-(o===n.length?1:0)).join("/")}var gl;(function(i){i.pop="pop",i.push="push"})(gl||(gl={}));var tl;(function(i){i.back="back",i.forward="forward",i.unknown=""})(tl||(tl={}));function iS(i){if(!i)if(lo){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),JM(i)}const sS=/^[^#]+#/;function rS(i,e){return i.replace(sS,"#")+e}function oS(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const hf=()=>({left:window.pageXOffset,top:window.pageYOffset});function aS(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=oS(s,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Nm(i,e){return(history.state?history.state.position-e:-1)+i}const Hh=new Map;function lS(i,e){Hh.set(i,e)}function cS(i){const e=Hh.get(i);return Hh.delete(i),e}let uS=()=>location.protocol+"//"+location.host;function bv(i,e){const{pathname:t,search:n,hash:s}=e,r=i.indexOf("#");if(r>-1){let a=s.includes(i.slice(r))?i.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Im(l,"")}return Im(t,i)+n+s}function fS(i,e,t,n){let s=[],r=[],o=null;const a=({state:h})=>{const p=bv(i,location),g=t.value,d=e.value;let m=0;if(h){if(t.value=p,e.value=h,o&&o===g){o=null;return}m=d?h.position-d.position:0}else n(p);s.forEach(_=>{_(t.value,g,{delta:m,type:gl.pop,direction:m?m>0?tl.forward:tl.back:tl.unknown})})};function l(){o=t.value}function c(h){s.push(h);const p=()=>{const g=s.indexOf(h);g>-1&&s.splice(g,1)};return r.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(rt({},h.state,{scroll:hf()}),"")}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Om(i,e,t,n=!1,s=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:s?hf():null}}function hS(i){const{history:e,location:t}=window,n={value:bv(i,t)},s={value:e.state};s.value||r(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=i.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?i:i.slice(f))+l:uS()+i+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(p){console.error(p),t[u?"replace":"assign"](h)}}function o(l,c){const u=rt({},e.state,Om(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),n.value=l}function a(l,c){const u=rt({},s.value,e.state,{forward:l,scroll:hf()});r(u.current,u,!0);const f=rt({},Om(n.value,l,null),{position:u.position+1},c);r(l,f,!1),n.value=l}return{location:n,state:s,push:a,replace:o}}function dS(i){i=iS(i);const e=hS(i),t=fS(i,e.state,e.location,e.replace);function n(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=rt({location:"",base:i,go:n,createHref:rS.bind(null,i)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function pS(i){return typeof i=="string"||i&&typeof i=="object"}function Mv(i){return typeof i=="string"||typeof i=="symbol"}const ms={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Sv=Symbol("");var Um;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(Um||(Um={}));function Zo(i,e){return rt(new Error,{type:i,[Sv]:!0},e)}function Hi(i,e){return i instanceof Error&&Sv in i&&(e==null||!!(i.type&e))}const Fm="[^/]+?",mS={sensitive:!1,strict:!1,start:!0,end:!0},gS=/[.+*?^${}()[\]/\\]/g;function _S(i,e){const t=rt({},mS,e),n=[];let s=t.start?"^":"";const r=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(t.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(gS,"\\$&"),p+=40;else if(h.type===1){const{value:g,repeatable:d,optional:m,regexp:_}=h;r.push({name:g,repeatable:d,optional:m});const x=_||Fm;if(x!==Fm){p+=10;try{new RegExp(`(${x})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+y.message)}}let v=d?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(v=m&&c.length<2?`(?:/${v})`:"/"+v),m&&(v+="?"),s+=v,p+=20,m&&(p+=-8),d&&(p+=-20),x===".*"&&(p+=-50)}u.push(p)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",g=r[h-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of i){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:d,optional:m}=p,_=g in c?c[g]:"";if(yi(_)&&!d)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=yi(_)?_.join("/"):_;if(!x)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=x}}return u||"/"}return{re:o,score:n,keys:r,parse:a,stringify:l}}function vS(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===40+40?-1:1:i.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function xS(i,e){let t=0;const n=i.score,s=e.score;for(;t<n.length&&t<s.length;){const r=vS(n[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-n.length)===1){if(km(n))return 1;if(km(s))return-1}return s.length-n.length}function km(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const yS={type:0,value:""},bS=/[a-zA-Z0-9_]/;function MS(i){if(!i)return[[]];if(i==="/")return[[yS]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,n=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=n;break;case 1:l==="("?t=2:bS.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function SS(i,e,t){const n=_S(MS(i.path),t),s=rt(n,{record:i,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function wS(i,e){const t=[],n=new Map;e=Vm({strict:!1,end:!0,sensitive:!1},e);function s(u){return n.get(u)}function r(u,f,h){const p=!h,g=TS(u);g.aliasOf=h&&h.record;const d=Vm(e,u),m=[g];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of v)m.push(rt({},g,{components:h?h.record.components:g.components,path:y,aliasOf:h?h.record:g}))}let _,x;for(const v of m){const{path:y}=v;if(f&&y[0]!=="/"){const M=f.record.path,E=M[M.length-1]==="/"?"":"/";v.path=f.record.path+(y&&E+y)}if(_=SS(v,f,d),h?h.alias.push(_):(x=x||_,x!==_&&x.alias.push(_),p&&u.name&&!Bm(_)&&o(u.name)),g.children){const M=g.children;for(let E=0;E<M.length;E++)r(M[E],_,h&&h.children[E])}h=h||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return x?()=>{o(x)}:el}function o(u){if(Mv(u)){const f=n.get(u);f&&(n.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&xS(u,t[f])>=0&&(u.record.path!==t[f].record.path||!wv(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!Bm(u)&&n.set(u.record.name,u)}function c(u,f){let h,p={},g,d;if("name"in u&&u.name){if(h=n.get(u.name),!h)throw Zo(1,{location:u});d=h.record.name,p=rt(zm(f.params,h.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&zm(u.params,h.keys.map(x=>x.name))),g=h.stringify(p)}else if("path"in u)g=u.path,h=t.find(x=>x.re.test(g)),h&&(p=h.parse(g),d=h.record.name);else{if(h=f.name?n.get(f.name):t.find(x=>x.re.test(f.path)),!h)throw Zo(1,{location:u,currentLocation:f});d=h.record.name,p=rt({},f.params,u.params),g=h.stringify(p)}const m=[];let _=h;for(;_;)m.unshift(_.record),_=_.parent;return{name:d,path:g,params:p,matched:m,meta:AS(m)}}return i.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function zm(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function TS(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:ES(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function ES(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="boolean"?t:t[n];return e}function Bm(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function AS(i){return i.reduce((e,t)=>rt(e,t.meta),{})}function Vm(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function wv(i,e){return e.children.some(t=>t===i||wv(i,t))}const Tv=/#/g,CS=/&/g,RS=/\//g,LS=/=/g,PS=/\?/g,Ev=/\+/g,IS=/%5B/g,DS=/%5D/g,Av=/%5E/g,NS=/%60/g,Cv=/%7B/g,OS=/%7C/g,Rv=/%7D/g,US=/%20/g;function fp(i){return encodeURI(""+i).replace(OS,"|").replace(IS,"[").replace(DS,"]")}function FS(i){return fp(i).replace(Cv,"{").replace(Rv,"}").replace(Av,"^")}function Wh(i){return fp(i).replace(Ev,"%2B").replace(US,"+").replace(Tv,"%23").replace(CS,"%26").replace(NS,"`").replace(Cv,"{").replace(Rv,"}").replace(Av,"^")}function kS(i){return Wh(i).replace(LS,"%3D")}function zS(i){return fp(i).replace(Tv,"%23").replace(PS,"%3F")}function BS(i){return i==null?"":zS(i).replace(RS,"%2F")}function nu(i){try{return decodeURIComponent(""+i)}catch{}return""+i}function VS(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(Ev," "),o=r.indexOf("="),a=nu(o<0?r:r.slice(0,o)),l=o<0?null:nu(r.slice(o+1));if(a in e){let c=e[a];yi(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Gm(i){let e="";for(let t in i){const n=i[t];if(t=kS(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(yi(n)?n.map(r=>r&&Wh(r)):[n&&Wh(n)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function GS(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=yi(n)?n.map(s=>s==null?null:""+s):n==null?n:""+n)}return e}const HS=Symbol(""),Hm=Symbol(""),hp=Symbol(""),Lv=Symbol(""),jh=Symbol("");function Aa(){let i=[];function e(n){return i.push(n),()=>{const s=i.indexOf(n);s>-1&&i.splice(s,1)}}function t(){i=[]}return{add:e,list:()=>i,reset:t}}function Ts(i,e,t,n,s){const r=n&&(n.enterCallbacks[s]=n.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(Zo(4,{from:t,to:e})):f instanceof Error?a(f):pS(f)?a(Zo(2,{from:e,to:f})):(r&&n.enterCallbacks[s]===r&&typeof f=="function"&&r.push(f),o())},c=i.call(n&&n.instances[s],e,t,l);let u=Promise.resolve(c);i.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function zf(i,e,t,n){const s=[];for(const r of i)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(WS(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Ts(c,t,n,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=KM(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Ts(h,t,n,r,o)()}))}}return s}function WS(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function Wm(i){const e=mi(hp),t=mi(Lv),n=Ot(()=>e.resolve(Pr(i.to))),s=Ot(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Ko.bind(null,u));if(h>-1)return h;const p=jm(l[c-2]);return c>1&&jm(u)===p&&f[f.length-1].path!==p?f.findIndex(Ko.bind(null,l[c-2])):h}),r=Ot(()=>s.value>-1&&$S(t.params,n.value.params)),o=Ot(()=>s.value>-1&&s.value===t.matched.length-1&&yv(t.params,n.value.params));function a(l={}){return qS(l)?e[Pr(i.replace)?"replace":"push"](Pr(i.to)).catch(el):Promise.resolve()}return{route:n,href:Ot(()=>n.value.href),isActive:r,isExactActive:o,navigate:a}}const jS=iv({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wm,setup(i,{slots:e}){const t=pa(Wm(i)),{options:n}=mi(hp),s=Ot(()=>({[Xm(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[Xm(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return i.custom?r:ff("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),XS=jS;function qS(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function $S(i,e){for(const t in e){const n=e[t],s=i[t];if(typeof n=="string"){if(n!==s)return!1}else if(!yi(s)||s.length!==n.length||n.some((r,o)=>r!==s[o]))return!1}return!0}function jm(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const Xm=(i,e,t)=>i??e??t,YS=iv({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=mi(jh),s=Ot(()=>i.route||n.value),r=mi(Hm,0),o=Ot(()=>{let c=Pr(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Ot(()=>s.value.matched[o.value]);Oc(Hm,Ot(()=>o.value+1)),Oc(HS,a),Oc(jh,s);const l=ci();return Hs(()=>[l.value,a.value,i.name],([c,u,f],[h,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Ko(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(d=>d(c))},{flush:"post"}),()=>{const c=s.value,u=i.name,f=a.value,h=f&&f.components[u];if(!h)return qm(t.default,{Component:h,route:c});const p=f.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=ff(h,rt({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return qm(t.default,{Component:m,route:c})||m}}});function qm(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const Pv=YS;function KS(i){const e=wS(i.routes,i),t=i.parseQuery||VS,n=i.stringifyQuery||Gm,s=i.history,r=Aa(),o=Aa(),a=Aa(),l=p1(ms);let c=ms;lo&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ff.bind(null,B=>""+B),f=Ff.bind(null,BS),h=Ff.bind(null,nu);function p(B,Q){let Z,oe;return Mv(B)?(Z=e.getRecordMatcher(B),oe=Q):oe=B,e.addRoute(oe,Z)}function g(B){const Q=e.getRecordMatcher(B);Q&&e.removeRoute(Q)}function d(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function _(B,Q){if(Q=rt({},Q||l.value),typeof B=="string"){const k=kf(t,B,Q.path),J=e.resolve({path:k.path},Q),te=s.createHref(k.fullPath);return rt(k,J,{params:h(J.params),hash:nu(k.hash),redirectedFrom:void 0,href:te})}let Z;if("path"in B)Z=rt({},B,{path:kf(t,B.path,Q.path).path});else{const k=rt({},B.params);for(const J in k)k[J]==null&&delete k[J];Z=rt({},B,{params:f(k)}),Q.params=f(Q.params)}const oe=e.resolve(Z,Q),Te=B.hash||"";oe.params=u(h(oe.params));const C=QM(n,rt({},B,{hash:FS(Te),path:oe.path})),L=s.createHref(C);return rt({fullPath:C,hash:Te,query:n===Gm?GS(B.query):B.query||{}},oe,{redirectedFrom:void 0,href:L})}function x(B){return typeof B=="string"?kf(t,B,l.value.path):rt({},B)}function v(B,Q){if(c!==B)return Zo(8,{from:Q,to:B})}function y(B){return A(B)}function M(B){return y(rt(x(B),{replace:!0}))}function E(B){const Q=B.matched[B.matched.length-1];if(Q&&Q.redirect){const{redirect:Z}=Q;let oe=typeof Z=="function"?Z(B):Z;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=x(oe):{path:oe},oe.params={}),rt({query:B.query,hash:B.hash,params:"path"in oe?{}:B.params},oe)}}function A(B,Q){const Z=c=_(B),oe=l.value,Te=B.state,C=B.force,L=B.replace===!0,k=E(Z);if(k)return A(rt(x(k),{state:typeof k=="object"?rt({},Te,k.state):Te,force:C,replace:L}),Q||Z);const J=Z;J.redirectedFrom=Q;let te;return!C&&eS(n,oe,Z)&&(te=Zo(16,{to:J,from:oe}),be(oe,oe,!0,!1)),(te?Promise.resolve(te):P(J,oe)).catch(ce=>Hi(ce)?Hi(ce,2)?ce:he(ce):V(ce,J,oe)).then(ce=>{if(ce){if(Hi(ce,2))return A(rt({replace:L},x(ce.to),{state:typeof ce.to=="object"?rt({},Te,ce.to.state):Te,force:C}),Q||J)}else ce=$(J,oe,!0,L,Te);return I(J,oe,ce),ce})}function b(B,Q){const Z=v(B,Q);return Z?Promise.reject(Z):Promise.resolve()}function T(B){const Q=pe.values().next().value;return Q&&typeof Q.runWithContext=="function"?Q.runWithContext(B):B()}function P(B,Q){let Z;const[oe,Te,C]=ZS(B,Q);Z=zf(oe.reverse(),"beforeRouteLeave",B,Q);for(const k of oe)k.leaveGuards.forEach(J=>{Z.push(Ts(J,B,Q))});const L=b.bind(null,B,Q);return Z.push(L),Se(Z).then(()=>{Z=[];for(const k of r.list())Z.push(Ts(k,B,Q));return Z.push(L),Se(Z)}).then(()=>{Z=zf(Te,"beforeRouteUpdate",B,Q);for(const k of Te)k.updateGuards.forEach(J=>{Z.push(Ts(J,B,Q))});return Z.push(L),Se(Z)}).then(()=>{Z=[];for(const k of B.matched)if(k.beforeEnter&&!Q.matched.includes(k))if(yi(k.beforeEnter))for(const J of k.beforeEnter)Z.push(Ts(J,B,Q));else Z.push(Ts(k.beforeEnter,B,Q));return Z.push(L),Se(Z)}).then(()=>(B.matched.forEach(k=>k.enterCallbacks={}),Z=zf(C,"beforeRouteEnter",B,Q),Z.push(L),Se(Z))).then(()=>{Z=[];for(const k of o.list())Z.push(Ts(k,B,Q));return Z.push(L),Se(Z)}).catch(k=>Hi(k,8)?k:Promise.reject(k))}function I(B,Q,Z){for(const oe of a.list())T(()=>oe(B,Q,Z))}function $(B,Q,Z,oe,Te){const C=v(B,Q);if(C)return C;const L=Q===ms,k=lo?history.state:{};Z&&(oe||L?s.replace(B.fullPath,rt({scroll:L&&k&&k.scroll},Te)):s.push(B.fullPath,Te)),l.value=B,be(B,Q,Z,L),he()}let N;function D(){N||(N=s.listen((B,Q,Z)=>{if(!H.listening)return;const oe=_(B),Te=E(oe);if(Te){A(rt(Te,{replace:!0}),oe).catch(el);return}c=oe;const C=l.value;lo&&lS(Nm(C.fullPath,Z.delta),hf()),P(oe,C).catch(L=>Hi(L,12)?L:Hi(L,2)?(A(L.to,oe).then(k=>{Hi(k,20)&&!Z.delta&&Z.type===gl.pop&&s.go(-1,!1)}).catch(el),Promise.reject()):(Z.delta&&s.go(-Z.delta,!1),V(L,oe,C))).then(L=>{L=L||$(oe,C,!1),L&&(Z.delta&&!Hi(L,8)?s.go(-Z.delta,!1):Z.type===gl.pop&&Hi(L,20)&&s.go(-1,!1)),I(oe,C,L)}).catch(el)}))}let O=Aa(),Y=Aa(),j;function V(B,Q,Z){he(B);const oe=Y.list();return oe.length?oe.forEach(Te=>Te(B,Q,Z)):console.error(B),Promise.reject(B)}function re(){return j&&l.value!==ms?Promise.resolve():new Promise((B,Q)=>{O.add([B,Q])})}function he(B){return j||(j=!B,D(),O.list().forEach(([Q,Z])=>B?Z(B):Q()),O.reset()),B}function be(B,Q,Z,oe){const{scrollBehavior:Te}=i;if(!lo||!Te)return Promise.resolve();const C=!Z&&cS(Nm(B.fullPath,0))||(oe||!Z)&&history.state&&history.state.scroll||null;return ep().then(()=>Te(B,Q,C)).then(L=>L&&aS(L)).catch(L=>V(L,B,Q))}const X=B=>s.go(B);let ue;const pe=new Set,H={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:m,getRoutes:d,resolve:_,options:i,push:y,replace:M,go:X,back:()=>X(-1),forward:()=>X(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Y.add,isReady:re,install(B){const Q=this;B.component("RouterLink",XS),B.component("RouterView",Pv),B.config.globalProperties.$router=Q,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Pr(l)}),lo&&!ue&&l.value===ms&&(ue=!0,y(s.location).catch(Te=>{}));const Z={};for(const Te in ms)Z[Te]=Ot(()=>l.value[Te]);B.provide(hp,Q),B.provide(Lv,pa(Z)),B.provide(jh,l);const oe=B.unmount;pe.add(B),B.unmount=function(){pe.delete(B),pe.size<1&&(c=ms,N&&N(),N=null,l.value=ms,ue=!1,j=!1),oe()}}};function Se(B){return B.reduce((Q,Z)=>Q.then(()=>T(Z)),Promise.resolve())}return H}function ZS(i,e){const t=[],n=[],s=[],r=Math.max(e.matched.length,i.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(i.matched.find(c=>Ko(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>Ko(c,l))||s.push(l))}return[t,n,s]}const JS={class:"container"},QS=Ut("footer",null,null,-1),ew={__name:"App",setup(i){const e=ci(!1);return Ue.on(qe.APP_LOADED,()=>e.value=!0),(t,n)=>(Ui(),ma("div",JS,[Ut("main",null,[e.value?bm("",!0):(Ui(),eu(YM,{key:0})),e.value?(Ui(),eu(Pr(Pv),{key:1})):bm("",!0)]),QS]))}},tw="modulepreload",nw=function(i){return"/"+i},$m={},iw=function(e,t,n){if(!t||t.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map(r=>{if(r=nw(r),r in $m)return;$m[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!n)for(let u=s.length-1;u>=0;u--){const f=s[u];if(f.href===r&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":tw,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};const dp=(i,e)=>{const t=i.__vccOpts||i;for(const[n,s]of e)t[n]=s;return t},sw={};function rw(i,e){return Ui(),ma("div",null,[q1(i.$slots,"default",{},void 0,!0)])}const Iv=dp(sw,[["render",rw],["__scopeId","data-v-c46f414c"]]),ow="/assets/images/Paris24.png";const aw={},Dv=i=>(Q_("data-v-71de5a8e"),i=i(),ev(),i),lw=Dv(()=>Ut("h1",null,[cf("Olympic "),Ut("br"),Ut("span",null," Medal Rush")],-1)),cw=Dv(()=>Ut("img",{src:ow,alt:""},null,-1)),uw=[lw,cw];function fw(i,e){return Ui(),ma("div",null,uw)}const Nv=dp(aw,[["render",fw],["__scopeId","data-v-71de5a8e"]]),hw={class:"home"},dw={__name:"HomeView",setup(i){const e=()=>{Me.webgl.renderLogin=!0,yf.push("/login")};return(t,n)=>(Ui(),ma("div",hw,[Pt(Nv),Pt(Iv,{onClick:e},{default:np(()=>[cf("Rejoindre un pays")]),_:1})]))}},pw="/assets/images/flags/BZH.png";var Er,ai;const bo=class{constructor(){ve(this,Er,void 0);ve(this,ai,void 0);mt(this,Er,new Map),mt(this,ai,new Map)}get(e){return G(this,Er).get(e)}set(e,t){var n;return t!==G(this,Er).get(e)&&(G(this,Er).set(e,t),(n=G(this,ai).get(e))==null||n.forEach(s=>s.call(this,t))),this.get(e)}watch(e,t){G(this,ai).has(e)?G(this,ai).get(e).add(t):G(this,ai).set(e,new Set().add(t))}stopWatch(e,t){if(!G(this,ai).has(e))return;G(this,ai).get(e).delete(t)}watching(e){return G(this,ai).has(e)}static getInstance(){return bo.instance||(bo.instance=new bo),bo.instance}};let zc=bo;Er=new WeakMap,ai=new WeakMap,In(zc,"instance");const pp=zc.getInstance();var mw=!1;/*!
  * pinia v2.0.36
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Ov;const df=i=>Ov=i,Uv=Symbol();function Xh(i){return i&&typeof i=="object"&&Object.prototype.toString.call(i)==="[object Object]"&&typeof i.toJSON!="function"}var nl;(function(i){i.direct="direct",i.patchObject="patch object",i.patchFunction="patch function"})(nl||(nl={}));function gw(){const i=jd(!0),e=i.run(()=>ci({}));let t=[],n=[];const s=qo({install(r){df(s),s._a=r,r.provide(Uv,s),r.config.globalProperties.$pinia=s,n.forEach(o=>t.push(o)),n=[]},use(r){return!this._a&&!mw?n.push(r):t.push(r),this},_p:t,_a:null,_e:i,_s:new Map,state:e});return s}const Fv=()=>{};function Ym(i,e,t,n=Fv){i.push(e);const s=()=>{const r=i.indexOf(e);r>-1&&(i.splice(r,1),n())};return!t&&P_()&&zb(s),s}function jr(i,...e){i.slice().forEach(t=>{t(...e)})}function qh(i,e){i instanceof Map&&e instanceof Map&&e.forEach((t,n)=>i.set(n,t)),i instanceof Set&&e instanceof Set&&e.forEach(i.add,i);for(const t in e){if(!e.hasOwnProperty(t))continue;const n=e[t],s=i[t];Xh(s)&&Xh(n)&&i.hasOwnProperty(t)&&!bt(n)&&!Vs(n)?i[t]=qh(s,n):i[t]=n}return i}const _w=Symbol();function vw(i){return!Xh(i)||!i.hasOwnProperty(_w)}const{assign:Ss}=Object;function xw(i){return!!(bt(i)&&i.effect)}function yw(i,e,t,n){const{state:s,actions:r,getters:o}=e,a=t.state.value[i];let l;function c(){a||(t.state.value[i]=s?s():{});const u=_1(t.state.value[i]);return Ss(u,r,Object.keys(o||{}).reduce((f,h)=>(f[h]=qo(Ot(()=>{df(t);const p=t._s.get(i);return o[h].call(p,p)})),f),{}))}return l=kv(i,c,e,t,n,!0),l}function kv(i,e,t={},n,s,r){let o;const a=Ss({actions:{}},t),l={deep:!0};let c,u,f=qo([]),h=qo([]),p;const g=n.state.value[i];!r&&!g&&(n.state.value[i]={}),ci({});let d;function m(A){let b;c=u=!1,typeof A=="function"?(A(n.state.value[i]),b={type:nl.patchFunction,storeId:i,events:p}):(qh(n.state.value[i],A),b={type:nl.patchObject,payload:A,storeId:i,events:p});const T=d=Symbol();ep().then(()=>{d===T&&(c=!0)}),u=!0,jr(f,b,n.state.value[i])}const _=r?function(){const{state:b}=t,T=b?b():{};this.$patch(P=>{Ss(P,T)})}:Fv;function x(){o.stop(),f=[],h=[],n._s.delete(i)}function v(A,b){return function(){df(n);const T=Array.from(arguments),P=[],I=[];function $(O){P.push(O)}function N(O){I.push(O)}jr(h,{args:T,name:A,store:M,after:$,onError:N});let D;try{D=b.apply(this&&this.$id===i?this:M,T)}catch(O){throw jr(I,O),O}return D instanceof Promise?D.then(O=>(jr(P,O),O)).catch(O=>(jr(I,O),Promise.reject(O))):(jr(P,D),D)}}const y={_p:n,$id:i,$onAction:Ym.bind(null,h),$patch:m,$reset:_,$subscribe(A,b={}){const T=Ym(f,A,b.detached,()=>P()),P=o.run(()=>Hs(()=>n.state.value[i],I=>{(b.flush==="sync"?u:c)&&A({storeId:i,type:nl.direct,events:p},I)},Ss({},l,b)));return T},$dispose:x},M=pa(y);n._s.set(i,M);const E=n._e.run(()=>(o=jd(),o.run(()=>e())));for(const A in E){const b=E[A];if(bt(b)&&!xw(b)||Vs(b))r||(g&&vw(b)&&(bt(b)?b.value=g[A]:qh(b,g[A])),n.state.value[i][A]=b);else if(typeof b=="function"){const T=v(A,b);E[A]=T,a.actions[A]=b}}return Ss(M,E),Ss(tt(M),E),Object.defineProperty(M,"$state",{get:()=>n.state.value[i],set:A=>{m(b=>{Ss(b,A)})}}),n._p.forEach(A=>{Ss(M,o.run(()=>A({store:M,app:n._a,pinia:n,options:a})))}),g&&r&&t.hydrate&&t.hydrate(M.$state,g),c=!0,u=!0,M}function bw(i,e,t){let n,s;const r=typeof e=="function";typeof i=="string"?(n=i,s=r?t:e):(s=i,n=i.id);function o(a,l){const c=uf();return a=a||c&&mi(Uv,null),a&&df(a),a=Ov,a._s.has(n)||(r?kv(n,e,s,a):yw(n,s,a)),a._s.get(n)}return o.$id=n,o}const Mw=[[0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0],[0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0],[0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0],[0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,2,1,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,1,0,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,1,1,0,2,2,2,2,2,2,2,2,2,2,2,2,1,2,1,1,0,0,0,0,0,0,0,0,0,1,1,0],[0,1,0,0,0,0,0,0,0,1,1,1,1,2,1,2,2,2,2,2,2,2,2,2,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,0,0,1,1,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,0,0,0,0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,0,0,2,1,1,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,0,0,0,0,0,1,1,0,1,1,0],[0,1,1,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,0,0,0,0,0,1,1,1,1,1,0],[0,1,1,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,1,1,1,0],[0,1,1,1,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,1,1,1,1,0],[0,1,0,0,0,0,0,0,1,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,0,0,0,0,0,1,1,2,2,2,2,2,1,2,2,2,2,1,2,1,2,2,2,2,1,1,1,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1,1,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,1,0,0,1,0,0,0,0,0,1,1,0],[0,1,1,0,0,0,0,0,0,0,1,0,0,2,2,2,2,2,2,2,2,1,2,2,2,2,0,0,0,0,0,1,0,0,0,0,0,1,1,0],[0,1,1,0,0,0,0,0,0,0,1,0,0,0,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0],[0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0],[0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0],[0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0]],Sw={0:"Terrain",1:"Obstacles",2:"Spawn"},zv={data:Mw,mapping:Sw};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mp="150",ww=0,Km=1,Tw=2,Bv=1,Ew=2,Xa=3,cs=0,Bn=1,ss=2,Ws=0,Eo=1,Zm=2,Jm=3,Qm=4,Aw=5,co=100,Cw=101,Rw=102,eg=103,tg=104,Lw=200,Pw=201,Iw=202,Dw=203,Vv=204,Gv=205,Nw=206,Ow=207,Uw=208,Fw=209,kw=210,zw=0,Bw=1,Vw=2,$h=3,Gw=4,Hw=5,Ww=6,jw=7,Hv=0,Xw=1,qw=2,as=0,$w=1,Yw=2,Kw=3,Zw=4,Jw=5,Wv=300,Jo=301,Qo=302,iu=303,su=304,jl=306,fi=1e3,Sn=1001,ru=1002,Wt=1003,Yh=1004,Bc=1005,Nt=1006,jv=1007,Ys=1008,Fr=1009,Qw=1010,eT=1011,Xv=1012,tT=1013,br=1014,hi=1015,rs=1016,nT=1017,iT=1018,Ao=1020,sT=1021,Kn=1023,rT=1024,oT=1025,Dr=1026,ea=1027,aT=1028,lT=1029,cT=1030,uT=1031,fT=1033,Bf=33776,Vf=33777,Gf=33778,Hf=33779,ng=35840,ig=35841,sg=35842,rg=35843,hT=36196,og=37492,ag=37496,lg=37808,cg=37809,ug=37810,fg=37811,hg=37812,dg=37813,pg=37814,mg=37815,gg=37816,_g=37817,vg=37818,xg=37819,yg=37820,bg=37821,Wf=36492,dT=36283,Mg=36284,Sg=36285,wg=36286,pT=2200,mT=2201,gT=2202,_l=2300,ta=2301,jf=2302,ho=2400,po=2401,ou=2402,gp=2500,_T=2501,vT=0,qv=1,Kh=2,Ks=3e3,it=3001,xT=3200,yT=3201,_p=0,bT=1,Ei="srgb",vl="srgb-linear",$v="display-p3",Xf=7680,MT=519,Zh=35044,Tg="300 es",Jh=1035;class Br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Eg=1234567;const il=Math.PI/180,xl=180/Math.PI;function gi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function en(i,e,t){return Math.max(e,Math.min(t,i))}function vp(i,e){return(i%e+e)%e}function ST(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function wT(i,e,t){return i!==e?(t-i)/(e-i):0}function sl(i,e,t){return(1-t)*i+t*e}function TT(i,e,t,n){return sl(i,e,1-Math.exp(-t*n))}function ET(i,e=1){return e-Math.abs(vp(i,e*2)-e)}function AT(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function CT(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function RT(i,e){return i+Math.floor(Math.random()*(e-i+1))}function LT(i,e){return i+Math.random()*(e-i)}function PT(i){return i*(.5-Math.random())}function IT(i){i!==void 0&&(Eg=i);let e=Eg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function DT(i){return i*il}function NT(i){return i*xl}function Qh(i){return(i&i-1)===0&&i!==0}function Yv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Kv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function OT(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),f=r((e-n)/2),h=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function os(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const UT={DEG2RAD:il,RAD2DEG:xl,generateUUID:gi,clamp:en,euclideanModulo:vp,mapLinear:ST,inverseLerp:wT,lerp:sl,damp:TT,pingpong:ET,smoothstep:AT,smootherstep:CT,randInt:RT,randFloat:LT,randFloatSpread:PT,seededRandom:IT,degToRad:DT,radToDeg:NT,isPowerOfTwo:Qh,ceilPowerOfTwo:Yv,floorPowerOfTwo:Kv,setQuaternionFromProperEuler:OT,normalize:at,denormalize:os};class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gn{constructor(){gn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],g=n[8],d=s[0],m=s[3],_=s[6],x=s[1],v=s[4],y=s[7],M=s[2],E=s[5],A=s[8];return r[0]=o*d+a*x+l*M,r[3]=o*m+a*v+l*E,r[6]=o*_+a*y+l*A,r[1]=c*d+u*x+f*M,r[4]=c*m+u*v+f*E,r[7]=c*_+u*y+f*A,r[2]=h*d+p*x+g*M,r[5]=h*m+p*v+g*E,r[8]=h*_+p*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,p=c*r-o*l,g=t*f+n*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=f*d,e[1]=(s*c-u*n)*d,e[2]=(a*n-s*o)*d,e[3]=h*d,e[4]=(u*t-s*l)*d,e[5]=(s*r-a*t)*d,e[6]=p*d,e[7]=(n*l-c*t)*d,e[8]=(o*t-n*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(qf.makeScale(e,t)),this}rotate(e){return this.premultiply(qf.makeRotation(-e)),this}translate(e,t){return this.premultiply(qf.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qf=new gn;function Zv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function yl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}class _n{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const h=r[o+0],p=r[o+1],g=r[o+2],d=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=d;return}if(f!==d||l!==h||c!==p||u!==g){let m=1-a;const _=l*h+c*p+u*g+f*d,x=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){const M=Math.sqrt(v),E=Math.atan2(M,_*x);m=Math.sin(m*E)/M,a=Math.sin(a*E)/M}const y=a*x;if(l=l*m+h*y,c=c*m+p*y,u=u*m+g*y,f=f*m+d*y,m===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-a*p,e[t+2]=c*g+u*p+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ag.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ag.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*s-a*n,u=l*n+a*t-r*s,f=l*s+r*n-o*t,h=-r*t-o*n-a*s;return this.x=c*l+h*-r+u*-a-f*-o,this.y=u*l+h*-o+f*-r-c*-a,this.z=f*l+h*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $f.copy(this).projectOnVector(e),this.sub($f)}reflect(e){return this.sub($f.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $f=new z,Ag=new _n;function Co(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yf(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const FT=new gn().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),kT=new gn().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Os=new z;function zT(i){return i.convertSRGBToLinear(),Os.set(i.r,i.g,i.b).applyMatrix3(kT),i.setRGB(Os.x,Os.y,Os.z)}function BT(i){return Os.set(i.r,i.g,i.b).applyMatrix3(FT),i.setRGB(Os.x,Os.y,Os.z).convertLinearToSRGB()}const VT={[vl]:i=>i,[Ei]:i=>i.convertSRGBToLinear(),[$v]:zT},GT={[vl]:i=>i,[Ei]:i=>i.convertLinearToSRGB(),[$v]:BT},fn={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return vl},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=VT[e],s=GT[t];if(n===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Xr;class Jv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xr===void 0&&(Xr=yl("canvas")),Xr.width=e.width,Xr.height=e.height;const n=Xr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Co(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Co(t[n]/255)*255):t[n]=Co(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Qv{constructor(e=null){this.isSource=!0,this.uuid=gi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Kf(s[o].image)):r.push(Kf(s[o]))}else r=Kf(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Kf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let HT=0;class Zt extends Br{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,n=Sn,s=Sn,r=Nt,o=Ys,a=Kn,l=Fr,c=Zt.DEFAULT_ANISOTROPY,u=Ks){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HT++}),this.uuid=gi(),this.name="",this.source=new Qv(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fi:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case ru:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fi:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case ru:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Wv;Zt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,s=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],d=l[2],m=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-d)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+d)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(p+1)/2,M=(_+1)/2,E=(u+h)/4,A=(f+d)/4,b=(g+m)/4;return v>y&&v>M?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=A/n):y>M?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=b/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=A/r,s=b/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(f-d)*(f-d)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-d)/x,this.z=(h-u)/x,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ki extends Br{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new Zt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Nt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ex extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class WT extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ga{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<s&&(s=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<s&&(s=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=lr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)lr.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(lr)}else n.boundingBox===null&&n.computeBoundingBox(),Zf.copy(n.boundingBox),Zf.applyMatrix4(e.matrixWorld),this.union(Zf);const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,lr),lr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ca),sc.subVectors(this.max,Ca),qr.subVectors(e.a,Ca),$r.subVectors(e.b,Ca),Yr.subVectors(e.c,Ca),gs.subVectors($r,qr),_s.subVectors(Yr,$r),cr.subVectors(qr,Yr);let t=[0,-gs.z,gs.y,0,-_s.z,_s.y,0,-cr.z,cr.y,gs.z,0,-gs.x,_s.z,0,-_s.x,cr.z,0,-cr.x,-gs.y,gs.x,0,-_s.y,_s.x,0,-cr.y,cr.x,0];return!Jf(t,qr,$r,Yr,sc)||(t=[1,0,0,0,1,0,0,0,1],!Jf(t,qr,$r,Yr,sc))?!1:(rc.crossVectors(gs,_s),t=[rc.x,rc.y,rc.z],Jf(t,qr,$r,Yr,sc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,lr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(lr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wi=[new z,new z,new z,new z,new z,new z,new z,new z],lr=new z,Zf=new ga,qr=new z,$r=new z,Yr=new z,gs=new z,_s=new z,cr=new z,Ca=new z,sc=new z,rc=new z,ur=new z;function Jf(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ur.fromArray(i,r);const a=s.x*Math.abs(ur.x)+s.y*Math.abs(ur.y)+s.z*Math.abs(ur.z),l=e.dot(ur),c=t.dot(ur),u=n.dot(ur);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const jT=new ga,Ra=new z,Qf=new z;class _a{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):jT.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ra.subVectors(e,this.center);const t=Ra.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ra,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ra.copy(e.center).add(Qf)),this.expandByPoint(Ra.copy(e.center).sub(Qf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ji=new z,eh=new z,oc=new z,vs=new z,th=new z,ac=new z,nh=new z;class pf{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){eh.copy(e).add(t).multiplyScalar(.5),oc.copy(t).sub(e).normalize(),vs.copy(this.origin).sub(eh);const r=e.distanceTo(t)*.5,o=-this.direction.dot(oc),a=vs.dot(this.direction),l=-vs.dot(oc),c=vs.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const d=1/u;f*=d,h*=d,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(eh).addScaledVector(oc,h),p}intersectSphere(e,t){ji.subVectors(e.center,this.origin);const n=ji.dot(this.direction),s=ji.dot(ji)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,n,s,r){th.subVectors(t,e),ac.subVectors(n,e),nh.crossVectors(th,ac);let o=this.direction.dot(nh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vs.subVectors(this.origin,e);const l=a*this.direction.dot(ac.crossVectors(vs,ac));if(l<0)return null;const c=a*this.direction.dot(th.cross(vs));if(c<0||l+c>o)return null;const u=-a*vs.dot(nh);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,r,o,a,l,c,u,f,h,p,g,d,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=p,_[7]=g,_[11]=d,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Kr.setFromMatrixColumn(e,0).length(),r=1/Kr.setFromMatrixColumn(e,1).length(),o=1/Kr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,d=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-d*c,t[9]=-a*l,t[2]=d-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,d=c*f;t[0]=h+d*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=d+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,d=c*f;t[0]=h-d*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=d-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,d=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+d,t[1]=l*f,t[5]=d*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=d-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-d*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+d,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=d*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(XT,e,qT)}lookAt(e,t,n){const s=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),xs.crossVectors(n,Dn),xs.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),xs.crossVectors(n,Dn)),xs.normalize(),lc.crossVectors(Dn,xs),s[0]=xs.x,s[4]=lc.x,s[8]=Dn.x,s[1]=xs.y,s[5]=lc.y,s[9]=Dn.y,s[2]=xs.z,s[6]=lc.z,s[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],g=n[2],d=n[6],m=n[10],_=n[14],x=n[3],v=n[7],y=n[11],M=n[15],E=s[0],A=s[4],b=s[8],T=s[12],P=s[1],I=s[5],$=s[9],N=s[13],D=s[2],O=s[6],Y=s[10],j=s[14],V=s[3],re=s[7],he=s[11],be=s[15];return r[0]=o*E+a*P+l*D+c*V,r[4]=o*A+a*I+l*O+c*re,r[8]=o*b+a*$+l*Y+c*he,r[12]=o*T+a*N+l*j+c*be,r[1]=u*E+f*P+h*D+p*V,r[5]=u*A+f*I+h*O+p*re,r[9]=u*b+f*$+h*Y+p*he,r[13]=u*T+f*N+h*j+p*be,r[2]=g*E+d*P+m*D+_*V,r[6]=g*A+d*I+m*O+_*re,r[10]=g*b+d*$+m*Y+_*he,r[14]=g*T+d*N+m*j+_*be,r[3]=x*E+v*P+y*D+M*V,r[7]=x*A+v*I+y*O+M*re,r[11]=x*b+v*$+y*Y+M*he,r[15]=x*T+v*N+y*j+M*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],d=e[7],m=e[11],_=e[15];return g*(+r*l*f-s*c*f-r*a*h+n*c*h+s*a*p-n*l*p)+d*(+t*l*p-t*c*h+r*o*h-s*o*p+s*c*u-r*l*u)+m*(+t*c*f-t*a*p-r*o*f+n*o*p+r*a*u-n*c*u)+_*(-s*a*u-t*l*f+t*a*h+s*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],d=e[13],m=e[14],_=e[15],x=f*m*c-d*h*c+d*l*p-a*m*p-f*l*_+a*h*_,v=g*h*c-u*m*c-g*l*p+o*m*p+u*l*_-o*h*_,y=u*d*c-g*f*c+g*a*p-o*d*p-u*a*_+o*f*_,M=g*f*l-u*d*l-g*a*h+o*d*h+u*a*m-o*f*m,E=t*x+n*v+s*y+r*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=x*A,e[1]=(d*h*r-f*m*r-d*s*p+n*m*p+f*s*_-n*h*_)*A,e[2]=(a*m*r-d*l*r+d*s*c-n*m*c-a*s*_+n*l*_)*A,e[3]=(f*l*r-a*h*r-f*s*c+n*h*c+a*s*p-n*l*p)*A,e[4]=v*A,e[5]=(u*m*r-g*h*r+g*s*p-t*m*p-u*s*_+t*h*_)*A,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*_-t*l*_)*A,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*p+t*l*p)*A,e[8]=y*A,e[9]=(g*f*r-u*d*r-g*n*p+t*d*p+u*n*_-t*f*_)*A,e[10]=(o*d*r-g*a*r+g*n*c-t*d*c-o*n*_+t*a*_)*A,e[11]=(u*a*r-o*f*r-u*n*c+t*f*c+o*n*p-t*a*p)*A,e[12]=M*A,e[13]=(u*d*s-g*f*s+g*n*h-t*d*h-u*n*m+t*f*m)*A,e[14]=(g*a*s-o*d*s-g*n*l+t*d*l+o*n*m-t*a*m)*A,e[15]=(o*f*s-u*a*s+u*n*l-t*f*l-o*n*h+t*a*h)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,p=r*u,g=r*f,d=o*u,m=o*f,_=a*f,x=l*c,v=l*u,y=l*f,M=n.x,E=n.y,A=n.z;return s[0]=(1-(d+_))*M,s[1]=(p+y)*M,s[2]=(g-v)*M,s[3]=0,s[4]=(p-y)*E,s[5]=(1-(h+_))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(g+v)*A,s[9]=(m-x)*A,s[10]=(1-(h+d))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Kr.set(s[0],s[1],s[2]).length();const o=Kr.set(s[4],s[5],s[6]).length(),a=Kr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ii.copy(this);const c=1/r,u=1/o,f=1/a;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=f,ii.elements[9]*=f,ii.elements[10]*=f,t.setFromRotationMatrix(ii),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),h=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o){const a=this.elements,l=1/(t-e),c=1/(n-s),u=1/(o-r),f=(t+e)*l,h=(n+s)*c,p=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Kr=new z,ii=new We,XT=new z(0,0,0),qT=new z(1,1,1),xs=new z,lc=new z,Dn=new z,Cg=new We,Rg=new _n;class va{constructor(e=0,t=0,n=0,s=va.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-en(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rg.setFromEuler(this),this.setFromQuaternion(Rg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}va.DEFAULT_ORDER="XYZ";class xp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $T=0;const Lg=new z,Zr=new _n,Xi=new We,cc=new z,La=new z,YT=new z,KT=new _n,Pg=new z(1,0,0),Ig=new z(0,1,0),Dg=new z(0,0,1),ZT={type:"added"},Ng={type:"removed"};class dt extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$T++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new z,t=new va,n=new _n,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new gn}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new xp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(Pg,e)}rotateY(e){return this.rotateOnAxis(Ig,e)}rotateZ(e){return this.rotateOnAxis(Dg,e)}translateOnAxis(e,t){return Lg.copy(e).applyQuaternion(this.quaternion),this.position.add(Lg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pg,e)}translateY(e){return this.translateOnAxis(Ig,e)}translateZ(e){return this.translateOnAxis(Dg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cc.copy(e):cc.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(La,cc,this.up):Xi.lookAt(cc,La,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),Zr.setFromRotationMatrix(Xi),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ZT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ng)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ng)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,e,YT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,KT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}dt.DEFAULT_UP=new z(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new z,qi=new z,ih=new z,$i=new z,Jr=new z,Qr=new z,Og=new z,sh=new z,rh=new z,oh=new z;class ns{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),si.subVectors(e,t),s.cross(si);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){si.subVectors(s,t),qi.subVectors(n,t),ih.subVectors(e,t);const o=si.dot(si),a=si.dot(qi),l=si.dot(ih),c=qi.dot(qi),u=qi.dot(ih),f=o*c-a*a;if(f===0)return r.set(-2,-1,-1);const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,$i),$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getUV(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,$i),l.set(0,0),l.addScaledVector(r,$i.x),l.addScaledVector(o,$i.y),l.addScaledVector(a,$i.z),l}static isFrontFacing(e,t,n,s){return si.subVectors(n,t),qi.subVectors(e,t),si.cross(qi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),si.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ns.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ns.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return ns.getUV(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return ns.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ns.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Jr.subVectors(s,n),Qr.subVectors(r,n),sh.subVectors(e,n);const l=Jr.dot(sh),c=Qr.dot(sh);if(l<=0&&c<=0)return t.copy(n);rh.subVectors(e,s);const u=Jr.dot(rh),f=Qr.dot(rh);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Jr,o);oh.subVectors(e,r);const p=Jr.dot(oh),g=Qr.dot(oh);if(g>=0&&p<=g)return t.copy(r);const d=p*c-l*g;if(d<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Qr,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Og.subVectors(r,s),a=(f-u)/(f-u+(p-g)),t.copy(s).addScaledVector(Og,a);const _=1/(m+d+h);return o=d*_,a=h*_,t.copy(n).addScaledVector(Jr,o).addScaledVector(Qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let JT=0;class _i extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JT++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=Eo,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Vv,this.blendDst=Gv,this.blendEquation=co,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=$h,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=MT,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xf,this.stencilZFail=Xf,this.stencilZPass=Xf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Eo&&(n.blending=this.blending),this.side!==cs&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const tx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},uc={h:0,s:0,l:0};function ah(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,fn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=fn.workingColorSpace){return this.r=e,this.g=t,this.b=n,fn.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=fn.workingColorSpace){if(e=vp(e,1),t=en(t,0,1),n=en(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ah(o,r,e+1/3),this.g=ah(o,r,e),this.b=ah(o,r,e-1/3)}return fn.toWorkingColorSpace(this,s),this}setStyle(e,t=Ei){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,fn.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,fn.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,fn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,fn.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ei){const n=tx[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}copyLinearToSRGB(e){return this.r=Yf(e.r),this.g=Yf(e.g),this.b=Yf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ei){return fn.fromWorkingColorSpace(Qt.copy(this),e),en(Qt.r*255,0,255)<<16^en(Qt.g*255,0,255)<<8^en(Qt.b*255,0,255)<<0}getHexString(e=Ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=fn.workingColorSpace){fn.fromWorkingColorSpace(Qt.copy(this),t);const n=Qt.r,s=Qt.g,r=Qt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=fn.workingColorSpace){return fn.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Ei){fn.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,s=Qt.b;return e!==Ei?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${s*255|0})`}offsetHSL(e,t,n){return this.getHSL(ri),ri.h+=e,ri.s+=t,ri.l+=n,this.setHSL(ri.h,ri.s,ri.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(uc);const n=sl(ri.h,uc.h,t),s=sl(ri.s,uc.s,t),r=sl(ri.l,uc.l,t);return this.setHSL(n,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Ne;Ne.NAMES=tx;class Mr extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new z,fc=new Be;class vn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fc.fromBufferAttribute(this,t),fc.applyMatrix3(e),this.setXY(t,fc.x,fc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=os(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=os(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=os(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=os(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class nx extends vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ix extends vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vi extends vn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let QT=0;const jn=new We,lh=new dt,eo=new z,Nn=new ga,Pa=new ga,Ht=new z;class ni extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QT++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zv(e)?ix:nx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new gn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return lh.lookAt(e),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new vi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Pa.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(Nn.min,Pa.min),Nn.expandByPoint(Ht),Ht.addVectors(Nn.max,Pa.max),Nn.expandByPoint(Ht)):(Nn.expandByPoint(Pa.min),Nn.expandByPoint(Pa.max))}Nn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ht));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ht.fromBufferAttribute(a,c),l&&(eo.fromBufferAttribute(e,c),Ht.add(eo)),s=Math.max(s,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<a;P++)c[P]=new z,u[P]=new z;const f=new z,h=new z,p=new z,g=new Be,d=new Be,m=new Be,_=new z,x=new z;function v(P,I,$){f.fromArray(s,P*3),h.fromArray(s,I*3),p.fromArray(s,$*3),g.fromArray(o,P*2),d.fromArray(o,I*2),m.fromArray(o,$*2),h.sub(f),p.sub(f),d.sub(g),m.sub(g);const N=1/(d.x*m.y-m.x*d.y);isFinite(N)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(N),x.copy(p).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(N),c[P].add(_),c[I].add(_),c[$].add(_),u[P].add(x),u[I].add(x),u[$].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let P=0,I=y.length;P<I;++P){const $=y[P],N=$.start,D=$.count;for(let O=N,Y=N+D;O<Y;O+=3)v(n[O+0],n[O+1],n[O+2])}const M=new z,E=new z,A=new z,b=new z;function T(P){A.fromArray(r,P*3),b.copy(A);const I=c[P];M.copy(I),M.sub(A.multiplyScalar(A.dot(I))).normalize(),E.crossVectors(b,I);const N=E.dot(u[P])<0?-1:1;l[P*4]=M.x,l[P*4+1]=M.y,l[P*4+2]=M.z,l[P*4+3]=N}for(let P=0,I=y.length;P<I;++P){const $=y[P],N=$.start,D=$.count;for(let O=N,Y=N+D;O<Y;O+=3)T(n[O+0]),T(n[O+1]),T(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),d=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,d),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let d=0,m=l.length;d<m;d++){a.isInterleavedBufferAttribute?p=l[d]*a.data.stride+a.offset:p=l[d]*u;for(let _=0;_<u;_++)h[g++]=c[p++]}return new vn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ni,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ug=new We,Ti=new pf,hc=new _a,Fg=new z,Ia=new z,Da=new z,Na=new z,ch=new z,dc=new z,pc=new Be,mc=new Be,gc=new Be,uh=new z,_c=new z;class on extends dt{constructor(e=new ni,t=new Mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){dc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(ch.fromBufferAttribute(f,e),o?dc.addScaledVector(ch,u):dc.addScaledVector(ch.sub(t),u))}t.add(dc)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),hc.copy(n.boundingSphere),hc.applyMatrix4(r),Ti.copy(e.ray).recast(e.near),hc.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(hc,Fg)===null||Ti.origin.distanceToSquared(Fg)>(e.far-e.near)**2))||(Ug.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(Ug),n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.groups,h=n.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,g=f.length;p<g;p++){const d=f[p],m=s[d.materialIndex],_=Math.max(d.start,h.start),x=Math.min(a.count,Math.min(d.start+d.count,h.start+h.count));for(let v=_,y=x;v<y;v+=3){const M=a.getX(v),E=a.getX(v+1),A=a.getX(v+2);o=vc(this,m,e,Ti,c,u,M,E,A),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let d=p,m=g;d<m;d+=3){const _=a.getX(d),x=a.getX(d+1),v=a.getX(d+2);o=vc(this,s,e,Ti,c,u,_,x,v),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,g=f.length;p<g;p++){const d=f[p],m=s[d.materialIndex],_=Math.max(d.start,h.start),x=Math.min(l.count,Math.min(d.start+d.count,h.start+h.count));for(let v=_,y=x;v<y;v+=3){const M=v,E=v+1,A=v+2;o=vc(this,m,e,Ti,c,u,M,E,A),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let d=p,m=g;d<m;d+=3){const _=d,x=d+1,v=d+2;o=vc(this,s,e,Ti,c,u,_,x,v),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}}}function eE(i,e,t,n,s,r,o,a){let l;if(e.side===Bn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===cs,a),l===null)return null;_c.copy(a),_c.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(_c);return c<t.near||c>t.far?null:{distance:c,point:_c.clone(),object:i}}function vc(i,e,t,n,s,r,o,a,l){i.getVertexPosition(o,Ia),i.getVertexPosition(a,Da),i.getVertexPosition(l,Na);const c=eE(i,e,t,n,Ia,Da,Na,uh);if(c){s&&(pc.fromBufferAttribute(s,o),mc.fromBufferAttribute(s,a),gc.fromBufferAttribute(s,l),c.uv=ns.getUV(uh,Ia,Da,Na,pc,mc,gc,new Be)),r&&(pc.fromBufferAttribute(r,o),mc.fromBufferAttribute(r,a),gc.fromBufferAttribute(r,l),c.uv2=ns.getUV(uh,Ia,Da,Na,pc,mc,gc,new Be));const u={a:o,b:a,c:l,normal:new z,materialIndex:0};ns.getNormal(Ia,Da,Na,u.normal),c.face=u}return c}class xa extends ni{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new vi(c,3)),this.setAttribute("normal",new vi(u,3)),this.setAttribute("uv",new vi(f,2));function g(d,m,_,x,v,y,M,E,A,b,T){const P=y/A,I=M/b,$=y/2,N=M/2,D=E/2,O=A+1,Y=b+1;let j=0,V=0;const re=new z;for(let he=0;he<Y;he++){const be=he*I-N;for(let X=0;X<O;X++){const ue=X*P-$;re[d]=ue*x,re[m]=be*v,re[_]=D,c.push(re.x,re.y,re.z),re[d]=0,re[m]=0,re[_]=E>0?1:-1,u.push(re.x,re.y,re.z),f.push(X/A),f.push(1-he/b),j+=1}}for(let he=0;he<b;he++)for(let be=0;be<A;be++){const X=h+be+O*he,ue=h+be+O*(he+1),pe=h+(be+1)+O*(he+1),H=h+(be+1)+O*he;l.push(X,ue,H),l.push(ue,pe,H),V+=6}a.addGroup(p,V,T),p+=V,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function na(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function pn(i){const e={};for(let t=0;t<i.length;t++){const n=na(i[t]);for(const s in n)e[s]=n[s]}return e}function tE(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sx(i){return i.getRenderTarget()===null&&i.outputEncoding===it?Ei:vl}const nE={clone:na,merge:pn};var iE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iE,this.fragmentShader=sE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=tE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class rx extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class tn extends rx{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xl*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(il*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const to=-90,no=1;class rE extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new tn(to,no,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new tn(to,no,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new tn(to,no,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new tn(to,no,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new tn(to,no,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new tn(to,no,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=as,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class ox extends Zt{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Jo,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oE extends ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ox(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xa(5,5,5),r=new zi({name:"CubemapFromEquirect",uniforms:na(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:Ws});r.uniforms.tEquirect.value=t;const o=new on(s,r),a=t.minFilter;return t.minFilter===Ys&&(t.minFilter=Nt),new rE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const fh=new z,aE=new z,lE=new gn;class pr{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=fh.subVectors(n,t).cross(aE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lE.getNormalMatrix(e),s=this.coplanarPoint(fh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const io=new _a,xc=new z;class mf{constructor(e=new pr,t=new pr,n=new pr,s=new pr,r=new pr,o=new pr){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],p=n[9],g=n[10],d=n[11],m=n[12],_=n[13],x=n[14],v=n[15];return t[0].setComponents(a-s,f-l,d-h,v-m).normalize(),t[1].setComponents(a+s,f+l,d+h,v+m).normalize(),t[2].setComponents(a+r,f+c,d+p,v+_).normalize(),t[3].setComponents(a-r,f-c,d-p,v-_).normalize(),t[4].setComponents(a-o,f-u,d-g,v-x).normalize(),t[5].setComponents(a+o,f+u,d+g,v+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),io.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(io)}intersectsSprite(e){return io.center.set(0,0,0),io.radius=.7071067811865476,io.applyMatrix4(e.matrixWorld),this.intersectsSphere(io)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(xc.x=s.normal.x>0?e.max.x:e.min.x,xc.y=s.normal.y>0?e.max.y:e.min.y,xc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ax(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function cE(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const f=c.array,h=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const h=u.array,p=u.updateRange;i.bindBuffer(f,c),p.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,s(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class gf extends ni{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,p=[],g=[],d=[],m=[];for(let _=0;_<u;_++){const x=_*h-o;for(let v=0;v<c;v++){const y=v*f-r;g.push(y,-x,0),d.push(0,0,1),m.push(v/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let x=0;x<a;x++){const v=x+c*_,y=x+c*(_+1),M=x+1+c*(_+1),E=x+1+c*_;p.push(v,y,E),p.push(y,M,E)}this.setIndex(p),this.setAttribute("position",new vi(g,3)),this.setAttribute("normal",new vi(d,3)),this.setAttribute("uv",new vi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gf(e.width,e.height,e.widthSegments,e.heightSegments)}}var uE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,fE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gE="vec3 transformed = vec3( position );",_E=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vE=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,xE=`#ifdef USE_IRIDESCENCE
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
#endif`,yE=`#ifdef USE_BUMPMAP
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
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,EE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,CE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,RE=`#define PI 3.141592653589793
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
}`,LE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,PE=`vec3 transformedNormal = objectNormal;
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
#endif`,IE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,NE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UE="gl_FragColor = linearToOutputTexel( gl_FragColor );",FE=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kE=`#ifdef USE_ENVMAP
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
#endif`,zE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,BE=`#ifdef USE_ENVMAP
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
#endif`,VE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GE=`#ifdef USE_ENVMAP
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
#endif`,HE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qE=`#ifdef USE_GRADIENTMAP
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
}`,$E=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,YE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JE=`uniform bool receiveShadow;
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
#endif`,QE=`#if defined( USE_ENVMAP )
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
#endif`,eA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sA=`PhysicalMaterial material;
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
#endif`,rA=`struct PhysicalMaterial {
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
}`,oA=`
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
#endif`,aA=`#if defined( RE_IndirectDiffuse )
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
#endif`,lA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,cA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_A=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yA=`#ifdef USE_MORPHNORMALS
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
#endif`,bA=`#ifdef USE_MORPHTARGETS
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
#endif`,MA=`#ifdef USE_MORPHTARGETS
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
#endif`,SA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,wA=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,TA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CA=`#ifdef USE_NORMALMAP
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
#endif`,RA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,LA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,PA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,IA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,OA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,WA=`float getShadowMask() {
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
}`,jA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XA=`#ifdef USE_SKINNING
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
#endif`,qA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$A=`#ifdef USE_SKINNING
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
#endif`,YA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,QA=`#ifdef USE_TRANSMISSION
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
#endif`,e2=`#ifdef USE_TRANSMISSION
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
#endif`,t2=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,n2=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,i2=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,s2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,r2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,o2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,a2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const l2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c2=`uniform sampler2D t2D;
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
}`,u2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,h2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,p2=`#include <common>
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
}`,m2=`#if DEPTH_PACKING == 3200
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
}`,g2=`#define DISTANCE
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
}`,_2=`#define DISTANCE
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
}`,v2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,y2=`uniform float scale;
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
}`,b2=`uniform vec3 diffuse;
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
}`,M2=`#include <common>
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
}`,S2=`uniform vec3 diffuse;
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
}`,w2=`#define LAMBERT
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
}`,T2=`#define LAMBERT
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
}`,E2=`#define MATCAP
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
}`,A2=`#define MATCAP
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
}`,C2=`#define NORMAL
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
}`,R2=`#define NORMAL
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
}`,L2=`#define PHONG
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
}`,P2=`#define PHONG
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
}`,I2=`#define STANDARD
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
}`,D2=`#define STANDARD
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
}`,N2=`#define TOON
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
}`,O2=`#define TOON
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
}`,U2=`uniform float size;
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
}`,F2=`uniform vec3 diffuse;
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
}`,k2=`#include <common>
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
}`,z2=`uniform vec3 color;
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
}`,B2=`uniform float rotation;
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
}`,V2=`uniform vec3 diffuse;
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
}`,Ge={alphamap_fragment:uE,alphamap_pars_fragment:fE,alphatest_fragment:hE,alphatest_pars_fragment:dE,aomap_fragment:pE,aomap_pars_fragment:mE,begin_vertex:gE,beginnormal_vertex:_E,bsdfs:vE,iridescence_fragment:xE,bumpmap_pars_fragment:yE,clipping_planes_fragment:bE,clipping_planes_pars_fragment:ME,clipping_planes_pars_vertex:SE,clipping_planes_vertex:wE,color_fragment:TE,color_pars_fragment:EE,color_pars_vertex:AE,color_vertex:CE,common:RE,cube_uv_reflection_fragment:LE,defaultnormal_vertex:PE,displacementmap_pars_vertex:IE,displacementmap_vertex:DE,emissivemap_fragment:NE,emissivemap_pars_fragment:OE,encodings_fragment:UE,encodings_pars_fragment:FE,envmap_fragment:kE,envmap_common_pars_fragment:zE,envmap_pars_fragment:BE,envmap_pars_vertex:VE,envmap_physical_pars_fragment:QE,envmap_vertex:GE,fog_vertex:HE,fog_pars_vertex:WE,fog_fragment:jE,fog_pars_fragment:XE,gradientmap_pars_fragment:qE,lightmap_fragment:$E,lightmap_pars_fragment:YE,lights_lambert_fragment:KE,lights_lambert_pars_fragment:ZE,lights_pars_begin:JE,lights_toon_fragment:eA,lights_toon_pars_fragment:tA,lights_phong_fragment:nA,lights_phong_pars_fragment:iA,lights_physical_fragment:sA,lights_physical_pars_fragment:rA,lights_fragment_begin:oA,lights_fragment_maps:aA,lights_fragment_end:lA,logdepthbuf_fragment:cA,logdepthbuf_pars_fragment:uA,logdepthbuf_pars_vertex:fA,logdepthbuf_vertex:hA,map_fragment:dA,map_pars_fragment:pA,map_particle_fragment:mA,map_particle_pars_fragment:gA,metalnessmap_fragment:_A,metalnessmap_pars_fragment:vA,morphcolor_vertex:xA,morphnormal_vertex:yA,morphtarget_pars_vertex:bA,morphtarget_vertex:MA,normal_fragment_begin:SA,normal_fragment_maps:wA,normal_pars_fragment:TA,normal_pars_vertex:EA,normal_vertex:AA,normalmap_pars_fragment:CA,clearcoat_normal_fragment_begin:RA,clearcoat_normal_fragment_maps:LA,clearcoat_pars_fragment:PA,iridescence_pars_fragment:IA,output_fragment:DA,packing:NA,premultiplied_alpha_fragment:OA,project_vertex:UA,dithering_fragment:FA,dithering_pars_fragment:kA,roughnessmap_fragment:zA,roughnessmap_pars_fragment:BA,shadowmap_pars_fragment:VA,shadowmap_pars_vertex:GA,shadowmap_vertex:HA,shadowmask_pars_fragment:WA,skinbase_vertex:jA,skinning_pars_vertex:XA,skinning_vertex:qA,skinnormal_vertex:$A,specularmap_fragment:YA,specularmap_pars_fragment:KA,tonemapping_fragment:ZA,tonemapping_pars_fragment:JA,transmission_fragment:QA,transmission_pars_fragment:e2,uv_pars_fragment:t2,uv_pars_vertex:n2,uv_vertex:i2,uv2_pars_fragment:s2,uv2_pars_vertex:r2,uv2_vertex:o2,worldpos_vertex:a2,background_vert:l2,background_frag:c2,backgroundCube_vert:u2,backgroundCube_frag:f2,cube_vert:h2,cube_frag:d2,depth_vert:p2,depth_frag:m2,distanceRGBA_vert:g2,distanceRGBA_frag:_2,equirect_vert:v2,equirect_frag:x2,linedashed_vert:y2,linedashed_frag:b2,meshbasic_vert:M2,meshbasic_frag:S2,meshlambert_vert:w2,meshlambert_frag:T2,meshmatcap_vert:E2,meshmatcap_frag:A2,meshnormal_vert:C2,meshnormal_frag:R2,meshphong_vert:L2,meshphong_frag:P2,meshphysical_vert:I2,meshphysical_frag:D2,meshtoon_vert:N2,meshtoon_frag:O2,points_vert:U2,points_frag:F2,shadow_vert:k2,shadow_frag:z2,sprite_vert:B2,sprite_frag:V2},we={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new gn},uv2Transform:{value:new gn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new gn}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new gn}}},Pi={basic:{uniforms:pn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:pn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:pn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:pn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:pn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:pn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:pn([we.points,we.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:pn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:pn([we.common,we.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:pn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:pn([we.sprite,we.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new gn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:pn([we.common,we.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:pn([we.lights,we.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Pi.physical={uniforms:pn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Be(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const yc={r:0,b:0,g:0};function G2(i,e,t,n,s,r,o){const a=new Ne(0);let l=r===!0?0:1,c,u,f=null,h=0,p=null;function g(m,_){let x=!1,v=_.isScene===!0?_.background:null;v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v));const y=i.xr,M=y.getSession&&y.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?d(a,l):v&&v.isColor&&(d(v,1),x=!0),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===jl)?(u===void 0&&(u=new on(new xa(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:na(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=v.encoding!==it,(f!==v||h!==v.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new on(new gf(2,2),new zi({name:"BackgroundMaterial",uniforms:na(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=v.encoding!==it,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function d(m,_){m.getRGB(yc,sx(i)),n.buffers.color.setClear(yc.r,yc.g,yc.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),l=_,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,d(a,l)},render:g}}function H2(i,e,t,n){const s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function f(D,O,Y,j,V){let re=!1;if(o){const he=d(j,Y,O);c!==he&&(c=he,p(c.object)),re=_(D,j,Y,V),re&&x(D,j,Y,V)}else{const he=O.wireframe===!0;(c.geometry!==j.id||c.program!==Y.id||c.wireframe!==he)&&(c.geometry=j.id,c.program=Y.id,c.wireframe=he,re=!0)}V!==null&&t.update(V,34963),(re||u)&&(u=!1,b(D,O,Y,j),V!==null&&i.bindBuffer(34963,t.get(V).buffer))}function h(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function d(D,O,Y){const j=Y.wireframe===!0;let V=a[D.id];V===void 0&&(V={},a[D.id]=V);let re=V[O.id];re===void 0&&(re={},V[O.id]=re);let he=re[j];return he===void 0&&(he=m(h()),re[j]=he),he}function m(D){const O=[],Y=[],j=[];for(let V=0;V<s;V++)O[V]=0,Y[V]=0,j[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Y,attributeDivisors:j,object:D,attributes:{},index:null}}function _(D,O,Y,j){const V=c.attributes,re=O.attributes;let he=0;const be=Y.getAttributes();for(const X in be)if(be[X].location>=0){const pe=V[X];let H=re[X];if(H===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(H=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(H=D.instanceColor)),pe===void 0||pe.attribute!==H||H&&pe.data!==H.data)return!0;he++}return c.attributesNum!==he||c.index!==j}function x(D,O,Y,j){const V={},re=O.attributes;let he=0;const be=Y.getAttributes();for(const X in be)if(be[X].location>=0){let pe=re[X];pe===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(pe=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(pe=D.instanceColor));const H={};H.attribute=pe,pe&&pe.data&&(H.data=pe.data),V[X]=H,he++}c.attributes=V,c.attributesNum=he,c.index=j}function v(){const D=c.newAttributes;for(let O=0,Y=D.length;O<Y;O++)D[O]=0}function y(D){M(D,0)}function M(D,O){const Y=c.newAttributes,j=c.enabledAttributes,V=c.attributeDivisors;Y[D]=1,j[D]===0&&(i.enableVertexAttribArray(D),j[D]=1),V[D]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,O),V[D]=O)}function E(){const D=c.newAttributes,O=c.enabledAttributes;for(let Y=0,j=O.length;Y<j;Y++)O[Y]!==D[Y]&&(i.disableVertexAttribArray(Y),O[Y]=0)}function A(D,O,Y,j,V,re){n.isWebGL2===!0&&(Y===5124||Y===5125)?i.vertexAttribIPointer(D,O,Y,V,re):i.vertexAttribPointer(D,O,Y,j,V,re)}function b(D,O,Y,j){if(n.isWebGL2===!1&&(D.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const V=j.attributes,re=Y.getAttributes(),he=O.defaultAttributeValues;for(const be in re){const X=re[be];if(X.location>=0){let ue=V[be];if(ue===void 0&&(be==="instanceMatrix"&&D.instanceMatrix&&(ue=D.instanceMatrix),be==="instanceColor"&&D.instanceColor&&(ue=D.instanceColor)),ue!==void 0){const pe=ue.normalized,H=ue.itemSize,Se=t.get(ue);if(Se===void 0)continue;const B=Se.buffer,Q=Se.type,Z=Se.bytesPerElement;if(ue.isInterleavedBufferAttribute){const oe=ue.data,Te=oe.stride,C=ue.offset;if(oe.isInstancedInterleavedBuffer){for(let L=0;L<X.locationSize;L++)M(X.location+L,oe.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let L=0;L<X.locationSize;L++)y(X.location+L);i.bindBuffer(34962,B);for(let L=0;L<X.locationSize;L++)A(X.location+L,H/X.locationSize,Q,pe,Te*Z,(C+H/X.locationSize*L)*Z)}else{if(ue.isInstancedBufferAttribute){for(let oe=0;oe<X.locationSize;oe++)M(X.location+oe,ue.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let oe=0;oe<X.locationSize;oe++)y(X.location+oe);i.bindBuffer(34962,B);for(let oe=0;oe<X.locationSize;oe++)A(X.location+oe,H/X.locationSize,Q,pe,H*Z,H/X.locationSize*oe*Z)}}else if(he!==void 0){const pe=he[be];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(X.location,pe);break;case 3:i.vertexAttrib3fv(X.location,pe);break;case 4:i.vertexAttrib4fv(X.location,pe);break;default:i.vertexAttrib1fv(X.location,pe)}}}}E()}function T(){$();for(const D in a){const O=a[D];for(const Y in O){const j=O[Y];for(const V in j)g(j[V].object),delete j[V];delete O[Y]}delete a[D]}}function P(D){if(a[D.id]===void 0)return;const O=a[D.id];for(const Y in O){const j=O[Y];for(const V in j)g(j[V].object),delete j[V];delete O[Y]}delete a[D.id]}function I(D){for(const O in a){const Y=a[O];if(Y[D.id]===void 0)continue;const j=Y[D.id];for(const V in j)g(j[V].object),delete j[V];delete Y[D.id]}}function $(){N(),u=!0,c!==l&&(c=l,p(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:$,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:y,disableUnusedAttributes:E}}function W2(i,e,t,n){const s=n.isWebGL2;let r;function o(c){r=c}function a(c,u){i.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let h,p;if(s)h=i,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](r,c,u,f),t.update(u,r,f)}this.setMode=o,this.render=a,this.renderInstances=l}function j2(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(34930),h=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),d=i.getParameter(34921),m=i.getParameter(36347),_=i.getParameter(36348),x=i.getParameter(36349),v=h>0,y=o||e.has("OES_texture_float"),M=v&&y,E=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:E}}function X2(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new pr,a=new gn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||s;return s=h,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,d=f.clipIntersection,m=f.clipShadows,_=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:n,v=x*4;let y=_.clippingState||null;l.value=y,y=u(g,h,v,p);for(let M=0;M!==v;++M)y[M]=t[M];_.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,g){const d=f!==null?f.length:0;let m=null;if(d!==0){if(m=l.value,g!==!0||m===null){const _=p+d*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<_)&&(m=new Float32Array(_));for(let v=0,y=p;v!==d;++v,y+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}}function q2(i){let e=new WeakMap;function t(o,a){return a===iu?o.mapping=Jo:a===su&&(o.mapping=Qo),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===iu||a===su)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new oE(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Xl extends rx{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const mo=4,kg=[.125,.215,.35,.446,.526,.582],yr=20,hh=new Xl,zg=new Ne;let dh=null;const mr=(1+Math.sqrt(5))/2,so=1/mr,Bg=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,mr,so),new z(0,mr,-so),new z(so,0,mr),new z(-so,0,mr),new z(mr,so,0),new z(-mr,so,0)];class ed{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){dh=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dh),e.scissorTest=!1,bc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jo||e.mapping===Qo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dh=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:rs,format:Kn,encoding:Ks,depthBuffer:!1},s=Vg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vg(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$2(r)),this._blurMaterial=Y2(r,e,t)}return s}_compileMaterial(e){const t=new on(this._lodPlanes[0],e);this._renderer.compile(t,hh)}_sceneToCubeUV(e,t,n,s){const a=new tn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(zg),u.toneMapping=as,u.autoClear=!1;const p=new Mr({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),g=new on(new xa,p);let d=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,d=!0):(p.color.copy(zg),d=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):x===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const v=this._cubeSize;bc(s,x*v,_>2?v:0,v,v),u.setRenderTarget(s),d&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Jo||e.mapping===Qo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gg());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new on(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;bc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,hh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Bg[(s-1)%Bg.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new on(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*yr-1),d=r/g,m=isFinite(r)?1+Math.floor(u*d):yr;m>yr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yr}`);const _=[];let x=0;for(let A=0;A<yr;++A){const b=A/d,T=Math.exp(-b*b/2);_.push(T),A===0?x+=T:A<m&&(x+=2*T)}for(let A=0;A<_.length;A++)_[A]=_[A]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const y=this._sizeLods[s],M=3*y*(s>v-mo?s-v+mo:0),E=4*(this._cubeSize-y);bc(t,M,E,3*y,2*y),l.setRenderTarget(t),l.render(f,hh)}}function $2(i){const e=[],t=[],n=[];let s=i;const r=i-mo+1+kg.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-mo?l=kg[o-i+mo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,d=3,m=2,_=1,x=new Float32Array(d*g*p),v=new Float32Array(m*g*p),y=new Float32Array(_*g*p);for(let E=0;E<p;E++){const A=E%3*2/3-1,b=E>2?0:-1,T=[A,b,0,A+2/3,b,0,A+2/3,b+1,0,A,b,0,A+2/3,b+1,0,A,b+1,0];x.set(T,d*g*E),v.set(h,m*g*E);const P=[E,E,E,E,E,E];y.set(P,_*g*E)}const M=new ni;M.setAttribute("position",new vn(x,d)),M.setAttribute("uv",new vn(v,m)),M.setAttribute("faceIndex",new vn(y,_)),e.push(M),s>mo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vg(i,e,t){const n=new ki(i,e,t);return n.texture.mapping=jl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bc(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Y2(i,e,t){const n=new Float32Array(yr),s=new z(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yp(),fragmentShader:`

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
		`,blending:Ws,depthTest:!1,depthWrite:!1})}function Gg(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yp(),fragmentShader:`

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
		`,blending:Ws,depthTest:!1,depthWrite:!1})}function Hg(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ws,depthTest:!1,depthWrite:!1})}function yp(){return`

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
	`}function K2(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===iu||l===su,u=l===Jo||l===Qo;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new ed(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new ed(i));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Z2(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function J2(i,e,t,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const p=f.morphAttributes;for(const g in p){const d=p[g];for(let m=0,_=d.length;m<_;m++)e.update(d[m],34962)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let d=0;if(p!==null){const x=p.array;d=p.version;for(let v=0,y=x.length;v<y;v+=3){const M=x[v+0],E=x[v+1],A=x[v+2];h.push(M,E,E,A,A,M)}}else{const x=g.array;d=g.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const M=v+0,E=v+1,A=v+2;h.push(M,E,E,A,A,M)}}const m=new(Zv(h)?ix:nx)(h,1);m.version=d;const _=r.get(f);_&&e.remove(_),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Q2(i,e,t,n){const s=n.isWebGL2;let r;function o(h){r=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){i.drawElements(r,p,a,h*l),t.update(p,r,1)}function f(h,p,g){if(g===0)return;let d,m;if(s)d=i,m="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,p,a,h*l,g),t.update(p,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function eC(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function tC(i,e){return i[0]-e[0]}function nC(i,e){return Math.abs(e[1])-Math.abs(i[1])}function iC(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new ct,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let d=r.get(u);if(d===void 0||d.count!==g){let D=function(){$.dispose(),r.delete(u),u.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let b=0;x===!0&&(b=1),v===!0&&(b=2),y===!0&&(b=3);let T=u.attributes.position.count*b,P=1;T>e.maxTextureSize&&(P=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const I=new Float32Array(T*P*4*g),$=new ex(I,T,P,g);$.type=hi,$.needsUpdate=!0;const N=b*4;for(let O=0;O<g;O++){const Y=M[O],j=E[O],V=A[O],re=T*P*4*O;for(let he=0;he<Y.count;he++){const be=he*N;x===!0&&(o.fromBufferAttribute(Y,he),I[re+be+0]=o.x,I[re+be+1]=o.y,I[re+be+2]=o.z,I[re+be+3]=0),v===!0&&(o.fromBufferAttribute(j,he),I[re+be+4]=o.x,I[re+be+5]=o.y,I[re+be+6]=o.z,I[re+be+7]=0),y===!0&&(o.fromBufferAttribute(V,he),I[re+be+8]=o.x,I[re+be+9]=o.y,I[re+be+10]=o.z,I[re+be+11]=V.itemSize===4?o.w:1)}}d={count:g,texture:$,size:new Be(T,P)},r.set(u,d),u.addEventListener("dispose",D)}let m=0;for(let x=0;x<h.length;x++)m+=h[x];const _=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",_),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}else{const p=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==p){g=[];for(let v=0;v<p;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<p;v++){const y=g[v];y[0]=v,y[1]=h[v]}g.sort(nC);for(let v=0;v<8;v++)v<p&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(tC);const d=u.morphAttributes.position,m=u.morphAttributes.normal;let _=0;for(let v=0;v<8;v++){const y=a[v],M=y[0],E=y[1];M!==Number.MAX_SAFE_INTEGER&&E?(d&&u.getAttribute("morphTarget"+v)!==d[M]&&u.setAttribute("morphTarget"+v,d[M]),m&&u.getAttribute("morphNormal"+v)!==m[M]&&u.setAttribute("morphNormal"+v,m[M]),s[v]=E,_+=E):(d&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}const x=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function sC(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const lx=new Zt,cx=new ex,ux=new WT,fx=new ox,Wg=[],jg=[],Xg=new Float32Array(16),qg=new Float32Array(9),$g=new Float32Array(4);function ya(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Wg[s];if(r===void 0&&(r=new Float32Array(s),Wg[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function _f(i,e){let t=jg[e];t===void 0&&(t=new Int32Array(e),jg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function rC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function oC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function aC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function lC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function cC(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;$g.set(n),i.uniformMatrix2fv(this.addr,!1,$g),zt(t,n)}}function uC(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;qg.set(n),i.uniformMatrix3fv(this.addr,!1,qg),zt(t,n)}}function fC(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;Xg.set(n),i.uniformMatrix4fv(this.addr,!1,Xg),zt(t,n)}}function hC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function dC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function pC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function mC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function gC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function _C(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function vC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function xC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function yC(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||lx,s)}function bC(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ux,s)}function MC(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||fx,s)}function SC(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||cx,s)}function wC(i){switch(i){case 5126:return rC;case 35664:return oC;case 35665:return aC;case 35666:return lC;case 35674:return cC;case 35675:return uC;case 35676:return fC;case 5124:case 35670:return hC;case 35667:case 35671:return dC;case 35668:case 35672:return pC;case 35669:case 35673:return mC;case 5125:return gC;case 36294:return _C;case 36295:return vC;case 36296:return xC;case 35678:case 36198:case 36298:case 36306:case 35682:return yC;case 35679:case 36299:case 36307:return bC;case 35680:case 36300:case 36308:case 36293:return MC;case 36289:case 36303:case 36311:case 36292:return SC}}function TC(i,e){i.uniform1fv(this.addr,e)}function EC(i,e){const t=ya(e,this.size,2);i.uniform2fv(this.addr,t)}function AC(i,e){const t=ya(e,this.size,3);i.uniform3fv(this.addr,t)}function CC(i,e){const t=ya(e,this.size,4);i.uniform4fv(this.addr,t)}function RC(i,e){const t=ya(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function LC(i,e){const t=ya(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function PC(i,e){const t=ya(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function IC(i,e){i.uniform1iv(this.addr,e)}function DC(i,e){i.uniform2iv(this.addr,e)}function NC(i,e){i.uniform3iv(this.addr,e)}function OC(i,e){i.uniform4iv(this.addr,e)}function UC(i,e){i.uniform1uiv(this.addr,e)}function FC(i,e){i.uniform2uiv(this.addr,e)}function kC(i,e){i.uniform3uiv(this.addr,e)}function zC(i,e){i.uniform4uiv(this.addr,e)}function BC(i,e,t){const n=this.cache,s=e.length,r=_f(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||lx,r[o])}function VC(i,e,t){const n=this.cache,s=e.length,r=_f(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ux,r[o])}function GC(i,e,t){const n=this.cache,s=e.length,r=_f(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||fx,r[o])}function HC(i,e,t){const n=this.cache,s=e.length,r=_f(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||cx,r[o])}function WC(i){switch(i){case 5126:return TC;case 35664:return EC;case 35665:return AC;case 35666:return CC;case 35674:return RC;case 35675:return LC;case 35676:return PC;case 5124:case 35670:return IC;case 35667:case 35671:return DC;case 35668:case 35672:return NC;case 35669:case 35673:return OC;case 5125:return UC;case 36294:return FC;case 36295:return kC;case 36296:return zC;case 35678:case 36198:case 36298:case 36306:case 35682:return BC;case 35679:case 36299:case 36307:return VC;case 35680:case 36300:case 36308:case 36293:return GC;case 36289:case 36303:case 36311:case 36292:return HC}}class jC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=wC(t.type)}}class XC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=WC(t.type)}}class qC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const ph=/(\w+)(\])?(\[|\.)?/g;function Yg(i,e){i.seq.push(e),i.map[e.id]=e}function $C(i,e,t){const n=i.name,s=n.length;for(ph.lastIndex=0;;){const r=ph.exec(n),o=ph.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Yg(t,c===void 0?new jC(a,i,e):new XC(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new qC(a),Yg(t,f)),t=f}}}class Vc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);$C(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Kg(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let YC=0;function KC(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function ZC(i){switch(i){case Ks:return["Linear","( value )"];case it:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Zg(i,e,t){const n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+KC(i.getShaderSource(e),o)}else return s}function JC(i,e){const t=ZC(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function QC(i,e){let t;switch(e){case $w:t="Linear";break;case Yw:t="Reinhard";break;case Kw:t="OptimizedCineon";break;case Zw:t="ACESFilmic";break;case Jw:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function eR(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qa).join(`
`)}function tR(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nR(i,e){const t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function qa(i){return i!==""}function Jg(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iR=/^[ \t]*#include +<([\w\d./]+)>/gm;function td(i){return i.replace(iR,sR)}function sR(i,e){const t=Ge[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return td(t)}const rR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function e0(i){return i.replace(rR,oR)}function oR(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function t0(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function aR(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bv?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ew?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xa&&(e="SHADOWMAP_TYPE_VSM"),e}function lR(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Jo:case Qo:e="ENVMAP_TYPE_CUBE";break;case jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cR(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qo:e="ENVMAP_MODE_REFRACTION";break}return e}function uR(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hv:e="ENVMAP_BLENDING_MULTIPLY";break;case Xw:e="ENVMAP_BLENDING_MIX";break;case qw:e="ENVMAP_BLENDING_ADD";break}return e}function fR(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function hR(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=aR(t),c=lR(t),u=cR(t),f=uR(t),h=fR(t),p=t.isWebGL2?"":eR(t),g=tR(r),d=s.createProgram();let m,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(qa).join(`
`),m.length>0&&(m+=`
`),_=[p,g].filter(qa).join(`
`),_.length>0&&(_+=`
`)):(m=[t0(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),_=[p,t0(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==as?"#define TONE_MAPPING":"",t.toneMapping!==as?Ge.tonemapping_pars_fragment:"",t.toneMapping!==as?QC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.encodings_pars_fragment,JC("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qa).join(`
`)),o=td(o),o=Jg(o,t),o=Qg(o,t),a=td(a),a=Jg(a,t),a=Qg(a,t),o=e0(o),a=e0(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Tg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=x+m+o,y=x+_+a,M=Kg(s,35633,v),E=Kg(s,35632,y);if(s.attachShader(d,M),s.attachShader(d,E),t.index0AttributeName!==void 0?s.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d),i.debug.checkShaderErrors){const T=s.getProgramInfoLog(d).trim(),P=s.getShaderInfoLog(M).trim(),I=s.getShaderInfoLog(E).trim();let $=!0,N=!0;if(s.getProgramParameter(d,35714)===!1){$=!1;const D=Zg(s,M,"vertex"),O=Zg(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,35715)+`

Program Info Log: `+T+`
`+D+`
`+O)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(P===""||I==="")&&(N=!1);N&&(this.diagnostics={runnable:$,programLog:T,vertexShader:{log:P,prefix:m},fragmentShader:{log:I,prefix:_}})}s.deleteShader(M),s.deleteShader(E);let A;this.getUniforms=function(){return A===void 0&&(A=new Vc(s,d)),A};let b;return this.getAttributes=function(){return b===void 0&&(b=nR(s,d)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=YC++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=M,this.fragmentShader=E,this}let dR=0;class pR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new mR(e),t.set(e,n)),n}}class mR{constructor(e){this.id=dR++,this.code=e,this.usedTimes=0}}function gR(i,e,t,n,s,r,o){const a=new xp,l=new pR,c=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(b,T,P,I,$){const N=I.fog,D=$.geometry,O=b.isMeshStandardMaterial?I.environment:null,Y=(b.isMeshStandardMaterial?t:e).get(b.envMap||O),j=Y&&Y.mapping===jl?Y.image.height:null,V=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const re=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,he=re!==void 0?re.length:0;let be=0;D.morphAttributes.position!==void 0&&(be=1),D.morphAttributes.normal!==void 0&&(be=2),D.morphAttributes.color!==void 0&&(be=3);let X,ue,pe,H;if(V){const Te=Pi[V];X=Te.vertexShader,ue=Te.fragmentShader}else X=b.vertexShader,ue=b.fragmentShader,l.update(b),pe=l.getVertexShaderID(b),H=l.getFragmentShaderID(b);const Se=i.getRenderTarget(),B=b.alphaTest>0,Q=b.clearcoat>0,Z=b.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:b.type,vertexShader:X,fragmentShader:ue,defines:b.defines,customVertexShaderID:pe,customFragmentShaderID:H,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,instancing:$.isInstancedMesh===!0,instancingColor:$.isInstancedMesh===!0&&$.instanceColor!==null,supportsVertexTextures:h,outputEncoding:Se===null?i.outputEncoding:Se.isXRRenderTarget===!0?Se.texture.encoding:Ks,map:!!b.map,matcap:!!b.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:j,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===bT,tangentSpaceNormalMap:b.normalMapType===_p,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===it,clearcoat:Q,clearcoatMap:Q&&!!b.clearcoatMap,clearcoatRoughnessMap:Q&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:Q&&!!b.clearcoatNormalMap,iridescence:Z,iridescenceMap:Z&&!!b.iridescenceMap,iridescenceThicknessMap:Z&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===Eo,alphaMap:!!b.alphaMap,alphaTest:B,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!D.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!N,useFog:b.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:f,skinning:$.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:be,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:b.toneMapped?i.toneMapping:as,useLegacyLights:i.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ss,flipSided:b.side===Bn,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function m(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)T.push(P),T.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(_(T,b),x(T,b),T.push(i.outputEncoding)),T.push(b.customProgramCacheKey),T.join()}function _(b,T){b.push(T.precision),b.push(T.outputEncoding),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.combine),b.push(T.vertexUvs),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function x(b,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),b.push(a.mask)}function v(b){const T=g[b.type];let P;if(T){const I=Pi[T];P=nE.clone(I.uniforms)}else P=b.uniforms;return P}function y(b,T){let P;for(let I=0,$=c.length;I<$;I++){const N=c[I];if(N.cacheKey===T){P=N,++P.usedTimes;break}}return P===void 0&&(P=new hR(i,T,b,r),c.push(P)),P}function M(b){if(--b.usedTimes===0){const T=c.indexOf(b);c[T]=c[c.length-1],c.pop(),b.destroy()}}function E(b){l.remove(b)}function A(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:v,acquireProgram:y,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:A}}function _R(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function vR(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function n0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function i0(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,h,p,g,d,m){let _=i[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:d,group:m},i[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=p,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=d,_.group=m),e++,_}function a(f,h,p,g,d,m){const _=o(f,h,p,g,d,m);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):t.push(_)}function l(f,h,p,g,d,m){const _=o(f,h,p,g,d,m);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||vR),n.length>1&&n.sort(h||n0),s.length>1&&s.sort(h||n0)}function u(){for(let f=e,h=i.length;f<h;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function xR(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new i0,i.set(n,[o])):s>=r.length?(o=new i0,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function yR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ne};break;case"SpotLight":t={position:new z,direction:new z,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function bR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let MR=0;function SR(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wR(i,e){const t=new yR,n=bR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new z);const r=new z,o=new We,a=new We;function l(u,f){let h=0,p=0,g=0;for(let I=0;I<9;I++)s.probe[I].set(0,0,0);let d=0,m=0,_=0,x=0,v=0,y=0,M=0,E=0,A=0,b=0;u.sort(SR);const T=f===!0?Math.PI:1;for(let I=0,$=u.length;I<$;I++){const N=u[I],D=N.color,O=N.intensity,Y=N.distance,j=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=D.r*O*T,p+=D.g*O*T,g+=D.b*O*T;else if(N.isLightProbe)for(let V=0;V<9;V++)s.probe[V].addScaledVector(N.sh.coefficients[V],O);else if(N.isDirectionalLight){const V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*T),N.castShadow){const re=N.shadow,he=n.get(N);he.shadowBias=re.bias,he.shadowNormalBias=re.normalBias,he.shadowRadius=re.radius,he.shadowMapSize=re.mapSize,s.directionalShadow[d]=he,s.directionalShadowMap[d]=j,s.directionalShadowMatrix[d]=N.shadow.matrix,y++}s.directional[d]=V,d++}else if(N.isSpotLight){const V=t.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(D).multiplyScalar(O*T),V.distance=Y,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,s.spot[_]=V;const re=N.shadow;if(N.map&&(s.spotLightMap[A]=N.map,A++,re.updateMatrices(N),N.castShadow&&b++),s.spotLightMatrix[_]=re.matrix,N.castShadow){const he=n.get(N);he.shadowBias=re.bias,he.shadowNormalBias=re.normalBias,he.shadowRadius=re.radius,he.shadowMapSize=re.mapSize,s.spotShadow[_]=he,s.spotShadowMap[_]=j,E++}_++}else if(N.isRectAreaLight){const V=t.get(N);V.color.copy(D).multiplyScalar(O),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),s.rectArea[x]=V,x++}else if(N.isPointLight){const V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*T),V.distance=N.distance,V.decay=N.decay,N.castShadow){const re=N.shadow,he=n.get(N);he.shadowBias=re.bias,he.shadowNormalBias=re.normalBias,he.shadowRadius=re.radius,he.shadowMapSize=re.mapSize,he.shadowCameraNear=re.camera.near,he.shadowCameraFar=re.camera.far,s.pointShadow[m]=he,s.pointShadowMap[m]=j,s.pointShadowMatrix[m]=N.shadow.matrix,M++}s.point[m]=V,m++}else if(N.isHemisphereLight){const V=t.get(N);V.skyColor.copy(N.color).multiplyScalar(O*T),V.groundColor.copy(N.groundColor).multiplyScalar(O*T),s.hemi[v]=V,v++}}x>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=we.LTC_FLOAT_1,s.rectAreaLTC2=we.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=we.LTC_HALF_1,s.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=p,s.ambient[2]=g;const P=s.hash;(P.directionalLength!==d||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==x||P.hemiLength!==v||P.numDirectionalShadows!==y||P.numPointShadows!==M||P.numSpotShadows!==E||P.numSpotMaps!==A)&&(s.directional.length=d,s.spot.length=_,s.rectArea.length=x,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=M,s.pointShadowMap.length=M,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=M,s.spotLightMatrix.length=E+A-b,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=b,P.directionalLength=d,P.pointLength=m,P.spotLength=_,P.rectAreaLength=x,P.hemiLength=v,P.numDirectionalShadows=y,P.numPointShadows=M,P.numSpotShadows=E,P.numSpotMaps=A,s.version=MR++)}function c(u,f){let h=0,p=0,g=0,d=0,m=0;const _=f.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const y=u[x];if(y.isDirectionalLight){const M=s.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),h++}else if(y.isSpotLight){const M=s.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const M=s.rectArea[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),a.identity(),o.copy(y.matrixWorld),o.premultiply(_),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),d++}else if(y.isPointLight){const M=s.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),p++}else if(y.isHemisphereLight){const M=s.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:s}}function s0(i,e){const t=new wR(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(f){n.push(f)}function a(f){s.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function TR(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new s0(i,e),t.set(r,[l])):o>=a.length?(l=new s0(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class ER extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AR extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const CR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RR=`uniform sampler2D shadow_pass;
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
}`;function LR(i,e,t){let n=new mf;const s=new Be,r=new Be,o=new ct,a=new ER({depthPacking:yT}),l=new AR,c={},u=t.maxTextureSize,f={[cs]:Bn,[Bn]:cs,[ss]:ss},h=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:CR,fragmentShader:RR}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new ni;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new on(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bv,this.render=function(y,M,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const A=i.getRenderTarget(),b=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Ws),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let I=0,$=y.length;I<$;I++){const N=y[I],D=N.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);const O=D.getFrameExtents();if(s.multiply(O),r.copy(D.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/O.x),s.x=r.x*O.x,D.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/O.y),s.y=r.y*O.y,D.mapSize.y=r.y)),D.map===null){const j=this.type!==Xa?{minFilter:Wt,magFilter:Wt}:{};D.map=new ki(s.x,s.y,j),D.map.texture.name=N.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const Y=D.getViewportCount();for(let j=0;j<Y;j++){const V=D.getViewport(j);o.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),P.viewport(o),D.updateMatrices(N,j),n=D.getFrustum(),v(M,E,D.camera,N,this.type)}D.isPointLightShadow!==!0&&this.type===Xa&&_(D,E),D.needsUpdate=!1}m.needsUpdate=!1,i.setRenderTarget(A,b,T)};function _(y,M){const E=e.update(d);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new ki(s.x,s.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(M,null,E,h,d,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(M,null,E,p,d,null)}function x(y,M,E,A,b,T){let P=null;const I=E.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(I!==void 0)P=I;else if(P=E.isPointLight===!0?l:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const $=P.uuid,N=M.uuid;let D=c[$];D===void 0&&(D={},c[$]=D);let O=D[N];O===void 0&&(O=P.clone(),D[N]=O),P=O}return P.visible=M.visible,P.wireframe=M.wireframe,T===Xa?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:f[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.map=M.map,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(E.matrixWorld),P.nearDistance=A,P.farDistance=b),P}function v(y,M,E,A,b){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&b===Xa)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,y.matrixWorld);const I=e.update(y),$=y.material;if(Array.isArray($)){const N=I.groups;for(let D=0,O=N.length;D<O;D++){const Y=N[D],j=$[Y.materialIndex];if(j&&j.visible){const V=x(y,j,A,E.near,E.far,b);i.renderBufferDirect(E,null,I,V,y,Y)}}}else if($.visible){const N=x(y,$,A,E.near,E.far,b);i.renderBufferDirect(E,null,I,N,y,null)}}const P=y.children;for(let I=0,$=P.length;I<$;I++)v(P[I],M,E,A,b)}}function PR(i,e,t){const n=t.isWebGL2;function s(){let U=!1;const ae=new ct;let ge=null;const Ae=new ct(0,0,0,0);return{setMask:function(Le){ge!==Le&&!U&&(i.colorMask(Le,Le,Le,Le),ge=Le)},setLocked:function(Le){U=Le},setClear:function(Le,pt,Vt,cn,bi){bi===!0&&(Le*=cn,pt*=cn,Vt*=cn),ae.set(Le,pt,Vt,cn),Ae.equals(ae)===!1&&(i.clearColor(Le,pt,Vt,cn),Ae.copy(ae))},reset:function(){U=!1,ge=null,Ae.set(-1,0,0,0)}}}function r(){let U=!1,ae=null,ge=null,Ae=null;return{setTest:function(Le){Le?B(2929):Q(2929)},setMask:function(Le){ae!==Le&&!U&&(i.depthMask(Le),ae=Le)},setFunc:function(Le){if(ge!==Le){switch(Le){case zw:i.depthFunc(512);break;case Bw:i.depthFunc(519);break;case Vw:i.depthFunc(513);break;case $h:i.depthFunc(515);break;case Gw:i.depthFunc(514);break;case Hw:i.depthFunc(518);break;case Ww:i.depthFunc(516);break;case jw:i.depthFunc(517);break;default:i.depthFunc(515)}ge=Le}},setLocked:function(Le){U=Le},setClear:function(Le){Ae!==Le&&(i.clearDepth(Le),Ae=Le)},reset:function(){U=!1,ae=null,ge=null,Ae=null}}}function o(){let U=!1,ae=null,ge=null,Ae=null,Le=null,pt=null,Vt=null,cn=null,bi=null;return{setTest:function(wt){U||(wt?B(2960):Q(2960))},setMask:function(wt){ae!==wt&&!U&&(i.stencilMask(wt),ae=wt)},setFunc:function(wt,Wn,Mi){(ge!==wt||Ae!==Wn||Le!==Mi)&&(i.stencilFunc(wt,Wn,Mi),ge=wt,Ae=Wn,Le=Mi)},setOp:function(wt,Wn,Mi){(pt!==wt||Vt!==Wn||cn!==Mi)&&(i.stencilOp(wt,Wn,Mi),pt=wt,Vt=Wn,cn=Mi)},setLocked:function(wt){U=wt},setClear:function(wt){bi!==wt&&(i.clearStencil(wt),bi=wt)},reset:function(){U=!1,ae=null,ge=null,Ae=null,Le=null,pt=null,Vt=null,cn=null,bi=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,d=[],m=null,_=!1,x=null,v=null,y=null,M=null,E=null,A=null,b=null,T=!1,P=null,I=null,$=null,N=null,D=null;const O=i.getParameter(35661);let Y=!1,j=0;const V=i.getParameter(7938);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),Y=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Y=j>=2);let re=null,he={};const be=i.getParameter(3088),X=i.getParameter(2978),ue=new ct().fromArray(be),pe=new ct().fromArray(X);function H(U,ae,ge){const Ae=new Uint8Array(4),Le=i.createTexture();i.bindTexture(U,Le),i.texParameteri(U,10241,9728),i.texParameteri(U,10240,9728);for(let pt=0;pt<ge;pt++)i.texImage2D(ae+pt,0,6408,1,1,0,6408,5121,Ae);return Le}const Se={};Se[3553]=H(3553,3553,1),Se[34067]=H(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),B(2929),l.setFunc($h),te(!1),ce(Km),B(2884),k(Ws);function B(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Q(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Z(U,ae){return p[U]!==ae?(i.bindFramebuffer(U,ae),p[U]=ae,n&&(U===36009&&(p[36160]=ae),U===36160&&(p[36009]=ae)),!0):!1}function oe(U,ae){let ge=d,Ae=!1;if(U)if(ge=g.get(ae),ge===void 0&&(ge=[],g.set(ae,ge)),U.isWebGLMultipleRenderTargets){const Le=U.texture;if(ge.length!==Le.length||ge[0]!==36064){for(let pt=0,Vt=Le.length;pt<Vt;pt++)ge[pt]=36064+pt;ge.length=Le.length,Ae=!0}}else ge[0]!==36064&&(ge[0]=36064,Ae=!0);else ge[0]!==1029&&(ge[0]=1029,Ae=!0);Ae&&(t.isWebGL2?i.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function Te(U){return m!==U?(i.useProgram(U),m=U,!0):!1}const C={[co]:32774,[Cw]:32778,[Rw]:32779};if(n)C[eg]=32775,C[tg]=32776;else{const U=e.get("EXT_blend_minmax");U!==null&&(C[eg]=U.MIN_EXT,C[tg]=U.MAX_EXT)}const L={[Lw]:0,[Pw]:1,[Iw]:768,[Vv]:770,[kw]:776,[Uw]:774,[Nw]:772,[Dw]:769,[Gv]:771,[Fw]:775,[Ow]:773};function k(U,ae,ge,Ae,Le,pt,Vt,cn){if(U===Ws){_===!0&&(Q(3042),_=!1);return}if(_===!1&&(B(3042),_=!0),U!==Aw){if(U!==x||cn!==T){if((v!==co||E!==co)&&(i.blendEquation(32774),v=co,E=co),cn)switch(U){case Eo:i.blendFuncSeparate(1,771,1,771);break;case Zm:i.blendFunc(1,1);break;case Jm:i.blendFuncSeparate(0,769,0,1);break;case Qm:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Eo:i.blendFuncSeparate(770,771,1,771);break;case Zm:i.blendFunc(770,1);break;case Jm:i.blendFuncSeparate(0,769,0,1);break;case Qm:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,M=null,A=null,b=null,x=U,T=cn}return}Le=Le||ae,pt=pt||ge,Vt=Vt||Ae,(ae!==v||Le!==E)&&(i.blendEquationSeparate(C[ae],C[Le]),v=ae,E=Le),(ge!==y||Ae!==M||pt!==A||Vt!==b)&&(i.blendFuncSeparate(L[ge],L[Ae],L[pt],L[Vt]),y=ge,M=Ae,A=pt,b=Vt),x=U,T=!1}function J(U,ae){U.side===ss?Q(2884):B(2884);let ge=U.side===Bn;ae&&(ge=!ge),te(ge),U.blending===Eo&&U.transparent===!1?k(Ws):k(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const Ae=U.stencilWrite;c.setTest(Ae),Ae&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),fe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?B(32926):Q(32926)}function te(U){P!==U&&(U?i.frontFace(2304):i.frontFace(2305),P=U)}function ce(U){U!==ww?(B(2884),U!==I&&(U===Km?i.cullFace(1029):U===Tw?i.cullFace(1028):i.cullFace(1032))):Q(2884),I=U}function me(U){U!==$&&(Y&&i.lineWidth(U),$=U)}function fe(U,ae,ge){U?(B(32823),(N!==ae||D!==ge)&&(i.polygonOffset(ae,ge),N=ae,D=ge)):Q(32823)}function _e(U){U?B(3089):Q(3089)}function ee(U){U===void 0&&(U=33984+O-1),re!==U&&(i.activeTexture(U),re=U)}function w(U,ae,ge){ge===void 0&&(re===null?ge=33984+O-1:ge=re);let Ae=he[ge];Ae===void 0&&(Ae={type:void 0,texture:void 0},he[ge]=Ae),(Ae.type!==U||Ae.texture!==ae)&&(re!==ge&&(i.activeTexture(ge),re=ge),i.bindTexture(U,ae||Se[U]),Ae.type=U,Ae.texture=ae)}function S(){const U=he[re];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function F(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(U){ue.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ue.copy(U))}function Ee(U){pe.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),pe.copy(U))}function ke(U,ae){let ge=f.get(ae);ge===void 0&&(ge=new WeakMap,f.set(ae,ge));let Ae=ge.get(U);Ae===void 0&&(Ae=i.getUniformBlockIndex(ae,U.name),ge.set(U,Ae))}function ut(U,ae){const Ae=f.get(ae).get(U);u.get(ae)!==Ae&&(i.uniformBlockBinding(ae,Ae,U.__bindingPointIndex),u.set(ae,Ae))}function Bt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},re=null,he={},p={},g=new WeakMap,d=[],m=null,_=!1,x=null,v=null,y=null,M=null,E=null,A=null,b=null,T=!1,P=null,I=null,$=null,N=null,D=null,ue.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:B,disable:Q,bindFramebuffer:Z,drawBuffers:oe,useProgram:Te,setBlending:k,setMaterial:J,setFlipSided:te,setCullFace:ce,setLineWidth:me,setPolygonOffset:fe,setScissorTest:_e,activeTexture:ee,bindTexture:w,unbindTexture:S,compressedTexImage2D:F,compressedTexImage3D:K,texImage2D:Ce,texImage3D:Ie,updateUBOMapping:ke,uniformBlockBinding:ut,texStorage2D:se,texStorage3D:Pe,texSubImage2D:ie,texSubImage3D:de,compressedTexSubImage2D:xe,compressedTexSubImage3D:ye,scissor:De,viewport:Ee,reset:Bt}}function IR(i,e,t,n,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,f=s.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,S){return _?new OffscreenCanvas(w,S):yl("canvas")}function v(w,S,F,K){let ie=1;if((w.width>K||w.height>K)&&(ie=K/Math.max(w.width,w.height)),ie<1||S===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const de=S?Kv:Math.floor,xe=de(ie*w.width),ye=de(ie*w.height);d===void 0&&(d=x(xe,ye));const se=F?x(xe,ye):d;return se.width=xe,se.height=ye,se.getContext("2d").drawImage(w,0,0,xe,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+xe+"x"+ye+")."),se}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function y(w){return Qh(w.width)&&Qh(w.height)}function M(w){return a?!1:w.wrapS!==Sn||w.wrapT!==Sn||w.minFilter!==Wt&&w.minFilter!==Nt}function E(w,S){return w.generateMipmaps&&S&&w.minFilter!==Wt&&w.minFilter!==Nt}function A(w){i.generateMipmap(w)}function b(w,S,F,K,ie=!1){if(a===!1)return S;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let de=S;return S===6403&&(F===5126&&(de=33326),F===5131&&(de=33325),F===5121&&(de=33321)),S===33319&&(F===5126&&(de=33328),F===5131&&(de=33327),F===5121&&(de=33323)),S===6408&&(F===5126&&(de=34836),F===5131&&(de=34842),F===5121&&(de=K===it&&ie===!1?35907:32856),F===32819&&(de=32854),F===32820&&(de=32855)),(de===33325||de===33326||de===33327||de===33328||de===34842||de===34836)&&e.get("EXT_color_buffer_float"),de}function T(w,S,F){return E(w,F)===!0||w.isFramebufferTexture&&w.minFilter!==Wt&&w.minFilter!==Nt?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function P(w){return w===Wt||w===Yh||w===Bc?9728:9729}function I(w){const S=w.target;S.removeEventListener("dispose",I),N(S),S.isVideoTexture&&g.delete(S)}function $(w){const S=w.target;S.removeEventListener("dispose",$),O(S)}function N(w){const S=n.get(w);if(S.__webglInit===void 0)return;const F=w.source,K=m.get(F);if(K){const ie=K[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&D(w),Object.keys(K).length===0&&m.delete(F)}n.remove(w)}function D(w){const S=n.get(w);i.deleteTexture(S.__webglTexture);const F=w.source,K=m.get(F);delete K[S.__cacheKey],o.memory.textures--}function O(w){const S=w.texture,F=n.get(w),K=n.get(S);if(K.__webglTexture!==void 0&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)i.deleteFramebuffer(F.__webglFramebuffer[ie]),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[ie]);else{if(i.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ie=0;ie<F.__webglColorRenderbuffer.length;ie++)F.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[ie]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ie=0,de=S.length;ie<de;ie++){const xe=n.get(S[ie]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(S[ie])}n.remove(S),n.remove(w)}let Y=0;function j(){Y=0}function V(){const w=Y;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),Y+=1,w}function re(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.encoding),S.join()}function he(w,S){const F=n.get(w);if(w.isVideoTexture&&_e(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(F,w,S);return}}t.bindTexture(3553,F.__webglTexture,33984+S)}function be(w,S){const F=n.get(w);if(w.version>0&&F.__version!==w.version){Q(F,w,S);return}t.bindTexture(35866,F.__webglTexture,33984+S)}function X(w,S){const F=n.get(w);if(w.version>0&&F.__version!==w.version){Q(F,w,S);return}t.bindTexture(32879,F.__webglTexture,33984+S)}function ue(w,S){const F=n.get(w);if(w.version>0&&F.__version!==w.version){Z(F,w,S);return}t.bindTexture(34067,F.__webglTexture,33984+S)}const pe={[fi]:10497,[Sn]:33071,[ru]:33648},H={[Wt]:9728,[Yh]:9984,[Bc]:9986,[Nt]:9729,[jv]:9985,[Ys]:9987};function Se(w,S,F){if(F?(i.texParameteri(w,10242,pe[S.wrapS]),i.texParameteri(w,10243,pe[S.wrapT]),(w===32879||w===35866)&&i.texParameteri(w,32882,pe[S.wrapR]),i.texParameteri(w,10240,H[S.magFilter]),i.texParameteri(w,10241,H[S.minFilter])):(i.texParameteri(w,10242,33071),i.texParameteri(w,10243,33071),(w===32879||w===35866)&&i.texParameteri(w,32882,33071),(S.wrapS!==Sn||S.wrapT!==Sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,10240,P(S.magFilter)),i.texParameteri(w,10241,P(S.minFilter)),S.minFilter!==Wt&&S.minFilter!==Nt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Wt||S.minFilter!==Bc&&S.minFilter!==Ys||S.type===hi&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===rs&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(w,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function B(w,S){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",I));const K=S.source;let ie=m.get(K);ie===void 0&&(ie={},m.set(K,ie));const de=re(S);if(de!==w.__cacheKey){ie[de]===void 0&&(ie[de]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ie[de].usedTimes++;const xe=ie[w.__cacheKey];xe!==void 0&&(ie[w.__cacheKey].usedTimes--,xe.usedTimes===0&&D(S)),w.__cacheKey=de,w.__webglTexture=ie[de].texture}return F}function Q(w,S,F){let K=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=35866),S.isData3DTexture&&(K=32879);const ie=B(w,S),de=S.source;t.bindTexture(K,w.__webglTexture,33984+F);const xe=n.get(de);if(de.version!==xe.__version||ie===!0){t.activeTexture(33984+F),i.pixelStorei(37440,S.flipY),i.pixelStorei(37441,S.premultiplyAlpha),i.pixelStorei(3317,S.unpackAlignment),i.pixelStorei(37443,0);const ye=M(S)&&y(S.image)===!1;let se=v(S.image,ye,!1,u);se=ee(S,se);const Pe=y(se)||a,Ce=r.convert(S.format,S.encoding);let Ie=r.convert(S.type),De=b(S.internalFormat,Ce,Ie,S.encoding,S.isVideoTexture);Se(K,S,Pe);let Ee;const ke=S.mipmaps,ut=a&&S.isVideoTexture!==!0,Bt=xe.__version===void 0||ie===!0,U=T(S,se,Pe);if(S.isDepthTexture)De=6402,a?S.type===hi?De=36012:S.type===br?De=33190:S.type===Ao?De=35056:De=33189:S.type===hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Dr&&De===6402&&S.type!==Xv&&S.type!==br&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=br,Ie=r.convert(S.type)),S.format===ea&&De===6402&&(De=34041,S.type!==Ao&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ao,Ie=r.convert(S.type))),Bt&&(ut?t.texStorage2D(3553,1,De,se.width,se.height):t.texImage2D(3553,0,De,se.width,se.height,0,Ce,Ie,null));else if(S.isDataTexture)if(ke.length>0&&Pe){ut&&Bt&&t.texStorage2D(3553,U,De,ke[0].width,ke[0].height);for(let ae=0,ge=ke.length;ae<ge;ae++)Ee=ke[ae],ut?t.texSubImage2D(3553,ae,0,0,Ee.width,Ee.height,Ce,Ie,Ee.data):t.texImage2D(3553,ae,De,Ee.width,Ee.height,0,Ce,Ie,Ee.data);S.generateMipmaps=!1}else ut?(Bt&&t.texStorage2D(3553,U,De,se.width,se.height),t.texSubImage2D(3553,0,0,0,se.width,se.height,Ce,Ie,se.data)):t.texImage2D(3553,0,De,se.width,se.height,0,Ce,Ie,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ut&&Bt&&t.texStorage3D(35866,U,De,ke[0].width,ke[0].height,se.depth);for(let ae=0,ge=ke.length;ae<ge;ae++)Ee=ke[ae],S.format!==Kn?Ce!==null?ut?t.compressedTexSubImage3D(35866,ae,0,0,0,Ee.width,Ee.height,se.depth,Ce,Ee.data,0,0):t.compressedTexImage3D(35866,ae,De,Ee.width,Ee.height,se.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?t.texSubImage3D(35866,ae,0,0,0,Ee.width,Ee.height,se.depth,Ce,Ie,Ee.data):t.texImage3D(35866,ae,De,Ee.width,Ee.height,se.depth,0,Ce,Ie,Ee.data)}else{ut&&Bt&&t.texStorage2D(3553,U,De,ke[0].width,ke[0].height);for(let ae=0,ge=ke.length;ae<ge;ae++)Ee=ke[ae],S.format!==Kn?Ce!==null?ut?t.compressedTexSubImage2D(3553,ae,0,0,Ee.width,Ee.height,Ce,Ee.data):t.compressedTexImage2D(3553,ae,De,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?t.texSubImage2D(3553,ae,0,0,Ee.width,Ee.height,Ce,Ie,Ee.data):t.texImage2D(3553,ae,De,Ee.width,Ee.height,0,Ce,Ie,Ee.data)}else if(S.isDataArrayTexture)ut?(Bt&&t.texStorage3D(35866,U,De,se.width,se.height,se.depth),t.texSubImage3D(35866,0,0,0,0,se.width,se.height,se.depth,Ce,Ie,se.data)):t.texImage3D(35866,0,De,se.width,se.height,se.depth,0,Ce,Ie,se.data);else if(S.isData3DTexture)ut?(Bt&&t.texStorage3D(32879,U,De,se.width,se.height,se.depth),t.texSubImage3D(32879,0,0,0,0,se.width,se.height,se.depth,Ce,Ie,se.data)):t.texImage3D(32879,0,De,se.width,se.height,se.depth,0,Ce,Ie,se.data);else if(S.isFramebufferTexture){if(Bt)if(ut)t.texStorage2D(3553,U,De,se.width,se.height);else{let ae=se.width,ge=se.height;for(let Ae=0;Ae<U;Ae++)t.texImage2D(3553,Ae,De,ae,ge,0,Ce,Ie,null),ae>>=1,ge>>=1}}else if(ke.length>0&&Pe){ut&&Bt&&t.texStorage2D(3553,U,De,ke[0].width,ke[0].height);for(let ae=0,ge=ke.length;ae<ge;ae++)Ee=ke[ae],ut?t.texSubImage2D(3553,ae,0,0,Ce,Ie,Ee):t.texImage2D(3553,ae,De,Ce,Ie,Ee);S.generateMipmaps=!1}else ut?(Bt&&t.texStorage2D(3553,U,De,se.width,se.height),t.texSubImage2D(3553,0,0,0,Ce,Ie,se)):t.texImage2D(3553,0,De,Ce,Ie,se);E(S,Pe)&&A(K),xe.__version=de.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Z(w,S,F){if(S.image.length!==6)return;const K=B(w,S),ie=S.source;t.bindTexture(34067,w.__webglTexture,33984+F);const de=n.get(ie);if(ie.version!==de.__version||K===!0){t.activeTexture(33984+F),i.pixelStorei(37440,S.flipY),i.pixelStorei(37441,S.premultiplyAlpha),i.pixelStorei(3317,S.unpackAlignment),i.pixelStorei(37443,0);const xe=S.isCompressedTexture||S.image[0].isCompressedTexture,ye=S.image[0]&&S.image[0].isDataTexture,se=[];for(let ae=0;ae<6;ae++)!xe&&!ye?se[ae]=v(S.image[ae],!1,!0,c):se[ae]=ye?S.image[ae].image:S.image[ae],se[ae]=ee(S,se[ae]);const Pe=se[0],Ce=y(Pe)||a,Ie=r.convert(S.format,S.encoding),De=r.convert(S.type),Ee=b(S.internalFormat,Ie,De,S.encoding),ke=a&&S.isVideoTexture!==!0,ut=de.__version===void 0||K===!0;let Bt=T(S,Pe,Ce);Se(34067,S,Ce);let U;if(xe){ke&&ut&&t.texStorage2D(34067,Bt,Ee,Pe.width,Pe.height);for(let ae=0;ae<6;ae++){U=se[ae].mipmaps;for(let ge=0;ge<U.length;ge++){const Ae=U[ge];S.format!==Kn?Ie!==null?ke?t.compressedTexSubImage2D(34069+ae,ge,0,0,Ae.width,Ae.height,Ie,Ae.data):t.compressedTexImage2D(34069+ae,ge,Ee,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(34069+ae,ge,0,0,Ae.width,Ae.height,Ie,De,Ae.data):t.texImage2D(34069+ae,ge,Ee,Ae.width,Ae.height,0,Ie,De,Ae.data)}}}else{U=S.mipmaps,ke&&ut&&(U.length>0&&Bt++,t.texStorage2D(34067,Bt,Ee,se[0].width,se[0].height));for(let ae=0;ae<6;ae++)if(ye){ke?t.texSubImage2D(34069+ae,0,0,0,se[ae].width,se[ae].height,Ie,De,se[ae].data):t.texImage2D(34069+ae,0,Ee,se[ae].width,se[ae].height,0,Ie,De,se[ae].data);for(let ge=0;ge<U.length;ge++){const Le=U[ge].image[ae].image;ke?t.texSubImage2D(34069+ae,ge+1,0,0,Le.width,Le.height,Ie,De,Le.data):t.texImage2D(34069+ae,ge+1,Ee,Le.width,Le.height,0,Ie,De,Le.data)}}else{ke?t.texSubImage2D(34069+ae,0,0,0,Ie,De,se[ae]):t.texImage2D(34069+ae,0,Ee,Ie,De,se[ae]);for(let ge=0;ge<U.length;ge++){const Ae=U[ge];ke?t.texSubImage2D(34069+ae,ge+1,0,0,Ie,De,Ae.image[ae]):t.texImage2D(34069+ae,ge+1,Ee,Ie,De,Ae.image[ae])}}}E(S,Ce)&&A(34067),de.__version=ie.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function oe(w,S,F,K,ie){const de=r.convert(F.format,F.encoding),xe=r.convert(F.type),ye=b(F.internalFormat,de,xe,F.encoding);n.get(S).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,ye,S.width,S.height,S.depth,0,de,xe,null):t.texImage2D(ie,0,ye,S.width,S.height,0,de,xe,null)),t.bindFramebuffer(36160,w),fe(S)?h.framebufferTexture2DMultisampleEXT(36160,K,ie,n.get(F).__webglTexture,0,me(S)):(ie===3553||ie>=34069&&ie<=34074)&&i.framebufferTexture2D(36160,K,ie,n.get(F).__webglTexture,0),t.bindFramebuffer(36160,null)}function Te(w,S,F){if(i.bindRenderbuffer(36161,w),S.depthBuffer&&!S.stencilBuffer){let K=33189;if(F||fe(S)){const ie=S.depthTexture;ie&&ie.isDepthTexture&&(ie.type===hi?K=36012:ie.type===br&&(K=33190));const de=me(S);fe(S)?h.renderbufferStorageMultisampleEXT(36161,de,K,S.width,S.height):i.renderbufferStorageMultisample(36161,de,K,S.width,S.height)}else i.renderbufferStorage(36161,K,S.width,S.height);i.framebufferRenderbuffer(36160,36096,36161,w)}else if(S.depthBuffer&&S.stencilBuffer){const K=me(S);F&&fe(S)===!1?i.renderbufferStorageMultisample(36161,K,35056,S.width,S.height):fe(S)?h.renderbufferStorageMultisampleEXT(36161,K,35056,S.width,S.height):i.renderbufferStorage(36161,34041,S.width,S.height),i.framebufferRenderbuffer(36160,33306,36161,w)}else{const K=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ie=0;ie<K.length;ie++){const de=K[ie],xe=r.convert(de.format,de.encoding),ye=r.convert(de.type),se=b(de.internalFormat,xe,ye,de.encoding),Pe=me(S);F&&fe(S)===!1?i.renderbufferStorageMultisample(36161,Pe,se,S.width,S.height):fe(S)?h.renderbufferStorageMultisampleEXT(36161,Pe,se,S.width,S.height):i.renderbufferStorage(36161,se,S.width,S.height)}}i.bindRenderbuffer(36161,null)}function C(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),he(S.depthTexture,0);const K=n.get(S.depthTexture).__webglTexture,ie=me(S);if(S.depthTexture.format===Dr)fe(S)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,K,0,ie):i.framebufferTexture2D(36160,36096,3553,K,0);else if(S.depthTexture.format===ea)fe(S)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,K,0,ie):i.framebufferTexture2D(36160,33306,3553,K,0);else throw new Error("Unknown depthTexture format")}function L(w){const S=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");C(S.__webglFramebuffer,w)}else if(F){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(36160,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]=i.createRenderbuffer(),Te(S.__webglDepthbuffer[K],w,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Te(S.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function k(w,S,F){const K=n.get(w);S!==void 0&&oe(K.__webglFramebuffer,w,w.texture,36064,3553),F!==void 0&&L(w)}function J(w){const S=w.texture,F=n.get(w),K=n.get(S);w.addEventListener("dispose",$),w.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=S.version,o.memory.textures++);const ie=w.isWebGLCubeRenderTarget===!0,de=w.isWebGLMultipleRenderTargets===!0,xe=y(w)||a;if(ie){F.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)F.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(F.__webglFramebuffer=i.createFramebuffer(),de)if(s.drawBuffers){const ye=w.texture;for(let se=0,Pe=ye.length;se<Pe;se++){const Ce=n.get(ye[se]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&fe(w)===!1){const ye=de?S:[S];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer);for(let se=0;se<ye.length;se++){const Pe=ye[se];F.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(36161,F.__webglColorRenderbuffer[se]);const Ce=r.convert(Pe.format,Pe.encoding),Ie=r.convert(Pe.type),De=b(Pe.internalFormat,Ce,Ie,Pe.encoding,w.isXRRenderTarget===!0),Ee=me(w);i.renderbufferStorageMultisample(36161,Ee,De,w.width,w.height),i.framebufferRenderbuffer(36160,36064+se,36161,F.__webglColorRenderbuffer[se])}i.bindRenderbuffer(36161,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,K.__webglTexture),Se(34067,S,xe);for(let ye=0;ye<6;ye++)oe(F.__webglFramebuffer[ye],w,S,36064,34069+ye);E(S,xe)&&A(34067),t.unbindTexture()}else if(de){const ye=w.texture;for(let se=0,Pe=ye.length;se<Pe;se++){const Ce=ye[se],Ie=n.get(Ce);t.bindTexture(3553,Ie.__webglTexture),Se(3553,Ce,xe),oe(F.__webglFramebuffer,w,Ce,36064+se,3553),E(Ce,xe)&&A(3553)}t.unbindTexture()}else{let ye=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?ye=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,K.__webglTexture),Se(ye,S,xe),oe(F.__webglFramebuffer,w,S,36064,ye),E(S,xe)&&A(ye),t.unbindTexture()}w.depthBuffer&&L(w)}function te(w){const S=y(w)||a,F=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let K=0,ie=F.length;K<ie;K++){const de=F[K];if(E(de,S)){const xe=w.isWebGLCubeRenderTarget?34067:3553,ye=n.get(de).__webglTexture;t.bindTexture(xe,ye),A(xe),t.unbindTexture()}}}function ce(w){if(a&&w.samples>0&&fe(w)===!1){const S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],F=w.width,K=w.height;let ie=16384;const de=[],xe=w.stencilBuffer?33306:36096,ye=n.get(w),se=w.isWebGLMultipleRenderTargets===!0;if(se)for(let Pe=0;Pe<S.length;Pe++)t.bindFramebuffer(36160,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Pe,36161,null),t.bindFramebuffer(36160,ye.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Pe,3553,null,0);t.bindFramebuffer(36008,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ye.__webglFramebuffer);for(let Pe=0;Pe<S.length;Pe++){de.push(36064+Pe),w.depthBuffer&&de.push(xe);const Ce=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Ce===!1&&(w.depthBuffer&&(ie|=256),w.stencilBuffer&&(ie|=1024)),se&&i.framebufferRenderbuffer(36008,36064,36161,ye.__webglColorRenderbuffer[Pe]),Ce===!0&&(i.invalidateFramebuffer(36008,[xe]),i.invalidateFramebuffer(36009,[xe])),se){const Ie=n.get(S[Pe]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,Ie,0)}i.blitFramebuffer(0,0,F,K,0,0,F,K,ie,9728),p&&i.invalidateFramebuffer(36008,de)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),se)for(let Pe=0;Pe<S.length;Pe++){t.bindFramebuffer(36160,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Pe,36161,ye.__webglColorRenderbuffer[Pe]);const Ce=n.get(S[Pe]).__webglTexture;t.bindFramebuffer(36160,ye.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Pe,3553,Ce,0)}t.bindFramebuffer(36009,ye.__webglMultisampledFramebuffer)}}function me(w){return Math.min(f,w.samples)}function fe(w){const S=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function _e(w){const S=o.render.frame;g.get(w)!==S&&(g.set(w,S),w.update())}function ee(w,S){const F=w.encoding,K=w.format,ie=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Jh||F!==Ks&&(F===it?a===!1?e.has("EXT_sRGB")===!0&&K===Kn?(w.format=Jh,w.minFilter=Nt,w.generateMipmaps=!1):S=Jv.sRGBToLinear(S):(K!==Kn||ie!==Fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",F)),S}this.allocateTextureUnit=V,this.resetTextureUnits=j,this.setTexture2D=he,this.setTexture2DArray=be,this.setTexture3D=X,this.setTextureCube=ue,this.rebindTextures=k,this.setupRenderTarget=J,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=fe}function DR(i,e,t){const n=t.isWebGL2;function s(r,o=null){let a;if(r===Fr)return 5121;if(r===nT)return 32819;if(r===iT)return 32820;if(r===Qw)return 5120;if(r===eT)return 5122;if(r===Xv)return 5123;if(r===tT)return 5124;if(r===br)return 5125;if(r===hi)return 5126;if(r===rs)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===sT)return 6406;if(r===Kn)return 6408;if(r===rT)return 6409;if(r===oT)return 6410;if(r===Dr)return 6402;if(r===ea)return 34041;if(r===Jh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===aT)return 6403;if(r===lT)return 36244;if(r===cT)return 33319;if(r===uT)return 33320;if(r===fT)return 36249;if(r===Bf||r===Vf||r===Gf||r===Hf)if(o===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Bf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Bf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ng||r===ig||r===sg||r===rg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ng)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ig)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===rg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hT)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===og||r===ag)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===og)return o===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ag)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===lg||r===cg||r===ug||r===fg||r===hg||r===dg||r===pg||r===mg||r===gg||r===_g||r===vg||r===xg||r===yg||r===bg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===lg)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===cg)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ug)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fg)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hg)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===dg)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===pg)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===mg)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===gg)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_g)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vg)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xg)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yg)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bg)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Wf)return o===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===dT||r===Mg||r===Sg||r===wg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Wf)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Mg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Sg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ao?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class NR extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Us extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OR={type:"move"};class mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const d of e.hand.values()){const m=t.getJointPose(d,n),_=this._getHandJoint(c,d);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(OR)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Us;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class bp extends Zt{constructor(e,t,n,s,r,o,a,l,c,u){if(u=u!==void 0?u:Dr,u!==Dr&&u!==ea)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Dr&&(n=br),n===void 0&&u===ea&&(n=Ao),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1}}class UR extends Br{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const d=t.getContextAttributes();let m=null,_=null;const x=[],v=[],y=new Set,M=new Map,E=new tn;E.layers.enable(1),E.viewport=new ct;const A=new tn;A.layers.enable(2),A.viewport=new ct;const b=[E,A],T=new NR;T.layers.enable(1),T.layers.enable(2);let P=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ue=x[X];return ue===void 0&&(ue=new mh,x[X]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(X){let ue=x[X];return ue===void 0&&(ue=new mh,x[X]=ue),ue.getGripSpace()},this.getHand=function(X){let ue=x[X];return ue===void 0&&(ue=new mh,x[X]=ue),ue.getHandSpace()};function $(X){const ue=v.indexOf(X.inputSource);if(ue===-1)return;const pe=x[ue];pe!==void 0&&pe.dispatchEvent({type:X.type,data:X.inputSource})}function N(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",D);for(let X=0;X<x.length;X++){const ue=v[X];ue!==null&&(v[X]=null,x[X].disconnect(ue))}P=null,I=null,e.setRenderTarget(m),p=null,h=null,f=null,s=null,_=null,be.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",N),s.addEventListener("inputsourceschange",D),d.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:s.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:p}),_=new ki(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:Fr,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let ue=null,pe=null,H=null;d.depth&&(H=d.stencil?35056:33190,ue=d.stencil?ea:Dr,pe=d.stencil?Ao:br);const Se={colorFormat:32856,depthFormat:H,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(Se),s.updateRenderState({layers:[h]}),_=new ki(h.textureWidth,h.textureHeight,{format:Kn,type:Fr,depthTexture:new bp(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const B=e.properties.get(_);B.__ignoreDepthValues=h.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),be.setContext(s),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(X){for(let ue=0;ue<X.removed.length;ue++){const pe=X.removed[ue],H=v.indexOf(pe);H>=0&&(v[H]=null,x[H].disconnect(pe))}for(let ue=0;ue<X.added.length;ue++){const pe=X.added[ue];let H=v.indexOf(pe);if(H===-1){for(let B=0;B<x.length;B++)if(B>=v.length){v.push(pe),H=B;break}else if(v[B]===null){v[B]=pe,H=B;break}if(H===-1)break}const Se=x[H];Se&&Se.connect(pe)}}const O=new z,Y=new z;function j(X,ue,pe){O.setFromMatrixPosition(ue.matrixWorld),Y.setFromMatrixPosition(pe.matrixWorld);const H=O.distanceTo(Y),Se=ue.projectionMatrix.elements,B=pe.projectionMatrix.elements,Q=Se[14]/(Se[10]-1),Z=Se[14]/(Se[10]+1),oe=(Se[9]+1)/Se[5],Te=(Se[9]-1)/Se[5],C=(Se[8]-1)/Se[0],L=(B[8]+1)/B[0],k=Q*C,J=Q*L,te=H/(-C+L),ce=te*-C;ue.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ce),X.translateZ(te),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const me=Q+te,fe=Z+te,_e=k-ce,ee=J+(H-ce),w=oe*Z/fe*me,S=Te*Z/fe*me;X.projectionMatrix.makePerspective(_e,ee,w,S,me,fe)}function V(X,ue){ue===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ue.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;T.near=A.near=E.near=X.near,T.far=A.far=E.far=X.far,(P!==T.near||I!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),P=T.near,I=T.far);const ue=X.parent,pe=T.cameras;V(T,ue);for(let Se=0;Se<pe.length;Se++)V(pe[Se],ue);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),X.matrix.copy(T.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale);const H=X.children;for(let Se=0,B=H.length;Se<B;Se++)H[Se].updateMatrixWorld(!0);pe.length===2?j(T,E,A):T.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.getPlanes=function(){return y};let re=null;function he(X,ue){if(u=ue.getViewerPose(c||o),g=ue,u!==null){const pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let H=!1;pe.length!==T.cameras.length&&(T.cameras.length=0,H=!0);for(let Se=0;Se<pe.length;Se++){const B=pe[Se];let Q=null;if(p!==null)Q=p.getViewport(B);else{const oe=f.getViewSubImage(h,B);Q=oe.viewport,Se===0&&(e.setRenderTargetTextures(_,oe.colorTexture,h.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(_))}let Z=b[Se];Z===void 0&&(Z=new tn,Z.layers.enable(Se),Z.viewport=new ct,b[Se]=Z),Z.matrix.fromArray(B.transform.matrix),Z.projectionMatrix.fromArray(B.projectionMatrix),Z.viewport.set(Q.x,Q.y,Q.width,Q.height),Se===0&&T.matrix.copy(Z.matrix),H===!0&&T.cameras.push(Z)}}for(let pe=0;pe<x.length;pe++){const H=v[pe],Se=x[pe];H!==null&&Se!==void 0&&Se.update(H,ue,c||o)}if(re&&re(X,ue),ue.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ue.detectedPlanes});let pe=null;for(const H of y)ue.detectedPlanes.has(H)||(pe===null&&(pe=[]),pe.push(H));if(pe!==null)for(const H of pe)y.delete(H),M.delete(H),n.dispatchEvent({type:"planeremoved",data:H});for(const H of ue.detectedPlanes)if(!y.has(H))y.add(H),M.set(H,ue.lastChangedTime),n.dispatchEvent({type:"planeadded",data:H});else{const Se=M.get(H);H.lastChangedTime>Se&&(M.set(H,H.lastChangedTime),n.dispatchEvent({type:"planechanged",data:H}))}}g=null}const be=new ax;be.setAnimationLoop(he),this.setAnimationLoop=function(X){re=X},this.dispose=function(){}}}function FR(i,e){function t(d,m){m.color.getRGB(d.fogColor.value,sx(i)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function n(d,m,_,x,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(d,m):m.isMeshToonMaterial?(s(d,m),u(d,m)):m.isMeshPhongMaterial?(s(d,m),c(d,m)):m.isMeshStandardMaterial?(s(d,m),f(d,m),m.isMeshPhysicalMaterial&&h(d,m,v)):m.isMeshMatcapMaterial?(s(d,m),p(d,m)):m.isMeshDepthMaterial?s(d,m):m.isMeshDistanceMaterial?(s(d,m),g(d,m)):m.isMeshNormalMaterial?s(d,m):m.isLineBasicMaterial?(r(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?a(d,m,_,x):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.bumpMap&&(d.bumpMap.value=m.bumpMap,d.bumpScale.value=m.bumpScale,m.side===Bn&&(d.bumpScale.value*=-1)),m.displacementMap&&(d.displacementMap.value=m.displacementMap,d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap),m.normalMap&&(d.normalMap.value=m.normalMap,d.normalScale.value.copy(m.normalScale),m.side===Bn&&d.normalScale.value.negate()),m.specularMap&&(d.specularMap.value=m.specularMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const y=i.useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*y}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity);let x;m.map?x=m.map:m.specularMap?x=m.specularMap:m.displacementMap?x=m.displacementMap:m.normalMap?x=m.normalMap:m.bumpMap?x=m.bumpMap:m.roughnessMap?x=m.roughnessMap:m.metalnessMap?x=m.metalnessMap:m.alphaMap?x=m.alphaMap:m.emissiveMap?x=m.emissiveMap:m.clearcoatMap?x=m.clearcoatMap:m.clearcoatNormalMap?x=m.clearcoatNormalMap:m.clearcoatRoughnessMap?x=m.clearcoatRoughnessMap:m.iridescenceMap?x=m.iridescenceMap:m.iridescenceThicknessMap?x=m.iridescenceThicknessMap:m.specularIntensityMap?x=m.specularIntensityMap:m.specularColorMap?x=m.specularColorMap:m.transmissionMap?x=m.transmissionMap:m.thicknessMap?x=m.thicknessMap:m.sheenColorMap?x=m.sheenColorMap:m.sheenRoughnessMap&&(x=m.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix));let v;m.aoMap?v=m.aoMap:m.lightMap&&(v=m.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uv2Transform.value.copy(v.matrix))}function r(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function a(d,m,_,x){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*_,d.scale.value=x*.5,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let v;m.map?v=m.map:m.alphaMap&&(v=m.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix))}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function f(d,m){d.roughness.value=m.roughness,d.metalness.value=m.metalness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function h(d,m,_){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),d.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Bn&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap)}function p(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){d.referencePosition.value.copy(m.referencePosition),d.nearDistance.value=m.nearDistance,d.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function kR(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function c(x,v){let y=s[x.id];y===void 0&&(g(x),y=u(x),s[x.id]=y,x.addEventListener("dispose",m));const M=v.program;n.updateUBOMapping(x,M);const E=e.render.frame;r[x.id]!==E&&(h(x),r[x.id]=E)}function u(x){const v=f();x.__bindingPointIndex=v;const y=i.createBuffer(),M=x.__size,E=x.usage;return i.bindBuffer(35345,y),i.bufferData(35345,M,E),i.bindBuffer(35345,null),i.bindBufferBase(35345,v,y),y}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=s[x.id],y=x.uniforms,M=x.__cache;i.bindBuffer(35345,v);for(let E=0,A=y.length;E<A;E++){const b=y[E];if(p(b,E,M)===!0){const T=b.__offset,P=Array.isArray(b.value)?b.value:[b.value];let I=0;for(let $=0;$<P.length;$++){const N=P[$],D=d(N);typeof N=="number"?(b.__data[0]=N,i.bufferSubData(35345,T+I,b.__data)):N.isMatrix3?(b.__data[0]=N.elements[0],b.__data[1]=N.elements[1],b.__data[2]=N.elements[2],b.__data[3]=N.elements[0],b.__data[4]=N.elements[3],b.__data[5]=N.elements[4],b.__data[6]=N.elements[5],b.__data[7]=N.elements[0],b.__data[8]=N.elements[6],b.__data[9]=N.elements[7],b.__data[10]=N.elements[8],b.__data[11]=N.elements[0]):(N.toArray(b.__data,I),I+=D.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,T,b.__data)}}i.bindBuffer(35345,null)}function p(x,v,y){const M=x.value;if(y[v]===void 0){if(typeof M=="number")y[v]=M;else{const E=Array.isArray(M)?M:[M],A=[];for(let b=0;b<E.length;b++)A.push(E[b].clone());y[v]=A}return!0}else if(typeof M=="number"){if(y[v]!==M)return y[v]=M,!0}else{const E=Array.isArray(y[v])?y[v]:[y[v]],A=Array.isArray(M)?M:[M];for(let b=0;b<E.length;b++){const T=E[b];if(T.equals(A[b])===!1)return T.copy(A[b]),!0}}return!1}function g(x){const v=x.uniforms;let y=0;const M=16;let E=0;for(let A=0,b=v.length;A<b;A++){const T=v[A],P={boundary:0,storage:0},I=Array.isArray(T.value)?T.value:[T.value];for(let $=0,N=I.length;$<N;$++){const D=I[$],O=d(D);P.boundary+=O.boundary,P.storage+=O.storage}if(T.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=y,A>0){E=y%M;const $=M-E;E!==0&&$-P.boundary<0&&(y+=M-E,T.__offset=y)}y+=P.storage}return E=y%M,E>0&&(y+=M-E),x.__size=y,x.__cache={},this}function d(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function _(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:_}}function zR(){const i=yl("canvas");return i.style.display="block",i}function Mp(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:zR(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let f=null,h=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ks,this.useLegacyLights=!0,this.toneMapping=as,this.toneMappingExposure=1;const d=this;let m=!1,_=0,x=0,v=null,y=-1,M=null;const E=new ct,A=new ct;let b=null,T=e.width,P=e.height,I=1,$=null,N=null;const D=new ct(0,0,T,P),O=new ct(0,0,T,P);let Y=!1;const j=new mf;let V=!1,re=!1,he=null;const be=new We,X=new z,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return v===null?I:1}let H=t;function Se(R,q){for(let ne=0;ne<R.length;ne++){const W=R[ne],le=e.getContext(W,q);if(le!==null)return le}return null}try{const R={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mp}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",De,!1),e.addEventListener("webglcontextcreationerror",Ee,!1),H===null){const q=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&q.shift(),H=Se(q,R),H===null)throw Se(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let B,Q,Z,oe,Te,C,L,k,J,te,ce,me,fe,_e,ee,w,S,F,K,ie,de,xe,ye,se;function Pe(){B=new Z2(H),Q=new j2(H,B,i),B.init(Q),xe=new DR(H,B,Q),Z=new PR(H,B,Q),oe=new eC,Te=new _R,C=new IR(H,B,Z,Te,Q,xe,oe),L=new q2(d),k=new K2(d),J=new cE(H,Q),ye=new H2(H,B,J,Q),te=new J2(H,J,oe,ye),ce=new sC(H,te,J,oe),K=new iC(H,Q,C),w=new X2(Te),me=new gR(d,L,k,B,Q,ye,w),fe=new FR(d,Te),_e=new xR,ee=new TR(B,Q),F=new G2(d,L,k,Z,ce,u,o),S=new LR(d,ce,Q),se=new kR(H,oe,Q,Z),ie=new W2(H,B,oe,Q),de=new Q2(H,B,oe,Q),oe.programs=me.programs,d.capabilities=Q,d.extensions=B,d.properties=Te,d.renderLists=_e,d.shadowMap=S,d.state=Z,d.info=oe}Pe();const Ce=new UR(d,H);this.xr=Ce,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=B.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=B.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(R){R!==void 0&&(I=R,this.setSize(T,P,!1))},this.getSize=function(R){return R.set(T,P)},this.setSize=function(R,q,ne=!0){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=R,P=q,e.width=Math.floor(R*I),e.height=Math.floor(q*I),ne===!0&&(e.style.width=R+"px",e.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(T*I,P*I).floor()},this.setDrawingBufferSize=function(R,q,ne){T=R,P=q,I=ne,e.width=Math.floor(R*ne),e.height=Math.floor(q*ne),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(D)},this.setViewport=function(R,q,ne,W){R.isVector4?D.set(R.x,R.y,R.z,R.w):D.set(R,q,ne,W),Z.viewport(E.copy(D).multiplyScalar(I).floor())},this.getScissor=function(R){return R.copy(O)},this.setScissor=function(R,q,ne,W){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,q,ne,W),Z.scissor(A.copy(O).multiplyScalar(I).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(R){Z.setScissorTest(Y=R)},this.setOpaqueSort=function(R){$=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor.apply(F,arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha.apply(F,arguments)},this.clear=function(R=!0,q=!0,ne=!0){let W=0;R&&(W|=16384),q&&(W|=256),ne&&(W|=1024),H.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",Ee,!1),_e.dispose(),ee.dispose(),Te.dispose(),L.dispose(),k.dispose(),ce.dispose(),ye.dispose(),se.dispose(),me.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",ge),Ce.removeEventListener("sessionend",Ae),he&&(he.dispose(),he=null),Le.stop()};function Ie(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const R=oe.autoReset,q=S.enabled,ne=S.autoUpdate,W=S.needsUpdate,le=S.type;Pe(),oe.autoReset=R,S.enabled=q,S.autoUpdate=ne,S.needsUpdate=W,S.type=le}function Ee(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ke(R){const q=R.target;q.removeEventListener("dispose",ke),ut(q)}function ut(R){Bt(R),Te.remove(R)}function Bt(R){const q=Te.get(R).programs;q!==void 0&&(q.forEach(function(ne){me.releaseProgram(ne)}),R.isShaderMaterial&&me.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ne,W,le,Oe){q===null&&(q=ue);const ze=le.isMesh&&le.matrixWorld.determinant()<0,je=vb(R,q,ne,W,le);Z.setMaterial(W,ze);let Xe=ne.index,nt=1;W.wireframe===!0&&(Xe=te.getWireframeAttribute(ne),nt=2);const Ye=ne.drawRange,Ke=ne.attributes.position;let At=Ye.start*nt,Ln=(Ye.start+Ye.count)*nt;Oe!==null&&(At=Math.max(At,Oe.start*nt),Ln=Math.min(Ln,(Oe.start+Oe.count)*nt)),Xe!==null?(At=Math.max(At,0),Ln=Math.min(Ln,Xe.count)):Ke!=null&&(At=Math.max(At,0),Ln=Math.min(Ln,Ke.count));const Gi=Ln-At;if(Gi<0||Gi===1/0)return;ye.setup(le,W,je,ne,Xe);let ir,Ct=ie;if(Xe!==null&&(ir=J.get(Xe),Ct=de,Ct.setIndex(ir)),le.isMesh)W.wireframe===!0?(Z.setLineWidth(W.wireframeLinewidth*pe()),Ct.setMode(1)):Ct.setMode(4);else if(le.isLine){let Ze=W.linewidth;Ze===void 0&&(Ze=1),Z.setLineWidth(Ze*pe()),le.isLineSegments?Ct.setMode(1):le.isLineLoop?Ct.setMode(2):Ct.setMode(3)}else le.isPoints?Ct.setMode(0):le.isSprite&&Ct.setMode(4);if(le.isInstancedMesh)Ct.renderInstances(At,Gi,le.count);else if(ne.isInstancedBufferGeometry){const Ze=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ef=Math.min(ne.instanceCount,Ze);Ct.renderInstances(At,Gi,Ef)}else Ct.render(At,Gi)},this.compile=function(R,q){function ne(W,le,Oe){W.transparent===!0&&W.side===ss&&W.forceSinglePass===!1?(W.side=Bn,W.needsUpdate=!0,Wn(W,le,Oe),W.side=cs,W.needsUpdate=!0,Wn(W,le,Oe),W.side=ss):Wn(W,le,Oe)}h=ee.get(R),h.init(),g.push(h),R.traverseVisible(function(W){W.isLight&&W.layers.test(q.layers)&&(h.pushLight(W),W.castShadow&&h.pushShadow(W))}),h.setupLights(d.useLegacyLights),R.traverse(function(W){const le=W.material;if(le)if(Array.isArray(le))for(let Oe=0;Oe<le.length;Oe++){const ze=le[Oe];ne(ze,R,W)}else ne(le,R,W)}),g.pop(),h=null};let U=null;function ae(R){U&&U(R)}function ge(){Le.stop()}function Ae(){Le.start()}const Le=new ax;Le.setAnimationLoop(ae),typeof self<"u"&&Le.setContext(self),this.setAnimationLoop=function(R){U=R,Ce.setAnimationLoop(R),R===null?Le.stop():Le.start()},Ce.addEventListener("sessionstart",ge),Ce.addEventListener("sessionend",Ae),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(q),q=Ce.getCamera()),R.isScene===!0&&R.onBeforeRender(d,R,q,v),h=ee.get(R,g.length),h.init(),g.push(h),be.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),j.setFromProjectionMatrix(be),re=this.localClippingEnabled,V=w.init(this.clippingPlanes,re),f=_e.get(R,p.length),f.init(),p.push(f),pt(R,q,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort($,N),V===!0&&w.beginShadows();const ne=h.state.shadowsArray;if(S.render(ne,R,q),V===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),F.render(f,R),h.setupLights(d.useLegacyLights),q.isArrayCamera){const W=q.cameras;for(let le=0,Oe=W.length;le<Oe;le++){const ze=W[le];Vt(f,R,ze,ze.viewport)}}else Vt(f,R,q);v!==null&&(C.updateMultisampleRenderTarget(v),C.updateRenderTargetMipmap(v)),R.isScene===!0&&R.onAfterRender(d,R,q),ye.resetDefaultState(),y=-1,M=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,p.pop(),p.length>0?f=p[p.length-1]:f=null};function pt(R,q,ne,W){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||j.intersectsSprite(R)){W&&X.setFromMatrixPosition(R.matrixWorld).applyMatrix4(be);const ze=ce.update(R),je=R.material;je.visible&&f.push(R,ze,je,ne,X.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==oe.render.frame&&(R.skeleton.update(),R.skeleton.frame=oe.render.frame),!R.frustumCulled||j.intersectsObject(R))){W&&X.setFromMatrixPosition(R.matrixWorld).applyMatrix4(be);const ze=ce.update(R),je=R.material;if(Array.isArray(je)){const Xe=ze.groups;for(let nt=0,Ye=Xe.length;nt<Ye;nt++){const Ke=Xe[nt],At=je[Ke.materialIndex];At&&At.visible&&f.push(R,ze,At,ne,X.z,Ke)}}else je.visible&&f.push(R,ze,je,ne,X.z,null)}}const Oe=R.children;for(let ze=0,je=Oe.length;ze<je;ze++)pt(Oe[ze],q,ne,W)}function Vt(R,q,ne,W){const le=R.opaque,Oe=R.transmissive,ze=R.transparent;h.setupLightsView(ne),V===!0&&w.setGlobalState(d.clippingPlanes,ne),Oe.length>0&&cn(le,q,ne),W&&Z.viewport(E.copy(W)),le.length>0&&bi(le,q,ne),Oe.length>0&&bi(Oe,q,ne),ze.length>0&&bi(ze,q,ne),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function cn(R,q,ne){const W=Q.isWebGL2;he===null&&(he=new ki(1024,1024,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")?rs:Fr,minFilter:Ys,samples:W&&r===!0?4:0}));const le=d.getRenderTarget();d.setRenderTarget(he),d.clear();const Oe=d.toneMapping;d.toneMapping=as,bi(R,q,ne),d.toneMapping=Oe,C.updateMultisampleRenderTarget(he),C.updateRenderTargetMipmap(he),d.setRenderTarget(le)}function bi(R,q,ne){const W=q.isScene===!0?q.overrideMaterial:null;for(let le=0,Oe=R.length;le<Oe;le++){const ze=R[le],je=ze.object,Xe=ze.geometry,nt=W===null?ze.material:W,Ye=ze.group;je.layers.test(ne.layers)&&wt(je,q,ne,Xe,nt,Ye)}}function wt(R,q,ne,W,le,Oe){R.onBeforeRender(d,q,ne,W,le,Oe),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),le.onBeforeRender(d,q,ne,W,R,Oe),le.transparent===!0&&le.side===ss&&le.forceSinglePass===!1?(le.side=Bn,le.needsUpdate=!0,d.renderBufferDirect(ne,q,W,le,R,Oe),le.side=cs,le.needsUpdate=!0,d.renderBufferDirect(ne,q,W,le,R,Oe),le.side=ss):d.renderBufferDirect(ne,q,W,le,R,Oe),R.onAfterRender(d,q,ne,W,le,Oe)}function Wn(R,q,ne){q.isScene!==!0&&(q=ue);const W=Te.get(R),le=h.state.lights,Oe=h.state.shadowsArray,ze=le.state.version,je=me.getParameters(R,le.state,Oe,q,ne),Xe=me.getProgramCacheKey(je);let nt=W.programs;W.environment=R.isMeshStandardMaterial?q.environment:null,W.fog=q.fog,W.envMap=(R.isMeshStandardMaterial?k:L).get(R.envMap||W.environment),nt===void 0&&(R.addEventListener("dispose",ke),nt=new Map,W.programs=nt);let Ye=nt.get(Xe);if(Ye!==void 0){if(W.currentProgram===Ye&&W.lightsStateVersion===ze)return Mi(R,je),Ye}else je.uniforms=me.getUniforms(R),R.onBuild(ne,je,d),R.onBeforeCompile(je,d),Ye=me.acquireProgram(je,Xe),nt.set(Xe,Ye),W.uniforms=je.uniforms;const Ke=W.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ke.clippingPlanes=w.uniform),Mi(R,je),W.needsLights=yb(R),W.lightsStateVersion=ze,W.needsLights&&(Ke.ambientLightColor.value=le.state.ambient,Ke.lightProbe.value=le.state.probe,Ke.directionalLights.value=le.state.directional,Ke.directionalLightShadows.value=le.state.directionalShadow,Ke.spotLights.value=le.state.spot,Ke.spotLightShadows.value=le.state.spotShadow,Ke.rectAreaLights.value=le.state.rectArea,Ke.ltc_1.value=le.state.rectAreaLTC1,Ke.ltc_2.value=le.state.rectAreaLTC2,Ke.pointLights.value=le.state.point,Ke.pointLightShadows.value=le.state.pointShadow,Ke.hemisphereLights.value=le.state.hemi,Ke.directionalShadowMap.value=le.state.directionalShadowMap,Ke.directionalShadowMatrix.value=le.state.directionalShadowMatrix,Ke.spotShadowMap.value=le.state.spotShadowMap,Ke.spotLightMatrix.value=le.state.spotLightMatrix,Ke.spotLightMap.value=le.state.spotLightMap,Ke.pointShadowMap.value=le.state.pointShadowMap,Ke.pointShadowMatrix.value=le.state.pointShadowMatrix);const At=Ye.getUniforms(),Ln=Vc.seqWithValue(At.seq,Ke);return W.currentProgram=Ye,W.uniformsList=Ln,Ye}function Mi(R,q){const ne=Te.get(R);ne.outputEncoding=q.outputEncoding,ne.instancing=q.instancing,ne.skinning=q.skinning,ne.morphTargets=q.morphTargets,ne.morphNormals=q.morphNormals,ne.morphColors=q.morphColors,ne.morphTargetsCount=q.morphTargetsCount,ne.numClippingPlanes=q.numClippingPlanes,ne.numIntersection=q.numClipIntersection,ne.vertexAlphas=q.vertexAlphas,ne.vertexTangents=q.vertexTangents,ne.toneMapping=q.toneMapping}function vb(R,q,ne,W,le){q.isScene!==!0&&(q=ue),C.resetTextureUnits();const Oe=q.fog,ze=W.isMeshStandardMaterial?q.environment:null,je=v===null?d.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:Ks,Xe=(W.isMeshStandardMaterial?k:L).get(W.envMap||ze),nt=W.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Ye=!!W.normalMap&&!!ne.attributes.tangent,Ke=!!ne.morphAttributes.position,At=!!ne.morphAttributes.normal,Ln=!!ne.morphAttributes.color,Gi=W.toneMapped?d.toneMapping:as,ir=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Ct=ir!==void 0?ir.length:0,Ze=Te.get(W),Ef=h.state.lights;if(V===!0&&(re===!0||R!==M)){const Pn=R===M&&W.id===y;w.setState(W,R,Pn)}let Gt=!1;W.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Ef.state.version||Ze.outputEncoding!==je||le.isInstancedMesh&&Ze.instancing===!1||!le.isInstancedMesh&&Ze.instancing===!0||le.isSkinnedMesh&&Ze.skinning===!1||!le.isSkinnedMesh&&Ze.skinning===!0||Ze.envMap!==Xe||W.fog===!0&&Ze.fog!==Oe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==w.numPlanes||Ze.numIntersection!==w.numIntersection)||Ze.vertexAlphas!==nt||Ze.vertexTangents!==Ye||Ze.morphTargets!==Ke||Ze.morphNormals!==At||Ze.morphColors!==Ln||Ze.toneMapping!==Gi||Q.isWebGL2===!0&&Ze.morphTargetsCount!==Ct)&&(Gt=!0):(Gt=!0,Ze.__version=W.version);let sr=Ze.currentProgram;Gt===!0&&(sr=Wn(W,q,le));let em=!1,Ta=!1,Af=!1;const un=sr.getUniforms(),rr=Ze.uniforms;if(Z.useProgram(sr.program)&&(em=!0,Ta=!0,Af=!0),W.id!==y&&(y=W.id,Ta=!0),em||M!==R){if(un.setValue(H,"projectionMatrix",R.projectionMatrix),Q.logarithmicDepthBuffer&&un.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),M!==R&&(M=R,Ta=!0,Af=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const Pn=un.map.cameraPosition;Pn!==void 0&&Pn.setValue(H,X.setFromMatrixPosition(R.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&un.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||le.isSkinnedMesh)&&un.setValue(H,"viewMatrix",R.matrixWorldInverse)}if(le.isSkinnedMesh){un.setOptional(H,le,"bindMatrix"),un.setOptional(H,le,"bindMatrixInverse");const Pn=le.skeleton;Pn&&(Q.floatVertexTextures?(Pn.boneTexture===null&&Pn.computeBoneTexture(),un.setValue(H,"boneTexture",Pn.boneTexture,C),un.setValue(H,"boneTextureSize",Pn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Cf=ne.morphAttributes;if((Cf.position!==void 0||Cf.normal!==void 0||Cf.color!==void 0&&Q.isWebGL2===!0)&&K.update(le,ne,sr),(Ta||Ze.receiveShadow!==le.receiveShadow)&&(Ze.receiveShadow=le.receiveShadow,un.setValue(H,"receiveShadow",le.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(rr.envMap.value=Xe,rr.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),Ta&&(un.setValue(H,"toneMappingExposure",d.toneMappingExposure),Ze.needsLights&&xb(rr,Af),Oe&&W.fog===!0&&fe.refreshFogUniforms(rr,Oe),fe.refreshMaterialUniforms(rr,W,I,P,he),Vc.upload(H,Ze.uniformsList,rr,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Vc.upload(H,Ze.uniformsList,rr,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&un.setValue(H,"center",le.center),un.setValue(H,"modelViewMatrix",le.modelViewMatrix),un.setValue(H,"normalMatrix",le.normalMatrix),un.setValue(H,"modelMatrix",le.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Pn=W.uniformsGroups;for(let Rf=0,bb=Pn.length;Rf<bb;Rf++)if(Q.isWebGL2){const tm=Pn[Rf];se.update(tm,sr),se.bind(tm,sr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return sr}function xb(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function yb(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(R,q,ne){Te.get(R.texture).__webglTexture=q,Te.get(R.depthTexture).__webglTexture=ne;const W=Te.get(R);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=ne===void 0,W.__autoAllocateDepthBuffer||B.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,q){const ne=Te.get(R);ne.__webglFramebuffer=q,ne.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,ne=0){v=R,_=q,x=ne;let W=!0,le=null,Oe=!1,ze=!1;if(R){const Xe=Te.get(R);Xe.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(36160,null),W=!1):Xe.__webglFramebuffer===void 0?C.setupRenderTarget(R):Xe.__hasExternalTextures&&C.rebindTextures(R,Te.get(R.texture).__webglTexture,Te.get(R.depthTexture).__webglTexture);const nt=R.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(ze=!0);const Ye=Te.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(le=Ye[q],Oe=!0):Q.isWebGL2&&R.samples>0&&C.useMultisampledRTT(R)===!1?le=Te.get(R).__webglMultisampledFramebuffer:le=Ye,E.copy(R.viewport),A.copy(R.scissor),b=R.scissorTest}else E.copy(D).multiplyScalar(I).floor(),A.copy(O).multiplyScalar(I).floor(),b=Y;if(Z.bindFramebuffer(36160,le)&&Q.drawBuffers&&W&&Z.drawBuffers(R,le),Z.viewport(E),Z.scissor(A),Z.setScissorTest(b),Oe){const Xe=Te.get(R.texture);H.framebufferTexture2D(36160,36064,34069+q,Xe.__webglTexture,ne)}else if(ze){const Xe=Te.get(R.texture),nt=q||0;H.framebufferTextureLayer(36160,36064,Xe.__webglTexture,ne||0,nt)}y=-1},this.readRenderTargetPixels=function(R,q,ne,W,le,Oe,ze){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Te.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ze!==void 0&&(je=je[ze]),je){Z.bindFramebuffer(36160,je);try{const Xe=R.texture,nt=Xe.format,Ye=Xe.type;if(nt!==Kn&&xe.convert(nt)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=Ye===rs&&(B.has("EXT_color_buffer_half_float")||Q.isWebGL2&&B.has("EXT_color_buffer_float"));if(Ye!==Fr&&xe.convert(Ye)!==H.getParameter(35738)&&!(Ye===hi&&(Q.isWebGL2||B.has("OES_texture_float")||B.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-W&&ne>=0&&ne<=R.height-le&&H.readPixels(q,ne,W,le,xe.convert(nt),xe.convert(Ye),Oe)}finally{const Xe=v!==null?Te.get(v).__webglFramebuffer:null;Z.bindFramebuffer(36160,Xe)}}},this.copyFramebufferToTexture=function(R,q,ne=0){const W=Math.pow(2,-ne),le=Math.floor(q.image.width*W),Oe=Math.floor(q.image.height*W);C.setTexture2D(q,0),H.copyTexSubImage2D(3553,ne,0,0,R.x,R.y,le,Oe),Z.unbindTexture()},this.copyTextureToTexture=function(R,q,ne,W=0){const le=q.image.width,Oe=q.image.height,ze=xe.convert(ne.format),je=xe.convert(ne.type);C.setTexture2D(ne,0),H.pixelStorei(37440,ne.flipY),H.pixelStorei(37441,ne.premultiplyAlpha),H.pixelStorei(3317,ne.unpackAlignment),q.isDataTexture?H.texSubImage2D(3553,W,R.x,R.y,le,Oe,ze,je,q.image.data):q.isCompressedTexture?H.compressedTexSubImage2D(3553,W,R.x,R.y,q.mipmaps[0].width,q.mipmaps[0].height,ze,q.mipmaps[0].data):H.texSubImage2D(3553,W,R.x,R.y,ze,je,q.image),W===0&&ne.generateMipmaps&&H.generateMipmap(3553),Z.unbindTexture()},this.copyTextureToTexture3D=function(R,q,ne,W,le=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Oe=R.max.x-R.min.x+1,ze=R.max.y-R.min.y+1,je=R.max.z-R.min.z+1,Xe=xe.convert(W.format),nt=xe.convert(W.type);let Ye;if(W.isData3DTexture)C.setTexture3D(W,0),Ye=32879;else if(W.isDataArrayTexture)C.setTexture2DArray(W,0),Ye=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,W.flipY),H.pixelStorei(37441,W.premultiplyAlpha),H.pixelStorei(3317,W.unpackAlignment);const Ke=H.getParameter(3314),At=H.getParameter(32878),Ln=H.getParameter(3316),Gi=H.getParameter(3315),ir=H.getParameter(32877),Ct=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;H.pixelStorei(3314,Ct.width),H.pixelStorei(32878,Ct.height),H.pixelStorei(3316,R.min.x),H.pixelStorei(3315,R.min.y),H.pixelStorei(32877,R.min.z),ne.isDataTexture||ne.isData3DTexture?H.texSubImage3D(Ye,le,q.x,q.y,q.z,Oe,ze,je,Xe,nt,Ct.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ye,le,q.x,q.y,q.z,Oe,ze,je,Xe,Ct.data)):H.texSubImage3D(Ye,le,q.x,q.y,q.z,Oe,ze,je,Xe,nt,Ct),H.pixelStorei(3314,Ke),H.pixelStorei(32878,At),H.pixelStorei(3316,Ln),H.pixelStorei(3315,Gi),H.pixelStorei(32877,ir),le===0&&W.generateMipmaps&&H.generateMipmap(Ye),Z.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?C.setTextureCube(R,0):R.isData3DTexture?C.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?C.setTexture2DArray(R,0):C.setTexture2D(R,0),Z.unbindTexture()},this.resetState=function(){_=0,x=0,v=null,Z.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Mp.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(i){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!i}}});class BR extends Mp{}BR.prototype.isWebGL1Renderer=!0;class hx extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class dx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zh,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hn=new z;class Ro{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=os(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=os(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=os(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=os(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new vn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ro(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const r0=new z,o0=new ct,a0=new ct,VR=new z,l0=new We;class GR extends on{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new We,this.bindMatrixInverse=new We}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,s=this.geometry;o0.fromBufferAttribute(s.attributes.skinIndex,e),a0.fromBufferAttribute(s.attributes.skinWeight,e),r0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=a0.getComponent(r);if(o!==0){const a=o0.getComponent(r);l0.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(VR.copy(r0).applyMatrix4(l0),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class px extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class mx extends Zt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Wt,u=Wt,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const c0=new We,HR=new We;class Sp{constructor(e=[],t=[]){this.uuid=gi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:HR;c0.multiplyMatrices(a,t[r]),c0.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Sp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Yv(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new mx(t,e,e,Kn,hi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new px),this.bones.push(o),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class u0 extends vn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const f0=new We,h0=new We,Mc=[],WR=new We,Oa=new on;class jR extends on{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new u0(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let s=0;s<n;s++)this.setMatrixAt(s,WR)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Oa.geometry=this.geometry,Oa.material=this.material,Oa.material!==void 0)for(let r=0;r<s;r++){this.getMatrixAt(r,f0),h0.multiplyMatrices(n,f0),Oa.matrixWorld=h0,Oa.raycast(e,Mc);for(let o=0,a=Mc.length;o<a;o++){const l=Mc[o];l.instanceId=r,l.object=this,t.push(l)}Mc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new u0(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class gx extends _i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const d0=new z,p0=new z,m0=new We,gh=new pf,Sc=new _a;class wp extends dt{constructor(e=new ni,t=new gx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)d0.fromBufferAttribute(t,s-1),p0.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=d0.distanceTo(p0);e.setAttribute("lineDistance",new vi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sc.copy(n.boundingSphere),Sc.applyMatrix4(s),Sc.radius+=r,e.ray.intersectsSphere(Sc)===!1)return;m0.copy(s).invert(),gh.copy(e.ray).applyMatrix4(m0);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new z,u=new z,f=new z,h=new z,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=_,y=x-1;v<y;v+=p){const M=g.getX(v),E=g.getX(v+1);if(c.fromBufferAttribute(m,M),u.fromBufferAttribute(m,E),gh.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(h);b<e.near||b>e.far||t.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let v=_,y=x-1;v<y;v+=p){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),gh.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(h);E<e.near||E>e.far||t.push({distance:E,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const g0=new z,_0=new z;class XR extends wp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)g0.fromBufferAttribute(t,s),_0.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+g0.distanceTo(_0);e.setAttribute("lineDistance",new vi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qR extends wp{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _x extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const v0=new We,nd=new pf,wc=new _a,Tc=new z;class $R extends dt{constructor(e=new ni,t=new _x){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wc.copy(n.boundingSphere),wc.applyMatrix4(s),wc.radius+=r,e.ray.intersectsSphere(wc)===!1)return;v0.copy(s).invert(),nd.copy(e.ray).applyMatrix4(v0);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,d=p;g<d;g++){const m=c.getX(g);Tc.fromBufferAttribute(f,m),x0(Tc,m,l,s,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,d=p;g<d;g++)Tc.fromBufferAttribute(f,g),x0(Tc,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function x0(i,e,t,n,s,r,o){const a=nd.distanceSqToPoint(i);if(a<t){const l=new z;nd.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Qs extends zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Tp extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_p,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vr extends Tp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return en(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class YR extends _i{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ne(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_p,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ys(i,e,t){return vx(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function Ec(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function vx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function KR(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function y0(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function xx(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class ql{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ZR extends ql{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ho,endingEnd:ho}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case po:r=e,a=2*t-n;break;case ou:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case po:o=e,l=2*n-t;break;case ou:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),d=g*g,m=d*g,_=-h*m+2*h*d-h*g,x=(1+h)*m+(-1.5-2*h)*d+(-.5+h)*g+1,v=(-1-p)*m+(1.5+p)*d+.5*g,y=p*m-p*d;for(let M=0;M!==a;++M)r[M]=_*o[u+M]+x*o[c+M]+v*o[l+M]+y*o[f+M];return r}}class yx extends ql{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}}class JR extends ql{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Vi{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ec(t,this.TimeBufferType),this.values=Ec(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ec(e.times,Array),values:Ec(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new JR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ZR(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _l:t=this.InterpolantFactoryMethodDiscrete;break;case ta:t=this.InterpolantFactoryMethodLinear;break;case jf:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _l;case this.InterpolantFactoryMethodLinear:return ta;case this.InterpolantFactoryMethodSmooth:return jf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=ys(n,r,o),this.values=ys(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&vx(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=ys(this.times),t=ys(this.values),n=this.getValueSize(),s=this.getInterpolation()===jf,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const f=a*n,h=f-n,p=f+n;for(let g=0;g!==n;++g){const d=t[f+g];if(d!==t[h+g]||d!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*n,h=o*n;for(let p=0;p!==n;++p)t[h+p]=t[f+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=ys(e,0,o),this.values=ys(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=ys(this.times,0),t=ys(this.values,0),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Vi.prototype.TimeBufferType=Float32Array;Vi.prototype.ValueBufferType=Float32Array;Vi.prototype.DefaultInterpolation=ta;class ba extends Vi{}ba.prototype.ValueTypeName="bool";ba.prototype.ValueBufferType=Array;ba.prototype.DefaultInterpolation=_l;ba.prototype.InterpolantFactoryMethodLinear=void 0;ba.prototype.InterpolantFactoryMethodSmooth=void 0;class bx extends Vi{}bx.prototype.ValueTypeName="color";class bl extends Vi{}bl.prototype.ValueTypeName="number";class QR extends ql{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)_n.slerpFlat(r,0,o,c-a,o,c,l);return r}}class kr extends Vi{InterpolantFactoryMethodLinear(e){return new QR(this.times,this.values,this.getValueSize(),e)}}kr.prototype.ValueTypeName="quaternion";kr.prototype.DefaultInterpolation=ta;kr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ma extends Vi{}Ma.prototype.ValueTypeName="string";Ma.prototype.ValueBufferType=Array;Ma.prototype.DefaultInterpolation=_l;Ma.prototype.InterpolantFactoryMethodLinear=void 0;Ma.prototype.InterpolantFactoryMethodSmooth=void 0;class Ml extends Vi{}Ml.prototype.ValueTypeName="vector";class id{constructor(e,t=-1,n,s=gp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=gi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(t3(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Vi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=KR(l);l=y0(l,1,u),c=y0(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new bl(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const f=u[1];let h=s[f];h||(s[f]=h=[]),h.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,p,g,d){if(p.length!==0){const m=[],_=[];xx(p,m,_,g),m.length!==0&&d.push(new f(h,m,_))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let d=0;d<h[g].morphTargets.length;d++)p[h[g].morphTargets[d]]=-1;for(const d in p){const m=[],_=[];for(let x=0;x!==h[g].morphTargets.length;++x){const v=h[g];m.push(v.time),_.push(v.morphTarget===d?1:0)}s.push(new bl(".morphTargetInfluence["+d+"]",m,_))}l=p.length*o}else{const p=".bones["+t[f].name+"]";n(Ml,p+".position",h,"pos",s),n(kr,p+".quaternion",h,"rot",s),n(Ml,p+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function e3(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bl;case"vector":case"vector2":case"vector3":case"vector4":return Ml;case"color":return bx;case"quaternion":return kr;case"bool":case"boolean":return ba;case"string":return Ma}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function t3(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=e3(i.type);if(i.times===void 0){const t=[],n=[];xx(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const us={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class n3{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const i3=new n3;class Gr{constructor(e){this.manager=e!==void 0?e:i3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Yi={};class s3 extends Error{constructor(e,t){super(e),this.response=t}}class Sa extends Gr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=us.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Yi[e]!==void 0){Yi[e].push({onLoad:t,onProgress:n,onError:s});return}Yi[e]=[],Yi[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Yi[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=h?parseInt(h):0,g=p!==0;let d=0;const m=new ReadableStream({start(_){x();function x(){f.read().then(({done:v,value:y})=>{if(v)_.close();else{d+=y.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:d,total:p});for(let E=0,A=u.length;E<A;E++){const b=u[E];b.onProgress&&b.onProgress(M)}_.enqueue(y),x()}})}}});return new Response(m)}else throw new s3(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{us.add(e,c);const u=Yi[e];delete Yi[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Yi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Yi[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Mx extends Gr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=us.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=yl("img");function l(){u(),us.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class r3 extends Gr{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new mx,a=new Sa(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){const c=r.parse(l);c&&(c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Sn,o.wrapT=c.wrapT!==void 0?c.wrapT:Sn,o.magFilter=c.magFilter!==void 0?c.magFilter:Nt,o.minFilter=c.minFilter!==void 0?c.minFilter:Nt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Ys),c.mipmapCount===1&&(o.minFilter=Nt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c))},n,s),o}}class Ep extends Gr{constructor(e){super(e)}load(e,t,n,s){const r=new Zt,o=new Mx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class vf extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const _h=new We,b0=new z,M0=new z;class Ap{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mf,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;b0.setFromMatrixPosition(e.matrixWorld),t.position.copy(b0),M0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(M0),t.updateMatrixWorld(),_h.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_h),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_h)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class o3 extends Ap{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=xl*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class a3 extends vf{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new o3}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const S0=new We,Ua=new z,vh=new z;class l3 extends Ap{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ua.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ua),vh.copy(n.position),vh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vh),n.updateMatrixWorld(),s.makeTranslation(-Ua.x,-Ua.y,-Ua.z),S0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(S0)}}class c3 extends vf{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new l3}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class u3 extends Ap{constructor(){super(new Xl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class f3 extends vf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new u3}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class h3 extends vf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class sd{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class d3 extends ni{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class p3 extends Gr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=us.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){us.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class m3{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){_n.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const o=this._workIndex*r;_n.multiplyQuaternionsFlat(e,o,e,t,e,n),_n.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*s}}}const Cp="\\[\\]\\.:\\/",g3=new RegExp("["+Cp+"]","g"),Rp="[^"+Cp+"]",_3="[^"+Cp.replace("\\.","")+"]",v3=/((?:WC+[\/:])*)/.source.replace("WC",Rp),x3=/(WCOD+)?/.source.replace("WCOD",_3),y3=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rp),b3=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rp),M3=new RegExp("^"+v3+x3+y3+b3+"$"),S3=["material","materials","bones","map"];class w3{constructor(e,t,n){const s=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(g3,"")}static parseTrackName(e){const t=M3.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);S3.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=w3;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class T3{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:ho,endingEnd:ho};for(let c=0;c!==o;++c){const u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=mT,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case _T:for(let u=0,f=l.length;u!==f;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case gp:default:for(let u=0,f=l.length;u!==f;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const o=n===gT;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===pT){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=po,s.endingEnd=po):(e?s.endingStart=this.zeroSlopeAtStart?po:ho:s.endingStart=ou,t?s.endingEnd=this.zeroSlopeAtEnd?po:ho:s.endingEnd=ou)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const E3=new Float32Array(1);class A3 extends Br{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let f=0;f!==r;++f){const h=s[f],p=h.name;let g=u[p];if(g!==void 0)++g.referenceCount,o[f]=g;else{if(g=o[f],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const d=t&&t._propertyBindings[f].binding.parsedPath;g=new m3(st.create(n,p,d),h.ValueTypeName,h.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),o[f]=g}a[f].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const f=a.actionByRoot,h=(e._localRoot||this._root).uuid;delete f[h],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new yx(new Float32Array(2),new Float32Array(2),1,E3),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?id.findByName(s,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=gp),l!==void 0){const f=l.actionByRoot[r];if(f!==void 0&&f.blendMode===n)return f;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new T3(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?id.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,f=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=u,t[u]=f,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class C3 extends dx{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class R3{constructor(e,t,n=0,s=1/0){this.ray=new pf(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new xp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return rd(e,this,n,t),n.sort(w0),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)rd(e[s],this,n,t);return n.sort(w0),n}}function w0(i,e){return i.distance-e.distance}function rd(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)rd(s[r],e,t,!0)}}const is=L3();function L3(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function P3(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=en(i,-65504,65504),is.floatView[0]=i;const e=is.uint32View[0],t=e>>23&511;return is.baseTable[t]+((e&8388607)>>is.shiftTable[t])}function I3(i){const e=i>>10;return is.uint32View[0]=is.mantissaTable[is.offsetTable[e]+(i&1023)]+is.exponentTable[e],is.floatView[0]}const Ac={toHalfFloat:P3,fromHalfFloat:I3};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mp);const D3=Math.PI/180;function Cc(i,e,t){return Math.max(e,Math.min(t,i))}function N3(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function O3(i,e,t){return(1-t)*i+t*e}function Fa(i,e,t,n){return O3(i,e,1-Math.exp(-t*n))}function U3(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function xh(i,e){return i+Math.random()*(e-i)}function F3(i){return i*D3}const k3=!1;new URLSearchParams(window.location.search);const z3=k3,ro=[10,30,50],B3=[16490601,13355979,16761600],Sl={size:zv.data.length},ft={defaultPosition:[Sl.size*.5,4,Sl.size*.5],minZoom:50,maxZoom:5,baseFov:45,dragEase:5,zoomEase:5,playerPosEase:20,maxTiltAngle:F3(65),zoomOffsetY:8,near:1,far:100},oo={tablet:768,desktop:1025,large:1441},V3={body:{aoMapIntensity:.7},gold:{roughness:.185,metalness:.446,color:new Ne(16642985),envMapIntensity:.165},face:{roughness:.1,metalness:0,envMapIntensity:.17,aoMapIntensity:.7}},xf=bw("game",{state:()=>({playersCounter:0,scoreboard:[],medals:[],playerCountry:"BZH"}),actions:{updatePlayersCounter(i){this.playersCounter=i},initScoreboard(i){for(const[,e]of i)this.addNewTeamToScoreboard(e);this.filterScoreboard(),console.log("Init store score"),Ue.emit(qe.SCOREBOARD_UPDATE)},addNewTeamToScoreboard(i){const e=i.medals[0]*ro[0]+i.medals[1]*ro[1]+i.medals[2]*ro[2];this.scoreboard.push({name:i.iso,score:e}),console.log("Add new team store score"),Ue.emit(qe.SCOREBOARD_UPDATE)},updateScoreTeam(i){const e=i.medals[0]*ro[0]+i.medals[1]*ro[1]+i.medals[2]*ro[2];this.scoreboard[this.scoreboard.findIndex(t=>t.name===i.iso)].score=e,this.filterScoreboard(),console.log("Update store score"),Ue.emit(qe.SCOREBOARD_UPDATE)},filterScoreboard(){this.scoreboard=this.scoreboard.sort((i,e)=>e.score-i.score)},addMedals(i){Object.values(i).forEach(e=>this.medals.push(e))},removeMedal(i){this.medals.slice(this.medals.indexOf(i),1)},closestMedal(){const i=Me.webgl.players.get(Me.game.teams.get(this.playerCountry));return[...Me.webgl.medals.values()].sort((e,t)=>e.position.distanceTo(i.position)-t.position.distanceTo(i.position)).filter(e=>!e.isInScreen)[0]},setPlayerCountry(i){this.playerCountry=i}},getters:{}});const wa=i=>(Q_("data-v-402d1b85"),i=i(),ev(),i),G3={class:"Login-container"},H3={class:"Pays-container"},W3=wa(()=>Ut("span",null,[Ut("img",{src:pw,alt:""})],-1)),j3=wa(()=>Ut("p",null,"BZH",-1)),X3=[W3,j3],q3=wa(()=>Ut("span",null,"🇬🇷",-1)),$3=wa(()=>Ut("p",null,"GRC",-1)),Y3=[q3,$3],K3=wa(()=>Ut("span",null,"🇵🇹",-1)),Z3=wa(()=>Ut("p",null,"PRT",-1)),J3=[K3,Z3],Q3={__name:"LoginView",setup(i){const e=xf(),t=ci("BZH");let n;Me.webgl.renderLogin=!0,ip(()=>{n=document.querySelectorAll(".Pays-item")});const s=o=>{t.value=o,Ue.emit(qe.SELECT_TEAM_UPDATE,o),n.forEach(a=>{a.id===o?a.classList.add("select"):a.classList.remove("select")})},r=()=>{console.log("Login Country : "+t.value),e.setPlayerCountry(t.value),pp.set(up.USER_ISO,t.value),Me.server.userJoin({iso:t.value}),Me.webgl.renderLogin=!1,yf.push("/game")};return(o,a)=>(Ui(),ma("div",G3,[Pt(Nv),Ut("div",H3,[Ut("div",{id:"BZH",class:"Pays-item select",onClick:a[0]||(a[0]=l=>s("BZH"))},X3),Ut("div",{id:"GRC",class:"Pays-item",onClick:a[1]||(a[1]=l=>s("GRC"))},Y3),Ut("div",{id:"PRT",class:"Pays-item",onClick:a[2]||(a[2]=l=>s("PRT"))},J3)]),Pt(Iv,{class:"confirm-btn",onClick:a[3]||(a[3]=l=>r())},{default:np(()=>[cf("Confirmer le pays")]),_:1})]))}},eL=dp(Q3,[["__scopeId","data-v-402d1b85"]]),yf=KS({history:dS("/"),routes:[{path:"/",name:"home",component:dw},{path:"/login",name:"login",component:eL},{path:"/game",name:"game",component:()=>iw(()=>import("./GameView-bbb2b4d8.js"),["assets/GameView-bbb2b4d8.js","assets/GameView-2c298226.css"]),beforeEnter:()=>{}}]});yf.afterEach((i,e)=>{Ue.emit(qe.ROUTE_CHANGE,i.name)});const uo={images:{},textures:{groundData:{path:"/assets/textures/ground.png"},seamless1:{path:"/assets/textures/seamless2.png"},seamless2:{path:"/assets/textures/seamless7.png"},seamless3:{path:"/assets/textures/seamless6.png"},seamless4:{path:"/assets/textures/seamless4.png"},playerAo:{path:"/assets/textures/player-ao.jpg"},noise:{path:"/assets/textures/noiseFbm1.png"},skybox:{path:"/assets/textures/skybox.png"}},envMaps:{envmap:{path:"/assets/textures/forest.hdr"}},models:{terrain:{path:"/assets/models/terrain.glb"},player:{path:"/assets/models/character.glb"},medals:{path:"/assets/models/medals.glb"}},jsons:{},sounds:{mario:{path:"/assets/sounds/mario.mp3"},mario2:{path:"/assets/sounds/mario.mp3"}}};class tL{constructor(e,t){this.ctx=e,this.buffer=t,this.amp=this.ctx.createGain(),this.amp.connect(this.ctx.destination),this.loop=!1,this._muted=!1,this._volume=1,this.source=null,this._playing=!1,this.timer=null}get playing(){return this._playing}get muted(){return this._muted}set muted(e){this._muted=e,this.amp.gain.value=this._muted?0:this._volume}get volume(){return this._volume}set volume(e){this._volume=e,this._muted||(this.amp.gain.value=this._volume)}play(){this._playing||(this.source=this.ctx.createBufferSource(),this.source.buffer=this.buffer,this.source.loop=this.loop,this.source.connect(this.amp),this.loopEnd=this.buffer.duration,this.source.start(0),this.timer=setTimeout(()=>{this.loop||this.pause()},this.buffer.duration*1e3),this._playing=!0)}pause(){var e;this.source&&(this._playing=!1,clearTimeout(this.timer),(e=this.source)==null||e.disconnect(),this.source=null,this._isFadingOut=!1)}}var _u;class nL{constructor(){In(this,"initAudio",()=>{this.audioCtx=new AudioContext,this.keys=Object.keys(uo.sounds),this.sounds=Me.core.assetsManager.get(...this.keys),this.audios=Object.fromEntries(this.keys.map((e,t)=>[e,new tL(this.audioCtx,this.sounds[t])])),Ue.off(qe.POINTER_DOWN,this.initAudio),this.isInit=!0});ve(this,_u,()=>{var e;(e=Me.debug)==null||e.mapping.add(this,"Sound",1)});Ue.on(qe.POINTER_DOWN,this.initAudio),Ue.on(qe.ATTACH,G(this,_u)),this.isInit=!1}play(e){this.audios[e].play()}pause(e){this.audios[e].pause()}}_u=new WeakMap;function T0(i,e){if(e===vT)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Kh||e===qv){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Kh)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class iL extends Gr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new lL(t)}),this.register(function(t){return new mL(t)}),this.register(function(t){return new gL(t)}),this.register(function(t){return new _L(t)}),this.register(function(t){return new uL(t)}),this.register(function(t){return new fL(t)}),this.register(function(t){return new hL(t)}),this.register(function(t){return new dL(t)}),this.register(function(t){return new aL(t)}),this.register(function(t){return new pL(t)}),this.register(function(t){return new cL(t)}),this.register(function(t){return new rL(t)}),this.register(function(t){return new vL(t)}),this.register(function(t){return new xL(t)})}load(e,t,n,s){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=sd.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Sa(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Sx){try{o[Je.KHR_BINARY_GLTF]=new yL(e)}catch(f){s&&s(f);return}r=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new DL(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const f=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(f){case Je.KHR_MATERIALS_UNLIT:o[f]=new oL;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[f]=new bL(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[f]=new ML;break;case Je.KHR_MESH_QUANTIZATION:o[f]=new SL;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function sL(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class rL{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ne(16777215);l.color!==void 0&&u.fromArray(l.color);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new f3(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new c3(u),c.distance=f;break;case"spot":c=new a3(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Es(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class oL{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return Mr}extendParams(e,t,n){const s=[];e.color=new Ne(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,it))}return Promise.all(s)}}class aL{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class lL{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vr}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(a,a)}return Promise.all(r)}}class cL{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vr}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class uL{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vr}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,it)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class fL{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vr}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class hL{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vr}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ne(a[0],a[1],a[2]),Promise.all(r)}}class dL{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vr}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class pL{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vr}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ne(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,it)),Promise.all(r)}}class mL{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class gL{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class _L{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class vL{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,f=s.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(p),u,f,h,s.mode,s.filter),p})})}else return null}}class xL{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==qn.TRIANGLES&&c.mode!==qn.TRIANGLE_STRIP&&c.mode!==qn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,p=[];for(const g of f){const d=new We,m=new z,_=new _n,x=new z(1,1,1),v=new jR(g.geometry,g.material,h);for(let y=0;y<h;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,y),l.SCALE&&x.fromBufferAttribute(l.SCALE,y),v.setMatrixAt(y,d.compose(m,_,x));for(const y in l)y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);dt.prototype.copy.call(v,g),v.frustumCulled=!1,this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Sx="glTF",ka=12,E0={JSON:1313821514,BIN:5130562};class yL{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ka),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Sx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ka,r=new DataView(e,ka);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===E0.JSON){const c=new Uint8Array(e,ka+o,a);this.content=n.decode(c)}else if(l===E0.BIN){const c=ka+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class bL{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=od[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=od[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],p=Lo[h.componentType];c[f]=p.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f){s.decodeDracoFile(u,function(h){for(const p in h.attributes){const g=h.attributes[p],d=l[p];d!==void 0&&(g.normalized=d)}f(h)},a,c)})})}}class ML{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class SL{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class wx extends ql{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,f=(n-t)/u,h=f*f,p=h*f,g=e*c,d=g-c,m=-2*p+3*h,_=p-h,x=1-m,v=_-h+f;for(let y=0;y!==a;y++){const M=o[d+y+a],E=o[d+y+l]*u,A=o[g+y+a],b=o[g+y]*u;r[y]=x*M+v*E+m*A+_*b}return r}}const wL=new _n;class TL extends wx{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return wL.fromArray(r).normalize().toArray(r),r}}const qn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Lo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},A0={9728:Wt,9729:Nt,9984:Yh,9985:jv,9986:Bc,9987:Ys},C0={33071:Sn,33648:ru,10497:fi},yh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},od={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},EL={CUBICSPLINE:void 0,LINEAR:ta,STEP:_l},bh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function AL(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Tp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:cs})),i.DefaultMaterial}function za(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Es(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function CL(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;o.push(h)}if(s){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(h)}if(r){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=f),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function RL(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function LL(i){const e=i.extensions&&i.extensions[Je.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+R0(e.attributes):t=i.indices+":"+R0(i.attributes)+":"+i.mode,t}function R0(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ad(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function PL(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const IL=new We;class DL{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new sL,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new Ep(this.options.manager):this.textureLoader=new p3(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Sa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};za(r,a,s),Es(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(sd.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=yh[s.type],a=Lo[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new vn(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=yh[s.type],c=Lo[s.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let d,m;if(p&&p!==f){const _=Math.floor(h/p),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+_+":"+s.count;let v=t.cache.get(x);v||(d=new c(a,_*p,s.count*p/u),v=new dx(d,p/u),t.cache.add(x,v)),m=new Ro(v,l,h%p/u,g)}else a===null?d=new c(s.count*l):d=new c(a,h,s.count*l),m=new vn(d,l,g);if(s.sparse!==void 0){const _=yh.SCALAR,x=Lo[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,M=new x(o[1],v,s.sparse.count*_),E=new c(o[2],y,s.sparse.count*l);a!==null&&(m=new vn(m.array.slice(),m.itemSize,m.normalized));for(let A=0,b=M.length;A<b;A++){const T=M[A];if(m.setX(T,E[A*l]),l>=2&&m.setY(T,E[A*l+1]),l>=3&&m.setZ(T,E[A*l+2]),l>=4&&m.setW(T,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"";const h=(r.samplers||{})[o.sampler]||{};return u.magFilter=A0[h.magFilter]||Nt,u.minFilter=A0[h.minFilter]||Ys,u.wrapS=C0[h.wrapS]||fi,u.wrapT=C0[h.wrapT]||fi,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(d){const m=new Zt(d);m.needsUpdate=!0,h(m)}),t.load(sd.resolveURL(f,r.path),g,void 0,p)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),f.userData.mimeType=o.mimeType||PL(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.encoding=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new _x,_i.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new gx,_i.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Tp}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){const f=s[Je.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{const f=r.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.fromArray(h),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,it)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ss);const u=r.alphaMode||bh.OPAQUE;if(u===bh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===bh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Mr&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Be(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;a.normalScale.set(f,f)}return r.occlusionTexture!==void 0&&o!==Mr&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Mr&&(a.emissive=new Ne().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==Mr&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,it)),Promise.all(c).then(function(){const f=new o(a);return r.name&&(f.name=r.name),Es(f,r),t.associations.set(f,{materials:e}),r.extensions&&za(s,f,r),f})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");let n=t;for(let s=1;this.nodeNamesUsed[n];++s)n=t+"_"+s;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return L0(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=LL(c),f=s[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=L0(new ni,c,t),s[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?AL(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let p=0,g=u.length;p<g;p++){const d=u[p],m=o[p];let _;const x=c[p];if(m.mode===qn.TRIANGLES||m.mode===qn.TRIANGLE_STRIP||m.mode===qn.TRIANGLE_FAN||m.mode===void 0)_=r.isSkinnedMesh===!0?new GR(d,x):new on(d,x),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),m.mode===qn.TRIANGLE_STRIP?_.geometry=T0(_.geometry,qv):m.mode===qn.TRIANGLE_FAN&&(_.geometry=T0(_.geometry,Kh));else if(m.mode===qn.LINES)_=new XR(d,x);else if(m.mode===qn.LINE_STRIP)_=new wp(d,x);else if(m.mode===qn.LINE_LOOP)_=new qR(d,x);else if(m.mode===qn.POINTS)_=new $R(d,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&RL(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),Es(_,r),m.extensions&&za(s,_,m),t.assignFinalMaterial(_),f.push(_)}for(let p=0,g=f.length;p<g;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return f[0];const h=new Us;t.associations.set(h,{meshes:e});for(let p=0,g=f.length;p<g;p++)h.add(f[p]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new tn(UT.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Xl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Es(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new We;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Sp(a,l)})}loadAnimation(e){const n=this.json.animations[e],s=[],r=[],o=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const f=n.channels[c],h=n.samplers[f.sampler],p=f.target,g=p.node,d=n.parameters!==void 0?n.parameters[h.input]:h.input,m=n.parameters!==void 0?n.parameters[h.output]:h.output;s.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",d)),o.push(this.getDependency("accessor",m)),a.push(h),l.push(p)}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2],p=c[3],g=c[4],d=[];for(let _=0,x=u.length;_<x;_++){const v=u[_],y=f[_],M=h[_],E=p[_],A=g[_];if(v===void 0)continue;v.updateMatrix();let b;switch(bs[A.path]){case bs.weights:b=bl;break;case bs.rotation:b=kr;break;case bs.position:case bs.scale:default:b=Ml;break}const T=v.name?v.name:v.uuid,P=E.interpolation!==void 0?EL[E.interpolation]:ta,I=[];bs[A.path]===bs.weights?v.traverse(function(N){N.morphTargetInfluences&&I.push(N.name?N.name:N.uuid)}):I.push(T);let $=M.array;if(M.normalized){const N=ad($.constructor),D=new Float32Array($.length);for(let O=0,Y=$.length;O<Y;O++)D[O]=$[O]*N;$=D}for(let N=0,D=I.length;N<D;N++){const O=new b(I[N]+"."+bs[A.path],y.array,$,P);E.interpolation==="CUBICSPLINE"&&(O.createInterpolant=function(j){const V=this instanceof kr?TL:wx;return new V(this.times,this.values,this.getValueSize()/3,j)},O.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),d.push(O)}}const m=n.name?n.name:"animation_"+e;return new id(m,void 0,d)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(h,IL)});for(let p=0,g=f.length;p<g;p++)u.add(f[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new px:c.length>1?u=new Us:c.length===1?u=c[0]:u=new dt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(r.name&&(u.userData.name=r.name,u.name=o),Es(u,r),r.extensions&&za(n,u,r),r.matrix!==void 0){const f=new We;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Us;n.name&&(r.name=s.createUniqueName(n.name)),Es(r,n),n.extensions&&za(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)r.add(l[u]);const c=u=>{const f=new Map;for(const[h,p]of s.associations)(h instanceof _i||h instanceof Zt)&&f.set(h,p);return u.traverse(h=>{const p=s.associations.get(h);p!=null&&f.set(h,p)}),f};return s.associations=c(r),r})}}function NL(i,e,t){const n=e.attributes,s=new ga;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new z(l[0],l[1],l[2]),new z(c[0],c[1],c[2])),a.normalized){const u=ad(Lo[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new z,l=new z;for(let c=0,u=r.length;c<u;c++){const f=r[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){const d=ad(Lo[h.componentType]);l.multiplyScalar(d)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new _a;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function L0(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=od[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Es(i,e),NL(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?CL(i,e.targets,t):i})}class OL extends r3{constructor(e){super(e),this.type=rs}parse(e){const a=function(v,y){switch(v){case 1:console.error("THREE.RGBELoader Read Error: "+(y||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(y||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(y||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(y||""))}return-1},f=`
`,h=function(v,y,M){y=y||1024;let A=v.pos,b=-1,T=0,P="",I=String.fromCharCode.apply(null,new Uint16Array(v.subarray(A,A+128)));for(;0>(b=I.indexOf(f))&&T<y&&A<v.byteLength;)P+=I,T+=I.length,A+=128,I+=String.fromCharCode.apply(null,new Uint16Array(v.subarray(A,A+128)));return-1<b?(M!==!1&&(v.pos+=T+b+1),P+I.slice(0,b)):!1},p=function(v){const y=/^#\?(\S+)/,M=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,E=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,A=/^\s*FORMAT=(\S+)\s*$/,b=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,T={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let P,I;if(v.pos>=v.byteLength||!(P=h(v)))return a(1,"no header found");if(!(I=P.match(y)))return a(3,"bad initial token");for(T.valid|=1,T.programtype=I[1],T.string+=P+`
`;P=h(v),P!==!1;){if(T.string+=P+`
`,P.charAt(0)==="#"){T.comments+=P+`
`;continue}if((I=P.match(M))&&(T.gamma=parseFloat(I[1])),(I=P.match(E))&&(T.exposure=parseFloat(I[1])),(I=P.match(A))&&(T.valid|=2,T.format=I[1]),(I=P.match(b))&&(T.valid|=4,T.height=parseInt(I[1],10),T.width=parseInt(I[2],10)),T.valid&2&&T.valid&4)break}return T.valid&2?T.valid&4?T:a(3,"missing image size specifier"):a(3,"missing format specifier")},g=function(v,y,M){const E=y;if(E<8||E>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);if(E!==(v[2]<<8|v[3]))return a(3,"wrong scanline width");const A=new Uint8Array(4*y*M);if(!A.length)return a(4,"unable to allocate buffer space");let b=0,T=0;const P=4*E,I=new Uint8Array(4),$=new Uint8Array(P);let N=M;for(;N>0&&T<v.byteLength;){if(T+4>v.byteLength)return a(1);if(I[0]=v[T++],I[1]=v[T++],I[2]=v[T++],I[3]=v[T++],I[0]!=2||I[1]!=2||(I[2]<<8|I[3])!=E)return a(3,"bad rgbe scanline format");let D=0,O;for(;D<P&&T<v.byteLength;){O=v[T++];const j=O>128;if(j&&(O-=128),O===0||D+O>P)return a(3,"bad scanline data");if(j){const V=v[T++];for(let re=0;re<O;re++)$[D++]=V}else $.set(v.subarray(T,T+O),D),D+=O,T+=O}const Y=E;for(let j=0;j<Y;j++){let V=0;A[b]=$[j+V],V+=E,A[b+1]=$[j+V],V+=E,A[b+2]=$[j+V],V+=E,A[b+3]=$[j+V],b+=4}N--}return A},d=function(v,y,M,E){const A=v[y+3],b=Math.pow(2,A-128)/255;M[E+0]=v[y+0]*b,M[E+1]=v[y+1]*b,M[E+2]=v[y+2]*b,M[E+3]=1},m=function(v,y,M,E){const A=v[y+3],b=Math.pow(2,A-128)/255;M[E+0]=Ac.toHalfFloat(Math.min(v[y+0]*b,65504)),M[E+1]=Ac.toHalfFloat(Math.min(v[y+1]*b,65504)),M[E+2]=Ac.toHalfFloat(Math.min(v[y+2]*b,65504)),M[E+3]=Ac.toHalfFloat(1)},_=new Uint8Array(e);_.pos=0;const x=p(_);if(x!==-1){const v=x.width,y=x.height,M=g(_.subarray(_.pos),v,y);if(M!==-1){let E,A,b;switch(this.type){case hi:b=M.length/4;const T=new Float32Array(b*4);for(let I=0;I<b;I++)d(M,I*4,T,I*4);E=T,A=hi;break;case rs:b=M.length/4;const P=new Uint16Array(b*4);for(let I=0;I<b;I++)m(M,I*4,P,I*4);E=P,A=rs;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:v,height:y,data:E,header:x.string,gamma:x.gamma,exposure:x.exposure,type:A}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(o,a){switch(o.type){case hi:case rs:o.encoding=Ks,o.minFilter=Nt,o.magFilter=Nt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,s)}}class Ba{constructor({manifest:e={},loader:t=null,isMobile:n=!1,assetsInfos:s=new Map,loadedAssets:r=new Map,progressCallback:o=()=>null,afterLoadCallback:a=l=>l}={}){this.manifest=e,this.loader=t,this.isMobile=n,this.assetsToLoad=new Map,this.assetsInfos=s,this.loadedAssets=r,this.progressCallback=o,this.afterLoadCallback=a,this.add(...Object.keys(e))}add(...e){for(const t of e)!this.assetsToLoad.has(t)&&this.manifest[t]&&this.assetsToLoad.set(t,this.manifest[t])}getAsset(e){return this.loadedAssets.get(e)}getAssets(...e){return Object.fromEntries(e?[...this.loadedAssets.entries()].filter(([t])=>e.includes(t)):this.loadedAssets.entries())}async loadAsset(e){var t,n;if(this.loadedAssets.has(e))return this.loadedAssets.get(e);try{const s=this.isMobile&&this.manifest[e].pathMobile?this.manifest[e].pathMobile:this.manifest[e].path,r=this.afterLoadCallback(await this.loader.loadAsync(s,o=>this.assetProgress(o,e)));return this.loadedAssets.set(e,(t=r==null?void 0:r.scene)!=null&&t.isObject3D?r.scene:r),(n=this.manifest[e].callbacks)==null||n.forEach(o=>o(this.loadedAssets.get(e))),r}catch{return}}loadAssets(){return Promise.all([...this.assetsToLoad.keys()].map(e=>this.loadAsset(e)))}loadCriticalAssets(){return Promise.all([...this.assetsToLoad.keys()].map(e=>this.manifest[e].critical&&this.loadAsset(e)))}assetProgress(e,t){var s;this.assetsInfos.has(t)||this.assetsInfos.set(t,{size:e.total,progress:0});const n=this.assetsInfos.get(t);n.progress=e.loaded/n.size,(s=this.progressCallback)==null||s.call(this)}}var Pl;class UL extends Sa{constructor(t){super(t);ve(this,Pl,void 0);mt(this,Pl,new Mx),this.setResponseType("blob")}load(t,n,s,r){const o=a=>{const l=URL.createObjectURL(a),c=document.createElement("img");c.onload=()=>{us.add(t,c),URL.revokeObjectURL(l),document.body.removeChild(c),G(this,Pl).load(t,n,()=>{},r)},c.src=l,c.style.visibility="hidden",document.body.appendChild(c)};super.load(t,o,s,r)}}Pl=new WeakMap;var Il;class FL extends Gr{constructor(t){super(t);ve(this,Il,void 0);mt(this,Il,new Sa)}load(t,n,s,r){G(this,Il).load(t,o=>{try{n(JSON.parse(o))}catch(a){r!==void 0&&r(a);return}},s,r)}}Il=new WeakMap;var Dl,Od;class kL extends Sa{constructor(t){super(t);ve(this,Dl,void 0);ve(this,Od,void 0);mt(this,Dl,new Ep),this.setResponseType("blob")}load(t,n,s,r){const o=a=>{const l=URL.createObjectURL(a),c=document.createElement("img");c.onload=()=>{us.add(t,c),URL.revokeObjectURL(l),document.body.removeChild(c),G(this,Dl).load(t,n,()=>{},r)},c.src=l,c.style.visibility="hidden",document.body.appendChild(c)};super.load(t,o,s,r)}}Dl=new WeakMap,Od=new WeakMap;us.enabled=!0;var Ai,Ci,Nl,Ol,ld,vu,Tx,xu,Ex,Cs;class zL{constructor({blockingLoad:e=!0,withPriority:t=!1,withCriticals:n=!1,isMobile:s=!1}={}){ve(this,Ol);ve(this,vu);ve(this,xu);ve(this,Ai,new Map);ve(this,Ci,new Map);ve(this,Nl,0);ve(this,Cs,()=>{mt(this,Nl,[...G(this,Ai).values()].map(e=>e.progress).reduce((e,t)=>e+t,0)/G(this,Ai).size),Ue.emit(qe.LOADER_PROGRESS,G(this,Nl))});this.blockingLoad=e,this.withPriority=t,this.withCriticals=n,this.isMobile=s;const r=new iL;this.loaders={images:new Ba({manifest:uo.images,isMobile:this.isMobile,loader:new UL,assetsInfos:G(this,Ai),loadedAssets:G(this,Ci),progressCallback:G(this,Cs)}),textures:new Ba({manifest:uo.textures,isMobile:this.isMobile,loader:new kL,assetsInfos:G(this,Ai),loadedAssets:G(this,Ci),progressCallback:G(this,Cs)}),envMaps:new Ba({manifest:uo.envMaps,isMobile:this.isMobile,loader:new OL,assetsInfos:G(this,Ai),loadedAssets:G(this,Ci),progressCallback:G(this,Cs)}),models:new Ba({manifest:uo.models,isMobile:this.isMobile,loader:r,assetsInfos:G(this,Ai),loadedAssets:G(this,Ci),progressCallback:G(this,Cs),afterLoadCallback:o=>(o.scene.animations=o.animations,o.scene)}),jsons:new Ba({manifest:uo.jsons,isMobile:this.isMobile,loader:new FL,assetsInfos:G(this,Ai),loadedAssets:G(this,Ci),progressCallback:G(this,Cs)})}}async load(){this.withCriticals&&await Ve(this,vu,Tx).call(this),this.blockingLoad?await Ve(this,Ol,ld).call(this):this.withPriority?Ve(this,xu,Ex).call(this):Ve(this,Ol,ld).call(this)}get(...e){return e.length>1?e.map(t=>G(this,Ci).get(t)):G(this,Ci).get(e[0])}}Ai=new WeakMap,Ci=new WeakMap,Nl=new WeakMap,Ol=new WeakSet,ld=function(){return Promise.all(Object.values(this.loaders).map(e=>e.loadAssets()))},vu=new WeakSet,Tx=function(){return Promise.all(Object.values(this.loaders).map(e=>e.loadCriticalAssets()))},xu=new WeakSet,Ex=function(){return Promise.all(Object.values(this.loaders).map(e=>[...e.assetsToLoad.entries()].map(([t,n])=>({loader:e,key:t,priority:n.priority||0}))).flat().sort((e,t)=>e.priority-t.priority).map(({loader:e,key:t})=>e.loadAsset(t)))},Cs=new WeakMap;var No,Ul;class BL{constructor(){ve(this,No,!1);In(this,"play",()=>{mt(this,No,!0),G(this,Ul).call(this)});In(this,"pause",()=>{mt(this,No,!1)});ve(this,Ul,()=>{if(!G(this,No))return;window.requestAnimationFrame(G(this,Ul));const e=Date.now();this.delta=e-this.current,this.elapsed+=this.delta,this.current=e,this.delta>60&&(this.delta=60),this.params.et=this.elapsed,this.params.dt=this.delta*.001,Ue.emit(qe.TICK,this.params),Ue.emit(qe.RENDER,this.params)});Ue.register(this),this.current=Date.now(),this.elapsed=0,this.delta=16,this.params={et:0,dt:0}}onAttach(){this.play()}}No=new WeakMap,Ul=new WeakMap;function VL(){const i=new zL,e=new BL;return{assetsManager:i,ticker:e}}let P0=class{constructor(e){this.position=new Be(e.position.x,e.position.y),this.type=e.type,this.typeStr=Object.keys(Qa)[e.type],this.id=e.id}};var Qi,Oo,Uo,Fo;class GL{constructor(){ve(this,Qi,new Map);ve(this,Oo,new Map);ve(this,Uo,new Map);ve(this,Fo,new Map)}set(e,t){switch(G(this,Qi).set(e,t),t.type){case Qa.bronze:G(this,Oo).set(e,t);break;case Qa.silver:G(this,Uo).set(e,t);break;case Qa.gold:G(this,Fo).set(e,t);break}}get(e){return G(this,Qi).get(e)}has(e){return G(this,Qi).has(e)}delete(e){G(this,Qi).delete(e),G(this,Oo).delete(e),G(this,Uo).delete(e),G(this,Fo).delete(e)}values(){return G(this,Qi).values()}get bronzeSize(){return G(this,Oo).size}get silverSize(){return G(this,Uo).size}get goldSize(){return G(this,Fo).size}get size(){return G(this,Qi).size}}Qi=new WeakMap,Oo=new WeakMap,Uo=new WeakMap,Fo=new WeakMap;class I0{constructor({iso:e,position:t,medals:n={0:0,1:0,2:0}}){this.iso=e,this.position=new Be(t.x,t.y),this.medals=n}move(e){switch(e){case ic.up:this.position.y-=1;break;case ic.right:this.position.x+=1;break;case ic.down:this.position.y+=1;break;case ic.left:this.position.x-=1;break}return this}collect(e){return this.medals[e.type]++,this}}class HL{constructor(){this.teams=new Map,this.medals=new GL,this.domGameStore=xf(),this.userId=null,this.currentTeam=null,this.voteId=null}setState(e){var t;this.userId=e.user_id,(t=e.medals)==null||t.forEach(n=>this.medals.set(n.id,new P0(n))),Object.entries(e.countries_states).forEach(([n,s])=>n!=="ALL"&&this.teams.set(n,new I0(s))),Ue.emit(qe.STATE_READY,{teams:this.teams,medals:this.medals}),this.domGameStore.initScoreboard(this.teams),this.domGameStore.addMedals([...this.medals.values()])}userJoin(e){this.voteId=e.vote_id,this.currentTeam=this.teams.get(e.iso),Ue.emit(qe.JOIN_READY,this.currentTeam),this.domGameStore.setPlayerCountry(this.currentTeam.iso)}createTeam(e){if(this.teams.has(e.iso))return console.error("Team already exists");const t=new I0(e);this.teams.set(e.iso,t),Ue.emit(qe.CREATE_TEAM,t),this.domGameStore.addNewTeamToScoreboard(t)}addMedals(e){const t=[];e.medals.forEach(n=>{if(this.medals.has(n.id))return console.error("Medal already exists");const s=new P0(n);this.medals.set(n.id,s),t.push(s)}),this.domGameStore.addMedals(t),Ue.emit(qe.SPAWN_MEDALS,t)}medalCollect(e){if(!this.teams.has(e.iso)||!this.medals.has(e.medal_id))return console.error("Medal or team doesn't exist");const t=this.teams.get(e.iso),n=this.medals.get(e.medal_id);t.collect(this.medals.get(e.medal_id)),this.medals.delete(e.medal_id),Ue.emit(qe.COLLECT_MEDAL,n,t),this.domGameStore.updateScoreTeam(t)}voteResults(e){if(!this.teams.has(e.iso))return console.error("Team doesn't exist");if(e.direction===4)return;const t=this.teams.get(e.iso).move(e.direction);Ue.emit(qe.VOTE_RESULTS,t)}userVote(e){Me.server.userVote(e)}}const WL={en:{head:{title:i=>{const{normalize:e}=i;return e(["Olympic Medal Rush"])},subtitle:i=>{const{normalize:e}=i;return e(["The Internet Olympics"])}},test:i=>{const{normalize:e}=i;return e(["hey"])},locale:i=>{const{normalize:e}=i;return e(["en"])},lang:i=>{const{normalize:e}=i;return e(["en"])}},es:{head:{title:i=>{const{normalize:e}=i;return e([])},subtitle:i=>{const{normalize:e}=i;return e([])}},test:i=>{const{normalize:e}=i;return e([])},locale:i=>{const{normalize:e}=i;return e(["es"])},lang:i=>{const{normalize:e}=i;return e(["es"])}},fr:{head:{title:i=>{const{normalize:e}=i;return e(["Olympic Medal Rush"])},subtitle:i=>{const{normalize:e}=i;return e(["L’épreuve olympique d’internet"])}},test:i=>{const{normalize:e}=i;return e(["coucou"])},locale:i=>{const{normalize:e}=i;return e(["fr"])},lang:i=>{const{normalize:e}=i;return e(["fr"])}}};var ko,yu,bu,Fl,cd,Mu,Ax,Su,Cx,wu,Rx,Tu,Lx,Eu,Px,Au,Ix,Cu,Dx,Ru,Nx,Lu,Ox;class jL{constructor(){ve(this,Fl);ve(this,Mu);ve(this,Su);ve(this,wu);ve(this,Tu);ve(this,Eu);ve(this,Au);ve(this,Cu);ve(this,Ru);ve(this,Lu);ve(this,ko,void 0);ve(this,yu,()=>{var e;(e=Me.debug)!=null&&e.urlParams.has("noServer")||(mt(this,ko,new WebSocket("wss://olympics-wss.fly.dev/ws")),G(this,ko).onmessage=G(this,bu),console.info("Websocket connected"))});ve(this,bu,e=>{const t=JSON.parse(e.data);Ve(this,Mu,Ax).call(this,Object.assign(new D0,t))});this.domGameStore=xf(),Ue.on(qe.APP_LOADED,G(this,yu))}userVote(e){console.log(e,"userVote"),Ve(this,Fl,cd).call(this,wi.USER_VOTE,e)}userJoin(e){console.log(e,"userJoin"),Ve(this,Fl,cd).call(this,wi.USER_JOIN,e)}}ko=new WeakMap,yu=new WeakMap,bu=new WeakMap,Fl=new WeakSet,cd=function(e,t){const n=new D0(e,t);G(this,ko).send(JSON.stringify(n))},Mu=new WeakSet,Ax=function(e){switch(e.type){case wi.GAME_STATE:Ve(this,Su,Cx).call(this,e.payload);break;case wi.COUNTRY_STATE:Ve(this,wu,Rx).call(this,e.payload);break;case wi.VOTE_RESULTS:Ve(this,Tu,Lx).call(this,e.payload);break;case wi.VOTE_COUNT:Ve(this,Eu,Px).call(this,e.payload);break;case wi.MEDAL_APPARITION:Ve(this,Au,Ix).call(this,e.payload);break;case wi.MEDAL_COLLECTION:Ve(this,Cu,Dx).call(this,e.payload);break;case wi.NEW_COUNTRY:Ve(this,Lu,Ox).call(this,e.payload);break;case wi.PLAYER_COUNT:Ve(this,Ru,Nx).call(this,e.payload);break}},Su=new WeakSet,Cx=function(e){console.log(e,"onGameState"),pp.set(up.USER_ID,e.user_id),Me.game.setState(e)},wu=new WeakSet,Rx=function(e){console.log(e,"onCountryState"),this.domGameStore.updatePlayersCounter(e.player_count),Me.game.userJoin(e)},Tu=new WeakSet,Lx=function(e){console.log(e,"onVoteResults"),Me.game.voteResults(e)},Eu=new WeakSet,Px=function(e){console.log(e,"onVoteCount")},Au=new WeakSet,Ix=function(e){console.log(e,"onMedalApparition"),Me.game.addMedals(e)},Cu=new WeakSet,Dx=function(e){console.log(e,"onMedalCollection"),Me.game.medalCollect(e)},Ru=new WeakSet,Nx=function(e){console.log(e,"onPlayerCount"),this.domGameStore.updatePlayersCounter(Object.values(e)[0])},Lu=new WeakSet,Ox=function(e){console.log(e,"onNewCountry"),Me.game.createTeam(e)};class D0{constructor(e,t){this.type=e,this.payload=t}}/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const ud=typeof window<"u",XL=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",er=i=>XL?Symbol(i):i,qL=(i,e,t)=>$L({l:i,k:e,s:t}),$L=i=>JSON.stringify(i).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),jt=i=>typeof i=="number"&&isFinite(i),YL=i=>Ip(i)==="[object Date]",au=i=>Ip(i)==="[object RegExp]",bf=i=>et(i)&&Object.keys(i).length===0;function KL(i,e){typeof console<"u"&&(console.warn("[intlify] "+i),e&&console.warn(e.stack))}const xn=Object.assign;let N0;const Lp=()=>N0||(N0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function O0(i){return i.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const ZL=Object.prototype.hasOwnProperty;function Pp(i,e){return ZL.call(i,e)}const It=Array.isArray,$t=i=>typeof i=="function",Re=i=>typeof i=="string",Et=i=>typeof i=="boolean",ht=i=>i!==null&&typeof i=="object",Ux=Object.prototype.toString,Ip=i=>Ux.call(i),et=i=>Ip(i)==="[object Object]",JL=i=>i==null?"":It(i)||et(i)&&i.toString===Ux?JSON.stringify(i,null,2):String(i);/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Fx={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,__EXTEND_POINT__:15};function kx(i,e,t={}){const{domain:n,messages:s,args:r}=t,o=i,a=new SyntaxError(String(o));return a.code=i,e&&(a.location=e),a.domain=n,a}/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const zx={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const tr=[];tr[0]={w:[0],i:[3,0],["["]:[4],o:[7]};tr[1]={w:[1],["."]:[2],["["]:[4],o:[7]};tr[2]={w:[2],i:[3,0],[0]:[3,0]};tr[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};tr[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};tr[5]={["'"]:[4,0],o:8,l:[5,0]};tr[6]={['"']:[4,0],o:8,l:[6,0]};const QL=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function eP(i){return QL.test(i)}function tP(i){const e=i.charCodeAt(0),t=i.charCodeAt(i.length-1);return e===t&&(e===34||e===39)?i.slice(1,-1):i}function nP(i){if(i==null)return"o";switch(i.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return i;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function iP(i){const e=i.trim();return i.charAt(0)==="0"&&isNaN(parseInt(i))?!1:eP(e)?tP(e):"*"+e}function sP(i){const e=[];let t=-1,n=0,s=0,r,o,a,l,c,u,f;const h=[];h[0]=()=>{o===void 0?o=a:o+=a},h[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},h[2]=()=>{h[0](),s++},h[3]=()=>{if(s>0)s--,n=4,h[0]();else{if(s=0,o===void 0||(o=iP(o),o===!1))return!1;h[1]()}};function p(){const g=i[t+1];if(n===5&&g==="'"||n===6&&g==='"')return t++,a="\\"+g,h[0](),!0}for(;n!==null;)if(t++,r=i[t],!(r==="\\"&&p())){if(l=nP(r),f=tr[n],c=f[l]||f.l||8,c===8||(n=c[0],c[1]!==void 0&&(u=h[c[1]],u&&(a=r,u()===!1))))return;if(n===7)return e}}const U0=new Map;function rP(i,e){return ht(i)?i[e]:null}function oP(i,e){if(!ht(i))return null;let t=U0.get(e);if(t||(t=sP(e),t&&U0.set(e,t)),!t)return null;const n=t.length;let s=i,r=0;for(;r<n;){const o=s[t[r]];if(o===void 0)return null;s=o,r++}return s}const aP=i=>i,lP=i=>"",cP="text",uP=i=>i.length===0?"":i.join(""),fP=JL;function F0(i,e){return i=Math.abs(i),e===2?i?i>1?1:0:1:i?Math.min(i,2):0}function hP(i){const e=jt(i.pluralIndex)?i.pluralIndex:-1;return i.named&&(jt(i.named.count)||jt(i.named.n))?jt(i.named.count)?i.named.count:jt(i.named.n)?i.named.n:e:e}function dP(i,e){e.count||(e.count=i),e.n||(e.n=i)}function pP(i={}){const e=i.locale,t=hP(i),n=ht(i.pluralRules)&&Re(e)&&$t(i.pluralRules[e])?i.pluralRules[e]:F0,s=ht(i.pluralRules)&&Re(e)&&$t(i.pluralRules[e])?F0:void 0,r=_=>_[n(t,_.length,s)],o=i.list||[],a=_=>o[_],l=i.named||{};jt(i.pluralIndex)&&dP(t,l);const c=_=>l[_];function u(_){const x=$t(i.messages)?i.messages(_):ht(i.messages)?i.messages[_]:!1;return x||(i.parent?i.parent.message(_):lP)}const f=_=>i.modifiers?i.modifiers[_]:aP,h=et(i.processor)&&$t(i.processor.normalize)?i.processor.normalize:uP,p=et(i.processor)&&$t(i.processor.interpolate)?i.processor.interpolate:fP,g=et(i.processor)&&Re(i.processor.type)?i.processor.type:cP,m={list:a,named:c,plural:r,linked:(_,...x)=>{const[v,y]=x;let M="text",E="";x.length===1?ht(v)?(E=v.modifier||E,M=v.type||M):Re(v)&&(E=v||E):x.length===2&&(Re(v)&&(E=v||E),Re(y)&&(M=y||M));let A=u(_)(m);return M==="vnode"&&It(A)&&E&&(A=A[0]),E?f(E)(A,M):A},message:u,type:g,interpolate:p,normalize:h};return m}let wl=null;function mP(i){wl=i}function gP(i,e,t){wl&&wl.emit(zx.I18nInit,{timestamp:Date.now(),i18n:i,version:e,meta:t})}const _P=vP(zx.FunctionTranslate);function vP(i){return e=>wl&&wl.emit(i,e)}function xP(i,e,t){return[...new Set([t,...It(e)?e:ht(e)?Object.keys(e):Re(e)?[e]:[t]])]}function Bx(i,e,t){const n=Re(t)?t:Dp,s=i;s.__localeChainCache||(s.__localeChainCache=new Map);let r=s.__localeChainCache.get(n);if(!r){r=[];let o=[t];for(;It(o);)o=k0(r,o,e);const a=It(e)||!et(e)?e:e.default?e.default:null;o=Re(a)?[a]:a,It(o)&&k0(r,o,!1),s.__localeChainCache.set(n,r)}return r}function k0(i,e,t){let n=!0;for(let s=0;s<e.length&&Et(n);s++){const r=e[s];Re(r)&&(n=yP(i,e[s],t))}return n}function yP(i,e,t){let n;const s=e.split("-");do{const r=s.join("-");n=bP(i,r,t),s.splice(-1,1)}while(s.length&&n===!0);return n}function bP(i,e,t){let n=!1;if(!i.includes(e)&&(n=!0,e)){n=e[e.length-1]!=="!";const s=e.replace(/!/g,"");i.push(s),(It(t)||et(t))&&t[s]&&(n=t[s])}return n}const MP="9.2.2",Mf=-1,Dp="en-US",z0="",B0=i=>`${i.charAt(0).toLocaleUpperCase()}${i.substr(1)}`;function SP(){return{upper:(i,e)=>e==="text"&&Re(i)?i.toUpperCase():e==="vnode"&&ht(i)&&"__v_isVNode"in i?i.children.toUpperCase():i,lower:(i,e)=>e==="text"&&Re(i)?i.toLowerCase():e==="vnode"&&ht(i)&&"__v_isVNode"in i?i.children.toLowerCase():i,capitalize:(i,e)=>e==="text"&&Re(i)?B0(i):e==="vnode"&&ht(i)&&"__v_isVNode"in i?B0(i.children):i}}let wP,Vx;function TP(i){Vx=i}let Gx;function EP(i){Gx=i}let Hx=null;const V0=i=>{Hx=i},AP=()=>Hx;let Wx=null;const G0=i=>{Wx=i},CP=()=>Wx;let H0=0;function RP(i={}){const e=Re(i.version)?i.version:MP,t=Re(i.locale)?i.locale:Dp,n=It(i.fallbackLocale)||et(i.fallbackLocale)||Re(i.fallbackLocale)||i.fallbackLocale===!1?i.fallbackLocale:t,s=et(i.messages)?i.messages:{[t]:{}},r=et(i.datetimeFormats)?i.datetimeFormats:{[t]:{}},o=et(i.numberFormats)?i.numberFormats:{[t]:{}},a=xn({},i.modifiers||{},SP()),l=i.pluralRules||{},c=$t(i.missing)?i.missing:null,u=Et(i.missingWarn)||au(i.missingWarn)?i.missingWarn:!0,f=Et(i.fallbackWarn)||au(i.fallbackWarn)?i.fallbackWarn:!0,h=!!i.fallbackFormat,p=!!i.unresolving,g=$t(i.postTranslation)?i.postTranslation:null,d=et(i.processor)?i.processor:null,m=Et(i.warnHtmlMessage)?i.warnHtmlMessage:!0,_=!!i.escapeParameter,x=$t(i.messageCompiler)?i.messageCompiler:wP,v=$t(i.messageResolver)?i.messageResolver:Vx||rP,y=$t(i.localeFallbacker)?i.localeFallbacker:Gx||xP,M=ht(i.fallbackContext)?i.fallbackContext:void 0,E=$t(i.onWarn)?i.onWarn:KL,A=i,b=ht(A.__datetimeFormatters)?A.__datetimeFormatters:new Map,T=ht(A.__numberFormatters)?A.__numberFormatters:new Map,P=ht(A.__meta)?A.__meta:{};H0++;const I={version:e,cid:H0,locale:t,fallbackLocale:n,messages:s,modifiers:a,pluralRules:l,missing:c,missingWarn:u,fallbackWarn:f,fallbackFormat:h,unresolving:p,postTranslation:g,processor:d,warnHtmlMessage:m,escapeParameter:_,messageCompiler:x,messageResolver:v,localeFallbacker:y,fallbackContext:M,onWarn:E,__meta:P};return I.datetimeFormats=r,I.numberFormats=o,I.__datetimeFormatters=b,I.__numberFormatters=T,__INTLIFY_PROD_DEVTOOLS__&&gP(I,e,P),I}function Np(i,e,t,n,s){const{missing:r,onWarn:o}=i;if(r!==null){const a=r(i,t,e,s);return Re(a)?a:e}else return e}function Va(i,e,t){const n=i;n.__localeChainCache=new Map,i.localeFallbacker(i,t,e)}let jx=Fx.__EXTEND_POINT__;const Mh=()=>++jx,go={INVALID_ARGUMENT:jx,INVALID_DATE_ARGUMENT:Mh(),INVALID_ISO_DATE_ARGUMENT:Mh(),__EXTEND_POINT__:Mh()};function _o(i){return kx(i,null,void 0)}const W0=()=>"",Ii=i=>$t(i);function j0(i,...e){const{fallbackFormat:t,postTranslation:n,unresolving:s,messageCompiler:r,fallbackLocale:o,messages:a}=i,[l,c]=fd(...e),u=Et(c.missingWarn)?c.missingWarn:i.missingWarn,f=Et(c.fallbackWarn)?c.fallbackWarn:i.fallbackWarn,h=Et(c.escapeParameter)?c.escapeParameter:i.escapeParameter,p=!!c.resolvedMessage,g=Re(c.default)||Et(c.default)?Et(c.default)?r?l:()=>l:c.default:t?r?l:()=>l:"",d=t||g!=="",m=Re(c.locale)?c.locale:i.locale;h&&LP(c);let[_,x,v]=p?[l,m,a[m]||{}]:Xx(i,l,m,o,f,u),y=_,M=l;if(!p&&!(Re(y)||Ii(y))&&d&&(y=g,M=y),!p&&(!(Re(y)||Ii(y))||!Re(x)))return s?Mf:l;let E=!1;const A=()=>{E=!0},b=Ii(y)?y:qx(i,l,x,y,M,A);if(E)return y;const T=DP(i,x,v,c),P=pP(T),I=PP(i,b,P),$=n?n(I,l):I;if(__INTLIFY_PROD_DEVTOOLS__){const N={timestamp:Date.now(),key:Re(l)?l:Ii(y)?y.key:"",locale:x||(Ii(y)?y.locale:""),format:Re(y)?y:Ii(y)?y.source:"",message:$};N.meta=xn({},i.__meta,AP()||{}),_P(N)}return $}function LP(i){It(i.list)?i.list=i.list.map(e=>Re(e)?O0(e):e):ht(i.named)&&Object.keys(i.named).forEach(e=>{Re(i.named[e])&&(i.named[e]=O0(i.named[e]))})}function Xx(i,e,t,n,s,r){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=i,u=c(i,n,t);let f={},h,p=null;const g="translate";for(let d=0;d<u.length&&(h=u[d],f=o[h]||{},(p=l(f,e))===null&&(p=f[e]),!(Re(p)||$t(p)));d++){const m=Np(i,e,h,r,g);m!==e&&(p=m)}return[p,h,f]}function qx(i,e,t,n,s,r){const{messageCompiler:o,warnHtmlMessage:a}=i;if(Ii(n)){const c=n;return c.locale=c.locale||t,c.key=c.key||e,c}if(o==null){const c=()=>n;return c.locale=t,c.key=e,c}const l=o(n,IP(i,t,s,n,a,r));return l.locale=t,l.key=e,l.source=n,l}function PP(i,e,t){return e(t)}function fd(...i){const[e,t,n]=i,s={};if(!Re(e)&&!jt(e)&&!Ii(e))throw _o(go.INVALID_ARGUMENT);const r=jt(e)?String(e):(Ii(e),e);return jt(t)?s.plural=t:Re(t)?s.default=t:et(t)&&!bf(t)?s.named=t:It(t)&&(s.list=t),jt(n)?s.plural=n:Re(n)?s.default=n:et(n)&&xn(s,n),[r,s]}function IP(i,e,t,n,s,r){return{warnHtmlMessage:s,onError:o=>{throw r&&r(o),o},onCacheKey:o=>qL(e,t,o)}}function DP(i,e,t,n){const{modifiers:s,pluralRules:r,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=i,h={locale:e,modifiers:s,pluralRules:r,messages:p=>{let g=o(t,p);if(g==null&&u){const[,,d]=Xx(u,p,e,a,l,c);g=o(d,p)}if(Re(g)){let d=!1;const _=qx(i,p,e,g,p,()=>{d=!0});return d?W0:_}else return Ii(g)?g:W0}};return i.processor&&(h.processor=i.processor),n.list&&(h.list=n.list),n.named&&(h.named=n.named),jt(n.plural)&&(h.pluralIndex=n.plural),h}function X0(i,...e){const{datetimeFormats:t,unresolving:n,fallbackLocale:s,onWarn:r,localeFallbacker:o}=i,{__datetimeFormatters:a}=i,[l,c,u,f]=hd(...e),h=Et(u.missingWarn)?u.missingWarn:i.missingWarn;Et(u.fallbackWarn)?u.fallbackWarn:i.fallbackWarn;const p=!!u.part,g=Re(u.locale)?u.locale:i.locale,d=o(i,s,g);if(!Re(l)||l==="")return new Intl.DateTimeFormat(g,f).format(c);let m={},_,x=null;const v="datetime format";for(let E=0;E<d.length&&(_=d[E],m=t[_]||{},x=m[l],!et(x));E++)Np(i,l,_,h,v);if(!et(x)||!Re(_))return n?Mf:l;let y=`${_}__${l}`;bf(f)||(y=`${y}__${JSON.stringify(f)}`);let M=a.get(y);return M||(M=new Intl.DateTimeFormat(_,xn({},x,f)),a.set(y,M)),p?M.formatToParts(c):M.format(c)}const $x=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function hd(...i){const[e,t,n,s]=i,r={};let o={},a;if(Re(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw _o(go.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw _o(go.INVALID_ISO_DATE_ARGUMENT)}}else if(YL(e)){if(isNaN(e.getTime()))throw _o(go.INVALID_DATE_ARGUMENT);a=e}else if(jt(e))a=e;else throw _o(go.INVALID_ARGUMENT);return Re(t)?r.key=t:et(t)&&Object.keys(t).forEach(l=>{$x.includes(l)?o[l]=t[l]:r[l]=t[l]}),Re(n)?r.locale=n:et(n)&&(o=n),et(s)&&(o=s),[r.key||"",a,r,o]}function q0(i,e,t){const n=i;for(const s in t){const r=`${e}__${s}`;n.__datetimeFormatters.has(r)&&n.__datetimeFormatters.delete(r)}}function $0(i,...e){const{numberFormats:t,unresolving:n,fallbackLocale:s,onWarn:r,localeFallbacker:o}=i,{__numberFormatters:a}=i,[l,c,u,f]=dd(...e),h=Et(u.missingWarn)?u.missingWarn:i.missingWarn;Et(u.fallbackWarn)?u.fallbackWarn:i.fallbackWarn;const p=!!u.part,g=Re(u.locale)?u.locale:i.locale,d=o(i,s,g);if(!Re(l)||l==="")return new Intl.NumberFormat(g,f).format(c);let m={},_,x=null;const v="number format";for(let E=0;E<d.length&&(_=d[E],m=t[_]||{},x=m[l],!et(x));E++)Np(i,l,_,h,v);if(!et(x)||!Re(_))return n?Mf:l;let y=`${_}__${l}`;bf(f)||(y=`${y}__${JSON.stringify(f)}`);let M=a.get(y);return M||(M=new Intl.NumberFormat(_,xn({},x,f)),a.set(y,M)),p?M.formatToParts(c):M.format(c)}const Yx=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function dd(...i){const[e,t,n,s]=i,r={};let o={};if(!jt(e))throw _o(go.INVALID_ARGUMENT);const a=e;return Re(t)?r.key=t:et(t)&&Object.keys(t).forEach(l=>{Yx.includes(l)?o[l]=t[l]:r[l]=t[l]}),Re(n)?r.locale=n:et(n)&&(o=n),et(s)&&(o=s),[r.key||"",a,r,o]}function Y0(i,e,t){const n=i;for(const s in t){const r=`${e}__${s}`;n.__numberFormatters.has(r)&&n.__numberFormatters.delete(r)}}typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Lp().__INTLIFY_PROD_DEVTOOLS__=!1);/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const NP="9.2.2";function OP(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Lp().__INTLIFY_PROD_DEVTOOLS__=!1)}let Kx=Fx.__EXTEND_POINT__;const yn=()=>++Kx,Gn={UNEXPECTED_RETURN_TYPE:Kx,INVALID_ARGUMENT:yn(),MUST_BE_CALL_SETUP_TOP:yn(),NOT_INSLALLED:yn(),NOT_AVAILABLE_IN_LEGACY_MODE:yn(),REQUIRED_VALUE:yn(),INVALID_VALUE:yn(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:yn(),NOT_INSLALLED_WITH_PROVIDE:yn(),UNEXPECTED_ERROR:yn(),NOT_COMPATIBLE_LEGACY_VUE_I18N:yn(),BRIDGE_SUPPORT_VUE_2_ONLY:yn(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:yn(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:yn(),__EXTEND_POINT__:yn()};function ei(i,...e){return kx(i,null,void 0)}const pd=er("__transrateVNode"),md=er("__datetimeParts"),gd=er("__numberParts"),UP=er("__setPluralRules");er("__intlifyMeta");const FP=er("__injectWithOption");function _d(i){if(!ht(i))return i;for(const e in i)if(Pp(i,e))if(!e.includes("."))ht(i[e])&&_d(i[e]);else{const t=e.split("."),n=t.length-1;let s=i;for(let r=0;r<n;r++)t[r]in s||(s[t[r]]={}),s=s[t[r]];s[t[n]]=i[e],delete i[e],ht(s[t[n]])&&_d(s[t[n]])}return i}function Zx(i,e){const{messages:t,__i18n:n,messageResolver:s,flatJson:r}=e,o=et(t)?t:It(n)?{}:{[i]:{}};if(It(n)&&n.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(o[l]=o[l]||{},rl(c,o[l])):rl(c,o)}else Re(a)&&rl(JSON.parse(a),o)}),s==null&&r)for(const a in o)Pp(o,a)&&_d(o[a]);return o}const Rc=i=>!ht(i)||It(i);function rl(i,e){if(Rc(i)||Rc(e))throw ei(Gn.INVALID_VALUE);for(const t in i)Pp(i,t)&&(Rc(i[t])||Rc(e[t])?e[t]=i[t]:rl(i[t],e[t]))}function Jx(i){return i.type}function kP(i,e,t){let n=ht(e.messages)?e.messages:{};"__i18nGlobal"in t&&(n=Zx(i.locale.value,{messages:n,__i18n:t.__i18nGlobal}));const s=Object.keys(n);s.length&&s.forEach(r=>{i.mergeLocaleMessage(r,n[r])});{if(ht(e.datetimeFormats)){const r=Object.keys(e.datetimeFormats);r.length&&r.forEach(o=>{i.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(ht(e.numberFormats)){const r=Object.keys(e.numberFormats);r.length&&r.forEach(o=>{i.mergeNumberFormat(o,e.numberFormats[o])})}}}function K0(i){return Pt(Wl,null,i,0)}const Z0="__INTLIFY_META__";let J0=0;function Q0(i){return(e,t,n,s)=>i(t,n,uf()||void 0,s)}const zP=()=>{const i=uf();let e=null;return i&&(e=Jx(i)[Z0])?{[Z0]:e}:null};function Qx(i={},e){const{__root:t}=i,n=t===void 0;let s=Et(i.inheritLocale)?i.inheritLocale:!0;const r=ci(t&&s?t.locale.value:Re(i.locale)?i.locale:Dp),o=ci(t&&s?t.fallbackLocale.value:Re(i.fallbackLocale)||It(i.fallbackLocale)||et(i.fallbackLocale)||i.fallbackLocale===!1?i.fallbackLocale:r.value),a=ci(Zx(r.value,i)),l=ci(et(i.datetimeFormats)?i.datetimeFormats:{[r.value]:{}}),c=ci(et(i.numberFormats)?i.numberFormats:{[r.value]:{}});let u=t?t.missingWarn:Et(i.missingWarn)||au(i.missingWarn)?i.missingWarn:!0,f=t?t.fallbackWarn:Et(i.fallbackWarn)||au(i.fallbackWarn)?i.fallbackWarn:!0,h=t?t.fallbackRoot:Et(i.fallbackRoot)?i.fallbackRoot:!0,p=!!i.fallbackFormat,g=$t(i.missing)?i.missing:null,d=$t(i.missing)?Q0(i.missing):null,m=$t(i.postTranslation)?i.postTranslation:null,_=t?t.warnHtmlMessage:Et(i.warnHtmlMessage)?i.warnHtmlMessage:!0,x=!!i.escapeParameter;const v=t?t.modifiers:et(i.modifiers)?i.modifiers:{};let y=i.pluralRules||t&&t.pluralRules,M;M=(()=>{n&&G0(null);const w={version:NP,locale:r.value,fallbackLocale:o.value,messages:a.value,modifiers:v,pluralRules:y,missing:d===null?void 0:d,missingWarn:u,fallbackWarn:f,fallbackFormat:p,unresolving:!0,postTranslation:m===null?void 0:m,warnHtmlMessage:_,escapeParameter:x,messageResolver:i.messageResolver,__meta:{framework:"vue"}};w.datetimeFormats=l.value,w.numberFormats=c.value,w.__datetimeFormatters=et(M)?M.__datetimeFormatters:void 0,w.__numberFormatters=et(M)?M.__numberFormatters:void 0;const S=RP(w);return n&&G0(S),S})(),Va(M,r.value,o.value);function A(){return[r.value,o.value,a.value,l.value,c.value]}const b=Ot({get:()=>r.value,set:w=>{r.value=w,M.locale=r.value}}),T=Ot({get:()=>o.value,set:w=>{o.value=w,M.fallbackLocale=o.value,Va(M,r.value,w)}}),P=Ot(()=>a.value),I=Ot(()=>l.value),$=Ot(()=>c.value);function N(){return $t(m)?m:null}function D(w){m=w,M.postTranslation=w}function O(){return g}function Y(w){w!==null&&(d=Q0(w)),g=w,M.missing=d}const j=(w,S,F,K,ie,de)=>{A();let xe;if(__INTLIFY_PROD_DEVTOOLS__)try{V0(zP()),n||(M.fallbackContext=t?CP():void 0),xe=w(M)}finally{V0(null),n||(M.fallbackContext=void 0)}else xe=w(M);if(jt(xe)&&xe===Mf){const[ye,se]=S();return t&&h?K(t):ie(ye)}else{if(de(xe))return xe;throw ei(Gn.UNEXPECTED_RETURN_TYPE)}};function V(...w){return j(S=>Reflect.apply(j0,null,[S,...w]),()=>fd(...w),"translate",S=>Reflect.apply(S.t,S,[...w]),S=>S,S=>Re(S))}function re(...w){const[S,F,K]=w;if(K&&!ht(K))throw ei(Gn.INVALID_ARGUMENT);return V(S,F,xn({resolvedMessage:!0},K||{}))}function he(...w){return j(S=>Reflect.apply(X0,null,[S,...w]),()=>hd(...w),"datetime format",S=>Reflect.apply(S.d,S,[...w]),()=>z0,S=>Re(S))}function be(...w){return j(S=>Reflect.apply($0,null,[S,...w]),()=>dd(...w),"number format",S=>Reflect.apply(S.n,S,[...w]),()=>z0,S=>Re(S))}function X(w){return w.map(S=>Re(S)||jt(S)||Et(S)?K0(String(S)):S)}const pe={normalize:X,interpolate:w=>w,type:"vnode"};function H(...w){return j(S=>{let F;const K=S;try{K.processor=pe,F=Reflect.apply(j0,null,[K,...w])}finally{K.processor=null}return F},()=>fd(...w),"translate",S=>S[pd](...w),S=>[K0(S)],S=>It(S))}function Se(...w){return j(S=>Reflect.apply($0,null,[S,...w]),()=>dd(...w),"number format",S=>S[gd](...w),()=>[],S=>Re(S)||It(S))}function B(...w){return j(S=>Reflect.apply(X0,null,[S,...w]),()=>hd(...w),"datetime format",S=>S[md](...w),()=>[],S=>Re(S)||It(S))}function Q(w){y=w,M.pluralRules=y}function Z(w,S){const F=Re(S)?S:r.value,K=C(F);return M.messageResolver(K,w)!==null}function oe(w){let S=null;const F=Bx(M,o.value,r.value);for(let K=0;K<F.length;K++){const ie=a.value[F[K]]||{},de=M.messageResolver(ie,w);if(de!=null){S=de;break}}return S}function Te(w){const S=oe(w);return S??(t?t.tm(w)||{}:{})}function C(w){return a.value[w]||{}}function L(w,S){a.value[w]=S,M.messages=a.value}function k(w,S){a.value[w]=a.value[w]||{},rl(S,a.value[w]),M.messages=a.value}function J(w){return l.value[w]||{}}function te(w,S){l.value[w]=S,M.datetimeFormats=l.value,q0(M,w,S)}function ce(w,S){l.value[w]=xn(l.value[w]||{},S),M.datetimeFormats=l.value,q0(M,w,S)}function me(w){return c.value[w]||{}}function fe(w,S){c.value[w]=S,M.numberFormats=c.value,Y0(M,w,S)}function _e(w,S){c.value[w]=xn(c.value[w]||{},S),M.numberFormats=c.value,Y0(M,w,S)}J0++,t&&ud&&(Hs(t.locale,w=>{s&&(r.value=w,M.locale=w,Va(M,r.value,o.value))}),Hs(t.fallbackLocale,w=>{s&&(o.value=w,M.fallbackLocale=w,Va(M,r.value,o.value))}));const ee={id:J0,locale:b,fallbackLocale:T,get inheritLocale(){return s},set inheritLocale(w){s=w,w&&t&&(r.value=t.locale.value,o.value=t.fallbackLocale.value,Va(M,r.value,o.value))},get availableLocales(){return Object.keys(a.value).sort()},messages:P,get modifiers(){return v},get pluralRules(){return y||{}},get isGlobal(){return n},get missingWarn(){return u},set missingWarn(w){u=w,M.missingWarn=u},get fallbackWarn(){return f},set fallbackWarn(w){f=w,M.fallbackWarn=f},get fallbackRoot(){return h},set fallbackRoot(w){h=w},get fallbackFormat(){return p},set fallbackFormat(w){p=w,M.fallbackFormat=p},get warnHtmlMessage(){return _},set warnHtmlMessage(w){_=w,M.warnHtmlMessage=w},get escapeParameter(){return x},set escapeParameter(w){x=w,M.escapeParameter=w},t:V,getLocaleMessage:C,setLocaleMessage:L,mergeLocaleMessage:k,getPostTranslationHandler:N,setPostTranslationHandler:D,getMissingHandler:O,setMissingHandler:Y,[UP]:Q};return ee.datetimeFormats=I,ee.numberFormats=$,ee.rt=re,ee.te=Z,ee.tm=Te,ee.d=he,ee.n=be,ee.getDateTimeFormat=J,ee.setDateTimeFormat=te,ee.mergeDateTimeFormat=ce,ee.getNumberFormat=me,ee.setNumberFormat=fe,ee.mergeNumberFormat=_e,ee[FP]=i.__injectWithOption,ee[pd]=H,ee[md]=B,ee[gd]=Se,ee}const Op={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:i=>i==="parent"||i==="global",default:"parent"},i18n:{type:Object}};function BP({slots:i},e){return e.length===1&&e[0]==="default"?(i.default?i.default():[]).reduce((n,s)=>n=[...n,...It(s.children)?s.children:[s]],[]):e.reduce((t,n)=>{const s=i[n];return s&&(t[n]=s()),t},{})}function ey(i){return Yn}const e_={name:"i18n-t",props:xn({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:i=>jt(i)||!isNaN(i)}},Op),setup(i,e){const{slots:t,attrs:n}=e,s=i.i18n||Up({useScope:i.scope,__useComponent:!0});return()=>{const r=Object.keys(t).filter(f=>f!=="_"),o={};i.locale&&(o.locale=i.locale),i.plural!==void 0&&(o.plural=Re(i.plural)?+i.plural:i.plural);const a=BP(e,r),l=s[pd](i.keypath,a,o),c=xn({},n),u=Re(i.tag)||ht(i.tag)?i.tag:ey();return ff(u,c,l)}}};function VP(i){return It(i)&&!Re(i[0])}function ty(i,e,t,n){const{slots:s,attrs:r}=e;return()=>{const o={part:!0};let a={};i.locale&&(o.locale=i.locale),Re(i.format)?o.key=i.format:ht(i.format)&&(Re(i.format.key)&&(o.key=i.format.key),a=Object.keys(i.format).reduce((h,p)=>t.includes(p)?xn({},h,{[p]:i.format[p]}):h,{}));const l=n(i.value,o,a);let c=[o.key];It(l)?c=l.map((h,p)=>{const g=s[h.type],d=g?g({[h.type]:h.value,index:p,parts:l}):[h.value];return VP(d)&&(d[0].key=`${h.type}-${p}`),d}):Re(l)&&(c=[l]);const u=xn({},r),f=Re(i.tag)||ht(i.tag)?i.tag:ey();return ff(f,u,c)}}const t_={name:"i18n-n",props:xn({value:{type:Number,required:!0},format:{type:[String,Object]}},Op),setup(i,e){const t=i.i18n||Up({useScope:"parent",__useComponent:!0});return ty(i,e,Yx,(...n)=>t[gd](...n))}},n_={name:"i18n-d",props:xn({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Op),setup(i,e){const t=i.i18n||Up({useScope:"parent",__useComponent:!0});return ty(i,e,$x,(...n)=>t[md](...n))}};function GP(i,e){const t=i;if(i.mode==="composition")return t.__getInstance(e)||i.global;{const n=t.__getInstance(e);return n!=null?n.__composer:i.global.__composer}}function HP(i){const e=o=>{const{instance:a,modifiers:l,value:c}=o;if(!a||!a.$)throw ei(Gn.UNEXPECTED_ERROR);const u=GP(i,a.$),f=i_(c);return[Reflect.apply(u.t,u,[...s_(f)]),u]};return{created:(o,a)=>{const[l,c]=e(a);ud&&i.global===c&&(o.__i18nWatcher=Hs(c.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{ud&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,c=i_(a);o.textContent=Reflect.apply(l.t,l,[...s_(c)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function i_(i){if(Re(i))return{path:i};if(et(i)){if(!("path"in i))throw ei(Gn.REQUIRED_VALUE,"path");return i}else throw ei(Gn.INVALID_VALUE)}function s_(i){const{path:e,locale:t,args:n,choice:s,plural:r}=i,o={},a=n||{};return Re(t)&&(o.locale=t),jt(s)&&(o.plural=s),jt(r)&&(o.plural=r),[e,a,o]}function WP(i,e,...t){const n=et(t[0])?t[0]:{},s=!!n.useI18nComponentName;(Et(n.globalInstall)?n.globalInstall:!0)&&(i.component(s?"i18n":e_.name,e_),i.component(t_.name,t_),i.component(n_.name,n_)),i.directive("t",HP(e))}const jP=er("global-vue-i18n");function XP(i={},e){const t=Et(i.globalInjection)?i.globalInjection:!0,n=!0,s=new Map,[r,o]=qP(i),a=er("");function l(f){return s.get(f)||null}function c(f,h){s.set(f,h)}function u(f){s.delete(f)}{const f={get mode(){return"composition"},get allowComposition(){return n},async install(h,...p){h.__VUE_I18N_SYMBOL__=a,h.provide(h.__VUE_I18N_SYMBOL__,f),t&&tI(h,f.global),WP(h,f,...p);const g=h.unmount;h.unmount=()=>{f.dispose(),g()}},get global(){return o},dispose(){r.stop()},__instances:s,__getInstance:l,__setInstance:c,__deleteInstance:u};return f}}function Up(i={}){const e=uf();if(e==null)throw ei(Gn.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw ei(Gn.NOT_INSLALLED);const t=$P(e),n=KP(t),s=Jx(e),r=YP(i,s);if(r==="global")return kP(n,i,s),n;if(r==="parent"){let l=ZP(t,e,i.__useComponent);return l==null&&(l=n),l}const o=t;let a=o.__getInstance(e);if(a==null){const l=xn({},i);"__i18n"in s&&(l.__i18n=s.__i18n),n&&(l.__root=n),a=Qx(l),JP(o,e),o.__setInstance(e,a)}return a}function qP(i,e,t){const n=jd();{const s=n.run(()=>Qx(i));if(s==null)throw ei(Gn.UNEXPECTED_ERROR);return[n,s]}}function $P(i){{const e=mi(i.isCE?jP:i.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw ei(i.isCE?Gn.NOT_INSLALLED_WITH_PROVIDE:Gn.UNEXPECTED_ERROR);return e}}function YP(i,e){return bf(i)?"__i18n"in e?"local":"global":i.useScope?i.useScope:"local"}function KP(i){return i.mode==="composition"?i.global:i.global.__composer}function ZP(i,e,t=!1){let n=null;const s=e.root;let r=e.parent;for(;r!=null;){const o=i;if(i.mode==="composition"&&(n=o.__getInstance(r)),n!=null||s===r)break;r=r.parent}return n}function JP(i,e,t){ip(()=>{},e),sp(()=>{i.__deleteInstance(e)},e)}const QP=["locale","fallbackLocale","availableLocales"],eI=["t","rt","d","n","tm"];function tI(i,e){const t=Object.create(null);QP.forEach(n=>{const s=Object.getOwnPropertyDescriptor(e,n);if(!s)throw ei(Gn.UNEXPECTED_ERROR);const r=bt(s.value)?{get(){return s.value.value},set(o){s.value.value=o}}:{get(){return s.get&&s.get()}};Object.defineProperty(t,n,r)}),i.config.globalProperties.$i18n=t,eI.forEach(n=>{const s=Object.getOwnPropertyDescriptor(e,n);if(!s||!s.value)throw ei(Gn.UNEXPECTED_ERROR);Object.defineProperty(i.config.globalProperties,`$${n}`,s)})}TP(oP);EP(Bx);OP();if(__INTLIFY_PROD_DEVTOOLS__){const i=Lp();i.__INTLIFY__=!0,mP(i.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}var Pu;class nI{constructor(){ve(this,Pu,e=>{Ue.emit(qe.KEY_DOWN,e.key)});Ue.register(this)}onAttach(){document.addEventListener("keydown",G(this,Pu))}}Pu=new WeakMap;var Ar,kl,zl,Iu,Du,Nu,Ou;class iI{constructor(){ve(this,Ar,void 0);ve(this,kl,e=>{var t;if(this.isTouch?e.touches&&e.touches.length>0&&this.updateCoordinate(e.touches[0].clientX,e.touches[0].clientY):this.updateCoordinate(e.clientX,e.clientY),Ue.emit(qe.POINTER_MOVE,this.coordinates),((t=e.touches)==null?void 0:t.length)===2&&G(this,Ar)){const n=Math.hypot(e.touches[0].pageX-e.touches[1].pageX,e.touches[0].pageY-e.touches[1].pageY);Ue.emit(qe.PINCH,n-G(this,Ar)),mt(this,Ar,n)}this.isDown&&(this.isDragging=!0,Ue.emit(qe.DRAG,new Be().subVectors(this.coordinates.webgl,this.previousCoordinates.webgl)))});ve(this,zl,()=>{this.isDown&&(this.previousCoordinates.webgl.copy(this.coordinates.webgl),this.previousCoordinates.dom.copy(this.coordinates.dom),this.isDown=!1,this.isDragging&&(this.isDragging=!1,Ue.emit(qe.DRAG_END,this.coordinates)),Ue.emit(qe.POINTER_UP,this.coordinates))});ve(this,Iu,e=>{if(!this.isDown){switch(e.pointerType){case"mouse":this.isTouch=!1;break;case"touch":this.isTouch=!0;break;case"pen":this.isTouch=!0;break}this.updateCoordinate(e.clientX,e.clientY),this.isDown=!0,Ue.emit(qe.POINTER_DOWN,this.coordinates)}});ve(this,Du,()=>{this.isTouch||(this.isDown=!1,Ue.emit(qe.POINTER_UP,this.coordinates))});ve(this,Nu,e=>{var t;((t=e.touches)==null?void 0:t.length)===2&&mt(this,Ar,Math.hypot(e.touches[0].pageX-e.touches[1].pageX,e.touches[0].pageY-e.touches[1].pageY))});ve(this,Ou,e=>{Ue.emit(qe.WHEEL,e.deltaY)});Ue.register(this),this.isTouch=!!(window.matchMedia("(pointer: coarse)").matches||typeof window.ontouchstart=="function"||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),this.isDown=!1,this.isDragging=!1}onAttach(){this.coordinates={webgl:new Be,dom:new Be(Me.tools.viewport.width*.5,Me.tools.viewport.height*.5)},this.previousCoordinates={webgl:this.coordinates.webgl.clone(),dom:this.coordinates.dom.clone()},Me.$app.addEventListener("mousemove",G(this,kl)),Me.$app.addEventListener("touchmove",G(this,kl),{passive:!0}),Me.$app.addEventListener("pointerdown",G(this,Iu)),Me.$app.addEventListener("touchstart",G(this,Nu),{passive:!0}),Me.$app.addEventListener("wheel",G(this,Ou),{passive:!0}),Me.$app.addEventListener("mouseup",G(this,zl)),Me.$app.addEventListener("touchend",G(this,zl)),Me.$app.addEventListener("pointerleave",G(this,Du))}updateCoordinate(e,t){this.previousCoordinates.dom.copy(this.coordinates.dom),this.previousCoordinates.webgl.copy(this.coordinates.webgl),this.coordinates.webgl.set(e/Me.tools.viewport.width*2-1,-(t/Me.tools.viewport.height)*2+1),this.coordinates.dom.set(e,t)}}Ar=new WeakMap,kl=new WeakMap,zl=new WeakMap,Iu=new WeakMap,Du=new WeakMap,Nu=new WeakMap,Ou=new WeakMap;class sI{constructor(){In(this,"resize",e=>{if(e[0].contentBoxSize){const t=Array.isArray(e[0].contentBoxSize)?e[0].contentBoxSize[0]:e[0].contentBoxSize;this.width=t.inlineSize,this.height=t.blockSize}else this.width=e[0].contentRect.width,this.height=e[0].contentRect.height;this.dpr=Math.min(window.innerWidth<oo.tablet?2:1.5,window.devicePixelRatio),this.ratio=this.width/this.height,this.breakpoint=window.innerWidth<oo.tablet?"mobile":window.innerWidth<oo.desktop?"tablet":"desktop",Ue.emit(qe.RESIZE,this.infos)});Ue.register(this);const e=Me.$wrapper.getBoundingClientRect();this.width=Math.min(window.innerWidth,e.width),this.height=e.height,this.dpr=Math.min(window.innerWidth<oo.tablet?2:1.5,window.devicePixelRatio),this.ratio=this.width/this.height,this.breakpoint=window.innerWidth<oo.tablet?"mobile":window.innerWidth<oo.desktop?"tablet":"desktop",this.isMobileAtLaunch=this.breakpoint==="mobile"}onAttach(){new ResizeObserver(this.resize).observe(Me.$wrapper)}get infos(){return{width:this.width,height:this.height,dpr:this.dpr,ratio:this.ratio,device:this.breakpoint}}}function rI(){const i=new iI,e=new sI,t=new nI;return{mouse:i,viewport:e,keyboard:t}}const nn={uTime:{value:0},uZoom:{value:0},uEmissiveOnly:{value:!1},uShadowOnly:{value:!1}};function ny(i){const e=new Map,t=new Map,n=i.clone();return iy(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function iy(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)iy(i.children[n],e.children[n],t)}var zo,Bl,Uu;class oI extends dt{constructor(t,n){super();ve(this,zo,new z);ve(this,Bl,new We);ve(this,Uu,new mf);In(this,"screenPosition",new Be);Ue.register(this),this.medalType=Object.keys(Qa)[n.type],this.mesh=t.getObjectByName(this.medalType).clone(),this.seed=Math.random();const s=new YR({color:B3[n.type]});this.mesh.traverse(r=>{r.isMesh&&(r.material=s)}),this.position.setX(n.position.x+.5).setZ(n.position.y+.5),this.position.y=.5,this.add(this.mesh)}onTick({et:t}){this.rotation.y=t*.005+this.seed,G(this,zo).copy(this.position).project(Me.webgl.camera).multiplyScalar(.5).addScalar(.5),this.screenPosition.set(G(this,zo).x,G(this,zo).y)}get isInScreen(){return G(this,Bl).multiplyMatrices(Me.webgl.camera.projectionMatrix,Me.webgl.camera.matrixWorldInverse),G(this,Uu).setFromProjectionMatrix(G(this,Bl)),!1}}zo=new WeakMap,Bl=new WeakMap,Uu=new WeakMap;function Zi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function sy(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ia={duration:.5,overwrite:!1,delay:0},Fp,an,Lt,Zn=1e8,lt=1/Zn,vd=Math.PI*2,aI=vd/4,lI=0,ry=Math.sqrt,cI=Math.cos,uI=Math.sin,qt=function(e){return typeof e=="string"},Mt=function(e){return typeof e=="function"},fs=function(e){return typeof e=="number"},kp=function(e){return typeof e>"u"},Bi=function(e){return typeof e=="object"},Tn=function(e){return e!==!1},zp=function(){return typeof window<"u"},Lc=function(e){return Mt(e)||qt(e)},oy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ln=Array.isArray,xd=/(?:-?\.?\d|\.)+/gi,ay=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,vo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Sh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ly=/[+-]=-?[.\d]+/,cy=/[^,'"\[\]\s]+/gi,fI=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,xt,$n,yd,Bp,Hn={},lu={},uy,fy=function(e){return(lu=zr(e,Hn))&&Rn},Vp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},cu=function(e,t){return!t&&console.warn(e)},hy=function(e,t){return e&&(Hn[e]=t)&&lu&&(lu[e]=t)||Hn},Tl=function(){return 0},hI={suppressEvents:!0,isStart:!0,kill:!1},Gc={suppressEvents:!0,kill:!1},dI={suppressEvents:!0},Gp={},js=[],bd={},dy,kn={},wh={},r_=30,Hc=[],Hp="",Wp=function(e){var t=e[0],n,s;if(Bi(t)||Mt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(s=Hc.length;s--&&!Hc[s].targetTest(t););n=Hc[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new Fy(e[s],n)))||e.splice(s,1);return e},Nr=function(e){return e._gsap||Wp(Jn(e))[0]._gsap},py=function(e,t,n){return(n=e[t])&&Mt(n)?e[t]():kp(n)&&e.getAttribute&&e.getAttribute(t)||n},En=function(e,t){return(e=e.split(",")).forEach(t)||e},Tt=function(e){return Math.round(e*1e5)/1e5||0},Yt=function(e){return Math.round(e*1e7)/1e7||0},Po=function(e,t){var n=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+s:n==="-"?e-s:n==="*"?e*s:e/s},pI=function(e,t){for(var n=t.length,s=0;e.indexOf(t[s])<0&&++s<n;);return s<n},uu=function(){var e=js.length,t=js.slice(0),n,s;for(bd={},js.length=0,n=0;n<e;n++)s=t[n],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},my=function(e,t,n,s){js.length&&!an&&uu(),e.render(t,n,s||an&&t<0&&(e._initted||e._startAt)),js.length&&!an&&uu()},gy=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(cy).length<2?t:qt(e)?e.trim():e},_y=function(e){return e},ti=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},mI=function(e){return function(t,n){for(var s in n)s in t||s==="duration"&&e||s==="ease"||(t[s]=n[s])}},zr=function(e,t){for(var n in t)e[n]=t[n];return e},o_=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Bi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},fu=function(e,t){var n={},s;for(s in e)s in t||(n[s]=e[s]);return n},ol=function(e){var t=e.parent||xt,n=e.keyframes?mI(ln(e.keyframes)):ti;if(Tn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},gI=function(e,t){for(var n=e.length,s=n===t.length;s&&n--&&e[n]===t[n];);return n<0},vy=function(e,t,n,s,r){n===void 0&&(n="_first"),s===void 0&&(s="_last");var o=e[s],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[s]=t,t._prev=o,t.parent=t._dp=e,t},Sf=function(e,t,n,s){n===void 0&&(n="_first"),s===void 0&&(s="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[s]===t&&(e[s]=r),t._next=t._prev=t.parent=null},Zs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Or=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},_I=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Md=function(e,t,n,s){return e._startAt&&(an?e._startAt.revert(Gc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},vI=function i(e){return!e||e._ts&&i(e.parent)},a_=function(e){return e._repeat?sa(e._tTime,e=e.duration()+e._rDelay)*e:0},sa=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},hu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},wf=function(e){return e._end=Yt(e._start+(e._tDur/Math.abs(e._ts||e._rts||lt)||0))},Tf=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Yt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),wf(e),n._dirty||Or(n,e)),e},xy=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=hu(e.rawTime(),t),(!t._dur||$l(0,t.totalDuration(),n)-t._tTime>lt)&&t.render(n,!0)),Or(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-lt}},Ni=function(e,t,n,s){return t.parent&&Zs(t),t._start=Yt((fs(n)?n:n||e!==xt?Xn(e,n,t):e._time)+t._delay),t._end=Yt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),vy(e,t,"_first","_last",e._sort?"_start":0),Sd(t)||(e._recent=t),s||xy(e,t),e._ts<0&&Tf(e,e._tTime),e},yy=function(e,t){return(Hn.ScrollTrigger||Vp("scrollTrigger",t))&&Hn.ScrollTrigger.create(t,e)},by=function(e,t,n,s,r){if(Xp(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!an&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&dy!==zn.frame)return js.push(e),e._lazy=[r,s],1},xI=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Sd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},yI=function(e,t,n,s){var r=e.ratio,o=t<0||!t&&(!e._start&&xI(e)&&!(!e._initted&&Sd(e))||(e._ts<0||e._dp._ts<0)&&!Sd(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=$l(0,e._tDur,t),u=sa(l,a),e._yoyo&&u&1&&(o=1-o),u!==sa(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||an||s||e._zTime===lt||!t&&e._zTime){if(!e._initted&&by(e,t,s,n,l))return;for(f=e._zTime,e._zTime=t||(n?lt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Md(e,t,n,!0),e._onUpdate&&!n&&Qn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Qn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Zs(e,1),!n&&!an&&(Qn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},bI=function(e,t,n){var s;if(n>t)for(s=e._first;s&&s._start<=n;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=n;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},ra=function(e,t,n,s){var r=e._repeat,o=Yt(t)||0,a=e._tTime/e._tDur;return a&&!s&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Yt(o*(r+1)+e._rDelay*r):o,a>0&&!s&&Tf(e,e._tTime=e._tDur*a),e.parent&&wf(e),n||Or(e.parent,e),e},l_=function(e){return e instanceof wn?Or(e):ra(e,e._dur)},MI={_start:0,endTime:Tl,totalDuration:Tl},Xn=function i(e,t,n){var s=e.labels,r=e._recent||MI,o=e.duration()>=Zn?r.endTime(!1):e._dur,a,l,c;return qt(t)&&(isNaN(t)||t in s)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in s||(s[t]=o),s[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(ln(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},al=function(e,t,n){var s=fs(t[1]),r=(s?2:1)+(e<2?0:1),o=t[r],a,l;if(s&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Tn(l.vars.inherit)&&l.parent;o.immediateRender=Tn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Dt(t[0],o,t[r+1])},nr=function(e,t){return e||e===0?t(e):t},$l=function(e,t,n){return n<e?e:n>t?t:n},rn=function(e,t){return!qt(e)||!(t=fI.exec(e))?"":t[1]},SI=function(e,t,n){return nr(n,function(s){return $l(e,t,s)})},wd=[].slice,My=function(e,t){return e&&Bi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Bi(e[0]))&&!e.nodeType&&e!==$n},wI=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(s){var r;return qt(s)&&!t||My(s,1)?(r=n).push.apply(r,Jn(s)):n.push(s)})||n},Jn=function(e,t,n){return Lt&&!t&&Lt.selector?Lt.selector(e):qt(e)&&!n&&(yd||!oa())?wd.call((t||Bp).querySelectorAll(e),0):ln(e)?wI(e,n):My(e)?wd.call(e,0):e?[e]:[]},Td=function(e){return e=Jn(e)[0]||cu("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Jn(t,n.querySelectorAll?n:n===e?cu("Invalid scope")||Bp.createElement("div"):e)}},Sy=function(e){return e.sort(function(){return .5-Math.random()})},wy=function(e){if(Mt(e))return e;var t=Bi(e)?e:{each:e},n=Ur(t.ease),s=t.from||0,r=parseFloat(t.base)||0,o={},a=s>0&&s<1,l=isNaN(s)||a,c=t.axis,u=s,f=s;return qt(s)?u=f={center:.5,edges:.5,end:1}[s]||0:!a&&l&&(u=s[0],f=s[1]),function(h,p,g){var d=(g||t).length,m=o[d],_,x,v,y,M,E,A,b,T;if(!m){if(T=t.grid==="auto"?0:(t.grid||[1,Zn])[1],!T){for(A=-Zn;A<(A=g[T++].getBoundingClientRect().left)&&T<d;);T--}for(m=o[d]=[],_=l?Math.min(T,d)*u-.5:s%T,x=T===Zn?0:l?d*f/T-.5:s/T|0,A=0,b=Zn,E=0;E<d;E++)v=E%T-_,y=x-(E/T|0),m[E]=M=c?Math.abs(c==="y"?y:v):ry(v*v+y*y),M>A&&(A=M),M<b&&(b=M);s==="random"&&Sy(m),m.max=A-b,m.min=b,m.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(T>d?d-1:c?c==="y"?d/T:T:Math.max(T,d/T))||0)*(s==="edges"?-1:1),m.b=d<0?r-d:r,m.u=rn(t.amount||t.each)||0,n=n&&d<0?Ny(n):n}return d=(m[h]-m.min)/m.max||0,Yt(m.b+(n?n(d):d)*m.v)+m.u}},Ed=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var s=Yt(Math.round(parseFloat(n)/e)*e*t);return(s-s%1)/t+(fs(n)?0:rn(n))}},Ty=function(e,t){var n=ln(e),s,r;return!n&&Bi(e)&&(s=n=e.radius||Zn,e.values?(e=Jn(e.values),(r=!fs(e[0]))&&(s*=s)):e=Ed(e.increment)),nr(t,n?Mt(e)?function(o){return r=e(o),Math.abs(r-o)<=s?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Zn,u=0,f=e.length,h,p;f--;)r?(h=e[f].x-a,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!s||c<=s?e[u]:o,r||u===o||fs(o)?u:u+rn(o)}:Ed(e))},Ey=function(e,t,n,s){return nr(ln(e)?!t:n===!0?!!(n=0):!s,function(){return ln(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(s=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*s)/s})},TI=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(s){return t.reduce(function(r,o){return o(r)},s)}},EI=function(e,t){return function(n){return e(parseFloat(n))+(t||rn(n))}},AI=function(e,t,n){return Cy(e,t,0,1,n)},Ay=function(e,t,n){return nr(n,function(s){return e[~~t(s)]})},CI=function i(e,t,n){var s=t-e;return ln(e)?Ay(e,i(0,e.length),t):nr(n,function(r){return(s+(r-e)%s)%s+e})},RI=function i(e,t,n){var s=t-e,r=s*2;return ln(e)?Ay(e,i(0,e.length-1),t):nr(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>s?r-o:o)})},El=function(e){for(var t=0,n="",s,r,o,a;~(s=e.indexOf("random(",t));)o=e.indexOf(")",s),a=e.charAt(s+7)==="[",r=e.substr(s+7,o-s-7).match(a?cy:xd),n+=e.substr(t,s-t)+Ey(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Cy=function(e,t,n,s,r){var o=t-e,a=s-n;return nr(r,function(l){return n+((l-e)/o*a||0)})},LI=function i(e,t,n,s){var r=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!r){var o=qt(e),a={},l,c,u,f,h;if(n===!0&&(s=1)&&(n=null),o)e={p:e},t={p:t};else if(ln(e)&&!ln(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,r=function(g){g*=f;var d=Math.min(h,~~g);return u[d](g-d)},n=t}else s||(e=zr(ln(e)?[]:{},e));if(!u){for(l in t)jp.call(a,e,l,"get",t[l]);r=function(g){return Yp(g,a)||(o?e.p:e)}}}return nr(n,r)},c_=function(e,t,n){var s=e.labels,r=Zn,o,a,l;for(o in s)a=s[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Qn=function(e,t,n){var s=e.vars,r=s[t],o=Lt,a=e._ctx,l,c,u;if(r)return l=s[t+"Params"],c=s.callbackScope||e,n&&js.length&&uu(),a&&(Lt=a),u=l?r.apply(c,l):r.call(c),Lt=o,u},$a=function(e){return Zs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!an),e.progress()<1&&Qn(e,"onInterrupt"),e},xo,Ry=[],Ly=function(e){if(!zp()){Ry.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=Mt(e),s=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Tl,render:Yp,add:jp,kill:XI,modifier:jI,rawVars:0},o={targetTest:0,get:0,getSetter:$p,aliases:{},register:0};if(oa(),e!==s){if(kn[t])return;ti(s,ti(fu(e,r),o)),zr(s.prototype,zr(r,fu(e,o))),kn[s.prop=t]=s,e.targetTest&&(Hc.push(s),Gp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}hy(t,s),e.register&&e.register(Rn,s,An)},ot=255,Ya={aqua:[0,ot,ot],lime:[0,ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ot],navy:[0,0,128],white:[ot,ot,ot],olive:[128,128,0],yellow:[ot,ot,0],orange:[ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ot,0,0],pink:[ot,192,203],cyan:[0,ot,ot],transparent:[ot,ot,ot,0]},Th=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ot+.5|0},Py=function(e,t,n){var s=e?fs(e)?[e>>16,e>>8&ot,e&ot]:0:Ya.black,r,o,a,l,c,u,f,h,p,g;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ya[e])s=Ya[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&ot,s&ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&ot,e&ot]}else if(e.substr(0,3)==="hsl"){if(s=g=e.match(xd),!t)l=+s[0]%360/360,c=+s[1]/100,u=+s[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,s.length>3&&(s[3]*=1),s[0]=Th(l+1/3,r,o),s[1]=Th(l,r,o),s[2]=Th(l-1/3,r,o);else if(~e.indexOf("="))return s=e.match(ay),n&&s.length<4&&(s[3]=1),s}else s=e.match(xd)||Ya.transparent;s=s.map(Number)}return t&&!g&&(r=s[0]/ot,o=s[1]/ot,a=s[2]/ot,f=Math.max(r,o,a),h=Math.min(r,o,a),u=(f+h)/2,f===h?l=c=0:(p=f-h,c=u>.5?p/(2-f-h):p/(f+h),l=f===r?(o-a)/p+(o<a?6:0):f===o?(a-r)/p+2:(r-o)/p+4,l*=60),s[0]=~~(l+.5),s[1]=~~(c*100+.5),s[2]=~~(u*100+.5)),n&&s.length<4&&(s[3]=1),s},Iy=function(e){var t=[],n=[],s=-1;return e.split(Xs).forEach(function(r){var o=r.match(vo)||[];t.push.apply(t,o),n.push(s+=o.length+1)}),t.c=n,t},u_=function(e,t,n){var s="",r=(e+s).match(Xs),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!r)return e;if(r=r.map(function(h){return(h=Py(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Iy(e),l=n.c,l.join(s)!==u.c.join(s)))for(c=e.replace(Xs,"1").split(vo),f=c.length-1;a<f;a++)s+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Xs),f=c.length-1;a<f;a++)s+=c[a]+r[a];return s+c[f]},Xs=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ya)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),PI=/hsl[a]?\(/,Dy=function(e){var t=e.join(" "),n;if(Xs.lastIndex=0,Xs.test(t))return n=PI.test(t),e[1]=u_(e[1],n),e[0]=u_(e[0],n,Iy(e[1])),!0},Al,zn=function(){var i=Date.now,e=500,t=33,n=i(),s=n,r=1e3/240,o=r,a=[],l,c,u,f,h,p,g=function d(m){var _=i()-s,x=m===!0,v,y,M,E;if(_>e&&(n+=_-t),s+=_,M=s-n,v=M-o,(v>0||x)&&(E=++f.frame,h=M-f.time*1e3,f.time=M=M/1e3,o+=v+(v>=r?4:r-v),y=1),x||(l=c(d)),y)for(p=0;p<a.length;p++)a[p](M,h,E,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){uy&&(!yd&&zp()&&($n=yd=window,Bp=$n.document||{},Hn.gsap=Rn,($n.gsapVersions||($n.gsapVersions=[])).push(Rn.version),fy(lu||$n.GreenSockGlobals||!$n.gsap&&$n||{}),u=$n.requestAnimationFrame,Ry.forEach(Ly)),l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Al=1,g(2))},sleep:function(){(u?$n.cancelAnimationFrame:clearTimeout)(l),Al=0,c=Tl},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){r=1e3/(m||240),o=f.time*1e3+r},add:function(m,_,x){var v=_?function(y,M,E,A){m(y,M,E,A),f.remove(v)}:m;return f.remove(m),a[x?"unshift":"push"](v),oa(),v},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&p>=_&&p--},_listeners:a},f}(),oa=function(){return!Al&&zn.wake()},$e={},II=/^[\d.\-M][\d.\-,\s]/,DI=/["']/g,NI=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),s=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[s]=isNaN(c)?c.replace(DI,"").trim():+c,s=l.substr(a+1).trim();return t},OI=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<n?e.indexOf(")",n+1):n)},UI=function(e){var t=(e+"").split("("),n=$e[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[NI(t[1])]:OI(e).split(",").map(gy)):$e._CE&&II.test(e)?$e._CE("",e):n},Ny=function(e){return function(t){return 1-e(1-t)}},Oy=function i(e,t){for(var n=e._first,s;n;)n instanceof wn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(s=n._ease,n._ease=n._yEase,n._yEase=s,n._yoyo=t)),n=n._next},Ur=function(e,t){return e&&(Mt(e)?e:$e[e]||UI(e))||t},Hr=function(e,t,n,s){n===void 0&&(n=function(l){return 1-t(1-l)}),s===void 0&&(s=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:s},o;return En(e,function(a){$e[a]=Hn[a]=r,$e[o=a.toLowerCase()]=n;for(var l in r)$e[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=$e[a+"."+l]=r[l]}),r},Uy=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Eh=function i(e,t,n){var s=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/vd*(Math.asin(1/s)||0),a=function(u){return u===1?1:s*Math.pow(2,-10*u)*uI((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Uy(a);return r=vd/r,l.config=function(c,u){return i(e,c,u)},l},Ah=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},s=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Uy(n);return s.config=function(r){return i(e,r)},s};En("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Hr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});$e.Linear.easeNone=$e.none=$e.Linear.easeIn;Hr("Elastic",Eh("in"),Eh("out"),Eh());(function(i,e){var t=1/e,n=2*t,s=2.5*t,r=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<s?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};Hr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Hr("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});Hr("Circ",function(i){return-(ry(1-i*i)-1)});Hr("Sine",function(i){return i===1?1:-cI(i*aI)+1});Hr("Back",Ah("in"),Ah("out"),Ah());$e.SteppedEase=$e.steps=Hn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,s=e+(t?0:1),r=t?1:0,o=1-lt;return function(a){return((s*$l(0,o,a)|0)+r)*n}}};ia.ease=$e["quad.out"];En("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Hp+=i+","+i+"Params,"});var Fy=function(e,t){this.id=lI++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:py,this.set=t?t.getSetter:$p},aa=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ra(this,+t.duration,1,1),this.data=t.data,Lt&&(this._ctx=Lt,Lt.data.push(this)),Al||zn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ra(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,s){if(oa(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Tf(this,n),!r._dp||r.parent||xy(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ni(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===lt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),my(this,n,s)),this},e.time=function(n,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+a_(this))%(this._dur+this._rDelay)||(n?this._dur:0),s):this._time},e.totalProgress=function(n,s){return arguments.length?this.totalTime(this.totalDuration()*n,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+a_(this),s):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,s){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,s):this._repeat?sa(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-lt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?hu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-lt?0:this._rts,this.totalTime($l(-Math.abs(this._delay),this._tDur,s),!0),wf(this),_I(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(oa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==lt&&(this._tTime-=lt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&Ni(s,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Tn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var s=this.parent||this._dp;return s?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?hu(s.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=dI);var s=an;return an=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),an=s,this},e.globalTime=function(n){for(var s=this,r=arguments.length?n:s.rawTime();s;)r=s._start+r/(s._ts||1),s=s._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,l_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var s=this._time;return this._rDelay=n,l_(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,s){return this.totalTime(Xn(this,n),Tn(s))},e.restart=function(n,s){return this.play().totalTime(n?-this._delay:0,Tn(s))},e.play=function(n,s){return n!=null&&this.seek(n,s),this.reversed(!1).paused(!1)},e.reverse=function(n,s){return n!=null&&this.seek(n||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(n,s){return n!=null&&this.seek(n,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-lt,this},e.isActive=function(){var n=this.parent||this._dp,s=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=s&&r<this.endTime(!0)-lt)},e.eventCallback=function(n,s,r){var o=this.vars;return arguments.length>1?(s?(o[n]=s,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=s)):delete o[n],this):o[n]},e.then=function(n){var s=this;return new Promise(function(r){var o=Mt(n)?n:_y,a=function(){var c=s.then;s.then=null,Mt(o)&&(o=o(s))&&(o.then||o===s)&&(s.then=c),r(o),s.then=c};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?a():s._prom=a})},e.kill=function(){$a(this)},i}();ti(aa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-lt,_prom:0,_ps:!1,_rts:1});var wn=function(i){sy(e,i);function e(n,s){var r;return n===void 0&&(n={}),r=i.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Tn(n.sortChildren),xt&&Ni(n.parent||xt,Zi(r),s),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&yy(Zi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(s,r,o){return al(0,arguments,this),this},t.from=function(s,r,o){return al(1,arguments,this),this},t.fromTo=function(s,r,o,a){return al(2,arguments,this),this},t.set=function(s,r,o){return r.duration=0,r.parent=this,ol(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Dt(s,r,Xn(this,o),1),this},t.call=function(s,r,o){return Ni(this,Dt.delayedCall(0,s,r),o)},t.staggerTo=function(s,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Dt(s,o,Xn(this,l)),this},t.staggerFrom=function(s,r,o,a,l,c,u){return o.runBackwards=1,ol(o).immediateRender=Tn(o.immediateRender),this.staggerTo(s,r,o,a,l,c,u)},t.staggerFromTo=function(s,r,o,a,l,c,u,f){return a.startAt=o,ol(a).immediateRender=Tn(a.immediateRender),this.staggerTo(s,r,a,l,c,u,f)},t.render=function(s,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=s<=0?0:Yt(s),f=this._zTime<0!=s<0&&(this._initted||!c),h,p,g,d,m,_,x,v,y,M,E,A;if(this!==xt&&u>l&&s>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,s+=this._time-a),h=u,y=this._start,v=this._ts,_=!v,f&&(c||(a=this._zTime),(s||!r)&&(this._zTime=s)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(m*100+s,r,o);if(h=Yt(u%m),u===l?(d=this._repeat,h=c):(d=~~(u/m),d&&d===u/m&&(h=c,d--),h>c&&(h=c)),M=sa(this._tTime,m),!a&&this._tTime&&M!==d&&this._tTime-M*m-this._dur<=0&&(M=d),E&&d&1&&(h=c-h,A=1),d!==M&&!this._lock){var b=E&&M&1,T=b===(E&&d&1);if(d<M&&(b=!b),a=b?0:c,this._lock=1,this.render(a||(A?0:Yt(d*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Qn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=b?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Oy(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=bI(this,Yt(a),Yt(h)),x&&(u-=h-(h=x._start))),this._tTime=u,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,a=0),!a&&h&&!r&&!d&&(Qn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&s>=0)for(p=this._first;p;){if(g=p._next,(p._act||h>=p._start)&&p._ts&&x!==p){if(p.parent!==this)return this.render(s,r,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,r,o),h!==this._time||!this._ts&&!_){x=0,g&&(u+=this._zTime=-lt);break}}p=g}else{p=this._last;for(var P=s<0?s:h;p;){if(g=p._prev,(p._act||P<=p._end)&&p._ts&&x!==p){if(p.parent!==this)return this.render(s,r,o);if(p.render(p._ts>0?(P-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(P-p._start)*p._ts,r,o||an&&(p._initted||p._startAt)),h!==this._time||!this._ts&&!_){x=0,g&&(u+=this._zTime=P?-lt:lt);break}}p=g}}if(x&&!r&&(this.pause(),x.render(h>=a?0:-lt)._zTime=h>=a?1:-1,this._ts))return this._start=y,wf(this),this.render(s,r,o);this._onUpdate&&!r&&Qn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((s||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Zs(this,1),!r&&!(s<0&&!a)&&(u||a||!l)&&(Qn(this,u===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,r){var o=this;if(fs(r)||(r=Xn(this,r,s)),!(s instanceof aa)){if(ln(s))return s.forEach(function(a){return o.add(a,r)}),this;if(qt(s))return this.addLabel(s,r);if(Mt(s))s=Dt.delayedCall(0,s);else return this}return this!==s?Ni(this,s,r):this},t.getChildren=function(s,r,o,a){s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Zn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Dt?r&&l.push(c):(o&&l.push(c),s&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(s){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===s)return r[o]},t.remove=function(s){return qt(s)?this.removeLabel(s):Mt(s)?this.killTweensOf(s):(Sf(this,s),s===this._recent&&(this._recent=this._last),Or(this))},t.totalTime=function(s,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Yt(zn.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),i.prototype.totalTime.call(this,s,r),this._forcing=0,this):this._tTime},t.addLabel=function(s,r){return this.labels[s]=Xn(this,r),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,r,o){var a=Dt.delayedCall(0,r||Tl,o);return a.data="isPause",this._hasPause=1,Ni(this,a,Xn(this,s))},t.removePause=function(s){var r=this._first;for(s=Xn(this,s);r;)r._start===s&&r.data==="isPause"&&Zs(r),r=r._next},t.killTweensOf=function(s,r,o){for(var a=this.getTweensOf(s,o),l=a.length;l--;)Fs!==a[l]&&a[l].kill(s,r);return this},t.getTweensOf=function(s,r){for(var o=[],a=Jn(s),l=this._first,c=fs(r),u;l;)l instanceof Dt?pI(l._targets,a)&&(c?(!Fs||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(s,r){r=r||{};var o=this,a=Xn(o,s),l=r,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,p,g=Dt.to(o,ti({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||lt,onStart:function(){if(o.pause(),!p){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&ra(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,f||[])}},r));return h?g.render(0):g},t.tweenFromTo=function(s,r,o){return this.tweenTo(r,ti({startAt:{time:Xn(this,s)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),c_(this,Xn(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),c_(this,Xn(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+lt)},t.shiftChildren=function(s,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=s,a._end+=s),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=s);return Or(this)},t.invalidate=function(s){var r=this._first;for(this._lock=0;r;)r.invalidate(s),r=r._next;return i.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Or(this)},t.totalDuration=function(s){var r=0,o=this,a=o._last,l=Zn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-s:s));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ni(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;ra(o,o===xt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(s){if(xt._ts&&(my(xt,hu(s,xt)),dy=zn.frame),zn.frame>=r_){r_+=Vn.autoSleep||120;var r=xt._first;if((!r||!r._ts)&&Vn.autoSleep&&zn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||zn.sleep()}}},e}(aa);ti(wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var FI=function(e,t,n,s,r,o,a){var l=new An(this._pt,e,t,0,1,Hy,null,r),c=0,u=0,f,h,p,g,d,m,_,x;for(l.b=n,l.e=s,n+="",s+="",(_=~s.indexOf("random("))&&(s=El(s)),o&&(x=[n,s],o(x,e,t),n=x[0],s=x[1]),h=n.match(Sh)||[];f=Sh.exec(s);)g=f[0],d=s.substring(c,f.index),p?p=(p+1)%5:d.substr(-5)==="rgba("&&(p=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:m,c:g.charAt(1)==="="?Po(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=Sh.lastIndex);return l.c=c<s.length?s.substring(c,s.length):"",l.fp=a,(ly.test(s)||_)&&(l.e=0),this._pt=l,l},jp=function(e,t,n,s,r,o,a,l,c,u){Mt(s)&&(s=s(r||0,e,o));var f=e[t],h=n!=="get"?n:Mt(f)?c?e[t.indexOf("set")||!Mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,p=Mt(f)?c?GI:Vy:qp,g;if(qt(s)&&(~s.indexOf("random(")&&(s=El(s)),s.charAt(1)==="="&&(g=Po(h,s)+(rn(h)||0),(g||g===0)&&(s=g))),!u||h!==s||Ad)return!isNaN(h*s)&&s!==""?(g=new An(this._pt,e,t,+h||0,s-(h||0),typeof f=="boolean"?WI:Gy,0,p),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Vp(t,s),FI.call(this,e,t,h,s,p,l||Vn.stringFilter,c))},kI=function(e,t,n,s,r){if(Mt(e)&&(e=ll(e,r,t,n,s)),!Bi(e)||e.style&&e.nodeType||ln(e)||oy(e))return qt(e)?ll(e,r,t,n,s):e;var o={},a;for(a in e)o[a]=ll(e[a],r,t,n,s);return o},ky=function(e,t,n,s,r,o){var a,l,c,u;if(kn[e]&&(a=new kn[e]).init(r,a.rawVars?t[e]:kI(t[e],s,r,o,n),n,s,o)!==!1&&(n._pt=l=new An(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==xo))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Fs,Ad,Xp=function i(e,t,n){var s=e.vars,r=s.ease,o=s.startAt,a=s.immediateRender,l=s.lazy,c=s.onUpdate,u=s.onUpdateParams,f=s.callbackScope,h=s.runBackwards,p=s.yoyoEase,g=s.keyframes,d=s.autoRevert,m=e._dur,_=e._startAt,x=e._targets,v=e.parent,y=v&&v.data==="nested"?v.vars.targets:x,M=e._overwrite==="auto"&&!Fp,E=e.timeline,A,b,T,P,I,$,N,D,O,Y,j,V,re;if(E&&(!g||!r)&&(r="none"),e._ease=Ur(r,ia.ease),e._yEase=p?Ny(Ur(p===!0?r:p,ia.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!E&&!!s.runBackwards,!E||g&&!s.stagger){if(D=x[0]?Nr(x[0]).harness:0,V=D&&s[D.prop],A=fu(s,Gp),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&m?Gc:hI),_._lazy=0),o){if(Zs(e._startAt=Dt.set(x,ti({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!_&&Tn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(an||!a&&!d)&&e._startAt.revert(Gc),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&m&&!_){if(t&&(a=!1),T=ti({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Tn(l),immediateRender:a,stagger:0,parent:v},A),V&&(T[D.prop]=V),Zs(e._startAt=Dt.set(x,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(an?e._startAt.revert(Gc):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,lt,lt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Tn(l)||l&&!m,b=0;b<x.length;b++){if(I=x[b],N=I._gsap||Wp(x)[b]._gsap,e._ptLookup[b]=Y={},bd[N.id]&&js.length&&uu(),j=y===x?b:y.indexOf(I),D&&(O=new D).init(I,V||A,e,j,y)!==!1&&(e._pt=P=new An(e._pt,I,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(he){Y[he]=P}),O.priority&&($=1)),!D||V)for(T in A)kn[T]&&(O=ky(T,A,e,j,I,y))?O.priority&&($=1):Y[T]=P=jp.call(e,I,T,"get",A[T],j,y,0,s.stringFilter);e._op&&e._op[b]&&e.kill(I,e._op[b]),M&&e._pt&&(Fs=e,xt.killTweensOf(I,Y,e.globalTime(t)),re=!e.parent,Fs=0),e._pt&&l&&(bd[N.id]=1)}$&&Wy(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!re,g&&t<=0&&E.render(Zn,!0,!0)},zI=function(e,t,n,s,r,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,h;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Ad=1,e.vars[t]="+=0",Xp(e,a),Ad=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(s||s===0)&&!r?s:c.s+(s||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=Tt(n)+rn(u.e)),u.b&&(u.b=c.s+rn(u.b))},BI=function(e,t){var n=e[0]?Nr(e[0]).harness:0,s=n&&n.aliases,r,o,a,l;if(!s)return t;r=zr({},t);for(o in s)if(o in r)for(l=s[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},VI=function(e,t,n,s){var r=t.ease||s||"power1.inOut",o,a;if(ln(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},ll=function(e,t,n,s,r){return Mt(e)?e.call(t,n,s,r):qt(e)&&~e.indexOf("random(")?El(e):e},zy=Hp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",By={};En(zy+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return By[i]=1});var Dt=function(i){sy(e,i);function e(n,s,r,o){var a;typeof s=="number"&&(r.duration=s,s=r,r=null),a=i.call(this,o?s:ol(s))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,g=l.keyframes,d=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,x=s.parent||xt,v=(ln(n)||oy(n)?fs(n[0]):"length"in s)?[n]:Jn(n),y,M,E,A,b,T,P,I;if(a._targets=v.length?Wp(v):cu("GSAP target "+n+" not found. https://greensock.com",!Vn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||h||Lc(c)||Lc(u)){if(s=a.vars,y=a.timeline=new wn({data:"nested",defaults:d||{},targets:x&&x.data==="nested"?x.vars.targets:v}),y.kill(),y.parent=y._dp=Zi(a),y._start=0,h||Lc(c)||Lc(u)){if(A=v.length,P=h&&wy(h),Bi(h))for(b in h)~zy.indexOf(b)&&(I||(I={}),I[b]=h[b]);for(M=0;M<A;M++)E=fu(s,By),E.stagger=0,_&&(E.yoyoEase=_),I&&zr(E,I),T=v[M],E.duration=+ll(c,Zi(a),M,T,v),E.delay=(+ll(u,Zi(a),M,T,v)||0)-a._delay,!h&&A===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),y.to(T,E,P?P(M,T,v):0),y._ease=$e.none;y.duration()?c=u=0:a.timeline=0}else if(g){ol(ti(y.vars.defaults,{ease:"none"})),y._ease=Ur(g.ease||s.ease||"none");var $=0,N,D,O;if(ln(g))g.forEach(function(Y){return y.to(v,Y,">")}),y.duration();else{E={};for(b in g)b==="ease"||b==="easeEach"||VI(b,g[b],E,g.easeEach);for(b in E)for(N=E[b].sort(function(Y,j){return Y.t-j.t}),$=0,M=0;M<N.length;M++)D=N[M],O={ease:D.e,duration:(D.t-(M?N[M-1].t:0))/100*c},O[b]=D.v,y.to(v,O,$),$+=O.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return p===!0&&!Fp&&(Fs=Zi(a),xt.killTweensOf(v),Fs=0),Ni(x,Zi(a),r),s.reversed&&a.reverse(),s.paused&&a.paused(!0),(f||!c&&!g&&a._start===Yt(x._time)&&Tn(f)&&vI(Zi(a))&&x.data!=="nested")&&(a._tTime=-lt,a.render(Math.max(0,-u)||0)),m&&yy(Zi(a),m),a}var t=e.prototype;return t.render=function(s,r,o){var a=this._time,l=this._tDur,c=this._dur,u=s<0,f=s>l-lt&&!u?l:s<lt?0:s,h,p,g,d,m,_,x,v,y;if(!c)yI(this,s,r,o);else if(f!==this._tTime||!s||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,v=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+s,r,o);if(h=Yt(f%d),f===l?(g=this._repeat,h=c):(g=~~(f/d),g&&g===f/d&&(h=c,g--),h>c&&(h=c)),_=this._yoyo&&g&1,_&&(y=this._yEase,h=c-h),m=sa(this._tTime,d),h===a&&!o&&this._initted)return this._tTime=f,this;g!==m&&(v&&this._yEase&&Oy(v,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=o=1,this.render(Yt(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(by(this,u?s:h,o,r,f))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(s,r,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(h/c),this._from&&(this.ratio=x=1-x),h&&!a&&!r&&!g&&(Qn(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(x,p.d),p=p._next;v&&v.render(s<0?s:!h&&_?-lt:v._dur*v._ease(h/this._dur),r,o)||this._startAt&&(this._zTime=s),this._onUpdate&&!r&&(u&&Md(this,s,r,o),Qn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&Qn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Md(this,s,!0,!0),(s||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Zs(this,1),!r&&!(u&&!a)&&(f||a||_)&&(Qn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),i.prototype.invalidate.call(this,s)},t.resetTo=function(s,r,o,a){Al||zn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Xp(this,l),c=this._ease(l/this._dur),zI(this,s,r,o,a,c,l)?this.resetTo(s,r,o,a):(Tf(this,0),this.parent||vy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,r){if(r===void 0&&(r="all"),!s&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?$a(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(s,r,Fs&&Fs.vars.overwrite!==!0)._first||$a(this),this.parent&&o!==this.timeline.totalDuration()&&ra(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=s?Jn(s):a,c=this._ptLookup,u=this._pt,f,h,p,g,d,m,_;if((!r||r==="all")&&gI(a,l))return r==="all"&&(this._pt=0),$a(this);for(f=this._op=this._op||[],r!=="all"&&(qt(r)&&(d={},En(r,function(x){return d[x]=1}),r=d),r=BI(a,r)),_=a.length;_--;)if(~l.indexOf(a[_])){h=c[_],r==="all"?(f[_]=r,g=h,p={}):(p=f[_]=f[_]||{},g=r);for(d in g)m=h&&h[d],m&&((!("kill"in m.d)||m.d.kill(d)===!0)&&Sf(this,m,"_pt"),delete h[d]),p!=="all"&&(p[d]=1)}return this._initted&&!this._pt&&u&&$a(this),this},e.to=function(s,r){return new e(s,r,arguments[2])},e.from=function(s,r){return al(1,arguments)},e.delayedCall=function(s,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(s,r,o){return al(2,arguments)},e.set=function(s,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(s,r)},e.killTweensOf=function(s,r,o){return xt.killTweensOf(s,r,o)},e}(aa);ti(Dt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});En("staggerTo,staggerFrom,staggerFromTo",function(i){Dt[i]=function(){var e=new wn,t=wd.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var qp=function(e,t,n){return e[t]=n},Vy=function(e,t,n){return e[t](n)},GI=function(e,t,n,s){return e[t](s.fp,n)},HI=function(e,t,n){return e.setAttribute(t,n)},$p=function(e,t){return Mt(e[t])?Vy:kp(e[t])&&e.setAttribute?HI:qp},Gy=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},WI=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Hy=function(e,t){var n=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;n;)s=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+s,n=n._next;s+=t.c}t.set(t.t,t.p,s,t)},Yp=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},jI=function(e,t,n,s){for(var r=this._pt,o;r;)o=r._next,r.p===s&&r.modifier(e,t,n),r=o},XI=function(e){for(var t=this._pt,n,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?Sf(this,t,"_pt"):t.dep||(n=1),t=s;return!n},qI=function(e,t,n,s){s.mSet(e,t,s.m.call(s.tween,n,s.mt),s)},Wy=function(e){for(var t=e._pt,n,s,r,o;t;){for(n=t._next,s=r;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:o)?t._prev._next=t:r=t,(t._next=s)?s._prev=t:o=t,t=n}e._pt=r},An=function(){function i(t,n,s,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=s,this.r=a||Gy,this.d=l||this,this.set=c||qp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,s,r){this.mSet=this.mSet||this.set,this.set=qI,this.m=n,this.mt=r,this.tween=s},i}();En(Hp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Gp[i]=1});Hn.TweenMax=Hn.TweenLite=Dt;Hn.TimelineLite=Hn.TimelineMax=wn;xt=new wn({sortChildren:!1,defaults:ia,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Vn.stringFilter=Dy;var la=[],Wc={},$I=[],f_=0,Ch=function(e){return(Wc[e]||$I).map(function(t){return t()})},Cd=function(){var e=Date.now(),t=[];e-f_>2&&(Ch("matchMediaInit"),la.forEach(function(n){var s=n.queries,r=n.conditions,o,a,l,c;for(a in s)o=$n.matchMedia(s[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Ch("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),f_=e,Ch("matchMedia"))},jy=function(){function i(t,n){this.selector=n&&Td(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=i.prototype;return e.add=function(n,s,r){Mt(n)&&(r=s,s=n,n=Mt);var o=this,a=function(){var c=Lt,u=o.selector,f;return c&&c!==o&&c.data.push(o),r&&(o.selector=Td(r)),Lt=o,f=s.apply(o,arguments),Mt(f)&&o._r.push(f),Lt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Mt?a(o):n?o[n]=a:a},e.ignore=function(n){var s=Lt;Lt=null,n(this),Lt=s},e.getTweens=function(){var n=[];return this.data.forEach(function(s){return s instanceof i?n.push.apply(n,s.getTweens()):s instanceof Dt&&!(s.parent&&s.parent.data==="nested")&&n.push(s)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,s){var r=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof aa)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),s){var a=la.indexOf(this);~a&&la.splice(a,1)}},e.revert=function(n){this.kill(n||{})},i}(),YI=function(){function i(t){this.contexts=[],this.scope=t}var e=i.prototype;return e.add=function(n,s,r){Bi(n)||(n={matches:n});var o=new jy(0,r||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),s=o.add("onMatch",s),o.queries=n;for(c in n)c==="all"?u=1:(l=$n.matchMedia(n[c]),l&&(la.indexOf(o)<0&&la.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Cd):l.addEventListener("change",Cd)));return u&&s(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(s){return s.kill(n,!0)})},i}(),du={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(s){return Ly(s)})},timeline:function(e){return new wn(e)},getTweensOf:function(e,t){return xt.getTweensOf(e,t)},getProperty:function(e,t,n,s){qt(e)&&(e=Jn(e)[0]);var r=Nr(e||{}).get,o=n?_y:gy;return n==="native"&&(n=""),e&&(t?o((kn[t]&&kn[t].get||r)(e,t,n,s)):function(a,l,c){return o((kn[a]&&kn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Jn(e),e.length>1){var s=e.map(function(u){return Rn.quickSetter(u,t,n)}),r=s.length;return function(u){for(var f=r;f--;)s[f](u)}}e=e[0]||{};var o=kn[t],a=Nr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;xo._pt=0,f.init(e,n?u+n:u,xo,0,[e]),f.render(1,f),xo._pt&&Yp(1,xo)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var s,r=Rn.to(e,zr((s={},s[t]="+=0.1",s.paused=!0,s),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ur(e.ease,ia.ease)),o_(ia,e||{})},config:function(e){return o_(Vn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,s=e.plugins,r=e.defaults,o=e.extendTimeline;(s||"").split(",").forEach(function(a){return a&&!kn[a]&&!Hn[a]&&cu(t+" effect requires "+a+" plugin.")}),wh[t]=function(a,l,c){return n(Jn(a),ti(l||{},r),c)},o&&(wn.prototype[t]=function(a,l,c){return this.add(wh[t](a,Bi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){$e[e]=Ur(t)},parseEase:function(e,t){return arguments.length?Ur(e,t):$e},getById:function(e){return xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new wn(e),s,r;for(n.smoothChildTiming=Tn(e.smoothChildTiming),xt.remove(n),n._dp=0,n._time=n._tTime=xt._time,s=xt._first;s;)r=s._next,(t||!(!s._dur&&s instanceof Dt&&s.vars.onComplete===s._targets[0]))&&Ni(n,s,s._start-s._delay),s=r;return Ni(xt,n,0),n},context:function(e,t){return e?new jy(e,t):Lt},matchMedia:function(e){return new YI(e)},matchMediaRefresh:function(){return la.forEach(function(e){var t=e.conditions,n,s;for(s in t)t[s]&&(t[s]=!1,n=1);n&&e.revert()})||Cd()},addEventListener:function(e,t){var n=Wc[e]||(Wc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Wc[e],s=n&&n.indexOf(t);s>=0&&n.splice(s,1)},utils:{wrap:CI,wrapYoyo:RI,distribute:wy,random:Ey,snap:Ty,normalize:AI,getUnit:rn,clamp:SI,splitColor:Py,toArray:Jn,selector:Td,mapRange:Cy,pipe:TI,unitize:EI,interpolate:LI,shuffle:Sy},install:fy,effects:wh,ticker:zn,updateRoot:wn.updateRoot,plugins:kn,globalTimeline:xt,core:{PropTween:An,globals:hy,Tween:Dt,Timeline:wn,Animation:aa,getCache:Nr,_removeLinkedListItem:Sf,reverting:function(){return an},context:function(e){return e&&Lt&&(Lt.data.push(e),e._ctx=Lt),Lt},suppressOverwrites:function(e){return Fp=e}}};En("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return du[i]=Dt[i]});zn.add(wn.updateRoot);xo=du.to({},{duration:0});var KI=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ZI=function(e,t){var n=e._targets,s,r,o;for(s in t)for(r=n.length;r--;)o=e._ptLookup[r][s],o&&(o=o.d)&&(o._pt&&(o=KI(o,s)),o&&o.modifier&&o.modifier(t[s],e,n[r],s))},Rh=function(e,t){return{name:e,rawVars:1,init:function(s,r,o){o._onInit=function(a){var l,c;if(qt(r)&&(l={},En(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}ZI(a,r)}}}},Rn=du.registerPlugin({name:"attr",init:function(e,t,n,s,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],s,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)an?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Rh("roundProps",Ed),Rh("modifiers"),Rh("snap",Ty))||du;Dt.version=wn.version=Rn.version="3.11.5";uy=1;zp()&&oa();$e.Power0;$e.Power1;$e.Power2;$e.Power3;$e.Power4;$e.Linear;$e.Quad;$e.Cubic;$e.Quart;$e.Quint;$e.Strong;$e.Elastic;$e.Back;$e.SteppedEase;$e.Bounce;$e.Sine;$e.Expo;$e.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var h_,ks,Io,Kp,Sr,d_,Zp,JI=function(){return typeof window<"u"},hs={},gr=180/Math.PI,Do=Math.PI/180,ao=Math.atan2,p_=1e8,Jp=/([A-Z])/g,QI=/(left|right|width|margin|padding|x)/i,eD=/[\s,\(]\S/,Oi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Rd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},tD=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},nD=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},iD=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Xy=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},qy=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},sD=function(e,t,n){return e.style[t]=n},rD=function(e,t,n){return e.style.setProperty(t,n)},oD=function(e,t,n){return e._gsap[t]=n},aD=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},lD=function(e,t,n,s,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},cD=function(e,t,n,s,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},yt="transform",xi=yt+"Origin",uD=function i(e,t){var n=this,s=this.target,r=s.style;if(e in hs){if(this.tfm=this.tfm||{},e!=="transform")e=Oi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Ji(s,o)}):this.tfm[e]=s._gsap.x?s._gsap[e]:Ji(s,e);else return Oi.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(yt)>=0)return;s._gsap.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(xi,t,"")),e=yt}(r||t)&&this.props.push(e,t,r[e])},$y=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},fD=function(){var e=this.props,t=this.target,n=t.style,s=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Jp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)s[o]=this.tfm[o];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Zp(),(!r||!r.isStart)&&!n[yt]&&($y(n),s.uncache=1)}},Yy=function(e,t){var n={target:e,props:[],revert:fD,save:uD};return e._gsap||Rn.core.getCache(e),t&&t.split(",").forEach(function(s){return n.save(s)}),n},Ky,Ld=function(e,t){var n=ks.createElementNS?ks.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ks.createElement(e);return n.style?n:ks.createElement(e)},Fi=function i(e,t,n){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(Jp,"-$1").toLowerCase())||s.getPropertyValue(t)||!n&&i(e,ca(t)||t,1)||""},m_="O,Moz,ms,Ms,Webkit".split(","),ca=function(e,t,n){var s=t||Sr,r=s.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(m_[o]+e in r););return o<0?null:(o===3?"ms":o>=0?m_[o]:"")+e},Pd=function(){JI()&&window.document&&(h_=window,ks=h_.document,Io=ks.documentElement,Sr=Ld("div")||{style:{}},Ld("div"),yt=ca(yt),xi=yt+"Origin",Sr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ky=!!ca("perspective"),Zp=Rn.core.reverting,Kp=1)},Lh=function i(e){var t=Ld("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,s=this.nextSibling,r=this.style.cssText,o;if(Io.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(s?n.insertBefore(this,s):n.appendChild(this)),Io.removeChild(t),this.style.cssText=r,o},g_=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Zy=function(e){var t;try{t=e.getBBox()}catch{t=Lh.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Lh||(t=Lh.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+g_(e,["x","cx","x1"])||0,y:+g_(e,["y","cy","y1"])||0,width:0,height:0}:t},Jy=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Zy(e))},Cl=function(e,t){if(t){var n=e.style;t in hs&&t!==xi&&(t=yt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Jp,"-$1").toLowerCase())):n.removeAttribute(t)}},zs=function(e,t,n,s,r,o){var a=new An(e._pt,t,n,0,1,o?qy:Xy);return e._pt=a,a.b=s,a.e=r,e._props.push(n),a},__={deg:1,rad:1,turn:1},hD={grid:1,flex:1},Js=function i(e,t,n,s){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Sr.style,l=QI.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=s==="px",p=s==="%",g,d,m,_;return s===o||!r||__[s]||__[o]?r:(o!=="px"&&!h&&(r=i(e,t,n,"px")),_=e.getCTM&&Jy(e),(p||o==="%")&&(hs[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],Tt(p?r/g*f:r/100*g)):(a[l?"width":"height"]=f+(h?o:s),d=~t.indexOf("adius")||s==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===ks||!d.appendChild)&&(d=ks.body),m=d._gsap,m&&p&&m.width&&l&&m.time===zn.time&&!m.uncache?Tt(r/m.width*f):((p||o==="%")&&!hD[Fi(d,"display")]&&(a.position=Fi(e,"position")),d===e&&(a.position="static"),d.appendChild(Sr),g=Sr[u],d.removeChild(Sr),a.position="absolute",l&&p&&(m=Nr(d),m.time=zn.time,m.width=d[u]),Tt(h?g*r/f:g&&r?f/g*r:0))))},Ji=function(e,t,n,s){var r;return Kp||Pd(),t in Oi&&t!=="transform"&&(t=Oi[t],~t.indexOf(",")&&(t=t.split(",")[0])),hs[t]&&t!=="transform"?(r=Ll(e,s),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:mu(Fi(e,xi))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||s||~(r+"").indexOf("calc("))&&(r=pu[t]&&pu[t](e,t,n)||Fi(e,t)||py(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Js(e,t,r,n)+n:r},dD=function(e,t,n,s){if(!n||n==="none"){var r=ca(t,e,1),o=r&&Fi(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=Fi(e,"borderTopColor"))}var a=new An(this._pt,e.style,t,0,1,Hy),l=0,c=0,u,f,h,p,g,d,m,_,x,v,y,M;if(a.b=n,a.e=s,n+="",s+="",s==="auto"&&(e.style[t]=s,s=Fi(e,t)||s,e.style[t]=n),u=[n,s],Dy(u),n=u[0],s=u[1],h=n.match(vo)||[],M=s.match(vo)||[],M.length){for(;f=vo.exec(s);)m=f[0],x=s.substring(l,f.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),m!==(d=h[c++]||"")&&(p=parseFloat(d)||0,y=d.substr((p+"").length),m.charAt(1)==="="&&(m=Po(p,m)+y),_=parseFloat(m),v=m.substr((_+"").length),l=vo.lastIndex-v.length,v||(v=v||Vn.units[t]||y,l===s.length&&(s+=v,a.e+=v)),y!==v&&(p=Js(e,t,d,v)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:p,c:_-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<s.length?s.substring(l,s.length):""}else a.r=t==="display"&&s==="none"?qy:Xy;return ly.test(s)&&(a.e=0),this._pt=a,a},v_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},pD=function(e){var t=e.split(" "),n=t[0],s=t[1]||"50%";return(n==="top"||n==="bottom"||s==="left"||s==="right")&&(e=n,n=s,s=e),t[0]=v_[n]||n,t[1]=v_[s]||s,t.join(" ")},mD=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,s=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)s.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],hs[a]&&(l=1,a=a==="transformOrigin"?xi:yt),Cl(n,a);l&&(Cl(n,yt),o&&(o.svg&&n.removeAttribute("transform"),Ll(n,1),o.uncache=1,$y(s)))}},pu={clearProps:function(e,t,n,s,r){if(r.data!=="isFromStart"){var o=e._pt=new An(e._pt,t,n,0,0,mD);return o.u=s,o.pr=-10,o.tween=r,e._props.push(n),1}}},Rl=[1,0,0,1,0,0],Qy={},eb=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},x_=function(e){var t=Fi(e,yt);return eb(t)?Rl:t.substr(7).match(ay).map(Tt)},Qp=function(e,t){var n=e._gsap||Nr(e),s=e.style,r=x_(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Rl:r):(r===Rl&&!e.offsetParent&&e!==Io&&!n.svg&&(l=s.display,s.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Io.appendChild(e)),r=x_(e),l?s.display=l:Cl(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Io.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Id=function(e,t,n,s,r,o){var a=e._gsap,l=r||Qp(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,p=l[0],g=l[1],d=l[2],m=l[3],_=l[4],x=l[5],v=t.split(" "),y=parseFloat(v[0])||0,M=parseFloat(v[1])||0,E,A,b,T;n?l!==Rl&&(A=p*m-g*d)&&(b=y*(m/A)+M*(-d/A)+(d*x-m*_)/A,T=y*(-g/A)+M*(p/A)-(p*x-g*_)/A,y=b,M=T):(E=Zy(e),y=E.x+(~v[0].indexOf("%")?y/100*E.width:y),M=E.y+(~(v[1]||v[0]).indexOf("%")?M/100*E.height:M)),s||s!==!1&&a.smooth?(_=y-c,x=M-u,a.xOffset=f+(_*p+x*d)-_,a.yOffset=h+(_*g+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=M,a.smooth=!!s,a.origin=t,a.originIsAbsolute=!!n,e.style[xi]="0px 0px",o&&(zs(o,a,"xOrigin",c,y),zs(o,a,"yOrigin",u,M),zs(o,a,"xOffset",f,a.xOffset),zs(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},Ll=function(e,t){var n=e._gsap||new Fy(e);if("x"in n&&!t&&!n.uncache)return n;var s=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Fi(e,xi)||"0",u,f,h,p,g,d,m,_,x,v,y,M,E,A,b,T,P,I,$,N,D,O,Y,j,V,re,he,be,X,ue,pe,H;return u=f=h=d=m=_=x=v=y=0,p=g=1,n.svg=!!(e.getCTM&&Jy(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(s[yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[yt]!=="none"?l[yt]:"")),s.scale=s.rotate=s.translate="none"),A=Qp(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),Id(e,j||c,!!j||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,E=n.yOrigin||0,A!==Rl&&(I=A[0],$=A[1],N=A[2],D=A[3],u=O=A[4],f=Y=A[5],A.length===6?(p=Math.sqrt(I*I+$*$),g=Math.sqrt(D*D+N*N),d=I||$?ao($,I)*gr:0,x=N||D?ao(N,D)*gr+d:0,x&&(g*=Math.abs(Math.cos(x*Do))),n.svg&&(u-=M-(M*I+E*N),f-=E-(M*$+E*D))):(H=A[6],ue=A[7],he=A[8],be=A[9],X=A[10],pe=A[11],u=A[12],f=A[13],h=A[14],b=ao(H,X),m=b*gr,b&&(T=Math.cos(-b),P=Math.sin(-b),j=O*T+he*P,V=Y*T+be*P,re=H*T+X*P,he=O*-P+he*T,be=Y*-P+be*T,X=H*-P+X*T,pe=ue*-P+pe*T,O=j,Y=V,H=re),b=ao(-N,X),_=b*gr,b&&(T=Math.cos(-b),P=Math.sin(-b),j=I*T-he*P,V=$*T-be*P,re=N*T-X*P,pe=D*P+pe*T,I=j,$=V,N=re),b=ao($,I),d=b*gr,b&&(T=Math.cos(b),P=Math.sin(b),j=I*T+$*P,V=O*T+Y*P,$=$*T-I*P,Y=Y*T-O*P,I=j,O=V),m&&Math.abs(m)+Math.abs(d)>359.9&&(m=d=0,_=180-_),p=Tt(Math.sqrt(I*I+$*$+N*N)),g=Tt(Math.sqrt(Y*Y+H*H)),b=ao(O,Y),x=Math.abs(b)>2e-4?b*gr:0,y=pe?1/(pe<0?-pe:pe):0),n.svg&&(j=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!eb(Fi(e,yt)),j&&e.setAttribute("transform",j))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(p*=-1,x+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Tt(p),n.scaleY=Tt(g),n.rotation=Tt(d)+a,n.rotationX=Tt(m)+a,n.rotationY=Tt(_)+a,n.skewX=x+a,n.skewY=v+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(s[xi]=mu(c)),n.xOffset=n.yOffset=0,n.force3D=Vn.force3D,n.renderTransform=n.svg?_D:Ky?tb:gD,n.uncache=0,n},mu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ph=function(e,t,n){var s=rn(t);return Tt(parseFloat(t)+parseFloat(Js(e,"x",n+"px",s)))+s},gD=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,tb(e,t)},fr="0deg",Ga="0px",hr=") ",tb=function(e,t){var n=t||this,s=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,p=n.skewY,g=n.scaleX,d=n.scaleY,m=n.transformPerspective,_=n.force3D,x=n.target,v=n.zOrigin,y="",M=_==="auto"&&e&&e!==1||_===!0;if(v&&(f!==fr||u!==fr)){var E=parseFloat(u)*Do,A=Math.sin(E),b=Math.cos(E),T;E=parseFloat(f)*Do,T=Math.cos(E),o=Ph(x,o,A*T*-v),a=Ph(x,a,-Math.sin(E)*-v),l=Ph(x,l,b*T*-v+v)}m!==Ga&&(y+="perspective("+m+hr),(s||r)&&(y+="translate("+s+"%, "+r+"%) "),(M||o!==Ga||a!==Ga||l!==Ga)&&(y+=l!==Ga||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+hr),c!==fr&&(y+="rotate("+c+hr),u!==fr&&(y+="rotateY("+u+hr),f!==fr&&(y+="rotateX("+f+hr),(h!==fr||p!==fr)&&(y+="skew("+h+", "+p+hr),(g!==1||d!==1)&&(y+="scale("+g+", "+d+hr),x.style[yt]=y||"translate(0, 0)"},_D=function(e,t){var n=t||this,s=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,p=n.target,g=n.xOrigin,d=n.yOrigin,m=n.xOffset,_=n.yOffset,x=n.forceCSS,v=parseFloat(o),y=parseFloat(a),M,E,A,b,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Do,c*=Do,M=Math.cos(l)*f,E=Math.sin(l)*f,A=Math.sin(l-c)*-h,b=Math.cos(l-c)*h,c&&(u*=Do,T=Math.tan(c-u),T=Math.sqrt(1+T*T),A*=T,b*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),M*=T,E*=T)),M=Tt(M),E=Tt(E),A=Tt(A),b=Tt(b)):(M=f,b=h,E=A=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Js(p,"x",o,"px"),y=Js(p,"y",a,"px")),(g||d||m||_)&&(v=Tt(v+g-(g*M+d*A)+m),y=Tt(y+d-(g*E+d*b)+_)),(s||r)&&(T=p.getBBox(),v=Tt(v+s/100*T.width),y=Tt(y+r/100*T.height)),T="matrix("+M+","+E+","+A+","+b+","+v+","+y+")",p.setAttribute("transform",T),x&&(p.style[yt]=T)},vD=function(e,t,n,s,r){var o=360,a=qt(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?gr:1),c=l-s,u=s+c+"deg",f,h;return a&&(f=r.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*p_)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*p_)%o-~~(c/o)*o)),e._pt=h=new An(e._pt,t,n,s,c,tD),h.e=u,h.u="deg",e._props.push(n),h},y_=function(e,t){for(var n in t)e[n]=t[n];return e},xD=function(e,t,n){var s=y_({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,p,g;s.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[yt]=t,a=Ll(n,1),Cl(n,yt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[yt],o[yt]=t,a=Ll(n,1),o[yt]=c);for(l in hs)c=s[l],u=a[l],c!==u&&r.indexOf(l)<0&&(p=rn(c),g=rn(u),f=p!==g?Js(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new An(e._pt,a,l,f,h-f,Rd),e._pt.u=g||0,e._props.push(l));y_(a,s)};En("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",s="Bottom",r="Left",o=(e<3?[t,n,s,r]:[t+r,t+n,s+n,s+r]).map(function(a){return e<2?i+a:"border"+a+i});pu[e>1?"border"+i:i]=function(a,l,c,u,f){var h,p;if(arguments.length<4)return h=o.map(function(g){return Ji(a,g,c)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(u+"").split(" "),p={},o.forEach(function(g,d){return p[g]=h[d]=h[d]||h[(d-1)/2|0]}),a.init(l,p,f)}});var nb={name:"css",register:Pd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,s,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,p,g,d,m,_,x,v,y,M,E,A,b;Kp||Pd(),this.styles=this.styles||Yy(e),b=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(kn[d]&&ky(d,t,n,s,e,r)))){if(p=typeof u,g=pu[d],p==="function"&&(u=u.call(n,s,e,r),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=El(u)),g)g(this,e,d,u,n)&&(A=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",Xs.lastIndex=0,Xs.test(c)||(m=rn(c),_=rn(u)),_?m!==_&&(c=Js(e,d,c,_)+_):m&&(u+=m),this.add(a,"setProperty",c,u,s,r,0,0,d),o.push(d),b.push(d,0,a[d]);else if(p!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,s,e,r):l[d],qt(c)&&~c.indexOf("random(")&&(c=El(c)),rn(c+"")||(c+=Vn.units[d]||rn(Ji(e,d))||""),(c+"").charAt(1)==="="&&(c=Ji(e,d))):c=Ji(e,d),h=parseFloat(c),x=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),f=parseFloat(u),d in Oi&&(d==="autoAlpha"&&(h===1&&Ji(e,"visibility")==="hidden"&&f&&(h=0),b.push("visibility",0,a.visibility),zs(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),d!=="scale"&&d!=="transform"&&(d=Oi[d],~d.indexOf(",")&&(d=d.split(",")[0]))),v=d in hs,v){if(this.styles.save(d),y||(M=e._gsap,M.renderTransform&&!t.parseTransform||Ll(e,t.parseTransform),E=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new An(this._pt,a,yt,0,1,M.renderTransform,M,0,-1),y.dep=1),d==="scale")this._pt=new An(this._pt,M,"scaleY",M.scaleY,(x?Po(M.scaleY,x+f):f)-M.scaleY||0,Rd),this._pt.u=0,o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){b.push(xi,0,a[xi]),u=pD(u),M.svg?Id(e,u,0,E,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==M.zOrigin&&zs(this,M,"zOrigin",M.zOrigin,_),zs(this,a,d,mu(c),mu(u)));continue}else if(d==="svgOrigin"){Id(e,u,1,E,0,this);continue}else if(d in Qy){vD(this,M,d,h,x?Po(h,x+u):u);continue}else if(d==="smoothOrigin"){zs(this,M,"smooth",M.smooth,u);continue}else if(d==="force3D"){M[d]=u;continue}else if(d==="transform"){xD(this,u,e);continue}}else d in a||(d=ca(d)||d);if(v||(f||f===0)&&(h||h===0)&&!eD.test(u)&&d in a)m=(c+"").substr((h+"").length),f||(f=0),_=rn(u)||(d in Vn.units?Vn.units[d]:m),m!==_&&(h=Js(e,d,c,_)),this._pt=new An(this._pt,v?M:a,d,h,(x?Po(h,x+f):f)-h,!v&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?iD:Rd),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=nD);else if(d in a)dD.call(this,e,d,c,x?x+u:u);else if(d in e)this.add(e,d,c||e[d],x?x+u:u,s,r);else if(d!=="parseTransform"){Vp(d,u);continue}v||(d in a?b.push(d,0,a[d]):b.push(d,1,c||e[d])),o.push(d)}}A&&Wy(this)},render:function(e,t){if(t.tween._time||!Zp())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ji,aliases:Oi,getSetter:function(e,t,n){var s=Oi[t];return s&&s.indexOf(",")<0&&(t=s),t in hs&&t!==xi&&(e._gsap.x||Ji(e,"x"))?n&&d_===n?t==="scale"?aD:oD:(d_=n||{})&&(t==="scale"?lD:cD):e.style&&!kp(e.style[t])?sD:~t.indexOf("-")?rD:$p(e,t)},core:{_removeProperty:Cl,_getMatrix:Qp}};Rn.utils.checkPrefix=ca;Rn.core.getStyleSaver=Yy;(function(i,e,t,n){var s=En(i+","+e+","+t,function(r){hs[r]=1});En(e,function(r){Vn.units[r]="deg",Qy[r]=1}),Oi[s[13]]=i+","+e,En(n,function(r){var o=r.split(":");Oi[o[1]]=s[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");En("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Vn.units[i]="px"});Rn.registerPlugin(nb);var Yl=Rn.registerPlugin(nb)||Rn;Yl.core.Tween;const yD=["#000000","#ffffff"],bD=["#ffffff","#000000"],MD=["#418fde","#ffd100","#ef3340"],SD=["#007a36","#000000","#d32011"],wD=["#cc092f","#000000","#ffcb00"],TD=["#012169","#ffffff","#c8102e"],ED=["#0053a5","#ffce00","#d21034"],AD=["#ff0000","#000000"],CD=["#d0103a","#0018a8","#fedf00"],RD=["#ff0000","#00732f","#000000"],LD=["#74acdf","#ffffff","#f6b40e"],PD=["#d90012","#f2a800","#0033a0"],ID=["#000066","#ffffff","#bd1021"],DD=["#3a7dce","#ffffff"],ND=["#002395","#ffffff","#ed2939"],OD=["#ce1126","#000000","#0072c6"],UD=["#012169","#ffffff","#e4002b"],FD=["#ed2939","#ffffff"],kD=["#00b9e4","#3f9c35","#ed2939"],zD=["#ffffff","#1eb53a","#ce1126"],BD=["#000000","#fae042","#ed2939"],VD=["#008751","#fcd116","#e8112d"],GD=["#012a87","#ffffff","#f9d90f"],HD=["#009e49","#ef2b2d","#fcd116"],WD=["#006a4e","#f42a41"],jD=["#ffffff","#d62612","#00966e"],XD=["#ce1126","#ffffff"],qD=["#00778b","#000000","#ffc72c"],$D=["#002395","#fecb00","#ffffff"],YD=["#ffffff","#eace24","#1353b4"],KD=["#ce1720","#007c30","#ffffff"],ZD=["#171696","#d90f19","#ffffff"],JD=["#c8102e","#ffffff","#012169"],QD=["#d52b1e","#007934","#f9e300"],eN=["#009b3a","#fedf00","#002776"],tN=["#00267f","#ffc726","#000000"],nN=["#f7e017","#ffffff","#000000"],iN=["#ffd520","#ff4e12","#ffffff"],sN=["#ef2b2d","#002868","#ffffff"],rN=["#6da9d2","#000000","#ffffff"],oN=["#ffce00","#ffffff","#289728"],aN=["#ff0000","#ffffff"],lN=["#008000","#ffe000"],cN=["#ff0000","#ffffff"],uN=["#d52b1e","#ffffff","#0039a6"],fN=["#de2910","#ffde00"],hN=["#ffffff","#f77f00","#009e60"],dN=["#fcd116","#007a5e","#ce1126"],pN=["#007fff","#ce1021","#f7d618"],mN=["#009543","#dc241f","#fbde4a"],gN=["#012169","#ffffff","#c8102e"],_N=["#fcd116","#003893","#ce1126"],vN=["#ffc61e","#3a75c4","#3d8e33"],xN=["#003893","#ffffff","#cf2027"],yN=["#ffffff","#002b7f","#ce1126"],bN=["#002a8f","#ffffff","#cf142b"],MN=["#002b7f","#f9e814","#ffffff"],SN=["#0021ad","#1c8a42","#ffc639"],wN=["#012169","#ffffff","#c8102e"],TN=["#ffffff","#d57800","#4e5b31"],EN=["#ffffff","#d7141a","#11457e"],AN=["#000000","#ffce00","#dd0000"],CN=["#12ad2b","#6ab2e7","#ffffff"],RN=["#006b3f","#fcd116","#ffffff"],LN=["#c60c30","#ffffff"],PN=["#ce1126","#002d62","#ffffff"],IN=["#ffffff","#006233","#d21034"],DN=["#ffdd00","#ed1c24","#034ea2"],NN=["#ce1126","#000000","#ffffff"],ON=["#ea0437","#12ad2b","#4189dd"],UN=["#000000","#007a3d","#ffffff"],FN=["#c60b1e","#ffc400","#ad1519"],kN=["#ffffff","#0072ce","#000000"],zN=["#da121a","#078930","#fcdd09"],BN=["#ffffff","#003580"],VN=["#69b3e7","#c8102e","#ffffff"],GN=["#012169","#ffffff","#c8102e"],HN=["#ffffff","#002395","#ed2939"],WN=["#ffffff","#ed2939","#0065bd"],jN=["#75b2dd","#ffffff"],XN=["#009e60","#fcd116","#3a75c4"],qN=["#c8102e","#ffffff","#012169"],$N=["#ffffff","#ff0000"],YN=["#ffffff","#e8112d","#f9dd16"],KN=["#ce1126","#006b3f","#fcd116"],ZN=["#ffffff","#da000c","#000000"],JN=["#fcd116","#ce1126","#009460"],QN=["#000000","#002488","#fcdd09"],eO=["#ce1126","#3a7728","#0c1c8c"],tO=["#fcd116","#009e49","#ce1126"],nO=["#3e9a00","#e32118","#ffffff"],iO=["#0d5eaf","#ffffff"],sO=["#ce1126","#fcd116","#007a5e"],rO=["#d00c33","#ffffff"],oO=["#4997d0","#ffffff"],aO=["#078930","#fcdd09","#da121a"],lO=["#00297b","#c62139","#92dbfc"],cO=["#009e49","#ce1126","#fcd116"],uO=["#de2910","#ffffff"],fO=["#00008b","#ffffff","#ff0000"],hO=["#0073cf","#ffffff"],dO=["#ff0000","#171796","#ffffff"],pO=["#00209f","#d21034","#ffffff"],mO=["#cd2a3e","#436f4d","#ffffff"],gO=["#ff0000","#ffffff"],_O=["#cf142b","#ffffff","#000000"],vO=["#ff9933","#128807","#ffffff"],xO=["#ffffff","#012169","#c8102e"],yO=["#169b62","#ffffff","#ff883e"],bO=["#ffffff","#da0000","#239f40"],MO=["#ce1126","#000000","#ffffff"],SO=["#02529c","#dc1e35","#ffffff"],wO=["#ffffff","#0038b8"],TO=["#ffffff","#009246","#ce2b37"],EO=["#fed100","#009b3a","#000000"],AO=["#ffffff","#ce0f25"],CO=["#000000","#007a3d","#ce1126"],RO=["#ffffff","#bc002d"],LO=["#00afca","#fec50c"],PO=["#000000","#bb0000","#006600"],IO=["#ff0000","#ffff00"],DO=["#032ea1","#e00025","#ffffff"],NO=["#c81010","#ffffff","#183070"],OO=["#000000","#009e49","#ce1126"],UO=["#ffffff","#000000","#cd2e3a"],FO=["#007a3d","#ce1126","#ffffff"],kO=["#ce1126","#002868","#ffffff"],zO=["#ed1c24","#ffffff","#00a651"],BO=["#bf0a30","#ffffff","#002868"],VO=["#000000","#e70013","#239e46"],GO=["#66ccff","#fcd116","#000000"],HO=["#ce1126","#002b7f","#ffd83d"],WO=["#ffbe29","#8d153a","#00534e"],jO=["#ffffff","#00209f","#009543"],XO=["#fdb913","#c1272d","#006a44"],qO=["#ed2939","#00a1de","#ffffff"],$O=["#9e3039","#ffffff"],YO=["#0f7562","#ffffff","#ffde23"],KO=["#ffffff","#002395","#ed2939"],ZO=["#c1272d","#006233"],JO=["#ce1126","#ffffff"],QO=["#cc092f","#0046ae","#ffd200"],eU=["#fc3d32","#007e3a","#ffffff"],tU=["#d21034","#007e3a","#ffffff"],nU=["#006847","#ce1126","#ffffff"],iU=["#003893","#ffffff","#dd7500"],sU=["#ce2028","#f9d616"],rU=["#fcd116","#14b53a","#ce1126"],oU=["#cf142b","#ffffff","#cccccc"],aU=["#fecb00","#ea2839","#34b233"],lU=["#c40308","#d3ae3b","#d4af3a"],cU=["#da2032","#0066b3","#ffd900"],uU=["#0071bc","#ffffff","#8c8a8c"],fU=["#fce100","#007168","#000000"],hU=["#006233","#cd2a3e","#ffc400"],dU=["#012169","#c8102e","#ffffff"],pU=["#21428e","#ffffff"],mU=["#ea2839","#1a206d","#ffd500"],gU=["#ce1126","#339e35","#000000"],_U=["#ffffff","#cc0000","#000066"],vU=["#ffffff","#dfdfdf","#d42e12"],xU=["#009543","#003580","#d21034"],yU=["#009543","#0035ad","#ed4135"],bU=["#e05206","#0db02b","#ffffff"],MU=["#007934","#ffffff"],SU=["#008751","#ffffff"],wU=["#0067c6","#ffffff"],TU=["#fedd00","#ffffff","#c8102e"],EU=["#ae1c28","#21468b","#ffffff"],AU=["#ef2b2d","#002868","#ffffff"],CU=["#000000","#dc143c","#003893"],RU=["#002b7f","#ffc61e","#ffffff"],LU=["#012169","#c8102e","#ffffff"],PU=["#db161b","#ffffff","#008000"],IU=["#01411c","#ffffff"],DU=["#ffffff","#072357","#da121a"],NU=["#012169","#c8102e","#ffffff"],OU=["#d91023","#ffffff"],UU=["#ce1126","#0038a8","#ffffff"],FU=["#0099ff","#ffff00"],kU=["#000000","#ce1126","#fcd116"],zU=["#ffffff","#dc143c"],BU=["#ee0000","#ffffff","#0050f0"],VU=["#ed1c27","#024fa2","#ffffff"],GU=["#006600","#ff0000","#ffff00"],HU=["#d52b1e","#0038a8","#ffffff"],WU=["#000000","#007a3d","#ffffff"],jU=["#ce1126","#ffffff","#ff9c10"],XU=["#8d1b3d","#ffffff"],qU=["#3366ff","#ff0000","#ffff00"],$U=["#fcd116","#002b7f","#ce1126"],YU=["#ffffff","#d52b1e","#0039a6"],KU=["#00a1de","#fad201","#20603d"],ZU=["#006c35","#ffffff"],JU=["#d21034","#000000","#ffffff"],QU=["#00853f","#e31b23","#fdef42"],eF=["#ffffff","#ed2939"],tF=["#012169","#ffffff","#c8102e"],nF=["#012169","#c8102e","#ffffff"],iF=["#ef2b2d","#002868","#ffffff"],sF=["#215b33","#0051ba","#fcd116"],rF=["#1eb53a","#0072c6","#ffffff"],oF=["#0047ab","#ffffff"],aF=["#ffffff","#5eb6e4","#658d5c"],lF=["#4189dd","#ffffff"],cF=["#0092c8","#ffcf00","#0091c8"],uF=["#ffffff","#c6363c","#000000"],fF=["#000000","#078930","#0f47af"],hF=["#12ad2b","#ffce00","#d21034"],dF=["#377e3f","#b40a2d","#ffffff"],pF=["#ee1c25","#ffffff","#0b4ea2"],mF=["#ff0000","#005ce5","#ffffff"],gF=["#006aa7","#fecc00"],_F=["#3e5eb9","#b10c0c","#ffd900"],vF=["#dc171d","#012a87","#ffffff"],xF=["#d62828","#003f87","#007a3d"],yF=["#ce1126","#000000","#ffffff"],bF=["#002868","#ce1126","#ffffff"],MF=["#fecb00","#002664","#c60c30"],SF=["#006a4e","#ffce00","#d21034"],wF=["#a51931","#f4f5f8","#2d2a4a"],TF=["#ffffff","#cc0000","#006600"],EF=["#012169","#ffd100","#ffffff"],AF=["#00843d","#d22630","#ffc72c"],CF=["#dc241f","#000000","#ffc726"],RF=["#c10000","#ffffff"],LF=["#da1a35","#000000","#ffffff"],PF=["#e70013","#ffffff"],IF=["#e30a17","#ffffff"],DF=["#0095c8","#c8102e","#ffffff"],NF=["#fe0000","#000095","#ffffff"],OF=["#000000","#1eb53a","#00a3dd"],UF=["#fcdc04","#000000","#d90000"],FF=["#005bbb","#ffd500"],kF=["#b22234","#ffffff","#3c3b6e"],zF=["#ffffff","#0038a8","#7b3f00"],BF=["#b22234","#ffffff","#3c3b6e"],VF=["#ffffff","#1eb53a","#0099b5"],GF=["#ffe000","#ffffff","#cccccc"],HF=["#fcd022","#007c2e","#002674"],WF=["#ffcc00","#cf142b","#00247d"],jF=["#012169","#ffffff","#c8102e"],XF=["#ffffff","#f4c53d","#010002"],qF=["#da251d","#ffff00"],$F=["#009543","#d21034","#000000"],YF=["#ed2939","#ffffff","#002395"],KF=["#ce1126","#002b7f","#ffffff"],ZF=["#244aa5","#d0a650","#ffffff"],JF=["#ce1126","#000000","#ffffff"],QF=["#007749","#e03c31","#001489"],ek=["#198a00","#ef7d00","#000000"],tk=["#006400","#ffd200","#d40000"],dr={ALL:yD,BZH:bD,ABW:MD,AFG:SD,AGO:wD,AIA:TD,ALA:ED,ALB:AD,AND:CD,ARE:RD,ARG:LD,ARM:PD,ASM:ID,ATA:DD,ATF:ND,ATG:OD,AUS:UD,AUT:FD,AZE:kD,BDI:zD,BEL:BD,BEN:VD,BES:GD,BFA:HD,BGD:WD,BGR:jD,BHR:XD,BHS:qD,BIH:$D,BLM:YD,BLR:KD,BLZ:ZD,BMU:JD,BOL:QD,BRA:eN,BRB:tN,BRN:nN,BTN:iN,BVT:sN,BWA:rN,CAF:oN,CAN:aN,CCK:lN,CHE:cN,CHL:uN,CHN:fN,CIV:hN,CMR:dN,COD:pN,COG:mN,COK:gN,COL:_N,COM:vN,CPV:xN,CRI:yN,CUB:bN,CUW:MN,CXR:SN,CYM:wN,CYP:TN,CZE:EN,DEU:AN,DJI:CN,DMA:RN,DNK:LN,DOM:PN,DZA:IN,ECU:DN,EGY:NN,ERI:ON,ESH:UN,ESP:FN,EST:kN,ETH:zN,FIN:BN,FJI:VN,FLK:GN,FRA:HN,FRO:WN,FSM:jN,GAB:XN,GBR:qN,GEO:$N,GGY:YN,GHA:KN,GIB:ZN,GIN:JN,GLP:QN,GMB:eO,GNB:tO,GNQ:nO,GRC:iO,GRD:sO,GRL:rO,GTM:oO,GUF:aO,GUM:lO,GUY:cO,HKG:uO,HMD:fO,HND:hO,HRV:dO,HTI:pO,HUN:mO,IDN:gO,IMN:_O,IND:vO,IOT:xO,IRL:yO,IRN:bO,IRQ:MO,ISL:SO,ISR:wO,ITA:TO,JAM:EO,JEY:AO,JOR:CO,JPN:RO,KAZ:LO,KEN:PO,KGZ:IO,KHM:DO,KIR:NO,KNA:OO,KOR:UO,KWT:FO,LAO:kO,LBN:zO,LBR:BO,LBY:VO,LCA:GO,LIE:HO,LKA:WO,LSO:jO,LTU:XO,LUX:qO,LVA:$O,MAC:YO,MAF:KO,MAR:ZO,MCO:JO,MDA:QO,MDG:eU,MDV:tU,MEX:nU,MHL:iU,MKD:sU,MLI:rU,MLT:oU,MMR:aU,MNE:lU,MNG:cU,MNP:uU,MOZ:fU,MRT:hU,MSR:dU,MTQ:pU,MUS:mU,MWI:gU,MYS:_U,MYT:vU,NAM:xU,NCL:yU,NER:bU,NFK:MU,NGA:SU,NIC:wU,NIU:TU,NLD:EU,NOR:AU,NPL:CU,NRU:RU,NZL:LU,OMN:PU,PAK:IU,PAN:DU,PCN:NU,PER:OU,PHL:UU,PLW:FU,PNG:kU,POL:zU,PRI:BU,PRK:VU,PRT:GU,PRY:HU,PSE:WU,PYF:jU,QAT:XU,REU:qU,ROU:$U,RUS:YU,RWA:KU,SAU:ZU,SDN:JU,SEN:QU,SGP:eF,SGS:tF,SHN:nF,SJM:iF,SLB:sF,SLE:rF,SLV:oF,SMR:aF,SOM:lF,SPM:cF,SRB:uF,SSD:fF,STP:hF,SUR:dF,SVK:pF,SVN:mF,SWE:gF,SWZ:_F,SXM:vF,SYC:xF,SYR:yF,TCA:bF,TCD:MF,TGO:SF,THA:wF,TJK:TF,TKL:EF,TKM:AF,TLS:CF,TON:RF,TTO:LF,TUN:PF,TUR:IF,TUV:DF,TWN:NF,TZA:OF,UGA:UF,UKR:FF,UMI:kF,URY:zF,USA:BF,UZB:VF,VAT:GF,VCT:HF,VEN:WF,VGB:jF,VIR:XF,VNM:qF,VUT:$F,WLF:YF,WSM:KF,XKX:ZF,YEM:JF,ZAF:QF,ZMB:ek,ZWE:tk};function Dd(i,e,t=!1){e.mapping=t?su:iu;const n=new ed(i);n.compileEquirectangularShader();const s=n.fromEquirectangular(e).texture,r=s&&s.mapping===jl?s.image.height:null;if(r===null)return null;const o=Math.log2(r)-2,a=1/r,l=1/(3*Math.max(Math.pow(2,o),7*16));return s.userData={...s.userData,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:a,CUBEUV_MAX_MIP:o+"."},e.dispose(),n.dispose(),s}let nk=0;function St(i,e,t){const n=()=>{};return{c:++nk,shader:i,use:r=>{const o=r.material||r;return o[e]=i,o.needsUpdate=!0,r},unuse:n,clear:n}}const ik=`precision highp float;

uniform float uAoMapIntensity;
uniform bool uShadowOnly, uEmissiveOnly;
uniform vec3 uColor1, uColor2, uColor3, uLightPosition;
uniform sampler2D tAoMap, tNoise, tStaticShadows;

varying vec2 vUv, vUv2;
varying vec3 vEyeToSurfaceDir, vNormal, vPosition;
varying vec4 vShadowCoord;

#define cubeUV_minMipLevel 4.0
#define cubeUV_minTileSize 16.0

float getFace(vec3 direction) {
    vec3 absDirection = abs(direction);
    float face = -1.0;
    if(absDirection.x > absDirection.z) {
        if(absDirection.x > absDirection.y)
            face = direction.x > 0.0 ? 0.0 : 3.0;
        else
            face = direction.y > 0.0 ? 1.0 : 4.0;
    } else {
        if(absDirection.z > absDirection.y)
            face = direction.z > 0.0 ? 2.0 : 5.0;
        else
            face = direction.y > 0.0 ? 1.0 : 4.0;
    }
    return face;
}

vec2 getUV(vec3 direction, float face) {
    vec2 uv;
    if(face == 0.0) {
        uv = vec2(direction.z, direction.y) / abs(direction.x); 
    } else if(face == 1.0) {
        uv = vec2(-direction.x, -direction.z) / abs(direction.y); 
    } else if(face == 2.0) {
        uv = vec2(-direction.x, direction.y) / abs(direction.z); 
    } else if(face == 3.0) {
        uv = vec2(-direction.z, direction.y) / abs(direction.x); 
    } else if(face == 4.0) {
        uv = vec2(-direction.x, direction.z) / abs(direction.y); 
    } else {
        uv = vec2(direction.x, direction.y) / abs(direction.z); 
    }
    return 0.5 * (uv + 1.0);
}

vec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {
    float face = getFace(direction);
    float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);
    mipInt = max(mipInt, cubeUV_minMipLevel);
    float faceSize = exp2(mipInt);
    vec2 uv = getUV(direction, face) * (faceSize - 2.0) + 1.0;
    if(face > 2.0) {
        uv.y += faceSize;
        face -= 3.0;
    }
    uv.x += face * faceSize;
    uv.x += filterInt * 3.0 * cubeUV_minTileSize;
    uv.y += 4.0 * (exp2(CUBEUV_MAX_MIP) - faceSize);
    uv.x *= CUBEUV_TEXEL_WIDTH;
    uv.y *= CUBEUV_TEXEL_HEIGHT;
	#ifdef texture2DGradEXT
    return texture2DGradEXT(envMap, uv, vec2(0.0), vec2(0.0)).rgb; 
	#else
    return texture2D(envMap, uv).rgb;
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

float roughnessToMip(float roughness) {
    float mip = 0.0;
    if(roughness >= cubeUV_r1) {
        mip = (cubeUV_r0 - roughness) * (cubeUV_m1 - cubeUV_m0) / (cubeUV_r0 - cubeUV_r1) + cubeUV_m0;
    } else if(roughness >= cubeUV_r4) {
        mip = (cubeUV_r1 - roughness) * (cubeUV_m4 - cubeUV_m1) / (cubeUV_r1 - cubeUV_r4) + cubeUV_m1;
    } else if(roughness >= cubeUV_r5) {
        mip = (cubeUV_r4 - roughness) * (cubeUV_m5 - cubeUV_m4) / (cubeUV_r4 - cubeUV_r5) + cubeUV_m4;
    } else if(roughness >= cubeUV_r6) {
        mip = (cubeUV_r5 - roughness) * (cubeUV_m6 - cubeUV_m5) / (cubeUV_r5 - cubeUV_r6) + cubeUV_m5;
    } else {
        mip = -2.0 * log2(1.16 * roughness); 
    }
    return mip;
}

vec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {
    float mip = clamp(roughnessToMip(roughness), cubeUV_m0, CUBEUV_MAX_MIP);
    float mipF = fract(mip);
    float mipInt = floor(mip);
    vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);
    if(mipF == 0.0) {
        return vec4(color0, 1.0);
    } else {
        vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);
        return vec4(mix(color0, color1, mipF), 1.0);
    }
}
vec3 adjustSaturation(vec3 color, float saturation) {
	return mix(vec3(dot(color, vec3(0.2125, 0.7154, 0.0721))), color, saturation);
}

#include <packing>
#include <dithering_pars_fragment>

float readDepth(sampler2D depthSampler, vec2 coord) {
	float fragCoordZ = texture2D(depthSampler, coord).x;
	float viewZ = perspectiveDepthToViewZ(fragCoordZ, NEAR, FAR);
	return viewZToOrthographicDepth(viewZ, NEAR, FAR);
}

void main() {
	vec3 normal = vNormal;

	
	vec3 shadowCoord = vShadowCoord.xyz / vShadowCoord.w * 0.5 + 0.5;
	float depthShadowCoord = shadowCoord.z;

	vec2 depthMapUv = shadowCoord.xy;
	float depthShadowMap = readDepth(tStaticShadows, depthMapUv);

	float cosTheta = dot(normalize(uLightPosition), normal);
	float bias = 0.005 * tan(acos(cosTheta));
	bias = clamp(bias, 0.0, 0.01);

	float shadowFactor = step(depthShadowCoord - bias, depthShadowMap);

	float difLight = max(.5, cosTheta);
	float shading = shadowFactor * difLight;

	float noise1 = (texture2D(tNoise, vPosition.xy * .1).r + texture2D(tNoise, vPosition.yz * .1).r) * 1.;
	float noise2 = (smoothstep(.3, 1., texture2D(tNoise, vPosition.xy * 5.).r) + smoothstep(.3, 1., texture2D(tNoise, vPosition.yz * 5.).r)) * .5;

	
	vec3 color1 = adjustSaturation(clamp(uColor1, vec3(.1), vec3(1.)), .7);
	vec3 color2 = adjustSaturation(clamp(uColor2, vec3(.1), vec3(1.)), .7);
	vec3 color3 = adjustSaturation(clamp(uColor3, vec3(.1), vec3(1.)), .7);

	vec3 diffuse = mix(color1, color2, smoothstep(2. + noise1 * .1, .5 + noise1 * .1, vPosition.y));

	vec4 final = vec4(diffuse, 1.);

	vec3 aoMap = texture2D(tAoMap, vUv).rgb;
	final.rgb *= mix(vec3(1.), aoMap, uAoMapIntensity);

	
	final.rgb = mix(final.rgb - .1, final.rgb + .1, shading);

	gl_FragColor = final;

	
	gl_FragColor.rgb *= (1. - float(uEmissiveOnly));
	#include <dithering_fragment>
}`,sk=St(ik,"fragmentShader"),rk=`attribute vec3 position, normal;
attribute vec2 uv, uv2;

uniform mat4 projectionMatrix, modelMatrix, viewMatrix;

uniform mat4 uShadowProjectionMatrix, uShadowMatrixInverse;

varying vec2 vUv, vUv2;
varying vec3 vEyeToSurfaceDir, vNormal, vPosition;
varying vec4 vShadowCoord;

attribute vec4 skinIndex, skinWeight;

uniform mat4 bindMatrix;
uniform mat4 bindMatrixInverse;
uniform highp sampler2D boneTexture;
uniform int boneTextureSize;

mat4 getBoneMatrix(const in float i) {
    float j = i * 4.0;
    float x = mod(j, float(boneTextureSize));
    float y = floor(j / float(boneTextureSize));
    float dx = 1.0 / float(boneTextureSize);
    float dy = 1.0 / float(boneTextureSize);
    y = dy * (y + 0.5);
    vec4 v1 = texture2D(boneTexture, vec2(dx * (x + 0.5), y));
    vec4 v2 = texture2D(boneTexture, vec2(dx * (x + 1.5), y));
    vec4 v3 = texture2D(boneTexture, vec2(dx * (x + 2.5), y));
    vec4 v4 = texture2D(boneTexture, vec2(dx * (x + 3.5), y));
    mat4 bone = mat4(v1, v2, v3, v4);
    return bone;
}

void main() {
  vUv = uv;
  vUv2 = uv2;

  vec3 objectNormal = normal;
  vec3 transformed = position;

  
  mat4 boneMatX = getBoneMatrix(skinIndex.x);
mat4 boneMatY = getBoneMatrix(skinIndex.y);
mat4 boneMatZ = getBoneMatrix(skinIndex.z);
mat4 boneMatW = getBoneMatrix(skinIndex.w);

mat4 skinMatrix = mat4(0.0);
skinMatrix += skinWeight.x * boneMatX;
skinMatrix += skinWeight.y * boneMatY;
skinMatrix += skinWeight.z * boneMatZ;
skinMatrix += skinWeight.w * boneMatW;
skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
objectNormal = vec4(skinMatrix * vec4(objectNormal, 0.0)).xyz;

vec4 skinVertex = bindMatrix * vec4(transformed, 1.0);
vec4 skinned = vec4(0.0);
skinned += boneMatX * skinVertex * skinWeight.x;
skinned += boneMatY * skinVertex * skinWeight.y;
skinned += boneMatZ * skinVertex * skinWeight.z;
skinned += boneMatW * skinVertex * skinWeight.w;
transformed = (bindMatrixInverse * skinned).xyz;

  vec4 mvPosition = viewMatrix * modelMatrix * vec4(transformed, 1.);

  gl_Position = projectionMatrix * mvPosition;

  vNormal = normalize(viewMatrix * modelMatrix * vec4(objectNormal, 0.0)).xyz;
  vPosition = transformed;
  vEyeToSurfaceDir = normalize(mvPosition.xyz);
  vShadowCoord = uShadowProjectionMatrix * uShadowMatrixInverse * modelMatrix * vec4(transformed, 1.);
}`,ok=St(rk,"vertexShader");class ak extends Qs{constructor(e={}){super(e),sk.use(this),ok.use(this)}}const lk=`precision highp float;

uniform mat4 viewMatrix;

uniform float uRoughness, uMetalness;
uniform vec3 uColor;

uniform bool uEmissiveOnly;

varying vec2 vUv;

uniform sampler2D tEnvMap;
uniform float uEnvMapIntensity;
varying vec3 vEyeToSurfaceDir, vNormal;

uniform sampler2D tAoMap;
uniform float uAoMapIntensity;

#define cubeUV_minMipLevel 4.0
#define cubeUV_minTileSize 16.0

float getFace(vec3 direction) {
    vec3 absDirection = abs(direction);
    float face = -1.0;
    if(absDirection.x > absDirection.z) {
        if(absDirection.x > absDirection.y)
            face = direction.x > 0.0 ? 0.0 : 3.0;
        else
            face = direction.y > 0.0 ? 1.0 : 4.0;
    } else {
        if(absDirection.z > absDirection.y)
            face = direction.z > 0.0 ? 2.0 : 5.0;
        else
            face = direction.y > 0.0 ? 1.0 : 4.0;
    }
    return face;
}

vec2 getUV(vec3 direction, float face) {
    vec2 uv;
    if(face == 0.0) {
        uv = vec2(direction.z, direction.y) / abs(direction.x); 
    } else if(face == 1.0) {
        uv = vec2(-direction.x, -direction.z) / abs(direction.y); 
    } else if(face == 2.0) {
        uv = vec2(-direction.x, direction.y) / abs(direction.z); 
    } else if(face == 3.0) {
        uv = vec2(-direction.z, direction.y) / abs(direction.x); 
    } else if(face == 4.0) {
        uv = vec2(-direction.x, direction.z) / abs(direction.y); 
    } else {
        uv = vec2(direction.x, direction.y) / abs(direction.z); 
    }
    return 0.5 * (uv + 1.0);
}

vec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {
    float face = getFace(direction);
    float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);
    mipInt = max(mipInt, cubeUV_minMipLevel);
    float faceSize = exp2(mipInt);
    vec2 uv = getUV(direction, face) * (faceSize - 2.0) + 1.0;
    if(face > 2.0) {
        uv.y += faceSize;
        face -= 3.0;
    }
    uv.x += face * faceSize;
    uv.x += filterInt * 3.0 * cubeUV_minTileSize;
    uv.y += 4.0 * (exp2(CUBEUV_MAX_MIP) - faceSize);
    uv.x *= CUBEUV_TEXEL_WIDTH;
    uv.y *= CUBEUV_TEXEL_HEIGHT;
	#ifdef texture2DGradEXT
    return texture2DGradEXT(envMap, uv, vec2(0.0), vec2(0.0)).rgb; 
	#else
    return texture2D(envMap, uv).rgb;
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

float roughnessToMip(float roughness) {
    float mip = 0.0;
    if(roughness >= cubeUV_r1) {
        mip = (cubeUV_r0 - roughness) * (cubeUV_m1 - cubeUV_m0) / (cubeUV_r0 - cubeUV_r1) + cubeUV_m0;
    } else if(roughness >= cubeUV_r4) {
        mip = (cubeUV_r1 - roughness) * (cubeUV_m4 - cubeUV_m1) / (cubeUV_r1 - cubeUV_r4) + cubeUV_m1;
    } else if(roughness >= cubeUV_r5) {
        mip = (cubeUV_r4 - roughness) * (cubeUV_m5 - cubeUV_m4) / (cubeUV_r4 - cubeUV_r5) + cubeUV_m4;
    } else if(roughness >= cubeUV_r6) {
        mip = (cubeUV_r5 - roughness) * (cubeUV_m6 - cubeUV_m5) / (cubeUV_r5 - cubeUV_r6) + cubeUV_m5;
    } else {
        mip = -2.0 * log2(1.16 * roughness); 
    }
    return mip;
}

vec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {
    float mip = clamp(roughnessToMip(roughness), cubeUV_m0, CUBEUV_MAX_MIP);
    float mipF = fract(mip);
    float mipInt = floor(mip);
    vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);
    if(mipF == 0.0) {
        return vec4(color0, 1.0);
    } else {
        vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);
        return vec4(mix(color0, color1, mipF), 1.0);
    }
}
vec3 adjustSaturation(vec3 color, float saturation) {
	return mix(vec3(dot(color, vec3(0.2125, 0.7154, 0.0721))), color, saturation);
}

#include <dithering_pars_fragment>

void main() {
	float roughness = uRoughness;
	float metalness = uMetalness;
	vec3 normal = vNormal;

	
	vec4 color = vec4(adjustSaturation(clamp(uColor, vec3(.1), vec3(.9)), .7) + .15, 1.);

	vec3 reflectVec = reflect(vEyeToSurfaceDir, normal);

	reflectVec = normalize((vec4(reflectVec, 0.0) * viewMatrix).xyz);
	vec3 envMapColor = textureCubeUV(tEnvMap, reflectVec, roughness).rgb * uEnvMapIntensity;

	color.rgb += envMapColor * smoothstep(0., 1., length(envMapColor) - length(color.rgb));
	color.rgb -= (1. - envMapColor) * metalness;

	vec3 aoMap = texture2D(tAoMap, vUv).rgb;
	color.rgb *= mix(vec3(1.), aoMap, uAoMapIntensity);

	
	
	color.rgb *= (1. - float(uEmissiveOnly));

	gl_FragColor = color;
	#include <dithering_fragment>
}`,ck=St(lk,"fragmentShader"),uk=`attribute vec3 position, normal;
attribute vec2 uv;

uniform mat4 projectionMatrix, modelViewMatrix;

varying vec2 vUv;
varying vec3 vEyeToSurfaceDir, vNormal;

attribute vec4 skinIndex, skinWeight;

uniform mat4 bindMatrix;
uniform mat4 bindMatrixInverse;
uniform highp sampler2D boneTexture;
uniform int boneTextureSize;

mat4 getBoneMatrix(const in float i) {
    float j = i * 4.0;
    float x = mod(j, float(boneTextureSize));
    float y = floor(j / float(boneTextureSize));
    float dx = 1.0 / float(boneTextureSize);
    float dy = 1.0 / float(boneTextureSize);
    y = dy * (y + 0.5);
    vec4 v1 = texture2D(boneTexture, vec2(dx * (x + 0.5), y));
    vec4 v2 = texture2D(boneTexture, vec2(dx * (x + 1.5), y));
    vec4 v3 = texture2D(boneTexture, vec2(dx * (x + 2.5), y));
    vec4 v4 = texture2D(boneTexture, vec2(dx * (x + 3.5), y));
    mat4 bone = mat4(v1, v2, v3, v4);
    return bone;
}

void main() {
  vUv = uv;

  vec3 objectNormal = normal;
  vec3 transformed = position;

  
  mat4 boneMatX = getBoneMatrix(skinIndex.x);
mat4 boneMatY = getBoneMatrix(skinIndex.y);
mat4 boneMatZ = getBoneMatrix(skinIndex.z);
mat4 boneMatW = getBoneMatrix(skinIndex.w);

mat4 skinMatrix = mat4(0.0);
skinMatrix += skinWeight.x * boneMatX;
skinMatrix += skinWeight.y * boneMatY;
skinMatrix += skinWeight.z * boneMatZ;
skinMatrix += skinWeight.w * boneMatW;
skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
objectNormal = vec4(skinMatrix * vec4(objectNormal, 0.0)).xyz;

vec4 skinVertex = bindMatrix * vec4(transformed, 1.0);
vec4 skinned = vec4(0.0);
skinned += boneMatX * skinVertex * skinWeight.x;
skinned += boneMatY * skinVertex * skinWeight.y;
skinned += boneMatZ * skinVertex * skinWeight.z;
skinned += boneMatW * skinVertex * skinWeight.w;
transformed = (bindMatrixInverse * skinned).xyz;

  vNormal = normalize(modelViewMatrix * vec4(objectNormal, 0.0)).xyz;

  vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
  vEyeToSurfaceDir = normalize(mvPosition.xyz);

  gl_Position = projectionMatrix * mvPosition;
}`,fk=St(uk,"vertexShader");class hk extends Qs{constructor(e={}){super(e),ck.use(this),fk.use(this)}}const dk=`precision highp float;

uniform mat4 viewMatrix;

uniform float uRoughness, uMetalness;
uniform vec3 uColor, uLightPosition;

uniform bool uEmissiveOnly;

varying vec2 vUv;

uniform sampler2D tEnvMap;
uniform float uEnvMapIntensity;
varying vec3 vEyeToSurfaceDir, vNormal;

uniform sampler2D tAoMap;
uniform float uAoMapIntensity;

#define cubeUV_minMipLevel 4.0
#define cubeUV_minTileSize 16.0

float getFace(vec3 direction) {
    vec3 absDirection = abs(direction);
    float face = -1.0;
    if(absDirection.x > absDirection.z) {
        if(absDirection.x > absDirection.y)
            face = direction.x > 0.0 ? 0.0 : 3.0;
        else
            face = direction.y > 0.0 ? 1.0 : 4.0;
    } else {
        if(absDirection.z > absDirection.y)
            face = direction.z > 0.0 ? 2.0 : 5.0;
        else
            face = direction.y > 0.0 ? 1.0 : 4.0;
    }
    return face;
}

vec2 getUV(vec3 direction, float face) {
    vec2 uv;
    if(face == 0.0) {
        uv = vec2(direction.z, direction.y) / abs(direction.x); 
    } else if(face == 1.0) {
        uv = vec2(-direction.x, -direction.z) / abs(direction.y); 
    } else if(face == 2.0) {
        uv = vec2(-direction.x, direction.y) / abs(direction.z); 
    } else if(face == 3.0) {
        uv = vec2(-direction.z, direction.y) / abs(direction.x); 
    } else if(face == 4.0) {
        uv = vec2(-direction.x, direction.z) / abs(direction.y); 
    } else {
        uv = vec2(direction.x, direction.y) / abs(direction.z); 
    }
    return 0.5 * (uv + 1.0);
}

vec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {
    float face = getFace(direction);
    float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);
    mipInt = max(mipInt, cubeUV_minMipLevel);
    float faceSize = exp2(mipInt);
    vec2 uv = getUV(direction, face) * (faceSize - 2.0) + 1.0;
    if(face > 2.0) {
        uv.y += faceSize;
        face -= 3.0;
    }
    uv.x += face * faceSize;
    uv.x += filterInt * 3.0 * cubeUV_minTileSize;
    uv.y += 4.0 * (exp2(CUBEUV_MAX_MIP) - faceSize);
    uv.x *= CUBEUV_TEXEL_WIDTH;
    uv.y *= CUBEUV_TEXEL_HEIGHT;
	#ifdef texture2DGradEXT
    return texture2DGradEXT(envMap, uv, vec2(0.0), vec2(0.0)).rgb; 
	#else
    return texture2D(envMap, uv).rgb;
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

float roughnessToMip(float roughness) {
    float mip = 0.0;
    if(roughness >= cubeUV_r1) {
        mip = (cubeUV_r0 - roughness) * (cubeUV_m1 - cubeUV_m0) / (cubeUV_r0 - cubeUV_r1) + cubeUV_m0;
    } else if(roughness >= cubeUV_r4) {
        mip = (cubeUV_r1 - roughness) * (cubeUV_m4 - cubeUV_m1) / (cubeUV_r1 - cubeUV_r4) + cubeUV_m1;
    } else if(roughness >= cubeUV_r5) {
        mip = (cubeUV_r4 - roughness) * (cubeUV_m5 - cubeUV_m4) / (cubeUV_r4 - cubeUV_r5) + cubeUV_m4;
    } else if(roughness >= cubeUV_r6) {
        mip = (cubeUV_r5 - roughness) * (cubeUV_m6 - cubeUV_m5) / (cubeUV_r5 - cubeUV_r6) + cubeUV_m5;
    } else {
        mip = -2.0 * log2(1.16 * roughness); 
    }
    return mip;
}

vec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {
    float mip = clamp(roughnessToMip(roughness), cubeUV_m0, CUBEUV_MAX_MIP);
    float mipF = fract(mip);
    float mipInt = floor(mip);
    vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);
    if(mipF == 0.0) {
        return vec4(color0, 1.0);
    } else {
        vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);
        return vec4(mix(color0, color1, mipF), 1.0);
    }
}
#include <dithering_pars_fragment>

#define PI 3.14159265

void main() {
	float roughness = uRoughness;
	float metalness = uMetalness;
	vec3 normal = vNormal;

	
	vec3 diffuse = vec3(uColor);
	vec4 final = vec4(diffuse, 1.);

	vec3 reflectVec = reflect(vEyeToSurfaceDir, normal);

	float theta = PI * .5;
	mat3 rotationMatrix = mat3(vec3(cos(theta), -sin(theta), 0.0), vec3(sin(theta), cos(theta), 0.0), vec3(0.0, 0.0, 1.0));
	
	reflectVec = normalize((vec4(reflectVec, 0.0) * viewMatrix * mat4(rotationMatrix)).xyz);
	vec3 envMapColor = textureCubeUV(tEnvMap, reflectVec, roughness).rgb * uEnvMapIntensity;

	final.rgb += envMapColor * smoothstep(0., 1., length(envMapColor) - length(final.rgb));
	final.rgb -= (1. - envMapColor) * metalness;

	vec3 aoMap = texture2D(tAoMap, vUv).rgb;
	final.rgb *= mix(vec3(1.), aoMap, uAoMapIntensity);

	
	final.rgb = mix(final.rgb, smoothstep(.4, 1., final.rgb) * .3, float(uEmissiveOnly));

	
	float cosTheta = dot(normalize(uLightPosition), normal);
	float bias = 0.005 * tan(acos(cosTheta));
	bias = clamp(bias, 0.0, 0.01);

	float difLight = max(0.0, cosTheta);
	float shading = difLight;

	final.rgb = mix(final.rgb - .1, final.rgb + .1, shading);

	gl_FragColor = final;
	#include <dithering_fragment>
}`,pk=St(dk,"fragmentShader"),mk=`attribute vec3 position, normal;
attribute vec2 uv, uv2;

uniform mat4 projectionMatrix, modelViewMatrix;

varying vec2 vUv;
varying vec3 vEyeToSurfaceDir, vNormal;

attribute vec4 skinIndex, skinWeight;

uniform mat4 bindMatrix;
uniform mat4 bindMatrixInverse;
uniform highp sampler2D boneTexture;
uniform int boneTextureSize;

mat4 getBoneMatrix(const in float i) {
    float j = i * 4.0;
    float x = mod(j, float(boneTextureSize));
    float y = floor(j / float(boneTextureSize));
    float dx = 1.0 / float(boneTextureSize);
    float dy = 1.0 / float(boneTextureSize);
    y = dy * (y + 0.5);
    vec4 v1 = texture2D(boneTexture, vec2(dx * (x + 0.5), y));
    vec4 v2 = texture2D(boneTexture, vec2(dx * (x + 1.5), y));
    vec4 v3 = texture2D(boneTexture, vec2(dx * (x + 2.5), y));
    vec4 v4 = texture2D(boneTexture, vec2(dx * (x + 3.5), y));
    mat4 bone = mat4(v1, v2, v3, v4);
    return bone;
}

void main() {
  vUv = uv;

  vec3 objectNormal = normal;
  vec3 transformed = position;

  
  mat4 boneMatX = getBoneMatrix(skinIndex.x);
mat4 boneMatY = getBoneMatrix(skinIndex.y);
mat4 boneMatZ = getBoneMatrix(skinIndex.z);
mat4 boneMatW = getBoneMatrix(skinIndex.w);

mat4 skinMatrix = mat4(0.0);
skinMatrix += skinWeight.x * boneMatX;
skinMatrix += skinWeight.y * boneMatY;
skinMatrix += skinWeight.z * boneMatZ;
skinMatrix += skinWeight.w * boneMatW;
skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
objectNormal = vec4(skinMatrix * vec4(objectNormal, 0.0)).xyz;

vec4 skinVertex = bindMatrix * vec4(transformed, 1.0);
vec4 skinned = vec4(0.0);
skinned += boneMatX * skinVertex * skinWeight.x;
skinned += boneMatY * skinVertex * skinWeight.y;
skinned += boneMatZ * skinVertex * skinWeight.z;
skinned += boneMatW * skinVertex * skinWeight.w;
transformed = (bindMatrixInverse * skinned).xyz;

  vNormal = normalize(modelViewMatrix * vec4(objectNormal, 0.0)).xyz;

  vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
  vEyeToSurfaceDir = normalize(mvPosition.xyz);

  gl_Position = projectionMatrix * mvPosition;
}`,gk=St(mk,"vertexShader");class _k extends Qs{constructor(e={}){super(e),pk.use(this),gk.use(this)}}const vk=`precision highp float;
varying vec2 vUv;
varying vec3 vNormal;
varying float vSize;

uniform vec3 uColor;
uniform bool uEmissiveOnly;

void main() {
  vec3 finalColor = uColor * length(vNormal.rg + .25);
  finalColor = mix(finalColor, finalColor * vSize * 5., float(uEmissiveOnly));

  gl_FragColor = vec4(vec3(finalColor), 1.0);
}`,xk=St(vk,"fragmentShader"),yk=`attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

attribute vec3 aColor;
attribute float aSize;
attribute float aSpeed;
attribute float aRad;

uniform mat4 projectionMatrix, modelViewMatrix;
uniform float uTime;
uniform float uRadius;
uniform float uGlobalSpead;
uniform float uElevation;

varying vec2 vUv;
varying vec3 vColor;
varying vec3 vNormal;
varying float vSize;

#define PI 3.14159265

mat4 rotation3d(vec3 axis, float angle) {
  axis = normalize(axis);
  float s = sin(angle);
  float c = cos(angle);
  float oc = 1.0 - c;

  return mat4(oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s, oc * axis.z * axis.x + axis.y * s, 0.0, oc * axis.x * axis.y + axis.z * s, oc * axis.y * axis.y + c, oc * axis.y * axis.z - axis.x * s, 0.0, oc * axis.z * axis.x - axis.y * s, oc * axis.y * axis.z + axis.x * s, oc * axis.z * axis.z + c, 0.0, 0.0, 0.0, 0.0, 1.0);
}

void main() {
  vUv = uv;
  vColor = aColor;
  vNormal = normal;

  vec3 pos = position;
  
  float size = smoothstep(0., 0.7, fract(-uTime * aSpeed * uGlobalSpead)) * aSize;
  pos *= size;

  
  float radus = uRadius - (pos.y * aSpeed * 800. * aSize);
  pos.y += fract(uTime * aSpeed * uGlobalSpead) * uElevation;
  pos.x += radus * cos(aRad);
  pos.z += radus * sin(aRad);

  
  mat4 rotationMatrix = rotation3d(vec3(0., 1., 0.), aRad);
  vec4 transfomedPos = rotationMatrix * vec4(pos, 1.);

  gl_Position = projectionMatrix * modelViewMatrix * transfomedPos;

  vSize = size;
}`,bk=St(yk,"vertexShader");class Mk extends Qs{constructor(e={}){super(e),xk.use(this),bk.use(this)}}var Fu,ib,ku,sb;class Sk extends on{constructor(){super();ve(this,Fu);ve(this,ku);this.count=100,this.geometry=Ve(this,Fu,ib).call(this),this.material=Ve(this,ku,sb).call(this)}}Fu=new WeakSet,ib=function(){const t=new d3;t.instanceCount=this.count;const n=new xa(1,1,1);t.index=n.index,t.attributes=n.attributes;const s=3,r=[];let o=0;for(let l=0;l<this.count;l++)o=l*s,r[o++]=xh(.05,.15),r[o++]=xh(5e-4,.001),r[o++]=xh(0,2*Math.PI);const a=new C3(new Float32Array(r),s);return t.setAttribute("aSize",new Ro(a,1,0,!1)),t.setAttribute("aSpeed",new Ro(a,1,1,!1)),t.setAttribute("aRad",new Ro(a,1,2,!1)),t},ku=new WeakSet,sb=function(){return new Mk({uniforms:{uTime:nn.uTime,uEmissiveOnly:nn.uEmissiveOnly,uShadowOnly:nn.uShadowOnly,uGlobalSpead:{value:1},uRadius:{value:.23},uColor:{value:new Ne("orange")},uElevation:{value:.8}}})};var Bo,Vo,Ud,Fd,Rs;class rb extends dt{constructor(t,n){super();ve(this,Bo,void 0);ve(this,Vo,new _n);ve(this,Ud,new _n);ve(this,Fd,new va);ve(this,Rs,new z);Ue.register(this),this.name=n,this.model=t;const s=Dd(Me.webgl.renderer,Me.core.assetsManager.get("envmap"),!1),[r,o]=Me.core.assetsManager.get("playerAo","noise");r.flipY=!1,r.generateMipmaps=!1,o.wrapS=o.wrapT=fi,this.body=t.getObjectByName("body");const a=t.getObjectByName("face"),l=t.getObjectByName("gold");this.raycastCube=t.getObjectByName("raycastCube");const{face:c,body:u,gold:f}=V3;a.material=new hk({uniforms:{uEmissiveOnly:nn.uEmissiveOnly,uShadowOnly:nn.uShadowOnly,uLightPosition:Me.webgl.scene.commonShadowUniforms.uLightPosition,uRoughness:{value:c.roughness},uMetalness:{value:c.metalness},uEnvMapIntensity:{value:c.envMapIntensity},uColor:{value:new Ne(dr[n][0])},tEnvMap:{value:s},tAoMap:{value:r},uAoMapIntensity:{value:c.aoMapIntensity}},defines:{...s.userData}}),this.body.material=new ak({uniforms:{...Me.webgl.scene.commonShadowUniforms,...Me.webgl.scene.staticShadowUniforms,uEmissiveOnly:nn.uEmissiveOnly,uShadowOnly:nn.uShadowOnly,uColor1:{value:new Ne(dr[n][1])},uColor2:{value:new Ne(dr[n][0])},uColor3:{value:new Ne(dr[n][2]||16777215)},tAoMap:{value:r},uAoMapIntensity:{value:u.aoMapIntensity},tNoise:{value:o}},defines:{...s.userData,NEAR:`${Me.webgl.scene.shadowCamera.near}.`,FAR:`${Me.webgl.scene.shadowCamera.far}.`}}),l.material=new _k({uniforms:{uEmissiveOnly:nn.uEmissiveOnly,uShadowOnly:nn.uShadowOnly,uLightPosition:Me.webgl.scene.commonShadowUniforms.uLightPosition,uRoughness:{value:f.roughness},uMetalness:{value:f.metalness},uEnvMapIntensity:{value:f.envMapIntensity},uColor:{value:f.color},tEnvMap:{value:s},tAoMap:{value:r},uAoMapIntensity:{value:1}},defines:{...s.userData}}),this.raycastCube.visible=!1,this.headBone=t.getObjectByName("tête2"),this.model.scale.setScalar(.4),this.model.rotation.y=Math.PI,this.flame=new Sk,this.flame.position.y=1,this.mixer=new A3(this.model),this.animations=this.model.animations,this.add(this.model,this.flame)}onTick({dt:t}){this.mixer.update(t)}startIdle(){var s;(s=G(this,Bo))==null||s.kill(),mt(this,Bo,Yl.timeline({onStart:()=>{this.mixer.clipAction(this.animations[0]).play()},onUpdate:()=>{this.headBone.getWorldPosition(G(this,Rs)),G(this,Vo).y===0?this.flame.position.z=-(G(this,Rs).z-this.position.z)*5:G(this,Vo).y===1?this.flame.position.z=(G(this,Rs).z-this.position.z)*5:G(this,Vo).y>0?this.flame.position.z=(G(this,Rs).x-this.position.x)*5:this.flame.position.z=-(G(this,Rs).x-this.position.x)*5},onComplete:()=>{this.mixer.clipAction(this.animations[0]).stop(),this.startIdle()}}));const t={value:0},n=this.animations[0].duration;G(this,Bo).to(t,{value:1,duration:n,ease:"power3.out"},0)}updateISO(t){this.body.material.uniforms.uColor1.value=new Ne(dr[t][1]),this.body.material.uniforms.uColor2.value=new Ne(dr[t][0]),this.body.material.uniforms.uColor3.value=new Ne(dr[t][2]||16777215)}}Bo=new WeakMap,Vo=new WeakMap,Ud=new WeakMap,Fd=new WeakMap,Rs=new WeakMap;var Cr,Ls,Ps,Ri,Go,Is,zu,Bu,Ds;class wk extends rb{constructor(t,n){var s;super(t,n.iso);ve(this,Cr,void 0);ve(this,Ls,void 0);ve(this,Ps,new z);ve(this,Ri,new z);ve(this,Go,new We);ve(this,Is,new _n);ve(this,zu,new _n);ve(this,Bu,new va);ve(this,Ds,new z);Ue.register(this),mt(this,Ls,n.position),G(this,Ps).set(G(this,Ls).x+.5,0,G(this,Ls).y+.5),G(this,Ri).copy(G(this,Ps)),this.position.copy(G(this,Ps)),(s=Me.debug)==null||s.mapping.add(this,"Player",0,"Player: "+this.name)}addRaycaster(){this.raycaster=new R3,Ue.on(qe.POINTER_DOWN,t=>{this.raycaster.setFromCamera(t.webgl,Me.webgl.camera),this.raycaster.intersectObject(this.raycastCube).length>0&&(Me.webgl.camera.focusPlayer=!0)})}move(){var s;(s=G(this,Cr))==null||s.kill(),mt(this,Cr,Yl.timeline({onStart:()=>{this.mixer.clipAction(this.animations[0]).play()},onUpdate:()=>{this.headBone.getWorldPosition(G(this,Ds)),G(this,Bu).setFromQuaternion(this.headBone.getWorldQuaternion(G(this,zu))),G(this,Is).y===0?this.flame.position.z=(G(this,Ds).z-this.position.z)*5:G(this,Is).y===1?this.flame.position.z=-(G(this,Ds).z-this.position.z)*5:G(this,Is).y>0?this.flame.position.z=(G(this,Ds).x-this.position.x)*5:this.flame.position.z=-(G(this,Ds).x-this.position.x)*5},onComplete:()=>{this.mixer.clipAction(this.animations[0]).stop()}})),G(this,Ps).set(G(this,Ri).x,0,G(this,Ri).z),G(this,Ri).set(G(this,Ls).x+.5,0,G(this,Ls).y+.5),G(this,Go).identity(),G(this,Go).lookAt(G(this,Ps),G(this,Ri),this.up),G(this,Is).setFromRotationMatrix(G(this,Go));const t={value:0},n=this.animations[0].duration/3;G(this,Cr).to(t,{value:1,onUpdate:()=>this.quaternion.slerp(G(this,Is),t.value),duration:n,ease:"power3.out"},0),G(this,Cr).to(this.position,{x:G(this,Ri).x,z:G(this,Ri).z,duration:this.animations[0].duration-n,ease:"power3.inOut",delay:n},0)}}Cr=new WeakMap,Ls=new WeakMap,Ps=new WeakMap,Ri=new WeakMap,Go=new WeakMap,Is=new WeakMap,zu=new WeakMap,Bu=new WeakMap,Ds=new WeakMap;const Tk=`precision highp float;

uniform sampler2D tDiffuse, tEmissive, tDepth;
uniform float uEmissiveIntensity;

varying vec2 vUv;

#define PI 3.14159265359

void main() {
	vec4 diffuse = texture2D(tDiffuse, vUv);
	vec3 emissive = texture2D(tEmissive, vUv).rgb;
	

	vec4 color = diffuse + vec4(emissive, length(emissive)) * uEmissiveIntensity;

	gl_FragColor = color;
}`,Ek=St(Tk,"fragmentShader"),Ak=`attribute vec3 position;
attribute vec2 uv;

uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelMatrix * vec4(position, 1.);

}`,Ck=St(Ak,"vertexShader");class Rk extends Qs{constructor(e={}){super(e),Ek.use(this),Ck.use(this)}}const Lk=`precision highp float;

uniform sampler2D tEmissive;
uniform vec2 uResolution;
uniform float uHorizontal;

varying vec2 vUv;

#define WEIGHT_1 0.227027
#define WEIGHT_2 0.1945946
#define WEIGHT_3 0.1216216
#define WEIGHT_4 0.054054
#define WEIGHT_5 0.016216

void main() {
	vec2 offset = 2. / uResolution;

	vec3 color = vec3(0.);

	if(uHorizontal > .5) {
		color += texture2D(tEmissive, vUv + vec2(offset.x * 1., 0.0)).rgb * WEIGHT_1;
		color += texture2D(tEmissive, vUv - vec2(offset.x * 1., 0.0)).rgb * WEIGHT_1;

		color += texture2D(tEmissive, vUv + vec2(offset.x * 2., 0.0)).rgb * WEIGHT_2;
		color += texture2D(tEmissive, vUv - vec2(offset.x * 2., 0.0)).rgb * WEIGHT_2;

		color += texture2D(tEmissive, vUv + vec2(offset.x * 3., 0.0)).rgb * WEIGHT_3;
		color += texture2D(tEmissive, vUv - vec2(offset.x * 3., 0.0)).rgb * WEIGHT_3;

		color += texture2D(tEmissive, vUv + vec2(offset.x * 4., 0.0)).rgb * WEIGHT_4;
		color += texture2D(tEmissive, vUv - vec2(offset.x * 4., 0.0)).rgb * WEIGHT_4;

		color += texture2D(tEmissive, vUv + vec2(offset.x * 5., 0.0)).rgb * WEIGHT_5;
		color += texture2D(tEmissive, vUv - vec2(offset.x * 5., 0.0)).rgb * WEIGHT_5;
	} else {
		color += texture2D(tEmissive, vUv + vec2(0.0, offset.y * 1.)).rgb * WEIGHT_1;
		color += texture2D(tEmissive, vUv - vec2(0.0, offset.y * 1.)).rgb * WEIGHT_1;

		color += texture2D(tEmissive, vUv + vec2(0.0, offset.y * 2.)).rgb * WEIGHT_2;
		color += texture2D(tEmissive, vUv - vec2(0.0, offset.y * 2.)).rgb * WEIGHT_2;

		color += texture2D(tEmissive, vUv + vec2(0.0, offset.y * 3.)).rgb * WEIGHT_3;
		color += texture2D(tEmissive, vUv - vec2(0.0, offset.y * 3.)).rgb * WEIGHT_3;

		color += texture2D(tEmissive, vUv + vec2(0.0, offset.y * 4.)).rgb * WEIGHT_4;
		color += texture2D(tEmissive, vUv - vec2(0.0, offset.y * 4.)).rgb * WEIGHT_4;

		color += texture2D(tEmissive, vUv + vec2(0.0, offset.y * 5.)).rgb * WEIGHT_5;
		color += texture2D(tEmissive, vUv - vec2(0.0, offset.y * 5.)).rgb * WEIGHT_5;
	}

	gl_FragColor = vec4(color * 2., 1.);
}`,Pk=St(Lk,"fragmentShader"),Ik=`attribute vec3 position;
attribute vec2 uv;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);

}`,Dk=St(Ik,"vertexShader");class Nk extends Qs{constructor(e={}){super(e),Pk.use(this),Dk.use(this)}}var Ho,jc;class Ok{constructor({dpr:e=1}){ve(this,Ho);Ue.register(this),this.dpr=e,this.renderTargets=[Ve(this,Ho,jc).call(this),Ve(this,Ho,jc).call(this),Ve(this,Ho,jc).call(this)],this.material=new Nk({uniforms:{tEmissive:{value:this.renderTargets[0].texture},uHorizontal:{value:0},uResolution:{value:new Be}}})}onResize({width:e,height:t}){this.uniforms.uResolution.value.set(e*this.dpr,t*this.dpr),this.renderTargets.forEach(n=>n.setSize(e*this.dpr,t*this.dpr))}get texture(){return this.renderTargets[2].texture}get uniforms(){return this.material.uniforms}}Ho=new WeakSet,jc=function(){return new ki(Me.tools.viewport.width*this.dpr,Me.tools.viewport.height*this.dpr,{samples:0})};var Ns,Vu,ob;class Uk{constructor(e=!0){ve(this,Vu);ve(this,Ns,void 0);Ue.register(this),this.renderTarget=Ve(this,Vu,ob).call(this,!0),this.emissivePass=new Ok({dpr:1}),mt(this,Ns,new Rk({uniforms:{...nn,tDiffuse:{value:this.renderTarget.texture},tDepth:{value:this.renderTarget.depthTexture},tEmissive:{value:this.emissivePass.texture},uResolution:{value:new Be},uRatio:{value:Me.tools.viewport.ratio},uEmissiveIntensity:{value:.5}}}));const t=new ni().setAttribute("position",new vi([-1,3,0,-1,-1,0,3,-1,0],3)).setAttribute("uv",new vi([0,2,0,0,2,0],2));this.quad=new on(t,G(this,Ns)),this.emissiveQuad=new on(t,this.emissivePass.material),this.camera=new Xl(-1,1,1,-1,0,1)}onAttach(){var e;(e=Me.debug)==null||e.mapping.add(this,"PostProcessing")}onResize({width:e,height:t,dpr:n,ratio:s}){G(this,Ns).uniforms.uResolution.value.set(e*n,t*n),G(this,Ns).uniforms.uRatio.value=s,this.renderTarget.setSize(e*n,t*n)}get uniforms(){return G(this,Ns).uniforms}}Ns=new WeakMap,Vu=new WeakSet,ob=function(e=!1){const t=new ki(Me.tools.viewport.width*Me.tools.viewport.dpr,Me.tools.viewport.height*Me.tools.viewport.dpr,{samples:2});if(e){const n=new bp(Me.tools.viewport.width*Me.tools.viewport.dpr,Me.tools.viewport.height*Me.tools.viewport.dpr);t.depthTexture=n}return t};class Fk extends Mp{constructor(){super({antialias:!1,powerPreference:"high-performance"}),Ue.register(this),this.outputEncoding=it,this.autoClear=!1,this.debug.checkShaderErrors=z3}onAttach(){var e;(e=Me.debug)==null||e.mapping.add(this,"Stats")}onResize({width:e,height:t,dpr:n}){this.setSize(e,t),this.setPixelRatio(n)}}class kk extends tn{constructor(){super(ft.baseFov,Me.tools.viewport.ratio,ft.near,ft.far),Ue.register(this)}onResize({ratio:e}){this.aspect=e,this.fov=ft.baseFov/Math.min(1,e*1.5),this.updateProjectionMatrix()}}class zk extends hx{constructor(){super(),Ue.register(this),this.background=new Ne("#FFF")}onAppLoaded(){const e=Me.core.assetsManager.get("player"),t=ny(e);t.animations=e.animations,this.player=new rb(t,"BZH"),this.player.rotation.y=170*(Math.PI/180),this.player.position.z=-4,this.player.position.y=-1,this.player.startIdle(),this.add(this.player),Ue.on(qe.SELECT_TEAM_UPDATE,n=>{this.player.updateISO(n),Yl.to(this.player.rotation,{y:this.player.rotation.y+Math.PI*2,duration:.5})})}}var On,es,Un,Vl,Wo,Xc;class Bk extends tn{constructor(){super(ft.baseFov,Me.tools.viewport.ratio,ft.near,ft.far);ve(this,Wo);In(this,"orbitControls");In(this,"dragEase",ft.dragEase);In(this,"zoomEase",ft.zoomEase);In(this,"targetZoom",0);ve(this,On,0);ve(this,es,new z);ve(this,Un,new Be);ve(this,Vl,!1);Ue.register(this),this.position.fromArray(ft.defaultPosition),G(this,Un).set(this.position.x,this.position.z)}onAttach(){var t;(t=Me.debug)==null||t.mapping.add(this,"Camera")}onDrag(t){this.focusPlayer&&(this.focusPlayer=!1),Ve(this,Wo,Xc).call(this),this.dragEase=10;const n=this.getVisibleWidthAtZDepth()*.5,s=this.getVisibleHeightAtZDepth()*.5;G(this,Un).x-=t.x*n,G(this,Un).y+=t.y*s*(G(this,On)+1)}onDragEnd(){this.dragEase=ft.dragEase}onPinch(t){this.focusPlayer&&(this.focusPlayer=!1),Ve(this,Wo,Xc).call(this),this.targetZoom=Cc(this.targetZoom+t*.005,0,1)}onWheel(t){this.focusPlayer&&(this.focusPlayer=!1),Ve(this,Wo,Xc).call(this),this.targetZoom=Cc(this.targetZoom-t*.001,0,1)}onTick({dt:t}){this.orbitControls||(mt(this,On,Fa(G(this,On),this.targetZoom,this.zoomEase,t)),nn.uZoom.value=G(this,On),this.position.y=N3(G(this,On),0,1,ft.minZoom,ft.maxZoom),G(this,Un).x=Cc(G(this,Un).x,0,Sl.size),G(this,Un).y=Cc(G(this,Un).y,0,Sl.size+G(this,On)*20),this.focusPlayer?(this.position.x=Fa(this.position.x,G(this,es).x,ft.playerPosEase,t),this.position.z=Fa(this.position.z,G(this,es).z+ft.zoomOffsetY*G(this,On),ft.playerPosEase,t)):(this.position.x=Fa(this.position.x,G(this,Un).x,this.dragEase,t),this.position.z=Fa(this.position.z,G(this,Un).y+ft.zoomOffsetY*G(this,On),this.dragEase,t)),this.rotation.x=-Math.PI*.5+U3(G(this,On),.3,1)*ft.maxTiltAngle)}onResize({ratio:t}){this.aspect=t,this.fov=ft.baseFov/Math.min(1,t*1.5),this.updateProjectionMatrix()}getVisibleHeightAtZDepth(t=0){t<this.position.y?t-=this.position.y:t+=this.position.y;const n=this.fov*Math.PI/180;return 2*Math.tan(n/2)*Math.abs(t)}getVisibleWidthAtZDepth(t=0){return this.getVisibleHeightAtZDepth(t)*this.aspect}getAngleTo(t,n){return Math.atan2(n-this.position.z+ft.zoomOffsetY*G(this,On),t-this.position.x)}get playerPosition(){return G(this,es)}set playerPosition(t){mt(this,es,t)}set focusPlayer(t){mt(this,Vl,t),t?this.targetZoom=1:G(this,Un).set(G(this,es).x,G(this,es).z),pp.set(up.FOCUS_PLAYER,t)}get focusPlayer(){return G(this,Vl)}}On=new WeakMap,es=new WeakMap,Un=new WeakMap,Vl=new WeakMap,Wo=new WeakSet,Xc=function(){this.dragEase=ft.dragEase,this.zoomEase=ft.zoomEase};const Vk=`precision highp float;

varying vec3 vNormal;

void main() {
	gl_FragColor = vec4(vNormal, 1.);
}`;St(Vk,"fragmentShader");const Gk=`attribute vec3 position, normal;

attribute vec2 aInstancePosition;

uniform mat4 modelViewMatrix, projectionMatrix;

varying vec3 vNormal;

void main() {
  vNormal = normalize(normal);

  vec3 instancePosition = vec3(aInstancePosition.x, 0., aInstancePosition.y);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position + instancePosition, 1.);
}`;St(Gk,"vertexShader");const Hk=`precision highp float;

uniform vec3 uLightPosition;

varying float vDepth;
varying vec2 vUv;
varying vec3 vNormal;

void main() {
	vec2 discardUv = (gl_FragCoord.xy) * 0.15;
	discardUv.x += step(1., mod(discardUv.y, 2.)) * 0.5;
	discardUv = fract(discardUv);
	float closeDepth = smoothstep(.017, .0, vDepth);
	float dpMask = smoothstep(closeDepth - 0.2, closeDepth, length(discardUv - 0.5));

	if(dpMask < 0.5)
		discard;

	vec3 normal = vNormal;

	float cosTheta = dot(normalize(uLightPosition), normal);
	float bias = 0.005 * tan(acos(cosTheta));
	bias = clamp(bias, 0.0, 0.01);

	float difLight = max(0.0, cosTheta);

	vec3 color = vec3(1.);
	color = mix(color - .5, color + .1, difLight);

	gl_FragColor = vec4(color, 1.);
}`,Wk=St(Hk,"fragmentShader"),jk=`varying float vDepth;
varying vec2 vUv;
varying vec3 vNormal;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.);

  vNormal = normalize(normalMatrix * normal);
  vUv = uv;
  vDepth = smoothstep(NEAR, FAR, -mvPosition.z);

  gl_Position = projectionMatrix * mvPosition;
}`,Xk=St(jk,"vertexShader");class qk extends zi{constructor(e={}){super(e),Wk.use(this),Xk.use(this)}}const $k=`precision highp float;

uniform vec3 uColor;

varying float vDepth;

void main() {
	vec2 discardUv = (gl_FragCoord.xy) * 0.15;
	discardUv.x += step(1., mod(discardUv.y, 2.)) * 0.5;
	discardUv = fract(discardUv);
	float closeDepth = smoothstep(.017, .0, vDepth);
	float dpMask = smoothstep(closeDepth - 0.2, closeDepth, length(discardUv - 0.5));

	if(dpMask < 0.5)
		discard;

	gl_FragColor = vec4(uColor, 1.);
}`,Yk=St($k,"fragmentShader"),Kk=`attribute vec3 position;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

varying float vDepth;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.);

  vDepth = smoothstep(NEAR, FAR, -mvPosition.z);

  gl_Position = projectionMatrix * mvPosition;
}`,Zk=St(Kk,"vertexShader");class Jk extends Qs{constructor(e={}){super(e),Yk.use(this),Zk.use(this)}}const Qk=`precision highp float;
varying vec2 vUv;
varying float vDepth;

uniform sampler2D uTex;

void main() {
  vec4 flag = texture2D(uTex, vUv);
  vec4 black = vec4(vec3(0.), 1.0);
  float depth = -vDepth * 1.2;
  gl_FragColor = mix( flag, black, depth);
}`,ez=St(Qk,"fragmentShader"),tz=`attribute vec3 position;
attribute vec2 uv;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform float uTime;

varying vec2 vUv;
varying float vDepth;

void main() {
  vec3 newPos = position;
  vUv = uv;
  newPos.y += sin(uTime * 0.005 + vUv.x) * 0.12 * position.x;
  vDepth = newPos.y;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.);
}`,nz=St(tz,"vertexShader");class iz extends Qs{constructor(e={}){super(e),ez.use(this),nz.use(this)}}const sz=`precision highp float;

uniform sampler2D tData, tDynamicShadows, tStaticShadows;
uniform vec3 uFloorColor, uGridColor, uLightPosition;
uniform float uSize, uZoom;

uniform sampler2D tSeamless1, tSeamless2, tSeamless3;

varying vec2 vUv;
varying vec3 vNormal, vViewPosition;
varying vec4 vShadowCoord;

#include <packing>

#define CIRCLE_SIZE .4
#define CIRCLE_GRADIENT .07

float readDepth(sampler2D depthSampler, vec2 coord) {
	float fragCoordZ = texture2D(depthSampler, coord).x;
	float viewZ = perspectiveDepthToViewZ(fragCoordZ, NEAR, FAR);
	return viewZToOrthographicDepth(viewZ, NEAR, FAR);
}

vec2 dHdxy_fwd(vec3 baseSample, sampler2D sampler, vec2 uv, float bumpScale) {
	vec2 dSTdx = dFdx(uv);
	vec2 dSTdy = dFdy(uv);

	float Hll = bumpScale * baseSample.r;
	float dBx = bumpScale * texture2D(sampler, uv + dSTdx).r - Hll;
	float dBy = bumpScale * texture2D(sampler, uv + dSTdy).r - Hll;

	return vec2(dBx, dBy);
}

vec3 perturbNormalArb(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy) {
	vec3 vSigmaX = dFdx(surf_pos.xyz);
	vec3 vSigmaY = dFdy(surf_pos.xyz);
	vec3 vN = surf_norm;
	vec3 R1 = cross(vSigmaY, vN);
	vec3 R2 = cross(vN, vSigmaX);
	float fDet = dot(vSigmaX, R1);
	vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
	return normalize(abs(fDet) * surf_norm - vGrad);
}

void main() {
	vec3 normal = vNormal;

	
	vec2 seamlessUv = vUv * 100.;

	vec3 seamless1 = texture2D(tSeamless1, seamlessUv).rgb;
	vec3 seamless2 = texture2D(tSeamless2, seamlessUv).rgb;
	vec3 seamless3 = texture2D(tSeamless3, seamlessUv).rgb;

	
	vec3 seamlessData = texture2D(tData, vUv).rgb;

	
	
	
	

	

	
	vec2 gridUv = mod(vUv * uSize, 1.);
	float gridCircle = smoothstep(CIRCLE_SIZE, CIRCLE_SIZE + CIRCLE_GRADIENT, length(gridUv - .5)) * .4;
	normal.y -= gridCircle;

	
	vec3 shadowCoord = vShadowCoord.xyz / vShadowCoord.w * 0.5 + 0.5;
	float depthShadowCoord = shadowCoord.z;

	vec2 depthMapUv = shadowCoord.xy;
	float depthShadowMap = readDepth(tDynamicShadows, depthMapUv) * readDepth(tStaticShadows, depthMapUv);

	float cosTheta = dot(normalize(uLightPosition), normal);
	float bias = 0.005 * tan(acos(cosTheta));
	bias = clamp(bias, 0.0, 0.01);

	float shadowFactor = step(depthShadowCoord - bias, depthShadowMap);

	
	

	
	

	
	

	float difLight = max(0.0, cosTheta);
	float shading = shadowFactor * difLight;

	

	vec3 mix1 = mix(uFloorColor, seamless1, seamlessData.r);
	vec3 mix2 = mix(mix1, seamless2, seamlessData.g);
	vec3 mix3 = mix(mix2, seamless3, seamlessData.b);

	vec3 gMix = mix(mix1, mix2, seamlessData.g);
	vec3 final = mix(gMix, mix3, seamlessData.b);

	
	final = mix(final - .1, final + .1, shading);

	gl_FragColor = vec4(final, 1.);
}`,rz=St(sz,"fragmentShader"),oz=`uniform mat4 uShadowProjectionMatrix, uShadowMatrixInverse;

varying vec2 vUv;
varying vec3 vNormal, vViewPosition;
varying vec4 vShadowCoord;

void main() {
  vUv = uv;
  vNormal = normal;

  vec3 pos = position;
  vec4 mvPosition = viewMatrix * modelMatrix * vec4(pos, 1.);

  gl_Position = projectionMatrix * mvPosition;

  vViewPosition = -mvPosition.xyz;
  vShadowCoord = uShadowProjectionMatrix * uShadowMatrixInverse * modelMatrix * vec4(pos, 1.);
}`,az=St(oz,"vertexShader");class lz extends zi{constructor(e={}){super(e),rz.use(this),az.use(this)}}var Gu,ab,Hu,lb;class cz extends on{constructor(t){super();ve(this,Gu);ve(this,Hu);const n=t.data[0].length;this.geometry=Ve(this,Gu,ab).call(this,n),this.material=Ve(this,Hu,lb).call(this,n)}}Gu=new WeakSet,ab=function(t){const n=new gf(t,t,1,1);return n.rotateX(-Math.PI*.5),n.translate(t*.5,0,t*.5),n},Hu=new WeakSet,lb=function(t){const[n,s,r,o,a]=Me.core.assetsManager.get("groundData","seamless1","seamless2","seamless3","seamless4");return s.wrapS=s.wrapT=fi,r.wrapS=r.wrapT=fi,o.wrapS=o.wrapT=fi,a.wrapS=a.wrapT=fi,new lz({uniforms:{...Me.webgl.scene.dynamicShadowUniforms,...Me.webgl.scene.staticShadowUniforms,...Me.webgl.scene.commonShadowUniforms,uZoom:nn.uZoom,uSize:{value:t},uFloorColor:{value:new z(0,.39,.45)},uGridColor:{value:new z(0,0,0)},tData:{value:n},tSeamless1:{value:s},tSeamless2:{value:r},tSeamless3:{value:o},tSeamless4:{value:a}},defines:{NEAR:`${Me.webgl.scene.shadowCamera.near}.`,FAR:`${Me.webgl.scene.shadowCamera.far}.`}})};var Wu;class uz extends dt{constructor(t){super();ve(this,Wu,new Jk({uniforms:{uColor:{value:new Ne(0)}},defines:{NEAR:`${ft.near}.`,FAR:`${ft.far}.`}}));const n=new qk({uniforms:{uLightPosition:Me.webgl.scene.commonShadowUniforms.uLightPosition},defines:{NEAR:`${ft.near}.`,FAR:`${ft.far}.`}});this.glb=t,this.flagLoader=new Ep,this.domGameStore=xf(),this.flagObject=null,this.glb.traverse(s=>{s.isMesh&&(s.material=n),s.name==="Drapeau"&&(s.material=new iz({uniforms:{uTime:nn.uTime,uTex:{value:this.getWinnerFlag()}}}),this.flagObject=s)}),this.grid=new cz(zv),this.add(this.glb),this.add(this.grid),this.traverse(s=>{s.isMesh&&(s.userData.materials=[s.material,G(this,Wu)])}),Ue.on(qe.SCOREBOARD_UPDATE,()=>this.updateFlag())}getWinnerFlag(){return this.domGameStore.scoreboard[0]&&this.domGameStore.scoreboard[0].score&&this.domGameStore.scoreboard[0].score>0?this.flagLoader.load(`/assets/images/flags/${this.domGameStore.scoreboard[0].name}.png`):this.flagLoader.load("/assets/images/flags/JO-flag.png")}updateFlag(){this.flagObject.material.uniforms.uTex.value=this.getWinnerFlag()}}Wu=new WeakMap;var Gl;class fz extends hx{constructor(){super();ve(this,Gl,t=>{const n=new ki(t,t);return n.depthTexture=new bp(t,t),n});Ue.register(this),this.add(new h3(16777215,1));const t=Sl.size*.5+5;this.shadowCamera=new Xl(-t,t,t,-t,1,100),this.shadowCamera.position.set(-5,40,5),this.shadowCamera.lookAt(t,0,t);const n=4096;this.dynamicShadowRenderTarget=G(this,Gl).call(this,n),this.dynamicShadowUniforms={tDynamicShadows:{value:this.dynamicShadowRenderTarget.depthTexture}},this.staticShadowRenderTarget=G(this,Gl).call(this,n),this.staticShadowUniforms={tStaticShadows:{value:this.staticShadowRenderTarget.depthTexture}},this.commonShadowUniforms={uLightPosition:{value:this.shadowCamera.position},uShadowProjectionMatrix:{value:this.shadowCamera.projectionMatrix},uShadowMatrixInverse:{value:this.shadowCamera.matrixWorldInverse}}}onAppLoaded(){var n;const t=Dd(Me.webgl.renderer,Me.core.assetsManager.get("skybox"),!1);this.background=t,this.userData.backgrounds=[this.background,new Ne(0)],this.terrain=new uz(Me.core.assetsManager.get("terrain")),this.add(this.terrain),this.environment=Dd(Me.webgl.renderer,Me.core.assetsManager.get("envmap")),(n=Me.debug)==null||n.mapping.add(this,"Scene")}}Gl=new WeakMap;var Rr,ju,Hl,Xu,cb,qu,ub,$u,fb,Yu,hb,Ku,db,Zu,pb,ts,_r,ua,Nd,dz;class hz{constructor(){ve(this,Xu);ve(this,qu);ve(this,$u);ve(this,Yu);ve(this,Ku);ve(this,Zu);ve(this,ts);ve(this,ua);ve(this,Rr,new Us);ve(this,ju,e=>{const t=Me.core.assetsManager.get("player"),n=ny(t);n.animations=t.animations;const s=new wk(n,e);Me.webgl.players.set(e,s),G(this,Rr).add(s)});ve(this,Hl,e=>{const t=new oI(Me.core.assetsManager.get("medals"),e);Me.webgl.medals.set(e.id,t),G(this,Rr).add(t)});Ue.register(this),this.players=new Map,this.medals=new Map,this.renderer=new Fk,this.postProcessing=new Uk(this.renderer.capabilities.isWebGL2),this.scene=new fz,this.camera=new Bk,this.loginScene=new zk,this.loginCamera=new kk,this.scene.add(G(this,Rr)),this.renderLogin=!1}onAttach(){var e;Me.$wrapper.prepend(this.renderer.domElement),this.onRender(),Ve(this,Yu,hb).call(this),(e=Me.debug)==null||e.mapping.add(this,"Game",1)}onStateReady({teams:e,medals:t}){e.forEach(n=>this.onCreateTeam(n)),[...t.values()].forEach(G(this,Hl))}onJoinReady(e){const t=this.players.get(e);this.camera.playerPosition=t.position,this.camera.focusPlayer=!0,t.addRaycaster()}onCreateTeam(e){G(this,ju).call(this,e)}onVoteResults(e){this.players.get(e).move()}onSpawnMedals(e){e.forEach(G(this,Hl))}onCollectMedal(e){this.medals.get(e.id).removeFromParent()}onTick({et:e}){nn.uTime.value=e}onRender(){this.renderer.clear(),this.renderLogin?Ve(this,Xu,cb).call(this):(Ve(this,$u,fb).call(this),Ve(this,qu,ub).call(this),Ve(this,Ku,db).call(this),Ve(this,Zu,pb).call(this))}}Rr=new WeakMap,ju=new WeakMap,Hl=new WeakMap,Xu=new WeakSet,cb=function(){this.renderer.render(this.loginScene,this.loginCamera)},qu=new WeakSet,ub=function(){Ve(this,ts,_r).call(this,this.scene,this.camera,this.postProcessing.renderTarget)},$u=new WeakSet,fb=function(){Ve(this,ts,_r).call(this,G(this,Rr),this.scene.shadowCamera,this.scene.dynamicShadowRenderTarget)},Yu=new WeakSet,hb=function(){Ve(this,ts,_r).call(this,this.scene.terrain,this.scene.shadowCamera,this.scene.staticShadowRenderTarget)},Ku=new WeakSet,db=function(){mt(this,ua,!0,Nd),Ve(this,ts,_r).call(this,this.scene,this.camera,this.postProcessing.emissivePass.renderTargets[0]),mt(this,ua,!1,Nd),this.postProcessing.emissivePass.uniforms.tEmissive.value=this.postProcessing.emissivePass.renderTargets[0].texture,this.postProcessing.emissivePass.uniforms.uHorizontal.value=0,Ve(this,ts,_r).call(this,this.postProcessing.emissiveQuad,this.postProcessing.camera,this.postProcessing.emissivePass.renderTargets[1]),this.postProcessing.emissivePass.uniforms.tEmissive.value=this.postProcessing.emissivePass.renderTargets[1].texture,this.postProcessing.emissivePass.uniforms.uHorizontal.value=1,Ve(this,ts,_r).call(this,this.postProcessing.emissiveQuad,this.postProcessing.camera,this.postProcessing.emissivePass.renderTargets[2])},Zu=new WeakSet,pb=function(){this.renderer.setRenderTarget(null),this.renderer.clear(),this.renderer.render(this.postProcessing.quad,this.postProcessing.camera)},ts=new WeakSet,_r=function(e,t,n){this.renderer.setRenderTarget(n),this.renderer.clear(),this.renderer.render(e,t),this.renderer.setRenderTarget(null)},ua=new WeakSet,Nd=function(e){var t,n;nn.uEmissiveOnly.value=e,this.scene.background=this.scene.userData.backgrounds[+e],(n=(t=this.scene)==null?void 0:t.terrain)==null||n.traverse(s=>{s.isMesh&&(s.material=s.userData.materials[+e])})},dz=function(){return nn.uEmissiveOnly.value};var Ju,mb;const Mo=class{constructor(){ve(this,Ju)}async init(e,t){var n;this.$app=e,this.$wrapper=t,this.vueApp=Ve(this,Ju,mb).call(this),this.server=new jL,this.game=new HL,this.sound=new nL,this.core=VL(),this.tools=rI(),this.webgl=new hz,(n=this.debug)==null||n.mapping.init(),await this.load()}async beforeLoad(){}async load(){await this.beforeLoad(),await this.core.assetsManager.load(),Ue.emit(qe.APP_LOADED),Ue.emit(qe.RESIZE,this.tools.viewport.infos),Ue.emit(qe.ATTACH)}static getInstance(){return Mo.instance||(Mo.instance=new Mo),Mo.instance}};let qc=Mo;Ju=new WeakSet,mb=function(){const e=XP({legacy:!1,globalInjection:!0,locale:"en",fallbackLocale:"en",availableLocales:["en","fr","es"],messages:WL}),t=jM(ew);return t.use(gw()),t.use(yf),t.use(e),t.mount("#vue-app"),t},In(qc,"instance");const Me=qc.getInstance();/*!
 * paths 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var pz=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,mz=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,gz=Math.PI/180,Pc=Math.sin,Ic=Math.cos,cl=Math.abs,Ha=Math.sqrt,_z=function(e){return typeof e=="number"},b_=1e5,Ms=function(e){return Math.round(e*b_)/b_||0};function vz(i,e,t,n,s,r,o){for(var a=i.length,l,c,u,f,h;--a>-1;)for(l=i[a],c=l.length,u=0;u<c;u+=2)f=l[u],h=l[u+1],l[u]=f*e+h*n+r,l[u+1]=f*t+h*s+o;return i._dirty=1,i}function xz(i,e,t,n,s,r,o,a,l){if(!(i===a&&e===l)){t=cl(t),n=cl(n);var c=s%360*gz,u=Ic(c),f=Pc(c),h=Math.PI,p=h*2,g=(i-a)/2,d=(e-l)/2,m=u*g+f*d,_=-f*g+u*d,x=m*m,v=_*_,y=x/(t*t)+v/(n*n);y>1&&(t=Ha(y)*t,n=Ha(y)*n);var M=t*t,E=n*n,A=(M*E-M*v-E*x)/(M*v+E*x);A<0&&(A=0);var b=(r===o?-1:1)*Ha(A),T=b*(t*_/n),P=b*-(n*m/t),I=(i+a)/2,$=(e+l)/2,N=I+(u*T-f*P),D=$+(f*T+u*P),O=(m-T)/t,Y=(_-P)/n,j=(-m-T)/t,V=(-_-P)/n,re=O*O+Y*Y,he=(Y<0?-1:1)*Math.acos(O/Ha(re)),be=(O*V-Y*j<0?-1:1)*Math.acos((O*j+Y*V)/Ha(re*(j*j+V*V)));isNaN(be)&&(be=h),!o&&be>0?be-=p:o&&be<0&&(be+=p),he%=p,be%=p;var X=Math.ceil(cl(be)/(p/4)),ue=[],pe=be/X,H=4/3*Pc(pe/2)/(1+Ic(pe/2)),Se=u*t,B=f*t,Q=f*-n,Z=u*n,oe;for(oe=0;oe<X;oe++)s=he+oe*pe,m=Ic(s),_=Pc(s),O=Ic(s+=pe),Y=Pc(s),ue.push(m-H*_,_+H*m,O+H*Y,Y-H*O,O,Y);for(oe=0;oe<ue.length;oe+=2)m=ue[oe],_=ue[oe+1],ue[oe]=m*Se+_*Q+N,ue[oe+1]=m*B+_*Z+D;return ue[oe-2]=a,ue[oe-1]=l,ue}}function yz(i){var e=(i+"").replace(mz,function(T){var P=+T;return P<1e-4&&P>-1e-4?0:P}).match(pz)||[],t=[],n=0,s=0,r=2/3,o=e.length,a=0,l="ERROR: malformed path: "+i,c,u,f,h,p,g,d,m,_,x,v,y,M,E,A,b=function(P,I,$,N){x=($-P)/3,v=(N-I)/3,d.push(P+x,I+v,$-x,N-v,$,N)};if(!i||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(c=0;c<o;c++)if(M=p,isNaN(e[c])?(p=e[c].toUpperCase(),g=p!==e[c]):c--,f=+e[c+1],h=+e[c+2],g&&(f+=n,h+=s),c||(m=f,_=h),p==="M")d&&(d.length<8?t.length-=1:a+=d.length),n=m=f,s=_=h,d=[f,h],t.push(d),c+=2,p="L";else if(p==="C")d||(d=[0,0]),g||(n=s=0),d.push(f,h,n+e[c+3]*1,s+e[c+4]*1,n+=e[c+5]*1,s+=e[c+6]*1),c+=6;else if(p==="S")x=n,v=s,(M==="C"||M==="S")&&(x+=n-d[d.length-4],v+=s-d[d.length-3]),g||(n=s=0),d.push(x,v,f,h,n+=e[c+3]*1,s+=e[c+4]*1),c+=4;else if(p==="Q")x=n+(f-n)*r,v=s+(h-s)*r,g||(n=s=0),n+=e[c+3]*1,s+=e[c+4]*1,d.push(x,v,n+(f-n)*r,s+(h-s)*r,n,s),c+=4;else if(p==="T")x=n-d[d.length-4],v=s-d[d.length-3],d.push(n+x,s+v,f+(n+x*1.5-f)*r,h+(s+v*1.5-h)*r,n=f,s=h),c+=2;else if(p==="H")b(n,s,n=f,s),c+=1;else if(p==="V")b(n,s,n,s=f+(g?s-n:0)),c+=1;else if(p==="L"||p==="Z")p==="Z"&&(f=m,h=_,d.closed=!0),(p==="L"||cl(n-f)>.5||cl(s-h)>.5)&&(b(n,s,f,h),p==="L"&&(c+=2)),n=f,s=h;else if(p==="A"){if(E=e[c+4],A=e[c+5],x=e[c+6],v=e[c+7],u=7,E.length>1&&(E.length<3?(v=x,x=A,u--):(v=A,x=E.substr(2),u-=2),A=E.charAt(1),E=E.charAt(0)),y=xz(n,s,+e[c+1],+e[c+2],+e[c+3],+E,+A,(g?n:0)+x*1,(g?s:0)+v*1),c+=u,y)for(u=0;u<y.length;u++)d.push(y[u]);n=d[d.length-2],s=d[d.length-1]}else console.log(l);return c=d.length,c<6?(t.pop(),c=0):d[0]===d[c-2]&&d[1]===d[c-1]&&(d.closed=!0),t.totalPoints=a+c,t}function bz(i){_z(i[0])&&(i=[i]);var e="",t=i.length,n,s,r,o;for(s=0;s<t;s++){for(o=i[s],e+="M"+Ms(o[0])+","+Ms(o[1])+" C",n=o.length,r=2;r<n;r++)e+=Ms(o[r++])+","+Ms(o[r++])+" "+Ms(o[r++])+","+Ms(o[r++])+" "+Ms(o[r++])+","+Ms(o[r])+" ";o.closed&&(e+="z")}return e}/*!
 * CustomEase 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Mn,gb,_b=function(){return Mn||typeof window<"u"&&(Mn=window.gsap)&&Mn.registerPlugin&&Mn},M_=function(){Mn=_b(),Mn?(Mn.registerEase("_CE",Kl.create),gb=1):console.warn("Please gsap.registerPlugin(CustomEase)")},Mz=1e20,Dc=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},Sz=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,wz=/[cLlsSaAhHvVtTqQ]/g,Tz=function(e){var t=e.length,n=Mz,s;for(s=1;s<t;s+=6)+e[s]<n&&(n=+e[s]);return n},Ez=function(e,t,n){!n&&n!==0&&(n=Math.max(+e[e.length-1],+e[1]));var s=+e[0]*-1,r=-n,o=e.length,a=1/(+e[o-2]+s),l=-t||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?Tz(e)+r:+e[o-1]+r),c;for(l?l=1/l:l=-a,c=0;c<o;c+=2)e[c]=(+e[c]+s)*a,e[c+1]=(+e[c+1]+r)*l},Az=function i(e,t,n,s,r,o,a,l,c,u,f){var h=(e+n)/2,p=(t+s)/2,g=(n+r)/2,d=(s+o)/2,m=(r+a)/2,_=(o+l)/2,x=(h+g)/2,v=(p+d)/2,y=(g+m)/2,M=(d+_)/2,E=(x+y)/2,A=(v+M)/2,b=a-e,T=l-t,P=Math.abs((n-a)*T-(s-l)*b),I=Math.abs((r-a)*T-(o-l)*b),$;return u||(u=[{x:e,y:t},{x:a,y:l}],f=1),u.splice(f||u.length-1,0,{x:E,y:A}),(P+I)*(P+I)>c*(b*b+T*T)&&($=u.length,i(e,t,h,p,x,v,E,A,c,u,f),i(E,A,y,M,m,_,a,l,c,u,f+1+(u.length-$))),u},Kl=function(){function i(t,n,s){gb||M_(),this.id=t,this.setData(n,s)}var e=i.prototype;return e.setData=function(n,s){s=s||{},n=n||"0,0,1,1";var r=n.match(Sz),o=1,a=[],l=[],c=s.precision||1,u=c<=1,f,h,p,g,d,m,_,x,v;if(this.data=n,(wz.test(n)||~n.indexOf("M")&&n.indexOf("C")<0)&&(r=yz(n)[0]),f=r.length,f===4)r.unshift(0,0),r.push(1,1),f=8;else if((f-2)%6)throw"Invalid CustomEase";for((+r[0]!=0||+r[f-2]!=1)&&Ez(r,s.height,s.originY),this.segment=r,g=2;g<f;g+=6)h={x:+r[g-2],y:+r[g-1]},p={x:+r[g+4],y:+r[g+5]},a.push(h,p),Az(h.x,h.y,+r[g],+r[g+1],+r[g+2],+r[g+3],p.x,p.y,1/(c*2e5),a,a.length-1);for(f=a.length,g=0;g<f;g++)_=a[g],x=a[g-1]||_,(_.x>x.x||x.y!==_.y&&x.x===_.x||_===x)&&_.x<=1?(x.cx=_.x-x.x,x.cy=_.y-x.y,x.n=_,x.nx=_.x,u&&g>1&&Math.abs(x.cy/x.cx-a[g-2].cy/a[g-2].cx)>2&&(u=0),x.cx<o&&(x.cx?o=x.cx:(x.cx=.001,g===f-1&&(x.x-=.001,o=Math.min(o,.001),u=0)))):(a.splice(g--,1),f--);if(f=1/o+1|0,d=1/f,m=0,_=a[0],u){for(g=0;g<f;g++)v=g*d,_.nx<v&&(_=a[++m]),h=_.y+(v-_.x)/_.cx*_.cy,l[g]={x:v,cx:d,y:h,cy:0,nx:9},g&&(l[g-1].cy=h-l[g-1].y);l[f-1].cy=a[a.length-1].y-h}else{for(g=0;g<f;g++)_.nx<g*d&&(_=a[++m]),l[g]=_;m<a.length-1&&(l[g-1]=a[a.length-2])}return this.ease=function(y){var M=l[y*f|0]||l[f-1];return M.nx<y&&(M=M.n),M.y+(y-M.x)/M.cx*M.cy},this.ease.custom=this,this.id&&Mn&&Mn.registerEase(this.id,this.ease),this},e.getSVGData=function(n){return i.getSVGData(this,n)},i.create=function(n,s,r){return new i(n,s,r).ease},i.register=function(n){Mn=n,M_()},i.get=function(n){return Mn.parseEase(n)},i.getSVGData=function(n,s){s=s||{};var r=s.width||100,o=s.height||100,a=s.x||0,l=(s.y||0)+o,c=Mn.utils.toArray(s.path)[0],u,f,h,p,g,d,m,_,x,v;if(s.invert&&(o=-o,l=0),typeof n=="string"&&(n=Mn.parseEase(n)),n.custom&&(n=n.custom),n instanceof i)u=bz(vz([n.segment],r,0,0,-o,a,l));else{for(u=[a,l],m=Math.max(5,(s.precision||1)*200),p=1/m,m+=2,_=5/m,x=Dc(a+p*r),v=Dc(l+n(p)*-o),f=(v-l)/(x-a),h=2;h<m;h++)g=Dc(a+h*p*r),d=Dc(l+n(h*p)*-o),(Math.abs((d-v)/(g-x)-f)>_||h===m-1)&&(u.push(x,v),f=(d-v)/(g-x)),x=g,v=d;u="M"+u.join(",")}return c&&c.setAttribute("d",u),u},i}();_b()&&Mn.registerPlugin(Kl);Kl.version="3.11.5";Yl.registerPlugin(Kl);Kl.create("playerJump","M0,0 C0.426,0 0.43,-0.014 0.488,0.072 0.633,0.291 0.544,0.803 0.756,0.908 0.886,0.972 0.982,1 1,1");Me.init(document.getElementById("webgl-app"),document.getElementById("canvas-wrapper"));export{qe as E,Yn as F,up as S,Be as V,dp as _,Ut as a,Lz as b,ma as c,Me as d,pp as e,Pt as f,cf as g,ev as h,xf as i,ip as j,sp as k,Cc as l,Wd as m,Hd as n,Ui as o,Q_ as p,Rz as q,ci as r,Ue as s,Fb as t,Pr as u,bm as v,eu as w};
