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
      <div id="main-container">
        <div id="result">
          <div class="result-title">全制霸</div>
          <div class="result-content">
            三大拉麵 三大拉麵<br />
            三大拉麵 三大拉麵<br />
            三大拉麵 三大拉麵<br />
            三大拉麵 三大拉麵<br />
            三大拉麵 三大拉麵<br />
            三大拉麵 三大拉麵<br />
            三大拉麵 三大拉麵<br />
            三大拉麵<br />
          </div>
          <div class="result-title">制霸進度: 87% 不能再高了</div>
        </div>
        <japan-map
          :spot-visits="spotVisits.visited"
          :prefectur-visits="spotVisits.prefectureVisits"
          @click="showModal = true"
          style="cursor: pointer"
        ></japan-map>
      </div>
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
#main-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
}
#result {
  padding: 0 5em;
  text-align: center;
}
.result-title {
  margin-top: 5rem;
  font-size: 25pt;
}
.result-content {
  font-size: 20pt;
}
</style>
