module.exports = message => {
    const member = message.mentions.members.first()
    const mute_role = message.guild.roles.find("name", "Mute");
    
    if (!member) {
      return message.reply(`Who are you trying to mute? You must mention a valid user.`)
    }

    member.addRole(mute_role); // <- this assign the role
    setTimeout(() => {member.removeRole(mute_role);}, 60 * 1000); // <- sets a timeout to unmute the user.
    message.reply(`${member} was muted for 60 seconds.`)
}

