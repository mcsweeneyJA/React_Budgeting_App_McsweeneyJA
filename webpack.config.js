const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//entry point
//output path is where the single webpack file is output to

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExctract = new ExtractTextPlugin('styles.css');
    console.log('env', env)
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExctract.extract({
                    use:[
                        {
                            loader:'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader:'sass-loader',
                            options: {
                                sourceMap: true
                            }

                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExctract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    };
}

