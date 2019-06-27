const Discord = require("discord.js")
const config = require("../config.json")
module.exports.run = async (client, message, args, functions) => {
  if(message.author.id !== config.ownerID) return message.channel.send(functions.devperms).then(m => m.delete(3000))
resetBot(message.channel);
async function resetBot(channel) {
  message.channel.send('Bot shutting down').then(m => m.delete(3000))
    .then(msg => client.destroy());
}}
    module.exports.config = {
        name: "shutdown",
        aliases: ["sd"],
        description: "||Developer Only Command||"
    }
