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
const __pageData = JSON.parse('{"title":"Quick Start","description":"","frontmatter":{"aside":false},"headers":[{"level":2,"title":"Schema","slug":"schema","link":"#schema","children":[]},{"level":2,"title":"Purse Status Table","slug":"purse-status-table","link":"#purse-status-table","children":[]}],"relativePath":"en/sdks/azpays/oauth.md","lastUpdated":1676281064000}');
const _sfc_main = { name: "en/sdks/azpays/oauth.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SelectLibraries = SelectLibraries;
  const _component_CodeBox = CodeBox;
  const _component_Response = Response;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_SelectLibraries, { libraries: [
    {
      name: "Restful",
      link: "https://api.azpays.net/v1",
      code: "https://api.azpays.net/v1"
    },
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
        _push2(`<h1 id="quick-start" tabindex="-1"${_scopeId}>Quick Start <a class="header-anchor" href="#quick-start" aria-hidden="true"${_scopeId}>#</a></h1><p${_scopeId}>Welcome to <strong${_scopeId}>AzPays</strong>! 🎉 We understand how important it is to stay connected with your customers, and that&#39;s why we offer SDKs that make it easy, fast and safe to connect to our products and services via APIs. So don&#39;t wait, get connected today! 🤝</p>`);
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
            createVNode("strong", null, "AzPays"),
            createTextVNode("! 🎉 We understand how important it is to stay connected with your customers, and that's why we offer SDKs that make it easy, fast and safe to connect to our products and services via APIs. So don't wait, get connected today! 🤝")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_CodeBox, {
    lang: "Restful",
    method: "GET",
    endpoint: "/v1/oauth/sign"
  }, {
    code: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-bash"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>bash</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>$</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>curl</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>--request</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>POST</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>\\</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>https://api.azpays.net/v1/oauth/sign</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>\\</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>--u</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>id: hi@trader4.net</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>$</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>curl</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>--request</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>POST</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>\\</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>https://api.azpays.net/v1/oauth/sign</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>\\</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>--u</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>id: hi@trader4.net</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("div", { class: "language-bash" }, [
            createVNode("button", {
              title: "Copy Code",
              class: "copy"
            }),
            createVNode("span", { class: "lang" }, "bash"),
            createVNode("pre", {
              class: "shiki vitesse-dark vp-code-dark",
              tabindex: "0"
            }, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#80A665" } }, "$"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "curl"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C99076" } }, "--request"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "POST"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C99076" } }, "\\")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "  "),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "https://api.azpays.net/v1/oauth/sign"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C99076" } }, "\\")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "  "),
                  createVNode("span", { style: { "color": "#C99076" } }, "--u"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, "'"),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "id: hi@trader4.net"),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, "'")
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
                  createVNode("span", { style: { "color": "#59873A" } }, "$"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B56959" } }, "curl"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#A65E2B" } }, "--request"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B56959" } }, "POST"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#A65E2B" } }, "\\")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "  "),
                  createVNode("span", { style: { "color": "#B56959" } }, "https://api.azpays.net/v1/oauth/sign"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#A65E2B" } }, "\\")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "  "),
                  createVNode("span", { style: { "color": "#A65E2B" } }, "--u"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B5695999" } }, "'"),
                  createVNode("span", { style: { "color": "#B56959" } }, "id: hi@trader4.net"),
                  createVNode("span", { style: { "color": "#B5695999" } }, "'")
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
        _push2(`<h1 id="sign" tabindex="-1"${_scopeId}>Sign <a class="header-anchor" href="#sign" aria-hidden="true"${_scopeId}>#</a></h1><p${_scopeId}>Using our Sign Method, users are now able to easily request an One-Time Password (OTP) for added security. This powerful feature provides an extra layer of safety when it comes to your data security. With this added security, you can rest assured that your data is kept safe and secure.</p><p${_scopeId}><code${_scopeId}>id</code> <sup${_scopeId}><sub${_scopeId}>String</sub></sup>, The identity of user account, it can be below items.</p><pre${_scopeId}><code${_scopeId}>✔️ email                  hi@trader4.net   
✔️ mobile_number          +447888872720  
✔️ crypto                 bc1uw48ht4287287
✔️ phone_number           +445528888852
</code></pre>`);
      } else {
        return [
          createVNode("h1", {
            id: "sign",
            tabindex: "-1"
          }, [
            createTextVNode("Sign "),
            createVNode("a", {
              class: "header-anchor",
              href: "#sign",
              "aria-hidden": "true"
            }, "#")
          ]),
          createVNode("p", null, "Using our Sign Method, users are now able to easily request an One-Time Password (OTP) for added security. This powerful feature provides an extra layer of safety when it comes to your data security. With this added security, you can rest assured that your data is kept safe and secure."),
          createVNode("p", null, [
            createVNode("code", null, "id"),
            createTextVNode(),
            createVNode("sup", null, [
              createVNode("sub", null, "String")
            ]),
            createTextVNode(", The identity of user account, it can be below items.")
          ]),
          createVNode("pre", null, [
            createVNode("code", null, "✔️ email                  hi@trader4.net   \n✔️ mobile_number          +447888872720  \n✔️ crypto                 bc1uw48ht4287287\n✔️ phone_number           +445528888852\n")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Response, { jfile: "azpays/purse/list" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 id="schema" tabindex="-1"${_scopeId}>Schema <a class="header-anchor" href="#schema" aria-hidden="true"${_scopeId}>#</a></h2><p${_scopeId}><code${_scopeId}>succeed</code> <sup${_scopeId}><sub${_scopeId}>Boolean</sub></sup><br${_scopeId}><code${_scopeId}>message</code> <sup${_scopeId}><sub${_scopeId}>String</sub></sup><br${_scopeId}><code${_scopeId}>result</code> <sup${_scopeId}><sub${_scopeId}>JSON Array</sub></sup><br${_scopeId}><code${_scopeId}>uuid</code> <sup${_scopeId}><sub${_scopeId}>UUID V4</sub></sup><br${_scopeId}><code${_scopeId}>name</code> <sup${_scopeId}><sub${_scopeId}>String</sub></sup>, The name of purse, user sent in create form/request.<br${_scopeId}><code${_scopeId}>currency</code> <sup${_scopeId}><sub${_scopeId}>String</sub></sup>, The currency unit based on <a href="https://en.wikipedia.org/wiki/ISO_4217" target="_blank" rel="noreferrer"${_scopeId}>ISO 4217</a><br${_scopeId}><code${_scopeId}>note</code> <sup${_scopeId}><sub${_scopeId}>String</sub></sup>, A note that user sent in create form/request.<br${_scopeId}><code${_scopeId}>status</code> <sup${_scopeId}><sub${_scopeId}>Integer</sub></sup>, The status of purse, Check out <a href="#purse-status-table"${_scopeId}>Purse Status Table</a><br${_scopeId}><code${_scopeId}>number</code> <sup${_scopeId}><sub${_scopeId}>Integer</sub></sup>, The unique generated number for purse.<br${_scopeId}><code${_scopeId}>color</code> <sup${_scopeId}><sub${_scopeId}>String</sub></sup><br${_scopeId}><code${_scopeId}>balance</code> <sup${_scopeId}><sub${_scopeId}>Float</sub></sup><br${_scopeId}><code${_scopeId}>freeze</code> <sup${_scopeId}><sub${_scopeId}>Float</sub></sup><br${_scopeId}><code${_scopeId}>created_at</code> <sup${_scopeId}><sub${_scopeId}>Datetime</sub></sup><br${_scopeId}><code${_scopeId}>updated_at</code> <sup${_scopeId}><sub${_scopeId}>Datetime</sub></sup><br${_scopeId}><code${_scopeId}>meta</code> <sup${_scopeId}><sub${_scopeId}>JSON Array</sub></sup></p>`);
      } else {
        return [
          createVNode("h2", {
            id: "schema",
            tabindex: "-1"
          }, [
            createTextVNode("Schema "),
            createVNode("a", {
              class: "header-anchor",
              href: "#schema",
              "aria-hidden": "true"
            }, "#")
          ]),
          createVNode("p", null, [
            createVNode("code", null, "succeed"),
            createTextVNode(),
            createVNode("sup", null, [
              createVNode("sub", null, "Boolean")
            ]),
            createVNode("br"),
            createVNode("code", null, "message"),
            createTextVNode(),
            createVNode("sup", null, [
              createVNode("sub", null, "String")
            ]),
            createVNode("br"),
            createVNode("code", null, "result"),
            createTextVNode(),
            createVNode("sup", null, [
              createVNode("sub", null, "JSON Array")
            ]),
            createVNode("br"),
            createVNode("code", null, "uuid"),
            createTextVNode(),
            createVNode("sup", null, [
              createVNode("sub", null, "UUID V4")
            ]),
            createVNode("br"),
            createVNode("code", null, "name"),
            createTextVNode(),
            createVNode("sup", null, [
              createVNode("sub", null, "String")
            ]),
            createTextVNode(", The name of purse, user sent in create form/request."),
            createVNode("br"),
            createVNode("code", null, "currency"),
            createTextVNode(),
            createVNode("sup", null, [
              createVNode("sub", null, "String")
            ]),
            createTextVNode(", The currency unit based on "),
            createVNode("a", {
              href: "https://en.wikipedia.org/wiki/ISO_4217",
              target: "_blank",
              rel: "noreferrer"
            }, "ISO 4217"),
            createVNode("br"),
            createVNode("code", null, "note"),
            createTextVNode(),
            createVNode("sup", null, [
              createVNode("sub", null, "String")
            ]),
            createTextVNode(", A note that user sent in create form/request."),
            createVNode("br"),
            createVNode("code", null, "status"),
            createTextVNode(),
            createVNode("sup", null, [
              createVNode("sub", null, "Integer")
            ]),
            createTextVNode(", The status of purse, Check out "),
            createVNode("a", { href: "#purse-status-table" }, "Purse Status Table"),
            createVNode("br"),
            createVNode("code", null, "number"),
            createTextVNode(),
            createVNode("sup", null, [
              createVNode("sub", null, "Integer")
            ]),
            createTextVNode(", The unique generated number for purse."),
            createVNode("br"),
            createVNode("code", null, "color"),
            createTextVNode(),
            createVNode("sup", null, [
              createVNode("sub", null, "String")
            ]),
            createVNode("br"),
            createVNode("code", null, "balance"),
            createTextVNode(),
            createVNode("sup", null, [
              createVNode("sub", null, "Float")
            ]),
            createVNode("br"),
            createVNode("code", null, "freeze"),
            createTextVNode(),
            createVNode("sup", null, [
              createVNode("sub", null, "Float")
            ]),
            createVNode("br"),
            createVNode("code", null, "created_at"),
            createTextVNode(),
            createVNode("sup", null, [
              createVNode("sub", null, "Datetime")
            ]),
            createVNode("br"),
            createVNode("code", null, "updated_at"),
            createTextVNode(),
            createVNode("sup", null, [
              createVNode("sub", null, "Datetime")
            ]),
            createVNode("br"),
            createVNode("code", null, "meta"),
            createTextVNode(),
            createVNode("sup", null, [
              createVNode("sub", null, "JSON Array")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="purse-status-table" tabindex="-1">Purse Status Table <a class="header-anchor" href="#purse-status-table" aria-hidden="true">#</a></h2><table><thead><tr><th>CODE</th><th>CONSTANT</th><th>DESCRIPTION</th></tr></thead><tbody><tr><td><code>11010</code></td><td><pre>purse_status_registered</pre></td><td>The purse has been registered and not activated yet.</td></tr><tr><td><code>11011</code></td><td><pre>purse_status_active</pre></td><td>The purse is active, full functionality state.</td></tr><tr><td><code>11012</code></td><td><pre>purse_status_hold</pre></td><td>The purse is temporary is inactive, it happen by fraud system.</td></tr><tr><td><code>11013</code></td><td><pre>purse_status_inactive</pre></td><td>The purse has been inactivated. In this state user can access read method.</td></tr><tr><td><code>11014</code></td><td><pre>purse_status_blocked</pre></td><td>The purse disabled, it happen by fraud and/or anti-money laundering and/or legal requests.</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/sdks/azpays/oauth.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const oauth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  oauth as default
};
