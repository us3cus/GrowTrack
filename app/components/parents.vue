<template>
  <section class="w-full min-h-screen flex items-center justify-center bg-white py-20">
    <div class="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-8">
      <!-- Левая часть: текст и преимущества -->
      <div class="flex-1 flex flex-col items-start justify-center max-w-xl animate-fade-in-left">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          🧩 Как родитель может помочь?
        </h2>
        <div class="text-lg text-gray-700 mb-6">
          <p class="mb-3">Вы получите готовый PDF-отчёт с размышлениями ребёнка:</p>
          <ul class="mb-3 list-disc list-inside space-y-1">
            <li>кем он хочет быть,</li>
            <li>какие навыки он считает важными,</li>
            <li>как вы можете его поддержать.</li>
          </ul>
          <p>Это возможность начать честный разговор и вместе двигаться к цели.</p>
        </div>
        <button class="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow transition-all">
          Получить PDF-отчёт
        </button>
      </div>
      <!-- Правая часть: фото и карточка -->
      <div class="flex-1 flex items-center justify-center relative w-full max-w-md animate-fade-in-right">
        <img src="~/assets/family.jpg" alt="Родитель" class="rounded-2xl w-full h-80 object-cover shadow-lg" />
        <!-- Карточка поверх фото -->
        <div class="absolute left-1/2 -bottom-10 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-8 py-6 w-80 flex flex-col items-start gap-4 border border-gray-100">
          <div class="font-semibold text-gray-900 text-base mb-2 flex items-center gap-2">
            <span class="text-blue-600 text-lg">📄</span>
            PDF-отчёт ребёнка
          </div>
          <div class="text-gray-700 text-sm flex items-center gap-2">
            <span class="text-blue-600">💬</span> Честный разговор
          </div>
          <div class="text-gray-700 text-sm flex items-center gap-2">
            <span class="text-blue-600">🤝</span> Поддержка и совместная цель
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Нет логики, только шаблон
</script>

<style scoped>
section {
  min-height: 100vh;
}

/* Анимация появления слева */
.animate-fade-in-left {
  opacity: 0;
  transform: translateY(40px) translateX(-40px);
  animation: fadeInLeft 1s cubic-bezier(0.4,0,0.2,1) 0.1s forwards;
}
@keyframes fadeInLeft {
  to {
    opacity: 1;
    transform: none;
  }
}

/* Анимация появления справа */
.animate-fade-in-right {
  opacity: 0;
  transform: translateY(40px) translateX(40px);
  animation: fadeInRight 1s cubic-bezier(0.4,0,0.2,1) 0.3s forwards;
}
@keyframes fadeInRight {
  to {
    opacity: 1;
    transform: none;
  }
}

/* Фиолетовая кнопка */
button.bg-purple-600 {
  background-color: #7c3aed;
}
button.bg-purple-600:hover {
  background-color: #6d28d9;
}
</style>
