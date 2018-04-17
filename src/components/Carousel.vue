<!--轮播组件-->
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <a class="swiper-slide" v-for="str in slides"
        :style="{ backgroundImage: 'url(' + str.imgPath + ')' }" :href="str.link">
      </a>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css';
  export default {
    // 异步加载数据问题
    data(){
      return {
        s: false,
        a: [
          {
            imgPath: "../static/img/carousel/pic1.jpg",
            link: "http://www.baidu.com"
          },{
            imgPath: "../static/img/carousel/pic2.png",
            link: "http://www.zhihu.com"
          },{
            imgPath: "../static/img/carousel/pic3.jpg",
            link: "http://www.jianshu.com"
          },{
            imgPath: "../static/img/carousel/pic4.jpg",
            link: "http://www.youku.com"
          }
        ]
      }
    },
    props: {
      // 通过父层来获取要轮播的图片
      slides: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    mounted() {
      // 当数据不是本地数据时，因为vue是异步操作的，所1以需要使用vm.$watch(vue组件中是this.$watch)来确保数据已经加载完成，再
      // 执行代码，一个问题，在开发中，热加载后轮播组件就会失效，需要刷新页面
      this.$watch('slides',function () {
        var swiper = new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          loop: true,
          speed: 600,
          autoplay: 4000,
          onTouchEnd(){
            swiper.startAutoplay()
          }
        })
      })
    },
    computed: {
      slideImg(){
        this.$watch('slides', function () {
          console.log(this.slides)
          this.s = true
        })
        return this.slides
      }
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .swiper-container {
    width: 100%;
    height: 2.44rem;
  }
  .swiper-container .swiper-wrapper {
    width: 100%;
    height: 100%;
  }
  .swiper-container .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    display: block;
  }
  .swiper-container .swiper-slide img {
    width: 100%;
    height: 100%;
  }
  .swiper-container .swiper-pagination-bullet {
    width: 0.33rem;
    height: 0.33rem;
    display: inline-block;
    background: #7c5e53;
  }
  .swiper-pagination-white{
    line-height: 0.02rem;
  }
</style>
