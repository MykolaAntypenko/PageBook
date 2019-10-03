const path = require('path');
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const ConcatPlugin = require('webpack-js-concat-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname),
        filename: 'bundle.js'
    },
    devServer: {  // configuration for webpack-dev-server
      contentBase: './',  //source of static assets
      port: 3000, // port to run dev-server,
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
            {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
            // {
            //     test: /\.js$/,
            //     exclude: /(node_modules)/,
            //     loader: "eslint-loader"

            // },

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
