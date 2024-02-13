import { NavLink } from "react-router-dom"
export function NotFound(){
return (
    <>
    <h1>404 NOT FOUND</h1>
    <NavLink to='/'>Home</NavLink>
    </>
)
}