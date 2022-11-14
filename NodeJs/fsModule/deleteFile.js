// Run using terminal - <path> node deleteFile.js
// But before that the file with name {mynwefile.txt} should be exist then only this runs

var fs = require('fs');

fs.unlink('mynewfile.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});