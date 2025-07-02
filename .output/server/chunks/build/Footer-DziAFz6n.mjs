import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: "w-full",
        "pt-6": "",
        "pb-4": ""
      }, _attrs))}><hr class="border-t border-gray-300 mb-6"><div class="container mx-auto flex flex-col md:flex-row items-center justify-between px-4"><div class="flex-1 flex justify-start md:justify-center mb-4 md:mb-0"><span class="text-2xl font-bold text-primary-600">GrowTrack</span></div><div class="flex-1 flex justify-end space-x-8"><a href="#about" class="text-gray-600 hover:text-primary-600 transition">О нас</a><a class="text-gray-600 hover:text-primary-600 transition">Войти</a><a href="#privacy" class="text-gray-600 hover:text-primary-600 transition">Политика конфиденциальности</a></div></div></footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Footer = Object.assign(_sfc_main, { __name: "Footer" });

export { Footer as F };
//# sourceMappingURL=Footer-DziAFz6n.mjs.map
