var webpack = require("webpack");
module.exports = {
    entry: [
        'script!node_modules/jquery/dist/jquery.min.js', 'script!node_modules/foundation-sites/dist/js/foundation.min.js', './app/app.jsx'
    ],
    externals: {
        jquery: "jQuery"
    },
    plugins: [new webpack.ProvidePlugin({"$": "jquery", "jQuery": "jquery"})],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: "app/components/Main.jsx",
            Nav: "app/components/Nav.jsx",
            Weather: "app/components/Weather.jsx",
            About: "app/components/About.jsx",
            Examples: "app/components/Examples.jsx",
            WeatherForm: "app/components/WeatherForm.jsx",
            WeatherMsg: "app/components/WeatherMsg.jsx",
            OpenWeather: "app/api/OpenWeather.jsx",
            ErrorModal: "app/components/ErrorModal.jsx"
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: "cheap-module-eval-source-map"
};