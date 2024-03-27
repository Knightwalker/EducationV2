const { container: { ModuleFederationPlugin } } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devServer: {
        port: 3001
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-react", { runtime: "automatic" }],
                            ["@babel/preset-env"]
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "LandingModule",
            filename: "remoteEntry.js",
            exposes: {
                "./App": "./src/bootstrap"
            },
            shared: ["react", "react-dom"]
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
};