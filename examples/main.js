import Vue from 'vue';
import VueRouter from 'vue-router';
import {App, Button, Cell, Toast} from './containers';

Vue.config.debug = true;

Vue.use(VueRouter);

const router = new VueRouter();
router.map({
  '/': {
    component: App
  },
  '/button': {
    component: Button
  },
  '/cell': {
    component: Cell
  },
  '/toast': {
    component: Toast
  }
});
router.start(Vue.extend({}), '#container');
