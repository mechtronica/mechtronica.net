module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("halfmoonui");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("fonts");
    eleventyConfig.addCollection("rules_pages", (collection) =>
      collection.getFilteredByGlob("rules/*.md").sort((a, b) => {
        if (a.page.url > b.page.url) return -1;
        else if (a.page.url < b.page.url) return 1;
        else return 0;
      })
    );
    eleventyConfig.setNunjucksEnvironmentOptions({
      throwOnUndefined: true,
      autoescape: false, // warning: don’t do this!
    });
};