const Discord = require("discord.js")
const config = require("../config.json")
module.exports.run = async (client, message, args, functions) => {
    if(message.author.id !== config.ownerID) return message.channel.send(functions.devperms).then(m => m.delete(3000))
    try {
        let codein = args.join(" ");
        let code = eval(codein);
  
        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor('Evaluation')
        .setColor(0x0ed145)
        .addField(':inbox_tray: Input', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: Output', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
      let codein = args.join(" ");
  const errorevalBed = new Discord.RichEmbed()
  .setAuthor("Evaluation Error")
  .setColor("FF0000")
  .addField(":inbox_tray: Input", `\`\`\`js\n${codein}\`\`\``)
  .addField("⚠ Error", `\`\`\`js\n${e}\n\`\`\``);
  message.channel.send(errorevalBed)
}}
module.exports.config = {
    name: "eval",
    aliases: ["ev"],
    description: "||Developer Only||"
}
