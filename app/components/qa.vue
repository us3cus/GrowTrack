<template>
  <div class="landing-bg min-h-screen flex flex-col items-center justify-center py-12 px-4">
    <!-- Header -->
    <div class="flex flex-col items-center mb-10">
      <div class="gradient-icon flex items-center justify-center mb-6 shadow-neumorph">
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="36" cy="36" r="32" fill="url(#paint0_linear)"/>
          <g filter="url(#shadow)">
            <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" font-size="36" font-family="Inter, 'SF Pro', Arial, sans-serif" font-weight="bold" fill="#fff">?</text>
          </g>
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="72" y2="72" gradientUnits="userSpaceOnUse">
              <stop stop-color="#a78bfa"/>
              <stop offset="1" stop-color="#7c3aed"/>
            </linearGradient>
            <filter id="shadow" x="0" y="0" width="72" height="72">
              <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#a78bfa"/>
            </filter>
          </defs>
        </svg>
      </div>
      <h1 class="text-4xl md:text-5xl font-extrabold text-center mb-3 text-black leading-tight font-landing">Часто задаваемые вопросы</h1>
      <p class="text-lg md:text-xl text-center text-gray-500 font-medium max-w-2xl font-landing">
        Узнайте больше о трекере самоопределения, маршруте и результатах.
      </p>
    </div>
    <!-- FAQ Accordion -->
    <div class="w-full max-w-3xl">
      <div v-for="(item, idx) in faqItems" :key="idx" :class="['faq-item mb-6 last:mb-0', openIndex === idx ? 'faq-item-open' : 'faq-item-closed']">
        <button @click="toggle(idx)" :class="['faq-question w-full flex justify-between items-center px-8 py-6 rounded-2xl shadow-neumorph border-none focus:outline-none transition-all', openIndex === idx ? 'bg-white' : 'bg-gray-100']">
          <span class="text-lg md:text-xl font-bold text-black font-landing">{{ item.label }}</span>
          <span class="text-purple-500 text-2xl font-bold">{{ openIndex === idx ? '–' : '+' }}</span>
        </button>
        <transition name="accordion-slide">
          <div v-show="openIndex === idx" class="faq-answer px-10 pb-5 pt-1 text-gray-700 text-base md:text-lg font-landing bg-white rounded-b-2xl">
            {{ item.content }}
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openIndex = ref<number|null>(null)
const toggle = (idx: number) => {
  openIndex.value = openIndex.value === idx ? null : idx
}

const faqItems = [
  {
    label: 'Что такое "трекер самоопределения"?',
    content: 'Это лёгкая форма с вопросами, которые помогают подростку понять себя: что ему важно, кем он хочет быть, и какие навыки стоит развивать.'
  },
  {
    label: 'Зачем проходить этот маршрут?',
    content: 'Чтобы не выбирать вслепую. А осознанно — на основе того, что тебе интересно, что ты ценишь и к чему хочешь прийти.'
  },
  {
    label: 'Сколько времени занимает прохождение?',
    content: 'Обычно 5–7 минут. Можно сделать на телефоне — не нужно ничего скачивать.'
  },
  {
    label: 'Что будет в итоге?',
    content: 'Сформируется персональный PDF-отчёт с твоим "маршрутом" — его получишь ты, твой родитель и (если хочешь) наставник.'
  },
  {
    label: 'А если я ещё не знаю, кем хочу быть?',
    content: 'Это нормально. Как раз для этого и нужен маршрут — чтобы начать разбираться, шаг за шагом.'
  },
  {
    label: 'Кому отправляется мой ответ?',
    content: 'Только тебе и твоему родителю. По желанию — наставнику или в Telegram. Ничего не публикуется.'
  },
  {
    label: 'Что делать после маршрута?',
    content: 'Можно перейти на 7-дневную программу, где ты попробуешь развить навыки из своего отчёта и посмотреть, подходит ли тебе выбранный путь.'
  }
]
</script>

<style scoped>
.landing-bg {
  background: #fff;
  font-family: 'Inter', 'SF Pro', Arial, sans-serif;
}
.font-landing {
  font-family: 'Inter', 'SF Pro', Arial, sans-serif;
  border-radius: 1.5rem;
}
.gradient-icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%);
  box-shadow: 0 4px 24px 0 rgba(124, 58, 237, 0.12), 0 1.5px 6px 0 rgba(167, 139, 250, 0.10);
}
.shadow-neumorph {
  box-shadow: 0 4px 24px 0 rgba(124, 58, 237, 0.10), 0 1.5px 6px 0 rgba(167, 139, 250, 0.08);
}
.faq-item {
  border-radius: 1.5rem;
  background: transparent;
  box-shadow: 0 2px 12px 0 rgba(124, 58, 237, 0.07), 0 1.5px 6px 0 rgba(167, 139, 250, 0.06);
  transition: box-shadow 0.2s, background 0.2s;
}
.faq-item-open {
  background: #fff;
}
.faq-item-closed {
  background: #f6f6fa;
}
.faq-item:active, .faq-item:focus-within {
  box-shadow: 0 6px 32px 0 rgba(124, 58, 237, 0.13), 0 2px 8px 0 rgba(167, 139, 250, 0.10);
}
.faq-question {
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 1.5rem;
  font-family: 'Inter', 'SF Pro', Arial, sans-serif;
  transition: background 0.2s;
}
.faq-answer {
  font-weight: 500;
  border-radius: 0 0 1.2rem 1.2rem;
  background: #fff;
  margin-top: -8px;
}
.accordion-slide-enter-active, .accordion-slide-leave-active {
  transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.accordion-slide-enter-from, .accordion-slide-leave-to {
  max-height: 0;
  opacity: 0;
}
.accordion-slide-enter-to, .accordion-slide-leave-from {
  max-height: 200px;
  opacity: 1;
}
</style>
