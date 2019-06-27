const Discord = require("discord.js")
const weather = require("weather-js")
module.exports.run = async (client, message, args, functions) => {
    if(!args) return message.channel.send(functions.noargs).then(m => m.delete(3000))
    weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
        if (result === undefined || result.length === 0) {
            message.channel.send('Please enter a valid location.').then(m => m.delete(3000))
            return; 
        }
        var current = result[0].current;
        var location = result[0].location;
        const embed = new Discord.RichEmbed()
            .setDescription(`**${current.skytext}**`) 
            .setAuthor(`Weather for ${current.observationpoint}`) 
            .setColor(0x0ed145)
            .addField('Timezone',`UTC${location.timezone}`, true) 
            .addField('Degree Type',location.degreetype, true)
            .addField('Temperature',`${current.temperature} Degrees`, true)
            .addField('Feels Like', `${current.feelslike} Degrees`, true)
            .addField('Winds',current.winddisplay, true)
            .addField('Humidity', `${current.humidity}%`, true)
            message.channel.send({embed});
})}
module.exports.config = {
    name: "weather",
    noalias: "No Alias",
    description: "Shows the weather for a specified location",
    aliases: [""]
  }
