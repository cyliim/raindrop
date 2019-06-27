const Discord = require("discord.js")

module.exports.run = async (client, message, args, functions) => {
    let totalSeconds = (client.uptime / 1000);
      let days = Math.floor(totalSeconds / 86400);
      let hours = Math.floor(totalSeconds / 3600);
      totalSeconds %= 3600;
      let minutes = Math.floor(totalSeconds / 60);
      let uptime = `**${days}** days, **${hours}** hours and **${minutes}** minutes`;
      message.channel.send({embed: {
        color: 0x0ed145,
        description: uptime
      }})
}
  module.exports.config = {
    name: "uptime",
    aliases: ["up"],
    description: "Shows the uptime of the bot in Days, Hours and Minutes"
}
