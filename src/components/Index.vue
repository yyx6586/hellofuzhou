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
                <h3 style="position: absolute;bottom: 0;right:0;">
                  <span style="font-size: 40px;font-style:italic">{{index+1}}</span>/{{imgList.length}}
                </h3>
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
      <div class="input-group">
        <input type="text" class="form-control" placeholder="搜索景点" aria-describedby="basic-addon2">
        <span class="input-group-addon" id="basic-addon2">搜索一下</span>
      </div>
      <!--搜索框 end-->
    </div>
    <!--header end-->

    <div style="margin:326px 0 0 0 ;padding: 0px; width: 0px; height: 0px; clear: both"></div>

    <!--热门景点-->
    <div id="site" style="background-color: #f5f5f5; height: 560px">
      <!--标题-->
      <div class="title">
        <h2>热门推荐</h2>
      </div>
      <!--标题 end-->

      <!--景点推荐-->
      <div class="site-out">
        <div class="thumbnail">
          <a class="img-a" href="#" role="button" v-for="(item,index) in siteImg">
            <img :src="item.src">
            <div style="height: 30px; margin-top: -10px">
              <a href="#" role="button" style="height: 30px; margin-bottom: 20px">
                <p style="height: 30px">{{item.text}}</p>
              </a>
            </div>
          </a>
        </div>
      </div>
      <!--景点推荐 end-->
    </div>
    <!--热门景点 end-->

    <!--游记攻略-->
    <div id="itinerary" style="margin-bottom: 100px">
      <!--标题-->
      <div class="title" style="padding-top: 30px">
        <h2>—————&nbsp;&nbsp;游记攻略&nbsp;&nbsp;—————</h2>
        <div style="font-size: 18px; font-style: italic; text-align: center;">独行或同游，聪明的人与你在一起</div>
        <div style="font-size: 23px; padding-top: 20px; padding-bottom: 20px; text-align: center; font-style: italic; font-weight: 500">
          <a href="#" style="color: #1d7aae; text-decoration: none">MORE >></a>
        </div>
      </div>
      <!--标题 end-->

      <!--图片-->
      <div v-for="(item,index) in itineraryImg" style="display: inline-block">
        <img :src="item.src" class="img-circle" style="border-radius:50%; height: 270px; width: 270px; margin: 5px 15px 0px 15px">
      </div>
      <!--图片 end-->
    </div>
    <!--游记攻略 end-->

    <!--底部，著作权-->
    <div id="footer" style="background-color: #282828; height: 300px; width: 100%">
    </div>
    <!--底部，著作权 end-->
  </div>
</template>

<script>
  import {mapState,mapMutations,mapActions} from 'vuex'

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

        siteImg:[
          {text:"1111",src:require("../assets/index/1.jpg")},
          {text:"2222",src:require("../assets/index/main_pic.jpg")},
          {text:"3333",src:require("../assets/index/main_pic.jpg")},
          {text:"4444",src:require("../assets/index/1.jpg")},
          {text:"1111",src:require("../assets/index/1.jpg")},
          {text:"2222",src:require("../assets/index/main_pic.jpg")},
          {text:"3333",src:require("../assets/index/main_pic.jpg")},
          {text:"4444",src:require("../assets/index/1.jpg")}
        ],

        itineraryImg:[
          {text:"1111",src:require("../assets/index/1.jpg")},
          {text:"2222",src:require("../assets/index/main_pic.jpg")},
          {text:"3333",src:require("../assets/index/main_pic.jpg")},
          {text:"4444",src:require("../assets/index/1.jpg")}
        ]
      }
    },

    computed:{
      ...mapState({
        account: state => state.user.account,
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
        // console.log(state.account);
        // console.log(state.password);

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

  /*景点推荐*/

  #site .title{
    height: 74px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  #site h2{
    color: #636363;
  }

  #site img{
    width: 275px;
    height: 185px;
    margin-bottom: 20px;
  }

  #site a{
    display: inline-block;
    margin: 0px 8px 0px 8px;
    color: black;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
  }

  /*#site .img-a{*/
    /*border: 1px solid brown;*/
  /*}*/

  /*#site .img-a:hover{*/
    /*border: 1px solid bisque;*/
  /*}*/

  #site a:hover{
    color: #7dc7fa;
  }

  #site p{
    overflow:hidden;
    text-overflow:ellipsis; /* 加省略号 */
    white-space:nowrap; /* 强制不换行 */
  }

  #site .thumbnail{
    width: 100%;
    height: 300px;
    padding-top: 0px;
  }

  #site .site-out{
    margin: 5px 20px 5px 20px;
  }
</style>
