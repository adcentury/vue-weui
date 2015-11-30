import Vue from 'vue';
import VueRouter from 'vue-router';
import {App, Button, Cell, Toast, Dialog, Progress} from './containers';

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
  },
  '/dialog': {
    component: Dialog
  },
  '/progress': {
    component: Progress
  }
});
router.start(Vue.extend({}), '#container');
