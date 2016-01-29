<template>
<div class="weui_uploader">
  <cell class="weui_uploader_hd">
    <span slot="body"><slot name="title"></slot></span>
    <span slot="footer" v-if="count >= 0 && maxlength > 0">{{count}}/{{maxlength}}</span>
  </cell>
  <div class="weui_uploader_bd">
    <slot name="uploader-files"></slot>
    <div class="weui_uploader_input_wrp" v-if="hasInput">
      <input type="file" class="weui_uploader_input" accept="image/jpg,image/jpeg,image/png,image/gif" multiple @change="dispatchChange">
    </div>
  </div>
</div>
</template>

<script>
import Cell from '../cells/cell.vue';

export default {
  props: {
    /**
     * 已上传文件数量
     * 注意，Uploader并不会对真实文件数量进行控制，count仅用于显示
     */
    count: {
      type: Number,
      required: false,
      validator: function(value) {
        return value >= 0;
      }
    },

    /**
     * 显示的最大可上传数量
     * 注意，Uploader并不会对真实文件数量进行控制，maxlength仅用于显示
     */
    maxlength: {
      type: Number,
      required: false,
      validator: function(value) {
        return value > 0;
      }
    },

    /**
     * 是否包含input元素
     */
    hasInput: {
      type: Boolean,
      required: false,
      default: true
    }
  },

  methods: {
    dispatchChange(event) {
      this.$dispatch('weui-input-change', event);
    }
  },

  components: {
    Cell
  }
}
</script>
