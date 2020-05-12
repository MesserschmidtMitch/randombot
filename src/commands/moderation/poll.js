const Discord = require('discord.js')
module.exports={
    name: "poll",
    description: "Create a simple yes or no poll",
    category: "moderation",
    run: async(bot,message,args)=>{
        if(!message.member.permissions.has("MANAGE_MESSAGES"))return message.channel.send(`u dont have admin lol😂👌👌`)
        const channel = message.mentions.channels.first() ||message.guild.channels.cache.get(args[0])
        if(!channel){
            return message.channel.send(`You did not mention the channel(dont do id)`)
        }
        let question = message.content.split(`${bot.prefix}poll ${channel} `).join("")
        if(!question)return message.channel.send(`you did not specify your question :|`)
        const Embed = new Discord.MessageEmbed()
        .setTitle(`poll!`)
        .setDescription(`${question}`)
        .setFooter(`${message.author.username} created this poll.`)
        .setColor(`RANDOM`)
        let msg = await bot.channels.cache.get(channel.id).send(Embed)
        await msg.react("👍")
        await msg.react("👎")
    }
}