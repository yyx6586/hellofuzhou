
const mutations = {
  // login({commit,state},data){
  //   state.msg = data;
  // }

  setUser(state,users){
    state.account = users.account;
    state.password = users.password;
  },

  //退出
  clearUser(state){
    state.account = "";
    state.password = "";
    state.role = "";
    // console.log(state.account);
    // console.log(state.password);
  },

  //保存登录信息
  setMsg(state,response){
    state.msg = response.msg;
    state.account = response.data.userAccount;
    state.password = response.data.userPassword;
    state.role = response.data.userRole;

    // console.log(state.account);
    // console.log(state.password);
    // console.log(state.msg)
  }
}


export default mutations;
