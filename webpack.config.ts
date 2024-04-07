// * - тк некоторые из библиотек не поддерживают default (import)
import * as path from 'path';
import * as webpack from 'webpack';
import { BuildPaths } from "./config/build/types/config";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode = "development";
const isDev = mode === "development";

const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths: paths,
    isDev
});


export default config;
