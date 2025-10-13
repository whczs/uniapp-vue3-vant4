<template>
  <view class="index-page">
    <text class="title">{{ message }}</text>
    <van-divider />
    <view>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
      />
    </view>
  </view>
</template>
<script setup>
const message = ref("Hello Uni-App Vue3");
</script>
<style scoped>

.title {
  font-size: 24rpx;
  color: #333;
}
</style>
