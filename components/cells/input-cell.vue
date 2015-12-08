<template>
<div class="weui_cell" :class="{'weui_vcode': vcode, 'weui_cell_warn': warn}">
  <cell-header v-if="label">
    <label :for="id" class="weui_label">{{{label}}}</label>
  </cell-header>
  <cell-body>
    <cell-textarea :type="type" :placeholder="placeholder" :id="id" :name="name" :value.sync="value" v-if="type === 'textarea'"></cell-textarea>
    <cell-input :type="type" :placeholder="placeholder" :id="id" :name="name" :value.sync="value" v-else></cell-input>
  </cell-body>
  <cell-footer v-if="vcode || warn">
    <i class="weui_icon_warn" v-if="warn"></i>
    <img :src="vcode" v-if="vcode">
  </cell-footer>
</div>
</template>

<script>
import CellHeader from './cell-header.vue';
import CellBody from './cell-body.vue';
import CellFooter from './cell-footer.vue';
import CellInput from './cell-input.vue';
import CellTextarea from './cell-textarea.vue';

export default {
  props: {
    /**
     * 输入框的类型
     * text: 单行输入框（默认）
     * textarea：文本域
     */
    type: {
      type: String,
      required: false,
      default: 'text'
    },

    /**
     * 输入框的id
     * @type {Object}
     */
    id: {
      type: String,
      required: false
    },

    /**
     * 输入框的name
     */
    name: {
      type: String,
      required: false
    },

    /**
     * 输入框的placeholder
     */
    placeholder: {
      type: String,
      required: false
    },

    /**
     * 输入框的标签，会显示在最前方
     */
    label: {
      type: String,
      required: false
    },

    /**
     * 输入框的数据绑定，会作为input或textarea的v-model
     */
    value: {
      type: String,
      required: true,
      twoWay: true
    },

    /**
     * 验证码的url，若设置则验证码会显示在最后
     * @type {Object}
     */
    vcode: {
      type: String,
      required: false
    },

    /**
     * 是否为表单报错的列表项
     * 若为true则文字会标红，且会显示红色感叹号
     */
    warn: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  components: {
    CellHeader,
    CellBody,
    CellFooter,
    CellInput,
    CellTextarea
  }
}
</script>
