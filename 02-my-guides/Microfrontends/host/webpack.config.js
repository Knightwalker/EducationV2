const { container: { ModuleFederationPlugin } } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devServer: {
        port: 3000,
        historyApiFallback: true, /* required for react-router-dom, because it uses HTML5 History API */
    },
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
            name: "host",
            remotes: {
                LandingModule: "LandingModule@http://localhost:3001/remoteEntry.js",
                DashboardModule: "DashboardModule@http://localhost:3002/remoteEntry.js"
            },
            shared: ["react", "react-dom"]
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}