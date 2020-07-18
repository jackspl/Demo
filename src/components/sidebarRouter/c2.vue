<template>
  <div>
    <div class="container">
      <el-tabs v-model="message">
        <el-tab-pane :label="`待办任务`" name="first">
          <h1>第一页</h1>
        </el-tab-pane>
        <el-tab-pane :label="`当前任务`" name="second">
          <h1>第二页</h1>
        </el-tab-pane>
        <el-tab-pane :label="`已完成任务`" name="third">
          <h1>第三页</h1>
        </el-tab-pane>
        <el-tab-pane :label="`驳回任务`" name="fourth">
          <h1>第四页</h1>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "first"
    };
  },
  methods: {

  }
};
</script>

<style>
.message-title {
  cursor: pointer;
}
.handle-row {
  margin-top: 30px;
}
</style>
