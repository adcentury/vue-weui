<template>
<label :for="id" class="weui_cell weui_check_label">
  <cell-header>
    <input type="checkbox" :name="name" class="weui_check" :id="id" :value="value" v-model="checked">
    <span class="weui_icon_checked"></span>
  </cell-header>
  <cell-body>{{{label}}}</cell-body>
</label>
</template>

<script>
import CellHeader from './cell-header.vue';
import CellBody from './cell-body.vue';

export default {
  props: {
    /**
     * checkbox input的id
     */
    id: {
      type: String,
      required: false
    },

    /**
     * checkbox input的name
     */
    name: {
      type: String,
      required: false
    },

    /**
     * checkbox input的value
     */
    value: {
      type: String,
      required: false
    },

    /**
     * 显示的文本内容
     */
    label: {
      type: String,
      required: true
    },

    /**
     * 选中项的数据绑定，用于checkbox input的v-model
     */
    checked: {
      type: null,
      required: true,
      twoWay: true
    }
  },

  components: {
    CellHeader,
    CellBody
  }
}
</script>
