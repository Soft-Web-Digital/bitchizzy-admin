import{a as y,f as p,s as k,r as s,o as C,j as h,w as t,b as a,a6 as u,T as q,e as n,a7 as c,as as R,C as T,H as f,D as B,u as v,m as F,aQ as S}from"./index.09a9e36e.js";import{a as j}from"./LogoDark.b018cf28.js";const E={class:"pa-7 pa-sm-12"},L=n("h2",{class:"font-weight-bold mt-4 text--darken-2"},"Sign in",-1),N=F("Sign In"),I=y({__name:"FullLogin",setup(P){const{ksbTechLogin:g}=p(),V=S(),{loginLoading:x}=k(p());s(!1);const m=s(!0),r=s(!1),i=s(""),d=s(""),w=s([o=>!!o||"Password is required"]),_=s([o=>!!o||"E-mail is required",o=>/.+@.+\..+/.test(o)||"E-mail must be valid"]),b=()=>V.push("/authentication/request-reset-code");return(o,e)=>(C(),h(c,{class:"h-100vh"},{default:t(()=>[a(u,{cols:"12",lg:"5",xl:"6",class:"bg-info d-none d-md-flex align-center justify-center"}),a(u,{cols:"12",lg:"7",xl:"6",class:"d-flex align-center"},{default:t(()=>[a(q,null,{default:t(()=>[n("div",E,[a(c,null,{default:t(()=>[a(u,{cols:"12",lg:"9",xl:"6"},{default:t(()=>[a(j),L,a(R,{onSubmit:e[3]||(e[3]=T(l=>v(g)({email:d.value,password:i.value}),["prevent"])),"validate-on":"input",ref:"form",modelValue:m.value,"onUpdate:modelValue":e[4]||(e[4]=l=>m.value=l),"lazy-validation":"",class:"mt-7"},{default:t(()=>[a(f,{modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=l=>d.value=l),rules:_.value,label:"Email address",class:"mt-4",required:"",variant:"outlined",type:"email"},null,8,["modelValue","rules"]),a(f,{modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=l=>i.value=l),rules:w.value,label:"Password",required:"","prepend-icon":"","append-inner-icon":r.value?"mdi-eye":"mdi-eye-off","onClick:appendInner":e[2]||(e[2]=l=>r.value=!r.value),type:r.value?"text":"password",variant:"outlined"},null,8,["modelValue","rules","append-inner-icon","type"]),n("div",{class:"d-flex align-end justify-end mb-4 mb-sm-0"},[n("div",{class:"ml-auto"},[n("p",{onClick:b,class:"text-primary text-decoration-none cursor-pointer"}," Forgot password? ")])]),a(B,{color:"primary",type:"submit",loading:v(x),block:"",class:"mr-4 mt-3"},{default:t(()=>[N]),_:1},8,["loading"])]),_:1},8,["modelValue"])]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1}))}});export{I as default};