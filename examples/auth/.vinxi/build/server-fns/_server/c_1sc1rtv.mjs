import{createComponent as r,Show as a,ssr as n,ssrHydrationKey as o,escape as s,getRequestEvent as i}from"solid-js/web";import{e as m,f as u}from"./cache.mjs";import{g,a as h}from"./auth.mjs";import{c}from"./createAsync.mjs";import"solid-js/web/storage";import"h3";import"node:async_hooks";import"solid-js";import"@auth/core";import"@auth/core/errors";import"@auth/core/providers/discord";import"@auth/core/providers/credentials";import"zod";var d=["<div",">not logged in</div>"],f=["<main","><h1>Protected Route</h1><h1>hello <!--$-->","<!--/--></h1><!--$-->","<!--/--></main>"],v=["<span",' class="text-xl text-black">',"</span>"];const _=m(u(y,"c_1sc1rtv","$$function0"),"media-user"),w=m(u(R,"c_1sc1rtv","$$function1"),"something"),O=()=>{const e=c(()=>w()),t=c(()=>_(),{deferStream:!0}),p=()=>n(d,o()),$=()=>n(f,o(),s(t().user?.name),s(r(a,{get when(){return e()},children:l=>n(v,o(),s(l()))})));return r(a,{get when(){return t()?.user},get fallback(){return r(p,{})},get children(){return r($,{})}})};async function y(){const e=i();return await g(e.request,h)}async function R(){const e=i();return await new Promise(t=>setTimeout(t,3e3)),e.request.headers.get("user-agent")}export{y as $$function0,R as $$function1,O as default};