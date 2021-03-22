// Modules
const path = require("path");
// Utils
const { APP_DIR } = require("./webpack/utils/constants");

module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		tsconfigRootDir: path.resolve(APP_DIR, "src"),
		project: path.resolve(APP_DIR, "./tsconfig.json"),
		sourceType: "module",
		allowImportExportEverywhere: false,
		codeFrame: false,
		ecmaFeatures: {
			jsx: true,
			experimentalObjectRestSpread: true,
		},
	},
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"airbnb-typescript",
		"plugin:import/typescript",
	],
	plugins: ["import", "react", "prettier", "promise"],
	rules: {
		"react/display-name": 0,
		"linebreak-style": 0,
		"import/prefer-default-export": "off",
		"import/no-extraneous-dependencies": "off",
		"no-param-reassign": "off",
		"no-shadow": "off",
		"react/prop-types": "off",
		"react-hooks/exhaustive-deps": "off",
	},
	env: {
		es2020: true,
		browser: true,
		node: true,
	},
	globals: {
		document: true,
		window: true,
		parent: true,
	},
};
