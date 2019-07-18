<template>
  <div>
    <el-container>
      <el-header>
        <HomeHeader />
      </el-header>
      <el-container>
        <el-aside width="200px">

          <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">个人信息管理</span>
              </template>
              <el-menu-item-group>

                <el-menu-item index="1-1">个人信息</el-menu-item>
                <!-- <el-menu-item index="1-2">个人信息</el-menu-item> -->
              </el-menu-item-group>
            </el-submenu>

           <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">商户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">商户自助关联</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

           <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">设备管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">设备解绑</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

          </el-menu>
        </el-aside>
          <div class="wrapper-home-person-infor">
            <!-- <HomePersonInfor  class="home-person-infor"/> -->
          <HomeMerchantAssociation />

          </div>
      </el-container>
    </el-container>

    <router-link to="/">home</router-link>
    <router-link to="/login">login</router-link>
  </div>
</template>

<script>
import axios from "axios";
import HomeHeader from "./components/Header"
import HomeMerchantAssociation from "./components/MerchantAssociation"
import HomePersonInfor from "./components/PersonInfor"
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeMerchantAssociation,
    HomePersonInfor
  },
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style scoped>
  body {
    /* position: relative;
    width: 100%;
    height: 100%; */
  }
  .el-aside{
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-submenu{
    background-color: #bbbbbb
  }
  .el-menu-item{
    background-color: #eeeeee
  }
  .el-menu-item-group__title{
    padding: 0
  }
  .el-header{
    padding: 0;
  }
  .el-menu{
    position: relative;
    width: 100%;
    height: 100%;
   background-color: #00bcd4
  }
.wrapper-home-person-infor{
  position: absolute;
  left: 200px;
  width: 100%;
  height: 100%
}
</style>
