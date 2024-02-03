import React, {ReactNode} from "react";
import {useQueryConfig} from "../hooks/queries";
import AppIcon from '../images/icon.png';

interface SEOProps {
    title?: string;
    children?: ReactNode;
}

export const SEO: React.FC<SEOProps> = ({ title, children }) => {
    let configProps = useQueryConfig();

    return (
        <>
            <title>{configProps.appName}{title ? ` - ${title}` : ``}</title>
            <meta name="description" content={configProps.appDescription} />
            <meta name="keywords" content={configProps.appKeywords}/>
            <link rel="icon" href={AppIcon} type="image/png"/>
            {children}
        </>
    );
};
