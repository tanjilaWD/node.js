//os, path

// const os = require('os');
// console.log(os);

// const os = require('os');
// console.log(os.userInfo());

// const os = require('os');
// console.log(os.homedir());

// const os = require('os');
// console.log(os.hostname());

// const os = require('os');
//  console.log(os.totalmem());
//  console.log(os.freemem());

// const {totalmem, freemem} = require('os');
// console.log(totalmem());
// console.log(freemem());


//path

// console.log(__dirname);
// console.log(__filename);

const path = require('path');

// const extensionName = path.extname('index.js');
// console.log(extensionName);

const joinName = path.join(__dirname + '/views');
console.log(joinName);

