const Discord = require("discord.js")
const config = require("../config.json")
module.exports.run = async (client, message, args, functions) => {
if(message.author.id !== config.ownerID) return message.channel.send(functions.devperms).then(m => m.delete(3000))
resetBot(message.channel);
async function resetBot(channel) {
  message.channel.send('Restarting the bot')
    .then(msg => client.destroy())
    .then(() => client.login(process.env.token))
}}
module.exports.config = {
    name: "restart",
    aliases: ["r"],
    description: "||Developer Only Command||"
}
