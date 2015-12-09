<template>
<div class="page" transition="app">
  <div class="hd">
    <h1 class="page_title">Vue-WeUI</h1>
    <p class="page_desc">使用Vue封装，为微信Web服务量身设计</p>
  </div>
  <div class="bd">
    <cells type="access" class="global_navs">
      <cell v-for="item in list" :router-link="{path: '/' + item.url}">
        <img slot="header" :src="item.image" class="icon_nav">
        <p slot="body">{{item.text}}</p>
      </cell>
    </cells>
  </div>
</div>
</template>

<script>
import {Cells, Cell} from 'vue-weui';
import icon_nav_button from '../images/icon_nav_button.png';
import icon_nav_cell from '../images/icon_nav_cell.png';
import icon_nav_toast from '../images/icon_nav_toast.png';
import icon_nav_dialog from '../images/icon_nav_dialog.png';
import icon_nav_msg from '../images/icon_nav_msg.png';
import icon_nav_article from '../images/icon_nav_article.png';
import icon_nav_actionSheet from '../images/icon_nav_actionSheet.png';
import icon_nav_icons from '../images/icon_nav_icons.png';

export default {
  data() {
    return {
      list: [{
        text: 'Button',
        url: 'button',
        image: icon_nav_button
      }, {
        text: 'Cell',
        url: 'cell',
        image: icon_nav_cell
      }, {
        text: 'Toast',
        url: 'toast',
        image: icon_nav_toast
      }, {
        text: 'Dialog',
        url: 'dialog',
        image: icon_nav_dialog
      }, {
        text: 'Progress',
        url: 'progress',
        image: icon_nav_button
      }, {
        text: 'Msg Page',
        url: 'message',
        image: icon_nav_msg
      }, {
        text: 'Article Page',
        url: 'article',
        image: icon_nav_article
      }, {
        text: 'ActionSheet',
        url: 'actionsheet',
        image: icon_nav_actionSheet
      }, {
        text: 'Icons',
        url: 'icons',
        image: icon_nav_icons
      }]
    };
  },

  components: {
    Cells,
    Cell
  }
}
</script>
