import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path:'/hello',
    name:'Helo',
    component: () => import('../views/Hello.vue'),
  }
];

const router = new VueRouter({
  routes
});

export default router;
