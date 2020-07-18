import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

export default () => {
  const intl = useIntl();
  return (
    <div className='Notfound'>
      <div className='Wrap'>
        <h1>Hum Hum</h1>
        <p>{intl.formatMessage({ id: '404' })}</p>
      </div>
    </div>
  );
};
