import{a as Ce,o as i,c as p,b as t,w as l,D as h,e as o,a8 as Z,at as ke,j as k,ar as we,x as f,a9 as J,ax as be,r as v,s as Ve,ai as Te,h as Ge,A as De,ag as x,F as E,k as H,t as d,M as ee,m as u,a7 as ae,N as le,q as te,V as oe,p as G,v as D,au as Ae,ao as Ie,H as $e,aw as re,a2 as K,a1 as se,T as Ue,ad as Re,ay as Le,I as je,aD as Fe}from"./index.768fb5ed.js";import{u as ne}from"./giftcard.cedbf4ee.js";import{u as ie,_ as de,a as ue,b as pe}from"./uploadImage.fc51e473.js";import{u as Ne}from"./useFormatter.be1a3376.js";import{_ as Se}from"./plugin-vue_export-helper.21dcd24c.js";import{u as Ye}from"./index.bb23e1de.js";import"./filedownloader.f3cc1d55.js";import"./country.c0fb87bf.js";const qe=Ce({setup(){const e=v([{title:"No."},{title:"User name"},{title:"Category"},{title:"Reference No."},{title:"Trade Type."},{title:"Amount"},{title:"Date"},{title:"Status"},{title:"Actions"}]),r=v("");let j=v(""),w=v(!0);const A=Fe();let F=v(!1),b=v(1),s=v(1);const{loading:_,relatedGiftCards:$,dialog:V,dialog2:U,declining:P,singleGiftCardTransaction:z}=Ve(ne()),{getAllGiftCardTransactionByUserId:N,approveRequest:S,declineRequest:Y,partialApproveRequest:q}=ne(),B=n=>n==="partially_approved"?"Partial":n,a=v(1),c=v([]),I=n=>{F.value=!0;let m=n.length,C=0;if(event){for(s.value=n.length;m--;)ie(n[C]).then(L=>{b.value++,T.value.push(L.secure_url),c.value.push(L.secure_url)}),C++;b.value=0}},y=Te({review_rate:"",review_note:"",review_proof:[]}),g=(n,m)=>{T.value=T.value.filter(C=>C!==n),y.review_proof.splice(m,1)},fe=(n,m)=>{T.value=T.value.filter(C=>C!==n),c.value.splice(m,1)},T=v([]),ce=n=>{F.value=!0;let m=n.length;console.log(n);let C=0;if(event){for(s.value=n.length;m--;)ie(n[C]).then(L=>{b.value++,T.value.push(L.secure_url),y.review_proof.push(L.secure_url)}),C++;b.value=0}},O=()=>{V.value==!0&&(V.value=!1),U.value=!0},ge=()=>{w.value=!1,j.value=A.params.id,X("approve",A.params.id)},ve=()=>{w.value=!1,j.value=A.params.id,O()},me=()=>{w.value=!1,j.value=A.params.id,V.value=!0},he=n=>n=="pending"?"yellow-darken-3":n=="approved"?"green lighten-3":n=="declined"?"red lighten-3":n=="partially_approved"?"purple lighten-3":"";Ge(()=>{N(A.params.id)});const{formatCurrency:_e}=Ne(),Q=async()=>{await N(A.params.id),T.value=[],F.value=!1},R=v(!1);let M=v("");const W=v(""),X=(n,m)=>{R.value=!0,M.value=m,W.value=n},ye=async n=>{n=="approve"?(await S(M.value,1,w.value),Q(),R.value=!1):n=="decline"?(Y(M.value,r.value,c.value,w.value),R.value=!1):n=="partial"&&(q(M.value,y,w.value),R.value=!1),R.value=!1,w.value=!0};return De([V,U],([n,m],[C,L])=>{n===!1&&m===!1&&Q()}),{related_giftcard:e,relatedGiftCards:$,reproof:c,loading:_,useDateFormat:Ye,formate_text:B,status_color:he,dialog:V,dialog2:U,declining:P,approveRequest:S,declineRequest:Y,partialApproveRequest:q,partial_approve:y,get_reproof:I,note:r,id:j,disapprove:O,approveAll:ge,disapproveAll:ve,partialApproveAll:me,singleGiftCardTransaction:z,page_no:a,partial:ce,formatCurrency:_e,makeConfirmation:ye,openConfirmationDialog:X,previewList:T,startImage:b,totalImage:s,uploadingImage:F,removeImage:g,removeImageDecline:fe,confirmationID:M,confirmationDialog:R,confirmationStatus:W}}}),Me=u(" Giftcard Transactions "),Pe={class:"mb-5 md-mb-0 d-md-flex justify-space-between"},ze=o("h4",{class:"my-5"},"Related Giftcards:",-1),Be=u(" Approve all "),Ee=u(" Decline all "),He=u(" Partial approval all "),Je={key:0},Ke=o("td",null,d(1),-1),Oe=u(" View giftcard "),Qe=u(" Approve giftcard "),We=u(" Partial approval "),Xe=u(" Decline giftcard "),Ze=["onClick"],xe=u(" View giftcard "),ea=u(" Approve giftcard "),aa=u(" Partial approval "),la=u(" Decline giftcard "),ta={key:1,class:"text-center pa-5"},oa={class:"mb-3 d-flex justify-space-between"},ra=o("h3",{class:"text-justify mt-7"},"Partial approval",-1),sa=o("label",{for:"proof",class:"cursor-pointer"},[o("p",{class:"text-black"},"Upload transaction proof")],-1),na={key:0,for:"proof",class:"cursor-pointer"},ia=o("img",{src:ue,alt:"card-placeholder",class:"mt-3 w-full object-fill max-h-[174px] rounded-xl"},null,-1),da=[ia],ua={class:"gap-5 mt-5",style:{display:"grid","grid-template-columns":"repeat(4, 80px)",gap:"12px"}},pa={style:{position:"relative"}},fa=["src"],ca=["onClick"],ga={key:1,class:"pt-3 text-center"},va={class:"p-2 block"},ma={key:2,for:"proof",class:"mt-4 d-flex align-center cursor-pointer"},ha=o("img",{src:pe,alt:"plus icon"},null,-1),_a=o("p",{class:"ml-3 underline"},"Add more proof",-1),ya=[ha,_a],Ca=u("submit"),ka=o("h3",null,"Decline Request",-1),wa=o("p",null,"Enter Reasons for Declining this withdrawal request",-1),ba=o("label",{for:"proof",class:"cursor-pointer"},[o("p",{class:"text-black"},"Upload transaction proof")],-1),Va={key:0,for:"proof",class:"cursor-pointer"},Ta=o("img",{src:ue,alt:"card-placeholder",class:"mt-3 w-full object-fill max-h-[174px] rounded-xl"},null,-1),Ga=[Ta],Da={class:"gap-5 mt-5",style:{display:"grid","grid-template-columns":"repeat(4, 80px)",gap:"12px"}},Aa={style:{position:"relative"}},Ia=["src"],$a=["onClick"],Ua={key:1,class:"pt-3 text-center"},Ra={class:"p-2 block"},La={key:2,for:"proof",class:"mt-4 d-flex align-center cursor-pointer"},ja=o("img",{src:pe,alt:"plus icon"},null,-1),Fa=o("p",{class:"ml-3 underline"},"Add more proof",-1),Na=[ja,Fa],Sa=u("Submit"),Ya=u(" Confirm "),qa=u("Cancel"),Ma=u("Yes");function Pa(e,r,j,w,A,F){var b;return i(),p("div",null,[t(h,{link:"",size:"small",color:"grey-darken-4",to:{name:"GiftCardTransaction"}},{default:l(()=>[t(x,{size:"small",start:"",icon:"mdi-arrow-left"}),Me]),_:1}),o("div",Pe,[ze,t(Z,{class:"d-flex flex-wrap align-start",style:{gap:"10px",padding:"0% !important"}},{default:l(()=>[t(h,{class:"mr-2 md-mr-4",color:"green lighten-3",loading:e.approving,variant:"tonal",onClick:r[0]||(r[0]=s=>e.approveAll())},{default:l(()=>[Be]),_:1},8,["loading"]),t(h,{color:"red lighten-3",variant:"tonal",onClick:r[1]||(r[1]=s=>e.disapproveAll())},{default:l(()=>[Ee]),_:1}),t(h,{color:"purple lighten-3",variant:"tonal",onClick:r[2]||(r[2]=s=>e.partialApproveAll())},{default:l(()=>[He]),_:1})]),_:1})]),t(ke,null,{default:l(()=>{var s,_,$,V,U,P,z,N,S,Y,q,B;return[o("thead",null,[o("tr",null,[(i(!0),p(E,null,H(e.related_giftcard,(a,c)=>(i(),p("th",{key:c,class:"text-left"},d(a.title),1))),128))])]),((s=e.relatedGiftCards)==null?void 0:s.length)>0&&e.loading==!1?(i(),p("tbody",Je,[o("tr",null,[Ke,o("td",{class:"font-weight-bold username",onClick:r[3]||(r[3]=a=>{var c;return e.$router.push({name:"UserDetails",params:{id:(c=e.singleGiftCardTransaction)==null?void 0:c.user_id}})})},d(($=(_=e.singleGiftCardTransaction)==null?void 0:_.user)==null?void 0:$.firstname)+" "+d((U=(V=e.singleGiftCardTransaction)==null?void 0:V.user)==null?void 0:U.lastname),1),o("td",null,d((N=(z=(P=e.singleGiftCardTransaction)==null?void 0:P.giftcard_product)==null?void 0:z.giftcard_category)==null?void 0:N.name),1),o("td",null,d((S=e.singleGiftCardTransaction)==null?void 0:S.reference),1),o("td",null,d((Y=e.singleGiftCardTransaction)==null?void 0:Y.trade_type),1),o("td",null,d(e.formatCurrency(e.singleGiftCardTransaction.payable_amount*(e.singleGiftCardTransaction.children_count&&e.singleGiftCardTransaction.children_count!==0?e.singleGiftCardTransaction.children_count+1:1))),1),o("td",null,d(e.useDateFormat((q=e.singleGiftCardTransaction)==null?void 0:q.created_at,"DD-MM-YYYY hh:mm a").value),1),o("td",null,[t(ee,{label:"",size:"small",class:"text-capitalize font-weight-bold pa-3",color:e.status_color((B=e.singleGiftCardTransaction)==null?void 0:B.status)},{default:l(()=>{var a;return[u(d(e.formate_text((a=e.singleGiftCardTransaction)==null?void 0:a.status)),1)]}),_:1},8,["color"])]),o("td",null,[t(ae,{justify:"center"},{default:l(()=>[t(le,{transition:"scroll-y-transition"},{activator:l(({props:a})=>[t(h,te({text:"",icon:"mdi-dots-vertical",color:"transparent",class:"ma-2"},a),null,16)]),default:l(()=>[t(oe,null,{default:l(()=>{var a,c,I;return[t(G,{to:{name:"ViewGiftCardTransaction",params:{id:e.singleGiftCardTransaction.id}},link:"",color:"secondary"},{default:l(()=>[t(D,null,{default:l(()=>[Oe]),_:1})]),_:1},8,["to"]),((a=e.singleGiftCardTransaction)==null?void 0:a.status)=="pending"?(i(),k(G,{key:0,onClick:r[4]||(r[4]=y=>{var g;return e.approveRequest((g=e.singleGiftCardTransaction)==null?void 0:g.id,e.page_no)}),link:"",color:"secondary"},{default:l(()=>[t(D,null,{default:l(()=>[Qe]),_:1})]),_:1})):f("",!0),((c=e.singleGiftCardTransaction)==null?void 0:c.status)=="pending"?(i(),k(G,{key:1,onClick:r[5]||(r[5]=y=>{e.dialog=!0,e.id=e.singleGiftCardTransaction.id}),link:"",color:"secondary"},{default:l(()=>[t(D,null,{default:l(()=>[We]),_:1})]),_:1})):f("",!0),((I=e.singleGiftCardTransaction)==null?void 0:I.status)=="pending"?(i(),k(G,{key:2,onClick:r[6]||(r[6]=y=>{var g;e.id=(g=e.singleGiftCardTransaction)==null?void 0:g.id,e.disapprove()}),link:"",color:"secondary"},{default:l(()=>[t(D,null,{default:l(()=>[Xe]),_:1})]),_:1})):f("",!0)]}),_:1})]),_:1})]),_:1})])]),(i(!0),p(E,null,H(e.relatedGiftCards,(a,c)=>{var I,y;return i(),p("tr",{class:"pa-2",key:a.id},[o("td",null,d(c+2),1),o("td",{class:"font-weight-bold username",onClick:g=>e.$router.push({name:"UserDetails",params:{id:a==null?void 0:a.user_id}})},d(a.user.firstname)+" "+d(a.user.lastname),9,Ze),o("td",null,d((y=(I=a==null?void 0:a.giftcard_product)==null?void 0:I.giftcard_category)==null?void 0:y.name),1),o("td",null,d(a.reference),1),o("td",null,d(a.trade_type),1),o("td",null,d(e.formatCurrency(a.payable_amount*(a.children_count&&a.children_count!==0?a.children_count+1:1))),1),o("td",null,d(e.useDateFormat(a==null?void 0:a.created_at,"DD-MM-YYYY hh:mm a").value),1),o("td",null,[t(ee,{label:"",size:"small",class:"text-capitalize font-weight-bold pa-3",color:e.status_color(a==null?void 0:a.status)},{default:l(()=>[u(d(e.formate_text(a==null?void 0:a.status)),1)]),_:2},1032,["color"])]),o("td",null,[t(ae,{justify:"center"},{default:l(()=>[t(le,{transition:"scroll-y-transition"},{activator:l(({props:g})=>[t(h,te({text:"",icon:"mdi-dots-vertical",color:"transparent",class:"ma-2"},g),null,16)]),default:l(()=>[t(oe,null,{default:l(()=>[t(G,{to:{name:"ViewGiftCardTransaction",params:{id:a.id}},link:"",color:"secondary"},{default:l(()=>[t(D,null,{default:l(()=>[xe]),_:1})]),_:2},1032,["to"]),(a==null?void 0:a.status)=="pending"?(i(),k(G,{key:0,onClick:g=>e.openConfirmationDialog("approve",a==null?void 0:a.id),link:"",color:"secondary"},{default:l(()=>[t(D,null,{default:l(()=>[ea]),_:1})]),_:2},1032,["onClick"])):f("",!0),(a==null?void 0:a.status)=="pending"?(i(),k(G,{key:1,onClick:g=>(e.dialog=!0,e.id=a==null?void 0:a.id),link:"",color:"secondary"},{default:l(()=>[t(D,null,{default:l(()=>[aa]),_:1})]),_:2},1032,["onClick"])):f("",!0),(a==null?void 0:a.status)=="pending"?(i(),k(G,{key:2,onClick:g=>(e.dialog2=!0,e.id=a==null?void 0:a.id),link:"",color:"secondary"},{default:l(()=>[t(D,null,{default:l(()=>[la]),_:1})]),_:2},1032,["onClick"])):f("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)])])}),128))])):f("",!0)]}),_:1}),e.loading==!0?(i(),k(we,{key:0,class:"align-center justify-center w-100 my-5"},{default:l(()=>[t(Ae,{indeterminate:""})]),_:1})):f("",!0),((b=e.relatedGiftCards)==null?void 0:b.length)<=0||e.relatedGiftCards==null?(i(),p("p",ta," No related giftcard ")):f("",!0),e.dialog?(i(),k(J,{key:2,modelValue:e.dialog,"onUpdate:modelValue":r[12]||(r[12]=s=>e.dialog=s),"max-width":"429px","min-height":"476px"},{default:l(()=>[t(K,{class:"view-dialog pa-4"},{default:l(()=>[o("div",oa,[ra,t(h,{onClick:r[7]||(r[7]=s=>e.dialog=!1),icon:"mdi-close",color:"secondary",variant:"text"},{default:l(()=>[t(x,{icon:"mdi-close"})]),_:1})]),t(Ie,{class:"my-10"},{default:l(()=>[t($e,{prefix:"\u20A6\u200E",modelValue:e.partial_approve.review_rate,"onUpdate:modelValue":r[8]||(r[8]=s=>e.partial_approve.review_rate=s),type:"number",variant:"outlined",label:"Review Amount"},null,8,["modelValue"]),t(re,{modelValue:e.partial_approve.review_note,"onUpdate:modelValue":r[9]||(r[9]=s=>e.partial_approve.review_note=s),variant:"outlined",label:"Review Note"},null,8,["modelValue"]),sa,e.previewList.length?f("",!0):(i(),p("label",na,da)),o("input",{type:"file",multiple:"",id:"proof",ref:"fileInput",style:{display:"none"},accept:"image/*",onChange:r[10]||(r[10]=s=>e.partial(s.target.files))},null,544),o("div",ua,[(i(!0),p(E,null,H(e.previewList,(s,_)=>(i(),p("div",{key:_},[o("div",pa,[o("img",{class:"w-full cursor-pointer",style:{height:"75px","object-fit":"cover",width:"100%"},src:s},null,8,fa),o("img",{src:de,class:"absolute rounded-full border border-red-700 -top-2 -right-2 bg-red-200 text-red-500 cursor-pointer",style:{position:"absolute",right:"-5px",top:"-5px"},width:"20",onClick:$=>e.removeImage(s,_)},null,8,ca)])]))),128))]),e.uploadingImage?(i(),p("div",ga,[o("small",va,"Uploaded "+d(e.startImage)+" of "+d(e.totalImage)+"...",1)])):f("",!0),e.previewList.length?(i(),p("label",ma,ya)):f("",!0),t(h,{loading:e.approving,onClick:r[11]||(r[11]=s=>e.openConfirmationDialog("partial",e.id)),class:"mt-5",block:"",color:"secondary"},{default:l(()=>[Ca]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])):f("",!0),t(be,null,{default:l(()=>[e.dialog2?(i(),k(J,{key:0,modelValue:e.dialog2,"onUpdate:modelValue":r[16]||(r[16]=s=>e.dialog2=s),"max-width":"500px",width:"100%"},{default:l(()=>[t(K,{"max-width":"500px"},{default:l(()=>[t(se,null,{default:l(()=>[ka,wa]),_:1}),t(Ue,{class:"mt-7"},{default:l(()=>[t(re,{label:"Comments",modelValue:e.note,"onUpdate:modelValue":r[13]||(r[13]=s=>e.note=s),variant:"outlined"},null,8,["modelValue"]),ba,e.previewList.length?f("",!0):(i(),p("label",Va,Ga)),o("input",{type:"file",multiple:"",id:"proof",ref:"fileInput",style:{display:"none"},accept:"image/*",onChange:r[14]||(r[14]=s=>e.get_reproof(s.target.files))},null,544),o("div",Da,[(i(!0),p(E,null,H(e.previewList,(s,_)=>(i(),p("div",{key:_},[o("div",Aa,[o("img",{class:"w-full cursor-pointer",style:{height:"75px","object-fit":"cover",width:"100%"},src:s},null,8,Ia),o("img",{src:de,class:"absolute rounded-full border border-red-700 -top-2 -right-2 bg-red-200 text-red-500 cursor-pointer",style:{position:"absolute",right:"-5px",top:"-5px"},width:"20",onClick:$=>e.removeImageDecline(s,_)},null,8,$a)])]))),128))]),e.uploadingImage?(i(),p("div",Ua,[o("small",Ra,"Uploaded "+d(e.startImage)+" of "+d(e.totalImage)+"...",1)])):f("",!0),e.previewList.length?(i(),p("label",La,Na)):f("",!0),t(h,{color:"secondary",class:"my-5",block:"",loading:e.declining,onClick:r[15]||(r[15]=s=>e.openConfirmationDialog("decline",e.id))},{default:l(()=>[Sa]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])):f("",!0)]),_:1}),t(J,{modelValue:e.confirmationDialog,"onUpdate:modelValue":r[19]||(r[19]=s=>e.confirmationDialog=s),width:"500"},{default:l(()=>[t(K,null,{default:l(()=>[t(Re,{dark:"",dense:"",flat:""},{default:l(()=>[t(Le,{class:"text-body-2 font-weight-bold grey--text"},{default:l(()=>[Ya]),_:1})]),_:1}),t(se,{class:"pa-4 black--text"},{default:l(()=>[u("Are you sure you want to "+d(e.confirmationStatus==="partial"?"partially approve":e.confirmationStatus)+" this transaction?",1)]),_:1}),t(Z,{class:"pt-3"},{default:l(()=>[t(je),t(h,{color:"grey",text:"",class:"body-2 font-weight-bold",onClick:r[17]||(r[17]=s=>e.confirmationDialog=!1)},{default:l(()=>[qa]),_:1}),t(h,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:r[18]||(r[18]=s=>e.makeConfirmation(e.confirmationStatus))},{default:l(()=>[Ma]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var Wa=Se(qe,[["render",Pa]]);export{Wa as default};
