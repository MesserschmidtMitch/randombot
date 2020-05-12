const {MessageEmbed} = require('discord.js')
module.exports={
    name: "kick",
    description: "Kick a specified user from the server",
    category:"moderation",
    usage: "<user id> <reason>",
    run: async(bot,message,args)=>{
        if(!args[0])return message.channel.send(`specify who you wish to kick smh (Please give the user id or username)`)
        let User = message.guild.members.cache.get(args[0])
        if(!User)return message.channel.send(`he isnt in the server? try again`)
        let Reason = message.content.split(`!kick ${User.id} `)
        if(!args[1])return message.channel.send(`give me a reason to kick them bruh!!!`)
        if(!Reason) return message.channel.send(`give me a reason to kick them bruh!!!`)
        if(!User.kickable)return message.channel.send(`you can not kick this user, they may have a role higher then me or the same role as me.`)
        if(!message.member.permissions.has("KICK_MEMBERS"))return message.channel.send(`u dont HAVE KICk pERm SHAKE MY HEAD`)
        User.kick(Reason)
        const Embed = new MessageEmbed()
        .setTitle(`u kicked him`)
        .setDescription(`u have kicked ${bot.users.cache.get(User.id).username} from this server!`)
        .setColor(`RANDOM`) 
        message.channel.send(Embed)
    }
}