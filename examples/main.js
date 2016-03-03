import Vue from 'vue';
import VueRouter from 'vue-router';
import fastclick from 'fastclick';
import 'weui/dist/style/weui.css';
import './example.less';
import {App,
  Button, Cell, Toast,
  Dialog, Progress, Message,
  Article, Actionsheet, Icons,
  Tab, Navbar} from './containers';


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
  },
  '/message': {
    component: Message
  },
  '/article': {
    component: Article
  },
  '/actionsheet': {
    component: Actionsheet
  },
  '/icons': {
    component: Icons
  },
  '/tab': {
    component: Tab
  },
  '/navbar': {
    component: Navbar
  }
});

router.start(Vue.extend({}), '#container');

fastclick.attach(document.body);
