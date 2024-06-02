<template>
  <div class="page-login">
    <van-nav-bar title="登录" fixed></van-nav-bar>
    <van-form class="login-form" @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script name="Login" setup lang="ts">
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const onSubmit = (values: any) => {
  console.log('submit', values);
};
</script>

<style scoped lang="scss">
.page-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.login-form {
  width: 100%;
  margin-top: 20px;
}
</style>
