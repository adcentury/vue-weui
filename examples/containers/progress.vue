<template>
<div class="page progress">
  <div class="hd">
    <div class="page_title">Progress</div>
  </div>
  <div class="bd spacing">
    <progress :progress="0"></progress>
    <br>
    <progress :progress="50"></progress>
    <br>
    <progress :progress="80"></progress>
  </div>
</div>
</template>

<script>
import {Progress} from 'vue-weui';

export default {
  components: {
    Progress
  }
}
</script>
