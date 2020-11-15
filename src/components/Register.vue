<template>
    <div>
      <form id="register" @submit.prevent="submit1(users)" name="form">
        <!--标题-->
        <div id="title">
          <span>用户注册</span>
        </div>
        <!--标题 end-->

        <!--内容-->
        <div id="content">
          <div>
            <span>账号:</span>
            <input name="account" v-model="users.account" placeholder="请输入手机号码"/>
          </div>

          <div>
            <span>密码:</span>
            <input name="password" v-model="users.password" type="password" autocomplete="on" placeholder="请输入六到八位的密码"/>
          </div>

          <div>
            <span>确认密码:</span>
            <input name="registerPassword" v-model="users.registerPassword" type="password" autocomplete="on" placeholder="请再次输入密码"/>
          </div>

          <div id="return">已注册返回
            <a href="#" @click="goNextLogin()">登录</a>
          </div>

          <button>注册</button>
        </div>
        <!--内容 end-->
      </form>
    </div>
</template>

<script>
  import {isPhoneNumber} from "../utils/phone";
  import {mapState,mapActions} from "vuex";
  import state from "../store/modules/common/state";

  export default {
    name: "Register.vue",
    data: function () {
      return{
        users:{}
      }
    },

    computed:{
      ...mapState({
        registerApi: state => state.common.registerApi
      })
    },

    methods:{

      ...mapActions({
        post : 'common/post'
      }),

      goNextLogin: function () {
        const vm = this;
        vm.$router.push({name:'Login'})
      },

      async submit1(users) {
        if(this.users.account == undefined){
          alert("账号不能为空");
          return;
        }

        if(this.users.password == undefined){
          alert("密码不能为空")
          return;
        }

        if(this.users.registerPassword == undefined){
          alert("确认密码不能为空")
          return;
        }

        if(!this.users.password == this.users.registerPassword){
          alert("两次输入的密码不一样，请重新输入");
          return;
        }

        if(!isPhoneNumber(this.users.account)){
          alert("请输入正确格式的手机号码");
          return;
        }

        let data = await this.post({api:state.registerApi,params:{account:users.account,password:users.password}});

        if(data.code == 1){
          const vm1 = this;
          vm1.$router.push({name:'Login'});
        }else {
          alert(data.msg);
        }
      }
    }

  }
</script>

<style scoped>

  /*整体*/
  #register{
    margin-left: 200px;
  }

  /*标题*/
  #title{
    width: 500px;
    height: 70px;
    padding-top: 10px;
    padding-bottom: 80px;
    /*background-color: #7dc7fa;*/
  }

  #title span{
    font-size: 35px;
    font-style: italic;
    font-weight: 700;
  }

  /*内容*/
  #content{
    width: 1000px;
    height: 600px;
    /*background-color: #cbcbcb;*/
  }

  #content div{
    height: 60px;
    width: 800px;
    margin-bottom: 35px;
    /*background-color: #ffdf5e;*/
  }

  #content span{
    display: inline-block;
    width: 150px;
    height: 60px;
    font-size: 20px;
    font-weight: 500;
    text-align: right;
    margin-right: 8px;
    /*background-color: white;*/
  }

  #content input{
    width: 350px;
    height: 60px;
    margin-top: 10px;
    font-weight: 500;
    padding-left: 10px;
    font-size: 18px;
    border-radius: 10px;
  }

  /*返回登录*/
  #return{
    margin-right: 80px;
    padding-bottom: 0px;
    text-align: center;
    font-size: 20px;
    height: 30px;
    /*background-color: #ffdf5e;*/
  }

  #return a{
    font-size: 20px;
    padding-bottom: 0px;
  }

  button{
    height: 50px;
    width: 350px;
    font-size: 20px;
    color: white;
    font-weight: 600;
    background-color: darkturquoise;
    border: 0px;
    border-radius: 10px;
    margin-right: 50px;
    /*margin-top: 20px;*/
  }
</style>
