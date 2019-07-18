<template>
  <div>
    <div class="content">
      <div class="wrapper">
        <div class="item" v-for="item of list" :key="item">{{item}}</div>
      </div>
      <div class="wrapper">
        <div class="item-bot">{{list2[0]}}</div>
        <div class="item-bot">{{list2[1]}}</div>
        <div class="item-bot">{{list2[2]}}</div>
        <div class="item-bot">{{list2[3]}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {
      list: ["菜名", "重量", "单价", "金额"],
      list2: ["猪肉", "0.01 公斤", "0.001元", "0.00元"]
    };
  }
};
</script>

<style lang="stylus" scoped>
    .wrapper {
    display: flex;
    margin-bottom: 5px;
    justify-content: space-around;
    width: 100%;
    height: 100px;

    .item {
        width: 24%;
        height: 100px;
        background-color: rgb(12, 115, 180);
        color: #ffffff;
        font-size: 35px;
        text-align: center;
        line-height: 100px;
        border-radius: 20px;
    }

    .item-bot {
        width: 24%;
        height: 100px;
        background-color: #ffffff;
        color: #333;
        font-size: 35px;
        text-align: center;
        line-height: 100px;
        border-radius: 20px;
  }
}
</style>


