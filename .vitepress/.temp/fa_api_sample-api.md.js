import { R as Response } from "./Response.7c12f496.js";
import { withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
import "@vue/reactivity";
import "vue-json-pretty";
import "./Content.433c93f5.js";
const __pageData = JSON.parse('{"title":"Quick Start","description":"","frontmatter":{"aside":false},"headers":[{"level":2,"title":"Introduction section","slug":"introduction-section","link":"#introduction-section","children":[]}],"relativePath":"fa/api/sample-api.md","lastUpdated":1676281064000}');
const _sfc_main = { name: "fa/api/sample-api.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Response = Response;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Response, {
    title: "mock title",
    "json-file-name": "sample"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 id="quick-start" tabindex="-1"${_scopeId}>Quick Start <a class="header-anchor" href="#quick-start" aria-hidden="true"${_scopeId}>#</a></h1><p${_scopeId}>The markdown file may consist of multiple sections. Some may be purely for documentation. Others will be recognized as specifying a web service function.</p><h2 id="introduction-section" tabindex="-1"${_scopeId}>Introduction section <a class="header-anchor" href="#introduction-section" aria-hidden="true"${_scopeId}>#</a></h2><p${_scopeId}>The very first section an introduction. The title is the name of the web service. The body contains an overview and probably a link to the official, full documentation. All of that is by convention for documentation purposes. The only <em${_scopeId}>requirement</em> is that the phrase <code${_scopeId}>Endpoint: &lt;URI&gt;</code> occur <em${_scopeId}>somewhere</em> in this first section, and be on its own line.</p><pre${_scopeId}><code${_scopeId}># Foobar Web Service v1.1

Foobar is awesome-liscious.

[Official docs](http://wherevs.com/dev).

Endpoint: http://wherevs.com/api/v1

Following are the available functions.

...
</code></pre>`);
      } else {
        return [
          createVNode("h1", {
            id: "quick-start",
            tabindex: "-1"
          }, [
            createTextVNode("Quick Start "),
            createVNode("a", {
              class: "header-anchor",
              href: "#quick-start",
              "aria-hidden": "true"
            }, "#")
          ]),
          createVNode("p", null, "The markdown file may consist of multiple sections. Some may be purely for documentation. Others will be recognized as specifying a web service function."),
          createVNode("h2", {
            id: "introduction-section",
            tabindex: "-1"
          }, [
            createTextVNode("Introduction section "),
            createVNode("a", {
              class: "header-anchor",
              href: "#introduction-section",
              "aria-hidden": "true"
            }, "#")
          ]),
          createVNode("p", null, [
            createTextVNode("The very first section an introduction. The title is the name of the web service. The body contains an overview and probably a link to the official, full documentation. All of that is by convention for documentation purposes. The only "),
            createVNode("em", null, "requirement"),
            createTextVNode(" is that the phrase "),
            createVNode("code", null, "Endpoint: <URI>"),
            createTextVNode(" occur "),
            createVNode("em", null, "somewhere"),
            createTextVNode(" in this first section, and be on its own line.")
          ]),
          createVNode("pre", null, [
            createVNode("code", null, "# Foobar Web Service v1.1\n\nFoobar is awesome-liscious.\n\n[Official docs](http://wherevs.com/dev).\n\nEndpoint: http://wherevs.com/api/v1\n\nFollowing are the available functions.\n\n...\n")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fa/api/sample-api.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sampleApi = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sampleApi as default
};
