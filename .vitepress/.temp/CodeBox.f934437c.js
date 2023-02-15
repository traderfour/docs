import { ref as ref$1 } from "@vue/reactivity";
import { u as useData, a as useRouter } from "./Content.433c93f5.js";
import { computed, nextTick } from "@vue/runtime-core";
import { ref, onMounted, mergeProps, useSSRContext } from "vue";
import { l as labraries } from "./SelectLibraries.4c239517.js";
import { onClickOutside } from "@vueuse/core";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const useLangFromQuery = () => {
  const langFromQuery = ref("");
  onMounted(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    langFromQuery.value = params.lang;
  });
  return langFromQuery;
};
const CodeBox_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "CodeBox",
  props: {
    lang: { type: String },
    method: { type: String },
    endpoint: { type: String }
  },
  setup(props, { slots }) {
    const { dir } = useData();
    const router = useRouter();
    const langFromQuery = useLangFromQuery();
    const showDropDown = ref$1(false);
    const dropDownItems = ref$1(null);
    function toggleTabs(name, { pageY }) {
      showDropDown.value = false;
      router.go(
        `${router.route.path}?lang=${name.toLowerCase()}&pos=${pageY - 100}`
      );
      nextTick(() => {
        window.location.reload();
      });
    }
    onClickOutside(dropDownItems, () => {
      showDropDown.value = false;
    });
    const checkMethod = computed(() => {
      switch (props.method) {
        case "POST":
          return "text-green-400";
        case "GET":
          return "text-blue-400";
        case "PUT":
          return "text-yellow-500";
        case "PATCH":
          return "text-yellow-500";
        case "DELETE":
          return "text-red-400";
        default:
          return "text-sky-500";
      }
    });
    return {
      dir,
      langFromQuery,
      toggleTabs,
      labraries,
      showDropDown,
      dropDownItems,
      checkMethod
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.lang.toLowerCase() === $setup.langFromQuery) {
    _push(`<div${ssrRenderAttrs(mergeProps({
      class: "rounded-lg my-5 grid gap-6 md:grid-cols-2 grid-cols-1",
      style: $setup.dir === "rtl" ? "direction:rtl" : ""
    }, _attrs))}><div class="col-span-1">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`<span class="text-xs schema"><ul>`);
    ssrRenderSlot(_ctx.$slots, "params", {}, null, _push, _parent);
    _push(`</ul></span></div><div class="col-span-1"><section class="flex justify-between flex-row p-2 text-black dark:bg-gray-700 bg-gray-200 rounded-t-lg"><div class="text-white endpoint sticky top-0 z-1"><span class="${ssrRenderClass([$setup.checkMethod, "font-bold"])}">${ssrInterpolate($props.method)} </span><span class="dark:text-gray-200 text-gray-700">${ssrInterpolate($props.endpoint)}</span></div><div class="relative"><button style="${ssrRenderStyle(!$setup.showDropDown ? null : { display: "none" })}" class="flex flex-row px-3 py-1 rounded-md dark:bg-gray-800 text-gray-800 dark:text-gray-300 border-0"><span class="mr-1">${ssrInterpolate($props.lang)}</span><svg class="w-5 h-5 mt-1 dark:text-white text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button><button style="${ssrRenderStyle($setup.showDropDown ? null : { display: "none" })}" class="flex flex-row px-3 py-1 rounded-md dark:bg-gray-800 dark:text-gray-300 text-gray-800 border-0"><span class="mr-1">${ssrInterpolate($props.lang)}</span><svg class="w-5 h-5 mt-1 text-white text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button><div style="${ssrRenderStyle($setup.showDropDown ? null : { display: "none" })}" class="absolute right-0 py-2 mt-2 rounded-md shadow-xl z-10 dark:bg-gray-800 bg-gray-200 text-gray-800"><!--[-->`);
    ssrRenderList($setup.labraries, (item, index) => {
      _push(`<div${ssrRenderAttr("value", item.name)} style="${ssrRenderStyle(item.name.toLowerCase() !== $setup.langFromQuery ? null : { display: "none" })}" class="block px-4 py-2 text-sm hover:bg-gray-700 dark:text-gray-300 cursor-pointer"><span>${ssrInterpolate(item.name)}</span></div>`);
    });
    _push(`<!--]--></div></div></section><section class="code-section flex justify-between flex-col p-2 dark:bg-gray-800 text-gray-800 bg-gray-50 rounded-b-lg max-h-screen">`);
    ssrRenderSlot(_ctx.$slots, "code", {}, null, _push, _parent);
    _push(`</section></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/CodeBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CodeBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  CodeBox as C
};
