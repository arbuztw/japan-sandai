<template>
  <div class="progress-bar">
    <div class="progress-start"></div>
    <slot></slot>
    <div class="progress-placeholder"></div>
    <div class="progress-end"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.progress-bar {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}
.progress-start {
    display: inline-block;
    height: 30px;
    width: 15px;
    border-radius: 15px 0 0 15px;
    background-color: #333;
}
.progress-placeholder {
    display: inline-block;
    height: 26px;
    width: 20%;
    border-top: 2px solid #333;
    border-bottom: 2px solid #333;
    background-color: #ccc;
}
.progress-end {
    display: inline-block;
    height: 30px;
    width: 15px;
    border-radius: 0 15px 15px 0;
    background-color: #333;
}
</style>