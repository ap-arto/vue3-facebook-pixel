(function(t,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],i):(t=typeof globalThis<"u"?globalThis:t||self,i(t.Fbq={},t.Vue))})(this,function(t,i){"use strict";const r=Symbol("VueAnalyticsFbqKey"),b=["AddPaymentInfo","AddToCart","AddToWishlist","CompleteRegistration","Contact","CustomizeProduct","Donate","FindLocation","InitiateCheckout","Lead","PageView","Purchase","Schedule","Search","StartTrial","SubmitApplication","Subscribe","ViewContent"],u="[Vue fbq]: ",n={debug:!1,excludes:[]},s=()=>{n.debug&&console.warn(u+"Plugin injection failed!")},g={init:()=>s,event:()=>s,query:()=>s},d=()=>typeof window.fbq>"u"?(n.debug&&console.warn(u+'"window.fbq" is not defined!'),!1):!0,p=(e,o={})=>{d()&&(n.debug&&console.log(`${u}Initializing app ${e}`),c("init",e,o))},q=(e,o={})=>{d()&&(n.debug&&(console.groupCollapsed(`${u}Track event "${e}"`),console.log(`With data: ${o}`),console.groupEnd()),b.indexOf(e)===-1?c("trackCustom",e,o):c("track",e,o))},c=(...e)=>{d()&&(n.debug&&(console.groupCollapsed(u+"Raw query"),console.log("With data: ",...e),console.groupEnd()),window.fbq(...e))},y=(e,o)=>{const{router:f,debug:x,excludes:v}=o;n.excludes=v||n.excludes,n.debug=x;const l={init:p,event:q,query:c};if(f&&typeof f.afterEach=="function"){const{excludes:a}=n;f.afterEach(({name:C})=>{a&&a.indexOf(C)!==-1||l.event("PageView")})}e.provide(r,l)};function h(){return i.inject(r,g)}const w={install:y};t.VueFbq=w,t.useFbq=h,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});