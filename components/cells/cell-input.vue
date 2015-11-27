<template>
<input class="weui_input" v-model="value">
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
      twoWay: true
    }
  }
}
</script>
