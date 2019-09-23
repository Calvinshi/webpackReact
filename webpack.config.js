module.exports={
    entry:__dirname+"/src/index.jsx",
    output:{
        path:__dirname+"/src",
        filename:'bundle.js'
    },
    devServer:{
        contentBase:"./src"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
}