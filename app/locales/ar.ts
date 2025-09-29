const ar = {
  common: {
    errorDefaultTitle: "عذرًا!",
    errorDefaultDescription: "حدث خطأ غير متوقع.",
    error404Title: "404",
    error404Description: "تعذر العثور على الصفحة المطلوبة.",
    errorStackLabel: "تتبع الأخطاء",
    languageMenuLabel: "اللغة",
    loadingFallback: "جارٍ التحميل…",
  },
  welcome: {
    heroTitle: "ما التالي؟",
    docsLink: "دليل React Router",
    joinDiscordLink: "انضم إلى ديسكورد",
    englishLabel: "الإنجليزية",
    arabicLabel: "العربية",
  },
} as const;

export type ArLocale = typeof ar;
export default ar;
