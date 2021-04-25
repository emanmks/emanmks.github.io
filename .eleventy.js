module.exports = function(eleventyConfig) {
    eleventyConfig.setUseGitIgnore(true);
    eleventyConfig.addPassthroughCopy("favicon.ico");
};
