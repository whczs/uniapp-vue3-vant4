<template>
  <view id="app" class="app-container">
    <router-view />
  </view>
</template>

<script>
export default {
  onLaunch() {
    // 应用启动时执行的逻辑
    console.log('App launched')
  },
  onShow() {
    // 应用显示时执行的逻辑
  }
}
</script>

<style>
/* 样式部分（可选） */
.app-container {
  min-height: 100vh;
}
</style>