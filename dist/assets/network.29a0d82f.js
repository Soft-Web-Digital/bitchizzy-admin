import"./asset.ef81bb47.js";import{u as z}from"./networks.88acec9b.js";import{a as se,s as ne,r as k,h as de,o as u,j as $,w as t,b as e,e as l,D as I,a2 as q,a7 as v,a6 as h,H as Y,u as a,ax as ue,c as _,k as F,F as L,x as P,av as O,ay as W,az as re,a9 as E,au as H,t as d,a1 as ie,T as G,as as ce,aA as J,a8 as _e,I as fe,m as g,y as me,N as ge,q as ve,V as he,p as A,v as B,O as we,P as pe,a3 as ye,a4 as ke}from"./index.09a9e36e.js";import{_ as Ve}from"./plugin-vue_export-helper.21dcd24c.js";import{u as xe}from"./index.11c402df.js";const c=S=>(ye("data-v-abc81118"),S=S(),ke(),S),Ne={class:"w-full d-flex justify-space-between my-3"},be=c(()=>l("h2",null,"Networks",-1)),Ce=g(" Create New Network "),je=g("Search"),Te={key:0},$e=g(" View Network "),Ie=g(" Edit Network "),Se=g(" Restore Network "),De=g(" Delete Network "),Me={key:0,class:"font-weight-bold text-center my-3"},Ue={class:"text-h5 font-weight-bold pa-7"},Ae=g(" Close "),Be=c(()=>l("h3",{class:"text-center my-4"},"Network Details",-1)),Re={class:"d-flex flex-column"},qe={class:"d-flex flex-column w-full"},Fe=c(()=>l("h4",{class:"text-grey font-weight-light"},"Name",-1)),Le={class:"my-1 font-weight-bold"},Pe={class:"my-1"},ze=c(()=>l("h4",{class:"text-grey font-weight-light"},"Wallet address",-1)),Ye={class:"my-1 font-weight-bold"},Oe={class:"my-1"},We=c(()=>l("h4",{class:"text-grey font-weight-light"},"Memo",-1)),Ee={class:"my-1 font-weight-bold"},He={key:0,class:"mt-8"},Ge=c(()=>l("h3",{class:"text-grey font-weight-bold"}," Asset(s) that belong to this Network: ",-1)),Je={class:"d-flex align-center justify-space-between flex-wrap w-full"},Ke=c(()=>l("h4",{class:"text-grey font-weight-light"},"Name",-1)),Qe={class:"d-flex align-center"},Xe={class:"ml-3 font-weight-bold"},Ze=c(()=>l("h4",{class:"text-grey font-weight-light"},"Code",-1)),et={class:"my-3 font-weight-bold"},tt=c(()=>l("h4",{class:"text-grey font-weight-light"},"Buy Rate",-1)),lt={class:"my-3 font-weight-bold"},at=c(()=>l("h4",{class:"text-grey grey-darken-4 font-weight-light"}," Sell Rate ",-1)),ot={class:"my-3 font-weight-bold"},st={key:1,class:"text-center py-5"},nt=se({__name:"network",setup(S){const{getAllNetwork:V,createNetworks:K,editNetworks:Q,deleteNetworks:X,restoreNetworks:Z,getSingleNetwork:ee}=z(),{networks:D,loading:w,dialog:p,network:i,dialog2:M,single_network:x}=ne(z()),te=k([{title:"No."},{title:"Name"},{title:"Wallet address"},{title:"Asset count"},{title:"Created at"},{title:"Actions"}]),N=k(1);de(async()=>{await V(N.value,f.value)});const R=k(!1),U=k("Create Network"),le=b=>{i.value=Object.assign({},b),U.value="Update Network",p.value=!0,R.value=!0},ae=b=>{i.value=Object.assign({},{name:"",wallet_address:""}),U.value="Create Network",p.value=!1,R.value=!1},f=k(""),oe=k(!1);return(b,o)=>(u(),$(v,null,{default:t(()=>[e(h,{cols:"12",sm:"12",class:"mt-4"},{default:t(()=>[l("div",Ne,[be,e(I,{"prepend-icon":"mdi-plus",onClick:o[0]||(o[0]=n=>p.value=!0),variant:"flat",color:"secondary"},{default:t(()=>[Ce]),_:1})]),e(q,{class:"pa-5"},{default:t(()=>{var n,C;return[e(v,null,{default:t(()=>[e(h,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(Y,{density:"compact",variant:"outlined",label:"Network name*",modelValue:f.value,"onUpdate:modelValue":o[1]||(o[1]=m=>f.value=m),required:""},null,8,["modelValue"])]),_:1}),e(h,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(I,{onClick:o[2]||(o[2]=m=>f.value!==""?a(V)(N.value,f.value):null),loading:oe.value,color:"secondary",block:""},{default:t(()=>[je]),_:1},8,["loading"])]),_:1})]),_:1}),e(ue,null,{default:t(()=>{var m,j;return[l("thead",null,[l("tr",null,[(u(!0),_(L,null,F(te.value,(s,y)=>(u(),_("th",{key:y,class:"text-left"},d(s.title),1))),128))])]),((j=(m=a(D))==null?void 0:m.data)==null?void 0:j.length)>0&&a(w)==!1?(u(),_("tbody",Te,[(u(!0),_(L,null,F(a(D).data,(s,y)=>{var r;return u(),_("tr",{key:s.id},[l("td",null,d(y+1),1),l("td",{class:me({"font-weight-bold":s.account_name==null})},d((r=s.name)!=null?r:"No name"),3),l("td",null,d(s.wallet_address),1),l("td",null,d(s.assets_count),1),l("td",null,d(a(xe)(s==null?void 0:s.created_at,"DD, MMMM-YYYY").value),1),l("td",null,[e(v,{justify:"center"},{default:t(()=>[e(ge,{transition:"scroll-x-transition"},{activator:t(({props:T})=>[e(I,ve({text:"",icon:"mdi-dots-vertical",color:"transparent",class:"ma-2"},T),null,16)]),default:t(()=>[e(he,null,{default:t(()=>[e(A,{onClick:T=>{M.value=!0,a(ee)(s==null?void 0:s.id)},link:"",color:"secondary"},{default:t(()=>[e(B,null,{default:t(()=>[$e]),_:1})]),_:2},1032,["onClick"]),e(A,{onClick:T=>le(s),link:"",color:"secondary"},{default:t(()=>[e(B,null,{default:t(()=>[Ie]),_:1})]),_:2},1032,["onClick"]),e(A,{onClick:T=>a(Z)(s==null?void 0:s.id),link:"",color:"secondary"},{default:t(()=>[e(B,null,{default:t(()=>[Se]),_:1})]),_:2},1032,["onClick"]),e(A,{onClick:T=>a(X)(s==null?void 0:s.id),link:"",color:"secondary"},{default:t(()=>[e(B,null,{default:t(()=>[De]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)])])}),128))])):P("",!0)]}),_:1}),((C=(n=a(D))==null?void 0:n.data)==null?void 0:C.length)<=0&&a(w)==!1?(u(),_("p",Me," No data found ")):P("",!0),a(w)==!0?(u(),$(O,{key:1,class:"align-center justify-center w-100 my-5"},{default:t(()=>[e(W,{indeterminate:""})]),_:1})):P("",!0)]}),_:1}),e(re,{modelValue:b.page_no,"onUpdate:modelValue":[o[3]||(o[3]=n=>b.page_no=n),o[6]||(o[6]=n=>a(V)(N.value,f.value))],length:a(D).last_page,onNext:o[4]||(o[4]=n=>a(V)(N.value,f.value)),onPrev:o[5]||(o[5]=n=>a(V)(N.value,f.value)),"active-color":"red",start:1,variant:"flat",class:"mt-5",color:"bg-secondary",rounded:"circle"},null,8,["modelValue","length"])]),_:1}),e(v,{justify:"center"},{default:t(()=>[e(E,{modelValue:a(p),"onUpdate:modelValue":o[11]||(o[11]=n=>H(p)?p.value=n:null),"max-width":"500px"},{default:t(()=>[e(q,{loading:a(w)},{default:t(()=>[l("h3",Ue,d(U.value),1),e(ie,null,{default:t(()=>[e(G,null,{default:t(()=>[e(ce,null,{default:t(()=>[e(v,null,{default:t(()=>[e(h,{cols:"12",sm:"6",md:"12"},{default:t(()=>[e(Y,{modelValue:a(i).name,"onUpdate:modelValue":o[7]||(o[7]=n=>a(i).name=n),variant:"outlined",label:"Network name*",required:""},null,8,["modelValue"])]),_:1}),e(h,{cols:"12",sm:"6",md:"12"},{default:t(()=>[e(J,{modelValue:a(i).wallet_address,"onUpdate:modelValue":o[8]||(o[8]=n=>a(i).wallet_address=n),variant:"outlined",label:"Withdrawal address*",required:""},null,8,["modelValue"])]),_:1}),e(h,{cols:"12",sm:"6",md:"12"},{default:t(()=>[e(J,{modelValue:a(i).memo,"onUpdate:modelValue":o[9]||(o[9]=n=>a(i).memo=n),variant:"outlined",label:"Memo",required:""},null,8,["modelValue"])]),_:1})]),_:1}),e(_e,null,{default:t(()=>[e(fe),e(I,{color:"secondary",class:"px-7",variant:"outlined",onClick:ae},{default:t(()=>[Ae]),_:1}),e(I,{color:"secondary",class:"px-12",onClick:o[10]||(o[10]=n=>R.value==!0?a(Q)(a(i)):a(K)(a(i))),loading:a(w),variant:"flat"},{default:t(()=>[g(d(U.value),1)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["loading"])]),_:1},8,["modelValue"])]),_:1}),e(v,{justify:"center"},{default:t(()=>[e(E,{modelValue:a(M),"onUpdate:modelValue":o[12]||(o[12]=n=>H(M)?M.value=n:null),"max-width":"500px"},{default:t(()=>[e(q,null,{default:t(()=>[Be,a(w)==!0?(u(),$(O,{key:0,class:"align-center justify-center w-100 my-5"},{default:t(()=>[e(W,{indeterminate:""})]),_:1})):(u(),$(G,{key:1,class:"fill-height"},{default:t(()=>{var n,C,m,j,s;return[l("div",Re,[l("div",qe,[l("div",null,[Fe,l("p",Le,d((n=a(x))==null?void 0:n.name),1)]),l("div",Pe,[ze,l("p",Ye,d((C=a(x))==null?void 0:C.wallet_address),1)]),l("div",Oe,[We,l("p",Ee,d(((m=a(x))==null?void 0:m.memo)||"Null"),1)])]),((s=(j=a(x))==null?void 0:j.assets)==null?void 0:s.length)>0?(u(),_("div",He,[Ge,e(v,{class:"my-1"},{default:t(()=>{var y;return[(u(!0),_(L,null,F((y=a(x))==null?void 0:y.assets,r=>(u(),$(h,{cols:"12",sm:"12",key:r==null?void 0:r.id,class:"py-0 my-2"},{default:t(()=>[l("div",Je,[l("div",null,[Ke,l("div",Qe,[e(we,{size:"50px"},{default:t(()=>[e(pe,{class:"img-fluid rounded-circle img-size",cover:"",src:r==null?void 0:r.icon},null,8,["src"])]),_:2},1024),l("p",Xe,d(r.name),1)])]),l("div",null,[Ze,l("p",et,d(r.code),1)]),l("div",null,[tt,l("p",lt,d(r.buy_rate),1)]),l("div",null,[at,l("p",ot,d(r.sell_rate),1)])])]),_:2},1024))),128))]}),_:1})])):(u(),_("p",st,"This network has no related asset"))])]}),_:1}))]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}});var _t=Ve(nt,[["__scopeId","data-v-abc81118"]]);export{_t as default};