import React, { useState } from 'react';
import { Drawer, Button, Space, Radio } from 'antd';
import DashboardNavigation from '../Shared/Navigation/DashboardNavigation';
import {
  Link, 
  useRouteMatch
} from "react-router-dom";

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
            <div className='flex flex-col'>
                <Link to="/" className="nav-btn text-base font-semibold py-2"> <i class="fas fa-home mr-2"></i> Home</Link>
                <Link to="/dashboard" className="nav-btn text-base font-semibold py-2"><i class="fas fa-tachometer-alt mr-2"></i> Dashboard</Link>
                <Link to="/tickets" className="nav-btn text-base font-semibold py-2"><i class="fas fa-archive mr-2"></i> Booking</Link>
            </div>
            <hr className='w-full text-gray-400' />
            <div className='flex flex-col'>
                <Link to="/tickets" className="nav-btn text-base font-semibold py-2"><i class="fas fa-archive mr-2"></i> My Bookings</Link>
                <Link to="/tickets" className="nav-btn text-base font-semibold py-2"><i class="fas fa-archive mr-2"></i> Add Review</Link>
            </div>

        </Drawer>
        </div>
        
    </>
     );
}
 
export default Dashboard;