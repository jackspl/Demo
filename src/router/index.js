import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 解决用户重复点击一个路由，产生的bug
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// 路由跳转
const routes = [{
    // 跳转到登录页
    path: '/',
    // component: () => import('../views/serverMonitor/monitorProces/status.vue'),
    component: () => import('../views/index/index.vue'),
    // 页面重定向
    redirect: '/standard/a'
  },
  {
    path: '/standard',
    name: 'standard',
    // component: resolve => require(['../views/serverMonitor/monitorProces/status.vue'], resolve),
    component: resolve => require(['../views/index/index.vue'], resolve),
    children: [{
        path: 'a',
        // component: resolve => require(['../components/clientSideMonitor/monitorProces/a.vue'], resolve),
        component: resolve => require(['../components/sidebarRouter/a.vue'], resolve),
      },
      {
        path: 'b',
        // component: resolve => require(['../components/clientSideMonitor/monitorProces/b.vue'], resolve),
        component: resolve => require(['../components/sidebarRouter/b.vue'], resolve),
      },
      {
        path: 'c',
        // component: resolve => require(['../components/clientSideMonitor/monitorProces/c.vue'], resolve),
        component: resolve => require(['../components/sidebarRouter/c.vue'], resolve),
      },
      {
        path: 'all',
        // component: resolve => require(['../components/clientSideMonitor/monitorProces/all.vue'], resolve),
        component: resolve => require(['../components/sidebarRouter/all.vue'], resolve),
      }
    ]
  }
]
const router = new VueRouter({
  routes
})
export default router
