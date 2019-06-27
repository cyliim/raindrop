const Discord = require("discord.js")
module.exports.run = async (client, message, args, functions) => {
if(!args[0]) return message.channel.send(functions.nomen).then(m => m.delete(3000))
message.delete(1)
let member = message.mentions.members.first();
let attacks = [`${message.author} punched ${member} in the face! Ouch!`, `${message.author} grabbed ${member}'s arm and ripped it off!`, `${member} fell on top of ${message.author}!`, `${message.author} bit ${member} in the arm!`, `${member} got kicked in the face by ${message.author}!`, `${message.author} slammed ${member} to the ground!`, `${member} tried to fight ${message.author}, but got kicked in the jaw!`]
let chosen = attacks[Math.floor(Math.random() * attacks.length)]
message.channel.send(chosen)
}
module.exports.config = {
    name: "fight",
    aliases: ["attack"],
    description: "Fight someone!"
  }
