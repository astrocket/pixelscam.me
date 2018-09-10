const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push(
      {
        test: /\.less$/,
        use: [
          {
            loader: (!isServer && dev) ? 'style-loader' : MiniCssExtractPlugin.loader
           },
          { loader: "css-loader" },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        issuer: {
          exclude: /\.less$/,
        },
      },
      {
        test: /\.scss$/,
        issuer: /\.less$/,
        use: {
          loader: './config/sassToLess.js'
        }
      },
    );

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].css',
      })
    )

    return config
  }
}
