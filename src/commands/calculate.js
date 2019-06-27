const Discord = require("discord.js")
const math = require("mathjs")
module.exports.run = async (client, message, args, functions) => {
if (!args[0]) return message.channel.send(functions.noargs).then(m => m.delete(3000))
let resp;
try {
    resp = math.eval(args.join(" "));
} catch (e) {
    return message.channel.send("Please input a valid calculation").then(m => m.delete(3000))
}
const mathbed = new Discord.RichEmbed()
.setColor(0x0ed145)
.addField("Input: ", `\`\`\`js\n${args.join(" ")}\`\`\``)
.addField("Output: ", `\`\`\`js\n${resp}\`\`\``)
message.channel.send(mathbed);
}
module.exports.config = {
  name: "calculate",
  aliases: ["calc"],
  description: "Calculates the equation you input. Use * for multiplication and / for division."
}
