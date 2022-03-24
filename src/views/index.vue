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
        <h2>黑崎一护</h2>
        <el-input v-model="input" placeholder="Please input" />
        <el-select v-model="input" placeholder="Select">
        </el-select>
      </el-col>
    </el-row>
    <el-divider />
    <Toolbar></Toolbar>
    <div class="container-mind">
      <Edit></Edit>
    </div>
    <div id="mountNode"></div>
  </div>
</template>

<script>
// import G6 from '@antv/g6'
import Toolbar from "./components/mindMap/Toolbar"
import Edit from "./components/mindMap/Edit"
export default {
  name: "Index",
  components:{
    Toolbar,
    Edit
  },
  data() {
    return {
      // 版本号
      version: "3.8.1",
      input:''
    };
  },
  mounted(){
    
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
    height: 521px;
  }
}
</style>

