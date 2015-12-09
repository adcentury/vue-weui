<template>
<div class="page dialog">
  <div class="hd">
    <div class="page_title">Dialog</div>
  </div>
  <div class="bd spacing">
    <weui-button type="primary" @click="showDialog(1)">点击弹出Dialog样式一</weui-button>
    <weui-button type="primary" @click="showDialog(2)">点击弹出Dialog样式二</weui-button>
  </div>
  <dialog v-show="dialog1Show" type="confirm" title="弹窗标题"
    confirm-button="确认关闭" cancel-button="不关闭"
    @weui-dialog-confirm="handleDialogAction('确定', 1)"
    @weui-dialog-cancel="handleDialogAction('取消', 1)">
    自定义弹窗内容
    <br>
    ...
  </dialog>
  <dialog v-show="dialog2Show" type="alert" title="弹窗标题"
    @weui-dialog-confirm="handleDialogAction('确定', 2)">
    弹窗内容，告知当前页面信息等
  </dialog>
</div>
</template>

<script>
import {Button, Dialog} from 'vue-weui';

export default {
  data() {
    return {
      dialog1Show: false,
      dialog2Show: false
    }
  },

  methods: {
    showDialog(id) {
      this[`dialog${id}Show`] = true;
    },

    handleDialogAction(action, id) {
      if (action === '确定') {
        this[`dialog${id}Show`] = false;
      } else {
        alert('你点击了“不关闭”，所以对话框不会消失^^');
      }
    }
  },

  components: {
    'weui-button': Button,
    Dialog
  }
}
</script>
