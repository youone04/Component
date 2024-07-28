import { useRef, useEffect } from "react";
import NavMod from "@components/atom/NavMod";

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
                <NavMod/>
            </div>
            {children}
        </>
    )
}