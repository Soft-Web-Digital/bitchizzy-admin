import{d,f as o,bc as p,bd as l,be as u,a0 as c}from"./index.09a9e36e.js";import{k as i}from"./axios-services.17ccf49f.js";const h=d("providers",{state:()=>({providers:{},singleProvider:{},loading:!1,disapproving:!1,approving:!1,singleWithdrawal:{},dialog:!1,transactions:{},all_transaction:{},total_withdrawal:{}}),actions:{async getProviders(){const t=o();this.loading=!0;try{await i.get(p,{headers:{Accept:"application/json",Authorization:`Bearer ${t.token}`}}).then(r=>{this.loading=!1,this.providers=r.data.data})}catch{this.loading=!1}},async getSingleProviders(t){const r=o();this.loading=!0;try{await i.get(p,{headers:{Accept:"application/json",Authorization:`Bearer ${r.token}`}}).then(e=>{if(this.loading=!1,e&&e.data&&e.data.data){const a=e.data.data;Array.isArray(a)?this.singleProvider=a.find(s=>s.id===t):a.providers&&Array.isArray(a.providers)&&(this.singleProvider=a.providers.find(s=>s.id===t))}console.log(this.singleProvider),console.log(e.data.data)})}catch{this.loading=!1}},async createProviders(t){const r=o();var e=new FormData;this.loading=!0,e.append("provider_name",t.provider_name);const{notify:a}=c();try{await i.post(p,e,{headers:{Accept:"application/json",Authorization:`Bearer ${r.token}`}}).then(s=>{this.loading=!1,a({title:"Successful",text:s.data.message,type:"success"}),this.getProviders(),this.dialog=!1})}catch(s){this.loading=!1,a({title:"An Error Occurred",text:s.response.data.message,type:"error"})}},async updateProviders(t){const r=o();var e=new FormData;this.loading=!0,e.append("provider_name",t.provider_name);const{notify:a}=c();try{await i.post(p+"/"+t.id,e,{headers:{Accept:"application/json",Authorization:`Bearer ${r.token}`}}).then(s=>{this.loading=!1,a({title:"Successful",text:s.data.message,type:"success"}),this.getProviders(),this.dialog=!1})}catch(s){this.loading=!1,a({title:"An Error Occurred",text:s.response.data.message,type:"error"})}},async deleteProviders(t){const r=o();this.loading=!0;const{notify:e}=c();try{await i.delete(p+"/"+t,{headers:{Accept:"application/json",Authorization:`Bearer ${r.token}`}}).then(a=>{this.loading=!1,e({title:"Successful",text:a.data.message,type:"success"}),this.getProviders(),this.dialog=!1})}catch(a){this.loading=!1,e({title:"An Error Occurred",text:a.response.data.message,type:"error"})}},async toggleProviders(t,r){const e=o();var a=new FormData;a.append("_method","PUT"),this.loading=!0;const{notify:s}=c();try{await i.post(p+"/"+t+"/"+r,a,{headers:{Accept:"application/json",Authorization:`Bearer ${e.token}`}}).then(n=>{this.loading=!1,s({title:"Successful",text:n.data.message,type:"success"}),this.getProviders(),this.dialog=!1})}catch(n){this.loading=!1,s({title:"An Error Occurred",text:n.response.data.message,type:"error"})}},async toggleServices(t,r){const e=o();var a=new FormData;a.append("_method","PUT"),this.loading=!0;const{notify:s}=c();try{await i.post(l+"/"+t+"/"+r,a,{headers:{Accept:"application/json",Authorization:`Bearer ${e.token}`}}).then(n=>{this.loading=!1,s({title:"Successful",text:n.data.message,type:"success"}),location.reload(),this.dialog=!1})}catch(n){this.loading=!1,s({title:"An Error Occurred",text:n.response.data.message,type:"error"})}},async updateSettings(t){const r=o();var e=new FormData;e.append("wallet_topup",t.wallet_topup),e.append("airtime_topup",t.airtime_topup),e.append("data_topup",t.data_topup),e.append("utility_topup",t.utility_topup),e.append("tvsubscription_topup",t.tvsubscription_topup),e.append("epin_topup",t.epin_topup),e.append("wallet_transfer_topup",t.wallet_transfer_topup),e.append("withdrawal_topup",t.withdrawal_topup),e.append("games_charge",t.games_charge),e.append("glo_cg_topup",t.glo_cg_topup),e.append("airtel_cg_topup",t.airtel_cg_topup),e.append("mtn_sme_topup",t.mtn_sme_topup),e.append("cable_tv_discount",t.cable_tv_discount),e.append("utility_bills_discount",t.utility_bills_discount),e.append("data_discount",t.data_discount),e.append("airtime_discount",t.airtime_discount),e.append("sme_data_discount",t.sme_data_discount),e.append("education_payment_discount",t.education_payment_discount),e.append("referral_commission",t.referral_commission),e.append("referral_minimum_top_up",t.referral_minimum_top_up),e.append("mtn_cg_charge",t.mtn_cg_charge),e.append("mtn_cg_data_discount",t.mtn_cg_data_discount),e.append("mtn_data_card_charge",t.mtn_data_card_charge),e.append("mtn_data_card_discount",t.mtn_data_card_discount),e.append("ninemobile_sme_charge",t.ninemobile_sme_charge),e.append("ninemobile_sme_discount",t.ninemobile_sme_discount),e.append("_method","PUT"),this.loading=!0;const{notify:a}=c();try{await i.post(u,e,{headers:{Accept:"application/json",Authorization:`Bearer ${r.token}`}}).then(s=>{this.loading=!1,a({title:"Successful",text:s.data.message,type:"success"}),this.getProviders(),this.dialog=!1})}catch(s){this.loading=!1,a({title:"An Error Occurred",text:s.response.data.message,type:"error"})}}}});export{h as u};