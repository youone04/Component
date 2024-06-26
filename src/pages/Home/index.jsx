import Banner from "@components/Banner";
import Content from "@components/Content";
import Menu from "@components/Menu";

export default function Home() {
    return (
        <>
            <Menu hideMenu={false}>
                <Banner
                    // menucomp={''}
                    title="Welcome to Our Website"
                    descripsi="Enjoy your stay!" />
            </Menu>
            <Content title="Haloo" content="kami sedang" />
        </>
    )
}