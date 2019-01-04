<template>
  <div class="bg-img">
    <div id="app">
      <Navbar/>
      <!-- Menu view router -->
      <router-view name="menu"></router-view>
      <div class="container">
        <!-- Jummbo View router -->
        <transition name="slide-fade">
          <router-view name="jumbo"/>
        </transition>
      </div>
    </div>
  </div>
</template>


<script>
import CR_Logo_White from "./assets/CR_Logo_White.png";
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
  data: function() {
    return {
      CR_Logo_White: CR_Logo_White
    };
  }
};
</script>

<style scoped>
.bg-img {
  background-image: url(https://stockphoto.com/samples/NjkxMjgxNTExMDAxMWY1YmNmYjBlZA==/MjIxMWY1YmNmYjBlZA==/swimmer-on-starting-block.jpg&size=1024);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100vh;
  width: 100%;
}

.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
  opacity: 0;
  visibility: hidden;
  height: 0;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: rgb(24, 106, 205, 0.7);
  height: 100vh;
  font-family: "Raleway", sans-serif;
}
@media (min-width: 768px) {
  .container {
    max-width: 960px !important;
  }
}
</style>
