const scssPreprocessor = require('./sass-preprocessor');

module.exports = {
  parserOpts: {
    preprocessors: {
      scss: scssPreprocessor
    }
  }
}
