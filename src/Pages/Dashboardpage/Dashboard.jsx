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
        <DashboardNavigation onChange={showDrawer} />
        <div>
        {/* <Space>
            <Button type="primary" onClick={showDrawer}>
            Open
            </Button>
        </Space> */}
        <Drawer
            title={<p className="text-base font-extrabold flex items-center m-0"><i class="fas fa-subway text-yellow-500 mr-1"></i> <span className="text-gray-600">TRAIN</span><span className="text-gray-400">SHEBA</span></p>}
            placement="left"
            closable={false}
            onClose={onClose}
            visible={visible}
            extra={
            <Space>
                <i class="fas fa-window-close cursor-pointer text-2xl text-gray-700" onClick={onClose}></i>
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