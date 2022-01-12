module.exports = {
	'env': {
		'browser': true,
		'jest': true,
		'es2020': true
	},
	'extends': [
		"airbnb",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:react-hooks/recommended"
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true,
			"modules": true,
			"experimentalObjectRestSpread": true
		},
		'ecmaVersion': 12,
		'sourceType': 'module',
		"project": "tsconfig.json"
	},
	'plugins': [
		"react",
		"jsx-a11y",
		"import",
		"@typescript-eslint"
	],
	"settings": {
		"import/parsers": {
			"@typescript-eslint/parser": [
				".ts",
				".tsx"
			],
		},
		"import/resolver": {
			"typescript": {
				"alwaysTryTypes": true
			},
		},
	},
	"rules": {
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],
		"react/prop-types": "off",
		"no-use-before-define": "off",
		"@typescript-eslint/no-use-before-define": ["error"],
		"import/extensions": "off",
		"no-shadow": "off",
		"@typescript-eslint/no-shadow": ["error"],
		"arrow-parens": [
			"error",
			"always"
		],
		"react/jsx-filename-extension": "off",
		"max-len": ["error", { "code": 120 }],
		"@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "import/prefer-default-export": "off"
  }
};
