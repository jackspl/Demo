<template>
  <div class="grid-content bg-purple-light">
    <!-- 图表部分 -->
    <div>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <div
              id="main1"
              style="width: 100%; height:430px; margin: 0 auto; background-color: #164276;"
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
    'userName',
    'htName',
    'scenName',
    'actTime',
    'endTime'
  ],
  data () {
    return {
      xScene: [], // X轴的场景名称
      yMaxTime: '',
      uName: '',
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
    userName (val) {
      this.uName = val
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
      if (this.aTime === ' ') {
        this.aTime = '最早'
      } else {
        this.aTime = val
      }
      this.histogram()
    },
    endTime (val) {
      this.eTime = val
      this.histogram()
    }
  },

  methods: {
    histogram () {
      let myChart1 = this.$echarts.init(document.getElementById('main1'))
      const option1 = {
        animation: false,
        color: ['#c23531', '#2f4554', '#61a0a8'],
        title: {
          /* // '用户名:' + this.uName +  '客户端:' + this.hostName +   */
          text: '操作频次监控\n\n场景名:' + this.sName,
          // text: '性能分析概要' + moment().format('YYYY年MM月DD日'),
          subtext: '开始时间:' + this.aTime + '　　' + '结束时间:' + this.eTime,
          subtextStyle: {

            color: 'white'
          },
          x: 'center',
          textStyle: {
            fontWeight: 400,
            fontSize: 14,
            color: 'white'
          }
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
          top: '10%',
          left: '2%',
          orient: 'vertical',
          data: ['操作次数', '最小响应时间', '平均响应时间'],
          textStyle: {
            color: 'white',
            fontSize: 14
          },
          itemWidth: 12,
          itemHeight: 14
        },
        xAxis: {
          type: 'category',

          data: this.xScene,
          axisLine: {
            show: true,
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
          axisLine: {
            show: true,
            lineStyle: {
              color: '#6a86a6',
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
            // 滚轮显示字体的颜色
            textStyle: {
              color: 'white'
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
            name: '操作次数',
            type: 'bar',
            barWidth: '20%',
            color: '#00b7ee',
            data: this.yMaxTime,
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            }
          }
        ]
      }
      myChart1.setOption(option1)
      window.onresize = function () {
        myChart1.resize()
      }
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
