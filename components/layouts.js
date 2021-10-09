import { Children } from "react"
import NavbarItem from "./NavbarItem"


export default function Layout({children}){
    return(
        <>
        <NavbarItem />
        <main>{children}</main>
        </>
    )
};