const path = require('path');
const HTMLWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    
    output: {
		path: path.join(__dirname, '/dist'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	
	devServer: {
		hot: true,
		proxy: {
		  '/api/**': {
			target: 'http://localhost:3000',
			secure: false,
		  },
		},
		compress: true,
		port: 8080,
		static: {
		  // match the output path
		  directory: path.resolve(__dirname, 'dist'),
		  // match the output 'publicPath'
		  publicPath: '/',
		},
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