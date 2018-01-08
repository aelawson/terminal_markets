import path from 'path';

module.exports = {
  entry: path.resolve(__dirname, 'src/stocks.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  target: 'node'
};