<template>
<div class="weui_toptips weui_warn" :style="{display: 'block'}"><slot></slot></div>
</template>

<script>
export default {
  props: {
    warn: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
