import{a as v,s as w,r as B,B as x,h as P,o as r,j as d,w as s,b as a,ai as T,D as p,a7 as F,a6 as V,as as N,H as U,u as e,aA as A,av as S,ay as j,c as D,k as L,F as $,a2 as E,T as H,m as i,e as _,b6 as I}from"./index.09a9e36e.js";import{u as f}from"./roles-permissions.df790ef0.js";import"./user.7809a3f7.js";import"./axios-services.17ccf49f.js";import"./filedownloader.f3cc1d55.js";import"./country.9f13e2ad.js";const M=i("mdi-arrow-left"),q=i(" Back"),z=_("h2",null,"Create role",-1),G=i("Submit"),J=_("h3",null,"Select permissions",-1),le=v({__name:"create-role",setup(K){const{getAllRoles:k,getAllPermissions:y,createRole:b,updateRole:C,deleteRole:O}=f(),{roles:Q,permissions:u,loading:c,dialog:W,role:o}=w(f());B(!1);const g=x(()=>!u.value.some(t=>t.id===!0)),h=n=>{o.value.permission_id.push(n)};return P(async()=>{await k(),await y()}),(n,t)=>(r(),d(H,null,{default:s(()=>[a(p,{color:"",to:{name:"RolesandPermissions"},class:"my-3"},{default:s(()=>[a(T,{left:"",class:"mr-4"},{default:s(()=>[M]),_:1}),q]),_:1}),a(E,{class:"pa-6"},{default:s(()=>[z,a(F,{align:"start"},{default:s(()=>[a(V,{cols:"12",sm:"6"},{default:s(()=>[a(N,{class:"mt-8 py-8"},{default:s(()=>[a(U,{modelValue:e(o).name,"onUpdate:modelValue":t[0]||(t[0]=l=>e(o).name=l),label:"Name",variant:"outlined"},null,8,["modelValue"]),a(A,{modelValue:e(o).description,"onUpdate:modelValue":t[1]||(t[1]=l=>e(o).description=l),label:"Description",variant:"outlined"},null,8,["modelValue"]),a(p,{loading:e(c),color:"secondary",block:"",disabled:e(g),onClick:t[2]||(t[2]=l=>n.edit==!0?e(C)(e(o)):e(b)(e(o)))},{default:s(()=>[G]),_:1},8,["loading","disabled"])]),_:1})]),_:1}),a(V,{class:"mt-12",cols:"12",sm:"6"},{default:s(()=>[J,e(c)==!0?(r(),d(S,{key:0,class:"align-center justify-center w-100 my-5"},{default:s(()=>[a(j,{indeterminate:""})]),_:1})):(r(!0),D($,{key:1},L(e(u),(l,R)=>(r(),d(I,{density:"compact",label:l.description,key:R,class:"py-0 my-0",onClick:m=>h(l.id),modelValue:l.id,"onUpdate:modelValue":m=>l.id=m},null,8,["label","onClick","modelValue","onUpdate:modelValue"]))),128))]),_:1})]),_:1})]),_:1})]),_:1}))}});export{le as default};
