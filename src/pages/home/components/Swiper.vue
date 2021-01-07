<template lang="">
  <div class='wrapper'>
    <swiper :options="swiperOption">
      <swiper-slide v-for='item of swiperList' :key='item.id'>
        <img class='swiper-img' :src='item.imgUrl'/>
      </swiper-slide>
      <!-- <swiper-slide>
        <img class='swiper-img' src=''/>
      </swiper-slide>
      <swiper-slide>
        <img class='swiper-img' src=''/>
      </swiper-slide> -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl:
            'http://gw.alicdn.com/imgextra/i4/O1CN01GLzvXv1tId7Nt2Nn8_!!6000000005879-0-tps-960-360.jpg_q60.jpg_.webp'
        },
        {
          id: '0002',
          imgUrl:
            'http://gw.alicdn.com/imgextra/i3/O1CN01JftrMf1i3YIz5xbbk_!!6000000004357-0-tps-960-360.jpg_q60.jpg_.webp'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff !important;
}

.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 37.5%;
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>
