import{u as O,r as b,a as h,o as c,c as _,b as a,d as r,w as u,e as v,t as l,n as k,p as g,f as $,g as U,F as x,T as V,h as M,i as D,j as y,k as E,S as J,N as G,P as F,A as W,l as Y,m as K,q as X,v as Z,s as Q,x as aa,y as ea,z as ta,B as sa}from"./vendor.4f0a3510.js";const oa=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const d of t)if(d.type==="childList")for(const n of d.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const d={};return t.integrity&&(d.integrity=t.integrity),t.referrerpolicy&&(d.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?d.credentials="include":t.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(t){if(t.ep)return;t.ep=!0;const d=s(t);fetch(t.href,d)}};oa();const ia="modulepreload",A={},da="/",C=function(i,s){return!s||s.length===0?i():Promise.all(s.map(o=>{if(o=`${da}${o}`,o in A)return;A[o]=!0;const t=o.endsWith(".css"),d=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${d}`))return;const n=document.createElement("link");if(n.rel=t?"stylesheet":ia,t||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),t)return new Promise((m,w)=>{n.addEventListener("load",m),n.addEventListener("error",w)})})).then(()=>i())};var na="/assets/logo.328b57d6.png";var p=(e,i)=>{const s=e.__vccOpts||e;for(const[o,t]of i)s[o]=t;return s};const I=e=>(g("data-v-36e54dc2"),e=e(),$(),e),ra={id:"header"},la={id:"frame"},ca=I(()=>a("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[a("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[a("path",{d:"M4 8h16"}),a("path",{d:"M4 16h16"})])],-1)),_a=[ca],ua={id:"label"},va={id:"menu"},pa=["placeholder"],ma=I(()=>a("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},[a("path",{d:"M0 0h24v24H0V0z",fill:"none"}),a("path",{d:"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"})],-1)),ha=[ma],fa=I(()=>a("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},[a("path",{d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z",fill:"currentColor"})],-1)),ga=[fa],$a={setup(e){const{locale:i}=O();function s(){localStorage.getItem("lang")==="en-US"?(localStorage.setItem("lang","zh-CN"),i.value="zh-CN"):(localStorage.setItem("lang","en-US"),i.value="en-US")}const o=b(!1);return(t,d)=>{const n=h("router-link");return c(),_("div",ra,[a("div",la,[a("div",{id:"menu_icon",class:"icon",onClick:d[0]||(d[0]=m=>{o.value=!0})},_a),a("span",ua,[a("img",{id:"logo",src:na,alt:"",onClick:d[1]||(d[1]=m=>t.$router.push({name:"Index"}))})]),a("div",va,[r(n,{id:"home_tab",class:"tab",to:"/"},{default:u(()=>[v(l(t.$t("header.home")),1)]),_:1}),r(n,{id:"about_tab",class:"tab",to:"/about"},{default:u(()=>[v(l(t.$t("header.about")),1)]),_:1}),r(n,{id:"news_tab",class:"tab",to:"/news"},{default:u(()=>[v(l(t.$t("header.news")),1)]),_:1}),r(n,{id:"gallery_tab",class:"tab",to:"/gallery"},{default:u(()=>[v(l(t.$t("header.gallery")),1)]),_:1}),r(n,{id:"contact_tab",class:"tab",to:"/contact"},{default:u(()=>[v(l(t.$t("header.contact")),1)]),_:1}),a("input",{id:"search_bar",placeholder:t.$t("common.search")},null,8,pa),a("div",{id:"translate_icon",class:"icon",onClick:s},ha)])]),a("div",{class:k(["side_menu",{show:o.value,hide:!o.value}])},[a("div",{id:"close_icon",onClick:d[2]||(d[2]=m=>o.value=!1)},ga)],2)])}}};var z=p($a,[["__scopeId","data-v-36e54dc2"]]),ba="/assets/footer_logo.8b78e286.png";const ya={props:["ICP","copyright","address","contact"]},wa=e=>(g("data-v-3329f7da"),e=e(),$(),e),xa={id:"footer_container",class:"main"},Ia=wa(()=>a("div",{id:"img_container"},[a("img",{src:ba,alt:"logo"})],-1)),La={id:"text_container"},Sa={style:{border:"none"}},ka={style:{border:"none"}};function Ea(e,i,s,o,t,d){return c(),_("footer",null,[a("div",xa,[Ia,a("div",La,[a("div",null,[a("span",null,l(s.ICP),1),a("span",Sa,l(s.copyright),1)]),a("div",null,[a("span",null,l(s.address),1),a("span",ka,l(s.contact),1)])])])])}var H=p(ya,[["render",Ea],["__scopeId","data-v-3329f7da"]]);const Aa={setup(e){if(!localStorage.getItem("lang")){let t=window.navigator.userLanguage||window.navigator.language;localStorage.setItem("lang",t)}const i=b(!1);function s(t){o.value=window.scrollY>window.innerHeight,i.value=t.deltaY<10}const o=b(!1);return U(()=>{window.addEventListener("wheel",s)}),(t,d)=>{const n=h("router-view");return c(),_(x,null,[r(z,{class:k([{show:i.value,hide:!i.value,enable_control:o.value},"header"])},null,8,["class"]),r(n,null,{default:u(({Component:m})=>[r(V,{name:"fade",mode:"out-in"},{default:u(()=>[(c(),M(D(m)))]),_:2},1024)]),_:1}),r(H,{ICP:"\u4EACICP\u590713051651\u53F7 - 1",copyright:"\u5317\u4EAC\u4E2D\u5B66\u7248\u6743\u6240\u6709 \xA9 2014 BJZX All Rights Reserved.",address:"\u5730\u5740\uFF1A\u5317\u4EAC\u5E02\u671D\u9633\u533A\u897F\u575D\u6CB3\u4E1C\u91CC1\u53F7",contact:"\u8054\u7CFB\u7535\u8BDD\uFF1A 010-50981098\uFF08\u897F\u575D\u6CB3\u6821\u533A\uFF09 010-50951290\uFF08\u4E1C\u575D\u5357\u6821\u533A\uFF09"})],64)}}};var Ca=p(Aa,[["__scopeId","data-v-7feaea04"]]),za="/assets/Rocket.5301b9b4.mp4",Ha="/assets/cherry.cf22968d.png";const Na={},f=e=>(g("data-v-ba9a664c"),e=e(),$(),e),Pa={id:"homeAbout"},Ra={id:"bg"},ja={id:"container",class:"main"},Ta=f(()=>a("div",{id:"video","data-aos":"fade-right","data-aos-duration":"600","data-aos-delay":"300"},[a("video",{controls:""},[a("source",{src:za,type:"video/mp4"}),v("Your browser does not support the video tag. ")])],-1)),qa={id:"information"},Ba={class:"about_title","data-aos":"fade-left","data-aos-duration":"600","data-aos-delay":"300"},Oa={class:"about_text","data-aos":"fade-left","data-aos-duration":"600","data-aos-delay":"300"},Ua=v(" \u5317\u4EAC\u4E2D\u5B66\uFF0C\u4E0E\u9996\u90FD\u540C\u540D\u30022013\u5E74\uFF0C\u7ECF\u5317\u4EAC\u5E02\u653F\u5E9C\u6279\u51C6\u3001\u7531\u671D\u9633\u533A\u653F\u5E9C\u4E3B\u529E\u7684\u5317\u4EAC\u4E2D\u5B66\u6B63\u5F0F\u5EFA\u6821\uFF0C\u5907\u53D7\u793E\u4F1A\u5404\u754C\u5173\u6CE8\u3002 "),Va=f(()=>a("br",null,null,-1)),Ma=v("2017\u5E74\uFF0C\u4E3A\u4E86\u6EE1\u8DB3\u90E8\u5206\u5B66\u751F\u548C\u5BB6\u957F\u7684\u591A\u5143\u5316\u5347\u5B66\u9700\u6C42\uFF0C\u642D\u5EFA\u6210\u957F\u7684\u7ACB\u4EA4\u6865\uFF0C\u5317\u4EAC\u4E2D\u5B66\u7EC4\u5EFA\u56FD\u9645\u65B9\u5411\u73ED\u7EA7\u3002\u5B66\u6821\u575A\u6301\u4E2D\u56FD\u7ACB\u573A\u3001\u5F00\u653E\u591A\u5143\u3001\u878D\u5408\u521B\u65B0\uFF0C\u57FA\u4E8E\u8BFE\u7A0B\u6539\u9769\u7279\u8272\u5B9E\u8DF5\uFF0C\u548C\u7F8E\u56FD\u683C\u4F26\u7F57\u514B\u9AD8\u4E2D\u5171\u540C\u5F00\u53D1\u4E86\u56FD\u9645\u6559\u80B2\u4F53\u7CFB\u8BFE\u7A0B\u3001\u5305\u62EC\u9AD8\u4E2D\u57FA\u7840\u8BFE\u7A0B\u3001AP\u8BFE\u7A0B\u3001\u7279\u8272\u9009\u4FEE\u8BFE\u7A0B\uFF0C\u6EE1\u8DB3\u5B66\u751F\u4E2A\u6027\u5316\u53D1\u5C55\u9700\u6C42\u3002 "),Da=y('<div id="principle" class="main" data-v-ba9a664c><div id="principle_speech" data-v-ba9a664c><div id="left" data-aos="fade-right" data-aos-duration="600" data-aos-delay="300" data-v-ba9a664c>\u201C</div><div id="text" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300" data-v-ba9a664c>STH FROM OUR DEAR CHERRY</div><div id="right" data-aos="fade-left" data-aos-duration="600" data-aos-delay="300" data-v-ba9a664c>\u201D</div><div id="principle_info" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300" data-v-ba9a664c>\u2014\u2014\u5468\u6167 \u5317\u4EAC\u4E2D\u5B66\u56FD\u9645\u90E8\u6821\u957F</div></div><img class="pic shadow" src="'+Ha+'" alt="Cherry" data-aos="fade-left" data-aos-duration="600" data-aos-delay="300" data-v-ba9a664c></div>',1),Ja={id:"school_info_container",class:"shadow"},Ga={id:"school_info_title",class:"main","data-aos":"zoom-in","data-aos-duration":"600","data-aos-delay":"300"},Fa={id:"school_info",class:"main"},Wa={id:"idea",class:"info shadow","data-aos":"zoom-in","data-aos-duration":"600","data-aos-delay":"300"},Ya={class:"info_container"},Ka={class:"info_title"},Xa={class:"info_text"},Za=v(" 2017\u5E74\uFF0C\u4E3A\u4E86\u6EE1\u8DB3\u90E8\u5206\u5B66\u751F\u548C\u5BB6\u957F\u7684\u591A\u5143\u5316\u5347\u5B66\u9700\u6C42\uFF0C\u642D\u5EFA\u6210\u957F\u7684\u7ACB\u4EA4\u6865\uFF0C\u5317\u4EAC\u4E2D\u5B66\u7EC4\u5EFA\u56FD\u9645\u65B9\u5411\u73ED\u7EA7\u3002\u5B66\u6821\u575A\u6301\u4E2D\u56FD\u7ACB\u573A\u3001\u5F00\u653E\u591A\u5143\u3001\u878D\u5408\u521B\u65B0\u3002 "),Qa=f(()=>a("br",null,null,-1)),ae=f(()=>a("br",null,null,-1)),ee={id:"courses",class:"info shadow","data-aos":"zoom-in","data-aos-duration":"600","data-aos-delay":"300"},te={class:"info_container"},se={class:"info_title"},oe={class:"info_text"},ie=v(" 2017\u5E74\uFF0C\u4E3A\u4E86\u6EE1\u8DB3\u90E8\u5206\u5B66\u751F\u548C\u5BB6\u957F\u7684\u591A\u5143\u5316\u5347\u5B66\u9700\u6C42\uFF0C\u642D\u5EFA\u6210\u957F\u7684\u7ACB\u4EA4\u6865\uFF0C\u5317\u4EAC\u4E2D\u5B66\u7EC4\u5EFA\u56FD\u9645\u65B9\u5411\u73ED\u7EA7\u3002\u5B66\u6821\u575A\u6301\u4E2D\u56FD\u7ACB\u573A\u3001\u5F00\u653E\u591A\u5143\u3001\u878D\u5408\u521B\u65B0\u3002 "),de=f(()=>a("br",null,null,-1)),ne=f(()=>a("br",null,null,-1)),re={id:"faculty",class:"info shadow","data-aos":"zoom-in","data-aos-duration":"600","data-aos-delay":"300"},le={class:"info_container"},ce={class:"info_title"},_e={class:"info_text"},ue=v(" 2017\u5E74\uFF0C\u4E3A\u4E86\u6EE1\u8DB3\u90E8\u5206\u5B66\u751F\u548C\u5BB6\u957F\u7684\u591A\u5143\u5316\u5347\u5B66\u9700\u6C42\uFF0C\u642D\u5EFA\u6210\u957F\u7684\u7ACB\u4EA4\u6865\uFF0C\u5317\u4EAC\u4E2D\u5B66\u7EC4\u5EFA\u56FD\u9645\u65B9\u5411\u73ED\u7EA7\u3002\u5B66\u6821\u575A\u6301\u4E2D\u56FD\u7ACB\u573A\u3001\u5F00\u653E\u591A\u5143\u3001\u878D\u5408\u521B\u65B0\u3002 "),ve=f(()=>a("br",null,null,-1)),pe=f(()=>a("br",null,null,-1));function me(e,i){const s=h("router-link");return c(),_("div",Pa,[a("div",Ra,[a("div",ja,[Ta,a("div",qa,[a("div",Ba,l(e.$t("homeAbout.about_title")),1),a("div",Oa,[Ua,Va,Ma,r(s,{class:"link",to:"/about"},{default:u(()=>[v(l(e.$t("common.read_more")),1)]),_:1})])])])]),Da,a("div",Ja,[a("div",Ga,l(e.$t("homeAbout.school_info_title")),1),a("div",Fa,[a("div",Wa,[a("div",Ya,[a("div",Ka,l(e.$t("homeAbout.idea")),1),a("div",Xa,[Za,Qa,ae,r(s,{class:"link",to:"/about"},{default:u(()=>[v(l(e.$t("common.read_more")),1)]),_:1})])])]),a("div",ee,[a("div",te,[a("div",se,l(e.$t("homeAbout.courses")),1),a("div",oe,[ie,de,ne,r(s,{class:"link",to:"/about"},{default:u(()=>[v(l(e.$t("common.read_more")),1)]),_:1})])])]),a("div",re,[a("div",le,[a("div",ce,l(e.$t("homeAbout.faculty")),1),a("div",_e,[ue,ve,pe,r(s,{class:"link",to:"/about"},{default:u(()=>[v(l(e.$t("common.read_more")),1)]),_:1})])])])])])])}var he=p(Na,[["render",me],["__scopeId","data-v-ba9a664c"]]),L="/assets/main.085d8efb.jpg";const fe={class:"main"},ge=y('<h1 class="title" data-v-37af7048>N<span style="color:var(--baid-red);" data-v-37af7048>E</span>WS</h1><div class="box" data-v-37af7048><img alt="" src="'+L+'" data-v-37af7048><div class="blocker" data-v-37af7048></div><div class="content" data-v-37af7048><h2 class="n-title" data-v-37af7048>TITLE</h2><p class="n-note" data-v-37af7048> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></div><br data-v-37af7048><div class="content" data-v-37af7048><h2 class="n-title" data-v-37af7048>TITLE</h2><p class="n-note" data-v-37af7048> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></div><div class="blocker" data-v-37af7048></div><img alt="" src="'+L+'" data-v-37af7048></div>',2),$e=[ge],be={setup(e){return(i,s)=>(c(),_("div",fe,$e))}};var ye=p(be,[["__scopeId","data-v-37af7048"]]);const we=e=>(g("data-v-7d3d09be"),e=e(),$(),e),xe={class:"bg"},Ie={class:"main"},Le=we(()=>a("h1",{class:"title"},"GALLERY",-1)),Se={class:"grid"},ke=["src"],Ee={props:{images:Array},setup(e){return(i,s)=>(c(),_("div",xe,[a("div",Ie,[Le,a("div",Se,[(c(!0),_(x,null,E(e.images,o=>(c(),_("img",{src:o,key:o,class:"item"},null,8,ke))),128))])])]))}};var Ae=p(Ee,[["__scopeId","data-v-7d3d09be"]]);var N="/assets/1.a9546687.jpg",P="/assets/2.e277ca29.jpg",R="/assets/3.c5c1906a.jpg",j="/assets/4.5ad55502.jpg",T="/assets/5.78f810e9.jpg",Ce="/assets/6.cd883367.jpg",ze="/assets/7.e67e9b3f.jpg",He="/assets/8.b16012cf.jpg",Ne="/assets/main2.968903f7.jpg",Pe="/assets/main3.9d63d882.jpg";J.use([G,F,W]);const Re={components:{HomeNews:ye,HomeAbout:he,HomeGallery:Ae,Swiper:Y,SwiperSlide:K},data(){return{title:"\u6B22\u8FCE\u6765\u5230\u5317\u4EAC\u4E2D\u5B66\u56FD\u9645\u90E8",images:[N,P,R,j,T,Ce,ze,He]}}},S=e=>(g("data-v-1642125e"),e=e(),$(),e),je={id:"head"},Te=S(()=>a("img",{src:L,alt:"main1"},null,-1)),qe=S(()=>a("img",{src:Ne,alt:"main2"},null,-1)),Be=S(()=>a("img",{src:Pe,alt:"main3"},null,-1));function Oe(e,i,s,o,t,d){const n=h("swiper-slide"),m=h("swiper"),w=h("HomeAbout"),q=h("HomeNews"),B=h("HomeGallery");return c(),_("div",null,[a("div",je,[r(m,{navigation:!0,pagination:{clickable:!0},loop:!0,autoplay:{delay:4e3},class:"mySwiper"},{default:u(()=>[r(n,null,{default:u(()=>[Te]),_:1}),r(n,null,{default:u(()=>[qe]),_:1}),r(n,null,{default:u(()=>[Be]),_:1})]),_:1})]),a("div",null,[r(w),r(q),r(B,{images:t.images},null,8,["images"])])])}var Ue=p(Re,[["render",Oe],["__scopeId","data-v-1642125e"]]);const Ve={components:{HeaderVue:z,FooterVue:H}};function Me(e,i,s,o,t,d){return c(),_("h1",null,"NEWS")}var De=p(Ve,[["render",Me]]),Je="/assets/idea1.05a52f20.svg",Ge="/assets/idea1hover.20cf68cf.svg",Fe="/assets/idea2.bc438852.svg",We="/assets/idea2hover.a6128be5.svg",Ye="/assets/idea3.25af50f3.svg",Ke="/assets/idea3hover.8a33474f.svg",Xe="/assets/idea4.e5776d4a.svg",Ze="/assets/idea4hover.06032f95.svg";const Qe={components:{}},at=y('<div id="Background" data-v-d4484eea><div id="UpperPart" data-v-d4484eea><h1 id="AboveTitle" data-v-d4484eea> \u5173 <span style="color:#b63f34;" data-v-d4484eea>\u4E8E</span>\u6211\u4EEC </h1></div></div><div id="BodyPart" data-v-d4484eea><div id="LeftPart" data-v-d4484eea><div id="Text" data-v-d4484eea><p class="UnderLine" data-v-d4484eea>\u6D4B\u8BD5\u6587\u672C\u6D4B\u8BD5\u6587\u672C</p><p class="UnderLine" data-v-d4484eea>\u6D4B\u8BD5\u6587\u672C\u6D4B\u8BD5\u6587\u672C</p><p class="UnderLine" data-v-d4484eea>\u6D4B\u8BD5\u6587\u672C\u6D4B\u8BD5\u6587\u672C</p><br data-v-d4484eea></div><div id="Slogan" data-v-d4484eea><p style="color:#b63f34;margin:2px;" data-v-d4484eea>BETTER</p><p style="color:#b63f34;margin:2px;" data-v-d4484eea>ME</p><p style="color:#2464a4;margin:2px;" data-v-d4484eea>BETTER</p><p style="color:#2464a4;margin:2px;" data-v-d4484eea>WORLD</p></div></div><div id="RightPart" data-v-d4484eea><div id="idea1" data-v-d4484eea><img src="'+Je+'" class="idea_b" data-v-d4484eea><img src="'+Ge+'" class="idea_child" data-v-d4484eea></div><div id="idea2" data-v-d4484eea><img src="'+Fe+'" class="idea_b" data-v-d4484eea><img src="'+We+'" class="idea_child" data-v-d4484eea></div><div id="idea3" data-v-d4484eea><img src="'+Ye+'" class="idea_b" data-v-d4484eea><img src="'+Ke+'" class="idea_child" data-v-d4484eea></div><div id="idea4" data-v-d4484eea><img src="'+Xe+'" class="idea_b" data-v-d4484eea><img src="'+Ze+'" class="idea_child" data-v-d4484eea></div></div></div>',2),et=[at];function tt(e,i,s,o,t,d){return c(),_("div",null,et)}var st=p(Qe,[["render",tt],["__scopeId","data-v-d4484eea"]]);const ot={name:"Err404"};function it(e,i,s,o,t,d){return c(),_("h1",null,"404 Not Found!")}var dt=p(ot,[["render",it]]);const nt={name:"Err5xx"};function rt(e,i,s,o,t,d){return c(),_("h1",null,"5xx Error!")}var lt=p(nt,[["render",rt]]);const ct={class:"previewModal"},_t={class:"grid"},ut=["src"],vt={props:{images:{type:Array,default:()=>[N,P,R,j,T]}},setup(e){const i=e,s=b(void 0);return(o,t)=>(c(),_("div",null,[X(a("div",ct,null,512),[[Z,s.value!==void 0]]),a("div",_t,[(c(!0),_(x,null,E(i.images,d=>(c(),_("img",{class:"item",src:d},null,8,ut))),256))])]))}};var pt=p(vt,[["__scopeId","data-v-f18ebca8"]]);const mt={},ht=e=>(g("data-v-2af31afa"),e=e(),$(),e),ft=ht(()=>a("div",{id:"head_pic"},null,-1)),gt={class:"main"},$t={id:"page_title",class:"shadow"},bt=y('<div id="content" data-v-2af31afa><div class="title" data-aos="zoom-in" data-aos-duration="600" data-v-2af31afa>\u4E00\u4E9B\u6807\u9898</div><div class="text" data-aos="zoom-in" data-aos-duration="600" data-v-2af31afa>\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57</div><div class="text" data-aos="zoom-in" data-aos-duration="600" data-v-2af31afa>\u4E00\u4E9B\u6587\u5B57</div><div class="title" data-aos="zoom-in" data-aos-duration="600" data-v-2af31afa>\u4E00\u4E9B\u6807\u9898</div><div class="text" data-aos="zoom-in" data-aos-duration="600" data-v-2af31afa>\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57</div><div class="text" data-aos="zoom-in" data-aos-duration="600" data-v-2af31afa>\u4E00\u4E9B\u6587\u5B57</div></div>',1);function yt(e,i){return c(),_("div",null,[ft,a("div",gt,[a("div",$t,l(e.$t("contact.title")),1),bt])])}var wt=p(mt,[["render",yt],["__scopeId","data-v-2af31afa"]]);const xt=Q({history:aa(),routes:[{path:"/",name:"Index",component:Ue},{path:"/news",name:"News",component:De},{path:"/about",name:"About",component:st},{path:"/gallery",name:"Gallery",component:pt},{path:"/*",name:"Err404",component:dt},{path:"/error/500",name:"Err5xx",component:lt},{path:"/contact",name:"Contact",component:wt}]});Promise.all([C(()=>import("./en-us.7bd71e26.js"),[]),C(()=>import("./zh-cn.e88f6c0c.js"),[])]).then(e=>{const i={"en-US":e[0],"zh-CN":e[1]},s=ea({locale:localStorage.getItem("lang"),fallbackLocal:"en",messages:i}),o=ta(Ca);o.use(xt).use(s).use(sa.init()),o.mount("#app")});
