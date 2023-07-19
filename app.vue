<script setup>
import ProgressBar from "./components/ProgressBar.vue";
import FormModal from "./components/FormModal.vue";
import { SpotVisit } from "~/data/spot_visit";
import JapanMap from "./components/map/JapanMap.vue";

useHead({
  bodyAttrs: {
    style: "background-color: #c7f0ff; font-family: sans-serif;",
  },
});

const spotVisits = new SpotVisit();
const showModal = ref(false);
</script>

<template>
  <div>
    <progress-bar :sandai-visits="spotVisits.sandaiVisits"></progress-bar>
  </div>
  <FormModal
    :sandai-visits="spotVisits.sandaiVisits"
    v-show="showModal"
    @close-modal="showModal = false"
  />
  <div class="save-btn">
    <button @click="showModal = true">Save</button>
  </div>
</template>
