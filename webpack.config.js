const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  module: {
    rules: [
      { 
        test: /\.css$/i,
        use: [ 'style-loader', 'css-loader']
      }
    ]
  },
  optimization: {
    minimize: true,
  },
  output: {
    library: 'SwecoBettyBlocks',
    libraryExport: 'default',
    libraryTarget: 'umd',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
