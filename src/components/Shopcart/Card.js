import React from 'react';
import {
  string,
} from 'prop-types';

import {getRandomBackgroundImage} from '../../helpers';

const Card = ({id, name}) => (
  <div className="flex mb-1">
    <div className="w-1/2">
      <div className="w-12 h-12 bg-cover" style={getRandomBackgroundImage(id)} />
    </div>
    <div className="w-1/2">
      <div className="text-black">{name}</div>
    </div>
  </div>
);

Card.propType = {
  id: string.isRequired,
  name: string.isRequired,
};

export default Card;
