const path = require('path');

module.exports = {
  entry: {
    app: './js/flights.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/flights.js',
  },
};
