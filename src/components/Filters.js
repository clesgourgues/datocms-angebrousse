import React from 'react';
import { isSelectedFilter } from '@helpers/filters';
import 'react-dropdown/style.css';

const Filters = ({ categoryFilters, colorFilters, selected, onClick }) => {
  return (
    <div className='Wrapper'>
      <div className='Filters'>
        <span
          onClick={() => onClick(categoryFilters, 'category')}
          className={`Filter ${selected.category.length > 1 && 'Filter__selected'}`}
        >
          tous les bijoux
        </span>
        {categoryFilters.map(category => (
          <div key={category}>
            <span className='Filter__separator'>/</span>
            <span
              onClick={() => onClick([category], 'category')}
              className={`Filter ${isSelectedFilter(category, selected.category) &&
                'Filter__selected'}`}
            >
              {category}
            </span>
          </div>
        ))}
      </div>
      {colorFilters.length > 1 && (
        <div className='Filters'>
          <span
            onClick={() => onClick(colorFilters, 'color')}
            className={`Filter ${selected.color.length > 1 && 'Filter__selected'}`}
          >
            toutes les matières
          </span>
          {colorFilters.map(color => (
            <div key={color}>
              <span className='Filter__separator'>/</span>
              <span
                onClick={() => onClick([color], 'color')}
                className={`Filter ${isSelectedFilter(color, selected.color) &&
                  'Filter__selected'}`}
              >
                {color}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filters;
