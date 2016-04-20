# vue-weui组件列表

## 目录

<!-- toc -->
* [1. 按钮相关](#1-按钮相关)
    * [ButtonArea](#buttonarea)
    * [Button](#button)
* [2. 列表（Cells）相关](#2-列表cells相关)
    * [CellsTitle](#cellstitle)
    * [CellsTips](#cellstips)
    * [Cells](#cells)
    * [Cell](#cell)
    * [LinkCell](#linkcell)
    * [RadioCell](#radiocell)
    * [CheckboxCell](#checkboxcell)
    * [SwitchCell](#switchcell)
    * [InputCell](#inputcell)
    * [SelectCell](#selectcell)
    * [Toptips](#toptips)
* [3. 提示框（Toast）相关](#3-提示框toast相关)
    * [Toast](#toast)
* [4. 对话框相关](#4-对话框相关)
    * [Dialog](#dialog)
* [5. 进度条相关](#5-进度条相关)
    * [Progress](#progress)
* [6. 消息页相关](#6-消息页相关)
    * [Message](#message)
* [7. 文章相关](#7-文章相关)
    * [Article](#article)
* [8. 操作菜单相关](#8-操作菜单相关)
    * [Actionsheet](#actionsheet)
* [9. 图标相关](#9-图标相关)
    * [Icon](#icon)
* [10. 九宫格](#10-九宫格)
    * [Grids](#grids)
    * [Grid](#grid)
* [11. 图片上传](#11-图片上传)
    * [Uploader](#uploader)
    * [UploaderFiles](#uploaderfiles)
    * [UploaderFile](#uploaderfile)
* [12. 导航栏](#12-导航栏)
    * [Tab](#tab)
    * [Navbar](#navbar)
    * [Tabbar](#tabbar)
    * [TabbarItem](#tabbaritem)
* [13. 面板（Panel）相关](#13-面板panel相关)
    * [Panel](#panel)
    * [PanelHeader](#panelheader)
    * [PanelBody](#panelbody)
    * [PanelFooter](#panelfooter)
* [14. 组合列表（Media）相关](#14-组合列表media相关)
    * [MediaBox](#mediabox)
    * [MediaHeader](#mediaheader)
    * [MediaBody](#mediabody)
    * [MediaAppmsgThumb](#MediaAppmsgThumb)
    * [MediaTitle](#mediatitle)
    * [MediaDescription](#mediadescription)
    * [MediaInfo](#mediainfo)
    * [MediaInfoMeta](#mediainfometa)
* [15. 搜索栏](#15-搜索栏)
    * [SearchBar](#searchbar)

<!-- toc stop -->


## 组件列表

### 1. 按钮相关

#### ButtonArea

按钮放置的区域

#### Button

按钮

* props：

```javascript
/**
 * 按钮颜色类型
 * primary: 主色
 * warn：警告色
 * default：默认色（灰色）
 */
type: {
  type: String,
  default: 'primary',
  required: false
},

/**
 * 是否为disabled按钮，若为true则会阻止点击事件
 */
disabled: {
  type: Boolean,
  default: false,
  required: false
},

/**
 * 是否为小按钮
 */
mini: {
  type: Boolean,
  default: false,
  required: false
},

/**
 * 是否为plain按钮，plain按钮无填充色，只有边框
 * 目前只有primary和default类型支持plain按钮
 */
plain: {
  type: Boolean,
  default: false,
  required: false
}
```

### 2. 列表（Cells）相关

列表种类较多，vue-weui做了非常细致的拆分，通过不同组合可以构造丰富的内容。

一些常用结构如下：

```html
<cells-title>标题</cells-title>

<!-- 普通列表项 -->
<cells>
  <cell>
    <span slot="header">列表头</span>
    <span slot="body">主内容区</span>
    <span slot="footer">说明文字</span>
  </cell>
  ...
</cells>

<!-- 其它种类的列表项 -->
<cells type="access">
  <link-cell></link-cell>
</cells>

<cells type="radio">
  <radio-cell></radio-cell>
  ...
</cells>

<cells type="checkbox">
  <checkbox-cell></checkbox-cell>
  ...
</cells>

<cells type="form">
  <switch-cell></switch-cell>
  ...
</cells>

<cells type="form">
  <input-cell></input-cell>
  ...
</cells>

<cells type="split">
  <select-cell></select-cell>
  ...
</cells>

<cells-tips>底部说明</cells-tips>
```

#### CellsTitle

Cells标题

#### CellsTips

Cells底部说明文字

#### Cells

可包含多个Cell的容器，Cell需要包含于其中

* props

```javascript
/**
 * Cells类型
 * access: 带跳转的列表项容器
 * form: 表单容器
 * radio: 单选列表项容器
 * checkbox: 多选列表项容器
 */
type: {
  type: String,
  default: '',
  required: false
}
```

#### Cell

一个列表项

* slots
    * `<slot name="header">`: 列表项头部
    * `<slot name="body">`: 列表项主内容区
    * `<slot name="footer">`: 列表项尾部

* 补充说明

    Cell一般用于普通的文本、图标项，若为表单列表项，需使用对应的RadioCell，CheckboxCell，SwitchCell，InputCell或SelectCell

#### LinkCell

链接列表项，标签为`<a>`

* props

```javascript
/**
 * 跳转链接，若设置则此列表项可点击跳转
 */
link: {
  type: String,
  required: false
},

/**
 * vue-router使用的跳转链接
 * 若使用vue-router，推荐使用router-link而非link
 */
routerLink: {
  type: null,
  required: false
}
```

#### RadioCell

单选列表项，其中包含`<input type="radio">`

* props

```javascript
/**
 * radio input的id
 */
id: {
  type: String,
  required: false
},

/**
 * radio input的name
 */
name: {
  type: String,
  required: false
},

/**
 * radio input的value
 */
value: {
  type: String,
  required: false
},

/**
 * 显示的文本内容
 */
label: {
  type: String,
  required: true
},

/**
 * 选中项的数据绑定，用于radio input的v-model
 */
picked: {
  type: String,
  required: true,
  twoWay: true
}
```

#### CheckboxCell

单选列表项，其中包含`<input type="checkbox">`

* props

```javascript
/**
 * checkbox input的id
 */
id: {
  type: String,
  required: false
},

/**
 * checkbox input的name
 */
name: {
  type: String,
  required: false
},

/**
 * checkbox input的value
 */
value: {
  type: String,
  required: false
},

/**
 * 显示的文本内容
 */
label: {
  type: String,
  required: true
},

/**
 * 选中项的数据绑定，用于checkbox input的v-model
 */
checked: {
  type: null,
  required: true,
  twoWay: true
}
```

* 补充

单个Checkbox的数据绑定为逻辑值，多个则为数组，具体可参见[表单控件绑定 - vue.js](http://cn.vuejs.org/guide/forms.html#Checkbox)

#### SwitchCell

开关列表项，其中包含`<input type="checkbox">`

* props

```javascript
/**
 * checkbox input的id
 */
id: {
  type: String,
  required: false
},

/**
 * checkbox input的name
 */
name: {
  type: String,
  required: false
},

/**
 * checkbox input的value
 */
value: {
  type: String,
  required: false
},

/**
 * 显示的文本内容
 */
label: {
  type: String,
  required: true
},

/**
 * 开关本质上是checkbox，所以此项代表选中项
 * 用于checkbox input的v-model
 */
on: {
  type: null,
  required: true,
  twoWay: true
}
```

* 补充

单个Checkbox的数据绑定为逻辑值，多个则为数组，具体可参见[表单控件绑定 - vue.js](http://cn.vuejs.org/guide/forms.html#Checkbox)

#### InputCell

文本输入框列表项，包含一个`<input type="text">`或`<textarea>`

* props

```javascript
/**
 * 输入框的类型
 * text: 单行输入框（默认）
 * textarea：文本域
 */
type: {
  type: String,
  required: false,
  default: 'text'
},

/**
 * 输入框的id
 */
id: {
  type: String,
  required: false
},

/**
 * 输入框的name
 */
name: {
  type: String,
  required: false
},

/**
 * 输入框的placeholder
 */
placeholder: {
  type: String,
  required: false
},

/**
 * 输入框的标签，会显示在最前方
 */
label: {
  type: String,
  required: false
},

/**
 * 输入框的数据绑定，会作为input或textarea的v-model
 */
value: {
  type: String,
  required: true,
  twoWay: true
},

/**
 * 验证码的url，若设置则验证码会显示在最后
 */
vcode: {
  type: String,
  required: false
},

/**
 * 是否为表单报错的列表项
 * 若为true则文字会标红，且会显示红色感叹号
 */
warn: {
  type: Boolean,
  required: false,
  default: false
},

/**
 * type为textarea时的行数
 */
rows: {
  type: Number,
  default: 3,
},

/**
 * 支持的最大输入长度
 * 若type为textarea且设定了maxlength，则会出现字数统计标签
 */
maxlength: {
  type: Number,
  required: false
}
```

#### SelectCell

选择框列表项，会包含一个`<select>`

```javascript
/**
 * 选项数组
 * 支持纯字符串格式和包含value、text字段的对象格式
 * 若为纯字符串，则该项的value和text均为该字符串
 */
options: {
  type: Array,
  required: true
},

/**
 * 选中项数据绑定，会用于select的v-model
 */
selected: {
  type: null,
  required: true,
  twoWay: true
},

/**
 * 是否为前置选择框，具体请参见下方示例
 */
before: {
  type: Boolean,
  required: false,
  default: false
},

/**
 * 是否为后置选择框，具体请参见下方示例
 */
after: {
  type: Boolean,
  required: false,
  default: false
}
```

* __普通选择框__

![select-normal](./images/screenshot-select-normal.png)

如图，普通选择框会占据整个宽度，其代码为

```html
<select-cell
  :options="['微信号', 'QQ号', 'Email']"
  :selected.sync="selected">
</select-cell>
```

* __前置选择框__

![select-before](./images/screenshot-select-before.png)

前置选择框的`select`被存放于`header`中，因此还需通过`slot`为其指定`body`

```html
<select-cell
  :before="true"
  :options="['+86', '+80', '+84', '+87']"
  :selected.sync="selected">
  <cell-input
    slot="body"
    type="text"
    placeholder="请输入号码"
    :value.sync="phoneValue">
  </cell-input>
</select-cell>
```

* __后置选择框__

![select-after](./images/screenshot-select-after.png)

后置选择框可以包含`header`，同样通过`slot`进行指定

```html
<select-cell
  :after="true"
  :options="['中国', '美国', '英国']"
  :selected.sync="selected">
  <span slot="header">国家/地区</span>
</select-cell>
```

关于`slot`的更多说明请参见[组件 - vue.js](http://cn.vuejs.org/guide/components.html#使用_Slot_分发内容)

#### Toptips

顶部错误提示

### 3. 提示框（Toast）相关

#### Toast

* props

```javascript
/**
 * toast类型
 * icon: 包含图标的提示框（默认）
 * loading: 包含loading动画的提示框
 */
type: {
  type: String,
  required: false,
  default: 'icon'
}
```

* 补充

可以通过`v-show`来控制Toast是否显示

```html
<toast v-show="true">显示的Toast</toast>
<toast v-show="false">不显示的Toast</toast>
<toast v-show="toastControll">根据toastControll的值来判断</toast>
```

### 4. 对话框相关

#### Dialog

* props

```javascript
/**
 * 对话框类型
 * alert: 提示框，只包含确定按钮（默认）
 * confirm: 询问框，包含确定和取消按钮
 */
type: {
  type: String,
  required: false,
  default: 'alert'
},

/**
 * 对话框标题
 */
title: {
  type: String,
  required: true
},

/**
 * 确定按钮名称
 */
confirmButton: {
  type: String,
  required: false,
  default: '确定'
},

/**
 * 取消按钮名称
 */
cancelButton: {
  type: String,
  required: false,
  default: '取消'
}
```

* events

    * __`weui-dialog-confirm`__: 确定按钮点击事件

    * __`weui-dialog-cancel`__: 取消按钮点击事件

* 示例

```html
<template>
<dialog v-show="dialogControl" type="confirm" title="标题"
  @weui-dialog-confirm="handleDialogAction('确定')"
  @weui-dialog-cancel="handleDialogAction('取消')">
  <p>自定义弹窗内容</p>
  <p>hahahaha，快点确定</p>
</dialog>
</template>

<script>
import {Dialog} from 'vue-weui';

export default {
  data() {
    return {
      dialogControl: true
    };
  },

  methods: {
    handleDialogAction(action) {
      alert(`你刚刚点击了“${action}”`);
      this.dialogControl = false;
    }
  },

  components: {
    Dialog
  }
}
</script>
```

### 5. 进度条相关

#### Progress

* props

```javascript
/**
 * 进度，最小为0，最大为100
 */
progress: {
  type: Number,
  required: true,
  validator(value) {
    return value >= 0 && value <= 100;
  },
  default: 0
},

/**
 * 是否包含取消按钮，若有，则点击时会出发weui-progress-cancel事件
 */
hasCancelButton: {
  type: Boolean,
  required: false,
  default: true
}
```

* events

    * __`weui-progress-cancel`__: 取消按钮点击事件

### 6. 消息页相关

#### Message

一个完整的消息页

![screenshot-message-page](./images/screenshot-message-page.png)

* props

```javascript
/**
 * 消息图标名称
 * 若设置，则会在最上方显示大图标
 */
icon: {
  type: String,
  required: false
},

/**
 * 消息标题
 */
title: {
  type: String,
  required: false
}
```

* slots

    * `<slot name="content">`: 消息内容详情区
    * `<slot name="operation">`: 消息操作区，一般为按钮组
    * `<slot name="extra">`: 消息底部区
    
### 7. 文章相关

#### Article

文章容器

### 8. 操作菜单相关

#### Actionsheet

底部上拉菜单

* props

```javascript
/**
 * 双向绑定的数据，用于控制是否显示Actionsheet
 */
show: {
  type: Boolean,
  required: true,
  twoWay: true
},

/**
 * 菜单键值对
 */
menus: {
  type: Object,
  required: false,
  default: {}
},

/**
 * 操作项键值对
 */
actions: {
  type: Object,
  required: false,
  default: {}
}
```

* events

    * __`weui-menu-click(key)`__: 菜单项点击事件，`key`为点击菜单项的键值
    * __`weui-menu-click(key)`__: 操作项点击事件，`key`为点击操作项的键值

* 补充

    1. 操作项在点击后会默认关闭Actionsheet，而菜单项不会
    2. 菜单项和操作项传递时，除了纯文本也可以传递`HTML`字符串

### 9. 图标相关

#### Icon

* props

```javascript
/**
 * 图标名称，可能的取值有
 * success, success_circle, success_no_circle,
 * info, waiting, waiting_circle, circle,
 * warn, download, info_circle, cancel
 */
name: {
  type: String,
  required: true
},

/**
 * 图标类型
 * default: 默认小图标（默认）
 * message: 用于消息页的大图标
 * safe: 轮廓为盾牌的大图标
 */
type: {
  type: String,
  required: false,
  default: 'default'
}
```

### 10. 九宫格

常用的九宫格结构如下（一行三格）：

```html
<grids>
  <!-- 一个格子 -->
  <grid link="some-link" label="some-text" image-url="url-of-icon"></grid>
  <!-- 另一个格子 -->
  <grid link="some-link" label="some-text" image-url="url-of-icon"></grid>
  <!-- 第三个格子 -->
  <grid link="some-link" label="some-text" image-url="url-of-icon"></grid>
  <!-- 因为一行三格，所以第四个格子会显示在第二行 -->
  <grid link="some-link" label="some-text" image-url="url-of-icon"></grid>
  <!-- 更多的格子…… -->
</grids>
```

#### Grids

九宫格容器，内部包含Grid

#### Grid

一个格子

* props

```javascript
/**
 * 跳转链接，会添加在标签的href属性中
 */
link: {
  type: String,
  required: false
},

/**
 * vue-router使用的跳转链接
 * 若使用vue-router，推荐使用router-link而非link
 * 会添加在v-link属性中
 */
routerLink: {
  type: null,
  required: false
},

/**
 * 图标地址
 */
imageUrl: {
  type: String,
  required: false
},

/**
 * 标签，显示在图标下方
 */
label: {
  type: null,
  required: false
}
```

### 11. 图片上传

图片上传包含三个组件`Uploader`, `UploaderFiles`和`UploaderFile`。其中，`Uploader`是整个上传容器，包含`input`元素。若无需预览，可以只用`Uploader`；若需要图片预览，则通过slot添加`UploaderFiles`容器，容器中包含的每一个`UploaderFile`为一个预览元素，常用结构如下：

```html
<uploader :count="3" :maxlength="5" @weui-input-change="handleFileInputChange">
  <!-- Uploader的标题slot -->
  <span slot="title">图片上传</span>
  <!-- 需要预览时，增加UploaderFiles容器 -->
  <uploader-files slot="uploader-files">
    <uploader-file image-url="..."></uploader-file>
    <!-- 预览图片可以包含status -->
    <uploader-file image-url="..." has-status>
      <icon slot="status" name="warn"></icon>
    </uploader-file>
    <uploader-file image-url="..." has-status>
      <span slot="status">50%</span>
    </uploader-file>
  </uploader-files>
</uploader>
```

#### Uploader

上传容器

* props

```javascript
/**
 * 已上传文件数量
 * 注意，Uploader并不会对真实文件数量进行控制，count仅用于显示
 */
count: {
  type: Number,
  required: false,
  validator: function(value) {
    return value >= 0;
  }
},

/**
 * 显示的最大可上传数量
 * 注意，Uploader并不会对真实文件数量进行控制，maxlength仅用于显示
 */
maxlength: {
  type: Number,
  required: false,
  validator: function(value) {
    return value > 0;
  }
},

/**
 * 是否包含input元素
 */
hasInput: {
  type: Boolean,
  required: false,
  default: true
}
```

* slots
    * `<slot name="title">`: 文件上传容器的标题区
    * `<slot name="uploader-files">`: 上传文件预览区，一般将`UploaderFiles`作为此slot的内容

* events
    * `weui-input-change(event)`: `Uploader`内部的`input`元素`change`事件

#### UploaderFiles

文件预览容器，一般用于`Uploader`的slot，`UploaderFile`应该被包含在此容器内

#### UploaderFile

一个文件预览元素

* props

```javascript
/**
 * 预览图的url，将被用于backgroud-image中
 */
imageUrl: {
  type: String,
  required: true
},

/**
 * 是否包含status
 * 若包含，则预览图片上会添加黑色蒙层
 */
hasStatus: {
  type: Boolean,
  required: false,
  default: false
}
```

* slots
    * `<slot name="status">`: status区。注意：要显示此slot必须将`hasStatus`置为true

### 12. 导航栏

导航栏包含三个组件，`Tab`、`Navbar`和`Tabbar`。`Tab`是外层容器，导航栏和内容主体均需被包含其中，`Navbar`和`Tabbar`分别为顶部和底部导航栏。两种常用的结构如下：

```html
<!-- 顶部导航栏 -->
<tab>
  <navbar slot="navbar" ...></navbar>
  <div slot="body">...</div>
</tab>

<!-- 底部导航栏 -->
<tab>
  <div slot="body">...</div>
  <tabbar slot="tabbar">
    <tabbar-item></tabbar-item>
    <tabbar-item></tabbar-item>
    ...
  </tabbar>
</tab>
```

#### Tab
外层容器，导航栏需要被包含在其中

* slots
    * `<slot name="navbar">`: 顶部导航栏区
    * `<slot name="body">`: 主体内容区
    * `<slot name="tabbar">`: 底部导航栏区

#### Navbar
顶部导航栏

* props

```javascript
/**
 * Navbar的选项数组
 * 数组内容支持纯字符串格式和包含key、text字段的对象格式
 * 若为纯字符串格式，则该项的key为数组下标
 */
items: {
  type: Array,
  required: true
},

/**
 * 选中项的key值
 */
selected: {
  type: null,
  required: true,
  twoWay: true
}
```

* events
    * `weui-item-select(key)`: 导航栏元素被选中的事件

#### Tabbar
底部导航栏容器，需要向其中添加`TabbarItem`组件

#### TabbarItem
底部导航栏项

* props

```javascript
/**
 * 跳转链接
 */
link: {
  type: String,
  required: false
},

/**
 * vue-router使用的跳转链接
 * 若使用vue-router，推荐使用router-link而非link
 */
routerLink: {
  type: null,
  required: false
},

/**
 * 是否被选中的标识
 */
isOn: {
  type: Boolean,
  required: false,
  default: false
}
```

* slots
    * `<slot name="icon">`: 导航栏项的图标区
    * `<slot name="label">`: 导航栏项的文本标签区

### 13. 面板（Panel）相关

#### Panel

`Panel`为容器组件，其中可包含`PanelHeader`（可选），`PanelBody`和`PanelFooter`（可选）。若为`Panel`组件添加了`access`属性，则`PanelFooter`将支持“查看更多”样式

一种典型的布局如下：

```html
<panel access>
  <panel-header>...</panel-header>
  <panel-body>...</panel-body>
  <panel-footer>...</panel-footer>
</panel>
```

* props

```javascript
/**
 * 底部部分是否包含“查看更多”样式
 */
access: {
  type: Boolean,
  required: false,
  default: false
}
```

#### PanelHeader

面板头部

#### PanelBody

面板主体部分，一般将`MediaBox`组件放入其中，形成图文组合列表、文字组合列表或小图文组合列表

#### PanelFooter

面板底部

### 14. 组合列表（Media）相关

#### MediaBox

组合列表的容器组件，通过`type`属性来区分类型，可以是图文组合列表（`appmsg`），文字组合列表（`text`）或小图文组合列表（`small_appmsg`）。常用的结构包含：

```html
<!-- 图文组合列表 -->
<media-box type="appmsg" link="javascript:;">
  <media-header>
    <media-appmsg-thumb></media-appmsg-thumb>
  </media-header>
  <media-body>
    <media-title>...</media-title>
    <media-description>...</media-description>
  </media-body>
</media-box>

<!-- 文字组合列表 -->
<media-box type="text">
  <media-body>
    <media-title>...</media-title>
    <media-description>...</media-description>
  </media-body>
</media-box>

<!-- 小图文组合列表 -->
<media-box type="small_appmsg">
  <media-body>
    <cells type="access">...</cells>
  </media-body>
</media-box>

<!-- 文字列表附来源 -->
<media-box type="text">
  <media-body>
    <media-title>...</media-title>
    <media-description>...</media-description>
    <media-info>
      <media-info-meta>...</media-info-meta>
      <media-info-meta extra>...</media-info-meta>
      ...
    </media-info>
  </media-body>
</media-box>
```

* props

```javascript
/**
 * 列表类型，可以为：
 * appmsg：图文组合列表
 * text：文字组合列表
 * small_appmsg：小图文组合列表
 */
type: {
  type: String,
  required: true
},

/**
 * 跳转链接
 */
link: {
  type: String,
  required: false
},

/**
 * vue-router使用的跳转链接
 * 若使用vue-router，推荐使用router-link而非link
 */
routerLink: {
  type: null,
  required: false
}
```

#### MediaHeader

组合列表容器头部，一般将`MediaAppmsgThumb`组件放入其中

#### MediaBody

组合列表容器主体

#### MediaAppmsgThumb

头部图片，一般放入`MediaHeader`中

* props

```javascript
/**
 * 应用于图片的src
 */
src: {
  type: String,
  required: true
},

/**
 * 应用于图片的alt
 */
alt: {
  type: String,
  required: false
}
```

#### MediaTitle

列表主体部分标题

#### MediaDescription

列表主体部分详细信息

#### MediaInfo

列表主体部分附加信息容器，内部包含`MediaInfoMeta`，常用结构如下：

```html
<media-info>
  <media-info-meta>...</media-info-meta>
  <media-info-meta extra>...</media-info-meta>
  ...
</media-info>
```

#### MediaInfoMeta

列表主体部分附加信息，包含于`MediaInfo`中

* props

```javascript
/**
 * 是否为extra的标识，若是，则文字左方会有竖线隔离符
 */
extra: {
  type: Boolean,
  required: false,
  default: false
}
```

### 15. 搜索栏

#### SearchBar

* props

```javascript
/**
 * 标签
 */
placeholder: {
  type: String,
  required: false
},

/**
 * 取消按钮文本，若不设置则无取消按钮
 */
cancelText: {
  type: String,
  required: false
},

/**
 * 双向绑定的搜索框输入内容
 */
value: {
  type: String,
  required: true,
  twoWay: true
}
```
