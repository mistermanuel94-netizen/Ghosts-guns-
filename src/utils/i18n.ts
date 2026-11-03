export const LOCALES = ['en', 'de', 'nl', 'fr', 'es', 'it', 'pl', 'bg'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export interface LanguageMeta {
  code: Locale;
  name: string;
  nativeName: string;
  flag: string;
}

export const LANGUAGES: Record<Locale, LanguageMeta> = {
  en: { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  de: { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  nl: { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱' },
  fr: { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  es: { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  it: { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  pl: { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱' },
  bg: { code: 'bg', name: 'Bulgarian', nativeName: 'Български', flag: '🇧🇬' },
};

import translationsData from '../data/translations.json';
import productsTranslationsData from '../data/products-translations.json';
import categoriesTranslationsData from '../data/categories-translations.json';

export function getLangFromUrl(url: URL | string): Locale {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0] as Locale;
  if (LOCALES.includes(first) && first !== 'en') {
    return first;
  }
  return DEFAULT_LOCALE;
}

export function getLocalizedPath(pathname: string, targetLocale: Locale): string {
  // Normalize pathname
  let cleanPath = pathname;
  if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;

  // Strip existing locale prefix if any
  for (const loc of LOCALES) {
    if (loc === 'en') continue;
    if (cleanPath === `/${loc}` || cleanPath === `/${loc}/`) {
      cleanPath = '/';
      break;
    } else if (cleanPath.startsWith(`/${loc}/`)) {
      cleanPath = cleanPath.slice(loc.length + 1);
      break;
    }
  }

  // Ensure leading slash
  if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;

  if (targetLocale === 'en') {
    return cleanPath;
  }

  if (cleanPath === '/') {
    return `/${targetLocale}/`;
  }

  return `/${targetLocale}${cleanPath}`;
}

export function formatPrice(priceInCentsOrNum: number | string | undefined | null): string {
  if (priceInCentsOrNum === undefined || priceInCentsOrNum === null || priceInCentsOrNum === '') {
    return '€0.00';
  }
  let num: number;
  if (typeof priceInCentsOrNum === 'string') {
    num = parseFloat(priceInCentsOrNum);
    // If it's WooCommerce raw minor units (> 100 with no decimal point)
    if (!priceInCentsOrNum.includes('.') && num >= 100) {
      num = num / 100;
    }
  } else {
    num = priceInCentsOrNum;
    if (num >= 100 && Number.isInteger(num)) {
      num = num / 100;
    }
  }
  return `€${num.toFixed(2)}`;
}

export function useTranslations(lang: Locale) {
  const dict = (translationsData as any)[lang] || (translationsData as any)[DEFAULT_LOCALE] || {};
  const defaultDict = (translationsData as any)[DEFAULT_LOCALE] || {};

  return function t(key: string): string {
    const keys = key.split('.');
    let val = dict;
    for (const k of keys) {
      if (val && typeof val === 'object' && k in val) {
        val = val[k];
      } else {
        val = undefined;
        break;
      }
    }
    if (val !== undefined && typeof val === 'string') {
      return val;
    }

    // Fallback to English
    let fallback = defaultDict;
    for (const k of keys) {
      if (fallback && typeof fallback === 'object' && k in fallback) {
        fallback = fallback[k];
      } else {
        fallback = undefined;
        break;
      }
    }
    return typeof fallback === 'string' ? fallback : key;
  };
}

export function getProductTranslation(productId: number | string, slug: string, lang: Locale) {
  const prodKey = String(slug);
  const pData = (productsTranslationsData as any)[prodKey] || (productsTranslationsData as any)[String(productId)];
  if (pData && pData[lang]) {
    return pData[lang];
  }
  if (pData && pData.en) {
    return pData.en;
  }
  return null;
}

export function getCategoryTranslation(slug: string, lang: Locale) {
  const cData = (categoriesTranslationsData as any)[slug];
  if (cData && cData[lang]) {
    return cData[lang];
  }
  if (cData && cData.en) {
    return cData.en;
  }
  return null;
}
