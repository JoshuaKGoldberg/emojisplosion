const path = require('path');

module.exports = {
    entry: {
        easy: "./src/mains/easy.ts",
        global: "./src/mains/global.ts",
        onclick: "./src/mains/onclick.ts",
        size: "./src/mains/size.ts",
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts"]
    },
    output: {
        path: path.resolve(__dirname, "lib")
    }
};
