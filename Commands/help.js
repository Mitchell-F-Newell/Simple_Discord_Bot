const fs = require('fs')
module.exports = message => {
    var filename = './textfiles/help.txt';
    fs.readFile(filename, function(err, data){
        data += '';
        message.channel.send(data)
    })
}