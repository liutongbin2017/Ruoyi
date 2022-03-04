<template>
  <div class="editContainer">
    <div class="mindMapContainer" style="background-color: #ffffff;font-size:15px" ref="mindMapContainer"></div>
  </div>
</template>

<script>
import MindMap from 'mind-map-example'
import { getData, storeData, storeConfig } from '@/api'

/**
 * @Desc: 编辑区域
 */
export default {
  name: 'Edit',
  data() {
    return {
      mindMap: null,
      mindMapData: null,
      prevImg: '',
      openTest: false
    }
  },
  mounted() {
    this.getData()
    this.init()
    this.$bus.$on('execCommand', this.execCommand)
    // this.$bus.$on('export', this.export)
    this.$bus.$on('setData', this.setData)
    // if (this.openTest) {
    //   setTimeout(() => {
    //     this.test()
    //   }, 5000)
    // }
  },
  methods: {
    getData() {
      let storeData = getData()
      console.log('刘桐宾===初始化',getData())
      this.mindMapData = storeData
    },
    bindSaveEvent() {
      if (this.openTest) {
        return
      }
      this.$bus.$on('data_change', (data) => {
        console.log('刘桐宾===data_change',data)
        storeData(data)
      })
      this.$bus.$on('view_data_change', (data) => {
        console.log('刘桐宾===dataChange',data)
        storeConfig({
          view: data,
        })
      })
    },
    manualSave() {
      if (this.openTest) {
        return
      }
      let data = this.mindMap.command.getCopyData()
      storeData(data)
      let viewData = this.mindMap.view.getTransformData()
      storeConfig({
        view: viewData,
      })
    },
    init() {
      let { root, layout, theme, view } = this.mindMapData
      this.mindMap = new MindMap({
        el: this.$refs.mindMapContainer,
        data: root,
        layout: layout,
        theme: theme.template,
        themeConfig: theme.config,
        viewData: view,
      })
      console.log('刘桐宾===this.mindMap',this.mindMap)
      this.mindMap.keyCommand.addShortcut('Control+s', () => {
        this.manualSave()
      })
      // 转发事件
      ;[
        'node_active',
        'data_change',
        'view_data_change',
        'back_forward',
        'node_contextmenu',
        'node_click',
        'draw_click',
        'expand_btn_click',
        'svg_mousedown',
        'mouseup',
      ].forEach((event) => {
        this.mindMap.on(event, (...args) => {
          this.$bus.$emit(event, ...args)
        })
      })
      this.bindSaveEvent()
    },

    /**
     * @Desc: 动态设置思维导图数据
     */
    setData(data) {
      console.log('刘桐宾===setData',data)
      this.mindMap.setData(data)
      this.manualSave()
    },

    /**
     * @Desc: 重新渲染
     */
    reRender() {
      this.mindMap.reRender()
    },

    /**
     * @Desc: 执行命令
     */
    execCommand(...args) {
      this.mindMap.execCommand(...args)
    },

    /**
     * @Desc: 导出
     */
    async export(...args) {
      console.log('liutongbin===args',args)
      try {
        this.mindMap.export(...args)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.editContainer {

  .mindMapContainer {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 500px;
  }
}
</style>
