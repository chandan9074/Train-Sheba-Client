import React, { useState } from 'react';
import { Drawer, Button, Space, Radio } from 'antd';
import DashboardNavigation from '../Shared/Navigation/DashboardNavigation';

const Dashboard = () => {
    const [visible, setVisible] = useState(false);
    const isMobile = true;
    const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
    return ( 
        <>
        <DashboardNavigation />
        <div>
        <Space>
            <Button type="primary" onClick={showDrawer}>
            Open
            </Button>
        </Space>
        <Drawer
            title="Drawer with extra actions"
            placement="left"
            
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
        </div>
        
    </>
     );
}
 
export default Dashboard;