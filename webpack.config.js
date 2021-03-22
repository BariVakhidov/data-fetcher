const path = require("path");
const { getCssLoader } = require("./webpack/loaders/css-loader");
const { getStyleLoader } = require("./webpack/loaders/style-loader");
const {
	getHtmlWebpackPlugin,
} = require("./webpack/plugins/html-webpack-plugin");
const {
	getMiniCssExtractPlugin,
} = require("./webpack/plugins/mini-exstract-css");
const { NODE_ENV, PRODUCTION } = require("./webpack/utils/constants");

module.exports = {
	mode: NODE_ENV || PRODUCTION,
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js",
		publicPath: "/",
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: [path.resolve(__dirname, "node_modules")],
				loader: "ts-loader",
			},
			{
				test: /\.s[ac]ss$/i,
				use: [getStyleLoader(), getCssLoader(), "sass-loader"],
			},
			{
				test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
				type: "asset",
			},
		],
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	plugins: [getHtmlWebpackPlugin(), getMiniCssExtractPlugin()],
};
