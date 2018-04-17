<!--首页内容组件-->
<template>
  <div class="mis-package">
    <div class="mis-clearfix">
      <div style="border-left: none">
        <router-link :to="{ name: 'PopularItems', params: { title: '好券直播'} }">
          <!--to="/popular-items"-->
          <i class="iconfont icon-02"></i>
          好券直播
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'Activities', params: { title: '促销活动'} }">
          <i class="iconfont icon-typecar109"></i>
          促销活动
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'A9k9', params: { title: '9块9包邮'} }">
          <i class="iconfont icon-99"></i>
          9块9包邮
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'A20k', params: { title: '20元封顶'} }">
          <i class="iconfont icon-20"></i>
          20元封顶
        </router-link>
      </div>
    </div>
    <div class="mis-entry">
      提示：使用手机淘宝打开体验更流畅
      <a class="mis-start-up-tb" @click="startTaobao">
        <!--href="http://sj.qq.com/myapp/detail.htm?apkName=com.taobao.taobao"-->
        立即打开
      </a>
    </div>
    <div class="mis-specialColumn">
      <div class="mis-left">
        <router-link class="mis-link mis-link1" to="column/?yh=mrxp"></router-link>
      </div>
      <div class="mis-right">
        <router-link class="mis-link mis-link2" to="column/?yh=jhs"></router-link>
        <router-link class="mis-link mis-link3" to="column/?yh=thq"></router-link>
        <router-link class="mis-link mis-link4" to="column/?yh=tttj"></router-link>
      </div>
    </div>
    <div class="mis-download">
      <a @click="downloadApp">下载惠淘党APP</a>
    </div>
    <div class="mis-update">
      <p class="mis-u-p">每天10点上新</p>
      <div class="mis-cond-box">
        <div class="mis-cond"><i class="iconfont icon-301"></i>精选好货</div>
        <div class="mis-cond"><i class="iconfont icon-youhuixinxi"></i>内部优惠券</div>
        <div class="mis-cond"><i class="iconfont icon-chaibaoguoqujian"></i>全场包邮</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "miscellaneous",
        data(){
          return {
            to: ''
          }
        },
        methods: {
          startTaobao(){
            if(this.isInWx){
              alert("请在浏览器中打开")
            }else if(this.isInIos){
              // window.location.href = "https://itunes.apple.com/cn/app[name]/id[id]";
              window.location.href = "https://itunes.apple.com/cn/app/%E6%B7%98%E5%AE%9D-%E7%A7%BB%E5%8A%A8%E8%B4%AD%E7%89%A9-%E7%94%9F%E6%B4%BB%E7%A4%BE%E5%8C%BA/id387682726?mt=8"

            }else{
              var hasApp = true, t = 1000;
              setTimeout(function(){
                if(!hasApp){
                  alert("没有安装淘宝")
                  window.location.href = "http://sj.qq.com/myapp/detail.htm?apkName=com.taobao.taobao"
                }
              },2000)
              var t1 = Date.now();
              window.location.href = "taobao://";
              setTimeout(function () {
                var t2 = Date.now();
                hasApp = !(!t1 || t2 - t1 < t + 150);
              }, t);
            }
          },
          downloadApp(){
            // alert("要开始下载了")
            window.location.href = "http://acj3.pc6.com/pc6_soure/2018-2/com.taobao.taobao_182.apk"
          }
        },
        computed: {
          isInIos(){
            var userAgentInfo = navigator.userAgent,
              Agents = ["iPhone" , "iPad" , "iPod"];

            for(var v = 0; v < Agents.length; v++){
              if(userAgentInfo.indexOf(Agents[v]) > 0 ){
                return true
              }
            }
            return false
          },
          isInWx(){
            var agent = window.navigator.userAgent.toLowerCase();
            console.log(agent.match(/MicroMessenger/i) == 'micromessenger')
            return agent.match(/MicroMessenger/i) == 'micromessenger'
          }
        }
    }
