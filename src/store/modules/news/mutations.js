
const mutations = {

  //保存 newsList 信息
  setNewsList(state,res){
    state.newsList = res.data;
    console.log(state.newsList);
  }
}

export default mutations;
