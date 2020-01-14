import path from 'path'
import { Configuration } from 'webpack'

import { optimization } from './optimization.config'
import { optimizePlugins } from './plugins.config'
import { resolve } from './resolve.alias.config'
import { babelLoader } from './loader.config'

export const basicConfig = (): Configuration => ({
	cache: true,
	target: 'node',
	mode: 'production',
	entry: [path.resolve(__dirname, '../src/index.ts')],
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'index.js',
		libraryTarget: 'commonjs2',
	},
	optimization: optimization(),
	plugins: optimizePlugins(),
	resolve: {
		extensions: ['.ts', '.js', '*'],
		alias: {
			...resolve().alias,
		},
	},
	performance: {
		hints: false,
	},
	node: {
		module: 'empty',
		dgram: 'empty',
		dns: 'mock',
		fs: 'empty',
		http2: 'empty',
		net: 'empty',
		tls: 'empty',
	},
	module: {
		rules: [
			{
				test: /\.(js|ts)/,
				exclude: /(node_modules)/,
				use: [babelLoader()],
			},
		],
	},
})
