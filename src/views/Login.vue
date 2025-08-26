<template>
  <div class="login-page">
    <h1>九章online登入系統</h1>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="帳號" required />
      <input type="password" v-model="password" placeholder="密碼" required />
      <button type="submit">登入</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

function login() {
  if(username.value === 'admin' && password.value === '1234') {
    router.push('/data')
  } else if(username.value === 'user' && password.value === '5678') {
    router.push('/home')
  } else {
    alert('帳號或密碼錯誤')
  }
}
</script>

<style scoped>
.login-page {
  max-width: 400px;
  margin: 5em auto;
  padding: 2em;
  background: #e0f2f1;
  border-radius: 12px;
  text-align: center;
}
.login-page input {
  width: 100%;
  margin: 0.5em 0;
  padding: 0.6em;
  border-radius: 6px;
  border: 1px solid #26a69a;
}
.login-page button {
  width: 100%;
  padding: 0.8em;
  margin-top: 1em;
  border: none;
  border-radius: 6px;
  background: #26a69a;
  color: white;
  cursor: pointer;
}
</style>
