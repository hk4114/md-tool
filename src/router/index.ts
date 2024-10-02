import { createRouter, createWebHistory } from 'vue-router'
import markdown from '../views/markdown/index.vue'
import markdownHere from '../views/markdown-here/index.vue'
import Md2Wx from '../views/md2wx/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: `/`,
      name: `home`,
      component: markdown,
    },
    {
      path: `/about`,
      name: `about`,
      component: Md2Wx, // () => import('../views/AboutView.vue')
    },
    {
      path: `/markdown-here`,
      name: `markdown-here`,
      component: markdownHere, // () => import('../views/AboutView.vue')
    },
  ],
})

export default router
