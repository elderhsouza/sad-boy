/// <reference types="./eslint.types.d.ts" />
import path from 'node:path';
import { includeIgnoreFile } from '@eslint/compat';
import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';

/** @type {import('typescript-eslint').Config} */
export default [
	{ ignores: [] },
	...tseslint.config(
		includeIgnoreFile(path.join(import.meta.dirname, './.gitignore')),
		{ ignores: ['**/*.config.*'] },
		{
			files: ['**/*.js', '**/*.ts'],
			plugins: {
				import: importPlugin,
			},
			extends: [
				eslint.configs.recommended,
				...tseslint.configs.recommended,
				...tseslint.configs.recommendedTypeChecked,
				...tseslint.configs.stylisticTypeChecked,
			],
			rules: {
				'@typescript-eslint/no-unused-vars': [
					'error',
					{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
				],
				'@typescript-eslint/consistent-type-imports': [
					'warn',
					{ prefer: 'type-imports', fixStyle: 'separate-type-imports' },
				],
				'@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
				'@typescript-eslint/no-misused-promises': [2, { checksVoidReturn: { attributes: false } }],
				'@typescript-eslint/no-unnecessary-condition': [
					'error',
					{ allowConstantLoopConditions: true },
				],
				'@typescript-eslint/no-non-null-assertion': 'error',
				'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
			},
			linterOptions: { reportUnusedDisableDirectives: true },
			languageOptions: { parserOptions: { projectService: true } },
		},
	),
];
