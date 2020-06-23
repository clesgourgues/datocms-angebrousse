import React from 'react';
import { isSelectedFilter } from '@helpers/filters';
import 'react-dropdown/style.css';

const Filters = ({ categoryFilters, colorFilters, selected, onClick }) => {
  console.log('selected', selected);
  const isAllCategorySelected =
    !selected || (selected && selected.category && selected.category.length > 1);
  const isAllFabricsSelected =
    !selected || (selected && selected.color && selected.color.length > 1);
  return (
    <div className='Wrapper'>
      <div className='Filters'>
        <span
          onClick={() => onClick(categoryFilters, 'category')}
          className={`Filter ${isAllCategorySelected && 'Filter__selected'}`}
        >
          tous les bijoux
        </span>
        {categoryFilters.map(category => {
          return (
            <div key={category}>
              <span className='Filter__separator'>/</span>
              <span
                onClick={() => onClick([category], 'category')}
                className={`Filter ${selected &&
                  selected.category &&
                  isSelectedFilter(category, selected.category) &&
                  'Filter__selected'}`}
              >
                {category}
              </span>
            </div>
          );
        })}
      </div>
      {colorFilters.length > 1 && (
        <div className='Filters'>
          <span
            onClick={() => onClick(colorFilters, 'color')}
            className={`Filter ${isAllFabricsSelected && 'Filter__selected'}`}
          >
            toutes les matières
          </span>
          {colorFilters.map(color => (
            <div key={color}>
              <span className='Filter__separator'>/</span>
              <span
                onClick={() => onClick([color], 'color')}
                className={`Filter ${selected &&
                  selected.color &&
                  isSelectedFilter(color, selected.color) &&
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
