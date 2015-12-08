<template>
<div class="page">
  <div class="hd">
    <h1 class="page_title">Vue-WeUI</h1>
    <p class="page_desc">使用Vue封装，为微信Web服务量身设计</p>
  </div>
  <div class="bd">
    <cells type="access" class="global_navs">
      <cell v-for="item in list" :v-link="{path: '/' + item.url}">
        <cell-header>
          <img :src="'./images/' + item.image + '.png'" class="icon_nav">
        </cell-header>
        <cell-body>
          <p>{{item.text}}</p>
        </cell-body>
        <cell-footer></cell-footer>
      </cell>
    </cells>
  </div>
</div>
</template>

<script>
import {Cells, Cell, CellHeader, CellBody, CellFooter} from 'vue-weui';

export default {
  data() {
    return {
      list: [{
        text: 'Button',
        url: 'button',
        image: 'icon_nav_button'
      }, {
        text: 'Cell',
        url: 'cell',
        image: 'icon_nav_cell'
      }, {
        text: 'Toast',
        url: 'toast',
        image: 'icon_nav_toast'
      }, {
        text: 'Dialog',
        url: 'dialog',
        image: 'icon_nav_dialog'
      }, {
        text: 'Progress',
        url: 'progress',
        image: 'icon_nav_button'
      }, {
        text: 'Msg Page',
        url: 'message',
        image: 'icon_nav_msg'
      }, {
        text: 'Article Page',
        url: 'article',
        image: 'icon_nav_article'
      }, {
        text: 'ActionSheet',
        url: 'actionsheet',
        image: 'icon_nav_actionSheet'
      }, {
        text: 'Icons',
        url: 'icons',
        image: 'icon_nav_icons'
      }]
    };
  },

  components: {
    Cells,
    Cell,
    CellHeader,
    CellBody,
    CellFooter
  }
}
</script>
