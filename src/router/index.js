import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
  {
    path: '/about-us',
    component: () => import('../views/AboutUs'),
    meta: { title: '关于我们' },
    hidden: true
  },
  {
    path: '/avoid-fakes',
    component: () => import('../views/AvoidFakes'),
    meta: { title: '如何避免买到假货' },
    hidden: true
  },
  {
    path: '/contact-us',
    component: () => import('../views/ContactUs'),
    meta: { title: '联系我们' },
    hidden: true
  },
  {
    path: '/comparison',
    component: () => import('../views/Comparison'),
    meta: { title: '真假百科全书' },
    hidden: true
  },
  {
    path: '/launch',
    component: () => import('../views/Launch'),
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