<template>
  <div>
    <div class="wrapper">
        <input class="input-item" type="text" v-model="name" placeholder="请输入用户名">
        <input class="input-item" type="password" v-model="psw" placeholder="请输入密码">
        <div class="router-wrapper">
          <router-link class="router-item" to="/register">注册</router-link>
          <router-link class="router-item" to="/forgetPassword">忘记密码</router-link>
        </div>

      <button class="login-button" @click="loginSubmit">登录</button>
    </div>
  </div>
</template>

<script>
import md5 from "js-md5";
import axios from "axios";
export default {
  name: "LoginLogin",
  components: {
  },
  data() {
    return {
      name: "",
      psw: ""
    };
  },
  methods: {
    loginSubmit() {
      console.log(this.name);
      console.log(this.psw);
      console.log({
        account: this.name,
        agentPwd: md5("agent" + this.psw)
      });
      axios
        .post("http://192.168.101.123:8899/ysscale/web/agent/login/login", {
          account: this.name,
          agentPwd: md5("agent" + this.psw)
        })
        .then(res => {
          console.log("cheeng");
          console.log(res);
          this.$router.push({ name: "Home", params: {} });
        })
        .catch(err => {
          console.log("shibai");
          console.log(err);
        });
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper
  position relative
  display flex
  flex-direction column
  justify-content start
  width 400px
  height 100%
  padding 0 10px
  margin-top 200px
  font-size 24px
  .input-item
    height 30px
    margin 10px 0
    padding 0 10px
    border 1px solid #666 
  .router-wrapper
    display flex
    height 30px
    margin 10px 0
    padding 0 10px
    justify-content space-between




</style>
