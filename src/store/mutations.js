const INCREMENT = 'INCREMENT'
const DETAILED = 'DETAILED'
const HOTSEARCH = 'HOTSEARCH'
const SEARCH_RECORD = 'SEARCH_RECORD'
const SEARCH = 'SEARCH'
export default {
  [INCREMENT](state, res) {
    // console.log('进入mutation');
    state.getMineBaseMsg = { ...state.getMineBaseMsg, msg: res}
    // res.data.msg
    // console.log('进入mutations修改state成功');
    // console.log(state.getMineBaseMsg.msg.category)
  },
  [DETAILED](state, res) {
    state.getViewApi = { ...state.getViewApi, msg: res}
  },
  [HOTSEARCH](state, res){
    state.getHotSearchApi = res
  },
  [SEARCH_RECORD](state, res){
    console.log("mutations修改")
    // 把原有数据和新添加的数据合并
    state.getSearchRecord = { ...state.getSearchRecord, msg: res}
  },
  [SEARCH](state, res){
    state.getSearch = { ...state.getSearch, msg: res}
  }
}
