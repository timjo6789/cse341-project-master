const fs = require('fs');
const path = require('path');

file_name = 'something.txt';

const p = path.join(path.dirname(process.mainModule, file_name), 
  'week3',
  'data.json'
);

