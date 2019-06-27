const Discord = require("discord.js")
var ball =["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", " Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
module.exports.run = async (client, message, args, functions) => {
if(!args[0]) return message.channel.send(functions.noargs).then(m => m.delete(3000))
var repl3 = ball[Math.floor(Math.random()*ball.length)];
message.channel.send("🎱 | " + repl3)
}
module.exports.config = {
    name: "8ball",
    aliases: ["ball"],
    description: "Ask a question and get an answer!"
}
