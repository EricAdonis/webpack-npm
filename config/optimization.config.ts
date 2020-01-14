import TerserPlugin from 'terser-webpack-plugin'
import { Options } from 'webpack'

export const optimization = (): Options.Optimization => ({
	usedExports: true,
	moduleIds: 'hashed',
	minimizer: [
		new TerserPlugin({
			cache: true,
			parallel: true,
			terserOptions: {
				parse: { ecma: 8 },
				compress: { ecma: 5 },
				output: { ecma: 5 },
			},
		}),
	],
	minimize: true,
})
