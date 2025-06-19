const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js', // путь к вашему главному файлу JavaScript
  output: {
    path: path.resolve(__dirname, 'build-webpack'), // путь к папке с собранным проектом
    filename: 'bundle.js',
  },
   devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true
  },
 module: {
    rules: [
      {
         test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  }
};