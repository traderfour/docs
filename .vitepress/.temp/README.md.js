import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Get Started","description":"","frontmatter":{},"headers":[],"relativePath":"README.md","lastUpdated":1676355641000}');
const _sfc_main = { name: "README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="get-started" tabindex="-1">Get Started <a class="header-anchor" href="#get-started" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#dbd7caee" })}">npm install</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#dbd7caee" })}">npm run dev and/or npm run dev:host</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#dbd7caee" })}"></span></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#393a34" })}">npm install</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#393a34" })}">npm run dev and/or npm run dev:host</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#393a34" })}"></span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};
