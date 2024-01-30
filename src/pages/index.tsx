import * as React from "react"
import {PageProps} from "gatsby"
import {Reviews} from "../components/reviews";
import {Promotion} from "../components/promotion";
import {Layout} from "../components/layout";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout isHomepage={true}>
            {<Promotion/>}
            {<Reviews/>}
        </Layout>
    )
}

export default IndexPage
