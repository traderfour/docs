import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Trader4 Docs","titleTemplate":"More engineered, lightweight, customizable, standard output format commitizen adapter","description":"","frontmatter":{"layout":"home","sidebar":false,"title":"Trader4 Docs","titleTemplate":"More engineered, lightweight, customizable, standard output format commitizen adapter","hero":{"name":"Trader4 Docs","text":"","tagline":"More engineered, lightweight, customizable, standard output format Commitizen adapter and API.","image":{"src":"/images/logo.png","alt":"Trader4 Docs"},"actions":[{"theme":"brand","text":"Get Started →","link":"/fa/guide/"},{"theme":"alt","text":"Introduction","link":"/fa/guide/"},{"theme":"alt","text":"Why Trader4 Docs?","link":"/fa/guide/"},{"theme":"alt","text":"API","link":"/fa/api/"}]},"czFeatures":[{"title":"Friendly First","details":"Friendly command line tool, Supports search and selection on the command line, reducing spelling errors.To be a lazy man."},{"title":"Highly Customizable","details":"Enjoy the customization process to make the tool more in line with your or team habits."},{"title":"Engineering Support","details":"Reduce repetitive typing. Better for engineering repo(e.g:monorepo) or business system. Easy link with issue."},{"title":"With Commitlint","details":"Dynamically get commitlint configuration and give command line prompts."}],"pkgFeatureTitle":"Lightweight","emojiFeature":{"title":"Emoji Support","details":"Support emoji in commit message."}},"headers":[],"relativePath":"fa/index.md","lastUpdated":1676281064000}');
const _sfc_main = { name: "fa/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("fa/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
