<script setup>
import ProgressBar from "./components/ProgressBar.vue";
import FormModal from "./components/FormModal.vue";
import { SpotVisit } from "~/data/spot_visit";
import JapanMap from "./components/map/JapanMap.vue";

const spotVisits = new SpotVisit();
const showModal = ref(false);
</script>

<template>
  <div id="page-container">
    <div id="map-container">
      <japan-map
        :spot-visits="spotVisits.visited"
        :prefectur-visits="spotVisits.prefectureVisits"
      ></japan-map>
    </div>
    <div id="progress-bar-container">
      <progress-bar :sandai-visits="spotVisits.sandaiVisits"></progress-bar>
    </div>
  </div>
  <FormModal
    :sandai-visits="spotVisits.sandaiVisits"
    v-show="showModal"
    @close-modal="showModal = false"
  />
</template>

<style scoped>
#page-container {
  height: 100%;
  padding: 1em 2em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
#map-container {
  flex-grow: 1;
  min-height: 0;
}
</style>
