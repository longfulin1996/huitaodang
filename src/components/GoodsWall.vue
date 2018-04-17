<!--商品列表组件-->
<template>
    <ul class="column">
      <router-link tag="li" v-for="(item, index) in columnyData" :to="'/view/' + item.id" :key="index">
        <img :src="item.images">
        <div class="col-info">
          <p>{{item.title}}</p>
          <div class="col-o">
            <span class="col-baoyou">
              <img v-if="item.platform === 'TB'" class="col-baoyou-img" src="../../static/img/TB2acSL.png">
              <img v-if="item.platform === 'TM'" class="col-baoyou-img" src="../../static/img/TB2xRCU.png">
              包邮
            </span>
            淘宝价 &nbsp￥{{ item.price }}
          </div>
          <div class="col-station">
            &nbsp
          </div>
          <div class="col-p">
            <span class="col-gradient">劵后</span>
            <span class="col-sy">￥</span><span class="col-after">{{ item.price - item.coupon }}</span>
            <span class="col-right col-gradient">{{ item.coupon }}元劵</span>
          </div>
        </div>
      </router-link>
    </ul>
</template>

<script>

    export default {
        name: "goods-wall",
        props: ['columnyData'],
        methods: {
          // detailedView(){
          //   console.log("你点开了一个商品")
          //
          // }
        },
        mounted(){
          console.log(this.columnyData)
        }
    }
</script>

<style scoped>
  .column{
    margin: .1rem .1rem;
    font-size: .26rem;
  }
  .column li{
    position: relative;
    width: 100%;
    height: auto;
    margin-top: .1rem;
    background-color: #fff;
    display: block;
  }
  .column li img{
    width: 2.14rem;
    height: 2.14rem;
    padding: .1rem;
  }
  .column .col-info{
    position: absolute;
    top: 0;
    width: 60%;
    padding-left: 2.5rem;
  }
  .col-info p{
    padding-right: .04rem;
    line-height: 2;
    white-space:nowrap;
    text-overflow:ellipsis;
    -o-text-overflow:ellipsis;
    overflow:hidden;
  }
  .col-info .col-o{
    margin-top: .1rem;
    font-size: .2rem;
    line-height: .3rem;
  }
  .col-o .col-baoyou{
    position: relative;
    width: .85rem;
    height: .3rem;
    margin-right: .2rem;
    border: 1px solid #ff5500;
    text-indent: .3rem;
    color: #ff5500;
    display: inline-block;
    box-sizing: border-box;
  }
  .col-baoyou .col-baoyou-img{
    position: absolute;
    left: 0;
    width: .3rem;
    height: .3rem;
    padding: 0;
  }
  .col-info .col-station{
    width: 100%;
    line-height: .9rem;
  }
  .col-info .col-p{
    position: relative;
    width: 100%;
    height: .5rem;
    color: red;
  }
  .col-p .col-gradient{
    padding: .04rem .14rem;
    font-size: .22rem;
    color: #fff;
    background: linear-gradient(90deg,#f80,#ff5400);
    /*90deg表示渐变从左侧开始*/
  }
  .col-p .col-sy{
    font-size: .18rem;
    text-indent: .1rem;
    display: inline-block;
  }
  .col-p .col-after{
    font-size: .30rem;
    font-weight: 900;
    text-indent: .1rem;
    display: inline-block;
  }
  .col-p .col-right{
    position: absolute;
    padding: .07rem .10rem;
    top: -.01rem;
    right: .2rem;
    font-size: .24rem;
    display: block;
  }
</style>
