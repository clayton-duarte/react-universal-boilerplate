module.exports = [
  {
    test: /\.(js|jsx)$/,
    enforce: 'pre',
    exclude: /node_modules/,
    use: [{
        loader: require.resolve('eslint-loader'),
        options: {
            // configFile: _pathScripts + '/.eslintrc',
            formatter: require.resolve('react-dev-utils/eslintFormatter'),
            eslintPath: require.resolve('eslint'),
            fix: true
        }
      }]
},{
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [{
        loader: 'babel-loader',
        options: {
            presets: [
                "react",
                "env"
            ]
        }
    }]
}
]