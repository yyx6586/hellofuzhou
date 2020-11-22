import {postNo} from "../../../utils/http";

const actions = {
  getNewsList({commit,state}){
    return new Promise((resolve, reject) => {
      postNo(state.newsApi)
        .then(res => {

          //把获取到的 newsList 传给 mutations
          commit("setNewsList", res);

          resolve(res);
          console.log(res);
          console.log(state.newsList);
      })
        .catch(err => {
          reject(err);
          console.log(err);
        })
    })
  }
}

export default actions;
