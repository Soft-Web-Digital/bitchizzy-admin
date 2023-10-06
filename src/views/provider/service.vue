<script lang="ts">
import { defineComponent, ref, onMounted, reactive, watch } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useProviderStore } from "@/stores/providers";
import uploadImage from "@/composables/uploadImage";
import { useDateFormat } from "@vueuse/core";
import useFormatter from "@/composables/useFormatter";
export default defineComponent({
  setup() {
    const related_giftcard = ref([
      {
        title: "No.",
      },
      {
        title: "Name",
      },
      {
        title: "Type",
      },
      {
        title: "Status",
      },
      {
        title: "Toggle Status",
      },
      {
        title: "Date",
      },
      // {
      //   title: "Actions",
      // },
    ]);

    const note = ref("");
    let id = ref("");
    let is_single = ref(true);
    const route: any = useRoute();
    let uploadingImage = ref<boolean>(false);
    let startImage = ref<number>(1);
    let totalImage = ref<number>(1);

    const {
        singleProvider,
        loading,
        dialog,
    } = storeToRefs(useProviderStore());

    const {
        getProviders,
        getSingleProviders,
        toggleServices,
    } = useProviderStore();

    const formate_text = (text: string) => {
      if (text === "partially_approved") return "Partial";
      return text;
    };
    const page_no = ref(1);
    const reproof = ref<any>([]);
    const get_reproof = ($event: any) => {
      uploadingImage.value = true;
      let count = $event.length;
      let index = 0;
      if (event) {
        totalImage.value = $event.length;
        while (count--) {
          // proofs.value.push($event[index]);
          uploadImage($event[index]).then((response) => {
            startImage.value++;
            previewList.value.push(response.secure_url);
            reproof.value.push(response.secure_url);
          });
          index++;
        }
        startImage.value = 0;
        // totalImage.value = 1;
        // uploadingImage.value = false;
      }
    };
    const partial_approve = reactive({
      review_rate: "",
      review_note: "",
      review_proof: <any>[],
    });

    const removeImage = (id: any, index: number) => {
      previewList.value = previewList.value.filter((item: any) => item !== id);
      partial_approve.review_proof.splice(index, 1);
    };
    const removeImageDecline = (id: any, index: number) => {
      previewList.value = previewList.value.filter((item: any) => item !== id);
      reproof.value.splice(index, 1);
    };
    const previewList = ref<any>([]);
    const partial = ($event: any) => {
      uploadingImage.value = true;
      let count = $event.length;
      console.log($event);
      let index = 0;
      if (event) {
        totalImage.value = $event.length;
        while (count--) {
          // proofs.value.push($event[index]);
          uploadImage($event[index]).then((response) => {
            startImage.value++;
            previewList.value.push(response.secure_url);
            partial_approve.review_proof.push(response.secure_url);
          });
          index++;
        }
        startImage.value = 0;
        // totalImage.value = 1;
        // uploadingImage.value = false;
      }
    };

    const disapprove = () => {
      if (dialog.value == true) {
        dialog.value = false;
      }
    //   dialog2.value = true;
    };

    const approveAll = () => {
      is_single.value = false;
      id.value = route.params.id;
      openConfirmationDialog("approve", route.params.id);
    };
    const disapproveAll = () => {
      is_single.value = false;
      id.value = route.params.id;
      disapprove();
    };

    const partialApproveAll = () => {
      is_single.value = false;
      id.value = route.params.id;
      dialog.value = true;
    };
    // CHANGE STATUS COLOR
    type StatusType =
      | "pending"
      | "approved"
      | "declined"
      | "enabled"
      | "disabled"
      | "partially_approved";

    const status_color = (status: StatusType) => {
      return status == "pending"
        ? "yellow-darken-3"
        : status == "approved"
        ? "green lighten-3"
        : status == "enabled"
        ? "green lighten-3"
        : status == "declined"
        ? "red lighten-3"
        : status == "disabled"
        ? "red lighten-3"
        : status == "partially_approved"
        ? "purple lighten-3"
        : "";
    };

    // watch([dialog, dialog2, loading],() => {
    //     getAllGiftCardTransactionByUserId(route.params.id);
    // })

    onMounted(() => {
        getSingleProviders(route.params.id);
    });

    // const formatCurrency = (value: any) => {
    //   return new Intl.NumberFormat().format(value);
    // };

    const { formatCurrency } = useFormatter();

    const refresh = async () => {
      await getSingleProviders(route.params.id);
      previewList.value = [];
      uploadingImage.value = false;
    };
    const confirmationDialog = ref(false);
    let confirmationID = ref("");
    const confirmationStatus = ref("");
    const openConfirmationDialog = (type: string, id?: any) => {
      confirmationDialog.value = true;
      confirmationID.value = id;
      confirmationStatus.value = type;
    };
    // const makeConfirmation = async (type: string) => {
    //   if (type == "approve") {
    //     await approveRequest(confirmationID.value, 1, is_single.value);
    //     refresh();
    //     confirmationDialog.value = false;
    //   } else if (type == "decline") {
    //     declineRequest(
    //       confirmationID.value,
    //       note.value,
    //       reproof.value as any,
    //       is_single.value
    //     );
    //     confirmationDialog.value = false;
    //   } else if (type == "partial") {
    //     partialApproveRequest(
    //       confirmationID.value,
    //       partial_approve,
    //       is_single.value
    //     );
    //     confirmationDialog.value = false;
    //   }
    //   confirmationDialog.value = false;
    //   is_single.value = true;
    // };

    // watch(
    //   [dialog, dialog2],
    //   ([newDialog, oldDialog], [newDialog2, oldDialog2]) => {
    //     newDialog === false && oldDialog === false ? refresh() : "";
    //   }
    // );

    return {
        singleProvider,
      related_giftcard,
    //   relatedGiftCards,
      reproof,
      loading,
      useDateFormat,
      formate_text,
      status_color,
      dialog,
    //   dialog2,
    //   declining,
    //   approveRequest,
    //   declineRequest,
    //   partialApproveRequest,
      partial_approve,
      get_reproof,
      note,
      id,
      disapprove,
      approveAll,
      disapproveAll,
      partialApproveAll,
    //   singleGiftCardTransaction,
      page_no,
      partial,
      formatCurrency,
    //   makeConfirmation,
      openConfirmationDialog,
      previewList,
      startImage,
      totalImage,
      uploadingImage,
      removeImage,
      removeImageDecline,
      toggleServices,
      confirmationID,
      confirmationDialog,
      confirmationStatus,
    };
  },
});
</script>



