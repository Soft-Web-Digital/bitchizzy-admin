import{u as z}from"./giftcard.06a76fe9.js";import{a as de,s as F,f as ue,r as s,am as ie,a_ as ce,o as u,c as y,b as a,w as l,a6 as pe,a2 as L,a1 as O,an as fe,ao as w,ax as ve,e as r,F as S,k as Q,u as d,x as _,j as C,ay as _e,av as ge,az as Ve,D as P,ai as ye,as as ke,H as Ce,aA as W,ar as H,au as he,a9 as X,aX as be,T as we,a7 as J,m as i,t as c,M as me,N as xe,q as Te,V as Pe,p as D,v as R}from"./index.09a9e36e.js";import{u as K}from"./withdrawals.6484bb7b.js";/* empty css                                                       */import{u as De}from"./index.11c402df.js";import"./filedownloader.f3cc1d55.js";import"./country.9f13e2ad.js";import"./axios-services.17ccf49f.js";const Re=r("h3",{class:"mb-4"},"Giftcard Transactions test",-1),$e=i("All"),Ae=i("Pending"),Ne=i("Approved"),Ue=i("Declined"),Fe=i("Partial"),Le={key:0},Se=["onClick"],qe=i(" Approve giftcard "),Be=i(" Partial approval "),Ee=i(" Decline giftcard "),Ge={key:1,class:"font-weight-bold text-center my-3"},je={class:"mb-3 d-flex justify-space-between"},Ie=r("h3",{class:"text-justify mt-7"},"Partial approval",-1),Me=i("submit"),Ye=r("h3",null,"Decline Request",-1),ze=r("p",null,"Enter Reasons for Declining this withdrawal request",-1),Oe=i("Submit"),ra=de({__name:"test",setup(Qe){const{giftCardTransactionQueries:Z}=z();K(),F(ue()),F(K());const{gift_transactions:We,loading:He,singleGiftCardTransaction:Xe,declining:ee,approving:ae,dialog:f}=F(z()),m=s(!1),$=s(""),x=s(""),le=()=>{f.value==!0&&(f.value=!1),m.value=!0},q=s(""),te=n=>{q.value=n.target.files[0]},k=ie({review_rate:"",review_note:"",review_proof:null}),ne=n=>{k.review_proof=n.target.files[0]},oe=s([{title:"No."},{title:"User name"},{title:"Category"},{title:"Reference No."},{title:"Trade Type."},{title:"Amount"},{title:"Date"},{title:"Status"},{title:"Actions"}]);s({title:"Gift Cards Transactions"}),s([{text:"Cards",disabled:!1,href:"#"},{text:"Transactions",disabled:!0,href:"#"}]);const se=n=>n=="pending"?"yellow-darken-3":n=="approved"?"green lighten-3":n=="declined"?"red lighten-3":n=="partially_approved"?"purple lighten-3":"";s(["Pending","Approved","Declined","Partially_approved"]);const v=s("");s(""),s(["Buy","Sell"]);const g=s(1);s(""),s(""),s("");const A=n=>{g.value=n},B=s(null),re=n=>n==="partially_approved"?"Partial":n,{data:T,isLoading:N,isError:Je,refetch:Ke,isFetching:E}=ce(["transactions",g,v],()=>Z(v.value,g.value),{refetchOnWindowFocus:!1,retry:4,staleTime:1e5,select:n=>{var o,V;let t;return t=(V=(o=n==null?void 0:n.data)==null?void 0:o.data)==null?void 0:V.giftcards,t}}),h=n=>{v.value=n};return(n,t)=>(u(),y(S,null,[Re,a(J,null,{default:l(()=>[a(pe,{cols:"12",sm:"12"},{default:l(()=>{var o;return[a(L,null,{default:l(()=>[a(O,{class:"pa-5"},{default:l(()=>{var V,G;return[a(fe,{modelValue:B.value,"onUpdate:modelValue":t[5]||(t[5]=p=>B.value=p),"bg-color":"none",class:"mb-5 border-bottom"},{default:l(()=>[a(w,{onClick:t[0]||(t[0]=p=>h(v.value=""))},{default:l(()=>[$e]),_:1}),a(w,{onClick:t[1]||(t[1]=p=>h(v.value="pending"))},{default:l(()=>[Ae]),_:1}),a(w,{onClick:t[2]||(t[2]=p=>h(v.value="approved"))},{default:l(()=>[Ne]),_:1}),a(w,{onClick:t[3]||(t[3]=p=>h(v.value="declined"))},{default:l(()=>[Ue]),_:1}),a(w,{onClick:t[4]||(t[4]=p=>h(v.value="partial"))},{default:l(()=>[Fe]),_:1})]),_:1},8,["modelValue"]),a(ve,{class:"mt-5"},{default:l(()=>{var p,j,I;return[r("thead",null,[r("tr",null,[(u(!0),y(S,null,Q(oe.value,(e,U)=>(u(),y("th",{key:U,class:"text-left"},c(e.title),1))),128))])]),((j=(p=d(T))==null?void 0:p.data)==null?void 0:j.length)>0&&d(N)==!1&&d(E)==!1?(u(),y("tbody",Le,[(u(!0),y(S,null,Q((I=d(T))==null?void 0:I.data,(e,U)=>{var M,Y;return u(),y("tr",{key:e.id},[r("td",null,c(U+1),1),r("td",{class:"font-weight-bold username",onClick:b=>n.$router.push({name:"UserDetails",params:{id:e==null?void 0:e.user_id}})},c(e.user.firstname)+" "+c(e.user.lastname),9,Se),r("td",null,c((Y=(M=e==null?void 0:e.giftcard_product)==null?void 0:M.giftcard_category)==null?void 0:Y.name),1),r("td",null,c(e.reference),1),r("td",null,c(e.trade_type),1),r("td",null,"\u20A6\u200E "+c(e.payable_amount.toLocaleString()),1),r("td",null,c(d(De)(e==null?void 0:e.created_at,"DD-MM-YYYY hh:mm a").value),1),r("td",null,[a(me,{label:"",size:"small",class:"text-capitalize font-weight-bold pa-3",color:se(e==null?void 0:e.status)},{default:l(()=>[i(c(re(e==null?void 0:e.status)),1)]),_:2},1032,["color"])]),r("td",null,[a(J,{justify:"center"},{default:l(()=>[a(xe,{transition:"scroll-y-transition"},{activator:l(({props:b})=>[a(P,Te({text:"",icon:"mdi-dots-vertical",color:"transparent",class:"ma-2"},b),null,16)]),default:l(()=>[a(Pe,null,{default:l(()=>[a(D,{to:{name:e.children_count>0?"RelatedGiftCards":"ViewGiftCardTransaction",params:{id:e.id}},link:"",color:"secondary"},{default:l(()=>[a(R,null,{default:l(()=>[i(c(e.children_count>0?"View List":"View giftcard"),1)]),_:2},1024)]),_:2},1032,["to"]),(e==null?void 0:e.status)=="pending"&&e.children_count==0?(u(),C(D,{key:0,onClick:b=>n.approveRequest(e==null?void 0:e.id,g.value),link:"",color:"secondary"},{default:l(()=>[a(R,null,{default:l(()=>[qe]),_:1})]),_:2},1032,["onClick"])):_("",!0),(e==null?void 0:e.status)=="pending"&&e.children_count==0?(u(),C(D,{key:1,onClick:b=>{f.value=!0,x.value=e.id},link:"",color:"secondary"},{default:l(()=>[a(R,null,{default:l(()=>[Be]),_:1})]),_:2},1032,["onClick"])):_("",!0),(e==null?void 0:e.status)=="pending"&&e.children_count==0?(u(),C(D,{key:2,onClick:b=>{x.value=e==null?void 0:e.id,le()},link:"",color:"secondary"},{default:l(()=>[a(R,null,{default:l(()=>[Ee]),_:1})]),_:2},1032,["onClick"])):_("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)])])}),128))])):_("",!0)]}),_:1}),d(N)==!0?(u(),C(ge,{key:0,class:"align-center justify-center w-100 my-5"},{default:l(()=>[a(_e,{indeterminate:""})]),_:1})):_("",!0),((G=(V=d(T))==null?void 0:V.data)==null?void 0:G.length)<=0&&d(N)==!1&&d(E)==!1?(u(),y("p",Ge," No data found ")):_("",!0)]}),_:1})]),_:1}),a(Ve,{modelValue:g.value,"onUpdate:modelValue":[t[6]||(t[6]=V=>g.value=V),A],length:(o=d(T))==null?void 0:o.last_page,onNext:A,onPrev:A,"active-color":"red",start:1,variant:"flat",class:"mt-5",color:"bg-secondary",rounded:"circle"},null,8,["modelValue","length","onNext","onPrev","onUpdate:modelValue"])]}),_:1}),d(f)?(u(),C(X,{key:0,modelValue:d(f),"onUpdate:modelValue":t[11]||(t[11]=o=>he(f)?f.value=o:null),"max-width":"429px","min-height":"476px"},{default:l(()=>[a(L,{class:"view-dialog pa-4"},{default:l(()=>[r("div",je,[Ie,a(P,{onClick:t[7]||(t[7]=o=>f.value=!1),icon:"mdi-close",color:"secondary",variant:"text"},{default:l(()=>[a(ye,{icon:"mdi-close"})]),_:1})]),a(ke,{class:"my-10"},{default:l(()=>[a(Ce,{prefix:"\u20A6\u200E",modelValue:k.review_rate,"onUpdate:modelValue":t[8]||(t[8]=o=>k.review_rate=o),type:"number",variant:"outlined",label:"Amount"},null,8,["modelValue"]),a(W,{modelValue:k.review_note,"onUpdate:modelValue":t[9]||(t[9]=o=>k.review_note=o),variant:"outlined",label:"Review Note"},null,8,["modelValue"]),a(H,{"prepend-icon":"",variant:"outlined",onChange:ne,label:"Review Proof"}),a(P,{loading:d(ae),onClick:t[10]||(t[10]=o=>n.partialApproveRequest(x.value,k)),block:"",color:"secondary"},{default:l(()=>[Me]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])):_("",!0),a(be,null,{default:l(()=>[m.value?(u(),C(X,{key:0,modelValue:m.value,"onUpdate:modelValue":t[14]||(t[14]=o=>m.value=o),"max-width":"500px",width:"100%"},{default:l(()=>[a(L,{"max-width":"500px"},{default:l(()=>[a(O,null,{default:l(()=>[Ye,ze]),_:1}),a(we,{class:"mt-7"},{default:l(()=>[a(W,{label:"Comments",modelValue:$.value,"onUpdate:modelValue":t[12]||(t[12]=o=>$.value=o),variant:"outlined"},null,8,["modelValue"]),a(H,{onChange:te,hint:"Optional","persistent-hint":"",label:"Review proof","append-inner-icon":"mdi-paperclip","prepend-icon":""}),a(P,{color:"secondary",class:"my-5",block:"",loading:d(ee),onClick:t[13]||(t[13]=o=>n.declineRequest(x.value,$.value,q.value,g.value))},{default:l(()=>[Oe]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])):_("",!0)]),_:1})]),_:1})],64))}});export{ra as default};