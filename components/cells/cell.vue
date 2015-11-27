<template>
<a :href="link" v-link="vLink" class="weui_cell" v-if="link || vLink"><slot></slot></a>
<div class="weui_cell" v-else><slot></slot></div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: false
    },
    vLink: {
      type: null,
      required: false
    }
  }
};
</script>
