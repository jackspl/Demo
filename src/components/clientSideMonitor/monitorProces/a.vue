<template>
  <div class="nagiosMonitor" @click="hiddenSeachBtn">
    <!-- 主体内容 -->
      <el-container class="na_main">
        <!-- 右侧主体 -->
        <el-main>
          <!-- <router-view :key="key"></router-view> -->
          <div class="plusImg">
            <img src="../../../assets/fullscreen_plus.png" />
          </div>
          <!-- 右侧头部二个表格 -->
          <div class="na_top">

            <div class="top_fl fl">
              <h1>服务状态</h1>
              <div>所有服务</div>
            </div>
            <div class="top_fr fr clearfix">
              <div class="host fl">
                <!-- 右侧头部 -->
                <div class="host_top">
                  <!-- 字体图标 -->
                  <i class="iconfont host_icon">&#xe696;</i>
                  <!-- 标题 -->
                  <div class="host_title">主机状态摘要</div>
                  <!-- 表格 -->
                  <div class="host_table_box">
                    <table class="host_table">
                      <thead>
                        <tr>
                          <th>上</th>
                          <th>下</th>
                          <th>无法到达</th>
                          <th>待定</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div>
                              <a href="#" class="tdGreen">1</a>
                            </div>
                          </td>
                          <td>
                            <div>
                              <a href="#" class="tdRed">4</a>
                            </div>
                          </td>
                          <td>
                            <div>
                              <a href="#">0</a>
                            </div>
                          </td>
                          <td>
                            <div>
                              <a href="#">0</a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr>
                          <th colspan="2">未处理</th>
                          <th>问题</th>
                          <th>所有</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colspan="2">
                            <div>
                              <a href="#" class="tdYellow">4</a>
                            </div>
                          </td>

                          <td>
                            <div>
                              <a href="#" class="tdCream">4</a>
                            </div>
                          </td>
                          <td>
                            <div>
                              <a href="#">5</a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- 底部时间 -->
                  <div class="host_time">Last Undated: {{ date }}</div>
                </div>
              </div>
              <div class="host fl">
                <!-- 右侧头部 -->
                <div class="host_top">
                  <!-- 字体图标 -->
                  <i class="iconfont host_icon">&#xe696;</i>
                  <!-- 标题 -->
                  <div class="host_title">主机状态摘要</div>
                  <!-- 表格 -->
                  <div class="host_table_box">
                    <table class="host_table">
                      <thead>
                        <tr>
                          <th>上</th>
                          <th>下</th>
                          <th>无法达到</th>
                          <th>待定</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div>
                              <a href="#" class="tdGreen">1</a>
                            </div>
                          </td>
                          <td>
                            <div>
                              <a href="#" class="tdRed">4</a>
                            </div>
                          </td>
                          <td>
                            <div>
                              <a href="#">0</a>
                            </div>
                          </td>
                          <td>
                            <div>
                              <a href="#">0</a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr>
                          <th colspan="2">未处理</th>
                          <th>问题</th>
                          <th>所有</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colspan="2">
                            <div>
                              <a href="#" class="tdYellow">4</a>
                            </div>
                          </td>

                          <td>
                            <div>
                              <a href="#" class="tdCream">4</a>
                            </div>
                          </td>
                          <td>
                            <div>
                              <a href="#">5</a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- 底部时间 -->
                  <div class="host_time">Last Undated: {{ date }}</div>
                </div>
              </div>
              <div class="service fl">
                <div class="host_top">
                  <!-- 字体图标 -->
                  <i class="iconfont host_icon">&#xe696;</i>
                  <!-- 标题 -->
                  <div class="host_title">服务状态摘要</div>
                  <!-- 表格 -->
                  <div class="host_table_box">
                    <table class="host_table">
                      <thead>
                        <tr>
                          <th>正常</th>
                          <th>警告</th>
                          <th>未知</th>
                          <th>危急</th>
                          <th>待定</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div>
                              <a href="#" class="tdGreen">15</a>
                            </div>
                          </td>
                          <td>
                            <div>
                              <a href="#">0</a>
                            </div>
                          </td>
                          <td>
                            <div>
                              <a href="#">25</a>
                            </div>
                          </td>
                          <td>
                            <div>
                              <a href="#" class="tdRed">16</a>
                            </div>
                          </td>
                          <td>
                            <div>
                              <a href="#">0</a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr>
                          <th colspan="2">未处理</th>
                          <th colspan="2">问题</th>
                          <th>所有</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colspan="2">
                            <div>
                              <a href="#" class="tdYellow">42</a>
                            </div>
                          </td>
                          <td colspan="2">
                            <div>
                              <a href="#" class="tdCream">42</a>
                            </div>
                          </td>
                          <td>
                            <div>
                              <a href="#">57</a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- 底部时间 -->
                  <div class="host_time">Last Undated: {{ date }}</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 右侧中间分页 -->
          <div class="na_middle clearfix">
            <div class="showInfo ">Showing 1-5 of 57 total records</div>
            <div class="page">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage3"
                :page-size="100"
                layout="prev, pager, next, jumper"
                :total="1000"
              >
              </el-pagination>
            </div>
          </div>
          <!-- 右侧底部大表格 -->
          <div class="na_footer">
            <table>
              <thead>
                <tr>
                  <th class="th11">
                    <a href="#">

                      <div><i class="iconfont down">&#xe64d;</i>Host</div>
                    </a>
                  </th>
                  <th class="th22">
                    <a href="#">
                      <div><i class="iconfont down">&#xe72a;</i>Service</div>
                    </a>
                  </th>
                  <th class="th33">
                    <a href="#">
                      <div><i class="iconfont down">&#xe72a;</i>Status</div>
                    </a>
                  </th>
                  <th class="th44">
                    <a href="#">
                      <div><i class="iconfont down">&#xe72a;</i>Duration</div>
                    </a>
                  </th>
                  <th class="th55">
                    <a href="#">
                      <div><i class="iconfont down">&#xe72a;</i>Attempt</div>
                    </a>
                  </th>
                  <th class="th66">
                    <a href="#">
                      <div><i class="iconfont down">&#xe72a;</i>Last Check</div>
                    </a>
                  </th>
                  <th class="th77">
                    <a href="#">
                      <div><i class="iconfont down">&#xe72a;</i>Status infomation</div>
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>
                      <a href="#">15</a>
                    </div>
                  </td>
                  <td>
                    <div>
                      <a href="#">0</a>
                    </div>
                  </td>
                  <td>
                    <div>
                      <a href="#">25</a>
                    </div>
                  </td>
                  <td>
                    <div>
                      <a href="#">16</a>
                    </div>
                  </td>
                  <td>
                    <div>
                      <a href="#">0</a>
                    </div>
                  </td>
                  <td>
                    <div>
                      <a href="#">16</a>
                    </div>
                  </td>
                  <td>
                    <div>
                      <a href="#">0</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <a href="#">15</a>
                    </div>
                  </td>
                  <td>
                    <div>
                      <a href="#">0</a>
                    </div>
                  </td>
                  <td>
                    <div>
                      <a href="#">25</a>
                    </div>
                  </td>
                  <td>
                    <div>
                      <a href="#">16</a>
                    </div>
                  </td>
                  <td>
                    <div>
                      <a href="#">0</a>
                    </div>
                  </td>
                  <td>
                    <div>
                      <a href="#">16</a>
                    </div>
                  </td>
                  <td>
                    <div>
                      <a href="#">0</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <a href="#">15</a>
                    </div>
                  </td>
                  <td>
                    <div>
                      <a href="#">0</a>
                    </div>
                  </td>
                  <td>
                    <div>
                      <a href="#">25</a>
                    </div>
                  </td>
                  <td>
                    <div>
                      <a href="#">16</a>
                    </div>
                  </td>
                  <td>
                    <div>
                      <a href="#">0</a>
                    </div>
                  </td>
                  <td>
                    <div>
                      <a href="#">16</a>
                    </div>
                  </td>
                  <td>
                    <div>
                      <a href="#">0</a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </el-main>
      </el-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // 分页当前高亮
      currentPage3: 1,
      // 底部时间
      date: '',
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
        sceneName: '' // 英文的场景名
      }
    }
  },
  created () {
    // 现在时间，随时刷新
    this.nowTimes()
  },
  methods: {
    aaa () {
      console.log('123')
    },
    // 分页
    handleSizeChange (val) {},
    handleCurrentChange (val) {},
    // 当前时间格式化
    timeFormate (timeStamp) {
      let year = new Date(timeStamp).getFullYear()
      let month =
        new Date(timeStamp).getMonth() + 1 < 10
          ? '0' + (new Date(timeStamp).getMonth() + 1)
          : new Date(timeStamp).getMonth() + 1
      let date =
        new Date(timeStamp).getDate() < 10
          ? '0' + new Date(timeStamp).getDate()
          : new Date(timeStamp).getDate()
      let hh =
        new Date(timeStamp).getHours() < 10
          ? '0' + new Date(timeStamp).getHours()
          : new Date(timeStamp).getHours()
      let mm =
        new Date(timeStamp).getMinutes() < 10
          ? '0' + new Date(timeStamp).getMinutes()
          : new Date(timeStamp).getMinutes()
      let ss =
        new Date(timeStamp).getSeconds() < 10
          ? '0' + new Date(timeStamp).getSeconds()
          : new Date(timeStamp).getSeconds()
      // return year + "年" + month + "月" + date +"日"+" "+hh+":"+mm ;
      this.date =
        year +
        '-' +
        month +
        '-' +
        date +
        // '-' +
        ' ' +
        hh +
        ':' +
        mm +
        ':' +
        ss
      // this.nowTime = date
    },
    // 定时器函数
    nowTimes () {
      this.timeFormate(new Date())
      this.timer = setTimeout(this.nowTimes, 1 * 1000)
    },
    // ----------------------------------------------------
    okInfoChange ($event) {
      this.okInfoFlag = true
    },
    okInfoRemove ($event) {
      this.okInfoFlag = false
    },
    // -----
    poutChange ($event) {
      this.poutFlag = true
    },
    poutRemove ($event) {
      this.poutFlag = false
    },
    // ---------
    addChange ($event) {
      this.addFlag = true
    },
    addRemove ($event) {
      this.addFlag = false
    },
    // -------
    permaChange ($event) {
      this.permaFlag = true
    },
    permaRemove ($event) {
      this.permaFlag = false
    },
    // -------
    feedChange ($event) {
      this.feedFlag = true
    },
    feedRemove ($event) {
      this.feedFlag = false
    },
    // -------
    // --------------------------------------------------------
    // 点击搜索按钮事件
    seachBtn () {
      this.seachInputFlag = true
    },
    // 隐藏搜索按钮事件
    hiddenSeachBtn () {
      this.seachInputFlag = false
    },
    infoFrChange ($event) {
      this.balckFlag = true
      this.balckInfoFlag = true
    },
    infoFrRemove ($event) {
      this.balckFlag = false
      this.balckInfoFlag = false
    },
    changeActive ($event) {
      this.hiddenOKFlag = true
    },
    removeActive ($event) {
      this.hiddenOKFlag = false
    },
    // 切换导航菜单显示与隐藏
    switchDisplay () {
      if (this.flag === true) {
        this.flag = false
      } else {
        this.flag = true
      }
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    // 第一个参数， 用户输入的值  第二个值回调函数
    querySearchScen (queryString, callback) {},
    handleSelectScen (item) {},
    // 返回按钮
    logout () {
      this.$router.push('/users/informationSecurity')
    }
  }
}
</script>
<style lang="scss" scoped>
// @import "../css/base.css";
// @import "../css/index.css";
@import "../../../css/base/base.css";
@import "../../../css/serverMonitor/monitorProces/nagiosMonitor.css";
// @import "../../../css";
</style>
