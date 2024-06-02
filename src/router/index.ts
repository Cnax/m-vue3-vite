import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    name: 'me',
    path: '/me',
    component: () => import('@/views/me.vue'),
    meta: {
      title: '我的'
    }
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to, _from, next) => {
  const title = to?.meta?.title
  if (title) {
    document.title = title as string
  }
  next()
})

export default router