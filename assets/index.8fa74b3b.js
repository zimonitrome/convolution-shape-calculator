const cd=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}};cd();const gn={};function hd(i){gn.context=i}const ud=(i,t)=>i===t,fd=Symbol("solid-proxy"),yc={equals:ud};let mu=_u;const Ur={},yi=1,so=2,gu={owned:null,cleanups:null,context:null,owner:null};var Je=null;let Qr=null,_e=null,Fr=null,Ae=null,on=null,_l=0;function dd(i,t){const e=_e,n=Je,r=i.length===0?gu:{owned:null,cleanups:null,context:null,owner:t||n};Je=r,_e=null;try{return Ml(()=>i(()=>Sl(r)),!0)}finally{_e=e,Je=n}}function vn(i,t){t=t?Object.assign({},yc,t):yc;const e={value:i,observers:null,observerSlots:null,pending:Ur,comparator:t.equals||void 0},n=r=>(typeof r=="function"&&(r=r(e.pending!==Ur?e.pending:e.value)),bl(e,r));return[md.bind(e),n]}function oo(i,t,e){const n=xu(i,t,!1,yi);So(n)}function yl(i,t,e){mu=_d;const n=xu(i,t,!1,yi);n.user=!0,on?on.push(n):So(n)}function pd(i){if(Fr)return i();let t;const e=Fr=[];try{t=i()}finally{Fr=null}return Ml(()=>{for(let n=0;n<e.length;n+=1){const r=e[n];if(r.pending!==Ur){const s=r.pending;r.pending=Ur,bl(r,s)}}},!1),t}function vl(i){let t,e=_e;return _e=null,t=i(),_e=e,t}function wl(i){yl(()=>vl(i))}function md(){const i=Qr;if(this.sources&&(this.state||i)){const t=Ae;Ae=null,this.state===yi||i?So(this):ao(this),Ae=t}if(_e){const t=this.observers?this.observers.length:0;_e.sources?(_e.sources.push(this),_e.sourceSlots.push(t)):(_e.sources=[this],_e.sourceSlots=[t]),this.observers?(this.observers.push(_e),this.observerSlots.push(_e.sources.length-1)):(this.observers=[_e],this.observerSlots=[_e.sources.length-1])}return this.value}function bl(i,t,e){if(Fr)return i.pending===Ur&&Fr.push(i),i.pending=t,t;if(i.comparator&&i.comparator(i.value,t))return t;let n=!1;return i.value=t,i.observers&&i.observers.length&&Ml(()=>{for(let r=0;r<i.observers.length;r+=1){const s=i.observers[r];n&&Qr.disposed.has(s),(n&&!s.tState||!n&&!s.state)&&(s.pure?Ae.push(s):on.push(s),s.observers&&yu(s)),n||(s.state=yi)}if(Ae.length>1e6)throw Ae=[],new Error},!1),t}function So(i){if(!i.fn)return;Sl(i);const t=Je,e=_e,n=_l;_e=Je=i,gd(i,i.value,n),_e=e,Je=t}function gd(i,t,e){let n;try{n=i.fn(t)}catch(r){vu(r)}(!i.updatedAt||i.updatedAt<=e)&&(i.observers&&i.observers.length?bl(i,n):i.value=n,i.updatedAt=e)}function xu(i,t,e,n=yi,r){const s={fn:i,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:Je,context:null,pure:e};return Je===null||Je!==gu&&(Je.owned?Je.owned.push(s):Je.owned=[s]),s}function Br(i){const t=Qr;if(i.state===0||t)return;if(i.state===so||t)return ao(i);if(i.suspense&&vl(i.suspense.inFallback))return i.suspense.effects.push(i);const e=[i];for(;(i=i.owner)&&(!i.updatedAt||i.updatedAt<_l);)(i.state||t)&&e.push(i);for(let n=e.length-1;n>=0;n--)if(i=e[n],i.state===yi||t)So(i);else if(i.state===so||t){const r=Ae;Ae=null,ao(i,e[0]),Ae=r}}function Ml(i,t){if(Ae)return i();let e=!1;t||(Ae=[]),on?e=!0:on=[],_l++;try{const n=i();return xd(e),n}catch(n){vu(n)}finally{Ae=null,e||(on=null)}}function xd(i){Ae&&(_u(Ae),Ae=null),!i&&(on.length?pd(()=>{mu(on),on=null}):on=null)}function _u(i){for(let t=0;t<i.length;t++)Br(i[t])}function _d(i){let t,e=0;for(t=0;t<i.length;t++){const r=i[t];r.user?i[e++]=r:Br(r)}gn.context&&hd();const n=i.length;for(t=0;t<e;t++)Br(i[t]);for(t=n;t<i.length;t++)Br(i[t])}function ao(i,t){const e=Qr;i.state=0;for(let n=0;n<i.sources.length;n+=1){const r=i.sources[n];r.sources&&(r.state===yi||e?r!==t&&Br(r):(r.state===so||e)&&ao(r,t))}}function yu(i){const t=Qr;for(let e=0;e<i.observers.length;e+=1){const n=i.observers[e];(!n.state||t)&&(n.state=so,n.pure?Ae.push(n):on.push(n),n.observers&&yu(n))}}function Sl(i){let t;if(i.sources)for(;i.sources.length;){const e=i.sources.pop(),n=i.sourceSlots.pop(),r=e.observers;if(r&&r.length){const s=r.pop(),o=e.observerSlots.pop();n<r.length&&(s.sourceSlots[o]=n,r[n]=s,e.observerSlots[n]=o)}}if(i.owned){for(t=0;t<i.owned.length;t++)Sl(i.owned[t]);i.owned=null}if(i.cleanups){for(t=0;t<i.cleanups.length;t++)i.cleanups[t]();i.cleanups=null}i.state=0,i.context=null}function vu(i){throw i}function Qt(i,t){return vl(()=>i(t||{}))}function ds(){return!0}const yd={get(i,t,e){return t===fd?e:i.get(t)},has(i,t){return i.has(t)},set:ds,deleteProperty:ds,getOwnPropertyDescriptor(i,t){return{configurable:!0,enumerable:!0,get(){return i.get(t)},set:ds,deleteProperty:ds}},ownKeys(i){return i.keys()}};function qo(i){return(i=typeof i=="function"?i():i)==null?{}:i}function El(...i){return new Proxy({get(t){for(let e=i.length-1;e>=0;e--){const n=qo(i[e])[t];if(n!==void 0)return n}},has(t){for(let e=i.length-1;e>=0;e--)if(t in qo(i[e]))return!0;return!1},keys(){const t=[];for(let e=0;e<i.length;e++)t.push(...Object.keys(qo(i[e])));return[...new Set(t)]}},yd)}function vd(i,t,e){let n=e.length,r=t.length,s=n,o=0,a=0,l=t[r-1].nextSibling,c=null;for(;o<r||a<s;){if(t[o]===e[a]){o++,a++;continue}for(;t[r-1]===e[s-1];)r--,s--;if(r===o){const h=s<n?a?e[a-1].nextSibling:e[s-a]:l;for(;a<s;)i.insertBefore(e[a++],h)}else if(s===a)for(;o<r;)(!c||!c.has(t[o]))&&t[o].remove(),o++;else if(t[o]===e[s-1]&&e[a]===t[r-1]){const h=t[--r].nextSibling;i.insertBefore(e[a++],t[o++].nextSibling),i.insertBefore(e[--s],h),t[r]=e[s]}else{if(!c){c=new Map;let u=a;for(;u<s;)c.set(e[u],u++)}const h=c.get(t[o]);if(h!=null)if(a<h&&h<s){let u=o,f=1,d;for(;++u<r&&u<s&&!((d=c.get(t[u]))==null||d!==h+f);)f++;if(f>h-a){const g=t[o];for(;a<h;)i.insertBefore(e[a++],g)}else i.replaceChild(e[a++],t[o++])}else o++;else t[o++].remove()}}}const vc="_$DX_DELEGATE";function wd(i,t,e){let n;return dd(r=>{n=r,t===document?i():ze(t,i(),t.firstChild?null:void 0,e)}),()=>{n(),t.textContent=""}}function Qe(i,t,e){const n=document.createElement("template");n.innerHTML=i;let r=n.content.firstChild;return e&&(r=r.firstChild),r}function bd(i,t=window.document){const e=t[vc]||(t[vc]=new Set);for(let n=0,r=i.length;n<r;n++){const s=i[n];e.has(s)||(e.add(s),t.addEventListener(s,Md))}}function ps(i,t,e){e==null?i.removeAttribute(t):i.setAttribute(t,e)}function rr(i,t,e={}){const n=i.style,r=typeof e=="string";if(t==null&&r||typeof t=="string")return n.cssText=t;r&&(n.cssText=void 0,e={}),t||(t={});let s,o;for(o in e)t[o]==null&&n.removeProperty(o),delete e[o];for(o in t)s=t[o],s!==e[o]&&(n.setProperty(o,s),e[o]=s);return e}function ze(i,t,e,n){if(e!==void 0&&!n&&(n=[]),typeof t!="function")return lo(i,t,n,e);oo(r=>lo(i,t(),r,e),n)}function Md(i){const t=`$$${i.type}`;let e=i.composedPath&&i.composedPath()[0]||i.target;for(i.target!==e&&Object.defineProperty(i,"target",{configurable:!0,value:e}),Object.defineProperty(i,"currentTarget",{configurable:!0,get(){return e||document}}),gn.registry&&!gn.done&&(gn.done=!0,document.querySelectorAll("[id^=pl-]").forEach(n=>n.remove()));e!==null;){const n=e[t];if(n&&!e.disabled){const r=e[`${t}Data`];if(r!==void 0?n(r,i):n(i),i.cancelBubble)return}e=e.host&&e.host!==e&&e.host instanceof Node?e.host:e.parentNode}}function lo(i,t,e,n,r){for(gn.context&&!e&&(e=[...i.childNodes]);typeof e=="function";)e=e();if(t===e)return e;const s=typeof t,o=n!==void 0;if(i=o&&e[0]&&e[0].parentNode||i,s==="string"||s==="number"){if(gn.context)return e;if(s==="number"&&(t=t.toString()),o){let a=e[0];a&&a.nodeType===3?a.data=t:a=document.createTextNode(t),e=Ci(i,e,n,a)}else e!==""&&typeof e=="string"?e=i.firstChild.data=t:e=i.textContent=t}else if(t==null||s==="boolean"){if(gn.context)return e;e=Ci(i,e,n)}else{if(s==="function")return oo(()=>{let a=t();for(;typeof a=="function";)a=a();e=lo(i,a,e,n)}),()=>e;if(Array.isArray(t)){const a=[];if(Ga(a,t,r))return oo(()=>e=lo(i,a,e,n,!0)),()=>e;if(gn.context){for(let l=0;l<a.length;l++)if(a[l].parentNode)return e=a}if(a.length===0){if(e=Ci(i,e,n),o)return e}else Array.isArray(e)?e.length===0?wc(i,a,n):vd(i,e,a):(e&&Ci(i),wc(i,a));e=a}else if(t instanceof Node){if(gn.context&&t.parentNode)return e=o?[t]:t;if(Array.isArray(e)){if(o)return e=Ci(i,e,n,t);Ci(i,e,null,t)}else e==null||e===""||!i.firstChild?i.appendChild(t):i.replaceChild(t,i.firstChild);e=t}}return e}function Ga(i,t,e){let n=!1;for(let r=0,s=t.length;r<s;r++){let o=t[r],a;if(o instanceof Node)i.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))n=Ga(i,o)||n;else if((a=typeof o)=="string")i.push(document.createTextNode(o));else if(a==="function")if(e){for(;typeof o=="function";)o=o();n=Ga(i,Array.isArray(o)?o:[o])||n}else i.push(o),n=!0;else i.push(document.createTextNode(o.toString()))}return n}function wc(i,t,e){for(let n=0,r=t.length;n<r;n++)i.insertBefore(t[n],e)}function Ci(i,t,e,n){if(e===void 0)return i.textContent="";const r=n||document.createTextNode("");if(t.length){let s=!1;for(let o=t.length-1;o>=0;o--){const a=t[o];if(r!==a){const l=a.parentNode===i;!s&&!o?l?i.replaceChild(r,a):i.insertBefore(r,e):l&&a.remove()}else s=!0}}else i.insertBefore(r,e);return[r]}const Sd=Qe("<span>: </span>"),Ed=Qe('<div><label><input type="number"></label><input type="range" step="1"></div>'),wu={display:"flex","flex-direction":"column",width:"fit-content"},Td={"border-style":"hidden","background-color":"#00000000",font:"inherit",width:"5ch","text-align":"right","flex-basis":"100%"},bu=({text:i=""})=>(()=>{const t=Sd.cloneNode(!0),e=t.firstChild;return t.style.setProperty("opacity","0.4"),ze(t,i,e),t})();var qn=i=>{const t=El({min:0,max:10,step:1,scaling:"linear"},i);let e,n;switch(t.scaling){case"pow2":e=o=>Math.pow(2,o),n=o=>Math.log2(o);break;default:e=o=>o,n=o=>o;break}const r=()=>t.signal[0](),s=o=>t.signal[1](o);return(()=>{const o=Ed.cloneNode(!0),a=o.firstChild,l=a.firstChild,c=a.nextSibling;return rr(o,wu),ze(a,Qt(bu,{get text(){return t.text}}),l),l.$$input=h=>s(parseInt(h.currentTarget.value)),rr(l,Td),c.$$input=h=>s(e(parseInt(h.currentTarget.value))),oo(h=>{const u=t.min,f=t.max,d=r(),g=n(t.min),m=n(t.max),p=n(r());return u!==h._v$&&ps(l,"min",h._v$=u),f!==h._v$2&&ps(l,"max",h._v$2=f),d!==h._v$3&&(l.value=h._v$3=d),g!==h._v$4&&ps(c,"min",h._v$4=g),m!==h._v$5&&ps(c,"max",h._v$5=m),p!==h._v$6&&(c.value=h._v$6=p),h},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),o})()};bd(["input"]);const Ad=Qe("<div><div></div></div>");var Tl=i=>{const t={"font-weight":"bold","font-family":"ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",display:"flex","flex-direction":"row","justify-content":"center","white-space":"nowrap","font-size":"18pt","flex-grow":1,margin:"15px"},e={display:"flex","flex-wrap":"wrap"};return(()=>{const n=Ad.cloneNode(!0),r=n.firstChild;return rr(n,t),ze(n,()=>i.children[0],r),rr(r,e),ze(r,()=>i.children.slice(1)),n})()};const Cd=Qe("<div><label><output></output></label></div>");var to=i=>{const t={width:"4ch","margin-right":"1ch",display:"inline-block","text-align":"right"};return(()=>{const e=Cd.cloneNode(!0),n=e.firstChild,r=n.firstChild;return rr(e,wu),ze(n,Qt(bu,{get text(){return i.text}}),r),rr(r,t),ze(r,()=>i.value),e})()};const Ld=Qe("<div></div>");var Al=i=>(()=>{const t=Ld.cloneNode(!0);return t.style.setProperty("outline","1px solid #888"),t.style.setProperty("border-radius","0.75ch"),t.style.setProperty("min-width","fit-content"),t.style.setProperty("display","flex"),t.style.setProperty("align-items","center"),t.style.setProperty("flex-direction","row"),t.style.setProperty("justify-content","space-between"),ze(t,()=>i.children),t})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cl="140",Rd=0,bc=1,Pd=2,Mu=1,Dd=2,Dr=3,Hr=0,Ve=1,sr=2,Su=1,Xn=0,nr=1,Mc=2,Sc=3,Ec=4,Id=5,Yi=100,Nd=101,Fd=102,Tc=103,Ac=104,Bd=200,zd=201,Od=202,Ud=203,Eu=204,Tu=205,Hd=206,kd=207,Gd=208,Vd=209,Wd=210,qd=0,jd=1,Xd=2,Va=3,$d=4,Yd=5,Jd=6,Zd=7,Eo=0,Kd=1,Qd=2,In=0,tp=1,ep=2,np=3,ip=4,rp=5,Au=300,or=301,ar=302,Wa=303,qa=304,To=306,Rn=1e3,sn=1001,ja=1002,be=1003,Cc=1004,Lc=1005,Ne=1006,sp=1007,Ao=1008,gi=1009,op=1010,ap=1011,kr=1012,lp=1013,eo=1014,hi=1015,Gr=1016,cp=1017,hp=1018,ir=1020,up=1021,fp=1022,an=1023,dp=1024,pp=1025,di=1026,lr=1027,mp=1028,gp=1029,xp=1030,_p=1031,yp=1033,jo=33776,Xo=33777,$o=33778,Yo=33779,Rc=35840,Pc=35841,Dc=35842,Ic=35843,vp=36196,Nc=37492,Fc=37496,Bc=37808,zc=37809,Oc=37810,Uc=37811,Hc=37812,kc=37813,Gc=37814,Vc=37815,Wc=37816,qc=37817,jc=37818,Xc=37819,$c=37820,Yc=37821,Jc=36492,wp=2200,bp=2201,Mp=2202,co=2300,ho=2301,Jo=2302,Ji=2400,Zi=2401,uo=2402,Ll=2500,Cu=2501,Sp=0,Jn=3e3,ae=3001,Ep=3200,Tp=3201,fr=0,Ap=1,Ln="srgb",ui="srgb-linear",Zo=7680,Cp=519,Vr=35044,fo=35048,Zc="300 es",Xa=1035;class vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Me=[];for(let i=0;i<256;i++)Me[i]=(i<16?"0":"")+i.toString(16);const no=Math.PI/180,$a=180/Math.PI;function _n(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Me[i&255]+Me[i>>8&255]+Me[i>>16&255]+Me[i>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function Lp(i,t){return(i%t+t)%t}function Ko(i,t,e){return(1-e)*i+e*t}function Kc(i){return(i&i-1)===0&&i!==0}function Ya(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}class Z{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}Z.prototype.isVector2=!0;class Se{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,r,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],m=r[0],p=r[3],x=r[6],w=r[1],T=r[4],E=r[7],b=r[2],C=r[5],L=r[8];return s[0]=o*m+a*w+l*b,s[3]=o*p+a*T+l*C,s[6]=o*x+a*E+l*L,s[1]=c*m+h*w+u*b,s[4]=c*p+h*T+u*C,s[7]=c*x+h*E+u*L,s[2]=f*m+d*w+g*b,s[5]=f*p+d*T+g*C,s[8]=f*x+d*E+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,g=e*u+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return t[0]=u*m,t[1]=(r*c-h*n)*m,t[2]=(a*n-r*o)*m,t[3]=f*m,t[4]=(h*e-r*l)*m,t[5]=(r*s-a*e)*m,t[6]=d*m,t[7]=(n*l-c*e)*m,t[8]=(o*e-n*s)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],h=r[7];return r[0]=e*s+n*l,r[3]=e*o+n*c,r[6]=e*a+n*h,r[1]=-n*s+e*l,r[4]=-n*o+e*c,r[7]=-n*a+e*h,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}Se.prototype.isMatrix3=!0;function Lu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>65535)return!0;return!1}function Wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function io(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Qo={[Ln]:{[ui]:pi},[ui]:{[Ln]:io}},tn={legacyMode:!0,get workingColorSpace(){return ui},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,t,e){if(this.legacyMode||t===e||!t||!e)return i;if(Qo[t]&&Qo[t][e]!==void 0){const n=Qo[t][e];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)}},Ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xe={r:0,g:0,b:0},en={h:0,s:0,l:0},ms={h:0,s:0,l:0};function ta(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function gs(i,t){return t.r=i.r,t.g=i.g,t.b=i.b,t}class pt{constructor(t,e,n){return e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,tn.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=ui){return this.r=t,this.g=e,this.b=n,tn.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=ui){if(t=Lp(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ta(o,s,t+1/3),this.g=ta(o,s,t),this.b=ta(o,s,t-1/3)}return tn.toWorkingColorSpace(this,r),this}setStyle(t,e=Ln){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,tn.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,tn.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,h=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(l,c,h,e)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,tn.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,tn.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=Ln){const n=Ru[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=io(t.r),this.g=io(t.g),this.b=io(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ln){return tn.fromWorkingColorSpace(gs(this,xe),t),Te(xe.r*255,0,255)<<16^Te(xe.g*255,0,255)<<8^Te(xe.b*255,0,255)<<0}getHexString(t=Ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ui){tn.fromWorkingColorSpace(gs(this,xe),e);const n=xe.r,r=xe.g,s=xe.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ui){return tn.fromWorkingColorSpace(gs(this,xe),e),t.r=xe.r,t.g=xe.g,t.b=xe.b,t}getStyle(t=Ln){return tn.fromWorkingColorSpace(gs(this,xe),t),t!==Ln?`color(${t} ${xe.r} ${xe.g} ${xe.b})`:`rgb(${xe.r*255|0},${xe.g*255|0},${xe.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(en),en.h+=t,en.s+=e,en.l+=n,this.setHSL(en.h,en.s,en.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(en),t.getHSL(ms);const n=Ko(en.h,ms.h,e),r=Ko(en.s,ms.s,e),s=Ko(en.l,ms.l,e);return this.setHSL(n,r,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}pt.NAMES=Ru;pt.prototype.isColor=!0;pt.prototype.r=1;pt.prototype.g=1;pt.prototype.b=1;let Li;class wi{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Li===void 0&&(Li=Wr("canvas")),Li.width=t.width,Li.height=t.height;const n=Li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Wr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=pi(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pi(e[n]/255)*255):e[n]=pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Rl{constructor(t=null){this.uuid=_n(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ea(r[o].image)):s.push(ea(r[o]))}else s=ea(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wi.getDataURL(i):i.data?{data:Array.prototype.slice.call(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}Rl.prototype.isSource=!0;let Rp=0;class ye extends vi{constructor(t=ye.DEFAULT_IMAGE,e=ye.DEFAULT_MAPPING,n=sn,r=sn,s=Ne,o=Ao,a=an,l=gi,c=1,h=Jn){super(),Object.defineProperty(this,"id",{value:Rp++}),this.uuid=_n(),this.name="",this.source=new Rl(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Au)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rn:t.x=t.x-Math.floor(t.x);break;case sn:t.x=t.x<0?0:1;break;case ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rn:t.y=t.y-Math.floor(t.y);break;case sn:t.y=t.y<0?0:1;break;case ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}ye.DEFAULT_IMAGE=null;ye.DEFAULT_MAPPING=Au;ye.prototype.isTexture=!0;class te{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],m=l[2],p=l[6],x=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,E=(d+1)/2,b=(x+1)/2,C=(h+f)/4,L=(u+m)/4,_=(g+p)/4;return T>E&&T>b?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=C/n,s=L/n):E>b?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=C/r,s=_/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=L/s,r=_/s),this.set(n,r,s,e),this}let w=Math.sqrt((p-g)*(p-g)+(u-m)*(u-m)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(u-m)/w,this.z=(f-h)/w,this.w=Math.acos((c+d+x-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}te.prototype.isVector4=!0;class We extends vi{constructor(t,e,n={}){super(),this.width=t,this.height=e,this.depth=1,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);const r={width:t,height:e,depth:1};this.texture=new ye(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ne,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Rl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}We.prototype.isWebGLRenderTarget=!0;class Co extends ye{constructor(t=null,e=1,n=1,r=1){super(null),this.image={data:t,width:e,height:n,depth:r},this.magFilter=be,this.minFilter=be,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Co.prototype.isDataArrayTexture=!0;class Pp extends We{constructor(t,e,n){super(t,e),this.depth=n,this.texture=new Co(null,t,e,n),this.texture.isRenderTargetTexture=!0}}Pp.prototype.isWebGLArrayRenderTarget=!0;class Pl extends ye{constructor(t=null,e=1,n=1,r=1){super(null),this.image={data:t,width:e,height:n,depth:r},this.magFilter=be,this.minFilter=be,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Pl.prototype.isData3DTexture=!0;class Dp extends We{constructor(t,e,n){super(t,e),this.depth=n,this.texture=new Pl(null,t,e,n),this.texture.isRenderTargetTexture=!0}}Dp.prototype.isWebGL3DRenderTarget=!0;class Ip extends We{constructor(t,e,n,r={}){super(t,e,r);const s=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=s.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.texture.length;r<s;r++)this.texture[r].image.width=t,this.texture[r].image.height=e,this.texture[r].image.depth=n;this.dispose()}return this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e),this}copy(t){this.dispose(),this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.texture.length=0;for(let e=0,n=t.texture.length;e<n;e++)this.texture[e]=t.texture[e].clone(),this.texture[e].isRenderTargetTexture=!0;return this}}Ip.prototype.isWebGLMultipleRenderTargets=!0;class Oe{constructor(t=0,e=0,n=0,r=1){this._x=t,this._y=e,this._z=n,this._w=r}static slerp(t,e,n,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(t,e,r)}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],m=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=m;return}if(u!==m||l!==f||c!==d||h!==g){let p=1-a;const x=l*f+c*d+h*g+u*m,w=x>=0?1:-1,T=1-x*x;if(T>Number.EPSILON){const b=Math.sqrt(T),C=Math.atan2(b,x*w);p=Math.sin(p*C)/b,a=Math.sin(a*C)/b}const E=a*w;if(l=l*p+f*E,c=c*p+d*E,h=h*p+g*E,u=u*p+m*E,p===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),f=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,e){return e!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(s),n*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}Oe.prototype.isQuaternion=!0;class S{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Qc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*r-a*n,h=l*n+a*e-s*r,u=l*r+s*n-o*e,f=-s*e-o*n-a*r;return this.x=c*l+f*-s+h*-a-u*-o,this.y=h*l+f*-o+u*-s-c*-a,this.z=u*l+f*-a+c*-o-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t,e){return e!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return na.copy(this).projectOnVector(t),this.sub(na)}reflect(t){return this.sub(na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}S.prototype.isVector3=!0;const na=new S,Qc=new Oe;class je{constructor(t=new S(1/0,1/0,1/0),e=new S(-1/0,-1/0,-1/0)){this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.length;l<c;l+=3){const h=t[l],u=t[l+1],f=t[l+2];h<e&&(e=h),u<n&&(n=u),f<r&&(r=f),h>s&&(s=h),u>o&&(o=u),f>a&&(a=f)}return this.min.set(e,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.count;l<c;l++){const h=t.getX(l),u=t.getY(l),f=t.getZ(l);h<e&&(e=h),u<n&&(n=u),f<r&&(r=f),h>s&&(s=h),u>o&&(o=u),f>a&&(a=f)}return this.min.set(e,n,r),this.max.set(s,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)ii.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(ii)}else n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox),ia.applyMatrix4(t.matrixWorld),this.union(ia);const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ii),ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),xs.subVectors(this.max,Mr),Ri.subVectors(t.a,Mr),Pi.subVectors(t.b,Mr),Di.subVectors(t.c,Mr),zn.subVectors(Pi,Ri),On.subVectors(Di,Pi),ri.subVectors(Ri,Di);let e=[0,-zn.z,zn.y,0,-On.z,On.y,0,-ri.z,ri.y,zn.z,0,-zn.x,On.z,0,-On.x,ri.z,0,-ri.x,-zn.y,zn.x,0,-On.y,On.x,0,-ri.y,ri.x,0];return!ra(e,Ri,Pi,Di,xs)||(e=[1,0,0,0,1,0,0,0,1],!ra(e,Ri,Pi,Di,xs))?!1:(_s.crossVectors(zn,On),e=[_s.x,_s.y,_s.z],ra(e,Ri,Pi,Di,xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return ii.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(ii).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}je.prototype.isBox3=!0;const Mn=[new S,new S,new S,new S,new S,new S,new S,new S],ii=new S,ia=new je,Ri=new S,Pi=new S,Di=new S,zn=new S,On=new S,ri=new S,Mr=new S,xs=new S,_s=new S,si=new S;function ra(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){si.fromArray(i,s);const a=r.x*Math.abs(si.x)+r.y*Math.abs(si.y)+r.z*Math.abs(si.z),l=t.dot(si),c=e.dot(si),h=n.dot(si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Np=new je,th=new S,ys=new S,sa=new S;class bi{constructor(t=new S,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Np.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){sa.subVectors(t,this.center);const e=sa.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.add(sa.multiplyScalar(r/n)),this.radius+=r}return this}union(t){return this.center.equals(t.center)===!0?ys.set(0,0,1).multiplyScalar(t.radius):ys.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(th.copy(t.center).add(ys)),this.expandByPoint(th.copy(t.center).sub(ys)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new S,oa=new S,vs=new S,Un=new S,aa=new S,ws=new S,la=new S;class Mi{constructor(t=new S,e=new S(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.direction).multiplyScalar(e).add(this.origin),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){oa.copy(t).add(e).multiplyScalar(.5),vs.copy(e).sub(t).normalize(),Un.copy(this.origin).sub(oa);const s=t.distanceTo(e)*.5,o=-this.direction.dot(vs),a=Un.dot(this.direction),l=-Un.dot(vs),c=Un.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const m=1/h;u*=m,f*=m,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),r&&r.copy(vs).multiplyScalar(f).add(oa),d}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const n=Sn.dot(this.direction),r=Sn.dot(Sn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>r||((s>n||n!==n)&&(n=s),(o<r||r!==r)&&(r=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,r,s){aa.subVectors(e,t),ws.subVectors(n,t),la.crossVectors(aa,ws);let o=this.direction.dot(la),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Un.subVectors(this.origin,t);const l=a*this.direction.dot(ws.crossVectors(Un,ws));if(l<0)return null;const c=a*this.direction.dot(aa.cross(Un));if(c<0||l+c>o)return null;const h=-a*Un.dot(la);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,r,s,o,a,l,c,h,u,f,d,g,m,p){const x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=r,x[1]=s,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=f,x[3]=d,x[7]=g,x[11]=m,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Ii.setFromMatrixColumn(t,0).length(),s=1/Ii.setFromMatrixColumn(t,1).length(),o=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,m=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-m*c,e[9]=-a*l,e[2]=m-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,m=c*u;e[0]=f+m*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=m+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,m=c*u;e[0]=f-m*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=m-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,m=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+m,e[1]=l*u,e[5]=m*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,m=a*c;e[0]=l*h,e[4]=m-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-m*u}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,m=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+m,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=m*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fp,t,Bp)}lookAt(t,e,n){const r=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),Hn.crossVectors(n,ke),Hn.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),Hn.crossVectors(n,ke)),Hn.normalize(),bs.crossVectors(ke,Hn),r[0]=Hn.x,r[4]=bs.x,r[8]=ke.x,r[1]=Hn.y,r[5]=bs.y,r[9]=ke.y,r[2]=Hn.z,r[6]=bs.z,r[10]=ke.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],m=n[6],p=n[10],x=n[14],w=n[3],T=n[7],E=n[11],b=n[15],C=r[0],L=r[4],_=r[8],A=r[12],I=r[1],D=r[5],Q=r[9],Y=r[13],P=r[2],H=r[6],B=r[10],V=r[14],$=r[3],O=r[7],W=r[11],tt=r[15];return s[0]=o*C+a*I+l*P+c*$,s[4]=o*L+a*D+l*H+c*O,s[8]=o*_+a*Q+l*B+c*W,s[12]=o*A+a*Y+l*V+c*tt,s[1]=h*C+u*I+f*P+d*$,s[5]=h*L+u*D+f*H+d*O,s[9]=h*_+u*Q+f*B+d*W,s[13]=h*A+u*Y+f*V+d*tt,s[2]=g*C+m*I+p*P+x*$,s[6]=g*L+m*D+p*H+x*O,s[10]=g*_+m*Q+p*B+x*W,s[14]=g*A+m*Y+p*V+x*tt,s[3]=w*C+T*I+E*P+b*$,s[7]=w*L+T*D+E*H+b*O,s[11]=w*_+T*Q+E*B+b*W,s[15]=w*A+T*Y+E*V+b*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],m=t[7],p=t[11],x=t[15];return g*(+s*l*u-r*c*u-s*a*f+n*c*f+r*a*d-n*l*d)+m*(+e*l*d-e*c*f+s*o*f-r*o*d+r*c*h-s*l*h)+p*(+e*c*u-e*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+x*(-r*a*h-e*l*u+e*a*f+r*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],m=t[13],p=t[14],x=t[15],w=u*p*c-m*f*c+m*l*d-a*p*d-u*l*x+a*f*x,T=g*f*c-h*p*c-g*l*d+o*p*d+h*l*x-o*f*x,E=h*m*c-g*u*c+g*a*d-o*m*d-h*a*x+o*u*x,b=g*u*l-h*m*l-g*a*f+o*m*f+h*a*p-o*u*p,C=e*w+n*T+r*E+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return t[0]=w*L,t[1]=(m*f*s-u*p*s-m*r*d+n*p*d+u*r*x-n*f*x)*L,t[2]=(a*p*s-m*l*s+m*r*c-n*p*c-a*r*x+n*l*x)*L,t[3]=(u*l*s-a*f*s-u*r*c+n*f*c+a*r*d-n*l*d)*L,t[4]=T*L,t[5]=(h*p*s-g*f*s+g*r*d-e*p*d-h*r*x+e*f*x)*L,t[6]=(g*l*s-o*p*s-g*r*c+e*p*c+o*r*x-e*l*x)*L,t[7]=(o*f*s-h*l*s+h*r*c-e*f*c-o*r*d+e*l*d)*L,t[8]=E*L,t[9]=(g*u*s-h*m*s-g*n*d+e*m*d+h*n*x-e*u*x)*L,t[10]=(o*m*s-g*a*s+g*n*c-e*m*c-o*n*x+e*a*x)*L,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*d-e*a*d)*L,t[12]=b*L,t[13]=(h*m*r-g*u*r+g*n*f-e*m*f-h*n*p+e*u*p)*L,t[14]=(g*a*r-o*m*r-g*n*l+e*m*l+o*n*p-e*a*p)*L,t[15]=(o*u*r-h*a*r+h*n*l-e*u*l-o*n*f+e*a*f)*L,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,g=s*u,m=o*h,p=o*u,x=a*u,w=l*c,T=l*h,E=l*u,b=n.x,C=n.y,L=n.z;return r[0]=(1-(m+x))*b,r[1]=(d+E)*b,r[2]=(g-T)*b,r[3]=0,r[4]=(d-E)*C,r[5]=(1-(f+x))*C,r[6]=(p+w)*C,r[7]=0,r[8]=(g+T)*L,r[9]=(p-w)*L,r[10]=(1-(f+m))*L,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Ii.set(r[0],r[1],r[2]).length();const o=Ii.set(r[4],r[5],r[6]).length(),a=Ii.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],nn.copy(this);const c=1/s,h=1/o,u=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,e.setFromRotationMatrix(nn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(e-t),c=2*s/(n-r),h=(e+t)/(e-t),u=(n+r)/(n-r),f=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,r,s,o){const a=this.elements,l=1/(e-t),c=1/(n-r),h=1/(o-s),u=(e+t)*l,f=(n+r)*c,d=(o+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}yt.prototype.isMatrix4=!0;const Ii=new S,nn=new yt,Fp=new S(0,0,0),Bp=new S(1,1,1),Hn=new S,bs=new S,ke=new S,eh=new yt,nh=new Oe;class Si{constructor(t=0,e=0,n=0,r=Si.DefaultOrder){this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return eh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(eh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nh.setFromEuler(this),this.setFromQuaternion(nh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.prototype.isEuler=!0;Si.DefaultOrder="XYZ";Si.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Dl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zp=0;const ih=new S,Ni=new Oe,En=new yt,Ms=new S,Sr=new S,Op=new S,Up=new Oe,rh=new S(1,0,0),sh=new S(0,1,0),oh=new S(0,0,1),Hp={type:"added"},ah={type:"removed"};class Zt extends vi{constructor(){super(),Object.defineProperty(this,"id",{value:zp++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DefaultUp.clone();const t=new S,e=new Si,n=new Oe,r=new S(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Se}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Zt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.premultiply(Ni),this}rotateX(t){return this.rotateOnAxis(rh,t)}rotateY(t){return this.rotateOnAxis(sh,t)}rotateZ(t){return this.rotateOnAxis(oh,t)}translateOnAxis(t,e){return ih.copy(t).applyQuaternion(this.quaternion),this.position.add(ih.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rh,t)}translateY(t){return this.translateOnAxis(sh,t)}translateZ(t){return this.translateOnAxis(oh,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ms.copy(t):Ms.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(Sr,Ms,this.up):En.lookAt(Ms,Sr,this.up),this.quaternion.setFromRotationMatrix(En),r&&(En.extractRotation(r.matrixWorld),Ni.setFromRotationMatrix(En),this.quaternion.premultiply(Ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Hp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ah)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ah)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,t,Op),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,Up,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Zt.DefaultUp=new S(0,1,0);Zt.DefaultMatrixAutoUpdate=!0;Zt.prototype.isObject3D=!0;const rn=new S,Tn=new S,ca=new S,An=new S,Fi=new S,Bi=new S,lh=new S,ha=new S,ua=new S,fa=new S;class me{constructor(t=new S,e=new S,n=new S){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),rn.subVectors(t,e),r.cross(rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){rn.subVectors(r,e),Tn.subVectors(n,e),ca.subVectors(t,e);const o=rn.dot(rn),a=rn.dot(Tn),l=rn.dot(ca),c=Tn.dot(Tn),h=Tn.dot(ca),u=o*c-a*a;if(u===0)return s.set(-2,-1,-1);const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,An),An.x>=0&&An.y>=0&&An.x+An.y<=1}static getUV(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,An),l.set(0,0),l.addScaledVector(s,An.x),l.addScaledVector(o,An.y),l.addScaledVector(a,An.z),l}static isFrontFacing(t,e,n,r){return rn.subVectors(n,e),Tn.subVectors(t,e),rn.cross(Tn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),rn.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return me.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return me.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,r,s){return me.getUV(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return me.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return me.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Fi.subVectors(r,n),Bi.subVectors(s,n),ha.subVectors(t,n);const l=Fi.dot(ha),c=Bi.dot(ha);if(l<=0&&c<=0)return e.copy(n);ua.subVectors(t,r);const h=Fi.dot(ua),u=Bi.dot(ua);if(h>=0&&u<=h)return e.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Fi,o);fa.subVectors(t,s);const d=Fi.dot(fa),g=Bi.dot(fa);if(g>=0&&d<=g)return e.copy(s);const m=d*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Bi,a);const p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return lh.subVectors(s,r),a=(u-h)/(u-h+(d-g)),e.copy(r).addScaledVector(lh,a);const x=1/(p+m+f);return o=m*x,a=f*x,e.copy(n).addScaledVector(Fi,o).addScaledVector(Bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let kp=0;class ve extends vi{constructor(){super(),Object.defineProperty(this,"id",{value:kp++}),this.uuid=_n(),this.name="",this.type="Material",this.blending=nr,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Eu,this.blendDst=Tu,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zo,this.stencilZFail=Zo,this.stencilZPass=Zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Su;continue}const r=this[e];if(r===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==Hr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}ve.prototype.isMaterial=!0;ve.fromType=function(){return null};class ts extends ve{constructor(t){super(),this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}ts.prototype.isMeshBasicMaterial=!0;const pe=new S,Ss=new Z;class ge{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=Vr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){const e=this.array;let n=0;for(let r=0,s=t.length;r<s;r++){let o=t[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new pt),e[n++]=o.r,e[n++]=o.g,e[n++]=o.b}return this}copyVector2sArray(t){const e=this.array;let n=0;for(let r=0,s=t.length;r<s;r++){let o=t[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Z),e[n++]=o.x,e[n++]=o.y}return this}copyVector3sArray(t){const e=this.array;let n=0;for(let r=0,s=t.length;r<s;r++){let o=t[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new S),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z}return this}copyVector4sArray(t){const e=this.array;let n=0;for(let r=0,s=t.length;r<s;r++){let o=t[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new te),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z,e[n++]=o.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ss.fromBufferAttribute(this,e),Ss.applyMatrix3(t),this.setXY(e,Ss.x,Ss.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vr&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}ge.prototype.isBufferAttribute=!0;class Pu extends ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Du extends ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Gp extends ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}}Gp.prototype.isFloat16BufferAttribute=!0;class re extends ge{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Vp=0;const $e=new yt,da=new Zt,zi=new S,Ge=new je,Er=new je,we=new S;class ee extends vi{constructor(){super(),Object.defineProperty(this,"id",{value:Vp++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lu(t)?Du:Pu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Se().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return da.lookAt(t),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new re(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new je);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ge.setFromBufferAttribute(s),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new S,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Er.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(Ge.min,Er.min),Ge.expandByPoint(we),we.addVectors(Ge.max,Er.max),Ge.expandByPoint(we)):(Ge.expandByPoint(Er.min),Ge.expandByPoint(Er.max))}Ge.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)we.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(we));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)we.fromBufferAttribute(a,c),l&&(zi.fromBufferAttribute(t,c),we.add(zi)),r=Math.max(r,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ge(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let I=0;I<a;I++)c[I]=new S,h[I]=new S;const u=new S,f=new S,d=new S,g=new Z,m=new Z,p=new Z,x=new S,w=new S;function T(I,D,Q){u.fromArray(r,I*3),f.fromArray(r,D*3),d.fromArray(r,Q*3),g.fromArray(o,I*2),m.fromArray(o,D*2),p.fromArray(o,Q*2),f.sub(u),d.sub(u),m.sub(g),p.sub(g);const Y=1/(m.x*p.y-p.x*m.y);!isFinite(Y)||(x.copy(f).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(Y),w.copy(d).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(Y),c[I].add(x),c[D].add(x),c[Q].add(x),h[I].add(w),h[D].add(w),h[Q].add(w))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let I=0,D=E.length;I<D;++I){const Q=E[I],Y=Q.start,P=Q.count;for(let H=Y,B=Y+P;H<B;H+=3)T(n[H+0],n[H+1],n[H+2])}const b=new S,C=new S,L=new S,_=new S;function A(I){L.fromArray(s,I*3),_.copy(L);const D=c[I];b.copy(D),b.sub(L.multiplyScalar(L.dot(D))).normalize(),C.crossVectors(_,D);const Y=C.dot(h[I])<0?-1:1;l[I*4]=b.x,l[I*4+1]=b.y,l[I*4+2]=b.z,l[I*4+3]=Y}for(let I=0,D=E.length;I<D;++I){const Q=E[I],Y=Q.start,P=Q.count;for(let H=Y,B=Y+P;H<B;H+=3)A(n[H+0]),A(n[H+1]),A(n[H+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new S,s=new S,o=new S,a=new S,l=new S,c=new S,h=new S,u=new S;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),m=t.getX(f+1),p=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,p),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const r in n){if(t.attributes[r]===void 0)continue;const o=n[r].array,a=t.attributes[r],l=a.array,c=a.itemSize*e,h=Math.min(l.length,o.length-c);for(let u=0,f=c;u<h;u++,f++)o[f]=l[u]}return this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*h;for(let x=0;x<h;x++)f[g++]=c[d++]}return new ge(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ee,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}ee.prototype.isBufferGeometry=!0;const ch=new yt,Oi=new Mi,pa=new bi,kn=new S,Gn=new S,Vn=new S,ma=new S,ga=new S,xa=new S,Es=new S,Ts=new S,As=new S,Cs=new Z,Ls=new Z,Rs=new Z,_a=new S,Ps=new S;class he extends Zt{constructor(t=new ee,e=new ts){super(),this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(s),t.ray.intersectsSphere(pa)===!1)||(ch.copy(s).invert(),Oi.copy(t.ray).applyMatrix4(ch),n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,f=n.attributes.uv2,d=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,p=d.length;m<p;m++){const x=d[m],w=r[x.materialIndex],T=Math.max(x.start,g.start),E=Math.min(a.count,Math.min(x.start+x.count,g.start+g.count));for(let b=T,C=E;b<C;b+=3){const L=a.getX(b),_=a.getX(b+1),A=a.getX(b+2);o=Ds(this,w,t,Oi,l,c,h,u,f,L,_,A),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,e.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let x=m,w=p;x<w;x+=3){const T=a.getX(x),E=a.getX(x+1),b=a.getX(x+2);o=Ds(this,r,t,Oi,l,c,h,u,f,T,E,b),o&&(o.faceIndex=Math.floor(x/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,p=d.length;m<p;m++){const x=d[m],w=r[x.materialIndex],T=Math.max(x.start,g.start),E=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let b=T,C=E;b<C;b+=3){const L=b,_=b+1,A=b+2;o=Ds(this,w,t,Oi,l,c,h,u,f,L,_,A),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,e.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let x=m,w=p;x<w;x+=3){const T=x,E=x+1,b=x+2;o=Ds(this,r,t,Oi,l,c,h,u,f,T,E,b),o&&(o.faceIndex=Math.floor(x/3),e.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}he.prototype.isMesh=!0;function Wp(i,t,e,n,r,s,o,a){let l;if(t.side===Ve?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side!==sr,a),l===null)return null;Ps.copy(a),Ps.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ps);return c<e.near||c>e.far?null:{distance:c,point:Ps.clone(),object:i}}function Ds(i,t,e,n,r,s,o,a,l,c,h,u){kn.fromBufferAttribute(r,c),Gn.fromBufferAttribute(r,h),Vn.fromBufferAttribute(r,u);const f=i.morphTargetInfluences;if(s&&f){Es.set(0,0,0),Ts.set(0,0,0),As.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const p=f[g],x=s[g];p!==0&&(ma.fromBufferAttribute(x,c),ga.fromBufferAttribute(x,h),xa.fromBufferAttribute(x,u),o?(Es.addScaledVector(ma,p),Ts.addScaledVector(ga,p),As.addScaledVector(xa,p)):(Es.addScaledVector(ma.sub(kn),p),Ts.addScaledVector(ga.sub(Gn),p),As.addScaledVector(xa.sub(Vn),p)))}kn.add(Es),Gn.add(Ts),Vn.add(As)}i.isSkinnedMesh&&(i.boneTransform(c,kn),i.boneTransform(h,Gn),i.boneTransform(u,Vn));const d=Wp(i,t,e,n,kn,Gn,Vn,_a);if(d){a&&(Cs.fromBufferAttribute(a,c),Ls.fromBufferAttribute(a,h),Rs.fromBufferAttribute(a,u),d.uv=me.getUV(_a,kn,Gn,Vn,Cs,Ls,Rs,new Z)),l&&(Cs.fromBufferAttribute(l,c),Ls.fromBufferAttribute(l,h),Rs.fromBufferAttribute(l,u),d.uv2=me.getUV(_a,kn,Gn,Vn,Cs,Ls,Rs,new Z));const g={a:c,b:h,c:u,normal:new S,materialIndex:0};me.getNormal(kn,Gn,Vn,g.normal),d.face=g}return d}class Nn extends ee{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function g(m,p,x,w,T,E,b,C,L,_,A){const I=E/L,D=b/_,Q=E/2,Y=b/2,P=C/2,H=L+1,B=_+1;let V=0,$=0;const O=new S;for(let W=0;W<B;W++){const tt=W*D-Y;for(let J=0;J<H;J++){const et=J*I-Q;O[m]=et*w,O[p]=tt*T,O[x]=P,c.push(O.x,O.y,O.z),O[m]=0,O[p]=0,O[x]=C>0?1:-1,h.push(O.x,O.y,O.z),u.push(J/L),u.push(1-W/_),V+=1}}for(let W=0;W<_;W++)for(let tt=0;tt<L;tt++){const J=f+tt+H*W,et=f+tt+H*(W+1),mt=f+(tt+1)+H*(W+1),xt=f+(tt+1)+H*W;l.push(J,et,xt),l.push(et,mt,xt),$+=6}a.addGroup(d,$,A),d+=$,f+=V}}static fromJSON(t){return new Nn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function cr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ee(i){const t={};for(let e=0;e<i.length;e++){const n=cr(i[e]);for(const r in n)t[r]=n[r]}return t}const Il={clone:cr,merge:Ee};var qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ze extends ve{constructor(t){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=qp,this.fragmentShader=jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cr(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}Ze.prototype.isShaderMaterial=!0;class Nl extends Zt{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Nl.prototype.isCamera=!0;class Fe extends Nl{constructor(t=50,e=1,n=.1,r=2e3){super(),this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$a*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(no*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}Fe.prototype.isPerspectiveCamera=!0;const Ui=90,Hi=1;class Fl extends Zt{constructor(t,e,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const r=new Fe(Ui,Hi,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new S(1,0,0)),this.add(r);const s=new Fe(Ui,Hi,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new S(-1,0,0)),this.add(s);const o=new Fe(Ui,Hi,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new S(0,1,0)),this.add(o);const a=new Fe(Ui,Hi,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new S(0,-1,0)),this.add(a);const l=new Fe(Ui,Hi,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new S(0,0,1)),this.add(l);const c=new Fe(Ui,Hi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new S(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,h=t.getRenderTarget(),u=t.toneMapping,f=t.xr.enabled;t.toneMapping=In,t.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,r),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=d,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Lo extends ye{constructor(t,e,n,r,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:or,super(t,e,n,r,s,o,a,l,c,h),this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}Lo.prototype.isCubeTexture=!0;class Iu extends We{constructor(t,e={}){super(t,t,e);const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Lo(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ne}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Nn(5,5,5),s=new Ze({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Xn});s.uniforms.tEquirect.value=e;const o=new he(r,s),a=e.minFilter;return e.minFilter===Ao&&(e.minFilter=Ne),new Fl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}Iu.prototype.isWebGLCubeRenderTarget=!0;const ya=new S,Xp=new S,$p=new Se;class Pn{constructor(t=new S(1,0,0),e=0){this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ya.subVectors(n,e).cross(Xp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(ya),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(n).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||$p.getNormalMatrix(t),r=this.coplanarPoint(ya).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}Pn.prototype.isPlane=!0;const ki=new bi,Is=new S;class Ro{constructor(t=new Pn,e=new Pn,n=new Pn,r=new Pn,s=new Pn,o=new Pn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],f=n[8],d=n[9],g=n[10],m=n[11],p=n[12],x=n[13],w=n[14],T=n[15];return e[0].setComponents(a-r,u-l,m-f,T-p).normalize(),e[1].setComponents(a+r,u+l,m+f,T+p).normalize(),e[2].setComponents(a+s,u+c,m+d,T+x).normalize(),e[3].setComponents(a-s,u-c,m-d,T-x).normalize(),e[4].setComponents(a-o,u-h,m-g,T-w).normalize(),e[5].setComponents(a+o,u+h,m+g,T+w).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSprite(t){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Is.x=r.normal.x>0?t.max.x:t.min.x,Is.y=r.normal.y>0?t.max.y:t.min.y,Is.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Is)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nu(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Yp(i,t){const e=t.isWebGL2,n=new WeakMap;function r(c,h){const u=c.array,f=c.usage,d=i.createBuffer();i.bindBuffer(h,d),i.bufferData(h,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const f=h.array,d=h.updateRange;i.bindBuffer(u,c),d.count===-1?i.bufferSubData(u,0,f):(e?i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,r(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class Bl extends ee{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],m=[],p=[];for(let x=0;x<h;x++){const w=x*f-o;for(let T=0;T<c;T++){const E=T*u-s;g.push(E,-w,0),m.push(0,0,1),p.push(T/a),p.push(1-x/l)}}for(let x=0;x<l;x++)for(let w=0;w<a;w++){const T=w+c*x,E=w+c*(x+1),b=w+1+c*(x+1),C=w+1+c*x;d.push(T,E,C),d.push(E,b,C)}this.setIndex(d),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(m,3)),this.setAttribute("uv",new re(p,2))}static fromJSON(t){return new Bl(t.width,t.height,t.widthSegments,t.heightSegments)}}var Jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nm="vec3 transformed = vec3( position );",im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rm=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
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
#endif`,sm=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pm=`#define PI 3.141592653589793
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
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,mm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
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
#endif`,gm=`vec3 transformedNormal = objectNormal;
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
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",bm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mm=`#ifdef USE_ENVMAP
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
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,Sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Em=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Im=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fm=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Bm=`uniform bool receiveShadow;
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
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
#endif`,zm=`#if defined( USE_ENVMAP )
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
#endif`,Om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Gm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
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
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Vm=`struct PhysicalMaterial {
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
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
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
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
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
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
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
}`,Wm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,qm=`#if defined( RE_IndirectDiffuse )
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
#endif`,jm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Xm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$m=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ym=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ig=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rg=`#ifdef USE_MORPHNORMALS
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
#endif`,sg=`#ifdef USE_MORPHTARGETS
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
#endif`,og=`#ifdef USE_MORPHTARGETS
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
#endif`,ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
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
vec3 geometryNormal = normal;`,lg=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
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
#endif`,dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,pg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,gg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sg=`#ifdef USE_SHADOWMAP
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
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
#endif`,Eg=`#ifdef USE_SHADOWMAP
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
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
#endif`,Tg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Ag=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
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
}`,Cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lg=`#ifdef USE_SKINNING
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
#endif`,Rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pg=`#ifdef USE_SKINNING
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
#endif`,Dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bg=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,zg=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
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
#endif`,Og=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ug=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Hg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,kg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Gg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Vg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jg=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yg=`#include <common>
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
}`,Jg=`#if DEPTH_PACKING == 3200
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
}`,Zg=`#define DISTANCE
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
}`,Kg=`#define DISTANCE
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,e0=`uniform float scale;
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
}`,n0=`uniform vec3 diffuse;
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
}`,i0=`#include <common>
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
}`,r0=`uniform vec3 diffuse;
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
#include <cube_uv_reflection_fragment>
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
}`,s0=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
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
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o0=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
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
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
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
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a0=`#define MATCAP
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
}`,l0=`#define MATCAP
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
}`,c0=`#define NORMAL
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
}`,h0=`#define NORMAL
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
}`,u0=`#define PHONG
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
}`,f0=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,d0=`#define STANDARD
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
}`,p0=`#define STANDARD
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
}`,m0=`#define TOON
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
}`,g0=`#define TOON
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
}`,x0=`uniform float size;
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
}`,_0=`uniform vec3 diffuse;
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
}`,y0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
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
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,w0=`uniform float rotation;
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
}`,b0=`uniform vec3 diffuse;
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
}`,Bt={alphamap_fragment:Jp,alphamap_pars_fragment:Zp,alphatest_fragment:Kp,alphatest_pars_fragment:Qp,aomap_fragment:tm,aomap_pars_fragment:em,begin_vertex:nm,beginnormal_vertex:im,bsdfs:rm,bumpmap_pars_fragment:sm,clipping_planes_fragment:om,clipping_planes_pars_fragment:am,clipping_planes_pars_vertex:lm,clipping_planes_vertex:cm,color_fragment:hm,color_pars_fragment:um,color_pars_vertex:fm,color_vertex:dm,common:pm,cube_uv_reflection_fragment:mm,defaultnormal_vertex:gm,displacementmap_pars_vertex:xm,displacementmap_vertex:_m,emissivemap_fragment:ym,emissivemap_pars_fragment:vm,encodings_fragment:wm,encodings_pars_fragment:bm,envmap_fragment:Mm,envmap_common_pars_fragment:Sm,envmap_pars_fragment:Em,envmap_pars_vertex:Tm,envmap_physical_pars_fragment:zm,envmap_vertex:Am,fog_vertex:Cm,fog_pars_vertex:Lm,fog_fragment:Rm,fog_pars_fragment:Pm,gradientmap_pars_fragment:Dm,lightmap_fragment:Im,lightmap_pars_fragment:Nm,lights_lambert_vertex:Fm,lights_pars_begin:Bm,lights_toon_fragment:Om,lights_toon_pars_fragment:Um,lights_phong_fragment:Hm,lights_phong_pars_fragment:km,lights_physical_fragment:Gm,lights_physical_pars_fragment:Vm,lights_fragment_begin:Wm,lights_fragment_maps:qm,lights_fragment_end:jm,logdepthbuf_fragment:Xm,logdepthbuf_pars_fragment:$m,logdepthbuf_pars_vertex:Ym,logdepthbuf_vertex:Jm,map_fragment:Zm,map_pars_fragment:Km,map_particle_fragment:Qm,map_particle_pars_fragment:tg,metalnessmap_fragment:eg,metalnessmap_pars_fragment:ng,morphcolor_vertex:ig,morphnormal_vertex:rg,morphtarget_pars_vertex:sg,morphtarget_vertex:og,normal_fragment_begin:ag,normal_fragment_maps:lg,normal_pars_fragment:cg,normal_pars_vertex:hg,normal_vertex:ug,normalmap_pars_fragment:fg,clearcoat_normal_fragment_begin:dg,clearcoat_normal_fragment_maps:pg,clearcoat_pars_fragment:mg,output_fragment:gg,packing:xg,premultiplied_alpha_fragment:_g,project_vertex:yg,dithering_fragment:vg,dithering_pars_fragment:wg,roughnessmap_fragment:bg,roughnessmap_pars_fragment:Mg,shadowmap_pars_fragment:Sg,shadowmap_pars_vertex:Eg,shadowmap_vertex:Tg,shadowmask_pars_fragment:Ag,skinbase_vertex:Cg,skinning_pars_vertex:Lg,skinning_vertex:Rg,skinnormal_vertex:Pg,specularmap_fragment:Dg,specularmap_pars_fragment:Ig,tonemapping_fragment:Ng,tonemapping_pars_fragment:Fg,transmission_fragment:Bg,transmission_pars_fragment:zg,uv_pars_fragment:Og,uv_pars_vertex:Ug,uv_vertex:Hg,uv2_pars_fragment:kg,uv2_pars_vertex:Gg,uv2_vertex:Vg,worldpos_vertex:Wg,background_vert:qg,background_frag:jg,cube_vert:Xg,cube_frag:$g,depth_vert:Yg,depth_frag:Jg,distanceRGBA_vert:Zg,distanceRGBA_frag:Kg,equirect_vert:Qg,equirect_frag:t0,linedashed_vert:e0,linedashed_frag:n0,meshbasic_vert:i0,meshbasic_frag:r0,meshlambert_vert:s0,meshlambert_frag:o0,meshmatcap_vert:a0,meshmatcap_frag:l0,meshnormal_vert:c0,meshnormal_frag:h0,meshphong_vert:u0,meshphong_frag:f0,meshphysical_vert:d0,meshphysical_frag:p0,meshtoon_vert:m0,meshtoon_frag:g0,points_vert:x0,points_frag:_0,shadow_vert:y0,shadow_frag:v0,sprite_vert:w0,sprite_frag:b0},rt={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Se},uv2Transform:{value:new Se},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Se}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Se}}},Be={basic:{uniforms:Ee([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ee([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.fog,rt.lights,{emissive:{value:new pt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ee([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ee([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ee([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new pt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ee([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ee([rt.points,rt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ee([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ee([rt.common,rt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ee([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ee([rt.sprite,rt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Se},t2D:{value:null}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},cube:{uniforms:Ee([rt.envmap,{opacity:{value:1}}]),vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ee([rt.common,rt.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ee([rt.lights,rt.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Be.physical={uniforms:Ee([Be.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Z(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};function M0(i,t,e,n,r,s){const o=new pt(0);let a=r===!0?0:1,l,c,h=null,u=0,f=null;function d(m,p){let x=!1,w=p.isScene===!0?p.background:null;w&&w.isTexture&&(w=t.get(w));const T=i.xr,E=T.getSession&&T.getSession();E&&E.environmentBlendMode==="additive"&&(w=null),w===null?g(o,a):w&&w.isColor&&(g(w,1),x=!0),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),w&&(w.isCubeTexture||w.mapping===To)?(c===void 0&&(c=new he(new Nn(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:cr(Be.cube.uniforms),vertexShader:Be.cube.vertexShader,fragmentShader:Be.cube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,(h!==w||u!==w.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=w,u=w.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new he(new Bl(2,2),new Ze({name:"BackgroundMaterial",uniforms:cr(Be.background.uniforms),vertexShader:Be.background.vertexShader,fragmentShader:Be.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||u!==w.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=w,u=w.version,f=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,p){e.buffers.color.setClear(m.r,m.g,m.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),a=p,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:d}}function S0(i,t,e,n){const r=i.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,h=!1;function u(P,H,B,V,$){let O=!1;if(o){const W=m(V,B,H);c!==W&&(c=W,d(c.object)),O=x(P,V,B,$),O&&w(P,V,B,$)}else{const W=H.wireframe===!0;(c.geometry!==V.id||c.program!==B.id||c.wireframe!==W)&&(c.geometry=V.id,c.program=B.id,c.wireframe=W,O=!0)}$!==null&&e.update($,34963),(O||h)&&(h=!1,_(P,H,B,V),$!==null&&i.bindBuffer(34963,e.get($).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(P){return n.isWebGL2?i.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function m(P,H,B){const V=B.wireframe===!0;let $=a[P.id];$===void 0&&($={},a[P.id]=$);let O=$[H.id];O===void 0&&(O={},$[H.id]=O);let W=O[V];return W===void 0&&(W=p(f()),O[V]=W),W}function p(P){const H=[],B=[],V=[];for(let $=0;$<r;$++)H[$]=0,B[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:B,attributeDivisors:V,object:P,attributes:{},index:null}}function x(P,H,B,V){const $=c.attributes,O=H.attributes;let W=0;const tt=B.getAttributes();for(const J in tt)if(tt[J].location>=0){const mt=$[J];let xt=O[J];if(xt===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(xt=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(xt=P.instanceColor)),mt===void 0||mt.attribute!==xt||xt&&mt.data!==xt.data)return!0;W++}return c.attributesNum!==W||c.index!==V}function w(P,H,B,V){const $={},O=H.attributes;let W=0;const tt=B.getAttributes();for(const J in tt)if(tt[J].location>=0){let mt=O[J];mt===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(mt=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(mt=P.instanceColor));const xt={};xt.attribute=mt,mt&&mt.data&&(xt.data=mt.data),$[J]=xt,W++}c.attributes=$,c.attributesNum=W,c.index=V}function T(){const P=c.newAttributes;for(let H=0,B=P.length;H<B;H++)P[H]=0}function E(P){b(P,0)}function b(P,H){const B=c.newAttributes,V=c.enabledAttributes,$=c.attributeDivisors;B[P]=1,V[P]===0&&(i.enableVertexAttribArray(P),V[P]=1),$[P]!==H&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,H),$[P]=H)}function C(){const P=c.newAttributes,H=c.enabledAttributes;for(let B=0,V=H.length;B<V;B++)H[B]!==P[B]&&(i.disableVertexAttribArray(B),H[B]=0)}function L(P,H,B,V,$,O){n.isWebGL2===!0&&(B===5124||B===5125)?i.vertexAttribIPointer(P,H,B,$,O):i.vertexAttribPointer(P,H,B,V,$,O)}function _(P,H,B,V){if(n.isWebGL2===!1&&(P.isInstancedMesh||V.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;T();const $=V.attributes,O=B.getAttributes(),W=H.defaultAttributeValues;for(const tt in O){const J=O[tt];if(J.location>=0){let et=$[tt];if(et===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(et=P.instanceColor)),et!==void 0){const mt=et.normalized,xt=et.itemSize,G=e.get(et);if(G===void 0)continue;const Wt=G.buffer,Mt=G.type,Dt=G.bytesPerElement;if(et.isInterleavedBufferAttribute){const st=et.data,Ot=st.stride,X=et.offset;if(st.isInstancedInterleavedBuffer){for(let j=0;j<J.locationSize;j++)b(J.location+j,st.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let j=0;j<J.locationSize;j++)E(J.location+j);i.bindBuffer(34962,Wt);for(let j=0;j<J.locationSize;j++)L(J.location+j,xt/J.locationSize,Mt,mt,Ot*Dt,(X+xt/J.locationSize*j)*Dt)}else{if(et.isInstancedBufferAttribute){for(let st=0;st<J.locationSize;st++)b(J.location+st,et.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let st=0;st<J.locationSize;st++)E(J.location+st);i.bindBuffer(34962,Wt);for(let st=0;st<J.locationSize;st++)L(J.location+st,xt/J.locationSize,Mt,mt,xt*Dt,xt/J.locationSize*st*Dt)}}else if(W!==void 0){const mt=W[tt];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(J.location,mt);break;case 3:i.vertexAttrib3fv(J.location,mt);break;case 4:i.vertexAttrib4fv(J.location,mt);break;default:i.vertexAttrib1fv(J.location,mt)}}}}C()}function A(){Q();for(const P in a){const H=a[P];for(const B in H){const V=H[B];for(const $ in V)g(V[$].object),delete V[$];delete H[B]}delete a[P]}}function I(P){if(a[P.id]===void 0)return;const H=a[P.id];for(const B in H){const V=H[B];for(const $ in V)g(V[$].object),delete V[$];delete H[B]}delete a[P.id]}function D(P){for(const H in a){const B=a[H];if(B[P.id]===void 0)continue;const V=B[P.id];for(const $ in V)g(V[$].object),delete V[$];delete B[P.id]}}function Q(){Y(),h=!0,c!==l&&(c=l,d(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Q,resetDefaultState:Y,dispose:A,releaseStatesOfGeometry:I,releaseStatesOfProgram:D,initAttributes:T,enableAttribute:E,disableUnusedAttributes:C}}function E0(i,t,e,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,h){i.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,u){if(u===0)return;let f,d;if(r)f=i,d="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,h,u),e.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=l}function T0(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(34930),f=i.getParameter(35660),d=i.getParameter(3379),g=i.getParameter(34076),m=i.getParameter(34921),p=i.getParameter(36347),x=i.getParameter(36348),w=i.getParameter(36349),T=f>0,E=o||t.has("OES_texture_float"),b=T&&E,C=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:w,vertexTextures:T,floatFragmentTextures:E,floatVertexTextures:b,maxSamples:C}}function A0(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Pn,a=new Se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f,d){const g=u.length!==0||f||n!==0||r;return r=f,e=h(u,d,0),n=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,f,d){const g=u.clippingPlanes,m=u.clipIntersection,p=u.clipShadows,x=i.get(u);if(!r||g===null||g.length===0||s&&!p)s?h(null):c();else{const w=s?0:n,T=w*4;let E=x.clippingState||null;l.value=E,E=h(g,f,T,d);for(let b=0;b!==T;++b)E[b]=e[b];x.clippingState=E,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const m=u!==null?u.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const x=d+m*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<x)&&(p=new Float32Array(x));for(let T=0,E=d;T!==m;++T,E+=4)o.copy(u[T]).applyMatrix4(w,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,p}}function C0(i){let t=new WeakMap;function e(o,a){return a===Wa?o.mapping=or:a===qa&&(o.mapping=ar),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Wa||a===qa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Iu(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Po extends Nl{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}Po.prototype.isOrthographicCamera=!0;const Ki=4,hh=[.125,.215,.35,.446,.526,.582],ci=20,va=new Po,uh=new pt;let wa=null;const oi=(1+Math.sqrt(5))/2,Gi=1/oi,fh=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,oi,Gi),new S(0,oi,-Gi),new S(Gi,0,oi),new S(-Gi,0,oi),new S(oi,Gi,0),new S(-oi,Gi,0)];class dh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){wa=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wa),t.scissorTest=!1,Ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===or||t.mapping===ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wa=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:Gr,format:an,encoding:Jn,depthBuffer:!1},r=ph(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ph(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L0(s)),this._blurMaterial=R0(s,t,e)}return r}_compileMaterial(t){const e=new he(this._lodPlanes[0],t);this._renderer.compile(e,va)}_sceneToCubeUV(t,e,n,r){const a=new Fe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(uh),h.toneMapping=In,h.autoClear=!1;const d=new ts({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),g=new he(new Nn,d);let m=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,m=!0):(d.color.copy(uh),m=!0);for(let x=0;x<6;x++){const w=x%3;w===0?(a.up.set(0,l[x],0),a.lookAt(c[x],0,0)):w===1?(a.up.set(0,0,l[x]),a.lookAt(0,c[x],0)):(a.up.set(0,l[x],0),a.lookAt(0,0,c[x]));const T=this._cubeSize;Ns(r,w*T,x>2?T:0,T,T),h.setRenderTarget(r),m&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===or||t.mapping===ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new he(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ns(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,va)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=fh[(r-1)%fh.length];this._blur(t,r-1,r,s,o)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new he(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ci-1),m=s/g,p=isFinite(s)?1+Math.floor(h*m):ci;p>ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ci}`);const x=[];let w=0;for(let L=0;L<ci;++L){const _=L/m,A=Math.exp(-_*_/2);x.push(A),L===0?w+=A:L<p&&(w+=2*A)}for(let L=0;L<x.length;L++)x[L]=x[L]/w;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=x,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-n;const E=this._sizeLods[r],b=3*E*(r>T-Ki?r-T+Ki:0),C=4*(this._cubeSize-E);Ns(e,b,C,3*E,2*E),l.setRenderTarget(e),l.render(u,va)}}function L0(i){const t=[],e=[],n=[];let r=i;const s=i-Ki+1+hh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Ki?l=hh[o-i+Ki-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,m=3,p=2,x=1,w=new Float32Array(m*g*d),T=new Float32Array(p*g*d),E=new Float32Array(x*g*d);for(let C=0;C<d;C++){const L=C%3*2/3-1,_=C>2?0:-1,A=[L,_,0,L+2/3,_,0,L+2/3,_+1,0,L,_,0,L+2/3,_+1,0,L,_+1,0];w.set(A,m*g*C),T.set(f,p*g*C);const I=[C,C,C,C,C,C];E.set(I,x*g*C)}const b=new ee;b.setAttribute("position",new ge(w,m)),b.setAttribute("uv",new ge(T,p)),b.setAttribute("faceIndex",new ge(E,x)),t.push(b),r>Ki&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ph(i,t,e){const n=new We(i,t,e);return n.texture.mapping=To,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ns(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function R0(i,t,e){const n=new Float32Array(ci),r=new S(0,1,0);return new Ze({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zl(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function mh(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function gh(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function zl(){return`

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
	`}function P0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wa||l===qa,h=l===or||l===ar;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new dh(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&r(u)){e===null&&(e=new dh(i));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function D0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function I0(i,t,e,n){const r={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],34962);const d=u.morphAttributes;for(const g in d){const m=d[g];for(let p=0,x=m.length;p<x;p++)t.update(m[p],34962)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let m=0;if(d!==null){const w=d.array;m=d.version;for(let T=0,E=w.length;T<E;T+=3){const b=w[T+0],C=w[T+1],L=w[T+2];f.push(b,C,C,L,L,b)}}else{const w=g.array;m=g.version;for(let T=0,E=w.length/3-1;T<E;T+=3){const b=T+0,C=T+1,L=T+2;f.push(b,C,C,L,L,b)}}const p=new(Lu(f)?Du:Pu)(f,1);p.version=m;const x=s.get(u);x&&t.remove(x),s.set(u,p)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function N0(i,t,e,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,d){i.drawElements(s,d,a,f*l),e.update(d,s,1)}function u(f,d,g){if(g===0)return;let m,p;if(r)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,d,a,f*l,g),e.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function F0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(s/3);break;case 1:e.lines+=a*(s/2);break;case 3:e.lines+=a*(s-1);break;case 2:e.lines+=a*s;break;case 0:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function B0(i,t){return i[0]-t[0]}function z0(i,t){return Math.abs(t[1])-Math.abs(i[1])}function ba(i,t){let e=1;const n=t.isInterleavedBufferAttribute?t.data.array:t.array;n instanceof Int8Array?e=127:n instanceof Int16Array?e=32767:n instanceof Int32Array?e=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),i.divideScalar(e)}function O0(i,t,e){const n={},r=new Float32Array(8),s=new WeakMap,o=new te,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,f){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=m!==void 0?m.length:0;let x=s.get(h);if(x===void 0||x.count!==p){let B=function(){P.dispose(),s.delete(h),h.removeEventListener("dispose",B)};var g=B;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],_=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let I=0;E===!0&&(I=1),b===!0&&(I=2),C===!0&&(I=3);let D=h.attributes.position.count*I,Q=1;D>t.maxTextureSize&&(Q=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const Y=new Float32Array(D*Q*4*p),P=new Co(Y,D,Q,p);P.type=hi,P.needsUpdate=!0;const H=I*4;for(let V=0;V<p;V++){const $=L[V],O=_[V],W=A[V],tt=D*Q*4*V;for(let J=0;J<$.count;J++){const et=J*H;E===!0&&(o.fromBufferAttribute($,J),$.normalized===!0&&ba(o,$),Y[tt+et+0]=o.x,Y[tt+et+1]=o.y,Y[tt+et+2]=o.z,Y[tt+et+3]=0),b===!0&&(o.fromBufferAttribute(O,J),O.normalized===!0&&ba(o,O),Y[tt+et+4]=o.x,Y[tt+et+5]=o.y,Y[tt+et+6]=o.z,Y[tt+et+7]=0),C===!0&&(o.fromBufferAttribute(W,J),W.normalized===!0&&ba(o,W),Y[tt+et+8]=o.x,Y[tt+et+9]=o.y,Y[tt+et+10]=o.z,Y[tt+et+11]=W.itemSize===4?o.w:1)}}x={count:p,texture:P,size:new Z(D,Q)},s.set(h,x),h.addEventListener("dispose",B)}let w=0;for(let E=0;E<d.length;E++)w+=d[E];const T=h.morphTargetsRelative?1:1-w;f.getUniforms().setValue(i,"morphTargetBaseInfluence",T),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),f.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{const m=d===void 0?0:d.length;let p=n[h.id];if(p===void 0||p.length!==m){p=[];for(let b=0;b<m;b++)p[b]=[b,0];n[h.id]=p}for(let b=0;b<m;b++){const C=p[b];C[0]=b,C[1]=d[b]}p.sort(z0);for(let b=0;b<8;b++)b<m&&p[b][1]?(a[b][0]=p[b][0],a[b][1]=p[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(B0);const x=h.morphAttributes.position,w=h.morphAttributes.normal;let T=0;for(let b=0;b<8;b++){const C=a[b],L=C[0],_=C[1];L!==Number.MAX_SAFE_INTEGER&&_?(x&&h.getAttribute("morphTarget"+b)!==x[L]&&h.setAttribute("morphTarget"+b,x[L]),w&&h.getAttribute("morphNormal"+b)!==w[L]&&h.setAttribute("morphNormal"+b,w[L]),r[b]=_,T+=_):(x&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),w&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),r[b]=0)}const E=h.morphTargetsRelative?1:1-T;f.getUniforms().setValue(i,"morphTargetBaseInfluence",E),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function U0(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);return r.get(u)!==c&&(t.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const Fu=new ye,Bu=new Co,zu=new Pl,Ou=new Lo,xh=[],_h=[],yh=new Float32Array(16),vh=new Float32Array(9),wh=new Float32Array(4);function dr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=xh[r];if(s===void 0&&(s=new Float32Array(r),xh[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Do(i,t){let e=_h[t];e===void 0&&(e=new Int32Array(t),_h[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function H0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function k0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function G0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function V0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function W0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;wh.set(n),i.uniformMatrix2fv(this.addr,!1,wh),Ie(e,n)}}function q0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;vh.set(n),i.uniformMatrix3fv(this.addr,!1,vh),Ie(e,n)}}function j0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;yh.set(n),i.uniformMatrix4fv(this.addr,!1,yh),Ie(e,n)}}function X0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $0(i,t){const e=this.cache;De(e,t)||(i.uniform2iv(this.addr,t),Ie(e,t))}function Y0(i,t){const e=this.cache;De(e,t)||(i.uniform3iv(this.addr,t),Ie(e,t))}function J0(i,t){const e=this.cache;De(e,t)||(i.uniform4iv(this.addr,t),Ie(e,t))}function Z0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function K0(i,t){const e=this.cache;De(e,t)||(i.uniform2uiv(this.addr,t),Ie(e,t))}function Q0(i,t){const e=this.cache;De(e,t)||(i.uniform3uiv(this.addr,t),Ie(e,t))}function tx(i,t){const e=this.cache;De(e,t)||(i.uniform4uiv(this.addr,t),Ie(e,t))}function ex(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2D(t||Fu,r)}function nx(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||zu,r)}function ix(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Ou,r)}function rx(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Bu,r)}function sx(i){switch(i){case 5126:return H0;case 35664:return k0;case 35665:return G0;case 35666:return V0;case 35674:return W0;case 35675:return q0;case 35676:return j0;case 5124:case 35670:return X0;case 35667:case 35671:return $0;case 35668:case 35672:return Y0;case 35669:case 35673:return J0;case 5125:return Z0;case 36294:return K0;case 36295:return Q0;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return rx}}function ox(i,t){i.uniform1fv(this.addr,t)}function ax(i,t){const e=dr(t,this.size,2);i.uniform2fv(this.addr,e)}function lx(i,t){const e=dr(t,this.size,3);i.uniform3fv(this.addr,e)}function cx(i,t){const e=dr(t,this.size,4);i.uniform4fv(this.addr,e)}function hx(i,t){const e=dr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ux(i,t){const e=dr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function fx(i,t){const e=dr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function dx(i,t){i.uniform1iv(this.addr,t)}function px(i,t){i.uniform2iv(this.addr,t)}function mx(i,t){i.uniform3iv(this.addr,t)}function gx(i,t){i.uniform4iv(this.addr,t)}function xx(i,t){i.uniform1uiv(this.addr,t)}function _x(i,t){i.uniform2uiv(this.addr,t)}function yx(i,t){i.uniform3uiv(this.addr,t)}function vx(i,t){i.uniform4uiv(this.addr,t)}function wx(i,t,e){const n=t.length,r=Do(e,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)e.setTexture2D(t[s]||Fu,r[s])}function bx(i,t,e){const n=t.length,r=Do(e,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)e.setTexture3D(t[s]||zu,r[s])}function Mx(i,t,e){const n=t.length,r=Do(e,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)e.setTextureCube(t[s]||Ou,r[s])}function Sx(i,t,e){const n=t.length,r=Do(e,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)e.setTexture2DArray(t[s]||Bu,r[s])}function Ex(i){switch(i){case 5126:return ox;case 35664:return ax;case 35665:return lx;case 35666:return cx;case 35674:return hx;case 35675:return ux;case 35676:return fx;case 5124:case 35670:return dx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return xx;case 36294:return _x;case 36295:return yx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return wx;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return Sx}}function Tx(i,t,e){this.id=i,this.addr=e,this.cache=[],this.setValue=sx(t.type)}function Ax(i,t,e){this.id=i,this.addr=e,this.cache=[],this.size=t.size,this.setValue=Ex(t.type)}function Uu(i){this.id=i,this.seq=[],this.map={}}Uu.prototype.setValue=function(i,t,e){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const o=n[r];o.setValue(i,t[o.id],e)}};const Ma=/(\w+)(\])?(\[|\.)?/g;function bh(i,t){i.seq.push(t),i.map[t.id]=t}function Cx(i,t,e){const n=i.name,r=n.length;for(Ma.lastIndex=0;;){const s=Ma.exec(n),o=Ma.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){bh(e,c===void 0?new Tx(a,i,t):new Ax(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Uu(a),bh(e,u)),e=u}}}function $n(i,t){this.seq=[],this.map={};const e=i.getProgramParameter(t,35718);for(let n=0;n<e;++n){const r=i.getActiveUniform(t,n),s=i.getUniformLocation(t,r.name);Cx(r,s,this)}}$n.prototype.setValue=function(i,t,e,n){const r=this.map[t];r!==void 0&&r.setValue(i,e,n)};$n.prototype.setOptional=function(i,t,e){const n=t[e];n!==void 0&&this.setValue(i,e,n)};$n.upload=function(i,t,e,n){for(let r=0,s=t.length;r!==s;++r){const o=t[r],a=e[o.id];a.needsUpdate!==!1&&o.setValue(i,a.value,n)}};$n.seqWithValue=function(i,t){const e=[];for(let n=0,r=i.length;n!==r;++n){const s=i[n];s.id in t&&e.push(s)}return e};function Mh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}let Lx=0;function Rx(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++)n.push(o+1+": "+e[o]);return n.join(`
`)}function Px(i){switch(i){case Jn:return["Linear","( value )"];case ae:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Sh(i,t,e){const n=i.getShaderParameter(t,35713),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[0]);return e.toUpperCase()+`

`+r+`

`+Rx(i.getShaderSource(t),o)}else return r}function Dx(i,t){const e=Px(t);return"vec4 "+i+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Ix(i,t){let e;switch(t){case tp:e="Linear";break;case ep:e="Reinhard";break;case np:e="OptimizedCineon";break;case ip:e="ACESFilmic";break;case rp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Nx(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ir).join(`
`)}function Fx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Bx(i,t){const e={},n=i.getProgramParameter(t,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ir(i){return i!==""}function Eh(i,t){return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Th(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(i){return i.replace(zx,Ox)}function Ox(i,t){const e=Bt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Ja(e)}const Ux=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ah(i){return i.replace(Hx,Hu).replace(Ux,kx)}function kx(i,t,e,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Hu(i,t,e,n)}function Hu(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ch(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Gx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Dd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Dr&&(t="SHADOWMAP_TYPE_VSM"),t}function Vx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case or:case ar:t="ENVMAP_TYPE_CUBE";break;case To:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ar:t="ENVMAP_MODE_REFRACTION";break}return t}function qx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Eo:t="ENVMAP_BLENDING_MULTIPLY";break;case Kd:t="ENVMAP_BLENDING_MIX";break;case Qd:t="ENVMAP_BLENDING_ADD";break}return t}function jx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Xx(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Gx(e),c=Vx(e),h=Wx(e),u=qx(e),f=jx(e),d=e.isWebGL2?"":Nx(e),g=Fx(s),m=r.createProgram();let p,x,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(Ir).join(`
`),p.length>0&&(p+=`
`),x=[d,g].filter(Ir).join(`
`),x.length>0&&(x+=`
`)):(p=[Ch(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),x=[d,Ch(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?Bt.tonemapping_pars_fragment:"",e.toneMapping!==In?Ix("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.encodings_pars_fragment,Dx("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ir).join(`
`)),o=Ja(o),o=Eh(o,e),o=Th(o,e),a=Ja(a),a=Eh(a,e),a=Th(a,e),o=Ah(o),a=Ah(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",e.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const T=w+p+o,E=w+x+a,b=Mh(r,35633,T),C=Mh(r,35632,E);if(r.attachShader(m,b),r.attachShader(m,C),e.index0AttributeName!==void 0?r.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),i.debug.checkShaderErrors){const A=r.getProgramInfoLog(m).trim(),I=r.getShaderInfoLog(b).trim(),D=r.getShaderInfoLog(C).trim();let Q=!0,Y=!0;if(r.getProgramParameter(m,35714)===!1){Q=!1;const P=Sh(r,b,"vertex"),H=Sh(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+A+`
`+P+`
`+H)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(I===""||D==="")&&(Y=!1);Y&&(this.diagnostics={runnable:Q,programLog:A,vertexShader:{log:I,prefix:p},fragmentShader:{log:D,prefix:x}})}r.deleteShader(b),r.deleteShader(C);let L;this.getUniforms=function(){return L===void 0&&(L=new $n(r,m)),L};let _;return this.getAttributes=function(){return _===void 0&&(_=Bx(r,m)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=e.shaderName,this.id=Lx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=C,this}let $x=0;class Yx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;return e.has(t)===!1&&e.set(t,new Set),e.get(t)}_getShaderStage(t){const e=this.shaderCache;if(e.has(t)===!1){const n=new Jx(t);e.set(t,n)}return e.get(t)}}class Jx{constructor(t){this.id=$x++,this.code=t,this.usedTimes=0}}function Zx(i,t,e,n,r,s,o){const a=new Dl,l=new Yx,c=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_,A,I,D,Q){const Y=D.fog,P=Q.geometry,H=_.isMeshStandardMaterial?D.environment:null,B=(_.isMeshStandardMaterial?e:t).get(_.envMap||H),V=!!B&&B.mapping===To?B.image.height:null,$=g[_.type];_.precision!==null&&(d=r.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const O=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,W=O!==void 0?O.length:0;let tt=0;P.morphAttributes.position!==void 0&&(tt=1),P.morphAttributes.normal!==void 0&&(tt=2),P.morphAttributes.color!==void 0&&(tt=3);let J,et,mt,xt;if($){const st=Be[$];J=st.vertexShader,et=st.fragmentShader}else J=_.vertexShader,et=_.fragmentShader,l.update(_),mt=l.getVertexShaderID(_),xt=l.getFragmentShaderID(_);const G=i.getRenderTarget(),Wt=_.alphaTest>0,Mt=_.clearcoat>0;return{isWebGL2:h,shaderID:$,shaderName:_.type,vertexShader:J,fragmentShader:et,defines:_.defines,customVertexShaderID:mt,customFragmentShaderID:xt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,instancing:Q.isInstancedMesh===!0,instancingColor:Q.isInstancedMesh===!0&&Q.instanceColor!==null,supportsVertexTextures:f,outputEncoding:G===null?i.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:Jn,map:!!_.map,matcap:!!_.matcap,envMap:!!B,envMapMode:B&&B.mapping,envMapCubeUVHeight:V,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===Ap,tangentSpaceNormalMap:_.normalMapType===fr,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===ae,clearcoat:Mt,clearcoatMap:Mt&&!!_.clearcoatMap,clearcoatRoughnessMap:Mt&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:Mt&&!!_.clearcoatNormalMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===nr,alphaMap:!!_.alphaMap,alphaTest:Wt,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!P.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatNormalMap||_.transmission>0||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||_.sheen>0||!!_.sheenColorMap||!!_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!Y,useFog:_.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:u,skinning:Q.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:tt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:_.toneMapped?i.toneMapping:In,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===sr,flipSided:_.side===Ve,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const I in _.defines)A.push(I),A.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(x(A,_),w(A,_),A.push(i.outputEncoding)),A.push(_.customProgramCacheKey),A.join()}function x(_,A){_.push(A.precision),_.push(A.outputEncoding),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.combine),_.push(A.vertexUvs),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function w(_,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.displacementMap&&a.enable(18),A.specularMap&&a.enable(19),A.roughnessMap&&a.enable(20),A.metalnessMap&&a.enable(21),A.gradientMap&&a.enable(22),A.alphaMap&&a.enable(23),A.alphaTest&&a.enable(24),A.vertexColors&&a.enable(25),A.vertexAlphas&&a.enable(26),A.vertexUvs&&a.enable(27),A.vertexTangents&&a.enable(28),A.uvsVertexOnly&&a.enable(29),A.fog&&a.enable(30),_.push(a.mask),a.disableAll(),A.useFog&&a.enable(0),A.flatShading&&a.enable(1),A.logarithmicDepthBuffer&&a.enable(2),A.skinning&&a.enable(3),A.morphTargets&&a.enable(4),A.morphNormals&&a.enable(5),A.morphColors&&a.enable(6),A.premultipliedAlpha&&a.enable(7),A.shadowMapEnabled&&a.enable(8),A.physicallyCorrectLights&&a.enable(9),A.doubleSided&&a.enable(10),A.flipSided&&a.enable(11),A.useDepthPacking&&a.enable(12),A.dithering&&a.enable(13),A.specularIntensityMap&&a.enable(14),A.specularColorMap&&a.enable(15),A.transmission&&a.enable(16),A.transmissionMap&&a.enable(17),A.thicknessMap&&a.enable(18),A.sheen&&a.enable(19),A.sheenColorMap&&a.enable(20),A.sheenRoughnessMap&&a.enable(21),A.decodeVideoTexture&&a.enable(22),A.opaque&&a.enable(23),_.push(a.mask)}function T(_){const A=g[_.type];let I;if(A){const D=Be[A];I=Il.clone(D.uniforms)}else I=_.uniforms;return I}function E(_,A){let I;for(let D=0,Q=c.length;D<Q;D++){const Y=c[D];if(Y.cacheKey===A){I=Y,++I.usedTimes;break}}return I===void 0&&(I=new Xx(i,A,_,s),c.push(I)),I}function b(_){if(--_.usedTimes===0){const A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),_.destroy()}}function C(_){l.remove(_)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:E,releaseProgram:b,releaseShaderCache:C,programs:c,dispose:L}}function Kx(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function Qx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Lh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Rh(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u,f,d,g,m,p){let x=i[t];return x===void 0?(x={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:m,group:p},i[t]=x):(x.id=u.id,x.object=u,x.geometry=f,x.material=d,x.groupOrder=g,x.renderOrder=u.renderOrder,x.z=m,x.group=p),t++,x}function a(u,f,d,g,m,p){const x=o(u,f,d,g,m,p);d.transmission>0?n.push(x):d.transparent===!0?r.push(x):e.push(x)}function l(u,f,d,g,m,p){const x=o(u,f,d,g,m,p);d.transmission>0?n.unshift(x):d.transparent===!0?r.unshift(x):e.unshift(x)}function c(u,f){e.length>1&&e.sort(u||Qx),n.length>1&&n.sort(f||Lh),r.length>1&&r.sort(f||Lh)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function t_(){let i=new WeakMap;function t(n,r){let s;return i.has(n)===!1?(s=new Rh,i.set(n,[s])):r>=i.get(n).length?(s=new Rh,i.get(n).push(s)):s=i.get(n)[r],s}function e(){i=new WeakMap}return{get:t,dispose:e}}function e_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new S,color:new pt};break;case"SpotLight":e={position:new S,direction:new S,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new S,color:new pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new S,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":e={color:new pt,position:new S,halfWidth:new S,halfHeight:new S};break}return i[t.id]=e,e}}}function n_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let i_=0;function r_(i,t){return(t.castShadow?1:0)-(i.castShadow?1:0)}function s_(i,t){const e=new e_,n=n_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)r.probe.push(new S);const s=new S,o=new yt,a=new yt;function l(h,u){let f=0,d=0,g=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let m=0,p=0,x=0,w=0,T=0,E=0,b=0,C=0;h.sort(r_);const L=u!==!0?Math.PI:1;for(let A=0,I=h.length;A<I;A++){const D=h[A],Q=D.color,Y=D.intensity,P=D.distance,H=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=Q.r*Y*L,d+=Q.g*Y*L,g+=Q.b*Y*L;else if(D.isLightProbe)for(let B=0;B<9;B++)r.probe[B].addScaledVector(D.sh.coefficients[B],Y);else if(D.isDirectionalLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity*L),D.castShadow){const V=D.shadow,$=n.get(D);$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,r.directionalShadow[m]=$,r.directionalShadowMap[m]=H,r.directionalShadowMatrix[m]=D.shadow.matrix,E++}r.directional[m]=B,m++}else if(D.isSpotLight){const B=e.get(D);if(B.position.setFromMatrixPosition(D.matrixWorld),B.color.copy(Q).multiplyScalar(Y*L),B.distance=P,B.coneCos=Math.cos(D.angle),B.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),B.decay=D.decay,D.castShadow){const V=D.shadow,$=n.get(D);$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,r.spotShadow[x]=$,r.spotShadowMap[x]=H,r.spotShadowMatrix[x]=D.shadow.matrix,C++}r.spot[x]=B,x++}else if(D.isRectAreaLight){const B=e.get(D);B.color.copy(Q).multiplyScalar(Y),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),r.rectArea[w]=B,w++}else if(D.isPointLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity*L),B.distance=D.distance,B.decay=D.decay,D.castShadow){const V=D.shadow,$=n.get(D);$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,$.shadowCameraNear=V.camera.near,$.shadowCameraFar=V.camera.far,r.pointShadow[p]=$,r.pointShadowMap[p]=H,r.pointShadowMatrix[p]=D.shadow.matrix,b++}r.point[p]=B,p++}else if(D.isHemisphereLight){const B=e.get(D);B.skyColor.copy(D.color).multiplyScalar(Y*L),B.groundColor.copy(D.groundColor).multiplyScalar(Y*L),r.hemi[T]=B,T++}}w>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=rt.LTC_FLOAT_1,r.rectAreaLTC2=rt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=rt.LTC_HALF_1,r.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=g;const _=r.hash;(_.directionalLength!==m||_.pointLength!==p||_.spotLength!==x||_.rectAreaLength!==w||_.hemiLength!==T||_.numDirectionalShadows!==E||_.numPointShadows!==b||_.numSpotShadows!==C)&&(r.directional.length=m,r.spot.length=x,r.rectArea.length=w,r.point.length=p,r.hemi.length=T,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=b,r.spotShadowMatrix.length=C,_.directionalLength=m,_.pointLength=p,_.spotLength=x,_.rectAreaLength=w,_.hemiLength=T,_.numDirectionalShadows=E,_.numPointShadows=b,_.numSpotShadows=C,r.version=i_++)}function c(h,u){let f=0,d=0,g=0,m=0,p=0;const x=u.matrixWorldInverse;for(let w=0,T=h.length;w<T;w++){const E=h[w];if(E.isDirectionalLight){const b=r.directional[f];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(x),f++}else if(E.isSpotLight){const b=r.spot[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(x),g++}else if(E.isRectAreaLight){const b=r.rectArea[m];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(x),a.identity(),o.copy(E.matrixWorld),o.premultiply(x),a.extractRotation(o),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),m++}else if(E.isPointLight){const b=r.point[d];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(x),d++}else if(E.isHemisphereLight){const b=r.hemi[p];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(x),p++}}}return{setup:l,setupView:c,state:r}}function Ph(i,t){const e=new s_(i,t),n=[],r=[];function s(){n.length=0,r.length=0}function o(u){n.push(u)}function a(u){r.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function o_(i,t){let e=new WeakMap;function n(s,o=0){let a;return e.has(s)===!1?(a=new Ph(i,t),e.set(s,[a])):o>=e.get(s).length?(a=new Ph(i,t),e.get(s).push(a)):a=e.get(s)[o],a}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ol extends ve{constructor(t){super(),this.type="MeshDepthMaterial",this.depthPacking=Ep,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}Ol.prototype.isMeshDepthMaterial=!0;class Ul extends ve{constructor(t){super(),this.type="MeshDistanceMaterial",this.referencePosition=new S,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}Ul.prototype.isMeshDistanceMaterial=!0;const a_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l_=`uniform sampler2D shadow_pass;
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
}`;function ku(i,t,e){let n=new Ro;const r=new Z,s=new Z,o=new te,a=new Ol({depthPacking:Tp}),l=new Ul,c={},h=e.maxTextureSize,u={0:Ve,1:Hr,2:sr},f=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:a_,fragmentShader:l_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ee;g.setAttribute("position",new ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new he(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mu,this.render=function(E,b,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const L=i.getRenderTarget(),_=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Xn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let D=0,Q=E.length;D<Q;D++){const Y=E[D],P=Y.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const H=P.getFrameExtents();if(r.multiply(H),s.copy(P.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/H.x),r.x=s.x*H.x,P.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/H.y),r.y=s.y*H.y,P.mapSize.y=s.y)),P.map===null&&!P.isPointLightShadow&&this.type===Dr&&(P.map=new We(r.x,r.y),P.map.texture.name=Y.name+".shadowMap",P.mapPass=new We(r.x,r.y),P.camera.updateProjectionMatrix()),P.map===null){const V={minFilter:be,magFilter:be,format:an};P.map=new We(r.x,r.y,V),P.map.texture.name=Y.name+".shadowMap",P.camera.updateProjectionMatrix()}i.setRenderTarget(P.map),i.clear();const B=P.getViewportCount();for(let V=0;V<B;V++){const $=P.getViewport(V);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),I.viewport(o),P.updateMatrices(Y,V),n=P.getFrustum(),T(b,C,P.camera,Y,this.type)}!P.isPointLightShadow&&this.type===Dr&&x(P,C),P.needsUpdate=!1}p.needsUpdate=!1,i.setRenderTarget(L,_,A)};function x(E,b){const C=t.update(m);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,C,f,m,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,C,d,m,null)}function w(E,b,C,L,_,A){let I=null;const D=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0?I=D:I=C.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0){const Q=I.uuid,Y=b.uuid;let P=c[Q];P===void 0&&(P={},c[Q]=P);let H=P[Y];H===void 0&&(H=I.clone(),P[Y]=H),I=H}return I.visible=b.visible,I.wireframe=b.wireframe,A===Dr?I.side=b.shadowSide!==null?b.shadowSide:b.side:I.side=b.shadowSide!==null?b.shadowSide:u[b.side],I.alphaMap=b.alphaMap,I.alphaTest=b.alphaTest,I.clipShadows=b.clipShadows,I.clippingPlanes=b.clippingPlanes,I.clipIntersection=b.clipIntersection,I.displacementMap=b.displacementMap,I.displacementScale=b.displacementScale,I.displacementBias=b.displacementBias,I.wireframeLinewidth=b.wireframeLinewidth,I.linewidth=b.linewidth,C.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(C.matrixWorld),I.nearDistance=L,I.farDistance=_),I}function T(E,b,C,L,_){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===Dr)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const D=t.update(E),Q=E.material;if(Array.isArray(Q)){const Y=D.groups;for(let P=0,H=Y.length;P<H;P++){const B=Y[P],V=Q[B.materialIndex];if(V&&V.visible){const $=w(E,V,L,C.near,C.far,_);i.renderBufferDirect(C,null,D,$,E,B)}}}else if(Q.visible){const Y=w(E,Q,L,C.near,C.far,_);i.renderBufferDirect(C,null,D,Y,E,null)}}const I=E.children;for(let D=0,Q=I.length;D<Q;D++)T(I[D],b,C,L,_)}}function c_(i,t,e){const n=e.isWebGL2;function r(){let R=!1;const at=new te;let ot=null;const St=new te(0,0,0,0);return{setMask:function(ut){ot!==ut&&!R&&(i.colorMask(ut,ut,ut,ut),ot=ut)},setLocked:function(ut){R=ut},setClear:function(ut,bt,it,Et,Xt){Xt===!0&&(ut*=Et,bt*=Et,it*=Et),at.set(ut,bt,it,Et),St.equals(at)===!1&&(i.clearColor(ut,bt,it,Et),St.copy(at))},reset:function(){R=!1,ot=null,St.set(-1,0,0,0)}}}function s(){let R=!1,at=null,ot=null,St=null;return{setTest:function(ut){ut?xt(2929):G(2929)},setMask:function(ut){at!==ut&&!R&&(i.depthMask(ut),at=ut)},setFunc:function(ut){if(ot!==ut){if(ut)switch(ut){case qd:i.depthFunc(512);break;case jd:i.depthFunc(519);break;case Xd:i.depthFunc(513);break;case Va:i.depthFunc(515);break;case $d:i.depthFunc(514);break;case Yd:i.depthFunc(518);break;case Jd:i.depthFunc(516);break;case Zd:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);ot=ut}},setLocked:function(ut){R=ut},setClear:function(ut){St!==ut&&(i.clearDepth(ut),St=ut)},reset:function(){R=!1,at=null,ot=null,St=null}}}function o(){let R=!1,at=null,ot=null,St=null,ut=null,bt=null,it=null,Et=null,Xt=null;return{setTest:function(Ut){R||(Ut?xt(2960):G(2960))},setMask:function(Ut){at!==Ut&&!R&&(i.stencilMask(Ut),at=Ut)},setFunc:function(Ut,cn,hn){(ot!==Ut||St!==cn||ut!==hn)&&(i.stencilFunc(Ut,cn,hn),ot=Ut,St=cn,ut=hn)},setOp:function(Ut,cn,hn){(bt!==Ut||it!==cn||Et!==hn)&&(i.stencilOp(Ut,cn,hn),bt=Ut,it=cn,Et=hn)},setLocked:function(Ut){R=Ut},setClear:function(Ut){Xt!==Ut&&(i.clearStencil(Ut),Xt=Ut)},reset:function(){R=!1,at=null,ot=null,St=null,ut=null,bt=null,it=null,Et=null,Xt=null}}}const a=new r,l=new s,c=new o;let h={},u={},f=new WeakMap,d=[],g=null,m=!1,p=null,x=null,w=null,T=null,E=null,b=null,C=null,L=!1,_=null,A=null,I=null,D=null,Q=null;const Y=i.getParameter(35661);let P=!1,H=0;const B=i.getParameter(7938);B.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(B)[1]),P=H>=1):B.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),P=H>=2);let V=null,$={};const O=i.getParameter(3088),W=i.getParameter(2978),tt=new te().fromArray(O),J=new te().fromArray(W);function et(R,at,ot){const St=new Uint8Array(4),ut=i.createTexture();i.bindTexture(R,ut),i.texParameteri(R,10241,9728),i.texParameteri(R,10240,9728);for(let bt=0;bt<ot;bt++)i.texImage2D(at+bt,0,6408,1,1,0,6408,5121,St);return ut}const mt={};mt[3553]=et(3553,3553,1),mt[34067]=et(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),xt(2929),l.setFunc(Va),nt(!1),ft(bc),xt(2884),X(Xn);function xt(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function G(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function Wt(R,at){return u[R]!==at?(i.bindFramebuffer(R,at),u[R]=at,n&&(R===36009&&(u[36160]=at),R===36160&&(u[36009]=at)),!0):!1}function Mt(R,at){let ot=d,St=!1;if(R)if(ot=f.get(at),ot===void 0&&(ot=[],f.set(at,ot)),R.isWebGLMultipleRenderTargets){const ut=R.texture;if(ot.length!==ut.length||ot[0]!==36064){for(let bt=0,it=ut.length;bt<it;bt++)ot[bt]=36064+bt;ot.length=ut.length,St=!0}}else ot[0]!==36064&&(ot[0]=36064,St=!0);else ot[0]!==1029&&(ot[0]=1029,St=!0);St&&(e.isWebGL2?i.drawBuffers(ot):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ot))}function Dt(R){return g!==R?(i.useProgram(R),g=R,!0):!1}const st={[Yi]:32774,[Nd]:32778,[Fd]:32779};if(n)st[Tc]=32775,st[Ac]=32776;else{const R=t.get("EXT_blend_minmax");R!==null&&(st[Tc]=R.MIN_EXT,st[Ac]=R.MAX_EXT)}const Ot={[Bd]:0,[zd]:1,[Od]:768,[Eu]:770,[Wd]:776,[Gd]:774,[Hd]:772,[Ud]:769,[Tu]:771,[Vd]:775,[kd]:773};function X(R,at,ot,St,ut,bt,it,Et){if(R===Xn){m===!0&&(G(3042),m=!1);return}if(m===!1&&(xt(3042),m=!0),R!==Id){if(R!==p||Et!==L){if((x!==Yi||E!==Yi)&&(i.blendEquation(32774),x=Yi,E=Yi),Et)switch(R){case nr:i.blendFuncSeparate(1,771,1,771);break;case Mc:i.blendFunc(1,1);break;case Sc:i.blendFuncSeparate(0,769,0,1);break;case Ec:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case nr:i.blendFuncSeparate(770,771,1,771);break;case Mc:i.blendFunc(770,1);break;case Sc:i.blendFuncSeparate(0,769,0,1);break;case Ec:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}w=null,T=null,b=null,C=null,p=R,L=Et}return}ut=ut||at,bt=bt||ot,it=it||St,(at!==x||ut!==E)&&(i.blendEquationSeparate(st[at],st[ut]),x=at,E=ut),(ot!==w||St!==T||bt!==b||it!==C)&&(i.blendFuncSeparate(Ot[ot],Ot[St],Ot[bt],Ot[it]),w=ot,T=St,b=bt,C=it),p=R,L=null}function j(R,at){R.side===sr?G(2884):xt(2884);let ot=R.side===Ve;at&&(ot=!ot),nt(ot),R.blending===nr&&R.transparent===!1?X(Xn):X(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const St=R.stencilWrite;c.setTest(St),St&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ct(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?xt(32926):G(32926)}function nt(R){_!==R&&(R?i.frontFace(2304):i.frontFace(2305),_=R)}function ft(R){R!==Rd?(xt(2884),R!==A&&(R===bc?i.cullFace(1029):R===Pd?i.cullFace(1028):i.cullFace(1032))):G(2884),A=R}function ct(R){R!==I&&(P&&i.lineWidth(R),I=R)}function Ct(R,at,ot){R?(xt(32823),(D!==at||Q!==ot)&&(i.polygonOffset(at,ot),D=at,Q=ot)):G(32823)}function wt(R){R?xt(3089):G(3089)}function _t(R){R===void 0&&(R=33984+Y-1),V!==R&&(i.activeTexture(R),V=R)}function ie(R,at){V===null&&_t();let ot=$[V];ot===void 0&&(ot={type:void 0,texture:void 0},$[V]=ot),(ot.type!==R||ot.texture!==at)&&(i.bindTexture(R,at||mt[R]),ot.type=R,ot.texture=at)}function ne(){const R=$[V];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function M(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function y(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function U(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function lt(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ht(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function k(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pt(R){tt.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),tt.copy(R))}function Nt(R){J.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),J.copy(R))}function dt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},V=null,$={},u={},f=new WeakMap,d=[],g=null,m=!1,p=null,x=null,w=null,T=null,E=null,b=null,C=null,L=!1,_=null,A=null,I=null,D=null,Q=null,tt.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:xt,disable:G,bindFramebuffer:Wt,drawBuffers:Mt,useProgram:Dt,setBlending:X,setMaterial:j,setFlipSided:nt,setCullFace:ft,setLineWidth:ct,setPolygonOffset:Ct,setScissorTest:wt,activeTexture:_t,bindTexture:ie,unbindTexture:ne,compressedTexImage2D:M,texImage2D:vt,texImage3D:k,texStorage2D:lt,texStorage3D:ht,texSubImage2D:y,texSubImage3D:U,compressedTexSubImage2D:K,scissor:Pt,viewport:Nt,reset:dt}}function h_(i,t,e,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(M,y){return x?new OffscreenCanvas(M,y):Wr("canvas")}function T(M,y,U,K){let lt=1;if((M.width>K||M.height>K)&&(lt=K/Math.max(M.width,M.height)),lt<1||y===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const ht=y?Ya:Math.floor,vt=ht(lt*M.width),k=ht(lt*M.height);m===void 0&&(m=w(vt,k));const Pt=U?w(vt,k):m;return Pt.width=vt,Pt.height=k,Pt.getContext("2d").drawImage(M,0,0,vt,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+vt+"x"+k+")."),Pt}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function E(M){return Kc(M.width)&&Kc(M.height)}function b(M){return a?!1:M.wrapS!==sn||M.wrapT!==sn||M.minFilter!==be&&M.minFilter!==Ne}function C(M,y){return M.generateMipmaps&&y&&M.minFilter!==be&&M.minFilter!==Ne}function L(M){i.generateMipmap(M)}function _(M,y,U,K,lt=!1){if(a===!1)return y;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ht=y;return y===6403&&(U===5126&&(ht=33326),U===5131&&(ht=33325),U===5121&&(ht=33321)),y===33319&&(U===5126&&(ht=33328),U===5131&&(ht=33327),U===5121&&(ht=33323)),y===6408&&(U===5126&&(ht=34836),U===5131&&(ht=34842),U===5121&&(ht=K===ae&&lt===!1?35907:32856),U===32819&&(ht=32854),U===32820&&(ht=32855)),(ht===33325||ht===33326||ht===33327||ht===33328||ht===34842||ht===34836)&&t.get("EXT_color_buffer_float"),ht}function A(M,y,U){return C(M,U)===!0||M.isFramebufferTexture&&M.minFilter!==be&&M.minFilter!==Ne?Math.log2(Math.max(y.width,y.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?y.mipmaps.length:1}function I(M){return M===be||M===Cc||M===Lc?9728:9729}function D(M){const y=M.target;y.removeEventListener("dispose",D),Y(y),y.isVideoTexture&&g.delete(y)}function Q(M){const y=M.target;y.removeEventListener("dispose",Q),H(y)}function Y(M){const y=n.get(M);if(y.__webglInit===void 0)return;const U=M.source,K=p.get(U);if(K){const lt=K[y.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&P(M),Object.keys(K).length===0&&p.delete(U)}n.remove(M)}function P(M){const y=n.get(M);i.deleteTexture(y.__webglTexture);const U=M.source,K=p.get(U);delete K[y.__cacheKey],o.memory.textures--}function H(M){const y=M.texture,U=n.get(M),K=n.get(y);if(K.__webglTexture!==void 0&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++)i.deleteFramebuffer(U.__webglFramebuffer[lt]),U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[lt]);else i.deleteFramebuffer(U.__webglFramebuffer),U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer&&i.deleteRenderbuffer(U.__webglColorRenderbuffer),U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer);if(M.isWebGLMultipleRenderTargets)for(let lt=0,ht=y.length;lt<ht;lt++){const vt=n.get(y[lt]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(y[lt])}n.remove(y),n.remove(M)}let B=0;function V(){B=0}function $(){const M=B;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),B+=1,M}function O(M){const y=[];return y.push(M.wrapS),y.push(M.wrapT),y.push(M.magFilter),y.push(M.minFilter),y.push(M.anisotropy),y.push(M.internalFormat),y.push(M.format),y.push(M.type),y.push(M.generateMipmaps),y.push(M.premultiplyAlpha),y.push(M.flipY),y.push(M.unpackAlignment),y.push(M.encoding),y.join()}function W(M,y){const U=n.get(M);if(M.isVideoTexture&&ie(M),M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){const K=M.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(U,M,y);return}}e.activeTexture(33984+y),e.bindTexture(3553,U.__webglTexture)}function tt(M,y){const U=n.get(M);if(M.version>0&&U.__version!==M.version){Mt(U,M,y);return}e.activeTexture(33984+y),e.bindTexture(35866,U.__webglTexture)}function J(M,y){const U=n.get(M);if(M.version>0&&U.__version!==M.version){Mt(U,M,y);return}e.activeTexture(33984+y),e.bindTexture(32879,U.__webglTexture)}function et(M,y){const U=n.get(M);if(M.version>0&&U.__version!==M.version){Dt(U,M,y);return}e.activeTexture(33984+y),e.bindTexture(34067,U.__webglTexture)}const mt={[Rn]:10497,[sn]:33071,[ja]:33648},xt={[be]:9728,[Cc]:9984,[Lc]:9986,[Ne]:9729,[sp]:9985,[Ao]:9987};function G(M,y,U){if(U?(i.texParameteri(M,10242,mt[y.wrapS]),i.texParameteri(M,10243,mt[y.wrapT]),(M===32879||M===35866)&&i.texParameteri(M,32882,mt[y.wrapR]),i.texParameteri(M,10240,xt[y.magFilter]),i.texParameteri(M,10241,xt[y.minFilter])):(i.texParameteri(M,10242,33071),i.texParameteri(M,10243,33071),(M===32879||M===35866)&&i.texParameteri(M,32882,33071),(y.wrapS!==sn||y.wrapT!==sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,10240,I(y.magFilter)),i.texParameteri(M,10241,I(y.minFilter)),y.minFilter!==be&&y.minFilter!==Ne&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const K=t.get("EXT_texture_filter_anisotropic");if(y.type===hi&&t.has("OES_texture_float_linear")===!1||a===!1&&y.type===Gr&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(M,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function Wt(M,y){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,y.addEventListener("dispose",D));const K=y.source;let lt=p.get(K);lt===void 0&&(lt={},p.set(K,lt));const ht=O(y);if(ht!==M.__cacheKey){lt[ht]===void 0&&(lt[ht]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),lt[ht].usedTimes++;const vt=lt[M.__cacheKey];vt!==void 0&&(lt[M.__cacheKey].usedTimes--,vt.usedTimes===0&&P(y)),M.__cacheKey=ht,M.__webglTexture=lt[ht].texture}return U}function Mt(M,y,U){let K=3553;y.isDataArrayTexture&&(K=35866),y.isData3DTexture&&(K=32879);const lt=Wt(M,y),ht=y.source;if(e.activeTexture(33984+U),e.bindTexture(K,M.__webglTexture),ht.version!==ht.__currentVersion||lt===!0){i.pixelStorei(37440,y.flipY),i.pixelStorei(37441,y.premultiplyAlpha),i.pixelStorei(3317,y.unpackAlignment),i.pixelStorei(37443,0);const vt=b(y)&&E(y.image)===!1;let k=T(y.image,vt,!1,h);k=ne(y,k);const Pt=E(k)||a,Nt=s.convert(y.format,y.encoding);let dt=s.convert(y.type),R=_(y.internalFormat,Nt,dt,y.encoding,y.isVideoTexture);G(K,y,Pt);let at;const ot=y.mipmaps,St=a&&y.isVideoTexture!==!0,ut=M.__version===void 0||lt===!0,bt=A(y,k,Pt);if(y.isDepthTexture)R=6402,a?y.type===hi?R=36012:y.type===eo?R=33190:y.type===ir?R=35056:R=33189:y.type===hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===di&&R===6402&&y.type!==kr&&y.type!==eo&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=kr,dt=s.convert(y.type)),y.format===lr&&R===6402&&(R=34041,y.type!==ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=ir,dt=s.convert(y.type))),ut&&(St?e.texStorage2D(3553,1,R,k.width,k.height):e.texImage2D(3553,0,R,k.width,k.height,0,Nt,dt,null));else if(y.isDataTexture)if(ot.length>0&&Pt){St&&ut&&e.texStorage2D(3553,bt,R,ot[0].width,ot[0].height);for(let it=0,Et=ot.length;it<Et;it++)at=ot[it],St?e.texSubImage2D(3553,it,0,0,at.width,at.height,Nt,dt,at.data):e.texImage2D(3553,it,R,at.width,at.height,0,Nt,dt,at.data);y.generateMipmaps=!1}else St?(ut&&e.texStorage2D(3553,bt,R,k.width,k.height),e.texSubImage2D(3553,0,0,0,k.width,k.height,Nt,dt,k.data)):e.texImage2D(3553,0,R,k.width,k.height,0,Nt,dt,k.data);else if(y.isCompressedTexture){St&&ut&&e.texStorage2D(3553,bt,R,ot[0].width,ot[0].height);for(let it=0,Et=ot.length;it<Et;it++)at=ot[it],y.format!==an?Nt!==null?St?e.compressedTexSubImage2D(3553,it,0,0,at.width,at.height,Nt,at.data):e.compressedTexImage2D(3553,it,R,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?e.texSubImage2D(3553,it,0,0,at.width,at.height,Nt,dt,at.data):e.texImage2D(3553,it,R,at.width,at.height,0,Nt,dt,at.data)}else if(y.isDataArrayTexture)St?(ut&&e.texStorage3D(35866,bt,R,k.width,k.height,k.depth),e.texSubImage3D(35866,0,0,0,0,k.width,k.height,k.depth,Nt,dt,k.data)):e.texImage3D(35866,0,R,k.width,k.height,k.depth,0,Nt,dt,k.data);else if(y.isData3DTexture)St?(ut&&e.texStorage3D(32879,bt,R,k.width,k.height,k.depth),e.texSubImage3D(32879,0,0,0,0,k.width,k.height,k.depth,Nt,dt,k.data)):e.texImage3D(32879,0,R,k.width,k.height,k.depth,0,Nt,dt,k.data);else if(y.isFramebufferTexture){if(ut)if(St)e.texStorage2D(3553,bt,R,k.width,k.height);else{let it=k.width,Et=k.height;for(let Xt=0;Xt<bt;Xt++)e.texImage2D(3553,Xt,R,it,Et,0,Nt,dt,null),it>>=1,Et>>=1}}else if(ot.length>0&&Pt){St&&ut&&e.texStorage2D(3553,bt,R,ot[0].width,ot[0].height);for(let it=0,Et=ot.length;it<Et;it++)at=ot[it],St?e.texSubImage2D(3553,it,0,0,Nt,dt,at):e.texImage2D(3553,it,R,Nt,dt,at);y.generateMipmaps=!1}else St?(ut&&e.texStorage2D(3553,bt,R,k.width,k.height),e.texSubImage2D(3553,0,0,0,Nt,dt,k)):e.texImage2D(3553,0,R,Nt,dt,k);C(y,Pt)&&L(K),ht.__currentVersion=ht.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function Dt(M,y,U){if(y.image.length!==6)return;const K=Wt(M,y),lt=y.source;if(e.activeTexture(33984+U),e.bindTexture(34067,M.__webglTexture),lt.version!==lt.__currentVersion||K===!0){i.pixelStorei(37440,y.flipY),i.pixelStorei(37441,y.premultiplyAlpha),i.pixelStorei(3317,y.unpackAlignment),i.pixelStorei(37443,0);const ht=y.isCompressedTexture||y.image[0].isCompressedTexture,vt=y.image[0]&&y.image[0].isDataTexture,k=[];for(let it=0;it<6;it++)!ht&&!vt?k[it]=T(y.image[it],!1,!0,c):k[it]=vt?y.image[it].image:y.image[it],k[it]=ne(y,k[it]);const Pt=k[0],Nt=E(Pt)||a,dt=s.convert(y.format,y.encoding),R=s.convert(y.type),at=_(y.internalFormat,dt,R,y.encoding),ot=a&&y.isVideoTexture!==!0,St=M.__version===void 0;let ut=A(y,Pt,Nt);G(34067,y,Nt);let bt;if(ht){ot&&St&&e.texStorage2D(34067,ut,at,Pt.width,Pt.height);for(let it=0;it<6;it++){bt=k[it].mipmaps;for(let Et=0;Et<bt.length;Et++){const Xt=bt[Et];y.format!==an?dt!==null?ot?e.compressedTexSubImage2D(34069+it,Et,0,0,Xt.width,Xt.height,dt,Xt.data):e.compressedTexImage2D(34069+it,Et,at,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?e.texSubImage2D(34069+it,Et,0,0,Xt.width,Xt.height,dt,R,Xt.data):e.texImage2D(34069+it,Et,at,Xt.width,Xt.height,0,dt,R,Xt.data)}}}else{bt=y.mipmaps,ot&&St&&(bt.length>0&&ut++,e.texStorage2D(34067,ut,at,k[0].width,k[0].height));for(let it=0;it<6;it++)if(vt){ot?e.texSubImage2D(34069+it,0,0,0,k[it].width,k[it].height,dt,R,k[it].data):e.texImage2D(34069+it,0,at,k[it].width,k[it].height,0,dt,R,k[it].data);for(let Et=0;Et<bt.length;Et++){const Ut=bt[Et].image[it].image;ot?e.texSubImage2D(34069+it,Et+1,0,0,Ut.width,Ut.height,dt,R,Ut.data):e.texImage2D(34069+it,Et+1,at,Ut.width,Ut.height,0,dt,R,Ut.data)}}else{ot?e.texSubImage2D(34069+it,0,0,0,dt,R,k[it]):e.texImage2D(34069+it,0,at,dt,R,k[it]);for(let Et=0;Et<bt.length;Et++){const Xt=bt[Et];ot?e.texSubImage2D(34069+it,Et+1,0,0,dt,R,Xt.image[it]):e.texImage2D(34069+it,Et+1,at,dt,R,Xt.image[it])}}}C(y,Nt)&&L(34067),lt.__currentVersion=lt.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function st(M,y,U,K,lt){const ht=s.convert(U.format,U.encoding),vt=s.convert(U.type),k=_(U.internalFormat,ht,vt,U.encoding);n.get(y).__hasExternalTextures||(lt===32879||lt===35866?e.texImage3D(lt,0,k,y.width,y.height,y.depth,0,ht,vt,null):e.texImage2D(lt,0,k,y.width,y.height,0,ht,vt,null)),e.bindFramebuffer(36160,M),_t(y)?f.framebufferTexture2DMultisampleEXT(36160,K,lt,n.get(U).__webglTexture,0,wt(y)):i.framebufferTexture2D(36160,K,lt,n.get(U).__webglTexture,0),e.bindFramebuffer(36160,null)}function Ot(M,y,U){if(i.bindRenderbuffer(36161,M),y.depthBuffer&&!y.stencilBuffer){let K=33189;if(U||_t(y)){const lt=y.depthTexture;lt&&lt.isDepthTexture&&(lt.type===hi?K=36012:lt.type===eo&&(K=33190));const ht=wt(y);_t(y)?f.renderbufferStorageMultisampleEXT(36161,ht,K,y.width,y.height):i.renderbufferStorageMultisample(36161,ht,K,y.width,y.height)}else i.renderbufferStorage(36161,K,y.width,y.height);i.framebufferRenderbuffer(36160,36096,36161,M)}else if(y.depthBuffer&&y.stencilBuffer){const K=wt(y);U&&_t(y)===!1?i.renderbufferStorageMultisample(36161,K,35056,y.width,y.height):_t(y)?f.renderbufferStorageMultisampleEXT(36161,K,35056,y.width,y.height):i.renderbufferStorage(36161,34041,y.width,y.height),i.framebufferRenderbuffer(36160,33306,36161,M)}else{const K=y.isWebGLMultipleRenderTargets===!0?y.texture[0]:y.texture,lt=s.convert(K.format,K.encoding),ht=s.convert(K.type),vt=_(K.internalFormat,lt,ht,K.encoding),k=wt(y);U&&_t(y)===!1?i.renderbufferStorageMultisample(36161,k,vt,y.width,y.height):_t(y)?f.renderbufferStorageMultisampleEXT(36161,k,vt,y.width,y.height):i.renderbufferStorage(36161,vt,y.width,y.height)}i.bindRenderbuffer(36161,null)}function X(M,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,M),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);const K=n.get(y.depthTexture).__webglTexture,lt=wt(y);if(y.depthTexture.format===di)_t(y)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,K,0,lt):i.framebufferTexture2D(36160,36096,3553,K,0);else if(y.depthTexture.format===lr)_t(y)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,K,0,lt):i.framebufferTexture2D(36160,33306,3553,K,0);else throw new Error("Unknown depthTexture format")}function j(M){const y=n.get(M),U=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!y.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");X(y.__webglFramebuffer,M)}else if(U){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)e.bindFramebuffer(36160,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]=i.createRenderbuffer(),Ot(y.__webglDepthbuffer[K],M,!1)}else e.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),Ot(y.__webglDepthbuffer,M,!1);e.bindFramebuffer(36160,null)}function nt(M,y,U){const K=n.get(M);y!==void 0&&st(K.__webglFramebuffer,M,M.texture,36064,3553),U!==void 0&&j(M)}function ft(M){const y=M.texture,U=n.get(M),K=n.get(y);M.addEventListener("dispose",Q),M.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=y.version,o.memory.textures++);const lt=M.isWebGLCubeRenderTarget===!0,ht=M.isWebGLMultipleRenderTargets===!0,vt=E(M)||a;if(lt){U.__webglFramebuffer=[];for(let k=0;k<6;k++)U.__webglFramebuffer[k]=i.createFramebuffer()}else if(U.__webglFramebuffer=i.createFramebuffer(),ht)if(r.drawBuffers){const k=M.texture;for(let Pt=0,Nt=k.length;Pt<Nt;Pt++){const dt=n.get(k[Pt]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(a&&M.samples>0&&_t(M)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=i.createRenderbuffer(),i.bindRenderbuffer(36161,U.__webglColorRenderbuffer);const k=s.convert(y.format,y.encoding),Pt=s.convert(y.type),Nt=_(y.internalFormat,k,Pt,y.encoding),dt=wt(M);i.renderbufferStorageMultisample(36161,dt,Nt,M.width,M.height),e.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064,36161,U.__webglColorRenderbuffer),i.bindRenderbuffer(36161,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Ot(U.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(36160,null)}if(lt){e.bindTexture(34067,K.__webglTexture),G(34067,y,vt);for(let k=0;k<6;k++)st(U.__webglFramebuffer[k],M,y,36064,34069+k);C(y,vt)&&L(34067),e.unbindTexture()}else if(ht){const k=M.texture;for(let Pt=0,Nt=k.length;Pt<Nt;Pt++){const dt=k[Pt],R=n.get(dt);e.bindTexture(3553,R.__webglTexture),G(3553,dt,vt),st(U.__webglFramebuffer,M,dt,36064+Pt,3553),C(dt,vt)&&L(3553)}e.unbindTexture()}else{let k=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?k=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(k,K.__webglTexture),G(k,y,vt),st(U.__webglFramebuffer,M,y,36064,k),C(y,vt)&&L(k),e.unbindTexture()}M.depthBuffer&&j(M)}function ct(M){const y=E(M)||a,U=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let K=0,lt=U.length;K<lt;K++){const ht=U[K];if(C(ht,y)){const vt=M.isWebGLCubeRenderTarget?34067:3553,k=n.get(ht).__webglTexture;e.bindTexture(vt,k),L(vt),e.unbindTexture()}}}function Ct(M){if(a&&M.samples>0&&_t(M)===!1){const y=M.width,U=M.height;let K=16384;const lt=[36064],ht=M.stencilBuffer?33306:36096;M.depthBuffer&&lt.push(ht);const vt=n.get(M),k=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;k===!1&&(M.depthBuffer&&(K|=256),M.stencilBuffer&&(K|=1024)),e.bindFramebuffer(36008,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,vt.__webglFramebuffer),k===!0&&(i.invalidateFramebuffer(36008,[ht]),i.invalidateFramebuffer(36009,[ht])),i.blitFramebuffer(0,0,y,U,0,0,y,U,K,9728),d&&i.invalidateFramebuffer(36008,lt),e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,vt.__webglMultisampledFramebuffer)}}function wt(M){return Math.min(u,M.samples)}function _t(M){const y=n.get(M);return a&&M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ie(M){const y=o.render.frame;g.get(M)!==y&&(g.set(M,y),M.update())}function ne(M,y){const U=M.encoding,K=M.format,lt=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Xa||U!==Jn&&(U===ae?a===!1?t.has("EXT_sRGB")===!0&&K===an?(M.format=Xa,M.minFilter=Ne,M.generateMipmaps=!1):y=wi.sRGBToLinear(y):(K!==an||lt!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",U)),y}this.allocateTextureUnit=$,this.resetTextureUnits=V,this.setTexture2D=W,this.setTexture2DArray=tt,this.setTexture3D=J,this.setTextureCube=et,this.rebindTextures=nt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=st,this.useMultisampledRTT=_t}function u_(i,t,e){const n=e.isWebGL2;function r(s,o=null){let a;if(s===gi)return 5121;if(s===cp)return 32819;if(s===hp)return 32820;if(s===op)return 5120;if(s===ap)return 5122;if(s===kr)return 5123;if(s===lp)return 5124;if(s===eo)return 5125;if(s===hi)return 5126;if(s===Gr)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===up)return 6406;if(s===an)return 6408;if(s===dp)return 6409;if(s===pp)return 6410;if(s===di)return 6402;if(s===lr)return 34041;if(s===mp)return 6403;if(s===fp)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Xa)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===gp)return 36244;if(s===xp)return 33319;if(s===_p)return 33320;if(s===yp)return 36249;if(s===jo||s===Xo||s===$o||s===Yo)if(o===ae)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===jo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Yo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===jo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$o)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Yo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Rc||s===Pc||s===Dc||s===Ic)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Rc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Pc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Dc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ic)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===vp)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Nc||s===Fc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Nc)return o===ae?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Fc)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Bc||s===zc||s===Oc||s===Uc||s===Hc||s===kc||s===Gc||s===Vc||s===Wc||s===qc||s===jc||s===Xc||s===$c||s===Yc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Bc)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===zc)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Oc)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Uc)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Hc)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===kc)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Gc)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Vc)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wc)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===qc)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jc)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Xc)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$c)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yc)return o===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Jc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Jc)return o===ae?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ir?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Gu extends Fe{constructor(t=[]){super(),this.cameras=t}}Gu.prototype.isArrayCamera=!0;class fi extends Zt{constructor(){super(),this.type="Group"}}fi.prototype.isGroup=!0;const f_={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred")if(a!==null&&(r=e.getPose(t.targetRaySpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(f_))),c&&t.hand){o=!0;for(const m of t.hand.values()){const p=e.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const w=new fi;w.matrixAutoUpdate=!1,w.visible=!1,c.joints[m.jointName]=w,c.add(w)}const x=c.joints[m.jointName];p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=p.radius),x.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class Vu extends ye{constructor(t,e,n,r,s,o,a,l,c,h){if(h=h!==void 0?h:di,h!==di&&h!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===di&&(n=kr),n===void 0&&h===lr&&(n=ir),super(null,r,s,o,a,l,h,n,c),this.image={width:t,height:e},this.magFilter=a!==void 0?a:be,this.minFilter=l!==void 0?l:be,this.flipY=!1,this.generateMipmaps=!1}}Vu.prototype.isDepthTexture=!0;class d_ extends vi{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,h=null,u=null,f=null,d=null;const g=e.getContextAttributes();let m=null,p=null;const x=[],w=new Map,T=new Fe;T.layers.enable(1),T.viewport=new te;const E=new Fe;E.layers.enable(2),E.viewport=new te;const b=[T,E],C=new Gu;C.layers.enable(1),C.layers.enable(2);let L=null,_=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let W=x[O];return W===void 0&&(W=new Sa,x[O]=W),W.getTargetRaySpace()},this.getControllerGrip=function(O){let W=x[O];return W===void 0&&(W=new Sa,x[O]=W),W.getGripSpace()},this.getHand=function(O){let W=x[O];return W===void 0&&(W=new Sa,x[O]=W),W.getHandSpace()};function A(O){const W=w.get(O.inputSource);W&&W.dispatchEvent({type:O.type,data:O.inputSource})}function I(){w.forEach(function(O,W){O.disconnect(W)}),w.clear(),L=null,_=null,t.setRenderTarget(m),f=null,u=null,h=null,r=null,p=null,$.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return d},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",I),r.addEventListener("inputsourceschange",D),g.xrCompatible!==!0&&await e.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const W={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,W),r.updateRenderState({baseLayer:f}),p=new We(f.framebufferWidth,f.framebufferHeight,{format:an,type:gi,encoding:t.outputEncoding})}else{let W=null,tt=null,J=null;g.depth&&(J=g.stencil?35056:33190,W=g.stencil?lr:di,tt=g.stencil?ir:kr);const et={colorFormat:t.outputEncoding===ae?35907:32856,depthFormat:J,scaleFactor:s};h=new XRWebGLBinding(r,e),u=h.createProjectionLayer(et),r.updateRenderState({layers:[u]}),p=new We(u.textureWidth,u.textureHeight,{format:an,type:gi,depthTexture:new Vu(u.textureWidth,u.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const mt=t.properties.get(p);mt.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),o=await r.requestReferenceSpace(a),$.setContext(r),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(O){const W=r.inputSources;for(let tt=0;tt<W.length;tt++){const J=W[tt].handedness==="right"?1:0;w.set(W[tt],x[J])}for(let tt=0;tt<O.removed.length;tt++){const J=O.removed[tt],et=w.get(J);et&&(et.dispatchEvent({type:"disconnected",data:J}),w.delete(J))}for(let tt=0;tt<O.added.length;tt++){const J=O.added[tt],et=w.get(J);et&&et.dispatchEvent({type:"connected",data:J})}}const Q=new S,Y=new S;function P(O,W,tt){Q.setFromMatrixPosition(W.matrixWorld),Y.setFromMatrixPosition(tt.matrixWorld);const J=Q.distanceTo(Y),et=W.projectionMatrix.elements,mt=tt.projectionMatrix.elements,xt=et[14]/(et[10]-1),G=et[14]/(et[10]+1),Wt=(et[9]+1)/et[5],Mt=(et[9]-1)/et[5],Dt=(et[8]-1)/et[0],st=(mt[8]+1)/mt[0],Ot=xt*Dt,X=xt*st,j=J/(-Dt+st),nt=j*-Dt;W.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(nt),O.translateZ(j),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const ft=xt+j,ct=G+j,Ct=Ot-nt,wt=X+(J-nt),_t=Wt*G/ct*ft,ie=Mt*G/ct*ft;O.projectionMatrix.makePerspective(Ct,wt,_t,ie,ft,ct)}function H(O,W){W===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(W.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;C.near=E.near=T.near=O.near,C.far=E.far=T.far=O.far,(L!==C.near||_!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,_=C.far);const W=O.parent,tt=C.cameras;H(C,W);for(let et=0;et<tt.length;et++)H(tt[et],W);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),O.position.copy(C.position),O.quaternion.copy(C.quaternion),O.scale.copy(C.scale),O.matrix.copy(C.matrix),O.matrixWorld.copy(C.matrixWorld);const J=O.children;for(let et=0,mt=J.length;et<mt;et++)J[et].updateMatrixWorld(!0);tt.length===2?P(C,T,E):C.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(O){u!==null&&(u.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)};let B=null;function V(O,W){if(c=W.getViewerPose(l||o),d=W,c!==null){const J=c.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let et=!1;J.length!==C.cameras.length&&(C.cameras.length=0,et=!0);for(let mt=0;mt<J.length;mt++){const xt=J[mt];let G=null;if(f!==null)G=f.getViewport(xt);else{const Mt=h.getViewSubImage(u,xt);G=Mt.viewport,mt===0&&(t.setRenderTargetTextures(p,Mt.colorTexture,u.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(p))}const Wt=b[mt];Wt.matrix.fromArray(xt.transform.matrix),Wt.projectionMatrix.fromArray(xt.projectionMatrix),Wt.viewport.set(G.x,G.y,G.width,G.height),mt===0&&C.matrix.copy(Wt.matrix),et===!0&&C.cameras.push(Wt)}}const tt=r.inputSources;for(let J=0;J<x.length;J++){const et=tt[J],mt=w.get(et);mt!==void 0&&mt.update(et,W,l||o)}B&&B(O,W),d=null}const $=new Nu;$.setAnimationLoop(V),this.setAnimationLoop=function(O){B=O},this.dispose=function(){}}}function p_(i,t){function e(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,x,w,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,T)):p.isMeshMatcapMaterial?(r(m,p),d(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?a(m,p,x,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Ve&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Ve&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const E=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*E}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let w;p.map?w=p.map:p.specularMap?w=p.specularMap:p.displacementMap?w=p.displacementMap:p.normalMap?w=p.normalMap:p.bumpMap?w=p.bumpMap:p.roughnessMap?w=p.roughnessMap:p.metalnessMap?w=p.metalnessMap:p.alphaMap?w=p.alphaMap:p.emissiveMap?w=p.emissiveMap:p.clearcoatMap?w=p.clearcoatMap:p.clearcoatNormalMap?w=p.clearcoatNormalMap:p.clearcoatRoughnessMap?w=p.clearcoatRoughnessMap:p.specularIntensityMap?w=p.specularIntensityMap:p.specularColorMap?w=p.specularColorMap:p.transmissionMap?w=p.transmissionMap:p.thicknessMap?w=p.thicknessMap:p.sheenColorMap?w=p.sheenColorMap:p.sheenRoughnessMap&&(w=p.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix));let T;p.aoMap?T=p.aoMap:p.lightMap&&(T=p.lightMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),m.uv2Transform.value.copy(T.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,x,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=w*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T;p.map?T=p.map:p.alphaMap&&(T=p.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),m.uvTransform.value.copy(T.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Ve&&m.clearcoatNormalScale.value.negate())),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function m_(){const i=Wr("canvas");return i.style.display="block",i}function Kt(i={}){const t=i.canvas!==void 0?i.canvas:m_(),e=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=i.alpha!==void 0?i.alpha:!1;let u=null,f=null;const d=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Jn,this.physicallyCorrectLights=!1,this.toneMapping=In,this.toneMappingExposure=1;const m=this;let p=!1,x=0,w=0,T=null,E=-1,b=null;const C=new te,L=new te;let _=null,A=t.width,I=t.height,D=1,Q=null,Y=null;const P=new te(0,0,A,I),H=new te(0,0,A,I);let B=!1;const V=new Ro;let $=!1,O=!1,W=null;const tt=new yt,J=new Z,et=new S,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xt(){return T===null?D:1}let G=e;function Wt(v,N){for(let z=0;z<v.length;z++){const F=v[z],q=t.getContext(F,N);if(q!==null)return q}return null}try{const v={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cl}`),t.addEventListener("webglcontextlost",R,!1),t.addEventListener("webglcontextrestored",at,!1),G===null){const N=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&N.shift(),G=Wt(N,v),G===null)throw Wt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Mt,Dt,st,Ot,X,j,nt,ft,ct,Ct,wt,_t,ie,ne,M,y,U,K,lt,ht,vt,k,Pt;function Nt(){Mt=new D0(G),Dt=new T0(G,Mt,i),Mt.init(Dt),k=new u_(G,Mt,Dt),st=new c_(G,Mt,Dt),Ot=new F0(G),X=new Kx,j=new h_(G,Mt,st,X,Dt,k,Ot),nt=new C0(m),ft=new P0(m),ct=new Yp(G,Dt),Pt=new S0(G,Mt,ct,Dt),Ct=new I0(G,ct,Ot,Pt),wt=new U0(G,Ct,ct,Ot),lt=new O0(G,Dt,j),y=new A0(X),_t=new Zx(m,nt,ft,Mt,Dt,Pt,y),ie=new p_(m,X),ne=new t_,M=new o_(Mt,Dt),K=new M0(m,nt,st,wt,h,o),U=new ku(m,wt,Dt),ht=new E0(G,Mt,Ot,Dt),vt=new N0(G,Mt,Ot,Dt),Ot.programs=_t.programs,m.capabilities=Dt,m.extensions=Mt,m.properties=X,m.renderLists=ne,m.shadowMap=U,m.state=st,m.info=Ot}Nt();const dt=new d_(m,G);this.xr=dt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const v=Mt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Mt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(v){v!==void 0&&(D=v,this.setSize(A,I,!1))},this.getSize=function(v){return v.set(A,I)},this.setSize=function(v,N,z){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=v,I=N,t.width=Math.floor(v*D),t.height=Math.floor(N*D),z!==!1&&(t.style.width=v+"px",t.style.height=N+"px"),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(A*D,I*D).floor()},this.setDrawingBufferSize=function(v,N,z){A=v,I=N,D=z,t.width=Math.floor(v*z),t.height=Math.floor(N*z),this.setViewport(0,0,v,N)},this.getCurrentViewport=function(v){return v.copy(C)},this.getViewport=function(v){return v.copy(P)},this.setViewport=function(v,N,z,F){v.isVector4?P.set(v.x,v.y,v.z,v.w):P.set(v,N,z,F),st.viewport(C.copy(P).multiplyScalar(D).floor())},this.getScissor=function(v){return v.copy(H)},this.setScissor=function(v,N,z,F){v.isVector4?H.set(v.x,v.y,v.z,v.w):H.set(v,N,z,F),st.scissor(L.copy(H).multiplyScalar(D).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(v){st.setScissorTest(B=v)},this.setOpaqueSort=function(v){Q=v},this.setTransparentSort=function(v){Y=v},this.getClearColor=function(v){return v.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(v=!0,N=!0,z=!0){let F=0;v&&(F|=16384),N&&(F|=256),z&&(F|=1024),G.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",R,!1),t.removeEventListener("webglcontextrestored",at,!1),ne.dispose(),M.dispose(),X.dispose(),nt.dispose(),ft.dispose(),wt.dispose(),Pt.dispose(),_t.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Et),dt.removeEventListener("sessionend",Xt),W&&(W.dispose(),W=null),Ut.stop()};function R(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function at(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const v=Ot.autoReset,N=U.enabled,z=U.autoUpdate,F=U.needsUpdate,q=U.type;Nt(),Ot.autoReset=v,U.enabled=N,U.autoUpdate=z,U.needsUpdate=F,U.type=q}function ot(v){const N=v.target;N.removeEventListener("dispose",ot),St(N)}function St(v){ut(v),X.remove(v)}function ut(v){const N=X.get(v).programs;N!==void 0&&(N.forEach(function(z){_t.releaseProgram(z)}),v.isShaderMaterial&&_t.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,z,F,q,Tt){N===null&&(N=mt);const Lt=q.isMesh&&q.matrixWorld.determinant()<0,Ft=od(v,N,z,F,q);st.setMaterial(F,Lt);let It=z.index;const $t=z.attributes.position;if(It===null){if($t===void 0||$t.count===0)return}else if(It.count===0)return;let kt=1;F.wireframe===!0&&(It=Ct.getWireframeAttribute(z),kt=2),Pt.setup(q,F,Ft,z,It);let Gt,ue=ht;It!==null&&(Gt=ct.get(It),ue=vt,ue.setIndex(Gt));const ni=It!==null?It.count:$t.count,Ei=z.drawRange.start*kt,Ti=z.drawRange.count*kt,un=Tt!==null?Tt.start*kt:0,qt=Tt!==null?Tt.count*kt:1/0,Ai=Math.max(Ei,un),de=Math.min(ni,Ei+Ti,un+qt)-1,fn=Math.max(0,de-Ai+1);if(fn!==0){if(q.isMesh)F.wireframe===!0?(st.setLineWidth(F.wireframeLinewidth*xt()),ue.setMode(1)):ue.setMode(4);else if(q.isLine){let Bn=F.linewidth;Bn===void 0&&(Bn=1),st.setLineWidth(Bn*xt()),q.isLineSegments?ue.setMode(1):q.isLineLoop?ue.setMode(2):ue.setMode(3)}else q.isPoints?ue.setMode(0):q.isSprite&&ue.setMode(4);if(q.isInstancedMesh)ue.renderInstances(Ai,fn,q.count);else if(z.isInstancedBufferGeometry){const Bn=Math.min(z.instanceCount,z._maxInstanceCount);ue.renderInstances(Ai,fn,Bn)}else ue.render(Ai,fn)}},this.compile=function(v,N){f=M.get(v),f.init(),g.push(f),v.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights(m.physicallyCorrectLights),v.traverse(function(z){const F=z.material;if(F)if(Array.isArray(F))for(let q=0;q<F.length;q++){const Tt=F[q];Go(Tt,v,z)}else Go(F,v,z)}),g.pop(),f=null};let bt=null;function it(v){bt&&bt(v)}function Et(){Ut.stop()}function Xt(){Ut.start()}const Ut=new Nu;Ut.setAnimationLoop(it),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(v){bt=v,dt.setAnimationLoop(v),v===null?Ut.stop():Ut.start()},dt.addEventListener("sessionstart",Et),dt.addEventListener("sessionend",Xt),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;v.autoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(N),N=dt.getCamera()),v.isScene===!0&&v.onBeforeRender(m,v,N,T),f=M.get(v,g.length),f.init(),g.push(f),tt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),V.setFromProjectionMatrix(tt),O=this.localClippingEnabled,$=y.init(this.clippingPlanes,O,N),u=ne.get(v,d.length),u.init(),d.push(u),cn(v,N,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(Q,Y),$===!0&&y.beginShadows();const z=f.state.shadowsArray;if(U.render(z,v,N),$===!0&&y.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(u,v),f.setupLights(m.physicallyCorrectLights),N.isArrayCamera){const F=N.cameras;for(let q=0,Tt=F.length;q<Tt;q++){const Lt=F[q];hn(u,v,Lt,Lt.viewport)}}else hn(u,v,N);T!==null&&(j.updateMultisampleRenderTarget(T),j.updateRenderTargetMipmap(T)),v.isScene===!0&&v.onAfterRender(m,v,N),Pt.resetDefaultState(),E=-1,b=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?u=d[d.length-1]:u=null};function cn(v,N,z,F){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||V.intersectsSprite(v)){F&&et.setFromMatrixPosition(v.matrixWorld).applyMatrix4(tt);const Lt=wt.update(v),Ft=v.material;Ft.visible&&u.push(v,Lt,Ft,z,et.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(v.isSkinnedMesh&&v.skeleton.frame!==Ot.render.frame&&(v.skeleton.update(),v.skeleton.frame=Ot.render.frame),!v.frustumCulled||V.intersectsObject(v))){F&&et.setFromMatrixPosition(v.matrixWorld).applyMatrix4(tt);const Lt=wt.update(v),Ft=v.material;if(Array.isArray(Ft)){const It=Lt.groups;for(let $t=0,kt=It.length;$t<kt;$t++){const Gt=It[$t],ue=Ft[Gt.materialIndex];ue&&ue.visible&&u.push(v,Lt,ue,z,et.z,Gt)}}else Ft.visible&&u.push(v,Lt,Ft,z,et.z,null)}}const Tt=v.children;for(let Lt=0,Ft=Tt.length;Lt<Ft;Lt++)cn(Tt[Lt],N,z,F)}function hn(v,N,z,F){const q=v.opaque,Tt=v.transmissive,Lt=v.transparent;f.setupLightsView(z),Tt.length>0&&rd(q,N,z),F&&st.viewport(C.copy(F)),q.length>0&&fs(q,N,z),Tt.length>0&&fs(Tt,N,z),Lt.length>0&&fs(Lt,N,z),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function rd(v,N,z){const F=Dt.isWebGL2;W===null&&(W=new We(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")?Gr:gi,minFilter:Ao,samples:F&&s===!0?4:0})),m.getDrawingBufferSize(J),F?W.setSize(J.x,J.y):W.setSize(Ya(J.x),Ya(J.y));const q=m.getRenderTarget();m.setRenderTarget(W),m.clear();const Tt=m.toneMapping;m.toneMapping=In,fs(v,N,z),m.toneMapping=Tt,j.updateMultisampleRenderTarget(W),j.updateRenderTargetMipmap(W),m.setRenderTarget(q)}function fs(v,N,z){const F=N.isScene===!0?N.overrideMaterial:null;for(let q=0,Tt=v.length;q<Tt;q++){const Lt=v[q],Ft=Lt.object,It=Lt.geometry,$t=F===null?Lt.material:F,kt=Lt.group;Ft.layers.test(z.layers)&&sd(Ft,N,z,It,$t,kt)}}function sd(v,N,z,F,q,Tt){v.onBeforeRender(m,N,z,F,q,Tt),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),q.onBeforeRender(m,N,z,F,v,Tt),q.transparent===!0&&q.side===sr?(q.side=Ve,q.needsUpdate=!0,m.renderBufferDirect(z,N,F,q,v,Tt),q.side=Hr,q.needsUpdate=!0,m.renderBufferDirect(z,N,F,q,v,Tt),q.side=sr):m.renderBufferDirect(z,N,F,q,v,Tt),v.onAfterRender(m,N,z,F,q,Tt)}function Go(v,N,z){N.isScene!==!0&&(N=mt);const F=X.get(v),q=f.state.lights,Tt=f.state.shadowsArray,Lt=q.state.version,Ft=_t.getParameters(v,q.state,Tt,N,z),It=_t.getProgramCacheKey(Ft);let $t=F.programs;F.environment=v.isMeshStandardMaterial?N.environment:null,F.fog=N.fog,F.envMap=(v.isMeshStandardMaterial?ft:nt).get(v.envMap||F.environment),$t===void 0&&(v.addEventListener("dispose",ot),$t=new Map,F.programs=$t);let kt=$t.get(It);if(kt!==void 0){if(F.currentProgram===kt&&F.lightsStateVersion===Lt)return _c(v,Ft),kt}else Ft.uniforms=_t.getUniforms(v),v.onBuild(z,Ft,m),v.onBeforeCompile(Ft,m),kt=_t.acquireProgram(Ft,It),$t.set(It,kt),F.uniforms=Ft.uniforms;const Gt=F.uniforms;(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Gt.clippingPlanes=y.uniform),_c(v,Ft),F.needsLights=ld(v),F.lightsStateVersion=Lt,F.needsLights&&(Gt.ambientLightColor.value=q.state.ambient,Gt.lightProbe.value=q.state.probe,Gt.directionalLights.value=q.state.directional,Gt.directionalLightShadows.value=q.state.directionalShadow,Gt.spotLights.value=q.state.spot,Gt.spotLightShadows.value=q.state.spotShadow,Gt.rectAreaLights.value=q.state.rectArea,Gt.ltc_1.value=q.state.rectAreaLTC1,Gt.ltc_2.value=q.state.rectAreaLTC2,Gt.pointLights.value=q.state.point,Gt.pointLightShadows.value=q.state.pointShadow,Gt.hemisphereLights.value=q.state.hemi,Gt.directionalShadowMap.value=q.state.directionalShadowMap,Gt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Gt.spotShadowMap.value=q.state.spotShadowMap,Gt.spotShadowMatrix.value=q.state.spotShadowMatrix,Gt.pointShadowMap.value=q.state.pointShadowMap,Gt.pointShadowMatrix.value=q.state.pointShadowMatrix);const ue=kt.getUniforms(),ni=$n.seqWithValue(ue.seq,Gt);return F.currentProgram=kt,F.uniformsList=ni,kt}function _c(v,N){const z=X.get(v);z.outputEncoding=N.outputEncoding,z.instancing=N.instancing,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function od(v,N,z,F,q){N.isScene!==!0&&(N=mt),j.resetTextureUnits();const Tt=N.fog,Lt=F.isMeshStandardMaterial?N.environment:null,Ft=T===null?m.outputEncoding:T.isXRRenderTarget===!0?T.texture.encoding:Jn,It=(F.isMeshStandardMaterial?ft:nt).get(F.envMap||Lt),$t=F.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,kt=!!F.normalMap&&!!z.attributes.tangent,Gt=!!z.morphAttributes.position,ue=!!z.morphAttributes.normal,ni=!!z.morphAttributes.color,Ei=F.toneMapped?m.toneMapping:In,Ti=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,un=Ti!==void 0?Ti.length:0,qt=X.get(F),Ai=f.state.lights;if($===!0&&(O===!0||v!==b)){const dn=v===b&&F.id===E;y.setState(F,v,dn)}let de=!1;F.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Ai.state.version||qt.outputEncoding!==Ft||q.isInstancedMesh&&qt.instancing===!1||!q.isInstancedMesh&&qt.instancing===!0||q.isSkinnedMesh&&qt.skinning===!1||!q.isSkinnedMesh&&qt.skinning===!0||qt.envMap!==It||F.fog===!0&&qt.fog!==Tt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==y.numPlanes||qt.numIntersection!==y.numIntersection)||qt.vertexAlphas!==$t||qt.vertexTangents!==kt||qt.morphTargets!==Gt||qt.morphNormals!==ue||qt.morphColors!==ni||qt.toneMapping!==Ei||Dt.isWebGL2===!0&&qt.morphTargetsCount!==un)&&(de=!0):(de=!0,qt.__version=F.version);let fn=qt.currentProgram;de===!0&&(fn=Go(F,N,q));let Bn=!1,wr=!1,Vo=!1;const Le=fn.getUniforms(),br=qt.uniforms;if(st.useProgram(fn.program)&&(Bn=!0,wr=!0,Vo=!0),F.id!==E&&(E=F.id,wr=!0),Bn||b!==v){if(Le.setValue(G,"projectionMatrix",v.projectionMatrix),Dt.logarithmicDepthBuffer&&Le.setValue(G,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),b!==v&&(b=v,wr=!0,Vo=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const dn=Le.map.cameraPosition;dn!==void 0&&dn.setValue(G,et.setFromMatrixPosition(v.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Le.setValue(G,"isOrthographic",v.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||q.isSkinnedMesh)&&Le.setValue(G,"viewMatrix",v.matrixWorldInverse)}if(q.isSkinnedMesh){Le.setOptional(G,q,"bindMatrix"),Le.setOptional(G,q,"bindMatrixInverse");const dn=q.skeleton;dn&&(Dt.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),Le.setValue(G,"boneTexture",dn.boneTexture,j),Le.setValue(G,"boneTextureSize",dn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Wo=z.morphAttributes;return(Wo.position!==void 0||Wo.normal!==void 0||Wo.color!==void 0&&Dt.isWebGL2===!0)&&lt.update(q,z,F,fn),(wr||qt.receiveShadow!==q.receiveShadow)&&(qt.receiveShadow=q.receiveShadow,Le.setValue(G,"receiveShadow",q.receiveShadow)),wr&&(Le.setValue(G,"toneMappingExposure",m.toneMappingExposure),qt.needsLights&&ad(br,Vo),Tt&&F.fog===!0&&ie.refreshFogUniforms(br,Tt),ie.refreshMaterialUniforms(br,F,D,I,W),$n.upload(G,qt.uniformsList,br,j)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&($n.upload(G,qt.uniformsList,br,j),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Le.setValue(G,"center",q.center),Le.setValue(G,"modelViewMatrix",q.modelViewMatrix),Le.setValue(G,"normalMatrix",q.normalMatrix),Le.setValue(G,"modelMatrix",q.matrixWorld),fn}function ad(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function ld(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(v,N,z){X.get(v.texture).__webglTexture=N,X.get(v.depthTexture).__webglTexture=z;const F=X.get(v);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=z===void 0,F.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(v,N){const z=X.get(v);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(v,N=0,z=0){T=v,x=N,w=z;let F=!0;if(v){const It=X.get(v);It.__useDefaultFramebuffer!==void 0?(st.bindFramebuffer(36160,null),F=!1):It.__webglFramebuffer===void 0?j.setupRenderTarget(v):It.__hasExternalTextures&&j.rebindTextures(v,X.get(v.texture).__webglTexture,X.get(v.depthTexture).__webglTexture)}let q=null,Tt=!1,Lt=!1;if(v){const It=v.texture;(It.isData3DTexture||It.isDataArrayTexture)&&(Lt=!0);const $t=X.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(q=$t[N],Tt=!0):Dt.isWebGL2&&v.samples>0&&j.useMultisampledRTT(v)===!1?q=X.get(v).__webglMultisampledFramebuffer:q=$t,C.copy(v.viewport),L.copy(v.scissor),_=v.scissorTest}else C.copy(P).multiplyScalar(D).floor(),L.copy(H).multiplyScalar(D).floor(),_=B;if(st.bindFramebuffer(36160,q)&&Dt.drawBuffers&&F&&st.drawBuffers(v,q),st.viewport(C),st.scissor(L),st.setScissorTest(_),Tt){const It=X.get(v.texture);G.framebufferTexture2D(36160,36064,34069+N,It.__webglTexture,z)}else if(Lt){const It=X.get(v.texture),$t=N||0;G.framebufferTextureLayer(36160,36064,It.__webglTexture,z||0,$t)}E=-1},this.readRenderTargetPixels=function(v,N,z,F,q,Tt,Lt){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=X.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ft=Ft[Lt]),Ft){st.bindFramebuffer(36160,Ft);try{const It=v.texture,$t=It.format,kt=It.type;if($t!==an&&k.convert($t)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Gt=kt===Gr&&(Mt.has("EXT_color_buffer_half_float")||Dt.isWebGL2&&Mt.has("EXT_color_buffer_float"));if(kt!==gi&&k.convert(kt)!==G.getParameter(35738)&&!(kt===hi&&(Dt.isWebGL2||Mt.has("OES_texture_float")||Mt.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-F&&z>=0&&z<=v.height-q&&G.readPixels(N,z,F,q,k.convert($t),k.convert(kt),Tt)}finally{const It=T!==null?X.get(T).__webglFramebuffer:null;st.bindFramebuffer(36160,It)}}},this.copyFramebufferToTexture=function(v,N,z=0){if(N.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const F=Math.pow(2,-z),q=Math.floor(N.image.width*F),Tt=Math.floor(N.image.height*F);j.setTexture2D(N,0),G.copyTexSubImage2D(3553,z,0,0,v.x,v.y,q,Tt),st.unbindTexture()},this.copyTextureToTexture=function(v,N,z,F=0){const q=N.image.width,Tt=N.image.height,Lt=k.convert(z.format),Ft=k.convert(z.type);j.setTexture2D(z,0),G.pixelStorei(37440,z.flipY),G.pixelStorei(37441,z.premultiplyAlpha),G.pixelStorei(3317,z.unpackAlignment),N.isDataTexture?G.texSubImage2D(3553,F,v.x,v.y,q,Tt,Lt,Ft,N.image.data):N.isCompressedTexture?G.compressedTexSubImage2D(3553,F,v.x,v.y,N.mipmaps[0].width,N.mipmaps[0].height,Lt,N.mipmaps[0].data):G.texSubImage2D(3553,F,v.x,v.y,Lt,Ft,N.image),F===0&&z.generateMipmaps&&G.generateMipmap(3553),st.unbindTexture()},this.copyTextureToTexture3D=function(v,N,z,F,q=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Tt=v.max.x-v.min.x+1,Lt=v.max.y-v.min.y+1,Ft=v.max.z-v.min.z+1,It=k.convert(F.format),$t=k.convert(F.type);let kt;if(F.isData3DTexture)j.setTexture3D(F,0),kt=32879;else if(F.isDataArrayTexture)j.setTexture2DArray(F,0),kt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,F.flipY),G.pixelStorei(37441,F.premultiplyAlpha),G.pixelStorei(3317,F.unpackAlignment);const Gt=G.getParameter(3314),ue=G.getParameter(32878),ni=G.getParameter(3316),Ei=G.getParameter(3315),Ti=G.getParameter(32877),un=z.isCompressedTexture?z.mipmaps[0]:z.image;G.pixelStorei(3314,un.width),G.pixelStorei(32878,un.height),G.pixelStorei(3316,v.min.x),G.pixelStorei(3315,v.min.y),G.pixelStorei(32877,v.min.z),z.isDataTexture||z.isData3DTexture?G.texSubImage3D(kt,q,N.x,N.y,N.z,Tt,Lt,Ft,It,$t,un.data):z.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(kt,q,N.x,N.y,N.z,Tt,Lt,Ft,It,un.data)):G.texSubImage3D(kt,q,N.x,N.y,N.z,Tt,Lt,Ft,It,$t,un),G.pixelStorei(3314,Gt),G.pixelStorei(32878,ue),G.pixelStorei(3316,ni),G.pixelStorei(3315,Ei),G.pixelStorei(32877,Ti),q===0&&F.generateMipmaps&&G.generateMipmap(kt),st.unbindTexture()},this.initTexture=function(v){j.setTexture2D(v,0),st.unbindTexture()},this.resetState=function(){x=0,w=0,T=null,st.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Kt.prototype.isWebGLRenderer=!0;class g_ extends Kt{}g_.prototype.isWebGL1Renderer=!0;class Hl extends Zt{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}}Hl.prototype.isScene=!0;class es{constructor(t,e){this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Vr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}es.prototype.isInterleavedBuffer=!0;const Re=new S;class Dn{constructor(t,e,n,r=!1){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}setX(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){return this.data.array[t*this.data.stride+this.offset]}getY(t){return this.data.array[t*this.data.stride+this.offset+1]}getZ(t){return this.data.array[t*this.data.stride+this.offset+2]}getW(t){return this.data.array[t*this.data.stride+this.offset+3]}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Dn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Dn.prototype.isInterleavedBufferAttribute=!0;class Io extends ve{constructor(t){super(),this.type="SpriteMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}Io.prototype.isSpriteMaterial=!0;let Vi;const Tr=new S,Wi=new S,qi=new S,ji=new Z,Ar=new Z,Wu=new yt,Fs=new S,Cr=new S,Bs=new S,Dh=new Z,Ea=new Z,Ih=new Z;class qu extends Zt{constructor(t){if(super(),this.type="Sprite",Vi===void 0){Vi=new ee;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new es(e,5);Vi.setIndex([0,1,2,0,2,3]),Vi.setAttribute("position",new Dn(n,3,0,!1)),Vi.setAttribute("uv",new Dn(n,2,3,!1))}this.geometry=Vi,this.material=t!==void 0?t:new Io,this.center=new Z(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wi.setFromMatrixScale(this.matrixWorld),Wu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wi.multiplyScalar(-qi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;zs(Fs.set(-.5,-.5,0),qi,o,Wi,r,s),zs(Cr.set(.5,-.5,0),qi,o,Wi,r,s),zs(Bs.set(.5,.5,0),qi,o,Wi,r,s),Dh.set(0,0),Ea.set(1,0),Ih.set(1,1);let a=t.ray.intersectTriangle(Fs,Cr,Bs,!1,Tr);if(a===null&&(zs(Cr.set(-.5,.5,0),qi,o,Wi,r,s),Ea.set(0,1),a=t.ray.intersectTriangle(Fs,Bs,Cr,!1,Tr),a===null))return;const l=t.ray.origin.distanceTo(Tr);l<t.near||l>t.far||e.push({distance:l,point:Tr.clone(),uv:me.getUV(Tr,Fs,Cr,Bs,Dh,Ea,Ih,new Z),face:null,object:this})}copy(t){return super.copy(t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}qu.prototype.isSprite=!0;function zs(i,t,e,n,r,s){ji.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Ar.x=s*ji.x-r*ji.y,Ar.y=r*ji.x+s*ji.y):Ar.copy(ji),i.copy(t),i.x+=Ar.x,i.y+=Ar.y,i.applyMatrix4(Wu)}const Nh=new S,Fh=new te,Bh=new te,x_=new S,zh=new yt;class ju extends he{constructor(t,e){super(t,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new yt,this.bindMatrixInverse=new yt}copy(t){return super.copy(t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new te,e=this.geometry.attributes.skinWeight;for(let n=0,r=e.count;n<r;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(t,e){const n=this.skeleton,r=this.geometry;Fh.fromBufferAttribute(r.attributes.skinIndex,t),Bh.fromBufferAttribute(r.attributes.skinWeight,t),Nh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=Bh.getComponent(s);if(o!==0){const a=Fh.getComponent(s);zh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(x_.copy(Nh).applyMatrix4(zh),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}ju.prototype.isSkinnedMesh=!0;class __ extends Zt{constructor(){super(),this.type="Bone"}}__.prototype.isBone=!0;class y_ extends ye{constructor(t=null,e=1,n=1,r,s,o,a,l,c=be,h=be,u,f){super(null,o,a,l,c,h,r,s,u,f),this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}y_.prototype.isDataTexture=!0;class Za extends ge{constructor(t,e,n,r=1){typeof n=="number"&&(r=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(t,e,n),this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}Za.prototype.isInstancedBufferAttribute=!0;const Oh=new yt,Uh=new yt,Os=[],Lr=new he;class v_ extends he{constructor(t,e,n){super(t,e),this.instanceMatrix=new Za(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(t){return super.copy(t),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,r=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,Oh),Uh.multiplyMatrices(n,Oh),Lr.matrixWorld=Uh,Lr.raycast(t,Os);for(let o=0,a=Os.length;o<a;o++){const l=Os[o];l.instanceId=s,l.object=this,e.push(l)}Os.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Za(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}v_.prototype.isInstancedMesh=!0;class pr extends ve{constructor(t){super(),this.type="LineBasicMaterial",this.color=new pt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}pr.prototype.isLineBasicMaterial=!0;const Hh=new S,kh=new S,Gh=new yt,Ta=new Mi,Us=new bi;class kl extends Zt{constructor(t=new ee,e=new pr){super(),this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Hh.fromBufferAttribute(e,r-1),kh.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Hh.distanceTo(kh);t.setAttribute("lineDistance",new re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(r),Us.radius+=s,t.ray.intersectsSphere(Us)===!1)return;Gh.copy(r).invert(),Ta.copy(t.ray).applyMatrix4(Gh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new S,h=new S,u=new S,f=new S,d=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,p=n.attributes.position;if(g!==null){const x=Math.max(0,o.start),w=Math.min(g.count,o.start+o.count);for(let T=x,E=w-1;T<E;T+=d){const b=g.getX(T),C=g.getX(T+1);if(c.fromBufferAttribute(p,b),h.fromBufferAttribute(p,C),Ta.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const _=t.ray.origin.distanceTo(f);_<t.near||_>t.far||e.push({distance:_,point:u.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,o.start),w=Math.min(p.count,o.start+o.count);for(let T=x,E=w-1;T<E;T+=d){if(c.fromBufferAttribute(p,T),h.fromBufferAttribute(p,T+1),Ta.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(f);C<t.near||C>t.far||e.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}kl.prototype.isLine=!0;const Vh=new S,Wh=new S;class Gl extends kl{constructor(t,e){super(t,e),this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Vh.fromBufferAttribute(e,r),Wh.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Vh.distanceTo(Wh);t.setAttribute("lineDistance",new re(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Gl.prototype.isLineSegments=!0;class w_ extends kl{constructor(t,e){super(t,e),this.type="LineLoop"}}w_.prototype.isLineLoop=!0;class Vl extends ve{constructor(t){super(),this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}Vl.prototype.isPointsMaterial=!0;const qh=new yt,Ka=new Mi,Hs=new bi,ks=new S;class b_ extends Zt{constructor(t=new ee,e=new Vl){super(),this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(r),Hs.radius+=s,t.ray.intersectsSphere(Hs)===!1)return;qh.copy(r).invert(),Ka.copy(t.ray).applyMatrix4(qh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){const c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,m=d;g<m;g++){const p=c.getX(g);ks.fromBufferAttribute(u,p),jh(ks,p,l,r,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,m=d;g<m;g++)ks.fromBufferAttribute(u,g),jh(ks,g,l,r,t,e,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}b_.prototype.isPoints=!0;function jh(i,t,e,n,r,s,o){const a=Ka.distanceSqToPoint(i);if(a<e){const l=new S;Ka.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class M_ extends ye{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.minFilter=o!==void 0?o:Ne,this.magFilter=s!==void 0?s:Ne,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}M_.prototype.isVideoTexture=!0;class S_ extends ye{constructor(t,e,n){super({width:t,height:e}),this.format=n,this.magFilter=be,this.minFilter=be,this.generateMipmaps=!1,this.needsUpdate=!0}}S_.prototype.isFramebufferTexture=!0;class E_ extends ye{constructor(t,e,n,r,s,o,a,l,c,h,u,f){super(null,o,a,l,c,h,r,s,u,f),this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}E_.prototype.isCompressedTexture=!0;class Xu extends ye{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.needsUpdate=!0}}Xu.prototype.isCanvasTexture=!0;class Ke{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const h=n[r],f=n[r+1]-h,d=(o-h)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new Z:new S);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new S,r=[],s=[],o=[],a=new S,l=new yt;for(let d=0;d<=t;d++){const g=d/t;r[d]=this.getTangentAt(g,new S)}s[0]=new S,o[0]=new S;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Te(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(Te(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class No extends Ke{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new Z,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}No.prototype.isEllipseCurve=!0;class $u extends No{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.type="ArcCurve"}}$u.prototype.isArcCurve=!0;function Wl(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const Gs=new S,Aa=new Wl,Ca=new Wl,La=new Wl;class Yu extends Ke{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new S){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(Gs.subVectors(r[0],r[1]).add(r[0]),c=Gs);const u=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Gs.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Gs),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);m<1e-4&&(m=1),g<1e-4&&(g=m),p<1e-4&&(p=m),Aa.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,m,p),Ca.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,m,p),La.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,m,p)}else this.curveType==="catmullrom"&&(Aa.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ca.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),La.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Aa.calc(l),Ca.calc(l),La.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new S().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}Yu.prototype.isCatmullRomCurve3=!0;function Xh(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function T_(i,t){const e=1-i;return e*e*t}function A_(i,t){return 2*(1-i)*i*t}function C_(i,t){return i*i*t}function zr(i,t,e,n){return T_(i,t)+A_(i,e)+C_(i,n)}function L_(i,t){const e=1-i;return e*e*e*t}function R_(i,t){const e=1-i;return 3*e*e*i*t}function P_(i,t){return 3*(1-i)*i*i*t}function D_(i,t){return i*i*i*t}function Or(i,t,e,n,r){return L_(i,t)+R_(i,e)+P_(i,n)+D_(i,r)}class ql extends Ke{constructor(t=new Z,e=new Z,n=new Z,r=new Z){super(),this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Z){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Or(t,r.x,s.x,o.x,a.x),Or(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}ql.prototype.isCubicBezierCurve=!0;class Ju extends Ke{constructor(t=new S,e=new S,n=new S,r=new S){super(),this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new S){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Or(t,r.x,s.x,o.x,a.x),Or(t,r.y,s.y,o.y,a.y),Or(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}Ju.prototype.isCubicBezierCurve3=!0;class Fo extends Ke{constructor(t=new Z,e=new Z){super(),this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new Z;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}Fo.prototype.isLineCurve=!0;class I_ extends Ke{constructor(t=new S,e=new S){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=t,this.v2=e}getPoint(t,e=new S){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jl extends Ke{constructor(t=new Z,e=new Z,n=new Z){super(),this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Z){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(zr(t,r.x,s.x,o.x),zr(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}jl.prototype.isQuadraticBezierCurve=!0;class Zu extends Ke{constructor(t=new S,e=new S,n=new S){super(),this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new S){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(zr(t,r.x,s.x,o.x),zr(t,r.y,s.y,o.y),zr(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}Zu.prototype.isQuadraticBezierCurve3=!0;class Xl extends Ke{constructor(t=[]){super(),this.type="SplineCurve",this.points=t}getPoint(t,e=new Z){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(Xh(a,l.x,c.x,h.x,u.x),Xh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new Z().fromArray(r))}return this}}Xl.prototype.isSplineCurve=!0;var Ku=Object.freeze({__proto__:null,ArcCurve:$u,CatmullRomCurve3:Yu,CubicBezierCurve:ql,CubicBezierCurve3:Ju,EllipseCurve:No,LineCurve:Fo,LineCurve3:I_,QuadraticBezierCurve:jl,QuadraticBezierCurve3:Zu,SplineCurve:Xl});class N_ extends Ke{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Fo(e,t))}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Ku[r.type]().fromJSON(r))}return this}}class Qa extends N_{constructor(t){super(),this.type="Path",this.currentPoint=new Z,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Fo(this.currentPoint.clone(),new Z(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new jl(this.currentPoint.clone(),new Z(t,e),new Z(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new ql(this.currentPoint.clone(),new Z(t,e),new Z(n,r),new Z(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Xl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){const c=new No(t,e,n,r,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class $l extends ee{constructor(t=1,e=1,n=1,r=8,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],f=[],d=[];let g=0;const m=[],p=n/2;let x=0;w(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(f,3)),this.setAttribute("uv",new re(d,2));function w(){const E=new S,b=new S;let C=0;const L=(e-t)/n;for(let _=0;_<=s;_++){const A=[],I=_/s,D=I*(e-t)+t;for(let Q=0;Q<=r;Q++){const Y=Q/r,P=Y*l+a,H=Math.sin(P),B=Math.cos(P);b.x=D*H,b.y=-I*n+p,b.z=D*B,u.push(b.x,b.y,b.z),E.set(H,L,B).normalize(),f.push(E.x,E.y,E.z),d.push(Y,1-I),A.push(g++)}m.push(A)}for(let _=0;_<r;_++)for(let A=0;A<s;A++){const I=m[A][_],D=m[A+1][_],Q=m[A+1][_+1],Y=m[A][_+1];h.push(I,D,Y),h.push(D,Q,Y),C+=6}c.addGroup(x,C,0),x+=C}function T(E){const b=g,C=new Z,L=new S;let _=0;const A=E===!0?t:e,I=E===!0?1:-1;for(let Q=1;Q<=r;Q++)u.push(0,p*I,0),f.push(0,I,0),d.push(.5,.5),g++;const D=g;for(let Q=0;Q<=r;Q++){const P=Q/r*l+a,H=Math.cos(P),B=Math.sin(P);L.x=A*B,L.y=p*I,L.z=A*H,u.push(L.x,L.y,L.z),f.push(0,I,0),C.x=H*.5+.5,C.y=B*.5*I+.5,d.push(C.x,C.y),g++}for(let Q=0;Q<r;Q++){const Y=b+Q,P=D+Q;E===!0?h.push(P,P+1,Y):h.push(P+1,P,Y),_+=3}c.addGroup(x,_,E===!0?1:2),x+=_}}static fromJSON(t){return new $l(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Vs=new S,Ws=new S,Ra=new S,qs=new me;class Qu extends ee{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(no*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:m,b:p,c:x}=qs;if(m.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),x.fromBufferAttribute(a,c[2]),qs.getNormal(Ra),u[0]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,u[2]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let w=0;w<3;w++){const T=(w+1)%3,E=u[w],b=u[T],C=qs[h[w]],L=qs[h[T]],_=`${E}_${b}`,A=`${b}_${E}`;A in f&&f[A]?(Ra.dot(f[A].normal)<=s&&(d.push(C.x,C.y,C.z),d.push(L.x,L.y,L.z)),f[A]=null):_ in f||(f[_]={index0:c[w],index1:c[T],normal:Ra.clone()})}}for(const g in f)if(f[g]){const{index0:m,index1:p}=f[g];Vs.fromBufferAttribute(a,m),Ws.fromBufferAttribute(a,p),d.push(Vs.x,Vs.y,Vs.z),d.push(Ws.x,Ws.y,Ws.z)}this.setAttribute("position",new re(d,3))}}}class ns extends Qa{constructor(t){super(t),this.uuid=_n(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Qa().fromJSON(r))}return this}}const F_={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=tf(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,f,d;if(n&&(s=H_(i,t,s,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<r;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?1/d:0}return qr(s,o,e,a,l,d),o}};function tf(i,t,e,n,r){let s,o;if(r===Z_(i,t,e,n)>0)for(s=t;s<e;s+=n)o=$h(s,i[s],i[s+1],o);else for(s=e-n;s>=t;s-=n)o=$h(s,i[s],i[s+1],o);return o&&Bo(o,o.next)&&(Xr(o),o=o.next),o}function Zn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Bo(e,e.next)||ce(e.prev,e,e.next)===0)){if(Xr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function qr(i,t,e,n,r,s,o){if(!i)return;!o&&s&&q_(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?z_(i,n,r,s):B_(i)){t.push(l.i/e),t.push(i.i/e),t.push(c.i/e),Xr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=O_(Zn(i),t,e),qr(i,t,e,n,r,s,2)):o===2&&U_(i,t,e,n,r,s):qr(Zn(i),t,e,n,r,s,1);break}}}function B_(i){const t=i.prev,e=i,n=i.next;if(ce(t,e,n)>=0)return!1;let r=i.next.next;for(;r!==i.prev;){if(Qi(t.x,t.y,e.x,e.y,n.x,n.y,r.x,r.y)&&ce(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function z_(i,t,e,n){const r=i.prev,s=i,o=i.next;if(ce(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,l=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,c=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,h=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,u=tl(a,l,t,e,n),f=tl(c,h,t,e,n);let d=i.prevZ,g=i.nextZ;for(;d&&d.z>=u&&g&&g.z<=f;){if(d!==i.prev&&d!==i.next&&Qi(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&ce(d.prev,d,d.next)>=0||(d=d.prevZ,g!==i.prev&&g!==i.next&&Qi(r.x,r.y,s.x,s.y,o.x,o.y,g.x,g.y)&&ce(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;d&&d.z>=u;){if(d!==i.prev&&d!==i.next&&Qi(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&ce(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;g&&g.z<=f;){if(g!==i.prev&&g!==i.next&&Qi(r.x,r.y,s.x,s.y,o.x,o.y,g.x,g.y)&&ce(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function O_(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!Bo(r,s)&&ef(r,n,n.next,s)&&jr(r,s)&&jr(s,r)&&(t.push(r.i/e),t.push(n.i/e),t.push(s.i/e),Xr(n),Xr(n.next),n=i=s),n=n.next}while(n!==i);return Zn(n)}function U_(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$_(o,a)){let l=nf(o,a);o=Zn(o,o.next),l=Zn(l,l.next),qr(o,t,e,n,r,s),qr(l,t,e,n,r,s);return}a=a.next}o=o.next}while(o!==i)}function H_(i,t,e,n){const r=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=tf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(X_(c));for(r.sort(k_),s=0;s<r.length;s++)G_(r[s],e),e=Zn(e,e.next);return e}function k_(i,t){return i.x-t.x}function G_(i,t){if(t=V_(i,t),t){const e=nf(t,i);Zn(t,t.next),Zn(e,e.next)}}function V_(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,o;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>s){if(s=f,f===n){if(r===e.y)return e;if(r===e.next.y)return e.next}o=e.x<e.next.x?e:e.next}}e=e.next}while(e!==t);if(!o)return null;if(n===s)return o;const a=o,l=o.x,c=o.y;let h=1/0,u;e=o;do n>=e.x&&e.x>=l&&n!==e.x&&Qi(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(n-e.x),jr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&W_(o,e)))&&(o=e,h=u)),e=e.next;while(e!==a);return o}function W_(i,t){return ce(i.prev,i,t.prev)<0&&ce(t.next,i,i.next)<0}function q_(i,t,e,n){let r=i;do r.z===null&&(r.z=tl(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,j_(r)}function j_(i){let t,e,n,r,s,o,a,l,c=1;do{for(e=i,i=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,c*=2}while(o>1);return i}function tl(i,t,e,n,r){return i=32767*(i-e)*r,t=32767*(t-n)*r,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function X_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Qi(i,t,e,n,r,s,o,a){return(r-o)*(t-a)-(i-o)*(s-a)>=0&&(i-o)*(n-a)-(e-o)*(t-a)>=0&&(e-o)*(s-a)-(r-o)*(n-a)>=0}function $_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Y_(i,t)&&(jr(i,t)&&jr(t,i)&&J_(i,t)&&(ce(i.prev,i,t.prev)||ce(i,t.prev,t))||Bo(i,t)&&ce(i.prev,i,i.next)>0&&ce(t.prev,t,t.next)>0)}function ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Bo(i,t){return i.x===t.x&&i.y===t.y}function ef(i,t,e,n){const r=Xs(ce(i,t,e)),s=Xs(ce(i,t,n)),o=Xs(ce(e,n,i)),a=Xs(ce(e,n,t));return!!(r!==s&&o!==a||r===0&&js(i,e,t)||s===0&&js(i,n,t)||o===0&&js(e,i,n)||a===0&&js(e,t,n))}function js(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Xs(i){return i>0?1:i<0?-1:0}function Y_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ef(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function jr(i,t){return ce(i.prev,i,i.next)<0?ce(i,t,i.next)>=0&&ce(i,i.prev,t)>=0:ce(i,t,i.prev)<0||ce(i,i.next,t)<0}function J_(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function nf(i,t){const e=new el(i.i,i.x,i.y),n=new el(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function $h(i,t,e,n){const r=new el(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Xr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function el(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Z_(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Yn{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Yn.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Yh(t),Jh(n,t);let o=t.length;e.forEach(Yh);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Jh(n,e[l]);const a=F_.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Yh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Jh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class mr extends ee{constructor(t=new ns([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new re(r,3)),this.setAttribute("uv",new re(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1;let u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const x=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:K_;e.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=e.amount);let T,E=!1,b,C,L,_;x&&(T=x.getSpacedPoints(h),E=!0,f=!1,b=x.computeFrenetFrames(h,!1),C=new S,L=new S,_=new S),f||(p=0,d=0,g=0,m=0);const A=a.extractPoints(c);let I=A.shape;const D=A.holes;if(!Yn.isClockWise(I)){I=I.reverse();for(let X=0,j=D.length;X<j;X++){const nt=D[X];Yn.isClockWise(nt)&&(D[X]=nt.reverse())}}const Y=Yn.triangulateShape(I,D),P=I;for(let X=0,j=D.length;X<j;X++){const nt=D[X];I=I.concat(nt)}function H(X,j,nt){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().multiplyScalar(nt).add(X)}const B=I.length,V=Y.length;function $(X,j,nt){let ft,ct,Ct;const wt=X.x-j.x,_t=X.y-j.y,ie=nt.x-X.x,ne=nt.y-X.y,M=wt*wt+_t*_t,y=wt*ne-_t*ie;if(Math.abs(y)>Number.EPSILON){const U=Math.sqrt(M),K=Math.sqrt(ie*ie+ne*ne),lt=j.x-_t/U,ht=j.y+wt/U,vt=nt.x-ne/K,k=nt.y+ie/K,Pt=((vt-lt)*ne-(k-ht)*ie)/(wt*ne-_t*ie);ft=lt+wt*Pt-X.x,ct=ht+_t*Pt-X.y;const Nt=ft*ft+ct*ct;if(Nt<=2)return new Z(ft,ct);Ct=Math.sqrt(Nt/2)}else{let U=!1;wt>Number.EPSILON?ie>Number.EPSILON&&(U=!0):wt<-Number.EPSILON?ie<-Number.EPSILON&&(U=!0):Math.sign(_t)===Math.sign(ne)&&(U=!0),U?(ft=-_t,ct=wt,Ct=Math.sqrt(M)):(ft=wt,ct=_t,Ct=Math.sqrt(M/2))}return new Z(ft/Ct,ct/Ct)}const O=[];for(let X=0,j=P.length,nt=j-1,ft=X+1;X<j;X++,nt++,ft++)nt===j&&(nt=0),ft===j&&(ft=0),O[X]=$(P[X],P[nt],P[ft]);const W=[];let tt,J=O.concat();for(let X=0,j=D.length;X<j;X++){const nt=D[X];tt=[];for(let ft=0,ct=nt.length,Ct=ct-1,wt=ft+1;ft<ct;ft++,Ct++,wt++)Ct===ct&&(Ct=0),wt===ct&&(wt=0),tt[ft]=$(nt[ft],nt[Ct],nt[wt]);W.push(tt),J=J.concat(tt)}for(let X=0;X<p;X++){const j=X/p,nt=d*Math.cos(j*Math.PI/2),ft=g*Math.sin(j*Math.PI/2)+m;for(let ct=0,Ct=P.length;ct<Ct;ct++){const wt=H(P[ct],O[ct],ft);Wt(wt.x,wt.y,-nt)}for(let ct=0,Ct=D.length;ct<Ct;ct++){const wt=D[ct];tt=W[ct];for(let _t=0,ie=wt.length;_t<ie;_t++){const ne=H(wt[_t],tt[_t],ft);Wt(ne.x,ne.y,-nt)}}}const et=g+m;for(let X=0;X<B;X++){const j=f?H(I[X],J[X],et):I[X];E?(L.copy(b.normals[0]).multiplyScalar(j.x),C.copy(b.binormals[0]).multiplyScalar(j.y),_.copy(T[0]).add(L).add(C),Wt(_.x,_.y,_.z)):Wt(j.x,j.y,0)}for(let X=1;X<=h;X++)for(let j=0;j<B;j++){const nt=f?H(I[j],J[j],et):I[j];E?(L.copy(b.normals[X]).multiplyScalar(nt.x),C.copy(b.binormals[X]).multiplyScalar(nt.y),_.copy(T[X]).add(L).add(C),Wt(_.x,_.y,_.z)):Wt(nt.x,nt.y,u/h*X)}for(let X=p-1;X>=0;X--){const j=X/p,nt=d*Math.cos(j*Math.PI/2),ft=g*Math.sin(j*Math.PI/2)+m;for(let ct=0,Ct=P.length;ct<Ct;ct++){const wt=H(P[ct],O[ct],ft);Wt(wt.x,wt.y,u+nt)}for(let ct=0,Ct=D.length;ct<Ct;ct++){const wt=D[ct];tt=W[ct];for(let _t=0,ie=wt.length;_t<ie;_t++){const ne=H(wt[_t],tt[_t],ft);E?Wt(ne.x,ne.y+T[h-1].y,T[h-1].x+nt):Wt(ne.x,ne.y,u+nt)}}}mt(),xt();function mt(){const X=r.length/3;if(f){let j=0,nt=B*j;for(let ft=0;ft<V;ft++){const ct=Y[ft];Mt(ct[2]+nt,ct[1]+nt,ct[0]+nt)}j=h+p*2,nt=B*j;for(let ft=0;ft<V;ft++){const ct=Y[ft];Mt(ct[0]+nt,ct[1]+nt,ct[2]+nt)}}else{for(let j=0;j<V;j++){const nt=Y[j];Mt(nt[2],nt[1],nt[0])}for(let j=0;j<V;j++){const nt=Y[j];Mt(nt[0]+B*h,nt[1]+B*h,nt[2]+B*h)}}n.addGroup(X,r.length/3-X,0)}function xt(){const X=r.length/3;let j=0;G(P,j),j+=P.length;for(let nt=0,ft=D.length;nt<ft;nt++){const ct=D[nt];G(ct,j),j+=ct.length}n.addGroup(X,r.length/3-X,1)}function G(X,j){let nt=X.length;for(;--nt>=0;){const ft=nt;let ct=nt-1;ct<0&&(ct=X.length-1);for(let Ct=0,wt=h+p*2;Ct<wt;Ct++){const _t=B*Ct,ie=B*(Ct+1),ne=j+ft+_t,M=j+ct+_t,y=j+ct+ie,U=j+ft+ie;Dt(ne,M,y,U)}}}function Wt(X,j,nt){l.push(X),l.push(j),l.push(nt)}function Mt(X,j,nt){st(X),st(j),st(nt);const ft=r.length/3,ct=w.generateTopUV(n,r,ft-3,ft-2,ft-1);Ot(ct[0]),Ot(ct[1]),Ot(ct[2])}function Dt(X,j,nt,ft){st(X),st(j),st(ft),st(j),st(nt),st(ft);const ct=r.length/3,Ct=w.generateSideWallUV(n,r,ct-6,ct-3,ct-2,ct-1);Ot(Ct[0]),Ot(Ct[1]),Ot(Ct[3]),Ot(Ct[1]),Ot(Ct[2]),Ot(Ct[3])}function st(X){r.push(l[X*3+0]),r.push(l[X*3+1]),r.push(l[X*3+2])}function Ot(X){s.push(X.x),s.push(X.y)}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Q_(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Ku[r.type]().fromJSON(r)),new mr(n,t.options)}}const K_={generateTopUV:function(i,t,e,n,r){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[r*3],h=t[r*3+1];return[new Z(s,o),new Z(a,l),new Z(c,h)]},generateSideWallUV:function(i,t,e,n,r,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[r*3],d=t[r*3+1],g=t[r*3+2],m=t[s*3],p=t[s*3+1],x=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Z(o,1-l),new Z(c,1-u),new Z(f,1-g),new Z(m,1-x)]:[new Z(a,1-l),new Z(h,1-u),new Z(d,1-g),new Z(p,1-x)]}};function Q_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Yl extends ee{constructor(t=new ns([new Z(0,.5),new Z(-.5,-.5),new Z(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(s,3)),this.setAttribute("uv",new re(o,2));function c(h){const u=r.length/3,f=h.extractPoints(e);let d=f.shape;const g=f.holes;Yn.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,x=g.length;p<x;p++){const w=g[p];Yn.isClockWise(w)===!0&&(g[p]=w.reverse())}const m=Yn.triangulateShape(d,g);for(let p=0,x=g.length;p<x;p++){const w=g[p];d=d.concat(w)}for(let p=0,x=d.length;p<x;p++){const w=d[p];r.push(w.x,w.y,0),s.push(0,0,1),o.push(w.x,w.y)}for(let p=0,x=m.length;p<x;p++){const w=m[p],T=w[0]+u,E=w[1]+u,b=w[2]+u;n.push(T,E,b),l+=3}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return ty(e,t)}static fromJSON(t,e){const n=[];for(let r=0,s=t.shapes.length;r<s;r++){const o=e[t.shapes[r]];n.push(o)}return new Yl(n,t.curveSegments)}}function ty(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}class ey extends ee{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,r=new S,s=new S;if(t.index!==null){const o=t.attributes.position,a=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],f=u.start,d=u.count;for(let g=f,m=f+d;g<m;g+=3)for(let p=0;p<3;p++){const x=a.getX(g+p),w=a.getX(g+(p+1)%3);r.fromBufferAttribute(o,x),s.fromBufferAttribute(o,w),Zh(r,s,n)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}}else{const o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,u=3*a+(c+1)%3;r.fromBufferAttribute(o,h),s.fromBufferAttribute(o,u),Zh(r,s,n)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new re(e,3))}}}function Zh(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(r)===!0?!1:(e.add(n),e.add(r),!0)}class rf extends ve{constructor(t){super(),this.type="ShadowMaterial",this.color=new pt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}rf.prototype.isShadowMaterial=!0;class sf extends Ze{constructor(t){super(t),this.type="RawShaderMaterial"}}sf.prototype.isRawShaderMaterial=!0;class is extends ve{constructor(t){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}is.prototype.isMeshStandardMaterial=!0;class of extends is{constructor(t){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Te(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.sheenColor=new pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pt(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}of.prototype.isMeshPhysicalMaterial=!0;class af extends ve{constructor(t){super(),this.type="MeshPhongMaterial",this.color=new pt(16777215),this.specular=new pt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}af.prototype.isMeshPhongMaterial=!0;class lf extends ve{constructor(t){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}lf.prototype.isMeshToonMaterial=!0;class cf extends ve{constructor(t){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}cf.prototype.isMeshNormalMaterial=!0;class hf extends ve{constructor(t){super(),this.type="MeshLambertMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}hf.prototype.isMeshLambertMaterial=!0;class uf extends ve{constructor(t){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new pt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}uf.prototype.isMeshMatcapMaterial=!0;class ff extends pr{constructor(t){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}ff.prototype.isLineDashedMaterial=!0;const ny={ShadowMaterial:rf,SpriteMaterial:Io,RawShaderMaterial:sf,ShaderMaterial:Ze,PointsMaterial:Vl,MeshPhysicalMaterial:of,MeshStandardMaterial:is,MeshPhongMaterial:af,MeshToonMaterial:lf,MeshNormalMaterial:cf,MeshLambertMaterial:hf,MeshDepthMaterial:Ol,MeshDistanceMaterial:Ul,MeshBasicMaterial:ts,MeshMatcapMaterial:uf,LineDashedMaterial:ff,LineBasicMaterial:pr,Material:ve};ve.fromType=function(i){return new ny[i]};const le={arraySlice:function(i,t,e){return le.isTypedArray(i)?new i.constructor(i.subarray(t,e!==void 0?e:i.length)):i.slice(t,e)},convertArray:function(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)},isTypedArray:function(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)},getKeyframeOrder:function(i){function t(r,s){return i[r]-i[s]}const e=i.length,n=new Array(e);for(let r=0;r!==e;++r)n[r]=r;return n.sort(t),n},sortedArray:function(i,t,e){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)r[o++]=i[a+l]}return r},flattenJSON:function(i,t,e,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=i[r++];while(s!==void 0)},subclip:function(i,t,e,n,r=30){const s=i.clone();s.name=t;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),u=[],f=[];for(let d=0;d<c.times.length;++d){const g=c.times[d]*r;if(!(g<e||g>=n)){u.push(c.times[d]);for(let m=0;m<h;++m)f.push(c.values[d*h+m])}}u.length!==0&&(c.times=le.convertArray(u,c.times.constructor),c.values=le.convertArray(f,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(i,t=0,e=i,n=30){n<=0&&(n=30);const r=e.tracks.length,s=t/n;for(let o=0;o<r;++o){const a=e.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=i.tracks.find(function(x){return x.name===a.name&&x.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let f=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const g=a.times.length-1;let m;if(s<=a.times[0]){const x=h,w=u-h;m=le.arraySlice(a.values,x,w)}else if(s>=a.times[g]){const x=g*u+h,w=x+u-h;m=le.arraySlice(a.values,x,w)}else{const x=a.createInterpolant(),w=h,T=u-h;x.evaluate(s),m=le.arraySlice(x.resultBuffer,w,T)}l==="quaternion"&&new Oe().fromArray(m).normalize().conjugate().toArray(m);const p=c.times.length;for(let x=0;x<p;++x){const w=x*d+f;if(l==="quaternion")Oe.multiplyQuaternionsFlat(c.values,w,m,0,c.values,w);else{const T=d-f*2;for(let E=0;E<T;++E)c.values[w+E]-=m[E]}}}return i.blendMode=Cu,i}};class Kn{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,r=e[n],s=e[n-1];t:{e:{let o;n:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,s)}if(n===a)break;if(s=r,r=e[++n],t<r)break e}o=e.length;break n}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,r);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,r);if(r===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,s,t)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Kn.prototype.beforeStart_=Kn.prototype.copySampleValue_;Kn.prototype.afterEnd_=Kn.prototype.copySampleValue_;class iy extends Kn{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ji,endingEnd:Ji}}intervalChanged_(t,e,n){const r=this.parameterPositions;let s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zi:s=t,a=2*e-n;break;case uo:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zi:o=t,l=2*n-e;break;case uo:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(r-e),m=g*g,p=m*g,x=-f*p+2*f*m-f*g,w=(1+f)*p+(-1.5-2*f)*m+(-.5+f)*g+1,T=(-1-d)*p+(1.5+d)*m+.5*g,E=d*p-d*m;for(let b=0;b!==a;++b)s[b]=x*o[h+b]+w*o[c+b]+T*o[l+b]+E*o[u+b];return s}}class df extends Kn{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(r-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}}class ry extends Kn{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}}class wn{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=le.convertArray(e,this.TimeBufferType),this.values=le.convertArray(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:le.convertArray(t.times,Array),values:le.convertArray(t.values,Array)};const r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ry(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new df(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new iy(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case co:e=this.InterpolantFactoryMethodDiscrete;break;case ho:e=this.InterpolantFactoryMethodLinear;break;case Jo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return co;case this.InterpolantFactoryMethodLinear:return ho;case this.InterpolantFactoryMethodSmooth:return Jo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=le.arraySlice(n,s,o),this.values=le.arraySlice(this.values,s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&le.isTypedArray(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=le.arraySlice(this.times),e=le.arraySlice(this.values),n=this.getValueSize(),r=this.getInterpolation()===Jo,s=t.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(r)l=!0;else{const u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){const m=e[u+g];if(m!==e[f+g]||m!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=le.arraySlice(t,0,o),this.values=le.arraySlice(e,0,o*n)):(this.times=t,this.values=e),this}clone(){const t=le.arraySlice(this.times,0),e=le.arraySlice(this.values,0),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}}wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=ho;class gr extends wn{}gr.prototype.ValueTypeName="bool";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=co;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;class pf extends wn{}pf.prototype.ValueTypeName="color";class po extends wn{}po.prototype.ValueTypeName="number";class sy extends Kn{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e);let c=t*a;for(let h=c+a;c!==h;c+=4)Oe.slerpFlat(s,0,o,c-a,o,c,l);return s}}class rs extends wn{InterpolantFactoryMethodLinear(t){return new sy(this.times,this.values,this.getValueSize(),t)}}rs.prototype.ValueTypeName="quaternion";rs.prototype.DefaultInterpolation=ho;rs.prototype.InterpolantFactoryMethodSmooth=void 0;class xr extends wn{}xr.prototype.ValueTypeName="string";xr.prototype.ValueBufferType=Array;xr.prototype.DefaultInterpolation=co;xr.prototype.InterpolantFactoryMethodLinear=void 0;xr.prototype.InterpolantFactoryMethodSmooth=void 0;class mo extends wn{}mo.prototype.ValueTypeName="vector";class Kh{constructor(t,e=-1,n,r=Ll){this.name=t,this.tracks=n,this.duration=e,this.blendMode=r,this.uuid=_n(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,r=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(ay(n[o]).scale(r));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,r={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(wn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(t,e,n,r){const s=e.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=le.getKeyframeOrder(l);l=le.sortedArray(l,1,h),c=le.sortedArray(c,1,h),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new po(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const r=t;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===e)return n[r];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let f=r[u];f||(r[u]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,g,m){if(d.length!==0){const p=[],x=[];le.flattenJSON(d,p,x,g),p.length!==0&&m.push(new u(f,p,x))}},r=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let m=0;m<f[g].morphTargets.length;m++)d[f[g].morphTargets[m]]=-1;for(const m in d){const p=[],x=[];for(let w=0;w!==f[g].morphTargets.length;++w){const T=f[g];p.push(T.time),x.push(T.morphTarget===m?1:0)}r.push(new po(".morphTargetInfluence["+m+"]",p,x))}l=d.length*o}else{const d=".bones["+e[u].name+"]";n(mo,d+".position",f,"pos",r),n(rs,d+".quaternion",f,"rot",r),n(mo,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,r=t.length;n!==r;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function oy(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return po;case"vector":case"vector2":case"vector3":case"vector4":return mo;case"color":return pf;case"quaternion":return rs;case"bool":case"boolean":return gr;case"string":return xr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ay(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=oy(i.type);if(i.times===void 0){const e=[],n=[];le.flattenJSON(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const hr={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ly{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const cy=new ly;class ei{constructor(t){this.manager=t!==void 0?t:cy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const Cn={};class hy extends ei{constructor(t){super(t)}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=hr.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Cn[t]!==void 0){Cn[t].push({onLoad:e,onProgress:n,onError:r});return}Cn[t]=[],Cn[t].push({onLoad:e,onProgress:n,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Cn[t],u=c.body.getReader(),f=c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let m=0;const p=new ReadableStream({start(x){w();function w(){u.read().then(({done:T,value:E})=>{if(T)x.close();else{m+=E.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:d});for(let C=0,L=h.length;C<L;C++){const _=h[C];_.onProgress&&_.onProgress(b)}x.enqueue(E),w()}})}}});return new Response(p)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{hr.add(t,c);const h=Cn[t];delete Cn[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=Cn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Cn[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class mf extends ei{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=hr.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Wr("img");function l(){h(),hr.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),r&&r(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class uy extends ei{constructor(t){super(t)}load(t,e,n,r){const s=new Lo,o=new mf(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(h){s.images[c]=h,a++,a===6&&(s.needsUpdate=!0,e&&e(s))},void 0,r)}for(let c=0;c<t.length;++c)l(c);return s}}class fy extends ei{constructor(t){super(t)}load(t,e,n,r){const s=new ye,o=new mf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class yn extends Zt{constructor(t,e=1){super(),this.type="Light",this.color=new pt(t),this.intensity=e}dispose(){}copy(t){return super.copy(t),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}yn.prototype.isLight=!0;class dy extends yn{constructor(t,e,n){super(t,n),this.type="HemisphereLight",this.position.copy(Zt.DefaultUp),this.updateMatrix(),this.groundColor=new pt(e)}copy(t){return yn.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}}dy.prototype.isHemisphereLight=!0;const Qh=new yt,tu=new S,eu=new S;class Jl{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ro,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;tu.setFromMatrixPosition(t.matrixWorld),e.position.copy(tu),eu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(eu),e.updateMatrixWorld(),Qh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class gf extends Jl{constructor(){super(new Fe(50,1,.5,500)),this.focus=1}updateMatrices(t){const e=this.camera,n=$a*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}gf.prototype.isSpotLightShadow=!0;class py extends yn{constructor(t,e,n=0,r=Math.PI/3,s=0,o=1){super(t,e),this.type="SpotLight",this.position.copy(Zt.DefaultUp),this.updateMatrix(),this.target=new Zt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.shadow=new gf}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}py.prototype.isSpotLight=!0;const nu=new yt,Rr=new S,Pa=new S;class xf extends Jl{constructor(){super(new Fe(90,1,.5,500)),this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new te(2,1,1,1),new te(0,1,1,1),new te(3,1,1,1),new te(1,1,1,1),new te(3,0,1,1),new te(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Rr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Rr),Pa.copy(n.position),Pa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Pa),n.updateMatrixWorld(),r.makeTranslation(-Rr.x,-Rr.y,-Rr.z),nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nu)}}xf.prototype.isPointLightShadow=!0;class my extends yn{constructor(t,e,n=0,r=1){super(t,e),this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new xf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}my.prototype.isPointLight=!0;class _f extends Jl{constructor(){super(new Po(-5,5,5,-5,.5,500))}}_f.prototype.isDirectionalLightShadow=!0;class yf extends yn{constructor(t,e){super(t,e),this.type="DirectionalLight",this.position.copy(Zt.DefaultUp),this.updateMatrix(),this.target=new Zt,this.shadow=new _f}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}yf.prototype.isDirectionalLight=!0;class vf extends yn{constructor(t,e){super(t,e),this.type="AmbientLight"}}vf.prototype.isAmbientLight=!0;class gy extends yn{constructor(t,e,n=10,r=10){super(t,e),this.type="RectAreaLight",this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}gy.prototype.isRectAreaLight=!0;class wf{constructor(){this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new S)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,r=t.y,s=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*r),e.addScaledVector(o[2],.488603*s),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*r)),e.addScaledVector(o[5],1.092548*(r*s)),e.addScaledVector(o[6],.315392*(3*s*s-1)),e.addScaledVector(o[7],1.092548*(n*s)),e.addScaledVector(o[8],.546274*(n*n-r*r)),e}getIrradianceAt(t,e){const n=t.x,r=t.y,s=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*r),e.addScaledVector(o[2],2*.511664*s),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*r),e.addScaledVector(o[5],2*.429043*r*s),e.addScaledVector(o[6],.743125*s*s-.247708),e.addScaledVector(o[7],2*.429043*n*s),e.addScaledVector(o[8],.429043*(n*n-r*r)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(t,e+r*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(t,e+r*3);return t}static getBasisAt(t,e){const n=t.x,r=t.y,s=t.z;e[0]=.282095,e[1]=.488603*r,e[2]=.488603*s,e[3]=.488603*n,e[4]=1.092548*n*r,e[5]=1.092548*r*s,e[6]=.315392*(3*s*s-1),e[7]=1.092548*n*s,e[8]=.546274*(n*n-r*r)}}wf.prototype.isSphericalHarmonics3=!0;class Zl extends yn{constructor(t=new wf,e=1){super(void 0,e),this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}Zl.prototype.isLightProbe=!0;class xy{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,r=t.length;n<r;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class bf extends ee{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const t=super.toJSON(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}bf.prototype.isInstancedBufferGeometry=!0;class _y extends ei{constructor(t){super(t),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=hr.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){hr.add(t,l),e&&e(l),s.manager.itemEnd(t)}).catch(function(l){r&&r(l),s.manager.itemError(t),s.manager.itemEnd(t)}),s.manager.itemStart(t)}}_y.prototype.isImageBitmapLoader=!0;let $s;const yy={getContext:function(){return $s===void 0&&($s=new(window.AudioContext||window.webkitAudioContext)),$s},setContext:function(i){$s=i}};class vy extends ei{constructor(t){super(t)}load(t,e,n,r){const s=this,o=new hy(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{const l=a.slice(0);yy.getContext().decodeAudioData(l,function(h){e(h)})}catch(l){r?r(l):console.error(l),s.manager.itemError(t)}},n,r)}}class wy extends Zl{constructor(t,e,n=1){super(void 0,n);const r=new pt().set(t),s=new pt().set(e),o=new S(r.r,r.g,r.b),a=new S(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}}wy.prototype.isHemisphereLightProbe=!0;class by extends Zl{constructor(t,e=1){super(void 0,e);const n=new pt().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}by.prototype.isAmbientLightProbe=!0;class My extends Zt{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}class Sy{constructor(t,e,n){this.binding=t,this.valueSize=n;let r,s,o;switch(e){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,r=this.valueSize,s=t*r+r;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)n[s+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,r,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,r=t*e+e,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=e*this._origIndex;this._mixBufferRegion(n,r,l,1-s,e)}o>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,r);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,r=n*this._origIndex;t.getValue(e,r);for(let s=n,o=r;s!==o;++s)e[s]=e[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,r,s){if(r>=.5)for(let o=0;o!==s;++o)t[e+o]=t[n+o]}_slerp(t,e,n,r){Oe.slerpFlat(t,e,t,e,t,n,r)}_slerpAdditive(t,e,n,r,s){const o=this._workIndex*s;Oe.multiplyQuaternionsFlat(t,o,t,e,t,n),Oe.slerpFlat(t,e,t,e,t,o,r)}_lerp(t,e,n,r,s){const o=1-r;for(let a=0;a!==s;++a){const l=e+a;t[l]=t[l]*o+t[n+a]*r}}_lerpAdditive(t,e,n,r,s){for(let o=0;o!==s;++o){const a=e+o;t[a]=t[a]+t[n+o]*r}}}const Kl="\\[\\]\\.:\\/",Ey=new RegExp("["+Kl+"]","g"),Ql="[^"+Kl+"]",Ty="[^"+Kl.replace("\\.","")+"]",Ay=/((?:WC+[\/:])*)/.source.replace("WC",Ql),Cy=/(WCOD+)?/.source.replace("WCOD",Ty),Ly=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ql),Ry=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ql),Py=new RegExp("^"+Ay+Cy+Ly+Ry+"$"),Dy=["material","materials","bones"];class Iy{constructor(t,e,n){const r=n||Jt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Jt{constructor(t,e,n){this.path=e,this.parsedPath=n||Jt.parseTrackName(e),this.node=Jt.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Jt.Composite(t,e,n):new Jt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ey,"")}static parseTrackName(t){const e=Py.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);Dy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,r=e.propertyName;let s=e.propertyIndex;if(t||(t=Jt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[r];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Jt.Composite=Iy;Jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Jt.prototype.GetterByBindingType=[Jt.prototype._getValue_direct,Jt.prototype._getValue_array,Jt.prototype._getValue_arrayElement,Jt.prototype._getValue_toArray];Jt.prototype.SetterByBindingTypeAndVersioning=[[Jt.prototype._setValue_direct,Jt.prototype._setValue_direct_setNeedsUpdate,Jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_array,Jt.prototype._setValue_array_setNeedsUpdate,Jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_arrayElement,Jt.prototype._setValue_arrayElement_setNeedsUpdate,Jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_fromArray,Jt.prototype._setValue_fromArray_setNeedsUpdate,Jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ny{constructor(t,e,n=null,r=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=r;const s=e.tracks,o=s.length,a=new Array(o),l={endingStart:Ji,endingEnd:Ji};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=bp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const r=this._clip.duration,s=t._clip.duration,o=s/r,a=r/s;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,r){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const l=(t-s)*n;if(l<0||n===0)return;this._startTime=null,e=n*l}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Cu:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Ll:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(r,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(t)[0];e*=r,t>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(e*=n.evaluate(t)[0],t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e))}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let r=this.time+t,s=this._loopCount;const o=n===Mp;if(t===0)return s===-1?r:o&&(s&1)===1?e-r:r;if(n===wp){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(r>=e)r=e;else if(r<0)r=0;else{this.time=r;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=e||r<0){const a=Math.floor(r/e);r-=e*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=t>0?e:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return e-r}return r}_setEndings(t,e,n){const r=this._interpolantSettings;n?(r.endingStart=Zi,r.endingEnd=Zi):(t?r.endingStart=this.zeroSlopeAtStart?Zi:Ji:r.endingStart=uo,e?r.endingEnd=this.zeroSlopeAtEnd?Zi:Ji:r.endingEnd=uo)}_scheduleFading(t,e,n){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=e,a[1]=s+t,l[1]=n,this}}class Fy extends vi{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,r=t._clip.tracks,s=r.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const f=r[u],d=f.name;let g=h[d];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}const m=e&&e._propertyBindings[u].binding.parsedPath;g=new Sy(Jt.create(n,d,m),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,r=t._clip.uuid,s=this._actionsByClip[r];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,r,n)}const e=t._propertyBindings;for(let n=0,r=e.length;n!==r;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,r=e.length;n!==r;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const r=this._actions,s=this._actionsByClip;let o=s[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=r.length,r.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],r=t._cacheIndex;n._cacheIndex=r,e[r]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const u=a.actionByRoot,f=(t._localRoot||this._root).uuid;delete u[f],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,r=e.length;n!==r;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,r=this._nActiveActions++,s=e[r];t._cacheIndex=r,e[r]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,r=--this._nActiveActions,s=e[r];t._cacheIndex=r,e[r]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const r=this._bindingsByRootAndName,s=this._bindings;let o=r[e];o===void 0&&(o={},r[e]=o),o[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,r=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[r],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,r=this._nActiveBindings++,s=e[r];t._cacheIndex=r,e[r]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,r=--this._nActiveBindings,s=e[r];t._cacheIndex=r,e[r]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new df(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,r=--this._nActiveControlInterpolants,s=e[r];t.__cacheIndex=r,e[r]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const r=e||this._root,s=r.uuid;let o=typeof t=="string"?Kh.findByName(r,t):t;const a=o!==null?o.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ll),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new Ny(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(t,e){const n=e||this._root,r=n.uuid,s=typeof t=="string"?Kh.findByName(n,t):t,o=s?s.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,r=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(r,t,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete r[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[e];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}Fy.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class nl extends es{constructor(t,e,n=1){super(t,e),this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}nl.prototype.isInstancedInterleavedBuffer=!0;class By{constructor(t,e,n=0,r=1/0){this.ray=new Mi(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Dl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return il(t,this,n,e),n.sort(iu),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)il(t[r],this,n,e);return n.sort(iu),n}}function iu(i,t){return i.distance-t.distance}function il(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)il(r[s],t,e,!0)}}const Wn=new S,Ys=new yt,Da=new yt;class zy extends Gl{constructor(t){const e=Mf(t),n=new ee,r=[],s=[],o=new pt(0,0,1),a=new pt(0,1,0);for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new re(r,3)),n.setAttribute("color",new re(s,3));const l=new pr({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,r=n.getAttribute("position");Da.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<e.length;s++){const a=e[s];a.parent&&a.parent.isBone&&(Ys.multiplyMatrices(Da,a.matrixWorld),Wn.setFromMatrixPosition(Ys),r.setXYZ(o,Wn.x,Wn.y,Wn.z),Ys.multiplyMatrices(Da,a.parent.matrixWorld),Wn.setFromMatrixPosition(Ys),r.setXYZ(o+1,Wn.x,Wn.y,Wn.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}}function Mf(i){const t=[];i.isBone===!0&&t.push(i);for(let e=0;e<i.children.length;e++)t.push.apply(t,Mf(i.children[e]));return t}class Oy extends Gl{constructor(t=10,e=10,n=4473924,r=8947848){n=new pt(n),r=new pt(r);const s=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,d=0,g=-a;f<=e;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const m=f===s?n:r;m.toArray(c,d),d+=3,m.toArray(c,d),d+=3,m.toArray(c,d),d+=3,m.toArray(c,d),d+=3}const h=new ee;h.setAttribute("position",new re(l,3)),h.setAttribute("color",new re(c,3));const u=new pr({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}}const pn=new Uint32Array(512),mn=new Uint32Array(512);for(let i=0;i<256;++i){const t=i-127;t<-27?(pn[i]=0,pn[i|256]=32768,mn[i]=24,mn[i|256]=24):t<-14?(pn[i]=1024>>-t-14,pn[i|256]=1024>>-t-14|32768,mn[i]=-t-1,mn[i|256]=-t-1):t<=15?(pn[i]=t+15<<10,pn[i|256]=t+15<<10|32768,mn[i]=13,mn[i|256]=13):t<128?(pn[i]=31744,pn[i|256]=64512,mn[i]=24,mn[i|256]=24):(pn[i]=31744,pn[i|256]=64512,mn[i]=13,mn[i|256]=13)}const Sf=new Uint32Array(2048),ss=new Uint32Array(64),Uy=new Uint32Array(64);for(let i=1;i<1024;++i){let t=i<<13,e=0;for(;(t&8388608)===0;)t<<=1,e-=8388608;t&=-8388609,e+=947912704,Sf[i]=t|e}for(let i=1024;i<2048;++i)Sf[i]=939524096+(i-1024<<13);for(let i=1;i<31;++i)ss[i]=i<<23;ss[31]=1199570944;ss[32]=2147483648;for(let i=33;i<63;++i)ss[i]=2147483648+(i-32<<23);ss[63]=3347054592;for(let i=1;i<64;++i)i!==32&&(Uy[i]=1024);Ke.create=function(i,t){return console.log("THREE.Curve.create() has been deprecated"),i.prototype=Object.create(Ke.prototype),i.prototype.constructor=i,i.prototype.getPoint=t,i};Qa.prototype.fromPoints=function(i){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(i)};Oy.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};zy.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};ei.prototype.extractUrlBase=function(i){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),xy.extractUrlBase(i)};ei.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};je.prototype.center=function(i){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(i)};je.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};je.prototype.isIntersectionBox=function(i){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(i)};je.prototype.isIntersectionSphere=function(i){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(i)};je.prototype.size=function(i){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(i)};Si.prototype.toVector3=function(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")};bi.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Ro.prototype.setFromMatrix=function(i){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(i)};Se.prototype.flattenToArrayOffset=function(i,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(i,t)};Se.prototype.multiplyVector3=function(i){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),i.applyMatrix3(this)};Se.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};Se.prototype.applyToBufferAttribute=function(i){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),i.applyMatrix3(this)};Se.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};Se.prototype.getInverse=function(i){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(i).invert()};yt.prototype.extractPosition=function(i){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(i)};yt.prototype.flattenToArrayOffset=function(i,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(i,t)};yt.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new S().setFromMatrixColumn(this,3)};yt.prototype.setRotationFromQuaternion=function(i){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(i)};yt.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};yt.prototype.multiplyVector3=function(i){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};yt.prototype.multiplyVector4=function(i){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};yt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};yt.prototype.rotateAxis=function(i){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),i.transformDirection(this)};yt.prototype.crossVector=function(i){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};yt.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};yt.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};yt.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};yt.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};yt.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};yt.prototype.applyToBufferAttribute=function(i){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};yt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};yt.prototype.makeFrustum=function(i,t,e,n,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(i,t,n,e,r,s)};yt.prototype.getInverse=function(i){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(i).invert()};Pn.prototype.isIntersectionLine=function(i){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(i)};Oe.prototype.multiplyVector3=function(i){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),i.applyQuaternion(this)};Oe.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Mi.prototype.isIntersectionBox=function(i){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(i)};Mi.prototype.isIntersectionPlane=function(i){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(i)};Mi.prototype.isIntersectionSphere=function(i){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(i)};me.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};me.prototype.barycoordFromPoint=function(i,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(i,t)};me.prototype.midpoint=function(i){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(i)};me.prototypenormal=function(i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(i)};me.prototype.plane=function(i){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(i)};me.barycoordFromPoint=function(i,t,e,n,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),me.getBarycoord(i,t,e,n,r)};me.normal=function(i,t,e,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),me.getNormal(i,t,e,n)};ns.prototype.extractAllPoints=function(i){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(i)};ns.prototype.extrude=function(i){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new mr(this,i)};ns.prototype.makeGeometry=function(i){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Yl(this,i)};Z.prototype.fromAttribute=function(i,t,e){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,t,e)};Z.prototype.distanceToManhattan=function(i){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(i)};Z.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};S.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};S.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};S.prototype.getPositionFromMatrix=function(i){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(i)};S.prototype.getScaleFromMatrix=function(i){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(i)};S.prototype.getColumnFromMatrix=function(i,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,i)};S.prototype.applyProjection=function(i){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(i)};S.prototype.fromAttribute=function(i,t,e){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,t,e)};S.prototype.distanceToManhattan=function(i){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(i)};S.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};te.prototype.fromAttribute=function(i,t,e){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,t,e)};te.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Zt.prototype.getChildByName=function(i){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(i)};Zt.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Zt.prototype.translate=function(i,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,i)};Zt.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Zt.prototype.applyMatrix=function(i){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(i)};Object.defineProperties(Zt.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(i){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=i}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});he.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(he.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Sp},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});ju.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Fe.prototype.setLens=function(i,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(i)};Object.defineProperties(yn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(i){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=i}},shadowCameraLeft:{set:function(i){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=i}},shadowCameraRight:{set:function(i){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=i}},shadowCameraTop:{set:function(i){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=i}},shadowCameraBottom:{set:function(i){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=i}},shadowCameraNear:{set:function(i){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=i}},shadowCameraFar:{set:function(i){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=i}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(i){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=i}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(i){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=i}},shadowMapHeight:{set:function(i){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=i}}});Object.defineProperties(ge.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===fo},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(fo)}}});ge.prototype.setDynamic=function(i){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(i===!0?fo:Vr),this};ge.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},ge.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};ee.prototype.addIndex=function(i){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(i)};ee.prototype.addAttribute=function(i,t){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(i,new ge(arguments[1],arguments[2]))):i==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t),this):this.setAttribute(i,t)};ee.prototype.addDrawCall=function(i,t,e){e!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(i,t)};ee.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};ee.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};ee.prototype.removeAttribute=function(i){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(i)};ee.prototype.applyMatrix=function(i){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(i)};Object.defineProperties(ee.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});es.prototype.setDynamic=function(i){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(i===!0?fo:Vr),this};es.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};mr.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};mr.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};mr.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Hl.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(ve.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new pt}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(i){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===Su}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(i){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=i}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(Ze.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(i){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=i}}});Kt.prototype.clearTarget=function(i,t,e,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(i),this.clear(t,e,n)};Kt.prototype.animate=function(i){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(i)};Kt.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Kt.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Kt.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Kt.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Kt.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Kt.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Kt.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Kt.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Kt.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Kt.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Kt.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Kt.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Kt.prototype.enableScissorTest=function(i){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(i)};Kt.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Kt.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Kt.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Kt.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Kt.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Kt.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Kt.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Kt.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Kt.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Kt.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Kt.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(i){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=i}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(i){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=i}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(i){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=i===!0?ae:Jn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(ku.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(We.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(i){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=i}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(i){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=i}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(i){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=i}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(i){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=i}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(i){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=i}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(i){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=i}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(i){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=i}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(i){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=i}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(i){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=i}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(i){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=i}}});My.prototype.load=function(i){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const t=this;return new vy().load(i,function(n){t.setBuffer(n)}),this};Fl.prototype.updateCubeMap=function(i,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(i,t)};Fl.prototype.clear=function(i,t,e,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(i,t,e,n)};wi.crossOrigin=void 0;wi.loadTexture=function(i,t,e,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new fy;r.setCrossOrigin(this.crossOrigin);const s=r.load(i,e,void 0,n);return t&&(s.mapping=t),s};wi.loadTextureCube=function(i,t,e,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new uy;r.setCrossOrigin(this.crossOrigin);const s=r.load(i,e,void 0,n);return t&&(s.mapping=t),s};wi.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};wi.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cl);const Hy=Qe("<div></div>"),[Ef,ky]=vn(NaN),[Tf,Gy]=vn(NaN);var Vy=i=>(yl(()=>{let t=Math.floor((sl()+2*_o()-yo()*(go()-1)-1)/xo()+1);ky(t>0?t:NaN);let e=Math.floor((rl()+2*_o()-yo()*(go()-1)-1)/xo()+1);Gy(e>0?e:NaN)}),Qt(Al,{get children(){return[Qt(Tl,{get children(){return["output.shape = (",Qt(to,{text:"channels",get value(){return tc()}}),",\xA0",Qt(to,{text:"height",get value(){return Ef()}}),",\xA0",Qt(to,{text:"width",get value(){return Tf()}}),")"]}}),(()=>{const t=Hy.cloneNode(!0);return t.style.setProperty("min-width","550px"),t.style.setProperty("min-height","400px"),t})()]}}));function Ia(i,t,e,n){return new S(i/n.width*2-1,-(t/n.height)*2+1,0).unproject(e)}function ru(i,t,e=void 0){let n=i.clone().project(t),r=n.x+1,s=-(n.y-1);return e!==void 0&&(r*=e.width/2,s*=e.height/2),[r,s]}function Na(i){const t=i.min,e=i.max;return[new S(t.x,t.y,t.z),new S(t.x,t.y,e.z),new S(e.x,t.y,e.z),new S(e.x,t.y,t.z),new S(t.x,e.y,t.z),new S(t.x,e.y,e.z),new S(e.x,e.y,e.z),new S(e.x,e.y,t.z)]}const Js=i=>i*(Math.PI/180),Wy=(i,t,e)=>Math.min(Math.max(i,t),e);function Af(i){let t=[i];for(;t.length>0;){let e=t.shift();try{e.dispose()}catch{}try{t.push(...e.children)}catch{}try{t.push(...e.material)}catch{}try{e.material.map.dispose()}catch{}try{e.material.dispose()}catch{}try{e.geometry.dispose()}catch{}}}function Fa(i,t="#000000",e=64){const n=i.length;let r=document.createElement("canvas");r.height=e,r.width=n*e;var s=r.getContext("2d");return s.fillStyle=t,s.fillRect(0,0,r.width,r.height),i.forEach((o,a)=>{s.fillStyle=o,s.fillRect(a*e+1,1,e-2,e-2)}),new Xu(r)}function Ba(i,t,e=24,n=.12,r=[.5,.5]){var s=Math.round(e*1.2),o=document.createElement("canvas"),a=o.getContext("2d");a.font=`Bold ${s}px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace`;var l=a.measureText(i).width;o.width=l,o.height=s;var c=o.getContext("2d");c.fillStyle="rgba(0, 0, 0, 1.0)",c.font=`Bold ${s}px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace`,c.textAlign="center",c.fillText(i,l/2,s/1.2);var h=new ye(o);h.needsUpdate=!0;var u=new Io({map:h}),f=new qu(u);return f.scale.set(n*l/s,n,1),f.position.set(...t),f.center.set(...r),f}class xn extends fi{constructor({width:t=1,height:e=1,channels:n=1,colors:r=["#ffffff"],borderColor:s="#000000",scaleMultiplier:o=1}){if(super(),this.height=0,this.width=0,this.channels=0,this.boxHeight=0,this.boxWidth=0,this.boxDepth=0,this.boxMesh=new he,this.labels=[],[t,e,n].some(C=>!C)){this.visible=!1;return}this.height=e,this.width=t,this.channels=n;const a=e==1?.35:Math.log(e),l=t==1?.35:Math.log(t),c=n==1?.35:Math.log(n),h=Math.max(a,l,c,1.6);this.boxHeight=o*(a/h),this.boxWidth=o*(l/h),this.boxDepth=o*(c/h);const u=new Nn(this.boxWidth,this.boxHeight,this.boxDepth),f=r.length,d=32;let g=Fa(r,s,d),m=Fa([r[0]],s,d),p=Fa([r[(this.channels-1)%f]],s,d);g.wrapS=Rn,g.wrapT=Rn,m.wrapS=Rn,m.wrapT=Rn,p.wrapS=Rn,p.wrapT=Rn,g.anisotropy=16,m.anisotropy=16,p.anisotropy=16;let x=[];for(let C=0;C<=6;C++){let L;switch(C){case 0:L=g.clone(),L.repeat.set(this.channels/f,this.height);break;case 1:L=g.clone(),L.center.set(1,-1),L.rotation=Math.PI,L.repeat.set(this.channels/f,this.height);break;case 2:L=g.clone(),L.rotation=Math.PI/2,L.repeat.set(this.channels/f,this.width);break;case 3:L=g.clone(),L.center.set(-1,1),L.rotation=-Math.PI/2,L.repeat.set(this.channels/f,this.width);break;case 4:L=m,L.repeat.set(this.width,this.height);break;case 5:L=p,L.repeat.set(this.width,this.height);break;default:L=m.clone();break}x.push(new is({map:L}))}this.boxMesh=new he(u,x),this.add(this.boxMesh);const w=.02,T=new he(new Nn(this.boxWidth+w,this.boxHeight+w,this.boxDepth+w),new ts({color:s,side:Ve}));T.renderOrder=-1,this.add(T);const E=48,b=.12;this.labels=[Ba(`w = ${this.width}`,[0,-(this.boxHeight/2+.07),this.boxDepth/2],E,b,[0,1]),Ba(`h = ${this.height}`,[this.boxWidth/2+.09,0,this.boxDepth/2],E,b,[0,.5]),Ba(`c = ${this.channels}`,[-(this.boxWidth/2+.05),-(this.boxHeight/2+.05),0],E,b,[1,1])],this.toggleLabels(!1),this.add(...this.labels)}toggleLabels(t){for(let e of this.labels)e.visible=t}assign(t){this.height=t.height,this.width=t.width,this.channels=t.channels,this.boxHeight=t.boxHeight,this.boxWidth=t.boxWidth,this.boxDepth=t.boxDepth,this.boxMesh=t.boxMesh,this.labels=t.labels,Af(this),this.remove(...this.children),t.children.length>0&&this.add(...t.children)}get depth(){return this.channels}}rt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Z(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Be.line={uniforms:Il.merge([rt.common,rt.fog,rt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class zo extends Ze{constructor(t){super({type:"LineMaterial",uniforms:Il.clone(Be.line.uniforms),vertexShader:Be.line.vertexShader,fragmentShader:Be.line.fragmentShader,clipping:!0}),Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return Boolean("USE_DASH"in this.defines)},set(e){Boolean(e)!==Boolean("USE_DASH"in this.defines)&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)},set:function(e){Boolean(e)!==Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(t)}}zo.prototype.isLineMaterial=!0;const su=new je,Zs=new S;class $r extends bf{constructor(){super(),this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new re(t,3)),this.setAttribute("uv",new re(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new nl(e,6,1);return this.setAttribute("instanceStart",new Dn(n,3,0)),this.setAttribute("instanceEnd",new Dn(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new nl(e,6,1);return this.setAttribute("instanceColorStart",new Dn(n,3,0)),this.setAttribute("instanceColorEnd",new Dn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new ey(t.geometry)),this}fromLineSegments(t){const e=t.geometry;if(e.isGeometry){console.error("THREE.LineSegmentsGeometry no longer supports Geometry. Use THREE.BufferGeometry instead.");return}else e.isBufferGeometry&&this.setPositions(e.attributes.position.array);return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new je);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),su.setFromBufferAttribute(e),this.boundingBox.union(su))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Zs.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Zs)),Zs.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Zs));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}$r.prototype.isLineSegmentsGeometry=!0;function qy(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new ee;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(l.userData.mergedUserData=l.userData.mergedUserData||[],l.userData.mergedUserData.push(u.userData),t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in s){const u=ou(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let m=0;m<o[h].length;++m)d.push(o[h][m][f]);const g=ou(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function ou(i){let t,e,n,r=0;for(let a=0;a<i.length;++a){const l=i[a];if(l.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;r+=l.array.length}const s=new t(r);let o=0;for(let a=0;a<i.length;++a)s.set(i[a].array,o),o+=i[a].array.length;return new ge(s,e,n)}function jy(i,t){let e=new $l(i/Math.sqrt(2),t/Math.sqrt(2),1,4,1);e.rotateY(Math.PI/4);let n=e.toNonIndexed();return n.computeVertexNormals(),n}function Xy({w:i=1,h:t=1,d:e=1,linewidth:n=.002}){let r=new Nn(i,t,e),s=new Qu(r),o=new $r().fromEdgesGeometry(s),a=[];for(let h=0;h<o.attributes.instanceStart.count;h++)a.push(1,1,1,1,1,1);o.setColors(a);const l=document.getElementById("long");var c=new zo({color:new pt(0).getHex(),linewidth:n,vertexColors:!0,worldUnits:!1,resolution:new Z(l.clientWidth/l.clientHeight,1)});return new he(o,c)}function ro({tensor:i=new xn({}),wSpan:t=[0,1],hSpan:e=[0,1],cSpan:n=[0,1],padding:r=.03}){const s=i.boxWidth/i.width,o=i.boxHeight/i.height,a=i.boxDepth/i.depth,l=s*(t[1]-t[0]),c=o*(e[1]-e[0]),h=a*(n[1]-n[0]);let u=Xy({w:l+r,h:c+r,d:h+r});return u.position.add(new S(-i.boxWidth/2+l/2+t[0]*s,i.boxHeight/2-c/2-e[0]*o,i.boxDepth/2-h/2-n[0]*a)),u}function $y({tensor:i=new xn({}),wSpan:t=[0,1],hSpan:e=[0,1],cSpan:n=[0,1],padding:r=.03,dilation:s=2}){let o=[];for(let f=t[0];f<t[1];f+=s)for(let d=e[0];d<e[1];d+=s){let g=ro({tensor:i,wSpan:[f,f+1],hSpan:[d,d+1],cSpan:n,padding:r});o.push(g)}let a=qy(o.map(f=>{f.updateMatrixWorld();let d=f.geometry.boundingBox;const g=new S().subVectors(d.max,d.min);return new Nn(g.x,g.y,g.z).applyMatrix4(f.matrixWorld)}),!1),l=new $r().fromEdgesGeometry(new Qu(a)),c=[];for(let f=0;f<l.attributes.instanceStart.count;f++)c.push(1,1,1,1,1,1);l.setColors(c);const h=document.getElementById("long");var u=new zo({color:new pt(0).getHex(),linewidth:.002,vertexColors:!0,worldUnits:!1,resolution:new Z(h.clientWidth/h.clientHeight,1)});return new he(l,u)}class au extends fi{constructor({inputTensor:t=new xn({}),outputTensor:e=new xn({}),kernelSize:n=3,stride:r=2,padding:s=0,dilation:o=1}){super(),this.inputTensor=t,this.outputTensor=e,this.backgroundShape=new he(jy(1,.7),new is({color:new pt("hsl(0, 100%, 70%)"),side:Ve,depthTest:!1})),this.backgroundShape.scale.multiply(new S(1,1,1.5)),this.backgroundShape.position.add(new S(0,-.2,0)),this.backgroundShape.renderOrder=0,this.add(this.backgroundShape),this.weightTensor=new xn({width:n,height:n,channels:t.channels,colors:["#E22030","#00AEAC","#136371","#F2B995"],borderColor:"#1E3A4B",scaleMultiplier:.7}),this.weightTensor.renderOrder=.5,this.add(this.weightTensor),o>1?this.inputTensorKernel=$y({tensor:t,wSpan:[0-s,n*o-1-s],hSpan:[0-s,n*o-1-s],cSpan:[0,t.channels],dilation:o}):this.inputTensorKernel=ro({tensor:t,wSpan:[0-s,n-s],hSpan:[0-s,n-s],cSpan:[0,t.channels]}),t.add(this.inputTensorKernel),this.selfTensorKernel=ro({tensor:this.weightTensor,wSpan:[0,this.weightTensor.width],hSpan:[0,this.weightTensor.height],cSpan:[0,this.weightTensor.channels]}),this.weightTensor.add(this.selfTensorKernel),this.outputTensorKernel=ro({tensor:e,wSpan:[0,1],hSpan:[0,1],cSpan:[0,1]}),e.add(this.outputTensorKernel);let a=new $r().setPositions([]);this.connections=new he(a,new zo({color:0,linewidth:.005,vertexColors:!0,depthTest:!1}))}update(t,e){let n=Na(this.selfTensorKernel.geometry.boundingBox),r=Na(this.inputTensorKernel.geometry.boundingBox),s=Na(this.outputTensorKernel.geometry.boundingBox);n=n.map(p=>this.selfTensorKernel.localToWorld(p.clone())),r=r.map(p=>this.inputTensorKernel.localToWorld(p.clone())),s=s.map(p=>this.outputTensorKernel.localToWorld(p.clone()));let o=r.slice(0,4),a=n.slice(0,4),l=n.slice(4,8),c=s.slice(4,8),h=(p,x)=>ru(p,e)[0]-ru(x,e)[0],u=o.sort(h),f=a.sort(h),d=l.sort(h),g=c.sort(h),m=new $r().setPositions([...d[0].toArray(),...u[0].toArray(),...d[d.length-1].toArray(),...u[u.length-1].toArray(),...f[0].toArray(),...g[0].toArray(),...f[f.length-1].toArray(),...g[g.length-1].toArray()]);t.remove(this.connections),this.connections=new he(m,this.connections.material),this.connections.renderOrder=1,t.add(this.connections)}assign(t){this.connections.parent.remove(this.connections),this.connections.geometry.dispose(),this.inputTensor=t.inputTensor,this.weightTensor=t.weightTensor,this.outputTensor=t.outputTensor,this.inputTensorKernel=t.inputTensorKernel,this.selfTensorKernel=t.selfTensorKernel,this.outputTensorKernel=t.outputTensorKernel,Af(this),this.remove(...this.children),t.children.length>0&&this.add(...t.children)}}const Yy=Qe("<div></div>"),Jy=i=>{const t=El({colors:["#FCBF49"],borderColor:"#003049"},i);let e;return wl(()=>{const s=.4023408924652524,o=new Hl;var a=1;let l=new Po(-a*s,a*s,a,-a,1,1e5);const c=new Kt({antialias:!0,alpha:!0});c.setClearColor(0,0),c.setSize(550,1367);var h=c.domElement;e.appendChild(h),l.lookAt(new S(0,0,0));const u=async()=>{let A=e.parentElement.clientWidth,I=e.parentElement.clientHeight,D=A/I;l.left=-a*D,l.right=a*D,l.top=a,l.bottom=-a,l.updateProjectionMatrix(),c.setSize(A,I)};window.addEventListener("resize",u,!1);let f=new xn({});o.add(f);let d=new xn({});o.add(d);let g=new au({});g.scale.multiplyScalar(.3),o.add(g);var m=!1,p=0,x=0;document.addEventListener("pointermove",A=>{if(!!m){A.preventDefault();var I=A.clientX-p,D=A.clientY-x;p=A.clientX,x=A.clientY,f.rotation.y=f.rotation.y+Js(I),f.rotation.x=Wy(f.rotation.x+Js(D),-Math.PI/2.01,Math.PI/2.01),g.rotation.set(f.rotation.x,f.rotation.y,f.rotation.z),d.rotation.set(f.rotation.x,f.rotation.y,f.rotation.z)}},!1),h.addEventListener("pointerdown",A=>{A.preventDefault(),m=!0,p=A.clientX,x=A.clientY},!1),document.addEventListener("pointerup",A=>{m=!1});const w=new By;let T=[];h.addEventListener("pointermove",A=>{let I=A.target.getBoundingClientRect(),D=A.clientX-I.left,Q=A.clientY-I.top;w.setFromCamera({x:D/h.width*2-1,y:-(Q/h.height)*2+1},l);const Y=w.intersectObject(o,!0);let P=[];for(const H of Y)H.object instanceof he&&H.object.parent instanceof xn&&P.push(H.object.parent);for(const H of T)H.toggleLabels(!1);for(const H of P)H.toggleLabels(!0);T=P});const E=new vf(11184810,1.1);E.position.set(12,18,15),o.add(E);const b=new yf(16777215,.4);b.position.set(12,18,15),o.add(b);function C(){g.update(o,l),requestAnimationFrame(C),c.render(o,l)}C();let L,_=[Js(10),Js(25),0];L=Ia(h.width/2,400+80+400+80+400/2,l,h),d.position.set(L.x,L.y,L.z),d.scale.set(.3,.3,.3),d.rotation.set(..._),L=Ia(h.width/2,400/2,l,h),f.position.set(L.x,L.y,L.z),f.scale.set(.3,.3,.3),f.rotation.set(..._),L=Ia(h.width/2,400+80+400/2,l,h),g.position.set(L.x,L.y,L.z),g.rotation.set(..._),yl(()=>{u(),f.assign(new xn({...t})),d.assign(new xn({width:Tf(),height:Ef(),channels:tc(),colors:["#aaaacc","#6677aa","#ccddff","#445577"],borderColor:"#223344"})),g.assign(new au({inputTensor:f,outputTensor:d,kernelSize:go(),stride:xo(),padding:_o(),dilation:yo()})),g.update(o,l)})}),(()=>{const n=Yy.cloneNode(!0),r=e;return typeof r=="function"?r(n):e=n,n.style.setProperty("width","fit-content"),n.style.setProperty("margin","0 auto"),n})()},Zy=Qe('<div><div id="long"></div></div>'),[rl,Ky]=vn(16),[sl,Qy]=vn(16),[ol,tv]=vn(3);var ev=i=>(wl(()=>{const t=document.getElementById("root");new ResizeObserver(()=>{const e=document.getElementById("App"),n=document.getElementById("long");n.style.height=`${e.clientHeight}px`}).observe(t)}),Qt(Al,{get children(){return[Qt(Tl,{get children(){return["input.shape = (",Qt(qn,{text:"channels",min:1,max:1024,scaling:"pow2",signal:[ol,tv]}),",\xA0",Qt(qn,{text:"height",min:1,max:1024,scaling:"pow2",signal:[sl,Qy]}),",\xA0",Qt(qn,{text:"width",min:1,max:1024,scaling:"pow2",signal:[rl,Ky]}),")"]}}),(()=>{const t=Zy.cloneNode(!0),e=t.firstChild;return t.style.setProperty("min-width","550px"),t.style.setProperty("min-height","400px"),e.style.setProperty("position","absolute"),e.style.setProperty("min-width","550px"),ze(e,Qt(Jy,{get channels(){return ol()},get height(){return sl()},get width(){return rl()},colors:["#FCBF49","#F77F00","#EAE2B7","#D62828"],borderColor:"#003049"})),t})()]}}));const nv=Qe("<div></div>"),[tc,iv]=vn(16),[go,rv]=vn(3),[xo,sv]=vn(2),[_o,ov]=vn(0),[yo,av]=vn(1);var lv=i=>Qt(Al,{get children(){return[Qt(Tl,{get children(){return["Conv2d(",Qt(to,{text:"input_channels",get value(){return ol()}}),",\xA0",Qt(qn,{text:"output_channels",min:1,max:1024,scaling:"pow2",signal:[tc,iv]}),",\xA0",Qt(qn,{text:"kernel_size",min:1,max:15,scaling:"linear",signal:[go,rv]}),",\xA0",Qt(qn,{text:"stride",min:1,max:15,scaling:"linear",signal:[xo,sv]}),",\xA0",Qt(qn,{text:"padding",min:0,max:15,scaling:"linear",signal:[_o,ov]}),",\xA0",Qt(qn,{text:"dilation",min:1,max:15,scaling:"linear",signal:[yo,av]}),")"]}}),(()=>{const t=nv.cloneNode(!0);return t.style.setProperty("min-width","550px"),t.style.setProperty("min-height","400px"),t})()]}});const al={},Cf=[];function Rt(i,t){if(Array.isArray(i)){for(const e of i)Rt(e,t);return}if(typeof i=="object"){for(const e in i)Rt(e,i[e]);return}Lf(Object.getOwnPropertyNames(t)),al[i]=Object.assign(al[i]||{},t)}function Ue(i){return al[i]||{}}function cv(){return[...new Set(Cf)]}function Lf(i){Cf.push(...i)}function ec(i,t){let e;const n=i.length,r=[];for(e=0;e<n;e++)r.push(t(i[e]));return r}function hv(i,t){let e;const n=i.length,r=[];for(e=0;e<n;e++)t(i[e])&&r.push(i[e]);return r}function za(i){return i%360*Math.PI/180}function Ks(i){return i.toLowerCase().replace(/-(.)/g,function(t,e){return e.toUpperCase()})}function uv(i){return i.replace(/([A-Z])/g,function(t,e){return"-"+e.toLowerCase()})}function Rf(i){return i.charAt(0).toUpperCase()+i.slice(1)}function _r(i,t,e,n){return(t==null||e==null)&&(n=n||i.bbox(),t==null?t=n.width/n.height*e:e==null&&(e=n.height/n.width*t)),{width:t,height:e}}function ll(i,t){const e=i.origin;let n=i.ox!=null?i.ox:i.originX!=null?i.originX:"center",r=i.oy!=null?i.oy:i.originY!=null?i.originY:"center";e!=null&&([n,r]=Array.isArray(e)?e:typeof e=="object"?[e.x,e.y]:[e,e]);const s=typeof n=="string",o=typeof r=="string";if(s||o){const{height:a,width:l,x:c,y:h}=t.bbox();s&&(n=n.includes("left")?c:n.includes("right")?c+l:c+l/2),o&&(r=r.includes("top")?h:r.includes("bottom")?h+a:h+a/2)}return[n,r]}const nc="http://www.w3.org/2000/svg",fv="http://www.w3.org/1999/xhtml",Qs="http://www.w3.org/2000/xmlns/",os="http://www.w3.org/1999/xlink",dv="http://svgjs.dev/svgjs",Vt={window:typeof window>"u"?null:window,document:typeof document>"u"?null:document};class ic{}const mi={},rc="___SYMBOL___ROOT___";function Yr(i,t=nc){return Vt.document.createElementNS(t,i)}function Pe(i,t=!1){if(i instanceof ic)return i;if(typeof i=="object")return Oa(i);if(i==null)return new mi[rc];if(typeof i=="string"&&i.charAt(0)!=="<")return Oa(Vt.document.querySelector(i));const e=t?Vt.document.createElement("div"):Yr("svg");return e.innerHTML=i,i=Oa(e.firstChild),e.removeChild(e.firstChild),i}function oe(i,t){return t&&t.ownerDocument&&t instanceof t.ownerDocument.defaultView.Node?t:Yr(i)}function Ye(i){if(!i)return null;if(i.instance instanceof ic)return i.instance;if(i.nodeName==="#document-fragment")return new mi.Fragment(i);let t=Rf(i.nodeName||"Dom");return t==="LinearGradient"||t==="RadialGradient"?t="Gradient":mi[t]||(t="Dom"),new mi[t](i)}let Oa=Ye;function Ht(i,t=i.name,e=!1){return mi[t]=i,e&&(mi[rc]=i),Lf(Object.getOwnPropertyNames(i.prototype)),i}function pv(i){return mi[i]}let mv=1e3;function Pf(i){return"Svgjs"+Rf(i)+mv++}function Df(i){for(let t=i.children.length-1;t>=0;t--)Df(i.children[t]);return i.id&&(i.id=Pf(i.nodeName)),i}function zt(i,t){let e,n;for(i=Array.isArray(i)?i:[i],n=i.length-1;n>=0;n--)for(e in t)i[n].prototype[e]=t[e]}function se(i){return function(...t){const e=t[t.length-1];return e&&e.constructor===Object&&!(e instanceof Array)?i.apply(this,t.slice(0,-1)).attr(e):i.apply(this,t)}}function gv(){return this.parent().children()}function xv(){return this.parent().index(this)}function _v(){return this.siblings()[this.position()+1]}function yv(){return this.siblings()[this.position()-1]}function vv(){const i=this.position();return this.parent().add(this.remove(),i+1),this}function wv(){const i=this.position();return this.parent().add(this.remove(),i?i-1:0),this}function bv(){return this.parent().add(this.remove()),this}function Mv(){return this.parent().add(this.remove(),0),this}function Sv(i){i=Pe(i),i.remove();const t=this.position();return this.parent().add(i,t),this}function Ev(i){i=Pe(i),i.remove();const t=this.position();return this.parent().add(i,t+1),this}function Tv(i){return i=Pe(i),i.before(this),this}function Av(i){return i=Pe(i),i.after(this),this}Rt("Dom",{siblings:gv,position:xv,next:_v,prev:yv,forward:vv,backward:wv,front:bv,back:Mv,before:Sv,after:Ev,insertBefore:Tv,insertAfter:Av});const If=/^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,Cv=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,Lv=/rgb\((\d+),(\d+),(\d+)\)/,Rv=/(#[a-z_][a-z0-9\-_]*)/i,Pv=/\)\s*,?\s*/,Dv=/\s/g,lu=/^#[a-f0-9]{3}$|^#[a-f0-9]{6}$/i,cu=/^rgb\(/,hu=/^(\s+)?$/,uu=/^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Iv=/\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,Fn=/[\s,]+/,sc=/[MLHVCSQTAZ]/i;function Nv(){const i=this.attr("class");return i==null?[]:i.trim().split(Fn)}function Fv(i){return this.classes().indexOf(i)!==-1}function Bv(i){if(!this.hasClass(i)){const t=this.classes();t.push(i),this.attr("class",t.join(" "))}return this}function zv(i){return this.hasClass(i)&&this.attr("class",this.classes().filter(function(t){return t!==i}).join(" ")),this}function Ov(i){return this.hasClass(i)?this.removeClass(i):this.addClass(i)}Rt("Dom",{classes:Nv,hasClass:Fv,addClass:Bv,removeClass:zv,toggleClass:Ov});function Uv(i,t){const e={};if(arguments.length===0)return this.node.style.cssText.split(/\s*;\s*/).filter(function(n){return!!n.length}).forEach(function(n){const r=n.split(/\s*:\s*/);e[r[0]]=r[1]}),e;if(arguments.length<2){if(Array.isArray(i)){for(const n of i){const r=Ks(n);e[n]=this.node.style[r]}return e}if(typeof i=="string")return this.node.style[Ks(i)];if(typeof i=="object")for(const n in i)this.node.style[Ks(n)]=i[n]==null||hu.test(i[n])?"":i[n]}return arguments.length===2&&(this.node.style[Ks(i)]=t==null||hu.test(t)?"":t),this}function Hv(){return this.css("display","")}function kv(){return this.css("display","none")}function Gv(){return this.css("display")!=="none"}Rt("Dom",{css:Uv,show:Hv,hide:kv,visible:Gv});function Vv(i,t,e){if(i==null)return this.data(ec(hv(this.node.attributes,n=>n.nodeName.indexOf("data-")===0),n=>n.nodeName.slice(5)));if(i instanceof Array){const n={};for(const r of i)n[r]=this.data(r);return n}else if(typeof i=="object")for(t in i)this.data(t,i[t]);else if(arguments.length<2)try{return JSON.parse(this.attr("data-"+i))}catch{return this.attr("data-"+i)}else this.attr("data-"+i,t===null?null:e===!0||typeof t=="string"||typeof t=="number"?t:JSON.stringify(t));return this}Rt("Dom",{data:Vv});function Wv(i,t){if(typeof arguments[0]=="object")for(const e in i)this.remember(e,i[e]);else{if(arguments.length===1)return this.memory()[i];this.memory()[i]=t}return this}function qv(){if(arguments.length===0)this._memory={};else for(let i=arguments.length-1;i>=0;i--)delete this.memory()[arguments[i]];return this}function jv(){return this._memory=this._memory||{}}Rt("Dom",{remember:Wv,forget:qv,memory:jv});function Xv(i){return i.length===4?["#",i.substring(1,2),i.substring(1,2),i.substring(2,3),i.substring(2,3),i.substring(3,4),i.substring(3,4)].join(""):i}function $v(i){const t=Math.round(i),n=Math.max(0,Math.min(255,t)).toString(16);return n.length===1?"0"+n:n}function Xi(i,t){for(let e=t.length;e--;)if(i[t[e]]==null)return!1;return!0}function Yv(i,t){const e=Xi(i,"rgb")?{_a:i.r,_b:i.g,_c:i.b,_d:0,space:"rgb"}:Xi(i,"xyz")?{_a:i.x,_b:i.y,_c:i.z,_d:0,space:"xyz"}:Xi(i,"hsl")?{_a:i.h,_b:i.s,_c:i.l,_d:0,space:"hsl"}:Xi(i,"lab")?{_a:i.l,_b:i.a,_c:i.b,_d:0,space:"lab"}:Xi(i,"lch")?{_a:i.l,_b:i.c,_c:i.h,_d:0,space:"lch"}:Xi(i,"cmyk")?{_a:i.c,_b:i.m,_c:i.y,_d:i.k,space:"cmyk"}:{_a:0,_b:0,_c:0,space:"rgb"};return e.space=t||e.space,e}function Jv(i){return i==="lab"||i==="xyz"||i==="lch"}function Ua(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*(2/3-e)*6:i}class Yt{constructor(...t){this.init(...t)}static isColor(t){return t&&(t instanceof Yt||this.isRgb(t)||this.test(t))}static isRgb(t){return t&&typeof t.r=="number"&&typeof t.g=="number"&&typeof t.b=="number"}static random(t="vibrant",e,n){const{random:r,round:s,sin:o,PI:a}=Math;if(t==="vibrant"){const l=24*r()+57,c=(83-45)*r()+45,h=360*r();return new Yt(l,c,h,"lch")}else if(t==="sine"){e=e??r();const l=s(80*o(2*a*e/.5+.01)+150),c=s(50*o(2*a*e/.5+4.6)+200),h=s(100*o(2*a*e/.5+2.3)+150);return new Yt(l,c,h)}else if(t==="pastel"){const l=8*r()+86,c=(26-9)*r()+9,h=360*r();return new Yt(l,c,h,"lch")}else if(t==="dark"){const l=10+10*r(),c=(125-75)*r()+86,h=360*r();return new Yt(l,c,h,"lch")}else if(t==="rgb"){const l=255*r(),c=255*r(),h=255*r();return new Yt(l,c,h)}else if(t==="lab"){const l=100*r(),c=256*r()-128,h=256*r()-128;return new Yt(l,c,h,"lab")}else if(t==="grey"){const l=255*r();return new Yt(l,l,l)}else throw new Error("Unsupported random color mode")}static test(t){return typeof t=="string"&&(lu.test(t)||cu.test(t))}cmyk(){const{_a:t,_b:e,_c:n}=this.rgb(),[r,s,o]=[t,e,n].map(f=>f/255),a=Math.min(1-r,1-s,1-o);if(a===1)return new Yt(0,0,0,1,"cmyk");const l=(1-r-a)/(1-a),c=(1-s-a)/(1-a),h=(1-o-a)/(1-a);return new Yt(l,c,h,a,"cmyk")}hsl(){const{_a:t,_b:e,_c:n}=this.rgb(),[r,s,o]=[t,e,n].map(m=>m/255),a=Math.max(r,s,o),l=Math.min(r,s,o),c=(a+l)/2,h=a===l,u=a-l,f=h?0:c>.5?u/(2-a-l):u/(a+l),d=h?0:a===r?((s-o)/u+(s<o?6:0))/6:a===s?((o-r)/u+2)/6:a===o?((r-s)/u+4)/6:0;return new Yt(360*d,100*f,100*c,"hsl")}init(t=0,e=0,n=0,r=0,s="rgb"){if(t=t||0,this.space)for(const u in this.space)delete this[this.space[u]];if(typeof t=="number")s=typeof r=="string"?r:s,r=typeof r=="string"?0:r,Object.assign(this,{_a:t,_b:e,_c:n,_d:r,space:s});else if(t instanceof Array)this.space=e||(typeof t[3]=="string"?t[3]:t[4])||"rgb",Object.assign(this,{_a:t[0],_b:t[1],_c:t[2],_d:t[3]||0});else if(t instanceof Object){const u=Yv(t,e);Object.assign(this,u)}else if(typeof t=="string")if(cu.test(t)){const u=t.replace(Dv,""),[f,d,g]=Lv.exec(u).slice(1,4).map(m=>parseInt(m));Object.assign(this,{_a:f,_b:d,_c:g,_d:0,space:"rgb"})}else if(lu.test(t)){const u=m=>parseInt(m,16),[,f,d,g]=Cv.exec(Xv(t)).map(u);Object.assign(this,{_a:f,_b:d,_c:g,_d:0,space:"rgb"})}else throw Error("Unsupported string format, can't construct Color");const{_a:o,_b:a,_c:l,_d:c}=this,h=this.space==="rgb"?{r:o,g:a,b:l}:this.space==="xyz"?{x:o,y:a,z:l}:this.space==="hsl"?{h:o,s:a,l}:this.space==="lab"?{l:o,a,b:l}:this.space==="lch"?{l:o,c:a,h:l}:this.space==="cmyk"?{c:o,m:a,y:l,k:c}:{};Object.assign(this,h)}lab(){const{x:t,y:e,z:n}=this.xyz(),r=116*e-16,s=500*(t-e),o=200*(e-n);return new Yt(r,s,o,"lab")}lch(){const{l:t,a:e,b:n}=this.lab(),r=Math.sqrt(e**2+n**2);let s=180*Math.atan2(n,e)/Math.PI;return s<0&&(s*=-1,s=360-s),new Yt(t,r,s,"lch")}rgb(){if(this.space==="rgb")return this;if(Jv(this.space)){let{x:t,y:e,z:n}=this;if(this.space==="lab"||this.space==="lch"){let{l:d,a:g,b:m}=this;if(this.space==="lch"){const{c:C,h:L}=this,_=Math.PI/180;g=C*Math.cos(_*L),m=C*Math.sin(_*L)}const p=(d+16)/116,x=g/500+p,w=p-m/200,T=16/116,E=.008856,b=7.787;t=.95047*(x**3>E?x**3:(x-T)/b),e=1*(p**3>E?p**3:(p-T)/b),n=1.08883*(w**3>E?w**3:(w-T)/b)}const r=t*3.2406+e*-1.5372+n*-.4986,s=t*-.9689+e*1.8758+n*.0415,o=t*.0557+e*-.204+n*1.057,a=Math.pow,l=.0031308,c=r>l?1.055*a(r,1/2.4)-.055:12.92*r,h=s>l?1.055*a(s,1/2.4)-.055:12.92*s,u=o>l?1.055*a(o,1/2.4)-.055:12.92*o;return new Yt(255*c,255*h,255*u)}else if(this.space==="hsl"){let{h:t,s:e,l:n}=this;if(t/=360,e/=100,n/=100,e===0)return n*=255,new Yt(n,n,n);const r=n<.5?n*(1+e):n+e-n*e,s=2*n-r,o=255*Ua(s,r,t+1/3),a=255*Ua(s,r,t),l=255*Ua(s,r,t-1/3);return new Yt(o,a,l)}else if(this.space==="cmyk"){const{c:t,m:e,y:n,k:r}=this,s=255*(1-Math.min(1,t*(1-r)+r)),o=255*(1-Math.min(1,e*(1-r)+r)),a=255*(1-Math.min(1,n*(1-r)+r));return new Yt(s,o,a)}else return this}toArray(){const{_a:t,_b:e,_c:n,_d:r,space:s}=this;return[t,e,n,r,s]}toHex(){const[t,e,n]=this._clamped().map($v);return`#${t}${e}${n}`}toRgb(){const[t,e,n]=this._clamped();return`rgb(${t},${e},${n})`}toString(){return this.toHex()}xyz(){const{_a:t,_b:e,_c:n}=this.rgb(),[r,s,o]=[t,e,n].map(x=>x/255),a=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92,l=s>.04045?Math.pow((s+.055)/1.055,2.4):s/12.92,c=o>.04045?Math.pow((o+.055)/1.055,2.4):o/12.92,h=(a*.4124+l*.3576+c*.1805)/.95047,u=(a*.2126+l*.7152+c*.0722)/1,f=(a*.0193+l*.1192+c*.9505)/1.08883,d=h>.008856?Math.pow(h,1/3):7.787*h+16/116,g=u>.008856?Math.pow(u,1/3):7.787*u+16/116,m=f>.008856?Math.pow(f,1/3):7.787*f+16/116;return new Yt(d,g,m,"xyz")}_clamped(){const{_a:t,_b:e,_c:n}=this.rgb(),{max:r,min:s,round:o}=Math,a=l=>r(0,s(o(l),255));return[t,e,n].map(a)}}class fe{constructor(...t){this.init(...t)}clone(){return new fe(this)}init(t,e){const n={x:0,y:0},r=Array.isArray(t)?{x:t[0],y:t[1]}:typeof t=="object"?{x:t.x,y:t.y}:{x:t,y:e};return this.x=r.x==null?n.x:r.x,this.y=r.y==null?n.y:r.y,this}toArray(){return[this.x,this.y]}transform(t){return this.clone().transformO(t)}transformO(t){gt.isMatrixLike(t)||(t=new gt(t));const{x:e,y:n}=this;return this.x=t.a*e+t.c*n+t.e,this.y=t.b*e+t.d*n+t.f,this}}function Zv(i,t){return new fe(i,t).transform(this.screenCTM().inverse())}function $i(i,t,e){return Math.abs(t-i)<(e||1e-6)}class gt{constructor(...t){this.init(...t)}static formatTransforms(t){const e=t.flip==="both"||t.flip===!0,n=t.flip&&(e||t.flip==="x")?-1:1,r=t.flip&&(e||t.flip==="y")?-1:1,s=t.skew&&t.skew.length?t.skew[0]:isFinite(t.skew)?t.skew:isFinite(t.skewX)?t.skewX:0,o=t.skew&&t.skew.length?t.skew[1]:isFinite(t.skew)?t.skew:isFinite(t.skewY)?t.skewY:0,a=t.scale&&t.scale.length?t.scale[0]*n:isFinite(t.scale)?t.scale*n:isFinite(t.scaleX)?t.scaleX*n:n,l=t.scale&&t.scale.length?t.scale[1]*r:isFinite(t.scale)?t.scale*r:isFinite(t.scaleY)?t.scaleY*r:r,c=t.shear||0,h=t.rotate||t.theta||0,u=new fe(t.origin||t.around||t.ox||t.originX,t.oy||t.originY),f=u.x,d=u.y,g=new fe(t.position||t.px||t.positionX||NaN,t.py||t.positionY||NaN),m=g.x,p=g.y,x=new fe(t.translate||t.tx||t.translateX,t.ty||t.translateY),w=x.x,T=x.y,E=new fe(t.relative||t.rx||t.relativeX,t.ry||t.relativeY),b=E.x,C=E.y;return{scaleX:a,scaleY:l,skewX:s,skewY:o,shear:c,theta:h,rx:b,ry:C,tx:w,ty:T,ox:f,oy:d,px:m,py:p}}static fromArray(t){return{a:t[0],b:t[1],c:t[2],d:t[3],e:t[4],f:t[5]}}static isMatrixLike(t){return t.a!=null||t.b!=null||t.c!=null||t.d!=null||t.e!=null||t.f!=null}static matrixMultiply(t,e,n){const r=t.a*e.a+t.c*e.b,s=t.b*e.a+t.d*e.b,o=t.a*e.c+t.c*e.d,a=t.b*e.c+t.d*e.d,l=t.e+t.a*e.e+t.c*e.f,c=t.f+t.b*e.e+t.d*e.f;return n.a=r,n.b=s,n.c=o,n.d=a,n.e=l,n.f=c,n}around(t,e,n){return this.clone().aroundO(t,e,n)}aroundO(t,e,n){const r=t||0,s=e||0;return this.translateO(-r,-s).lmultiplyO(n).translateO(r,s)}clone(){return new gt(this)}decompose(t=0,e=0){const n=this.a,r=this.b,s=this.c,o=this.d,a=this.e,l=this.f,c=n*o-r*s,h=c>0?1:-1,u=h*Math.sqrt(n*n+r*r),f=Math.atan2(h*r,h*n),d=180/Math.PI*f,g=Math.cos(f),m=Math.sin(f),p=(n*s+r*o)/c,x=s*u/(p*n-r)||o*u/(p*r+n),w=a-t+t*g*u+e*(p*g*u-m*x),T=l-e+t*m*u+e*(p*m*u+g*x);return{scaleX:u,scaleY:x,shear:p,rotate:d,translateX:w,translateY:T,originX:t,originY:e,a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f}}equals(t){if(t===this)return!0;const e=new gt(t);return $i(this.a,e.a)&&$i(this.b,e.b)&&$i(this.c,e.c)&&$i(this.d,e.d)&&$i(this.e,e.e)&&$i(this.f,e.f)}flip(t,e){return this.clone().flipO(t,e)}flipO(t,e){return t==="x"?this.scaleO(-1,1,e,0):t==="y"?this.scaleO(1,-1,0,e):this.scaleO(-1,-1,t,e||t)}init(t){const e=gt.fromArray([1,0,0,1,0,0]);return t=t instanceof bn?t.matrixify():typeof t=="string"?gt.fromArray(t.split(Fn).map(parseFloat)):Array.isArray(t)?gt.fromArray(t):typeof t=="object"&&gt.isMatrixLike(t)?t:typeof t=="object"?new gt().transform(t):arguments.length===6?gt.fromArray([].slice.call(arguments)):e,this.a=t.a!=null?t.a:e.a,this.b=t.b!=null?t.b:e.b,this.c=t.c!=null?t.c:e.c,this.d=t.d!=null?t.d:e.d,this.e=t.e!=null?t.e:e.e,this.f=t.f!=null?t.f:e.f,this}inverse(){return this.clone().inverseO()}inverseO(){const t=this.a,e=this.b,n=this.c,r=this.d,s=this.e,o=this.f,a=t*r-e*n;if(!a)throw new Error("Cannot invert "+this);const l=r/a,c=-e/a,h=-n/a,u=t/a,f=-(l*s+h*o),d=-(c*s+u*o);return this.a=l,this.b=c,this.c=h,this.d=u,this.e=f,this.f=d,this}lmultiply(t){return this.clone().lmultiplyO(t)}lmultiplyO(t){const e=this,n=t instanceof gt?t:new gt(t);return gt.matrixMultiply(n,e,this)}multiply(t){return this.clone().multiplyO(t)}multiplyO(t){const e=this,n=t instanceof gt?t:new gt(t);return gt.matrixMultiply(e,n,this)}rotate(t,e,n){return this.clone().rotateO(t,e,n)}rotateO(t,e=0,n=0){t=za(t);const r=Math.cos(t),s=Math.sin(t),{a:o,b:a,c:l,d:c,e:h,f:u}=this;return this.a=o*r-a*s,this.b=a*r+o*s,this.c=l*r-c*s,this.d=c*r+l*s,this.e=h*r-u*s+n*s-e*r+e,this.f=u*r+h*s-e*s-n*r+n,this}scale(t,e,n,r){return this.clone().scaleO(...arguments)}scaleO(t,e=t,n=0,r=0){arguments.length===3&&(r=n,n=e,e=t);const{a:s,b:o,c:a,d:l,e:c,f:h}=this;return this.a=s*t,this.b=o*e,this.c=a*t,this.d=l*e,this.e=c*t-n*t+n,this.f=h*e-r*e+r,this}shear(t,e,n){return this.clone().shearO(t,e,n)}shearO(t,e=0,n=0){const{a:r,b:s,c:o,d:a,e:l,f:c}=this;return this.a=r+s*t,this.c=o+a*t,this.e=l+c*t-n*t,this}skew(t,e,n,r){return this.clone().skewO(...arguments)}skewO(t,e=t,n=0,r=0){arguments.length===3&&(r=n,n=e,e=t),t=za(t),e=za(e);const s=Math.tan(t),o=Math.tan(e),{a,b:l,c,d:h,e:u,f}=this;return this.a=a+l*s,this.b=l+a*o,this.c=c+h*s,this.d=h+c*o,this.e=u+f*s-r*s,this.f=f+u*o-n*o,this}skewX(t,e,n){return this.skew(t,0,e,n)}skewY(t,e,n){return this.skew(0,t,e,n)}toArray(){return[this.a,this.b,this.c,this.d,this.e,this.f]}toString(){return"matrix("+this.a+","+this.b+","+this.c+","+this.d+","+this.e+","+this.f+")"}transform(t){if(gt.isMatrixLike(t))return new gt(t).multiplyO(this);const e=gt.formatTransforms(t),n=this,{x:r,y:s}=new fe(e.ox,e.oy).transform(n),o=new gt().translateO(e.rx,e.ry).lmultiplyO(n).translateO(-r,-s).scaleO(e.scaleX,e.scaleY).skewO(e.skewX,e.skewY).shearO(e.shear).rotateO(e.theta).translateO(r,s);if(isFinite(e.px)||isFinite(e.py)){const a=new fe(r,s).transform(o),l=isFinite(e.px)?e.px-a.x:0,c=isFinite(e.py)?e.py-a.y:0;o.translateO(l,c)}return o.translateO(e.tx,e.ty),o}translate(t,e){return this.clone().translateO(t,e)}translateO(t,e){return this.e+=t||0,this.f+=e||0,this}valueOf(){return{a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f}}}function Kv(){return new gt(this.node.getCTM())}function Qv(){if(typeof this.isRoot=="function"&&!this.isRoot()){const i=this.rect(1,1),t=i.node.getScreenCTM();return i.remove(),new gt(t)}return new gt(this.node.getScreenCTM())}Ht(gt,"Matrix");function jn(){if(!jn.nodes){const i=Pe().size(2,0);i.node.style.cssText=["opacity: 0","position: absolute","left: -100%","top: -100%","overflow: hidden"].join(";"),i.attr("focusable","false"),i.attr("aria-hidden","true");const t=i.path().node;jn.nodes={svg:i,path:t}}if(!jn.nodes.svg.node.parentNode){const i=Vt.document.body||Vt.document.documentElement;jn.nodes.svg.addTo(i)}return jn.nodes}function Nf(i){return!i.width&&!i.height&&!i.x&&!i.y}function tw(i){return i===Vt.document||(Vt.document.documentElement.contains||function(t){for(;t.parentNode;)t=t.parentNode;return t===Vt.document}).call(Vt.document.documentElement,i)}class Ce{constructor(...t){this.init(...t)}addOffset(){return this.x+=Vt.window.pageXOffset,this.y+=Vt.window.pageYOffset,new Ce(this)}init(t){const e=[0,0,0,0];return t=typeof t=="string"?t.split(Fn).map(parseFloat):Array.isArray(t)?t:typeof t=="object"?[t.left!=null?t.left:t.x,t.top!=null?t.top:t.y,t.width,t.height]:arguments.length===4?[].slice.call(arguments):e,this.x=t[0]||0,this.y=t[1]||0,this.width=this.w=t[2]||0,this.height=this.h=t[3]||0,this.x2=this.x+this.w,this.y2=this.y+this.h,this.cx=this.x+this.w/2,this.cy=this.y+this.h/2,this}isNulled(){return Nf(this)}merge(t){const e=Math.min(this.x,t.x),n=Math.min(this.y,t.y),r=Math.max(this.x+this.width,t.x+t.width)-e,s=Math.max(this.y+this.height,t.y+t.height)-n;return new Ce(e,n,r,s)}toArray(){return[this.x,this.y,this.width,this.height]}toString(){return this.x+" "+this.y+" "+this.width+" "+this.height}transform(t){t instanceof gt||(t=new gt(t));let e=1/0,n=-1/0,r=1/0,s=-1/0;return[new fe(this.x,this.y),new fe(this.x2,this.y),new fe(this.x,this.y2),new fe(this.x2,this.y2)].forEach(function(a){a=a.transform(t),e=Math.min(e,a.x),n=Math.max(n,a.x),r=Math.min(r,a.y),s=Math.max(s,a.y)}),new Ce(e,r,n-e,s-r)}}function Ff(i,t,e){let n;try{if(n=t(i.node),Nf(n)&&!tw(i.node))throw new Error("Element not in the dom")}catch{n=e(i)}return n}function ew(){const e=Ff(this,r=>r.getBBox(),r=>{try{const s=r.clone().addTo(jn().svg).show(),o=s.node.getBBox();return s.remove(),o}catch(s){throw new Error(`Getting bbox of element "${r.node.nodeName}" is not possible: ${s.toString()}`)}});return new Ce(e)}function nw(i){const n=Ff(this,s=>s.getBoundingClientRect(),s=>{throw new Error(`Getting rbox of element "${s.node.nodeName}" is not possible`)}),r=new Ce(n);return i?r.transform(i.screenCTM().inverseO()):r.addOffset()}function iw(i,t){const e=this.bbox();return i>e.x&&t>e.y&&i<e.x+e.width&&t<e.y+e.height}Rt({viewbox:{viewbox(i,t,e,n){return i==null?new Ce(this.attr("viewBox")):this.attr("viewBox",new Ce(i,t,e,n))},zoom(i,t){let{width:e,height:n}=this.attr(["width","height"]);if((!e&&!n||typeof e=="string"||typeof n=="string")&&(e=this.node.clientWidth,n=this.node.clientHeight),!e||!n)throw new Error("Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element");const r=this.viewbox(),s=e/r.width,o=n/r.height,a=Math.min(s,o);if(i==null)return a;let l=a/i;l===1/0&&(l=Number.MAX_SAFE_INTEGER/100),t=t||new fe(e/2/s+r.x,n/2/o+r.y);const c=new Ce(r).transform(new gt({scale:l,origin:t}));return this.viewbox(c)}}});Ht(Ce,"Box");class xi extends Array{constructor(t=[],...e){if(super(t,...e),typeof t=="number")return this;this.length=0,this.push(...t)}}zt([xi],{each(i,...t){return typeof i=="function"?this.map((e,n,r)=>i.call(e,e,n,r)):this.map(e=>e[i](...t))},toArray(){return Array.prototype.concat.apply([],this)}});const rw=["toArray","constructor","each"];xi.extend=function(i){i=i.reduce((t,e)=>(rw.includes(e)||e[0]==="_"||(t[e]=function(...n){return this.each(e,...n)}),t),{}),zt([xi],i)};function yr(i,t){return new xi(ec((t||Vt.document).querySelectorAll(i),function(e){return Ye(e)}))}function sw(i){return yr(i,this.node)}function ow(i){return Ye(this.node.querySelector(i))}let aw=0;const Bf={};function zf(i){let t=i.getEventHolder();return t===Vt.window&&(t=Bf),t.events||(t.events={}),t.events}function oc(i){return i.getEventTarget()}function lw(i){let t=i.getEventHolder();t===Vt.window&&(t=Bf),t.events&&(t.events={})}function cl(i,t,e,n,r){const s=e.bind(n||i),o=Pe(i),a=zf(o),l=oc(o);t=Array.isArray(t)?t:t.split(Fn),e._svgjsListenerId||(e._svgjsListenerId=++aw),t.forEach(function(c){const h=c.split(".")[0],u=c.split(".")[1]||"*";a[h]=a[h]||{},a[h][u]=a[h][u]||{},a[h][u][e._svgjsListenerId]=s,l.addEventListener(h,s,r||!1)})}function tr(i,t,e,n){const r=Pe(i),s=zf(r),o=oc(r);typeof e=="function"&&(e=e._svgjsListenerId,!e)||(t=Array.isArray(t)?t:(t||"").split(Fn),t.forEach(function(a){const l=a&&a.split(".")[0],c=a&&a.split(".")[1];let h,u;if(e)s[l]&&s[l][c||"*"]&&(o.removeEventListener(l,s[l][c||"*"][e],n||!1),delete s[l][c||"*"][e]);else if(l&&c){if(s[l]&&s[l][c]){for(u in s[l][c])tr(o,[l,c].join("."),u);delete s[l][c]}}else if(c)for(a in s)for(h in s[a])c===h&&tr(o,[a,c].join("."));else if(l){if(s[l]){for(h in s[l])tr(o,[l,h].join("."));delete s[l]}}else{for(a in s)tr(o,a);lw(r)}}))}function cw(i,t,e,n){const r=oc(i);return t instanceof Vt.window.Event||(t=new Vt.window.CustomEvent(t,{detail:e,cancelable:!0,...n})),r.dispatchEvent(t),t}class as extends ic{addEventListener(){}dispatch(t,e,n){return cw(this,t,e,n)}dispatchEvent(t){const e=this.getEventHolder().events;if(!e)return!0;const n=e[t.type];for(const r in n)for(const s in n[r])n[r][s](t);return!t.defaultPrevented}fire(t,e,n){return this.dispatch(t,e,n),this}getEventHolder(){return this}getEventTarget(){return this}off(t,e,n){return tr(this,t,e,n),this}on(t,e,n,r){return cl(this,t,e,n,r),this}removeEventListener(){}}Ht(as,"EventTarget");function fu(){}const Nr={duration:400,ease:">",delay:0},hw={"fill-opacity":1,"stroke-opacity":1,"stroke-width":0,"stroke-linejoin":"miter","stroke-linecap":"butt",fill:"#000000",stroke:"#000000",opacity:1,x:0,y:0,cx:0,cy:0,width:0,height:0,r:0,rx:0,ry:0,offset:0,"stop-opacity":1,"stop-color":"#000000","text-anchor":"start"};class ur extends Array{constructor(...t){super(...t),this.init(...t)}clone(){return new this.constructor(this)}init(t){return typeof t=="number"?this:(this.length=0,this.push(...this.parse(t)),this)}parse(t=[]){return t instanceof Array?t:t.trim().split(Fn).map(parseFloat)}toArray(){return Array.prototype.concat.apply([],this)}toSet(){return new Set(this)}toString(){return this.join(" ")}valueOf(){const t=[];return t.push(...this),t}}class At{constructor(...t){this.init(...t)}convert(t){return new At(this.value,t)}divide(t){return t=new At(t),new At(this/t,this.unit||t.unit)}init(t,e){return e=Array.isArray(t)?t[1]:e,t=Array.isArray(t)?t[0]:t,this.value=0,this.unit=e||"",typeof t=="number"?this.value=isNaN(t)?0:isFinite(t)?t:t<0?-34e37:34e37:typeof t=="string"?(e=t.match(If),e&&(this.value=parseFloat(e[1]),e[5]==="%"?this.value/=100:e[5]==="s"&&(this.value*=1e3),this.unit=e[5])):t instanceof At&&(this.value=t.valueOf(),this.unit=t.unit),this}minus(t){return t=new At(t),new At(this-t,this.unit||t.unit)}plus(t){return t=new At(t),new At(this+t,this.unit||t.unit)}times(t){return t=new At(t),new At(this*t,this.unit||t.unit)}toArray(){return[this.value,this.unit]}toJSON(){return this.toString()}toString(){return(this.unit==="%"?~~(this.value*1e8)/1e6:this.unit==="s"?this.value/1e3:this.value)+this.unit}valueOf(){return this.value}}const Of=[];function uw(i){Of.push(i)}function fw(i,t,e){if(i==null){i={},t=this.node.attributes;for(const n of t)i[n.nodeName]=uu.test(n.nodeValue)?parseFloat(n.nodeValue):n.nodeValue;return i}else{if(i instanceof Array)return i.reduce((n,r)=>(n[r]=this.attr(r),n),{});if(typeof i=="object"&&i.constructor===Object)for(t in i)this.attr(t,i[t]);else if(t===null)this.node.removeAttribute(i);else{if(t==null)return t=this.node.getAttribute(i),t==null?hw[i]:uu.test(t)?parseFloat(t):t;t=Of.reduce((n,r)=>r(i,n,this),t),typeof t=="number"?t=new At(t):Yt.isColor(t)?t=new Yt(t):t.constructor===Array&&(t=new ur(t)),i==="leading"?this.leading&&this.leading(t):typeof e=="string"?this.node.setAttributeNS(e,i,t.toString()):this.node.setAttribute(i,t.toString()),this.rebuild&&(i==="font-size"||i==="x")&&this.rebuild()}}return this}class Qn extends as{constructor(t,e){super(),this.node=t,this.type=t.nodeName,e&&t!==e&&this.attr(e)}add(t,e){return t=Pe(t),t.removeNamespace&&this.node instanceof Vt.window.SVGElement&&t.removeNamespace(),e==null?this.node.appendChild(t.node):t.node!==this.node.childNodes[e]&&this.node.insertBefore(t.node,this.node.childNodes[e]),this}addTo(t,e){return Pe(t).put(this,e)}children(){return new xi(ec(this.node.children,function(t){return Ye(t)}))}clear(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return this}clone(t=!0){return this.writeDataToDom(),new this.constructor(Df(this.node.cloneNode(t)))}each(t,e){const n=this.children();let r,s;for(r=0,s=n.length;r<s;r++)t.apply(n[r],[r,n]),e&&n[r].each(t,e);return this}element(t,e){return this.put(new Qn(Yr(t),e))}first(){return Ye(this.node.firstChild)}get(t){return Ye(this.node.childNodes[t])}getEventHolder(){return this.node}getEventTarget(){return this.node}has(t){return this.index(t)>=0}html(t,e){return this.xml(t,e,fv)}id(t){return typeof t>"u"&&!this.node.id&&(this.node.id=Pf(this.type)),this.attr("id",t)}index(t){return[].slice.call(this.node.childNodes).indexOf(t.node)}last(){return Ye(this.node.lastChild)}matches(t){const e=this.node,n=e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector||null;return n&&n.call(e,t)}parent(t){let e=this;if(!e.node.parentNode)return null;if(e=Ye(e.node.parentNode),!t)return e;do if(typeof t=="string"?e.matches(t):e instanceof t)return e;while(e=Ye(e.node.parentNode));return e}put(t,e){return t=Pe(t),this.add(t,e),t}putIn(t,e){return Pe(t).add(this,e)}remove(){return this.parent()&&this.parent().removeElement(this),this}removeElement(t){return this.node.removeChild(t.node),this}replace(t){return t=Pe(t),this.node.parentNode&&this.node.parentNode.replaceChild(t.node,this.node),t}round(t=2,e=null){const n=10**t,r=this.attr(e);for(const s in r)typeof r[s]=="number"&&(r[s]=Math.round(r[s]*n)/n);return this.attr(r),this}svg(t,e){return this.xml(t,e,nc)}toString(){return this.id()}words(t){return this.node.textContent=t,this}wrap(t){const e=this.parent();if(!e)return this.addTo(t);const n=e.index(this);return e.put(t,n).put(this)}writeDataToDom(){return this.each(function(){this.writeDataToDom()}),this}xml(t,e,n){if(typeof t=="boolean"&&(n=e,e=t,t=null),t==null||typeof t=="function"){e=e??!0,this.writeDataToDom();let a=this;if(t!=null){if(a=Ye(a.node.cloneNode(!0)),e){const l=t(a);if(a=l||a,l===!1)return""}a.each(function(){const l=t(this),c=l||this;l===!1?this.remove():l&&this!==c&&this.replace(c)},!0)}return e?a.node.outerHTML:a.node.innerHTML}e=e??!1;const r=Yr("wrapper",n),s=Vt.document.createDocumentFragment();r.innerHTML=t;for(let a=r.children.length;a--;)s.appendChild(r.firstElementChild);const o=this.parent();return e?this.replace(s)&&o:this.add(s)}}zt(Qn,{attr:fw,find:sw,findOne:ow});Ht(Qn,"Dom");class bn extends Qn{constructor(t,e){super(t,e),this.dom={},this.node.instance=this,t.hasAttribute("svgjs:data")&&this.setData(JSON.parse(t.getAttribute("svgjs:data"))||{})}center(t,e){return this.cx(t).cy(e)}cx(t){return t==null?this.x()+this.width()/2:this.x(t-this.width()/2)}cy(t){return t==null?this.y()+this.height()/2:this.y(t-this.height()/2)}defs(){const t=this.root();return t&&t.defs()}dmove(t,e){return this.dx(t).dy(e)}dx(t=0){return this.x(new At(t).plus(this.x()))}dy(t=0){return this.y(new At(t).plus(this.y()))}getEventHolder(){return this}height(t){return this.attr("height",t)}move(t,e){return this.x(t).y(e)}parents(t=this.root()){const e=typeof t=="string";e||(t=Pe(t));const n=new xi;let r=this;for(;(r=r.parent())&&r.node!==Vt.document&&r.nodeName!=="#document-fragment"&&(n.push(r),!(!e&&r.node===t.node||e&&r.matches(t)));)if(r.node===this.root().node)return null;return n}reference(t){if(t=this.attr(t),!t)return null;const e=(t+"").match(Rv);return e?Pe(e[1]):null}root(){const t=this.parent(pv(rc));return t&&t.root()}setData(t){return this.dom=t,this}size(t,e){const n=_r(this,t,e);return this.width(new At(n.width)).height(new At(n.height))}width(t){return this.attr("width",t)}writeDataToDom(){return this.node.removeAttribute("svgjs:data"),Object.keys(this.dom).length&&this.node.setAttribute("svgjs:data",JSON.stringify(this.dom)),super.writeDataToDom()}x(t){return this.attr("x",t)}y(t){return this.attr("y",t)}}zt(bn,{bbox:ew,rbox:nw,inside:iw,point:Zv,ctm:Kv,screenCTM:Qv});Ht(bn,"Element");const Pr={stroke:["color","width","opacity","linecap","linejoin","miterlimit","dasharray","dashoffset"],fill:["color","opacity","rule"],prefix:function(i,t){return t==="color"?i:i+"-"+t}};["fill","stroke"].forEach(function(i){const t={};let e;t[i]=function(n){if(typeof n>"u")return this.attr(i);if(typeof n=="string"||n instanceof Yt||Yt.isRgb(n)||n instanceof bn)this.attr(i,n);else for(e=Pr[i].length-1;e>=0;e--)n[Pr[i][e]]!=null&&this.attr(Pr.prefix(i,Pr[i][e]),n[Pr[i][e]]);return this},Rt(["Element","Runner"],t)});Rt(["Element","Runner"],{matrix:function(i,t,e,n,r,s){return i==null?new gt(this):this.attr("transform",new gt(i,t,e,n,r,s))},rotate:function(i,t,e){return this.transform({rotate:i,ox:t,oy:e},!0)},skew:function(i,t,e,n){return arguments.length===1||arguments.length===3?this.transform({skew:i,ox:t,oy:e},!0):this.transform({skew:[i,t],ox:e,oy:n},!0)},shear:function(i,t,e){return this.transform({shear:i,ox:t,oy:e},!0)},scale:function(i,t,e,n){return arguments.length===1||arguments.length===3?this.transform({scale:i,ox:t,oy:e},!0):this.transform({scale:[i,t],ox:e,oy:n},!0)},translate:function(i,t){return this.transform({translate:[i,t]},!0)},relative:function(i,t){return this.transform({relative:[i,t]},!0)},flip:function(i="both",t="center"){return"xybothtrue".indexOf(i)===-1&&(t=i,i="both"),this.transform({flip:i,origin:t},!0)},opacity:function(i){return this.attr("opacity",i)}});Rt("radius",{radius:function(i,t=i){return(this._element||this).type==="radialGradient"?this.attr("r",new At(i)):this.rx(i).ry(t)}});Rt("Path",{length:function(){return this.node.getTotalLength()},pointAt:function(i){return new fe(this.node.getPointAtLength(i))}});Rt(["Element","Runner"],{font:function(i,t){if(typeof i=="object"){for(t in i)this.font(t,i[t]);return this}return i==="leading"?this.leading(t):i==="anchor"?this.attr("text-anchor",t):i==="size"||i==="family"||i==="weight"||i==="stretch"||i==="variant"||i==="style"?this.attr("font-"+i,t):this.attr(i,t)}});const dw=["click","dblclick","mousedown","mouseup","mouseover","mouseout","mousemove","mouseenter","mouseleave","touchstart","touchmove","touchleave","touchend","touchcancel"].reduce(function(i,t){const e=function(n){return n===null?this.off(t):this.on(t,n),this};return i[t]=e,i},{});Rt("Element",dw);function pw(){return this.attr("transform",null)}function mw(){return(this.attr("transform")||"").split(Pv).slice(0,-1).map(function(t){const e=t.trim().split("(");return[e[0],e[1].split(Fn).map(function(n){return parseFloat(n)})]}).reverse().reduce(function(t,e){return e[0]==="matrix"?t.lmultiply(gt.fromArray(e[1])):t[e[0]].apply(t,e[1])},new gt)}function gw(i,t){if(this===i)return this;const e=this.screenCTM(),n=i.screenCTM().inverse();return this.addTo(i,t).untransform().transform(n.multiply(e)),this}function xw(i){return this.toParent(this.root(),i)}function _w(i,t){if(i==null||typeof i=="string"){const r=new gt(this).decompose();return i==null?r:r[i]}gt.isMatrixLike(i)||(i={...i,origin:ll(i,this)});const e=t===!0?this:t||!1,n=new gt(e).transform(i);return this.attr("transform",n)}Rt("Element",{untransform:pw,matrixify:mw,toParent:gw,toRoot:xw,transform:_w});class He extends bn{flatten(t=this,e){return this.each(function(){if(this instanceof He)return this.flatten().ungroup()}),this}ungroup(t=this.parent(),e=t.index(this)){return e=e===-1?t.children().length:e,this.each(function(n,r){return r[r.length-n-1].toParent(t,e)}),this.remove()}}Ht(He,"Container");class ac extends He{constructor(t,e=t){super(oe("defs",t),e)}flatten(){return this}ungroup(){return this}}Ht(ac,"Defs");class Xe extends bn{}Ht(Xe,"Shape");function lc(i){return this.attr("rx",i)}function cc(i){return this.attr("ry",i)}function Uf(i){return i==null?this.cx()-this.rx():this.cx(i+this.rx())}function Hf(i){return i==null?this.cy()-this.ry():this.cy(i+this.ry())}function kf(i){return this.attr("cx",i)}function Gf(i){return this.attr("cy",i)}function Vf(i){return i==null?this.rx()*2:this.rx(new At(i).divide(2))}function Wf(i){return i==null?this.ry()*2:this.ry(new At(i).divide(2))}var yw=Object.freeze(Object.defineProperty({__proto__:null,rx:lc,ry:cc,x:Uf,y:Hf,cx:kf,cy:Gf,width:Vf,height:Wf},Symbol.toStringTag,{value:"Module"}));class Oo extends Xe{constructor(t,e=t){super(oe("ellipse",t),e)}size(t,e){const n=_r(this,t,e);return this.rx(new At(n.width).divide(2)).ry(new At(n.height).divide(2))}}zt(Oo,yw);Rt("Container",{ellipse:se(function(i=0,t=i){return this.put(new Oo).size(i,t).move(0,0)})});Ht(Oo,"Ellipse");class qf extends Qn{constructor(t=Vt.document.createDocumentFragment()){super(t)}xml(t,e,n){if(typeof t=="boolean"&&(n=e,e=t,t=null),t==null||typeof t=="function"){const r=new Qn(Yr("wrapper",n));return r.add(this.node.cloneNode(!0)),r.xml(!1,n)}return super.xml(t,!1,n)}}Ht(qf,"Fragment");function jf(i,t){return(this._element||this).type==="radialGradient"?this.attr({fx:new At(i),fy:new At(t)}):this.attr({x1:new At(i),y1:new At(t)})}function Xf(i,t){return(this._element||this).type==="radialGradient"?this.attr({cx:new At(i),cy:new At(t)}):this.attr({x2:new At(i),y2:new At(t)})}var vw=Object.freeze(Object.defineProperty({__proto__:null,from:jf,to:Xf},Symbol.toStringTag,{value:"Module"}));class ls extends He{constructor(t,e){super(oe(t+"Gradient",typeof t=="string"?null:t),e)}attr(t,e,n){return t==="transform"&&(t="gradientTransform"),super.attr(t,e,n)}bbox(){return new Ce}targets(){return yr('svg [fill*="'+this.id()+'"]')}toString(){return this.url()}update(t){return this.clear(),typeof t=="function"&&t.call(this,this),this}url(){return'url("#'+this.id()+'")'}}zt(ls,vw);Rt({Container:{gradient(...i){return this.defs().gradient(...i)}},Defs:{gradient:se(function(i,t){return this.put(new ls(i)).update(t)})}});Ht(ls,"Gradient");class Jr extends He{constructor(t,e=t){super(oe("pattern",t),e)}attr(t,e,n){return t==="transform"&&(t="patternTransform"),super.attr(t,e,n)}bbox(){return new Ce}targets(){return yr('svg [fill*="'+this.id()+'"]')}toString(){return this.url()}update(t){return this.clear(),typeof t=="function"&&t.call(this,this),this}url(){return'url("#'+this.id()+'")'}}Rt({Container:{pattern(...i){return this.defs().pattern(...i)}},Defs:{pattern:se(function(i,t,e){return this.put(new Jr).update(e).attr({x:0,y:0,width:i,height:t,patternUnits:"userSpaceOnUse"})})}});Ht(Jr,"Pattern");class Uo extends Xe{constructor(t,e=t){super(oe("image",t),e)}load(t,e){if(!t)return this;const n=new Vt.window.Image;return cl(n,"load",function(r){const s=this.parent(Jr);this.width()===0&&this.height()===0&&this.size(n.width,n.height),s instanceof Jr&&s.width()===0&&s.height()===0&&s.size(this.width(),this.height()),typeof e=="function"&&e.call(this,r)},this),cl(n,"load error",function(){tr(n)}),this.attr("href",n.src=t,os)}}uw(function(i,t,e){return(i==="fill"||i==="stroke")&&Iv.test(t)&&(t=e.root().defs().image(t)),t instanceof Uo&&(t=e.root().defs().pattern(0,0,n=>{n.add(t)})),t});Rt({Container:{image:se(function(i,t){return this.put(new Uo).size(0,0).load(i,t)})}});Ht(Uo,"Image");class ti extends ur{bbox(){let t=-1/0,e=-1/0,n=1/0,r=1/0;return this.forEach(function(s){t=Math.max(s[0],t),e=Math.max(s[1],e),n=Math.min(s[0],n),r=Math.min(s[1],r)}),new Ce(n,r,t-n,e-r)}move(t,e){const n=this.bbox();if(t-=n.x,e-=n.y,!isNaN(t)&&!isNaN(e))for(let r=this.length-1;r>=0;r--)this[r]=[this[r][0]+t,this[r][1]+e];return this}parse(t=[0,0]){const e=[];t instanceof Array?t=Array.prototype.concat.apply([],t):t=t.trim().split(Fn).map(parseFloat),t.length%2!==0&&t.pop();for(let n=0,r=t.length;n<r;n=n+2)e.push([t[n],t[n+1]]);return e}size(t,e){let n;const r=this.bbox();for(n=this.length-1;n>=0;n--)r.width&&(this[n][0]=(this[n][0]-r.x)*t/r.width+r.x),r.height&&(this[n][1]=(this[n][1]-r.y)*e/r.height+r.y);return this}toLine(){return{x1:this[0][0],y1:this[0][1],x2:this[1][0],y2:this[1][1]}}toString(){const t=[];for(let e=0,n=this.length;e<n;e++)t.push(this[e].join(","));return t.join(" ")}transform(t){return this.clone().transformO(t)}transformO(t){gt.isMatrixLike(t)||(t=new gt(t));for(let e=this.length;e--;){const[n,r]=this[e];this[e][0]=t.a*n+t.c*r+t.e,this[e][1]=t.b*n+t.d*r+t.f}return this}}const ww=ti;function bw(i){return i==null?this.bbox().x:this.move(i,this.bbox().y)}function Mw(i){return i==null?this.bbox().y:this.move(this.bbox().x,i)}function Sw(i){const t=this.bbox();return i==null?t.width:this.size(i,t.height)}function Ew(i){const t=this.bbox();return i==null?t.height:this.size(t.width,i)}var hc=Object.freeze(Object.defineProperty({__proto__:null,MorphArray:ww,x:bw,y:Mw,width:Sw,height:Ew},Symbol.toStringTag,{value:"Module"}));class Zr extends Xe{constructor(t,e=t){super(oe("line",t),e)}array(){return new ti([[this.attr("x1"),this.attr("y1")],[this.attr("x2"),this.attr("y2")]])}move(t,e){return this.attr(this.array().move(t,e).toLine())}plot(t,e,n,r){return t==null?this.array():(typeof e<"u"?t={x1:t,y1:e,x2:n,y2:r}:t=new ti(t).toLine(),this.attr(t))}size(t,e){const n=_r(this,t,e);return this.attr(this.array().size(n.width,n.height).toLine())}}zt(Zr,hc);Rt({Container:{line:se(function(...i){return Zr.prototype.plot.apply(this.put(new Zr),i[0]!=null?i:[0,0,0,0])})}});Ht(Zr,"Line");class vo extends He{constructor(t,e=t){super(oe("marker",t),e)}height(t){return this.attr("markerHeight",t)}orient(t){return this.attr("orient",t)}ref(t,e){return this.attr("refX",t).attr("refY",e)}toString(){return"url(#"+this.id()+")"}update(t){return this.clear(),typeof t=="function"&&t.call(this,this),this}width(t){return this.attr("markerWidth",t)}}Rt({Container:{marker(...i){return this.defs().marker(...i)}},Defs:{marker:se(function(i,t,e){return this.put(new vo).size(i,t).ref(i/2,t/2).viewbox(0,0,i,t).attr("orient","auto").update(e)})},marker:{marker(i,t,e,n){let r=["marker"];return i!=="all"&&r.push(i),r=r.join("-"),i=arguments[1]instanceof vo?arguments[1]:this.defs().marker(t,e,n),this.attr(r,i)}}});Ht(vo,"Marker");function er(i,t){return function(e){return e==null?this[i]:(this[i]=e,t&&t.call(this),this)}}const Tw={"-":function(i){return i},"<>":function(i){return-Math.cos(i*Math.PI)/2+.5},">":function(i){return Math.sin(i*Math.PI/2)},"<":function(i){return-Math.cos(i*Math.PI/2)+1},bezier:function(i,t,e,n){return function(r){return r<0?i>0?t/i*r:e>0?n/e*r:0:r>1?e<1?(1-n)/(1-e)*r+(n-e)/(1-e):i<1?(1-t)/(1-i)*r+(t-i)/(1-i):1:3*r*(1-r)**2*t+3*r**2*(1-r)*n+r**3}},steps:function(i,t="end"){t=t.split("-").reverse()[0];let e=i;return t==="none"?--e:t==="both"&&++e,(n,r=!1)=>{let s=Math.floor(n*i);const o=n*s%1===0;return(t==="start"||t==="both")&&++s,r&&o&&--s,n>=0&&s<0&&(s=0),n<=1&&s>e&&(s=e),s/e}}};class uc{done(){return!1}}class hl extends uc{constructor(t=Nr.ease){super(),this.ease=Tw[t]||t}step(t,e,n){return typeof t!="number"?n<1?t:e:t+(e-t)*this.ease(n)}}class wo extends uc{constructor(t){super(),this.stepper=t}done(t){return t.done}step(t,e,n,r){return this.stepper(t,e,n,r)}}function du(){const i=(this._duration||500)/1e3,t=this._overshoot||0,e=1e-10,n=Math.PI,r=Math.log(t/100+e),s=-r/Math.sqrt(n*n+r*r),o=3.9/(s*i);this.d=2*s*o,this.k=o*o}class Aw extends wo{constructor(t=500,e=0){super(),this.duration(t).overshoot(e)}step(t,e,n,r){if(typeof t=="string")return t;if(r.done=n===1/0,n===1/0)return e;if(n===0)return t;n>100&&(n=16),n/=1e3;const s=r.velocity||0,o=-this.d*s-this.k*(t-e),a=t+s*n+o*n*n/2;return r.velocity=s+o*n,r.done=Math.abs(e-a)+Math.abs(s)<.002,r.done?e:a}}zt(Aw,{duration:er("_duration",du),overshoot:er("_overshoot",du)});class Cw extends wo{constructor(t=.1,e=.01,n=0,r=1e3){super(),this.p(t).i(e).d(n).windup(r)}step(t,e,n,r){if(typeof t=="string")return t;if(r.done=n===1/0,n===1/0)return e;if(n===0)return t;const s=e-t;let o=(r.integral||0)+s*n;const a=(s-(r.error||0))/n,l=this._windup;return l!==!1&&(o=Math.max(-l,Math.min(o,l))),r.error=s,r.integral=o,r.done=Math.abs(s)<.001,r.done?e:t+(this.P*s+this.I*o+this.D*a)}}zt(Cw,{windup:er("_windup"),p:er("P"),i:er("I"),d:er("D")});const Lw={M:2,L:2,H:1,V:1,C:6,S:4,Q:4,T:2,A:7,Z:0},ul={M:function(i,t,e){return t.x=e.x=i[0],t.y=e.y=i[1],["M",t.x,t.y]},L:function(i,t){return t.x=i[0],t.y=i[1],["L",i[0],i[1]]},H:function(i,t){return t.x=i[0],["H",i[0]]},V:function(i,t){return t.y=i[0],["V",i[0]]},C:function(i,t){return t.x=i[4],t.y=i[5],["C",i[0],i[1],i[2],i[3],i[4],i[5]]},S:function(i,t){return t.x=i[2],t.y=i[3],["S",i[0],i[1],i[2],i[3]]},Q:function(i,t){return t.x=i[2],t.y=i[3],["Q",i[0],i[1],i[2],i[3]]},T:function(i,t){return t.x=i[0],t.y=i[1],["T",i[0],i[1]]},Z:function(i,t,e){return t.x=e.x,t.y=e.y,["Z"]},A:function(i,t){return t.x=i[5],t.y=i[6],["A",i[0],i[1],i[2],i[3],i[4],i[5],i[6]]}},Ha="mlhvqtcsaz".split("");for(let i=0,t=Ha.length;i<t;++i)ul[Ha[i]]=function(e){return function(n,r,s){if(e==="H")n[0]=n[0]+r.x;else if(e==="V")n[0]=n[0]+r.y;else if(e==="A")n[5]=n[5]+r.x,n[6]=n[6]+r.y;else for(let o=0,a=n.length;o<a;++o)n[o]=n[o]+(o%2?r.y:r.x);return ul[e](n,r,s)}}(Ha[i].toUpperCase());function Rw(i){const t=i.segment[0];return ul[t](i.segment.slice(1),i.p,i.p0)}function fl(i){return i.segment.length&&i.segment.length-1===Lw[i.segment[0].toUpperCase()]}function Pw(i,t){i.inNumber&&ai(i,!1);const e=sc.test(t);if(e)i.segment=[t];else{const n=i.lastCommand,r=n.toLowerCase(),s=n===r;i.segment=[r==="m"?s?"l":"L":n]}return i.inSegment=!0,i.lastCommand=i.segment[0],e}function ai(i,t){if(!i.inNumber)throw new Error("Parser Error");i.number&&i.segment.push(parseFloat(i.number)),i.inNumber=t,i.number="",i.pointSeen=!1,i.hasExponent=!1,fl(i)&&dl(i)}function dl(i){i.inSegment=!1,i.absolute&&(i.segment=Rw(i)),i.segments.push(i.segment)}function Dw(i){if(!i.segment.length)return!1;const t=i.segment[0].toUpperCase()==="A",e=i.segment.length;return t&&(e===4||e===5)}function Iw(i){return i.lastToken.toUpperCase()==="E"}function Nw(i,t=!0){let e=0,n="";const r={segment:[],inNumber:!1,number:"",lastToken:"",inSegment:!1,segments:[],pointSeen:!1,hasExponent:!1,absolute:t,p0:new fe,p:new fe};for(;r.lastToken=n,n=i.charAt(e++);)if(!(!r.inSegment&&Pw(r,n))){if(n==="."){if(r.pointSeen||r.hasExponent){ai(r,!1),--e;continue}r.inNumber=!0,r.pointSeen=!0,r.number+=n;continue}if(!isNaN(parseInt(n))){if(r.number==="0"||Dw(r)){r.inNumber=!0,r.number=n,ai(r,!0);continue}r.inNumber=!0,r.number+=n;continue}if(n===" "||n===","){r.inNumber&&ai(r,!1);continue}if(n==="-"){if(r.inNumber&&!Iw(r)){ai(r,!1),--e;continue}r.number+=n,r.inNumber=!0;continue}if(n.toUpperCase()==="E"){r.number+=n,r.hasExponent=!0;continue}if(sc.test(n)){if(r.inNumber)ai(r,!1);else if(fl(r))dl(r);else throw new Error("parser Error");--e}}return r.inNumber&&ai(r,!1),r.inSegment&&fl(r)&&dl(r),r.segments}function Fw(i){let t="";for(let e=0,n=i.length;e<n;e++)t+=i[e][0],i[e][1]!=null&&(t+=i[e][1],i[e][2]!=null&&(t+=" ",t+=i[e][2],i[e][3]!=null&&(t+=" ",t+=i[e][3],t+=" ",t+=i[e][4],i[e][5]!=null&&(t+=" ",t+=i[e][5],t+=" ",t+=i[e][6],i[e][7]!=null&&(t+=" ",t+=i[e][7])))));return t+" "}class _i extends ur{bbox(){return jn().path.setAttribute("d",this.toString()),new Ce(jn.nodes.path.getBBox())}move(t,e){const n=this.bbox();if(t-=n.x,e-=n.y,!isNaN(t)&&!isNaN(e))for(let r,s=this.length-1;s>=0;s--)r=this[s][0],r==="M"||r==="L"||r==="T"?(this[s][1]+=t,this[s][2]+=e):r==="H"?this[s][1]+=t:r==="V"?this[s][1]+=e:r==="C"||r==="S"||r==="Q"?(this[s][1]+=t,this[s][2]+=e,this[s][3]+=t,this[s][4]+=e,r==="C"&&(this[s][5]+=t,this[s][6]+=e)):r==="A"&&(this[s][6]+=t,this[s][7]+=e);return this}parse(t="M0 0"){return Array.isArray(t)&&(t=Array.prototype.concat.apply([],t).toString()),Nw(t)}size(t,e){const n=this.bbox();let r,s;for(n.width=n.width===0?1:n.width,n.height=n.height===0?1:n.height,r=this.length-1;r>=0;r--)s=this[r][0],s==="M"||s==="L"||s==="T"?(this[r][1]=(this[r][1]-n.x)*t/n.width+n.x,this[r][2]=(this[r][2]-n.y)*e/n.height+n.y):s==="H"?this[r][1]=(this[r][1]-n.x)*t/n.width+n.x:s==="V"?this[r][1]=(this[r][1]-n.y)*e/n.height+n.y:s==="C"||s==="S"||s==="Q"?(this[r][1]=(this[r][1]-n.x)*t/n.width+n.x,this[r][2]=(this[r][2]-n.y)*e/n.height+n.y,this[r][3]=(this[r][3]-n.x)*t/n.width+n.x,this[r][4]=(this[r][4]-n.y)*e/n.height+n.y,s==="C"&&(this[r][5]=(this[r][5]-n.x)*t/n.width+n.x,this[r][6]=(this[r][6]-n.y)*e/n.height+n.y)):s==="A"&&(this[r][1]=this[r][1]*t/n.width,this[r][2]=this[r][2]*e/n.height,this[r][6]=(this[r][6]-n.x)*t/n.width+n.x,this[r][7]=(this[r][7]-n.y)*e/n.height+n.y);return this}toString(){return Fw(this)}}const $f=i=>{const t=typeof i;return t==="number"?At:t==="string"?Yt.isColor(i)?Yt:Fn.test(i)?sc.test(i)?_i:ur:If.test(i)?At:pl:fc.indexOf(i.constructor)>-1?i.constructor:Array.isArray(i)?ur:t==="object"?Kr:pl};class li{constructor(t){this._stepper=t||new hl("-"),this._from=null,this._to=null,this._type=null,this._context=null,this._morphObj=null}at(t){return this._morphObj.morph(this._from,this._to,t,this._stepper,this._context)}done(){return this._context.map(this._stepper.done).reduce(function(e,n){return e&&n},!0)}from(t){return t==null?this._from:(this._from=this._set(t),this)}stepper(t){return t==null?this._stepper:(this._stepper=t,this)}to(t){return t==null?this._to:(this._to=this._set(t),this)}type(t){return t==null?this._type:(this._type=t,this)}_set(t){this._type||this.type($f(t));let e=new this._type(t);return this._type===Yt&&(e=this._to?e[this._to[4]]():this._from?e[this._from[4]]():e),this._type===Kr&&(e=this._to?e.align(this._to):this._from?e.align(this._from):e),e=e.toConsumable(),this._morphObj=this._morphObj||new this._type,this._context=this._context||Array.apply(null,Array(e.length)).map(Object).map(function(n){return n.done=!0,n}),e}}class pl{constructor(...t){this.init(...t)}init(t){return t=Array.isArray(t)?t[0]:t,this.value=t,this}toArray(){return[this.value]}valueOf(){return this.value}}class cs{constructor(...t){this.init(...t)}init(t){return Array.isArray(t)&&(t={scaleX:t[0],scaleY:t[1],shear:t[2],rotate:t[3],translateX:t[4],translateY:t[5],originX:t[6],originY:t[7]}),Object.assign(this,cs.defaults,t),this}toArray(){const t=this;return[t.scaleX,t.scaleY,t.shear,t.rotate,t.translateX,t.translateY,t.originX,t.originY]}}cs.defaults={scaleX:1,scaleY:1,shear:0,rotate:0,translateX:0,translateY:0,originX:0,originY:0};const Bw=(i,t)=>i[0]<t[0]?-1:i[0]>t[0]?1:0;class Kr{constructor(...t){this.init(...t)}align(t){const e=this.values;for(let n=0,r=e.length;n<r;++n){if(e[n+1]===t[n+1]){if(e[n+1]===Yt&&t[n+7]!==e[n+7]){const a=t[n+7],l=new Yt(this.values.splice(n+3,5))[a]().toArray();this.values.splice(n+3,0,...l)}n+=e[n+2]+2;continue}if(!t[n+1])return this;const s=new t[n+1]().toArray(),o=e[n+2]+3;e.splice(n,o,t[n],t[n+1],t[n+2],...s),n+=e[n+2]+2}return this}init(t){if(this.values=[],Array.isArray(t)){this.values=t.slice();return}t=t||{};const e=[];for(const n in t){const r=$f(t[n]),s=new r(t[n]).toArray();e.push([n,r,s.length,...s])}return e.sort(Bw),this.values=e.reduce((n,r)=>n.concat(r),[]),this}toArray(){return this.values}valueOf(){const t={},e=this.values;for(;e.length;){const n=e.shift(),r=e.shift(),s=e.shift(),o=e.splice(0,s);t[n]=new r(o)}return t}}const fc=[pl,cs,Kr];function zw(i=[]){fc.push(...[].concat(i))}function Ow(){zt(fc,{to(i){return new li().type(this.constructor).from(this.toArray()).to(i)},fromArray(i){return this.init(i),this},toConsumable(){return this.toArray()},morph(i,t,e,n,r){const s=function(o,a){return n.step(o,t[a],e,r[a],r)};return this.fromArray(i.map(s))}})}class vr extends Xe{constructor(t,e=t){super(oe("path",t),e)}array(){return this._array||(this._array=new _i(this.attr("d")))}clear(){return delete this._array,this}height(t){return t==null?this.bbox().height:this.size(this.bbox().width,t)}move(t,e){return this.attr("d",this.array().move(t,e))}plot(t){return t==null?this.array():this.clear().attr("d",typeof t=="string"?t:this._array=new _i(t))}size(t,e){const n=_r(this,t,e);return this.attr("d",this.array().size(n.width,n.height))}width(t){return t==null?this.bbox().width:this.size(t,this.bbox().height)}x(t){return t==null?this.bbox().x:this.move(t,this.bbox().y)}y(t){return t==null?this.bbox().y:this.move(this.bbox().x,t)}}vr.prototype.MorphArray=_i;Rt({Container:{path:se(function(i){return this.put(new vr).plot(i||new _i)})}});Ht(vr,"Path");function Uw(){return this._array||(this._array=new ti(this.attr("points")))}function Hw(){return delete this._array,this}function kw(i,t){return this.attr("points",this.array().move(i,t))}function Gw(i){return i==null?this.array():this.clear().attr("points",typeof i=="string"?i:this._array=new ti(i))}function Vw(i,t){const e=_r(this,i,t);return this.attr("points",this.array().size(e.width,e.height))}var Yf=Object.freeze(Object.defineProperty({__proto__:null,array:Uw,clear:Hw,move:kw,plot:Gw,size:Vw},Symbol.toStringTag,{value:"Module"}));class hs extends Xe{constructor(t,e=t){super(oe("polygon",t),e)}}Rt({Container:{polygon:se(function(i){return this.put(new hs).plot(i||new ti)})}});zt(hs,hc);zt(hs,Yf);Ht(hs,"Polygon");class us extends Xe{constructor(t,e=t){super(oe("polyline",t),e)}}Rt({Container:{polyline:se(function(i){return this.put(new us).plot(i||new ti)})}});zt(us,hc);zt(us,Yf);Ht(us,"Polyline");class Ho extends Xe{constructor(t,e=t){super(oe("rect",t),e)}}zt(Ho,{rx:lc,ry:cc});Rt({Container:{rect:se(function(i,t){return this.put(new Ho).size(i,t)})}});Ht(Ho,"Rect");class ka{constructor(){this._first=null,this._last=null}first(){return this._first&&this._first.value}last(){return this._last&&this._last.value}push(t){const e=typeof t.next<"u"?t:{value:t,next:null,prev:null};return this._last?(e.prev=this._last,this._last.next=e,this._last=e):(this._last=e,this._first=e),e}remove(t){t.prev&&(t.prev.next=t.next),t.next&&(t.next.prev=t.prev),t===this._last&&(this._last=t.prev),t===this._first&&(this._first=t.next),t.prev=null,t.next=null}shift(){const t=this._first;return t?(this._first=t.next,this._first&&(this._first.prev=null),this._last=this._first?this._last:null,t.value):null}}const jt={nextDraw:null,frames:new ka,timeouts:new ka,immediates:new ka,timer:()=>Vt.window.performance||Vt.window.Date,transforms:[],frame(i){const t=jt.frames.push({run:i});return jt.nextDraw===null&&(jt.nextDraw=Vt.window.requestAnimationFrame(jt._draw)),t},timeout(i,t){t=t||0;const e=jt.timer().now()+t,n=jt.timeouts.push({run:i,time:e});return jt.nextDraw===null&&(jt.nextDraw=Vt.window.requestAnimationFrame(jt._draw)),n},immediate(i){const t=jt.immediates.push(i);return jt.nextDraw===null&&(jt.nextDraw=Vt.window.requestAnimationFrame(jt._draw)),t},cancelFrame(i){i!=null&&jt.frames.remove(i)},clearTimeout(i){i!=null&&jt.timeouts.remove(i)},cancelImmediate(i){i!=null&&jt.immediates.remove(i)},_draw(i){let t=null;const e=jt.timeouts.last();for(;(t=jt.timeouts.shift())&&(i>=t.time?t.run():jt.timeouts.push(t),t!==e););let n=null;const r=jt.frames.last();for(;n!==r&&(n=jt.frames.shift());)n.run(i);let s=null;for(;s=jt.immediates.shift();)s();jt.nextDraw=jt.timeouts.first()||jt.frames.first()?Vt.window.requestAnimationFrame(jt._draw):null}},Ww=function(i){const t=i.start,e=i.runner.duration(),n=t+e;return{start:t,duration:e,end:n,runner:i.runner}},qw=function(){const i=Vt.window;return(i.performance||i.Date).now()};class Jf extends as{constructor(t=qw){super(),this._timeSource=t,this._startTime=0,this._speed=1,this._persist=0,this._nextFrame=null,this._paused=!0,this._runners=[],this._runnerIds=[],this._lastRunnerId=-1,this._time=0,this._lastSourceTime=0,this._lastStepTime=0,this._step=this._stepFn.bind(this,!1),this._stepImmediate=this._stepFn.bind(this,!0)}active(){return!!this._nextFrame}finish(){return this.time(this.getEndTimeOfTimeline()+1),this.pause()}getEndTime(){const t=this.getLastRunnerInfo(),e=t?t.runner.duration():0;return(t?t.start:this._time)+e}getEndTimeOfTimeline(){const t=this._runners.map(e=>e.start+e.runner.duration());return Math.max(0,...t)}getLastRunnerInfo(){return this.getRunnerInfoById(this._lastRunnerId)}getRunnerInfoById(t){return this._runners[this._runnerIds.indexOf(t)]||null}pause(){return this._paused=!0,this._continue()}persist(t){return t==null?this._persist:(this._persist=t,this)}play(){return this._paused=!1,this.updateTime()._continue()}reverse(t){const e=this.speed();if(t==null)return this.speed(-e);const n=Math.abs(e);return this.speed(t?-n:n)}schedule(t,e,n){if(t==null)return this._runners.map(Ww);let r=0;const s=this.getEndTime();if(e=e||0,n==null||n==="last"||n==="after")r=s;else if(n==="absolute"||n==="start")r=e,e=0;else if(n==="now")r=this._time;else if(n==="relative"){const l=this.getRunnerInfoById(t.id);l&&(r=l.start+e,e=0)}else if(n==="with-last"){const l=this.getLastRunnerInfo();r=l?l.start:this._time}else throw new Error('Invalid value for the "when" parameter');t.unschedule(),t.timeline(this);const o=t.persist(),a={persist:o===null?this._persist:o,start:r+e,runner:t};return this._lastRunnerId=t.id,this._runners.push(a),this._runners.sort((l,c)=>l.start-c.start),this._runnerIds=this._runners.map(l=>l.runner.id),this.updateTime()._continue(),this}seek(t){return this.time(this._time+t)}source(t){return t==null?this._timeSource:(this._timeSource=t,this)}speed(t){return t==null?this._speed:(this._speed=t,this)}stop(){return this.time(0),this.pause()}time(t){return t==null?this._time:(this._time=t,this._continue(!0))}unschedule(t){const e=this._runnerIds.indexOf(t.id);return e<0?this:(this._runners.splice(e,1),this._runnerIds.splice(e,1),t.timeline(null),this)}updateTime(){return this.active()||(this._lastSourceTime=this._timeSource()),this}_continue(t=!1){return jt.cancelFrame(this._nextFrame),this._nextFrame=null,t?this._stepImmediate():this._paused?this:(this._nextFrame=jt.frame(this._step),this)}_stepFn(t=!1){const e=this._timeSource();let n=e-this._lastSourceTime;t&&(n=0);const r=this._speed*n+(this._time-this._lastStepTime);this._lastSourceTime=e,t||(this._time+=r,this._time=this._time<0?0:this._time),this._lastStepTime=this._time,this.fire("time",this._time);for(let o=this._runners.length;o--;){const a=this._runners[o],l=a.runner;this._time-a.start<=0&&l.reset()}let s=!1;for(let o=0,a=this._runners.length;o<a;o++){const l=this._runners[o],c=l.runner;let h=r;const u=this._time-l.start;if(u<=0){s=!0;continue}else u<h&&(h=u);if(!c.active())continue;c.step(h).done?l.persist!==!0&&c.duration()-c.time()+this._time+l.persist<this._time&&(c.unschedule(),--o,--a):s=!0}return s&&!(this._speed<0&&this._time===0)||this._runnerIds.length&&this._speed<0&&this._time>0?this._continue():(this.pause(),this.fire("finished")),this}}Rt({Element:{timeline:function(i){return i==null?(this._timeline=this._timeline||new Jf,this._timeline):(this._timeline=i,this)}}});class qe extends as{constructor(t){super(),this.id=qe.id++,t=t??Nr.duration,t=typeof t=="function"?new wo(t):t,this._element=null,this._timeline=null,this.done=!1,this._queue=[],this._duration=typeof t=="number"&&t,this._isDeclarative=t instanceof wo,this._stepper=this._isDeclarative?t:new hl,this._history={},this.enabled=!0,this._time=0,this._lastTime=0,this._reseted=!0,this.transforms=new gt,this.transformId=1,this._haveReversed=!1,this._reverse=!1,this._loopsDone=0,this._swing=!1,this._wait=0,this._times=1,this._frameId=null,this._persist=this._isDeclarative?!0:null}static sanitise(t,e,n){let r=1,s=!1,o=0;return t=t||Nr.duration,e=e||Nr.delay,n=n||"last",typeof t=="object"&&!(t instanceof uc)&&(e=t.delay||e,n=t.when||n,s=t.swing||s,r=t.times||r,o=t.wait||o,t=t.duration||Nr.duration),{duration:t,delay:e,swing:s,times:r,wait:o,when:n}}active(t){return t==null?this.enabled:(this.enabled=t,this)}addTransform(t,e){return this.transforms.lmultiplyO(t),this}after(t){return this.on("finished",t)}animate(t,e,n){const r=qe.sanitise(t,e,n),s=new qe(r.duration);return this._timeline&&s.timeline(this._timeline),this._element&&s.element(this._element),s.loop(r).schedule(r.delay,r.when)}clearTransform(){return this.transforms=new gt,this}clearTransformsFromQueue(){(!this.done||!this._timeline||!this._timeline._runnerIds.includes(this.id))&&(this._queue=this._queue.filter(t=>!t.isTransform))}delay(t){return this.animate(0,t)}duration(){return this._times*(this._wait+this._duration)-this._wait}during(t){return this.queue(null,t)}ease(t){return this._stepper=new hl(t),this}element(t){return t==null?this._element:(this._element=t,t._prepareRunner(),this)}finish(){return this.step(1/0)}loop(t,e,n){return typeof t=="object"&&(e=t.swing,n=t.wait,t=t.times),this._times=t||1/0,this._swing=e||!1,this._wait=n||0,this._times===!0&&(this._times=1/0),this}loops(t){const e=this._duration+this._wait;if(t==null){const o=Math.floor(this._time/e),l=(this._time-o*e)/this._duration;return Math.min(o+l,this._times)}const n=Math.floor(t),r=t%1,s=e*n+this._duration*r;return this.time(s)}persist(t){return t==null?this._persist:(this._persist=t,this)}position(t){const e=this._time,n=this._duration,r=this._wait,s=this._times,o=this._swing,a=this._reverse;let l;if(t==null){const f=function(g){const m=o*Math.floor(g%(2*(r+n))/(r+n)),p=m&&!a||!m&&a,x=Math.pow(-1,p)*(g%(r+n))/n+p;return Math.max(Math.min(x,1),0)},d=s*(r+n)-r;return l=e<=0?Math.round(f(1e-5)):e<d?f(e):Math.round(f(d-1e-5)),l}const c=Math.floor(this.loops()),h=o&&c%2===0;return l=c+(h&&!a||a&&h?t:1-t),this.loops(l)}progress(t){return t==null?Math.min(1,this._time/this.duration()):this.time(t*this.duration())}queue(t,e,n,r){return this._queue.push({initialiser:t||fu,runner:e||fu,retarget:n,isTransform:r,initialised:!1,finished:!1}),this.timeline()&&this.timeline()._continue(),this}reset(){return this._reseted?this:(this.time(0),this._reseted=!0,this)}reverse(t){return this._reverse=t??!this._reverse,this}schedule(t,e,n){if(t instanceof Jf||(n=e,e=t,t=this.timeline()),!t)throw Error("Runner cannot be scheduled without timeline");return t.schedule(this,e,n),this}step(t){if(!this.enabled)return this;t=t??16,this._time+=t;const e=this.position(),n=this._lastPosition!==e&&this._time>=0;this._lastPosition=e;const r=this.duration(),s=this._lastTime<=0&&this._time>0,o=this._lastTime<r&&this._time>=r;this._lastTime=this._time,s&&this.fire("start",this);const a=this._isDeclarative;this.done=!a&&!o&&this._time>=r,this._reseted=!1;let l=!1;return(n||a)&&(this._initialise(n),this.transforms=new gt,l=this._run(a?t:e),this.fire("step",this)),this.done=this.done||l&&a,o&&this.fire("finished",this),this}time(t){if(t==null)return this._time;const e=t-this._time;return this.step(e),this}timeline(t){return typeof t>"u"?this._timeline:(this._timeline=t,this)}unschedule(){const t=this.timeline();return t&&t.unschedule(this),this}_initialise(t){if(!(!t&&!this._isDeclarative))for(let e=0,n=this._queue.length;e<n;++e){const r=this._queue[e],s=this._isDeclarative||!r.initialised&&t;t=!r.finished,s&&t&&(r.initialiser.call(this),r.initialised=!0)}}_rememberMorpher(t,e){if(this._history[t]={morpher:e,caller:this._queue[this._queue.length-1]},this._isDeclarative){const n=this.timeline();n&&n.play()}}_run(t){let e=!0;for(let n=0,r=this._queue.length;n<r;++n){const s=this._queue[n],o=s.runner.call(this,t);s.finished=s.finished||o===!0,e=e&&s.finished}return e}_tryRetarget(t,e,n){if(this._history[t]){if(!this._history[t].caller.initialised){const s=this._queue.indexOf(this._history[t].caller);return this._queue.splice(s,1),!1}this._history[t].caller.retarget?this._history[t].caller.retarget.call(this,e,n):this._history[t].morpher.to(e),this._history[t].caller.finished=!1;const r=this.timeline();return r&&r.play(),!0}return!1}}qe.id=0;class bo{constructor(t=new gt,e=-1,n=!0){this.transforms=t,this.id=e,this.done=n}clearTransformsFromQueue(){}}zt([qe,bo],{mergeWith(i){return new bo(i.transforms.lmultiply(this.transforms),i.id)}});const Zf=(i,t)=>i.lmultiplyO(t),Kf=i=>i.transforms;function jw(){const t=this._transformationRunners.runners.map(Kf).reduce(Zf,new gt);this.transform(t),this._transformationRunners.merge(),this._transformationRunners.length()===1&&(this._frameId=null)}class Xw{constructor(){this.runners=[],this.ids=[]}add(t){if(this.runners.includes(t))return;const e=t.id+1;return this.runners.push(t),this.ids.push(e),this}clearBefore(t){const e=this.ids.indexOf(t+1)||1;return this.ids.splice(0,e,0),this.runners.splice(0,e,new bo).forEach(n=>n.clearTransformsFromQueue()),this}edit(t,e){const n=this.ids.indexOf(t+1);return this.ids.splice(n,1,t+1),this.runners.splice(n,1,e),this}getByID(t){return this.runners[this.ids.indexOf(t+1)]}length(){return this.ids.length}merge(){let t=null;for(let e=0;e<this.runners.length;++e){const n=this.runners[e];if(t&&n.done&&t.done&&(!n._timeline||!n._timeline._runnerIds.includes(n.id))&&(!t._timeline||!t._timeline._runnerIds.includes(t.id))){this.remove(n.id);const s=n.mergeWith(t);this.edit(t.id,s),t=s,--e}else t=n}return this}remove(t){const e=this.ids.indexOf(t+1);return this.ids.splice(e,1),this.runners.splice(e,1),this}}Rt({Element:{animate(i,t,e){const n=qe.sanitise(i,t,e),r=this.timeline();return new qe(n.duration).loop(n).element(this).timeline(r.play()).schedule(n.delay,n.when)},delay(i,t){return this.animate(0,i,t)},_clearTransformRunnersBefore(i){this._transformationRunners.clearBefore(i.id)},_currentTransform(i){return this._transformationRunners.runners.filter(t=>t.id<=i.id).map(Kf).reduce(Zf,new gt)},_addRunner(i){this._transformationRunners.add(i),jt.cancelImmediate(this._frameId),this._frameId=jt.immediate(jw.bind(this))},_prepareRunner(){this._frameId==null&&(this._transformationRunners=new Xw().add(new bo(new gt(this))))}}});const $w=(i,t)=>i.filter(e=>!t.includes(e));zt(qe,{attr(i,t){return this.styleAttr("attr",i,t)},css(i,t){return this.styleAttr("css",i,t)},styleAttr(i,t,e){if(typeof t=="string")return this.styleAttr(i,{[t]:e});let n=t;if(this._tryRetarget(i,n))return this;let r=new li(this._stepper).to(n),s=Object.keys(n);return this.queue(function(){r=r.from(this.element()[i](s))},function(o){return this.element()[i](r.at(o).valueOf()),r.done()},function(o){const a=Object.keys(o),l=$w(a,s);if(l.length){const h=this.element()[i](l),u=new Kr(r.from()).valueOf();Object.assign(u,h),r.from(u)}const c=new Kr(r.to()).valueOf();Object.assign(c,o),r.to(c),s=a,n=o}),this._rememberMorpher(i,r),this},zoom(i,t){if(this._tryRetarget("zoom",i,t))return this;let e=new li(this._stepper).to(new At(i));return this.queue(function(){e=e.from(this.element().zoom())},function(n){return this.element().zoom(e.at(n),t),e.done()},function(n,r){t=r,e.to(n)}),this._rememberMorpher("zoom",e),this},transform(i,t,e){if(t=i.relative||t,this._isDeclarative&&!t&&this._tryRetarget("transform",i))return this;const n=gt.isMatrixLike(i);e=i.affine!=null?i.affine:e??!n;const r=new li(this._stepper).type(e?cs:gt);let s,o,a,l,c;function h(){o=o||this.element(),s=s||ll(i,o),c=new gt(t?void 0:o),o._addRunner(this),t||o._clearTransformRunnersBefore(this)}function u(d){t||this.clearTransform();const{x:g,y:m}=new fe(s).transform(o._currentTransform(this));let p=new gt({...i,origin:[g,m]}),x=this._isDeclarative&&a?a:c;if(e){p=p.decompose(g,m),x=x.decompose(g,m);const T=p.rotate,E=x.rotate,b=[T-360,T,T+360],C=b.map(A=>Math.abs(A-E)),L=Math.min(...C),_=C.indexOf(L);p.rotate=b[_]}t&&(n||(p.rotate=i.rotate||0),this._isDeclarative&&l&&(x.rotate=l)),r.from(x),r.to(p);const w=r.at(d);return l=w.rotate,a=new gt(w),this.addTransform(a),o._addRunner(this),r.done()}function f(d){(d.origin||"center").toString()!==(i.origin||"center").toString()&&(s=ll(d,o)),i={...d,origin:s}}return this.queue(h,u,f,!0),this._isDeclarative&&this._rememberMorpher("transform",r),this},x(i,t){return this._queueNumber("x",i)},y(i){return this._queueNumber("y",i)},dx(i=0){return this._queueNumberDelta("x",i)},dy(i=0){return this._queueNumberDelta("y",i)},dmove(i,t){return this.dx(i).dy(t)},_queueNumberDelta(i,t){if(t=new At(t),this._tryRetarget(i,t))return this;const e=new li(this._stepper).to(t);let n=null;return this.queue(function(){n=this.element()[i](),e.from(n),e.to(n+t)},function(r){return this.element()[i](e.at(r)),e.done()},function(r){e.to(n+new At(r))}),this._rememberMorpher(i,e),this},_queueObject(i,t){if(this._tryRetarget(i,t))return this;const e=new li(this._stepper).to(t);return this.queue(function(){e.from(this.element()[i]())},function(n){return this.element()[i](e.at(n)),e.done()}),this._rememberMorpher(i,e),this},_queueNumber(i,t){return this._queueObject(i,new At(t))},cx(i){return this._queueNumber("cx",i)},cy(i){return this._queueNumber("cy",i)},move(i,t){return this.x(i).y(t)},center(i,t){return this.cx(i).cy(t)},size(i,t){let e;return(!i||!t)&&(e=this._element.bbox()),i||(i=e.width/e.height*t),t||(t=e.height/e.width*i),this.width(i).height(t)},width(i){return this._queueNumber("width",i)},height(i){return this._queueNumber("height",i)},plot(i,t,e,n){if(arguments.length===4)return this.plot([i,t,e,n]);if(this._tryRetarget("plot",i))return this;const r=new li(this._stepper).type(this._element.MorphArray).to(i);return this.queue(function(){r.from(this._element.array())},function(s){return this._element.plot(r.at(s)),r.done()}),this._rememberMorpher("plot",r),this},leading(i){return this._queueNumber("leading",i)},viewbox(i,t,e,n){return this._queueObject("viewbox",new Ce(i,t,e,n))},update(i){return typeof i!="object"?this.update({offset:arguments[0],color:arguments[1],opacity:arguments[2]}):(i.opacity!=null&&this.attr("stop-opacity",i.opacity),i.color!=null&&this.attr("stop-color",i.color),i.offset!=null&&this.attr("offset",i.offset),this)}});zt(qe,{rx:lc,ry:cc,from:jf,to:Xf});Ht(qe,"Runner");class dc extends He{constructor(t,e=t){super(oe("svg",t),e),this.namespace()}defs(){return this.isRoot()?Ye(this.node.querySelector("defs"))||this.put(new ac):this.root().defs()}isRoot(){return!this.node.parentNode||!(this.node.parentNode instanceof Vt.window.SVGElement)&&this.node.parentNode.nodeName!=="#document-fragment"}namespace(){return this.isRoot()?this.attr({xmlns:nc,version:"1.1"}).attr("xmlns:xlink",os,Qs).attr("xmlns:svgjs",dv,Qs):this.root().namespace()}removeNamespace(){return this.attr({xmlns:null,version:null}).attr("xmlns:xlink",null,Qs).attr("xmlns:svgjs",null,Qs)}root(){return this.isRoot()?this:super.root()}}Rt({Container:{nested:se(function(){return this.put(new dc)})}});Ht(dc,"Svg",!0);class pc extends He{constructor(t,e=t){super(oe("symbol",t),e)}}Rt({Container:{symbol:se(function(){return this.put(new pc)})}});Ht(pc,"Symbol");function Yw(i){return this._build===!1&&this.clear(),this.node.appendChild(Vt.document.createTextNode(i)),this}function Jw(){return this.node.getComputedTextLength()}function Zw(i,t=this.bbox()){return i==null?t.x:this.attr("x",this.attr("x")+i-t.x)}function Kw(i,t=this.bbox()){return i==null?t.y:this.attr("y",this.attr("y")+i-t.y)}function Qw(i,t,e=this.bbox()){return this.x(i,e).y(t,e)}function tb(i,t=this.bbox()){return i==null?t.cx:this.attr("x",this.attr("x")+i-t.cx)}function eb(i,t=this.bbox()){return i==null?t.cy:this.attr("y",this.attr("y")+i-t.cy)}function nb(i,t,e=this.bbox()){return this.cx(i,e).cy(t,e)}function ib(i){return this.attr("x",i)}function rb(i){return this.attr("y",i)}function sb(i,t){return this.ax(i).ay(t)}function ob(i){return this._build=!!i,this}var Qf=Object.freeze(Object.defineProperty({__proto__:null,plain:Yw,length:Jw,x:Zw,y:Kw,move:Qw,cx:tb,cy:eb,center:nb,ax:ib,ay:rb,amove:sb,build:ob},Symbol.toStringTag,{value:"Module"}));class ln extends Xe{constructor(t,e=t){super(oe("text",t),e),this.dom.leading=new At(1.3),this._rebuild=!0,this._build=!1}leading(t){return t==null?this.dom.leading:(this.dom.leading=new At(t),this.rebuild())}rebuild(t){if(typeof t=="boolean"&&(this._rebuild=t),this._rebuild){const e=this;let n=0;const r=this.dom.leading;this.each(function(s){const o=Vt.window.getComputedStyle(this.node).getPropertyValue("font-size"),a=r*new At(o);this.dom.newLined&&(this.attr("x",e.attr("x")),this.text()===`
`?n+=a:(this.attr("dy",s?a+n:0),n=0))}),this.fire("rebuild")}return this}setData(t){return this.dom=t,this.dom.leading=new At(t.leading||1.3),this}text(t){if(t===void 0){const e=this.node.childNodes;let n=0;t="";for(let r=0,s=e.length;r<s;++r){if(e[r].nodeName==="textPath"){r===0&&(n=1);continue}r!==n&&e[r].nodeType!==3&&Ye(e[r]).dom.newLined===!0&&(t+=`
`),t+=e[r].textContent}return t}if(this.clear().build(!0),typeof t=="function")t.call(this,this);else{t=(t+"").split(`
`);for(let e=0,n=t.length;e<n;e++)this.newLine(t[e])}return this.build(!1).rebuild()}}zt(ln,Qf);Rt({Container:{text:se(function(i=""){return this.put(new ln).text(i)}),plain:se(function(i=""){return this.put(new ln).plain(i)})}});Ht(ln,"Text");class ko extends Xe{constructor(t,e=t){super(oe("tspan",t),e),this._build=!1}dx(t){return this.attr("dx",t)}dy(t){return this.attr("dy",t)}newLine(){this.dom.newLined=!0;const t=this.parent();if(!(t instanceof ln))return this;const e=t.index(this),n=Vt.window.getComputedStyle(this.node).getPropertyValue("font-size"),r=t.dom.leading*new At(n);return this.dy(e?r:0).attr("x",t.x())}text(t){return t==null?this.node.textContent+(this.dom.newLined?`
`:""):(typeof t=="function"?(this.clear().build(!0),t.call(this,this),this.build(!1)):this.plain(t),this)}}zt(ko,Qf);Rt({Tspan:{tspan:se(function(i=""){const t=new ko;return this._build||this.clear(),this.put(t).text(i)})},Text:{newLine:function(i=""){return this.tspan(i).newLine()}}});Ht(ko,"Tspan");class mc extends Xe{constructor(t,e=t){super(oe("circle",t),e)}radius(t){return this.attr("r",t)}rx(t){return this.attr("r",t)}ry(t){return this.rx(t)}size(t){return this.radius(new At(t).divide(2))}}zt(mc,{x:Uf,y:Hf,cx:kf,cy:Gf,width:Vf,height:Wf});Rt({Container:{circle:se(function(i=0){return this.put(new mc).size(i).move(0,0)})}});Ht(mc,"Circle");class ml extends He{constructor(t,e=t){super(oe("clipPath",t),e)}remove(){return this.targets().forEach(function(t){t.unclip()}),super.remove()}targets(){return yr('svg [clip-path*="'+this.id()+'"]')}}Rt({Container:{clip:se(function(){return this.defs().put(new ml)})},Element:{clipper(){return this.reference("clip-path")},clipWith(i){const t=i instanceof ml?i:this.parent().clip().add(i);return this.attr("clip-path",'url("#'+t.id()+'")')},unclip(){return this.attr("clip-path",null)}}});Ht(ml,"ClipPath");class td extends bn{constructor(t,e=t){super(oe("foreignObject",t),e)}}Rt({Container:{foreignObject:se(function(i,t){return this.put(new td).size(i,t)})}});Ht(td,"ForeignObject");function ab(i,t){return this.children().forEach((e,n)=>{let r;try{r=e.bbox()}catch{return}const s=new gt(e),o=s.translate(i,t).transform(s.inverse()),a=new fe(r.x,r.y).transform(o);e.move(a.x,a.y)}),this}function lb(i){return this.dmove(i,0)}function cb(i){return this.dmove(0,i)}function hb(i,t=this.bbox()){return i==null?t.height:this.size(t.width,i,t)}function ub(i=0,t=0,e=this.bbox()){const n=i-e.x,r=t-e.y;return this.dmove(n,r)}function fb(i,t,e=this.bbox()){const n=_r(this,i,t,e),r=n.width/e.width,s=n.height/e.height;return this.children().forEach((o,a)=>{const l=new fe(e).transform(new gt(o).inverse());o.scale(r,s,l.x,l.y)}),this}function db(i,t=this.bbox()){return i==null?t.width:this.size(i,t.height,t)}function pb(i,t=this.bbox()){return i==null?t.x:this.move(i,t.y,t)}function mb(i,t=this.bbox()){return i==null?t.y:this.move(t.x,i,t)}var ed=Object.freeze(Object.defineProperty({__proto__:null,dmove:ab,dx:lb,dy:cb,height:hb,move:ub,size:fb,width:db,x:pb,y:mb},Symbol.toStringTag,{value:"Module"}));class gc extends He{constructor(t,e=t){super(oe("g",t),e)}}zt(gc,ed);Rt({Container:{group:se(function(){return this.put(new gc)})}});Ht(gc,"G");class Mo extends He{constructor(t,e=t){super(oe("a",t),e)}target(t){return this.attr("target",t)}to(t){return this.attr("href",t,os)}}zt(Mo,ed);Rt({Container:{link:se(function(i){return this.put(new Mo).to(i)})},Element:{unlink(){const i=this.linker();if(!i)return this;const t=i.parent();if(!t)return this.remove();const e=t.index(i);return t.add(this,e),i.remove(),this},linkTo(i){let t=this.linker();return t||(t=new Mo,this.wrap(t)),typeof i=="function"?i.call(t,t):t.to(i),this},linker(){const i=this.parent();return i&&i.node.nodeName.toLowerCase()==="a"?i:null}}});Ht(Mo,"A");class gl extends He{constructor(t,e=t){super(oe("mask",t),e)}remove(){return this.targets().forEach(function(t){t.unmask()}),super.remove()}targets(){return yr('svg [mask*="'+this.id()+'"]')}}Rt({Container:{mask:se(function(){return this.defs().put(new gl)})},Element:{masker(){return this.reference("mask")},maskWith(i){const t=i instanceof gl?i:this.parent().mask().add(i);return this.attr("mask",'url("#'+t.id()+'")')},unmask(){return this.attr("mask",null)}}});Ht(gl,"Mask");class nd extends bn{constructor(t,e=t){super(oe("stop",t),e)}update(t){return(typeof t=="number"||t instanceof At)&&(t={offset:arguments[0],color:arguments[1],opacity:arguments[2]}),t.opacity!=null&&this.attr("stop-opacity",t.opacity),t.color!=null&&this.attr("stop-color",t.color),t.offset!=null&&this.attr("offset",new At(t.offset)),this}}Rt({Gradient:{stop:function(i,t,e){return this.put(new nd).update(i,t,e)}}});Ht(nd,"Stop");function gb(i,t){if(!i)return"";if(!t)return i;let e=i+"{";for(const n in t)e+=uv(n)+":"+t[n]+";";return e+="}",e}class xl extends bn{constructor(t,e=t){super(oe("style",t),e)}addText(t=""){return this.node.textContent+=t,this}font(t,e,n={}){return this.rule("@font-face",{fontFamily:t,src:e,...n})}rule(t,e){return this.addText(gb(t,e))}}Rt("Dom",{style(i,t){return this.put(new xl).rule(i,t)},fontface(i,t,e){return this.put(new xl).font(i,t,e)}});Ht(xl,"Style");class xc extends ln{constructor(t,e=t){super(oe("textPath",t),e)}array(){const t=this.track();return t?t.array():null}plot(t){const e=this.track();let n=null;return e&&(n=e.plot(t)),t==null?n:this}track(){return this.reference("href")}}Rt({Container:{textPath:se(function(i,t){return i instanceof ln||(i=this.text(i)),i.path(t)})},Text:{path:se(function(i,t=!0){const e=new xc;i instanceof vr||(i=this.defs().path(i)),e.attr("href","#"+i,os);let n;if(t)for(;n=this.node.firstChild;)e.node.appendChild(n);return this.put(e)}),textPath(){return this.findOne("textPath")}},Path:{text:se(function(i){return i instanceof ln||(i=new ln().addTo(this.parent()).text(i)),i.path(this)}),targets(){return yr("svg textPath").filter(i=>(i.attr("href")||"").includes(this.id()))}}});xc.prototype.MorphArray=_i;Ht(xc,"TextPath");class id extends Xe{constructor(t,e=t){super(oe("use",t),e)}use(t,e){return this.attr("href",(e||"")+"#"+t,os)}}Rt({Container:{use:se(function(i,t){return this.put(new id).use(i,t)})}});Ht(id,"Use");const xb=Pe;zt([dc,pc,Uo,Jr,vo],Ue("viewbox"));zt([Zr,us,hs,vr],Ue("marker"));zt(ln,Ue("Text"));zt(vr,Ue("Path"));zt(ac,Ue("Defs"));zt([ln,ko],Ue("Tspan"));zt([Ho,Oo,ls,qe],Ue("radius"));zt(as,Ue("EventTarget"));zt(Qn,Ue("Dom"));zt(bn,Ue("Element"));zt(Xe,Ue("Shape"));zt([He,qf],Ue("Container"));zt(ls,Ue("Gradient"));zt(qe,Ue("Runner"));xi.extend(cv());zw([At,Yt,Ce,gt,ur,ti,_i,fe]);Ow();const _b=Qe("<div></div>");var pu=i=>{const t=El({width:40,height:40},i);let e;return wl(()=>{let r=xb().addTo(e).size(t.width,t.height).group();r.rect(10,30).move(15,0).fill("#000"),r.polygon([[5,25],[35,25],[20,40]]).fill("#000"),r.center(t.width/2,t.height/2).scale(t.width/40,t.height/40)}),(()=>{const n=_b.cloneNode(!0),r=e;return typeof r=="function"?r(n):e=n,n.style.setProperty("margin","15px"),n})()};const yb=Qe('<div><p>Github repo: <a href="https://github.com/zimonitrome/convolution-shape-calculator">https://github.com/zimonitrome/convolution-shape-calculator</a></p></div>');var vb=i=>(()=>{const t=yb.cloneNode(!0);return t.style.setProperty("padding-left","15px"),t.style.setProperty("margin","0 auto"),t.style.setProperty("width","fit-content"),t})();const wb=Qe('<div id="App"></div>'),bb=()=>[(()=>{const i=wb.cloneNode(!0);return ze(i,Qt(ev,{}),null),ze(i,Qt(pu,{height:50,width:60}),null),ze(i,Qt(lv,{}),null),ze(i,Qt(pu,{height:50,width:60}),null),ze(i,Qt(Vy,{}),null),i})(),Qt(vb,{})];wd(()=>Qt(bb,{}),document.getElementById("root"));
