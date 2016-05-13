var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: __dirname + "/src",
    entry: {
            index: "./index.jsx"
        },
    output: {
            filename: "[name].js",
            path: __dirname + "/lib"
        },

  "scripts": {
    "test": "jest",
    "start": "webpack-dev-server --hot --inline --colors --progress"
  },
  plugins : [
    new CopyWebpackPlugin([
          { from: 'index.html', to: 'index.html' }
        ])

  ],
  externals: {
      // Use external version of React
      "react": "React",
      "react-dom": "ReactDOM"
  },
  module: {

      loaders: [
          { test: /\.(js|jsx)$/, exclude: /node_modules/, loaders:  ["react-hot", "babel?presets[]=es2015&presets[]=stage-0&presets[]=react"] },
          { test: /\.css$/, loader: "style-loader!css-loader" },
          { test: /\.html$/, loader: "file?name=[name].[ext]" },
          { test: /\.(png|jpg|jpeg|gif|woff)$/, loader: 'url-loader?limit=8192' }
      ]
    }
};
