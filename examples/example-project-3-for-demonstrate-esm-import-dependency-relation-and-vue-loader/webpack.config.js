const path = require("path");
const { VueLoaderPlugin } = require("./node_modules/vue-loader");

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
					use: ["vue-style-loader", "css-loader"]
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
			// // https://github.com/ampedandwired/html-webpack-plugin
			// new HtmlWebpackPlugin({
			// 	filename: "./index.html",
			// 	template: "./src/public/index.template.html",
			// 	inject: true
			// })
			// make sure to include the plugin!
			new VueLoaderPlugin()
		]
	}
];
