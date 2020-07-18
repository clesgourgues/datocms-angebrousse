import React from 'react';
import Animate from '@components/Animate';
import { useIntl } from 'gatsby-plugin-intl';

const EmptyCatalogue = () => {
  const intl = useIntl();
  return (
    <div className='Empty'>
      <Animate quick={true}>
        <h3> {intl.formatMessage({ id: 'no_product' })}</h3>
      </Animate>
    </div>
  );
};

export default EmptyCatalogue;
