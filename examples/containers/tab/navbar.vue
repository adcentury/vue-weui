<template>
<div class="page navbar">
  <div class="bd" style="height: 100%;">
    <tab>
      <navbar slot="navbar" :items="items" :selected.sync="selected"></navbar>
      <div class="tab-body" slot="body" :style="{transform: 'translateX(-' + (selected * 100) + '%)'}">
        <div class="scroll-container">
          <div class="content-container">
            <message icon="info" title="这里是选项一"></message>
          </div>
          <div class="content-container">
            <message icon="waiting" title="这里是选项二"></message>
            <Cells type="access">
              <link-cell link="javascript:;" @click="goToNextBar">
                <span slot="body">去选项三</span>
              </link-cell>
            </Cells>
          </div>
          <div class="content-container">
            <message icon="success" title="这里是选项三"></message>
          </div>
        </div>
      </div>
    </tab>
  </div>
</div>
</template>

<script>
import {Tab, Navbar, Message, Cells, LinkCell} from 'vue-weui';

export default {
  data() {
    return {
      items: ['选项一', '选项二', '选项三'],
      selected: 0
    };
  },

  components: {
    Tab,
    Navbar,
    Message,
    Cells,
    LinkCell
  },

  methods: {
    goToNextBar() {
      this.selected++;
    }
  }
}
</script>

<style lang="less">
.navbar {
  .weui_navbar {
    z-index: 1001;
  }

  .weui_tab_bd {
    overflow-x: hidden;
  }

  .weui_navbar_item {
    cursor: pointer;
  }

  .tab-body {
    transition: transform .3s ease;

    .scroll-container {
      width: 300%;
      display: flex;

      .content-container {
        flex: 1 1;
      }
    }
  }
}
</style>
