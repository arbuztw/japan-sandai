<script lang="ts" setup>
import { SandaiVisit } from "~/data/sandai_visit";
import SandaiType from "~/types/sandai_type";
import { getIconName, getColor } from "~/utils/sandai_types_util";

const config = useRuntimeConfig();
const props = defineProps<{
  sandaiVisit: SandaiVisit;
}>();

const progressWidth = computed(() => {
  const totalWidth = document.getElementById("progress-bar")!.offsetWidth;
  return `${
    ((totalWidth - 30) / Object.values(SandaiType).length / 3) *
    props.sandaiVisit.numVisit.value
  }px`;
});
</script>

<template>
  <div class="progress-bar-item" v-if="sandaiVisit.numVisit.value > 0">
    <div class="icon-container">
      <img
        :src="`${config.app.baseURL}images/${getIconName(
          sandaiVisit.sandaiType
        )}.png`"
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

@media (max-aspect-ratio: 1/1) {
  .mark-icon {
    display: none;
  }
  .mark {
    display: none;
  }
}
</style>
