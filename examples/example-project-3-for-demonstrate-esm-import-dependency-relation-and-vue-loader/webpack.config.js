const path = require("path");
const { VueLoaderPlugin } = require("./node_modules/vue-loader");
// const SplitChunkPlugin = require("../../lib/optimize/SplitChunksPlugin");
const HtmlWebpackPlugin = require("./node_modules/html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
	{
		entry: {
			index: "./example.js"
		},
		output: {
			publicPath: "./",
			path: path.resolve(__dirname, "dist"),
			filename: "[name].bundle.js",
			chunkFilename: "[name].chunk.js" // 指定非入口js文件的名称
		},
		mode: "production",
		optimization: {
			minimize: false
		},
		module: {
			rules: [
				{
					test: /\.png$/,
					use: [
						// {
						// 	loader: 'raw-loader'
						// },
						{
							loader: "file-loader",
							options: {
								name(file) {
									if (process.env.NODE_ENV === "development") {
										return "[path][name].[ext]";
									}

									return "[hash].[ext]";
								}
							}
						}
					]
				},
				{
					test: /\.css$/,
					use: ["vue-style-loader", MiniCssExtractPlugin.loader, "css-loader"]
				},
				{
					test: /\.vue$/,
					use: [
						{
							loader: "vue-loader",
							options: {
								name(file) {
									if (process.env.NODE_ENV === "development") {
										return "[path][name].[ext]";
									}

									return "[hash].[ext]";
								}
							}
						}
					]
				}
			]
		},
		plugins: [
			// new CleanWebpackPlugin(),
			new MiniCssExtractPlugin(),
			// // https://github.com/ampedandwired/html-webpack-plugin
			new HtmlWebpackPlugin({
				filename: "./index.html",
				template: "./src/index.template.html",
				inject: true
			}),
			// make sure to include the plugin!
			new VueLoaderPlugin()
			// new SplitChunkPlugin({
			// 	maxSize: 8192
			// })
		]
	}
];
