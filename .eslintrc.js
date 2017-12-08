module.exports = {
	// extends: 'airbnb',
	plugins: ['prettier'],
	rules: {
		'react/jsx-filename-extension': 'off',
		'react/no-array-index-key': 'off',
	},
	globals: {
		fetch: false,
	},
};
