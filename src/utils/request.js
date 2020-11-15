import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
  baseURL:"http://127.0.0.1:8080",  //会在发送请求的时候拼接在参数的前面
  timeout:5000
});

// async axiosPost(url,params){
//   return  await this.instance.post(url,qs.stringify(params))
// }

//get请求
// export function get(url,params) {
//
//   // axios.get(url,params).then(function (response) {
//   //   success = response.data;
//   // }.bind(this)).catch(function (err) {
//   //   console.log(err);
//   // });
//
//   return currentArr;
//   // return axios.get(url,{
//   //   params
//   // });
// }

//post请求
export function post(url,data) {
  return axios.post(url,data);
}


export function del(url) {
  return axios.delete(url);
}

export function put(url,data) {
  return axios.put(url,data);
}
