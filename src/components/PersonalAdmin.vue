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
            <a class="nav-link" href="#" v-if="account" style="font-size: 22px">{{account}}</a>

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

      <div style="margin-top: 10px; width: 100%; height: 10px; background-color: #f4f4f4"></div>

      <div class=".container-fluid">
        <div class="row">
          <div class="col-md-2" style="background-color: #dedef8">
            <!--左侧菜单栏-->
            <div class="panel-group" id="accordion" style="width: 150px; background-color: rgba(128,203,255,0.33); padding-top: 3px; display: inline-block; float: left">
              <div class="panel panel-default" style="margin-top: 15px; margin-bottom:15px; border-bottom: 2px solid #cbcbcb">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion"
                       href="#collapseOne" style="color: black; text-decoration: none">
                      个人信息
                    </a>
                  </h4>
                </div>
              </div>

              <div class="panel panel-default" style="margin-top: 15px; margin-bottom:15px; border-bottom: 2px solid #cbcbcb">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion"
                       href="#collapseTwo" style="color: black; text-decoration: none">
                      留言中心
                    </a>
                  </h4>
                </div>
              </div>

              <div class="panel panel-default" style="margin-top: 15px; margin-bottom:15px; border-bottom: 2px solid #cbcbcb">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion"
                       href="#collapseThree" style="color: black; text-decoration: none">
                      景区管理
                    </a>
                  </h4>
                </div>
                <div id="collapseThree" class="panel-collapse collapse">
                  <div class="panel-body" style="font-size: 20px; font-weight: 600;">
                    线路规划
                  </div>

                  <div class="panel-body" style="font-size: 20px; font-weight: 600">
                    景区图片
                  </div>

                  <div class="panel-body" style="font-size: 20px; font-weight: 600">
                    景区介绍
                  </div>

                  <div class="panel-body" style="font-size: 20px; font-weight: 600">
                    新闻资讯
                  </div>

                  <div class="panel-body" style="font-size: 20px; font-weight: 600">
                    旅游线路
                  </div>
                </div>
              </div>

              <div class="panel panel-default" style="margin-top: 15px; margin-bottom:15px; border-bottom: 2px solid #cbcbcb">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion"
                       href="#collapseFour" style="color: black; text-decoration: none">
                      酒店管理
                    </a>
                  </h4>
                </div>

                <div id="collapseFour" class="panel-collapse collapse">
                  <div class="panel-body" style="font-size: 20px; font-weight: 600">
                    酒店加盟
                  </div>

                  <div class="panel-body" style="font-size: 20px; font-weight: 600">
                    酒店审核
                  </div>
                </div>
              </div>

              <div class="panel panel-default" style="margin-top: 15px; border-bottom: 2px solid #cbcbcb">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion"
                       href="#collapseFive" style="color: black; text-decoration: none">
                      社区管理
                    </a>
                  </h4>
                </div>

                <div id="collapseFive" class="panel-collapse collapse">
                  <div class="panel-body" style="font-size: 20px; font-weight: 600">
                    游记管理
                  </div>

                  <div class="panel-body" style="font-size: 20px; font-weight: 600">
                    用户管理
                  </div>
                </div>
              </div>
            </div>
            <!--左侧菜单栏 end-->
          </div>
          <div class="col-md-10" style="background-color: #dedef8">
            <!--右侧内容-->

            <form class="form-inline" role="form">
              <div class="form-group">
                <label class="sr-only" for="name">名称</label>
                <input type="text" class="form-control" id="name" placeholder="请输入名称">
              </div>
              <div class="form-group">
                <label class="sr-only" for="inputfile">文件输入</label>
                <input type="file" id="inputfile">
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox">请打勾
                </label>
              </div>
              <button type="submit" class="btn btn-default">提交</button>
            </form>

            <!--右侧内容 end-->
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapState,mapMutations,mapActions} from 'vuex'

    export default {
        name: "PersonalAdmin.vue",

      data:function () {
        return{

        }
      },

      computed:{
        ...mapState({
          account:state => state.user.account,             //获取账号信息
        })
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

  /*下拉菜单栏*/
  .panel-body:hover{
    background-color: rgba(255, 255, 255, 0.86);
    cursor:pointer;
  }
</style>
