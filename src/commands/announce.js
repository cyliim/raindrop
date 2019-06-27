const Discord = require("discord.js")
module.exports.run = async (client, message, args, functions) => { 
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(functions.noperms)
message.delete()
if(!args) return message.channel.send("Correct Usage: `rdannounce <channel> <message>`").then(m => m.delete(3000))
if(!args[0] === message.mentions.channels.first()) return message.channel.send("Correct Usage: `rdannounce <channel> <message>`").then(m => m.delete(3000))
if(!args[1]) return message.channel.send("Correct Usage: `rdannounce <channel> <message>`").then(m => m.delete(3000))
let annoucembed = new Discord.RichEmbed()
.setTitle("Server Announcement", message.guild.icon)
.setDescription(args.join(" ").split(message.mentions.channels.first()))
.setColor(0x0ed145)
.setFooter("Announcement by " + message.author.tag)
client.channels.get(message.mentions.channels.first().id).send(annoucembed)
}
module.exports.config = {
    name: "announce",
    noalis: "No Alias",
    description: "Announce something to the server",
    aliases: [""]
  }
