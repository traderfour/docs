import { h, onMounted, watch, watchEffect } from "vue";
import Theme from "vitepress/theme";
import { inBrowser, useData, useRouter } from "vitepress";
import type { EnhanceAppContext } from "vitepress";
import "./style/main.css";
import "./style/vars.css";
import "./style/rtl.css";
import "./style/tooltip.css";
import "uno.css";

import { createMediumZoomProvider } from "./components/composables";
import HomePage from "./components/HomePage.vue";
import CodeGroupItem from "./components/CodeGroupItem.vue";
import Response from "./components/Response.vue";
import SelectLibraries from "./components/SelectLibraries.vue";
import CodeBox from "./components/CodeBox.vue";
import { CodeGroup } from "./components/CodeGroup";

if (inBrowser) {
  import("./pwa");
}

export default {
  ...Theme,
  Layout() {
    return h(
      Theme.Layout,
      {
        class: useData().dir.value === "rtl" ? "rtl" : "",
      },
      {
        "home-features-after": () => h(HomePage),
      }
    );
  },
  enhanceApp({ app, router }: EnhanceAppContext) {
    app.component("CodeGroup", CodeGroup);
    app.component("CodeGroupItem", CodeGroupItem);
    createMediumZoomProvider(app, router);

    // TODO: add google analytics later
    /*  usePageAnalytics("", ""); */

    //Custom Components By Trader4 Team ;)
    app.component("Response", Response);
    app.component("SelectLibraries", SelectLibraries);
    app.component("CodeBox", CodeBox);

    //Directive for tooltop package
    app.directive("tooltip", {
      mounted(el, binding) {
        init(el, binding);
      },
      updated(el, binding) {
        init(el, binding);
      },
    });
  },
  setup() {
    const router = useRouter();
    if (router.route.path === "/") {
      router.go("/en/");
    }

    // Hide index page for Hydration completed but contains mismatches. ERROR
    onMounted(() => {
      hideIndexPage();
      const VPHome = document.querySelector(".VPHome");
      console.log(VPHome);
      VPHome?.classList.add("hidden");
    });
    watch(
      () => router.route.path,
      (path) => {
        hideIndexPage();
        setTimeout(() => {}, 10);
      }
    );

    // BEGIN: Hide index page for Hydration completed but contains mismatches. ERROR
    const hideIndexPage = () => {
      if (router.route.path !== "/en/") {
        const appBar = document.querySelectorAll(".VPNavBarAppearance");
        const socialLinks = document.querySelectorAll(".VPNavBarSocialLinks");
        appBar.length > 1
          ? appBar[0].setAttribute("style", "display:none !important")
          : null;
        socialLinks.length > 1
          ? appBar[0].setAttribute("style", "display:none !important")
          : null;
      }
    };

    //END: end of hide index page

    // get lang from cookie
    const { lang } = useData();
    watchEffect(() => {
      if (typeof document !== "undefined")
        document.cookie = `nf_lang=${lang.value}; expires=Sun, 1 Jan 2024 00:00:00 UTC; path=/`;
    });
  },
};
function init(el: any, binding: any) {
  let position = binding.arg || "top";
  let tooltipText = binding.value || "Tooltip text";
  el.setAttribute("position", position);
  el.setAttribute("tooltip", tooltipText);
}
