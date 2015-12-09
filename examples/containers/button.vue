<template>
<div class="page button">
  <div class="hd">
    <h1 class="page_title">Button</h1>
  </div>
  <div class="bd spacing">
    <weui-button type="primary">按钮</weui-button>
    <weui-button type="primary" :disabled="true">按钮</weui-button>
    <weui-button type="warn">确认</weui-button>
    <weui-button type="warn" :disabled="true">确认</weui-button>
    <weui-button type="default">按钮</weui-button>
    <weui-button type="default" :disabled="true">按钮</weui-button>
    <div class="button_sp_area">
      <weui-button type="default" :plain="true">按钮</weui-button>
      <weui-button type="primary" :plain="true">按钮</weui-button>
      <weui-button type="primary" :mini="true">按钮</weui-button>
      <weui-button type="default" :mini="true">按钮</weui-button>
    </div>
  </div>
</div>
</template>

<script>
import {Button} from 'vue-weui';

export default {
  components: {
    'weui-button': Button
  }
};
</script>
