<template>
    <div>
      <div class="search-emptyLayer" v-show="emptyLayer">
        <div class="search-emptyLayer-box">
          <p>清空搜索记录？</p>
          <p>
            <span class="box-frame search-emptyLayer-true" @click="empty()">确定</span>
            <span class="box-frame search-emptyLayer-false" @click="sEmptyLayer">取消</span>
          </p>
        </div>
      </div>
      <div class="search-top">
        <p @click="this.returnPage" class="search-top-return">
          <i class="iconfont icon-back"></i>
        </p>
        <div class="search-top-form">
          <div class="search-top-frame">
            <i class="iconfont icon-search"></i>
            <input @focus="sShanchu" @blur="blur"  type="text" id="search-input">
            <i @click="erase" v-show="shanchu" class="iconfont icon-shanchu4" id="search-shanchu"></i>
          </div>
          <input @click="submit(parameter)" type="button" value="搜索" class="search-top-click" />
        </div>
      </div>
      <div class="search-content">
        <div class="search-content-b">
          <p>搜索记录</p>
          <div class="search-content-hot" v-show="whetherRecord">
            <span v-for="item in searchRecord" @click="submit(item)">{{item}}</span>
            <p class="search-content-delete" @click="sEmptyLayer">
              <i class="iconfont icon-lajitongshanchu"></i>
              清空搜索记录
            </p>
          </div>
          <div class="search-content-nothing" v-show="!whetherRecord">
            还没有搜索记录哦~
          </div>
        </div>
        <div class="search-content-b">
          <p>热搜榜</p>
          <div class="search-content-hot">
            <span v-for="item in hot" @click="submit(item)" class="">{{item}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex"
    export default {
        name: "search",
        data(){
          return {
            state: this.$store.state,
            shanchu: false,
            emptyLayer: false,
            whetherRecord: true,
            parameter: ""
          }
        },
        created(){
          this.$store.dispatch('getHotSearchApi')
        },
        computed:{
          ...mapGetters([
            'getHotSearchApi',
            'getSearchRecord'
          ]),
          hot(){
            return this.state.getHotSearchApi.data
          },
          searchRecord(){
            if(this.state.getSearchRecord.msg.length === 0){
              this.whetherRecord = false;
            }else{
              this.whetherRecord = true;
            }
            return this.state.getSearchRecord.msg
          }
        },
        methods:{
          sShanchu(){
            this.shanchu = !this.shanchu;
          },
          sEmptyLayer(){
            this.emptyLayer = !this.emptyLayer;
          },
          erase(){
            document.getElementById("search-input").value = "";
            this.keepParameter();
          },
          submit(condition){
            console.log(condition)
            if(condition !== ""){
              // 历史记录信息应该是保存在本地loacl Storage
              this.whetherRecord = true;
              this.$store.dispatch('getSearchRecord', condition)
              this.$store.dispatch('getSearch', condition)
              this.$router.push('/search/' + condition)
            }
          },
          keepParameter(){
            this.parameter = document.getElementById("search-input").value
          },
          blur(){
            this.sShanchu();
            this.keepParameter();
          },
          empty(){
            this.$store.dispatch('getSearchRecord', "empty");
            this.whetherRecord = false;
            this.sEmptyLayer();
          }
        }
    }
</script>

<style scoped>
  i{
    font-size: .24rem;
  }
  /*layer*/
  .search-emptyLayer{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    font-size: .24rem;
    text-align: center;
    color: #5e5e5e;
    background: #0000004f;
    z-index: 1001;

  }
  .search-emptyLayer-box{
    width: 3.8rem;
    /*height: 1.5rem;*/
    margin: 45vh auto 0;
    background: #fff;
  }
  .search-emptyLayer-box p{
    line-height: 0.75rem;
  }
  .box-frame{
    padding: .1rem .4rem;
    border-radius: .1rem;
  }
  .search-emptyLayer-true{
    background-color: #ff464e;
    color: #fff;
    margin-right: .2rem;
  }
  .search-emptyLayer-false{
    background-color: #ddd;
  }

  /*top*/
  .search-top{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: .8rem;
    background: #ff464e;
    font-size: .30rem;
    color: #fff;
    z-index: 100;
  }
  .search-top-return{
    width: .8rem;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    display: block;
    float: left;
    z-index: 2;
  }
  .search-top-return i{
    font-size: .34rem;
  }

  .search-top-form{
    width: 88%;
    margin-left: 12%;
    height: .6rem;
    line-height: .6rem;
    margin-top: .1rem;
  }
  .search-top-frame{
    width: 80%;
    height: 100%;
    background: #fd7f7f;
    float: left;
  }
  /*.search-top-frame i{*/
    /*font-size: .24rem;*/
  /*}*/
  .search-top-frame i:nth-child(1){
    margin-left: 0.15rem;
  }
  .search-top-frame i:nth-child(3){
    /*display: none;*/
  }
  .search-top-frame input{
    width: 76%;
    height: .5rem;
    line-height: 5rem;
    border: none;
    color: #fff;
    caret-color: #fff;
    font-size: .26rem;
    background: 0;
  }
  .search-top-frame input:focus{
    outline:none;
  }
  .search-top-click{
    width: .8rem;
    height: 100%;
    margin-left: .2rem;
    border: 1px solid #fff;
    color: #fff;
    font-size: .28rem;
    background: 0;
    display: block;
    float: left;
    box-sizing: border-box;
  }


/*content*/
  .search-content{
    position: relative;
    overflow: hidden;
    width: 88vw;
    margin: .8rem auto 1.05rem;
    font-size: .22rem;
    color: #5e5e5e;
  }
  .search-content-b{
    position: relative;
    min-height: 1.5rem;
    margin-top: .5rem;
    padding-bottom: 1rem;
  }
  .search-content-b p{
    padding-bottom: .1rem;
    border-bottom: 1px solid #ddd;
  }
  .search-content-hot{

    display: flex;
    flex-wrap: wrap;
  }
  .search-content-hot span{
    margin-top: .3rem;
    margin-right: .4rem;
    padding: .08rem .2rem;
    border: 1px solid #ddd;
    border-radius: .4rem;
  }
  .search-content-b .search-content-delete{
    position: absolute;
    bottom: 0;
    left: 30vw;
    border: none;
  }
  .search-content-nothing{
    margin-top: .5rem;
    color: #999;
    font-size: .24rem;
    text-align: center;
  }
</style>
