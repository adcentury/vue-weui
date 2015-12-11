<template>
<div :class="{'weui_loading_toast': type === 'loading'}">
  <div class="weui_mask_transparent"></div>
  <div class="weui_toast">
    <div class="weui_loading" v-if="type === 'loading'">
      <div v-for="n in 12" class="weui_loading_leaf" :class="'weui_loading_leaf_' + n"></div>
    </div>
    <i class="weui_icon_toast" v-else></i>
    <div class="weui_toast_content"><slot></slot></div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    /**
     * toast类型
     * icon: 包含图标的提示框（默认）
     * loading: 包含loading动画的提示框
     */
    type: {
      type: String,
      required: false,
      default: 'icon'
    }
  }
}
</script>
