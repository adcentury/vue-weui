<template>
<a :href="link" class="weui_cell" v-if="link"><slot></slot></a>
<div class="weui_cell" v-else><slot></slot></div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '',
      required: false
    }
  }
};
</script>
