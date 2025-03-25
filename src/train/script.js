import fs from 'fs'

new Promise((resolve, reject)=>{
    fs.writeFile('file.txt', 'Hello! Here we are!', 'utf8', (err)=>{
        if(err) {
            reject(err);
        }
        else {
            console.log('file saved')
            resolve()
        }
    })
}).then(()=>fs.promises.readFile('file.txt', 'utf8'))
  .then(data => console.log(data))
  .catch(err => console.error(err))