import {post} from "../../../utils/http";


const actions = {
  setUser({commit,state},data){
    // console.log(data)
    commit("setUser",data);
  },

  //退出
  clearUser({commit,state}){
    commit("clearUser");
    // console.log(state.account);
    // console.log(state.password);
  },

  //登录
  login({commit,state},data){
    return new Promise((resolve, reject) => {

      post(state.loginApi,data).then(response => {

        //把 response 的值传给 mutations
        commit("setMsg",response);

        resolve(response);

        console.log(state.loginApi);
        console.log("ok",response);

      }).catch(err => {

        reject(err);
        console.log(state.loginApi);
        console.log("err",err);

      })
    })

  },

};

export default actions;
