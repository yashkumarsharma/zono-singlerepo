const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = {
  babel: {
    presets: [
      ['@babel/preset-env', { useBuiltIns: 'usage' }],
      '@babel/preset-react',
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-transform-react-jsx',
      '@babel/plugin-proposal-class-properties',
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
