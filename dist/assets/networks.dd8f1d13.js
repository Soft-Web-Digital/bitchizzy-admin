import{d,f as r,Y as i,b3 as l,aD as h,b4 as c,a0 as n}from"./index.768fb5ed.js";const g=d("networks",{state:()=>({loading:!1,dialog:!1,dialog2:!1,networks:[],network:{name:"",wallet_address:""},system_data:[],content:"",single_network:{}}),getters:{},actions:{async createNetworks(a){const s=r();var t=new FormData;this.loading=!0,t.append("name",a.name),t.append("wallet_address",a.wallet_address);const{notify:e}=n();try{await i.post(l,t,{headers:{Accept:"application/json",Authorization:`Bearer ${s.token}`}}).then(o=>{this.loading=!1,e({title:"Successful",text:o.data.message,type:"success"}),this.getAllNetwork(),this.dialog=!1})}catch(o){this.loading=!1,e({title:"An Error Occurred",text:o.response.data.message,type:"error"})}},async editNetworks(a){const s=r();var t=new FormData;h(),this.loading=!0,t.append("name",a.name),t.append("wallet_address",a.wallet_address),t.append("_method","PATCH");const{notify:e}=n();try{await i.post(l+"/"+a.id,t,{headers:{Accept:"application/json",Authorization:`Bearer ${s.token}`}}).then(o=>{this.loading=!1,e({title:"Successful",text:o.data.message,type:"success"}),this.getAllNetwork(),this.dialog=!1})}catch(o){this.loading=!1,e({title:"An Error Occurred",text:o.response.data.message,type:"error"})}},async deleteNetworks(a){const s=r();this.loading=!0;const{notify:t}=n();try{await i.delete(l+"/"+a,{headers:{Accept:"application/json",Authorization:`Bearer ${s.token}`}}).then(e=>{this.loading=!1,t({title:"Successful",text:e.data.message,type:"success"}),this.getAllNetwork(),this.dialog=!1})}catch(e){this.loading=!1,t({title:"An Error Occurred",text:e.response.data.message,type:"error"})}},async restoreNetworks(a){const s=r();this.loading=!0;const{notify:t}=n();try{await i.patch(l+"/"+a+"/restore","",{headers:{Accept:"application/json",Authorization:`Bearer ${s.token}`}}).then(e=>{this.loading=!1,t({title:"Successful",text:e.data.message,type:"success"}),this.getAllNetwork(),this.dialog=!1})}catch(e){this.loading=!1,t({title:"An Error Occurred",text:e.response.data.message,type:"error"})}},async getAllNetwork(a=1,s=""){const t=r(),{notify:e}=n();this.loading=!0;try{await i.get(l+"?include=assetsCount&page="+a+"&per_page=100&filter[name]="+s,{headers:{Accept:"application/json",Authorization:`Bearer ${t.token}`}}).then(o=>{this.loading=!1,e({title:"Successful",text:o.data.message,type:"success"}),this.networks=o.data.data.networks})}catch{this.loading=!1}},async getSingleNetwork(a){const s=r(),{notify:t}=n();this.loading=!0;try{await i.get(l+"/"+a+"?include=assets",{headers:{Accept:"application/json",Authorization:`Bearer ${s.token}`}}).then(e=>{this.loading=!1,t({title:"Successful",text:e.data.message,type:"success"}),this.single_network=e.data.data.network})}catch{this.loading=!1}},async getAllSystemData(){const a=r(),{notify:s}=n();this.loading=!0;try{await i.get(c,{headers:{Accept:"application/json",Authorization:`Bearer ${a.token}`}}).then(t=>{this.loading=!1,s({title:"Successful",text:t.data.message,type:"success"}),this.system_data=t.data.data.system_data})}catch{this.loading=!1}},async editSystemData(a){const s=r(),{notify:t}=n();this.loading=!0;var e=new FormData;e.append("content",a.content),e.append("_method","PATCH");try{await i.post(c+"/"+a.id,e,{headers:{Accept:"application/json",Authorization:`Bearer ${s.token}`}}).then(o=>{this.loading=!1,t({title:"Successful",text:o.data.message,type:"success"}),this.system_data=o.data.data.system_data,this.dialog2=!1,this.getAllSystemData()})}catch{this.loading=!1}}}});export{g as u};
