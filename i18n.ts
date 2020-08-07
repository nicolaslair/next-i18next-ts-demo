import NextI18Next from 'next-i18next';
import path from 'path';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'fr',
  defaultNS: 'common',
  localePath: path.resolve('./public/static/locales'),
  otherLanguages: ['en', 'nl'],
  localeSubpaths: { en: 'en', nl: 'nl' },
});

export const {
  i18n,
  Link,
  appWithTranslation,
  withTranslation,
  useTranslation,
} = NextI18NextInstance;

export default NextI18NextInstance;
