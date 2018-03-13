
module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
    }
  },
  // webpack(config, { dev }) {
  //   const eslintRules = {
  //     test: /\.(jsx|js)$/,
  //     enforce: 'pre',
  //     exclude: /node_modules/,
  //     loader: require.resolve('eslint-loader'),
  //     options: {
  //       configFile: './.eslintrc',
  //       formatter: require.resolve('react-dev-utils/eslintFormatter'),
  //       eslintPath: require.resolve('eslint'),
  //       fix: true
  //     }
  //   }
  //   config.module.rules.unshift( //execute linter before babel
  //     eslintRules
  //   );
  //   return config;
  // }
}
