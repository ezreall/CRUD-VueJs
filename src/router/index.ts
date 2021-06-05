import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Menu from '../views/Menu.vue'
import List from '../components/List.vue'
import Create from '../components/Create.vue'
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path:'/',
    component:List,

  },{
    path:'/create',
    component:Create
  }

];

const router = new VueRouter({
  routes,
});

export default router;
