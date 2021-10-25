const { Transform } = require('stream')
const fs = require('fs');

function transform(directory = `main.js`, typefile = `.js`, f){
    const TransformStream = new Transform();

    TransformStream._transform = function(chunk, encoding, callback) {
      TransformStream.push(f(chunk.toString()))
      callback();
    }
    
    
    const readable = fs.createReadStream(directory);
    const writable = fs.createWriteStream(`reponse.txt`)

    readable.pipe(TransformStream).pipe(writable)
}

module.exports = { transform }