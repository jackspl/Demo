<template>
  <div class="box">
    <div id="root">
      <transition name="fade">
        <div v-if="show">hello world</div>
      </transition>
      <button @click="handleClick">切换</button>
    </div>
    <div id="main333" style="width: 600px;height:400px;"></div>
    <div class="free-scroll-container">
      <div class="free-scroll-wrapper">
        <div class="scroll-wrapper" ref="wrapper">
          <div class="scroll-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </div>
    <el-carousel :interval="4000" type="card" class="box">
      <el-carousel-item class="box1">a</el-carousel-item>
      <el-carousel-item class="box2">b</el-carousel-item>
      <el-carousel-item class="box3">c</el-carousel-item>
      <el-carousel-item class="box4">d</el-carousel-item>
    </el-carousel>
    <!-- ------------------------------------ -->
    <div id="app">
      <span @mouseout="start" @mouseover="stop">{{ text }}</span>
    </div>

  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      show: true,
      text: "跑马灯效果展示~截取除首个字符外的所有字符拼接后重新渲染text属性值"
    };
  },
  created() {
    this.start();
  },
  methods: {
    // 开始滚动
    start() {
      this.ID = setInterval(() => {
        // 截取首个字符
        var head = this.text.substring(0, 1);
        // 截取除首个字符外的所有字符
        var foot = this.text.substring(1);
        // 拼接后重新渲染text属性值
        this.text = foot + head;
      }, 100);
    },

    // 停止滚动
    stop() {
      // 清除定时器
      clearInterval(this.ID);
    },
    // ---------------------
    init() {
      this.bs = new BScroll(this.$refs.wrapper, {
        freeScroll: true,
        bounce: {
          bottom: false,
          left: false,
          right: false,
          top: false
        }
      });
    },
    handleClick: function() {
      this.show = this.show === true ? false : true;
    },
    // 图表
    pageImg() {
      let myChart333 = this.$echarts.init(document.getElementById("main333"));
      const option333 = {
        timeline: {
          data: [1, 2, 3, 4],
          label: {
            formatter: function(s) {
              return "第" + s + "页";
            }
          },
          autoPlay: false,
          playInterval: 3000,
          tooltip: {
            formatter: function(s) {
              return "第" + s.value + "页";
            }
          }
        },
        options: [
          {
            title: {
              text: "全国宏观经济指标"
            },
            tooltip: { trigger: "axis" },
            legend: {
              //x:'right',
              data: ["GDP", "房地产"]
            },
            calculable: true,
            grid: { y2: 80 },
            xAxis: [
              {
                type: "category",
                //'axisLabel':{'interval':0},
                data: [
                  "北京",
                  "天津",
                  "河北",
                  "山西",
                  "内蒙古",
                  "辽宁",
                  "吉林",
                  "黑龙江"
                ]
              }
            ],
            yAxis: [
              {
                type: "value",
                name: "GDP（亿元）",
                max: 3000
              }
            ],
            series: [
              {
                name: "GDP",
                type: "bar",
                data: [100, 200, 300, 400, 500, 600, 700, 800]
              },
              {
                name: "房地产",
                type: "bar",
                data: [, 400, 300, 400, 200, 600, 300, 800]
              }
            ]
          },
          {
            series: [
              { data: [200, 300, 400, 500, 600, 700, 800] },
              { data: [500, 400, 300, 400, 200, 600, 300] }
            ],
            xAxis: [
              { data: ["云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆"] }
            ]
          },
          {
            series: [
              { data: [1200, 1300, 400, 500, 600, 700, 800] },
              { data: [500, 400, 1300, 400, 1200, 600, 300] }
            ],
            xAxis: [
              { data: ["上海", "江苏", "浙江", "安徽", "福建", "江西", "山东"] }
            ]
          },
          {
            series: [
              { data: [1200, 1300, 400, 500, 600, 700, 800, 900] },
              { data: [500, 400, 1300, 400, 1200, 600, 300, 900] }
            ],
            xAxis: [
              {
                data: [
                  "湖北",
                  "湖南",
                  "广东",
                  "广西",
                  "海南",
                  "重庆",
                  "四川",
                  "贵州"
                ]
              }
            ]
          }
        ]
      };
      myChart333.setOption(option333);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.pageImg();
    });
    this.init();
  }
};
</script>
<style lang="scss" scoped>
.box {
  #root {
    .fade-enter,
    .fade-leave-to {
      opacity: 0;
      color: aqua;
    }
    .fade-enter-active,
    .fade-leave-active {
      color: red;
      transition: opacity 3s;
    }
  }
  #main333 {
    background-color: paleturquoise;
  }
  .free-scroll-container {
    position: relative;
    width: 100%;
    height: 100%;
    .free-scroll-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      border: 1px solid rgb(96, 108, 113);
      box-sizing: border-box;
      // content的宽高，一定要大于wrapper的宽高 才能实现滚动效果
      .scroll-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        width: 350px;
        .scroll-content {
          background-color: #efeff4;
          width: 1500px;
          height: 1000px;
          p {
            font-size: 16px;
            padding: 20px;
            line-height: 200%;
            margin: 0;
          }
        }
      }
    }
  }
  .box {
    height: 200px;
    .box1 {
      width: 300px;
      height: 100%;
      background-color: aqua;
    }
    .box2 {
      width: 300px;
      height: 100%;
      background-color: rgb(136, 22, 230);
    }
    .box3 {
      width: 300px;
      height: 100%;
      background-color: rgb(216, 17, 156);
    }
    .box4 {
      width: 300px;
      height: 100%;
      background-color: rgb(164, 228, 16);
    }
  }
}
</style>
