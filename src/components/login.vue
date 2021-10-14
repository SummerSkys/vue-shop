<template >
  <div class="login_cont">
    <div class="login_box">
      <!-- 头像图片模块 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <el-form
        label-width="0px"
        class="login_form"
        :model="loginForm"
        :rules="rules"
        ref="loginRef"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            prefix-icon="el-icon-user"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            v-model="loginForm.password"
            type="password"
          ></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btn">
          <el-button type="primary" @click="checkPwd">登录</el-button>
          <el-button type="info" @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 表单登录的数据绑定
      loginForm: {
        username: "admin",
        password: "123",
      },
      rules: {
        username: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    resetForm() {
      this.$refs.loginRef.resetFields();
    },
    checkPwd() {
      this.$refs.loginRef.validate((vaild) => {});
    },
  },
};
</script>

<style lang="less" scoped>
.login_cont {
  background-color: #2b6b4b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -65px);

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.btn {
  display: flex;
  justify-content: flex-end;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>>
