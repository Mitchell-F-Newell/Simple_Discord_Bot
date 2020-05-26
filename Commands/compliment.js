const fs = require('fs')

module.exports = message => {
    const member = message.mentions.members.first()
    
    if (!member) {
      return message.reply(`Who are you trying to compliment? You must mention a valid user.`)
    }
    
    sendCompliment('./textfiles/compliments.txt');
    
    //note this will be async
    function sendCompliment(filename){
        fs.readFile(filename, function(err, data){
            if(err) throw err;
            data += '';
            var lines = data.split('\n');
            var compliment = lines[Math.floor(Math.random()*lines.length)];
            var msg = `Hey ${member}, ${compliment}`;
            message.channel.send(msg)
        })
    }
}
