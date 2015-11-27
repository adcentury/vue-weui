<template>
<textarea class="weui_input" v-model="value"></textarea>
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
