<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <el-container>
    <el-header>
      <el-page-header :height="24">
        <template #icon>
          <el-icon><MessageBox /></el-icon>
        </template>
        <template #title>
          Markdown helper
        </template>
        <template #content>
          <el-tag>Default</el-tag>
        </template>
        <template #extra>
          <div class="flex items-center">
            <RouterLink to="/">
              Home
            </RouterLink> |
            <RouterLink to="/about">
              md2wx
            </RouterLink> |
            <RouterLink to="/markdown-here">
              markdown-here
            </RouterLink>
          </div>
        </template>
      </el-page-header>
    </el-header>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>

<style scoped>
.flex {
  display: flex;
}

.items-center {
  align-items: center;
}
</style>
