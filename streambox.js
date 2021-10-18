const fs = require('fs');

function duplicate(file=''){
    
    fs.copyFile(file , 'destination.txt', (err) => {
        if (err) throw err;
        console.log('source.txt was copied to destination.txt');
      });
}

function duplicatepipe(file='', destination='destination.txt'){
    const readable = fs.createReadStream(file);
    const writable = fs.createWriteStream(destination);
    readable.pipe(writable);
}

module.exports = { duplicatee: duplicate, duplicatepipe }
