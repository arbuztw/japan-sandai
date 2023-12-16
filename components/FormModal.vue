<script lang="ts" setup>
import SandaiType from "~/types/sandai_type";
import { SpotVisit } from "~/data/spot_visit";
import { getChineseName } from "~/utils/sandai_types_util";
import { getSpotChineseName } from "~/utils/spot_util";
import { SandaiVisit } from "~/data/sandai_visit";
import Spot from "~/types/spot";
const props = defineProps<{
  sandaiVisits: SandaiVisit[];
}>();
const getCheckboxId = (spot: Spot) => `${spot}-checkbox`;
</script>

<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop style="overflow-y: scroll">
      <img class="check" src="/images/wand.png" alt="123" />
      <h6>選擇拜訪過的日本三大！</h6>
      <div id="sandai-box-container">
        <div
          class="sandai-box"
          :style="{ borderColor: getColor(sandaiVisit.sandaiType) }"
          v-for="sandaiVisit in sandaiVisits"
        >
          <img
            :src="`/images/${getIconName(sandaiVisit.sandaiType)}.png`"
            class="sandai-img"
          />
          <div class="sandai-content">
            <h3>
              {{ getChineseName(sandaiVisit.sandaiType) }}
            </h3>
            <div v-for="spotAttr in sandaiVisit.required_spots">
              <input
                type="checkbox"
                v-model="spotAttr.visited.value"
                :id="getCheckboxId(spotAttr.spot)"
              />
              <label :for="getCheckboxId(spotAttr.spot)">{{
                getSpotChineseName(spotAttr.spot)
              }}</label>
            </div>
            <div v-for="spotAttr in sandaiVisit.optional_spots">
              <input
                type="checkbox"
                v-model="spotAttr.visited.value"
                :id="getCheckboxId(spotAttr.spot)"
              />
              <label :for="getCheckboxId(spotAttr.spot)">{{
                getSpotChineseName(spotAttr.spot)
              }}</label>
            </div>
          </div>
        </div>
      </div>
      <div class="close" @click="$emit('close-modal')">
        <img class="close-img" src="/images/work-done.png" alt="" />
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
  padding: 60px 30px;
  border-radius: 20px;
}

.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 40px;
}

.check {
  width: 150px;
}

#sandai-box-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 10px;
}

.sandai-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0.5em 0.5em;
  border-radius: 15px;
  background-color: #eee;
  column-gap: 2em;
  border: 5px solid;
}

.sandai-img {
  object-fit: scale-down;
}

.sandai-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

h3 {
  margin: 0;
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

label {
  padding-left: 0.5em;
  cursor: pointer;
}
</style>
