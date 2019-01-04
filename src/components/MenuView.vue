<template>
  <div class="overlay">
    <div class="container">
      <NavPanel/>
    </div>
  </div>
</template>
<script>
import NavPanel from "@/components/NavPanel.vue";
export default {
  components: {
    NavPanel
  }
};
</script>
<style scoped>
.container {
  max-width: 960px !important;
}
.overlay {
  position: absolute;
  width: 100%;
  height: 105vh;
  background-color: #001250;
  margin-top: -75px;
}
</style>