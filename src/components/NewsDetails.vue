<template>
  <div>
    <!--导航栏-->
    <div id="navigation">
      <!--左边的导航-->
      <ul class="nav nav-pills" style="width: 500px; float: left">
        <li class="nav-item">
          <router-link :to="{name:'Index'}" style="text-decoration: none">
            <a class="nav-link" href="#" style="font-size: 25px">你好,福州</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name:'News'}" style="text-decoration: none">
            <a class="nav-link" href="#" style="font-size: 22px">资讯</a>
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style="font-size: 22px">酒店</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"
             style="font-size: 22px">景区</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#" style="color: black; font-size: 18px">景区介绍</a>
            <a class="dropdown-item" href="#" style="color: black; font-size: 18px">景区图片</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"
             style="font-size: 22px">社区</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#" style="color: black; font-size: 18px">游记</a>
            <a class="dropdown-item" href="#" style="color: black; font-size: 18px">自由行</a>
          </div>
        </li>
      </ul>

      <!--右边的导航-->
      <ul class="nav" style="width: 230px; float: right">
        <li class="nav-item" style="text-align: center">
          <router-link style="text-decoration: none" :to="{name:'PersonalAdmin'}">
            <a class="nav-link" href="#" v-if="account && role == 1" style="font-size: 22px">{{account}}</a>
          </router-link>

          <router-link style="text-decoration: none" :to="{name:'PersonalUser'}">
            <a class="nav-link" href="#" v-if="account && role == 2" style="font-size: 22px">{{account}}</a>
          </router-link>

          <router-link style="text-decoration: none" :to="{name:'Login'}">
            <a class="nav-link" href="#" v-if="!account" style="font-size: 22px">登录</a>
          </router-link>
        </li>
        <li class="nav-item">
          <span style="font-size: 22px; color: white; width: 76px; height: 49px; line-height: 49px; text-align: center">/</span>
        </li>
        <li class="nav-item" style="text-align: center">
          <router-link :to="{name:'Register'}" style="text-decoration: none">
            <a class="nav-link" href="#" v-if="!account" style="font-size: 22px">注册</a>
          </router-link>

          <a class="nav-link" href="#" v-if="account" style="font-size: 22px" @click="clearUsers()">退出</a>
        </li>
      </ul>
    </div>
    <!--导航栏 end-->

    <!--旅游资讯内容-->
    <div>
      <p style="width:980px; margin: 0 auto; font-size: 16px; text-align: left; padding-top: 20px; color: #989898;padding-bottom: 20px; border-bottom: 1px solid #cdcdcd;">
        <router-link :to="{name:'Index'}" style="text-decoration: none">
          <a href="#" style="color: #333; text-decoration: none">福州，你好</a>
        </router-link>
        &nbsp;>&nbsp;
        <router-link :to="{name:'News'}" style="text-decoration: none">
          <a href="#" style="color: #333; text-decoration: none">旅游资讯</a>
        </router-link>
        &nbsp;>&nbsp;正文
      </p>

      <h1 v-for="item in newsDetails" style="text-align: center;font-size: 24px;line-height: 27px;margin-bottom: 14px;margin-top:30px;color: #333;font-weight: 700;font-family: Microsoft YaHei">
        {{item.title}}
      </h1>

      <div style="margin-bottom: 30px;text-align: center;color: #999;">
        <span v-for="item in newsDetails" style="padding-right: 20px;font-size: 15px;">{{item.release_time}}</span>
        <span style="font-size: 17px;">来源：{{this.source}}</span>
      </div>

      <!--正文-->
      <div v-for="item in newsDetails">
        {{item.content}}
      </div>
      <!--正文 end-->
    </div>
    <!--旅游资讯内容 end-->
  </div>
</template>

<script>
  import {mapState,mapMutations,mapActions} from 'vuex'
  import state from "../store/modules/common/state";

    export default {
        name: "NewsDetails.vue",

      data:function () {
        return{
          source:"你好，福州旅游网",              //来源
          newsDetails:"",         //旅游资讯的信息
        }
      },

      computed:{
        ...mapState({
          account:state => state.user.account,             //获取账号信息

          newsDetailsApi:state => state.common.newsDetailsApi,
        })
      },

      created(){
          this.getID();
          this.getNewsDetails();
      },

      methods:{
        ...mapActions({
          clearUser:'user/clearUser',            //获取删除用户信息功能
          post:'common/post'
        }),

        //实现退出功能，清除用户信息，跳转到登录界面
        clearUsers:function () {
          this.clearUser();

          const vm = this;
          vm.$router.push({name:'Login'});
        },

        //获取旅游资讯信息的 id
        getID:function () {
          this.id = this.$route.params.id;
          console.log(this.id);
        },

        async getNewsDetails() {
          let data = await this.post({api:state.newsDetailsApi,params:{id:this.id}});
          this.newsDetails = data.data;
          console.log(this.newsDetails);
        }
      }
    }
</script>

<style scoped>

  /*导航栏*/
  #navigation{
    z-index: 200;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 60px;
    width: 100%;
    padding-top: 5px;
    padding-left: 50px;
    background-color: #323232;
  }

  #navigation a{
    color: white;
    font-weight: 700;
  }

  .input-group input{
    z-index: 200;
    position: absolute;
    width: 350px;
    height: 50px;
    font-size: 20px;
    margin-top: 150px;
    margin-left: 480px;
  }

  .input-group span{
    z-index: 200;
    position: absolute;
    margin-top: 150px;
    margin-left: 830px;
    line-height: 50px;
    padding: 0px;
    height: 50px;
    width: 100px;
    text-align: center;
    font-size: 20px;
    color: white;
    border: 0px;
    background-color: #8adbff;
    border-bottom-right-radius: 8%;
    border-top-right-radius: 8%;
  }

</style>
