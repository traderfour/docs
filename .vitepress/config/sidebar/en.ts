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
          text: "🖥️ Dashboard X",
          link: "/en/products/dashboard-x",
        },
        {
          text: "🔗 Bridge",
          link: "/en/products/bridge",
        },
        // {
        //   text: "👧 Algo Mirzakhani",
        //   link: "/en/products/mirzakhani",
        // },
        // {
        //   text: "👨‍🎨 Algo Pishro",
        //   link: "/en/products/pishro",
        // },
        // {
        //   text: "👴 Algo Bob",
        //   link: "/en/products/bob",
        // },
        // {
        //   text: "🤵 Algo Darren",
        //   link: "/en/products/darren",
        // },
        {
          text: "👨‍💻 License System",
          link: "/en/products/license-system",
        },
        // {
        //   text: "👨‍🔬 Algo Dispenza",
        //   link: "/en/products/dispenza",
        // },
        {
          text: "🔳 Trading Framework",
          link: "/en/products/trading-framework",
        },
        // {
        //   text: "🎮 Algo MiaLand",
        //   link: "/en/products/mialand",
        // },
        // {
        //   text: "🏝️ KuroshTopia <small>(TradeHub)</small>",
        //   link: "/en/products/jadi",
        // },
        // {
        //   text: "Bazaar",
        //   link: "/en/products/bazaar",
        // },
        // {
        //   text: "Pythia",
        //   link: "/en/products/pythia",
        // },
        // {
        //   text: "💚 Yaseen",
        //   link: "/en/products/yaseen",
        // },
        // {
        //   text: "💀 Azrael",
        //   link: "/en/products/azrael",
        // },
        // {
        //   text: "Siddhartha",
        //   link: "/en/products/siddhartha",
        // },
        // {
        //   text: "🕉️ Shiva",
        //   link: "/en/products/shiva",
        // },

      ],
    },
    {
      text: "👨‍💻 SDKs",
      collapsible: true,
      collapsed: true,
      link: "/en/sdks/",
      items: [
        { text: "Trading Framework", link: "/en/skds/trading-framework" },
        // { text: "Trading Bot", link: "/en/skds/trading-bot/intro" },
        // { text: "Trading Terminal", link: "/en/skds/trading-terminal/intro" },
        // { text: "Trading API", link: "/en/skds/trading-api/intro" },
        // { text: "Trading SDK", link: "/en/skds/trading-sdk/intro" },
        // { text: "Trading Library", link: "/en/skds/trading-library/intro" },
        // { text: "Trading Platform", link: "/en/skds/trading-platform/intro" },
        // { text: "Trading Tools", link: "/en/skds/trading-tools/intro" },
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
          text: "Bridge",
          link: "/en/apis/bridge/",
          items:[
            {
              text: "Functions",
              link: "/en/apis/bridge/functions/",
              items:[
                {
                  text: "MQL5",
                  link: "/en/apis/bridge/functions/mql5"
                },
                {
                    text: "MQL4",
                    link: "/en/apis/bridge/functions/mql4"
                },
              ]
            }
          ],
        },

        {
          text: "General",
          link: "/en/apis/general/market",
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
          link: "/en/apis/trader4/finance/",
        },
        {
          text: "Marketplace",
          link: "/en/apis/marketplace/",
          items:[
            {
              text: "Category",
              link: "/en/apis/category",

            },
            {
              text: "Funded Account",
              link: "/en/apis/marketplace/funded-account/",
            }
          ]
        },
        {
          text: "Cloud",
          link: "/en/apis/trader4/cloud/",
        },
        {
          text: "Bazaar (Social Trading)",
          link: "/en/apis/trader4/bazaar/",
        },
        {
          text: "Financial Engineering",
          link: "/en/apis/trader4/financial-engineering/",
          items: [
            {
                text: "Cash Flow",
                link: "/en/apis/financial-engineering/cash-flow/",
            },
            {
                text: "Risk Management",
                link: "/en/apis/financial-engineering/risk-management/",
            },
            {
                text: "Money Management",
                link: "/en/apis/financial-engineering/money-management/",
            },
            {
                text: "Trading Plan",
                link: "/en/apis/financial-engineering/trading-plan/",
            },
          ],
        }
      ],
    },
  ],
};
