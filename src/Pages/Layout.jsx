import { Outlet } from "react-router-dom"
import NavbarContainer from "../Components/NavbarComponenets/NavbarContainer"

let Layout=()=>{
    return <section className="w-[100%] min h-[100vh] bg-slate-900">
        <NavbarContainer/>
        <Outlet/>
    </section>
}
export default Layout