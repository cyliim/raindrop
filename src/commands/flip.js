const Discord = require("discord.js")
module.exports.run = async (client, message, args, functions) => {
message.channel.send(Math.floor(Math.random() * 2) === 0 ? "<a:coin:577007385332416523>| Your coin landed on heads!" : "<a:coin:577007385332416523>| Your coin landed on tails!");
}
module.exports.config = {
    name: "flip",
    aliases: ["coin", "coinflip", "cf"],
    description: "Flip a coin!"
  }
