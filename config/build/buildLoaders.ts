import webpack from "webpack";

export const buildLoaders = (): Array<webpack.RuleSetRule> => {
    const tsLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    return [tsLoader];
};
