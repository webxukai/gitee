<template>
  <div>
    <div class="wrapper">
      <div>服务商户列表</div>
      <button @click="merchantBind">自助绑定商户</button>
      <HomeMerchantBind/>
      <el-table border style="width: 100%">
        <el-table-column fixed prop="date" label="商户账号" width="150"></el-table-column>
        <el-table-column prop="name" label="真实姓名" width="120"></el-table-column>
        <el-table-column prop="province" label="手机号" width="120"></el-table-column>
        <el-table-column prop="city" label="电子邮箱" width="120"></el-table-column>
        <el-table-column prop="address" label="商铺数量" width="300"></el-table-column>
        <el-table-column prop="zip" label="设备数量" width="120"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import HomeMerchantBind from "./MerchantBind";
export default {
  name: "HomeMerchantAssociation",
  components: {
    HomeMerchantBind
  },
  data() {
    return {};
  },
  methods: {
    merchantBind() {}
  }
};
</script>

<style>
</style>
