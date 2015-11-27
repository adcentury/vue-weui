<template>
<div class="page">
  <div class="hd">
    <h1 class="page_title">Vue-WeUI</h1>
    <p class="page_desc">使用Vue封装，为微信Web服务量身设计</p>
  </div>
  <div class="bd">
    <cells type="access" class="global_navs">
      <cell v-for="item in list" :v-link="{path: '/' + item.url}">
        <cell-header></cell-header>
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
        url: 'button'
      }, {
        text: 'Cell',
        url: 'cell'
      }, {
        text: 'Toast',
        url: 'toast'
      }, {
        text: 'Dialog',
        url: 'dialog'
      }, {
        text: 'Progress',
        url: 'progress'
      }, {
        text: 'Msg Page',
        url: 'message'
      }, {
        text: 'Article Page',
        url: 'article'
      }, {
        text: 'ActionSheet',
        url: 'action_sheet'
      }, {
        text: 'Icons',
        url: 'icons'
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
