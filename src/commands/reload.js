const Discord = require("discord.js")
const config = require("../config.json")
module.exports.run = async (client, message, args, functions) => {
if(message.author.id !== config.ownerID) return message.channel.send(functions.devperms).then(m => m.delete(3000))
if(!args[0]) return message.channel.send(functions.noargs).then(m => m.delete(3000));
let commandName = args[0].toLowerCase()
try {
delete require.cache[require.resolve(`./${commandName}.js`)];
client.commands.delete(commandName);
const pull = require(`./${commandName}.js`);
client.commands.set(commandName, pull);
} catch(e) {
return message.channel.send(`Could not reload \`${args[0].toUpperCase()}\``).then(m => m.delete(3000));
}
message.channel.send(`Reloaded \`${commandName}\``).then(m => m.delete(3000))
};
module.exports.config = {
    name: "reload",
    aliases: ["re"],
    description: "||Developer Only Command||"
}
