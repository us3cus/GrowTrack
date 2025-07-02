import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent } from 'vue/server-renderer';
import { F as Footer } from './Footer-DziAFz6n.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "result",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref("");
    const age = ref("");
    const email = ref("");
    const telegram = ref("");
    const loading = ref(false);
    const success = ref(false);
    const error = ref("");
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-container bg-white min-h-screen flex flex-col items-center pt-10" }, _attrs))} data-v-f997f3f4><div class="w-full max-w-3xl" data-v-f997f3f4><div class="bg-white shadow-xl rounded-2xl border border-gray-300 p-8 mt-8 animate-fade-in-up" data-v-f997f3f4><div class="text-3xl font-bold mb-4 text-gray-900 text-center" data-v-f997f3f4>Получить результат</div><div class="text-gray-700 text-center mb-8" data-v-f997f3f4>Введите свои данные, чтобы получить персональный маршрут и PDF-отчёт.</div><form class="flex flex-col gap-6" data-v-f997f3f4><input${ssrRenderAttr("value", name.value)} type="text" placeholder="Имя" class="input" data-v-f997f3f4><input${ssrRenderAttr("value", age.value)} type="number" min="6" max="99" placeholder="Возраст" class="input" data-v-f997f3f4><input${ssrRenderAttr("value", email.value)} type="email" placeholder="Email" class="input" data-v-f997f3f4><input${ssrRenderAttr("value", telegram.value)} type="text" placeholder="Telegram (например, @username)" class="input" data-v-f997f3f4>`);
      if (error.value) {
        _push(`<div class="text-red-500 text-center" data-v-f997f3f4>${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit" class="bg-gradient-to-r from-purple-500 to-indigo-400 text-white shadow-md h-14 text-xl px-12 rounded-full font-semibold transition hover:from-indigo-400 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-f997f3f4>${ssrInterpolate(loading.value ? "Отправка..." : "Получить результат")}</button>`);
      if (success.value) {
        _push(`<div class="text-green-600 text-center text-lg mt-2" data-v-f997f3f4>Спасибо! Ваши данные отправлены.</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></div>`);
      _push(ssrRenderComponent(Footer, { class: "mt-16" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/result.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const result = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f997f3f4"]]);

export { result as default };
//# sourceMappingURL=result-DPl-lCy6.mjs.map
