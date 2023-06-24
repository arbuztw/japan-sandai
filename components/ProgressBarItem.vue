<script lang="ts" setup>
import { SandaiVisit } from "~/data/sandai_visit";
import { getIconName, getColor } from "~/utils/sandai_types_util";

const props = defineProps<{
  sandaiVisit: SandaiVisit;
}>();

const progressWidth = computed(
  () => `${props.sandaiVisit.numVisit.value * 30}px`
);
</script>

<template>
  <div class="progress-bar-item" v-if="sandaiVisit.numVisit.value > 0">
    <div class="icon-container">
      <img
        :src="`/images/${getIconName(sandaiVisit.sandaiType)}.png`"
        class="mark-icon"
      />
    </div>
    <div class="mark"></div>
    <div
      class="progress"
      :style="{
        width: progressWidth,
        backgroundColor: getColor(sandaiVisit.sandaiType),
      }"
    ></div>
  </div>
</template>

<style scoped>
.progress-bar-item {
  display: inline-flex;
  flex-direction: column;
}
.icon-container {
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 1px;
}
.mark-icon {
  width: 20px;
  height: 20px;
  transform: translateX(10px);
}
.mark {
  height: 15px;
  border-right: 1px solid #333;
  transform: translateX(0.5px);
}
.progress {
  height: 26px;
  border-top: 2px solid #333;
  border-bottom: 2px solid #333;
  transition: width 0.3s;
}
</style>
