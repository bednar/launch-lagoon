import * as React from "react"
import {PageProps} from "gatsby"
import {Promotion} from "../components/promotion";
import {Layout} from "../components/layout";
import {SEO} from "../components/seo";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout isHomepage={true}>
            {<Promotion/>}
        </Layout>
    )
}

export default IndexPage

export const Head = () => <SEO />
