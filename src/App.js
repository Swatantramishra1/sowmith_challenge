import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import './App.css';
import GoogleLogin from 'react-google-login';

class App extends Component {
  render() {
    const responseGoogle = (response) => {
      console.log(response);
    }
    console.log(this.props);
    return (
      <div className="app">
        <GoogleLogin
          clientId="575412109893-clfpajd235fpk9tllnilac2n3et81nvh.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App);