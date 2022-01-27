import{u as V,r as m,o as r,c as d,a as e,b as c,w as l,d as u,t as v,p as g,e as $,T as R,F as y,f as I,g as j,S as z,N as G,P as M,A as P,h as O,i as B,j as F,k as T,l as U,m as q}from"./vendor.1a597ed1.js";const Y=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}};Y();var D="/assets/logo.328b57d6.png";var p=(t,i)=>{const o=t.__vccOpts||t;for(const[n,s]of i)o[n]=s;return o};const w=t=>(g("data-v-0c1e7fcf"),t=t(),$(),t),W={id:"frame"},J={id:"label"},K={id:"menu"},X=["placeholder"],Z=w(()=>e("span",{id:"menu_icon",class:"icon"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512",class:"icon"},[e("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"})])],-1)),Q=w(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},[e("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e("path",{d:"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"})],-1)),ee=[Q],te=w(()=>e("div",{class:"menu-mask"},null,-1)),se={setup(t){const{locale:i}=V();function o(){localStorage.getItem("lang")=="en-US"?(localStorage.setItem("lang","zh-CN"),i.value="zh-CN"):(localStorage.setItem("lang","en-US"),i.value="en-US")}return(n,s)=>{const a=m("router-link");return r(),d("div",W,[e("span",J,[e("img",{id:"logo",src:D,alt:"",onClick:s[0]||(s[0]=h=>n.$router.push({name:"Index"}))})]),e("span",K,[c(a,{id:"home_tab",class:"tab",to:"/"},{default:l(()=>[u(v(n.$t("header.home")),1)]),_:1}),c(a,{id:"about_tab",class:"tab",to:"/about"},{default:l(()=>[u(v(n.$t("header.about")),1)]),_:1}),c(a,{id:"news_tab",class:"tab",to:"/news"},{default:l(()=>[u(v(n.$t("header.news")),1)]),_:1}),c(a,{id:"gallery_tab",class:"tab",to:"/gallery"},{default:l(()=>[u(v(n.$t("header.gallery")),1)]),_:1}),e("input",{id:"search_bar",placeholder:n.$t("common.search")},null,8,X),Z,e("span",{id:"translate_icon",class:"icon",onClick:o},ee)]),te])}}};var f=p(se,[["__scopeId","data-v-0c1e7fcf"]]);const oe={props:["ICP","copyright","address","contact"]},ae={style:{border:"none"}},ne={style:{border:"none"}};function ie(t,i,o,n,s,a){return r(),d("footer",null,[e("div",null,[e("span",null,v(o.ICP),1),e("span",ae,v(o.copyright),1)]),e("div",null,[e("span",null,v(o.address),1),e("span",ne,v(o.contact),1)])])}var b=p(oe,[["render",ie],["__scopeId","data-v-6e7cec10"]]);const ce={setup(t){var i=window.navigator.userLanguage||window.navigator.language;return localStorage.setItem("lang",i),(o,n)=>{const s=m("router-view");return r(),d(y,null,[c(f),c(R,{name:"fade"},{default:l(()=>[c(s)]),_:1}),c(b,{ICP:"\u4EACICP\u590713051651\u53F7 - 1",copyright:"\u5317\u4EAC\u4E2D\u5B66\u7248\u6743\u6240\u6709 \xA9 2014 BJZX All Rights Reserved.",address:"\u5730\u5740\uFF1A\u5317\u4EAC\u5E02\u671D\u9633\u533A\u897F\u575D\u6CB3\u4E1C\u91CC1\u53F7",contact:"\u8054\u7CFB\u7535\u8BDD\uFF1A 010-50981098\uFF08\u897F\u575D\u6CB3\u6821\u533A\uFF09 010-50951290\uFF08\u4E1C\u575D\u5357\u6821\u533A\uFF09"})],64)}}};var re="/assets/Rocket.5301b9b4.mp4",de="/assets/cherry.cf22968d.png";const _e={},_=t=>(g("data-v-4405eae7"),t=t(),$(),t),le={id:"bg"},ue={id:"bg_cover"},pe={id:"container",class:"main"},ve=_(()=>e("div",{id:"video"},[e("video",{controls:""},[e("source",{src:re,type:"video/mp4"}),u("Your browser does not support the video tag. ")])],-1)),he={id:"information"},me=_(()=>e("div",{id:"about_title"},"\u8FD9\u91CC\u662F\u5317\u4EAC\u4E2D\u5B66\u56FD\u9645\u90E8",-1)),fe=_(()=>e("div",{class:"about_text"},"\u5317\u4EAC\u4E2D\u5B66\uFF0C\u4E0E\u9996\u90FD\u540C\u540D\u30022013\u5E74\uFF0C\u7ECF\u5317\u4EAC\u5E02\u653F\u5E9C\u6279\u51C6\u3001\u7531\u671D\u9633\u533A\u653F\u5E9C\u4E3B\u529E\u7684\u5317\u4EAC\u4E2D\u5B66\u6B63\u5F0F\u5EFA\u6821\uFF0C\u5907\u53D7\u793E\u4F1A\u5404\u754C\u5173\u6CE8\u3002",-1)),ge=_(()=>e("div",{class:"about_text"},"2017\u5E74\uFF0C\u4E3A\u4E86\u6EE1\u8DB3\u90E8\u5206\u5B66\u751F\u548C\u5BB6\u957F\u7684\u591A\u5143\u5316\u5347\u5B66\u9700\u6C42\uFF0C\u642D\u5EFA\u6210\u957F\u7684\u7ACB\u4EA4\u6865\uFF0C\u5317\u4EAC\u4E2D\u5B66\u7EC4\u5EFA\u56FD\u9645\u65B9\u5411\u73ED\u7EA7\u3002\u5B66\u6821\u575A\u6301\u4E2D\u56FD\u7ACB\u573A\u3001\u5F00\u653E\u591A\u5143\u3001\u878D\u5408\u521B\u65B0\uFF0C\u57FA\u4E8E\u8BFE\u7A0B\u6539\u9769\u7279\u8272\u5B9E\u8DF5\uFF0C\u548C\u7F8E\u56FD\u683C\u4F26\u7F57\u514B\u9AD8\u4E2D\u5171\u540C\u5F00\u53D1\u4E86\u56FD\u9645\u6559\u80B2\u4F53\u7CFB\u8BFE\u7A0B\u3001\u5305\u62EC\u9AD8\u4E2D\u57FA\u7840\u8BFE\u7A0B\u3001AP\u8BFE\u7A0B\u3001\u7279\u8272\u9009\u4FEE\u8BFE\u7A0B\uFF0C\u6EE1\u8DB3\u5B66\u751F\u4E2A\u6027\u5316\u53D1\u5C55\u9700\u6C42\u3002",-1)),$e=I('<div id="principle" class="main" data-v-4405eae7><div id="principle_speech" data-v-4405eae7><div id="left" data-v-4405eae7>\u201C</div><div id="text" data-v-4405eae7>STH FROM OUR DEAR CHERRY</div><div id="right" data-v-4405eae7>\u201D</div><div id="principle_info" data-v-4405eae7>\u2014\u2014\u5468\u6167 \u5317\u4EAC\u4E2D\u5B66\u56FD\u9645\u90E8\u6821\u957F</div></div><img class="pic" src="'+de+'" alt="Cherry" data-v-4405eae7></div>',1),be={id:"school_info_container"},ye=_(()=>e("div",{id:"school_info_title",class:"main"},"\u4E86\u89E3\u5317\u4EAC\u4E2D\u5B66\u56FD\u9645\u90E8",-1)),we={id:"school_info",class:"main"},xe={id:"idea",class:"info"},Ie={class:"cover"},Se={class:"info_container"},He=_(()=>e("div",{class:"info_title"},"\u7406\u5FF5",-1)),Ne={class:"info_text"},Ae=u(" 2017\u5E74\uFF0C\u4E3A\u4E86\u6EE1\u8DB3\u90E8\u5206\u5B66\u751F\u548C\u5BB6\u957F\u7684\u591A\u5143\u5316\u5347\u5B66\u9700\u6C42\uFF0C\u642D\u5EFA\u6210\u957F\u7684\u7ACB\u4EA4\u6865\uFF0C\u5317\u4EAC\u4E2D\u5B66\u7EC4\u5EFA\u56FD\u9645\u65B9\u5411\u73ED\u7EA7\u3002\u5B66\u6821\u575A\u6301\u4E2D\u56FD\u7ACB\u573A\u3001\u5F00\u653E\u591A\u5143\u3001\u878D\u5408\u521B\u65B0\u3002 "),Le=_(()=>e("br",null,null,-1)),ke=_(()=>e("br",null,null,-1)),Ee=u("\u4E86\u89E3\u66F4\u591A"),Ce={id:"environment",class:"info"},Ve={class:"cover"},Re={class:"info_container"},je=_(()=>e("div",{class:"info_title"},"\u73AF\u5883",-1)),ze={class:"info_text"},Ge=u(" 2017\u5E74\uFF0C\u4E3A\u4E86\u6EE1\u8DB3\u90E8\u5206\u5B66\u751F\u548C\u5BB6\u957F\u7684\u591A\u5143\u5316\u5347\u5B66\u9700\u6C42\uFF0C\u642D\u5EFA\u6210\u957F\u7684\u7ACB\u4EA4\u6865\uFF0C\u5317\u4EAC\u4E2D\u5B66\u7EC4\u5EFA\u56FD\u9645\u65B9\u5411\u73ED\u7EA7\u3002\u5B66\u6821\u575A\u6301\u4E2D\u56FD\u7ACB\u573A\u3001\u5F00\u653E\u591A\u5143\u3001\u878D\u5408\u521B\u65B0\u3002 "),Me=_(()=>e("br",null,null,-1)),Pe=_(()=>e("br",null,null,-1)),Oe=u("\u4E86\u89E3\u66F4\u591A"),Be={id:"faculty",class:"info"},Fe={class:"cover"},Te={class:"info_container"},Ue=_(()=>e("div",{class:"info_title"},"\u5E08\u8D44",-1)),qe={class:"info_text"},Ye=u(" 2017\u5E74\uFF0C\u4E3A\u4E86\u6EE1\u8DB3\u90E8\u5206\u5B66\u751F\u548C\u5BB6\u957F\u7684\u591A\u5143\u5316\u5347\u5B66\u9700\u6C42\uFF0C\u642D\u5EFA\u6210\u957F\u7684\u7ACB\u4EA4\u6865\uFF0C\u5317\u4EAC\u4E2D\u5B66\u7EC4\u5EFA\u56FD\u9645\u65B9\u5411\u73ED\u7EA7\u3002\u5B66\u6821\u575A\u6301\u4E2D\u56FD\u7ACB\u573A\u3001\u5F00\u653E\u591A\u5143\u3001\u878D\u5408\u521B\u65B0\u3002 "),De=_(()=>e("br",null,null,-1)),We=_(()=>e("br",null,null,-1)),Je=u("\u4E86\u89E3\u66F4\u591A");function Ke(t,i){const o=m("router-link");return r(),d(y,null,[e("div",le,[e("div",ue,[e("div",pe,[ve,e("div",he,[me,fe,ge,c(o,{class:"link",to:"/about"},{default:l(()=>[u(v(t.$t("common.readMore")),1)]),_:1})])])])]),$e,e("div",be,[ye,e("div",we,[e("div",xe,[e("div",Ie,[e("div",Se,[He,e("div",Ne,[Ae,Le,ke,c(o,{class:"link",to:"/about"},{default:l(()=>[Ee]),_:1})])])])]),e("div",Ce,[e("div",Ve,[e("div",Re,[je,e("div",ze,[Ge,Me,Pe,c(o,{class:"link",to:"/about"},{default:l(()=>[Oe]),_:1})])])])]),e("div",Be,[e("div",Fe,[e("div",Te,[Ue,e("div",qe,[Ye,De,We,c(o,{class:"link",to:"/about"},{default:l(()=>[Je]),_:1})])])])])])])],64)}var S=p(_e,[["render",Ke],["__scopeId","data-v-4405eae7"]]),H="/assets/main.085d8efb.jpg";const Xe={class:"main"},Ze=I('<h1 class="title" data-v-aeff2fdc>N<span style="color:brown;" data-v-aeff2fdc>E</span>WS</h1><div class="box" data-v-aeff2fdc><img alt="" src="'+H+'" data-v-aeff2fdc><div class="content" data-v-aeff2fdc><h2 class="n-title" data-v-aeff2fdc>TITLE</h2><p class="n-note" data-v-aeff2fdc> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></div></div>',2),Qe=[Ze],et={setup(t){return(i,o)=>(r(),d("div",Xe,Qe))}};var tt=p(et,[["__scopeId","data-v-aeff2fdc"]]);const st=t=>(g("data-v-8d7dfea2"),t=t(),$(),t),ot={class:"bg"},at={class:"main"},nt=st(()=>e("h1",{class:"title"},"GALLERY",-1)),it={class:"grid"},ct=["src"],rt={props:{images:Array},setup(t){return(i,o)=>(r(),d("div",ot,[e("div",at,[nt,e("div",it,[(r(!0),d(y,null,j(t.images,n=>(r(),d("img",{src:n,alt:"",class:"item"},null,8,ct))),256))])])]))}};var N=p(rt,[["__scopeId","data-v-8d7dfea2"]]);var dt="/assets/main2.968903f7.jpg",_t="/assets/main3.9d63d882.jpg";z.use([G,M,P]);const lt={components:{HeaderVue:f,HomeAboutVue:S,HomeNewsVue:tt,HomeGalleryVue:N,HomeAbout:S,HomeGallery:N,Swiper:O,SwiperSlide:B},data(){return{title:"\u6B22\u8FCE\u6765\u5230\u5317\u4EAC\u4E2D\u5B66\u56FD\u9645\u90E8"}}},x=t=>(g("data-v-ceac7982"),t=t(),$(),t),ut={id:"head"},pt=x(()=>e("img",{src:H,alt:"main1"},null,-1)),vt=x(()=>e("img",{src:dt,alt:"main2"},null,-1)),ht=x(()=>e("img",{src:_t,alt:"main3"},null,-1));function mt(t,i,o,n,s,a){const h=m("swiper-slide"),L=m("swiper"),k=m("HomeAbout"),E=m("HomeNewsVue"),C=m("HomeGallery");return r(),d("div",null,[e("div",ut,[c(L,{navigation:!0,pagination:{clickable:!0},loop:!0,autoplay:{delay:4e3},class:"mySwiper"},{default:l(()=>[c(h,null,{default:l(()=>[pt]),_:1}),c(h,null,{default:l(()=>[vt]),_:1}),c(h,null,{default:l(()=>[ht]),_:1})]),_:1})]),e("div",null,[c(k),c(E),c(C,{images:["/src/assets/1.jpg","/src/assets/2.jpg","/src/assets/3.jpg","/src/assets/4.jpg","/src/assets/5.jpg","/src/assets/2.jpg"]},null,8,["images"])])])}var ft=p(lt,[["render",mt],["__scopeId","data-v-ceac7982"]]);const gt={components:{HeaderVue:f,FooterVue:b}};function $t(t,i,o,n,s,a){return r(),d("h1",null,"NEWS")}var bt=p(gt,[["render",$t]]);const yt={components:{HeaderVue:f,FooterVue:b}};function wt(t,i,o,n,s,a){return r(),d("h1",null,"ABOUT")}var xt=p(yt,[["render",wt]]);const It={name:"Err404"};function St(t,i,o,n,s,a){return r(),d("h1",null,"404 Not Found!")}var Ht=p(It,[["render",St]]);const Nt={name:"Err5xx"};function At(t,i,o,n,s,a){return r(),d("h1",null,"5xx Error!")}var Lt=p(Nt,[["render",At]]);const kt={components:{HeaderVue:f,FooterVue:b}};function Et(t,i,o,n,s,a){return r(),d("h1",null,"GALLERY")}var Ct=p(kt,[["render",Et]]);const Vt=F({history:T(),routes:[{path:"/",name:"Index",component:ft},{path:"/news",name:"News",component:bt},{path:"/about",name:"About",component:xt},{path:"/gallery",name:"Gallery",component:Ct},{path:"/*",name:"Err404",component:Ht},{path:"/error/500",name:"Err5xx",component:Lt}]}),Rt={"en-US":{header:{home:"Home",about:"About",news:"News",gallery:"Gallery"},common:{readMore:"Read More",search:"Search..."}},"zh-CN":{header:{home:"\u9996\u9875",about:"\u5173\u4E8E\u6211\u4EEC",news:"\u65B0\u95FB",gallery:"\u753B\u5ECA"},common:{readMore:"\u4E86\u89E3\u66F4\u591A",search:"\u641C\u7D22..."}}},jt=U({locale:localStorage.getItem("lang"),fallbackLocal:"en",messages:Rt}),A=q(ce);A.use(Vt).use(jt);A.mount("#app");