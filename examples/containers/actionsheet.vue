<template>
<div class="page actionSheet">
  <div class="hd">
    <div class="page_title">ActionSheet</div>
  </div>
  <div class="bd spacing">
    <weui-button type="primary" @click="showActionsheet">点击上拉ActionSheet</weui-button>
  </div>
  <actionsheet :show.sync="actionsheetShow" :menus="actionSheetMenus" :actions="actionSheetActions"
    @weui-menu-click="handleMenuClick" @weui-action-click="handleActionClick"></actionsheet>
</div>
</template>

<script>
import {Actionsheet, Button} from 'vue-weui';

export default {
  data() {
    return {
      actionsheetShow: false,
      actionSheetMenus: {
        menu1: '示例菜单',
        menu2: '示例菜单',
        menu3: '示例菜单',
        menu4: '示例菜单'
      },
      actionSheetActions: {
        action1: '取消'
      }
    }
  },

  methods: {
    showActionsheet() {
      this.actionsheetShow = true;
    },

    handleMenuClick(key) {
      alert(`你点击了菜单【${key}】`);
    },

    handleActionClick(key) {
      alert('你点击了操作项，Actionsheet要关闭了');
    }
  },

  components: {
    Actionsheet,
    'weui-button': Button
  }
}
</script>
