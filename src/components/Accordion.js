import React, { useState, useRef } from 'react';
import Chevron from '@components/Chevron';

function Accordion({ title, content }) {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState('Accordion__icon');

  const contentRef = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(setActive === 'active' ? '0px' : `${contentRef.current.scrollHeight}px`);
    setRotateState(setActive === 'active' ? 'Accordion__icon' : 'Accordion__icon rotate');
  }

  return (
    <div className='Accordion__section'>
      <button className={`Accordion ${setActive}`} onClick={toggleAccordion}>
        <p className='Accordion__title'>{title}</p>
        <Chevron className={`${setRotate}`} width={10} height={10} fill={'#000'} />
      </button>
      <div ref={contentRef} style={{ maxHeight: `${setHeight}` }} className='Accordion__content'>
        <div className='Accordion__text' dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}

export default Accordion;
