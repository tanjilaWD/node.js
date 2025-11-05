//fs module- managing files
//writeFile
//appendFile

/*
const fs = require('fs');
fs.writeFile('demo1.txt', " My name is Tanjila", (err) => {
    if(err){
        console.log(err)
} else{
    console.log('successful')
}
})
*/

/*
const fs = require('fs');
fs.appendFile('demo1.txt', " I am 21 years old", (err) => {
    if(err){
        console.log(err)
} else{
    console.log('successful')
}
})
*/

/*
const fs = require('fs');
fs.readFile('demo1.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err)
} else{
    console.log(data);
}
})
*/

/*
const fs = require('fs');
fs.rename('demo1.txt', 'demo2.txt', (err) => {
    if(err){
        console.log(err)
} else{
    console.log('successful');
}
})
*/

/*
const fs = require('fs');
fs.unlink( 'demo2.txt', (err) => {
    if(err){
        console.log(err)
} else{
    console.log('successful');
}
})
*/

const fs = require('fs');
fs.exists( 'demo2.txt', (result) => {
    if(result){
        console.log('found')
} else{
    console.log('not found');
}
})
