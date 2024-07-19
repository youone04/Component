import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Menu({ hideMenu = false, children }) {
    const menuRef = useRef(null);
    let lastScrollTop = useRef(0);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop <= 0) {
                if (menuRef.current && !hideMenu) {
                    menuRef.current.style.display = 'none';
                }
            } else {
                // User scrolls down
                if (menuRef.current) {
                    menuRef.current.style.display = 'block';
                }
            }
            lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        };
        window.addEventListener('scroll', handleScroll);
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="menu" id="menu" ref={menuRef}>
                <nav>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/stiky">Stiky</Link></li>
                    </ul>
                </nav>
            </div>
            {children}
        </>
    )
}