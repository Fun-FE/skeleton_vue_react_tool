const path = require('path')
var utils = require('./utils')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
var px2rem = require('postcss-px2rem');

module.exports = {
  target: 'node',
  entry: {
    skeleton: './src/portal_skeleton.js'
  },
  output: {
    path: path.resolve(__dirname, '../assets'),
    publicPath: '/assets/',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: utils.cssLoaders(),
            postcss: [px2rem({ remUnit: 37.5 })],
            autoprefixer: {
                browsers: ['last 10 versions', 'Android > 4', 'iOS > 6', 'Safari > 6']
            }
        }
      }
    ]
  },
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    new VueSSRServerPlugin({
      filename: 'skeleton.json'
    })
  ]
}
