const Discord = require("discord.js")
module.exports.run = async (client, message, args, functions) => {
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(functions.noperms).then(m => m.delete(3000))
if(!message.mentions.members.first()) return message.channel.send(functions.nomen).then(m => m.delete(3000))
let memeber = message.mentions.members.first()
memeber.edit({
    roles: []
})
message.channel.send("Reset roles of " + memeber.user.tag)
}
module.exports.config = {
    name: "resetroles",
    aliases: ["rr"],
    description: "Resets a member's roles."
  }
