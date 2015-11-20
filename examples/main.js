import Vue from 'vue';
import VueRouter from 'vue-router';
import {App, Buttons, Cells} from './containers';

Vue.config.debug = true;

Vue.use(VueRouter);

const router = new VueRouter();
router.map({
  '/': {
    component: App
  },
  '/buttons': {
    component: Buttons
  },
  '/cells': {
    component: Cells
  }
});
router.start(Vue.extend({}), '#app');
