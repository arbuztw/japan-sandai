<script lang="ts" setup>
import Spot from "~/types/spot";
import PrefectureMap from "./PrefectureMap.vue";
import { PrefectureVisit } from "~/data/prefecture_visit";
import SpotMap from "./SpotMap.vue";

const props = defineProps<{
  spotVisits: Record<Spot, boolean>;
  prefecturVisits: PrefectureVisit[];
}>();
</script>

<template>
  <!-- <div id="japan-map-wrapper"> -->
  <!-- Created for MapSVG plugin: http://mapsvg.com -->
  <svg
    xmlns:mapsvg="http://mapsvg.com"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns="http://www.w3.org/2000/svg"
    mapsvg:geoViewBox="123.658963 45.523885 145.820743 24.217586"
    viewBox="90 0 400 400"
    id="japan-map"
  >
    <prefecture-map
      v-for="visit in prefecturVisits"
      :visit="visit"
    ></prefecture-map>
    <spot-map v-for="spot in Object.values(Spot)" :spot="spot"></spot-map>
  </svg>
  <!-- </div> -->
</template>

<style scoped>
#japan-map-wrapper {
  margin-top: 10px;
  text-align: center;
  height: 100%;
}
#japan-map {
  height: 100%;
}
</style>
