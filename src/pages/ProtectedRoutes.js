import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'
const ProtectedRoutes=({isAuthenticated,children})=>{
    if(isAuthenticated===null){
        return <Navigate to={"/login"} />
    }
    return <Outlet/>;
}

export default ProtectedRoutes