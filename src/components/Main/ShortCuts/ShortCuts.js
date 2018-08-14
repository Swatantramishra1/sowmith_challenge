import React from 'react';
import { connect } from 'react-redux';
import ShortCutsWrapper from './ShortCuts.style';
import { Card, Icon } from 'antd';

const ShortCuts = () => {
  return (
    <ShortCutsWrapper>
      <div className="short-cuts-container">
        <Card title="Frequently Used Options" bordered={false}>
          <h3 className="users-shortcuts-heading">Users Shortcuts</h3>
          <div className="flex user-shortcuts">
            <Icon type="user-add" />
            <Icon type="edit" />
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