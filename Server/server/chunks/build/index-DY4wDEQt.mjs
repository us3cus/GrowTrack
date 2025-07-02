import { a as __nuxt_component_0$1, n as navigateTo } from './server.mjs';
import { defineComponent, mergeProps, ref, resolveComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { F as Footer } from './Footer-DziAFz6n.mjs';
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
import 'vue-router';
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

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-screen min-h-screen relative overflow-hidden flex items-center justify-center px-0" }, _attrs))}><div class="absolute inset-0 -z-1">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "https://primefaces.org/cdn/templates/genesis/pages/e-learning/hero-background.jpg",
        class: "absolute inset-0 w-full h-full object-cover z-0 brightness-50",
        alt: "Hero background"
      }, null, _parent));
      _push(`</div><div class="relative z-10 w-full flex justify-start"><div class="lg:px-12 md:py-36 pb-6 pt-72 px-6 w-full max-w-5xl"><div class="flex flex-wrap items-center mt-24 space-y-6 lg:space-y-0"><div class="w-full text-left mr-[8%]"><h4 class="font-extrabold mb-4 text-primary-600 dark:text-primary-200 text-3xl md:text-5xl uppercase drop-shadow-lg"> Хочешь понять </h4><h1 class="leading-tight mb-4 text-white text-5xl md:text-7xl font-black drop-shadow-xl"> Кем ты хочешь быть <br> и как к этому прийти? </h1><p class="font-thin mb-8 text-gray-200 text-2xl md:text-4xl max-w-2xl drop-shadow"> Пройди лёгкий маршрут самоопределения.<br> Всего 5–7 минут. Без оценок. По-настоящему — про тебя. </p></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$5, { __name: "HeroSection" });
const _imports_0$1 = "" + __buildAssetsURL("card1.C9Y268yx.jpg");
const _imports_1 = "" + __buildAssetsURL("card2.C-uTxg9F.png");
const _imports_2 = "" + __buildAssetsURL("card3.DejXfFPt.jpeg");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "why",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full min-h-screen flex flex-col items-center justify-center bg-white py-20" }, _attrs))} data-v-96d1c950><div class="flex justify-center mb-6" data-v-96d1c950><div class="bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl p-4 shadow-lg flex items-center justify-center" data-v-96d1c950><span class="text-4xl" data-v-96d1c950>🧭</span></div></div><h1 class="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4" data-v-96d1c950> Это не тест. Это твой маршрут. </h1><p class="text-lg text-gray-600 text-center mb-12 max-w-2xl" data-v-96d1c950> Ты просто отвечаешь на 6 простых вопросов — и получаешь персональный маршрут в PDF для себя, родителя и наставника. </p><div class="w-full flex flex-col md:flex-row items-center justify-center gap-8" data-v-96d1c950><div class="why-card animate-fade-in-up" style="${ssrRenderStyle({ "animation-delay": "0.1s" })}" data-v-96d1c950><div class="why-card-img" data-v-96d1c950><img${ssrRenderAttr("src", _imports_0$1)} alt="О себе" data-v-96d1c950></div><div class="font-bold text-xl text-gray-900 mb-2 text-center" data-v-96d1c950>О себе</div><div class="text-gray-600 text-center text-base" data-v-96d1c950>Узнай свои сильные стороны и предпочтения</div></div><div class="why-card animate-fade-in-up" style="${ssrRenderStyle({ "animation-delay": "0.3s" })}" data-v-96d1c950><div class="why-card-img" data-v-96d1c950><img${ssrRenderAttr("src", _imports_1)} alt="О мечте" data-v-96d1c950></div><div class="font-bold text-xl text-gray-900 mb-2 text-center" data-v-96d1c950>О мечте</div><div class="text-gray-600 text-center text-base" data-v-96d1c950>Определи свои цели и желания</div></div><div class="why-card animate-fade-in-up" style="${ssrRenderStyle({ "animation-delay": "0.5s" })}" data-v-96d1c950><div class="why-card-img" data-v-96d1c950><img${ssrRenderAttr("src", _imports_2)} alt="О том, что важно" data-v-96d1c950></div><div class="font-bold text-xl text-gray-900 mb-2 text-center" data-v-96d1c950>О том, что важно</div><div class="text-gray-600 text-center text-base" data-v-96d1c950>Пойми свои ценности и приоритеты</div></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/why.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["__scopeId", "data-v-96d1c950"]]), { __name: "Why" });
const _imports_0 = "" + __buildAssetsURL("family.i2NTEE77.jpg");
const _sfc_main$3 = {
  __name: "Parents",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full min-h-screen flex items-center justify-center bg-white py-20" }, _attrs))} data-v-73bac19a><div class="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-8" data-v-73bac19a><div class="flex-1 flex flex-col items-start justify-center max-w-xl animate-fade-in-left" data-v-73bac19a><h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight" data-v-73bac19a> 🧩 Как родитель может помочь? </h2><div class="text-lg text-gray-700 mb-6" data-v-73bac19a><p class="mb-3" data-v-73bac19a>Вы получите готовый PDF-отчёт с размышлениями ребёнка:</p><ul class="mb-3 list-disc list-inside space-y-1" data-v-73bac19a><li data-v-73bac19a>кем он хочет быть,</li><li data-v-73bac19a>какие навыки он считает важными,</li><li data-v-73bac19a>как вы можете его поддержать.</li></ul><p data-v-73bac19a>Это возможность начать честный разговор и вместе двигаться к цели.</p></div><button class="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow transition-all" data-v-73bac19a> Получить PDF-отчёт </button></div><div class="flex-1 flex items-center justify-center relative w-full max-w-md animate-fade-in-right" data-v-73bac19a><img${ssrRenderAttr("src", _imports_0)} alt="Родитель" class="rounded-2xl w-full h-80 object-cover shadow-lg" data-v-73bac19a><div class="absolute left-1/2 -bottom-10 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-8 py-6 w-80 flex flex-col items-start gap-4 border border-gray-100" data-v-73bac19a><div class="font-semibold text-gray-900 text-base mb-2 flex items-center gap-2" data-v-73bac19a><span class="text-blue-600 text-lg" data-v-73bac19a>📄</span> PDF-отчёт ребёнка </div><div class="text-gray-700 text-sm flex items-center gap-2" data-v-73bac19a><span class="text-blue-600" data-v-73bac19a>💬</span> Честный разговор </div><div class="text-gray-700 text-sm flex items-center gap-2" data-v-73bac19a><span class="text-blue-600" data-v-73bac19a>🤝</span> Поддержка и совместная цель </div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/parents.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-73bac19a"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "qa",
  __ssrInlineRender: true,
  setup(__props) {
    const openIndex = ref(null);
    const faqItems = [
      {
        label: 'Что такое "трекер самоопределения"?',
        content: "Это лёгкая форма с вопросами, которые помогают подростку понять себя: что ему важно, кем он хочет быть, и какие навыки стоит развивать."
      },
      {
        label: "Зачем проходить этот маршрут?",
        content: "Чтобы не выбирать вслепую. А осознанно — на основе того, что тебе интересно, что ты ценишь и к чему хочешь прийти."
      },
      {
        label: "Сколько времени занимает прохождение?",
        content: "Обычно 5–7 минут. Можно сделать на телефоне — не нужно ничего скачивать."
      },
      {
        label: "Что будет в итоге?",
        content: 'Сформируется персональный PDF-отчёт с твоим "маршрутом" — его получишь ты, твой родитель и (если хочешь) наставник.'
      },
      {
        label: "А если я ещё не знаю, кем хочу быть?",
        content: "Это нормально. Как раз для этого и нужен маршрут — чтобы начать разбираться, шаг за шагом."
      },
      {
        label: "Кому отправляется мой ответ?",
        content: "Только тебе и твоему родителю. По желанию — наставнику или в Telegram. Ничего не публикуется."
      },
      {
        label: "Что делать после маршрута?",
        content: "Можно перейти на 7-дневную программу, где ты попробуешь развить навыки из своего отчёта и посмотреть, подходит ли тебе выбранный путь."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "landing-bg min-h-screen flex flex-col items-center justify-center py-12 px-4" }, _attrs))} data-v-8a184625><div class="flex flex-col items-center mb-10" data-v-8a184625><div class="gradient-icon flex items-center justify-center mb-6 shadow-neumorph" data-v-8a184625><svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-8a184625><circle cx="36" cy="36" r="32" fill="url(#paint0_linear)" data-v-8a184625></circle><g filter="url(#shadow)" data-v-8a184625><text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" font-size="36" font-family="Inter, &#39;SF Pro&#39;, Arial, sans-serif" font-weight="bold" fill="#fff" data-v-8a184625>?</text></g><defs data-v-8a184625><linearGradient id="paint0_linear" x1="0" y1="0" x2="72" y2="72" gradientUnits="userSpaceOnUse" data-v-8a184625><stop stop-color="#a78bfa" data-v-8a184625></stop><stop offset="1" stop-color="#7c3aed" data-v-8a184625></stop></linearGradient><filter id="shadow" x="0" y="0" width="72" height="72" data-v-8a184625><feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#a78bfa" data-v-8a184625></feDropShadow></filter></defs></svg></div><h1 class="text-4xl md:text-5xl font-extrabold text-center mb-3 text-black leading-tight font-landing" data-v-8a184625>Часто задаваемые вопросы</h1><p class="text-lg md:text-xl text-center text-gray-500 font-medium max-w-2xl font-landing" data-v-8a184625> Узнайте больше о трекере самоопределения, маршруте и результатах. </p></div><div class="w-full max-w-3xl" data-v-8a184625><!--[-->`);
      ssrRenderList(faqItems, (item, idx) => {
        _push(`<div class="${ssrRenderClass(["faq-item mb-6 last:mb-0", openIndex.value === idx ? "faq-item-open" : "faq-item-closed"])}" data-v-8a184625><button class="${ssrRenderClass(["faq-question w-full flex justify-between items-center px-8 py-6 rounded-2xl shadow-neumorph border-none focus:outline-none transition-all", openIndex.value === idx ? "bg-white" : "bg-gray-100"])}" data-v-8a184625><span class="text-lg md:text-xl font-bold text-black font-landing" data-v-8a184625>${ssrInterpolate(item.label)}</span><span class="text-purple-500 text-2xl font-bold" data-v-8a184625>${ssrInterpolate(openIndex.value === idx ? "–" : "+")}</span></button><div style="${ssrRenderStyle(openIndex.value === idx ? null : { display: "none" })}" class="faq-answer px-10 pb-5 pt-1 text-gray-700 text-base md:text-lg font-landing bg-white rounded-b-2xl" data-v-8a184625>${ssrInterpolate(item.content)}</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/qa.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-8a184625"]]), { __name: "Qa" });
const _sfc_main$1 = {
  __name: "Start",
  __ssrInlineRender: true,
  setup(__props) {
    const showButtons = ref(false);
    function onYes() {
      navigateTo({ path: "/form" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = resolveComponent("Button");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "start-section" }, _attrs))} data-v-4a2d57ee><h2 class="start-title" data-v-4a2d57ee><span class="emoji" data-v-4a2d57ee>🧭</span> Готов узнать себя получше? </h2><p class="start-subtitle" data-v-4a2d57ee> Ты ответишь на 6 простых вопросов — про себя, мечты и то, что тебе важно.<br data-v-4a2d57ee> В конце ты получишь маршрут в формате PDF.<br data-v-4a2d57ee> Простой, личный, твой. </p><div class="${ssrRenderClass([{ "show": showButtons.value }, "start-buttons"])}" data-v-4a2d57ee>`);
      _push(ssrRenderComponent(_component_Button, {
        class: "start-btn yes big",
        onClick: onYes
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Да, поехали`);
          } else {
            return [
              createTextVNode("Да, поехали")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/start.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4a2d57ee"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeroSection = __nuxt_component_0;
  const _component_why = __nuxt_component_1;
  const _component_parents = __nuxt_component_2;
  const _component_qa = __nuxt_component_3;
  const _component_start = __nuxt_component_4;
  const _component_Footer = Footer;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
  _push(ssrRenderComponent(_component_why, null, null, _parent));
  _push(ssrRenderComponent(_component_parents, null, null, _parent));
  _push(ssrRenderComponent(_component_qa, null, null, _parent));
  _push(ssrRenderComponent(_component_start, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DY4wDEQt.mjs.map
