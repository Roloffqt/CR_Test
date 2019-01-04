import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "/",
      components: {
        jumbo: () => import("./views/Home.vue")
      }
    },
    {
      path: "/Modtager",
      name: "Modtager",
      components: {
        jumbo: () => import("./views/Shipping.vue")
      }
    },
    {
      path: "/menu",
      name: "menu",
      components: {
        menu: () => import("./views/Menu.vue")
      }
    }
  ]
});
