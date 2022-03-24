<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default  {
  name:  'App',
  metaInfo() {
      return {
          title: this.$store.state.settings.dynamicTitle && this.$store.state.settings.title,
          titleTemplate: title => {
              return title ? `${title} - ${process.env.VUE_APP_TITLE}` : process.env.VUE_APP_TITLE
          }
      }
  },
  mounted() {
    window.addEventListener("mousedown", this.clickOther);
    // window.addEventListener('keypress',this.clickOther)
  },
  methods:{
    clickOther(e) {
      console.log('刘桐宾===鼠标点击',e.target)
          this.$bus.$emit('execCommand','REMOVE_CUTKEYS','1111')

    }
  },
  beforeDestroy() {  // 实例销毁之前对点击事件进行解绑
    window.removeEventListener('keyup', this.clickOther);
  }
}
</script>
