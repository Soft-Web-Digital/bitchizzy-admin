<script setup lang="ts">
import { ref, onMounted, computed, watch, onUnmounted } from "vue";
import { useDateFormat } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { useAuthStore } from '../../stores/auth'
import { useReferralsStore } from "../../stores/referral";
import BaseBreadcrumb from "@/components/BaseBreadcrumb.vue";

const { permissions } = storeToRefs(useAuthStore())

const {
    getReferrals,
    deleteReferral,
} = useReferralsStore();
const {
  referrals,
  all_transaction,
  loading,
  singleWithdrawal,
  dialog,
  disapproving,
  approving,
} = storeToRefs(useReferralsStore());
const status = ref("");
const dialog2 = ref(false);

const fetchData = async () => {
  await getReferrals(status.value, 1);
//   await getReferrals();
}

let intervalId = ref<any>(null);
onMounted(() => {
  fetchData();
});


const page_title = ref({ title: "Referrals" });
const note = ref("");
const breadcrumbs = ref([
  {
    text: "Referrals",
    disabled: false,
    href: "#",
  },
  {
    text: "All",
    disabled: true,
    href: "#",
  },
]);

const header = ref([
  {
    title: "No.",
  },
  {
    title: "Full name",
  },
  {
    title: "Email",
  },
  {
    title: "Date Joined",
  },
  {
    title: "Status",
  },
  {
    title: "Referred By"
  },
  {
    title: "Has Payment"
  },
  {
    title: "Actions",
  },
]);


const formatCurrency = (value: any) => {
  return new Intl.NumberFormat().format(value);
};

const id = ref("");
const disapprove = () => {
  if (dialog.value == true) {
    dialog.value = false;
  }
  dialog2.value = true;
};

const status_options = ref(["Pending", "Completed", "Declined", "Success"]);

// CHANGE STATUS COLOR
type StatusType = "pending" | "completed" | "declined" | "success";

const status_color = (status: StatusType) => {
  return status == "pending"
    ? "yellow-darken-3"
    : status == "completed"
    ? "green lighten-3"
    : status == "success"
    ? "green lighten-3"
    : status == "declined"
    ? "red lighten-3"
    : "";
};

