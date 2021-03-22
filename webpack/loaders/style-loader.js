// Modules
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// Utils
const { IS_DEVELOPMENT } = require("../utils/constants");

const styleLoader = {
	loader: "style-loader",
};

const miniCssLoader = {
	loader: MiniCssExtractPlugin.loader,
	options: {
		esModule: true,
	},
};

const loader = IS_DEVELOPMENT ? styleLoader : miniCssLoader;

const getStyleLoader = () => {
	return loader;
};

module.exports = { getStyleLoader };
