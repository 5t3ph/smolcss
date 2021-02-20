const Terser = require("terser");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/*.png");
  eleventyConfig.addPassthroughCopy("./src/fonts/");
  eleventyConfig.addPassthroughCopy("./src/assets/");

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addCollection("snippets", function (collection) {
    return collection.getFilteredByTag("snippet").sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });

  eleventyConfig.addNunjucksAsyncFilter("jsmin", async (code, callback) => {
    try {
      const minified = await Terser.minify(code);
      return callback(null, minified.code);
    } catch (err) {
      console.error("Error during terser minify:", err);
      return callback(err, code);
    }
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
