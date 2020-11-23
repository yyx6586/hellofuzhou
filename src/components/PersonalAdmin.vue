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
          <div class="col-md-2" style="background-color: #dedef8; padding-right: 0px">
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
          <div class="col-md-10" style="padding-left: 0px">
            <!--右侧内容-->

            <form enctype="multipart/form-data">
              <!--<div class="imgList" v-for="(item,index) in imgNames" style="display: inline-block; margin: 0 5px 0 5px;">-->
                <!--<p class="img" style="position: relative;width: 240px;height: 240px;line-height: 240px;border: 1px dashed #ccc">-->
                  <!--<img :src="imgSrc + item" style="width: 200px;height: 200px;background-color: #ffdf5e;vertical-align: middle;">-->
                  <!--<a class="close" style="display: none;">×</a>-->
                <!--</p>-->
              <!--</div>-->

              <ul class="upload-imgs" style="height: 480px;">
                <li v-for="(item,index) in imgNames" :index="index">
                  <p class="img">
                    <img :src="imgSrc + item">
                    <a class="close" @click="delImg(index)" style="cursor: pointer">×</a>
                  </p>
                </li>
              </ul>

              <br>
              <p style="display: inline-block; font-size: 20px">请选择景点</p>

              <select v-model="siteName" style="display: inline-block; margin-right: 20px; font-size: 19px; width: 180px">
                <option v-for="(item, index) in siteList" style="display: inline-block">
                  <p>{{item.name}}</p>
                </option>
              </select>

              <input id="file" type="file" name="file" @change="onUpload" accept="image/*" style="font-size: 19px;width: 250px"/>
              <input type="submit" value="提交" @click="saveImg()" style="font-size: 19px"/>
            </form>

            <!--右侧内容 end-->
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapState,mapMutations,mapActions} from 'vuex'
  import axios from 'axios'
  import {postHeader, postParam} from '../utils/http'
  import state from "../store/modules/common/state";
  import {post} from "../utils/request";

    export default {
        name: "PersonalAdmin.vue",

      data:function () {
        return{
          imgLenth:"0",               //图片总的张数
          imgNames:[],                //图片名称  后台返回来的
          imgNumber:"7",              //最多上传 8 张图片   数组是从 0 开始计数的

          siteList:[                  //景点
            {name:"三坊七巷"},
            {name:"西湖公园"},
            {name:"上下杭"},
            {name:"沙滩公园"},
          ],

          siteName:"",                //下拉框选中的景点的名称
        }
      },

      computed:{
        ...mapState({
          account:state => state.user.account,             //获取账号信息
          imgApi: state => state.common.imgApi,
          imgSrc:state => state.common.imgSrc,             //图片地址端口
          saveImgApi:state => state.common.saveImgApi,
        })
      },

      methods:{
        ...mapActions({
          clearUser:'user/clearUser',            //获取删除用户信息功能
        }),

        //实现退出功能，清除用户信息，跳转到登录界面
        clearUsers:function () {
          this.clearUser();

          const vm = this;
          vm.$router.push({name:'Login'});
        },


        //图片保存到服务器
        async onUpload(){
          // let files = e.target.files[0];

          let files = document.getElementById("file").files[0];
          // let formFile = new FormData();
          // console.log(files);
          // formFile.append("uploadFile", files);
          // console.log(formFile);
          // let data = await this.post({api:state.imgApi, params:{files}});
          // console.log(data);

          let formData = new FormData();
          formData.append("files", files);

          // let config = {
          //   headers: {
          //     'Content-Type': 'multipart/form-data'
          //   }
          // };

          let headers = {
                'Content-Type': 'multipart/form-data'
              };

          if(this.imgNames.length <= this.imgNumber){
            let data = await postHeader(state.imgApi, formData ,headers);
            this.imgNames.push(data.data);
            this.imgLenth ++;
            console.log(data);
            console.log(this.imgNames);
            console.log(this.imgLenth);

            // axios.post("http://127.0.0.1:8080/scenePicture/imgUpload", formData, config).then(
            //   (data)=>{
            //
            //   });

          }else {
            alert("最多上传" + this.imgNumber + "张图片");
          }
        },

        delImg(index){
          this.$delete(this.imgNames,index);
          this.imgLenth --;
          console.log(this.imgLenth);
        },


        //景点图片保存到数据库
        async saveImg(){

          if(this.siteName == ""){
            alert("请选择景点");
            return;
          }

          let paramsData = new URLSearchParams();
          paramsData.append("picture", this.imgNames);
          paramsData.append("site_name", this.siteName);

          console.log(paramsData);

          let saveData = await postParam(state.saveImgApi, paramsData);

          this.imgNames = "";
          console.log(saveData);
          console.log(this.imgNames);
          alert(saveData.msg);
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

  /*下拉菜单栏*/
  .panel-body:hover{
    background-color: rgba(255, 255, 255, 0.86);
    cursor:pointer;
  }

  /*上传图片*/

  .upload-imgs li{
    position: relative;
    height: 225px;
    font-size: 14px;
    display: inline-block;
    padding: 10px;
    margin-right: 25px;
    border: 2px dashed #ccc;
    text-align: center;
    vertical-align: middle;
  }

  .upload-imgs li:hover{
    border-color: #60bdfe;
  }

  .upload-imgs .img{
    position: relative;
    width: 200px;
    height: 200px;
    line-height: 200px;}

  .upload-imgs .img img{
    vertical-align: middle;
    width: 180px;
    height: 180px;
  }

  .upload-imgs .img .close{
    display: none;
  }

  .upload-imgs li:hover .img .close{
    display: block;
    position: absolute;
    right: -6px;
    top: -10px;
    line-height: 1;
    font-size: 25px;
    color: black;
  }
</style>
