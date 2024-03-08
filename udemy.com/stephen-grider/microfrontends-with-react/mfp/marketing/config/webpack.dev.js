const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");

const devConfig = {
    mode: "development",
    devServer: {
        port: 8081,
        historyApiFallback: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "marketing",
            filename: "remoteEntry.js",
            exposes: {
                "./Marketing": "./src/bootstrap",
            },
            shared: ["react", "react-dom"]
        })
    ]
}

module.exports = merge(commonConfig, devConfig);