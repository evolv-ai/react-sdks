/** @type {import('jest').Config} */
const config = {
	roots: ['src'],
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	transform: {
		'^.+\\.tsx?$': ['ts-jest', {
			useESM: true
		}]
	},
	moduleNameMapper: {
		'^(\\.{1,2}/.*)\\.js$': '$1',
	},
	extensionsToTreatAsEsm: ['.ts', '.tsx'],
	moduleFileExtensions: [
		'ts',
		'tsx',
		'js',
		'jsx',
		'json',
		'd.ts'
	]
};

export default config;
