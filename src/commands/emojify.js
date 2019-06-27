const Discord = require("discord.js")
const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');
    const mapping = {
        ' ': '   ',
        '0': ':zero:',
        '1': ':one:',
        '2': ':two:',
        '3': ':three:',
        '4': ':four:',
        '5': ':five:',
        '6': ':six:',
        '7': ':seven:',
        '8': ':eight:',
        '9': ':nine:',
        '!': ':grey_exclamation:',
        '?': ':grey_question:',
        '#': ':hash:',
        '*': ':asterisk:'
    };
    
    'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
        mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
    });
    
module.exports.run = async (client, message, args, functions) => {
        if (args.length < 1) {
            return message.channel.send(functions.noargs).then(m => m.delete(3000));
        }
    
        message.channel.send(
            args.join(' ')
                .split('')
                .map(c => mapping[c] || c)
                .join('')
                
        );
    };

module.exports.config = {
    name: "emojify",
    aliases: ["emoji"],
    description: "Turn your text into emojis!"
  }
