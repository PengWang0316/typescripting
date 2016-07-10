var workshopper = require('workshopper-adventure');
var path  = require('path');
var typescripting  = workshopper({
  title: 'CMD TUT',
  exerciseDir: path.join(__dirname, 'exercises'),
  appDir: __dirname,
  languages: ['en'],
});

module.exports = typescripting;
