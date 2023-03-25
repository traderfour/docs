import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import { descriptionEN, github, ogImg, site } from "../meta";
import { en as nav } from "./navbar";
import { en as sidebar } from "./sidebar";

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: descriptionEN,

  themeConfig: {
    nav,
    sidebar,
    docFooter: {
      prev: "Previous page",
      next: "Next page",
    },
    returnToTopLabel: "Return to top",
    outlineTitle: "On this page",
    darkModeSwitchLabel: "Appearance",
    sidebarMenuLabel: "Menu",
    lastUpdatedText: "Last updated",
    editLink: {
      pattern: `${github}/edit/main/docs/:path`,
      text: "Suggest changes to this page",
    },
    // NOTE: wait for support: https://github.com/vuejs/vitepress/issues/631#issuecomment-1325241151
    /*  algolia: {
      appId: "HT557E7UAD",
      apiKey: "641a851fcd32ca9f71fe6a278748d87c",
      indexName: "Trader4 Docs",
      searchParameters: {
        facetFilters: ["lang:en-US"],
      },
    }, */
    footer: {
      message:
        'Made by 💜 in <a href="https://trader4.net" target="_blank"><strong>Trader4</strong></a>, Part of <a href="https://trader4.net/open-source/" target="_blank"><strong>Trader4 Open Source</strong></a>',
      copyright:
        '© 2017-2023 <a href="https://trader4.net" target="_blank"><strong>Trader4</strong></a>, All Rights Reserved. Build 0.0.01',
    },
  },

  head: [
    ["meta", { name: "twitter:description", content: descriptionEN }],
    ["meta", { name: "twitter:image", content: ogImg }],
    ["meta", { property: "og:description", content: descriptionEN }],
    ["meta", { property: "og:url", content: site }],
    ["meta", { property: "og:locale", content: "en_US" }],
    ["meta", { property: "og:image", content: ogImg }],
  ],
};
