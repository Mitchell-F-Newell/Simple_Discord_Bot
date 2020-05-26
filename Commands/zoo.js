const fs = require('fs')

module.exports = message => {
    const zooFile = './images/zoo.png'
    message.channel.send({
          files: [zooFile]
    });
}
