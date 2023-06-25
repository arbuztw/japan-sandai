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
  </div>
</template>
