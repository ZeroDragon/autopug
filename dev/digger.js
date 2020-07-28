const mkdirp = require('mkdirp')
const path = require('path')
const source = path.resolve(process.cwd(), './src/')
const destination = path.resolve(process.cwd(), './dist/')

module.exports = p => {
  const absFilePath = path.resolve(process.cwd(), p)
  const file = absFilePath.replace(source, destination)
  const filepath = path.dirname(file)
  mkdirp.sync(filepath)
  return new Promise(resolve => {
    resolve({absFilePath, file})
  })
}
