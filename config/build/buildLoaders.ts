import * as webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const stylesLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean((
                            resPath.includes(".module")
                        )),
                        localIdentName: isDev
                            ? "[name]__[local]--[hash:base64:5]"
                            : "[hash:base64:8]",
                    },
                },
            },
            "sass-loader",
        ],

    };

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
        svgLoader,
        babelLoader,
        stylesLoader,
        typescriptLoader, // without ts-loader we would have to adjust babel
        fileLoader,
    ];
}
