<template>
  <div class="nagiosMonitor" @click="hiddenSeachBtn">
    <el-container>
      <el-header class="header clearfix">
        <!-- 左侧logo -->
        <div class="logo">
          <!-- <img class="img" src="../../../assets/logo4.png" /> -->
          <img class="img" src="../../assets/logo4.png" />
        </div>
        <!-- 切换导航显示隐藏状态按钮 -->
        <div class="switch">
          <i class="iconfont size" @click="switchDisplay">&#xe621;</i>
        </div>
        <!-- 顶部搜索框 -->
        <div class="seachBox clearfix">
          <ul>
            <li>首页</li>
            <li>视图</li>
            <li>仪表盘</li>
            <li>统计</li>
            <li>配置</li>
            <li>工具</li>
            <li>帮助</li>
            <li>管理员</li>
          </ul>
        </div>
        <!-- 侧边栏显示详细信息 -->
        <!-- :class="{ black: balckFlag }"
          v-on:mouseover="infoFrChange($event)"
        v-on:mouseout="infoFrRemove($event)"-->
        <!-- <div class="fr infoFr">
          <i class="el-icon-s-unfold frIcon"></i>
        </div> -->
        <!-- 隐藏的详细信息 -->
        <!-- v-if="balckInfoFlag" -->
        <!-- <div
          class="menu fr"
          v-if="balckInfoFlag"
          v-on:mouseover="ulChange($event)"
          v-on:mouseout="ulRemove($event)"
        >
          <ul>
            <li v-on:mouseover="okInfoChange($event)" v-on:mouseout="okInfoRemove($event)">
              <i class="iconfont schedule">&#xe629;</i>
              <div class="fr okInfo" v-if="okInfoFlag">
                <span class="span fl">Schedule page</span>
                <i class="el-icon-caret-right hiddenOK fl"></i>
              </div>
            </li>
            <li v-on:mouseover="poutChange($event)" v-on:mouseout="poutRemove($event)">
              <i class="iconfont schedule">&#xe636;</i>
              <div class="fr pout" v-if="poutFlag">
                <span class="span fl">Popout</span>
                <i class="el-icon-caret-right hiddenOK fl"></i>
              </div>
            </li>
            <li v-on:mouseover="addChange($event)" v-on:mouseout="addRemove($event)">
              <i class="iconfont schedule">&#xe62b;</i>
              <div class="fr add" v-if="addFlag">
                <span class="span fl">Add to my views</span>
                <i class="el-icon-caret-right hiddenOK fl"></i>
              </div>
            </li>
            <li v-on:mouseover="permaChange($event)" v-on:mouseout="permaRemove($event)">
              <i class="iconfont schedule">&#xe634;</i>
              <div class="fr perma" v-if="permaFlag">
                <span class="span fl">Get permalink</span>
                <i class="el-icon-caret-right hiddenOK fl"></i>
              </div>
            </li>
            <li v-on:mouseover="feedChange($event)" v-on:mouseout="feedRemove($event)">
              <i class="iconfont schedule">&#xe63d;</i>
              <div class="fr feed" v-if="feedFlag">
                <span class="span fl">Sent us feedback</span>
                <i class="el-icon-caret-right hiddenOK fl"></i>
              </div>
            </li>
          </ul>
        </div> -->
        <!-- 退出 -->
        <div class="fr out" @click="logout">
          <i class="iconfont outIcon">&#xe792;</i>
          <span>返回</span>
        </div>
        <!-- 用户名 -->
        <div class="fr userName">
          <i class="iconfont userIcon">&#xe633;</i>
          <span>当前用户</span>
        </div>
        <!-- OK -->
        <div class="fr ok">
          <i
            class="iconfont okIcon"
            v-on:mouseover="changeActive($event)"
            v-on:mouseout="removeActive($event)"
          >&#xe670;</i>
        </div>
        <!-- OK信息 -->
        <div class="fr okInfo" v-if="hiddenOKFlag">
          <span class="span fl">System is OK</span>
          <i class="el-icon-caret-right hiddenOK fl"></i>
        </div>
        <!-- 搜索图标 -->
        <div class="fr seachButton" @click.stop="seachBtn">
          <i class="iconfont seachIcon">&#xe60f;</i>
        </div>
        <!-- 搜索框 -->
        <div class="fr seachInput" v-if="seachInputFlag" @click.stop="seachBtn">
          <el-autocomplete
            v-model="form.sceneName"
            placeholder="Seach..."
            clearable
            type="text"
            :debounce="0"
            :fetch-suggestions="querySearchScen"
            @select="handleSelectScen"
          ></el-autocomplete>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside" v-if="flag">
          <el-menu
            default-active="11"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#2f3b52"
            text-color="#a5aab7"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <!-- <i class="el-icon-location"></i> -->
                <span>细节</span>
              </template>
              <router-link to="/standard/a">
                <el-menu-item index="11" style="padding-left: 60px">
                  <span slot="title">服务状态</span>
                </el-menu-item>
              </router-link>
              <router-link to="/standard/b">
                <el-menu-item index="/status" style="padding-left: 60px">
                  <span slot="title">主机状态</span>
                </el-menu-item>
              </router-link>
              <router-link to="/standard/c">
                <el-menu-item index="33" style="padding-left: 60px">
                  <span slot="title">主机组摘要</span>
                </el-menu-item>
              </router-link>
              <el-menu-item index="44" style="padding-left: 60px">
                <span slot="title">主机组网络</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <span>图表</span>
              </template>

              <el-menu-item index="2-1" style="padding-left: 60px">
                <span slot="title">效果图</span>
              </el-menu-item>
              <el-menu-item index="2-2" style="padding-left: 60px">
                <span slot="title">图表资源管理器</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <span>地图</span>
              </template>
              <router-link to="/standard/all">
                <el-menu-item index="3-1" style="padding-left: 60px">
                  <span slot="title">BB地图</span>
                </el-menu-item>
              </router-link>
              <el-menu-item index="3-2" style="padding-left: 60px">
                <span slot="title">超图</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 右侧主体 -->
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
    <div></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 分页当前高亮
      currentPage3: 1,
      // 底部时间
      date: "",
      okInfoFlag: false,
      poutFlag: false,
      addFlag: false,
      permaFlag: false,
      feedFlag: false,
      // 头部背景色显示隐藏
      balckFlag: false,
      // 隐藏的详细信息
      balckInfoFlag: false,
      // 切换导航显示隐藏状态
      flag: true,
      // OK信息隐藏
      hiddenOKFlag: false,
      // 搜索框隐藏
      seachInputFlag: false,
      form: {
        sceneName: "" // 英文的场景名
      }
    };
  },
  created() {
    // 现在时间，随时刷新
    this.nowTimes();
  },
  methods: {
    aaa() {
      console.log("123");
    },
    // 分页
    handleSizeChange(val) {},
    handleCurrentChange(val) {},
    // 当前时间格式化
    timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month =
        new Date(timeStamp).getMonth() + 1 < 10
          ? "0" + (new Date(timeStamp).getMonth() + 1)
          : new Date(timeStamp).getMonth() + 1;
      let date =
        new Date(timeStamp).getDate() < 10
          ? "0" + new Date(timeStamp).getDate()
          : new Date(timeStamp).getDate();
      let hh =
        new Date(timeStamp).getHours() < 10
          ? "0" + new Date(timeStamp).getHours()
          : new Date(timeStamp).getHours();
      let mm =
        new Date(timeStamp).getMinutes() < 10
          ? "0" + new Date(timeStamp).getMinutes()
          : new Date(timeStamp).getMinutes();
      let ss =
        new Date(timeStamp).getSeconds() < 10
          ? "0" + new Date(timeStamp).getSeconds()
          : new Date(timeStamp).getSeconds();
      // return year + "年" + month + "月" + date +"日"+" "+hh+":"+mm ;
      this.date =
        year +
        "-" +
        month +
        "-" +
        date +
        // '-' +
        " " +
        hh +
        ":" +
        mm +
        ":" +
        ss;
      // this.nowTime = date
    },
    // 定时器函数
    nowTimes() {
      this.timeFormate(new Date());
      this.timer = setTimeout(this.nowTimes, 1 * 1000);
    },
    // ----------------------------------------------------
    okInfoChange($event) {
      this.okInfoFlag = true;
    },
    okInfoRemove($event) {
      this.okInfoFlag = false;
    },
    // -----
    poutChange($event) {
      this.poutFlag = true;
    },
    poutRemove($event) {
      this.poutFlag = false;
    },
    // ---------
    addChange($event) {
      this.addFlag = true;
    },
    addRemove($event) {
      this.addFlag = false;
    },
    // -------
    permaChange($event) {
      this.permaFlag = true;
    },
    permaRemove($event) {
      this.permaFlag = false;
    },
    // -------
    feedChange($event) {
      this.feedFlag = true;
    },
    feedRemove($event) {
      this.feedFlag = false;
    },
    // -------
    // --------------------------------------------------------
    // 点击搜索按钮事件
    seachBtn() {
      this.seachInputFlag = true;
    },
    // 隐藏搜索按钮事件
    hiddenSeachBtn() {
      this.seachInputFlag = false;
    },
    infoFrChange($event) {
      this.balckFlag = true;
      this.balckInfoFlag = true;
    },
    infoFrRemove($event) {
      this.balckFlag = false;
      this.balckInfoFlag = false;
    },
    changeActive($event) {
      this.hiddenOKFlag = true;
    },
    removeActive($event) {
      this.hiddenOKFlag = false;
    },
    // 切换导航菜单显示与隐藏
    switchDisplay() {
      if (this.flag === true) {
        this.flag = false;
      } else {
        this.flag = true;
      }
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 第一个参数， 用户输入的值  第二个值回调函数
    querySearchScen(queryString, callback) {},
    handleSelectScen(item) {},
    // 返回按钮
    logout() {
      this.$router.push("/users/informationSecurity");
    }
  }
};
</script>
<style lang="scss" scoped>
// @import "../../css/base/base.css";
// @import "../../css/serverMonitor/monitorProces/nagiosMonitor.css";

@import "../../css/base/base.css";
@import "../../css/serverMonitor/monitorProces/nagiosMonitor.css";
</style>
