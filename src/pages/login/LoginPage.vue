<template>
  <div class="login-page">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <img src="../../assets/u2.png" alt="">
        <span class="login-title">中国容器管理平台</span>
      </div>
      <div class="login-form">
        <el-form :model="form" :rules="loginRules" ref="loginForm">
          <el-form-item prop="userName">
            <el-input type="text" v-model="form.userName" auto-complete="off" placeholder="请输入用户名">
              <template slot="prepend"><i style="font-size:20px" class="el-icon-user"></i></template>
            </el-input>
          </el-form-item>
          <el-form-item prop="passWord">
            <el-input type="text" v-model="form.passWord" auto-complete="off" placeholder="请输入密码">
              <template slot="prepend"><i style="font-size:20px" class="el-icon-key"></i></template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button style="width:100%;" type="primary" @click="handleLogin" :loading="loading">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>

export default {
  data(){
    return {
      loading: false,
      form:{
        userName: 'admin',
        passWord: '1234'
      },
      loginRules:{
        userName: [
          { required: true, message: '请输入账户', trigger: 'blur' },
        ],
        passWord: [
          { required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods:{
    handleLogin(){
      this.$refs.loginForm.validate().then(()=>{
        this.loading = true;

        //模拟异步请求后台接口 登录操作
        setTimeout(()=>{
          this.$router.push('/main');
          this.loading = false;
        }, 1000)
      }).catch(()=>{
        this.$message({
          message: '输入错误！',
          type: 'warning'
        });
      })
    }
  }
}
</script>

<style scoped>
.login-page{
  background-color: #f0f0f0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-title{
  font-size: 20px;
   line-height:61px;
}

.box-card {
  width: 375px;
}
.clearfix{
  display: flex;
  align-content: center;
  justify-content: space-around;
}
</style>

