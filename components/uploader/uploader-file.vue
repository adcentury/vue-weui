<template>
<li :class="{'weui_uploader_file': true, 'weui_uploader_status': hasStatus}" :style="{'backgroundImage': 'url(' + imageUrl + ')'}">
  <div class="weui_uploader_status_content">
    <slot name="status"></slot>
  </div>
</li>
</template>

<script>
export default {
  props: {
    /**
     * 预览图的url，将被用于backgroud-image中
     */
    imageUrl: {
      type: String,
      required: true
    },

    /**
     * 是否包含status
     * 若包含，则预览图片上会添加黑色蒙层
     */
    hasStatus: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
