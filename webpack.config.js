const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './client/src/index.jsx',

	watch: true,
	devServer: {
		inline: true
	},
	//Add sass-loader
	module: {
		rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
			{
				test: /\.(scss)$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'sass-loader'
				}, {
					loader: 'postcss-loader',
					options: {
						plugins: function () {
							return [ require('autoprefixer')]
						}
					}
				}]
			}
		]
	},
	resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: `${__dirname}/client/public`,
    publicPath: '/',
    filename: 'bundle.js',
	},
	plugins: [
    // new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './public',
    // hot: true,
  },
}
