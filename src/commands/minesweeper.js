const Discord = require("discord.js")
const Minesweeper = require('discord.js-minesweeper');
module.exports.run = async (client, message, args) => {
    const rows = parseInt(args[0]);
    const columns = parseInt(args[1]);
    const mines = parseInt(args[2]);
 
    if (!rows) {
      return message.channel.send('Please provide the number of rows.').then(m => m.delete(3000));
    }
 
    if (!columns) {
      return message.channel.send('Please provide the number of columns.').then(m => m.delete(3000));
    }
 
    if (!mines) {
      return message.channel.send('Please provide the number of mines.').then(m => m.delete(3000));
    }
 
    const minesweeper = new Minesweeper({ rows, columns, mines });
    const matrix = minesweeper.start();
    return matrix
      ? message.channel.send(message.author.username + `'s minesweeper with **${rows}** rows, **${columns}** columns and **${mines}** mines \n` + matrix)
      : message.channel.send('You have provided invalid data.').then(m => m.delete(3000));
      
}
module.exports.config = {
    name: "minesweeper",
    aliases: ["ms"],
    description: "Play a fun game of minesweeper!"
  }
