const superagent = require("superagent")
const Discord = require("discord.js")
module.exports.run = async (client, message, args, functions) => {
    let msg = await message.channel.send("Finding a cute cat!")
    let {body} = await superagent
    .get(`https://aws.random.cat/meow`)
    if(!{body}) return message.channel.send("Sorry, I've messed up! Please try using the command again!").then(m => m.delete(3000))
    let catbed = new Discord.RichEmbed()
    .setColor(0x0ed145)
    .setImage(body.file)
    message.channel.send(catbed)
    msg.delete()
}
module.exports.config = {
    name: "cat",
    aliases: ["kitty", "kitten"],
    description: "Gets a cute picture of a cat from random.cat"
  }
