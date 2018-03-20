const withTM = require('@weco/next-plugin-transpile-modules')
const routes = require('./routes');

module.exports = withTM({
    distDir: 'dist',
    //
    transpileModules: ['gridx'],
    //
    exportPathMap: function() {
        return routes
    },
    //
    publicRuntimeConfig: {
        staticFolder: '/src/assets'
    },
    //
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
});