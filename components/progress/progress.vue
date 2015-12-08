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
    /**
     * 进度，最小为0，最大为100
     */
    progress: {
      type: Number,
      required: true,
      validator(value) {
        return value >= 0 && value <= 100;
      },
      default: 0
    },

    /**
     * 是否包含取消按钮，若有，则点击时会出发weui-progress-cancel事件
     */
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
