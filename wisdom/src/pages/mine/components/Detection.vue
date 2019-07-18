<template>
  <div>
    <div class="wrapper">
      <div class="title">
        <div class="item" v-for="(item,index) of list2" :key="index">{{item}}</div>
      </div>
      <div class="title-two">
        <div class="item" v-for="(item,index) of list3" :key="index">{{item}}</div>
      </div>
      <div class="item" v-for="(item,index) of list4" :key="index">
        <div>{{item.userName}}</div>
        <div>{{item.good}}</div>
        <div>{{item.date}}</div>
        <div>{{item.result}}</div>
        <div>
          <el-rate v-model="item.like" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuDetection",
  data(){
      return{
        list2:['选择日期','2018-12-06'],
        list3:['商户姓名','商品名称','检测项目','日期','检测结果'],
        list4:[{
            userName:"张三",
            good:"猪肉",
            testItem:"14.00",
            date:"0",
            result:2,
        },
        {
            userName:"张三",
            good:"牛肉",
            testItem:"15.00",
            date:"0",
            result:3,
        },{
            userName:"张三",
            good:"五花肉",
            testItem:"33.00",
            date:"0",
            result:5,
        }]
      }
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
            width 150px
            height 60px
        div
            width 150px
            height 60px
            text-align center
            line-height 60px

    
</style>

