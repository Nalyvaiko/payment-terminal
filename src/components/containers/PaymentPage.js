import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';

import * as actions from '../../actions/paymentActions';
import OperatorItem from '../Operators/OperatorItem';
import PaymentForm from '../PaymentForm';

export class PaymentPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      proceedingPayment: false,
      paymentError: false
    };
  }

  proceedPayment = (payment) => {
    const {id, actions, history} = this.props;
    this.setState({
      proceedingPayment: true,
      paymentError: false
    });

    actions.proceedPayment({id, ...payment})
      .then(() => {history.replace('/')})
      .catch(() => {this.setState({
        proceedingPayment: false,
        paymentError: true
      })});
  }

  getOperatorData = () => {
    const {id, operators} = this.props;
    return operators.length > 0
      ? operators.find(operator => operator.id === id)
      : {id};
  }

  render() {
    return (
      <div className="container payment-page">
        <OperatorItem {...this.getOperatorData()}/>
        <PaymentForm
          proceedPayment={this.proceedPayment}
          proceedingPayment={this.state.proceedingPayment}
          paymentError={this.state.paymentError}
          />
      </div>
    );
  }
}

PaymentPage.propTypes = {
  id: PropTypes.string.isRequired,
  operators: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.match.params.id,
  operators: state.operators
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentPage));
