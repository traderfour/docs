import { _ as _sfc_main$1 } from "./CodeGroupItem.a4859a71.js";
import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[{"level":2,"title":"As global use","slug":"as-global-use","link":"#as-global-use","children":[]},{"level":2,"title":"As a dev dependency use","slug":"as-a-dev-dependency-use","link":"#as-a-dev-dependency-use","children":[]},{"level":2,"title":"As npx use","slug":"as-npx-use","link":"#as-npx-use","children":[]},{"level":2,"title":"As git hooks use","slug":"as-git-hooks-use","link":"#as-git-hooks-use","children":[]}],"relativePath":"en/sdks/install.md","lastUpdated":1676281064000}');
const _sfc_main = { name: "en/sdks/install.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CodeGroup = resolveComponent("CodeGroup");
  const _component_CodeGroupItem = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><h2 id="as-global-use" tabindex="-1">As global use <a class="header-anchor" href="#as-global-use" aria-hidden="true">#</a></h2><blockquote><p><mark>Recommend:</mark> Compared with the npm or npx startup method, Node.js can be started more directly once, that you to use the <code>czg</code> CLI in any project at a faster speed</p></blockquote>`);
  _push(ssrRenderComponent(_component_CodeGroup, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CodeGroupItem, { title: "NPM" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-sh"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>sh</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId2}>npm</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId2}>install</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId2}>-g</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId2}>czg</span></span>
<span class="line"${_scopeId2}></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId2}>npm</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId2}>install</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId2}>-g</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId2}>czg</span></span>
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
                        createVNode("span", { style: { "color": "#C99076" } }, "-g"),
                        createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                        createVNode("span", { style: { "color": "#C98A7D" } }, "czg")
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
                        createVNode("span", { style: { "color": "#A65E2B" } }, "-g"),
                        createVNode("span", { style: { "color": "#393A34" } }, " "),
                        createVNode("span", { style: { "color": "#B56959" } }, "czg")
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
        _push2(ssrRenderComponent(_component_CodeGroupItem, { title: "Homebrew" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-sh"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>sh</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId2}>brew</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId2}>install</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId2}>czg</span></span>
<span class="line"${_scopeId2}></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId2}>brew</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId2}>install</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId2}>czg</span></span>
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
                        createVNode("span", { style: { "color": "#80A665" } }, "brew"),
                        createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                        createVNode("span", { style: { "color": "#C98A7D" } }, "install"),
                        createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                        createVNode("span", { style: { "color": "#C98A7D" } }, "czg")
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
                        createVNode("span", { style: { "color": "#59873A" } }, "brew"),
                        createVNode("span", { style: { "color": "#393A34" } }, " "),
                        createVNode("span", { style: { "color": "#B56959" } }, "install"),
                        createVNode("span", { style: { "color": "#393A34" } }, " "),
                        createVNode("span", { style: { "color": "#B56959" } }, "czg")
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
                      createVNode("span", { style: { "color": "#C99076" } }, "-g"),
                      createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                      createVNode("span", { style: { "color": "#C98A7D" } }, "czg")
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
                      createVNode("span", { style: { "color": "#A65E2B" } }, "-g"),
                      createVNode("span", { style: { "color": "#393A34" } }, " "),
                      createVNode("span", { style: { "color": "#B56959" } }, "czg")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" })
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_CodeGroupItem, { title: "Homebrew" }, {
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
                      createVNode("span", { style: { "color": "#80A665" } }, "brew"),
                      createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                      createVNode("span", { style: { "color": "#C98A7D" } }, "install"),
                      createVNode("span", { style: { "color": "#DBD7CAEE" } }, " "),
                      createVNode("span", { style: { "color": "#C98A7D" } }, "czg")
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
                      createVNode("span", { style: { "color": "#59873A" } }, "brew"),
                      createVNode("span", { style: { "color": "#393A34" } }, " "),
                      createVNode("span", { style: { "color": "#B56959" } }, "install"),
                      createVNode("span", { style: { "color": "#393A34" } }, " "),
                      createVNode("span", { style: { "color": "#B56959" } }, "czg")
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
  _push(`<div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#758575DD" })}"># check the installation is successful</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#80A665" })}">czg</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}">--help</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#80A665" })}">git</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">czg</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}">-h</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#A0ADA0" })}"># check the installation is successful</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#59873A" })}">czg</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}">--help</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#59873A" })}">git</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">czg</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}">-h</span></span>
<span class="line"></span></code></pre></div><h2 id="as-a-dev-dependency-use" tabindex="-1">As a dev dependency use <a class="header-anchor" href="#as-a-dev-dependency-use" aria-hidden="true">#</a></h2>`);
  _push(ssrRenderComponent(_component_CodeGroup, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CodeGroupItem, { title: "NPM" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-sh"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>sh</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId2}>npm</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId2}>install</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId2}>-D</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId2}>czg</span></span>
<span class="line"${_scopeId2}></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId2}>npm</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId2}>install</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId2}>-D</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId2}>czg</span></span>
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
                        createVNode("span", { style: { "color": "#C98A7D" } }, "czg")
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
                        createVNode("span", { style: { "color": "#B56959" } }, "czg")
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
              _push3(`<div class="language-sh"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>sh</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId2}>yarn</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId2}>add</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId2}>-D</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId2}>czg</span></span>
<span class="line"${_scopeId2}></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId2}>yarn</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId2}>add</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId2}>-D</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId2}>czg</span></span>
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
                        createVNode("span", { style: { "color": "#C98A7D" } }, "czg")
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
                        createVNode("span", { style: { "color": "#B56959" } }, "czg")
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
              _push3(`<div class="language-sh"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>sh</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#80A665" })}"${_scopeId2}>pnpm</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId2}>install</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}"${_scopeId2}>-D</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"${_scopeId2}>czg</span></span>
<span class="line"${_scopeId2}></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#59873A" })}"${_scopeId2}>pnpm</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId2}>install</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}"${_scopeId2}>-D</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}"${_scopeId2}>czg</span></span>
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
                        createVNode("span", { style: { "color": "#C98A7D" } }, "czg")
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
                        createVNode("span", { style: { "color": "#B56959" } }, "czg")
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
                      createVNode("span", { style: { "color": "#C98A7D" } }, "czg")
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
                      createVNode("span", { style: { "color": "#B56959" } }, "czg")
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
                      createVNode("span", { style: { "color": "#C98A7D" } }, "czg")
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
                      createVNode("span", { style: { "color": "#B56959" } }, "czg")
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
                      createVNode("span", { style: { "color": "#C98A7D" } }, "czg")
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
                      createVNode("span", { style: { "color": "#B56959" } }, "czg")
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
  _push(`<p>Add script in package.json try it <code>npm cz</code></p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#666666" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">  </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B8A965" })}">scripts</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}">:</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#666666" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">    </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B8A965" })}">cz</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}">:</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">czg</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">  </span><span style="${ssrRenderStyle({ "color": "#666666" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#666666" })}">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#999999" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#393A34" })}">  </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#998418" })}">scripts</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">:</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#999999" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#393A34" })}">    </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#998418" })}">cz</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">:</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}">czg</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#393A34" })}">  </span><span style="${ssrRenderStyle({ "color": "#999999" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#999999" })}">}</span></span>
<span class="line"></span></code></pre></div><h2 id="as-npx-use" tabindex="-1">As <code>npx</code> use <a class="header-anchor" href="#as-npx-use" aria-hidden="true">#</a></h2><blockquote><p>You can start the CLI in different environments, but the startup speed will be slower than global install</p></blockquote><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#80A665" })}">npx</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">czg</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#59873A" })}">npx</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">czg</span></span>
<span class="line"></span></code></pre></div><h2 id="as-git-hooks-use" tabindex="-1">As git hooks use <a class="header-anchor" href="#as-git-hooks-use" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is not recommended</p><ul><li>Because it will <strong>change the original behavior of git commit</strong>, so that will lose fast commit methods such as <code>git commit -m &quot;xxx&quot;</code></li><li>And it will eventually open <code>vi</code> so that will lose the convenience of using the CLI</li></ul></div><p>Be that as it may czg still support, because it will constrain your team</p><p>e.g: husky(.husky/prepare-commit-msg)</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#758575DD" })}">#!/bin/sh</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B8A965" })}">.</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}">$(</span><span style="${ssrRenderStyle({ "color": "#80A665" })}">dirname</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">$0</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}">)</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">/_/husky.sh</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B8A965" })}">exec</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">/dev/tty</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#666666" })}">&amp;&amp;</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#80A665" })}">npx</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">czg</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}">--hook</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}">||</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#B8A965" })}">true</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#A0ADA0" })}">#!/bin/sh</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#998418" })}">.</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">$(</span><span style="${ssrRenderStyle({ "color": "#59873A" })}">dirname</span><span style="${ssrRenderStyle({ "color": "#B56959" })}"> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}">$0</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">)</span><span style="${ssrRenderStyle({ "color": "#B56959" })}">/_/husky.sh</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#998418" })}">exec</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">/dev/tty</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#999999" })}">&amp;&amp;</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#59873A" })}">npx</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">czg</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}">--hook</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}">||</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#998418" })}">true</span></span>
<span class="line"></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/sdks/install.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const install = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  install as default
};
