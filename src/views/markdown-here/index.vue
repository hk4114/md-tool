<script setup lang="ts" name="mh">
import { MdPreview } from 'md-editor-v3'
import { onMounted, ref } from 'vue'

const id = `preview-only`

const text = ref(``)

onMounted(() => {
  text.value = (document.getElementById(`textarea`) as HTMLInputElement).value
})

const list = ref([
  {
    title: `markdown`,
    link: `https://markdown.com.cn/editor/`,
  },
  {
    title: `open write`,
    link: `https://md.openwrite.cn/`,
  },
  {
    title: `quail.ink`,
    link: `https://quail.ink/tools/markdown-to-wx/`,
  },
  {
    title: `墨滴`,
    link: `https://editor.mdnice.com/`,
  },
  {
    title: `Doocs`,
    link: `https://doocs.github.io/md/`,
  },
])
</script>

<template>
  <div>
    <h1>markdown-here</h1>
    复制代码到 浏览器插件 markdown-here
    <div class="page-wrap">
      <div class="head-wrap">
        <span class="head-link">可用地址：</span>
        <el-link
          v-for="item in list"
          :key="item.title"
          :href="item.link"
          target="_blank"
          type="primary"
          class="head-link"
        >
          {{ item.title }}
        </el-link>
      </div>
    </div>
    <textarea id="textarea" class="textarea">
## 得到

