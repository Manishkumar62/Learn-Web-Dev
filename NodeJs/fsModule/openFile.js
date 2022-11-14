// Run using terminal - <path> node openFile.js
// the txt file with name {mynwefile.txt} will be created

var fs = require('fs');

fs.open('mynewfile.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});