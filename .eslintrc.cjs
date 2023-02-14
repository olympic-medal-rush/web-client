/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:vue/recommended', 'prettier'],
	plugins: ['prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'no-tabs': 'off',
		'no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
			},
		],
		'no-var': 'error',
		'prettier/prettier': 'warn',
		'no-console': 'warn',
		'no-return-await': 'error',
		'no-unreachable': 'warn',
		eqeqeq: 'error',
		'require-await': 'error',
		'accessor-pairs': 'error',
		'no-eval': 'error',
		'no-unneeded-ternary': 'error',
		'prefer-const': 'warn',
	},
};
