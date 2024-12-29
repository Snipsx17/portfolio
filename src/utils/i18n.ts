import en from '@locales/en.json';
import es from '@locales/es.json';
import fr from '@locales/fr.json';

type Language = 'en' | 'es' | 'fr';

const translations: Record<Language, any> = {
  en,
  es,
  fr,
};

const isLanguageValid = (value: string): value is Language => {
  return ['en', 'es', 'fr'].includes(value);
};

export const getTranslation = (lang: string, key: string): string => {
  const langKey = isLanguageValid(lang) ? lang : 'en';
  const keys = key.split('.');
  let translation: any = translations[langKey];

  for (const k of keys) {
    if (!translation || typeof translation !== 'object' || !translation[k]) {
      return key;
    }
    translation = translation[k];
  }

  return typeof translation === 'string' ? translation : key;
};
