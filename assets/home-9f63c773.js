import{_ as l,r as n,u as i,o as g,c as m,a as u}from"./index-921ca155.js";const p=""+new URL("bigBg-19637b33.png",import.meta.url).href,f=""+new URL("hudie-54ff3691.png",import.meta.url).href,h=""+new URL("left-37d1632c.png",import.meta.url).href,b=""+new URL("text-08b4b1f4.png",import.meta.url).href,d=""+new URL("textLight-b9a0dc2a.png",import.meta.url).href,y=""+new URL("hudie-54ff3691.png",import.meta.url).href;const v={class:"container"},x={__name:"home",setup(L){const o=n(),t=n("");t.value=s("text");const r=()=>{const e=document.querySelector(".img");e.style.transform="scaleX(-1)",e.style.transform="scaleX(0.4)",t.value=s("textLight")},a=()=>{const e=document.querySelector(".img");e.style.transform="scaleX(1)",t.value=s("text")},_=i(),c=()=>{const e=o.value;e.style.transition="top 1.5s",e.style.top="-150px",_.push("/index")};function s(e){return new URL(Object.assign({"../assets/img/bigBg.png":p,"../assets/img/hudie.png":f,"../assets/img/indexBtn.png":h,"../assets/img/text.png":b,"../assets/img/textLight.png":d})[`../assets/img/${e}.png`],self.location).href}return(e,R)=>(g(),m("div",v,[u("img",{src:y,alt:"蝴蝶",class:"img",onMouseover:r,onMouseout:a,onClick:c,ref_key:"butterflyRef",ref:o},null,544)]))}},w=l(x,[["__scopeId","data-v-2e3b38da"]]);export{w as default};