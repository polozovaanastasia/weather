import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export const buildWebpackConfig = (
    options: BuildOptions
): webpack.Configuration => {
    const { mode, isDev, paths } = options;
    return {
        mode: mode,
        entry: paths.entry,
        devtool: isDev ? "inline-source-map" : false,
        devServer: isDev ? buildDevServer(options) : undefined,
        output: {
            filename: "[name].[contenthash].js", // contenthash, чтобы избежать проблем с кэшированием.
            path: paths.build,
            clean: true,
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(paths),
        plugins: buildPlugins(paths),
    };
};
