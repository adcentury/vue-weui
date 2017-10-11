# (Deprecated) vue-weui

感谢对vue-weui的支持，由于在vue-weui最后提交之后，vue和weui都进行了较大幅度的更新，且我没有更多的时间和精力来跟进，所以此项目今后将不再维护，如果有需要可以使用其他相关库，再次感谢。

---

[![npm package][npm-badge]][npm] [![dependencies status][dependencies-badge]][dependencies] [![npm downloads][downloads-badge]][npm]

> 使用Vue封装，为微信Web服务量身设计（Work with WeUI 0.4.0+）

## 特点

* 使用Vue封装了WeUI的所有组件
* 通过npm安装，可以一次引入所有组件，也可选择只引入需要的组件
* 不带一行css，与WeUI样式完全解绑，可以方便地进行自定义

## 预览

![qr-of-examples](./docs/images/qr-of-examples.png)

扫描二维码在手机查看

或直接访问 [http://adcentury.github.io/vue-weui](http://adcentury.github.io/vue-weui)

## 安装

### 安装weui

vue-weui中组件与css完全解绑，既给予了开发者自主性和灵活性，也能最大限度减少文件大小。安装css方法如下：

```
npm install --save weui
```

之后，只需在页面中引入`dist/style/weui.css`或者`dist/style/weui.min.css`其中之一即可. 例如:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
  <title>Vue WeUI</title>
  <link rel="stylesheet" href="path/to/weui/dist/style/weui.min.css"/>
</head>
```

### 安装vue-weui

```
npm install vue-weui --save
```

## 使用

### 引用

#### ES6

```javascript
// 引用所有组件
import VueWeui from 'vue-weui';

export default {
  components: VueWeui
};

// 引用部分组件
import {Dialog} from 'vue-weui';
// 或
// 只引用需要的文件，减少文件大小
import Dialog from 'vue-weui/components/dialog/dialog.vue';

export default {
  components: {
    Dialog
  }
};

```

#### CommonJS

```javascript
var Dialog = require('vue-weui').Dialog;
// 或
var Dialog = require('vue-weui/components/dialog/dialog.vue');

new Vue({
  components: {
    'dialog': Dialog
  }
});
```

### 组件列表和使用说明

[点击查看组件列表](./docs/components.md)

## 查看示例

```
git clone https://github.com/adcentury/vue-weui
cd vue-weui && npm install
npm start

open http://localhost:8080 in browser
```

## 变更日志

[点击查看变更日志](./docs/CHANGELOG.md)

## 反馈

有任何意见和建议请提交issue或PR，谢谢。

[npm-badge]: https://img.shields.io/npm/v/vue-weui.svg?style=flat-square
[npm]: https://www.npmjs.com/package/vue-weui

[dependencies-badge]: https://david-dm.org/adcentury/vue-weui.svg
[dependencies]: https://david-dm.org/adcentury/vue-weui

[downloads-badge]: https://img.shields.io/npm/dm/vue-weui.svg?style=flat-square
