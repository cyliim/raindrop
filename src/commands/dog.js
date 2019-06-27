const superagent = require("superagent")
const Discord = require("discord.js")
module.exports.run = async (client, message, args, functions) => {
    let msg = await message.channel.send("Finding a cute dog!")
    let {body} = await superagent
    .get(`https://dog.ceo/api/breeds/image/random`)
    if(!{body}) return message.channel.send("Sorry, I've messed up! Please try using the command again!").then(m => m.delete(3000))
    let dogbed = new Discord.RichEmbed()
    .setColor(0x0ed145)
    .setImage(body.message)
    message.channel.send(dogbed)
    msg.delete()
}
module.exports.config = {
    name: "dog",
    aliases: ["doggo", "doggy"],
    description: "Gets a cute picture of a dog from dog.ceo"
  }
