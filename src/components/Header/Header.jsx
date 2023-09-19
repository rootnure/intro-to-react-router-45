import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <span>My Website</span>
                    <span>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="users">Users</NavLink>
                        <NavLink to="posts">Posts</NavLink>
                        <NavLink to="app">App</NavLink>
                        <NavLink to="contact">Contact</NavLink>
                        <NavLink to="about">About Us</NavLink>
                    </span>
                </nav>
            </header>
        </>
    );
};

export default Header;