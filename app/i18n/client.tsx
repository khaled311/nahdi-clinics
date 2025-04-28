"use client";

import { getOptions, locales } from "app/i18n/settings";
import i18next, { TOptions } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { useRouter } from "next/navigation";
import { JSX, useEffect, useState } from "react";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";

const runsOnServerSide = typeof window === "undefined";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend((language: string, namespace: string) => {
      return import(`./locales/${language.split("-")[0]}/${namespace}.json`);
    })
  )
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: runsOnServerSide ? locales : [],
  });

export function useTranslation(locale: string, ns: string, options = {}) {
  const ret = useTranslationOrg(ns, { ...options, useSuspense: false });
  const { i18n } = ret;
  const router = useRouter();
  const [pending, setPending] = useState(true);
  if (
    runsOnServerSide &&
    locale &&
    i18n.resolvedLanguage !== locale &&
    router &&
    typeof window !== "undefined"
  ) {
    i18n.changeLanguage(locale).finally(() => router.refresh());
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return;
      setActiveLng(i18n.resolvedLanguage);
    }, [activeLng, i18n.resolvedLanguage]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!locale || i18n.resolvedLanguage === locale) return;
      i18n.changeLanguage(locale).finally(() => router.refresh());
      if (window && router) router.refresh();
    }, [locale, i18n, router]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (i18n.hasLoadedNamespace(ns)) {
        setPending(false);
      } else {
        i18n.on("loaded", (loaded) => {
          if (ns ? loaded?.[locale]?.[ns] : loaded?.[locale]) {
            setPending(false);
          }
        });
      }
    }, [i18n, ns, locale]);
  }

  const terror = (key: string, options?: TOptions) => {
    if (pending) {
      return (
        <span className="h-auto animate-pulse rounded-xl bg-neutral-100 text-transparent">
          {key}
        </span>
      );
    }
    return ret.t(key, options);
  };
  const ts = (key: string, options?: TOptions) => {
    if (pending) {
      return "";
    }
    return ret.t(key, options);
  };
  const t = (key: string, options?: TOptions) => {
    if (pending) {
      return (
        <span
          aria-hidden="true"
          className="h-auto animate-pulse rounded-xl bg-neutral-100 text-transparent"
        >
          {key}
        </span>
      );
    }
    return ret.t(key, options);
  };
  return { t, ts, terror, i18n: ret.i18n };
}
interface TranslationsTypes {
  t: (key: string, options?: TOptions) => JSX.Element | string;
  ts: (key: string, options?: TOptions) => string;
  terror: (key: string, options?: TOptions) => JSX.Element;
}

export type TType = TranslationsTypes["t"];
