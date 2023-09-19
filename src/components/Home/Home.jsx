import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <h2>Home</h2>
            <p>Home page to view the default</p>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;