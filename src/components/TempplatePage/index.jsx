import BaseMenu from "@components/BaseMenu";
import FooterComp from "@components/Footer";

export default function TempplatePage({children}) {
    return(
        <>
        {/* menu */}
        <BaseMenu/>

        {/* content */}
        {children}

        {/* footer */}
        <FooterComp/>
        </>
    )

}