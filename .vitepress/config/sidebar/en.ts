import type { DefaultTheme } from "vitepress";

export const en: DefaultTheme.Sidebar = {
  "/": [
    {
        text: "📚 Start Here",
        collapsible: true,
        collapsed: false,
        link: "/en/start/",
        items: [
            {
                text: "📖 Get Started",
                link: "/en/start/get-started",
            },
          ]
    },
    {
      text: "📊 Products",
      collapsible: true,
      collapsed: true,
      link: "/en/products/",
      items: [
        {
          text: "📊 Supply and Demand",
          link: "/en/products/supply-demand",
        },
        {
          text: "📐 Trend Line",
          link: "/en/products/trend-line",
        },
        {
          text: "🎛️ Algo Portfolio",
          link: "/en/products/algo-portfolio",
        },
        {
          text: "👧 Algo Mirzakhani",
          link: "/en/products/mirzakhani",
        },
        {
          text: "👨‍🎨 Algo Pishro",
          link: "/en/products/pishro",
        },
        {
          text: "👴 Algo Bob",
          link: "/en/products/bob",
        },
        {
          text: "🤵 Algo Darren",
          link: "/en/products/darren",
        },
        {
          text: "👨‍💻 License System <small>(Jadi)</small>",
          link: "/en/products/license-system",
        },
        {
          text: "👨‍🔬 Algo Dispenza",
          link: "/en/products/dispenza",
        },
        {
          text: "👨‍🔬 Samii <small>(Trading Framework)</small>",
          link: "/en/products/samii",
        },
        {
          text: "🎮 Algo MiaLand",
          link: "/en/products/mialand",
        },
        {
          text: "🏝️ KuroshTopia <small>(TradeHub)</small>",
          link: "/en/products/jadi",
        },
        {
          text: "Bazaar",
          link: "/en/products/bazaar",
        },
        {
          text: "Pythia",
          link: "/en/products/pythia",
        },
        {
          text: "💚 Yaseen",
          link: "/en/products/yaseen",
        },
        {
          text: "💀 Azrael",
          link: "/en/products/azrael",
        },
        {
          text: "Siddhartha",
          link: "/en/products/siddhartha",
        },
        {
          text: "🕉️ Shiva",
          link: "/en/products/shiva",
        },

      ],
    },
    {
      text: "👨‍💻 SDKs",
      collapsible: true,
      collapsed: true,
      link: "/en/sdks/",
      items: [
        { text: "Samii (Trading Framework)", link: "/en/skds/samii/intro" },
        { text: "Trading Bot", link: "/en/skds/trading-bot/intro" },
        { text: "Trading Terminal", link: "/en/skds/trading-terminal/intro" },
        { text: "Trading API", link: "/en/skds/trading-api/intro" },
        { text: "Trading SDK", link: "/en/skds/trading-sdk/intro" },
        { text: "Trading Library", link: "/en/skds/trading-library/intro" },
        { text: "Trading Platform", link: "/en/skds/trading-platform/intro" },
        { text: "Trading Tools", link: "/en/skds/trading-tools/intro" },
      ]
    },
    {
      text: "🤖 Rest APIs",
      collapsible: true,
      collapsed: true,
      link: "/en/apis/",
      items: [
        {
          text: "oAuth",
          link: "/en/apis/oauth",
        },
        {
          text: "Account",
          link: "/en/apis/account",
        },
        {
          text: "Category",
          link: "/en/apis/category",
        },
        {
          text: "Trading Account",
          link: "/en/apis/trading-account",
        },
        {
          text: "General",
          link: "/en/apis/general",
          items: [
            {
              text: "Market",
              link: "/en/apis/general/market"
            },
            {
              text: "Broker",
              link: "/en/apis/general/broker"
            },
            {
              text: "Platform",
              link: "/en/apis/general/platform"
            },
            {
              text: "Instrument",
              link: "/en/apis/general/instrument"
            },
          ]
        },
        {
          text: "Finance",
          link: "/en/apis/trader4/finance",
        },
        {
          text: "Marketplace",
          link: "/en/apis/marketplace",
        },
        {
          text: "Cloud",
          link: "/en/apis/trader4/cloud",
        },
        {
          text: "Bazaar (Social Trading)",
          link: "/en/apis/trader4/bazaar",
        },
        {
          text: "Financial Engineering",
          link: "/en/apis/trader4/financial-engineering",
        },
        {
          text: "Capital Road (Funded)",
          link: "/en/apis/trader4/capital-road",
        }
      ],
    },
  ],
};
