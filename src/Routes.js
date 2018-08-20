import React from 'react';
import {Router,Switch,Route,Redirect} from 'react-router-dom';
import {history} from './History';
import { connect } from 'react-redux';
import Login from '../src/components/Login/Login';
import Home from '../src/components/Home/Home';
import AddUser from './components/Users/AddUser/AddUser';
import NotFound from '../src/components/NotFound/NotFound';

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route {...rest} render={(props) => (
      isAuth === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/'
        }} />
  )} />
)

class Routes extends React.Component {

  render() {
    return(
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route component={NotFound} />
          {/*<PrivateRoute path='/dashboard' isAuth={this.props.AUTHREDUCER.isAuth} component={Protected} />
          <PrivateRoute path='/profile' isAuth={this.props.AUTHREDUCER.isAuth} component={UserProfile} />
          <Route component={NotFound} />*/}
        </Switch>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Routes);