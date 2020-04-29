import React from 'react';
import Animate from '@components/Animate';

const EmptyCatalogue = () => (
  <div className='Empty'>
    <Animate quick={true}>
      <h3>Aucun produit correspondant</h3>
    </Animate>
  </div>
);

export default EmptyCatalogue;
