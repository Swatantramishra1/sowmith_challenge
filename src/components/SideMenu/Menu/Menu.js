import React from 'react';
import {history} from '../../../History';
import {Link} from 'react-router-dom';
import { Menu, Icon } from 'antd';
import MenuWrapper from './Menu.style';

const SubMenu = Menu.SubMenu;

const MenuComponent = () => {
    return (
        <MenuWrapper>            
            <div className="menu-container">
                <Menu
                    mode="inline"
                    inlineCollapsed={false}
                >
                    <SubMenu key="sub1" title={<span><Icon type="user" /><span>User</span></span>}>
                        <Menu.Item key="1">Add User</Menu.Item>
                        <Menu.Item key="2">Edit User</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="dot-chart" /><span>IC</span></span>}>
                        <Menu.Item key="3">Add IC</Menu.Item>
                        <Menu.Item key="4">Edit IC</Menu.Item>              
                    </SubMenu>
                </Menu>
            </div>
        </MenuWrapper>
    );
}

export default MenuComponent;