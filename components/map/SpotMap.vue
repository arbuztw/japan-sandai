<script lang="ts" setup>
import { SpotMapData } from "~/data/map_data";
import Spot from "~/types/spot";
import { SPOTS_SANDAI_TYPE } from "~/data/sandai_type_spots";

const props = defineProps<{
  spot: Spot;
}>();
const spotAttr = SpotMapData[props.spot];
</script>
<template>
  <ellipse
    stroke="#A37774"
    stroke-opacity="1"
    ry="1.5"
    rx="1.5"
    :cy="spotAttr.cy"
    :cx="spotAttr.cx"
    :id="spot"
    stroke-linecap="null"
    stroke-linejoin="null"
    stroke-dasharray="null"
    stroke-width="null"
    :fill="getColor(SPOTS_SANDAI_TYPE[spot])"
  />
</template>
