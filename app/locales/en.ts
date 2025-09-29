const en = {
  common: {
    errorDefaultTitle: "Oops!",
    errorDefaultDescription: "An unexpected error occurred.",
    error404Title: "404",
    error404Description: "The requested page could not be found.",
    errorStackLabel: "Stack trace",
    languageMenuLabel: "Language",
    loadingFallback: "Loading…",
  },
  welcome: {
    heroTitle: "What's next?",
    docsLink: "React Router Docs",
    joinDiscordLink: "Join Discord",
    englishLabel: "English",
    arabicLabel: "Arabic",
  },
} as const;

export type EnLocale = typeof en;
export default en;
