# vue-weui组件列表

## 列表

### 1. 按钮相关

#### ButtonArea

按钮放置的区域

#### Button

按钮

* props：

```
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

```
<cells-title>标题</cells-title>

<!-- 普通列表项 -->
<cells>
  <cell>
    <cell-header>列表头</cell-header>
    <cell-body>主内容区</cell-body>
    <cell-footer>说明文字</cell-footer>
  </cell>
  ...
</cells>

<!-- 其它种类的列表项 -->
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

```
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

* props

```
/**
 * 跳转链接，若设置，则此列表项会变为链接
 */
link: {
  type: String,
  required: false
},

/**
 * vue-router使用的跳转链接
 * 若使用vue-router，推荐使用v-link而非link
 */
vLink: {
  type: null,
  required: false
}
```

* 补充说明

Cell一般用于普通的文本、图标或链接列表项，若为表单列表项，需使用对应的RadioCell，CheckboxCell，SwitchCell，SelectCell或InputCell

#### RadioCell

单选列表项，其中包含`<input type="radio">`

* props

```
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

```
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
