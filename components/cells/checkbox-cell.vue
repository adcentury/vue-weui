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
    id: {
      type: String,
      required: false
    },
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
