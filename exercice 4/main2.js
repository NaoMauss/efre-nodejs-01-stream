const { transform } = require('./streamboox.js')
const list_header = [] 
const json_final = []

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
  
  transform(
      'at-taux.csv',
      function(value){
        let result = value.toLowerCase().split('\r\n');
        let headerl = parseHeader(result[0]);
        let rien = null
        for (var i = 1; i< result.length - 1; i++){
          rien = parseContent(result[i], headerl)
          json_final.push(rien)
        }
        return JSON.stringify(json_final, null, 2)
      }
  )
