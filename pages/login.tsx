import React from 'react';
import { i18n, withTranslation } from '../i18n';

const LoginPage = ({ t }: { t: any }): JSX.Element => (
  <>
    <h1>{t('auth:title')}</h1>
    <form>
      <input placeholder={t('auth:placeholder.email')} type="email" />
      <input type="password" />
      <button>{t('auth:button.login')}</button>
    </form>
  </>
);

export async function getInitialProps(): Promise<any> {
  return { namespacesRequired: ['auth'] };
}

export default withTranslation('auth')(LoginPage);
