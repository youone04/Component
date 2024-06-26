import { useRef, useEffect } from "react";
import MenuBanner from "@components/MenuBanner";

export default function Banner({
    title = "belum ada title",
    descripsi = "belum ada descripsi",
    linkBg = "https://www.youtube.com/embed/9sNQFJAb3Ss?autoplay=1&mute=1&controls=0&loop=1&playlist=9sNQFJAb3Ss",
    menucomp = <MenuBanner />
}) {
    // const menuRef = useRef(null);
    const menuBannerRef = useRef(null);
    let lastScrollTop = useRef(0);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop <= 0) {
                if (menuBannerRef.current) {
                    menuBannerRef.current.style.display = 'block';
                }
            } else {
                if (menuBannerRef.current) {
                    menuBannerRef.current.style.display = 'none';
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
        <div className="banner">
            <div className="overlay"></div>
            {/* menu */}
            <div className="menu-banner" id="menu-banner" ref={menuBannerRef}>
                {menucomp}
            </div>

            <div className="text">
                <h1>{title}</h1>
                <p>{descripsi}</p>
            </div>
            <div id="video-background">
                <iframe
                    src={linkBg}
                    frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
        </div>
    )
}