<template>
<textarea class="weui_textarea" v-model="value"></textarea>
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
