<!--首页-->
<template>
  <div>
    <div class="index-top">
      <div class="index-top-logo"></div>
      <div class="index-top-search">
        <i class="iconfont icon-search"></i>
        <router-link to="/search" tag="p">{{searchVal}}</router-link>
      </div>
    </div>
    <div class="index-classify">
      <div class="index-classify-nei">
        <ul>
          <li v-for="(item, index) in category">
            <router-link :to="{ path: '/category' , query: { yh: item.ld,index: index }}" >{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-content">
      <div v-if="categoryPage">
        <carousel v-bind:slides="slides"></carousel>
        <miscellaneous></miscellaneous>
      </div>
      <keep-alive>
        <goods-wall :columnyData="columnyData"></goods-wall>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  // 红点着重
    import { mapGetters } from 'vuex'
    import carousel from '../components/Carousel'
    import miscellaneous from '../components/Miscellaneous'
    import goodsWall from '../components/GoodsWall'

    export default {
        name: "index",
        components: {
          carousel,
          miscellaneous,
          goodsWall
        },
        data: function (){
          // 路由上的params.num 的值通过ajax传递到后台查询出数据显示在页面上
          return {
            state: this.$store.state,
            categoryPage: true,
            cData: "10086",
            searchVal: "查找宝贝"
          }
        },
        computed: {
          ...mapGetters([
            'getMineBaseMsg',
            'getSearch'
          ]),
          category() {
            return this.state.getMineBaseMsg.msg.category
          },
          search(){
            return this.state.getSearch.msg.index
          },
          slides() {
            return this.state.getMineBaseMsg.msg.carousel
          },
          cIndex() {
            return this.state.getMineBaseMsg.msg.index
          },
          cNumber() {
            return this.$route.query.index
          },
          columnyData() {
            this.column()
            return this.cData
          }
        },
        watch: {

        },
        created: function (){
          this.$store.dispatch('getMineBaseApi');
          this.$store.dispatch('getSearch');
          this.column();
          // let top = document.getElementById("app");
          // top.scrollTop = 0;
        },
        methods: {
          column(){
            if(this.$route.params.num !== undefined){
              this.searchVal = this.$route.params.num;
              this.categoryPage = false;
              // this.$watch("search", function () {
                this.cData = this.search
                // console.log(this.state)
              // })
            }else if(this.$route.query.yh === undefined){
              this.searchVal = "查找宝贝";
              this.categoryPage = true;
              this.cData = this.cIndex;
              // console.log("1")
            }else{
              this.searchVal = "查找宝贝";
              this.categoryPage = false;
              if(!this.category){
                this.$watch("category", function () {
                  this.cData = this.category[this.$route.query.index].cont;
                })
              }else{
                this.cData = this.category[this.cNumber].cont;
              }
            }
          }
        }
    }
</script>

<style scoped>
  .index-top{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.8rem;
    background: #ff464e;
    z-index: 100;
  }
  .index-top-logo{
    width: 40%;
    height: 100%;
    background: url("../assets/logo.png") no-repeat;
    background-size: 100% 100%;
    float: left;
  }
  .index-top-search{
    width: 55%;
    height: 0.6rem;
    margin-top: .1rem;
    margin-left: .2rem;
    color: #fff;
    background: #fd7f7f;
    float: left;
  }
  .index-top-search i{
    margin-top: .15rem;
    margin-left: .1rem;
    font-size: .32rem;
    display: block;
    float: left;
  }
  .index-top-search p{
    margin-top: .16rem;
    margin-left: .5rem;
    font-size: .28rem;
  }

  .index-classify{
    overflow: hidden;
    position: fixed;
    top: .8rem;
    width: 100%;
    height: .6rem;
    background: #fff;
    z-index: 99;
  }
  .index-classify-nei{
    overflow-y: hidden;
    overflow-x: scroll;
    width: 100%;
    height: .9rem;
  }
  .index-classify-nei ul{
    padding-top: .16rem;
    overflow: hidden;
    width: 20rem;
  }
  .index-classify-nei ul li{
    padding: 0 .25rem;
    color: #000;
    font-size: .28rem;
    float: left;
    display: block;
  }
  .index-classify-nei ul li a{

  }

  .index-content{
    overflow: hidden;
    margin-top: 1.4rem;
    margin-bottom: 1.05rem;
    background: #eee;
  }
</style>
