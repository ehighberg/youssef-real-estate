module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.png$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    }
}