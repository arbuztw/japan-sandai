<script lang="ts" setup>
import { PrefectureMapData } from "~/data/map_data";
import { PrefectureVisit } from "~/data/prefecture_visit";

const props = defineProps<{
  visit: PrefectureVisit;
}>();
const mapAttr = PrefectureMapData[props.visit.prefecture];
const color = computed(() => {
  const total = props.visit.spots.length;
  if (total == 0) {
    return "#ccc";
  }
  const count = props.visit.spots.filter((attr) => attr.visited.value).length;
  return `hsl(31, 100%, ${100 - Math.floor((count / total) * 5) * 4}%)`;
});
</script>

<template>
  <path
    :d="mapAttr.d"
    :title="mapAttr.title"
    :id="visit.prefecture"
    :style="{ fill: color }"
    stroke="#999"
  />
</template>
