const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
	{
		entry: {
			index: "./example.js"
		},
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "[name].bundle.js",
			chunkFilename: "[name].chunk.js" // 指定非入口js文件的名称
		},
		mode: "production",
		optimization: {
			minimize: false,
		}
	}
];
