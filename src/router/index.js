import Vue from 'vue';
import VueRouter from 'vue-router';
import Treatment from '@/components/Treatment';
import Main from '@/components/Main';

Vue.use(VueRouter);

const router = new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/kezeles/:treatment',
      name: 'Treatment',
      component: Treatment,
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
  ],
});

export default router;
