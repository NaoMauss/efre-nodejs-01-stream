
const { Transform } = require('stream')
const fs = require('fs');

function transform(filename, f) {
    const TransformStream = new Transform();

    TransformStream._transform = function(chunk, encoding, callback) {
      TransformStream.push(f(chunk.toString()))
      callback();
    }
    
    
    const readable = fs.createReadStream(filename);
    const writable = fs.createWriteStream(`reponse.json`)

    readable.pipe(TransformStream).pipe(writable)
}    

 
module.exports = {transform}
