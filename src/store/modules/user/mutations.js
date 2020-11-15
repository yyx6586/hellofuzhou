
const mutations = {
  // login({commit,state},data){
  //   state.msg = data;
  // }

  setUser(state,users){
    state.account = users.account;
    state.password = users.password;
  },

  clearUser(state){
    state.account = "";
    state.password = "";
    console.log(state.account);
    console.log(state.password);
  },

  setMsg(state,response){
    state.msg = response.msg;
    state.account = response.data.userAccount;
    state.password = response.data.userPassword;

    // console.log(state.account);
    // console.log(state.password);
    // console.log(state.msg)
  }
}


export default mutations;
