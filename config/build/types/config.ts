type BuildMode = "development" | "production";

export type BuildPaths = {
    entry: string;
    build: string;
    html: string;
    src: string;
};

export type BuildOptions = {
    mode: BuildMode;
    isDev: boolean;
    paths: BuildPaths;
    port: number;
};

export type buildEnv = {
    mode: BuildMode;
    port: number;
};
