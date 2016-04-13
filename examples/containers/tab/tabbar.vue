<template>
<div class="page tabbar">
  <div class="bd" style="height: 100%;">
    <tab>
      <div slot="body"></div>
      <tabbar slot="tabbar">
        <tabbar-item v-for="bar in bars" :is-on="!!bar.isOn">
          <img slot="icon" :src="bar.icon" alt="">
          <span slot="label">{{bar.label}}</span>
        </tabbar-item>
      </tabbar>
    </tab>
  </div>
</div>
</template>

<script>
import {Tab, Tabbar, TabbarItem} from 'vue-weui';

import icon_nav_button from '../../images/icon_nav_button.png';
import icon_nav_msg from '../../images/icon_nav_msg.png';
import icon_nav_article from '../../images/icon_nav_article.png';
import icon_nav_cell from '../../images/icon_nav_cell.png';

export default {
  data() {
    return {
      bars: [{
        icon: icon_nav_button,
        label: '微信',
        isOn: true
      }, {
        icon: icon_nav_msg,
        label: '通讯录'
      }, {
        icon: icon_nav_article,
        label: '发现'
      }, {
        icon: icon_nav_cell,
        label: '我'
      }]
    }
  },

  components: {
    Tab,
    Tabbar,
    TabbarItem
  }
}
</script>
