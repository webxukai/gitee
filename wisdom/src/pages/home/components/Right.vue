<template>
  <div>
    <el-row>
      <el-col :span="3" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 3 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=622210080,1962457389&fm=27&gp=0.jpg"
            class="image"
          >
          <div style="padding: 14px;">
            <span>猪肉</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HeaderRight",
  data() {
    return {
      currentDate: new Date()
    };
  }
};
</script>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
