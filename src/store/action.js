import api from './api'

export default {
  getMineBaseApi ({commit}){
    // console.log(commit)
    // console.log("进入action");
    api.mineBaseMsgApi()
      .then(res => {
        // console.log('action中调用封装后的axios成功')
        commit('INCREMENT', res)
      })
  },
  getViewApi ({commit}){
    api.mineViewApi()
      .then(res => {
        commit('DETAILED', res)
      })
  },
  getHotSearchApi ({commit}){
    api.mineHotSearchApi()
      .then(res => {
        commit('HOTSEARCH', res)
      })
  },
  getSearchRecord ({commit, state}, par){
    console.log("action修改")
    // 这里保存需要保存到本地localstorage
    let msg = state.getSearchRecord.msg;

    function exist(){
      for(var i = 0; i < msg.length; i++){
        if(msg[i] === par){
          console.log(msg[i])
          return true
        }
      }
    }
    if(!exist()){
      if(par === "empty"){
        msg = []
      }else{
        msg.push(par)
      }
    }
    commit('SEARCH_RECORD', msg)
  },
  getSearch ({commit}, par){
    api.mineSearchApi(par)
      .then(res => {
        commit('SEARCH', res)
      })
  },
}


