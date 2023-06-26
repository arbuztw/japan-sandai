<script lang="ts" setup>
import SandaiType from "~/types/sandai_type";
import { SpotVisit } from "~/data/spot_visit";
import { getChineseName } from "~/utils/sandai_types_util";
import { getSpotChineseName } from "~/utils/spot_util";
import { SandaiVisit } from "~/data/sandai_visit";
const props = defineProps<{
  sandaiVisits: SandaiVisit[];
}>();
</script>

<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop style="overflow-y: scroll">
      <img class="check" src="images/wand.png" alt="123" />
      <h6>選擇拜訪過的日本三大！</h6>
      <div id="flex-container">
      <div class= "sandai-box" v-for="sandaiVisit in sandaiVisits">
        <h3>{{ getChineseName(sandaiVisit.sandaiType) }}</h3>
        <div v-for="spotAttr in sandaiVisit.required_spots">
          <input type="checkbox" v-model="spotAttr.visited.value" />
          {{ getSpotChineseName(spotAttr.spot) }}
        </div>
        <div v-for="spotAttr in sandaiVisit.optional_spots">
          <input type="checkbox" v-model="spotAttr.visited.value" />
          {{  getSpotChineseName(spotAttr.spot) }}
        </div>
      </div>
      </div>
      <div class="close" @click="$emit('close-modal')">
        <img class="close-img" src="images/night.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  overflow-y: scroll !important;
  background-color: white;
  height: 80%;
  width: 80%;
  margin-top: 2%;
  margin-bottom: 2%;
  padding: 60px 0px;
  border-radius: 20px;
}

.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

#flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#flex-container > .sandai-box {
  flex: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
</style>
