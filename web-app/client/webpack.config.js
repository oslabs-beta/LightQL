const path = require('path');
const HTMLWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    
    output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html'
		})
	],
	module: {
		rules: [
			{
				test: /.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			  },
		]
	}
}