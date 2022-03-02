import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
  {
    path: '/about-us',
    component: () => import('../views/AboutUs'),
    name: '关于我们',
    meta: { title: '关于我们' },
    hidden: true
  },
  {
    path: '/avoid-fakes',
    component: () => import('../views/AvoidFakes'),
    name: '如何避免买到假货',
    meta: { title: '如何避免买到假货' },
    hidden: true
  },
  {
    path: '/contact-us',
    component: () => import('../views/ContactUs'),
    name: '联系我们',
    meta: { title: '联系我们' },
    hidden: true
  },
  {
    path: '/ip-comics',
    component: () => import('../views/IpComics'),
    name: 'Ip 小剧场',
    meta: { title: 'Ip 小剧场' },
    hidden: true
  },
  {
    path: '/ip-comics/part1',
    component: () => import('../views/ipcomics/Part1'),
    name: '第一部分',
    meta: { title: '第一部分' },
    hidden: true
  },
  {
    path: '/ip-comics/part2',
    component: () => import('../views/ipcomics/Part2'),
    name: '第二部分',
    meta: { title: '第二部分' },
    hidden: true
  },
  {
    path: '/ip-comics/part3',
    component: () => import('../views/ipcomics/Part3'),
    name: '第三部分',
    meta: { title: '第三部分' },
    hidden: true
  },
  {
    path: '/ip-comics/part4',
    component: () => import('../views/ipcomics/Part4'),
    name: '第四部分',
    meta: { title: '第四部分' },
    hidden: true
  },
  {
    path: '/ip-comics/part5',
    component: () => import('../views/ipcomics/Part5'),
    name: '第五部分',
    meta: { title: '第五部分' },
    hidden: true
  },
  {
    path: '/ip-comics/part6',
    component: () => import('../views/ipcomics/Part6'),
    name: '第六部分',
    meta: { title: '第六部分' },
    hidden: true
  },
  {
    path: '/ip-comics/part7',
    component: () => import('../views/ipcomics/Part7'),
    name: '第七部分',
    meta: { title: '第七部分' },
    hidden: true
  },
  {
    path: '/ip-comics/part8',
    component: () => import('../views/ipcomics/Part8'),
    name: '第八部分',
    meta: { title: '第八部分' },
    hidden: true
  },
  {
    path: '/ip-comics/part9',
    component: () => import('../views/ipcomics/Part9'),
    name: '第九部分',
    meta: { title: '第九部分' },
    hidden: true
  },
  {
    path: '/comparison',
    component: () => import('../views/Comparison'),
    name: '真假百科全书',
    meta: { title: '真假百科全书' },
    hidden: true
  },
  {
    path: '/air-filter',
    component: () => import('../views/comparison/AirFilter'),
    name: '空气滤清器',
    meta: { title: '空气滤清器' },
    hidden: true
  },
  {
    path: '/cabin-filter',
    component: () => import('../views/comparison/CabinFilter'),
    name: '空调滤清器',
    meta: { title: '空调滤清器' },
    hidden: true
  },
  {
    path: '/fuel-filter',
    component: () => import('../views/comparison/FuelFilter'),
    name: '汽油滤清器',
    meta: { title: '汽油滤清器' },
    hidden: true
  },
  {
    path: '/oil-filter',
    component: () => import('../views/comparison/OilFilter'),
    name: '机油滤清器',
    meta: { title: '机油滤清器' },
    hidden: true
  },
  {
    path: '/brake-pad',
    component: () => import('../views/comparison/BrakePad'),
    name: '刹车片',
    meta: { title: '刹车片' },
    hidden: true
  },
  {
    path: '/spark-plug',
    component: () => import('../views/comparison/SparkPlug'),
    name: '火花塞',
    meta: { title: '火花塞' },
    hidden: true
  },
  {
    path: '/launch',
    component: () => import('../views/Launch'),
    name: '启动页',
    meta: { title: '启动页' },
    hidden: true
  }
]

const createRouter = () => {
  return new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: routes
  })
}

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

const router = createRouter()

export default router