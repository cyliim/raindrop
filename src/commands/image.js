const GoogleImages = require('google-images');
const Discord = require("discord.js")
const config = require("../config.json")
module.exports.run = async (client, message, args, functions) => {
if(!args[0]) return message.channel.send(functions.noargs).then(m => m.delete(3000))
  const imagesclient = new GoogleImages(process.env.CSE, process.env.API);
    var search = imagesclient.search(args.join(" ")).then(function(images) {
        const imagebed = new Discord.RichEmbed()
        .setTitle("Image result for " + args.join(" "))
        .setColor(0x0ed145)
        .setURL(images[Math.floor(Math.random() * images.length)].url)
        .setImage(images[Math.floor(Math.random() * images.length)].url)
      message.channel.send(imagebed)
    })};
      module.exports.config = {
        name: "image",
        noalias: "No Alias",
        description: "Shows an image from the search term you provide",
        aliases: ["No Alias"]
      }
