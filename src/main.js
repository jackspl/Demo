// 系统自带插件
// ---------------------------------------------------------------------
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入第三方插件
// ---------------------------------------------------------------------
// 引入element-ul插件js
import ElementUI from 'element-ui'
// 引入element-ul插件css
import 'element-ui/lib/theme-chalk/index.css'
// 引入发送ajax请求
import axios from 'axios'
// 引入粒子特效
import VueParticles from 'vue-particles'
// 引入echarts插件
import echarts from 'echarts'
// 引入地图插件
import '../node_modules/echarts/map/js/china.js'
// 引入ES6解析路径
import path from 'path'
// 引入字体图标库（里面包含了LED字体）
import '../src/fonts/iconfont.css'
// 引入时间插件
import moment from 'moment'
// 引入登录状态（暂时没用到）
import VueSession from 'vue-session'
// 引入滚动插件
// import BScroll from '@better-scroll/core'
import scroll from 'vue-seamless-scroll'

// 引入频次统计列表
import specificSum from './components/clientSideMonitor/sceneMonitor/sceneFrequencyMonitor/specificSum.vue'
import specificUser from './components/clientSideMonitor/sceneMonitor/sceneFrequencyMonitor/specificUser.vue'
import specificClient from './components/clientSideMonitor/sceneMonitor/sceneFrequencyMonitor/specificClient.vue'
import specificContextUser from './components/clientSideMonitor/sceneMonitor/sceneFrequencyMonitor/specificContextUser.vue'
import specificContextClient from './components/clientSideMonitor/sceneMonitor/sceneFrequencyMonitor/specificContextClient.vue'

// 引入性能分析列表 scenMachine
import scenSum from './components/clientSideMonitor/sceneMonitor/scenePerformanceMonitor/scenSum.vue'
import scenAnalysis from './components/clientSideMonitor/sceneMonitor/scenePerformanceMonitor/scenAnalysis.vue'
import scenUser from './components/clientSideMonitor/sceneMonitor/scenePerformanceMonitor/scenUser.vue'
import scenMachine from './components/clientSideMonitor/sceneMonitor/scenePerformanceMonitor/scenMachine.vue'
import scenSceUser from './components/clientSideMonitor/sceneMonitor/scenePerformanceMonitor/scenSceUser.vue'
import scenSceMachine from './components/clientSideMonitor/sceneMonitor/scenePerformanceMonitor/scenSceMachine.vue'

// 使用第三方插件
// ---------------------------------------------------------------------
// 使用elementul
Vue.use(ElementUI)
// 使用axios请求
Vue.prototype.$axios = axios
// 使用粒子特效
Vue.use(VueParticles)
// 使用ES6解析路径
Vue.use(path)
// 使用echarts插件（vue中必须这样使用echarts插件）
Vue.prototype.$echarts = echarts
// 使用时间插件（大写HH代码24小时制度）
Vue.filter('time', function (value) {
  return moment(value * 1000).format('YYYY年MM月DD日 HH:mm:ss')
})
// 使用登录状态（暂时没用到）
Vue.use(VueSession)
// 使用滚动插件
// Vue.use(BScroll)
Vue.use(scroll)

// 频次统计列表
Vue.component('specificSum', specificSum)
Vue.component('specificUser', specificUser)
Vue.component('specificClient', specificClient)
Vue.component('specificContextUser', specificContextUser)
Vue.component('specificContextClient', specificContextClient)

// 性能分析列表
Vue.component('scenSum', scenSum)
Vue.component('scenAnalysis', scenAnalysis)
Vue.component('scenUser', scenUser)
Vue.component('scenMachine', scenMachine)
Vue.component('scenSceUser', scenSceUser)
Vue.component('scenSceMachine', scenSceMachine)

// 系统自带插件
// ---------------------------------------------------------------------
// 阻止启动生产消息，常用作指令
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