const page = ref(1);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Height -->
  <!-- ----------------------------------------------------------------------------- -->
  <!-- <v-data-table></v-data-table> -->
  <div>
    <BaseBreadcrumb
      :title="page_title.title"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <div class="mt-4">

      <v-card class="pa-5">
        <!-- <v-tabs v-model="tab" bg-color="none" class="mb-5">
          <v-tab @click="getAllTransactions('')">All</v-tab>
          <v-tab @click="getAllTransactions('pending')">Pending</v-tab>
          <v-tab @click="getAllTransactions('completed')">Approved</v-tab>
          <v-tab @click="getAllTransactions('declined')">Declined</v-tab>
        </v-tabs> -->
        <!-- <v-window v-model="tab"> -->
          <v-table>
            <thead>
              <tr>
                <th
                  v-for="(headings, index) in header"
                  :key="index"
                  class="text-left font-weight-bold"
                >
                  {{ headings.title }}
                </th>
              </tr>
            </thead>
            <tbody v-if="loading == false">
              <tr
                class="pa-3"
                v-for="(referral, index) in referrals?.data"
                :key="referral?.id"
              >
                <td>{{ index + 1 }}</td>
                <td class="font-weight-bold">
                  <span
                    @click="
                      $router.push({
                        name: 'UserDetails',
                        params: { id: referral?.user_id },
                      })
                    "
                    class="text-capitalize username"
                  >
                    {{ referral?.first_name ?? "---" }}
                    {{ referral?.last_name ?? "---" }}</span
                  >
                </td>
                <td>{{ referral?.email }}</td>
                <td>{{ useDateFormat(referral?.joined, "DD, MMMM-YYYY").value ?? "---" }}</td>
                <td>
                  <v-chip
                    label
                    class="text-capitalize font-weight-bold pa-3"
                    :color="status_color(referral?.status)"
                    >{{ referral?.status }}</v-chip
                  >
                </td>
                <td>{{ referral?.referred_by }}</td>
                <td>
                  <v-chip
                    label
                    class="text-capitalize font-weight-bold pa-3"
                    :color="referral?.has_made_payment ? 'success' : 'declined'"
                    >{{ referral?.has_made_payment ? 'Active' : 'InActive' }}</v-chip
                  >
                </td>
                <td>
                  <!-- <v-icon icon="mdi-dots-vertical"></v-icon> -->
                  <v-row justify="center">
                    <v-menu transition="scroll-y-transition">
                      <template v-slot:activator="{ props }">
                        <v-btn
                          text
                          icon="mdi-dots-vertical"
                          color="transparent"
                          class="ma-2"
                          v-bind="props"
                        >
                        </v-btn>
                      </template>
                      <v-list>
                        <v-list-item
                          @click="
                            id = referral?.id;
                            disapprove();
                          "
                          link
                          color="secondary"
                        >
                          <v-list-item-title>
                            Delete
                          </v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-row>
                </td>
              </tr>
            </tbody>
          </v-table>
        <!-- </v-window> -->

        <v-layout
          v-if="loading == true"
          class="align-center justify-center w-100 my-5"
        >
          <v-progress-circular indeterminate></v-progress-circular>
        </v-layout>

        <p
          v-if="loading == false && referrals?.data?.length <= 0"
          class="text-center py-6"
        >
          No data available
        </p>
      </v-card>
      <v-pagination
        v-model="page"
        :length="referrals?.last_page"
        @next="getReferrals(status, page)"
        @prev="getReferrals(status, page)"
        @update:modelValue="getReferrals(status, page)"
        active-color="red"
        :start="1"
        variant="flat"
        class="mt-5"
        color="bg-secondary"
        rounded="circle"
      ></v-pagination>
    </div>

    <v-dialog v-model="dialog" max-width="429px" min-height="476px">
      <v-card class="view-dialog pa-4">
        <div class="mb-3 d-flex justify-space-between">
          <h3 class="text-justify mt-7">Withdrawal request details</h3>
          <v-btn
            @click="dialog = false"
            icon="mdi-close"
            color="secondary"
            variant="text"
          >
            <v-icon icon="mdi-close"></v-icon>
          </v-btn>
        </div>
        <div class="my-3">
          <!-- <v-icon></v-icon> -->
          <div>
            <v-chip
              label
              size="small"
              density="comfortable"
              class="text-capitalize font-weight-bold pa-3"
              :color="status_color(singleWithdrawal?.status)"
              >{{ singleWithdrawal?.status }}</v-chip
            >
          </div>
        </div>
        <div
          v-if="loading == false"
          class="w-100 d-flex align-center justify-space-between"
        >
          <v-row
            align="center"
            justify="center"
            no-gutters
            class="w-100 align-center justify-space-between"
          >
            <v-col class="pa-0">
              <div class="mb-4">
                <!-- <v-icon></v-icon> -->
                <div>
                  <h5>Wallet balance</h5>
                  <p class="font-weight-bold">
                    ₦‎{{
                      singleWithdrawal?.user?.wallet_balance
                    }}
                  </p>
                </div>
              </div>
              <div class="mb-4">
                <!-- <v-icon></v-icon> -->
                <div>
                  <h5 class="">User name</h5>
                  <p class="">
                    {{ singleWithdrawal?.user?.firstname }}
                  </p>
                </div>
              </div>

              <div class="mb-4">
                <!-- <v-icon></v-icon> -->
                <div>
                  <h5 class="">Email address</h5>
                  <p class="">
                    {{ singleWithdrawal?.user?.email }}
                  </p>
                </div>
              </div>

              <div class="mb-4">
                <!-- <v-icon></v-icon> -->
                <div>
                  <h5 class="">Date & time</h5>
                  <p class="">
                    {{
                      useDateFormat(
                        singleWithdrawal?.created_at,
                        "DD, MMMM-YYYY"
                      ).value
                    }}
                  </p>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row
            align="center"
            justify="center"
            no-gutters
            class="w-100 align-center justify-space-between ml-5"
          >
            <v-col class="pa-0">
              <div class="mb-4">
                <!-- <v-icon></v-icon> -->
                <div>
                  <h5>Amount</h5>
                  <p class="font-weight-bold">
                    ₦‎{{ singleWithdrawal?.amount }}
                  </p>
                </div>
              </div>
              <div class="mb-4">
                <!-- <v-icon></v-icon> -->
                <div>
                  <h5 class="">Bank name</h5>
                  <p class="">
                    {{ singleWithdrawal?.bank?.name ?? "No data" }}
                  </p>
                </div>
              </div>

              <div class="mb-4">
                <!-- <v-icon></v-icon> -->
                <div>
                  <h5 class="">Account name</h5>
                  <p class="">
                    {{ singleWithdrawal?.account_name ?? "No data" }}
                  </p>
                </div>
              </div>
              <div class="mb-4">
                <!-- <v-icon></v-icon> -->
                <div>
                  <h5 class="">Account number</h5>
                  <p class="">
                    {{ singleWithdrawal?.account_number ?? "No data" }}
                  </p>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
        <v-layout
          v-if="loading == true"
          class="align-center justify-center w-100 my-10"
        >
          <v-progress-circular indeterminate></v-progress-circular>
        </v-layout>

        <!-- <v-btn color="secondary" class="my-2" block @click="dialog = false"
          >Close Dialog</v-btn
        > -->

        <div v-if="singleWithdrawal.status == 'pending'">
          <v-btn
            @click="disapprove"
            class="wallet-btn"
            variant="outlined"
            color="error"
            :loading="disapproving"
          >
            Disapprove request
          </v-btn>
          <!-- declineRequest(singleWithdrawal?.id) -->
          <!-- <v-btn
            @click="approveTransactionRequest(singleWithdrawal?.id)"
            class="wallet-btn ml-4"
            color="secondary"
            :loading="approving"
          >
            Approve request
          </v-btn> -->
        </div>
      </v-card>
    </v-dialog>

    <v-expand-transition>
      <v-dialog
        v-if="dialog2"
        v-model="dialog2"
        activator="parent"
        max-width="500px"
        width="auto"
      >
        <v-card>
          <v-card-text>
            <p>Enter Reasons for Declining this withdrawal request</p>
          </v-card-text>

          <v-container class="mt-7">
            <v-textarea
              label="Comments"
              v-model="note"
              variant="outlined"
            ></v-textarea>

            <v-btn
              color="secondary"
              class="my-5"
              block
              @click="deleteReferral(id, note)"
              >Submit</v-btn
            >
          </v-container>
        </v-card>
      </v-dialog>
    </v-expand-transition>
  </div>
</template>

<style lang="scss">
table tbody tr td {
  padding: 15px !important;
  font-size: 12px;
}

.username {
  text-decoration: underline;
  cursor: pointer;
}

.view-dialog {
  background: #ffffff;
  border-radius: 16px !important;

  h3 {
    font-weight: 600;
    font-size: 24px;
    width: 50%;
    line-height: 24px;
  }

  h5 {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    color: #afafaf;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px !important;
    line-height: 24px;
  }

  .wallet-btn {
    padding: 22px;
    border-radius: 8px;
    width: 188px;
    height: 64px;
  }
}
</style>
