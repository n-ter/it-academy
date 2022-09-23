const fs = require('fs-extra')

fs.ensureDirSync( './testFolder');
fs.ensureFileSync('./testFolder/test.txt')
fs.ensureDirSync( './testFolder2');
fs.moveSync('./testFolder/test.txt', './testFolder2/test.txt', {} )
fs.ensureDirSync( './testFolder3');
fs.copySync('./testFolder2', './testFolder3', {})
fs.removeSync('./testFolder2/test.txt')
fs.removeSync('./testFolder3/test.txt')
fs.removeSync('./testFolder')
fs.removeSync('./testFolder2')
fs.removeSync('./testFolder3')