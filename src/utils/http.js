import axios from 'axios'
import qs from 'qs'

// // 环境的切换
// if (process.env.NODE_ENV == 'development') {    //开发环境
//   axios.defaults.baseURL = 'http://127.0.0.1:8080';}
// else if (process.env.NODE_ENV == 'debug') {     //调试环境
//   axios.defaults.baseURL = 'http://127.0.0.1:8080';
// }
// else if (process.env.NODE_ENV == 'production') {     //生产环境
//   axios.defaults.baseURL = 'http://127.0.0.1:8080';
// }
//
// // 请求超时时间
// axios.defaults.timeout = 10000;
//
// // post请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


const instance = axios.create({
  baseURL:"http://127.0.0.1:8080",  //会在发送请求的时候拼接在参数的前面
  timeout:10000
});


/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params){
  return new Promise((resolve, reject) =>{
    instance.get(url, {
      params: params
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    instance.post(url, qs.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}

export default instance;
