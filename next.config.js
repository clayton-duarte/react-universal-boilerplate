var routes = require('./routes');

module.exports = {
    distDir: 'dist',
    exportPathMap: function() {
        return routes
    },
    publicRuntimeConfig: {
        staticFolder: '/src/assets'
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
            options: {
                fix: true
            }
        });
        return config;
    }
}