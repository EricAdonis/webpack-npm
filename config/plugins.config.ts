import { Plugin } from 'webpack'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import WebpackBar from 'webpackbar'

export const defaultPlugin = (): Partial<Plugin[]> => [
	new ForkTsCheckerWebpackPlugin(),
	new WebpackBar(),
]

export const optimizePlugins = (): Plugin[] => [...defaultPlugin()]
