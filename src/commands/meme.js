const Discord = require("discord.js")
const snekfetch = require("snekfetch")
module.exports.run = async (client, message, args, functions) => {
var subs = [`https://www.reddit.com/r/dankmemes.json?sort=top&t=week`, `https://www.reddit.com/r/memes.json?sort=top&t=week`, `https://www.reddit.com/r/dank_meme.json?sort=top&t=week`];
  const randomsubs = subs[Math.floor(Math.random() * subs.length)];
  try {
    const { body } = await snekfetch
        .get(randomsubs)
        .query({ limit: 800 });
    const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
    if (!allowed.length) return message.channel.send('Please try again');
    const randomnumber = Math.floor(Math.random() * allowed.length)
    const memeembed = new Discord.RichEmbed()
    .setColor(0x333333)
    .setDescription(allowed[randomnumber].data.selftext)
    .setTitle(allowed[randomnumber].data.title)
    .setImage(allowed[randomnumber].data.url)
    .addField("Link: ", allowed[randomnumber].data.url)
    message.channel.send(memeembed)
} catch (err) {
    return console.log(err);
}}
module.exports.config = { 
    name: "meme",
    noalias: "No Alias",
    description: "Get a random meme straight from reddit",
    aliases: [""]
  }
