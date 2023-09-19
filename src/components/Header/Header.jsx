import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <span>My Website</span>
                    <span>
                        <Link to="/">Home</Link>
                        <Link to="contact">Contact</Link>
                        <Link to="posts">Posts</Link>
                        <Link to="about">About Us</Link>
                        <Link to="users">Users</Link>
                        <Link to="app">App</Link>
                    </span>
                </nav>
            </header>
        </>
    );
};

export default Header;