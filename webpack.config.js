const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue', '.ts'],
    root: path.resolve(__dirname),
    // for WebStorm
    alias: {
      '~': path.resolve(__dirname),
      '@': path.resolve(__dirname),
      'Sass': path.resolve(__dirname, './assets/sass/'),
      'Js': path.resolve(__dirname, './assets/Js/'),
      'Images': path.resolve(__dirname, './assets/images/'),
    }
  }
};
