import React, { useState } from 'react';
import { Drawer, Button, Space, Radio } from 'antd';
import Navigation from '../Shared/Navigation/Navigation';

const Dashboard = () => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
    return ( 
        <>
        <Navigation />
        <Space>
            <Button type="primary" onClick={showDrawer}>
            Open
            </Button>
        </Space>
        <Drawer
            title="Drawer with extra actions"
            placement="left"
            width={100}
            onClose={onClose}
            visible={visible}
            extra={
            <Space>
                <Button onClick={onClose}>Cancel</Button>
                <Button type="primary" onClick={onClose}>
                OK
                </Button>
            </Space>
            }
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    </>
     );
}
 
export default Dashboard;