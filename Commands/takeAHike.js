const fs = require('fs')
const randomFile = require('select-random-file')

module.exports = message => {
    const member = message.mentions.members.first()
    
    if (!member) {
      return message.reply(`Who are you trying to tell to take a hike? You must mention a valid user.`)
    }

    const dir = './images/takeAHike'
    randomFile(dir, (err, file) => {
        var fileToSend = `./images/takeAHike/${file}`;
        message.channel.send(`Hey ${member}`, {
          files: [fileToSend]
      });
    })
}