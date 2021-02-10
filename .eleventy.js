const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/css");

  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
