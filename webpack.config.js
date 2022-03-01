const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { loader } = require("mini-css-extract-plugin");

module.exports= {
    entry: "./src/index.js", 

    output: {
        publicPath :"",  
        path: path.join(__dirname, '/dist'),
        filename: "index.js",
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
         
      },

      module: {
        rules: [
          {
            test: /\.html$/i,
            loader: "html-loader",
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
            test: /\.(eot|svg|ttf|woff|woff2)$/,
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

        ],
      },
      optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
      },

      plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename : "sass/style.css"
        })


      ]
      
}