import axios from "axios";
import qs from "qs";

// const instance = axios.create({
//   baseURL:"http://127.0.0.1:8080",  //会在发送请求的时候拼接在参数的前面
//   timeout:10000
// });

const actions ={

  get({commit,state},a){
    {
      api:"";
      params:{}
    }
    return new Promise((resolve, reject) =>{
      axios.get(state.baseURL + a.api, a.params)
        .then(res => {
          resolve(res.data);
          console.log(res.data);
        })
        .catch(err => {
          reject(err.data)
          console.log(err.data);
        })
    });
  },

   post({commit,state},a){
     {
       api:"";
       params:{}
     }
     return new Promise((resolve, reject) => {
       axios.post(state.baseURL + a.api, qs.stringify(a.params))
         .then(res => {
           resolve(res.data);
           console.log(res.data);
           console.log(a);
         })
         .catch(err => {
           reject(err.data)
           console.log(err);
         })
     });
   }

}

export default actions;
