import {graphql, useStaticQuery} from "gatsby";

interface ConfigProps {
    /**
     * The name of the company, it is used in the footer.
     */
    companyName: string;
    /**
     * The name of the app, it is used in the header and the title of the pages.
     */
    appName: string;
    /**
     * The URL of the app in the App Store, it is used in the promotion.
     */
    appStoreLink?: string;
    /**
     * The URL of the app in the Play Store, it is used in the promotion.
     */
    playStoreLink?: string;
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
                    companyName
                    appName
                    appStoreLink
                    playStoreLink
                    primaryColor
                }
            }
        }`
    );

    return data.allDataYaml.nodes[0];
};
