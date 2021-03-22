const APP_DIR = process.cwd();

const ASSETS_FOLDER = "assets";
const SOURCE_FOLDER = "src";
const PUBLIC = "public";
const BUILD_FOLDER = "build";

const DEVELOPMENT = "development";
const PRODUCTION = "production";
const { NODE_ENV } = process.env;
const ENV_LIST = [DEVELOPMENT, PRODUCTION];
const VALID_NODE_ENV =
	NODE_ENV && ENV_LIST.includes(NODE_ENV) ? NODE_ENV : PRODUCTION;
const IS_DEVELOPMENT = NODE_ENV === DEVELOPMENT;
const IS_PRODUCTION = NODE_ENV === PRODUCTION;

module.exports = {
	APP_DIR,
	ASSETS_FOLDER,
	SOURCE_FOLDER,
	PUBLIC,
	BUILD_FOLDER,

	DEVELOPMENT,
	PRODUCTION,
	NODE_ENV,
	ENV_LIST,
	VALID_NODE_ENV,
	IS_DEVELOPMENT,
	IS_PRODUCTION,
};
