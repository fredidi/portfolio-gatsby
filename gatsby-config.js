module.exports = {
    pathPrefix: "/portfolio-gatsby",
    siteMetadata: {
        siteUrl: "https://www.fredriklam.com",
        title: "Fullstack .NET Developer",
        description: "I'm actively searching for a workplace to start my career as a developer and to create value for businesses. I'm interested in a fullstack position.",
        author: "",
        siteLanguage: "en",
        image: "banner.jpg",
        titleTemplate: "inbio",
        getform_url:
            "https://getform.io/f/7a6695a7-c8e3-442c-bc2f-d46d3b9a535e",
        socials: [
            {
                id: 1,
                title: "GitHub",
                path: "https://github.com/fredidi",
                icon: "GitHub",
            },
            {
                id: 2,
                title: "Linkedin",
                path: "https://linkedin.com/in/lamfredrik/",
                icon: "Linkedin",
            }
        ],
        contact: {
            phone: "46 704 81 98 93",
            email: "contactme.fredrik@gmail.com",
        },
    },
    plugins: [
        {
            resolve: "gatsby-plugin-sass",
            options: {
                useResolveUrlLoader: {
                    options: {
                        sourceMap: true, //default is false
                    },
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                    "gatsby-remark-reading-time",
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Inbio",
                short_name: "inbio",
                theme_color: "#ffffff",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: "src/assets/images/FL_favicon_whitebg.png",
            },
        },
    ],
};
