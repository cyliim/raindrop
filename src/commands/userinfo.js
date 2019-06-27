const Discord = require("discord.js")
module.exports.run = async (client, message, args, functions) => {
    const date = message.author.createdAt;
    const newDate = date.toLocaleDateString();
    const joined = message.member.joinedAt;
    const newJoined = joined.toLocaleDateString()
    let bot = {
        "true": "<:bot:581006442941644811> Bot",
        "false": "<:user:581007268557094923> User"
      }
      let status = {
        "online": "<:online:581007003363835905> Online",
        "idle": "<:idle:581006355888865282> Idle",
        "dnd": "<:dnd:581006396989112321> Do Not Disturb",
        "offline": "<:offline:581007020384059392> Offline",
      };
    let memberInfo = message.mentions.members.first();
    if(!memberInfo){
    var userinf = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setDescription("Guild: " + message.guild)
    .setColor(0x0ed145)
    .addField("Full Username: ", `${message.author.username}#${message.author.discriminator}`, true)
    .addField("ID:", message.author.id, true)
    .addField('Current Nickname: ', message.author.toString(), true)
    .addField("Current Status: ", status[message.author.presence.status], true)
    .addField("Currently Playing: ", message.author.presence.game || "Nothing", true)
    .addField("Account Type: ", bot[message.author.bot], true)
    .addField("Joined On: ", newJoined, true)
    .addField("Created On: ", newDate, true)
    message.channel.send(userinf);
    }else{
    let midate = memberInfo.user.createdAt
    let midateF = midate.toLocaleDateString();
    let mijoined = memberInfo.joinedAt
    let mijoinedF = mijoined.toLocaleDateString();
    var userinfoo = new Discord.RichEmbed()
    .setAuthor(memberInfo.displayName, memberInfo.user.avatarURL)
    .setThumbnail(memberInfo.user.avatarURL)
    .setDescription("Guild: " + message.guild)
    .setColor(0x0ed145)
    .addField("Full Username:", `${memberInfo.user.username}#${memberInfo.user.discriminator}`, true)
    .addField("ID:", memberInfo.id, true)
    .addField('Current Nickname: ', memberInfo.toString(), true)
    .addField("Current Status: ", status[memberInfo.user.presence.status], true)
    .addField("Currently Playing: ", memberInfo.user.presence.game || "Nothing", true)
    .addField("Account Type: ", bot[memberInfo.user.bot], true)
    .addField("Joined On: ", mijoinedF, true)
    .addField("Created On: ", midateF ,true)
    message.channel.send(userinfoo);
    }
}
module.exports.config = {
    name: "userinfo",
    aliases: ["ui"],
    description: "Shows user info of either you or a mentioned user",
}
