/** basic site info */
export const name = "Trader4 Docs";
export const site = "https://docs.trader4.net";
export const logo = "https://docs.trader4.net/images/logo.svg";
export const keywords =
  "Trader4 Docs, Trader4, API, trading, crypto api,forex api";
export const descriptionEN =
  "Deep Documentation and Tutorials for Trader4 API";

/** social links */
export const ogTitle = "Trader4 Docs - Deep Documentation and Tutorials";
export const ogImg = "https://docs.trader4.net/images/logo.svg";
export const github = "https://github.com/traderfour/docs/";
export const npm = "https://www.npmjs.com/org/traderfour";
export const twitter = "https://twitter.com/trader4_net";

/** package info */
// eslint-disable-next-line @typescript-eslint/no-var-requires
export const version = 1;

/* PWA runtime caching urlPattern regular expressions */
/* eslint-disable prefer-regex-literals */
export const githubSourceContentRegex = new RegExp(
  "^https://(((raw|user-images|camo).githubusercontent.com))/.*",
  "i"
);
export const googleFontRegex = new RegExp(
  "^https://fonts.googleapis.com/.*",
  "i"
);
export const googleStaticFontRegex = new RegExp(
  "^https://fonts.gstatic.com/.*",
  "i"
);
export const jsdelivrCDNRegex = new RegExp("^https://cdn.jsdelivr.net/.*", "i");
