import React from 'react';
import {
  string,
  bool,
  number,
} from 'prop-types';

import {getRandomBackgroundImage} from '../../helpers';

const handleClick = (event, action, item) => {
  action(item);
};

const Card = ({action, available, name, id, price, quantity}) => (
  <div
    className={`w-1/2 p-2 lg:w-1/3 lg:flex z-0 ${available ? null : 'opacity-25'}`}
    onClick={event => handleClick(event, action, {id, name})}
    >
    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden cursor-pointer" style={getRandomBackgroundImage(id)} title={name} />
    <div className="border-r border-b border-l border-grey-light lg:border-none bg-white rounded-b p-4 flex flex-col justify-between leading-normal cursor-pointer">
      <div className="h-full">
        <div className="text-black font-bold text-xl mb-2">{name}</div>
        <p className="text-grey-darker text-base">{price}</p>
        <p className="text-grey-darker text-base">{quantity}</p>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  available: bool.isRequired,
  id: string.isRequired,
  name: string.isRequired,
  // Maybe we can convert this to a number (int)
  price: string.isRequired,
  quantity: number.isRequired,
  sublevel_id: number.isRequired,
};

export default Card;
