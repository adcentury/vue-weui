<template>
<div class="weui_progress">
  <div class="weui_progress_bar">
    <div class="weui_progress_inner_bar" :style="{width: progress + '%'}"></div>
  </div>
  <a v-if="hasCancelButton" href="javascript:;" class="weui_progress_opr" @click="dispatchEvent('weui-progress-cancel')">
    <i class="weui_icon_cancel"></i>
  </a>
</div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      required: true,
      default: 0
    },

    hasCancelButton: {
      type: Boolean,
      required: false,
      default: true
    }
  },

  methods: {
    dispatchEvent(event) {
      this.$dispatch(event);
    }
  }
}
</script>
