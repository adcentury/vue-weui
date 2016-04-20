<template>
<div class="page search-bar">
  <div class="hd">
    <h1 class="page_title">Search Bar</h1>
  </div>
  <div class="bd">
    <search-bar placeholder="搜索" cancel-text="取消" :value.sync="value"></search-bar>
    <cells type="access" class="search_show" v-show="!!value">
      <link-cell v-for="n in 4">
        <p slot="body">实时搜索文本{{n + 1}}</p>
      </link-cell>
    </cells>
  </div>
</div>
</template>

<script>
import {SearchBar, Cells, LinkCell} from 'vue-weui';

export default {
  data() {
    return {
      value: ''
    };
  },

  components: {
    SearchBar,
    Cells,
    LinkCell
  }
}
</script>
