<template>
  <div class="home">
    <LandingView/>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingView from "@/components/LandingView.vue";

export default {
  name: "/",
  components: {
    LandingView
  }
};
</script>
