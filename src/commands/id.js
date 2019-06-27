const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    if(!args[0]) {
let AidEmbed = new Discord.RichEmbed()
.setColor(0xfff200)
.setTitle(message.author.username + "'s ID:")
.setDescription("`` " + message.author.id + " ``")
message.channel.send(AidEmbed)
    } else {
        if(!message.mentions.members.first())
        return message.channel.send("Please mention a user!");
        let userr = message.mentions.members.first()
        let MidEmbed = new Discord.RichEmbed()
        .setColor(0xfff200)
        .setTitle(userr.user.username + "'s ID:")
        .setDescription("`` " + userr.id + " ``")
        message.channel.send(MidEmbed)
    }
}
module.exports.config = {
    name: "userid",
    aliases: ["uid", "id"],
    description: "Gets an ID of a mentioned user"
  }
