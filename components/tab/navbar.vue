<template>
<div class="weui_navbar">
  <navbar-item v-for="item in translatedItems" :key="item.key"
  :is-selected="item.key === selected" @weui-item-select="selectItem">
    {{item.text}}
  </navbar-item>
</div>
</template>

<script>
import NavbarItem from './navbar-item.vue';

export default {
  props: {
    /**
     * Navbar的选项数组
     * 支持纯字符串格式和包含key、text字段的对象格式
     * 若为纯字符串，则该项的key为数组下标
     */
    items: {
      type: Array,
      required: true
    },

    /**
     * 选中项的key值
     */
    selected: {
      type: null,
      required: true,
      twoWay: true
    }
  },

  computed: {
    translatedItems() {
      return this.items.map((item, key) => {
        if (typeof item === 'string') {
          return {
            key: key,
            text: item
          };
        } else {
          return item;
        }
      });
    }
  },

  methods: {
    selectItem(key) {
      if (this.selected !== key) {
        this.selected = key;
      }
    }
  },

  components: {
    NavbarItem
  }
}
</script>
