import type { DefaultTheme } from "vitepress";

export const en: DefaultTheme.NavItem[] = [
  {
    text: "Products",
    link: "/en/products/",
    activeMatch: "/products/",
  },
  {
    text: "SDKs",
    link: "/en/sdks/",
    activeMatch: "/sdks/",
  },
  {
    text: "APIs",
    link: "/en/apis/",
    activeMatch: "/en/apis/",
  },
  {
    text: `More`,
    items: [
      {
        text: "Website",
        link: `https://trader4.net`,
      },
      {
        text: "Panel",
        link: "https://app.trader4.net",
      },
      {
        text: "Status",
        link: "https://status.trader4.net",
      },
      {
        text: "FAQ",
        link: "https://trader4.net/faq/",
      },
    ],
  },
];
