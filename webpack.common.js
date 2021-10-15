const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path : path.join(__dirname, '/dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 변환되어야 하는 파일 형태
        exclude: "/node_modules/",            // 요기는 제외
        use: {                                // 변환하기 위해 어떤 loader 사용?
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env','@babel/react']  // loader에서 사용할 옵션 브라우저별 변환/ react 변환
          }
        }
      },
      {
        test: /\.s?css$/,
        exclude: "/node_modules/",
        use: [
          {
            loader: "style-loader"  // html태그에 직접 붙여줌
          },
          {
            loader: "css-loader",   // js에서 css를 import형식으로 사용할수 있게
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/views/index.html",
    }),
  ]
};