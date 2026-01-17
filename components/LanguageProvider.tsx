'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations, type Content, type Locale } from './i18n';

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: Content;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'textile-locale';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('tr');

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && translations[saved]) {
      setLocale(saved);
      return;
    }

    const browserLocale = navigator.language.toLowerCase();
    if (browserLocale.startsWith('tr')) {
      setLocale('tr');
    } else {
      setLocale('en');
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      content: translations[locale]
    }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
