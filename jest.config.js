/** @type {import('jest').Config} */
const config = {
	preset: 'ts-jest',
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	transform: {
		'^.+\\.tsx?$': ['ts-jest', {
			useESM: true
		}]
	},
	moduleNameMapper: {
		'^(\\.{1,2}/.*)\\.js$': '$1',
	},
	moduleFileExtensions: [
		'ts',
		'tsx',
		'js',
		'jsx',
		'json',
		'd.ts'
	],
	projects: [
		'<rootDir>/packages/next/jest.config.js',
		'<rootDir>/packages/react/jest.config.js'
	]
};

export default config;
