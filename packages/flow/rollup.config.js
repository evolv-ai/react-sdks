// import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
// import babel from "@rollup/plugin-babel";
import generateDeclarations from 'rollup-plugin-generate-declarations';

import pkg from './package.json';

export default [
	{
		input: 'src/index.ts', // our source file
		output: [
			{
				file: pkg.main,
				format: 'cjs'
			},
			{
				file: 'dist/index.js',
				format: 'iife',
				name: 'evolvFlow',
				sourcemap: 'inline'
			},
			{
				file: pkg.module,
				format: 'esm', // the preferred format
			}
		],
		external: [
			...Object.keys(pkg.dependencies || {})
		],
		watch: {
			clearScreen: false
		},
		plugins: [
			typescript(),
			generateDeclarations(),
			terser({
				ecma: 5,
				module: true,
				compress: {
					passes: 3,
					keep_fargs: true,
					keep_classnames: true,
					keep_fnames: true,
					side_effects: true,
					pure_funcs: [
						'console.debug',
						'this.logger.debug'
					]
				},
				mangle: {
					keep_classnames: true,
					keep_fnames: true,
					module: true
				}
			}) // minifies generated bundles
		]
	},
	// {
	// 	input: 'src/index.ts',
	// 	output: [
	// 		{
	// 			file: pkg.types,
	// 			format: 'esm'
	// 		}
	// 	],
	// 	plugins: [
  //     // babel({ babelHelpers: 'bundled' }),
	// 		typescript({
  //       tsconfig: 'tsconfig.json'
  //     })
	// 	]
	// },
];
