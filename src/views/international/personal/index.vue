<template>
  <div class="app-container home">
    <el-row :gutter="20">
      <el-col :sm="24" :lg="24">
        黑崎一护
        <hr />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :sm="24" :lg="12" style="padding-left: 20px">
        <h2>自建菜单测试</h2>        
      </el-col>
    </el-row>
    <el-divider />
    <div id="minder-container"></div>
  </div>
</template>

<script>
export default {
  name: "Persoanl",
  data() {
    return {
      // 版本号
      version: "3.8.1",
    };
  },
  mounted(){
    // this.km = new window.kityminder.Minder({  
    // renderTo: '#minder-container'  
    // });  
    // this.km.importJson({  
    // "root": {  
    // "data": {  
    // "text": "test111"  
    // },  
    // "children": [  
    // { "data": { "text": "新闻\nsrc/module/node.j"}},  
    // { "data": { "text": "网页"} },  
    // { "data": { "text": "贴吧"} },  
    // { "data": { "text": "知道"} },  
    // { "data": { "text": "音乐" } },  
    // { "data": { "text": "图片"} },  
    // { "data": { "text": "视频"} },  
    // { "data": { "text": "地图" } },  
    // { "data": { "text": "百科","expandState":"collapse"}}  
    // ]  
    // },  
    // "template":"default"  
    // }); 
    
  },
  methods: {
    goTarget(href) {
      window.open(href, "_blank");
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  .col-item {
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  ul {
    list-style-type: none;
  }

  h4 {
    margin-top: 0px;
  }

  h2 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: 100;
  }

  p {
    margin-top: 10px;

    b {
      font-weight: 700;
    }
  }

  .update-log {
    ol {
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 40px;
    }
  }
  .container-mind {
    position: relative;
    height: 400px;
  }
}
</style>

