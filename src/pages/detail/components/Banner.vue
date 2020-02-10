<template>
  <div>
    <div class='banner' @click='handleBannerClick'>
      <img class='banner-img' src='//img1.qunarzz.com/sight/p0/1903/b0/b0a81289b537c934a3.water.jpg_600x330_d1d5b07f.jpg' />
      <div class='banner-info'>
        <div class='banner-tittle'>
          大连圣亚海洋世界(AAAA景区)
        </div>
        <div class='banner-number'>
          <span class='iconfont banner-icon'>&#xe606;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary :imgs='imgs' v-show='showGallary' @close='handleGallaryClose'></common-gallary>
  </div>
</template>

<script>
import CommonGallary from '../../../common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1501/18/181cff1e8af11041.water.jpg_r_800x800_0aa40439.jpg', 'http://img1.qunarzz.com/sight/p0/1908/2c/2c9d8c4b52058f5fa3.img.jpg_r_800x800_d8f08dc5.jpg'],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      console.log('111')
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang='stylus' scoped>
  .banner
    position relative
    overflow hidden
    height: 0
    padding-bottom 55%
    .banner-img
      width: 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
      .banner-tittle
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        height .32rem
        line-height .32rem
        margin-top .14rem
        padding 0 .4rem
        border-radius .2rem
        background rgba(0,0,0, .8)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
