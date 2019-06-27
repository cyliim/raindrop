const Discord = require("discord.js")
const db = require("quick.db")
module.exports.run = async (client, message, args, functions) => { //start of commands
let member = message.mentions.members.first() || message.member
let level = await db.fetch(`memberLevel_${member.id}`)
let global = await db.fetch(`globalMessages_${member.id}`)
if(!message.mentions.members.first()) {
const levelbed = new Discord.RichEmbed()
.setTitle(`${message.author.tag}'s level`)
.setURL(`https://cyliim.js.org/projects/raindrop/levels`)
.setColor(0x0ed145)
.setDescription(`**Level:** ${level || 0} \n**Messages Sent:** ${global || 0}/${level * 50 + 50}`)
.setThumbnail(message.author.avatarURL)
message.channel.send(levelbed)
} else {
    if(message.mentions.members.first().user.bot) return message.channel.send("Bots don't level up!")
    const level2bed = new Discord.RichEmbed()
    .setTitle(`${message.mentions.members.first().user.tag}'s level`)
    .setURL(`https://cyliim.js.org/projects/raindrop/levels`)
    .setColor(0x0ed145)
    .setDescription(`**Level:** ${level || 0} \n**Messages Sent:** ${global || 0}/${level * 50 + 50}`)
    .setThumbnail(member.user.avatarURL)
    message.channel.send(level2bed)
}}
module.exports.config = { //end of commands with alias(es)
    name: "level",
    aliases: ["rank"],
    description: "Shows your level",
}
