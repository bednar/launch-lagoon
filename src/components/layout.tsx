import * as React from "react";
import {Header} from "./header";
import {Footer} from "./footer";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <body className="font-sans">
        {<Header/>}
        {children}
        {<Footer/>}
        </body>
    )
}
