var workshopper = require('workshopper-adventure');
var path  = require('path');
var typescripting  = workshopper({
  title: 'TYPESCRIPTING',
  exerciseDir: path.join(__dirname, 'exercises'),
  appDir: __dirname,
  languages: ['en'],
});

typescripting.addAll([
  "basictypes",
]);

module.exports = typescripting;
