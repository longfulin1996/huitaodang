<!--商品细览页-->
<template>
  <div>
    <div class="loading" id="d-loading">
      <img src="/static/img/loading.gif">
    </div>
    <div class="detail-top">
      <p @click="this.returnPage" class="detail-top-return">
        <i class="iconfont icon-back"></i>
      </p>
      <div class="detail-top-name">商品详情</div>
      <router-link to="/" class="detail-top-index">
        <i class="iconfont icon-home"></i>
      </router-link>
    </div>
    <div class="detail-content">
      <img class="detail-content-item-images " :src="viewData.img">
      <div class="detail-content-platform">
        <div v-if="viewData.platform === 'TM'"><img src="/static/img/TB2xRCU.png">&nbsp;| &nbsp;天猫</div>
        <div v-if="viewData.platform === 'TB'"><img src="/static/img/TB2acSL.png">&nbsp;| &nbsp;淘宝</div>
      </div>
      <div class="detail-content-name">
        {{ viewData.name }}
      </div>
      <div class="detail-content-price1">
        <span>原价：{{ viewData.price }}元</span>
        <span><b>{{ viewData.coupon }}</b>元券</span>
        <span :value="viewData.tbPassword">复制淘口令</span>
        <!--<div class="clear-float"></div>-->
      </div>
      <div class="detail-content-price2">
        券后价：{{ viewData.price - viewData.coupon }} 元
      </div>
      <div class="detail-content-count-down" id="detail-content-count-down">
        <!--离结束还有：{{ a }}-->
      </div>
      <div class="detail-content-echarts">
        <h1>价格趋势</h1>
      </div>
      <div class="detail-content-reason">
        <h1>推荐理由</h1>
        <p id="detail-content-reason-p"></p>
      </div>
      <div class="detail-content-other">
        <h1>其他优惠券</h1>
        <ul>
          <li>
            <span class="w-30">优惠券</span>
            <span class="w-40">有效期</span>
            <span class="w-15">限领</span>
            <span class="w-15">领取</span>
          </li>
          <li v-for="item in viewData.other">
            <span class="w-30">{{ item.name }}</span>
            <span class="w-40">{{ item.term }}</span>
            <span class="w-15">{{ item.limitCollar }}</span>
            <span class="w-15 o-red" >领取</span>
          </li>
        </ul>
      </div>
      <div class="detail-content-recommend">
        <h1>推荐宝贝</h1>
        <goods-wall :columnyData="viewData.recommend"></goods-wall>
      </div>
    </div>
    <div class="detail-bottom">
      <div class="detail-bottom-collection"><i class="iconfont icon-favor"></i>收藏</div>
      <!--icon-favorfill-->
      <div class="detail-bottom-purchase">领券购买</div>
    </div>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import goodsWall from '../components/GoodsWall'

    var timer1;
    export default {
        name: "detailed-view",
        data(){
          return {
            state: "",
            vData: "",
            vTime: "",
            id: this.$route.params.id
          }
        },
        components:{
          goodsWall
        },
        created(){
          this.$store.dispatch('getViewApi');
        },
        mounted(){
          this.countDown();
          this.$watch('viewState', function () {
            setTimeout(function(){
              document.getElementById("d-loading").style.display = "none";
            },1000)
          });
        },
        beforeDestroy(){
          window.clearInterval(timer1);
        },
        computed: {
          ...mapGetters([
            'getViewApi'
          ]),
          viewState(){
            this.state = this.$store.state.getViewApi.msg;
            return this.state
          },
          viewData(){
            this.$watch('viewState', function () {
              console.log(this.viewState)
              this.vData = this.viewState
            })
            return this.vData
          }
        },
        methods: {
          countDown(){
            let ab, reason;
            this.$watch('viewState', function () {
              ab = this.viewData.endTime
              reason = this.viewData.reason
            })
            timer1 = setInterval(function () {
              var surplus = "离结束还有：";
              ab = ab - 1;
              if(parseInt(ab / 86400) > 1){
                surplus += "<span class='count-down-site'>" + parseInt(ab / 86400) + "</span>天";
              }
              if(parseInt(ab % 86400 / 3600) > 1){
                surplus += "<span class='count-down-site'>" + parseInt(ab % 86400 / 3600) + "</span>小时"
              }
              if(parseInt(ab % 86400 % 3600 / 60) > 1){
                surplus += "<span class='count-down-site'>" + parseInt(ab % 86400 % 3600 / 60) + "</span>分钟"
              }
              if(ab % 86400 % 3600 % 60 >= 0){
                surplus += "<span class='count-down-site'>" + ab % 86400 % 3600 % 60 + "</span>秒"
              }else{
                surplus += "抱歉，优惠券已过期！"
              }
              document.getElementById("detail-content-count-down").innerHTML = surplus;
              document.getElementById("detail-content-reason-p").innerHTML = reason;
            },1000)
          },
        }
    }
</script>

