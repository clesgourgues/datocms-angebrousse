import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { isSelectedFilter } from '@helpers/filters';

const Filters = ({ categoryFilters, colorFilters, selected, onClick }) => {
  const intl = useIntl();
  const isAllCategorySelected =
    !selected || (selected && selected.category && selected.category.length > 1);
  const isAllColorsSelected =
    !selected || (selected && selected.color && selected.color.length > 1);
  return (
    <div className='Wrapper'>
      <div className='Filters'>
        <span
          onClick={() => onClick(categoryFilters, 'category')}
          className={`Filter ${isAllCategorySelected && 'Filter__selected'}`}
        >
          {intl.formatMessage({ id: 'all_products' })}
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
            className={`Filter ${isAllColorsSelected && 'Filter__selected'}`}
          >
            {intl.formatMessage({ id: 'all_metals' })}
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
