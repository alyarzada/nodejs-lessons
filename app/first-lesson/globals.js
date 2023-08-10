// get current directory path
console.log(_dirname);

// get current filename path
console.log(_filename);

// get details of current module (in this case global.js)
console.log(module);

// imported inside app.js
const name = "Ayxan";
const surname = "Kerimli";

module.exports = { name, surname };
