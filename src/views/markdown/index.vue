<script setup lang="ts" name="markdown">
import { Emoji, ExportPDF, Mark } from '@vavt/v3-extension'
import { ElForm, ElFormItem, ElOption, ElSelect } from 'element-plus'
import { MdEditor } from 'md-editor-v3'
import { reactive, ref } from 'vue'
import { toolbars } from './config'

const state = reactive({
  text: ``,
  previewTheme: `default`,
  codeTheme: `atom`,
  toolbars,
  previewThemeList: [`default`, `github`, `vuepress`, `mk-cute`, `smart-blue`, `cyanosis`],
  codeThemeList: [
    `atom`,
    `a11y`,
    `github`,
    `gradient`,
    `kimbie`,
    `paraiso`,
    `qtcreator`,
    `stackoverflow`,
  ],
})

const editorId = `editor-preview`

const editorRef = ref()
</script>

<template>
  <div>
    <ElForm :model="state" :inline="true" class="demo-form-inline">
      <ElFormItem label="预览主题">
        <ElSelect v-model="state.previewTheme">
          <ElOption
            v-for="theme in state.previewThemeList"
            :key="theme"
            :label="theme"
            :value="theme"
          />
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="代码主题">
        <ElSelect v-model="state.codeTheme">
          <ElOption
            v-for="theme in state.codeThemeList"
            :key="theme"
            :label="theme"
            :value="theme"
          />
        </ElSelect>
      </ElFormItem>
      <ElFormItem />
    </ElForm>
    <MdEditor
      ref="editorRef"
      v-model="state.text"
      class="editor"
      :editor-id="editorId"
      :preview-theme="state.previewTheme"
      :code-theme="state.codeTheme"
      :toolbars="state.toolbars"
      :footers="['markdownTotal', '=', 0, 'scrollSwitch']"
      show-code-row-number
      auto-detect-code
    >
      <template #defToolbars>
        <Mark />
        <Emoji />
        <ExportPDF :model-value="state.text" height="700px" />
      </template>
    </MdEditor>
  </div>
</template>

<style scoped>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}

.editor {
  height: calc(100vh - 166px);
}
</style>
