var Ab=Object.defineProperty;var Cb=(i,e,t)=>e in i?Ab(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Nn=(i,e,t)=>(Cb(i,typeof e!="symbol"?e+"":e,t),t),Nf=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)};var G=(i,e,t)=>(Nf(i,e,"read from private field"),t?t.call(i):e.get(i)),ve=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},mt=(i,e,t,n)=>(Nf(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t);var Ve=(i,e,t)=>(Nf(i,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Gd(i,e){const t=Object.create(null),n=i.split(",");for(let s=0;s<n.length;s++)t[n[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const _t={},To=[],gi=()=>{},Rb=()=>!1,Lb=/^on[^a-z]/,sf=i=>Lb.test(i),Hd=i=>i.startsWith("onUpdate:"),qt=Object.assign,Wd=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Pb=Object.prototype.hasOwnProperty,Qe=(i,e)=>Pb.call(i,e),Fe=Array.isArray,Eo=i=>rf(i)==="[object Map]",R_=i=>rf(i)==="[object Set]",He=i=>typeof i=="function",zt=i=>typeof i=="string",jd=i=>typeof i=="symbol",vt=i=>i!==null&&typeof i=="object",L_=i=>vt(i)&&He(i.then)&&He(i.catch),P_=Object.prototype.toString,rf=i=>P_.call(i),Ib=i=>rf(i).slice(8,-1),I_=i=>rf(i)==="[object Object]",Xd=i=>zt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,kc=Gd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),of=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Db=/-(\w)/g,Yo=of(i=>i.replace(Db,(e,t)=>t?t.toUpperCase():"")),Nb=/\B([A-Z])/g,da=of(i=>i.replace(Nb,"-$1").toLowerCase()),D_=of(i=>i.charAt(0).toUpperCase()+i.slice(1)),Of=of(i=>i?`on${D_(i)}`:""),dl=(i,e)=>!Object.is(i,e),Uf=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},Jc=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},Ob=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let lm;const Uh=()=>lm||(lm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yd(i){if(Fe(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],s=zt(n)?zb(n):Yd(n);if(s)for(const r in s)e[r]=s[r]}return e}else{if(zt(i))return i;if(vt(i))return i}}const Ub=/;(?![^(]*\))/g,Fb=/:([^]+)/,kb=new RegExp("\\/\\*.*?\\*\\/","gs");function zb(i){const e={};return i.replace(kb,"").split(Ub).forEach(t=>{if(t){const n=t.split(Fb);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function qd(i){let e="";if(zt(i))e=i;else if(Fe(i))for(let t=0;t<i.length;t++){const n=qd(i[t]);n&&(e+=n+" ")}else if(vt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Bb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vb=Gd(Bb);function N_(i){return!!i||i===""}const Gb=i=>zt(i)?i:i==null?"":Fe(i)||vt(i)&&(i.toString===P_||!He(i.toString))?JSON.stringify(i,O_,2):String(i),O_=(i,e)=>e&&e.__v_isRef?O_(i,e.value):Eo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,s])=>(t[`${n} =>`]=s,t),{})}:R_(e)?{[`Set(${e.size})`]:[...e.values()]}:vt(e)&&!Fe(e)&&!I_(e)?String(e):e;let zn;class U_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=zn,!e&&zn&&(this.index=(zn.scopes||(zn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=zn;try{return zn=this,e()}finally{zn=t}}}on(){zn=this}off(){zn=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function $d(i){return new U_(i)}function Hb(i,e=zn){e&&e.active&&e.effects.push(i)}function F_(){return zn}function Wb(i){zn&&zn.cleanups.push(i)}const Kd=i=>{const e=new Set(i);return e.w=0,e.n=0,e},k_=i=>(i.w&$s)>0,z_=i=>(i.n&$s)>0,jb=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=$s},Xb=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const s=e[n];k_(s)&&!z_(s)?s.delete(i):e[t++]=s,s.w&=~$s,s.n&=~$s}e.length=t}},Qc=new WeakMap;let Xa=0,$s=1;const Fh=30;let fi;const Ir=Symbol(""),kh=Symbol("");class Zd{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Hb(this,n)}run(){if(!this.active)return this.fn();let e=fi,t=Gs;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=fi,fi=this,Gs=!0,$s=1<<++Xa,Xa<=Fh?jb(this):cm(this),this.fn()}finally{Xa<=Fh&&Xb(this),$s=1<<--Xa,fi=this.parent,Gs=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){fi===this?this.deferStop=!0:this.active&&(cm(this),this.onStop&&this.onStop(),this.active=!1)}}function cm(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let Gs=!0;const B_=[];function pa(){B_.push(Gs),Gs=!1}function ma(){const i=B_.pop();Gs=i===void 0?!0:i}function Ln(i,e,t){if(Gs&&fi){let n=Qc.get(i);n||Qc.set(i,n=new Map);let s=n.get(t);s||n.set(t,s=Kd()),V_(s)}}function V_(i,e){let t=!1;Xa<=Fh?z_(i)||(i.n|=$s,t=!k_(i)):t=!i.has(fi),t&&(i.add(fi),fi.deps.push(i))}function us(i,e,t,n,s,r){const o=Qc.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Fe(i)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Fe(i)?Xd(t)&&a.push(o.get("length")):(a.push(o.get(Ir)),Eo(i)&&a.push(o.get(kh)));break;case"delete":Fe(i)||(a.push(o.get(Ir)),Eo(i)&&a.push(o.get(kh)));break;case"set":Eo(i)&&a.push(o.get(Ir));break}if(a.length===1)a[0]&&zh(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);zh(Kd(l))}}function zh(i,e){const t=Fe(i)?i:[...i];for(const n of t)n.computed&&um(n);for(const n of t)n.computed||um(n)}function um(i,e){(i!==fi||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}function Yb(i,e){var t;return(t=Qc.get(i))==null?void 0:t.get(e)}const qb=Gd("__proto__,__v_isRef,__isVue"),G_=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(jd)),$b=Jd(),Kb=Jd(!1,!0),Zb=Jd(!0),fm=Jb();function Jb(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=tt(this);for(let r=0,o=this.length;r<o;r++)Ln(n,"get",r+"");const s=n[e](...t);return s===-1||s===!1?n[e](...t.map(tt)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){pa();const n=tt(this)[e].apply(this,t);return ma(),n}}),i}function Qb(i){const e=tt(this);return Ln(e,"has",i),e.hasOwnProperty(i)}function Jd(i=!1,e=!1){return function(n,s,r){if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(i?e?m1:Y_:e?X_:j_).get(n))return n;const o=Fe(n);if(!i){if(o&&Qe(fm,s))return Reflect.get(fm,s,r);if(s==="hasOwnProperty")return Qb}const a=Reflect.get(n,s,r);return(jd(s)?G_.has(s):qb(s))||(i||Ln(n,"get",s),e)?a:Mt(a)?o&&Xd(s)?a:a.value:vt(a)?i?q_(a):ga(a):a}}const e1=H_(),t1=H_(!0);function H_(i=!1){return function(t,n,s,r){let o=t[n];if(qo(o)&&Mt(o)&&!Mt(s))return!1;if(!i&&(!eu(s)&&!qo(s)&&(o=tt(o),s=tt(s)),!Fe(t)&&Mt(o)&&!Mt(s)))return o.value=s,!0;const a=Fe(t)&&Xd(n)?Number(n)<t.length:Qe(t,n),l=Reflect.set(t,n,s,r);return t===tt(r)&&(a?dl(s,o)&&us(t,"set",n,s):us(t,"add",n,s)),l}}function n1(i,e){const t=Qe(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&us(i,"delete",e,void 0),n}function i1(i,e){const t=Reflect.has(i,e);return(!jd(e)||!G_.has(e))&&Ln(i,"has",e),t}function s1(i){return Ln(i,"iterate",Fe(i)?"length":Ir),Reflect.ownKeys(i)}const W_={get:$b,set:e1,deleteProperty:n1,has:i1,ownKeys:s1},r1={get:Zb,set(i,e){return!0},deleteProperty(i,e){return!0}},o1=qt({},W_,{get:Kb,set:t1}),Qd=i=>i,af=i=>Reflect.getPrototypeOf(i);function ec(i,e,t=!1,n=!1){i=i.__v_raw;const s=tt(i),r=tt(e);t||(e!==r&&Ln(s,"get",e),Ln(s,"get",r));const{has:o}=af(s),a=n?Qd:t?np:pl;if(o.call(s,e))return a(i.get(e));if(o.call(s,r))return a(i.get(r));i!==s&&i.get(e)}function tc(i,e=!1){const t=this.__v_raw,n=tt(t),s=tt(i);return e||(i!==s&&Ln(n,"has",i),Ln(n,"has",s)),i===s?t.has(i):t.has(i)||t.has(s)}function nc(i,e=!1){return i=i.__v_raw,!e&&Ln(tt(i),"iterate",Ir),Reflect.get(i,"size",i)}function hm(i){i=tt(i);const e=tt(this);return af(e).has.call(e,i)||(e.add(i),us(e,"add",i,i)),this}function dm(i,e){e=tt(e);const t=tt(this),{has:n,get:s}=af(t);let r=n.call(t,i);r||(i=tt(i),r=n.call(t,i));const o=s.call(t,i);return t.set(i,e),r?dl(e,o)&&us(t,"set",i,e):us(t,"add",i,e),this}function pm(i){const e=tt(this),{has:t,get:n}=af(e);let s=t.call(e,i);s||(i=tt(i),s=t.call(e,i)),n&&n.call(e,i);const r=e.delete(i);return s&&us(e,"delete",i,void 0),r}function mm(){const i=tt(this),e=i.size!==0,t=i.clear();return e&&us(i,"clear",void 0,void 0),t}function ic(i,e){return function(n,s){const r=this,o=r.__v_raw,a=tt(o),l=e?Qd:i?np:pl;return!i&&Ln(a,"iterate",Ir),o.forEach((c,u)=>n.call(s,l(c),l(u),r))}}function sc(i,e,t){return function(...n){const s=this.__v_raw,r=tt(s),o=Eo(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),u=t?Qd:e?np:pl;return!e&&Ln(r,"iterate",l?kh:Ir),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function gs(i){return function(...e){return i==="delete"?!1:this}}function a1(){const i={get(r){return ec(this,r)},get size(){return nc(this)},has:tc,add:hm,set:dm,delete:pm,clear:mm,forEach:ic(!1,!1)},e={get(r){return ec(this,r,!1,!0)},get size(){return nc(this)},has:tc,add:hm,set:dm,delete:pm,clear:mm,forEach:ic(!1,!0)},t={get(r){return ec(this,r,!0)},get size(){return nc(this,!0)},has(r){return tc.call(this,r,!0)},add:gs("add"),set:gs("set"),delete:gs("delete"),clear:gs("clear"),forEach:ic(!0,!1)},n={get(r){return ec(this,r,!0,!0)},get size(){return nc(this,!0)},has(r){return tc.call(this,r,!0)},add:gs("add"),set:gs("set"),delete:gs("delete"),clear:gs("clear"),forEach:ic(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=sc(r,!1,!1),t[r]=sc(r,!0,!1),e[r]=sc(r,!1,!0),n[r]=sc(r,!0,!0)}),[i,t,e,n]}const[l1,c1,u1,f1]=a1();function ep(i,e){const t=e?i?f1:u1:i?c1:l1;return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(Qe(t,s)&&s in n?t:n,s,r)}const h1={get:ep(!1,!1)},d1={get:ep(!1,!0)},p1={get:ep(!0,!1)},j_=new WeakMap,X_=new WeakMap,Y_=new WeakMap,m1=new WeakMap;function g1(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _1(i){return i.__v_skip||!Object.isExtensible(i)?0:g1(Ib(i))}function ga(i){return qo(i)?i:tp(i,!1,W_,h1,j_)}function v1(i){return tp(i,!1,o1,d1,X_)}function q_(i){return tp(i,!0,r1,p1,Y_)}function tp(i,e,t,n,s){if(!vt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const r=s.get(i);if(r)return r;const o=_1(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return s.set(i,a),a}function Hs(i){return qo(i)?Hs(i.__v_raw):!!(i&&i.__v_isReactive)}function qo(i){return!!(i&&i.__v_isReadonly)}function eu(i){return!!(i&&i.__v_isShallow)}function $_(i){return Hs(i)||qo(i)}function tt(i){const e=i&&i.__v_raw;return e?tt(e):i}function $o(i){return Jc(i,"__v_skip",!0),i}const pl=i=>vt(i)?ga(i):i,np=i=>vt(i)?q_(i):i;function K_(i){Gs&&fi&&(i=tt(i),V_(i.dep||(i.dep=Kd())))}function Z_(i,e){i=tt(i);const t=i.dep;t&&zh(t)}function Mt(i){return!!(i&&i.__v_isRef===!0)}function hi(i){return J_(i,!1)}function x1(i){return J_(i,!0)}function J_(i,e){return Mt(i)?i:new y1(i,e)}class y1{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:tt(e),this._value=t?e:pl(e)}get value(){return K_(this),this._value}set value(e){const t=this.__v_isShallow||eu(e)||qo(e);e=t?e:tt(e),dl(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:pl(e),Z_(this))}}function Dr(i){return Mt(i)?i.value:i}const b1={get:(i,e,t)=>Dr(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const s=i[e];return Mt(s)&&!Mt(t)?(s.value=t,!0):Reflect.set(i,e,t,n)}};function Q_(i){return Hs(i)?i:new Proxy(i,b1)}function M1(i){const e=Fe(i)?new Array(i.length):{};for(const t in i)e[t]=w1(i,t);return e}class S1{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Yb(tt(this._object),this._key)}}function w1(i,e,t){const n=i[e];return Mt(n)?n:new S1(i,e,t)}class T1{constructor(e,t,n,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Zd(e,()=>{this._dirty||(this._dirty=!0,Z_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=n}get value(){const e=tt(this);return K_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function E1(i,e,t=!1){let n,s;const r=He(i);return r?(n=i,s=gi):(n=i.get,s=i.set),new T1(n,s,r||!s,t)}function Ws(i,e,t,n){let s;try{s=n?i(...n):i()}catch(r){lf(r,e,t)}return s}function _i(i,e,t,n){if(He(i)){const r=Ws(i,e,t,n);return r&&L_(r)&&r.catch(o=>{lf(o,e,t)}),r}const s=[];for(let r=0;r<i.length;r++)s.push(_i(i[r],e,t,n));return s}function lf(i,e,t,n=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Ws(l,null,10,[i,o,a]);return}}A1(i,t,s,n)}function A1(i,e,t,n=!0){console.error(i)}let ml=!1,Bh=!1;const on=[];let Oi=0;const Ao=[];let Ji=null,yr=0;const ev=Promise.resolve();let ip=null;function sp(i){const e=ip||ev;return i?e.then(this?i.bind(this):i):e}function C1(i){let e=Oi+1,t=on.length;for(;e<t;){const n=e+t>>>1;gl(on[n])<i?e=n+1:t=n}return e}function rp(i){(!on.length||!on.includes(i,ml&&i.allowRecurse?Oi+1:Oi))&&(i.id==null?on.push(i):on.splice(C1(i.id),0,i),tv())}function tv(){!ml&&!Bh&&(Bh=!0,ip=ev.then(iv))}function R1(i){const e=on.indexOf(i);e>Oi&&on.splice(e,1)}function L1(i){Fe(i)?Ao.push(...i):(!Ji||!Ji.includes(i,i.allowRecurse?yr+1:yr))&&Ao.push(i),tv()}function gm(i,e=ml?Oi+1:0){for(;e<on.length;e++){const t=on[e];t&&t.pre&&(on.splice(e,1),e--,t())}}function nv(i){if(Ao.length){const e=[...new Set(Ao)];if(Ao.length=0,Ji){Ji.push(...e);return}for(Ji=e,Ji.sort((t,n)=>gl(t)-gl(n)),yr=0;yr<Ji.length;yr++)Ji[yr]();Ji=null,yr=0}}const gl=i=>i.id==null?1/0:i.id,P1=(i,e)=>{const t=gl(i)-gl(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function iv(i){Bh=!1,ml=!0,on.sort(P1);const e=gi;try{for(Oi=0;Oi<on.length;Oi++){const t=on[Oi];t&&t.active!==!1&&Ws(t,null,14)}}finally{Oi=0,on.length=0,nv(),ml=!1,ip=null,(on.length||Ao.length)&&iv()}}function I1(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||_t;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=n[u]||_t;h&&(s=t.map(p=>zt(p)?p.trim():p)),f&&(s=t.map(Ob))}let a,l=n[a=Of(e)]||n[a=Of(Yo(e))];!l&&r&&(l=n[a=Of(da(e))]),l&&_i(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,_i(c,i,6,s)}}function sv(i,e,t=!1){const n=e.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!He(i)){const l=c=>{const u=sv(c,e,!0);u&&(a=!0,qt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(vt(i)&&n.set(i,null),null):(Fe(r)?r.forEach(l=>o[l]=null):qt(o,r),vt(i)&&n.set(i,o),o)}function cf(i,e){return!i||!sf(e)?!1:(e=e.slice(2).replace(/Once$/,""),Qe(i,e[0].toLowerCase()+e.slice(1))||Qe(i,da(e))||Qe(i,e))}let _n=null,uf=null;function tu(i){const e=_n;return _n=i,uf=i&&i.type.__scopeId||null,e}function rv(i){uf=i}function ov(){uf=null}function op(i,e=_n,t){if(!e||i._n)return i;const n=(...s)=>{n._d&&Em(-1);const r=tu(e);let o;try{o=i(...s)}finally{tu(r),n._d&&Em(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Ff(i){const{type:e,vnode:t,proxy:n,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:g,inheritAttrs:d}=i;let m,_;const x=tu(i);try{if(t.shapeFlag&4){const y=s||n;m=Ii(u.call(y,y,f,r,p,h,g)),_=l}else{const y=e;m=Ii(y.length>1?y(r,{attrs:l,slots:a,emit:c}):y(r,null)),_=e.props?l:D1(l)}}catch(y){tl.length=0,lf(y,i,1),m=Dt(Ks)}let v=m;if(_&&d!==!1){const y=Object.keys(_),{shapeFlag:M}=v;y.length&&M&7&&(o&&y.some(Hd)&&(_=N1(_,o)),v=Ko(v,_))}return t.dirs&&(v=Ko(v),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&(v.transition=t.transition),m=v,tu(x),m}const D1=i=>{let e;for(const t in i)(t==="class"||t==="style"||sf(t))&&((e||(e={}))[t]=i[t]);return e},N1=(i,e)=>{const t={};for(const n in i)(!Hd(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function O1(i,e,t){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?_m(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!cf(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?_m(n,o,c):!0:!!o;return!1}function _m(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(e[r]!==i[r]&&!cf(t,r))return!0}return!1}function U1({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const F1=i=>i.__isSuspense;function k1(i,e){e&&e.pendingBranch?Fe(i)?e.effects.push(...i):e.effects.push(i):L1(i)}const rc={};function js(i,e,t){return av(i,e,t)}function av(i,e,{immediate:t,deep:n,flush:s,onTrack:r,onTrigger:o}=_t){var a;const l=F_()===((a=Qt)==null?void 0:a.scope)?Qt:null;let c,u=!1,f=!1;if(Mt(i)?(c=()=>i.value,u=eu(i)):Hs(i)?(c=()=>i,n=!0):Fe(i)?(f=!0,u=i.some(y=>Hs(y)||eu(y)),c=()=>i.map(y=>{if(Mt(y))return y.value;if(Hs(y))return po(y);if(He(y))return Ws(y,l,2)})):He(i)?e?c=()=>Ws(i,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),_i(i,l,3,[p])}:c=gi,e&&n){const y=c;c=()=>po(y())}let h,p=y=>{h=x.onStop=()=>{Ws(y,l,4)}},g;if(vl)if(p=gi,e?t&&_i(e,l,3,[c(),f?[]:void 0,p]):c(),s==="sync"){const y=RM();g=y.__watcherHandles||(y.__watcherHandles=[])}else return gi;let d=f?new Array(i.length).fill(rc):rc;const m=()=>{if(x.active)if(e){const y=x.run();(n||u||(f?y.some((M,E)=>dl(M,d[E])):dl(y,d)))&&(h&&h(),_i(e,l,3,[y,d===rc?void 0:f&&d[0]===rc?[]:d,p]),d=y)}else x.run()};m.allowRecurse=!!e;let _;s==="sync"?_=m:s==="post"?_=()=>Sn(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),_=()=>rp(m));const x=new Zd(c,_);e?t?m():d=x.run():s==="post"?Sn(x.run.bind(x),l&&l.suspense):x.run();const v=()=>{x.stop(),l&&l.scope&&Wd(l.scope.effects,x)};return g&&g.push(v),v}function z1(i,e,t){const n=this.proxy,s=zt(i)?i.includes(".")?lv(n,i):()=>n[i]:i.bind(n,n);let r;He(e)?r=e:(r=e.handler,t=e);const o=Qt;Zo(this);const a=av(s,r.bind(n),t);return o?Zo(o):Nr(),a}function lv(i,e){const t=e.split(".");return()=>{let n=i;for(let s=0;s<t.length&&n;s++)n=n[t[s]];return n}}function po(i,e){if(!vt(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),Mt(i))po(i.value,e);else if(Fe(i))for(let t=0;t<i.length;t++)po(i[t],e);else if(R_(i)||Eo(i))i.forEach(t=>{po(t,e)});else if(I_(i))for(const t in i)po(i[t],e);return i}function lr(i,e,t,n){const s=i.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(pa(),_i(l,t,8,[i.el,a,i,e]),ma())}}function cv(i,e){return He(i)?(()=>qt({name:i.name},e,{setup:i}))():i}const Qa=i=>!!i.type.__asyncLoader,uv=i=>i.type.__isKeepAlive;function B1(i,e){fv(i,"a",e)}function V1(i,e){fv(i,"da",e)}function fv(i,e,t=Qt){const n=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(ff(e,n,t),t){let s=t.parent;for(;s&&s.parent;)uv(s.parent.vnode)&&G1(n,e,t,s),s=s.parent}}function G1(i,e,t,n){const s=ff(e,i,n,!0);lp(()=>{Wd(n[e],s)},t)}function ff(i,e,t=Qt,n=!1){if(t){const s=t[i]||(t[i]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;pa(),Zo(t);const a=_i(e,t,i,o);return Nr(),ma(),a});return n?s.unshift(r):s.push(r),r}}const ms=i=>(e,t=Qt)=>(!vl||i==="sp")&&ff(i,(...n)=>e(...n),t),H1=ms("bm"),ap=ms("m"),W1=ms("bu"),j1=ms("u"),X1=ms("bum"),lp=ms("um"),Y1=ms("sp"),q1=ms("rtg"),$1=ms("rtc");function K1(i,e=Qt){ff("ec",i,e)}const Z1=Symbol.for("v-ndc");function D4(i,e,t,n){let s;const r=t&&t[n];if(Fe(i)||zt(i)){s=new Array(i.length);for(let o=0,a=i.length;o<a;o++)s[o]=e(i[o],o,void 0,r&&r[o])}else if(typeof i=="number"){s=new Array(i);for(let o=0;o<i;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(vt(i))if(i[Symbol.iterator])s=Array.from(i,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(i);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(i[c],c,a,r&&r[a])}}else s=[];return t&&(t[n]=s),s}function J1(i,e,t={},n,s){if(_n.isCE||_n.parent&&Qa(_n.parent)&&_n.parent.isCE)return e!=="default"&&(t.name=e),Dt("slot",t,n&&n());let r=i[e];r&&r._c&&(r._d=!1),ki();const o=r&&hv(r(t)),a=su(Qn,{key:t.key||o&&o.key||`_${e}`},o||(n?n():[]),o&&i._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function hv(i){return i.some(e=>ru(e)?!(e.type===Ks||e.type===Qn&&!hv(e.children)):!0)?i:null}const Vh=i=>i?Sv(i)?dp(i)||i.proxy:Vh(i.parent):null,el=qt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Vh(i.parent),$root:i=>Vh(i.root),$emit:i=>i.emit,$options:i=>cp(i),$forceUpdate:i=>i.f||(i.f=()=>rp(i.update)),$nextTick:i=>i.n||(i.n=sp.bind(i.proxy)),$watch:i=>z1.bind(i)}),kf=(i,e)=>i!==_t&&!i.__isScriptSetup&&Qe(i,e),Q1={get({_:i},e){const{ctx:t,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(kf(n,e))return o[e]=1,n[e];if(s!==_t&&Qe(s,e))return o[e]=2,s[e];if((c=i.propsOptions[0])&&Qe(c,e))return o[e]=3,r[e];if(t!==_t&&Qe(t,e))return o[e]=4,t[e];Gh&&(o[e]=0)}}const u=el[e];let f,h;if(u)return e==="$attrs"&&Ln(i,"get",e),u(i);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==_t&&Qe(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Qe(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:s,ctx:r}=i;return kf(s,e)?(s[e]=t,!0):n!==_t&&Qe(n,e)?(n[e]=t,!0):Qe(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(r[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:s,propsOptions:r}},o){let a;return!!t[o]||i!==_t&&Qe(i,o)||kf(e,o)||(a=r[0])&&Qe(a,o)||Qe(n,o)||Qe(el,o)||Qe(s.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Qe(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function vm(i){return Fe(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let Gh=!0;function eM(i){const e=cp(i),t=i.proxy,n=i.ctx;Gh=!1,e.beforeCreate&&xm(e.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:d,deactivated:m,beforeDestroy:_,beforeUnmount:x,destroyed:v,unmounted:y,render:M,renderTracked:E,renderTriggered:A,errorCaptured:b,serverPrefetch:T,expose:P,inheritAttrs:I,components:q,directives:N,filters:D}=e;if(c&&tM(c,n,null),o)for(const j in o){const V=o[j];He(V)&&(n[j]=V.bind(t))}if(s){const j=s.call(t,t);vt(j)&&(i.data=ga(j))}if(Gh=!0,r)for(const j in r){const V=r[j],re=He(V)?V.bind(t,t):He(V.get)?V.get.bind(t,t):gi,he=!He(V)&&He(V.set)?V.set.bind(t):gi,be=Ft({get:re,set:he});Object.defineProperty(n,j,{enumerable:!0,configurable:!0,get:()=>be.value,set:X=>be.value=X})}if(a)for(const j in a)dv(a[j],n,t,j);if(l){const j=He(l)?l.call(t):l;Reflect.ownKeys(j).forEach(V=>{zc(V,j[V])})}u&&xm(u,i,"c");function $(j,V){Fe(V)?V.forEach(re=>j(re.bind(t))):V&&j(V.bind(t))}if($(H1,f),$(ap,h),$(W1,p),$(j1,g),$(B1,d),$(V1,m),$(K1,b),$($1,E),$(q1,A),$(X1,x),$(lp,y),$(Y1,T),Fe(P))if(P.length){const j=i.exposed||(i.exposed={});P.forEach(V=>{Object.defineProperty(j,V,{get:()=>t[V],set:re=>t[V]=re})})}else i.exposed||(i.exposed={});M&&i.render===gi&&(i.render=M),I!=null&&(i.inheritAttrs=I),q&&(i.components=q),N&&(i.directives=N)}function tM(i,e,t=gi){Fe(i)&&(i=Hh(i));for(const n in i){const s=i[n];let r;vt(s)?"default"in s?r=vi(s.from||n,s.default,!0):r=vi(s.from||n):r=vi(s),Mt(r)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[n]=r}}function xm(i,e,t){_i(Fe(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function dv(i,e,t,n){const s=n.includes(".")?lv(t,n):()=>t[n];if(zt(i)){const r=e[i];He(r)&&js(s,r)}else if(He(i))js(s,i.bind(t));else if(vt(i))if(Fe(i))i.forEach(r=>dv(r,e,t,n));else{const r=He(i.handler)?i.handler.bind(t):e[i.handler];He(r)&&js(s,r,i)}}function cp(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!n?l=e:(l={},s.length&&s.forEach(c=>nu(l,c,o,!0)),nu(l,e,o)),vt(e)&&r.set(e,l),l}function nu(i,e,t,n=!1){const{mixins:s,extends:r}=e;r&&nu(i,r,t,!0),s&&s.forEach(o=>nu(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=nM[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const nM={data:ym,props:bm,emits:bm,methods:Ya,computed:Ya,beforeCreate:mn,created:mn,beforeMount:mn,mounted:mn,beforeUpdate:mn,updated:mn,beforeDestroy:mn,beforeUnmount:mn,destroyed:mn,unmounted:mn,activated:mn,deactivated:mn,errorCaptured:mn,serverPrefetch:mn,components:Ya,directives:Ya,watch:sM,provide:ym,inject:iM};function ym(i,e){return e?i?function(){return qt(He(i)?i.call(this,this):i,He(e)?e.call(this,this):e)}:e:i}function iM(i,e){return Ya(Hh(i),Hh(e))}function Hh(i){if(Fe(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function mn(i,e){return i?[...new Set([].concat(i,e))]:e}function Ya(i,e){return i?qt(Object.create(null),i,e):e}function bm(i,e){return i?Fe(i)&&Fe(e)?[...new Set([...i,...e])]:qt(Object.create(null),vm(i),vm(e??{})):e}function sM(i,e){if(!i)return e;if(!e)return i;const t=qt(Object.create(null),i);for(const n in e)t[n]=mn(i[n],e[n]);return t}function pv(){return{app:null,config:{isNativeTag:Rb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rM=0;function oM(i,e){return function(n,s=null){He(n)||(n=qt({},n)),s!=null&&!vt(s)&&(s=null);const r=pv(),o=new Set;let a=!1;const l=r.app={_uid:rM++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:LM,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&He(c.install)?(o.add(c),c.install(l,...u)):He(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!a){const h=Dt(n,s);return h.appContext=r,u&&e?e(h,c):i(h,c,f),a=!0,l._container=c,c.__vue_app__=l,dp(h.component)||h.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){iu=l;try{return c()}finally{iu=null}}};return l}}let iu=null;function zc(i,e){if(Qt){let t=Qt.provides;const n=Qt.parent&&Qt.parent.provides;n===t&&(t=Qt.provides=Object.create(n)),t[i]=e}}function vi(i,e,t=!1){const n=Qt||_n;if(n||iu){const s=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:iu._context.provides;if(s&&i in s)return s[i];if(arguments.length>1)return t&&He(e)?e.call(n&&n.proxy):e}}function aM(i,e,t,n=!1){const s={},r={};Jc(r,hf,1),i.propsDefaults=Object.create(null),mv(i,e,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);t?i.props=n?s:v1(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function lM(i,e,t,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=tt(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(cf(i.emitsOptions,h))continue;const p=e[h];if(l)if(Qe(r,h))p!==r[h]&&(r[h]=p,c=!0);else{const g=Yo(h);s[g]=Wh(l,a,g,p,i,!1)}else p!==r[h]&&(r[h]=p,c=!0)}}}else{mv(i,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!Qe(e,f)&&((u=da(f))===f||!Qe(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=Wh(l,a,f,void 0,i,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!Qe(e,f))&&(delete r[f],c=!0)}c&&us(i,"set","$attrs")}function mv(i,e,t,n){const[s,r]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(kc(l))continue;const c=e[l];let u;s&&Qe(s,u=Yo(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:cf(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=tt(t),c=a||_t;for(let u=0;u<r.length;u++){const f=r[u];t[f]=Wh(s,l,f,c[f],i,!Qe(c,f))}}return o}function Wh(i,e,t,n,s,r){const o=i[t];if(o!=null){const a=Qe(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&He(l)){const{propsDefaults:c}=s;t in c?n=c[t]:(Zo(s),n=c[t]=l.call(null,e),Nr())}else n=l}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===da(t))&&(n=!0))}return n}function gv(i,e,t=!1){const n=e.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!He(i)){const u=f=>{l=!0;const[h,p]=gv(f,e,!0);qt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return vt(i)&&n.set(i,To),To;if(Fe(r))for(let u=0;u<r.length;u++){const f=Yo(r[u]);Mm(f)&&(o[f]=_t)}else if(r)for(const u in r){const f=Yo(u);if(Mm(f)){const h=r[u],p=o[f]=Fe(h)||He(h)?{type:h}:qt({},h);if(p){const g=Tm(Boolean,p.type),d=Tm(String,p.type);p[0]=g>-1,p[1]=d<0||g<d,(g>-1||Qe(p,"default"))&&a.push(f)}}}const c=[o,a];return vt(i)&&n.set(i,c),c}function Mm(i){return i[0]!=="$"}function Sm(i){const e=i&&i.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:i===null?"null":""}function wm(i,e){return Sm(i)===Sm(e)}function Tm(i,e){return Fe(e)?e.findIndex(t=>wm(t,i)):He(e)&&wm(e,i)?0:-1}const _v=i=>i[0]==="_"||i==="$stable",up=i=>Fe(i)?i.map(Ii):[Ii(i)],cM=(i,e,t)=>{if(e._n)return e;const n=op((...s)=>up(e(...s)),t);return n._c=!1,n},vv=(i,e,t)=>{const n=i._ctx;for(const s in i){if(_v(s))continue;const r=i[s];if(He(r))e[s]=cM(s,r,n);else if(r!=null){const o=up(r);e[s]=()=>o}}},xv=(i,e)=>{const t=up(e);i.slots.default=()=>t},uM=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=tt(e),Jc(e,"_",t)):vv(e,i.slots={})}else i.slots={},e&&xv(i,e);Jc(i.slots,hf,1)},fM=(i,e,t)=>{const{vnode:n,slots:s}=i;let r=!0,o=_t;if(n.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(qt(s,e),!t&&a===1&&delete s._):(r=!e.$stable,vv(e,s)),o=e}else e&&(xv(i,e),o={default:1});if(r)for(const a in s)!_v(a)&&!(a in o)&&delete s[a]};function jh(i,e,t,n,s=!1){if(Fe(i)){i.forEach((h,p)=>jh(h,e&&(Fe(e)?e[p]:e),t,n,s));return}if(Qa(n)&&!s)return;const r=n.shapeFlag&4?dp(n.component)||n.component.proxy:n.el,o=s?null:r,{i:a,r:l}=i,c=e&&e.r,u=a.refs===_t?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(zt(c)?(u[c]=null,Qe(f,c)&&(f[c]=null)):Mt(c)&&(c.value=null)),He(l))Ws(l,a,12,[o,u]);else{const h=zt(l),p=Mt(l);if(h||p){const g=()=>{if(i.f){const d=h?Qe(f,l)?f[l]:u[l]:l.value;s?Fe(d)&&Wd(d,r):Fe(d)?d.includes(r)||d.push(r):h?(u[l]=[r],Qe(f,l)&&(f[l]=u[l])):(l.value=[r],i.k&&(u[i.k]=l.value))}else h?(u[l]=o,Qe(f,l)&&(f[l]=o)):p&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,Sn(g,t)):g()}}}const Sn=k1;function hM(i){return dM(i)}function dM(i,e){const t=Uh();t.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=gi,insertStaticContent:g}=i,d=(C,L,k,J=null,te=null,ce=null,me=!1,fe=null,_e=!!L.dynamicChildren)=>{if(C===L)return;C&&!Ca(C,L)&&(J=B(C),X(C,te,ce,!0),C=null),L.patchFlag===-2&&(_e=!1,L.dynamicChildren=null);const{type:ee,ref:w,shapeFlag:S}=L;switch(ee){case Yl:m(C,L,k,J);break;case Ks:_(C,L,k,J);break;case Bc:C==null&&x(L,k,J,me);break;case Qn:q(C,L,k,J,te,ce,me,fe,_e);break;default:S&1?M(C,L,k,J,te,ce,me,fe,_e):S&6?N(C,L,k,J,te,ce,me,fe,_e):(S&64||S&128)&&ee.process(C,L,k,J,te,ce,me,fe,_e,Z)}w!=null&&te&&jh(w,C&&C.ref,ce,L||C,!L)},m=(C,L,k,J)=>{if(C==null)n(L.el=a(L.children),k,J);else{const te=L.el=C.el;L.children!==C.children&&c(te,L.children)}},_=(C,L,k,J)=>{C==null?n(L.el=l(L.children||""),k,J):L.el=C.el},x=(C,L,k,J)=>{[C.el,C.anchor]=g(C.children,L,k,J,C.el,C.anchor)},v=({el:C,anchor:L},k,J)=>{let te;for(;C&&C!==L;)te=h(C),n(C,k,J),C=te;n(L,k,J)},y=({el:C,anchor:L})=>{let k;for(;C&&C!==L;)k=h(C),s(C),C=k;s(L)},M=(C,L,k,J,te,ce,me,fe,_e)=>{me=me||L.type==="svg",C==null?E(L,k,J,te,ce,me,fe,_e):T(C,L,te,ce,me,fe,_e)},E=(C,L,k,J,te,ce,me,fe)=>{let _e,ee;const{type:w,props:S,shapeFlag:F,transition:K,dirs:ie}=C;if(_e=C.el=o(C.type,ce,S&&S.is,S),F&8?u(_e,C.children):F&16&&b(C.children,_e,null,J,te,ce&&w!=="foreignObject",me,fe),ie&&lr(C,null,J,"created"),A(_e,C,C.scopeId,me,J),S){for(const xe in S)xe!=="value"&&!kc(xe)&&r(_e,xe,null,S[xe],ce,C.children,J,te,Se);"value"in S&&r(_e,"value",null,S.value),(ee=S.onVnodeBeforeMount)&&Ti(ee,J,C)}ie&&lr(C,null,J,"beforeMount");const de=(!te||te&&!te.pendingBranch)&&K&&!K.persisted;de&&K.beforeEnter(_e),n(_e,L,k),((ee=S&&S.onVnodeMounted)||de||ie)&&Sn(()=>{ee&&Ti(ee,J,C),de&&K.enter(_e),ie&&lr(C,null,J,"mounted")},te)},A=(C,L,k,J,te)=>{if(k&&p(C,k),J)for(let ce=0;ce<J.length;ce++)p(C,J[ce]);if(te){let ce=te.subTree;if(L===ce){const me=te.vnode;A(C,me,me.scopeId,me.slotScopeIds,te.parent)}}},b=(C,L,k,J,te,ce,me,fe,_e=0)=>{for(let ee=_e;ee<C.length;ee++){const w=C[ee]=fe?Es(C[ee]):Ii(C[ee]);d(null,w,L,k,J,te,ce,me,fe)}},T=(C,L,k,J,te,ce,me)=>{const fe=L.el=C.el;let{patchFlag:_e,dynamicChildren:ee,dirs:w}=L;_e|=C.patchFlag&16;const S=C.props||_t,F=L.props||_t;let K;k&&cr(k,!1),(K=F.onVnodeBeforeUpdate)&&Ti(K,k,L,C),w&&lr(L,C,k,"beforeUpdate"),k&&cr(k,!0);const ie=te&&L.type!=="foreignObject";if(ee?P(C.dynamicChildren,ee,fe,k,J,ie,ce):me||V(C,L,fe,null,k,J,ie,ce,!1),_e>0){if(_e&16)I(fe,L,S,F,k,J,te);else if(_e&2&&S.class!==F.class&&r(fe,"class",null,F.class,te),_e&4&&r(fe,"style",S.style,F.style,te),_e&8){const de=L.dynamicProps;for(let xe=0;xe<de.length;xe++){const ye=de[xe],se=S[ye],Ie=F[ye];(Ie!==se||ye==="value")&&r(fe,ye,se,Ie,te,C.children,k,J,Se)}}_e&1&&C.children!==L.children&&u(fe,L.children)}else!me&&ee==null&&I(fe,L,S,F,k,J,te);((K=F.onVnodeUpdated)||w)&&Sn(()=>{K&&Ti(K,k,L,C),w&&lr(L,C,k,"updated")},J)},P=(C,L,k,J,te,ce,me)=>{for(let fe=0;fe<L.length;fe++){const _e=C[fe],ee=L[fe],w=_e.el&&(_e.type===Qn||!Ca(_e,ee)||_e.shapeFlag&70)?f(_e.el):k;d(_e,ee,w,null,J,te,ce,me,!0)}},I=(C,L,k,J,te,ce,me)=>{if(k!==J){if(k!==_t)for(const fe in k)!kc(fe)&&!(fe in J)&&r(C,fe,k[fe],null,me,L.children,te,ce,Se);for(const fe in J){if(kc(fe))continue;const _e=J[fe],ee=k[fe];_e!==ee&&fe!=="value"&&r(C,fe,ee,_e,me,L.children,te,ce,Se)}"value"in J&&r(C,"value",k.value,J.value)}},q=(C,L,k,J,te,ce,me,fe,_e)=>{const ee=L.el=C?C.el:a(""),w=L.anchor=C?C.anchor:a("");let{patchFlag:S,dynamicChildren:F,slotScopeIds:K}=L;K&&(fe=fe?fe.concat(K):K),C==null?(n(ee,k,J),n(w,k,J),b(L.children,k,w,te,ce,me,fe,_e)):S>0&&S&64&&F&&C.dynamicChildren?(P(C.dynamicChildren,F,k,te,ce,me,fe),(L.key!=null||te&&L===te.subTree)&&yv(C,L,!0)):V(C,L,k,w,te,ce,me,fe,_e)},N=(C,L,k,J,te,ce,me,fe,_e)=>{L.slotScopeIds=fe,C==null?L.shapeFlag&512?te.ctx.activate(L,k,J,me,_e):D(L,k,J,te,ce,me,_e):O(C,L,_e)},D=(C,L,k,J,te,ce,me)=>{const fe=C.component=MM(C,J,te);if(uv(C)&&(fe.ctx.renderer=Z),SM(fe),fe.asyncDep){if(te&&te.registerDep(fe,$),!C.el){const _e=fe.subTree=Dt(Ks);_(null,_e,L,k)}return}$(fe,C,L,k,te,ce,me)},O=(C,L,k)=>{const J=L.component=C.component;if(O1(C,L,k))if(J.asyncDep&&!J.asyncResolved){j(J,L,k);return}else J.next=L,R1(J.update),J.update();else L.el=C.el,J.vnode=L},$=(C,L,k,J,te,ce,me)=>{const fe=()=>{if(C.isMounted){let{next:w,bu:S,u:F,parent:K,vnode:ie}=C,de=w,xe;cr(C,!1),w?(w.el=ie.el,j(C,w,me)):w=ie,S&&Uf(S),(xe=w.props&&w.props.onVnodeBeforeUpdate)&&Ti(xe,K,w,ie),cr(C,!0);const ye=Ff(C),se=C.subTree;C.subTree=ye,d(se,ye,f(se.el),B(se),C,te,ce),w.el=ye.el,de===null&&U1(C,ye.el),F&&Sn(F,te),(xe=w.props&&w.props.onVnodeUpdated)&&Sn(()=>Ti(xe,K,w,ie),te)}else{let w;const{el:S,props:F}=L,{bm:K,m:ie,parent:de}=C,xe=Qa(L);if(cr(C,!1),K&&Uf(K),!xe&&(w=F&&F.onVnodeBeforeMount)&&Ti(w,de,L),cr(C,!0),S&&Te){const ye=()=>{C.subTree=Ff(C),Te(S,C.subTree,C,te,null)};xe?L.type.__asyncLoader().then(()=>!C.isUnmounted&&ye()):ye()}else{const ye=C.subTree=Ff(C);d(null,ye,k,J,C,te,ce),L.el=ye.el}if(ie&&Sn(ie,te),!xe&&(w=F&&F.onVnodeMounted)){const ye=L;Sn(()=>Ti(w,de,ye),te)}(L.shapeFlag&256||de&&Qa(de.vnode)&&de.vnode.shapeFlag&256)&&C.a&&Sn(C.a,te),C.isMounted=!0,L=k=J=null}},_e=C.effect=new Zd(fe,()=>rp(ee),C.scope),ee=C.update=()=>_e.run();ee.id=C.uid,cr(C,!0),ee()},j=(C,L,k)=>{L.component=C;const J=C.vnode.props;C.vnode=L,C.next=null,lM(C,L.props,J,k),fM(C,L.children,k),pa(),gm(),ma()},V=(C,L,k,J,te,ce,me,fe,_e=!1)=>{const ee=C&&C.children,w=C?C.shapeFlag:0,S=L.children,{patchFlag:F,shapeFlag:K}=L;if(F>0){if(F&128){he(ee,S,k,J,te,ce,me,fe,_e);return}else if(F&256){re(ee,S,k,J,te,ce,me,fe,_e);return}}K&8?(w&16&&Se(ee,te,ce),S!==ee&&u(k,S)):w&16?K&16?he(ee,S,k,J,te,ce,me,fe,_e):Se(ee,te,ce,!0):(w&8&&u(k,""),K&16&&b(S,k,J,te,ce,me,fe,_e))},re=(C,L,k,J,te,ce,me,fe,_e)=>{C=C||To,L=L||To;const ee=C.length,w=L.length,S=Math.min(ee,w);let F;for(F=0;F<S;F++){const K=L[F]=_e?Es(L[F]):Ii(L[F]);d(C[F],K,k,null,te,ce,me,fe,_e)}ee>w?Se(C,te,ce,!0,!1,S):b(L,k,J,te,ce,me,fe,_e,S)},he=(C,L,k,J,te,ce,me,fe,_e)=>{let ee=0;const w=L.length;let S=C.length-1,F=w-1;for(;ee<=S&&ee<=F;){const K=C[ee],ie=L[ee]=_e?Es(L[ee]):Ii(L[ee]);if(Ca(K,ie))d(K,ie,k,null,te,ce,me,fe,_e);else break;ee++}for(;ee<=S&&ee<=F;){const K=C[S],ie=L[F]=_e?Es(L[F]):Ii(L[F]);if(Ca(K,ie))d(K,ie,k,null,te,ce,me,fe,_e);else break;S--,F--}if(ee>S){if(ee<=F){const K=F+1,ie=K<w?L[K].el:J;for(;ee<=F;)d(null,L[ee]=_e?Es(L[ee]):Ii(L[ee]),k,ie,te,ce,me,fe,_e),ee++}}else if(ee>F)for(;ee<=S;)X(C[ee],te,ce,!0),ee++;else{const K=ee,ie=ee,de=new Map;for(ee=ie;ee<=F;ee++){const Ee=L[ee]=_e?Es(L[ee]):Ii(L[ee]);Ee.key!=null&&de.set(Ee.key,ee)}let xe,ye=0;const se=F-ie+1;let Ie=!1,Ce=0;const De=new Array(se);for(ee=0;ee<se;ee++)De[ee]=0;for(ee=K;ee<=S;ee++){const Ee=C[ee];if(ye>=se){X(Ee,te,ce,!0);continue}let ke;if(Ee.key!=null)ke=de.get(Ee.key);else for(xe=ie;xe<=F;xe++)if(De[xe-ie]===0&&Ca(Ee,L[xe])){ke=xe;break}ke===void 0?X(Ee,te,ce,!0):(De[ke-ie]=ee+1,ke>=Ce?Ce=ke:Ie=!0,d(Ee,L[ke],k,null,te,ce,me,fe,_e),ye++)}const Ne=Ie?pM(De):To;for(xe=Ne.length-1,ee=se-1;ee>=0;ee--){const Ee=ie+ee,ke=L[Ee],ut=Ee+1<w?L[Ee+1].el:J;De[ee]===0?d(null,ke,k,ut,te,ce,me,fe,_e):Ie&&(xe<0||ee!==Ne[xe]?be(ke,k,ut,2):xe--)}}},be=(C,L,k,J,te=null)=>{const{el:ce,type:me,transition:fe,children:_e,shapeFlag:ee}=C;if(ee&6){be(C.component.subTree,L,k,J);return}if(ee&128){C.suspense.move(L,k,J);return}if(ee&64){me.move(C,L,k,Z);return}if(me===Qn){n(ce,L,k);for(let S=0;S<_e.length;S++)be(_e[S],L,k,J);n(C.anchor,L,k);return}if(me===Bc){v(C,L,k);return}if(J!==2&&ee&1&&fe)if(J===0)fe.beforeEnter(ce),n(ce,L,k),Sn(()=>fe.enter(ce),te);else{const{leave:S,delayLeave:F,afterLeave:K}=fe,ie=()=>n(ce,L,k),de=()=>{S(ce,()=>{ie(),K&&K()})};F?F(ce,ie,de):de()}else n(ce,L,k)},X=(C,L,k,J=!1,te=!1)=>{const{type:ce,props:me,ref:fe,children:_e,dynamicChildren:ee,shapeFlag:w,patchFlag:S,dirs:F}=C;if(fe!=null&&jh(fe,null,k,C,!0),w&256){L.ctx.deactivate(C);return}const K=w&1&&F,ie=!Qa(C);let de;if(ie&&(de=me&&me.onVnodeBeforeUnmount)&&Ti(de,L,C),w&6)H(C.component,k,J);else{if(w&128){C.suspense.unmount(k,J);return}K&&lr(C,null,L,"beforeUnmount"),w&64?C.type.remove(C,L,k,te,Z,J):ee&&(ce!==Qn||S>0&&S&64)?Se(ee,L,k,!1,!0):(ce===Qn&&S&384||!te&&w&16)&&Se(_e,L,k),J&&ue(C)}(ie&&(de=me&&me.onVnodeUnmounted)||K)&&Sn(()=>{de&&Ti(de,L,C),K&&lr(C,null,L,"unmounted")},k)},ue=C=>{const{type:L,el:k,anchor:J,transition:te}=C;if(L===Qn){pe(k,J);return}if(L===Bc){y(C);return}const ce=()=>{s(k),te&&!te.persisted&&te.afterLeave&&te.afterLeave()};if(C.shapeFlag&1&&te&&!te.persisted){const{leave:me,delayLeave:fe}=te,_e=()=>me(k,ce);fe?fe(C.el,ce,_e):_e()}else ce()},pe=(C,L)=>{let k;for(;C!==L;)k=h(C),s(C),C=k;s(L)},H=(C,L,k)=>{const{bum:J,scope:te,update:ce,subTree:me,um:fe}=C;J&&Uf(J),te.stop(),ce&&(ce.active=!1,X(me,C,L,k)),fe&&Sn(fe,L),Sn(()=>{C.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},Se=(C,L,k,J=!1,te=!1,ce=0)=>{for(let me=ce;me<C.length;me++)X(C[me],L,k,J,te)},B=C=>C.shapeFlag&6?B(C.component.subTree):C.shapeFlag&128?C.suspense.next():h(C.anchor||C.el),Q=(C,L,k)=>{C==null?L._vnode&&X(L._vnode,null,null,!0):d(L._vnode||null,C,L,null,null,null,k),gm(),nv(),L._vnode=C},Z={p:d,um:X,m:be,r:ue,mt:D,mc:b,pc:V,pbc:P,n:B,o:i};let oe,Te;return e&&([oe,Te]=e(Z)),{render:Q,hydrate:oe,createApp:oM(Q,oe)}}function cr({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function yv(i,e,t=!1){const n=i.children,s=e.children;if(Fe(n)&&Fe(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Es(s[r]),a.el=o.el),t||yv(o,a)),a.type===Yl&&(a.el=o.el)}}function pM(i){const e=i.slice(),t=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=t[t.length-1],i[s]<c){e[n]=s,t.push(n);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,i[t[a]]<c?r=a+1:o=a;c<i[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const mM=i=>i.__isTeleport,Qn=Symbol.for("v-fgt"),Yl=Symbol.for("v-txt"),Ks=Symbol.for("v-cmt"),Bc=Symbol.for("v-stc"),tl=[];let di=null;function ki(i=!1){tl.push(di=i?null:[])}function gM(){tl.pop(),di=tl[tl.length-1]||null}let _l=1;function Em(i){_l+=i}function bv(i){return i.dynamicChildren=_l>0?di||To:null,gM(),_l>0&&di&&di.push(i),i}function _a(i,e,t,n,s,r){return bv(kt(i,e,t,n,s,r,!0))}function su(i,e,t,n,s){return bv(Dt(i,e,t,n,s,!0))}function ru(i){return i?i.__v_isVNode===!0:!1}function Ca(i,e){return i.type===e.type&&i.key===e.key}const hf="__vInternal",Mv=({key:i})=>i??null,Vc=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?zt(i)||Mt(i)||He(i)?{i:_n,r:i,k:e,f:!!t}:i:null);function kt(i,e=null,t=null,n=0,s=null,r=i===Qn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Mv(e),ref:e&&Vc(e),scopeId:uf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_n};return a?(fp(l,t),r&128&&i.normalize(l)):t&&(l.shapeFlag|=zt(t)?8:16),_l>0&&!o&&di&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&di.push(l),l}const Dt=_M;function _M(i,e=null,t=null,n=0,s=null,r=!1){if((!i||i===Z1)&&(i=Ks),ru(i)){const a=Ko(i,e,!0);return t&&fp(a,t),_l>0&&!r&&di&&(a.shapeFlag&6?di[di.indexOf(i)]=a:di.push(a)),a.patchFlag|=-2,a}if(AM(i)&&(i=i.__vccOpts),e){e=vM(e);let{class:a,style:l}=e;a&&!zt(a)&&(e.class=qd(a)),vt(l)&&($_(l)&&!Fe(l)&&(l=qt({},l)),e.style=Yd(l))}const o=zt(i)?1:F1(i)?128:mM(i)?64:vt(i)?4:He(i)?2:0;return kt(i,e,t,n,s,o,r,!0)}function vM(i){return i?$_(i)||hf in i?qt({},i):i:null}function Ko(i,e,t=!1){const{props:n,ref:s,patchFlag:r,children:o}=i,a=e?xM(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Mv(a),ref:e&&e.ref?t&&s?Fe(s)?s.concat(Vc(e)):[s,Vc(e)]:Vc(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Qn?r===-1?16:r|16:r,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Ko(i.ssContent),ssFallback:i.ssFallback&&Ko(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function df(i=" ",e=0){return Dt(Yl,null,i,e)}function N4(i,e){const t=Dt(Bc,null,i);return t.staticCount=e,t}function Am(i="",e=!1){return e?(ki(),su(Ks,null,i)):Dt(Ks,null,i)}function Ii(i){return i==null||typeof i=="boolean"?Dt(Ks):Fe(i)?Dt(Qn,null,i.slice()):typeof i=="object"?Es(i):Dt(Yl,null,String(i))}function Es(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Ko(i)}function fp(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(n&65){const s=e.default;s&&(s._c&&(s._d=!1),fp(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(hf in e)?e._ctx=_n:s===3&&_n&&(_n.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else He(e)?(e={default:e,_ctx:_n},t=32):(e=String(e),n&64?(t=16,e=[df(e)]):t=8);i.children=e,i.shapeFlag|=t}function xM(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=qd([e.class,n.class]));else if(s==="style")e.style=Yd([e.style,n.style]);else if(sf(s)){const r=e[s],o=n[s];o&&r!==o&&!(Fe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=n[s])}return e}function Ti(i,e,t,n=null){_i(i,e,7,[t,n])}const yM=pv();let bM=0;function MM(i,e,t){const n=i.type,s=(e?e.appContext:i.appContext)||yM,r={uid:bM++,vnode:i,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new U_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gv(n,s),emitsOptions:sv(n,s),emit:null,emitted:null,propsDefaults:_t,inheritAttrs:n.inheritAttrs,ctx:_t,data:_t,props:_t,attrs:_t,slots:_t,refs:_t,setupState:_t,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=I1.bind(null,r),i.ce&&i.ce(r),r}let Qt=null;const pf=()=>Qt||_n;let hp,Xr,Cm="__VUE_INSTANCE_SETTERS__";(Xr=Uh()[Cm])||(Xr=Uh()[Cm]=[]),Xr.push(i=>Qt=i),hp=i=>{Xr.length>1?Xr.forEach(e=>e(i)):Xr[0](i)};const Zo=i=>{hp(i),i.scope.on()},Nr=()=>{Qt&&Qt.scope.off(),hp(null)};function Sv(i){return i.vnode.shapeFlag&4}let vl=!1;function SM(i,e=!1){vl=e;const{props:t,children:n}=i.vnode,s=Sv(i);aM(i,t,s,e),uM(i,n);const r=s?wM(i,e):void 0;return vl=!1,r}function wM(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=$o(new Proxy(i.ctx,Q1));const{setup:n}=t;if(n){const s=i.setupContext=n.length>1?EM(i):null;Zo(i),pa();const r=Ws(n,i,0,[i.props,s]);if(ma(),Nr(),L_(r)){if(r.then(Nr,Nr),e)return r.then(o=>{Rm(i,o,e)}).catch(o=>{lf(o,i,0)});i.asyncDep=r}else Rm(i,r,e)}else wv(i,e)}function Rm(i,e,t){He(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:vt(e)&&(i.setupState=Q_(e)),wv(i,t)}let Lm;function wv(i,e,t){const n=i.type;if(!i.render){if(!e&&Lm&&!n.render){const s=n.template||cp(i).template;if(s){const{isCustomElement:r,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=qt(qt({isCustomElement:r,delimiters:a},o),l);n.render=Lm(s,c)}}i.render=n.render||gi}Zo(i),pa(),eM(i),ma(),Nr()}function TM(i){return i.attrsProxy||(i.attrsProxy=new Proxy(i.attrs,{get(e,t){return Ln(i,"get","$attrs"),e[t]}}))}function EM(i){const e=t=>{i.exposed=t||{}};return{get attrs(){return TM(i)},slots:i.slots,emit:i.emit,expose:e}}function dp(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(Q_($o(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in el)return el[t](i)},has(e,t){return t in e||t in el}}))}function AM(i){return He(i)&&"__vccOpts"in i}const Ft=(i,e)=>E1(i,e,vl);function mf(i,e,t){const n=arguments.length;return n===2?vt(e)&&!Fe(e)?ru(e)?Dt(i,null,[e]):Dt(i,e):Dt(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&ru(t)&&(t=[t]),Dt(i,e,t))}const CM=Symbol.for("v-scx"),RM=()=>vi(CM),LM="3.3.2",PM="http://www.w3.org/2000/svg",br=typeof document<"u"?document:null,Pm=br&&br.createElement("template"),IM={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const s=e?br.createElementNS(PM,i):br.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>br.createTextNode(i),createComment:i=>br.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>br.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Pm.innerHTML=n?`<svg>${i}</svg>`:i;const a=Pm.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function DM(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function NM(i,e,t){const n=i.style,s=zt(t);if(t&&!s){if(e&&!zt(e))for(const r in e)t[r]==null&&Xh(n,r,"");for(const r in t)Xh(n,r,t[r])}else{const r=n.display;s?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=r)}}const Im=/\s*!important$/;function Xh(i,e,t){if(Fe(t))t.forEach(n=>Xh(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=OM(i,e);Im.test(t)?i.setProperty(da(n),t.replace(Im,""),"important"):i[n]=t}}const Dm=["Webkit","Moz","ms"],zf={};function OM(i,e){const t=zf[e];if(t)return t;let n=Yo(e);if(n!=="filter"&&n in i)return zf[e]=n;n=D_(n);for(let s=0;s<Dm.length;s++){const r=Dm[s]+n;if(r in i)return zf[e]=r}return e}const Nm="http://www.w3.org/1999/xlink";function UM(i,e,t,n,s){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Nm,e.slice(6,e.length)):i.setAttributeNS(Nm,e,t);else{const r=Vb(e);t==null||r&&!N_(t)?i.removeAttribute(e):i.setAttribute(e,r?"":t)}}function FM(i,e,t,n,s,r,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,s,r),i[e]=t??"";return}const a=i.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){i._value=t;const c=a==="OPTION"?i.getAttribute("value"):i.value,u=t??"";c!==u&&(i.value=u),t==null&&i.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof i[e];c==="boolean"?t=N_(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{i[e]=t}catch{}l&&i.removeAttribute(e)}function kM(i,e,t,n){i.addEventListener(e,t,n)}function zM(i,e,t,n){i.removeEventListener(e,t,n)}function BM(i,e,t,n,s=null){const r=i._vei||(i._vei={}),o=r[e];if(n&&o)o.value=n;else{const[a,l]=VM(e);if(n){const c=r[e]=WM(n,s);kM(i,a,c,l)}else o&&(zM(i,a,o,l),r[e]=void 0)}}const Om=/(?:Once|Passive|Capture)$/;function VM(i){let e;if(Om.test(i)){e={};let n;for(;n=i.match(Om);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):da(i.slice(2)),e]}let Bf=0;const GM=Promise.resolve(),HM=()=>Bf||(GM.then(()=>Bf=0),Bf=Date.now());function WM(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;_i(jM(n,t.value),e,5,[n])};return t.value=i,t.attached=HM(),t}function jM(i,e){if(Fe(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const Um=/^on[a-z]/,XM=(i,e,t,n,s=!1,r,o,a,l)=>{e==="class"?DM(i,n,s):e==="style"?NM(i,t,n):sf(e)?Hd(e)||BM(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):YM(i,e,n,s))?FM(i,e,n,r,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),UM(i,e,n,s))};function YM(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&Um.test(e)&&He(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||Um.test(e)&&zt(t)?!1:e in i}const qM=qt({patchProp:XM},IM);let Fm;function $M(){return Fm||(Fm=hM(qM))}const KM=(...i)=>{const e=$M().createApp(...i),{mount:t}=e;return e.mount=n=>{const s=ZM(n);if(!s)return;const r=e._component;!He(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ZM(i){return zt(i)?document.querySelector(i):i}let gt=0;const Ye={LOADER_PROGRESS:gt++,APP_LOADED:gt++,ATTACH:gt++,ROUTE_CHANGE:gt++,SELECT_TEAM_UPDATE:gt++,TICK:gt++,RENDER:gt++,RESIZE:gt++,POINTER_MOVE:gt++,POINTER_UP:gt++,POINTER_DOWN:gt++,KEY_DOWN:gt++,DRAG:gt++,DRAG_END:gt++,PINCH:gt++,WHEEL:gt++,STATE_READY:gt++,JOIN_READY:gt++,CREATE_TEAM:gt++,SPAWN_MEDALS:gt++,VOTE_RESULTS:gt++,COLLECT_MEDAL:gt++},JM=Object.fromEntries(Object.entries(Ye).map(([i,e])=>[e,`on${i.toLowerCase().split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}`])),pp={USER_ID:gt++,USER_ISO:gt++,FOCUS_PLAYER:gt++},Ei={GAME_STATE:"game_state",COUNTRY_STATE:"country_state",VOTE_RESULTS:"vote_results",VOTE_COUNT:"vote_count",MEDAL_APPARITION:"medal_apparition",MEDAL_COLLECTION:"medal_collection",NEW_COUNTRY:"new_country",PLAYER_COUNT:"player_count",USER_VOTE:"user_vote",USER_JOIN:"user_join",SCOREBOARD_UPDATE:"scoreboard_update"},oc={up:0,right:1,down:2,left:3},nl={bronze:0,silver:1,gold:2};var ci,Rs,Er,Ar,yu,Tv;const Mo=class{constructor(){ve(this,yu);ve(this,ci,void 0);ve(this,Rs,void 0);ve(this,Er,void 0);ve(this,Ar,void 0);mt(this,ci,new Map),mt(this,Rs,new Map),mt(this,Er,new Map),mt(this,Ar,new Set)}on(e,t,n={}){G(this,ci).has(e)||G(this,ci).set(e,new Set),(n.once?G(this,Rs):G(this,ci)).get(e).add(t)}off(e,t){if(!G(this,ci).has(e))return;G(this,ci).get(e).delete(t)}register(e){G(this,Ar).add(e)}unregister(e){G(this,Ar).delete(e)}emit(e,...t){if(G(this,Er).set(e,t),G(this,ci).has(e))for(const n of G(this,ci).get(e))n.call(this,...t);if(G(this,Ar).forEach(n=>Ve(this,yu,Tv).call(this,n,e)),G(this,Rs).has(e)){for(const n of G(this,Rs).get(e))n.call(this,...t);G(this,Rs).delete(e)}}static getInstance(){return Mo.instance||(Mo.instance=new Mo),Mo.instance}};let Gc=Mo;ci=new WeakMap,Rs=new WeakMap,Er=new WeakMap,Ar=new WeakMap,yu=new WeakSet,Tv=function(e,t){const n=e[JM[t]];typeof n=="function"&&G(this,Er).has(t)&&n.call(e,...G(this,Er).get(t))},Nn(Gc,"instance");const Ue=Gc.getInstance();const QM={class:"loader"},eS={__name:"TheLoader",setup(i){const e=hi(0),t=Ft(()=>Math.round(e.value*100));return Ue.on(Ye.LOADER_PROGRESS,n=>e.value=n),(n,s)=>(ki(),_a("div",QM,Gb(t.value)+"%",1))}};/*!
  * vue-router v4.2.0
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const uo=typeof window<"u";function tS(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const rt=Object.assign;function Vf(i,e){const t={};for(const n in e){const s=e[n];t[n]=Mi(s)?s.map(i):i(s)}return t}const il=()=>{},Mi=Array.isArray,nS=/\/$/,iS=i=>i.replace(nS,"");function Gf(i,e,t="/"){let n,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=i(r)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=aS(n??e,t),{fullPath:n+(r&&"?")+r+o,path:n,query:s,hash:o}}function sS(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function km(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function rS(i,e,t){const n=e.matched.length-1,s=t.matched.length-1;return n>-1&&n===s&&Jo(e.matched[n],t.matched[s])&&Ev(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function Jo(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function Ev(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!oS(i[t],e[t]))return!1;return!0}function oS(i,e){return Mi(i)?zm(i,e):Mi(e)?zm(e,i):i===e}function zm(i,e){return Mi(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function aS(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/"),s=n[n.length-1];(s===".."||s===".")&&n.push("");let r=t.length-1,o,a;for(o=0;o<n.length;o++)if(a=n[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+n.slice(o-(o===n.length?1:0)).join("/")}var xl;(function(i){i.pop="pop",i.push="push"})(xl||(xl={}));var sl;(function(i){i.back="back",i.forward="forward",i.unknown=""})(sl||(sl={}));function lS(i){if(!i)if(uo){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),iS(i)}const cS=/^[^#]+#/;function uS(i,e){return i.replace(cS,"#")+e}function fS(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const gf=()=>({left:window.pageXOffset,top:window.pageYOffset});function hS(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=fS(s,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Bm(i,e){return(history.state?history.state.position-e:-1)+i}const Yh=new Map;function dS(i,e){Yh.set(i,e)}function pS(i){const e=Yh.get(i);return Yh.delete(i),e}let mS=()=>location.protocol+"//"+location.host;function Av(i,e){const{pathname:t,search:n,hash:s}=e,r=i.indexOf("#");if(r>-1){let a=s.includes(i.slice(r))?i.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),km(l,"")}return km(t,i)+n+s}function gS(i,e,t,n){let s=[],r=[],o=null;const a=({state:h})=>{const p=Av(i,location),g=t.value,d=e.value;let m=0;if(h){if(t.value=p,e.value=h,o&&o===g){o=null;return}m=d?h.position-d.position:0}else n(p);s.forEach(_=>{_(t.value,g,{delta:m,type:xl.pop,direction:m?m>0?sl.forward:sl.back:sl.unknown})})};function l(){o=t.value}function c(h){s.push(h);const p=()=>{const g=s.indexOf(h);g>-1&&s.splice(g,1)};return r.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(rt({},h.state,{scroll:gf()}),"")}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Vm(i,e,t,n=!1,s=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:s?gf():null}}function _S(i){const{history:e,location:t}=window,n={value:Av(i,t)},s={value:e.state};s.value||r(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=i.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?i:i.slice(f))+l:mS()+i+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(p){console.error(p),t[u?"replace":"assign"](h)}}function o(l,c){const u=rt({},e.state,Vm(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),n.value=l}function a(l,c){const u=rt({},s.value,e.state,{forward:l,scroll:gf()});r(u.current,u,!0);const f=rt({},Vm(n.value,l,null),{position:u.position+1},c);r(l,f,!1),n.value=l}return{location:n,state:s,push:a,replace:o}}function vS(i){i=lS(i);const e=_S(i),t=gS(i,e.state,e.location,e.replace);function n(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=rt({location:"",base:i,go:n,createHref:uS.bind(null,i)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function xS(i){return typeof i=="string"||i&&typeof i=="object"}function Cv(i){return typeof i=="string"||typeof i=="symbol"}const _s={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Rv=Symbol("");var Gm;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(Gm||(Gm={}));function Qo(i,e){return rt(new Error,{type:i,[Rv]:!0},e)}function ji(i,e){return i instanceof Error&&Rv in i&&(e==null||!!(i.type&e))}const Hm="[^/]+?",yS={sensitive:!1,strict:!1,start:!0,end:!0},bS=/[.+*?^${}()[\]/\\]/g;function MS(i,e){const t=rt({},yS,e),n=[];let s=t.start?"^":"";const r=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(t.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(bS,"\\$&"),p+=40;else if(h.type===1){const{value:g,repeatable:d,optional:m,regexp:_}=h;r.push({name:g,repeatable:d,optional:m});const x=_||Hm;if(x!==Hm){p+=10;try{new RegExp(`(${x})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+y.message)}}let v=d?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(v=m&&c.length<2?`(?:/${v})`:"/"+v),m&&(v+="?"),s+=v,p+=20,m&&(p+=-8),d&&(p+=-20),x===".*"&&(p+=-50)}u.push(p)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",g=r[h-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of i){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:d,optional:m}=p,_=g in c?c[g]:"";if(Mi(_)&&!d)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=Mi(_)?_.join("/"):_;if(!x)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=x}}return u||"/"}return{re:o,score:n,keys:r,parse:a,stringify:l}}function SS(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===40+40?-1:1:i.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function wS(i,e){let t=0;const n=i.score,s=e.score;for(;t<n.length&&t<s.length;){const r=SS(n[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-n.length)===1){if(Wm(n))return 1;if(Wm(s))return-1}return s.length-n.length}function Wm(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const TS={type:0,value:""},ES=/[a-zA-Z0-9_]/;function AS(i){if(!i)return[[]];if(i==="/")return[[TS]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,n=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=n;break;case 1:l==="("?t=2:ES.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function CS(i,e,t){const n=MS(AS(i.path),t),s=rt(n,{record:i,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function RS(i,e){const t=[],n=new Map;e=Ym({strict:!1,end:!0,sensitive:!1},e);function s(u){return n.get(u)}function r(u,f,h){const p=!h,g=LS(u);g.aliasOf=h&&h.record;const d=Ym(e,u),m=[g];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of v)m.push(rt({},g,{components:h?h.record.components:g.components,path:y,aliasOf:h?h.record:g}))}let _,x;for(const v of m){const{path:y}=v;if(f&&y[0]!=="/"){const M=f.record.path,E=M[M.length-1]==="/"?"":"/";v.path=f.record.path+(y&&E+y)}if(_=CS(v,f,d),h?h.alias.push(_):(x=x||_,x!==_&&x.alias.push(_),p&&u.name&&!Xm(_)&&o(u.name)),g.children){const M=g.children;for(let E=0;E<M.length;E++)r(M[E],_,h&&h.children[E])}h=h||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return x?()=>{o(x)}:il}function o(u){if(Cv(u)){const f=n.get(u);f&&(n.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&wS(u,t[f])>=0&&(u.record.path!==t[f].record.path||!Lv(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!Xm(u)&&n.set(u.record.name,u)}function c(u,f){let h,p={},g,d;if("name"in u&&u.name){if(h=n.get(u.name),!h)throw Qo(1,{location:u});d=h.record.name,p=rt(jm(f.params,h.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&jm(u.params,h.keys.map(x=>x.name))),g=h.stringify(p)}else if("path"in u)g=u.path,h=t.find(x=>x.re.test(g)),h&&(p=h.parse(g),d=h.record.name);else{if(h=f.name?n.get(f.name):t.find(x=>x.re.test(f.path)),!h)throw Qo(1,{location:u,currentLocation:f});d=h.record.name,p=rt({},f.params,u.params),g=h.stringify(p)}const m=[];let _=h;for(;_;)m.unshift(_.record),_=_.parent;return{name:d,path:g,params:p,matched:m,meta:IS(m)}}return i.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function jm(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function LS(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:PS(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function PS(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="boolean"?t:t[n];return e}function Xm(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function IS(i){return i.reduce((e,t)=>rt(e,t.meta),{})}function Ym(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function Lv(i,e){return e.children.some(t=>t===i||Lv(i,t))}const Pv=/#/g,DS=/&/g,NS=/\//g,OS=/=/g,US=/\?/g,Iv=/\+/g,FS=/%5B/g,kS=/%5D/g,Dv=/%5E/g,zS=/%60/g,Nv=/%7B/g,BS=/%7C/g,Ov=/%7D/g,VS=/%20/g;function mp(i){return encodeURI(""+i).replace(BS,"|").replace(FS,"[").replace(kS,"]")}function GS(i){return mp(i).replace(Nv,"{").replace(Ov,"}").replace(Dv,"^")}function qh(i){return mp(i).replace(Iv,"%2B").replace(VS,"+").replace(Pv,"%23").replace(DS,"%26").replace(zS,"`").replace(Nv,"{").replace(Ov,"}").replace(Dv,"^")}function HS(i){return qh(i).replace(OS,"%3D")}function WS(i){return mp(i).replace(Pv,"%23").replace(US,"%3F")}function jS(i){return i==null?"":WS(i).replace(NS,"%2F")}function ou(i){try{return decodeURIComponent(""+i)}catch{}return""+i}function XS(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(Iv," "),o=r.indexOf("="),a=ou(o<0?r:r.slice(0,o)),l=o<0?null:ou(r.slice(o+1));if(a in e){let c=e[a];Mi(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function qm(i){let e="";for(let t in i){const n=i[t];if(t=HS(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(Mi(n)?n.map(r=>r&&qh(r)):[n&&qh(n)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function YS(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=Mi(n)?n.map(s=>s==null?null:""+s):n==null?n:""+n)}return e}const qS=Symbol(""),$m=Symbol(""),gp=Symbol(""),Uv=Symbol(""),$h=Symbol("");function Ra(){let i=[];function e(n){return i.push(n),()=>{const s=i.indexOf(n);s>-1&&i.splice(s,1)}}function t(){i=[]}return{add:e,list:()=>i,reset:t}}function As(i,e,t,n,s){const r=n&&(n.enterCallbacks[s]=n.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(Qo(4,{from:t,to:e})):f instanceof Error?a(f):xS(f)?a(Qo(2,{from:e,to:f})):(r&&n.enterCallbacks[s]===r&&typeof f=="function"&&r.push(f),o())},c=i.call(n&&n.instances[s],e,t,l);let u=Promise.resolve(c);i.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function Hf(i,e,t,n){const s=[];for(const r of i)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if($S(a)){const c=(a.__vccOpts||a)[e];c&&s.push(As(c,t,n,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=tS(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&As(h,t,n,r,o)()}))}}return s}function $S(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function Km(i){const e=vi(gp),t=vi(Uv),n=Ft(()=>e.resolve(Dr(i.to))),s=Ft(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Jo.bind(null,u));if(h>-1)return h;const p=Zm(l[c-2]);return c>1&&Zm(u)===p&&f[f.length-1].path!==p?f.findIndex(Jo.bind(null,l[c-2])):h}),r=Ft(()=>s.value>-1&&QS(t.params,n.value.params)),o=Ft(()=>s.value>-1&&s.value===t.matched.length-1&&Ev(t.params,n.value.params));function a(l={}){return JS(l)?e[Dr(i.replace)?"replace":"push"](Dr(i.to)).catch(il):Promise.resolve()}return{route:n,href:Ft(()=>n.value.href),isActive:r,isExactActive:o,navigate:a}}const KS=cv({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Km,setup(i,{slots:e}){const t=ga(Km(i)),{options:n}=vi(gp),s=Ft(()=>({[Jm(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[Jm(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return i.custom?r:mf("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),ZS=KS;function JS(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function QS(i,e){for(const t in e){const n=e[t],s=i[t];if(typeof n=="string"){if(n!==s)return!1}else if(!Mi(s)||s.length!==n.length||n.some((r,o)=>r!==s[o]))return!1}return!0}function Zm(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const Jm=(i,e,t)=>i??e??t,ew=cv({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=vi($h),s=Ft(()=>i.route||n.value),r=vi($m,0),o=Ft(()=>{let c=Dr(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Ft(()=>s.value.matched[o.value]);zc($m,Ft(()=>o.value+1)),zc(qS,a),zc($h,s);const l=hi();return js(()=>[l.value,a.value,i.name],([c,u,f],[h,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Jo(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(d=>d(c))},{flush:"post"}),()=>{const c=s.value,u=i.name,f=a.value,h=f&&f.components[u];if(!h)return Qm(t.default,{Component:h,route:c});const p=f.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=mf(h,rt({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Qm(t.default,{Component:m,route:c})||m}}});function Qm(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const Fv=ew;function tw(i){const e=RS(i.routes,i),t=i.parseQuery||XS,n=i.stringifyQuery||qm,s=i.history,r=Ra(),o=Ra(),a=Ra(),l=x1(_s);let c=_s;uo&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Vf.bind(null,B=>""+B),f=Vf.bind(null,jS),h=Vf.bind(null,ou);function p(B,Q){let Z,oe;return Cv(B)?(Z=e.getRecordMatcher(B),oe=Q):oe=B,e.addRoute(oe,Z)}function g(B){const Q=e.getRecordMatcher(B);Q&&e.removeRoute(Q)}function d(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function _(B,Q){if(Q=rt({},Q||l.value),typeof B=="string"){const k=Gf(t,B,Q.path),J=e.resolve({path:k.path},Q),te=s.createHref(k.fullPath);return rt(k,J,{params:h(J.params),hash:ou(k.hash),redirectedFrom:void 0,href:te})}let Z;if("path"in B)Z=rt({},B,{path:Gf(t,B.path,Q.path).path});else{const k=rt({},B.params);for(const J in k)k[J]==null&&delete k[J];Z=rt({},B,{params:f(k)}),Q.params=f(Q.params)}const oe=e.resolve(Z,Q),Te=B.hash||"";oe.params=u(h(oe.params));const C=sS(n,rt({},B,{hash:GS(Te),path:oe.path})),L=s.createHref(C);return rt({fullPath:C,hash:Te,query:n===qm?YS(B.query):B.query||{}},oe,{redirectedFrom:void 0,href:L})}function x(B){return typeof B=="string"?Gf(t,B,l.value.path):rt({},B)}function v(B,Q){if(c!==B)return Qo(8,{from:Q,to:B})}function y(B){return A(B)}function M(B){return y(rt(x(B),{replace:!0}))}function E(B){const Q=B.matched[B.matched.length-1];if(Q&&Q.redirect){const{redirect:Z}=Q;let oe=typeof Z=="function"?Z(B):Z;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=x(oe):{path:oe},oe.params={}),rt({query:B.query,hash:B.hash,params:"path"in oe?{}:B.params},oe)}}function A(B,Q){const Z=c=_(B),oe=l.value,Te=B.state,C=B.force,L=B.replace===!0,k=E(Z);if(k)return A(rt(x(k),{state:typeof k=="object"?rt({},Te,k.state):Te,force:C,replace:L}),Q||Z);const J=Z;J.redirectedFrom=Q;let te;return!C&&rS(n,oe,Z)&&(te=Qo(16,{to:J,from:oe}),be(oe,oe,!0,!1)),(te?Promise.resolve(te):P(J,oe)).catch(ce=>ji(ce)?ji(ce,2)?ce:he(ce):V(ce,J,oe)).then(ce=>{if(ce){if(ji(ce,2))return A(rt({replace:L},x(ce.to),{state:typeof ce.to=="object"?rt({},Te,ce.to.state):Te,force:C}),Q||J)}else ce=q(J,oe,!0,L,Te);return I(J,oe,ce),ce})}function b(B,Q){const Z=v(B,Q);return Z?Promise.reject(Z):Promise.resolve()}function T(B){const Q=pe.values().next().value;return Q&&typeof Q.runWithContext=="function"?Q.runWithContext(B):B()}function P(B,Q){let Z;const[oe,Te,C]=nw(B,Q);Z=Hf(oe.reverse(),"beforeRouteLeave",B,Q);for(const k of oe)k.leaveGuards.forEach(J=>{Z.push(As(J,B,Q))});const L=b.bind(null,B,Q);return Z.push(L),Se(Z).then(()=>{Z=[];for(const k of r.list())Z.push(As(k,B,Q));return Z.push(L),Se(Z)}).then(()=>{Z=Hf(Te,"beforeRouteUpdate",B,Q);for(const k of Te)k.updateGuards.forEach(J=>{Z.push(As(J,B,Q))});return Z.push(L),Se(Z)}).then(()=>{Z=[];for(const k of B.matched)if(k.beforeEnter&&!Q.matched.includes(k))if(Mi(k.beforeEnter))for(const J of k.beforeEnter)Z.push(As(J,B,Q));else Z.push(As(k.beforeEnter,B,Q));return Z.push(L),Se(Z)}).then(()=>(B.matched.forEach(k=>k.enterCallbacks={}),Z=Hf(C,"beforeRouteEnter",B,Q),Z.push(L),Se(Z))).then(()=>{Z=[];for(const k of o.list())Z.push(As(k,B,Q));return Z.push(L),Se(Z)}).catch(k=>ji(k,8)?k:Promise.reject(k))}function I(B,Q,Z){for(const oe of a.list())T(()=>oe(B,Q,Z))}function q(B,Q,Z,oe,Te){const C=v(B,Q);if(C)return C;const L=Q===_s,k=uo?history.state:{};Z&&(oe||L?s.replace(B.fullPath,rt({scroll:L&&k&&k.scroll},Te)):s.push(B.fullPath,Te)),l.value=B,be(B,Q,Z,L),he()}let N;function D(){N||(N=s.listen((B,Q,Z)=>{if(!H.listening)return;const oe=_(B),Te=E(oe);if(Te){A(rt(Te,{replace:!0}),oe).catch(il);return}c=oe;const C=l.value;uo&&dS(Bm(C.fullPath,Z.delta),gf()),P(oe,C).catch(L=>ji(L,12)?L:ji(L,2)?(A(L.to,oe).then(k=>{ji(k,20)&&!Z.delta&&Z.type===xl.pop&&s.go(-1,!1)}).catch(il),Promise.reject()):(Z.delta&&s.go(-Z.delta,!1),V(L,oe,C))).then(L=>{L=L||q(oe,C,!1),L&&(Z.delta&&!ji(L,8)?s.go(-Z.delta,!1):Z.type===xl.pop&&ji(L,20)&&s.go(-1,!1)),I(oe,C,L)}).catch(il)}))}let O=Ra(),$=Ra(),j;function V(B,Q,Z){he(B);const oe=$.list();return oe.length?oe.forEach(Te=>Te(B,Q,Z)):console.error(B),Promise.reject(B)}function re(){return j&&l.value!==_s?Promise.resolve():new Promise((B,Q)=>{O.add([B,Q])})}function he(B){return j||(j=!B,D(),O.list().forEach(([Q,Z])=>B?Z(B):Q()),O.reset()),B}function be(B,Q,Z,oe){const{scrollBehavior:Te}=i;if(!uo||!Te)return Promise.resolve();const C=!Z&&pS(Bm(B.fullPath,0))||(oe||!Z)&&history.state&&history.state.scroll||null;return sp().then(()=>Te(B,Q,C)).then(L=>L&&hS(L)).catch(L=>V(L,B,Q))}const X=B=>s.go(B);let ue;const pe=new Set,H={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:m,getRoutes:d,resolve:_,options:i,push:y,replace:M,go:X,back:()=>X(-1),forward:()=>X(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:$.add,isReady:re,install(B){const Q=this;B.component("RouterLink",ZS),B.component("RouterView",Fv),B.config.globalProperties.$router=Q,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Dr(l)}),uo&&!ue&&l.value===_s&&(ue=!0,y(s.location).catch(Te=>{}));const Z={};for(const Te in _s)Z[Te]=Ft(()=>l.value[Te]);B.provide(gp,Q),B.provide(Uv,ga(Z)),B.provide($h,l);const oe=B.unmount;pe.add(B),B.unmount=function(){pe.delete(B),pe.size<1&&(c=_s,N&&N(),N=null,l.value=_s,ue=!1,j=!1),oe()}}};function Se(B){return B.reduce((Q,Z)=>Q.then(()=>T(Z)),Promise.resolve())}return H}function nw(i,e){const t=[],n=[],s=[],r=Math.max(e.matched.length,i.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(i.matched.find(c=>Jo(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>Jo(c,l))||s.push(l))}return[t,n,s]}const iw={class:"container"},sw=kt("footer",null,null,-1),rw={__name:"App",setup(i){const e=hi(!1);return Ue.on(Ye.APP_LOADED,()=>e.value=!0),(t,n)=>(ki(),_a("div",iw,[kt("main",null,[e.value?Am("",!0):(ki(),su(eS,{key:0})),e.value?(ki(),su(Dr(Fv),{key:1})):Am("",!0)]),sw]))}},ow="modulepreload",aw=function(i){return"/"+i},eg={},qa=function(e,t,n){if(!t||t.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map(r=>{if(r=aw(r),r in eg)return;eg[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!n)for(let u=s.length-1;u>=0;u--){const f=s[u];if(f.href===r&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":ow,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};const _p=(i,e)=>{const t=i.__vccOpts||i;for(const[n,s]of e)t[n]=s;return t},lw={};function cw(i,e){return ki(),_a("div",null,[J1(i.$slots,"default",{},void 0,!0)])}const kv=_p(lw,[["render",cw],["__scopeId","data-v-c46f414c"]]),uw="/assets/images/Paris24.png";const fw={},zv=i=>(rv("data-v-71de5a8e"),i=i(),ov(),i),hw=zv(()=>kt("h1",null,[df("Olympic "),kt("br"),kt("span",null," Medal Rush")],-1)),dw=zv(()=>kt("img",{src:uw,alt:""},null,-1)),pw=[hw,dw];function mw(i,e){return ki(),_a("div",null,pw)}const Bv=_p(fw,[["render",mw],["__scopeId","data-v-71de5a8e"]]),gw={class:"home"},_w={__name:"HomeView",setup(i){const e=()=>{Me.webgl.renderLogin=!0,wf.push("/login")};return(t,n)=>(ki(),_a("div",gw,[Dt(Bv),Dt(kv,{onClick:e},{default:op(()=>[df("Rejoindre un pays")]),_:1})]))}},vw="/assets/images/flags/BZH.png";var Cr,ui;const So=class{constructor(){ve(this,Cr,void 0);ve(this,ui,void 0);mt(this,Cr,new Map),mt(this,ui,new Map)}get(e){return G(this,Cr).get(e)}set(e,t){var n;return t!==G(this,Cr).get(e)&&(G(this,Cr).set(e,t),(n=G(this,ui).get(e))==null||n.forEach(s=>s.call(this,t))),this.get(e)}watch(e,t){G(this,ui).has(e)?G(this,ui).get(e).add(t):G(this,ui).set(e,new Set().add(t))}stopWatch(e,t){if(!G(this,ui).has(e))return;G(this,ui).get(e).delete(t)}watching(e){return G(this,ui).has(e)}static getInstance(){return So.instance||(So.instance=new So),So.instance}};let Hc=So;Cr=new WeakMap,ui=new WeakMap,Nn(Hc,"instance");const vp=Hc.getInstance();var xw=!1;/*!
  * pinia v2.0.36
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Vv;const _f=i=>Vv=i,Gv=Symbol();function Kh(i){return i&&typeof i=="object"&&Object.prototype.toString.call(i)==="[object Object]"&&typeof i.toJSON!="function"}var rl;(function(i){i.direct="direct",i.patchObject="patch object",i.patchFunction="patch function"})(rl||(rl={}));function yw(){const i=$d(!0),e=i.run(()=>hi({}));let t=[],n=[];const s=$o({install(r){_f(s),s._a=r,r.provide(Gv,s),r.config.globalProperties.$pinia=s,n.forEach(o=>t.push(o)),n=[]},use(r){return!this._a&&!xw?n.push(r):t.push(r),this},_p:t,_a:null,_e:i,_s:new Map,state:e});return s}const Hv=()=>{};function tg(i,e,t,n=Hv){i.push(e);const s=()=>{const r=i.indexOf(e);r>-1&&(i.splice(r,1),n())};return!t&&F_()&&Wb(s),s}function Yr(i,...e){i.slice().forEach(t=>{t(...e)})}function Zh(i,e){i instanceof Map&&e instanceof Map&&e.forEach((t,n)=>i.set(n,t)),i instanceof Set&&e instanceof Set&&e.forEach(i.add,i);for(const t in e){if(!e.hasOwnProperty(t))continue;const n=e[t],s=i[t];Kh(s)&&Kh(n)&&i.hasOwnProperty(t)&&!Mt(n)&&!Hs(n)?i[t]=Zh(s,n):i[t]=n}return i}const bw=Symbol();function Mw(i){return!Kh(i)||!i.hasOwnProperty(bw)}const{assign:Ts}=Object;function Sw(i){return!!(Mt(i)&&i.effect)}function ww(i,e,t,n){const{state:s,actions:r,getters:o}=e,a=t.state.value[i];let l;function c(){a||(t.state.value[i]=s?s():{});const u=M1(t.state.value[i]);return Ts(u,r,Object.keys(o||{}).reduce((f,h)=>(f[h]=$o(Ft(()=>{_f(t);const p=t._s.get(i);return o[h].call(p,p)})),f),{}))}return l=Wv(i,c,e,t,n,!0),l}function Wv(i,e,t={},n,s,r){let o;const a=Ts({actions:{}},t),l={deep:!0};let c,u,f=$o([]),h=$o([]),p;const g=n.state.value[i];!r&&!g&&(n.state.value[i]={}),hi({});let d;function m(A){let b;c=u=!1,typeof A=="function"?(A(n.state.value[i]),b={type:rl.patchFunction,storeId:i,events:p}):(Zh(n.state.value[i],A),b={type:rl.patchObject,payload:A,storeId:i,events:p});const T=d=Symbol();sp().then(()=>{d===T&&(c=!0)}),u=!0,Yr(f,b,n.state.value[i])}const _=r?function(){const{state:b}=t,T=b?b():{};this.$patch(P=>{Ts(P,T)})}:Hv;function x(){o.stop(),f=[],h=[],n._s.delete(i)}function v(A,b){return function(){_f(n);const T=Array.from(arguments),P=[],I=[];function q(O){P.push(O)}function N(O){I.push(O)}Yr(h,{args:T,name:A,store:M,after:q,onError:N});let D;try{D=b.apply(this&&this.$id===i?this:M,T)}catch(O){throw Yr(I,O),O}return D instanceof Promise?D.then(O=>(Yr(P,O),O)).catch(O=>(Yr(I,O),Promise.reject(O))):(Yr(P,D),D)}}const y={_p:n,$id:i,$onAction:tg.bind(null,h),$patch:m,$reset:_,$subscribe(A,b={}){const T=tg(f,A,b.detached,()=>P()),P=o.run(()=>js(()=>n.state.value[i],I=>{(b.flush==="sync"?u:c)&&A({storeId:i,type:rl.direct,events:p},I)},Ts({},l,b)));return T},$dispose:x},M=ga(y);n._s.set(i,M);const E=n._e.run(()=>(o=$d(),o.run(()=>e())));for(const A in E){const b=E[A];if(Mt(b)&&!Sw(b)||Hs(b))r||(g&&Mw(b)&&(Mt(b)?b.value=g[A]:Zh(b,g[A])),n.state.value[i][A]=b);else if(typeof b=="function"){const T=v(A,b);E[A]=T,a.actions[A]=b}}return Ts(M,E),Ts(tt(M),E),Object.defineProperty(M,"$state",{get:()=>n.state.value[i],set:A=>{m(b=>{Ts(b,A)})}}),n._p.forEach(A=>{Ts(M,o.run(()=>A({store:M,app:n._a,pinia:n,options:a})))}),g&&r&&t.hydrate&&t.hydrate(M.$state,g),c=!0,u=!0,M}function Tw(i,e,t){let n,s;const r=typeof e=="function";typeof i=="string"?(n=i,s=r?t:e):(s=i,n=i.id);function o(a,l){const c=pf();return a=a||c&&vi(Gv,null),a&&_f(a),a=Vv,a._s.has(n)||(r?Wv(n,e,s,a):ww(n,s,a)),a._s.get(n)}return o.$id=n,o}const Ew=[[0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0],[0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0],[0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0],[0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,2,1,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,1,0,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,1,1,0,2,2,2,2,2,2,2,2,2,2,2,2,1,2,1,1,0,0,0,0,0,0,0,0,0,1,1,0],[0,1,0,0,0,0,0,0,0,1,1,1,1,2,1,2,2,2,2,2,2,2,2,2,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,0,0,1,1,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,0,0,0,0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,0,0,2,1,1,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,0,0,0,0,0,1,1,0,1,1,0],[0,1,1,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,0,0,0,0,0,1,1,1,1,1,0],[0,1,1,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,1,1,1,0],[0,1,1,1,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,1,1,1,1,0],[0,1,0,0,0,0,0,0,1,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,0,0,0,0,0,1,1,2,2,2,2,2,1,2,2,2,2,1,2,1,2,2,2,2,1,1,1,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1,1,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,1,0,0,1,0,0,0,0,0,1,1,0],[0,1,1,0,0,0,0,0,0,0,1,0,0,2,2,2,2,2,2,2,2,1,2,2,2,2,0,0,0,0,0,1,0,0,0,0,0,1,1,0],[0,1,1,0,0,0,0,0,0,0,1,0,0,0,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0],[0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0],[0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0],[0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0]],Aw={0:"Terrain",1:"Obstacles",2:"Spawn"},jv={data:Ew,mapping:Aw};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xp="150",O4={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},U4={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cw=0,ng=1,Rw=2,Xv=1,Lw=2,$a=3,fs=0,Gn=1,os=2,Xs=0,Co=1,ig=2,sg=3,rg=4,Pw=5,fo=100,Iw=101,Dw=102,og=103,ag=104,Nw=200,Ow=201,Uw=202,Fw=203,Yv=204,qv=205,kw=206,zw=207,Bw=208,Vw=209,Gw=210,Hw=0,Ww=1,jw=2,Jh=3,Xw=4,Yw=5,qw=6,$w=7,$v=0,Kw=1,Zw=2,cs=0,Jw=1,Qw=2,eT=3,tT=4,nT=5,Kv=300,ea=301,ta=302,au=303,lu=304,ql=306,pi=1e3,Tn=1001,cu=1002,Xt=1003,Qh=1004,Wc=1005,Ut=1006,Zv=1007,Zs=1008,zr=1009,iT=1010,sT=1011,Jv=1012,rT=1013,Sr=1014,mi=1015,as=1016,oT=1017,aT=1018,Ro=1020,lT=1021,ei=1023,cT=1024,uT=1025,Or=1026,na=1027,fT=1028,hT=1029,dT=1030,pT=1031,mT=1033,Wf=33776,jf=33777,Xf=33778,Yf=33779,lg=35840,cg=35841,ug=35842,fg=35843,gT=36196,hg=37492,dg=37496,pg=37808,mg=37809,gg=37810,_g=37811,vg=37812,xg=37813,yg=37814,bg=37815,Mg=37816,Sg=37817,wg=37818,Tg=37819,Eg=37820,Ag=37821,qf=36492,_T=36283,Cg=36284,Rg=36285,Lg=36286,vT=2200,xT=2201,yT=2202,yl=2300,ia=2301,$f=2302,mo=2400,go=2401,uu=2402,yp=2500,bT=2501,MT=0,Qv=1,ed=2,Js=3e3,it=3001,ST=3200,wT=3201,bp=0,TT=1,Ci="srgb",bl="srgb-linear",ex="display-p3",Kf=7680,ET=519,td=35044,Pg="300 es",nd=1035;class Gr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ig=1234567;const ol=Math.PI/180,Ml=180/Math.PI;function xi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function Kt(i,e,t){return Math.max(e,Math.min(t,i))}function Mp(i,e){return(i%e+e)%e}function AT(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function CT(i,e,t){return i!==e?(t-i)/(e-i):0}function al(i,e,t){return(1-t)*i+t*e}function RT(i,e,t,n){return al(i,e,1-Math.exp(-t*n))}function LT(i,e=1){return e-Math.abs(Mp(i,e*2)-e)}function PT(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function IT(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function DT(i,e){return i+Math.floor(Math.random()*(e-i+1))}function NT(i,e){return i+Math.random()*(e-i)}function OT(i){return i*(.5-Math.random())}function UT(i){i!==void 0&&(Ig=i);let e=Ig+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function FT(i){return i*ol}function kT(i){return i*Ml}function id(i){return(i&i-1)===0&&i!==0}function tx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zT(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),f=r((e-n)/2),h=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ls(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const BT={DEG2RAD:ol,RAD2DEG:Ml,generateUUID:xi,clamp:Kt,euclideanModulo:Mp,mapLinear:AT,inverseLerp:CT,lerp:al,damp:RT,pingpong:LT,smoothstep:PT,smootherstep:IT,randInt:DT,randFloat:NT,randFloatSpread:OT,seededRandom:UT,degToRad:FT,radToDeg:kT,isPowerOfTwo:id,ceilPowerOfTwo:tx,floorPowerOfTwo:nx,setQuaternionFromProperEuler:zT,normalize:at,denormalize:ls};class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vn{constructor(){vn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],g=n[8],d=s[0],m=s[3],_=s[6],x=s[1],v=s[4],y=s[7],M=s[2],E=s[5],A=s[8];return r[0]=o*d+a*x+l*M,r[3]=o*m+a*v+l*E,r[6]=o*_+a*y+l*A,r[1]=c*d+u*x+f*M,r[4]=c*m+u*v+f*E,r[7]=c*_+u*y+f*A,r[2]=h*d+p*x+g*M,r[5]=h*m+p*v+g*E,r[8]=h*_+p*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,p=c*r-o*l,g=t*f+n*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=f*d,e[1]=(s*c-u*n)*d,e[2]=(a*n-s*o)*d,e[3]=h*d,e[4]=(u*t-s*l)*d,e[5]=(s*r-a*t)*d,e[6]=p*d,e[7]=(n*l-c*t)*d,e[8]=(o*t-n*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zf.makeScale(e,t)),this}rotate(e){return this.premultiply(Zf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zf.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zf=new vn;function ix(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Sl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}class xn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const h=r[o+0],p=r[o+1],g=r[o+2],d=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=d;return}if(f!==d||l!==h||c!==p||u!==g){let m=1-a;const _=l*h+c*p+u*g+f*d,x=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){const M=Math.sqrt(v),E=Math.atan2(M,_*x);m=Math.sin(m*E)/M,a=Math.sin(a*E)/M}const y=a*x;if(l=l*m+h*y,c=c*m+p*y,u=u*m+g*y,f=f*m+d*y,m===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-a*p,e[t+2]=c*g+u*p+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*s-a*n,u=l*n+a*t-r*s,f=l*s+r*n-o*t,h=-r*t-o*n-a*s;return this.x=c*l+h*-r+u*-a-f*-o,this.y=u*l+h*-o+f*-r-c*-a,this.z=f*l+h*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jf.copy(this).projectOnVector(e),this.sub(Jf)}reflect(e){return this.sub(Jf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jf=new z,Dg=new xn;function Lo(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qf(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const VT=new vn().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),GT=new vn().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Fs=new z;function HT(i){return i.convertSRGBToLinear(),Fs.set(i.r,i.g,i.b).applyMatrix3(GT),i.setRGB(Fs.x,Fs.y,Fs.z)}function WT(i){return Fs.set(i.r,i.g,i.b).applyMatrix3(VT),i.setRGB(Fs.x,Fs.y,Fs.z).convertLinearToSRGB()}const jT={[bl]:i=>i,[Ci]:i=>i.convertSRGBToLinear(),[ex]:HT},XT={[bl]:i=>i,[Ci]:i=>i.convertLinearToSRGB(),[ex]:WT},dn={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return bl},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=jT[e],s=XT[t];if(n===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let qr;class sx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qr===void 0&&(qr=Sl("canvas")),qr.width=e.width,qr.height=e.height;const n=qr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Lo(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Lo(t[n]/255)*255):t[n]=Lo(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class rx{constructor(e=null){this.isSource=!0,this.uuid=xi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(eh(s[o].image)):r.push(eh(s[o]))}else r=eh(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function eh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sx.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let YT=0;class en extends Gr{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=Tn,s=Tn,r=Ut,o=Zs,a=ei,l=zr,c=en.DEFAULT_ANISOTROPY,u=Js){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YT++}),this.uuid=xi(),this.name="",this.source=new rx(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pi:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case cu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pi:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case cu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Kv;en.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,s=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],d=l[2],m=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-d)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+d)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(p+1)/2,M=(_+1)/2,E=(u+h)/4,A=(f+d)/4,b=(g+m)/4;return v>y&&v>M?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=A/n):y>M?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=b/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=A/r,s=b/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(f-d)*(f-d)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-d)/x,this.z=(h-u)/x,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bi extends Gr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new en(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ut,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ox extends en{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qT extends en{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class va{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<s&&(s=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<s&&(s=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ur.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)ur.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ur)}else n.boundingBox===null&&n.computeBoundingBox(),th.copy(n.boundingBox),th.applyMatrix4(e.matrixWorld),this.union(th);const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ur),ur.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(La),ac.subVectors(this.max,La),$r.subVectors(e.a,La),Kr.subVectors(e.b,La),Zr.subVectors(e.c,La),vs.subVectors(Kr,$r),xs.subVectors(Zr,Kr),fr.subVectors($r,Zr);let t=[0,-vs.z,vs.y,0,-xs.z,xs.y,0,-fr.z,fr.y,vs.z,0,-vs.x,xs.z,0,-xs.x,fr.z,0,-fr.x,-vs.y,vs.x,0,-xs.y,xs.x,0,-fr.y,fr.x,0];return!nh(t,$r,Kr,Zr,ac)||(t=[1,0,0,0,1,0,0,0,1],!nh(t,$r,Kr,Zr,ac))?!1:(lc.crossVectors(vs,xs),t=[lc.x,lc.y,lc.z],nh(t,$r,Kr,Zr,ac))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ur).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ur).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xi=[new z,new z,new z,new z,new z,new z,new z,new z],ur=new z,th=new va,$r=new z,Kr=new z,Zr=new z,vs=new z,xs=new z,fr=new z,La=new z,ac=new z,lc=new z,hr=new z;function nh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){hr.fromArray(i,r);const a=s.x*Math.abs(hr.x)+s.y*Math.abs(hr.y)+s.z*Math.abs(hr.z),l=e.dot(hr),c=t.dot(hr),u=n.dot(hr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $T=new va,Pa=new z,ih=new z;class xa{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$T.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);const t=Pa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Pa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ih.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(ih)),this.expandByPoint(Pa.copy(e.center).sub(ih))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yi=new z,sh=new z,cc=new z,ys=new z,rh=new z,uc=new z,oh=new z;class vf{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){sh.copy(e).add(t).multiplyScalar(.5),cc.copy(t).sub(e).normalize(),ys.copy(this.origin).sub(sh);const r=e.distanceTo(t)*.5,o=-this.direction.dot(cc),a=ys.dot(this.direction),l=-ys.dot(cc),c=ys.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const d=1/u;f*=d,h*=d,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(sh).addScaledVector(cc,h),p}intersectSphere(e,t){Yi.subVectors(e.center,this.origin);const n=Yi.dot(this.direction),s=Yi.dot(Yi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,n,s,r){rh.subVectors(t,e),uc.subVectors(n,e),oh.crossVectors(rh,uc);let o=this.direction.dot(oh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ys.subVectors(this.origin,e);const l=a*this.direction.dot(uc.crossVectors(ys,uc));if(l<0)return null;const c=a*this.direction.dot(rh.cross(ys));if(c<0||l+c>o)return null;const u=-a*ys.dot(oh);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,r,o,a,l,c,u,f,h,p,g,d,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=p,_[7]=g,_[11]=d,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Jr.setFromMatrixColumn(e,0).length(),r=1/Jr.setFromMatrixColumn(e,1).length(),o=1/Jr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,d=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-d*c,t[9]=-a*l,t[2]=d-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,d=c*f;t[0]=h+d*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=d+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,d=c*f;t[0]=h-d*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=d-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,d=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+d,t[1]=l*f,t[5]=d*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=d-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-d*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+d,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=d*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(KT,e,ZT)}lookAt(e,t,n){const s=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),bs.crossVectors(n,On),bs.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),bs.crossVectors(n,On)),bs.normalize(),fc.crossVectors(On,bs),s[0]=bs.x,s[4]=fc.x,s[8]=On.x,s[1]=bs.y,s[5]=fc.y,s[9]=On.y,s[2]=bs.z,s[6]=fc.z,s[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],g=n[2],d=n[6],m=n[10],_=n[14],x=n[3],v=n[7],y=n[11],M=n[15],E=s[0],A=s[4],b=s[8],T=s[12],P=s[1],I=s[5],q=s[9],N=s[13],D=s[2],O=s[6],$=s[10],j=s[14],V=s[3],re=s[7],he=s[11],be=s[15];return r[0]=o*E+a*P+l*D+c*V,r[4]=o*A+a*I+l*O+c*re,r[8]=o*b+a*q+l*$+c*he,r[12]=o*T+a*N+l*j+c*be,r[1]=u*E+f*P+h*D+p*V,r[5]=u*A+f*I+h*O+p*re,r[9]=u*b+f*q+h*$+p*he,r[13]=u*T+f*N+h*j+p*be,r[2]=g*E+d*P+m*D+_*V,r[6]=g*A+d*I+m*O+_*re,r[10]=g*b+d*q+m*$+_*he,r[14]=g*T+d*N+m*j+_*be,r[3]=x*E+v*P+y*D+M*V,r[7]=x*A+v*I+y*O+M*re,r[11]=x*b+v*q+y*$+M*he,r[15]=x*T+v*N+y*j+M*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],d=e[7],m=e[11],_=e[15];return g*(+r*l*f-s*c*f-r*a*h+n*c*h+s*a*p-n*l*p)+d*(+t*l*p-t*c*h+r*o*h-s*o*p+s*c*u-r*l*u)+m*(+t*c*f-t*a*p-r*o*f+n*o*p+r*a*u-n*c*u)+_*(-s*a*u-t*l*f+t*a*h+s*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],d=e[13],m=e[14],_=e[15],x=f*m*c-d*h*c+d*l*p-a*m*p-f*l*_+a*h*_,v=g*h*c-u*m*c-g*l*p+o*m*p+u*l*_-o*h*_,y=u*d*c-g*f*c+g*a*p-o*d*p-u*a*_+o*f*_,M=g*f*l-u*d*l-g*a*h+o*d*h+u*a*m-o*f*m,E=t*x+n*v+s*y+r*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=x*A,e[1]=(d*h*r-f*m*r-d*s*p+n*m*p+f*s*_-n*h*_)*A,e[2]=(a*m*r-d*l*r+d*s*c-n*m*c-a*s*_+n*l*_)*A,e[3]=(f*l*r-a*h*r-f*s*c+n*h*c+a*s*p-n*l*p)*A,e[4]=v*A,e[5]=(u*m*r-g*h*r+g*s*p-t*m*p-u*s*_+t*h*_)*A,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*_-t*l*_)*A,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*p+t*l*p)*A,e[8]=y*A,e[9]=(g*f*r-u*d*r-g*n*p+t*d*p+u*n*_-t*f*_)*A,e[10]=(o*d*r-g*a*r+g*n*c-t*d*c-o*n*_+t*a*_)*A,e[11]=(u*a*r-o*f*r-u*n*c+t*f*c+o*n*p-t*a*p)*A,e[12]=M*A,e[13]=(u*d*s-g*f*s+g*n*h-t*d*h-u*n*m+t*f*m)*A,e[14]=(g*a*s-o*d*s-g*n*l+t*d*l+o*n*m-t*a*m)*A,e[15]=(o*f*s-u*a*s+u*n*l-t*f*l-o*n*h+t*a*h)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,p=r*u,g=r*f,d=o*u,m=o*f,_=a*f,x=l*c,v=l*u,y=l*f,M=n.x,E=n.y,A=n.z;return s[0]=(1-(d+_))*M,s[1]=(p+y)*M,s[2]=(g-v)*M,s[3]=0,s[4]=(p-y)*E,s[5]=(1-(h+_))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(g+v)*A,s[9]=(m-x)*A,s[10]=(1-(h+d))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Jr.set(s[0],s[1],s[2]).length();const o=Jr.set(s[4],s[5],s[6]).length(),a=Jr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],oi.copy(this);const c=1/r,u=1/o,f=1/a;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=f,oi.elements[9]*=f,oi.elements[10]*=f,t.setFromRotationMatrix(oi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),h=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o){const a=this.elements,l=1/(t-e),c=1/(n-s),u=1/(o-r),f=(t+e)*l,h=(n+s)*c,p=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Jr=new z,oi=new We,KT=new z(0,0,0),ZT=new z(1,1,1),bs=new z,fc=new z,On=new z,Ng=new We,Og=new xn;class ya{constructor(e=0,t=0,n=0,s=ya.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ng.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ng,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Og.setFromEuler(this),this.setFromQuaternion(Og,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ya.DEFAULT_ORDER="XYZ";class Sp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let JT=0;const Ug=new z,Qr=new xn,qi=new We,hc=new z,Ia=new z,QT=new z,eE=new xn,Fg=new z(1,0,0),kg=new z(0,1,0),zg=new z(0,0,1),tE={type:"added"},Bg={type:"removed"};class dt extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:JT++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new z,t=new ya,n=new xn,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new vn}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Sp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qr.setFromAxisAngle(e,t),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(e,t){return Qr.setFromAxisAngle(e,t),this.quaternion.premultiply(Qr),this}rotateX(e){return this.rotateOnAxis(Fg,e)}rotateY(e){return this.rotateOnAxis(kg,e)}rotateZ(e){return this.rotateOnAxis(zg,e)}translateOnAxis(e,t){return Ug.copy(e).applyQuaternion(this.quaternion),this.position.add(Ug.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fg,e)}translateY(e){return this.translateOnAxis(kg,e)}translateZ(e){return this.translateOnAxis(zg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hc.copy(e):hc.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Ia,hc,this.up):qi.lookAt(hc,Ia,this.up),this.quaternion.setFromRotationMatrix(qi),s&&(qi.extractRotation(s.matrixWorld),Qr.setFromRotationMatrix(qi),this.quaternion.premultiply(Qr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(tE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Bg)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,e,QT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,eE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}dt.DEFAULT_UP=new z(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new z,$i=new z,ah=new z,Ki=new z,eo=new z,to=new z,Vg=new z,lh=new z,ch=new z,uh=new z;class ss{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ai.subVectors(e,t),s.cross(ai);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ai.subVectors(s,t),$i.subVectors(n,t),ah.subVectors(e,t);const o=ai.dot(ai),a=ai.dot($i),l=ai.dot(ah),c=$i.dot($i),u=$i.dot(ah),f=o*c-a*a;if(f===0)return r.set(-2,-1,-1);const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ki),Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getUV(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ki),l.set(0,0),l.addScaledVector(r,Ki.x),l.addScaledVector(o,Ki.y),l.addScaledVector(a,Ki.z),l}static isFrontFacing(e,t,n,s){return ai.subVectors(n,t),$i.subVectors(e,t),ai.cross($i).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),ai.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ss.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ss.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return ss.getUV(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return ss.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ss.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;eo.subVectors(s,n),to.subVectors(r,n),lh.subVectors(e,n);const l=eo.dot(lh),c=to.dot(lh);if(l<=0&&c<=0)return t.copy(n);ch.subVectors(e,s);const u=eo.dot(ch),f=to.dot(ch);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(eo,o);uh.subVectors(e,r);const p=eo.dot(uh),g=to.dot(uh);if(g>=0&&p<=g)return t.copy(r);const d=p*c-l*g;if(d<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(to,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Vg.subVectors(r,s),a=(f-u)/(f-u+(p-g)),t.copy(s).addScaledVector(Vg,a);const _=1/(m+d+h);return o=d*_,a=h*_,t.copy(n).addScaledVector(eo,o).addScaledVector(to,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let nE=0;class yi extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=Co,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Yv,this.blendDst=qv,this.blendEquation=fo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Jh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ET,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kf,this.stencilZFail=Kf,this.stencilZPass=Kf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Co&&(n.blending=this.blending),this.side!==fs&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ax={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},dc={h:0,s:0,l:0};function fh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=dn.workingColorSpace){return this.r=e,this.g=t,this.b=n,dn.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=dn.workingColorSpace){if(e=Mp(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=fh(o,r,e+1/3),this.g=fh(o,r,e),this.b=fh(o,r,e-1/3)}return dn.toWorkingColorSpace(this,s),this}setStyle(e,t=Ci){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,dn.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,dn.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,dn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,dn.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ci){const n=ax[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}copyLinearToSRGB(e){return this.r=Qf(e.r),this.g=Qf(e.g),this.b=Qf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ci){return dn.fromWorkingColorSpace(nn.copy(this),e),Kt(nn.r*255,0,255)<<16^Kt(nn.g*255,0,255)<<8^Kt(nn.b*255,0,255)<<0}getHexString(e=Ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dn.workingColorSpace){dn.fromWorkingColorSpace(nn.copy(this),t);const n=nn.r,s=nn.g,r=nn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dn.workingColorSpace){return dn.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Ci){dn.fromWorkingColorSpace(nn.copy(this),e);const t=nn.r,n=nn.g,s=nn.b;return e!==Ci?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${s*255|0})`}offsetHSL(e,t,n){return this.getHSL(li),li.h+=e,li.s+=t,li.l+=n,this.setHSL(li.h,li.s,li.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(dc);const n=al(li.h,dc.h,t),s=al(li.s,dc.s,t),r=al(li.l,dc.l,t);return this.setHSL(n,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Pe;Pe.NAMES=ax;class wr extends yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$v,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new z,pc=new Be;class yn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=td,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pc.fromBufferAttribute(this,t),pc.applyMatrix3(e),this.setXY(t,pc.x,pc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ls(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ls(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ls(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ls(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==td&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class lx extends yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cx extends yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Hn extends yn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let iE=0;const $n=new We,hh=new dt,no=new z,Un=new va,Da=new va,jt=new z;class Yn extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ix(e)?cx:lx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new vn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,n){return $n.makeTranslation(e,t,n),this.applyMatrix4($n),this}scale(e,t,n){return $n.makeScale(e,t,n),this.applyMatrix4($n),this}lookAt(e){return hh.lookAt(e),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Hn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Da.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(Un.min,Da.min),Un.expandByPoint(jt),jt.addVectors(Un.max,Da.max),Un.expandByPoint(jt)):(Un.expandByPoint(Da.min),Un.expandByPoint(Da.max))}Un.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)jt.fromBufferAttribute(a,c),l&&(no.fromBufferAttribute(e,c),jt.add(no)),s=Math.max(s,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<a;P++)c[P]=new z,u[P]=new z;const f=new z,h=new z,p=new z,g=new Be,d=new Be,m=new Be,_=new z,x=new z;function v(P,I,q){f.fromArray(s,P*3),h.fromArray(s,I*3),p.fromArray(s,q*3),g.fromArray(o,P*2),d.fromArray(o,I*2),m.fromArray(o,q*2),h.sub(f),p.sub(f),d.sub(g),m.sub(g);const N=1/(d.x*m.y-m.x*d.y);isFinite(N)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(N),x.copy(p).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(N),c[P].add(_),c[I].add(_),c[q].add(_),u[P].add(x),u[I].add(x),u[q].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let P=0,I=y.length;P<I;++P){const q=y[P],N=q.start,D=q.count;for(let O=N,$=N+D;O<$;O+=3)v(n[O+0],n[O+1],n[O+2])}const M=new z,E=new z,A=new z,b=new z;function T(P){A.fromArray(r,P*3),b.copy(A);const I=c[P];M.copy(I),M.sub(A.multiplyScalar(A.dot(I))).normalize(),E.crossVectors(b,I);const N=E.dot(u[P])<0?-1:1;l[P*4]=M.x,l[P*4+1]=M.y,l[P*4+2]=M.z,l[P*4+3]=N}for(let P=0,I=y.length;P<I;++P){const q=y[P],N=q.start,D=q.count;for(let O=N,$=N+D;O<$;O+=3)T(n[O+0]),T(n[O+1]),T(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),d=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,d),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let d=0,m=l.length;d<m;d++){a.isInterleavedBufferAttribute?p=l[d]*a.data.stride+a.offset:p=l[d]*u;for(let _=0;_<u;_++)h[g++]=c[p++]}return new yn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gg=new We,Ai=new vf,mc=new xa,Hg=new z,Na=new z,Oa=new z,Ua=new z,dh=new z,gc=new z,_c=new Be,vc=new Be,xc=new Be,ph=new z,yc=new z;class ln extends dt{constructor(e=new Yn,t=new wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){gc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(dh.fromBufferAttribute(f,e),o?gc.addScaledVector(dh,u):gc.addScaledVector(dh.sub(t),u))}t.add(gc)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(r),Ai.copy(e.ray).recast(e.near),mc.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(mc,Hg)===null||Ai.origin.distanceToSquared(Hg)>(e.far-e.near)**2))||(Gg.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(Gg),n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.groups,h=n.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,g=f.length;p<g;p++){const d=f[p],m=s[d.materialIndex],_=Math.max(d.start,h.start),x=Math.min(a.count,Math.min(d.start+d.count,h.start+h.count));for(let v=_,y=x;v<y;v+=3){const M=a.getX(v),E=a.getX(v+1),A=a.getX(v+2);o=bc(this,m,e,Ai,c,u,M,E,A),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let d=p,m=g;d<m;d+=3){const _=a.getX(d),x=a.getX(d+1),v=a.getX(d+2);o=bc(this,s,e,Ai,c,u,_,x,v),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,g=f.length;p<g;p++){const d=f[p],m=s[d.materialIndex],_=Math.max(d.start,h.start),x=Math.min(l.count,Math.min(d.start+d.count,h.start+h.count));for(let v=_,y=x;v<y;v+=3){const M=v,E=v+1,A=v+2;o=bc(this,m,e,Ai,c,u,M,E,A),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let d=p,m=g;d<m;d+=3){const _=d,x=d+1,v=d+2;o=bc(this,s,e,Ai,c,u,_,x,v),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}}}function sE(i,e,t,n,s,r,o,a){let l;if(e.side===Gn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===fs,a),l===null)return null;yc.copy(a),yc.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(yc);return c<t.near||c>t.far?null:{distance:c,point:yc.clone(),object:i}}function bc(i,e,t,n,s,r,o,a,l){i.getVertexPosition(o,Na),i.getVertexPosition(a,Oa),i.getVertexPosition(l,Ua);const c=sE(i,e,t,n,Na,Oa,Ua,ph);if(c){s&&(_c.fromBufferAttribute(s,o),vc.fromBufferAttribute(s,a),xc.fromBufferAttribute(s,l),c.uv=ss.getUV(ph,Na,Oa,Ua,_c,vc,xc,new Be)),r&&(_c.fromBufferAttribute(r,o),vc.fromBufferAttribute(r,a),xc.fromBufferAttribute(r,l),c.uv2=ss.getUV(ph,Na,Oa,Ua,_c,vc,xc,new Be));const u={a:o,b:a,c:l,normal:new z,materialIndex:0};ss.getNormal(Na,Oa,Ua,u.normal),c.face=u}return c}class ba extends Yn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Hn(c,3)),this.setAttribute("normal",new Hn(u,3)),this.setAttribute("uv",new Hn(f,2));function g(d,m,_,x,v,y,M,E,A,b,T){const P=y/A,I=M/b,q=y/2,N=M/2,D=E/2,O=A+1,$=b+1;let j=0,V=0;const re=new z;for(let he=0;he<$;he++){const be=he*I-N;for(let X=0;X<O;X++){const ue=X*P-q;re[d]=ue*x,re[m]=be*v,re[_]=D,c.push(re.x,re.y,re.z),re[d]=0,re[m]=0,re[_]=E>0?1:-1,u.push(re.x,re.y,re.z),f.push(X/A),f.push(1-he/b),j+=1}}for(let he=0;he<b;he++)for(let be=0;be<A;be++){const X=h+be+O*he,ue=h+be+O*(he+1),pe=h+(be+1)+O*(he+1),H=h+(be+1)+O*he;l.push(X,ue,H),l.push(ue,pe,H),V+=6}a.addGroup(p,V,T),p+=V,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sa(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function gn(i){const e={};for(let t=0;t<i.length;t++){const n=sa(i[t]);for(const s in n)e[s]=n[s]}return e}function rE(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ux(i){return i.getRenderTarget()===null&&i.outputEncoding===it?Ci:bl}const oE={clone:sa,merge:gn};var aE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aE,this.fragmentShader=lE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=rE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wp extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class sn extends wp{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ml*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ol*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ml*2*Math.atan(Math.tan(ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ol*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const io=-90,so=1;class cE extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new sn(io,so,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new sn(io,so,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new sn(io,so,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new sn(io,so,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new sn(io,so,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new sn(io,so,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=cs,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class fx extends en{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ea,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uE extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new fx(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ba(5,5,5),r=new Vi({name:"CubemapFromEquirect",uniforms:sa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gn,blending:Xs});r.uniforms.tEquirect.value=t;const o=new ln(s,r),a=t.minFilter;return t.minFilter===Zs&&(t.minFilter=Ut),new cE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const mh=new z,fE=new z,hE=new vn;class gr{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=mh.subVectors(n,t).cross(fE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(mh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||hE.getNormalMatrix(e),s=this.coplanarPoint(mh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ro=new xa,Mc=new z;class xf{constructor(e=new gr,t=new gr,n=new gr,s=new gr,r=new gr,o=new gr){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],p=n[9],g=n[10],d=n[11],m=n[12],_=n[13],x=n[14],v=n[15];return t[0].setComponents(a-s,f-l,d-h,v-m).normalize(),t[1].setComponents(a+s,f+l,d+h,v+m).normalize(),t[2].setComponents(a+r,f+c,d+p,v+_).normalize(),t[3].setComponents(a-r,f-c,d-p,v-_).normalize(),t[4].setComponents(a-o,f-u,d-g,v-x).normalize(),t[5].setComponents(a+o,f+u,d+g,v+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ro.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ro)}intersectsSprite(e){return ro.center.set(0,0,0),ro.radius=.7071067811865476,ro.applyMatrix4(e.matrixWorld),this.intersectsSphere(ro)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Mc.x=s.normal.x>0?e.max.x:e.min.x,Mc.y=s.normal.y>0?e.max.y:e.min.y,Mc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hx(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function dE(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const f=c.array,h=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const h=u.array,p=u.updateRange;i.bindBuffer(f,c),p.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,s(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class yf extends Yn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,p=[],g=[],d=[],m=[];for(let _=0;_<u;_++){const x=_*h-o;for(let v=0;v<c;v++){const y=v*f-r;g.push(y,-x,0),d.push(0,0,1),m.push(v/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let x=0;x<a;x++){const v=x+c*_,y=x+c*(_+1),M=x+1+c*(_+1),E=x+1+c*_;p.push(v,y,E),p.push(y,M,E)}this.setIndex(p),this.setAttribute("position",new Hn(g,3)),this.setAttribute("normal",new Hn(d,3)),this.setAttribute("uv",new Hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yf(e.width,e.height,e.widthSegments,e.heightSegments)}}var pE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,mE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_E=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yE="vec3 transformed = vec3( position );",bE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ME=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,SE=`#ifdef USE_IRIDESCENCE
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
#endif`,wE=`#ifdef USE_BUMPMAP
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
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,IE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,DE=`#define PI 3.141592653589793
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
}`,NE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,OE=`vec3 transformedNormal = objectNormal;
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
#endif`,UE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,kE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BE="gl_FragColor = linearToOutputTexel( gl_FragColor );",VE=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GE=`#ifdef USE_ENVMAP
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
#endif`,HE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WE=`#ifdef USE_ENVMAP
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
#endif`,jE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XE=`#ifdef USE_ENVMAP
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
#endif`,YE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$E=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZE=`#ifdef USE_GRADIENTMAP
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
}`,JE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,QE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nA=`uniform bool receiveShadow;
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
#endif`,iA=`#if defined( USE_ENVMAP )
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
#endif`,sA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lA=`PhysicalMaterial material;
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
#endif`,cA=`struct PhysicalMaterial {
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
}`,uA=`
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
#endif`,fA=`#if defined( RE_IndirectDiffuse )
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
#endif`,hA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,dA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_A=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wA=`#ifdef USE_MORPHNORMALS
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
#endif`,TA=`#ifdef USE_MORPHTARGETS
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
#endif`,EA=`#ifdef USE_MORPHTARGETS
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
#endif`,AA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,CA=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,RA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IA=`#ifdef USE_NORMALMAP
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
#endif`,DA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,NA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,OA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,UA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qA=`float getShadowMask() {
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
}`,$A=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KA=`#ifdef USE_SKINNING
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
#endif`,ZA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JA=`#ifdef USE_SKINNING
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
#endif`,QA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i2=`#ifdef USE_TRANSMISSION
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
#endif`,s2=`#ifdef USE_TRANSMISSION
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
#endif`,r2=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,o2=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,a2=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,l2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,c2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,u2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,f2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const h2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d2=`uniform sampler2D t2D;
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
}`,p2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,g2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,v2=`#include <common>
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
}`,x2=`#if DEPTH_PACKING == 3200
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
}`,y2=`#define DISTANCE
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
}`,b2=`#define DISTANCE
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
}`,M2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,w2=`uniform float scale;
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
}`,T2=`uniform vec3 diffuse;
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
}`,E2=`#include <common>
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
}`,A2=`uniform vec3 diffuse;
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
}`,C2=`#define LAMBERT
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
}`,R2=`#define LAMBERT
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
}`,L2=`#define MATCAP
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
}`,P2=`#define MATCAP
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
}`,I2=`#define NORMAL
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
}`,D2=`#define NORMAL
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
}`,N2=`#define PHONG
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
}`,O2=`#define PHONG
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
}`,U2=`#define STANDARD
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
}`,F2=`#define STANDARD
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
}`,k2=`#define TOON
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
}`,z2=`#define TOON
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
}`,B2=`uniform float size;
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
}`,V2=`uniform vec3 diffuse;
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
}`,G2=`#include <common>
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
}`,H2=`uniform vec3 color;
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
}`,W2=`uniform float rotation;
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
}`,j2=`uniform vec3 diffuse;
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
}`,Ge={alphamap_fragment:pE,alphamap_pars_fragment:mE,alphatest_fragment:gE,alphatest_pars_fragment:_E,aomap_fragment:vE,aomap_pars_fragment:xE,begin_vertex:yE,beginnormal_vertex:bE,bsdfs:ME,iridescence_fragment:SE,bumpmap_pars_fragment:wE,clipping_planes_fragment:TE,clipping_planes_pars_fragment:EE,clipping_planes_pars_vertex:AE,clipping_planes_vertex:CE,color_fragment:RE,color_pars_fragment:LE,color_pars_vertex:PE,color_vertex:IE,common:DE,cube_uv_reflection_fragment:NE,defaultnormal_vertex:OE,displacementmap_pars_vertex:UE,displacementmap_vertex:FE,emissivemap_fragment:kE,emissivemap_pars_fragment:zE,encodings_fragment:BE,encodings_pars_fragment:VE,envmap_fragment:GE,envmap_common_pars_fragment:HE,envmap_pars_fragment:WE,envmap_pars_vertex:jE,envmap_physical_pars_fragment:iA,envmap_vertex:XE,fog_vertex:YE,fog_pars_vertex:qE,fog_fragment:$E,fog_pars_fragment:KE,gradientmap_pars_fragment:ZE,lightmap_fragment:JE,lightmap_pars_fragment:QE,lights_lambert_fragment:eA,lights_lambert_pars_fragment:tA,lights_pars_begin:nA,lights_toon_fragment:sA,lights_toon_pars_fragment:rA,lights_phong_fragment:oA,lights_phong_pars_fragment:aA,lights_physical_fragment:lA,lights_physical_pars_fragment:cA,lights_fragment_begin:uA,lights_fragment_maps:fA,lights_fragment_end:hA,logdepthbuf_fragment:dA,logdepthbuf_pars_fragment:pA,logdepthbuf_pars_vertex:mA,logdepthbuf_vertex:gA,map_fragment:_A,map_pars_fragment:vA,map_particle_fragment:xA,map_particle_pars_fragment:yA,metalnessmap_fragment:bA,metalnessmap_pars_fragment:MA,morphcolor_vertex:SA,morphnormal_vertex:wA,morphtarget_pars_vertex:TA,morphtarget_vertex:EA,normal_fragment_begin:AA,normal_fragment_maps:CA,normal_pars_fragment:RA,normal_pars_vertex:LA,normal_vertex:PA,normalmap_pars_fragment:IA,clearcoat_normal_fragment_begin:DA,clearcoat_normal_fragment_maps:NA,clearcoat_pars_fragment:OA,iridescence_pars_fragment:UA,output_fragment:FA,packing:kA,premultiplied_alpha_fragment:zA,project_vertex:BA,dithering_fragment:VA,dithering_pars_fragment:GA,roughnessmap_fragment:HA,roughnessmap_pars_fragment:WA,shadowmap_pars_fragment:jA,shadowmap_pars_vertex:XA,shadowmap_vertex:YA,shadowmask_pars_fragment:qA,skinbase_vertex:$A,skinning_pars_vertex:KA,skinning_vertex:ZA,skinnormal_vertex:JA,specularmap_fragment:QA,specularmap_pars_fragment:e2,tonemapping_fragment:t2,tonemapping_pars_fragment:n2,transmission_fragment:i2,transmission_pars_fragment:s2,uv_pars_fragment:r2,uv_pars_vertex:o2,uv_vertex:a2,uv2_pars_fragment:l2,uv2_pars_vertex:c2,uv2_vertex:u2,worldpos_vertex:f2,background_vert:h2,background_frag:d2,backgroundCube_vert:p2,backgroundCube_frag:m2,cube_vert:g2,cube_frag:_2,depth_vert:v2,depth_frag:x2,distanceRGBA_vert:y2,distanceRGBA_frag:b2,equirect_vert:M2,equirect_frag:S2,linedashed_vert:w2,linedashed_frag:T2,meshbasic_vert:E2,meshbasic_frag:A2,meshlambert_vert:C2,meshlambert_frag:R2,meshmatcap_vert:L2,meshmatcap_frag:P2,meshnormal_vert:I2,meshnormal_frag:D2,meshphong_vert:N2,meshphong_frag:O2,meshphysical_vert:U2,meshphysical_frag:F2,meshtoon_vert:k2,meshtoon_frag:z2,points_vert:B2,points_frag:V2,shadow_vert:G2,shadow_frag:H2,sprite_vert:W2,sprite_frag:j2},we={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new vn},uv2Transform:{value:new vn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vn}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vn}}},Di={basic:{uniforms:gn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:gn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:gn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:gn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:gn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:gn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:gn([we.points,we.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:gn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:gn([we.common,we.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:gn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:gn([we.sprite,we.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new vn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:gn([we.common,we.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:gn([we.lights,we.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Di.physical={uniforms:gn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Be(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Sc={r:0,b:0,g:0};function X2(i,e,t,n,s,r,o){const a=new Pe(0);let l=r===!0?0:1,c,u,f=null,h=0,p=null;function g(m,_){let x=!1,v=_.isScene===!0?_.background:null;v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v));const y=i.xr,M=y.getSession&&y.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?d(a,l):v&&v.isColor&&(d(v,1),x=!0),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ql)?(u===void 0&&(u=new ln(new ba(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:sa(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=v.encoding!==it,(f!==v||h!==v.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ln(new yf(2,2),new Vi({name:"BackgroundMaterial",uniforms:sa(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=v.encoding!==it,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function d(m,_){m.getRGB(Sc,ux(i)),n.buffers.color.setClear(Sc.r,Sc.g,Sc.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),l=_,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,d(a,l)},render:g}}function Y2(i,e,t,n){const s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function f(D,O,$,j,V){let re=!1;if(o){const he=d(j,$,O);c!==he&&(c=he,p(c.object)),re=_(D,j,$,V),re&&x(D,j,$,V)}else{const he=O.wireframe===!0;(c.geometry!==j.id||c.program!==$.id||c.wireframe!==he)&&(c.geometry=j.id,c.program=$.id,c.wireframe=he,re=!0)}V!==null&&t.update(V,34963),(re||u)&&(u=!1,b(D,O,$,j),V!==null&&i.bindBuffer(34963,t.get(V).buffer))}function h(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function d(D,O,$){const j=$.wireframe===!0;let V=a[D.id];V===void 0&&(V={},a[D.id]=V);let re=V[O.id];re===void 0&&(re={},V[O.id]=re);let he=re[j];return he===void 0&&(he=m(h()),re[j]=he),he}function m(D){const O=[],$=[],j=[];for(let V=0;V<s;V++)O[V]=0,$[V]=0,j[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:$,attributeDivisors:j,object:D,attributes:{},index:null}}function _(D,O,$,j){const V=c.attributes,re=O.attributes;let he=0;const be=$.getAttributes();for(const X in be)if(be[X].location>=0){const pe=V[X];let H=re[X];if(H===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(H=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(H=D.instanceColor)),pe===void 0||pe.attribute!==H||H&&pe.data!==H.data)return!0;he++}return c.attributesNum!==he||c.index!==j}function x(D,O,$,j){const V={},re=O.attributes;let he=0;const be=$.getAttributes();for(const X in be)if(be[X].location>=0){let pe=re[X];pe===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(pe=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(pe=D.instanceColor));const H={};H.attribute=pe,pe&&pe.data&&(H.data=pe.data),V[X]=H,he++}c.attributes=V,c.attributesNum=he,c.index=j}function v(){const D=c.newAttributes;for(let O=0,$=D.length;O<$;O++)D[O]=0}function y(D){M(D,0)}function M(D,O){const $=c.newAttributes,j=c.enabledAttributes,V=c.attributeDivisors;$[D]=1,j[D]===0&&(i.enableVertexAttribArray(D),j[D]=1),V[D]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,O),V[D]=O)}function E(){const D=c.newAttributes,O=c.enabledAttributes;for(let $=0,j=O.length;$<j;$++)O[$]!==D[$]&&(i.disableVertexAttribArray($),O[$]=0)}function A(D,O,$,j,V,re){n.isWebGL2===!0&&($===5124||$===5125)?i.vertexAttribIPointer(D,O,$,V,re):i.vertexAttribPointer(D,O,$,j,V,re)}function b(D,O,$,j){if(n.isWebGL2===!1&&(D.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const V=j.attributes,re=$.getAttributes(),he=O.defaultAttributeValues;for(const be in re){const X=re[be];if(X.location>=0){let ue=V[be];if(ue===void 0&&(be==="instanceMatrix"&&D.instanceMatrix&&(ue=D.instanceMatrix),be==="instanceColor"&&D.instanceColor&&(ue=D.instanceColor)),ue!==void 0){const pe=ue.normalized,H=ue.itemSize,Se=t.get(ue);if(Se===void 0)continue;const B=Se.buffer,Q=Se.type,Z=Se.bytesPerElement;if(ue.isInterleavedBufferAttribute){const oe=ue.data,Te=oe.stride,C=ue.offset;if(oe.isInstancedInterleavedBuffer){for(let L=0;L<X.locationSize;L++)M(X.location+L,oe.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let L=0;L<X.locationSize;L++)y(X.location+L);i.bindBuffer(34962,B);for(let L=0;L<X.locationSize;L++)A(X.location+L,H/X.locationSize,Q,pe,Te*Z,(C+H/X.locationSize*L)*Z)}else{if(ue.isInstancedBufferAttribute){for(let oe=0;oe<X.locationSize;oe++)M(X.location+oe,ue.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let oe=0;oe<X.locationSize;oe++)y(X.location+oe);i.bindBuffer(34962,B);for(let oe=0;oe<X.locationSize;oe++)A(X.location+oe,H/X.locationSize,Q,pe,H*Z,H/X.locationSize*oe*Z)}}else if(he!==void 0){const pe=he[be];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(X.location,pe);break;case 3:i.vertexAttrib3fv(X.location,pe);break;case 4:i.vertexAttrib4fv(X.location,pe);break;default:i.vertexAttrib1fv(X.location,pe)}}}}E()}function T(){q();for(const D in a){const O=a[D];for(const $ in O){const j=O[$];for(const V in j)g(j[V].object),delete j[V];delete O[$]}delete a[D]}}function P(D){if(a[D.id]===void 0)return;const O=a[D.id];for(const $ in O){const j=O[$];for(const V in j)g(j[V].object),delete j[V];delete O[$]}delete a[D.id]}function I(D){for(const O in a){const $=a[O];if($[D.id]===void 0)continue;const j=$[D.id];for(const V in j)g(j[V].object),delete j[V];delete $[D.id]}}function q(){N(),u=!0,c!==l&&(c=l,p(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:q,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:y,disableUnusedAttributes:E}}function q2(i,e,t,n){const s=n.isWebGL2;let r;function o(c){r=c}function a(c,u){i.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let h,p;if(s)h=i,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](r,c,u,f),t.update(u,r,f)}this.setMode=o,this.render=a,this.renderInstances=l}function $2(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(34930),h=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),d=i.getParameter(34921),m=i.getParameter(36347),_=i.getParameter(36348),x=i.getParameter(36349),v=h>0,y=o||e.has("OES_texture_float"),M=v&&y,E=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:E}}function K2(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new gr,a=new vn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||s;return s=h,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,d=f.clipIntersection,m=f.clipShadows,_=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:n,v=x*4;let y=_.clippingState||null;l.value=y,y=u(g,h,v,p);for(let M=0;M!==v;++M)y[M]=t[M];_.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,g){const d=f!==null?f.length:0;let m=null;if(d!==0){if(m=l.value,g!==!0||m===null){const _=p+d*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<_)&&(m=new Float32Array(_));for(let v=0,y=p;v!==d;++v,y+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}}function Z2(i){let e=new WeakMap;function t(o,a){return a===au?o.mapping=ea:a===lu&&(o.mapping=ta),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===au||a===lu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new uE(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class $l extends wp{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _o=4,Wg=[.125,.215,.35,.446,.526,.582],Mr=20,gh=new $l,jg=new Pe;let _h=null;const _r=(1+Math.sqrt(5))/2,oo=1/_r,Xg=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,_r,oo),new z(0,_r,-oo),new z(oo,0,_r),new z(-oo,0,_r),new z(_r,oo,0),new z(-_r,oo,0)];class sd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){_h=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$g(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_h),e.scissorTest=!1,wc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ea||e.mapping===ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_h=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:as,format:ei,encoding:Js,depthBuffer:!1},s=Yg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yg(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=J2(r)),this._blurMaterial=Q2(r,e,t)}return s}_compileMaterial(e){const t=new ln(this._lodPlanes[0],e);this._renderer.compile(t,gh)}_sceneToCubeUV(e,t,n,s){const a=new sn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(jg),u.toneMapping=cs,u.autoClear=!1;const p=new wr({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),g=new ln(new ba,p);let d=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,d=!0):(p.color.copy(jg),d=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):x===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const v=this._cubeSize;wc(s,x*v,_>2?v:0,v,v),u.setRenderTarget(s),d&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ea||e.mapping===ta;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$g()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qg());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ln(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;wc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,gh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Xg[(s-1)%Xg.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ln(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Mr-1),d=r/g,m=isFinite(r)?1+Math.floor(u*d):Mr;m>Mr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mr}`);const _=[];let x=0;for(let A=0;A<Mr;++A){const b=A/d,T=Math.exp(-b*b/2);_.push(T),A===0?x+=T:A<m&&(x+=2*T)}for(let A=0;A<_.length;A++)_[A]=_[A]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const y=this._sizeLods[s],M=3*y*(s>v-_o?s-v+_o:0),E=4*(this._cubeSize-y);wc(t,M,E,3*y,2*y),l.setRenderTarget(t),l.render(f,gh)}}function J2(i){const e=[],t=[],n=[];let s=i;const r=i-_o+1+Wg.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-_o?l=Wg[o-i+_o-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,d=3,m=2,_=1,x=new Float32Array(d*g*p),v=new Float32Array(m*g*p),y=new Float32Array(_*g*p);for(let E=0;E<p;E++){const A=E%3*2/3-1,b=E>2?0:-1,T=[A,b,0,A+2/3,b,0,A+2/3,b+1,0,A,b,0,A+2/3,b+1,0,A,b+1,0];x.set(T,d*g*E),v.set(h,m*g*E);const P=[E,E,E,E,E,E];y.set(P,_*g*E)}const M=new Yn;M.setAttribute("position",new yn(x,d)),M.setAttribute("uv",new yn(v,m)),M.setAttribute("faceIndex",new yn(y,_)),e.push(M),s>_o&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Yg(i,e,t){const n=new Bi(i,e,t);return n.texture.mapping=ql,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wc(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Q2(i,e,t){const n=new Float32Array(Mr),s=new z(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tp(),fragmentShader:`

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
		`,blending:Xs,depthTest:!1,depthWrite:!1})}function qg(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tp(),fragmentShader:`

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
		`,blending:Xs,depthTest:!1,depthWrite:!1})}function $g(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xs,depthTest:!1,depthWrite:!1})}function Tp(){return`

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
	`}function eC(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===au||l===lu,u=l===ea||l===ta;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new sd(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new sd(i));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function tC(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function nC(i,e,t,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const p=f.morphAttributes;for(const g in p){const d=p[g];for(let m=0,_=d.length;m<_;m++)e.update(d[m],34962)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let d=0;if(p!==null){const x=p.array;d=p.version;for(let v=0,y=x.length;v<y;v+=3){const M=x[v+0],E=x[v+1],A=x[v+2];h.push(M,E,E,A,A,M)}}else{const x=g.array;d=g.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const M=v+0,E=v+1,A=v+2;h.push(M,E,E,A,A,M)}}const m=new(ix(h)?cx:lx)(h,1);m.version=d;const _=r.get(f);_&&e.remove(_),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function iC(i,e,t,n){const s=n.isWebGL2;let r;function o(h){r=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){i.drawElements(r,p,a,h*l),t.update(p,r,1)}function f(h,p,g){if(g===0)return;let d,m;if(s)d=i,m="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,p,a,h*l,g),t.update(p,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function sC(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function rC(i,e){return i[0]-e[0]}function oC(i,e){return Math.abs(e[1])-Math.abs(i[1])}function aC(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new ct,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let d=r.get(u);if(d===void 0||d.count!==g){let D=function(){q.dispose(),r.delete(u),u.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let b=0;x===!0&&(b=1),v===!0&&(b=2),y===!0&&(b=3);let T=u.attributes.position.count*b,P=1;T>e.maxTextureSize&&(P=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const I=new Float32Array(T*P*4*g),q=new ox(I,T,P,g);q.type=mi,q.needsUpdate=!0;const N=b*4;for(let O=0;O<g;O++){const $=M[O],j=E[O],V=A[O],re=T*P*4*O;for(let he=0;he<$.count;he++){const be=he*N;x===!0&&(o.fromBufferAttribute($,he),I[re+be+0]=o.x,I[re+be+1]=o.y,I[re+be+2]=o.z,I[re+be+3]=0),v===!0&&(o.fromBufferAttribute(j,he),I[re+be+4]=o.x,I[re+be+5]=o.y,I[re+be+6]=o.z,I[re+be+7]=0),y===!0&&(o.fromBufferAttribute(V,he),I[re+be+8]=o.x,I[re+be+9]=o.y,I[re+be+10]=o.z,I[re+be+11]=V.itemSize===4?o.w:1)}}d={count:g,texture:q,size:new Be(T,P)},r.set(u,d),u.addEventListener("dispose",D)}let m=0;for(let x=0;x<h.length;x++)m+=h[x];const _=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",_),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}else{const p=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==p){g=[];for(let v=0;v<p;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<p;v++){const y=g[v];y[0]=v,y[1]=h[v]}g.sort(oC);for(let v=0;v<8;v++)v<p&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(rC);const d=u.morphAttributes.position,m=u.morphAttributes.normal;let _=0;for(let v=0;v<8;v++){const y=a[v],M=y[0],E=y[1];M!==Number.MAX_SAFE_INTEGER&&E?(d&&u.getAttribute("morphTarget"+v)!==d[M]&&u.setAttribute("morphTarget"+v,d[M]),m&&u.getAttribute("morphNormal"+v)!==m[M]&&u.setAttribute("morphNormal"+v,m[M]),s[v]=E,_+=E):(d&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}const x=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function lC(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const dx=new en,px=new ox,mx=new qT,gx=new fx,Kg=[],Zg=[],Jg=new Float32Array(16),Qg=new Float32Array(9),e0=new Float32Array(4);function Ma(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Kg[s];if(r===void 0&&(r=new Float32Array(s),Kg[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function bf(i,e){let t=Zg[e];t===void 0&&(t=new Int32Array(e),Zg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function cC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function uC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function fC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function hC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function dC(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Bt(t,n))return;e0.set(n),i.uniformMatrix2fv(this.addr,!1,e0),Vt(t,n)}}function pC(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Bt(t,n))return;Qg.set(n),i.uniformMatrix3fv(this.addr,!1,Qg),Vt(t,n)}}function mC(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Bt(t,n))return;Jg.set(n),i.uniformMatrix4fv(this.addr,!1,Jg),Vt(t,n)}}function gC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _C(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function vC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function xC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function yC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function bC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function MC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function SC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function wC(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||dx,s)}function TC(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||mx,s)}function EC(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||gx,s)}function AC(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||px,s)}function CC(i){switch(i){case 5126:return cC;case 35664:return uC;case 35665:return fC;case 35666:return hC;case 35674:return dC;case 35675:return pC;case 35676:return mC;case 5124:case 35670:return gC;case 35667:case 35671:return _C;case 35668:case 35672:return vC;case 35669:case 35673:return xC;case 5125:return yC;case 36294:return bC;case 36295:return MC;case 36296:return SC;case 35678:case 36198:case 36298:case 36306:case 35682:return wC;case 35679:case 36299:case 36307:return TC;case 35680:case 36300:case 36308:case 36293:return EC;case 36289:case 36303:case 36311:case 36292:return AC}}function RC(i,e){i.uniform1fv(this.addr,e)}function LC(i,e){const t=Ma(e,this.size,2);i.uniform2fv(this.addr,t)}function PC(i,e){const t=Ma(e,this.size,3);i.uniform3fv(this.addr,t)}function IC(i,e){const t=Ma(e,this.size,4);i.uniform4fv(this.addr,t)}function DC(i,e){const t=Ma(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function NC(i,e){const t=Ma(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function OC(i,e){const t=Ma(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function UC(i,e){i.uniform1iv(this.addr,e)}function FC(i,e){i.uniform2iv(this.addr,e)}function kC(i,e){i.uniform3iv(this.addr,e)}function zC(i,e){i.uniform4iv(this.addr,e)}function BC(i,e){i.uniform1uiv(this.addr,e)}function VC(i,e){i.uniform2uiv(this.addr,e)}function GC(i,e){i.uniform3uiv(this.addr,e)}function HC(i,e){i.uniform4uiv(this.addr,e)}function WC(i,e,t){const n=this.cache,s=e.length,r=bf(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||dx,r[o])}function jC(i,e,t){const n=this.cache,s=e.length,r=bf(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||mx,r[o])}function XC(i,e,t){const n=this.cache,s=e.length,r=bf(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||gx,r[o])}function YC(i,e,t){const n=this.cache,s=e.length,r=bf(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||px,r[o])}function qC(i){switch(i){case 5126:return RC;case 35664:return LC;case 35665:return PC;case 35666:return IC;case 35674:return DC;case 35675:return NC;case 35676:return OC;case 5124:case 35670:return UC;case 35667:case 35671:return FC;case 35668:case 35672:return kC;case 35669:case 35673:return zC;case 5125:return BC;case 36294:return VC;case 36295:return GC;case 36296:return HC;case 35678:case 36198:case 36298:case 36306:case 35682:return WC;case 35679:case 36299:case 36307:return jC;case 35680:case 36300:case 36308:case 36293:return XC;case 36289:case 36303:case 36311:case 36292:return YC}}class $C{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=CC(t.type)}}class KC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=qC(t.type)}}class ZC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const vh=/(\w+)(\])?(\[|\.)?/g;function t0(i,e){i.seq.push(e),i.map[e.id]=e}function JC(i,e,t){const n=i.name,s=n.length;for(vh.lastIndex=0;;){const r=vh.exec(n),o=vh.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){t0(t,c===void 0?new $C(a,i,e):new KC(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new ZC(a),t0(t,f)),t=f}}}class jc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);JC(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function n0(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let QC=0;function eR(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function tR(i){switch(i){case Js:return["Linear","( value )"];case it:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function i0(i,e,t){const n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+eR(i.getShaderSource(e),o)}else return s}function nR(i,e){const t=tR(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function iR(i,e){let t;switch(e){case Jw:t="Linear";break;case Qw:t="Reinhard";break;case eT:t="OptimizedCineon";break;case tT:t="ACESFilmic";break;case nT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function sR(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ka).join(`
`)}function rR(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function oR(i,e){const t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ka(i){return i!==""}function s0(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function r0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aR=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(i){return i.replace(aR,lR)}function lR(i,e){const t=Ge[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return rd(t)}const cR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function o0(i){return i.replace(cR,uR)}function uR(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function a0(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fR(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xv?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lw?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$a&&(e="SHADOWMAP_TYPE_VSM"),e}function hR(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ea:case ta:e="ENVMAP_TYPE_CUBE";break;case ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dR(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ta:e="ENVMAP_MODE_REFRACTION";break}return e}function pR(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $v:e="ENVMAP_BLENDING_MULTIPLY";break;case Kw:e="ENVMAP_BLENDING_MIX";break;case Zw:e="ENVMAP_BLENDING_ADD";break}return e}function mR(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function gR(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=fR(t),c=hR(t),u=dR(t),f=pR(t),h=mR(t),p=t.isWebGL2?"":sR(t),g=rR(r),d=s.createProgram();let m,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Ka).join(`
`),m.length>0&&(m+=`
`),_=[p,g].filter(Ka).join(`
`),_.length>0&&(_+=`
`)):(m=[a0(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),_=[p,a0(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cs?"#define TONE_MAPPING":"",t.toneMapping!==cs?Ge.tonemapping_pars_fragment:"",t.toneMapping!==cs?iR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.encodings_pars_fragment,nR("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ka).join(`
`)),o=rd(o),o=s0(o,t),o=r0(o,t),a=rd(a),a=s0(a,t),a=r0(a,t),o=o0(o),a=o0(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Pg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=x+m+o,y=x+_+a,M=n0(s,35633,v),E=n0(s,35632,y);if(s.attachShader(d,M),s.attachShader(d,E),t.index0AttributeName!==void 0?s.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d),i.debug.checkShaderErrors){const T=s.getProgramInfoLog(d).trim(),P=s.getShaderInfoLog(M).trim(),I=s.getShaderInfoLog(E).trim();let q=!0,N=!0;if(s.getProgramParameter(d,35714)===!1){q=!1;const D=i0(s,M,"vertex"),O=i0(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,35715)+`

Program Info Log: `+T+`
`+D+`
`+O)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(P===""||I==="")&&(N=!1);N&&(this.diagnostics={runnable:q,programLog:T,vertexShader:{log:P,prefix:m},fragmentShader:{log:I,prefix:_}})}s.deleteShader(M),s.deleteShader(E);let A;this.getUniforms=function(){return A===void 0&&(A=new jc(s,d)),A};let b;return this.getAttributes=function(){return b===void 0&&(b=oR(s,d)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=QC++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=M,this.fragmentShader=E,this}let _R=0;class vR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xR(e),t.set(e,n)),n}}class xR{constructor(e){this.id=_R++,this.code=e,this.usedTimes=0}}function yR(i,e,t,n,s,r,o){const a=new Sp,l=new vR,c=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(b,T,P,I,q){const N=I.fog,D=q.geometry,O=b.isMeshStandardMaterial?I.environment:null,$=(b.isMeshStandardMaterial?t:e).get(b.envMap||O),j=$&&$.mapping===ql?$.image.height:null,V=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const re=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,he=re!==void 0?re.length:0;let be=0;D.morphAttributes.position!==void 0&&(be=1),D.morphAttributes.normal!==void 0&&(be=2),D.morphAttributes.color!==void 0&&(be=3);let X,ue,pe,H;if(V){const Te=Di[V];X=Te.vertexShader,ue=Te.fragmentShader}else X=b.vertexShader,ue=b.fragmentShader,l.update(b),pe=l.getVertexShaderID(b),H=l.getFragmentShaderID(b);const Se=i.getRenderTarget(),B=b.alphaTest>0,Q=b.clearcoat>0,Z=b.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:b.type,vertexShader:X,fragmentShader:ue,defines:b.defines,customVertexShaderID:pe,customFragmentShaderID:H,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,instancing:q.isInstancedMesh===!0,instancingColor:q.isInstancedMesh===!0&&q.instanceColor!==null,supportsVertexTextures:h,outputEncoding:Se===null?i.outputEncoding:Se.isXRRenderTarget===!0?Se.texture.encoding:Js,map:!!b.map,matcap:!!b.matcap,envMap:!!$,envMapMode:$&&$.mapping,envMapCubeUVHeight:j,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===TT,tangentSpaceNormalMap:b.normalMapType===bp,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===it,clearcoat:Q,clearcoatMap:Q&&!!b.clearcoatMap,clearcoatRoughnessMap:Q&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:Q&&!!b.clearcoatNormalMap,iridescence:Z,iridescenceMap:Z&&!!b.iridescenceMap,iridescenceThicknessMap:Z&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===Co,alphaMap:!!b.alphaMap,alphaTest:B,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!D.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!N,useFog:b.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:f,skinning:q.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:be,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:b.toneMapped?i.toneMapping:cs,useLegacyLights:i.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===os,flipSided:b.side===Gn,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function m(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)T.push(P),T.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(_(T,b),x(T,b),T.push(i.outputEncoding)),T.push(b.customProgramCacheKey),T.join()}function _(b,T){b.push(T.precision),b.push(T.outputEncoding),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.combine),b.push(T.vertexUvs),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function x(b,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),b.push(a.mask)}function v(b){const T=g[b.type];let P;if(T){const I=Di[T];P=oE.clone(I.uniforms)}else P=b.uniforms;return P}function y(b,T){let P;for(let I=0,q=c.length;I<q;I++){const N=c[I];if(N.cacheKey===T){P=N,++P.usedTimes;break}}return P===void 0&&(P=new gR(i,T,b,r),c.push(P)),P}function M(b){if(--b.usedTimes===0){const T=c.indexOf(b);c[T]=c[c.length-1],c.pop(),b.destroy()}}function E(b){l.remove(b)}function A(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:v,acquireProgram:y,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:A}}function bR(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function MR(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function l0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function c0(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,h,p,g,d,m){let _=i[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:d,group:m},i[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=p,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=d,_.group=m),e++,_}function a(f,h,p,g,d,m){const _=o(f,h,p,g,d,m);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):t.push(_)}function l(f,h,p,g,d,m){const _=o(f,h,p,g,d,m);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||MR),n.length>1&&n.sort(h||l0),s.length>1&&s.sort(h||l0)}function u(){for(let f=e,h=i.length;f<h;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function SR(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new c0,i.set(n,[o])):s>=r.length?(o=new c0,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function wR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Pe};break;case"SpotLight":t={position:new z,direction:new z,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function TR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ER=0;function AR(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function CR(i,e){const t=new wR,n=TR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new z);const r=new z,o=new We,a=new We;function l(u,f){let h=0,p=0,g=0;for(let I=0;I<9;I++)s.probe[I].set(0,0,0);let d=0,m=0,_=0,x=0,v=0,y=0,M=0,E=0,A=0,b=0;u.sort(AR);const T=f===!0?Math.PI:1;for(let I=0,q=u.length;I<q;I++){const N=u[I],D=N.color,O=N.intensity,$=N.distance,j=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=D.r*O*T,p+=D.g*O*T,g+=D.b*O*T;else if(N.isLightProbe)for(let V=0;V<9;V++)s.probe[V].addScaledVector(N.sh.coefficients[V],O);else if(N.isDirectionalLight){const V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*T),N.castShadow){const re=N.shadow,he=n.get(N);he.shadowBias=re.bias,he.shadowNormalBias=re.normalBias,he.shadowRadius=re.radius,he.shadowMapSize=re.mapSize,s.directionalShadow[d]=he,s.directionalShadowMap[d]=j,s.directionalShadowMatrix[d]=N.shadow.matrix,y++}s.directional[d]=V,d++}else if(N.isSpotLight){const V=t.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(D).multiplyScalar(O*T),V.distance=$,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,s.spot[_]=V;const re=N.shadow;if(N.map&&(s.spotLightMap[A]=N.map,A++,re.updateMatrices(N),N.castShadow&&b++),s.spotLightMatrix[_]=re.matrix,N.castShadow){const he=n.get(N);he.shadowBias=re.bias,he.shadowNormalBias=re.normalBias,he.shadowRadius=re.radius,he.shadowMapSize=re.mapSize,s.spotShadow[_]=he,s.spotShadowMap[_]=j,E++}_++}else if(N.isRectAreaLight){const V=t.get(N);V.color.copy(D).multiplyScalar(O),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),s.rectArea[x]=V,x++}else if(N.isPointLight){const V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*T),V.distance=N.distance,V.decay=N.decay,N.castShadow){const re=N.shadow,he=n.get(N);he.shadowBias=re.bias,he.shadowNormalBias=re.normalBias,he.shadowRadius=re.radius,he.shadowMapSize=re.mapSize,he.shadowCameraNear=re.camera.near,he.shadowCameraFar=re.camera.far,s.pointShadow[m]=he,s.pointShadowMap[m]=j,s.pointShadowMatrix[m]=N.shadow.matrix,M++}s.point[m]=V,m++}else if(N.isHemisphereLight){const V=t.get(N);V.skyColor.copy(N.color).multiplyScalar(O*T),V.groundColor.copy(N.groundColor).multiplyScalar(O*T),s.hemi[v]=V,v++}}x>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=we.LTC_FLOAT_1,s.rectAreaLTC2=we.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=we.LTC_HALF_1,s.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=p,s.ambient[2]=g;const P=s.hash;(P.directionalLength!==d||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==x||P.hemiLength!==v||P.numDirectionalShadows!==y||P.numPointShadows!==M||P.numSpotShadows!==E||P.numSpotMaps!==A)&&(s.directional.length=d,s.spot.length=_,s.rectArea.length=x,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=M,s.pointShadowMap.length=M,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=M,s.spotLightMatrix.length=E+A-b,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=b,P.directionalLength=d,P.pointLength=m,P.spotLength=_,P.rectAreaLength=x,P.hemiLength=v,P.numDirectionalShadows=y,P.numPointShadows=M,P.numSpotShadows=E,P.numSpotMaps=A,s.version=ER++)}function c(u,f){let h=0,p=0,g=0,d=0,m=0;const _=f.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const y=u[x];if(y.isDirectionalLight){const M=s.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),h++}else if(y.isSpotLight){const M=s.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const M=s.rectArea[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),a.identity(),o.copy(y.matrixWorld),o.premultiply(_),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),d++}else if(y.isPointLight){const M=s.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),p++}else if(y.isHemisphereLight){const M=s.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:s}}function u0(i,e){const t=new CR(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(f){n.push(f)}function a(f){s.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function RR(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new u0(i,e),t.set(r,[l])):o>=a.length?(l=new u0(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class LR extends yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ST,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PR extends yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const IR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DR=`uniform sampler2D shadow_pass;
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
}`;function NR(i,e,t){let n=new xf;const s=new Be,r=new Be,o=new ct,a=new LR({depthPacking:wT}),l=new PR,c={},u=t.maxTextureSize,f={[fs]:Gn,[Gn]:fs,[os]:os},h=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:IR,fragmentShader:DR}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Yn;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new ln(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xv,this.render=function(y,M,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const A=i.getRenderTarget(),b=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Xs),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let I=0,q=y.length;I<q;I++){const N=y[I],D=N.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);const O=D.getFrameExtents();if(s.multiply(O),r.copy(D.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/O.x),s.x=r.x*O.x,D.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/O.y),s.y=r.y*O.y,D.mapSize.y=r.y)),D.map===null){const j=this.type!==$a?{minFilter:Xt,magFilter:Xt}:{};D.map=new Bi(s.x,s.y,j),D.map.texture.name=N.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const $=D.getViewportCount();for(let j=0;j<$;j++){const V=D.getViewport(j);o.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),P.viewport(o),D.updateMatrices(N,j),n=D.getFrustum(),v(M,E,D.camera,N,this.type)}D.isPointLightShadow!==!0&&this.type===$a&&_(D,E),D.needsUpdate=!1}m.needsUpdate=!1,i.setRenderTarget(A,b,T)};function _(y,M){const E=e.update(d);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Bi(s.x,s.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(M,null,E,h,d,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(M,null,E,p,d,null)}function x(y,M,E,A,b,T){let P=null;const I=E.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(I!==void 0)P=I;else if(P=E.isPointLight===!0?l:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const q=P.uuid,N=M.uuid;let D=c[q];D===void 0&&(D={},c[q]=D);let O=D[N];O===void 0&&(O=P.clone(),D[N]=O),P=O}return P.visible=M.visible,P.wireframe=M.wireframe,T===$a?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:f[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.map=M.map,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(E.matrixWorld),P.nearDistance=A,P.farDistance=b),P}function v(y,M,E,A,b){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&b===$a)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,y.matrixWorld);const I=e.update(y),q=y.material;if(Array.isArray(q)){const N=I.groups;for(let D=0,O=N.length;D<O;D++){const $=N[D],j=q[$.materialIndex];if(j&&j.visible){const V=x(y,j,A,E.near,E.far,b);i.renderBufferDirect(E,null,I,V,y,$)}}}else if(q.visible){const N=x(y,q,A,E.near,E.far,b);i.renderBufferDirect(E,null,I,N,y,null)}}const P=y.children;for(let I=0,q=P.length;I<q;I++)v(P[I],M,E,A,b)}}function OR(i,e,t){const n=t.isWebGL2;function s(){let U=!1;const ae=new ct;let ge=null;const Ae=new ct(0,0,0,0);return{setMask:function(Le){ge!==Le&&!U&&(i.colorMask(Le,Le,Le,Le),ge=Le)},setLocked:function(Le){U=Le},setClear:function(Le,pt,Ht,fn,Si){Si===!0&&(Le*=fn,pt*=fn,Ht*=fn),ae.set(Le,pt,Ht,fn),Ae.equals(ae)===!1&&(i.clearColor(Le,pt,Ht,fn),Ae.copy(ae))},reset:function(){U=!1,ge=null,Ae.set(-1,0,0,0)}}}function r(){let U=!1,ae=null,ge=null,Ae=null;return{setTest:function(Le){Le?B(2929):Q(2929)},setMask:function(Le){ae!==Le&&!U&&(i.depthMask(Le),ae=Le)},setFunc:function(Le){if(ge!==Le){switch(Le){case Hw:i.depthFunc(512);break;case Ww:i.depthFunc(519);break;case jw:i.depthFunc(513);break;case Jh:i.depthFunc(515);break;case Xw:i.depthFunc(514);break;case Yw:i.depthFunc(518);break;case qw:i.depthFunc(516);break;case $w:i.depthFunc(517);break;default:i.depthFunc(515)}ge=Le}},setLocked:function(Le){U=Le},setClear:function(Le){Ae!==Le&&(i.clearDepth(Le),Ae=Le)},reset:function(){U=!1,ae=null,ge=null,Ae=null}}}function o(){let U=!1,ae=null,ge=null,Ae=null,Le=null,pt=null,Ht=null,fn=null,Si=null;return{setTest:function(Tt){U||(Tt?B(2960):Q(2960))},setMask:function(Tt){ae!==Tt&&!U&&(i.stencilMask(Tt),ae=Tt)},setFunc:function(Tt,qn,wi){(ge!==Tt||Ae!==qn||Le!==wi)&&(i.stencilFunc(Tt,qn,wi),ge=Tt,Ae=qn,Le=wi)},setOp:function(Tt,qn,wi){(pt!==Tt||Ht!==qn||fn!==wi)&&(i.stencilOp(Tt,qn,wi),pt=Tt,Ht=qn,fn=wi)},setLocked:function(Tt){U=Tt},setClear:function(Tt){Si!==Tt&&(i.clearStencil(Tt),Si=Tt)},reset:function(){U=!1,ae=null,ge=null,Ae=null,Le=null,pt=null,Ht=null,fn=null,Si=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,d=[],m=null,_=!1,x=null,v=null,y=null,M=null,E=null,A=null,b=null,T=!1,P=null,I=null,q=null,N=null,D=null;const O=i.getParameter(35661);let $=!1,j=0;const V=i.getParameter(7938);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),$=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),$=j>=2);let re=null,he={};const be=i.getParameter(3088),X=i.getParameter(2978),ue=new ct().fromArray(be),pe=new ct().fromArray(X);function H(U,ae,ge){const Ae=new Uint8Array(4),Le=i.createTexture();i.bindTexture(U,Le),i.texParameteri(U,10241,9728),i.texParameteri(U,10240,9728);for(let pt=0;pt<ge;pt++)i.texImage2D(ae+pt,0,6408,1,1,0,6408,5121,Ae);return Le}const Se={};Se[3553]=H(3553,3553,1),Se[34067]=H(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),B(2929),l.setFunc(Jh),te(!1),ce(ng),B(2884),k(Xs);function B(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Q(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Z(U,ae){return p[U]!==ae?(i.bindFramebuffer(U,ae),p[U]=ae,n&&(U===36009&&(p[36160]=ae),U===36160&&(p[36009]=ae)),!0):!1}function oe(U,ae){let ge=d,Ae=!1;if(U)if(ge=g.get(ae),ge===void 0&&(ge=[],g.set(ae,ge)),U.isWebGLMultipleRenderTargets){const Le=U.texture;if(ge.length!==Le.length||ge[0]!==36064){for(let pt=0,Ht=Le.length;pt<Ht;pt++)ge[pt]=36064+pt;ge.length=Le.length,Ae=!0}}else ge[0]!==36064&&(ge[0]=36064,Ae=!0);else ge[0]!==1029&&(ge[0]=1029,Ae=!0);Ae&&(t.isWebGL2?i.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function Te(U){return m!==U?(i.useProgram(U),m=U,!0):!1}const C={[fo]:32774,[Iw]:32778,[Dw]:32779};if(n)C[og]=32775,C[ag]=32776;else{const U=e.get("EXT_blend_minmax");U!==null&&(C[og]=U.MIN_EXT,C[ag]=U.MAX_EXT)}const L={[Nw]:0,[Ow]:1,[Uw]:768,[Yv]:770,[Gw]:776,[Bw]:774,[kw]:772,[Fw]:769,[qv]:771,[Vw]:775,[zw]:773};function k(U,ae,ge,Ae,Le,pt,Ht,fn){if(U===Xs){_===!0&&(Q(3042),_=!1);return}if(_===!1&&(B(3042),_=!0),U!==Pw){if(U!==x||fn!==T){if((v!==fo||E!==fo)&&(i.blendEquation(32774),v=fo,E=fo),fn)switch(U){case Co:i.blendFuncSeparate(1,771,1,771);break;case ig:i.blendFunc(1,1);break;case sg:i.blendFuncSeparate(0,769,0,1);break;case rg:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Co:i.blendFuncSeparate(770,771,1,771);break;case ig:i.blendFunc(770,1);break;case sg:i.blendFuncSeparate(0,769,0,1);break;case rg:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,M=null,A=null,b=null,x=U,T=fn}return}Le=Le||ae,pt=pt||ge,Ht=Ht||Ae,(ae!==v||Le!==E)&&(i.blendEquationSeparate(C[ae],C[Le]),v=ae,E=Le),(ge!==y||Ae!==M||pt!==A||Ht!==b)&&(i.blendFuncSeparate(L[ge],L[Ae],L[pt],L[Ht]),y=ge,M=Ae,A=pt,b=Ht),x=U,T=!1}function J(U,ae){U.side===os?Q(2884):B(2884);let ge=U.side===Gn;ae&&(ge=!ge),te(ge),U.blending===Co&&U.transparent===!1?k(Xs):k(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const Ae=U.stencilWrite;c.setTest(Ae),Ae&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),fe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?B(32926):Q(32926)}function te(U){P!==U&&(U?i.frontFace(2304):i.frontFace(2305),P=U)}function ce(U){U!==Cw?(B(2884),U!==I&&(U===ng?i.cullFace(1029):U===Rw?i.cullFace(1028):i.cullFace(1032))):Q(2884),I=U}function me(U){U!==q&&($&&i.lineWidth(U),q=U)}function fe(U,ae,ge){U?(B(32823),(N!==ae||D!==ge)&&(i.polygonOffset(ae,ge),N=ae,D=ge)):Q(32823)}function _e(U){U?B(3089):Q(3089)}function ee(U){U===void 0&&(U=33984+O-1),re!==U&&(i.activeTexture(U),re=U)}function w(U,ae,ge){ge===void 0&&(re===null?ge=33984+O-1:ge=re);let Ae=he[ge];Ae===void 0&&(Ae={type:void 0,texture:void 0},he[ge]=Ae),(Ae.type!==U||Ae.texture!==ae)&&(re!==ge&&(i.activeTexture(ge),re=ge),i.bindTexture(U,ae||Se[U]),Ae.type=U,Ae.texture=ae)}function S(){const U=he[re];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function F(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(U){ue.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ue.copy(U))}function Ee(U){pe.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),pe.copy(U))}function ke(U,ae){let ge=f.get(ae);ge===void 0&&(ge=new WeakMap,f.set(ae,ge));let Ae=ge.get(U);Ae===void 0&&(Ae=i.getUniformBlockIndex(ae,U.name),ge.set(U,Ae))}function ut(U,ae){const Ae=f.get(ae).get(U);u.get(ae)!==Ae&&(i.uniformBlockBinding(ae,Ae,U.__bindingPointIndex),u.set(ae,Ae))}function Gt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},re=null,he={},p={},g=new WeakMap,d=[],m=null,_=!1,x=null,v=null,y=null,M=null,E=null,A=null,b=null,T=!1,P=null,I=null,q=null,N=null,D=null,ue.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:B,disable:Q,bindFramebuffer:Z,drawBuffers:oe,useProgram:Te,setBlending:k,setMaterial:J,setFlipSided:te,setCullFace:ce,setLineWidth:me,setPolygonOffset:fe,setScissorTest:_e,activeTexture:ee,bindTexture:w,unbindTexture:S,compressedTexImage2D:F,compressedTexImage3D:K,texImage2D:Ce,texImage3D:De,updateUBOMapping:ke,uniformBlockBinding:ut,texStorage2D:se,texStorage3D:Ie,texSubImage2D:ie,texSubImage3D:de,compressedTexSubImage2D:xe,compressedTexSubImage3D:ye,scissor:Ne,viewport:Ee,reset:Gt}}function UR(i,e,t,n,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,f=s.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,S){return _?new OffscreenCanvas(w,S):Sl("canvas")}function v(w,S,F,K){let ie=1;if((w.width>K||w.height>K)&&(ie=K/Math.max(w.width,w.height)),ie<1||S===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const de=S?nx:Math.floor,xe=de(ie*w.width),ye=de(ie*w.height);d===void 0&&(d=x(xe,ye));const se=F?x(xe,ye):d;return se.width=xe,se.height=ye,se.getContext("2d").drawImage(w,0,0,xe,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+xe+"x"+ye+")."),se}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function y(w){return id(w.width)&&id(w.height)}function M(w){return a?!1:w.wrapS!==Tn||w.wrapT!==Tn||w.minFilter!==Xt&&w.minFilter!==Ut}function E(w,S){return w.generateMipmaps&&S&&w.minFilter!==Xt&&w.minFilter!==Ut}function A(w){i.generateMipmap(w)}function b(w,S,F,K,ie=!1){if(a===!1)return S;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let de=S;return S===6403&&(F===5126&&(de=33326),F===5131&&(de=33325),F===5121&&(de=33321)),S===33319&&(F===5126&&(de=33328),F===5131&&(de=33327),F===5121&&(de=33323)),S===6408&&(F===5126&&(de=34836),F===5131&&(de=34842),F===5121&&(de=K===it&&ie===!1?35907:32856),F===32819&&(de=32854),F===32820&&(de=32855)),(de===33325||de===33326||de===33327||de===33328||de===34842||de===34836)&&e.get("EXT_color_buffer_float"),de}function T(w,S,F){return E(w,F)===!0||w.isFramebufferTexture&&w.minFilter!==Xt&&w.minFilter!==Ut?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function P(w){return w===Xt||w===Qh||w===Wc?9728:9729}function I(w){const S=w.target;S.removeEventListener("dispose",I),N(S),S.isVideoTexture&&g.delete(S)}function q(w){const S=w.target;S.removeEventListener("dispose",q),O(S)}function N(w){const S=n.get(w);if(S.__webglInit===void 0)return;const F=w.source,K=m.get(F);if(K){const ie=K[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&D(w),Object.keys(K).length===0&&m.delete(F)}n.remove(w)}function D(w){const S=n.get(w);i.deleteTexture(S.__webglTexture);const F=w.source,K=m.get(F);delete K[S.__cacheKey],o.memory.textures--}function O(w){const S=w.texture,F=n.get(w),K=n.get(S);if(K.__webglTexture!==void 0&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)i.deleteFramebuffer(F.__webglFramebuffer[ie]),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[ie]);else{if(i.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ie=0;ie<F.__webglColorRenderbuffer.length;ie++)F.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[ie]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ie=0,de=S.length;ie<de;ie++){const xe=n.get(S[ie]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(S[ie])}n.remove(S),n.remove(w)}let $=0;function j(){$=0}function V(){const w=$;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),$+=1,w}function re(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.encoding),S.join()}function he(w,S){const F=n.get(w);if(w.isVideoTexture&&_e(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(F,w,S);return}}t.bindTexture(3553,F.__webglTexture,33984+S)}function be(w,S){const F=n.get(w);if(w.version>0&&F.__version!==w.version){Q(F,w,S);return}t.bindTexture(35866,F.__webglTexture,33984+S)}function X(w,S){const F=n.get(w);if(w.version>0&&F.__version!==w.version){Q(F,w,S);return}t.bindTexture(32879,F.__webglTexture,33984+S)}function ue(w,S){const F=n.get(w);if(w.version>0&&F.__version!==w.version){Z(F,w,S);return}t.bindTexture(34067,F.__webglTexture,33984+S)}const pe={[pi]:10497,[Tn]:33071,[cu]:33648},H={[Xt]:9728,[Qh]:9984,[Wc]:9986,[Ut]:9729,[Zv]:9985,[Zs]:9987};function Se(w,S,F){if(F?(i.texParameteri(w,10242,pe[S.wrapS]),i.texParameteri(w,10243,pe[S.wrapT]),(w===32879||w===35866)&&i.texParameteri(w,32882,pe[S.wrapR]),i.texParameteri(w,10240,H[S.magFilter]),i.texParameteri(w,10241,H[S.minFilter])):(i.texParameteri(w,10242,33071),i.texParameteri(w,10243,33071),(w===32879||w===35866)&&i.texParameteri(w,32882,33071),(S.wrapS!==Tn||S.wrapT!==Tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,10240,P(S.magFilter)),i.texParameteri(w,10241,P(S.minFilter)),S.minFilter!==Xt&&S.minFilter!==Ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Xt||S.minFilter!==Wc&&S.minFilter!==Zs||S.type===mi&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===as&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(w,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function B(w,S){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",I));const K=S.source;let ie=m.get(K);ie===void 0&&(ie={},m.set(K,ie));const de=re(S);if(de!==w.__cacheKey){ie[de]===void 0&&(ie[de]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ie[de].usedTimes++;const xe=ie[w.__cacheKey];xe!==void 0&&(ie[w.__cacheKey].usedTimes--,xe.usedTimes===0&&D(S)),w.__cacheKey=de,w.__webglTexture=ie[de].texture}return F}function Q(w,S,F){let K=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=35866),S.isData3DTexture&&(K=32879);const ie=B(w,S),de=S.source;t.bindTexture(K,w.__webglTexture,33984+F);const xe=n.get(de);if(de.version!==xe.__version||ie===!0){t.activeTexture(33984+F),i.pixelStorei(37440,S.flipY),i.pixelStorei(37441,S.premultiplyAlpha),i.pixelStorei(3317,S.unpackAlignment),i.pixelStorei(37443,0);const ye=M(S)&&y(S.image)===!1;let se=v(S.image,ye,!1,u);se=ee(S,se);const Ie=y(se)||a,Ce=r.convert(S.format,S.encoding);let De=r.convert(S.type),Ne=b(S.internalFormat,Ce,De,S.encoding,S.isVideoTexture);Se(K,S,Ie);let Ee;const ke=S.mipmaps,ut=a&&S.isVideoTexture!==!0,Gt=xe.__version===void 0||ie===!0,U=T(S,se,Ie);if(S.isDepthTexture)Ne=6402,a?S.type===mi?Ne=36012:S.type===Sr?Ne=33190:S.type===Ro?Ne=35056:Ne=33189:S.type===mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Or&&Ne===6402&&S.type!==Jv&&S.type!==Sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Sr,De=r.convert(S.type)),S.format===na&&Ne===6402&&(Ne=34041,S.type!==Ro&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ro,De=r.convert(S.type))),Gt&&(ut?t.texStorage2D(3553,1,Ne,se.width,se.height):t.texImage2D(3553,0,Ne,se.width,se.height,0,Ce,De,null));else if(S.isDataTexture)if(ke.length>0&&Ie){ut&&Gt&&t.texStorage2D(3553,U,Ne,ke[0].width,ke[0].height);for(let ae=0,ge=ke.length;ae<ge;ae++)Ee=ke[ae],ut?t.texSubImage2D(3553,ae,0,0,Ee.width,Ee.height,Ce,De,Ee.data):t.texImage2D(3553,ae,Ne,Ee.width,Ee.height,0,Ce,De,Ee.data);S.generateMipmaps=!1}else ut?(Gt&&t.texStorage2D(3553,U,Ne,se.width,se.height),t.texSubImage2D(3553,0,0,0,se.width,se.height,Ce,De,se.data)):t.texImage2D(3553,0,Ne,se.width,se.height,0,Ce,De,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ut&&Gt&&t.texStorage3D(35866,U,Ne,ke[0].width,ke[0].height,se.depth);for(let ae=0,ge=ke.length;ae<ge;ae++)Ee=ke[ae],S.format!==ei?Ce!==null?ut?t.compressedTexSubImage3D(35866,ae,0,0,0,Ee.width,Ee.height,se.depth,Ce,Ee.data,0,0):t.compressedTexImage3D(35866,ae,Ne,Ee.width,Ee.height,se.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?t.texSubImage3D(35866,ae,0,0,0,Ee.width,Ee.height,se.depth,Ce,De,Ee.data):t.texImage3D(35866,ae,Ne,Ee.width,Ee.height,se.depth,0,Ce,De,Ee.data)}else{ut&&Gt&&t.texStorage2D(3553,U,Ne,ke[0].width,ke[0].height);for(let ae=0,ge=ke.length;ae<ge;ae++)Ee=ke[ae],S.format!==ei?Ce!==null?ut?t.compressedTexSubImage2D(3553,ae,0,0,Ee.width,Ee.height,Ce,Ee.data):t.compressedTexImage2D(3553,ae,Ne,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?t.texSubImage2D(3553,ae,0,0,Ee.width,Ee.height,Ce,De,Ee.data):t.texImage2D(3553,ae,Ne,Ee.width,Ee.height,0,Ce,De,Ee.data)}else if(S.isDataArrayTexture)ut?(Gt&&t.texStorage3D(35866,U,Ne,se.width,se.height,se.depth),t.texSubImage3D(35866,0,0,0,0,se.width,se.height,se.depth,Ce,De,se.data)):t.texImage3D(35866,0,Ne,se.width,se.height,se.depth,0,Ce,De,se.data);else if(S.isData3DTexture)ut?(Gt&&t.texStorage3D(32879,U,Ne,se.width,se.height,se.depth),t.texSubImage3D(32879,0,0,0,0,se.width,se.height,se.depth,Ce,De,se.data)):t.texImage3D(32879,0,Ne,se.width,se.height,se.depth,0,Ce,De,se.data);else if(S.isFramebufferTexture){if(Gt)if(ut)t.texStorage2D(3553,U,Ne,se.width,se.height);else{let ae=se.width,ge=se.height;for(let Ae=0;Ae<U;Ae++)t.texImage2D(3553,Ae,Ne,ae,ge,0,Ce,De,null),ae>>=1,ge>>=1}}else if(ke.length>0&&Ie){ut&&Gt&&t.texStorage2D(3553,U,Ne,ke[0].width,ke[0].height);for(let ae=0,ge=ke.length;ae<ge;ae++)Ee=ke[ae],ut?t.texSubImage2D(3553,ae,0,0,Ce,De,Ee):t.texImage2D(3553,ae,Ne,Ce,De,Ee);S.generateMipmaps=!1}else ut?(Gt&&t.texStorage2D(3553,U,Ne,se.width,se.height),t.texSubImage2D(3553,0,0,0,Ce,De,se)):t.texImage2D(3553,0,Ne,Ce,De,se);E(S,Ie)&&A(K),xe.__version=de.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Z(w,S,F){if(S.image.length!==6)return;const K=B(w,S),ie=S.source;t.bindTexture(34067,w.__webglTexture,33984+F);const de=n.get(ie);if(ie.version!==de.__version||K===!0){t.activeTexture(33984+F),i.pixelStorei(37440,S.flipY),i.pixelStorei(37441,S.premultiplyAlpha),i.pixelStorei(3317,S.unpackAlignment),i.pixelStorei(37443,0);const xe=S.isCompressedTexture||S.image[0].isCompressedTexture,ye=S.image[0]&&S.image[0].isDataTexture,se=[];for(let ae=0;ae<6;ae++)!xe&&!ye?se[ae]=v(S.image[ae],!1,!0,c):se[ae]=ye?S.image[ae].image:S.image[ae],se[ae]=ee(S,se[ae]);const Ie=se[0],Ce=y(Ie)||a,De=r.convert(S.format,S.encoding),Ne=r.convert(S.type),Ee=b(S.internalFormat,De,Ne,S.encoding),ke=a&&S.isVideoTexture!==!0,ut=de.__version===void 0||K===!0;let Gt=T(S,Ie,Ce);Se(34067,S,Ce);let U;if(xe){ke&&ut&&t.texStorage2D(34067,Gt,Ee,Ie.width,Ie.height);for(let ae=0;ae<6;ae++){U=se[ae].mipmaps;for(let ge=0;ge<U.length;ge++){const Ae=U[ge];S.format!==ei?De!==null?ke?t.compressedTexSubImage2D(34069+ae,ge,0,0,Ae.width,Ae.height,De,Ae.data):t.compressedTexImage2D(34069+ae,ge,Ee,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(34069+ae,ge,0,0,Ae.width,Ae.height,De,Ne,Ae.data):t.texImage2D(34069+ae,ge,Ee,Ae.width,Ae.height,0,De,Ne,Ae.data)}}}else{U=S.mipmaps,ke&&ut&&(U.length>0&&Gt++,t.texStorage2D(34067,Gt,Ee,se[0].width,se[0].height));for(let ae=0;ae<6;ae++)if(ye){ke?t.texSubImage2D(34069+ae,0,0,0,se[ae].width,se[ae].height,De,Ne,se[ae].data):t.texImage2D(34069+ae,0,Ee,se[ae].width,se[ae].height,0,De,Ne,se[ae].data);for(let ge=0;ge<U.length;ge++){const Le=U[ge].image[ae].image;ke?t.texSubImage2D(34069+ae,ge+1,0,0,Le.width,Le.height,De,Ne,Le.data):t.texImage2D(34069+ae,ge+1,Ee,Le.width,Le.height,0,De,Ne,Le.data)}}else{ke?t.texSubImage2D(34069+ae,0,0,0,De,Ne,se[ae]):t.texImage2D(34069+ae,0,Ee,De,Ne,se[ae]);for(let ge=0;ge<U.length;ge++){const Ae=U[ge];ke?t.texSubImage2D(34069+ae,ge+1,0,0,De,Ne,Ae.image[ae]):t.texImage2D(34069+ae,ge+1,Ee,De,Ne,Ae.image[ae])}}}E(S,Ce)&&A(34067),de.__version=ie.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function oe(w,S,F,K,ie){const de=r.convert(F.format,F.encoding),xe=r.convert(F.type),ye=b(F.internalFormat,de,xe,F.encoding);n.get(S).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,ye,S.width,S.height,S.depth,0,de,xe,null):t.texImage2D(ie,0,ye,S.width,S.height,0,de,xe,null)),t.bindFramebuffer(36160,w),fe(S)?h.framebufferTexture2DMultisampleEXT(36160,K,ie,n.get(F).__webglTexture,0,me(S)):(ie===3553||ie>=34069&&ie<=34074)&&i.framebufferTexture2D(36160,K,ie,n.get(F).__webglTexture,0),t.bindFramebuffer(36160,null)}function Te(w,S,F){if(i.bindRenderbuffer(36161,w),S.depthBuffer&&!S.stencilBuffer){let K=33189;if(F||fe(S)){const ie=S.depthTexture;ie&&ie.isDepthTexture&&(ie.type===mi?K=36012:ie.type===Sr&&(K=33190));const de=me(S);fe(S)?h.renderbufferStorageMultisampleEXT(36161,de,K,S.width,S.height):i.renderbufferStorageMultisample(36161,de,K,S.width,S.height)}else i.renderbufferStorage(36161,K,S.width,S.height);i.framebufferRenderbuffer(36160,36096,36161,w)}else if(S.depthBuffer&&S.stencilBuffer){const K=me(S);F&&fe(S)===!1?i.renderbufferStorageMultisample(36161,K,35056,S.width,S.height):fe(S)?h.renderbufferStorageMultisampleEXT(36161,K,35056,S.width,S.height):i.renderbufferStorage(36161,34041,S.width,S.height),i.framebufferRenderbuffer(36160,33306,36161,w)}else{const K=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ie=0;ie<K.length;ie++){const de=K[ie],xe=r.convert(de.format,de.encoding),ye=r.convert(de.type),se=b(de.internalFormat,xe,ye,de.encoding),Ie=me(S);F&&fe(S)===!1?i.renderbufferStorageMultisample(36161,Ie,se,S.width,S.height):fe(S)?h.renderbufferStorageMultisampleEXT(36161,Ie,se,S.width,S.height):i.renderbufferStorage(36161,se,S.width,S.height)}}i.bindRenderbuffer(36161,null)}function C(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),he(S.depthTexture,0);const K=n.get(S.depthTexture).__webglTexture,ie=me(S);if(S.depthTexture.format===Or)fe(S)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,K,0,ie):i.framebufferTexture2D(36160,36096,3553,K,0);else if(S.depthTexture.format===na)fe(S)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,K,0,ie):i.framebufferTexture2D(36160,33306,3553,K,0);else throw new Error("Unknown depthTexture format")}function L(w){const S=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");C(S.__webglFramebuffer,w)}else if(F){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(36160,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]=i.createRenderbuffer(),Te(S.__webglDepthbuffer[K],w,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Te(S.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function k(w,S,F){const K=n.get(w);S!==void 0&&oe(K.__webglFramebuffer,w,w.texture,36064,3553),F!==void 0&&L(w)}function J(w){const S=w.texture,F=n.get(w),K=n.get(S);w.addEventListener("dispose",q),w.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=S.version,o.memory.textures++);const ie=w.isWebGLCubeRenderTarget===!0,de=w.isWebGLMultipleRenderTargets===!0,xe=y(w)||a;if(ie){F.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)F.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(F.__webglFramebuffer=i.createFramebuffer(),de)if(s.drawBuffers){const ye=w.texture;for(let se=0,Ie=ye.length;se<Ie;se++){const Ce=n.get(ye[se]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&fe(w)===!1){const ye=de?S:[S];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer);for(let se=0;se<ye.length;se++){const Ie=ye[se];F.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(36161,F.__webglColorRenderbuffer[se]);const Ce=r.convert(Ie.format,Ie.encoding),De=r.convert(Ie.type),Ne=b(Ie.internalFormat,Ce,De,Ie.encoding,w.isXRRenderTarget===!0),Ee=me(w);i.renderbufferStorageMultisample(36161,Ee,Ne,w.width,w.height),i.framebufferRenderbuffer(36160,36064+se,36161,F.__webglColorRenderbuffer[se])}i.bindRenderbuffer(36161,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,K.__webglTexture),Se(34067,S,xe);for(let ye=0;ye<6;ye++)oe(F.__webglFramebuffer[ye],w,S,36064,34069+ye);E(S,xe)&&A(34067),t.unbindTexture()}else if(de){const ye=w.texture;for(let se=0,Ie=ye.length;se<Ie;se++){const Ce=ye[se],De=n.get(Ce);t.bindTexture(3553,De.__webglTexture),Se(3553,Ce,xe),oe(F.__webglFramebuffer,w,Ce,36064+se,3553),E(Ce,xe)&&A(3553)}t.unbindTexture()}else{let ye=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?ye=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,K.__webglTexture),Se(ye,S,xe),oe(F.__webglFramebuffer,w,S,36064,ye),E(S,xe)&&A(ye),t.unbindTexture()}w.depthBuffer&&L(w)}function te(w){const S=y(w)||a,F=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let K=0,ie=F.length;K<ie;K++){const de=F[K];if(E(de,S)){const xe=w.isWebGLCubeRenderTarget?34067:3553,ye=n.get(de).__webglTexture;t.bindTexture(xe,ye),A(xe),t.unbindTexture()}}}function ce(w){if(a&&w.samples>0&&fe(w)===!1){const S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],F=w.width,K=w.height;let ie=16384;const de=[],xe=w.stencilBuffer?33306:36096,ye=n.get(w),se=w.isWebGLMultipleRenderTargets===!0;if(se)for(let Ie=0;Ie<S.length;Ie++)t.bindFramebuffer(36160,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Ie,36161,null),t.bindFramebuffer(36160,ye.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Ie,3553,null,0);t.bindFramebuffer(36008,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ye.__webglFramebuffer);for(let Ie=0;Ie<S.length;Ie++){de.push(36064+Ie),w.depthBuffer&&de.push(xe);const Ce=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Ce===!1&&(w.depthBuffer&&(ie|=256),w.stencilBuffer&&(ie|=1024)),se&&i.framebufferRenderbuffer(36008,36064,36161,ye.__webglColorRenderbuffer[Ie]),Ce===!0&&(i.invalidateFramebuffer(36008,[xe]),i.invalidateFramebuffer(36009,[xe])),se){const De=n.get(S[Ie]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,De,0)}i.blitFramebuffer(0,0,F,K,0,0,F,K,ie,9728),p&&i.invalidateFramebuffer(36008,de)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),se)for(let Ie=0;Ie<S.length;Ie++){t.bindFramebuffer(36160,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Ie,36161,ye.__webglColorRenderbuffer[Ie]);const Ce=n.get(S[Ie]).__webglTexture;t.bindFramebuffer(36160,ye.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Ie,3553,Ce,0)}t.bindFramebuffer(36009,ye.__webglMultisampledFramebuffer)}}function me(w){return Math.min(f,w.samples)}function fe(w){const S=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function _e(w){const S=o.render.frame;g.get(w)!==S&&(g.set(w,S),w.update())}function ee(w,S){const F=w.encoding,K=w.format,ie=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===nd||F!==Js&&(F===it?a===!1?e.has("EXT_sRGB")===!0&&K===ei?(w.format=nd,w.minFilter=Ut,w.generateMipmaps=!1):S=sx.sRGBToLinear(S):(K!==ei||ie!==zr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",F)),S}this.allocateTextureUnit=V,this.resetTextureUnits=j,this.setTexture2D=he,this.setTexture2DArray=be,this.setTexture3D=X,this.setTextureCube=ue,this.rebindTextures=k,this.setupRenderTarget=J,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=fe}function FR(i,e,t){const n=t.isWebGL2;function s(r,o=null){let a;if(r===zr)return 5121;if(r===oT)return 32819;if(r===aT)return 32820;if(r===iT)return 5120;if(r===sT)return 5122;if(r===Jv)return 5123;if(r===rT)return 5124;if(r===Sr)return 5125;if(r===mi)return 5126;if(r===as)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===lT)return 6406;if(r===ei)return 6408;if(r===cT)return 6409;if(r===uT)return 6410;if(r===Or)return 6402;if(r===na)return 34041;if(r===nd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===fT)return 6403;if(r===hT)return 36244;if(r===dT)return 33319;if(r===pT)return 33320;if(r===mT)return 36249;if(r===Wf||r===jf||r===Xf||r===Yf)if(o===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Wf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===jf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Wf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===jf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===lg||r===cg||r===ug||r===fg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===lg)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ug)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gT)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===hg||r===dg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===hg)return o===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===dg)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===pg||r===mg||r===gg||r===_g||r===vg||r===xg||r===yg||r===bg||r===Mg||r===Sg||r===wg||r===Tg||r===Eg||r===Ag)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===pg)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mg)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gg)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_g)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vg)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xg)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yg)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bg)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mg)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sg)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wg)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Tg)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Eg)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ag)return o===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===qf)return o===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===_T||r===Cg||r===Rg||r===Lg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===qf)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Cg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Rg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ro?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class kR extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ks extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zR={type:"move"};class xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const d of e.hand.values()){const m=t.getJointPose(d,n),_=this._getHandJoint(c,d);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zR)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ks;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ep extends en{constructor(e,t,n,s,r,o,a,l,c,u){if(u=u!==void 0?u:Or,u!==Or&&u!==na)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Or&&(n=Sr),n===void 0&&u===na&&(n=Ro),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1}}class BR extends Gr{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const d=t.getContextAttributes();let m=null,_=null;const x=[],v=[],y=new Set,M=new Map,E=new sn;E.layers.enable(1),E.viewport=new ct;const A=new sn;A.layers.enable(2),A.viewport=new ct;const b=[E,A],T=new kR;T.layers.enable(1),T.layers.enable(2);let P=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ue=x[X];return ue===void 0&&(ue=new xh,x[X]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(X){let ue=x[X];return ue===void 0&&(ue=new xh,x[X]=ue),ue.getGripSpace()},this.getHand=function(X){let ue=x[X];return ue===void 0&&(ue=new xh,x[X]=ue),ue.getHandSpace()};function q(X){const ue=v.indexOf(X.inputSource);if(ue===-1)return;const pe=x[ue];pe!==void 0&&pe.dispatchEvent({type:X.type,data:X.inputSource})}function N(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",D);for(let X=0;X<x.length;X++){const ue=v[X];ue!==null&&(v[X]=null,x[X].disconnect(ue))}P=null,I=null,e.setRenderTarget(m),p=null,h=null,f=null,s=null,_=null,be.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",N),s.addEventListener("inputsourceschange",D),d.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:s.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:p}),_=new Bi(p.framebufferWidth,p.framebufferHeight,{format:ei,type:zr,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let ue=null,pe=null,H=null;d.depth&&(H=d.stencil?35056:33190,ue=d.stencil?na:Or,pe=d.stencil?Ro:Sr);const Se={colorFormat:32856,depthFormat:H,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(Se),s.updateRenderState({layers:[h]}),_=new Bi(h.textureWidth,h.textureHeight,{format:ei,type:zr,depthTexture:new Ep(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const B=e.properties.get(_);B.__ignoreDepthValues=h.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),be.setContext(s),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(X){for(let ue=0;ue<X.removed.length;ue++){const pe=X.removed[ue],H=v.indexOf(pe);H>=0&&(v[H]=null,x[H].disconnect(pe))}for(let ue=0;ue<X.added.length;ue++){const pe=X.added[ue];let H=v.indexOf(pe);if(H===-1){for(let B=0;B<x.length;B++)if(B>=v.length){v.push(pe),H=B;break}else if(v[B]===null){v[B]=pe,H=B;break}if(H===-1)break}const Se=x[H];Se&&Se.connect(pe)}}const O=new z,$=new z;function j(X,ue,pe){O.setFromMatrixPosition(ue.matrixWorld),$.setFromMatrixPosition(pe.matrixWorld);const H=O.distanceTo($),Se=ue.projectionMatrix.elements,B=pe.projectionMatrix.elements,Q=Se[14]/(Se[10]-1),Z=Se[14]/(Se[10]+1),oe=(Se[9]+1)/Se[5],Te=(Se[9]-1)/Se[5],C=(Se[8]-1)/Se[0],L=(B[8]+1)/B[0],k=Q*C,J=Q*L,te=H/(-C+L),ce=te*-C;ue.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ce),X.translateZ(te),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const me=Q+te,fe=Z+te,_e=k-ce,ee=J+(H-ce),w=oe*Z/fe*me,S=Te*Z/fe*me;X.projectionMatrix.makePerspective(_e,ee,w,S,me,fe)}function V(X,ue){ue===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ue.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;T.near=A.near=E.near=X.near,T.far=A.far=E.far=X.far,(P!==T.near||I!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),P=T.near,I=T.far);const ue=X.parent,pe=T.cameras;V(T,ue);for(let Se=0;Se<pe.length;Se++)V(pe[Se],ue);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),X.matrix.copy(T.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale);const H=X.children;for(let Se=0,B=H.length;Se<B;Se++)H[Se].updateMatrixWorld(!0);pe.length===2?j(T,E,A):T.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.getPlanes=function(){return y};let re=null;function he(X,ue){if(u=ue.getViewerPose(c||o),g=ue,u!==null){const pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let H=!1;pe.length!==T.cameras.length&&(T.cameras.length=0,H=!0);for(let Se=0;Se<pe.length;Se++){const B=pe[Se];let Q=null;if(p!==null)Q=p.getViewport(B);else{const oe=f.getViewSubImage(h,B);Q=oe.viewport,Se===0&&(e.setRenderTargetTextures(_,oe.colorTexture,h.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(_))}let Z=b[Se];Z===void 0&&(Z=new sn,Z.layers.enable(Se),Z.viewport=new ct,b[Se]=Z),Z.matrix.fromArray(B.transform.matrix),Z.projectionMatrix.fromArray(B.projectionMatrix),Z.viewport.set(Q.x,Q.y,Q.width,Q.height),Se===0&&T.matrix.copy(Z.matrix),H===!0&&T.cameras.push(Z)}}for(let pe=0;pe<x.length;pe++){const H=v[pe],Se=x[pe];H!==null&&Se!==void 0&&Se.update(H,ue,c||o)}if(re&&re(X,ue),ue.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ue.detectedPlanes});let pe=null;for(const H of y)ue.detectedPlanes.has(H)||(pe===null&&(pe=[]),pe.push(H));if(pe!==null)for(const H of pe)y.delete(H),M.delete(H),n.dispatchEvent({type:"planeremoved",data:H});for(const H of ue.detectedPlanes)if(!y.has(H))y.add(H),M.set(H,ue.lastChangedTime),n.dispatchEvent({type:"planeadded",data:H});else{const Se=M.get(H);H.lastChangedTime>Se&&(M.set(H,H.lastChangedTime),n.dispatchEvent({type:"planechanged",data:H}))}}g=null}const be=new hx;be.setAnimationLoop(he),this.setAnimationLoop=function(X){re=X},this.dispose=function(){}}}function VR(i,e){function t(d,m){m.color.getRGB(d.fogColor.value,ux(i)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function n(d,m,_,x,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(d,m):m.isMeshToonMaterial?(s(d,m),u(d,m)):m.isMeshPhongMaterial?(s(d,m),c(d,m)):m.isMeshStandardMaterial?(s(d,m),f(d,m),m.isMeshPhysicalMaterial&&h(d,m,v)):m.isMeshMatcapMaterial?(s(d,m),p(d,m)):m.isMeshDepthMaterial?s(d,m):m.isMeshDistanceMaterial?(s(d,m),g(d,m)):m.isMeshNormalMaterial?s(d,m):m.isLineBasicMaterial?(r(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?a(d,m,_,x):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.bumpMap&&(d.bumpMap.value=m.bumpMap,d.bumpScale.value=m.bumpScale,m.side===Gn&&(d.bumpScale.value*=-1)),m.displacementMap&&(d.displacementMap.value=m.displacementMap,d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap),m.normalMap&&(d.normalMap.value=m.normalMap,d.normalScale.value.copy(m.normalScale),m.side===Gn&&d.normalScale.value.negate()),m.specularMap&&(d.specularMap.value=m.specularMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const y=i.useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*y}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity);let x;m.map?x=m.map:m.specularMap?x=m.specularMap:m.displacementMap?x=m.displacementMap:m.normalMap?x=m.normalMap:m.bumpMap?x=m.bumpMap:m.roughnessMap?x=m.roughnessMap:m.metalnessMap?x=m.metalnessMap:m.alphaMap?x=m.alphaMap:m.emissiveMap?x=m.emissiveMap:m.clearcoatMap?x=m.clearcoatMap:m.clearcoatNormalMap?x=m.clearcoatNormalMap:m.clearcoatRoughnessMap?x=m.clearcoatRoughnessMap:m.iridescenceMap?x=m.iridescenceMap:m.iridescenceThicknessMap?x=m.iridescenceThicknessMap:m.specularIntensityMap?x=m.specularIntensityMap:m.specularColorMap?x=m.specularColorMap:m.transmissionMap?x=m.transmissionMap:m.thicknessMap?x=m.thicknessMap:m.sheenColorMap?x=m.sheenColorMap:m.sheenRoughnessMap&&(x=m.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix));let v;m.aoMap?v=m.aoMap:m.lightMap&&(v=m.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uv2Transform.value.copy(v.matrix))}function r(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function a(d,m,_,x){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*_,d.scale.value=x*.5,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let v;m.map?v=m.map:m.alphaMap&&(v=m.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix))}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function f(d,m){d.roughness.value=m.roughness,d.metalness.value=m.metalness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function h(d,m,_){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),d.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Gn&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap)}function p(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){d.referencePosition.value.copy(m.referencePosition),d.nearDistance.value=m.nearDistance,d.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function GR(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function c(x,v){let y=s[x.id];y===void 0&&(g(x),y=u(x),s[x.id]=y,x.addEventListener("dispose",m));const M=v.program;n.updateUBOMapping(x,M);const E=e.render.frame;r[x.id]!==E&&(h(x),r[x.id]=E)}function u(x){const v=f();x.__bindingPointIndex=v;const y=i.createBuffer(),M=x.__size,E=x.usage;return i.bindBuffer(35345,y),i.bufferData(35345,M,E),i.bindBuffer(35345,null),i.bindBufferBase(35345,v,y),y}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=s[x.id],y=x.uniforms,M=x.__cache;i.bindBuffer(35345,v);for(let E=0,A=y.length;E<A;E++){const b=y[E];if(p(b,E,M)===!0){const T=b.__offset,P=Array.isArray(b.value)?b.value:[b.value];let I=0;for(let q=0;q<P.length;q++){const N=P[q],D=d(N);typeof N=="number"?(b.__data[0]=N,i.bufferSubData(35345,T+I,b.__data)):N.isMatrix3?(b.__data[0]=N.elements[0],b.__data[1]=N.elements[1],b.__data[2]=N.elements[2],b.__data[3]=N.elements[0],b.__data[4]=N.elements[3],b.__data[5]=N.elements[4],b.__data[6]=N.elements[5],b.__data[7]=N.elements[0],b.__data[8]=N.elements[6],b.__data[9]=N.elements[7],b.__data[10]=N.elements[8],b.__data[11]=N.elements[0]):(N.toArray(b.__data,I),I+=D.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,T,b.__data)}}i.bindBuffer(35345,null)}function p(x,v,y){const M=x.value;if(y[v]===void 0){if(typeof M=="number")y[v]=M;else{const E=Array.isArray(M)?M:[M],A=[];for(let b=0;b<E.length;b++)A.push(E[b].clone());y[v]=A}return!0}else if(typeof M=="number"){if(y[v]!==M)return y[v]=M,!0}else{const E=Array.isArray(y[v])?y[v]:[y[v]],A=Array.isArray(M)?M:[M];for(let b=0;b<E.length;b++){const T=E[b];if(T.equals(A[b])===!1)return T.copy(A[b]),!0}}return!1}function g(x){const v=x.uniforms;let y=0;const M=16;let E=0;for(let A=0,b=v.length;A<b;A++){const T=v[A],P={boundary:0,storage:0},I=Array.isArray(T.value)?T.value:[T.value];for(let q=0,N=I.length;q<N;q++){const D=I[q],O=d(D);P.boundary+=O.boundary,P.storage+=O.storage}if(T.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=y,A>0){E=y%M;const q=M-E;E!==0&&q-P.boundary<0&&(y+=M-E,T.__offset=y)}y+=P.storage}return E=y%M,E>0&&(y+=M-E),x.__size=y,x.__cache={},this}function d(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function _(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:_}}function HR(){const i=Sl("canvas");return i.style.display="block",i}function Ap(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:HR(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let f=null,h=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Js,this.useLegacyLights=!0,this.toneMapping=cs,this.toneMappingExposure=1;const d=this;let m=!1,_=0,x=0,v=null,y=-1,M=null;const E=new ct,A=new ct;let b=null,T=e.width,P=e.height,I=1,q=null,N=null;const D=new ct(0,0,T,P),O=new ct(0,0,T,P);let $=!1;const j=new xf;let V=!1,re=!1,he=null;const be=new We,X=new z,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return v===null?I:1}let H=t;function Se(R,Y){for(let ne=0;ne<R.length;ne++){const W=R[ne],le=e.getContext(W,Y);if(le!==null)return le}return null}try{const R={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xp}`),e.addEventListener("webglcontextlost",De,!1),e.addEventListener("webglcontextrestored",Ne,!1),e.addEventListener("webglcontextcreationerror",Ee,!1),H===null){const Y=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&Y.shift(),H=Se(Y,R),H===null)throw Se(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let B,Q,Z,oe,Te,C,L,k,J,te,ce,me,fe,_e,ee,w,S,F,K,ie,de,xe,ye,se;function Ie(){B=new tC(H),Q=new $2(H,B,i),B.init(Q),xe=new FR(H,B,Q),Z=new OR(H,B,Q),oe=new sC,Te=new bR,C=new UR(H,B,Z,Te,Q,xe,oe),L=new Z2(d),k=new eC(d),J=new dE(H,Q),ye=new Y2(H,B,J,Q),te=new nC(H,J,oe,ye),ce=new lC(H,te,J,oe),K=new aC(H,Q,C),w=new K2(Te),me=new yR(d,L,k,B,Q,ye,w),fe=new VR(d,Te),_e=new SR,ee=new RR(B,Q),F=new X2(d,L,k,Z,ce,u,o),S=new NR(d,ce,Q),se=new GR(H,oe,Q,Z),ie=new q2(H,B,oe,Q),de=new iC(H,B,oe,Q),oe.programs=me.programs,d.capabilities=Q,d.extensions=B,d.properties=Te,d.renderLists=_e,d.shadowMap=S,d.state=Z,d.info=oe}Ie();const Ce=new BR(d,H);this.xr=Ce,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=B.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=B.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(R){R!==void 0&&(I=R,this.setSize(T,P,!1))},this.getSize=function(R){return R.set(T,P)},this.setSize=function(R,Y,ne=!0){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=R,P=Y,e.width=Math.floor(R*I),e.height=Math.floor(Y*I),ne===!0&&(e.style.width=R+"px",e.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(T*I,P*I).floor()},this.setDrawingBufferSize=function(R,Y,ne){T=R,P=Y,I=ne,e.width=Math.floor(R*ne),e.height=Math.floor(Y*ne),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(D)},this.setViewport=function(R,Y,ne,W){R.isVector4?D.set(R.x,R.y,R.z,R.w):D.set(R,Y,ne,W),Z.viewport(E.copy(D).multiplyScalar(I).floor())},this.getScissor=function(R){return R.copy(O)},this.setScissor=function(R,Y,ne,W){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,Y,ne,W),Z.scissor(A.copy(O).multiplyScalar(I).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(R){Z.setScissorTest($=R)},this.setOpaqueSort=function(R){q=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor.apply(F,arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha.apply(F,arguments)},this.clear=function(R=!0,Y=!0,ne=!0){let W=0;R&&(W|=16384),Y&&(W|=256),ne&&(W|=1024),H.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",De,!1),e.removeEventListener("webglcontextrestored",Ne,!1),e.removeEventListener("webglcontextcreationerror",Ee,!1),_e.dispose(),ee.dispose(),Te.dispose(),L.dispose(),k.dispose(),ce.dispose(),ye.dispose(),se.dispose(),me.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",ge),Ce.removeEventListener("sessionend",Ae),he&&(he.dispose(),he=null),Le.stop()};function De(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const R=oe.autoReset,Y=S.enabled,ne=S.autoUpdate,W=S.needsUpdate,le=S.type;Ie(),oe.autoReset=R,S.enabled=Y,S.autoUpdate=ne,S.needsUpdate=W,S.type=le}function Ee(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ke(R){const Y=R.target;Y.removeEventListener("dispose",ke),ut(Y)}function ut(R){Gt(R),Te.remove(R)}function Gt(R){const Y=Te.get(R).programs;Y!==void 0&&(Y.forEach(function(ne){me.releaseProgram(ne)}),R.isShaderMaterial&&me.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ne,W,le,Oe){Y===null&&(Y=ue);const ze=le.isMesh&&le.matrixWorld.determinant()<0,je=Sb(R,Y,ne,W,le);Z.setMaterial(W,ze);let Xe=ne.index,nt=1;W.wireframe===!0&&(Xe=te.getWireframeAttribute(ne),nt=2);const $e=ne.drawRange,Ke=ne.attributes.position;let Rt=$e.start*nt,In=($e.start+$e.count)*nt;Oe!==null&&(Rt=Math.max(Rt,Oe.start*nt),In=Math.min(In,(Oe.start+Oe.count)*nt)),Xe!==null?(Rt=Math.max(Rt,0),In=Math.min(In,Xe.count)):Ke!=null&&(Rt=Math.max(Rt,0),In=Math.min(In,Ke.count));const Wi=In-Rt;if(Wi<0||Wi===1/0)return;ye.setup(le,W,je,ne,Xe);let rr,Lt=ie;if(Xe!==null&&(rr=J.get(Xe),Lt=de,Lt.setIndex(rr)),le.isMesh)W.wireframe===!0?(Z.setLineWidth(W.wireframeLinewidth*pe()),Lt.setMode(1)):Lt.setMode(4);else if(le.isLine){let Ze=W.linewidth;Ze===void 0&&(Ze=1),Z.setLineWidth(Ze*pe()),le.isLineSegments?Lt.setMode(1):le.isLineLoop?Lt.setMode(2):Lt.setMode(3)}else le.isPoints?Lt.setMode(0):le.isSprite&&Lt.setMode(4);if(le.isInstancedMesh)Lt.renderInstances(Rt,Wi,le.count);else if(ne.isInstancedBufferGeometry){const Ze=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Lf=Math.min(ne.instanceCount,Ze);Lt.renderInstances(Rt,Wi,Lf)}else Lt.render(Rt,Wi)},this.compile=function(R,Y){function ne(W,le,Oe){W.transparent===!0&&W.side===os&&W.forceSinglePass===!1?(W.side=Gn,W.needsUpdate=!0,qn(W,le,Oe),W.side=fs,W.needsUpdate=!0,qn(W,le,Oe),W.side=os):qn(W,le,Oe)}h=ee.get(R),h.init(),g.push(h),R.traverseVisible(function(W){W.isLight&&W.layers.test(Y.layers)&&(h.pushLight(W),W.castShadow&&h.pushShadow(W))}),h.setupLights(d.useLegacyLights),R.traverse(function(W){const le=W.material;if(le)if(Array.isArray(le))for(let Oe=0;Oe<le.length;Oe++){const ze=le[Oe];ne(ze,R,W)}else ne(le,R,W)}),g.pop(),h=null};let U=null;function ae(R){U&&U(R)}function ge(){Le.stop()}function Ae(){Le.start()}const Le=new hx;Le.setAnimationLoop(ae),typeof self<"u"&&Le.setContext(self),this.setAnimationLoop=function(R){U=R,Ce.setAnimationLoop(R),R===null?Le.stop():Le.start()},Ce.addEventListener("sessionstart",ge),Ce.addEventListener("sessionend",Ae),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(Y),Y=Ce.getCamera()),R.isScene===!0&&R.onBeforeRender(d,R,Y,v),h=ee.get(R,g.length),h.init(),g.push(h),be.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),j.setFromProjectionMatrix(be),re=this.localClippingEnabled,V=w.init(this.clippingPlanes,re),f=_e.get(R,p.length),f.init(),p.push(f),pt(R,Y,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort(q,N),V===!0&&w.beginShadows();const ne=h.state.shadowsArray;if(S.render(ne,R,Y),V===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),F.render(f,R),h.setupLights(d.useLegacyLights),Y.isArrayCamera){const W=Y.cameras;for(let le=0,Oe=W.length;le<Oe;le++){const ze=W[le];Ht(f,R,ze,ze.viewport)}}else Ht(f,R,Y);v!==null&&(C.updateMultisampleRenderTarget(v),C.updateRenderTargetMipmap(v)),R.isScene===!0&&R.onAfterRender(d,R,Y),ye.resetDefaultState(),y=-1,M=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,p.pop(),p.length>0?f=p[p.length-1]:f=null};function pt(R,Y,ne,W){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||j.intersectsSprite(R)){W&&X.setFromMatrixPosition(R.matrixWorld).applyMatrix4(be);const ze=ce.update(R),je=R.material;je.visible&&f.push(R,ze,je,ne,X.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==oe.render.frame&&(R.skeleton.update(),R.skeleton.frame=oe.render.frame),!R.frustumCulled||j.intersectsObject(R))){W&&X.setFromMatrixPosition(R.matrixWorld).applyMatrix4(be);const ze=ce.update(R),je=R.material;if(Array.isArray(je)){const Xe=ze.groups;for(let nt=0,$e=Xe.length;nt<$e;nt++){const Ke=Xe[nt],Rt=je[Ke.materialIndex];Rt&&Rt.visible&&f.push(R,ze,Rt,ne,X.z,Ke)}}else je.visible&&f.push(R,ze,je,ne,X.z,null)}}const Oe=R.children;for(let ze=0,je=Oe.length;ze<je;ze++)pt(Oe[ze],Y,ne,W)}function Ht(R,Y,ne,W){const le=R.opaque,Oe=R.transmissive,ze=R.transparent;h.setupLightsView(ne),V===!0&&w.setGlobalState(d.clippingPlanes,ne),Oe.length>0&&fn(le,Y,ne),W&&Z.viewport(E.copy(W)),le.length>0&&Si(le,Y,ne),Oe.length>0&&Si(Oe,Y,ne),ze.length>0&&Si(ze,Y,ne),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function fn(R,Y,ne){const W=Q.isWebGL2;he===null&&(he=new Bi(1024,1024,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")?as:zr,minFilter:Zs,samples:W&&r===!0?4:0}));const le=d.getRenderTarget();d.setRenderTarget(he),d.clear();const Oe=d.toneMapping;d.toneMapping=cs,Si(R,Y,ne),d.toneMapping=Oe,C.updateMultisampleRenderTarget(he),C.updateRenderTargetMipmap(he),d.setRenderTarget(le)}function Si(R,Y,ne){const W=Y.isScene===!0?Y.overrideMaterial:null;for(let le=0,Oe=R.length;le<Oe;le++){const ze=R[le],je=ze.object,Xe=ze.geometry,nt=W===null?ze.material:W,$e=ze.group;je.layers.test(ne.layers)&&Tt(je,Y,ne,Xe,nt,$e)}}function Tt(R,Y,ne,W,le,Oe){R.onBeforeRender(d,Y,ne,W,le,Oe),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),le.onBeforeRender(d,Y,ne,W,R,Oe),le.transparent===!0&&le.side===os&&le.forceSinglePass===!1?(le.side=Gn,le.needsUpdate=!0,d.renderBufferDirect(ne,Y,W,le,R,Oe),le.side=fs,le.needsUpdate=!0,d.renderBufferDirect(ne,Y,W,le,R,Oe),le.side=os):d.renderBufferDirect(ne,Y,W,le,R,Oe),R.onAfterRender(d,Y,ne,W,le,Oe)}function qn(R,Y,ne){Y.isScene!==!0&&(Y=ue);const W=Te.get(R),le=h.state.lights,Oe=h.state.shadowsArray,ze=le.state.version,je=me.getParameters(R,le.state,Oe,Y,ne),Xe=me.getProgramCacheKey(je);let nt=W.programs;W.environment=R.isMeshStandardMaterial?Y.environment:null,W.fog=Y.fog,W.envMap=(R.isMeshStandardMaterial?k:L).get(R.envMap||W.environment),nt===void 0&&(R.addEventListener("dispose",ke),nt=new Map,W.programs=nt);let $e=nt.get(Xe);if($e!==void 0){if(W.currentProgram===$e&&W.lightsStateVersion===ze)return wi(R,je),$e}else je.uniforms=me.getUniforms(R),R.onBuild(ne,je,d),R.onBeforeCompile(je,d),$e=me.acquireProgram(je,Xe),nt.set(Xe,$e),W.uniforms=je.uniforms;const Ke=W.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ke.clippingPlanes=w.uniform),wi(R,je),W.needsLights=Tb(R),W.lightsStateVersion=ze,W.needsLights&&(Ke.ambientLightColor.value=le.state.ambient,Ke.lightProbe.value=le.state.probe,Ke.directionalLights.value=le.state.directional,Ke.directionalLightShadows.value=le.state.directionalShadow,Ke.spotLights.value=le.state.spot,Ke.spotLightShadows.value=le.state.spotShadow,Ke.rectAreaLights.value=le.state.rectArea,Ke.ltc_1.value=le.state.rectAreaLTC1,Ke.ltc_2.value=le.state.rectAreaLTC2,Ke.pointLights.value=le.state.point,Ke.pointLightShadows.value=le.state.pointShadow,Ke.hemisphereLights.value=le.state.hemi,Ke.directionalShadowMap.value=le.state.directionalShadowMap,Ke.directionalShadowMatrix.value=le.state.directionalShadowMatrix,Ke.spotShadowMap.value=le.state.spotShadowMap,Ke.spotLightMatrix.value=le.state.spotLightMatrix,Ke.spotLightMap.value=le.state.spotLightMap,Ke.pointShadowMap.value=le.state.pointShadowMap,Ke.pointShadowMatrix.value=le.state.pointShadowMatrix);const Rt=$e.getUniforms(),In=jc.seqWithValue(Rt.seq,Ke);return W.currentProgram=$e,W.uniformsList=In,$e}function wi(R,Y){const ne=Te.get(R);ne.outputEncoding=Y.outputEncoding,ne.instancing=Y.instancing,ne.skinning=Y.skinning,ne.morphTargets=Y.morphTargets,ne.morphNormals=Y.morphNormals,ne.morphColors=Y.morphColors,ne.morphTargetsCount=Y.morphTargetsCount,ne.numClippingPlanes=Y.numClippingPlanes,ne.numIntersection=Y.numClipIntersection,ne.vertexAlphas=Y.vertexAlphas,ne.vertexTangents=Y.vertexTangents,ne.toneMapping=Y.toneMapping}function Sb(R,Y,ne,W,le){Y.isScene!==!0&&(Y=ue),C.resetTextureUnits();const Oe=Y.fog,ze=W.isMeshStandardMaterial?Y.environment:null,je=v===null?d.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:Js,Xe=(W.isMeshStandardMaterial?k:L).get(W.envMap||ze),nt=W.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,$e=!!W.normalMap&&!!ne.attributes.tangent,Ke=!!ne.morphAttributes.position,Rt=!!ne.morphAttributes.normal,In=!!ne.morphAttributes.color,Wi=W.toneMapped?d.toneMapping:cs,rr=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Lt=rr!==void 0?rr.length:0,Ze=Te.get(W),Lf=h.state.lights;if(V===!0&&(re===!0||R!==M)){const Dn=R===M&&W.id===y;w.setState(W,R,Dn)}let Wt=!1;W.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Lf.state.version||Ze.outputEncoding!==je||le.isInstancedMesh&&Ze.instancing===!1||!le.isInstancedMesh&&Ze.instancing===!0||le.isSkinnedMesh&&Ze.skinning===!1||!le.isSkinnedMesh&&Ze.skinning===!0||Ze.envMap!==Xe||W.fog===!0&&Ze.fog!==Oe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==w.numPlanes||Ze.numIntersection!==w.numIntersection)||Ze.vertexAlphas!==nt||Ze.vertexTangents!==$e||Ze.morphTargets!==Ke||Ze.morphNormals!==Rt||Ze.morphColors!==In||Ze.toneMapping!==Wi||Q.isWebGL2===!0&&Ze.morphTargetsCount!==Lt)&&(Wt=!0):(Wt=!0,Ze.__version=W.version);let or=Ze.currentProgram;Wt===!0&&(or=qn(W,Y,le));let om=!1,Aa=!1,Pf=!1;const hn=or.getUniforms(),ar=Ze.uniforms;if(Z.useProgram(or.program)&&(om=!0,Aa=!0,Pf=!0),W.id!==y&&(y=W.id,Aa=!0),om||M!==R){if(hn.setValue(H,"projectionMatrix",R.projectionMatrix),Q.logarithmicDepthBuffer&&hn.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),M!==R&&(M=R,Aa=!0,Pf=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const Dn=hn.map.cameraPosition;Dn!==void 0&&Dn.setValue(H,X.setFromMatrixPosition(R.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&hn.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||le.isSkinnedMesh)&&hn.setValue(H,"viewMatrix",R.matrixWorldInverse)}if(le.isSkinnedMesh){hn.setOptional(H,le,"bindMatrix"),hn.setOptional(H,le,"bindMatrixInverse");const Dn=le.skeleton;Dn&&(Q.floatVertexTextures?(Dn.boneTexture===null&&Dn.computeBoneTexture(),hn.setValue(H,"boneTexture",Dn.boneTexture,C),hn.setValue(H,"boneTextureSize",Dn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const If=ne.morphAttributes;if((If.position!==void 0||If.normal!==void 0||If.color!==void 0&&Q.isWebGL2===!0)&&K.update(le,ne,or),(Aa||Ze.receiveShadow!==le.receiveShadow)&&(Ze.receiveShadow=le.receiveShadow,hn.setValue(H,"receiveShadow",le.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ar.envMap.value=Xe,ar.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),Aa&&(hn.setValue(H,"toneMappingExposure",d.toneMappingExposure),Ze.needsLights&&wb(ar,Pf),Oe&&W.fog===!0&&fe.refreshFogUniforms(ar,Oe),fe.refreshMaterialUniforms(ar,W,I,P,he),jc.upload(H,Ze.uniformsList,ar,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(jc.upload(H,Ze.uniformsList,ar,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&hn.setValue(H,"center",le.center),hn.setValue(H,"modelViewMatrix",le.modelViewMatrix),hn.setValue(H,"normalMatrix",le.normalMatrix),hn.setValue(H,"modelMatrix",le.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Dn=W.uniformsGroups;for(let Df=0,Eb=Dn.length;Df<Eb;Df++)if(Q.isWebGL2){const am=Dn[Df];se.update(am,or),se.bind(am,or)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return or}function wb(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Tb(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(R,Y,ne){Te.get(R.texture).__webglTexture=Y,Te.get(R.depthTexture).__webglTexture=ne;const W=Te.get(R);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=ne===void 0,W.__autoAllocateDepthBuffer||B.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,Y){const ne=Te.get(R);ne.__webglFramebuffer=Y,ne.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,ne=0){v=R,_=Y,x=ne;let W=!0,le=null,Oe=!1,ze=!1;if(R){const Xe=Te.get(R);Xe.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(36160,null),W=!1):Xe.__webglFramebuffer===void 0?C.setupRenderTarget(R):Xe.__hasExternalTextures&&C.rebindTextures(R,Te.get(R.texture).__webglTexture,Te.get(R.depthTexture).__webglTexture);const nt=R.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(ze=!0);const $e=Te.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(le=$e[Y],Oe=!0):Q.isWebGL2&&R.samples>0&&C.useMultisampledRTT(R)===!1?le=Te.get(R).__webglMultisampledFramebuffer:le=$e,E.copy(R.viewport),A.copy(R.scissor),b=R.scissorTest}else E.copy(D).multiplyScalar(I).floor(),A.copy(O).multiplyScalar(I).floor(),b=$;if(Z.bindFramebuffer(36160,le)&&Q.drawBuffers&&W&&Z.drawBuffers(R,le),Z.viewport(E),Z.scissor(A),Z.setScissorTest(b),Oe){const Xe=Te.get(R.texture);H.framebufferTexture2D(36160,36064,34069+Y,Xe.__webglTexture,ne)}else if(ze){const Xe=Te.get(R.texture),nt=Y||0;H.framebufferTextureLayer(36160,36064,Xe.__webglTexture,ne||0,nt)}y=-1},this.readRenderTargetPixels=function(R,Y,ne,W,le,Oe,ze){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Te.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ze!==void 0&&(je=je[ze]),je){Z.bindFramebuffer(36160,je);try{const Xe=R.texture,nt=Xe.format,$e=Xe.type;if(nt!==ei&&xe.convert(nt)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=$e===as&&(B.has("EXT_color_buffer_half_float")||Q.isWebGL2&&B.has("EXT_color_buffer_float"));if($e!==zr&&xe.convert($e)!==H.getParameter(35738)&&!($e===mi&&(Q.isWebGL2||B.has("OES_texture_float")||B.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-W&&ne>=0&&ne<=R.height-le&&H.readPixels(Y,ne,W,le,xe.convert(nt),xe.convert($e),Oe)}finally{const Xe=v!==null?Te.get(v).__webglFramebuffer:null;Z.bindFramebuffer(36160,Xe)}}},this.copyFramebufferToTexture=function(R,Y,ne=0){const W=Math.pow(2,-ne),le=Math.floor(Y.image.width*W),Oe=Math.floor(Y.image.height*W);C.setTexture2D(Y,0),H.copyTexSubImage2D(3553,ne,0,0,R.x,R.y,le,Oe),Z.unbindTexture()},this.copyTextureToTexture=function(R,Y,ne,W=0){const le=Y.image.width,Oe=Y.image.height,ze=xe.convert(ne.format),je=xe.convert(ne.type);C.setTexture2D(ne,0),H.pixelStorei(37440,ne.flipY),H.pixelStorei(37441,ne.premultiplyAlpha),H.pixelStorei(3317,ne.unpackAlignment),Y.isDataTexture?H.texSubImage2D(3553,W,R.x,R.y,le,Oe,ze,je,Y.image.data):Y.isCompressedTexture?H.compressedTexSubImage2D(3553,W,R.x,R.y,Y.mipmaps[0].width,Y.mipmaps[0].height,ze,Y.mipmaps[0].data):H.texSubImage2D(3553,W,R.x,R.y,ze,je,Y.image),W===0&&ne.generateMipmaps&&H.generateMipmap(3553),Z.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,ne,W,le=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Oe=R.max.x-R.min.x+1,ze=R.max.y-R.min.y+1,je=R.max.z-R.min.z+1,Xe=xe.convert(W.format),nt=xe.convert(W.type);let $e;if(W.isData3DTexture)C.setTexture3D(W,0),$e=32879;else if(W.isDataArrayTexture)C.setTexture2DArray(W,0),$e=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,W.flipY),H.pixelStorei(37441,W.premultiplyAlpha),H.pixelStorei(3317,W.unpackAlignment);const Ke=H.getParameter(3314),Rt=H.getParameter(32878),In=H.getParameter(3316),Wi=H.getParameter(3315),rr=H.getParameter(32877),Lt=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;H.pixelStorei(3314,Lt.width),H.pixelStorei(32878,Lt.height),H.pixelStorei(3316,R.min.x),H.pixelStorei(3315,R.min.y),H.pixelStorei(32877,R.min.z),ne.isDataTexture||ne.isData3DTexture?H.texSubImage3D($e,le,Y.x,Y.y,Y.z,Oe,ze,je,Xe,nt,Lt.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D($e,le,Y.x,Y.y,Y.z,Oe,ze,je,Xe,Lt.data)):H.texSubImage3D($e,le,Y.x,Y.y,Y.z,Oe,ze,je,Xe,nt,Lt),H.pixelStorei(3314,Ke),H.pixelStorei(32878,Rt),H.pixelStorei(3316,In),H.pixelStorei(3315,Wi),H.pixelStorei(32877,rr),le===0&&W.generateMipmaps&&H.generateMipmap($e),Z.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?C.setTextureCube(R,0):R.isData3DTexture?C.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?C.setTexture2DArray(R,0):C.setTexture2D(R,0),Z.unbindTexture()},this.resetState=function(){_=0,x=0,v=null,Z.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Ap.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(i){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!i}}});class WR extends Ap{}WR.prototype.isWebGL1Renderer=!0;class _x extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class vx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=td,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pn=new z;class Po{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ls(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ls(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ls(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ls(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new yn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Po(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const f0=new z,h0=new ct,d0=new ct,jR=new z,p0=new We;class XR extends ln{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new We,this.bindMatrixInverse=new We}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,s=this.geometry;h0.fromBufferAttribute(s.attributes.skinIndex,e),d0.fromBufferAttribute(s.attributes.skinWeight,e),f0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=d0.getComponent(r);if(o!==0){const a=h0.getComponent(r);p0.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(jR.copy(f0).applyMatrix4(p0),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class xx extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class yx extends en{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Xt,u=Xt,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const m0=new We,YR=new We;class Cp{constructor(e=[],t=[]){this.uuid=xi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:YR;m0.multiplyMatrices(a,t[r]),m0.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Cp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=tx(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new yx(t,e,e,ei,mi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new xx),this.bones.push(o),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class g0 extends yn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _0=new We,v0=new We,Tc=[],qR=new We,Fa=new ln;class $R extends ln{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new g0(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let s=0;s<n;s++)this.setMatrixAt(s,qR)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Fa.geometry=this.geometry,Fa.material=this.material,Fa.material!==void 0)for(let r=0;r<s;r++){this.getMatrixAt(r,_0),v0.multiplyMatrices(n,_0),Fa.matrixWorld=v0,Fa.raycast(e,Tc);for(let o=0,a=Tc.length;o<a;o++){const l=Tc[o];l.instanceId=r,l.object=this,t.push(l)}Tc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new g0(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Rp extends yi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const x0=new z,y0=new z,b0=new We,yh=new vf,Ec=new xa;class Lp extends dt{constructor(e=new Yn,t=new Rp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)x0.fromBufferAttribute(t,s-1),y0.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=x0.distanceTo(y0);e.setAttribute("lineDistance",new Hn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ec.copy(n.boundingSphere),Ec.applyMatrix4(s),Ec.radius+=r,e.ray.intersectsSphere(Ec)===!1)return;b0.copy(s).invert(),yh.copy(e.ray).applyMatrix4(b0);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new z,u=new z,f=new z,h=new z,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=_,y=x-1;v<y;v+=p){const M=g.getX(v),E=g.getX(v+1);if(c.fromBufferAttribute(m,M),u.fromBufferAttribute(m,E),yh.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(h);b<e.near||b>e.far||t.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let v=_,y=x-1;v<y;v+=p){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),yh.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(h);E<e.near||E>e.far||t.push({distance:E,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const M0=new z,S0=new z;class bx extends Lp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)M0.fromBufferAttribute(t,s),S0.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+M0.distanceTo(S0);e.setAttribute("lineDistance",new Hn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class KR extends Lp{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Mx extends yi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const w0=new We,od=new vf,Ac=new xa,Cc=new z;class ZR extends dt{constructor(e=new Yn,t=new Mx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ac.copy(n.boundingSphere),Ac.applyMatrix4(s),Ac.radius+=r,e.ray.intersectsSphere(Ac)===!1)return;w0.copy(s).invert(),od.copy(e.ray).applyMatrix4(w0);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,d=p;g<d;g++){const m=c.getX(g);Cc.fromBufferAttribute(f,m),T0(Cc,m,l,s,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,d=p;g<d;g++)Cc.fromBufferAttribute(f,g),T0(Cc,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function T0(i,e,t,n,s,r,o){const a=od.distanceSqToPoint(i);if(a<t){const l=new z;od.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class tr extends Vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Pp extends yi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bp,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hr extends Pp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class JR extends yi{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Pe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bp,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Ms(i,e,t){return Sx(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function Rc(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Sx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function QR(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function E0(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function wx(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Kl{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class e3 extends Kl{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mo,endingEnd:mo}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case go:r=e,a=2*t-n;break;case uu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case go:o=e,l=2*n-t;break;case uu:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),d=g*g,m=d*g,_=-h*m+2*h*d-h*g,x=(1+h)*m+(-1.5-2*h)*d+(-.5+h)*g+1,v=(-1-p)*m+(1.5+p)*d+.5*g,y=p*m-p*d;for(let M=0;M!==a;++M)r[M]=_*o[u+M]+x*o[c+M]+v*o[l+M]+y*o[f+M];return r}}class Tx extends Kl{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}}class t3 extends Kl{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Hi{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rc(t,this.TimeBufferType),this.values=Rc(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Rc(e.times,Array),values:Rc(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new t3(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new e3(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yl:t=this.InterpolantFactoryMethodDiscrete;break;case ia:t=this.InterpolantFactoryMethodLinear;break;case $f:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yl;case this.InterpolantFactoryMethodLinear:return ia;case this.InterpolantFactoryMethodSmooth:return $f}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=Ms(n,r,o),this.values=Ms(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Sx(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Ms(this.times),t=Ms(this.values),n=this.getValueSize(),s=this.getInterpolation()===$f,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const f=a*n,h=f-n,p=f+n;for(let g=0;g!==n;++g){const d=t[f+g];if(d!==t[h+g]||d!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*n,h=o*n;for(let p=0;p!==n;++p)t[h+p]=t[f+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Ms(e,0,o),this.values=Ms(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Ms(this.times,0),t=Ms(this.values,0),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Hi.prototype.TimeBufferType=Float32Array;Hi.prototype.ValueBufferType=Float32Array;Hi.prototype.DefaultInterpolation=ia;class Sa extends Hi{}Sa.prototype.ValueTypeName="bool";Sa.prototype.ValueBufferType=Array;Sa.prototype.DefaultInterpolation=yl;Sa.prototype.InterpolantFactoryMethodLinear=void 0;Sa.prototype.InterpolantFactoryMethodSmooth=void 0;class Ex extends Hi{}Ex.prototype.ValueTypeName="color";class wl extends Hi{}wl.prototype.ValueTypeName="number";class n3 extends Kl{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)xn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Br extends Hi{InterpolantFactoryMethodLinear(e){return new n3(this.times,this.values,this.getValueSize(),e)}}Br.prototype.ValueTypeName="quaternion";Br.prototype.DefaultInterpolation=ia;Br.prototype.InterpolantFactoryMethodSmooth=void 0;class wa extends Hi{}wa.prototype.ValueTypeName="string";wa.prototype.ValueBufferType=Array;wa.prototype.DefaultInterpolation=yl;wa.prototype.InterpolantFactoryMethodLinear=void 0;wa.prototype.InterpolantFactoryMethodSmooth=void 0;class Tl extends Hi{}Tl.prototype.ValueTypeName="vector";class ad{constructor(e,t=-1,n,s=yp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=xi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(s3(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Hi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=QR(l);l=E0(l,1,u),c=E0(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new wl(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const f=u[1];let h=s[f];h||(s[f]=h=[]),h.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,p,g,d){if(p.length!==0){const m=[],_=[];wx(p,m,_,g),m.length!==0&&d.push(new f(h,m,_))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let d=0;d<h[g].morphTargets.length;d++)p[h[g].morphTargets[d]]=-1;for(const d in p){const m=[],_=[];for(let x=0;x!==h[g].morphTargets.length;++x){const v=h[g];m.push(v.time),_.push(v.morphTarget===d?1:0)}s.push(new wl(".morphTargetInfluence["+d+"]",m,_))}l=p.length*o}else{const p=".bones["+t[f].name+"]";n(Tl,p+".position",h,"pos",s),n(Br,p+".quaternion",h,"rot",s),n(Tl,p+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function i3(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wl;case"vector":case"vector2":case"vector3":case"vector4":return Tl;case"color":return Ex;case"quaternion":return Br;case"bool":case"boolean":return Sa;case"string":return wa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function s3(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=i3(i.type);if(i.times===void 0){const t=[],n=[];wx(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const hs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class r3{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const o3=new r3;class Wr{constructor(e){this.manager=e!==void 0?e:o3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Zi={};class a3 extends Error{constructor(e,t){super(e),this.response=t}}class Ta extends Wr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=hs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Zi[e]!==void 0){Zi[e].push({onLoad:t,onProgress:n,onError:s});return}Zi[e]=[],Zi[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Zi[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=h?parseInt(h):0,g=p!==0;let d=0;const m=new ReadableStream({start(_){x();function x(){f.read().then(({done:v,value:y})=>{if(v)_.close();else{d+=y.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:d,total:p});for(let E=0,A=u.length;E<A;E++){const b=u[E];b.onProgress&&b.onProgress(M)}_.enqueue(y),x()}})}}});return new Response(m)}else throw new a3(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{hs.add(e,c);const u=Zi[e];delete Zi[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Zi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Zi[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ax extends Wr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=hs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Sl("img");function l(){u(),hs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class l3 extends Wr{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new yx,a=new Ta(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){const c=r.parse(l);c&&(c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Tn,o.wrapT=c.wrapT!==void 0?c.wrapT:Tn,o.magFilter=c.magFilter!==void 0?c.magFilter:Ut,o.minFilter=c.minFilter!==void 0?c.minFilter:Ut,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Zs),c.mipmapCount===1&&(o.minFilter=Ut),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c))},n,s),o}}class Ip extends Wr{constructor(e){super(e)}load(e,t,n,s){const r=new en,o=new Ax(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Mf extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const bh=new We,A0=new z,C0=new z;class Dp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xf,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;A0.setFromMatrixPosition(e.matrixWorld),t.position.copy(A0),C0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(C0),t.updateMatrixWorld(),bh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class c3 extends Dp{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ml*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class u3 extends Mf{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new c3}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const R0=new We,ka=new z,Mh=new z;class f3 extends Dp{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ka.setFromMatrixPosition(e.matrixWorld),n.position.copy(ka),Mh.copy(n.position),Mh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Mh),n.updateMatrixWorld(),s.makeTranslation(-ka.x,-ka.y,-ka.z),R0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(R0)}}class h3 extends Mf{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new f3}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class d3 extends Dp{constructor(){super(new $l(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class p3 extends Mf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new d3}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class m3 extends Mf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ld{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class g3 extends Yn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class _3 extends Wr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=hs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){hs.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class v3{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){xn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const o=this._workIndex*r;xn.multiplyQuaternionsFlat(e,o,e,t,e,n),xn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*s}}}const Np="\\[\\]\\.:\\/",x3=new RegExp("["+Np+"]","g"),Op="[^"+Np+"]",y3="[^"+Np.replace("\\.","")+"]",b3=/((?:WC+[\/:])*)/.source.replace("WC",Op),M3=/(WCOD+)?/.source.replace("WCOD",y3),S3=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Op),w3=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Op),T3=new RegExp("^"+b3+M3+S3+w3+"$"),E3=["material","materials","bones","map"];class A3{constructor(e,t,n){const s=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(x3,"")}static parseTrackName(e){const t=T3.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);E3.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=A3;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class C3{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:mo,endingEnd:mo};for(let c=0;c!==o;++c){const u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=xT,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case bT:for(let u=0,f=l.length;u!==f;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case yp:default:for(let u=0,f=l.length;u!==f;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const o=n===yT;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===vT){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=go,s.endingEnd=go):(e?s.endingStart=this.zeroSlopeAtStart?go:mo:s.endingStart=uu,t?s.endingEnd=this.zeroSlopeAtEnd?go:mo:s.endingEnd=uu)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const R3=new Float32Array(1);class L3 extends Gr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let f=0;f!==r;++f){const h=s[f],p=h.name;let g=u[p];if(g!==void 0)++g.referenceCount,o[f]=g;else{if(g=o[f],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const d=t&&t._propertyBindings[f].binding.parsedPath;g=new v3(st.create(n,p,d),h.ValueTypeName,h.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),o[f]=g}a[f].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const f=a.actionByRoot,h=(e._localRoot||this._root).uuid;delete f[h],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Tx(new Float32Array(2),new Float32Array(2),1,R3),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?ad.findByName(s,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=yp),l!==void 0){const f=l.actionByRoot[r];if(f!==void 0&&f.blendMode===n)return f;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new C3(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?ad.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,f=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=u,t[u]=f,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class P3 extends vx{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class I3{constructor(e,t,n=0,s=1/0){this.ray=new vf(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Sp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return cd(e,this,n,t),n.sort(L0),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)cd(e[s],this,n,t);return n.sort(L0),n}}function L0(i,e){return i.distance-e.distance}function cd(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)cd(s[r],e,t,!0)}}class F4{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Lc=new z,bt=new wp;class k4 extends bx{constructor(e){const t=new Yn,n=new Rp({color:16777215,vertexColors:!0,toneMapped:!1}),s=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(g,d){l(g),l(d)}function l(g){s.push(0,0,0),r.push(0,0,0),o[g]===void 0&&(o[g]=[]),o[g].push(s.length/3-1)}t.setAttribute("position",new Hn(s,3)),t.setAttribute("color",new Hn(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const c=new Pe(16755200),u=new Pe(16711680),f=new Pe(43775),h=new Pe(16777215),p=new Pe(3355443);this.setColors(c,u,f,h,p)}setColors(e,t,n,s,r){const a=this.geometry.getAttribute("color");a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,s.r,s.g,s.b),a.setXYZ(39,s.r,s.g,s.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,s=1;bt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Et("c",t,e,bt,0,0,-1),Et("t",t,e,bt,0,0,1),Et("n1",t,e,bt,-n,-s,-1),Et("n2",t,e,bt,n,-s,-1),Et("n3",t,e,bt,-n,s,-1),Et("n4",t,e,bt,n,s,-1),Et("f1",t,e,bt,-n,-s,1),Et("f2",t,e,bt,n,-s,1),Et("f3",t,e,bt,-n,s,1),Et("f4",t,e,bt,n,s,1),Et("u1",t,e,bt,n*.7,s*1.1,-1),Et("u2",t,e,bt,-n*.7,s*1.1,-1),Et("u3",t,e,bt,0,s*2,-1),Et("cf1",t,e,bt,-n,0,1),Et("cf2",t,e,bt,n,0,1),Et("cf3",t,e,bt,0,-s,1),Et("cf4",t,e,bt,0,s,1),Et("cn1",t,e,bt,-n,0,-1),Et("cn2",t,e,bt,n,0,-1),Et("cn3",t,e,bt,0,-s,-1),Et("cn4",t,e,bt,0,s,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Et(i,e,t,n,s,r,o){Lc.set(s,r,o).unproject(n);const a=e[i];if(a!==void 0){const l=t.getAttribute("position");for(let c=0,u=a.length;c<u;c++)l.setXYZ(a[c],Lc.x,Lc.y,Lc.z)}}const rs=D3();function D3(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function N3(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Kt(i,-65504,65504),rs.floatView[0]=i;const e=rs.uint32View[0],t=e>>23&511;return rs.baseTable[t]+((e&8388607)>>rs.shiftTable[t])}function O3(i){const e=i>>10;return rs.uint32View[0]=rs.mantissaTable[rs.offsetTable[e]+(i&1023)]+rs.exponentTable[e],rs.floatView[0]}const Pc={toHalfFloat:N3,fromHalfFloat:O3};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xp);const U3=Math.PI/180;function Ic(i,e,t){return Math.max(e,Math.min(t,i))}function F3(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function k3(i,e,t){return(1-t)*i+t*e}function za(i,e,t,n){return k3(i,e,1-Math.exp(-t*n))}function z3(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function z4(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Sh(i,e){return i+Math.random()*(e-i)}function B3(i){return i*U3}const V3=!0;new URLSearchParams(window.location.search);const G3=V3,ao=[10,30,50],H3=[16490601,13355979,16761600],El={size:jv.data.length},ft={defaultPosition:[El.size*.5,4,El.size*.5],minZoom:50,maxZoom:5,baseFov:45,dragEase:5,zoomEase:5,playerPosEase:20,maxTiltAngle:B3(65),zoomOffsetY:8,near:1,far:100},lo={tablet:768,desktop:1025,large:1441},W3={body:{aoMapIntensity:.7},gold:{roughness:.185,metalness:.446,color:new Pe(16642985),envMapIntensity:.165},face:{roughness:.1,metalness:0,envMapIntensity:.17,aoMapIntensity:.7}},Sf=Tw("game",{state:()=>({playersCounter:0,scoreboard:[],medals:[],playerCountry:"BZH"}),actions:{updatePlayersCounter(i){this.playersCounter=i},initScoreboard(i){for(const[,e]of i)this.addNewTeamToScoreboard(e);this.filterScoreboard(),console.log("Init store score"),Ue.emit(Ye.SCOREBOARD_UPDATE)},addNewTeamToScoreboard(i){const e=i.medals[0]*ao[0]+i.medals[1]*ao[1]+i.medals[2]*ao[2];this.scoreboard.push({name:i.iso,score:e}),console.log("Add new team store score"),Ue.emit(Ye.SCOREBOARD_UPDATE)},updateScoreTeam(i){const e=i.medals[0]*ao[0]+i.medals[1]*ao[1]+i.medals[2]*ao[2];this.scoreboard[this.scoreboard.findIndex(t=>t.name===i.iso)].score=e,this.filterScoreboard(),console.log("Update store score"),Ue.emit(Ye.SCOREBOARD_UPDATE)},filterScoreboard(){this.scoreboard=this.scoreboard.sort((i,e)=>e.score-i.score)},addMedals(i){Object.values(i).forEach(e=>this.medals.push(e))},removeMedal(i){this.medals.slice(this.medals.indexOf(i),1)},closestMedal(){const i=Me.webgl.players.get(Me.game.teams.get(this.playerCountry));return[...Me.webgl.medals.values()].sort((e,t)=>e.position.distanceTo(i.position)-t.position.distanceTo(i.position)).filter(e=>!e.isInScreen)[0]},setPlayerCountry(i){this.playerCountry=i}},getters:{}});const Ea=i=>(rv("data-v-402d1b85"),i=i(),ov(),i),j3={class:"Login-container"},X3={class:"Pays-container"},Y3=Ea(()=>kt("span",null,[kt("img",{src:vw,alt:""})],-1)),q3=Ea(()=>kt("p",null,"BZH",-1)),$3=[Y3,q3],K3=Ea(()=>kt("span",null,"🇬🇷",-1)),Z3=Ea(()=>kt("p",null,"GRC",-1)),J3=[K3,Z3],Q3=Ea(()=>kt("span",null,"🇵🇹",-1)),eL=Ea(()=>kt("p",null,"PRT",-1)),tL=[Q3,eL],nL={__name:"LoginView",setup(i){const e=Sf(),t=hi("BZH");let n;Me.webgl.renderLogin=!0,ap(()=>{n=document.querySelectorAll(".Pays-item")});const s=o=>{t.value=o,Ue.emit(Ye.SELECT_TEAM_UPDATE,o),n.forEach(a=>{a.id===o?a.classList.add("select"):a.classList.remove("select")})},r=()=>{console.log("Login Country : "+t.value),e.setPlayerCountry(t.value),vp.set(pp.USER_ISO,t.value),Me.server.userJoin({iso:t.value}),Me.webgl.renderLogin=!1,wf.push("/game")};return(o,a)=>(ki(),_a("div",j3,[Dt(Bv),kt("div",X3,[kt("div",{id:"BZH",class:"Pays-item select",onClick:a[0]||(a[0]=l=>s("BZH"))},$3),kt("div",{id:"GRC",class:"Pays-item",onClick:a[1]||(a[1]=l=>s("GRC"))},J3),kt("div",{id:"PRT",class:"Pays-item",onClick:a[2]||(a[2]=l=>s("PRT"))},tL)]),Dt(kv,{class:"confirm-btn",onClick:a[3]||(a[3]=l=>r())},{default:op(()=>[df("Confirmer le pays")]),_:1})]))}},iL=_p(nL,[["__scopeId","data-v-402d1b85"]]),wf=tw({history:vS("/"),routes:[{path:"/",name:"home",component:_w},{path:"/login",name:"login",component:iL},{path:"/game",name:"game",component:()=>qa(()=>import("./GameView-caf26563.js"),["assets/GameView-caf26563.js","assets/GameView-2c298226.css"]),beforeEnter:()=>{}}]});wf.afterEach((i,e)=>{Ue.emit(Ye.ROUTE_CHANGE,i.name)});const ho={images:{},textures:{groundData:{path:"/assets/textures/ground.png"},seamless1:{path:"/assets/textures/seamless2.png"},seamless2:{path:"/assets/textures/seamless7.png"},seamless3:{path:"/assets/textures/seamless6.png"},seamless4:{path:"/assets/textures/seamless4.png"},playerAo:{path:"/assets/textures/player-ao.jpg"},noise:{path:"/assets/textures/noiseFbm1.png"},skybox:{path:"/assets/textures/skybox.png"}},envMaps:{envmap:{path:"/assets/textures/forest.hdr"}},models:{terrain:{path:"/assets/models/terrain.glb"},player:{path:"/assets/models/character.glb"},medals:{path:"/assets/models/medals.glb"}},jsons:{},sounds:{mario:{path:"/assets/sounds/mario.mp3"},mario2:{path:"/assets/sounds/mario.mp3"}}};class sL{constructor(e,t){this.ctx=e,this.buffer=t,this.amp=this.ctx.createGain(),this.amp.connect(this.ctx.destination),this.loop=!1,this._muted=!1,this._volume=1,this.source=null,this._playing=!1,this.timer=null}get playing(){return this._playing}get muted(){return this._muted}set muted(e){this._muted=e,this.amp.gain.value=this._muted?0:this._volume}get volume(){return this._volume}set volume(e){this._volume=e,this._muted||(this.amp.gain.value=this._volume)}play(){this._playing||(this.source=this.ctx.createBufferSource(),this.source.buffer=this.buffer,this.source.loop=this.loop,this.source.connect(this.amp),this.loopEnd=this.buffer.duration,this.source.start(0),this.timer=setTimeout(()=>{this.loop||this.pause()},this.buffer.duration*1e3),this._playing=!0)}pause(){var e;this.source&&(this._playing=!1,clearTimeout(this.timer),(e=this.source)==null||e.disconnect(),this.source=null,this._isFadingOut=!1)}}var bu;class rL{constructor(){Nn(this,"initAudio",()=>{this.audioCtx=new AudioContext,this.keys=Object.keys(ho.sounds),this.sounds=Me.core.assetsManager.get(...this.keys),this.audios=Object.fromEntries(this.keys.map((e,t)=>[e,new sL(this.audioCtx,this.sounds[t])])),Ue.off(Ye.POINTER_DOWN,this.initAudio),this.isInit=!0});ve(this,bu,()=>{var e;(e=Me.debug)==null||e.mapping.add(this,"Sound",1)});Ue.on(Ye.POINTER_DOWN,this.initAudio),Ue.on(Ye.ATTACH,G(this,bu)),this.isInit=!1}play(e){this.audios[e].play()}pause(e){this.audios[e].pause()}}bu=new WeakMap;function P0(i,e){if(e===MT)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ed||e===Qv){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===ed)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class oL extends Wr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new fL(t)}),this.register(function(t){return new vL(t)}),this.register(function(t){return new xL(t)}),this.register(function(t){return new yL(t)}),this.register(function(t){return new dL(t)}),this.register(function(t){return new pL(t)}),this.register(function(t){return new mL(t)}),this.register(function(t){return new gL(t)}),this.register(function(t){return new uL(t)}),this.register(function(t){return new _L(t)}),this.register(function(t){return new hL(t)}),this.register(function(t){return new lL(t)}),this.register(function(t){return new bL(t)}),this.register(function(t){return new ML(t)})}load(e,t,n,s){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=ld.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ta(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Cx){try{o[Je.KHR_BINARY_GLTF]=new SL(e)}catch(f){s&&s(f);return}r=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new UL(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const f=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(f){case Je.KHR_MATERIALS_UNLIT:o[f]=new cL;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[f]=new wL(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[f]=new TL;break;case Je.KHR_MESH_QUANTIZATION:o[f]=new EL;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function aL(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class lL{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Pe(16777215);l.color!==void 0&&u.fromArray(l.color);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new p3(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new h3(u),c.distance=f;break;case"spot":c=new u3(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Cs(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class cL{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return wr}extendParams(e,t,n){const s=[];e.color=new Pe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,it))}return Promise.all(s)}}class uL{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class fL{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hr}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(a,a)}return Promise.all(r)}}class hL{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hr}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class dL{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hr}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,it)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class pL{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hr}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class mL{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hr}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Pe(a[0],a[1],a[2]),Promise.all(r)}}class gL{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hr}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class _L{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hr}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Pe(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,it)),Promise.all(r)}}class vL{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class xL{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class yL{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class bL{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,f=s.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(p),u,f,h,s.mode,s.filter),p})})}else return null}}class ML{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Zn.TRIANGLES&&c.mode!==Zn.TRIANGLE_STRIP&&c.mode!==Zn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,p=[];for(const g of f){const d=new We,m=new z,_=new xn,x=new z(1,1,1),v=new $R(g.geometry,g.material,h);for(let y=0;y<h;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,y),l.SCALE&&x.fromBufferAttribute(l.SCALE,y),v.setMatrixAt(y,d.compose(m,_,x));for(const y in l)y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);dt.prototype.copy.call(v,g),v.frustumCulled=!1,this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Cx="glTF",Ba=12,I0={JSON:1313821514,BIN:5130562};class SL{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ba),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Cx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ba,r=new DataView(e,Ba);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===I0.JSON){const c=new Uint8Array(e,Ba+o,a);this.content=n.decode(c)}else if(l===I0.BIN){const c=Ba+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class wL{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=ud[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=ud[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],p=Io[h.componentType];c[f]=p.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f){s.decodeDracoFile(u,function(h){for(const p in h.attributes){const g=h.attributes[p],d=l[p];d!==void 0&&(g.normalized=d)}f(h)},a,c)})})}}class TL{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class EL{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class Rx extends Kl{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,f=(n-t)/u,h=f*f,p=h*f,g=e*c,d=g-c,m=-2*p+3*h,_=p-h,x=1-m,v=_-h+f;for(let y=0;y!==a;y++){const M=o[d+y+a],E=o[d+y+l]*u,A=o[g+y+a],b=o[g+y]*u;r[y]=x*M+v*E+m*A+_*b}return r}}const AL=new xn;class CL extends Rx{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return AL.fromArray(r).normalize().toArray(r),r}}const Zn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Io={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},D0={9728:Xt,9729:Ut,9984:Qh,9985:Zv,9986:Wc,9987:Zs},N0={33071:Tn,33648:cu,10497:pi},wh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ud={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ss={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},RL={CUBICSPLINE:void 0,LINEAR:ia,STEP:yl},Th={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function LL(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Pp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:fs})),i.DefaultMaterial}function Va(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Cs(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function PL(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;o.push(h)}if(s){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(h)}if(r){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=f),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function IL(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function DL(i){const e=i.extensions&&i.extensions[Je.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+O0(e.attributes):t=i.indices+":"+O0(i.attributes)+":"+i.mode,t}function O0(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function fd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function NL(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const OL=new We;class UL{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new aL,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new Ip(this.options.manager):this.textureLoader=new _3(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ta(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};Va(r,a,s),Cs(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(ld.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=wh[s.type],a=Io[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new yn(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=wh[s.type],c=Io[s.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let d,m;if(p&&p!==f){const _=Math.floor(h/p),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+_+":"+s.count;let v=t.cache.get(x);v||(d=new c(a,_*p,s.count*p/u),v=new vx(d,p/u),t.cache.add(x,v)),m=new Po(v,l,h%p/u,g)}else a===null?d=new c(s.count*l):d=new c(a,h,s.count*l),m=new yn(d,l,g);if(s.sparse!==void 0){const _=wh.SCALAR,x=Io[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,M=new x(o[1],v,s.sparse.count*_),E=new c(o[2],y,s.sparse.count*l);a!==null&&(m=new yn(m.array.slice(),m.itemSize,m.normalized));for(let A=0,b=M.length;A<b;A++){const T=M[A];if(m.setX(T,E[A*l]),l>=2&&m.setY(T,E[A*l+1]),l>=3&&m.setZ(T,E[A*l+2]),l>=4&&m.setW(T,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"";const h=(r.samplers||{})[o.sampler]||{};return u.magFilter=D0[h.magFilter]||Ut,u.minFilter=D0[h.minFilter]||Zs,u.wrapS=N0[h.wrapS]||pi,u.wrapT=N0[h.wrapT]||pi,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(d){const m=new en(d);m.needsUpdate=!0,h(m)}),t.load(ld.resolveURL(f,r.path),g,void 0,p)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),f.userData.mimeType=o.mimeType||NL(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.encoding=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Mx,yi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Rp,yi.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Pp}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){const f=s[Je.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{const f=r.pbrMetallicRoughness||{};if(a.color=new Pe(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.fromArray(h),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,it)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=os);const u=r.alphaMode||Th.OPAQUE;if(u===Th.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Th.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==wr&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Be(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;a.normalScale.set(f,f)}return r.occlusionTexture!==void 0&&o!==wr&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==wr&&(a.emissive=new Pe().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==wr&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,it)),Promise.all(c).then(function(){const f=new o(a);return r.name&&(f.name=r.name),Cs(f,r),t.associations.set(f,{materials:e}),r.extensions&&Va(s,f,r),f})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");let n=t;for(let s=1;this.nodeNamesUsed[n];++s)n=t+"_"+s;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return U0(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=DL(c),f=s[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=U0(new Yn,c,t),s[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?LL(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let p=0,g=u.length;p<g;p++){const d=u[p],m=o[p];let _;const x=c[p];if(m.mode===Zn.TRIANGLES||m.mode===Zn.TRIANGLE_STRIP||m.mode===Zn.TRIANGLE_FAN||m.mode===void 0)_=r.isSkinnedMesh===!0?new XR(d,x):new ln(d,x),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),m.mode===Zn.TRIANGLE_STRIP?_.geometry=P0(_.geometry,Qv):m.mode===Zn.TRIANGLE_FAN&&(_.geometry=P0(_.geometry,ed));else if(m.mode===Zn.LINES)_=new bx(d,x);else if(m.mode===Zn.LINE_STRIP)_=new Lp(d,x);else if(m.mode===Zn.LINE_LOOP)_=new KR(d,x);else if(m.mode===Zn.POINTS)_=new ZR(d,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&IL(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),Cs(_,r),m.extensions&&Va(s,_,m),t.assignFinalMaterial(_),f.push(_)}for(let p=0,g=f.length;p<g;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return f[0];const h=new ks;t.associations.set(h,{meshes:e});for(let p=0,g=f.length;p<g;p++)h.add(f[p]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new sn(BT.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new $l(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Cs(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new We;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Cp(a,l)})}loadAnimation(e){const n=this.json.animations[e],s=[],r=[],o=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const f=n.channels[c],h=n.samplers[f.sampler],p=f.target,g=p.node,d=n.parameters!==void 0?n.parameters[h.input]:h.input,m=n.parameters!==void 0?n.parameters[h.output]:h.output;s.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",d)),o.push(this.getDependency("accessor",m)),a.push(h),l.push(p)}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2],p=c[3],g=c[4],d=[];for(let _=0,x=u.length;_<x;_++){const v=u[_],y=f[_],M=h[_],E=p[_],A=g[_];if(v===void 0)continue;v.updateMatrix();let b;switch(Ss[A.path]){case Ss.weights:b=wl;break;case Ss.rotation:b=Br;break;case Ss.position:case Ss.scale:default:b=Tl;break}const T=v.name?v.name:v.uuid,P=E.interpolation!==void 0?RL[E.interpolation]:ia,I=[];Ss[A.path]===Ss.weights?v.traverse(function(N){N.morphTargetInfluences&&I.push(N.name?N.name:N.uuid)}):I.push(T);let q=M.array;if(M.normalized){const N=fd(q.constructor),D=new Float32Array(q.length);for(let O=0,$=q.length;O<$;O++)D[O]=q[O]*N;q=D}for(let N=0,D=I.length;N<D;N++){const O=new b(I[N]+"."+Ss[A.path],y.array,q,P);E.interpolation==="CUBICSPLINE"&&(O.createInterpolant=function(j){const V=this instanceof Br?CL:Rx;return new V(this.times,this.values,this.getValueSize()/3,j)},O.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),d.push(O)}}const m=n.name?n.name:"animation_"+e;return new ad(m,void 0,d)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(h,OL)});for(let p=0,g=f.length;p<g;p++)u.add(f[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new xx:c.length>1?u=new ks:c.length===1?u=c[0]:u=new dt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(r.name&&(u.userData.name=r.name,u.name=o),Cs(u,r),r.extensions&&Va(n,u,r),r.matrix!==void 0){const f=new We;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new ks;n.name&&(r.name=s.createUniqueName(n.name)),Cs(r,n),n.extensions&&Va(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)r.add(l[u]);const c=u=>{const f=new Map;for(const[h,p]of s.associations)(h instanceof yi||h instanceof en)&&f.set(h,p);return u.traverse(h=>{const p=s.associations.get(h);p!=null&&f.set(h,p)}),f};return s.associations=c(r),r})}}function FL(i,e,t){const n=e.attributes,s=new va;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new z(l[0],l[1],l[2]),new z(c[0],c[1],c[2])),a.normalized){const u=fd(Io[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new z,l=new z;for(let c=0,u=r.length;c<u;c++){const f=r[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){const d=fd(Io[h.componentType]);l.multiplyScalar(d)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new xa;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function U0(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=ud[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Cs(i,e),FL(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?PL(i,e.targets,t):i})}class kL extends l3{constructor(e){super(e),this.type=as}parse(e){const a=function(v,y){switch(v){case 1:console.error("THREE.RGBELoader Read Error: "+(y||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(y||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(y||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(y||""))}return-1},f=`
`,h=function(v,y,M){y=y||1024;let A=v.pos,b=-1,T=0,P="",I=String.fromCharCode.apply(null,new Uint16Array(v.subarray(A,A+128)));for(;0>(b=I.indexOf(f))&&T<y&&A<v.byteLength;)P+=I,T+=I.length,A+=128,I+=String.fromCharCode.apply(null,new Uint16Array(v.subarray(A,A+128)));return-1<b?(M!==!1&&(v.pos+=T+b+1),P+I.slice(0,b)):!1},p=function(v){const y=/^#\?(\S+)/,M=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,E=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,A=/^\s*FORMAT=(\S+)\s*$/,b=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,T={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let P,I;if(v.pos>=v.byteLength||!(P=h(v)))return a(1,"no header found");if(!(I=P.match(y)))return a(3,"bad initial token");for(T.valid|=1,T.programtype=I[1],T.string+=P+`
`;P=h(v),P!==!1;){if(T.string+=P+`
`,P.charAt(0)==="#"){T.comments+=P+`
`;continue}if((I=P.match(M))&&(T.gamma=parseFloat(I[1])),(I=P.match(E))&&(T.exposure=parseFloat(I[1])),(I=P.match(A))&&(T.valid|=2,T.format=I[1]),(I=P.match(b))&&(T.valid|=4,T.height=parseInt(I[1],10),T.width=parseInt(I[2],10)),T.valid&2&&T.valid&4)break}return T.valid&2?T.valid&4?T:a(3,"missing image size specifier"):a(3,"missing format specifier")},g=function(v,y,M){const E=y;if(E<8||E>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);if(E!==(v[2]<<8|v[3]))return a(3,"wrong scanline width");const A=new Uint8Array(4*y*M);if(!A.length)return a(4,"unable to allocate buffer space");let b=0,T=0;const P=4*E,I=new Uint8Array(4),q=new Uint8Array(P);let N=M;for(;N>0&&T<v.byteLength;){if(T+4>v.byteLength)return a(1);if(I[0]=v[T++],I[1]=v[T++],I[2]=v[T++],I[3]=v[T++],I[0]!=2||I[1]!=2||(I[2]<<8|I[3])!=E)return a(3,"bad rgbe scanline format");let D=0,O;for(;D<P&&T<v.byteLength;){O=v[T++];const j=O>128;if(j&&(O-=128),O===0||D+O>P)return a(3,"bad scanline data");if(j){const V=v[T++];for(let re=0;re<O;re++)q[D++]=V}else q.set(v.subarray(T,T+O),D),D+=O,T+=O}const $=E;for(let j=0;j<$;j++){let V=0;A[b]=q[j+V],V+=E,A[b+1]=q[j+V],V+=E,A[b+2]=q[j+V],V+=E,A[b+3]=q[j+V],b+=4}N--}return A},d=function(v,y,M,E){const A=v[y+3],b=Math.pow(2,A-128)/255;M[E+0]=v[y+0]*b,M[E+1]=v[y+1]*b,M[E+2]=v[y+2]*b,M[E+3]=1},m=function(v,y,M,E){const A=v[y+3],b=Math.pow(2,A-128)/255;M[E+0]=Pc.toHalfFloat(Math.min(v[y+0]*b,65504)),M[E+1]=Pc.toHalfFloat(Math.min(v[y+1]*b,65504)),M[E+2]=Pc.toHalfFloat(Math.min(v[y+2]*b,65504)),M[E+3]=Pc.toHalfFloat(1)},_=new Uint8Array(e);_.pos=0;const x=p(_);if(x!==-1){const v=x.width,y=x.height,M=g(_.subarray(_.pos),v,y);if(M!==-1){let E,A,b;switch(this.type){case mi:b=M.length/4;const T=new Float32Array(b*4);for(let I=0;I<b;I++)d(M,I*4,T,I*4);E=T,A=mi;break;case as:b=M.length/4;const P=new Uint16Array(b*4);for(let I=0;I<b;I++)m(M,I*4,P,I*4);E=P,A=as;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:v,height:y,data:E,header:x.string,gamma:x.gamma,exposure:x.exposure,type:A}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(o,a){switch(o.type){case mi:case as:o.encoding=Js,o.minFilter=Ut,o.magFilter=Ut,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,s)}}class Ga{constructor({manifest:e={},loader:t=null,isMobile:n=!1,assetsInfos:s=new Map,loadedAssets:r=new Map,progressCallback:o=()=>null,afterLoadCallback:a=l=>l}={}){this.manifest=e,this.loader=t,this.isMobile=n,this.assetsToLoad=new Map,this.assetsInfos=s,this.loadedAssets=r,this.progressCallback=o,this.afterLoadCallback=a,this.add(...Object.keys(e))}add(...e){for(const t of e)!this.assetsToLoad.has(t)&&this.manifest[t]&&this.assetsToLoad.set(t,this.manifest[t])}getAsset(e){return this.loadedAssets.get(e)}getAssets(...e){return Object.fromEntries(e?[...this.loadedAssets.entries()].filter(([t])=>e.includes(t)):this.loadedAssets.entries())}async loadAsset(e){var t,n;if(this.loadedAssets.has(e))return this.loadedAssets.get(e);try{const s=this.isMobile&&this.manifest[e].pathMobile?this.manifest[e].pathMobile:this.manifest[e].path,r=this.afterLoadCallback(await this.loader.loadAsync(s,o=>this.assetProgress(o,e)));return this.loadedAssets.set(e,(t=r==null?void 0:r.scene)!=null&&t.isObject3D?r.scene:r),(n=this.manifest[e].callbacks)==null||n.forEach(o=>o(this.loadedAssets.get(e))),r}catch{return}}loadAssets(){return Promise.all([...this.assetsToLoad.keys()].map(e=>this.loadAsset(e)))}loadCriticalAssets(){return Promise.all([...this.assetsToLoad.keys()].map(e=>this.manifest[e].critical&&this.loadAsset(e)))}assetProgress(e,t){var s;this.assetsInfos.has(t)||this.assetsInfos.set(t,{size:e.total,progress:0});const n=this.assetsInfos.get(t);n.progress=e.loaded/n.size,(s=this.progressCallback)==null||s.call(this)}}var Nl;class zL extends Ta{constructor(t){super(t);ve(this,Nl,void 0);mt(this,Nl,new Ax),this.setResponseType("blob")}load(t,n,s,r){const o=a=>{const l=URL.createObjectURL(a),c=document.createElement("img");c.onload=()=>{hs.add(t,c),URL.revokeObjectURL(l),document.body.removeChild(c),G(this,Nl).load(t,n,()=>{},r)},c.src=l,c.style.visibility="hidden",document.body.appendChild(c)};super.load(t,o,s,r)}}Nl=new WeakMap;var Ol;class BL extends Wr{constructor(t){super(t);ve(this,Ol,void 0);mt(this,Ol,new Ta)}load(t,n,s,r){G(this,Ol).load(t,o=>{try{n(JSON.parse(o))}catch(a){r!==void 0&&r(a);return}},s,r)}}Ol=new WeakMap;var Ul,zd;class VL extends Ta{constructor(t){super(t);ve(this,Ul,void 0);ve(this,zd,void 0);mt(this,Ul,new Ip),this.setResponseType("blob")}load(t,n,s,r){const o=a=>{const l=URL.createObjectURL(a),c=document.createElement("img");c.onload=()=>{hs.add(t,c),URL.revokeObjectURL(l),document.body.removeChild(c),G(this,Ul).load(t,n,()=>{},r)},c.src=l,c.style.visibility="hidden",document.body.appendChild(c)};super.load(t,o,s,r)}}Ul=new WeakMap,zd=new WeakMap;hs.enabled=!0;var Ri,Li,Fl,kl,hd,Mu,Lx,Su,Px,Ls;class GL{constructor({blockingLoad:e=!0,withPriority:t=!1,withCriticals:n=!1,isMobile:s=!1}={}){ve(this,kl);ve(this,Mu);ve(this,Su);ve(this,Ri,new Map);ve(this,Li,new Map);ve(this,Fl,0);ve(this,Ls,()=>{mt(this,Fl,[...G(this,Ri).values()].map(e=>e.progress).reduce((e,t)=>e+t,0)/G(this,Ri).size),Ue.emit(Ye.LOADER_PROGRESS,G(this,Fl))});this.blockingLoad=e,this.withPriority=t,this.withCriticals=n,this.isMobile=s;const r=new oL;this.loaders={images:new Ga({manifest:ho.images,isMobile:this.isMobile,loader:new zL,assetsInfos:G(this,Ri),loadedAssets:G(this,Li),progressCallback:G(this,Ls)}),textures:new Ga({manifest:ho.textures,isMobile:this.isMobile,loader:new VL,assetsInfos:G(this,Ri),loadedAssets:G(this,Li),progressCallback:G(this,Ls)}),envMaps:new Ga({manifest:ho.envMaps,isMobile:this.isMobile,loader:new kL,assetsInfos:G(this,Ri),loadedAssets:G(this,Li),progressCallback:G(this,Ls)}),models:new Ga({manifest:ho.models,isMobile:this.isMobile,loader:r,assetsInfos:G(this,Ri),loadedAssets:G(this,Li),progressCallback:G(this,Ls),afterLoadCallback:o=>(o.scene.animations=o.animations,o.scene)}),jsons:new Ga({manifest:ho.jsons,isMobile:this.isMobile,loader:new BL,assetsInfos:G(this,Ri),loadedAssets:G(this,Li),progressCallback:G(this,Ls)})}}async load(){this.withCriticals&&await Ve(this,Mu,Lx).call(this),this.blockingLoad?await Ve(this,kl,hd).call(this):this.withPriority?Ve(this,Su,Px).call(this):Ve(this,kl,hd).call(this)}get(...e){return e.length>1?e.map(t=>G(this,Li).get(t)):G(this,Li).get(e[0])}}Ri=new WeakMap,Li=new WeakMap,Fl=new WeakMap,kl=new WeakSet,hd=function(){return Promise.all(Object.values(this.loaders).map(e=>e.loadAssets()))},Mu=new WeakSet,Lx=function(){return Promise.all(Object.values(this.loaders).map(e=>e.loadCriticalAssets()))},Su=new WeakSet,Px=function(){return Promise.all(Object.values(this.loaders).map(e=>[...e.assetsToLoad.entries()].map(([t,n])=>({loader:e,key:t,priority:n.priority||0}))).flat().sort((e,t)=>e.priority-t.priority).map(({loader:e,key:t})=>e.loadAsset(t)))},Ls=new WeakMap;var Uo,zl;class HL{constructor(){ve(this,Uo,!1);Nn(this,"play",()=>{mt(this,Uo,!0),G(this,zl).call(this)});Nn(this,"pause",()=>{mt(this,Uo,!1)});ve(this,zl,()=>{if(!G(this,Uo))return;window.requestAnimationFrame(G(this,zl));const e=Date.now();this.delta=e-this.current,this.elapsed+=this.delta,this.current=e,this.delta>60&&(this.delta=60),this.params.et=this.elapsed,this.params.dt=this.delta*.001,Ue.emit(Ye.TICK,this.params),Ue.emit(Ye.RENDER,this.params)});Ue.register(this),this.current=Date.now(),this.elapsed=0,this.delta=16,this.params={et:0,dt:0}}onAttach(){this.play()}}Uo=new WeakMap,zl=new WeakMap;function WL(){const i=new GL,e=new HL;return{assetsManager:i,ticker:e}}let F0=class{constructor(e){this.position=new Be(e.position.x,e.position.y),this.type=e.type,this.typeStr=Object.keys(nl)[e.type],this.id=e.id}};var ts,Fo,ko,zo;class jL{constructor(){ve(this,ts,new Map);ve(this,Fo,new Map);ve(this,ko,new Map);ve(this,zo,new Map)}set(e,t){switch(G(this,ts).set(e,t),t.type){case nl.bronze:G(this,Fo).set(e,t);break;case nl.silver:G(this,ko).set(e,t);break;case nl.gold:G(this,zo).set(e,t);break}}get(e){return G(this,ts).get(e)}has(e){return G(this,ts).has(e)}delete(e){G(this,ts).delete(e),G(this,Fo).delete(e),G(this,ko).delete(e),G(this,zo).delete(e)}values(){return G(this,ts).values()}get bronzeSize(){return G(this,Fo).size}get silverSize(){return G(this,ko).size}get goldSize(){return G(this,zo).size}get size(){return G(this,ts).size}}ts=new WeakMap,Fo=new WeakMap,ko=new WeakMap,zo=new WeakMap;class k0{constructor({iso:e,position:t,medals:n={0:0,1:0,2:0}}){this.iso=e,this.position=new Be(t.x,t.y),this.medals=n}move(e){switch(e){case oc.up:this.position.y-=1;break;case oc.right:this.position.x+=1;break;case oc.down:this.position.y+=1;break;case oc.left:this.position.x-=1;break}return this}collect(e){return this.medals[e.type]++,this}}class XL{constructor(){this.teams=new Map,this.medals=new jL,this.domGameStore=Sf(),this.userId=null,this.currentTeam=null,this.voteId=null}setState(e){var t;this.userId=e.user_id,(t=e.medals)==null||t.forEach(n=>this.medals.set(n.id,new F0(n))),Object.entries(e.countries_states).forEach(([n,s])=>n!=="ALL"&&this.teams.set(n,new k0(s))),Ue.emit(Ye.STATE_READY,{teams:this.teams,medals:this.medals}),this.domGameStore.initScoreboard(this.teams),this.domGameStore.addMedals([...this.medals.values()])}userJoin(e){this.voteId=e.vote_id,this.currentTeam=this.teams.get(e.iso),Ue.emit(Ye.JOIN_READY,this.currentTeam),this.domGameStore.setPlayerCountry(this.currentTeam.iso)}createTeam(e){if(this.teams.has(e.iso))return console.error("Team already exists");const t=new k0(e);this.teams.set(e.iso,t),Ue.emit(Ye.CREATE_TEAM,t),this.domGameStore.addNewTeamToScoreboard(t)}addMedals(e){const t=[];e.medals.forEach(n=>{if(this.medals.has(n.id))return console.error("Medal already exists");const s=new F0(n);this.medals.set(n.id,s),t.push(s)}),this.domGameStore.addMedals(t),Ue.emit(Ye.SPAWN_MEDALS,t)}medalCollect(e){if(!this.teams.has(e.iso)||!this.medals.has(e.medal_id))return console.error("Medal or team doesn't exist");const t=this.teams.get(e.iso),n=this.medals.get(e.medal_id);t.collect(this.medals.get(e.medal_id)),this.medals.delete(e.medal_id),Ue.emit(Ye.COLLECT_MEDAL,n,t),this.domGameStore.updateScoreTeam(t)}voteResults(e){if(!this.teams.has(e.iso))return console.error("Team doesn't exist");if(e.direction===4)return;const t=this.teams.get(e.iso).move(e.direction);Ue.emit(Ye.VOTE_RESULTS,t)}userVote(e){Me.server.userVote(e)}}const YL={en:{head:{title:i=>{const{normalize:e}=i;return e(["Olympic Medal Rush"])},subtitle:i=>{const{normalize:e}=i;return e(["The Internet Olympics"])}},test:i=>{const{normalize:e}=i;return e(["hey"])},locale:i=>{const{normalize:e}=i;return e(["en"])},lang:i=>{const{normalize:e}=i;return e(["en"])}},es:{head:{title:i=>{const{normalize:e}=i;return e([])},subtitle:i=>{const{normalize:e}=i;return e([])}},test:i=>{const{normalize:e}=i;return e([])},locale:i=>{const{normalize:e}=i;return e(["es"])},lang:i=>{const{normalize:e}=i;return e(["es"])}},fr:{head:{title:i=>{const{normalize:e}=i;return e(["Olympic Medal Rush"])},subtitle:i=>{const{normalize:e}=i;return e(["L’épreuve olympique d’internet"])}},test:i=>{const{normalize:e}=i;return e(["coucou"])},locale:i=>{const{normalize:e}=i;return e(["fr"])},lang:i=>{const{normalize:e}=i;return e(["fr"])}}};var Bo,wu,Tu,Bl,dd,Eu,Ix,Au,Dx,Cu,Nx,Ru,Ox,Lu,Ux,Pu,Fx,Iu,kx,Du,zx,Nu,Bx;class qL{constructor(){ve(this,Bl);ve(this,Eu);ve(this,Au);ve(this,Cu);ve(this,Ru);ve(this,Lu);ve(this,Pu);ve(this,Iu);ve(this,Du);ve(this,Nu);ve(this,Bo,void 0);ve(this,wu,()=>{var e;(e=Me.debug)!=null&&e.urlParams.has("noServer")||(mt(this,Bo,new WebSocket("wss://olympics-wss.fly.dev/ws")),G(this,Bo).onmessage=G(this,Tu),console.info("Websocket connected"))});ve(this,Tu,e=>{const t=JSON.parse(e.data);Ve(this,Eu,Ix).call(this,Object.assign(new z0,t))});this.domGameStore=Sf(),Ue.on(Ye.APP_LOADED,G(this,wu))}userVote(e){console.log(e,"userVote"),Ve(this,Bl,dd).call(this,Ei.USER_VOTE,e)}userJoin(e){console.log(e,"userJoin"),Ve(this,Bl,dd).call(this,Ei.USER_JOIN,e)}}Bo=new WeakMap,wu=new WeakMap,Tu=new WeakMap,Bl=new WeakSet,dd=function(e,t){const n=new z0(e,t);G(this,Bo).send(JSON.stringify(n))},Eu=new WeakSet,Ix=function(e){switch(e.type){case Ei.GAME_STATE:Ve(this,Au,Dx).call(this,e.payload);break;case Ei.COUNTRY_STATE:Ve(this,Cu,Nx).call(this,e.payload);break;case Ei.VOTE_RESULTS:Ve(this,Ru,Ox).call(this,e.payload);break;case Ei.VOTE_COUNT:Ve(this,Lu,Ux).call(this,e.payload);break;case Ei.MEDAL_APPARITION:Ve(this,Pu,Fx).call(this,e.payload);break;case Ei.MEDAL_COLLECTION:Ve(this,Iu,kx).call(this,e.payload);break;case Ei.NEW_COUNTRY:Ve(this,Nu,Bx).call(this,e.payload);break;case Ei.PLAYER_COUNT:Ve(this,Du,zx).call(this,e.payload);break}},Au=new WeakSet,Dx=function(e){console.log(e,"onGameState"),vp.set(pp.USER_ID,e.user_id),Me.game.setState(e)},Cu=new WeakSet,Nx=function(e){console.log(e,"onCountryState"),this.domGameStore.updatePlayersCounter(e.player_count),Me.game.userJoin(e)},Ru=new WeakSet,Ox=function(e){console.log(e,"onVoteResults"),Me.game.voteResults(e)},Lu=new WeakSet,Ux=function(e){console.log(e,"onVoteCount")},Pu=new WeakSet,Fx=function(e){console.log(e,"onMedalApparition"),Me.game.addMedals(e)},Iu=new WeakSet,kx=function(e){console.log(e,"onMedalCollection"),Me.game.medalCollect(e)},Du=new WeakSet,zx=function(e){console.log(e,"onPlayerCount"),this.domGameStore.updatePlayersCounter(e.count)},Nu=new WeakSet,Bx=function(e){console.log(e,"onNewCountry"),Me.game.createTeam(e)};class z0{constructor(e,t){this.type=e,this.payload=t}}/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const pd=typeof window<"u",$L=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",nr=i=>$L?Symbol(i):i,KL=(i,e,t)=>ZL({l:i,k:e,s:t}),ZL=i=>JSON.stringify(i).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Yt=i=>typeof i=="number"&&isFinite(i),JL=i=>kp(i)==="[object Date]",fu=i=>kp(i)==="[object RegExp]",Tf=i=>et(i)&&Object.keys(i).length===0;function QL(i,e){typeof console<"u"&&(console.warn("[intlify] "+i),e&&console.warn(e.stack))}const bn=Object.assign;let B0;const Up=()=>B0||(B0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function V0(i){return i.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const eP=Object.prototype.hasOwnProperty;function Fp(i,e){return eP.call(i,e)}const Nt=Array.isArray,Zt=i=>typeof i=="function",Re=i=>typeof i=="string",Ct=i=>typeof i=="boolean",ht=i=>i!==null&&typeof i=="object",Vx=Object.prototype.toString,kp=i=>Vx.call(i),et=i=>kp(i)==="[object Object]",tP=i=>i==null?"":Nt(i)||et(i)&&i.toString===Vx?JSON.stringify(i,null,2):String(i);/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Gx={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,__EXTEND_POINT__:15};function Hx(i,e,t={}){const{domain:n,messages:s,args:r}=t,o=i,a=new SyntaxError(String(o));return a.code=i,e&&(a.location=e),a.domain=n,a}/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Wx={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const ir=[];ir[0]={w:[0],i:[3,0],["["]:[4],o:[7]};ir[1]={w:[1],["."]:[2],["["]:[4],o:[7]};ir[2]={w:[2],i:[3,0],[0]:[3,0]};ir[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};ir[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};ir[5]={["'"]:[4,0],o:8,l:[5,0]};ir[6]={['"']:[4,0],o:8,l:[6,0]};const nP=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function iP(i){return nP.test(i)}function sP(i){const e=i.charCodeAt(0),t=i.charCodeAt(i.length-1);return e===t&&(e===34||e===39)?i.slice(1,-1):i}function rP(i){if(i==null)return"o";switch(i.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return i;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function oP(i){const e=i.trim();return i.charAt(0)==="0"&&isNaN(parseInt(i))?!1:iP(e)?sP(e):"*"+e}function aP(i){const e=[];let t=-1,n=0,s=0,r,o,a,l,c,u,f;const h=[];h[0]=()=>{o===void 0?o=a:o+=a},h[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},h[2]=()=>{h[0](),s++},h[3]=()=>{if(s>0)s--,n=4,h[0]();else{if(s=0,o===void 0||(o=oP(o),o===!1))return!1;h[1]()}};function p(){const g=i[t+1];if(n===5&&g==="'"||n===6&&g==='"')return t++,a="\\"+g,h[0](),!0}for(;n!==null;)if(t++,r=i[t],!(r==="\\"&&p())){if(l=rP(r),f=ir[n],c=f[l]||f.l||8,c===8||(n=c[0],c[1]!==void 0&&(u=h[c[1]],u&&(a=r,u()===!1))))return;if(n===7)return e}}const G0=new Map;function lP(i,e){return ht(i)?i[e]:null}function cP(i,e){if(!ht(i))return null;let t=G0.get(e);if(t||(t=aP(e),t&&G0.set(e,t)),!t)return null;const n=t.length;let s=i,r=0;for(;r<n;){const o=s[t[r]];if(o===void 0)return null;s=o,r++}return s}const uP=i=>i,fP=i=>"",hP="text",dP=i=>i.length===0?"":i.join(""),pP=tP;function H0(i,e){return i=Math.abs(i),e===2?i?i>1?1:0:1:i?Math.min(i,2):0}function mP(i){const e=Yt(i.pluralIndex)?i.pluralIndex:-1;return i.named&&(Yt(i.named.count)||Yt(i.named.n))?Yt(i.named.count)?i.named.count:Yt(i.named.n)?i.named.n:e:e}function gP(i,e){e.count||(e.count=i),e.n||(e.n=i)}function _P(i={}){const e=i.locale,t=mP(i),n=ht(i.pluralRules)&&Re(e)&&Zt(i.pluralRules[e])?i.pluralRules[e]:H0,s=ht(i.pluralRules)&&Re(e)&&Zt(i.pluralRules[e])?H0:void 0,r=_=>_[n(t,_.length,s)],o=i.list||[],a=_=>o[_],l=i.named||{};Yt(i.pluralIndex)&&gP(t,l);const c=_=>l[_];function u(_){const x=Zt(i.messages)?i.messages(_):ht(i.messages)?i.messages[_]:!1;return x||(i.parent?i.parent.message(_):fP)}const f=_=>i.modifiers?i.modifiers[_]:uP,h=et(i.processor)&&Zt(i.processor.normalize)?i.processor.normalize:dP,p=et(i.processor)&&Zt(i.processor.interpolate)?i.processor.interpolate:pP,g=et(i.processor)&&Re(i.processor.type)?i.processor.type:hP,m={list:a,named:c,plural:r,linked:(_,...x)=>{const[v,y]=x;let M="text",E="";x.length===1?ht(v)?(E=v.modifier||E,M=v.type||M):Re(v)&&(E=v||E):x.length===2&&(Re(v)&&(E=v||E),Re(y)&&(M=y||M));let A=u(_)(m);return M==="vnode"&&Nt(A)&&E&&(A=A[0]),E?f(E)(A,M):A},message:u,type:g,interpolate:p,normalize:h};return m}let Al=null;function vP(i){Al=i}function xP(i,e,t){Al&&Al.emit(Wx.I18nInit,{timestamp:Date.now(),i18n:i,version:e,meta:t})}const yP=bP(Wx.FunctionTranslate);function bP(i){return e=>Al&&Al.emit(i,e)}function MP(i,e,t){return[...new Set([t,...Nt(e)?e:ht(e)?Object.keys(e):Re(e)?[e]:[t]])]}function jx(i,e,t){const n=Re(t)?t:zp,s=i;s.__localeChainCache||(s.__localeChainCache=new Map);let r=s.__localeChainCache.get(n);if(!r){r=[];let o=[t];for(;Nt(o);)o=W0(r,o,e);const a=Nt(e)||!et(e)?e:e.default?e.default:null;o=Re(a)?[a]:a,Nt(o)&&W0(r,o,!1),s.__localeChainCache.set(n,r)}return r}function W0(i,e,t){let n=!0;for(let s=0;s<e.length&&Ct(n);s++){const r=e[s];Re(r)&&(n=SP(i,e[s],t))}return n}function SP(i,e,t){let n;const s=e.split("-");do{const r=s.join("-");n=wP(i,r,t),s.splice(-1,1)}while(s.length&&n===!0);return n}function wP(i,e,t){let n=!1;if(!i.includes(e)&&(n=!0,e)){n=e[e.length-1]!=="!";const s=e.replace(/!/g,"");i.push(s),(Nt(t)||et(t))&&t[s]&&(n=t[s])}return n}const TP="9.2.2",Ef=-1,zp="en-US",j0="",X0=i=>`${i.charAt(0).toLocaleUpperCase()}${i.substr(1)}`;function EP(){return{upper:(i,e)=>e==="text"&&Re(i)?i.toUpperCase():e==="vnode"&&ht(i)&&"__v_isVNode"in i?i.children.toUpperCase():i,lower:(i,e)=>e==="text"&&Re(i)?i.toLowerCase():e==="vnode"&&ht(i)&&"__v_isVNode"in i?i.children.toLowerCase():i,capitalize:(i,e)=>e==="text"&&Re(i)?X0(i):e==="vnode"&&ht(i)&&"__v_isVNode"in i?X0(i.children):i}}let AP,Xx;function CP(i){Xx=i}let Yx;function RP(i){Yx=i}let qx=null;const Y0=i=>{qx=i},LP=()=>qx;let $x=null;const q0=i=>{$x=i},PP=()=>$x;let $0=0;function IP(i={}){const e=Re(i.version)?i.version:TP,t=Re(i.locale)?i.locale:zp,n=Nt(i.fallbackLocale)||et(i.fallbackLocale)||Re(i.fallbackLocale)||i.fallbackLocale===!1?i.fallbackLocale:t,s=et(i.messages)?i.messages:{[t]:{}},r=et(i.datetimeFormats)?i.datetimeFormats:{[t]:{}},o=et(i.numberFormats)?i.numberFormats:{[t]:{}},a=bn({},i.modifiers||{},EP()),l=i.pluralRules||{},c=Zt(i.missing)?i.missing:null,u=Ct(i.missingWarn)||fu(i.missingWarn)?i.missingWarn:!0,f=Ct(i.fallbackWarn)||fu(i.fallbackWarn)?i.fallbackWarn:!0,h=!!i.fallbackFormat,p=!!i.unresolving,g=Zt(i.postTranslation)?i.postTranslation:null,d=et(i.processor)?i.processor:null,m=Ct(i.warnHtmlMessage)?i.warnHtmlMessage:!0,_=!!i.escapeParameter,x=Zt(i.messageCompiler)?i.messageCompiler:AP,v=Zt(i.messageResolver)?i.messageResolver:Xx||lP,y=Zt(i.localeFallbacker)?i.localeFallbacker:Yx||MP,M=ht(i.fallbackContext)?i.fallbackContext:void 0,E=Zt(i.onWarn)?i.onWarn:QL,A=i,b=ht(A.__datetimeFormatters)?A.__datetimeFormatters:new Map,T=ht(A.__numberFormatters)?A.__numberFormatters:new Map,P=ht(A.__meta)?A.__meta:{};$0++;const I={version:e,cid:$0,locale:t,fallbackLocale:n,messages:s,modifiers:a,pluralRules:l,missing:c,missingWarn:u,fallbackWarn:f,fallbackFormat:h,unresolving:p,postTranslation:g,processor:d,warnHtmlMessage:m,escapeParameter:_,messageCompiler:x,messageResolver:v,localeFallbacker:y,fallbackContext:M,onWarn:E,__meta:P};return I.datetimeFormats=r,I.numberFormats=o,I.__datetimeFormatters=b,I.__numberFormatters=T,__INTLIFY_PROD_DEVTOOLS__&&xP(I,e,P),I}function Bp(i,e,t,n,s){const{missing:r,onWarn:o}=i;if(r!==null){const a=r(i,t,e,s);return Re(a)?a:e}else return e}function Ha(i,e,t){const n=i;n.__localeChainCache=new Map,i.localeFallbacker(i,t,e)}let Kx=Gx.__EXTEND_POINT__;const Eh=()=>++Kx,vo={INVALID_ARGUMENT:Kx,INVALID_DATE_ARGUMENT:Eh(),INVALID_ISO_DATE_ARGUMENT:Eh(),__EXTEND_POINT__:Eh()};function xo(i){return Hx(i,null,void 0)}const K0=()=>"",Ni=i=>Zt(i);function Z0(i,...e){const{fallbackFormat:t,postTranslation:n,unresolving:s,messageCompiler:r,fallbackLocale:o,messages:a}=i,[l,c]=md(...e),u=Ct(c.missingWarn)?c.missingWarn:i.missingWarn,f=Ct(c.fallbackWarn)?c.fallbackWarn:i.fallbackWarn,h=Ct(c.escapeParameter)?c.escapeParameter:i.escapeParameter,p=!!c.resolvedMessage,g=Re(c.default)||Ct(c.default)?Ct(c.default)?r?l:()=>l:c.default:t?r?l:()=>l:"",d=t||g!=="",m=Re(c.locale)?c.locale:i.locale;h&&DP(c);let[_,x,v]=p?[l,m,a[m]||{}]:Zx(i,l,m,o,f,u),y=_,M=l;if(!p&&!(Re(y)||Ni(y))&&d&&(y=g,M=y),!p&&(!(Re(y)||Ni(y))||!Re(x)))return s?Ef:l;let E=!1;const A=()=>{E=!0},b=Ni(y)?y:Jx(i,l,x,y,M,A);if(E)return y;const T=UP(i,x,v,c),P=_P(T),I=NP(i,b,P),q=n?n(I,l):I;if(__INTLIFY_PROD_DEVTOOLS__){const N={timestamp:Date.now(),key:Re(l)?l:Ni(y)?y.key:"",locale:x||(Ni(y)?y.locale:""),format:Re(y)?y:Ni(y)?y.source:"",message:q};N.meta=bn({},i.__meta,LP()||{}),yP(N)}return q}function DP(i){Nt(i.list)?i.list=i.list.map(e=>Re(e)?V0(e):e):ht(i.named)&&Object.keys(i.named).forEach(e=>{Re(i.named[e])&&(i.named[e]=V0(i.named[e]))})}function Zx(i,e,t,n,s,r){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=i,u=c(i,n,t);let f={},h,p=null;const g="translate";for(let d=0;d<u.length&&(h=u[d],f=o[h]||{},(p=l(f,e))===null&&(p=f[e]),!(Re(p)||Zt(p)));d++){const m=Bp(i,e,h,r,g);m!==e&&(p=m)}return[p,h,f]}function Jx(i,e,t,n,s,r){const{messageCompiler:o,warnHtmlMessage:a}=i;if(Ni(n)){const c=n;return c.locale=c.locale||t,c.key=c.key||e,c}if(o==null){const c=()=>n;return c.locale=t,c.key=e,c}const l=o(n,OP(i,t,s,n,a,r));return l.locale=t,l.key=e,l.source=n,l}function NP(i,e,t){return e(t)}function md(...i){const[e,t,n]=i,s={};if(!Re(e)&&!Yt(e)&&!Ni(e))throw xo(vo.INVALID_ARGUMENT);const r=Yt(e)?String(e):(Ni(e),e);return Yt(t)?s.plural=t:Re(t)?s.default=t:et(t)&&!Tf(t)?s.named=t:Nt(t)&&(s.list=t),Yt(n)?s.plural=n:Re(n)?s.default=n:et(n)&&bn(s,n),[r,s]}function OP(i,e,t,n,s,r){return{warnHtmlMessage:s,onError:o=>{throw r&&r(o),o},onCacheKey:o=>KL(e,t,o)}}function UP(i,e,t,n){const{modifiers:s,pluralRules:r,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=i,h={locale:e,modifiers:s,pluralRules:r,messages:p=>{let g=o(t,p);if(g==null&&u){const[,,d]=Zx(u,p,e,a,l,c);g=o(d,p)}if(Re(g)){let d=!1;const _=Jx(i,p,e,g,p,()=>{d=!0});return d?K0:_}else return Ni(g)?g:K0}};return i.processor&&(h.processor=i.processor),n.list&&(h.list=n.list),n.named&&(h.named=n.named),Yt(n.plural)&&(h.pluralIndex=n.plural),h}function J0(i,...e){const{datetimeFormats:t,unresolving:n,fallbackLocale:s,onWarn:r,localeFallbacker:o}=i,{__datetimeFormatters:a}=i,[l,c,u,f]=gd(...e),h=Ct(u.missingWarn)?u.missingWarn:i.missingWarn;Ct(u.fallbackWarn)?u.fallbackWarn:i.fallbackWarn;const p=!!u.part,g=Re(u.locale)?u.locale:i.locale,d=o(i,s,g);if(!Re(l)||l==="")return new Intl.DateTimeFormat(g,f).format(c);let m={},_,x=null;const v="datetime format";for(let E=0;E<d.length&&(_=d[E],m=t[_]||{},x=m[l],!et(x));E++)Bp(i,l,_,h,v);if(!et(x)||!Re(_))return n?Ef:l;let y=`${_}__${l}`;Tf(f)||(y=`${y}__${JSON.stringify(f)}`);let M=a.get(y);return M||(M=new Intl.DateTimeFormat(_,bn({},x,f)),a.set(y,M)),p?M.formatToParts(c):M.format(c)}const Qx=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function gd(...i){const[e,t,n,s]=i,r={};let o={},a;if(Re(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw xo(vo.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw xo(vo.INVALID_ISO_DATE_ARGUMENT)}}else if(JL(e)){if(isNaN(e.getTime()))throw xo(vo.INVALID_DATE_ARGUMENT);a=e}else if(Yt(e))a=e;else throw xo(vo.INVALID_ARGUMENT);return Re(t)?r.key=t:et(t)&&Object.keys(t).forEach(l=>{Qx.includes(l)?o[l]=t[l]:r[l]=t[l]}),Re(n)?r.locale=n:et(n)&&(o=n),et(s)&&(o=s),[r.key||"",a,r,o]}function Q0(i,e,t){const n=i;for(const s in t){const r=`${e}__${s}`;n.__datetimeFormatters.has(r)&&n.__datetimeFormatters.delete(r)}}function e_(i,...e){const{numberFormats:t,unresolving:n,fallbackLocale:s,onWarn:r,localeFallbacker:o}=i,{__numberFormatters:a}=i,[l,c,u,f]=_d(...e),h=Ct(u.missingWarn)?u.missingWarn:i.missingWarn;Ct(u.fallbackWarn)?u.fallbackWarn:i.fallbackWarn;const p=!!u.part,g=Re(u.locale)?u.locale:i.locale,d=o(i,s,g);if(!Re(l)||l==="")return new Intl.NumberFormat(g,f).format(c);let m={},_,x=null;const v="number format";for(let E=0;E<d.length&&(_=d[E],m=t[_]||{},x=m[l],!et(x));E++)Bp(i,l,_,h,v);if(!et(x)||!Re(_))return n?Ef:l;let y=`${_}__${l}`;Tf(f)||(y=`${y}__${JSON.stringify(f)}`);let M=a.get(y);return M||(M=new Intl.NumberFormat(_,bn({},x,f)),a.set(y,M)),p?M.formatToParts(c):M.format(c)}const ey=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function _d(...i){const[e,t,n,s]=i,r={};let o={};if(!Yt(e))throw xo(vo.INVALID_ARGUMENT);const a=e;return Re(t)?r.key=t:et(t)&&Object.keys(t).forEach(l=>{ey.includes(l)?o[l]=t[l]:r[l]=t[l]}),Re(n)?r.locale=n:et(n)&&(o=n),et(s)&&(o=s),[r.key||"",a,r,o]}function t_(i,e,t){const n=i;for(const s in t){const r=`${e}__${s}`;n.__numberFormatters.has(r)&&n.__numberFormatters.delete(r)}}typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Up().__INTLIFY_PROD_DEVTOOLS__=!1);/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const FP="9.2.2";function kP(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Up().__INTLIFY_PROD_DEVTOOLS__=!1)}let ty=Gx.__EXTEND_POINT__;const Mn=()=>++ty,jn={UNEXPECTED_RETURN_TYPE:ty,INVALID_ARGUMENT:Mn(),MUST_BE_CALL_SETUP_TOP:Mn(),NOT_INSLALLED:Mn(),NOT_AVAILABLE_IN_LEGACY_MODE:Mn(),REQUIRED_VALUE:Mn(),INVALID_VALUE:Mn(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:Mn(),NOT_INSLALLED_WITH_PROVIDE:Mn(),UNEXPECTED_ERROR:Mn(),NOT_COMPATIBLE_LEGACY_VUE_I18N:Mn(),BRIDGE_SUPPORT_VUE_2_ONLY:Mn(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:Mn(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:Mn(),__EXTEND_POINT__:Mn()};function si(i,...e){return Hx(i,null,void 0)}const vd=nr("__transrateVNode"),xd=nr("__datetimeParts"),yd=nr("__numberParts"),zP=nr("__setPluralRules");nr("__intlifyMeta");const BP=nr("__injectWithOption");function bd(i){if(!ht(i))return i;for(const e in i)if(Fp(i,e))if(!e.includes("."))ht(i[e])&&bd(i[e]);else{const t=e.split("."),n=t.length-1;let s=i;for(let r=0;r<n;r++)t[r]in s||(s[t[r]]={}),s=s[t[r]];s[t[n]]=i[e],delete i[e],ht(s[t[n]])&&bd(s[t[n]])}return i}function ny(i,e){const{messages:t,__i18n:n,messageResolver:s,flatJson:r}=e,o=et(t)?t:Nt(n)?{}:{[i]:{}};if(Nt(n)&&n.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(o[l]=o[l]||{},ll(c,o[l])):ll(c,o)}else Re(a)&&ll(JSON.parse(a),o)}),s==null&&r)for(const a in o)Fp(o,a)&&bd(o[a]);return o}const Dc=i=>!ht(i)||Nt(i);function ll(i,e){if(Dc(i)||Dc(e))throw si(jn.INVALID_VALUE);for(const t in i)Fp(i,t)&&(Dc(i[t])||Dc(e[t])?e[t]=i[t]:ll(i[t],e[t]))}function iy(i){return i.type}function VP(i,e,t){let n=ht(e.messages)?e.messages:{};"__i18nGlobal"in t&&(n=ny(i.locale.value,{messages:n,__i18n:t.__i18nGlobal}));const s=Object.keys(n);s.length&&s.forEach(r=>{i.mergeLocaleMessage(r,n[r])});{if(ht(e.datetimeFormats)){const r=Object.keys(e.datetimeFormats);r.length&&r.forEach(o=>{i.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(ht(e.numberFormats)){const r=Object.keys(e.numberFormats);r.length&&r.forEach(o=>{i.mergeNumberFormat(o,e.numberFormats[o])})}}}function n_(i){return Dt(Yl,null,i,0)}const i_="__INTLIFY_META__";let s_=0;function r_(i){return(e,t,n,s)=>i(t,n,pf()||void 0,s)}const GP=()=>{const i=pf();let e=null;return i&&(e=iy(i)[i_])?{[i_]:e}:null};function sy(i={},e){const{__root:t}=i,n=t===void 0;let s=Ct(i.inheritLocale)?i.inheritLocale:!0;const r=hi(t&&s?t.locale.value:Re(i.locale)?i.locale:zp),o=hi(t&&s?t.fallbackLocale.value:Re(i.fallbackLocale)||Nt(i.fallbackLocale)||et(i.fallbackLocale)||i.fallbackLocale===!1?i.fallbackLocale:r.value),a=hi(ny(r.value,i)),l=hi(et(i.datetimeFormats)?i.datetimeFormats:{[r.value]:{}}),c=hi(et(i.numberFormats)?i.numberFormats:{[r.value]:{}});let u=t?t.missingWarn:Ct(i.missingWarn)||fu(i.missingWarn)?i.missingWarn:!0,f=t?t.fallbackWarn:Ct(i.fallbackWarn)||fu(i.fallbackWarn)?i.fallbackWarn:!0,h=t?t.fallbackRoot:Ct(i.fallbackRoot)?i.fallbackRoot:!0,p=!!i.fallbackFormat,g=Zt(i.missing)?i.missing:null,d=Zt(i.missing)?r_(i.missing):null,m=Zt(i.postTranslation)?i.postTranslation:null,_=t?t.warnHtmlMessage:Ct(i.warnHtmlMessage)?i.warnHtmlMessage:!0,x=!!i.escapeParameter;const v=t?t.modifiers:et(i.modifiers)?i.modifiers:{};let y=i.pluralRules||t&&t.pluralRules,M;M=(()=>{n&&q0(null);const w={version:FP,locale:r.value,fallbackLocale:o.value,messages:a.value,modifiers:v,pluralRules:y,missing:d===null?void 0:d,missingWarn:u,fallbackWarn:f,fallbackFormat:p,unresolving:!0,postTranslation:m===null?void 0:m,warnHtmlMessage:_,escapeParameter:x,messageResolver:i.messageResolver,__meta:{framework:"vue"}};w.datetimeFormats=l.value,w.numberFormats=c.value,w.__datetimeFormatters=et(M)?M.__datetimeFormatters:void 0,w.__numberFormatters=et(M)?M.__numberFormatters:void 0;const S=IP(w);return n&&q0(S),S})(),Ha(M,r.value,o.value);function A(){return[r.value,o.value,a.value,l.value,c.value]}const b=Ft({get:()=>r.value,set:w=>{r.value=w,M.locale=r.value}}),T=Ft({get:()=>o.value,set:w=>{o.value=w,M.fallbackLocale=o.value,Ha(M,r.value,w)}}),P=Ft(()=>a.value),I=Ft(()=>l.value),q=Ft(()=>c.value);function N(){return Zt(m)?m:null}function D(w){m=w,M.postTranslation=w}function O(){return g}function $(w){w!==null&&(d=r_(w)),g=w,M.missing=d}const j=(w,S,F,K,ie,de)=>{A();let xe;if(__INTLIFY_PROD_DEVTOOLS__)try{Y0(GP()),n||(M.fallbackContext=t?PP():void 0),xe=w(M)}finally{Y0(null),n||(M.fallbackContext=void 0)}else xe=w(M);if(Yt(xe)&&xe===Ef){const[ye,se]=S();return t&&h?K(t):ie(ye)}else{if(de(xe))return xe;throw si(jn.UNEXPECTED_RETURN_TYPE)}};function V(...w){return j(S=>Reflect.apply(Z0,null,[S,...w]),()=>md(...w),"translate",S=>Reflect.apply(S.t,S,[...w]),S=>S,S=>Re(S))}function re(...w){const[S,F,K]=w;if(K&&!ht(K))throw si(jn.INVALID_ARGUMENT);return V(S,F,bn({resolvedMessage:!0},K||{}))}function he(...w){return j(S=>Reflect.apply(J0,null,[S,...w]),()=>gd(...w),"datetime format",S=>Reflect.apply(S.d,S,[...w]),()=>j0,S=>Re(S))}function be(...w){return j(S=>Reflect.apply(e_,null,[S,...w]),()=>_d(...w),"number format",S=>Reflect.apply(S.n,S,[...w]),()=>j0,S=>Re(S))}function X(w){return w.map(S=>Re(S)||Yt(S)||Ct(S)?n_(String(S)):S)}const pe={normalize:X,interpolate:w=>w,type:"vnode"};function H(...w){return j(S=>{let F;const K=S;try{K.processor=pe,F=Reflect.apply(Z0,null,[K,...w])}finally{K.processor=null}return F},()=>md(...w),"translate",S=>S[vd](...w),S=>[n_(S)],S=>Nt(S))}function Se(...w){return j(S=>Reflect.apply(e_,null,[S,...w]),()=>_d(...w),"number format",S=>S[yd](...w),()=>[],S=>Re(S)||Nt(S))}function B(...w){return j(S=>Reflect.apply(J0,null,[S,...w]),()=>gd(...w),"datetime format",S=>S[xd](...w),()=>[],S=>Re(S)||Nt(S))}function Q(w){y=w,M.pluralRules=y}function Z(w,S){const F=Re(S)?S:r.value,K=C(F);return M.messageResolver(K,w)!==null}function oe(w){let S=null;const F=jx(M,o.value,r.value);for(let K=0;K<F.length;K++){const ie=a.value[F[K]]||{},de=M.messageResolver(ie,w);if(de!=null){S=de;break}}return S}function Te(w){const S=oe(w);return S??(t?t.tm(w)||{}:{})}function C(w){return a.value[w]||{}}function L(w,S){a.value[w]=S,M.messages=a.value}function k(w,S){a.value[w]=a.value[w]||{},ll(S,a.value[w]),M.messages=a.value}function J(w){return l.value[w]||{}}function te(w,S){l.value[w]=S,M.datetimeFormats=l.value,Q0(M,w,S)}function ce(w,S){l.value[w]=bn(l.value[w]||{},S),M.datetimeFormats=l.value,Q0(M,w,S)}function me(w){return c.value[w]||{}}function fe(w,S){c.value[w]=S,M.numberFormats=c.value,t_(M,w,S)}function _e(w,S){c.value[w]=bn(c.value[w]||{},S),M.numberFormats=c.value,t_(M,w,S)}s_++,t&&pd&&(js(t.locale,w=>{s&&(r.value=w,M.locale=w,Ha(M,r.value,o.value))}),js(t.fallbackLocale,w=>{s&&(o.value=w,M.fallbackLocale=w,Ha(M,r.value,o.value))}));const ee={id:s_,locale:b,fallbackLocale:T,get inheritLocale(){return s},set inheritLocale(w){s=w,w&&t&&(r.value=t.locale.value,o.value=t.fallbackLocale.value,Ha(M,r.value,o.value))},get availableLocales(){return Object.keys(a.value).sort()},messages:P,get modifiers(){return v},get pluralRules(){return y||{}},get isGlobal(){return n},get missingWarn(){return u},set missingWarn(w){u=w,M.missingWarn=u},get fallbackWarn(){return f},set fallbackWarn(w){f=w,M.fallbackWarn=f},get fallbackRoot(){return h},set fallbackRoot(w){h=w},get fallbackFormat(){return p},set fallbackFormat(w){p=w,M.fallbackFormat=p},get warnHtmlMessage(){return _},set warnHtmlMessage(w){_=w,M.warnHtmlMessage=w},get escapeParameter(){return x},set escapeParameter(w){x=w,M.escapeParameter=w},t:V,getLocaleMessage:C,setLocaleMessage:L,mergeLocaleMessage:k,getPostTranslationHandler:N,setPostTranslationHandler:D,getMissingHandler:O,setMissingHandler:$,[zP]:Q};return ee.datetimeFormats=I,ee.numberFormats=q,ee.rt=re,ee.te=Z,ee.tm=Te,ee.d=he,ee.n=be,ee.getDateTimeFormat=J,ee.setDateTimeFormat=te,ee.mergeDateTimeFormat=ce,ee.getNumberFormat=me,ee.setNumberFormat=fe,ee.mergeNumberFormat=_e,ee[BP]=i.__injectWithOption,ee[vd]=H,ee[xd]=B,ee[yd]=Se,ee}const Vp={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:i=>i==="parent"||i==="global",default:"parent"},i18n:{type:Object}};function HP({slots:i},e){return e.length===1&&e[0]==="default"?(i.default?i.default():[]).reduce((n,s)=>n=[...n,...Nt(s.children)?s.children:[s]],[]):e.reduce((t,n)=>{const s=i[n];return s&&(t[n]=s()),t},{})}function ry(i){return Qn}const o_={name:"i18n-t",props:bn({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:i=>Yt(i)||!isNaN(i)}},Vp),setup(i,e){const{slots:t,attrs:n}=e,s=i.i18n||Gp({useScope:i.scope,__useComponent:!0});return()=>{const r=Object.keys(t).filter(f=>f!=="_"),o={};i.locale&&(o.locale=i.locale),i.plural!==void 0&&(o.plural=Re(i.plural)?+i.plural:i.plural);const a=HP(e,r),l=s[vd](i.keypath,a,o),c=bn({},n),u=Re(i.tag)||ht(i.tag)?i.tag:ry();return mf(u,c,l)}}};function WP(i){return Nt(i)&&!Re(i[0])}function oy(i,e,t,n){const{slots:s,attrs:r}=e;return()=>{const o={part:!0};let a={};i.locale&&(o.locale=i.locale),Re(i.format)?o.key=i.format:ht(i.format)&&(Re(i.format.key)&&(o.key=i.format.key),a=Object.keys(i.format).reduce((h,p)=>t.includes(p)?bn({},h,{[p]:i.format[p]}):h,{}));const l=n(i.value,o,a);let c=[o.key];Nt(l)?c=l.map((h,p)=>{const g=s[h.type],d=g?g({[h.type]:h.value,index:p,parts:l}):[h.value];return WP(d)&&(d[0].key=`${h.type}-${p}`),d}):Re(l)&&(c=[l]);const u=bn({},r),f=Re(i.tag)||ht(i.tag)?i.tag:ry();return mf(f,u,c)}}const a_={name:"i18n-n",props:bn({value:{type:Number,required:!0},format:{type:[String,Object]}},Vp),setup(i,e){const t=i.i18n||Gp({useScope:"parent",__useComponent:!0});return oy(i,e,ey,(...n)=>t[yd](...n))}},l_={name:"i18n-d",props:bn({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Vp),setup(i,e){const t=i.i18n||Gp({useScope:"parent",__useComponent:!0});return oy(i,e,Qx,(...n)=>t[xd](...n))}};function jP(i,e){const t=i;if(i.mode==="composition")return t.__getInstance(e)||i.global;{const n=t.__getInstance(e);return n!=null?n.__composer:i.global.__composer}}function XP(i){const e=o=>{const{instance:a,modifiers:l,value:c}=o;if(!a||!a.$)throw si(jn.UNEXPECTED_ERROR);const u=jP(i,a.$),f=c_(c);return[Reflect.apply(u.t,u,[...u_(f)]),u]};return{created:(o,a)=>{const[l,c]=e(a);pd&&i.global===c&&(o.__i18nWatcher=js(c.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{pd&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,c=c_(a);o.textContent=Reflect.apply(l.t,l,[...u_(c)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function c_(i){if(Re(i))return{path:i};if(et(i)){if(!("path"in i))throw si(jn.REQUIRED_VALUE,"path");return i}else throw si(jn.INVALID_VALUE)}function u_(i){const{path:e,locale:t,args:n,choice:s,plural:r}=i,o={},a=n||{};return Re(t)&&(o.locale=t),Yt(s)&&(o.plural=s),Yt(r)&&(o.plural=r),[e,a,o]}function YP(i,e,...t){const n=et(t[0])?t[0]:{},s=!!n.useI18nComponentName;(Ct(n.globalInstall)?n.globalInstall:!0)&&(i.component(s?"i18n":o_.name,o_),i.component(a_.name,a_),i.component(l_.name,l_)),i.directive("t",XP(e))}const qP=nr("global-vue-i18n");function $P(i={},e){const t=Ct(i.globalInjection)?i.globalInjection:!0,n=!0,s=new Map,[r,o]=KP(i),a=nr("");function l(f){return s.get(f)||null}function c(f,h){s.set(f,h)}function u(f){s.delete(f)}{const f={get mode(){return"composition"},get allowComposition(){return n},async install(h,...p){h.__VUE_I18N_SYMBOL__=a,h.provide(h.__VUE_I18N_SYMBOL__,f),t&&sI(h,f.global),YP(h,f,...p);const g=h.unmount;h.unmount=()=>{f.dispose(),g()}},get global(){return o},dispose(){r.stop()},__instances:s,__getInstance:l,__setInstance:c,__deleteInstance:u};return f}}function Gp(i={}){const e=pf();if(e==null)throw si(jn.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw si(jn.NOT_INSLALLED);const t=ZP(e),n=QP(t),s=iy(e),r=JP(i,s);if(r==="global")return VP(n,i,s),n;if(r==="parent"){let l=eI(t,e,i.__useComponent);return l==null&&(l=n),l}const o=t;let a=o.__getInstance(e);if(a==null){const l=bn({},i);"__i18n"in s&&(l.__i18n=s.__i18n),n&&(l.__root=n),a=sy(l),tI(o,e),o.__setInstance(e,a)}return a}function KP(i,e,t){const n=$d();{const s=n.run(()=>sy(i));if(s==null)throw si(jn.UNEXPECTED_ERROR);return[n,s]}}function ZP(i){{const e=vi(i.isCE?qP:i.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw si(i.isCE?jn.NOT_INSLALLED_WITH_PROVIDE:jn.UNEXPECTED_ERROR);return e}}function JP(i,e){return Tf(i)?"__i18n"in e?"local":"global":i.useScope?i.useScope:"local"}function QP(i){return i.mode==="composition"?i.global:i.global.__composer}function eI(i,e,t=!1){let n=null;const s=e.root;let r=e.parent;for(;r!=null;){const o=i;if(i.mode==="composition"&&(n=o.__getInstance(r)),n!=null||s===r)break;r=r.parent}return n}function tI(i,e,t){ap(()=>{},e),lp(()=>{i.__deleteInstance(e)},e)}const nI=["locale","fallbackLocale","availableLocales"],iI=["t","rt","d","n","tm"];function sI(i,e){const t=Object.create(null);nI.forEach(n=>{const s=Object.getOwnPropertyDescriptor(e,n);if(!s)throw si(jn.UNEXPECTED_ERROR);const r=Mt(s.value)?{get(){return s.value.value},set(o){s.value.value=o}}:{get(){return s.get&&s.get()}};Object.defineProperty(t,n,r)}),i.config.globalProperties.$i18n=t,iI.forEach(n=>{const s=Object.getOwnPropertyDescriptor(e,n);if(!s||!s.value)throw si(jn.UNEXPECTED_ERROR);Object.defineProperty(i.config.globalProperties,`$${n}`,s)})}CP(cP);RP(jx);kP();if(__INTLIFY_PROD_DEVTOOLS__){const i=Up();i.__INTLIFY__=!0,vP(i.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}async function rI(){await qa(()=>Promise.resolve({}),["assets/debug-97656c10.css"]);const{URLParams:i}=await qa(()=>import("./URLParams-01742ef5.js"),["assets/URLParams-01742ef5.js","assets/debugConfig-5b4f09a7.js"]),e=new i,t=(await qa(()=>import("./Mapping-ab583c9d.js"),["assets/Mapping-ab583c9d.js","assets/debugConfig-5b4f09a7.js","assets/_commonjsHelpers-725317a4.js"])).Mapping,n=new t;await n.load();const s=(await qa(()=>import("./Stats-fbf3162b.js"),[])).Stats,r=new s;return await r.load(),window.APP=Me,{urlParams:e,mapping:n,stats:r}}var Ou;class oI{constructor(){ve(this,Ou,e=>{Ue.emit(Ye.KEY_DOWN,e.key)});Ue.register(this)}onAttach(){document.addEventListener("keydown",G(this,Ou))}}Ou=new WeakMap;var Rr,Vl,Gl,Uu,Fu,ku,zu;class aI{constructor(){ve(this,Rr,void 0);ve(this,Vl,e=>{var t;if(this.isTouch?e.touches&&e.touches.length>0&&this.updateCoordinate(e.touches[0].clientX,e.touches[0].clientY):this.updateCoordinate(e.clientX,e.clientY),Ue.emit(Ye.POINTER_MOVE,this.coordinates),((t=e.touches)==null?void 0:t.length)===2&&G(this,Rr)){const n=Math.hypot(e.touches[0].pageX-e.touches[1].pageX,e.touches[0].pageY-e.touches[1].pageY);Ue.emit(Ye.PINCH,n-G(this,Rr)),mt(this,Rr,n)}this.isDown&&(this.isDragging=!0,Ue.emit(Ye.DRAG,new Be().subVectors(this.coordinates.webgl,this.previousCoordinates.webgl)))});ve(this,Gl,()=>{this.isDown&&(this.previousCoordinates.webgl.copy(this.coordinates.webgl),this.previousCoordinates.dom.copy(this.coordinates.dom),this.isDown=!1,this.isDragging&&(this.isDragging=!1,Ue.emit(Ye.DRAG_END,this.coordinates)),Ue.emit(Ye.POINTER_UP,this.coordinates))});ve(this,Uu,e=>{if(!this.isDown){switch(e.pointerType){case"mouse":this.isTouch=!1;break;case"touch":this.isTouch=!0;break;case"pen":this.isTouch=!0;break}this.updateCoordinate(e.clientX,e.clientY),this.isDown=!0,Ue.emit(Ye.POINTER_DOWN,this.coordinates)}});ve(this,Fu,()=>{this.isTouch||(this.isDown=!1,Ue.emit(Ye.POINTER_UP,this.coordinates))});ve(this,ku,e=>{var t;((t=e.touches)==null?void 0:t.length)===2&&mt(this,Rr,Math.hypot(e.touches[0].pageX-e.touches[1].pageX,e.touches[0].pageY-e.touches[1].pageY))});ve(this,zu,e=>{Ue.emit(Ye.WHEEL,e.deltaY)});Ue.register(this),this.isTouch=!!(window.matchMedia("(pointer: coarse)").matches||typeof window.ontouchstart=="function"||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),this.isDown=!1,this.isDragging=!1}onAttach(){this.coordinates={webgl:new Be,dom:new Be(Me.tools.viewport.width*.5,Me.tools.viewport.height*.5)},this.previousCoordinates={webgl:this.coordinates.webgl.clone(),dom:this.coordinates.dom.clone()},Me.$app.addEventListener("mousemove",G(this,Vl)),Me.$app.addEventListener("touchmove",G(this,Vl),{passive:!0}),Me.$app.addEventListener("pointerdown",G(this,Uu)),Me.$app.addEventListener("touchstart",G(this,ku),{passive:!0}),Me.$app.addEventListener("wheel",G(this,zu),{passive:!0}),Me.$app.addEventListener("mouseup",G(this,Gl)),Me.$app.addEventListener("touchend",G(this,Gl)),Me.$app.addEventListener("pointerleave",G(this,Fu))}updateCoordinate(e,t){this.previousCoordinates.dom.copy(this.coordinates.dom),this.previousCoordinates.webgl.copy(this.coordinates.webgl),this.coordinates.webgl.set(e/Me.tools.viewport.width*2-1,-(t/Me.tools.viewport.height)*2+1),this.coordinates.dom.set(e,t)}}Rr=new WeakMap,Vl=new WeakMap,Gl=new WeakMap,Uu=new WeakMap,Fu=new WeakMap,ku=new WeakMap,zu=new WeakMap;class lI{constructor(){Nn(this,"resize",e=>{if(e[0].contentBoxSize){const t=Array.isArray(e[0].contentBoxSize)?e[0].contentBoxSize[0]:e[0].contentBoxSize;this.width=t.inlineSize,this.height=t.blockSize}else this.width=e[0].contentRect.width,this.height=e[0].contentRect.height;this.dpr=Math.min(window.innerWidth<lo.tablet?2:1.5,window.devicePixelRatio),this.ratio=this.width/this.height,this.breakpoint=window.innerWidth<lo.tablet?"mobile":window.innerWidth<lo.desktop?"tablet":"desktop",Ue.emit(Ye.RESIZE,this.infos)});Ue.register(this);const e=Me.$wrapper.getBoundingClientRect();this.width=Math.min(window.innerWidth,e.width),this.height=e.height,this.dpr=Math.min(window.innerWidth<lo.tablet?2:1.5,window.devicePixelRatio),this.ratio=this.width/this.height,this.breakpoint=window.innerWidth<lo.tablet?"mobile":window.innerWidth<lo.desktop?"tablet":"desktop",this.isMobileAtLaunch=this.breakpoint==="mobile"}onAttach(){new ResizeObserver(this.resize).observe(Me.$wrapper)}get infos(){return{width:this.width,height:this.height,dpr:this.dpr,ratio:this.ratio,device:this.breakpoint}}}function cI(){const i=new aI,e=new lI,t=new oI;return{mouse:i,viewport:e,keyboard:t}}const rn={uTime:{value:0},uZoom:{value:0},uEmissiveOnly:{value:!1},uShadowOnly:{value:!1}};function ay(i){const e=new Map,t=new Map,n=i.clone();return ly(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function ly(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)ly(i.children[n],e.children[n],t)}var Vo,Hl,Bu;class uI extends dt{constructor(t,n){super();ve(this,Vo,new z);ve(this,Hl,new We);ve(this,Bu,new xf);Nn(this,"screenPosition",new Be);Ue.register(this),this.medalType=Object.keys(nl)[n.type],this.mesh=t.getObjectByName(this.medalType).clone(),this.seed=Math.random();const s=new JR({color:H3[n.type]});this.mesh.traverse(r=>{r.isMesh&&(r.material=s)}),this.position.setX(n.position.x+.5).setZ(n.position.y+.5),this.position.y=.5,this.add(this.mesh)}onTick({et:t}){this.rotation.y=t*.005+this.seed,G(this,Vo).copy(this.position).project(Me.webgl.camera).multiplyScalar(.5).addScalar(.5),this.screenPosition.set(G(this,Vo).x,G(this,Vo).y)}get isInScreen(){return G(this,Hl).multiplyMatrices(Me.webgl.camera.projectionMatrix,Me.webgl.camera.matrixWorldInverse),G(this,Bu).setFromProjectionMatrix(G(this,Hl)),!1}}Vo=new WeakMap,Hl=new WeakMap,Bu=new WeakMap;function Qi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function cy(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Wn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ra={duration:.5,overwrite:!1,delay:0},Hp,cn,It,ti=1e8,lt=1/ti,Md=Math.PI*2,fI=Md/4,hI=0,uy=Math.sqrt,dI=Math.cos,pI=Math.sin,$t=function(e){return typeof e=="string"},St=function(e){return typeof e=="function"},ds=function(e){return typeof e=="number"},Wp=function(e){return typeof e>"u"},Gi=function(e){return typeof e=="object"},An=function(e){return e!==!1},jp=function(){return typeof window<"u"},Nc=function(e){return St(e)||$t(e)},fy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},un=Array.isArray,Sd=/(?:-?\.?\d|\.)+/gi,hy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,yo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ah=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,dy=/[+-]=-?[.\d]+/,py=/[^,'"\[\]\s]+/gi,mI=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,xt,Jn,wd,Xp,Xn={},hu={},my,gy=function(e){return(hu=Vr(e,Xn))&&Pn},Yp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},du=function(e,t){return!t&&console.warn(e)},_y=function(e,t){return e&&(Xn[e]=t)&&hu&&(hu[e]=t)||Xn},Cl=function(){return 0},gI={suppressEvents:!0,isStart:!0,kill:!1},Xc={suppressEvents:!0,kill:!1},_I={suppressEvents:!0},qp={},Ys=[],Td={},vy,Bn={},Ch={},f_=30,Yc=[],$p="",Kp=function(e){var t=e[0],n,s;if(Gi(t)||St(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(s=Yc.length;s--&&!Yc[s].targetTest(t););n=Yc[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new Gy(e[s],n)))||e.splice(s,1);return e},Ur=function(e){return e._gsap||Kp(ni(e))[0]._gsap},xy=function(e,t,n){return(n=e[t])&&St(n)?e[t]():Wp(n)&&e.getAttribute&&e.getAttribute(t)||n},Cn=function(e,t){return(e=e.split(",")).forEach(t)||e},At=function(e){return Math.round(e*1e5)/1e5||0},Jt=function(e){return Math.round(e*1e7)/1e7||0},Do=function(e,t){var n=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+s:n==="-"?e-s:n==="*"?e*s:e/s},vI=function(e,t){for(var n=t.length,s=0;e.indexOf(t[s])<0&&++s<n;);return s<n},pu=function(){var e=Ys.length,t=Ys.slice(0),n,s;for(Td={},Ys.length=0,n=0;n<e;n++)s=t[n],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},yy=function(e,t,n,s){Ys.length&&!cn&&pu(),e.render(t,n,s||cn&&t<0&&(e._initted||e._startAt)),Ys.length&&!cn&&pu()},by=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(py).length<2?t:$t(e)?e.trim():e},My=function(e){return e},ri=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},xI=function(e){return function(t,n){for(var s in n)s in t||s==="duration"&&e||s==="ease"||(t[s]=n[s])}},Vr=function(e,t){for(var n in t)e[n]=t[n];return e},h_=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Gi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},mu=function(e,t){var n={},s;for(s in e)s in t||(n[s]=e[s]);return n},cl=function(e){var t=e.parent||xt,n=e.keyframes?xI(un(e.keyframes)):ri;if(An(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},yI=function(e,t){for(var n=e.length,s=n===t.length;s&&n--&&e[n]===t[n];);return n<0},Sy=function(e,t,n,s,r){n===void 0&&(n="_first"),s===void 0&&(s="_last");var o=e[s],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[s]=t,t._prev=o,t.parent=t._dp=e,t},Af=function(e,t,n,s){n===void 0&&(n="_first"),s===void 0&&(s="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[s]===t&&(e[s]=r),t._next=t._prev=t.parent=null},Qs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Fr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},bI=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ed=function(e,t,n,s){return e._startAt&&(cn?e._startAt.revert(Xc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},MI=function i(e){return!e||e._ts&&i(e.parent)},d_=function(e){return e._repeat?oa(e._tTime,e=e.duration()+e._rDelay)*e:0},oa=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},gu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Cf=function(e){return e._end=Jt(e._start+(e._tDur/Math.abs(e._ts||e._rts||lt)||0))},Rf=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Jt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Cf(e),n._dirty||Fr(n,e)),e},wy=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=gu(e.rawTime(),t),(!t._dur||Zl(0,t.totalDuration(),n)-t._tTime>lt)&&t.render(n,!0)),Fr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-lt}},Ui=function(e,t,n,s){return t.parent&&Qs(t),t._start=Jt((ds(n)?n:n||e!==xt?Kn(e,n,t):e._time)+t._delay),t._end=Jt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Sy(e,t,"_first","_last",e._sort?"_start":0),Ad(t)||(e._recent=t),s||wy(e,t),e._ts<0&&Rf(e,e._tTime),e},Ty=function(e,t){return(Xn.ScrollTrigger||Yp("scrollTrigger",t))&&Xn.ScrollTrigger.create(t,e)},Ey=function(e,t,n,s,r){if(Jp(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!cn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&vy!==Vn.frame)return Ys.push(e),e._lazy=[r,s],1},SI=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Ad=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},wI=function(e,t,n,s){var r=e.ratio,o=t<0||!t&&(!e._start&&SI(e)&&!(!e._initted&&Ad(e))||(e._ts<0||e._dp._ts<0)&&!Ad(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Zl(0,e._tDur,t),u=oa(l,a),e._yoyo&&u&1&&(o=1-o),u!==oa(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||cn||s||e._zTime===lt||!t&&e._zTime){if(!e._initted&&Ey(e,t,s,n,l))return;for(f=e._zTime,e._zTime=t||(n?lt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Ed(e,t,n,!0),e._onUpdate&&!n&&ii(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ii(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Qs(e,1),!n&&!cn&&(ii(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},TI=function(e,t,n){var s;if(n>t)for(s=e._first;s&&s._start<=n;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=n;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},aa=function(e,t,n,s){var r=e._repeat,o=Jt(t)||0,a=e._tTime/e._tDur;return a&&!s&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Jt(o*(r+1)+e._rDelay*r):o,a>0&&!s&&Rf(e,e._tTime=e._tDur*a),e.parent&&Cf(e),n||Fr(e.parent,e),e},p_=function(e){return e instanceof En?Fr(e):aa(e,e._dur)},EI={_start:0,endTime:Cl,totalDuration:Cl},Kn=function i(e,t,n){var s=e.labels,r=e._recent||EI,o=e.duration()>=ti?r.endTime(!1):e._dur,a,l,c;return $t(t)&&(isNaN(t)||t in s)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in s||(s[t]=o),s[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(un(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ul=function(e,t,n){var s=ds(t[1]),r=(s?2:1)+(e<2?0:1),o=t[r],a,l;if(s&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=An(l.vars.inherit)&&l.parent;o.immediateRender=An(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Ot(t[0],o,t[r+1])},sr=function(e,t){return e||e===0?t(e):t},Zl=function(e,t,n){return n<e?e:n>t?t:n},an=function(e,t){return!$t(e)||!(t=mI.exec(e))?"":t[1]},AI=function(e,t,n){return sr(n,function(s){return Zl(e,t,s)})},Cd=[].slice,Ay=function(e,t){return e&&Gi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Gi(e[0]))&&!e.nodeType&&e!==Jn},CI=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(s){var r;return $t(s)&&!t||Ay(s,1)?(r=n).push.apply(r,ni(s)):n.push(s)})||n},ni=function(e,t,n){return It&&!t&&It.selector?It.selector(e):$t(e)&&!n&&(wd||!la())?Cd.call((t||Xp).querySelectorAll(e),0):un(e)?CI(e,n):Ay(e)?Cd.call(e,0):e?[e]:[]},Rd=function(e){return e=ni(e)[0]||du("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ni(t,n.querySelectorAll?n:n===e?du("Invalid scope")||Xp.createElement("div"):e)}},Cy=function(e){return e.sort(function(){return .5-Math.random()})},Ry=function(e){if(St(e))return e;var t=Gi(e)?e:{each:e},n=kr(t.ease),s=t.from||0,r=parseFloat(t.base)||0,o={},a=s>0&&s<1,l=isNaN(s)||a,c=t.axis,u=s,f=s;return $t(s)?u=f={center:.5,edges:.5,end:1}[s]||0:!a&&l&&(u=s[0],f=s[1]),function(h,p,g){var d=(g||t).length,m=o[d],_,x,v,y,M,E,A,b,T;if(!m){if(T=t.grid==="auto"?0:(t.grid||[1,ti])[1],!T){for(A=-ti;A<(A=g[T++].getBoundingClientRect().left)&&T<d;);T--}for(m=o[d]=[],_=l?Math.min(T,d)*u-.5:s%T,x=T===ti?0:l?d*f/T-.5:s/T|0,A=0,b=ti,E=0;E<d;E++)v=E%T-_,y=x-(E/T|0),m[E]=M=c?Math.abs(c==="y"?y:v):uy(v*v+y*y),M>A&&(A=M),M<b&&(b=M);s==="random"&&Cy(m),m.max=A-b,m.min=b,m.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(T>d?d-1:c?c==="y"?d/T:T:Math.max(T,d/T))||0)*(s==="edges"?-1:1),m.b=d<0?r-d:r,m.u=an(t.amount||t.each)||0,n=n&&d<0?zy(n):n}return d=(m[h]-m.min)/m.max||0,Jt(m.b+(n?n(d):d)*m.v)+m.u}},Ld=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var s=Jt(Math.round(parseFloat(n)/e)*e*t);return(s-s%1)/t+(ds(n)?0:an(n))}},Ly=function(e,t){var n=un(e),s,r;return!n&&Gi(e)&&(s=n=e.radius||ti,e.values?(e=ni(e.values),(r=!ds(e[0]))&&(s*=s)):e=Ld(e.increment)),sr(t,n?St(e)?function(o){return r=e(o),Math.abs(r-o)<=s?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=ti,u=0,f=e.length,h,p;f--;)r?(h=e[f].x-a,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!s||c<=s?e[u]:o,r||u===o||ds(o)?u:u+an(o)}:Ld(e))},Py=function(e,t,n,s){return sr(un(e)?!t:n===!0?!!(n=0):!s,function(){return un(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(s=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*s)/s})},RI=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(s){return t.reduce(function(r,o){return o(r)},s)}},LI=function(e,t){return function(n){return e(parseFloat(n))+(t||an(n))}},PI=function(e,t,n){return Dy(e,t,0,1,n)},Iy=function(e,t,n){return sr(n,function(s){return e[~~t(s)]})},II=function i(e,t,n){var s=t-e;return un(e)?Iy(e,i(0,e.length),t):sr(n,function(r){return(s+(r-e)%s)%s+e})},DI=function i(e,t,n){var s=t-e,r=s*2;return un(e)?Iy(e,i(0,e.length-1),t):sr(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>s?r-o:o)})},Rl=function(e){for(var t=0,n="",s,r,o,a;~(s=e.indexOf("random(",t));)o=e.indexOf(")",s),a=e.charAt(s+7)==="[",r=e.substr(s+7,o-s-7).match(a?py:Sd),n+=e.substr(t,s-t)+Py(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Dy=function(e,t,n,s,r){var o=t-e,a=s-n;return sr(r,function(l){return n+((l-e)/o*a||0)})},NI=function i(e,t,n,s){var r=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!r){var o=$t(e),a={},l,c,u,f,h;if(n===!0&&(s=1)&&(n=null),o)e={p:e},t={p:t};else if(un(e)&&!un(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,r=function(g){g*=f;var d=Math.min(h,~~g);return u[d](g-d)},n=t}else s||(e=Vr(un(e)?[]:{},e));if(!u){for(l in t)Zp.call(a,e,l,"get",t[l]);r=function(g){return tm(g,a)||(o?e.p:e)}}}return sr(n,r)},m_=function(e,t,n){var s=e.labels,r=ti,o,a,l;for(o in s)a=s[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},ii=function(e,t,n){var s=e.vars,r=s[t],o=It,a=e._ctx,l,c,u;if(r)return l=s[t+"Params"],c=s.callbackScope||e,n&&Ys.length&&pu(),a&&(It=a),u=l?r.apply(c,l):r.call(c),It=o,u},Za=function(e){return Qs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!cn),e.progress()<1&&ii(e,"onInterrupt"),e},bo,Ny=[],Oy=function(e){if(!jp()){Ny.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=St(e),s=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Cl,render:tm,add:Zp,kill:KI,modifier:$I,rawVars:0},o={targetTest:0,get:0,getSetter:em,aliases:{},register:0};if(la(),e!==s){if(Bn[t])return;ri(s,ri(mu(e,r),o)),Vr(s.prototype,Vr(r,mu(e,o))),Bn[s.prop=t]=s,e.targetTest&&(Yc.push(s),qp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}_y(t,s),e.register&&e.register(Pn,s,Rn)},ot=255,Ja={aqua:[0,ot,ot],lime:[0,ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ot],navy:[0,0,128],white:[ot,ot,ot],olive:[128,128,0],yellow:[ot,ot,0],orange:[ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ot,0,0],pink:[ot,192,203],cyan:[0,ot,ot],transparent:[ot,ot,ot,0]},Rh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ot+.5|0},Uy=function(e,t,n){var s=e?ds(e)?[e>>16,e>>8&ot,e&ot]:0:Ja.black,r,o,a,l,c,u,f,h,p,g;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ja[e])s=Ja[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&ot,s&ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&ot,e&ot]}else if(e.substr(0,3)==="hsl"){if(s=g=e.match(Sd),!t)l=+s[0]%360/360,c=+s[1]/100,u=+s[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,s.length>3&&(s[3]*=1),s[0]=Rh(l+1/3,r,o),s[1]=Rh(l,r,o),s[2]=Rh(l-1/3,r,o);else if(~e.indexOf("="))return s=e.match(hy),n&&s.length<4&&(s[3]=1),s}else s=e.match(Sd)||Ja.transparent;s=s.map(Number)}return t&&!g&&(r=s[0]/ot,o=s[1]/ot,a=s[2]/ot,f=Math.max(r,o,a),h=Math.min(r,o,a),u=(f+h)/2,f===h?l=c=0:(p=f-h,c=u>.5?p/(2-f-h):p/(f+h),l=f===r?(o-a)/p+(o<a?6:0):f===o?(a-r)/p+2:(r-o)/p+4,l*=60),s[0]=~~(l+.5),s[1]=~~(c*100+.5),s[2]=~~(u*100+.5)),n&&s.length<4&&(s[3]=1),s},Fy=function(e){var t=[],n=[],s=-1;return e.split(qs).forEach(function(r){var o=r.match(yo)||[];t.push.apply(t,o),n.push(s+=o.length+1)}),t.c=n,t},g_=function(e,t,n){var s="",r=(e+s).match(qs),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!r)return e;if(r=r.map(function(h){return(h=Uy(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Fy(e),l=n.c,l.join(s)!==u.c.join(s)))for(c=e.replace(qs,"1").split(yo),f=c.length-1;a<f;a++)s+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(qs),f=c.length-1;a<f;a++)s+=c[a]+r[a];return s+c[f]},qs=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ja)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),OI=/hsl[a]?\(/,ky=function(e){var t=e.join(" "),n;if(qs.lastIndex=0,qs.test(t))return n=OI.test(t),e[1]=g_(e[1],n),e[0]=g_(e[0],n,Fy(e[1])),!0},Ll,Vn=function(){var i=Date.now,e=500,t=33,n=i(),s=n,r=1e3/240,o=r,a=[],l,c,u,f,h,p,g=function d(m){var _=i()-s,x=m===!0,v,y,M,E;if(_>e&&(n+=_-t),s+=_,M=s-n,v=M-o,(v>0||x)&&(E=++f.frame,h=M-f.time*1e3,f.time=M=M/1e3,o+=v+(v>=r?4:r-v),y=1),x||(l=c(d)),y)for(p=0;p<a.length;p++)a[p](M,h,E,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){my&&(!wd&&jp()&&(Jn=wd=window,Xp=Jn.document||{},Xn.gsap=Pn,(Jn.gsapVersions||(Jn.gsapVersions=[])).push(Pn.version),gy(hu||Jn.GreenSockGlobals||!Jn.gsap&&Jn||{}),u=Jn.requestAnimationFrame,Ny.forEach(Oy)),l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Ll=1,g(2))},sleep:function(){(u?Jn.cancelAnimationFrame:clearTimeout)(l),Ll=0,c=Cl},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){r=1e3/(m||240),o=f.time*1e3+r},add:function(m,_,x){var v=_?function(y,M,E,A){m(y,M,E,A),f.remove(v)}:m;return f.remove(m),a[x?"unshift":"push"](v),la(),v},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&p>=_&&p--},_listeners:a},f}(),la=function(){return!Ll&&Vn.wake()},qe={},UI=/^[\d.\-M][\d.\-,\s]/,FI=/["']/g,kI=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),s=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[s]=isNaN(c)?c.replace(FI,"").trim():+c,s=l.substr(a+1).trim();return t},zI=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<n?e.indexOf(")",n+1):n)},BI=function(e){var t=(e+"").split("("),n=qe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[kI(t[1])]:zI(e).split(",").map(by)):qe._CE&&UI.test(e)?qe._CE("",e):n},zy=function(e){return function(t){return 1-e(1-t)}},By=function i(e,t){for(var n=e._first,s;n;)n instanceof En?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(s=n._ease,n._ease=n._yEase,n._yEase=s,n._yoyo=t)),n=n._next},kr=function(e,t){return e&&(St(e)?e:qe[e]||BI(e))||t},jr=function(e,t,n,s){n===void 0&&(n=function(l){return 1-t(1-l)}),s===void 0&&(s=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:s},o;return Cn(e,function(a){qe[a]=Xn[a]=r,qe[o=a.toLowerCase()]=n;for(var l in r)qe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=qe[a+"."+l]=r[l]}),r},Vy=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Lh=function i(e,t,n){var s=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/Md*(Math.asin(1/s)||0),a=function(u){return u===1?1:s*Math.pow(2,-10*u)*pI((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Vy(a);return r=Md/r,l.config=function(c,u){return i(e,c,u)},l},Ph=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},s=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Vy(n);return s.config=function(r){return i(e,r)},s};Cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;jr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});qe.Linear.easeNone=qe.none=qe.Linear.easeIn;jr("Elastic",Lh("in"),Lh("out"),Lh());(function(i,e){var t=1/e,n=2*t,s=2.5*t,r=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<s?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};jr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);jr("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});jr("Circ",function(i){return-(uy(1-i*i)-1)});jr("Sine",function(i){return i===1?1:-dI(i*fI)+1});jr("Back",Ph("in"),Ph("out"),Ph());qe.SteppedEase=qe.steps=Xn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,s=e+(t?0:1),r=t?1:0,o=1-lt;return function(a){return((s*Zl(0,o,a)|0)+r)*n}}};ra.ease=qe["quad.out"];Cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return $p+=i+","+i+"Params,"});var Gy=function(e,t){this.id=hI++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:xy,this.set=t?t.getSetter:em},ca=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,aa(this,+t.duration,1,1),this.data=t.data,It&&(this._ctx=It,It.data.push(this)),Ll||Vn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,aa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,s){if(la(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Rf(this,n),!r._dp||r.parent||wy(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ui(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===lt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),yy(this,n,s)),this},e.time=function(n,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+d_(this))%(this._dur+this._rDelay)||(n?this._dur:0),s):this._time},e.totalProgress=function(n,s){return arguments.length?this.totalTime(this.totalDuration()*n,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+d_(this),s):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,s){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,s):this._repeat?oa(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-lt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?gu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-lt?0:this._rts,this.totalTime(Zl(-Math.abs(this._delay),this._tDur,s),!0),Cf(this),bI(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(la(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==lt&&(this._tTime-=lt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&Ui(s,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(An(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var s=this.parent||this._dp;return s?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?gu(s.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=_I);var s=cn;return cn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),cn=s,this},e.globalTime=function(n){for(var s=this,r=arguments.length?n:s.rawTime();s;)r=s._start+r/(s._ts||1),s=s._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,p_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var s=this._time;return this._rDelay=n,p_(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,s){return this.totalTime(Kn(this,n),An(s))},e.restart=function(n,s){return this.play().totalTime(n?-this._delay:0,An(s))},e.play=function(n,s){return n!=null&&this.seek(n,s),this.reversed(!1).paused(!1)},e.reverse=function(n,s){return n!=null&&this.seek(n||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(n,s){return n!=null&&this.seek(n,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-lt,this},e.isActive=function(){var n=this.parent||this._dp,s=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=s&&r<this.endTime(!0)-lt)},e.eventCallback=function(n,s,r){var o=this.vars;return arguments.length>1?(s?(o[n]=s,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=s)):delete o[n],this):o[n]},e.then=function(n){var s=this;return new Promise(function(r){var o=St(n)?n:My,a=function(){var c=s.then;s.then=null,St(o)&&(o=o(s))&&(o.then||o===s)&&(s.then=c),r(o),s.then=c};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?a():s._prom=a})},e.kill=function(){Za(this)},i}();ri(ca.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-lt,_prom:0,_ps:!1,_rts:1});var En=function(i){cy(e,i);function e(n,s){var r;return n===void 0&&(n={}),r=i.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=An(n.sortChildren),xt&&Ui(n.parent||xt,Qi(r),s),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Ty(Qi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(s,r,o){return ul(0,arguments,this),this},t.from=function(s,r,o){return ul(1,arguments,this),this},t.fromTo=function(s,r,o,a){return ul(2,arguments,this),this},t.set=function(s,r,o){return r.duration=0,r.parent=this,cl(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ot(s,r,Kn(this,o),1),this},t.call=function(s,r,o){return Ui(this,Ot.delayedCall(0,s,r),o)},t.staggerTo=function(s,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ot(s,o,Kn(this,l)),this},t.staggerFrom=function(s,r,o,a,l,c,u){return o.runBackwards=1,cl(o).immediateRender=An(o.immediateRender),this.staggerTo(s,r,o,a,l,c,u)},t.staggerFromTo=function(s,r,o,a,l,c,u,f){return a.startAt=o,cl(a).immediateRender=An(a.immediateRender),this.staggerTo(s,r,a,l,c,u,f)},t.render=function(s,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=s<=0?0:Jt(s),f=this._zTime<0!=s<0&&(this._initted||!c),h,p,g,d,m,_,x,v,y,M,E,A;if(this!==xt&&u>l&&s>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,s+=this._time-a),h=u,y=this._start,v=this._ts,_=!v,f&&(c||(a=this._zTime),(s||!r)&&(this._zTime=s)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(m*100+s,r,o);if(h=Jt(u%m),u===l?(d=this._repeat,h=c):(d=~~(u/m),d&&d===u/m&&(h=c,d--),h>c&&(h=c)),M=oa(this._tTime,m),!a&&this._tTime&&M!==d&&this._tTime-M*m-this._dur<=0&&(M=d),E&&d&1&&(h=c-h,A=1),d!==M&&!this._lock){var b=E&&M&1,T=b===(E&&d&1);if(d<M&&(b=!b),a=b?0:c,this._lock=1,this.render(a||(A?0:Jt(d*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&ii(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=b?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;By(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=TI(this,Jt(a),Jt(h)),x&&(u-=h-(h=x._start))),this._tTime=u,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,a=0),!a&&h&&!r&&!d&&(ii(this,"onStart"),this._tTime!==u))return this;if(h>=a&&s>=0)for(p=this._first;p;){if(g=p._next,(p._act||h>=p._start)&&p._ts&&x!==p){if(p.parent!==this)return this.render(s,r,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,r,o),h!==this._time||!this._ts&&!_){x=0,g&&(u+=this._zTime=-lt);break}}p=g}else{p=this._last;for(var P=s<0?s:h;p;){if(g=p._prev,(p._act||P<=p._end)&&p._ts&&x!==p){if(p.parent!==this)return this.render(s,r,o);if(p.render(p._ts>0?(P-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(P-p._start)*p._ts,r,o||cn&&(p._initted||p._startAt)),h!==this._time||!this._ts&&!_){x=0,g&&(u+=this._zTime=P?-lt:lt);break}}p=g}}if(x&&!r&&(this.pause(),x.render(h>=a?0:-lt)._zTime=h>=a?1:-1,this._ts))return this._start=y,Cf(this),this.render(s,r,o);this._onUpdate&&!r&&ii(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((s||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Qs(this,1),!r&&!(s<0&&!a)&&(u||a||!l)&&(ii(this,u===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,r){var o=this;if(ds(r)||(r=Kn(this,r,s)),!(s instanceof ca)){if(un(s))return s.forEach(function(a){return o.add(a,r)}),this;if($t(s))return this.addLabel(s,r);if(St(s))s=Ot.delayedCall(0,s);else return this}return this!==s?Ui(this,s,r):this},t.getChildren=function(s,r,o,a){s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-ti);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ot?r&&l.push(c):(o&&l.push(c),s&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(s){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===s)return r[o]},t.remove=function(s){return $t(s)?this.removeLabel(s):St(s)?this.killTweensOf(s):(Af(this,s),s===this._recent&&(this._recent=this._last),Fr(this))},t.totalTime=function(s,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Jt(Vn.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),i.prototype.totalTime.call(this,s,r),this._forcing=0,this):this._tTime},t.addLabel=function(s,r){return this.labels[s]=Kn(this,r),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,r,o){var a=Ot.delayedCall(0,r||Cl,o);return a.data="isPause",this._hasPause=1,Ui(this,a,Kn(this,s))},t.removePause=function(s){var r=this._first;for(s=Kn(this,s);r;)r._start===s&&r.data==="isPause"&&Qs(r),r=r._next},t.killTweensOf=function(s,r,o){for(var a=this.getTweensOf(s,o),l=a.length;l--;)zs!==a[l]&&a[l].kill(s,r);return this},t.getTweensOf=function(s,r){for(var o=[],a=ni(s),l=this._first,c=ds(r),u;l;)l instanceof Ot?vI(l._targets,a)&&(c?(!zs||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(s,r){r=r||{};var o=this,a=Kn(o,s),l=r,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,p,g=Ot.to(o,ri({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||lt,onStart:function(){if(o.pause(),!p){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&aa(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,f||[])}},r));return h?g.render(0):g},t.tweenFromTo=function(s,r,o){return this.tweenTo(r,ri({startAt:{time:Kn(this,s)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),m_(this,Kn(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),m_(this,Kn(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+lt)},t.shiftChildren=function(s,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=s,a._end+=s),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=s);return Fr(this)},t.invalidate=function(s){var r=this._first;for(this._lock=0;r;)r.invalidate(s),r=r._next;return i.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Fr(this)},t.totalDuration=function(s){var r=0,o=this,a=o._last,l=ti,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-s:s));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ui(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;aa(o,o===xt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(s){if(xt._ts&&(yy(xt,gu(s,xt)),vy=Vn.frame),Vn.frame>=f_){f_+=Wn.autoSleep||120;var r=xt._first;if((!r||!r._ts)&&Wn.autoSleep&&Vn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Vn.sleep()}}},e}(ca);ri(En.prototype,{_lock:0,_hasPause:0,_forcing:0});var VI=function(e,t,n,s,r,o,a){var l=new Rn(this._pt,e,t,0,1,qy,null,r),c=0,u=0,f,h,p,g,d,m,_,x;for(l.b=n,l.e=s,n+="",s+="",(_=~s.indexOf("random("))&&(s=Rl(s)),o&&(x=[n,s],o(x,e,t),n=x[0],s=x[1]),h=n.match(Ah)||[];f=Ah.exec(s);)g=f[0],d=s.substring(c,f.index),p?p=(p+1)%5:d.substr(-5)==="rgba("&&(p=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:m,c:g.charAt(1)==="="?Do(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=Ah.lastIndex);return l.c=c<s.length?s.substring(c,s.length):"",l.fp=a,(dy.test(s)||_)&&(l.e=0),this._pt=l,l},Zp=function(e,t,n,s,r,o,a,l,c,u){St(s)&&(s=s(r||0,e,o));var f=e[t],h=n!=="get"?n:St(f)?c?e[t.indexOf("set")||!St(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,p=St(f)?c?XI:Xy:Qp,g;if($t(s)&&(~s.indexOf("random(")&&(s=Rl(s)),s.charAt(1)==="="&&(g=Do(h,s)+(an(h)||0),(g||g===0)&&(s=g))),!u||h!==s||Pd)return!isNaN(h*s)&&s!==""?(g=new Rn(this._pt,e,t,+h||0,s-(h||0),typeof f=="boolean"?qI:Yy,0,p),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Yp(t,s),VI.call(this,e,t,h,s,p,l||Wn.stringFilter,c))},GI=function(e,t,n,s,r){if(St(e)&&(e=fl(e,r,t,n,s)),!Gi(e)||e.style&&e.nodeType||un(e)||fy(e))return $t(e)?fl(e,r,t,n,s):e;var o={},a;for(a in e)o[a]=fl(e[a],r,t,n,s);return o},Hy=function(e,t,n,s,r,o){var a,l,c,u;if(Bn[e]&&(a=new Bn[e]).init(r,a.rawVars?t[e]:GI(t[e],s,r,o,n),n,s,o)!==!1&&(n._pt=l=new Rn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==bo))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},zs,Pd,Jp=function i(e,t,n){var s=e.vars,r=s.ease,o=s.startAt,a=s.immediateRender,l=s.lazy,c=s.onUpdate,u=s.onUpdateParams,f=s.callbackScope,h=s.runBackwards,p=s.yoyoEase,g=s.keyframes,d=s.autoRevert,m=e._dur,_=e._startAt,x=e._targets,v=e.parent,y=v&&v.data==="nested"?v.vars.targets:x,M=e._overwrite==="auto"&&!Hp,E=e.timeline,A,b,T,P,I,q,N,D,O,$,j,V,re;if(E&&(!g||!r)&&(r="none"),e._ease=kr(r,ra.ease),e._yEase=p?zy(kr(p===!0?r:p,ra.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!E&&!!s.runBackwards,!E||g&&!s.stagger){if(D=x[0]?Ur(x[0]).harness:0,V=D&&s[D.prop],A=mu(s,qp),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&m?Xc:gI),_._lazy=0),o){if(Qs(e._startAt=Ot.set(x,ri({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!_&&An(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(cn||!a&&!d)&&e._startAt.revert(Xc),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&m&&!_){if(t&&(a=!1),T=ri({overwrite:!1,data:"isFromStart",lazy:a&&!_&&An(l),immediateRender:a,stagger:0,parent:v},A),V&&(T[D.prop]=V),Qs(e._startAt=Ot.set(x,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(cn?e._startAt.revert(Xc):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,lt,lt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&An(l)||l&&!m,b=0;b<x.length;b++){if(I=x[b],N=I._gsap||Kp(x)[b]._gsap,e._ptLookup[b]=$={},Td[N.id]&&Ys.length&&pu(),j=y===x?b:y.indexOf(I),D&&(O=new D).init(I,V||A,e,j,y)!==!1&&(e._pt=P=new Rn(e._pt,I,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(he){$[he]=P}),O.priority&&(q=1)),!D||V)for(T in A)Bn[T]&&(O=Hy(T,A,e,j,I,y))?O.priority&&(q=1):$[T]=P=Zp.call(e,I,T,"get",A[T],j,y,0,s.stringFilter);e._op&&e._op[b]&&e.kill(I,e._op[b]),M&&e._pt&&(zs=e,xt.killTweensOf(I,$,e.globalTime(t)),re=!e.parent,zs=0),e._pt&&l&&(Td[N.id]=1)}q&&$y(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!re,g&&t<=0&&E.render(ti,!0,!0)},HI=function(e,t,n,s,r,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,h;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Pd=1,e.vars[t]="+=0",Jp(e,a),Pd=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(s||s===0)&&!r?s:c.s+(s||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=At(n)+an(u.e)),u.b&&(u.b=c.s+an(u.b))},WI=function(e,t){var n=e[0]?Ur(e[0]).harness:0,s=n&&n.aliases,r,o,a,l;if(!s)return t;r=Vr({},t);for(o in s)if(o in r)for(l=s[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},jI=function(e,t,n,s){var r=t.ease||s||"power1.inOut",o,a;if(un(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},fl=function(e,t,n,s,r){return St(e)?e.call(t,n,s,r):$t(e)&&~e.indexOf("random(")?Rl(e):e},Wy=$p+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",jy={};Cn(Wy+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return jy[i]=1});var Ot=function(i){cy(e,i);function e(n,s,r,o){var a;typeof s=="number"&&(r.duration=s,s=r,r=null),a=i.call(this,o?s:cl(s))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,g=l.keyframes,d=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,x=s.parent||xt,v=(un(n)||fy(n)?ds(n[0]):"length"in s)?[n]:ni(n),y,M,E,A,b,T,P,I;if(a._targets=v.length?Kp(v):du("GSAP target "+n+" not found. https://greensock.com",!Wn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||h||Nc(c)||Nc(u)){if(s=a.vars,y=a.timeline=new En({data:"nested",defaults:d||{},targets:x&&x.data==="nested"?x.vars.targets:v}),y.kill(),y.parent=y._dp=Qi(a),y._start=0,h||Nc(c)||Nc(u)){if(A=v.length,P=h&&Ry(h),Gi(h))for(b in h)~Wy.indexOf(b)&&(I||(I={}),I[b]=h[b]);for(M=0;M<A;M++)E=mu(s,jy),E.stagger=0,_&&(E.yoyoEase=_),I&&Vr(E,I),T=v[M],E.duration=+fl(c,Qi(a),M,T,v),E.delay=(+fl(u,Qi(a),M,T,v)||0)-a._delay,!h&&A===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),y.to(T,E,P?P(M,T,v):0),y._ease=qe.none;y.duration()?c=u=0:a.timeline=0}else if(g){cl(ri(y.vars.defaults,{ease:"none"})),y._ease=kr(g.ease||s.ease||"none");var q=0,N,D,O;if(un(g))g.forEach(function($){return y.to(v,$,">")}),y.duration();else{E={};for(b in g)b==="ease"||b==="easeEach"||jI(b,g[b],E,g.easeEach);for(b in E)for(N=E[b].sort(function($,j){return $.t-j.t}),q=0,M=0;M<N.length;M++)D=N[M],O={ease:D.e,duration:(D.t-(M?N[M-1].t:0))/100*c},O[b]=D.v,y.to(v,O,q),q+=O.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return p===!0&&!Hp&&(zs=Qi(a),xt.killTweensOf(v),zs=0),Ui(x,Qi(a),r),s.reversed&&a.reverse(),s.paused&&a.paused(!0),(f||!c&&!g&&a._start===Jt(x._time)&&An(f)&&MI(Qi(a))&&x.data!=="nested")&&(a._tTime=-lt,a.render(Math.max(0,-u)||0)),m&&Ty(Qi(a),m),a}var t=e.prototype;return t.render=function(s,r,o){var a=this._time,l=this._tDur,c=this._dur,u=s<0,f=s>l-lt&&!u?l:s<lt?0:s,h,p,g,d,m,_,x,v,y;if(!c)wI(this,s,r,o);else if(f!==this._tTime||!s||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,v=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+s,r,o);if(h=Jt(f%d),f===l?(g=this._repeat,h=c):(g=~~(f/d),g&&g===f/d&&(h=c,g--),h>c&&(h=c)),_=this._yoyo&&g&1,_&&(y=this._yEase,h=c-h),m=oa(this._tTime,d),h===a&&!o&&this._initted)return this._tTime=f,this;g!==m&&(v&&this._yEase&&By(v,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=o=1,this.render(Jt(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(Ey(this,u?s:h,o,r,f))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(s,r,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(h/c),this._from&&(this.ratio=x=1-x),h&&!a&&!r&&!g&&(ii(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(x,p.d),p=p._next;v&&v.render(s<0?s:!h&&_?-lt:v._dur*v._ease(h/this._dur),r,o)||this._startAt&&(this._zTime=s),this._onUpdate&&!r&&(u&&Ed(this,s,r,o),ii(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&ii(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Ed(this,s,!0,!0),(s||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Qs(this,1),!r&&!(u&&!a)&&(f||a||_)&&(ii(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),i.prototype.invalidate.call(this,s)},t.resetTo=function(s,r,o,a){Ll||Vn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Jp(this,l),c=this._ease(l/this._dur),HI(this,s,r,o,a,c,l)?this.resetTo(s,r,o,a):(Rf(this,0),this.parent||Sy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,r){if(r===void 0&&(r="all"),!s&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Za(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(s,r,zs&&zs.vars.overwrite!==!0)._first||Za(this),this.parent&&o!==this.timeline.totalDuration()&&aa(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=s?ni(s):a,c=this._ptLookup,u=this._pt,f,h,p,g,d,m,_;if((!r||r==="all")&&yI(a,l))return r==="all"&&(this._pt=0),Za(this);for(f=this._op=this._op||[],r!=="all"&&($t(r)&&(d={},Cn(r,function(x){return d[x]=1}),r=d),r=WI(a,r)),_=a.length;_--;)if(~l.indexOf(a[_])){h=c[_],r==="all"?(f[_]=r,g=h,p={}):(p=f[_]=f[_]||{},g=r);for(d in g)m=h&&h[d],m&&((!("kill"in m.d)||m.d.kill(d)===!0)&&Af(this,m,"_pt"),delete h[d]),p!=="all"&&(p[d]=1)}return this._initted&&!this._pt&&u&&Za(this),this},e.to=function(s,r){return new e(s,r,arguments[2])},e.from=function(s,r){return ul(1,arguments)},e.delayedCall=function(s,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(s,r,o){return ul(2,arguments)},e.set=function(s,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(s,r)},e.killTweensOf=function(s,r,o){return xt.killTweensOf(s,r,o)},e}(ca);ri(Ot.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Cn("staggerTo,staggerFrom,staggerFromTo",function(i){Ot[i]=function(){var e=new En,t=Cd.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Qp=function(e,t,n){return e[t]=n},Xy=function(e,t,n){return e[t](n)},XI=function(e,t,n,s){return e[t](s.fp,n)},YI=function(e,t,n){return e.setAttribute(t,n)},em=function(e,t){return St(e[t])?Xy:Wp(e[t])&&e.setAttribute?YI:Qp},Yy=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},qI=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},qy=function(e,t){var n=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;n;)s=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+s,n=n._next;s+=t.c}t.set(t.t,t.p,s,t)},tm=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},$I=function(e,t,n,s){for(var r=this._pt,o;r;)o=r._next,r.p===s&&r.modifier(e,t,n),r=o},KI=function(e){for(var t=this._pt,n,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?Af(this,t,"_pt"):t.dep||(n=1),t=s;return!n},ZI=function(e,t,n,s){s.mSet(e,t,s.m.call(s.tween,n,s.mt),s)},$y=function(e){for(var t=e._pt,n,s,r,o;t;){for(n=t._next,s=r;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:o)?t._prev._next=t:r=t,(t._next=s)?s._prev=t:o=t,t=n}e._pt=r},Rn=function(){function i(t,n,s,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=s,this.r=a||Yy,this.d=l||this,this.set=c||Qp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,s,r){this.mSet=this.mSet||this.set,this.set=ZI,this.m=n,this.mt=r,this.tween=s},i}();Cn($p+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return qp[i]=1});Xn.TweenMax=Xn.TweenLite=Ot;Xn.TimelineLite=Xn.TimelineMax=En;xt=new En({sortChildren:!1,defaults:ra,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Wn.stringFilter=ky;var ua=[],qc={},JI=[],__=0,Ih=function(e){return(qc[e]||JI).map(function(t){return t()})},Id=function(){var e=Date.now(),t=[];e-__>2&&(Ih("matchMediaInit"),ua.forEach(function(n){var s=n.queries,r=n.conditions,o,a,l,c;for(a in s)o=Jn.matchMedia(s[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Ih("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),__=e,Ih("matchMedia"))},Ky=function(){function i(t,n){this.selector=n&&Rd(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=i.prototype;return e.add=function(n,s,r){St(n)&&(r=s,s=n,n=St);var o=this,a=function(){var c=It,u=o.selector,f;return c&&c!==o&&c.data.push(o),r&&(o.selector=Rd(r)),It=o,f=s.apply(o,arguments),St(f)&&o._r.push(f),It=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===St?a(o):n?o[n]=a:a},e.ignore=function(n){var s=It;It=null,n(this),It=s},e.getTweens=function(){var n=[];return this.data.forEach(function(s){return s instanceof i?n.push.apply(n,s.getTweens()):s instanceof Ot&&!(s.parent&&s.parent.data==="nested")&&n.push(s)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,s){var r=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof ca)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),s){var a=ua.indexOf(this);~a&&ua.splice(a,1)}},e.revert=function(n){this.kill(n||{})},i}(),QI=function(){function i(t){this.contexts=[],this.scope=t}var e=i.prototype;return e.add=function(n,s,r){Gi(n)||(n={matches:n});var o=new Ky(0,r||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),s=o.add("onMatch",s),o.queries=n;for(c in n)c==="all"?u=1:(l=Jn.matchMedia(n[c]),l&&(ua.indexOf(o)<0&&ua.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Id):l.addEventListener("change",Id)));return u&&s(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(s){return s.kill(n,!0)})},i}(),_u={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(s){return Oy(s)})},timeline:function(e){return new En(e)},getTweensOf:function(e,t){return xt.getTweensOf(e,t)},getProperty:function(e,t,n,s){$t(e)&&(e=ni(e)[0]);var r=Ur(e||{}).get,o=n?My:by;return n==="native"&&(n=""),e&&(t?o((Bn[t]&&Bn[t].get||r)(e,t,n,s)):function(a,l,c){return o((Bn[a]&&Bn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ni(e),e.length>1){var s=e.map(function(u){return Pn.quickSetter(u,t,n)}),r=s.length;return function(u){for(var f=r;f--;)s[f](u)}}e=e[0]||{};var o=Bn[t],a=Ur(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;bo._pt=0,f.init(e,n?u+n:u,bo,0,[e]),f.render(1,f),bo._pt&&tm(1,bo)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var s,r=Pn.to(e,Vr((s={},s[t]="+=0.1",s.paused=!0,s),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=kr(e.ease,ra.ease)),h_(ra,e||{})},config:function(e){return h_(Wn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,s=e.plugins,r=e.defaults,o=e.extendTimeline;(s||"").split(",").forEach(function(a){return a&&!Bn[a]&&!Xn[a]&&du(t+" effect requires "+a+" plugin.")}),Ch[t]=function(a,l,c){return n(ni(a),ri(l||{},r),c)},o&&(En.prototype[t]=function(a,l,c){return this.add(Ch[t](a,Gi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){qe[e]=kr(t)},parseEase:function(e,t){return arguments.length?kr(e,t):qe},getById:function(e){return xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new En(e),s,r;for(n.smoothChildTiming=An(e.smoothChildTiming),xt.remove(n),n._dp=0,n._time=n._tTime=xt._time,s=xt._first;s;)r=s._next,(t||!(!s._dur&&s instanceof Ot&&s.vars.onComplete===s._targets[0]))&&Ui(n,s,s._start-s._delay),s=r;return Ui(xt,n,0),n},context:function(e,t){return e?new Ky(e,t):It},matchMedia:function(e){return new QI(e)},matchMediaRefresh:function(){return ua.forEach(function(e){var t=e.conditions,n,s;for(s in t)t[s]&&(t[s]=!1,n=1);n&&e.revert()})||Id()},addEventListener:function(e,t){var n=qc[e]||(qc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=qc[e],s=n&&n.indexOf(t);s>=0&&n.splice(s,1)},utils:{wrap:II,wrapYoyo:DI,distribute:Ry,random:Py,snap:Ly,normalize:PI,getUnit:an,clamp:AI,splitColor:Uy,toArray:ni,selector:Rd,mapRange:Dy,pipe:RI,unitize:LI,interpolate:NI,shuffle:Cy},install:gy,effects:Ch,ticker:Vn,updateRoot:En.updateRoot,plugins:Bn,globalTimeline:xt,core:{PropTween:Rn,globals:_y,Tween:Ot,Timeline:En,Animation:ca,getCache:Ur,_removeLinkedListItem:Af,reverting:function(){return cn},context:function(e){return e&&It&&(It.data.push(e),e._ctx=It),It},suppressOverwrites:function(e){return Hp=e}}};Cn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return _u[i]=Ot[i]});Vn.add(En.updateRoot);bo=_u.to({},{duration:0});var eD=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},tD=function(e,t){var n=e._targets,s,r,o;for(s in t)for(r=n.length;r--;)o=e._ptLookup[r][s],o&&(o=o.d)&&(o._pt&&(o=eD(o,s)),o&&o.modifier&&o.modifier(t[s],e,n[r],s))},Dh=function(e,t){return{name:e,rawVars:1,init:function(s,r,o){o._onInit=function(a){var l,c;if($t(r)&&(l={},Cn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}tD(a,r)}}}},Pn=_u.registerPlugin({name:"attr",init:function(e,t,n,s,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],s,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)cn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Dh("roundProps",Ld),Dh("modifiers"),Dh("snap",Ly))||_u;Ot.version=En.version=Pn.version="3.11.5";my=1;jp()&&la();qe.Power0;qe.Power1;qe.Power2;qe.Power3;qe.Power4;qe.Linear;qe.Quad;qe.Cubic;qe.Quart;qe.Quint;qe.Strong;qe.Elastic;qe.Back;qe.SteppedEase;qe.Bounce;qe.Sine;qe.Expo;qe.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var v_,Bs,No,nm,Tr,x_,im,nD=function(){return typeof window<"u"},ps={},vr=180/Math.PI,Oo=Math.PI/180,co=Math.atan2,y_=1e8,sm=/([A-Z])/g,iD=/(left|right|width|margin|padding|x)/i,sD=/[\s,\(]\S/,Fi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Dd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},rD=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},oD=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},aD=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Zy=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Jy=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},lD=function(e,t,n){return e.style[t]=n},cD=function(e,t,n){return e.style.setProperty(t,n)},uD=function(e,t,n){return e._gsap[t]=n},fD=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},hD=function(e,t,n,s,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},dD=function(e,t,n,s,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},yt="transform",bi=yt+"Origin",pD=function i(e,t){var n=this,s=this.target,r=s.style;if(e in ps){if(this.tfm=this.tfm||{},e!=="transform")e=Fi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=es(s,o)}):this.tfm[e]=s._gsap.x?s._gsap[e]:es(s,e);else return Fi.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(yt)>=0)return;s._gsap.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(bi,t,"")),e=yt}(r||t)&&this.props.push(e,t,r[e])},Qy=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},mD=function(){var e=this.props,t=this.target,n=t.style,s=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(sm,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)s[o]=this.tfm[o];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=im(),(!r||!r.isStart)&&!n[yt]&&(Qy(n),s.uncache=1)}},eb=function(e,t){var n={target:e,props:[],revert:mD,save:pD};return e._gsap||Pn.core.getCache(e),t&&t.split(",").forEach(function(s){return n.save(s)}),n},tb,Nd=function(e,t){var n=Bs.createElementNS?Bs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Bs.createElement(e);return n.style?n:Bs.createElement(e)},zi=function i(e,t,n){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(sm,"-$1").toLowerCase())||s.getPropertyValue(t)||!n&&i(e,fa(t)||t,1)||""},b_="O,Moz,ms,Ms,Webkit".split(","),fa=function(e,t,n){var s=t||Tr,r=s.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(b_[o]+e in r););return o<0?null:(o===3?"ms":o>=0?b_[o]:"")+e},Od=function(){nD()&&window.document&&(v_=window,Bs=v_.document,No=Bs.documentElement,Tr=Nd("div")||{style:{}},Nd("div"),yt=fa(yt),bi=yt+"Origin",Tr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",tb=!!fa("perspective"),im=Pn.core.reverting,nm=1)},Nh=function i(e){var t=Nd("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,s=this.nextSibling,r=this.style.cssText,o;if(No.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(s?n.insertBefore(this,s):n.appendChild(this)),No.removeChild(t),this.style.cssText=r,o},M_=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},nb=function(e){var t;try{t=e.getBBox()}catch{t=Nh.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Nh||(t=Nh.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+M_(e,["x","cx","x1"])||0,y:+M_(e,["y","cy","y1"])||0,width:0,height:0}:t},ib=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&nb(e))},Pl=function(e,t){if(t){var n=e.style;t in ps&&t!==bi&&(t=yt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(sm,"-$1").toLowerCase())):n.removeAttribute(t)}},Vs=function(e,t,n,s,r,o){var a=new Rn(e._pt,t,n,0,1,o?Jy:Zy);return e._pt=a,a.b=s,a.e=r,e._props.push(n),a},S_={deg:1,rad:1,turn:1},gD={grid:1,flex:1},er=function i(e,t,n,s){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Tr.style,l=iD.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=s==="px",p=s==="%",g,d,m,_;return s===o||!r||S_[s]||S_[o]?r:(o!=="px"&&!h&&(r=i(e,t,n,"px")),_=e.getCTM&&ib(e),(p||o==="%")&&(ps[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],At(p?r/g*f:r/100*g)):(a[l?"width":"height"]=f+(h?o:s),d=~t.indexOf("adius")||s==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===Bs||!d.appendChild)&&(d=Bs.body),m=d._gsap,m&&p&&m.width&&l&&m.time===Vn.time&&!m.uncache?At(r/m.width*f):((p||o==="%")&&!gD[zi(d,"display")]&&(a.position=zi(e,"position")),d===e&&(a.position="static"),d.appendChild(Tr),g=Tr[u],d.removeChild(Tr),a.position="absolute",l&&p&&(m=Ur(d),m.time=Vn.time,m.width=d[u]),At(h?g*r/f:g&&r?f/g*r:0))))},es=function(e,t,n,s){var r;return nm||Od(),t in Fi&&t!=="transform"&&(t=Fi[t],~t.indexOf(",")&&(t=t.split(",")[0])),ps[t]&&t!=="transform"?(r=Dl(e,s),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:xu(zi(e,bi))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||s||~(r+"").indexOf("calc("))&&(r=vu[t]&&vu[t](e,t,n)||zi(e,t)||xy(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?er(e,t,r,n)+n:r},_D=function(e,t,n,s){if(!n||n==="none"){var r=fa(t,e,1),o=r&&zi(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=zi(e,"borderTopColor"))}var a=new Rn(this._pt,e.style,t,0,1,qy),l=0,c=0,u,f,h,p,g,d,m,_,x,v,y,M;if(a.b=n,a.e=s,n+="",s+="",s==="auto"&&(e.style[t]=s,s=zi(e,t)||s,e.style[t]=n),u=[n,s],ky(u),n=u[0],s=u[1],h=n.match(yo)||[],M=s.match(yo)||[],M.length){for(;f=yo.exec(s);)m=f[0],x=s.substring(l,f.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),m!==(d=h[c++]||"")&&(p=parseFloat(d)||0,y=d.substr((p+"").length),m.charAt(1)==="="&&(m=Do(p,m)+y),_=parseFloat(m),v=m.substr((_+"").length),l=yo.lastIndex-v.length,v||(v=v||Wn.units[t]||y,l===s.length&&(s+=v,a.e+=v)),y!==v&&(p=er(e,t,d,v)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:p,c:_-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<s.length?s.substring(l,s.length):""}else a.r=t==="display"&&s==="none"?Jy:Zy;return dy.test(s)&&(a.e=0),this._pt=a,a},w_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},vD=function(e){var t=e.split(" "),n=t[0],s=t[1]||"50%";return(n==="top"||n==="bottom"||s==="left"||s==="right")&&(e=n,n=s,s=e),t[0]=w_[n]||n,t[1]=w_[s]||s,t.join(" ")},xD=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,s=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)s.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],ps[a]&&(l=1,a=a==="transformOrigin"?bi:yt),Pl(n,a);l&&(Pl(n,yt),o&&(o.svg&&n.removeAttribute("transform"),Dl(n,1),o.uncache=1,Qy(s)))}},vu={clearProps:function(e,t,n,s,r){if(r.data!=="isFromStart"){var o=e._pt=new Rn(e._pt,t,n,0,0,xD);return o.u=s,o.pr=-10,o.tween=r,e._props.push(n),1}}},Il=[1,0,0,1,0,0],sb={},rb=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},T_=function(e){var t=zi(e,yt);return rb(t)?Il:t.substr(7).match(hy).map(At)},rm=function(e,t){var n=e._gsap||Ur(e),s=e.style,r=T_(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Il:r):(r===Il&&!e.offsetParent&&e!==No&&!n.svg&&(l=s.display,s.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,No.appendChild(e)),r=T_(e),l?s.display=l:Pl(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):No.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ud=function(e,t,n,s,r,o){var a=e._gsap,l=r||rm(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,p=l[0],g=l[1],d=l[2],m=l[3],_=l[4],x=l[5],v=t.split(" "),y=parseFloat(v[0])||0,M=parseFloat(v[1])||0,E,A,b,T;n?l!==Il&&(A=p*m-g*d)&&(b=y*(m/A)+M*(-d/A)+(d*x-m*_)/A,T=y*(-g/A)+M*(p/A)-(p*x-g*_)/A,y=b,M=T):(E=nb(e),y=E.x+(~v[0].indexOf("%")?y/100*E.width:y),M=E.y+(~(v[1]||v[0]).indexOf("%")?M/100*E.height:M)),s||s!==!1&&a.smooth?(_=y-c,x=M-u,a.xOffset=f+(_*p+x*d)-_,a.yOffset=h+(_*g+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=M,a.smooth=!!s,a.origin=t,a.originIsAbsolute=!!n,e.style[bi]="0px 0px",o&&(Vs(o,a,"xOrigin",c,y),Vs(o,a,"yOrigin",u,M),Vs(o,a,"xOffset",f,a.xOffset),Vs(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},Dl=function(e,t){var n=e._gsap||new Gy(e);if("x"in n&&!t&&!n.uncache)return n;var s=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=zi(e,bi)||"0",u,f,h,p,g,d,m,_,x,v,y,M,E,A,b,T,P,I,q,N,D,O,$,j,V,re,he,be,X,ue,pe,H;return u=f=h=d=m=_=x=v=y=0,p=g=1,n.svg=!!(e.getCTM&&ib(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(s[yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[yt]!=="none"?l[yt]:"")),s.scale=s.rotate=s.translate="none"),A=rm(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),Ud(e,j||c,!!j||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,E=n.yOrigin||0,A!==Il&&(I=A[0],q=A[1],N=A[2],D=A[3],u=O=A[4],f=$=A[5],A.length===6?(p=Math.sqrt(I*I+q*q),g=Math.sqrt(D*D+N*N),d=I||q?co(q,I)*vr:0,x=N||D?co(N,D)*vr+d:0,x&&(g*=Math.abs(Math.cos(x*Oo))),n.svg&&(u-=M-(M*I+E*N),f-=E-(M*q+E*D))):(H=A[6],ue=A[7],he=A[8],be=A[9],X=A[10],pe=A[11],u=A[12],f=A[13],h=A[14],b=co(H,X),m=b*vr,b&&(T=Math.cos(-b),P=Math.sin(-b),j=O*T+he*P,V=$*T+be*P,re=H*T+X*P,he=O*-P+he*T,be=$*-P+be*T,X=H*-P+X*T,pe=ue*-P+pe*T,O=j,$=V,H=re),b=co(-N,X),_=b*vr,b&&(T=Math.cos(-b),P=Math.sin(-b),j=I*T-he*P,V=q*T-be*P,re=N*T-X*P,pe=D*P+pe*T,I=j,q=V,N=re),b=co(q,I),d=b*vr,b&&(T=Math.cos(b),P=Math.sin(b),j=I*T+q*P,V=O*T+$*P,q=q*T-I*P,$=$*T-O*P,I=j,O=V),m&&Math.abs(m)+Math.abs(d)>359.9&&(m=d=0,_=180-_),p=At(Math.sqrt(I*I+q*q+N*N)),g=At(Math.sqrt($*$+H*H)),b=co(O,$),x=Math.abs(b)>2e-4?b*vr:0,y=pe?1/(pe<0?-pe:pe):0),n.svg&&(j=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!rb(zi(e,yt)),j&&e.setAttribute("transform",j))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(p*=-1,x+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=At(p),n.scaleY=At(g),n.rotation=At(d)+a,n.rotationX=At(m)+a,n.rotationY=At(_)+a,n.skewX=x+a,n.skewY=v+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(s[bi]=xu(c)),n.xOffset=n.yOffset=0,n.force3D=Wn.force3D,n.renderTransform=n.svg?bD:tb?ob:yD,n.uncache=0,n},xu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Oh=function(e,t,n){var s=an(t);return At(parseFloat(t)+parseFloat(er(e,"x",n+"px",s)))+s},yD=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ob(e,t)},dr="0deg",Wa="0px",pr=") ",ob=function(e,t){var n=t||this,s=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,p=n.skewY,g=n.scaleX,d=n.scaleY,m=n.transformPerspective,_=n.force3D,x=n.target,v=n.zOrigin,y="",M=_==="auto"&&e&&e!==1||_===!0;if(v&&(f!==dr||u!==dr)){var E=parseFloat(u)*Oo,A=Math.sin(E),b=Math.cos(E),T;E=parseFloat(f)*Oo,T=Math.cos(E),o=Oh(x,o,A*T*-v),a=Oh(x,a,-Math.sin(E)*-v),l=Oh(x,l,b*T*-v+v)}m!==Wa&&(y+="perspective("+m+pr),(s||r)&&(y+="translate("+s+"%, "+r+"%) "),(M||o!==Wa||a!==Wa||l!==Wa)&&(y+=l!==Wa||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+pr),c!==dr&&(y+="rotate("+c+pr),u!==dr&&(y+="rotateY("+u+pr),f!==dr&&(y+="rotateX("+f+pr),(h!==dr||p!==dr)&&(y+="skew("+h+", "+p+pr),(g!==1||d!==1)&&(y+="scale("+g+", "+d+pr),x.style[yt]=y||"translate(0, 0)"},bD=function(e,t){var n=t||this,s=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,p=n.target,g=n.xOrigin,d=n.yOrigin,m=n.xOffset,_=n.yOffset,x=n.forceCSS,v=parseFloat(o),y=parseFloat(a),M,E,A,b,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Oo,c*=Oo,M=Math.cos(l)*f,E=Math.sin(l)*f,A=Math.sin(l-c)*-h,b=Math.cos(l-c)*h,c&&(u*=Oo,T=Math.tan(c-u),T=Math.sqrt(1+T*T),A*=T,b*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),M*=T,E*=T)),M=At(M),E=At(E),A=At(A),b=At(b)):(M=f,b=h,E=A=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=er(p,"x",o,"px"),y=er(p,"y",a,"px")),(g||d||m||_)&&(v=At(v+g-(g*M+d*A)+m),y=At(y+d-(g*E+d*b)+_)),(s||r)&&(T=p.getBBox(),v=At(v+s/100*T.width),y=At(y+r/100*T.height)),T="matrix("+M+","+E+","+A+","+b+","+v+","+y+")",p.setAttribute("transform",T),x&&(p.style[yt]=T)},MD=function(e,t,n,s,r){var o=360,a=$t(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?vr:1),c=l-s,u=s+c+"deg",f,h;return a&&(f=r.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*y_)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*y_)%o-~~(c/o)*o)),e._pt=h=new Rn(e._pt,t,n,s,c,rD),h.e=u,h.u="deg",e._props.push(n),h},E_=function(e,t){for(var n in t)e[n]=t[n];return e},SD=function(e,t,n){var s=E_({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,p,g;s.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[yt]=t,a=Dl(n,1),Pl(n,yt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[yt],o[yt]=t,a=Dl(n,1),o[yt]=c);for(l in ps)c=s[l],u=a[l],c!==u&&r.indexOf(l)<0&&(p=an(c),g=an(u),f=p!==g?er(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Rn(e._pt,a,l,f,h-f,Dd),e._pt.u=g||0,e._props.push(l));E_(a,s)};Cn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",s="Bottom",r="Left",o=(e<3?[t,n,s,r]:[t+r,t+n,s+n,s+r]).map(function(a){return e<2?i+a:"border"+a+i});vu[e>1?"border"+i:i]=function(a,l,c,u,f){var h,p;if(arguments.length<4)return h=o.map(function(g){return es(a,g,c)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(u+"").split(" "),p={},o.forEach(function(g,d){return p[g]=h[d]=h[d]||h[(d-1)/2|0]}),a.init(l,p,f)}});var ab={name:"css",register:Od,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,s,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,p,g,d,m,_,x,v,y,M,E,A,b;nm||Od(),this.styles=this.styles||eb(e),b=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(Bn[d]&&Hy(d,t,n,s,e,r)))){if(p=typeof u,g=vu[d],p==="function"&&(u=u.call(n,s,e,r),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Rl(u)),g)g(this,e,d,u,n)&&(A=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",qs.lastIndex=0,qs.test(c)||(m=an(c),_=an(u)),_?m!==_&&(c=er(e,d,c,_)+_):m&&(u+=m),this.add(a,"setProperty",c,u,s,r,0,0,d),o.push(d),b.push(d,0,a[d]);else if(p!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,s,e,r):l[d],$t(c)&&~c.indexOf("random(")&&(c=Rl(c)),an(c+"")||(c+=Wn.units[d]||an(es(e,d))||""),(c+"").charAt(1)==="="&&(c=es(e,d))):c=es(e,d),h=parseFloat(c),x=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),f=parseFloat(u),d in Fi&&(d==="autoAlpha"&&(h===1&&es(e,"visibility")==="hidden"&&f&&(h=0),b.push("visibility",0,a.visibility),Vs(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),d!=="scale"&&d!=="transform"&&(d=Fi[d],~d.indexOf(",")&&(d=d.split(",")[0]))),v=d in ps,v){if(this.styles.save(d),y||(M=e._gsap,M.renderTransform&&!t.parseTransform||Dl(e,t.parseTransform),E=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new Rn(this._pt,a,yt,0,1,M.renderTransform,M,0,-1),y.dep=1),d==="scale")this._pt=new Rn(this._pt,M,"scaleY",M.scaleY,(x?Do(M.scaleY,x+f):f)-M.scaleY||0,Dd),this._pt.u=0,o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){b.push(bi,0,a[bi]),u=vD(u),M.svg?Ud(e,u,0,E,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==M.zOrigin&&Vs(this,M,"zOrigin",M.zOrigin,_),Vs(this,a,d,xu(c),xu(u)));continue}else if(d==="svgOrigin"){Ud(e,u,1,E,0,this);continue}else if(d in sb){MD(this,M,d,h,x?Do(h,x+u):u);continue}else if(d==="smoothOrigin"){Vs(this,M,"smooth",M.smooth,u);continue}else if(d==="force3D"){M[d]=u;continue}else if(d==="transform"){SD(this,u,e);continue}}else d in a||(d=fa(d)||d);if(v||(f||f===0)&&(h||h===0)&&!sD.test(u)&&d in a)m=(c+"").substr((h+"").length),f||(f=0),_=an(u)||(d in Wn.units?Wn.units[d]:m),m!==_&&(h=er(e,d,c,_)),this._pt=new Rn(this._pt,v?M:a,d,h,(x?Do(h,x+f):f)-h,!v&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?aD:Dd),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=oD);else if(d in a)_D.call(this,e,d,c,x?x+u:u);else if(d in e)this.add(e,d,c||e[d],x?x+u:u,s,r);else if(d!=="parseTransform"){Yp(d,u);continue}v||(d in a?b.push(d,0,a[d]):b.push(d,1,c||e[d])),o.push(d)}}A&&$y(this)},render:function(e,t){if(t.tween._time||!im())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:es,aliases:Fi,getSetter:function(e,t,n){var s=Fi[t];return s&&s.indexOf(",")<0&&(t=s),t in ps&&t!==bi&&(e._gsap.x||es(e,"x"))?n&&x_===n?t==="scale"?fD:uD:(x_=n||{})&&(t==="scale"?hD:dD):e.style&&!Wp(e.style[t])?lD:~t.indexOf("-")?cD:em(e,t)},core:{_removeProperty:Pl,_getMatrix:rm}};Pn.utils.checkPrefix=fa;Pn.core.getStyleSaver=eb;(function(i,e,t,n){var s=Cn(i+","+e+","+t,function(r){ps[r]=1});Cn(e,function(r){Wn.units[r]="deg",sb[r]=1}),Fi[s[13]]=i+","+e,Cn(n,function(r){var o=r.split(":");Fi[o[1]]=s[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Wn.units[i]="px"});Pn.registerPlugin(ab);var Jl=Pn.registerPlugin(ab)||Pn;Jl.core.Tween;const wD=["#000000","#ffffff"],TD=["#ffffff","#000000"],ED=["#418fde","#ffd100","#ef3340"],AD=["#007a36","#000000","#d32011"],CD=["#cc092f","#000000","#ffcb00"],RD=["#012169","#ffffff","#c8102e"],LD=["#0053a5","#ffce00","#d21034"],PD=["#ff0000","#000000"],ID=["#d0103a","#0018a8","#fedf00"],DD=["#ff0000","#00732f","#000000"],ND=["#74acdf","#ffffff","#f6b40e"],OD=["#d90012","#f2a800","#0033a0"],UD=["#000066","#ffffff","#bd1021"],FD=["#3a7dce","#ffffff"],kD=["#002395","#ffffff","#ed2939"],zD=["#ce1126","#000000","#0072c6"],BD=["#012169","#ffffff","#e4002b"],VD=["#ed2939","#ffffff"],GD=["#00b9e4","#3f9c35","#ed2939"],HD=["#ffffff","#1eb53a","#ce1126"],WD=["#000000","#fae042","#ed2939"],jD=["#008751","#fcd116","#e8112d"],XD=["#012a87","#ffffff","#f9d90f"],YD=["#009e49","#ef2b2d","#fcd116"],qD=["#006a4e","#f42a41"],$D=["#ffffff","#d62612","#00966e"],KD=["#ce1126","#ffffff"],ZD=["#00778b","#000000","#ffc72c"],JD=["#002395","#fecb00","#ffffff"],QD=["#ffffff","#eace24","#1353b4"],eN=["#ce1720","#007c30","#ffffff"],tN=["#171696","#d90f19","#ffffff"],nN=["#c8102e","#ffffff","#012169"],iN=["#d52b1e","#007934","#f9e300"],sN=["#009b3a","#fedf00","#002776"],rN=["#00267f","#ffc726","#000000"],oN=["#f7e017","#ffffff","#000000"],aN=["#ffd520","#ff4e12","#ffffff"],lN=["#ef2b2d","#002868","#ffffff"],cN=["#6da9d2","#000000","#ffffff"],uN=["#ffce00","#ffffff","#289728"],fN=["#ff0000","#ffffff"],hN=["#008000","#ffe000"],dN=["#ff0000","#ffffff"],pN=["#d52b1e","#ffffff","#0039a6"],mN=["#de2910","#ffde00"],gN=["#ffffff","#f77f00","#009e60"],_N=["#fcd116","#007a5e","#ce1126"],vN=["#007fff","#ce1021","#f7d618"],xN=["#009543","#dc241f","#fbde4a"],yN=["#012169","#ffffff","#c8102e"],bN=["#fcd116","#003893","#ce1126"],MN=["#ffc61e","#3a75c4","#3d8e33"],SN=["#003893","#ffffff","#cf2027"],wN=["#ffffff","#002b7f","#ce1126"],TN=["#002a8f","#ffffff","#cf142b"],EN=["#002b7f","#f9e814","#ffffff"],AN=["#0021ad","#1c8a42","#ffc639"],CN=["#012169","#ffffff","#c8102e"],RN=["#ffffff","#d57800","#4e5b31"],LN=["#ffffff","#d7141a","#11457e"],PN=["#000000","#ffce00","#dd0000"],IN=["#12ad2b","#6ab2e7","#ffffff"],DN=["#006b3f","#fcd116","#ffffff"],NN=["#c60c30","#ffffff"],ON=["#ce1126","#002d62","#ffffff"],UN=["#ffffff","#006233","#d21034"],FN=["#ffdd00","#ed1c24","#034ea2"],kN=["#ce1126","#000000","#ffffff"],zN=["#ea0437","#12ad2b","#4189dd"],BN=["#000000","#007a3d","#ffffff"],VN=["#c60b1e","#ffc400","#ad1519"],GN=["#ffffff","#0072ce","#000000"],HN=["#da121a","#078930","#fcdd09"],WN=["#ffffff","#003580"],jN=["#69b3e7","#c8102e","#ffffff"],XN=["#012169","#ffffff","#c8102e"],YN=["#ffffff","#002395","#ed2939"],qN=["#ffffff","#ed2939","#0065bd"],$N=["#75b2dd","#ffffff"],KN=["#009e60","#fcd116","#3a75c4"],ZN=["#c8102e","#ffffff","#012169"],JN=["#ffffff","#ff0000"],QN=["#ffffff","#e8112d","#f9dd16"],eO=["#ce1126","#006b3f","#fcd116"],tO=["#ffffff","#da000c","#000000"],nO=["#fcd116","#ce1126","#009460"],iO=["#000000","#002488","#fcdd09"],sO=["#ce1126","#3a7728","#0c1c8c"],rO=["#fcd116","#009e49","#ce1126"],oO=["#3e9a00","#e32118","#ffffff"],aO=["#0d5eaf","#ffffff"],lO=["#ce1126","#fcd116","#007a5e"],cO=["#d00c33","#ffffff"],uO=["#4997d0","#ffffff"],fO=["#078930","#fcdd09","#da121a"],hO=["#00297b","#c62139","#92dbfc"],dO=["#009e49","#ce1126","#fcd116"],pO=["#de2910","#ffffff"],mO=["#00008b","#ffffff","#ff0000"],gO=["#0073cf","#ffffff"],_O=["#ff0000","#171796","#ffffff"],vO=["#00209f","#d21034","#ffffff"],xO=["#cd2a3e","#436f4d","#ffffff"],yO=["#ff0000","#ffffff"],bO=["#cf142b","#ffffff","#000000"],MO=["#ff9933","#128807","#ffffff"],SO=["#ffffff","#012169","#c8102e"],wO=["#169b62","#ffffff","#ff883e"],TO=["#ffffff","#da0000","#239f40"],EO=["#ce1126","#000000","#ffffff"],AO=["#02529c","#dc1e35","#ffffff"],CO=["#ffffff","#0038b8"],RO=["#ffffff","#009246","#ce2b37"],LO=["#fed100","#009b3a","#000000"],PO=["#ffffff","#ce0f25"],IO=["#000000","#007a3d","#ce1126"],DO=["#ffffff","#bc002d"],NO=["#00afca","#fec50c"],OO=["#000000","#bb0000","#006600"],UO=["#ff0000","#ffff00"],FO=["#032ea1","#e00025","#ffffff"],kO=["#c81010","#ffffff","#183070"],zO=["#000000","#009e49","#ce1126"],BO=["#ffffff","#000000","#cd2e3a"],VO=["#007a3d","#ce1126","#ffffff"],GO=["#ce1126","#002868","#ffffff"],HO=["#ed1c24","#ffffff","#00a651"],WO=["#bf0a30","#ffffff","#002868"],jO=["#000000","#e70013","#239e46"],XO=["#66ccff","#fcd116","#000000"],YO=["#ce1126","#002b7f","#ffd83d"],qO=["#ffbe29","#8d153a","#00534e"],$O=["#ffffff","#00209f","#009543"],KO=["#fdb913","#c1272d","#006a44"],ZO=["#ed2939","#00a1de","#ffffff"],JO=["#9e3039","#ffffff"],QO=["#0f7562","#ffffff","#ffde23"],eU=["#ffffff","#002395","#ed2939"],tU=["#c1272d","#006233"],nU=["#ce1126","#ffffff"],iU=["#cc092f","#0046ae","#ffd200"],sU=["#fc3d32","#007e3a","#ffffff"],rU=["#d21034","#007e3a","#ffffff"],oU=["#006847","#ce1126","#ffffff"],aU=["#003893","#ffffff","#dd7500"],lU=["#ce2028","#f9d616"],cU=["#fcd116","#14b53a","#ce1126"],uU=["#cf142b","#ffffff","#cccccc"],fU=["#fecb00","#ea2839","#34b233"],hU=["#c40308","#d3ae3b","#d4af3a"],dU=["#da2032","#0066b3","#ffd900"],pU=["#0071bc","#ffffff","#8c8a8c"],mU=["#fce100","#007168","#000000"],gU=["#006233","#cd2a3e","#ffc400"],_U=["#012169","#c8102e","#ffffff"],vU=["#21428e","#ffffff"],xU=["#ea2839","#1a206d","#ffd500"],yU=["#ce1126","#339e35","#000000"],bU=["#ffffff","#cc0000","#000066"],MU=["#ffffff","#dfdfdf","#d42e12"],SU=["#009543","#003580","#d21034"],wU=["#009543","#0035ad","#ed4135"],TU=["#e05206","#0db02b","#ffffff"],EU=["#007934","#ffffff"],AU=["#008751","#ffffff"],CU=["#0067c6","#ffffff"],RU=["#fedd00","#ffffff","#c8102e"],LU=["#ae1c28","#21468b","#ffffff"],PU=["#ef2b2d","#002868","#ffffff"],IU=["#000000","#dc143c","#003893"],DU=["#002b7f","#ffc61e","#ffffff"],NU=["#012169","#c8102e","#ffffff"],OU=["#db161b","#ffffff","#008000"],UU=["#01411c","#ffffff"],FU=["#ffffff","#072357","#da121a"],kU=["#012169","#c8102e","#ffffff"],zU=["#d91023","#ffffff"],BU=["#ce1126","#0038a8","#ffffff"],VU=["#0099ff","#ffff00"],GU=["#000000","#ce1126","#fcd116"],HU=["#ffffff","#dc143c"],WU=["#ee0000","#ffffff","#0050f0"],jU=["#ed1c27","#024fa2","#ffffff"],XU=["#006600","#ff0000","#ffff00"],YU=["#d52b1e","#0038a8","#ffffff"],qU=["#000000","#007a3d","#ffffff"],$U=["#ce1126","#ffffff","#ff9c10"],KU=["#8d1b3d","#ffffff"],ZU=["#3366ff","#ff0000","#ffff00"],JU=["#fcd116","#002b7f","#ce1126"],QU=["#ffffff","#d52b1e","#0039a6"],eF=["#00a1de","#fad201","#20603d"],tF=["#006c35","#ffffff"],nF=["#d21034","#000000","#ffffff"],iF=["#00853f","#e31b23","#fdef42"],sF=["#ffffff","#ed2939"],rF=["#012169","#ffffff","#c8102e"],oF=["#012169","#c8102e","#ffffff"],aF=["#ef2b2d","#002868","#ffffff"],lF=["#215b33","#0051ba","#fcd116"],cF=["#1eb53a","#0072c6","#ffffff"],uF=["#0047ab","#ffffff"],fF=["#ffffff","#5eb6e4","#658d5c"],hF=["#4189dd","#ffffff"],dF=["#0092c8","#ffcf00","#0091c8"],pF=["#ffffff","#c6363c","#000000"],mF=["#000000","#078930","#0f47af"],gF=["#12ad2b","#ffce00","#d21034"],_F=["#377e3f","#b40a2d","#ffffff"],vF=["#ee1c25","#ffffff","#0b4ea2"],xF=["#ff0000","#005ce5","#ffffff"],yF=["#006aa7","#fecc00"],bF=["#3e5eb9","#b10c0c","#ffd900"],MF=["#dc171d","#012a87","#ffffff"],SF=["#d62828","#003f87","#007a3d"],wF=["#ce1126","#000000","#ffffff"],TF=["#002868","#ce1126","#ffffff"],EF=["#fecb00","#002664","#c60c30"],AF=["#006a4e","#ffce00","#d21034"],CF=["#a51931","#f4f5f8","#2d2a4a"],RF=["#ffffff","#cc0000","#006600"],LF=["#012169","#ffd100","#ffffff"],PF=["#00843d","#d22630","#ffc72c"],IF=["#dc241f","#000000","#ffc726"],DF=["#c10000","#ffffff"],NF=["#da1a35","#000000","#ffffff"],OF=["#e70013","#ffffff"],UF=["#e30a17","#ffffff"],FF=["#0095c8","#c8102e","#ffffff"],kF=["#fe0000","#000095","#ffffff"],zF=["#000000","#1eb53a","#00a3dd"],BF=["#fcdc04","#000000","#d90000"],VF=["#005bbb","#ffd500"],GF=["#b22234","#ffffff","#3c3b6e"],HF=["#ffffff","#0038a8","#7b3f00"],WF=["#b22234","#ffffff","#3c3b6e"],jF=["#ffffff","#1eb53a","#0099b5"],XF=["#ffe000","#ffffff","#cccccc"],YF=["#fcd022","#007c2e","#002674"],qF=["#ffcc00","#cf142b","#00247d"],$F=["#012169","#ffffff","#c8102e"],KF=["#ffffff","#f4c53d","#010002"],ZF=["#da251d","#ffff00"],JF=["#009543","#d21034","#000000"],QF=["#ed2939","#ffffff","#002395"],ek=["#ce1126","#002b7f","#ffffff"],tk=["#244aa5","#d0a650","#ffffff"],nk=["#ce1126","#000000","#ffffff"],ik=["#007749","#e03c31","#001489"],sk=["#198a00","#ef7d00","#000000"],rk=["#006400","#ffd200","#d40000"],mr={ALL:wD,BZH:TD,ABW:ED,AFG:AD,AGO:CD,AIA:RD,ALA:LD,ALB:PD,AND:ID,ARE:DD,ARG:ND,ARM:OD,ASM:UD,ATA:FD,ATF:kD,ATG:zD,AUS:BD,AUT:VD,AZE:GD,BDI:HD,BEL:WD,BEN:jD,BES:XD,BFA:YD,BGD:qD,BGR:$D,BHR:KD,BHS:ZD,BIH:JD,BLM:QD,BLR:eN,BLZ:tN,BMU:nN,BOL:iN,BRA:sN,BRB:rN,BRN:oN,BTN:aN,BVT:lN,BWA:cN,CAF:uN,CAN:fN,CCK:hN,CHE:dN,CHL:pN,CHN:mN,CIV:gN,CMR:_N,COD:vN,COG:xN,COK:yN,COL:bN,COM:MN,CPV:SN,CRI:wN,CUB:TN,CUW:EN,CXR:AN,CYM:CN,CYP:RN,CZE:LN,DEU:PN,DJI:IN,DMA:DN,DNK:NN,DOM:ON,DZA:UN,ECU:FN,EGY:kN,ERI:zN,ESH:BN,ESP:VN,EST:GN,ETH:HN,FIN:WN,FJI:jN,FLK:XN,FRA:YN,FRO:qN,FSM:$N,GAB:KN,GBR:ZN,GEO:JN,GGY:QN,GHA:eO,GIB:tO,GIN:nO,GLP:iO,GMB:sO,GNB:rO,GNQ:oO,GRC:aO,GRD:lO,GRL:cO,GTM:uO,GUF:fO,GUM:hO,GUY:dO,HKG:pO,HMD:mO,HND:gO,HRV:_O,HTI:vO,HUN:xO,IDN:yO,IMN:bO,IND:MO,IOT:SO,IRL:wO,IRN:TO,IRQ:EO,ISL:AO,ISR:CO,ITA:RO,JAM:LO,JEY:PO,JOR:IO,JPN:DO,KAZ:NO,KEN:OO,KGZ:UO,KHM:FO,KIR:kO,KNA:zO,KOR:BO,KWT:VO,LAO:GO,LBN:HO,LBR:WO,LBY:jO,LCA:XO,LIE:YO,LKA:qO,LSO:$O,LTU:KO,LUX:ZO,LVA:JO,MAC:QO,MAF:eU,MAR:tU,MCO:nU,MDA:iU,MDG:sU,MDV:rU,MEX:oU,MHL:aU,MKD:lU,MLI:cU,MLT:uU,MMR:fU,MNE:hU,MNG:dU,MNP:pU,MOZ:mU,MRT:gU,MSR:_U,MTQ:vU,MUS:xU,MWI:yU,MYS:bU,MYT:MU,NAM:SU,NCL:wU,NER:TU,NFK:EU,NGA:AU,NIC:CU,NIU:RU,NLD:LU,NOR:PU,NPL:IU,NRU:DU,NZL:NU,OMN:OU,PAK:UU,PAN:FU,PCN:kU,PER:zU,PHL:BU,PLW:VU,PNG:GU,POL:HU,PRI:WU,PRK:jU,PRT:XU,PRY:YU,PSE:qU,PYF:$U,QAT:KU,REU:ZU,ROU:JU,RUS:QU,RWA:eF,SAU:tF,SDN:nF,SEN:iF,SGP:sF,SGS:rF,SHN:oF,SJM:aF,SLB:lF,SLE:cF,SLV:uF,SMR:fF,SOM:hF,SPM:dF,SRB:pF,SSD:mF,STP:gF,SUR:_F,SVK:vF,SVN:xF,SWE:yF,SWZ:bF,SXM:MF,SYC:SF,SYR:wF,TCA:TF,TCD:EF,TGO:AF,THA:CF,TJK:RF,TKL:LF,TKM:PF,TLS:IF,TON:DF,TTO:NF,TUN:OF,TUR:UF,TUV:FF,TWN:kF,TZA:zF,UGA:BF,UKR:VF,UMI:GF,URY:HF,USA:WF,UZB:jF,VAT:XF,VCT:YF,VEN:qF,VGB:$F,VIR:KF,VNM:ZF,VUT:JF,WLF:QF,WSM:ek,XKX:tk,YEM:nk,ZAF:ik,ZMB:sk,ZWE:rk};function Fd(i,e,t=!1){e.mapping=t?lu:au;const n=new sd(i);n.compileEquirectangularShader();const s=n.fromEquirectangular(e).texture,r=s&&s.mapping===ql?s.image.height:null;if(r===null)return null;const o=Math.log2(r)-2,a=1/r,l=1/(3*Math.max(Math.pow(2,o),7*16));return s.userData={...s.userData,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:a,CUBEUV_MAX_MIP:o+"."},e.dispose(),n.dispose(),s}let ok=0;function wt(i,e,t){const n=()=>{};return{c:++ok,shader:i,use:r=>{const o=r.material||r;return o[e]=i,o.needsUpdate=!0,r},unuse:n,clear:n}}const ak=`precision highp float;

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
}`,lk=wt(ak,"fragmentShader"),ck=`attribute vec3 position, normal;
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
}`,uk=wt(ck,"vertexShader");class fk extends tr{constructor(e={}){super(e),lk.use(this),uk.use(this)}}const hk=`precision highp float;

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
}`,dk=wt(hk,"fragmentShader"),pk=`attribute vec3 position, normal;
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
}`,mk=wt(pk,"vertexShader");class gk extends tr{constructor(e={}){super(e),dk.use(this),mk.use(this)}}const _k=`precision highp float;

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
}`,vk=wt(_k,"fragmentShader"),xk=`attribute vec3 position, normal;
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
}`,yk=wt(xk,"vertexShader");class bk extends tr{constructor(e={}){super(e),vk.use(this),yk.use(this)}}const Mk=`precision highp float;
varying vec2 vUv;
varying vec3 vNormal;
varying float vSize;

uniform vec3 uColor;
uniform bool uEmissiveOnly;

void main() {
  vec3 finalColor = uColor * length(vNormal.rg + .25);
  finalColor = mix(finalColor, finalColor * vSize * 5., float(uEmissiveOnly));

  gl_FragColor = vec4(vec3(finalColor), 1.0);
}`,Sk=wt(Mk,"fragmentShader"),wk=`attribute vec3 position;
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
}`,Tk=wt(wk,"vertexShader");class Ek extends tr{constructor(e={}){super(e),Sk.use(this),Tk.use(this)}}var Vu,lb,Gu,cb;class Ak extends ln{constructor(){super();ve(this,Vu);ve(this,Gu);this.count=100,this.geometry=Ve(this,Vu,lb).call(this),this.material=Ve(this,Gu,cb).call(this)}}Vu=new WeakSet,lb=function(){const t=new g3;t.instanceCount=this.count;const n=new ba(1,1,1);t.index=n.index,t.attributes=n.attributes;const s=3,r=[];let o=0;for(let l=0;l<this.count;l++)o=l*s,r[o++]=Sh(.05,.15),r[o++]=Sh(5e-4,.001),r[o++]=Sh(0,2*Math.PI);const a=new P3(new Float32Array(r),s);return t.setAttribute("aSize",new Po(a,1,0,!1)),t.setAttribute("aSpeed",new Po(a,1,1,!1)),t.setAttribute("aRad",new Po(a,1,2,!1)),t},Gu=new WeakSet,cb=function(){return new Ek({uniforms:{uTime:rn.uTime,uEmissiveOnly:rn.uEmissiveOnly,uShadowOnly:rn.uShadowOnly,uGlobalSpead:{value:1},uRadius:{value:.23},uColor:{value:new Pe("orange")},uElevation:{value:.8}}})};var Go,Ho,Bd,Vd,Ps;class ub extends dt{constructor(t,n){super();ve(this,Go,void 0);ve(this,Ho,new xn);ve(this,Bd,new xn);ve(this,Vd,new ya);ve(this,Ps,new z);Ue.register(this),this.name=n,this.model=t;const s=Fd(Me.webgl.renderer,Me.core.assetsManager.get("envmap"),!1),[r,o]=Me.core.assetsManager.get("playerAo","noise");r.flipY=!1,r.generateMipmaps=!1,o.wrapS=o.wrapT=pi,this.body=t.getObjectByName("body");const a=t.getObjectByName("face"),l=t.getObjectByName("gold");this.raycastCube=t.getObjectByName("raycastCube");const{face:c,body:u,gold:f}=W3;a.material=new gk({uniforms:{uEmissiveOnly:rn.uEmissiveOnly,uShadowOnly:rn.uShadowOnly,uLightPosition:Me.webgl.scene.commonShadowUniforms.uLightPosition,uRoughness:{value:c.roughness},uMetalness:{value:c.metalness},uEnvMapIntensity:{value:c.envMapIntensity},uColor:{value:new Pe(mr[n][0])},tEnvMap:{value:s},tAoMap:{value:r},uAoMapIntensity:{value:c.aoMapIntensity}},defines:{...s.userData}}),this.body.material=new fk({uniforms:{...Me.webgl.scene.commonShadowUniforms,...Me.webgl.scene.staticShadowUniforms,uEmissiveOnly:rn.uEmissiveOnly,uShadowOnly:rn.uShadowOnly,uColor1:{value:new Pe(mr[n][1])},uColor2:{value:new Pe(mr[n][0])},uColor3:{value:new Pe(mr[n][2]||16777215)},tAoMap:{value:r},uAoMapIntensity:{value:u.aoMapIntensity},tNoise:{value:o}},defines:{...s.userData,NEAR:`${Me.webgl.scene.shadowCamera.near}.`,FAR:`${Me.webgl.scene.shadowCamera.far}.`}}),l.material=new bk({uniforms:{uEmissiveOnly:rn.uEmissiveOnly,uShadowOnly:rn.uShadowOnly,uLightPosition:Me.webgl.scene.commonShadowUniforms.uLightPosition,uRoughness:{value:f.roughness},uMetalness:{value:f.metalness},uEnvMapIntensity:{value:f.envMapIntensity},uColor:{value:f.color},tEnvMap:{value:s},tAoMap:{value:r},uAoMapIntensity:{value:1}},defines:{...s.userData}}),this.raycastCube.visible=!1,this.headBone=t.getObjectByName("tête2"),this.model.scale.setScalar(.4),this.model.rotation.y=Math.PI,this.flame=new Ak,this.flame.position.y=1,this.mixer=new L3(this.model),this.animations=this.model.animations,this.add(this.model,this.flame)}onTick({dt:t}){this.mixer.update(t)}startIdle(){var s;(s=G(this,Go))==null||s.kill(),mt(this,Go,Jl.timeline({onStart:()=>{this.mixer.clipAction(this.animations[0]).play()},onUpdate:()=>{this.headBone.getWorldPosition(G(this,Ps)),G(this,Ho).y===0?this.flame.position.z=-(G(this,Ps).z-this.position.z)*5:G(this,Ho).y===1?this.flame.position.z=(G(this,Ps).z-this.position.z)*5:G(this,Ho).y>0?this.flame.position.z=(G(this,Ps).x-this.position.x)*5:this.flame.position.z=-(G(this,Ps).x-this.position.x)*5},onComplete:()=>{this.mixer.clipAction(this.animations[0]).stop(),this.startIdle()}}));const t={value:0},n=this.animations[0].duration;G(this,Go).to(t,{value:1,duration:n,ease:"power3.out"},0)}updateISO(t){this.body.material.uniforms.uColor1.value=new Pe(mr[t][1]),this.body.material.uniforms.uColor2.value=new Pe(mr[t][0]),this.body.material.uniforms.uColor3.value=new Pe(mr[t][2]||16777215)}}Go=new WeakMap,Ho=new WeakMap,Bd=new WeakMap,Vd=new WeakMap,Ps=new WeakMap;var Lr,Is,Ds,Pi,Wo,Ns,Hu,Wu,Os;class Ck extends ub{constructor(t,n){var s;super(t,n.iso);ve(this,Lr,void 0);ve(this,Is,void 0);ve(this,Ds,new z);ve(this,Pi,new z);ve(this,Wo,new We);ve(this,Ns,new xn);ve(this,Hu,new xn);ve(this,Wu,new ya);ve(this,Os,new z);Ue.register(this),mt(this,Is,n.position),G(this,Ds).set(G(this,Is).x+.5,0,G(this,Is).y+.5),G(this,Pi).copy(G(this,Ds)),this.position.copy(G(this,Ds)),(s=Me.debug)==null||s.mapping.add(this,"Player",0,"Player: "+this.name)}addRaycaster(){this.raycaster=new I3,Ue.on(Ye.POINTER_DOWN,t=>{this.raycaster.setFromCamera(t.webgl,Me.webgl.camera),this.raycaster.intersectObject(this.raycastCube).length>0&&(Me.webgl.camera.focusPlayer=!0)})}move(){var s;(s=G(this,Lr))==null||s.kill(),mt(this,Lr,Jl.timeline({onStart:()=>{this.mixer.clipAction(this.animations[0]).play()},onUpdate:()=>{this.headBone.getWorldPosition(G(this,Os)),G(this,Wu).setFromQuaternion(this.headBone.getWorldQuaternion(G(this,Hu))),G(this,Ns).y===0?this.flame.position.z=(G(this,Os).z-this.position.z)*5:G(this,Ns).y===1?this.flame.position.z=-(G(this,Os).z-this.position.z)*5:G(this,Ns).y>0?this.flame.position.z=(G(this,Os).x-this.position.x)*5:this.flame.position.z=-(G(this,Os).x-this.position.x)*5},onComplete:()=>{this.mixer.clipAction(this.animations[0]).stop()}})),G(this,Ds).set(G(this,Pi).x,0,G(this,Pi).z),G(this,Pi).set(G(this,Is).x+.5,0,G(this,Is).y+.5),G(this,Wo).identity(),G(this,Wo).lookAt(G(this,Ds),G(this,Pi),this.up),G(this,Ns).setFromRotationMatrix(G(this,Wo));const t={value:0},n=this.animations[0].duration/3;G(this,Lr).to(t,{value:1,onUpdate:()=>this.quaternion.slerp(G(this,Ns),t.value),duration:n,ease:"power3.out"},0),G(this,Lr).to(this.position,{x:G(this,Pi).x,z:G(this,Pi).z,duration:this.animations[0].duration-n,ease:"power3.inOut",delay:n},0)}}Lr=new WeakMap,Is=new WeakMap,Ds=new WeakMap,Pi=new WeakMap,Wo=new WeakMap,Ns=new WeakMap,Hu=new WeakMap,Wu=new WeakMap,Os=new WeakMap;const Rk=`precision highp float;

uniform sampler2D tDiffuse, tEmissive, tDepth;
uniform float uEmissiveIntensity;

varying vec2 vUv;

#define PI 3.14159265359

void main() {
	vec4 diffuse = texture2D(tDiffuse, vUv);
	vec3 emissive = texture2D(tEmissive, vUv).rgb;
	

	vec4 color = diffuse + vec4(emissive, length(emissive)) * uEmissiveIntensity;

	gl_FragColor = color;
}`,Lk=wt(Rk,"fragmentShader"),Pk=`attribute vec3 position;
attribute vec2 uv;

uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelMatrix * vec4(position, 1.);

}`,Ik=wt(Pk,"vertexShader");class Dk extends tr{constructor(e={}){super(e),Lk.use(this),Ik.use(this)}}const Nk=`precision highp float;

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
}`,Ok=wt(Nk,"fragmentShader"),Uk=`attribute vec3 position;
attribute vec2 uv;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);

}`,Fk=wt(Uk,"vertexShader");class kk extends tr{constructor(e={}){super(e),Ok.use(this),Fk.use(this)}}var jo,$c;class zk{constructor({dpr:e=1}){ve(this,jo);Ue.register(this),this.dpr=e,this.renderTargets=[Ve(this,jo,$c).call(this),Ve(this,jo,$c).call(this),Ve(this,jo,$c).call(this)],this.material=new kk({uniforms:{tEmissive:{value:this.renderTargets[0].texture},uHorizontal:{value:0},uResolution:{value:new Be}}})}onResize({width:e,height:t}){this.uniforms.uResolution.value.set(e*this.dpr,t*this.dpr),this.renderTargets.forEach(n=>n.setSize(e*this.dpr,t*this.dpr))}get texture(){return this.renderTargets[2].texture}get uniforms(){return this.material.uniforms}}jo=new WeakSet,$c=function(){return new Bi(Me.tools.viewport.width*this.dpr,Me.tools.viewport.height*this.dpr,{samples:0})};var Us,ju,fb;class Bk{constructor(e=!0){ve(this,ju);ve(this,Us,void 0);Ue.register(this),this.renderTarget=Ve(this,ju,fb).call(this,!0),this.emissivePass=new zk({dpr:1}),mt(this,Us,new Dk({uniforms:{...rn,tDiffuse:{value:this.renderTarget.texture},tDepth:{value:this.renderTarget.depthTexture},tEmissive:{value:this.emissivePass.texture},uResolution:{value:new Be},uRatio:{value:Me.tools.viewport.ratio},uEmissiveIntensity:{value:.5}}}));const t=new Yn().setAttribute("position",new Hn([-1,3,0,-1,-1,0,3,-1,0],3)).setAttribute("uv",new Hn([0,2,0,0,2,0],2));this.quad=new ln(t,G(this,Us)),this.emissiveQuad=new ln(t,this.emissivePass.material),this.camera=new $l(-1,1,1,-1,0,1)}onAttach(){var e;(e=Me.debug)==null||e.mapping.add(this,"PostProcessing")}onResize({width:e,height:t,dpr:n,ratio:s}){G(this,Us).uniforms.uResolution.value.set(e*n,t*n),G(this,Us).uniforms.uRatio.value=s,this.renderTarget.setSize(e*n,t*n)}get uniforms(){return G(this,Us).uniforms}}Us=new WeakMap,ju=new WeakSet,fb=function(e=!1){const t=new Bi(Me.tools.viewport.width*Me.tools.viewport.dpr,Me.tools.viewport.height*Me.tools.viewport.dpr,{samples:2});if(e){const n=new Ep(Me.tools.viewport.width*Me.tools.viewport.dpr,Me.tools.viewport.height*Me.tools.viewport.dpr);t.depthTexture=n}return t};class Vk extends Ap{constructor(){super({antialias:!1,powerPreference:"high-performance"}),Ue.register(this),this.outputEncoding=it,this.autoClear=!1,this.debug.checkShaderErrors=G3}onAttach(){var e;(e=Me.debug)==null||e.mapping.add(this,"Stats")}onResize({width:e,height:t,dpr:n}){this.setSize(e,t),this.setPixelRatio(n)}}class Gk extends sn{constructor(){super(ft.baseFov,Me.tools.viewport.ratio,ft.near,ft.far),Ue.register(this)}onResize({ratio:e}){this.aspect=e,this.fov=ft.baseFov/Math.min(1,e*1.5),this.updateProjectionMatrix()}}class Hk extends _x{constructor(){super(),Ue.register(this),this.background=new Pe("#FFF")}onAppLoaded(){const e=Me.core.assetsManager.get("player"),t=ay(e);t.animations=e.animations,this.player=new ub(t,"BZH"),this.player.rotation.y=170*(Math.PI/180),this.player.position.z=-4,this.player.position.y=-1,this.player.startIdle(),this.add(this.player),Ue.on(Ye.SELECT_TEAM_UPDATE,n=>{this.player.updateISO(n),Jl.to(this.player.rotation,{y:this.player.rotation.y+Math.PI*2,duration:.5})})}}var Fn,ns,kn,Wl,Xo,Kc;class Wk extends sn{constructor(){super(ft.baseFov,Me.tools.viewport.ratio,ft.near,ft.far);ve(this,Xo);Nn(this,"orbitControls");Nn(this,"dragEase",ft.dragEase);Nn(this,"zoomEase",ft.zoomEase);Nn(this,"targetZoom",0);ve(this,Fn,0);ve(this,ns,new z);ve(this,kn,new Be);ve(this,Wl,!1);Ue.register(this),this.position.fromArray(ft.defaultPosition),G(this,kn).set(this.position.x,this.position.z)}onAttach(){var t;(t=Me.debug)==null||t.mapping.add(this,"Camera")}onDrag(t){this.focusPlayer&&(this.focusPlayer=!1),Ve(this,Xo,Kc).call(this),this.dragEase=10;const n=this.getVisibleWidthAtZDepth()*.5,s=this.getVisibleHeightAtZDepth()*.5;G(this,kn).x-=t.x*n,G(this,kn).y+=t.y*s*(G(this,Fn)+1)}onDragEnd(){this.dragEase=ft.dragEase}onPinch(t){this.focusPlayer&&(this.focusPlayer=!1),Ve(this,Xo,Kc).call(this),this.targetZoom=Ic(this.targetZoom+t*.005,0,1)}onWheel(t){this.focusPlayer&&(this.focusPlayer=!1),Ve(this,Xo,Kc).call(this),this.targetZoom=Ic(this.targetZoom-t*.001,0,1)}onTick({dt:t}){this.orbitControls||(mt(this,Fn,za(G(this,Fn),this.targetZoom,this.zoomEase,t)),rn.uZoom.value=G(this,Fn),this.position.y=F3(G(this,Fn),0,1,ft.minZoom,ft.maxZoom),G(this,kn).x=Ic(G(this,kn).x,0,El.size),G(this,kn).y=Ic(G(this,kn).y,0,El.size+G(this,Fn)*20),this.focusPlayer?(this.position.x=za(this.position.x,G(this,ns).x,ft.playerPosEase,t),this.position.z=za(this.position.z,G(this,ns).z+ft.zoomOffsetY*G(this,Fn),ft.playerPosEase,t)):(this.position.x=za(this.position.x,G(this,kn).x,this.dragEase,t),this.position.z=za(this.position.z,G(this,kn).y+ft.zoomOffsetY*G(this,Fn),this.dragEase,t)),this.rotation.x=-Math.PI*.5+z3(G(this,Fn),.3,1)*ft.maxTiltAngle)}onResize({ratio:t}){this.aspect=t,this.fov=ft.baseFov/Math.min(1,t*1.5),this.updateProjectionMatrix()}getVisibleHeightAtZDepth(t=0){t<this.position.y?t-=this.position.y:t+=this.position.y;const n=this.fov*Math.PI/180;return 2*Math.tan(n/2)*Math.abs(t)}getVisibleWidthAtZDepth(t=0){return this.getVisibleHeightAtZDepth(t)*this.aspect}getAngleTo(t,n){return Math.atan2(n-this.position.z+ft.zoomOffsetY*G(this,Fn),t-this.position.x)}get playerPosition(){return G(this,ns)}set playerPosition(t){mt(this,ns,t)}set focusPlayer(t){mt(this,Wl,t),t?this.targetZoom=1:G(this,kn).set(G(this,ns).x,G(this,ns).z),vp.set(pp.FOCUS_PLAYER,t)}get focusPlayer(){return G(this,Wl)}}Fn=new WeakMap,ns=new WeakMap,kn=new WeakMap,Wl=new WeakMap,Xo=new WeakSet,Kc=function(){this.dragEase=ft.dragEase,this.zoomEase=ft.zoomEase};const jk=`precision highp float;

varying vec3 vNormal;

void main() {
	gl_FragColor = vec4(vNormal, 1.);
}`;wt(jk,"fragmentShader");const Xk=`attribute vec3 position, normal;

attribute vec2 aInstancePosition;

uniform mat4 modelViewMatrix, projectionMatrix;

varying vec3 vNormal;

void main() {
  vNormal = normalize(normal);

  vec3 instancePosition = vec3(aInstancePosition.x, 0., aInstancePosition.y);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position + instancePosition, 1.);
}`;wt(Xk,"vertexShader");const Yk=`precision highp float;

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
}`,qk=wt(Yk,"fragmentShader"),$k=`varying float vDepth;
varying vec2 vUv;
varying vec3 vNormal;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.);

  vNormal = normalize(normalMatrix * normal);
  vUv = uv;
  vDepth = smoothstep(NEAR, FAR, -mvPosition.z);

  gl_Position = projectionMatrix * mvPosition;
}`,Kk=wt($k,"vertexShader");class Zk extends Vi{constructor(e={}){super(e),qk.use(this),Kk.use(this)}}const Jk=`precision highp float;

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
}`,Qk=wt(Jk,"fragmentShader"),e4=`attribute vec3 position;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

varying float vDepth;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.);

  vDepth = smoothstep(NEAR, FAR, -mvPosition.z);

  gl_Position = projectionMatrix * mvPosition;
}`,t4=wt(e4,"vertexShader");class n4 extends tr{constructor(e={}){super(e),Qk.use(this),t4.use(this)}}const i4=`precision highp float;
varying vec2 vUv;
varying float vDepth;

uniform sampler2D uTex;

void main() {
  vec4 flag = texture2D(uTex, vUv);
  vec4 black = vec4(vec3(0.), 1.0);
  float depth = -vDepth * 1.2;
  gl_FragColor = mix( flag, black, depth);
}`,s4=wt(i4,"fragmentShader"),r4=`attribute vec3 position;
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
}`,o4=wt(r4,"vertexShader");class a4 extends tr{constructor(e={}){super(e),s4.use(this),o4.use(this)}}const l4=`precision highp float;

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
}`,c4=wt(l4,"fragmentShader"),u4=`uniform mat4 uShadowProjectionMatrix, uShadowMatrixInverse;

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
}`,f4=wt(u4,"vertexShader");class h4 extends Vi{constructor(e={}){super(e),c4.use(this),f4.use(this)}}var Xu,hb,Yu,db;class d4 extends ln{constructor(t){super();ve(this,Xu);ve(this,Yu);const n=t.data[0].length;this.geometry=Ve(this,Xu,hb).call(this,n),this.material=Ve(this,Yu,db).call(this,n)}}Xu=new WeakSet,hb=function(t){const n=new yf(t,t,1,1);return n.rotateX(-Math.PI*.5),n.translate(t*.5,0,t*.5),n},Yu=new WeakSet,db=function(t){const[n,s,r,o,a]=Me.core.assetsManager.get("groundData","seamless1","seamless2","seamless3","seamless4");return s.wrapS=s.wrapT=pi,r.wrapS=r.wrapT=pi,o.wrapS=o.wrapT=pi,a.wrapS=a.wrapT=pi,new h4({uniforms:{...Me.webgl.scene.dynamicShadowUniforms,...Me.webgl.scene.staticShadowUniforms,...Me.webgl.scene.commonShadowUniforms,uZoom:rn.uZoom,uSize:{value:t},uFloorColor:{value:new z(0,.39,.45)},uGridColor:{value:new z(0,0,0)},tData:{value:n},tSeamless1:{value:s},tSeamless2:{value:r},tSeamless3:{value:o},tSeamless4:{value:a}},defines:{NEAR:`${Me.webgl.scene.shadowCamera.near}.`,FAR:`${Me.webgl.scene.shadowCamera.far}.`}})};var qu;class p4 extends dt{constructor(t){super();ve(this,qu,new n4({uniforms:{uColor:{value:new Pe(0)}},defines:{NEAR:`${ft.near}.`,FAR:`${ft.far}.`}}));const n=new Zk({uniforms:{uLightPosition:Me.webgl.scene.commonShadowUniforms.uLightPosition},defines:{NEAR:`${ft.near}.`,FAR:`${ft.far}.`}});this.glb=t,this.flagLoader=new Ip,this.domGameStore=Sf(),this.flagObject=null,this.glb.traverse(s=>{s.isMesh&&(s.material=n),s.name==="Drapeau"&&(s.material=new a4({uniforms:{uTime:rn.uTime,uTex:{value:this.getWinnerFlag()}}}),this.flagObject=s)}),this.grid=new d4(jv),this.add(this.glb),this.add(this.grid),this.traverse(s=>{s.isMesh&&(s.userData.materials=[s.material,G(this,qu)])}),Ue.on(Ye.SCOREBOARD_UPDATE,()=>this.updateFlag())}getWinnerFlag(){return this.domGameStore.scoreboard[0]&&this.domGameStore.scoreboard[0].score&&this.domGameStore.scoreboard[0].score>0?this.flagLoader.load(`/assets/images/flags/${this.domGameStore.scoreboard[0].name}.png`):this.flagLoader.load("/assets/images/flags/JO-flag.png")}updateFlag(){this.flagObject.material.uniforms.uTex.value=this.getWinnerFlag()}}qu=new WeakMap;var jl;class m4 extends _x{constructor(){super();ve(this,jl,t=>{const n=new Bi(t,t);return n.depthTexture=new Ep(t,t),n});Ue.register(this),this.add(new m3(16777215,1));const t=El.size*.5+5;this.shadowCamera=new $l(-t,t,t,-t,1,100),this.shadowCamera.position.set(-5,40,5),this.shadowCamera.lookAt(t,0,t);const n=4096;this.dynamicShadowRenderTarget=G(this,jl).call(this,n),this.dynamicShadowUniforms={tDynamicShadows:{value:this.dynamicShadowRenderTarget.depthTexture}},this.staticShadowRenderTarget=G(this,jl).call(this,n),this.staticShadowUniforms={tStaticShadows:{value:this.staticShadowRenderTarget.depthTexture}},this.commonShadowUniforms={uLightPosition:{value:this.shadowCamera.position},uShadowProjectionMatrix:{value:this.shadowCamera.projectionMatrix},uShadowMatrixInverse:{value:this.shadowCamera.matrixWorldInverse}}}onAppLoaded(){var n;const t=Fd(Me.webgl.renderer,Me.core.assetsManager.get("skybox"),!1);this.background=t,this.userData.backgrounds=[this.background,new Pe(0)],this.terrain=new p4(Me.core.assetsManager.get("terrain")),this.add(this.terrain),this.environment=Fd(Me.webgl.renderer,Me.core.assetsManager.get("envmap")),(n=Me.debug)==null||n.mapping.add(this,"Scene")}}jl=new WeakMap;var Pr,$u,Xl,Ku,pb,Zu,mb,Ju,gb,Qu,_b,ef,vb,tf,xb,is,xr,ha,kd,_4;class g4{constructor(){ve(this,Ku);ve(this,Zu);ve(this,Ju);ve(this,Qu);ve(this,ef);ve(this,tf);ve(this,is);ve(this,ha);ve(this,Pr,new ks);ve(this,$u,e=>{const t=Me.core.assetsManager.get("player"),n=ay(t);n.animations=t.animations;const s=new Ck(n,e);Me.webgl.players.set(e,s),G(this,Pr).add(s)});ve(this,Xl,e=>{const t=new uI(Me.core.assetsManager.get("medals"),e);Me.webgl.medals.set(e.id,t),G(this,Pr).add(t)});Ue.register(this),this.players=new Map,this.medals=new Map,this.renderer=new Vk,this.postProcessing=new Bk(this.renderer.capabilities.isWebGL2),this.scene=new m4,this.camera=new Wk,this.loginScene=new Hk,this.loginCamera=new Gk,this.scene.add(G(this,Pr)),this.renderLogin=!1}onAttach(){var e;Me.$wrapper.prepend(this.renderer.domElement),this.onRender(),Ve(this,Qu,_b).call(this),(e=Me.debug)==null||e.mapping.add(this,"Game",1)}onStateReady({teams:e,medals:t}){e.forEach(n=>this.onCreateTeam(n)),[...t.values()].forEach(G(this,Xl))}onJoinReady(e){const t=this.players.get(e);this.camera.playerPosition=t.position,this.camera.focusPlayer=!0,t.addRaycaster()}onCreateTeam(e){G(this,$u).call(this,e)}onVoteResults(e){this.players.get(e).move()}onSpawnMedals(e){e.forEach(G(this,Xl))}onCollectMedal(e){this.medals.get(e.id).removeFromParent()}onTick({et:e}){rn.uTime.value=e}onRender(){this.renderer.clear(),this.renderLogin?Ve(this,Ku,pb).call(this):(Ve(this,Ju,gb).call(this),Ve(this,Zu,mb).call(this),Ve(this,ef,vb).call(this),Ve(this,tf,xb).call(this))}}Pr=new WeakMap,$u=new WeakMap,Xl=new WeakMap,Ku=new WeakSet,pb=function(){this.renderer.render(this.loginScene,this.loginCamera)},Zu=new WeakSet,mb=function(){Ve(this,is,xr).call(this,this.scene,this.camera,this.postProcessing.renderTarget)},Ju=new WeakSet,gb=function(){Ve(this,is,xr).call(this,G(this,Pr),this.scene.shadowCamera,this.scene.dynamicShadowRenderTarget)},Qu=new WeakSet,_b=function(){Ve(this,is,xr).call(this,this.scene.terrain,this.scene.shadowCamera,this.scene.staticShadowRenderTarget)},ef=new WeakSet,vb=function(){mt(this,ha,!0,kd),Ve(this,is,xr).call(this,this.scene,this.camera,this.postProcessing.emissivePass.renderTargets[0]),mt(this,ha,!1,kd),this.postProcessing.emissivePass.uniforms.tEmissive.value=this.postProcessing.emissivePass.renderTargets[0].texture,this.postProcessing.emissivePass.uniforms.uHorizontal.value=0,Ve(this,is,xr).call(this,this.postProcessing.emissiveQuad,this.postProcessing.camera,this.postProcessing.emissivePass.renderTargets[1]),this.postProcessing.emissivePass.uniforms.tEmissive.value=this.postProcessing.emissivePass.renderTargets[1].texture,this.postProcessing.emissivePass.uniforms.uHorizontal.value=1,Ve(this,is,xr).call(this,this.postProcessing.emissiveQuad,this.postProcessing.camera,this.postProcessing.emissivePass.renderTargets[2])},tf=new WeakSet,xb=function(){this.renderer.setRenderTarget(null),this.renderer.clear(),this.renderer.render(this.postProcessing.quad,this.postProcessing.camera)},is=new WeakSet,xr=function(e,t,n){this.renderer.setRenderTarget(n),this.renderer.clear(),this.renderer.render(e,t),this.renderer.setRenderTarget(null)},ha=new WeakSet,kd=function(e){var t,n;rn.uEmissiveOnly.value=e,this.scene.background=this.scene.userData.backgrounds[+e],(n=(t=this.scene)==null?void 0:t.terrain)==null||n.traverse(s=>{s.isMesh&&(s.material=s.userData.materials[+e])})},_4=function(){return rn.uEmissiveOnly.value};var nf,yb;const wo=class{constructor(){ve(this,nf)}async init(e,t){var n;this.$app=e,this.$wrapper=t,this.vueApp=Ve(this,nf,yb).call(this),this.server=new qL,this.game=new XL,this.sound=new rL,this.core=WL(),this.tools=cI(),this.webgl=new g4,this.debug=await rI(),(n=this.debug)==null||n.mapping.init(),await this.load()}async beforeLoad(){}async load(){await this.beforeLoad(),await this.core.assetsManager.load(),Ue.emit(Ye.APP_LOADED),Ue.emit(Ye.RESIZE,this.tools.viewport.infos),Ue.emit(Ye.ATTACH)}static getInstance(){return wo.instance||(wo.instance=new wo),wo.instance}};let Zc=wo;nf=new WeakSet,yb=function(){const e=$P({legacy:!1,globalInjection:!0,locale:"en",fallbackLocale:"en",availableLocales:["en","fr","es"],messages:YL}),t=KM(rw);return t.use(yw()),t.use(wf),t.use(e),t.mount("#vue-app"),t},Nn(Zc,"instance");const Me=Zc.getInstance();/*!
 * paths 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var v4=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,x4=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,y4=Math.PI/180,Oc=Math.sin,Uc=Math.cos,hl=Math.abs,ja=Math.sqrt,b4=function(e){return typeof e=="number"},A_=1e5,ws=function(e){return Math.round(e*A_)/A_||0};function M4(i,e,t,n,s,r,o){for(var a=i.length,l,c,u,f,h;--a>-1;)for(l=i[a],c=l.length,u=0;u<c;u+=2)f=l[u],h=l[u+1],l[u]=f*e+h*n+r,l[u+1]=f*t+h*s+o;return i._dirty=1,i}function S4(i,e,t,n,s,r,o,a,l){if(!(i===a&&e===l)){t=hl(t),n=hl(n);var c=s%360*y4,u=Uc(c),f=Oc(c),h=Math.PI,p=h*2,g=(i-a)/2,d=(e-l)/2,m=u*g+f*d,_=-f*g+u*d,x=m*m,v=_*_,y=x/(t*t)+v/(n*n);y>1&&(t=ja(y)*t,n=ja(y)*n);var M=t*t,E=n*n,A=(M*E-M*v-E*x)/(M*v+E*x);A<0&&(A=0);var b=(r===o?-1:1)*ja(A),T=b*(t*_/n),P=b*-(n*m/t),I=(i+a)/2,q=(e+l)/2,N=I+(u*T-f*P),D=q+(f*T+u*P),O=(m-T)/t,$=(_-P)/n,j=(-m-T)/t,V=(-_-P)/n,re=O*O+$*$,he=($<0?-1:1)*Math.acos(O/ja(re)),be=(O*V-$*j<0?-1:1)*Math.acos((O*j+$*V)/ja(re*(j*j+V*V)));isNaN(be)&&(be=h),!o&&be>0?be-=p:o&&be<0&&(be+=p),he%=p,be%=p;var X=Math.ceil(hl(be)/(p/4)),ue=[],pe=be/X,H=4/3*Oc(pe/2)/(1+Uc(pe/2)),Se=u*t,B=f*t,Q=f*-n,Z=u*n,oe;for(oe=0;oe<X;oe++)s=he+oe*pe,m=Uc(s),_=Oc(s),O=Uc(s+=pe),$=Oc(s),ue.push(m-H*_,_+H*m,O+H*$,$-H*O,O,$);for(oe=0;oe<ue.length;oe+=2)m=ue[oe],_=ue[oe+1],ue[oe]=m*Se+_*Q+N,ue[oe+1]=m*B+_*Z+D;return ue[oe-2]=a,ue[oe-1]=l,ue}}function w4(i){var e=(i+"").replace(x4,function(T){var P=+T;return P<1e-4&&P>-1e-4?0:P}).match(v4)||[],t=[],n=0,s=0,r=2/3,o=e.length,a=0,l="ERROR: malformed path: "+i,c,u,f,h,p,g,d,m,_,x,v,y,M,E,A,b=function(P,I,q,N){x=(q-P)/3,v=(N-I)/3,d.push(P+x,I+v,q-x,N-v,q,N)};if(!i||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(c=0;c<o;c++)if(M=p,isNaN(e[c])?(p=e[c].toUpperCase(),g=p!==e[c]):c--,f=+e[c+1],h=+e[c+2],g&&(f+=n,h+=s),c||(m=f,_=h),p==="M")d&&(d.length<8?t.length-=1:a+=d.length),n=m=f,s=_=h,d=[f,h],t.push(d),c+=2,p="L";else if(p==="C")d||(d=[0,0]),g||(n=s=0),d.push(f,h,n+e[c+3]*1,s+e[c+4]*1,n+=e[c+5]*1,s+=e[c+6]*1),c+=6;else if(p==="S")x=n,v=s,(M==="C"||M==="S")&&(x+=n-d[d.length-4],v+=s-d[d.length-3]),g||(n=s=0),d.push(x,v,f,h,n+=e[c+3]*1,s+=e[c+4]*1),c+=4;else if(p==="Q")x=n+(f-n)*r,v=s+(h-s)*r,g||(n=s=0),n+=e[c+3]*1,s+=e[c+4]*1,d.push(x,v,n+(f-n)*r,s+(h-s)*r,n,s),c+=4;else if(p==="T")x=n-d[d.length-4],v=s-d[d.length-3],d.push(n+x,s+v,f+(n+x*1.5-f)*r,h+(s+v*1.5-h)*r,n=f,s=h),c+=2;else if(p==="H")b(n,s,n=f,s),c+=1;else if(p==="V")b(n,s,n,s=f+(g?s-n:0)),c+=1;else if(p==="L"||p==="Z")p==="Z"&&(f=m,h=_,d.closed=!0),(p==="L"||hl(n-f)>.5||hl(s-h)>.5)&&(b(n,s,f,h),p==="L"&&(c+=2)),n=f,s=h;else if(p==="A"){if(E=e[c+4],A=e[c+5],x=e[c+6],v=e[c+7],u=7,E.length>1&&(E.length<3?(v=x,x=A,u--):(v=A,x=E.substr(2),u-=2),A=E.charAt(1),E=E.charAt(0)),y=S4(n,s,+e[c+1],+e[c+2],+e[c+3],+E,+A,(g?n:0)+x*1,(g?s:0)+v*1),c+=u,y)for(u=0;u<y.length;u++)d.push(y[u]);n=d[d.length-2],s=d[d.length-1]}else console.log(l);return c=d.length,c<6?(t.pop(),c=0):d[0]===d[c-2]&&d[1]===d[c-1]&&(d.closed=!0),t.totalPoints=a+c,t}function T4(i){b4(i[0])&&(i=[i]);var e="",t=i.length,n,s,r,o;for(s=0;s<t;s++){for(o=i[s],e+="M"+ws(o[0])+","+ws(o[1])+" C",n=o.length,r=2;r<n;r++)e+=ws(o[r++])+","+ws(o[r++])+" "+ws(o[r++])+","+ws(o[r++])+" "+ws(o[r++])+","+ws(o[r])+" ";o.closed&&(e+="z")}return e}/*!
 * CustomEase 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wn,bb,Mb=function(){return wn||typeof window<"u"&&(wn=window.gsap)&&wn.registerPlugin&&wn},C_=function(){wn=Mb(),wn?(wn.registerEase("_CE",Ql.create),bb=1):console.warn("Please gsap.registerPlugin(CustomEase)")},E4=1e20,Fc=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},A4=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,C4=/[cLlsSaAhHvVtTqQ]/g,R4=function(e){var t=e.length,n=E4,s;for(s=1;s<t;s+=6)+e[s]<n&&(n=+e[s]);return n},L4=function(e,t,n){!n&&n!==0&&(n=Math.max(+e[e.length-1],+e[1]));var s=+e[0]*-1,r=-n,o=e.length,a=1/(+e[o-2]+s),l=-t||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?R4(e)+r:+e[o-1]+r),c;for(l?l=1/l:l=-a,c=0;c<o;c+=2)e[c]=(+e[c]+s)*a,e[c+1]=(+e[c+1]+r)*l},P4=function i(e,t,n,s,r,o,a,l,c,u,f){var h=(e+n)/2,p=(t+s)/2,g=(n+r)/2,d=(s+o)/2,m=(r+a)/2,_=(o+l)/2,x=(h+g)/2,v=(p+d)/2,y=(g+m)/2,M=(d+_)/2,E=(x+y)/2,A=(v+M)/2,b=a-e,T=l-t,P=Math.abs((n-a)*T-(s-l)*b),I=Math.abs((r-a)*T-(o-l)*b),q;return u||(u=[{x:e,y:t},{x:a,y:l}],f=1),u.splice(f||u.length-1,0,{x:E,y:A}),(P+I)*(P+I)>c*(b*b+T*T)&&(q=u.length,i(e,t,h,p,x,v,E,A,c,u,f),i(E,A,y,M,m,_,a,l,c,u,f+1+(u.length-q))),u},Ql=function(){function i(t,n,s){bb||C_(),this.id=t,this.setData(n,s)}var e=i.prototype;return e.setData=function(n,s){s=s||{},n=n||"0,0,1,1";var r=n.match(A4),o=1,a=[],l=[],c=s.precision||1,u=c<=1,f,h,p,g,d,m,_,x,v;if(this.data=n,(C4.test(n)||~n.indexOf("M")&&n.indexOf("C")<0)&&(r=w4(n)[0]),f=r.length,f===4)r.unshift(0,0),r.push(1,1),f=8;else if((f-2)%6)throw"Invalid CustomEase";for((+r[0]!=0||+r[f-2]!=1)&&L4(r,s.height,s.originY),this.segment=r,g=2;g<f;g+=6)h={x:+r[g-2],y:+r[g-1]},p={x:+r[g+4],y:+r[g+5]},a.push(h,p),P4(h.x,h.y,+r[g],+r[g+1],+r[g+2],+r[g+3],p.x,p.y,1/(c*2e5),a,a.length-1);for(f=a.length,g=0;g<f;g++)_=a[g],x=a[g-1]||_,(_.x>x.x||x.y!==_.y&&x.x===_.x||_===x)&&_.x<=1?(x.cx=_.x-x.x,x.cy=_.y-x.y,x.n=_,x.nx=_.x,u&&g>1&&Math.abs(x.cy/x.cx-a[g-2].cy/a[g-2].cx)>2&&(u=0),x.cx<o&&(x.cx?o=x.cx:(x.cx=.001,g===f-1&&(x.x-=.001,o=Math.min(o,.001),u=0)))):(a.splice(g--,1),f--);if(f=1/o+1|0,d=1/f,m=0,_=a[0],u){for(g=0;g<f;g++)v=g*d,_.nx<v&&(_=a[++m]),h=_.y+(v-_.x)/_.cx*_.cy,l[g]={x:v,cx:d,y:h,cy:0,nx:9},g&&(l[g-1].cy=h-l[g-1].y);l[f-1].cy=a[a.length-1].y-h}else{for(g=0;g<f;g++)_.nx<g*d&&(_=a[++m]),l[g]=_;m<a.length-1&&(l[g-1]=a[a.length-2])}return this.ease=function(y){var M=l[y*f|0]||l[f-1];return M.nx<y&&(M=M.n),M.y+(y-M.x)/M.cx*M.cy},this.ease.custom=this,this.id&&wn&&wn.registerEase(this.id,this.ease),this},e.getSVGData=function(n){return i.getSVGData(this,n)},i.create=function(n,s,r){return new i(n,s,r).ease},i.register=function(n){wn=n,C_()},i.get=function(n){return wn.parseEase(n)},i.getSVGData=function(n,s){s=s||{};var r=s.width||100,o=s.height||100,a=s.x||0,l=(s.y||0)+o,c=wn.utils.toArray(s.path)[0],u,f,h,p,g,d,m,_,x,v;if(s.invert&&(o=-o,l=0),typeof n=="string"&&(n=wn.parseEase(n)),n.custom&&(n=n.custom),n instanceof i)u=T4(M4([n.segment],r,0,0,-o,a,l));else{for(u=[a,l],m=Math.max(5,(s.precision||1)*200),p=1/m,m+=2,_=5/m,x=Fc(a+p*r),v=Fc(l+n(p)*-o),f=(v-l)/(x-a),h=2;h<m;h++)g=Fc(a+h*p*r),d=Fc(l+n(h*p)*-o),(Math.abs((d-v)/(g-x)-f)>_||h===m-1)&&(u.push(x,v),f=(d-v)/(g-x)),x=g,v=d;u="M"+u.join(",")}return c&&c.setAttribute("d",u),u},i}();Mb()&&wn.registerPlugin(Ql);Ql.version="3.11.5";Jl.registerPlugin(Ql);Ql.create("playerJump","M0,0 C0.426,0 0.43,-0.014 0.488,0.072 0.633,0.291 0.544,0.803 0.756,0.908 0.886,0.972 0.982,1 1,1");Me.init(document.getElementById("webgl-app"),document.getElementById("canvas-wrapper"));export{jv as A,mr as B,k4 as C,oc as D,Ye as E,Qn as F,Gr as G,O4 as H,U4 as I,F4 as J,nl as M,xn as Q,pp as S,El as T,Be as V,_p as _,kt as a,N4 as b,_a as c,Me as d,vp as e,Dt as f,df as g,ov as h,Sf as i,ap as j,lp as k,Ic as l,qd as m,Yd as n,ki as o,rv as p,D4 as q,hi as r,Ue as s,Gb as t,Dr as u,Am as v,su as w,qa as x,z as y,z4 as z};
