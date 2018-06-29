import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const OperatorItem = ({id, name}) => {
  const pathToLogo = require(`../../assets/img/operators/${id}.png`);

  return (
    <Link
      to={`/payment/${id}`}
      className="operator-item">
      <div className="operator-logo">
        <div
          className="logo-image"
          style={{backgroundImage: `url(${pathToLogo})`}}
          />
      </div>
      <span>{name}</span>
    </Link>
  )
};

OperatorItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string
}

export default OperatorItem;
