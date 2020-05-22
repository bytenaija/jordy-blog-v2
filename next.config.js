const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withMdxEnhanced = require("next-mdx-enhanced");
const withFonts = require("next-fonts");

const nextConfig = {
    pageExtensions: ["js", "jsx", "mdx", "tsx"],
};

const mdxEnhancedConfig = {
    layoutPath: "src/layouts",
    defaultLayout: true,
    fileExtensions: ["mdx"],
    remarkPlugins: [
        [require("remark-toc"), {tight: true}]
    ],
    rehypePlugins: [
        require("rehype-slug"),
        [require("rehype-autolink-headings"), {behavior: "wrap"}],
    ],
    extendFrontMatter: {
        process: (mdxContent, frontMatter) => {},
        phase: "prebuild|loader|both",
    },
};

module.exports = withPlugins(
    [
        [
            optimizedImages,
            {
                optimizeImages: false,
            },
        ],
        withFonts,
        withMdxEnhanced(mdxEnhancedConfig),
    ],
    nextConfig
);
