import React from 'react';
import PropTypes from 'prop-types';
import OperatorItem from './OperatorItem';


const Operators = ({ operators }) => (
  <section className="operators">
    {operators.length && operators.map(operator => <OperatorItem key={operator.id} {...operator}/>)}
  </section>
);

Operators.propTypes = {
  operators: PropTypes.array.isRequired
}

export default Operators;
