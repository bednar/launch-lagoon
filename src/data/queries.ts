import {graphql, useStaticQuery} from "gatsby";

interface ConfigProps {
    /**
     * The name of the app, it is used in the header and the title of the pages.
     */
    appName: string;
    /**
     * Primary color of the theme used in the header and some other elements,
     * it is from the Tailwind CSS color palette
     */
    primaryColor: string;
}

/**
 * The configuration data such as the name of the app and the primary color.
 */
export const useQueryConfig = (): ConfigProps => {
    const data = useStaticQuery(graphql`
        query {
            allDataYaml {
                nodes {
                    appName
                    primaryColor
                }
            }
        }`
    );

    return data.allDataYaml.nodes[0];
};
