import { defineStore } from "pinia";
import ksbTechApi from "../../axios-services";
import { providers, providerServices, settings } from "../../apiRoute";
import { useNotification } from "@kyvg/vue3-notification";
import { useAuthStore } from "./auth";
import { useRoute } from "vue-router";

interface Data {
    id: string;
    amount: string;
    created_at: string;
    status: string;
  }
  
  interface State {
    providers: any;
    singleProvider: any;
    loading: boolean;
    disapproving: boolean;
    approving: boolean;
    singleWithdrawal: any;
    dialog: boolean;
  
    all_transaction: any;
    transactions: any;
    total_withdrawal: any;
  }

  export const useProviderStore = defineStore("providers", {
    state: (): State => ({
        providers: {},
        singleProvider: {},
        loading: false,
        disapproving: false,
        approving: false,
        singleWithdrawal: {},
        dialog: false,
        transactions: {},
        all_transaction: {},
        total_withdrawal: {},
    }),

    actions: {
        async getProviders() {
            const store = useAuthStore();
            const { notify } = useNotification();
            this.loading = true;
            try {
              await ksbTechApi
                .get(
                    providers,
                  {
                    headers: {
                      Accept: "application/json",
                      Authorization: `Bearer ${store.token}`,
                    },
                  }
                )
                .then(
                  (res: {
                    data: {
                      message: string;
                      data: { providers: Data };
                    };
                  }) => {
                    this.loading = false;
      
                    this.providers = res.data.data;

                  }
                );
            } catch (error) {
              this.loading = false;
            }
        },

        async getSingleProviders(id: string) {
            const store = useAuthStore();
            const { notify } = useNotification();
            this.loading = true;
            try {
              await ksbTechApi
                .get(
                    providers,
                  {
                    headers: {
                      Accept: "application/json",
                      Authorization: `Bearer ${store.token}`,
                    },
                  }
                )
                .then(
                  (res: {
                    data: {
                      message: string;
                      data: { providers: Data };
                    };
                  }) => {
                    this.loading = false;
      
                    // this.singleProvider = res.data.data;

                    // this.singleProvider = res.data.data.find(obj => obj.id === id);

                    if (res && res.data && res.data.data) {
                        const providersData = res.data.data;
                  
                        if (Array.isArray(providersData)) {
                          // If providersData is an array, use the find method
                          this.singleProvider = providersData.find(obj => obj.id === id);
                        } else if (providersData.providers && Array.isArray(providersData.providers)) {
                          // If providersData.providers is an array, use the find method
                          this.singleProvider = providersData.providers.find(obj => obj.id === id);
                        }
                      }
                      
                      console.log(this.singleProvider);
                      console.log(res.data.data);
                      

                  }
                );
            } catch (error) {
              this.loading = false;
            }
        },

        async createProviders(provider_data:{
              provider_name:string,
              photo:string
          }) {
          const store = useAuthStore();
          var formData = new FormData();
      
          this.loading = true;
    
          formData.append("provider_name", provider_data.provider_name);
        //   formData.append("photo", provider_data.photo);
      
          const { notify } = useNotification();
          try {
            await ksbTechApi
              .post(providers, formData, {
                headers: {
                  Accept: "application/json",
                  Authorization: `Bearer ${store.token}`,
                },
              })
              .then(
                (res: {
                  data: {
                    message: string;
                  };
                }) => {
                  this.loading = false;
                  notify({
                    title: "Successful",
                    text: res.data.message,
                    type: "success",
                  });
                  this.getProviders();
                  this.dialog = false
                }
              );
          } catch (error:any) {
            this.loading = false;
            notify({
              title: "An Error Occurred",
              text: error.response.data.message,
              type: "error",
            });
          }
        },

        async updateProviders(provider_data:{
              provider_name:string,
              photo:string,
              id: string,
          }) {
          const store = useAuthStore();
          var formData = new FormData();
      
          this.loading = true;

          formData.append("provider_name", provider_data.provider_name);
        //   formData.append("photo", provider_data.photo);
      
          const { notify } = useNotification();
          try {
            await ksbTechApi
              .post(providers + "/" + provider_data.id, formData, {
                headers: {
                  Accept: "application/json",
                  Authorization: `Bearer ${store.token}`,
                },
              })
              .then(
                (res: {
                  data: {
                    message: string;
                  };
                }) => {
                  this.loading = false;
                  notify({
                    title: "Successful",
                    text: res.data.message,
                    type: "success",
                  });
                  this.getProviders();
                  this.dialog = false
                }
              );
          } catch (error:any) {
            this.loading = false;
            notify({
              title: "An Error Occurred",
              text: error.response.data.message,
              type: "error",
            });
          }
        },

        async deleteProviders(id: string) {
          const store = useAuthStore();
      
          this.loading = true;
      
          const { notify } = useNotification();
          try {
            await ksbTechApi
              .delete(providers + "/" + id, {
                headers: {
                  Accept: "application/json",
                  Authorization: `Bearer ${store.token}`,
                },
              })
              .then(
                (res: {
                  data: {
                    message: string;
                  };
                }) => {
                  this.loading = false;
                  notify({
                    title: "Successful",
                    text: res.data.message,
                    type: "success",
                  });
                  this.getProviders();
                  this.dialog = false
                }
              );
          } catch (error:any) {
            this.loading = false;
            notify({
              title: "An Error Occurred",
              text: error.response.data.message,
              type: "error",
            });
          }
        },

        async toggleProviders(id: string, status: any) {
          const store = useAuthStore();
          var formData = new FormData();

          formData.append("_method", "PUT");
      
          this.loading = true;
      
          const { notify } = useNotification();
          try {
            await ksbTechApi
              .post(providers + "/" + id + "/" + status, formData, {
                headers: {
                  Accept: "application/json",
                  Authorization: `Bearer ${store.token}`,
                },
              })
              .then(
                (res: {
                  data: {
                    message: string;
                  };
                }) => {
                  this.loading = false;
                  notify({
                    title: "Successful",
                    text: res.data.message,
                    type: "success",
                  });
                  this.getProviders();
                  this.dialog = false
                }
              );
          } catch (error:any) {
            this.loading = false;
            notify({
              title: "An Error Occurred",
              text: error.response.data.message,
              type: "error",
            });
          }
        },

        async toggleServices(id: string, status: any) {
          const store = useAuthStore();
          var formData = new FormData();

          formData.append("_method", "PUT");
      
          this.loading = true;
      
          const { notify } = useNotification();
          try {
            await ksbTechApi
              .post(providerServices + "/" + id + "/" + status, formData, {
                headers: {
                  Accept: "application/json",
                  Authorization: `Bearer ${store.token}`,
                },
              })
              .then(
                (res: {
                  data: {
                    message: string;
                  };
                }) => {
                  this.loading = false;
                  notify({
                    title: "Successful",
                    text: res.data.message,
                    type: "success",
                  });
                  
                  location.reload();

                  this.dialog = false
                }
              );
          } catch (error:any) {
            this.loading = false;
            notify({
              title: "An Error Occurred",
              text: error.response.data.message,
              type: "error",
            });
          }
        },

        async updateSettings(data: 
          {
            wallet_topup: string,
            airtime_topup: string,
            data_topup: string,
            utility_topup: string,
            tvsubscription_topup: string,
            epin_topup: string,
            wallet_transfer_topup: string,
            withdrawal_topup: string,
            games_charge: string,
            glo_cg_topup: string,
            airtel_cg_topup: string,
            mtn_sme_topup: string,
            cable_tv_discount: string,
            utility_bills_discount: string,
            data_discount: string,
            airtime_discount: string,
            sme_data_discount: string,
            education_payment_discount: string,
            referral_commission: string,
            referral_minimum_top_up: string,
            mtn_cg_charge: string,
            mtn_cg_data_discount: string,
            mtn_data_card_charge: string,
            mtn_data_card_discount: string,
            ninemobile_sme_charge: string,
            ninemobile_sme_discount: string,

            // mtn_airtime_discount:string,
            // glo_airtime_discount:string,
            // airtel_airtime_discount:string,
            // etisalat_airtime_discount:string,
            // mtn_data_discount:string,
            // airtel_data_discount:string,
            // etisalat_data_discount:string,
            // glo_data_discount:string, 

            // minimum_airitme_purchase:string,
            // daily_withdrawal_limit:string,
            // airtime_purchase_limit:string,
            // withdrawal_fee_percentage:string,
            // withdrawal_limit_to_charge:string,

            // minimum_withdrawal_amount:string
          }) {
          const store = useAuthStore();
          var formData = new FormData();

          formData.append("wallet_topup", data.wallet_topup);
          formData.append("airtime_topup", data.airtime_topup);
          formData.append("data_topup", data.data_topup);
          formData.append("utility_topup", data.utility_topup);
          formData.append("tvsubscription_topup", data.tvsubscription_topup);
          formData.append("epin_topup", data.epin_topup);
          formData.append("wallet_transfer_topup", data.wallet_transfer_topup);
          formData.append("withdrawal_topup", data.withdrawal_topup);
          formData.append("games_charge", data.games_charge);
          formData.append("glo_cg_topup", data.glo_cg_topup);
          formData.append("airtel_cg_topup", data.airtel_cg_topup);
          formData.append("mtn_sme_topup", data.mtn_sme_topup);
          formData.append("cable_tv_discount", data.cable_tv_discount);
          formData.append("utility_bills_discount", data.utility_bills_discount);
          formData.append("data_discount", data.data_discount);
          formData.append("airtime_discount", data.airtime_discount);
          formData.append("sme_data_discount", data.sme_data_discount);
          formData.append("education_payment_discount", data.education_payment_discount);
          formData.append("referral_commission", data.referral_commission);
          formData.append("referral_minimum_top_up", data.referral_minimum_top_up);
          formData.append("mtn_cg_charge", data.mtn_cg_charge);
          formData.append("mtn_cg_data_discount", data.mtn_cg_data_discount);
          formData.append("mtn_data_card_charge", data.mtn_data_card_charge);
          formData.append("mtn_data_card_discount", data.mtn_data_card_discount);
          formData.append("ninemobile_sme_charge", data.ninemobile_sme_charge);
          formData.append("ninemobile_sme_discount", data.ninemobile_sme_discount);

          formData.append("_method", "PUT");
      
          this.loading = true;
      
          const { notify } = useNotification();
          try {
            await ksbTechApi
              .post(settings, formData, {
                headers: {
                  Accept: "application/json",
                  Authorization: `Bearer ${store.token}`,
                },
              })
              .then(
                (res: {
                  data: {
                    message: string;
                  };
                }) => {
                  this.loading = false;
                  notify({
                    title: "Successful",
                    text: res.data.message,
                    type: "success",
                  });
                  this.getProviders();
                  this.dialog = false
                }
              );
          } catch (error:any) {
            this.loading = false;
            notify({
              title: "An Error Occurred",
              text: error.response.data.message,
              type: "error",
            });
          }
        },
    }

  });