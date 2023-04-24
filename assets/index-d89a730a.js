var ey=Object.defineProperty;var ty=(i,e,t)=>e in i?ey(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Xn=(i,e,t)=>(ty(i,typeof e!="symbol"?e+"":e,t),t),df=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)};var $=(i,e,t)=>(df(i,e,"read from private field"),t?t.call(i):e.get(i)),we=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},rt=(i,e,t,n)=>(df(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t);var He=(i,e,t)=>(df(i,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const ny={en:{head:{title:i=>{const{normalize:e}=i;return e(["Olympic Medal Rush"])},subtitle:i=>{const{normalize:e}=i;return e(["The Internet Olympics"])}},test:i=>{const{normalize:e}=i;return e(["hey"])},locale:i=>{const{normalize:e}=i;return e(["en"])},lang:i=>{const{normalize:e}=i;return e(["en"])}},es:{head:{title:i=>{const{normalize:e}=i;return e([])},subtitle:i=>{const{normalize:e}=i;return e([])}},test:i=>{const{normalize:e}=i;return e([])},locale:i=>{const{normalize:e}=i;return e(["es"])},lang:i=>{const{normalize:e}=i;return e(["es"])}},fr:{head:{title:i=>{const{normalize:e}=i;return e(["Olympic Medal Rush"])},subtitle:i=>{const{normalize:e}=i;return e(["L’épreuve olympique d’internet"])}},test:i=>{const{normalize:e}=i;return e(["coucou"])},locale:i=>{const{normalize:e}=i;return e(["fr"])},lang:i=>{const{normalize:e}=i;return e(["fr"])}}};function $i(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function n_(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},zo={duration:.5,overwrite:!1,delay:0},wd,rn,Pt,Qn=1e8,lt=1/Qn,_h=Math.PI*2,iy=_h/4,sy=0,i_=Math.sqrt,ry=Math.cos,oy=Math.sin,jt=function(e){return typeof e=="string"},yt=function(e){return typeof e=="function"},ls=function(e){return typeof e=="number"},Td=function(e){return typeof e>"u"},ki=function(e){return typeof e=="object"},wn=function(e){return e!==!1},Ed=function(){return typeof window<"u"},Yl=function(e){return yt(e)||jt(e)},s_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},on=Array.isArray,vh=/(?:-?\.?\d|\.)+/gi,r_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,fo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,pf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,o_=/[+-]=-?[.\d]+/,a_=/[^,'"\[\]\s]+/gi,ay=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,vt,Kn,xh,Ad,Gn={},jc={},l_,c_=function(e){return(jc=Dr(e,Gn))&&An},Cd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Xc=function(e,t){return!t&&console.warn(e)},u_=function(e,t){return e&&(Gn[e]=t)&&jc&&(jc[e]=t)||Gn},nl=function(){return 0},ly={suppressEvents:!0,isStart:!0,kill:!1},Ic={suppressEvents:!0,kill:!1},cy={suppressEvents:!0},Rd={},Gs=[],bh={},f_,On={},mf={},Bp=30,Dc=[],Ld="",Pd=function(e){var t=e[0],n,s;if(ki(t)||yt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(s=Dc.length;s--&&!Dc[s].targetTest(t););n=Dc[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new O_(e[s],n)))||e.splice(s,1);return e},Ar=function(e){return e._gsap||Pd(ei(e))[0]._gsap},h_=function(e,t,n){return(n=e[t])&&yt(n)?e[t]():Td(n)&&e.getAttribute&&e.getAttribute(t)||n},Tn=function(e,t){return(e=e.split(",")).forEach(t)||e},Tt=function(e){return Math.round(e*1e5)/1e5||0},Yt=function(e){return Math.round(e*1e7)/1e7||0},So=function(e,t){var n=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+s:n==="-"?e-s:n==="*"?e*s:e/s},uy=function(e,t){for(var n=t.length,s=0;e.indexOf(t[s])<0&&++s<n;);return s<n},Yc=function(){var e=Gs.length,t=Gs.slice(0),n,s;for(bh={},Gs.length=0,n=0;n<e;n++)s=t[n],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},d_=function(e,t,n,s){Gs.length&&!rn&&Yc(),e.render(t,n,s||rn&&t<0&&(e._initted||e._startAt)),Gs.length&&!rn&&Yc()},p_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(a_).length<2?t:jt(e)?e.trim():e},m_=function(e){return e},ni=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},fy=function(e){return function(t,n){for(var s in n)s in t||s==="duration"&&e||s==="ease"||(t[s]=n[s])}},Dr=function(e,t){for(var n in t)e[n]=t[n];return e},zp=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ki(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},qc=function(e,t){var n={},s;for(s in e)s in t||(n[s]=e[s]);return n},Ga=function(e){var t=e.parent||vt,n=e.keyframes?fy(on(e.keyframes)):ni;if(wn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},hy=function(e,t){for(var n=e.length,s=n===t.length;s&&n--&&e[n]===t[n];);return n<0},g_=function(e,t,n,s,r){n===void 0&&(n="_first"),s===void 0&&(s="_last");var o=e[s],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[s]=t,t._prev=o,t.parent=t._dp=e,t},Hu=function(e,t,n,s){n===void 0&&(n="_first"),s===void 0&&(s="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[s]===t&&(e[s]=r),t._next=t._prev=t.parent=null},qs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Cr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},dy=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},yh=function(e,t,n,s){return e._startAt&&(rn?e._startAt.revert(Ic):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},py=function i(e){return!e||e._ts&&i(e.parent)},Vp=function(e){return e._repeat?Vo(e._tTime,e=e.duration()+e._rDelay)*e:0},Vo=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},$c=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Wu=function(e){return e._end=Yt(e._start+(e._tDur/Math.abs(e._ts||e._rts||lt)||0))},ju=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Yt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Wu(e),n._dirty||Cr(n,e)),e},__=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=$c(e.rawTime(),t),(!t._dur||Fl(0,t.totalDuration(),n)-t._tTime>lt)&&t.render(n,!0)),Cr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-lt}},Di=function(e,t,n,s){return t.parent&&qs(t),t._start=Yt((ls(n)?n:n||e!==vt?qn(e,n,t):e._time)+t._delay),t._end=Yt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),g_(e,t,"_first","_last",e._sort?"_start":0),Mh(t)||(e._recent=t),s||__(e,t),e._ts<0&&ju(e,e._tTime),e},v_=function(e,t){return(Gn.ScrollTrigger||Cd("scrollTrigger",t))&&Gn.ScrollTrigger.create(t,e)},x_=function(e,t,n,s,r){if(Dd(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!rn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&f_!==Un.frame)return Gs.push(e),e._lazy=[r,s],1},my=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Mh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},gy=function(e,t,n,s){var r=e.ratio,o=t<0||!t&&(!e._start&&my(e)&&!(!e._initted&&Mh(e))||(e._ts<0||e._dp._ts<0)&&!Mh(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Fl(0,e._tDur,t),u=Vo(l,a),e._yoyo&&u&1&&(o=1-o),u!==Vo(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||rn||s||e._zTime===lt||!t&&e._zTime){if(!e._initted&&x_(e,t,s,n,l))return;for(f=e._zTime,e._zTime=t||(n?lt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&yh(e,t,n,!0),e._onUpdate&&!n&&ti(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ti(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&qs(e,1),!n&&!rn&&(ti(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},_y=function(e,t,n){var s;if(n>t)for(s=e._first;s&&s._start<=n;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=n;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},Go=function(e,t,n,s){var r=e._repeat,o=Yt(t)||0,a=e._tTime/e._tDur;return a&&!s&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Yt(o*(r+1)+e._rDelay*r):o,a>0&&!s&&ju(e,e._tTime=e._tDur*a),e.parent&&Wu(e),n||Cr(e.parent,e),e},Gp=function(e){return e instanceof Mn?Cr(e):Go(e,e._dur)},vy={_start:0,endTime:nl,totalDuration:nl},qn=function i(e,t,n){var s=e.labels,r=e._recent||vy,o=e.duration()>=Qn?r.endTime(!1):e._dur,a,l,c;return jt(t)&&(isNaN(t)||t in s)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in s||(s[t]=o),s[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(on(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Ha=function(e,t,n){var s=ls(t[1]),r=(s?2:1)+(e<2?0:1),o=t[r],a,l;if(s&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=wn(l.vars.inherit)&&l.parent;o.immediateRender=wn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Ot(t[0],o,t[r+1])},Qs=function(e,t){return e||e===0?t(e):t},Fl=function(e,t,n){return n<e?e:n>t?t:n},tn=function(e,t){return!jt(e)||!(t=ay.exec(e))?"":t[1]},xy=function(e,t,n){return Qs(n,function(s){return Fl(e,t,s)})},Sh=[].slice,b_=function(e,t){return e&&ki(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ki(e[0]))&&!e.nodeType&&e!==Kn},by=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(s){var r;return jt(s)&&!t||b_(s,1)?(r=n).push.apply(r,ei(s)):n.push(s)})||n},ei=function(e,t,n){return Pt&&!t&&Pt.selector?Pt.selector(e):jt(e)&&!n&&(xh||!Ho())?Sh.call((t||Ad).querySelectorAll(e),0):on(e)?by(e,n):b_(e)?Sh.call(e,0):e?[e]:[]},wh=function(e){return e=ei(e)[0]||Xc("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ei(t,n.querySelectorAll?n:n===e?Xc("Invalid scope")||Ad.createElement("div"):e)}},y_=function(e){return e.sort(function(){return .5-Math.random()})},M_=function(e){if(yt(e))return e;var t=ki(e)?e:{each:e},n=Rr(t.ease),s=t.from||0,r=parseFloat(t.base)||0,o={},a=s>0&&s<1,l=isNaN(s)||a,c=t.axis,u=s,f=s;return jt(s)?u=f={center:.5,edges:.5,end:1}[s]||0:!a&&l&&(u=s[0],f=s[1]),function(h,p,g){var d=(g||t).length,m=o[d],v,x,_,b,y,E,A,M,T;if(!m){if(T=t.grid==="auto"?0:(t.grid||[1,Qn])[1],!T){for(A=-Qn;A<(A=g[T++].getBoundingClientRect().left)&&T<d;);T--}for(m=o[d]=[],v=l?Math.min(T,d)*u-.5:s%T,x=T===Qn?0:l?d*f/T-.5:s/T|0,A=0,M=Qn,E=0;E<d;E++)_=E%T-v,b=x-(E/T|0),m[E]=y=c?Math.abs(c==="y"?b:_):i_(_*_+b*b),y>A&&(A=y),y<M&&(M=y);s==="random"&&y_(m),m.max=A-M,m.min=M,m.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(T>d?d-1:c?c==="y"?d/T:T:Math.max(T,d/T))||0)*(s==="edges"?-1:1),m.b=d<0?r-d:r,m.u=tn(t.amount||t.each)||0,n=n&&d<0?I_(n):n}return d=(m[h]-m.min)/m.max||0,Yt(m.b+(n?n(d):d)*m.v)+m.u}},Th=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var s=Yt(Math.round(parseFloat(n)/e)*e*t);return(s-s%1)/t+(ls(n)?0:tn(n))}},S_=function(e,t){var n=on(e),s,r;return!n&&ki(e)&&(s=n=e.radius||Qn,e.values?(e=ei(e.values),(r=!ls(e[0]))&&(s*=s)):e=Th(e.increment)),Qs(t,n?yt(e)?function(o){return r=e(o),Math.abs(r-o)<=s?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Qn,u=0,f=e.length,h,p;f--;)r?(h=e[f].x-a,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!s||c<=s?e[u]:o,r||u===o||ls(o)?u:u+tn(o)}:Th(e))},w_=function(e,t,n,s){return Qs(on(e)?!t:n===!0?!!(n=0):!s,function(){return on(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(s=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*s)/s})},yy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(s){return t.reduce(function(r,o){return o(r)},s)}},My=function(e,t){return function(n){return e(parseFloat(n))+(t||tn(n))}},Sy=function(e,t,n){return E_(e,t,0,1,n)},T_=function(e,t,n){return Qs(n,function(s){return e[~~t(s)]})},wy=function i(e,t,n){var s=t-e;return on(e)?T_(e,i(0,e.length),t):Qs(n,function(r){return(s+(r-e)%s)%s+e})},Ty=function i(e,t,n){var s=t-e,r=s*2;return on(e)?T_(e,i(0,e.length-1),t):Qs(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>s?r-o:o)})},il=function(e){for(var t=0,n="",s,r,o,a;~(s=e.indexOf("random(",t));)o=e.indexOf(")",s),a=e.charAt(s+7)==="[",r=e.substr(s+7,o-s-7).match(a?a_:vh),n+=e.substr(t,s-t)+w_(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},E_=function(e,t,n,s,r){var o=t-e,a=s-n;return Qs(r,function(l){return n+((l-e)/o*a||0)})},Ey=function i(e,t,n,s){var r=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!r){var o=jt(e),a={},l,c,u,f,h;if(n===!0&&(s=1)&&(n=null),o)e={p:e},t={p:t};else if(on(e)&&!on(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,r=function(g){g*=f;var d=Math.min(h,~~g);return u[d](g-d)},n=t}else s||(e=Dr(on(e)?[]:{},e));if(!u){for(l in t)Id.call(a,e,l,"get",t[l]);r=function(g){return Ud(g,a)||(o?e.p:e)}}}return Qs(n,r)},Hp=function(e,t,n){var s=e.labels,r=Qn,o,a,l;for(o in s)a=s[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},ti=function(e,t,n){var s=e.vars,r=s[t],o=Pt,a=e._ctx,l,c,u;if(r)return l=s[t+"Params"],c=s.callbackScope||e,n&&Gs.length&&Yc(),a&&(Pt=a),u=l?r.apply(c,l):r.call(c),Pt=o,u},Oa=function(e){return qs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!rn),e.progress()<1&&ti(e,"onInterrupt"),e},ho,A_=[],C_=function(e){if(!Ed()){A_.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=yt(e),s=t&&!n&&e.init?function(){this._props=[]}:e,r={init:nl,render:Ud,add:Id,kill:Gy,modifier:Vy,rawVars:0},o={targetTest:0,get:0,getSetter:Od,aliases:{},register:0};if(Ho(),e!==s){if(On[t])return;ni(s,ni(qc(e,r),o)),Dr(s.prototype,Dr(r,qc(e,o))),On[s.prop=t]=s,e.targetTest&&(Dc.push(s),Rd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}u_(t,s),e.register&&e.register(An,s,En)},ot=255,Ua={aqua:[0,ot,ot],lime:[0,ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ot],navy:[0,0,128],white:[ot,ot,ot],olive:[128,128,0],yellow:[ot,ot,0],orange:[ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ot,0,0],pink:[ot,192,203],cyan:[0,ot,ot],transparent:[ot,ot,ot,0]},gf=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ot+.5|0},R_=function(e,t,n){var s=e?ls(e)?[e>>16,e>>8&ot,e&ot]:0:Ua.black,r,o,a,l,c,u,f,h,p,g;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ua[e])s=Ua[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&ot,s&ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&ot,e&ot]}else if(e.substr(0,3)==="hsl"){if(s=g=e.match(vh),!t)l=+s[0]%360/360,c=+s[1]/100,u=+s[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,s.length>3&&(s[3]*=1),s[0]=gf(l+1/3,r,o),s[1]=gf(l,r,o),s[2]=gf(l-1/3,r,o);else if(~e.indexOf("="))return s=e.match(r_),n&&s.length<4&&(s[3]=1),s}else s=e.match(vh)||Ua.transparent;s=s.map(Number)}return t&&!g&&(r=s[0]/ot,o=s[1]/ot,a=s[2]/ot,f=Math.max(r,o,a),h=Math.min(r,o,a),u=(f+h)/2,f===h?l=c=0:(p=f-h,c=u>.5?p/(2-f-h):p/(f+h),l=f===r?(o-a)/p+(o<a?6:0):f===o?(a-r)/p+2:(r-o)/p+4,l*=60),s[0]=~~(l+.5),s[1]=~~(c*100+.5),s[2]=~~(u*100+.5)),n&&s.length<4&&(s[3]=1),s},L_=function(e){var t=[],n=[],s=-1;return e.split(Hs).forEach(function(r){var o=r.match(fo)||[];t.push.apply(t,o),n.push(s+=o.length+1)}),t.c=n,t},Wp=function(e,t,n){var s="",r=(e+s).match(Hs),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!r)return e;if(r=r.map(function(h){return(h=R_(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=L_(e),l=n.c,l.join(s)!==u.c.join(s)))for(c=e.replace(Hs,"1").split(fo),f=c.length-1;a<f;a++)s+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Hs),f=c.length-1;a<f;a++)s+=c[a]+r[a];return s+c[f]},Hs=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ua)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),Ay=/hsl[a]?\(/,P_=function(e){var t=e.join(" "),n;if(Hs.lastIndex=0,Hs.test(t))return n=Ay.test(t),e[1]=Wp(e[1],n),e[0]=Wp(e[0],n,L_(e[1])),!0},sl,Un=function(){var i=Date.now,e=500,t=33,n=i(),s=n,r=1e3/240,o=r,a=[],l,c,u,f,h,p,g=function d(m){var v=i()-s,x=m===!0,_,b,y,E;if(v>e&&(n+=v-t),s+=v,y=s-n,_=y-o,(_>0||x)&&(E=++f.frame,h=y-f.time*1e3,f.time=y=y/1e3,o+=_+(_>=r?4:r-_),b=1),x||(l=c(d)),b)for(p=0;p<a.length;p++)a[p](y,h,E,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){l_&&(!xh&&Ed()&&(Kn=xh=window,Ad=Kn.document||{},Gn.gsap=An,(Kn.gsapVersions||(Kn.gsapVersions=[])).push(An.version),c_(jc||Kn.GreenSockGlobals||!Kn.gsap&&Kn||{}),u=Kn.requestAnimationFrame,A_.forEach(C_)),l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},sl=1,g(2))},sleep:function(){(u?Kn.cancelAnimationFrame:clearTimeout)(l),sl=0,c=nl},lagSmoothing:function(m,v){e=m||1/0,t=Math.min(v||33,e)},fps:function(m){r=1e3/(m||240),o=f.time*1e3+r},add:function(m,v,x){var _=v?function(b,y,E,A){m(b,y,E,A),f.remove(_)}:m;return f.remove(m),a[x?"unshift":"push"](_),Ho(),_},remove:function(m,v){~(v=a.indexOf(m))&&a.splice(v,1)&&p>=v&&p--},_listeners:a},f}(),Ho=function(){return!sl&&Un.wake()},Ye={},Cy=/^[\d.\-M][\d.\-,\s]/,Ry=/["']/g,Ly=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),s=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[s]=isNaN(c)?c.replace(Ry,"").trim():+c,s=l.substr(a+1).trim();return t},Py=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<n?e.indexOf(")",n+1):n)},Iy=function(e){var t=(e+"").split("("),n=Ye[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Ly(t[1])]:Py(e).split(",").map(p_)):Ye._CE&&Cy.test(e)?Ye._CE("",e):n},I_=function(e){return function(t){return 1-e(1-t)}},D_=function i(e,t){for(var n=e._first,s;n;)n instanceof Mn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(s=n._ease,n._ease=n._yEase,n._yEase=s,n._yoyo=t)),n=n._next},Rr=function(e,t){return e&&(yt(e)?e:Ye[e]||Iy(e))||t},Fr=function(e,t,n,s){n===void 0&&(n=function(l){return 1-t(1-l)}),s===void 0&&(s=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:s},o;return Tn(e,function(a){Ye[a]=Gn[a]=r,Ye[o=a.toLowerCase()]=n;for(var l in r)Ye[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ye[a+"."+l]=r[l]}),r},N_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},_f=function i(e,t,n){var s=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/_h*(Math.asin(1/s)||0),a=function(u){return u===1?1:s*Math.pow(2,-10*u)*oy((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:N_(a);return r=_h/r,l.config=function(c,u){return i(e,c,u)},l},vf=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},s=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:N_(n);return s.config=function(r){return i(e,r)},s};Tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Fr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ye.Linear.easeNone=Ye.none=Ye.Linear.easeIn;Fr("Elastic",_f("in"),_f("out"),_f());(function(i,e){var t=1/e,n=2*t,s=2.5*t,r=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<s?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};Fr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Fr("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});Fr("Circ",function(i){return-(i_(1-i*i)-1)});Fr("Sine",function(i){return i===1?1:-ry(i*iy)+1});Fr("Back",vf("in"),vf("out"),vf());Ye.SteppedEase=Ye.steps=Gn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,s=e+(t?0:1),r=t?1:0,o=1-lt;return function(a){return((s*Fl(0,o,a)|0)+r)*n}}};zo.ease=Ye["quad.out"];Tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Ld+=i+","+i+"Params,"});var O_=function(e,t){this.id=sy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:h_,this.set=t?t.getSetter:Od},Wo=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Go(this,+t.duration,1,1),this.data=t.data,Pt&&(this._ctx=Pt,Pt.data.push(this)),sl||Un.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Go(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,s){if(Ho(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ju(this,n),!r._dp||r.parent||__(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Di(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===lt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),d_(this,n,s)),this},e.time=function(n,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Vp(this))%(this._dur+this._rDelay)||(n?this._dur:0),s):this._time},e.totalProgress=function(n,s){return arguments.length?this.totalTime(this.totalDuration()*n,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Vp(this),s):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,s){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,s):this._repeat?Vo(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-lt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?$c(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-lt?0:this._rts,this.totalTime(Fl(-Math.abs(this._delay),this._tDur,s),!0),Wu(this),dy(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ho(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==lt&&(this._tTime-=lt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&Di(s,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(wn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var s=this.parent||this._dp;return s?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?$c(s.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=cy);var s=rn;return rn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),rn=s,this},e.globalTime=function(n){for(var s=this,r=arguments.length?n:s.rawTime();s;)r=s._start+r/(s._ts||1),s=s._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Gp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var s=this._time;return this._rDelay=n,Gp(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,s){return this.totalTime(qn(this,n),wn(s))},e.restart=function(n,s){return this.play().totalTime(n?-this._delay:0,wn(s))},e.play=function(n,s){return n!=null&&this.seek(n,s),this.reversed(!1).paused(!1)},e.reverse=function(n,s){return n!=null&&this.seek(n||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(n,s){return n!=null&&this.seek(n,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-lt,this},e.isActive=function(){var n=this.parent||this._dp,s=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=s&&r<this.endTime(!0)-lt)},e.eventCallback=function(n,s,r){var o=this.vars;return arguments.length>1?(s?(o[n]=s,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=s)):delete o[n],this):o[n]},e.then=function(n){var s=this;return new Promise(function(r){var o=yt(n)?n:m_,a=function(){var c=s.then;s.then=null,yt(o)&&(o=o(s))&&(o.then||o===s)&&(s.then=c),r(o),s.then=c};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?a():s._prom=a})},e.kill=function(){Oa(this)},i}();ni(Wo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-lt,_prom:0,_ps:!1,_rts:1});var Mn=function(i){n_(e,i);function e(n,s){var r;return n===void 0&&(n={}),r=i.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=wn(n.sortChildren),vt&&Di(n.parent||vt,$i(r),s),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&v_($i(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(s,r,o){return Ha(0,arguments,this),this},t.from=function(s,r,o){return Ha(1,arguments,this),this},t.fromTo=function(s,r,o,a){return Ha(2,arguments,this),this},t.set=function(s,r,o){return r.duration=0,r.parent=this,Ga(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ot(s,r,qn(this,o),1),this},t.call=function(s,r,o){return Di(this,Ot.delayedCall(0,s,r),o)},t.staggerTo=function(s,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ot(s,o,qn(this,l)),this},t.staggerFrom=function(s,r,o,a,l,c,u){return o.runBackwards=1,Ga(o).immediateRender=wn(o.immediateRender),this.staggerTo(s,r,o,a,l,c,u)},t.staggerFromTo=function(s,r,o,a,l,c,u,f){return a.startAt=o,Ga(a).immediateRender=wn(a.immediateRender),this.staggerTo(s,r,a,l,c,u,f)},t.render=function(s,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=s<=0?0:Yt(s),f=this._zTime<0!=s<0&&(this._initted||!c),h,p,g,d,m,v,x,_,b,y,E,A;if(this!==vt&&u>l&&s>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,s+=this._time-a),h=u,b=this._start,_=this._ts,v=!_,f&&(c||(a=this._zTime),(s||!r)&&(this._zTime=s)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(m*100+s,r,o);if(h=Yt(u%m),u===l?(d=this._repeat,h=c):(d=~~(u/m),d&&d===u/m&&(h=c,d--),h>c&&(h=c)),y=Vo(this._tTime,m),!a&&this._tTime&&y!==d&&this._tTime-y*m-this._dur<=0&&(y=d),E&&d&1&&(h=c-h,A=1),d!==y&&!this._lock){var M=E&&y&1,T=M===(E&&d&1);if(d<y&&(M=!M),a=M?0:c,this._lock=1,this.render(a||(A?0:Yt(d*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&ti(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=M?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;D_(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=_y(this,Yt(a),Yt(h)),x&&(u-=h-(h=x._start))),this._tTime=u,this._time=h,this._act=!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,a=0),!a&&h&&!r&&!d&&(ti(this,"onStart"),this._tTime!==u))return this;if(h>=a&&s>=0)for(p=this._first;p;){if(g=p._next,(p._act||h>=p._start)&&p._ts&&x!==p){if(p.parent!==this)return this.render(s,r,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,r,o),h!==this._time||!this._ts&&!v){x=0,g&&(u+=this._zTime=-lt);break}}p=g}else{p=this._last;for(var P=s<0?s:h;p;){if(g=p._prev,(p._act||P<=p._end)&&p._ts&&x!==p){if(p.parent!==this)return this.render(s,r,o);if(p.render(p._ts>0?(P-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(P-p._start)*p._ts,r,o||rn&&(p._initted||p._startAt)),h!==this._time||!this._ts&&!v){x=0,g&&(u+=this._zTime=P?-lt:lt);break}}p=g}}if(x&&!r&&(this.pause(),x.render(h>=a?0:-lt)._zTime=h>=a?1:-1,this._ts))return this._start=b,Wu(this),this.render(s,r,o);this._onUpdate&&!r&&ti(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(b===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((s||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&qs(this,1),!r&&!(s<0&&!a)&&(u||a||!l)&&(ti(this,u===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,r){var o=this;if(ls(r)||(r=qn(this,r,s)),!(s instanceof Wo)){if(on(s))return s.forEach(function(a){return o.add(a,r)}),this;if(jt(s))return this.addLabel(s,r);if(yt(s))s=Ot.delayedCall(0,s);else return this}return this!==s?Di(this,s,r):this},t.getChildren=function(s,r,o,a){s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Qn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ot?r&&l.push(c):(o&&l.push(c),s&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(s){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===s)return r[o]},t.remove=function(s){return jt(s)?this.removeLabel(s):yt(s)?this.killTweensOf(s):(Hu(this,s),s===this._recent&&(this._recent=this._last),Cr(this))},t.totalTime=function(s,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Yt(Un.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),i.prototype.totalTime.call(this,s,r),this._forcing=0,this):this._tTime},t.addLabel=function(s,r){return this.labels[s]=qn(this,r),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,r,o){var a=Ot.delayedCall(0,r||nl,o);return a.data="isPause",this._hasPause=1,Di(this,a,qn(this,s))},t.removePause=function(s){var r=this._first;for(s=qn(this,s);r;)r._start===s&&r.data==="isPause"&&qs(r),r=r._next},t.killTweensOf=function(s,r,o){for(var a=this.getTweensOf(s,o),l=a.length;l--;)Fs!==a[l]&&a[l].kill(s,r);return this},t.getTweensOf=function(s,r){for(var o=[],a=ei(s),l=this._first,c=ls(r),u;l;)l instanceof Ot?uy(l._targets,a)&&(c?(!Fs||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(s,r){r=r||{};var o=this,a=qn(o,s),l=r,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,p,g=Ot.to(o,ni({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||lt,onStart:function(){if(o.pause(),!p){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Go(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,f||[])}},r));return h?g.render(0):g},t.tweenFromTo=function(s,r,o){return this.tweenTo(r,ni({startAt:{time:qn(this,s)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),Hp(this,qn(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),Hp(this,qn(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+lt)},t.shiftChildren=function(s,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=s,a._end+=s),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=s);return Cr(this)},t.invalidate=function(s){var r=this._first;for(this._lock=0;r;)r.invalidate(s),r=r._next;return i.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Cr(this)},t.totalDuration=function(s){var r=0,o=this,a=o._last,l=Qn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-s:s));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Di(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Go(o,o===vt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(s){if(vt._ts&&(d_(vt,$c(s,vt)),f_=Un.frame),Un.frame>=Bp){Bp+=kn.autoSleep||120;var r=vt._first;if((!r||!r._ts)&&kn.autoSleep&&Un._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Un.sleep()}}},e}(Wo);ni(Mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Dy=function(e,t,n,s,r,o,a){var l=new En(this._pt,e,t,0,1,V_,null,r),c=0,u=0,f,h,p,g,d,m,v,x;for(l.b=n,l.e=s,n+="",s+="",(v=~s.indexOf("random("))&&(s=il(s)),o&&(x=[n,s],o(x,e,t),n=x[0],s=x[1]),h=n.match(pf)||[];f=pf.exec(s);)g=f[0],d=s.substring(c,f.index),p?p=(p+1)%5:d.substr(-5)==="rgba("&&(p=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:m,c:g.charAt(1)==="="?So(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=pf.lastIndex);return l.c=c<s.length?s.substring(c,s.length):"",l.fp=a,(o_.test(s)||v)&&(l.e=0),this._pt=l,l},Id=function(e,t,n,s,r,o,a,l,c,u){yt(s)&&(s=s(r||0,e,o));var f=e[t],h=n!=="get"?n:yt(f)?c?e[t.indexOf("set")||!yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,p=yt(f)?c?ky:B_:Nd,g;if(jt(s)&&(~s.indexOf("random(")&&(s=il(s)),s.charAt(1)==="="&&(g=So(h,s)+(tn(h)||0),(g||g===0)&&(s=g))),!u||h!==s||Eh)return!isNaN(h*s)&&s!==""?(g=new En(this._pt,e,t,+h||0,s-(h||0),typeof f=="boolean"?zy:z_,0,p),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Cd(t,s),Dy.call(this,e,t,h,s,p,l||kn.stringFilter,c))},Ny=function(e,t,n,s,r){if(yt(e)&&(e=Wa(e,r,t,n,s)),!ki(e)||e.style&&e.nodeType||on(e)||s_(e))return jt(e)?Wa(e,r,t,n,s):e;var o={},a;for(a in e)o[a]=Wa(e[a],r,t,n,s);return o},U_=function(e,t,n,s,r,o){var a,l,c,u;if(On[e]&&(a=new On[e]).init(r,a.rawVars?t[e]:Ny(t[e],s,r,o,n),n,s,o)!==!1&&(n._pt=l=new En(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==ho))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Fs,Eh,Dd=function i(e,t,n){var s=e.vars,r=s.ease,o=s.startAt,a=s.immediateRender,l=s.lazy,c=s.onUpdate,u=s.onUpdateParams,f=s.callbackScope,h=s.runBackwards,p=s.yoyoEase,g=s.keyframes,d=s.autoRevert,m=e._dur,v=e._startAt,x=e._targets,_=e.parent,b=_&&_.data==="nested"?_.vars.targets:x,y=e._overwrite==="auto"&&!wd,E=e.timeline,A,M,T,P,D,W,U,N,O,Y,G,z,ee;if(E&&(!g||!r)&&(r="none"),e._ease=Rr(r,zo.ease),e._yEase=p?I_(Rr(p===!0?r:p,zo.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!E&&!!s.runBackwards,!E||g&&!s.stagger){if(N=x[0]?Ar(x[0]).harness:0,z=N&&s[N.prop],A=qc(s,Rd),v&&(v._zTime<0&&v.progress(1),t<0&&h&&a&&!d?v.render(-1,!0):v.revert(h&&m?Ic:ly),v._lazy=0),o){if(qs(e._startAt=Ot.set(x,ni({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!v&&wn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(rn||!a&&!d)&&e._startAt.revert(Ic),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&m&&!v){if(t&&(a=!1),T=ni({overwrite:!1,data:"isFromStart",lazy:a&&!v&&wn(l),immediateRender:a,stagger:0,parent:_},A),z&&(T[N.prop]=z),qs(e._startAt=Ot.set(x,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(rn?e._startAt.revert(Ic):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,lt,lt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&wn(l)||l&&!m,M=0;M<x.length;M++){if(D=x[M],U=D._gsap||Pd(x)[M]._gsap,e._ptLookup[M]=Y={},bh[U.id]&&Gs.length&&Yc(),G=b===x?M:b.indexOf(D),N&&(O=new N).init(D,z||A,e,G,b)!==!1&&(e._pt=P=new En(e._pt,D,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(ue){Y[ue]=P}),O.priority&&(W=1)),!N||z)for(T in A)On[T]&&(O=U_(T,A,e,G,D,b))?O.priority&&(W=1):Y[T]=P=Id.call(e,D,T,"get",A[T],G,b,0,s.stringFilter);e._op&&e._op[M]&&e.kill(D,e._op[M]),y&&e._pt&&(Fs=e,vt.killTweensOf(D,Y,e.globalTime(t)),ee=!e.parent,Fs=0),e._pt&&l&&(bh[U.id]=1)}W&&G_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ee,g&&t<=0&&E.render(Qn,!0,!0)},Oy=function(e,t,n,s,r,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,h;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Eh=1,e.vars[t]="+=0",Dd(e,a),Eh=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(s||s===0)&&!r?s:c.s+(s||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=Tt(n)+tn(u.e)),u.b&&(u.b=c.s+tn(u.b))},Uy=function(e,t){var n=e[0]?Ar(e[0]).harness:0,s=n&&n.aliases,r,o,a,l;if(!s)return t;r=Dr({},t);for(o in s)if(o in r)for(l=s[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},Fy=function(e,t,n,s){var r=t.ease||s||"power1.inOut",o,a;if(on(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},Wa=function(e,t,n,s,r){return yt(e)?e.call(t,n,s,r):jt(e)&&~e.indexOf("random(")?il(e):e},F_=Ld+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",k_={};Tn(F_+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return k_[i]=1});var Ot=function(i){n_(e,i);function e(n,s,r,o){var a;typeof s=="number"&&(r.duration=s,s=r,r=null),a=i.call(this,o?s:Ga(s))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,g=l.keyframes,d=l.defaults,m=l.scrollTrigger,v=l.yoyoEase,x=s.parent||vt,_=(on(n)||s_(n)?ls(n[0]):"length"in s)?[n]:ei(n),b,y,E,A,M,T,P,D;if(a._targets=_.length?Pd(_):Xc("GSAP target "+n+" not found. https://greensock.com",!kn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||h||Yl(c)||Yl(u)){if(s=a.vars,b=a.timeline=new Mn({data:"nested",defaults:d||{},targets:x&&x.data==="nested"?x.vars.targets:_}),b.kill(),b.parent=b._dp=$i(a),b._start=0,h||Yl(c)||Yl(u)){if(A=_.length,P=h&&M_(h),ki(h))for(M in h)~F_.indexOf(M)&&(D||(D={}),D[M]=h[M]);for(y=0;y<A;y++)E=qc(s,k_),E.stagger=0,v&&(E.yoyoEase=v),D&&Dr(E,D),T=_[y],E.duration=+Wa(c,$i(a),y,T,_),E.delay=(+Wa(u,$i(a),y,T,_)||0)-a._delay,!h&&A===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),b.to(T,E,P?P(y,T,_):0),b._ease=Ye.none;b.duration()?c=u=0:a.timeline=0}else if(g){Ga(ni(b.vars.defaults,{ease:"none"})),b._ease=Rr(g.ease||s.ease||"none");var W=0,U,N,O;if(on(g))g.forEach(function(Y){return b.to(_,Y,">")}),b.duration();else{E={};for(M in g)M==="ease"||M==="easeEach"||Fy(M,g[M],E,g.easeEach);for(M in E)for(U=E[M].sort(function(Y,G){return Y.t-G.t}),W=0,y=0;y<U.length;y++)N=U[y],O={ease:N.e,duration:(N.t-(y?U[y-1].t:0))/100*c},O[M]=N.v,b.to(_,O,W),W+=O.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return p===!0&&!wd&&(Fs=$i(a),vt.killTweensOf(_),Fs=0),Di(x,$i(a),r),s.reversed&&a.reverse(),s.paused&&a.paused(!0),(f||!c&&!g&&a._start===Yt(x._time)&&wn(f)&&py($i(a))&&x.data!=="nested")&&(a._tTime=-lt,a.render(Math.max(0,-u)||0)),m&&v_($i(a),m),a}var t=e.prototype;return t.render=function(s,r,o){var a=this._time,l=this._tDur,c=this._dur,u=s<0,f=s>l-lt&&!u?l:s<lt?0:s,h,p,g,d,m,v,x,_,b;if(!c)gy(this,s,r,o);else if(f!==this._tTime||!s||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,_=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+s,r,o);if(h=Yt(f%d),f===l?(g=this._repeat,h=c):(g=~~(f/d),g&&g===f/d&&(h=c,g--),h>c&&(h=c)),v=this._yoyo&&g&1,v&&(b=this._yEase,h=c-h),m=Vo(this._tTime,d),h===a&&!o&&this._initted)return this._tTime=f,this;g!==m&&(_&&this._yEase&&D_(_,v),this.vars.repeatRefresh&&!v&&!this._lock&&(this._lock=o=1,this.render(Yt(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(x_(this,u?s:h,o,r,f))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(s,r,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(b||this._ease)(h/c),this._from&&(this.ratio=x=1-x),h&&!a&&!r&&!g&&(ti(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(x,p.d),p=p._next;_&&_.render(s<0?s:!h&&v?-lt:_._dur*_._ease(h/this._dur),r,o)||this._startAt&&(this._zTime=s),this._onUpdate&&!r&&(u&&yh(this,s,r,o),ti(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&ti(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&yh(this,s,!0,!0),(s||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&qs(this,1),!r&&!(u&&!a)&&(f||a||v)&&(ti(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),i.prototype.invalidate.call(this,s)},t.resetTo=function(s,r,o,a){sl||Un.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Dd(this,l),c=this._ease(l/this._dur),Oy(this,s,r,o,a,c,l)?this.resetTo(s,r,o,a):(ju(this,0),this.parent||g_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,r){if(r===void 0&&(r="all"),!s&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Oa(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(s,r,Fs&&Fs.vars.overwrite!==!0)._first||Oa(this),this.parent&&o!==this.timeline.totalDuration()&&Go(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=s?ei(s):a,c=this._ptLookup,u=this._pt,f,h,p,g,d,m,v;if((!r||r==="all")&&hy(a,l))return r==="all"&&(this._pt=0),Oa(this);for(f=this._op=this._op||[],r!=="all"&&(jt(r)&&(d={},Tn(r,function(x){return d[x]=1}),r=d),r=Uy(a,r)),v=a.length;v--;)if(~l.indexOf(a[v])){h=c[v],r==="all"?(f[v]=r,g=h,p={}):(p=f[v]=f[v]||{},g=r);for(d in g)m=h&&h[d],m&&((!("kill"in m.d)||m.d.kill(d)===!0)&&Hu(this,m,"_pt"),delete h[d]),p!=="all"&&(p[d]=1)}return this._initted&&!this._pt&&u&&Oa(this),this},e.to=function(s,r){return new e(s,r,arguments[2])},e.from=function(s,r){return Ha(1,arguments)},e.delayedCall=function(s,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(s,r,o){return Ha(2,arguments)},e.set=function(s,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(s,r)},e.killTweensOf=function(s,r,o){return vt.killTweensOf(s,r,o)},e}(Wo);ni(Ot.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Tn("staggerTo,staggerFrom,staggerFromTo",function(i){Ot[i]=function(){var e=new Mn,t=Sh.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Nd=function(e,t,n){return e[t]=n},B_=function(e,t,n){return e[t](n)},ky=function(e,t,n,s){return e[t](s.fp,n)},By=function(e,t,n){return e.setAttribute(t,n)},Od=function(e,t){return yt(e[t])?B_:Td(e[t])&&e.setAttribute?By:Nd},z_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},zy=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},V_=function(e,t){var n=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;n;)s=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+s,n=n._next;s+=t.c}t.set(t.t,t.p,s,t)},Ud=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Vy=function(e,t,n,s){for(var r=this._pt,o;r;)o=r._next,r.p===s&&r.modifier(e,t,n),r=o},Gy=function(e){for(var t=this._pt,n,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?Hu(this,t,"_pt"):t.dep||(n=1),t=s;return!n},Hy=function(e,t,n,s){s.mSet(e,t,s.m.call(s.tween,n,s.mt),s)},G_=function(e){for(var t=e._pt,n,s,r,o;t;){for(n=t._next,s=r;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:o)?t._prev._next=t:r=t,(t._next=s)?s._prev=t:o=t,t=n}e._pt=r},En=function(){function i(t,n,s,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=s,this.r=a||z_,this.d=l||this,this.set=c||Nd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,s,r){this.mSet=this.mSet||this.set,this.set=Hy,this.m=n,this.mt=r,this.tween=s},i}();Tn(Ld+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Rd[i]=1});Gn.TweenMax=Gn.TweenLite=Ot;Gn.TimelineLite=Gn.TimelineMax=Mn;vt=new Mn({sortChildren:!1,defaults:zo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});kn.stringFilter=P_;var jo=[],Nc={},Wy=[],jp=0,xf=function(e){return(Nc[e]||Wy).map(function(t){return t()})},Ah=function(){var e=Date.now(),t=[];e-jp>2&&(xf("matchMediaInit"),jo.forEach(function(n){var s=n.queries,r=n.conditions,o,a,l,c;for(a in s)o=Kn.matchMedia(s[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),xf("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),jp=e,xf("matchMedia"))},H_=function(){function i(t,n){this.selector=n&&wh(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=i.prototype;return e.add=function(n,s,r){yt(n)&&(r=s,s=n,n=yt);var o=this,a=function(){var c=Pt,u=o.selector,f;return c&&c!==o&&c.data.push(o),r&&(o.selector=wh(r)),Pt=o,f=s.apply(o,arguments),yt(f)&&o._r.push(f),Pt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===yt?a(o):n?o[n]=a:a},e.ignore=function(n){var s=Pt;Pt=null,n(this),Pt=s},e.getTweens=function(){var n=[];return this.data.forEach(function(s){return s instanceof i?n.push.apply(n,s.getTweens()):s instanceof Ot&&!(s.parent&&s.parent.data==="nested")&&n.push(s)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,s){var r=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Wo)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),s){var a=jo.indexOf(this);~a&&jo.splice(a,1)}},e.revert=function(n){this.kill(n||{})},i}(),jy=function(){function i(t){this.contexts=[],this.scope=t}var e=i.prototype;return e.add=function(n,s,r){ki(n)||(n={matches:n});var o=new H_(0,r||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),s=o.add("onMatch",s),o.queries=n;for(c in n)c==="all"?u=1:(l=Kn.matchMedia(n[c]),l&&(jo.indexOf(o)<0&&jo.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ah):l.addEventListener("change",Ah)));return u&&s(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(s){return s.kill(n,!0)})},i}(),Kc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(s){return C_(s)})},timeline:function(e){return new Mn(e)},getTweensOf:function(e,t){return vt.getTweensOf(e,t)},getProperty:function(e,t,n,s){jt(e)&&(e=ei(e)[0]);var r=Ar(e||{}).get,o=n?m_:p_;return n==="native"&&(n=""),e&&(t?o((On[t]&&On[t].get||r)(e,t,n,s)):function(a,l,c){return o((On[a]&&On[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ei(e),e.length>1){var s=e.map(function(u){return An.quickSetter(u,t,n)}),r=s.length;return function(u){for(var f=r;f--;)s[f](u)}}e=e[0]||{};var o=On[t],a=Ar(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;ho._pt=0,f.init(e,n?u+n:u,ho,0,[e]),f.render(1,f),ho._pt&&Ud(1,ho)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var s,r=An.to(e,Dr((s={},s[t]="+=0.1",s.paused=!0,s),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Rr(e.ease,zo.ease)),zp(zo,e||{})},config:function(e){return zp(kn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,s=e.plugins,r=e.defaults,o=e.extendTimeline;(s||"").split(",").forEach(function(a){return a&&!On[a]&&!Gn[a]&&Xc(t+" effect requires "+a+" plugin.")}),mf[t]=function(a,l,c){return n(ei(a),ni(l||{},r),c)},o&&(Mn.prototype[t]=function(a,l,c){return this.add(mf[t](a,ki(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ye[e]=Rr(t)},parseEase:function(e,t){return arguments.length?Rr(e,t):Ye},getById:function(e){return vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Mn(e),s,r;for(n.smoothChildTiming=wn(e.smoothChildTiming),vt.remove(n),n._dp=0,n._time=n._tTime=vt._time,s=vt._first;s;)r=s._next,(t||!(!s._dur&&s instanceof Ot&&s.vars.onComplete===s._targets[0]))&&Di(n,s,s._start-s._delay),s=r;return Di(vt,n,0),n},context:function(e,t){return e?new H_(e,t):Pt},matchMedia:function(e){return new jy(e)},matchMediaRefresh:function(){return jo.forEach(function(e){var t=e.conditions,n,s;for(s in t)t[s]&&(t[s]=!1,n=1);n&&e.revert()})||Ah()},addEventListener:function(e,t){var n=Nc[e]||(Nc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Nc[e],s=n&&n.indexOf(t);s>=0&&n.splice(s,1)},utils:{wrap:wy,wrapYoyo:Ty,distribute:M_,random:w_,snap:S_,normalize:Sy,getUnit:tn,clamp:xy,splitColor:R_,toArray:ei,selector:wh,mapRange:E_,pipe:yy,unitize:My,interpolate:Ey,shuffle:y_},install:c_,effects:mf,ticker:Un,updateRoot:Mn.updateRoot,plugins:On,globalTimeline:vt,core:{PropTween:En,globals:u_,Tween:Ot,Timeline:Mn,Animation:Wo,getCache:Ar,_removeLinkedListItem:Hu,reverting:function(){return rn},context:function(e){return e&&Pt&&(Pt.data.push(e),e._ctx=Pt),Pt},suppressOverwrites:function(e){return wd=e}}};Tn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Kc[i]=Ot[i]});Un.add(Mn.updateRoot);ho=Kc.to({},{duration:0});var Xy=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Yy=function(e,t){var n=e._targets,s,r,o;for(s in t)for(r=n.length;r--;)o=e._ptLookup[r][s],o&&(o=o.d)&&(o._pt&&(o=Xy(o,s)),o&&o.modifier&&o.modifier(t[s],e,n[r],s))},bf=function(e,t){return{name:e,rawVars:1,init:function(s,r,o){o._onInit=function(a){var l,c;if(jt(r)&&(l={},Tn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Yy(a,r)}}}},An=Kc.registerPlugin({name:"attr",init:function(e,t,n,s,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],s,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)rn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},bf("roundProps",Th),bf("modifiers"),bf("snap",S_))||Kc;Ot.version=Mn.version=An.version="3.11.5";l_=1;Ed()&&Ho();Ye.Power0;Ye.Power1;Ye.Power2;Ye.Power3;Ye.Power4;Ye.Linear;Ye.Quad;Ye.Cubic;Ye.Quart;Ye.Quint;Ye.Strong;Ye.Elastic;Ye.Back;Ye.SteppedEase;Ye.Bounce;Ye.Sine;Ye.Expo;Ye.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Xp,ks,wo,Fd,xr,Yp,kd,qy=function(){return typeof window<"u"},cs={},hr=180/Math.PI,To=Math.PI/180,Gr=Math.atan2,qp=1e8,Bd=/([A-Z])/g,$y=/(left|right|width|margin|padding|x)/i,Ky=/[\s,\(]\S/,Ui={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ch=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Zy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Jy=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Qy=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},W_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},j_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},e1=function(e,t,n){return e.style[t]=n},t1=function(e,t,n){return e.style.setProperty(t,n)},n1=function(e,t,n){return e._gsap[t]=n},i1=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},s1=function(e,t,n,s,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},r1=function(e,t,n,s,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},xt="transform",pi=xt+"Origin",o1=function i(e,t){var n=this,s=this.target,r=s.style;if(e in cs){if(this.tfm=this.tfm||{},e!=="transform")e=Ui[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Zi(s,o)}):this.tfm[e]=s._gsap.x?s._gsap[e]:Zi(s,e);else return Ui.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(xt)>=0)return;s._gsap.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(pi,t,"")),e=xt}(r||t)&&this.props.push(e,t,r[e])},X_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},a1=function(){var e=this.props,t=this.target,n=t.style,s=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Bd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)s[o]=this.tfm[o];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=kd(),(!r||!r.isStart)&&!n[xt]&&(X_(n),s.uncache=1)}},Y_=function(e,t){var n={target:e,props:[],revert:a1,save:o1};return e._gsap||An.core.getCache(e),t&&t.split(",").forEach(function(s){return n.save(s)}),n},q_,Rh=function(e,t){var n=ks.createElementNS?ks.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ks.createElement(e);return n.style?n:ks.createElement(e)},Fi=function i(e,t,n){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(Bd,"-$1").toLowerCase())||s.getPropertyValue(t)||!n&&i(e,Xo(t)||t,1)||""},$p="O,Moz,ms,Ms,Webkit".split(","),Xo=function(e,t,n){var s=t||xr,r=s.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!($p[o]+e in r););return o<0?null:(o===3?"ms":o>=0?$p[o]:"")+e},Lh=function(){qy()&&window.document&&(Xp=window,ks=Xp.document,wo=ks.documentElement,xr=Rh("div")||{style:{}},Rh("div"),xt=Xo(xt),pi=xt+"Origin",xr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",q_=!!Xo("perspective"),kd=An.core.reverting,Fd=1)},yf=function i(e){var t=Rh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,s=this.nextSibling,r=this.style.cssText,o;if(wo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(s?n.insertBefore(this,s):n.appendChild(this)),wo.removeChild(t),this.style.cssText=r,o},Kp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},$_=function(e){var t;try{t=e.getBBox()}catch{t=yf.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===yf||(t=yf.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Kp(e,["x","cx","x1"])||0,y:+Kp(e,["y","cy","y1"])||0,width:0,height:0}:t},K_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&$_(e))},rl=function(e,t){if(t){var n=e.style;t in cs&&t!==pi&&(t=xt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Bd,"-$1").toLowerCase())):n.removeAttribute(t)}},Bs=function(e,t,n,s,r,o){var a=new En(e._pt,t,n,0,1,o?j_:W_);return e._pt=a,a.b=s,a.e=r,e._props.push(n),a},Zp={deg:1,rad:1,turn:1},l1={grid:1,flex:1},$s=function i(e,t,n,s){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=xr.style,l=$y.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=s==="px",p=s==="%",g,d,m,v;return s===o||!r||Zp[s]||Zp[o]?r:(o!=="px"&&!h&&(r=i(e,t,n,"px")),v=e.getCTM&&K_(e),(p||o==="%")&&(cs[t]||~t.indexOf("adius"))?(g=v?e.getBBox()[l?"width":"height"]:e[u],Tt(p?r/g*f:r/100*g)):(a[l?"width":"height"]=f+(h?o:s),d=~t.indexOf("adius")||s==="em"&&e.appendChild&&!c?e:e.parentNode,v&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===ks||!d.appendChild)&&(d=ks.body),m=d._gsap,m&&p&&m.width&&l&&m.time===Un.time&&!m.uncache?Tt(r/m.width*f):((p||o==="%")&&!l1[Fi(d,"display")]&&(a.position=Fi(e,"position")),d===e&&(a.position="static"),d.appendChild(xr),g=xr[u],d.removeChild(xr),a.position="absolute",l&&p&&(m=Ar(d),m.time=Un.time,m.width=d[u]),Tt(h?g*r/f:g&&r?f/g*r:0))))},Zi=function(e,t,n,s){var r;return Fd||Lh(),t in Ui&&t!=="transform"&&(t=Ui[t],~t.indexOf(",")&&(t=t.split(",")[0])),cs[t]&&t!=="transform"?(r=al(e,s),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Jc(Fi(e,pi))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||s||~(r+"").indexOf("calc("))&&(r=Zc[t]&&Zc[t](e,t,n)||Fi(e,t)||h_(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?$s(e,t,r,n)+n:r},c1=function(e,t,n,s){if(!n||n==="none"){var r=Xo(t,e,1),o=r&&Fi(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=Fi(e,"borderTopColor"))}var a=new En(this._pt,e.style,t,0,1,V_),l=0,c=0,u,f,h,p,g,d,m,v,x,_,b,y;if(a.b=n,a.e=s,n+="",s+="",s==="auto"&&(e.style[t]=s,s=Fi(e,t)||s,e.style[t]=n),u=[n,s],P_(u),n=u[0],s=u[1],h=n.match(fo)||[],y=s.match(fo)||[],y.length){for(;f=fo.exec(s);)m=f[0],x=s.substring(l,f.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),m!==(d=h[c++]||"")&&(p=parseFloat(d)||0,b=d.substr((p+"").length),m.charAt(1)==="="&&(m=So(p,m)+b),v=parseFloat(m),_=m.substr((v+"").length),l=fo.lastIndex-_.length,_||(_=_||kn.units[t]||b,l===s.length&&(s+=_,a.e+=_)),b!==_&&(p=$s(e,t,d,_)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:p,c:v-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<s.length?s.substring(l,s.length):""}else a.r=t==="display"&&s==="none"?j_:W_;return o_.test(s)&&(a.e=0),this._pt=a,a},Jp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},u1=function(e){var t=e.split(" "),n=t[0],s=t[1]||"50%";return(n==="top"||n==="bottom"||s==="left"||s==="right")&&(e=n,n=s,s=e),t[0]=Jp[n]||n,t[1]=Jp[s]||s,t.join(" ")},f1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,s=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)s.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],cs[a]&&(l=1,a=a==="transformOrigin"?pi:xt),rl(n,a);l&&(rl(n,xt),o&&(o.svg&&n.removeAttribute("transform"),al(n,1),o.uncache=1,X_(s)))}},Zc={clearProps:function(e,t,n,s,r){if(r.data!=="isFromStart"){var o=e._pt=new En(e._pt,t,n,0,0,f1);return o.u=s,o.pr=-10,o.tween=r,e._props.push(n),1}}},ol=[1,0,0,1,0,0],Z_={},J_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Qp=function(e){var t=Fi(e,xt);return J_(t)?ol:t.substr(7).match(r_).map(Tt)},zd=function(e,t){var n=e._gsap||Ar(e),s=e.style,r=Qp(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ol:r):(r===ol&&!e.offsetParent&&e!==wo&&!n.svg&&(l=s.display,s.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,wo.appendChild(e)),r=Qp(e),l?s.display=l:rl(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):wo.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ph=function(e,t,n,s,r,o){var a=e._gsap,l=r||zd(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,p=l[0],g=l[1],d=l[2],m=l[3],v=l[4],x=l[5],_=t.split(" "),b=parseFloat(_[0])||0,y=parseFloat(_[1])||0,E,A,M,T;n?l!==ol&&(A=p*m-g*d)&&(M=b*(m/A)+y*(-d/A)+(d*x-m*v)/A,T=b*(-g/A)+y*(p/A)-(p*x-g*v)/A,b=M,y=T):(E=$_(e),b=E.x+(~_[0].indexOf("%")?b/100*E.width:b),y=E.y+(~(_[1]||_[0]).indexOf("%")?y/100*E.height:y)),s||s!==!1&&a.smooth?(v=b-c,x=y-u,a.xOffset=f+(v*p+x*d)-v,a.yOffset=h+(v*g+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=y,a.smooth=!!s,a.origin=t,a.originIsAbsolute=!!n,e.style[pi]="0px 0px",o&&(Bs(o,a,"xOrigin",c,b),Bs(o,a,"yOrigin",u,y),Bs(o,a,"xOffset",f,a.xOffset),Bs(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",b+" "+y)},al=function(e,t){var n=e._gsap||new O_(e);if("x"in n&&!t&&!n.uncache)return n;var s=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Fi(e,pi)||"0",u,f,h,p,g,d,m,v,x,_,b,y,E,A,M,T,P,D,W,U,N,O,Y,G,z,ee,ue,ve,H,le,pe,L;return u=f=h=d=m=v=x=_=b=0,p=g=1,n.svg=!!(e.getCTM&&K_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(s[xt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[xt]!=="none"?l[xt]:"")),s.scale=s.rotate=s.translate="none"),A=zd(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),Ph(e,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,A)),y=n.xOrigin||0,E=n.yOrigin||0,A!==ol&&(D=A[0],W=A[1],U=A[2],N=A[3],u=O=A[4],f=Y=A[5],A.length===6?(p=Math.sqrt(D*D+W*W),g=Math.sqrt(N*N+U*U),d=D||W?Gr(W,D)*hr:0,x=U||N?Gr(U,N)*hr+d:0,x&&(g*=Math.abs(Math.cos(x*To))),n.svg&&(u-=y-(y*D+E*U),f-=E-(y*W+E*N))):(L=A[6],le=A[7],ue=A[8],ve=A[9],H=A[10],pe=A[11],u=A[12],f=A[13],h=A[14],M=Gr(L,H),m=M*hr,M&&(T=Math.cos(-M),P=Math.sin(-M),G=O*T+ue*P,z=Y*T+ve*P,ee=L*T+H*P,ue=O*-P+ue*T,ve=Y*-P+ve*T,H=L*-P+H*T,pe=le*-P+pe*T,O=G,Y=z,L=ee),M=Gr(-U,H),v=M*hr,M&&(T=Math.cos(-M),P=Math.sin(-M),G=D*T-ue*P,z=W*T-ve*P,ee=U*T-H*P,pe=N*P+pe*T,D=G,W=z,U=ee),M=Gr(W,D),d=M*hr,M&&(T=Math.cos(M),P=Math.sin(M),G=D*T+W*P,z=O*T+Y*P,W=W*T-D*P,Y=Y*T-O*P,D=G,O=z),m&&Math.abs(m)+Math.abs(d)>359.9&&(m=d=0,v=180-v),p=Tt(Math.sqrt(D*D+W*W+U*U)),g=Tt(Math.sqrt(Y*Y+L*L)),M=Gr(O,Y),x=Math.abs(M)>2e-4?M*hr:0,b=pe?1/(pe<0?-pe:pe):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!J_(Fi(e,xt)),G&&e.setAttribute("transform",G))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(p*=-1,x+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Tt(p),n.scaleY=Tt(g),n.rotation=Tt(d)+a,n.rotationX=Tt(m)+a,n.rotationY=Tt(v)+a,n.skewX=x+a,n.skewY=_+a,n.transformPerspective=b+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(s[pi]=Jc(c)),n.xOffset=n.yOffset=0,n.force3D=kn.force3D,n.renderTransform=n.svg?d1:q_?Q_:h1,n.uncache=0,n},Jc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Mf=function(e,t,n){var s=tn(t);return Tt(parseFloat(t)+parseFloat($s(e,"x",n+"px",s)))+s},h1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Q_(e,t)},rr="0deg",va="0px",or=") ",Q_=function(e,t){var n=t||this,s=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,p=n.skewY,g=n.scaleX,d=n.scaleY,m=n.transformPerspective,v=n.force3D,x=n.target,_=n.zOrigin,b="",y=v==="auto"&&e&&e!==1||v===!0;if(_&&(f!==rr||u!==rr)){var E=parseFloat(u)*To,A=Math.sin(E),M=Math.cos(E),T;E=parseFloat(f)*To,T=Math.cos(E),o=Mf(x,o,A*T*-_),a=Mf(x,a,-Math.sin(E)*-_),l=Mf(x,l,M*T*-_+_)}m!==va&&(b+="perspective("+m+or),(s||r)&&(b+="translate("+s+"%, "+r+"%) "),(y||o!==va||a!==va||l!==va)&&(b+=l!==va||y?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+or),c!==rr&&(b+="rotate("+c+or),u!==rr&&(b+="rotateY("+u+or),f!==rr&&(b+="rotateX("+f+or),(h!==rr||p!==rr)&&(b+="skew("+h+", "+p+or),(g!==1||d!==1)&&(b+="scale("+g+", "+d+or),x.style[xt]=b||"translate(0, 0)"},d1=function(e,t){var n=t||this,s=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,p=n.target,g=n.xOrigin,d=n.yOrigin,m=n.xOffset,v=n.yOffset,x=n.forceCSS,_=parseFloat(o),b=parseFloat(a),y,E,A,M,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=To,c*=To,y=Math.cos(l)*f,E=Math.sin(l)*f,A=Math.sin(l-c)*-h,M=Math.cos(l-c)*h,c&&(u*=To,T=Math.tan(c-u),T=Math.sqrt(1+T*T),A*=T,M*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),y*=T,E*=T)),y=Tt(y),E=Tt(E),A=Tt(A),M=Tt(M)):(y=f,M=h,E=A=0),(_&&!~(o+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(_=$s(p,"x",o,"px"),b=$s(p,"y",a,"px")),(g||d||m||v)&&(_=Tt(_+g-(g*y+d*A)+m),b=Tt(b+d-(g*E+d*M)+v)),(s||r)&&(T=p.getBBox(),_=Tt(_+s/100*T.width),b=Tt(b+r/100*T.height)),T="matrix("+y+","+E+","+A+","+M+","+_+","+b+")",p.setAttribute("transform",T),x&&(p.style[xt]=T)},p1=function(e,t,n,s,r){var o=360,a=jt(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?hr:1),c=l-s,u=s+c+"deg",f,h;return a&&(f=r.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*qp)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*qp)%o-~~(c/o)*o)),e._pt=h=new En(e._pt,t,n,s,c,Zy),h.e=u,h.u="deg",e._props.push(n),h},em=function(e,t){for(var n in t)e[n]=t[n];return e},m1=function(e,t,n){var s=em({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,p,g;s.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[xt]=t,a=al(n,1),rl(n,xt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[xt],o[xt]=t,a=al(n,1),o[xt]=c);for(l in cs)c=s[l],u=a[l],c!==u&&r.indexOf(l)<0&&(p=tn(c),g=tn(u),f=p!==g?$s(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new En(e._pt,a,l,f,h-f,Ch),e._pt.u=g||0,e._props.push(l));em(a,s)};Tn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",s="Bottom",r="Left",o=(e<3?[t,n,s,r]:[t+r,t+n,s+n,s+r]).map(function(a){return e<2?i+a:"border"+a+i});Zc[e>1?"border"+i:i]=function(a,l,c,u,f){var h,p;if(arguments.length<4)return h=o.map(function(g){return Zi(a,g,c)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(u+"").split(" "),p={},o.forEach(function(g,d){return p[g]=h[d]=h[d]||h[(d-1)/2|0]}),a.init(l,p,f)}});var ev={name:"css",register:Lh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,s,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,p,g,d,m,v,x,_,b,y,E,A,M;Fd||Lh(),this.styles=this.styles||Y_(e),M=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(On[d]&&U_(d,t,n,s,e,r)))){if(p=typeof u,g=Zc[d],p==="function"&&(u=u.call(n,s,e,r),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=il(u)),g)g(this,e,d,u,n)&&(A=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",Hs.lastIndex=0,Hs.test(c)||(m=tn(c),v=tn(u)),v?m!==v&&(c=$s(e,d,c,v)+v):m&&(u+=m),this.add(a,"setProperty",c,u,s,r,0,0,d),o.push(d),M.push(d,0,a[d]);else if(p!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,s,e,r):l[d],jt(c)&&~c.indexOf("random(")&&(c=il(c)),tn(c+"")||(c+=kn.units[d]||tn(Zi(e,d))||""),(c+"").charAt(1)==="="&&(c=Zi(e,d))):c=Zi(e,d),h=parseFloat(c),x=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),f=parseFloat(u),d in Ui&&(d==="autoAlpha"&&(h===1&&Zi(e,"visibility")==="hidden"&&f&&(h=0),M.push("visibility",0,a.visibility),Bs(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),d!=="scale"&&d!=="transform"&&(d=Ui[d],~d.indexOf(",")&&(d=d.split(",")[0]))),_=d in cs,_){if(this.styles.save(d),b||(y=e._gsap,y.renderTransform&&!t.parseTransform||al(e,t.parseTransform),E=t.smoothOrigin!==!1&&y.smooth,b=this._pt=new En(this._pt,a,xt,0,1,y.renderTransform,y,0,-1),b.dep=1),d==="scale")this._pt=new En(this._pt,y,"scaleY",y.scaleY,(x?So(y.scaleY,x+f):f)-y.scaleY||0,Ch),this._pt.u=0,o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){M.push(pi,0,a[pi]),u=u1(u),y.svg?Ph(e,u,0,E,0,this):(v=parseFloat(u.split(" ")[2])||0,v!==y.zOrigin&&Bs(this,y,"zOrigin",y.zOrigin,v),Bs(this,a,d,Jc(c),Jc(u)));continue}else if(d==="svgOrigin"){Ph(e,u,1,E,0,this);continue}else if(d in Z_){p1(this,y,d,h,x?So(h,x+u):u);continue}else if(d==="smoothOrigin"){Bs(this,y,"smooth",y.smooth,u);continue}else if(d==="force3D"){y[d]=u;continue}else if(d==="transform"){m1(this,u,e);continue}}else d in a||(d=Xo(d)||d);if(_||(f||f===0)&&(h||h===0)&&!Ky.test(u)&&d in a)m=(c+"").substr((h+"").length),f||(f=0),v=tn(u)||(d in kn.units?kn.units[d]:m),m!==v&&(h=$s(e,d,c,v)),this._pt=new En(this._pt,_?y:a,d,h,(x?So(h,x+f):f)-h,!_&&(v==="px"||d==="zIndex")&&t.autoRound!==!1?Qy:Ch),this._pt.u=v||0,m!==v&&v!=="%"&&(this._pt.b=c,this._pt.r=Jy);else if(d in a)c1.call(this,e,d,c,x?x+u:u);else if(d in e)this.add(e,d,c||e[d],x?x+u:u,s,r);else if(d!=="parseTransform"){Cd(d,u);continue}_||(d in a?M.push(d,0,a[d]):M.push(d,1,c||e[d])),o.push(d)}}A&&G_(this)},render:function(e,t){if(t.tween._time||!kd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Zi,aliases:Ui,getSetter:function(e,t,n){var s=Ui[t];return s&&s.indexOf(",")<0&&(t=s),t in cs&&t!==pi&&(e._gsap.x||Zi(e,"x"))?n&&Yp===n?t==="scale"?i1:n1:(Yp=n||{})&&(t==="scale"?s1:r1):e.style&&!Td(e.style[t])?e1:~t.indexOf("-")?t1:Od(e,t)},core:{_removeProperty:rl,_getMatrix:zd}};An.utils.checkPrefix=Xo;An.core.getStyleSaver=Y_;(function(i,e,t,n){var s=Tn(i+","+e+","+t,function(r){cs[r]=1});Tn(e,function(r){kn.units[r]="deg",Z_[r]=1}),Ui[s[13]]=i+","+e,Tn(n,function(r){var o=r.split(":");Ui[o[1]]=s[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){kn.units[i]="px"});An.registerPlugin(ev);var Vd=An.registerPlugin(ev)||An;Vd.core.Tween;/*!
 * paths 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var g1=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,_1=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,v1=Math.PI/180,ql=Math.sin,$l=Math.cos,ja=Math.abs,xa=Math.sqrt,x1=function(e){return typeof e=="number"},tm=1e5,ms=function(e){return Math.round(e*tm)/tm||0};function b1(i,e,t,n,s,r,o){for(var a=i.length,l,c,u,f,h;--a>-1;)for(l=i[a],c=l.length,u=0;u<c;u+=2)f=l[u],h=l[u+1],l[u]=f*e+h*n+r,l[u+1]=f*t+h*s+o;return i._dirty=1,i}function y1(i,e,t,n,s,r,o,a,l){if(!(i===a&&e===l)){t=ja(t),n=ja(n);var c=s%360*v1,u=$l(c),f=ql(c),h=Math.PI,p=h*2,g=(i-a)/2,d=(e-l)/2,m=u*g+f*d,v=-f*g+u*d,x=m*m,_=v*v,b=x/(t*t)+_/(n*n);b>1&&(t=xa(b)*t,n=xa(b)*n);var y=t*t,E=n*n,A=(y*E-y*_-E*x)/(y*_+E*x);A<0&&(A=0);var M=(r===o?-1:1)*xa(A),T=M*(t*v/n),P=M*-(n*m/t),D=(i+a)/2,W=(e+l)/2,U=D+(u*T-f*P),N=W+(f*T+u*P),O=(m-T)/t,Y=(v-P)/n,G=(-m-T)/t,z=(-v-P)/n,ee=O*O+Y*Y,ue=(Y<0?-1:1)*Math.acos(O/xa(ee)),ve=(O*z-Y*G<0?-1:1)*Math.acos((O*G+Y*z)/xa(ee*(G*G+z*z)));isNaN(ve)&&(ve=h),!o&&ve>0?ve-=p:o&&ve<0&&(ve+=p),ue%=p,ve%=p;var H=Math.ceil(ja(ve)/(p/4)),le=[],pe=ve/H,L=4/3*ql(pe/2)/(1+$l(pe/2)),Z=u*t,K=f*t,oe=f*-n,de=u*n,xe;for(xe=0;xe<H;xe++)s=ue+xe*pe,m=$l(s),v=ql(s),O=$l(s+=pe),Y=ql(s),le.push(m-L*v,v+L*m,O+L*Y,Y-L*O,O,Y);for(xe=0;xe<le.length;xe+=2)m=le[xe],v=le[xe+1],le[xe]=m*Z+v*oe+U,le[xe+1]=m*K+v*de+N;return le[xe-2]=a,le[xe-1]=l,le}}function M1(i){var e=(i+"").replace(_1,function(T){var P=+T;return P<1e-4&&P>-1e-4?0:P}).match(g1)||[],t=[],n=0,s=0,r=2/3,o=e.length,a=0,l="ERROR: malformed path: "+i,c,u,f,h,p,g,d,m,v,x,_,b,y,E,A,M=function(P,D,W,U){x=(W-P)/3,_=(U-D)/3,d.push(P+x,D+_,W-x,U-_,W,U)};if(!i||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(c=0;c<o;c++)if(y=p,isNaN(e[c])?(p=e[c].toUpperCase(),g=p!==e[c]):c--,f=+e[c+1],h=+e[c+2],g&&(f+=n,h+=s),c||(m=f,v=h),p==="M")d&&(d.length<8?t.length-=1:a+=d.length),n=m=f,s=v=h,d=[f,h],t.push(d),c+=2,p="L";else if(p==="C")d||(d=[0,0]),g||(n=s=0),d.push(f,h,n+e[c+3]*1,s+e[c+4]*1,n+=e[c+5]*1,s+=e[c+6]*1),c+=6;else if(p==="S")x=n,_=s,(y==="C"||y==="S")&&(x+=n-d[d.length-4],_+=s-d[d.length-3]),g||(n=s=0),d.push(x,_,f,h,n+=e[c+3]*1,s+=e[c+4]*1),c+=4;else if(p==="Q")x=n+(f-n)*r,_=s+(h-s)*r,g||(n=s=0),n+=e[c+3]*1,s+=e[c+4]*1,d.push(x,_,n+(f-n)*r,s+(h-s)*r,n,s),c+=4;else if(p==="T")x=n-d[d.length-4],_=s-d[d.length-3],d.push(n+x,s+_,f+(n+x*1.5-f)*r,h+(s+_*1.5-h)*r,n=f,s=h),c+=2;else if(p==="H")M(n,s,n=f,s),c+=1;else if(p==="V")M(n,s,n,s=f+(g?s-n:0)),c+=1;else if(p==="L"||p==="Z")p==="Z"&&(f=m,h=v,d.closed=!0),(p==="L"||ja(n-f)>.5||ja(s-h)>.5)&&(M(n,s,f,h),p==="L"&&(c+=2)),n=f,s=h;else if(p==="A"){if(E=e[c+4],A=e[c+5],x=e[c+6],_=e[c+7],u=7,E.length>1&&(E.length<3?(_=x,x=A,u--):(_=A,x=E.substr(2),u-=2),A=E.charAt(1),E=E.charAt(0)),b=y1(n,s,+e[c+1],+e[c+2],+e[c+3],+E,+A,(g?n:0)+x*1,(g?s:0)+_*1),c+=u,b)for(u=0;u<b.length;u++)d.push(b[u]);n=d[d.length-2],s=d[d.length-1]}else console.log(l);return c=d.length,c<6?(t.pop(),c=0):d[0]===d[c-2]&&d[1]===d[c-1]&&(d.closed=!0),t.totalPoints=a+c,t}function S1(i){x1(i[0])&&(i=[i]);var e="",t=i.length,n,s,r,o;for(s=0;s<t;s++){for(o=i[s],e+="M"+ms(o[0])+","+ms(o[1])+" C",n=o.length,r=2;r<n;r++)e+=ms(o[r++])+","+ms(o[r++])+" "+ms(o[r++])+","+ms(o[r++])+" "+ms(o[r++])+","+ms(o[r])+" ";o.closed&&(e+="z")}return e}/*!
 * CustomEase 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var yn,tv,nv=function(){return yn||typeof window<"u"&&(yn=window.gsap)&&yn.registerPlugin&&yn},nm=function(){yn=nv(),yn?(yn.registerEase("_CE",kl.create),tv=1):console.warn("Please gsap.registerPlugin(CustomEase)")},w1=1e20,Kl=function(e){return~~(e*1e3+(e<0?-.5:.5))/1e3},T1=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,E1=/[cLlsSaAhHvVtTqQ]/g,A1=function(e){var t=e.length,n=w1,s;for(s=1;s<t;s+=6)+e[s]<n&&(n=+e[s]);return n},C1=function(e,t,n){!n&&n!==0&&(n=Math.max(+e[e.length-1],+e[1]));var s=+e[0]*-1,r=-n,o=e.length,a=1/(+e[o-2]+s),l=-t||(Math.abs(+e[o-1]-+e[1])<.01*(+e[o-2]-+e[0])?A1(e)+r:+e[o-1]+r),c;for(l?l=1/l:l=-a,c=0;c<o;c+=2)e[c]=(+e[c]+s)*a,e[c+1]=(+e[c+1]+r)*l},R1=function i(e,t,n,s,r,o,a,l,c,u,f){var h=(e+n)/2,p=(t+s)/2,g=(n+r)/2,d=(s+o)/2,m=(r+a)/2,v=(o+l)/2,x=(h+g)/2,_=(p+d)/2,b=(g+m)/2,y=(d+v)/2,E=(x+b)/2,A=(_+y)/2,M=a-e,T=l-t,P=Math.abs((n-a)*T-(s-l)*M),D=Math.abs((r-a)*T-(o-l)*M),W;return u||(u=[{x:e,y:t},{x:a,y:l}],f=1),u.splice(f||u.length-1,0,{x:E,y:A}),(P+D)*(P+D)>c*(M*M+T*T)&&(W=u.length,i(e,t,h,p,x,_,E,A,c,u,f),i(E,A,b,y,m,v,a,l,c,u,f+1+(u.length-W))),u},kl=function(){function i(t,n,s){tv||nm(),this.id=t,this.setData(n,s)}var e=i.prototype;return e.setData=function(n,s){s=s||{},n=n||"0,0,1,1";var r=n.match(T1),o=1,a=[],l=[],c=s.precision||1,u=c<=1,f,h,p,g,d,m,v,x,_;if(this.data=n,(E1.test(n)||~n.indexOf("M")&&n.indexOf("C")<0)&&(r=M1(n)[0]),f=r.length,f===4)r.unshift(0,0),r.push(1,1),f=8;else if((f-2)%6)throw"Invalid CustomEase";for((+r[0]!=0||+r[f-2]!=1)&&C1(r,s.height,s.originY),this.segment=r,g=2;g<f;g+=6)h={x:+r[g-2],y:+r[g-1]},p={x:+r[g+4],y:+r[g+5]},a.push(h,p),R1(h.x,h.y,+r[g],+r[g+1],+r[g+2],+r[g+3],p.x,p.y,1/(c*2e5),a,a.length-1);for(f=a.length,g=0;g<f;g++)v=a[g],x=a[g-1]||v,(v.x>x.x||x.y!==v.y&&x.x===v.x||v===x)&&v.x<=1?(x.cx=v.x-x.x,x.cy=v.y-x.y,x.n=v,x.nx=v.x,u&&g>1&&Math.abs(x.cy/x.cx-a[g-2].cy/a[g-2].cx)>2&&(u=0),x.cx<o&&(x.cx?o=x.cx:(x.cx=.001,g===f-1&&(x.x-=.001,o=Math.min(o,.001),u=0)))):(a.splice(g--,1),f--);if(f=1/o+1|0,d=1/f,m=0,v=a[0],u){for(g=0;g<f;g++)_=g*d,v.nx<_&&(v=a[++m]),h=v.y+(_-v.x)/v.cx*v.cy,l[g]={x:_,cx:d,y:h,cy:0,nx:9},g&&(l[g-1].cy=h-l[g-1].y);l[f-1].cy=a[a.length-1].y-h}else{for(g=0;g<f;g++)v.nx<g*d&&(v=a[++m]),l[g]=v;m<a.length-1&&(l[g-1]=a[a.length-2])}return this.ease=function(b){var y=l[b*f|0]||l[f-1];return y.nx<b&&(y=y.n),y.y+(b-y.x)/y.cx*y.cy},this.ease.custom=this,this.id&&yn&&yn.registerEase(this.id,this.ease),this},e.getSVGData=function(n){return i.getSVGData(this,n)},i.create=function(n,s,r){return new i(n,s,r).ease},i.register=function(n){yn=n,nm()},i.get=function(n){return yn.parseEase(n)},i.getSVGData=function(n,s){s=s||{};var r=s.width||100,o=s.height||100,a=s.x||0,l=(s.y||0)+o,c=yn.utils.toArray(s.path)[0],u,f,h,p,g,d,m,v,x,_;if(s.invert&&(o=-o,l=0),typeof n=="string"&&(n=yn.parseEase(n)),n.custom&&(n=n.custom),n instanceof i)u=S1(b1([n.segment],r,0,0,-o,a,l));else{for(u=[a,l],m=Math.max(5,(s.precision||1)*200),p=1/m,m+=2,v=5/m,x=Kl(a+p*r),_=Kl(l+n(p)*-o),f=(_-l)/(x-a),h=2;h<m;h++)g=Kl(a+h*p*r),d=Kl(l+n(h*p)*-o),(Math.abs((d-_)/(g-x)-f)>v||h===m-1)&&(u.push(x,_),f=(d-_)/(g-x)),x=g,_=d;u="M"+u.join(",")}return c&&c.setAttribute("d",u),u},i}();nv()&&yn.registerPlugin(kl);kl.version="3.11.5";function Gd(i,e){const t=Object.create(null),n=i.split(",");for(let s=0;s<n.length;s++)t[n[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}function Hd(i){if(Ue(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],s=Nt(n)?D1(n):Hd(n);if(s)for(const r in s)e[r]=s[r]}return e}else{if(Nt(i))return i;if(gt(i))return i}}const L1=/;(?![^(]*\))/g,P1=/:([^]+)/,I1=/\/\*.*?\*\//gs;function D1(i){const e={};return i.replace(I1,"").split(L1).forEach(t=>{if(t){const n=t.split(P1);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Wd(i){let e="";if(Nt(i))e=i;else if(Ue(i))for(let t=0;t<i.length;t++){const n=Wd(i[t]);n&&(e+=n+" ")}else if(gt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const N1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",O1=Gd(N1);function iv(i){return!!i||i===""}const Ek=i=>Nt(i)?i:i==null?"":Ue(i)||gt(i)&&(i.toString===av||!Be(i.toString))?JSON.stringify(i,sv,2):String(i),sv=(i,e)=>e&&e.__v_isRef?sv(i,e.value):Ao(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,s])=>(t[`${n} =>`]=s,t),{})}:rv(e)?{[`Set(${e.size})`]:[...e.values()]}:gt(e)&&!Ue(e)&&!lv(e)?String(e):e,mt={},Eo=[],mi=()=>{},U1=()=>!1,F1=/^on[^a-z]/,Xu=i=>F1.test(i),jd=i=>i.startsWith("onUpdate:"),xn=Object.assign,Xd=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},k1=Object.prototype.hasOwnProperty,Je=(i,e)=>k1.call(i,e),Ue=Array.isArray,Ao=i=>Bl(i)==="[object Map]",rv=i=>Bl(i)==="[object Set]",B1=i=>Bl(i)==="[object RegExp]",Be=i=>typeof i=="function",Nt=i=>typeof i=="string",Yd=i=>typeof i=="symbol",gt=i=>i!==null&&typeof i=="object",ov=i=>gt(i)&&Be(i.then)&&Be(i.catch),av=Object.prototype.toString,Bl=i=>av.call(i),z1=i=>Bl(i).slice(8,-1),lv=i=>Bl(i)==="[object Object]",qd=i=>Nt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Oc=Gd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yu=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},V1=/-(\w)/g,Yo=Yu(i=>i.replace(V1,(e,t)=>t?t.toUpperCase():"")),G1=/\B([A-Z])/g,oa=Yu(i=>i.replace(G1,"-$1").toLowerCase()),cv=Yu(i=>i.charAt(0).toUpperCase()+i.slice(1)),Sf=Yu(i=>i?`on${cv(i)}`:""),ll=(i,e)=>!Object.is(i,e),Xa=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},Qc=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},H1=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let im;const W1=()=>im||(im=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Nn;class uv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Nn,!e&&Nn&&(this.index=(Nn.scopes||(Nn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Nn;try{return Nn=this,e()}finally{Nn=t}}}on(){Nn=this}off(){Nn=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function $d(i){return new uv(i)}function j1(i,e=Nn){e&&e.active&&e.effects.push(i)}function fv(){return Nn}function X1(i){Nn&&Nn.cleanups.push(i)}const Kd=i=>{const e=new Set(i);return e.w=0,e.n=0,e},hv=i=>(i.w&Ks)>0,dv=i=>(i.n&Ks)>0,Y1=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=Ks},q1=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const s=e[n];hv(s)&&!dv(s)?s.delete(i):e[t++]=s,s.w&=~Ks,s.n&=~Ks}e.length=t}},eu=new WeakMap;let Fa=0,Ks=1;const Ih=30;let ci;const Lr=Symbol(""),Dh=Symbol("");class Zd{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,j1(this,n)}run(){if(!this.active)return this.fn();let e=ci,t=Ws;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ci,ci=this,Ws=!0,Ks=1<<++Fa,Fa<=Ih?Y1(this):sm(this),this.fn()}finally{Fa<=Ih&&q1(this),Ks=1<<--Fa,ci=this.parent,Ws=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ci===this?this.deferStop=!0:this.active&&(sm(this),this.onStop&&this.onStop(),this.active=!1)}}function sm(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let Ws=!0;const pv=[];function aa(){pv.push(Ws),Ws=!1}function la(){const i=pv.pop();Ws=i===void 0?!0:i}function Cn(i,e,t){if(Ws&&ci){let n=eu.get(i);n||eu.set(i,n=new Map);let s=n.get(t);s||n.set(t,s=Kd()),mv(s)}}function mv(i,e){let t=!1;Fa<=Ih?dv(i)||(i.n|=Ks,t=!hv(i)):t=!i.has(ci),t&&(i.add(ci),ci.deps.push(i))}function us(i,e,t,n,s,r){const o=eu.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ue(i)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ue(i)?qd(t)&&a.push(o.get("length")):(a.push(o.get(Lr)),Ao(i)&&a.push(o.get(Dh)));break;case"delete":Ue(i)||(a.push(o.get(Lr)),Ao(i)&&a.push(o.get(Dh)));break;case"set":Ao(i)&&a.push(o.get(Lr));break}if(a.length===1)a[0]&&Nh(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Nh(Kd(l))}}function Nh(i,e){const t=Ue(i)?i:[...i];for(const n of t)n.computed&&rm(n);for(const n of t)n.computed||rm(n)}function rm(i,e){(i!==ci||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}function $1(i,e){var t;return(t=eu.get(i))===null||t===void 0?void 0:t.get(e)}const K1=Gd("__proto__,__v_isRef,__isVue"),gv=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Yd)),Z1=Jd(),J1=Jd(!1,!0),Q1=Jd(!0),om=eM();function eM(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=et(this);for(let r=0,o=this.length;r<o;r++)Cn(n,"get",r+"");const s=n[e](...t);return s===-1||s===!1?n[e](...t.map(et)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){aa();const n=et(this)[e].apply(this,t);return la(),n}}),i}function tM(i){const e=et(this);return Cn(e,"has",i),e.hasOwnProperty(i)}function Jd(i=!1,e=!1){return function(n,s,r){if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(i?e?_M:yv:e?bv:xv).get(n))return n;const o=Ue(n);if(!i){if(o&&Je(om,s))return Reflect.get(om,s,r);if(s==="hasOwnProperty")return tM}const a=Reflect.get(n,s,r);return(Yd(s)?gv.has(s):K1(s))||(i||Cn(n,"get",s),e)?a:Mt(a)?o&&qd(s)?a:a.value:gt(a)?i?Mv(a):ca(a):a}}const nM=_v(),iM=_v(!0);function _v(i=!1){return function(t,n,s,r){let o=t[n];if(qo(o)&&Mt(o)&&!Mt(s))return!1;if(!i&&(!tu(s)&&!qo(s)&&(o=et(o),s=et(s)),!Ue(t)&&Mt(o)&&!Mt(s)))return o.value=s,!0;const a=Ue(t)&&qd(n)?Number(n)<t.length:Je(t,n),l=Reflect.set(t,n,s,r);return t===et(r)&&(a?ll(s,o)&&us(t,"set",n,s):us(t,"add",n,s)),l}}function sM(i,e){const t=Je(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&us(i,"delete",e,void 0),n}function rM(i,e){const t=Reflect.has(i,e);return(!Yd(e)||!gv.has(e))&&Cn(i,"has",e),t}function oM(i){return Cn(i,"iterate",Ue(i)?"length":Lr),Reflect.ownKeys(i)}const vv={get:Z1,set:nM,deleteProperty:sM,has:rM,ownKeys:oM},aM={get:Q1,set(i,e){return!0},deleteProperty(i,e){return!0}},lM=xn({},vv,{get:J1,set:iM}),Qd=i=>i,qu=i=>Reflect.getPrototypeOf(i);function Zl(i,e,t=!1,n=!1){i=i.__v_raw;const s=et(i),r=et(e);t||(e!==r&&Cn(s,"get",e),Cn(s,"get",r));const{has:o}=qu(s),a=n?Qd:t?np:cl;if(o.call(s,e))return a(i.get(e));if(o.call(s,r))return a(i.get(r));i!==s&&i.get(e)}function Jl(i,e=!1){const t=this.__v_raw,n=et(t),s=et(i);return e||(i!==s&&Cn(n,"has",i),Cn(n,"has",s)),i===s?t.has(i):t.has(i)||t.has(s)}function Ql(i,e=!1){return i=i.__v_raw,!e&&Cn(et(i),"iterate",Lr),Reflect.get(i,"size",i)}function am(i){i=et(i);const e=et(this);return qu(e).has.call(e,i)||(e.add(i),us(e,"add",i,i)),this}function lm(i,e){e=et(e);const t=et(this),{has:n,get:s}=qu(t);let r=n.call(t,i);r||(i=et(i),r=n.call(t,i));const o=s.call(t,i);return t.set(i,e),r?ll(e,o)&&us(t,"set",i,e):us(t,"add",i,e),this}function cm(i){const e=et(this),{has:t,get:n}=qu(e);let s=t.call(e,i);s||(i=et(i),s=t.call(e,i)),n&&n.call(e,i);const r=e.delete(i);return s&&us(e,"delete",i,void 0),r}function um(){const i=et(this),e=i.size!==0,t=i.clear();return e&&us(i,"clear",void 0,void 0),t}function ec(i,e){return function(n,s){const r=this,o=r.__v_raw,a=et(o),l=e?Qd:i?np:cl;return!i&&Cn(a,"iterate",Lr),o.forEach((c,u)=>n.call(s,l(c),l(u),r))}}function tc(i,e,t){return function(...n){const s=this.__v_raw,r=et(s),o=Ao(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),u=t?Qd:e?np:cl;return!e&&Cn(r,"iterate",l?Dh:Lr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function gs(i){return function(...e){return i==="delete"?!1:this}}function cM(){const i={get(r){return Zl(this,r)},get size(){return Ql(this)},has:Jl,add:am,set:lm,delete:cm,clear:um,forEach:ec(!1,!1)},e={get(r){return Zl(this,r,!1,!0)},get size(){return Ql(this)},has:Jl,add:am,set:lm,delete:cm,clear:um,forEach:ec(!1,!0)},t={get(r){return Zl(this,r,!0)},get size(){return Ql(this,!0)},has(r){return Jl.call(this,r,!0)},add:gs("add"),set:gs("set"),delete:gs("delete"),clear:gs("clear"),forEach:ec(!0,!1)},n={get(r){return Zl(this,r,!0,!0)},get size(){return Ql(this,!0)},has(r){return Jl.call(this,r,!0)},add:gs("add"),set:gs("set"),delete:gs("delete"),clear:gs("clear"),forEach:ec(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=tc(r,!1,!1),t[r]=tc(r,!0,!1),e[r]=tc(r,!1,!0),n[r]=tc(r,!0,!0)}),[i,t,e,n]}const[uM,fM,hM,dM]=cM();function ep(i,e){const t=e?i?dM:hM:i?fM:uM;return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(Je(t,s)&&s in n?t:n,s,r)}const pM={get:ep(!1,!1)},mM={get:ep(!1,!0)},gM={get:ep(!0,!1)},xv=new WeakMap,bv=new WeakMap,yv=new WeakMap,_M=new WeakMap;function vM(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xM(i){return i.__v_skip||!Object.isExtensible(i)?0:vM(z1(i))}function ca(i){return qo(i)?i:tp(i,!1,vv,pM,xv)}function bM(i){return tp(i,!1,lM,mM,bv)}function Mv(i){return tp(i,!0,aM,gM,yv)}function tp(i,e,t,n,s){if(!gt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const r=s.get(i);if(r)return r;const o=xM(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return s.set(i,a),a}function js(i){return qo(i)?js(i.__v_raw):!!(i&&i.__v_isReactive)}function qo(i){return!!(i&&i.__v_isReadonly)}function tu(i){return!!(i&&i.__v_isShallow)}function Sv(i){return js(i)||qo(i)}function et(i){const e=i&&i.__v_raw;return e?et(e):i}function $o(i){return Qc(i,"__v_skip",!0),i}const cl=i=>gt(i)?ca(i):i,np=i=>gt(i)?Mv(i):i;function wv(i){Ws&&ci&&(i=et(i),mv(i.dep||(i.dep=Kd())))}function Tv(i,e){i=et(i);const t=i.dep;t&&Nh(t)}function Mt(i){return!!(i&&i.__v_isRef===!0)}function Ni(i){return Ev(i,!1)}function yM(i){return Ev(i,!0)}function Ev(i,e){return Mt(i)?i:new MM(i,e)}class MM{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:et(e),this._value=t?e:cl(e)}get value(){return wv(this),this._value}set value(e){const t=this.__v_isShallow||tu(e)||qo(e);e=t?e:et(e),ll(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:cl(e),Tv(this))}}function rs(i){return Mt(i)?i.value:i}const SM={get:(i,e,t)=>rs(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const s=i[e];return Mt(s)&&!Mt(t)?(s.value=t,!0):Reflect.set(i,e,t,n)}};function Av(i){return js(i)?i:new Proxy(i,SM)}function wM(i){const e=Ue(i)?new Array(i.length):{};for(const t in i)e[t]=EM(i,t);return e}class TM{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return $1(et(this._object),this._key)}}function EM(i,e,t){const n=i[e];return Mt(n)?n:new TM(i,e,t)}var Cv;class AM{constructor(e,t,n,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Cv]=!1,this._dirty=!0,this.effect=new Zd(e,()=>{this._dirty||(this._dirty=!0,Tv(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=n}get value(){const e=et(this);return wv(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Cv="__v_isReadonly";function CM(i,e,t=!1){let n,s;const r=Be(i);return r?(n=i,s=mi):(n=i.get,s=i.set),new AM(n,s,r||!s,t)}function Xs(i,e,t,n){let s;try{s=n?i(...n):i()}catch(r){$u(r,e,t)}return s}function gi(i,e,t,n){if(Be(i)){const r=Xs(i,e,t,n);return r&&ov(r)&&r.catch(o=>{$u(o,e,t)}),r}const s=[];for(let r=0;r<i.length;r++)s.push(gi(i[r],e,t,n));return s}function $u(i,e,t,n=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Xs(l,null,10,[i,o,a]);return}}RM(i,t,s,n)}function RM(i,e,t,n=!0){console.error(i)}let ul=!1,Oh=!1;const nn=[];let Oi=0;const Co=[];let Ki=null,gr=0;const Rv=Promise.resolve();let ip=null;function sp(i){const e=ip||Rv;return i?e.then(this?i.bind(this):i):e}function LM(i){let e=Oi+1,t=nn.length;for(;e<t;){const n=e+t>>>1;fl(nn[n])<i?e=n+1:t=n}return e}function rp(i){(!nn.length||!nn.includes(i,ul&&i.allowRecurse?Oi+1:Oi))&&(i.id==null?nn.push(i):nn.splice(LM(i.id),0,i),Lv())}function Lv(){!ul&&!Oh&&(Oh=!0,ip=Rv.then(Iv))}function PM(i){const e=nn.indexOf(i);e>Oi&&nn.splice(e,1)}function IM(i){Ue(i)?Co.push(...i):(!Ki||!Ki.includes(i,i.allowRecurse?gr+1:gr))&&Co.push(i),Lv()}function fm(i,e=ul?Oi+1:0){for(;e<nn.length;e++){const t=nn[e];t&&t.pre&&(nn.splice(e,1),e--,t())}}function Pv(i){if(Co.length){const e=[...new Set(Co)];if(Co.length=0,Ki){Ki.push(...e);return}for(Ki=e,Ki.sort((t,n)=>fl(t)-fl(n)),gr=0;gr<Ki.length;gr++)Ki[gr]();Ki=null,gr=0}}const fl=i=>i.id==null?1/0:i.id,DM=(i,e)=>{const t=fl(i)-fl(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function Iv(i){Oh=!1,ul=!0,nn.sort(DM);const e=mi;try{for(Oi=0;Oi<nn.length;Oi++){const t=nn[Oi];t&&t.active!==!1&&Xs(t,null,14)}}finally{Oi=0,nn.length=0,Pv(),ul=!1,ip=null,(nn.length||Co.length)&&Iv()}}function NM(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||mt;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=n[u]||mt;h&&(s=t.map(p=>Nt(p)?p.trim():p)),f&&(s=t.map(H1))}let a,l=n[a=Sf(e)]||n[a=Sf(Yo(e))];!l&&r&&(l=n[a=Sf(oa(e))]),l&&gi(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,gi(c,i,6,s)}}function Dv(i,e,t=!1){const n=e.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!Be(i)){const l=c=>{const u=Dv(c,e,!0);u&&(a=!0,xn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(gt(i)&&n.set(i,null),null):(Ue(r)?r.forEach(l=>o[l]=null):xn(o,r),gt(i)&&n.set(i,o),o)}function Ku(i,e){return!i||!Xu(e)?!1:(e=e.slice(2).replace(/Once$/,""),Je(i,e[0].toLowerCase()+e.slice(1))||Je(i,oa(e))||Je(i,e))}let ui=null,Nv=null;function nu(i){const e=ui;return ui=i,Nv=i&&i.type.__scopeId||null,e}function Uh(i,e=ui,t){if(!e||i._n)return i;const n=(...s)=>{n._d&&xm(-1);const r=nu(e);let o;try{o=i(...s)}finally{nu(r),n._d&&xm(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function wf(i){const{type:e,vnode:t,proxy:n,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:g,inheritAttrs:d}=i;let m,v;const x=nu(i);try{if(t.shapeFlag&4){const b=s||n;m=Li(u.call(b,b,f,r,p,h,g)),v=l}else{const b=e;m=Li(b.length>1?b(r,{attrs:l,slots:a,emit:c}):b(r,null)),v=e.props?l:OM(l)}}catch(b){$a.length=0,$u(b,i,1),m=Zt(hl)}let _=m;if(v&&d!==!1){const b=Object.keys(v),{shapeFlag:y}=_;b.length&&y&7&&(o&&b.some(jd)&&(v=UM(v,o)),_=Nr(_,v))}return t.dirs&&(_=Nr(_),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&(_.transition=t.transition),m=_,nu(x),m}const OM=i=>{let e;for(const t in i)(t==="class"||t==="style"||Xu(t))&&((e||(e={}))[t]=i[t]);return e},UM=(i,e)=>{const t={};for(const n in i)(!jd(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function FM(i,e,t){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?hm(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!Ku(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?hm(n,o,c):!0:!!o;return!1}function hm(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(e[r]!==i[r]&&!Ku(t,r))return!0}return!1}function kM({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const Ov=i=>i.__isSuspense;function BM(i,e){e&&e.pendingBranch?Ue(i)?e.effects.push(...i):e.effects.push(i):IM(i)}function Uc(i,e){if(It){let t=It.provides;const n=It.parent&&It.parent.provides;n===t&&(t=It.provides=Object.create(n)),t[i]=e}}function _i(i,e,t=!1){const n=It||ui;if(n){const s=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(s&&i in s)return s[i];if(arguments.length>1)return t&&Be(e)?e.call(n.proxy):e}}const nc={};function os(i,e,t){return Uv(i,e,t)}function Uv(i,e,{immediate:t,deep:n,flush:s,onTrack:r,onTrigger:o}=mt){const a=fv()===(It==null?void 0:It.scope)?It:null;let l,c=!1,u=!1;if(Mt(i)?(l=()=>i.value,c=tu(i)):js(i)?(l=()=>i,n=!0):Ue(i)?(u=!0,c=i.some(_=>js(_)||tu(_)),l=()=>i.map(_=>{if(Mt(_))return _.value;if(js(_))return po(_);if(Be(_))return Xs(_,a,2)})):Be(i)?e?l=()=>Xs(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),gi(i,a,3,[h])}:l=mi,e&&n){const _=l;l=()=>po(_())}let f,h=_=>{f=v.onStop=()=>{Xs(_,a,4)}},p;if(pl)if(h=mi,e?t&&gi(e,a,3,[l(),u?[]:void 0,h]):l(),s==="sync"){const _=LS();p=_.__watcherHandles||(_.__watcherHandles=[])}else return mi;let g=u?new Array(i.length).fill(nc):nc;const d=()=>{if(v.active)if(e){const _=v.run();(n||c||(u?_.some((b,y)=>ll(b,g[y])):ll(_,g)))&&(f&&f(),gi(e,a,3,[_,g===nc?void 0:u&&g[0]===nc?[]:g,h]),g=_)}else v.run()};d.allowRecurse=!!e;let m;s==="sync"?m=d:s==="post"?m=()=>Xt(d,a&&a.suspense):(d.pre=!0,a&&(d.id=a.uid),m=()=>rp(d));const v=new Zd(l,m);e?t?d():g=v.run():s==="post"?Xt(v.run.bind(v),a&&a.suspense):v.run();const x=()=>{v.stop(),a&&a.scope&&Xd(a.scope.effects,v)};return p&&p.push(x),x}function zM(i,e,t){const n=this.proxy,s=Nt(i)?i.includes(".")?Fv(n,i):()=>n[i]:i.bind(n,n);let r;Be(e)?r=e:(r=e.handler,t=e);const o=It;Ko(this);const a=Uv(s,r.bind(n),t);return o?Ko(o):Pr(),a}function Fv(i,e){const t=e.split(".");return()=>{let n=i;for(let s=0;s<t.length&&n;s++)n=n[t[s]];return n}}function po(i,e){if(!gt(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),Mt(i))po(i.value,e);else if(Ue(i))for(let t=0;t<i.length;t++)po(i[t],e);else if(rv(i)||Ao(i))i.forEach(t=>{po(t,e)});else if(lv(i))for(const t in i)po(i[t],e);return i}function kv(i,e){i.shapeFlag&6&&i.component?kv(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function Bv(i){return Be(i)?{setup:i,name:i.name}:i}const Ya=i=>!!i.type.__asyncLoader,zv=i=>i.type.__isKeepAlive,VM={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(i,{slots:e}){const t=Vl(),n=t.ctx;if(!n.renderer)return()=>{const x=e.default&&e.default();return x&&x.length===1?x[0]:x};const s=new Map,r=new Set;let o=null;const a=t.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:f}}}=n,h=f("div");n.activate=(x,_,b,y,E)=>{const A=x.component;c(x,_,b,0,a),l(A.vnode,x,_,b,A,a,y,x.slotScopeIds,E),Xt(()=>{A.isDeactivated=!1,A.a&&Xa(A.a);const M=x.props&&x.props.onVnodeMounted;M&&$n(M,A.parent,x)},a)},n.deactivate=x=>{const _=x.component;c(x,h,null,1,a),Xt(()=>{_.da&&Xa(_.da);const b=x.props&&x.props.onVnodeUnmounted;b&&$n(b,_.parent,x),_.isDeactivated=!0},a)};function p(x){Tf(x),u(x,t,a,!0)}function g(x){s.forEach((_,b)=>{const y=Mm(_.type);y&&(!x||!x(y))&&d(b)})}function d(x){const _=s.get(x);!o||!oo(_,o)?p(_):o&&Tf(o),s.delete(x),r.delete(x)}os(()=>[i.include,i.exclude],([x,_])=>{x&&g(b=>ka(x,b)),_&&g(b=>!ka(_,b))},{flush:"post",deep:!0});let m=null;const v=()=>{m!=null&&s.set(m,Ef(t.subTree))};return Ju(v),Gv(v),Hv(()=>{s.forEach(x=>{const{subTree:_,suspense:b}=t,y=Ef(_);if(x.type===y.type&&x.key===y.key){Tf(y);const E=y.component.da;E&&Xt(E,b);return}p(x)})}),()=>{if(m=null,!e.default)return null;const x=e.default(),_=x[0];if(x.length>1)return o=null,x;if(!ru(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return o=null,_;let b=Ef(_);const y=b.type,E=Mm(Ya(b)?b.type.__asyncResolved||{}:y),{include:A,exclude:M,max:T}=i;if(A&&(!E||!ka(A,E))||M&&E&&ka(M,E))return o=b,_;const P=b.key==null?y:b.key,D=s.get(P);return b.el&&(b=Nr(b),_.shapeFlag&128&&(_.ssContent=b)),m=P,D?(b.el=D.el,b.component=D.component,b.transition&&kv(b,b.transition),b.shapeFlag|=512,r.delete(P),r.add(P)):(r.add(P),T&&r.size>parseInt(T,10)&&d(r.values().next().value)),b.shapeFlag|=256,o=b,Ov(_.type)?_:b}}},GM=VM;function ka(i,e){return Ue(i)?i.some(t=>ka(t,e)):Nt(i)?i.split(",").includes(e):B1(i)?i.test(e):!1}function HM(i,e){Vv(i,"a",e)}function WM(i,e){Vv(i,"da",e)}function Vv(i,e,t=It){const n=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(Zu(e,n,t),t){let s=t.parent;for(;s&&s.parent;)zv(s.parent.vnode)&&jM(n,e,t,s),s=s.parent}}function jM(i,e,t,n){const s=Zu(e,i,n,!0);op(()=>{Xd(n[e],s)},t)}function Tf(i){i.shapeFlag&=-257,i.shapeFlag&=-513}function Ef(i){return i.shapeFlag&128?i.ssContent:i}function Zu(i,e,t=It,n=!1){if(t){const s=t[i]||(t[i]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;aa(),Ko(t);const a=gi(e,t,i,o);return Pr(),la(),a});return n?s.unshift(r):s.push(r),r}}const ps=i=>(e,t=It)=>(!pl||i==="sp")&&Zu(i,(...n)=>e(...n),t),XM=ps("bm"),Ju=ps("m"),YM=ps("bu"),Gv=ps("u"),Hv=ps("bum"),op=ps("um"),qM=ps("sp"),$M=ps("rtg"),KM=ps("rtc");function ZM(i,e=It){Zu("ec",i,e)}function ar(i,e,t,n){const s=i.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(aa(),gi(l,t,8,[i.el,a,i,e]),la())}}const JM=Symbol();function Ak(i,e,t,n){let s;const r=t&&t[n];if(Ue(i)||Nt(i)){s=new Array(i.length);for(let o=0,a=i.length;o<a;o++)s[o]=e(i[o],o,void 0,r&&r[o])}else if(typeof i=="number"){s=new Array(i);for(let o=0;o<i;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(gt(i))if(i[Symbol.iterator])s=Array.from(i,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(i);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(i[c],c,a,r&&r[a])}}else s=[];return t&&(t[n]=s),s}const Fh=i=>i?ex(i)?fp(i)||i.proxy:Fh(i.parent):null,qa=xn(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Fh(i.parent),$root:i=>Fh(i.root),$emit:i=>i.emit,$options:i=>ap(i),$forceUpdate:i=>i.f||(i.f=()=>rp(i.update)),$nextTick:i=>i.n||(i.n=sp.bind(i.proxy)),$watch:i=>zM.bind(i)}),Af=(i,e)=>i!==mt&&!i.__isScriptSetup&&Je(i,e),QM={get({_:i},e){const{ctx:t,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Af(n,e))return o[e]=1,n[e];if(s!==mt&&Je(s,e))return o[e]=2,s[e];if((c=i.propsOptions[0])&&Je(c,e))return o[e]=3,r[e];if(t!==mt&&Je(t,e))return o[e]=4,t[e];kh&&(o[e]=0)}}const u=qa[e];let f,h;if(u)return e==="$attrs"&&Cn(i,"get",e),u(i);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==mt&&Je(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Je(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:s,ctx:r}=i;return Af(s,e)?(s[e]=t,!0):n!==mt&&Je(n,e)?(n[e]=t,!0):Je(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(r[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:s,propsOptions:r}},o){let a;return!!t[o]||i!==mt&&Je(i,o)||Af(e,o)||(a=r[0])&&Je(a,o)||Je(n,o)||Je(qa,o)||Je(s.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Je(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let kh=!0;function eS(i){const e=ap(i),t=i.proxy,n=i.ctx;kh=!1,e.beforeCreate&&dm(e.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:d,deactivated:m,beforeDestroy:v,beforeUnmount:x,destroyed:_,unmounted:b,render:y,renderTracked:E,renderTriggered:A,errorCaptured:M,serverPrefetch:T,expose:P,inheritAttrs:D,components:W,directives:U,filters:N}=e;if(c&&tS(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const G in o){const z=o[G];Be(z)&&(n[G]=z.bind(t))}if(s){const G=s.call(t,t);gt(G)&&(i.data=ca(G))}if(kh=!0,r)for(const G in r){const z=r[G],ee=Be(z)?z.bind(t,t):Be(z.get)?z.get.bind(t,t):mi,ue=!Be(z)&&Be(z.set)?z.set.bind(t):mi,ve=Ht({get:ee,set:ue});Object.defineProperty(n,G,{enumerable:!0,configurable:!0,get:()=>ve.value,set:H=>ve.value=H})}if(a)for(const G in a)Wv(a[G],n,t,G);if(l){const G=Be(l)?l.call(t):l;Reflect.ownKeys(G).forEach(z=>{Uc(z,G[z])})}u&&dm(u,i,"c");function Y(G,z){Ue(z)?z.forEach(ee=>G(ee.bind(t))):z&&G(z.bind(t))}if(Y(XM,f),Y(Ju,h),Y(YM,p),Y(Gv,g),Y(HM,d),Y(WM,m),Y(ZM,M),Y(KM,E),Y($M,A),Y(Hv,x),Y(op,b),Y(qM,T),Ue(P))if(P.length){const G=i.exposed||(i.exposed={});P.forEach(z=>{Object.defineProperty(G,z,{get:()=>t[z],set:ee=>t[z]=ee})})}else i.exposed||(i.exposed={});y&&i.render===mi&&(i.render=y),D!=null&&(i.inheritAttrs=D),W&&(i.components=W),U&&(i.directives=U)}function tS(i,e,t=mi,n=!1){Ue(i)&&(i=Bh(i));for(const s in i){const r=i[s];let o;gt(r)?"default"in r?o=_i(r.from||s,r.default,!0):o=_i(r.from||s):o=_i(r),Mt(o)&&n?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function dm(i,e,t){gi(Ue(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Wv(i,e,t,n){const s=n.includes(".")?Fv(t,n):()=>t[n];if(Nt(i)){const r=e[i];Be(r)&&os(s,r)}else if(Be(i))os(s,i.bind(t));else if(gt(i))if(Ue(i))i.forEach(r=>Wv(r,e,t,n));else{const r=Be(i.handler)?i.handler.bind(t):e[i.handler];Be(r)&&os(s,r,i)}}function ap(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!n?l=e:(l={},s.length&&s.forEach(c=>iu(l,c,o,!0)),iu(l,e,o)),gt(e)&&r.set(e,l),l}function iu(i,e,t,n=!1){const{mixins:s,extends:r}=e;r&&iu(i,r,t,!0),s&&s.forEach(o=>iu(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=nS[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const nS={data:pm,props:dr,emits:dr,methods:dr,computed:dr,beforeCreate:dn,created:dn,beforeMount:dn,mounted:dn,beforeUpdate:dn,updated:dn,beforeDestroy:dn,beforeUnmount:dn,destroyed:dn,unmounted:dn,activated:dn,deactivated:dn,errorCaptured:dn,serverPrefetch:dn,components:dr,directives:dr,watch:sS,provide:pm,inject:iS};function pm(i,e){return e?i?function(){return xn(Be(i)?i.call(this,this):i,Be(e)?e.call(this,this):e)}:e:i}function iS(i,e){return dr(Bh(i),Bh(e))}function Bh(i){if(Ue(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function dn(i,e){return i?[...new Set([].concat(i,e))]:e}function dr(i,e){return i?xn(xn(Object.create(null),i),e):e}function sS(i,e){if(!i)return e;if(!e)return i;const t=xn(Object.create(null),i);for(const n in e)t[n]=dn(i[n],e[n]);return t}function rS(i,e,t,n=!1){const s={},r={};Qc(r,Qu,1),i.propsDefaults=Object.create(null),jv(i,e,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);t?i.props=n?s:bM(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function oS(i,e,t,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=et(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Ku(i.emitsOptions,h))continue;const p=e[h];if(l)if(Je(r,h))p!==r[h]&&(r[h]=p,c=!0);else{const g=Yo(h);s[g]=zh(l,a,g,p,i,!1)}else p!==r[h]&&(r[h]=p,c=!0)}}}else{jv(i,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!Je(e,f)&&((u=oa(f))===f||!Je(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=zh(l,a,f,void 0,i,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!Je(e,f))&&(delete r[f],c=!0)}c&&us(i,"set","$attrs")}function jv(i,e,t,n){const[s,r]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Oc(l))continue;const c=e[l];let u;s&&Je(s,u=Yo(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Ku(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=et(t),c=a||mt;for(let u=0;u<r.length;u++){const f=r[u];t[f]=zh(s,l,f,c[f],i,!Je(c,f))}}return o}function zh(i,e,t,n,s,r){const o=i[t];if(o!=null){const a=Je(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Be(l)){const{propsDefaults:c}=s;t in c?n=c[t]:(Ko(s),n=c[t]=l.call(null,e),Pr())}else n=l}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===oa(t))&&(n=!0))}return n}function Xv(i,e,t=!1){const n=e.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!Be(i)){const u=f=>{l=!0;const[h,p]=Xv(f,e,!0);xn(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return gt(i)&&n.set(i,Eo),Eo;if(Ue(r))for(let u=0;u<r.length;u++){const f=Yo(r[u]);mm(f)&&(o[f]=mt)}else if(r)for(const u in r){const f=Yo(u);if(mm(f)){const h=r[u],p=o[f]=Ue(h)||Be(h)?{type:h}:Object.assign({},h);if(p){const g=vm(Boolean,p.type),d=vm(String,p.type);p[0]=g>-1,p[1]=d<0||g<d,(g>-1||Je(p,"default"))&&a.push(f)}}}const c=[o,a];return gt(i)&&n.set(i,c),c}function mm(i){return i[0]!=="$"}function gm(i){const e=i&&i.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:i===null?"null":""}function _m(i,e){return gm(i)===gm(e)}function vm(i,e){return Ue(e)?e.findIndex(t=>_m(t,i)):Be(e)&&_m(e,i)?0:-1}const Yv=i=>i[0]==="_"||i==="$stable",lp=i=>Ue(i)?i.map(Li):[Li(i)],aS=(i,e,t)=>{if(e._n)return e;const n=Uh((...s)=>lp(e(...s)),t);return n._c=!1,n},qv=(i,e,t)=>{const n=i._ctx;for(const s in i){if(Yv(s))continue;const r=i[s];if(Be(r))e[s]=aS(s,r,n);else if(r!=null){const o=lp(r);e[s]=()=>o}}},$v=(i,e)=>{const t=lp(e);i.slots.default=()=>t},lS=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=et(e),Qc(e,"_",t)):qv(e,i.slots={})}else i.slots={},e&&$v(i,e);Qc(i.slots,Qu,1)},cS=(i,e,t)=>{const{vnode:n,slots:s}=i;let r=!0,o=mt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(xn(s,e),!t&&a===1&&delete s._):(r=!e.$stable,qv(e,s)),o=e}else e&&($v(i,e),o={default:1});if(r)for(const a in s)!Yv(a)&&!(a in o)&&delete s[a]};function Kv(){return{app:null,config:{isNativeTag:U1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uS=0;function fS(i,e){return function(n,s=null){Be(n)||(n=Object.assign({},n)),s!=null&&!gt(s)&&(s=null);const r=Kv(),o=new Set;let a=!1;const l=r.app={_uid:uS++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:PS,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Be(c.install)?(o.add(c),c.install(l,...u)):Be(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!a){const h=Zt(n,s);return h.appContext=r,u&&e?e(h,c):i(h,c,f),a=!0,l._container=c,c.__vue_app__=l,fp(h.component)||h.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Vh(i,e,t,n,s=!1){if(Ue(i)){i.forEach((h,p)=>Vh(h,e&&(Ue(e)?e[p]:e),t,n,s));return}if(Ya(n)&&!s)return;const r=n.shapeFlag&4?fp(n.component)||n.component.proxy:n.el,o=s?null:r,{i:a,r:l}=i,c=e&&e.r,u=a.refs===mt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Nt(c)?(u[c]=null,Je(f,c)&&(f[c]=null)):Mt(c)&&(c.value=null)),Be(l))Xs(l,a,12,[o,u]);else{const h=Nt(l),p=Mt(l);if(h||p){const g=()=>{if(i.f){const d=h?Je(f,l)?f[l]:u[l]:l.value;s?Ue(d)&&Xd(d,r):Ue(d)?d.includes(r)||d.push(r):h?(u[l]=[r],Je(f,l)&&(f[l]=u[l])):(l.value=[r],i.k&&(u[i.k]=l.value))}else h?(u[l]=o,Je(f,l)&&(f[l]=o)):p&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,Xt(g,t)):g()}}}const Xt=BM;function hS(i){return dS(i)}function dS(i,e){const t=W1();t.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=mi,insertStaticContent:g}=i,d=(C,I,X,J=null,re=null,fe=null,me=!1,ce=null,_e=!!I.dynamicChildren)=>{if(C===I)return;C&&!oo(C,I)&&(J=K(C),H(C,re,fe,!0),C=null),I.patchFlag===-2&&(_e=!1,I.dynamicChildren=null);const{type:Q,ref:w,shapeFlag:S}=I;switch(Q){case zl:m(C,I,X,J);break;case hl:v(C,I,X,J);break;case Cf:C==null&&x(I,X,J,me);break;case Ri:W(C,I,X,J,re,fe,me,ce,_e);break;default:S&1?y(C,I,X,J,re,fe,me,ce,_e):S&6?U(C,I,X,J,re,fe,me,ce,_e):(S&64||S&128)&&Q.process(C,I,X,J,re,fe,me,ce,_e,de)}w!=null&&re&&Vh(w,C&&C.ref,fe,I||C,!I)},m=(C,I,X,J)=>{if(C==null)n(I.el=a(I.children),X,J);else{const re=I.el=C.el;I.children!==C.children&&c(re,I.children)}},v=(C,I,X,J)=>{C==null?n(I.el=l(I.children||""),X,J):I.el=C.el},x=(C,I,X,J)=>{[C.el,C.anchor]=g(C.children,I,X,J,C.el,C.anchor)},_=({el:C,anchor:I},X,J)=>{let re;for(;C&&C!==I;)re=h(C),n(C,X,J),C=re;n(I,X,J)},b=({el:C,anchor:I})=>{let X;for(;C&&C!==I;)X=h(C),s(C),C=X;s(I)},y=(C,I,X,J,re,fe,me,ce,_e)=>{me=me||I.type==="svg",C==null?E(I,X,J,re,fe,me,ce,_e):T(C,I,re,fe,me,ce,_e)},E=(C,I,X,J,re,fe,me,ce)=>{let _e,Q;const{type:w,props:S,shapeFlag:k,transition:q,dirs:ne}=C;if(_e=C.el=o(C.type,fe,S&&S.is,S),k&8?u(_e,C.children):k&16&&M(C.children,_e,null,J,re,fe&&w!=="foreignObject",me,ce),ne&&ar(C,null,J,"created"),A(_e,C,C.scopeId,me,J),S){for(const be in S)be!=="value"&&!Oc(be)&&r(_e,be,null,S[be],fe,C.children,J,re,Z);"value"in S&&r(_e,"value",null,S.value),(Q=S.onVnodeBeforeMount)&&$n(Q,J,C)}ne&&ar(C,null,J,"beforeMount");const he=(!re||re&&!re.pendingBranch)&&q&&!q.persisted;he&&q.beforeEnter(_e),n(_e,I,X),((Q=S&&S.onVnodeMounted)||he||ne)&&Xt(()=>{Q&&$n(Q,J,C),he&&q.enter(_e),ne&&ar(C,null,J,"mounted")},re)},A=(C,I,X,J,re)=>{if(X&&p(C,X),J)for(let fe=0;fe<J.length;fe++)p(C,J[fe]);if(re){let fe=re.subTree;if(I===fe){const me=re.vnode;A(C,me,me.scopeId,me.slotScopeIds,re.parent)}}},M=(C,I,X,J,re,fe,me,ce,_e=0)=>{for(let Q=_e;Q<C.length;Q++){const w=C[Q]=ce?Ts(C[Q]):Li(C[Q]);d(null,w,I,X,J,re,fe,me,ce)}},T=(C,I,X,J,re,fe,me)=>{const ce=I.el=C.el;let{patchFlag:_e,dynamicChildren:Q,dirs:w}=I;_e|=C.patchFlag&16;const S=C.props||mt,k=I.props||mt;let q;X&&lr(X,!1),(q=k.onVnodeBeforeUpdate)&&$n(q,X,I,C),w&&ar(I,C,X,"beforeUpdate"),X&&lr(X,!0);const ne=re&&I.type!=="foreignObject";if(Q?P(C.dynamicChildren,Q,ce,X,J,ne,fe):me||z(C,I,ce,null,X,J,ne,fe,!1),_e>0){if(_e&16)D(ce,I,S,k,X,J,re);else if(_e&2&&S.class!==k.class&&r(ce,"class",null,k.class,re),_e&4&&r(ce,"style",S.style,k.style,re),_e&8){const he=I.dynamicProps;for(let be=0;be<he.length;be++){const ye=he[be],ie=S[ye],Le=k[ye];(Le!==ie||ye==="value")&&r(ce,ye,ie,Le,re,C.children,X,J,Z)}}_e&1&&C.children!==I.children&&u(ce,I.children)}else!me&&Q==null&&D(ce,I,S,k,X,J,re);((q=k.onVnodeUpdated)||w)&&Xt(()=>{q&&$n(q,X,I,C),w&&ar(I,C,X,"updated")},J)},P=(C,I,X,J,re,fe,me)=>{for(let ce=0;ce<I.length;ce++){const _e=C[ce],Q=I[ce],w=_e.el&&(_e.type===Ri||!oo(_e,Q)||_e.shapeFlag&70)?f(_e.el):X;d(_e,Q,w,null,J,re,fe,me,!0)}},D=(C,I,X,J,re,fe,me)=>{if(X!==J){if(X!==mt)for(const ce in X)!Oc(ce)&&!(ce in J)&&r(C,ce,X[ce],null,me,I.children,re,fe,Z);for(const ce in J){if(Oc(ce))continue;const _e=J[ce],Q=X[ce];_e!==Q&&ce!=="value"&&r(C,ce,Q,_e,me,I.children,re,fe,Z)}"value"in J&&r(C,"value",X.value,J.value)}},W=(C,I,X,J,re,fe,me,ce,_e)=>{const Q=I.el=C?C.el:a(""),w=I.anchor=C?C.anchor:a("");let{patchFlag:S,dynamicChildren:k,slotScopeIds:q}=I;q&&(ce=ce?ce.concat(q):q),C==null?(n(Q,X,J),n(w,X,J),M(I.children,X,w,re,fe,me,ce,_e)):S>0&&S&64&&k&&C.dynamicChildren?(P(C.dynamicChildren,k,X,re,fe,me,ce),(I.key!=null||re&&I===re.subTree)&&Zv(C,I,!0)):z(C,I,X,w,re,fe,me,ce,_e)},U=(C,I,X,J,re,fe,me,ce,_e)=>{I.slotScopeIds=ce,C==null?I.shapeFlag&512?re.ctx.activate(I,X,J,me,_e):N(I,X,J,re,fe,me,_e):O(C,I,_e)},N=(C,I,X,J,re,fe,me)=>{const ce=C.component=SS(C,J,re);if(zv(C)&&(ce.ctx.renderer=de),wS(ce),ce.asyncDep){if(re&&re.registerDep(ce,Y),!C.el){const _e=ce.subTree=Zt(hl);v(null,_e,I,X)}return}Y(ce,C,I,X,re,fe,me)},O=(C,I,X)=>{const J=I.component=C.component;if(FM(C,I,X))if(J.asyncDep&&!J.asyncResolved){G(J,I,X);return}else J.next=I,PM(J.update),J.update();else I.el=C.el,J.vnode=I},Y=(C,I,X,J,re,fe,me)=>{const ce=()=>{if(C.isMounted){let{next:w,bu:S,u:k,parent:q,vnode:ne}=C,he=w,be;lr(C,!1),w?(w.el=ne.el,G(C,w,me)):w=ne,S&&Xa(S),(be=w.props&&w.props.onVnodeBeforeUpdate)&&$n(be,q,w,ne),lr(C,!0);const ye=wf(C),ie=C.subTree;C.subTree=ye,d(ie,ye,f(ie.el),K(ie),C,re,fe),w.el=ye.el,he===null&&kM(C,ye.el),k&&Xt(k,re),(be=w.props&&w.props.onVnodeUpdated)&&Xt(()=>$n(be,q,w,ne),re)}else{let w;const{el:S,props:k}=I,{bm:q,m:ne,parent:he}=C,be=Ya(I);if(lr(C,!1),q&&Xa(q),!be&&(w=k&&k.onVnodeBeforeMount)&&$n(w,he,I),lr(C,!0),S&&Me){const ye=()=>{C.subTree=wf(C),Me(S,C.subTree,C,re,null)};be?I.type.__asyncLoader().then(()=>!C.isUnmounted&&ye()):ye()}else{const ye=C.subTree=wf(C);d(null,ye,X,J,C,re,fe),I.el=ye.el}if(ne&&Xt(ne,re),!be&&(w=k&&k.onVnodeMounted)){const ye=I;Xt(()=>$n(w,he,ye),re)}(I.shapeFlag&256||he&&Ya(he.vnode)&&he.vnode.shapeFlag&256)&&C.a&&Xt(C.a,re),C.isMounted=!0,I=X=J=null}},_e=C.effect=new Zd(ce,()=>rp(Q),C.scope),Q=C.update=()=>_e.run();Q.id=C.uid,lr(C,!0),Q()},G=(C,I,X)=>{I.component=C;const J=C.vnode.props;C.vnode=I,C.next=null,oS(C,I.props,J,X),cS(C,I.children,X),aa(),fm(),la()},z=(C,I,X,J,re,fe,me,ce,_e=!1)=>{const Q=C&&C.children,w=C?C.shapeFlag:0,S=I.children,{patchFlag:k,shapeFlag:q}=I;if(k>0){if(k&128){ue(Q,S,X,J,re,fe,me,ce,_e);return}else if(k&256){ee(Q,S,X,J,re,fe,me,ce,_e);return}}q&8?(w&16&&Z(Q,re,fe),S!==Q&&u(X,S)):w&16?q&16?ue(Q,S,X,J,re,fe,me,ce,_e):Z(Q,re,fe,!0):(w&8&&u(X,""),q&16&&M(S,X,J,re,fe,me,ce,_e))},ee=(C,I,X,J,re,fe,me,ce,_e)=>{C=C||Eo,I=I||Eo;const Q=C.length,w=I.length,S=Math.min(Q,w);let k;for(k=0;k<S;k++){const q=I[k]=_e?Ts(I[k]):Li(I[k]);d(C[k],q,X,null,re,fe,me,ce,_e)}Q>w?Z(C,re,fe,!0,!1,S):M(I,X,J,re,fe,me,ce,_e,S)},ue=(C,I,X,J,re,fe,me,ce,_e)=>{let Q=0;const w=I.length;let S=C.length-1,k=w-1;for(;Q<=S&&Q<=k;){const q=C[Q],ne=I[Q]=_e?Ts(I[Q]):Li(I[Q]);if(oo(q,ne))d(q,ne,X,null,re,fe,me,ce,_e);else break;Q++}for(;Q<=S&&Q<=k;){const q=C[S],ne=I[k]=_e?Ts(I[k]):Li(I[k]);if(oo(q,ne))d(q,ne,X,null,re,fe,me,ce,_e);else break;S--,k--}if(Q>S){if(Q<=k){const q=k+1,ne=q<w?I[q].el:J;for(;Q<=k;)d(null,I[Q]=_e?Ts(I[Q]):Li(I[Q]),X,ne,re,fe,me,ce,_e),Q++}}else if(Q>k)for(;Q<=S;)H(C[Q],re,fe,!0),Q++;else{const q=Q,ne=Q,he=new Map;for(Q=ne;Q<=k;Q++){const Te=I[Q]=_e?Ts(I[Q]):Li(I[Q]);Te.key!=null&&he.set(Te.key,Q)}let be,ye=0;const ie=k-ne+1;let Le=!1,Ae=0;const Ie=new Array(ie);for(Q=0;Q<ie;Q++)Ie[Q]=0;for(Q=q;Q<=S;Q++){const Te=C[Q];if(ye>=ie){H(Te,re,fe,!0);continue}let Fe;if(Te.key!=null)Fe=he.get(Te.key);else for(be=ne;be<=k;be++)if(Ie[be-ne]===0&&oo(Te,I[be])){Fe=be;break}Fe===void 0?H(Te,re,fe,!0):(Ie[Fe-ne]=Q+1,Fe>=Ae?Ae=Fe:Le=!0,d(Te,I[Fe],X,null,re,fe,me,ce,_e),ye++)}const De=Le?pS(Ie):Eo;for(be=De.length-1,Q=ie-1;Q>=0;Q--){const Te=ne+Q,Fe=I[Te],ft=Te+1<w?I[Te+1].el:J;Ie[Q]===0?d(null,Fe,X,ft,re,fe,me,ce,_e):Le&&(be<0||Q!==De[be]?ve(Fe,X,ft,2):be--)}}},ve=(C,I,X,J,re=null)=>{const{el:fe,type:me,transition:ce,children:_e,shapeFlag:Q}=C;if(Q&6){ve(C.component.subTree,I,X,J);return}if(Q&128){C.suspense.move(I,X,J);return}if(Q&64){me.move(C,I,X,de);return}if(me===Ri){n(fe,I,X);for(let S=0;S<_e.length;S++)ve(_e[S],I,X,J);n(C.anchor,I,X);return}if(me===Cf){_(C,I,X);return}if(J!==2&&Q&1&&ce)if(J===0)ce.beforeEnter(fe),n(fe,I,X),Xt(()=>ce.enter(fe),re);else{const{leave:S,delayLeave:k,afterLeave:q}=ce,ne=()=>n(fe,I,X),he=()=>{S(fe,()=>{ne(),q&&q()})};k?k(fe,ne,he):he()}else n(fe,I,X)},H=(C,I,X,J=!1,re=!1)=>{const{type:fe,props:me,ref:ce,children:_e,dynamicChildren:Q,shapeFlag:w,patchFlag:S,dirs:k}=C;if(ce!=null&&Vh(ce,null,X,C,!0),w&256){I.ctx.deactivate(C);return}const q=w&1&&k,ne=!Ya(C);let he;if(ne&&(he=me&&me.onVnodeBeforeUnmount)&&$n(he,I,C),w&6)L(C.component,X,J);else{if(w&128){C.suspense.unmount(X,J);return}q&&ar(C,null,I,"beforeUnmount"),w&64?C.type.remove(C,I,X,re,de,J):Q&&(fe!==Ri||S>0&&S&64)?Z(Q,I,X,!1,!0):(fe===Ri&&S&384||!re&&w&16)&&Z(_e,I,X),J&&le(C)}(ne&&(he=me&&me.onVnodeUnmounted)||q)&&Xt(()=>{he&&$n(he,I,C),q&&ar(C,null,I,"unmounted")},X)},le=C=>{const{type:I,el:X,anchor:J,transition:re}=C;if(I===Ri){pe(X,J);return}if(I===Cf){b(C);return}const fe=()=>{s(X),re&&!re.persisted&&re.afterLeave&&re.afterLeave()};if(C.shapeFlag&1&&re&&!re.persisted){const{leave:me,delayLeave:ce}=re,_e=()=>me(X,fe);ce?ce(C.el,fe,_e):_e()}else fe()},pe=(C,I)=>{let X;for(;C!==I;)X=h(C),s(C),C=X;s(I)},L=(C,I,X)=>{const{bum:J,scope:re,update:fe,subTree:me,um:ce}=C;J&&Xa(J),re.stop(),fe&&(fe.active=!1,H(me,C,I,X)),ce&&Xt(ce,I),Xt(()=>{C.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Z=(C,I,X,J=!1,re=!1,fe=0)=>{for(let me=fe;me<C.length;me++)H(C[me],I,X,J,re)},K=C=>C.shapeFlag&6?K(C.component.subTree):C.shapeFlag&128?C.suspense.next():h(C.anchor||C.el),oe=(C,I,X)=>{C==null?I._vnode&&H(I._vnode,null,null,!0):d(I._vnode||null,C,I,null,null,null,X),fm(),Pv(),I._vnode=C},de={p:d,um:H,m:ve,r:le,mt:N,mc:M,pc:z,pbc:P,n:K,o:i};let xe,Me;return e&&([xe,Me]=e(de)),{render:oe,hydrate:xe,createApp:fS(oe,xe)}}function lr({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function Zv(i,e,t=!1){const n=i.children,s=e.children;if(Ue(n)&&Ue(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ts(s[r]),a.el=o.el),t||Zv(o,a)),a.type===zl&&(a.el=o.el)}}function pS(i){const e=i.slice(),t=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=t[t.length-1],i[s]<c){e[n]=s,t.push(n);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,i[t[a]]<c?r=a+1:o=a;c<i[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const mS=i=>i.__isTeleport,Ri=Symbol(void 0),zl=Symbol(void 0),hl=Symbol(void 0),Cf=Symbol(void 0),$a=[];let fi=null;function su(i=!1){$a.push(fi=i?null:[])}function gS(){$a.pop(),fi=$a[$a.length-1]||null}let dl=1;function xm(i){dl+=i}function Jv(i){return i.dynamicChildren=dl>0?fi||Eo:null,gS(),dl>0&&fi&&fi.push(i),i}function cp(i,e,t,n,s,r){return Jv(ts(i,e,t,n,s,r,!0))}function _S(i,e,t,n,s){return Jv(Zt(i,e,t,n,s,!0))}function ru(i){return i?i.__v_isVNode===!0:!1}function oo(i,e){return i.type===e.type&&i.key===e.key}const Qu="__vInternal",Qv=({key:i})=>i??null,Fc=({ref:i,ref_key:e,ref_for:t})=>i!=null?Nt(i)||Mt(i)||Be(i)?{i:ui,r:i,k:e,f:!!t}:i:null;function ts(i,e=null,t=null,n=0,s=null,r=i===Ri?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Qv(e),ref:e&&Fc(e),scopeId:Nv,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ui};return a?(up(l,t),r&128&&i.normalize(l)):t&&(l.shapeFlag|=Nt(t)?8:16),dl>0&&!o&&fi&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&fi.push(l),l}const Zt=vS;function vS(i,e=null,t=null,n=0,s=null,r=!1){if((!i||i===JM)&&(i=hl),ru(i)){const a=Nr(i,e,!0);return t&&up(a,t),dl>0&&!r&&fi&&(a.shapeFlag&6?fi[fi.indexOf(i)]=a:fi.push(a)),a.patchFlag|=-2,a}if(CS(i)&&(i=i.__vccOpts),e){e=xS(e);let{class:a,style:l}=e;a&&!Nt(a)&&(e.class=Wd(a)),gt(l)&&(Sv(l)&&!Ue(l)&&(l=xn({},l)),e.style=Hd(l))}const o=Nt(i)?1:Ov(i)?128:mS(i)?64:gt(i)?4:Be(i)?2:0;return ts(i,e,t,n,s,o,r,!0)}function xS(i){return i?Sv(i)||Qu in i?xn({},i):i:null}function Nr(i,e,t=!1){const{props:n,ref:s,patchFlag:r,children:o}=i,a=e?bS(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Qv(a),ref:e&&e.ref?t&&s?Ue(s)?s.concat(Fc(e)):[s,Fc(e)]:Fc(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Ri?r===-1?16:r|16:r,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Nr(i.ssContent),ssFallback:i.ssFallback&&Nr(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function Gh(i=" ",e=0){return Zt(zl,null,i,e)}function Li(i){return i==null||typeof i=="boolean"?Zt(hl):Ue(i)?Zt(Ri,null,i.slice()):typeof i=="object"?Ts(i):Zt(zl,null,String(i))}function Ts(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Nr(i)}function up(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Ue(e))t=16;else if(typeof e=="object")if(n&65){const s=e.default;s&&(s._c&&(s._d=!1),up(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(Qu in e)?e._ctx=ui:s===3&&ui&&(ui.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Be(e)?(e={default:e,_ctx:ui},t=32):(e=String(e),n&64?(t=16,e=[Gh(e)]):t=8);i.children=e,i.shapeFlag|=t}function bS(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=Wd([e.class,n.class]));else if(s==="style")e.style=Hd([e.style,n.style]);else if(Xu(s)){const r=e[s],o=n[s];o&&r!==o&&!(Ue(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=n[s])}return e}function $n(i,e,t,n=null){gi(i,e,7,[t,n])}const yS=Kv();let MS=0;function SS(i,e,t){const n=i.type,s=(e?e.appContext:i.appContext)||yS,r={uid:MS++,vnode:i,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new uv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xv(n,s),emitsOptions:Dv(n,s),emit:null,emitted:null,propsDefaults:mt,inheritAttrs:n.inheritAttrs,ctx:mt,data:mt,props:mt,attrs:mt,slots:mt,refs:mt,setupState:mt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=NM.bind(null,r),i.ce&&i.ce(r),r}let It=null;const Vl=()=>It||ui,Ko=i=>{It=i,i.scope.on()},Pr=()=>{It&&It.scope.off(),It=null};function ex(i){return i.vnode.shapeFlag&4}let pl=!1;function wS(i,e=!1){pl=e;const{props:t,children:n}=i.vnode,s=ex(i);rS(i,t,s,e),lS(i,n);const r=s?TS(i,e):void 0;return pl=!1,r}function TS(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=$o(new Proxy(i.ctx,QM));const{setup:n}=t;if(n){const s=i.setupContext=n.length>1?AS(i):null;Ko(i),aa();const r=Xs(n,i,0,[i.props,s]);if(la(),Pr(),ov(r)){if(r.then(Pr,Pr),e)return r.then(o=>{bm(i,o,e)}).catch(o=>{$u(o,i,0)});i.asyncDep=r}else bm(i,r,e)}else tx(i,e)}function bm(i,e,t){Be(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:gt(e)&&(i.setupState=Av(e)),tx(i,t)}let ym;function tx(i,e,t){const n=i.type;if(!i.render){if(!e&&ym&&!n.render){const s=n.template||ap(i).template;if(s){const{isCustomElement:r,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=xn(xn({isCustomElement:r,delimiters:a},o),l);n.render=ym(s,c)}}i.render=n.render||mi}Ko(i),aa(),eS(i),la(),Pr()}function ES(i){return new Proxy(i.attrs,{get(e,t){return Cn(i,"get","$attrs"),e[t]}})}function AS(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=ES(i))},slots:i.slots,emit:i.emit,expose:e}}function fp(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(Av($o(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in qa)return qa[t](i)},has(e,t){return t in e||t in qa}}))}function Mm(i,e=!0){return Be(i)?i.displayName||i.name:i.name||e&&i.__name}function CS(i){return Be(i)&&"__vccOpts"in i}const Ht=(i,e)=>CM(i,e,pl);function ef(i,e,t){const n=arguments.length;return n===2?gt(e)&&!Ue(e)?ru(e)?Zt(i,null,[e]):Zt(i,e):Zt(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&ru(t)&&(t=[t]),Zt(i,e,t))}const RS=Symbol(""),LS=()=>_i(RS),PS="3.2.47",IS="http://www.w3.org/2000/svg",_r=typeof document<"u"?document:null,Sm=_r&&_r.createElement("template"),DS={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const s=e?_r.createElementNS(IS,i):_r.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>_r.createTextNode(i),createComment:i=>_r.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>_r.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Sm.innerHTML=n?`<svg>${i}</svg>`:i;const a=Sm.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function NS(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function OS(i,e,t){const n=i.style,s=Nt(t);if(t&&!s){if(e&&!Nt(e))for(const r in e)t[r]==null&&Hh(n,r,"");for(const r in t)Hh(n,r,t[r])}else{const r=n.display;s?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=r)}}const wm=/\s*!important$/;function Hh(i,e,t){if(Ue(t))t.forEach(n=>Hh(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=US(i,e);wm.test(t)?i.setProperty(oa(n),t.replace(wm,""),"important"):i[n]=t}}const Tm=["Webkit","Moz","ms"],Rf={};function US(i,e){const t=Rf[e];if(t)return t;let n=Yo(e);if(n!=="filter"&&n in i)return Rf[e]=n;n=cv(n);for(let s=0;s<Tm.length;s++){const r=Tm[s]+n;if(r in i)return Rf[e]=r}return e}const Em="http://www.w3.org/1999/xlink";function FS(i,e,t,n,s){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Em,e.slice(6,e.length)):i.setAttributeNS(Em,e,t);else{const r=O1(e);t==null||r&&!iv(t)?i.removeAttribute(e):i.setAttribute(e,r?"":t)}}function kS(i,e,t,n,s,r,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,s,r),i[e]=t??"";return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t??"";(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=iv(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}function BS(i,e,t,n){i.addEventListener(e,t,n)}function zS(i,e,t,n){i.removeEventListener(e,t,n)}function VS(i,e,t,n,s=null){const r=i._vei||(i._vei={}),o=r[e];if(n&&o)o.value=n;else{const[a,l]=GS(e);if(n){const c=r[e]=jS(n,s);BS(i,a,c,l)}else o&&(zS(i,a,o,l),r[e]=void 0)}}const Am=/(?:Once|Passive|Capture)$/;function GS(i){let e;if(Am.test(i)){e={};let n;for(;n=i.match(Am);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):oa(i.slice(2)),e]}let Lf=0;const HS=Promise.resolve(),WS=()=>Lf||(HS.then(()=>Lf=0),Lf=Date.now());function jS(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;gi(XS(n,t.value),e,5,[n])};return t.value=i,t.attached=WS(),t}function XS(i,e){if(Ue(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const Cm=/^on[a-z]/,YS=(i,e,t,n,s=!1,r,o,a,l)=>{e==="class"?NS(i,n,s):e==="style"?OS(i,t,n):Xu(e)?jd(e)||VS(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qS(i,e,n,s))?kS(i,e,n,r,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),FS(i,e,n,s))};function qS(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&Cm.test(e)&&Be(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||Cm.test(e)&&Nt(t)?!1:e in i}const $S=xn({patchProp:YS},DS);let Rm;function KS(){return Rm||(Rm=hS($S))}const ZS=(...i)=>{const e=KS().createApp(...i),{mount:t}=e;return e.mount=n=>{const s=JS(n);if(!s)return;const r=e._component;!Be(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function JS(i){return Nt(i)?document.querySelector(i):i}var QS=!1;/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let nx;const tf=i=>nx=i,ix=Symbol();function Wh(i){return i&&typeof i=="object"&&Object.prototype.toString.call(i)==="[object Object]"&&typeof i.toJSON!="function"}var Ka;(function(i){i.direct="direct",i.patchObject="patch object",i.patchFunction="patch function"})(Ka||(Ka={}));function ew(){const i=$d(!0),e=i.run(()=>Ni({}));let t=[],n=[];const s=$o({install(r){tf(s),s._a=r,r.provide(ix,s),r.config.globalProperties.$pinia=s,n.forEach(o=>t.push(o)),n=[]},use(r){return!this._a&&!QS?n.push(r):t.push(r),this},_p:t,_a:null,_e:i,_s:new Map,state:e});return s}const sx=()=>{};function Lm(i,e,t,n=sx){i.push(e);const s=()=>{const r=i.indexOf(e);r>-1&&(i.splice(r,1),n())};return!t&&fv()&&X1(s),s}function Hr(i,...e){i.slice().forEach(t=>{t(...e)})}function jh(i,e){i instanceof Map&&e instanceof Map&&e.forEach((t,n)=>i.set(n,t)),i instanceof Set&&e instanceof Set&&e.forEach(i.add,i);for(const t in e){if(!e.hasOwnProperty(t))continue;const n=e[t],s=i[t];Wh(s)&&Wh(n)&&i.hasOwnProperty(t)&&!Mt(n)&&!js(n)?i[t]=jh(s,n):i[t]=n}return i}const tw=Symbol();function nw(i){return!Wh(i)||!i.hasOwnProperty(tw)}const{assign:ws}=Object;function iw(i){return!!(Mt(i)&&i.effect)}function sw(i,e,t,n){const{state:s,actions:r,getters:o}=e,a=t.state.value[i];let l;function c(){a||(t.state.value[i]=s?s():{});const u=wM(t.state.value[i]);return ws(u,r,Object.keys(o||{}).reduce((f,h)=>(f[h]=$o(Ht(()=>{tf(t);const p=t._s.get(i);return o[h].call(p,p)})),f),{}))}return l=rx(i,c,e,t,n,!0),l}function rx(i,e,t={},n,s,r){let o;const a=ws({actions:{}},t),l={deep:!0};let c,u,f=$o([]),h=$o([]),p;const g=n.state.value[i];!r&&!g&&(n.state.value[i]={}),Ni({});let d;function m(A){let M;c=u=!1,typeof A=="function"?(A(n.state.value[i]),M={type:Ka.patchFunction,storeId:i,events:p}):(jh(n.state.value[i],A),M={type:Ka.patchObject,payload:A,storeId:i,events:p});const T=d=Symbol();sp().then(()=>{d===T&&(c=!0)}),u=!0,Hr(f,M,n.state.value[i])}const v=r?function(){const{state:M}=t,T=M?M():{};this.$patch(P=>{ws(P,T)})}:sx;function x(){o.stop(),f=[],h=[],n._s.delete(i)}function _(A,M){return function(){tf(n);const T=Array.from(arguments),P=[],D=[];function W(O){P.push(O)}function U(O){D.push(O)}Hr(h,{args:T,name:A,store:y,after:W,onError:U});let N;try{N=M.apply(this&&this.$id===i?this:y,T)}catch(O){throw Hr(D,O),O}return N instanceof Promise?N.then(O=>(Hr(P,O),O)).catch(O=>(Hr(D,O),Promise.reject(O))):(Hr(P,N),N)}}const b={_p:n,$id:i,$onAction:Lm.bind(null,h),$patch:m,$reset:v,$subscribe(A,M={}){const T=Lm(f,A,M.detached,()=>P()),P=o.run(()=>os(()=>n.state.value[i],D=>{(M.flush==="sync"?u:c)&&A({storeId:i,type:Ka.direct,events:p},D)},ws({},l,M)));return T},$dispose:x},y=ca(b);n._s.set(i,y);const E=n._e.run(()=>(o=$d(),o.run(()=>e())));for(const A in E){const M=E[A];if(Mt(M)&&!iw(M)||js(M))r||(g&&nw(M)&&(Mt(M)?M.value=g[A]:jh(M,g[A])),n.state.value[i][A]=M);else if(typeof M=="function"){const T=_(A,M);E[A]=T,a.actions[A]=M}}return ws(y,E),ws(et(y),E),Object.defineProperty(y,"$state",{get:()=>n.state.value[i],set:A=>{m(M=>{ws(M,A)})}}),n._p.forEach(A=>{ws(y,o.run(()=>A({store:y,app:n._a,pinia:n,options:a})))}),g&&r&&t.hydrate&&t.hydrate(y.$state,g),c=!0,u=!0,y}function rw(i,e,t){let n,s;const r=typeof e=="function";typeof i=="string"?(n=i,s=r?t:e):(s=i,n=i.id);function o(a,l){const c=Vl();return a=a||c&&_i(ix,null),a&&tf(a),a=nx,a._s.has(n)||(r?rx(n,e,s,a):sw(n,s,a)),a._s.get(n)}return o.$id=n,o}/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Xh=typeof window<"u",ow=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",er=i=>ow?Symbol(i):i,aw=(i,e,t)=>lw({l:i,k:e,s:t}),lw=i=>JSON.stringify(i).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Wt=i=>typeof i=="number"&&isFinite(i),cw=i=>pp(i)==="[object Date]",ou=i=>pp(i)==="[object RegExp]",nf=i=>Qe(i)&&Object.keys(i).length===0;function uw(i,e){typeof console<"u"&&(console.warn("[intlify] "+i),e&&console.warn(e.stack))}const _n=Object.assign;let Pm;const hp=()=>Pm||(Pm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Im(i){return i.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const fw=Object.prototype.hasOwnProperty;function dp(i,e){return fw.call(i,e)}const Dt=Array.isArray,qt=i=>typeof i=="function",Ce=i=>typeof i=="string",Et=i=>typeof i=="boolean",ht=i=>i!==null&&typeof i=="object",ox=Object.prototype.toString,pp=i=>ox.call(i),Qe=i=>pp(i)==="[object Object]",hw=i=>i==null?"":Dt(i)||Qe(i)&&i.toString===ox?JSON.stringify(i,null,2):String(i);/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const ax={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,__EXTEND_POINT__:15};function lx(i,e,t={}){const{domain:n,messages:s,args:r}=t,o=i,a=new SyntaxError(String(o));return a.code=i,e&&(a.location=e),a.domain=n,a}/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const cx={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const tr=[];tr[0]={w:[0],i:[3,0],["["]:[4],o:[7]};tr[1]={w:[1],["."]:[2],["["]:[4],o:[7]};tr[2]={w:[2],i:[3,0],[0]:[3,0]};tr[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};tr[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};tr[5]={["'"]:[4,0],o:8,l:[5,0]};tr[6]={['"']:[4,0],o:8,l:[6,0]};const dw=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function pw(i){return dw.test(i)}function mw(i){const e=i.charCodeAt(0),t=i.charCodeAt(i.length-1);return e===t&&(e===34||e===39)?i.slice(1,-1):i}function gw(i){if(i==null)return"o";switch(i.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return i;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function _w(i){const e=i.trim();return i.charAt(0)==="0"&&isNaN(parseInt(i))?!1:pw(e)?mw(e):"*"+e}function vw(i){const e=[];let t=-1,n=0,s=0,r,o,a,l,c,u,f;const h=[];h[0]=()=>{o===void 0?o=a:o+=a},h[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},h[2]=()=>{h[0](),s++},h[3]=()=>{if(s>0)s--,n=4,h[0]();else{if(s=0,o===void 0||(o=_w(o),o===!1))return!1;h[1]()}};function p(){const g=i[t+1];if(n===5&&g==="'"||n===6&&g==='"')return t++,a="\\"+g,h[0](),!0}for(;n!==null;)if(t++,r=i[t],!(r==="\\"&&p())){if(l=gw(r),f=tr[n],c=f[l]||f.l||8,c===8||(n=c[0],c[1]!==void 0&&(u=h[c[1]],u&&(a=r,u()===!1))))return;if(n===7)return e}}const Dm=new Map;function xw(i,e){return ht(i)?i[e]:null}function bw(i,e){if(!ht(i))return null;let t=Dm.get(e);if(t||(t=vw(e),t&&Dm.set(e,t)),!t)return null;const n=t.length;let s=i,r=0;for(;r<n;){const o=s[t[r]];if(o===void 0)return null;s=o,r++}return s}const yw=i=>i,Mw=i=>"",Sw="text",ww=i=>i.length===0?"":i.join(""),Tw=hw;function Nm(i,e){return i=Math.abs(i),e===2?i?i>1?1:0:1:i?Math.min(i,2):0}function Ew(i){const e=Wt(i.pluralIndex)?i.pluralIndex:-1;return i.named&&(Wt(i.named.count)||Wt(i.named.n))?Wt(i.named.count)?i.named.count:Wt(i.named.n)?i.named.n:e:e}function Aw(i,e){e.count||(e.count=i),e.n||(e.n=i)}function Cw(i={}){const e=i.locale,t=Ew(i),n=ht(i.pluralRules)&&Ce(e)&&qt(i.pluralRules[e])?i.pluralRules[e]:Nm,s=ht(i.pluralRules)&&Ce(e)&&qt(i.pluralRules[e])?Nm:void 0,r=v=>v[n(t,v.length,s)],o=i.list||[],a=v=>o[v],l=i.named||{};Wt(i.pluralIndex)&&Aw(t,l);const c=v=>l[v];function u(v){const x=qt(i.messages)?i.messages(v):ht(i.messages)?i.messages[v]:!1;return x||(i.parent?i.parent.message(v):Mw)}const f=v=>i.modifiers?i.modifiers[v]:yw,h=Qe(i.processor)&&qt(i.processor.normalize)?i.processor.normalize:ww,p=Qe(i.processor)&&qt(i.processor.interpolate)?i.processor.interpolate:Tw,g=Qe(i.processor)&&Ce(i.processor.type)?i.processor.type:Sw,m={list:a,named:c,plural:r,linked:(v,...x)=>{const[_,b]=x;let y="text",E="";x.length===1?ht(_)?(E=_.modifier||E,y=_.type||y):Ce(_)&&(E=_||E):x.length===2&&(Ce(_)&&(E=_||E),Ce(b)&&(y=b||y));let A=u(v)(m);return y==="vnode"&&Dt(A)&&E&&(A=A[0]),E?f(E)(A,y):A},message:u,type:g,interpolate:p,normalize:h};return m}let ml=null;function Rw(i){ml=i}function Lw(i,e,t){ml&&ml.emit(cx.I18nInit,{timestamp:Date.now(),i18n:i,version:e,meta:t})}const Pw=Iw(cx.FunctionTranslate);function Iw(i){return e=>ml&&ml.emit(i,e)}function Dw(i,e,t){return[...new Set([t,...Dt(e)?e:ht(e)?Object.keys(e):Ce(e)?[e]:[t]])]}function ux(i,e,t){const n=Ce(t)?t:mp,s=i;s.__localeChainCache||(s.__localeChainCache=new Map);let r=s.__localeChainCache.get(n);if(!r){r=[];let o=[t];for(;Dt(o);)o=Om(r,o,e);const a=Dt(e)||!Qe(e)?e:e.default?e.default:null;o=Ce(a)?[a]:a,Dt(o)&&Om(r,o,!1),s.__localeChainCache.set(n,r)}return r}function Om(i,e,t){let n=!0;for(let s=0;s<e.length&&Et(n);s++){const r=e[s];Ce(r)&&(n=Nw(i,e[s],t))}return n}function Nw(i,e,t){let n;const s=e.split("-");do{const r=s.join("-");n=Ow(i,r,t),s.splice(-1,1)}while(s.length&&n===!0);return n}function Ow(i,e,t){let n=!1;if(!i.includes(e)&&(n=!0,e)){n=e[e.length-1]!=="!";const s=e.replace(/!/g,"");i.push(s),(Dt(t)||Qe(t))&&t[s]&&(n=t[s])}return n}const Uw="9.2.2",sf=-1,mp="en-US",Um="",Fm=i=>`${i.charAt(0).toLocaleUpperCase()}${i.substr(1)}`;function Fw(){return{upper:(i,e)=>e==="text"&&Ce(i)?i.toUpperCase():e==="vnode"&&ht(i)&&"__v_isVNode"in i?i.children.toUpperCase():i,lower:(i,e)=>e==="text"&&Ce(i)?i.toLowerCase():e==="vnode"&&ht(i)&&"__v_isVNode"in i?i.children.toLowerCase():i,capitalize:(i,e)=>e==="text"&&Ce(i)?Fm(i):e==="vnode"&&ht(i)&&"__v_isVNode"in i?Fm(i.children):i}}let kw,fx;function Bw(i){fx=i}let hx;function zw(i){hx=i}let dx=null;const km=i=>{dx=i},Vw=()=>dx;let px=null;const Bm=i=>{px=i},Gw=()=>px;let zm=0;function Hw(i={}){const e=Ce(i.version)?i.version:Uw,t=Ce(i.locale)?i.locale:mp,n=Dt(i.fallbackLocale)||Qe(i.fallbackLocale)||Ce(i.fallbackLocale)||i.fallbackLocale===!1?i.fallbackLocale:t,s=Qe(i.messages)?i.messages:{[t]:{}},r=Qe(i.datetimeFormats)?i.datetimeFormats:{[t]:{}},o=Qe(i.numberFormats)?i.numberFormats:{[t]:{}},a=_n({},i.modifiers||{},Fw()),l=i.pluralRules||{},c=qt(i.missing)?i.missing:null,u=Et(i.missingWarn)||ou(i.missingWarn)?i.missingWarn:!0,f=Et(i.fallbackWarn)||ou(i.fallbackWarn)?i.fallbackWarn:!0,h=!!i.fallbackFormat,p=!!i.unresolving,g=qt(i.postTranslation)?i.postTranslation:null,d=Qe(i.processor)?i.processor:null,m=Et(i.warnHtmlMessage)?i.warnHtmlMessage:!0,v=!!i.escapeParameter,x=qt(i.messageCompiler)?i.messageCompiler:kw,_=qt(i.messageResolver)?i.messageResolver:fx||xw,b=qt(i.localeFallbacker)?i.localeFallbacker:hx||Dw,y=ht(i.fallbackContext)?i.fallbackContext:void 0,E=qt(i.onWarn)?i.onWarn:uw,A=i,M=ht(A.__datetimeFormatters)?A.__datetimeFormatters:new Map,T=ht(A.__numberFormatters)?A.__numberFormatters:new Map,P=ht(A.__meta)?A.__meta:{};zm++;const D={version:e,cid:zm,locale:t,fallbackLocale:n,messages:s,modifiers:a,pluralRules:l,missing:c,missingWarn:u,fallbackWarn:f,fallbackFormat:h,unresolving:p,postTranslation:g,processor:d,warnHtmlMessage:m,escapeParameter:v,messageCompiler:x,messageResolver:_,localeFallbacker:b,fallbackContext:y,onWarn:E,__meta:P};return D.datetimeFormats=r,D.numberFormats=o,D.__datetimeFormatters=M,D.__numberFormatters=T,__INTLIFY_PROD_DEVTOOLS__&&Lw(D,e,P),D}function gp(i,e,t,n,s){const{missing:r,onWarn:o}=i;if(r!==null){const a=r(i,t,e,s);return Ce(a)?a:e}else return e}function ba(i,e,t){const n=i;n.__localeChainCache=new Map,i.localeFallbacker(i,t,e)}let mx=ax.__EXTEND_POINT__;const Pf=()=>++mx,mo={INVALID_ARGUMENT:mx,INVALID_DATE_ARGUMENT:Pf(),INVALID_ISO_DATE_ARGUMENT:Pf(),__EXTEND_POINT__:Pf()};function go(i){return lx(i,null,void 0)}const Vm=()=>"",Pi=i=>qt(i);function Gm(i,...e){const{fallbackFormat:t,postTranslation:n,unresolving:s,messageCompiler:r,fallbackLocale:o,messages:a}=i,[l,c]=Yh(...e),u=Et(c.missingWarn)?c.missingWarn:i.missingWarn,f=Et(c.fallbackWarn)?c.fallbackWarn:i.fallbackWarn,h=Et(c.escapeParameter)?c.escapeParameter:i.escapeParameter,p=!!c.resolvedMessage,g=Ce(c.default)||Et(c.default)?Et(c.default)?r?l:()=>l:c.default:t?r?l:()=>l:"",d=t||g!=="",m=Ce(c.locale)?c.locale:i.locale;h&&Ww(c);let[v,x,_]=p?[l,m,a[m]||{}]:gx(i,l,m,o,f,u),b=v,y=l;if(!p&&!(Ce(b)||Pi(b))&&d&&(b=g,y=b),!p&&(!(Ce(b)||Pi(b))||!Ce(x)))return s?sf:l;let E=!1;const A=()=>{E=!0},M=Pi(b)?b:_x(i,l,x,b,y,A);if(E)return b;const T=Yw(i,x,_,c),P=Cw(T),D=jw(i,M,P),W=n?n(D,l):D;if(__INTLIFY_PROD_DEVTOOLS__){const U={timestamp:Date.now(),key:Ce(l)?l:Pi(b)?b.key:"",locale:x||(Pi(b)?b.locale:""),format:Ce(b)?b:Pi(b)?b.source:"",message:W};U.meta=_n({},i.__meta,Vw()||{}),Pw(U)}return W}function Ww(i){Dt(i.list)?i.list=i.list.map(e=>Ce(e)?Im(e):e):ht(i.named)&&Object.keys(i.named).forEach(e=>{Ce(i.named[e])&&(i.named[e]=Im(i.named[e]))})}function gx(i,e,t,n,s,r){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=i,u=c(i,n,t);let f={},h,p=null;const g="translate";for(let d=0;d<u.length&&(h=u[d],f=o[h]||{},(p=l(f,e))===null&&(p=f[e]),!(Ce(p)||qt(p)));d++){const m=gp(i,e,h,r,g);m!==e&&(p=m)}return[p,h,f]}function _x(i,e,t,n,s,r){const{messageCompiler:o,warnHtmlMessage:a}=i;if(Pi(n)){const c=n;return c.locale=c.locale||t,c.key=c.key||e,c}if(o==null){const c=()=>n;return c.locale=t,c.key=e,c}const l=o(n,Xw(i,t,s,n,a,r));return l.locale=t,l.key=e,l.source=n,l}function jw(i,e,t){return e(t)}function Yh(...i){const[e,t,n]=i,s={};if(!Ce(e)&&!Wt(e)&&!Pi(e))throw go(mo.INVALID_ARGUMENT);const r=Wt(e)?String(e):(Pi(e),e);return Wt(t)?s.plural=t:Ce(t)?s.default=t:Qe(t)&&!nf(t)?s.named=t:Dt(t)&&(s.list=t),Wt(n)?s.plural=n:Ce(n)?s.default=n:Qe(n)&&_n(s,n),[r,s]}function Xw(i,e,t,n,s,r){return{warnHtmlMessage:s,onError:o=>{throw r&&r(o),o},onCacheKey:o=>aw(e,t,o)}}function Yw(i,e,t,n){const{modifiers:s,pluralRules:r,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=i,h={locale:e,modifiers:s,pluralRules:r,messages:p=>{let g=o(t,p);if(g==null&&u){const[,,d]=gx(u,p,e,a,l,c);g=o(d,p)}if(Ce(g)){let d=!1;const v=_x(i,p,e,g,p,()=>{d=!0});return d?Vm:v}else return Pi(g)?g:Vm}};return i.processor&&(h.processor=i.processor),n.list&&(h.list=n.list),n.named&&(h.named=n.named),Wt(n.plural)&&(h.pluralIndex=n.plural),h}function Hm(i,...e){const{datetimeFormats:t,unresolving:n,fallbackLocale:s,onWarn:r,localeFallbacker:o}=i,{__datetimeFormatters:a}=i,[l,c,u,f]=qh(...e),h=Et(u.missingWarn)?u.missingWarn:i.missingWarn;Et(u.fallbackWarn)?u.fallbackWarn:i.fallbackWarn;const p=!!u.part,g=Ce(u.locale)?u.locale:i.locale,d=o(i,s,g);if(!Ce(l)||l==="")return new Intl.DateTimeFormat(g,f).format(c);let m={},v,x=null;const _="datetime format";for(let E=0;E<d.length&&(v=d[E],m=t[v]||{},x=m[l],!Qe(x));E++)gp(i,l,v,h,_);if(!Qe(x)||!Ce(v))return n?sf:l;let b=`${v}__${l}`;nf(f)||(b=`${b}__${JSON.stringify(f)}`);let y=a.get(b);return y||(y=new Intl.DateTimeFormat(v,_n({},x,f)),a.set(b,y)),p?y.formatToParts(c):y.format(c)}const vx=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function qh(...i){const[e,t,n,s]=i,r={};let o={},a;if(Ce(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw go(mo.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw go(mo.INVALID_ISO_DATE_ARGUMENT)}}else if(cw(e)){if(isNaN(e.getTime()))throw go(mo.INVALID_DATE_ARGUMENT);a=e}else if(Wt(e))a=e;else throw go(mo.INVALID_ARGUMENT);return Ce(t)?r.key=t:Qe(t)&&Object.keys(t).forEach(l=>{vx.includes(l)?o[l]=t[l]:r[l]=t[l]}),Ce(n)?r.locale=n:Qe(n)&&(o=n),Qe(s)&&(o=s),[r.key||"",a,r,o]}function Wm(i,e,t){const n=i;for(const s in t){const r=`${e}__${s}`;n.__datetimeFormatters.has(r)&&n.__datetimeFormatters.delete(r)}}function jm(i,...e){const{numberFormats:t,unresolving:n,fallbackLocale:s,onWarn:r,localeFallbacker:o}=i,{__numberFormatters:a}=i,[l,c,u,f]=$h(...e),h=Et(u.missingWarn)?u.missingWarn:i.missingWarn;Et(u.fallbackWarn)?u.fallbackWarn:i.fallbackWarn;const p=!!u.part,g=Ce(u.locale)?u.locale:i.locale,d=o(i,s,g);if(!Ce(l)||l==="")return new Intl.NumberFormat(g,f).format(c);let m={},v,x=null;const _="number format";for(let E=0;E<d.length&&(v=d[E],m=t[v]||{},x=m[l],!Qe(x));E++)gp(i,l,v,h,_);if(!Qe(x)||!Ce(v))return n?sf:l;let b=`${v}__${l}`;nf(f)||(b=`${b}__${JSON.stringify(f)}`);let y=a.get(b);return y||(y=new Intl.NumberFormat(v,_n({},x,f)),a.set(b,y)),p?y.formatToParts(c):y.format(c)}const xx=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function $h(...i){const[e,t,n,s]=i,r={};let o={};if(!Wt(e))throw go(mo.INVALID_ARGUMENT);const a=e;return Ce(t)?r.key=t:Qe(t)&&Object.keys(t).forEach(l=>{xx.includes(l)?o[l]=t[l]:r[l]=t[l]}),Ce(n)?r.locale=n:Qe(n)&&(o=n),Qe(s)&&(o=s),[r.key||"",a,r,o]}function Xm(i,e,t){const n=i;for(const s in t){const r=`${e}__${s}`;n.__numberFormatters.has(r)&&n.__numberFormatters.delete(r)}}typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(hp().__INTLIFY_PROD_DEVTOOLS__=!1);/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const qw="9.2.2";function $w(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(hp().__INTLIFY_PROD_DEVTOOLS__=!1)}let bx=ax.__EXTEND_POINT__;const bn=()=>++bx,Hn={UNEXPECTED_RETURN_TYPE:bx,INVALID_ARGUMENT:bn(),MUST_BE_CALL_SETUP_TOP:bn(),NOT_INSLALLED:bn(),NOT_AVAILABLE_IN_LEGACY_MODE:bn(),REQUIRED_VALUE:bn(),INVALID_VALUE:bn(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:bn(),NOT_INSLALLED_WITH_PROVIDE:bn(),UNEXPECTED_ERROR:bn(),NOT_COMPATIBLE_LEGACY_VUE_I18N:bn(),BRIDGE_SUPPORT_VUE_2_ONLY:bn(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:bn(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:bn(),__EXTEND_POINT__:bn()};function ii(i,...e){return lx(i,null,void 0)}const Kh=er("__transrateVNode"),Zh=er("__datetimeParts"),Jh=er("__numberParts"),Kw=er("__setPluralRules");er("__intlifyMeta");const Zw=er("__injectWithOption");function Qh(i){if(!ht(i))return i;for(const e in i)if(dp(i,e))if(!e.includes("."))ht(i[e])&&Qh(i[e]);else{const t=e.split("."),n=t.length-1;let s=i;for(let r=0;r<n;r++)t[r]in s||(s[t[r]]={}),s=s[t[r]];s[t[n]]=i[e],delete i[e],ht(s[t[n]])&&Qh(s[t[n]])}return i}function yx(i,e){const{messages:t,__i18n:n,messageResolver:s,flatJson:r}=e,o=Qe(t)?t:Dt(n)?{}:{[i]:{}};if(Dt(n)&&n.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(o[l]=o[l]||{},Za(c,o[l])):Za(c,o)}else Ce(a)&&Za(JSON.parse(a),o)}),s==null&&r)for(const a in o)dp(o,a)&&Qh(o[a]);return o}const ic=i=>!ht(i)||Dt(i);function Za(i,e){if(ic(i)||ic(e))throw ii(Hn.INVALID_VALUE);for(const t in i)dp(i,t)&&(ic(i[t])||ic(e[t])?e[t]=i[t]:Za(i[t],e[t]))}function Mx(i){return i.type}function Jw(i,e,t){let n=ht(e.messages)?e.messages:{};"__i18nGlobal"in t&&(n=yx(i.locale.value,{messages:n,__i18n:t.__i18nGlobal}));const s=Object.keys(n);s.length&&s.forEach(r=>{i.mergeLocaleMessage(r,n[r])});{if(ht(e.datetimeFormats)){const r=Object.keys(e.datetimeFormats);r.length&&r.forEach(o=>{i.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(ht(e.numberFormats)){const r=Object.keys(e.numberFormats);r.length&&r.forEach(o=>{i.mergeNumberFormat(o,e.numberFormats[o])})}}}function Ym(i){return Zt(zl,null,i,0)}const qm="__INTLIFY_META__";let $m=0;function Km(i){return(e,t,n,s)=>i(t,n,Vl()||void 0,s)}const Qw=()=>{const i=Vl();let e=null;return i&&(e=Mx(i)[qm])?{[qm]:e}:null};function Sx(i={},e){const{__root:t}=i,n=t===void 0;let s=Et(i.inheritLocale)?i.inheritLocale:!0;const r=Ni(t&&s?t.locale.value:Ce(i.locale)?i.locale:mp),o=Ni(t&&s?t.fallbackLocale.value:Ce(i.fallbackLocale)||Dt(i.fallbackLocale)||Qe(i.fallbackLocale)||i.fallbackLocale===!1?i.fallbackLocale:r.value),a=Ni(yx(r.value,i)),l=Ni(Qe(i.datetimeFormats)?i.datetimeFormats:{[r.value]:{}}),c=Ni(Qe(i.numberFormats)?i.numberFormats:{[r.value]:{}});let u=t?t.missingWarn:Et(i.missingWarn)||ou(i.missingWarn)?i.missingWarn:!0,f=t?t.fallbackWarn:Et(i.fallbackWarn)||ou(i.fallbackWarn)?i.fallbackWarn:!0,h=t?t.fallbackRoot:Et(i.fallbackRoot)?i.fallbackRoot:!0,p=!!i.fallbackFormat,g=qt(i.missing)?i.missing:null,d=qt(i.missing)?Km(i.missing):null,m=qt(i.postTranslation)?i.postTranslation:null,v=t?t.warnHtmlMessage:Et(i.warnHtmlMessage)?i.warnHtmlMessage:!0,x=!!i.escapeParameter;const _=t?t.modifiers:Qe(i.modifiers)?i.modifiers:{};let b=i.pluralRules||t&&t.pluralRules,y;y=(()=>{n&&Bm(null);const w={version:qw,locale:r.value,fallbackLocale:o.value,messages:a.value,modifiers:_,pluralRules:b,missing:d===null?void 0:d,missingWarn:u,fallbackWarn:f,fallbackFormat:p,unresolving:!0,postTranslation:m===null?void 0:m,warnHtmlMessage:v,escapeParameter:x,messageResolver:i.messageResolver,__meta:{framework:"vue"}};w.datetimeFormats=l.value,w.numberFormats=c.value,w.__datetimeFormatters=Qe(y)?y.__datetimeFormatters:void 0,w.__numberFormatters=Qe(y)?y.__numberFormatters:void 0;const S=Hw(w);return n&&Bm(S),S})(),ba(y,r.value,o.value);function A(){return[r.value,o.value,a.value,l.value,c.value]}const M=Ht({get:()=>r.value,set:w=>{r.value=w,y.locale=r.value}}),T=Ht({get:()=>o.value,set:w=>{o.value=w,y.fallbackLocale=o.value,ba(y,r.value,w)}}),P=Ht(()=>a.value),D=Ht(()=>l.value),W=Ht(()=>c.value);function U(){return qt(m)?m:null}function N(w){m=w,y.postTranslation=w}function O(){return g}function Y(w){w!==null&&(d=Km(w)),g=w,y.missing=d}const G=(w,S,k,q,ne,he)=>{A();let be;if(__INTLIFY_PROD_DEVTOOLS__)try{km(Qw()),n||(y.fallbackContext=t?Gw():void 0),be=w(y)}finally{km(null),n||(y.fallbackContext=void 0)}else be=w(y);if(Wt(be)&&be===sf){const[ye,ie]=S();return t&&h?q(t):ne(ye)}else{if(he(be))return be;throw ii(Hn.UNEXPECTED_RETURN_TYPE)}};function z(...w){return G(S=>Reflect.apply(Gm,null,[S,...w]),()=>Yh(...w),"translate",S=>Reflect.apply(S.t,S,[...w]),S=>S,S=>Ce(S))}function ee(...w){const[S,k,q]=w;if(q&&!ht(q))throw ii(Hn.INVALID_ARGUMENT);return z(S,k,_n({resolvedMessage:!0},q||{}))}function ue(...w){return G(S=>Reflect.apply(Hm,null,[S,...w]),()=>qh(...w),"datetime format",S=>Reflect.apply(S.d,S,[...w]),()=>Um,S=>Ce(S))}function ve(...w){return G(S=>Reflect.apply(jm,null,[S,...w]),()=>$h(...w),"number format",S=>Reflect.apply(S.n,S,[...w]),()=>Um,S=>Ce(S))}function H(w){return w.map(S=>Ce(S)||Wt(S)||Et(S)?Ym(String(S)):S)}const pe={normalize:H,interpolate:w=>w,type:"vnode"};function L(...w){return G(S=>{let k;const q=S;try{q.processor=pe,k=Reflect.apply(Gm,null,[q,...w])}finally{q.processor=null}return k},()=>Yh(...w),"translate",S=>S[Kh](...w),S=>[Ym(S)],S=>Dt(S))}function Z(...w){return G(S=>Reflect.apply(jm,null,[S,...w]),()=>$h(...w),"number format",S=>S[Jh](...w),()=>[],S=>Ce(S)||Dt(S))}function K(...w){return G(S=>Reflect.apply(Hm,null,[S,...w]),()=>qh(...w),"datetime format",S=>S[Zh](...w),()=>[],S=>Ce(S)||Dt(S))}function oe(w){b=w,y.pluralRules=b}function de(w,S){const k=Ce(S)?S:r.value,q=C(k);return y.messageResolver(q,w)!==null}function xe(w){let S=null;const k=ux(y,o.value,r.value);for(let q=0;q<k.length;q++){const ne=a.value[k[q]]||{},he=y.messageResolver(ne,w);if(he!=null){S=he;break}}return S}function Me(w){const S=xe(w);return S??(t?t.tm(w)||{}:{})}function C(w){return a.value[w]||{}}function I(w,S){a.value[w]=S,y.messages=a.value}function X(w,S){a.value[w]=a.value[w]||{},Za(S,a.value[w]),y.messages=a.value}function J(w){return l.value[w]||{}}function re(w,S){l.value[w]=S,y.datetimeFormats=l.value,Wm(y,w,S)}function fe(w,S){l.value[w]=_n(l.value[w]||{},S),y.datetimeFormats=l.value,Wm(y,w,S)}function me(w){return c.value[w]||{}}function ce(w,S){c.value[w]=S,y.numberFormats=c.value,Xm(y,w,S)}function _e(w,S){c.value[w]=_n(c.value[w]||{},S),y.numberFormats=c.value,Xm(y,w,S)}$m++,t&&Xh&&(os(t.locale,w=>{s&&(r.value=w,y.locale=w,ba(y,r.value,o.value))}),os(t.fallbackLocale,w=>{s&&(o.value=w,y.fallbackLocale=w,ba(y,r.value,o.value))}));const Q={id:$m,locale:M,fallbackLocale:T,get inheritLocale(){return s},set inheritLocale(w){s=w,w&&t&&(r.value=t.locale.value,o.value=t.fallbackLocale.value,ba(y,r.value,o.value))},get availableLocales(){return Object.keys(a.value).sort()},messages:P,get modifiers(){return _},get pluralRules(){return b||{}},get isGlobal(){return n},get missingWarn(){return u},set missingWarn(w){u=w,y.missingWarn=u},get fallbackWarn(){return f},set fallbackWarn(w){f=w,y.fallbackWarn=f},get fallbackRoot(){return h},set fallbackRoot(w){h=w},get fallbackFormat(){return p},set fallbackFormat(w){p=w,y.fallbackFormat=p},get warnHtmlMessage(){return v},set warnHtmlMessage(w){v=w,y.warnHtmlMessage=w},get escapeParameter(){return x},set escapeParameter(w){x=w,y.escapeParameter=w},t:z,getLocaleMessage:C,setLocaleMessage:I,mergeLocaleMessage:X,getPostTranslationHandler:U,setPostTranslationHandler:N,getMissingHandler:O,setMissingHandler:Y,[Kw]:oe};return Q.datetimeFormats=D,Q.numberFormats=W,Q.rt=ee,Q.te=de,Q.tm=Me,Q.d=ue,Q.n=ve,Q.getDateTimeFormat=J,Q.setDateTimeFormat=re,Q.mergeDateTimeFormat=fe,Q.getNumberFormat=me,Q.setNumberFormat=ce,Q.mergeNumberFormat=_e,Q[Zw]=i.__injectWithOption,Q[Kh]=L,Q[Zh]=K,Q[Jh]=Z,Q}const _p={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:i=>i==="parent"||i==="global",default:"parent"},i18n:{type:Object}};function eT({slots:i},e){return e.length===1&&e[0]==="default"?(i.default?i.default():[]).reduce((n,s)=>n=[...n,...Dt(s.children)?s.children:[s]],[]):e.reduce((t,n)=>{const s=i[n];return s&&(t[n]=s()),t},{})}function wx(i){return Ri}const Zm={name:"i18n-t",props:_n({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:i=>Wt(i)||!isNaN(i)}},_p),setup(i,e){const{slots:t,attrs:n}=e,s=i.i18n||vp({useScope:i.scope,__useComponent:!0});return()=>{const r=Object.keys(t).filter(f=>f!=="_"),o={};i.locale&&(o.locale=i.locale),i.plural!==void 0&&(o.plural=Ce(i.plural)?+i.plural:i.plural);const a=eT(e,r),l=s[Kh](i.keypath,a,o),c=_n({},n),u=Ce(i.tag)||ht(i.tag)?i.tag:wx();return ef(u,c,l)}}};function tT(i){return Dt(i)&&!Ce(i[0])}function Tx(i,e,t,n){const{slots:s,attrs:r}=e;return()=>{const o={part:!0};let a={};i.locale&&(o.locale=i.locale),Ce(i.format)?o.key=i.format:ht(i.format)&&(Ce(i.format.key)&&(o.key=i.format.key),a=Object.keys(i.format).reduce((h,p)=>t.includes(p)?_n({},h,{[p]:i.format[p]}):h,{}));const l=n(i.value,o,a);let c=[o.key];Dt(l)?c=l.map((h,p)=>{const g=s[h.type],d=g?g({[h.type]:h.value,index:p,parts:l}):[h.value];return tT(d)&&(d[0].key=`${h.type}-${p}`),d}):Ce(l)&&(c=[l]);const u=_n({},r),f=Ce(i.tag)||ht(i.tag)?i.tag:wx();return ef(f,u,c)}}const Jm={name:"i18n-n",props:_n({value:{type:Number,required:!0},format:{type:[String,Object]}},_p),setup(i,e){const t=i.i18n||vp({useScope:"parent",__useComponent:!0});return Tx(i,e,xx,(...n)=>t[Jh](...n))}},Qm={name:"i18n-d",props:_n({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},_p),setup(i,e){const t=i.i18n||vp({useScope:"parent",__useComponent:!0});return Tx(i,e,vx,(...n)=>t[Zh](...n))}};function nT(i,e){const t=i;if(i.mode==="composition")return t.__getInstance(e)||i.global;{const n=t.__getInstance(e);return n!=null?n.__composer:i.global.__composer}}function iT(i){const e=o=>{const{instance:a,modifiers:l,value:c}=o;if(!a||!a.$)throw ii(Hn.UNEXPECTED_ERROR);const u=nT(i,a.$),f=eg(c);return[Reflect.apply(u.t,u,[...tg(f)]),u]};return{created:(o,a)=>{const[l,c]=e(a);Xh&&i.global===c&&(o.__i18nWatcher=os(c.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{Xh&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,c=eg(a);o.textContent=Reflect.apply(l.t,l,[...tg(c)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function eg(i){if(Ce(i))return{path:i};if(Qe(i)){if(!("path"in i))throw ii(Hn.REQUIRED_VALUE,"path");return i}else throw ii(Hn.INVALID_VALUE)}function tg(i){const{path:e,locale:t,args:n,choice:s,plural:r}=i,o={},a=n||{};return Ce(t)&&(o.locale=t),Wt(s)&&(o.plural=s),Wt(r)&&(o.plural=r),[e,a,o]}function sT(i,e,...t){const n=Qe(t[0])?t[0]:{},s=!!n.useI18nComponentName;(Et(n.globalInstall)?n.globalInstall:!0)&&(i.component(s?"i18n":Zm.name,Zm),i.component(Jm.name,Jm),i.component(Qm.name,Qm)),i.directive("t",iT(e))}const rT=er("global-vue-i18n");function oT(i={},e){const t=Et(i.globalInjection)?i.globalInjection:!0,n=!0,s=new Map,[r,o]=aT(i),a=er("");function l(f){return s.get(f)||null}function c(f,h){s.set(f,h)}function u(f){s.delete(f)}{const f={get mode(){return"composition"},get allowComposition(){return n},async install(h,...p){h.__VUE_I18N_SYMBOL__=a,h.provide(h.__VUE_I18N_SYMBOL__,f),t&&mT(h,f.global),sT(h,f,...p);const g=h.unmount;h.unmount=()=>{f.dispose(),g()}},get global(){return o},dispose(){r.stop()},__instances:s,__getInstance:l,__setInstance:c,__deleteInstance:u};return f}}function vp(i={}){const e=Vl();if(e==null)throw ii(Hn.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw ii(Hn.NOT_INSLALLED);const t=lT(e),n=uT(t),s=Mx(e),r=cT(i,s);if(r==="global")return Jw(n,i,s),n;if(r==="parent"){let l=fT(t,e,i.__useComponent);return l==null&&(l=n),l}const o=t;let a=o.__getInstance(e);if(a==null){const l=_n({},i);"__i18n"in s&&(l.__i18n=s.__i18n),n&&(l.__root=n),a=Sx(l),hT(o,e),o.__setInstance(e,a)}return a}function aT(i,e,t){const n=$d();{const s=n.run(()=>Sx(i));if(s==null)throw ii(Hn.UNEXPECTED_ERROR);return[n,s]}}function lT(i){{const e=_i(i.isCE?rT:i.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw ii(i.isCE?Hn.NOT_INSLALLED_WITH_PROVIDE:Hn.UNEXPECTED_ERROR);return e}}function cT(i,e){return nf(i)?"__i18n"in e?"local":"global":i.useScope?i.useScope:"local"}function uT(i){return i.mode==="composition"?i.global:i.global.__composer}function fT(i,e,t=!1){let n=null;const s=e.root;let r=e.parent;for(;r!=null;){const o=i;if(i.mode==="composition"&&(n=o.__getInstance(r)),n!=null||s===r)break;r=r.parent}return n}function hT(i,e,t){Ju(()=>{},e),op(()=>{i.__deleteInstance(e)},e)}const dT=["locale","fallbackLocale","availableLocales"],pT=["t","rt","d","n","tm"];function mT(i,e){const t=Object.create(null);dT.forEach(n=>{const s=Object.getOwnPropertyDescriptor(e,n);if(!s)throw ii(Hn.UNEXPECTED_ERROR);const r=Mt(s.value)?{get(){return s.value.value},set(o){s.value.value=o}}:{get(){return s.get&&s.get()}};Object.defineProperty(t,n,r)}),i.config.globalProperties.$i18n=t,pT.forEach(n=>{const s=Object.getOwnPropertyDescriptor(e,n);if(!s||!s.value)throw ii(Hn.UNEXPECTED_ERROR);Object.defineProperty(i.config.globalProperties,`$${n}`,s)})}Bw(bw);zw(ux);$w();if(__INTLIFY_PROD_DEVTOOLS__){const i=hp();i.__INTLIFY__=!0,Rw(i.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}let _t=0;const ct={LOADER_PROGRESS:_t++,APP_LOADED:_t++,ATTACH:_t++,ROUTE_CHANGE:_t++,TICK:_t++,RENDER:_t++,RESIZE:_t++,POINTER_MOVE:_t++,POINTER_UP:_t++,POINTER_DOWN:_t++,KEY_DOWN:_t++,DRAG:_t++,DRAG_END:_t++,PINCH:_t++,WHEEL:_t++,STATE_READY:_t++,JOIN_READY:_t++,CREATE_TEAM:_t++,SPAWN_MEDALS:_t++,VOTE_RESULTS:_t++,COLLECT_MEDAL:_t++},gT=Object.fromEntries(Object.entries(ct).map(([i,e])=>[e,`on${i.toLowerCase().split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}`])),_T={USER_ID:_t++,USER_ISO:_t++},Si={CONNECT_STATE:"connect_state",JOIN_STATE:"join_state",VOTE_RESULTS:"vote_results",VOTE_COUNT:"vote_count",MEDAL_APPARITION:"medal_apparition",MEDAL_COLLECTION:"medal_collection",NEW_TEAM:"new_team",PLAYER_COUNT:"player_count",USER_VOTE:"user_vote",USER_JOIN:"user_join"},sc={up:0,right:1,down:2,left:3},Ck={bronze:0,silver:1,gold:2};var ai,Rs,Mr,Sr,hu,Ex;const bo=class{constructor(){we(this,hu);we(this,ai,void 0);we(this,Rs,void 0);we(this,Mr,void 0);we(this,Sr,void 0);rt(this,ai,new Map),rt(this,Rs,new Map),rt(this,Mr,new Map),rt(this,Sr,new Set)}on(e,t,n={}){$(this,ai).has(e)||$(this,ai).set(e,new Set),(n.once?$(this,Rs):$(this,ai)).get(e).add(t)}off(e,t){if(!$(this,ai).has(e))return;$(this,ai).get(e).delete(t)}register(e){$(this,Sr).add(e)}unregister(e){$(this,Sr).delete(e)}emit(e,...t){if($(this,Mr).set(e,t),$(this,ai).has(e))for(const n of $(this,ai).get(e))n.call(this,...t);if($(this,Sr).forEach(n=>He(this,hu,Ex).call(this,n,e)),$(this,Rs).has(e)){for(const n of $(this,Rs).get(e))n.call(this,...t);$(this,Rs).delete(e)}}static getInstance(){return bo.instance||(bo.instance=new bo),bo.instance}};let kc=bo;ai=new WeakMap,Rs=new WeakMap,Mr=new WeakMap,Sr=new WeakMap,hu=new WeakSet,Ex=function(e,t){const n=e[gT[t]];typeof n=="function"&&$(this,Mr).has(t)&&n.call(e,...$(this,Mr).get(t))},Xn(kc,"instance");const We=kc.getInstance(),ao={images:{},textures:{groundData:{path:"/assets/textures/ground.png"},seamless1:{path:"/assets/textures/seamless1.png"},seamless2:{path:"/assets/textures/seamless2.png"},seamless3:{path:"/assets/textures/seamless3.png"},seamless4:{path:"/assets/textures/seamless4.png"},playerAo:{path:"/assets/textures/player-ao.jpg"},noise:{path:"/assets/textures/noiseFbm1.png"},skybox:{path:"/assets/textures/skybox.png"}},envMaps:{envmap:{path:"/assets/textures/forest.hdr"}},models:{terrain:{path:"/assets/models/terrain.glb"},player:{path:"/assets/models/character.glb"},medal:{path:"/assets/models/medal.glb"}},jsons:{},sounds:{mario:{path:"/assets/sounds/mario.mp3"},mario2:{path:"/assets/sounds/mario.mp3"}}};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xp="150",Rk={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Lk={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vT=0,ng=1,xT=2,Ax=1,bT=2,Ba=3,fs=0,Bn=1,ns=2,Ys=0,Ro=1,ig=2,sg=3,rg=4,yT=5,lo=100,MT=101,ST=102,og=103,ag=104,wT=200,TT=201,ET=202,AT=203,Cx=204,Rx=205,CT=206,RT=207,LT=208,PT=209,IT=210,DT=0,NT=1,OT=2,ed=3,UT=4,FT=5,kT=6,BT=7,Lx=0,zT=1,VT=2,as=0,GT=1,HT=2,WT=3,jT=4,XT=5,Px=300,Zo=301,Jo=302,au=303,lu=304,Gl=306,hi=1e3,Sn=1001,cu=1002,Lt=1003,td=1004,Bc=1005,Ut=1006,Ix=1007,Zs=1008,Or=1009,YT=1010,qT=1011,Dx=1012,$T=1013,br=1014,di=1015,is=1016,KT=1017,ZT=1018,Lo=1020,JT=1021,Fn=1023,QT=1024,eE=1025,Ir=1026,Qo=1027,tE=1028,nE=1029,iE=1030,sE=1031,rE=1033,If=33776,Df=33777,Nf=33778,Of=33779,lg=35840,cg=35841,ug=35842,fg=35843,oE=36196,hg=37492,dg=37496,pg=37808,mg=37809,gg=37810,_g=37811,vg=37812,xg=37813,bg=37814,yg=37815,Mg=37816,Sg=37817,wg=37818,Tg=37819,Eg=37820,Ag=37821,Uf=36492,aE=36283,Cg=36284,Rg=36285,Lg=36286,lE=2200,cE=2201,uE=2202,gl=2300,ea=2301,Ff=2302,_o=2400,vo=2401,uu=2402,bp=2500,fE=2501,hE=0,Nx=1,nd=2,Js=3e3,nt=3001,dE=3200,pE=3201,yp=0,mE=1,Ti="srgb",_l="srgb-linear",Ox="display-p3",kf=7680,gE=519,id=35044,Pg="300 es",sd=1035;class kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ig=1234567;const Ja=Math.PI/180,vl=180/Math.PI;function vi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function $t(i,e,t){return Math.max(e,Math.min(t,i))}function Mp(i,e){return(i%e+e)%e}function _E(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function vE(i,e,t){return i!==e?(t-i)/(e-i):0}function Qa(i,e,t){return(1-t)*i+t*e}function xE(i,e,t,n){return Qa(i,e,1-Math.exp(-t*n))}function bE(i,e=1){return e-Math.abs(Mp(i,e*2)-e)}function yE(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ME(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function SE(i,e){return i+Math.floor(Math.random()*(e-i+1))}function wE(i,e){return i+Math.random()*(e-i)}function TE(i){return i*(.5-Math.random())}function EE(i){i!==void 0&&(Ig=i);let e=Ig+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function AE(i){return i*Ja}function CE(i){return i*vl}function rd(i){return(i&i-1)===0&&i!==0}function Ux(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function RE(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),f=r((e-n)/2),h=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ss(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const LE={DEG2RAD:Ja,RAD2DEG:vl,generateUUID:vi,clamp:$t,euclideanModulo:Mp,mapLinear:_E,inverseLerp:vE,lerp:Qa,damp:xE,pingpong:bE,smoothstep:yE,smootherstep:ME,randInt:SE,randFloat:wE,randFloatSpread:TE,seededRandom:EE,degToRad:AE,radToDeg:CE,isPowerOfTwo:rd,ceilPowerOfTwo:Ux,floorPowerOfTwo:Fx,setQuaternionFromProperEuler:RE,normalize:at,denormalize:ss};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gn{constructor(){gn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],g=n[8],d=s[0],m=s[3],v=s[6],x=s[1],_=s[4],b=s[7],y=s[2],E=s[5],A=s[8];return r[0]=o*d+a*x+l*y,r[3]=o*m+a*_+l*E,r[6]=o*v+a*b+l*A,r[1]=c*d+u*x+f*y,r[4]=c*m+u*_+f*E,r[7]=c*v+u*b+f*A,r[2]=h*d+p*x+g*y,r[5]=h*m+p*_+g*E,r[8]=h*v+p*b+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,p=c*r-o*l,g=t*f+n*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=f*d,e[1]=(s*c-u*n)*d,e[2]=(a*n-s*o)*d,e[3]=h*d,e[4]=(u*t-s*l)*d,e[5]=(s*r-a*t)*d,e[6]=p*d,e[7]=(n*l-c*t)*d,e[8]=(o*t-n*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Bf.makeScale(e,t)),this}rotate(e){return this.premultiply(Bf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bf.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bf=new gn;function kx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}class zn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const h=r[o+0],p=r[o+1],g=r[o+2],d=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=d;return}if(f!==d||l!==h||c!==p||u!==g){let m=1-a;const v=l*h+c*p+u*g+f*d,x=v>=0?1:-1,_=1-v*v;if(_>Number.EPSILON){const y=Math.sqrt(_),E=Math.atan2(y,v*x);m=Math.sin(m*E)/y,a=Math.sin(a*E)/y}const b=a*x;if(l=l*m+h*b,c=c*m+p*b,u=u*m+g*b,f=f*m+d*b,m===1-a){const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-a*p,e[t+2]=c*g+u*p+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*s-a*n,u=l*n+a*t-r*s,f=l*s+r*n-o*t,h=-r*t-o*n-a*s;return this.x=c*l+h*-r+u*-a-f*-o,this.y=u*l+h*-o+f*-r-c*-a,this.z=f*l+h*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zf.copy(this).projectOnVector(e),this.sub(zf)}reflect(e){return this.sub(zf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zf=new B,Dg=new zn;function Po(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vf(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const PE=new gn().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),IE=new gn().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),zs=new B;function DE(i){return i.convertSRGBToLinear(),zs.set(i.r,i.g,i.b).applyMatrix3(IE),i.setRGB(zs.x,zs.y,zs.z)}function NE(i){return zs.set(i.r,i.g,i.b).applyMatrix3(PE),i.setRGB(zs.x,zs.y,zs.z).convertLinearToSRGB()}const OE={[_l]:i=>i,[Ti]:i=>i.convertSRGBToLinear(),[Ox]:DE},UE={[_l]:i=>i,[Ti]:i=>i.convertLinearToSRGB(),[Ox]:NE},un={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return _l},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=OE[e],s=UE[t];if(n===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Wr;class Bx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wr===void 0&&(Wr=xl("canvas")),Wr.width=e.width,Wr.height=e.height;const n=Wr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Po(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Po(t[n]/255)*255):t[n]=Po(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class zx{constructor(e=null){this.isSource=!0,this.uuid=vi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Gf(s[o].image)):r.push(Gf(s[o]))}else r=Gf(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Gf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bx.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let FE=0;class Jt extends kr{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=Sn,s=Sn,r=Ut,o=Zs,a=Fn,l=Or,c=Jt.DEFAULT_ANISOTROPY,u=Js){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=vi(),this.name="",this.source=new zx(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Px)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hi:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case cu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hi:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case cu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Px;Jt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,s=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],d=l[2],m=l[6],v=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-d)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+d)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,b=(p+1)/2,y=(v+1)/2,E=(u+h)/4,A=(f+d)/4,M=(g+m)/4;return _>b&&_>y?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=E/n,r=A/n):b>y?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=E/s,r=M/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=A/r,s=M/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(f-d)*(f-d)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-d)/x,this.z=(h-u)/x,this.w=Math.acos((c+p+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bi extends kr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new Jt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ut,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vx extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kE extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ua{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<s&&(s=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<s&&(s=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)cr.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(cr)}else n.boundingBox===null&&n.computeBoundingBox(),Hf.copy(n.boundingBox),Hf.applyMatrix4(e.matrixWorld),this.union(Hf);const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,cr),cr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ya),rc.subVectors(this.max,ya),jr.subVectors(e.a,ya),Xr.subVectors(e.b,ya),Yr.subVectors(e.c,ya),_s.subVectors(Xr,jr),vs.subVectors(Yr,Xr),ur.subVectors(jr,Yr);let t=[0,-_s.z,_s.y,0,-vs.z,vs.y,0,-ur.z,ur.y,_s.z,0,-_s.x,vs.z,0,-vs.x,ur.z,0,-ur.x,-_s.y,_s.x,0,-vs.y,vs.x,0,-ur.y,ur.x,0];return!Wf(t,jr,Xr,Yr,rc)||(t=[1,0,0,0,1,0,0,0,1],!Wf(t,jr,Xr,Yr,rc))?!1:(oc.crossVectors(_s,vs),t=[oc.x,oc.y,oc.z],Wf(t,jr,Xr,Yr,rc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gi=[new B,new B,new B,new B,new B,new B,new B,new B],cr=new B,Hf=new ua,jr=new B,Xr=new B,Yr=new B,_s=new B,vs=new B,ur=new B,ya=new B,rc=new B,oc=new B,fr=new B;function Wf(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){fr.fromArray(i,r);const a=s.x*Math.abs(fr.x)+s.y*Math.abs(fr.y)+s.z*Math.abs(fr.z),l=e.dot(fr),c=t.dot(fr),u=n.dot(fr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const BE=new ua,Ma=new B,jf=new B;class fa{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):BE.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);const t=Ma.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ma,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(jf)),this.expandByPoint(Ma.copy(e.center).sub(jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new B,Xf=new B,ac=new B,xs=new B,Yf=new B,lc=new B,qf=new B;class Sp{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Xf.copy(e).add(t).multiplyScalar(.5),ac.copy(t).sub(e).normalize(),xs.copy(this.origin).sub(Xf);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ac),a=xs.dot(this.direction),l=-xs.dot(ac),c=xs.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const d=1/u;f*=d,h*=d,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Xf).addScaledVector(ac,h),p}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const n=Hi.dot(this.direction),s=Hi.dot(Hi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,n,s,r){Yf.subVectors(t,e),lc.subVectors(n,e),qf.crossVectors(Yf,lc);let o=this.direction.dot(qf),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xs.subVectors(this.origin,e);const l=a*this.direction.dot(lc.crossVectors(xs,lc));if(l<0)return null;const c=a*this.direction.dot(Yf.cross(xs));if(c<0||l+c>o)return null;const u=-a*xs.dot(qf);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,r,o,a,l,c,u,f,h,p,g,d,m){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=s,v[1]=r,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=f,v[14]=h,v[3]=p,v[7]=g,v[11]=d,v[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/qr.setFromMatrixColumn(e,0).length(),r=1/qr.setFromMatrixColumn(e,1).length(),o=1/qr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,d=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-d*c,t[9]=-a*l,t[2]=d-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,d=c*f;t[0]=h+d*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=d+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,d=c*f;t[0]=h-d*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=d-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,d=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+d,t[1]=l*f,t[5]=d*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=d-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-d*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+d,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=d*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zE,e,VE)}lookAt(e,t,n){const s=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),bs.crossVectors(n,Pn),bs.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),bs.crossVectors(n,Pn)),bs.normalize(),cc.crossVectors(Pn,bs),s[0]=bs.x,s[4]=cc.x,s[8]=Pn.x,s[1]=bs.y,s[5]=cc.y,s[9]=Pn.y,s[2]=bs.z,s[6]=cc.z,s[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],g=n[2],d=n[6],m=n[10],v=n[14],x=n[3],_=n[7],b=n[11],y=n[15],E=s[0],A=s[4],M=s[8],T=s[12],P=s[1],D=s[5],W=s[9],U=s[13],N=s[2],O=s[6],Y=s[10],G=s[14],z=s[3],ee=s[7],ue=s[11],ve=s[15];return r[0]=o*E+a*P+l*N+c*z,r[4]=o*A+a*D+l*O+c*ee,r[8]=o*M+a*W+l*Y+c*ue,r[12]=o*T+a*U+l*G+c*ve,r[1]=u*E+f*P+h*N+p*z,r[5]=u*A+f*D+h*O+p*ee,r[9]=u*M+f*W+h*Y+p*ue,r[13]=u*T+f*U+h*G+p*ve,r[2]=g*E+d*P+m*N+v*z,r[6]=g*A+d*D+m*O+v*ee,r[10]=g*M+d*W+m*Y+v*ue,r[14]=g*T+d*U+m*G+v*ve,r[3]=x*E+_*P+b*N+y*z,r[7]=x*A+_*D+b*O+y*ee,r[11]=x*M+_*W+b*Y+y*ue,r[15]=x*T+_*U+b*G+y*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],d=e[7],m=e[11],v=e[15];return g*(+r*l*f-s*c*f-r*a*h+n*c*h+s*a*p-n*l*p)+d*(+t*l*p-t*c*h+r*o*h-s*o*p+s*c*u-r*l*u)+m*(+t*c*f-t*a*p-r*o*f+n*o*p+r*a*u-n*c*u)+v*(-s*a*u-t*l*f+t*a*h+s*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],d=e[13],m=e[14],v=e[15],x=f*m*c-d*h*c+d*l*p-a*m*p-f*l*v+a*h*v,_=g*h*c-u*m*c-g*l*p+o*m*p+u*l*v-o*h*v,b=u*d*c-g*f*c+g*a*p-o*d*p-u*a*v+o*f*v,y=g*f*l-u*d*l-g*a*h+o*d*h+u*a*m-o*f*m,E=t*x+n*_+s*b+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=x*A,e[1]=(d*h*r-f*m*r-d*s*p+n*m*p+f*s*v-n*h*v)*A,e[2]=(a*m*r-d*l*r+d*s*c-n*m*c-a*s*v+n*l*v)*A,e[3]=(f*l*r-a*h*r-f*s*c+n*h*c+a*s*p-n*l*p)*A,e[4]=_*A,e[5]=(u*m*r-g*h*r+g*s*p-t*m*p-u*s*v+t*h*v)*A,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*v-t*l*v)*A,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*p+t*l*p)*A,e[8]=b*A,e[9]=(g*f*r-u*d*r-g*n*p+t*d*p+u*n*v-t*f*v)*A,e[10]=(o*d*r-g*a*r+g*n*c-t*d*c-o*n*v+t*a*v)*A,e[11]=(u*a*r-o*f*r-u*n*c+t*f*c+o*n*p-t*a*p)*A,e[12]=y*A,e[13]=(u*d*s-g*f*s+g*n*h-t*d*h-u*n*m+t*f*m)*A,e[14]=(g*a*s-o*d*s-g*n*l+t*d*l+o*n*m-t*a*m)*A,e[15]=(o*f*s-u*a*s+u*n*l-t*f*l-o*n*h+t*a*h)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,p=r*u,g=r*f,d=o*u,m=o*f,v=a*f,x=l*c,_=l*u,b=l*f,y=n.x,E=n.y,A=n.z;return s[0]=(1-(d+v))*y,s[1]=(p+b)*y,s[2]=(g-_)*y,s[3]=0,s[4]=(p-b)*E,s[5]=(1-(h+v))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(g+_)*A,s[9]=(m-x)*A,s[10]=(1-(h+d))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=qr.set(s[0],s[1],s[2]).length();const o=qr.set(s[4],s[5],s[6]).length(),a=qr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],si.copy(this);const c=1/r,u=1/o,f=1/a;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=f,si.elements[9]*=f,si.elements[10]*=f,t.setFromRotationMatrix(si),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),h=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o){const a=this.elements,l=1/(t-e),c=1/(n-s),u=1/(o-r),f=(t+e)*l,h=(n+s)*c,p=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qr=new B,si=new je,zE=new B(0,0,0),VE=new B(1,1,1),bs=new B,cc=new B,Pn=new B,Ng=new je,Og=new zn;class Hl{constructor(e=0,t=0,n=0,s=Hl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ng.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ng,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Og.setFromEuler(this),this.setFromQuaternion(Og,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hl.DEFAULT_ORDER="XYZ";class Gx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let GE=0;const Ug=new B,$r=new zn,Wi=new je,uc=new B,Sa=new B,HE=new B,WE=new zn,Fg=new B(1,0,0),kg=new B(0,1,0),Bg=new B(0,0,1),jE={type:"added"},zg={type:"removed"};class dt extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new B,t=new Hl,n=new zn,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new gn}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Gx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Fg,e)}rotateY(e){return this.rotateOnAxis(kg,e)}rotateZ(e){return this.rotateOnAxis(Bg,e)}translateOnAxis(e,t){return Ug.copy(e).applyQuaternion(this.quaternion),this.position.add(Ug.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fg,e)}translateY(e){return this.translateOnAxis(kg,e)}translateZ(e){return this.translateOnAxis(Bg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?uc.copy(e):uc.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Sa,uc,this.up):Wi.lookAt(uc,Sa,this.up),this.quaternion.setFromRotationMatrix(Wi),s&&(Wi.extractRotation(s.matrixWorld),$r.setFromRotationMatrix(Wi),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(jE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(zg)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,e,HE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,WE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}dt.DEFAULT_UP=new B(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new B,ji=new B,$f=new B,Xi=new B,Kr=new B,Zr=new B,Vg=new B,Kf=new B,Zf=new B,Jf=new B;class Qi{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ri.subVectors(e,t),s.cross(ri);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ri.subVectors(s,t),ji.subVectors(n,t),$f.subVectors(e,t);const o=ri.dot(ri),a=ri.dot(ji),l=ri.dot($f),c=ji.dot(ji),u=ji.dot($f),f=o*c-a*a;if(f===0)return r.set(-2,-1,-1);const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Xi),Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getUV(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Xi),l.set(0,0),l.addScaledVector(r,Xi.x),l.addScaledVector(o,Xi.y),l.addScaledVector(a,Xi.z),l}static isFrontFacing(e,t,n,s){return ri.subVectors(n,t),ji.subVectors(e,t),ri.cross(ji).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),ri.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Qi.getUV(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Qi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Kr.subVectors(s,n),Zr.subVectors(r,n),Kf.subVectors(e,n);const l=Kr.dot(Kf),c=Zr.dot(Kf);if(l<=0&&c<=0)return t.copy(n);Zf.subVectors(e,s);const u=Kr.dot(Zf),f=Zr.dot(Zf);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Kr,o);Jf.subVectors(e,r);const p=Kr.dot(Jf),g=Zr.dot(Jf);if(g>=0&&p<=g)return t.copy(r);const d=p*c-l*g;if(d<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Zr,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Vg.subVectors(r,s),a=(f-u)/(f-u+(p-g)),t.copy(s).addScaledVector(Vg,a);const v=1/(m+d+h);return o=d*v,a=h*v,t.copy(n).addScaledVector(Kr,o).addScaledVector(Zr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let XE=0;class xi extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=Ro,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Cx,this.blendDst=Rx,this.blendEquation=lo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ed,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kf,this.stencilZFail=kf,this.stencilZPass=kf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ro&&(n.blending=this.blending),this.side!==fs&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},fc={h:0,s:0,l:0};function Qf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,un.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=un.workingColorSpace){return this.r=e,this.g=t,this.b=n,un.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=un.workingColorSpace){if(e=Mp(e,1),t=$t(t,0,1),n=$t(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Qf(o,r,e+1/3),this.g=Qf(o,r,e),this.b=Qf(o,r,e-1/3)}return un.toWorkingColorSpace(this,s),this}setStyle(e,t=Ti){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,un.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,un.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,un.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,un.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ti){const n=Hx[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Po(e.r),this.g=Po(e.g),this.b=Po(e.b),this}copyLinearToSRGB(e){return this.r=Vf(e.r),this.g=Vf(e.g),this.b=Vf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ti){return un.fromWorkingColorSpace(en.copy(this),e),$t(en.r*255,0,255)<<16^$t(en.g*255,0,255)<<8^$t(en.b*255,0,255)<<0}getHexString(e=Ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=un.workingColorSpace){un.fromWorkingColorSpace(en.copy(this),t);const n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=un.workingColorSpace){return un.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Ti){un.fromWorkingColorSpace(en.copy(this),e);const t=en.r,n=en.g,s=en.b;return e!==Ti?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${s*255|0})`}offsetHSL(e,t,n){return this.getHSL(oi),oi.h+=e,oi.s+=t,oi.l+=n,this.setHSL(oi.h,oi.s,oi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(fc);const n=Qa(oi.h,fc.h,t),s=Qa(oi.s,fc.s,t),r=Qa(oi.l,fc.l,t);return this.setHSL(n,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new Pe;Pe.NAMES=Hx;class yr extends xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new B,hc=new Ve;class vn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=id,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hc.fromBufferAttribute(this,t),hc.applyMatrix3(e),this.setXY(t,hc.x,hc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ss(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ss(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ss(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ss(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==id&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Wx extends vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jx extends vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Vn extends vn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let YE=0;const Yn=new je,eh=new dt,Jr=new B,In=new ua,wa=new ua,Gt=new B;class Wn extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kx(e)?jx:Wx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new gn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,n){return Yn.makeTranslation(e,t,n),this.applyMatrix4(Yn),this}scale(e,t,n){return Yn.makeScale(e,t,n),this.applyMatrix4(Yn),this}lookAt(e){return eh.lookAt(e),eh.updateMatrix(),this.applyMatrix4(eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Vn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ua);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];wa.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(In.min,wa.min),In.expandByPoint(Gt),Gt.addVectors(In.max,wa.max),In.expandByPoint(Gt)):(In.expandByPoint(wa.min),In.expandByPoint(wa.max))}In.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Gt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gt.fromBufferAttribute(a,c),l&&(Jr.fromBufferAttribute(e,c),Gt.add(Jr)),s=Math.max(s,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<a;P++)c[P]=new B,u[P]=new B;const f=new B,h=new B,p=new B,g=new Ve,d=new Ve,m=new Ve,v=new B,x=new B;function _(P,D,W){f.fromArray(s,P*3),h.fromArray(s,D*3),p.fromArray(s,W*3),g.fromArray(o,P*2),d.fromArray(o,D*2),m.fromArray(o,W*2),h.sub(f),p.sub(f),d.sub(g),m.sub(g);const U=1/(d.x*m.y-m.x*d.y);isFinite(U)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(U),x.copy(p).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(U),c[P].add(v),c[D].add(v),c[W].add(v),u[P].add(x),u[D].add(x),u[W].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let P=0,D=b.length;P<D;++P){const W=b[P],U=W.start,N=W.count;for(let O=U,Y=U+N;O<Y;O+=3)_(n[O+0],n[O+1],n[O+2])}const y=new B,E=new B,A=new B,M=new B;function T(P){A.fromArray(r,P*3),M.copy(A);const D=c[P];y.copy(D),y.sub(A.multiplyScalar(A.dot(D))).normalize(),E.crossVectors(M,D);const U=E.dot(u[P])<0?-1:1;l[P*4]=y.x,l[P*4+1]=y.y,l[P*4+2]=y.z,l[P*4+3]=U}for(let P=0,D=b.length;P<D;++P){const W=b[P],U=W.start,N=W.count;for(let O=U,Y=U+N;O<Y;O+=3)T(n[O+0]),T(n[O+1]),T(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,f=new B;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),d=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,d),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let d=0,m=l.length;d<m;d++){a.isInterleavedBufferAttribute?p=l[d]*a.data.stride+a.offset:p=l[d]*u;for(let v=0;v<u;v++)h[g++]=c[p++]}return new vn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gg=new je,wi=new Sp,dc=new fa,Hg=new B,Ta=new B,Ea=new B,Aa=new B,th=new B,pc=new B,mc=new Ve,gc=new Ve,_c=new Ve,nh=new B,vc=new B;class sn extends dt{constructor(e=new Wn,t=new yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){pc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(th.fromBufferAttribute(f,e),o?pc.addScaledVector(th,u):pc.addScaledVector(th.sub(t),u))}t.add(pc)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),dc.copy(n.boundingSphere),dc.applyMatrix4(r),wi.copy(e.ray).recast(e.near),dc.containsPoint(wi.origin)===!1&&(wi.intersectSphere(dc,Hg)===null||wi.origin.distanceToSquared(Hg)>(e.far-e.near)**2))||(Gg.copy(r).invert(),wi.copy(e.ray).applyMatrix4(Gg),n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.groups,h=n.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,g=f.length;p<g;p++){const d=f[p],m=s[d.materialIndex],v=Math.max(d.start,h.start),x=Math.min(a.count,Math.min(d.start+d.count,h.start+h.count));for(let _=v,b=x;_<b;_+=3){const y=a.getX(_),E=a.getX(_+1),A=a.getX(_+2);o=xc(this,m,e,wi,c,u,y,E,A),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let d=p,m=g;d<m;d+=3){const v=a.getX(d),x=a.getX(d+1),_=a.getX(d+2);o=xc(this,s,e,wi,c,u,v,x,_),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,g=f.length;p<g;p++){const d=f[p],m=s[d.materialIndex],v=Math.max(d.start,h.start),x=Math.min(l.count,Math.min(d.start+d.count,h.start+h.count));for(let _=v,b=x;_<b;_+=3){const y=_,E=_+1,A=_+2;o=xc(this,m,e,wi,c,u,y,E,A),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let d=p,m=g;d<m;d+=3){const v=d,x=d+1,_=d+2;o=xc(this,s,e,wi,c,u,v,x,_),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}}}function qE(i,e,t,n,s,r,o,a){let l;if(e.side===Bn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===fs,a),l===null)return null;vc.copy(a),vc.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(vc);return c<t.near||c>t.far?null:{distance:c,point:vc.clone(),object:i}}function xc(i,e,t,n,s,r,o,a,l){i.getVertexPosition(o,Ta),i.getVertexPosition(a,Ea),i.getVertexPosition(l,Aa);const c=qE(i,e,t,n,Ta,Ea,Aa,nh);if(c){s&&(mc.fromBufferAttribute(s,o),gc.fromBufferAttribute(s,a),_c.fromBufferAttribute(s,l),c.uv=Qi.getUV(nh,Ta,Ea,Aa,mc,gc,_c,new Ve)),r&&(mc.fromBufferAttribute(r,o),gc.fromBufferAttribute(r,a),_c.fromBufferAttribute(r,l),c.uv2=Qi.getUV(nh,Ta,Ea,Aa,mc,gc,_c,new Ve));const u={a:o,b:a,c:l,normal:new B,materialIndex:0};Qi.getNormal(Ta,Ea,Aa,u.normal),c.face=u}return c}class ha extends Wn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Vn(c,3)),this.setAttribute("normal",new Vn(u,3)),this.setAttribute("uv",new Vn(f,2));function g(d,m,v,x,_,b,y,E,A,M,T){const P=b/A,D=y/M,W=b/2,U=y/2,N=E/2,O=A+1,Y=M+1;let G=0,z=0;const ee=new B;for(let ue=0;ue<Y;ue++){const ve=ue*D-U;for(let H=0;H<O;H++){const le=H*P-W;ee[d]=le*x,ee[m]=ve*_,ee[v]=N,c.push(ee.x,ee.y,ee.z),ee[d]=0,ee[m]=0,ee[v]=E>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push(H/A),f.push(1-ue/M),G+=1}}for(let ue=0;ue<M;ue++)for(let ve=0;ve<A;ve++){const H=h+ve+O*ue,le=h+ve+O*(ue+1),pe=h+(ve+1)+O*(ue+1),L=h+(ve+1)+O*ue;l.push(H,le,L),l.push(le,pe,L),z+=6}a.addGroup(p,z,T),p+=z,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ta(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function pn(i){const e={};for(let t=0;t<i.length;t++){const n=ta(i[t]);for(const s in n)e[s]=n[s]}return e}function $E(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xx(i){return i.getRenderTarget()===null&&i.outputEncoding===nt?Ti:_l}const KE={clone:ta,merge:pn};var ZE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hs extends xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZE,this.fragmentShader=JE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ta(e.uniforms),this.uniformsGroups=$E(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wp extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class mn extends wp{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vl*2*Math.atan(Math.tan(Ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ja*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qr=-90,eo=1;class QE extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new mn(Qr,eo,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new mn(Qr,eo,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new mn(Qr,eo,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new mn(Qr,eo,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new mn(Qr,eo,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new mn(Qr,eo,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=as,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Yx extends Jt{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Zo,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eA extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Yx(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ha(5,5,5),r=new hs({name:"CubemapFromEquirect",uniforms:ta(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:Ys});r.uniforms.tEquirect.value=t;const o=new sn(s,r),a=t.minFilter;return t.minFilter===Zs&&(t.minFilter=Ut),new QE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const ih=new B,tA=new B,nA=new gn;class pr{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ih.subVectors(n,t).cross(tA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ih),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nA.getNormalMatrix(e),s=this.coplanarPoint(ih).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const to=new fa,bc=new B;class Tp{constructor(e=new pr,t=new pr,n=new pr,s=new pr,r=new pr,o=new pr){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],p=n[9],g=n[10],d=n[11],m=n[12],v=n[13],x=n[14],_=n[15];return t[0].setComponents(a-s,f-l,d-h,_-m).normalize(),t[1].setComponents(a+s,f+l,d+h,_+m).normalize(),t[2].setComponents(a+r,f+c,d+p,_+v).normalize(),t[3].setComponents(a-r,f-c,d-p,_-v).normalize(),t[4].setComponents(a-o,f-u,d-g,_-x).normalize(),t[5].setComponents(a+o,f+u,d+g,_+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),to.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(to)}intersectsSprite(e){return to.center.set(0,0,0),to.radius=.7071067811865476,to.applyMatrix4(e.matrixWorld),this.intersectsSphere(to)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(bc.x=s.normal.x>0?e.max.x:e.min.x,bc.y=s.normal.y>0?e.max.y:e.min.y,bc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(bc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qx(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function iA(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const f=c.array,h=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const h=u.array,p=u.updateRange;i.bindBuffer(f,c),p.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,s(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class rf extends Wn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,p=[],g=[],d=[],m=[];for(let v=0;v<u;v++){const x=v*h-o;for(let _=0;_<c;_++){const b=_*f-r;g.push(b,-x,0),d.push(0,0,1),m.push(_/a),m.push(1-v/l)}}for(let v=0;v<l;v++)for(let x=0;x<a;x++){const _=x+c*v,b=x+c*(v+1),y=x+1+c*(v+1),E=x+1+c*v;p.push(_,b,E),p.push(b,y,E)}this.setIndex(p),this.setAttribute("position",new Vn(g,3)),this.setAttribute("normal",new Vn(d,3)),this.setAttribute("uv",new Vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rf(e.width,e.height,e.widthSegments,e.heightSegments)}}var sA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,rA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oA=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,aA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uA="vec3 transformed = vec3( position );",fA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hA=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,dA=`#ifdef USE_IRIDESCENCE
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
#endif`,pA=`#ifdef USE_BUMPMAP
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
#endif`,mA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_A=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,MA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,SA=`#define PI 3.141592653589793
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
}`,wA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TA=`vec3 transformedNormal = objectNormal;
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
#endif`,EA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,CA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LA="gl_FragColor = linearToOutputTexel( gl_FragColor );",PA=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,IA=`#ifdef USE_ENVMAP
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
#endif`,DA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NA=`#ifdef USE_ENVMAP
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
#endif`,OA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UA=`#ifdef USE_ENVMAP
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
#endif`,FA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VA=`#ifdef USE_GRADIENTMAP
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
}`,GA=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,HA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XA=`uniform bool receiveShadow;
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
#endif`,YA=`#if defined( USE_ENVMAP )
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
#endif`,qA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$A=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JA=`PhysicalMaterial material;
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
#endif`,QA=`struct PhysicalMaterial {
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
}`,e2=`
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
#endif`,t2=`#if defined( RE_IndirectDiffuse )
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
#endif`,n2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,i2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,o2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,a2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,u2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d2=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p2=`#ifdef USE_MORPHNORMALS
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
#endif`,m2=`#ifdef USE_MORPHTARGETS
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
#endif`,g2=`#ifdef USE_MORPHTARGETS
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
#endif`,_2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,v2=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,x2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,M2=`#ifdef USE_NORMALMAP
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
#endif`,S2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,w2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,T2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,E2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,R2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,I2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,k2=`float getShadowMask() {
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
}`,B2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z2=`#ifdef USE_SKINNING
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
#endif`,V2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G2=`#ifdef USE_SKINNING
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
#endif`,H2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y2=`#ifdef USE_TRANSMISSION
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
#endif`,q2=`#ifdef USE_TRANSMISSION
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
#endif`,$2=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,K2=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Z2=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,J2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Q2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,eC=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,tC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iC=`uniform sampler2D t2D;
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
}`,sC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lC=`#include <common>
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
}`,cC=`#if DEPTH_PACKING == 3200
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
}`,uC=`#define DISTANCE
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
}`,fC=`#define DISTANCE
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
}`,hC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pC=`uniform float scale;
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
}`,mC=`uniform vec3 diffuse;
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
}`,gC=`#include <common>
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
}`,_C=`uniform vec3 diffuse;
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
}`,vC=`#define LAMBERT
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
}`,xC=`#define LAMBERT
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
}`,bC=`#define MATCAP
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
}`,yC=`#define MATCAP
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
}`,MC=`#define NORMAL
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
}`,SC=`#define NORMAL
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
}`,wC=`#define PHONG
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
}`,TC=`#define PHONG
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
}`,EC=`#define STANDARD
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
}`,AC=`#define STANDARD
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
}`,CC=`#define TOON
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
}`,RC=`#define TOON
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
}`,LC=`uniform float size;
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
}`,PC=`uniform vec3 diffuse;
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
}`,IC=`#include <common>
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
}`,DC=`uniform vec3 color;
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
}`,NC=`uniform float rotation;
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
}`,OC=`uniform vec3 diffuse;
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
}`,ze={alphamap_fragment:sA,alphamap_pars_fragment:rA,alphatest_fragment:oA,alphatest_pars_fragment:aA,aomap_fragment:lA,aomap_pars_fragment:cA,begin_vertex:uA,beginnormal_vertex:fA,bsdfs:hA,iridescence_fragment:dA,bumpmap_pars_fragment:pA,clipping_planes_fragment:mA,clipping_planes_pars_fragment:gA,clipping_planes_pars_vertex:_A,clipping_planes_vertex:vA,color_fragment:xA,color_pars_fragment:bA,color_pars_vertex:yA,color_vertex:MA,common:SA,cube_uv_reflection_fragment:wA,defaultnormal_vertex:TA,displacementmap_pars_vertex:EA,displacementmap_vertex:AA,emissivemap_fragment:CA,emissivemap_pars_fragment:RA,encodings_fragment:LA,encodings_pars_fragment:PA,envmap_fragment:IA,envmap_common_pars_fragment:DA,envmap_pars_fragment:NA,envmap_pars_vertex:OA,envmap_physical_pars_fragment:YA,envmap_vertex:UA,fog_vertex:FA,fog_pars_vertex:kA,fog_fragment:BA,fog_pars_fragment:zA,gradientmap_pars_fragment:VA,lightmap_fragment:GA,lightmap_pars_fragment:HA,lights_lambert_fragment:WA,lights_lambert_pars_fragment:jA,lights_pars_begin:XA,lights_toon_fragment:qA,lights_toon_pars_fragment:$A,lights_phong_fragment:KA,lights_phong_pars_fragment:ZA,lights_physical_fragment:JA,lights_physical_pars_fragment:QA,lights_fragment_begin:e2,lights_fragment_maps:t2,lights_fragment_end:n2,logdepthbuf_fragment:i2,logdepthbuf_pars_fragment:s2,logdepthbuf_pars_vertex:r2,logdepthbuf_vertex:o2,map_fragment:a2,map_pars_fragment:l2,map_particle_fragment:c2,map_particle_pars_fragment:u2,metalnessmap_fragment:f2,metalnessmap_pars_fragment:h2,morphcolor_vertex:d2,morphnormal_vertex:p2,morphtarget_pars_vertex:m2,morphtarget_vertex:g2,normal_fragment_begin:_2,normal_fragment_maps:v2,normal_pars_fragment:x2,normal_pars_vertex:b2,normal_vertex:y2,normalmap_pars_fragment:M2,clearcoat_normal_fragment_begin:S2,clearcoat_normal_fragment_maps:w2,clearcoat_pars_fragment:T2,iridescence_pars_fragment:E2,output_fragment:A2,packing:C2,premultiplied_alpha_fragment:R2,project_vertex:L2,dithering_fragment:P2,dithering_pars_fragment:I2,roughnessmap_fragment:D2,roughnessmap_pars_fragment:N2,shadowmap_pars_fragment:O2,shadowmap_pars_vertex:U2,shadowmap_vertex:F2,shadowmask_pars_fragment:k2,skinbase_vertex:B2,skinning_pars_vertex:z2,skinning_vertex:V2,skinnormal_vertex:G2,specularmap_fragment:H2,specularmap_pars_fragment:W2,tonemapping_fragment:j2,tonemapping_pars_fragment:X2,transmission_fragment:Y2,transmission_pars_fragment:q2,uv_pars_fragment:$2,uv_pars_vertex:K2,uv_vertex:Z2,uv2_pars_fragment:J2,uv2_pars_vertex:Q2,uv2_vertex:eC,worldpos_vertex:tC,background_vert:nC,background_frag:iC,backgroundCube_vert:sC,backgroundCube_frag:rC,cube_vert:oC,cube_frag:aC,depth_vert:lC,depth_frag:cC,distanceRGBA_vert:uC,distanceRGBA_frag:fC,equirect_vert:hC,equirect_frag:dC,linedashed_vert:pC,linedashed_frag:mC,meshbasic_vert:gC,meshbasic_frag:_C,meshlambert_vert:vC,meshlambert_frag:xC,meshmatcap_vert:bC,meshmatcap_frag:yC,meshnormal_vert:MC,meshnormal_frag:SC,meshphong_vert:wC,meshphong_frag:TC,meshphysical_vert:EC,meshphysical_frag:AC,meshtoon_vert:CC,meshtoon_frag:RC,points_vert:LC,points_frag:PC,shadow_vert:IC,shadow_frag:DC,sprite_vert:NC,sprite_frag:OC},Se={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new gn},uv2Transform:{value:new gn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new gn}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new gn}}},Ii={basic:{uniforms:pn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:pn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:pn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:pn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:pn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:pn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:pn([Se.points,Se.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:pn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:pn([Se.common,Se.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:pn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:pn([Se.sprite,Se.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new gn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:pn([Se.common,Se.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:pn([Se.lights,Se.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Ii.physical={uniforms:pn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const yc={r:0,b:0,g:0};function UC(i,e,t,n,s,r,o){const a=new Pe(0);let l=r===!0?0:1,c,u,f=null,h=0,p=null;function g(m,v){let x=!1,_=v.isScene===!0?v.background:null;_&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_));const b=i.xr,y=b.getSession&&b.getSession();y&&y.environmentBlendMode==="additive"&&(_=null),_===null?d(a,l):_&&_.isColor&&(d(_,1),x=!0),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Gl)?(u===void 0&&(u=new sn(new ha(1,1,1),new hs({name:"BackgroundCubeMaterial",uniforms:ta(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=_.encoding!==nt,(f!==_||h!==_.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=_,h=_.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new sn(new rf(2,2),new hs({name:"BackgroundMaterial",uniforms:ta(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=_.encoding!==nt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function d(m,v){m.getRGB(yc,Xx(i)),n.buffers.color.setClear(yc.r,yc.g,yc.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(m,v=1){a.set(m),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,d(a,l)},render:g}}function FC(i,e,t,n){const s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let c=l,u=!1;function f(N,O,Y,G,z){let ee=!1;if(o){const ue=d(G,Y,O);c!==ue&&(c=ue,p(c.object)),ee=v(N,G,Y,z),ee&&x(N,G,Y,z)}else{const ue=O.wireframe===!0;(c.geometry!==G.id||c.program!==Y.id||c.wireframe!==ue)&&(c.geometry=G.id,c.program=Y.id,c.wireframe=ue,ee=!0)}z!==null&&t.update(z,34963),(ee||u)&&(u=!1,M(N,O,Y,G),z!==null&&i.bindBuffer(34963,t.get(z).buffer))}function h(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(N){return n.isWebGL2?i.bindVertexArray(N):r.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?i.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function d(N,O,Y){const G=Y.wireframe===!0;let z=a[N.id];z===void 0&&(z={},a[N.id]=z);let ee=z[O.id];ee===void 0&&(ee={},z[O.id]=ee);let ue=ee[G];return ue===void 0&&(ue=m(h()),ee[G]=ue),ue}function m(N){const O=[],Y=[],G=[];for(let z=0;z<s;z++)O[z]=0,Y[z]=0,G[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Y,attributeDivisors:G,object:N,attributes:{},index:null}}function v(N,O,Y,G){const z=c.attributes,ee=O.attributes;let ue=0;const ve=Y.getAttributes();for(const H in ve)if(ve[H].location>=0){const pe=z[H];let L=ee[H];if(L===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(L=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(L=N.instanceColor)),pe===void 0||pe.attribute!==L||L&&pe.data!==L.data)return!0;ue++}return c.attributesNum!==ue||c.index!==G}function x(N,O,Y,G){const z={},ee=O.attributes;let ue=0;const ve=Y.getAttributes();for(const H in ve)if(ve[H].location>=0){let pe=ee[H];pe===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(pe=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(pe=N.instanceColor));const L={};L.attribute=pe,pe&&pe.data&&(L.data=pe.data),z[H]=L,ue++}c.attributes=z,c.attributesNum=ue,c.index=G}function _(){const N=c.newAttributes;for(let O=0,Y=N.length;O<Y;O++)N[O]=0}function b(N){y(N,0)}function y(N,O){const Y=c.newAttributes,G=c.enabledAttributes,z=c.attributeDivisors;Y[N]=1,G[N]===0&&(i.enableVertexAttribArray(N),G[N]=1),z[N]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,O),z[N]=O)}function E(){const N=c.newAttributes,O=c.enabledAttributes;for(let Y=0,G=O.length;Y<G;Y++)O[Y]!==N[Y]&&(i.disableVertexAttribArray(Y),O[Y]=0)}function A(N,O,Y,G,z,ee){n.isWebGL2===!0&&(Y===5124||Y===5125)?i.vertexAttribIPointer(N,O,Y,z,ee):i.vertexAttribPointer(N,O,Y,G,z,ee)}function M(N,O,Y,G){if(n.isWebGL2===!1&&(N.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const z=G.attributes,ee=Y.getAttributes(),ue=O.defaultAttributeValues;for(const ve in ee){const H=ee[ve];if(H.location>=0){let le=z[ve];if(le===void 0&&(ve==="instanceMatrix"&&N.instanceMatrix&&(le=N.instanceMatrix),ve==="instanceColor"&&N.instanceColor&&(le=N.instanceColor)),le!==void 0){const pe=le.normalized,L=le.itemSize,Z=t.get(le);if(Z===void 0)continue;const K=Z.buffer,oe=Z.type,de=Z.bytesPerElement;if(le.isInterleavedBufferAttribute){const xe=le.data,Me=xe.stride,C=le.offset;if(xe.isInstancedInterleavedBuffer){for(let I=0;I<H.locationSize;I++)y(H.location+I,xe.meshPerAttribute);N.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let I=0;I<H.locationSize;I++)b(H.location+I);i.bindBuffer(34962,K);for(let I=0;I<H.locationSize;I++)A(H.location+I,L/H.locationSize,oe,pe,Me*de,(C+L/H.locationSize*I)*de)}else{if(le.isInstancedBufferAttribute){for(let xe=0;xe<H.locationSize;xe++)y(H.location+xe,le.meshPerAttribute);N.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let xe=0;xe<H.locationSize;xe++)b(H.location+xe);i.bindBuffer(34962,K);for(let xe=0;xe<H.locationSize;xe++)A(H.location+xe,L/H.locationSize,oe,pe,L*de,L/H.locationSize*xe*de)}}else if(ue!==void 0){const pe=ue[ve];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(H.location,pe);break;case 3:i.vertexAttrib3fv(H.location,pe);break;case 4:i.vertexAttrib4fv(H.location,pe);break;default:i.vertexAttrib1fv(H.location,pe)}}}}E()}function T(){W();for(const N in a){const O=a[N];for(const Y in O){const G=O[Y];for(const z in G)g(G[z].object),delete G[z];delete O[Y]}delete a[N]}}function P(N){if(a[N.id]===void 0)return;const O=a[N.id];for(const Y in O){const G=O[Y];for(const z in G)g(G[z].object),delete G[z];delete O[Y]}delete a[N.id]}function D(N){for(const O in a){const Y=a[O];if(Y[N.id]===void 0)continue;const G=Y[N.id];for(const z in G)g(G[z].object),delete G[z];delete Y[N.id]}}function W(){U(),u=!0,c!==l&&(c=l,p(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:W,resetDefaultState:U,dispose:T,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:b,disableUnusedAttributes:E}}function kC(i,e,t,n){const s=n.isWebGL2;let r;function o(c){r=c}function a(c,u){i.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let h,p;if(s)h=i,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](r,c,u,f),t.update(u,r,f)}this.setMode=o,this.render=a,this.renderInstances=l}function BC(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(34930),h=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),d=i.getParameter(34921),m=i.getParameter(36347),v=i.getParameter(36348),x=i.getParameter(36349),_=h>0,b=o||e.has("OES_texture_float"),y=_&&b,E=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:y,maxSamples:E}}function zC(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new pr,a=new gn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||s;return s=h,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,d=f.clipIntersection,m=f.clipShadows,v=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:n,_=x*4;let b=v.clippingState||null;l.value=b,b=u(g,h,_,p);for(let y=0;y!==_;++y)b[y]=t[y];v.clippingState=b,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,g){const d=f!==null?f.length:0;let m=null;if(d!==0){if(m=l.value,g!==!0||m===null){const v=p+d*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<v)&&(m=new Float32Array(v));for(let _=0,b=p;_!==d;++_,b+=4)o.copy(f[_]).applyMatrix4(x,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}}function VC(i){let e=new WeakMap;function t(o,a){return a===au?o.mapping=Zo:a===lu&&(o.mapping=Jo),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===au||a===lu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new eA(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Wl extends wp{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xo=4,Wg=[.125,.215,.35,.446,.526,.582],vr=20,sh=new Wl,jg=new Pe;let rh=null;const mr=(1+Math.sqrt(5))/2,no=1/mr,Xg=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,mr,no),new B(0,mr,-no),new B(no,0,mr),new B(-no,0,mr),new B(mr,no,0),new B(-mr,no,0)];class od{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){rh=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$g(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rh),e.scissorTest=!1,Mc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zo||e.mapping===Jo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rh=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:is,format:Fn,encoding:Js,depthBuffer:!1},s=Yg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yg(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GC(r)),this._blurMaterial=HC(r,e,t)}return s}_compileMaterial(e){const t=new sn(this._lodPlanes[0],e);this._renderer.compile(t,sh)}_sceneToCubeUV(e,t,n,s){const a=new mn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(jg),u.toneMapping=as,u.autoClear=!1;const p=new yr({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),g=new sn(new ha,p);let d=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,d=!0):(p.color.copy(jg),d=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):x===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const _=this._cubeSize;Mc(s,x*_,v>2?_:0,_,_),u.setRenderTarget(s),d&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Zo||e.mapping===Jo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$g()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qg());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new sn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Mc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,sh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Xg[(s-1)%Xg.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new sn(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*vr-1),d=r/g,m=isFinite(r)?1+Math.floor(u*d):vr;m>vr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vr}`);const v=[];let x=0;for(let A=0;A<vr;++A){const M=A/d,T=Math.exp(-M*M/2);v.push(T),A===0?x+=T:A<m&&(x+=2*T)}for(let A=0;A<v.length;A++)v[A]=v[A]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=v,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-n;const b=this._sizeLods[s],y=3*b*(s>_-xo?s-_+xo:0),E=4*(this._cubeSize-b);Mc(t,y,E,3*b,2*b),l.setRenderTarget(t),l.render(f,sh)}}function GC(i){const e=[],t=[],n=[];let s=i;const r=i-xo+1+Wg.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-xo?l=Wg[o-i+xo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,d=3,m=2,v=1,x=new Float32Array(d*g*p),_=new Float32Array(m*g*p),b=new Float32Array(v*g*p);for(let E=0;E<p;E++){const A=E%3*2/3-1,M=E>2?0:-1,T=[A,M,0,A+2/3,M,0,A+2/3,M+1,0,A,M,0,A+2/3,M+1,0,A,M+1,0];x.set(T,d*g*E),_.set(h,m*g*E);const P=[E,E,E,E,E,E];b.set(P,v*g*E)}const y=new Wn;y.setAttribute("position",new vn(x,d)),y.setAttribute("uv",new vn(_,m)),y.setAttribute("faceIndex",new vn(b,v)),e.push(y),s>xo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Yg(i,e,t){const n=new Bi(i,e,t);return n.texture.mapping=Gl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mc(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function HC(i,e,t){const n=new Float32Array(vr),s=new B(0,1,0);return new hs({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ep(),fragmentShader:`

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
		`,blending:Ys,depthTest:!1,depthWrite:!1})}function qg(){return new hs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ep(),fragmentShader:`

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
		`,blending:Ys,depthTest:!1,depthWrite:!1})}function $g(){return new hs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ep(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ys,depthTest:!1,depthWrite:!1})}function Ep(){return`

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
	`}function WC(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===au||l===lu,u=l===Zo||l===Jo;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new od(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new od(i));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function jC(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function XC(i,e,t,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const p=f.morphAttributes;for(const g in p){const d=p[g];for(let m=0,v=d.length;m<v;m++)e.update(d[m],34962)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let d=0;if(p!==null){const x=p.array;d=p.version;for(let _=0,b=x.length;_<b;_+=3){const y=x[_+0],E=x[_+1],A=x[_+2];h.push(y,E,E,A,A,y)}}else{const x=g.array;d=g.version;for(let _=0,b=x.length/3-1;_<b;_+=3){const y=_+0,E=_+1,A=_+2;h.push(y,E,E,A,A,y)}}const m=new(kx(h)?jx:Wx)(h,1);m.version=d;const v=r.get(f);v&&e.remove(v),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function YC(i,e,t,n){const s=n.isWebGL2;let r;function o(h){r=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){i.drawElements(r,p,a,h*l),t.update(p,r,1)}function f(h,p,g){if(g===0)return;let d,m;if(s)d=i,m="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,p,a,h*l,g),t.update(p,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function qC(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function $C(i,e){return i[0]-e[0]}function KC(i,e){return Math.abs(e[1])-Math.abs(i[1])}function ZC(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new ut,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let d=r.get(u);if(d===void 0||d.count!==g){let N=function(){W.dispose(),r.delete(u),u.removeEventListener("dispose",N)};d!==void 0&&d.texture.dispose();const x=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let M=0;x===!0&&(M=1),_===!0&&(M=2),b===!0&&(M=3);let T=u.attributes.position.count*M,P=1;T>e.maxTextureSize&&(P=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const D=new Float32Array(T*P*4*g),W=new Vx(D,T,P,g);W.type=di,W.needsUpdate=!0;const U=M*4;for(let O=0;O<g;O++){const Y=y[O],G=E[O],z=A[O],ee=T*P*4*O;for(let ue=0;ue<Y.count;ue++){const ve=ue*U;x===!0&&(o.fromBufferAttribute(Y,ue),D[ee+ve+0]=o.x,D[ee+ve+1]=o.y,D[ee+ve+2]=o.z,D[ee+ve+3]=0),_===!0&&(o.fromBufferAttribute(G,ue),D[ee+ve+4]=o.x,D[ee+ve+5]=o.y,D[ee+ve+6]=o.z,D[ee+ve+7]=0),b===!0&&(o.fromBufferAttribute(z,ue),D[ee+ve+8]=o.x,D[ee+ve+9]=o.y,D[ee+ve+10]=o.z,D[ee+ve+11]=z.itemSize===4?o.w:1)}}d={count:g,texture:W,size:new Ve(T,P)},r.set(u,d),u.addEventListener("dispose",N)}let m=0;for(let x=0;x<h.length;x++)m+=h[x];const v=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",v),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}else{const p=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==p){g=[];for(let _=0;_<p;_++)g[_]=[_,0];n[u.id]=g}for(let _=0;_<p;_++){const b=g[_];b[0]=_,b[1]=h[_]}g.sort(KC);for(let _=0;_<8;_++)_<p&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort($C);const d=u.morphAttributes.position,m=u.morphAttributes.normal;let v=0;for(let _=0;_<8;_++){const b=a[_],y=b[0],E=b[1];y!==Number.MAX_SAFE_INTEGER&&E?(d&&u.getAttribute("morphTarget"+_)!==d[y]&&u.setAttribute("morphTarget"+_,d[y]),m&&u.getAttribute("morphNormal"+_)!==m[y]&&u.setAttribute("morphNormal"+_,m[y]),s[_]=E,v+=E):(d&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),s[_]=0)}const x=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function JC(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const $x=new Jt,Kx=new Vx,Zx=new kE,Jx=new Yx,Kg=[],Zg=[],Jg=new Float32Array(16),Qg=new Float32Array(9),e0=new Float32Array(4);function da(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Kg[s];if(r===void 0&&(r=new Float32Array(s),Kg[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function of(i,e){let t=Zg[e];t===void 0&&(t=new Int32Array(e),Zg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function QC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function eR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function tR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function nR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function iR(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,n))return;e0.set(n),i.uniformMatrix2fv(this.addr,!1,e0),kt(t,n)}}function sR(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,n))return;Qg.set(n),i.uniformMatrix3fv(this.addr,!1,Qg),kt(t,n)}}function rR(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,n))return;Jg.set(n),i.uniformMatrix4fv(this.addr,!1,Jg),kt(t,n)}}function oR(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function aR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function lR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function cR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function uR(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function fR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function hR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function dR(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function pR(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||$x,s)}function mR(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Zx,s)}function gR(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Jx,s)}function _R(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Kx,s)}function vR(i){switch(i){case 5126:return QC;case 35664:return eR;case 35665:return tR;case 35666:return nR;case 35674:return iR;case 35675:return sR;case 35676:return rR;case 5124:case 35670:return oR;case 35667:case 35671:return aR;case 35668:case 35672:return lR;case 35669:case 35673:return cR;case 5125:return uR;case 36294:return fR;case 36295:return hR;case 36296:return dR;case 35678:case 36198:case 36298:case 36306:case 35682:return pR;case 35679:case 36299:case 36307:return mR;case 35680:case 36300:case 36308:case 36293:return gR;case 36289:case 36303:case 36311:case 36292:return _R}}function xR(i,e){i.uniform1fv(this.addr,e)}function bR(i,e){const t=da(e,this.size,2);i.uniform2fv(this.addr,t)}function yR(i,e){const t=da(e,this.size,3);i.uniform3fv(this.addr,t)}function MR(i,e){const t=da(e,this.size,4);i.uniform4fv(this.addr,t)}function SR(i,e){const t=da(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function wR(i,e){const t=da(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function TR(i,e){const t=da(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ER(i,e){i.uniform1iv(this.addr,e)}function AR(i,e){i.uniform2iv(this.addr,e)}function CR(i,e){i.uniform3iv(this.addr,e)}function RR(i,e){i.uniform4iv(this.addr,e)}function LR(i,e){i.uniform1uiv(this.addr,e)}function PR(i,e){i.uniform2uiv(this.addr,e)}function IR(i,e){i.uniform3uiv(this.addr,e)}function DR(i,e){i.uniform4uiv(this.addr,e)}function NR(i,e,t){const n=this.cache,s=e.length,r=of(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||$x,r[o])}function OR(i,e,t){const n=this.cache,s=e.length,r=of(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Zx,r[o])}function UR(i,e,t){const n=this.cache,s=e.length,r=of(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Jx,r[o])}function FR(i,e,t){const n=this.cache,s=e.length,r=of(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Kx,r[o])}function kR(i){switch(i){case 5126:return xR;case 35664:return bR;case 35665:return yR;case 35666:return MR;case 35674:return SR;case 35675:return wR;case 35676:return TR;case 5124:case 35670:return ER;case 35667:case 35671:return AR;case 35668:case 35672:return CR;case 35669:case 35673:return RR;case 5125:return LR;case 36294:return PR;case 36295:return IR;case 36296:return DR;case 35678:case 36198:case 36298:case 36306:case 35682:return NR;case 35679:case 36299:case 36307:return OR;case 35680:case 36300:case 36308:case 36293:return UR;case 36289:case 36303:case 36311:case 36292:return FR}}class BR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=vR(t.type)}}class zR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=kR(t.type)}}class VR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const oh=/(\w+)(\])?(\[|\.)?/g;function t0(i,e){i.seq.push(e),i.map[e.id]=e}function GR(i,e,t){const n=i.name,s=n.length;for(oh.lastIndex=0;;){const r=oh.exec(n),o=oh.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){t0(t,c===void 0?new BR(a,i,e):new zR(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new VR(a),t0(t,f)),t=f}}}class zc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);GR(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function n0(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let HR=0;function WR(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function jR(i){switch(i){case Js:return["Linear","( value )"];case nt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function i0(i,e,t){const n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+WR(i.getShaderSource(e),o)}else return s}function XR(i,e){const t=jR(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function YR(i,e){let t;switch(e){case GT:t="Linear";break;case HT:t="Reinhard";break;case WT:t="OptimizedCineon";break;case jT:t="ACESFilmic";break;case XT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qR(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(za).join(`
`)}function $R(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function KR(i,e){const t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function za(i){return i!==""}function s0(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function r0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZR=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(i){return i.replace(ZR,JR)}function JR(i,e){const t=ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ad(t)}const QR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function o0(i){return i.replace(QR,e3)}function e3(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function a0(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function t3(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ax?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===bT?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ba&&(e="SHADOWMAP_TYPE_VSM"),e}function n3(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zo:case Jo:e="ENVMAP_TYPE_CUBE";break;case Gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function i3(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Jo:e="ENVMAP_MODE_REFRACTION";break}return e}function s3(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lx:e="ENVMAP_BLENDING_MULTIPLY";break;case zT:e="ENVMAP_BLENDING_MIX";break;case VT:e="ENVMAP_BLENDING_ADD";break}return e}function r3(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function o3(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=t3(t),c=n3(t),u=i3(t),f=s3(t),h=r3(t),p=t.isWebGL2?"":qR(t),g=$R(r),d=s.createProgram();let m,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(za).join(`
`),m.length>0&&(m+=`
`),v=[p,g].filter(za).join(`
`),v.length>0&&(v+=`
`)):(m=[a0(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(za).join(`
`),v=[p,a0(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==as?"#define TONE_MAPPING":"",t.toneMapping!==as?ze.tonemapping_pars_fragment:"",t.toneMapping!==as?YR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.encodings_pars_fragment,XR("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(za).join(`
`)),o=ad(o),o=s0(o,t),o=r0(o,t),a=ad(a),a=s0(a,t),a=r0(a,t),o=o0(o),a=o0(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["#define varying in",t.glslVersion===Pg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const _=x+m+o,b=x+v+a,y=n0(s,35633,_),E=n0(s,35632,b);if(s.attachShader(d,y),s.attachShader(d,E),t.index0AttributeName!==void 0?s.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d),i.debug.checkShaderErrors){const T=s.getProgramInfoLog(d).trim(),P=s.getShaderInfoLog(y).trim(),D=s.getShaderInfoLog(E).trim();let W=!0,U=!0;if(s.getProgramParameter(d,35714)===!1){W=!1;const N=i0(s,y,"vertex"),O=i0(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,35715)+`

Program Info Log: `+T+`
`+N+`
`+O)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(P===""||D==="")&&(U=!1);U&&(this.diagnostics={runnable:W,programLog:T,vertexShader:{log:P,prefix:m},fragmentShader:{log:D,prefix:v}})}s.deleteShader(y),s.deleteShader(E);let A;this.getUniforms=function(){return A===void 0&&(A=new zc(s,d)),A};let M;return this.getAttributes=function(){return M===void 0&&(M=KR(s,d)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=HR++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=y,this.fragmentShader=E,this}let a3=0;class l3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new c3(e),t.set(e,n)),n}}class c3{constructor(e){this.id=a3++,this.code=e,this.usedTimes=0}}function u3(i,e,t,n,s,r,o){const a=new Gx,l=new l3,c=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(M,T,P,D,W){const U=D.fog,N=W.geometry,O=M.isMeshStandardMaterial?D.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||O),G=Y&&Y.mapping===Gl?Y.image.height:null,z=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ee=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ue=ee!==void 0?ee.length:0;let ve=0;N.morphAttributes.position!==void 0&&(ve=1),N.morphAttributes.normal!==void 0&&(ve=2),N.morphAttributes.color!==void 0&&(ve=3);let H,le,pe,L;if(z){const Me=Ii[z];H=Me.vertexShader,le=Me.fragmentShader}else H=M.vertexShader,le=M.fragmentShader,l.update(M),pe=l.getVertexShaderID(M),L=l.getFragmentShaderID(M);const Z=i.getRenderTarget(),K=M.alphaTest>0,oe=M.clearcoat>0,de=M.iridescence>0;return{isWebGL2:u,shaderID:z,shaderName:M.type,vertexShader:H,fragmentShader:le,defines:M.defines,customVertexShaderID:pe,customFragmentShaderID:L,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:W.isInstancedMesh===!0,instancingColor:W.isInstancedMesh===!0&&W.instanceColor!==null,supportsVertexTextures:h,outputEncoding:Z===null?i.outputEncoding:Z.isXRRenderTarget===!0?Z.texture.encoding:Js,map:!!M.map,matcap:!!M.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:G,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===mE,tangentSpaceNormalMap:M.normalMapType===yp,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===nt,clearcoat:oe,clearcoatMap:oe&&!!M.clearcoatMap,clearcoatRoughnessMap:oe&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:oe&&!!M.clearcoatNormalMap,iridescence:de,iridescenceMap:de&&!!M.iridescenceMap,iridescenceThicknessMap:de&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===Ro,alphaMap:!!M.alphaMap,alphaTest:K,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!N.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!U,useFog:M.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:f,skinning:W.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ve,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:M.toneMapped?i.toneMapping:as,useLegacyLights:i.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ns,flipSided:M.side===Bn,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)T.push(P),T.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(v(T,M),x(T,M),T.push(i.outputEncoding)),T.push(M.customProgramCacheKey),T.join()}function v(M,T){M.push(T.precision),M.push(T.outputEncoding),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.combine),M.push(T.vertexUvs),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function x(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),M.push(a.mask)}function _(M){const T=g[M.type];let P;if(T){const D=Ii[T];P=KE.clone(D.uniforms)}else P=M.uniforms;return P}function b(M,T){let P;for(let D=0,W=c.length;D<W;D++){const U=c[D];if(U.cacheKey===T){P=U,++P.usedTimes;break}}return P===void 0&&(P=new o3(i,T,M,r),c.push(P)),P}function y(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function A(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:_,acquireProgram:b,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:A}}function f3(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function h3(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function l0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function c0(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,h,p,g,d,m){let v=i[e];return v===void 0?(v={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:d,group:m},i[e]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=p,v.groupOrder=g,v.renderOrder=f.renderOrder,v.z=d,v.group=m),e++,v}function a(f,h,p,g,d,m){const v=o(f,h,p,g,d,m);p.transmission>0?n.push(v):p.transparent===!0?s.push(v):t.push(v)}function l(f,h,p,g,d,m){const v=o(f,h,p,g,d,m);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function c(f,h){t.length>1&&t.sort(f||h3),n.length>1&&n.sort(h||l0),s.length>1&&s.sort(h||l0)}function u(){for(let f=e,h=i.length;f<h;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function d3(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new c0,i.set(n,[o])):s>=r.length?(o=new c0,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function p3(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Pe};break;case"SpotLight":t={position:new B,direction:new B,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function m3(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let g3=0;function _3(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function v3(i,e){const t=new p3,n=m3(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new B);const r=new B,o=new je,a=new je;function l(u,f){let h=0,p=0,g=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let d=0,m=0,v=0,x=0,_=0,b=0,y=0,E=0,A=0,M=0;u.sort(_3);const T=f===!0?Math.PI:1;for(let D=0,W=u.length;D<W;D++){const U=u[D],N=U.color,O=U.intensity,Y=U.distance,G=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=N.r*O*T,p+=N.g*O*T,g+=N.b*O*T;else if(U.isLightProbe)for(let z=0;z<9;z++)s.probe[z].addScaledVector(U.sh.coefficients[z],O);else if(U.isDirectionalLight){const z=t.get(U);if(z.color.copy(U.color).multiplyScalar(U.intensity*T),U.castShadow){const ee=U.shadow,ue=n.get(U);ue.shadowBias=ee.bias,ue.shadowNormalBias=ee.normalBias,ue.shadowRadius=ee.radius,ue.shadowMapSize=ee.mapSize,s.directionalShadow[d]=ue,s.directionalShadowMap[d]=G,s.directionalShadowMatrix[d]=U.shadow.matrix,b++}s.directional[d]=z,d++}else if(U.isSpotLight){const z=t.get(U);z.position.setFromMatrixPosition(U.matrixWorld),z.color.copy(N).multiplyScalar(O*T),z.distance=Y,z.coneCos=Math.cos(U.angle),z.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),z.decay=U.decay,s.spot[v]=z;const ee=U.shadow;if(U.map&&(s.spotLightMap[A]=U.map,A++,ee.updateMatrices(U),U.castShadow&&M++),s.spotLightMatrix[v]=ee.matrix,U.castShadow){const ue=n.get(U);ue.shadowBias=ee.bias,ue.shadowNormalBias=ee.normalBias,ue.shadowRadius=ee.radius,ue.shadowMapSize=ee.mapSize,s.spotShadow[v]=ue,s.spotShadowMap[v]=G,E++}v++}else if(U.isRectAreaLight){const z=t.get(U);z.color.copy(N).multiplyScalar(O),z.halfWidth.set(U.width*.5,0,0),z.halfHeight.set(0,U.height*.5,0),s.rectArea[x]=z,x++}else if(U.isPointLight){const z=t.get(U);if(z.color.copy(U.color).multiplyScalar(U.intensity*T),z.distance=U.distance,z.decay=U.decay,U.castShadow){const ee=U.shadow,ue=n.get(U);ue.shadowBias=ee.bias,ue.shadowNormalBias=ee.normalBias,ue.shadowRadius=ee.radius,ue.shadowMapSize=ee.mapSize,ue.shadowCameraNear=ee.camera.near,ue.shadowCameraFar=ee.camera.far,s.pointShadow[m]=ue,s.pointShadowMap[m]=G,s.pointShadowMatrix[m]=U.shadow.matrix,y++}s.point[m]=z,m++}else if(U.isHemisphereLight){const z=t.get(U);z.skyColor.copy(U.color).multiplyScalar(O*T),z.groundColor.copy(U.groundColor).multiplyScalar(O*T),s.hemi[_]=z,_++}}x>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_FLOAT_1,s.rectAreaLTC2=Se.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_HALF_1,s.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=p,s.ambient[2]=g;const P=s.hash;(P.directionalLength!==d||P.pointLength!==m||P.spotLength!==v||P.rectAreaLength!==x||P.hemiLength!==_||P.numDirectionalShadows!==b||P.numPointShadows!==y||P.numSpotShadows!==E||P.numSpotMaps!==A)&&(s.directional.length=d,s.spot.length=v,s.rectArea.length=x,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=y,s.pointShadowMap.length=y,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=y,s.spotLightMatrix.length=E+A-M,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=M,P.directionalLength=d,P.pointLength=m,P.spotLength=v,P.rectAreaLength=x,P.hemiLength=_,P.numDirectionalShadows=b,P.numPointShadows=y,P.numSpotShadows=E,P.numSpotMaps=A,s.version=g3++)}function c(u,f){let h=0,p=0,g=0,d=0,m=0;const v=f.matrixWorldInverse;for(let x=0,_=u.length;x<_;x++){const b=u[x];if(b.isDirectionalLight){const y=s.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(v),h++}else if(b.isSpotLight){const y=s.spot[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(v),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(v),g++}else if(b.isRectAreaLight){const y=s.rectArea[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(v),a.identity(),o.copy(b.matrixWorld),o.premultiply(v),a.extractRotation(o),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),d++}else if(b.isPointLight){const y=s.point[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(v),p++}else if(b.isHemisphereLight){const y=s.hemi[m];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(v),m++}}}return{setup:l,setupView:c,state:s}}function u0(i,e){const t=new v3(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(f){n.push(f)}function a(f){s.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function x3(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new u0(i,e),t.set(r,[l])):o>=a.length?(l=new u0(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class b3 extends xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class y3 extends xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new B,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const M3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S3=`uniform sampler2D shadow_pass;
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
}`;function w3(i,e,t){let n=new Tp;const s=new Ve,r=new Ve,o=new ut,a=new b3({depthPacking:pE}),l=new y3,c={},u=t.maxTextureSize,f={[fs]:Bn,[Bn]:fs,[ns]:ns},h=new hs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:M3,fragmentShader:S3}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Wn;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new sn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ax,this.render=function(b,y,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const A=i.getRenderTarget(),M=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Ys),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let D=0,W=b.length;D<W;D++){const U=b[D],N=U.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const O=N.getFrameExtents();if(s.multiply(O),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/O.x),s.x=r.x*O.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/O.y),s.y=r.y*O.y,N.mapSize.y=r.y)),N.map===null){const G=this.type!==Ba?{minFilter:Lt,magFilter:Lt}:{};N.map=new Bi(s.x,s.y,G),N.map.texture.name=U.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const Y=N.getViewportCount();for(let G=0;G<Y;G++){const z=N.getViewport(G);o.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),P.viewport(o),N.updateMatrices(U,G),n=N.getFrustum(),_(y,E,N.camera,U,this.type)}N.isPointLightShadow!==!0&&this.type===Ba&&v(N,E),N.needsUpdate=!1}m.needsUpdate=!1,i.setRenderTarget(A,M,T)};function v(b,y){const E=e.update(d);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Bi(s.x,s.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(y,null,E,h,d,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(y,null,E,p,d,null)}function x(b,y,E,A,M,T){let P=null;const D=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)P=D;else if(P=E.isPointLight===!0?l:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const W=P.uuid,U=y.uuid;let N=c[W];N===void 0&&(N={},c[W]=N);let O=N[U];O===void 0&&(O=P.clone(),N[U]=O),P=O}return P.visible=y.visible,P.wireframe=y.wireframe,T===Ba?P.side=y.shadowSide!==null?y.shadowSide:y.side:P.side=y.shadowSide!==null?y.shadowSide:f[y.side],P.alphaMap=y.alphaMap,P.alphaTest=y.alphaTest,P.map=y.map,P.clipShadows=y.clipShadows,P.clippingPlanes=y.clippingPlanes,P.clipIntersection=y.clipIntersection,P.displacementMap=y.displacementMap,P.displacementScale=y.displacementScale,P.displacementBias=y.displacementBias,P.wireframeLinewidth=y.wireframeLinewidth,P.linewidth=y.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(E.matrixWorld),P.nearDistance=A,P.farDistance=M),P}function _(b,y,E,A,M){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Ba)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);const D=e.update(b),W=b.material;if(Array.isArray(W)){const U=D.groups;for(let N=0,O=U.length;N<O;N++){const Y=U[N],G=W[Y.materialIndex];if(G&&G.visible){const z=x(b,G,A,E.near,E.far,M);i.renderBufferDirect(E,null,D,z,b,Y)}}}else if(W.visible){const U=x(b,W,A,E.near,E.far,M);i.renderBufferDirect(E,null,D,U,b,null)}}const P=b.children;for(let D=0,W=P.length;D<W;D++)_(P[D],y,E,A,M)}}function T3(i,e,t){const n=t.isWebGL2;function s(){let F=!1;const se=new ut;let ge=null;const Ee=new ut(0,0,0,0);return{setMask:function(Re){ge!==Re&&!F&&(i.colorMask(Re,Re,Re,Re),ge=Re)},setLocked:function(Re){F=Re},setClear:function(Re,pt,zt,ln,yi){yi===!0&&(Re*=ln,pt*=ln,zt*=ln),se.set(Re,pt,zt,ln),Ee.equals(se)===!1&&(i.clearColor(Re,pt,zt,ln),Ee.copy(se))},reset:function(){F=!1,ge=null,Ee.set(-1,0,0,0)}}}function r(){let F=!1,se=null,ge=null,Ee=null;return{setTest:function(Re){Re?K(2929):oe(2929)},setMask:function(Re){se!==Re&&!F&&(i.depthMask(Re),se=Re)},setFunc:function(Re){if(ge!==Re){switch(Re){case DT:i.depthFunc(512);break;case NT:i.depthFunc(519);break;case OT:i.depthFunc(513);break;case ed:i.depthFunc(515);break;case UT:i.depthFunc(514);break;case FT:i.depthFunc(518);break;case kT:i.depthFunc(516);break;case BT:i.depthFunc(517);break;default:i.depthFunc(515)}ge=Re}},setLocked:function(Re){F=Re},setClear:function(Re){Ee!==Re&&(i.clearDepth(Re),Ee=Re)},reset:function(){F=!1,se=null,ge=null,Ee=null}}}function o(){let F=!1,se=null,ge=null,Ee=null,Re=null,pt=null,zt=null,ln=null,yi=null;return{setTest:function(St){F||(St?K(2960):oe(2960))},setMask:function(St){se!==St&&!F&&(i.stencilMask(St),se=St)},setFunc:function(St,jn,Mi){(ge!==St||Ee!==jn||Re!==Mi)&&(i.stencilFunc(St,jn,Mi),ge=St,Ee=jn,Re=Mi)},setOp:function(St,jn,Mi){(pt!==St||zt!==jn||ln!==Mi)&&(i.stencilOp(St,jn,Mi),pt=St,zt=jn,ln=Mi)},setLocked:function(St){F=St},setClear:function(St){yi!==St&&(i.clearStencil(St),yi=St)},reset:function(){F=!1,se=null,ge=null,Ee=null,Re=null,pt=null,zt=null,ln=null,yi=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,d=[],m=null,v=!1,x=null,_=null,b=null,y=null,E=null,A=null,M=null,T=!1,P=null,D=null,W=null,U=null,N=null;const O=i.getParameter(35661);let Y=!1,G=0;const z=i.getParameter(7938);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),Y=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Y=G>=2);let ee=null,ue={};const ve=i.getParameter(3088),H=i.getParameter(2978),le=new ut().fromArray(ve),pe=new ut().fromArray(H);function L(F,se,ge){const Ee=new Uint8Array(4),Re=i.createTexture();i.bindTexture(F,Re),i.texParameteri(F,10241,9728),i.texParameteri(F,10240,9728);for(let pt=0;pt<ge;pt++)i.texImage2D(se+pt,0,6408,1,1,0,6408,5121,Ee);return Re}const Z={};Z[3553]=L(3553,3553,1),Z[34067]=L(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),K(2929),l.setFunc(ed),re(!1),fe(ng),K(2884),X(Ys);function K(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function oe(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function de(F,se){return p[F]!==se?(i.bindFramebuffer(F,se),p[F]=se,n&&(F===36009&&(p[36160]=se),F===36160&&(p[36009]=se)),!0):!1}function xe(F,se){let ge=d,Ee=!1;if(F)if(ge=g.get(se),ge===void 0&&(ge=[],g.set(se,ge)),F.isWebGLMultipleRenderTargets){const Re=F.texture;if(ge.length!==Re.length||ge[0]!==36064){for(let pt=0,zt=Re.length;pt<zt;pt++)ge[pt]=36064+pt;ge.length=Re.length,Ee=!0}}else ge[0]!==36064&&(ge[0]=36064,Ee=!0);else ge[0]!==1029&&(ge[0]=1029,Ee=!0);Ee&&(t.isWebGL2?i.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function Me(F){return m!==F?(i.useProgram(F),m=F,!0):!1}const C={[lo]:32774,[MT]:32778,[ST]:32779};if(n)C[og]=32775,C[ag]=32776;else{const F=e.get("EXT_blend_minmax");F!==null&&(C[og]=F.MIN_EXT,C[ag]=F.MAX_EXT)}const I={[wT]:0,[TT]:1,[ET]:768,[Cx]:770,[IT]:776,[LT]:774,[CT]:772,[AT]:769,[Rx]:771,[PT]:775,[RT]:773};function X(F,se,ge,Ee,Re,pt,zt,ln){if(F===Ys){v===!0&&(oe(3042),v=!1);return}if(v===!1&&(K(3042),v=!0),F!==yT){if(F!==x||ln!==T){if((_!==lo||E!==lo)&&(i.blendEquation(32774),_=lo,E=lo),ln)switch(F){case Ro:i.blendFuncSeparate(1,771,1,771);break;case ig:i.blendFunc(1,1);break;case sg:i.blendFuncSeparate(0,769,0,1);break;case rg:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ro:i.blendFuncSeparate(770,771,1,771);break;case ig:i.blendFunc(770,1);break;case sg:i.blendFuncSeparate(0,769,0,1);break;case rg:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,y=null,A=null,M=null,x=F,T=ln}return}Re=Re||se,pt=pt||ge,zt=zt||Ee,(se!==_||Re!==E)&&(i.blendEquationSeparate(C[se],C[Re]),_=se,E=Re),(ge!==b||Ee!==y||pt!==A||zt!==M)&&(i.blendFuncSeparate(I[ge],I[Ee],I[pt],I[zt]),b=ge,y=Ee,A=pt,M=zt),x=F,T=!1}function J(F,se){F.side===ns?oe(2884):K(2884);let ge=F.side===Bn;se&&(ge=!ge),re(ge),F.blending===Ro&&F.transparent===!1?X(Ys):X(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const Ee=F.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ce(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?K(32926):oe(32926)}function re(F){P!==F&&(F?i.frontFace(2304):i.frontFace(2305),P=F)}function fe(F){F!==vT?(K(2884),F!==D&&(F===ng?i.cullFace(1029):F===xT?i.cullFace(1028):i.cullFace(1032))):oe(2884),D=F}function me(F){F!==W&&(Y&&i.lineWidth(F),W=F)}function ce(F,se,ge){F?(K(32823),(U!==se||N!==ge)&&(i.polygonOffset(se,ge),U=se,N=ge)):oe(32823)}function _e(F){F?K(3089):oe(3089)}function Q(F){F===void 0&&(F=33984+O-1),ee!==F&&(i.activeTexture(F),ee=F)}function w(F,se,ge){ge===void 0&&(ee===null?ge=33984+O-1:ge=ee);let Ee=ue[ge];Ee===void 0&&(Ee={type:void 0,texture:void 0},ue[ge]=Ee),(Ee.type!==F||Ee.texture!==se)&&(ee!==ge&&(i.activeTexture(ge),ee=ge),i.bindTexture(F,se||Z[F]),Ee.type=F,Ee.texture=se)}function S(){const F=ue[ee];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function k(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(F){le.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),le.copy(F))}function Te(F){pe.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),pe.copy(F))}function Fe(F,se){let ge=f.get(se);ge===void 0&&(ge=new WeakMap,f.set(se,ge));let Ee=ge.get(F);Ee===void 0&&(Ee=i.getUniformBlockIndex(se,F.name),ge.set(F,Ee))}function ft(F,se){const Ee=f.get(se).get(F);u.get(se)!==Ee&&(i.uniformBlockBinding(se,Ee,F.__bindingPointIndex),u.set(se,Ee))}function Bt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ee=null,ue={},p={},g=new WeakMap,d=[],m=null,v=!1,x=null,_=null,b=null,y=null,E=null,A=null,M=null,T=!1,P=null,D=null,W=null,U=null,N=null,le.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:K,disable:oe,bindFramebuffer:de,drawBuffers:xe,useProgram:Me,setBlending:X,setMaterial:J,setFlipSided:re,setCullFace:fe,setLineWidth:me,setPolygonOffset:ce,setScissorTest:_e,activeTexture:Q,bindTexture:w,unbindTexture:S,compressedTexImage2D:k,compressedTexImage3D:q,texImage2D:Ae,texImage3D:Ie,updateUBOMapping:Fe,uniformBlockBinding:ft,texStorage2D:ie,texStorage3D:Le,texSubImage2D:ne,texSubImage3D:he,compressedTexSubImage2D:be,compressedTexSubImage3D:ye,scissor:De,viewport:Te,reset:Bt}}function E3(i,e,t,n,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,f=s.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,S){return v?new OffscreenCanvas(w,S):xl("canvas")}function _(w,S,k,q){let ne=1;if((w.width>q||w.height>q)&&(ne=q/Math.max(w.width,w.height)),ne<1||S===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const he=S?Fx:Math.floor,be=he(ne*w.width),ye=he(ne*w.height);d===void 0&&(d=x(be,ye));const ie=k?x(be,ye):d;return ie.width=be,ie.height=ye,ie.getContext("2d").drawImage(w,0,0,be,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+be+"x"+ye+")."),ie}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function b(w){return rd(w.width)&&rd(w.height)}function y(w){return a?!1:w.wrapS!==Sn||w.wrapT!==Sn||w.minFilter!==Lt&&w.minFilter!==Ut}function E(w,S){return w.generateMipmaps&&S&&w.minFilter!==Lt&&w.minFilter!==Ut}function A(w){i.generateMipmap(w)}function M(w,S,k,q,ne=!1){if(a===!1)return S;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let he=S;return S===6403&&(k===5126&&(he=33326),k===5131&&(he=33325),k===5121&&(he=33321)),S===33319&&(k===5126&&(he=33328),k===5131&&(he=33327),k===5121&&(he=33323)),S===6408&&(k===5126&&(he=34836),k===5131&&(he=34842),k===5121&&(he=q===nt&&ne===!1?35907:32856),k===32819&&(he=32854),k===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function T(w,S,k){return E(w,k)===!0||w.isFramebufferTexture&&w.minFilter!==Lt&&w.minFilter!==Ut?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function P(w){return w===Lt||w===td||w===Bc?9728:9729}function D(w){const S=w.target;S.removeEventListener("dispose",D),U(S),S.isVideoTexture&&g.delete(S)}function W(w){const S=w.target;S.removeEventListener("dispose",W),O(S)}function U(w){const S=n.get(w);if(S.__webglInit===void 0)return;const k=w.source,q=m.get(k);if(q){const ne=q[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&N(w),Object.keys(q).length===0&&m.delete(k)}n.remove(w)}function N(w){const S=n.get(w);i.deleteTexture(S.__webglTexture);const k=w.source,q=m.get(k);delete q[S.__cacheKey],o.memory.textures--}function O(w){const S=w.texture,k=n.get(w),q=n.get(S);if(q.__webglTexture!==void 0&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)i.deleteFramebuffer(k.__webglFramebuffer[ne]),k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer[ne]);else{if(i.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&i.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ne=0;ne<k.__webglColorRenderbuffer.length;ne++)k.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(k.__webglColorRenderbuffer[ne]);k.__webglDepthRenderbuffer&&i.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ne=0,he=S.length;ne<he;ne++){const be=n.get(S[ne]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(S[ne])}n.remove(S),n.remove(w)}let Y=0;function G(){Y=0}function z(){const w=Y;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),Y+=1,w}function ee(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.encoding),S.join()}function ue(w,S){const k=n.get(w);if(w.isVideoTexture&&_e(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(k,w,S);return}}t.bindTexture(3553,k.__webglTexture,33984+S)}function ve(w,S){const k=n.get(w);if(w.version>0&&k.__version!==w.version){oe(k,w,S);return}t.bindTexture(35866,k.__webglTexture,33984+S)}function H(w,S){const k=n.get(w);if(w.version>0&&k.__version!==w.version){oe(k,w,S);return}t.bindTexture(32879,k.__webglTexture,33984+S)}function le(w,S){const k=n.get(w);if(w.version>0&&k.__version!==w.version){de(k,w,S);return}t.bindTexture(34067,k.__webglTexture,33984+S)}const pe={[hi]:10497,[Sn]:33071,[cu]:33648},L={[Lt]:9728,[td]:9984,[Bc]:9986,[Ut]:9729,[Ix]:9985,[Zs]:9987};function Z(w,S,k){if(k?(i.texParameteri(w,10242,pe[S.wrapS]),i.texParameteri(w,10243,pe[S.wrapT]),(w===32879||w===35866)&&i.texParameteri(w,32882,pe[S.wrapR]),i.texParameteri(w,10240,L[S.magFilter]),i.texParameteri(w,10241,L[S.minFilter])):(i.texParameteri(w,10242,33071),i.texParameteri(w,10243,33071),(w===32879||w===35866)&&i.texParameteri(w,32882,33071),(S.wrapS!==Sn||S.wrapT!==Sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,10240,P(S.magFilter)),i.texParameteri(w,10241,P(S.minFilter)),S.minFilter!==Lt&&S.minFilter!==Ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Lt||S.minFilter!==Bc&&S.minFilter!==Zs||S.type===di&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===is&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(w,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function K(w,S){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",D));const q=S.source;let ne=m.get(q);ne===void 0&&(ne={},m.set(q,ne));const he=ee(S);if(he!==w.__cacheKey){ne[he]===void 0&&(ne[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ne[he].usedTimes++;const be=ne[w.__cacheKey];be!==void 0&&(ne[w.__cacheKey].usedTimes--,be.usedTimes===0&&N(S)),w.__cacheKey=he,w.__webglTexture=ne[he].texture}return k}function oe(w,S,k){let q=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=35866),S.isData3DTexture&&(q=32879);const ne=K(w,S),he=S.source;t.bindTexture(q,w.__webglTexture,33984+k);const be=n.get(he);if(he.version!==be.__version||ne===!0){t.activeTexture(33984+k),i.pixelStorei(37440,S.flipY),i.pixelStorei(37441,S.premultiplyAlpha),i.pixelStorei(3317,S.unpackAlignment),i.pixelStorei(37443,0);const ye=y(S)&&b(S.image)===!1;let ie=_(S.image,ye,!1,u);ie=Q(S,ie);const Le=b(ie)||a,Ae=r.convert(S.format,S.encoding);let Ie=r.convert(S.type),De=M(S.internalFormat,Ae,Ie,S.encoding,S.isVideoTexture);Z(q,S,Le);let Te;const Fe=S.mipmaps,ft=a&&S.isVideoTexture!==!0,Bt=be.__version===void 0||ne===!0,F=T(S,ie,Le);if(S.isDepthTexture)De=6402,a?S.type===di?De=36012:S.type===br?De=33190:S.type===Lo?De=35056:De=33189:S.type===di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ir&&De===6402&&S.type!==Dx&&S.type!==br&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=br,Ie=r.convert(S.type)),S.format===Qo&&De===6402&&(De=34041,S.type!==Lo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Lo,Ie=r.convert(S.type))),Bt&&(ft?t.texStorage2D(3553,1,De,ie.width,ie.height):t.texImage2D(3553,0,De,ie.width,ie.height,0,Ae,Ie,null));else if(S.isDataTexture)if(Fe.length>0&&Le){ft&&Bt&&t.texStorage2D(3553,F,De,Fe[0].width,Fe[0].height);for(let se=0,ge=Fe.length;se<ge;se++)Te=Fe[se],ft?t.texSubImage2D(3553,se,0,0,Te.width,Te.height,Ae,Ie,Te.data):t.texImage2D(3553,se,De,Te.width,Te.height,0,Ae,Ie,Te.data);S.generateMipmaps=!1}else ft?(Bt&&t.texStorage2D(3553,F,De,ie.width,ie.height),t.texSubImage2D(3553,0,0,0,ie.width,ie.height,Ae,Ie,ie.data)):t.texImage2D(3553,0,De,ie.width,ie.height,0,Ae,Ie,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ft&&Bt&&t.texStorage3D(35866,F,De,Fe[0].width,Fe[0].height,ie.depth);for(let se=0,ge=Fe.length;se<ge;se++)Te=Fe[se],S.format!==Fn?Ae!==null?ft?t.compressedTexSubImage3D(35866,se,0,0,0,Te.width,Te.height,ie.depth,Ae,Te.data,0,0):t.compressedTexImage3D(35866,se,De,Te.width,Te.height,ie.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?t.texSubImage3D(35866,se,0,0,0,Te.width,Te.height,ie.depth,Ae,Ie,Te.data):t.texImage3D(35866,se,De,Te.width,Te.height,ie.depth,0,Ae,Ie,Te.data)}else{ft&&Bt&&t.texStorage2D(3553,F,De,Fe[0].width,Fe[0].height);for(let se=0,ge=Fe.length;se<ge;se++)Te=Fe[se],S.format!==Fn?Ae!==null?ft?t.compressedTexSubImage2D(3553,se,0,0,Te.width,Te.height,Ae,Te.data):t.compressedTexImage2D(3553,se,De,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?t.texSubImage2D(3553,se,0,0,Te.width,Te.height,Ae,Ie,Te.data):t.texImage2D(3553,se,De,Te.width,Te.height,0,Ae,Ie,Te.data)}else if(S.isDataArrayTexture)ft?(Bt&&t.texStorage3D(35866,F,De,ie.width,ie.height,ie.depth),t.texSubImage3D(35866,0,0,0,0,ie.width,ie.height,ie.depth,Ae,Ie,ie.data)):t.texImage3D(35866,0,De,ie.width,ie.height,ie.depth,0,Ae,Ie,ie.data);else if(S.isData3DTexture)ft?(Bt&&t.texStorage3D(32879,F,De,ie.width,ie.height,ie.depth),t.texSubImage3D(32879,0,0,0,0,ie.width,ie.height,ie.depth,Ae,Ie,ie.data)):t.texImage3D(32879,0,De,ie.width,ie.height,ie.depth,0,Ae,Ie,ie.data);else if(S.isFramebufferTexture){if(Bt)if(ft)t.texStorage2D(3553,F,De,ie.width,ie.height);else{let se=ie.width,ge=ie.height;for(let Ee=0;Ee<F;Ee++)t.texImage2D(3553,Ee,De,se,ge,0,Ae,Ie,null),se>>=1,ge>>=1}}else if(Fe.length>0&&Le){ft&&Bt&&t.texStorage2D(3553,F,De,Fe[0].width,Fe[0].height);for(let se=0,ge=Fe.length;se<ge;se++)Te=Fe[se],ft?t.texSubImage2D(3553,se,0,0,Ae,Ie,Te):t.texImage2D(3553,se,De,Ae,Ie,Te);S.generateMipmaps=!1}else ft?(Bt&&t.texStorage2D(3553,F,De,ie.width,ie.height),t.texSubImage2D(3553,0,0,0,Ae,Ie,ie)):t.texImage2D(3553,0,De,Ae,Ie,ie);E(S,Le)&&A(q),be.__version=he.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function de(w,S,k){if(S.image.length!==6)return;const q=K(w,S),ne=S.source;t.bindTexture(34067,w.__webglTexture,33984+k);const he=n.get(ne);if(ne.version!==he.__version||q===!0){t.activeTexture(33984+k),i.pixelStorei(37440,S.flipY),i.pixelStorei(37441,S.premultiplyAlpha),i.pixelStorei(3317,S.unpackAlignment),i.pixelStorei(37443,0);const be=S.isCompressedTexture||S.image[0].isCompressedTexture,ye=S.image[0]&&S.image[0].isDataTexture,ie=[];for(let se=0;se<6;se++)!be&&!ye?ie[se]=_(S.image[se],!1,!0,c):ie[se]=ye?S.image[se].image:S.image[se],ie[se]=Q(S,ie[se]);const Le=ie[0],Ae=b(Le)||a,Ie=r.convert(S.format,S.encoding),De=r.convert(S.type),Te=M(S.internalFormat,Ie,De,S.encoding),Fe=a&&S.isVideoTexture!==!0,ft=he.__version===void 0||q===!0;let Bt=T(S,Le,Ae);Z(34067,S,Ae);let F;if(be){Fe&&ft&&t.texStorage2D(34067,Bt,Te,Le.width,Le.height);for(let se=0;se<6;se++){F=ie[se].mipmaps;for(let ge=0;ge<F.length;ge++){const Ee=F[ge];S.format!==Fn?Ie!==null?Fe?t.compressedTexSubImage2D(34069+se,ge,0,0,Ee.width,Ee.height,Ie,Ee.data):t.compressedTexImage2D(34069+se,ge,Te,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(34069+se,ge,0,0,Ee.width,Ee.height,Ie,De,Ee.data):t.texImage2D(34069+se,ge,Te,Ee.width,Ee.height,0,Ie,De,Ee.data)}}}else{F=S.mipmaps,Fe&&ft&&(F.length>0&&Bt++,t.texStorage2D(34067,Bt,Te,ie[0].width,ie[0].height));for(let se=0;se<6;se++)if(ye){Fe?t.texSubImage2D(34069+se,0,0,0,ie[se].width,ie[se].height,Ie,De,ie[se].data):t.texImage2D(34069+se,0,Te,ie[se].width,ie[se].height,0,Ie,De,ie[se].data);for(let ge=0;ge<F.length;ge++){const Re=F[ge].image[se].image;Fe?t.texSubImage2D(34069+se,ge+1,0,0,Re.width,Re.height,Ie,De,Re.data):t.texImage2D(34069+se,ge+1,Te,Re.width,Re.height,0,Ie,De,Re.data)}}else{Fe?t.texSubImage2D(34069+se,0,0,0,Ie,De,ie[se]):t.texImage2D(34069+se,0,Te,Ie,De,ie[se]);for(let ge=0;ge<F.length;ge++){const Ee=F[ge];Fe?t.texSubImage2D(34069+se,ge+1,0,0,Ie,De,Ee.image[se]):t.texImage2D(34069+se,ge+1,Te,Ie,De,Ee.image[se])}}}E(S,Ae)&&A(34067),he.__version=ne.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function xe(w,S,k,q,ne){const he=r.convert(k.format,k.encoding),be=r.convert(k.type),ye=M(k.internalFormat,he,be,k.encoding);n.get(S).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,ye,S.width,S.height,S.depth,0,he,be,null):t.texImage2D(ne,0,ye,S.width,S.height,0,he,be,null)),t.bindFramebuffer(36160,w),ce(S)?h.framebufferTexture2DMultisampleEXT(36160,q,ne,n.get(k).__webglTexture,0,me(S)):(ne===3553||ne>=34069&&ne<=34074)&&i.framebufferTexture2D(36160,q,ne,n.get(k).__webglTexture,0),t.bindFramebuffer(36160,null)}function Me(w,S,k){if(i.bindRenderbuffer(36161,w),S.depthBuffer&&!S.stencilBuffer){let q=33189;if(k||ce(S)){const ne=S.depthTexture;ne&&ne.isDepthTexture&&(ne.type===di?q=36012:ne.type===br&&(q=33190));const he=me(S);ce(S)?h.renderbufferStorageMultisampleEXT(36161,he,q,S.width,S.height):i.renderbufferStorageMultisample(36161,he,q,S.width,S.height)}else i.renderbufferStorage(36161,q,S.width,S.height);i.framebufferRenderbuffer(36160,36096,36161,w)}else if(S.depthBuffer&&S.stencilBuffer){const q=me(S);k&&ce(S)===!1?i.renderbufferStorageMultisample(36161,q,35056,S.width,S.height):ce(S)?h.renderbufferStorageMultisampleEXT(36161,q,35056,S.width,S.height):i.renderbufferStorage(36161,34041,S.width,S.height),i.framebufferRenderbuffer(36160,33306,36161,w)}else{const q=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ne=0;ne<q.length;ne++){const he=q[ne],be=r.convert(he.format,he.encoding),ye=r.convert(he.type),ie=M(he.internalFormat,be,ye,he.encoding),Le=me(S);k&&ce(S)===!1?i.renderbufferStorageMultisample(36161,Le,ie,S.width,S.height):ce(S)?h.renderbufferStorageMultisampleEXT(36161,Le,ie,S.width,S.height):i.renderbufferStorage(36161,ie,S.width,S.height)}}i.bindRenderbuffer(36161,null)}function C(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ue(S.depthTexture,0);const q=n.get(S.depthTexture).__webglTexture,ne=me(S);if(S.depthTexture.format===Ir)ce(S)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,q,0,ne):i.framebufferTexture2D(36160,36096,3553,q,0);else if(S.depthTexture.format===Qo)ce(S)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,q,0,ne):i.framebufferTexture2D(36160,33306,3553,q,0);else throw new Error("Unknown depthTexture format")}function I(w){const S=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");C(S.__webglFramebuffer,w)}else if(k){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(36160,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]=i.createRenderbuffer(),Me(S.__webglDepthbuffer[q],w,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Me(S.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function X(w,S,k){const q=n.get(w);S!==void 0&&xe(q.__webglFramebuffer,w,w.texture,36064,3553),k!==void 0&&I(w)}function J(w){const S=w.texture,k=n.get(w),q=n.get(S);w.addEventListener("dispose",W),w.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=S.version,o.memory.textures++);const ne=w.isWebGLCubeRenderTarget===!0,he=w.isWebGLMultipleRenderTargets===!0,be=b(w)||a;if(ne){k.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)k.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(k.__webglFramebuffer=i.createFramebuffer(),he)if(s.drawBuffers){const ye=w.texture;for(let ie=0,Le=ye.length;ie<Le;ie++){const Ae=n.get(ye[ie]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&ce(w)===!1){const ye=he?S:[S];k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);for(let ie=0;ie<ye.length;ie++){const Le=ye[ie];k.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(36161,k.__webglColorRenderbuffer[ie]);const Ae=r.convert(Le.format,Le.encoding),Ie=r.convert(Le.type),De=M(Le.internalFormat,Ae,Ie,Le.encoding,w.isXRRenderTarget===!0),Te=me(w);i.renderbufferStorageMultisample(36161,Te,De,w.width,w.height),i.framebufferRenderbuffer(36160,36064+ie,36161,k.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(36161,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,q.__webglTexture),Z(34067,S,be);for(let ye=0;ye<6;ye++)xe(k.__webglFramebuffer[ye],w,S,36064,34069+ye);E(S,be)&&A(34067),t.unbindTexture()}else if(he){const ye=w.texture;for(let ie=0,Le=ye.length;ie<Le;ie++){const Ae=ye[ie],Ie=n.get(Ae);t.bindTexture(3553,Ie.__webglTexture),Z(3553,Ae,be),xe(k.__webglFramebuffer,w,Ae,36064+ie,3553),E(Ae,be)&&A(3553)}t.unbindTexture()}else{let ye=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?ye=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,q.__webglTexture),Z(ye,S,be),xe(k.__webglFramebuffer,w,S,36064,ye),E(S,be)&&A(ye),t.unbindTexture()}w.depthBuffer&&I(w)}function re(w){const S=b(w)||a,k=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let q=0,ne=k.length;q<ne;q++){const he=k[q];if(E(he,S)){const be=w.isWebGLCubeRenderTarget?34067:3553,ye=n.get(he).__webglTexture;t.bindTexture(be,ye),A(be),t.unbindTexture()}}}function fe(w){if(a&&w.samples>0&&ce(w)===!1){const S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],k=w.width,q=w.height;let ne=16384;const he=[],be=w.stencilBuffer?33306:36096,ye=n.get(w),ie=w.isWebGLMultipleRenderTargets===!0;if(ie)for(let Le=0;Le<S.length;Le++)t.bindFramebuffer(36160,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Le,36161,null),t.bindFramebuffer(36160,ye.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Le,3553,null,0);t.bindFramebuffer(36008,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ye.__webglFramebuffer);for(let Le=0;Le<S.length;Le++){he.push(36064+Le),w.depthBuffer&&he.push(be);const Ae=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Ae===!1&&(w.depthBuffer&&(ne|=256),w.stencilBuffer&&(ne|=1024)),ie&&i.framebufferRenderbuffer(36008,36064,36161,ye.__webglColorRenderbuffer[Le]),Ae===!0&&(i.invalidateFramebuffer(36008,[be]),i.invalidateFramebuffer(36009,[be])),ie){const Ie=n.get(S[Le]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,Ie,0)}i.blitFramebuffer(0,0,k,q,0,0,k,q,ne,9728),p&&i.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ie)for(let Le=0;Le<S.length;Le++){t.bindFramebuffer(36160,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Le,36161,ye.__webglColorRenderbuffer[Le]);const Ae=n.get(S[Le]).__webglTexture;t.bindFramebuffer(36160,ye.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Le,3553,Ae,0)}t.bindFramebuffer(36009,ye.__webglMultisampledFramebuffer)}}function me(w){return Math.min(f,w.samples)}function ce(w){const S=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function _e(w){const S=o.render.frame;g.get(w)!==S&&(g.set(w,S),w.update())}function Q(w,S){const k=w.encoding,q=w.format,ne=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===sd||k!==Js&&(k===nt?a===!1?e.has("EXT_sRGB")===!0&&q===Fn?(w.format=sd,w.minFilter=Ut,w.generateMipmaps=!1):S=Bx.sRGBToLinear(S):(q!==Fn||ne!==Or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),S}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=ue,this.setTexture2DArray=ve,this.setTexture3D=H,this.setTextureCube=le,this.rebindTextures=X,this.setupRenderTarget=J,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=I,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ce}function A3(i,e,t){const n=t.isWebGL2;function s(r,o=null){let a;if(r===Or)return 5121;if(r===KT)return 32819;if(r===ZT)return 32820;if(r===YT)return 5120;if(r===qT)return 5122;if(r===Dx)return 5123;if(r===$T)return 5124;if(r===br)return 5125;if(r===di)return 5126;if(r===is)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===JT)return 6406;if(r===Fn)return 6408;if(r===QT)return 6409;if(r===eE)return 6410;if(r===Ir)return 6402;if(r===Qo)return 34041;if(r===sd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===tE)return 6403;if(r===nE)return 36244;if(r===iE)return 33319;if(r===sE)return 33320;if(r===rE)return 36249;if(r===If||r===Df||r===Nf||r===Of)if(o===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===If)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Df)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Nf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Of)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===If)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Df)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Nf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Of)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===lg||r===cg||r===ug||r===fg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===lg)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ug)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===oE)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===hg||r===dg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===hg)return o===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===dg)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===pg||r===mg||r===gg||r===_g||r===vg||r===xg||r===bg||r===yg||r===Mg||r===Sg||r===wg||r===Tg||r===Eg||r===Ag)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===pg)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mg)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gg)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_g)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vg)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xg)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bg)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yg)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mg)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sg)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wg)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Tg)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Eg)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ag)return o===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Uf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Uf)return o===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===aE||r===Cg||r===Rg||r===Lg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Uf)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Cg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Rg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Lo?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class C3 extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vs extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const R3={type:"move"};class ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const d of e.hand.values()){const m=t.getJointPose(d,n),v=this._getHandJoint(c,d);m!==null&&(v.matrix.fromArray(m.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=m.radius),v.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(R3)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Qx extends Jt{constructor(e,t,n,s,r,o,a,l,c,u){if(u=u!==void 0?u:Ir,u!==Ir&&u!==Qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ir&&(n=br),n===void 0&&u===Qo&&(n=Lo),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Lt,this.minFilter=l!==void 0?l:Lt,this.flipY=!1,this.generateMipmaps=!1}}class L3 extends kr{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const d=t.getContextAttributes();let m=null,v=null;const x=[],_=[],b=new Set,y=new Map,E=new mn;E.layers.enable(1),E.viewport=new ut;const A=new mn;A.layers.enable(2),A.viewport=new ut;const M=[E,A],T=new C3;T.layers.enable(1),T.layers.enable(2);let P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let le=x[H];return le===void 0&&(le=new ah,x[H]=le),le.getTargetRaySpace()},this.getControllerGrip=function(H){let le=x[H];return le===void 0&&(le=new ah,x[H]=le),le.getGripSpace()},this.getHand=function(H){let le=x[H];return le===void 0&&(le=new ah,x[H]=le),le.getHandSpace()};function W(H){const le=_.indexOf(H.inputSource);if(le===-1)return;const pe=x[le];pe!==void 0&&pe.dispatchEvent({type:H.type,data:H.inputSource})}function U(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",N);for(let H=0;H<x.length;H++){const le=_[H];le!==null&&(_[H]=null,x[H].disconnect(le))}P=null,D=null,e.setRenderTarget(m),p=null,h=null,f=null,s=null,v=null,ve.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",U),s.addEventListener("inputsourceschange",N),d.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:s.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:p}),v=new Bi(p.framebufferWidth,p.framebufferHeight,{format:Fn,type:Or,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let le=null,pe=null,L=null;d.depth&&(L=d.stencil?35056:33190,le=d.stencil?Qo:Ir,pe=d.stencil?Lo:br);const Z={colorFormat:32856,depthFormat:L,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(Z),s.updateRenderState({layers:[h]}),v=new Bi(h.textureWidth,h.textureHeight,{format:Fn,type:Or,depthTexture:new Qx(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const K=e.properties.get(v);K.__ignoreDepthValues=h.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ve.setContext(s),ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(H){for(let le=0;le<H.removed.length;le++){const pe=H.removed[le],L=_.indexOf(pe);L>=0&&(_[L]=null,x[L].disconnect(pe))}for(let le=0;le<H.added.length;le++){const pe=H.added[le];let L=_.indexOf(pe);if(L===-1){for(let K=0;K<x.length;K++)if(K>=_.length){_.push(pe),L=K;break}else if(_[K]===null){_[K]=pe,L=K;break}if(L===-1)break}const Z=x[L];Z&&Z.connect(pe)}}const O=new B,Y=new B;function G(H,le,pe){O.setFromMatrixPosition(le.matrixWorld),Y.setFromMatrixPosition(pe.matrixWorld);const L=O.distanceTo(Y),Z=le.projectionMatrix.elements,K=pe.projectionMatrix.elements,oe=Z[14]/(Z[10]-1),de=Z[14]/(Z[10]+1),xe=(Z[9]+1)/Z[5],Me=(Z[9]-1)/Z[5],C=(Z[8]-1)/Z[0],I=(K[8]+1)/K[0],X=oe*C,J=oe*I,re=L/(-C+I),fe=re*-C;le.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(fe),H.translateZ(re),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const me=oe+re,ce=de+re,_e=X-fe,Q=J+(L-fe),w=xe*de/ce*me,S=Me*de/ce*me;H.projectionMatrix.makePerspective(_e,Q,w,S,me,ce)}function z(H,le){le===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(le.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;T.near=A.near=E.near=H.near,T.far=A.far=E.far=H.far,(P!==T.near||D!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),P=T.near,D=T.far);const le=H.parent,pe=T.cameras;z(T,le);for(let Z=0;Z<pe.length;Z++)z(pe[Z],le);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),H.matrix.copy(T.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const L=H.children;for(let Z=0,K=L.length;Z<K;Z++)L[Z].updateMatrixWorld(!0);pe.length===2?G(T,E,A):T.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.getPlanes=function(){return b};let ee=null;function ue(H,le){if(u=le.getViewerPose(c||o),g=le,u!==null){const pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let L=!1;pe.length!==T.cameras.length&&(T.cameras.length=0,L=!0);for(let Z=0;Z<pe.length;Z++){const K=pe[Z];let oe=null;if(p!==null)oe=p.getViewport(K);else{const xe=f.getViewSubImage(h,K);oe=xe.viewport,Z===0&&(e.setRenderTargetTextures(v,xe.colorTexture,h.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(v))}let de=M[Z];de===void 0&&(de=new mn,de.layers.enable(Z),de.viewport=new ut,M[Z]=de),de.matrix.fromArray(K.transform.matrix),de.projectionMatrix.fromArray(K.projectionMatrix),de.viewport.set(oe.x,oe.y,oe.width,oe.height),Z===0&&T.matrix.copy(de.matrix),L===!0&&T.cameras.push(de)}}for(let pe=0;pe<x.length;pe++){const L=_[pe],Z=x[pe];L!==null&&Z!==void 0&&Z.update(L,le,c||o)}if(ee&&ee(H,le),le.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:le.detectedPlanes});let pe=null;for(const L of b)le.detectedPlanes.has(L)||(pe===null&&(pe=[]),pe.push(L));if(pe!==null)for(const L of pe)b.delete(L),y.delete(L),n.dispatchEvent({type:"planeremoved",data:L});for(const L of le.detectedPlanes)if(!b.has(L))b.add(L),y.set(L,le.lastChangedTime),n.dispatchEvent({type:"planeadded",data:L});else{const Z=y.get(L);L.lastChangedTime>Z&&(y.set(L,L.lastChangedTime),n.dispatchEvent({type:"planechanged",data:L}))}}g=null}const ve=new qx;ve.setAnimationLoop(ue),this.setAnimationLoop=function(H){ee=H},this.dispose=function(){}}}function P3(i,e){function t(d,m){m.color.getRGB(d.fogColor.value,Xx(i)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function n(d,m,v,x,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(d,m):m.isMeshToonMaterial?(s(d,m),u(d,m)):m.isMeshPhongMaterial?(s(d,m),c(d,m)):m.isMeshStandardMaterial?(s(d,m),f(d,m),m.isMeshPhysicalMaterial&&h(d,m,_)):m.isMeshMatcapMaterial?(s(d,m),p(d,m)):m.isMeshDepthMaterial?s(d,m):m.isMeshDistanceMaterial?(s(d,m),g(d,m)):m.isMeshNormalMaterial?s(d,m):m.isLineBasicMaterial?(r(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?a(d,m,v,x):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.bumpMap&&(d.bumpMap.value=m.bumpMap,d.bumpScale.value=m.bumpScale,m.side===Bn&&(d.bumpScale.value*=-1)),m.displacementMap&&(d.displacementMap.value=m.displacementMap,d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap),m.normalMap&&(d.normalMap.value=m.normalMap,d.normalScale.value.copy(m.normalScale),m.side===Bn&&d.normalScale.value.negate()),m.specularMap&&(d.specularMap.value=m.specularMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const v=e.get(m).envMap;if(v&&(d.envMap.value=v,d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const b=i.useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*b}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity);let x;m.map?x=m.map:m.specularMap?x=m.specularMap:m.displacementMap?x=m.displacementMap:m.normalMap?x=m.normalMap:m.bumpMap?x=m.bumpMap:m.roughnessMap?x=m.roughnessMap:m.metalnessMap?x=m.metalnessMap:m.alphaMap?x=m.alphaMap:m.emissiveMap?x=m.emissiveMap:m.clearcoatMap?x=m.clearcoatMap:m.clearcoatNormalMap?x=m.clearcoatNormalMap:m.clearcoatRoughnessMap?x=m.clearcoatRoughnessMap:m.iridescenceMap?x=m.iridescenceMap:m.iridescenceThicknessMap?x=m.iridescenceThicknessMap:m.specularIntensityMap?x=m.specularIntensityMap:m.specularColorMap?x=m.specularColorMap:m.transmissionMap?x=m.transmissionMap:m.thicknessMap?x=m.thicknessMap:m.sheenColorMap?x=m.sheenColorMap:m.sheenRoughnessMap&&(x=m.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix));let _;m.aoMap?_=m.aoMap:m.lightMap&&(_=m.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uv2Transform.value.copy(_.matrix))}function r(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function a(d,m,v,x){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*v,d.scale.value=x*.5,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let v;m.map?v=m.map:m.alphaMap&&(v=m.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix))}function c(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function f(d,m){d.roughness.value=m.roughness,d.metalness.value=m.metalness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function h(d,m,v){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),d.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Bn&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap)}function p(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){d.referencePosition.value.copy(m.referencePosition),d.nearDistance.value=m.nearDistance,d.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function I3(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(x,_){const b=_.program;n.uniformBlockBinding(x,b)}function c(x,_){let b=s[x.id];b===void 0&&(g(x),b=u(x),s[x.id]=b,x.addEventListener("dispose",m));const y=_.program;n.updateUBOMapping(x,y);const E=e.render.frame;r[x.id]!==E&&(h(x),r[x.id]=E)}function u(x){const _=f();x.__bindingPointIndex=_;const b=i.createBuffer(),y=x.__size,E=x.usage;return i.bindBuffer(35345,b),i.bufferData(35345,y,E),i.bindBuffer(35345,null),i.bindBufferBase(35345,_,b),b}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const _=s[x.id],b=x.uniforms,y=x.__cache;i.bindBuffer(35345,_);for(let E=0,A=b.length;E<A;E++){const M=b[E];if(p(M,E,y)===!0){const T=M.__offset,P=Array.isArray(M.value)?M.value:[M.value];let D=0;for(let W=0;W<P.length;W++){const U=P[W],N=d(U);typeof U=="number"?(M.__data[0]=U,i.bufferSubData(35345,T+D,M.__data)):U.isMatrix3?(M.__data[0]=U.elements[0],M.__data[1]=U.elements[1],M.__data[2]=U.elements[2],M.__data[3]=U.elements[0],M.__data[4]=U.elements[3],M.__data[5]=U.elements[4],M.__data[6]=U.elements[5],M.__data[7]=U.elements[0],M.__data[8]=U.elements[6],M.__data[9]=U.elements[7],M.__data[10]=U.elements[8],M.__data[11]=U.elements[0]):(U.toArray(M.__data,D),D+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,T,M.__data)}}i.bindBuffer(35345,null)}function p(x,_,b){const y=x.value;if(b[_]===void 0){if(typeof y=="number")b[_]=y;else{const E=Array.isArray(y)?y:[y],A=[];for(let M=0;M<E.length;M++)A.push(E[M].clone());b[_]=A}return!0}else if(typeof y=="number"){if(b[_]!==y)return b[_]=y,!0}else{const E=Array.isArray(b[_])?b[_]:[b[_]],A=Array.isArray(y)?y:[y];for(let M=0;M<E.length;M++){const T=E[M];if(T.equals(A[M])===!1)return T.copy(A[M]),!0}}return!1}function g(x){const _=x.uniforms;let b=0;const y=16;let E=0;for(let A=0,M=_.length;A<M;A++){const T=_[A],P={boundary:0,storage:0},D=Array.isArray(T.value)?T.value:[T.value];for(let W=0,U=D.length;W<U;W++){const N=D[W],O=d(N);P.boundary+=O.boundary,P.storage+=O.storage}if(T.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=b,A>0){E=b%y;const W=y-E;E!==0&&W-P.boundary<0&&(b+=y-E,T.__offset=b)}b+=P.storage}return E=b%y,E>0&&(b+=y-E),x.__size=b,x.__cache={},this}function d(x){const _={boundary:0,storage:0};return typeof x=="number"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const b=o.indexOf(_.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function v(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:v}}function D3(){const i=xl("canvas");return i.style.display="block",i}function Ap(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:D3(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let f=null,h=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Js,this.useLegacyLights=!0,this.toneMapping=as,this.toneMappingExposure=1;const d=this;let m=!1,v=0,x=0,_=null,b=-1,y=null;const E=new ut,A=new ut;let M=null,T=e.width,P=e.height,D=1,W=null,U=null;const N=new ut(0,0,T,P),O=new ut(0,0,T,P);let Y=!1;const G=new Tp;let z=!1,ee=!1,ue=null;const ve=new je,H=new B,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return _===null?D:1}let L=t;function Z(R,j){for(let te=0;te<R.length;te++){const V=R[te],ae=e.getContext(V,j);if(ae!==null)return ae}return null}try{const R={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xp}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",De,!1),e.addEventListener("webglcontextcreationerror",Te,!1),L===null){const j=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&j.shift(),L=Z(j,R),L===null)throw Z(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let K,oe,de,xe,Me,C,I,X,J,re,fe,me,ce,_e,Q,w,S,k,q,ne,he,be,ye,ie;function Le(){K=new jC(L),oe=new BC(L,K,i),K.init(oe),be=new A3(L,K,oe),de=new T3(L,K,oe),xe=new qC,Me=new f3,C=new E3(L,K,de,Me,oe,be,xe),I=new VC(d),X=new WC(d),J=new iA(L,oe),ye=new FC(L,K,J,oe),re=new XC(L,J,xe,ye),fe=new JC(L,re,J,xe),q=new ZC(L,oe,C),w=new zC(Me),me=new u3(d,I,X,K,oe,ye,w),ce=new P3(d,Me),_e=new d3,Q=new x3(K,oe),k=new UC(d,I,X,de,fe,u,o),S=new w3(d,fe,oe),ie=new I3(L,xe,oe,de),ne=new kC(L,K,xe,oe),he=new YC(L,K,xe,oe),xe.programs=me.programs,d.capabilities=oe,d.extensions=K,d.properties=Me,d.renderLists=_e,d.shadowMap=S,d.state=de,d.info=xe}Le();const Ae=new L3(d,L);this.xr=Ae,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const R=K.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=K.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(R){R!==void 0&&(D=R,this.setSize(T,P,!1))},this.getSize=function(R){return R.set(T,P)},this.setSize=function(R,j,te=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=R,P=j,e.width=Math.floor(R*D),e.height=Math.floor(j*D),te===!0&&(e.style.width=R+"px",e.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(T*D,P*D).floor()},this.setDrawingBufferSize=function(R,j,te){T=R,P=j,D=te,e.width=Math.floor(R*te),e.height=Math.floor(j*te),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(N)},this.setViewport=function(R,j,te,V){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,j,te,V),de.viewport(E.copy(N).multiplyScalar(D).floor())},this.getScissor=function(R){return R.copy(O)},this.setScissor=function(R,j,te,V){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,j,te,V),de.scissor(A.copy(O).multiplyScalar(D).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(R){de.setScissorTest(Y=R)},this.setOpaqueSort=function(R){W=R},this.setTransparentSort=function(R){U=R},this.getClearColor=function(R){return R.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor.apply(k,arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha.apply(k,arguments)},this.clear=function(R=!0,j=!0,te=!0){let V=0;R&&(V|=16384),j&&(V|=256),te&&(V|=1024),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",Te,!1),_e.dispose(),Q.dispose(),Me.dispose(),I.dispose(),X.dispose(),fe.dispose(),ye.dispose(),ie.dispose(),me.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",ge),Ae.removeEventListener("sessionend",Ee),ue&&(ue.dispose(),ue=null),Re.stop()};function Ie(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const R=xe.autoReset,j=S.enabled,te=S.autoUpdate,V=S.needsUpdate,ae=S.type;Le(),xe.autoReset=R,S.enabled=j,S.autoUpdate=te,S.needsUpdate=V,S.type=ae}function Te(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Fe(R){const j=R.target;j.removeEventListener("dispose",Fe),ft(j)}function ft(R){Bt(R),Me.remove(R)}function Bt(R){const j=Me.get(R).programs;j!==void 0&&(j.forEach(function(te){me.releaseProgram(te)}),R.isShaderMaterial&&me.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,te,V,ae,Ne){j===null&&(j=le);const ke=ae.isMesh&&ae.matrixWorld.determinant()<0,Ge=Kb(R,j,te,V,ae);de.setMaterial(V,ke);let Xe=te.index,tt=1;V.wireframe===!0&&(Xe=re.getWireframeAttribute(te),tt=2);const qe=te.drawRange,$e=te.attributes.position;let At=qe.start*tt,Rn=(qe.start+qe.count)*tt;Ne!==null&&(At=Math.max(At,Ne.start*tt),Rn=Math.min(Rn,(Ne.start+Ne.count)*tt)),Xe!==null?(At=Math.max(At,0),Rn=Math.min(Rn,Xe.count)):$e!=null&&(At=Math.max(At,0),Rn=Math.min(Rn,$e.count));const Vi=Rn-At;if(Vi<0||Vi===1/0)return;ye.setup(ae,V,Ge,te,Xe);let nr,Ct=ne;if(Xe!==null&&(nr=J.get(Xe),Ct=he,Ct.setIndex(nr)),ae.isMesh)V.wireframe===!0?(de.setLineWidth(V.wireframeLinewidth*pe()),Ct.setMode(1)):Ct.setMode(4);else if(ae.isLine){let Ke=V.linewidth;Ke===void 0&&(Ke=1),de.setLineWidth(Ke*pe()),ae.isLineSegments?Ct.setMode(1):ae.isLineLoop?Ct.setMode(2):Ct.setMode(3)}else ae.isPoints?Ct.setMode(0):ae.isSprite&&Ct.setMode(4);if(ae.isInstancedMesh)Ct.renderInstances(At,Vi,ae.count);else if(te.isInstancedBufferGeometry){const Ke=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,cf=Math.min(te.instanceCount,Ke);Ct.renderInstances(At,Vi,cf)}else Ct.render(At,Vi)},this.compile=function(R,j){function te(V,ae,Ne){V.transparent===!0&&V.side===ns&&V.forceSinglePass===!1?(V.side=Bn,V.needsUpdate=!0,jn(V,ae,Ne),V.side=fs,V.needsUpdate=!0,jn(V,ae,Ne),V.side=ns):jn(V,ae,Ne)}h=Q.get(R),h.init(),g.push(h),R.traverseVisible(function(V){V.isLight&&V.layers.test(j.layers)&&(h.pushLight(V),V.castShadow&&h.pushShadow(V))}),h.setupLights(d.useLegacyLights),R.traverse(function(V){const ae=V.material;if(ae)if(Array.isArray(ae))for(let Ne=0;Ne<ae.length;Ne++){const ke=ae[Ne];te(ke,R,V)}else te(ae,R,V)}),g.pop(),h=null};let F=null;function se(R){F&&F(R)}function ge(){Re.stop()}function Ee(){Re.start()}const Re=new qx;Re.setAnimationLoop(se),typeof self<"u"&&Re.setContext(self),this.setAnimationLoop=function(R){F=R,Ae.setAnimationLoop(R),R===null?Re.stop():Re.start()},Ae.addEventListener("sessionstart",ge),Ae.addEventListener("sessionend",Ee),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(j),j=Ae.getCamera()),R.isScene===!0&&R.onBeforeRender(d,R,j,_),h=Q.get(R,g.length),h.init(),g.push(h),ve.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),G.setFromProjectionMatrix(ve),ee=this.localClippingEnabled,z=w.init(this.clippingPlanes,ee),f=_e.get(R,p.length),f.init(),p.push(f),pt(R,j,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort(W,U),z===!0&&w.beginShadows();const te=h.state.shadowsArray;if(S.render(te,R,j),z===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),k.render(f,R),h.setupLights(d.useLegacyLights),j.isArrayCamera){const V=j.cameras;for(let ae=0,Ne=V.length;ae<Ne;ae++){const ke=V[ae];zt(f,R,ke,ke.viewport)}}else zt(f,R,j);_!==null&&(C.updateMultisampleRenderTarget(_),C.updateRenderTargetMipmap(_)),R.isScene===!0&&R.onAfterRender(d,R,j),ye.resetDefaultState(),b=-1,y=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,p.pop(),p.length>0?f=p[p.length-1]:f=null};function pt(R,j,te,V){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)te=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||G.intersectsSprite(R)){V&&H.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ve);const ke=fe.update(R),Ge=R.material;Ge.visible&&f.push(R,ke,Ge,te,H.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==xe.render.frame&&(R.skeleton.update(),R.skeleton.frame=xe.render.frame),!R.frustumCulled||G.intersectsObject(R))){V&&H.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ve);const ke=fe.update(R),Ge=R.material;if(Array.isArray(Ge)){const Xe=ke.groups;for(let tt=0,qe=Xe.length;tt<qe;tt++){const $e=Xe[tt],At=Ge[$e.materialIndex];At&&At.visible&&f.push(R,ke,At,te,H.z,$e)}}else Ge.visible&&f.push(R,ke,Ge,te,H.z,null)}}const Ne=R.children;for(let ke=0,Ge=Ne.length;ke<Ge;ke++)pt(Ne[ke],j,te,V)}function zt(R,j,te,V){const ae=R.opaque,Ne=R.transmissive,ke=R.transparent;h.setupLightsView(te),z===!0&&w.setGlobalState(d.clippingPlanes,te),Ne.length>0&&ln(ae,j,te),V&&de.viewport(E.copy(V)),ae.length>0&&yi(ae,j,te),Ne.length>0&&yi(Ne,j,te),ke.length>0&&yi(ke,j,te),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function ln(R,j,te){const V=oe.isWebGL2;ue===null&&(ue=new Bi(1024,1024,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?is:Or,minFilter:Zs,samples:V&&r===!0?4:0}));const ae=d.getRenderTarget();d.setRenderTarget(ue),d.clear();const Ne=d.toneMapping;d.toneMapping=as,yi(R,j,te),d.toneMapping=Ne,C.updateMultisampleRenderTarget(ue),C.updateRenderTargetMipmap(ue),d.setRenderTarget(ae)}function yi(R,j,te){const V=j.isScene===!0?j.overrideMaterial:null;for(let ae=0,Ne=R.length;ae<Ne;ae++){const ke=R[ae],Ge=ke.object,Xe=ke.geometry,tt=V===null?ke.material:V,qe=ke.group;Ge.layers.test(te.layers)&&St(Ge,j,te,Xe,tt,qe)}}function St(R,j,te,V,ae,Ne){R.onBeforeRender(d,j,te,V,ae,Ne),R.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ae.onBeforeRender(d,j,te,V,R,Ne),ae.transparent===!0&&ae.side===ns&&ae.forceSinglePass===!1?(ae.side=Bn,ae.needsUpdate=!0,d.renderBufferDirect(te,j,V,ae,R,Ne),ae.side=fs,ae.needsUpdate=!0,d.renderBufferDirect(te,j,V,ae,R,Ne),ae.side=ns):d.renderBufferDirect(te,j,V,ae,R,Ne),R.onAfterRender(d,j,te,V,ae,Ne)}function jn(R,j,te){j.isScene!==!0&&(j=le);const V=Me.get(R),ae=h.state.lights,Ne=h.state.shadowsArray,ke=ae.state.version,Ge=me.getParameters(R,ae.state,Ne,j,te),Xe=me.getProgramCacheKey(Ge);let tt=V.programs;V.environment=R.isMeshStandardMaterial?j.environment:null,V.fog=j.fog,V.envMap=(R.isMeshStandardMaterial?X:I).get(R.envMap||V.environment),tt===void 0&&(R.addEventListener("dispose",Fe),tt=new Map,V.programs=tt);let qe=tt.get(Xe);if(qe!==void 0){if(V.currentProgram===qe&&V.lightsStateVersion===ke)return Mi(R,Ge),qe}else Ge.uniforms=me.getUniforms(R),R.onBuild(te,Ge,d),R.onBeforeCompile(Ge,d),qe=me.acquireProgram(Ge,Xe),tt.set(Xe,qe),V.uniforms=Ge.uniforms;const $e=V.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($e.clippingPlanes=w.uniform),Mi(R,Ge),V.needsLights=Jb(R),V.lightsStateVersion=ke,V.needsLights&&($e.ambientLightColor.value=ae.state.ambient,$e.lightProbe.value=ae.state.probe,$e.directionalLights.value=ae.state.directional,$e.directionalLightShadows.value=ae.state.directionalShadow,$e.spotLights.value=ae.state.spot,$e.spotLightShadows.value=ae.state.spotShadow,$e.rectAreaLights.value=ae.state.rectArea,$e.ltc_1.value=ae.state.rectAreaLTC1,$e.ltc_2.value=ae.state.rectAreaLTC2,$e.pointLights.value=ae.state.point,$e.pointLightShadows.value=ae.state.pointShadow,$e.hemisphereLights.value=ae.state.hemi,$e.directionalShadowMap.value=ae.state.directionalShadowMap,$e.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,$e.spotShadowMap.value=ae.state.spotShadowMap,$e.spotLightMatrix.value=ae.state.spotLightMatrix,$e.spotLightMap.value=ae.state.spotLightMap,$e.pointShadowMap.value=ae.state.pointShadowMap,$e.pointShadowMatrix.value=ae.state.pointShadowMatrix);const At=qe.getUniforms(),Rn=zc.seqWithValue(At.seq,$e);return V.currentProgram=qe,V.uniformsList=Rn,qe}function Mi(R,j){const te=Me.get(R);te.outputEncoding=j.outputEncoding,te.instancing=j.instancing,te.skinning=j.skinning,te.morphTargets=j.morphTargets,te.morphNormals=j.morphNormals,te.morphColors=j.morphColors,te.morphTargetsCount=j.morphTargetsCount,te.numClippingPlanes=j.numClippingPlanes,te.numIntersection=j.numClipIntersection,te.vertexAlphas=j.vertexAlphas,te.vertexTangents=j.vertexTangents,te.toneMapping=j.toneMapping}function Kb(R,j,te,V,ae){j.isScene!==!0&&(j=le),C.resetTextureUnits();const Ne=j.fog,ke=V.isMeshStandardMaterial?j.environment:null,Ge=_===null?d.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Js,Xe=(V.isMeshStandardMaterial?X:I).get(V.envMap||ke),tt=V.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,qe=!!V.normalMap&&!!te.attributes.tangent,$e=!!te.morphAttributes.position,At=!!te.morphAttributes.normal,Rn=!!te.morphAttributes.color,Vi=V.toneMapped?d.toneMapping:as,nr=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Ct=nr!==void 0?nr.length:0,Ke=Me.get(V),cf=h.state.lights;if(z===!0&&(ee===!0||R!==y)){const Ln=R===y&&V.id===b;w.setState(V,R,Ln)}let Vt=!1;V.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==cf.state.version||Ke.outputEncoding!==Ge||ae.isInstancedMesh&&Ke.instancing===!1||!ae.isInstancedMesh&&Ke.instancing===!0||ae.isSkinnedMesh&&Ke.skinning===!1||!ae.isSkinnedMesh&&Ke.skinning===!0||Ke.envMap!==Xe||V.fog===!0&&Ke.fog!==Ne||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==w.numPlanes||Ke.numIntersection!==w.numIntersection)||Ke.vertexAlphas!==tt||Ke.vertexTangents!==qe||Ke.morphTargets!==$e||Ke.morphNormals!==At||Ke.morphColors!==Rn||Ke.toneMapping!==Vi||oe.isWebGL2===!0&&Ke.morphTargetsCount!==Ct)&&(Vt=!0):(Vt=!0,Ke.__version=V.version);let ir=Ke.currentProgram;Vt===!0&&(ir=jn(V,j,ae));let Fp=!1,_a=!1,uf=!1;const cn=ir.getUniforms(),sr=Ke.uniforms;if(de.useProgram(ir.program)&&(Fp=!0,_a=!0,uf=!0),V.id!==b&&(b=V.id,_a=!0),Fp||y!==R){if(cn.setValue(L,"projectionMatrix",R.projectionMatrix),oe.logarithmicDepthBuffer&&cn.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),y!==R&&(y=R,_a=!0,uf=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const Ln=cn.map.cameraPosition;Ln!==void 0&&Ln.setValue(L,H.setFromMatrixPosition(R.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&cn.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||ae.isSkinnedMesh)&&cn.setValue(L,"viewMatrix",R.matrixWorldInverse)}if(ae.isSkinnedMesh){cn.setOptional(L,ae,"bindMatrix"),cn.setOptional(L,ae,"bindMatrixInverse");const Ln=ae.skeleton;Ln&&(oe.floatVertexTextures?(Ln.boneTexture===null&&Ln.computeBoneTexture(),cn.setValue(L,"boneTexture",Ln.boneTexture,C),cn.setValue(L,"boneTextureSize",Ln.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ff=te.morphAttributes;if((ff.position!==void 0||ff.normal!==void 0||ff.color!==void 0&&oe.isWebGL2===!0)&&q.update(ae,te,ir),(_a||Ke.receiveShadow!==ae.receiveShadow)&&(Ke.receiveShadow=ae.receiveShadow,cn.setValue(L,"receiveShadow",ae.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(sr.envMap.value=Xe,sr.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),_a&&(cn.setValue(L,"toneMappingExposure",d.toneMappingExposure),Ke.needsLights&&Zb(sr,uf),Ne&&V.fog===!0&&ce.refreshFogUniforms(sr,Ne),ce.refreshMaterialUniforms(sr,V,D,P,ue),zc.upload(L,Ke.uniformsList,sr,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(zc.upload(L,Ke.uniformsList,sr,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&cn.setValue(L,"center",ae.center),cn.setValue(L,"modelViewMatrix",ae.modelViewMatrix),cn.setValue(L,"normalMatrix",ae.normalMatrix),cn.setValue(L,"modelMatrix",ae.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ln=V.uniformsGroups;for(let hf=0,Qb=Ln.length;hf<Qb;hf++)if(oe.isWebGL2){const kp=Ln[hf];ie.update(kp,ir),ie.bind(kp,ir)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ir}function Zb(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Jb(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(R,j,te){Me.get(R.texture).__webglTexture=j,Me.get(R.depthTexture).__webglTexture=te;const V=Me.get(R);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=te===void 0,V.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,j){const te=Me.get(R);te.__webglFramebuffer=j,te.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(R,j=0,te=0){_=R,v=j,x=te;let V=!0,ae=null,Ne=!1,ke=!1;if(R){const Xe=Me.get(R);Xe.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),V=!1):Xe.__webglFramebuffer===void 0?C.setupRenderTarget(R):Xe.__hasExternalTextures&&C.rebindTextures(R,Me.get(R.texture).__webglTexture,Me.get(R.depthTexture).__webglTexture);const tt=R.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(ke=!0);const qe=Me.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(ae=qe[j],Ne=!0):oe.isWebGL2&&R.samples>0&&C.useMultisampledRTT(R)===!1?ae=Me.get(R).__webglMultisampledFramebuffer:ae=qe,E.copy(R.viewport),A.copy(R.scissor),M=R.scissorTest}else E.copy(N).multiplyScalar(D).floor(),A.copy(O).multiplyScalar(D).floor(),M=Y;if(de.bindFramebuffer(36160,ae)&&oe.drawBuffers&&V&&de.drawBuffers(R,ae),de.viewport(E),de.scissor(A),de.setScissorTest(M),Ne){const Xe=Me.get(R.texture);L.framebufferTexture2D(36160,36064,34069+j,Xe.__webglTexture,te)}else if(ke){const Xe=Me.get(R.texture),tt=j||0;L.framebufferTextureLayer(36160,36064,Xe.__webglTexture,te||0,tt)}b=-1},this.readRenderTargetPixels=function(R,j,te,V,ae,Ne,ke){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Me.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge){de.bindFramebuffer(36160,Ge);try{const Xe=R.texture,tt=Xe.format,qe=Xe.type;if(tt!==Fn&&be.convert(tt)!==L.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $e=qe===is&&(K.has("EXT_color_buffer_half_float")||oe.isWebGL2&&K.has("EXT_color_buffer_float"));if(qe!==Or&&be.convert(qe)!==L.getParameter(35738)&&!(qe===di&&(oe.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-V&&te>=0&&te<=R.height-ae&&L.readPixels(j,te,V,ae,be.convert(tt),be.convert(qe),Ne)}finally{const Xe=_!==null?Me.get(_).__webglFramebuffer:null;de.bindFramebuffer(36160,Xe)}}},this.copyFramebufferToTexture=function(R,j,te=0){const V=Math.pow(2,-te),ae=Math.floor(j.image.width*V),Ne=Math.floor(j.image.height*V);C.setTexture2D(j,0),L.copyTexSubImage2D(3553,te,0,0,R.x,R.y,ae,Ne),de.unbindTexture()},this.copyTextureToTexture=function(R,j,te,V=0){const ae=j.image.width,Ne=j.image.height,ke=be.convert(te.format),Ge=be.convert(te.type);C.setTexture2D(te,0),L.pixelStorei(37440,te.flipY),L.pixelStorei(37441,te.premultiplyAlpha),L.pixelStorei(3317,te.unpackAlignment),j.isDataTexture?L.texSubImage2D(3553,V,R.x,R.y,ae,Ne,ke,Ge,j.image.data):j.isCompressedTexture?L.compressedTexSubImage2D(3553,V,R.x,R.y,j.mipmaps[0].width,j.mipmaps[0].height,ke,j.mipmaps[0].data):L.texSubImage2D(3553,V,R.x,R.y,ke,Ge,j.image),V===0&&te.generateMipmaps&&L.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(R,j,te,V,ae=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ne=R.max.x-R.min.x+1,ke=R.max.y-R.min.y+1,Ge=R.max.z-R.min.z+1,Xe=be.convert(V.format),tt=be.convert(V.type);let qe;if(V.isData3DTexture)C.setTexture3D(V,0),qe=32879;else if(V.isDataArrayTexture)C.setTexture2DArray(V,0),qe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(37440,V.flipY),L.pixelStorei(37441,V.premultiplyAlpha),L.pixelStorei(3317,V.unpackAlignment);const $e=L.getParameter(3314),At=L.getParameter(32878),Rn=L.getParameter(3316),Vi=L.getParameter(3315),nr=L.getParameter(32877),Ct=te.isCompressedTexture?te.mipmaps[0]:te.image;L.pixelStorei(3314,Ct.width),L.pixelStorei(32878,Ct.height),L.pixelStorei(3316,R.min.x),L.pixelStorei(3315,R.min.y),L.pixelStorei(32877,R.min.z),te.isDataTexture||te.isData3DTexture?L.texSubImage3D(qe,ae,j.x,j.y,j.z,Ne,ke,Ge,Xe,tt,Ct.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(qe,ae,j.x,j.y,j.z,Ne,ke,Ge,Xe,Ct.data)):L.texSubImage3D(qe,ae,j.x,j.y,j.z,Ne,ke,Ge,Xe,tt,Ct),L.pixelStorei(3314,$e),L.pixelStorei(32878,At),L.pixelStorei(3316,Rn),L.pixelStorei(3315,Vi),L.pixelStorei(32877,nr),ae===0&&V.generateMipmaps&&L.generateMipmap(qe),de.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?C.setTextureCube(R,0):R.isData3DTexture?C.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?C.setTexture2DArray(R,0):C.setTexture2D(R,0),de.unbindTexture()},this.resetState=function(){v=0,x=0,_=null,de.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Ap.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(i){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!i}}});class N3 extends Ap{}N3.prototype.isWebGL1Renderer=!0;class O3 extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class eb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=id,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const fn=new B;class Io{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ss(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ss(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ss(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ss(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new vn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Io(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const f0=new B,h0=new ut,d0=new ut,U3=new B,p0=new je;class F3 extends sn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new je,this.bindMatrixInverse=new je}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,s=this.geometry;h0.fromBufferAttribute(s.attributes.skinIndex,e),d0.fromBufferAttribute(s.attributes.skinWeight,e),f0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=d0.getComponent(r);if(o!==0){const a=h0.getComponent(r);p0.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(U3.copy(f0).applyMatrix4(p0),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class tb extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class nb extends Jt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Lt,u=Lt,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const m0=new je,k3=new je;class Cp{constructor(e=[],t=[]){this.uuid=vi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:k3;m0.multiplyMatrices(a,t[r]),m0.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Cp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Ux(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new nb(t,e,e,Fn,di);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new tb),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class g0 extends vn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _0=new je,v0=new je,Sc=[],B3=new je,Ca=new sn;class z3 extends sn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new g0(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let s=0;s<n;s++)this.setMatrixAt(s,B3)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ca.geometry=this.geometry,Ca.material=this.material,Ca.material!==void 0)for(let r=0;r<s;r++){this.getMatrixAt(r,_0),v0.multiplyMatrices(n,_0),Ca.matrixWorld=v0,Ca.raycast(e,Sc);for(let o=0,a=Sc.length;o<a;o++){const l=Sc[o];l.instanceId=r,l.object=this,t.push(l)}Sc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new g0(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Rp extends xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const x0=new B,b0=new B,y0=new je,lh=new Sp,wc=new fa;class Lp extends dt{constructor(e=new Wn,t=new Rp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)x0.fromBufferAttribute(t,s-1),b0.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=x0.distanceTo(b0);e.setAttribute("lineDistance",new Vn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wc.copy(n.boundingSphere),wc.applyMatrix4(s),wc.radius+=r,e.ray.intersectsSphere(wc)===!1)return;y0.copy(s).invert(),lh.copy(e.ray).applyMatrix4(y0);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new B,u=new B,f=new B,h=new B,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const v=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let _=v,b=x-1;_<b;_+=p){const y=g.getX(_),E=g.getX(_+1);if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,E),lh.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(h);M<e.near||M>e.far||t.push({distance:M,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let _=v,b=x-1;_<b;_+=p){if(c.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),lh.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(h);E<e.near||E>e.far||t.push({distance:E,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const M0=new B,S0=new B;class ib extends Lp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)M0.fromBufferAttribute(t,s),S0.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+M0.distanceTo(S0);e.setAttribute("lineDistance",new Vn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class V3 extends Lp{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class sb extends xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const w0=new je,ld=new Sp,Tc=new fa,Ec=new B;class G3 extends dt{constructor(e=new Wn,t=new sb){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tc.copy(n.boundingSphere),Tc.applyMatrix4(s),Tc.radius+=r,e.ray.intersectsSphere(Tc)===!1)return;w0.copy(s).invert(),ld.copy(e.ray).applyMatrix4(w0);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,d=p;g<d;g++){const m=c.getX(g);Ec.fromBufferAttribute(f,m),T0(Ec,m,l,s,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,d=p;g<d;g++)Ec.fromBufferAttribute(f,g),T0(Ec,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function T0(i,e,t,n,s,r,o){const a=ld.distanceSqToPoint(i);if(a<t){const l=new B;ld.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Br extends hs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Pp extends xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yp,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zr extends Pp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class rb extends xi{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Pe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yp,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ys(i,e,t){return ob(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function Ac(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ob(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function H3(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function E0(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function ab(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class jl{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class W3 extends jl{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_o,endingEnd:_o}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case vo:r=e,a=2*t-n;break;case uu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vo:o=e,l=2*n-t;break;case uu:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),d=g*g,m=d*g,v=-h*m+2*h*d-h*g,x=(1+h)*m+(-1.5-2*h)*d+(-.5+h)*g+1,_=(-1-p)*m+(1.5+p)*d+.5*g,b=p*m-p*d;for(let y=0;y!==a;++y)r[y]=v*o[u+y]+x*o[c+y]+_*o[l+y]+b*o[f+y];return r}}class lb extends jl{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}}class j3 extends jl{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class zi{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ac(t,this.TimeBufferType),this.values=Ac(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ac(e.times,Array),values:Ac(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new j3(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new W3(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gl:t=this.InterpolantFactoryMethodDiscrete;break;case ea:t=this.InterpolantFactoryMethodLinear;break;case Ff:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gl;case this.InterpolantFactoryMethodLinear:return ea;case this.InterpolantFactoryMethodSmooth:return Ff}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=ys(n,r,o),this.values=ys(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&ob(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=ys(this.times),t=ys(this.values),n=this.getValueSize(),s=this.getInterpolation()===Ff,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const f=a*n,h=f-n,p=f+n;for(let g=0;g!==n;++g){const d=t[f+g];if(d!==t[h+g]||d!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*n,h=o*n;for(let p=0;p!==n;++p)t[h+p]=t[f+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=ys(e,0,o),this.values=ys(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=ys(this.times,0),t=ys(this.values,0),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}zi.prototype.TimeBufferType=Float32Array;zi.prototype.ValueBufferType=Float32Array;zi.prototype.DefaultInterpolation=ea;class pa extends zi{}pa.prototype.ValueTypeName="bool";pa.prototype.ValueBufferType=Array;pa.prototype.DefaultInterpolation=gl;pa.prototype.InterpolantFactoryMethodLinear=void 0;pa.prototype.InterpolantFactoryMethodSmooth=void 0;class cb extends zi{}cb.prototype.ValueTypeName="color";class bl extends zi{}bl.prototype.ValueTypeName="number";class X3 extends jl{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)zn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Ur extends zi{InterpolantFactoryMethodLinear(e){return new X3(this.times,this.values,this.getValueSize(),e)}}Ur.prototype.ValueTypeName="quaternion";Ur.prototype.DefaultInterpolation=ea;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class ma extends zi{}ma.prototype.ValueTypeName="string";ma.prototype.ValueBufferType=Array;ma.prototype.DefaultInterpolation=gl;ma.prototype.InterpolantFactoryMethodLinear=void 0;ma.prototype.InterpolantFactoryMethodSmooth=void 0;class yl extends zi{}yl.prototype.ValueTypeName="vector";class cd{constructor(e,t=-1,n,s=bp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=vi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(q3(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(zi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=H3(l);l=E0(l,1,u),c=E0(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new bl(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const f=u[1];let h=s[f];h||(s[f]=h=[]),h.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,p,g,d){if(p.length!==0){const m=[],v=[];ab(p,m,v,g),m.length!==0&&d.push(new f(h,m,v))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let d=0;d<h[g].morphTargets.length;d++)p[h[g].morphTargets[d]]=-1;for(const d in p){const m=[],v=[];for(let x=0;x!==h[g].morphTargets.length;++x){const _=h[g];m.push(_.time),v.push(_.morphTarget===d?1:0)}s.push(new bl(".morphTargetInfluence["+d+"]",m,v))}l=p.length*o}else{const p=".bones["+t[f].name+"]";n(yl,p+".position",h,"pos",s),n(Ur,p+".quaternion",h,"rot",s),n(yl,p+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Y3(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bl;case"vector":case"vector2":case"vector3":case"vector4":return yl;case"color":return cb;case"quaternion":return Ur;case"bool":case"boolean":return pa;case"string":return ma}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function q3(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Y3(i.type);if(i.times===void 0){const t=[],n=[];ab(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ds={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class $3{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const K3=new $3;class Vr{constructor(e){this.manager=e!==void 0?e:K3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Yi={};class Z3 extends Error{constructor(e,t){super(e),this.response=t}}class ga extends Vr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ds.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Yi[e]!==void 0){Yi[e].push({onLoad:t,onProgress:n,onError:s});return}Yi[e]=[],Yi[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Yi[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=h?parseInt(h):0,g=p!==0;let d=0;const m=new ReadableStream({start(v){x();function x(){f.read().then(({done:_,value:b})=>{if(_)v.close();else{d+=b.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:d,total:p});for(let E=0,A=u.length;E<A;E++){const M=u[E];M.onProgress&&M.onProgress(y)}v.enqueue(b),x()}})}}});return new Response(m)}else throw new Z3(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{ds.add(e,c);const u=Yi[e];delete Yi[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Yi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Yi[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ub extends Vr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ds.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=xl("img");function l(){u(),ds.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class J3 extends Vr{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new nb,a=new ga(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){const c=r.parse(l);c&&(c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Sn,o.wrapT=c.wrapT!==void 0?c.wrapT:Sn,o.magFilter=c.magFilter!==void 0?c.magFilter:Ut,o.minFilter=c.minFilter!==void 0?c.minFilter:Ut,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Zs),c.mipmapCount===1&&(o.minFilter=Ut),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c))},n,s),o}}class fb extends Vr{constructor(e){super(e)}load(e,t,n,s){const r=new Jt,o=new ub(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class af extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ch=new je,A0=new B,C0=new B;class Ip{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tp,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;A0.setFromMatrixPosition(e.matrixWorld),t.position.copy(A0),C0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(C0),t.updateMatrixWorld(),ch.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ch),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Q3 extends Ip{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=vl*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class eL extends af{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Q3}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const R0=new je,Ra=new B,uh=new B;class tL extends Ip{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ra.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ra),uh.copy(n.position),uh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(uh),n.updateMatrixWorld(),s.makeTranslation(-Ra.x,-Ra.y,-Ra.z),R0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(R0)}}class nL extends af{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new tL}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class iL extends Ip{constructor(){super(new Wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hb extends af{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new iL}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sL extends af{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ud{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class rL extends Wn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class oL extends Vr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ds.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){ds.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class aL{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){zn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const o=this._workIndex*r;zn.multiplyQuaternionsFlat(e,o,e,t,e,n),zn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*s}}}const Dp="\\[\\]\\.:\\/",lL=new RegExp("["+Dp+"]","g"),Np="[^"+Dp+"]",cL="[^"+Dp.replace("\\.","")+"]",uL=/((?:WC+[\/:])*)/.source.replace("WC",Np),fL=/(WCOD+)?/.source.replace("WCOD",cL),hL=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Np),dL=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Np),pL=new RegExp("^"+uL+fL+hL+dL+"$"),mL=["material","materials","bones","map"];class gL{constructor(e,t,n){const s=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class it{constructor(e,t,n){this.path=t,this.parsedPath=n||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,n):new it(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lL,"")}static parseTrackName(e){const t=pL.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);mL.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=gL;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class _L{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:_o,endingEnd:_o};for(let c=0;c!==o;++c){const u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=cE,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case fE:for(let u=0,f=l.length;u!==f;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case bp:default:for(let u=0,f=l.length;u!==f;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const o=n===uE;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===lE){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=vo,s.endingEnd=vo):(e?s.endingStart=this.zeroSlopeAtStart?vo:_o:s.endingStart=uu,t?s.endingEnd=this.zeroSlopeAtEnd?vo:_o:s.endingEnd=uu)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const vL=new Float32Array(1);class xL extends kr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let f=0;f!==r;++f){const h=s[f],p=h.name;let g=u[p];if(g!==void 0)++g.referenceCount,o[f]=g;else{if(g=o[f],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const d=t&&t._propertyBindings[f].binding.parsedPath;g=new aL(it.create(n,p,d),h.ValueTypeName,h.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),o[f]=g}a[f].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const f=a.actionByRoot,h=(e._localRoot||this._root).uuid;delete f[h],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new lb(new Float32Array(2),new Float32Array(2),1,vL),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?cd.findByName(s,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=bp),l!==void 0){const f=l.actionByRoot[r];if(f!==void 0&&f.blendMode===n)return f;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new _L(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?cd.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,f=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=u,t[u]=f,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class bL extends eb{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Pk{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Cc=new B,bt=new wp;class Ik extends ib{constructor(e){const t=new Wn,n=new Rp({color:16777215,vertexColors:!0,toneMapped:!1}),s=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(g,d){l(g),l(d)}function l(g){s.push(0,0,0),r.push(0,0,0),o[g]===void 0&&(o[g]=[]),o[g].push(s.length/3-1)}t.setAttribute("position",new Vn(s,3)),t.setAttribute("color",new Vn(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const c=new Pe(16755200),u=new Pe(16711680),f=new Pe(43775),h=new Pe(16777215),p=new Pe(3355443);this.setColors(c,u,f,h,p)}setColors(e,t,n,s,r){const a=this.geometry.getAttribute("color");a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,s.r,s.g,s.b),a.setXYZ(39,s.r,s.g,s.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,s=1;bt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),wt("c",t,e,bt,0,0,-1),wt("t",t,e,bt,0,0,1),wt("n1",t,e,bt,-n,-s,-1),wt("n2",t,e,bt,n,-s,-1),wt("n3",t,e,bt,-n,s,-1),wt("n4",t,e,bt,n,s,-1),wt("f1",t,e,bt,-n,-s,1),wt("f2",t,e,bt,n,-s,1),wt("f3",t,e,bt,-n,s,1),wt("f4",t,e,bt,n,s,1),wt("u1",t,e,bt,n*.7,s*1.1,-1),wt("u2",t,e,bt,-n*.7,s*1.1,-1),wt("u3",t,e,bt,0,s*2,-1),wt("cf1",t,e,bt,-n,0,1),wt("cf2",t,e,bt,n,0,1),wt("cf3",t,e,bt,0,-s,1),wt("cf4",t,e,bt,0,s,1),wt("cn1",t,e,bt,-n,0,-1),wt("cn2",t,e,bt,n,0,-1),wt("cn3",t,e,bt,0,-s,-1),wt("cn4",t,e,bt,0,s,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function wt(i,e,t,n,s,r,o){Cc.set(s,r,o).unproject(n);const a=e[i];if(a!==void 0){const l=t.getAttribute("position");for(let c=0,u=a.length;c<u;c++)l.setXYZ(a[c],Cc.x,Cc.y,Cc.z)}}const es=yL();function yL(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function ML(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=$t(i,-65504,65504),es.floatView[0]=i;const e=es.uint32View[0],t=e>>23&511;return es.baseTable[t]+((e&8388607)>>es.shiftTable[t])}function SL(i){const e=i>>10;return es.uint32View[0]=es.mantissaTable[es.offsetTable[e]+(i&1023)]+es.exponentTable[e],es.floatView[0]}const Rc={toHalfFloat:ML,fromHalfFloat:SL};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xp);function L0(i,e){if(e===hE)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===nd||e===Nx){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===nd)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class wL extends Vr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new RL(t)}),this.register(function(t){return new UL(t)}),this.register(function(t){return new FL(t)}),this.register(function(t){return new kL(t)}),this.register(function(t){return new PL(t)}),this.register(function(t){return new IL(t)}),this.register(function(t){return new DL(t)}),this.register(function(t){return new NL(t)}),this.register(function(t){return new CL(t)}),this.register(function(t){return new OL(t)}),this.register(function(t){return new LL(t)}),this.register(function(t){return new EL(t)}),this.register(function(t){return new BL(t)}),this.register(function(t){return new zL(t)})}load(e,t,n,s){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=ud.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ga(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===db){try{o[Ze.KHR_BINARY_GLTF]=new VL(e)}catch(f){s&&s(f);return}r=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new eP(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const f=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(f){case Ze.KHR_MATERIALS_UNLIT:o[f]=new AL;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[f]=new GL(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[f]=new HL;break;case Ze.KHR_MESH_QUANTIZATION:o[f]=new WL;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function TL(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class EL{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Pe(16777215);l.color!==void 0&&u.fromArray(l.color);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new hb(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new nL(u),c.distance=f;break;case"spot":c=new eL(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Es(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class AL{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return yr}extendParams(e,t,n){const s=[];e.color=new Pe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,nt))}return Promise.all(s)}}class CL{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class RL{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zr}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(a,a)}return Promise.all(r)}}class LL{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zr}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class PL{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zr}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,nt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class IL{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zr}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class DL{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zr}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Pe(a[0],a[1],a[2]),Promise.all(r)}}class NL{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zr}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class OL{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zr}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Pe(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,nt)),Promise.all(r)}}class UL{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class FL{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class kL{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class BL{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,f=s.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(p),u,f,h,s.mode,s.filter),p})})}else return null}}class zL{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Zn.TRIANGLES&&c.mode!==Zn.TRIANGLE_STRIP&&c.mode!==Zn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,p=[];for(const g of f){const d=new je,m=new B,v=new zn,x=new B(1,1,1),_=new z3(g.geometry,g.material,h);for(let b=0;b<h;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&v.fromBufferAttribute(l.ROTATION,b),l.SCALE&&x.fromBufferAttribute(l.SCALE,b),_.setMatrixAt(b,d.compose(m,v,x));for(const b in l)b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);dt.prototype.copy.call(_,g),_.frustumCulled=!1,this.parser.assignFinalMaterial(_),p.push(_)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const db="glTF",La=12,P0={JSON:1313821514,BIN:5130562};class VL{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,La),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==db)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-La,r=new DataView(e,La);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===P0.JSON){const c=new Uint8Array(e,La+o,a);this.content=n.decode(c)}else if(l===P0.BIN){const c=La+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class GL{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=fd[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=fd[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],p=Do[h.componentType];c[f]=p.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f){s.decodeDracoFile(u,function(h){for(const p in h.attributes){const g=h.attributes[p],d=l[p];d!==void 0&&(g.normalized=d)}f(h)},a,c)})})}}class HL{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class WL{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class pb extends jl{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,f=(n-t)/u,h=f*f,p=h*f,g=e*c,d=g-c,m=-2*p+3*h,v=p-h,x=1-m,_=v-h+f;for(let b=0;b!==a;b++){const y=o[d+b+a],E=o[d+b+l]*u,A=o[g+b+a],M=o[g+b]*u;r[b]=x*y+_*E+m*A+v*M}return r}}const jL=new zn;class XL extends pb{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return jL.fromArray(r).normalize().toArray(r),r}}const Zn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Do={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},I0={9728:Lt,9729:Ut,9984:td,9985:Ix,9986:Bc,9987:Zs},D0={33071:Sn,33648:cu,10497:hi},fh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},YL={CUBICSPLINE:void 0,LINEAR:ea,STEP:gl},hh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function qL(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Pp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:fs})),i.DefaultMaterial}function Pa(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Es(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function $L(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;o.push(h)}if(s){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(h)}if(r){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=f),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function KL(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ZL(i){const e=i.extensions&&i.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+N0(e.attributes):t=i.indices+":"+N0(i.attributes)+":"+i.mode,t}function N0(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function hd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function JL(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const QL=new je;class eP{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new TL,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new fb(this.options.manager):this.textureLoader=new oL(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ga(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};Pa(r,a,s),Es(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(ud.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=fh[s.type],a=Do[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new vn(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=fh[s.type],c=Do[s.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let d,m;if(p&&p!==f){const v=Math.floor(h/p),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+v+":"+s.count;let _=t.cache.get(x);_||(d=new c(a,v*p,s.count*p/u),_=new eb(d,p/u),t.cache.add(x,_)),m=new Io(_,l,h%p/u,g)}else a===null?d=new c(s.count*l):d=new c(a,h,s.count*l),m=new vn(d,l,g);if(s.sparse!==void 0){const v=fh.SCALAR,x=Do[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,y=new x(o[1],_,s.sparse.count*v),E=new c(o[2],b,s.sparse.count*l);a!==null&&(m=new vn(m.array.slice(),m.itemSize,m.normalized));for(let A=0,M=y.length;A<M;A++){const T=y[A];if(m.setX(T,E[A*l]),l>=2&&m.setY(T,E[A*l+1]),l>=3&&m.setZ(T,E[A*l+2]),l>=4&&m.setW(T,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"";const h=(r.samplers||{})[o.sampler]||{};return u.magFilter=I0[h.magFilter]||Ut,u.minFilter=I0[h.minFilter]||Zs,u.wrapS=D0[h.wrapS]||hi,u.wrapT=D0[h.wrapT]||hi,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(d){const m=new Jt(d);m.needsUpdate=!0,h(m)}),t.load(ud.resolveURL(f,r.path),g,void 0,p)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),f.userData.mimeType=o.mimeType||JL(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.encoding=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new sb,xi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Rp,xi.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Pp}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){const f=s[Ze.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{const f=r.pbrMetallicRoughness||{};if(a.color=new Pe(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.fromArray(h),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,nt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ns);const u=r.alphaMode||hh.OPAQUE;if(u===hh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===hh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==yr&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ve(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;a.normalScale.set(f,f)}return r.occlusionTexture!==void 0&&o!==yr&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==yr&&(a.emissive=new Pe().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==yr&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,nt)),Promise.all(c).then(function(){const f=new o(a);return r.name&&(f.name=r.name),Es(f,r),t.associations.set(f,{materials:e}),r.extensions&&Pa(s,f,r),f})}createUniqueName(e){const t=it.sanitizeNodeName(e||"");let n=t;for(let s=1;this.nodeNamesUsed[n];++s)n=t+"_"+s;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return O0(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=ZL(c),f=s[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=O0(new Wn,c,t),s[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?qL(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let p=0,g=u.length;p<g;p++){const d=u[p],m=o[p];let v;const x=c[p];if(m.mode===Zn.TRIANGLES||m.mode===Zn.TRIANGLE_STRIP||m.mode===Zn.TRIANGLE_FAN||m.mode===void 0)v=r.isSkinnedMesh===!0?new F3(d,x):new sn(d,x),v.isSkinnedMesh===!0&&v.normalizeSkinWeights(),m.mode===Zn.TRIANGLE_STRIP?v.geometry=L0(v.geometry,Nx):m.mode===Zn.TRIANGLE_FAN&&(v.geometry=L0(v.geometry,nd));else if(m.mode===Zn.LINES)v=new ib(d,x);else if(m.mode===Zn.LINE_STRIP)v=new Lp(d,x);else if(m.mode===Zn.LINE_LOOP)v=new V3(d,x);else if(m.mode===Zn.POINTS)v=new G3(d,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(v.geometry.morphAttributes).length>0&&KL(v,r),v.name=t.createUniqueName(r.name||"mesh_"+e),Es(v,r),m.extensions&&Pa(s,v,m),t.assignFinalMaterial(v),f.push(v)}for(let p=0,g=f.length;p<g;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return f[0];const h=new Vs;t.associations.set(h,{meshes:e});for(let p=0,g=f.length;p<g;p++)h.add(f[p]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new mn(LE.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Wl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Es(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new je;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Cp(a,l)})}loadAnimation(e){const n=this.json.animations[e],s=[],r=[],o=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const f=n.channels[c],h=n.samplers[f.sampler],p=f.target,g=p.node,d=n.parameters!==void 0?n.parameters[h.input]:h.input,m=n.parameters!==void 0?n.parameters[h.output]:h.output;s.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",d)),o.push(this.getDependency("accessor",m)),a.push(h),l.push(p)}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2],p=c[3],g=c[4],d=[];for(let v=0,x=u.length;v<x;v++){const _=u[v],b=f[v],y=h[v],E=p[v],A=g[v];if(_===void 0)continue;_.updateMatrix();let M;switch(Ms[A.path]){case Ms.weights:M=bl;break;case Ms.rotation:M=Ur;break;case Ms.position:case Ms.scale:default:M=yl;break}const T=_.name?_.name:_.uuid,P=E.interpolation!==void 0?YL[E.interpolation]:ea,D=[];Ms[A.path]===Ms.weights?_.traverse(function(U){U.morphTargetInfluences&&D.push(U.name?U.name:U.uuid)}):D.push(T);let W=y.array;if(y.normalized){const U=hd(W.constructor),N=new Float32Array(W.length);for(let O=0,Y=W.length;O<Y;O++)N[O]=W[O]*U;W=N}for(let U=0,N=D.length;U<N;U++){const O=new M(D[U]+"."+Ms[A.path],b.array,W,P);E.interpolation==="CUBICSPLINE"&&(O.createInterpolant=function(G){const z=this instanceof Ur?XL:pb;return new z(this.times,this.values,this.getValueSize()/3,G)},O.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),d.push(O)}}const m=n.name?n.name:"animation_"+e;return new cd(m,void 0,d)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(h,QL)});for(let p=0,g=f.length;p<g;p++)u.add(f[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new tb:c.length>1?u=new Vs:c.length===1?u=c[0]:u=new dt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(r.name&&(u.userData.name=r.name,u.name=o),Es(u,r),r.extensions&&Pa(n,u,r),r.matrix!==void 0){const f=new je;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Vs;n.name&&(r.name=s.createUniqueName(n.name)),Es(r,n),n.extensions&&Pa(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)r.add(l[u]);const c=u=>{const f=new Map;for(const[h,p]of s.associations)(h instanceof xi||h instanceof Jt)&&f.set(h,p);return u.traverse(h=>{const p=s.associations.get(h);p!=null&&f.set(h,p)}),f};return s.associations=c(r),r})}}function tP(i,e,t){const n=e.attributes,s=new ua;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),a.normalized){const u=hd(Do[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new B,l=new B;for(let c=0,u=r.length;c<u;c++){const f=r[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){const d=hd(Do[h.componentType]);l.multiplyScalar(d)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new fa;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function O0(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=fd[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Es(i,e),tP(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?$L(i,e.targets,t):i})}class nP extends J3{constructor(e){super(e),this.type=is}parse(e){const a=function(_,b){switch(_){case 1:console.error("THREE.RGBELoader Read Error: "+(b||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(b||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(b||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(b||""))}return-1},f=`
`,h=function(_,b,y){b=b||1024;let A=_.pos,M=-1,T=0,P="",D=String.fromCharCode.apply(null,new Uint16Array(_.subarray(A,A+128)));for(;0>(M=D.indexOf(f))&&T<b&&A<_.byteLength;)P+=D,T+=D.length,A+=128,D+=String.fromCharCode.apply(null,new Uint16Array(_.subarray(A,A+128)));return-1<M?(y!==!1&&(_.pos+=T+M+1),P+D.slice(0,M)):!1},p=function(_){const b=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,E=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,A=/^\s*FORMAT=(\S+)\s*$/,M=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,T={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let P,D;if(_.pos>=_.byteLength||!(P=h(_)))return a(1,"no header found");if(!(D=P.match(b)))return a(3,"bad initial token");for(T.valid|=1,T.programtype=D[1],T.string+=P+`
`;P=h(_),P!==!1;){if(T.string+=P+`
`,P.charAt(0)==="#"){T.comments+=P+`
`;continue}if((D=P.match(y))&&(T.gamma=parseFloat(D[1])),(D=P.match(E))&&(T.exposure=parseFloat(D[1])),(D=P.match(A))&&(T.valid|=2,T.format=D[1]),(D=P.match(M))&&(T.valid|=4,T.height=parseInt(D[1],10),T.width=parseInt(D[2],10)),T.valid&2&&T.valid&4)break}return T.valid&2?T.valid&4?T:a(3,"missing image size specifier"):a(3,"missing format specifier")},g=function(_,b,y){const E=b;if(E<8||E>32767||_[0]!==2||_[1]!==2||_[2]&128)return new Uint8Array(_);if(E!==(_[2]<<8|_[3]))return a(3,"wrong scanline width");const A=new Uint8Array(4*b*y);if(!A.length)return a(4,"unable to allocate buffer space");let M=0,T=0;const P=4*E,D=new Uint8Array(4),W=new Uint8Array(P);let U=y;for(;U>0&&T<_.byteLength;){if(T+4>_.byteLength)return a(1);if(D[0]=_[T++],D[1]=_[T++],D[2]=_[T++],D[3]=_[T++],D[0]!=2||D[1]!=2||(D[2]<<8|D[3])!=E)return a(3,"bad rgbe scanline format");let N=0,O;for(;N<P&&T<_.byteLength;){O=_[T++];const G=O>128;if(G&&(O-=128),O===0||N+O>P)return a(3,"bad scanline data");if(G){const z=_[T++];for(let ee=0;ee<O;ee++)W[N++]=z}else W.set(_.subarray(T,T+O),N),N+=O,T+=O}const Y=E;for(let G=0;G<Y;G++){let z=0;A[M]=W[G+z],z+=E,A[M+1]=W[G+z],z+=E,A[M+2]=W[G+z],z+=E,A[M+3]=W[G+z],M+=4}U--}return A},d=function(_,b,y,E){const A=_[b+3],M=Math.pow(2,A-128)/255;y[E+0]=_[b+0]*M,y[E+1]=_[b+1]*M,y[E+2]=_[b+2]*M,y[E+3]=1},m=function(_,b,y,E){const A=_[b+3],M=Math.pow(2,A-128)/255;y[E+0]=Rc.toHalfFloat(Math.min(_[b+0]*M,65504)),y[E+1]=Rc.toHalfFloat(Math.min(_[b+1]*M,65504)),y[E+2]=Rc.toHalfFloat(Math.min(_[b+2]*M,65504)),y[E+3]=Rc.toHalfFloat(1)},v=new Uint8Array(e);v.pos=0;const x=p(v);if(x!==-1){const _=x.width,b=x.height,y=g(v.subarray(v.pos),_,b);if(y!==-1){let E,A,M;switch(this.type){case di:M=y.length/4;const T=new Float32Array(M*4);for(let D=0;D<M;D++)d(y,D*4,T,D*4);E=T,A=di;break;case is:M=y.length/4;const P=new Uint16Array(M*4);for(let D=0;D<M;D++)m(y,D*4,P,D*4);E=P,A=is;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:_,height:b,data:E,header:x.string,gamma:x.gamma,exposure:x.exposure,type:A}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(o,a){switch(o.type){case di:case is:o.encoding=Js,o.minFilter=Ut,o.magFilter=Ut,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,s)}}class Ia{constructor({manifest:e={},loader:t=null,isMobile:n=!1,assetsInfos:s=new Map,loadedAssets:r=new Map,progressCallback:o=()=>null,afterLoadCallback:a=l=>l}={}){this.manifest=e,this.loader=t,this.isMobile=n,this.assetsToLoad=new Map,this.assetsInfos=s,this.loadedAssets=r,this.progressCallback=o,this.afterLoadCallback=a,this.add(...Object.keys(e))}add(...e){for(const t of e)!this.assetsToLoad.has(t)&&this.manifest[t]&&this.assetsToLoad.set(t,this.manifest[t])}getAsset(e){return this.loadedAssets.get(e)}getAssets(...e){return Object.fromEntries(e?[...this.loadedAssets.entries()].filter(([t])=>e.includes(t)):this.loadedAssets.entries())}async loadAsset(e){var t,n;if(this.loadedAssets.has(e))return this.loadedAssets.get(e);try{const s=this.isMobile&&this.manifest[e].pathMobile?this.manifest[e].pathMobile:this.manifest[e].path,r=this.afterLoadCallback(await this.loader.loadAsync(s,o=>this.assetProgress(o,e)));return this.loadedAssets.set(e,(t=r==null?void 0:r.scene)!=null&&t.isObject3D?r.scene:r),(n=this.manifest[e].callbacks)==null||n.forEach(o=>o(this.loadedAssets.get(e))),r}catch{return}}loadAssets(){return Promise.all([...this.assetsToLoad.keys()].map(e=>this.loadAsset(e)))}loadCriticalAssets(){return Promise.all([...this.assetsToLoad.keys()].map(e=>this.manifest[e].critical&&this.loadAsset(e)))}assetProgress(e,t){var s;this.assetsInfos.has(t)||this.assetsInfos.set(t,{size:e.total,progress:0});const n=this.assetsInfos.get(t);n.progress=e.loaded/n.size,(s=this.progressCallback)==null||s.call(this)}}var wl;class iP extends ga{constructor(t){super(t);we(this,wl,void 0);rt(this,wl,new ub),this.setResponseType("blob")}load(t,n,s,r){const o=a=>{const l=URL.createObjectURL(a),c=document.createElement("img");c.onload=()=>{ds.add(t,c),URL.revokeObjectURL(l),document.body.removeChild(c),$(this,wl).load(t,n,()=>{},r)},c.src=l,c.style.visibility="hidden",document.body.appendChild(c)};super.load(t,o,s,r)}}wl=new WeakMap;var Tl;class sP extends Vr{constructor(t){super(t);we(this,Tl,void 0);rt(this,Tl,new ga)}load(t,n,s,r){$(this,Tl).load(t,o=>{try{n(JSON.parse(o))}catch(a){r!==void 0&&r(a);return}},s,r)}}Tl=new WeakMap;var El,Sd;class rP extends ga{constructor(t){super(t);we(this,El,void 0);we(this,Sd,void 0);rt(this,El,new fb),this.setResponseType("blob")}load(t,n,s,r){const o=a=>{const l=URL.createObjectURL(a),c=document.createElement("img");c.onload=()=>{ds.add(t,c),URL.revokeObjectURL(l),document.body.removeChild(c),$(this,El).load(t,n,()=>{},r)},c.src=l,c.style.visibility="hidden",document.body.appendChild(c)};super.load(t,o,s,r)}}El=new WeakMap,Sd=new WeakMap;ds.enabled=!0;var Ei,Ai,Al,Cl,dd,du,mb,pu,gb,Ls;class oP{constructor({blockingLoad:e=!0,withPriority:t=!1,withCriticals:n=!1,isMobile:s=!1}={}){we(this,Cl);we(this,du);we(this,pu);we(this,Ei,new Map);we(this,Ai,new Map);we(this,Al,0);we(this,Ls,()=>{rt(this,Al,[...$(this,Ei).values()].map(e=>e.progress).reduce((e,t)=>e+t,0)/$(this,Ei).size),We.emit(ct.LOADER_PROGRESS,$(this,Al))});this.blockingLoad=e,this.withPriority=t,this.withCriticals=n,this.isMobile=s;const r=new wL;this.loaders={images:new Ia({manifest:ao.images,isMobile:this.isMobile,loader:new iP,assetsInfos:$(this,Ei),loadedAssets:$(this,Ai),progressCallback:$(this,Ls)}),textures:new Ia({manifest:ao.textures,isMobile:this.isMobile,loader:new rP,assetsInfos:$(this,Ei),loadedAssets:$(this,Ai),progressCallback:$(this,Ls)}),envMaps:new Ia({manifest:ao.envMaps,isMobile:this.isMobile,loader:new nP,assetsInfos:$(this,Ei),loadedAssets:$(this,Ai),progressCallback:$(this,Ls)}),models:new Ia({manifest:ao.models,isMobile:this.isMobile,loader:r,assetsInfos:$(this,Ei),loadedAssets:$(this,Ai),progressCallback:$(this,Ls),afterLoadCallback:o=>(o.scene.animations=o.animations,o.scene)}),jsons:new Ia({manifest:ao.jsons,isMobile:this.isMobile,loader:new sP,assetsInfos:$(this,Ei),loadedAssets:$(this,Ai),progressCallback:$(this,Ls)})}}async load(){this.withCriticals&&await He(this,du,mb).call(this),this.blockingLoad?await He(this,Cl,dd).call(this):this.withPriority?He(this,pu,gb).call(this):He(this,Cl,dd).call(this)}get(...e){return e.length>1?e.map(t=>$(this,Ai).get(t)):$(this,Ai).get(e[0])}}Ei=new WeakMap,Ai=new WeakMap,Al=new WeakMap,Cl=new WeakSet,dd=function(){return Promise.all(Object.values(this.loaders).map(e=>e.loadAssets()))},du=new WeakSet,mb=function(){return Promise.all(Object.values(this.loaders).map(e=>e.loadCriticalAssets()))},pu=new WeakSet,gb=function(){return Promise.all(Object.values(this.loaders).map(e=>[...e.assetsToLoad.entries()].map(([t,n])=>({loader:e,key:t,priority:n.priority||0}))).flat().sort((e,t)=>e.priority-t.priority).map(({loader:e,key:t})=>e.loadAsset(t)))},Ls=new WeakMap;var No,Rl;class aP{constructor(){we(this,No,!1);Xn(this,"play",()=>{rt(this,No,!0),$(this,Rl).call(this)});Xn(this,"pause",()=>{rt(this,No,!1)});we(this,Rl,()=>{if(!$(this,No))return;window.requestAnimationFrame($(this,Rl));const e=Date.now();this.delta=e-this.current,this.elapsed+=this.delta,this.current=e,this.delta>60&&(this.delta=60),this.params.et=this.elapsed,this.params.dt=this.delta*.001,We.emit(ct.TICK,this.params),We.emit(ct.RENDER,this.params)});We.register(this),this.current=Date.now(),this.elapsed=0,this.delta=16,this.params={et:0,dt:0}}onAttach(){this.play()}}No=new WeakMap,Rl=new WeakMap;function lP(){const i=new oP,e=new aP;return{assetsManager:i,ticker:e}}const cP=[[0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0],[0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0],[0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0],[0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0],[0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0],[0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0],[0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0],[0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0],[0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0],[0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0],[0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0],[0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0],[0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0],[0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0]],uP={0:"Terrain",1:"Obstacles",2:"Spawn",3:"Water",4:"Running",5:"Indoor"},_b={data:cP,mapping:uP},fP=Math.PI/180;function Lc(i,e,t){return Math.max(e,Math.min(t,i))}function hP(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function dP(i,e,t){return(1-t)*i+t*e}function Da(i,e,t,n){return dP(i,e,1-Math.exp(-t*n))}function pP(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Dk(i,e){return i+Math.floor(Math.random()*(e-i+1))}function dh(i,e){return i+Math.random()*(e-i)}function mP(i){return i*fP}const gP=!0;new URLSearchParams(window.location.search);const _P=gP,io=[50,30,10],vP=[13938487,12632256,13467442],Ml={size:_b.data.length},hn={defaultPosition:[Ml.size*.5,4,Ml.size*.5],minZoom:50,maxZoom:5,baseFov:45,dragEase:5,zoomEase:5,playerPosEase:20,maxTiltAngle:mP(65),zoomOffsetY:8},so={tablet:768,desktop:1025,large:1441},xP={body:{aoMapIntensity:.7},gold:{roughness:.185,metalness:.446,color:new Pe(16642985),envMapIntensity:.165},face:{roughness:.1,metalness:0,envMapIntensity:.17,aoMapIntensity:.7}},bP="modulepreload",yP=function(i){return"/"+i},U0={},Va=function(e,t,n){if(!t||t.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map(r=>{if(r=yP(r),r in U0)return;U0[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!n)for(let u=s.length-1;u>=0;u--){const f=s[u];if(f.href===r&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":bP,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};async function MP(){await Va(()=>Promise.resolve({}),["assets/debug-97656c10.css"]);const{URLParams:i}=await Va(()=>import("./URLParams-01742ef5.js"),["assets/URLParams-01742ef5.js","assets/debugConfig-5b4f09a7.js"]),e=new i,t=(await Va(()=>import("./Mapping-08a84274.js"),["assets/Mapping-08a84274.js","assets/debugConfig-5b4f09a7.js","assets/_commonjsHelpers-725317a4.js"])).Mapping,n=new t;await n.load();const s=(await Va(()=>import("./Stats-6ba10e50.js"),[])).Stats,r=new s;return await r.load(),window.APP=Oe,{urlParams:e,mapping:n,stats:r}}var mu;class SP{constructor(){we(this,mu,e=>{We.emit(ct.KEY_DOWN,e.key)});We.register(this)}onAttach(){document.addEventListener("keydown",$(this,mu))}}mu=new WeakMap;var wr,Ll,Pl,gu,_u,vu,xu;class wP{constructor(){we(this,wr,void 0);we(this,Ll,e=>{var t;if(this.isTouch?e.touches&&e.touches.length>0&&this.updateCoordinate(e.touches[0].clientX,e.touches[0].clientY):this.updateCoordinate(e.clientX,e.clientY),We.emit(ct.POINTER_MOVE,this.coordinates),((t=e.touches)==null?void 0:t.length)===2&&$(this,wr)){const n=Math.hypot(e.touches[0].pageX-e.touches[1].pageX,e.touches[0].pageY-e.touches[1].pageY);We.emit(ct.PINCH,n-$(this,wr)),rt(this,wr,n)}this.isDown&&(this.isDragging=!0,We.emit(ct.DRAG,new Ve().subVectors(this.coordinates.webgl,this.previousCoordinates.webgl)))});we(this,Pl,()=>{this.isDown&&(this.previousCoordinates.webgl.copy(this.coordinates.webgl),this.previousCoordinates.dom.copy(this.coordinates.dom),this.isDown=!1,this.isDragging&&(this.isDragging=!1,We.emit(ct.DRAG_END,this.coordinates)),We.emit(ct.POINTER_UP,this.coordinates))});we(this,gu,e=>{if(!this.isDown){switch(e.pointerType){case"mouse":this.isTouch=!1;break;case"touch":this.isTouch=!0;break;case"pen":this.isTouch=!0;break}this.updateCoordinate(e.clientX,e.clientY),this.isDown=!0,We.emit(ct.POINTER_DOWN,this.coordinates)}});we(this,_u,()=>{this.isTouch||(this.isDown=!1,We.emit(ct.POINTER_UP,this.coordinates))});we(this,vu,e=>{var t;((t=e.touches)==null?void 0:t.length)===2&&rt(this,wr,Math.hypot(e.touches[0].pageX-e.touches[1].pageX,e.touches[0].pageY-e.touches[1].pageY))});we(this,xu,e=>{We.emit(ct.WHEEL,e.deltaY)});We.register(this),this.isTouch=!!(window.matchMedia("(pointer: coarse)").matches||typeof window.ontouchstart=="function"||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),this.isDown=!1,this.isDragging=!1}onAttach(){this.coordinates={webgl:new Ve,dom:new Ve(Oe.tools.viewport.width*.5,Oe.tools.viewport.height*.5)},this.previousCoordinates={webgl:this.coordinates.webgl.clone(),dom:this.coordinates.dom.clone()},Oe.$app.addEventListener("mousemove",$(this,Ll)),Oe.$app.addEventListener("touchmove",$(this,Ll),{passive:!0}),Oe.$app.addEventListener("pointerdown",$(this,gu)),Oe.$app.addEventListener("touchstart",$(this,vu),{passive:!0}),Oe.$app.addEventListener("wheel",$(this,xu),{passive:!0}),Oe.$app.addEventListener("mouseup",$(this,Pl)),Oe.$app.addEventListener("touchend",$(this,Pl)),Oe.$app.addEventListener("pointerleave",$(this,_u))}updateCoordinate(e,t){this.previousCoordinates.dom.copy(this.coordinates.dom),this.previousCoordinates.webgl.copy(this.coordinates.webgl),this.coordinates.webgl.set(e/Oe.tools.viewport.width*2-1,-(t/Oe.tools.viewport.height)*2+1),this.coordinates.dom.set(e,t)}}wr=new WeakMap,Ll=new WeakMap,Pl=new WeakMap,gu=new WeakMap,_u=new WeakMap,vu=new WeakMap,xu=new WeakMap;class TP{constructor(){Xn(this,"resize",e=>{if(e[0].contentBoxSize){const t=Array.isArray(e[0].contentBoxSize)?e[0].contentBoxSize[0]:e[0].contentBoxSize;this.width=t.inlineSize,this.height=t.blockSize}else this.width=e[0].contentRect.width,this.height=e[0].contentRect.height;this.dpr=Math.min(window.innerWidth<so.tablet?2:1.5,window.devicePixelRatio),this.ratio=this.width/this.height,this.breakpoint=window.innerWidth<so.tablet?"mobile":window.innerWidth<so.desktop?"tablet":"desktop",We.emit(ct.RESIZE,this.infos)});We.register(this);const e=Oe.$wrapper.getBoundingClientRect();this.width=Math.min(window.innerWidth,e.width),this.height=e.height,this.dpr=Math.min(window.innerWidth<so.tablet?2:1.5,window.devicePixelRatio),this.ratio=this.width/this.height,this.breakpoint=window.innerWidth<so.tablet?"mobile":window.innerWidth<so.desktop?"tablet":"desktop",this.isMobileAtLaunch=this.breakpoint==="mobile"}onAttach(){new ResizeObserver(this.resize).observe(Oe.$wrapper)}get infos(){return{width:this.width,height:this.height,dpr:this.dpr,ratio:this.ratio,device:this.breakpoint}}}function EP(){const i=new wP,e=new TP,t=new SP;return{mouse:i,viewport:e,keyboard:t}}const Kt={uTime:{value:0},uZoom:{value:0},uEmissiveOnly:{value:!1},uShadowOnly:{value:!1}};function AP(i){const e=new Map,t=new Map,n=i.clone();return vb(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function vb(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)vb(i.children[n],e.children[n],t)}var Jn,Ji,Dn,Il,Oo,Vc;class CP extends mn{constructor(){super(hn.baseFov,Oe.tools.viewport.ratio,1,100);we(this,Oo);Xn(this,"orbitControls");Xn(this,"dragEase",hn.dragEase);Xn(this,"zoomEase",hn.zoomEase);Xn(this,"targetZoom",0);we(this,Jn,0);we(this,Ji,new B);we(this,Dn,new Ve);we(this,Il,!1);We.register(this),this.position.fromArray(hn.defaultPosition),$(this,Dn).set(this.position.x,this.position.z)}onAttach(){var t;(t=Oe.debug)==null||t.mapping.add(this,"Camera")}onDrag(t){this.focusPlayer&&(this.focusPlayer=!1),He(this,Oo,Vc).call(this),this.dragEase=10;const n=this.getVisibleWidthAtZDepth()*.5,s=this.getVisibleHeightAtZDepth()*.5;$(this,Dn).x-=t.x*n,$(this,Dn).y+=t.y*s*($(this,Jn)+1)}onDragEnd(){this.dragEase=hn.dragEase}onPinch(t){this.focusPlayer&&(this.focusPlayer=!1),He(this,Oo,Vc).call(this),this.targetZoom=Lc(this.targetZoom+t*.005,0,1)}onWheel(t){this.focusPlayer&&(this.focusPlayer=!1),He(this,Oo,Vc).call(this),this.targetZoom=Lc(this.targetZoom-t*.001,0,1)}onTick({dt:t}){this.orbitControls||(rt(this,Jn,Da($(this,Jn),this.targetZoom,this.zoomEase,t)),Kt.uZoom.value=$(this,Jn),this.position.y=hP($(this,Jn),0,1,hn.minZoom,hn.maxZoom),$(this,Dn).x=Lc($(this,Dn).x,0,Ml.size),$(this,Dn).y=Lc($(this,Dn).y,0,Ml.size+$(this,Jn)*20),this.focusPlayer?(this.position.x=Da(this.position.x,$(this,Ji).x,hn.playerPosEase,t),this.position.z=Da(this.position.z,$(this,Ji).z+hn.zoomOffsetY*$(this,Jn),hn.playerPosEase,t)):(this.position.x=Da(this.position.x,$(this,Dn).x,this.dragEase,t),this.position.z=Da(this.position.z,$(this,Dn).y+hn.zoomOffsetY*$(this,Jn),this.dragEase,t)),this.rotation.x=-Math.PI*.5+pP($(this,Jn),.3,1)*hn.maxTiltAngle)}onResize({ratio:t}){this.aspect=t,this.fov=hn.baseFov/Math.min(1,t*1.5),this.updateProjectionMatrix()}getVisibleHeightAtZDepth(t=0){t<this.position.y?t-=this.position.y:t+=this.position.y;const n=this.fov*Math.PI/180;return 2*Math.tan(n/2)*Math.abs(t)}getVisibleWidthAtZDepth(t=0){return this.getVisibleHeightAtZDepth(t)*this.aspect}get playerPosition(){return $(this,Ji)}set playerPosition(t){rt(this,Ji,t)}set focusPlayer(t){rt(this,Il,t),t?this.targetZoom=1:$(this,Dn).set($(this,Ji).x,$(this,Ji).z)}get focusPlayer(){return $(this,Il)}}Jn=new WeakMap,Ji=new WeakMap,Dn=new WeakMap,Il=new WeakMap,Oo=new WeakSet,Vc=function(){this.dragEase=hn.dragEase,this.zoomEase=hn.zoomEase};function pd(i,e,t=!1){e.mapping=t?lu:au;const n=new od(i);n.compileEquirectangularShader();const s=n.fromEquirectangular(e).texture,r=s&&s.mapping===Gl?s.image.height:null;if(r===null)return null;const o=Math.log2(r)-2,a=1/r,l=1/(3*Math.max(Math.pow(2,o),7*16));return s.userData={...s.userData,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:a,CUBEUV_MAX_MIP:o+"."},e.dispose(),n.dispose(),s}let RP=0;function an(i,e,t){const n=()=>{};return{c:++RP,shader:i,use:r=>{const o=r.material||r;return o[e]=i,o.needsUpdate=!0,r},unuse:n,clear:n}}const LP=`precision highp float;

uniform vec3 uColor;

void main() {
	gl_FragColor = vec4(uColor, 1.);
}`,PP=an(LP,"fragmentShader"),IP=`attribute vec3 position;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}`,DP=an(IP,"vertexShader");class NP extends Br{constructor(e={}){super(e),PP.use(this),DP.use(this)}}const OP=`precision highp float;

uniform sampler2D tData, tDepthMap;
uniform vec3 uFloorColor, uGridColor, uLightPosition;
uniform float uSize, uZoom;

uniform sampler2D tSeamless1;
uniform sampler2D tSeamless2;
uniform sampler2D tSeamless3;
uniform sampler2D tSeamless4;

varying vec2 vUv;
varying vec3 vNormal, vViewPosition;
varying vec4 vShadowCoord;

#include <packing>

#define CIRCLE_SIZE .4
#define CIRCLE_GRADIENT .1

void main() {
	vec3 normal = vNormal;

	
	vec2 gridUv = mod(vUv * uSize, 1.);
	float gridCircle = smoothstep(CIRCLE_SIZE, CIRCLE_SIZE + CIRCLE_GRADIENT, length(gridUv - .5)) * .4;
	normal -= gridCircle;

	
	vec3 shadowCoord = vShadowCoord.xyz / vShadowCoord.w * 0.5 + 0.5;
	float depthShadowCoord = shadowCoord.z;

	vec2 depthMapUv = shadowCoord.xy;
	float depthShadowMap = unpackRGBAToDepth(texture2D(tDepthMap, depthMapUv));

	float cosTheta = dot(normalize(uLightPosition), normal);
	float bias = 0.005 * tan(acos(cosTheta));
	bias = clamp(bias, 0.0, 0.01);

	float shadowFactor = step(depthShadowCoord - bias, depthShadowMap);

	
	

	
	

	
	

	float difLight = max(0.0, cosTheta);
	float shading = shadowFactor * difLight;

	
	vec3 data = texture2D(tData, vUv).rgb;

	vec3 t1 = texture2D(tSeamless1, vUv * 100.).rgb;
	vec3 t2 = texture2D(tSeamless2, vUv * 100.).rgb;
	vec3 t3 = texture2D(tSeamless3, vUv * 100.).rgb;
	vec3 t4 = texture2D(tSeamless4, vUv * 100.).rgb;

	vec3 mix1 = mix(uFloorColor, t1, data.r);
	vec3 mix2 = mix(uFloorColor, t2, data.g);
	vec3 mix3 = mix(uFloorColor, t3, data.b);

	vec3 gMix = mix(mix1, mix2, data.g);
	vec3 final = mix(gMix, mix3, data.b);

	
	final = mix(final - .1, final + .1, shading);

	gl_FragColor = vec4(final, 1.);
}`,UP=an(OP,"fragmentShader"),FP=`uniform mat4 uShadowProjectionMatrix, uShadowMatrixInverse;

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
}`,kP=an(FP,"vertexShader");class BP extends hs{constructor(e={}){super(e),UP.use(this),kP.use(this)}}var bu,xb,yu,bb;class zP extends sn{constructor(t){super();we(this,bu);we(this,yu);const n=t.data[0].length;this.geometry=He(this,bu,xb).call(this,n),this.material=He(this,yu,bb).call(this,n)}}bu=new WeakSet,xb=function(t){const n=new rf(t,t,1,1);return n.rotateX(-Math.PI*.5),n.translate(t*.5,0,t*.5),n},yu=new WeakSet,bb=function(t){const[n,s,r,o,a]=Oe.core.assetsManager.get("groundData","seamless1","seamless2","seamless3","seamless4");return s.wrapS=s.wrapT=hi,r.wrapS=r.wrapT=hi,o.wrapS=o.wrapT=hi,a.wrapS=a.wrapT=hi,new BP({uniforms:{...Oe.webgl.scene.shadowUniforms,uZoom:Kt.uZoom,uSize:{value:t},uFloorColor:{value:new B(.48,0,1)},uGridColor:{value:new B(0,0,0)},tData:{value:n},tSeamless1:{value:s},tSeamless2:{value:r},tSeamless3:{value:o},tSeamless4:{value:a}},extensions:{derivatives:!0}})};var Mu;class VP extends dt{constructor(t){super();we(this,Mu,new NP({uniforms:{uColor:{value:new Pe(0)}}}));const n=new rb({color:16777215});this.glb=t,this.glb.traverse(s=>{s.isMesh&&(s.material=n)}),this.grid=new zP(_b),this.add(this.glb),this.add(this.grid),this.traverse(s=>{s.isMesh&&(s.userData.materials=[s.material,$(this,Mu)])})}}Mu=new WeakMap;class GP extends O3{constructor(){super(),We.register(this),this.add(new sL(16777215,1)),this.sun=new hb(16777215,1),this.sun.position.set(-5,40,5);const e=Ml.size*.5;this.sun.shadow.camera=new Wl(-e,e,e,-e,1,100),this.sun.shadow.camera.position.copy(this.sun.position),this.sun.shadow.camera.lookAt(e,0,e),this.sun.shadow.mapSize.x=this.sun.shadow.mapSize.y=4096,this.sun.shadow.map=new Bi(this.sun.shadow.mapSize.x,this.sun.shadow.mapSize.y,{minFilter:Lt,magFilter:Lt,format:Fn}),this.shadowUniforms={tDepthMap:{value:this.sun.shadow.map.texture},uShadowProjectionMatrix:{value:this.sun.shadow.camera.projectionMatrix},uShadowMatrixInverse:{value:this.sun.shadow.camera.matrixWorldInverse},uLightPosition:{value:this.sun.position}},this.add(this.sun,this.sun.shadow.camera)}onAppLoaded(){var t;const e=pd(Oe.webgl.renderer,Oe.core.assetsManager.get("skybox"),!1);this.background=e,this.userData.backgrounds=[this.background,new Pe(0)],this.terrain=new VP(Oe.core.assetsManager.get("terrain")),this.add(this.terrain),this.environment=pd(Oe.webgl.renderer,Oe.core.assetsManager.get("envmap")),(t=Oe.debug)==null||t.mapping.add(this,"Scene")}}let HP=class extends dt{constructor(e,t){super(),We.register(this),this.model=e,this.seed=Math.random();const n=new rb({color:vP[t.type]});this.model.traverse(s=>{s.isMesh&&(s.material=n)}),this.position.setX(t.position.x+.5).setZ(t.position.y+.5),this.add(this.model)}onTick({et:e}){this.rotation.y=e*.01*this.seed}};const WP=["#ffffff","#000000"],jP=["#418fde","#ffd100","#ef3340"],XP=["#007a36","#000000","#d32011"],YP=["#cc092f","#000000","#ffcb00"],qP=["#012169","#ffffff","#c8102e"],$P=["#0053a5","#ffce00","#d21034"],KP=["#ff0000","#000000"],ZP=["#d0103a","#0018a8","#fedf00"],JP=["#ff0000","#00732f","#000000"],QP=["#74acdf","#ffffff","#f6b40e"],eI=["#d90012","#f2a800","#0033a0"],tI=["#000066","#ffffff","#bd1021"],nI=["#3a7dce","#ffffff"],iI=["#002395","#ffffff","#ed2939"],sI=["#ce1126","#000000","#0072c6"],rI=["#012169","#ffffff","#e4002b"],oI=["#ed2939","#ffffff"],aI=["#00b9e4","#3f9c35","#ed2939"],lI=["#ffffff","#1eb53a","#ce1126"],cI=["#000000","#fae042","#ed2939"],uI=["#008751","#fcd116","#e8112d"],fI=["#012a87","#ffffff","#f9d90f"],hI=["#009e49","#ef2b2d","#fcd116"],dI=["#006a4e","#f42a41"],pI=["#ffffff","#d62612","#00966e"],mI=["#ce1126","#ffffff"],gI=["#00778b","#000000","#ffc72c"],_I=["#002395","#fecb00","#ffffff"],vI=["#ffffff","#eace24","#1353b4"],xI=["#ce1720","#007c30","#ffffff"],bI=["#171696","#d90f19","#ffffff"],yI=["#c8102e","#ffffff","#012169"],MI=["#d52b1e","#007934","#f9e300"],SI=["#009b3a","#fedf00","#002776"],wI=["#00267f","#ffc726","#000000"],TI=["#f7e017","#ffffff","#000000"],EI=["#ffd520","#ff4e12","#ffffff"],AI=["#ef2b2d","#002868","#ffffff"],CI=["#6da9d2","#000000","#ffffff"],RI=["#ffce00","#ffffff","#289728"],LI=["#ff0000","#ffffff"],PI=["#008000","#ffe000"],II=["#ff0000","#ffffff"],DI=["#d52b1e","#ffffff","#0039a6"],NI=["#de2910","#ffde00"],OI=["#ffffff","#f77f00","#009e60"],UI=["#fcd116","#007a5e","#ce1126"],FI=["#007fff","#ce1021","#f7d618"],kI=["#009543","#dc241f","#fbde4a"],BI=["#012169","#ffffff","#c8102e"],zI=["#fcd116","#003893","#ce1126"],VI=["#ffc61e","#3a75c4","#3d8e33"],GI=["#003893","#ffffff","#cf2027"],HI=["#ffffff","#002b7f","#ce1126"],WI=["#002a8f","#ffffff","#cf142b"],jI=["#002b7f","#f9e814","#ffffff"],XI=["#0021ad","#1c8a42","#ffc639"],YI=["#012169","#ffffff","#c8102e"],qI=["#ffffff","#d57800","#4e5b31"],$I=["#ffffff","#d7141a","#11457e"],KI=["#000000","#ffce00","#dd0000"],ZI=["#12ad2b","#6ab2e7","#ffffff"],JI=["#006b3f","#fcd116","#ffffff"],QI=["#c60c30","#ffffff"],eD=["#ce1126","#002d62","#ffffff"],tD=["#ffffff","#006233","#d21034"],nD=["#ffdd00","#ed1c24","#034ea2"],iD=["#ce1126","#000000","#ffffff"],sD=["#ea0437","#12ad2b","#4189dd"],rD=["#000000","#007a3d","#ffffff"],oD=["#c60b1e","#ffc400","#ad1519"],aD=["#ffffff","#0072ce","#000000"],lD=["#da121a","#078930","#fcdd09"],cD=["#ffffff","#003580"],uD=["#69b3e7","#c8102e","#ffffff"],fD=["#012169","#ffffff","#c8102e"],hD=["#ffffff","#002395","#ed2939"],dD=["#ffffff","#ed2939","#0065bd"],pD=["#75b2dd","#ffffff"],mD=["#009e60","#fcd116","#3a75c4"],gD=["#c8102e","#ffffff","#012169"],_D=["#ffffff","#ff0000"],vD=["#ffffff","#e8112d","#f9dd16"],xD=["#ce1126","#006b3f","#fcd116"],bD=["#ffffff","#da000c","#000000"],yD=["#fcd116","#ce1126","#009460"],MD=["#000000","#002488","#fcdd09"],SD=["#ce1126","#3a7728","#0c1c8c"],wD=["#fcd116","#009e49","#ce1126"],TD=["#3e9a00","#e32118","#ffffff"],ED=["#0d5eaf","#ffffff"],AD=["#ce1126","#fcd116","#007a5e"],CD=["#d00c33","#ffffff"],RD=["#4997d0","#ffffff"],LD=["#078930","#fcdd09","#da121a"],PD=["#00297b","#c62139","#92dbfc"],ID=["#009e49","#ce1126","#fcd116"],DD=["#de2910","#ffffff"],ND=["#00008b","#ffffff","#ff0000"],OD=["#0073cf","#ffffff"],UD=["#ff0000","#171796","#ffffff"],FD=["#00209f","#d21034","#ffffff"],kD=["#cd2a3e","#436f4d","#ffffff"],BD=["#ff0000","#ffffff"],zD=["#cf142b","#ffffff","#000000"],VD=["#ff9933","#128807","#ffffff"],GD=["#ffffff","#012169","#c8102e"],HD=["#169b62","#ffffff","#ff883e"],WD=["#ffffff","#da0000","#239f40"],jD=["#ce1126","#000000","#ffffff"],XD=["#02529c","#dc1e35","#ffffff"],YD=["#ffffff","#0038b8"],qD=["#ffffff","#009246","#ce2b37"],$D=["#fed100","#009b3a","#000000"],KD=["#ffffff","#ce0f25"],ZD=["#000000","#007a3d","#ce1126"],JD=["#ffffff","#bc002d"],QD=["#00afca","#fec50c"],eN=["#000000","#bb0000","#006600"],tN=["#ff0000","#ffff00"],nN=["#032ea1","#e00025","#ffffff"],iN=["#c81010","#ffffff","#183070"],sN=["#000000","#009e49","#ce1126"],rN=["#ffffff","#000000","#cd2e3a"],oN=["#007a3d","#ce1126","#ffffff"],aN=["#ce1126","#002868","#ffffff"],lN=["#ed1c24","#ffffff","#00a651"],cN=["#bf0a30","#ffffff","#002868"],uN=["#000000","#e70013","#239e46"],fN=["#66ccff","#fcd116","#000000"],hN=["#ce1126","#002b7f","#ffd83d"],dN=["#ffbe29","#8d153a","#00534e"],pN=["#ffffff","#00209f","#009543"],mN=["#fdb913","#c1272d","#006a44"],gN=["#ed2939","#00a1de","#ffffff"],_N=["#9e3039","#ffffff"],vN=["#0f7562","#ffffff","#ffde23"],xN=["#ffffff","#002395","#ed2939"],bN=["#c1272d","#006233"],yN=["#ce1126","#ffffff"],MN=["#cc092f","#0046ae","#ffd200"],SN=["#fc3d32","#007e3a","#ffffff"],wN=["#d21034","#007e3a","#ffffff"],TN=["#006847","#ce1126","#ffffff"],EN=["#003893","#ffffff","#dd7500"],AN=["#ce2028","#f9d616"],CN=["#fcd116","#14b53a","#ce1126"],RN=["#cf142b","#ffffff","#cccccc"],LN=["#fecb00","#ea2839","#34b233"],PN=["#c40308","#d3ae3b","#d4af3a"],IN=["#da2032","#0066b3","#ffd900"],DN=["#0071bc","#ffffff","#8c8a8c"],NN=["#fce100","#007168","#000000"],ON=["#006233","#cd2a3e","#ffc400"],UN=["#012169","#c8102e","#ffffff"],FN=["#21428e","#ffffff"],kN=["#ea2839","#1a206d","#ffd500"],BN=["#ce1126","#339e35","#000000"],zN=["#ffffff","#cc0000","#000066"],VN=["#ffffff","#dfdfdf","#d42e12"],GN=["#009543","#003580","#d21034"],HN=["#009543","#0035ad","#ed4135"],WN=["#e05206","#0db02b","#ffffff"],jN=["#007934","#ffffff"],XN=["#008751","#ffffff"],YN=["#0067c6","#ffffff"],qN=["#fedd00","#ffffff","#c8102e"],$N=["#ae1c28","#21468b","#ffffff"],KN=["#ef2b2d","#002868","#ffffff"],ZN=["#000000","#dc143c","#003893"],JN=["#002b7f","#ffc61e","#ffffff"],QN=["#012169","#c8102e","#ffffff"],eO=["#db161b","#ffffff","#008000"],tO=["#01411c","#ffffff"],nO=["#ffffff","#072357","#da121a"],iO=["#012169","#c8102e","#ffffff"],sO=["#d91023","#ffffff"],rO=["#ce1126","#0038a8","#ffffff"],oO=["#0099ff","#ffff00"],aO=["#000000","#ce1126","#fcd116"],lO=["#ffffff","#dc143c"],cO=["#ee0000","#ffffff","#0050f0"],uO=["#ed1c27","#024fa2","#ffffff"],fO=["#ff0000","#006600","#ffff00"],hO=["#d52b1e","#0038a8","#ffffff"],dO=["#000000","#007a3d","#ffffff"],pO=["#ce1126","#ffffff","#ff9c10"],mO=["#8d1b3d","#ffffff"],gO=["#3366ff","#ff0000","#ffff00"],_O=["#fcd116","#002b7f","#ce1126"],vO=["#ffffff","#d52b1e","#0039a6"],xO=["#00a1de","#fad201","#20603d"],bO=["#006c35","#ffffff"],yO=["#d21034","#000000","#ffffff"],MO=["#00853f","#e31b23","#fdef42"],SO=["#ffffff","#ed2939"],wO=["#012169","#ffffff","#c8102e"],TO=["#012169","#c8102e","#ffffff"],EO=["#ef2b2d","#002868","#ffffff"],AO=["#215b33","#0051ba","#fcd116"],CO=["#1eb53a","#0072c6","#ffffff"],RO=["#0047ab","#ffffff"],LO=["#ffffff","#5eb6e4","#658d5c"],PO=["#4189dd","#ffffff"],IO=["#0092c8","#ffcf00","#0091c8"],DO=["#ffffff","#c6363c","#000000"],NO=["#000000","#078930","#0f47af"],OO=["#12ad2b","#ffce00","#d21034"],UO=["#377e3f","#b40a2d","#ffffff"],FO=["#ee1c25","#ffffff","#0b4ea2"],kO=["#ff0000","#005ce5","#ffffff"],BO=["#006aa7","#fecc00"],zO=["#3e5eb9","#b10c0c","#ffd900"],VO=["#dc171d","#012a87","#ffffff"],GO=["#d62828","#003f87","#007a3d"],HO=["#ce1126","#000000","#ffffff"],WO=["#002868","#ce1126","#ffffff"],jO=["#fecb00","#002664","#c60c30"],XO=["#006a4e","#ffce00","#d21034"],YO=["#a51931","#f4f5f8","#2d2a4a"],qO=["#ffffff","#cc0000","#006600"],$O=["#012169","#ffd100","#ffffff"],KO=["#00843d","#d22630","#ffc72c"],ZO=["#dc241f","#000000","#ffc726"],JO=["#c10000","#ffffff"],QO=["#da1a35","#000000","#ffffff"],eU=["#e70013","#ffffff"],tU=["#e30a17","#ffffff"],nU=["#0095c8","#c8102e","#ffffff"],iU=["#fe0000","#000095","#ffffff"],sU=["#000000","#1eb53a","#00a3dd"],rU=["#fcdc04","#000000","#d90000"],oU=["#005bbb","#ffd500"],aU=["#b22234","#ffffff","#3c3b6e"],lU=["#ffffff","#0038a8","#7b3f00"],cU=["#b22234","#ffffff","#3c3b6e"],uU=["#ffffff","#1eb53a","#0099b5"],fU=["#ffe000","#ffffff","#cccccc"],hU=["#fcd022","#007c2e","#002674"],dU=["#ffcc00","#cf142b","#00247d"],pU=["#012169","#ffffff","#c8102e"],mU=["#ffffff","#f4c53d","#010002"],gU=["#da251d","#ffff00"],_U=["#009543","#d21034","#000000"],vU=["#ed2939","#ffffff","#002395"],xU=["#ce1126","#002b7f","#ffffff"],bU=["#244aa5","#d0a650","#ffffff"],yU=["#ce1126","#000000","#ffffff"],MU=["#007749","#e03c31","#001489"],SU=["#198a00","#ef7d00","#000000"],wU=["#006400","#ffd200","#d40000"],Pc={BZH:WP,ABW:jP,AFG:XP,AGO:YP,AIA:qP,ALA:$P,ALB:KP,AND:ZP,ARE:JP,ARG:QP,ARM:eI,ASM:tI,ATA:nI,ATF:iI,ATG:sI,AUS:rI,AUT:oI,AZE:aI,BDI:lI,BEL:cI,BEN:uI,BES:fI,BFA:hI,BGD:dI,BGR:pI,BHR:mI,BHS:gI,BIH:_I,BLM:vI,BLR:xI,BLZ:bI,BMU:yI,BOL:MI,BRA:SI,BRB:wI,BRN:TI,BTN:EI,BVT:AI,BWA:CI,CAF:RI,CAN:LI,CCK:PI,CHE:II,CHL:DI,CHN:NI,CIV:OI,CMR:UI,COD:FI,COG:kI,COK:BI,COL:zI,COM:VI,CPV:GI,CRI:HI,CUB:WI,CUW:jI,CXR:XI,CYM:YI,CYP:qI,CZE:$I,DEU:KI,DJI:ZI,DMA:JI,DNK:QI,DOM:eD,DZA:tD,ECU:nD,EGY:iD,ERI:sD,ESH:rD,ESP:oD,EST:aD,ETH:lD,FIN:cD,FJI:uD,FLK:fD,FRA:hD,FRO:dD,FSM:pD,GAB:mD,GBR:gD,GEO:_D,GGY:vD,GHA:xD,GIB:bD,GIN:yD,GLP:MD,GMB:SD,GNB:wD,GNQ:TD,GRC:ED,GRD:AD,GRL:CD,GTM:RD,GUF:LD,GUM:PD,GUY:ID,HKG:DD,HMD:ND,HND:OD,HRV:UD,HTI:FD,HUN:kD,IDN:BD,IMN:zD,IND:VD,IOT:GD,IRL:HD,IRN:WD,IRQ:jD,ISL:XD,ISR:YD,ITA:qD,JAM:$D,JEY:KD,JOR:ZD,JPN:JD,KAZ:QD,KEN:eN,KGZ:tN,KHM:nN,KIR:iN,KNA:sN,KOR:rN,KWT:oN,LAO:aN,LBN:lN,LBR:cN,LBY:uN,LCA:fN,LIE:hN,LKA:dN,LSO:pN,LTU:mN,LUX:gN,LVA:_N,MAC:vN,MAF:xN,MAR:bN,MCO:yN,MDA:MN,MDG:SN,MDV:wN,MEX:TN,MHL:EN,MKD:AN,MLI:CN,MLT:RN,MMR:LN,MNE:PN,MNG:IN,MNP:DN,MOZ:NN,MRT:ON,MSR:UN,MTQ:FN,MUS:kN,MWI:BN,MYS:zN,MYT:VN,NAM:GN,NCL:HN,NER:WN,NFK:jN,NGA:XN,NIC:YN,NIU:qN,NLD:$N,NOR:KN,NPL:ZN,NRU:JN,NZL:QN,OMN:eO,PAK:tO,PAN:nO,PCN:iO,PER:sO,PHL:rO,PLW:oO,PNG:aO,POL:lO,PRI:cO,PRK:uO,PRT:fO,PRY:hO,PSE:dO,PYF:pO,QAT:mO,REU:gO,ROU:_O,RUS:vO,RWA:xO,SAU:bO,SDN:yO,SEN:MO,SGP:SO,SGS:wO,SHN:TO,SJM:EO,SLB:AO,SLE:CO,SLV:RO,SMR:LO,SOM:PO,SPM:IO,SRB:DO,SSD:NO,STP:OO,SUR:UO,SVK:FO,SVN:kO,SWE:BO,SWZ:zO,SXM:VO,SYC:GO,SYR:HO,TCA:WO,TCD:jO,TGO:XO,THA:YO,TJK:qO,TKL:$O,TKM:KO,TLS:ZO,TON:JO,TTO:QO,TUN:eU,TUR:tU,TUV:nU,TWN:iU,TZA:sU,UGA:rU,UKR:oU,UMI:aU,URY:lU,USA:cU,UZB:uU,VAT:fU,VCT:hU,VEN:dU,VGB:pU,VIR:mU,VNM:gU,VUT:_U,WLF:vU,WSM:xU,XKX:bU,YEM:yU,ZAF:MU,ZMB:SU,ZWE:wU},TU=`precision highp float;

uniform float uAoMapIntensity;
uniform bool uShadowOnly, uEmissiveOnly;
uniform vec3 uColor1, uColor2, uColor3;
uniform sampler2D tAoMap, tNoise;

varying vec2 vUv, vUv2;
varying vec3 vEyeToSurfaceDir, vNormal, vPosition;

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

void main() {
	if(uShadowOnly) {
		gl_FragColor = packDepthToRGBA(gl_FragCoord.z);
	} else {
		float noise1 = (texture2D(tNoise, vPosition.xy * .1).r + texture2D(tNoise, vPosition.yz * .1).r) * 1.;
		float noise2 = (smoothstep(.3, 1., texture2D(tNoise, vPosition.xy * 5.).r) + smoothstep(.3, 1., texture2D(tNoise, vPosition.yz * 5.).r)) * .5;

		
		vec3 color1 = adjustSaturation(clamp(uColor1, vec3(.1), vec3(1.)), .7);
		vec3 color2 = adjustSaturation(clamp(uColor2, vec3(.1), vec3(1.)), .7);
		vec3 color3 = adjustSaturation(clamp(uColor3, vec3(.1), vec3(1.)), .7);

		vec3 diffuse = mix(color1, color2, smoothstep(2. + noise1 * .1, .5 + noise1 * .1, vPosition.y));
		

		vec4 color = vec4(diffuse, 1.);

		vec3 aoMap = texture2D(tAoMap, vUv).rgb;
		color.rgb *= mix(vec3(1.), aoMap, uAoMapIntensity);

		
		
		color.rgb *= (1. - float(uEmissiveOnly));

		gl_FragColor = color;
		#include <dithering_fragment>
	}

}`,EU=an(TU,"fragmentShader"),AU=`attribute vec3 position, normal;
attribute vec2 uv, uv2;

uniform mat4 projectionMatrix, modelViewMatrix;

varying vec2 vUv, vUv2;
varying vec3 vEyeToSurfaceDir, vNormal, vPosition;

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

  vNormal = normalize(modelViewMatrix * vec4(objectNormal, 0.0)).xyz;

  vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
  vEyeToSurfaceDir = normalize(mvPosition.xyz);

  vPosition = transformed;

  gl_Position = projectionMatrix * mvPosition;
}`,CU=an(AU,"vertexShader");class RU extends Br{constructor(e={}){super(e),EU.use(this),CU.use(this)}}const LU=`precision highp float;

uniform mat4 viewMatrix;

uniform float uRoughness, uMetalness;
uniform vec3 uColor;

uniform bool uEmissiveOnly, uShadowOnly;

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
#include <packing>

void main() {
	if(uShadowOnly) {
		gl_FragColor = packDepthToRGBA(gl_FragCoord.z);
	} else {
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
	}
}`,PU=an(LU,"fragmentShader"),IU=`attribute vec3 position, normal;
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
}`,DU=an(IU,"vertexShader");class NU extends Br{constructor(e={}){super(e),PU.use(this),DU.use(this)}}const OU=`precision highp float;

uniform mat4 viewMatrix;

uniform float uRoughness, uMetalness;
uniform vec3 uColor;

uniform bool uEmissiveOnly, uShadowOnly;

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
#include <packing>

#define PI 3.14159265

void main() {
	if(uShadowOnly) {
		gl_FragColor = packDepthToRGBA(gl_FragCoord.z);
	} else {
		float roughness = uRoughness;
		float metalness = uMetalness;
		vec3 normal = vNormal;

		
		vec3 diffuse = vec3(uColor);
		vec4 color = vec4(diffuse, 1.);

		vec3 reflectVec = reflect(vEyeToSurfaceDir, normal);

		float theta = PI * .5;
		mat3 rotationMatrix = mat3(vec3(cos(theta), -sin(theta), 0.0), vec3(sin(theta), cos(theta), 0.0), vec3(0.0, 0.0, 1.0));
		
		reflectVec = normalize((vec4(reflectVec, 0.0) * viewMatrix * mat4(rotationMatrix)).xyz);
		vec3 envMapColor = textureCubeUV(tEnvMap, reflectVec, roughness).rgb * uEnvMapIntensity;

		color.rgb += envMapColor * smoothstep(0., 1., length(envMapColor) - length(color.rgb));
		color.rgb -= (1. - envMapColor) * metalness;

		vec3 aoMap = texture2D(tAoMap, vUv).rgb;
		color.rgb *= mix(vec3(1.), aoMap, uAoMapIntensity);

		
		color.rgb = mix(color.rgb, smoothstep(.4, 1., color.rgb) * .3, float(uEmissiveOnly));

		gl_FragColor = color;
		#include <dithering_fragment>
	}
}`,UU=an(OU,"fragmentShader"),FU=`attribute vec3 position, normal;
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
}`,kU=an(FU,"vertexShader");class BU extends Br{constructor(e={}){super(e),UU.use(this),kU.use(this)}}const zU=`precision highp float;
varying vec2 vUv;
varying vec3 vNormal;
varying float vSize;

uniform vec3 uColor;
uniform bool uEmissiveOnly, uShadowOnly;

#include <packing>

void main() {
  if(uShadowOnly) {
    gl_FragColor = packDepthToRGBA(gl_FragCoord.z);
  } else {
    vec3 finalColor = uColor * length(vNormal.rg + .25);
    finalColor = mix(finalColor, finalColor * vSize * 5., float(uEmissiveOnly));

    gl_FragColor = vec4(vec3(finalColor), 1.0);
  }
}`,VU=an(zU,"fragmentShader"),GU=`attribute vec3 position;
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
}`,HU=an(GU,"vertexShader");class WU extends Br{constructor(e={}){super(e),VU.use(this),HU.use(this)}}var Su,yb,wu,Mb;class jU extends sn{constructor(){super();we(this,Su);we(this,wu);this.count=100,this.geometry=He(this,Su,yb).call(this),this.material=He(this,wu,Mb).call(this)}}Su=new WeakSet,yb=function(){const t=new rL;t.instanceCount=this.count;const n=new ha(1,1,1);t.index=n.index,t.attributes=n.attributes;const s=3,r=[];let o=0;for(let l=0;l<this.count;l++)o=l*s,r[o++]=dh(.05,.15),r[o++]=dh(5e-4,.001),r[o++]=dh(0,2*Math.PI);const a=new bL(new Float32Array(r),s);return t.setAttribute("aSize",new Io(a,1,0,!1)),t.setAttribute("aSpeed",new Io(a,1,1,!1)),t.setAttribute("aRad",new Io(a,1,2,!1)),t},wu=new WeakSet,Mb=function(){return new WU({uniforms:{uTime:Kt.uTime,uEmissiveOnly:Kt.uEmissiveOnly,uShadowOnly:Kt.uShadowOnly,uGlobalSpead:{value:1},uRadius:{value:.23},uColor:{value:new Pe("orange")},uElevation:{value:.8}}})};var Tr,Ps,Is,Ci,Uo,Ds,Tu,Eu,Ns;class XU extends dt{constructor(t,n){var p;super();we(this,Tr,void 0);we(this,Ps,void 0);we(this,Is,new B);we(this,Ci,new B);we(this,Uo,new je);we(this,Ds,new zn);we(this,Tu,new zn);we(this,Eu,new Hl);we(this,Ns,new B);We.register(this),this.name=n.iso,this.model=t;const s=pd(Oe.webgl.renderer,Oe.core.assetsManager.get("envmap"),!1),[r,o]=Oe.core.assetsManager.get("playerAo","noise");r.flipY=!1,r.generateMipmaps=!1,o.wrapS=o.wrapT=hi;const a=t.getObjectByName("body"),l=t.getObjectByName("face"),c=t.getObjectByName("gold"),{face:u,body:f,gold:h}=xP;l.material=new NU({uniforms:{uEmissiveOnly:Kt.uEmissiveOnly,uShadowOnly:Kt.uShadowOnly,uRoughness:{value:u.roughness},uMetalness:{value:u.metalness},uEnvMapIntensity:{value:u.envMapIntensity},uColor:{value:new Pe(Pc[n.iso][0])},tEnvMap:{value:s},tAoMap:{value:r},uAoMapIntensity:{value:u.aoMapIntensity}},defines:{...s.userData}}),a.material=new RU({uniforms:{uEmissiveOnly:Kt.uEmissiveOnly,uShadowOnly:Kt.uShadowOnly,uColor1:{value:new Pe(Pc[n.iso][1])},uColor2:{value:new Pe(Pc[n.iso][0])},uColor3:{value:new Pe(Pc[n.iso][2]||16777215)},tAoMap:{value:r},uAoMapIntensity:{value:f.aoMapIntensity},tNoise:{value:o}},defines:{...s.userData}}),c.material=new BU({uniforms:{uEmissiveOnly:Kt.uEmissiveOnly,uShadowOnly:Kt.uShadowOnly,uRoughness:{value:h.roughness},uMetalness:{value:h.metalness},uEnvMapIntensity:{value:h.envMapIntensity},uColor:{value:h.color},tEnvMap:{value:s},tAoMap:{value:r},uAoMapIntensity:{value:1}},defines:{...s.userData}}),this.headBone=t.getObjectByName("tête2"),this.model.scale.setScalar(.4),this.model.rotation.y=Math.PI,rt(this,Ps,n.position),$(this,Is).set($(this,Ps).x+.5,0,$(this,Ps).y+.5),$(this,Ci).copy($(this,Is)),this.position.copy($(this,Is)),this.flame=new jU,this.flame.position.y=1,this.mixer=new xL(this.model),this.animations=this.model.animations,this.add(this.model,this.flame),(p=Oe.debug)==null||p.mapping.add(this,"Player",0,"Player: "+this.name)}onTick({dt:t}){this.mixer.update(t)}move(){var s;(s=$(this,Tr))==null||s.kill(),rt(this,Tr,Vd.timeline({onStart:()=>{this.mixer.clipAction(this.animations[0]).play()},onUpdate:()=>{this.headBone.getWorldPosition($(this,Ns)),$(this,Eu).setFromQuaternion(this.headBone.getWorldQuaternion($(this,Tu))),$(this,Ds).y===0?this.flame.position.z=($(this,Ns).z-this.position.z)*5:$(this,Ds).y===1?this.flame.position.z=-($(this,Ns).z-this.position.z)*5:$(this,Ds).y>0?this.flame.position.z=($(this,Ns).x-this.position.x)*5:this.flame.position.z=-($(this,Ns).x-this.position.x)*5},onComplete:()=>{this.mixer.clipAction(this.animations[0]).stop()}})),$(this,Is).set($(this,Ci).x,0,$(this,Ci).z),$(this,Ci).set($(this,Ps).x+.5,0,$(this,Ps).y+.5),$(this,Uo).identity(),$(this,Uo).lookAt($(this,Is),$(this,Ci),this.up),$(this,Ds).setFromRotationMatrix($(this,Uo));const t={value:0},n=this.animations[0].duration/3;$(this,Tr).to(t,{value:1,onUpdate:()=>this.quaternion.slerp($(this,Ds),t.value),duration:.25,ease:"power3.out"},0),$(this,Tr).to(this.position,{x:$(this,Ci).x,z:$(this,Ci).z,duration:this.animations[0].duration-n,ease:"power3.inOut",delay:n},0)}}Tr=new WeakMap,Ps=new WeakMap,Is=new WeakMap,Ci=new WeakMap,Uo=new WeakMap,Ds=new WeakMap,Tu=new WeakMap,Eu=new WeakMap,Ns=new WeakMap;const YU=`precision highp float;

uniform sampler2D tDiffuse, tEmissive, tDepth;
uniform float uEmissiveIntensity;

varying vec2 vUv;

#define PI 3.14159265359
#define NEAR 1.
#define FAR 1000.

void main() {
	vec4 diffuse = texture2D(tDiffuse, vUv);
	vec3 emissive = texture2D(tEmissive, vUv).rgb;
	

	vec4 color = diffuse + vec4(emissive, length(emissive)) * uEmissiveIntensity;

	gl_FragColor = color;

}`,qU=an(YU,"fragmentShader"),$U=`attribute vec3 position;
attribute vec2 uv;

uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelMatrix * vec4(position, 1.);

}`,KU=an($U,"vertexShader");class ZU extends Br{constructor(e={}){super(e),qU.use(this),KU.use(this)}}const JU=`precision highp float;

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
}`,QU=an(JU,"fragmentShader"),eF=`attribute vec3 position;
attribute vec2 uv;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);

}`,tF=an(eF,"vertexShader");class nF extends Br{constructor(e={}){super(e),QU.use(this),tF.use(this)}}var Fo,Gc;class iF{constructor({dpr:e=1}){we(this,Fo);We.register(this),this.dpr=e,this.renderTargets=[He(this,Fo,Gc).call(this),He(this,Fo,Gc).call(this),He(this,Fo,Gc).call(this)],this.material=new nF({uniforms:{tEmissive:{value:this.renderTargets[0].texture},uHorizontal:{value:0},uResolution:{value:new Ve}}})}onResize({width:e,height:t}){this.uniforms.uResolution.value.set(e*this.dpr,t*this.dpr),this.renderTargets.forEach(n=>n.setSize(e*this.dpr,t*this.dpr))}get texture(){return this.renderTargets[2].texture}get uniforms(){return this.material.uniforms}}Fo=new WeakSet,Gc=function(){return new Bi(Oe.tools.viewport.width*this.dpr,Oe.tools.viewport.height*this.dpr,{samples:0})};var Os,Au,Sb;class sF{constructor(e=!0){we(this,Au);we(this,Os,void 0);We.register(this),this.renderTarget=He(this,Au,Sb).call(this,!0),this.emissivePass=new iF({dpr:1}),rt(this,Os,new ZU({uniforms:{...Kt,tDiffuse:{value:this.renderTarget.texture},tDepth:{value:this.renderTarget.depthTexture},tEmissive:{value:this.emissivePass.texture},uResolution:{value:new Ve},uRatio:{value:Oe.tools.viewport.ratio},uEmissiveIntensity:{value:.5}}}));const t=new Wn().setAttribute("position",new Vn([-1,3,0,-1,-1,0,3,-1,0],3)).setAttribute("uv",new Vn([0,2,0,0,2,0],2));this.quad=new sn(t,$(this,Os)),this.emissiveQuad=new sn(t,this.emissivePass.material),this.camera=new Wl(-1,1,1,-1,0,1)}onAttach(){var e;(e=Oe.debug)==null||e.mapping.add(this,"PostProcessing")}onResize({width:e,height:t,dpr:n,ratio:s}){$(this,Os).uniforms.uResolution.value.set(e*n,t*n),$(this,Os).uniforms.uRatio.value=s,this.renderTarget.setSize(e*n,t*n)}get uniforms(){return $(this,Os).uniforms}}Os=new WeakMap,Au=new WeakSet,Sb=function(e=!1){const t=new Bi(Oe.tools.viewport.width*Oe.tools.viewport.dpr,Oe.tools.viewport.height*Oe.tools.viewport.dpr,{samples:2});if(e){const n=new Qx(Oe.tools.viewport.width*Oe.tools.viewport.dpr,Oe.tools.viewport.height*Oe.tools.viewport.dpr);t.depthTexture=n}return t};class rF extends Ap{constructor(){super({antialias:!1,powerPreference:"high-performance"}),We.register(this),this.outputEncoding=nt,this.autoClear=!1,this.debug.checkShaderErrors=_P}onAttach(){var e;(e=Oe.debug)==null||e.mapping.add(this,"Stats")}onResize({width:e,height:t,dpr:n}){this.setSize(e,t),this.setPixelRatio(n)}}var ko,Cu,Dl,Ru,wb,Lu,Tb,Pu,Eb,Iu,Ab,Us,co,sa,md,aF,ra,gd,lF;class oF{constructor(){we(this,Ru);we(this,Lu);we(this,Pu);we(this,Iu);we(this,Us);we(this,sa);we(this,ra);we(this,ko,new Vs);we(this,Cu,e=>{const t=Oe.core.assetsManager.get("player"),n=AP(t);n.animations=t.animations;const s=new XU(n,e);Oe.webgl.players.set(e,s),$(this,ko).add(s)});we(this,Dl,e=>{const t=new HP(Oe.core.assetsManager.get("medal").clone(),e);Oe.webgl.medals.set(e.id,t),this.scene.add(t)});We.register(this),this.players=new Map,this.medals=new Map,this.renderer=new rF,this.postProcessing=new sF(this.renderer.capabilities.isWebGL2),this.scene=new GP,this.camera=new CP,this.scene.add($(this,ko))}onAttach(){var e;Oe.$wrapper.prepend(this.renderer.domElement),(e=Oe.debug)==null||e.mapping.add(this,"Game",1)}onStateReady({teams:e,medals:t}){e.forEach(n=>this.onCreateTeam(n)),[...t.values()].forEach($(this,Dl))}onJoinReady(e){this.camera.playerPosition=this.players.get(e).position}onCreateTeam(e){$(this,Cu).call(this,e)}onVoteResults(e){this.players.get(e).move()}onSpawnMedals(e){e.forEach($(this,Dl))}onCollectMedal(e){this.medals.get(e).removeFromParent()}onTick({et:e}){Kt.uTime.value=e}onRender(){this.renderer.clear(),He(this,Lu,Tb).call(this),He(this,Ru,wb).call(this),He(this,Pu,Eb).call(this),He(this,Iu,Ab).call(this)}}ko=new WeakMap,Cu=new WeakMap,Dl=new WeakMap,Ru=new WeakSet,wb=function(){He(this,Us,co).call(this,this.scene,this.camera,this.postProcessing.renderTarget)},Lu=new WeakSet,Tb=function(){rt(this,ra,!0,gd),He(this,Us,co).call(this,$(this,ko),this.scene.sun.shadow.camera,this.scene.sun.shadow.map),rt(this,ra,!1,gd)},Pu=new WeakSet,Eb=function(){rt(this,sa,!0,md),He(this,Us,co).call(this,this.scene,this.camera,this.postProcessing.emissivePass.renderTargets[0]),rt(this,sa,!1,md),this.postProcessing.emissivePass.uniforms.tEmissive.value=this.postProcessing.emissivePass.renderTargets[0].texture,this.postProcessing.emissivePass.uniforms.uHorizontal.value=0,He(this,Us,co).call(this,this.postProcessing.emissiveQuad,this.postProcessing.camera,this.postProcessing.emissivePass.renderTargets[1]),this.postProcessing.emissivePass.uniforms.tEmissive.value=this.postProcessing.emissivePass.renderTargets[1].texture,this.postProcessing.emissivePass.uniforms.uHorizontal.value=1,He(this,Us,co).call(this,this.postProcessing.emissiveQuad,this.postProcessing.camera,this.postProcessing.emissivePass.renderTargets[2])},Iu=new WeakSet,Ab=function(){this.renderer.setRenderTarget(null),this.renderer.clear(),this.renderer.render(this.postProcessing.quad,this.postProcessing.camera)},Us=new WeakSet,co=function(e,t,n){this.renderer.setRenderTarget(n),this.renderer.clear(),this.renderer.render(e,t),this.renderer.setRenderTarget(null)},sa=new WeakSet,md=function(e){var t,n;Kt.uEmissiveOnly.value=e,this.scene.background=this.scene.userData.backgrounds[+e],(n=(t=this.scene)==null?void 0:t.terrain)==null||n.traverse(s=>{s.isMesh&&(s.material=s.userData.materials[+e])})},aF=function(){return Kt.uEmissiveOnly.value},ra=new WeakSet,gd=function(e){Kt.uShadowOnly.value=e},lF=function(){return Kt.uShadowOnly.value};const yo=class{init(e,t){this.$app=e,this.$wrapper=t,this.core=lP(),this.tools=EP(),this.webgl=new oF}async beforeLoad(){var e;this.debug=await MP(),(e=this.debug)==null||e.mapping.init()}async load(){await this.beforeLoad(),await this.core.assetsManager.load(),We.emit(ct.APP_LOADED),We.emit(ct.RESIZE,this.tools.viewport.infos),We.emit(ct.ATTACH)}static getInstance(){return yo.instance||(yo.instance=new yo),yo.instance}};let Hc=yo;Xn(Hc,"instance");const Oe=Hc.getInstance(),cF={__name:"WebglContainer",setup(i){const e=Ni(),t=Ni();return Ju(()=>Oe.init(e.value,t.value)),(n,s)=>(su(),cp("div",{id:"webgl-app",ref_key:"webglAppContainer",ref:e},[ts("div",{id:"canvas-wrapper",ref_key:"canvasWrapper",ref:t},null,512)],512))}};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const uo=typeof window<"u";function uF(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const st=Object.assign;function ph(i,e){const t={};for(const n in e){const s=e[n];t[n]=bi(s)?s.map(i):i(s)}return t}const el=()=>{},bi=Array.isArray,fF=/\/$/,hF=i=>i.replace(fF,"");function mh(i,e,t="/"){let n,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=i(r)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=gF(n??e,t),{fullPath:n+(r&&"?")+r+o,path:n,query:s,hash:o}}function dF(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function F0(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function pF(i,e,t){const n=e.matched.length-1,s=t.matched.length-1;return n>-1&&n===s&&na(e.matched[n],t.matched[s])&&Cb(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function na(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function Cb(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!mF(i[t],e[t]))return!1;return!0}function mF(i,e){return bi(i)?k0(i,e):bi(e)?k0(e,i):i===e}function k0(i,e){return bi(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function gF(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/");let s=t.length-1,r,o;for(r=0;r<n.length;r++)if(o=n[r],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+n.slice(r-(r===n.length?1:0)).join("/")}var Sl;(function(i){i.pop="pop",i.push="push"})(Sl||(Sl={}));var tl;(function(i){i.back="back",i.forward="forward",i.unknown=""})(tl||(tl={}));function _F(i){if(!i)if(uo){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),hF(i)}const vF=/^[^#]+#/;function xF(i,e){return i.replace(vF,"#")+e}function bF(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const lf=()=>({left:window.pageXOffset,top:window.pageYOffset});function yF(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=bF(s,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function B0(i,e){return(history.state?history.state.position-e:-1)+i}const _d=new Map;function MF(i,e){_d.set(i,e)}function SF(i){const e=_d.get(i);return _d.delete(i),e}let wF=()=>location.protocol+"//"+location.host;function Rb(i,e){const{pathname:t,search:n,hash:s}=e,r=i.indexOf("#");if(r>-1){let a=s.includes(i.slice(r))?i.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),F0(l,"")}return F0(t,i)+n+s}function TF(i,e,t,n){let s=[],r=[],o=null;const a=({state:h})=>{const p=Rb(i,location),g=t.value,d=e.value;let m=0;if(h){if(t.value=p,e.value=h,o&&o===g){o=null;return}m=d?h.position-d.position:0}else n(p);s.forEach(v=>{v(t.value,g,{delta:m,type:Sl.pop,direction:m?m>0?tl.forward:tl.back:tl.unknown})})};function l(){o=t.value}function c(h){s.push(h);const p=()=>{const g=s.indexOf(h);g>-1&&s.splice(g,1)};return r.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(st({},h.state,{scroll:lf()}),"")}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function z0(i,e,t,n=!1,s=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:s?lf():null}}function EF(i){const{history:e,location:t}=window,n={value:Rb(i,t)},s={value:e.state};s.value||r(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=i.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?i:i.slice(f))+l:wF()+i+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(p){console.error(p),t[u?"replace":"assign"](h)}}function o(l,c){const u=st({},e.state,z0(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),n.value=l}function a(l,c){const u=st({},s.value,e.state,{forward:l,scroll:lf()});r(u.current,u,!0);const f=st({},z0(n.value,l,null),{position:u.position+1},c);r(l,f,!1),n.value=l}return{location:n,state:s,push:a,replace:o}}function AF(i){i=_F(i);const e=EF(i),t=TF(i,e.state,e.location,e.replace);function n(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=st({location:"",base:i,go:n,createHref:xF.bind(null,i)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function CF(i){return typeof i=="string"||i&&typeof i=="object"}function Lb(i){return typeof i=="string"||typeof i=="symbol"}const Ss={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Pb=Symbol("");var V0;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(V0||(V0={}));function ia(i,e){return st(new Error,{type:i,[Pb]:!0},e)}function qi(i,e){return i instanceof Error&&Pb in i&&(e==null||!!(i.type&e))}const G0="[^/]+?",RF={sensitive:!1,strict:!1,start:!0,end:!0},LF=/[.+*?^${}()[\]/\\]/g;function PF(i,e){const t=st({},RF,e),n=[];let s=t.start?"^":"";const r=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(t.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(LF,"\\$&"),p+=40;else if(h.type===1){const{value:g,repeatable:d,optional:m,regexp:v}=h;r.push({name:g,repeatable:d,optional:m});const x=v||G0;if(x!==G0){p+=10;try{new RegExp(`(${x})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+b.message)}}let _=d?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(_=m&&c.length<2?`(?:/${_})`:"/"+_),m&&(_+="?"),s+=_,p+=20,m&&(p+=-8),d&&(p+=-20),x===".*"&&(p+=-50)}u.push(p)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",g=r[h-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of i){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:d,optional:m}=p,v=g in c?c[g]:"";if(bi(v)&&!d)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=bi(v)?v.join("/"):v;if(!x)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=x}}return u||"/"}return{re:o,score:n,keys:r,parse:a,stringify:l}}function IF(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===40+40?-1:1:i.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function DF(i,e){let t=0;const n=i.score,s=e.score;for(;t<n.length&&t<s.length;){const r=IF(n[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-n.length)===1){if(H0(n))return 1;if(H0(s))return-1}return s.length-n.length}function H0(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const NF={type:0,value:""},OF=/[a-zA-Z0-9_]/;function UF(i){if(!i)return[[]];if(i==="/")return[[NF]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,n=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=n;break;case 1:l==="("?t=2:OF.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function FF(i,e,t){const n=PF(UF(i.path),t),s=st(n,{record:i,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function kF(i,e){const t=[],n=new Map;e=X0({strict:!1,end:!0,sensitive:!1},e);function s(u){return n.get(u)}function r(u,f,h){const p=!h,g=BF(u);g.aliasOf=h&&h.record;const d=X0(e,u),m=[g];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const b of _)m.push(st({},g,{components:h?h.record.components:g.components,path:b,aliasOf:h?h.record:g}))}let v,x;for(const _ of m){const{path:b}=_;if(f&&b[0]!=="/"){const y=f.record.path,E=y[y.length-1]==="/"?"":"/";_.path=f.record.path+(b&&E+b)}if(v=FF(_,f,d),h?h.alias.push(v):(x=x||v,x!==v&&x.alias.push(v),p&&u.name&&!j0(v)&&o(u.name)),g.children){const y=g.children;for(let E=0;E<y.length;E++)r(y[E],v,h&&h.children[E])}h=h||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return x?()=>{o(x)}:el}function o(u){if(Lb(u)){const f=n.get(u);f&&(n.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&DF(u,t[f])>=0&&(u.record.path!==t[f].record.path||!Ib(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!j0(u)&&n.set(u.record.name,u)}function c(u,f){let h,p={},g,d;if("name"in u&&u.name){if(h=n.get(u.name),!h)throw ia(1,{location:u});d=h.record.name,p=st(W0(f.params,h.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&W0(u.params,h.keys.map(x=>x.name))),g=h.stringify(p)}else if("path"in u)g=u.path,h=t.find(x=>x.re.test(g)),h&&(p=h.parse(g),d=h.record.name);else{if(h=f.name?n.get(f.name):t.find(x=>x.re.test(f.path)),!h)throw ia(1,{location:u,currentLocation:f});d=h.record.name,p=st({},f.params,u.params),g=h.stringify(p)}const m=[];let v=h;for(;v;)m.unshift(v.record),v=v.parent;return{name:d,path:g,params:p,matched:m,meta:VF(m)}}return i.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function W0(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function BF(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:zF(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function zF(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="boolean"?t:t[n];return e}function j0(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function VF(i){return i.reduce((e,t)=>st(e,t.meta),{})}function X0(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function Ib(i,e){return e.children.some(t=>t===i||Ib(i,t))}const Db=/#/g,GF=/&/g,HF=/\//g,WF=/=/g,jF=/\?/g,Nb=/\+/g,XF=/%5B/g,YF=/%5D/g,Ob=/%5E/g,qF=/%60/g,Ub=/%7B/g,$F=/%7C/g,Fb=/%7D/g,KF=/%20/g;function Op(i){return encodeURI(""+i).replace($F,"|").replace(XF,"[").replace(YF,"]")}function ZF(i){return Op(i).replace(Ub,"{").replace(Fb,"}").replace(Ob,"^")}function vd(i){return Op(i).replace(Nb,"%2B").replace(KF,"+").replace(Db,"%23").replace(GF,"%26").replace(qF,"`").replace(Ub,"{").replace(Fb,"}").replace(Ob,"^")}function JF(i){return vd(i).replace(WF,"%3D")}function QF(i){return Op(i).replace(Db,"%23").replace(jF,"%3F")}function ek(i){return i==null?"":QF(i).replace(HF,"%2F")}function fu(i){try{return decodeURIComponent(""+i)}catch{}return""+i}function tk(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(Nb," "),o=r.indexOf("="),a=fu(o<0?r:r.slice(0,o)),l=o<0?null:fu(r.slice(o+1));if(a in e){let c=e[a];bi(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Y0(i){let e="";for(let t in i){const n=i[t];if(t=JF(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(bi(n)?n.map(r=>r&&vd(r)):[n&&vd(n)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function nk(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=bi(n)?n.map(s=>s==null?null:""+s):n==null?n:""+n)}return e}const ik=Symbol(""),q0=Symbol(""),Up=Symbol(""),kb=Symbol(""),xd=Symbol("");function Na(){let i=[];function e(n){return i.push(n),()=>{const s=i.indexOf(n);s>-1&&i.splice(s,1)}}function t(){i=[]}return{add:e,list:()=>i,reset:t}}function As(i,e,t,n,s){const r=n&&(n.enterCallbacks[s]=n.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(ia(4,{from:t,to:e})):f instanceof Error?a(f):CF(f)?a(ia(2,{from:e,to:f})):(r&&n.enterCallbacks[s]===r&&typeof f=="function"&&r.push(f),o())},c=i.call(n&&n.instances[s],e,t,l);let u=Promise.resolve(c);i.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function gh(i,e,t,n){const s=[];for(const r of i)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(sk(a)){const c=(a.__vccOpts||a)[e];c&&s.push(As(c,t,n,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=uF(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&As(h,t,n,r,o)()}))}}return s}function sk(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function $0(i){const e=_i(Up),t=_i(kb),n=Ht(()=>e.resolve(rs(i.to))),s=Ht(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(na.bind(null,u));if(h>-1)return h;const p=K0(l[c-2]);return c>1&&K0(u)===p&&f[f.length-1].path!==p?f.findIndex(na.bind(null,l[c-2])):h}),r=Ht(()=>s.value>-1&&ak(t.params,n.value.params)),o=Ht(()=>s.value>-1&&s.value===t.matched.length-1&&Cb(t.params,n.value.params));function a(l={}){return ok(l)?e[rs(i.replace)?"replace":"push"](rs(i.to)).catch(el):Promise.resolve()}return{route:n,href:Ht(()=>n.value.href),isActive:r,isExactActive:o,navigate:a}}const rk=Bv({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$0,setup(i,{slots:e}){const t=ca($0(i)),{options:n}=_i(Up),s=Ht(()=>({[Z0(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[Z0(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return i.custom?r:ef("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),bd=rk;function ok(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function ak(i,e){for(const t in e){const n=e[t],s=i[t];if(typeof n=="string"){if(n!==s)return!1}else if(!bi(s)||s.length!==n.length||n.some((r,o)=>r!==s[o]))return!1}return!0}function K0(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const Z0=(i,e,t)=>i??e??t,lk=Bv({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=_i(xd),s=Ht(()=>i.route||n.value),r=_i(q0,0),o=Ht(()=>{let c=rs(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Ht(()=>s.value.matched[o.value]);Uc(q0,Ht(()=>o.value+1)),Uc(ik,a),Uc(xd,s);const l=Ni();return os(()=>[l.value,a.value,i.name],([c,u,f],[h,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!na(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(d=>d(c))},{flush:"post"}),()=>{const c=s.value,u=i.name,f=a.value,h=f&&f.components[u];if(!h)return J0(t.default,{Component:h,route:c});const p=f.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=ef(h,st({},g,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return J0(t.default,{Component:m,route:c})||m}}});function J0(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const Bb=lk;function ck(i){const e=kF(i.routes,i),t=i.parseQuery||tk,n=i.stringifyQuery||Y0,s=i.history,r=Na(),o=Na(),a=Na(),l=yM(Ss);let c=Ss;uo&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ph.bind(null,L=>""+L),f=ph.bind(null,ek),h=ph.bind(null,fu);function p(L,Z){let K,oe;return Lb(L)?(K=e.getRecordMatcher(L),oe=Z):oe=L,e.addRoute(oe,K)}function g(L){const Z=e.getRecordMatcher(L);Z&&e.removeRoute(Z)}function d(){return e.getRoutes().map(L=>L.record)}function m(L){return!!e.getRecordMatcher(L)}function v(L,Z){if(Z=st({},Z||l.value),typeof L=="string"){const C=mh(t,L,Z.path),I=e.resolve({path:C.path},Z),X=s.createHref(C.fullPath);return st(C,I,{params:h(I.params),hash:fu(C.hash),redirectedFrom:void 0,href:X})}let K;if("path"in L)K=st({},L,{path:mh(t,L.path,Z.path).path});else{const C=st({},L.params);for(const I in C)C[I]==null&&delete C[I];K=st({},L,{params:f(L.params)}),Z.params=f(Z.params)}const oe=e.resolve(K,Z),de=L.hash||"";oe.params=u(h(oe.params));const xe=dF(n,st({},L,{hash:ZF(de),path:oe.path})),Me=s.createHref(xe);return st({fullPath:xe,hash:de,query:n===Y0?nk(L.query):L.query||{}},oe,{redirectedFrom:void 0,href:Me})}function x(L){return typeof L=="string"?mh(t,L,l.value.path):st({},L)}function _(L,Z){if(c!==L)return ia(8,{from:Z,to:L})}function b(L){return A(L)}function y(L){return b(st(x(L),{replace:!0}))}function E(L){const Z=L.matched[L.matched.length-1];if(Z&&Z.redirect){const{redirect:K}=Z;let oe=typeof K=="function"?K(L):K;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=x(oe):{path:oe},oe.params={}),st({query:L.query,hash:L.hash,params:"path"in oe?{}:L.params},oe)}}function A(L,Z){const K=c=v(L),oe=l.value,de=L.state,xe=L.force,Me=L.replace===!0,C=E(K);if(C)return A(st(x(C),{state:typeof C=="object"?st({},de,C.state):de,force:xe,replace:Me}),Z||K);const I=K;I.redirectedFrom=Z;let X;return!xe&&pF(n,oe,K)&&(X=ia(16,{to:I,from:oe}),ue(oe,oe,!0,!1)),(X?Promise.resolve(X):T(I,oe)).catch(J=>qi(J)?qi(J,2)?J:ee(J):G(J,I,oe)).then(J=>{if(J){if(qi(J,2))return A(st({replace:Me},x(J.to),{state:typeof J.to=="object"?st({},de,J.to.state):de,force:xe}),Z||I)}else J=D(I,oe,!0,Me,de);return P(I,oe,J),J})}function M(L,Z){const K=_(L,Z);return K?Promise.reject(K):Promise.resolve()}function T(L,Z){let K;const[oe,de,xe]=uk(L,Z);K=gh(oe.reverse(),"beforeRouteLeave",L,Z);for(const C of oe)C.leaveGuards.forEach(I=>{K.push(As(I,L,Z))});const Me=M.bind(null,L,Z);return K.push(Me),ro(K).then(()=>{K=[];for(const C of r.list())K.push(As(C,L,Z));return K.push(Me),ro(K)}).then(()=>{K=gh(de,"beforeRouteUpdate",L,Z);for(const C of de)C.updateGuards.forEach(I=>{K.push(As(I,L,Z))});return K.push(Me),ro(K)}).then(()=>{K=[];for(const C of L.matched)if(C.beforeEnter&&!Z.matched.includes(C))if(bi(C.beforeEnter))for(const I of C.beforeEnter)K.push(As(I,L,Z));else K.push(As(C.beforeEnter,L,Z));return K.push(Me),ro(K)}).then(()=>(L.matched.forEach(C=>C.enterCallbacks={}),K=gh(xe,"beforeRouteEnter",L,Z),K.push(Me),ro(K))).then(()=>{K=[];for(const C of o.list())K.push(As(C,L,Z));return K.push(Me),ro(K)}).catch(C=>qi(C,8)?C:Promise.reject(C))}function P(L,Z,K){for(const oe of a.list())oe(L,Z,K)}function D(L,Z,K,oe,de){const xe=_(L,Z);if(xe)return xe;const Me=Z===Ss,C=uo?history.state:{};K&&(oe||Me?s.replace(L.fullPath,st({scroll:Me&&C&&C.scroll},de)):s.push(L.fullPath,de)),l.value=L,ue(L,Z,K,Me),ee()}let W;function U(){W||(W=s.listen((L,Z,K)=>{if(!pe.listening)return;const oe=v(L),de=E(oe);if(de){A(st(de,{replace:!0}),oe).catch(el);return}c=oe;const xe=l.value;uo&&MF(B0(xe.fullPath,K.delta),lf()),T(oe,xe).catch(Me=>qi(Me,12)?Me:qi(Me,2)?(A(Me.to,oe).then(C=>{qi(C,20)&&!K.delta&&K.type===Sl.pop&&s.go(-1,!1)}).catch(el),Promise.reject()):(K.delta&&s.go(-K.delta,!1),G(Me,oe,xe))).then(Me=>{Me=Me||D(oe,xe,!1),Me&&(K.delta&&!qi(Me,8)?s.go(-K.delta,!1):K.type===Sl.pop&&qi(Me,20)&&s.go(-1,!1)),P(oe,xe,Me)}).catch(el)}))}let N=Na(),O=Na(),Y;function G(L,Z,K){ee(L);const oe=O.list();return oe.length?oe.forEach(de=>de(L,Z,K)):console.error(L),Promise.reject(L)}function z(){return Y&&l.value!==Ss?Promise.resolve():new Promise((L,Z)=>{N.add([L,Z])})}function ee(L){return Y||(Y=!L,U(),N.list().forEach(([Z,K])=>L?K(L):Z()),N.reset()),L}function ue(L,Z,K,oe){const{scrollBehavior:de}=i;if(!uo||!de)return Promise.resolve();const xe=!K&&SF(B0(L.fullPath,0))||(oe||!K)&&history.state&&history.state.scroll||null;return sp().then(()=>de(L,Z,xe)).then(Me=>Me&&yF(Me)).catch(Me=>G(Me,L,Z))}const ve=L=>s.go(L);let H;const le=new Set,pe={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:m,getRoutes:d,resolve:v,options:i,push:b,replace:y,go:ve,back:()=>ve(-1),forward:()=>ve(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:O.add,isReady:z,install(L){const Z=this;L.component("RouterLink",bd),L.component("RouterView",Bb),L.config.globalProperties.$router=Z,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>rs(l)}),uo&&!H&&l.value===Ss&&(H=!0,b(s.location).catch(de=>{}));const K={};for(const de in Ss)K[de]=Ht(()=>l.value[de]);L.provide(Up,Z),L.provide(kb,ca(K)),L.provide(xd,l);const oe=L.unmount;le.add(L),L.unmount=function(){le.delete(L),le.size<1&&(c=Ss,W&&W(),W=null,l.value=Ss,H=!1,Y=!1),oe()}}};return pe}function ro(i){return i.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function uk(i,e){const t=[],n=[],s=[],r=Math.max(e.matched.length,i.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(i.matched.find(c=>na(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>na(c,l))||s.push(l))}return[t,n,s]}const fk={class:"container"},hk={class:"wrapper"},dk=ts("footer",null,null,-1),pk={__name:"App",setup(i){return(e,t)=>(su(),cp("div",fk,[ts("header",null,[ts("div",hk,[ts("nav",null,[Zt(rs(bd),{to:"/"},{default:Uh(()=>[Gh("Home")]),_:1}),Zt(rs(bd),{to:"/game"},{default:Uh(()=>[Gh("Game")]),_:1})])])]),ts("main",null,[(su(),_S(GM,null,[Zt(cF)],1024)),Zt(rs(Bb))]),dk]))}};const zb=rw("game",{state:()=>({playersCounter:0,scoreboard:[]}),actions:{updatePlayersCounter(i){this.playersCounter=i},initScoreboard(){for(const[,i]of Cs.game.teams)this.addNewTeamToScoreboard(i);this.filterScoreboard()},addNewTeamToScoreboard(i){const e=i.medals[0]*io[0]+i.medals[1]*io[1]+i.medals[2]*io[2];this.scoreboard.push({name:i.iso,score:e})},updateScoreTeam(i){const e=i.medals[0]*io[0]+i.medals[1]*io[1]+i.medals[2]*io[2];this.scoreboard[this.scoreboard.findIndex(t=>t.name===i.iso)].score=e,this.filterScoreboard()},filterScoreboard(){this.scoreboard=this.scoreboard.sort(function(i,e){return e.score-i.score})}}});class Q0{constructor(e){this.position=e.position,this.type=e.type,this.id=e.id}}class e_{constructor({iso:e,position:t,medals:n={0:0,1:0,2:0}}){this.iso=e,this.position=t,this.medals=n}move(e){switch(e){case sc.up:this.position.y-=1;break;case sc.right:this.position.x+=1;break;case sc.down:this.position.y+=1;break;case sc.left:this.position.x-=1;break}return this}collect(e){return this.medals[e.type]++,this}}class mk{constructor(){this.teams=new Map,this.medals=new Map,this.domGameStore=zb(),this.userId=null,this.currentTeam=null,this.voteId=null}setState(e){this.userId=e.userId,e.medalsInGame.forEach(t=>this.medals.set(t.id,new Q0(t))),Object.entries(e.teamsState).forEach(([t,n])=>this.teams.set(t,new e_(n))),We.emit(ct.STATE_READY,{teams:this.teams,medals:this.medals}),this.domGameStore.initScoreboard()}userJoin(e){this.voteId=e.voteId,this.currentTeam=this.teams.get(e.iso),We.emit(ct.JOIN_READY,this.currentTeam)}createTeam(e){if(this.teams.has(e.iso))return console.error("Team already exists");const t=new e_(e);this.teams.set(e.iso,t),We.emit(ct.CREATE_TEAM,t),this.domGameStore.addNewTeamToScoreboard(t)}addMedals(e){const t=[];e.medals.forEach(n=>{if(this.medals.has(n.id))return console.error("Medal already exists");const s=new Q0(n);this.medals.set(n.id,s),t.push(s)}),We.emit(ct.SPAWN_MEDALS,t)}medalCollect(e){if(!this.teams.has(e.iso)||!this.medals.has(e.medal.id))return console.error("Medal or team doesn't exist");const t=this.teams.get(e.iso);t.collect(this.medals.get(e.medal.id)),this.medals.delete(e.medal.id),We.emit(ct.COLLECT_MEDAL,e.medal.id),this.domGameStore.updateScoreTeam(t)}voteResults(e){if(!this.teams.has(e.iso))return console.error("Team doesn't exist");const t=this.teams.get(e.iso).move(e.direction);We.emit(ct.VOTE_RESULTS,t)}userVote(e){Cs.server.userVote(e)}}const gk={class:"home"},_k=ts("h1",null,"Homepage",-1),vk=[_k],xk={__name:"HomeView",setup(i){return(e,t)=>(su(),cp("div",gk,vk))}},Vb=ck({history:AF("/"),routes:[{path:"/",name:"home",component:xk},{path:"/game",name:"game",component:()=>Va(()=>import("./GameView-89ac0acf.js"),["assets/GameView-89ac0acf.js","assets/GameView-3af122f9.css"])}]});Vb.afterEach((i,e)=>{We.emit(ct.ROUTE_CHANGE,i.name)});var Er,li;const Mo=class{constructor(){we(this,Er,void 0);we(this,li,void 0);rt(this,Er,new Map),rt(this,li,new Map)}get(e){return $(this,Er).get(e)}set(e,t){var n;return t!==$(this,Er).get(e)&&($(this,Er).set(e,t),(n=$(this,li).get(e))==null||n.forEach(s=>s.call(this,t))),this.get(e)}watch(e,t){$(this,li).has(e)?$(this,li).get(e).add(t):$(this,li).set(e,new Set().add(t))}stopWatch(e,t){if(!$(this,li).has(e))return;$(this,li).get(e).delete(t)}watching(e){return $(this,li).has(e)}static getInstance(){return Mo.instance||(Mo.instance=new Mo),Mo.instance}};let Wc=Mo;Er=new WeakMap,li=new WeakMap,Xn(Wc,"instance");const bk=Wc.getInstance();var Bo,Nl,Du,Ol,yd,Nu,Gb,Ou,Hb,Uu,Wb,Fu,jb,ku,Xb,Bu,Yb,zu,qb,Ul,Md,Vu,$b;class yk{constructor({host:e=""}){we(this,Ol);we(this,Nu);we(this,Ou);we(this,Uu);we(this,Fu);we(this,ku);we(this,Bu);we(this,zu);we(this,Ul);we(this,Vu);we(this,Bo,void 0);we(this,Nl,void 0);we(this,Du,e=>{const t=JSON.parse(e.data);He(this,Nu,Gb).call(this,Object.assign(new t_,t))});rt(this,Nl,e),rt(this,Bo,new WebSocket(`wss://${$(this,Nl)}/ws`)),$(this,Bo).onmessage=$(this,Du),this.domGameStore=zb(),window.addEventListener("keydown",t=>{if(t.key==="p"){const n={iso:"FRA",count:Math.floor(Math.random()*100)};He(this,Ul,Md).call(this,n)}})}userVote(e){He(this,Ol,yd).call(this,Si.USER_VOTE,e)}userJoin(e){He(this,Ol,yd).call(this,Si.USER_JOIN,e)}}Bo=new WeakMap,Nl=new WeakMap,Du=new WeakMap,Ol=new WeakSet,yd=function(e,t){const n=new t_(e,t);$(this,Bo).send(JSON.stringify(n))},Nu=new WeakSet,Gb=function(e){switch(e.type){case Si.CONNECT_STATE:He(this,Ou,Hb).call(this,e.data);break;case Si.JOIN_STATE:He(this,Uu,Wb).call(this,e.data);break;case Si.VOTE_RESULTS:He(this,Fu,jb).call(this,e.data);break;case Si.VOTE_COUNT:He(this,ku,Xb).call(this,e.data);break;case Si.MEDAL_APPARITION:He(this,Bu,Yb).call(this,e.data);break;case Si.MEDAL_COLLECTION:He(this,zu,qb).call(this,e.data);break;case Si.NEW_TEAM:He(this,Vu,$b).call(this,e.data);break;case Si.PLAYER_COUNT:He(this,Ul,Md).call(this,e.data);break}},Ou=new WeakSet,Hb=function(e){bk.set(_T.USER_ID,e.userId),Cs.game.setState(e)},Uu=new WeakSet,Wb=function(e){Cs.game.userJoin(e)},Fu=new WeakSet,jb=function(e){Cs.game.voteResults(e)},ku=new WeakSet,Xb=function(e){},Bu=new WeakSet,Yb=function(e){Cs.game.addMedals(e)},zu=new WeakSet,qb=function(e){Cs.game.medalCollect(e)},Ul=new WeakSet,Md=function(e){this.domGameStore.updatePlayersCounter(e.count)},Vu=new WeakSet,$b=function(e){Cs.game.createTeam(e)};class t_{constructor(e,t){this.type=e,this.payload=t}}class Mk{constructor(e,t){this.ctx=e,this.buffer=t,this.amp=this.ctx.createGain(),this.amp.connect(this.ctx.destination),this.loop=!1,this._muted=!1,this._volume=1,this.source=null,this._playing=!1,this.timer=null}get playing(){return this._playing}get muted(){return this._muted}set muted(e){this._muted=e,this.amp.gain.value=this._muted?0:this._volume}get volume(){return this._volume}set volume(e){this._volume=e,this._muted||(this.amp.gain.value=this._volume)}play(){this._playing||(this.source=this.ctx.createBufferSource(),this.source.buffer=this.buffer,this.source.loop=this.loop,this.source.connect(this.amp),this.loopEnd=this.buffer.duration,this.source.start(0),this.timer=setTimeout(()=>{this.loop||this.pause()},this.buffer.duration*1e3),this._playing=!0)}pause(){var e;this.source&&(this._playing=!1,clearTimeout(this.timer),(e=this.source)==null||e.disconnect(),this.source=null,this._isFadingOut=!1)}}var Gu;class Sk{constructor(){Xn(this,"initAudio",()=>{this.audioCtx=new AudioContext,this.keys=Object.keys(ao.sounds),this.sounds=Oe.core.assetsManager.get(...this.keys),this.audios=Object.fromEntries(this.keys.map((e,t)=>[e,new Mk(this.audioCtx,this.sounds[t])])),We.off(ct.POINTER_DOWN,this.initAudio),this.isInit=!0});we(this,Gu,()=>{var e;(e=Oe.debug)==null||e.mapping.add(this,"Sound",1)});We.on(ct.POINTER_DOWN,this.initAudio),We.on(ct.ATTACH,$(this,Gu)),this.isInit=!1}play(e){this.audios[e].play()}pause(e){this.audios[e].pause()}}Gu=new WeakMap;Vd.registerPlugin(kl);kl.create("playerJump","M0,0 C0.426,0 0.43,-0.014 0.488,0.072 0.633,0.291 0.544,0.803 0.756,0.908 0.886,0.972 0.982,1 1,1");const wk=oT({legacy:!1,globalInjection:!0,locale:"en",fallbackLocale:"en",availableLocales:["en","fr","es"],messages:ny}),Xl=ZS(pk);Xl.use(ew());Xl.use(Vb);Xl.use(wk);Xl.mount("#vue-app");const Cs={vueApp:Xl,server:new yk({host:"prod"}),game:new mk,sound:new Sk};export{Ik as C,sc as D,ct as E,Ri as F,Cs as G,Ck as M,zn as Q,_T as S,Ml as T,B as V,Va as _,ts as a,zb as b,cp as c,Ju as d,Oe as e,We as f,rs as g,Ak as h,Zt as i,Dk as j,_b as k,Pc as l,kr as m,Rk as n,su as o,Lk as p,Pk as q,Ni as r,bk as s,Ek as t,vp as u,Ve as v};
