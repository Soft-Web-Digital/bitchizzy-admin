import{d as et,f as S,Y as $,aK as st,aL as lt,a0 as ot,a as dt,s as rt,B as Y,r as V,h as nt,as as it,o as m,j as P,w as e,b as t,a7 as A,a6 as v,a2 as F,e as a,O as C,t as o,u as l,D as U,H as z,aj as ct,aq as ut,ak as R,at as _t,c as h,k as q,F as J,x as j,ar as ft,au as mt,m as y,i as ht,J as pt,K as vt,N as yt,q as gt,V as bt,p as xt,v as wt,a3 as Tt,a4 as Vt}from"./index.768fb5ed.js";import{_ as kt}from"./plugin-vue_export-helper.21dcd24c.js";import{u as K}from"./index.bb23e1de.js";const O=et("trader",{state:()=>({loading:!1,asset_traders:[],giftcard_traders:[],page:1,tab:0,status:"",total_giftcard_traders:0,total_giftcard_traded:0,total_asset_traded:0,total_asset_traders:0}),getters:{allTransactions:d=>d.all_transactions,getIds:d=>d.asset.networks.map(n=>n)},actions:{async getAllAssetTraders(d=20,n="",c=""){const u=S();this.loading=!0;try{await $.get(st+"?limit="+d+"&from="+n+"&to="+c,{headers:{Accept:"application/json",Authorization:`Bearer ${u.token}`}}).then(i=>{this.loading=!1,this.asset_traders=i.data.data.users,this.total_asset_traded=i.data.data.total_traded,this.total_asset_traders=i.data.data.total_trades})}catch{this.loading=!1}},async getAllGiftcardTraders(d=20,n="",c=""){const u=S();this.loading=!0;try{await $.get(lt+"?limit="+d+"&from="+n+"&to="+c,{headers:{Accept:"application/json",Authorization:`Bearer ${u.token}`}}).then(i=>{this.loading=!1,this.giftcard_traders=i.data.data.users,this.total_giftcard_traded=i.data.data.total_traded_ngn,this.total_giftcard_traders=i.data.data.total_trades})}catch{this.loading=!1}},async getAllAssetTransactionByDate(d){const n=S(),{notify:c}=ot();this.loading=!0;try{await $.get(asset+"?filter[creation_date]="+d+"&include=asset",{headers:{Accept:"application/json",Authorization:`Bearer ${n.token}`}}).then(u=>{this.loading=!1,c({title:"Successful",text:u.data.message,type:"success"}),this.all_transactions=u.data.data.asset_transactions})}catch{this.loading=!1}}}});const g=d=>(Tt("data-v-2bad9253"),d=d(),Vt(),d),At=g(()=>a("h2",{class:"my-3"},"Top Traders",-1)),Ft={class:"ml-16 d-flex align-center justify-space-between w-100"},Ct={class:"d-flex align-start justify-start flex-column w-100"},jt={class:"pl-3 my-5"},Dt={class:"mb-2"},Nt=g(()=>a("span",null,"Total Giftcards Traded",-1)),It={class:"d-flex align-start justify-start flex-column w-100 flex-grow-1"},Bt={class:"pl-3 my-5"},St={class:"mb-2"},$t=g(()=>a("span",null,"Top Giftcards Trades",-1)),Ut={class:"ml-16 d-flex align-center justify-space-between w-100"},zt={class:"d-flex align-start justify-start flex-column w-100"},Lt={class:"pl-3 my-5"},Mt={class:"mb-2"},Et=g(()=>a("span",null,"Total Assets Traded",-1)),Gt={class:"d-flex align-start justify-start flex-column w-100 flex-grow-1"},Yt={class:"pl-3 my-5"},Pt={class:"mb-2"},Rt=g(()=>a("span",null,"Top Assets Trades",-1)),qt={class:"d-flex align-center justify-space-between w-100"},Jt=g(()=>a("h4",null,"Filter Options:",-1)),Kt=y("Reset"),Ot=y("Filter"),Ht=y("Giftcards"),Qt=y("Assets"),Wt={key:0},Xt=["onClick"],Zt={key:0},ta=y(" View User "),aa={key:0,class:"font-weight-bold text-center my-3"},ea=dt({__name:"all-transactions",setup(d){const{getAllAssetTraders:n,getAllGiftcardTraders:c}=O(),{asset_traders:u,giftcard_traders:i,loading:D,tab:_,total_asset_traded:H,total_asset_traders:Q,total_giftcard_traded:W,total_giftcard_traders:X}=rt(O()),Z=Y(()=>_.value!==0),tt=V([{title:"No.",hidden:!1},{title:"Full name",hidden:!1},{title:"Email",hidden:!1},{title:"Phone",hidden:!1},{title:"Total trade",hidden:!1},{title:"Total amount traded",hidden:Z},{title:"Total Payable amount",hidden:!1},{title:"Date and Time Joined",hidden:!1},{title:"Actions",hidden:!1}]),b=V(20),x=V(""),w=V(""),L=async()=>{await n(),await c()};let M=V(null);nt(()=>{L(),M.value=setInterval(L,12e4)});const at=async()=>{b.value=20,x.value="",w.value="",await n(),await c()};it(()=>{clearInterval(M.value)});const N=Y(()=>_.value===0?i:u),T=I=>new Intl.NumberFormat().format(I);return(I,r)=>{const k=ht("vue-feather");return m(),P(A,null,{default:e(()=>[t(v,{cols:"12",sm:"12",class:"mt-4"},{default:e(()=>[At,t(A,{class:"my-3"},{default:e(()=>[t(v,{cols:"12",sm:"6",md:"6"},{default:e(()=>[t(F,{elevation:"0",class:"py-4 px-2"},{default:e(()=>[a("div",Ft,[a("div",Ct,[t(C,{color:"#e5fafb",size:"x-large"},{default:e(()=>[t(k,{type:"check-circle",class:"text-dark text-success"})]),_:1}),a("div",jt,[a("h2",Dt," \u20A6\u200E"+o(T(l(W)||0)||0),1),Nt])]),a("div",It,[t(C,{color:"#FFF9C4",size:"x-large"},{default:e(()=>[t(k,{type:"bar-chart",class:"text-dark text-primary"})]),_:1}),a("div",Bt,[a("h2",St,o(l(X)||0),1),$t])])])]),_:1})]),_:1}),t(v,{cols:"12",sm:"6",md:"6"},{default:e(()=>[t(F,{elevation:"0",class:"py-4 px-2"},{default:e(()=>[a("div",Ut,[a("div",zt,[t(C,{color:"#e5fafb",size:"x-large"},{default:e(()=>[t(k,{type:"check-circle",class:"text-dark text-success"})]),_:1}),a("div",Lt,[a("h2",Mt," \u20A6\u200E"+o(T(l(H)||0)||0),1),Et])]),a("div",Gt,[t(C,{color:"#FFF9C4",size:"x-large"},{default:e(()=>[t(k,{type:"bar-chart",class:"text-dark text-primary"})]),_:1}),a("div",Yt,[a("h2",Pt,o(l(Q)||0),1),Rt])])])]),_:1})]),_:1})]),_:1}),t(F,{flat:"",rounded:"0",elevation:"0",class:"my-5 pa-4"},{default:e(()=>[a("div",qt,[Jt,a("div",null,[t(U,{onClick:at,width:"200px",class:"mr-4"},{default:e(()=>[Kt]),_:1}),t(U,{onClick:r[0]||(r[0]=f=>l(_)===0?l(c)(b.value,x.value,w.value):l(n)(b.value,x.value,w.value)),width:"200px",color:"secondary"},{default:e(()=>[Ot]),_:1})])]),t(A,{class:"mt-3"},{default:e(()=>[t(v,{cols:"12",sm:"6",md:"4"},{default:e(()=>[t(z,{label:"Filter by limit",density:"compact",type:"number",modelValue:b.value,"onUpdate:modelValue":r[1]||(r[1]=f=>b.value=f),variant:"outlined"},null,8,["modelValue"])]),_:1}),t(v,{cols:"12",sm:"6",md:"4"},{default:e(()=>[t(z,{label:"Filter by date created",density:"compact",modelValue:x.value,"onUpdate:modelValue":r[2]||(r[2]=f=>x.value=f),type:"datetime-local",variant:"outlined"},null,8,["modelValue"])]),_:1}),t(v,{cols:"12",sm:"6",md:"4"},{default:e(()=>[t(z,{label:"Filter by date created",density:"compact",modelValue:w.value,"onUpdate:modelValue":r[3]||(r[3]=f=>w.value=f),type:"datetime-local",variant:"outlined"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(F,{class:"pa-5"},{default:e(()=>{var f;return[t(ct,{modelValue:l(_),"onUpdate:modelValue":r[6]||(r[6]=p=>ut(_)?_.value=p:null),"bg-color":"none",class:"mb-5 border-bottom"},{default:e(()=>[t(R,{onClick:r[4]||(r[4]=p=>l(c)())},{default:e(()=>[Ht]),_:1}),t(R,{onClick:r[5]||(r[5]=p=>l(n)())},{default:e(()=>[Qt]),_:1})]),_:1},8,["modelValue"]),t(_t,null,{default:e(()=>{var p;return[a("thead",null,[a("tr",null,[(m(!0),h(J,null,q(tt.value,(s,B)=>pt((m(),h("th",{key:B,class:"text-left"},[a("p",null,o(s.title),1)])),[[vt,!s.hidden]])),128))])]),((p=l(N).value)==null?void 0:p.length)>0&&l(D)==!1?(m(),h("tbody",Wt,[(m(!0),h(J,null,q(l(N).value,(s,B)=>{var E;return m(),h("tr",{key:s.id},[a("td",null,o(B+1),1),a("td",{class:"font-weight-bold username",onClick:G=>I.$router.push({name:"UserDetails",params:{id:s.id}})},o((E=s.firstname)!=null?E:"No name")+" "+o(s.lastname),9,Xt),a("td",null,o(s.email),1),a("td",null,"0"+o(s.phone_number),1),a("td",null,o(l(_)===0?s.giftcard_transactions_count:s.asset_transactions_count),1),l(_)===0?(m(),h("td",Zt," $"+o(T(Number(s.giftcard_transactions_sum_amount)||0)),1)):j("",!0),a("td",null," \u20A6\u200E"+o(l(_)===0?T(Number(s.giftcard_transactions_sum_payable_amount)||0):T(Number(s.asset_transactions_sum_payable_amount)||0)),1),a("td",null,[y(o(l(K)(s==null?void 0:s.created_at,"DD, MMMM-YYYY").value)+" ",1),a("div",null,o(l(K)(s==null?void 0:s.created_at,"hh:mm a").value),1)]),a("td",null,[t(A,{justify:"center"},{default:e(()=>[t(yt,{transition:"scroll-y-transition"},{activator:e(({props:G})=>[t(U,gt({text:"",icon:"mdi-dots-vertical",color:"transparent",class:"ma-2"},G),null,16)]),default:e(()=>[t(bt,null,{default:e(()=>[t(xt,{to:{name:"UserDetails",params:{id:s.id}},link:"",color:"secondary"},{default:e(()=>[t(wt,null,{default:e(()=>[ta]),_:1})]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024)]),_:2},1024)])])}),128))])):j("",!0)]}),_:1}),((f=l(N).value)==null?void 0:f.length)<=0&&l(D)==!1?(m(),h("p",aa," No data found ")):j("",!0),l(D)==!0?(m(),P(ft,{key:1,class:"align-center justify-center w-100 my-5"},{default:e(()=>[t(mt,{indeterminate:""})]),_:1})):j("",!0)]}),_:1})]),_:1})]),_:1})}}});var da=kt(ea,[["__scopeId","data-v-2bad9253"]]);export{da as default};
