import React, { Component } from 'react';
import { Button } from 'antd';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;