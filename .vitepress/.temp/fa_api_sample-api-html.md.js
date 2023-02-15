import { R as Response } from "./Response.7c12f496.js";
import { withCtx, createVNode, createTextVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
import "@vue/reactivity";
import "vue-json-pretty";
import "./Content.433c93f5.js";
const __pageData = JSON.parse('{"title":"API markdown with html text","description":"","frontmatter":{"aside":false},"headers":[{"level":2,"title":"می توانید از کلاس سفارشی در علامت گذاری استفاده کنید","slug":"می-توانید-از-کلاس-سفارشی-در-علامت-گذاری-استفاده-کنید","link":"#می-توانید-از-کلاس-سفارشی-در-علامت-گذاری-استفاده-کنید","children":[]}],"relativePath":"fa/api/sample-api-html.md","lastUpdated":1676281064000}');
const _sfc_main = { name: "fa/api/sample-api-html.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Response = Response;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="api-markdown-with-html-text" tabindex="-1">API markdown with html text <a class="header-anchor" href="#api-markdown-with-html-text" aria-hidden="true">#</a></h1><h2 id="می-توانید-از-کلاس-سفارشی-در-علامت-گذاری-استفاده-کنید" tabindex="-1">می توانید از کلاس سفارشی در علامت گذاری استفاده کنید <a class="header-anchor" href="#می-توانید-از-کلاس-سفارشی-در-علامت-گذاری-استفاده-کنید" aria-hidden="true">#</a></h2><p><a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">https://tailwindcss.com/</a></p>`);
  _push(ssrRenderComponent(_component_Response, {
    title: "mock title",
    "json-file-name": "sample"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"${_scopeId}><a href="#"${_scopeId}><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"${_scopeId}>Noteworthy technology acquisitions 2021</h5></a><p class="mb-3 font-normal text-gray-700 dark:text-gray-400"${_scopeId}>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p><a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"${_scopeId}> Read more <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></a></div>`);
      } else {
        return [
          createVNode("div", { class: "max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" }, [
            createVNode("a", { href: "#" }, [
              createVNode("h5", { class: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" }, "Noteworthy technology acquisitions 2021")
            ]),
            createVNode("p", { class: "mb-3 font-normal text-gray-700 dark:text-gray-400" }, "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."),
            createVNode("a", {
              href: "#",
              class: "inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            }, [
              createTextVNode(" Read more "),
              (openBlock(), createBlock("svg", {
                "aria-hidden": "true",
                class: "w-4 h-4 ml-2 -mr-1",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                  "clip-rule": "evenodd"
                })
              ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fa/api/sample-api-html.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sampleApiHtml = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sampleApiHtml as default
};
