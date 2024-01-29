import * as React from "react"
import type {PageProps} from "gatsby"
import {Reviews} from "../components/reviews";
import {Promotion} from "../components/promotion";
import {Layout} from "../components/layout";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            {<Promotion/>}
            {<Reviews/>}
        </Layout>
    )
}

export default IndexPage
