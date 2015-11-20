<template>
<div class="container">
  <weui-button type="primary">按钮</weui-button>
  <weui-button type="primary" :disabled="true">按钮</weui-button>
  <weui-button type="warn">确认</weui-button>
  <weui-button type="warn" :disabled="true">确认</weui-button>
  <weui-button type="default">按钮</weui-button>
  <weui-button type="default" :disabled="true">按钮</weui-button>
  <weui-button type="primary" :plain="true">按钮</weui-button>
  <weui-button type="warn" :plain="true">确认</weui-button>
  <weui-button type="default" :plain="true">按钮</weui-button>
  <weui-button type="primary" :mini="true">你好</weui-button>
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
