import{m as t}from"./index-f54dfb05.js";const i=t("navBar",{state:()=>({isActive:"/pageOne",num:"1",cardList:[]}),actions:{reloadIsActive(c){this.isActive=c,localStorage.setItem("isActive",c)},numChange(c){try{if(localStorage.getItem(`${c}List`)!==null){this.cardList=localStorage.getItem(`${c}List`).split(","),this.num=c,localStorage.setItem("num",c);return}c==="1"?this.cardList=["c1_back","c2_back","c3_back","c4_back","c5_back"]:c==="2"?this.cardList=["c6_back","c7_back","c8_back","c9_back","c10_back","c11_back","c12_back"]:c==="3"&&(this.cardList=["c13_back","c14_back","c15_back","c16_back","c17_back","c18_back","c19_back"]),this.num=c,localStorage.setItem("num",c)}catch(a){c==="1"?this.cardList=["c1_back","c2_back","c3_back","c4_back","c5_back"]:c==="2"?this.cardList=["c6_back","c7_back","c8_back","c9_back","c10_back","c11_back","c12_back"]:c==="3"&&(this.cardList=["c13_back","c14_back","c15_back","c16_back","c17_back","c18_back","c19_back"]),this.num=c,localStorage.setItem("num",c)}},initStore(){this.isActive=localStorage.getItem("isActive")?localStorage.getItem("isActive"):this.isActive,this.num=localStorage.getItem("num")?localStorage.getItem("num"):this.num,this.cardList=localStorage.getItem(`${this.num}List`)?localStorage.getItem(`${this.num}List`).split(","):this.cardList}}});export{i as u};
