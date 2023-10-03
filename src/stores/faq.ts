import { defineStore } from "pinia";
import ksbTechApi from "../../axios-services";
import { faq } from "../../apiRoute";
import { useNotification } from "@kyvg/vue3-notification";
import { useAuthStore } from "./auth";
import { useRoute } from "vue-router";

interface Data {
    id: string;
    title: string;
    slug: string;
    body: string;
  }
  
  interface State {
    faq: any;
    faq_category: any;
    loading: boolean;
    disapproving: boolean;
    approving: boolean;
    dialog: boolean;
    dialog1: boolean;
  }

  export const useFAQStore = defineStore("faqs", {
    state: (): State => ({
        faq: {},
        faq_category: {},
        loading: false,
        disapproving: false,
        approving: false,
        dialog: false,
        dialog1: false,
    }),

    actions: {
        async getFaq(page_no: number) {
            const store = useAuthStore();
            const { notify } = useNotification();
            this.loading = true;
            try {
              await ksbTechApi
                .get(
                    faq +
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
                      data: { faq: Data };
                    };
                  }) => {
                    this.loading = false;
      
                    this.faq = res.data.data;
                  }
                );
            } catch (error) {
                this.loading = false;

                console.log(error);
            }
        },

        async getFaqCategory(page_no: number) {
            const store = useAuthStore();
            const { notify } = useNotification();
            this.loading = true;
            try {
              await ksbTechApi
                .get(
                    faq +
                    "/category/all",
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
                      data: { faq: Data };
                    };
                  }) => {
                    this.loading = false;
      
                    this.faq_category = res.data.data;
                  }
                );
            } catch (error) {
                this.loading = false;

                console.log(error);
            }
        },

        async createFaq(faq_data:{
            question:string,
            answer:string,
            faq_category_id: string,
        }) {
          const store = useAuthStore();
          var formData = new FormData();
      
          this.loading = true;
    
          formData.append("question", faq_data.question);
          formData.append("answer", faq_data.answer);
          formData.append("faq_category_id", faq_data.faq_category_id);
      
          const { notify } = useNotification();
          try {
            await ksbTechApi
              .post(faq + "/create", formData, {
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
                  this.getFaq(1);
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

        async updateFaq(faq_data:{
            id:string,
            question:string,
            answer:string,
            faq_category_id: string,
        }) {
          const store = useAuthStore();
          var formData = new FormData();
      
          this.loading = true;
    
          formData.append("question", faq_data.question);
          formData.append("answer", faq_data.answer);
          formData.append("faq_category_id", faq_data.faq_category_id);
          formData.append("_method", "PUT");
      
          const { notify } = useNotification();
          try {
            await ksbTechApi
              .post(faq + "/edit/" + faq_data.id, formData, {
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
                  this.getFaq(1);
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

        async deleteFaq(id: string) {
          const store = useAuthStore();
      
          this.loading = true;
      
          const { notify } = useNotification();
          try {
            await ksbTechApi
              .delete(faq + "/delete/" + id, {
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
                  this.getFaq(1);
                  this.dialog1 = false
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
        
        async createFaqCategory(faq_category_data:{
            name:string,
            status:string
        }) {
          const store = useAuthStore();
          var formData = new FormData();
      
          this.loading = true;
    
          formData.append("name", faq_category_data.name);
          formData.append("status", faq_category_data.status);
      
          const { notify } = useNotification();
          try {
            await ksbTechApi
              .post(faq + "/category/create", formData, {
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
                  this.getFaqCategory(1);
                  this.dialog1 = false
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

        async updateFaqCategory(faq_category_data:{
            id:string,
            name:string,
            status:string
        }) {
          const store = useAuthStore();
          var formData = new FormData();
      
          this.loading = true;
    
          formData.append("name", faq_category_data.name);
          formData.append("status", faq_category_data.status);
          formData.append("_method", "PUT");
      
          const { notify } = useNotification();
          try {
            await ksbTechApi
              .post(faq + "/category/edit/" + faq_category_data.id, formData, {
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
                  this.getFaqCategory(1);
                  this.dialog1 = false
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

        async deleteFaqCategory(id: string) {
        const store = useAuthStore();
    
        this.loading = true;
    
        const { notify } = useNotification();
        try {
          await ksbTechApi
            .delete(faq + "/category/delete/" + id, {
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
                this.getFaqCategory(1);
                this.dialog1 = false
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