<script setup>
import ProgressBar from "./components/ProgressBar.vue";
import FormModal from "./components/FormModal.vue"
import { SpotVisit } from "~/data/spot_visit";
const spotVisits = new SpotVisit();
</script>

<template>
  <div>
    <progress-bar :sandai-visits="spotVisits.sandaiVisits"></progress-bar>
  </div>
  <FormModal v-show="showModal"  @close-modal="showModal = false"/>
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
