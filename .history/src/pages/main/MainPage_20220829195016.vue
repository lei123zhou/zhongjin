<template>
  <div class="main">
    <div class="heard">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#145c61"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <template slot="title">
            <img src="../../assets/u2.png" alt="" id="logo" />
            <span class="login-title">中国容器管理平台</span>
          </template></el-menu-item
        >
        <el-menu-item index="2">主页</el-menu-item>
        <el-menu-item index="3" @click="toManagement"
          >后台管理平台</el-menu-item
        >
        <el-menu-item index="null">登录</el-menu-item>
      </el-menu>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toManagement() {
      this.$router.push("/management");
    },
  },
};
</script>
<style lang="less" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: #f6f6f6;
  height: 100%;
  .heard {
    width: 100%;
    background-color: "#145c61";
  }
}
.login-title {
  font-size: 20px;
  line-height: 61px;
}
.clearfix {
  display: flex;
  align-content: center;
  justify-content: space-around;
}
#logo {
  width: 50px;
}
/deep/.el-menu.el-menu--horizontal {
  display: flex;
  justify-content: center;
  li {
    margin: 0 40px;
    padding: 0 20px;
  }
}
</style>
