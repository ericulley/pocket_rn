import { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'

const NavBar: FunctionComponent = () => {
    return (
        <div id="nav-bar-container">
            <div id="left">
                <NavLink to="/">PocketRN</NavLink>
                <NavLink to="/">Pending</NavLink>
                <NavLink to="/">Schedule</NavLink>

            </div>
            <div id="right">
                <NavLink to="/new-user">+ Add New User</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>

        </div>
    )
}

export default NavBar