import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Why cz-git","description":"","frontmatter":{"title":"Why cz-git","sidebarDepth":1,"lastUpdated":true,"sitemap":{"priority":0.6}},"headers":[],"relativePath":"en/guide/why.md","lastUpdated":1676281064000}');
const _sfc_main = { name: "en/guide/why.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="why-cz-git" tabindex="-1">Why cz-git <a class="header-anchor" href="#why-cz-git" aria-hidden="true">#</a></h1><br><p>Why developed <code>cz-git</code> - article: <a href="https://www.qbb.sh/posts/2022-12-26-cz-git-czg-journey" target="_blank" rel="noreferrer">「cz-git development journey」</a></p><hr><ul><li><a href="https://github.com/leoforfree/cz-customizable" target="_blank" rel="noreferrer"><strong>cz-customizable</strong></a> : <ol><li>Adding additional configuration files are needed.</li><li>Only supports the upper and lower choices.</li><li>There are fewer supportable habitual configuration items.</li></ol></li></ul><hr><ul><li><a href="https://github.com/commitizen/cz-conventional-changelog" target="_blank" rel="noreferrer"><strong>cz-conventional-changelog</strong></a> : <ol><li>Supported custom configuration items are less.</li><li>Interactive method is no friendly.</li><li>Too many repetitive input.</li></ol></li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark has-highlighted-lines vp-code-dark" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#80A665" })}">$</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">npm</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">install</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}">-D</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">cz-conventional-changelog</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#80A665" })}">added</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#4C9A91" })}">147</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">packages</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">in</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">21s</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#80A665" })}">$</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">npm</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">install</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}">-D</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">cz-git</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#80A665" })}">added</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#4C9A91" })}">1</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">package</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">in</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">0.482s</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#59873A" })}">$</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">npm</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">install</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}">-D</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">cz-conventional-changelog</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#59873A" })}">added</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#2F798A" })}">147</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">packages</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">in</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">21s</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#59873A" })}">$</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">npm</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">install</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}">-D</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">cz-git</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#59873A" })}">added</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#2F798A" })}">1</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">package</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">in</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">0.482s</span></span>
<span class="line"></span></code></pre></div><hr><ul><li><a href="https://github.com/streamich/git-cz" target="_blank" rel="noreferrer"><strong>git-cz</strong></a> : <ol><li>Supported custom configuration items are less.</li><li>Adding additional configuration files are needed.</li></ol></li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki vitesse-dark has-highlighted-lines vp-code-dark" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#80A665" })}">$</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">du</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C99076" })}">-sh</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">node_modules/</span><span style="${ssrRenderStyle({ "color": "#C99076" })}">*</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#4C9A91" })}">148</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> MB	node_modules/git-cz</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#4C9A91" })}">1.6</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> MB	node_modules/cz-git</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light has-highlighted-lines vp-code-light" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#59873A" })}">$</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">du</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}">-sh</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B56959" })}">node_modules/</span><span style="${ssrRenderStyle({ "color": "#A65E2B" })}">*</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#2F798A" })}">148</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> MB	node_modules/git-cz</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#2F798A" })}">1.6</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> MB	node_modules/cz-git</span></span>
<span class="line"></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/why.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const why = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  why as default
};
