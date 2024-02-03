import * as React from "react"
import {graphql} from "gatsby"
import {Layout} from "../components/layout";
import {MarkdownPageDataProps} from "../hooks/typed";
import {SEO} from "../components/seo";

const PrivacyPage: React.FC<MarkdownPageDataProps> = ({data}) => {
    const markdown = data.markdownRemark;
    return (
        <Layout isHomepage={false}>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold my-4">{markdown.frontmatter.title}</h1>
                <div className="text-gray-700">
                    <p dangerouslySetInnerHTML={{__html: markdown.html}}/>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
query {
    markdownRemark(fileAbsolutePath: {regex: "/privacy-policy/"}) {
        html
        frontmatter {
            title
        }
    }
}`

export default PrivacyPage

export const Head = () => <SEO title={"Privacy Policy"}/>
