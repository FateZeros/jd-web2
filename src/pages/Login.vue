<template>
  <div>
    <!-- 登陆页 头部 -->
    <div class="login-header">
      <div class="logo-cont">
        <div class="logo"></div>
        <div class="logo-title">欢迎登录</div>
      </div>
    </div>
    <!-- 登录页 主体 -->
    <div class="login-bg">
      <section class="login">
        <div class="form" @keyup.enter="doLogin">
          <p class="icon">
            <i class="fa fa-fire fa-2x"></i>
          </p>
          <p class="input">
            <i class="fa fa-user fa-fw"></i>
            <input id="userName" type="text" name="userName" placeholder="用户名" v-model.trim="username"/>
          </p>
          <p class="input">
            <i class="fa fa-key fa-fw"></i>
            <input id="password" type="password" placeholder="密码" v-model.trim="pwd"/>
          </p>
          <p class="info">{{info}}</p>
          <p>
            <button @click="doLogin()">登陆</button>
          </p>
        </div>
      </section>
    </div>
    <a-footer></a-footer>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import AFooter from '../components/Footer.vue'

  export default {
    data() {
      return {
        username: '',
        pwd: '',
        info: ''
      }
    },
    methods: {
      doLogin() {
        if (!this.username.length) return this.info = '请输入正常的用户名'
        if (!this.pwd.length) return this.info = '请输入正常的密码' 

        this.login({ username: this.username, pwd: this.pwd })
            .then(() => {
              this.$router.push({ path: '/home' })
            })
            .catch(msg => this.info = msg)
      },
      clearInfo() {
        this.info = ''
      },
      ...mapActions(['login'])
    },
    components: {
      AFooter
    },
    watch: {
      name: 'clearInfo',
      pwd: 'clearInfo'
    }
  }
  
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../style/variables";
  .login-header {
    height: 110px;
    background: url(../assets/img/headbg.jpg) repeat-x left bottom;
  }

  .logo-cont {
    width: 1190px;
    height: 90px;
    margin: 0 auto;
  }

  .logo {
    width: 160px;
    height: 50px;
    float: left;
    margin-top: 24px;
    background: url(../assets/img/icon-jd.png) no-repeat;
  }

  .logo-title {
    float: left;
    height: 34px;
    line-height: 34px;
    font-size: 24px;
    color: #333;
    padding-left: 30px;
    margin-top: 34px;
  }

  .login-bg {
    padding: 20px;
    width: 100%;
    height: 475px;
    position: relative;
    background: #2d7cf1 url(../assets/img/login-bg.jpg) no-repeat center;
    background-size: 990px 475px;
  }

  section.login {
    width: 345px;
    height: 350px;
    background: #fff;
    // margin: 0 auto;
    position: absolute;
    top: 50%;
    right: 200px;
    border-radius: 10px;
    margin-top: -175px;

    .form {
      // transform: translate(-50px, -130px);
      margin-top: 50px;
      .icon i {
        transition: all 4s;
        &:hover {
          transform: rotate(1440deg);
        }
      }
      > p {
        height: 50px;
        text-align: center;
        transition: all 0.4s;
        &.info {
          margin: 10px;
          font-size: 12px;
          height: 20px;
          color: $black3;
        }
        &.input:hover {
          color: $green2;
        }
        input {
          transition: all 0.4s;
          width: 200px;
          padding: 8px;
          border-bottom: 1px solid $green1;
          &:focus {
            width: 210px;
          }
        }
        button {
          transition: all 0.4s;
          color: $black3;
          border: 1px solid $green1;
          border-radius: 4px;
          width: 60px;
          height: 30px;
          &:hover {
            background-color: $green1;
            color: #FFF;
          }
        }
      }
    }
  }
</style>
