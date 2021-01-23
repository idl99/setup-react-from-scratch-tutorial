const path = require('path');

module.exports = {
    mode: "development",
    entry: './index.jsx',
    // This object contains the configuration for Webpack
    output: {
        // outputs the bundled file to the dist folder
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                // string regex that matches all javascript files in the project directory
                test: /\.(js|jsx)$/,
                // exclude the node modules folder
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // this object is equivalent to the babel.config.json file
                        "presets": [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ],
                        "comments": false
                    }
                }
            }
        ]
    }
}