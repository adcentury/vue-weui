<template>
<i :class="[nameClass, typeClass]"></i>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },

    type: {
      type: String,
      required: false
    }
  },

  computed: {
    nameClass() {
      return `weui_icon${this.type === 'safe' ? '_safe' : ''}_${this.name}`
    },

    typeClass() {
      switch(this.type) {
        case 'message':
          return 'weui_icon_msg';
        case 'safe':
          return 'weui_icon_safe';
        default:
          return false;
      }
    }
  }
}
</script>
