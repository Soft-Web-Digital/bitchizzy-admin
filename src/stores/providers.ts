import { defineStore } from "pinia";
import ksbTechApi from "../../axios-services";
import { providers, providerServices } from "../../apiRoute";
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