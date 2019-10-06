const path = require('path');
const ConcatPlugin = require('webpack-js-concat-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname),
        filename: 'bundle.js'
    },
    devServer: {  
      contentBase: './',  
      port: 3000, 
      open: true
  } ,
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                }
            },
         { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },

            {
                test: /\.css$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpeg|jpg|svg|gif)$/i,
                use: [{
                    loader: "url-loader"
                }]
            }

        ]
    },
    plugins: [
        new ConcatPlugin()
    ]
};
