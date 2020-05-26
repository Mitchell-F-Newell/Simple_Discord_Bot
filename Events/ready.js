module.exports = client => {
    console.log(`Logged in as ${client.user.tag}!`)
    // List servers the bot is connected to
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)
    })
    client.user.setActivity("Use !help for commands"); 
}