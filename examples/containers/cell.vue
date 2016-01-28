<template>
<div class="page cell">
  <div class="hd">
    <h1 class="page_title">Cell</h1>
  </div>
  <div class="bd">
    <cells-title>带说明的列表项</cells-title>
    <cells>
      <cell>
        <span slot="body">标题文字</span>
        <span slot="footer">说明文字</span>
      </cell>
    </cells>
    <cells-title>带图标、说明的列表项</cells-title>
    <cells type="split">
      <cell>
        <img slot="header" :src="sampleImage" alt="" style="width:20px;margin-right:5px;display:block">
        <span slot="body">标题文字</span>
        <span slot="footer">说明文字</span>
      </cell>
      <cell>
        <img slot="header" :src="sampleImage" alt="" style="width:20px;margin-right:5px;display:block">
        <span slot="body">标题文字</span>
        <span slot="footer">说明文字</span>
      </cell>
    </cells>
    <cells-title>带跳转的列表项</cells-title>
    <cells type="access">
      <link-cell link="javascript:;">
        <span slot="body">cell standard</span>
        <span slot="footer"></span>
      </link-cell>
      <link-cell link="javascript:;">
        <span slot="body">cell standard</span>
        <span slot="footer"></span>
      </link-cell>
    </cells>
    <cells-title>带说明、跳转的列表项</cells-title>
    <cells type="access">
      <link-cell link="javascript:;">
        <span slot="body">cell standard</span>
        <span slot="footer">说明文字</span>
      </link-cell>
      <link-cell link="javascript:;">
        <span slot="body">cell standard</span>
        <span slot="footer">说明文字</span>
      </link-cell>
    </cells>
    <cells-title>带图标、说明、跳转的列表项</cells-title>
    <cells type="access">
      <link-cell link="javascript:;">
        <img slot="header" :src="sampleImage" alt="" style="width:20px;margin-right:5px;display:block">
        <span slot="body">cell standard</span>
        <span slot="footer">说明文字</span>
      </link-cell>
      <link-cell link="javascript:;">
        <img slot="header" :src="sampleImage" alt="" style="width:20px;margin-right:5px;display:block">
        <span slot="body">cell standard</span>
        <span slot="footer">说明文字</span>
      </link-cell>
    </cells>
    <cells-title>单选列表项</cells-title>
    <cells type="radio">
      <radio-cell id="x11" name="radio1" value="One" label="cell standard" :picked.sync="radioPicked">
      </radio-cell>
      <radio-cell id="x12" name="radio1" value="Two" label="cell standard" :picked.sync="radioPicked">
      </radio-cell>
    </cells>
    <cells-title>复选列表项</cells-title>
    <cells type="checkbox">
      <checkbox-cell id="s11" name="checkbox1" value="One" label="standard is dealt for u." :checked.sync="checkboxChecked"></checkbox-cell>
      <checkbox-cell id="s12" name="checkbox1" value="Two" label="standard is dealicient for u." :checked.sync="checkboxChecked"></checkbox-cell>
    </cells>
    <cells-title>开关</cells-title>
    <cells type="form">
      <switch-cell name="switch" label="标题文字" :on.sync="switchOn"></switch-cell>
    </cells>
    <cells-title>表单</cells-title>
    <cells type="form">
      <input-cell type="text" label="qq" placeholder="请输入qq号" :value.sync="qqValue"></input-cell>
      <input-cell type="text" label="验证码" placeholder="请输入验证码" :vcode="vcode" :value.sync="vcodeValue"></input-cell>
      <input-cell type="number" label="银行卡" placeholder="请输入银行卡号" :value.sync="bankCardValue"></input-cell>
      <input-cell type="text" label="验证码" placeholder="请输入验证码" :vcode="vcode" :warn="true" :value.sync="vcodeValue2"></input-cell>
    </cells>
    <cells-tips>底部说明文字底部说明文字</cells-tips>
    <button-area>
      <weui-button type="primary">确定</weui-button>
    </button-area>
    <cells-title>上传</cells-title>
    <cells type="form">
      <cell>
        <uploader slot="body" :count="3" :maxlength="5">
          <span slot="title">图片标题</span>
          <uploader-files slot="uploader-files">
            <uploader-file image-url="http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/"></uploader-file>
            <uploader-file image-url="http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/"></uploader-file>
            <uploader-file image-url="http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/"></uploader-file>
            <uploader-file image-url="http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/" has-status>
              <icon slot="status" name="warn"></icon>
            </uploader-file>
            <uploader-file image-url="http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/" has-status>
              <span slot="status">50%</span>
            </uploader-file>
          </uploader-files>
        </uploader>
      </cell>
    </cells>
    <cells-title>文本域</cells-title>
    <cells type="form">
      <input-cell type="textarea" placeholder="请输入评论" :maxlength="200" :value.sync="commentsValue"></input-cell>
    </cells>
    <toptips v-show="toptipsCount > 0">错误提醒&nbsp;{{toptipsCount}}秒后消失</toptips>
    <cells-title>表单报错</cells-title>
    <cells type="form">
      <input-cell type="number" label="卡号" placeholder="请输入卡号" :value.sync="cardValue" :warn="true"></input-cell>
      <input-cell type="date" label="日期" :value.sync="dateValue"></input-cell>
      <input-cell type="datetime-local" label="时间" :value.sync="datetimeValue"></input-cell>
    </cells>
    <cells-title>选择</cells-title>
    <cells type="split">
      <select-cell :before="true" :options="areaCodeOptions" :selected.sync="areaCodeSelected">
        <cell-input slot="body" type="text" placeholder="请输入号码" :value.sync="phoneValue"></cell-input>
      </select-cell>
    </cells>
    <cells-title>选择</cells-title>
    <cells type="split">
      <select-cell :options="contactTypeOptions" :selected.sync="contactTypeSelected"></select-cell>
      <select-cell :after="true" :options="nationOptions" :selected.sync="nationSelected">
        <span slot="header">国家/地区</span>
      </select-cell>
    </cells>
  </div>
