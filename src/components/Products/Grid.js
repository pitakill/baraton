import React from 'react';
import {
  array,
  func,
} from 'prop-types';

import Card from './Card';

const Grid = ({action, items}) => (
  <div className="flex flex-wrap mt-16">
    {
      items.map((item, key) =>
        <Card
          key={key}
          action={action}
          {...item}
        />)
    }
  </div>
);

Grid.propTypes = {
  action: func.isRequired,
  items: array.isRequired,
};

export default Grid;