</script>

<style scoped>
  /*.mis-package{*/
    /*background: #eee;*/
  /*}*/
  /*四个小项*/
  .mis-clearfix{
    width: 100%;
    height: 1.1rem;
    background: #fff;
    border-bottom: 1px solid #eee;
  }
  .mis-clearfix div{
    width: 25%;
    height: 100%;
    float: left;
    font-size: .20rem;
    color: #5e5e5e;
    text-align: center;
    box-sizing: border-box;
    border-left: 1px solid #eee;
  }
  .mis-clearfix div i{
    font-size: .44rem;
    color: red;
    margin: .1rem auto;
    display: block;
  }

  /*打开淘宝*/
  .mis-entry{
    position: relative;
    height: .8rem;
    line-height: .8rem;
    text-indent: .2rem;
    font-size: .20rem;
    color: #5e5e5e;
    background: #fff;
    border-bottom: 1px solid #eee;
  }
  .mis-start-up-tb{
    position: absolute;
    top: .14rem;
    right: .5rem;
    padding: .1rem .2rem;
    line-height: normal;
    border: 1px solid #f50;
    border-radius: 5%;
    color: #f50;
    text-indent: 0;
    display: block;
  }

  /*专栏*/
  .mis-specialColumn{
    width: 100%;
    height: 3.2rem;
    background: #fff;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
  }
  .mis-specialColumn .mis-link {
    background-size: 100% 100%;
    box-sizing: border-box;
    display: block;
    float: left;
  }
  .mis-left{
    width: 40%;
    height: 100%;
    border-right: 1px solid #eee;
    box-sizing: border-box;
    float: left;
  }
  .mis-link1{
    width: 100%;
    height: 100%;
    background: url("../../static/img/meirixinpin.png");
  }
  .mis-link2{
    width: 100%;
    height: 44%;
    background: url("../../static/img/juhuasuan.png");
    border-bottom: 1px solid #eee;
  }
  .mis-link3{
    width: 50%;
    height: 56%;
    background: url("../../static/img/taohaiqiang.png");
    border-right: 1px solid #eee;
  }
  .mis-link4{
    width: 50%;
    height: 56%;
    background: url("../../static/img/tiantiantejia.png");
  }
  .mis-right{
    width: 60%;
    height: 100%;
    box-sizing: border-box;
    float: left;
  }

  /*下载*/
  .mis-download{
    overflow: hidden;
    width: 100%;
    height: 0.8rem;
    margin: 0;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
  }
  .mis-download a{
    width: 80%;
    height: .4rem;
    line-height: .4rem;
    margin: .2rem auto;
    border: 1px solid red;
    font-size: .26rem;
    color: red;
    text-align: center;
    background: #fff;
    display: block;
  }

  /*更新*/
  .mis-update{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 1.2rem;
    background: #fff;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
  }
  .mis-u-p{
    width: 100%;
    margin-top: .3rem;
    height: .4rem;
    text-align: center;
    font-size: .24rem;
    color: #3a3a3a;
  }
  .mis-u-p:before{
    content: "";
    display: block;
    margin-left: 1rem;
    margin-top: .1rem;
    width: 1.2rem;
    height: 0;
    border-top: 1px dotted #3a3a3a;
    float: left;
  }
  .mis-u-p:after{
    content: "";
    display: block;
    margin-right: 1rem;
    margin-top: .1rem;
    width: 1.2rem;
    height: 0;
    border-top: 1px dotted #3a3a3a;
    float: right;
  }

  .mis-cond-box{
    width: 75%;
    height: .5rem;
    margin: 0 auto;
    /*background: red;*/
    font-size: .24rem;
  }
  .mis-cond{
    float: left;
    padding: 0 .08rem;
    line-height: .25rem;
  }
  .mis-cond i{
    color: #1296db;
    padding-right: .07rem;
  }
</style>
