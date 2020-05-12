const {MessageEmbed} = require('discord.js')
module.exports={
    name: "ban",
    description: "Ban a specified user from the server",
    category:"moderation",
    usage: "<user id> <reason>",
    run: async(bot,message,args)=>{
        if(!args[0])return message.channel.send(`specify who you wish to ban retard (give the user id or username)`)
        let User = message.guild.members.cache.get(args[0])
        if(!User)return message.channel.send(`idk who is that try again`)
        let Reason = message.content.split(`!ban ${User.id} `)
        if(!args[1])return message.channel.send(`give a reason duurh!!!! you cant ban soemone without a reason zoomer`)
        if(!Reason) return message.channel.send(`give a reason duurh!!!! you cant ban soemone without a reason zoomer`)
        if(!User.bannable)return message.channel.send(`nice try on banning someone have higher role than u retard`)
        if(!message.member.permissions.has("BAN_MEMBERS"))return message.channel.send(`you dont even have perm to ban`)
        User.ban(Reason)
        const Embed = new MessageEmbed()
        .setTitle(`this stinky dude just got banned`)
        .setDescription(`BANNED THIS STINKY ASS ${bot.users.cache.get(User.id).username} FROM THE SERVER`)
        .setColor(`RANDOM`)     
        message.channel.send(Embed)
    }
}