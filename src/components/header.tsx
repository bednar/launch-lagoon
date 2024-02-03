import * as React from "react";
import {useQueryConfig} from "../hooks/queries";
import {Link} from "gatsby";
import AppIcon from '../images/icon.png';

interface HeaderProps {
    linkPrefix: string;
}

export const Header: React.FC<HeaderProps> = ({linkPrefix}) => {
    let config = useQueryConfig();
    return (
        <header className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <Link to={`./${linkPrefix}`} className={`block text-${config.primaryColor}`}>
                            <span className="sr-only">Home</span>
                                <img src={AppIcon} alt="Icon of the App" className="block inset-0 h-16 w-auto"/>
                        </Link>
                        <Link to={`./${linkPrefix}`} className={`block text-${config.primaryColor}`}>
                            <span
                                className={`text-4xl font-bold text-center font-sans text-${config.primaryColor} rounded`}>{config.appName.toUpperCase()}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
