const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
const Discord = require("discord.js");
const client = new Discord.Client;
const DBL = require("dblapi.js")
const dbl = new DBL(process.env.DBLAPI, client)
const config = require("./config.json");
const fs = require("fs");
const db = require("quick.db");

client.commands = new Discord.Collection;
client.aliases = new Discord.Collection;
fs.readdir("./commands/", (err, files) =>{
if(err) console.error(err)
let jsfile = files.filter(f => f.split(".").pop() === "js")
if(jsfile.length <= 0) {
   return console.error("Commands not found. Check command file.");
}
jsfile.forEach((f, i) =>{
    let pull = require(`./commands/${f}`);
    client.commands.set(pull.config.name, pull);
    pull.config.aliases.forEach(alias =>{
        client.aliases.set(alias, pull.config.name);
    })})});
dbl.on("posted", () =>{
  console.log("Server count posted to dbl!")
})
client.on("ready", ready =>{
    client.user.setActivity(`for rdhelp`, {type: "WATCHING"})
    console.log("Bot starting...")
    console.log("Guilds: " + client.guilds.size)
    console.log("Users: " + Math.floor(client.users.size - 2))
    console.log("Bot ready")
    console.log("Logged in as " + client.user.username + "#" + client.user.discriminator)
});
client.on("messageUpdate", (oldMessage, newMessage) =>{
   if(newMessage.author.bot || newMessage.channel.type === "dm" || !newMessage.content.startsWith(config.prefix)) return;
  let messageArray = newMessage.content.split(" ")
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = client.commands.get(cmd.slice(config.prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(config.prefix.length)))
  let message = newMessage
  let functions = require("./functions.json")
  if(commandfile) commandfile.run(client, message, args, functions)  
})
client.on("message", async message =>{
    async function levelup() {
       await db.add(`memberLevel_${message.author.id}`, 1) 
      await db.delete(`globalMessages_${message.author.id}`)
      message.react("🎊")
    }
  if(message.author.bot || message.channel.type === "dm") return;
    let coinconst = Math.floor(Math.random() * 10) + 1
  let coingive = Math.floor(Math.random() * 10) + 1
  if(coinconst === coingive) {
      db.add(`memberCurrency_${message.author.id}`, coingive)
  }
  let level = await db.fetch(`memberLevel_${message.author.id}`)
    db.add(`globalMessages_${message.author.id}`, 1)
    db.add(`levelMessages_${message.author.id}`, 1)
    let global = await db.fetch(`globalMessages_${message.author.id}`)
    if(global >= level * 50 + 50) levelup()
    if (message.content.includes(client.user.toString())) {
        message.reply(`my prefix is \`${config.prefix}\``)
    }
    if(message.author.bot || message.channel.type === "dm" || !message.content.startsWith(config.prefix)) return;
    let functions = require("./functions.json")
    let messageArray = message.content.split(" ")
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = client.commands.get(cmd.slice(config.prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(config.prefix.length)))
  if(commandfile) commandfile.run(client, message, args, functions)  
  console.log(`Command ${commandfile.config.name} used in ${message.guild} by ${message.author.tag}`)
})
client.login(process.env.token)
