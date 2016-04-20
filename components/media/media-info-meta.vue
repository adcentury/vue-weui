<template>
<li class="weui_media_info_meta" :class="{'weui_media_info_meta_extra': extra}"><slot></slot></li>
</template>

<script>
export default {
  props: {
    /**
     * 是否为extra的标识，若是，则文字左方会有竖线隔离符
     */
    extra: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
