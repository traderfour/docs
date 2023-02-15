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
const __pageData = JSON.parse('{"title":"Quick Start","description":"","frontmatter":{"aside":false},"headers":[{"level":2,"title":"Transaction Status Table","slug":"transaction-status-table","link":"#transaction-status-table","children":[]}],"relativePath":"en/api/subscription.md","lastUpdated":1676281064000}');
const _sfc_main = { name: "en/api/subscription.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SelectLibraries = SelectLibraries;
  const _component_CodeBox = CodeBox;
  const _component_Response = Response;
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
  _push(ssrRenderComponent(_component_CodeBox, {
    lang: "Restful",
    method: "GET",
    endpoint: "/v1/transactions"
  }, {
    code: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-bash"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>bash</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>$</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>curl</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>https://api.azpays.net/v1/transactions</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>--header</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>Authorization: Bearer [ACCESS_TOKEN]</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>$</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>curl</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>https://api.azpays.net/v1/transactions</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>--header</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>Authorization: Bearer [ACCESS_TOKEN]</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&#39;</span></span>
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
                  createVNode("span", { style: { "color": "#C98A7D" } }, "https://api.azpays.net/v1/transactions")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "  "),
                  createVNode("span", { style: { "color": "#80A665" } }, "--header"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, "'"),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "Authorization: Bearer [ACCESS_TOKEN]"),
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
                  createVNode("span", { style: { "color": "#B56959" } }, "https://api.azpays.net/v1/transactions")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "  "),
                  createVNode("span", { style: { "color": "#59873A" } }, "--header"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B5695999" } }, "'"),
                  createVNode("span", { style: { "color": "#B56959" } }, "Authorization: Bearer [ACCESS_TOKEN]"),
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
        _push2(`<h1 id="transaction-list" tabindex="-1"${_scopeId}>Transaction List <a class="header-anchor" href="#transaction-list" aria-hidden="true"${_scopeId}>#</a></h1><p${_scopeId}>This API method enables you to obtain the complete listing of your account&#39;s transactions information.</p><span class="text-xs"${_scopeId}><p${_scopeId}><code${_scopeId}>Authorization</code> <sup${_scopeId}><sub${_scopeId}>String</sub></sup>, Access token that received in <a href="https://docs.azpays.com/oauth/#verify" target="_blank" rel="noreferrer"${_scopeId}><em${_scopeId}>/oauth/verify</em></a> method.</p></span>`);
      } else {
        return [
          createVNode("h1", {
            id: "transaction-list",
            tabindex: "-1"
          }, [
            createTextVNode("Transaction List "),
            createVNode("a", {
              class: "header-anchor",
              href: "#transaction-list",
              "aria-hidden": "true"
            }, "#")
          ]),
          createVNode("p", null, "This API method enables you to obtain the complete listing of your account's transactions information."),
          createVNode("span", { class: "text-xs" }, [
            createVNode("p", null, [
              createVNode("code", null, "Authorization"),
              createTextVNode(),
              createVNode("sup", null, [
                createVNode("sub", null, "String")
              ]),
              createTextVNode(", Access token that received in "),
              createVNode("a", {
                href: "https://docs.azpays.com/oauth/#verify",
                target: "_blank",
                rel: "noreferrer"
              }, [
                createVNode("em", null, "/oauth/verify")
              ]),
              createTextVNode(" method.")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Response, { jfile: "azpays/transaction/list" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><code${_scopeId}>uuid</code> <span${_scopeId}>UUID V4</span>, The unique identifier of purse.</li><li${_scopeId}><code${_scopeId}>name</code> <span${_scopeId}>String</span>, The name of purse, user sent in create form/request.</li><li${_scopeId}><code${_scopeId}>currency</code> <span${_scopeId}>String</span>, The currency unit based on <a href="https://en.wikipedia.org/wiki/ISO_4217" target="_blank" rel="noreferrer"${_scopeId}>ISO 4217</a></li><li${_scopeId}><code${_scopeId}>note</code> <span${_scopeId}>String</span>, A note that user sent in create form/request.</li><li${_scopeId}><code${_scopeId}>status</code> <span${_scopeId}>Integer</span>, The status of purse, Check out <a href="#purse-status-table"${_scopeId}>Purse Status Table</a></li><li${_scopeId}><code${_scopeId}>number</code> <span${_scopeId}>Integer</span>, The unique generated number for purse.</li><li${_scopeId}><code${_scopeId}>color</code> <span${_scopeId}>String</span>, The color of purse, user sent in create form/request.</li><li${_scopeId}><code${_scopeId}>balance</code> <span${_scopeId}>Float</span>, The balance of purse.</li><li${_scopeId}><code${_scopeId}>freeze</code> <span${_scopeId}>Float</span>, The freeze of purse.</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("code", null, "uuid"),
              createTextVNode(),
              createVNode("span", null, "UUID V4"),
              createTextVNode(", The unique identifier of purse.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "name"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The name of purse, user sent in create form/request.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "currency"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The currency unit based on "),
              createVNode("a", {
                href: "https://en.wikipedia.org/wiki/ISO_4217",
                target: "_blank",
                rel: "noreferrer"
              }, "ISO 4217")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "note"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", A note that user sent in create form/request.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "status"),
              createTextVNode(),
              createVNode("span", null, "Integer"),
              createTextVNode(", The status of purse, Check out "),
              createVNode("a", { href: "#purse-status-table" }, "Purse Status Table")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "number"),
              createTextVNode(),
              createVNode("span", null, "Integer"),
              createTextVNode(", The unique generated number for purse.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "color"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The color of purse, user sent in create form/request.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "balance"),
              createTextVNode(),
              createVNode("span", null, "Float"),
              createTextVNode(", The balance of purse.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "freeze"),
              createTextVNode(),
              createVNode("span", null, "Float"),
              createTextVNode(", The freeze of purse.")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_CodeBox, {
    lang: "Restful",
    method: "GET",
    endpoint: "/v1/transactions/:uuid"
  }, {
    code: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-bash"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>bash</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>$</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>curl</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>https://api.azpays.net/v1/transactions/:uuid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>--header</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>Authorization: Bearer [ACCESS_TOKEN]</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>$</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>curl</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>https://api.azpays.net/v1/transactions/:uuid</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>--header</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>Authorization: Bearer [ACCESS_TOKEN]</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&#39;</span></span>
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
                  createVNode("span", { style: { "color": "#C98A7D" } }, "https://api.azpays.net/v1/transactions/:uuid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "  "),
                  createVNode("span", { style: { "color": "#80A665" } }, "--header"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, "'"),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "Authorization: Bearer [ACCESS_TOKEN]"),
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
                  createVNode("span", { style: { "color": "#B56959" } }, "https://api.azpays.net/v1/transactions/:uuid")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "  "),
                  createVNode("span", { style: { "color": "#59873A" } }, "--header"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B5695999" } }, "'"),
                  createVNode("span", { style: { "color": "#B56959" } }, "Authorization: Bearer [ACCESS_TOKEN]"),
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
        _push2(`<h1 id="transaction-read" tabindex="-1"${_scopeId}>Transaction Read <a class="header-anchor" href="#transaction-read" aria-hidden="true"${_scopeId}>#</a></h1><p${_scopeId}>This API method enables you to obtain the complete information of your transaction information.</p><span class="text-xs"${_scopeId}><p${_scopeId}><code${_scopeId}>Authorization</code> <sup${_scopeId}><sub${_scopeId}>String</sub></sup>, Access token that received in <a href="https://docs.azpays.com/oauth/#verify" target="_blank" rel="noreferrer"${_scopeId}><em${_scopeId}>/oauth/verify</em></a> method.</p></span>`);
      } else {
        return [
          createVNode("h1", {
            id: "transaction-read",
            tabindex: "-1"
          }, [
            createTextVNode("Transaction Read "),
            createVNode("a", {
              class: "header-anchor",
              href: "#transaction-read",
              "aria-hidden": "true"
            }, "#")
          ]),
          createVNode("p", null, "This API method enables you to obtain the complete information of your transaction information."),
          createVNode("span", { class: "text-xs" }, [
            createVNode("p", null, [
              createVNode("code", null, "Authorization"),
              createTextVNode(),
              createVNode("sup", null, [
                createVNode("sub", null, "String")
              ]),
              createTextVNode(", Access token that received in "),
              createVNode("a", {
                href: "https://docs.azpays.com/oauth/#verify",
                target: "_blank",
                rel: "noreferrer"
              }, [
                createVNode("em", null, "/oauth/verify")
              ]),
              createTextVNode(" method.")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Response, { jfile: "azpays/transaction/read" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><code${_scopeId}>uuid</code> <span${_scopeId}>UUID V4</span>, The unique identifier of purse.</li><li${_scopeId}><code${_scopeId}>name</code> <span${_scopeId}>String</span>, The name of purse, user sent in create form/request.</li><li${_scopeId}><code${_scopeId}>currency</code> <span${_scopeId}>String</span>, The currency unit based on <a href="https://en.wikipedia.org/wiki/ISO_4217" target="_blank" rel="noreferrer"${_scopeId}>ISO 4217</a></li><li${_scopeId}><code${_scopeId}>note</code> <span${_scopeId}>String</span>, A note that user sent in create form/request.</li><li${_scopeId}><code${_scopeId}>status</code> <span${_scopeId}>Integer</span>, The status of purse, Check out <a href="#purse-status-table"${_scopeId}>Purse Status Table</a></li><li${_scopeId}><code${_scopeId}>number</code> <span${_scopeId}>Integer</span>, The unique generated number for purse.</li><li${_scopeId}><code${_scopeId}>color</code> <span${_scopeId}>String</span>, The color of purse, user sent in create form/request.</li><li${_scopeId}><code${_scopeId}>balance</code> <span${_scopeId}>Float</span>, The balance of purse.</li><li${_scopeId}><code${_scopeId}>freeze</code> <span${_scopeId}>Float</span>, The freeze of purse.</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("code", null, "uuid"),
              createTextVNode(),
              createVNode("span", null, "UUID V4"),
              createTextVNode(", The unique identifier of purse.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "name"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The name of purse, user sent in create form/request.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "currency"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The currency unit based on "),
              createVNode("a", {
                href: "https://en.wikipedia.org/wiki/ISO_4217",
                target: "_blank",
                rel: "noreferrer"
              }, "ISO 4217")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "note"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", A note that user sent in create form/request.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "status"),
              createTextVNode(),
              createVNode("span", null, "Integer"),
              createTextVNode(", The status of purse, Check out "),
              createVNode("a", { href: "#purse-status-table" }, "Purse Status Table")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "number"),
              createTextVNode(),
              createVNode("span", null, "Integer"),
              createTextVNode(", The unique generated number for purse.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "color"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The color of purse, user sent in create form/request.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "balance"),
              createTextVNode(),
              createVNode("span", null, "Float"),
              createTextVNode(", The balance of purse.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "freeze"),
              createTextVNode(),
              createVNode("span", null, "Float"),
              createTextVNode(", The freeze of purse.")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="transaction-status-table" tabindex="-1">Transaction Status Table <a class="header-anchor" href="#transaction-status-table" aria-hidden="true">#</a></h2><table><thead><tr><th>CODE</th><th>CONSTANT</th><th>DESCRIPTION</th></tr></thead><tbody><tr><td><code>11010</code></td><td><pre>purse_status_registered</pre></td><td>The purse has been registered and not activated yet.</td></tr><tr><td><code>11011</code></td><td><pre>purse_status_active</pre></td><td>The purse is active, full functionality state.</td></tr><tr><td><code>11012</code></td><td><pre>purse_status_hold</pre></td><td>The purse is temporary is inactive, it happen by fraud system.</td></tr><tr><td><code>11013</code></td><td><pre>purse_status_inactive</pre></td><td>The purse has been inactivated. In this state user can access read method.</td></tr><tr><td><code>11014</code></td><td><pre>purse_status_blocked</pre></td><td>The purse disabled, it happen by fraud and/or anti-money laundering and/or legal requests.</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/api/subscription.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const subscription = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  subscription as default
};
