import React from 'react';
import {
  array,
  func,
  number,
  string,
} from 'prop-types';

const classNamesRow = `
  px-4 py-2 block text-black hover:bg-grey-lighter
`;

const handleClick = (event, id, action) => {
  event.preventDefault();
  action({type: 'byId', filter: id});
};

const Row = ({action, name, id, sublevels}) => {
  return (
    <li className="list-reset">
      <a
        href={`/${name}`}
        className={classNamesRow}
        onClick={event => handleClick(event, id, action)}
      >
        {name}
      </a>
      {
        sublevels
          ? sublevels.map(({name, id, sublevels}, key) => {
            return (
              <ul key={name}>
                <Row
                  action={action}
                  name={name}
                  id={id}
                  key={name + key}
                  sublevels={sublevels}
                />
              </ul>
              )
            })
          : null
      }
    </li>
  );
};

Row.propTypes = {
  action: func.isRequired,
  id: number.isRequired,
  name: string.isRequired,
  sublevels: array,
};

export default Row;
