import{a as W,s as G,f as I,r as d,am as H,h as M,B as C,o as m,j as V,w as o,b as e,an as J,ao as w,a1 as K,ap as Q,aq as v,a7 as X,a6 as Y,e as y,L as Z,O as ee,u as s,P as le,c as F,t as ae,ar as oe,as as B,H as u,at as T,au as se,D as L,T as S,k as te,F as ne,av as de,a2 as re,m as f,a3 as ue,a4 as ie}from"./index.09a9e36e.js";import{_ as me}from"./plugin-vue_export-helper.21dcd24c.js";const A=c=>(ue("data-v-259fce64"),c=c(),ie(),c),fe=A(()=>y("h3",null,"Profile Page",-1)),ce=f("Profile Information"),pe=f("Permissions"),_e=f("Update Password"),Ve={class:"w-100 d-flex align-center justify-center"},we={key:1,class:"text-h5 text-uppercase"},ve=f(" update profile "),ye=A(()=>y("h3",null,"Update password",-1)),ge=f("Update"),be=W({__name:"profile",setup(c){const{user:t,updating:g,twoFALoading:j,twoFA:p,permissions:R}=G(I()),i=I(),b=d(!0),q=d(null),r=H({old_password:"",new_password:"",new_password_confirmation:""}),N=d([n=>!!n||"Password is required"]),O=d([n=>!!n||"Password is required"]),$=d([n=>!!n||"Password is required"]);M(async()=>{await i.GetProfile(),console.log("hello"),await i.getPermissions()});const h=C(()=>t.value.email.slice(0,2)),_=d(null),P=d(null),U=d(""),k=d(""),z=()=>{P.value.click()},D=n=>{k.value=n.target.files[0],U.value=URL.createObjectURL(n.target.files[0])},x=C(()=>t.value.avatar===null?U.value:t.value.avatar);return(n,l)=>(m(),V(S,null,{default:o(()=>[fe,e(re,{class:"my-4 pa-3"},{default:o(()=>[e(J,{modelValue:_.value,"onUpdate:modelValue":l[0]||(l[0]=a=>_.value=a),color:"primary"},{default:o(()=>[e(w,{value:"one"},{default:o(()=>[ce]),_:1}),e(w,{value:"two"},{default:o(()=>[pe]),_:1}),e(w,{value:"three"},{default:o(()=>[_e]),_:1})]),_:1},8,["modelValue"]),e(K,null,{default:o(()=>[e(Q,{modelValue:_.value,"onUpdate:modelValue":l[13]||(l[13]=a=>_.value=a)},{default:o(()=>[e(v,{value:"one"},{default:o(()=>[e(X,{"no-gutters":"",align:"center",justify:"center",class:"my-4 w-100"},{default:o(()=>[e(Y,{cols:"12",sm:"8",lg:"6"},{default:o(()=>[y("div",Ve,[e(Z,{content:"2",color:"secondary","offset-x":"6","offset-y":"76",onClick:z,icon:"mdi-camera",bordered:!0,class:"cursor-pointer"},{default:o(()=>[e(ee,{color:"red",size:80,class:"my-5 position-relative"},{default:o(()=>[s(x)!==""?(m(),V(le,{key:0,src:s(x),cover:"",class:"rounded-circle img-fluid"},null,8,["src"])):(m(),F("span",we,ae(s(h)),1))]),_:1})]),_:1}),e(oe,{ref_key:"file",ref:P,onChange:D,class:"d-none"},null,512)]),e(B,null,{default:o(()=>[e(u,{modelValue:s(t).email,"onUpdate:modelValue":l[1]||(l[1]=a=>s(t).email=a),label:"Email",variant:"outlined",color:"secondary"},null,8,["modelValue"]),e(u,{label:"First name",variant:"outlined",modelValue:s(t).firstname,"onUpdate:modelValue":l[2]||(l[2]=a=>s(t).firstname=a),color:"secondary"},null,8,["modelValue"]),e(u,{label:"Last name",modelValue:s(t).lastname,"onUpdate:modelValue":l[3]||(l[3]=a=>s(t).lastname=a),variant:"outlined",color:"secondary"},null,8,["modelValue"]),e(u,{modelValue:s(t).phone_number,"onUpdate:modelValue":l[4]||(l[4]=a=>s(t).phone_number=a),label:"Phone number",variant:"outlined",color:"secondary"},null,8,["modelValue"]),e(T,{modelValue:s(p),"onUpdate:modelValue":l[5]||(l[5]=a=>se(p)?p.value=a:null),"hide-details":"",onInput:l[6]||(l[6]=a=>s(i).two_Factor_Auth()),inset:"",loading:s(j),color:"secondary",label:`Two factor Authentication: ${s(p).toString()}`},null,8,["modelValue","loading","label"]),e(L,{onClick:l[7]||(l[7]=a=>s(i).updateProfile(k.value)),block:"",loading:s(g),color:"secondary",class:"my-4"},{default:o(()=>[ve]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{value:"two"},{default:o(()=>[e(S,null,{default:o(()=>[(m(!0),F(ne,null,te(s(R),(a,E)=>(m(),V(T,{key:E,label:a.description,disabled:""},null,8,["label"]))),128))]),_:1})]),_:1}),e(v,{value:"three"},{default:o(()=>[e(de,{class:"align-center justify-center w-100 flex-column my-7"},{default:o(()=>[ye,e(B,{ref_key:"form",ref:q,"lazy-validation":"",modelValue:b.value,"onUpdate:modelValue":l[12]||(l[12]=a=>b.value=a),class:"w-100 max-w-md my-6"},{default:o(()=>[e(u,{color:"secondary",rules:N.value,modelValue:r.old_password,"onUpdate:modelValue":l[8]||(l[8]=a=>r.old_password=a),label:"Old Password"},null,8,["rules","modelValue"]),e(u,{color:"secondary",rules:O.value,modelValue:r.new_password,"onUpdate:modelValue":l[9]||(l[9]=a=>r.new_password=a),label:"New Password"},null,8,["rules","modelValue"]),e(u,{color:"secondary",rules:$.value,modelValue:r.new_password_confirmation,"onUpdate:modelValue":l[10]||(l[10]=a=>r.new_password_confirmation=a),label:"Confirm Password"},null,8,["rules","modelValue"]),e(L,{onClick:l[11]||(l[11]=a=>s(i).updatePassword(r)),loading:s(g),block:"",class:"text--white"},{default:o(()=>[ge]),_:1},8,["loading"])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}))}});var ke=me(be,[["__scopeId","data-v-259fce64"]]);export{ke as default};