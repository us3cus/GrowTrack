import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "view",
  __ssrInlineRender: true,
  setup(__props) {
    const password = ref("");
    const accessGranted = ref(false);
    const error = ref("");
    const results = ref([]);
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 py-10" }, _attrs))} data-v-53d13203><div class="max-w-4xl mx-auto" data-v-53d13203><h1 class="text-3xl font-bold mb-8 text-center" data-v-53d13203>Просмотр всех результатов</h1>`);
      if (!accessGranted.value) {
        _push(`<div class="flex flex-col items-center justify-center mt-20" data-v-53d13203><div class="bg-white p-8 rounded-xl shadow-md w-full max-w-sm" data-v-53d13203><label class="block mb-2 text-lg font-medium" data-v-53d13203>Введите пароль для доступа:</label><input${ssrRenderAttr("value", password.value)} type="password" class="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400 text-black" placeholder="Пароль" data-v-53d13203><button class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition" data-v-53d13203>Войти</button>`);
        if (error.value) {
          _push(`<div class="text-red-500 mt-3 text-center" data-v-53d13203>${ssrInterpolate(error.value)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div data-v-53d13203>`);
        if (loading.value) {
          _push(`<div class="text-center py-10 text-lg text-gray-500" data-v-53d13203>Загрузка...</div>`);
        } else {
          _push(`<div data-v-53d13203>`);
          if (results.value.length === 0) {
            _push(`<div class="text-center text-gray-500 py-10" data-v-53d13203>Нет данных</div>`);
          } else {
            _push(`<div class="space-y-8" data-v-53d13203><!--[-->`);
            ssrRenderList(results.value, (r) => {
              var _a, _b, _c, _d;
              _push(`<div class="bg-white rounded-xl shadow p-6 border border-gray-200 relative" data-v-53d13203><button class="absolute top-4 right-4 text-red-500 hover:text-red-700" data-v-53d13203>Удалить</button><div class="mb-2" data-v-53d13203><b data-v-53d13203>Имя:</b> ${ssrInterpolate(r.name)}</div><div class="mb-2" data-v-53d13203><b data-v-53d13203>Возраст:</b> ${ssrInterpolate(r.age)}</div><div class="mb-2" data-v-53d13203><b data-v-53d13203>Email:</b> ${ssrInterpolate(r.email)}</div><div class="mb-2" data-v-53d13203><b data-v-53d13203>Telegram:</b> ${ssrInterpolate(r.telegram)}</div><div class="mb-2" data-v-53d13203><b data-v-53d13203>Тип личности:</b> ${ssrInterpolate((_a = r.test) == null ? void 0 : _a.personalityType)}</div><div class="mb-2" data-v-53d13203><b data-v-53d13203>Желаемая профессия:</b> ${ssrInterpolate((_b = r.test) == null ? void 0 : _b.dreamJob)}</div><div class="mb-2" data-v-53d13203><b data-v-53d13203>Навыки:</b> ${ssrInterpolate((_c = r.test) == null ? void 0 : _c.requiredSkills)}</div><div class="mb-2" data-v-53d13203><b data-v-53d13203>Полезные предметы:</b> ${ssrInterpolate((_d = r.test) == null ? void 0 : _d.usefulSubjects)}</div><details class="mt-2" data-v-53d13203><summary class="cursor-pointer text-purple-600" data-v-53d13203>AI-анализ</summary><div class="prose max-w-none mt-2" data-v-53d13203>${r.aiResult ?? ""}</div></details><div class="text-xs text-gray-400 mt-2" data-v-53d13203>Создано: ${ssrInterpolate(new Date(r.createdAt).toLocaleString())}</div></div>`);
            });
            _push(`<!--]--></div>`);
          }
          _push(`</div>`);
        }
        _push(`</div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/view.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const view = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-53d13203"]]);

export { view as default };
//# sourceMappingURL=view-CMlPBDR0.mjs.map
