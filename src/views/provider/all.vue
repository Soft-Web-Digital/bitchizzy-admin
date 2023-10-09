<script setup lang="ts">
import { ref, onMounted } from "vue"
import  {useRouter} from 'vue-router'
import { useDateFormat } from "@vueuse/core"
import { storeToRefs } from "pinia"
import { useProviderStore } from "../../stores/providers"
const router = useRouter()

const {
    getProviders,
    createProviders,
    deleteProviders,
    updateProviders,
    toggleProviders,
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

onMounted(async () => {
  await getProviders();
});


const edit = ref(false)

const btnText = ref("Create Provider");

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
  btnText.value = "Create Provider"
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

const selected = ref(["John"]);
</script>

<template>
  <h2 class="my-1">Service Providers</h2>
  <div class="d-flex align-center justify-end mb-4">
    <v-btn @click="dialog = true, close()" color="secondary"
        >Create Provider
    </v-btn>
  </div>

  <v-card>
    <v-card-text>
      <v-window v-model="tab">
          
          <v-table>
            <thead>
              <tr>
                <th
                  v-for="(headings, index) in providers_header"
                  :key="index"
                  class="text-left font-weight-bold"
                >
                  {{ headings.title }}
                </th>
              </tr>
            </thead>
            <tbody v-if="loading == false && providers?.length > 0">
              <tr class="pa-3" v-for="(data, index) in providers" :key="index">
                <td>{{ index + 1 }}</td>
                <td class="text-capitalize font-weight-bold">
                  {{ data?.name }}
                </td>
                <td>{{ data?.products_supported }}</td>
                <td>
                  <v-chip
                    label
                    class="text-capitalize font-weight-bold pa-3"
                    :color="status_color(data?.status)"
                    >{{ data?.status }}</v-chip
                  >
                </td>
                <td>
                  <v-switch
                      v-if="data?.status == 'enabled'"
                      :color="data?.status == 'enabled' ? 'black' : 'secondry'"
                      :value="data?.status"
                      v-model="data.status"
                      @change="toggleProviders(data?.id, 'disable')">
                  </v-switch>

                  <v-switch
                      v-if="data?.status == 'disabled'"
                      :color="data?.status == 'enabled' ? 'black' : 'secondry'"
                      :value="false"
                      v-model="data.status"
                      @change="toggleProviders(data?.id, 'enable')">
                  </v-switch>
                </td>
                <td>
                  {{ useDateFormat(data?.created_at, 'DD, MMMM-YYYY').value }}
                </td>

                <td>
                    <v-icon
                        small
                        class="mr-2 text-secondary cursor-pointer"
                        @click="showDetails(data?.id)"
                        title="view"
                        >mdi-eye</v-icon
                    >
                    <v-icon
                        small
                        class="mr-2 text-primary cursor-pointer"
                        @click="editItem(data)"
                        title="Edit"
                        >mdi-pencil</v-icon
                    >
                    <v-icon
                        small
                        class="text-error cursor-pointer"
                        title="Delete"
                        @click="deleteProviders(data?.id)"
                        >mdi-delete</v-icon
                    >

                    <!-- <v-switch label="John" value="John" color=""></v-switch> -->
                    
                    <!-- <v-switch
                    inset
            color="green"
            value="red"
            :label="`Switch 1: ${switch1.toString()}`"
          ></v-switch> -->
                  <!-- <v-row justify="center">
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
                          :to="{
                            name: 'Services',
                            params: { id: data.id },
                          }"
                          link
                          color="secondary"
                        >
                          <v-list-item-title> View Details </v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="editItem(data)" link color="secondary">
                          <v-list-item-title> Update Role </v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="deleteProviders(data?.id)" link color="secondary">
                          <v-list-item-title> Delete Role </v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-row> -->
                </td>
              </tr>
            </tbody>
          </v-table>

          <v-layout v-if="loading == true" class="align-center justify-center w-100 my-5">
            <v-progress-circular indeterminate></v-progress-circular>
          </v-layout>
          <p v-if="loading == false && providers?.length <= 0" class="text-center py-6">
            No data available
          </p>
      </v-window>
    </v-card-text>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card class="pa-4">
        <h3>{{ btnText }}</h3>
        <v-form class="mt-8 py-8">
          <v-text-field
            v-model="provider_data.provider_name"
            label="Name"
            variant="outlined"
          ></v-text-field>
          <v-file-input
            hint="This field is optional"
            persistent-hint
            append-inner-icon="mdi-paperclip"
            prepend-icon=""
            @input="getGiftIcon"
            label="Photo"
          ></v-file-input>
          <v-btn
            :loading="loading"
            color="secondary"
            block
            class="mt-3"
            @click="edit == true ? updateProviders(provider_data) : createProviders(provider_data)"
            >Submit</v-btn
          >
        </v-form>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<style scoped>
table tbody tr td {
  padding: 15px !important;
}
</style>
