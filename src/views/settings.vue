<script setup lang="ts">
import { ref, onMounted } from "vue"
import  {useRouter} from 'vue-router'
import { useDateFormat } from "@vueuse/core"
import { storeToRefs } from "pinia"
import { useProviderStore } from "../stores/providers"
const router = useRouter()

const {
    getProviders,
    updateSettings,
} = useProviderStore()

const { providers, loading, dialog } = storeToRefs(
    useProviderStore()
)
const tab = ref(null)

const providers_header = ref([
  {
    title: "No."
  },
  {
    title: "Provider Name"
  },
  {
    title: "Services"
  },
  {
    title: "Status"
  },
  {
    title: "Toggle Status"
  },
  {
    title: "Date"
  },
  {
    title: "Action"
  },
])

    const modalData = ref([
        
    ])

    const  gridList = ref([
        {
          profile: "cloud-drizzle",
          name: "Service Charges",
          list: "servicesList",
          color: "blue"
        },
        {
          profile: "server",
          name: "Network SME Topup",
          list: "smeList",
          color: "warning"
        },
        {
          profile: "percent",
          name: "Discount Fees",
          list: "discountList",
          color: "red"
        },
        {
          profile: "user-plus",
          name: "Referrals",
          list: "referralList",
          color: "purple"
        },
        {
          profile: "sunrise",
          name: "Network SME Discounts",
          list: "cgList",
          color: "success"
        },
        {
          profile: "twitch",
          name: "Airtime Discount",
          list: "airtimeList",
          color: "black"
        },
        {
          profile: "wind",
          name: "Data Discount",
          list: "dataList",
          color: "orange"
        },
        {
          profile: "settings",
          name: "Limit Fees",
          list: "limitList",
          color: "pink"
        },
      ])

    const  servicesList = ref([
        {
          name: "Wallet Topup Charge",
          model: "wallet_topup"
        },
        {
          name: "Airtime Service Charge",
          model: "airtime_topup"
        },
        {
          name: "Data Service Charge",
          model: "data_topup"
        },
        {
          name: "Utility Bills charge",
          model: "utility_topup"
        },
        {
          name: "Tv subscription service charg",
          model: "tvsubscription_topup"
        },
        {
          name: "E-pin service charge",
          model: "epin_topup"
        },
        {
          name: "Wallet transfer charge",
          model: "wallet_transfer_topup"
        },
        {
          name: "Withdrawal service charge",
          model: "withdrawal_topup"
        },
        {
          name: "Game subscription charge",
          model: "games_charge"
        },
      ])

    const  smeList = ref([
        {
          name: "MTN SME Topup",
          model: "mtn_sme_topup"
        },
        {
          name: "GLO SME/CG Topup",
          model: "glo_cg_topup"
        },
        {
          name: "AIRTEL SME/CG Topup",
          model: "airtel_cg_topup"
        },
      ])

    const  discountList = ref([
        {
          name: "Airtime Discount(%)",
          model: "airtime_discount"
        },
        {
          name: "Data Discount(%)",
          model: "data_discount"
        },
        {
          name: "SME Data Discount(%)",
          model: "sme_data_discount"
        },
        {
          name: "Cable Tv Discount(%)",
          model: "cable_tv_discount"
        },
        {
          name: "Utility Bills Discount(%)",
          model: "utility_bills_discount"
        },
        {
          name: "Education Discount(%)",
          model: "education_payment_discount"
        },
      ])

    const  referralList  = ref([
        {
          name: "Referral Commission",
          model: "referral_commission"
        },
        {
          name: "Referral Minimum Top Up",
          model: "referral_minimum_top_up"
        },
      ])

    const  cgList  = ref([
        {
          name: "MTN CG Charge",
          model: "mtn_cg_charge"
        },
        {
          name: "MTN CG Data Discount",
          model: "mtn_cg_data_discount"
        },
        {
          name: "MTN Data Card Charge",
          model: "mtn_data_card_charge"
        },
        {
          name: "MTN Data Card Discount",
          model: "mtn_data_card_discount"
        },
        {
          name: "9Mobile SME service charge",
          model: "ninemobile_sme_charge"
        },
        {
          name: "9Mobile SME data discount",
          model: "ninemobile_sme_discount"
        },
      ])

    const  airtimeList = ref([
        {
          name: "MTN Airtime Discount(%)",
          model: "mtn_airtime_discount"
        },
        {
          name: "GLO Airtime Discount(%)",
          model: "glo_airtime_discount"
        },
        {
          name: "Airtel Airtime Discount(%)",
          model: "airtel_airtime_discount"
        },
        {
          name: "Etisalat Airtime Discount(%)",
          model: "etisalat_airtime_discount"
        },
      ])

    const  dataList  = ref([
        {
          name: "MTN Data Discount(%)",
          model: "mtn_data_discount"
        },
        {
          name: "GLO Data Discount(%)",
          model: "glo_data_discount"
        },
        {
          name: "Airtel Data Discount(%)",
          model: "airtel_data_discount"
        },
        {
          name: "Etisalat Data Discount(%)",
          model: "etisalat_data_discount"
        },
      ])

    const  limitList  = ref([
        {
          name: "Minimum Airtime Purchase",
          model: "minimum_airitme_purchase"
        },
        {
          name: "Daily Withdrawal Limit",
          model: "daily_withdrawal_limit"
        },
        {
          name: "Airtime Purchase Limit",
          model: "airtime_purchase_limit"
        },
        {
          name: "Withdrawal Fee Percentage (%)",
          model: "withdrawal_fee_percentage"
        },
        {
          name: "Withdrawal Fee Limit TO Charge",
          model: "withdrawal_limit_to_charge"
        },
        {
          name: "Minimum Withdrawal Amount",
          model: "minimum_withdrawal_amount"
        },
      ])

    const service = ref({
        wallet_topup: 20,
        airtime_topup: 0,
        data_topup: 0,
        utility_topup: 0,
        tvsubscription_topup: 0,
        epin_topup: 0,
        wallet_transfer_topup: 0,
        withdrawal_topup: 50,
        games_charge: 0,
        glo_cg_topup: 2.2,
        airtel_cg_topup: 6.9,
        mtn_sme_topup: 0,
        cable_tv_discount: 0,
        utility_bills_discount: 0,
        data_discount: 0,
        airtime_discount: 3,
        sme_data_discount: 0,
        education_payment_discount: 0,
        referral_commission: 50,
        referral_minimum_top_up: 500,
        mtn_cg_charge: 0,
        mtn_cg_data_discount: 0,
        mtn_data_card_charge: 0,
        mtn_data_card_discount: 0,
        ninemobile_sme_charge: 0,
        ninemobile_sme_discount: 0,

        mtn_airtime_discount:90,
        glo_airtime_discount:0,
        airtel_airtime_discount:0,
        etisalat_airtime_discount:0,
        mtn_data_discount:0,
        airtel_data_discount:0,
        etisalat_data_discount:0,
        glo_data_discount:0, 

        minimum_airitme_purchase:0,
        daily_withdrawal_limit:0,
        airtime_purchase_limit:90,
        withdrawal_fee_percentage:0,
        withdrawal_limit_to_charge:0,

        minimum_withdrawal_amount:0
    })

