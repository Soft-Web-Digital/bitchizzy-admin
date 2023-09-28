import { defineStore } from "pinia";
import ksbTechApi from "../../axios-services";
import { referrals } from "../../apiRoute";
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
    payments: any;
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
        payments: {},
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
      
                    // this.referrals = res.data;

                    this.referrals = {
                        "message": "Data fetched successfully!",
                        "data": [
                            {
                                "first_name": "Igwe",
                                "last_name": "Chibuike",
                                "email": "igwejeremiah931@gmail.com",
                                "joined": "Wed, Sep 27, 2023 11:04 PM",
                                "status": "pending",
                                "referred_by": "emmanuelezenwa35@gmail.com",
                                "has_made_payment": true
                            },
                            {
                                "first_name": "Samuel",
                                "last_name": "Oseni",
                                "email": "osenisamuel2030@gmail.com",
                                "joined": "Wed, Sep 27, 2023 10:15 PM",
                                "status": "pending",
                                "referred_by": "samuelakins88@gmail.com",
                                "has_made_payment": true
                            },
                            {
                                "first_name": "Okelue",
                                "last_name": "Chidera",
                                "email": "okeluechidera4@gmail.com",
                                "joined": "Wed, Sep 27, 2023 10:15 PM",
                                "status": "pending",
                                "referred_by": "victorchibuike413@gmail.com",
                                "has_made_payment": true
                            },
                            {
                                "first_name": "Ajenishe",
                                "last_name": "samiat",
                                "email": "ajenisesamiat@gmail.com",
                                "joined": "Wed, Sep 27, 2023 8:23 PM",
                                "status": "pending",
                                "referred_by": "temitopsy195@gmail.com",
                                "has_made_payment": false
                            },
                            {
                                "first_name": "Ajenishe",
                                "last_name": "samiat",
                                "email": "oluwabedemi226@gmail.com",
                                "joined": "Wed, Sep 27, 2023 7:26 PM",
                                "status": "pending",
                                "referred_by": "temitopsy195@gmail.com",
                                "has_made_payment": false
                            },
                        ],
                        "meta": {
                            "page": 1,
                            "per_page": 50,
                            "total": 976
                        }
                    };

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
    }

  });