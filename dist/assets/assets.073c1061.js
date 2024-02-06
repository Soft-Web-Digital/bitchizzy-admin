import{a as Ve,s as xe,r as w,h as we,A as K,o as i,j as I,w as t,b as e,e as n,aH as W,D as N,a2 as L,a7 as C,a6 as r,H as f,u as l,ax as he,c as p,k as P,F as Y,x as F,av as G,ay as Q,az as ke,a9 as X,au as Z,t as m,a1 as Ce,T as ee,as as Ae,C as Se,ar as Ie,a8 as Ne,I as Ue,O as le,P as te,m as b,y as $e,N as qe,q as De,V as Te,p as R,v as z,J as Be,K as je,a3 as Fe,a4 as Re}from"./index.09a9e36e.js";import{u as ae}from"./asset.ef81bb47.js";import{u as ze}from"./useFormatter.be1a3376.js";import{_ as Me}from"./plugin-vue_export-helper.21dcd24c.js";import{u as Le}from"./index.11c402df.js";const g=D=>(Fe("data-v-b5ee6ab2"),D=D(),Re(),D),Pe={class:"w-full d-md-flex justify-space-between my-3"},Ye=g(()=>n("h2",null,"Assets",-1)),Ee={class:"d-md-flex align-center"},He=b(" Create New Asset "),Oe=b("Search"),Je={key:0},Ke=b(" View Asset "),We=b(" Edit Asset "),Ge=b(" Restore Asset "),Qe=b(" Delete Asset "),Xe={key:0,class:"font-weight-bold text-center my-3"},Ze={class:"text-h5 font-weight-bold pa-7"},el=b("View current icon"),ll=b(" Close "),tl=b(" Submit "),al=g(()=>n("h3",{class:"text-center my-4"},"Asset Details",-1)),sl={class:"d-flex flex-column"},ol={class:"d-flex align-center justify-space-between w-full"},nl=g(()=>n("h4",{class:"text-grey font-weight-light"},"Name",-1)),ul={class:"d-flex align-center"},dl={class:"ml-3 font-weight-bold"},il=g(()=>n("h4",{class:"text-grey font-weight-light"},"Code",-1)),rl={class:"my-3 font-weight-bold"},ml=g(()=>n("h4",{class:"text-grey font-weight-light"},"Buy Rate",-1)),_l={class:"my-3 font-weight-bold"},cl=g(()=>n("h4",{class:"text-grey grey-darken-4 font-weight-light"},"Sell Rate",-1)),vl={class:"my-3 font-weight-bold"},fl={key:0,class:"mt-8"},yl=g(()=>n("h3",{class:"text-grey font-weight-bold"}," Network(s) that belong to this asset: ",-1)),pl={class:"mb-2"},bl=g(()=>n("h4",{class:"mb-1 text-grey font-weight-light"},"Name",-1)),gl={class:"font-weight-bold"},Vl={class:"mb-2"},xl=g(()=>n("h4",{class:"mb-1 text-grey font-weight-light"},"Wallet address",-1)),wl={class:"font-weight-bold"},hl={key:1,class:"text-center py-5"},kl=Ve({__name:"assets",setup(D){const{sortItems:se}=ze(),{getAllAsset:h,deleteAsset:oe,createAssets:E,restoreAsset:ne,updateAssets:H,getAllNetworks:ue,getSingleAsset:de}=ae(),{allTransactions:Cl,loading:A,dialog:V,asset:s,assets:T,all_networks:ie,dialog2:B,asset_details:k}=xe(ae()),re=w([{title:"No."},{title:"Icon"},{title:"Asset name"},{title:"Code"},{title:"Buy rate"},{title:"Sell rate"},{title:"Created At"},{title:"Actions"}]),c=w(""),v=w(""),y=w(1),me=()=>{V.value=!1,s.value=Object.assign({},{name:"",code:"",icon:"",buy_rate:"",sell_rate:"",id:"",networks:[],buy_min_amount:"",buy_max_amount:"",sell_min_amount:"",sell_max_amount:""}),j.value="Create Item",S.value=!1};we(async()=>{await h(y.value,c.value,v.value),await ue()});const _e=d=>new Intl.NumberFormat().format(d),ce=d=>{s.value.icon=d.target.files[0]},ve=d=>{window.open(d)},S=w(!1),j=w("Create Asset"),O=w("Create new asset"),fe=d=>{s.value={name:d.name,code:d.code,icon:d.icon,buy_rate:d.buy_rate,sell_rate:d.sell_rate,id:d.id,networks:d.networks,network_id:d.networks.map(a=>a.id),buy_min_amount:d.buy_min_amount,buy_max_amount:d.buy_max_amount,sell_min_amount:d.sell_min_amount,sell_max_amount:d.sell_max_amount},j.value="Update Asset",O.value="Edit asset",V.value=!0,S.value=!0,console.log(s.value)},ye=()=>{s.value={name:"",code:"",icon:"",buy_rate:"",sell_rate:"",id:"",networks:[],network_id:[],buy_min_amount:"",buy_max_amount:"",sell_min_amount:"",sell_max_amount:""},S.value=!1,j.value="Create Asset",O.value="Create new asset"};K(V,()=>{V.value||setTimeout(()=>{ye()},500)});const pe=[{text:"All Assets",value:"with"},{text:"Deleted Assets",value:"only"}],U=w("with"),be=d=>{d=="with"?h(y.value,c.value,v.value):h(y.value,c.value,v.value,"only")};K(U,d=>{be(d)});const ge=async d=>{await ne(d),U.value="with"};return(d,a)=>(i(),I(C,null,{default:t(()=>[e(r,{cols:"12",sm:"12",class:"mt-4"},{default:t(()=>[n("div",Pe,[Ye,n("div",Ee,[e(W,{modelValue:U.value,"onUpdate:modelValue":a[0]||(a[0]=o=>U.value=o),class:"select-field",label:"Filter by type",density:"compact",items:pe,"item-title":"text","item-value":"value",variant:"outlined"},null,8,["modelValue"]),e(N,{"prepend-icon":"mdi-plus",onClick:a[1]||(a[1]=o=>V.value=!0),variant:"flat",color:"secondary",class:"ml-3"},{default:t(()=>[He]),_:1})])]),e(L,{class:"pa-5"},{default:t(()=>{var o,$;return[e(C,null,{default:t(()=>[e(r,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(f,{density:"compact",variant:"outlined",label:"Asset name*",modelValue:c.value,"onUpdate:modelValue":a[2]||(a[2]=_=>c.value=_),required:""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(f,{density:"compact",variant:"outlined",label:"Asset code*",modelValue:v.value,"onUpdate:modelValue":a[3]||(a[3]=_=>v.value=_),required:""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(N,{onClick:a[4]||(a[4]=_=>c.value!==""||v.value!==""?l(h)(y.value,c.value,v.value):null),color:"secondary",block:""},{default:t(()=>[Oe]),_:1})]),_:1})]),_:1}),e(he,null,{default:t(()=>{var _,x;return[n("thead",null,[n("tr",null,[(i(!0),p(Y,null,P(re.value,(u,M)=>(i(),p("th",{key:M,class:"text-left"},m(u.title),1))),128))])]),((x=(_=l(T))==null?void 0:_.data)==null?void 0:x.length)>0&&l(A)==!1?(i(),p("tbody",Je,[(i(!0),p(Y,null,P(l(se)(l(T).data),(u,M)=>{var J;return i(),p("tr",{key:u.id},[n("td",null,m(M+1),1),n("td",null,[e(le,{size:"50px"},{default:t(()=>[e(te,{cover:"",class:"rounded-circle img-fluid img-size",src:u==null?void 0:u.icon},null,8,["src"])]),_:2},1024)]),n("td",{class:$e({"font-weight-bold":u.account_name==null})},m((J=u.name)!=null?J:"No name"),3),n("td",null,m(u.code),1),n("td",null,"$"+m(u==null?void 0:u.buy_rate),1),n("td",null,"$"+m(u==null?void 0:u.sell_rate),1),n("td",null,m(l(Le)(u==null?void 0:u.created_at,"DD, MMMM-YYYY hh:mm a").value),1),n("td",null,[e(C,{justify:"center"},{default:t(()=>[e(qe,{transition:"scroll-x-transition"},{activator:t(({props:q})=>[e(N,De({text:"",icon:"mdi-dots-vertical",color:"transparent",class:"ma-2"},q),null,16)]),default:t(()=>[e(Te,null,{default:t(()=>[e(R,{onClick:q=>{B.value=!0,l(de)(u==null?void 0:u.id)},link:"",color:"secondary"},{default:t(()=>[e(z,null,{default:t(()=>[Ke]),_:1})]),_:2},1032,["onClick"]),e(R,{onClick:q=>fe(u),link:"",color:"secondary"},{default:t(()=>[e(z,null,{default:t(()=>[We]),_:1})]),_:2},1032,["onClick"]),Be(e(R,{onClick:q=>ge(u==null?void 0:u.id),link:"",color:"secondary"},{default:t(()=>[e(z,null,{default:t(()=>[Ge]),_:1})]),_:2},1032,["onClick"]),[[je,U.value==="only"]]),e(R,{onClick:q=>l(oe)(u==null?void 0:u.id),link:"",color:"secondary"},{default:t(()=>[e(z,null,{default:t(()=>[Qe]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)])])}),128))])):F("",!0)]}),_:1}),(($=(o=l(T))==null?void 0:o.data)==null?void 0:$.length)<=0&&l(A)==!1?(i(),p("p",Xe," No data found ")):F("",!0),l(A)==!0?(i(),I(G,{key:1,class:"align-center justify-center w-100 my-5"},{default:t(()=>[e(Q,{indeterminate:""})]),_:1})):F("",!0)]}),_:1}),e(ke,{modelValue:y.value,"onUpdate:modelValue":[a[5]||(a[5]=o=>y.value=o),a[8]||(a[8]=o=>l(h)(y.value,c.value,v.value))],length:l(T).last_page,onNext:a[6]||(a[6]=o=>l(h)(y.value,c.value,v.value)),onPrev:a[7]||(a[7]=o=>l(h)(y.value,c.value,v.value)),"active-color":"red",start:1,variant:"flat",class:"mt-5",color:"bg-secondary",rounded:"circle"},null,8,["modelValue","length"])]),_:1}),e(C,{justify:"center"},{default:t(()=>[e(X,{persistent:"",modelValue:l(V),"onUpdate:modelValue":a[22]||(a[22]=o=>Z(V)?V.value=o:null),"max-width":"500px"},{default:t(()=>[e(L,{loading:l(A)},{default:t(()=>[n("h3",Ze,m(j.value),1),e(Ce,null,{default:t(()=>[e(ee,null,{default:t(()=>[e(Ae,{onSubmit:a[21]||(a[21]=Se(o=>S.value?l(H)(l(s)):l(E)(l(s)),["prevent"]))},{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12",sm:"6",md:"12"},{default:t(()=>[e(f,{modelValue:l(s).name,"onUpdate:modelValue":a[9]||(a[9]=o=>l(s).name=o),variant:"outlined",label:"Asset name*",required:""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",sm:"6",md:"12"},{default:t(()=>[e(f,{modelValue:l(s).code,"onUpdate:modelValue":a[10]||(a[10]=o=>l(s).code=o),variant:"outlined",label:"Asset Short Code*",required:""},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(Ie,{variant:"outlined",label:"Asset Icon*",required:"",onChange:ce,"prepend-icon":"","append-inner-icon":"mdi-paperclip"}),S.value==!0?(i(),I(N,{key:0,size:"small",link:"",onClick:a[11]||(a[11]=o=>ve(l(s).icon)),class:"cursor-pointer",label:"",color:"secondary"},{default:t(()=>[el]),_:1})):F("",!0)]),_:1}),e(r,{cols:"12",sm:"12"},{default:t(()=>[e(f,{modelValue:l(s).buy_rate,"onUpdate:modelValue":a[12]||(a[12]=o=>l(s).buy_rate=o),variant:"outlined",label:"Buy Rate*",required:"",type:"number"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",sm:"12"},{default:t(()=>[e(f,{modelValue:l(s).sell_rate,"onUpdate:modelValue":a[13]||(a[13]=o=>l(s).sell_rate=o),variant:"outlined",label:"Sell Rate*",required:"",type:"number"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",sm:"12"},{default:t(()=>[e(f,{modelValue:l(s).buy_min_amount,"onUpdate:modelValue":a[14]||(a[14]=o=>l(s).buy_min_amount=o),variant:"outlined",label:"Buy min amount*",required:"",type:"number"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",sm:"12"},{default:t(()=>[e(f,{modelValue:l(s).buy_max_amount,"onUpdate:modelValue":a[15]||(a[15]=o=>l(s).buy_max_amount=o),variant:"outlined",label:"Buy max amount*",required:"",type:"number"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",sm:"12"},{default:t(()=>[e(f,{modelValue:l(s).sell_min_amount,"onUpdate:modelValue":a[16]||(a[16]=o=>l(s).sell_min_amount=o),variant:"outlined",label:"Sell min amount*",required:"",type:"number"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",sm:"12"},{default:t(()=>[e(f,{modelValue:l(s).sell_max_amount,"onUpdate:modelValue":[a[17]||(a[17]=o=>l(s).sell_max_amount=o),a[18]||(a[18]=()=>_e(l(s).sell_max_amount))],variant:"outlined",label:"Sell max amount*",required:"",type:"number"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",sm:"12"},{default:t(()=>[e(W,{variant:"outlined","item-title":"name","item-value":"id",items:l(ie),multiple:"",chips:"",modelValue:l(s).networks,"onUpdate:modelValue":a[19]||(a[19]=o=>l(s).networks=o),label:"Select Networks",required:""},null,8,["items","modelValue"])]),_:1})]),_:1}),e(Ne,null,{default:t(()=>[e(Ue),e(N,{color:"secondary",class:"px-7",variant:"outlined",onClick:me},{default:t(()=>[ll]),_:1}),e(N,{color:"secondary",class:"px-12",disabled:!l(s).name||!l(s).code||!l(s).buy_rate||!l(s).sell_rate||!l(s).network_id||!l(s).icon||!l(s).buy_min_amount||!l(s).buy_max_amount||!l(s).sell_min_amount||!l(s).sell_max_amount,loading:l(A),variant:"flat",onClick:a[20]||(a[20]=o=>S.value===!0?l(H)(l(s)):l(E)(l(s)))},{default:t(()=>[tl]),_:1},8,["disabled","loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["loading"])]),_:1},8,["modelValue"])]),_:1}),e(C,{justify:"center"},{default:t(()=>[e(X,{modelValue:l(B),"onUpdate:modelValue":a[23]||(a[23]=o=>Z(B)?B.value=o:null),"max-width":"500px"},{default:t(()=>[e(L,null,{default:t(()=>[al,l(A)==!0?(i(),I(G,{key:0,class:"align-center justify-center w-100 my-5"},{default:t(()=>[e(Q,{indeterminate:""})]),_:1})):(i(),I(ee,{key:1,class:"fill-height"},{default:t(()=>{var o,$;return[n("div",sl,[n("div",ol,[n("div",null,[nl,n("div",ul,[e(le,{size:"50px"},{default:t(()=>{var _;return[e(te,{class:"img-fluid rounded-circle img-size",cover:"",src:(_=l(k))==null?void 0:_.icon},null,8,["src"])]}),_:1}),n("p",dl,m(l(k).name),1)])]),n("div",null,[il,n("p",rl,m(l(k).code),1)]),n("div",null,[ml,n("p",_l,m(l(k).buy_rate),1)]),n("div",null,[cl,n("p",vl,m(l(k).sell_rate),1)])]),(($=(o=l(k))==null?void 0:o.networks)==null?void 0:$.length)>0?(i(),p("div",fl,[yl,e(C,{class:""},{default:t(()=>{var _;return[(i(!0),p(Y,null,P((_=l(k))==null?void 0:_.networks,x=>(i(),I(r,{cols:"12",sm:"6",key:x==null?void 0:x.id},{default:t(()=>[n("div",pl,[bl,n("p",gl,m(x.name),1)]),n("div",Vl,[xl,n("p",wl,m(x.wallet_address),1)])]),_:2},1024))),128))]}),_:1})])):(i(),p("p",hl,"This asset has no related network"))])]}),_:1}))]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}});var $l=Me(kl,[["__scopeId","data-v-b5ee6ab2"]]);export{$l as default};