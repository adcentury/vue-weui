<template>
<div class="page msg">
  <message icon="success" title="操作成功">
    <span slot="content">内容详情，可根据实际需要安排</span>
    <button-area slot="operation">
      <weui-button type="primary">确定</weui-button>
      <weui-button type="default">取消</weui-button>
    </button-area>
    <a href slot="extra">查看详情</a>
  </message>
</div>
</template>

<script>
import {Message, ButtonArea, Button} from 'vue-weui';

export default {
  components: {
    Message,
    ButtonArea,
    'weui-button': Button
  }
}
</script>
