import{e as o,f as r}from"./cache.mjs";import{g as i,a as s}from"./auth.mjs";import{getRequestEvent as n}from"solid-js/web";import{r as m}from"./response.mjs";import"solid-js/web/storage";import"h3";import"node:async_hooks";import"solid-js";import"@auth/core";import"@auth/core/errors";import"@auth/core/providers/discord";import"@auth/core/providers/credentials";import"zod";const c=o(r(p,"c_ymyeph","$$function0"),"user"),a=o(r(u,"c_ymyeph","$$function1"),"something"),x={load:()=>[c(),a()]};async function p(){const e=n(),t=await i(e.request,s);if(!t)throw m("/");return t}async function u(){const e=n();return await new Promise(t=>setTimeout(t,3e3)),e.request.headers.get("user-agent")}export{p as $$function0,u as $$function1,x as route};