```css
@include-when-export url(http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,700,400&subset=latin,latin-ext);

/**
 * css forked from https://github.com/GitbookIO/gitbook
 * www.gitbook.com
 * Apache License
 * https://github.com/GitbookIO/gitbook/blob/master/LICENSE
 **/

@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: normal;
  src: local('Open Sans Regular'), url('./github/400.woff') format('woff')
}

@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: normal;
  src: local('Open Sans Italic'), url('./github/400i.woff') format('woff')
}

@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: bold;
  src: local('Open Sans Bold'), url('./github/700.woff') format('woff')
}

@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: bold;
  src: local('Open Sans Bold Italic'), url('./github/700i.woff') format('woff')
}

html {
  font-size: 16px;
}

body {
  font-family: "Open Sans", "Clear Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: rgb(51, 51, 51);
  line-height: 1.6;
}

#write {
  max-width: 860px;
  margin: 0 auto;
  padding: 20px 30px 40px 30px;
  padding-top: 20px;
  padding-bottom: 100px;
}

#write>ul:first-child,
#write>ol:first-child {
  margin-top: 30px;
}

body>*:first-child {
  margin-top: 0 !important;
}

body>*:last-child {
  margin-bottom: 0 !important;
}

a {
  color: #4183C4;
}

strong {
  color: #FF992A;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
  line-height: 1.4;
  cursor: text;
}

h1:hover a.anchor,
h2:hover a.anchor,
h3:hover a.anchor,
h4:hover a.anchor,
h5:hover a.anchor,
h6:hover a.anchor {
  /*background: url("../../images/modules/styleguide/para.png") no-repeat 10px center;*/
  text-decoration: none;
}

h1 tt,
h1 code {
  font-size: inherit;
}

h2 tt,
h2 code {
  font-size: inherit;
}

h3 tt,
h3 code {
  font-size: inherit;
}

h4 tt,
h4 code {
  font-size: inherit;
}

h5 tt,
h5 code {
  font-size: inherit;
}

h6 tt,
h6 code {
  font-size: inherit;
}

h1 {
  padding-bottom: .3em;
  font-size: 2.25em;
  line-height: 1.2;
  border-bottom: 1px solid #eee;
}

h2 {
  padding-bottom: .3em;
  font-size: 1.75em;
  line-height: 1.225;
  border-bottom: 1px solid #eee;
}

h3 {
  font-size: 1.5em;
  line-height: 1.43;
}

h4 {
  font-size: 1.25em;
}

h5 {
  font-size: 1em;
}

h6 {
  font-size: 1em;
  color: #777;
}

p,
blockquote,
ul,
ol,
dl,
table {
  margin: 0.8em 0;
}

li>ol,
li>ul {
  margin: 0 0;
}

hr {
  height: 4px;
  padding: 0;
  margin: 16px 0;
  background-color: #e7e7e7;
  border: 0 none;
  overflow: hidden;
  box-sizing: content-box;
  border-bottom: 1px solid #ddd;
}

body>h2:first-child {
  margin-top: 0;
  padding-top: 0;
}

body>h1:first-child {
  margin-top: 0;
  padding-top: 0;
}

body>h1:first-child+h2 {
  margin-top: 0;
  padding-top: 0;
}

body>h3:first-child,
body>h4:first-child,
body>h5:first-child,
body>h6:first-child {
  margin-top: 0;
  padding-top: 0;
}

a:first-child h1,
a:first-child h2,
a:first-child h3,
a:first-child h4,
a:first-child h5,
a:first-child h6 {
  margin-top: 0;
  padding-top: 0;
}

h1 p,
h2 p,
h3 p,
h4 p,
h5 p,
h6 p {
  margin-top: 0;
}

li p.first {
  display: inline-block;
}

ul,
ol {
  padding-left: 30px;
}

ul:first-child,
ol:first-child {
  margin-top: 0;
}

ul:last-child,
ol:last-child {
  margin-bottom: 0;
}

blockquote {
  border-left: 3px solid #138C57;
  padding: 0 15px;
  color: #777777;
}

blockquote blockquote {
  padding-right: 0;
}

table {
  padding: 0;
  word-break: initial;
}

#write {
  overflow-x: auto;
}

table tr {
  border-top: 1px solid #cccccc;
  background-color: white;
  margin: 0;
  padding: 0;
}

table tr:nth-child(2n) {
  background-color: #f8f8f8;
}

table tr th {
  font-weight: bold;
  border: 1px solid #cccccc;
  text-align: left;
  margin: 0;
  padding: 6px 13px;
}

table tr td {
  border: 1px solid #cccccc;
  text-align: left;
  margin: 0;
  padding: 6px 13px;
}

table tr th:first-child,
table tr td:first-child {
  margin-top: 0;
}

table tr th:last-child,
table tr td:last-child {
  margin-bottom: 0;
}

.CodeMirror-gutters {
  border-right: 1px solid #ddd;
}

.md-fences,
code,
tt {
  border: 1px solid #ddd;
  color: #A04B01;
  background-color: #f8f8f8;
  border-radius: 3px;
  padding: 0;
  font-family: Consolas, "Liberation Mono", Courier, monospace;
  padding: 2px 4px 0px 4px;
  font-size: 0.9em;
}

.md-fences {
  margin-bottom: 15px;
  margin-top: 15px;
  padding: 0.2em 1em;
  padding-top: 8px;
  padding-bottom: 6px;
}

.task-list {
  padding-left: 0;
}

.task-list-item {
  padding-left: 32px;
}

.task-list-item input {
  top: 3px;
  left: 8px;
}

@media screen and (min-width: 914px) {
  /*body {
        width: 854px;
        margin: 0 auto;
    }*/
}

@media print {
  html {
    font-size: 13px;
  }

  table,
  pre {
    page-break-inside: avoid;
  }

  pre {
    word-wrap: break-word;
  }
}

.md-fences {
  background-color: #f8f8f8;
}

#write pre.md-meta-block {
  padding: 1rem;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f7f7f7;
  border: 0;
  border-radius: 3px;
  color: #777777;
  margin-top: 0 !important;
}

.mathjax-block>.code-tooltip {
  bottom: .375rem;
}

#write>h3.md-focus:before {
  left: -1.5625rem;
  top: .375rem;
}

#write>h4.md-focus:before {
  left: -1.5625rem;
  top: .285714286rem;
}

#write>h5.md-focus:before {
  left: -1.5625rem;
  top: .285714286rem;
}

#write>h6.md-focus:before {
  left: -1.5625rem;
  top: .285714286rem;
}

.md-image>.md-meta {
  border: 1px solid #ddd;
  border-radius: 3px;
  font-family: Consolas, "Liberation Mono", Courier, monospace;
  padding: 2px 4px 0px 4px;
  font-size: 0.9em;
  color: inherit;
}

.md-tag {
  color: inherit;
}

.md-toc {
  margin-top: 20px;
  padding-bottom: 20px;
}

#typora-quick-open {
  border: 1px solid #ddd;
  background-color: #f8f8f8;
}

#typora-quick-open-item {
  background-color: #FAFAFA;
  border-color: #FEFEFE #e5e5e5 #e5e5e5 #eee;
  border-style: solid;
  border-width: 1px;
}

#md-notification:before {
  top: 10px;
}

/** focus mode */
.on-focus-mode blockquote {
  border-left-color: rgba(85, 85, 85, 0.12);
}

header,
.context-menu,
.megamenu-content,
footer {
  font-family: "Segoe UI", "Arial", sans-serif;
}
```