<template>
    <div>
      <v-btn
        link
        size="small"
        color="grey-darken-4"
        :to="{ name: 'Providers' }"
      >
        <v-icon size="small" start icon="mdi-arrow-left"></v-icon>
        Provider
      </v-btn>
      <div class="mb-5 md-mb-0 d-md-flex justify-space-between">
        <h2 class="my-5 text-capitalize username">{{ singleProvider.name }} Service:</h2>
        <!-- <v-card-actions class="d-flex flex-wrap align-start" style="gap: 10px; padding: 0% !important;">
          <v-btn
            class="mr-2 md-mr-4"
            color="green lighten-3"
            
            variant="tonal"
            @click="approveAll()"
          >
            Enable
          </v-btn>
  
          <v-btn color="red lighten-3" variant="tonal" @click="disapproveAll()">
            Disable
          </v-btn>
        </v-card-actions> -->
      </div>
  
      <v-table>
        <thead>
          <tr>
            <th
              v-for="(headings, index) in related_giftcard"
              :key="index"
              class="text-left"
            >
              {{ headings.title }}
            </th>
          </tr>
        </thead>
        <tbody v-if="singleProvider?.products?.length > 0 && loading == false">
          <tr  class="pa-3" v-for="(data, index) in singleProvider.products" :key="data.id">
            <td>{{ index + 1 }}</td>
            <td>{{ data.name }}</td>
            <td>{{ data.type }}</td>
            <td>
              <v-chip
                label
                size="small"
                class="text-capitalize font-weight-bold pa-3"
                :color="status_color(data?.status)"
                >{{ data?.status == 'partially_approved' ? 'Approved' : data?.status }}</v-chip
              >
            </td>
            <td>
              <v-switch
                  v-if="data?.status == 'enabled'"
                  :color="data?.status == 'enabled' ? 'success' : 'secondry'"
                  :value="data?.status"
                  v-model="data.status"
                  @change="toggleServices(data?.id, 'disable')">
              </v-switch>

              <v-switch
                  v-if="data?.status == 'disabled'"
                  :color="data?.status == 'enabled' ? 'success' : 'secondry'"
                  :value="false"
                  v-model="data.status"
                  @change="toggleServices(data?.id, 'enable')">
              </v-switch>
            </td>
            <td>
                {{ useDateFormat(data?.created_at, 'DD, MMMM-YYYY').value }}
            </td>
            <!-- <td>
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
                      :to="{
                        name: 'ViewGiftCardTransaction',
                        params: { id: data.id },
                      }"
                      link
                      color="secondary"
                    >
                      <v-list-item-title> View giftcard </v-list-item-title>
                    </v-list-item>
  
                    <v-list-item
                      v-if="data?.status == 'pending'"
                      
                      link
                      color="secondary"
                    >
                      <v-list-item-title> Approve giftcard </v-list-item-title>
                    </v-list-item>
                    <v-list-item
                      v-if="data?.status == 'pending'"
                      @click="
                        id = data?.id;
                        disapprove();
                      "
                      link
                      color="secondary"
                    >
                      <v-list-item-title> Decline giftcard </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-row>
            </td> -->
          </tr>
        </tbody>
      </v-table>
  
      <v-layout
        v-if="loading == true"
        class="align-center justify-center w-100 my-5"
      >
        <v-progress-circular indeterminate></v-progress-circular>
      </v-layout>
      <p
        v-if="singleProvider?.products?.length<= 0 || singleProvider == null"
        class="text-center pa-5"
      >
        No Services
      </p>
  
      <v-dialog
        v-if="dialog"
        v-model="dialog"
        max-width="429px"
        min-height="476px"
      >
        <v-card class="view-dialog pa-4">
          <div class="mb-3 d-flex justify-space-between">
            <h3 class="text-justify mt-7">Partial approval</h3>
            <v-btn
              @click="dialog = false"
              icon="mdi-close"
              color="secondary"
              variant="text"
            >
              <v-icon icon="mdi-close"></v-icon>
            </v-btn>
          </div>
          <v-form class="my-10">
            <v-text-field
              prefix="₦‎"
              v-model="partial_approve.review_rate"
              type="number"
              variant="outlined"
              label="Review Amount"
            ></v-text-field>
            <v-textarea
              v-model="partial_approve.review_note"
              variant="outlined"
              label="Review Note"
            ></v-textarea>
            <label for="proof" class="cursor-pointer">
              <p class="text-black">Upload transaction proof</p>
            </label>
            <label v-if="!previewList.length" for="proof" class="cursor-pointer">
              <img
                src="../../assets/images/card-placeholder.svg"
                alt="card-placeholder"
                class="mt-3 w-full object-fill max-h-[174px] rounded-xl"
              />
            </label>
            <input
              type="file"
              multiple
              id="proof"
              ref="fileInput"
              style="display: none"
              accept="image/*"
              @change="partial(($event.target as HTMLFormElement).files)"
            />
            <div
              class="gap-5 mt-5"
              style="
                display: grid;
                grid-template-columns: repeat(4, 80px);
                gap: 12px;
              "
            >
              <div v-for="(image, index) in previewList" :key="index">
                <div style="position: relative">
                  <img
                    class="w-full cursor-pointer"
                    style="height: 75px; object-fit: cover; width: 100%"
                    :src="image"
                  />
                  <img
                    src="@/assets/images/cancel-svgrepo-com.svg"
                    class="absolute rounded-full border border-red-700 -top-2 -right-2 bg-red-200 text-red-500 cursor-pointer"
                    style="position: absolute; right: -5px; top: -5px"
                    width="20"
                    @click="removeImage(image, index)"
                  />
                </div>
              </div>
            </div>
            <div v-if="uploadingImage" class="pt-3 text-center">
              <small class="p-2 block"
                >Uploaded {{ startImage }} of {{ totalImage }}...</small
              >
            </div>
            <label
              v-if="previewList.length"
              for="proof"
              class="mt-4 d-flex align-center cursor-pointer"
            >
              <img src="../../assets/images/plus-icon.svg" alt="plus icon" />
              <p class="ml-3 underline">Add more proof</p>
            </label>
            <v-btn
              
              @click="openConfirmationDialog('partial', id)"
              class="mt-5"
              block
              color="secondary"
              >submit</v-btn
            >
          </v-form>
        </v-card>
      </v-dialog>
  
      <v-expand-transition>
        <!-- <v-dialog v-if="dialog2" v-model="dialog2" max-width="500px" width="100%">
          <v-card max-width="500px">
            <v-card-text>
              <h3>Decline Request</h3>
              <p>Enter Reasons for Declining this withdrawal request</p>
            </v-card-text>
  
            <v-container class="mt-7">
              <v-textarea
                label="Comments"
                v-model="note"
                variant="outlined"
              ></v-textarea>
  
              <label for="proof" class="cursor-pointer">
                <p class="text-black">Upload transaction proof</p>
              </label>
              <label
                v-if="!previewList.length"
                for="proof"
                class="cursor-pointer"
              >
                <img
                  src="../../assets/images/card-placeholder.svg"
                  alt="card-placeholder"
                  class="mt-3 w-full object-fill max-h-[174px] rounded-xl"
                />
              </label>
              <input
                type="file"
                multiple
                id="proof"
                ref="fileInput"
                style="display: none"
                accept="image/*"
                @change="get_reproof(($event.target as HTMLFormElement).files)"
              />
              <div
                class="gap-5 mt-5"
                style="
                  display: grid;
                  grid-template-columns: repeat(4, 80px);
                  gap: 12px;
                "
              >
                <div v-for="(image, index) in previewList" :key="index">
                  <div style="position: relative">
                    <img
                      class="w-full cursor-pointer"
                      style="height: 75px; object-fit: cover; width: 100%"
                      :src="image"
                    />
                    <img
                      src="@/assets/images/cancel-svgrepo-com.svg"
                      class="absolute rounded-full border border-red-700 -top-2 -right-2 bg-red-200 text-red-500 cursor-pointer"
                      style="position: absolute; right: -5px; top: -5px"
                      width="20"
                      @click="removeImageDecline(image, index)"
                    />
                  </div>
                </div>
              </div>
              <div v-if="uploadingImage" class="pt-3 text-center">
                <small class="p-2 block"
                  >Uploaded {{ startImage }} of {{ totalImage }}...</small
                >
              </div>
              <label
                v-if="previewList.length"
                for="proof"
                class="mt-4 d-flex align-center cursor-pointer"
              >
                <img src="../../assets/images/plus-icon.svg" alt="plus icon" />
                <p class="ml-3 underline">Add more proof</p>
              </label>
  
              <v-btn
                color="secondary"
                class="my-5"
                block
                :loading="declining"
                @click="openConfirmationDialog('decline', id)"
                >Submit</v-btn
              >
            </v-container>
          </v-card>
        </v-dialog> -->
      </v-expand-transition>
      <v-dialog v-model="confirmationDialog" width="500">
        <v-card>
          <v-toolbar dark dense flat>
            <v-toolbar-title class="text-body-2 font-weight-bold grey--text">
              Confirm
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text class="pa-4 black--text"
            >Are you sure you want to
            {{
              confirmationStatus === "partial"
                ? "partially approve"
                : confirmationStatus
            }}
            this transaction?</v-card-text
          >
          <v-card-actions class="pt-3">
            <v-spacer></v-spacer>
            <v-btn
              color="grey"
              text
              class="body-2 font-weight-bold"
              @click.native="confirmationDialog = false"
              >Cancel</v-btn
            >
            <v-btn
              color="primary"
              class="body-2 font-weight-bold"
              outlined
              @click.native=""
              >Yes</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <style scoped></style>
  