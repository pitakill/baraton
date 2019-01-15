import React from 'react';
import {
  array,
  func,
  string,
} from 'prop-types';

import Row from './Row';

const classNamesTitle = `
  flex items-center cursor-pointer text-sm text-blue border border-white
  border-b-0 group-hover:border-grey-light rounded-t-lg py-1 px-2
`;

const classNamesRowContainer = `
  items-center absolute border border-t-0 rounded-b-lg p-1 bg-white p-2
  invisible group-hover:visible w-full
`;

const Dropdown = ({action, categories, title}) => (
  <div className="group z-50 fixed pin-t pin-l w-full sm:w-64">
    <div className={classNamesTitle}>
      {title}
    </div>
    <ul className={classNamesRowContainer}>
      {
        categories.map(({id, name, sublevels}, key) => {
          return (
            <Row
              action={action}
              name={name}
              id={id}
              key={name + key}
              sublevels={sublevels}
            />
          );
        })
      }
    </ul>
  </div>
);

Dropdown.propTypes = {
  action: func.isRequired,
  categories: array.isRequired,
  title: string.isRequired,
};

export default Dropdown;
