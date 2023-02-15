import { R as Response } from "./Response.7c12f496.js";
import { C as CodeBox } from "./CodeBox.f934437c.js";
import { S as SelectLibraries } from "./SelectLibraries.4c239517.js";
import { withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
import "@vue/reactivity";
import "vue-json-pretty";
import "./Content.433c93f5.js";
import "@vue/runtime-core";
import "@vueuse/core";
import "./CodeGroupItem.a4859a71.js";
const __pageData = JSON.parse('{"title":"Quick Start","description":"","frontmatter":{"aside":true},"headers":[{"level":2,"title":"Introduction section","slug":"introduction-section","link":"#introduction-section","children":[]}],"relativePath":"en/sdks/azpays/intro.md","lastUpdated":1676281064000}');
const _sfc_main = { name: "en/sdks/azpays/intro.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SelectLibraries = SelectLibraries;
  const _component_CodeBox = CodeBox;
  const _component_Response = Response;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_SelectLibraries, { libraries: [
    {
      name: "Python",
      link: "https://github.com/azpays/python",
      code: "pip install azpays"
    },
    {
      name: "PHP",
      link: "https://github.com/azpays/php",
      code: "composer require azpays/azpays-php"
    },
    { name: "Node.js", link: "https://npmjs.com/azpays", code: "npm install azpays" },
    { name: "Go", link: "https://golang.com/azpays", code: "go @install azpays" }
  ] }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 id="quick-start" tabindex="-1"${_scopeId}>Quick Start <a class="header-anchor" href="#quick-start" aria-hidden="true"${_scopeId}>#</a></h1><p${_scopeId}>The markdown file may consist of multiple sections. Some may be purely for documentation. Others will be recognized as specifying a web service function.</p>`);
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
          createVNode("p", null, "The markdown file may consist of multiple sections. Some may be purely for documentation. Others will be recognized as specifying a web service function.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_CodeBox, {
    lang: "PHP",
    "code-box-title": "Purse List"
  }, {
    code: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-PHP"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>PHP</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>$</span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>azpays</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#4D9375" })}"${_scopeId}>new</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B8A965" })}"${_scopeId}>AzPays</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>($</span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>config</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>-&gt;</span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>purseList</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>();</span></span>
<span class="line"${_scopeId}></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>$</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>azpays</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#1E754F" })}"${_scopeId}>new</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#998418" })}"${_scopeId}>AzPays</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>($</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>config</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>-&gt;</span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>purseList</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>();</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("div", { class: "language-PHP" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "PHP"),
            createVNode("pre", {
              class: "shiki vitesse-dark vp-code-dark",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#666666" } }, "$"),
                  createVNode("span", { style: { "color": "#BD976A" } }, "azpays"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "="),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#4D9375" } }, "new"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#B8A965" } }, "AzPays"),
                  createVNode("span", { style: { "color": "#666666" } }, "($"),
                  createVNode("span", { style: { "color": "#BD976A" } }, "config"),
                  createVNode("span", { style: { "color": "#666666" } }, ")"),
                  createVNode("span", { style: { "color": "#CB7676" } }, "->"),
                  createVNode("span", { style: { "color": "#80A665" } }, "purseList"),
                  createVNode("span", { style: { "color": "#666666" } }, "();")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ]),
            createVNode("pre", {
              class: "shiki vitesse-light vp-code-light",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#999999" } }, "$"),
                  createVNode("span", { style: { "color": "#B07D48" } }, "azpays"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "="),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#1E754F" } }, "new"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#998418" } }, "AzPays"),
                  createVNode("span", { style: { "color": "#999999" } }, "($"),
                  createVNode("span", { style: { "color": "#B07D48" } }, "config"),
                  createVNode("span", { style: { "color": "#999999" } }, ")"),
                  createVNode("span", { style: { "color": "#AB5959" } }, "->"),
                  createVNode("span", { style: { "color": "#59873A" } }, "purseList"),
                  createVNode("span", { style: { "color": "#999999" } }, "();")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 id="purse-list" tabindex="-1"${_scopeId}>Purse List <a class="header-anchor" href="#purse-list" aria-hidden="true"${_scopeId}>#</a></h1><p${_scopeId}>The markdown file may consist of multiple sections. Some may be purely for documentation. Others will be recognized as specifying a web service function.</p>`);
      } else {
        return [
          createVNode("h1", {
            id: "purse-list",
            tabindex: "-1"
          }, [
            createTextVNode("Purse List "),
            createVNode("a", {
              class: "header-anchor",
              href: "#purse-list",
              "aria-hidden": "true"
            }, "#")
          ]),
          createVNode("p", null, "The markdown file may consist of multiple sections. Some may be purely for documentation. Others will be recognized as specifying a web service function.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Response, {
    title: "oAuth",
    "json-file-name": "sample"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 id="introduction-section" tabindex="-1"${_scopeId}>Introduction section <a class="header-anchor" href="#introduction-section" aria-hidden="true"${_scopeId}>#</a></h2><p${_scopeId}>The very first section an introduction. The title is the name of the web service. The body contains an overview and probably a link to the official, full documentation. All of that is by convention for documentation purposes. The only <em${_scopeId}>requirement</em> is that the phrase <code${_scopeId}>Endpoint: &lt;URI&gt;</code> occur <em${_scopeId}>somewhere</em> in this first section, and be on its own line.</p><pre${_scopeId}><code${_scopeId}># Foobar Web Service v1.1

Foobar is awesome-liscious.

[Official docs](http://wherevs.com/dev).

Endpoint: http://wherevs.com/api/v1

Following are the available functions.

...
</code></pre>`);
      } else {
        return [
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/sdks/azpays/intro.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const intro = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  intro as default
};
