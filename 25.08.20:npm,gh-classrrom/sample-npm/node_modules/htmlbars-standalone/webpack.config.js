var path = require('path');
var webpack = require('webpack');

module.exports = {

	output: {
		filename: 'htmlbars.js',
		libraryTarget: 'umd',
		library: 'HTMLBars'
	},

	'externals': {
		
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]	
	},

	plugins: [
		
	]
};