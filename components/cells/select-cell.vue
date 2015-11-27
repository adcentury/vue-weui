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
    selected: {
      type: null,
      required: true,
      twoWay: true
    },
    options: {
      type: Array,
      required: true
    },
    before: {
      type: Boolean,
      required: false,
      default: false
    },
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
