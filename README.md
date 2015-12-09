# vue-weui 

> 使用Vue封装，为微信Web服务量身设计

## 特点

* 使用Vue封装了WeUI的所有组件
* 通过npm安装，可以一次引入所有组件，也可选择只引入需要的组件
* 不带一行css，与WeUI样式完全解绑，可以方便地自定义和使用微信内置文件

## 预览

![qr-of-examples](./docs/images/qr-of-examples.png)

扫描二维码在手机查看

或直接访问 [http://adcentury.github.io/vue-weui](http://adcentury.github.io/vue-weui)

## 安装

### 安装WeUI

vue-weui中组件与css完全解绑，既给予了开发者极大地自主性和灵活性，也能最大限度减少文件大小。

推荐使用微信CDN（微信浏览器内置）

```html
<link rel="stylesheet" href="https://res.wx.qq.com/open/libs/weui/0.2.2/weui.css"/>
```

也可使用[其他方案](https://github.com/weui/weui#方法一)

### 安装vue-weui

```
npm install vue-weui --save
```

## 使用

### 引用

一共有三种引用vue-weui的方案：

```javascript
// 引用所有组件
import * as VueWeui from 'vue-weui';

export default {
  components: VueWeui
};

// 引用部分组件
import {Cells, Cell, CellHeader, CellBody, CellFoot, Button} from 'vue-weui';

export default {
  components: {
    Cells,
    Cell,
    ...
    'weui-button': Button
  }
};

// 只引用需要的文件，减少文件大小
import Dialog from 'vue-weui/components/dialog/dialog.vue';

export default {
  components: {
    Dialog
  }
};

```

### 组件列表和使用说明

[点击查看](./docs/components.md)

## 查看示例

```
git clone https://github.com/adcentury/vue-weui
cd vue-weui && npm install
npm start

open http://localhost:8080 in browser
```

## 反馈

有任何意见和建议请提交issue或PR，谢谢。
