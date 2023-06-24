<script setup>
import ProgressBar from "./components/ProgressBar.vue";
import FormModal from "./components/FormModal.vue"
</script>

<template>
  <div>
    <progress-bar></progress-bar>
  </div>
  <FormModal v-show="showModal" />
  <div class="save-btn">
    <button @click="showModal = true">Save</button>
  </div>
</template>
<script>
export default {
  components: { FormModal },
  data() {
    return {
      showModal: false,
    }
  },
}
</script>