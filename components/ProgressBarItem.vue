<template>
  <div class="progress-bar-item" v-if="visited > 0">
    <div class="icon-container">
      <img :src="imageUrl" alt="" class="mark-icon" />
    </div>
    <div class="mark"></div>
    <div
      class="progress"
      :class="color"
      :style="{ width: this.progressWidth }"
    ></div>
  </div>
</template>

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
    imageUrl() {
      return new URL(`/assets/images/${this.type}.png`, import.meta.url).href;
    },
  },
};
</script>

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

.progress.yellow {
  background-color: #ff9800;
}
.progress.blue {
  background-color: #03a9f4;
}
.progress.green {
  background-color: #8bc34a;
}
</style>