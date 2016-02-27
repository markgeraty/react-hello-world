import webpack from 'webpack';
import { resolve } from 'path';

const BUILD_DIR = resolve (__dirname, 'dist');
const APP_DIR = resolve (__dirname, 'src');

export default {
  entry: [
    resolve (APP_DIR, 'index.html'),
    resolve (APP_DIR, 'index.jsx')
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        loader : 'babel'
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
    ]
  }
};
