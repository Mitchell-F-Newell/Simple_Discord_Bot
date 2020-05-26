const fs = require('fs')

module.exports = message => {
    const member = message.mentions.members.first()
    
    if (!member) {
      return message.reply(`Who are you trying to insult? You must mention a valid user.`)
    }
    
    sendInsult('./textfiles/insults.txt');
    
    //note this will be async
    function sendInsult(filename){
        fs.readFile(filename, function(err, data){
            if(err) throw err;
            data += '';
            var lines = data.split('\n');
            var insult = lines[Math.floor(Math.random()*lines.length)];
            var msg = `Hey ${member}, ${insult}`;
            message.channel.send(msg)
        })
    }
}
