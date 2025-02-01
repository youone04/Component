import { Link } from "react-router-dom";

const NavMod = () => {
    return (
        <nav>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/stiky">Stiky</Link></li>
                <li><Link to="/carousel">Carousel</Link></li>
                <li><Link to="/resizable-sidebar">Resizable Sidebar</Link></li>
            </ul>
        </nav>
    )
}

export default NavMod;