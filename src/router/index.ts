import { createRouter, createWebHashHistory } from 'vue-router'

export const VueRouter = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Index/index.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/article/item',
      component: () => import('@/views/article/index.vue'),
      meta: {
        title: '文章详情'
      }
    },
    {
      path: '/category/list',
      component: () => import('@/views/article/category/index.vue'),
      meta: {
        title: '分类列表'
      }
    },
    {
      path: '/category/articleList',
      component: () => import('@/views/article/category/articleList.vue'),
      meta: {
        title: '分类文章'
      }
    }
  ]
})

VueRouter.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = String(to.meta.title)
  }
  next()
})