## 李笑来

```css
.wrapper {
  font-size: 16px;
  line-height: 1.8em;
  letter-spacing: 0.1em;
}

pre,
code {
  font-size: 14px;
  font-family: Roboto, 'Courier New', Consolas, Inconsolata, Courier, monospace;
  margin: auto 5px;
}

code {
  white-space: pre-wrap;
  border-radius: 2px;
  display: inline;
}

pre {
  font-size: 15px;
  line-height: 1.4em;
  display: block!important;
}

pre code {
  white-space: pre;
  overflow: auto;
  border-radius: 3px;
  padding: 1px 1px;
  display: block !important;
}

strong,
b {
  color: #BF360C;
}

em,
i {
  color: #009688;
}

hr {
  border: 1px solid #BF360C;
  margin: 1.5em auto;
}

p {
  margin: 1.5em 5px !important;
}

table,
pre,
dl,
blockquote,
q,
ul,
ol {
  margin: 10px 5px;
}

ul,
ol {
  padding-left: 15px;
}

li {
  margin: 10px;
}

li p {
  margin: 10px 0 !important;
}

ul ul,
ul ol,
ol ul,
ol ol {
  margin: 0;
  padding-left: 10px;
}

ul {
  list-style-type: circle;
}

dl {
  padding: 0;
}

dl dt {
  font-size: 1em;
  font-weight: bold;
  font-style: italic;
}

dl dd {
  margin: 0 0 10px;
  padding: 0 10px;
}

blockquote,
q {
  border-left: 2px solid #009688;
  padding: 0 10px;
  color: #777;
  quotes: none;
  margin-left: 1em;
}

blockquote::before,
blockquote::after,
q::before,
q::after {
  content: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 20px 0 10px;
  padding: 0;
  font-style: bold !important;
  color: #009688 !important;
  text-align: center !important;
  margin: 1.5em 5px !important;
  padding: 0.5em 1em !important;
}

h1 {
  font-size: 24px !important;
  border-bottom: 1px solid #ddd !important;
}

h2 {
  font-size: 20px !important;
  border-bottom: 1px solid #eee !important;
}

h3 {
  font-size: 18px;
}

h4 {
  font-size: 16px;
}

table {
  padding: 0;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1em;
  font: inherit;
  border: 0;
  margin: 0 auto;
}

tbody {
  margin: 0;
  padding: 0;
  border: 0;
}

table tr {
  border: 0;
  border-top: 1px solid #CCC;
  background-color: white;
  margin: 0;
  padding: 0;
}

table tr:nth-child(2n) {
  background-color: #F8F8F8;
}

table tr th,
table tr td {
  font-size: 16px;
  border: 1px solid #CCC;
  margin: 0;
  padding: 5px 10px;
}

table tr th {
  font-weight: bold;
  color: #eee;
  border: 1px solid #009688;
  background-color: #009688;
}
```

## 少数派

