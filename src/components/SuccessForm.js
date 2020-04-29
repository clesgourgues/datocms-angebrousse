import React from 'react';
import Animate from '@components/Animate';

const SuccessForm = ({ text }) => (
  <Animate>
    <div className='Success'>
      <div className='Wrap'>
        <div className='Success__message'>{text}</div>
      </div>
    </div>
  </Animate>
);

export default SuccessForm;
