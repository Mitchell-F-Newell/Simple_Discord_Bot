const help = require('../commands/help')
const kick = require('../commands/kick')
const heartbreak = require('../Commands/heartbreak')
const insult = require('../Commands/insult')
const compliment = require('../Commands/compliment')
const zoo = require('../Commands/zoo')
const goodBot = require('../Commands/goodBot')
const takeAHike = require('../Commands/takeAHike')
const mute = require('../Commands/mute')

module.exports = (client, message) => {
    if (message.content.startsWith('!help')) {
        return help(message);
    } else if (message.content.startsWith('!kick')) {
        return kick(message)
    } else if (message.content.startsWith('!heartbreak')) {
        return heartbreak(message);
    } else if (message.content.startsWith('!insult')) {
        return insult(message);
    } else if (message.content.startsWith('!compliment')) {
        return compliment(message);
    } else if (message.content.startsWith('!zoo')) {
        return zoo(message);
    } else if (message.content.startsWith('!goodBot')) {
        return goodBot(message);
    } else if (message.content.startsWith('!takeAHike')) {
        return takeAHike(message);
    } else if (message.content.startsWith('!mute')) {
        return mute(message);
    }
}