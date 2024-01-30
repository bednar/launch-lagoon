import * as React from "react";
import {Header} from "./header";
import {Footer} from "./footer";

interface LayoutProps {
    children: React.ReactNode;
    isHomepage: boolean;
}

export const Layout: React.FC<LayoutProps> = ({children, isHomepage }) => {
    let linkPrefix =  isHomepage ? "" : "../";
    return (
        <body className="font-sans">
        {<Header linkPrefix={linkPrefix}/>}
        {children}
        {<Footer linkPrefix={linkPrefix}/>}
        </body>
    )
}
