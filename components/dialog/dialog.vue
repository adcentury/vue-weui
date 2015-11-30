<template>
<div :class="'weui_dialog_' + type" v-show="show">
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
    type: {
      type: String,
      required: true,
      default: 'alert'
    },

    title: {
      type: String,
      required: true
    },

    show: {
      type: Boolean,
      required: true,
      default: true
    },

    cancelButton: {
      type: String,
      required: false,
      default: '取消'
    },

    confirmButton: {
      type: String,
      required: false,
      default: '确定'
    }
  },

  methods: {
    dispathEventAndClose(event) {
      this.$dispatch(event);
      this.show = false;
    }
  }
}
</script>
