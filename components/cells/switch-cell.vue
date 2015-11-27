<template>
<div class="weui_cell weui_cell_switch">
  <cell-body>{{{label}}}</cell-body>
  <cell-footer>
    <input type="checkbox" :name="name" class="weui_switch" v-model="on">
  </cell-footer>
</div>
</template>

<script>
import CellBody from './cell-body.vue';
import CellFooter from './cell-footer.vue';

export default {
  props: {
    name: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: true
    },
    on: {
      type: null,
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
