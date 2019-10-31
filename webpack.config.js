const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

function resolve (dir) {
    return path.join(__dirname, dir)
  }

module.exports={

    mode: 'development',
    entry:[
        // 'react-hot-loader/patch',
        __dirname+"/src/index.js",
    ],
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    devtool: 'source-map',
    plugins:[
        new HtmlWebpackPlugin({
            // 用哪个html作为模板
            // 在src目录下创建一个index.html页面当做模板来用
            template: './src/index.html',
            hash: true, // 会在打包好的bundle.js后面加上hash串 
        }),
        new CleanWebpackPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(['dist']),
    ],
    devServer:{
        contentBase:path.join(__dirname, "dist"),
        compress: true,
        port: 3000,             // 端口
        open: true,             // 自动打开浏览器
        hot: true,               // 开启热更新
        overlay: true, // 浏览器页面上显示错误
        historyApiFallback: true
    },
    resolve: {
        // 别名
        alias: {
          pages:path.join(__dirname,'src/pages'),
          component:path.join(__dirname,'src/component'),
          actions:path.join(__dirname,'src/redux/actions'),
          reducers:path.join(__dirname,'src/redux/reducers'),
          '@': resolve('src'),
        },
        // 省略后缀
        extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.less']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react' ,'stage-3'],
                        plugins: ['react-hot-loader/babel'],
                    }
                },
                exclude: /node_modules/
            },
            // {
            //     test:/\.(js|jsx)$/,
            //     use: 'babel-loader',
            //     include: /src/,          // 只转化src目录下的js
            //     exclude: /node_modules/  // 排除掉node_modules，优化打包速度
            // },
            {
                test: /\.(css|less)$/,
                use: [
                  { loader: 'style-loader' },
                  {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    }
                  },
                  {
                      loader:"less-loader"
                  }
                ]
              }
        ]
    }
}