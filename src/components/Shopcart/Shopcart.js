import React from 'react';
import {
  array,
} from 'prop-types';

import Card from './Card';

const classNamesRowContainer = `
  items-center absolute border border-t-0 rounded-b-lg p-1 bg-white p-2
  invisible group-hover:visible w-full
`;

const classNamesSvg = `
  stroke-current text-blue inline-block h-12 w-12 relative
`;

const classNamesSvgContainer = `
  flex items-center cursor-pointer text-sm text-blue border border-white
  border-b-0 group-hover:border-grey-light rounded-t-lg py-1 px-2
`;

const Shopcart = ({items}) => {
  return (
    <div className="group fixed pin-t pin-r m-2 w-32 z-50">
      <div className={classNamesSvgContainer}>
        <svg
          className={classNamesSvg}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8" cy="21" r="2"></circle>
          <circle cx="20" cy="21" r="2"></circle>
          <path d="M5.67 6H23l-1.68 8.39a2 2 0 0 1-2 1.61H8.75a2 2 0 0 1-2-1.74L5.23 2.74A2 2 0 0 0 3.25 1H1"></path>
        </svg>
        <p className={`text-grey-light bg-red p-1 rounded-full
          w-6 h-6 absolute text-center
          ${items.length > 0 ? 'visible' : 'invisible'}`}
          >
          {items.length}
          </p>
      </div>
      <div className={classNamesRowContainer}>
        {
          items.map((item, key) => (
            <Card key={key} {...item} />
          ))
        }
      </div>
    </div>
  );
};

Shopcart.propTypes = {
  items: array.isRequired,
};

export default Shopcart;
