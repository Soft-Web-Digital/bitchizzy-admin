import{a as oe,o as n,c as p,b as s,w as a,D as C,e as t,t as d,ax as te,j as I,av as se,x as v,a9 as x,aX as re,r as u,s as ie,am as ae,h as ne,ai as z,F as U,k as F,ay as ue,as as pe,H as de,aA as ce,a2 as Y,af as me,aB as ve,a1 as fe,m as y,a8 as ge,I as _e,aG as he,M as ye,at as $}from"./index.09a9e36e.js";import{u as R}from"./providers.fc9c91ce.js";import{u as E,_ as be,a as Ve,b as we}from"./uploadImage.cddb4d11.js";import{u as ke}from"./useFormatter.be1a3376.js";import{_ as Ce}from"./plugin-vue_export-helper.21dcd24c.js";import{u as De}from"./index.11c402df.js";import"./axios-services.17ccf49f.js";const Se=oe({setup(){const l=u([{title:"No."},{title:"Name"},{title:"Type"},{title:"Status"},{title:"Toggle Status"},{title:"Date"}]),r=u("");let w=u(""),D=u(!0);const b=he();let S=u(!1),f=u(1),V=u(1);const{singleProvider:i,loading:g,dialog:e}=ie(R()),{getProviders:P,getSingleProviders:_,toggleServices:G}=R(),H=o=>o==="partially_approved"?"Partial":o,X=u(1),T=u([]),q=o=>{S.value=!0;let c=o.length,m=0;if(event){for(V.value=o.length;c--;)E(o[m]).then(k=>{f.value++,h.value.push(k.secure_url),T.value.push(k.secure_url)}),m++;f.value=0}},A=ae({review_rate:"",review_note:"",review_proof:[]}),J=(o,c)=>{h.value=h.value.filter(m=>m!==o),A.review_proof.splice(c,1)},K=(o,c)=>{h.value=h.value.filter(m=>m!==o),T.value.splice(c,1)},h=u([]),O=o=>{S.value=!0;let c=o.length;console.log(o);let m=0;if(event){for(V.value=o.length;c--;)E(o[m]).then(k=>{f.value++,h.value.push(k.secure_url),A.review_proof.push(k.secure_url)}),m++;f.value=0}},N=()=>{e.value==!0&&(e.value=!1)},Q=()=>{D.value=!1,w.value=b.params.id,M("approve",b.params.id)},W=()=>{D.value=!1,w.value=b.params.id,N()},Z=()=>{D.value=!1,w.value=b.params.id,e.value=!0},ee=o=>o=="pending"?"yellow-darken-3":o=="approved"||o=="enabled"?"green lighten-3":o=="declined"||o=="disabled"?"red lighten-3":o=="partially_approved"?"purple lighten-3":"";ne(()=>{_(b.params.id)});const{formatCurrency:le}=ke(),j=u(!1);let B=u("");const L=u(""),M=(o,c)=>{j.value=!0,B.value=c,L.value=o};return{singleProvider:i,related_giftcard:l,reproof:T,loading:g,useDateFormat:De,formate_text:H,status_color:ee,dialog:e,partial_approve:A,get_reproof:q,note:r,id:w,disapprove:N,approveAll:Q,disapproveAll:W,partialApproveAll:Z,page_no:X,partial:O,formatCurrency:le,openConfirmationDialog:M,previewList:h,startImage:f,totalImage:V,uploadingImage:S,removeImage:J,removeImageDecline:K,toggleServices:G,confirmationID:B,confirmationDialog:j,confirmationStatus:L}}}),Pe=y(" Provider "),Ie={class:"mb-5 md-mb-0 d-md-flex justify-space-between"},Te={class:"my-5 text-capitalize username"},Ae={key:0},Ue={key:1,class:"text-center pa-5"},Fe={class:"mb-3 d-flex justify-space-between"},Ne=t("h3",{class:"text-justify mt-7"},"Partial approval",-1),je=t("label",{for:"proof",class:"cursor-pointer"},[t("p",{class:"text-black"},"Upload transaction proof")],-1),Be={key:0,for:"proof",class:"cursor-pointer"},Le=t("img",{src:Ve,alt:"card-placeholder",class:"mt-3 w-full object-fill max-h-[174px] rounded-xl"},null,-1),Me=[Le],xe={class:"gap-5 mt-5",style:{display:"grid","grid-template-columns":"repeat(4, 80px)",gap:"12px"}},ze={style:{position:"relative"}},Ye=["src"],$e=["onClick"],Re={key:1,class:"pt-3 text-center"},Ee={class:"p-2 block"},Ge={key:2,for:"proof",class:"mt-4 d-flex align-center cursor-pointer"},He=t("img",{src:we,alt:"plus icon"},null,-1),Xe=t("p",{class:"ml-3 underline"},"Add more proof",-1),qe=[He,Xe],Je=y("submit"),Ke=y(" Confirm "),Oe=y("Cancel"),Qe=y("Yes");function We(l,r,w,D,b,S){var f,V;return n(),p("div",null,[s(C,{link:"",size:"small",color:"grey-darken-4",to:{name:"Providers"}},{default:a(()=>[s(z,{size:"small",start:"",icon:"mdi-arrow-left"}),Pe]),_:1}),t("div",Ie,[t("h2",Te,d(l.singleProvider.name)+" Service:",1)]),s(te,null,{default:a(()=>{var i,g;return[t("thead",null,[t("tr",null,[(n(!0),p(U,null,F(l.related_giftcard,(e,P)=>(n(),p("th",{key:P,class:"text-left"},d(e.title),1))),128))])]),((g=(i=l.singleProvider)==null?void 0:i.products)==null?void 0:g.length)>0&&l.loading==!1?(n(),p("tbody",Ae,[(n(!0),p(U,null,F(l.singleProvider.products,(e,P)=>(n(),p("tr",{class:"pa-3",key:e.id},[t("td",null,d(P+1),1),t("td",null,d(e.name),1),t("td",null,d(e.type),1),t("td",null,[s(ye,{label:"",size:"small",class:"text-capitalize font-weight-bold pa-3",color:l.status_color(e==null?void 0:e.status)},{default:a(()=>[y(d((e==null?void 0:e.status)=="partially_approved"?"Approved":e==null?void 0:e.status),1)]),_:2},1032,["color"])]),t("td",null,[(e==null?void 0:e.status)=="enabled"?(n(),I($,{key:0,color:(e==null?void 0:e.status)=="enabled"?"success":"secondry",value:e==null?void 0:e.status,modelValue:e.status,"onUpdate:modelValue":_=>e.status=_,onChange:_=>l.toggleServices(e==null?void 0:e.id,"disable")},null,8,["color","value","modelValue","onUpdate:modelValue","onChange"])):v("",!0),(e==null?void 0:e.status)=="disabled"?(n(),I($,{key:1,color:(e==null?void 0:e.status)=="enabled"?"success":"secondry",value:!1,modelValue:e.status,"onUpdate:modelValue":_=>e.status=_,onChange:_=>l.toggleServices(e==null?void 0:e.id,"enable")},null,8,["color","modelValue","onUpdate:modelValue","onChange"])):v("",!0)]),t("td",null,d(l.useDateFormat(e==null?void 0:e.created_at,"DD, MMMM-YYYY").value),1)]))),128))])):v("",!0)]}),_:1}),l.loading==!0?(n(),I(se,{key:0,class:"align-center justify-center w-100 my-5"},{default:a(()=>[s(ue,{indeterminate:""})]),_:1})):v("",!0),((V=(f=l.singleProvider)==null?void 0:f.products)==null?void 0:V.length)<=0||l.singleProvider==null?(n(),p("p",Ue," No Services ")):v("",!0),l.dialog?(n(),I(x,{key:2,modelValue:l.dialog,"onUpdate:modelValue":r[5]||(r[5]=i=>l.dialog=i),"max-width":"429px","min-height":"476px"},{default:a(()=>[s(Y,{class:"view-dialog pa-4"},{default:a(()=>[t("div",Fe,[Ne,s(C,{onClick:r[0]||(r[0]=i=>l.dialog=!1),icon:"mdi-close",color:"secondary",variant:"text"},{default:a(()=>[s(z,{icon:"mdi-close"})]),_:1})]),s(pe,{class:"my-10"},{default:a(()=>[s(de,{prefix:"\u20A6\u200E",modelValue:l.partial_approve.review_rate,"onUpdate:modelValue":r[1]||(r[1]=i=>l.partial_approve.review_rate=i),type:"number",variant:"outlined",label:"Review Amount"},null,8,["modelValue"]),s(ce,{modelValue:l.partial_approve.review_note,"onUpdate:modelValue":r[2]||(r[2]=i=>l.partial_approve.review_note=i),variant:"outlined",label:"Review Note"},null,8,["modelValue"]),je,l.previewList.length?v("",!0):(n(),p("label",Be,Me)),t("input",{type:"file",multiple:"",id:"proof",ref:"fileInput",style:{display:"none"},accept:"image/*",onChange:r[3]||(r[3]=i=>l.partial(i.target.files))},null,544),t("div",xe,[(n(!0),p(U,null,F(l.previewList,(i,g)=>(n(),p("div",{key:g},[t("div",ze,[t("img",{class:"w-full cursor-pointer",style:{height:"75px","object-fit":"cover",width:"100%"},src:i},null,8,Ye),t("img",{src:be,class:"absolute rounded-full border border-red-700 -top-2 -right-2 bg-red-200 text-red-500 cursor-pointer",style:{position:"absolute",right:"-5px",top:"-5px"},width:"20",onClick:e=>l.removeImage(i,g)},null,8,$e)])]))),128))]),l.uploadingImage?(n(),p("div",Re,[t("small",Ee,"Uploaded "+d(l.startImage)+" of "+d(l.totalImage)+"...",1)])):v("",!0),l.previewList.length?(n(),p("label",Ge,qe)):v("",!0),s(C,{onClick:r[4]||(r[4]=i=>l.openConfirmationDialog("partial",l.id)),class:"mt-5",block:"",color:"secondary"},{default:a(()=>[Je]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])):v("",!0),s(re),s(x,{modelValue:l.confirmationDialog,"onUpdate:modelValue":r[8]||(r[8]=i=>l.confirmationDialog=i),width:"500"},{default:a(()=>[s(Y,null,{default:a(()=>[s(me,{dark:"",dense:"",flat:""},{default:a(()=>[s(ve,{class:"text-body-2 font-weight-bold grey--text"},{default:a(()=>[Ke]),_:1})]),_:1}),s(fe,{class:"pa-4 black--text"},{default:a(()=>[y("Are you sure you want to "+d(l.confirmationStatus==="partial"?"partially approve":l.confirmationStatus)+" this transaction?",1)]),_:1}),s(ge,{class:"pt-3"},{default:a(()=>[s(_e),s(C,{color:"grey",text:"",class:"body-2 font-weight-bold",onClick:r[6]||(r[6]=i=>l.confirmationDialog=!1)},{default:a(()=>[Oe]),_:1}),s(C,{color:"primary",class:"body-2 font-weight-bold",outlined:"",onClick:r[7]||(r[7]=()=>{})},{default:a(()=>[Qe]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var il=Ce(Se,[["render",We]]);export{il as default};
