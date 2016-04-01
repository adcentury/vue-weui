<template>
<div :class="'weui_dialog_' + type">
  <div class="weui_mask"></div>
  <div class="weui_dialog">
    <div class="weui_dialog_hd">
      <div class="weui_dialog_title">{{title}}</div>
    </div>
    <div class="weui_dialog_bd"><slot></slot></div>
    <div class="weui_dialog_ft">
      <a v-if="type === 'confirm'" href="javascript:;" class="weui_btn_dialog default" @click="dispathEventAndClose('weui-dialog-cancel')">{{cancelButton}}</a>
      <a href="javascript:;" class="weui_btn_dialog primary" @click="dispathEventAndClose('weui-dialog-confirm')">{{confirmButton}}</a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    /**
     * 对话框类型
     * alert: 提示框，只包含确定按钮（默认）
     * confirm: 询问框，包含确定和取消按钮
     */
    type: {
      type: String,
      required: false,
      default: 'alert'
    },

    /**
     * 对话框标题
     */
    title: {
      type: String,
      required: true
    },

    /**
     * 确定按钮名称
     */
    confirmButton: {
      type: String,
      required: false,
      default: '确定'
    },

    /**
     * 取消按钮名称
     */
    cancelButton: {
      type: String,
      required: false,
      default: '取消'
    }

  },

  methods: {
    dispathEventAndClose(event) {
      this.$dispatch(event);
    }
  }
}
</script>
