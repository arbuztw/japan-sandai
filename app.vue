<script setup>
import ProgressBar from "./components/ProgressBar.vue";
import { SpotVisit } from "~/data/spot_visit";

const spotVisits = new SpotVisit();
</script>

<template>
  <div>
    <progress-bar :sandai-visits="spotVisits.sandaiVisits"></progress-bar>
  </div>
</template>
