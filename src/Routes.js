import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { history } from './History';
import { connect } from 'react-redux';
import Home from '../src/components/Home/Home';


class Routes extends React.Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
        </Switch>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Routes);