</div>
</template>

<script>
import {ButtonArea, Button,
  CellsTitle, CellsTips,
  Cells, Cell, LinkCell, RadioCell, CheckboxCell, SwitchCell, InputCell, SelectCell,
  CellInput,
  Uploader, UploaderFiles, UploaderFile,
  Toptips,
  Icon} from 'vue-weui';

const sampleImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=';

import vcode from '../vcode.jpg';

export default {
  data() {
    return {
      radioPicked: 'One',
      sampleImage: sampleImage,
      checkboxChecked: ['Two'],
      switchOn: false,
      vcode: vcode,
      qqValue: '',
      vcodeValue: '',
      bankCardValue: '',
      vcodeValue2: '',
      commentsValue: '',
      toptipsCount: 2,
      cardValue: '',
      dateValue: '',
      datetimeValue: '',
      areaCodeOptions: ['+86', '+80', '+84', '+87'],
      areaCodeSelected: '+86',
      phoneValue: '',
      contactTypeOptions: ['微信号', 'QQ号', 'Email'],
      contactTypeSelected: '微信号',
      nationOptions: ['中国', '美国', '英国'],
      nationSelected: '中国'
    }
  },

  components: {
    ButtonArea,
    'weui-button': Button,
    CellsTitle,
    CellsTips,
    Cells,
    Cell,
    LinkCell,
    RadioCell,
    CheckboxCell,
    SwitchCell,
    InputCell,
    SelectCell,
    CellInput,
    Uploader,
    UploaderFiles,
    UploaderFile,
    Toptips,
    Icon
  },

  ready() {
    const handler = setInterval(() => {
      if (this.toptipsCount === 1) {
        clearInterval(handler);
      }
      this.toptipsCount -= 1;
    }, 1000);
  }
}
</script>
