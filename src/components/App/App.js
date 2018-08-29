import React from 'react';
import { history } from '../../History';
import { connect } from 'react-redux';
import Routes from '../../Routes';
import AppWrapper from './App.style';
import { loginSuccess, loginFailure } from '../../redux/actions/Auth/AuthActions';

class App extends React.Component {
  
  componentDidMount() {
    
    if(sessionStorage.getItem('checkAuth') === 'true') {
      let _userData = JSON.parse(sessionStorage.getItem('user'));
      this.props.loginSuccess(_userData.data);
      history.push('/home');
    }
    else {
      this.props.loginFailure();
      history.push('/');
      sessionStorage.clear();
    }
  }

  render() {
    console.log(this.props);
    return (
      <AppWrapper>
        <Routes />
      </AppWrapper>
    )
  }
}

function mapStateToProps(state) {
  return state
}

const mapDispatchToProps = {
  loginSuccess,
  loginFailure
};

export default connect(mapStateToProps, mapDispatchToProps)(App);