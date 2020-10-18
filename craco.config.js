const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = {
  babel: {
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      '@babel/plugin-proposal-optional-chaining',
    ],
  },
  webpack: {
    alias: {
      'react-native': 'react-native-web',
    },
    configure: {
      resolve: {
        extensions: [
          // Try to resolve `.web.*` first
          '.web.js',
          '.web.ts',
          '.web.tsx',
          '.js',
          '.ts',
          '.tsx',
        ],
      },
    },
    plugins: [
      new CircularDependencyPlugin({
        exclude: /node_modules/,
      }),
    ],
  },
}
