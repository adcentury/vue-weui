<template>
<div class="page icons">
  <div class="hd">
    <h1 class="page_title">Icons</h1>
  </div>
  <div class="bd spacing">
    <icon name="success" type="message"></icon>
    <icon name="info" type="message"></icon>
    <icon name="warn" type="message"></icon>
    <icon name="waiting" type="message"></icon>
    <icon name="success" type="safe"></icon>
    <icon name="warn" type="safe"></icon>
    <div class="icon_sp_area">
      <icon name="success"></icon>
      <icon name="success_circle"></icon>
      <icon name="success_no_circle"></icon>
      <icon name="info"></icon>
      <icon name="waiting"></icon>
      <icon name="waiting_circle"></icon>
      <icon name="circle"></icon>
      <icon name="warn"></icon>
      <icon name="download"></icon>
      <icon name="info_circle"></icon>
      <icon name="cancel"></icon>
    </div>
  </div>
</div>
</template>

<script>
import {Icon} from 'vue-weui';

export default {
  components: {
    Icon
  }
}
</script>
