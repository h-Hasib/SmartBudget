import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import english from './english.json';
import french from './french.json';
import spanish from './spanish.json';
import bengali from './bengali.json';

const STORE_LANGUAGE_KEY = 'settings.lang';

translations = {
  en: english,
  fr: french,
  es: spanish,
  bn: bengali,
};
const i18n = new I18n(translations);

i18n.locale = Localization.locale;

i18n.fallbacks = true;

export default i18n;
