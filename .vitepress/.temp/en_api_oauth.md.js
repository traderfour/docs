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
const __pageData = JSON.parse('{"title":"Quick Start","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"en/api/oauth.md","lastUpdated":1676281064000}');
const _sfc_main = { name: "en/api/oauth.md" };
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
    method: "POST",
    endpoint: "/v1/oauth/sign"
  }, {
    code: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-bash"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>bash</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>$</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>curl</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>--request</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>POST</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>\\</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>https://api.trader4.net/v1/oauth/sign</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>\\</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>--u</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>id: hi@trader4.net</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>$</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>curl</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>--request</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>POST</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>\\</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>https://api.trader4.net/v1/oauth/sign</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>\\</span></span>
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
                  createVNode("span", { style: { "color": "#C98A7D" } }, "https://api.trader4.net/v1/oauth/sign"),
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
                  createVNode("span", { style: { "color": "#B56959" } }, "https://api.trader4.net/v1/oauth/sign"),
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
  _push(ssrRenderComponent(_component_Response, { jfile: "v1/oauth/sign" }, null, _parent));
  _push(ssrRenderComponent(_component_CodeBox, {
    lang: "Restful",
    method: "POST",
    endpoint: "/v1/oauth/verify"
  }, {
    code: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-bash"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>bash</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>$</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>curl</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>--request</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>POST</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>\\</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>https://api.trader4.net/v1/oauth/verify</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>\\</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>--u</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>id: hi@trader4.net</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>\\</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>--u</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>code: 123456</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>$</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>curl</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>--request</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>POST</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>\\</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>https://api.trader4.net/v1/oauth/verify</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>\\</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>--u</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>id: hi@trader4.net</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>\\</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>--u</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>code: 123456</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&#39;</span></span>
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
                  createVNode("span", { style: { "color": "#C98A7D" } }, "https://api.trader4.net/v1/oauth/verify"),
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
                  createVNode("span", { style: { "color": "#C98A7D99" } }, "'"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C99076" } }, "\\")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "  "),
                  createVNode("span", { style: { "color": "#C99076" } }, "--u"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, "'"),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "code: 123456"),
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
                  createVNode("span", { style: { "color": "#B56959" } }, "https://api.trader4.net/v1/oauth/verify"),
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
                  createVNode("span", { style: { "color": "#B5695999" } }, "'"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#A65E2B" } }, "\\")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "  "),
                  createVNode("span", { style: { "color": "#A65E2B" } }, "--u"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B5695999" } }, "'"),
                  createVNode("span", { style: { "color": "#B56959" } }, "code: 123456"),
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
        _push2(`<h1 id="verify" tabindex="-1"${_scopeId}>Verify <a class="header-anchor" href="#verify" aria-hidden="true"${_scopeId}>#</a></h1><p${_scopeId}>Usgin our Verify Method, users are now able to easily verify the One-Time Password (OTP) for added security. This powerful feature provides an extra layer of safety when it comes to your data security. With this added security, you can rest assured that your data is kept safe and secure.</p><p${_scopeId}><code${_scopeId}>id</code> <sup${_scopeId}><sub${_scopeId}>String</sub></sup>, The identity of user account, That requested in sign method.</p><p${_scopeId}><code${_scopeId}>code</code> <sup${_scopeId}><sub${_scopeId}>String</sub></sup>, The OTP(One Time Password) that has been send to user ID.</p>`);
      } else {
        return [
          createVNode("h1", {
            id: "verify",
            tabindex: "-1"
          }, [
            createTextVNode("Verify "),
            createVNode("a", {
              class: "header-anchor",
              href: "#verify",
              "aria-hidden": "true"
            }, "#")
          ]),
          createVNode("p", null, "Usgin our Verify Method, users are now able to easily verify the One-Time Password (OTP) for added security. This powerful feature provides an extra layer of safety when it comes to your data security. With this added security, you can rest assured that your data is kept safe and secure."),
          createVNode("p", null, [
            createVNode("code", null, "id"),
            createTextVNode(),
            createVNode("sup", null, [
              createVNode("sub", null, "String")
            ]),
            createTextVNode(", The identity of user account, That requested in sign method.")
          ]),
          createVNode("p", null, [
            createVNode("code", null, "code"),
            createTextVNode(),
            createVNode("sup", null, [
              createVNode("sub", null, "String")
            ]),
            createTextVNode(", The OTP(One Time Password) that has been send to user ID.")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Response, { jfile: "v1/oauth/verify" }, {
    result: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><code${_scopeId}>first_name</code> <span${_scopeId}>String</span>, The first name of user.</li><li${_scopeId}><code${_scopeId}>middle_name</code> <span${_scopeId}>String</span>, The middle name of user.</li><li${_scopeId}><code${_scopeId}>last_name</code> <span${_scopeId}>String</span>, The last name of user.</li><li${_scopeId}><code${_scopeId}>email</code> <span${_scopeId}>String</span>, The email address of user.</li><li${_scopeId}><code${_scopeId}>mobile</code> <span${_scopeId}>String</span>, The mobile number of user.</li><li${_scopeId}><code${_scopeId}>phone_number</code> <span${_scopeId}>String</span>, The phone number of user.</li><li${_scopeId}><code${_scopeId}>country</code> <span${_scopeId}>String</span>, The country that user registered.</li><li${_scopeId}><code${_scopeId}>language</code> <span${_scopeId}>String</span>, The language that user selected.</li><li${_scopeId}><code${_scopeId}>timezone</code> <span${_scopeId}>String</span>, The timezone that user selected.</li><li${_scopeId}><code${_scopeId}>last_connection</code> <span${_scopeId}>Datetime</span>, The last time that user connected to our system.</li><li${_scopeId}><code${_scopeId}>private</code> <span${_scopeId}>Boolean</span>, The privacy of user profile.</li><li${_scopeId}><code${_scopeId}>avatar</code> <span${_scopeId}>String</span>, The URL of user avatar.</li><li${_scopeId}><code${_scopeId}>status</code> <span${_scopeId}>Integer</span>, The status of user account. Check out <a href="https://docs.trader4.net/en/api/account/#account-status-table" target="_blank" rel="noreferrer"${_scopeId}>Account Status Table</a>.</li><li${_scopeId}><code${_scopeId}>access_token</code> <span${_scopeId}>String</span>, The access token of user.</li><li${_scopeId}><code${_scopeId}>token_type</code> <span${_scopeId}>String</span>, The type of access token.</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("code", null, "first_name"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The first name of user.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "middle_name"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The middle name of user.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "last_name"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The last name of user.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "email"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The email address of user.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "mobile"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The mobile number of user.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "phone_number"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The phone number of user.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "country"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The country that user registered.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "language"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The language that user selected.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "timezone"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The timezone that user selected.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "last_connection"),
              createTextVNode(),
              createVNode("span", null, "Datetime"),
              createTextVNode(", The last time that user connected to our system.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "private"),
              createTextVNode(),
              createVNode("span", null, "Boolean"),
              createTextVNode(", The privacy of user profile.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "avatar"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The URL of user avatar.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "status"),
              createTextVNode(),
              createVNode("span", null, "Integer"),
              createTextVNode(", The status of user account. Check out "),
              createVNode("a", {
                href: "https://docs.trader4.net/en/api/account/#account-status-table",
                target: "_blank",
                rel: "noreferrer"
              }, "Account Status Table"),
              createTextVNode(".")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "access_token"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The access token of user.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "token_type"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The type of access token.")
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
    endpoint: "/v1/oauth/qr"
  }, {
    code: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-bash"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>bash</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>$</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>curl</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>--request</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>GET</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>\\</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>https://api.trader4.net/v1/oauth/qr</span></span>
<span class="line"${_scopeId}></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>$</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>curl</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>--request</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>GET</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>\\</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>https://api.trader4.net/v1/oauth/qr</span></span>
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
                  createVNode("span", { style: { "color": "#C98A7D" } }, "GET"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C99076" } }, "\\")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "  "),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "https://api.trader4.net/v1/oauth/qr")
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
                  createVNode("span", { style: { "color": "#B56959" } }, "GET"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#A65E2B" } }, "\\")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "  "),
                  createVNode("span", { style: { "color": "#B56959" } }, "https://api.trader4.net/v1/oauth/qr")
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
        _push2(`<h1 id="qr-code-token" tabindex="-1"${_scopeId}>QR Code Token <a class="header-anchor" href="#qr-code-token" aria-hidden="true"${_scopeId}>#</a></h1><p${_scopeId}>Using our QR Code Token Method, users are now able to easily request an QR Code Token for added security.</p>`);
      } else {
        return [
          createVNode("h1", {
            id: "qr-code-token",
            tabindex: "-1"
          }, [
            createTextVNode("QR Code Token "),
            createVNode("a", {
              class: "header-anchor",
              href: "#qr-code-token",
              "aria-hidden": "true"
            }, "#")
          ]),
          createVNode("p", null, "Using our QR Code Token Method, users are now able to easily request an QR Code Token for added security.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Response, { jfile: "v1/oauth/qr" }, {
    result: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><code${_scopeId}>token</code> <span${_scopeId}>String</span>, The QR temporary token generated by our system.</li><li${_scopeId}><code${_scopeId}>expired_at</code> <span${_scopeId}>Datetime</span>, The date and time that token will be expired.</li><li${_scopeId}><code${_scopeId}>url</code> <span${_scopeId}>String</span>, The URL of QR Code image.</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("code", null, "token"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The QR temporary token generated by our system.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "expired_at"),
              createTextVNode(),
              createVNode("span", null, "Datetime"),
              createTextVNode(", The date and time that token will be expired.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "url"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The URL of QR Code image.")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="tip custom-block"><p class="custom-block-title">QR Code Image Download</p><p>Add <code>?dl</code> to url parameter to response of server will be a QR Code image file download. For example:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#80A665" })}">https://api.trader4.net/v1/oauth/qr/tr44670677563e9edb832e43?dl</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#59873A" })}">https://api.trader4.net/v1/oauth/qr/tr44670677563e9edb832e43?dl</span></span>
<span class="line"></span></code></pre></div></div>`);
  _push(ssrRenderComponent(_component_CodeBox, {
    lang: "Restful",
    method: "POST",
    endpoint: "/v1/oauth/qr"
  }, {
    code: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-bash"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>bash</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>$</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>curl</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>--request</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>POST</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>\\</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>https://api.trader4.net/v1/oauth/qr/authorize</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>\\</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>-u</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>token: tr44670677563e9edb832e43</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>$</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>curl</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>--request</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>POST</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>\\</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>https://api.trader4.net/v1/oauth/qr/authorize</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>\\</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>-u</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>token: tr44670677563e9edb832e43</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&#39;</span></span>
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
                  createVNode("span", { style: { "color": "#C98A7D" } }, "https://api.trader4.net/v1/oauth/qr/authorize"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C99076" } }, "\\")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "  "),
                  createVNode("span", { style: { "color": "#C99076" } }, "-u"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, "'"),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "token: tr44670677563e9edb832e43"),
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
                  createVNode("span", { style: { "color": "#B56959" } }, "https://api.trader4.net/v1/oauth/qr/authorize"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#A65E2B" } }, "\\")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "  "),
                  createVNode("span", { style: { "color": "#A65E2B" } }, "-u"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B5695999" } }, "'"),
                  createVNode("span", { style: { "color": "#B56959" } }, "token: tr44670677563e9edb832e43"),
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
        _push2(`<h1 id="qr-code-verify" tabindex="-1"${_scopeId}>QR Code Verify <a class="header-anchor" href="#qr-code-verify" aria-hidden="true"${_scopeId}>#</a></h1><p${_scopeId}>Using our QR Code Verify Method, users are now able to easily verify the QR Code Token for added security. This powerful feature provides an extra layer of safety when it comes to your data security. With this added security, you can rest assured that your data is kept safe and secure.</p><span class="text-xs"${_scopeId}><p${_scopeId}><code${_scopeId}>Authorization</code> <sup${_scopeId}><sub${_scopeId}>String</sub></sup>, Access token that received in <a href="https://docs.azpays.com/oauth/#verify" target="_blank" rel="noreferrer"${_scopeId}><em${_scopeId}>/oauth/verify</em></a> method.</p></span>`);
      } else {
        return [
          createVNode("h1", {
            id: "qr-code-verify",
            tabindex: "-1"
          }, [
            createTextVNode("QR Code Verify "),
            createVNode("a", {
              class: "header-anchor",
              href: "#qr-code-verify",
              "aria-hidden": "true"
            }, "#")
          ]),
          createVNode("p", null, "Using our QR Code Verify Method, users are now able to easily verify the QR Code Token for added security. This powerful feature provides an extra layer of safety when it comes to your data security. With this added security, you can rest assured that your data is kept safe and secure."),
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
  _push(ssrRenderComponent(_component_Response, { jfile: "v1/oauth/qr/authorize" }, null, _parent));
  _push(ssrRenderComponent(_component_CodeBox, {
    lang: "Restful",
    method: "POST",
    endpoint: "/v1/oauth/qr"
  }, {
    code: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-bash"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>bash</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId}>$</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>curl</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>--request</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>POST</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>\\</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>https://api.trader4.net/v1/oauth/qr</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>\\</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId}>-u</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId}>token: tr44670677563e9edb832e43</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId}>$</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>curl</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>--request</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>POST</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>\\</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>https://api.trader4.net/v1/oauth/qr</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>\\</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId}>-u</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId}>token: tr44670677563e9edb832e43</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}"${_scopeId}>&#39;</span></span>
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
                  createVNode("span", { style: { "color": "#C98A7D" } }, "https://api.trader4.net/v1/oauth/qr"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C99076" } }, "\\")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, "  "),
                  createVNode("span", { style: { "color": "#C99076" } }, "-u"),
                  createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                  createVNode("span", { style: { "color": "#C98A7D99" } }, "'"),
                  createVNode("span", { style: { "color": "#C98A7D" } }, "token: tr44670677563e9edb832e43"),
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
                  createVNode("span", { style: { "color": "#B56959" } }, "https://api.trader4.net/v1/oauth/qr"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#A65E2B" } }, "\\")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#393A34" } }, "  "),
                  createVNode("span", { style: { "color": "#A65E2B" } }, "-u"),
                  createVNode("span", { style: { "color": "#393A34" } }, " "),
                  createVNode("span", { style: { "color": "#B5695999" } }, "'"),
                  createVNode("span", { style: { "color": "#B56959" } }, "token: tr44670677563e9edb832e43"),
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
        _push2(`<h1 id="qr-code-check" tabindex="-1"${_scopeId}>QR Code Check <a class="header-anchor" href="#qr-code-check" aria-hidden="true"${_scopeId}>#</a></h1><p${_scopeId}>Using our QR Code Check Method, users are now able to easily check the QR Code Token for token has been authorized or not.</p>`);
      } else {
        return [
          createVNode("h1", {
            id: "qr-code-check",
            tabindex: "-1"
          }, [
            createTextVNode("QR Code Check "),
            createVNode("a", {
              class: "header-anchor",
              href: "#qr-code-check",
              "aria-hidden": "true"
            }, "#")
          ]),
          createVNode("p", null, "Using our QR Code Check Method, users are now able to easily check the QR Code Token for token has been authorized or not.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Response, { jfile: "v1/oauth/qr-post" }, {
    result: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul${_scopeId}><li${_scopeId}><code${_scopeId}>first_name</code> <span${_scopeId}>String</span>, The first name of user.</li><li${_scopeId}><code${_scopeId}>middle_name</code> <span${_scopeId}>String</span>, The middle name of user.</li><li${_scopeId}><code${_scopeId}>last_name</code> <span${_scopeId}>String</span>, The last name of user.</li><li${_scopeId}><code${_scopeId}>email</code> <span${_scopeId}>String</span>, The email address of user.</li><li${_scopeId}><code${_scopeId}>mobile</code> <span${_scopeId}>String</span>, The mobile number of user.</li><li${_scopeId}><code${_scopeId}>phone_number</code> <span${_scopeId}>String</span>, The phone number of user.</li><li${_scopeId}><code${_scopeId}>country</code> <span${_scopeId}>String</span>, The country that user registered.</li><li${_scopeId}><code${_scopeId}>language</code> <span${_scopeId}>String</span>, The language that user selected.</li><li${_scopeId}><code${_scopeId}>timezone</code> <span${_scopeId}>String</span>, The timezone that user selected.</li><li${_scopeId}><code${_scopeId}>last_connection</code> <span${_scopeId}>Datetime</span>, The last time that user connected to our system.</li><li${_scopeId}><code${_scopeId}>private</code> <span${_scopeId}>Boolean</span>, The privacy of user profile.</li><li${_scopeId}><code${_scopeId}>avatar</code> <span${_scopeId}>String</span>, The URL of user avatar.</li><li${_scopeId}><code${_scopeId}>status</code> <span${_scopeId}>Integer</span>, The status of user account. Check out <a href="https://docs.trader4.net/en/api/account/#account-status-table" target="_blank" rel="noreferrer"${_scopeId}>Account Status Table</a>.</li><li${_scopeId}><code${_scopeId}>access_token</code> <span${_scopeId}>String</span>, The access token of user.</li><li${_scopeId}><code${_scopeId}>token_type</code> <span${_scopeId}>String</span>, The type of access token.</li></ul>`);
      } else {
        return [
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("code", null, "first_name"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The first name of user.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "middle_name"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The middle name of user.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "last_name"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The last name of user.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "email"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The email address of user.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "mobile"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The mobile number of user.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "phone_number"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The phone number of user.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "country"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The country that user registered.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "language"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The language that user selected.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "timezone"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The timezone that user selected.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "last_connection"),
              createTextVNode(),
              createVNode("span", null, "Datetime"),
              createTextVNode(", The last time that user connected to our system.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "private"),
              createTextVNode(),
              createVNode("span", null, "Boolean"),
              createTextVNode(", The privacy of user profile.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "avatar"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The URL of user avatar.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "status"),
              createTextVNode(),
              createVNode("span", null, "Integer"),
              createTextVNode(", The status of user account. Check out "),
              createVNode("a", {
                href: "https://docs.trader4.net/en/api/account/#account-status-table",
                target: "_blank",
                rel: "noreferrer"
              }, "Account Status Table"),
              createTextVNode(".")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "access_token"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The access token of user.")
            ]),
            createVNode("li", null, [
              createVNode("code", null, "token_type"),
              createTextVNode(),
              createVNode("span", null, "String"),
              createTextVNode(", The type of access token.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/api/oauth.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const oauth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  oauth as default
};
