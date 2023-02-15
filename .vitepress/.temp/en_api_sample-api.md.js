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
const __pageData = JSON.parse('{"title":"Quick Start","description":"","frontmatter":{"aside":true},"headers":[{"level":2,"title":"Introduction section","slug":"introduction-section","link":"#introduction-section","children":[]}],"relativePath":"en/api/sample-api.md","lastUpdated":1676281064000}');
const _sfc_main = { name: "en/api/sample-api.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SelectLibraries = SelectLibraries;
  const _component_CodeBox = CodeBox;
  const _component_Response = Response;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_SelectLibraries, { libraries: [
    {
      name: "Python",
      link: "https://www.google.com/",
      code: "pip install"
    },
    {
      name: "Php",
      link: "https://www.google.com/",
      code: "composer require stripe/stripe-php"
    },
    { name: "Node.js", link: "https://www.google.com/", code: "npm install" },
    { name: "Go", link: "https://www.google.com/", code: "test" }
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
    lang: "Ruby",
    "code-box-title": "Sample Ruby Code"
  }, {
    code: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-sh"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sh</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#758575DD" })}"${_scopeId}>#!/bin/sh</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B8A965" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>$(</span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>dirname</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>$0</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>/_/husky.sh</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B8A965" })}"${_scopeId}>exec</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>/dev/tty</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>&amp;&amp;</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>npx</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>czg</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>--hook</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B8A965" })}"${_scopeId}>true</span></span>
<span class="line"${_scopeId}></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A0ADA0" })}"${_scopeId}>#!/bin/sh</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#998418" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>$(</span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>dirname</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>$0</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>/_/husky.sh</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#998418" })}"${_scopeId}>exec</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>/dev/tty</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>&amp;&amp;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>npx</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>czg</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>--hook</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#998418" })}"${_scopeId}>true</span></span>
<span class="line"${_scopeId}></span></code></pre></div><br${_scopeId}><div class="language-sh"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sh</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#758575DD" })}"${_scopeId}>#!/bin/sh</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B8A965" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>$(</span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>dirname</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>$0</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>/_/husky.sh</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B8A965" })}"${_scopeId}>exec</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>/dev/tty</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>&amp;&amp;</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>npx</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>czg</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>--hook</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B8A965" })}"${_scopeId}>true</span></span>
<span class="line"${_scopeId}></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A0ADA0" })}"${_scopeId}>#!/bin/sh</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#998418" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>$(</span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>dirname</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>$0</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>/_/husky.sh</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#998418" })}"${_scopeId}>exec</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>/dev/tty</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>&amp;&amp;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>npx</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>czg</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>--hook</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#998418" })}"${_scopeId}>true</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("div", { class: "language-sh" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "sh"),
            createVNode("pre", {
              class: "shiki vitesse-dark vp-code-dark",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#758575DD" } }, "#!/bin/sh")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#B8A965" } }, "."),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#666666" } }, "$("),
                  createVNode("span", { style: { "color": "#80A665" } }, "dirname"),
                  createVNode("span", { style: { "color": "#C98A7D" } }, " "),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "$0"),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#666666" } }, ")"),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "/_/husky.sh"),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#B8A965" } }, "exec"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "<"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "/dev/tty"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "&&"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#80A665" } }, "npx"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "czg"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C99076" } }, "--hook"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "||"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#B8A965" } }, "true")
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
                  createVNode("span", { style: { "color": "#A0ADA0" } }, "#!/bin/sh")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#998418" } }, "."),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#999999" } }, "$("),
                  createVNode("span", { style: { "color": "#59873A" } }, "dirname"),
                  createVNode("span", { style: { "color": "#B56959" } }, " "),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#B56959" } }, "$0"),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#999999" } }, ")"),
                  createVNode("span", { style: { "color": "#B56959" } }, "/_/husky.sh"),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#998418" } }, "exec"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "<"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B56959" } }, "/dev/tty"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "&&"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#59873A" } }, "npx"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B56959" } }, "czg"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#A65E2B" } }, "--hook"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "||"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#998418" } }, "true")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("br"),
          createVNode("div", { class: "language-sh" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "sh"),
            createVNode("pre", {
              class: "shiki vitesse-dark vp-code-dark",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#758575DD" } }, "#!/bin/sh")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#B8A965" } }, "."),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#666666" } }, "$("),
                  createVNode("span", { style: { "color": "#80A665" } }, "dirname"),
                  createVNode("span", { style: { "color": "#C98A7D" } }, " "),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "$0"),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#666666" } }, ")"),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "/_/husky.sh"),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#B8A965" } }, "exec"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "<"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "/dev/tty"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "&&"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#80A665" } }, "npx"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "czg"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C99076" } }, "--hook"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "||"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#B8A965" } }, "true")
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
                  createVNode("span", { style: { "color": "#A0ADA0" } }, "#!/bin/sh")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#998418" } }, "."),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#999999" } }, "$("),
                  createVNode("span", { style: { "color": "#59873A" } }, "dirname"),
                  createVNode("span", { style: { "color": "#B56959" } }, " "),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#B56959" } }, "$0"),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#999999" } }, ")"),
                  createVNode("span", { style: { "color": "#B56959" } }, "/_/husky.sh"),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#998418" } }, "exec"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "<"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B56959" } }, "/dev/tty"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "&&"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#59873A" } }, "npx"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B56959" } }, "czg"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#A65E2B" } }, "--hook"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "||"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#998418" } }, "true")
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
        _push2(`<div class="language-sh"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sh</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#758575DD" })}"${_scopeId}>#!/bin/sh</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B8A965" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>$(</span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>dirname</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>$0</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>/_/husky.sh                            </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B8A965" })}"${_scopeId}>exec</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>/dev/tty</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>&amp;&amp;</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>npx</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>czg</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>--hook</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B8A965" })}"${_scopeId}>true</span></span>
<span class="line"${_scopeId}></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A0ADA0" })}"${_scopeId}>#!/bin/sh</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#998418" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>$(</span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>dirname</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>$0</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>/_/husky.sh                            </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#998418" })}"${_scopeId}>exec</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>/dev/tty</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>&amp;&amp;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>npx</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>czg</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>--hook</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#998418" })}"${_scopeId}>true</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("div", { class: "language-sh" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "sh"),
            createVNode("pre", {
              class: "shiki vitesse-dark vp-code-dark",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#758575DD" } }, "#!/bin/sh")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#B8A965" } }, "."),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#666666" } }, "$("),
                  createVNode("span", { style: { "color": "#80A665" } }, "dirname"),
                  createVNode("span", { style: { "color": "#C98A7D" } }, " "),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "$0"),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#666666" } }, ")"),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "/_/husky.sh                            "),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#B8A965" } }, "exec"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "<"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "/dev/tty"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "&&"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#80A665" } }, "npx"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "czg"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C99076" } }, "--hook"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "||"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#B8A965" } }, "true")
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
                  createVNode("span", { style: { "color": "#A0ADA0" } }, "#!/bin/sh")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#998418" } }, "."),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#999999" } }, "$("),
                  createVNode("span", { style: { "color": "#59873A" } }, "dirname"),
                  createVNode("span", { style: { "color": "#B56959" } }, " "),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#B56959" } }, "$0"),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#999999" } }, ")"),
                  createVNode("span", { style: { "color": "#B56959" } }, "/_/husky.sh                            "),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"')
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#998418" } }, "exec"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "<"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B56959" } }, "/dev/tty"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "&&"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#59873A" } }, "npx"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B56959" } }, "czg"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#A65E2B" } }, "--hook"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "||"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#998418" } }, "true")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_CodeBox, {
    lang: "Python",
    "code-box-title": "Sample Python Code 🐍"
  }, {
    code: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-python"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>python</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>a</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> b </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#4C9A91" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#4C9A91" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#4D9375" })}"${_scopeId}>while</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> b </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#4C9A91" })}"${_scopeId}>10</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>:</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#B8A965" })}"${_scopeId}>print</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>b</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>    a</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> b </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> a</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> a </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>+</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> b</span></span>
<span class="line"${_scopeId}></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>a</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> b </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#2F798A" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#2F798A" })}"${_scopeId}>1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#1E754F" })}"${_scopeId}>while</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> b </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#2F798A" })}"${_scopeId}>10</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>:</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#998418" })}"${_scopeId}>print</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>b</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>    a</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> b </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> a</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> a </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>+</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> b</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("div", { class: "language-python" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "python"),
            createVNode("pre", {
              class: "shiki vitesse-dark vp-code-dark",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "a"),
                  createVNode("span", { style: { "color": "#666666" } }, ","),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " b "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "="),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#4C9A91" } }, "0"),
                  createVNode("span", { style: { "color": "#666666" } }, ","),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#4C9A91" } }, "1")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#4D9375" } }, "while"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " b "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "<"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#4C9A91" } }, "10"),
                  createVNode("span", { style: { "color": "#666666" } }, ":")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "    "),
                  createVNode("span", { style: { "color": "#B8A965" } }, "print"),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "b"),
                  createVNode("span", { style: { "color": "#666666" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "    a"),
                  createVNode("span", { style: { "color": "#666666" } }, ","),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " b "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "="),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " a"),
                  createVNode("span", { style: { "color": "#666666" } }, ","),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " a "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "+"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " b")
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
                  createVNode("span", { style: { "color": "#393A34" } }, "a"),
                  createVNode("span", { style: { "color": "#999999" } }, ","),
                  createVNode("span", { style: { "color": "#393A34" } }, " b "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "="),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#2F798A" } }, "0"),
                  createVNode("span", { style: { "color": "#999999" } }, ","),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#2F798A" } }, "1")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#1E754F" } }, "while"),
                  createVNode("span", { style: { "color": "#393A34" } }, " b "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "<"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#2F798A" } }, "10"),
                  createVNode("span", { style: { "color": "#999999" } }, ":")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "    "),
                  createVNode("span", { style: { "color": "#998418" } }, "print"),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#393A34" } }, "b"),
                  createVNode("span", { style: { "color": "#999999" } }, ")")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "    a"),
                  createVNode("span", { style: { "color": "#999999" } }, ","),
                  createVNode("span", { style: { "color": "#393A34" } }, " b "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "="),
                  createVNode("span", { style: { "color": "#393A34" } }, " a"),
                  createVNode("span", { style: { "color": "#999999" } }, ","),
                  createVNode("span", { style: { "color": "#393A34" } }, " a "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "+"),
                  createVNode("span", { style: { "color": "#393A34" } }, " b")
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
        _push2(`<h1 id="quick-start-🔥" tabindex="-1"${_scopeId}>Quick Start 🔥 <a class="header-anchor" href="#quick-start-🔥" aria-hidden="true"${_scopeId}>#</a></h1><p${_scopeId}>The markdown file may consist of multiple sections. Some may be purely for documentation. Others will be recognized as specifying a web service function.</p>`);
      } else {
        return [
          createVNode("h1", {
            id: "quick-start-🔥",
            tabindex: "-1"
          }, [
            createTextVNode("Quick Start 🔥 "),
            createVNode("a", {
              class: "header-anchor",
              href: "#quick-start-🔥",
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
    lang: "Node.js",
    "code-box-title": "Sample Node Js Code 🔎"
  }, {
    code: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-js"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>js</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>express</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>require</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>express</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>crypto</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>require</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>crypto</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>app</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>express</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>();</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>Worker</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>require</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>webworker-threads</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>).</span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>Worker</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>app</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>get</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>/</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>req</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>res</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>worker</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>new</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>Worker</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>function</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>()</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>this</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>onmessage</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>function</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>()</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>let</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>counter</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#4C9A91" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#4D9375" })}"${_scopeId}>while</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>counter</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#4C9A91" })}"${_scopeId}>1e9</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>        </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>counter</span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>++</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>postMessage</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>counter</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>};</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>});</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>worker</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>onmessage</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>function</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>message</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>console</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>log</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>message</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>data</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>res</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>send</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;&quot;</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>+</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>message</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>data</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>};</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>worker</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>postMessage</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>();</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>});</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>app</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>get</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>/fast</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>req</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>res</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>res</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>send</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>This was fast!</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>});</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>app</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>listen</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#4C9A91" })}"${_scopeId}>3000</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>express</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>require</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>express</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>crypto</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>require</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>crypto</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>app</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>express</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>();</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>Worker</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>require</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>webworker-threads</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>).</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>Worker</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>app</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>get</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>/</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>req</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>res</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>worker</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>new</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>Worker</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>function</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>()</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>this</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>onmessage</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>function</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>()</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>let</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>counter</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#2F798A" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#1E754F" })}"${_scopeId}>while</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>counter</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#2F798A" })}"${_scopeId}>1e9</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>        </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>counter</span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>++</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>postMessage</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>counter</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>};</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>});</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>worker</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>onmessage</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>function</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>message</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>console</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>log</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>message</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>data</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>res</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>send</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;&quot;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>+</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>message</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>data</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>};</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>worker</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>postMessage</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>();</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>});</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>app</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>get</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>/fast</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>req</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>res</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>res</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>send</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>This was fast!</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>});</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>app</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>listen</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#2F798A" })}"${_scopeId}>3000</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div><div class="language-js"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>js</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>express</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>require</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>express</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>crypto</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>require</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>crypto</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>app</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>express</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>();</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>Worker</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>require</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>webworker-threads</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>).</span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>Worker</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>app</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>get</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>/</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>req</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>res</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>worker</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>new</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>Worker</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>function</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>()</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>this</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>onmessage</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>function</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>()</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>let</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>counter</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#4C9A91" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#4D9375" })}"${_scopeId}>while</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>counter</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#4C9A91" })}"${_scopeId}>1e9</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>        </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>counter</span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>++</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>postMessage</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>counter</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>};</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>});</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>worker</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>onmessage</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>function</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>message</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>console</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>log</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>message</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>data</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>res</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>send</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;&quot;</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}"${_scopeId}>+</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>message</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>data</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>};</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>worker</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>postMessage</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>();</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>});</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>app</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>get</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>/fast</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>req</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>res</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>res</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>send</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>This was fast!</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>});</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#BD976A" })}"${_scopeId}>app</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>listen</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#4C9A91" })}"${_scopeId}>3000</span><span style="${ssrRenderStyle({ "color": "#666666" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>express</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>require</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>express</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>crypto</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>require</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>crypto</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>app</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>express</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>();</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>Worker</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>require</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>webworker-threads</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>).</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>Worker</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>app</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>get</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>/</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>req</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>res</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>worker</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>new</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>Worker</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>function</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>()</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>this</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>onmessage</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>function</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>()</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>let</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>counter</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#2F798A" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#1E754F" })}"${_scopeId}>while</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>counter</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#2F798A" })}"${_scopeId}>1e9</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>        </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>counter</span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>++</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>      </span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>postMessage</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>counter</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>};</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>});</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>worker</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>onmessage</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>function</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>message</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>console</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>log</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>message</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>data</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>res</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>send</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;&quot;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}"${_scopeId}>+</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>message</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>data</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>};</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>worker</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>postMessage</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>();</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>});</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>app</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>get</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>/fast</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>req</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>res</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>res</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>send</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>This was fast!</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>});</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B07D48" })}"${_scopeId}>app</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>listen</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#2F798A" })}"${_scopeId}>3000</span><span style="${ssrRenderStyle({ "color": "#999999" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("div", { class: "language-js" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "js"),
            createVNode("pre", {
              class: "shiki vitesse-dark vp-code-dark",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#CB7676" } }, "const"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "express"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "="),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#80A665" } }, "require"),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "express"),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#666666" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#CB7676" } }, "const"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "crypto"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "="),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#80A665" } }, "require"),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "crypto"),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#666666" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#CB7676" } }, "const"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "app"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "="),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#80A665" } }, "express"),
                  createVNode("span", { style: { "color": "#666666" } }, "();")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#CB7676" } }, "const"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "Worker"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "="),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#80A665" } }, "require"),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "webworker-threads"),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#666666" } }, ")."),
                  createVNode("span", { style: { "color": "#BD976A" } }, "Worker"),
                  createVNode("span", { style: { "color": "#666666" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#BD976A" } }, "app"),
                  createVNode("span", { style: { "color": "#666666" } }, "."),
                  createVNode("span", { style: { "color": "#80A665" } }, "get"),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "/"),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#666666" } }, ","),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#BD976A" } }, "req"),
                  createVNode("span", { style: { "color": "#666666" } }, ","),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "res"),
                  createVNode("span", { style: { "color": "#666666" } }, ")"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "=>"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "  "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "const"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "worker"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "="),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "new"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#80A665" } }, "Worker"),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#CB7676" } }, "function"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "()"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "    "),
                  createVNode("span", { style: { "color": "#C99076" } }, "this"),
                  createVNode("span", { style: { "color": "#666666" } }, "."),
                  createVNode("span", { style: { "color": "#80A665" } }, "onmessage"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "="),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "function"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "()"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "      "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "let"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "counter"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "="),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#4C9A91" } }, "0"),
                  createVNode("span", { style: { "color": "#666666" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "      "),
                  createVNode("span", { style: { "color": "#4D9375" } }, "while"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#BD976A" } }, "counter"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "<"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#4C9A91" } }, "1e9"),
                  createVNode("span", { style: { "color": "#666666" } }, ")"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "        "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "counter"),
                  createVNode("span", { style: { "color": "#CB7676" } }, "++"),
                  createVNode("span", { style: { "color": "#666666" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "      "),
                  createVNode("span", { style: { "color": "#666666" } }, "}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "      "),
                  createVNode("span", { style: { "color": "#80A665" } }, "postMessage"),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#BD976A" } }, "counter"),
                  createVNode("span", { style: { "color": "#666666" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "    "),
                  createVNode("span", { style: { "color": "#666666" } }, "};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "  "),
                  createVNode("span", { style: { "color": "#666666" } }, "});")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "  "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "worker"),
                  createVNode("span", { style: { "color": "#666666" } }, "."),
                  createVNode("span", { style: { "color": "#80A665" } }, "onmessage"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "="),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "function"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#BD976A" } }, "message"),
                  createVNode("span", { style: { "color": "#666666" } }, ")"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "    "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "console"),
                  createVNode("span", { style: { "color": "#666666" } }, "."),
                  createVNode("span", { style: { "color": "#80A665" } }, "log"),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#BD976A" } }, "message"),
                  createVNode("span", { style: { "color": "#666666" } }, "."),
                  createVNode("span", { style: { "color": "#BD976A" } }, "data"),
                  createVNode("span", { style: { "color": "#666666" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "    "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "res"),
                  createVNode("span", { style: { "color": "#666666" } }, "."),
                  createVNode("span", { style: { "color": "#80A665" } }, "send"),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '""'),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "+"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "message"),
                  createVNode("span", { style: { "color": "#666666" } }, "."),
                  createVNode("span", { style: { "color": "#BD976A" } }, "data"),
                  createVNode("span", { style: { "color": "#666666" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "  "),
                  createVNode("span", { style: { "color": "#666666" } }, "};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "  "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "worker"),
                  createVNode("span", { style: { "color": "#666666" } }, "."),
                  createVNode("span", { style: { "color": "#80A665" } }, "postMessage"),
                  createVNode("span", { style: { "color": "#666666" } }, "();")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#666666" } }, "});")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#BD976A" } }, "app"),
                  createVNode("span", { style: { "color": "#666666" } }, "."),
                  createVNode("span", { style: { "color": "#80A665" } }, "get"),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "/fast"),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#666666" } }, ","),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#BD976A" } }, "req"),
                  createVNode("span", { style: { "color": "#666666" } }, ","),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "res"),
                  createVNode("span", { style: { "color": "#666666" } }, ")"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "=>"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "  "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "res"),
                  createVNode("span", { style: { "color": "#666666" } }, "."),
                  createVNode("span", { style: { "color": "#80A665" } }, "send"),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "This was fast!"),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#666666" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#666666" } }, "});")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#BD976A" } }, "app"),
                  createVNode("span", { style: { "color": "#666666" } }, "."),
                  createVNode("span", { style: { "color": "#80A665" } }, "listen"),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#4C9A91" } }, "3000"),
                  createVNode("span", { style: { "color": "#666666" } }, ");")
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
                  createVNode("span", { style: { "color": "#AB5959" } }, "const"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "express"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "="),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#59873A" } }, "require"),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#B56959" } }, "express"),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#999999" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#AB5959" } }, "const"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "crypto"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "="),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#59873A" } }, "require"),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#B56959" } }, "crypto"),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#999999" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#AB5959" } }, "const"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "app"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "="),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#59873A" } }, "express"),
                  createVNode("span", { style: { "color": "#999999" } }, "();")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#AB5959" } }, "const"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "Worker"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "="),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#59873A" } }, "require"),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#B56959" } }, "webworker-threads"),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#999999" } }, ")."),
                  createVNode("span", { style: { "color": "#B07D48" } }, "Worker"),
                  createVNode("span", { style: { "color": "#999999" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#B07D48" } }, "app"),
                  createVNode("span", { style: { "color": "#999999" } }, "."),
                  createVNode("span", { style: { "color": "#59873A" } }, "get"),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#B56959" } }, "/"),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#999999" } }, ","),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B07D48" } }, "req"),
                  createVNode("span", { style: { "color": "#999999" } }, ","),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "res"),
                  createVNode("span", { style: { "color": "#999999" } }, ")"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "=>"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "  "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "const"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "worker"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "="),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "new"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#59873A" } }, "Worker"),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#AB5959" } }, "function"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "()"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "    "),
                  createVNode("span", { style: { "color": "#A65E2B" } }, "this"),
                  createVNode("span", { style: { "color": "#999999" } }, "."),
                  createVNode("span", { style: { "color": "#59873A" } }, "onmessage"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "="),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "function"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "()"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "      "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "let"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "counter"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "="),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#2F798A" } }, "0"),
                  createVNode("span", { style: { "color": "#999999" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "      "),
                  createVNode("span", { style: { "color": "#1E754F" } }, "while"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B07D48" } }, "counter"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "<"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#2F798A" } }, "1e9"),
                  createVNode("span", { style: { "color": "#999999" } }, ")"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "        "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "counter"),
                  createVNode("span", { style: { "color": "#AB5959" } }, "++"),
                  createVNode("span", { style: { "color": "#999999" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "      "),
                  createVNode("span", { style: { "color": "#999999" } }, "}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "      "),
                  createVNode("span", { style: { "color": "#59873A" } }, "postMessage"),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B07D48" } }, "counter"),
                  createVNode("span", { style: { "color": "#999999" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "    "),
                  createVNode("span", { style: { "color": "#999999" } }, "};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "  "),
                  createVNode("span", { style: { "color": "#999999" } }, "});")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "  "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "worker"),
                  createVNode("span", { style: { "color": "#999999" } }, "."),
                  createVNode("span", { style: { "color": "#59873A" } }, "onmessage"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "="),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "function"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B07D48" } }, "message"),
                  createVNode("span", { style: { "color": "#999999" } }, ")"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "    "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "console"),
                  createVNode("span", { style: { "color": "#999999" } }, "."),
                  createVNode("span", { style: { "color": "#59873A" } }, "log"),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B07D48" } }, "message"),
                  createVNode("span", { style: { "color": "#999999" } }, "."),
                  createVNode("span", { style: { "color": "#B07D48" } }, "data"),
                  createVNode("span", { style: { "color": "#999999" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "    "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "res"),
                  createVNode("span", { style: { "color": "#999999" } }, "."),
                  createVNode("span", { style: { "color": "#59873A" } }, "send"),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B5695999" } }, '""'),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "+"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "message"),
                  createVNode("span", { style: { "color": "#999999" } }, "."),
                  createVNode("span", { style: { "color": "#B07D48" } }, "data"),
                  createVNode("span", { style: { "color": "#999999" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "  "),
                  createVNode("span", { style: { "color": "#999999" } }, "};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "  "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "worker"),
                  createVNode("span", { style: { "color": "#999999" } }, "."),
                  createVNode("span", { style: { "color": "#59873A" } }, "postMessage"),
                  createVNode("span", { style: { "color": "#999999" } }, "();")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#999999" } }, "});")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#B07D48" } }, "app"),
                  createVNode("span", { style: { "color": "#999999" } }, "."),
                  createVNode("span", { style: { "color": "#59873A" } }, "get"),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#B56959" } }, "/fast"),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#999999" } }, ","),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B07D48" } }, "req"),
                  createVNode("span", { style: { "color": "#999999" } }, ","),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "res"),
                  createVNode("span", { style: { "color": "#999999" } }, ")"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "=>"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "  "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "res"),
                  createVNode("span", { style: { "color": "#999999" } }, "."),
                  createVNode("span", { style: { "color": "#59873A" } }, "send"),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#B56959" } }, "This was fast!"),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#999999" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#999999" } }, "});")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#B07D48" } }, "app"),
                  createVNode("span", { style: { "color": "#999999" } }, "."),
                  createVNode("span", { style: { "color": "#59873A" } }, "listen"),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#2F798A" } }, "3000"),
                  createVNode("span", { style: { "color": "#999999" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("div", { class: "language-js" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "js"),
            createVNode("pre", {
              class: "shiki vitesse-dark vp-code-dark",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#CB7676" } }, "const"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "express"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "="),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#80A665" } }, "require"),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "express"),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#666666" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#CB7676" } }, "const"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "crypto"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "="),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#80A665" } }, "require"),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "crypto"),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#666666" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#CB7676" } }, "const"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "app"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "="),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#80A665" } }, "express"),
                  createVNode("span", { style: { "color": "#666666" } }, "();")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#CB7676" } }, "const"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "Worker"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "="),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#80A665" } }, "require"),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "webworker-threads"),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#666666" } }, ")."),
                  createVNode("span", { style: { "color": "#BD976A" } }, "Worker"),
                  createVNode("span", { style: { "color": "#666666" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#BD976A" } }, "app"),
                  createVNode("span", { style: { "color": "#666666" } }, "."),
                  createVNode("span", { style: { "color": "#80A665" } }, "get"),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "/"),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#666666" } }, ","),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#BD976A" } }, "req"),
                  createVNode("span", { style: { "color": "#666666" } }, ","),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "res"),
                  createVNode("span", { style: { "color": "#666666" } }, ")"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "=>"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "  "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "const"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "worker"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "="),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "new"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#80A665" } }, "Worker"),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#CB7676" } }, "function"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "()"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "    "),
                  createVNode("span", { style: { "color": "#C99076" } }, "this"),
                  createVNode("span", { style: { "color": "#666666" } }, "."),
                  createVNode("span", { style: { "color": "#80A665" } }, "onmessage"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "="),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "function"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "()"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "      "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "let"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "counter"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "="),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#4C9A91" } }, "0"),
                  createVNode("span", { style: { "color": "#666666" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "      "),
                  createVNode("span", { style: { "color": "#4D9375" } }, "while"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#BD976A" } }, "counter"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "<"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#4C9A91" } }, "1e9"),
                  createVNode("span", { style: { "color": "#666666" } }, ")"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "        "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "counter"),
                  createVNode("span", { style: { "color": "#CB7676" } }, "++"),
                  createVNode("span", { style: { "color": "#666666" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "      "),
                  createVNode("span", { style: { "color": "#666666" } }, "}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "      "),
                  createVNode("span", { style: { "color": "#80A665" } }, "postMessage"),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#BD976A" } }, "counter"),
                  createVNode("span", { style: { "color": "#666666" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "    "),
                  createVNode("span", { style: { "color": "#666666" } }, "};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "  "),
                  createVNode("span", { style: { "color": "#666666" } }, "});")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "  "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "worker"),
                  createVNode("span", { style: { "color": "#666666" } }, "."),
                  createVNode("span", { style: { "color": "#80A665" } }, "onmessage"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "="),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "function"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#BD976A" } }, "message"),
                  createVNode("span", { style: { "color": "#666666" } }, ")"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "    "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "console"),
                  createVNode("span", { style: { "color": "#666666" } }, "."),
                  createVNode("span", { style: { "color": "#80A665" } }, "log"),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#BD976A" } }, "message"),
                  createVNode("span", { style: { "color": "#666666" } }, "."),
                  createVNode("span", { style: { "color": "#BD976A" } }, "data"),
                  createVNode("span", { style: { "color": "#666666" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "    "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "res"),
                  createVNode("span", { style: { "color": "#666666" } }, "."),
                  createVNode("span", { style: { "color": "#80A665" } }, "send"),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '""'),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#CB7676" } }, "+"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "message"),
                  createVNode("span", { style: { "color": "#666666" } }, "."),
                  createVNode("span", { style: { "color": "#BD976A" } }, "data"),
                  createVNode("span", { style: { "color": "#666666" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "  "),
                  createVNode("span", { style: { "color": "#666666" } }, "};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "  "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "worker"),
                  createVNode("span", { style: { "color": "#666666" } }, "."),
                  createVNode("span", { style: { "color": "#80A665" } }, "postMessage"),
                  createVNode("span", { style: { "color": "#666666" } }, "();")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#666666" } }, "});")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#BD976A" } }, "app"),
                  createVNode("span", { style: { "color": "#666666" } }, "."),
                  createVNode("span", { style: { "color": "#80A665" } }, "get"),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "/fast"),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#666666" } }, ","),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#BD976A" } }, "req"),
                  createVNode("span", { style: { "color": "#666666" } }, ","),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "res"),
                  createVNode("span", { style: { "color": "#666666" } }, ")"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "=>"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#666666" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "  "),
                  createVNode("span", { style: { "color": "#BD976A" } }, "res"),
                  createVNode("span", { style: { "color": "#666666" } }, "."),
                  createVNode("span", { style: { "color": "#80A665" } }, "send"),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "This was fast!"),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, '"'),
                  createVNode("span", { style: { "color": "#666666" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#666666" } }, "});")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#BD976A" } }, "app"),
                  createVNode("span", { style: { "color": "#666666" } }, "."),
                  createVNode("span", { style: { "color": "#80A665" } }, "listen"),
                  createVNode("span", { style: { "color": "#666666" } }, "("),
                  createVNode("span", { style: { "color": "#4C9A91" } }, "3000"),
                  createVNode("span", { style: { "color": "#666666" } }, ");")
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
                  createVNode("span", { style: { "color": "#AB5959" } }, "const"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "express"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "="),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#59873A" } }, "require"),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#B56959" } }, "express"),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#999999" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#AB5959" } }, "const"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "crypto"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "="),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#59873A" } }, "require"),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#B56959" } }, "crypto"),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#999999" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#AB5959" } }, "const"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "app"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "="),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#59873A" } }, "express"),
                  createVNode("span", { style: { "color": "#999999" } }, "();")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#AB5959" } }, "const"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "Worker"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "="),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#59873A" } }, "require"),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#B56959" } }, "webworker-threads"),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#999999" } }, ")."),
                  createVNode("span", { style: { "color": "#B07D48" } }, "Worker"),
                  createVNode("span", { style: { "color": "#999999" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#B07D48" } }, "app"),
                  createVNode("span", { style: { "color": "#999999" } }, "."),
                  createVNode("span", { style: { "color": "#59873A" } }, "get"),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#B56959" } }, "/"),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#999999" } }, ","),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B07D48" } }, "req"),
                  createVNode("span", { style: { "color": "#999999" } }, ","),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "res"),
                  createVNode("span", { style: { "color": "#999999" } }, ")"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "=>"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "  "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "const"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "worker"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "="),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "new"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#59873A" } }, "Worker"),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#AB5959" } }, "function"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "()"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "    "),
                  createVNode("span", { style: { "color": "#A65E2B" } }, "this"),
                  createVNode("span", { style: { "color": "#999999" } }, "."),
                  createVNode("span", { style: { "color": "#59873A" } }, "onmessage"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "="),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "function"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "()"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "      "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "let"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "counter"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "="),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#2F798A" } }, "0"),
                  createVNode("span", { style: { "color": "#999999" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "      "),
                  createVNode("span", { style: { "color": "#1E754F" } }, "while"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B07D48" } }, "counter"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "<"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#2F798A" } }, "1e9"),
                  createVNode("span", { style: { "color": "#999999" } }, ")"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "        "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "counter"),
                  createVNode("span", { style: { "color": "#AB5959" } }, "++"),
                  createVNode("span", { style: { "color": "#999999" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "      "),
                  createVNode("span", { style: { "color": "#999999" } }, "}")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "      "),
                  createVNode("span", { style: { "color": "#59873A" } }, "postMessage"),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B07D48" } }, "counter"),
                  createVNode("span", { style: { "color": "#999999" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "    "),
                  createVNode("span", { style: { "color": "#999999" } }, "};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "  "),
                  createVNode("span", { style: { "color": "#999999" } }, "});")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "  "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "worker"),
                  createVNode("span", { style: { "color": "#999999" } }, "."),
                  createVNode("span", { style: { "color": "#59873A" } }, "onmessage"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "="),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "function"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B07D48" } }, "message"),
                  createVNode("span", { style: { "color": "#999999" } }, ")"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "    "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "console"),
                  createVNode("span", { style: { "color": "#999999" } }, "."),
                  createVNode("span", { style: { "color": "#59873A" } }, "log"),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B07D48" } }, "message"),
                  createVNode("span", { style: { "color": "#999999" } }, "."),
                  createVNode("span", { style: { "color": "#B07D48" } }, "data"),
                  createVNode("span", { style: { "color": "#999999" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "    "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "res"),
                  createVNode("span", { style: { "color": "#999999" } }, "."),
                  createVNode("span", { style: { "color": "#59873A" } }, "send"),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B5695999" } }, '""'),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#AB5959" } }, "+"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "message"),
                  createVNode("span", { style: { "color": "#999999" } }, "."),
                  createVNode("span", { style: { "color": "#B07D48" } }, "data"),
                  createVNode("span", { style: { "color": "#999999" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "  "),
                  createVNode("span", { style: { "color": "#999999" } }, "};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "  "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "worker"),
                  createVNode("span", { style: { "color": "#999999" } }, "."),
                  createVNode("span", { style: { "color": "#59873A" } }, "postMessage"),
                  createVNode("span", { style: { "color": "#999999" } }, "();")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#999999" } }, "});")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#B07D48" } }, "app"),
                  createVNode("span", { style: { "color": "#999999" } }, "."),
                  createVNode("span", { style: { "color": "#59873A" } }, "get"),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#B56959" } }, "/fast"),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#999999" } }, ","),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B07D48" } }, "req"),
                  createVNode("span", { style: { "color": "#999999" } }, ","),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "res"),
                  createVNode("span", { style: { "color": "#999999" } }, ")"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "=>"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#999999" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "  "),
                  createVNode("span", { style: { "color": "#B07D48" } }, "res"),
                  createVNode("span", { style: { "color": "#999999" } }, "."),
                  createVNode("span", { style: { "color": "#59873A" } }, "send"),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#B56959" } }, "This was fast!"),
                  createVNode("span", { style: { "color": "#B5695999" } }, '"'),
                  createVNode("span", { style: { "color": "#999999" } }, ");")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#999999" } }, "});")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#B07D48" } }, "app"),
                  createVNode("span", { style: { "color": "#999999" } }, "."),
                  createVNode("span", { style: { "color": "#59873A" } }, "listen"),
                  createVNode("span", { style: { "color": "#999999" } }, "("),
                  createVNode("span", { style: { "color": "#2F798A" } }, "3000"),
                  createVNode("span", { style: { "color": "#999999" } }, ");")
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
        _push2(`<h1 id="quick-start-🔥-1" tabindex="-1"${_scopeId}>Quick Start 🔥 <a class="header-anchor" href="#quick-start-🔥-1" aria-hidden="true"${_scopeId}>#</a></h1><p${_scopeId}>The markdown file may consist of multiple sections. Some may be purely for documentation. Others will be recognized as specifying a web service function.</p>`);
      } else {
        return [
          createVNode("h1", {
            id: "quick-start-🔥-1",
            tabindex: "-1"
          }, [
            createTextVNode("Quick Start 🔥 "),
            createVNode("a", {
              class: "header-anchor",
              href: "#quick-start-🔥-1",
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
    title: "mock title",
    "json-file-name": "sample"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 id="quick-start-🔥-2" tabindex="-1"${_scopeId}>Quick Start 🔥 <a class="header-anchor" href="#quick-start-🔥-2" aria-hidden="true"${_scopeId}>#</a></h1><p${_scopeId}>The markdown file may consist of multiple sections. Some may be purely for documentation. Others will be recognized as specifying a web service function.</p><h2 id="introduction-section" tabindex="-1"${_scopeId}>Introduction section <a class="header-anchor" href="#introduction-section" aria-hidden="true"${_scopeId}>#</a></h2><p${_scopeId}>The very first section an introduction. The title is the name of the web service. The body contains an overview and probably a link to the official, full documentation. All of that is by convention for documentation purposes. The only <em${_scopeId}>requirement</em> is that the phrase <code${_scopeId}>Endpoint: &lt;URI&gt;</code> occur <em${_scopeId}>somewhere</em> in this first section, and be on its own line.</p><pre${_scopeId}><code${_scopeId}># Foobar Web Service v1.1

Foobar is awesome-liscious.

[Official docs](http://wherevs.com/dev).

Endpoint: http://wherevs.com/api/v1

Following are the available functions.

...
</code></pre>`);
      } else {
        return [
          createVNode("h1", {
            id: "quick-start-🔥-2",
            tabindex: "-1"
          }, [
            createTextVNode("Quick Start 🔥 "),
            createVNode("a", {
              class: "header-anchor",
              href: "#quick-start-🔥-2",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/api/sample-api.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sampleApi = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sampleApi as default
};
