import * as React from "react"
import type {PageProps} from "gatsby"
import {Header} from "../componens/header";
import {Footer} from "../componens/footer";
import {Reviews} from "../componens/reviews";
import {Promotion} from "../componens/promotion";

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
