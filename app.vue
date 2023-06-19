<script setup>
import ProgressBar from "./components/ProgressBar.vue";
import ProgressBarItem from "./components/ProgressBarItem.vue";
</script>

<template>
  <div>
    <progress-bar>
      <progress-bar-item
        color="yellow"
        visited="1"
        type="castle"
      ></progress-bar-item>
      <progress-bar-item
        color="green"
        visited="3"
        type="view"
      ></progress-bar-item>
    </progress-bar>
  </div>
</template>
