<script setup lang="ts">
import { ref } from 'vue';
import api from '~/utils/axios';

const name = ref('');
const age = ref('');
const email = ref('');
const telegram = ref('');
const loading = ref(false);
const success = ref(false);
const error = ref('');

// Получаем результаты теста из localStorage
const testData = ref<any>(null);
if (process.client) {
  const data = localStorage.getItem('growtrack-form');
  if (data) testData.value = JSON.parse(data);
}

const validate = () => {
  const ageNum = Number(age.value);
  if (
    !name.value.trim() ||
    !email.value.trim() ||
    !telegram.value.trim() ||
    !ageNum ||
    ageNum < 6 ||
    ageNum > 99
  ) {
    error.value = 'Пожалуйста, заполните все поля корректно.';
    return false;
  }
  // Простейшая email-проверка
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
    error.value = 'Введите корректный email.';
    return false;
  }
  error.value = '';
  return true;
};

const handleSubmit = async () => {
  if (!validate()) return;
  loading.value = true;
  error.value = '';
  try {
    const payload = {
      name: name.value,
      age: age.value,
      email: email.value,
      telegram: telegram.value,
      test: testData.value
    };
    // Сохраняем в localStorage
    localStorage.setItem('growtrack-user', JSON.stringify(payload));
          // Отправляем POST-запрос через axios
      const res = await api.post('/api/send-result', payload, {
      headers: { 'Content-Type': 'application/json' }
    });
    if (res.status === 200) {
      success.value = true;
    } else {
      throw new Error('Ошибка при отправке.');
    }
  } catch (e: any) {
    error.value = e.response?.data?.message || e.message || 'Ошибка отправки.';
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="form-container bg-white min-h-screen flex flex-col items-center pt-10">
    <div class="w-full max-w-3xl">
      <div class="bg-white shadow-xl rounded-2xl border border-gray-300 p-8 mt-8 animate-fade-in-up">
        <div class="text-3xl font-bold mb-4 text-gray-900 text-center">Получить результат</div>
        <div class="text-gray-700 text-center mb-8">Введите свои данные, чтобы получить персональный маршрут и PDF-отчёт.</div>
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
          <input v-model="name" type="text" placeholder="Имя" class="input" />
          <input v-model="age" type="number" min="6" max="99" placeholder="Возраст" class="input" />
          <input v-model="email" type="email" placeholder="Email" class="input" />
          <input v-model="telegram" type="text" placeholder="Telegram (например, @username)" class="input" />
          <div v-if="error" class="text-red-500 text-center">{{ error }}</div>
          <button type="submit"
            class="bg-gradient-to-r from-purple-500 to-indigo-400 text-white shadow-md h-14 text-xl px-12 rounded-full font-semibold transition hover:from-indigo-400 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="loading"
          >
            {{ loading ? 'Отправка...' : 'Получить результат' }}
          </button>
          <div v-if="success" class="text-green-600 text-center text-lg mt-2">Спасибо! Ваши данные отправлены.</div>
        </form>
      </div>
    </div>
    <Footer class="mt-16" />
  </div>
</template>

<script lang="ts">
import Footer from '~/components/Footer.vue';
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 1rem;
  padding: 1rem 1.2rem;
  font-size: 1.1rem;
  color: #222;
  background: #fafaff;
  transition: border 0.2s, box-shadow 0.2s;
  outline: none;
}
.input:focus {
  border-color: #a78bfa;
  box-shadow: 0 0 0 2px #a78bfa33;
}
.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>