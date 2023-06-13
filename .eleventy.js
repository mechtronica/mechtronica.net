const { nunjucks } = require("nunjucks");

module.exports = function(eleventyConfig) {
    const markdownIt = require('markdown-it')
    const markdownItAttrs = require('markdown-it-attrs')
    const markdownItOptions = {
      html: true,
      breaks: true,
      linkify: true
    }
    eleventyConfig.addTemplateFormats('svg');
    eleventyConfig.addExtension('svg', {
      outputFileExtension: 'svg',
      key: 'html'
      /*compile: async (inputContent) => {
        let output = nunjucks.renderString(inputContent)
        return async () => {
          return output;
        };
      }*/
    });
    const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)

    eleventyConfig.addPassthroughCopy('halfmoonui');
    eleventyConfig.addPassthroughCopy('jsonpath-0.8.0.js');
    eleventyConfig.addPassthroughCopy('custom-variables.css');

    eleventyConfig.addPassthroughCopy('character-sheets/*.pdf');

    eleventyConfig.addPassthroughCopy({'_data/parts.json': 'mechdb/parts.json'});
    eleventyConfig.addPassthroughCopy({'_data/planets.json': 'lore/planets.json'});
    
    eleventyConfig.setNunjucksEnvironmentOptions({
      throwOnUndefined: true
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
    return {
      htmlTemplateEngine: 'njk'
    }
};