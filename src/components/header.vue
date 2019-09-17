<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <div class="login">
        <span></span>
        <h3>后台管理系统</h3>
      </div>
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      <div class="my">
        <dl>
          <dt><img src="" alt=""></dt>
          <dd>
            <p>1</p>
            <p>2</p>
          </dd>
        </dl>
      </div>
    </el-menu>
  </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.el-menu-demo{
  height: 60px;
  display: flex;
  position: relative;
}
.login{
  width: 200px;
  height: 100%;
  left: 0;
  display: flex;
  color: #fff;
  line-height: 60px;
}
.login span{
  width: 40px;
  height: 40px;
  background: red;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  margin: 10px;
}
.login h3{
  height: 40px;
  flex: 1;
  line-height: 40px;
 margin: 10px;
}
.my{
  width: 120px;
  height: 100%;
  position: absolute;
  right: 0;
  margin:0 20px;
}
.my dl{
  width: 100%;
  height: 40px;
  display: flex;
  margin: 10px;
}
.my dl dt{
  width: 40px;
  height: 100%;
  line-height: 60px;
}
.my dl dt img{
  width: 100%;
  height: 40px;
  display: block;
  background: skyblue;
}
.mydl dd{
  height: 100%;
  flex: 1;
  line-height: 60px;
}
</style>