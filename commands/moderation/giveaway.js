const {MessageEmbed} = require('discord.js')
const ms = require('ms');
module.exports={
    name: 'giveaway',
    description: 'Create a simple giveaway',
    usage: '<time> <channel> <prize>',
    category: "moderation",
    run: async(bot,message,args)=>{
        if(!message.member.permissions.has("MANAGE_CHANNELS"))return message.channel.send(`imagine not having admin, ${message.author.username}`)
        if(!args[0]) return message.channel.send(`You did not specify your time!`)
        if(!args[0].endsWith("d")&&!args[0].endsWith("h")&&!args[0].endsWith("m")&&!args[0].endsWith("s")) return message.channel.send(`You did not use the correct formatting for the time!`)
        if(isNaN(args[0][0])) return message.channel.send(`that isnt a valid number try m(mins) h(hours) d(days)`)
        let channel = message.mentions.channels.first()
        if(!channel) return message.channel.send(`i could not find that channel`)
        let prize = args.slice(2).join(" ")
        if(!prize) return message.channel.send(`no prize specified!`)
        message.channel.send(`*Giveaway created in ${channel}*`)
        let Embed = new MessageEmbed()
        .setTitle(`**${prize}**`)
        .setDescription(`Hosted by: ${message.author}`)
        .setTimestamp(Date.now()+ms(args[0]))
        .setColor(`BLUE`)
        let m = await channel.send(Embed)
        m.react("🎉")
        setTimeout(() => {
            if(m.reactions.cache.get("🎉").count<=1){
                message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`)
                return message.channel.send(`Not enough people reacted for me to start draw a winner!`)
            }

            let winner = m.reactions.cache.get("🎉").users.cache.filter(u=>!u.bot).random()
            channel.send(`The winner of the giveaway for **${prize}** is... ${winner}`) 
        }, ms(args[0]));
    }
}