// const { slugify } = require("../utils");
const remarkParse = require("remark-parse");
const remarkRehype = require("remark-rehype");
const rehypeRaw = require("rehype-raw");
const rehypeStringify = require("rehype-stringify");
const unified = require("unified");
const excerptHtml = require("excerpt-html");

module.exports = ({ createResolvers }) => {
    const resolvers = {
        Article: {
            excerpt: {
                resolve: (source) => {
                    const { content } = source;
                    return excerptHtml(content);
                },
            },
            content: {
                resolve: (source) => {
                    const { content } = source;
                    const stringContent =
                        JSON.stringify(
                            unified()
                                .use(remarkParse)
                                .use(remarkRehype, { allowDangerousHtml: true })
                                .use(rehypeRaw)
                                .use(rehypeStringify)
                                .processSync(content)
                        ) || "";
                    const parsedContent = JSON.parse(stringContent);
                    return parsedContent.contents || "";
                },
            },
        },
    };
    createResolvers(resolvers);
};
