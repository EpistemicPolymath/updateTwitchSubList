require('dotenv').config({path:'.env'});
const csv = require('csv-parser')
const fs = require('fs')
const path = require("path");
const subData = [];

// Start reading the subscriber-list.csv file in the set file location
fs.createReadStream(`${process.env.SUBLISTCSV}`)
  .pipe(csv())
  .on('data', (data) => subData.push(data))
  .on('end', () => {
    // Remove names from the list
    const filteredSubs = subData.filter(subData =>
      subData.Username !==  process.env.STREAMER && // Streamer Account
      subData.Username !== process.env.BOT && // Bot Account
      subData.Username !== process.env.REMOVENAME);
    // Clear the file
    fs.truncate(`${process.env.SUBLISTTXT}`, () => { });
    // Create Write Stream
    const stream = fs.createWriteStream(`${process.env.SUBLISTTXT}`, { flags: 'a' });
    // Loop through and append names to text file
    for (let sub in filteredSubs) {
      stream.write(` ${filteredSubs[sub].Username}`)
    }
    // End the write stream
    stream.end();
  });

