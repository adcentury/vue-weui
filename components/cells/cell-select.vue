<template>
<select class="weui_select" v-model="selected">
  <option v-for="option in options">{{option}}</option>
</select>
</template>

<script>
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
    }
  }
}
</script>
