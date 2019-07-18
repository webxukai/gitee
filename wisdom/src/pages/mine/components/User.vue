<template>
  <div>
    <div class="wrapper">
      <div class="title">
        <div class="item" v-for="(item,index) of list2" :key="index">{{item}}</div>
      </div>
      <div class="title-two">
        <div class="item" v-for="(item,index) of list3" :key="index">{{item}}</div>
      </div>
      <div class="item" v-for="(item,index) of list5" :key="index">
        <img :src="item.img" alt>
        <div>{{item.name}}</div>
        <div>{{item.numb}}</div>
        <div>{{item.floor}}</div>
        <div>
          <el-rate v-model="item.score" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
        </div>
        <div>{{item.prove}}</div>
        <div>{{item.evaluate}}</div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuUser",
  data() {
    return {
        list2:['肉类','蔬菜','水产','冷鲜禽','更多'],
        list3:['照片','姓名','排位号','楼层','信用评分','证照','评价'],
        list5: [
        {
          img: "http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png",
          name: "张三",
          numb: "017",
          floor: "一层",
          score: 3,
          prove:"查看",
          evaluate:"点击评论"
        },
        {
          img: "http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
          name: "张四",
          numb: "037",
          floor: "二层",
          score: 1,
          prove:"查看",
          evaluate:"点击评论"
        },
        {
          img: "http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
          name: "张五",
          numb: "0171",
          floor: "五层",
          score: 5,
          prove:"查看",
          evaluate:"点击评论"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.wrapper
    position relative
    width 100%
    padding 10px
    .title
        display flex
        justify-content space-around
        .item
            width 150px
            height 60px
            border-radius 10px
            background-color rgb(255,70,70)
            color #ffffff
            text-align center
            line-height 60px
            font-size 24px
    .title-two
        display flex
        justify-content space-around
        .item
            width 150px
            height 40px
            border-radius 10px
            text-align center
            line-height 40px
    .item
        display flex
        justify-content space-around
        img
            margin-left 45px
            margin-right 45px
            width 60px
            height 60px
        div
            width 150px
            height 60px
            text-align center
            line-height 60px
</style>

