<<<<<<< Updated upstream
<template>
  <div class="progress-bar-item" v-if="visited > 0">
    <div class="icon-container">
      <img :src="`/images/${this.type}.png`" alt="" class="mark-icon" />
=======
<script lang="ts" setup>
import SandaiType from "~/types/sandai_type";
import { getIconName, getColor } from "~/utils/sandai_types_util";

const props = defineProps<{
  type: SandaiType;
  visited: number;
}>();

const progressWidth = computed(() => `${props.visited * 30}px`);
</script>

<template>
  <div class="progress-bar-item">
    <div class="icon-container">
      <img :src="`/images/${getIconName(type)}.png`" class="mark-icon" />
>>>>>>> Stashed changes
    </div>
    <div class="mark"></div>
    <div
      class="progress"
<<<<<<< Updated upstream
      :class="color"
      :style="{ width: this.progressWidth }"
=======
      :class="getColor(type)"
      :style="{ width: progressWidth }"
>>>>>>> Stashed changes
    ></div>
  </div>
</template>

<<<<<<< Updated upstream
<script>
export default {
  props: {
    color: { type: String },
    visited: { type: Number },
    type: { type: String },
  },
  computed: {
    progressWidth() {
      return `${this.visited * 30}px`;
    },
  },
};
</script>

=======
>>>>>>> Stashed changes
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
}
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
.progress.yellow {
  background-color: #ff9800;
}
.progress.blue {
  background-color: #03a9f4;
}
.progress.green {
  background-color: #8bc34a;
}
<<<<<<< Updated upstream
</style>
=======
</style>
>>>>>>> Stashed changes
