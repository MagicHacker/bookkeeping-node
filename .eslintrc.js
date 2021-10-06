/**
 * eslint配置
 */

module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
	},
	extends: ['eslint:recommended', 'plugin:node/recommended', 'prettier'],
	plugins: ['prettier'],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'prettier/prettier': 'error',
	},
};
