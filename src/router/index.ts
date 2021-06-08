import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Menu from '../views/Menu.vue'
import List from '../components/List.vue'
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path:'',
    component:Menu,
    children:[
      {
        path:'',
        component:List
      }
    ]

  },

];

const router = new VueRouter({
  routes,
});

export default router;
