import { ResolveOptions } from "webpack";
import { BuildPaths } from "./types/config";

export const buildResolvers = (paths: BuildPaths): ResolveOptions => {
    return {
        extensions: [".tsx", ".ts", ".js"],
        modules: [paths.src, "node_modules"],
        preferAbsolute: true,
    };
};
