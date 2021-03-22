const getCssLoader = () => {
	const loader = {
		loader: "css-loader",
		options: {
			sourceMap: true,
			esModule: true,
			importLoaders: 1,
			modules: true,
		},
	};

	return loader;
};

module.exports = { getCssLoader };
