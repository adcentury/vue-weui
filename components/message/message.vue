<template>
<div class="weui_msg">
  <div class="weui_icon_area" v-if="icon">
    <i :class="['weui_icon_msg', 'weui_icon_' + icon]"></i>
  </div>
  <div class="weui_text_area">
    <h2 class="weui_msg_title" v-if="title">{{title}}</h2>
    <div class="weui_msg_desc"><slot></slot></div>
  </div>
  <div class="weui_opr_area">
    <slot name="operationArea"></slot>
  </div>
  <div class="weui_extra_area">
    <slot name="extraArea"></slot>
  </div>
</div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: false
    },

    title: {
      type: String,
      required: false
    }
  }
}
</script>
