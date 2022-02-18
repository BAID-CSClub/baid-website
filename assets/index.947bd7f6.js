import{u as O,r as w,a as $,o as c,c as _,b as e,d,w as v,e as u,t as l,n as C,p as h,f,g as U,F as x,T as V,h as M,i as D,j as k,k as N,S as G,N as F,P as W,A as Y,l as K,m as X,q as y,s as Z,v as Q,x as ee,y as te,z as ae,B as se,C as oe}from"./vendor.9f5031cc.js";const ie=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}};ie();const ne="modulepreload",z={},de="/",H=function(i,s){return!s||s.length===0?i():Promise.all(s.map(o=>{if(o=`${de}${o}`,o in z)return;z[o]=!0;const a=o.endsWith(".css"),n=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const r=document.createElement("link");if(r.rel=a?"stylesheet":ne,a||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),a)return new Promise((g,I)=>{r.addEventListener("load",g),r.addEventListener("error",I)})})).then(()=>i())};var le="/assets/logo.328b57d6.png";var p=(t,i)=>{const s=t.__vccOpts||t;for(const[o,a]of i)s[o]=a;return s};const S=t=>(h("data-v-05bf7f0f"),t=t(),f(),t),re={id:"header"},ce={id:"frame"},_e=S(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{d:"M4 8h16"}),e("path",{d:"M4 16h16"})])],-1)),ue=[_e],ve={id:"label"},pe={id:"menu"},me=["placeholder"],he=S(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},[e("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e("path",{d:"M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"})],-1)),fe=[he],ge=S(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},[e("path",{d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z",fill:"currentColor"})],-1)),$e=[ge],be={setup(t){const{locale:i}=O();function s(){localStorage.getItem("lang")==="en-US"?(localStorage.setItem("lang","zh-CN"),i.value="zh-CN"):(localStorage.setItem("lang","en-US"),i.value="en-US")}const o=w(!1);return(a,n)=>{const r=$("router-link");return c(),_("div",re,[e("div",ce,[e("div",{id:"menu_icon",class:"icon",onClick:n[0]||(n[0]=g=>{o.value=!0})},ue),e("span",ve,[e("img",{id:"logo",src:le,alt:"",onClick:n[1]||(n[1]=g=>a.$router.push({name:"Index"}))})]),e("div",pe,[d(r,{id:"home_tab",class:"tab",to:"/"},{default:v(()=>[u(l(a.$t("header.home")),1)]),_:1}),d(r,{id:"about_tab",class:"tab",to:"/about"},{default:v(()=>[u(l(a.$t("header.about")),1)]),_:1}),d(r,{id:"news_tab",class:"tab",to:"/news"},{default:v(()=>[u(l(a.$t("header.news")),1)]),_:1}),d(r,{id:"gallery_tab",class:"tab",to:"/gallery"},{default:v(()=>[u(l(a.$t("header.gallery")),1)]),_:1}),d(r,{id:"contact_tab",class:"tab",to:"/contact"},{default:v(()=>[u(l(a.$t("header.contact")),1)]),_:1}),e("input",{id:"search_bar",placeholder:a.$t("common.search")},null,8,me),e("div",{id:"translate_icon",class:"icon",onClick:s},fe)])]),e("div",{class:C(["side_menu",{show:o.value,hide:!o.value}])},[e("div",{id:"close_icon",onClick:n[2]||(n[2]=g=>o.value=!1)},$e)],2)])}}};var ye=p(be,[["__scopeId","data-v-05bf7f0f"]]),we="/assets/footer_logo.8b78e286.png";const xe={props:["ICP","copyright","address","contact"]},ke=t=>(h("data-v-3329f7da"),t=t(),f(),t),Ie={id:"footer_container",class:"main"},Se=ke(()=>e("div",{id:"img_container"},[e("img",{src:we,alt:"logo"})],-1)),Le={id:"text_container"},Ee={style:{border:"none"}},Ae={style:{border:"none"}};function Ce(t,i,s,o,a,n){return c(),_("footer",null,[e("div",Ie,[Se,e("div",Le,[e("div",null,[e("span",null,l(s.ICP),1),e("span",Ee,l(s.copyright),1)]),e("div",null,[e("span",null,l(s.address),1),e("span",Ae,l(s.contact),1)])])])])}var Ne=p(xe,[["render",Ce],["__scopeId","data-v-3329f7da"]]);const ze={setup(t){if(!localStorage.getItem("lang")){let a=window.navigator.userLanguage||window.navigator.language;localStorage.setItem("lang",a)}const i=w(!1);function s(a){o.value=window.scrollY>window.innerHeight,i.value=a.deltaY<10}const o=w(!1);return U(()=>{window.addEventListener("wheel",s)}),(a,n)=>{const r=$("router-view");return c(),_(x,null,[d(ye,{class:C([{show:i.value,hide:!i.value,enable_control:o.value},"header"])},null,8,["class"]),d(r,null,{default:v(({Component:g})=>[d(V,{name:"fade",mode:"out-in"},{default:v(()=>[(c(),M(D(g)))]),_:2},1024)]),_:1}),d(Ne,{ICP:"\u4EACICP\u590713051651\u53F7 - 1",copyright:"\u5317\u4EAC\u4E2D\u5B66\u7248\u6743\u6240\u6709 \xA9 2014 BJZX All Rights Reserved.",address:"\u5730\u5740\uFF1A\u5317\u4EAC\u5E02\u671D\u9633\u533A\u897F\u575D\u6CB3\u4E1C\u91CC1\u53F7",contact:"\u8054\u7CFB\u7535\u8BDD\uFF1A 010-50981098\uFF08\u897F\u575D\u6CB3\u6821\u533A\uFF09 010-50951290\uFF08\u4E1C\u575D\u5357\u6821\u533A\uFF09"})],64)}}};var He=p(ze,[["__scopeId","data-v-7feaea04"]]),Re="/assets/Rocket.5301b9b4.mp4",Pe="/assets/cherry.cf22968d.png";const Be={},b=t=>(h("data-v-ba9a664c"),t=t(),f(),t),je={id:"homeAbout"},Te={id:"bg"},qe={id:"container",class:"main"},Je=b(()=>e("div",{id:"video","data-aos":"fade-right","data-aos-duration":"600","data-aos-delay":"300"},[e("video",{controls:""},[e("source",{src:Re,type:"video/mp4"}),u("Your browser does not support the video tag. ")])],-1)),Oe={id:"information"},Ue={class:"about_title","data-aos":"fade-left","data-aos-duration":"600","data-aos-delay":"300"},Ve={class:"about_text","data-aos":"fade-left","data-aos-duration":"600","data-aos-delay":"300"},Me=u(" \u5317\u4EAC\u4E2D\u5B66\uFF0C\u4E0E\u9996\u90FD\u540C\u540D\u30022013\u5E74\uFF0C\u7ECF\u5317\u4EAC\u5E02\u653F\u5E9C\u6279\u51C6\u3001\u7531\u671D\u9633\u533A\u653F\u5E9C\u4E3B\u529E\u7684\u5317\u4EAC\u4E2D\u5B66\u6B63\u5F0F\u5EFA\u6821\uFF0C\u5907\u53D7\u793E\u4F1A\u5404\u754C\u5173\u6CE8\u3002 "),De=b(()=>e("br",null,null,-1)),Ge=u("2017\u5E74\uFF0C\u4E3A\u4E86\u6EE1\u8DB3\u90E8\u5206\u5B66\u751F\u548C\u5BB6\u957F\u7684\u591A\u5143\u5316\u5347\u5B66\u9700\u6C42\uFF0C\u642D\u5EFA\u6210\u957F\u7684\u7ACB\u4EA4\u6865\uFF0C\u5317\u4EAC\u4E2D\u5B66\u7EC4\u5EFA\u56FD\u9645\u65B9\u5411\u73ED\u7EA7\u3002\u5B66\u6821\u575A\u6301\u4E2D\u56FD\u7ACB\u573A\u3001\u5F00\u653E\u591A\u5143\u3001\u878D\u5408\u521B\u65B0\uFF0C\u57FA\u4E8E\u8BFE\u7A0B\u6539\u9769\u7279\u8272\u5B9E\u8DF5\uFF0C\u548C\u7F8E\u56FD\u683C\u4F26\u7F57\u514B\u9AD8\u4E2D\u5171\u540C\u5F00\u53D1\u4E86\u56FD\u9645\u6559\u80B2\u4F53\u7CFB\u8BFE\u7A0B\u3001\u5305\u62EC\u9AD8\u4E2D\u57FA\u7840\u8BFE\u7A0B\u3001AP\u8BFE\u7A0B\u3001\u7279\u8272\u9009\u4FEE\u8BFE\u7A0B\uFF0C\u6EE1\u8DB3\u5B66\u751F\u4E2A\u6027\u5316\u53D1\u5C55\u9700\u6C42\u3002 "),Fe=k('<div id="principle" class="main" data-v-ba9a664c><div id="principle_speech" data-v-ba9a664c><div id="left" data-aos="fade-right" data-aos-duration="600" data-aos-delay="300" data-v-ba9a664c>\u201C</div><div id="text" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300" data-v-ba9a664c>STH FROM OUR DEAR CHERRY</div><div id="right" data-aos="fade-left" data-aos-duration="600" data-aos-delay="300" data-v-ba9a664c>\u201D</div><div id="principle_info" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300" data-v-ba9a664c>\u2014\u2014\u5468\u6167 \u5317\u4EAC\u4E2D\u5B66\u56FD\u9645\u90E8\u6821\u957F</div></div><img class="pic shadow" src="'+Pe+'" alt="Cherry" data-aos="fade-left" data-aos-duration="600" data-aos-delay="300" data-v-ba9a664c></div>',1),We={id:"school_info_container",class:"shadow"},Ye={id:"school_info_title",class:"main","data-aos":"zoom-in","data-aos-duration":"600","data-aos-delay":"300"},Ke={id:"school_info",class:"main"},Xe={id:"idea",class:"info shadow","data-aos":"zoom-in","data-aos-duration":"600","data-aos-delay":"300"},Ze={class:"info_container"},Qe={class:"info_title"},et={class:"info_text"},tt=u(" 2017\u5E74\uFF0C\u4E3A\u4E86\u6EE1\u8DB3\u90E8\u5206\u5B66\u751F\u548C\u5BB6\u957F\u7684\u591A\u5143\u5316\u5347\u5B66\u9700\u6C42\uFF0C\u642D\u5EFA\u6210\u957F\u7684\u7ACB\u4EA4\u6865\uFF0C\u5317\u4EAC\u4E2D\u5B66\u7EC4\u5EFA\u56FD\u9645\u65B9\u5411\u73ED\u7EA7\u3002\u5B66\u6821\u575A\u6301\u4E2D\u56FD\u7ACB\u573A\u3001\u5F00\u653E\u591A\u5143\u3001\u878D\u5408\u521B\u65B0\u3002 "),at=b(()=>e("br",null,null,-1)),st=b(()=>e("br",null,null,-1)),ot={id:"courses",class:"info shadow","data-aos":"zoom-in","data-aos-duration":"600","data-aos-delay":"300"},it={class:"info_container"},nt={class:"info_title"},dt={class:"info_text"},lt=u(" 2017\u5E74\uFF0C\u4E3A\u4E86\u6EE1\u8DB3\u90E8\u5206\u5B66\u751F\u548C\u5BB6\u957F\u7684\u591A\u5143\u5316\u5347\u5B66\u9700\u6C42\uFF0C\u642D\u5EFA\u6210\u957F\u7684\u7ACB\u4EA4\u6865\uFF0C\u5317\u4EAC\u4E2D\u5B66\u7EC4\u5EFA\u56FD\u9645\u65B9\u5411\u73ED\u7EA7\u3002\u5B66\u6821\u575A\u6301\u4E2D\u56FD\u7ACB\u573A\u3001\u5F00\u653E\u591A\u5143\u3001\u878D\u5408\u521B\u65B0\u3002 "),rt=b(()=>e("br",null,null,-1)),ct=b(()=>e("br",null,null,-1)),_t={id:"faculty",class:"info shadow","data-aos":"zoom-in","data-aos-duration":"600","data-aos-delay":"300"},ut={class:"info_container"},vt={class:"info_title"},pt={class:"info_text"},mt=u(" 2017\u5E74\uFF0C\u4E3A\u4E86\u6EE1\u8DB3\u90E8\u5206\u5B66\u751F\u548C\u5BB6\u957F\u7684\u591A\u5143\u5316\u5347\u5B66\u9700\u6C42\uFF0C\u642D\u5EFA\u6210\u957F\u7684\u7ACB\u4EA4\u6865\uFF0C\u5317\u4EAC\u4E2D\u5B66\u7EC4\u5EFA\u56FD\u9645\u65B9\u5411\u73ED\u7EA7\u3002\u5B66\u6821\u575A\u6301\u4E2D\u56FD\u7ACB\u573A\u3001\u5F00\u653E\u591A\u5143\u3001\u878D\u5408\u521B\u65B0\u3002 "),ht=b(()=>e("br",null,null,-1)),ft=b(()=>e("br",null,null,-1));function gt(t,i){const s=$("router-link");return c(),_("div",je,[e("div",Te,[e("div",qe,[Je,e("div",Oe,[e("div",Ue,l(t.$t("homeAbout.about_title")),1),e("div",Ve,[Me,De,Ge,d(s,{class:"link",to:"/about"},{default:v(()=>[u(l(t.$t("common.read_more")),1)]),_:1})])])])]),Fe,e("div",We,[e("div",Ye,l(t.$t("homeAbout.school_info_title")),1),e("div",Ke,[e("div",Xe,[e("div",Ze,[e("div",Qe,l(t.$t("homeAbout.idea")),1),e("div",et,[tt,at,st,d(s,{class:"link",to:"/about"},{default:v(()=>[u(l(t.$t("common.read_more")),1)]),_:1})])])]),e("div",ot,[e("div",it,[e("div",nt,l(t.$t("homeAbout.courses")),1),e("div",dt,[lt,rt,ct,d(s,{class:"link",to:"/about"},{default:v(()=>[u(l(t.$t("common.read_more")),1)]),_:1})])])]),e("div",_t,[e("div",ut,[e("div",vt,l(t.$t("homeAbout.faculty")),1),e("div",pt,[mt,ht,ft,d(s,{class:"link",to:"/about"},{default:v(()=>[u(l(t.$t("common.read_more")),1)]),_:1})])])])])])])}var $t=p(Be,[["render",gt],["__scopeId","data-v-ba9a664c"]]),m="/assets/main.085d8efb.jpg";const bt={class:"main"},yt=k('<h1 class="title" data-v-37af7048>N<span style="color:var(--baid-red);" data-v-37af7048>E</span>WS</h1><div class="box" data-v-37af7048><img alt="" src="'+m+'" data-v-37af7048><div class="blocker" data-v-37af7048></div><div class="content" data-v-37af7048><h2 class="n-title" data-v-37af7048>TITLE</h2><p class="n-note" data-v-37af7048> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></div><br data-v-37af7048><div class="content" data-v-37af7048><h2 class="n-title" data-v-37af7048>TITLE</h2><p class="n-note" data-v-37af7048> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></div><div class="blocker" data-v-37af7048></div><img alt="" src="'+m+'" data-v-37af7048></div>',2),wt=[yt],xt={setup(t){return(i,s)=>(c(),_("div",bt,wt))}};var kt=p(xt,[["__scopeId","data-v-37af7048"]]);const It=t=>(h("data-v-7d3d09be"),t=t(),f(),t),St={class:"bg"},Lt={class:"main"},Et=It(()=>e("h1",{class:"title"},"GALLERY",-1)),At={class:"grid"},Ct=["src"],Nt={props:{images:Array},setup(t){return(i,s)=>(c(),_("div",St,[e("div",Lt,[Et,e("div",At,[(c(!0),_(x,null,N(t.images,o=>(c(),_("img",{src:o,key:o,class:"item"},null,8,Ct))),128))])])]))}};var zt=p(Nt,[["__scopeId","data-v-7d3d09be"]]);var R="/assets/1.a9546687.jpg",P="/assets/2.e277ca29.jpg",B="/assets/3.c5c1906a.jpg",j="/assets/4.5ad55502.jpg",T="/assets/5.78f810e9.jpg",Ht="/assets/6.cd883367.jpg",Rt="/assets/7.e67e9b3f.jpg",Pt="/assets/8.b16012cf.jpg",Bt="/assets/main2.968903f7.jpg",jt="/assets/main3.9d63d882.jpg";G.use([F,W,Y]);const Tt={components:{HomeNews:kt,HomeAbout:$t,HomeGallery:zt,Swiper:K,SwiperSlide:X},data(){return{title:"\u6B22\u8FCE\u6765\u5230\u5317\u4EAC\u4E2D\u5B66\u56FD\u9645\u90E8",images:[R,P,B,j,T,Ht,Rt,Pt]}}},L=t=>(h("data-v-1642125e"),t=t(),f(),t),qt={id:"head"},Jt=L(()=>e("img",{src:m,alt:"main1"},null,-1)),Ot=L(()=>e("img",{src:Bt,alt:"main2"},null,-1)),Ut=L(()=>e("img",{src:jt,alt:"main3"},null,-1));function Vt(t,i,s,o,a,n){const r=$("swiper-slide"),g=$("swiper"),I=$("HomeAbout"),q=$("HomeNews"),J=$("HomeGallery");return c(),_("div",null,[e("div",qt,[d(g,{navigation:!0,pagination:{clickable:!0},loop:!0,autoplay:{delay:4e3},class:"mySwiper"},{default:v(()=>[d(r,null,{default:v(()=>[Jt]),_:1}),d(r,null,{default:v(()=>[Ot]),_:1}),d(r,null,{default:v(()=>[Ut]),_:1})]),_:1})]),e("div",null,[d(I),d(q),d(J,{images:a.images},null,8,["images"])])])}var Mt=p(Tt,[["render",Vt],["__scopeId","data-v-1642125e"]]);const Dt=t=>(h("data-v-956307d6"),t=t(),f(),t),Gt={class:"box"},Ft={class:"content"},Wt={class:"n-title"},Yt={class:"n-subtitle"},Kt=Dt(()=>e("div",{class:"blocker"},null,-1)),Xt=["src"],Zt={props:["content","title","imageurl","subtitle","link"],setup(t){const i=t;return(s,o)=>(c(),_("div",Gt,[e("div",Ft,[e("h2",Wt,l(t.title),1),e("h3",Yt,l(t.subtitle),1),e("p",{class:"n-note",onClick:o[0]||(o[0]=(...a)=>s.Jump&&s.Jump(...a))},l(t.content),1)]),Kt,e("img",{src:i.imageurl,alt:"\u6D3B\u52A8\u914D\u56FE"},null,8,Xt)]))}};var E=p(Zt,[["__scopeId","data-v-956307d6"]]);const Qt=t=>(h("data-v-7d514d4a"),t=t(),f(),t),ea={class:"box"},ta=["src"],aa=Qt(()=>e("div",{class:"blocker"},null,-1)),sa={class:"content"},oa={class:"n-title"},ia={class:"n-subtitle"},na={props:["content","title","imageurl","subtitle","link"],setup(t){const i=t;return(s,o)=>(c(),_("div",ea,[e("img",{src:i.imageurl,alt:"\u6D3B\u52A8\u914D\u56FE"},null,8,ta),aa,e("div",sa,[e("h2",oa,l(t.title),1),e("h3",ia,l(t.subtitle),1),e("p",{class:"n-note",onClick:o[0]||(o[0]=(...a)=>s.Jump&&s.Jump(...a))},l(t.content),1)])]))}};var A=p(na,[["__scopeId","data-v-7d514d4a"]]);const da=t=>(h("data-v-a03a13e8"),t=t(),f(),t),la=["src"],ra={class:"main"},ca=da(()=>e("h1",{class:"title"},[u("N"),e("span",{style:{color:"var(--baid-red)"}},"E"),u("WS")],-1)),_a={setup(t){return(i,s)=>(c(),_(x,null,[e("img",{src:y(m),alt:"",class:"background"},null,8,la),e("div",ra,[ca,d(A,{content:"\u5728\u6B64\u8F93\u5165\u6587\u5B57",title:"\u5728\u6B64\u8F93\u5165\u6587\u5B57",imageurl:y(m),subtitle:"\u5E74\u4EFD/\u6708\u4EFD/\u65E5\u671F",link:"\u8FD8\u6CA1\u505A\u8DF3\u8F6C\u529F\u80FD"},null,8,["imageurl"]),d(E,{content:"\u5728\u6B64\u8F93\u5165\u6587\u5B57",title:"\u5728\u6B64\u8F93\u5165\u6587\u5B57",imageurl:y(m),subtitle:"\u5E74\u4EFD/\u6708\u4EFD/\u65E5\u671F",link:"\u8FD8\u6CA1\u505A\u8DF3\u8F6C\u529F\u80FD"},null,8,["imageurl"]),d(A,{content:"\u5728\u6B64\u8F93\u5165\u6587\u5B57",title:"\u5728\u6B64\u8F93\u5165\u6587\u5B57",imageurl:y(m),subtitle:"\u5E74\u4EFD/\u6708\u4EFD/\u65E5\u671F",link:"\u8FD8\u6CA1\u505A\u8DF3\u8F6C\u529F\u80FD"},null,8,["imageurl"]),d(E,{content:"\u5728\u6B64\u8F93\u5165\u6587\u5B57",title:"\u5728\u6B64\u8F93\u5165\u6587\u5B57",imageurl:y(m),subtitle:"\u5E74\u4EFD/\u6708\u4EFD/\u65E5\u671F",link:"\u8FD8\u6CA1\u505A\u8DF3\u8F6C\u529F\u80FD"},null,8,["imageurl"]),d(A,{content:"\u5728\u6B64\u8F93\u5165\u6587\u5B57",title:"\u5728\u6B64\u8F93\u5165\u6587\u5B57",imageurl:y(m),subtitle:"\u5E74\u4EFD/\u6708\u4EFD/\u65E5\u671F",link:"\u8FD8\u6CA1\u505A\u8DF3\u8F6C\u529F\u80FD"},null,8,["imageurl"]),d(E,{content:"\u5728\u6B64\u8F93\u5165\u6587\u5B57",title:"\u5728\u6B64\u8F93\u5165\u6587\u5B57",imageurl:y(m),subtitle:"\u5E74\u4EFD/\u6708\u4EFD/\u65E5\u671F",link:"\u8FD8\u6CA1\u505A\u8DF3\u8F6C\u529F\u80FD"},null,8,["imageurl"])])],64))}};var ua=p(_a,[["__scopeId","data-v-a03a13e8"]]),va="/assets/idea1.05a52f20.svg",pa="/assets/idea1hover.20cf68cf.svg",ma="/assets/idea2.bc438852.svg",ha="/assets/idea2hover.a6128be5.svg",fa="/assets/idea3.25af50f3.svg",ga="/assets/idea3hover.8a33474f.svg",$a="/assets/idea4.e5776d4a.svg",ba="/assets/idea4hover.06032f95.svg";const ya={components:{}},wa=k('<div id="Background" data-v-d4484eea><div id="UpperPart" data-v-d4484eea><h1 id="AboveTitle" data-v-d4484eea> \u5173 <span style="color:#b63f34;" data-v-d4484eea>\u4E8E</span>\u6211\u4EEC </h1></div></div><div id="BodyPart" data-v-d4484eea><div id="LeftPart" data-v-d4484eea><div id="Text" data-v-d4484eea><p class="UnderLine" data-v-d4484eea>\u6D4B\u8BD5\u6587\u672C\u6D4B\u8BD5\u6587\u672C</p><p class="UnderLine" data-v-d4484eea>\u6D4B\u8BD5\u6587\u672C\u6D4B\u8BD5\u6587\u672C</p><p class="UnderLine" data-v-d4484eea>\u6D4B\u8BD5\u6587\u672C\u6D4B\u8BD5\u6587\u672C</p><br data-v-d4484eea></div><div id="Slogan" data-v-d4484eea><p style="color:#b63f34;margin:2px;" data-v-d4484eea>BETTER</p><p style="color:#b63f34;margin:2px;" data-v-d4484eea>ME</p><p style="color:#2464a4;margin:2px;" data-v-d4484eea>BETTER</p><p style="color:#2464a4;margin:2px;" data-v-d4484eea>WORLD</p></div></div><div id="RightPart" data-v-d4484eea><div id="idea1" data-v-d4484eea><img src="'+va+'" class="idea_b" data-v-d4484eea><img src="'+pa+'" class="idea_child" data-v-d4484eea></div><div id="idea2" data-v-d4484eea><img src="'+ma+'" class="idea_b" data-v-d4484eea><img src="'+ha+'" class="idea_child" data-v-d4484eea></div><div id="idea3" data-v-d4484eea><img src="'+fa+'" class="idea_b" data-v-d4484eea><img src="'+ga+'" class="idea_child" data-v-d4484eea></div><div id="idea4" data-v-d4484eea><img src="'+$a+'" class="idea_b" data-v-d4484eea><img src="'+ba+'" class="idea_child" data-v-d4484eea></div></div></div>',2),xa=[wa];function ka(t,i,s,o,a,n){return c(),_("div",null,xa)}var Ia=p(ya,[["render",ka],["__scopeId","data-v-d4484eea"]]);const Sa={name:"Err404"};function La(t,i,s,o,a,n){return c(),_("h1",null,"404 Not Found!")}var Ea=p(Sa,[["render",La]]);const Aa={name:"Err5xx"};function Ca(t,i,s,o,a,n){return c(),_("h1",null,"5xx Error!")}var Na=p(Aa,[["render",Ca]]);const za={class:"previewModal"},Ha={class:"grid"},Ra=["src"],Pa={props:{images:{type:Array,default:()=>[R,P,B,j,T]}},setup(t){const i=t,s=w(void 0);return(o,a)=>(c(),_("div",null,[Z(e("div",za,null,512),[[Q,s.value!==void 0]]),e("div",Ha,[(c(!0),_(x,null,N(i.images,n=>(c(),_("img",{class:"item",src:n},null,8,Ra))),256))])]))}};var Ba=p(Pa,[["__scopeId","data-v-f18ebca8"]]);const ja={},Ta=t=>(h("data-v-5037543d"),t=t(),f(),t),qa=Ta(()=>e("div",{id:"head_pic"},null,-1)),Ja={class:"main"},Oa={id:"page_title",class:"shadow"},Ua=k('<div id="content" data-v-5037543d><div class="title" data-aos="zoom-in" data-aos-duration="600" data-v-5037543d>\u4E00\u4E9B\u6807\u9898</div><div class="text" data-aos="zoom-in" data-aos-duration="600" data-v-5037543d>\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57</div><div class="text" data-aos="zoom-in" data-aos-duration="600" data-v-5037543d>\u4E00\u4E9B\u6587\u5B57</div><div class="title" data-aos="zoom-in" data-aos-duration="600" data-v-5037543d>\u4E00\u4E9B\u6807\u9898</div><div class="text" data-aos="zoom-in" data-aos-duration="600" data-v-5037543d>\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57\u4E00\u4E9B\u6587\u5B57</div><div class="text" data-aos="zoom-in" data-aos-duration="600" data-v-5037543d>\u4E00\u4E9B\u6587\u5B57</div></div>',1);function Va(t,i){return c(),_("div",null,[qa,e("div",Ja,[e("div",Oa,l(t.$t("contact.title")),1),Ua])])}var Ma=p(ja,[["render",Va],["__scopeId","data-v-5037543d"]]);const Da=ee({history:te(),routes:[{path:"/",name:"Index",component:Mt},{path:"/news",name:"News",component:ua},{path:"/about",name:"About",component:Ia},{path:"/gallery",name:"Gallery",component:Ba},{path:"/*",name:"Err404",component:Ea},{path:"/error/500",name:"Err5xx",component:Na},{path:"/contact",name:"Contact",component:Ma}]});Promise.all([H(()=>import("./en-us.7bd71e26.js"),[]),H(()=>import("./zh-cn.e88f6c0c.js"),[])]).then(t=>{const i={"en-US":t[0],"zh-CN":t[1]},s=ae({locale:localStorage.getItem("lang"),fallbackLocal:"en",messages:i}),o=se(He);o.use(Da).use(s).use(oe.init()),o.mount("#app")});
