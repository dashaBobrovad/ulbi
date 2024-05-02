import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildStylesLoader } from "./loaders/buildStylesLoader";
import { buildSvgLoader } from "./loaders/buildSvgLoader";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    // babel уже включен в ts
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-react",
                ],
                plugins: [
                    ["i18next-extract", { // optional
                        locales: [
                            "ru",
                            "en",
                        ],
                        keyAsDefaultValue: [
                            "en",
                        ],
                    }],
                ],
            },
        },
    };

    return [
        // order is important
        buildSvgLoader(),
        babelLoader,
        buildStylesLoader(isDev),
        typescriptLoader, // without ts-loader we would have to adjust babel
        fileLoader,
    ];
}
