const Discord = require("discord.js")
const superagent = require("superagent")
module.exports.run = async (client, message, args, functions) => {
if(!args[0]) return message.channel.send(functions.nomen).then(m => m.delete(3000))
message.delete(1)
let member = message.mentions.members.first();
let hugs = [`${message.author} grabbed ${member} and gave them a big, warm hug!`, `${message.author} gave ${member} a big hug!`, `${message.author} hugged ${member}`, `${message.author} wrapped their arms around ${member}`]
let hugsen = hugs[Math.floor(Math.random() * hugs.length)]
message.channel.send(hugsen)
}
module.exports.config = {
    name: "hug",
    noalias: "No Alias",
    description: "Hug someone!",
    aliases: [""],
  }
