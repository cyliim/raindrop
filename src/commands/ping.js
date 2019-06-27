const Discord = require("discord.js")
module.exports.run = async (client, message, args, functions) => {
    const m = await message.channel.send("Pinging...");
    m.edit({embed: {
      color: 0x0ed145,
      description:`Latency: **${m.createdTimestamp - message.createdTimestamp}**ms. API Latency: **${Math.round(client.ping)}**ms`
}})}

module.exports.config = {
    name: "ping",
    aliases: ["p"],
    description: "Shows the latency of the bot, as well as the API latency"
}
