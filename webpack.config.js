const path = require('path');

module.exports = {
  entry: {
    cast_and_crew: '../cast-and-crew/client/src/index.js',
    reviews: '../reviews/client/src/index.jsx',
    FeaturedFilm: '../FeaturedFilm/client/src/index.jsx'
  },
  output: {
    path: path.join(__dirname, '/public/'),
    filename: '[name]_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](styled-components|react|react-dom)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        }
      }
    }
  },
  resolve: {
    alias: {
      'styled-components': path.resolve(__dirname, "node_modules", "styled-components"),
    }
  }
};
