function duplicate(file=''){
    const fs = require('fs');
    fs.copyFile(file , 'destination.txt', (err) => {
        if (err) throw err;
        console.log('source.txt was copied to destination.txt');
      });
}





// File destination.txt will be created or overwritten by default.



module.exports = { duplicatee: duplicate }
