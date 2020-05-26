const fs = require('fs')
const randomFile = require('select-random-file')

module.exports = message => {
    const dir = './images/heartbreak'
    randomFile(dir, (err, file) => {
        var fileToSend = `./images/heartbreak/${file}`;
        message.channel.send({
          files: [fileToSend]
      });
    })
}
