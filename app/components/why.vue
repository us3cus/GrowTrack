<template>
  <section class="w-full min-h-screen flex flex-col items-center justify-center bg-white py-20">
    <!-- Иконка -->
    <div class="flex justify-center mb-6">
      <div class="bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl p-4 shadow-lg flex items-center justify-center">
        <span class="text-4xl">🧭</span>
      </div>
    </div>
    <!-- Заголовок и подзаголовок -->
    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
      Это не тест. Это твой маршрут.
    </h1>
    <p class="text-lg text-gray-600 text-center mb-12 max-w-2xl">
      Ты просто отвечаешь на 6 простых вопросов — и получаешь персональный маршрут в PDF для себя, родителя и наставника.
    </p>
    <!-- Карточки -->
    <div class="w-full flex flex-col md:flex-row items-center justify-center gap-8">
      <!-- Карточка 1 -->
      <div class="why-card animate-fade-in-up" style="animation-delay:0.1s">
        <div class="why-card-img">
          <img src="~/assets/card1.jpg" alt="О себе" />
        </div>
        <div class="font-bold text-xl text-gray-900 mb-2 text-center">О себе</div>
        <div class="text-gray-600 text-center text-base">Узнай свои сильные стороны и предпочтения</div>
      </div>
      <!-- Карточка 2 -->
      <div class="why-card animate-fade-in-up" style="animation-delay:0.3s">
        <div class="why-card-img">
          <img src="~/assets/card2.png" alt="О мечте" />
        </div>
        <div class="font-bold text-xl text-gray-900 mb-2 text-center">О мечте</div>
        <div class="text-gray-600 text-center text-base">Определи свои цели и желания</div>
      </div>
      <!-- Карточка 3 -->
      <div class="why-card animate-fade-in-up" style="animation-delay:0.5s">
        <div class="why-card-img">
          <img src="~/assets/card3.jpeg" alt="О том, что важно" />
        </div>
        <div class="font-bold text-xl text-gray-900 mb-2 text-center">О том, что важно</div>
        <div class="text-gray-600 text-center text-base">Пойми свои ценности и приоритеты</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Нет логики, только шаблон
</script>

<style scoped>
section {
  min-height: 100vh;
}
.why-card {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  padding: 32px 28px 24px 28px;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.3s, transform 0.3s;
  cursor: default;
  opacity: 0;
  transform: translateY(40px);
  animation: fadeInUp 0.8s cubic-bezier(0.4,0,0.2,1) forwards;
}
.why-card:hover {
  box-shadow: 0 8px 32px rgba(124,58,237,0.12);
  transform: translateY(-4px) scale(1.03);
}
.why-card-img {
  width: 100%;
  height: 180px;
  border-radius: 18px;
  overflow: hidden;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.why-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: none;
  }
}
.animate-fade-in-up {
  animation-name: fadeInUp;
  animation-duration: 0.8s;
  animation-timing-function: cubic-bezier(0.4,0,0.2,1);
  animation-fill-mode: forwards;
}
</style>