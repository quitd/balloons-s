const Papa = require('papaparse');

module.exports = eleventyConfig => {
  eleventyConfig.addDataExtension("csv", contents => Papa.parse(contents.trim()).data)
};
