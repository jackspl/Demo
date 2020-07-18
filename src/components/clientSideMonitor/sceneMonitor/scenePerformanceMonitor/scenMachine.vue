<template>
  <div class="grid-content bg-purple-light">
    <!-- 图表部分 -->
    <div>
      <el-row>
        <el-col :span="24" id="ttt">
          <div class="grid-content bg-purple-dark">
            <div
              id="main3"
              style="width: 100%; height:427px; margin: 0 auto; background-color: #164276;"
            ></div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// import moment from 'moment'
export default {
  props: [
    'categories',
    'MaxTime',
    'MinTime',
    'AvgTime',
    'htName',
    'scenName',
    'actTime',
    'endTime'
  ],
  data () {
    return {
      xScene: [], // X轴的场景名称
      yMaxTime: '',
      yMinTime: '',
      yAvgTime: '',
      hostName: '',
      sName: '',
      aTime: '',
      eTime: ''
    }
  },
  watch: {
    categories (val) {
      this.xScene = val
      this.histogram()
    },
    MaxTime (val) {
      this.yMaxTime = val
      this.histogram()
    },
    MinTime (val) {
      this.yMinTime = val
      this.histogram()
    },
    AvgTime (val) {
      this.yAvgTime = val
      this.histogram()
    },
    htName (val) {
      this.hostName = val
      this.histogram()
    },
    scenName (val) {
      this.sName = val
      this.histogram()
    },
    actTime (val) {
      this.aTime = val
      this.histogram()
    },
    endTime (val) {
      this.eTime = val
      this.histogram()
    }
  },
  methods: {
    histogram () {
      let myChart3 = this.$echarts.init(document.getElementById('main3'))
      this.initWidth = document.getElementById('ttt').offsetWidth
      this.initHeight = document.getElementById('ttt').offsetHeight
      const option3 = {
        animation: false,
        title: {
          text: '平均响应时间',
          textStyle: {
            fontWeight: 400,
            fontSize: 20,
            color: 'white'
          },
          x: 'center',
          top: 10
          // text:
          //   '基于客户端监控\n\n客户端:' +
          //   this.hostName +
          //   '' +
          //   '场景名:' +
          //   this.sName,
          // subtext: '开始时间:' + this.aTime + '' + '结束时间:' + this.eTime,
          // subtextStyle: {
          //   color: 'white'
          // },
          // x: 'center',
          // textStyle: {
          //   fontWeight: 400,
          //   fontSize: 14,
          //   color: 'white'
          // }
        },
        // 图形的背景色
        // backgroundColor: '#ccc',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '2%',
          right: '4%',
          bottom: '14%',
          top: '20%',
          containLabel: true
        },
        toolbox: {
          feature: {
            magicType: { show: true,
              type: ['line', 'bar'],
              iconStyle: {
                borderColor: 'white'
              } },
            saveAsImage: { show: true,
              iconStyle: {
                borderColor: 'white'
              },
              backgroundColor: '#164276' }
          }
        },
        legend: {
          // top: '2%',
          // left: '2%',
          // orient: 'vertical',
          // data: ['最大响应时间', '最小响应时间', '平均响应时间'],
          // textStyle: {
          //   color: 'white',
          //   fontSize: 14
          // },
          // itemWidth: 12,
          // itemHeight: 14
          data: ['发送到PSE', '登录', '创建零组件'],
          orient: 'horizontal',
          x: 'center',
          top: '50',
          icon: 'rectangle',
          textStyle: {
            // 图例文字的样式
            color: '#fff',
            fontSize: 12
          },
          itemWidth: 20,
          itemHeight: 15,
          itemGap: 30
        },
        xAxis: {
          type: 'category',
          data: this.xScene,
          axisLine: {
            lineStyle: {
              color: '#6a86a6'
            }
          },
          axisLabel: {
            interval: 0,
            rotate: 50,
            formatter: function (value) {
              let valueTxt = ''
              if (value.length > 8) {
                valueTxt = value.substring(0, 5) + '...'
              } else {
                valueTxt = value
              }
              return valueTxt
            },
            textStyle: {
              fontFamily: '宋体',
              color: 'white',
              fontSize: 16
            }
          },
          splitLine: {
            show: false
          }
        },

        yAxis: {
          type: 'value',
          left: '5',
          name: '平均时间',
          axisLine: {
            lineStyle: {
              color: '#4798a5',
              left: 10
            }
          },
          splitLine: {
            show: true
          },
          axisLabel: {
            textStyle: {
              color: '#4798a5' // 这里用参数代替了
            }
          },
          top: 50
        },
        dataZoom: [
          {
            show: true,
            height: 12,
            xAxisIndex: [0],
            bottom: '8%',
            start: 10,
            end: 90,
            handleIcon:
              'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '110%',
            handleStyle: {
              color: '#d3dee5'
            },
            textStyle: {
              color: '#fff'
            },
            borderColor: '#90979c'
          },
          {
            type: 'inside',
            show: true,
            height: 15,
            start: 1,
            end: 35
          }
        ],
        series: [
          {
            name: '发送到PSE',
            type: 'line',
            barWidth: '15%',
            color: '#8fc31f',
            data: this.yMaxTime,
            label: {
              normal: {
                show: false,
                position: 'top'
              }
            }
          },
          {
            name: '登录',
            type: 'line',
            barWidth: '15%',
            color: '#00b7ee',
            data: this.yMinTime,
            label: {
              normal: {
                show: false,
                position: 'top'
              }
            }
          },
          {
            name: '创建零组件',
            type: 'line',
            barWidth: '15%',
            color: '#ff00ff',
            data: this.yAvgTime,
            label: {
              normal: {
                show: false,
                position: 'top'
              }
            }
          }
        ]
      }
      myChart3.setOption(option3)
      let resize = {
        width: this.initWidth,
        height: 430
      }
      myChart3.resize(resize)
      // window.onresize = function () {
      //   myChart3.resize()
      // }
    }
  }
}
</script>

<style>
</style>
