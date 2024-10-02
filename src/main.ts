import { foldGutter } from '@codemirror/language'
import { lineNumbers } from '@codemirror/view'

import footnote from 'markdown-it-footnote'
import LinkAttr from 'markdown-it-link-attributes'
import { config } from 'md-editor-v3'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from './element'
import router from './router'
import 'md-editor-v3/lib/style.css'

import 'virtual:uno.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/xq-light.css'
import 'codemirror/theme/darcula.css'

/* 每个页面公共css */
import '@/assets/index.css'
import '@/assets/less/theme.less'

import 'codemirror/mode/css/css'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/selection/active-line'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/css-hint'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

config({
  codeMirrorExtensions(_theme, extensions) {
    return [...extensions, lineNumbers(), foldGutter()]
  },
  markdownItPlugins(plugins) { // , { editorId }
    const result = plugins.map((item) => {
      if (item.type === `taskList`) {
        return {
          ...item,
          options: {
            ...item.options,
            enabled: true,
            // 如果只是想对某个编辑器开启这个功能
            // enabled: editorId === 'myId'
          },
        }
      }
      return item
    })
    result.push({
      type: `footnote`,
      plugin: footnote,
      options: {
        backRef: true,
      },
    })
    result.push({
      type: `linkAttr`,
      plugin: LinkAttr,
      options: {
        matcher(href: string) {
          return !href.startsWith(`#`)
        },
        attrs: {
          target: `_blank`,
        },
      },
    })
    return result
  },
})

app.mount(`#app`)
