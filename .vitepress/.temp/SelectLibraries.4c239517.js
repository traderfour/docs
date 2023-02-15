import { reactive, useSSRContext, mergeProps, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
import { ref } from "@vue/reactivity";
import { a as useRouter, u as useData } from "./Content.433c93f5.js";
import { onBeforeMount, onMounted, nextTick } from "@vue/runtime-core";
import { useClipboard } from "@vueuse/core";
import { _ as _sfc_main$2 } from "./CodeGroupItem.a4859a71.js";
let labraries = reactive([]);
const setLabraries = (data) => {
  labraries = data;
};
const _sfc_main$1 = {
  name: "Tooltip",
  props: {
    tooltipText: {
      type: String,
      default: "Tooltip text"
    },
    position: {
      default: "top",
      type: String
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps({
    tooltip: $props.tooltipText,
    position: $props.position
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/shared/Tooltip.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const SelectLibraries_vue_vue_type_style_index_0_scoped_ba416e73_lang = "";
const _sfc_main = {
  components: { Tooltip: __unplugin_components_0, CodeGroup: _sfc_main$2 },
  name: "SelectLibraries",
  props: {
    libraries: { type: Object }
  },
  setup(props, { slots }) {
    const router = useRouter();
    const { dir } = useData();
    const { copy, copied, isSupported } = useClipboard();
    const openTab = ref(0);
    const index = ref(0);
    function toggleTabs(tabNumber, name, { pageY }) {
      openTab.value = tabNumber;
      index.value = tabNumber;
      router.go(`${router.route.path}?lang=${name.toLowerCase()}&pos=${pageY}`);
      nextTick(() => {
        window.location.reload();
      });
    }
    onBeforeMount(() => {
      setLabraries(props.libraries);
    });
    onMounted(() => {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const params = Object.fromEntries(urlSearchParams.entries());
      handeleNavigationOnLangChange(params);
    });
    function handeleNavigationOnLangChange(params) {
      if (params.lang) {
        const findQueryIndex = props.libraries.findIndex((item) => {
          return item.name.toLowerCase() === params.lang;
        });
        openTab.value = findQueryIndex;
        index.value = findQueryIndex;
        nextTick(() => {
          window.scrollTo({
            top: parseInt(params.pos) > 400 ? parseInt(params.pos) : 0,
            left: 0,
            behavior: "smooth"
          });
        });
      } else {
        router.go(
          `${router.route.path}?lang=${props.libraries[0].name.toLowerCase()}&pos=${0}`
        );
      }
    }
    return {
      dir,
      openTab,
      toggleTabs,
      index,
      copy,
      copied,
      isSupported
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Tooltip = __unplugin_components_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "my-5 grid gap-6 md:grid-cols-2 grid-cols-1 items-center",
    style: $setup.dir === "rtl" ? "direction:rtl" : ""
  }, _attrs))} data-v-ba416e73><div class="col-span-1" data-v-ba416e73>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div class="col-span-1" data-v-ba416e73><div class="w-full border-b-2 box-border bg-gray-100 text-black dark:bg-gray-700 rounded-lg" data-v-ba416e73><div class="pt-3 px-4 text-gray-500 dark:text-white text-xs uppercase" data-v-ba416e73> Client Libraries </div><ul class="mb-0 list-none border cursor-pointer flex items-center" style="${ssrRenderStyle({ "list-style-type": "none" })}" data-v-ba416e73><!--[-->`);
  ssrRenderList($props.libraries, (item, index) => {
    _push(`<li class="flex-auto text-center" data-v-ba416e73><div class="${ssrRenderClass([$setup.openTab === index ? "!text-blue-500" : "", "hover:text-blue-500 text-gray-700 dark:text-white"])}" data-v-ba416e73><img${ssrRenderAttr("src", `/img/${item.name.toLowerCase()}.svg`)} class="w-8 h-8 mx-auto" alt="" data-v-ba416e73><span class="text-xs font-bold py-3" data-v-ba416e73>${ssrInterpolate(item.name)}</span></div></li>`);
  });
  _push(`<!--]--></ul><div class="min-w-0 break-words bg-gray-50 w-full mb-6 shadow-lg rounded-b-lg dark:bg-gray-800 dark:text-white" data-v-ba416e73><div class="px-3 py-1 flex-auto" data-v-ba416e73><div class="tab-content tab-space flex flex-row justify-between items-center" data-v-ba416e73><div style="${ssrRenderStyle($setup.openTab === $setup.index ? null : { display: "none" })}" data-v-ba416e73><pre class="text-sm" data-v-ba416e73><span class="disable-copy text-gray-400" data-v-ba416e73> $ </span>${ssrInterpolate($props.libraries[$setup.openTab].code)}</pre></div><div class="flex flex-row justify-between items-center" data-v-ba416e73><div class="i-carbon-logo-github cursor-pointer" data-v-ba416e73></div><a${ssrRenderAttr("href", $props.libraries[$setup.openTab].link)} target="_blank" class="!text-gray-600 decoration-none !dark:text-white text-sm mx-1" data-v-ba416e73>Github</a>`);
  if ($setup.isSupported) {
    _push(`<div class="mt-1" data-v-ba416e73><button data-v-ba416e73>`);
    if (!$setup.copied) {
      _push(`<span data-v-ba416e73>`);
      _push(ssrRenderComponent(_component_Tooltip, {
        class: "mt-2",
        "tooltip-text": "Copy"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="i-carbon-copy text-gray-600 !dark:text-white cursor-pointer mx-2" data-v-ba416e73${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "i-carbon-copy text-gray-600 !dark:text-white cursor-pointer mx-2" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span>`);
    } else {
      _push(`<span data-v-ba416e73><div class="i-carbon-checkmark cursor-pointer mx-2" data-v-ba416e73></div></span>`);
    }
    _push(`</button></div>`);
  } else {
    _push(`<p class="text-xs" data-v-ba416e73>Not Support Clipboard API</p>`);
  }
  _push(`</div></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/SelectLibraries.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SelectLibraries = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ba416e73"]]);
export {
  SelectLibraries as S,
  labraries as l
};
