import{a as ge,s as ee,f as ye,r as c,h as be,aw as we,o as r,c as _,b as l,e,u as s,j as R,w as t,a2 as A,t as i,x as v,a6 as U,O as Y,a7 as z,an as xe,ao as B,ap as Ve,ax as ke,F as le,k as te,ay as se,av as ae,az as Ce,D as j,ai as Te,M as oe,m as p,au as De,a9 as ne,a1 as Ae,T as je,aA as $e,aX as Ne,i as Fe,N as Se,q as Me,V as qe,p as I,v as P}from"./index.09a9e36e.js";import{u as de}from"./withdrawals.6484bb7b.js";import{_ as Re}from"./BaseBreadcrumb.4ccd5924.js";import{u as ie}from"./index.11c402df.js";import"./axios-services.17ccf49f.js";/* empty css                                                       */const Ue={class:"mt-4"},ze=e("div",{class:""},[e("h4",null,"Total earnings")],-1),Be={key:0,class:"mt-11"},Ee={class:"mb-2"},Le=e("span",null,"All time",-1),We={class:"ml-16 d-flex align-center justify-space-between w-100"},Ye={class:"d-flex align-start justify-start flex-column w-100"},Ie={key:0,class:"pl-3 my-5"},Pe={class:"mb-2"},Ge=e("span",null,"Successful",-1),Oe={class:"d-flex align-start justify-start flex-column w-100 flex-grow-1"},Xe={key:0,class:"pl-3 my-5"},He={class:"mb-2"},Je=e("span",null,"pending",-1),Ke={class:"d-flex align-start justify-start flex-column w-100 flex-grow-1"},Qe={key:0,class:"pl-3 my-5"},Ze={class:"mb-2"},el=e("span",null,"Failed",-1),ll=p("All"),tl=p("Pending"),sl=p("Success"),al=p("Failed"),ol={key:0},nl={class:"font-weight-bold"},dl=["onClick"],il=p(" View Details "),ul=p(" Approve Transaction Request "),rl=p(" Decline Transaction Request "),cl={key:1,class:"text-center py-6"},_l={class:"mb-3 d-flex justify-space-between"},ml=e("h3",{class:"text-justify mt-7"},"Withdrawal request details",-1),fl={class:"my-3"},vl={key:0,class:"w-100 d-flex align-center justify-space-between"},pl={class:"mb-4"},hl=e("h5",null,"Wallet balance",-1),gl={class:"font-weight-bold"},yl={class:"mb-4"},bl=e("h5",{class:""},"User name",-1),wl={class:""},xl={class:"mb-4"},Vl=e("h5",{class:""},"Email address",-1),kl={class:""},Cl={class:"mb-4"},Tl=e("h5",{class:""},"Date & time",-1),Dl={class:""},Al={class:"mb-4"},jl=e("h5",null,"Amount",-1),$l={class:"font-weight-bold"},Nl={class:"mb-4"},Fl=e("h5",{class:""},"Bank name",-1),Sl={class:""},Ml={class:"mb-4"},ql=e("h5",{class:""},"Account name",-1),Rl={class:""},Ul={class:"mb-4"},zl=e("h5",{class:""},"Account number",-1),Bl={class:""},El={key:2},Ll=p(" Disapprove request "),Wl=p(" Approve request "),Yl=e("p",null,"Enter Reasons for Declining this withdrawal request",-1),Il=p("Submit"),lt=ge({__name:"all",setup(Pl){const{permissions:ue}=ee(ye()),{getAllTransactions:b,approveTransactionRequest:G,declineTransactionRequest:re,declineRequest:Gl,getSingleWithDrawals:Ol,filterWithDrawalsByDateCreated:Xl,getAllTransactionCount:ce}=de(),{withdrawals:_e,all_transaction:V,loading:C,singleWithdrawal:m,dialog:k,disapproving:me,approving:fe,withdrawals_total:$}=ee(de()),N=c(""),F=c(!1),O=async()=>{await b(N.value,1),await ce()};let X=c(null);be(()=>{O(),X.value=setInterval(O,12e4)}),we(()=>{clearInterval(X.value)});const ve=c({title:"Transactions"}),E=c(""),pe=c([{text:"Transactions",disabled:!1,href:"#"},{text:"All",disabled:!0,href:"#"}]),he=c([{title:"No."},{title:"Full name"},{title:"Amount (NGN)"},{title:"Type"},{title:"Date and Time"},{title:"Status"},{title:"Actions"}]),S=w=>new Intl.NumberFormat().format(w),H=c(""),J=()=>{k.value==!0&&(k.value=!1),F.value=!0};c(["Pending","Completed","Declined","Success"]);const K=w=>w=="pending"?"yellow-darken-3":w=="completed"||w=="success"?"green lighten-3":w=="declined"?"red lighten-3":"",L=c(!1),T=c(1);c("");const M=c(null);return(w,o)=>{var Q,Z;const W=Fe("vue-feather");return r(),_("div",null,[l(Re,{title:ve.value.title,breadcrumbs:pe.value},null,8,["title","breadcrumbs"]),e("div",Ue,[((Q=s(ue))==null?void 0:Q.length)==18?(r(),R(z,{key:0,class:"my-3"},{default:t(()=>[l(U,{cols:"12",sm:"6",md:"4"},{default:t(()=>[l(A,{elevation:"0",class:"pa-6 h-100"},{default:t(()=>{var d,u,n;return[ze,((d=s($))==null?void 0:d.length)>0?(r(),_("div",Be,[e("h2",Ee," \u20A6\u200E"+i(S((n=(u=s(V))==null?void 0:u.meta)==null?void 0:n.sum)),1),Le])):v("",!0)]}),_:1})]),_:1}),l(U,{cols:"12",sm:"6",md:"8"},{default:t(()=>[l(A,{elevation:"0",class:"py-4 px-2"},{default:t(()=>{var d,u,n,a,f,h,g,y,x;return[e("div",We,[e("div",Ye,[l(Y,{color:"#e5fafb",size:"x-large"},{default:t(()=>[l(W,{type:"check-circle",class:"text-dark text-success"})]),_:1}),((d=s($))==null?void 0:d.length)>0?(r(),_("div",Ie,[e("h2",Pe,i(S((n=(u=s(V))==null?void 0:u.meta)==null?void 0:n.success)),1),Ge])):v("",!0)]),e("div",Oe,[l(Y,{color:"#FFF9C4",size:"x-large"},{default:t(()=>[l(W,{type:"bar-chart",class:"text-dark text-primary"})]),_:1}),((a=s($))==null?void 0:a.length)>0?(r(),_("div",Xe,[e("h2",He,i(S((h=(f=s(V))==null?void 0:f.meta)==null?void 0:h.pending)),1),Je])):v("",!0)]),e("div",Ke,[l(Y,{color:"#FFCCBC",size:"x-large"},{default:t(()=>[l(W,{type:"x-circle",class:"text-dark text-error"})]),_:1}),((g=s($))==null?void 0:g.length)>0?(r(),_("div",Qe,[e("h2",Ze,i(S((x=(y=s(V))==null?void 0:y.meta)==null?void 0:x.failed)),1),el])):v("",!0)])])]}),_:1})]),_:1})]),_:1})):v("",!0),l(A,{class:"pa-5"},{default:t(()=>{var d,u;return[l(xe,{modelValue:M.value,"onUpdate:modelValue":o[4]||(o[4]=n=>M.value=n),"bg-color":"none",class:"mb-5"},{default:t(()=>[l(B,{onClick:o[0]||(o[0]=n=>s(b)("",1))},{default:t(()=>[ll]),_:1}),l(B,{onClick:o[1]||(o[1]=n=>s(b)("pending",1))},{default:t(()=>[tl]),_:1}),l(B,{onClick:o[2]||(o[2]=n=>s(b)("success",1))},{default:t(()=>[sl]),_:1}),l(B,{onClick:o[3]||(o[3]=n=>s(b)("failed",1))},{default:t(()=>[al]),_:1})]),_:1},8,["modelValue"]),l(Ve,{modelValue:M.value,"onUpdate:modelValue":o[5]||(o[5]=n=>M.value=n)},{default:t(()=>[l(ke,null,{default:t(()=>{var n;return[e("thead",null,[e("tr",null,[(r(!0),_(le,null,te(he.value,(a,f)=>(r(),_("th",{key:f,class:"text-left font-weight-bold"},i(a.title),1))),128))])]),s(C)==!1?(r(),_("tbody",ol,[(r(!0),_(le,null,te((n=s(V))==null?void 0:n.data,(a,f)=>{var h,g,y,x,D;return r(),_("tr",{class:"pa-3",key:a==null?void 0:a.id},[e("td",null,i(f+1),1),e("td",nl,[e("span",{onClick:q=>w.$router.push({name:"UserDetails",params:{id:a==null?void 0:a.user_id}}),class:"text-capitalize username"},i((g=(h=a==null?void 0:a.user)==null?void 0:h.firstname)!=null?g:"---")+" "+i((x=(y=a==null?void 0:a.user)==null?void 0:y.lastname)!=null?x:"---"),9,dl)]),e("td",null,"\u20A6\u200E "+i(a.amount.toLocaleString()),1),e("td",null,i((D=a==null?void 0:a.title)!=null?D:"---"),1),e("td",null,i(s(ie)(a==null?void 0:a.created_at,"DD, MMMM-YYYY").value),1),e("td",null,[l(oe,{label:"",class:"text-capitalize font-weight-bold pa-3",color:K(a==null?void 0:a.status)},{default:t(()=>[p(i(a==null?void 0:a.status),1)]),_:2},1032,["color"])]),e("td",null,[l(z,{justify:"center"},{default:t(()=>[l(Se,{transition:"scroll-y-transition"},{activator:t(({props:q})=>[l(j,Me({text:"",icon:"mdi-dots-vertical",color:"transparent",class:"ma-2"},q),null,16)]),default:t(()=>[l(qe,null,{default:t(()=>[l(I,{to:{name:"viewWithdrawals",params:{id:a.id}},link:"",color:"secondary"},{default:t(()=>[l(P,null,{default:t(()=>[il]),_:1})]),_:2},1032,["to"]),l(I,{onClick:q=>s(G)(a==null?void 0:a.reference),link:"",color:"secondary"},{default:t(()=>[l(P,null,{default:t(()=>[ul]),_:1})]),_:2},1032,["onClick"]),l(I,{onClick:q=>{H.value=a==null?void 0:a.reference,J()},link:"",color:"secondary"},{default:t(()=>[l(P,null,{default:t(()=>[rl]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)])])}),128))])):v("",!0)]}),_:1})]),_:1},8,["modelValue"]),s(C)==!0?(r(),R(ae,{key:0,class:"align-center justify-center w-100 my-5"},{default:t(()=>[l(se,{indeterminate:""})]),_:1})):v("",!0),s(C)==!1&&((u=(d=s(V))==null?void 0:d.data)==null?void 0:u.length)<=0?(r(),_("p",cl," No data available ")):v("",!0)]}),_:1}),l(Ce,{modelValue:T.value,"onUpdate:modelValue":[o[6]||(o[6]=d=>T.value=d),o[9]||(o[9]=d=>s(b)(N.value,T.value))],length:(Z=s(_e))==null?void 0:Z.last_page,onNext:o[7]||(o[7]=d=>s(b)(N.value,T.value)),onPrev:o[8]||(o[8]=d=>s(b)(N.value,T.value)),"active-color":"red",start:1,variant:"flat",class:"mt-5",color:"bg-secondary",rounded:"circle"},null,8,["modelValue","length"])]),l(ne,{modelValue:s(k),"onUpdate:modelValue":o[12]||(o[12]=d=>De(k)?k.value=d:null),"max-width":"429px","min-height":"476px"},{default:t(()=>[l(A,{class:"view-dialog pa-4"},{default:t(()=>{var d;return[e("div",_l,[ml,l(j,{onClick:o[10]||(o[10]=u=>k.value=!1),icon:"mdi-close",color:"secondary",variant:"text"},{default:t(()=>[l(Te,{icon:"mdi-close"})]),_:1})]),e("div",fl,[e("div",null,[l(oe,{label:"",size:"small",density:"comfortable",class:"text-capitalize font-weight-bold pa-3",color:K((d=s(m))==null?void 0:d.status)},{default:t(()=>{var u;return[p(i((u=s(m))==null?void 0:u.status),1)]}),_:1},8,["color"])])]),L.value==!1&&s(C)==!1?(r(),_("div",vl,[l(z,{align:"center",justify:"center","no-gutters":"",class:"w-100 align-center justify-space-between"},{default:t(()=>[l(U,{class:"pa-0"},{default:t(()=>{var u,n,a,f,h,g,y;return[e("div",pl,[e("div",null,[hl,e("p",gl," \u20A6\u200E"+i((n=(u=s(m))==null?void 0:u.user)==null?void 0:n.wallet_balance.toLocaleString()),1)])]),e("div",yl,[e("div",null,[bl,e("p",wl,i((f=(a=s(m))==null?void 0:a.user)==null?void 0:f.firstname),1)])]),e("div",xl,[e("div",null,[Vl,e("p",kl,i((g=(h=s(m))==null?void 0:h.user)==null?void 0:g.email),1)])]),e("div",Cl,[e("div",null,[Tl,e("p",Dl,i(s(ie)((y=s(m))==null?void 0:y.created_at,"DD, MMMM-YYYY").value),1)])])]}),_:1})]),_:1}),l(z,{align:"center",justify:"center","no-gutters":"",class:"w-100 align-center justify-space-between ml-5"},{default:t(()=>[l(U,{class:"pa-0"},{default:t(()=>{var u,n,a,f,h,g,y,x,D;return[e("div",Al,[e("div",null,[jl,e("p",$l," \u20A6\u200E"+i((n=(u=s(m))==null?void 0:u.amount)==null?void 0:n.toLocaleString()),1)])]),e("div",Nl,[e("div",null,[Fl,e("p",Sl,i((h=(f=(a=s(m))==null?void 0:a.bank)==null?void 0:f.name)!=null?h:"No data"),1)])]),e("div",Ml,[e("div",null,[ql,e("p",Rl,i((y=(g=s(m))==null?void 0:g.account_name)!=null?y:"No data"),1)])]),e("div",Ul,[e("div",null,[zl,e("p",Bl,i((D=(x=s(m))==null?void 0:x.account_number)!=null?D:"No data"),1)])])]}),_:1})]),_:1})])):v("",!0),L.value==!0||s(C)==!0?(r(),R(ae,{key:1,class:"align-center justify-center w-100 my-10"},{default:t(()=>[l(se,{indeterminate:""})]),_:1})):v("",!0),s(m).status=="pending"&&L.value==!1?(r(),_("div",El,[l(j,{onClick:J,class:"wallet-btn",variant:"outlined",color:"error",loading:s(me)},{default:t(()=>[Ll]),_:1},8,["loading"]),l(j,{onClick:o[11]||(o[11]=u=>{var n;return s(G)((n=s(m))==null?void 0:n.id)}),class:"wallet-btn ml-4",color:"secondary",loading:s(fe)},{default:t(()=>[Wl]),_:1},8,["loading"])])):v("",!0)]}),_:1})]),_:1},8,["modelValue"]),l(Ne,null,{default:t(()=>[F.value?(r(),R(ne,{key:0,modelValue:F.value,"onUpdate:modelValue":o[15]||(o[15]=d=>F.value=d),activator:"parent","max-width":"500px",width:"auto"},{default:t(()=>[l(A,null,{default:t(()=>[l(Ae,null,{default:t(()=>[Yl]),_:1}),l(je,{class:"mt-7"},{default:t(()=>[l($e,{label:"Comments",modelValue:E.value,"onUpdate:modelValue":o[13]||(o[13]=d=>E.value=d),variant:"outlined"},null,8,["modelValue"]),l(j,{color:"secondary",class:"my-5",block:"",onClick:o[14]||(o[14]=d=>s(re)(H.value,E.value))},{default:t(()=>[Il]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])):v("",!0)]),_:1})])}}});export{lt as default};