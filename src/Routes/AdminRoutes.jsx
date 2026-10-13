import React, { useContext } from 'react'
import { AuthContextAPI } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AdminRoutes = ({children}) => {
    let {authuser}=useContext(AuthContextAPI);
    console.log(authuser);
    

    if(authuser?.role=="admin"){
return<>{children}</>
    }else{
        toast.error("UnAuthorized access")
        return<Navigate to={"/user-profile"}/>
    }
}

export default AdminRoutes
