import{d as ke,f as v,Y as h,b0 as x,a0 as C,a as Se,s as ee,B as te,r as y,am as Pe,h as Ge,o as m,c as G,b as e,e as l,w as o,D as N,a7 as T,a6 as p,H as z,aH as Ie,u as t,a2 as M,ax as $e,F as J,k as ae,x as R,j as H,ay as le,av as oe,az as je,a9 as re,au as se,t as _,a1 as Ee,T as ne,as as Ue,a$ as K,a8 as Be,I as Le,m as V,M as Ne,at as Te,N as ze,q as Oe,V as qe,p as Q,v as W,a3 as Fe,a4 as De}from"./index.09a9e36e.js";import{_ as Me}from"./BaseBreadcrumb.4ccd5924.js";import{u as Re}from"./country.9f13e2ad.js";import{u as He}from"./giftcard.06a76fe9.js";import{u as Ye}from"./useFormatter.be1a3376.js";import{_ as Je}from"./plugin-vue_export-helper.21dcd24c.js";/* empty css                                                       */import"./filedownloader.f3cc1d55.js";const de=ke("gift_product",{state:()=>({giftCard:{name:"",currency:"",country:[],sell_rate:0,sell_min_amount:"",sell_max_amount:"",giftcard_category:[]},loading:!1,gift_products:{name:"",country_id:"",currency_id:"",sell_rate:"",sell_min_amount:"",sell_max_amount:"",giftcard_category_id:"",id:"",data:"",giftcard_id:""},dialog:!1,dialog2:!1,singleGiftProduct:{}}),getters:{},actions:{async getAllGifCardProduct(d=1,u="",c=""){const{notify:s}=C();this.loading=!0;const g=v();try{await h.get(x+"?include=currency,giftcardCategory,country&page="+d+"&filter[name]="+u.toLowerCase()+"&filter[activated]="+c+"&per_page=100",{headers:{Accept:"application/json",Authorization:`Bearer ${g.token}`}}).then(i=>{this.loading=!1,this.gift_products=i.data.data.giftcard_products})}catch(i){this.loading=!1,s({title:"An Error Occurred",text:i.response.data.message,type:"error"})}},async createGiftCardProduct(d){const u=v(),{notify:c}=C();var s=new FormData;s.append("giftcard_category_id",d.giftcard_category),s.append("country_id",d.country),s.append("currency_id",d.currency),s.append("name",d.name),s.append("sell_rate",d.sell_rate),s.append("sell_min_amount",d.sell_min_amount),s.append("sell_max_amount",d.sell_max_amount),this.loading=!0;try{await h.post(x,s,{headers:{Accept:"application/json",Authorization:`Bearer ${u.token}`}}).then(g=>{this.loading=!1,c({title:"Successful",text:g.data.message,type:"success"});const i={name:"",country_id:"",currency_id:"",sell_rate:"",sell_min_amount:"",sell_max_amount:"",giftcard_category_id:"",id:"",data:"",giftcard_id:""};this.giftCard=Object.assign({},i),this.dialog=!1,this.getAllGifCardProduct()})}catch(g){this.loading=!1,c({title:"An Error Occurred",text:g.response.data.message,type:"error"})}},async editGiftCardProduct(d){const u=v(),{notify:c}=C();var s=new FormData;s.append("giftcard_category_id",d.giftcard_category_id),s.append("country_id",d.country_id),s.append("currency_id",d.currency_id),s.append("name",d.name),s.append("sell_rate",d.sell_rate),s.append("sell_min_amount",d.sell_min_amount),s.append("sell_max_amount",d.sell_max_amount),s.append("_method","PATCH"),this.loading=!0;try{await h.post(x+"/"+d.id,s,{headers:{Accept:"application/json",Authorization:`Bearer ${u.token}`}}).then(g=>{this.loading=!1,c({title:"Successful",text:g.data.message,type:"success"}),this.dialog=!1,this.getAllGifCardProduct()})}catch(g){this.loading=!1,c({title:"An Error Occurred",text:g.response.data.message,type:"error"})}},async getSingleGifCard(d){const{notify:u}=C(),c=v();try{await h.get(x+"/"+d+"?include=giftcardCategory,country,currency",{headers:{Accept:"application/json",Authorization:`Bearer ${c.token}`}}).then(s=>{this.singleGiftProduct=s.data.data.giftcard_product})}catch(s){u({title:"An Error Occurred",text:s.response.data.message,type:"error"})}},async getSingleGifCardCategories(d){const{notify:u}=C(),c=v();try{await h.get(x+"/"+d,{headers:{Accept:"application/json",Authorization:`Bearer ${c.token}`}}).then(s=>{this.singleGiftProduct=s.data.data.giftcard_product})}catch(s){u({title:"An Error Occurred",text:s.response.data.message,type:"error"})}},async deleteGifCardProducts(d){if(confirm("Are you sure you want to delete this gift card Item?")){const{notify:u}=C(),c=v();try{await h.delete(x+"/"+d,{headers:{Accept:"application/json",Authorization:`Bearer ${c.token}`}}).then(s=>{u({title:"Successful",text:"Item deleted successfully",type:"success"}),this.getAllGifCardProduct()})}catch(s){u({title:"An Error Occurred",text:s.response.data.message,type:"error"})}}},async restoreGifCardProduct(d){if(confirm("Are you sure you want to restore this gift card Item?")){const{notify:u}=C(),c=v();try{await h.patch(x+"/"+d+"/restore","",{headers:{Accept:"application/json",Authorization:`Bearer ${c.token}`}}).then(s=>{u({title:"Successful",text:"Item restored successfully",type:"success"}),this.getAllGifCardProduct()})}catch(s){u({title:"An Error Occurred",text:s.response.data.message,type:"error"})}}},async activationGifCardProduct(d){if(confirm("Are you sure you want to activation this gift card Item ?")){const{notify:u}=C(),c=v();try{await h.patch(x+"/"+d+"/activation","",{headers:{Accept:"application/json",Authorization:`Bearer ${c.token}`}}).then(s=>{u({title:"Successful",text:"Item restored successfully",type:"success"}),this.getAllGifCardProduct()})}catch(s){u({title:"An Error Occurred",text:s.response.data.message,type:"error"})}}}}});const A=d=>(Fe("data-v-99f966c6"),d=d(),De(),d),Ke={class:"w-full d-flex justify-end my-3"},Qe=V(" Create new giftcard product "),We=V("Filter data"),Xe={key:0},Ze={class:"break-txt"},et=V(" View Product "),tt=V(" Edit Product "),at=V(" Delete Product "),lt={key:1,class:"text-center py-6"},ot={class:"text-h5 font-weight-bold pa-7"},rt=V(" Close "),st=A(()=>l("h3",{class:"text-center my-4"},"Product Details",-1)),nt={class:"d-flex flex-row"},dt={class:""},it=A(()=>l("h4",{class:"text-grey font-weight-light"},"Name",-1)),ut={class:"d-flex align-center"},ct={class:"my-3 font-weight-bold"},ft=A(()=>l("h4",{class:"text-grey font-weight-light"},"Country",-1)),_t={class:"d-flex align-center"},gt={class:"my-3 font-weight-bold"},mt=A(()=>l("h4",{class:"text-grey font-weight-light"},"Currency",-1)),pt={class:"d-flex align-center"},yt={class:"my-3 font-weight-bold"},vt=A(()=>l("h4",{class:"text-grey font-weight-light"},"Giftcard Category",-1)),ht={class:"d-flex align-center"},xt={class:"my-3 font-weight-bold"},Ct=A(()=>l("h4",{class:"text-grey font-weight-light"},"Min Sell Amount",-1)),Vt={class:"d-flex align-center"},At={class:"my-3 font-weight-bold"},bt=A(()=>l("h4",{class:"text-grey font-weight-light"},"Max Sell Amount",-1)),wt={class:"d-flex align-center"},kt={class:"my-3 font-weight-bold"},St=A(()=>l("h4",{class:"text-grey font-weight-light"},"Sell Rate",-1)),Pt={class:"d-flex align-center"},Gt={class:"my-3 font-weight-bold"},It=Se({__name:"products",setup(d){const{countries:u,giftCardCategories:c,currencies:s,giftCategories:g}=ee(Re()),{giftCard:i,loading:I,dialog:$,gift_products:O,dialog2:q,singleGiftProduct:b}=ee(de()),{getSingleGifCardCategories:ie}=He(),{createGiftCardProduct:ue,getAllGifCardProduct:E,deleteGifCardProducts:ce,activationGifCardProduct:fe,editGiftCardProduct:_e,getSingleGifCard:ge}=de(),{sortItems:me}=Ye(),pe=te(()=>g.value.find(f=>{var a;if(f.id==i.value.giftcard_category)return f.countries;if(f.id==((a=i.value.giftcard_category)==null?void 0:a.id))return f.countries})),ye=te(()=>{var f,a;return(a=(f=pe.value)==null?void 0:f.countries)==null?void 0:a.filter(D=>D)}),ve=y({title:"Gift Card Product"}),he=y([{text:"Cards",disabled:!1,href:"#"},{text:"Products",disabled:!0,href:"#"}]),X=y(!1),xe=y([f=>!!f||"Giftcard name is required"]),Ce=Pe([{title:"No"},{title:"Name"},{title:"Country"},{title:"Sell Rate"},{title:"Sell min amount"},{title:"Sell max amount"},{title:"Status"},{title:"Toggle activation"},{title:"Actions"}]),w=y(1);Ge(async()=>{await E(w.value,k.value,S.value)});const Ve=f=>f!==null?"Activated":"Not active",Ae=f=>f!==null?"green lighten-3":"red lighten-3",Y=y(!1),F=y("Create Item"),be=f=>{i.value=Object.assign({},f),F.value="Update Item",$.value=!0,Y.value=!0},we=()=>{$.value=!1,i.value=Object.assign({},{name:"",country_id:"",currency_id:"",sell_rate:"",sell_min_amount:"",sell_max_amount:"",giftcard_category_id:"",id:"",data:"",giftcard_id:""}),F.value="Create Item",Y.value=!1},k=y(""),S=y("");return(f,a)=>{var D;return m(),G(J,null,[e(Me,{title:ve.value.title,breadcrumbs:he.value},null,8,["title","breadcrumbs"]),l("div",Ke,[e(N,{"prepend-icon":"mdi-plus",onClick:a[0]||(a[0]=n=>$.value=!0),variant:"flat",color:"secondary"},{default:o(()=>[Qe]),_:1})]),e(M,{flat:"",elevation:"0",rounded:"0",class:"my-5 pa-4"},{default:o(()=>[e(T,{class:"mt-3"},{default:o(()=>[e(p,{cols:"12",sm:"6",md:"4"},{default:o(()=>[e(z,{label:"Filter by product name",density:"compact",modelValue:k.value,"onUpdate:modelValue":a[1]||(a[1]=n=>k.value=n),variant:"outlined","onClick:clear":f.clearMessage,clearable:""},null,8,["modelValue","onClick:clear"])]),_:1}),e(p,{cols:"12",sm:"6",md:"4"},{default:o(()=>[e(Ie,{modelValue:S.value,"onUpdate:modelValue":a[2]||(a[2]=n=>S.value=n),label:"Filter by activation status",density:"compact",items:["Active","Not active"],variant:"outlined"},null,8,["modelValue"])]),_:1}),e(p,{cols:"12",sm:"6",md:"4"},{default:o(()=>[e(N,{onClick:a[3]||(a[3]=n=>t(E)(w.value,k.value,S.value=="Active"?1:0)),block:"",loading:t(I),color:"secondary"},{default:o(()=>[We]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1}),e(M,{class:"my-1"},{default:o(()=>{var n,U;return[e($e,null,{default:o(()=>{var B,L;return[l("thead",null,[l("tr",null,[(m(!0),G(J,null,ae(Ce,(r,j)=>(m(),G("th",{key:j,class:"text-left"},_(r.title),1))),128))])]),t(I)==!1&&((L=(B=t(O))==null?void 0:B.data)==null?void 0:L.length)>0?(m(),G("tbody",Xe,[(m(!0),G(J,null,ae(t(me)(t(O).data),(r,j)=>{var Z;return m(),G("tr",{key:r==null?void 0:r.id},[l("td",null,_(j+1),1),l("td",Ze,_(r==null?void 0:r.name),1),l("td",null,_((Z=r==null?void 0:r.country)==null?void 0:Z.name),1),l("td",null,_(r.sell_rate.toLocaleString()),1),l("td",null,"\u20A6\u200E "+_(r.sell_min_amount.toLocaleString()),1),l("td",null,"\u20A6\u200E "+_(r.sell_max_amount.toLocaleString()),1),l("td",null,[e(Ne,{label:"",class:"pa-2",color:Ae(r==null?void 0:r.activated_at)},{default:o(()=>[V(_(Ve(r==null?void 0:r.activated_at)),1)]),_:2},1032,["color"])]),l("td",null,[e(Te,{color:(r==null?void 0:r.activated_at)!==null?"secondary":null,value:r==null?void 0:r.activated_at,modelValue:r.activated_at,"onUpdate:modelValue":P=>r.activated_at=P,onInput:P=>t(fe)(r==null?void 0:r.id)},null,8,["color","value","modelValue","onUpdate:modelValue","onInput"])]),l("td",null,[e(T,{justify:"center"},{default:o(()=>[e(ze,{transition:"scroll-y-transition"},{activator:o(({props:P})=>[e(N,Oe({text:"",icon:"mdi-dots-vertical",color:"transparent",class:"ma-2"},P),null,16)]),default:o(()=>[e(qe,null,{default:o(()=>[e(Q,{onClick:P=>(q.value=!0,t(ge)(r==null?void 0:r.id)),link:"",color:"secondary"},{default:o(()=>[e(W,null,{default:o(()=>[et]),_:1})]),_:2},1032,["onClick"]),e(Q,{onClick:P=>be(r),link:"",color:"secondary"},{default:o(()=>[e(W,null,{default:o(()=>[tt]),_:1})]),_:2},1032,["onClick"]),e(Q,{onClick:P=>t(ce)(r==null?void 0:r.id),link:"",color:"secondary"},{default:o(()=>[e(W,null,{default:o(()=>[at]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)])])}),128))])):R("",!0)]}),_:1}),t(I)==!0?(m(),H(oe,{key:0,class:"align-center justify-center w-100 my-5"},{default:o(()=>[e(le,{indeterminate:""})]),_:1})):R("",!0),t(I)==!1&&((U=(n=t(O))==null?void 0:n.data)==null?void 0:U.length)<=0?(m(),G("p",lt," No data available ")):R("",!0)]}),_:1}),e(je,{modelValue:w.value,"onUpdate:modelValue":[a[4]||(a[4]=n=>w.value=n),a[7]||(a[7]=n=>t(E)(w.value,k.value,S.value))],length:(D=t(O))==null?void 0:D.last_page,onNext:a[5]||(a[5]=n=>t(E)(w.value,k.value,S.value)),onPrev:a[6]||(a[6]=n=>t(E)(w.value,k.value,S.value)),"active-color":"red",start:1,variant:"flat",class:"mt-5",color:"bg-secondary",rounded:"circle"},null,8,["modelValue","length"]),e(T,{justify:"center"},{default:o(()=>[e(re,{modelValue:t($),"onUpdate:modelValue":a[17]||(a[17]=n=>se($)?$.value=n:null),"max-width":"500px",persistent:""},{default:o(()=>[e(M,null,{default:o(()=>[l("h3",ot,_(F.value),1),e(Ee,null,{default:o(()=>[e(ne,null,{default:o(()=>[e(Ue,{ref:"form",modelValue:X.value,"onUpdate:modelValue":a[15]||(a[15]=n=>X.value=n),"lazy-validation":""},{default:o(()=>[e(T,null,{default:o(()=>[e(p,{cols:"12",sm:"6",md:"12"},{default:o(()=>[e(z,{modelValue:t(i).name,"onUpdate:modelValue":a[8]||(a[8]=n=>t(i).name=n),rules:xe.value,variant:"outlined",label:"Giftcard product name*",required:""},null,8,["modelValue","rules"])]),_:1}),e(p,{cols:"12",sm:"6",md:"12"},{default:o(()=>[e(z,{modelValue:t(i).sell_rate,"onUpdate:modelValue":a[9]||(a[9]=n=>t(i).sell_rate=n),variant:"outlined",label:"Selling Rate*",prefix:"\u20A6\u200E",required:"",type:"number"},null,8,["modelValue"])]),_:1}),e(p,{cols:"12"},{default:o(()=>[e(z,{modelValue:t(i).sell_min_amount,"onUpdate:modelValue":a[10]||(a[10]=n=>t(i).sell_min_amount=n),variant:"outlined",label:"Selling amount*",required:"",prefix:"\u20A6\u200E",type:"number"},null,8,["modelValue"])]),_:1}),e(p,{cols:"12",sm:"12"},{default:o(()=>[e(z,{modelValue:t(i).sell_max_amount,"onUpdate:modelValue":a[11]||(a[11]=n=>t(i).sell_max_amount=n),variant:"outlined",label:"Selling Max Amount*",required:"",prefix:"\u20A6\u200E",type:"number"},null,8,["modelValue"])]),_:1}),e(p,{cols:"12",sm:"12"},{default:o(()=>[e(K,{variant:"outlined",items:t(c),label:"Giftcard categories*",required:"","onUpdate:modelValue":[t(ie),a[12]||(a[12]=n=>t(i).giftcard_category=n)],"item-title":"name","item-value":"id",modelValue:t(i).giftcard_category},null,8,["items","onUpdate:modelValue","modelValue"])]),_:1}),t(i).giftcard_category?(m(),H(p,{key:0,cols:"12",sm:"12"},{default:o(()=>[e(K,{items:t(ye),label:"Countries*",required:"",variant:"outlined","item-title":"name","item-value":"id",modelValue:t(i).country,"onUpdate:modelValue":a[13]||(a[13]=n=>t(i).country=n),hint:"This field is required","persistent-hint":""},null,8,["items","modelValue"])]),_:1})):R("",!0),e(p,{cols:"12",sm:"12"},{default:o(()=>[e(K,{items:t(s),variant:"outlined",label:"Currency*",required:"",modelValue:t(i).currency,"onUpdate:modelValue":a[14]||(a[14]=n=>t(i).currency=n),"item-title":"code","item-value":"id"},null,8,["items","modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(Be,null,{default:o(()=>[e(Le),e(N,{color:"secondary",class:"px-7",variant:"outlined",onClick:we},{default:o(()=>[rt]),_:1}),e(N,{loading:t(I),onClick:a[16]||(a[16]=n=>Y.value==!0?t(_e)(t(i)):t(ue)(t(i))),color:"secondary",class:"px-12",variant:"flat"},{default:o(()=>[V(_(F.value),1)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(T,{justify:"center"},{default:o(()=>[e(re,{modelValue:t(q),"onUpdate:modelValue":a[18]||(a[18]=n=>se(q)?q.value=n:null),"max-width":"500px"},{default:o(()=>[e(M,null,{default:o(()=>[st,t(I)==!0?(m(),H(oe,{key:0,class:"align-center justify-center w-100 my-5"},{default:o(()=>[e(le,{indeterminate:""})]),_:1})):(m(),H(ne,{key:1,class:"fill-height"},{default:o(()=>{var n,U,B,L,r,j;return[l("div",nt,[l("div",dt,[l("div",null,[it,l("div",ut,[l("p",ct,_(t(b).name),1)])]),l("div",null,[ft,l("div",_t,[l("p",gt,_((n=t(b).country)==null?void 0:n.name),1)])]),l("div",null,[mt,l("div",pt,[l("p",yt,_((U=t(b).currency)==null?void 0:U.code),1)])]),l("div",null,[vt,l("div",ht,[l("p",xt,_((B=t(b).giftcard_category)==null?void 0:B.name),1)])]),l("div",null,[Ct,l("div",Vt,[l("p",At,"\u20A6\u200E "+_((L=t(b).sell_min_amount)==null?void 0:L.toLocaleString()),1)])]),l("div",null,[bt,l("div",wt,[l("p",kt,"\u20A6\u200E "+_((r=t(b).sell_max_amount)==null?void 0:r.toLocaleString()),1)])]),l("div",null,[St,l("div",Pt,[l("p",Gt,_((j=t(b).sell_rate)==null?void 0:j.toLocaleString()),1)])])])])]}),_:1}))]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)}}});var zt=Je(It,[["__scopeId","data-v-99f966c6"]]);export{zt as default};