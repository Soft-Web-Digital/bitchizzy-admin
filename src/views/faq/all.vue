<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useDateFormat } from "@vueuse/core"
import { storeToRefs } from "pinia"
import { useFAQStore } from "../../stores/faq"
const {
  getFaq,
  getFaqCategory,
  createFaq,
  updateFaq,
  deleteFaq,
  createFaqCategory,
  updateFaqCategory,
  deleteFaqCategory,
} = useFAQStore()

const { faq, loading, dialog, dialog1, faq_category } = storeToRefs(
  useFAQStore()
)
const tab = ref(null);

let faq_data = ref({
  question: "",
  answer: "",
  faq_category_id: "",
  id: ""
});

let faq_category_data = ref({
  id: "",
  name: "",
  status: "",
});

const faq_header = ref([
  {
    title: "No."
  },
  {
    title: "Title"
  },
  {
    title: "Slug"
  },
  {
    title: "Body"
  },
  {
    title: "Date created"
  },
  {
    title: "Actions"
  }
])
const category_header = ref([
  {
    title: "No."
  },
  {
    title: "name"
  },
  {
    title: "status"
  },
  {
    title: "action"
  }
])

onMounted(async () => {
  await getFaq(1)
  await getFaqCategory(1)
})

const edit = ref(false)

const btnText = ref("Create Categroy");

const btnText1 = ref("Create FAQ");

const editFaq = (item: any) => {
  faq_data.value = {
    id: item.id,
    question: item.title,
    answer: item.body,
    faq_category_id: item.faq_category_id, 
  }
  btnText1.value = "Update FAQ"
  dialog.value = true
  edit.value = true

  console.log(faq_data.value);
  
}

const editCategory = (item: any) => {
  faq_category_data.value = {
    id: item.id,
    name: item.name,
    status: item.status,
  }
  btnText.value = "Update Categroy"
  dialog1.value = true
  edit.value = true
}

const close = () => {
  faq_category_data.value = Object.assign(
    {},
    {
      name: "",
      status: "",
      id: "",
    }
  )

  faq_data.value = Object.assign(
    {},
    {
      question: "",
      answer: "",
      faq_category_id: "",
      id: ""
    }
  )

  edit.value = false
  btnText.value = "Create Categroy"
  btnText.value = "Create FAQ"
}

// CHANGE STATUS COLOR
type StatusType = "active" | "inactive";

const status_color = (status: StatusType) => {
  return status == "active"
    ? "green lighten-3"
    : status == "inactive"
    ? "red lighten-3"
    : "";
};

const status = ['active', 'inactive'];
</script>

<template>
  <h2 class="my-5">Frequently Asked Question</h2>
  <v-card>
    <v-tabs v-model="tab" bg-color="secondary">
      <v-tab value="one">All FAQ</v-tab>
      <v-tab value="two">All FAQ Category</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <div class="d-flex justify-end w-100">
            <v-btn @click="dialog = true" color="secondary"
              >Create a FAQ</v-btn
            >
          </div>
          <v-table>
            <thead>
              <tr>
                <th
                  v-for="(headings, index) in faq_header"
                  :key="index"
                  class="text-left font-weight-bold"
                >
                  {{ headings.title }}
                </th>
              </tr>
            </thead>
            <tbody v-if="loading == false && faq?.length > 0">
              <tr class="pa-3" v-for="(data, index) in faq" :key="index">
                <td>{{ index + 1 }}</td>
                <td class="text-capitalize font-weight-bold">
                  {{ data?.title }}
                </td>
                <td>{{ data?.slug }}</td>
                <!-- <td>{{ data?.group_name }}</td> -->
                <td>{{ data?.body }}</td>
                <td>
                  {{ useDateFormat(data?.created_at, 'DD, MMMM-YYYY').value }}
                </td>

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
                        <v-list-item @click="editFaq(data)" link color="secondary">
                          <v-list-item-title> Update FAQ </v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="deleteFaq(data?.id)" link color="secondary">
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
          <p v-if="loading == false && faq?.length <= 0" class="text-center py-6">
            No data available
          </p>
        </v-window-item>

        <v-window-item value="two">
          <div class="d-flex justify-end w-100">
            <v-btn @click="dialog1 = true, edit = false" color="secondary"
              >Create FAQ Category</v-btn
            >
          </div>
          <v-table>
            <thead>
              <tr>
                <th
                  v-for="(headings, index) in category_header"
                  :key="index"
                  class="text-left font-weight-bold"
                >
                  {{ headings.title }}
                </th>
              </tr>
            </thead>
            <tbody v-if="faq_category?.length > 0">
              <tr class="pa-3" v-for="(data, index) in faq_category" :key="data?.id">
                <td>{{ index + 1 }}</td>
                <td class="text-capitalize font-weight-bold">
                  {{ data?.name }}
                </td>
                <td>
                  <v-chip
                    label
                    class="text-capitalize font-weight-bold pa-3"
                    :color="status_color(data?.status)"
                    >{{ data?.status }}</v-chip
                  >
                </td>

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
                        <v-list-item @click="editCategory(data)" link color="secondary">
                          <v-list-item-title> Update Role </v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="deleteFaqCategory(data?.id)" link color="secondary">
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
          <p v-if="loading == false && faq_category?.length <= 0" class="text-center py-6">
            No data available
          </p>
        </v-window-item>
      </v-window>
    </v-card-text>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card class="pa-4">
        <h3>{{ btnText1 }}</h3>
        <v-form class="mt-8 py-8">
          <v-text-field
            v-model="faq_data.question"
            label="Question"
            variant="outlined"
          ></v-text-field>
          <v-textarea
            v-model="faq_data.answer"
            label="Answer"
            required
          ></v-textarea>

          <v-autocomplete
            :items="faq_category"
            label="Category"
            required
            chips
            item-title="name"
            item-value="id"
            :disabled="!faq_category"
            v-model="faq_data.faq_category_id"
          ></v-autocomplete>

          <v-btn
            :loading="loading"
            color="secondary"
            block
            @click="edit == true ? updateFaq(faq_data) : createFaq(faq_data), close()"
            >Submit</v-btn
          >
        </v-form>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog1" max-width="500px">
      <v-card class="pa-4">
        <h3>{{ btnText }}</h3>
        <v-form class="mt-8 py-8">
          <v-text-field
            v-model="faq_category_data.name"
            label="Name"
            variant="outlined"
          ></v-text-field>
          <v-autocomplete
            :items="status"
            label="Status"
            required
            item-title="name"
            item-value="id"
            v-model="faq_category_data.status"
          ></v-autocomplete>
          <v-btn
            :loading="loading"
            color="secondary"
            block
            @click="edit == true ? updateFaqCategory(faq_category_data) : createFaqCategory(faq_category_data), close()"
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
