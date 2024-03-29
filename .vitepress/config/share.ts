import { defineConfig } from "vitepress";
import { generateSitemap, rebuildPWA } from "../build";
import {
  github,
  keywords,
  name,
  ogTitle,
} from "../meta";
import {
  ImagePlugin,
  useCodeGroup,
  useCodeGroupItem,
} from "../theme/components/markdown";

export const shareConfig = defineConfig({
  title: name,
  base: "/",
  ignoreDeadLinks: true,
  themeConfig: {
    logo: {
      src: "/images/logo.svg",
      alt: "Trader4 Docs",
    },
    socialLinks: [{ icon: "github", link: github }],
  },

  lastUpdated: true,
  useWebFonts: false,
  appearance: "dark",
  cleanUrls: "without-subfolders",
  buildEnd: async (siteConfig) => {
    await generateSitemap(siteConfig);
    await rebuildPWA();
  },

  markdown: {
    // shiki code theme
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },
    config: (md) => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      md.use(require("markdown-it-mark"));
      md.use(useCodeGroup.container, useCodeGroup.type, {
        render: useCodeGroup.render,
      });
      md.use(useCodeGroupItem.container, useCodeGroupItem.type, {
        render: useCodeGroupItem.render,
      });
      md.use(ImagePlugin);
    },
  },

  head: [
    ["meta", { name: "keywords", content: keywords }],
    ["meta", { name: "author", content: "Trader4.net" }],
    ["meta", { name: "twitter:title", content: ogTitle }],
    ["meta", { name: "twitter:creator", content: "@trader4_net" }],
    ["meta", { name: "twitter:site", content: "@trader4_net" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "og:type", content: "article" }],
    ["meta", { name: "application-name", content: name }],
    ["meta", { name: "apple-mobile-web-app-title", content: name }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
    ],

    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
    ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/images/safari-pinned-tab.svg",
        color: "#dd6954",
      },
    ],
    ["meta", { name: "theme-color", content: "#dd6954" }],

    // To IPhone icon: https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons/
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/images/icons/apple-touch-120x120.png",
      },
    ],

    // webfont
    ["link", { rel: "dns-prefetch", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "dns-prefetch", href: "https://fonts.gstatic.com" }],
    [
      "link",
      {
        rel: "preconnect",
        crossorigin: "anonymous",
        href: "https://fonts.googleapis.com",
      },
    ],
    [
      "link",
      {
        rel: "preconnect",
        crossorigin: "anonymous",
        href: "https://fonts.gstatic.com",
      },
    ],
  ],
});
