//import pakages
import React from 'react';

import { Navigate, Outlet } from 'react-router';
import useAuth from '../../hooks/useAuth';


const PrivateRoute = () => {
    const {user, loading} = useAuth();
    return user.email ? <Outlet /> : <Navigate
                to={{
                pathname: "/login"
                }}
            />
}
 
export default PrivateRoute;