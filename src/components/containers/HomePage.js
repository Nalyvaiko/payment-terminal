import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/operatorActions';

import Operators from '../Operators';
import Loader from '../common/Loader';

export class HomePage extends React.Component {
  componentDidMount() {
    this.props.actions.loadOperators();
  }

  render() {
    const {operators, ajaxCallsInProgress} = this.props;

    return (
      <div className="container">
        <h1>Payment Terminal</h1>
        <h2>Choose operator</h2>
        {
          ajaxCallsInProgress
            ? <Loader/>
            : <Operators operators={operators} />
        }
      </div>
    );
  }
}

HomePage.propTypes = {
  operators: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  ajaxCallsInProgress: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  operators: state.operators,
  ajaxCallsInProgress: state.ajaxCallsInProgress,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