onMounted(async () => {
  await getProviders();
});


const edit = ref(false)

const btnText = ref("Edit Settings");
const btnValue = ref();

let provider_data = ref({
  id: "",
  provider_name: "",
  photo: "",
});

const editItem = (item: any) => {
  provider_data.value = {
    id: item.id,
    provider_name: item.name,
    photo: item.photo
  }
  btnText.value = "Update Provider"
  dialog.value = true
  edit.value = true
}

const close = () => {
    provider_data.value = Object.assign(
    {},
    {
      id: "",
      provider_name: "",
      photo: ""
    }
  )

  dialog.value = true
  edit.value = false
  btnText.value = "Edit Settings"
}

const showDetails = async (id: string) => {
  router.push({name:'Services', params:{ id: id }})
};

const status_options = ref(["Pending", "Enabled", "Disabled", "Success"]);

// CHANGE STATUS COLOR
type StatusType = "pending" | "enabled" | "disabled" | "success";

const status_color = (status: StatusType) => {
  return status == "pending"
    ? "yellow-darken-3"
    : status == "enabled"
    ? "green lighten-3"
    : status == "success"
    ? "green lighten-3"
    : status == "disabled"
    ? "red lighten-3"
    : "";
};

const getGiftIcon = (e: any) => {
    provider_data.value.photo = e.target.files[0];
};

const getModalList = (listName: string, name: string) => {
    const list = eval(listName);

    btnValue.value = name;

    switch (list) {
        case list:
          console.log(list.value);
          modalData.value = list.value;
          break;
        default:
          break;
      }
    
      dialog.value = true
};
</script>

<template>
  <h2 class="my-5 mb-5">Service Settings</h2>
<v-row class="my-5">
    <v-col cols="12" sm="6" md="4" v-for="(data, index) in gridList" :key="index">
        <v-card elevation="1" class="pa-6 h-100">
        <div style="display: flex; align-items: center; justify-content: space-between;">
            <div class="pl-3 my-1">
                <h3 class="mb-2">
                    {{ data.name }}
                </h3>
            </div>
            <div>
                <v-avatar :color="data.color" size="x-large">
                <vue-feather
                    :type="data.profile"
                    class="text-dark text-white font-bold"
                ></vue-feather>
                </v-avatar>
            </div>
            </div>

        <div class="mt-11">
            <v-btn width="100%" color="grey" @click="getModalList(data?.list, data?.name)">
                Edit
            </v-btn>
        </div>
        </v-card>
    </v-col>
</v-row>

<v-row justify="center">
    <v-dialog v-model="dialog" max-width="500px" persistent>
      <v-card>
        <h3 class="text-h5 font-weight-bold pa-7">Edit {{ btnValue }}</h3>
        <v-card-text>
          <v-container>
            <v-form ref="form" lazy-validation>
              <v-row>
                <v-col cols="12" sm="6" md="12" v-for="(list, index) in modalData" :key="index">
                  <v-text-field
                    variant="outlined"
                    :label="list.name"
                    required
                    type="number"
                    v-model="(service[list.model] as number)"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="secondary"
            class="px-7"
            variant="outlined"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            :loading="loading"
            color="secondary"
            class="px-12"
            variant="flat"
            @click="updateSettings(service)"
          >
            Update {{ btnValue }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
    
</template>

<style scoped>
table tbody tr td {
  padding: 15px !important;
}
</style>
