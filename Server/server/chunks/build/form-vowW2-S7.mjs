import { defineComponent, useSSRContext, ref, computed, watch, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseEqual } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { n as navigateTo } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'ipx';
import 'node:path';
import 'pinia';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "form",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const currentStep = ref(0);
    const formData = ref({
      start: {
        ready: false
      },
      phone: "",
      idealDay: "",
      why1: "",
      why2: "",
      why3: "",
      dreamJob: "",
      requiredSkills: "",
      usefulSubjects: "",
      personalityType: ""
    });
    const questions = [
      {
        title: "Старт",
        text: "Хочешь понять, зачем тебе учиться и что именно нужно учить? \n Это займёт 5–7 минут. Всё просто. Без оценок. По-настоящему про тебя."
      },
      {
        title: "Идеальный день",
        text: "Представь, тебе 23 года. У тебя всё получилось.\nГде ты? Чем ты занимаешься? Что вокруг? Как ты себя чувствуешь?",
        hint: "Напиши 3–5 фраз. Можно кратко, можно как хочешь.",
        example: "Пример: «Я живу в Батуми, монтирую видео для блогеров, работаю удалённо, гуляю у моря».",
        type: "textarea",
        field: "idealDay"
      },
      {
        title: "Шаг 2: Техника 3 Почему",
        text: "А теперь спроси себя: Почему я хочу такую жизнь?",
        type: "textarea",
        field: "why1"
      },
      {
        title: "Шаг 2: Техника 3 Почему",
        text: "А теперь спроси себя: А почему это важно для меня?",
        type: "textarea",
        field: "why2"
      },
      {
        title: "Шаг 2: Техника 3 Почему",
        text: "А теперь спроси себя: А почему именно это меня цепляет?",
        type: "textarea",
        field: "why3"
      },
      {
        title: "Цель → Навык → Предмет",
        text: "Напиши, кем ты хочешь быть или что тебе нравится делать.\nПример: дизайнер, врач, предприниматель, блогер, фотограф, программист…",
        type: "textarea",
        field: "dreamJob"
      },
      {
        title: "Необходимые навыки",
        text: "Какие навыки тебе для этого нужны?\nПример: креатив, эмпатия, логика, общение, анализ…",
        type: "textarea",
        field: "requiredSkills"
      },
      {
        title: "Полезные предметы",
        text: "А теперь — какие школьные предметы помогут прокачать эти навыки?\nПодумай, что реально помогает. Мы можем потом это проверить вместе.",
        type: "textarea",
        field: "usefulSubjects"
      },
      {
        title: "Вопрос 6: Какой ты по типажу?",
        text: "Выбери свой тип личности:",
        type: "radio",
        field: "personalityType",
        options: [
          { value: "логик", label: "Логик" },
          { value: "визуал", label: "Визуал" },
          { value: "творец", label: "Творец" },
          { value: "бунтарь", label: "Бунтарь" }
        ]
      },
      {
        title: "Итог",
        text: "Отлично! Ты прошёл все вопросы. Теперь можешь получить свой персональный результат.",
        type: "final"
      }
    ];
    const progress = computed(() => {
      return Math.round(currentStep.value / (questions.length - 1) * 100);
    });
    watch(progress, (val) => {
      if (val === 100 && currentStep.value === questions.length - 1) {
        saveToLocalStorage();
      }
    });
    const saveToLocalStorage = () => {
      localStorage.setItem("growtrack-form", JSON.stringify(formData.value));
      navigateTo({ path: "/result" });
    };
    const currentQuestion = computed(() => {
      return questions[currentStep.value] || questions[0];
    });
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
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-container bg-white min-h-screen flex flex-col items-center pt-10" }, _attrs))} data-v-e398f8cd><div class="w-full max-w-3xl mb-8 sticky top-0 z-20" data-v-e398f8cd><div class="w-full h-4 bg-gray-200 rounded-full overflow-hidden" data-v-e398f8cd><div class="h-4 bg-gradient-to-r from-purple-500 to-indigo-400 transition-all duration-300" style="${ssrRenderStyle({ width: progress.value + "%" })}" data-v-e398f8cd></div></div><div class="text-right text-xs text-gray-500 mt-1" data-v-e398f8cd>${ssrInterpolate(progress.value)}%</div></div><div class="form-content w-full max-w-3xl" data-v-e398f8cd><div class="bg-white shadow-xl rounded-2xl border border-gray-300 p-8" data-v-e398f8cd><div class="text-2xl font-bold mb-4 text-gray-900" data-v-e398f8cd>${ssrInterpolate((_a = currentQuestion.value) == null ? void 0 : _a.title)}</div><div class="flex flex-col gap-4" data-v-e398f8cd>`);
      if ((_b = currentQuestion.value) == null ? void 0 : _b.text) {
        _push(`<!--[--><div class="whitespace-pre-line text-gray-800" data-v-e398f8cd>${ssrInterpolate(currentQuestion.value.text)}</div>`);
        if (currentQuestion.value.hint || currentQuestion.value.example) {
          _push(`<hr class="my-2 border-gray-200" data-v-e398f8cd>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if ((_c = currentQuestion.value) == null ? void 0 : _c.hint) {
        _push(`<div class="text-sm text-gray-500" data-v-e398f8cd>${ssrInterpolate(currentQuestion.value.hint)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_d = currentQuestion.value) == null ? void 0 : _d.example) {
        _push(`<div class="text-sm italic text-gray-400" data-v-e398f8cd>${ssrInterpolate(currentQuestion.value.example)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentStep.value !== 0) {
        _push(`<!--[-->`);
        if (((_e = currentQuestion.value) == null ? void 0 : _e.type) === "textarea" && currentQuestion.value.field) {
          _push(`<textarea rows="5" class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-vertical min-h-[120px] text-black" placeholder="Введите ваш ответ..." data-v-e398f8cd>${ssrInterpolate(formData.value[currentQuestion.value.field])}</textarea>`);
        } else if (((_f = currentQuestion.value) == null ? void 0 : _f.type) === "input" && currentQuestion.value.field) {
          _push(`<input${ssrRenderAttr("value", formData.value[currentQuestion.value.field])} class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 text-black" placeholder="Введите ваш ответ..." data-v-e398f8cd>`);
        } else if (((_g = currentQuestion.value) == null ? void 0 : _g.type) === "radio" && currentQuestion.value.field) {
          _push(`<div class="space-y-3" data-v-e398f8cd><!--[-->`);
          ssrRenderList(currentQuestion.value.options, (option) => {
            _push(`<div class="${ssrRenderClass([formData.value[currentQuestion.value.field] === option.value ? "bg-purple-50 border-purple-300" : "bg-white border-gray-300", "cursor-pointer rounded-xl border p-3 flex items-center transition-colors"])}" data-v-e398f8cd><input type="radio"${ssrRenderAttr("value", option.value)}${ssrIncludeBooleanAttr(ssrLooseEqual(formData.value[currentQuestion.value.field], option.value)) ? " checked" : ""} class="mr-3 accent-purple-500 w-5 h-5" data-v-e398f8cd><span class="text-lg text-gray-900" data-v-e398f8cd>${ssrInterpolate(option.label)}</span></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else if (((_h = currentQuestion.value) == null ? void 0 : _h.type) === "final") {
        _push(`<div class="space-y-4" data-v-e398f8cd><div class="text-center" data-v-e398f8cd><div class="text-lg text-gray-700 mb-6" data-v-e398f8cd>Все ответы сохранены! Готов получить свой результат?</div><button type="button" class="bg-gradient-to-r from-purple-500 to-indigo-400 text-white shadow-md h-14 text-xl px-12 rounded-full font-semibold transition hover:from-indigo-400 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400" data-v-e398f8cd> Получить результат </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_i = currentQuestion.value) == null ? void 0 : _i.type) !== "final") {
        _push(`<div class="flex justify-between gap-2 mt-6" data-v-e398f8cd>`);
        if (currentStep.value > 0) {
          _push(`<button type="button" class="min-w-[120px] bg-gray-100 text-gray-700 border border-gray-300 h-14 text-lg px-8 rounded-full font-semibold transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400" data-v-e398f8cd>Назад</button>`);
        } else {
          _push(`<div data-v-e398f8cd></div>`);
        }
        if (currentStep.value < questions.length - 1) {
          _push(`<button type="button"${ssrIncludeBooleanAttr(!isStepValid.value) ? " disabled" : ""} class="${ssrRenderClass([{ "opacity-50 cursor-not-allowed": !isStepValid.value }, "min-w-[120px] bg-gradient-to-r from-purple-500 to-indigo-400 text-white shadow-md h-14 text-lg px-8 rounded-full font-semibold transition hover:from-indigo-400 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"])}" data-v-e398f8cd>Далее</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const form = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e398f8cd"]]);

export { form as default };
//# sourceMappingURL=form-vowW2-S7.mjs.map
