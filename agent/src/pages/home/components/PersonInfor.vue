<template>
  <div>
    <div class="wrapper">
      <el-row>
        <el-col :span="6">
          <div class="item-text" v-for="(item,index) of list" :key="index">{{item}}:</div>
          <div class="item-input" v-for="(item,index) of list1" :key="index">222</div>

        </el-col>


      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePersonInfor",
  data(){
      return{
          list:['头像','公司名称','用户名称','联系电话','电子邮箱','客服电话','审核状态','创建时间'],
          list1:[]
      }
  }
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}
.item{
    background-color: yellowgreen
}

</style>
