import React from 'react';
import { connect } from 'react-redux';
import Routes from '../../Routes';
import AppWrapper from './App.style';

class App extends React.Component {
  render() {
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