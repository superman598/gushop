import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Register from "@/views/Register";
import Login from "@/views/Login";
import Search from "@/views/Search";
Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/register",
      component: Register,
      meta: {
        isHidden: true,
      },
    },
    {
      path: "/search/:keyword",
      component: Search,
      name:"search"
    },
    {
      path: "/login",
      component: Login,
      meta: {
        isHidden: true,
      },
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
});
