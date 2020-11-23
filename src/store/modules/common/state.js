
const state = {
  //端口
  baseURL:"http://127.0.0.1:8080",

  //服务器图片的地址
  imgSrc:"http://127.0.0.1:8080/uploads/",

  // //登录
  // loginApi:"/user/login",

  //注册
  registerApi:"/user/register",

  //旅游资讯
  newsApi:"/news/newsList",

  //旅游资讯正文
  newsDetailsApi:"/news/newsDetail",

  //上传景点图片到服务器
  imgApi:"/scenePicture/imgUpload",

  //保存景点图片到数据库
  saveImgApi:"/scenePicture/saveImg",

}

export default state;