```css
/* Sspai Web Theme A theme to [sspai](ssp.ai) default theme. Developed by Codegass(wchweichenhao@gmial.com) & Yves(yves@sspai.com) Download Cuto on the App Store and Google Play! */
body {
  font-size: 15px;
  color: #333;
  background: #fff;
  font-family: Helvetica, Arial, "PingFang SC", "Microsoft YaHei", "WenQuanYi Micro Hei", "tohoma,sans-serif";
  margin: 0;
  padding: 10%;
}

h1 {
  font-size: 2.2em;
  font-weight: 700;
  line-height: 1.1;
  padding-top: 16px;
  margin-bottom: 4px;
}

h2,
h3,
h4,
h5,
h6 {
  line-height: 1.5em;
  margin-top: 2.2em;
  margin-bottom: 4px;
}

h2 {
  font-size: 1.4em;
  margin: 40px 10px 20px 0;
  padding-left: 9px;
  border-left: 6px solid #ff7e79;
  font-weight: 700;
  line-height: 1.4;
}

h3 {
  font-weight: 700;
  font-size: 1.2em;
  line-height: 1.4;
  margin: 10px 0 5px;
  padding-top: 10px;
}

h4 {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.1em;
  line-height: 1.4;
  margin: 10px 0 5px;
  padding-top: 10px
}

h5,
h6 {
  font-size: .9em;
}

h5 {
  font-weight: bold;
  text-transform: uppercase;
}

h6 {
  font-weight: normal;
  color: #AAA;
}

img {
  width: 100%;
  border-radius: 5px;
  display: block;
  margin-bottom: 15px;
  height: auto;
}

dl,
ol,
ul {
  margin-top: 12px;
  margin-bottom: 20px;
  padding-left: 5%;
  line-height: 1.8;
}

p {
  margin: 0 0 20px;
  padding: 0;
  line-height: 1.8;
}

a {
  color: #f22f27;
  text-decoration: none;
}

a:hover {
  color: #f55852;
  text-decoration: underline;
}

a:focus {
  outline-offset: -2px;
}

blockquote {
  font-size: 1em;
  font-style: normal;
  padding: 30px 38px;
  margin: 0 0 15px;
  position: relative;
  line-height: 1.8;
  text-indent: 0;
  border: none;
  color: #888;
}

blockquote:before {
  content: "“";
  left: 12px;
  top: 0;
  color: #E0E0E0;
  font-size: 4em;
  font-family: Arial, serif;
  line-height: 1em;
  font-weight: 700;
  position: absolute;
}

blockquote:after {
  content: "”";
  right: 12px;
  bottom: -26px;
  color: #E0E0E0;
  font-size: 4em;
  font-family: Arial, serif;
  line-height: 1em;
  font-weight: 700;
  position: absolute;
  bottom: -31px;
}

strong,
dfn {
  font-weight: 700;
}

em,
dfn {
  font-style: italic;
  font-weight: 400;
}

del {
  text-decoration: line-through;
}

/*code {font-size:90%;}*/
/*pre {text-align:left; overflow-x: scroll; color: #257fa0; background: #f6f6f6; padding: 10pt 15pt; border-radius: 3px; border: solid 1px #e2e2e2;}*/
pre {
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857;
  word-break: break-all;
  word-wrap: break-word;
  border-radius: 4px;
  white-space: pre-wrap;
  display: block;
  background: #f8f8f8;
  padding: 10px 20px;
  border: none;
  margin-bottom: 25px;
  color: #666;
  font-family: Courier, sans-serif;
}

code {
  color: #c7254e;
  background-color: #f9f2f4;
  border-radius: 4px;
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  padding: 2px 4px;
  font-size: 90%;
}

p>code {
  color: #c7264e;
  background-color: #f9f2f4;
  font-size: .95em;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
}

figure {
  margin: 1em 0;
}

figcaption {
  font-size: 0.75em;
  padding: 0.5em 2em;
  margin-bottom: 2em;
}

figure img {
  margin-bottom: 0px;
}

hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eee;
}

ol p,
ul p {
  margin-bottom: 0px;
}

li {
  margin-bottom: 0.75em;
  margin-top: 0.75em;
}

ol#footnotes {
  font-size: 0.95em;
  padding-top: 1em;
  margin-top: 1em;
  margin-left: 0;
  border-top: 1px solid #eaeaea;
  counter-reset: footer-counter;
  list-style: none;
  color: #555;
  padding-left: 5%;
  margin: 20px 0;
}

ol#footnotes li {
  margin-bottom: 10px;
  margin-left: 16px;
  font-weight: 400;
  line-height: 2;
  list-style-type: none;
}

ol#footnotes li:before {
  content: counter(footer-counter) ". ";
  counter-increment: footer-counter;
  font-weight: 800;
  font-size: .95em;
}

@keyframes highfade {
  0% {
    background-color: none;
  }

  20% {
    background-color: yellow;
  }

  100% {
    background-color: none;
  }
}

@-webkit-keyframes highfade {
  0% {
    background-color: none;
  }

  20% {
    background-color: yellow;
  }

  100% {
    background-color: none;
  }
}

a:target,
ol#footnotes li:target,
sup a:target {
  animation-name: highfade;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  -webkit-animation-name: highfade;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: 1;
  -webkit-animation-timing-function: ease-in-out;
}

a:target {
  border: 0;
  outline: 0;
}
```
      </textarea>
    <MdPreview :editor-id="id" :model-value="text" />
  </div>
</template>

<style scoped>
.textarea {
  display: none;
}

.head-wrap {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 12px;
}
.head-link {
  margin-right: 20px;
}
</style>
