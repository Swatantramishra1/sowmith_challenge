import React from 'react';
import { connect } from 'react-redux';
import ShortCutsWrapper from './ShortCuts.style';
import { Card, Button } from 'antd';

const ShortCuts = () => {
  return (
    <ShortCutsWrapper>
      <div className="short-cuts-container">
        <Card title="Frequently Used Options" bordered={false}>
          <p className="users-shortcuts-heading">User Shortcuts</p>
          <div className="flex user-shortcuts">
            <Button icon="user-add">Add User</Button>
            <Button icon="edit">Edit User</Button>
          </div>
        </Card>
      </div>
    </ShortCutsWrapper>
  )
}

function mapToStateProps(state) {
  return state;
}

const mapDispatchToProps = {

}

export default connect(mapToStateProps, mapDispatchToProps)(ShortCuts);