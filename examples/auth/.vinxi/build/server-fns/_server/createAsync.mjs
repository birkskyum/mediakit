import{createResource as u,untrack as l,sharedConfig as i}from"solid-js";import{isServer as w}from"solid-js/web";function h(r,n){let e,c=()=>!e||e.state==="unresolved"?void 0:e.latest;[e]=u(()=>f(r,l(c)),s=>s,n);const a=()=>e();return Object.defineProperty(a,"latest",{get(){return e.latest}}),a}class t{static all(){return new t}static allSettled(){return new t}static any(){return new t}static race(){return new t}static reject(){return new t}static resolve(){return new t}catch(){return new t}then(){return new t}finally(){return new t}}function f(r,n){if(w||!i.context)return r(n);const e=fetch,c=Promise;try{return window.fetch=()=>new t,Promise=t,r(n)}finally{window.fetch=e,Promise=c}}export{h as c};