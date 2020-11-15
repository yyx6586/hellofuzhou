<template>
  <div>
    <img id="background_img" src="../assets/login.jpg">
    <form @submit.prevent="submit1(users)" name="form">
      <div id="opacity_div" class="user_div"></div>

      <div class="user_div">
        <span id="span_account" class="user_span">账号:</span>
        <input class="user_input" name="account" v-model="users.account">

        <br>
        <span id="span_password" class="user_span">密码:</span>
        <input class="user_input" type="password" name="password" v-model="users.password" autocomplete="on">

        <br>
        <button id="login_btn"  class="btn">登陆</button>


        <button id="forget_password_btn" class="btn">忘记密码</button>
      </div>
    </form>
  </div>
</template>

<script>
  import {mapState,mapMutations,mapActions} from "vuex";

  export default {
    name: 'Login',
    data () {
      return {
        users:{}
      }
    },
    computed: {
      ...mapState({
        account:state=>state.user.account,
        password:state=>state.user.password
      })
    },
    methods: {
      // ...mapMutations(['setUser']),

      ...mapActions({
        setUser : 'user/setUser',
        login: 'user/login'
      }),

      async submit1(users){

        if (this.users.account == undefined) {
              alert("账号不能为空");
              return;
        };

        if (this.users.password == undefined) {
          alert("密码不能为空")
          return;
        };


        let data = await this.login({account:users.account,password:users.password});

        if(data.code == 1){

          // alert(data.msg + "  点击确定跳转到首页");

          const vm = this;
          vm.$router.push({name:'Index'});

        }else {
          alert(data.msg);
        }
        // console.log(data);

        // this.setUser({account:users.account,password:users.password});
        },
  }
}
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }

  #background_img{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .user_div{
    position: absolute;
    width: 350px;
    height: 250px;
    left: 50%;
    top: 50%;
    margin-top: -180px;
    margin-left: -200px;
  }

  #opacity_div{
    background-color: white;
    opacity: 0.3;
  }

  .user_span{
    display: -moz-inline-box;
    display: inline-block;
    width: 80px;
    height: 20px;
    text-align: right;
    font-size: 20px;
  }

  #span_account{
    margin: 55px 10px 10px -45px;
  }

  #span_password{
    margin: 10px 10px 10px -45px;
  }

  .user_input{
    width: 200px;
    height: 20px;
    margin: 10px 0;
    font-size: 20px;
  }

  .btn{
    width: 80px;
    height: 30px;
    margin: 20px 5px 0 10px;
    background-color: darkturquoise;
    border: 0;
    font-size: 20px;
    border-radius: 5px;
    outline: none;
  }

  .btn:hover{
    opacity: 0.6;
  }

  .btn:active{
    background-color: darkorange;
  }

  #login_btn{
    float: left;
    margin-left: 50px;
  }

  #forget_password_btn{
    width: 110px;
    float: right;
    margin-right: 70px;
  }

</style>
