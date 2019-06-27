const superagent = require("superagent")
const Discord = require("discord.js")
const db = require("quick.db")
module.exports.run = async (client, message, args, functions) => {
    let level = await db.fetch(`memberLevel_${message.author.id}`)
    if(level < 5) return message.channel.send("You must be level 5 to use this command! \nUse `rdlevel` to check your level!")
    if(!args.join(" ")) return message.channel.send(functions.noargs)
    let {body} = await superagent
    .get(`https://some-random-api.ml/chatbot?message=${args.join(" ")}`)
    if(!{body}) return message.channel.send("Sorry, I've messed up! Please try using the command again!").then(m => m.delete(3000))
message.channel.send(body.response)
}
module.exports.config = {
    name: "chat",
    noalias: "No Alias",
    description: "Chat with an AI",
    aliases: [""]
  }
