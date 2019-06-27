const Discord = require("discord.js")
const db = require("quick.db")
module.exports.run = async (client, message, args, functions) => {
    let money = db.fetch(`memberCurrency_${message.author.id}`)
    message.channel.send(`${message.author.tag}, you have Ð${money || 0}`)
}
module.exports.config = {
    name: "balance",
    aliases: ["bal"],
    description: "Shows your balance"
}
