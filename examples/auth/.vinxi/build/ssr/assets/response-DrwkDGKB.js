function o(r,s=302){let e,t;typeof s=="number"?e={status:s}:({revalidate:t,...e}=s,typeof e.status>"u"&&(e.status=302));const n=new Headers(e.headers);return n.set("Location",r),t&&n.set("X-Revalidate",t.toString()),new Response(null,{...e,headers:n})}export{o as r};
