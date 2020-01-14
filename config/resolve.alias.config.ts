import path from 'path'
import { Resolve } from 'webpack'

export const resolve = (): Partial<Resolve> => ({
	alias: {
		'@src': path.resolve(__dirname, '../src'),
	},
})
