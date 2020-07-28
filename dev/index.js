const chokidar = require('chokidar')
const digger = require('./digger')
const writer = require('./writer')
const pug = require('./pug')
const bs = require('browser-sync')

chokidar
  .watch('./src/**/*.pug')
  .on('all', (event, path) => {
    digger(path)
      .then(pug)
      .then(writer)
  })

bs.init({
  port: process.env.PORT,
  server: './dist',
  watch: './dist/**/*.*'
})
