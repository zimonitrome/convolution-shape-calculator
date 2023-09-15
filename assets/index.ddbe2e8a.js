const Jh=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}};Jh();const Zt={};function Zh(r){Zt.context=r}const Kh=(r,e)=>r===e,Qh=Symbol("solid-proxy"),ms={equals:Kh};let Dc=Nc;const Ai={},qn=1,gs=2,Ic={owned:null,cleanups:null,context:null,owner:null};var Bt=null;let mr=null,lt=null,er=null,xt=null,Vt=null,aa=0;function eu(r,e){const t=lt,n=Bt,i=r.length===0?Ic:{owned:null,cleanups:null,context:null,owner:e||n};Bt=i,lt=null;try{return ua(()=>r(()=>da(i)),!0)}finally{lt=t,Bt=n}}function Pt(r,e){e=e?Object.assign({},ms,e):ms;const t={value:r,observers:null,observerSlots:null,pending:Ai,comparator:e.equals||void 0},n=i=>(typeof i=="function"&&(i=i(t.pending!==Ai?t.pending:t.value)),ca(t,i));return[Fc.bind(t),n]}function Ci(r,e,t){const n=ha(r,e,!1,qn);gr(n)}function Ps(r,e,t){Dc=su;const n=ha(r,e,!1,qn);n.user=!0,Vt?Vt.push(n):gr(n)}function tu(r,e,t){t=t?Object.assign({},ms,t):ms;const n=ha(r,e,!0,0);return n.pending=Ai,n.observers=null,n.observerSlots=null,n.comparator=t.equals||void 0,gr(n),Fc.bind(n)}function nu(r){if(er)return r();let e;const t=er=[];try{e=r()}finally{er=null}return ua(()=>{for(let n=0;n<t.length;n+=1){const i=t[n];if(i.pending!==Ai){const s=i.pending;i.pending=Ai,ca(i,s)}}},!1),e}function la(r){let e,t=lt;return lt=null,e=r(),lt=t,e}function Bc(r){Ps(()=>la(r))}function Fc(){const r=mr;if(this.sources&&(this.state||r)){const e=xt;xt=null,this.state===qn||r?gr(this):xs(this),xt=e}if(lt){const e=this.observers?this.observers.length:0;lt.sources?(lt.sources.push(this),lt.sourceSlots.push(e)):(lt.sources=[this],lt.sourceSlots=[e]),this.observers?(this.observers.push(lt),this.observerSlots.push(lt.sources.length-1)):(this.observers=[lt],this.observerSlots=[lt.sources.length-1])}return this.value}function ca(r,e,t){if(er)return r.pending===Ai&&er.push(r),r.pending=e,e;if(r.comparator&&r.comparator(r.value,e))return e;let n=!1;return r.value=e,r.observers&&r.observers.length&&ua(()=>{for(let i=0;i<r.observers.length;i+=1){const s=r.observers[i];n&&mr.disposed.has(s),(n&&!s.tState||!n&&!s.state)&&(s.pure?xt.push(s):Vt.push(s),s.observers&&zc(s)),n||(s.state=qn)}if(xt.length>1e6)throw xt=[],new Error},!1),e}function gr(r){if(!r.fn)return;da(r);const e=Bt,t=lt,n=aa;lt=Bt=r,iu(r,r.value,n),lt=t,Bt=e}function iu(r,e,t){let n;try{n=r.fn(e)}catch(i){Uc(i)}(!r.updatedAt||r.updatedAt<=t)&&(r.observers&&r.observers.length?ca(r,n):r.value=n,r.updatedAt=t)}function ha(r,e,t,n=qn,i){const s={fn:r,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:Bt,context:null,pure:t};return Bt===null||Bt!==Ic&&(Bt.owned?Bt.owned.push(s):Bt.owned=[s]),s}function tr(r){const e=mr;if(r.state===0||e)return;if(r.state===gs||e)return xs(r);if(r.suspense&&la(r.suspense.inFallback))return r.suspense.effects.push(r);const t=[r];for(;(r=r.owner)&&(!r.updatedAt||r.updatedAt<aa);)(r.state||e)&&t.push(r);for(let n=t.length-1;n>=0;n--)if(r=t[n],r.state===qn||e)gr(r);else if(r.state===gs||e){const i=xt;xt=null,xs(r,t[0]),xt=i}}function ua(r,e){if(xt)return r();let t=!1;e||(xt=[]),Vt?t=!0:Vt=[],aa++;try{const n=r();return ru(t),n}catch(n){Uc(n)}finally{xt=null,t||(Vt=null)}}function ru(r){xt&&(Nc(xt),xt=null),!r&&(Vt.length?nu(()=>{Dc(Vt),Vt=null}):Vt=null)}function Nc(r){for(let e=0;e<r.length;e++)tr(r[e])}function su(r){let e,t=0;for(e=0;e<r.length;e++){const i=r[e];i.user?r[t++]=i:tr(i)}Zt.context&&Zh();const n=r.length;for(e=0;e<t;e++)tr(r[e]);for(e=n;e<r.length;e++)tr(r[e])}function xs(r,e){const t=mr;r.state=0;for(let n=0;n<r.sources.length;n+=1){const i=r.sources[n];i.sources&&(i.state===qn||t?i!==e&&tr(i):(i.state===gs||t)&&xs(i,e))}}function zc(r){const e=mr;for(let t=0;t<r.observers.length;t+=1){const n=r.observers[t];(!n.state||e)&&(n.state=gs,n.pure?xt.push(n):Vt.push(n),n.observers&&zc(n))}}function da(r){let e;if(r.sources)for(;r.sources.length;){const t=r.sources.pop(),n=r.sourceSlots.pop(),i=t.observers;if(i&&i.length){const s=i.pop(),o=t.observerSlots.pop();n<i.length&&(s.sourceSlots[o]=n,i[n]=s,t.observerSlots[n]=o)}}if(r.owned){for(e=0;e<r.owned.length;e++)da(r.owned[e]);r.owned=null}if(r.cleanups){for(e=0;e<r.cleanups.length;e++)r.cleanups[e]();r.cleanups=null}r.state=0,r.context=null}function Uc(r){throw r}function Ue(r,e){return la(()=>r(e||{}))}function Sr(){return!0}const ou={get(r,e,t){return e===Qh?t:r.get(e)},has(r,e){return r.has(e)},set:Sr,deleteProperty:Sr,getOwnPropertyDescriptor(r,e){return{configurable:!0,enumerable:!0,get(){return r.get(e)},set:Sr,deleteProperty:Sr}},ownKeys(r){return r.keys()}};function js(r){return(r=typeof r=="function"?r():r)==null?{}:r}function Oc(...r){return new Proxy({get(e){for(let t=r.length-1;t>=0;t--){const n=js(r[t])[e];if(n!==void 0)return n}},has(e){for(let t=r.length-1;t>=0;t--)if(e in js(r[t]))return!0;return!1},keys(){const e=[];for(let t=0;t<r.length;t++)e.push(...Object.keys(js(r[t])));return[...new Set(e)]}},ou)}function au(r,e){return tu(r,void 0,e?void 0:{equals:e})}function lu(r,e,t){let n=t.length,i=e.length,s=n,o=0,a=0,l=e[i-1].nextSibling,c=null;for(;o<i||a<s;){if(e[o]===t[a]){o++,a++;continue}for(;e[i-1]===t[s-1];)i--,s--;if(i===o){const h=s<n?a?t[a-1].nextSibling:t[s-a]:l;for(;a<s;)r.insertBefore(t[a++],h)}else if(s===a)for(;o<i;)(!c||!c.has(e[o]))&&e[o].remove(),o++;else if(e[o]===t[s-1]&&t[a]===e[i-1]){const h=e[--i].nextSibling;r.insertBefore(t[a++],e[o++].nextSibling),r.insertBefore(t[--s],h),e[i]=t[s]}else{if(!c){c=new Map;let u=a;for(;u<s;)c.set(t[u],u++)}const h=c.get(e[o]);if(h!=null)if(a<h&&h<s){let u=o,d=1,f;for(;++u<i&&u<s&&!((f=c.get(e[u]))==null||f!==h+d);)d++;if(d>h-a){const g=e[o];for(;a<h;)r.insertBefore(t[a++],g)}else r.replaceChild(t[a++],e[o++])}else o++;else e[o++].remove()}}}const Va="_$DX_DELEGATE";function cu(r,e,t){let n;return eu(i=>{n=i,e===document?r():nt(e,r(),e.firstChild?null:void 0,t)}),()=>{n(),e.textContent=""}}function Tt(r,e,t){const n=document.createElement("template");n.innerHTML=r;let i=n.content.firstChild;return t&&(i=i.firstChild),i}function Hc(r,e=window.document){const t=e[Va]||(e[Va]=new Set);for(let n=0,i=r.length;n<i;n++){const s=r[n];t.has(s)||(t.add(s),e.addEventListener(s,hu))}}function Zi(r,e,t){t==null?r.removeAttribute(e):r.setAttribute(e,t)}function pn(r,e,t={}){const n=r.style,i=typeof t=="string";if(e==null&&i||typeof e=="string")return n.cssText=e;i&&(n.cssText=void 0,t={}),e||(e={});let s,o;for(o in t)e[o]==null&&n.removeProperty(o),delete t[o];for(o in e)s=e[o],s!==t[o]&&(n.setProperty(o,s),t[o]=s);return t}function nt(r,e,t,n){if(t!==void 0&&!n&&(n=[]),typeof e!="function")return _s(r,e,n,t);Ci(i=>_s(r,e(),i,t),n)}function hu(r){const e=`$$${r.type}`;let t=r.composedPath&&r.composedPath()[0]||r.target;for(r.target!==t&&Object.defineProperty(r,"target",{configurable:!0,value:t}),Object.defineProperty(r,"currentTarget",{configurable:!0,get(){return t||document}}),Zt.registry&&!Zt.done&&(Zt.done=!0,document.querySelectorAll("[id^=pl-]").forEach(n=>n.remove()));t!==null;){const n=t[e];if(n&&!t.disabled){const i=t[`${e}Data`];if(i!==void 0?n(i,r):n(r),r.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function _s(r,e,t,n,i){for(Zt.context&&!t&&(t=[...r.childNodes]);typeof t=="function";)t=t();if(e===t)return t;const s=typeof e,o=n!==void 0;if(r=o&&t[0]&&t[0].parentNode||r,s==="string"||s==="number"){if(Zt.context)return t;if(s==="number"&&(e=e.toString()),o){let a=t[0];a&&a.nodeType===3?a.data=e:a=document.createTextNode(e),t=ei(r,t,n,a)}else t!==""&&typeof t=="string"?t=r.firstChild.data=e:t=r.textContent=e}else if(e==null||s==="boolean"){if(Zt.context)return t;t=ei(r,t,n)}else{if(s==="function")return Ci(()=>{let a=e();for(;typeof a=="function";)a=a();t=_s(r,a,t,n)}),()=>t;if(Array.isArray(e)){const a=[];if(Go(a,e,i))return Ci(()=>t=_s(r,a,t,n,!0)),()=>t;if(Zt.context){for(let l=0;l<a.length;l++)if(a[l].parentNode)return t=a}if(a.length===0){if(t=ei(r,t,n),o)return t}else Array.isArray(t)?t.length===0?ka(r,a,n):lu(r,t,a):(t&&ei(r),ka(r,a));t=a}else if(e instanceof Node){if(Zt.context&&e.parentNode)return t=o?[e]:e;if(Array.isArray(t)){if(o)return t=ei(r,t,n,e);ei(r,t,null,e)}else t==null||t===""||!r.firstChild?r.appendChild(e):r.replaceChild(e,r.firstChild);t=e}}return t}function Go(r,e,t){let n=!1;for(let i=0,s=e.length;i<s;i++){let o=e[i],a;if(o instanceof Node)r.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))n=Go(r,o)||n;else if((a=typeof o)=="string")r.push(document.createTextNode(o));else if(a==="function")if(t){for(;typeof o=="function";)o=o();n=Go(r,Array.isArray(o)?o:[o])||n}else r.push(o),n=!0;else r.push(document.createTextNode(o.toString()))}return n}function ka(r,e,t){for(let n=0,i=e.length;n<i;n++)r.insertBefore(e[n],t)}function ei(r,e,t,n){if(t===void 0)return r.textContent="";const i=n||document.createTextNode("");if(e.length){let s=!1;for(let o=e.length-1;o>=0;o--){const a=e[o];if(i!==a){const l=a.parentNode===r;!s&&!o?l?r.replaceChild(i,a):r.insertBefore(i,t):l&&a.remove()}else s=!0}}else r.insertBefore(i,t);return[i]}const uu=Tt("<span>: </span>"),du=Tt('<div><label><input type="number"></label><input type="range" step="1"></div>'),Gc={display:"flex","flex-direction":"column",width:"fit-content"},fu={"border-style":"hidden","background-color":"#00000000",font:"inherit",width:"5ch","text-align":"right","flex-basis":"100%"},Vc=({text:r=""})=>(()=>{const e=uu.cloneNode(!0),t=e.firstChild;return e.style.setProperty("opacity","0.4"),nt(e,r,t),e})();var En=r=>{const e=Oc({min:0,max:10,step:1,scaling:"linear"},r);let t,n;switch(e.scaling){case"pow2":t=o=>Math.pow(2,o),n=o=>Math.log2(o);break;default:t=o=>o,n=o=>o;break}const i=()=>e.signal[0](),s=o=>e.signal[1](o);return(()=>{const o=du.cloneNode(!0),a=o.firstChild,l=a.firstChild,c=a.nextSibling;return pn(o,Gc),nt(a,Ue(Vc,{get text(){return e.text}}),l),l.$$input=h=>s(parseInt(h.currentTarget.value)),pn(l,fu),c.$$input=h=>s(t(parseInt(h.currentTarget.value))),Ci(h=>{const u=e.min,d=e.max,f=i(),g=n(e.min),m=n(e.max),p=n(i());return u!==h._v$&&Zi(l,"min",h._v$=u),d!==h._v$2&&Zi(l,"max",h._v$2=d),f!==h._v$3&&(l.value=h._v$3=f),g!==h._v$4&&Zi(c,"min",h._v$4=g),m!==h._v$5&&Zi(c,"max",h._v$5=m),p!==h._v$6&&(c.value=h._v$6=p),h},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),o})()};Hc(["input"]);const Vo=Tt("<div></div>"),pu=r=>{const e={display:"flex","flex-wrap":"wrap"};return(()=>{const t=Vo.cloneNode(!0);return pn(t,e),nt(t,()=>r.children.map((n,i,s)=>(()=>{const o=Vo.cloneNode(!0);return o.style.setProperty("display","flex"),o.style.setProperty("flex-direction","row"),nt(o,n,null),nt(o,(()=>{const a=au(()=>i<s.length-2,!0);return()=>a()?",\xA0":[]})(),null),o})())),t})()};var fa=r=>{const e={"font-weight":"bold","font-family":"ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",display:"flex","flex-direction":"row","justify-content":"center","white-space":"nowrap","font-size":"18pt","flex-grow":1,margin:"15px"};return(()=>{const t=Vo.cloneNode(!0);return pn(t,e),nt(t,()=>r.children[0],null),nt(t,Ue(pu,{get children(){return r.children.slice(1)}}),null),t})()};const mu=Tt("<div><label><output></output></label></div>");var cs=r=>{const e={width:"4ch","margin-right":"1ch",display:"inline-block","text-align":"right"};return(()=>{const t=mu.cloneNode(!0),n=t.firstChild,i=n.firstChild;return pn(t,Gc),nt(n,Ue(Vc,{get text(){return r.text}}),i),pn(i,e),nt(i,()=>r.value),t})()};const gu=Tt("<div></div>");var pa=r=>(()=>{const e=gu.cloneNode(!0);return e.style.setProperty("outline","1px solid #888"),e.style.setProperty("border-radius","0.75ch"),e.style.setProperty("min-width","fit-content"),e.style.setProperty("display","flex"),e.style.setProperty("align-items","center"),e.style.setProperty("flex-direction","row"),e.style.setProperty("justify-content","space-between"),nt(e,()=>r.children),e})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ma="140",xu=0,Wa=1,_u=2,kc=1,vu=2,Ki=3,sr=0,Lt=1,Li=2,Wc=1,Tn=0,Ei=1,qa=2,Xa=3,$a=4,yu=5,vi=100,bu=101,wu=102,ja=103,Ya=104,Mu=200,Su=201,Eu=202,Tu=203,qc=204,Xc=205,Au=206,Cu=207,Lu=208,Ru=209,Pu=210,Du=0,Iu=1,Bu=2,ko=3,Fu=4,Nu=5,zu=6,Uu=7,Ds=0,Ou=1,Hu=2,fn=0,Gu=1,Vu=2,ku=3,Wu=4,qu=5,$c=300,Ri=301,Pi=302,Wo=303,qo=304,Is=306,hn=1e3,Gt=1001,Xo=1002,dt=1003,Ja=1004,Za=1005,wt=1006,Xu=1007,Bs=1008,Wn=1009,$u=1010,ju=1011,or=1012,Yu=1013,hs=1014,On=1015,ar=1016,Ju=1017,Zu=1018,Ti=1020,Ku=1021,Qu=1022,kt=1023,ed=1024,td=1025,Vn=1026,Di=1027,nd=1028,id=1029,rd=1030,sd=1031,od=1033,Ys=33776,Js=33777,Zs=33778,Ks=33779,Ka=35840,Qa=35841,el=35842,tl=35843,ad=36196,nl=37492,il=37496,rl=37808,sl=37809,ol=37810,al=37811,ll=37812,cl=37813,hl=37814,ul=37815,dl=37816,fl=37817,pl=37818,ml=37819,gl=37820,xl=37821,_l=36492,ld=2200,cd=2201,hd=2202,vs=2300,ys=2301,Qs=2302,bi=2400,wi=2401,bs=2402,ga=2500,jc=2501,ud=0,Ln=3e3,Ze=3001,dd=3200,fd=3201,Fi=0,pd=1,cn="srgb",Hn="srgb-linear",eo=7680,md=519,lr=35044,ws=35048,vl="300 es",$o=1035;class Xn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const ft=[];for(let r=0;r<256;r++)ft[r]=(r<16?"0":"")+r.toString(16);const us=Math.PI/180,jo=180/Math.PI;function Qt(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ft[r&255]+ft[r>>8&255]+ft[r>>16&255]+ft[r>>24&255]+"-"+ft[e&255]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[t&63|128]+ft[t>>8&255]+"-"+ft[t>>16&255]+ft[t>>24&255]+ft[n&255]+ft[n>>8&255]+ft[n>>16&255]+ft[n>>24&255]).toLowerCase()}function gt(r,e,t){return Math.max(e,Math.min(t,r))}function gd(r,e){return(r%e+e)%e}function to(r,e,t){return(1-t)*r+t*e}function yl(r){return(r&r-1)===0&&r!==0}function Yo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}class J{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}J.prototype.isVector2=!0;class pt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],m=i[0],p=i[3],x=i[6],w=i[1],T=i[4],E=i[7],b=i[2],L=i[5],P=i[8];return s[0]=o*m+a*w+l*b,s[3]=o*p+a*T+l*L,s[6]=o*x+a*E+l*P,s[1]=c*m+h*w+u*b,s[4]=c*p+h*T+u*L,s[7]=c*x+h*E+u*P,s[2]=d*m+f*w+g*b,s[5]=d*p+f*T+g*L,s[8]=d*x+f*E+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=u*m,e[1]=(i*c-h*n)*m,e[2]=(a*n-i*o)*m,e[3]=d*m,e[4]=(h*t-i*l)*m,e[5]=(i*s-a*t)*m,e[6]=f*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*s+n*l,i[3]=t*o+n*c,i[6]=t*a+n*h,i[1]=-n*s+t*l,i[4]=-n*o+t*c,i[7]=-n*a+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}pt.prototype.isMatrix3=!0;function Yc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>65535)return!0;return!1}function cr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function kn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ds(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const no={[cn]:{[Hn]:kn},[Hn]:{[cn]:ds}},zt={legacyMode:!0,get workingColorSpace(){return Hn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(no[e]&&no[e][t]!==void 0){const n=no[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},at={r:0,g:0,b:0},Ut={h:0,s:0,l:0},Er={h:0,s:0,l:0};function io(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Tr(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class pe{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Hn){return this.r=e,this.g=t,this.b=n,zt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Hn){if(e=gd(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=io(o,s,e+1/3),this.g=io(o,s,e),this.b=io(o,s,e-1/3)}return zt.toWorkingColorSpace(this,i),this}setStyle(e,t=cn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,zt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,zt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,h=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(l,c,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,zt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,zt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=cn){const n=Jc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return zt.fromWorkingColorSpace(Tr(this,at),e),gt(at.r*255,0,255)<<16^gt(at.g*255,0,255)<<8^gt(at.b*255,0,255)<<0}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Hn){zt.fromWorkingColorSpace(Tr(this,at),t);const n=at.r,i=at.g,s=at.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Hn){return zt.fromWorkingColorSpace(Tr(this,at),t),e.r=at.r,e.g=at.g,e.b=at.b,e}getStyle(e=cn){return zt.fromWorkingColorSpace(Tr(this,at),e),e!==cn?`color(${e} ${at.r} ${at.g} ${at.b})`:`rgb(${at.r*255|0},${at.g*255|0},${at.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ut),Ut.h+=e,Ut.s+=t,Ut.l+=n,this.setHSL(Ut.h,Ut.s,Ut.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ut),e.getHSL(Er);const n=to(Ut.h,Er.h,t),i=to(Ut.s,Er.s,t),s=to(Ut.l,Er.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}pe.NAMES=Jc;pe.prototype.isColor=!0;pe.prototype.r=1;pe.prototype.g=1;pe.prototype.b=1;let ti;class $n{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ti===void 0&&(ti=cr("canvas")),ti.width=e.width,ti.height=e.height;const n=ti.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=kn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kn(t[n]/255)*255):t[n]=kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class xa{constructor(e=null){this.uuid=Qt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ro(i[o].image)):s.push(ro(i[o]))}else s=ro(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ro(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?$n.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}xa.prototype.isSource=!0;let xd=0;class ct extends Xn{constructor(e=ct.DEFAULT_IMAGE,t=ct.DEFAULT_MAPPING,n=Gt,i=Gt,s=wt,o=Bs,a=kt,l=Wn,c=1,h=Ln){super(),Object.defineProperty(this,"id",{value:xd++}),this.uuid=Qt(),this.name="",this.source=new xa(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$c)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hn:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case Xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hn:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case Xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ct.DEFAULT_IMAGE=null;ct.DEFAULT_MAPPING=$c;ct.prototype.isTexture=!0;class Xe{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],m=l[2],p=l[6],x=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,E=(f+1)/2,b=(x+1)/2,L=(h+d)/4,P=(u+m)/4,v=(g+p)/4;return T>E&&T>b?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=L/n,s=P/n):E>b?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=L/i,s=v/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=P/s,i=v/s),this.set(n,i,s,t),this}let w=Math.sqrt((p-g)*(p-g)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(u-m)/w,this.z=(d-h)/w,this.w=Math.acos((c+f+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}Xe.prototype.isVector4=!0;class Rt extends Xn{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Xe(0,0,e,t),this.scissorTest=!1,this.viewport=new Xe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new ct(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:wt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}Rt.prototype.isWebGLRenderTarget=!0;class Fs extends ct{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Fs.prototype.isDataArrayTexture=!0;class _d extends Rt{constructor(e,t,n){super(e,t),this.depth=n,this.texture=new Fs(null,e,t,n),this.texture.isRenderTargetTexture=!0}}_d.prototype.isWebGLArrayRenderTarget=!0;class _a extends ct{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}_a.prototype.isData3DTexture=!0;class vd extends Rt{constructor(e,t,n){super(e,t),this.depth=n,this.texture=new _a(null,e,t,n),this.texture.isRenderTargetTexture=!0}}vd.prototype.isWebGL3DRenderTarget=!0;class yd extends Rt{constructor(e,t,n,i={}){super(e,t,i);const s=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=s.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}yd.prototype.isWebGLMultipleRenderTargets=!0;class Et{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=m;return}if(u!==m||l!==d||c!==f||h!==g){let p=1-a;const x=l*d+c*f+h*g+u*m,w=x>=0?1:-1,T=1-x*x;if(T>Number.EPSILON){const b=Math.sqrt(T),L=Math.atan2(b,x*w);p=Math.sin(p*L)/b,a=Math.sin(a*L)/b}const E=a*w;if(l=l*p+d*E,c=c*p+f*E,h=h*p+g*E,u=u*p+m*E,p===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}Et.prototype.isQuaternion=!0;class S{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(bl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,h=l*n+a*t-s*i,u=l*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=c*l+d*-s+h*-a-u*-o,this.y=h*l+d*-o+u*-s-c*-a,this.z=u*l+d*-a+c*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return so.copy(this).projectOnVector(e),this.sub(so)}reflect(e){return this.sub(so.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}S.prototype.isVector3=!0;const so=new S,bl=new Et;class Dt{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Bn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Bn)}else n.boundingBox===null&&n.computeBoundingBox(),oo.copy(n.boundingBox),oo.applyMatrix4(e.matrixWorld),this.union(oo);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ki),Ar.subVectors(this.max,ki),ni.subVectors(e.a,ki),ii.subVectors(e.b,ki),ri.subVectors(e.c,ki),xn.subVectors(ii,ni),_n.subVectors(ri,ii),Fn.subVectors(ni,ri);let t=[0,-xn.z,xn.y,0,-_n.z,_n.y,0,-Fn.z,Fn.y,xn.z,0,-xn.x,_n.z,0,-_n.x,Fn.z,0,-Fn.x,-xn.y,xn.x,0,-_n.y,_n.x,0,-Fn.y,Fn.x,0];return!ao(t,ni,ii,ri,Ar)||(t=[1,0,0,0,1,0,0,0,1],!ao(t,ni,ii,ri,Ar))?!1:(Cr.crossVectors(xn,_n),t=[Cr.x,Cr.y,Cr.z],ao(t,ni,ii,ri,Ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Bn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Dt.prototype.isBox3=!0;const nn=[new S,new S,new S,new S,new S,new S,new S,new S],Bn=new S,oo=new Dt,ni=new S,ii=new S,ri=new S,xn=new S,_n=new S,Fn=new S,ki=new S,Ar=new S,Cr=new S,Nn=new S;function ao(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Nn.fromArray(r,s);const a=i.x*Math.abs(Nn.x)+i.y*Math.abs(Nn.y)+i.z*Math.abs(Nn.z),l=e.dot(Nn),c=t.dot(Nn),h=n.dot(Nn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const bd=new Dt,wl=new S,Lr=new S,lo=new S;class jn{constructor(e=new S,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){lo.subVectors(e,this.center);const t=lo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(lo.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Lr.set(0,0,1).multiplyScalar(e.radius):Lr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(wl.copy(e.center).add(Lr)),this.expandByPoint(wl.copy(e.center).sub(Lr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rn=new S,co=new S,Rr=new S,vn=new S,ho=new S,Pr=new S,uo=new S;class Yn{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rn.copy(this.direction).multiplyScalar(t).add(this.origin),rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){co.copy(e).add(t).multiplyScalar(.5),Rr.copy(t).sub(e).normalize(),vn.copy(this.origin).sub(co);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Rr),a=vn.dot(this.direction),l=-vn.dot(Rr),c=vn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const m=1/h;u*=m,d*=m,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Rr).multiplyScalar(d).add(co),f}intersectSphere(e,t){rn.subVectors(e.center,this.origin);const n=rn.dot(this.direction),i=rn.dot(rn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,rn)!==null}intersectTriangle(e,t,n,i,s){ho.subVectors(t,e),Pr.subVectors(n,e),uo.crossVectors(ho,Pr);let o=this.direction.dot(uo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vn.subVectors(this.origin,e);const l=a*this.direction.dot(Pr.crossVectors(vn,Pr));if(l<0)return null;const c=a*this.direction.dot(ho.cross(vn));if(c<0||l+c>o)return null;const h=-a*vn.dot(uo);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c,h,u,d,f,g,m,p){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=d,x[3]=f,x[7]=g,x[11]=m,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/si.setFromMatrixColumn(e,0).length(),s=1/si.setFromMatrixColumn(e,1).length(),o=1/si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,m=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-m*c,t[9]=-a*l,t[2]=m-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,m=c*u;t[0]=d+m*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=m+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,m=c*u;t[0]=d-m*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=m-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,m=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+m,t[1]=l*u,t[5]=m*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,m=a*c;t[0]=l*h,t[4]=m-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-m*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,m=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+m,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=m*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wd,e,Md)}lookAt(e,t,n){const i=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),yn.crossVectors(n,At),yn.lengthSq()===0&&(Math.abs(n.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),yn.crossVectors(n,At)),yn.normalize(),Dr.crossVectors(At,yn),i[0]=yn.x,i[4]=Dr.x,i[8]=At.x,i[1]=yn.y,i[5]=Dr.y,i[9]=At.y,i[2]=yn.z,i[6]=Dr.z,i[10]=At.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],m=n[6],p=n[10],x=n[14],w=n[3],T=n[7],E=n[11],b=n[15],L=i[0],P=i[4],v=i[8],C=i[12],D=i[1],I=i[5],Z=i[9],Y=i[13],A=i[2],z=i[6],F=i[10],G=i[14],W=i[3],U=i[7],k=i[11],ee=i[15];return s[0]=o*L+a*D+l*A+c*W,s[4]=o*P+a*I+l*z+c*U,s[8]=o*v+a*Z+l*F+c*k,s[12]=o*C+a*Y+l*G+c*ee,s[1]=h*L+u*D+d*A+f*W,s[5]=h*P+u*I+d*z+f*U,s[9]=h*v+u*Z+d*F+f*k,s[13]=h*C+u*Y+d*G+f*ee,s[2]=g*L+m*D+p*A+x*W,s[6]=g*P+m*I+p*z+x*U,s[10]=g*v+m*Z+p*F+x*k,s[14]=g*C+m*Y+p*G+x*ee,s[3]=w*L+T*D+E*A+b*W,s[7]=w*P+T*I+E*z+b*U,s[11]=w*v+T*Z+E*F+b*k,s[15]=w*C+T*Y+E*G+b*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],m=e[7],p=e[11],x=e[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+m*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+p*(+t*c*u-t*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+x*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],m=e[13],p=e[14],x=e[15],w=u*p*c-m*d*c+m*l*f-a*p*f-u*l*x+a*d*x,T=g*d*c-h*p*c-g*l*f+o*p*f+h*l*x-o*d*x,E=h*m*c-g*u*c+g*a*f-o*m*f-h*a*x+o*u*x,b=g*u*l-h*m*l-g*a*d+o*m*d+h*a*p-o*u*p,L=t*w+n*T+i*E+s*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return e[0]=w*P,e[1]=(m*d*s-u*p*s-m*i*f+n*p*f+u*i*x-n*d*x)*P,e[2]=(a*p*s-m*l*s+m*i*c-n*p*c-a*i*x+n*l*x)*P,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*P,e[4]=T*P,e[5]=(h*p*s-g*d*s+g*i*f-t*p*f-h*i*x+t*d*x)*P,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*x-t*l*x)*P,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*f+t*l*f)*P,e[8]=E*P,e[9]=(g*u*s-h*m*s-g*n*f+t*m*f+h*n*x-t*u*x)*P,e[10]=(o*m*s-g*a*s+g*n*c-t*m*c-o*n*x+t*a*x)*P,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*f-t*a*f)*P,e[12]=b*P,e[13]=(h*m*i-g*u*i+g*n*d-t*m*d-h*n*p+t*u*p)*P,e[14]=(g*a*i-o*m*i-g*n*l+t*m*l+o*n*p-t*a*p)*P,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,g=s*u,m=o*h,p=o*u,x=a*u,w=l*c,T=l*h,E=l*u,b=n.x,L=n.y,P=n.z;return i[0]=(1-(m+x))*b,i[1]=(f+E)*b,i[2]=(g-T)*b,i[3]=0,i[4]=(f-E)*L,i[5]=(1-(d+x))*L,i[6]=(p+w)*L,i[7]=0,i[8]=(g+T)*P,i[9]=(p-w)*P,i[10]=(1-(d+m))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=si.set(i[0],i[1],i[2]).length();const o=si.set(i[4],i[5],i[6]).length(),a=si.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ot.copy(this);const c=1/s,h=1/o,u=1/a;return Ot.elements[0]*=c,Ot.elements[1]*=c,Ot.elements[2]*=c,Ot.elements[4]*=h,Ot.elements[5]*=h,Ot.elements[6]*=h,Ot.elements[8]*=u,Ot.elements[9]*=u,Ot.elements[10]*=u,t.setFromRotationMatrix(Ot),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),h=1/(o-s),u=(t+e)*l,d=(n+i)*c,f=(o+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}_e.prototype.isMatrix4=!0;const si=new S,Ot=new _e,wd=new S(0,0,0),Md=new S(1,1,1),yn=new S,Dr=new S,At=new S,Ml=new _e,Sl=new Et;class Jn{constructor(e=0,t=0,n=0,i=Jn.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ml.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ml,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sl.setFromEuler(this),this.setFromQuaternion(Sl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.prototype.isEuler=!0;Jn.DefaultOrder="XYZ";Jn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class va{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sd=0;const El=new S,oi=new Et,sn=new _e,Ir=new S,Wi=new S,Ed=new S,Td=new Et,Tl=new S(1,0,0),Al=new S(0,1,0),Cl=new S(0,0,1),Ad={type:"added"},Ll={type:"removed"};class We extends Xn{constructor(){super(),Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Qt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DefaultUp.clone();const e=new S,t=new Jn,n=new Et,i=new S(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _e},normalMatrix:{value:new pt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=We.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(Tl,e)}rotateY(e){return this.rotateOnAxis(Al,e)}rotateZ(e){return this.rotateOnAxis(Cl,e)}translateOnAxis(e,t){return El.copy(e).applyQuaternion(this.quaternion),this.position.add(El.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tl,e)}translateY(e){return this.translateOnAxis(Al,e)}translateZ(e){return this.translateOnAxis(Cl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ir.copy(e):Ir.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Wi,Ir,this.up):sn.lookAt(Ir,Wi,this.up),this.quaternion.setFromRotationMatrix(sn),i&&(sn.extractRotation(i.matrixWorld),oi.setFromRotationMatrix(sn),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ad)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ll)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ll)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,e,Ed),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,Td,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}We.DefaultUp=new S(0,1,0);We.DefaultMatrixAutoUpdate=!0;We.prototype.isObject3D=!0;const Ht=new S,on=new S,fo=new S,an=new S,ai=new S,li=new S,Rl=new S,po=new S,mo=new S,go=new S;class st{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ht.subVectors(e,t),i.cross(Ht);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ht.subVectors(i,t),on.subVectors(n,t),fo.subVectors(e,t);const o=Ht.dot(Ht),a=Ht.dot(on),l=Ht.dot(fo),c=on.dot(on),h=on.dot(fo),u=o*c-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,an),an.x>=0&&an.y>=0&&an.x+an.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,an),l.set(0,0),l.addScaledVector(s,an.x),l.addScaledVector(o,an.y),l.addScaledVector(a,an.z),l}static isFrontFacing(e,t,n,i){return Ht.subVectors(n,t),on.subVectors(e,t),Ht.cross(on).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Ht.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return st.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return st.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return st.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return st.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return st.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;ai.subVectors(i,n),li.subVectors(s,n),po.subVectors(e,n);const l=ai.dot(po),c=li.dot(po);if(l<=0&&c<=0)return t.copy(n);mo.subVectors(e,i);const h=ai.dot(mo),u=li.dot(mo);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ai,o);go.subVectors(e,s);const f=ai.dot(go),g=li.dot(go);if(g>=0&&f<=g)return t.copy(s);const m=f*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(li,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Rl.subVectors(s,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Rl,a);const x=1/(p+m+d);return o=m*x,a=d*x,t.copy(n).addScaledVector(ai,o).addScaledVector(li,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Cd=0;class ht extends Xn{constructor(){super(),Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Qt(),this.name="",this.type="Material",this.blending=Ei,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=qc,this.blendDst=Xc,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Wc;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==sr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}ht.prototype.isMaterial=!0;ht.fromType=function(){return null};class xr extends ht{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ds,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}xr.prototype.isMeshBasicMaterial=!0;const rt=new S,Br=new J;class ot{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=lr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new pe),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new J),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new S),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new Xe),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Br.fromBufferAttribute(this,t),Br.applyMatrix3(e),this.setXY(t,Br.x,Br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}ot.prototype.isBufferAttribute=!0;class Zc extends ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Kc extends ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ld extends ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}Ld.prototype.isFloat16BufferAttribute=!0;class Je extends ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Rd=0;const It=new _e,xo=new We,ci=new S,Ct=new Dt,qi=new Dt,ut=new S;class $e extends Xn{constructor(){super(),Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Qt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yc(e)?Kc:Zc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new pt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return It.makeRotationFromQuaternion(e),this.applyMatrix4(It),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,n){return It.makeTranslation(e,t,n),this.applyMatrix4(It),this}scale(e,t,n){return It.makeScale(e,t,n),this.applyMatrix4(It),this}lookAt(e){return xo.lookAt(e),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Je(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ct.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new S,1/0);return}if(e){const n=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];qi.setFromBufferAttribute(a),this.morphTargetsRelative?(ut.addVectors(Ct.min,qi.min),Ct.expandByPoint(ut),ut.addVectors(Ct.max,qi.max),Ct.expandByPoint(ut)):(Ct.expandByPoint(qi.min),Ct.expandByPoint(qi.max))}Ct.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)ut.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ut));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ut.fromBufferAttribute(a,c),l&&(ci.fromBufferAttribute(e,c),ut.add(ci)),i=Math.max(i,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ot(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let D=0;D<a;D++)c[D]=new S,h[D]=new S;const u=new S,d=new S,f=new S,g=new J,m=new J,p=new J,x=new S,w=new S;function T(D,I,Z){u.fromArray(i,D*3),d.fromArray(i,I*3),f.fromArray(i,Z*3),g.fromArray(o,D*2),m.fromArray(o,I*2),p.fromArray(o,Z*2),d.sub(u),f.sub(u),m.sub(g),p.sub(g);const Y=1/(m.x*p.y-p.x*m.y);!isFinite(Y)||(x.copy(d).multiplyScalar(p.y).addScaledVector(f,-m.y).multiplyScalar(Y),w.copy(f).multiplyScalar(m.x).addScaledVector(d,-p.x).multiplyScalar(Y),c[D].add(x),c[I].add(x),c[Z].add(x),h[D].add(w),h[I].add(w),h[Z].add(w))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let D=0,I=E.length;D<I;++D){const Z=E[D],Y=Z.start,A=Z.count;for(let z=Y,F=Y+A;z<F;z+=3)T(n[z+0],n[z+1],n[z+2])}const b=new S,L=new S,P=new S,v=new S;function C(D){P.fromArray(s,D*3),v.copy(P);const I=c[D];b.copy(I),b.sub(P.multiplyScalar(P.dot(I))).normalize(),L.crossVectors(v,I);const Y=L.dot(h[D])<0?-1:1;l[D*4]=b.x,l[D*4+1]=b.y,l[D*4+2]=b.z,l[D*4+3]=Y}for(let D=0,I=E.length;D<I;++D){const Z=E[D],Y=Z.start,A=Z.count;for(let z=Y,F=Y+A;z<F;z+=3)C(n[z+0]),C(n[z+1]),C(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new S,s=new S,o=new S,a=new S,l=new S,c=new S,h=new S,u=new S;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),m=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,h=Math.min(l.length,o.length-c);for(let u=0,d=c;u<h;u++,d++)o[d]=l[u]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?f=l[m]*a.data.stride+a.offset:f=l[m]*h;for(let x=0;x<h;x++)d[g++]=c[f++]}return new ot(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $e,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}$e.prototype.isBufferGeometry=!0;const Pl=new _e,hi=new Yn,_o=new jn,bn=new S,wn=new S,Mn=new S,vo=new S,yo=new S,bo=new S,Fr=new S,Nr=new S,zr=new S,Ur=new J,Or=new J,Hr=new J,wo=new S,Gr=new S;class et extends We{constructor(e=new $e,t=new xr){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(s),e.ray.intersectsSphere(_o)===!1)||(Pl.copy(s).invert(),hi.copy(e.ray).applyMatrix4(Pl),n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,f=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,p=f.length;m<p;m++){const x=f[m],w=i[x.materialIndex],T=Math.max(x.start,g.start),E=Math.min(a.count,Math.min(x.start+x.count,g.start+g.count));for(let b=T,L=E;b<L;b+=3){const P=a.getX(b),v=a.getX(b+1),C=a.getX(b+2);o=Vr(this,w,e,hi,l,c,h,u,d,P,v,C),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let x=m,w=p;x<w;x+=3){const T=a.getX(x),E=a.getX(x+1),b=a.getX(x+2);o=Vr(this,i,e,hi,l,c,h,u,d,T,E,b),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,p=f.length;m<p;m++){const x=f[m],w=i[x.materialIndex],T=Math.max(x.start,g.start),E=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let b=T,L=E;b<L;b+=3){const P=b,v=b+1,C=b+2;o=Vr(this,w,e,hi,l,c,h,u,d,P,v,C),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let x=m,w=p;x<w;x+=3){const T=x,E=x+1,b=x+2;o=Vr(this,i,e,hi,l,c,h,u,d,T,E,b),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}et.prototype.isMesh=!0;function Pd(r,e,t,n,i,s,o,a){let l;if(e.side===Lt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side!==Li,a),l===null)return null;Gr.copy(a),Gr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Gr);return c<t.near||c>t.far?null:{distance:c,point:Gr.clone(),object:r}}function Vr(r,e,t,n,i,s,o,a,l,c,h,u){bn.fromBufferAttribute(i,c),wn.fromBufferAttribute(i,h),Mn.fromBufferAttribute(i,u);const d=r.morphTargetInfluences;if(s&&d){Fr.set(0,0,0),Nr.set(0,0,0),zr.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const p=d[g],x=s[g];p!==0&&(vo.fromBufferAttribute(x,c),yo.fromBufferAttribute(x,h),bo.fromBufferAttribute(x,u),o?(Fr.addScaledVector(vo,p),Nr.addScaledVector(yo,p),zr.addScaledVector(bo,p)):(Fr.addScaledVector(vo.sub(bn),p),Nr.addScaledVector(yo.sub(wn),p),zr.addScaledVector(bo.sub(Mn),p)))}bn.add(Fr),wn.add(Nr),Mn.add(zr)}r.isSkinnedMesh&&(r.boneTransform(c,bn),r.boneTransform(h,wn),r.boneTransform(u,Mn));const f=Pd(r,e,t,n,bn,wn,Mn,wo);if(f){a&&(Ur.fromBufferAttribute(a,c),Or.fromBufferAttribute(a,h),Hr.fromBufferAttribute(a,u),f.uv=st.getUV(wo,bn,wn,Mn,Ur,Or,Hr,new J)),l&&(Ur.fromBufferAttribute(l,c),Or.fromBufferAttribute(l,h),Hr.fromBufferAttribute(l,u),f.uv2=st.getUV(wo,bn,wn,Mn,Ur,Or,Hr,new J));const g={a:c,b:h,c:u,normal:new S,materialIndex:0};st.getNormal(bn,wn,Mn,g.normal),f.face=g}return f}class mn extends $e{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(u,2));function g(m,p,x,w,T,E,b,L,P,v,C){const D=E/P,I=b/v,Z=E/2,Y=b/2,A=L/2,z=P+1,F=v+1;let G=0,W=0;const U=new S;for(let k=0;k<F;k++){const ee=k*I-Y;for(let K=0;K<z;K++){const te=K*D-Z;U[m]=te*w,U[p]=ee*T,U[x]=A,c.push(U.x,U.y,U.z),U[m]=0,U[p]=0,U[x]=L>0?1:-1,h.push(U.x,U.y,U.z),u.push(K/P),u.push(1-k/v),G+=1}}for(let k=0;k<v;k++)for(let ee=0;ee<P;ee++){const K=d+ee+z*k,te=d+ee+z*(k+1),me=d+(ee+1)+z*(k+1),ge=d+(ee+1)+z*k;l.push(K,te,ge),l.push(te,me,ge),W+=6}a.addGroup(f,W,C),f+=W,d+=G}}static fromJSON(e){return new mn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ii(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mt(r){const e={};for(let t=0;t<r.length;t++){const n=Ii(r[t]);for(const i in n)e[i]=n[i]}return e}const ya={clone:Ii,merge:mt};var Dd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Id=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ft extends ht{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Dd,this.fragmentShader=Id,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}Ft.prototype.isShaderMaterial=!0;class ba extends We{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}ba.prototype.isCamera=!0;class Mt extends ba{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jo*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(us*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}Mt.prototype.isPerspectiveCamera=!0;const ui=90,di=1;class wa extends We{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Mt(ui,di,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new S(1,0,0)),this.add(i);const s=new Mt(ui,di,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new S(-1,0,0)),this.add(s);const o=new Mt(ui,di,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new S(0,1,0)),this.add(o);const a=new Mt(ui,di,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new S(0,-1,0)),this.add(a);const l=new Mt(ui,di,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new S(0,0,1)),this.add(l);const c=new Mt(ui,di,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new S(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=fn,e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Ns extends ct{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ri,super(e,t,n,i,s,o,a,l,c,h),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Ns.prototype.isCubeTexture=!0;class Qc extends Rt{constructor(e,t={}){super(e,e,t);const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ns(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new mn(5,5,5),s=new Ft({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:Tn});s.uniforms.tEquirect.value=t;const o=new et(i,s),a=t.minFilter;return t.minFilter===Bs&&(t.minFilter=wt),new wa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}Qc.prototype.isWebGLCubeRenderTarget=!0;const Mo=new S,Bd=new S,Fd=new pt;class un{constructor(e=new S(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Mo.subVectors(n,t).cross(Bd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Mo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fd.getNormalMatrix(e),i=this.coplanarPoint(Mo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}un.prototype.isPlane=!0;const fi=new jn,kr=new S;class zs{constructor(e=new un,t=new un,n=new un,i=new un,s=new un,o=new un){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],f=n[9],g=n[10],m=n[11],p=n[12],x=n[13],w=n[14],T=n[15];return t[0].setComponents(a-i,u-l,m-d,T-p).normalize(),t[1].setComponents(a+i,u+l,m+d,T+p).normalize(),t[2].setComponents(a+s,u+c,m+f,T+x).normalize(),t[3].setComponents(a-s,u-c,m-f,T-x).normalize(),t[4].setComponents(a-o,u-h,m-g,T-w).normalize(),t[5].setComponents(a+o,u+h,m+g,T+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(kr.x=i.normal.x>0?e.max.x:e.min.x,kr.y=i.normal.y>0?e.max.y:e.min.y,kr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eh(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Nd(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,f=h.updateRange;r.bindBuffer(u,c),f.count===-1?r.bufferSubData(u,0,d):(t?r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class Ma extends $e{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],m=[],p=[];for(let x=0;x<h;x++){const w=x*d-o;for(let T=0;T<c;T++){const E=T*u-s;g.push(E,-w,0),m.push(0,0,1),p.push(T/a),p.push(1-x/l)}}for(let x=0;x<l;x++)for(let w=0;w<a;w++){const T=w+c*x,E=w+c*(x+1),b=w+1+c*(x+1),L=w+1+c*x;f.push(T,E,L),f.push(E,b,L)}this.setIndex(f),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(m,3)),this.setAttribute("uv",new Je(p,2))}static fromJSON(e){return new Ma(e.width,e.height,e.widthSegments,e.heightSegments)}}var zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Od=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kd="vec3 transformed = vec3( position );",Wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qd=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Xd=`#ifdef USE_BUMPMAP
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
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tf=`#define PI 3.141592653589793
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
}`,nf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rf=`vec3 transformedNormal = objectNormal;
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
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",hf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uf=`#ifdef USE_ENVMAP
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
#endif`,df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ff=`#ifdef USE_ENVMAP
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
#endif`,pf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mf=`#ifdef USE_ENVMAP
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
#endif`,gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yf=`#ifdef USE_GRADIENTMAP
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
}`,bf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mf=`vec3 diffuse = vec3( 1.0 );
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
#endif`,Sf=`uniform bool receiveShadow;
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
#endif`,Ef=`#if defined( USE_ENVMAP )
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
#endif`,Tf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Af=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lf=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Rf=`PhysicalMaterial material;
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
#endif`,Pf=`struct PhysicalMaterial {
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
}`,Df=`
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
#endif`,If=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ff=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Uf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xf=`#ifdef USE_MORPHNORMALS
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
#endif`,$f=`#ifdef USE_MORPHTARGETS
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
#endif`,jf=`#ifdef USE_MORPHTARGETS
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
#endif`,Yf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Jf=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ep=`#ifdef USE_NORMALMAP
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
#endif`,tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dp=`#ifdef USE_SHADOWMAP
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
#endif`,fp=`#ifdef USE_SHADOWMAP
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
#endif`,pp=`#ifdef USE_SHADOWMAP
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
#endif`,mp=`float getShadowMask() {
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
}`,gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xp=`#ifdef USE_SKINNING
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
#endif`,_p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vp=`#ifdef USE_SKINNING
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
#endif`,yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sp=`#ifdef USE_TRANSMISSION
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
#endif`,Ep=`#ifdef USE_TRANSMISSION
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
#endif`,Tp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ap=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Cp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Lp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Rp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Pp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bp=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Np=`#include <envmap_common_pars_fragment>
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
}`,zp=`#include <common>
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
}`,Up=`#if DEPTH_PACKING == 3200
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
}`,Op=`#define DISTANCE
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
}`,Hp=`#define DISTANCE
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kp=`uniform float scale;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,qp=`#include <common>
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
}`,Xp=`uniform vec3 diffuse;
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
}`,$p=`#define LAMBERT
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
}`,jp=`uniform vec3 diffuse;
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
}`,Yp=`#define MATCAP
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
}`,Jp=`#define MATCAP
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
}`,Zp=`#define NORMAL
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
}`,Kp=`#define NORMAL
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
}`,Qp=`#define PHONG
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
}`,em=`#define PHONG
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
}`,tm=`#define STANDARD
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
}`,nm=`#define STANDARD
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
}`,im=`#define TOON
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
}`,rm=`#define TOON
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
}`,sm=`uniform float size;
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
}`,om=`uniform vec3 diffuse;
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
}`,am=`#include <common>
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
}`,lm=`uniform vec3 color;
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
}`,cm=`uniform float rotation;
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
}`,hm=`uniform vec3 diffuse;
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
}`,Ie={alphamap_fragment:zd,alphamap_pars_fragment:Ud,alphatest_fragment:Od,alphatest_pars_fragment:Hd,aomap_fragment:Gd,aomap_pars_fragment:Vd,begin_vertex:kd,beginnormal_vertex:Wd,bsdfs:qd,bumpmap_pars_fragment:Xd,clipping_planes_fragment:$d,clipping_planes_pars_fragment:jd,clipping_planes_pars_vertex:Yd,clipping_planes_vertex:Jd,color_fragment:Zd,color_pars_fragment:Kd,color_pars_vertex:Qd,color_vertex:ef,common:tf,cube_uv_reflection_fragment:nf,defaultnormal_vertex:rf,displacementmap_pars_vertex:sf,displacementmap_vertex:of,emissivemap_fragment:af,emissivemap_pars_fragment:lf,encodings_fragment:cf,encodings_pars_fragment:hf,envmap_fragment:uf,envmap_common_pars_fragment:df,envmap_pars_fragment:ff,envmap_pars_vertex:pf,envmap_physical_pars_fragment:Ef,envmap_vertex:mf,fog_vertex:gf,fog_pars_vertex:xf,fog_fragment:_f,fog_pars_fragment:vf,gradientmap_pars_fragment:yf,lightmap_fragment:bf,lightmap_pars_fragment:wf,lights_lambert_vertex:Mf,lights_pars_begin:Sf,lights_toon_fragment:Tf,lights_toon_pars_fragment:Af,lights_phong_fragment:Cf,lights_phong_pars_fragment:Lf,lights_physical_fragment:Rf,lights_physical_pars_fragment:Pf,lights_fragment_begin:Df,lights_fragment_maps:If,lights_fragment_end:Bf,logdepthbuf_fragment:Ff,logdepthbuf_pars_fragment:Nf,logdepthbuf_pars_vertex:zf,logdepthbuf_vertex:Uf,map_fragment:Of,map_pars_fragment:Hf,map_particle_fragment:Gf,map_particle_pars_fragment:Vf,metalnessmap_fragment:kf,metalnessmap_pars_fragment:Wf,morphcolor_vertex:qf,morphnormal_vertex:Xf,morphtarget_pars_vertex:$f,morphtarget_vertex:jf,normal_fragment_begin:Yf,normal_fragment_maps:Jf,normal_pars_fragment:Zf,normal_pars_vertex:Kf,normal_vertex:Qf,normalmap_pars_fragment:ep,clearcoat_normal_fragment_begin:tp,clearcoat_normal_fragment_maps:np,clearcoat_pars_fragment:ip,output_fragment:rp,packing:sp,premultiplied_alpha_fragment:op,project_vertex:ap,dithering_fragment:lp,dithering_pars_fragment:cp,roughnessmap_fragment:hp,roughnessmap_pars_fragment:up,shadowmap_pars_fragment:dp,shadowmap_pars_vertex:fp,shadowmap_vertex:pp,shadowmask_pars_fragment:mp,skinbase_vertex:gp,skinning_pars_vertex:xp,skinning_vertex:_p,skinnormal_vertex:vp,specularmap_fragment:yp,specularmap_pars_fragment:bp,tonemapping_fragment:wp,tonemapping_pars_fragment:Mp,transmission_fragment:Sp,transmission_pars_fragment:Ep,uv_pars_fragment:Tp,uv_pars_vertex:Ap,uv_vertex:Cp,uv2_pars_fragment:Lp,uv2_pars_vertex:Rp,uv2_vertex:Pp,worldpos_vertex:Dp,background_vert:Ip,background_frag:Bp,cube_vert:Fp,cube_frag:Np,depth_vert:zp,depth_frag:Up,distanceRGBA_vert:Op,distanceRGBA_frag:Hp,equirect_vert:Gp,equirect_frag:Vp,linedashed_vert:kp,linedashed_frag:Wp,meshbasic_vert:qp,meshbasic_frag:Xp,meshlambert_vert:$p,meshlambert_frag:jp,meshmatcap_vert:Yp,meshmatcap_frag:Jp,meshnormal_vert:Zp,meshnormal_frag:Kp,meshphong_vert:Qp,meshphong_frag:em,meshphysical_vert:tm,meshphysical_frag:nm,meshtoon_vert:im,meshtoon_frag:rm,points_vert:sm,points_frag:om,shadow_vert:am,shadow_frag:lm,sprite_vert:cm,sprite_frag:hm},re={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new pt},uv2Transform:{value:new pt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new pt}}},St={basic:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.fog,re.lights,{emissive:{value:new pe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:mt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:mt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new pe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:mt([re.points,re.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:mt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:mt([re.common,re.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:mt([re.sprite,re.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},cube:{uniforms:mt([re.envmap,{opacity:{value:1}}]),vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:mt([re.common,re.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:mt([re.lights,re.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};St.physical={uniforms:mt([St.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new J(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};function um(r,e,t,n,i,s){const o=new pe(0);let a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(m,p){let x=!1,w=p.isScene===!0?p.background:null;w&&w.isTexture&&(w=e.get(w));const T=r.xr,E=T.getSession&&T.getSession();E&&E.environmentBlendMode==="additive"&&(w=null),w===null?g(o,a):w&&w.isColor&&(g(w,1),x=!0),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Is)?(c===void 0&&(c=new et(new mn(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:Ii(St.cube.uniforms),vertexShader:St.cube.vertexShader,fragmentShader:St.cube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,(h!==w||u!==w.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=w,u=w.version,d=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new et(new Ma(2,2),new Ft({name:"BackgroundMaterial",uniforms:Ii(St.background.uniforms),vertexShader:St.background.vertexShader,fragmentShader:St.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||u!==w.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=w,u=w.version,d=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,p){t.buffers.color.setClear(m.r,m.g,m.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),a=p,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:f}}function dm(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,h=!1;function u(A,z,F,G,W){let U=!1;if(o){const k=m(G,F,z);c!==k&&(c=k,f(c.object)),U=x(A,G,F,W),U&&w(A,G,F,W)}else{const k=z.wireframe===!0;(c.geometry!==G.id||c.program!==F.id||c.wireframe!==k)&&(c.geometry=G.id,c.program=F.id,c.wireframe=k,U=!0)}W!==null&&t.update(W,34963),(U||h)&&(h=!1,v(A,z,F,G),W!==null&&r.bindBuffer(34963,t.get(W).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(A){return n.isWebGL2?r.bindVertexArray(A):s.bindVertexArrayOES(A)}function g(A){return n.isWebGL2?r.deleteVertexArray(A):s.deleteVertexArrayOES(A)}function m(A,z,F){const G=F.wireframe===!0;let W=a[A.id];W===void 0&&(W={},a[A.id]=W);let U=W[z.id];U===void 0&&(U={},W[z.id]=U);let k=U[G];return k===void 0&&(k=p(d()),U[G]=k),k}function p(A){const z=[],F=[],G=[];for(let W=0;W<i;W++)z[W]=0,F[W]=0,G[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:F,attributeDivisors:G,object:A,attributes:{},index:null}}function x(A,z,F,G){const W=c.attributes,U=z.attributes;let k=0;const ee=F.getAttributes();for(const K in ee)if(ee[K].location>=0){const me=W[K];let ge=U[K];if(ge===void 0&&(K==="instanceMatrix"&&A.instanceMatrix&&(ge=A.instanceMatrix),K==="instanceColor"&&A.instanceColor&&(ge=A.instanceColor)),me===void 0||me.attribute!==ge||ge&&me.data!==ge.data)return!0;k++}return c.attributesNum!==k||c.index!==G}function w(A,z,F,G){const W={},U=z.attributes;let k=0;const ee=F.getAttributes();for(const K in ee)if(ee[K].location>=0){let me=U[K];me===void 0&&(K==="instanceMatrix"&&A.instanceMatrix&&(me=A.instanceMatrix),K==="instanceColor"&&A.instanceColor&&(me=A.instanceColor));const ge={};ge.attribute=me,me&&me.data&&(ge.data=me.data),W[K]=ge,k++}c.attributes=W,c.attributesNum=k,c.index=G}function T(){const A=c.newAttributes;for(let z=0,F=A.length;z<F;z++)A[z]=0}function E(A){b(A,0)}function b(A,z){const F=c.newAttributes,G=c.enabledAttributes,W=c.attributeDivisors;F[A]=1,G[A]===0&&(r.enableVertexAttribArray(A),G[A]=1),W[A]!==z&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,z),W[A]=z)}function L(){const A=c.newAttributes,z=c.enabledAttributes;for(let F=0,G=z.length;F<G;F++)z[F]!==A[F]&&(r.disableVertexAttribArray(F),z[F]=0)}function P(A,z,F,G,W,U){n.isWebGL2===!0&&(F===5124||F===5125)?r.vertexAttribIPointer(A,z,F,W,U):r.vertexAttribPointer(A,z,F,G,W,U)}function v(A,z,F,G){if(n.isWebGL2===!1&&(A.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;T();const W=G.attributes,U=F.getAttributes(),k=z.defaultAttributeValues;for(const ee in U){const K=U[ee];if(K.location>=0){let te=W[ee];if(te===void 0&&(ee==="instanceMatrix"&&A.instanceMatrix&&(te=A.instanceMatrix),ee==="instanceColor"&&A.instanceColor&&(te=A.instanceColor)),te!==void 0){const me=te.normalized,ge=te.itemSize,q=t.get(te);if(q===void 0)continue;const Oe=q.buffer,we=q.type,Le=q.bytesPerElement;if(te.isInterleavedBufferAttribute){const se=te.data,Be=se.stride,j=te.offset;if(se.isInstancedInterleavedBuffer){for(let $=0;$<K.locationSize;$++)b(K.location+$,se.meshPerAttribute);A.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let $=0;$<K.locationSize;$++)E(K.location+$);r.bindBuffer(34962,Oe);for(let $=0;$<K.locationSize;$++)P(K.location+$,ge/K.locationSize,we,me,Be*Le,(j+ge/K.locationSize*$)*Le)}else{if(te.isInstancedBufferAttribute){for(let se=0;se<K.locationSize;se++)b(K.location+se,te.meshPerAttribute);A.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let se=0;se<K.locationSize;se++)E(K.location+se);r.bindBuffer(34962,Oe);for(let se=0;se<K.locationSize;se++)P(K.location+se,ge/K.locationSize,we,me,ge*Le,ge/K.locationSize*se*Le)}}else if(k!==void 0){const me=k[ee];if(me!==void 0)switch(me.length){case 2:r.vertexAttrib2fv(K.location,me);break;case 3:r.vertexAttrib3fv(K.location,me);break;case 4:r.vertexAttrib4fv(K.location,me);break;default:r.vertexAttrib1fv(K.location,me)}}}}L()}function C(){Z();for(const A in a){const z=a[A];for(const F in z){const G=z[F];for(const W in G)g(G[W].object),delete G[W];delete z[F]}delete a[A]}}function D(A){if(a[A.id]===void 0)return;const z=a[A.id];for(const F in z){const G=z[F];for(const W in G)g(G[W].object),delete G[W];delete z[F]}delete a[A.id]}function I(A){for(const z in a){const F=a[z];if(F[A.id]===void 0)continue;const G=F[A.id];for(const W in G)g(G[W].object),delete G[W];delete F[A.id]}}function Z(){Y(),h=!0,c!==l&&(c=l,f(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Z,resetDefaultState:Y,dispose:C,releaseStatesOfGeometry:D,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:E,disableUnusedAttributes:L}}function fm(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,f;if(i)d=r,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,h,u),t.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=l}function pm(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(34930),d=r.getParameter(35660),f=r.getParameter(3379),g=r.getParameter(34076),m=r.getParameter(34921),p=r.getParameter(36347),x=r.getParameter(36348),w=r.getParameter(36349),T=d>0,E=o||e.has("OES_texture_float"),b=T&&E,L=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:w,vertexTextures:T,floatFragmentTextures:E,floatVertexTextures:b,maxSamples:L}}function mm(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new un,a=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){const g=u.length!==0||d||n!==0||i;return i=d,t=h(u,f,0),n=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,d,f){const g=u.clippingPlanes,m=u.clipIntersection,p=u.clipShadows,x=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const w=s?0:n,T=w*4;let E=x.clippingState||null;l.value=E,E=h(g,d,T,f);for(let b=0;b!==T;++b)E[b]=t[b];x.clippingState=E,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const m=u!==null?u.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const x=f+m*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<x)&&(p=new Float32Array(x));for(let T=0,E=f;T!==m;++T,E+=4)o.copy(u[T]).applyMatrix4(w,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function gm(r){let e=new WeakMap;function t(o,a){return a===Wo?o.mapping=Ri:a===qo&&(o.mapping=Pi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Wo||a===qo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Qc(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Us extends ba{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Us.prototype.isOrthographicCamera=!0;const Mi=4,Dl=[.125,.215,.35,.446,.526,.582],Un=20,So=new Us,Il=new pe;let Eo=null;const zn=(1+Math.sqrt(5))/2,pi=1/zn,Bl=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,zn,pi),new S(0,zn,-pi),new S(pi,0,zn),new S(-pi,0,zn),new S(zn,pi,0),new S(-zn,pi,0)];class Fl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Eo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eo),e.scissorTest=!1,Wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:ar,format:kt,encoding:Ln,depthBuffer:!1},i=Nl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xm(s)),this._blurMaterial=_m(s,e,t)}return i}_compileMaterial(e){const t=new et(this._lodPlanes[0],e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,n,i){const a=new Mt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Il),h.toneMapping=fn,h.autoClear=!1;const f=new xr({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),g=new et(new mn,f);let m=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,m=!0):(f.color.copy(Il),m=!0);for(let x=0;x<6;x++){const w=x%3;w===0?(a.up.set(0,l[x],0),a.lookAt(c[x],0,0)):w===1?(a.up.set(0,0,l[x]),a.lookAt(0,c[x],0)):(a.up.set(0,l[x],0),a.lookAt(0,0,c[x]));const T=this._cubeSize;Wr(i,w*T,x>2?T:0,T,T),h.setRenderTarget(i),m&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ri||e.mapping===Pi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new et(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Wr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,So)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Bl[(i-1)%Bl.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new et(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Un-1),m=s/g,p=isFinite(s)?1+Math.floor(h*m):Un;p>Un&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Un}`);const x=[];let w=0;for(let P=0;P<Un;++P){const v=P/m,C=Math.exp(-v*v/2);x.push(C),P===0?w+=C:P<p&&(w+=2*C)}for(let P=0;P<x.length;P++)x[P]=x[P]/w;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=x,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-n;const E=this._sizeLods[i],b=3*E*(i>T-Mi?i-T+Mi:0),L=4*(this._cubeSize-E);Wr(t,b,L,3*E,2*E),l.setRenderTarget(t),l.render(u,So)}}function xm(r){const e=[],t=[],n=[];let i=r;const s=r-Mi+1+Dl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Mi?l=Dl[o-r+Mi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,m=3,p=2,x=1,w=new Float32Array(m*g*f),T=new Float32Array(p*g*f),E=new Float32Array(x*g*f);for(let L=0;L<f;L++){const P=L%3*2/3-1,v=L>2?0:-1,C=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];w.set(C,m*g*L),T.set(d,p*g*L);const D=[L,L,L,L,L,L];E.set(D,x*g*L)}const b=new $e;b.setAttribute("position",new ot(w,m)),b.setAttribute("uv",new ot(T,p)),b.setAttribute("faceIndex",new ot(E,x)),e.push(b),i>Mi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Nl(r,e,t){const n=new Rt(r,e,t);return n.texture.mapping=Is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function _m(r,e,t){const n=new Float32Array(Un),i=new S(0,1,0);return new Ft({name:"SphericalGaussianBlur",defines:{n:Un,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Sa(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function zl(){return new Ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sa(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Ul(){return new Ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Sa(){return`

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
	`}function vm(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wo||l===qo,h=l===Ri||l===Pi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Fl(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Fl(r));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ym(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function bm(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],34962);const f=u.morphAttributes;for(const g in f){const m=f[g];for(let p=0,x=m.length;p<x;p++)e.update(m[p],34962)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let m=0;if(f!==null){const w=f.array;m=f.version;for(let T=0,E=w.length;T<E;T+=3){const b=w[T+0],L=w[T+1],P=w[T+2];d.push(b,L,L,P,P,b)}}else{const w=g.array;m=g.version;for(let T=0,E=w.length/3-1;T<E;T+=3){const b=T+0,L=T+1,P=T+2;d.push(b,L,L,P,P,b)}}const p=new(Yc(d)?Kc:Zc)(d,1);p.version=m;const x=s.get(u);x&&e.remove(x),s.set(u,p)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function wm(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,f){r.drawElements(s,f,a,d*l),t.update(f,s,1)}function u(d,f,g){if(g===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,f,a,d*l,g),t.update(f,s,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function Mm(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Sm(r,e){return r[0]-e[0]}function Em(r,e){return Math.abs(e[1])-Math.abs(r[1])}function To(r,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function Tm(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Xe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=m!==void 0?m.length:0;let x=s.get(h);if(x===void 0||x.count!==p){let F=function(){A.dispose(),s.delete(h),h.removeEventListener("dispose",F)};var g=F;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,L=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let D=0;E===!0&&(D=1),b===!0&&(D=2),L===!0&&(D=3);let I=h.attributes.position.count*D,Z=1;I>e.maxTextureSize&&(Z=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const Y=new Float32Array(I*Z*4*p),A=new Fs(Y,I,Z,p);A.type=On,A.needsUpdate=!0;const z=D*4;for(let G=0;G<p;G++){const W=P[G],U=v[G],k=C[G],ee=I*Z*4*G;for(let K=0;K<W.count;K++){const te=K*z;E===!0&&(o.fromBufferAttribute(W,K),W.normalized===!0&&To(o,W),Y[ee+te+0]=o.x,Y[ee+te+1]=o.y,Y[ee+te+2]=o.z,Y[ee+te+3]=0),b===!0&&(o.fromBufferAttribute(U,K),U.normalized===!0&&To(o,U),Y[ee+te+4]=o.x,Y[ee+te+5]=o.y,Y[ee+te+6]=o.z,Y[ee+te+7]=0),L===!0&&(o.fromBufferAttribute(k,K),k.normalized===!0&&To(o,k),Y[ee+te+8]=o.x,Y[ee+te+9]=o.y,Y[ee+te+10]=o.z,Y[ee+te+11]=k.itemSize===4?o.w:1)}}x={count:p,texture:A,size:new J(I,Z)},s.set(h,x),h.addEventListener("dispose",F)}let w=0;for(let E=0;E<f.length;E++)w+=f[E];const T=h.morphTargetsRelative?1:1-w;d.getUniforms().setValue(r,"morphTargetBaseInfluence",T),d.getUniforms().setValue(r,"morphTargetInfluences",f),d.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{const m=f===void 0?0:f.length;let p=n[h.id];if(p===void 0||p.length!==m){p=[];for(let b=0;b<m;b++)p[b]=[b,0];n[h.id]=p}for(let b=0;b<m;b++){const L=p[b];L[0]=b,L[1]=f[b]}p.sort(Em);for(let b=0;b<8;b++)b<m&&p[b][1]?(a[b][0]=p[b][0],a[b][1]=p[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(Sm);const x=h.morphAttributes.position,w=h.morphAttributes.normal;let T=0;for(let b=0;b<8;b++){const L=a[b],P=L[0],v=L[1];P!==Number.MAX_SAFE_INTEGER&&v?(x&&h.getAttribute("morphTarget"+b)!==x[P]&&h.setAttribute("morphTarget"+b,x[P]),w&&h.getAttribute("morphNormal"+b)!==w[P]&&h.setAttribute("morphNormal"+b,w[P]),i[b]=v,T+=v):(x&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),w&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),i[b]=0)}const E=h.morphTargetsRelative?1:1-T;d.getUniforms().setValue(r,"morphTargetBaseInfluence",E),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Am(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const th=new ct,nh=new Fs,ih=new _a,rh=new Ns,Ol=[],Hl=[],Gl=new Float32Array(16),Vl=new Float32Array(9),kl=new Float32Array(4);function Ni(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ol[i];if(s===void 0&&(s=new Float32Array(i),Ol[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function yt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function bt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Os(r,e){let t=Hl[e];t===void 0&&(t=new Int32Array(e),Hl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Cm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Lm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2fv(this.addr,e),bt(t,e)}}function Rm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;r.uniform3fv(this.addr,e),bt(t,e)}}function Pm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4fv(this.addr,e),bt(t,e)}}function Dm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;kl.set(n),r.uniformMatrix2fv(this.addr,!1,kl),bt(t,n)}}function Im(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;Vl.set(n),r.uniformMatrix3fv(this.addr,!1,Vl),bt(t,n)}}function Bm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;Gl.set(n),r.uniformMatrix4fv(this.addr,!1,Gl),bt(t,n)}}function Fm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Nm(r,e){const t=this.cache;yt(t,e)||(r.uniform2iv(this.addr,e),bt(t,e))}function zm(r,e){const t=this.cache;yt(t,e)||(r.uniform3iv(this.addr,e),bt(t,e))}function Um(r,e){const t=this.cache;yt(t,e)||(r.uniform4iv(this.addr,e),bt(t,e))}function Om(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Hm(r,e){const t=this.cache;yt(t,e)||(r.uniform2uiv(this.addr,e),bt(t,e))}function Gm(r,e){const t=this.cache;yt(t,e)||(r.uniform3uiv(this.addr,e),bt(t,e))}function Vm(r,e){const t=this.cache;yt(t,e)||(r.uniform4uiv(this.addr,e),bt(t,e))}function km(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||th,i)}function Wm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ih,i)}function qm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||rh,i)}function Xm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||nh,i)}function $m(r){switch(r){case 5126:return Cm;case 35664:return Lm;case 35665:return Rm;case 35666:return Pm;case 35674:return Dm;case 35675:return Im;case 35676:return Bm;case 5124:case 35670:return Fm;case 35667:case 35671:return Nm;case 35668:case 35672:return zm;case 35669:case 35673:return Um;case 5125:return Om;case 36294:return Hm;case 36295:return Gm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Xm}}function jm(r,e){r.uniform1fv(this.addr,e)}function Ym(r,e){const t=Ni(e,this.size,2);r.uniform2fv(this.addr,t)}function Jm(r,e){const t=Ni(e,this.size,3);r.uniform3fv(this.addr,t)}function Zm(r,e){const t=Ni(e,this.size,4);r.uniform4fv(this.addr,t)}function Km(r,e){const t=Ni(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Qm(r,e){const t=Ni(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function eg(r,e){const t=Ni(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function tg(r,e){r.uniform1iv(this.addr,e)}function ng(r,e){r.uniform2iv(this.addr,e)}function ig(r,e){r.uniform3iv(this.addr,e)}function rg(r,e){r.uniform4iv(this.addr,e)}function sg(r,e){r.uniform1uiv(this.addr,e)}function og(r,e){r.uniform2uiv(this.addr,e)}function ag(r,e){r.uniform3uiv(this.addr,e)}function lg(r,e){r.uniform4uiv(this.addr,e)}function cg(r,e,t){const n=e.length,i=Os(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||th,i[s])}function hg(r,e,t){const n=e.length,i=Os(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||ih,i[s])}function ug(r,e,t){const n=e.length,i=Os(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||rh,i[s])}function dg(r,e,t){const n=e.length,i=Os(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||nh,i[s])}function fg(r){switch(r){case 5126:return jm;case 35664:return Ym;case 35665:return Jm;case 35666:return Zm;case 35674:return Km;case 35675:return Qm;case 35676:return eg;case 5124:case 35670:return tg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return rg;case 5125:return sg;case 36294:return og;case 36295:return ag;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return dg}}function pg(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=$m(e.type)}function mg(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=fg(e.type)}function sh(r){this.id=r,this.seq=[],this.map={}}sh.prototype.setValue=function(r,e,t){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const o=n[i];o.setValue(r,e[o.id],t)}};const Ao=/(\w+)(\])?(\[|\.)?/g;function Wl(r,e){r.seq.push(e),r.map[e.id]=e}function gg(r,e,t){const n=r.name,i=n.length;for(Ao.lastIndex=0;;){const s=Ao.exec(n),o=Ao.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Wl(t,c===void 0?new pg(a,r,e):new mg(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new sh(a),Wl(t,u)),t=u}}}function An(r,e){this.seq=[],this.map={};const t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=r.getActiveUniform(e,n),s=r.getUniformLocation(e,i.name);gg(i,s,this)}}An.prototype.setValue=function(r,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(r,t,n)};An.prototype.setOptional=function(r,e,t){const n=e[t];n!==void 0&&this.setValue(r,t,n)};An.upload=function(r,e,t,n){for(let i=0,s=e.length;i!==s;++i){const o=e[i],a=t[o.id];a.needsUpdate!==!1&&o.setValue(r,a.value,n)}};An.seqWithValue=function(r,e){const t=[];for(let n=0,i=r.length;n!==i;++n){const s=r[n];s.id in e&&t.push(s)}return t};function ql(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let xg=0;function _g(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++)n.push(o+1+": "+t[o]);return n.join(`
`)}function vg(r){switch(r){case Ln:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Xl(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[0]);return t.toUpperCase()+`

`+i+`

`+_g(r.getShaderSource(e),o)}else return i}function yg(r,e){const t=vg(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function bg(r,e){let t;switch(e){case Gu:t="Linear";break;case Vu:t="Reinhard";break;case ku:t="OptimizedCineon";break;case Wu:t="ACESFilmic";break;case qu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function wg(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qi).join(`
`)}function Mg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sg(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Qi(r){return r!==""}function $l(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jo(r){return r.replace(Eg,Tg)}function Tg(r,e){const t=Ie[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Jo(t)}const Ag=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yl(r){return r.replace(Cg,oh).replace(Ag,Lg)}function Lg(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),oh(r,e,t,n)}function oh(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Jl(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rg(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===kc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===vu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function Pg(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ri:case Pi:e="ENVMAP_TYPE_CUBE";break;case Is:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dg(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Pi:e="ENVMAP_MODE_REFRACTION";break}return e}function Ig(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ds:e="ENVMAP_BLENDING_MULTIPLY";break;case Ou:e="ENVMAP_BLENDING_MIX";break;case Hu:e="ENVMAP_BLENDING_ADD";break}return e}function Bg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Fg(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Rg(t),c=Pg(t),h=Dg(t),u=Ig(t),d=Bg(t),f=t.isWebGL2?"":wg(t),g=Mg(s),m=i.createProgram();let p,x,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Qi).join(`
`),p.length>0&&(p+=`
`),x=[f,g].filter(Qi).join(`
`),x.length>0&&(x+=`
`)):(p=[Jl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),x=[f,Jl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fn?"#define TONE_MAPPING":"",t.toneMapping!==fn?Ie.tonemapping_pars_fragment:"",t.toneMapping!==fn?bg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.encodings_pars_fragment,yg("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qi).join(`
`)),o=Jo(o),o=$l(o,t),o=jl(o,t),a=Jo(a),a=$l(a,t),a=jl(a,t),o=Yl(o),a=Yl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",t.glslVersion===vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const T=w+p+o,E=w+x+a,b=ql(i,35633,T),L=ql(i,35632,E);if(i.attachShader(m,b),i.attachShader(m,L),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),r.debug.checkShaderErrors){const C=i.getProgramInfoLog(m).trim(),D=i.getShaderInfoLog(b).trim(),I=i.getShaderInfoLog(L).trim();let Z=!0,Y=!0;if(i.getProgramParameter(m,35714)===!1){Z=!1;const A=Xl(i,b,"vertex"),z=Xl(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+C+`
`+A+`
`+z)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(D===""||I==="")&&(Y=!1);Y&&(this.diagnostics={runnable:Z,programLog:C,vertexShader:{log:D,prefix:p},fragmentShader:{log:I,prefix:x}})}i.deleteShader(b),i.deleteShader(L);let P;this.getUniforms=function(){return P===void 0&&(P=new An(i,m)),P};let v;return this.getAttributes=function(){return v===void 0&&(v=Sg(i,m)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=xg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=L,this}let Ng=0;class zg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Ug(e);t.set(e,n)}return t.get(e)}}class Ug{constructor(e){this.id=Ng++,this.code=e,this.usedTimes=0}}function Og(r,e,t,n,i,s,o){const a=new va,l=new zg,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v,C,D,I,Z){const Y=I.fog,A=Z.geometry,z=v.isMeshStandardMaterial?I.environment:null,F=(v.isMeshStandardMaterial?t:e).get(v.envMap||z),G=!!F&&F.mapping===Is?F.image.height:null,W=g[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const U=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,k=U!==void 0?U.length:0;let ee=0;A.morphAttributes.position!==void 0&&(ee=1),A.morphAttributes.normal!==void 0&&(ee=2),A.morphAttributes.color!==void 0&&(ee=3);let K,te,me,ge;if(W){const se=St[W];K=se.vertexShader,te=se.fragmentShader}else K=v.vertexShader,te=v.fragmentShader,l.update(v),me=l.getVertexShaderID(v),ge=l.getFragmentShaderID(v);const q=r.getRenderTarget(),Oe=v.alphaTest>0,we=v.clearcoat>0;return{isWebGL2:h,shaderID:W,shaderName:v.type,vertexShader:K,fragmentShader:te,defines:v.defines,customVertexShaderID:me,customFragmentShaderID:ge,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:d,outputEncoding:q===null?r.outputEncoding:q.isXRRenderTarget===!0?q.texture.encoding:Ln,map:!!v.map,matcap:!!v.matcap,envMap:!!F,envMapMode:F&&F.mapping,envMapCubeUVHeight:G,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===pd,tangentSpaceNormalMap:v.normalMapType===Fi,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ze,clearcoat:we,clearcoatMap:we&&!!v.clearcoatMap,clearcoatRoughnessMap:we&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:we&&!!v.clearcoatNormalMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Ei,alphaMap:!!v.alphaMap,alphaTest:Oe,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!A.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!Y,useFog:v.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:u,skinning:Z.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:ee,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:fn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Li,flipSided:v.side===Lt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)C.push(D),C.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(x(C,v),w(C,v),C.push(r.outputEncoding)),C.push(v.customProgramCacheKey),C.join()}function x(v,C){v.push(C.precision),v.push(C.outputEncoding),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.combine),v.push(C.vertexUvs),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function w(v,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.displacementMap&&a.enable(18),C.specularMap&&a.enable(19),C.roughnessMap&&a.enable(20),C.metalnessMap&&a.enable(21),C.gradientMap&&a.enable(22),C.alphaMap&&a.enable(23),C.alphaTest&&a.enable(24),C.vertexColors&&a.enable(25),C.vertexAlphas&&a.enable(26),C.vertexUvs&&a.enable(27),C.vertexTangents&&a.enable(28),C.uvsVertexOnly&&a.enable(29),C.fog&&a.enable(30),v.push(a.mask),a.disableAll(),C.useFog&&a.enable(0),C.flatShading&&a.enable(1),C.logarithmicDepthBuffer&&a.enable(2),C.skinning&&a.enable(3),C.morphTargets&&a.enable(4),C.morphNormals&&a.enable(5),C.morphColors&&a.enable(6),C.premultipliedAlpha&&a.enable(7),C.shadowMapEnabled&&a.enable(8),C.physicallyCorrectLights&&a.enable(9),C.doubleSided&&a.enable(10),C.flipSided&&a.enable(11),C.useDepthPacking&&a.enable(12),C.dithering&&a.enable(13),C.specularIntensityMap&&a.enable(14),C.specularColorMap&&a.enable(15),C.transmission&&a.enable(16),C.transmissionMap&&a.enable(17),C.thicknessMap&&a.enable(18),C.sheen&&a.enable(19),C.sheenColorMap&&a.enable(20),C.sheenRoughnessMap&&a.enable(21),C.decodeVideoTexture&&a.enable(22),C.opaque&&a.enable(23),v.push(a.mask)}function T(v){const C=g[v.type];let D;if(C){const I=St[C];D=ya.clone(I.uniforms)}else D=v.uniforms;return D}function E(v,C){let D;for(let I=0,Z=c.length;I<Z;I++){const Y=c[I];if(Y.cacheKey===C){D=Y,++D.usedTimes;break}}return D===void 0&&(D=new Fg(r,C,v,s),c.push(D)),D}function b(v){if(--v.usedTimes===0){const C=c.indexOf(v);c[C]=c[c.length-1],c.pop(),v.destroy()}}function L(v){l.remove(v)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:E,releaseProgram:b,releaseShaderCache:L,programs:c,dispose:P}}function Hg(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Gg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Zl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Kl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,m,p){let x=r[e];return x===void 0?(x={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:m,group:p},r[e]=x):(x.id=u.id,x.object=u,x.geometry=d,x.material=f,x.groupOrder=g,x.renderOrder=u.renderOrder,x.z=m,x.group=p),e++,x}function a(u,d,f,g,m,p){const x=o(u,d,f,g,m,p);f.transmission>0?n.push(x):f.transparent===!0?i.push(x):t.push(x)}function l(u,d,f,g,m,p){const x=o(u,d,f,g,m,p);f.transmission>0?n.unshift(x):f.transparent===!0?i.unshift(x):t.unshift(x)}function c(u,d){t.length>1&&t.sort(u||Gg),n.length>1&&n.sort(d||Zl),i.length>1&&i.sort(d||Zl)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Vg(){let r=new WeakMap;function e(n,i){let s;return r.has(n)===!1?(s=new Kl,r.set(n,[s])):i>=r.get(n).length?(s=new Kl,r.get(n).push(s)):s=r.get(n)[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function kg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new pe};break;case"SpotLight":t={position:new S,direction:new S,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new S,halfWidth:new S,halfHeight:new S};break}return r[e.id]=t,t}}}function Wg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let qg=0;function Xg(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function $g(r,e){const t=new kg,n=Wg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new S);const s=new S,o=new _e,a=new _e;function l(h,u){let d=0,f=0,g=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let m=0,p=0,x=0,w=0,T=0,E=0,b=0,L=0;h.sort(Xg);const P=u!==!0?Math.PI:1;for(let C=0,D=h.length;C<D;C++){const I=h[C],Z=I.color,Y=I.intensity,A=I.distance,z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=Z.r*Y*P,f+=Z.g*Y*P,g+=Z.b*Y*P;else if(I.isLightProbe)for(let F=0;F<9;F++)i.probe[F].addScaledVector(I.sh.coefficients[F],Y);else if(I.isDirectionalLight){const F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity*P),I.castShadow){const G=I.shadow,W=n.get(I);W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,i.directionalShadow[m]=W,i.directionalShadowMap[m]=z,i.directionalShadowMatrix[m]=I.shadow.matrix,E++}i.directional[m]=F,m++}else if(I.isSpotLight){const F=t.get(I);if(F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(Z).multiplyScalar(Y*P),F.distance=A,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,I.castShadow){const G=I.shadow,W=n.get(I);W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=z,i.spotShadowMatrix[x]=I.shadow.matrix,L++}i.spot[x]=F,x++}else if(I.isRectAreaLight){const F=t.get(I);F.color.copy(Z).multiplyScalar(Y),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),i.rectArea[w]=F,w++}else if(I.isPointLight){const F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity*P),F.distance=I.distance,F.decay=I.decay,I.castShadow){const G=I.shadow,W=n.get(I);W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,W.shadowCameraNear=G.camera.near,W.shadowCameraFar=G.camera.far,i.pointShadow[p]=W,i.pointShadowMap[p]=z,i.pointShadowMatrix[p]=I.shadow.matrix,b++}i.point[p]=F,p++}else if(I.isHemisphereLight){const F=t.get(I);F.skyColor.copy(I.color).multiplyScalar(Y*P),F.groundColor.copy(I.groundColor).multiplyScalar(Y*P),i.hemi[T]=F,T++}}w>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const v=i.hash;(v.directionalLength!==m||v.pointLength!==p||v.spotLength!==x||v.rectAreaLength!==w||v.hemiLength!==T||v.numDirectionalShadows!==E||v.numPointShadows!==b||v.numSpotShadows!==L)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=w,i.point.length=p,i.hemi.length=T,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=b,i.spotShadowMatrix.length=L,v.directionalLength=m,v.pointLength=p,v.spotLength=x,v.rectAreaLength=w,v.hemiLength=T,v.numDirectionalShadows=E,v.numPointShadows=b,v.numSpotShadows=L,i.version=qg++)}function c(h,u){let d=0,f=0,g=0,m=0,p=0;const x=u.matrixWorldInverse;for(let w=0,T=h.length;w<T;w++){const E=h[w];if(E.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(x),d++}else if(E.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(x),g++}else if(E.isRectAreaLight){const b=i.rectArea[m];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(x),a.identity(),o.copy(E.matrixWorld),o.premultiply(x),a.extractRotation(o),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),m++}else if(E.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(x),f++}else if(E.isHemisphereLight){const b=i.hemi[p];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(x),p++}}}return{setup:l,setupView:c,state:i}}function Ql(r,e){const t=new $g(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function jg(r,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new Ql(r,e),t.set(s,[a])):o>=t.get(s).length?(a=new Ql(r,e),t.get(s).push(a)):a=t.get(s)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class Ea extends ht{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Ea.prototype.isMeshDepthMaterial=!0;class Ta extends ht{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new S,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Ta.prototype.isMeshDistanceMaterial=!0;const Yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jg=`uniform sampler2D shadow_pass;
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
}`;function ah(r,e,t){let n=new zs;const i=new J,s=new J,o=new Xe,a=new Ea({depthPacking:fd}),l=new Ta,c={},h=t.maxTextureSize,u={0:Lt,1:sr,2:Li},d=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:Yg,fragmentShader:Jg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new $e;g.setAttribute("position",new ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new et(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kc,this.render=function(E,b,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const P=r.getRenderTarget(),v=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Tn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let I=0,Z=E.length;I<Z;I++){const Y=E[I],A=Y.shadow;if(A===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(A.autoUpdate===!1&&A.needsUpdate===!1)continue;i.copy(A.mapSize);const z=A.getFrameExtents();if(i.multiply(z),s.copy(A.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/z.x),i.x=s.x*z.x,A.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/z.y),i.y=s.y*z.y,A.mapSize.y=s.y)),A.map===null&&!A.isPointLightShadow&&this.type===Ki&&(A.map=new Rt(i.x,i.y),A.map.texture.name=Y.name+".shadowMap",A.mapPass=new Rt(i.x,i.y),A.camera.updateProjectionMatrix()),A.map===null){const G={minFilter:dt,magFilter:dt,format:kt};A.map=new Rt(i.x,i.y,G),A.map.texture.name=Y.name+".shadowMap",A.camera.updateProjectionMatrix()}r.setRenderTarget(A.map),r.clear();const F=A.getViewportCount();for(let G=0;G<F;G++){const W=A.getViewport(G);o.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),D.viewport(o),A.updateMatrices(Y,G),n=A.getFrustum(),T(b,L,A.camera,Y,this.type)}!A.isPointLightShadow&&this.type===Ki&&x(A,L),A.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(P,v,C)};function x(E,b){const L=e.update(m);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(b,null,L,d,m,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(b,null,L,f,m,null)}function w(E,b,L,P,v,C){let D=null;const I=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0?D=I:D=L.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0){const Z=D.uuid,Y=b.uuid;let A=c[Z];A===void 0&&(A={},c[Z]=A);let z=A[Y];z===void 0&&(z=D.clone(),A[Y]=z),D=z}return D.visible=b.visible,D.wireframe=b.wireframe,C===Ki?D.side=b.shadowSide!==null?b.shadowSide:b.side:D.side=b.shadowSide!==null?b.shadowSide:u[b.side],D.alphaMap=b.alphaMap,D.alphaTest=b.alphaTest,D.clipShadows=b.clipShadows,D.clippingPlanes=b.clippingPlanes,D.clipIntersection=b.clipIntersection,D.displacementMap=b.displacementMap,D.displacementScale=b.displacementScale,D.displacementBias=b.displacementBias,D.wireframeLinewidth=b.wireframeLinewidth,D.linewidth=b.linewidth,L.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(L.matrixWorld),D.nearDistance=P,D.farDistance=v),D}function T(E,b,L,P,v){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===Ki)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const I=e.update(E),Z=E.material;if(Array.isArray(Z)){const Y=I.groups;for(let A=0,z=Y.length;A<z;A++){const F=Y[A],G=Z[F.materialIndex];if(G&&G.visible){const W=w(E,G,P,L.near,L.far,v);r.renderBufferDirect(L,null,I,W,E,F)}}}else if(Z.visible){const Y=w(E,Z,P,L.near,L.far,v);r.renderBufferDirect(L,null,I,Y,E,null)}}const D=E.children;for(let I=0,Z=D.length;I<Z;I++)T(D[I],b,L,P,v)}}function Zg(r,e,t){const n=t.isWebGL2;function i(){let R=!1;const ae=new Xe;let oe=null;const Me=new Xe(0,0,0,0);return{setMask:function(ue){oe!==ue&&!R&&(r.colorMask(ue,ue,ue,ue),oe=ue)},setLocked:function(ue){R=ue},setClear:function(ue,be,ie,Se,Ge){Ge===!0&&(ue*=Se,be*=Se,ie*=Se),ae.set(ue,be,ie,Se),Me.equals(ae)===!1&&(r.clearColor(ue,be,ie,Se),Me.copy(ae))},reset:function(){R=!1,oe=null,Me.set(-1,0,0,0)}}}function s(){let R=!1,ae=null,oe=null,Me=null;return{setTest:function(ue){ue?ge(2929):q(2929)},setMask:function(ue){ae!==ue&&!R&&(r.depthMask(ue),ae=ue)},setFunc:function(ue){if(oe!==ue){if(ue)switch(ue){case Du:r.depthFunc(512);break;case Iu:r.depthFunc(519);break;case Bu:r.depthFunc(513);break;case ko:r.depthFunc(515);break;case Fu:r.depthFunc(514);break;case Nu:r.depthFunc(518);break;case zu:r.depthFunc(516);break;case Uu:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);oe=ue}},setLocked:function(ue){R=ue},setClear:function(ue){Me!==ue&&(r.clearDepth(ue),Me=ue)},reset:function(){R=!1,ae=null,oe=null,Me=null}}}function o(){let R=!1,ae=null,oe=null,Me=null,ue=null,be=null,ie=null,Se=null,Ge=null;return{setTest:function(Fe){R||(Fe?ge(2960):q(2960))},setMask:function(Fe){ae!==Fe&&!R&&(r.stencilMask(Fe),ae=Fe)},setFunc:function(Fe,Wt,qt){(oe!==Fe||Me!==Wt||ue!==qt)&&(r.stencilFunc(Fe,Wt,qt),oe=Fe,Me=Wt,ue=qt)},setOp:function(Fe,Wt,qt){(be!==Fe||ie!==Wt||Se!==qt)&&(r.stencilOp(Fe,Wt,qt),be=Fe,ie=Wt,Se=qt)},setLocked:function(Fe){R=Fe},setClear:function(Fe){Ge!==Fe&&(r.clearStencil(Fe),Ge=Fe)},reset:function(){R=!1,ae=null,oe=null,Me=null,ue=null,be=null,ie=null,Se=null,Ge=null}}}const a=new i,l=new s,c=new o;let h={},u={},d=new WeakMap,f=[],g=null,m=!1,p=null,x=null,w=null,T=null,E=null,b=null,L=null,P=!1,v=null,C=null,D=null,I=null,Z=null;const Y=r.getParameter(35661);let A=!1,z=0;const F=r.getParameter(7938);F.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(F)[1]),A=z>=1):F.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),A=z>=2);let G=null,W={};const U=r.getParameter(3088),k=r.getParameter(2978),ee=new Xe().fromArray(U),K=new Xe().fromArray(k);function te(R,ae,oe){const Me=new Uint8Array(4),ue=r.createTexture();r.bindTexture(R,ue),r.texParameteri(R,10241,9728),r.texParameteri(R,10240,9728);for(let be=0;be<oe;be++)r.texImage2D(ae+be,0,6408,1,1,0,6408,5121,Me);return ue}const me={};me[3553]=te(3553,3553,1),me[34067]=te(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ge(2929),l.setFunc(ko),ne(!1),de(Wa),ge(2884),j(Tn);function ge(R){h[R]!==!0&&(r.enable(R),h[R]=!0)}function q(R){h[R]!==!1&&(r.disable(R),h[R]=!1)}function Oe(R,ae){return u[R]!==ae?(r.bindFramebuffer(R,ae),u[R]=ae,n&&(R===36009&&(u[36160]=ae),R===36160&&(u[36009]=ae)),!0):!1}function we(R,ae){let oe=f,Me=!1;if(R)if(oe=d.get(ae),oe===void 0&&(oe=[],d.set(ae,oe)),R.isWebGLMultipleRenderTargets){const ue=R.texture;if(oe.length!==ue.length||oe[0]!==36064){for(let be=0,ie=ue.length;be<ie;be++)oe[be]=36064+be;oe.length=ue.length,Me=!0}}else oe[0]!==36064&&(oe[0]=36064,Me=!0);else oe[0]!==1029&&(oe[0]=1029,Me=!0);Me&&(t.isWebGL2?r.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function Le(R){return g!==R?(r.useProgram(R),g=R,!0):!1}const se={[vi]:32774,[bu]:32778,[wu]:32779};if(n)se[ja]=32775,se[Ya]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(se[ja]=R.MIN_EXT,se[Ya]=R.MAX_EXT)}const Be={[Mu]:0,[Su]:1,[Eu]:768,[qc]:770,[Pu]:776,[Lu]:774,[Au]:772,[Tu]:769,[Xc]:771,[Ru]:775,[Cu]:773};function j(R,ae,oe,Me,ue,be,ie,Se){if(R===Tn){m===!0&&(q(3042),m=!1);return}if(m===!1&&(ge(3042),m=!0),R!==yu){if(R!==p||Se!==P){if((x!==vi||E!==vi)&&(r.blendEquation(32774),x=vi,E=vi),Se)switch(R){case Ei:r.blendFuncSeparate(1,771,1,771);break;case qa:r.blendFunc(1,1);break;case Xa:r.blendFuncSeparate(0,769,0,1);break;case $a:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Ei:r.blendFuncSeparate(770,771,1,771);break;case qa:r.blendFunc(770,1);break;case Xa:r.blendFuncSeparate(0,769,0,1);break;case $a:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}w=null,T=null,b=null,L=null,p=R,P=Se}return}ue=ue||ae,be=be||oe,ie=ie||Me,(ae!==x||ue!==E)&&(r.blendEquationSeparate(se[ae],se[ue]),x=ae,E=ue),(oe!==w||Me!==T||be!==b||ie!==L)&&(r.blendFuncSeparate(Be[oe],Be[Me],Be[be],Be[ie]),w=oe,T=Me,b=be,L=ie),p=R,P=null}function $(R,ae){R.side===Li?q(2884):ge(2884);let oe=R.side===Lt;ae&&(oe=!oe),ne(oe),R.blending===Ei&&R.transparent===!1?j(Tn):j(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const Me=R.stencilWrite;c.setTest(Me),Me&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Te(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ge(32926):q(32926)}function ne(R){v!==R&&(R?r.frontFace(2304):r.frontFace(2305),v=R)}function de(R){R!==xu?(ge(2884),R!==C&&(R===Wa?r.cullFace(1029):R===_u?r.cullFace(1028):r.cullFace(1032))):q(2884),C=R}function ce(R){R!==D&&(A&&r.lineWidth(R),D=R)}function Te(R,ae,oe){R?(ge(32823),(I!==ae||Z!==oe)&&(r.polygonOffset(ae,oe),I=ae,Z=oe)):q(32823)}function ye(R){R?ge(3089):q(3089)}function xe(R){R===void 0&&(R=33984+Y-1),G!==R&&(r.activeTexture(R),G=R)}function Ye(R,ae){G===null&&xe();let oe=W[G];oe===void 0&&(oe={type:void 0,texture:void 0},W[G]=oe),(oe.type!==R||oe.texture!==ae)&&(r.bindTexture(R,ae||me[R]),oe.type=R,oe.texture=ae)}function je(){const R=W[G];R!==void 0&&R.type!==void 0&&(r.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function M(){try{r.compressedTexImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _(){try{r.texSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function H(){try{r.texSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(){try{r.texStorage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{r.texStorage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(){try{r.texImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function V(){try{r.texImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ce(R){ee.equals(R)===!1&&(r.scissor(R.x,R.y,R.z,R.w),ee.copy(R))}function Pe(R){K.equals(R)===!1&&(r.viewport(R.x,R.y,R.z,R.w),K.copy(R))}function fe(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},G=null,W={},u={},d=new WeakMap,f=[],g=null,m=!1,p=null,x=null,w=null,T=null,E=null,b=null,L=null,P=!1,v=null,C=null,D=null,I=null,Z=null,ee.set(0,0,r.canvas.width,r.canvas.height),K.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ge,disable:q,bindFramebuffer:Oe,drawBuffers:we,useProgram:Le,setBlending:j,setMaterial:$,setFlipSided:ne,setCullFace:de,setLineWidth:ce,setPolygonOffset:Te,setScissorTest:ye,activeTexture:xe,bindTexture:Ye,unbindTexture:je,compressedTexImage2D:M,texImage2D:ve,texImage3D:V,texStorage2D:le,texStorage3D:he,texSubImage2D:_,texSubImage3D:H,compressedTexSubImage2D:Q,scissor:Ce,viewport:Pe,reset:fe}}function Kg(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(M,_){return x?new OffscreenCanvas(M,_):cr("canvas")}function T(M,_,H,Q){let le=1;if((M.width>Q||M.height>Q)&&(le=Q/Math.max(M.width,M.height)),le<1||_===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const he=_?Yo:Math.floor,ve=he(le*M.width),V=he(le*M.height);m===void 0&&(m=w(ve,V));const Ce=H?w(ve,V):m;return Ce.width=ve,Ce.height=V,Ce.getContext("2d").drawImage(M,0,0,ve,V),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+ve+"x"+V+")."),Ce}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function E(M){return yl(M.width)&&yl(M.height)}function b(M){return a?!1:M.wrapS!==Gt||M.wrapT!==Gt||M.minFilter!==dt&&M.minFilter!==wt}function L(M,_){return M.generateMipmaps&&_&&M.minFilter!==dt&&M.minFilter!==wt}function P(M){r.generateMipmap(M)}function v(M,_,H,Q,le=!1){if(a===!1)return _;if(M!==null){if(r[M]!==void 0)return r[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let he=_;return _===6403&&(H===5126&&(he=33326),H===5131&&(he=33325),H===5121&&(he=33321)),_===33319&&(H===5126&&(he=33328),H===5131&&(he=33327),H===5121&&(he=33323)),_===6408&&(H===5126&&(he=34836),H===5131&&(he=34842),H===5121&&(he=Q===Ze&&le===!1?35907:32856),H===32819&&(he=32854),H===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function C(M,_,H){return L(M,H)===!0||M.isFramebufferTexture&&M.minFilter!==dt&&M.minFilter!==wt?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function D(M){return M===dt||M===Ja||M===Za?9728:9729}function I(M){const _=M.target;_.removeEventListener("dispose",I),Y(_),_.isVideoTexture&&g.delete(_)}function Z(M){const _=M.target;_.removeEventListener("dispose",Z),z(_)}function Y(M){const _=n.get(M);if(_.__webglInit===void 0)return;const H=M.source,Q=p.get(H);if(Q){const le=Q[_.__cacheKey];le.usedTimes--,le.usedTimes===0&&A(M),Object.keys(Q).length===0&&p.delete(H)}n.remove(M)}function A(M){const _=n.get(M);r.deleteTexture(_.__webglTexture);const H=M.source,Q=p.get(H);delete Q[_.__cacheKey],o.memory.textures--}function z(M){const _=M.texture,H=n.get(M),Q=n.get(_);if(Q.__webglTexture!==void 0&&(r.deleteTexture(Q.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let le=0;le<6;le++)r.deleteFramebuffer(H.__webglFramebuffer[le]),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer[le]);else r.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&r.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer&&r.deleteRenderbuffer(H.__webglColorRenderbuffer),H.__webglDepthRenderbuffer&&r.deleteRenderbuffer(H.__webglDepthRenderbuffer);if(M.isWebGLMultipleRenderTargets)for(let le=0,he=_.length;le<he;le++){const ve=n.get(_[le]);ve.__webglTexture&&(r.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(_[le])}n.remove(_),n.remove(M)}let F=0;function G(){F=0}function W(){const M=F;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),F+=1,M}function U(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.encoding),_.join()}function k(M,_){const H=n.get(M);if(M.isVideoTexture&&Ye(M),M.isRenderTargetTexture===!1&&M.version>0&&H.__version!==M.version){const Q=M.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(H,M,_);return}}t.activeTexture(33984+_),t.bindTexture(3553,H.__webglTexture)}function ee(M,_){const H=n.get(M);if(M.version>0&&H.__version!==M.version){we(H,M,_);return}t.activeTexture(33984+_),t.bindTexture(35866,H.__webglTexture)}function K(M,_){const H=n.get(M);if(M.version>0&&H.__version!==M.version){we(H,M,_);return}t.activeTexture(33984+_),t.bindTexture(32879,H.__webglTexture)}function te(M,_){const H=n.get(M);if(M.version>0&&H.__version!==M.version){Le(H,M,_);return}t.activeTexture(33984+_),t.bindTexture(34067,H.__webglTexture)}const me={[hn]:10497,[Gt]:33071,[Xo]:33648},ge={[dt]:9728,[Ja]:9984,[Za]:9986,[wt]:9729,[Xu]:9985,[Bs]:9987};function q(M,_,H){if(H?(r.texParameteri(M,10242,me[_.wrapS]),r.texParameteri(M,10243,me[_.wrapT]),(M===32879||M===35866)&&r.texParameteri(M,32882,me[_.wrapR]),r.texParameteri(M,10240,ge[_.magFilter]),r.texParameteri(M,10241,ge[_.minFilter])):(r.texParameteri(M,10242,33071),r.texParameteri(M,10243,33071),(M===32879||M===35866)&&r.texParameteri(M,32882,33071),(_.wrapS!==Gt||_.wrapT!==Gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(M,10240,D(_.magFilter)),r.texParameteri(M,10241,D(_.minFilter)),_.minFilter!==dt&&_.minFilter!==wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(_.type===On&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===ar&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(r.texParameterf(M,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function Oe(M,_){let H=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",I));const Q=_.source;let le=p.get(Q);le===void 0&&(le={},p.set(Q,le));const he=U(_);if(he!==M.__cacheKey){le[he]===void 0&&(le[he]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),le[he].usedTimes++;const ve=le[M.__cacheKey];ve!==void 0&&(le[M.__cacheKey].usedTimes--,ve.usedTimes===0&&A(_)),M.__cacheKey=he,M.__webglTexture=le[he].texture}return H}function we(M,_,H){let Q=3553;_.isDataArrayTexture&&(Q=35866),_.isData3DTexture&&(Q=32879);const le=Oe(M,_),he=_.source;if(t.activeTexture(33984+H),t.bindTexture(Q,M.__webglTexture),he.version!==he.__currentVersion||le===!0){r.pixelStorei(37440,_.flipY),r.pixelStorei(37441,_.premultiplyAlpha),r.pixelStorei(3317,_.unpackAlignment),r.pixelStorei(37443,0);const ve=b(_)&&E(_.image)===!1;let V=T(_.image,ve,!1,h);V=je(_,V);const Ce=E(V)||a,Pe=s.convert(_.format,_.encoding);let fe=s.convert(_.type),R=v(_.internalFormat,Pe,fe,_.encoding,_.isVideoTexture);q(Q,_,Ce);let ae;const oe=_.mipmaps,Me=a&&_.isVideoTexture!==!0,ue=M.__version===void 0||le===!0,be=C(_,V,Ce);if(_.isDepthTexture)R=6402,a?_.type===On?R=36012:_.type===hs?R=33190:_.type===Ti?R=35056:R=33189:_.type===On&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Vn&&R===6402&&_.type!==or&&_.type!==hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=or,fe=s.convert(_.type)),_.format===Di&&R===6402&&(R=34041,_.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Ti,fe=s.convert(_.type))),ue&&(Me?t.texStorage2D(3553,1,R,V.width,V.height):t.texImage2D(3553,0,R,V.width,V.height,0,Pe,fe,null));else if(_.isDataTexture)if(oe.length>0&&Ce){Me&&ue&&t.texStorage2D(3553,be,R,oe[0].width,oe[0].height);for(let ie=0,Se=oe.length;ie<Se;ie++)ae=oe[ie],Me?t.texSubImage2D(3553,ie,0,0,ae.width,ae.height,Pe,fe,ae.data):t.texImage2D(3553,ie,R,ae.width,ae.height,0,Pe,fe,ae.data);_.generateMipmaps=!1}else Me?(ue&&t.texStorage2D(3553,be,R,V.width,V.height),t.texSubImage2D(3553,0,0,0,V.width,V.height,Pe,fe,V.data)):t.texImage2D(3553,0,R,V.width,V.height,0,Pe,fe,V.data);else if(_.isCompressedTexture){Me&&ue&&t.texStorage2D(3553,be,R,oe[0].width,oe[0].height);for(let ie=0,Se=oe.length;ie<Se;ie++)ae=oe[ie],_.format!==kt?Pe!==null?Me?t.compressedTexSubImage2D(3553,ie,0,0,ae.width,ae.height,Pe,ae.data):t.compressedTexImage2D(3553,ie,R,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?t.texSubImage2D(3553,ie,0,0,ae.width,ae.height,Pe,fe,ae.data):t.texImage2D(3553,ie,R,ae.width,ae.height,0,Pe,fe,ae.data)}else if(_.isDataArrayTexture)Me?(ue&&t.texStorage3D(35866,be,R,V.width,V.height,V.depth),t.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,Pe,fe,V.data)):t.texImage3D(35866,0,R,V.width,V.height,V.depth,0,Pe,fe,V.data);else if(_.isData3DTexture)Me?(ue&&t.texStorage3D(32879,be,R,V.width,V.height,V.depth),t.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,Pe,fe,V.data)):t.texImage3D(32879,0,R,V.width,V.height,V.depth,0,Pe,fe,V.data);else if(_.isFramebufferTexture){if(ue)if(Me)t.texStorage2D(3553,be,R,V.width,V.height);else{let ie=V.width,Se=V.height;for(let Ge=0;Ge<be;Ge++)t.texImage2D(3553,Ge,R,ie,Se,0,Pe,fe,null),ie>>=1,Se>>=1}}else if(oe.length>0&&Ce){Me&&ue&&t.texStorage2D(3553,be,R,oe[0].width,oe[0].height);for(let ie=0,Se=oe.length;ie<Se;ie++)ae=oe[ie],Me?t.texSubImage2D(3553,ie,0,0,Pe,fe,ae):t.texImage2D(3553,ie,R,Pe,fe,ae);_.generateMipmaps=!1}else Me?(ue&&t.texStorage2D(3553,be,R,V.width,V.height),t.texSubImage2D(3553,0,0,0,Pe,fe,V)):t.texImage2D(3553,0,R,Pe,fe,V);L(_,Ce)&&P(Q),he.__currentVersion=he.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Le(M,_,H){if(_.image.length!==6)return;const Q=Oe(M,_),le=_.source;if(t.activeTexture(33984+H),t.bindTexture(34067,M.__webglTexture),le.version!==le.__currentVersion||Q===!0){r.pixelStorei(37440,_.flipY),r.pixelStorei(37441,_.premultiplyAlpha),r.pixelStorei(3317,_.unpackAlignment),r.pixelStorei(37443,0);const he=_.isCompressedTexture||_.image[0].isCompressedTexture,ve=_.image[0]&&_.image[0].isDataTexture,V=[];for(let ie=0;ie<6;ie++)!he&&!ve?V[ie]=T(_.image[ie],!1,!0,c):V[ie]=ve?_.image[ie].image:_.image[ie],V[ie]=je(_,V[ie]);const Ce=V[0],Pe=E(Ce)||a,fe=s.convert(_.format,_.encoding),R=s.convert(_.type),ae=v(_.internalFormat,fe,R,_.encoding),oe=a&&_.isVideoTexture!==!0,Me=M.__version===void 0;let ue=C(_,Ce,Pe);q(34067,_,Pe);let be;if(he){oe&&Me&&t.texStorage2D(34067,ue,ae,Ce.width,Ce.height);for(let ie=0;ie<6;ie++){be=V[ie].mipmaps;for(let Se=0;Se<be.length;Se++){const Ge=be[Se];_.format!==kt?fe!==null?oe?t.compressedTexSubImage2D(34069+ie,Se,0,0,Ge.width,Ge.height,fe,Ge.data):t.compressedTexImage2D(34069+ie,Se,ae,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?t.texSubImage2D(34069+ie,Se,0,0,Ge.width,Ge.height,fe,R,Ge.data):t.texImage2D(34069+ie,Se,ae,Ge.width,Ge.height,0,fe,R,Ge.data)}}}else{be=_.mipmaps,oe&&Me&&(be.length>0&&ue++,t.texStorage2D(34067,ue,ae,V[0].width,V[0].height));for(let ie=0;ie<6;ie++)if(ve){oe?t.texSubImage2D(34069+ie,0,0,0,V[ie].width,V[ie].height,fe,R,V[ie].data):t.texImage2D(34069+ie,0,ae,V[ie].width,V[ie].height,0,fe,R,V[ie].data);for(let Se=0;Se<be.length;Se++){const Fe=be[Se].image[ie].image;oe?t.texSubImage2D(34069+ie,Se+1,0,0,Fe.width,Fe.height,fe,R,Fe.data):t.texImage2D(34069+ie,Se+1,ae,Fe.width,Fe.height,0,fe,R,Fe.data)}}else{oe?t.texSubImage2D(34069+ie,0,0,0,fe,R,V[ie]):t.texImage2D(34069+ie,0,ae,fe,R,V[ie]);for(let Se=0;Se<be.length;Se++){const Ge=be[Se];oe?t.texSubImage2D(34069+ie,Se+1,0,0,fe,R,Ge.image[ie]):t.texImage2D(34069+ie,Se+1,ae,fe,R,Ge.image[ie])}}}L(_,Pe)&&P(34067),le.__currentVersion=le.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function se(M,_,H,Q,le){const he=s.convert(H.format,H.encoding),ve=s.convert(H.type),V=v(H.internalFormat,he,ve,H.encoding);n.get(_).__hasExternalTextures||(le===32879||le===35866?t.texImage3D(le,0,V,_.width,_.height,_.depth,0,he,ve,null):t.texImage2D(le,0,V,_.width,_.height,0,he,ve,null)),t.bindFramebuffer(36160,M),xe(_)?d.framebufferTexture2DMultisampleEXT(36160,Q,le,n.get(H).__webglTexture,0,ye(_)):r.framebufferTexture2D(36160,Q,le,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function Be(M,_,H){if(r.bindRenderbuffer(36161,M),_.depthBuffer&&!_.stencilBuffer){let Q=33189;if(H||xe(_)){const le=_.depthTexture;le&&le.isDepthTexture&&(le.type===On?Q=36012:le.type===hs&&(Q=33190));const he=ye(_);xe(_)?d.renderbufferStorageMultisampleEXT(36161,he,Q,_.width,_.height):r.renderbufferStorageMultisample(36161,he,Q,_.width,_.height)}else r.renderbufferStorage(36161,Q,_.width,_.height);r.framebufferRenderbuffer(36160,36096,36161,M)}else if(_.depthBuffer&&_.stencilBuffer){const Q=ye(_);H&&xe(_)===!1?r.renderbufferStorageMultisample(36161,Q,35056,_.width,_.height):xe(_)?d.renderbufferStorageMultisampleEXT(36161,Q,35056,_.width,_.height):r.renderbufferStorage(36161,34041,_.width,_.height),r.framebufferRenderbuffer(36160,33306,36161,M)}else{const Q=_.isWebGLMultipleRenderTargets===!0?_.texture[0]:_.texture,le=s.convert(Q.format,Q.encoding),he=s.convert(Q.type),ve=v(Q.internalFormat,le,he,Q.encoding),V=ye(_);H&&xe(_)===!1?r.renderbufferStorageMultisample(36161,V,ve,_.width,_.height):xe(_)?d.renderbufferStorageMultisampleEXT(36161,V,ve,_.width,_.height):r.renderbufferStorage(36161,ve,_.width,_.height)}r.bindRenderbuffer(36161,null)}function j(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k(_.depthTexture,0);const Q=n.get(_.depthTexture).__webglTexture,le=ye(_);if(_.depthTexture.format===Vn)xe(_)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,le):r.framebufferTexture2D(36160,36096,3553,Q,0);else if(_.depthTexture.format===Di)xe(_)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,le):r.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function $(M){const _=n.get(M),H=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");j(_.__webglFramebuffer,M)}else if(H){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]=r.createRenderbuffer(),Be(_.__webglDepthbuffer[Q],M,!1)}else t.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=r.createRenderbuffer(),Be(_.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function ne(M,_,H){const Q=n.get(M);_!==void 0&&se(Q.__webglFramebuffer,M,M.texture,36064,3553),H!==void 0&&$(M)}function de(M){const _=M.texture,H=n.get(M),Q=n.get(_);M.addEventListener("dispose",Z),M.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=_.version,o.memory.textures++);const le=M.isWebGLCubeRenderTarget===!0,he=M.isWebGLMultipleRenderTargets===!0,ve=E(M)||a;if(le){H.__webglFramebuffer=[];for(let V=0;V<6;V++)H.__webglFramebuffer[V]=r.createFramebuffer()}else if(H.__webglFramebuffer=r.createFramebuffer(),he)if(i.drawBuffers){const V=M.texture;for(let Ce=0,Pe=V.length;Ce<Pe;Ce++){const fe=n.get(V[Ce]);fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(a&&M.samples>0&&xe(M)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,H.__webglColorRenderbuffer);const V=s.convert(_.format,_.encoding),Ce=s.convert(_.type),Pe=v(_.internalFormat,V,Ce,_.encoding),fe=ye(M);r.renderbufferStorageMultisample(36161,fe,Pe,M.width,M.height),t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,H.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),M.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Be(H.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}if(le){t.bindTexture(34067,Q.__webglTexture),q(34067,_,ve);for(let V=0;V<6;V++)se(H.__webglFramebuffer[V],M,_,36064,34069+V);L(_,ve)&&P(34067),t.unbindTexture()}else if(he){const V=M.texture;for(let Ce=0,Pe=V.length;Ce<Pe;Ce++){const fe=V[Ce],R=n.get(fe);t.bindTexture(3553,R.__webglTexture),q(3553,fe,ve),se(H.__webglFramebuffer,M,fe,36064+Ce,3553),L(fe,ve)&&P(3553)}t.unbindTexture()}else{let V=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?V=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(V,Q.__webglTexture),q(V,_,ve),se(H.__webglFramebuffer,M,_,36064,V),L(_,ve)&&P(V),t.unbindTexture()}M.depthBuffer&&$(M)}function ce(M){const _=E(M)||a,H=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0,le=H.length;Q<le;Q++){const he=H[Q];if(L(he,_)){const ve=M.isWebGLCubeRenderTarget?34067:3553,V=n.get(he).__webglTexture;t.bindTexture(ve,V),P(ve),t.unbindTexture()}}}function Te(M){if(a&&M.samples>0&&xe(M)===!1){const _=M.width,H=M.height;let Q=16384;const le=[36064],he=M.stencilBuffer?33306:36096;M.depthBuffer&&le.push(he);const ve=n.get(M),V=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;V===!1&&(M.depthBuffer&&(Q|=256),M.stencilBuffer&&(Q|=1024)),t.bindFramebuffer(36008,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ve.__webglFramebuffer),V===!0&&(r.invalidateFramebuffer(36008,[he]),r.invalidateFramebuffer(36009,[he])),r.blitFramebuffer(0,0,_,H,0,0,_,H,Q,9728),f&&r.invalidateFramebuffer(36008,le),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,ve.__webglMultisampledFramebuffer)}}function ye(M){return Math.min(u,M.samples)}function xe(M){const _=n.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ye(M){const _=o.render.frame;g.get(M)!==_&&(g.set(M,_),M.update())}function je(M,_){const H=M.encoding,Q=M.format,le=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===$o||H!==Ln&&(H===Ze?a===!1?e.has("EXT_sRGB")===!0&&Q===kt?(M.format=$o,M.minFilter=wt,M.generateMipmaps=!1):_=$n.sRGBToLinear(_):(Q!==kt||le!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),_}this.allocateTextureUnit=W,this.resetTextureUnits=G,this.setTexture2D=k,this.setTexture2DArray=ee,this.setTexture3D=K,this.setTextureCube=te,this.rebindTextures=ne,this.setupRenderTarget=de,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=se,this.useMultisampledRTT=xe}function Qg(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===Wn)return 5121;if(s===Ju)return 32819;if(s===Zu)return 32820;if(s===$u)return 5120;if(s===ju)return 5122;if(s===or)return 5123;if(s===Yu)return 5124;if(s===hs)return 5125;if(s===On)return 5126;if(s===ar)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ku)return 6406;if(s===kt)return 6408;if(s===ed)return 6409;if(s===td)return 6410;if(s===Vn)return 6402;if(s===Di)return 34041;if(s===nd)return 6403;if(s===Qu)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===$o)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===id)return 36244;if(s===rd)return 33319;if(s===sd)return 33320;if(s===od)return 36249;if(s===Ys||s===Js||s===Zs||s===Ks)if(o===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ys)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Js)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ys)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Js)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ks)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ka||s===Qa||s===el||s===tl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ka)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===el)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===tl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ad)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===nl||s===il)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===nl)return o===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===il)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===rl||s===sl||s===ol||s===al||s===ll||s===cl||s===hl||s===ul||s===dl||s===fl||s===pl||s===ml||s===gl||s===xl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===rl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===sl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ol)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===al)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ll)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===cl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ul)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===dl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===pl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ml)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===gl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===_l)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===_l)return o===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Ti?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class lh extends Mt{constructor(e=[]){super(),this.cameras=e}}lh.prototype.isArrayCamera=!0;class Gn extends We{constructor(){super(),this.type="Group"}}Gn.prototype.isGroup=!0;const ex={type:"move"};class Co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ex))),c&&e.hand){o=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const w=new Gn;w.matrixAutoUpdate=!1,w.visible=!1,c.joints[m.jointName]=w,c.add(w)}const x=c.joints[m.jointName];p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=p.radius),x.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class ch extends ct{constructor(e,t,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:Vn,h!==Vn&&h!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vn&&(n=or),n===void 0&&h===Di&&(n=Ti),super(null,i,s,o,a,l,h,n,c),this.image={width:e,height:t},this.magFilter=a!==void 0?a:dt,this.minFilter=l!==void 0?l:dt,this.flipY=!1,this.generateMipmaps=!1}}ch.prototype.isDepthTexture=!0;class tx extends Xn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=null,c=null,h=null,u=null,d=null,f=null;const g=t.getContextAttributes();let m=null,p=null;const x=[],w=new Map,T=new Mt;T.layers.enable(1),T.viewport=new Xe;const E=new Mt;E.layers.enable(2),E.viewport=new Xe;const b=[T,E],L=new lh;L.layers.enable(1),L.layers.enable(2);let P=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let k=x[U];return k===void 0&&(k=new Co,x[U]=k),k.getTargetRaySpace()},this.getControllerGrip=function(U){let k=x[U];return k===void 0&&(k=new Co,x[U]=k),k.getGripSpace()},this.getHand=function(U){let k=x[U];return k===void 0&&(k=new Co,x[U]=k),k.getHandSpace()};function C(U){const k=w.get(U.inputSource);k&&k.dispatchEvent({type:U.type,data:U.inputSource})}function D(){w.forEach(function(U,k){U.disconnect(k)}),w.clear(),P=null,v=null,e.setRenderTarget(m),d=null,u=null,h=null,i=null,p=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",D),i.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,k),i.updateRenderState({baseLayer:d}),p=new Rt(d.framebufferWidth,d.framebufferHeight,{format:kt,type:Wn,encoding:e.outputEncoding})}else{let k=null,ee=null,K=null;g.depth&&(K=g.stencil?35056:33190,k=g.stencil?Di:Vn,ee=g.stencil?Ti:or);const te={colorFormat:e.outputEncoding===Ze?35907:32856,depthFormat:K,scaleFactor:s};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(te),i.updateRenderState({layers:[u]}),p=new Rt(u.textureWidth,u.textureHeight,{format:kt,type:Wn,depthTexture:new ch(u.textureWidth,u.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const me=e.properties.get(p);me.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),o=await i.requestReferenceSpace(a),W.setContext(i),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(U){const k=i.inputSources;for(let ee=0;ee<k.length;ee++){const K=k[ee].handedness==="right"?1:0;w.set(k[ee],x[K])}for(let ee=0;ee<U.removed.length;ee++){const K=U.removed[ee],te=w.get(K);te&&(te.dispatchEvent({type:"disconnected",data:K}),w.delete(K))}for(let ee=0;ee<U.added.length;ee++){const K=U.added[ee],te=w.get(K);te&&te.dispatchEvent({type:"connected",data:K})}}const Z=new S,Y=new S;function A(U,k,ee){Z.setFromMatrixPosition(k.matrixWorld),Y.setFromMatrixPosition(ee.matrixWorld);const K=Z.distanceTo(Y),te=k.projectionMatrix.elements,me=ee.projectionMatrix.elements,ge=te[14]/(te[10]-1),q=te[14]/(te[10]+1),Oe=(te[9]+1)/te[5],we=(te[9]-1)/te[5],Le=(te[8]-1)/te[0],se=(me[8]+1)/me[0],Be=ge*Le,j=ge*se,$=K/(-Le+se),ne=$*-Le;k.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(ne),U.translateZ($),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const de=ge+$,ce=q+$,Te=Be-ne,ye=j+(K-ne),xe=Oe*q/ce*de,Ye=we*q/ce*de;U.projectionMatrix.makePerspective(Te,ye,xe,Ye,de,ce)}function z(U,k){k===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(k.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;L.near=E.near=T.near=U.near,L.far=E.far=T.far=U.far,(P!==L.near||v!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),P=L.near,v=L.far);const k=U.parent,ee=L.cameras;z(L,k);for(let te=0;te<ee.length;te++)z(ee[te],k);L.matrixWorld.decompose(L.position,L.quaternion,L.scale),U.position.copy(L.position),U.quaternion.copy(L.quaternion),U.scale.copy(L.scale),U.matrix.copy(L.matrix),U.matrixWorld.copy(L.matrixWorld);const K=U.children;for(let te=0,me=K.length;te<me;te++)K[te].updateMatrixWorld(!0);ee.length===2?A(L,T,E):L.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return L},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(U){u!==null&&(u.fixedFoveation=U),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=U)};let F=null;function G(U,k){if(c=k.getViewerPose(l||o),f=k,c!==null){const K=c.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let te=!1;K.length!==L.cameras.length&&(L.cameras.length=0,te=!0);for(let me=0;me<K.length;me++){const ge=K[me];let q=null;if(d!==null)q=d.getViewport(ge);else{const we=h.getViewSubImage(u,ge);q=we.viewport,me===0&&(e.setRenderTargetTextures(p,we.colorTexture,u.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(p))}const Oe=b[me];Oe.matrix.fromArray(ge.transform.matrix),Oe.projectionMatrix.fromArray(ge.projectionMatrix),Oe.viewport.set(q.x,q.y,q.width,q.height),me===0&&L.matrix.copy(Oe.matrix),te===!0&&L.cameras.push(Oe)}}const ee=i.inputSources;for(let K=0;K<x.length;K++){const te=ee[K],me=w.get(te);me!==void 0&&me.update(te,k,l||o)}F&&F(U,k),f=null}const W=new eh;W.setAnimationLoop(G),this.setAnimationLoop=function(U){F=U},this.dispose=function(){}}}function nx(r,e){function t(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,x,w,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),h(m,p)):p.isMeshPhongMaterial?(i(m,p),c(m,p)):p.isMeshStandardMaterial?(i(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,T)):p.isMeshMatcapMaterial?(i(m,p),f(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),g(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?a(m,p,x,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Lt&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Lt&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const E=r.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*E}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let w;p.map?w=p.map:p.specularMap?w=p.specularMap:p.displacementMap?w=p.displacementMap:p.normalMap?w=p.normalMap:p.bumpMap?w=p.bumpMap:p.roughnessMap?w=p.roughnessMap:p.metalnessMap?w=p.metalnessMap:p.alphaMap?w=p.alphaMap:p.emissiveMap?w=p.emissiveMap:p.clearcoatMap?w=p.clearcoatMap:p.clearcoatNormalMap?w=p.clearcoatNormalMap:p.clearcoatRoughnessMap?w=p.clearcoatRoughnessMap:p.specularIntensityMap?w=p.specularIntensityMap:p.specularColorMap?w=p.specularColorMap:p.transmissionMap?w=p.transmissionMap:p.thicknessMap?w=p.thicknessMap:p.sheenColorMap?w=p.sheenColorMap:p.sheenRoughnessMap&&(w=p.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix));let T;p.aoMap?T=p.aoMap:p.lightMap&&(T=p.lightMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),m.uv2Transform.value.copy(T.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,x,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=w*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T;p.map?T=p.map:p.alphaMap&&(T=p.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),m.uvTransform.value.copy(T.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Lt&&m.clearcoatNormalScale.value.negate())),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function f(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function ix(){const r=cr("canvas");return r.style.display="block",r}function qe(r={}){const e=r.canvas!==void 0?r.canvas:ix(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let u=null,d=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ln,this.physicallyCorrectLights=!1,this.toneMapping=fn,this.toneMappingExposure=1;const m=this;let p=!1,x=0,w=0,T=null,E=-1,b=null;const L=new Xe,P=new Xe;let v=null,C=e.width,D=e.height,I=1,Z=null,Y=null;const A=new Xe(0,0,C,D),z=new Xe(0,0,C,D);let F=!1;const G=new zs;let W=!1,U=!1,k=null;const ee=new _e,K=new J,te=new S,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return T===null?I:1}let q=t;function Oe(y,B){for(let O=0;O<y.length;O++){const N=y[O],X=e.getContext(N,B);if(X!==null)return X}return null}try{const y={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ma}`),e.addEventListener("webglcontextlost",R,!1),e.addEventListener("webglcontextrestored",ae,!1),q===null){const B=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&B.shift(),q=Oe(B,y),q===null)throw Oe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let we,Le,se,Be,j,$,ne,de,ce,Te,ye,xe,Ye,je,M,_,H,Q,le,he,ve,V,Ce;function Pe(){we=new ym(q),Le=new pm(q,we,r),we.init(Le),V=new Qg(q,we,Le),se=new Zg(q,we,Le),Be=new Mm(q),j=new Hg,$=new Kg(q,we,se,j,Le,V,Be),ne=new gm(m),de=new vm(m),ce=new Nd(q,Le),Ce=new dm(q,we,ce,Le),Te=new bm(q,ce,Be,Ce),ye=new Am(q,Te,ce,Be),le=new Tm(q,Le,$),_=new mm(j),xe=new Og(m,ne,de,we,Le,Ce,_),Ye=new nx(m,j),je=new Vg,M=new jg(we,Le),Q=new um(m,ne,se,ye,h,o),H=new ah(m,ye,Le),he=new fm(q,we,Be,Le),ve=new wm(q,we,Be,Le),Be.programs=xe.programs,m.capabilities=Le,m.extensions=we,m.properties=j,m.renderLists=je,m.shadowMap=H,m.state=se,m.info=Be}Pe();const fe=new tx(m,q);this.xr=fe,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const y=we.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=we.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(y){y!==void 0&&(I=y,this.setSize(C,D,!1))},this.getSize=function(y){return y.set(C,D)},this.setSize=function(y,B,O){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=y,D=B,e.width=Math.floor(y*I),e.height=Math.floor(B*I),O!==!1&&(e.style.width=y+"px",e.style.height=B+"px"),this.setViewport(0,0,y,B)},this.getDrawingBufferSize=function(y){return y.set(C*I,D*I).floor()},this.setDrawingBufferSize=function(y,B,O){C=y,D=B,I=O,e.width=Math.floor(y*O),e.height=Math.floor(B*O),this.setViewport(0,0,y,B)},this.getCurrentViewport=function(y){return y.copy(L)},this.getViewport=function(y){return y.copy(A)},this.setViewport=function(y,B,O,N){y.isVector4?A.set(y.x,y.y,y.z,y.w):A.set(y,B,O,N),se.viewport(L.copy(A).multiplyScalar(I).floor())},this.getScissor=function(y){return y.copy(z)},this.setScissor=function(y,B,O,N){y.isVector4?z.set(y.x,y.y,y.z,y.w):z.set(y,B,O,N),se.scissor(P.copy(z).multiplyScalar(I).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(y){se.setScissorTest(F=y)},this.setOpaqueSort=function(y){Z=y},this.setTransparentSort=function(y){Y=y},this.getClearColor=function(y){return y.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(y=!0,B=!0,O=!0){let N=0;y&&(N|=16384),B&&(N|=256),O&&(N|=1024),q.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",R,!1),e.removeEventListener("webglcontextrestored",ae,!1),je.dispose(),M.dispose(),j.dispose(),ne.dispose(),de.dispose(),ye.dispose(),Ce.dispose(),xe.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Se),fe.removeEventListener("sessionend",Ge),k&&(k.dispose(),k=null),Fe.stop()};function R(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const y=Be.autoReset,B=H.enabled,O=H.autoUpdate,N=H.needsUpdate,X=H.type;Pe(),Be.autoReset=y,H.enabled=B,H.autoUpdate=O,H.needsUpdate=N,H.type=X}function oe(y){const B=y.target;B.removeEventListener("dispose",oe),Me(B)}function Me(y){ue(y),j.remove(y)}function ue(y){const B=j.get(y).programs;B!==void 0&&(B.forEach(function(O){xe.releaseProgram(O)}),y.isShaderMaterial&&xe.releaseShaderCache(y))}this.renderBufferDirect=function(y,B,O,N,X,Ee){B===null&&(B=me);const Ae=X.isMesh&&X.matrixWorld.determinant()<0,De=$h(y,B,O,N,X);se.setMaterial(N,Ae);let Re=O.index;const Ve=O.attributes.position;if(Re===null){if(Ve===void 0||Ve.count===0)return}else if(Re.count===0)return;let Ne=1;N.wireframe===!0&&(Re=Te.getWireframeAttribute(O),Ne=2),Ce.setup(X,N,De,O,Re);let ze,tt=he;Re!==null&&(ze=ce.get(Re),tt=ve,tt.setIndex(ze));const In=Re!==null?Re.count:Ve.count,Zn=O.drawRange.start*Ne,Kn=O.drawRange.count*Ne,Xt=Ee!==null?Ee.start*Ne:0,He=Ee!==null?Ee.count*Ne:1/0,Qn=Math.max(Zn,Xt),it=Math.min(In,Zn+Kn,Xt+He)-1,$t=Math.max(0,it-Qn+1);if($t!==0){if(X.isMesh)N.wireframe===!0?(se.setLineWidth(N.wireframeLinewidth*ge()),tt.setMode(1)):tt.setMode(4);else if(X.isLine){let gn=N.linewidth;gn===void 0&&(gn=1),se.setLineWidth(gn*ge()),X.isLineSegments?tt.setMode(1):X.isLineLoop?tt.setMode(2):tt.setMode(3)}else X.isPoints?tt.setMode(0):X.isSprite&&tt.setMode(4);if(X.isInstancedMesh)tt.renderInstances(Qn,$t,X.count);else if(O.isInstancedBufferGeometry){const gn=Math.min(O.instanceCount,O._maxInstanceCount);tt.renderInstances(Qn,$t,gn)}else tt.render(Qn,$t)}},this.compile=function(y,B){d=M.get(y),d.init(),g.push(d),y.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights(m.physicallyCorrectLights),y.traverse(function(O){const N=O.material;if(N)if(Array.isArray(N))for(let X=0;X<N.length;X++){const Ee=N[X];qs(Ee,y,O)}else qs(N,y,O)}),g.pop(),d=null};let be=null;function ie(y){be&&be(y)}function Se(){Fe.stop()}function Ge(){Fe.start()}const Fe=new eh;Fe.setAnimationLoop(ie),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(y){be=y,fe.setAnimationLoop(y),y===null?Fe.stop():Fe.start()},fe.addEventListener("sessionstart",Se),fe.addEventListener("sessionend",Ge),this.render=function(y,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;y.autoUpdate===!0&&y.updateMatrixWorld(),B.parent===null&&B.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(B),B=fe.getCamera()),y.isScene===!0&&y.onBeforeRender(m,y,B,T),d=M.get(y,g.length),d.init(),g.push(d),ee.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),G.setFromProjectionMatrix(ee),U=this.localClippingEnabled,W=_.init(this.clippingPlanes,U,B),u=je.get(y,f.length),u.init(),f.push(u),Wt(y,B,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(Z,Y),W===!0&&_.beginShadows();const O=d.state.shadowsArray;if(H.render(O,y,B),W===!0&&_.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(u,y),d.setupLights(m.physicallyCorrectLights),B.isArrayCamera){const N=B.cameras;for(let X=0,Ee=N.length;X<Ee;X++){const Ae=N[X];qt(u,y,Ae,Ae.viewport)}}else qt(u,y,B);T!==null&&($.updateMultisampleRenderTarget(T),$.updateRenderTargetMipmap(T)),y.isScene===!0&&y.onAfterRender(m,y,B),Ce.resetDefaultState(),E=-1,b=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function Wt(y,B,O,N){if(y.visible===!1)return;if(y.layers.test(B.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(B);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||G.intersectsSprite(y)){N&&te.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ee);const Ae=ye.update(y),De=y.material;De.visible&&u.push(y,Ae,De,O,te.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==Be.render.frame&&(y.skeleton.update(),y.skeleton.frame=Be.render.frame),!y.frustumCulled||G.intersectsObject(y))){N&&te.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ee);const Ae=ye.update(y),De=y.material;if(Array.isArray(De)){const Re=Ae.groups;for(let Ve=0,Ne=Re.length;Ve<Ne;Ve++){const ze=Re[Ve],tt=De[ze.materialIndex];tt&&tt.visible&&u.push(y,Ae,tt,O,te.z,ze)}}else De.visible&&u.push(y,Ae,De,O,te.z,null)}}const Ee=y.children;for(let Ae=0,De=Ee.length;Ae<De;Ae++)Wt(Ee[Ae],B,O,N)}function qt(y,B,O,N){const X=y.opaque,Ee=y.transmissive,Ae=y.transparent;d.setupLightsView(O),Ee.length>0&&qh(X,B,O),N&&se.viewport(L.copy(N)),X.length>0&&Mr(X,B,O),Ee.length>0&&Mr(Ee,B,O),Ae.length>0&&Mr(Ae,B,O),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function qh(y,B,O){const N=Le.isWebGL2;k===null&&(k=new Rt(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?ar:Wn,minFilter:Bs,samples:N&&s===!0?4:0})),m.getDrawingBufferSize(K),N?k.setSize(K.x,K.y):k.setSize(Yo(K.x),Yo(K.y));const X=m.getRenderTarget();m.setRenderTarget(k),m.clear();const Ee=m.toneMapping;m.toneMapping=fn,Mr(y,B,O),m.toneMapping=Ee,$.updateMultisampleRenderTarget(k),$.updateRenderTargetMipmap(k),m.setRenderTarget(X)}function Mr(y,B,O){const N=B.isScene===!0?B.overrideMaterial:null;for(let X=0,Ee=y.length;X<Ee;X++){const Ae=y[X],De=Ae.object,Re=Ae.geometry,Ve=N===null?Ae.material:N,Ne=Ae.group;De.layers.test(O.layers)&&Xh(De,B,O,Re,Ve,Ne)}}function Xh(y,B,O,N,X,Ee){y.onBeforeRender(m,B,O,N,X,Ee),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),X.onBeforeRender(m,B,O,N,y,Ee),X.transparent===!0&&X.side===Li?(X.side=Lt,X.needsUpdate=!0,m.renderBufferDirect(O,B,N,X,y,Ee),X.side=sr,X.needsUpdate=!0,m.renderBufferDirect(O,B,N,X,y,Ee),X.side=Li):m.renderBufferDirect(O,B,N,X,y,Ee),y.onAfterRender(m,B,O,N,X,Ee)}function qs(y,B,O){B.isScene!==!0&&(B=me);const N=j.get(y),X=d.state.lights,Ee=d.state.shadowsArray,Ae=X.state.version,De=xe.getParameters(y,X.state,Ee,B,O),Re=xe.getProgramCacheKey(De);let Ve=N.programs;N.environment=y.isMeshStandardMaterial?B.environment:null,N.fog=B.fog,N.envMap=(y.isMeshStandardMaterial?de:ne).get(y.envMap||N.environment),Ve===void 0&&(y.addEventListener("dispose",oe),Ve=new Map,N.programs=Ve);let Ne=Ve.get(Re);if(Ne!==void 0){if(N.currentProgram===Ne&&N.lightsStateVersion===Ae)return Ga(y,De),Ne}else De.uniforms=xe.getUniforms(y),y.onBuild(O,De,m),y.onBeforeCompile(De,m),Ne=xe.acquireProgram(De,Re),Ve.set(Re,Ne),N.uniforms=De.uniforms;const ze=N.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ze.clippingPlanes=_.uniform),Ga(y,De),N.needsLights=Yh(y),N.lightsStateVersion=Ae,N.needsLights&&(ze.ambientLightColor.value=X.state.ambient,ze.lightProbe.value=X.state.probe,ze.directionalLights.value=X.state.directional,ze.directionalLightShadows.value=X.state.directionalShadow,ze.spotLights.value=X.state.spot,ze.spotLightShadows.value=X.state.spotShadow,ze.rectAreaLights.value=X.state.rectArea,ze.ltc_1.value=X.state.rectAreaLTC1,ze.ltc_2.value=X.state.rectAreaLTC2,ze.pointLights.value=X.state.point,ze.pointLightShadows.value=X.state.pointShadow,ze.hemisphereLights.value=X.state.hemi,ze.directionalShadowMap.value=X.state.directionalShadowMap,ze.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ze.spotShadowMap.value=X.state.spotShadowMap,ze.spotShadowMatrix.value=X.state.spotShadowMatrix,ze.pointShadowMap.value=X.state.pointShadowMap,ze.pointShadowMatrix.value=X.state.pointShadowMatrix);const tt=Ne.getUniforms(),In=An.seqWithValue(tt.seq,ze);return N.currentProgram=Ne,N.uniformsList=In,Ne}function Ga(y,B){const O=j.get(y);O.outputEncoding=B.outputEncoding,O.instancing=B.instancing,O.skinning=B.skinning,O.morphTargets=B.morphTargets,O.morphNormals=B.morphNormals,O.morphColors=B.morphColors,O.morphTargetsCount=B.morphTargetsCount,O.numClippingPlanes=B.numClippingPlanes,O.numIntersection=B.numClipIntersection,O.vertexAlphas=B.vertexAlphas,O.vertexTangents=B.vertexTangents,O.toneMapping=B.toneMapping}function $h(y,B,O,N,X){B.isScene!==!0&&(B=me),$.resetTextureUnits();const Ee=B.fog,Ae=N.isMeshStandardMaterial?B.environment:null,De=T===null?m.outputEncoding:T.isXRRenderTarget===!0?T.texture.encoding:Ln,Re=(N.isMeshStandardMaterial?de:ne).get(N.envMap||Ae),Ve=N.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ne=!!N.normalMap&&!!O.attributes.tangent,ze=!!O.morphAttributes.position,tt=!!O.morphAttributes.normal,In=!!O.morphAttributes.color,Zn=N.toneMapped?m.toneMapping:fn,Kn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Xt=Kn!==void 0?Kn.length:0,He=j.get(N),Qn=d.state.lights;if(W===!0&&(U===!0||y!==b)){const jt=y===b&&N.id===E;_.setState(N,y,jt)}let it=!1;N.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Qn.state.version||He.outputEncoding!==De||X.isInstancedMesh&&He.instancing===!1||!X.isInstancedMesh&&He.instancing===!0||X.isSkinnedMesh&&He.skinning===!1||!X.isSkinnedMesh&&He.skinning===!0||He.envMap!==Re||N.fog===!0&&He.fog!==Ee||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==_.numPlanes||He.numIntersection!==_.numIntersection)||He.vertexAlphas!==Ve||He.vertexTangents!==Ne||He.morphTargets!==ze||He.morphNormals!==tt||He.morphColors!==In||He.toneMapping!==Zn||Le.isWebGL2===!0&&He.morphTargetsCount!==Xt)&&(it=!0):(it=!0,He.__version=N.version);let $t=He.currentProgram;it===!0&&($t=qs(N,B,X));let gn=!1,Gi=!1,Xs=!1;const _t=$t.getUniforms(),Vi=He.uniforms;if(se.useProgram($t.program)&&(gn=!0,Gi=!0,Xs=!0),N.id!==E&&(E=N.id,Gi=!0),gn||b!==y){if(_t.setValue(q,"projectionMatrix",y.projectionMatrix),Le.logarithmicDepthBuffer&&_t.setValue(q,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),b!==y&&(b=y,Gi=!0,Xs=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const jt=_t.map.cameraPosition;jt!==void 0&&jt.setValue(q,te.setFromMatrixPosition(y.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&_t.setValue(q,"isOrthographic",y.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||X.isSkinnedMesh)&&_t.setValue(q,"viewMatrix",y.matrixWorldInverse)}if(X.isSkinnedMesh){_t.setOptional(q,X,"bindMatrix"),_t.setOptional(q,X,"bindMatrixInverse");const jt=X.skeleton;jt&&(Le.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),_t.setValue(q,"boneTexture",jt.boneTexture,$),_t.setValue(q,"boneTextureSize",jt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const $s=O.morphAttributes;return($s.position!==void 0||$s.normal!==void 0||$s.color!==void 0&&Le.isWebGL2===!0)&&le.update(X,O,N,$t),(Gi||He.receiveShadow!==X.receiveShadow)&&(He.receiveShadow=X.receiveShadow,_t.setValue(q,"receiveShadow",X.receiveShadow)),Gi&&(_t.setValue(q,"toneMappingExposure",m.toneMappingExposure),He.needsLights&&jh(Vi,Xs),Ee&&N.fog===!0&&Ye.refreshFogUniforms(Vi,Ee),Ye.refreshMaterialUniforms(Vi,N,I,D,k),An.upload(q,He.uniformsList,Vi,$)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(An.upload(q,He.uniformsList,Vi,$),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&_t.setValue(q,"center",X.center),_t.setValue(q,"modelViewMatrix",X.modelViewMatrix),_t.setValue(q,"normalMatrix",X.normalMatrix),_t.setValue(q,"modelMatrix",X.matrixWorld),$t}function jh(y,B){y.ambientLightColor.needsUpdate=B,y.lightProbe.needsUpdate=B,y.directionalLights.needsUpdate=B,y.directionalLightShadows.needsUpdate=B,y.pointLights.needsUpdate=B,y.pointLightShadows.needsUpdate=B,y.spotLights.needsUpdate=B,y.spotLightShadows.needsUpdate=B,y.rectAreaLights.needsUpdate=B,y.hemisphereLights.needsUpdate=B}function Yh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(y,B,O){j.get(y.texture).__webglTexture=B,j.get(y.depthTexture).__webglTexture=O;const N=j.get(y);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=O===void 0,N.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,B){const O=j.get(y);O.__webglFramebuffer=B,O.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(y,B=0,O=0){T=y,x=B,w=O;let N=!0;if(y){const Re=j.get(y);Re.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(36160,null),N=!1):Re.__webglFramebuffer===void 0?$.setupRenderTarget(y):Re.__hasExternalTextures&&$.rebindTextures(y,j.get(y.texture).__webglTexture,j.get(y.depthTexture).__webglTexture)}let X=null,Ee=!1,Ae=!1;if(y){const Re=y.texture;(Re.isData3DTexture||Re.isDataArrayTexture)&&(Ae=!0);const Ve=j.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(X=Ve[B],Ee=!0):Le.isWebGL2&&y.samples>0&&$.useMultisampledRTT(y)===!1?X=j.get(y).__webglMultisampledFramebuffer:X=Ve,L.copy(y.viewport),P.copy(y.scissor),v=y.scissorTest}else L.copy(A).multiplyScalar(I).floor(),P.copy(z).multiplyScalar(I).floor(),v=F;if(se.bindFramebuffer(36160,X)&&Le.drawBuffers&&N&&se.drawBuffers(y,X),se.viewport(L),se.scissor(P),se.setScissorTest(v),Ee){const Re=j.get(y.texture);q.framebufferTexture2D(36160,36064,34069+B,Re.__webglTexture,O)}else if(Ae){const Re=j.get(y.texture),Ve=B||0;q.framebufferTextureLayer(36160,36064,Re.__webglTexture,O||0,Ve)}E=-1},this.readRenderTargetPixels=function(y,B,O,N,X,Ee,Ae){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=j.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){se.bindFramebuffer(36160,De);try{const Re=y.texture,Ve=Re.format,Ne=Re.type;if(Ve!==kt&&V.convert(Ve)!==q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Ne===ar&&(we.has("EXT_color_buffer_half_float")||Le.isWebGL2&&we.has("EXT_color_buffer_float"));if(Ne!==Wn&&V.convert(Ne)!==q.getParameter(35738)&&!(Ne===On&&(Le.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=y.width-N&&O>=0&&O<=y.height-X&&q.readPixels(B,O,N,X,V.convert(Ve),V.convert(Ne),Ee)}finally{const Re=T!==null?j.get(T).__webglFramebuffer:null;se.bindFramebuffer(36160,Re)}}},this.copyFramebufferToTexture=function(y,B,O=0){if(B.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const N=Math.pow(2,-O),X=Math.floor(B.image.width*N),Ee=Math.floor(B.image.height*N);$.setTexture2D(B,0),q.copyTexSubImage2D(3553,O,0,0,y.x,y.y,X,Ee),se.unbindTexture()},this.copyTextureToTexture=function(y,B,O,N=0){const X=B.image.width,Ee=B.image.height,Ae=V.convert(O.format),De=V.convert(O.type);$.setTexture2D(O,0),q.pixelStorei(37440,O.flipY),q.pixelStorei(37441,O.premultiplyAlpha),q.pixelStorei(3317,O.unpackAlignment),B.isDataTexture?q.texSubImage2D(3553,N,y.x,y.y,X,Ee,Ae,De,B.image.data):B.isCompressedTexture?q.compressedTexSubImage2D(3553,N,y.x,y.y,B.mipmaps[0].width,B.mipmaps[0].height,Ae,B.mipmaps[0].data):q.texSubImage2D(3553,N,y.x,y.y,Ae,De,B.image),N===0&&O.generateMipmaps&&q.generateMipmap(3553),se.unbindTexture()},this.copyTextureToTexture3D=function(y,B,O,N,X=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=y.max.x-y.min.x+1,Ae=y.max.y-y.min.y+1,De=y.max.z-y.min.z+1,Re=V.convert(N.format),Ve=V.convert(N.type);let Ne;if(N.isData3DTexture)$.setTexture3D(N,0),Ne=32879;else if(N.isDataArrayTexture)$.setTexture2DArray(N,0),Ne=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(37440,N.flipY),q.pixelStorei(37441,N.premultiplyAlpha),q.pixelStorei(3317,N.unpackAlignment);const ze=q.getParameter(3314),tt=q.getParameter(32878),In=q.getParameter(3316),Zn=q.getParameter(3315),Kn=q.getParameter(32877),Xt=O.isCompressedTexture?O.mipmaps[0]:O.image;q.pixelStorei(3314,Xt.width),q.pixelStorei(32878,Xt.height),q.pixelStorei(3316,y.min.x),q.pixelStorei(3315,y.min.y),q.pixelStorei(32877,y.min.z),O.isDataTexture||O.isData3DTexture?q.texSubImage3D(Ne,X,B.x,B.y,B.z,Ee,Ae,De,Re,Ve,Xt.data):O.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Ne,X,B.x,B.y,B.z,Ee,Ae,De,Re,Xt.data)):q.texSubImage3D(Ne,X,B.x,B.y,B.z,Ee,Ae,De,Re,Ve,Xt),q.pixelStorei(3314,ze),q.pixelStorei(32878,tt),q.pixelStorei(3316,In),q.pixelStorei(3315,Zn),q.pixelStorei(32877,Kn),X===0&&N.generateMipmaps&&q.generateMipmap(Ne),se.unbindTexture()},this.initTexture=function(y){$.setTexture2D(y,0),se.unbindTexture()},this.resetState=function(){x=0,w=0,T=null,se.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}qe.prototype.isWebGLRenderer=!0;class rx extends qe{}rx.prototype.isWebGL1Renderer=!0;class Aa extends We{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Aa.prototype.isScene=!0;class _r{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Qt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}_r.prototype.isInterleavedBuffer=!0;const vt=new S;class dn{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new dn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}dn.prototype.isInterleavedBufferAttribute=!0;class Hs extends ht{constructor(e){super(),this.type="SpriteMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}Hs.prototype.isSpriteMaterial=!0;let mi;const Xi=new S,gi=new S,xi=new S,_i=new J,$i=new J,hh=new _e,qr=new S,ji=new S,Xr=new S,ec=new J,Lo=new J,tc=new J;class uh extends We{constructor(e){if(super(),this.type="Sprite",mi===void 0){mi=new $e;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _r(t,5);mi.setIndex([0,1,2,0,2,3]),mi.setAttribute("position",new dn(n,3,0,!1)),mi.setAttribute("uv",new dn(n,2,3,!1))}this.geometry=mi,this.material=e!==void 0?e:new Hs,this.center=new J(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gi.setFromMatrixScale(this.matrixWorld),hh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gi.multiplyScalar(-xi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;$r(qr.set(-.5,-.5,0),xi,o,gi,i,s),$r(ji.set(.5,-.5,0),xi,o,gi,i,s),$r(Xr.set(.5,.5,0),xi,o,gi,i,s),ec.set(0,0),Lo.set(1,0),tc.set(1,1);let a=e.ray.intersectTriangle(qr,ji,Xr,!1,Xi);if(a===null&&($r(ji.set(-.5,.5,0),xi,o,gi,i,s),Lo.set(0,1),a=e.ray.intersectTriangle(qr,Xr,ji,!1,Xi),a===null))return;const l=e.ray.origin.distanceTo(Xi);l<e.near||l>e.far||t.push({distance:l,point:Xi.clone(),uv:st.getUV(Xi,qr,ji,Xr,ec,Lo,tc,new J),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}uh.prototype.isSprite=!0;function $r(r,e,t,n,i,s){_i.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?($i.x=s*_i.x-i*_i.y,$i.y=i*_i.x+s*_i.y):$i.copy(_i),r.copy(e),r.x+=$i.x,r.y+=$i.y,r.applyMatrix4(hh)}const nc=new S,ic=new Xe,rc=new Xe,sx=new S,sc=new _e;class dh extends et{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new _e,this.bindMatrixInverse=new _e}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Xe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;ic.fromBufferAttribute(i.attributes.skinIndex,e),rc.fromBufferAttribute(i.attributes.skinWeight,e),nc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=rc.getComponent(s);if(o!==0){const a=ic.getComponent(s);sc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(sx.copy(nc).applyMatrix4(sc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}dh.prototype.isSkinnedMesh=!0;class ox extends We{constructor(){super(),this.type="Bone"}}ox.prototype.isBone=!0;class ax extends ct{constructor(e=null,t=1,n=1,i,s,o,a,l,c=dt,h=dt,u,d){super(null,o,a,l,c,h,i,s,u,d),this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}ax.prototype.isDataTexture=!0;class Zo extends ot{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}Zo.prototype.isInstancedBufferAttribute=!0;const oc=new _e,ac=new _e,jr=[],Yi=new et;class lx extends et{constructor(e,t,n){super(e,t),this.instanceMatrix=new Zo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Yi.geometry=this.geometry,Yi.material=this.material,Yi.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,oc),ac.multiplyMatrices(n,oc),Yi.matrixWorld=ac,Yi.raycast(e,jr);for(let o=0,a=jr.length;o<a;o++){const l=jr[o];l.instanceId=s,l.object=this,t.push(l)}jr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}lx.prototype.isInstancedMesh=!0;class zi extends ht{constructor(e){super(),this.type="LineBasicMaterial",this.color=new pe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}zi.prototype.isLineBasicMaterial=!0;const lc=new S,cc=new S,hc=new _e,Ro=new Yn,Yr=new jn;class Ca extends We{constructor(e=new $e,t=new zi){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)lc.fromBufferAttribute(t,i-1),cc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=lc.distanceTo(cc);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Yr.radius+=s,e.ray.intersectsSphere(Yr)===!1)return;hc.copy(i).invert(),Ro.copy(e.ray).applyMatrix4(hc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new S,h=new S,u=new S,d=new S,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,p=n.attributes.position;if(g!==null){const x=Math.max(0,o.start),w=Math.min(g.count,o.start+o.count);for(let T=x,E=w-1;T<E;T+=f){const b=g.getX(T),L=g.getX(T+1);if(c.fromBufferAttribute(p,b),h.fromBufferAttribute(p,L),Ro.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(d);v<e.near||v>e.far||t.push({distance:v,point:u.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,o.start),w=Math.min(p.count,o.start+o.count);for(let T=x,E=w-1;T<E;T+=f){if(c.fromBufferAttribute(p,T),h.fromBufferAttribute(p,T+1),Ro.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Ca.prototype.isLine=!0;const uc=new S,dc=new S;class La extends Ca{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)uc.fromBufferAttribute(t,i),dc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+uc.distanceTo(dc);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}La.prototype.isLineSegments=!0;class cx extends Ca{constructor(e,t){super(e,t),this.type="LineLoop"}}cx.prototype.isLineLoop=!0;class Ra extends ht{constructor(e){super(),this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}Ra.prototype.isPointsMaterial=!0;const fc=new _e,Ko=new Yn,Jr=new jn,Zr=new S;class hx extends We{constructor(e=new $e,t=new Ra){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),Jr.radius+=s,e.ray.intersectsSphere(Jr)===!1)return;fc.copy(i).invert(),Ko.copy(e.ray).applyMatrix4(fc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){const c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,m=f;g<m;g++){const p=c.getX(g);Zr.fromBufferAttribute(u,p),pc(Zr,p,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,m=f;g<m;g++)Zr.fromBufferAttribute(u,g),pc(Zr,g,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}hx.prototype.isPoints=!0;function pc(r,e,t,n,i,s,o){const a=Ko.distanceSqToPoint(r);if(a<t){const l=new S;Ko.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class ux extends ct{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.minFilter=o!==void 0?o:wt,this.magFilter=s!==void 0?s:wt,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}ux.prototype.isVideoTexture=!0;class dx extends ct{constructor(e,t,n){super({width:e,height:t}),this.format=n,this.magFilter=dt,this.minFilter=dt,this.generateMipmaps=!1,this.needsUpdate=!0}}dx.prototype.isFramebufferTexture=!0;class fx extends ct{constructor(e,t,n,i,s,o,a,l,c,h,u,d){super(null,o,a,l,c,h,i,s,u,d),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}fx.prototype.isCompressedTexture=!0;class fh extends ct{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.needsUpdate=!0}}fh.prototype.isCanvasTexture=!0;class Nt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new J:new S);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new S,i=[],s=[],o=[],a=new S,l=new _e;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new S)}s[0]=new S,o[0]=new S;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(gt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(gt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Gs extends Nt{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new J,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Gs.prototype.isEllipseCurve=!0;class ph extends Gs{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.type="ArcCurve"}}ph.prototype.isArcCurve=!0;function Pa(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Kr=new S,Po=new Pa,Do=new Pa,Io=new Pa;class mh extends Nt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new S){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Kr.subVectors(i[0],i[1]).add(i[0]),c=Kr);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Kr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Kr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);m<1e-4&&(m=1),g<1e-4&&(g=m),p<1e-4&&(p=m),Po.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,m,p),Do.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,m,p),Io.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,m,p)}else this.curveType==="catmullrom"&&(Po.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Do.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Io.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Po.calc(l),Do.calc(l),Io.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new S().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}mh.prototype.isCatmullRomCurve3=!0;function mc(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function px(r,e){const t=1-r;return t*t*e}function mx(r,e){return 2*(1-r)*r*e}function gx(r,e){return r*r*e}function nr(r,e,t,n){return px(r,e)+mx(r,t)+gx(r,n)}function xx(r,e){const t=1-r;return t*t*t*e}function _x(r,e){const t=1-r;return 3*t*t*r*e}function vx(r,e){return 3*(1-r)*r*r*e}function yx(r,e){return r*r*r*e}function ir(r,e,t,n,i){return xx(r,e)+_x(r,t)+vx(r,n)+yx(r,i)}class Da extends Nt{constructor(e=new J,t=new J,n=new J,i=new J){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new J){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ir(e,i.x,s.x,o.x,a.x),ir(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Da.prototype.isCubicBezierCurve=!0;class gh extends Nt{constructor(e=new S,t=new S,n=new S,i=new S){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new S){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ir(e,i.x,s.x,o.x,a.x),ir(e,i.y,s.y,o.y,a.y),ir(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}gh.prototype.isCubicBezierCurve3=!0;class Vs extends Nt{constructor(e=new J,t=new J){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new J;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Vs.prototype.isLineCurve=!0;class bx extends Nt{constructor(e=new S,t=new S){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new S){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ia extends Nt{constructor(e=new J,t=new J,n=new J){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(nr(e,i.x,s.x,o.x),nr(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Ia.prototype.isQuadraticBezierCurve=!0;class xh extends Nt{constructor(e=new S,t=new S,n=new S){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(nr(e,i.x,s.x,o.x),nr(e,i.y,s.y,o.y),nr(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}xh.prototype.isQuadraticBezierCurve3=!0;class Ba extends Nt{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new J){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(mc(a,l.x,c.x,h.x,u.x),mc(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new J().fromArray(i))}return this}}Ba.prototype.isSplineCurve=!0;var _h=Object.freeze({__proto__:null,ArcCurve:ph,CatmullRomCurve3:mh,CubicBezierCurve:Da,CubicBezierCurve3:gh,EllipseCurve:Gs,LineCurve:Vs,LineCurve3:bx,QuadraticBezierCurve:Ia,QuadraticBezierCurve3:xh,SplineCurve:Ba});class wx extends Nt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Vs(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new _h[i.type]().fromJSON(i))}return this}}class Qo extends wx{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Vs(this.currentPoint.clone(),new J(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Ia(this.currentPoint.clone(),new J(e,t),new J(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new Da(this.currentPoint.clone(),new J(e,t),new J(n,i),new J(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ba(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new Gs(e,t,n,i,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Fa extends $e{constructor(e=1,t=1,n=1,i=8,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const m=[],p=n/2;let x=0;w(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(f,2));function w(){const E=new S,b=new S;let L=0;const P=(t-e)/n;for(let v=0;v<=s;v++){const C=[],D=v/s,I=D*(t-e)+e;for(let Z=0;Z<=i;Z++){const Y=Z/i,A=Y*l+a,z=Math.sin(A),F=Math.cos(A);b.x=I*z,b.y=-D*n+p,b.z=I*F,u.push(b.x,b.y,b.z),E.set(z,P,F).normalize(),d.push(E.x,E.y,E.z),f.push(Y,1-D),C.push(g++)}m.push(C)}for(let v=0;v<i;v++)for(let C=0;C<s;C++){const D=m[C][v],I=m[C+1][v],Z=m[C+1][v+1],Y=m[C][v+1];h.push(D,I,Y),h.push(I,Z,Y),L+=6}c.addGroup(x,L,0),x+=L}function T(E){const b=g,L=new J,P=new S;let v=0;const C=E===!0?e:t,D=E===!0?1:-1;for(let Z=1;Z<=i;Z++)u.push(0,p*D,0),d.push(0,D,0),f.push(.5,.5),g++;const I=g;for(let Z=0;Z<=i;Z++){const A=Z/i*l+a,z=Math.cos(A),F=Math.sin(A);P.x=C*F,P.y=p*D,P.z=C*z,u.push(P.x,P.y,P.z),d.push(0,D,0),L.x=z*.5+.5,L.y=F*.5*D+.5,f.push(L.x,L.y),g++}for(let Z=0;Z<i;Z++){const Y=b+Z,A=I+Z;E===!0?h.push(A,A+1,Y):h.push(A+1,A,Y),v+=3}c.addGroup(x,v,E===!0?1:2),x+=v}}static fromJSON(e){return new Fa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Qr=new S,es=new S,Bo=new S,ts=new st;class vh extends $e{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(us*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:m,b:p,c:x}=ts;if(m.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),x.fromBufferAttribute(a,c[2]),ts.getNormal(Bo),u[0]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,u[2]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let w=0;w<3;w++){const T=(w+1)%3,E=u[w],b=u[T],L=ts[h[w]],P=ts[h[T]],v=`${E}_${b}`,C=`${b}_${E}`;C in d&&d[C]?(Bo.dot(d[C].normal)<=s&&(f.push(L.x,L.y,L.z),f.push(P.x,P.y,P.z)),d[C]=null):v in d||(d[v]={index0:c[w],index1:c[T],normal:Bo.clone()})}}for(const g in d)if(d[g]){const{index0:m,index1:p}=d[g];Qr.fromBufferAttribute(a,m),es.fromBufferAttribute(a,p),f.push(Qr.x,Qr.y,Qr.z),f.push(es.x,es.y,es.z)}this.setAttribute("position",new Je(f,3))}}}class vr extends Qo{constructor(e){super(e),this.uuid=Qt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Qo().fromJSON(i))}return this}}const Mx={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=yh(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,d,f;if(n&&(s=Cx(r,e,s,t)),r.length>80*t){a=c=r[0],l=h=r[1];for(let g=t;g<i;g+=t)u=r[g],d=r[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?1/f:0}return hr(s,o,t,a,l,f),o}};function yh(r,e,t,n,i){let s,o;if(i===Ox(r,e,t,n)>0)for(s=e;s<t;s+=n)o=gc(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=gc(s,r[s],r[s+1],o);return o&&ks(o,o.next)&&(dr(o),o=o.next),o}function Rn(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(ks(t,t.next)||Qe(t.prev,t,t.next)===0)){if(dr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function hr(r,e,t,n,i,s,o){if(!r)return;!o&&s&&Ix(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Ex(r,n,i,s):Sx(r)){e.push(l.i/t),e.push(r.i/t),e.push(c.i/t),dr(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Tx(Rn(r),e,t),hr(r,e,t,n,i,s,2)):o===2&&Ax(r,e,t,n,i,s):hr(Rn(r),e,t,n,i,s,1);break}}}function Sx(r){const e=r.prev,t=r,n=r.next;if(Qe(e,t,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(Si(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&Qe(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Ex(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Qe(i,s,o)>=0)return!1;const a=i.x<s.x?i.x<o.x?i.x:o.x:s.x<o.x?s.x:o.x,l=i.y<s.y?i.y<o.y?i.y:o.y:s.y<o.y?s.y:o.y,c=i.x>s.x?i.x>o.x?i.x:o.x:s.x>o.x?s.x:o.x,h=i.y>s.y?i.y>o.y?i.y:o.y:s.y>o.y?s.y:o.y,u=ea(a,l,e,t,n),d=ea(c,h,e,t,n);let f=r.prevZ,g=r.nextZ;for(;f&&f.z>=u&&g&&g.z<=d;){if(f!==r.prev&&f!==r.next&&Si(i.x,i.y,s.x,s.y,o.x,o.y,f.x,f.y)&&Qe(f.prev,f,f.next)>=0||(f=f.prevZ,g!==r.prev&&g!==r.next&&Si(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&Qe(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;f&&f.z>=u;){if(f!==r.prev&&f!==r.next&&Si(i.x,i.y,s.x,s.y,o.x,o.y,f.x,f.y)&&Qe(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;g&&g.z<=d;){if(g!==r.prev&&g!==r.next&&Si(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&Qe(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Tx(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!ks(i,s)&&bh(i,n,n.next,s)&&ur(i,s)&&ur(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),dr(n),dr(n.next),n=r=s),n=n.next}while(n!==r);return Rn(n)}function Ax(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Nx(o,a)){let l=wh(o,a);o=Rn(o,o.next),l=Rn(l,l.next),hr(o,e,t,n,i,s),hr(l,e,t,n,i,s);return}a=a.next}o=o.next}while(o!==r)}function Cx(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=yh(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Fx(c));for(i.sort(Lx),s=0;s<i.length;s++)Rx(i[s],t),t=Rn(t,t.next);return t}function Lx(r,e){return r.x-e.x}function Rx(r,e){if(e=Px(r,e),e){const t=wh(e,r);Rn(e,e.next),Rn(t,t.next)}}function Px(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s){if(s=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===s)return o;const a=o,l=o.x,c=o.y;let h=1/0,u;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&Si(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)&&(u=Math.abs(i-t.y)/(n-t.x),ur(t,r)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Dx(o,t)))&&(o=t,h=u)),t=t.next;while(t!==a);return o}function Dx(r,e){return Qe(r.prev,r,e.prev)<0&&Qe(e.next,r,r.next)<0}function Ix(r,e,t,n){let i=r;do i.z===null&&(i.z=ea(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Bx(i)}function Bx(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function ea(r,e,t,n,i){return r=32767*(r-t)*i,e=32767*(e-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Fx(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Si(r,e,t,n,i,s,o,a){return(i-o)*(e-a)-(r-o)*(s-a)>=0&&(r-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(i-o)*(n-a)>=0}function Nx(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!zx(r,e)&&(ur(r,e)&&ur(e,r)&&Ux(r,e)&&(Qe(r.prev,r,e.prev)||Qe(r,e.prev,e))||ks(r,e)&&Qe(r.prev,r,r.next)>0&&Qe(e.prev,e,e.next)>0)}function Qe(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ks(r,e){return r.x===e.x&&r.y===e.y}function bh(r,e,t,n){const i=is(Qe(r,e,t)),s=is(Qe(r,e,n)),o=is(Qe(t,n,r)),a=is(Qe(t,n,e));return!!(i!==s&&o!==a||i===0&&ns(r,t,e)||s===0&&ns(r,n,e)||o===0&&ns(t,r,n)||a===0&&ns(t,e,n))}function ns(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function is(r){return r>0?1:r<0?-1:0}function zx(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&bh(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function ur(r,e){return Qe(r.prev,r,r.next)<0?Qe(r,e,r.next)>=0&&Qe(r,r.prev,e)>=0:Qe(r,e,r.prev)<0||Qe(r,r.next,e)<0}function Ux(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function wh(r,e){const t=new ta(r.i,r.x,r.y),n=new ta(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function gc(r,e,t,n){const i=new ta(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function dr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ta(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ox(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Cn{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Cn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];xc(e),_c(n,e);let o=e.length;t.forEach(xc);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,_c(n,t[l]);const a=Mx.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function xc(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function _c(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Ui extends $e{constructor(e=new vr([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Je(i,3)),this.setAttribute("uv",new Je(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1;let u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:Hx;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let T,E=!1,b,L,P,v;x&&(T=x.getSpacedPoints(h),E=!0,d=!1,b=x.computeFrenetFrames(h,!1),L=new S,P=new S,v=new S),d||(p=0,f=0,g=0,m=0);const C=a.extractPoints(c);let D=C.shape;const I=C.holes;if(!Cn.isClockWise(D)){D=D.reverse();for(let j=0,$=I.length;j<$;j++){const ne=I[j];Cn.isClockWise(ne)&&(I[j]=ne.reverse())}}const Y=Cn.triangulateShape(D,I),A=D;for(let j=0,$=I.length;j<$;j++){const ne=I[j];D=D.concat(ne)}function z(j,$,ne){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().multiplyScalar(ne).add(j)}const F=D.length,G=Y.length;function W(j,$,ne){let de,ce,Te;const ye=j.x-$.x,xe=j.y-$.y,Ye=ne.x-j.x,je=ne.y-j.y,M=ye*ye+xe*xe,_=ye*je-xe*Ye;if(Math.abs(_)>Number.EPSILON){const H=Math.sqrt(M),Q=Math.sqrt(Ye*Ye+je*je),le=$.x-xe/H,he=$.y+ye/H,ve=ne.x-je/Q,V=ne.y+Ye/Q,Ce=((ve-le)*je-(V-he)*Ye)/(ye*je-xe*Ye);de=le+ye*Ce-j.x,ce=he+xe*Ce-j.y;const Pe=de*de+ce*ce;if(Pe<=2)return new J(de,ce);Te=Math.sqrt(Pe/2)}else{let H=!1;ye>Number.EPSILON?Ye>Number.EPSILON&&(H=!0):ye<-Number.EPSILON?Ye<-Number.EPSILON&&(H=!0):Math.sign(xe)===Math.sign(je)&&(H=!0),H?(de=-xe,ce=ye,Te=Math.sqrt(M)):(de=ye,ce=xe,Te=Math.sqrt(M/2))}return new J(de/Te,ce/Te)}const U=[];for(let j=0,$=A.length,ne=$-1,de=j+1;j<$;j++,ne++,de++)ne===$&&(ne=0),de===$&&(de=0),U[j]=W(A[j],A[ne],A[de]);const k=[];let ee,K=U.concat();for(let j=0,$=I.length;j<$;j++){const ne=I[j];ee=[];for(let de=0,ce=ne.length,Te=ce-1,ye=de+1;de<ce;de++,Te++,ye++)Te===ce&&(Te=0),ye===ce&&(ye=0),ee[de]=W(ne[de],ne[Te],ne[ye]);k.push(ee),K=K.concat(ee)}for(let j=0;j<p;j++){const $=j/p,ne=f*Math.cos($*Math.PI/2),de=g*Math.sin($*Math.PI/2)+m;for(let ce=0,Te=A.length;ce<Te;ce++){const ye=z(A[ce],U[ce],de);Oe(ye.x,ye.y,-ne)}for(let ce=0,Te=I.length;ce<Te;ce++){const ye=I[ce];ee=k[ce];for(let xe=0,Ye=ye.length;xe<Ye;xe++){const je=z(ye[xe],ee[xe],de);Oe(je.x,je.y,-ne)}}}const te=g+m;for(let j=0;j<F;j++){const $=d?z(D[j],K[j],te):D[j];E?(P.copy(b.normals[0]).multiplyScalar($.x),L.copy(b.binormals[0]).multiplyScalar($.y),v.copy(T[0]).add(P).add(L),Oe(v.x,v.y,v.z)):Oe($.x,$.y,0)}for(let j=1;j<=h;j++)for(let $=0;$<F;$++){const ne=d?z(D[$],K[$],te):D[$];E?(P.copy(b.normals[j]).multiplyScalar(ne.x),L.copy(b.binormals[j]).multiplyScalar(ne.y),v.copy(T[j]).add(P).add(L),Oe(v.x,v.y,v.z)):Oe(ne.x,ne.y,u/h*j)}for(let j=p-1;j>=0;j--){const $=j/p,ne=f*Math.cos($*Math.PI/2),de=g*Math.sin($*Math.PI/2)+m;for(let ce=0,Te=A.length;ce<Te;ce++){const ye=z(A[ce],U[ce],de);Oe(ye.x,ye.y,u+ne)}for(let ce=0,Te=I.length;ce<Te;ce++){const ye=I[ce];ee=k[ce];for(let xe=0,Ye=ye.length;xe<Ye;xe++){const je=z(ye[xe],ee[xe],de);E?Oe(je.x,je.y+T[h-1].y,T[h-1].x+ne):Oe(je.x,je.y,u+ne)}}}me(),ge();function me(){const j=i.length/3;if(d){let $=0,ne=F*$;for(let de=0;de<G;de++){const ce=Y[de];we(ce[2]+ne,ce[1]+ne,ce[0]+ne)}$=h+p*2,ne=F*$;for(let de=0;de<G;de++){const ce=Y[de];we(ce[0]+ne,ce[1]+ne,ce[2]+ne)}}else{for(let $=0;$<G;$++){const ne=Y[$];we(ne[2],ne[1],ne[0])}for(let $=0;$<G;$++){const ne=Y[$];we(ne[0]+F*h,ne[1]+F*h,ne[2]+F*h)}}n.addGroup(j,i.length/3-j,0)}function ge(){const j=i.length/3;let $=0;q(A,$),$+=A.length;for(let ne=0,de=I.length;ne<de;ne++){const ce=I[ne];q(ce,$),$+=ce.length}n.addGroup(j,i.length/3-j,1)}function q(j,$){let ne=j.length;for(;--ne>=0;){const de=ne;let ce=ne-1;ce<0&&(ce=j.length-1);for(let Te=0,ye=h+p*2;Te<ye;Te++){const xe=F*Te,Ye=F*(Te+1),je=$+de+xe,M=$+ce+xe,_=$+ce+Ye,H=$+de+Ye;Le(je,M,_,H)}}}function Oe(j,$,ne){l.push(j),l.push($),l.push(ne)}function we(j,$,ne){se(j),se($),se(ne);const de=i.length/3,ce=w.generateTopUV(n,i,de-3,de-2,de-1);Be(ce[0]),Be(ce[1]),Be(ce[2])}function Le(j,$,ne,de){se(j),se($),se(de),se($),se(ne),se(de);const ce=i.length/3,Te=w.generateSideWallUV(n,i,ce-6,ce-3,ce-2,ce-1);Be(Te[0]),Be(Te[1]),Be(Te[3]),Be(Te[1]),Be(Te[2]),Be(Te[3])}function se(j){i.push(l[j*3+0]),i.push(l[j*3+1]),i.push(l[j*3+2])}function Be(j){s.push(j.x),s.push(j.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Gx(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new _h[i.type]().fromJSON(i)),new Ui(n,e.options)}}const Hx={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new J(s,o),new J(a,l),new J(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],m=e[s*3],p=e[s*3+1],x=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new J(o,1-l),new J(c,1-u),new J(d,1-g),new J(m,1-x)]:[new J(a,1-l),new J(h,1-u),new J(f,1-g),new J(p,1-x)]}};function Gx(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Na extends $e{constructor(e=new vr([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Je(i,3)),this.setAttribute("normal",new Je(s,3)),this.setAttribute("uv",new Je(o,2));function c(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const g=d.holes;Cn.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,x=g.length;p<x;p++){const w=g[p];Cn.isClockWise(w)===!0&&(g[p]=w.reverse())}const m=Cn.triangulateShape(f,g);for(let p=0,x=g.length;p<x;p++){const w=g[p];f=f.concat(w)}for(let p=0,x=f.length;p<x;p++){const w=f[p];i.push(w.x,w.y,0),s.push(0,0,1),o.push(w.x,w.y)}for(let p=0,x=m.length;p<x;p++){const w=m[p],T=w[0]+u,E=w[1]+u,b=w[2]+u;n.push(T,E,b),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Vx(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new Na(n,e.curveSegments)}}function Vx(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class kx extends $e{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new S,s=new S;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,f=u.count;for(let g=d,m=d+f;g<m;g+=3)for(let p=0;p<3;p++){const x=a.getX(g+p),w=a.getX(g+(p+1)%3);i.fromBufferAttribute(o,x),s.fromBufferAttribute(o,w),vc(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,u=3*a+(c+1)%3;i.fromBufferAttribute(o,h),s.fromBufferAttribute(o,u),vc(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Je(t,3))}}}function vc(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class Mh extends ht{constructor(e){super(),this.type="ShadowMaterial",this.color=new pe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}Mh.prototype.isShadowMaterial=!0;class Sh extends Ft{constructor(e){super(e),this.type="RawShaderMaterial"}}Sh.prototype.isRawShaderMaterial=!0;class yr extends ht{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}yr.prototype.isMeshStandardMaterial=!0;class Eh extends yr{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}Eh.prototype.isMeshPhysicalMaterial=!0;class Th extends ht{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new pe(16777215),this.specular=new pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ds,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}Th.prototype.isMeshPhongMaterial=!0;class Ah extends ht{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}Ah.prototype.isMeshToonMaterial=!0;class Ch extends ht{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}Ch.prototype.isMeshNormalMaterial=!0;class Lh extends ht{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ds,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}Lh.prototype.isMeshLambertMaterial=!0;class Rh extends ht{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new pe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}Rh.prototype.isMeshMatcapMaterial=!0;class Ph extends zi{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Ph.prototype.isLineDashedMaterial=!0;const Wx={ShadowMaterial:Mh,SpriteMaterial:Hs,RawShaderMaterial:Sh,ShaderMaterial:Ft,PointsMaterial:Ra,MeshPhysicalMaterial:Eh,MeshStandardMaterial:yr,MeshPhongMaterial:Th,MeshToonMaterial:Ah,MeshNormalMaterial:Ch,MeshLambertMaterial:Lh,MeshDepthMaterial:Ea,MeshDistanceMaterial:Ta,MeshBasicMaterial:xr,MeshMatcapMaterial:Rh,LineDashedMaterial:Ph,LineBasicMaterial:zi,Material:ht};ht.fromType=function(r){return new Wx[r]};const Ke={arraySlice:function(r,e,t){return Ke.isTypedArray(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)},convertArray:function(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i},flattenJSON:function(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)},subclip:function(r,e,t,n,i=30){const s=r.clone();s.name=e;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){const g=c.times[f]*i;if(!(g<t||g>=n)){u.push(c.times[f]);for(let m=0;m<h;++m)d.push(c.values[f*h+m])}}u.length!==0&&(c.times=Ke.convertArray(u,c.times.constructor),c.values=Ke.convertArray(d,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(x){return x.name===a.name&&x.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const g=a.times.length-1;let m;if(s<=a.times[0]){const x=h,w=u-h;m=Ke.arraySlice(a.values,x,w)}else if(s>=a.times[g]){const x=g*u+h,w=x+u-h;m=Ke.arraySlice(a.values,x,w)}else{const x=a.createInterpolant(),w=h,T=u-h;x.evaluate(s),m=Ke.arraySlice(x.resultBuffer,w,T)}l==="quaternion"&&new Et().fromArray(m).normalize().conjugate().toArray(m);const p=c.times.length;for(let x=0;x<p;++x){const w=x*f+d;if(l==="quaternion")Et.multiplyQuaternionsFlat(c.values,w,m,0,c.values,w);else{const T=f-d*2;for(let E=0;E<T;++E)c.values[w+E]-=m[E]}}}return r.blendMode=jc,r}};class Pn{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Pn.prototype.beforeStart_=Pn.prototype.copySampleValue_;Pn.prototype.afterEnd_=Pn.prototype.copySampleValue_;class qx extends Pn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bi,endingEnd:bi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case wi:s=e,a=2*t-n;break;case bs:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wi:o=e,l=2*n-t;break;case bs:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),m=g*g,p=m*g,x=-d*p+2*d*m-d*g,w=(1+d)*p+(-1.5-2*d)*m+(-.5+d)*g+1,T=(-1-f)*p+(1.5+f)*m+.5*g,E=f*p-f*m;for(let b=0;b!==a;++b)s[b]=x*o[h+b]+w*o[c+b]+T*o[l+b]+E*o[u+b];return s}}class Dh extends Pn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}}class Xx extends Pn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class tn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ke.convertArray(t,this.TimeBufferType),this.values=Ke.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ke.convertArray(e.times,Array),values:Ke.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Dh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vs:t=this.InterpolantFactoryMethodDiscrete;break;case ys:t=this.InterpolantFactoryMethodLinear;break;case Qs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vs;case this.InterpolantFactoryMethodLinear:return ys;case this.InterpolantFactoryMethodSmooth:return Qs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=Ke.arraySlice(n,s,o),this.values=Ke.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Ke.isTypedArray(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Ke.arraySlice(this.times),t=Ke.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Qs,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const m=t[u+g];if(m!==t[d+g]||m!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Ke.arraySlice(e,0,o),this.values=Ke.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Ke.arraySlice(this.times,0),t=Ke.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=ys;class Oi extends tn{}Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=vs;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ih extends tn{}Ih.prototype.ValueTypeName="color";class Ms extends tn{}Ms.prototype.ValueTypeName="number";class $x extends Pn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Et.slerpFlat(s,0,o,c-a,o,c,l);return s}}class br extends tn{InterpolantFactoryMethodLinear(e){return new $x(this.times,this.values,this.getValueSize(),e)}}br.prototype.ValueTypeName="quaternion";br.prototype.DefaultInterpolation=ys;br.prototype.InterpolantFactoryMethodSmooth=void 0;class Hi extends tn{}Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=vs;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ss extends tn{}Ss.prototype.ValueTypeName="vector";class yc{constructor(e,t=-1,n,i=ga){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Qt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Yx(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(tn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=Ke.getKeyframeOrder(l);l=Ke.sortedArray(l,1,h),c=Ke.sortedArray(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ms(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,m){if(f.length!==0){const p=[],x=[];Ke.flattenJSON(f,p,x,g),p.length!==0&&m.push(new u(d,p,x))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let m=0;m<d[g].morphTargets.length;m++)f[d[g].morphTargets[m]]=-1;for(const m in f){const p=[],x=[];for(let w=0;w!==d[g].morphTargets.length;++w){const T=d[g];p.push(T.time),x.push(T.morphTarget===m?1:0)}i.push(new Ms(".morphTargetInfluence["+m+"]",p,x))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(Ss,f+".position",d,"pos",i),n(br,f+".quaternion",d,"rot",i),n(Ss,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function jx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ms;case"vector":case"vector2":case"vector3":case"vector4":return Ss;case"color":return Ih;case"quaternion":return br;case"bool":case"boolean":return Oi;case"string":return Hi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Yx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=jx(r.type);if(r.times===void 0){const t=[],n=[];Ke.flattenJSON(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Bi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Jx{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Zx=new Jx;class Dn{constructor(e){this.manager=e!==void 0?e:Zx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const ln={};class Kx extends Dn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Bi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ln[e]!==void 0){ln[e].push({onLoad:t,onProgress:n,onError:i});return}ln[e]=[],ln[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ln[e],u=c.body.getReader(),d=c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let m=0;const p=new ReadableStream({start(x){w();function w(){u.read().then(({done:T,value:E})=>{if(T)x.close();else{m+=E.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:f});for(let L=0,P=h.length;L<P;L++){const v=h[L];v.onProgress&&v.onProgress(b)}x.enqueue(E),w()}})}}});return new Response(p)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Bi.add(e,c);const h=ln[e];delete ln[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=ln[e];if(h===void 0)throw this.manager.itemError(e),c;delete ln[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Bh extends Dn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Bi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=cr("img");function l(){h(),Bi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Qx extends Dn{constructor(e){super(e)}load(e,t,n,i){const s=new Ns,o=new Bh(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(h){s.images[c]=h,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class e0 extends Dn{constructor(e){super(e)}load(e,t,n,i){const s=new ct,o=new Bh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class en extends We{constructor(e,t=1){super(),this.type="Light",this.color=new pe(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}en.prototype.isLight=!0;class t0 extends en{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(We.DefaultUp),this.updateMatrix(),this.groundColor=new pe(t)}copy(e){return en.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}t0.prototype.isHemisphereLight=!0;const bc=new _e,wc=new S,Mc=new S;class za{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(wc),Mc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mc),t.updateMatrixWorld(),bc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fh extends za{constructor(){super(new Mt(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=jo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Fh.prototype.isSpotLightShadow=!0;class n0 extends en{constructor(e,t,n=0,i=Math.PI/3,s=0,o=1){super(e,t),this.type="SpotLight",this.position.copy(We.DefaultUp),this.updateMatrix(),this.target=new We,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.shadow=new Fh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}n0.prototype.isSpotLight=!0;const Sc=new _e,Ji=new S,Fo=new S;class Nh extends za{constructor(){super(new Mt(90,1,.5,500)),this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ji.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ji),Fo.copy(n.position),Fo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Fo),n.updateMatrixWorld(),i.makeTranslation(-Ji.x,-Ji.y,-Ji.z),Sc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc)}}Nh.prototype.isPointLightShadow=!0;class i0 extends en{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Nh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}i0.prototype.isPointLight=!0;class zh extends za{constructor(){super(new Us(-5,5,5,-5,.5,500))}}zh.prototype.isDirectionalLightShadow=!0;class Uh extends en{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(We.DefaultUp),this.updateMatrix(),this.target=new We,this.shadow=new zh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Uh.prototype.isDirectionalLight=!0;class Oh extends en{constructor(e,t){super(e,t),this.type="AmbientLight"}}Oh.prototype.isAmbientLight=!0;class r0 extends en{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}r0.prototype.isRectAreaLight=!0;class Hh{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new S)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}Hh.prototype.isSphericalHarmonics3=!0;class Ua extends en{constructor(e=new Hh,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}Ua.prototype.isLightProbe=!0;class s0{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Gh extends $e{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}Gh.prototype.isInstancedBufferGeometry=!0;class o0 extends Dn{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Bi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Bi.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}o0.prototype.isImageBitmapLoader=!0;let rs;const a0={getContext:function(){return rs===void 0&&(rs=new(window.AudioContext||window.webkitAudioContext)),rs},setContext:function(r){rs=r}};class l0 extends Dn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Kx(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const l=a.slice(0);a0.getContext().decodeAudioData(l,function(h){t(h)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}}class c0 extends Ua{constructor(e,t,n=1){super(void 0,n);const i=new pe().set(e),s=new pe().set(t),o=new S(i.r,i.g,i.b),a=new S(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}}c0.prototype.isHemisphereLightProbe=!0;class h0 extends Ua{constructor(e,t=1){super(void 0,t);const n=new pe().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}h0.prototype.isAmbientLightProbe=!0;class u0 extends We{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class d0{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Et.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;Et.multiplyQuaternionsFlat(e,o,e,t,e,n),Et.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Oa="\\[\\]\\.:\\/",f0=new RegExp("["+Oa+"]","g"),Ha="[^"+Oa+"]",p0="[^"+Oa.replace("\\.","")+"]",m0=/((?:WC+[\/:])*)/.source.replace("WC",Ha),g0=/(WCOD+)?/.source.replace("WCOD",p0),x0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ha),_0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ha),v0=new RegExp("^"+m0+g0+x0+_0+"$"),y0=["material","materials","bones"];class b0{constructor(e,t,n){const i=n||ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ke{constructor(e,t,n){this.path=t,this.parsedPath=n||ke.parseTrackName(t),this.node=ke.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ke.Composite(e,t,n):new ke(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(f0,"")}static parseTrackName(e){const t=v0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);y0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=ke.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ke.Composite=b0;ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ke.prototype.GetterByBindingType=[ke.prototype._getValue_direct,ke.prototype._getValue_array,ke.prototype._getValue_arrayElement,ke.prototype._getValue_toArray];ke.prototype.SetterByBindingTypeAndVersioning=[[ke.prototype._setValue_direct,ke.prototype._setValue_direct_setNeedsUpdate,ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_array,ke.prototype._setValue_array_setNeedsUpdate,ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_arrayElement,ke.prototype._setValue_arrayElement_setNeedsUpdate,ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_fromArray,ke.prototype._setValue_fromArray_setNeedsUpdate,ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class w0{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:bi,endingEnd:bi};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=cd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case jc:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case ga:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===hd;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===ld){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=wi,i.endingEnd=wi):(e?i.endingStart=this.zeroSlopeAtStart?wi:bi:i.endingStart=bs,t?i.endingEnd=this.zeroSlopeAtEnd?wi:bi:i.endingEnd=bs)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}class M0 extends Xn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const m=t&&t._propertyBindings[u].binding.parsedPath;g=new d0(ke.create(n,f,m),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Dh(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?yc.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ga),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new w0(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?yc.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}M0.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class na extends _r{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}na.prototype.isInstancedInterleavedBuffer=!0;class S0{constructor(e,t,n=0,i=1/0){this.ray=new Yn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new va,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ia(e,this,n,t),n.sort(Ec),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ia(e[i],this,n,t);return n.sort(Ec),n}}function Ec(r,e){return r.distance-e.distance}function ia(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)ia(i[s],e,t,!0)}}const Sn=new S,ss=new _e,No=new _e;class E0 extends La{constructor(e){const t=Vh(e),n=new $e,i=[],s=[],o=new pe(0,0,1),a=new pe(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new Je(i,3)),n.setAttribute("color",new Je(s,3));const l=new zi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");No.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(ss.multiplyMatrices(No,a.matrixWorld),Sn.setFromMatrixPosition(ss),i.setXYZ(o,Sn.x,Sn.y,Sn.z),ss.multiplyMatrices(No,a.parent.matrixWorld),Sn.setFromMatrixPosition(ss),i.setXYZ(o+1,Sn.x,Sn.y,Sn.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Vh(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,Vh(r.children[t]));return e}class T0 extends La{constructor(e=10,t=10,n=4473924,i=8947848){n=new pe(n),i=new pe(i);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,g=-a;d<=t;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const m=d===s?n:i;m.toArray(c,f),f+=3,m.toArray(c,f),f+=3,m.toArray(c,f),f+=3,m.toArray(c,f),f+=3}const h=new $e;h.setAttribute("position",new Je(l,3)),h.setAttribute("color",new Je(c,3));const u=new zi({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}}const Yt=new Uint32Array(512),Jt=new Uint32Array(512);for(let r=0;r<256;++r){const e=r-127;e<-27?(Yt[r]=0,Yt[r|256]=32768,Jt[r]=24,Jt[r|256]=24):e<-14?(Yt[r]=1024>>-e-14,Yt[r|256]=1024>>-e-14|32768,Jt[r]=-e-1,Jt[r|256]=-e-1):e<=15?(Yt[r]=e+15<<10,Yt[r|256]=e+15<<10|32768,Jt[r]=13,Jt[r|256]=13):e<128?(Yt[r]=31744,Yt[r|256]=64512,Jt[r]=24,Jt[r|256]=24):(Yt[r]=31744,Yt[r|256]=64512,Jt[r]=13,Jt[r|256]=13)}const kh=new Uint32Array(2048),wr=new Uint32Array(64),A0=new Uint32Array(64);for(let r=1;r<1024;++r){let e=r<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,kh[r]=e|t}for(let r=1024;r<2048;++r)kh[r]=939524096+(r-1024<<13);for(let r=1;r<31;++r)wr[r]=r<<23;wr[31]=1199570944;wr[32]=2147483648;for(let r=33;r<63;++r)wr[r]=2147483648+(r-32<<23);wr[63]=3347054592;for(let r=1;r<64;++r)r!==32&&(A0[r]=1024);Nt.create=function(r,e){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(Nt.prototype),r.prototype.constructor=r,r.prototype.getPoint=e,r};Qo.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)};T0.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};E0.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Dn.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),s0.extractUrlBase(r)};Dn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Dt.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};Dt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Dt.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};Dt.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};Dt.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};Jn.prototype.toVector3=function(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")};jn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};zs.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};pt.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};pt.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};pt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};pt.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};pt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};pt.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};_e.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};_e.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};_e.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new S().setFromMatrixColumn(this,3)};_e.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};_e.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};_e.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};_e.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};_e.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};_e.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};_e.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};_e.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};_e.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};_e.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};_e.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};_e.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};_e.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};_e.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};_e.prototype.makeFrustum=function(r,e,t,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,s)};_e.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};un.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};Et.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};Et.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Yn.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};Yn.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};Yn.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};st.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};st.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)};st.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};st.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};st.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};st.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),st.getBarycoord(r,e,t,n,i)};st.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),st.getNormal(r,e,t,n)};vr.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)};vr.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Ui(this,r)};vr.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Na(this,r)};J.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};J.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};J.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};S.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};S.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};S.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};S.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};S.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)};S.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};S.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};S.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};S.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Xe.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};Xe.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};We.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};We.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};We.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)};We.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};We.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(We.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});et.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(et.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),ud},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});dh.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Mt.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)};Object.defineProperties(en.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(ot.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===ws},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(ws)}}});ot.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?ws:lr),this};ot.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},ot.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};$e.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};$e.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new ot(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e)};$e.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)};$e.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};$e.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};$e.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};$e.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties($e.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});_r.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?ws:lr),this};_r.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Ui.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Ui.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Ui.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Aa.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(ht.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new pe}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===Wc}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(Ft.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});qe.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)};qe.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};qe.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};qe.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};qe.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};qe.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};qe.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};qe.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};qe.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};qe.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};qe.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};qe.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};qe.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};qe.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};qe.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};qe.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};qe.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};qe.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};qe.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};qe.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};qe.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};qe.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};qe.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};qe.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};qe.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(qe.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?Ze:Ln}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(ah.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Rt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});u0.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new l0().load(r,function(n){e.setBuffer(n)}),this};wa.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)};wa.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)};$n.crossOrigin=void 0;$n.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new e0;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};$n.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new Qx;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};$n.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};$n.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ma);const C0=Tt("<div></div>"),[Es,L0]=Pt(NaN),[Ts,R0]=Pt(NaN);var P0=r=>(Ps(()=>{let e=Math.floor((sa()+2*Ls()-Rs()*(As()-1)-1)/Cs()+1);L0(e>0?e:NaN);let t=Math.floor((ra()+2*Ls()-Rs()*(As()-1)-1)/Cs()+1);R0(t>0?t:NaN)}),Ue(pa,{get children(){return[Ue(fa,{get children(){return["output.shape = (",Ue(cs,{text:"channels",get value(){return pr()}}),Ue(cs,{text:"height",get value(){return Es()}}),Ue(cs,{text:"width",get value(){return Ts()}}),")"]}}),(()=>{const e=C0.cloneNode(!0);return e.style.setProperty("min-width","550px"),e.style.setProperty("min-height","400px"),e})()]}}));function zo(r,e,t,n){return new S(r/n.width*2-1,-(e/n.height)*2+1,0).unproject(t)}function Tc(r,e,t=void 0){let n=r.clone().project(e),i=n.x+1,s=-(n.y-1);return t!==void 0&&(i*=t.width/2,s*=t.height/2),[i,s]}function Uo(r){const e=r.min,t=r.max;return[new S(e.x,e.y,e.z),new S(e.x,e.y,t.z),new S(t.x,e.y,t.z),new S(t.x,e.y,e.z),new S(e.x,t.y,e.z),new S(e.x,t.y,t.z),new S(t.x,t.y,t.z),new S(t.x,t.y,e.z)]}const os=r=>r*(Math.PI/180),D0=(r,e,t)=>Math.min(Math.max(r,e),t);function Wh(r){let e=[r];for(;e.length>0;){let t=e.shift();try{t.dispose()}catch{}try{e.push(...t.children)}catch{}try{e.push(...t.material)}catch{}try{t.material.map.dispose()}catch{}try{t.material.dispose()}catch{}try{t.geometry.dispose()}catch{}}}function Oo(r,e="#000000",t=64){const n=r.length;let i=document.createElement("canvas");i.height=t,i.width=n*t;var s=i.getContext("2d");return s.fillStyle=e,s.fillRect(0,0,i.width,i.height),r.forEach((o,a)=>{s.fillStyle=o,s.fillRect(a*t+1,1,t-2,t-2)}),new fh(i)}function Ho(r,e,t=24,n=.12,i=[.5,.5]){var s=Math.round(t*1.2),o=document.createElement("canvas"),a=o.getContext("2d");a.font=`Bold ${s}px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace`;var l=a.measureText(r).width;o.width=l,o.height=s;var c=o.getContext("2d");c.fillStyle="rgba(0, 0, 0, 1.0)",c.font=`Bold ${s}px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace`,c.textAlign="center",c.fillText(r,l/2,s/1.2);var h=new ct(o);h.needsUpdate=!0;var u=new Hs({map:h}),d=new uh(u);return d.scale.set(n*l/s,n,1),d.position.set(...e),d.center.set(...i),d}class Kt extends Gn{constructor({width:e=1,height:t=1,channels:n=1,colors:i=["#ffffff"],borderColor:s="#000000",scaleMultiplier:o=1}){if(super(),this.height=0,this.width=0,this.channels=0,this.boxHeight=0,this.boxWidth=0,this.boxDepth=0,this.boxMesh=new et,this.labels=[],[e,t,n].some(L=>!L)){this.visible=!1;return}this.height=t,this.width=e,this.channels=n;const a=t==1?.35:Math.log(t),l=e==1?.35:Math.log(e),c=n==1?.35:Math.log(n),h=Math.max(a,l,c,1.6);this.boxHeight=o*(a/h),this.boxWidth=o*(l/h),this.boxDepth=o*(c/h);const u=new mn(this.boxWidth,this.boxHeight,this.boxDepth),d=i.length,f=32;let g=Oo(i,s,f),m=Oo([i[0]],s,f),p=Oo([i[(this.channels-1)%d]],s,f);g.wrapS=hn,g.wrapT=hn,m.wrapS=hn,m.wrapT=hn,p.wrapS=hn,p.wrapT=hn,g.anisotropy=16,m.anisotropy=16,p.anisotropy=16;let x=[];for(let L=0;L<=6;L++){let P;switch(L){case 0:P=g.clone(),P.repeat.set(this.channels/d,this.height);break;case 1:P=g.clone(),P.center.set(1,-1),P.rotation=Math.PI,P.repeat.set(this.channels/d,this.height);break;case 2:P=g.clone(),P.rotation=Math.PI/2,P.repeat.set(this.channels/d,this.width);break;case 3:P=g.clone(),P.center.set(-1,1),P.rotation=-Math.PI/2,P.repeat.set(this.channels/d,this.width);break;case 4:P=m,P.repeat.set(this.width,this.height);break;case 5:P=p,P.repeat.set(this.width,this.height);break;default:P=m.clone();break}x.push(new yr({map:P}))}this.boxMesh=new et(u,x),this.add(this.boxMesh);const w=.02,T=new et(new mn(this.boxWidth+w,this.boxHeight+w,this.boxDepth+w),new xr({color:s,side:Lt}));T.renderOrder=-1,this.add(T);const E=48,b=.12;this.labels=[Ho(`w = ${this.width}`,[0,-(this.boxHeight/2+.07),this.boxDepth/2],E,b,[0,1]),Ho(`h = ${this.height}`,[this.boxWidth/2+.09,0,this.boxDepth/2],E,b,[0,.5]),Ho(`c = ${this.channels}`,[-(this.boxWidth/2+.05),-(this.boxHeight/2+.05),0],E,b,[1,1])],this.toggleLabels(!1),this.add(...this.labels)}toggleLabels(e){for(let t of this.labels)t.visible=e}assign(e){this.height=e.height,this.width=e.width,this.channels=e.channels,this.boxHeight=e.boxHeight,this.boxWidth=e.boxWidth,this.boxDepth=e.boxDepth,this.boxMesh=e.boxMesh,this.labels=e.labels,Wh(this),this.remove(...this.children),e.children.length>0&&this.add(...e.children)}get depth(){return this.channels}}re.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new J(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};St.line={uniforms:ya.merge([re.common,re.fog,re.line]),vertexShader:`
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
		`};class Ws extends Ft{constructor(e){super({type:"LineMaterial",uniforms:ya.clone(St.line.uniforms),vertexShader:St.line.vertexShader,fragmentShader:St.line.fragmentShader,clipping:!0}),Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return Boolean("USE_DASH"in this.defines)},set(t){Boolean(t)!==Boolean("USE_DASH"in this.defines)&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)},set:function(t){Boolean(t)!==Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}Ws.prototype.isLineMaterial=!0;const Ac=new Dt,as=new S;class fr extends Gh{constructor(){super(),this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Je(e,3)),this.setAttribute("uv",new Je(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new na(t,6,1);return this.setAttribute("instanceStart",new dn(n,3,0)),this.setAttribute("instanceEnd",new dn(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new na(t,6,1);return this.setAttribute("instanceColorStart",new dn(n,3,0)),this.setAttribute("instanceColorEnd",new dn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new kx(e.geometry)),this}fromLineSegments(e){const t=e.geometry;if(t.isGeometry){console.error("THREE.LineSegmentsGeometry no longer supports Geometry. Use THREE.BufferGeometry instead.");return}else t.isBufferGeometry&&this.setPositions(t.attributes.position.array);return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dt);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Ac.setFromBufferAttribute(t),this.boundingBox.union(Ac))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)as.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(as)),as.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(as));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}fr.prototype.isLineSegmentsGeometry=!0;function I0(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new $e;let c=0;for(let h=0;h<r.length;++h){const u=r[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(l.userData.mergedUserData=l.userData.mergedUserData||[],l.userData.mergedUserData.push(u.userData),e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const u=[];for(let d=0;d<r.length;++d){const f=r[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(const h in s){const u=Cc(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let m=0;m<o[h].length;++m)f.push(o[h][m][d]);const g=Cc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Cc(r){let e,t,n,i=0;for(let a=0;a<r.length;++a){const l=r[a];if(l.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=l.array.constructor),e!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=l.itemSize),t!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;i+=l.array.length}const s=new e(i);let o=0;for(let a=0;a<r.length;++a)s.set(r[a].array,o),o+=r[a].array.length;return new ot(s,t,n)}function B0(r,e){let t=new Fa(r/Math.sqrt(2),e/Math.sqrt(2),1,4,1);t.rotateY(Math.PI/4);let n=t.toNonIndexed();return n.computeVertexNormals(),n}function F0({w:r=1,h:e=1,d:t=1,linewidth:n=.002}){let i=new mn(r,e,t),s=new vh(i),o=new fr().fromEdgesGeometry(s),a=[];for(let h=0;h<o.attributes.instanceStart.count;h++)a.push(1,1,1,1,1,1);o.setColors(a);const l=document.getElementById("long");var c=new Ws({color:new pe(0).getHex(),linewidth:n,vertexColors:!0,worldUnits:!1,resolution:new J(l.clientWidth/l.clientHeight,1)});return new et(o,c)}function fs({tensor:r=new Kt({}),wSpan:e=[0,1],hSpan:t=[0,1],cSpan:n=[0,1],padding:i=.03}){const s=r.boxWidth/r.width,o=r.boxHeight/r.height,a=r.boxDepth/r.depth,l=s*(e[1]-e[0]),c=o*(t[1]-t[0]),h=a*(n[1]-n[0]);let u=F0({w:l+i,h:c+i,d:h+i});return u.position.add(new S(-r.boxWidth/2+l/2+e[0]*s,r.boxHeight/2-c/2-t[0]*o,r.boxDepth/2-h/2-n[0]*a)),u}function N0({tensor:r=new Kt({}),wSpan:e=[0,1],hSpan:t=[0,1],cSpan:n=[0,1],padding:i=.03,dilation:s=2}){let o=[];for(let d=e[0];d<e[1];d+=s)for(let f=t[0];f<t[1];f+=s){let g=fs({tensor:r,wSpan:[d,d+1],hSpan:[f,f+1],cSpan:n,padding:i});o.push(g)}let a=I0(o.map(d=>{d.updateMatrixWorld();let f=d.geometry.boundingBox;const g=new S().subVectors(f.max,f.min);return new mn(g.x,g.y,g.z).applyMatrix4(d.matrixWorld)}),!1),l=new fr().fromEdgesGeometry(new vh(a)),c=[];for(let d=0;d<l.attributes.instanceStart.count;d++)c.push(1,1,1,1,1,1);l.setColors(c);const h=document.getElementById("long");var u=new Ws({color:new pe(0).getHex(),linewidth:.002,vertexColors:!0,worldUnits:!1,resolution:new J(h.clientWidth/h.clientHeight,1)});return new et(l,u)}class Lc extends Gn{constructor({inputTensor:e=new Kt({}),outputTensor:t=new Kt({}),kernelSize:n=3,stride:i=2,padding:s=0,dilation:o=1,step:a=0}){super(),this.inputTensor=e,this.outputTensor=t,this.backgroundShape=new et(B0(1,.7),new yr({color:new pe("hsl(0, 100%, 70%)"),side:Lt,depthTest:!1})),this.backgroundShape.scale.multiply(new S(1,1,1.5)),this.backgroundShape.position.add(new S(0,-.2,0)),this.backgroundShape.renderOrder=0,this.add(this.backgroundShape);const l=Math.floor(a/(t.width*t.height)),c=[["#E22030","#00AEAC","#136371","#F2B995"],["#705A5E","#058ED9","#F4EBD9","#A39A92"],["#F2B705","#F2760C","#F29F05","#F2D492"],["#77685D","#F2D492","#F2B705","#F2760C"]];this.weightTensor=new Kt({width:n,height:n,channels:e.channels,colors:c[l%c.length],borderColor:"#1E3A4B",scaleMultiplier:.7}),this.weightTensor.renderOrder=.5,this.add(this.weightTensor);const h=n+(n-1)*(o-1),u=t.width,d=t.height,f=a%u*i,g=Math.floor(a/u)%d*i;o>1?this.inputTensorKernel=N0({tensor:e,wSpan:[f-s,f+h-s],hSpan:[g-s,g+h-s],cSpan:[0,e.channels],dilation:o}):this.inputTensorKernel=fs({tensor:e,wSpan:[f-s,f+h-s],hSpan:[g-s,g+h-s],cSpan:[0,e.channels]}),e.add(this.inputTensorKernel),this.selfTensorKernel=fs({tensor:this.weightTensor,wSpan:[0,this.weightTensor.width],hSpan:[0,this.weightTensor.height],cSpan:[0,this.weightTensor.channels]}),this.weightTensor.add(this.selfTensorKernel);const m=a%t.width,p=Math.floor(a/t.width)%t.height;this.outputTensorKernel=fs({tensor:t,wSpan:[m,m+1],hSpan:[p,p+1],cSpan:[l,l+1]}),t.add(this.outputTensorKernel);let x=new fr().setPositions([]);this.connections=new et(x,new Ws({color:0,linewidth:.005,vertexColors:!0,depthTest:!1}))}update(e,t){let n=Uo(this.selfTensorKernel.geometry.boundingBox),i=Uo(this.inputTensorKernel.geometry.boundingBox),s=Uo(this.outputTensorKernel.geometry.boundingBox);n=n.map(p=>this.selfTensorKernel.localToWorld(p.clone())),i=i.map(p=>this.inputTensorKernel.localToWorld(p.clone())),s=s.map(p=>this.outputTensorKernel.localToWorld(p.clone()));let o=i.slice(0,4),a=n.slice(0,4),l=n.slice(4,8),c=s.slice(4,8),h=(p,x)=>Tc(p,t)[0]-Tc(x,t)[0],u=o.sort(h),d=a.sort(h),f=l.sort(h),g=c.sort(h),m=new fr().setPositions([...f[0].toArray(),...u[0].toArray(),...f[f.length-1].toArray(),...u[u.length-1].toArray(),...d[0].toArray(),...g[0].toArray(),...d[d.length-1].toArray(),...g[g.length-1].toArray()]);e.remove(this.connections),this.connections=new et(m,this.connections.material),this.connections.renderOrder=1,e.add(this.connections)}assign(e){this.connections.parent.remove(this.connections),this.connections.geometry.dispose(),this.inputTensor=e.inputTensor,this.weightTensor=e.weightTensor,this.outputTensor=e.outputTensor,this.inputTensorKernel=e.inputTensorKernel,this.selfTensorKernel=e.selfTensorKernel,this.outputTensorKernel=e.outputTensorKernel,Wh(this),this.remove(...this.children),e.children.length>0&&this.add(...e.children)}}const z0=Tt("<button><div></div></button>"),U0=Tt('<div><label for="timelineControl"><div></div><div>/</div><div></div></label><input type="range" min="0" id="timelineControl"></div>'),[rr,ps]=Pt(0),[yi,Rc]=Pt(1),[ls,O0]=Pt(!1),H0=()=>{const r={"font-weight":"bold","font-family":"Segoe UI Symbol",width:"3ch",height:"3ch","font-size":"18pt",padding:0,border:"1px solid #888","border-radius":"0.5ch"};let e;function t(){O0(!ls()),ls()&&e==null?e=setInterval(()=>ps((rr()+1)%yi()),500):(clearInterval(e),e=void 0)}return(()=>{const n=z0.cloneNode(!0),i=n.firstChild;return n.$$click=t,pn(n,r),nt(i,()=>ls()?"\u01C1":"\u25B6"),Ci(()=>i.style.setProperty("transform",ls()?"scaleX(3)":"scaleX(0.9) scaleY(0.9) translateX(3%) translateY(-5%)")),n})()};var G0=r=>{const e={"font-weight":"bold","font-family":"ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",display:"flex","flex-direction":"row","align-items":"center","font-size":"18pt",margin:"15px"};return Ps(()=>{if([Es(),pr(),Ts()].some(isNaN)){Rc(NaN),ps(0);return}Rc(Es()*pr()*Ts()-1),rr()>yi()&&ps(yi())}),(()=>{const t=U0.cloneNode(!0),n=t.firstChild,i=n.firstChild,s=i.nextSibling,o=s.nextSibling,a=n.nextSibling;return pn(t,e),nt(t,Ue(H0,{}),n),n.style.setProperty("display","flex"),n.style.setProperty("margin","0 1ch"),i.style.setProperty("text-align","right"),nt(i,rr),s.style.setProperty("width","3ch"),nt(o,yi),a.$$input=l=>ps(parseInt(l.currentTarget.value)),a.style.setProperty("width","100%"),Ci(l=>{const c=`${yi().toString().length}ch`,h=yi()||0,u=rr();return c!==l._v$&&i.style.setProperty("width",l._v$=c),h!==l._v$2&&Zi(a,"max",l._v$2=h),u!==l._v$3&&(a.value=l._v$3=u),l},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t})()};Hc(["click","input"]);const V0=Tt("<div></div>"),k0=r=>{const e=Oc({colors:["#FCBF49"],borderColor:"#003049"},r);let t;return Bc(()=>{const s=.3509891512444161,o=new Aa;var a=1;let l=new Us(-a*s,a*s,a,-a,1,1e5);const c=new qe({antialias:!0,alpha:!0});c.setClearColor(0,0),c.setSize(550,1567);var h=c.domElement;t.appendChild(h),l.lookAt(new S(0,0,0));const u=async()=>{const A=t.parentElement.parentElement,z=t.parentElement.parentElement.parentElement.parentElement;if(c.getSize(new J).equals(new J(A.clientWidth,z.clientHeight)))return;let F=A.clientWidth,G=z.clientHeight;console.log(F,G);let W=F/G;l.left=-a*W,l.right=a*W,l.top=a,l.bottom=-a,l.updateProjectionMatrix(),c.setSize(F,G)};let d=new Kt({});o.add(d);let f=new Kt({});o.add(f);let g=new Lc({});g.scale.multiplyScalar(.3),o.add(g);var m=!1,p=0,x=0;function w(A,z,F){if(!!m){A.preventDefault();var G=z-p,W=F-x;p=z,x=F,d.rotation.y=d.rotation.y+os(G),d.rotation.x=D0(d.rotation.x+os(W),-Math.PI/2.01,Math.PI/2.01),g.rotation.set(d.rotation.x,d.rotation.y,d.rotation.z),f.rotation.set(d.rotation.x,d.rotation.y,d.rotation.z)}}document.addEventListener("pointermove",A=>w(A,A.clientX,A.clientY),!1),document.addEventListener("touchmove",A=>w(A,A.touches[0].clientX,A.touches[0].clientY),{passive:!1}),h.addEventListener("pointerdown",A=>{A.preventDefault();const z=A.clientX,F=A.clientY;!L(A,z,F)||(m=!0,p=z,x=F)},!1),document.addEventListener("pointerup",A=>{m=!1}),document.addEventListener("touchend",A=>{m=!1});const T=new S0;let E=[];function b(A,z,F){let G=A.target.getBoundingClientRect();T.setFromCamera({x:(z-G.left)/h.width*2-1,y:-((F-G.top)/h.height)*2+1},l);const W=T.intersectObject(o,!0);let U=[];for(const k of W)k.object instanceof et&&k.object.parent instanceof Kt&&U.push(k.object.parent);for(const k of E)k.toggleLabels(!1);for(const k of U)k.toggleLabels(!0);E=U}function L(A,z,F){let G=A.target.getBoundingClientRect();return T.setFromCamera({x:(z-G.left)/h.width*2-1,y:-((F-G.top)/h.height)*2+1},l),T.intersectObject(o,!0).length>0}h.addEventListener("pointermove",A=>b(A,A.clientX,A.clientY)),h.addEventListener("touchstart",A=>b(A,A.touches[0].clientX,A.touches[0].clientY));const P=new Oh(11184810,1.1);P.position.set(12,18,15),o.add(P);const v=new Uh(16777215,.4);v.position.set(12,18,15),o.add(v);function C(){u(),g.update(o,l),requestAnimationFrame(C),c.render(o,l)}C();let D,I=[os(10),os(25),0];const Z=400,Y=23;D=zo(h.width/2,Z*2+Y*2+Z/2,l,h),f.position.set(D.x,D.y,D.z),f.scale.set(.3,.3,.3),f.rotation.set(...I),D=zo(h.width/2,Z/2,l,h),d.position.set(D.x,D.y,D.z),d.scale.set(.3,.3,.3),d.rotation.set(...I),D=zo(h.width/2,Z+Y+Z/2,l,h),g.position.set(D.x,D.y,D.z),g.rotation.set(...I),Ps(()=>{d.assign(new Kt({...e})),f.assign(new Kt({width:Ts(),height:Es(),channels:pr(),colors:["#aaaacc","#6677aa","#ccddff","#445577"],borderColor:"#223344"})),g.assign(new Lc({inputTensor:d,outputTensor:f,kernelSize:As(),stride:Cs(),padding:Ls(),dilation:Rs(),step:rr()})),g.update(o,l)})}),(()=>{const n=V0.cloneNode(!0),i=t;return typeof i=="function"?i(n):t=n,n.style.setProperty("width","fit-content"),n.style.setProperty("margin","0 auto"),n})()},W0=Tt('<div><div id="long"></div></div>'),[ra,q0]=Pt(16),[sa,X0]=Pt(16),[oa,$0]=Pt(3);var j0=r=>(Bc(()=>{const e=document.getElementById("root");new ResizeObserver(()=>{const t=document.getElementById("App"),n=document.getElementById("long");n.style.height=`${t.clientHeight}px`}).observe(e)}),Ue(pa,{get children(){return[Ue(fa,{get children(){return["input.shape = (",Ue(En,{text:"channels",min:1,max:1024,scaling:"pow2",signal:[oa,$0]}),Ue(En,{text:"height",min:1,max:1024,scaling:"pow2",signal:[sa,X0]}),Ue(En,{text:"width",min:1,max:1024,scaling:"pow2",signal:[ra,q0]}),")"]}}),(()=>{const e=W0.cloneNode(!0),t=e.firstChild;return e.style.setProperty("min-width","550px"),e.style.setProperty("min-height","400px"),t.style.setProperty("position","absolute"),t.style.setProperty("min-width","550px"),nt(t,Ue(k0,{get channels(){return oa()},get height(){return sa()},get width(){return ra()},colors:["#FCBF49","#F77F00","#EAE2B7","#D62828"],borderColor:"#003049"})),e})()]}}));const Y0=Tt("<div></div>"),[pr,J0]=Pt(16),[As,Z0]=Pt(3),[Cs,K0]=Pt(2),[Ls,Q0]=Pt(0),[Rs,e_]=Pt(1);var t_=r=>Ue(pa,{get children(){return[Ue(fa,{get children(){return["Conv2d(",Ue(cs,{text:"input_channels",get value(){return oa()}}),Ue(En,{text:"output_channels",min:1,max:1024,scaling:"pow2",signal:[pr,J0]}),Ue(En,{text:"kernel_size",min:1,max:15,scaling:"linear",signal:[As,Z0]}),Ue(En,{text:"stride",min:1,max:15,scaling:"linear",signal:[Cs,K0]}),Ue(En,{text:"padding",min:0,max:15,scaling:"linear",signal:[Ls,Q0]}),Ue(En,{text:"dilation",min:1,max:15,scaling:"linear",signal:[Rs,e_]}),")"]}}),(()=>{const e=Y0.cloneNode(!0);return e.style.setProperty("min-width","550px"),e.style.setProperty("min-height","400px"),e})()]}});const n_=Tt('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="60" height="50"><g transform="matrix(1.5,0,0,1.25,-15,-6.25)"><rect width="10" height="30" x="25" y="5" fill="#000000"></rect><polygon points="15,30 45,30 30,45" fill="#000000"></polygon></g></svg>');var Pc=()=>{const r={margin:"-15px",position:"relative","z-index":1};return(()=>{const e=n_.cloneNode(!0);return pn(e,r),e})()};const i_=Tt('<div><p>Github repo: <a href="https://github.com/zimonitrome/convolution-shape-calculator">https://github.com/zimonitrome/convolution-shape-calculator</a></p></div>');var r_=r=>(()=>{const e=i_.cloneNode(!0);return e.style.setProperty("padding-left","15px"),e.style.setProperty("margin","0 auto"),e.style.setProperty("width","fit-content"),e})();const s_=Tt('<div id="App"><div></div></div>'),o_=()=>[(()=>{const r=s_.cloneNode(!0),e=r.firstChild;return nt(r,Ue(G0,{}),e),nt(e,Ue(j0,{}),null),nt(e,Ue(Pc,{}),null),nt(e,Ue(t_,{}),null),nt(e,Ue(Pc,{}),null),nt(e,Ue(P0,{}),null),r})(),Ue(r_,{})];cu(()=>Ue(o_,{}),document.getElementById("root"));
