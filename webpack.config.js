const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * Building config using function,
 * function parameter env='production' or 'development'
 */
module.exports = (env) => {
  const config = {};

  const isDevelopment = env === 'development';
  const isProduction = env === 'production';

  const pluginCopyStaticCommon = new CopyWebpackPlugin([
    {
      from: 'static/common', to: '.'
    }
  ]);
  const pluginCopyAssets = new CopyWebpackPlugin([
    {
      from: 'src/assets', to: './assets'
    }
  ]);
  const pluginCleanWebpack = new CleanWebpackPlugin();

  config.entry = [ './src/index' ];

  config.output = {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  };

  config.resolve = {
    extensions: ['.js', '.jsx']
  };

  config.module = {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: '/node_modules/'
      },
      {
        test: /\.md/,
        use: 'raw-loader'
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2|gif|png)$/,
        loader: 'file-loader',
      },      
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
            },
          }
        ],
      },
    ]
  };

  if (isProduction) {
    config.mode = 'production';
    const pluginCopyStaticProd = new CopyWebpackPlugin([
      {
        from: 'static/prod', to: '.'
      }
    ]);
    config.plugins = [
      pluginCopyStaticCommon,
      pluginCopyAssets,
      pluginCopyStaticProd,
      pluginCleanWebpack
    ];
  }

  if (isDevelopment) {
    config.mode = 'development';
    config.devtool = 'inline-source-map';
    const pluginCopyStaticDev = new CopyWebpackPlugin([
      {
        from: 'static/dev', to: '.'
      }
    ]);
    config.plugins = [
      pluginCopyStaticCommon,
      pluginCopyAssets,
      pluginCopyStaticDev,
      pluginCleanWebpack
    ];
  }

  return config;
};
