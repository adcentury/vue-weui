<template>
<div class="page tab">
  <div class="bd">
    <cells-title>Tab</cells-title>
    <cells type="access">
      <link-cell router-link="/navbar">
        <span slot="body">navbar</span>
      </link-cell>
    </cells>
  </div>
</div>
</template>

<script>
import {CellsTitle, Cells, LinkCell} from 'vue-weui';

export default {
  components: {
    CellsTitle,
    Cells,
    LinkCell
  }
}
</script>
