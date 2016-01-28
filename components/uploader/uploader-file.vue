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
    imageUrl: {
      type: String,
      required: true
    },

    hasStatus: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
