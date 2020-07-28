const fs = require('fs')
module.exports = ({dest, data}) => {
  fs.writeFileSync(dest, data)
  console.log(dest, 'updated')
}
