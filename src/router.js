import Vue from "vue";
import Router from "vue-router";

import Landing from "./views/Landing.vue";
import Donasi from "./views/Donasi.vue";
import Article from "./views/Article.vue";
import Admin from "./views/Admin.vue";

import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/admin",
      name: "admin",
      components: { default: Admin, header: MainNavbar},
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/donasi",
      name: "donasi",
      components: { default: Donasi, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/article/:id",
      name: "article",
      components: { default: Article, header: MainNavbar, footer: MainFooter},
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
