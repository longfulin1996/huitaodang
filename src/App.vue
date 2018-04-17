<template>
  <div id="app">
    <link rel="stylesheet" href="../static/css/iconfont.css">
    <router-view></router-view>
    <div class="bottom-menu" v-if="bottomShow">
      <ul>
        <li v-for="(item, index) in menu" v-bind:style="{'color': index == currentPage ? 'red' : '#5e5e5e'}">
          <router-link :to="item.xTo">
            <i class="iconfont" v-bind:class="item.xLink"></i>
            {{ item.pName }}
          </router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  // menu变化按照路由名变化来做改变
  // 未做，重启时从这里起步
  export default {
    name: 'App',
    // props: ['currentPage'],
    data: function(){
      return {
        // currentPage: 0,
        menu: [
          {
            xLink: 'icon-home',
            xTo: '/',
            pName: '首页'
          },{
            xLink: 'icon-jingpin',
            xTo: '/boutique',
            pName: '种草'
          },{
            xLink: 'icon-remind',
            xTo: '/',
            pName: '京东秒杀'
          },{
            xLink: 'icon-favor',
            xTo: '/collection',
            pName: '收藏'
          }
        ]
      }
    },
    components:{

    },
    computed: {
      currentPage(){
        let name = this.$route.name
        switch (name) {
          case 'Index':
            return 0
            break
          case 'Boutique':
            return 1
            break
          case 'Jingdong':
            return 2
            break
          case 'Collection':
            return 3
            break
          // default:
          //   return false
        }
      },
      bottomShow(){
        if(this.$route.params.num){
          return false
        }else{
          return true
        }
      }
    },
    created: function(){
      // console.log(document.body.scrollTop)
      // console.log(document)
      // document.body.scrollTop = 0;
    }
  }
</script>

<!--huitaodang分components目录下有三个index，boutique,collection，-->
<!--通过axios获取的数据保存在vuex,index，boutique显示，收藏内容保存在vuex，在collection中。-->

<style>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video{
    margin: 0;
    padding: 0;
    border: 0px;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section{
    display: block;
  }
  html,body{
    overflow-x: hidden;
  }
  body{
    line-height: 1;
  }
  ol, ul{
    list-style: none;
  }
  blockquote, q{
    quotes:  none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after{
    content: '';
    content: none;
  }
  table{
    border-collapse: collapse;
    border-spacing: 0;
  }
  a{
    color: inherit;
    text-decoration: none;
  }

  .bottom-menu{
    position: fixed;
    width: 100%;
    height: 1rem;
    bottom: 0;
    left: 0;
    background: #fff;
  }
  .bottom-menu ul{
    height: 100%;
    border-top: 2px solid #e7e7e7;
    box-shadow: 0 4px 12px #666;
    box-sizing: border-box;
  }
  .bottom-menu ul li{
    width: 25%;
    height: 100%;
    border-right: 1px solid #e7e7e7;
    box-sizing: border-box;
    text-align: center;
    color: #5e5e5e;
    float: left;
    display: block;
  }
  .bottom-menu a{
    width: 2rem;
    height: 1rem;
    vertical-align: middle;
    text-align: center;
    display: table-cell;
    font-size: 0.16rem;
  }
  .bottom-menu a i{
    margin-bottom: .08rem;
    font-size: 0.38rem;
    vertical-align: inherit;
    display: block;
  }
  .bottom-menu a p{
    margin-top: .05rem;
    font-size: .14rem;
  }
  .clear-float{
    clear: both;
    display: none;
  }
  .count-down-site{
    padding: 0 .05rem;
    color: #ff464e;
  }
</style>
