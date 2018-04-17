<!--每日新品等专栏的列表页-->
<template>
    <div>
      <div class="column-head">
          {{ columnName }}
      </div>
      <div class="column-goodsWall">
        <keep-alive>
          <goods-wall :columnyData="columnyData"></goods-wall>
        </keep-alive>
      </div>
    </div>
</template>

<script>
    // mapGetters是vuex中的变量
    import { mapGetters } from 'vuex'
    import GoodsWall from '../components/GoodsWall'
    export default {
        name: "column",
        components: {
          GoodsWall
        },
        data(){
          return {
            id: this.$route.query.yh,
            state: "",
            cName: "",
            cCommodity: "",
            displayI: "0"
          }
        },
        created(){
          this.$store.dispatch('getMineBaseApi');
        },
        computed: {
          ...mapGetters([
            'getMineBaseMsg'
          ]),
          column(){
              this.state = this.$store.state.getMineBaseMsg.msg.column
              return this.state
          },
          columnName(){
            this.$watch('column', function () {
              for(var i = 0; i < this.column.length; i++){
                if(this.column[i].id === this.id){
                  this.cName = this.column[i].name
                  this.displayI = i
                }
              }
            })
            return this.cName
          },
          columnyData(){
            this.$watch('column', function () {
              this.cCommodity = this.column[this.displayI].commodity
            })
            return this.cCommodity
          }
        },
        methods: {

        }
    }
</script>

<style scoped>
  .column-head{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: .8rem;
    line-height: .8rem;
    border-bottom: 2px solid #eee;
    font-size: .36rem;
    letter-spacing: .04rem;
    color: #8a8a8a;
    text-align: center;
    box-sizing: border-box;
  }
  .column-goodsWall{
    overflow: hidden;
    margin-top: 0.8rem;
    margin-bottom: 1.05rem;
  }
</style>
