import { shallowRef, inject, computed, ref, reactive, markRaw, readonly, nextTick, defineComponent, onUpdated, h } from "vue";
const siteData = JSON.parse('{"lang":"en-US","dir":"ltr","title":"Trader4 Docs","description":"A VitePress site","base":"/","head":[],"appearance":"dark","themeConfig":{"logo":{"src":"/images/logo.png","alt":"Trader4 Docs-logo"},"socialLinks":[{"icon":"github","link":"https://github.com/Zhengqbbb/cz-git"}]},"locales":{"en":{"label":"English","lang":"en-US","description":"More engineered, lightweight, customizable, standard output format commitizen adapter and API.","themeConfig":{"nav":[{"text":"Guide","link":"/en/guide/","activeMatch":"/guide/"},{"text":"Config","link":"/en/guide/","activeMatch":"/guide/"},{"text":"Recipes","link":"/en/guide/","activeMatch":"/guide/"},{"text":"API","link":"/en/api/","activeMatch":"/en/api/"},{"text":"v1","items":[{"text":"Changelog","link":"https://github.com/Zhengqbbb/cz-git/blob/main/CHANGELOG.md"},{"text":"NPM","link":"https://www.npmjs.com/package/cz-git"},{"text":"Playground","link":"https://github.com/Zhengqbbb/czgit-playground"},{"text":"FAQ","link":"/en/faq/"}]}],"sidebar":{"/":[{"text":"Products","collapsible":true,"collapsed":true,"link":"/en/products/","items":[{"text":"📊 Supply and Demand","link":"/en/products/supply-demand"},{"text":"📐 Trend Line","link":"/en/products/trend-line"},{"text":"🎛️ Algo Portfolio","link":"/en/products/algo-portfolio"},{"text":"👧 Algo Mirzakhani","link":"/en/products/mirzakhani"},{"text":"👨‍🎨 Algo Pishro","link":"/en/products/pishro"},{"text":"👴 Algo Bob","link":"/en/products/bob"},{"text":"🤵 Algo Darren","link":"/en/products/darren"},{"text":"👨‍💻 Jadi <small>(License System)</small>","link":"/en/products/jadi"},{"text":"👨‍🔬 Algo Dispenza","link":"/en/products/dispenza"},{"text":"👨‍🔬 Samii <small>(Trading Framework)</small>","link":"/en/products/samii"},{"text":"🎮 Algo MiaLand","link":"/en/products/mialand"},{"text":"🏝️ KuroshTopia <small>(TradeHub)</small>","link":"/en/products/jadi"},{"text":"Bazaar","link":"/en/products/bazaar"},{"text":"Pythia","link":"/en/products/pythia"},{"text":"💚 Yaseen","link":"/en/products/yaseen"},{"text":"💀 Azrael","link":"/en/products/azrael"},{"text":"Siddhartha","link":"/en/products/siddhartha"},{"text":"🕉️ Shiva","link":"/en/products/shiva"}]},{"text":"SDKs","collapsible":true,"collapsed":true,"link":"/en/sdks/","items":[{"text":"Samii (Trading Framework)","link":"/en/skds/samii/intro"},{"text":"Trading Bot","link":"/en/skds/trading-bot/intro"},{"text":"Trading Terminal","link":"/en/skds/trading-terminal/intro"},{"text":"Trading API","link":"/en/skds/trading-api/intro"},{"text":"Trading SDK","link":"/en/skds/trading-sdk/intro"},{"text":"Trading Library","link":"/en/skds/trading-library/intro"},{"text":"Trading Platform","link":"/en/skds/trading-platform/intro"},{"text":"Trading Tools","link":"/en/skds/trading-tools/intro"}]},{"text":"Rest APIs","collapsible":true,"collapsed":true,"link":"/en/api/","items":[{"text":"oAuth","link":"/en/api/oauth"},{"text":"User","link":"/en/api/user"},{"text":"Finance","link":"/en/api/trader4/finance"},{"text":"Marketplace","link":"/en/api/trader4/marketplace"},{"text":"Cloud","link":"/en/api/trader4/cloud"},{"text":"Bazaar (Social Trading)","link":"/en/api/trader4/bazaar"},{"text":"Financial Engineering","link":"/en/api/trader4/financial-engineering"},{"text":"Capital Road (Funded)","link":"/en/api/trader4/capital-road"}]}]},"docFooter":{"prev":"Previous page","next":"Next page"},"returnToTopLabel":"Return to top","outlineTitle":"On this page","darkModeSwitchLabel":"Appearance","sidebarMenuLabel":"Menu","lastUpdatedText":"Last updated","editLink":{"pattern":"https://github.com/Zhengqbbb/cz-git/edit/main/docs/:path","text":"Suggest changes to this page"},"footer":{"message":"I just try my best to make thing well, Could you give a <a c-orange-5 target=\\"_blank\\" href=\\"https://github.com/Zhengqbbb/cz-git\\">star ⭐</a>","copyright":"MIT Licensed | Copyright © 2022-present <a target=\\"_blank\\" href=\\"https://github.com/Zhengqbbb\\">Zhengqbbb</a>"}},"head":[["meta",{"name":"twitter:description","content":"More engineered, lightweight, customizable, standard output format commitizen adapter and API."}],["meta",{"name":"twitter:image","content":"https://cz-git.qbb.sh/images/og.png"}],["meta",{"property":"og:description","content":"More engineered, lightweight, customizable, standard output format commitizen adapter and API."}],["meta",{"property":"og:url","content":"https://cz-git.qbb.sh"}],["meta",{"property":"og:locale","content":"en_US"}],["meta",{"property":"og:image","content":"https://cz-git.qbb.sh/images/og.png"}]]},"fa":{"label":"فارسی","lang":"fa-IR","description":"More engineered, lightweight, customizable, standard output format commitizen adapter and API.","dir":"rtl","themeConfig":{"nav":[{"text":"Guide","link":"/en/guide/","activeMatch":"/guide/"},{"text":"Config","link":"/en/guide/","activeMatch":"/guide/"},{"text":"Recipes","link":"/en/guide/","activeMatch":"/guide/"},{"text":"API","link":"/en/api/","activeMatch":"/en/api/"},{"text":"v1","items":[{"text":"Changelog","link":"https://github.com/Zhengqbbb/cz-git/blob/main/CHANGELOG.md"},{"text":"NPM","link":"https://www.npmjs.com/package/cz-git"},{"text":"Playground","link":"https://github.com/Zhengqbbb/czgit-playground"},{"text":"FAQ","link":"/en/faq/"}]}],"sidebar":{"/fa/api/":[{"text":"Guide","collapsible":true,"collapsed":false,"items":[{"text":"Introduction","link":"/fa/api/"},{"text":"Getting Started","link":"/fa/api/install"}]},{"text":"Sample API","collapsible":true,"collapsed":false,"items":[{"text":"Sample With Markdown","link":"/fa/api/sample-api"},{"text":"Sample With HTML","link":"/fa/api/sample-api-html"}]}],"/":[{"text":"Products","collapsible":true,"collapsed":false,"items":[{"text":"Supply and Demand","link":"/fa/products/supply-demand"}]}]},"docFooter":{"prev":"صفحه قبل","next":"صفحه بعد"},"returnToTopLabel":"برگشت به بالا","outlineTitle":"در همین صفحه","darkModeSwitchLabel":"Appearance","sidebarMenuLabel":"Menu","lastUpdatedText":"Last updated","editLink":{"pattern":"https://github.com/Zhengqbbb/cz-git/edit/main/docs/:path","text":"Suggest changes to this page"},"footer":{"message":"I just try my best to make thing well, Could you give a <a c-orange-5 target=\\"_blank\\" href=\\"https://github.com/Zhengqbbb/cz-git\\">star ⭐</a>","copyright":"MIT Licensed | Copyright © 2022-present <a target=\\"_blank\\" href=\\"https://github.com/Zhengqbbb\\">Zhengqbbb</a>"}},"head":[["meta",{"name":"twitter:description","content":"More engineered, lightweight, customizable, standard output format commitizen adapter and API."}],["meta",{"name":"twitter:image","content":"https://cz-git.qbb.sh/images/og.png"}],["meta",{"property":"og:description","content":"More engineered, lightweight, customizable, standard output format commitizen adapter and API."}],["meta",{"property":"og:url","content":"https://cz-git.qbb.sh"}],["meta",{"property":"og:locale","content":"en_US"}],["meta",{"property":"og:image","content":"https://cz-git.qbb.sh/images/og.png"}]]}},"scrollOffset":90,"cleanUrls":true}');
const EXTERNAL_URL_RE = /^[a-z]+:/i;
const PATHNAME_PROTOCOL_RE = /^pathname:\/\//;
const APPEARANCE_KEY = "vitepress-theme-appearance";
const HASH_RE = /#.*$/;
const EXT_RE = /(index)?\.(md|html)$/;
const inBrowser = typeof document !== "undefined";
const notFoundPageData = {
  relativePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: { sidebar: false, layout: "page" },
  lastUpdated: 0
};
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  }
  if (normalize(matchPath) !== currentPath) {
    return false;
  }
  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch) {
    return (inBrowser ? location.hash : "") === hashMatch[0];
  }
  return true;
}
function normalize(path) {
  return decodeURI(path).replace(HASH_RE, "").replace(EXT_RE, "");
}
function isExternal(path) {
  return EXTERNAL_URL_RE.test(path);
}
function resolveSiteDataByRoute(siteData2, relativePath) {
  var _a, _b, _c, _d, _e, _f, _g;
  const localeIndex = Object.keys(siteData2.locales).find((key) => key !== "root" && !isExternal(key) && isActive(relativePath, `/${key}/`, true)) || "root";
  return Object.assign({}, siteData2, {
    localeIndex,
    lang: ((_a = siteData2.locales[localeIndex]) == null ? void 0 : _a.lang) ?? siteData2.lang,
    dir: ((_b = siteData2.locales[localeIndex]) == null ? void 0 : _b.dir) ?? siteData2.dir,
    title: ((_c = siteData2.locales[localeIndex]) == null ? void 0 : _c.title) ?? siteData2.title,
    titleTemplate: ((_d = siteData2.locales[localeIndex]) == null ? void 0 : _d.titleTemplate) ?? siteData2.titleTemplate,
    description: ((_e = siteData2.locales[localeIndex]) == null ? void 0 : _e.description) ?? siteData2.description,
    head: mergeHead(siteData2.head, ((_f = siteData2.locales[localeIndex]) == null ? void 0 : _f.head) ?? []),
    themeConfig: {
      ...siteData2.themeConfig,
      ...(_g = siteData2.locales[localeIndex]) == null ? void 0 : _g.themeConfig
    }
  });
}
function createTitle(siteData2, pageData) {
  const title = pageData.title || siteData2.title;
  const template = pageData.titleTemplate ?? siteData2.titleTemplate;
  if (typeof template === "string" && template.includes(":title")) {
    return template.replace(/:title/g, title);
  }
  const templateString = createTitleTemplate(siteData2.title, template);
  return `${title}${templateString}`;
}
function createTitleTemplate(siteTitle, template) {
  if (template === false) {
    return "";
  }
  if (template === true || template === void 0) {
    return ` | ${siteTitle}`;
  }
  if (siteTitle === template) {
    return "";
  }
  return ` | ${template}`;
}
function hasTag(head, tag) {
  const [tagType, tagAttrs] = tag;
  if (tagType !== "meta")
    return false;
  const keyAttr = Object.entries(tagAttrs)[0];
  if (keyAttr == null)
    return false;
  return head.some(([type, attrs]) => type === tagType && attrs[keyAttr[0]] === keyAttr[1]);
}
function mergeHead(prev, curr) {
  return [...prev.filter((tagAttrs) => !hasTag(curr, tagAttrs)), ...curr];
}
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
function sanitizeFileName(name) {
  const match = DRIVE_LETTER_REGEX.exec(name);
  const driveLetter = match ? match[0] : "";
  return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1");
}
const dataSymbol = Symbol();
const siteDataRef = shallowRef(siteData);
function initData(route) {
  const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.data.relativePath));
  return {
    site,
    theme: computed(() => site.value.themeConfig),
    page: computed(() => route.data),
    frontmatter: computed(() => route.data.frontmatter),
    lang: computed(() => site.value.lang),
    dir: computed(() => site.value.dir),
    localeIndex: computed(() => site.value.localeIndex || "root"),
    title: computed(() => {
      return createTitle(site.value, route.data);
    }),
    description: computed(() => {
      return route.data.description || site.value.description;
    }),
    isDark: ref(false)
  };
}
function useData() {
  const data = inject(dataSymbol);
  if (!data) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data;
}
function joinPath(base, path) {
  return `${base}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) || path.startsWith(".") ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  pagePath = pagePath.replace(/\/$/, "/index");
  {
    if (inBrowser) {
      const base = "/";
      pagePath = sanitizeFileName(pagePath.slice(base.length).replace(/\//g, "_") || "index") + ".md";
      let pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      if (!pageHash) {
        pagePath = pagePath.endsWith("_index.md") ? pagePath.slice(0, -9) + ".md" : pagePath.slice(0, -3) + "_index.md";
        pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      }
      pagePath = `${base}assets/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${sanitizeFileName(pagePath.slice(1).replace(/\//g, "_"))}.md.js`;
    }
  }
  return pagePath;
}
const RouterSymbol = Symbol();
const fakeHost = `http://a.com`;
const getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: notFoundPageData
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = reactive(getDefaultRoute());
  const router = {
    route,
    go
  };
  async function go(href = inBrowser ? location.href : "/") {
    var _a, _b;
    await ((_a = router.onBeforeRouteChange) == null ? void 0 : _a.call(router, href));
    const url = new URL(href, fakeHost);
    if (!siteDataRef.value.cleanUrls) {
      if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html")) {
        url.pathname += ".html";
        href = url.pathname + url.search + url.hash;
      }
    }
    if (inBrowser && href !== location.href) {
      history.replaceState({ scrollPosition: window.scrollY }, document.title);
      history.pushState(null, "", href);
    }
    await loadPage(href);
    await ((_b = router.onAfterRouteChanged) == null ? void 0 : _b.call(router, href));
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0, isRetry = false) {
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = await loadPageModule(pendingPath);
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp) {
          throw new Error(`Invalid route component: ${comp}`);
        }
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = markRaw(comp);
        route.data = true ? markRaw(__pageData) : readonly(__pageData);
        if (inBrowser) {
          nextTick(() => {
            let actualPathname = siteDataRef.value.base + __pageData.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
            if (!siteDataRef.value.cleanUrls && !actualPathname.endsWith("/")) {
              actualPathname += ".html";
            }
            if (actualPathname !== targetLoc.pathname) {
              targetLoc.pathname = actualPathname;
              href = actualPathname + targetLoc.search + targetLoc.hash;
              history.replaceState(null, "", href);
            }
            if (targetLoc.hash && !scrollPosition) {
              let target = null;
              try {
                target = document.querySelector(decodeURIComponent(targetLoc.hash));
              } catch (e) {
                console.warn(e);
              }
              if (target) {
                scrollTo(target, targetLoc.hash);
                return;
              }
            }
            window.scrollTo(0, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!/fetch/.test(err.message) && !/^\/404(\.html|\/)?$/.test(href)) {
        console.error(err);
      }
      if (!isRetry) {
        try {
          const res = await fetch(siteDataRef.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await res.json();
          await loadPage(href, scrollPosition, true);
          return;
        } catch (e) {
        }
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = fallbackComponent ? markRaw(fallbackComponent) : null;
        route.data = notFoundPageData;
      }
    }
  }
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (button)
        return;
      const link = e.target.closest("a");
      if (link && !link.closest(".vp-raw") && (link instanceof SVGElement || !link.download)) {
        const { target } = link;
        const { href, origin, pathname, hash, search } = new URL(link.href instanceof SVGAnimatedString ? link.href.animVal : link.href, link.baseURI);
        const currentUrl = window.location;
        const extMatch = pathname.match(/\.\w+$/);
        if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && target !== `_blank` && origin === currentUrl.origin && // don't intercept if non-html extension is present
        !(extMatch && extMatch[0] !== ".html")) {
          e.preventDefault();
          if (pathname === currentUrl.pathname && search === currentUrl.search) {
            if (hash && hash !== currentUrl.hash) {
              history.pushState(null, "", hash);
              window.dispatchEvent(new Event("hashchange"));
              scrollTo(link, hash, link.classList.contains("header-anchor"));
            }
          } else {
            go(href);
          }
        }
      }
    }, { capture: true });
    window.addEventListener("popstate", (e) => {
      loadPage(location.href, e.state && e.state.scrollPosition || 0);
    });
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
    });
  }
  return router;
}
function useRouter() {
  const router = inject(RouterSymbol);
  if (!router) {
    throw new Error("useRouter() is called without provider.");
  }
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo(el, hash, smooth = false) {
  let target = null;
  try {
    target = el.classList.contains("header-anchor") ? el : document.querySelector(decodeURIComponent(hash));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    let offset = siteDataRef.value.scrollOffset;
    if (typeof offset === "string") {
      offset = document.querySelector(offset).getBoundingClientRect().bottom + 24;
    }
    const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10);
    const targetTop = window.scrollY + target.getBoundingClientRect().top - offset + targetPadding;
    if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight) {
      window.scrollTo(0, targetTop);
    } else {
      window.scrollTo({
        left: 0,
        top: targetTop,
        behavior: "smooth"
      });
    }
  }
}
const Content = defineComponent({
  name: "VitePressContent",
  props: {
    onContentUpdated: Function
  },
  setup(props) {
    const route = useRoute();
    onUpdated(() => {
      var _a;
      (_a = props.onContentUpdated) == null ? void 0 : _a.call(props);
    });
    return () => h("div", { style: { position: "relative" } }, [
      route.component ? h(route.component) : null
    ]);
  }
});
export {
  APPEARANCE_KEY as A,
  Content as C,
  EXTERNAL_URL_RE as E,
  PATHNAME_PROTOCOL_RE as P,
  RouterSymbol as R,
  useRouter as a,
  isActive as b,
  useRoute as c,
  inBrowser as d,
  createTitle as e,
  initData as f,
  dataSymbol as g,
  createRouter as h,
  isExternal as i,
  mergeHead as m,
  pathToFile as p,
  siteDataRef as s,
  useData as u,
  withBase as w
};
