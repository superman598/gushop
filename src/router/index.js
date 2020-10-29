import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Register from "@/views/Register";
import Login from "@/views/Login";
import Search from "@/views/Search";
import MyOrder from "@/views/MyOrder";
import Pay from "@/views/Pay";
import PaySuccess from "@/views/PaySuccess";
import Trade from "@/views/Trade";
import AddCart from "@/views/AddCart";
import Cart from "@/views/Cart";
import Detail from "@/views/Detail";
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
      name: "search",
    },
    {
      path: "/login",
      component: Login,
      meta: {
        isHidden: true,
      },
    },
    {
      path: "/myOrder",
      component: MyOrder,
    },
    {
      path: "/pay",
      component: Pay,
    },
    {
      path: "/paySuccess",
      component: PaySuccess,
    },
    {
      path: "/trade",
      component: Trade,
    },
    {
      path: "/addCart",
      component: AddCart,
    },
    {
      path: "/cart",
      component: Cart,
    },
    {
      path: "/detail",
      component: Detail,
    },

    {
      path: "/",
      redirect: "/home",
    },
  ],
});
