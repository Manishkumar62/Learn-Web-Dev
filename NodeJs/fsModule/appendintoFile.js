// Run using terminal - <path> node appendintoFile.js
// the txt file with name {mynwefile2.txt} will be created if not exist, if exist then the content will be appended

var fs = require('fs');

fs.appendFile('mynewfile2.txt', 'This Content Is Being Appended!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});