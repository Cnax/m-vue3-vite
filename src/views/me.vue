<template>
  <div class="page-me van-safe-area-top van-safe-area-bottom">
    <van-nav-bar title="我的" fixed left-arrow ></van-nav-bar>
    <div class="basic-info-box">
      <div class="flex-row">
        <van-image class="avatar" round width="56px" height="56px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div>
          <div class="name">张明祥</div>
          <div class="mobile">18751964886</div>
        </div>
      </div>
      <div class="num-box">
        <div class="item">
          <div class="num">6</div>
          <div class="who">关注</div>
        </div>
        <div class="item">
          <div class="num">46</div>
          <div class="who">粉丝</div>
        </div>
        <div class="item">
          <div class="num">299</div>
          <div class="who">发布</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.page-me {
  padding-top: 46px;
}
.basic-info-box {
  padding-top: 14px;
  background-color: #fff;
  .avatar {
    margin-left: 22px;
    margin-right: 10px;
  }
  .name {
    margin-top: 8px;
    height: 25px;
    font-family: Microsoft YaHei UI, Microsoft YaHei UI;
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    line-height: 23px;
  }
  .mobile {
    margin-top: 5px;
    width: 85px;
    height: 17px;
    font-family: Inter, Inter;
    font-weight: 400;
    font-size: 14px;
    color: #666666;
    line-height: 16px;
  }
  .num-box {
    margin-top: 28px;
    display: flex;
    .item {
      flex: 1;
      text-align: center;
      position: relative;
      .num {
        font-size: 22px;
        color: #000000;
        line-height: 26px;
      }
      .who {
        font-weight: 400;
        font-size: 14px;
        color: #999999;
        line-height: 18px;
      }
      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 50%;
        border-right: 1Px dashed #E4E4E4;
      }
      &:last-child::after {
        display: none;
      }
    }
    .item:last-child {
      &::after {
        display: none;
      }
    }
  }
}
</style>