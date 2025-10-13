<template>
  <view class="mine">
    <view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-t-80 u-p-b-30">
      <view class="u-flex" @click="profile">
        <view class="u-flex-middle">
          <view class="u-font-18 u-p-b-20">{{ nickName || '暂未登录' }}</view>
        </view>
      </view>
    </view>

  </view>
</template>

<script setup>

</script>

<style lang="scss">
.mine {
  height: 100vh;
  box-sizing: border-box;
  background: linear-gradient(180deg, #D4F7EB 0%, #C0E5F7 10%, #FFF 30%, #FFF 100%);
}

.user-box {
  justify-content: space-between;
}

.cell-group {
  margin-top: 10rpx;
  margin-bottom: 10rpx;
  padding-left: 10rpx;
  padding-right: 10rpx;
}

.center-nav {
  background-color: #FFFFFF;
  margin-top: 30rpx;
  padding: 30rpx 0;
  border-radius: 8px;

  .tabName {
    color: #606266;
    font-size: 26rpx;
    padding-top: 10rpx;
  }
}

.qiandao {
  color: #606266;
  font-size: 24rpx;
  margin-right: 24rpx;
  margin-top: 54rpx;
  justify-content: center;
  align-items: center;
}

.clearBtn {
  margin: 0;
  padding: 0;
  line-height: 1;
  background-color: #FFFFFF;
}

.clearBtn::after {
  position: unset !important;
  border: unset;
}

// .personal {
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-between;
// 	padding: 250rpx 0 50rpx 40rpx;

// 	.personal-main {
// 		display: flex;
// 		align-items: center;
// 	}

// 	.personal-info {
// 		display: flex;
// 		flex-direction: column;
// 		margin-left: 20rpx;
// 	}
// }

// .u-avatar {
// 	margin-right: 30rpx;
// }

// .n-p {
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	width: 90%;
// 	margin: 0 auto;

// 	.p-left {
// 		margin-right: 10rpx;
// 	}

// 	.p-right {
// 		height: 120rpx;
// 		flex: 1;
// 		display: flex;
// 		align-items: center;
// 		justify-content: space-between;
// 		border-bottom: 1px solid #F1ECEC;

// 		.p-right-main {
// 			display: flex;
// 			align-items: center;
// 			justify-content: space-between;

// 			.p-right-main-name {
// 				font-size: 36rpx;
// 				font-weight: 500;
// 			}
// 		}// 	}
// }</style>