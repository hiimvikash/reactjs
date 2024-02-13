import { NavLink, Outlet } from "react-router-dom";
export function Profiles(){
    const Navstyle = {
        display : "flex",
        flexDirection : "column",
        gap : "10px",
        fontSize : "25px",
    }

    const mainStyle = {
        display : "flex", 
        gap : "200px"
    }

    return(
        <div style = {mainStyle}>
            <div style={Navstyle}>
                <NavLink to='/profiles/1'>profile 1</NavLink>   
                <NavLink to='/profiles/2'>profile 2</NavLink>   
                <NavLink to='/profiles/3'>profile 3</NavLink>   
                <NavLink to='/profiles/4'>profile 4</NavLink>   
                <NavLink to='/profiles/5'>profile 5</NavLink> 
            </div>

            <Outlet/>
        </div>
    )
}