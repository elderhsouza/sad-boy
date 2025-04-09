/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | SortImportsConfig } */
const config = {
	singleQuote: true,
	tabWidth: 2,
	printWidth: 100,
	plugins: ['@ianvs/prettier-plugin-sort-imports'],
	importOrder: [
		'<TYPES>',
		'<THIRD_PARTY_MODULES>',
		'',
		'<TYPES>^[.|..|~]',
		'^~/',
		'^[../]',
		'^[./]',
	],
	importOrderParserPlugins: ['typescript'],
	importOrderTypeScriptVersion: '5.8.2',
};

export default config;

// "prettier": {
// 		"singleQuote": true,
// 		"printWidth": 80
// 	}
