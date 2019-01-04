<template>
  <div class="jumbotron">
    <div class="container">
      <div class="title_container">
        <h4>Pakkestørrelse</h4>
      </div>
      <div>
        <div id="comp-boxes">
          <ul class="boxes_container">
            <!-- Get onclick to work (make isActive true in DATA) (v-bind:class) -->
            <li class="box" v-for="box in boxes">
              <div class="box_img_container">
                <img :src="box.img">
              </div>
              <p>{{box.name}}</p>
              <small>max: {{box.size}}</small>
            </li>
          </ul>
        </div>
        <div class="btn_con">
          <router-link to="/Modtager">
            <button type="button" class="btn btn-primary">Næste</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import A4 from "../assets/Shipping/a4-pakke.png";
import other from "../assets/Shipping/anden.png";
import bubble from "../assets/Shipping/boblekuvert.png";
import bogaeske from "../assets/Shipping/bogaeske.png";
import paproer from "../assets/Shipping/paproer.png";
import skotoejsaeske from "../assets/Shipping/skotoejsaeske.png";

export default {
  name: "LandingView",
  data: function() {
    return {
      boxes: [
        {
          name: "skotøjsæske",
          size: "45x25x20 cm",
          img: skotoejsaeske,
          isActive: false
        },
        {
          name: "Bogæske",
          size: "40x30x5 cm",
          img: bogaeske,
          isActive: false
        },
        {
          name: "A4-Pakke",
          size: "33x23x6 cm",
          img: A4,
          isActive: false
        },
        {
          name: "Boblekuvert",
          size: "33x23x3 cm",
          img: bubble,
          isActive: true
        },
        {
          name: "Paprør",
          size: "60x10 cm",
          img: paproer,
          isActive: false
        },
        {
          name: "Anden",
          size: "Vælg størrelse",
          img: other,
          isActive: false
        }
      ]
    };
  }
};
</script>

<style scoped>
.jumbotron {
  background-color: white !important;
  margin: 10px;
  padding: 20px !important;
}
.btn_con {
  text-align: center;
  width: 100%;
}
.btn {
  font-size: 1.2rem !important;
  font-weight: 500 !important;
  border-radius: 25px !important;
  padding: 8px 18px !important;
  margin: 20px;
}
.title_container {
  text-align: center;
  max-width: 960px;
}
.title_container h4 {
  font-weight: 600;
}
.container {
  padding: 0 !important;
}
.boxes_container {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}
.box_img_container {
  height: 70px;
  margin: 5px 10px;
}
.box {
  height: 150px;
  display: flex;
  flex: 1 0 40%;
  flex-direction: column;
  text-align: center;
  border: 1px solid #ececec;
  margin: 5px;
  border-radius: 8px;
}
.box img {
  width: 70px;
  margin: 10px auto;
}
.box p {
  margin: 0 !important;
  font-weight: 600;
}
.active {
  border: 2px solid rgb(65, 113, 176) !important;
  color: rgb(65, 113, 176) !important;
}
</style>
