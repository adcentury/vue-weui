<template>
<label :for="id" class="weui_cell weui_check_label">
  <cell-body>{{{label}}}</cell-body>
  <cell-footer>
    <input type="radio" :name="name" class="weui_check" :id="id" :value="value" v-model="picked">
    <span class="weui_icon_checked"></span>
  </cell-footer>
</label>
</template>

<script>
import CellBody from './cell-body.vue';
import CellFooter from './cell-footer.vue';
export default {
  props: {
    /**
     * radio input的id
     */
    id: {
      type: String,
      required: false
    },

    /**
     * radio input的name
     */
    name: {
      type: String,
      required: false
    },

    /**
     * radio input的value
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
     * 选中项的数据绑定，用于radio input的v-model
     */
    picked: {
      type: String,
      required: true,
      twoWay: true
    }
  },

  components: {
    CellBody,
    CellFooter
  }
}
</script>
