import './polyfills.server.mjs';
import{c as d}from"./chunk-IZALSFEI.mjs";import{Ga as f,Ha as l,Ia as u,Ma as m,V as c,i as r,o as a,p as i}from"./chunk-PLSFD5I6.mjs";var g=[{path:"login",loadChildren:()=>import("./chunk-T6OGIZEW.mjs").then(o=>o.LoginModule)},{path:"portal",loadChildren:()=>import("./chunk-G4QUYOOP.mjs").then(o=>o.HomeModule)},{path:"",redirectTo:"/login",pathMatch:"full"},{path:"**",redirectTo:"/login",pathMatch:"full"}],h=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[m.forRoot(g,{useHash:!0}),m]});let o=t;return o})();var s=(()=>{let t=class t{constructor(){this.title="demoV1.0"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,C){e&1&&c(0,"router-outlet")},dependencies:[u]});let o=t;return o})();var M=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t,bootstrap:[s]}),t.\u0275inj=r({providers:[l()],imports:[f,h]});let o=t;return o})();var y=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t,bootstrap:[s]}),t.\u0275inj=r({imports:[M,d]});let o=t;return o})();export{y as a};
