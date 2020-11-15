<template>
  <div>
    <div id="header">
      <!--导航栏-->
      <div id="navigation">
        <!--左边的导航-->
        <ul class="nav nav-pills" style="width: 500px; float: left">
          <li class="nav-item">
            <a class="nav-link" href="#" style="font-size: 25px">你好,福州</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style="font-size: 22px">资讯</a>
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
            <a class="nav-link" href="#" v-if="account" style="font-size: 22px">{{account}}</a>
            <a class="nav-link" href="#" v-if="!account" style="font-size: 22px" @click="goLoginVue()">登录</a>
          </li>
          <li class="nav-item">
            <span style="font-size: 22px; color: white; width: 76px; height: 49px; line-height: 49px; text-align: center">/</span>
          </li>
          <li class="nav-item" style="text-align: center">
            <a class="nav-link" href="#" v-if="!account" style="font-size: 22px" @click="goRegisterVue()">注册</a>
            <a class="nav-link" href="#" v-if="account" style="font-size: 22px" @click="clearUsers()">退出</a>
          </li>
        </ul>
      </div>
      <!--导航栏 end-->

      <!--轮播图-->
      <div style="z-index: 1; position: absolute; top: 0px; left: 0px;height: 386px; width: 100%; overflow: hidden;">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item" :class="0===index?'active':''" v-for="(item,index) in imgList">
              <img :src="item.src" alt="..." style="height: 386px; width: 100%; overflow: hidden">
              <div class="carousel-caption d-none d-md-block" style="bottom: 10px;right:35px;">
                <h4 style="position: absolute;bottom: 0;right:0;">
                  <span style="font-size: 40px;font-style:italic">{{index+1}}</span>/{{imgList.length}}
                </h4>
              </div>
            </div>
          </div>

          <!--左右箭头-->
          <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <!--轮播图 end-->

      <!--搜索框-->
      <div id="search">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="搜索景点" aria-describedby="basic-addon2">
          <span class="input-group-addon" id="basic-addon2">搜索一下</span>
        </div>
      </div>
      <!--搜索框 end-->
    </div>
    <!--header end-->

  </div>
</template>

<script>
  import {mapState,mapMutations,mapActions} from 'vuex'
  import state from "../store/modules/common/state";

  export default {
    name: "Index.vue",
    data:function () {
      return {
        imgSelectIndex:0,
        imgList:[
          {text:"1111",src:require("../assets/index/1.jpg")},
          {text:"2222",src:require("../assets/index/main_pic.jpg")},
          {text:"3333",src:require("../assets/index/main_pic.jpg")},
        ],

        isLogin:[
          {text:"登录"},
          {text:"你好，"}
        ]
      }
    },

    computed:{
      ...mapState({
        account: state => state.user.account,
        password: state => state.user.password
      })
    },
    
    methods:{
      // ...mapMutations({
      //   clearUser:'user/clearUser'
      // }),

      ...mapActions({
        clearUser:'user/clearUser'
      }),

      goLoginVue:function () {
        const vm = this;
        vm.$router.push({name:'Login'});
      },

      goRegisterVue:function () {
        const vm = this;
        vm.$router.push({name:'Register'});
      },

      clearUsers:function () {
        this.clearUser();
        console.log(state.account);
        console.log(state.password);

        const vm = this;
        vm.$router.push({name:'Login'});
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
  }

  #navigation a{
    color: white;
    font-weight: 700;
  }

  /*搜索框*/
  #search{
    z-index: 200;
    position: absolute;
    margin-top: 150px;
    margin-left: 480px;
  }

  #search input{
    width: 350px;
    height: 50px;
    margin: 0;
    font-size: 20px;
    /*border-right: 0px;*/
  }

  #search span{
    line-height: 50px;
    margin: 0;
    padding: 0px;
    height: 50px;
    width: 100px;
    text-align: center;
    font-size: 20px;
    color: white;
    /*border: 1px solid white;*/
    border: 0px;
    background-color: #8adbff;
    border-bottom-right-radius: 8%;
    border-top-right-radius: 8%;
  }
</style>
