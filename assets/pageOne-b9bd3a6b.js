import{_ as p,b as m,u as d,s as u,o as b,c as f,a as n,d as i,p as v,e as h}from"./index-8e258256.js";import{u as B}from"./navBar-9cee6dd6.js";const C=""+new URL("bigBg-7466fe4e.png",import.meta.url).href,R=""+new URL("box-4b63cc97.png",import.meta.url).href,w=""+new URL("btnA-fe38f391.png",import.meta.url).href,U=""+new URL("btnB-0dd41e73.png",import.meta.url).href,L=""+new URL("btnC-81b50dcb.png",import.meta.url).href,k=""+new URL("btnD-c989bf35.png",import.meta.url).href,A=""+new URL("left-37d1632c.png",import.meta.url).href;const x=r=>(v("data-v-dd7fc4fd"),r=r(),h(),r),D={class:"container"},I={class:"one"},O=x(()=>n("img",{src:A,alt:"主页按钮",class:"img"},null,-1)),S=["src"],$=["src"],T=["src"],y=["src"],N={__name:"pageOne",setup(r){const c=m(),g=d(),l=B(),{isActive:o}=u(l),a=s=>{c.path!==s&&(o.value=s,g.push(s))};function t(s){return new URL(Object.assign({"../assets/img/one/bigBg.png":C,"../assets/img/one/box.png":R,"../assets/img/one/btnA.png":w,"../assets/img/one/btnB.png":U,"../assets/img/one/btnC.png":L,"../assets/img/one/btnD.png":k})[`../assets/img/one/${s}.png`],self.location).href}return(s,e)=>(b(),f("div",D,[n("div",I,[O,n("img",{src:(i(o)==="/pageOne",t("btnA")),alt:"A",class:"imgA",onClick:e[0]||(e[0]=_=>a("/info"))},null,8,S),n("img",{src:(i(o)==="/pageTwo",t("btnB")),alt:"B",class:"imgB",onClick:e[1]||(e[1]=_=>a("/character"))},null,8,$),n("img",{src:(i(o)==="/pageThree",t("btnC")),alt:"C",class:"imgC",onClick:e[2]||(e[2]=_=>a("/naviative"))},null,8,T),n("img",{src:(i(o)==="/pageFour",t("btnD")),alt:"D",class:"imgD",onClick:e[3]||(e[3]=_=>a("/team"))},null,8,y)])]))}},F=p(N,[["__scopeId","data-v-dd7fc4fd"]]);export{F as default};