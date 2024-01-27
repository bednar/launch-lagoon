import * as React from "react"
import type {PageProps} from "gatsby"
import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {Reviews} from "../components/reviews";
import {Promotion} from "../components/promotion";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <body className="font-sans">
        {<Header/>}
        {<Promotion/>}
        {<Reviews/>}
        {<Footer companyName={"Company Name"}/>}
        </body>
    )
}

export default IndexPage
