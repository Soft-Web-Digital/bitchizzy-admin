import{d as p,f as o,b9 as d,ba as n,a0 as l}from"./index.09a9e36e.js";import{k as i}from"./axios-services.17ccf49f.js";const g=p("referrals",{state:()=>({referrals:{},terms:{},loading:!1,disapproving:!1,approving:!1,singleWithdrawal:{},dialog:!1,transactions:{},all_transaction:{},total_withdrawal:{}}),actions:{async getReferrals(a,s){const e=o();this.loading=!0;try{await i.get(d+"/all",{headers:{Accept:"application/json",Authorization:`Bearer ${e.token}`}}).then(t=>{this.loading=!1,this.referrals=t.data})}catch{this.loading=!1}},async getReferralTerms(a){const s=o();this.loading=!0;try{await i.get(n+"/all",{headers:{Accept:"application/json",Authorization:`Bearer ${s.token}`}}).then(e=>{this.loading=!1,this.terms=e.data.data})}catch{this.loading=!1}},async deleteReferral(a,s){const e=o(),{notify:t}=l();this.disapproving=!0;var r=new FormData;r.append("note",s);try{await i.patch(d+"/"+a+"/decline",r,{headers:{Accept:"application/json",Authorization:`Bearer ${e.token}`}}).then(c=>{this.disapproving=!1,this.dialog=!1,t({title:"Successful",text:c.data.message,type:"success"}),this.getReferrals("",1)})}catch(c){this.disapproving=!1,this.dialog=!1,t({title:"An Error Occurred",text:c.response.data.message,type:"error"})}},async createReferralTerms(a){const s=o();var e=new FormData;this.loading=!0,e.append("title",a.title),e.append("body",a.body);const{notify:t}=l();try{await i.post(n+"/create",e,{headers:{Accept:"application/json",Authorization:`Bearer ${s.token}`}}).then(r=>{this.loading=!1,t({title:"Successful",text:r.data.message,type:"success"}),this.getReferralTerms(1),this.dialog=!1})}catch(r){this.loading=!1,t({title:"An Error Occurred",text:r.response.data.message,type:"error"})}},async updateReferralTerms(a){const s=o();var e=new FormData;this.loading=!0,e.append("title",a.title),e.append("body",a.body),e.append("id",a.id),e.append("_method","PUT");const{notify:t}=l();try{await i.post(n+"/update",e,{headers:{Accept:"application/json",Authorization:`Bearer ${s.token}`}}).then(r=>{this.loading=!1,t({title:"Successful",text:r.data.message,type:"success"}),this.getReferralTerms(1),this.dialog=!1})}catch(r){this.loading=!1,t({title:"An Error Occurred",text:r.response.data.message,type:"error"})}},async deleteReferralTerms(a){const s=o();this.loading=!0;const{notify:e}=l();try{await i.delete(n+"/delete/"+a,{headers:{Accept:"application/json",Authorization:`Bearer ${s.token}`}}).then(t=>{this.loading=!1,e({title:"Successful",text:t.data.message,type:"success"}),this.getReferralTerms(1),this.dialog=!1})}catch(t){this.loading=!1,e({title:"An Error Occurred",text:t.response.data.message,type:"error"})}}}});export{g as u};
