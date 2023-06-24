<script lang="ts" setup>
import ProgressBarItem from "./ProgressBarItem.vue";
import { SandaiVisit } from "~/data/sandai_visit";

const props = defineProps<{
  sandaiVisits: SandaiVisit[];
}>();
</script>

<template>
  <div class="progress-bar">
    <div class="progress-start"></div>
    <progress-bar-item :sandai-visit="sandaiVisits[0]"></progress-bar-item>
    <progress-bar-item :sandai-visit="sandaiVisits[3]"></progress-bar-item>
    <progress-bar-item :sandai-visit="sandaiVisits[5]"></progress-bar-item>
    <div class="progress-placeholder"></div>
    <div class="progress-end"></div>
  </div>
</template>

<style scoped>
.progress-bar {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  min-height: 66px;
}
.progress-start {
  display: inline-block;
  height: 30px;
  width: 15px;
  border-radius: 15px 0 0 15px;
  background-color: #333;
}

.progress-placeholder {
  display: inline-block;
  height: 26px;
  flex: auto;
  border-top: 2px solid #333;
  border-bottom: 2px solid #333;
  background-color: #ccc;
}

.progress-end {
  display: inline-block;
  height: 30px;
  width: 15px;
  border-radius: 0 15px 15px 0;
  background-color: #333;
}
</style>
