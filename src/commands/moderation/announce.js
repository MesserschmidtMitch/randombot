const {MessageEmbed} = require('discord.js')
module.exports={
    name: "announce",
    description: "Get the bot to say what ever you want in a specific channel.",
    usage: "<channel id> <msg>",
    category: "moderation",
    run: async(bot,message,args)=>{
        if(!message.member.permissions.has("MANAGE_CHANNELS"))return message.channel.send(`You do not have admin bruh :| stupid ${message.author.username}`)
        let rChannel = message.guild.channels.cache.get(args[0])
        if(!rChannel)return message.channel.send(`You did not specify your channel to send the announcement retard`)
        console.log(rChannel)
        let MSG = message.content.split(`${bot.prefix}announce ${rChannel.id} `).join("")
        if(!MSG)return message.channel.send(`You did not specify your message to send SHAKE MY HEAD`)
        const _ = new MessageEmbed()
        .setTitle(`I HAVE COME TO MAKE AN ANNOUNCEMENT`)
        .setDescription(`${MSG}`)
        .setColor('RANDOM')
        rChannel.send(_)
        message.delete()
    }
}