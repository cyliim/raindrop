const Discord = require("discord.js")
const config = require("../config.json")
module.exports.run = async (client, message, args, functions) => {
if (args[0] == "help") return message.channel.send(`Use ` + config.prefix + "help for a full list of commands")
if (args[0]) {
    let command = args[0];
    if (client.commands.has(command)) {
        command = client.commands.get(command);
        var helpbed = new Discord.RichEmbed()
        .setColor(0x0ed145)
        .setAuthor("Raindrop's Command Menu", message.guild.iconURL)
        .setDescription("Raindrops's prefix for this server is " + config.prefix + `\n\n**Command: ** ${command.config.name}\n**Description: ** ${command.config.description || "No Description"}\n**Aliases: ** ${command.config.noalias || command.config.aliases}`)
    message.channel.send(helpbed)
    }}
    if(!args[0]) {
        message.delete();   
        let helpbed2 = new Discord.RichEmbed()
        .setColor(0x0ed145)
        .setDescription(`${message.author.username}, check your dms!`)

        let reallyanotherembed = new Discord.RichEmbed()
        .setColor(0x0ed145)  
        .setAuthor("Raindrop's Help Menu", message.guild.iconURL) 
        .setThumbnail(client.user.avatarURL)
        .setTimestamp()
        .setDescription("Use `help <command>` for more info on each command")
        .addField(`Commands: `, "``8ball`` ``announce`` ``avatar`` ``balance`` ``calculate`` ``cat`` ``chat`` ``cowsay`` ``dog`` ``emojify`` ``fight`` ``flip`` ``help`` ``hug`` ``image`` ``invite`` ``level`` ``meme`` ``minesweeper`` ``ping`` ``resetroles`` ``serverinfo`` ``spotify`` ``uptime`` ``userinfo`` ``weather``")
        message.channel.send(helpbed2).then(m => m.delete(3000));
        message.author.send(reallyanotherembed)
    }
}

module.exports.config = {
    name: "help",
    aliases: ["cmds"],
    description: "Shows the list of commands"
}
