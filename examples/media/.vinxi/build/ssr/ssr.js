import{isServer as T,createComponent as w,spread as le,useAssets as Re,ssr as k,escape as N,getRequestEvent as O,delegateEvents as Ge,ssrElement as J,mergeProps as Ye,NoHydration as Se,HydrationScript as Xe,ssrHydrationKey as Y,ssrAttribute as Qe,Hydration as Ze,renderToStream as et}from"solid-js/web";import{createContext as oe,sharedConfig as X,createUniqueId as tt,useContext as Ce,createRenderEffect as Ee,onCleanup as K,getOwner as nt,runWithOwner as rt,createMemo as C,createSignal as _,untrack as ue,on as Ae,startTransition as ot,resetErrorBoundaries as de,createComponent as $e,children as st,createRoot as at,Show as Te,lazy as it,Suspense as ct,ErrorBoundary as lt}from"solid-js";import{provideRequestEvent as ut}from"solid-js/web/storage";import{H3Event as Q,setResponseStatus as dt,sendRedirect as ft,getCookie as ht,setCookie as pt,setHeader as mt,getRequestURL as gt,getRequestIP as yt,getResponseStatus as wt,getResponseStatusText as vt,getResponseHeaders as bt,getResponseHeader as Rt,setResponseHeader as St,appendResponseHeader as Ct,getRequestWebStream as Et,removeResponseHeader as At,eventHandler as $t}from"h3";import{AsyncLocalStorage as Tt}from"node:async_hooks";const Pe=oe(),xe=["title","meta"],Z=[],ee=["name","http-equiv","content","charset","media"].concat(["property"]),W=(e,t)=>{const n=Object.fromEntries(Object.entries(e.props).filter(([r])=>t.includes(r)).sort());return(Object.hasOwn(n,"name")||Object.hasOwn(n,"property"))&&(n.name=n.name||n.property,delete n.property),e.tag+JSON.stringify(n)};function Pt(){if(!X.context){const n=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(n,r=>r.parentNode.removeChild(r))}const e=new Map;function t(n){if(n.ref)return n.ref;let r=document.querySelector(`[data-sm="${n.id}"]`);return r?(r.tagName.toLowerCase()!==n.tag&&(r.parentNode&&r.parentNode.removeChild(r),r=document.createElement(n.tag)),r.removeAttribute("data-sm")):r=document.createElement(n.tag),r}return{addTag(n){if(xe.indexOf(n.tag)!==-1){const a=n.tag==="title"?Z:ee,s=W(n,a);e.has(s)||e.set(s,[]);let i=e.get(s),c=i.length;i=[...i,n],e.set(s,i);let l=t(n);n.ref=l,le(l,n.props);let u=null;for(var r=c-1;r>=0;r--)if(i[r]!=null){u=i[r];break}return l.parentNode!=document.head&&document.head.appendChild(l),u&&u.ref&&document.head.removeChild(u.ref),c}let o=t(n);return n.ref=o,le(o,n.props),o.parentNode!=document.head&&document.head.appendChild(o),-1},removeTag(n,r){const o=n.tag==="title"?Z:ee,a=W(n,o);if(n.ref){const s=e.get(a);if(s){if(n.ref.parentNode){n.ref.parentNode.removeChild(n.ref);for(let i=r-1;i>=0;i--)s[i]!=null&&document.head.appendChild(s[i].ref)}s[r]=null,e.set(a,s)}else n.ref.parentNode&&n.ref.parentNode.removeChild(n.ref)}}}}function xt(){const e=[];return Re(()=>k(Ot(e))),{addTag(t){if(xe.indexOf(t.tag)!==-1){const n=t.tag==="title"?Z:ee,r=W(t,n),o=e.findIndex(a=>a.tag===t.tag&&W(a,n)===r);o!==-1&&e.splice(o,1)}return e.push(t),e.length},removeTag(t,n){}}}const Lt=e=>{const t=T?xt():Pt();return w(Pe.Provider,{value:t,get children(){return e.children}})},Nt=(e,t,n)=>(kt({tag:e,props:t,setting:n,id:tt(),get name(){return t.name||t.property}}),null);function kt(e){const t=Ce(Pe);if(!t)throw new Error("<MetaProvider /> should be in the tree");Ee(()=>{const n=t.addTag(e);K(()=>t.removeTag(e,n))})}function Ot(e){return e.map(t=>{const r=Object.keys(t.props).map(a=>a==="children"?"":` ${a}="${N(t.props[a],!0)}"`).join(""),o=t.props.children;return t.setting?.close?`<${t.tag} data-sm="${t.id}"${r}>${t.setting?.escape?N(o):o||""}</${t.tag}>`:`<${t.tag} data-sm="${t.id}"${r}/>`}).join("")}const qt=e=>Nt("title",e,{escape:!0,close:!0});function Le(){let e=new Set;function t(o){return e.add(o),()=>e.delete(o)}let n=!1;function r(o,a){if(n)return!(n=!1);const s={to:o,options:a,defaultPrevented:!1,preventDefault:()=>s.defaultPrevented=!0};for(const i of e)i.listener({...s,from:i.location,retry:c=>{c&&(n=!0),i.navigate(o,{...a,resolve:!1})}});return!s.defaultPrevented}return{subscribe:t,confirm:r}}let te;function se(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),te=window.history.state._depth}T||se();function Ht(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function _t(e,t){let n=!1;return()=>{const r=te;se();const o=r==null?null:te-r;if(n){n=!1;return}o&&t(o)?(n=!0,window.history.go(-o)):e()}}const It=/^(?:[a-z0-9]+:)?\/\//i,jt=/^\/+|(\/)\/+$/g,Ne="http://sr";function I(e,t=!1){const n=e.replace(jt,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function D(e,t,n){if(It.test(t))return;const r=I(e),o=n&&I(n);let a="";return!o||t.startsWith("/")?a=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?a=r+o:a=o,(a||"/")+I(t,!a)}function Mt(e,t){return I(e).replace(/\/*(\*.*)?$/g,"")+I(t)}function ke(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function Ft(e,t,n){const[r,o]=e.split("/*",2),a=r.split("/").filter(Boolean),s=a.length;return i=>{const c=i.split("/").filter(Boolean),l=c.length-s;if(l<0||l>0&&o===void 0&&!t)return null;const u={path:s?"":"/",params:{}},d=m=>n===void 0?void 0:n[m];for(let m=0;m<s;m++){const v=a[m],f=c[m],h=v[0]===":",g=h?v.slice(1):v;if(h&&V(f,d(g)))u.params[g]=f;else if(h||!V(f,v))return null;u.path+=`/${f}`}if(o){const m=l?c.slice(-l).join("/"):"";if(V(m,d(o)))u.params[o]=m;else return null}return u}}function V(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Ut(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((o,a)=>o+(a.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Oe(e){const t=new Map,n=nt();return new Proxy({},{get(r,o){return t.has(o)||rt(n,()=>t.set(o,C(()=>e()[o]))),t.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function qe(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const o=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)o.push(n+=t[1]),r=r.slice(t[0].length);return qe(r).reduce((a,s)=>[...a,...o.map(i=>i+s)],[])}const Dt=100,Wt=oe(),ae=oe();function Bt(e,t=""){const{component:n,load:r,children:o,info:a}=e,s=!o||Array.isArray(o)&&!o.length,i={key:e,component:n,load:r,info:a};return He(e.path).reduce((c,l)=>{for(const u of qe(l)){const d=Mt(t,u);let m=s?d:d.split("/*",1)[0];m=m.split("/").map(v=>v.startsWith(":")||v.startsWith("*")?v:encodeURIComponent(v)).join("/"),c.push({...i,originalPath:u,pattern:m,matcher:Ft(m,!s,e.matchFilters)})}return c},[])}function Kt(e,t=0){return{routes:e,score:Ut(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let o=e.length-1;o>=0;o--){const a=e[o],s=a.matcher(n);if(!s)return null;r.unshift({...s,route:a})}return r}}}function He(e){return Array.isArray(e)?e:[e]}function _e(e,t="",n=[],r=[]){const o=He(e);for(let a=0,s=o.length;a<s;a++){const i=o[a];if(i&&typeof i=="object"){i.hasOwnProperty("path")||(i.path="");const c=Bt(i,t);for(const l of c){n.push(l);const u=Array.isArray(i.children)&&i.children.length===0;if(i.children&&!u)_e(i.children,l.pattern,n,r);else{const d=Kt([...n],r.length);r.push(d)}n.pop()}}}return n.length?r:r.sort((a,s)=>s.score-a.score)}function Ie(e,t){for(let n=0,r=e.length;n<r;n++){const o=e[n].matcher(t);if(o)return o}return[]}function zt(e,t){const n=new URL(Ne),r=C(c=>{const l=e();try{return new URL(l,n)}catch{return console.error(`Invalid path ${l}`),c}},n,{equals:(c,l)=>c.href===l.href}),o=C(()=>r().pathname),a=C(()=>r().search,!0),s=C(()=>r().hash),i=()=>"";return{get pathname(){return o()},get search(){return a()},get hash(){return s()},get state(){return t()},get key(){return i()},query:Oe(Ae(a,()=>ke(r())))}}let $;function Jt(e,t,n={}){const{signal:[r,o],utils:a={}}=e,s=a.parsePath||(p=>p),i=a.renderPath||(p=>p),c=a.beforeLeave||Le(),l=D("",n.base||"");if(l===void 0)throw new Error(`${l} is not a valid base path`);l&&!r().value&&o({value:l,replace:!0,scroll:!1});const[u,d]=_(!1),m=async p=>{d(!0);try{await ot(p)}finally{d(!1)}},[v,f]=_(r().value),[h,g]=_(r().state),y=zt(v,h),E=[],S=_(T?Ve():[]),P={pattern:l,params:{},path:()=>l,outlet:()=>null,resolvePath(p){return D(l,p)}};return Ee(()=>{const{value:p,state:b}=r();ue(()=>{p!==v()&&m(()=>{$="native",f(p),g(b),de(),S[1]([])}).then(()=>{$=void 0})})}),{base:P,location:y,isRouting:u,renderPath:i,parsePath:s,navigatorFactory:Ke,beforeLeave:c,preloadRoute:Je,submissions:S};function j(p,b,x){ue(()=>{if(typeof b=="number"){b&&(a.go?a.go(b):console.warn("Router integration does not support relative routing"));return}const{replace:M,resolve:z,scroll:A,state:q}={replace:!1,resolve:!0,scroll:!0,...x},L=z?p.resolvePath(b):D("",b);if(L===void 0)throw new Error(`Path '${b}' is not a routable path`);if(E.length>=Dt)throw new Error("Too many redirects");const ce=v();if(L!==ce||q!==h()){if(T){const F=O();F&&(F.response={status:302,headers:new Headers({Location:L})}),o({value:L,replace:M,scroll:A,state:q})}else if(c.confirm(L,x)){const F=E.push({value:ce,replace:M,scroll:A,state:h()});m(()=>{$="navigate",f(L),g(q),de(),S[1]([])}).then(()=>{E.length===F&&($=void 0,ze({value:L,state:q}))})}}})}function Ke(p){return p=p||Ce(ae)||P,(b,x)=>j(p,b,x)}function ze(p){const b=E[0];b&&((p.value!==b.value||p.state!==b.state)&&o({...p,replace:b.replace,scroll:b.scroll}),E.length=0)}function Je(p,b){const x=Ie(t(),p.pathname),M=$;$="preload";for(let z in x){const{route:A,params:q}=x[z];A.component&&A.component.preload&&A.component.preload(),b&&A.load&&A.load({params:q,location:{pathname:p.pathname,search:p.search,hash:p.hash,query:ke(p),state:null,key:""},intent:"preload"})}$=M}function Ve(){const p=O();return p&&p.router&&p.router.submission?[p.router.submission]:[]}}function Vt(e,t,n,r,o){const{base:a,location:s}=e,{pattern:i,component:c,load:l}=r().route,u=C(()=>r().path);c&&c.preload&&c.preload();const d=l?l({params:o,location:s,intent:$||"initial"}):void 0;return{parent:t,pattern:i,path:u,params:o,outlet:()=>c?$e(c,{params:o,location:s,data:d,get children(){return n()}}):n(),resolvePath(v){return D(a.path(),v,u())}}}const je=e=>t=>{const{base:n}=t,r=st(()=>t.children),o=C(()=>_e(t.root?{component:t.root,children:r()}:r(),t.base||"")),a=Jt(e,o,{base:n});return e.create&&e.create(a),w(Wt.Provider,{value:a,get children(){return w(Gt,{routerState:a,get branches(){return o()}})}})};function Gt(e){const t=C(()=>Ie(e.branches,e.routerState.location.pathname));if(T){const s=O();s&&((s.router||(s.router={})).matches||(s.router.matches=t().map(({route:i,path:c,params:l})=>({path:i.originalPath,pattern:i.pattern,match:c,params:l,info:i.info}))))}const n=Oe(()=>{const s=t(),i={};for(let c=0;c<s.length;c++)Object.assign(i,s[c].params);return i}),r=[];let o;const a=C(Ae(t,(s,i,c)=>{let l=i&&s.length===i.length;const u=[];for(let d=0,m=s.length;d<m;d++){const v=i&&i[d],f=s[d];c&&v&&f.route.key===v.route.key?u[d]=c[d]:(l=!1,r[d]&&r[d](),at(h=>{r[d]=h,u[d]=Vt(e.routerState,u[d-1]||e.routerState.base,Yt(()=>a()[d+1]),()=>t()[d],n)}))}return r.splice(s.length).forEach(d=>d()),c&&l?c:(o=u[0],u)}));return w(Te,{get when(){return a()&&o},keyed:!0,children:s=>w(ae.Provider,{value:s,get children(){return s.outlet()}})})}const Yt=e=>()=>w(Te,{get when(){return e()},keyed:!0,children:t=>w(ae.Provider,{value:t,get children(){return t.outlet()}})});function Xt([e,t],n,r){return[n?()=>n(e()):e,r?o=>t(r(o)):t]}function Qt(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function Zt(e){let t=!1;const n=o=>typeof o=="string"?{value:o}:o,r=Xt(_(n(e.get()),{equals:(o,a)=>o.value===a.value}),void 0,o=>(!t&&e.set(o),o));return e.init&&K(e.init((o=e.get())=>{t=!0,r[1](n(o)),t=!1})),je({signal:r,create:e.create,utils:e.utils})}function en(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function tn(e,t){const n=Qt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function nn(e){const t=new URL(e);return t.pathname+t.search}function rn(e){let t;const n={value:e.url||(t=O())&&nn(t.request.url)||""};return je({signal:[()=>n,r=>Object.assign(n,r)]})(e)}const on=new Map;function sn(e=!0,t=!1,n="/_server"){return r=>{const o=r.base.path(),a=r.navigatorFactory(r.base);let s={};function i(f){return f.namespaceURI==="http://www.w3.org/2000/svg"}function c(f){if(f.defaultPrevented||f.button!==0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey)return;const h=f.composedPath().find(j=>j instanceof Node&&j.nodeName.toUpperCase()==="A");if(!h||t&&!h.hasAttribute("link"))return;const g=i(h),y=g?h.href.baseVal:h.href;if((g?h.target.baseVal:h.target)||!y&&!h.hasAttribute("state"))return;const S=(h.getAttribute("rel")||"").split(/\s+/);if(h.hasAttribute("download")||S&&S.includes("external"))return;const P=g?new URL(y,document.baseURI):new URL(y);if(!(P.origin!==window.location.origin||o&&P.pathname&&!P.pathname.toLowerCase().startsWith(o.toLowerCase())))return[h,P]}function l(f){const h=c(f);if(!h)return;const[g,y]=h,E=r.parsePath(y.pathname+y.search+y.hash),S=g.getAttribute("state");f.preventDefault(),a(E,{resolve:!1,replace:g.hasAttribute("replace"),scroll:!g.hasAttribute("noscroll"),state:S&&JSON.parse(S)})}function u(f){const h=c(f);if(!h)return;const[g,y]=h;s[y.pathname]||r.preloadRoute(y,g.getAttribute("preload")!=="false")}function d(f){const h=c(f);if(!h)return;const[g,y]=h;s[y.pathname]||(s[y.pathname]=setTimeout(()=>{r.preloadRoute(y,g.getAttribute("preload")!=="false"),delete s[y.pathname]},200))}function m(f){const h=c(f);if(!h)return;const[,g]=h;s[g.pathname]&&(clearTimeout(s[g.pathname]),delete s[g.pathname])}function v(f){let h=f.submitter&&f.submitter.hasAttribute("formaction")?f.submitter.getAttribute("formaction"):f.target.getAttribute("action");if(!h)return;if(!h.startsWith("https://action/")){const y=new URL(h,Ne);if(h=r.parsePath(y.pathname+y.search),!h.startsWith(n))return}if(f.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const g=on.get(h);if(g){f.preventDefault();const y=new FormData(f.target);f.submitter&&f.submitter.name&&y.append(f.submitter.name,f.submitter.value),g.call(r,y)}}Ge(["click","submit"]),document.addEventListener("click",l),e&&(document.addEventListener("mouseover",d),document.addEventListener("mouseout",m),document.addEventListener("focusin",u),document.addEventListener("touchstart",u)),document.addEventListener("submit",v),K(()=>{document.removeEventListener("click",l),e&&(document.removeEventListener("mouseover",d),document.removeEventListener("mouseout",m),document.removeEventListener("focusin",u),document.removeEventListener("touchstart",u)),document.removeEventListener("submit",v)})}}function an(e){if(T)return rn(e);const t=()=>({value:window.location.pathname+window.location.search+window.location.hash,state:window.history.state}),n=Le();return Zt({get:t,set({value:r,replace:o,scroll:a,state:s}){o?window.history.replaceState(Ht(s),"",r):window.history.pushState(s,"",r),tn(window.location.hash.slice(1),a),se()},init:r=>en(window,"popstate",_t(r,o=>{if(o&&o<0)return!n.confirm(o);{const a=t();return!n.confirm(a.value,{state:a.state})}})),create:sn(e.preload,e.explicitLinks,e.actionBase),utils:{go:r=>window.history.go(r),beforeLeave:n}})(e)}function cn(e){e.forEach(t=>{if(!t.attrs.href)return;let n=document.head.querySelector(`link[href="${t.attrs.href}"]`);n||(n=document.createElement("link"),n.setAttribute("rel","preload"),n.setAttribute("as","style"),n.setAttribute("href",t.attrs.href),document.head.appendChild(n))})}var ln=" ";const un={style:e=>J("style",e.attrs,()=>N(e.children),!0),link:e=>J("link",e.attrs,void 0,!0),script:e=>e.attrs.src?J("script",Ye(()=>e.attrs,{get id(){return e.key}}),()=>k(ln),!0):null};function ne(e){let{tag:t,attrs:{key:n,...r}={key:void 0},children:o}=e;return un[t]({attrs:r,key:n,children:o})}function dn(e,t,n,r="default"){return it(async()=>{{const a=(await e.import())[r],i=(await t.inputs?.[e.src].assets()).filter(l=>l.tag==="style"||l.attrs.rel==="stylesheet");return typeof window<"u"&&cn(i),{default:l=>[...i.map(u=>ne(u)),$e(a,l)]}}})}const H={NORMAL:0,WILDCARD:1,PLACEHOLDER:2};function fn(e={}){const t={options:e,rootNode:Me(),staticRoutesMap:{}},n=r=>e.strictTrailingSlash?r:r.replace(/\/$/,"")||"/";if(e.routes)for(const r in e.routes)fe(t,n(r),e.routes[r]);return{ctx:t,lookup:r=>hn(t,n(r)),insert:(r,o)=>fe(t,n(r),o),remove:r=>pn(t,n(r))}}function hn(e,t){const n=e.staticRoutesMap[t];if(n)return n.data;const r=t.split("/"),o={};let a=!1,s=null,i=e.rootNode,c=null;for(let l=0;l<r.length;l++){const u=r[l];i.wildcardChildNode!==null&&(s=i.wildcardChildNode,c=r.slice(l).join("/"));const d=i.children.get(u);if(d!==void 0)i=d;else if(i=i.placeholderChildNode,i!==null)o[i.paramName]=u,a=!0;else break}return(i===null||i.data===null)&&s!==null&&(i=s,o[i.paramName||"_"]=c,a=!0),i?a?{...i.data,params:a?o:void 0}:i.data:null}function fe(e,t,n){let r=!0;const o=t.split("/");let a=e.rootNode,s=0;for(const i of o){let c;if(c=a.children.get(i))a=c;else{const l=mn(i);c=Me({type:l,parent:a}),a.children.set(i,c),l===H.PLACEHOLDER?(c.paramName=i==="*"?`_${s++}`:i.slice(1),a.placeholderChildNode=c,r=!1):l===H.WILDCARD&&(a.wildcardChildNode=c,c.paramName=i.slice(3)||"_",r=!1),a=c}}return a.data=n,r===!0&&(e.staticRoutesMap[t]=a),a}function pn(e,t){let n=!1;const r=t.split("/");let o=e.rootNode;for(const a of r)if(o=o.children.get(a),!o)return n;if(o.data){const a=r[r.length-1];if(o.data=null,Object.keys(o.children).length===0){const s=o.parent;s.children.delete(a),s.wildcardChildNode=null,s.placeholderChildNode=null}n=!0}return n}function Me(e={}){return{type:e.type||H.NORMAL,parent:e.parent||null,children:new Map,data:e.data||null,paramName:e.paramName||null,wildcardChildNode:null,placeholderChildNode:null}}function mn(e){return e.startsWith("**")?H.WILDCARD:e[0]===":"||e==="*"?H.PLACEHOLDER:H.NORMAL}const Fe=[{$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>import("./index.js"),import:()=>import("./index.js")},path:"/",filePath:"/Users/or/Desktop/mediakit2/examples/media/src/routes/index.tsx"},{$component:{src:"src/routes/page.tsx?pick=default&pick=$css",build:()=>import("./page.js"),import:()=>import("./page.js")},path:"/page",filePath:"/Users/or/Desktop/mediakit2/examples/media/src/routes/page.tsx"}],gn=yn(Fe.filter(e=>e.$component));function yn(e){function t(n,r,o,a){const s=Object.values(n).find(i=>o.startsWith(i.id+"/"));return s?(t(s.children||(s.children=[]),r,o.slice(s.id.length)),n):(n.push({...r,id:o,path:o.replace(/\/\([^)/]+\)/g,"")}),n)}return e.sort((n,r)=>n.path.length-r.path.length).reduce((n,r)=>t(n,r,r.path,r.path),[])}function wn(e,t){const n=bn.lookup(e);if(n){const r=n.route[`$${t}`];return r===void 0?void 0:{handler:r,params:n.params}}}function vn(e){return e.$GET||e.$POST||e.$PUT||e.$PATCH||e.$DELETE}const bn=fn({routes:Fe.reduce((e,t)=>{if(!vn(t))return e;let n=t.path.replace(/\(.*\)\/?/g,"").replace(/\*([^/]*)/g,(r,o)=>`**:${o}`);if(/:[^/]*\?/g.test(n))throw new Error(`Optional parameters are not supported in API routes: ${n}`);if(e[n])throw new Error(`Duplicate API routes for "${n}" found at "${e[n].route.path}" and "${t.path}"`);return e[n]={route:t},e},{})});function Ue(){function e(n){return{...n,...n.$$route?n.$$route.require().route:void 0,info:{...n.$$route?n.$$route.require().route.info:{},filesystem:!0},component:dn(n.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:n.children?n.children.map(e):void 0}}return gn.map(e)}let he;const Rn=()=>T?O().routes:he||(he=Ue());function Sn(e){if(T){const t=O();t.response.status=e.code,t.response.statusText=e.text,K(()=>!t.nativeEvent.handled&&(t.response.status=200))}return null}function Cn(){return w(an,{root:e=>w(Lt,{get children(){return[w(qt,{children:"SolidStart - Basic"}),w(ct,{get children(){return e.children}})]}}),get children(){return w(Rn,{})}})}function En(e){return w(lt,{get fallback(){return w(Sn,{code:500})},get children(){return e.children}})}var An=["<script",">","<\/script>"],$n=["<script",' type="module" async',"><\/script>"];const Tn=k("<!DOCTYPE html>");function De(e,t,n=[]){for(let r=0;r<t.length;r++){const o=t[r];if(o.path!==e[0].path)continue;let a=[...n,o];if(o.children){const s=e.slice(1);if(s.length===0||(a=De(s,o.children,a),!a))continue}return a}}function Pn(e){const t=O();let n=[];return Promise.resolve().then(async()=>{if(t.router&&t.router.matches){const r=[...t.router.matches];for(;r.length&&(!r[0].info||!r[0].info.filesystem);)r.shift();const o=r.length&&De(r,t.routes);if(o)for(let a=0;a<o.length;a++){const s=o[a],c=await globalThis.MANIFEST.client.inputs[s.$component.src].assets();n.push.apply(n,c)}else console.warn("No route matched for preloading js assets")}n=[...new Map(n.map(r=>[r.attrs.key,r])).values()].filter(r=>r.attrs.rel==="modulepreload"&&!t.assets.find(o=>o.attrs.key===r.attrs.key))}),Re(()=>n.length?n.map(r=>ne(r)):void 0),w(Se,{get children(){return[Tn,w(e.document,{get assets(){return[w(Xe,{}),t.assets.map(r=>ne(r))]},get scripts(){return[k(An,Y(),`window.manifest = ${JSON.stringify(t.manifest)}`),k($n,Y(),Qe("src",N(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path,!0),!1))]},get children(){return w(Ze,{get children(){return w(En,{get children(){return w(Cn,{})}})}})}})]}})}function xn(e={}){let t,n=!1;const r=s=>{if(t&&t!==s)throw new Error("Context conflict")};let o;if(e.asyncContext){const s=e.AsyncLocalStorage||globalThis.AsyncLocalStorage;s?o=new s:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const a=()=>{if(o&&t===void 0){const s=o.getStore();if(s!==void 0)return s}return t};return{use:()=>{const s=a();if(s===void 0)throw new Error("Context is not available");return s},tryUse:()=>a(),set:(s,i)=>{i||r(s),t=s,n=!0},unset:()=>{t=void 0,n=!1},call:(s,i)=>{r(s),t=s;try{return o?o.run(s,i):i()}finally{n||(t=void 0)}},async callAsync(s,i){t=s;const c=()=>{t=s},l=()=>t===s?c:void 0;ge.add(l);try{const u=o?o.run(s,i):i();return n||(t=void 0),await u}finally{ge.delete(l)}}}}function Ln(e={}){const t={};return{get(n,r={}){return t[n]||(t[n]=xn({...e,...r})),t[n],t[n]}}}const B=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},pe="__unctx__",Nn=B[pe]||(B[pe]=Ln()),kn=(e,t={})=>Nn.get(e,t),me="__unctx_async_handlers__",ge=B[me]||(B[me]=new Set);function On(e){let t;const n=We(e),r={duplex:"half",method:e.method,headers:e.headers};return e.node.req.body instanceof ArrayBuffer?new Request(n,{...r,body:e.node.req.body}):new Request(n,{...r,get body(){return t||(t=Kn(e),t)}})}function qn(e){return e.web??={request:On(e),url:We(e)},e.web.request}function Hn(){return Vn()}const ie=Symbol("$HTTPEvent");function _n(e){return typeof e=="object"&&(e instanceof Q||e?.[ie]instanceof Q||e?.__is_event__===!0)}function R(e){return function(...t){let n=t[0];if(_n(n))t[0]=n instanceof Q||n.__is_event__?n:n[ie];else{if(!globalThis.app.config.server.experimental?.asyncContext)throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");if(n=Hn(),!n)throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");t.unshift(n)}return e(...t)}}const We=R(gt),In=R(yt),re=R(dt),ye=R(wt),jn=R(vt),U=R(bt),we=R(Rt),Mn=R(St),Fn=R(Ct),Un=R(ft),Dn=R(ht),Wn=R(pt),Bn=R(mt),Kn=R(Et),zn=R(At);function Jn(){return kn("nitro-app",{asyncContext:!!globalThis.app.config.server.experimental?.asyncContext,AsyncLocalStorage:Tt})}function Vn(){return Jn().use().event}const G=Symbol("fetchEvent");function Gn(e){return{request:qn(e),response:Qn(e),clientAddress:In(e),locals:{},nativeEvent:e,[ie]:e}}function Yn(e){if(!e[G]){const t=Gn(e);e[G]=t}return e[G]}class Xn{constructor(t){this.event=t}get(t){const n=we(this.event,t);return Array.isArray(n)?n.join(", "):n}has(t){return this.get(t)!==void 0}set(t,n){return Mn(this.event,t,n)}delete(t){return zn(this.event,t)}append(t,n){Fn(this.event,t,n)}getSetCookie(){const t=we(this.event,"Set-Cookie");return Array.isArray(t)?t:[t]}forEach(t){return Object.entries(U(this.event)).forEach(([n,r])=>t(Array.isArray(r)?r.join(", "):r,n,this))}entries(){return Object.entries(U(this.event)).map(([t,n])=>[t,Array.isArray(n)?n.join(", "):n])[Symbol.iterator]()}keys(){return Object.keys(U(this.event))[Symbol.iterator]()}values(){return Object.values(U(this.event)).map(t=>Array.isArray(t)?t.join(", "):t)[Symbol.iterator]()}[Symbol.iterator](){return this.entries()[Symbol.iterator]()}}function Qn(e){return{get status(){return ye(e)},set status(t){re(e,t)},get statusText(){return jn(e)},set statusText(t){re(e,ye(),t)},headers:new Xn(e)}}function Zn(e){const t=Dn(e,"flash");if(!t)return;let n=JSON.parse(t);if(!n||!n.result)return[];const r=[...n.input.slice(0,-1),new Map(n.input[n.input.length-1])];return Wn(e,"flash","",{maxAge:0}),{url:n.url,result:n.error?new Error(n.result):n.result,input:r}}async function Be(e){const t=globalThis.MANIFEST.client;return globalThis.MANIFEST.ssr,e.response.headers.set("Cache-Control","no-cache"),Object.assign(e,{manifest:await t.json(),assets:[...await t.inputs[t.handler].assets()],router:{submission:Zn(e)},routes:Ue(),$islands:new Set})}function er(e,t={}){return $t({onRequest:t.onRequest,onBeforeResponse:t.onBeforeResponse,handler:n=>{const r=Yn(n);return ut(r,async()=>{const o=wn(new URL(r.request.url).pathname,r.request.method);if(o){const d=(await o.handler.import())[r.request.method];r.params=o.params,X.context={event:r};const m=await d(r);if(m!==void 0)return m;if(r.request.method!=="GET")throw new Error(`API handler for ${r.request.method} "${r.request.url}" did not return a response.`)}const a=await Be(r);let s={...t};if(s.onCompleteAll){const u=s.onCompleteAll;s.onCompleteAll=d=>{be(a)(d),u(d)}}else s.onCompleteAll=be(a);if(s.onCompleteShell){const u=s.onCompleteShell;s.onCompleteShell=d=>{ve(a,n)(),u(d)}}else s.onCompleteShell=ve(a,n);const i=et(()=>(X.context.event=a,e(a)),s);if(a.response&&a.response.headers.get("Location"))return Un(r,a.response.headers.get("Location"));const{writable:c,readable:l}=new TransformStream;return i.pipeTo(c),l})}})}function ve(e,t){return()=>{e.response&&e.response.headers.get("Location")&&(re(t,302),Bn(t,"Location",e.response.headers.get("Location")))}}function be(e){return({write:t})=>{const n=e.response&&e.response.headers.get("Location");n&&t(`<script>window.location="${n}"<\/script>`)}}function tr(e,t={}){return er(e,{...t,createPageEvent:Be})}var nr=['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.ico">',"</head>"],rr=["<html",' lang="en">','<body><div id="app">',"</div><!--$-->","<!--/--></body></html>"];const lr=tr(()=>w(Pn,{document:({assets:e,children:t,scripts:n})=>k(rr,Y(),w(Se,{get children(){return k(nr,N(e))}}),N(t),N(n))}));export{lr as default};