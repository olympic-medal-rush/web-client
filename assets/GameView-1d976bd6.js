import{u,a as c,o as d,b as i,c as o,d as t,e,t as s,f as n,F as _,r as m}from"./index-3f360930.js";const p={class:"game"},h=e("h1",null,"Game view",-1),f=e("h3",null,"Scoreboard",-1),k={__name:"GameView",setup(b){const{t:l}=u(),r=c();return d(()=>i.load()),(G,S)=>(o(),t("div",p,[h,e("p",null,s(n(l)("head.title")),1),e("p",null,"Nombre de joueurs : "+s(n(r).playersCounter),1),e("div",null,[f,e("ul",null,[(o(!0),t(_,null,m(n(r).scoreboard,a=>(o(),t("li",{key:a.name},s(a.name)+" => "+s(a.score),1))),128))])])]))}};export{k as default};
