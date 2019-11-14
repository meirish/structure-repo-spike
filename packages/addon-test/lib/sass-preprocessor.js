const sass = require("sass");
const eyeglass = require("eyeglass");

module.exports = function scssPreprocessor(file, data, _configuration, _sourceMap) {
  return new Promise((resolve, reject) => {
    const sassOptions = {
      file,
      data,
      outputStyle: "expanded",
      sourceMap: true,
      outFile: file,
      eyeglass: {},
    };
    sass.render(eyeglass(sassOptions), (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve({
          content: res.css.toString(),
          sourceMap: res.map.toString(),
          dependencies: [],
        })
      };
    });
  })
};
