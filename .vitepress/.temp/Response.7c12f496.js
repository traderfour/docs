import { ref } from "@vue/reactivity";
import VueJsonPretty from "vue-json-pretty";
import { u as useData } from "./Content.433c93f5.js";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const styles = "";
const Response_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "Response",
  components: {
    VueJsonPretty
  },
  props: {
    jfile: { type: String }
  },
  setup(props) {
    const { dir } = useData();
    let mockData = ref("NO CONTENT");
    import("../../../public/" + props.jfile + ".json").then(
      (module) => {
        mockData.value = module.default;
      }
    );
    return {
      mockData,
      dir
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_vue_json_pretty = resolveComponent("vue-json-pretty");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "grid gap-6 md:grid-cols-2 grid-cols-1 my-5",
    style: $setup.dir === "rtl" ? "direction:rtl" : ""
  }, _attrs))}><section class="mx-2 col-span-1 text-sm"><h2>Schema</h2><span class="text-xs schema"><ul><li><code>succeed</code> <span>Boolean</span><p>The status of request.</p></li><li><code>message</code> <span>String</span><p>The message of request.</p></li><li><code>result</code> <span>JSON Array</span><p>The result of request.</p></li>`);
  ssrRenderSlot(_ctx.$slots, "result", {}, null, _push, _parent);
  _push(`<li><code>meta</code> <span>JSON Array</span><p>The meta of request.</p>`);
  ssrRenderSlot(_ctx.$slots, "meta", {}, null, _push, _parent);
  _push(`</li></ul></span></section><section class="col-span-1 bg-gray-50 dark:bg-gray-800 rounded-lg min-w-full max-w-sm max-h-screen overflow-auto overflow-x-auto"><div class="bg-gray-200 title text-black dark:bg-gray-700 dark:text-white text-white p-2 rounded-t-lg mb-4 sticky top-0 z-1"> RESPONSE </div>`);
  _push(ssrRenderComponent(_component_vue_json_pretty, {
    data: $setup.mockData,
    style: { "direction": "ltr" },
    class: "p-3",
    showLength: "",
    showLine: false
  }, null, _parent));
  _push(`</section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/Response.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Response = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Response as R
};
