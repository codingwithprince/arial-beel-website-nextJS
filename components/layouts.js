import { Children } from "react"
import Footer from "./Footer"
import NavbarItem from "./NavbarItem"


export default function Layout({children}){
    return(
        <>
        <NavbarItem />
        <main>{children}</main>
        <Footer />
        </>
    )
};