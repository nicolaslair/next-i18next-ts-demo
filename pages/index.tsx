import React from 'react';
import { i18n, withTranslation } from '../i18n';

const IndexPage = ({ t }: { t: any }): JSX.Element => (
  <>
    <h1>{t('common:welcome')}</h1>
    <button
      onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}
    >
      {t('common:change-language')}
    </button>
  </>
);

export async function getInitialProps(): Promise<any> {
  return { namespacesRequired: ['common'] };
}

export default withTranslation('common')(IndexPage);
