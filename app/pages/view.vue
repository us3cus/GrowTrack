<script setup lang="ts">
import { ref } from 'vue';
import api from '~/utils/axios';

const password = ref('');
const accessGranted = ref(false);
const error = ref('');
const results = ref<any[]>([]);
const loading = ref(false);

const PASSWORD = 'growtrack2024'; // Задайте нужный пароль

const checkPassword = () => {
  if (password.value === PASSWORD) {
    accessGranted.value = true;
    fetchResults();
    error.value = '';
  } else {
    error.value = 'Неверный пароль';
  }
};

const fetchResults = async () => {
  loading.value = true;
  try {
    const res = await api.get('/api/result/');
    results.value = res.data;
  } catch (e) {
    error.value = 'Ошибка загрузки данных';
  } finally {
    loading.value = false;
  }
};

const deleteResult = async (id: string) => {
  if (!confirm('Удалить результат?')) return;
  try {
    await api.delete(`/api/result/${id}`);
    results.value = results.value.filter(r => r._id !== id);
  } catch (e) {
    alert('Ошибка удаления');
  }
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-10">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-8 text-center">Просмотр всех результатов</h1>
      <div v-if="!accessGranted" class="flex flex-col items-center justify-center mt-20">
        <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
          <label class="block mb-2 text-lg font-medium">Введите пароль для доступа:</label>
          <input
            v-model="password"
            type="password"
            class="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400 text-black"
            placeholder="Пароль"
            @keyup.enter="checkPassword"
          />
          <button
            @click="checkPassword"
            class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition"
          >Войти</button>
          <div v-if="error" class="text-red-500 mt-3 text-center">{{ error }}</div>
        </div>
      </div>
      <div v-else>
        <div v-if="loading" class="text-center py-10 text-lg text-gray-500">Загрузка...</div>
        <div v-else>
          <div v-if="results.length === 0" class="text-center text-gray-500 py-10">Нет данных</div>
          <div v-else class="space-y-8">
            <div v-for="r in results" :key="r._id" class="bg-white rounded-xl shadow p-6 border border-gray-200 relative">
              <button @click="deleteResult(r._id)" class="absolute top-4 right-4 text-red-500 hover:text-red-700">Удалить</button>
              <div class="mb-2"><b>Имя:</b> {{ r.name }}</div>
              <div class="mb-2"><b>Возраст:</b> {{ r.age }}</div>
              <div class="mb-2"><b>Email:</b> {{ r.email }}</div>
              <div class="mb-2"><b>Telegram:</b> {{ r.telegram }}</div>
              <div class="mb-2"><b>Тип личности:</b> {{ r.test?.personalityType }}</div>
              <div class="mb-2"><b>Желаемая профессия:</b> {{ r.test?.dreamJob }}</div>
              <div class="mb-2"><b>Навыки:</b> {{ r.test?.requiredSkills }}</div>
              <div class="mb-2"><b>Полезные предметы:</b> {{ r.test?.usefulSubjects }}</div>
              <details class="mt-2">
                <summary class="cursor-pointer text-purple-600">AI-анализ</summary>
                <div class="prose max-w-none mt-2" v-html="r.aiResult"></div>
              </details>
              <div class="text-xs text-gray-400 mt-2">Создано: {{ new Date(r.createdAt).toLocaleString() }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.prose {
  white-space: pre-line;
}
</style>
