import { defineStore } from "pinia";
import ksbTechApi from "../../axios-services";
import { referrals, terms } from "../../apiRoute";
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
    referrals: any;
    terms: any;
    loading: boolean;
    disapproving: boolean;
    approving: boolean;
    singleWithdrawal: any;
    dialog: boolean;
  
    all_transaction: any;
    transactions: any;
    total_withdrawal: any;
  }

  export const useReferralsStore = defineStore("referrals", {
    state: (): State => ({
        referrals: {},
        terms: {},
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
        async getReferrals(status: string, page_no: number) {
            const store = useAuthStore();
            const { notify } = useNotification();
            this.loading = true;
            try {
              await ksbTechApi
                .get(
                    referrals +
                    "/all",
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
                      data: { referrals: Data };
                    };
                  }) => {
                    this.loading = false;
      
                    this.referrals = res.data;

                  }
                );
            } catch (error) {
              this.loading = false;
            }
        },

        async getReferralTerms(page_no: number) {
          const store = useAuthStore();
          const { notify } = useNotification();
          this.loading = true;
          try {
            await ksbTechApi
              .get(
                  terms +
                  "/all",
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
                    data: { terms: Data };
                  };
                }) => {
                  this.loading = false;
    
                  this.terms = res.data.data;

                }
              );
            } catch (error) {
              this.loading = false;
            }
        },

        async deleteReferral(id: string, note: string) {
          const store = useAuthStore();
          const { notify } = useNotification();
          this.disapproving = true;
    
          var formData = new FormData();
          formData.append("note", note);
          try {
            await ksbTechApi
              .patch(referrals + "/" + id + "/decline", formData, {
                headers: {
                  Accept: "application/json",
                  Authorization: `Bearer ${store.token}`,
                },
              })
              .then(
                (res: {
                  data: {
                    message: string;
                    data: { withdrawal_requests: object };
                  };
                }) => {
                  this.disapproving = false;
                  this.dialog = false;
                  notify({
                    title: "Successful",
                    text: res.data.message,
                    type: "success",
                  });
                  this.getReferrals("", 1);
                }
              );
          } catch (error: any) {
            this.disapproving = false;
            this.dialog = false;
            notify({
              title: "An Error Occurred",
              text: error.response.data.message,
              type: "error",
            });
          }
        },

        async createReferralTerms(terms_data:{
              title:string,
              body:string
          }) {
          const store = useAuthStore();
          var formData = new FormData();
      
          this.loading = true;
    
          formData.append("title", terms_data.title);
          formData.append("body", terms_data.body);
      
          const { notify } = useNotification();
          try {
            await ksbTechApi
              .post(terms + "/create", formData, {
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
                  this.getReferralTerms(1);
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

        async updateReferralTerms(terms_data:{
              title:string,
              body:string,
              id: string,
          }) {
          const store = useAuthStore();
          var formData = new FormData();
      
          this.loading = true;

          formData.append("title", terms_data.title);
          formData.append("body", terms_data.body);
          formData.append("id", terms_data.id);
          formData.append("_method", "PUT");
      
          const { notify } = useNotification();
          try {
            await ksbTechApi
              .post(terms + "/update", formData, {
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
                  this.getReferralTerms(1);
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

        async deleteReferralTerms(id: string) {
          const store = useAuthStore();
      
          this.loading = true;
      
          const { notify } = useNotification();
          try {
            await ksbTechApi
              .delete(terms + "/delete/" + id, {
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
                  this.getReferralTerms(1);
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