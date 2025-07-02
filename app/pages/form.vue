<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentStep = ref(0);

// Form data interface
interface FormData {
  start: {
    ready: boolean;
  };
  phone: string;
  idealDay: string;
  why1: string;
  why2: string;
  why3: string;
  dreamJob: string;
  requiredSkills: string;
  usefulSubjects: string;
  personalityType: string;
  [key: string]: any; // Index signature for dynamic access
}

const formData = ref<FormData>({
  start: {
    ready: false
  },
  phone: '',
  idealDay: '',
  why1: '',
  why2: '',
  why3: '',
  dreamJob: '',
  requiredSkills: '',
  usefulSubjects: '',
  personalityType: ''
});

// Questions array
const questions = [
  {
    title: 'Старт',
    text: 'Хочешь понять, зачем тебе учиться и что именно нужно учить? \n Это займёт 5–7 минут. Всё просто. Без оценок. По-настоящему про тебя.',
  },
  {
    title: 'Идеальный день',
    text: 'Представь, тебе 23 года. У тебя всё получилось.\nГде ты? Чем ты занимаешься? Что вокруг? Как ты себя чувствуешь?',
    hint: 'Напиши 3–5 фраз. Можно кратко, можно как хочешь.',
    example: 'Пример: «Я живу в Батуми, монтирую видео для блогеров, работаю удалённо, гуляю у моря».',
    type: 'textarea',
    field: 'idealDay'
  },
  {
    title: 'Шаг 2: Техника 3 Почему',
    text: 'А теперь спроси себя: Почему я хочу такую жизнь?',
    type: 'textarea',
    field: 'why1',
  },
  {
    title: 'Шаг 2: Техника 3 Почему',
    text: 'А теперь спроси себя: А почему это важно для меня?',
    type: 'textarea',
    field: 'why2',
  },
  {
    title: 'Шаг 2: Техника 3 Почему',
    text: 'А теперь спроси себя: А почему именно это меня цепляет?',
    type: 'textarea',
    field: 'why3',
  },
  {
    title: 'Цель → Навык → Предмет',
    text: 'Напиши, кем ты хочешь быть или что тебе нравится делать.\nПример: дизайнер, врач, предприниматель, блогер, фотограф, программист…',
    type: 'textarea',
    field: 'dreamJob'
  },
  {
    title: 'Необходимые навыки',
    text: 'Какие навыки тебе для этого нужны?\nПример: креатив, эмпатия, логика, общение, анализ…',
    type: 'textarea',
    field: 'requiredSkills'
  },
  {
    title: 'Полезные предметы',
    text: 'А теперь — какие школьные предметы помогут прокачать эти навыки?\nПодумай, что реально помогает. Мы можем потом это проверить вместе.',
    type: 'textarea',
    field: 'usefulSubjects'
  },
  {
    title: 'Вопрос 6: Какой ты по типажу?',
    text: 'Выбери свой тип личности:',
    type: 'radio',
    field: 'personalityType',
    options: [
      { value: 'логик', label: 'Логик' },
      { value: 'визуал', label: 'Визуал' },
      { value: 'творец', label: 'Творец' },
      { value: 'бунтарь', label: 'Бунтарь' }
    ]
  },
  {
    title: 'Итог',
    text: 'Отлично! Ты прошёл все вопросы. Теперь можешь получить свой персональный результат.',
    type: 'final'
  }
];

// Progress calculation
const progress = computed(() => {
  return Math.round((currentStep.value / (questions.length - 1)) * 100);
});

// Автоматический переход на results при 100% прогресса
watch(progress, (val) => {
  if (val === 100 && currentStep.value === questions.length - 1) {
    saveToLocalStorage();
  }
});

