<template>
<div class="weui_cell" :class="{'weui_vcode': vcode, 'weui_cell_warn': warn}">
  <cell-header v-if="label">
    <label :for="id" class="weui_label">{{{label}}}</label>
  </cell-header>
  <cell-body>
    <cell-textarea :type="type" :placeholder="placeholder" :id="id" :name="name" :value.sync="value" v-if="type === 'textarea'"></cell-textarea>
    <cell-input :type="type" :placeholder="placeholder" :id="id" :name="name" :value.sync="value" v-else></cell-input>
  </cell-body>
  <cell-footer v-if="vcode || warn">
    <i class="weui_icon_warn" v-if="warn"></i>
    <img :src="vcode" v-if="vcode">
  </cell-footer>
</div>
</template>

<script>
import CellHeader from './cell-header.vue';
import CellBody from './cell-body.vue';
import CellFooter from './cell-footer.vue';
import CellInput from './cell-input.vue';
import CellTextarea from './cell-textarea.vue';

export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    id: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: true,
      twoWay: true
    },
    label: {
      type: String,
      required: false
    },
    vcode: {
      type: String,
      required: false
    },
    warn: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  components: {
    CellHeader,
    CellBody,
    CellFooter,
    CellInput,
    CellTextarea
  }
}
</script>
