<template>
  <div id="nav" class="container navbar navbar-expand-lg navbar-light transparent">
    <router-link class="header_space header-container" to="/">
      <img :src="CR_Logo_White">
      <h4>
        <span class="text-uppercase">C</span>ool
        <span class="text-uppercase">R</span>unner
      </h4>
    </router-link>
    <!-- Find a way to change SVG color to white (bootstrap 4) -->
    <router-link to="/menu">
      <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
    </router-link>
  </div>
</template>

<script>
import CR_Logo_White from "../assets/CR_Logo_White.png";

export default {
  data: function() {
    return {
      CR_Logo_White: CR_Logo_White
    };
  }
};
</script>


<style>
.navbar-light .navbar-toggler {
  z-index: +999;
  color: #fff !important;
  border-radius: 8px !important;
  border-color: transparent !important;
}
.header-container {
  z-index: +999;
  display: flex !important;
  height: 60px;
  align-content: center;
  padding: 10px 10px !important;
}
.header-container img {
  height: 45px;
}
.header-container h4 {
  display: flex;
  z-index: +999;
  color: #fff;
  line-height: 2.5;
  font-size: 1.2rem;
  font-style: italic;
}
.header_space {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -ms-flex-preferred-size: 60%;
  flex-basis: 60%;
}
a {
  z-index: +999;
}
@media (min-width: 992px) {
  .navbar-expand-lg .navbar-toggler {
    display: flex !important;
  }
  .header_space {
    flex-basis: 90% !important;
  }
}
</style>