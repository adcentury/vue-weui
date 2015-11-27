<template>
<div class="weui_cells" :class="typeClass"><slot></div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
      require: false
    }
  },
  
  computed: {
    typeClass() {
      return this.type ? `weui_cells_${this.type}` : '';
    }
  }
};
</script>

<style lang="less">
// @import 'weui_cell_global';
// @import 'weui_access';
// @import 'weui_check';
// @import 'weui_form';
// @import 'weui_switch';
</style>
