const fs = require('fs');
const path = require('path');

const itemFilePath = path.join(
  path.dirname(process.filename),
  'data',
  'ta03',
  'items.json'
);

module.exports = class Item {
  static getAllItems(callback) {
    
  }
}