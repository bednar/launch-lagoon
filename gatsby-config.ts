import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Launch Lagoon`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
      "gatsby-transformer-yaml",
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              path: `${__dirname}/src/data/`,
          },
      },
      "gatsby-transformer-remark",
      "gatsby-plugin-postcss"
  ],
  // GitHub Pages repository name
  pathPrefix: "/launch-lagoon",
};

export default config;
