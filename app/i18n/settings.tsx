export const defaultLanguage = "en";
export const defaultLocale = "en";
export const locales = ["en", "ar"];
const defaultNS = "common";
export const languages = ["en", "ar"];
export const regions = ["SA", "AE"];
export const regionNameMap = {
  SA: "KSA",
  AE: "UAE",
};
export const regionCurrency = {
  SA: "SAR",
  AE: "AED",
};

export function getOptions(locale = defaultLocale, ns = defaultNS) {
  return {
    lng: locale,
    fallbackLng: defaultLocale,
    supportedLngs: locales,
    defaultNS: defaultNS,
    fallbackNS: defaultNS,
    lowerCaseLng: true,
    ns: ns,
    preload: locales,
    debug: false,
    prefixDefault: true,
  };
}
