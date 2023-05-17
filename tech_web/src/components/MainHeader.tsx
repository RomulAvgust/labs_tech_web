import React from 'react';
import { Menu, Layout, MenuProps } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

const MainHeader = () => {
    return (
        <Header className="header">
            <Menu
                style={{ display: 'flex', justifyContent: 'center' }}
                theme="dark" // Replace with the desired theme, e.g., "dark" or "light"
                mode="horizontal"
                defaultSelectedKeys={['1']}
            >
                <Menu.Item key="1">
                    <Link to="/">Главная страница</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/about">Информация о нас</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/contact">Контакты</Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
};

export default MainHeader;
