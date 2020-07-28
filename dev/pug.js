const pug = require('pug')
const path = require('path')

module.exports = ({absFilePath, file}) => {
  const html = pug.renderFile(absFilePath)
  const dest = path.format({
    ...path.parse(file),
    base: undefined,
    ext: '.html'
  })
  return new Promise(resolve => {
    resolve({dest, data: html})
  })
}
