<script setup>
import ProgressBar from "./components/ProgressBar.vue";
import { SpotVisit } from "~/data/spot_visit";
import JapanMap from "./components/map/JapanMap.vue";

useHead({
  bodyAttrs: {
    style: "background-color: #c7f0ff",
  },
});

const spotVisits = new SpotVisit();
</script>

<template>
  <div>
    <progress-bar :sandai-visits="spotVisits.sandaiVisits"></progress-bar>
    <japan-map
      :spot-visits="spotVisits.visited"
      :prefectur-visits="spotVisits.prefectureVisits"
    ></japan-map>
    <div v-for="sandaiVisit in spotVisits.sandaiVisits">
      <h3>{{ sandaiVisit.sandaiType }}</h3>
      <div v-for="spotAttr in sandaiVisit.required_spots">
        <input type="checkbox" v-model="spotAttr.visited.value" />
        {{ spotAttr.spot }}
      </div>
      <div v-for="spotAttr in sandaiVisit.optional_spots">
        <input type="checkbox" v-model="spotAttr.visited.value" />
        {{ spotAttr.spot }}
      </div>
    </div>
  </div>
</template>
