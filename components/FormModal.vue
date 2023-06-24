<script lang="ts" setup>
import SandaiType from "~/types/sandai_type";
import { SpotVisit } from "~/data/spot_visit";
import { getChineseName } from "~/utils/sandai_types_util";
const spotVisits = new SpotVisit();
</script>

<template>
    <div class="modal-overlay"  @click="$emit('close-modal')">
      <div class="modal" @click.stop style="overflow-y: scroll;">
        <img class="check" src="images/castle.png" alt="123" />
        <h6>Saved!</h6>
        <p>Your Details have been saved Successfully</p>
        <div v-for="sandaiVisit in spotVisits.sandaiVisits">
            <h3>{{ getChineseName(sandaiVisit.sandaiType) }}</h3>
            <div v-for="spotAttr in sandaiVisit.required_spots">
            <input type="checkbox" v-model="spotAttr.visited.value" />
            {{ spotAttr.spot }}
            </div>
            <div v-for="spotAttr in sandaiVisit.optional_spots">
                <input type="checkbox" v-model="spotAttr.visited.value" />
                {{ spotAttr.spot }}
            </div>
        </div>    
        <button>Go Home</button>
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