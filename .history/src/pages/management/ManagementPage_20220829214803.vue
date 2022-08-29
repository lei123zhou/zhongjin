<template>
  <div class="manangement">
    <el-menu
      default-active="user"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="user">
        <i class="el-icon-document"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="colony">
        <i class="el-icon-document"></i>
        <span slot="title">集群管理</span>
      </el-menu-item>
      <el-menu-item index="colony">
        <i class="el-icon-document"></i>
        <span slot="title">公告管理</span>
      </el-menu-item>
      <el-menu-item index="colony">
        <i class="el-icon-document"></i>
        <span slot="title">lian'je管理</span>
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
.manangement {
  display: flex;
  height: 100%;
}
</style>
