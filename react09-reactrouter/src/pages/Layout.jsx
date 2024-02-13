import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function Layout() {
  
    const Navstyle = {
        display : "flex",
        flexDirection : "column",
        gap : "10px",
        fontSize : "25px",
    }

    const mainStyle = {
        display : "flex", 
        gap : "10%"
    }

    return(
        <div style = {mainStyle}>
            <div style={Navstyle}>
                <NavLink to='/home'>Home</NavLink>   
                <NavLink to='/about'>About</NavLink>   
                <NavLink to='/contact'>Contact us</NavLink>   
                <NavLink to='/profiles'>profiles Link</NavLink>   
                <NavLink to='/github'>Github</NavLink> 
            </div>

            <Outlet/>
        </div>
    )
}

export default Layout