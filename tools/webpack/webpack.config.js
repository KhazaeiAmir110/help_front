const path = require('path');

module.exports = {
    entry: './src/index.js', // Your entry point
    output: {
        filename: 'bundle.js', // Output bundle name
        path: path.resolve(__dirname, 'dist') // Output directory
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, // Exclude certain directories
                use: {
                    loader: 'babel-loader', // Example loader
                    options: {
                        presets: ['@babel/preset-env'], // Example options
                    }
                }
            },
            // Add more rules here as needed
        ]
    },
    resolve: {
        extensions: ['.js'], // Extensions to resolve
    },
    // other configurations...
};
