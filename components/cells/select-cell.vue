<template>
<div class="weui_cell weui_cell_select" :class="{'weui_select_before': before, 'weui_select_after': after}">
  <cell-header v-if="before || after">
    <cell-select :options="options" :selected.sync="selected" v-if="before"></cell-select>
    <slot name="header" v-else></slot>
  </cell-header>
  <cell-body>
    <slot name="body" v-if="before"></slot>
    <cell-select :options="options" :selected.sync="selected" v-else></cell-select>
  </cell-body>
</div>
</template>

<script>
import CellHeader from './cell-header.vue';
import CellBody from './cell-body.vue';
import CellFooter from './cell-footer.vue';
import CellSelect from './cell-select.vue';

export default {
  props: {
    /**
     * 选项数组
     * 支持纯字符串格式和包含value、text字段的对象格式
     * 若为纯字符串，则该项的value和text均为该字符串
     */
    options: {
      type: Array,
      required: true
    },

    /**
     * 选中项数据绑定，会用于select的v-model
     */
    selected: {
      type: null,
      required: true,
      twoWay: true
    },

    /**
     * 是否为前置选择框，具体请参见下方示例
     */
    before: {
      type: Boolean,
      required: false,
      default: false
    },

    /**
     * 是否为后置选择框，具体请参见下方示例
     */
    after: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  components: {
    CellHeader,
    CellBody,
    CellFooter,
    CellSelect
  }
}

</script>
