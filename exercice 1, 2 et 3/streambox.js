const { Transform } = require('stream')
const fs = require('fs');
const list_header = [] 
const json_final = []

function duplicatepipe(file='', destination='destination.txt'){
    const readable = fs.createReadStream(file);
    const writable = fs.createWriteStream(destination);
    readable.pipe(writable);
}

function transform(filename, a, f) {
    const TransformStream = new Transform();

    TransformStream._transform = function(chunk, encoding, callback) {
      TransformStream.push(chunk.toString().split(a).join(f(a)))
      callback();
    }
    
    
    const readable = fs.createReadStream(filename);
    const writable = fs.createWriteStream('log.txt')

    readable.pipe(TransformStream).pipe(writable)
}    


 



function parseHeader(content) {
  let headerlist = []
  const reg = /(?<section>[a-zA-Z\s0-9\'_-]+)/gm
  
  let matches
  while (matches = reg.exec(content)) {
    const {section} = matches.groups
    headerlist.push(section)
    
  }
  return headerlist
}


function parseContent(content, header){
  const reg = /(?<section>[a-zA-Z\s0-9\'._-]+)/gm
  const json = {}
  let y =0
  while (matches = reg.exec(content)) {
    const {section} = matches.groups
    json[header[y]] = section
    y += 1
    
    
  }
  return json
}

function csv2json(filename){
  const csv = fs.readFileSync(`${filename}`);
  let result = csv.toString().toLowerCase().split('\r\n');
  let headerl = parseHeader(result[0]);
  let rien = null
  for (var i = 1; i< result.length - 1; i++){
    rien = parseContent(result[i], headerl)
    json_final.push(rien)
  }
  return json_final


}






module.exports = { duplicatepipe, transform, csv2json}