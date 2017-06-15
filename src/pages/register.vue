<template>
	<div>
		<div class="register-header">
			<div class="logo-cont">
				<div class="logo"></div>
				<div class="logo-title">欢迎注册</div>
				<div class="have-account">已有账号？<a class="to-login" @click="toLogin()">请登录</a></div>
			</div>
		</div>
		<div class="container">
			<div class="form-cont">
				<section class="register">
	        <div class="form" @keyup.enter="doRegister">
	          <p class="input">
	            <i class="fa fa-user fa-fw"></i>
	            <input id="userName" type="text" name="userName" placeholder="用户名" v-model.trim="username"/>
	          </p>
	          <p class="info">{{nameErr}}</p>
	          <p class="input">
	            <i class="fa fa-key fa-fw"></i>
	            <input id="password" type="password" placeholder="密码" v-model.trim="pwd"/>
	          </p>
	          <p class="info">{{pwdErr}}</p>
	          <p class="input">
	            <i class="fa fa-key fa-fw"></i>
	            <input id="re-pwd" type="password" placeholder="确认密码" v-model.trim="pwd"/>
	          </p>
	          <p class="info">{{pwdErr}}</p>
	          <p class="input">
	            <i class="fa fa-key fa-fw"></i>
	            <input id="mobile" type="text" placeholder="手机" v-model.trim="pwd"/>
	          </p>
	          <p class="info">{{pwdErr}}</p>
	          <p class="input">
	            <i class="fa fa-key fa-fw"></i>
	            <input id="email" type="email" placeholder="邮箱" v-model.trim="pwd"/>
	          </p>
	          <p class="info">{{pwdErr}}</p>
	        </div>
	      </section>
			</div>
			<div class="form-company">
				<div class="company-cont">
					<span class="glyphicon glyphicon-stats company-register-icon"></span>
					企业用户注册
				</div>
				<div class="globle-cont">
					<span class="glyphicon glyphicon-globe globe-icon"></span>
					<span>INTERNATIONAL<br>CUSTOMER</span>
				</div>
			</div>
		</div>
		<a-footer></a-footer>
	</div>
</template>

<script>
	import AFooter from '../components/Footer.vue'

	export default {
		data() {
			return {
				username: '',
        pwd: '',
				nameErr: '',
				pwdErr: ''
			}
		},
		methods: {
			toLogin() {
				this.$router.push({ path: '/login' })
			}
		},
		components: {
			AFooter
		}
	}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
@import "../style/variables";
.register-header {
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

.have-account {
  font-size: 16px;
  float: right;
  margin-top: 55px;
  color: #999;
}

.to-login {
	color: #333;

	&:hover{
    cursor: pointer;
    color: $red1;
  }
}

.container {
	width: 100%;
	background: #fff;
  padding: 80px;
  border-bottom: 1px solid #eee;
  display: flex;
}

.form-cont {
	width: 60%;
  border-right: 1px solid #eee;
}

.form-company {
	width: 40%;
}

section.register {
  .form {
    margin-top: 50px;
    > p {
      height: 50px;
      text-align: center;
      transition: all 0.4s;
      &.info {
        font-size: 12px;
        height: 20px;
        color: $red1;
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
        width: 80px;
        height: 30px;
        margin-top: 10px;
	        &:hover {
	          background-color: $green1;
	          color: #FFF;
	        }
      	}
    	}
    }
  }

</style>