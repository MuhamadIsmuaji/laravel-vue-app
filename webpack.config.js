"use strict";

let webpack = require('webpack')
let path = require('path')

module.exports = {
	entry: {
		app: './resources/assets/js/app.js',
		vendor: ['vue', 'axios']
	},

	output: {
		// destination folder
		path: path.resolve(__dirname, 'public/js'),
		
		// destination file name
		filename: '[name].js',

		// cdn etc
		publicPath: './public'
	},

	module: {
		rules: [
			{
				test: /\.js$/, // test any js file
				exclude: /node_modules/,
				loader: 'babel-loader',
			}
		]
	},

	resolve: {
    	alias: {
      		'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    	}
  	},

  	plugins: [
  		new webpack.optimize.CommonsChunkPlugin({
  			names: ['vendor']
  		})
  	]
};

if (process.env.NODE_ENV === 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			sourcemap: true,
			compress: {
				warnings: false,
			}
		})
	)
}