import * as React from "react";
import {useQueryConfig} from "../data/queries";

export const Footer: React.FC = () => {
    let config = useQueryConfig();
    let year = new Date().getFullYear();
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">

                <div className="mt-8 border-t border-gray-100 pt-8">
                    <div className="sm:flex sm:justify-between">
                        <p className="text-xs text-gray-500">&copy; {year}. {config.companyName}. All rights reserved.</p>

                        <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                            <li>
                                <a href="/terms" className="text-gray-500 transition hover:opacity-75">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="/privacy" className="text-gray-500 transition hover:opacity-75">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="https://github.com/bednar/launch-lagoon" className="text-gray-500 transition hover:opacity-75">Launch Lagoon</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
