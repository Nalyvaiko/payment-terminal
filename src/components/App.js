/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import HomePage from './containers/HomePage';
import PaymentPage from './containers/PaymentPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/payment/:id" component={PaymentPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
