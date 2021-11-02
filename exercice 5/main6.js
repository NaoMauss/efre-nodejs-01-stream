const { transform } = require('./streambox6.js')

const json_f2 = []


/*    /^-{1}/gm      */

 function parseContent(content){
     const reg = /(?<section>^-{1})/gm
     let indice = []
     for (var i = 1; i<content.length; i++){
         while (matches = reg.exec(content[i])){
             indice.push(i)
         }
     }
     return indice
}

 function parseYaml(indice, content){
     const reg2 = /(?<key>\S+[a-zA-Z0-9\'\s]+):(?<value>.+)/gm
     let matches
     let list = []
     for (var y = 0; y<indice.length; y++){
        let j_element = {}
         for (var x = (indice[y]+1); x< (indice[y+1]); x++){
             
             while (matches = reg2.exec(content[x])){
                 const {key, value} = matches.groups
                 j_element[key] = value
             }
            list.push(j_element)
         }   
     }
     return list
 }








transform('at-taux.yaml', function(value){
    let yaml = value.toLowerCase().split('\r\n');
    let indice = parseContent(yaml)
    let list2 = parseYaml(indice, yaml)
    console.log(list2)
})