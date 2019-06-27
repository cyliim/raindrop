const Discord = require("discord.js")
module.exports.run = async (client, message, args, functions) => {
const invbed = new Discord.RichEmbed()
.setTitle("Invite Raindrop")
.setDescription("[Invite Link](https://discordapp.com/api/oauth2/authorize?client_id=573365907494273027&permissions=268758080&scope=bot)\n[Website](https://cyliim.js.org/projects/raindrop)\n[Support Server](https://discord.gg/M7aMdPZ)")
.setThumbnail(client.user.avatarURL)
.setColor(0x0ed145)
message.channel.send(invbed)
}
module.exports.config = {
    name: "invite",
    aliases: ["inv"],
    description: "Invite the bot"
  }
