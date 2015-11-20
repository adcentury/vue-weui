<template>
<label :for="id" class="weui_cell weui_check_label">
  <slot></slot>
  <cell-footer>
    <input type="radio" :name="name" class="weui_check" :id="id" :value="value" v-model="picked">
    <span class="weui_icon_checked"></span>
  </cell-footer>
</label>
</template>

<script>
import CellFooter from './cell-footer.vue';
export default {
  props: {
    id: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    picked: {
      type: String,
      required: true,
      twoWay: true
    }
  },

  components: {
    CellFooter
  }
}
</script>
