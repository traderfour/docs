import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"en/sdks/azpays/partials/authorization.md","lastUpdated":1676281064000}');
const _sfc_main = { name: "en/sdks/azpays/partials/authorization.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><span class="text-xs"><p><code>Authorization</code> <sup><sub>String</sub></sup>, Access token that received in <a href="https://docs.azpays.com/oauth/#verify" target="_blank" rel="noreferrer"><em>/oauth/verify</em></a> method.</p></span></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/sdks/azpays/partials/authorization.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const authorization = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  authorization as default
};
