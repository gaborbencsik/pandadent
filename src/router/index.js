import Vue from 'vue';
import VueRouter from 'vue-router';
import Treatment from '@/components/Treatment';
import Main from '@/components/Main';
// import HelloWorld from '@/components/HelloWorld';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/kezeles/:treatment',
      name: 'Treatment',
      component: Treatment,
    },
    // {
    //   path: '/galeria',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    // },
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
  ],
});

export default router;
