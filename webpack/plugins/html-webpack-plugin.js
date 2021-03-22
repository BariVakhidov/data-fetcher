const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { ASSETS_FOLDER } = require("../utils/constants");

const options = {
	title: "Data fetcher",
	template: path.join(ASSETS_FOLDER, "template/index.html"),
};

const getHtmlWebpackPlugin = () => {
	return new HtmlWebpackPlugin(options);
};

module.exports = {
	getHtmlWebpackPlugin,
};
