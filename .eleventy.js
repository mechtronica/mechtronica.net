module.exports = function(eleventyConfig) {
    const markdownIt = require('markdown-it')
    const markdownItAttrs = require('markdown-it-attrs')
    const markdownItOptions = {
      html: true,
      breaks: true,
      linkify: true
    }
    const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)
    eleventyConfig.addPassthroughCopy('halfmoonui');
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy('fonts');
    eleventyConfig.addPassthroughCopy('character-sheets/*.pdf');
    eleventyConfig.addPassthroughCopy('mechdb/core-parts.json');
    eleventyConfig.addPassthroughCopy('jsonpath-0.8.0.js');
    eleventyConfig.addPassthroughCopy('custom-variables.css');
    eleventyConfig.addPassthroughCopy('lore/planets.json');
    eleventyConfig.setNunjucksEnvironmentOptions({
      throwOnUndefined: true,
      autoescape: false, // warning: don’t do this!
    });
    eleventyConfig.setLibrary('md', markdownLib);
    eleventyConfig.addShortcode('keyword', function(word, glossary) {
      return '<b class="keyword" data-toggle="tooltip" data-title="' + glossary[word] + '">' + word + '</b>'
    });
    eleventyConfig.addFilter('getObjectsByAttribute', function(objects, attribute, value) {
      return objects.filter(function(obj) {
        return obj.getAttribute(attribute) == value
      });
    });
};