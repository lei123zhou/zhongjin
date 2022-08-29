import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originPush.call(this, location).catch((err) => err);
};
const routes = [
  { path: "/", redirect: "/login" },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/login/LoginPage.vue"),
  },
  {
    path: "/main",
    name: "main",
    component: () => import("../pages/main/MainPage.vue"),
    children: [
      { path: "", redirect: "/main/home" },
      {
        path: "home",
        name: "home",
        component: () => import("../pages/home/HomePage.vue"),
      },
      {
        path: "management",
        name: "management",
        component: () => import("../pages/management/ManagementPage.vue"),
        children:[  { path: "", redirect: "/main/management/user" },
        {
          path: "user",
          name: "user",
          component: () => import("../pages/home/),
        },]
      },
    ],
  },
];
const router = new VueRouter({
  routes,
  mode: "history",
});
export default router;
