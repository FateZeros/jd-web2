<template>
  <section class="login">
    <div class="form">
      <p class="icon">
        <i class="fa fa-fire fa-2x"></i>
      </p>
      <p class="input">
        <i class="fa fa-user fa-fw"></i>
        <input id="userName"
               type="text"
               name="userName"
               placeholder="用户名"
               v-model.trim="name"
        >
      </p>
      <p class="input">
        <i class="fa fa-key fa-fw"></i>
        <input id="password"
               type="password"
               placeholder="密码"
               v-model.trim="pwd"
        >
      </p>
      <p class="info"></p>
      <p>
        <button>登陆
        </button>
      </p>
    </div>
  </section>
</template>
<script>
  
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
 
</style>
