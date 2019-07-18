<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="(item,index) of list" :key="index"><img :src="item" alt=""></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
        list:['http://img3.imgtn.bdimg.com/it/u=1352604164,3633195995&fm=26&gp=0.jpg','http://img3.imgtn.bdimg.com/it/u=1352604164,3633195995&fm=26&gp=0.jpg','http://img3.imgtn.bdimg.com/it/u=1352604164,3633195995&fm=26&gp=0.jpg'],
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
        pagination:'.swiper-pagination',//增加滑动时索引
        loop:true, //支持轮播
        autoplay:true,
          swiperSlides:[]
        }

    };
  }
};
</script>

<style lang="stylus" scoped>
.wrapper
    overflow hidden
    width 50%
    height 0
    padding-bottom : 31.25%
    img 
        width 100%
</style>
