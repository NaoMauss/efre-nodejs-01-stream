const { transform } = require('./streambox.js')
const { csv2json } = require('./streambox.js')


//transform(
//  'text.txt',
//  'xem',
//  function(value) {
//    return value.toUpperCase()
//  }
//)
//

console.log(csv2json('at-taux.csv'))