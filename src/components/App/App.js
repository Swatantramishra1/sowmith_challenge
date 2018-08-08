import React, { Component } from 'react';
import { connect } from 'react-redux';
import Routes from '../../Routes';
import AppWrapper from './App.style';

class App extends Component {
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
  
};

export default connect(mapStateToProps, mapDispatchToProps)(App);