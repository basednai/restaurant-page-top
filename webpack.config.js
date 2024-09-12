// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { web } = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    allowedHosts: "all",
    static: './dist',
    // watchFiles: ["./src/template.html"]
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      favicon: '',
    }),
  ],
 
};
