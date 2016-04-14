<template>
<select class="weui_select" v-model="selected">
  <option v-for="option in translatedOptions" :value="option.value">{{option.text}}</option>
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
  },

  computed: {
    translatedOptions() {
      return this.options.map(option => {
        if (typeof option === 'string') {
          return {
            value: option,
            text: option
          };
        } else {
          return option
        }
      });
    }
  }
}
</script>
