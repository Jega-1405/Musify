import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout";
import Home from "../Pages/Home";
import Register from "../Components/auth/Register";
import Login from "../Components/auth/Login";
import ResetPassword from "../Components/Auth/ResetPassword";
import UserMainContainer from "../Components/userComponents/UserMainContainer";
import MyAccount from "../Components/userComponents/MyAccount";
import UpdateProfile from "../Components/userComponents/UpdateProfile";
import AddProfile from "../Components/userComponents/AddProfile";
import UpdatePassword from "../Components/userComponents/UpdatePassword";
import DeleteAccount from "../Components/userComponents/DeleteAccount";
import PageNotFound from "../Pages/PageNotFound";
import AdminMainContainer from "../AdminComponents/AdminMainContainer";
import AdminDashboard from "../AdminComponents/AdminDashboard";
import CreateAlbum from "../AdminComponents/CreateAlbum";
import AllAlbums from "../AdminComponents/AllAlbums";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";


let Myroutes=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
              path:"/",
              element:<Home/>
            },
            {
                path:"register",
                element:<PublicRoutes>
                    <Register/>
                </PublicRoutes>
            },
            {
                path:"login",
                element:<PublicRoutes>
                    <Login/>
                </PublicRoutes>
            },
            {
                path:"reset-password",
                element:<PublicRoutes>
                    <ResetPassword/>
                </PublicRoutes>
            }
        ]
    },
    {
        path:"user-profile",
        element:<PrivateRoutes><UserMainContainer/></PrivateRoutes>,
        children:[
            {
                index:"true",
                element:<MyAccount/>
            },
            {
                path:"update-profile",
                element:<UpdateProfile/>
            },
            {
                path:"add-profile",
                element:<AddProfile/>
            },
            {
                path:"update-password",
                element:<UpdatePassword/>
            },
            {
            path:"delete-account",
            element:<DeleteAccount/>
            },
          
        ]
    }
    ,
    {
        path:"admin",
        element:<AdminMainContainer/>,
        children:[
            {
                index:"true",
                element:<AdminDashboard/>
            },
            {
                path:"create-album",
                element:<CreateAlbum/>
            },
            {
                path:"all-albums",
                element:<AllAlbums/>
            }
        ]
    },
    {
        path:"*",
        element:<PublicRoutes>
            <PageNotFound/>
        </PublicRoutes>
    }
])
export default Myroutes