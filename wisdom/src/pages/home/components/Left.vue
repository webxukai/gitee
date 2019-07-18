<template>
  <div>
    <div class="wrapper">
      <img
      class="img-head"
        src="http://img4.duitang.com/uploads/item/201407/16/20140716132526_TcyTY.thumb.600_0.jpeg"
        alt
      >
      <span>李老板</span>
      <div class="line"></div>
      <div class="mid">
        <div class="phone">电&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;话：{{list[0]}}</div>
        <div class="number">排&nbsp;位&nbsp;号：{{list[1]}}</div>
        <div class="star">星&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;级：
        <el-rate class="img-star"  v-model="list[2]" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
         </div>
      </div>
    <div class="right">
      <img class="img-code"  src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551367170020&di=3e7daf45dab2799536caa42ddb03b241&imgtype=0&src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp20230382.jpg' alt>
        <div class="good">点赞</div>
        <div class="bad">投诉</div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeLeft",
  data() {
    return {
      list: [18888888888, "088", 4]
    };
  }
};
</script>

<style lang="stylus" scoped>
.wrapper
    position relative
    width 45%
    height 200px
    // background-color #eeeeee
    .img-head
        position absolute
        width 150px
        height 150px
        top 25px
        left 20px
        border-radius 50%
    span
        position absolute
        top 10px
        left 200px
        color #333333
        font-size 25px
    .line
        position absolute
        left 280px
        width 3px
        height 150px
        border-left 2px solid #666666
    .mid
        position absolute
        left 300px
        font-size 20px
        div
            margin-top 10px
            .img-star
                position relative
                top -35px
                left 95px
    .right
        // position absolute
        .img-code
            position absolute
            right  10px
            top 30px
            width 100px
            height 100px
        .good
            position absolute
            right 80px
            bottom 30px
        .bad
            position absolute
            right 20px
            bottom 30px

            

            

</style>

