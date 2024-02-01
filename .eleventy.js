const { nunjucks } = require("nunjucks");

module.exports = function(eleventyConfig) {
  // Configure markdown-it plugins
  const markdownIt = require('markdown-it')
  const markdownItAnchor = require('markdown-it-anchor')
  const markdownItAttrs = require('markdown-it-attrs')
  const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true
  }
  const mdLib = markdownIt(markdownItOptions).use(markdownItAttrs).use(markdownItAnchor)
  eleventyConfig.setLibrary('md', mdLib);

  // Enable SVG templating
  eleventyConfig.addTemplateFormats('svg');
  eleventyConfig.addExtension('svg', {
    outputFileExtension: 'svg',
    key: 'html'
  });

  // Export css and js artifacts
  eleventyConfig.addPassthroughCopy('halfmoonui');
  eleventyConfig.addPassthroughCopy('jsonpath-0.8.0.js');
  eleventyConfig.addPassthroughCopy('custom-variables.css');
  eleventyConfig.addPassthroughCopy({'mechdb/mechdb.js': 'mechdb.js'});

  // Export character sheets
  eleventyConfig.addPassthroughCopy('character-sheets/*.pdf');

  // Export MechDB artifacts
  eleventyConfig.addPassthroughCopy({'_data/parts.json': 'mechdb/parts.json'});
  eleventyConfig.addPassthroughCopy({'_data/planets.json': 'lore/planets.json'});

  // Export images
  eleventyConfig.addPassthroughCopy('images/*.svg');
  eleventyConfig.addPassthroughCopy('images/planets/*.svg');
  
  // ???
  eleventyConfig.setNunjucksEnvironmentOptions({
    throwOnUndefined: true
  });

  // Custom shortcodes
  eleventyConfig.addShortcode('keyword', function(word, glossary) {
    return '<b class="keyword" onclick="halfmoon.initStickyAlert({content: \'' + glossary[word] + '\', title: \'' + word + '\', hasDismissButton: true, timeShown: 5000});">' + word + '</b>'
  });

  // Custom filters
  eleventyConfig.addFilter('getObjectsByAttribute', function(objects, attribute, value) {
    return objects.filter((obj) => obj[attribute] == value);
  });

  return {
    htmlTemplateEngine: 'njk'
  }
};