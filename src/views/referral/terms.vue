<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useDateFormat } from "@vueuse/core"
import { storeToRefs } from "pinia"
import { useReferralsStore } from "../../stores/referral"
const {
  getReferralTerms,
  createReferralTerms,
  updateReferralTerms,
  deleteReferralTerms,
} = useReferralsStore()

const { terms, loading, dialog } = storeToRefs(
    useReferralsStore()
)
const tab = ref(null)

const terms_header = ref([
  {
    title: "No."
  },
  {
    title: "Title"
  },
  {
    title: "Body"
  },
  {
    title: "Actions"
  }
])

onMounted(async () => {
  await getReferralTerms(1)
  // await getAllPermissions()
})

const edit = ref(false)

const btnText = ref("Create Terms");

let terms_data = ref({
  id: "",
  title: "",
  body: "",
});
const editItem = (item: any) => {
  terms_data.value = {
    id: item.id,
    title: item.title,
    body: item.body
  }
  btnText.value = "Update Terms"
  dialog.value = true
  edit.value = true
}

const close = () => {
  terms_data.value = Object.assign(
    {},
    {
      id: "",
      title: "",
      body: ""
    }
  )

  dialog.value = true
  edit.value = false
  btnText.value = "Create Terms"
}
</script>

<template>
  <h2 class="my-5">Referral Terms</h2>
  <v-card>

    <v-card-text>
      <v-window v-model="tab">
          <div class="d-flex justify-end w-100">
            <v-btn @click="dialog = true" color="secondary"
              >Create Referral Terms</v-btn
            >
          </div>
          <v-table>
            <thead>
              <tr>
                <th
                  v-for="(headings, index) in terms_header"
                  :key="index"
                  class="text-left font-weight-bold"
                >
                  {{ headings.title }}
                </th>
              </tr>
            </thead>
            <tbody v-if="loading == false && terms?.length > 0">
              <tr class="pa-3" v-for="(data, index) in terms" :key="index">
                <td>{{ index + 1 }}</td>
                <td class="text-capitalize font-weight-bold">
                  {{ data?.title }}
                </td>
                <td>{{ data?.body }}</td>
                <!-- <td>
                  {{ useDateFormat(data?.created_at, 'DD, MMMM-YYYY').value }}
                </td> -->

                <td>
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
                        <v-list-item @click="editItem(data)" link color="secondary">
                          <v-list-item-title> Update Role </v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="deleteReferralTerms(data?.id)" link color="secondary">
                          <v-list-item-title> Delete Role </v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-row>
                </td>
              </tr>
            </tbody>
          </v-table>

          <v-layout v-if="loading == true" class="align-center justify-center w-100 my-5">
            <v-progress-circular indeterminate></v-progress-circular>
          </v-layout>
          <p v-if="loading == false && terms?.length <= 0" class="text-center py-6">
            No data available
          </p>
      </v-window>
    </v-card-text>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card class="pa-4">
        <h3>{{ btnText }}</h3>
        <v-form class="mt-8 py-8">
          <v-text-field
            v-model="terms_data.title"
            label="Title"
            variant="outlined"
          ></v-text-field>
          <v-textarea
            v-model="terms_data.body"
            label="Body"
            variant="outlined"
          ></v-textarea>
          <v-btn
            :loading="loading"
            color="secondary"
            block
            @click="edit == true ? updateReferralTerms(terms_data) : createReferralTerms(terms_data), close()"
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
