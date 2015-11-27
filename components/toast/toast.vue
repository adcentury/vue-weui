<template>
<div :class="{'weui_loading_toast': loading}">
  <div class="weui_mask_transparent"></div>
  <div class="weui_toast">
    <div class="weui_loading" v-if="loading">
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
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
