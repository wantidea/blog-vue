import { createApp } from 'vue'
import App from './App.vue'
import { VueRouter } from '@/router'
import '@/styles/index.scss'
import { store } from '@/store/store'

import 'highlight.js/styles/a11y-dark.css'
import hljs from '@/utils/highlight'

// 初始化配置
store.setSetting()

const app = createApp(App)
app.use(VueRouter)
app.mount('#app')

// 代码高亮指令
app.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach((block: HTMLElement) => {
    hljs.highlightBlock(block)
  })
})
