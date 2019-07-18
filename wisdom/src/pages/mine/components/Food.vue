<template>
  <div>
    <div class="wrapper">
        
      <div class="title">
        <div class="item" v-for="(item,index) of list2" :key="index" @click="lookDetaile(index)" :class="{ active: index == currentIndex }">{{item}}</div>
      </div>
      <div class="title-two">
        <div class="item" v-for="(item,index) of list3" :key="index">{{item}}</div>
        
      </div>
        <div class="item" v-for="(item,index) of list4" :key="index">
            <img :src="item.img" alt="">
            <div>{{item.good}}</div>
            <div>￥{{item.price}}元/斤</div>
            <div>{{item.trend}}</div>
            <div>
                <el-rate
                    v-model="item.like"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                </el-rate>
            </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "MenuFood",
  data(){
      return{
        list2:['肉类','蔬菜','水产','冷鲜禽','更多'],
        list3:['图片','商品名','指导价','价格趋势','热销程度'],
        list4:[{
            img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=478227035,1871079242&fm=27&gp=0.jpg",
            good:"猪肉",
            price:"14.00",
            trend:"0",
            like:2,
        },
        {
            img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=478227035,1871079242&fm=27&gp=0.jpg",
            good:"牛肉",
            price:"15.00",
            trend:"0",
            like:3,
        },{
            img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1593672151,4086650796&fm=27&gp=0.jpg",
            good:"五花肉",
            price:"33.00",
            trend:"0",
            like:5,
        }],
        currentIndex:0

      }
  },
  methods:{
    lookDetaile(index){
      console.log(222)
      this.currentIndex = index
      console.log(this.currentIndex)
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
            &.active
              background-color #ff0000
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

