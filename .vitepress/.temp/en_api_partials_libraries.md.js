import { S as SelectLibraries } from "./SelectLibraries.4c239517.js";
import { withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
import "@vue/reactivity";
import "./Content.433c93f5.js";
import "@vue/runtime-core";
import "@vueuse/core";
import "./CodeGroupItem.a4859a71.js";
const __pageData = JSON.parse('{"title":"Quick Start","description":"","frontmatter":{},"headers":[],"relativePath":"en/api/partials/libraries.md","lastUpdated":1676281064000}');
const _sfc_main = { name: "en/api/partials/libraries.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SelectLibraries = SelectLibraries;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_SelectLibraries, { libraries: [
    {
      name: "Restful",
      link: "https://api.trader4.net",
      code: "https://api.trader4.net"
    },
    {
      name: "Python",
      link: "https://github.com/trader4/python",
      code: "pip install trader4"
    },
    {
      name: "PHP",
      link: "https://github.com/trader4/php",
      code: "composer require trader4/trader4-php"
    },
    { name: "Node.js", link: "https://npmjs.com/trader4", code: "npm install trader4" },
    { name: "Go", link: "https://golang.com/trader4", code: "go @install trader4" }
  ] }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 id="quick-start" tabindex="-1"${_scopeId}>Quick Start <a class="header-anchor" href="#quick-start" aria-hidden="true"${_scopeId}>#</a></h1><p${_scopeId}>Welcome to <strong${_scopeId}>Trader4</strong>! 🎉 We understand how important it is to stay connected with your customers, and that&#39;s why we offer SDKs that make it easy, fast and safe to connect to our products and services via APIs. So don&#39;t wait, get connected today! 🤝</p><div class="tip custom-block"${_scopeId}><p class="custom-block-title"${_scopeId}>Mock API Server</p><p${_scopeId}>For testing and development, you can use our <a href="https://docs.trader4.net/v1/oauth/sign.json" target="_blank" rel="noreferrer"${_scopeId}>Mock API Server</a> to simulate the API responses. Every method is available on the Mock API Server, and you can use it to test your integration without making any real API calls. You can add <code${_scopeId}>.json</code> to the end of any API endpoint to get a JSON response. For example, <code${_scopeId}>https://docs.trader4.net/v1/oauth/sign.json</code> will return a JSON response.</p></div>`);
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
          createVNode("p", null, [
            createTextVNode("Welcome to "),
            createVNode("strong", null, "Trader4"),
            createTextVNode("! 🎉 We understand how important it is to stay connected with your customers, and that's why we offer SDKs that make it easy, fast and safe to connect to our products and services via APIs. So don't wait, get connected today! 🤝")
          ]),
          createVNode("div", { class: "tip custom-block" }, [
            createVNode("p", { class: "custom-block-title" }, "Mock API Server"),
            createVNode("p", null, [
              createTextVNode("For testing and development, you can use our "),
              createVNode("a", {
                href: "https://docs.trader4.net/v1/oauth/sign.json",
                target: "_blank",
                rel: "noreferrer"
              }, "Mock API Server"),
              createTextVNode(" to simulate the API responses. Every method is available on the Mock API Server, and you can use it to test your integration without making any real API calls. You can add "),
              createVNode("code", null, ".json"),
              createTextVNode(" to the end of any API endpoint to get a JSON response. For example, "),
              createVNode("code", null, "https://docs.trader4.net/v1/oauth/sign.json"),
              createTextVNode(" will return a JSON response.")
            ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/api/partials/libraries.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const libraries = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  libraries as default
};
