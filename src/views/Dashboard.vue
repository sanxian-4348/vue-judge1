<template>
  <div class="accounting-app">
    <h1 class="title">九章online記帳系統</h1>

    <form @submit.prevent="addRecord" autocomplete="off" class="form-area">
      <div class="form-group">
        <label>使用者</label>
        <input type="text" v-model="user" placeholder="請輸入使用者姓名" required />
      </div>
      <div class="form-group">
        <label>日期</label>
        <input type="date" v-model="date" required />
      </div>
      <div class="form-group">
        <label>項目</label>
        <input type="text" v-model="item" placeholder="如：早餐" required />
      </div>
      <div class="form-group">
        <label>金額</label>
        <input type="number" v-model.number="amount" required min="0" inputmode="numeric" />
      </div>
      <button class="btn primary" type="submit">
        {{ editIndex !== null ? '💾 更新記錄' : '➕ 新增記錄' }}
      </button>
    </form>

    <h2 class="subtitle">記錄列表</h2>
    <div class="table-area">
      <table v-if="records.length">
        <thead>
          <tr>
            <th>使用者</th>
            <th>日期</th>
            <th>項目</th>
            <th>金額</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(record, index) in records" :key="index">
            <td>{{ record.user }}</td>
            <td>{{ record.date }}</td>
            <td>{{ record.item }}</td>
            <td>{{ record.amount }}</td>
            <td>
              <button class="btn primary" @click="editRecord(index)">編輯</button>
              <button class="btn danger" @click="removeRecord(index)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="no-record">📭 目前沒有記錄</div>
    </div>

    <!-- 總金額統計 -->
    <h3 class="subtitle" v-if="records.length">總金額：{{ totalAmount }}</h3>

    <!-- 各使用者的統計 -->
    <ul v-if="records.length" class="user-totals">
      <li v-for="(amount, username) in userTotals" :key="username">
        {{ username }}：{{ amount }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

const user = ref('')
const date = ref('')
const item = ref('')
const amount = ref(null)
const records = ref([])
const editIndex = ref(null)

// 新增或更新
function addRecord() {
  if (editIndex.value !== null) {
    records.value[editIndex.value] = {
      user: user.value,
      date: date.value,
      item: item.value,
      amount: amount.value
    }
    editIndex.value = null
  } else {
    records.value.push({
      user: user.value,
      date: date.value,
      item: item.value,
      amount: amount.value
    })
  }
  clearForm()
}

// 編輯
function editRecord(index) {
  const r = records.value[index]
  user.value = r.user
  date.value = r.date
  item.value = r.item
  amount.value = r.amount
  editIndex.value = index
}

// 刪除
function removeRecord(index) {
  records.value.splice(index, 1)
}

// 清空表單
function clearForm() {
  user.value = ''
  date.value = ''
  item.value = ''
  amount.value = null
}

// 總金額
const totalAmount = computed(() =>
  records.value.reduce((sum, r) => sum + r.amount, 0)
)

// 每個使用者的總和
const userTotals = computed(() => {
  const result = {}
  for (const r of records.value) {
    if (!result[r.user]) result[r.user] = 0
    result[r.user] += r.amount
  }
  return result
})

// localStorage
onMounted(() => {
  const saved = localStorage.getItem('records')
  if (saved) records.value = JSON.parse(saved)
})

watch(records, (val) => {
  localStorage.setItem('records', JSON.stringify(val))
}, { deep: true })
</script>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #e0f7fa, #e8f5e9);
}

.accounting-app {
  max-width: 1000px;
  margin: auto;
  padding: 1.5em;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.title {
  text-align: center;
  font-size: 2em;
  font-weight: 800;
  color: #00695c;
  margin-bottom: 1.2em;
}

.form-area {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1em;
  margin-bottom: 1.5em;
}

.form-group {
  display: flex;
  flex-direction: column;
}
.form-group label {
  margin-bottom: 0.4em;
  font-weight: 600;
  color: #004d40;
}
.form-group input {
  padding: 0.6em;
  border-radius: 6px;
  border: 1px solid #b0bec5;
  font-size: 1em;
  transition: border 0.2s;
}
.form-group input:focus {
  outline: none;
  border-color: #26a69a;
  box-shadow: 0 0 0 2px rgba(38, 166, 154, 0.3);
}

.btn {
  padding: 0.6em 1.2em;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s, transform 0.1s;
}
.btn.primary {
  background: #26a69a;
  color: white;
}
.btn.primary:hover {
  background: #1e8e86;
}
.btn.danger {
  background: #ef5350;
  color: white;
}
.btn.danger:hover {
  background: #d32f2f;
}
.btn:active {
  transform: scale(0.96);
}

.table-area {
  overflow-x: auto;
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95em;
}
th, td {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  text-align: center;
}
th {
  background: #26a69a;
  color: white;
}
tr:hover td {
  background: rgba(38, 166, 154, 0.08);
}

.no-record {
  text-align: center;
  padding: 1em;
  color: #888;
}

.subtitle {
  margin-top: 1.5em;
  text-align: center;
  color: #00695c;
  font-weight: bold;
}

.user-totals {
  list-style: none;
  padding: 0;
  margin-top: 0.8em;
  text-align: center;
}
.user-totals li {
  color: #004d40;
  font-weight: 600;
  margin: 0.3em 0;
}

@media (max-width: 600px) {
  .form-area {
    grid-template-columns: 1fr;
  }
  th, td {
    font-size: 0.85em;
    padding: 8px;
  }
}
</style>
