// * - тк некоторые из библиотек не поддерживают default (import)
import * as path from "path";
import webpack, { DefinePlugin, RuleSetRule } from "webpack";
import { buildStylesLoader } from "../build/loaders/buildStylesLoader";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";
import { BuildPaths } from "../build/types/config";

export default ({ config }: {config: webpack.Configuration}) => {
    // const paths: BuildPaths = {
    //     entry: "",
    //     build: "",
    //     html: "",
    //     src: path.resolve(__dirname, "..", "..", "src"),
    // };
    config.resolve.modules.push("../../src");
    config.resolve.extensions.push(".ts", ".tsx");

    /* eslint no-param-reassign: "error" */
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/ };
        }
        return rule;
    });

    config.module.rules.push(buildSvgLoader());

    config.module.rules.push(buildStylesLoader(true));

    config.plugins.push(new DefinePlugin({
        __IS_DEV__: true,
    }));

    return config;
};
