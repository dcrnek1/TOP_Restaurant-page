const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: "./dist",
    watchFiles: './',
    liveReload: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "Restaurant page",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
