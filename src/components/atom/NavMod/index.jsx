import { Link } from "react-router-dom";

const NavMod = () => {
    return (
        <nav>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/stiky">Stiky</Link></li>
                <li><Link to="/carousePage">Carousel</Link></li>
                <li><Link to="/resizablesidebar">Resizable Sidebar</Link></li>
            </ul>
        </nav>
    )
}

export default NavMod;