<script lang="ts" setup>
import ProgressBar from "./components/ProgressBar.vue";
import FormModal from "./components/FormModal.vue";
import { SpotVisit } from "~/data/spot_visit";
import JapanMap from "./components/map/JapanMap.vue";

const spotVisits = new SpotVisit();
const showModal = ref(false);

const visitedSandai = computed(() =>
  spotVisits.sandaiVisits
    .filter((sandaiVisit) => sandaiVisit.numVisit.value == 3)
    .map((sandaiVisit) => sandaiVisit.sandaiType)
);

function getLevelTitle(ratio: number) {
  if (ratio <= 0.1) return "初心冒險者";
  else if (ratio <= 0.2) return "新手冒險家 I";
  else if (ratio <= 0.3) return "新手冒險家 II";
  else if (ratio <= 0.4) return "奇遇探險家 I";
  else if (ratio <= 0.5) return "奇遇探險家 II";
  else if (ratio <= 0.6) return "景點尋寶家 I";
  else if (ratio <= 0.7) return "景點尋寶家 II";
  else if (ratio <= 0.8) return "老手冒險家";
  else if (ratio <= 0.9) return "景點征服者";
  else return "日本探險達人";
}
</script>

<template>
  <div id="page-container">
    <div id="map-container">
      <div id="main-container">
        <div class="result-container">
          <div v-if="visitedSandai.length > 0" class="result">
            <div class="result-title">
              <img src="images/star.png" />
              全制霸
              <img src="images/star.png" />
            </div>
            <div class="sandai-items">
              <span v-for="sandai in visitedSandai" class="sandai-item"
                >三大{{ getChineseName(sandai) }}</span
              >
            </div>
          </div>
          <div v-else class="result">還在稱霸三大的路上...</div>
          <div class="result-progress-title">
            制霸進度:
            {{ Math.round(spotVisits.ratio.value * 100) }}%<br />
            {{ getLevelTitle(spotVisits.ratio.value) }}
          </div>
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
.result-container {
  padding: 0 5em;
  text-align: center;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  /* font-size: clamp(1rem, 2vw, 15rem); */
}
@media (max-aspect-ratio: 1/1) {
  #main-container {
    justify-content: flex-start;
  }
  .result-container {
    padding: 0;
    position: absolute;
    width: 50%;
    height: 50%;
    align-self: flex-start;
  }
}
.result-title {
  font-size: clamp(1.2rem, 3vw, 2rem);
  margin-bottom: 0.5em;
}

.result-title > img {
  height: 1em;
  vertical-align: middle;
}
.result {
  font-size: clamp(0.85rem, 2vw, 1.2rem);
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.result-progress-title {
  font-size: clamp(1rem, 3vw, 2rem);
  flex: 1;
  display: flex;
  justify-content: center;
}
.sandai-items {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.sandai-item:nth-child(odd) {
  text-align: right;
}
.sandai-item:nth-child(even) {
  text-align: left;
}
.sandai-item {
  margin: 0 0.5em;
}
</style>
