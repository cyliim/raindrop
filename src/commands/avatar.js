const Discord = require("discord.js")
module.exports.run = async (client, message, args, functions) => {
if(!message.mentions.members.first()) {
    const nomavbed = new Discord.RichEmbed()
    .setTitle(message.author.username + "'s Avatar")
    .setURL(message.author.avatarURL)
    .setImage(message.author.avatarURL)
    .setFooter("Requested by " + message.author.tag)
    .setColor(0x0ed145)
    message.channel.send(nomavbed)
    } else {
       const mavbed = new Discord.RichEmbed()
       .setTitle(message.mentions.members.first().user.username + "'s Avatar")
       .setURL(message.mentions.members.first().user.avatarURL)
       .setImage(message.mentions.members.first().user.avatarURL)
       .setFooter("Requested by " + message.author.tag)
       .setColor(0x0ed145)
       message.channel.send(mavbed)
    }}
module.exports.config = {
    name: "avatar",
    aliases: ["av"],
    description: "Shows either your's or a user that you mention's avatar"
  }
