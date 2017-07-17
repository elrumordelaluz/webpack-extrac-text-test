require('babel-register')({
  only(filename) {
    return (
      filename.indexOf('build') === -1 &&
      filename.indexOf('node_modules') === -1
    )
  },
})
require('css-modules-require-hook')({
  generateScopedName: '[name]__[local]' +
    (process.env.NODE_ENV === 'production' ? '-[hash:base64:4]' : ''), // eslint-disable-line prefer-template
  mode: 'local',
  rootDir: './client',
})
require('./server.js')
