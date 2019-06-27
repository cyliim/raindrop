const Discord = require("discord.js")
module.exports.run = async (client, message, args, functions) => {
let user = message.mentions.users.first() || message.author; 
if(user.presence.game.name === "Spotify" && user.presence.game.type === 2) {
  let trackIMG = `https://i.scdn.co/image/${user.presence.game.assets.largeImage.slice(8)}`; 
  let trackURL = `https://open.spotify.com/track/${user.presence.game.syncID}`; 
  let trackName = user.presence.game.details;
  let trackAuthor = user.presence.game.state;
  let trackAlbum = user.presence.game.assets.largeText; 
  let spotifyembed = new Discord.RichEmbed()
  .setTitle("User's Spotify Status")
  .setColor(0x0ed145)
  .setThumbnail(trackIMG)
  .addField('Song Name', trackName, true) 
  .addField('Album', trackAlbum, true)
  .addField('Author', trackAuthor, true) 
  .addField('Listen to Track:', `[${trackName}](${trackURL})`, true); 
  message.channel.send(spotifyembed)
} else {
  message.channel.send("This user isn't listen to Spotify").then(m => m.delete(3000))
}
  }
  module.exports.config = {
    name: "spotify",
    noalias: "No Alias",
    description: "Show a user's Spotify status",
    aliases: [""]
  }
