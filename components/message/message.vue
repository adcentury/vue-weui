<template>
<div class="weui_msg">
  <div class="weui_icon_area" v-if="icon">
    <i :class="['weui_icon_msg', 'weui_icon_' + icon]"></i>
  </div>
  <div class="weui_text_area">
    <h2 class="weui_msg_title" v-if="title">{{title}}</h2>
    <div class="weui_msg_desc"><slot name="content"></slot></div>
  </div>
  <div class="weui_opr_area">
    <slot name="operation"></slot>
  </div>
  <div class="weui_extra_area">
    <slot name="extra"></slot>
  </div>
</div>
</template>

<script>
export default {
  props: {
    /**
     * 消息图标名称
     * 若设置，则会在最上方显示大图标
     */
    icon: {
      type: String,
      required: false
    },

    /**
     * 消息标题
     */
    title: {
      type: String,
      required: false
    }
  }
}
</script>
