import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import Login from '../Login/Login';
import AppWrapper from './App.style';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <AppWrapper>
        <div className="app">
          <Login />
        </div>
      </AppWrapper>
    )
  }
}

function mapStateToProps(state) {
  return state
}

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(App);