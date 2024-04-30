// * - тк некоторые из библиотек не поддерживают default (import)
import * as path from "path";
import webpack from "webpack";
import { buildStylesLoader } from "../build/loaders/buildStylesLoader";
import { BuildPaths } from "../build/types/config";

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        entry: "",
        build: "",
        html: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push(".ts", ".tsx");

    config.module.rules.push(buildStylesLoader(true));

    return config;
};
