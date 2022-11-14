// Run using terminal - <path> node writeintoFile.js
// the txt file with name {mynwefile2.txt} will be created if not exist, if exist then the content will be replaced with given content

var fs = require('fs');

fs.writeFile('mynewfile2.txt', 'This Content [Hello content!] is a Replaced Content', function (err) {
  if (err) throw err;
  console.log('Saved!');
});