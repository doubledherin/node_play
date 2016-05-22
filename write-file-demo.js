var fs = require('fs');

var wendyString = '{"name": "Wendy"}';

fs.writeFile('wendy.json', wendyString);

var tammy = { name: 'Tammy'};

fs.writeFile('tammy.json', JSON.stringify(tammy));
