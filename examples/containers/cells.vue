<template>
<div class="container">
  <cells-title>带说明的列表项</cells-title>
  <cells>
    <cell>
      <cell-body>标题文字</cell-body>
      <cell-footer>说明文字</cell-footer>
    </cell>
  </cells>
  <cells-title>带图标、说明的列表项</cells-title>
  <cells type="split">
    <cell>
      <cell-header><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></cell-header>
      <cell-body>标题文字</cell-body>
      <cell-footer>说明文字</cell-footer>
    </cell>
  </cells>
  <cells-title>带跳转的列表项</cells-title>
  <cells type="access">
    <cell link="javascript:;">
      <cell-body>cell standard</cell-body>
      <cell-footer></cell-footer>
    </cell>
    <cell link="javascript:;">
      <cell-body>cell standard</cell-body>
      <cell-footer></cell-footer>
    </cell>
  </cells>
  <cells-title>带说明、跳转的列表项</cells-title>
  <cells type="access">
    <cell link="javascript:;">
      <cell-body>cell standard</cell-body>
      <cell-footer>说明文字</cell-footer>
    </cell>
    <cell link="javascript:;">
      <cell-body>cell standard</cell-body>
      <cell-footer>说明文字</cell-footer>
    </cell>
  </cells>
  <cells-title>带图标、说明、跳转的列表项</cells-title>
  <cells type="access">
    <cell link="javascript:;">
      <cell-header><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></cell-header>
      <cell-body>cell standard</cell-body>
      <cell-footer>说明文字</cell-footer>
    </cell>
    <cell link="javascript:;">
      <cell-header><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></cell-header>
      <cell-body>cell standard</cell-body>
      <cell-footer>说明文字</cell-footer>
    </cell>
  </cells>
  <cells-title>单选列表项</cells-title>
  <cells type="radio">
    <radio-cell id="x11" name="radio1" value="One" :picked.sync="radioPicked">
      <cell-body>cell standard</cell-body>
    </radio-cell>
    <radio-cell id="x12" name="radio1" value="Two" :picked.sync="radioPicked">
      <cell-body>cell standard</cell-body>
    </radio-cell>
  </cells>
  <cells-title>复选列表项</cells-title>
  <cells type="checkbox"></cells>
</div>
</template>

<script>
import {CellsTitle, Cells, Cell, RadioCell, CellHeader, CellBody, CellFooter} from 'vue-weui';

export default {
  data() {
    return {
      radioPicked: 'One'
    }
  },

  components: {
    CellsTitle,
    Cells,
    Cell,
    RadioCell,
    CellHeader,
    CellBody,
    CellFooter
  }
}
</script>
