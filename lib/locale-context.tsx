// app/locale-context.tsx
"use client"; // needs to be a client component to use React context

import { createContext, useContext } from "react";

const LocaleContext = createContext<string>("en"); // default fallback

export const useLocale = () => useContext(LocaleContext);

export function LocaleProvider({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}
