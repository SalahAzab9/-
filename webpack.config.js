const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { loader } = require("mini-css-extract-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");


module.exports= {
    entry: "./src/index.js", 

    output: {
        publicPath :"/",  
        path: path.join(__dirname, 'dist'),
        filename: "js/index.js",
    },

    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        open: true,
        devMiddleware: {
                writeToDisk: true,
            },
        hot: false, 
      },

      performance: {
        maxAssetSize: 100000,
        maxEntrypointSize: 400000,
        hints: false,
      },

      optimization: {
        minimizer: [
          "...",
          new ImageMinimizerPlugin({
            minimizer: {
              implementation: ImageMinimizerPlugin.squooshMinify,
          },
          }),
        ],
      },
      module: {
        rules: [
          {
            test: /\.html$/i,
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
          
          {
            test:/\.(sa|sc|c)ss$/,
            use:[
                {
                  loader:MiniCssExtractPlugin.loader,
                  options:{
                    publicPath:"../",
                  }
                },
                "css-loader",
                "sass-loader"           
            ]
          },
          
          
          
          {
            test: /\.(eot|ttf|woff|woff2)$/,
            use: [
              {
                loader: 'file-loader',
                
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts',
                },
              },
            ],
          },

          {
            test: /\.(png|jpg|gif|json|xml|ico|svg)$/,
            use: [
              {
                loader: 'file-loader',
                
                options: {
                  name: '[name].[ext]',
                  outputPath: 'images',
                },
              },
            ],
          },

          {
            test: require.resolve("jquery"),
            loader: "expose-loader",
            options: {
              exposes: ["$","jquery","jQuery"],
          }
        },

        ],
      },

      plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new HtmlWebpackPlugin({
          filename: 'school-stars.html',
          template: 'src/school-stars.html'
        }),
        new HtmlWebpackPlugin({
          filename: 'school-stars-2.html',
          template: 'src/school-stars-2.html'
        }),
        new HtmlWebpackPlugin({
          filename: 'creat-account.html',
          template: 'src/creat-account.html'
        }),
        new HtmlWebpackPlugin({
          filename: 'sign-in.html',
          template: 'src/sign-in.html'
        }),
        new MiniCssExtractPlugin({
            filename : "sass/style.css"
        }),
        new OptimizeCssAssetsPlugin({}),
      ]   
}