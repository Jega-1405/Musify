import { createContext, useContext, useEffect, useState } from "react"
import { AuthContextAPI } from "./AuthContext";
import toast from "react-hot-toast";
import { doc, onSnapshot } from "firebase/firestore";
import { __DB } from "../backend/firebase";

export let UserContextAPI = createContext(null);

let UserContext = ({children})=>{
    let {authUser} = useContext(AuthContextAPI);
    console.log("auth user");
    
    let [userDataFromDB , setUserdataFromDB] = useState(null);  
    let fetchDataFromDB = async()=>{
        console.log("fetchdb starting");
        
        if(authUser != null){
            console.log("authuser condition");
            
            try {
                let userDataRefernce = doc(__DB , "user_profile" , authUser?.uid);
                onSnapshot(userDataRefernce , (user)=>{
                    if(user.exists){
                        setUserdataFromDB(user?.data())
                        // console.log(user?.data());
                        
                    }
                })
            } catch (error) {
                toast.error(error.message)
            }
        }
    }
    useEffect(()=>{
        fetchDataFromDB()
    },[authUser])
    return <UserContextAPI.Provider value={{userDataFromDB}}>
        {children}
    </UserContextAPI.Provider>
}
export default UserContext
