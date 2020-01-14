import { RuleSetLoader } from 'webpack'

export const babelLoader = (): RuleSetLoader => ({
	loader: 'babel-loader',
	options: {
		cacheDirectory: true,
		presets: [
			[
				'@babel/preset-env',
				{
					targets: {
						esmodules: true,
						node: true,
					},
				},
			],
			[
				'@babel/preset-typescript',
				{
					allExtensions: true,
				},
			],
		],
		plugins: [
			[
				'@babel/plugin-transform-runtime',
				{
					corejs: 3,
				},
			],
			'object-to-json-parse',
			'transform-remove-console',
		],
	},
})
