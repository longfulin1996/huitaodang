import axios from 'axios';

// let axiosDate = new Date();
export function fetchGet(url, params) {
  return new Promise((resolve, reject) => {
    // 在本地post报错
    axios.get(url, params)
      .then(response => {
         resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function fetchPost(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
    // axios.post(url, params)正式使用需要是post，但是本地模拟post报错404
      .then(response => {
        console.log(params)
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  mineBaseMsgApi(params) {
    return fetchGet('../static/data.json',params)
  },
  mineViewApi(params){
    return fetchGet('../static/detailed.json',params)
  },
  mineHotSearchApi(params){
    return fetchGet('../static/hotSearch.json',params)
  },
  mineSearchApi(params){
    return fetchPost('../static/search.json',params)
  }
}