// Navigation functions
const nextStep = () => {
  currentStep.value++;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const prevStep = () => {
  currentStep.value--;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Сохраняем форму в localStorage
const saveToLocalStorage = () => {
  localStorage.setItem('growtrack-form', JSON.stringify(formData.value));
  navigateTo({ path: '/result' })
};

// Computed properties for dynamic content
const currentQuestion = computed(() => {
  return questions[currentStep.value] || questions[0];
});

// Check if current step is valid
const isStepValid = computed(() => {
  const step = currentStep.value;
  const fd = formData.value;
  if (step === 0) return true;
  if (step === 1) return fd.idealDay.trim().length > 0;
  if (step === 2) return fd.why1.trim().length > 0;
  if (step === 3) return fd.why2.trim().length > 0;
  if (step === 4) return fd.why3.trim().length > 0;
  if (step === 5) return fd.dreamJob.trim().length > 0;
  if (step === 6) return fd.requiredSkills.trim().length > 0;
  if (step === 7) return fd.usefulSubjects.trim().length > 0;
  if (step === 8) return fd.personalityType.trim().length > 0;
  return true;
});
</script>

<template>
  <div class="form-container bg-white min-h-screen flex flex-col items-center pt-10">
    <!-- Прогресс-бар -->
    <div class="w-full max-w-3xl mb-8 sticky top-0 z-20">
      <div class="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          class="h-4 bg-gradient-to-r from-purple-500 to-indigo-400 transition-all duration-300"
          :style="{ width: progress + '%' }"
        ></div>
      </div>
      <div class="text-right text-xs text-gray-500 mt-1">{{ progress }}%</div>
    </div>
    <div class="form-content w-full max-w-3xl">
      <Transition name="fade" mode="out-in">
        <div class="bg-white shadow-xl rounded-2xl border border-gray-300 p-8">
          <div class="text-2xl font-bold mb-4 text-gray-900">{{ currentQuestion?.title }}</div>
          <div class="flex flex-col gap-4">
            <template v-if="currentQuestion?.text">
              <div class="whitespace-pre-line text-gray-800">{{ currentQuestion.text }}</div>
              <hr v-if="currentQuestion.hint || currentQuestion.example" class="my-2 border-gray-200" />
            </template>
            <div v-if="currentQuestion?.hint" class="text-sm text-gray-500">{{ currentQuestion.hint }}</div>
            <div v-if="currentQuestion?.example" class="text-sm italic text-gray-400">{{ currentQuestion.example }}</div>
            <!-- Question Inputs -->
            <template v-if="currentStep !== 0">
              <textarea
                v-if="currentQuestion?.type === 'textarea' && currentQuestion.field"
                v-model="formData[currentQuestion.field as keyof FormData]"
                rows="5"
                class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-vertical min-h-[120px] text-black"
                placeholder="Введите ваш ответ..."
              />
              <input
                v-else-if="currentQuestion?.type === 'input' && currentQuestion.field"
                v-model="formData[currentQuestion.field as keyof FormData]"
                class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 text-black"
                placeholder="Введите ваш ответ..."
                @keyup.enter="isStepValid && nextStep()"
              />
              <!-- Radio buttons for personality type -->
              <div v-else-if="currentQuestion?.type === 'radio' && currentQuestion.field" class="space-y-3">
                <div
                  v-for="option in currentQuestion.options"
                  :key="option.value"
                  class="cursor-pointer rounded-xl border p-3 flex items-center transition-colors"
                  :class="formData[currentQuestion.field as keyof FormData] === option.value ? 'bg-purple-50 border-purple-300' : 'bg-white border-gray-300'"
                  @click="formData[currentQuestion.field as keyof FormData] = option.value"
                >
                  <input
                    type="radio"
                    :value="option.value"
                    v-model="formData[currentQuestion.field as keyof FormData]"
                    class="mr-3 accent-purple-500 w-5 h-5"
                  />
                  <span class="text-lg text-gray-900">{{ option.label }}</span>
                </div>
              </div>
            </template>
            <!-- Final Step -->
            <div v-else-if="currentQuestion?.type === 'final'" class="space-y-4">
              <div class="text-center">
                <div class="text-lg text-gray-700 mb-6">Все ответы сохранены! Готов получить свой результат?</div>
                <button
                  type="button"
                  class="bg-gradient-to-r from-purple-500 to-indigo-400 text-white shadow-md h-14 text-xl px-12 rounded-full font-semibold transition hover:from-indigo-400 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  @click="saveToLocalStorage"
                >
                  Получить результат
                </button>
              </div>
            </div>
            <!-- Navigation Buttons -->
            <div v-if="currentQuestion?.type !== 'final'" class="flex justify-between gap-2 mt-6">
              <button
                v-if="currentStep > 0"
                type="button"
                class="min-w-[120px] bg-gray-100 text-gray-700 border border-gray-300 h-14 text-lg px-8 rounded-full font-semibold transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                @click="prevStep"
              >Назад</button>
              <div v-else></div>
              <button
                v-if="currentStep < questions.length - 1"
                type="button"
                class="min-w-[120px] bg-gradient-to-r from-purple-500 to-indigo-400 text-white shadow-md h-14 text-lg px-8 rounded-full font-semibold transition hover:from-indigo-400 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
                :disabled="!isStepValid"
                :class="{ 'opacity-50 cursor-not-allowed': !isStepValid }"
                @click="nextStep"
              >Далее</button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
.form-content {
  animation: fadeInUp 0.5s ease-out;
}
</style>