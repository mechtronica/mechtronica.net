module.exports = function(eleventyConfig) {
    const markdownIt = require('markdown-it')
    const markdownItAttrs = require('markdown-it-attrs')
    const markdownItOptions = {
      html: true,
      breaks: true,
      linkify: true
    }
    const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)
    eleventyConfig.addPassthroughCopy("halfmoonui");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("fonts");
    eleventyConfig.addPassthroughCopy("mechdb/data");
    eleventyConfig.addPassthroughCopy("jsonpath-0.8.0.js");
    eleventyConfig.addPassthroughCopy("custom-variables.css");
    eleventyConfig.setNunjucksEnvironmentOptions({
      throwOnUndefined: true,
      autoescape: false, // warning: don’t do this!
    });
    eleventyConfig.setLibrary('md', markdownLib);
    eleventyConfig.addShortcode("link", function(page_name) 
    {  
      return `
      `
    });
};