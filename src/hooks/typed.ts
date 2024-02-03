import type {PageProps} from "gatsby";

interface MarkdownPageProps {
    markdownRemark: {
        html: string;
        frontmatter: {
            title: string;
        };
    };
}

export type MarkdownPageDataProps = PageProps<MarkdownPageProps>;
