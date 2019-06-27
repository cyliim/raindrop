const Discord = require("discord.js")
const cowsay = require("cowsay")
module.exports.run = async (client, message, args, functions) => {
if(!args[0]) message.channel.send(functions.noargs).then(m => m.delete(3000))
message.channel.send("```" + cowsay.say({text: args.join(" ")}) + "```")
}
module.exports.config = {
    name: "cowsay",
    aliases: ["cow"],
    description: "Mooooo..."
  }
