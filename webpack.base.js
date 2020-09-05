const path = require('path');

module.exports = {
    // Tell webpack to run every file it run through
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    // presets: [
                    //     '@babel/preset-react',
                    //     ['@babel/preset-env', { targets: { browsers: ['last 2 versions'] } }]
                    // ]
                    presets: [
                        '@babel/preset-react',
                        ['@babel/preset-env', { "targets": { "browsers": ['last 2 versions'] } }],
                    ]
                }
            }
        ]
    }
}
