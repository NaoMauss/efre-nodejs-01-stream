const { transform } = require('./streambox3.js')

function regexCount(valeur){
    const reg = /(?<section>[a-zA-Z0-9\'\"\`\._-]+)/gm 
    let y = 0
    let matches

    while (matches = reg.exec(valeur)) {
        y+=1
      }
    return y
}




transform('at-taux.csv', 'osef', function(valeur){
    return regexCount(valeur).toString()
}
)





/*      /(?<section>[a-zA-Z0-9\'\"\`\._-]+)/gm         */