<style scoped>
  .loading{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #fff;
    z-index: 1000;
  }
  .loading img{
    margin: 45vh 45vw;
  }
  h1{
    font-size: .30rem;
    font-weight: 900;
  }
  .detail-top{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: .8rem;
    line-height: .8rem;
    background: #ff464e;
    text-align: center;
    font-size: .30rem;
    color: #fff;
    z-index: 100;
  }
  .detail-top-return{
    position: absolute;
    top: 0;
    left: 0;
    width: .8rem;
    height: .8rem;
    display: block;
    z-index: 2;
  }
  .detail-top-name{
    width: 100%;
    /*text-align: center;*/
    float: left;
    z-index: 1;
  }
  .detail-top-index{
    position: absolute;
    top: 0;
    right: 0rem;
    width: .8rem;
    height: .8rem;
    display: block;
    z-index: 3;
  }
  .detail-top .iconfont{
    font-size: .40rem;
  }

  .detail-content{
    overflow: hidden;
    margin-top: 0.8rem;
    margin-bottom: 1.05rem;
    padding: 0 .2rem .1rem;
    background: #fff;
    font-size: .24rem;
    color: #5e5e5e;
  }
  .detail-content .detail-content-item-images{
    width: auto;
    max-width: 4.4447rem;
    height: 4.4447rem;
    margin: 0 auto;
    display: block;
  }
  .detail-content .detail-content-platform{
    margin-top: .2rem;
  }
  .detail-content .detail-content-platform img{
    width: .3rem;
    height: .3rem;
    float: left;
  }
  .detail-content .detail-content-name{
    margin-top: .2rem;
    line-height: .3rem;
    font-weight: 700;
  }

  .detail-content .detail-content-price1{
    position: relative;
    margin-top: .2rem;
  }
  .detail-content .detail-content-price1:after {
    content: " ";
    display: block;
    height: 0;
    clear: both;
  }
  .detail-content-price1  span{
    display: block;
    float: left;
    box-sizing: border-box;
  }
  .detail-content-price1  span:nth-child(1){
    line-height: .5rem;
  }
  .detail-content-price1  span:nth-child(2){
    line-height: .3rem;
    margin-top: .1rem;
    margin-left: .3rem;
    border: 1px solid #40d3b7;
    background: #40d3b7;
    color: #fff;
    text-align: center;
  }
  .detail-content-price1  span:nth-child(2) b{
    padding: .01rem .1rem;
    color: #40d3b7;
    text-align: center;
    background: #ffffff;
    display: block;
    float: left;
  }
  .detail-content-price1  span:nth-child(3){
    position: absolute;
    top: 0;
    right: 0;
    line-height: .34rem;
    padding: .08rem .1rem;
    border: 1px solid #ff464e;
    color: #ff464e;
  }

  .detail-content .detail-content-price2{
    font-size: .32rem;
    color: #ff464e;
    margin-top: .2rem;
    clear: left;
  }

  .detail-content .detail-content-count-down{
    margin-top: .3rem;
  }

  .detail-content .detail-content-echarts{
    margin-top: .3rem;
  }

  .detail-content .detail-content-reason{
    margin-top: .3rem;
  }
  .detail-content-reason p{
    line-height: .3rem;
    margin-top: .2rem;
    padding: .1rem;
    background: #eee;
  }

  .detail-content .detail-content-other{
    margin-top: .3rem;
  }
  .detail-content-other:after {
    content: " ";
    display: block;
    height: 0;
    clear: both;
  }
  .detail-content-other ul{
    width: 100%;
    margin-top: .2rem;
  }
  .detail-content-other li span{
    height: .5rem;
    line-height: .5rem;
    text-align: center;
    float: left;
    display: block;
  }
  .detail-content-other li:nth-child(1) span{
    background: #eee;
  }
  .detail-content-other li .w-40{
    width: 40%;
  }
  .detail-content-other li .w-30{
    width: 30%;
  }
  .detail-content-other li .w-15{
    width: 15%;
  }
  .detail-content-other li .o-red{
    color: #ff464e;
  }

  .detail-content .detail-content-recommend{
    margin-top: .3rem;
  }

  .detail-bottom{
    position: fixed;
    width: 100%;
    height: .8rem;
    bottom: 0;
    left: 0;
    background: #fff;
    font-size: .26rem;
    border-top: 2px solid #e7e7e7;
    -webkit-box-shadow: 0 4px 12px #666;
    box-shadow: 0 4px 8px #666;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .detail-bottom .detail-bottom-collection{
    width: 1.2rem;
    line-height: .8rem;
    border-right: 1px solid #e7e7e7;
    text-align: center;
    color: #5e5e5e;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    float: left;
  }
  .detail-bottom .detail-bottom-collection i{
    color: #ff464e;
  }
  .detail-bottom .detail-bottom-purchase{
    width: 1.8rem;
    line-height: .8rem;
    border-right: 1px solid #e7e7e7;
    text-align: center;
    color: #ffffff;
    background: #ff464e;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    float: right;
  }
</style>
