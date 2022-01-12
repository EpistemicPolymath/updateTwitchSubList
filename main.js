require('dotenv').config()
const csv = require('csv-parser')
const fs = require('fs')
const write = require('write');
const subData = [];

fs.createReadStream(`${process.env.subListCSV}`)
  .pipe(csv())
  .on('data', (data) => results.push(subData))
  .on('end', () => {
    for (let sub in subData) {
      write.sync(`${process.env.subListTXT}`, ` ${subData[sub].Username}`, { newline: false }); 
    }
  });

