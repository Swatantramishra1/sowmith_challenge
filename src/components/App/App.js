import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {
  render() {
    
    console.log(this.props);
    return (
      <div className="app">
     
        {/* <Button type="primary">Button</Button> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(App);