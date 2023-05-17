import React from 'react';
import {Layout, Menu, MenuProps, theme} from "antd";
import {LaptopOutlined, NotificationOutlined, UserOutlined} from "@ant-design/icons";

const {Sider} = Layout;

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `Раздел №${key}`
        };
    },
);

const Sidebar = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Sider width={300} style={{background: colorBgContainer}}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{height: '100%', borderRight: 0}}
                items={items2}
            />
        </Sider>
    );
};

export default Sidebar;