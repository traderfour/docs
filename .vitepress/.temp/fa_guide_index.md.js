import { _ as _sfc_main$1 } from "./CodeGroupItem.a4859a71.js";
import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Getting Started","description":"","frontmatter":{"title":"Getting Started","sidebarDepth":1,"lastUpdated":true,"sitemap":{"priority":0.8}},"headers":[{"level":2,"title":"As a dev dependency use","slug":"as-a-dev-dependency-use","link":"#as-a-dev-dependency-use","children":[]},{"level":2,"title":"As global use","slug":"as-global-use","link":"#as-global-use","children":[]}],"relativePath":"fa/guide/index.md","lastUpdated":1676281064000}');
const _sfc_main = { name: "fa/guide/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeGroup = resolveComponent("CodeGroup");
  const _component_CodeGroupItem = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h1><h2 id="as-a-dev-dependency-use" tabindex="-1">As a dev dependency use <a class="header-anchor" href="#as-a-dev-dependency-use" aria-hidden="true">#</a></h2><blockquote><p>Just three simple steps:</p></blockquote><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><a href="#as-global-use">global installation</a> <code>commitizen</code>, that you can quickly use the <code>cz</code> or <code>git cz</code> command to start.</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#80A665" })}">npm</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">install</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}">-g</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">commitizen</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#59873A" })}">npm</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">install</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}">-g</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">commitizen</span></span>
<span class="line"></span></code></pre></div></div><h4 id="step-1-install-dependencies" tabindex="-1">Step 1: Install dependencies <a class="header-anchor" href="#step-1-install-dependencies" aria-hidden="true">#</a></h4>`);
  _push(ssrRenderComponent(_component_CodeGroup, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CodeGroupItem, { title: "NPM" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-sh"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>sh</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId2}>npm</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId2}>install</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId2}>-D</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId2}>cz-git</span></span>
<span class="line"${_scopeId2}></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId2}>npm</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId2}>install</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId2}>-D</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId2}>cz-git</span></span>
<span class="line"${_scopeId2}></span></code></pre></div>`);
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
                        createVNode("span", { style: { "color": "#80A665" } }, "npm"),
                        createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                        createVNode("span", { style: { "color": "#C98A7D" } }, "install"),
                        createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                        createVNode("span", { style: { "color": "#C99076" } }, "-D"),
                        createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                        createVNode("span", { style: { "color": "#C98A7D" } }, "cz-git")
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
                        createVNode("span", { style: { "color": "#59873A" } }, "npm"),
                        createVNode("span", { style: { "color": "#393A34" } }, " "),
                        createVNode("span", { style: { "color": "#B56959" } }, "install"),
                        createVNode("span", { style: { "color": "#393A34" } }, " "),
                        createVNode("span", { style: { "color": "#A65E2B" } }, "-D"),
                        createVNode("span", { style: { "color": "#393A34" } }, " "),
                        createVNode("span", { style: { "color": "#B56959" } }, "cz-git")
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
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_CodeGroupItem, { title: "YARN" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-sh"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>sh</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId2}>yarn</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId2}>add</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId2}>-D</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId2}>cz-git</span></span>
<span class="line"${_scopeId2}></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId2}>yarn</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId2}>add</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId2}>-D</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId2}>cz-git</span></span>
<span class="line"${_scopeId2}></span></code></pre></div>`);
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
                        createVNode("span", { style: { "color": "#80A665" } }, "yarn"),
                        createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                        createVNode("span", { style: { "color": "#C98A7D" } }, "add"),
                        createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                        createVNode("span", { style: { "color": "#C99076" } }, "-D"),
                        createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                        createVNode("span", { style: { "color": "#C98A7D" } }, "cz-git")
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
                        createVNode("span", { style: { "color": "#59873A" } }, "yarn"),
                        createVNode("span", { style: { "color": "#393A34" } }, " "),
                        createVNode("span", { style: { "color": "#B56959" } }, "add"),
                        createVNode("span", { style: { "color": "#393A34" } }, " "),
                        createVNode("span", { style: { "color": "#A65E2B" } }, "-D"),
                        createVNode("span", { style: { "color": "#393A34" } }, " "),
                        createVNode("span", { style: { "color": "#B56959" } }, "cz-git")
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
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_CodeGroupItem, { title: "PNPM" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-sh"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>sh</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId2}>pnpm</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId2}>install</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId2}>-D</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId2}>cz-git</span></span>
<span class="line"${_scopeId2}></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId2}>pnpm</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId2}>install</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId2}>-D</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId2}>cz-git</span></span>
<span class="line"${_scopeId2}></span></code></pre></div>`);
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
                        createVNode("span", { style: { "color": "#80A665" } }, "pnpm"),
                        createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                        createVNode("span", { style: { "color": "#C98A7D" } }, "install"),
                        createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                        createVNode("span", { style: { "color": "#C99076" } }, "-D"),
                        createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                        createVNode("span", { style: { "color": "#C98A7D" } }, "cz-git")
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
                        createVNode("span", { style: { "color": "#59873A" } }, "pnpm"),
                        createVNode("span", { style: { "color": "#393A34" } }, " "),
                        createVNode("span", { style: { "color": "#B56959" } }, "install"),
                        createVNode("span", { style: { "color": "#393A34" } }, " "),
                        createVNode("span", { style: { "color": "#A65E2B" } }, "-D"),
                        createVNode("span", { style: { "color": "#393A34" } }, " "),
                        createVNode("span", { style: { "color": "#B56959" } }, "cz-git")
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
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CodeGroupItem, { title: "NPM" }, {
            default: withCtx(() => [
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
                      createVNode("span", { style: { "color": "#80A665" } }, "npm"),
                      createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                      createVNode("span", { style: { "color": "#C98A7D" } }, "install"),
                      createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                      createVNode("span", { style: { "color": "#C99076" } }, "-D"),
                      createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                      createVNode("span", { style: { "color": "#C98A7D" } }, "cz-git")
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
                      createVNode("span", { style: { "color": "#59873A" } }, "npm"),
                      createVNode("span", { style: { "color": "#393A34" } }, " "),
                      createVNode("span", { style: { "color": "#B56959" } }, "install"),
                      createVNode("span", { style: { "color": "#393A34" } }, " "),
                      createVNode("span", { style: { "color": "#A65E2B" } }, "-D"),
                      createVNode("span", { style: { "color": "#393A34" } }, " "),
                      createVNode("span", { style: { "color": "#B56959" } }, "cz-git")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" })
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_CodeGroupItem, { title: "YARN" }, {
            default: withCtx(() => [
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
                      createVNode("span", { style: { "color": "#80A665" } }, "yarn"),
                      createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                      createVNode("span", { style: { "color": "#C98A7D" } }, "add"),
                      createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                      createVNode("span", { style: { "color": "#C99076" } }, "-D"),
                      createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                      createVNode("span", { style: { "color": "#C98A7D" } }, "cz-git")
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
                      createVNode("span", { style: { "color": "#59873A" } }, "yarn"),
                      createVNode("span", { style: { "color": "#393A34" } }, " "),
                      createVNode("span", { style: { "color": "#B56959" } }, "add"),
                      createVNode("span", { style: { "color": "#393A34" } }, " "),
                      createVNode("span", { style: { "color": "#A65E2B" } }, "-D"),
                      createVNode("span", { style: { "color": "#393A34" } }, " "),
                      createVNode("span", { style: { "color": "#B56959" } }, "cz-git")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" })
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_CodeGroupItem, { title: "PNPM" }, {
            default: withCtx(() => [
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
                      createVNode("span", { style: { "color": "#80A665" } }, "pnpm"),
                      createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                      createVNode("span", { style: { "color": "#C98A7D" } }, "install"),
                      createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                      createVNode("span", { style: { "color": "#C99076" } }, "-D"),
                      createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                      createVNode("span", { style: { "color": "#C98A7D" } }, "cz-git")
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
                      createVNode("span", { style: { "color": "#59873A" } }, "pnpm"),
                      createVNode("span", { style: { "color": "#393A34" } }, " "),
                      createVNode("span", { style: { "color": "#B56959" } }, "install"),
                      createVNode("span", { style: { "color": "#393A34" } }, " "),
                      createVNode("span", { style: { "color": "#A65E2B" } }, "-D"),
                      createVNode("span", { style: { "color": "#393A34" } }, " "),
                      createVNode("span", { style: { "color": "#B56959" } }, "cz-git")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" })
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h4 id="step-2-modify-package-json-to-add-config-specify-the-adapter-used" tabindex="-1">Step 2: Modify <code>package.json</code> to add <code>config</code> Specify the adapter used <a class="header-anchor" href="#step-2-modify-package-json-to-add-config-specify-the-adapter-used" aria-hidden="true">#</a></h4><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki vitesse-dark has-highlighted-lines vp-code-dark" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#666666" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">  </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B8A965" })}">scripts</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}">:</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#666666" })}">{</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">  </span><span style="${ssrRenderStyle({ "color": "#666666" })}">},</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">  </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B8A965" })}">config</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}">:</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#666666" })}">{</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">    </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B8A965" })}">commitizen</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}">:</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#666666" })}">{</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">      </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B8A965" })}">path</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}">:</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">node_modules/cz-git</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">    </span><span style="${ssrRenderStyle({ "color": "#666666" })}">}</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">  </span><span style="${ssrRenderStyle({ "color": "#666666" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#666666" })}">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#999999" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#393A34" })}">  </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#998418" })}">scripts</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">:</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#999999" })}">{</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#393A34" })}">  </span><span style="${ssrRenderStyle({ "color": "#999999" })}">},</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#393A34" })}">  </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#998418" })}">config</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">:</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#999999" })}">{</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#393A34" })}">    </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#998418" })}">commitizen</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">:</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#999999" })}">{</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#393A34" })}">      </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#998418" })}">path</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">:</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}">node_modules/cz-git</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#393A34" })}">    </span><span style="${ssrRenderStyle({ "color": "#999999" })}">}</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#393A34" })}">  </span><span style="${ssrRenderStyle({ "color": "#999999" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#999999" })}">}</span></span>
<span class="line"></span></code></pre></div><h4 id="step-3-add-custom-configuration-optional-use-default" tabindex="-1">Step 3: Add custom configuration (optional, use default) <a class="header-anchor" href="#step-3-add-custom-configuration-optional-use-default" aria-hidden="true">#</a></h4><blockquote><p>There are <mark>two</mark> configuration methods</p></blockquote><p><strong>Method 1: (recommended) cz-git is linked with <a href="https://github.com/conventional-changelog/commitlint" target="_blank" rel="noreferrer">commitlint</a> to provide verification information</strong>, so it can be written in <a href="https://github.com/conventional-changelog/commitlint#config" target="_blank" rel="noreferrer">commitlint</a> configuration file. <br> E.g: (<a href="/config/#configure-template">⇒ Configuration Template</a>)</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vitesse-dark has-highlighted-lines vp-code-dark" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#758575DD" })}">// .commitlintrc.js</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#758575DD" })}">/** </span><span style="${ssrRenderStyle({ "color": "#666666" })}">@</span><span style="${ssrRenderStyle({ "color": "#4D9375" })}">type</span><span style="${ssrRenderStyle({ "color": "#758575DD" })}"> </span><span style="${ssrRenderStyle({ "color": "#666666" })}">{</span><span style="${ssrRenderStyle({ "color": "#5DA9A7" })}">import(&#39;cz-git&#39;).UserConfig</span><span style="${ssrRenderStyle({ "color": "#666666" })}">}</span><span style="${ssrRenderStyle({ "color": "#758575DD" })}"> */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B8A965" })}">module</span><span style="${ssrRenderStyle({ "color": "#666666" })}">.</span><span style="${ssrRenderStyle({ "color": "#B8A965" })}">exports</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}">=</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#666666" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">  </span><span style="${ssrRenderStyle({ "color": "#B8A965" })}">rule</span><span style="${ssrRenderStyle({ "color": "#666666" })}">:</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#666666" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">    </span><span style="${ssrRenderStyle({ "color": "#666666" })}">...</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">  </span><span style="${ssrRenderStyle({ "color": "#666666" })}">},</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">  </span><span style="${ssrRenderStyle({ "color": "#B8A965" })}">prompt</span><span style="${ssrRenderStyle({ "color": "#666666" })}">:</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#666666" })}">{</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">    </span><span style="${ssrRenderStyle({ "color": "#B8A965" })}">useEmoji</span><span style="${ssrRenderStyle({ "color": "#666666" })}">:</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#4D9375" })}">true</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#666666" })}">    </span><span style="${ssrRenderStyle({ "color": "#758575DD" })}">//option...</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">  </span><span style="${ssrRenderStyle({ "color": "#666666" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#666666" })}">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#A0ADA0" })}">// .commitlintrc.js</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#A0ADA0" })}">/** </span><span style="${ssrRenderStyle({ "color": "#999999" })}">@</span><span style="${ssrRenderStyle({ "color": "#1E754F" })}">type</span><span style="${ssrRenderStyle({ "color": "#A0ADA0" })}"> </span><span style="${ssrRenderStyle({ "color": "#999999" })}">{</span><span style="${ssrRenderStyle({ "color": "#2E808F" })}">import(&#39;cz-git&#39;).UserConfig</span><span style="${ssrRenderStyle({ "color": "#999999" })}">}</span><span style="${ssrRenderStyle({ "color": "#A0ADA0" })}"> */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#998418" })}">module</span><span style="${ssrRenderStyle({ "color": "#999999" })}">.</span><span style="${ssrRenderStyle({ "color": "#998418" })}">exports</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}">=</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#999999" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#393A34" })}">  </span><span style="${ssrRenderStyle({ "color": "#998418" })}">rule</span><span style="${ssrRenderStyle({ "color": "#999999" })}">:</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#999999" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#393A34" })}">    </span><span style="${ssrRenderStyle({ "color": "#999999" })}">...</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#393A34" })}">  </span><span style="${ssrRenderStyle({ "color": "#999999" })}">},</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#393A34" })}">  </span><span style="${ssrRenderStyle({ "color": "#998418" })}">prompt</span><span style="${ssrRenderStyle({ "color": "#999999" })}">:</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#999999" })}">{</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#393A34" })}">    </span><span style="${ssrRenderStyle({ "color": "#998418" })}">useEmoji</span><span style="${ssrRenderStyle({ "color": "#999999" })}">:</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#1E754F" })}">true</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#999999" })}">    </span><span style="${ssrRenderStyle({ "color": "#A0ADA0" })}">//option...</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#393A34" })}">  </span><span style="${ssrRenderStyle({ "color": "#999999" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#999999" })}">}</span></span>
<span class="line"></span></code></pre></div><p><strong>Method 2:</strong> Add custom configuration under config.commitizen under <strong>package.json</strong>, <strong>but</strong> excessive configuration items will lead to bloated package.json, which is suitable for simple customization. E.g:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki vitesse-dark has-highlighted-lines vp-code-dark" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#666666" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">  </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B8A965" })}">scripts</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}">:</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#666666" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">    </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B8A965" })}">commit</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}">:</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">git cz</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">  </span><span style="${ssrRenderStyle({ "color": "#666666" })}">},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">  </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B8A965" })}">config</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}">:</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#666666" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">    </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B8A965" })}">commitizen</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}">:</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#666666" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">      </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B8A965" })}">path</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}">:</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">node_modules/cz-git</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}">,</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">      </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B8A965" })}">useEmoji</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}">:</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#4D9375" })}">true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">    </span><span style="${ssrRenderStyle({ "color": "#666666" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">  </span><span style="${ssrRenderStyle({ "color": "#666666" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#666666" })}">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#999999" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#393A34" })}">  </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#998418" })}">scripts</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">:</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#999999" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#393A34" })}">    </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#998418" })}">commit</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">:</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}">git cz</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#393A34" })}">  </span><span style="${ssrRenderStyle({ "color": "#999999" })}">},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#393A34" })}">  </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#998418" })}">config</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">:</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#999999" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#393A34" })}">    </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#998418" })}">commitizen</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">:</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#999999" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#393A34" })}">      </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#998418" })}">path</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">:</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}">node_modules/cz-git</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">,</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#393A34" })}">      </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#998418" })}">useEmoji</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">:</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#1E754F" })}">true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#393A34" })}">    </span><span style="${ssrRenderStyle({ "color": "#999999" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#393A34" })}">  </span><span style="${ssrRenderStyle({ "color": "#999999" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#999999" })}">}</span></span>
<span class="line"></span></code></pre></div><h2 id="as-global-use" tabindex="-1">As global use <a class="header-anchor" href="#as-global-use" aria-hidden="true">#</a></h2><blockquote><p>The advantage of global installation is that you can use <code>cz</code> or <code>git cz</code> command to start command line tools under any project to generate standardized commit messages</p></blockquote><p>Just three simple steps:</p><h4 id="step-1-install-global-dependencies" tabindex="-1">Step 1: Install global dependencies <a class="header-anchor" href="#step-1-install-global-dependencies" aria-hidden="true">#</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#80A665" })}">npm</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">install</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}">-g</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">cz-git</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">commitizen</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#59873A" })}">npm</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">install</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}">-g</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">cz-git</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">commitizen</span></span>
<span class="line"></span></code></pre></div><h4 id="step-2-global-configuration-adapter-type" tabindex="-1">Step 2: Global configuration adapter type <a class="header-anchor" href="#step-2-global-configuration-adapter-type" aria-hidden="true">#</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#B8A965" })}">echo</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">{ &quot;path&quot;: &quot;cz-git&quot; }</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">~/.czrc</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#998418" })}">echo</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}">{ &quot;path&quot;: &quot;cz-git&quot; }</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">~/.czrc</span></span>
<span class="line"></span></code></pre></div><h4 id="step-3-add-custom-configuration-optional-use-default-configuration" tabindex="-1">Step 3: Add custom configuration (optional, use default configuration) <a class="header-anchor" href="#step-3-add-custom-configuration-optional-use-default-configuration" aria-hidden="true">#</a></h4><blockquote><p>There are <mark>two</mark> configuration methods <br></p></blockquote><p><strong>Method 1:</strong> Edit the <code>~/.czrc</code> file to add configuration in the form of <strong>json</strong>, for example:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki vitesse-dark has-highlighted-lines vp-code-dark" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#666666" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">  </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B8A965" })}">path</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}">:</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">cz-git</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}">,</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">  </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B8A965" })}">useEmoji</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}">:</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#4D9375" })}">true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#666666" })}">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#999999" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#393A34" })}">  </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#998418" })}">path</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">:</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}">cz-git</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">,</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#393A34" })}">  </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#998418" })}">useEmoji</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">:</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#1E754F" })}">true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#999999" })}">}</span></span>
<span class="line"></span></code></pre></div><p><strong>Method 2: Cooperate with <a href="https://github.com/conventional-changelog/commitlint" target="_blank" rel="noreferrer">commitlint</a></strong> to create a configuration file under the path of <code>$HOME</code> <br>(<a href="/config/#configure-template">↓ Configuration Template</a>)</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fa/guide/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
