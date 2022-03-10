<template>
  <div class="toolbarContainer">
    <div class="toolbar">
      <!-- 节点操作 -->
      <div class="toolbarBlock">
        <!-- <div
          class="toolbarBtn"
          :class="{
            disabled: backEnd,
          }"
          @click="$bus.$emit('execCommand', 'BACK')"
        >
          <span class="icon iconfont iconhoutui-shi"></span>
          <span class="text">回退</span>
        </div> -->
        <!-- <div
          class="toolbarBtn"
          :class="{
            disabled: forwardEnd,
          }"
          @click="$bus.$emit('execCommand', 'FORWARD')"
        >
          <span class="icon iconfont iconqianjin1"></span>
          <span class="text">前进</span>
        </div> -->
        <div
          class="toolbarBtn"
          :class="{
            disabled: activeNodes.length <= 0 || hasRoot,
          }"
          @click="$bus.$emit('execCommand', 'INSERT_NODE', 'upInsert')"
        >
          <span class="icon iconfont iconjiedian"></span>
          <span class="text">向上插入主事件</span>
        </div>
        <div
          class="toolbarBtn"
          :class="{
            disabled: activeNodes.length <= 0 || hasRoot,
          }"
          @click="$bus.$emit('execCommand', 'INSERT_NODE', 'downInsert')"
        >
          <span class="icon iconfont iconjiedian"></span>
          <span class="text">向下插入主事件</span>
        </div>
        <div
          class="toolbarBtn"
          :class="{
            disabled: activeNodes.length <= 0 || isInsertChild,
          }"
          @click="$bus.$emit('execCommand', 'INSERT_CHILD_NODE')"
        >
          <span class="icon iconfont icontianjiazijiedian"></span>
          <span class="text">插入子节点</span>
        </div>
        <div
          class="toolbarBtn"
          :class="{
            disabled: activeNodes.length <= 0 || isBankDelete,
          }"
          @click="deleteNode"
        >
          <span class="icon iconfont iconshanchu"></span>
          <span class="text">删除节点</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @Desc: 工具栏
 */
export default {
  name: "Toolbar",
  data() {
    return {
      activeNodes: [],
      backEnd: false,
      forwardEnd: true
    };
  },
  computed: {
    hasRoot() {
      return this.activeNodes.find((node) => {
        return node.isRoot;
      });
    },
    isInsertChild() {
      return this.activeNodes.find((node) => {
        return node.layerIndex === 4;
      });
    },
    isBankDelete() {
      return this.activeNodes.find((node) => {
        return node.nodeData.data.id === 0;
      });
    }
  },
  created() {
    this.$bus.$on("node_active", (...args) => {
      console.log('liutongbin===node_active',args)
      this.activeNodes = args[1];
    });
    this.$bus.$on("back_forward", (index, len) => {
      this.backEnd = index <= 0
      this.forwardEnd = index >= len - 1
    });
    // 监听点击与、或按钮事件
    this.$bus.$on("expand_btn_click",(node) => {
      console.log('liutongbin===expand_btn_click',node,node.nodeData,node.nodeData.data,node.nodeData.data.text)
      let isClickText = node.nodeData.data.text
      if(isClickText !== '') {
        console.log('liutongbin===触发点击事件')
        this.$bus.$emit('execCommand', 'SET_NODE_CHANGEBTN',node,!node.nodeData.data.isChangeBtn)
      }
    })
  },
  methods:{
    // 删除节点走接口，走弹窗
    deleteNode() {
      console.log('liutongbin===删除节点',this.activeNodes[0].nodeData.data.id)
      let isCanDeleteId = this.activeNodes[0].nodeData.data.id
      if(isCanDeleteId !== 0) {
        // then之后走this.$bus.$emit
        this.$bus.$emit('execCommand', 'REMOVE_NODE')
      }
   
    }
  }
};
</script>

<style lang="scss" scoped>
.toolbarContainer {
    position: absolute;
    top: 24%;
    z-index: 1000 !important;
  .toolbar {
    display: flex;
    padding: 0 20px;
    padding-top: 20px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(26, 26, 26, 0.8);
    z-index: 2;

    .toolbarBlock {
      display: flex;
      background-color: #fff;
      padding: 10px 20px;
      border-radius: 6px;
      box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.06);
      border: 1px solid rgba(0, 0, 0, 0.06);
      margin-right: 20px;

      &:last-of-type {
        margin-right: 0;
      }
    }

    .toolbarBtn {
      display: flex;
      justify-content: center;
      flex-direction: column;
      cursor: pointer;
      margin-right: 20px;

      &:last-of-type {
        margin-right: 0;
      }

      &:hover {
        &:not(.disabled) {
          .icon {
            background: #f5f5f5;
          }
        }
      }

      &.disabled {
        color: #bcbcbc;
        cursor: not-allowed;
      }

      .icon {
        display: flex;
        height: 26px;
        background: #fff;
        border-radius: 4px;
        border: 1px solid #e9e9e9;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        padding: 0 5px;
      }

      .text {
        margin-top: 3px;
      }
    }
  }
}
</style>
