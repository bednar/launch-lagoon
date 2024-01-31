import * as React from "react";
import {useQueryConfig} from "../data/queries";
import {graphql, useStaticQuery} from "gatsby";
import AppStoreBadge from '../images/app-store-badge.png';
import GooglePlayBadge from '../images/google-play-badge.png';

export const Promotion: React.FC = () => {
    let config = useQueryConfig();
    const markdown = useStaticQuery(graphql`
        query {
            markdownRemark(fileAbsolutePath: {regex: "/promotion/"}) {
                html
                frontmatter {
                    title
                }
            }
        }`
    ).markdownRemark;
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <img
                            alt="Party"
                            src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">{markdown.frontmatter.title}</h2>
                        <p className="mt-4 text-gray-600" dangerouslySetInnerHTML={{__html: markdown.html}}/>
                        {config.appStoreLink &&
                            (
                                <a href={config.appStoreLink} target="_blank" rel="noopener noreferrer"
                                   className={"inline-block py-10 pr-5"}>
                                    <img src={AppStoreBadge} alt="Download on the App Store" className="h-16 w-auto"/>
                                </a>
                            )
                        }
                        {config.playStoreLink &&
                            (
                                <a href={config.playStoreLink} target="_blank" rel="noopener noreferrer"
                                   className={"inline-block py-10"}>
                                    <img src={GooglePlayBadge} alt="Get it on Google Play" className="h-16 w-auto"/>
                                </a>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
