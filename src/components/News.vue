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

      <!--旅游资讯-->
      <div id="main-news" style="width: 980px; background: #FFF; padding-bottom: 20px; padding-top: 20px; overflow: hidden;margin: 0 auto;">
        <!--旅游资讯顶部-->
        <div style="text-align: left; width: 980px; height: 60px; background-color: #0062a5;">
          <h2 style="color: white; padding-left: 20px; line-height: 60px; font-size: 18px; font-family: Microsoft YaHei; font-weight: bold">旅游资讯</h2>
        </div>
        <!--旅游资讯顶部 end-->

        <!--旅游资讯信息列表-->
        <ul style="margin-top: 10px;list-style: none; padding-left: 0px">
          <li v-for="(item, index) in newsList" style="margin-top: 5px; padding-bottom: 10px; width: 980px; border-bottom: 1px dotted #cbcbcb; text-align: left">
            <router-link :to="{name:'NewsDetails',params:{id:item.id}}" style="text-decoration: none">
              <a href="#" style="color: #333; text-decoration: none;">
                <div style="width: 980px; height: 65px; display: block; padding-left: 15px; overflow: hidden;">
                  <h3 style="font-size: 16px; line-height: 36px; font-weight: 700; color: #666;">{{item.title}}</h3>
                  <span style="font-size: 12px; line-height: 18px; color: #737373;">{{item.release_time}}--{{item.id}}</span>
                </div>
              </a>
            </router-link>
          </li>
        </ul>
        <!--旅游资讯信息列表 end-->
      </div>
      <!--旅游资讯 end-->

      <!--分页-->
      <div id="pagination" style="width: 100%; position: fixed; bottom: 10px; left: 0;">
        <u :class="1===this.pageNo?'pagination-u':''" @click="previous()" style="text-decoration: none; margin-right: 20px">
          <span>
            <a class="pagination-a" href="#" style="text-decoration: none; font-size: 18px">上一页</a>
          </span>
        </u>

        <span style="margin-right: 20px; font-size: 18px">当前第
          <strong style="font-weight: 900; font-size: 18px;">{{this.pageNo}}</strong>
          页
        </span>

        <span style="font-size: 18px">共
          <strong style="font-size: 18px; font-weight: 900">{{this.pageAll}}</strong>
          页

          <a @click="goPageIndex()" href="#" style="margin-left: 18px; font-size: 18px; font-weight: 600; text-decoration: none">
            GO
          </a>
        </span>

        <input v-model="pageIndex" name="pageIndex" style="width: 80px; height: 28px; font-size: 18px"/>

        <u :class="this.pageAll===this.pageNo?'pagination-u':''" class="next" @click="next()" style="text-decoration: none; margin-left: 20px">
          <span>
            <a class="pagination-a" href="#" style="text-decoration: none; font-size: 18px;">下一页</a>
          </span>
        </u>
      </div>
      <!--分页 end-->
    </div>
</template>

<script>
  import {mapState,mapMutations,mapActions} from 'vuex'
  import state from "../store/modules/common/state";
  //
  // //定义一个子组件
  // const list = {
  //   template:'<li style="display: inline-block;">\n' +
  //     '          <a href="#" v-for="(item,index) in pageNo"\n' +
  //     '          style="height: 40px; border: 1px solid chartreuse;margin: 0 5px 0 5px; padding:3px 6px 3px 8px;">\n' +
  //     '            {{item}}\n' +
  //     '          </a>\n' +
  //     '        </li>',
  //
  //   //定义接收父组件的属性
  //   props:["pageNo"]
  // }


    export default {
        name: "News.vue",

      data:function () {
          return{
            newsList:[],          //后台返回的每页旅游资讯的信息

            pageAll:"",          //共3页
            pageSize:7,          //每页 7 条记录
            pageNo:1,            //当前的页数
            pageIndex:"",        //跳转的页面数

          }
      },

      // //局部注册组件
      // components:{
      //   list:list
      // },

      computed:{
        ...mapState({
          account:state => state.user.account,             //获取账号信息

          newsApi: state => state.common.newsApi,          //获取旅游资讯 api

        })
      },

      created(){
          this.getNewsList();
      },

      methods:{
        ...mapActions({
          clearUser:'user/clearUser',            //获取删除用户信息功能
          post:'common/post',
          postNo:'common/postNo'
        }),

        //实现退出功能，清除用户信息，跳转到登录界面
        clearUsers:function () {
          this.clearUser();

          const vm = this;
          vm.$router.push({name:'Login'});
        },

        //上一页
        previous:function(){
          this.pageNo --;
          this.getNewsList();
        },

        //下一页
        next:function(){
          this.pageNo ++;
          this.getNewsList();
        },

        //GO 跳转
        goPageIndex:function(){
          if(this.pageIndex < 1){
            this.pageNo = 1;
          }else if (this.pageIndex > this.pageAll) {
            this.pageNo = this.pageAll;
          }else {
            this.pageNo = this.pageIndex;
          }

          this.getNewsList();
        },

        async getNewsList() {

          let data = await this.post({api:state.newsApi,params:{pageNo:this.pageNo, pageSize: this.pageSize}});
          this.pageAll = data.number;
          this.newsList = data.data;
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

  /*旅游资讯*/
  #main-news ul li a div:hover{
    background-color: rgba(229, 229, 229, 0.46);
  }

  /*分页*/

  #pagination .pagination-a{
    color: black;
  }

  #pagination .pagination-a:hover{
    color: #60bdfe;
  }

  .pagination-u{
    display: none;
  }
</style>
